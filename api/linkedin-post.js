// LinkedIn Post Publishing Handler
// Posts content to LinkedIn using the ugcPosts API

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
      message: 'Only POST requests are supported'
    });
  }

  try {
    const { access_token, userSub, content, visibility = 'PUBLIC' } = req.body;

    // Validation
    if (!access_token) {
      return res.status(400).json({
        error: 'Missing access token',
        message: 'Please provide a LinkedIn access token'
      });
    }

    if (!userSub) {
      return res.status(400).json({
        error: 'Missing user URN',
        message: 'Please provide the user URN (sub from userinfo)'
      });
    }

    if (!content) {
      return res.status(400).json({
        error: 'Missing content',
        message: 'Please provide post content'
      });
    }

    console.log('Posting to LinkedIn for user:', userSub);
    console.log('Post content length:', content.length);

    // Escape double quotes in content to prevent JSON parsing errors
    const escapedContent = content.replace(/"/g, '\\"');

    // Build LinkedIn ugcPost payload
    const postPayload = {
      author: `urn:li:person:${userSub}`,
      lifecycleState: 'PUBLISHED',
      specificContent: {
        'com.linkedin.ugc.ShareContent': {
          shareCommentary: {
            text: escapedContent
          },
          shareMediaCategory: 'NONE'
        }
      },
      visibility: {
        'com.linkedin.ugc.MemberNetworkVisibility': visibility
      }
    };

    // Post to LinkedIn ugcPosts API
    const response = await fetch('https://api.linkedin.com/v2/ugcPosts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json',
        'LinkedIn-Version': '202210',
        'X-Restli-Protocol-Version': '2.0.0'
      },
      body: JSON.stringify(postPayload)
    });

    // Handle response
    const responseText = await response.text();
    let responseData;

    try {
      responseData = JSON.parse(responseText);
    } catch {
      responseData = responseText;
    }

    if (!response.ok) {
      console.error('LinkedIn API error:', response.status, responseData);
      return res.status(response.status).json({
        error: 'LinkedIn post failed',
        message: responseData?.message || responseData,
        status: response.status
      });
    }

    console.log('LinkedIn post published successfully');
    console.log('Post ID:', responseData.id);

    return res.status(200).json({
      success: true,
      postId: responseData.id,
      message: 'Post published to LinkedIn successfully',
      data: responseData
    });

  } catch (error) {
    console.error('LinkedIn post error:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({
      error: 'Failed to post to LinkedIn',
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
