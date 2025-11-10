// LinkedIn OAuth 2.0 Authentication Handler
// Handles both authorization redirect and token exchange

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // LinkedIn OAuth credentials from environment variables
  const LINKEDIN_CLIENT_ID = process.env.LINKEDIN_CLIENT_ID;
  const LINKEDIN_CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET;
  const LINKEDIN_REDIRECT_URI = process.env.LINKEDIN_REDIRECT_URI || 'https://logicpros-contact-final.vercel.app/linkedin-callback.html';

  // Security check: Ensure credentials are configured
  if (!LINKEDIN_CLIENT_ID || !LINKEDIN_CLIENT_SECRET) {
    console.error('LinkedIn credentials not configured in environment variables');
    return res.status(500).json({
      error: 'Server configuration error',
      message: 'LinkedIn credentials not configured. Please set LINKEDIN_CLIENT_ID and LINKEDIN_CLIENT_SECRET in Vercel.'
    });
  }

  try {
    const { action, code, state, error, error_description } = req.query;

    // Handle OAuth error from LinkedIn
    if (error) {
      console.error('LinkedIn OAuth error:', error, error_description);
      return res.status(400).json({
        error: 'LinkedIn authorization failed',
        message: error_description || error
      });
    }

    // Action: initiate - Generate authorization URL
    if (action === 'initiate') {
      const authState = Math.random().toString(36).substring(7);
      // Note: w_organization_social requires LinkedIn approval - using personal posting for now
      const scope = 'openid profile w_member_social'; // Personal posting only

      const authUrl = new URL('https://www.linkedin.com/oauth/v2/authorization');
      authUrl.searchParams.set('response_type', 'code');
      authUrl.searchParams.set('client_id', LINKEDIN_CLIENT_ID);
      authUrl.searchParams.set('redirect_uri', LINKEDIN_REDIRECT_URI);
      authUrl.searchParams.set('scope', scope);
      authUrl.searchParams.set('state', authState);

      console.log('Generated LinkedIn authorization URL');
      return res.status(200).json({
        authUrl: authUrl.toString(),
        state: authState
      });
    }

    // Action: callback - Exchange authorization code for access token
    if (code) {
      console.log('Exchanging LinkedIn authorization code for access token');

      // Exchange code for access token
      const tokenResponse = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code: code,
          client_id: LINKEDIN_CLIENT_ID,
          client_secret: LINKEDIN_CLIENT_SECRET,
          redirect_uri: LINKEDIN_REDIRECT_URI
        })
      });

      if (!tokenResponse.ok) {
        const errorData = await tokenResponse.text();
        console.error('LinkedIn token exchange failed:', errorData);
        return res.status(400).json({
          error: 'Token exchange failed',
          message: errorData
        });
      }

      const tokenData = await tokenResponse.json();
      console.log('LinkedIn access token obtained successfully');

      // Get user profile information (including URN)
      const userInfoResponse = await fetch('https://api.linkedin.com/v2/userinfo', {
        headers: {
          'Authorization': `Bearer ${tokenData.access_token}`
        }
      });

      if (!userInfoResponse.ok) {
        const errorData = await userInfoResponse.text();
        console.error('LinkedIn userinfo request failed:', errorData);
        return res.status(400).json({
          error: 'Failed to get user info',
          message: errorData
        });
      }

      const userInfo = await userInfoResponse.json();
      console.log('LinkedIn user info obtained:', userInfo.name);

      // Get organizations the user can post to
      let organizations = [];
      try {
        const orgsResponse = await fetch('https://api.linkedin.com/v2/organizationAcls?q=roleAssignee&role=ADMINISTRATOR&projection=(elements*(organization~(localizedName,vanityName),organizationalTarget,roleAssignee,state))', {
          headers: {
            'Authorization': `Bearer ${tokenData.access_token}`,
            'LinkedIn-Version': '202210'
          }
        });

        if (orgsResponse.ok) {
          const orgsData = await orgsResponse.json();
          console.log('LinkedIn organizations data:', JSON.stringify(orgsData, null, 2));

          // Extract organization IDs and names
          if (orgsData.elements && orgsData.elements.length > 0) {
            organizations = orgsData.elements.map(element => {
              const orgUrn = element.organization;
              const orgId = orgUrn ? orgUrn.split(':').pop() : null;
              const orgName = element['organization~'] ? element['organization~'].localizedName : 'Unknown';

              return {
                id: orgId,
                urn: orgUrn,
                name: orgName
              };
            }).filter(org => org.id && org.urn);
          }

          console.log('Processed organizations:', organizations);
        } else {
          console.warn('Failed to fetch organizations, will default to personal profile');
        }
      } catch (orgError) {
        console.error('Error fetching organizations:', orgError);
        // Continue without organizations - will post to personal profile
      }

      // Return access token and user info to frontend
      return res.status(200).json({
        access_token: tokenData.access_token,
        expires_in: tokenData.expires_in, // 60 days
        refresh_token: tokenData.refresh_token,
        refresh_token_expires_in: tokenData.refresh_token_expires_in,
        userInfo: {
          sub: userInfo.sub, // User URN
          name: userInfo.name,
          email: userInfo.email,
          picture: userInfo.picture
        },
        organizations: organizations
      });
    }

    // No valid action
    return res.status(400).json({
      error: 'Invalid request',
      message: 'Please provide either action=initiate or an authorization code'
    });

  } catch (error) {
    console.error('LinkedIn auth error:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({
      error: 'LinkedIn authentication failed',
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
