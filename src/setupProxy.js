// Development proxy for WordPress API
// This file is automatically loaded by Create React App in development mode
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  console.log('🔧 setupProxy.js loaded - WordPress proxy active');

  // Proxy /api/wordpress-proxy requests to WordPress REST API
  const proxy = createProxyMiddleware({
    target: 'https://wordpressblog.logicpros.ca',
    changeOrigin: true,
    secure: true,
    pathRewrite: function(path, req) {
      // Extract endpoint from query parameter
      const url = new URL(req.url, 'http://localhost');
      const endpoint = url.searchParams.get('endpoint');

      console.log('📝 Proxy request:', {
        originalPath: path,
        endpoint: endpoint,
        method: req.method
      });

      if (endpoint) {
        // Build WordPress REST API path with rest_route parameter
        const params = new URLSearchParams(url.searchParams);
        params.delete('endpoint'); // Remove our custom parameter
        params.set('rest_route', endpoint);

        // For DELETE requests, add force=true to permanently delete
        if (req.method === 'DELETE') {
          params.set('force', 'true');
        }

        const queryString = params.toString();
        const newPath = `/?${queryString}`;

        console.log('🔄 Rewritten path:', newPath);
        return newPath;
      }

      return path;
    },
    on: {
      proxyReq: (proxyReq, req, res) => {
        console.log('🔐 onProxyReq callback fired!');

        // Remove any client-sent Authorization header
        proxyReq.removeHeader('Authorization');

        // Add correct WordPress authentication using exact base64 from working curl
        const correctAuth = 'YWRtaW46U2NxMiAzM0FEIHFRR0YgVzN5RCBHUkx5IDJNODg=';
        proxyReq.setHeader('Authorization', `Basic ${correctAuth}`);

        // Handle DELETE requests (nginx blocks DELETE, so use POST with override header)
        if (req.method === 'DELETE') {
          proxyReq.method = 'POST';
          proxyReq.setHeader('X-HTTP-Method-Override', 'DELETE');
          console.log('🗑️ DELETE converted to POST with X-HTTP-Method-Override');
        }

        console.log('🔐 Auth header set for WordPress');
        console.log('🔐 Method:', req.method, '→', proxyReq.method);

        // For POST/PUT requests with a body, we need to handle it
        if ((req.method === 'POST' || req.method === 'PUT') && req.body) {
          const bodyData = JSON.stringify(req.body);
          proxyReq.setHeader('Content-Type', 'application/json');
          proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
          proxyReq.write(bodyData);
          console.log('📦 Body forwarded:', bodyData.substring(0, 100));
        }
      },
      proxyRes: (proxyRes, req, res) => {
        console.log('✅ WordPress response:', proxyRes.statusCode);
      },
      error: (err, req, res) => {
        console.error('❌ Proxy error:', err.message);
      }
    },
    logLevel: 'debug'
  });

  app.use('/api/wordpress-proxy', proxy);

  console.log('✅ WordPress proxy middleware registered for /api/wordpress-proxy');
};
