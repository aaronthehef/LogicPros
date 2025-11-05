import React, { useEffect, useState } from 'react';
import { colors } from '../styles/colors';
import '../responsive-style.css';
import { Logo } from '../components/Logo';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { auth, signInWithEmailAndPassword, googleProvider, signInWithPopup } from '../firebase';

export const LogicProsPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simple login page styles
    const style = document.createElement('style');
    style.textContent = `
      .login-container {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
        padding: 20px;
      }
      .login-form {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border-radius: 16px;
        padding: 40px;
        width: 100%;
        max-width: 400px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      .login-title {
        text-align: center;
        color: #1a1a2e;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 30px;
      }
      .form-group {
        margin-bottom: 20px;
      }
      .form-label {
        display: block;
        color: #1a1a2e;
        font-weight: 600;
        margin-bottom: 8px;
        font-size: 0.9rem;
      }
      .form-input {
        width: 100%;
        padding: 12px 16px;
        border: 2px solid #e1e5e9;
        border-radius: 8px;
        font-size: 1rem;
        transition: all 0.3s ease;
        box-sizing: border-box;
      }
      .form-input:focus {
        outline: none;
        border-color: #1F7CFF;
        box-shadow: 0 0 0 3px rgba(31, 124, 255, 0.1);
      }
      .login-button {
        width: 100%;
        padding: 14px 24px;
        background: linear-gradient(135deg, #FFC600 0%, #FFB800 100%);
        color: #1a1a2e;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-top: 10px;
      }
      .login-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(255, 198, 0, 0.4);
      }
      .login-button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
      }
      .error-message {
        color: #dc3545;
        background: #f8d7da;
        border: 1px solid #f5c6cb;
        border-radius: 6px;
        padding: 12px;
        margin-bottom: 20px;
        font-size: 0.9rem;
      }
      .success-message {
        color: #155724;
        background: #d4edda;
        border: 1px solid #c3e6cb;
        border-radius: 6px;
        padding: 12px;
        margin-bottom: 20px;
        font-size: 0.9rem;
      }
      .login-logo {
        text-align: center;
        margin-bottom: 30px;
      }
      .login-logo img {
        height: 60px;
        width: auto;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Firebase login implementation
      console.log('Attempting Firebase login with:', email);
      
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      console.log('Login successful:', user);
      
      // Redirect to dashboard after successful login
      alert(`Login successful! Welcome ${user.email}`);
      
      // Redirect to dashboard page
      window.location.href = '/dashboard';
      
    } catch (err) {
      console.error('Firebase login error:', err);
      
      // Handle specific Firebase error codes
      switch (err.code) {
        case 'auth/user-not-found':
          setError('No account found with this email address.');
          break;
        case 'auth/wrong-password':
          setError('Incorrect password. Please try again.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address format.');
          break;
        case 'auth/user-disabled':
          setError('This account has been disabled.');
          break;
        case 'auth/too-many-requests':
          setError('Too many failed attempts. Please try again later.');
          break;
        case 'auth/configuration-not-found':
          setError('Firebase configuration error. Please check your Firebase setup.');
          break;
        default:
          setError('Failed to login. Please check your credentials and try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);

    try {
      console.log('Attempting Google Sign-In');
      
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      console.log('Google Sign-In successful:', user);
      
      // Redirect to dashboard after successful login
      alert(`Google Sign-In successful! Welcome ${user.displayName || user.email}`);
      
      // Redirect to dashboard page
      window.location.href = '/dashboard';
      
    } catch (err) {
      console.error('Google Sign-In error:', err);
      
      // Handle specific Firebase error codes
      switch (err.code) {
        case 'auth/popup-closed-by-user':
          setError('Sign-in popup was closed before completion.');
          break;
        case 'auth/popup-blocked':
          setError('Sign-in popup was blocked by the browser. Please allow popups for this site.');
          break;
        case 'auth/cancelled-popup-request':
          setError('Sign-in was cancelled.');
          break;
        default:
          setError('Failed to sign in with Google. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-logo">
          <Logo />
        </div>
        
        <h1 className="login-title">LogicPros Portal</h1>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          
          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div style={{
          textAlign: 'center',
          margin: '20px 0',
          position: 'relative'
        }}>
          <div style={{
            display: 'inline-block',
            padding: '0 10px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            fontSize: '0.9rem',
            color: '#6b7280'
          }}>
            OR
          </div>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '0',
            right: '0',
            height: '1px',
            backgroundColor: '#e1e5e9',
            zIndex: '-1'
          }}></div>
        </div>

        <button
          type="button"
          className="google-signin-button"
          onClick={handleGoogleSignIn}
          disabled={loading}
          style={{
            width: '100%',
            padding: '14px 24px',
            backgroundColor: 'white',
            color: '#1a1a2e',
            border: '2px solid #e1e5e9',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '10px'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#f8f9fa';
            e.target.style.borderColor = '#d1d5db';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.borderColor = '#e1e5e9';
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          {loading ? 'Signing in...' : 'Sign in with Google'}
        </button>
        
        <div style={{
          textAlign: 'center',
          marginTop: '20px',
          fontSize: '0.9rem',
          color: '#6b7280'
        }}>
          <p>
            Don't have an account? <a href="/contact" style={{ color: '#1F7CFF', textDecoration: 'none' }}>Contact us</a>
          </p>
        </div>
      </div>
    </div>
  );
};