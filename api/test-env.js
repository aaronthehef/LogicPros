// Test endpoint to check what environment variables Vercel sees
// Updated: Force fresh deployment to pick up environment variables
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const envCheck = {
    WORDPRESS_SITE_URL: process.env.WORDPRESS_SITE_URL ? 'SET' : 'NOT SET',
    WORDPRESS_USERNAME: process.env.WORDPRESS_USERNAME ? 'SET' : 'NOT SET',
    WORDPRESS_APP_PASSWORD: process.env.WORDPRESS_APP_PASSWORD ? 'SET' : 'NOT SET',
    NODE_ENV: process.env.NODE_ENV,
    allEnvKeys: Object.keys(process.env).filter(k => k.includes('WORDPRESS')),
    timestamp: new Date().toISOString()
  };

  res.status(200).json(envCheck);
}
