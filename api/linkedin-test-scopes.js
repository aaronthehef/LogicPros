// Test endpoint to see which LinkedIn scopes are actually available
// This will help us understand what permissions your app has

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const LINKEDIN_CLIENT_ID = process.env.LINKEDIN_CLIENT_ID;
  const LINKEDIN_REDIRECT_URI = process.env.LINKEDIN_REDIRECT_URI || 'https://logicpros-contact-final.vercel.app/linkedin-callback.html';

  // Test different scope combinations
  const scopeTests = [
    {
      name: 'Personal posting only',
      scopes: 'openid profile email w_member_social'
    },
    {
      name: 'With organization read',
      scopes: 'openid profile email w_member_social r_organization_admin'
    },
    {
      name: 'With organization write',
      scopes: 'openid profile email w_member_social w_organization_social'
    },
    {
      name: 'Full organization access',
      scopes: 'openid profile email w_member_social r_organization_admin w_organization_social'
    }
  ];

  const results = scopeTests.map(test => {
    const authUrl = new URL('https://www.linkedin.com/oauth/v2/authorization');
    authUrl.searchParams.set('response_type', 'code');
    authUrl.searchParams.set('client_id', LINKEDIN_CLIENT_ID);
    authUrl.searchParams.set('redirect_uri', LINKEDIN_REDIRECT_URI);
    authUrl.searchParams.set('scope', test.scopes);
    authUrl.searchParams.set('state', 'test');

    return {
      name: test.name,
      scopes: test.scopes,
      authUrl: authUrl.toString(),
      note: 'Try this URL - if it errors immediately, those scopes are not available'
    };
  });

  res.status(200).json({
    message: 'LinkedIn Scope Test Results',
    clientId: LINKEDIN_CLIENT_ID,
    redirectUri: LINKEDIN_REDIRECT_URI,
    scopeTests: results,
    instructions: [
      '1. Copy one of the authUrl values below',
      '2. Paste it in your browser',
      '3. If LinkedIn shows you a permission screen = those scopes are available',
      '4. If you get an error immediately = those scopes are NOT available for your app'
    ]
  });
}
