// Business management service for multi-tenant architecture
import {
  db,
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  setDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
  arrayUnion,
  arrayRemove,
  deleteField,
  auth
} from '../firebase';

/**
 * Business context service for managing multi-tenant operations
 */
export class BusinessContextService {
  constructor() {
    this.currentBusiness = null;
    this.currentUser = null;
    this.listeners = [];
  }

  /**
   * Initialize business context for authenticated user
   */
  async initializeBusinessContext(user) {
    this.currentUser = user;
    
    try {
      console.log('Initializing business context for user:', user.uid, user.email);
      
      // Get user document with business associations
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      console.log('User doc exists:', userDoc.exists());
      
      if (!userDoc.exists()) {
        console.log('User document not found, creating new profile');
        // Only create profile if user doesn't exist
        const userData = await this.createUserProfile(user);
        return {
          user,
          business: null,
          needsSetup: true,
          businesses: []
        };
      }
      
      const userData = userDoc.data();
      console.log('User data:', userData);
      console.log('Businesses field:', userData.businesses);
      console.log('Businesses type:', typeof userData.businesses);
      console.log('Businesses length:', userData.businesses ? userData.businesses.length : 'undefined');
      
      // Check if user has any businesses - be more flexible here
      if (!userData.businesses) {
        console.log('No businesses field found for user - treating as needs setup');
        return {
          user,
          business: null,
          needsSetup: true,
          businesses: []
        };
      }
      
      if (Array.isArray(userData.businesses) && userData.businesses.length === 0) {
        console.log('Empty businesses array found for user');
        return {
          user,
          business: null,
          needsSetup: true,
          businesses: []
        };
      }
      
      console.log('Found businesses:', userData.businesses);
      
      // Also check for alternative field names that might exist
      console.log('Checking all user fields:', Object.keys(userData));
      console.log('Current business field:', userData.currentBusiness);
      console.log('Preferences:', userData.preferences);

      // Get current business or first available
      const businessId = userData.currentBusiness || userData.preferences?.defaultBusiness || userData.businesses[0];
      const business = await this.getBusiness(businessId);
      
      if (!business) {
        // Business doesn't exist, clear invalid reference
        await this.clearCurrentBusiness(user.uid);
        return {
          user,
          business: null,
          needsSetup: true,
          businesses: []
        };
      }

      // Set current business context
      this.currentBusiness = {
        businessId,
        business,
        userRole: business.roles?.[user.uid] || { role: 'viewer', permissions: [] }
      };

      // Get all user businesses for switcher
      const userBusinesses = await this.getUserBusinesses(userData.businesses);

      return {
        user,
        business: this.currentBusiness,
        needsSetup: false,
        businesses: userBusinesses
      };

    } catch (error) {
      console.error('Error initializing business context:', error);
      throw error;
    }
  }

  /**
   * Create user profile if it doesn't exist
   */
  async createUserProfile(user) {
    const userProfile = {
      profile: {
        email: user.email,
        displayName: user.displayName || user.email.split('@')[0],
        photoURL: user.photoURL || ''
      },
      businesses: [],
      preferences: {
        defaultBusiness: null
      },
      createdAt: serverTimestamp()
    };

    await setDoc(doc(db, 'users', user.uid), userProfile);
    return userProfile;
  }

  /**
   * Get business document by ID
   */
  async getBusiness(businessId) {
    try {
      const businessDoc = await getDoc(doc(db, 'businesses', businessId));
      if (!businessDoc.exists()) {
        console.warn(`Business ${businessId} not found`);
        return null;
      }
      
      return {
        id: businessDoc.id,
        ...businessDoc.data()
      };
    } catch (error) {
      console.error('Error getting business:', error);
      return null;
    }
  }

  /**
   * Get multiple businesses for user
   */
  async getUserBusinesses(businessIds) {
    if (!businessIds || businessIds.length === 0) return [];

    try {
      const businesses = [];
      for (const businessId of businessIds) {
        const business = await this.getBusiness(businessId);
        if (business) {
          businesses.push(business);
        }
      }
      return businesses;
    } catch (error) {
      console.error('Error getting user businesses:', error);
      return [];
    }
  }

  /**
   * Switch to different business
   */
  async switchBusiness(businessId) {
    if (!this.currentUser) {
      throw new Error('No authenticated user');
    }

    const business = await this.getBusiness(businessId);
    if (!business) {
      throw new Error('Business not found');
    }

    // Update user's current business
    await updateDoc(doc(db, 'users', this.currentUser.uid), {
      currentBusiness: businessId
    });

    // Update current context
    this.currentBusiness = {
      businessId,
      business,
      userRole: business.roles?.[this.currentUser.uid] || { role: 'viewer', permissions: [] }
    };

    // Notify listeners
    this.notifyListeners();

    return this.currentBusiness;
  }

  /**
   * Clear invalid current business reference
   */
  async clearCurrentBusiness(userId) {
    await updateDoc(doc(db, 'users', userId), {
      currentBusiness: null
    });
  }

  /**
   * Get current business context
   */
  getCurrentBusiness() {
    return this.currentBusiness;
  }

  /**
   * Check if user has specific permission in current business
   */
  hasPermission(permission) {
    if (!this.currentBusiness) return false;
    
    const userRole = this.currentBusiness.userRole;
    const permissions = userRole.permissions || [];
    
    // Admin has all permissions
    if (userRole.role === 'admin') return true;
    
    return permissions.includes(permission);
  }

  /**
   * Subscribe to business context changes
   */
  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(listener => listener !== callback);
    };
  }

  /**
   * Notify all listeners of context changes
   */
  notifyListeners() {
    this.listeners.forEach(callback => callback(this.currentBusiness));
  }
}

// Create singleton instance
export const businessContext = new BusinessContextService();

/**
 * Business management service for admin operations
 */
export class BusinessManagementService {
  /**
   * Create new business
   */
  static async createBusiness(businessData, ownerId) {
    try {
      const businessDoc = {
        name: businessData.name,
        domain: businessData.domain || '',
        status: 'setup',
        
        // WordPress configuration (empty initially)
        wordpressConfig: {
          siteUrl: '',
          username: '',
          appPassword: '',
          categories: [],
          defaultAuthor: 0
        },
        
        // Branding
        branding: {
          logo: '',
          primaryColor: '#1F7CFF',
          secondaryColor: '#FFC600',
          companyName: businessData.name
        },
        
        // Users and roles
        users: [ownerId],
        roles: {
          [ownerId]: {
            role: 'admin',
            permissions: ['manage_business', 'manage_users', 'manage_wordpress', 'view_analytics'],
            joinedAt: serverTimestamp()
          }
        },
        
        // Subscription
        subscription: {
          plan: businessData.plan || 'basic',
          limits: {
            postsPerMonth: 50,
            users: 5,
            wordpressSites: 1
          }
        },
        
        createdAt: serverTimestamp(),
        createdBy: ownerId,
        updatedAt: serverTimestamp()
      };

      const businessRef = await addDoc(collection(db, 'businesses'), businessDoc);
      const businessId = businessRef.id;

      // Add business to user's businesses array
      await updateDoc(doc(db, 'users', ownerId), {
        businesses: arrayUnion(businessId),
        currentBusiness: businessId,
        'preferences.defaultBusiness': businessId
      });

      return {
        success: true,
        businessId,
        message: 'Business created successfully'
      };

    } catch (error) {
      console.error('Error creating business:', error);
      return {
        success: false,
        error: error.message,
        message: 'Failed to create business'
      };
    }
  }

  /**
   * Update business WordPress configuration
   */
  static async configureWordPress(businessId, wordpressConfig) {
    try {
      await updateDoc(doc(db, 'businesses', businessId), {
        'wordpressConfig': wordpressConfig,
        status: 'active',
        updatedAt: serverTimestamp()
      });

      // Log the configuration change
      await this.logAuditEvent(businessId, 'wordpress_configured', {
        configuredBy: auth.currentUser.uid,
        siteUrl: wordpressConfig.siteUrl
      });

      return {
        success: true,
        message: 'WordPress configuration updated successfully'
      };

    } catch (error) {
      console.error('Error configuring WordPress:', error);
      return {
        success: false,
        error: error.message,
        message: 'Failed to configure WordPress'
      };
    }
  }

  /**
   * Add user to business
   */
  static async addUserToBusiness(businessId, userId, role = 'editor') {
    try {
      const rolePermissions = {
        admin: ['manage_business', 'manage_users', 'manage_wordpress', 'view_analytics'],
        editor: ['manage_wordpress', 'view_analytics'],
        viewer: ['view_analytics']
      };

      await updateDoc(doc(db, 'businesses', businessId), {
        users: arrayUnion(userId),
        [`roles.${userId}`]: {
          role: role,
          permissions: rolePermissions[role] || [],
          joinedAt: serverTimestamp()
        },
        updatedAt: serverTimestamp()
      });

      // Add business to user's businesses array
      await updateDoc(doc(db, 'users', userId), {
        businesses: arrayUnion(businessId)
      });

      await this.logAuditEvent(businessId, 'user_added', {
        addedUserId: userId,
        role: role,
        addedBy: auth.currentUser.uid
      });

      return {
        success: true,
        message: 'User added to business successfully'
      };

    } catch (error) {
      console.error('Error adding user to business:', error);
      return {
        success: false,
        error: error.message,
        message: 'Failed to add user to business'
      };
    }
  }

  /**
   * Remove user from business
   */
  static async removeUserFromBusiness(businessId, userId) {
    try {
      await updateDoc(doc(db, 'businesses', businessId), {
        users: arrayRemove(userId),
        [`roles.${userId}`]: deleteField(),
        updatedAt: serverTimestamp()
      });

      // Remove business from user's businesses array
      await updateDoc(doc(db, 'users', userId), {
        businesses: arrayRemove(businessId),
        currentBusiness: userId === auth.currentUser.uid ? null : undefined
      });

      await this.logAuditEvent(businessId, 'user_removed', {
        removedUserId: userId,
        removedBy: auth.currentUser.uid
      });

      return {
        success: true,
        message: 'User removed from business successfully'
      };

    } catch (error) {
      console.error('Error removing user from business:', error);
      return {
        success: false,
        error: error.message,
        message: 'Failed to remove user from business'
      };
    }
  }

  /**
   * Update business branding
   */
  static async updateBranding(businessId, branding) {
    try {
      await updateDoc(doc(db, 'businesses', businessId), {
        branding: branding,
        updatedAt: serverTimestamp()
      });

      await this.logAuditEvent(businessId, 'branding_updated', {
        updatedBy: auth.currentUser.uid,
        branding
      });

      return {
        success: true,
        message: 'Branding updated successfully'
      };

    } catch (error) {
      console.error('Error updating branding:', error);
      return {
        success: false,
        error: error.message,
        message: 'Failed to update branding'
      };
    }
  }

  /**
   * Log audit event
   */
  static async logAuditEvent(businessId, action, details = {}) {
    try {
      const auditLog = {
        action,
        userId: auth.currentUser.uid,
        details,
        timestamp: serverTimestamp()
      };

      await addDoc(collection(db, 'businesses', businessId, 'auditLogs'), auditLog);
    } catch (error) {
      console.error('Error logging audit event:', error);
    }
  }

  /**
   * Get all businesses (for admin)
   */
  static async getAllBusinesses() {
    try {
      const businessesQuery = query(
        collection(db, 'businesses'),
        orderBy('createdAt', 'desc')
      );
      
      const snapshot = await getDocs(businessesQuery);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting all businesses:', error);
      return [];
    }
  }

  /**
   * Get business analytics
   */
  static async getBusinessAnalytics(businessId, dateRange = '30d') {
    try {
      const analyticsQuery = query(
        collection(db, 'businesses', businessId, 'analytics'),
        where('type', '==', 'usage'),
        orderBy('generatedAt', 'desc'),
        limit(100)
      );
      
      const snapshot = await getDocs(analyticsQuery);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting business analytics:', error);
      return [];
    }
  }
}

export default {
  businessContext,
  BusinessManagementService
};