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

    // Check if this is a media upload
    const isMediaUpload = wpEndpoint.includes('/media') && actualMethod === 'POST';
    const requestContentType = req.headers['content-type'] || '';
    const isFormData = requestContentType.includes('multipart/form-data');

    // If DELETE is requested, use POST with X-HTTP-Method-Override header
    // This works around nginx blocking DELETE requests
    let requestMethod = actualMethod;
    const headers = {
      'Authorization': `Basic ${Buffer.from(`${WORDPRESS_USERNAME}:${WORDPRESS_APP_PASSWORD}`).toString('base64')}`
    };

    if (actualMethod === 'DELETE') {
      requestMethod = 'POST';
      headers['X-HTTP-Method-Override'] = 'DELETE';
    }

    // Prepare fetch options
    const fetchOptions = {
      method: requestMethod,
      headers: headers
    };

    // Handle media upload with base64 image
    if (isMediaUpload && req.body && req.body.file) {
      console.log('Handling base64 image upload');
      console.log('File name:', req.body.fileName);
      console.log('MIME type:', req.body.mimeType);

      // Convert base64 to Buffer
      const imageBuffer = Buffer.from(req.body.file, 'base64');
      console.log('Image buffer size:', imageBuffer.length, 'bytes');

      // Create FormData with the image
      const FormData = require('form-data');
      const formData = new FormData();

      // Append the buffer as a file with proper options
      formData.append('file', imageBuffer, {
        filename: req.body.fileName,
        contentType: req.body.mimeType,
        knownLength: imageBuffer.length
      });

      // Update fetch options with FormData
      fetchOptions.body = formData;

      // Merge FormData headers (includes Content-Type with boundary)
      const formHeaders = formData.getHeaders();
      Object.keys(formHeaders).forEach(key => {
        headers[key] = formHeaders[key];
      });

      console.log('FormData headers:', formHeaders);
    }
    // Add body for POST/PUT requests (but not for overridden DELETE or media uploads)
    else if ((actualMethod === 'POST' || actualMethod === 'PUT') && actualMethod !== 'DELETE') {
      if (req.body && !isFormData && !isMediaUpload) {
        // For JSON requests, stringify the body (req.body is already parsed by Vercel)
        fetchOptions.body = JSON.stringify(req.body);
        headers['Content-Type'] = 'application/json';
      }
    }
    // For non-POST/PUT requests, set Content-Type for JSON
    else if (!isMediaUpload) {
      headers['Content-Type'] = 'application/json';
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
