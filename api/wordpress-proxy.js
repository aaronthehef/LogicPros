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
    console.log('WordPress proxy called with method:', req.method);
    console.log('Query params:', req.query);
    console.log('Headers:', req.headers);

    // Get the WordPress endpoint from query params
    const { endpoint, _method, ...queryParams } = req.query;

    // If no endpoint is provided, try to extract from path
    let wpEndpoint = endpoint;

    if (!wpEndpoint) {
      // Default to posts endpoint if not specified
      wpEndpoint = '/wp/v2/posts';
    }

    // Handle method override for DELETE (Vercel may block DELETE requests)
    let actualMethod = req.method;
    if (_method && req.method === 'POST') {
      actualMethod = _method.toUpperCase();
    }

    // Build WordPress API URL
    // Use rest_route query parameter (required for some WordPress configurations)
    const wpUrl = new URL(WORDPRESS_SITE_URL);
    wpUrl.searchParams.set('rest_route', wpEndpoint);

    // Add additional query parameters
    Object.keys(queryParams).forEach(key => {
      wpUrl.searchParams.set(key, queryParams[key]);
    });

    // Check if this is a media upload (FormData)
    const isMediaUpload = wpEndpoint.includes('/media') && actualMethod === 'POST';
    const contentType = req.headers['content-type'] || '';
    const isFormData = contentType.includes('multipart/form-data');

    // Prepare headers
    const headers = {
      'Authorization': `Basic ${Buffer.from(`${WORDPRESS_USERNAME}:${WORDPRESS_APP_PASSWORD}`).toString('base64')}`
    };

    // Only add Content-Type for JSON requests (not FormData)
    if (!isFormData && !isMediaUpload) {
      headers['Content-Type'] = 'application/json';
    }

    // If DELETE is requested, use POST with X-HTTP-Method-Override header
    // This works around nginx blocking DELETE requests
    let requestMethod = actualMethod;
    if (actualMethod === 'DELETE') {
      requestMethod = 'POST';
      headers['X-HTTP-Method-Override'] = 'DELETE';
    }

    // Prepare fetch options
    const fetchOptions = {
      method: requestMethod,
      headers: headers
    };

    // Add body for POST/PUT requests (but not for overridden DELETE)
    if ((actualMethod === 'POST' || actualMethod === 'PUT') && actualMethod !== 'DELETE') {
      if (isFormData || isMediaUpload) {
        // For FormData/media uploads, pass the raw body from the request
        // In Vercel, req is the raw Node.js request object for multipart data
        fetchOptions.body = req;
      } else if (req.body) {
        // For JSON requests, stringify the body (req.body is already parsed by Vercel)
        fetchOptions.body = JSON.stringify(req.body);
      }
    }

    // For DELETE requests, add force parameter to permanently delete
    if (actualMethod === 'DELETE') {
      wpUrl.searchParams.set('force', 'true');
    }

    console.log('Proxying request to:', wpUrl.toString());
    console.log('Original method:', req.method);
    console.log('Actual method:', actualMethod);
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
    console.error('Error stack:', error.stack);
    res.status(500).json({
      error: 'Failed to proxy WordPress request',
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
