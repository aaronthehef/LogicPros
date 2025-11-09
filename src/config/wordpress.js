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
  // In production, use Vercel proxy
  if (process.env.NODE_ENV === 'production') {
    return '/api/wordpress-proxy';
  }
  // In development, use direct WordPress URL
  return WORDPRESS_CONFIG.SITE_URL;
};

export const getApiEndpoint = (endpoint) => {
  const baseUrl = getWordPressUrl();
  const apiPath = WORDPRESS_CONFIG.API_ENDPOINTS[endpoint];

  // For production proxy, convert to proxy format
  if (process.env.NODE_ENV === 'production') {
    const match = apiPath.match(/rest_route=([^&]+)/);
    if (match) {
      return `${baseUrl}?endpoint=${encodeURIComponent(match[1])}`;
    }
  }

  // For development, use direct WordPress API URL
  return `${baseUrl}${apiPath}`;
};

export const getAuthHeaders = () => {
  const credentials = btoa(`${WORDPRESS_CONFIG.USERNAME}:${WORDPRESS_CONFIG.APP_PASSWORD}`);
  return {
    'Authorization': `Basic ${credentials}`,
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