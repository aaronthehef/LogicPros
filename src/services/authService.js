// Enhanced authentication service with business context
import { 
  auth, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup, 
  onAuthStateChanged,
  signOut as firebaseSignOut
} from '../firebase';
import { businessContext } from './businessService';
import { getDoc, doc, updateDoc } from '../firebase';

/**
 * Enhanced authentication service with business context management
 */
export class AuthService {
  constructor() {
    this.currentUser = null;
    this.businessContext = null;
    this.authListeners = [];
  }

  /**
   * Initialize authentication and business context
   */
  async initialize() {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        this.currentUser = user;
        
        if (user) {
          try {
            // Initialize business context for authenticated user
            const businessData = await businessContext.initializeBusinessContext(user);
            this.businessContext = businessData;
            
            // Notify all listeners
            this.notifyListeners({
              user,
              businessContext: businessData,
              isAuthenticated: true
            });
            
            resolve(businessData);
          } catch (error) {
            console.error('Error initializing business context:', error);
            this.notifyListeners({
              user,
              error: error.message,
              isAuthenticated: true,
              businessError: true
            });
            reject(error);
          }
        } else {
          // User is not authenticated
          this.businessContext = null;
          this.notifyListeners({
            user: null,
            businessContext: null,
            isAuthenticated: false
          });
          resolve({ user: null, businessContext: null, needsSetup: false });
        }
      });

      // Store unsubscribe function for cleanup
      this.authUnsubscribe = unsubscribe;
    });
  }

  /**
   * Sign in with email and password
   */
  async signInWithEmail(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      console.log('Email sign-in successful:', user);
      
      // Business context will be initialized by onAuthStateChanged listener
      return {
        success: true,
        user,
        message: 'Sign-in successful'
      };
      
    } catch (error) {
      console.error('Email sign-in error:', error);
      
      let errorMessage = 'Failed to sign in. Please check your credentials.';
      
      // Handle specific Firebase error codes
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'No account found with this email address.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password. Please try again.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address format.';
          break;
        case 'auth/user-disabled':
          errorMessage = 'This account has been disabled.';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many failed attempts. Please try again later.';
          break;
        case 'auth/configuration-not-found':
          errorMessage = 'Firebase configuration error. Please contact support.';
          break;
        default:
          errorMessage = `Sign-in failed: ${error.message}`;
      }
      
      return {
        success: false,
        error: error.message,
        message: errorMessage
      };
    }
  }

  /**
   * Sign in with Google
   */
  async signInWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      console.log('Google sign-in successful:', user);
      
      return {
        success: true,
        user,
        message: 'Google sign-in successful'
      };
      
    } catch (error) {
      console.error('Google sign-in error:', error);
      
      let errorMessage = 'Failed to sign in with Google.';
      
      // Handle specific Firebase error codes
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          errorMessage = 'Sign-in popup was closed before completion.';
          break;
        case 'auth/popup-blocked':
          errorMessage = 'Sign-in popup was blocked by browser. Please allow popups for this site.';
          break;
        case 'auth/cancelled-popup-request':
          errorMessage = 'Sign-in was cancelled.';
          break;
        default:
          errorMessage = `Google sign-in failed: ${error.message}`;
      }
      
      return {
        success: false,
        error: error.message,
        message: errorMessage
      };
    }
  }

  /**
   * Sign out current user
   */
  async signOut() {
    try {
      await firebaseSignOut(auth);
      
      // Clear business context
      this.currentUser = null;
      this.businessContext = null;
      businessContext.currentBusiness = null;
      
      // Notify listeners
      this.notifyListeners({
        user: null,
        businessContext: null,
        isAuthenticated: false
      });
      
      return {
        success: true,
        message: 'Signed out successfully'
      };
      
    } catch (error) {
      console.error('Sign-out error:', error);
      return {
        success: false,
        error: error.message,
        message: 'Failed to sign out'
      };
    }
  }

  /**
   * Get current user
   */
  getCurrentUser() {
    return this.currentUser;
  }

  /**
   * Get current business context
   */
  getBusinessContext() {
    return this.businessContext;
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated() {
    return this.currentUser !== null;
  }

  /**
   * Check if user needs business setup
   */
  needsBusinessSetup() {
    return this.businessContext?.needsSetup || false;
  }

  /**
   * Get current business
   */
  getCurrentBusiness() {
    return this.businessContext?.business || null;
  }

  /**
   * Check if user has specific permission in current business
   */
  hasPermission(permission) {
    if (!this.businessContext?.business) return false;
    return businessContext.hasPermission(permission);
  }

  /**
   * Get user role in current business
   */
  getUserRole() {
    return this.businessContext?.business?.userRole?.role || null;
  }

  /**
   * Check if user is admin in current business
   */
  isAdmin() {
    return this.getUserRole() === 'admin';
  }

  /**
   * Check if user is editor or admin in current business
   */
  canEdit() {
    const role = this.getUserRole();
    return role === 'admin' || role === 'editor';
  }

  /**
   * Update user profile
   */
  async updateProfile(profileData) {
    if (!this.currentUser) {
      throw new Error('No authenticated user');
    }

    try {
      // Update Firebase profile
      await this.currentUser.updateProfile(profileData);
      
      // Update user document in Firestore
      await updateDoc(doc(db, 'users', this.currentUser.uid), {
        'profile': {
          displayName: profileData.displayName || this.currentUser.displayName,
          photoURL: profileData.photoURL || this.currentUser.photoURL,
          email: this.currentUser.email
        },
        updatedAt: serverTimestamp()
      });
      
      return {
        success: true,
        message: 'Profile updated successfully'
      };
      
    } catch (error) {
      console.error('Error updating profile:', error);
      return {
        success: false,
        error: error.message,
        message: 'Failed to update profile'
      };
    }
  }

  /**
   * Subscribe to authentication state changes
   */
  subscribe(callback) {
    this.authListeners.push(callback);
    
    // Immediately call with current state
    if (this.currentUser !== null) {
      callback({
        user: this.currentUser,
        businessContext: this.businessContext,
        isAuthenticated: true
      });
    } else {
      callback({
        user: null,
        businessContext: null,
        isAuthenticated: false
      });
    }
    
    // Return unsubscribe function
    return () => {
      this.authListeners = this.authListeners.filter(listener => listener !== callback);
    };
  }

  /**
   * Notify all authentication listeners
   */
  notifyListeners(authState) {
    this.authListeners.forEach(callback => {
      try {
        callback(authState);
      } catch (error) {
        console.error('Error in auth listener:', error);
      }
    });
  }

  /**
   * Cleanup authentication service
   */
  cleanup() {
    if (this.authUnsubscribe) {
      this.authUnsubscribe();
    }
    this.authListeners = [];
    this.currentUser = null;
    this.businessContext = null;
  }

  /**
   * Get authentication state for routing
   */
  getAuthState() {
    return {
      user: this.currentUser,
      businessContext: this.businessContext,
      isAuthenticated: this.isAuthenticated(),
      needsSetup: this.needsBusinessSetup(),
      currentBusiness: this.getCurrentBusiness(),
      userRole: this.getUserRole(),
      isAdmin: this.isAdmin(),
      canEdit: this.canEdit()
    };
  }
}

// Create singleton instance
export const authService = new AuthService();

// Initialize authentication service
export const initializeAuth = async () => {
  return await authService.initialize();
};

// Export convenience methods
export const signInWithEmail = (email, password) => authService.signInWithEmail(email, password);
export const signInWithGoogle = () => authService.signInWithGoogle();
export const signOut = () => authService.signOut();
export const getCurrentUser = () => authService.getCurrentUser();
export const getBusinessContext = () => authService.getBusinessContext();
export const isAuthenticated = () => authService.isAuthenticated();
export const needsBusinessSetup = () => authService.needsBusinessSetup();
export const getCurrentBusiness = () => authService.getCurrentBusiness();
export const hasPermission = (permission) => authService.hasPermission(permission);
export const getUserRole = () => authService.getUserRole();
export const isAdmin = () => authService.isAdmin();
export const canEdit = () => authService.canEdit();
export const subscribeToAuth = (callback) => authService.subscribe(callback);

export default authService;