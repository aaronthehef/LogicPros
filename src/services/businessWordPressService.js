// Business-specific WordPress service for multi-tenant architecture
import { 
  getDoc, 
  doc, 
  collection, 
  addDoc, 
  serverTimestamp 
} from '../firebase';

/**
 * Business WordPress Service - handles WordPress operations for specific businesses
 */
export class BusinessWordPressService {
  constructor(businessId) {
    this.businessId = businessId;
    this.wordpressConfig = null;
  }

  /**
   * Initialize WordPress configuration for business
   */
  async initializeWordPressConfig() {
    try {
      const businessDoc = await getDoc(doc(db, 'businesses', this.businessId));
      if (!businessDoc.exists()) {
        throw new Error('Business not found');
      }

      const businessData = businessDoc.data();
      this.wordpressConfig = businessData.wordpressConfig;

      if (!this.wordpressConfig || !this.wordpressConfig.siteUrl) {
        throw new Error('WordPress not configured for this business');
      }

      return this.wordpressConfig;
    } catch (error) {
      console.error('Error initializing WordPress config:', error);
      throw error;
    }
  }

  /**
   * Get WordPress API endpoint for business
   */
  getApiEndpoint(endpoint) {
    if (!this.wordpressConfig) {
      throw new Error('WordPress configuration not loaded');
    }

    const baseUrl = this.wordpressConfig.siteUrl.replace(/\/$/, '');
    const endpoints = {
      POSTS: '/wp-json/wp/v2/posts',
      PAGES: '/wp-json/wp/v2/pages',
      MEDIA: '/wp-json/wp/v2/media',
      CATEGORIES: '/wp-json/wp/v2/categories',
      TAGS: '/wp-json/wp/v2/tags'
    };

    return `${baseUrl}${endpoints[endpoint]}`;
  }

  /**
   * Get authentication headers for business WordPress
   */
  getAuthHeaders() {
    if (!this.wordpressConfig || !this.wordpressConfig.username || !this.wordpressConfig.appPassword) {
      throw new Error('WordPress credentials not configured');
    }

    const credentials = btoa(`${this.wordpressConfig.username}:${this.wordpressConfig.appPassword}`);
    return {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/json'
    };
  }

  /**
   * Publish a blog post to business WordPress
   */
  async publishPost(postData) {
    await this.initializeWordPressConfig();

    try {
      const wordpressPost = {
        title: postData.title,
        content: postData.content,
        excerpt: postData.excerpt || '',
        slug: postData.slug || '',
        status: postData.status || 'publish',
        categories: this.wordpressConfig.categories || [],
        tags: postData.tags || [],
        featured_media: 0,
        author: this.wordpressConfig.defaultAuthor || 1
      };

      // Handle featured image if URL is provided
      if (postData.featuredImageUrl) {
        try {
          const mediaId = await this.uploadFeaturedImage(postData.featuredImageUrl);
          if (mediaId) {
            wordpressPost.featured_media = mediaId;
          }
        } catch (imageError) {
          console.warn('Failed to upload featured image:', imageError);
        }
      }

      const response = await fetch(this.getApiEndpoint('POSTS'), {
        method: 'POST',
        headers: this.getAuthHeaders(),
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
      
      // Log the publication to business analytics
      await this.logWordPressEvent('post_published', {
        postId: createdPost.id,
        title: postData.title,
        status: postData.status
      });
      
      return {
        success: true,
        post: createdPost,
        message: 'Post published successfully!'
      };

    } catch (error) {
      console.error('Error publishing to WordPress:', error);
      
      // Log the error
      await this.logWordPressEvent('post_publish_failed', {
        title: postData.title,
        error: error.message
      });
      
      return {
        success: false,
        error: error.message,
        message: `Failed to publish post: ${error.message}`
      };
    }
  }

  /**
   * Upload featured image to business WordPress media library
   */
  async uploadFeaturedImage(imageUrl) {
    await this.initializeWordPressConfig();

    try {
      const imageResponse = await fetch(imageUrl);
      if (!imageResponse.ok) {
        throw new Error(`Failed to fetch image: ${imageResponse.statusText}`);
      }

      const imageBlob = await imageResponse.blob();
      const fileName = imageUrl.split('/').pop() || 'featured-image.jpg';
      
      const formData = new FormData();
      formData.append('file', imageBlob, fileName);
      
      const mediaResponse = await fetch(this.getApiEndpoint('MEDIA'), {
        method: 'POST',
        headers: {
          'Authorization': this.getAuthHeaders().Authorization
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
  }

  /**
   * Update an existing WordPress post
   */
  async updatePost(postId, postData) {
    await this.initializeWordPressConfig();

    try {
      const wordpressPost = {
        title: postData.title,
        content: postData.content,
        excerpt: postData.excerpt || '',
        slug: postData.slug || '',
        status: postData.status || 'publish',
        tags: postData.tags || []
      };

      const response = await fetch(`${this.getApiEndpoint('POSTS')}/${postId}`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
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
      
      await this.logWordPressEvent('post_updated', {
        postId: postId,
        title: postData.title
      });
      
      return {
        success: true,
        post: updatedPost,
        message: 'Post updated successfully!'
      };

    } catch (error) {
      console.error('Error updating WordPress post:', error);
      
      await this.logWordPressEvent('post_update_failed', {
        postId: postId,
        error: error.message
      });
      
      return {
        success: false,
        error: error.message,
        message: `Failed to update post: ${error.message}`
      };
    }
  }

  /**
   * Delete a WordPress post
   */
  async deletePost(postId) {
    await this.initializeWordPressConfig();

    try {
      const response = await fetch(`${this.getApiEndpoint('POSTS')}/${postId}`, {
        method: 'DELETE',
        headers: this.getAuthHeaders()
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message ||
          `WordPress delete error: ${response.status} ${response.statusText}`
        );
      }

      await this.logWordPressEvent('post_deleted', {
        postId: postId
      });
      
      return {
        success: true,
        message: 'Post deleted successfully from WordPress!'
      };

    } catch (error) {
      console.error('Error deleting WordPress post:', error);
      
      await this.logWordPressEvent('post_delete_failed', {
        postId: postId,
        error: error.message
      });
      
      return {
        success: false,
        error: error.message,
        message: `Failed to delete post from WordPress: ${error.message}`
      };
    }
  }

  /**
   * Fetch posts from business WordPress
   */
  async fetchPosts(options = {}) {
    await this.initializeWordPressConfig();

    try {
      const params = new URLSearchParams();
      
      if (options.perPage) params.append('per_page', options.perPage.toString());
      if (options.status) params.append('status', options.status);
      if (options.search) params.append('search', options.search);
      params.append('_embed', 'wp:featuredmedia,author');
      
      const url = `${this.getApiEndpoint('POSTS')}?${params.toString()}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: this.getAuthHeaders()
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
  }

  /**
   * Test WordPress connection for business
   */
  async testConnection() {
    try {
      await this.initializeWordPressConfig();
      
      const response = await fetch(this.getApiEndpoint('POSTS'), {
        method: 'GET',
        headers: this.getAuthHeaders()
      });

      if (!response.ok) {
        throw new Error(`Connection test failed: ${response.status} ${response.statusText}`);
      }

      await this.logWordPressEvent('connection_tested', {
        success: true
      });

      return {
        success: true,
        message: 'WordPress API connection successful!'
      };

    } catch (error) {
      console.error('WordPress connection test failed:', error);
      
      await this.logWordPressEvent('connection_tested', {
        success: false,
        error: error.message
      });

      return {
        success: false,
        error: error.message,
        message: `WordPress connection failed: ${error.message}`
      };
    }
  }

  /**
   * Log WordPress events to business analytics
   */
  async logWordPressEvent(action, details = {}) {
    try {
      const logEntry = {
        type: 'wordpress_activity',
        action: action,
        details: {
          ...details,
          businessId: this.businessId
        },
        generatedAt: serverTimestamp()
      };

      await addDoc(
        collection(db, 'businesses', this.businessId, 'analytics'), 
        logEntry
      );
    } catch (error) {
      console.error('Error logging WordPress event:', error);
    }
  }

  /**
   * Get WordPress usage statistics for business
   */
  async getUsageStats(dateRange = '30d') {
    try {
      // This would typically query the analytics collection
      // For now, return basic stats
      return {
        postsPublished: 0,
        imagesUploaded: 0,
        lastActivity: null,
        connectionStatus: 'unknown'
      };
    } catch (error) {
      console.error('Error getting usage stats:', error);
      return {
        postsPublished: 0,
        imagesUploaded: 0,
        lastActivity: null,
        connectionStatus: 'error'
      };
    }
  }
}

/**
 * Factory function to create business WordPress service
 */
export const createBusinessWordPressService = (businessId) => {
  return new BusinessWordPressService(businessId);
};

/**
 * Global WordPress service manager
 */
export class WordPressServiceManager {
  constructor() {
    this.services = new Map(); // businessId -> BusinessWordPressService
  }

  /**
   * Get or create WordPress service for business
   */
  getService(businessId) {
    if (!this.services.has(businessId)) {
      this.services.set(businessId, new BusinessWordPressService(businessId));
    }
    return this.services.get(businessId);
  }

  /**
   * Clear service cache for business
   */
  clearService(businessId) {
    this.services.delete(businessId);
  }

  /**
   * Clear all services
   */
  clearAllServices() {
    this.services.clear();
  }
}

// Create singleton instance
export const wordPressServiceManager = new WordPressServiceManager();

export default {
  BusinessWordPressService,
  createBusinessWordPressService,
  wordPressServiceManager
};