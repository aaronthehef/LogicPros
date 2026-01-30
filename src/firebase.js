import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, addDoc, query, orderBy, limit, onSnapshot, deleteDoc, doc, updateDoc, serverTimestamp, getDoc, getDocs, where, arrayUnion, arrayRemove, setDoc, deleteField } from 'firebase/firestore';

// Your web app's Firebase configuration - loaded from environment variables
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Check if Firebase config is valid (env vars are set)
const isFirebaseConfigured = firebaseConfig.apiKey && firebaseConfig.projectId;

// Initialize Firebase only if configured
let app = null;
let auth = null;
let analytics = null;
let db = null;

if (isFirebaseConfigured) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  // Only initialize analytics in browser environment
  if (typeof window !== 'undefined') {
    try {
      analytics = getAnalytics(app);
    } catch (e) {
      // Analytics may fail in some environments
    }
  }
  db = getFirestore(app);
}

const googleProvider = new GoogleAuthProvider();

export {
  auth,
  analytics,
  db,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  signInWithEmailAndPassword,
  googleProvider,
  GoogleAuthProvider,
  signInWithPopup,
  deleteDoc,
  doc,
  onAuthStateChanged,
  signOut,
  updateDoc,
  serverTimestamp,
  getDoc,
  getDocs,
  where,
  arrayUnion,
  arrayRemove,
  setDoc,
  deleteField
};