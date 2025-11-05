import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, addDoc, query, orderBy, limit, onSnapshot } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2tvXKLora6x2G2cW0D1hTWimNc15XDN8",
  authDomain: "logicprosmediaposter.firebaseapp.com",
  projectId: "logicprosmediaposter",
  storageBucket: "logicprosmediaposter.firebasestorage.app",
  messagingSenderId: "86380911943",
  appId: "1:86380911943:web:0f5323f28da8e281bfc062",
  measurementId: "G-B756BD4JF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);
console.log('Firestore initialized successfully');

const googleProvider = new GoogleAuthProvider();

export { auth, analytics, db, collection, addDoc, query, orderBy, limit, onSnapshot, signInWithEmailAndPassword, googleProvider, signInWithPopup };