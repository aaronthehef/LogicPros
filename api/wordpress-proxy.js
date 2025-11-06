// Vercel Serverless Function to proxy WordPress API requests
// This handles CORS by making the request server-side

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type, X-Requested-With');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // WordPress configuration
  const WORDPRESS_SITE_URL = 'https://wordpressblog.logicpros.ca';
  const WORDPRESS_USERNAME = 'admin';
  const WORDPRESS_APP_PASSWORD = 'PmWS 6lyc gPhb jm7Y dq4Q ns5t';

  try {
    // Get the WordPress endpoint from query params
    const { endpoint, ...queryParams } = req.query;

    // If no endpoint is provided, try to extract from path
    let wpEndpoint = endpoint;

    if (!wpEndpoint) {
      // Default to posts endpoint if not specified
      wpEndpoint = '/wp/v2/posts';
    }

    // Build WordPress API URL
    // Use rest_route query parameter (required for some WordPress configurations)
    const wpUrl = new URL(WORDPRESS_SITE_URL);
    wpUrl.searchParams.set('rest_route', wpEndpoint);

    // Add additional query parameters
    Object.keys(queryParams).forEach(key => {
      wpUrl.searchParams.set(key, queryParams[key]);
    });

    // Prepare headers
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${Buffer.from(`${WORDPRESS_USERNAME}:${WORDPRESS_APP_PASSWORD}`).toString('base64')}`
    };

    // Prepare fetch options
    const fetchOptions = {
      method: req.method,
      headers: headers
    };

    // Add body for POST/PUT requests
    if (req.method === 'POST' || req.method === 'PUT') {
      fetchOptions.body = JSON.stringify(req.body);
    }

    // For DELETE requests, add force parameter to permanently delete
    if (req.method === 'DELETE') {
      wpUrl.searchParams.set('force', 'true');
    }

    console.log('Proxying request to:', wpUrl.toString());
    console.log('Request method:', req.method);
    console.log('Request endpoint:', wpEndpoint);

    // Make request to WordPress
    const wpResponse = await fetch(wpUrl.toString(), fetchOptions);

    // Handle both JSON and non-JSON responses
    const contentType = wpResponse.headers.get('content-type');
    let data;

    if (contentType && contentType.includes('application/json')) {
      data = await wpResponse.json();
    } else {
      const textData = await wpResponse.text();
      // Try to parse as JSON if it looks like JSON
      try {
        data = JSON.parse(textData);
      } catch {
        data = textData;
      }
    }

    console.log('WordPress response status:', wpResponse.status);
    console.log('WordPress response data:', JSON.stringify(data).substring(0, 200));

    // Return WordPress response
    res.status(wpResponse.status).json(data);

  } catch (error) {
    console.error('WordPress proxy error:', error);
    res.status(500).json({
      error: 'Failed to proxy WordPress request',
      message: error.message
    });
  }
}
