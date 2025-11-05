// WordPress API Service for publishing blog posts
import WORDPRESS_CONFIG, { getApiEndpoint, getAuthHeaders, getWordPressUrl } from '../config/wordpress';

/**
 * Publish a blog post to WordPress
 * @param {Object} postData - Blog post data
 * @param {string} postData.title - Post title
 * @param {string} postData.content - Post content
 * @param {string} postData.excerpt - Post excerpt
 * @param {string} postData.slug - Post slug
 * @param {Array} postData.tags - Array of tags
 * @param {string} postData.featuredImageUrl - Featured image URL
 * @param {string} postData.status - Post status ('publish', 'draft', etc.)
 * @returns {Promise<Object>} - WordPress post response
 */
export const publishPostToWordPress = async (postData) => {
  try {
    // Prepare WordPress post data
    const wordpressPost = {
      title: postData.title,
      content: postData.content,
      excerpt: postData.excerpt || '',
      slug: postData.slug || '',
      status: postData.status || 'publish',
      categories: [], // Can be extended later
      tags: postData.tags || [],
      featured_media: 0 // Will be updated if featured image is provided
    };

    // Handle featured image if URL is provided
    if (postData.featuredImageUrl) {
      try {
        const mediaId = await uploadFeaturedImage(postData.featuredImageUrl);
        if (mediaId) {
          wordpressPost.featured_media = mediaId;
        }
      } catch (imageError) {
        console.warn('Failed to upload featured image:', imageError);
        // Continue without featured image
      }
    }

    // Create the post
    const response = await fetch(getApiEndpoint('POSTS'), {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(wordpressPost)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || 
        `WordPress API error: ${response.status} ${response.statusText}`
      );
    }

    const createdPost = await response.json();
    
    return {
      success: true,
      post: createdPost,
      message: 'Post published successfully!'
    };

  } catch (error) {
    console.error('Error publishing to WordPress:', error);
    return {
      success: false,
      error: error.message,
      message: `Failed to publish post: ${error.message}`
    };
  }
};

/**
 * Upload featured image to WordPress media library
 * @param {string} imageUrl - URL of the image to upload
 * @returns {Promise<number|null>} - Media ID if successful, null otherwise
 */
export const uploadFeaturedImage = async (imageUrl) => {
  try {
    // First, fetch the image from the URL
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      throw new Error(`Failed to fetch image: ${imageResponse.statusText}`);
    }

    const imageBlob = await imageResponse.blob();
    const fileName = imageUrl.split('/').pop() || 'featured-image.jpg';
    
    // Create FormData for file upload
    const formData = new FormData();
    formData.append('file', imageBlob, fileName);
    
    // Upload to WordPress media library
    const mediaResponse = await fetch(getApiEndpoint('MEDIA'), {
      method: 'POST',
      headers: {
        'Authorization': getAuthHeaders().Authorization
        // Don't set Content-Type for FormData - browser will set it with boundary
      },
      body: formData
    });

    if (!mediaResponse.ok) {
      const errorData = await mediaResponse.json().catch(() => ({}));
      throw new Error(
        errorData.message || 
        `Media upload error: ${mediaResponse.status} ${mediaResponse.statusText}`
      );
    }

    const mediaData = await mediaResponse.json();
    return mediaData.id;

  } catch (error) {
    console.error('Error uploading featured image:', error);
    return null;
  }
};

/**
 * Test WordPress API connection
 * @returns {Promise<Object>} - Connection test result
 */
export const testWordPressConnection = async () => {
  try {
    const response = await fetch(getApiEndpoint('POSTS'), {
      method: 'GET',
      headers: getAuthHeaders()
    });

    if (!response.ok) {
      throw new Error(`Connection test failed: ${response.status} ${response.statusText}`);
    }

    return {
      success: true,
      message: 'WordPress API connection successful!'
    };

  } catch (error) {
    console.error('WordPress connection test failed:', error);
    return {
      success: false,
      error: error.message,
      message: `WordPress connection failed: ${error.message}`
    };
  }
};

/**
 * Update an existing WordPress post
 * @param {number} postId - WordPress post ID
 * @param {Object} postData - Updated post data
 * @returns {Promise<Object>} - Update result
 */
export const updateWordPressPost = async (postId, postData) => {
  try {
    const wordpressPost = {
      title: postData.title,
      content: postData.content,
      excerpt: postData.excerpt || '',
      slug: postData.slug || '',
      status: postData.status || 'publish',
      tags: postData.tags || []
    };

    const response = await fetch(`${getApiEndpoint('POSTS')}/${postId}`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(wordpressPost)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || 
        `WordPress update error: ${response.status} ${response.statusText}`
      );
    }

    const updatedPost = await response.json();
    
    return {
      success: true,
      post: updatedPost,
      message: 'Post updated successfully!'
    };

  } catch (error) {
    console.error('Error updating WordPress post:', error);
    return {
      success: false,
      error: error.message,
      message: `Failed to update post: ${error.message}`
    };
  }
};

/**
 * Delete a WordPress post
 * @param {number} postId - WordPress post ID
 * @returns {Promise<Object>} - Deletion result
 */
export const deleteWordPressPost = async (postId) => {
  try {
    const response = await fetch(`${getApiEndpoint('POSTS')}/${postId}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message ||
        `WordPress delete error: ${response.status} ${response.statusText}`
      );
    }

    // WordPress returns 200 OK with empty response for successful deletion
    return {
      success: true,
      message: 'Post deleted successfully from WordPress!'
    };

  } catch (error) {
    console.error('Error deleting WordPress post:', error);
    return {
      success: false,
      error: error.message,
      message: `Failed to delete post from WordPress: ${error.message}`
    };
  }
};

/**
 * Fetch all posts from WordPress
 * @param {Object} options - Fetch options
 * @param {number} options.perPage - Number of posts to fetch
 * @param {string} options.status - Post status ('publish', 'draft', etc.)
 * @param {string} options.search - Search term
 * @returns {Promise<Object>} - Fetch result
 */
export const fetchWordPressPosts = async (options = {}) => {
  try {
    const params = new URLSearchParams();

    // Add parameters
    if (options.perPage) params.append('per_page', options.perPage.toString());
    if (options.status) params.append('status', options.status);
    if (options.search) params.append('search', options.search);

    // Always embed featured media and author
    params.append('_embed', 'wp:featuredmedia,author');

    // Build URL using proper proxy method
    let url;
    if (process.env.NODE_ENV === 'production') {
      // For production, use the proxy with query parameters
      const queryString = params.toString();
      url = `/api/wordpress-proxy?endpoint=${encodeURIComponent('/wp/v2/posts')}&${queryString}`;
    } else {
      // For development, use direct WordPress URL
      const baseUrl = getWordPressUrl();
      const apiPath = WORDPRESS_CONFIG.API_ENDPOINTS.POSTS;
      const queryString = params.toString();
      url = `${baseUrl}${apiPath}&${queryString}`;
    }

    const response = await fetch(url, {
      method: 'GET',
      headers: getAuthHeaders()
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message ||
        `WordPress fetch error: ${response.status} ${response.statusText}`
      );
    }

    const posts = await response.json();
    
    return {
      success: true,
      posts: posts,
      message: `Successfully fetched ${posts.length} posts from WordPress!`
    };

  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return {
      success: false,
      error: error.message,
      message: `Failed to fetch posts from WordPress: ${error.message}`
    };
  }
};

export default {
  publishPostToWordPress,
  uploadFeaturedImage,
  testWordPressConnection,
  updateWordPressPost,
  deleteWordPressPost,
  fetchWordPressPosts
};