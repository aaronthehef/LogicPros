// WordPress Configuration Example
// Copy this file to wordpress.js and update with your actual credentials

const WORDPRESS_CONFIG = {
  // Your WordPress site URL
  SITE_URL: 'https://your-wordpress-site.com',
  
  // WordPress username (with API access)
  USERNAME: 'your-username',
  
  // WordPress Application Password (NOT your regular password)
  // Generate this in WordPress admin: Users → Profile → Application Passwords
  APP_PASSWORD: 'your-application-password',
  
  // API endpoints
  API_ENDPOINTS: {
    POSTS: '/wp-json/wp/v2/posts',
    PAGES: '/wp-json/wp/v2/pages',
    MEDIA: '/wp-json/wp/v2/media',
    CATEGORIES: '/wp-json/wp/v2/categories',
    TAGS: '/wp-json/wp/v2/tags'
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
  return WORDPRESS_CONFIG.SITE_URL.replace(/\/$/, '');
};

export const getApiEndpoint = (endpoint) => {
  const baseUrl = getWordPressUrl();
  return `${baseUrl}${WORDPRESS_CONFIG.API_ENDPOINTS[endpoint]}`;
};

export const getAuthHeaders = () => {
  const credentials = btoa(`${WORDPRESS_CONFIG.USERNAME}:${WORDPRESS_CONFIG.APP_PASSWORD}`);
  return {
    'Authorization': `Basic ${credentials}`,
    'Content-Type': 'application/json'
  };
};

export const formatPostData = (post) => {
  return {
    id: post.id,
    title: post.title.rendered,
    content: post.content.rendered,
    excerpt: post.excerpt.rendered,
    date: post.date,
    modified: post.modified,
    slug: post.slug,
    link: post.link,
    featuredMedia: post.featured_media,
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