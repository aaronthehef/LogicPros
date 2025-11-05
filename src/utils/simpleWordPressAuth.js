// Simple WordPress Authentication Utility
// For securely storing WordPress API credentials locally

class SimpleWordPressAuth {
  constructor() {
    this.storageKey = 'wordpress_credentials';
    this.initStorage();
  }

  // Initialize localStorage
  initStorage() {
    if (typeof window !== 'undefined' && !window.wpAuthStorage) {
      window.wpAuthStorage = {
        set: (key, value) => {
          try {
            localStorage.setItem(key, JSON.stringify(value));
          } catch (error) {
            console.error('Error storing credentials:', error);
          }
        },
        get: (key) => {
          try {
            const stored = localStorage.getItem(key);
            if (!stored) return null;
            return JSON.parse(stored);
          } catch (error) {
            console.error('Error retrieving credentials:', error);
            return null;
          }
        },
        remove: (key) => {
          try {
            localStorage.removeItem(key);
          } catch (error) {
            console.error('Error removing credentials:', error);
          }
        }
      };
    }
  }

  // Store WordPress credentials
  setCredentials(siteUrl, username, password) {
    const credentials = {
      siteUrl: this.sanitizeUrl(siteUrl),
      username: username,
      password: password,
      timestamp: Date.now()
    };

    try {
      window.wpAuthStorage.set(this.storageKey, credentials);
      return true;
    } catch (error) {
      console.error('Failed to store credentials:', error);
      return false;
    }
  }

  // Retrieve stored credentials
  getCredentials() {
    try {
      const credentials = window.wpAuthStorage.get(this.storageKey);
      if (!credentials) return null;

      // Validate credentials are not too old (24 hours)
      const maxAge = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
      if (Date.now() - credentials.timestamp > maxAge) {
        this.clearCredentials();
        return null;
      }

      return credentials;
    } catch (error) {
      console.error('Failed to retrieve credentials:', error);
      return null;
    }
  }

  // Clear stored credentials
  clearCredentials() {
    try {
      window.wpAuthStorage.remove(this.storageKey);
    } catch (error) {
      console.error('Failed to clear credentials:', error);
    }
  }

  // Validate credentials against WordPress site
  async validateCredentials(siteUrl, username, password) {
    try {
      const response = await fetch(`${this.sanitizeUrl(siteUrl)}/wp-json/wp/v2/users/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const userData = await response.json();
        return {
          valid: true,
          userData: userData
        };
      } else {
        return {
          valid: false,
          error: 'Invalid credentials'
        };
      }
    } catch (error) {
      console.error('Validation error:', error);
      return {
        valid: false,
        error: error.message
      };
    }
  }

  // Sanitize URL
  sanitizeUrl(url) {
    // Remove trailing slash and ensure proper format
    return url.replace(/\/$/, '');
  }

  // Check if credentials are stored
  hasStoredCredentials() {
    return this.getCredentials() !== null;
  }

  // Get stored site URL
  getStoredSiteUrl() {
    const credentials = this.getCredentials();
    return credentials ? credentials.siteUrl : null;
  }
}

// Export convenience functions
export default SimpleWordPressAuth;