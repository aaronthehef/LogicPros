// WordPress Configuration
// Update these values with your WordPress site credentials
// IMPORTANT: Copy wordpress.example.js to wordpress.js and update with your actual credentials

const WORDPRESS_CONFIG = {
  // Your WordPress site URL
  SITE_URL: process.env.REACT_APP_WORDPRESS_SITE_URL || 'https://wordpressblog.logicpros.ca',
  
  // WordPress username (with API access)
  USERNAME: process.env.REACT_APP_WORDPRESS_USERNAME,

  // WordPress Application Password (NOT your regular password)
  // Generate this in WordPress admin: Users → Profile → Application Passwords
  APP_PASSWORD: process.env.REACT_APP_WORDPRESS_APP_PASSWORD,
  
  // API endpoints - using REST route parameter for better compatibility
  API_ENDPOINTS: {
    POSTS: '?rest_route=/wp/v2/posts',
    PAGES: '?rest_route=/wp/v2/pages',
    MEDIA: '?rest_route=/wp/v2/media',
    CATEGORIES: '?rest_route=/wp/v2/categories',
    TAGS: '?rest_route=/wp/v2/tags'
  },
  
  // Display settings
  DISPLAY: {
    POSTS_PER_PAGE: 10,
    EXCERPT_LENGTH: 150,
    FEATURED_IMAGE_SIZE: 'medium'
  }
};

// Helper functions
export const getWordPressUrl = () => {
  // Always use the proxy endpoint (works in both dev and production)
  // In development, setupProxy.js handles the routing
  // In production, Vercel serverless function handles it
  return '/api/wordpress-proxy';
};

export const getApiEndpoint = (endpoint) => {
  const baseUrl = getWordPressUrl();
  const apiPath = WORDPRESS_CONFIG.API_ENDPOINTS[endpoint];

  // Extract the rest_route value from API_ENDPOINTS
  const match = apiPath.match(/rest_route=([^&]+)/);
  if (match) {
    // Use proxy format with endpoint parameter
    return `${baseUrl}?endpoint=${encodeURIComponent(match[1])}`;
  }

  // Fallback for non-standard endpoints
  return `${baseUrl}?endpoint=${encodeURIComponent(apiPath)}`;
};

export const getAuthHeaders = () => {
  // DO NOT send Authorization from client - let the proxy handle it
  // The setupProxy.js (dev) or Vercel function (prod) will add the correct auth
  return {
    'Content-Type': 'application/json'
  };
};

export const formatPostData = (post) => {
  // Handle featured media from _embed
  let featuredMediaUrl = null;
  if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0) {
    featuredMediaUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }
  
  return {
    id: post.id,
    title: post.title.rendered,
    content: post.content.rendered,
    excerpt: post.excerpt.rendered,
    date: post.date,
    modified: post.modified,
    slug: post.slug,
    link: post.link,
    featuredMedia: featuredMediaUrl,
    categories: post.categories,
    tags: post.tags,
    author: post.author,
    status: post.status
  };
};

export const truncateText = (text, maxLength = WORDPRESS_CONFIG.DISPLAY.EXCERPT_LENGTH) => {
  if (!text) return '';
  const cleanText = text.replace(/<[^>]*>/g, ''); // Remove HTML tags
  return cleanText.length > maxLength 
    ? cleanText.substring(0, maxLength) + '...' 
    : cleanText;
};

export default WORDPRESS_CONFIG;