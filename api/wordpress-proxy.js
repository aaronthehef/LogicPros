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

    if (!endpoint) {
      return res.status(400).json({ error: 'Missing endpoint parameter' });
    }

    // Build WordPress API URL
    const wpUrl = new URL(WORDPRESS_SITE_URL);
    wpUrl.searchParams.set('rest_route', endpoint);

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

    console.log('Proxying request to:', wpUrl.toString());

    // Make request to WordPress
    const wpResponse = await fetch(wpUrl.toString(), fetchOptions);
    const data = await wpResponse.json();

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
