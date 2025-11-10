// Test endpoint to check what environment variables Vercel sees
// Updated: Comprehensive environment variable debugging
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Get all environment variable keys
  const allKeys = Object.keys(process.env);

  // Check for any keys that might contain 'WORD' or 'USER' or 'PASS'
  const wordpressKeys = allKeys.filter(k => k.toUpperCase().includes('WORD'));
  const userKeys = allKeys.filter(k => k.toUpperCase().includes('USER'));
  const passKeys = allKeys.filter(k => k.toUpperCase().includes('PASS'));

  // Show ALL environment variable names (for debugging ONLY - remove after fixing)
  const allEnvVarNames = allKeys.sort();

  const envCheck = {
    // Exact checks
    WORDPRESS_SITE_URL: process.env.WORDPRESS_SITE_URL ? 'SET' : 'NOT SET',
    WORDPRESS_USERNAME: process.env.WORDPRESS_USERNAME ? 'SET' : 'NOT SET',
    WORDPRESS_APP_PASSWORD: process.env.WORDPRESS_APP_PASSWORD ? 'SET' : 'NOT SET',

    // Values (first 5 chars only for security)
    WORDPRESS_SITE_URL_value: process.env.WORDPRESS_SITE_URL ? process.env.WORDPRESS_SITE_URL.substring(0, 20) + '...' : null,
    WORDPRESS_USERNAME_value: process.env.WORDPRESS_USERNAME ? process.env.WORDPRESS_USERNAME.substring(0, 3) + '...' : null,
    WORDPRESS_APP_PASSWORD_value: process.env.WORDPRESS_APP_PASSWORD ? 'SET (length: ' + process.env.WORDPRESS_APP_PASSWORD.length + ')' : null,

    // Metadata
    NODE_ENV: process.env.NODE_ENV,
    totalEnvVars: allKeys.length,

    // Fuzzy search results
    keysContainingWORD: wordpressKeys,
    keysContainingUSER: userKeys,
    keysContainingPASS: passKeys,

    // ALL environment variable names (for debugging)
    allEnvVarNames: allEnvVarNames,

    timestamp: new Date().toISOString()
  };

  res.status(200).json(envCheck);
}
