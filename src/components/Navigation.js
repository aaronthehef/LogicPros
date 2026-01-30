import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Listen for auth state changes
  useEffect(() => {
    // Only set up auth listener if Firebase is configured
    if (!auth) return;

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  // Cleanup body styles on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, []);

  const handleMouseEnter = (dropdown) => {
    setDropdownOpen(dropdown);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  const handleLinkClick = () => {
    setDropdownOpen(null);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    const newState = !mobileMenuOpen;
    setMobileMenuOpen(newState);
    setDropdownOpen(null);

    // Prevent body scroll when mobile menu is open
    if (newState) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  };

  const handleLogout = async () => {
    if (!auth) return;
    try {
      await signOut(auth);
      window.location.href = '/';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="nav-menu">
      <div className="nav-links">
        <div 
          className="nav-dropdown"
          onMouseEnter={() => handleMouseEnter('services')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/services" className="nav-link">
            Services
            <span className="dropdown-arrow">▼</span>
          </a>
          <div className={`dropdown-content ${dropdownOpen === 'services' ? 'show' : ''}`}>
            <div className="dropdown-arrow-up"></div>
            <a href="/services/websites" onClick={handleLinkClick}>
              Website Design
            </a>
            <a href="/services/automations" onClick={handleLinkClick}>
              AI Automations
            </a>
            <a href="/services/cybersecurity" onClick={handleLinkClick}>
              Cybersecurity
            </a>
            <a href="/services/managed-it" onClick={handleLinkClick}>
              Managed IT Services
            </a>
          </div>
          <div className="dropdown-hover-bridge"></div>
        </div>

        <div
          className="nav-dropdown"
          onMouseEnter={() => handleMouseEnter('locations')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>
            Locations
            <span className="dropdown-arrow">▼</span>
          </a>
          <div className={`dropdown-content ${dropdownOpen === 'locations' ? 'show' : ''}`}>
            <div className="dropdown-arrow-up"></div>
            <a href="/locations/fredericton" onClick={handleLinkClick}>
              Fredericton
            </a>
            <a href="/locations/moncton" onClick={handleLinkClick}>
              Moncton
            </a>
            <a href="/locations/saint-john" onClick={handleLinkClick}>
              Saint John
            </a>
          </div>
          <div className="dropdown-hover-bridge"></div>
        </div>

        <a href="/about" className="nav-link">About</a>
        <a href="/blog" className="nav-link">Blog</a>
        <a href="/contact" className="nav-link">Contact</a>
      </div>

      {/* User Menu - Compact dropdown */}
      {user ? (
        <div
          className="nav-dropdown user-menu"
          onMouseEnter={() => handleMouseEnter('user')}
          onMouseLeave={handleMouseLeave}
        >
          <button className="user-menu-button">
            <svg className="user-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 21C20 17.134 16.4183 14 12 14C7.58172 14 4 17.134 4 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="dropdown-arrow">▼</span>
          </button>
          <div className={`dropdown-content user-dropdown ${dropdownOpen === 'user' ? 'show' : ''}`}>
            <div className="dropdown-arrow-up"></div>
            <div className="user-info">
              <div className="user-email">{user.email}</div>
            </div>
            <a href="/dashboard" onClick={handleLinkClick}>
              <span className="dropdown-icon">📊</span>
              Dashboard
            </a>
            <button onClick={handleLogout} className="logout-button">
              <span className="dropdown-icon">🚪</span>
              Logout
            </button>
          </div>
          <div className="dropdown-hover-bridge"></div>
        </div>
      ) : (
        <a href="/logicpros" className="login-link">
          <svg className="user-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 21C20 17.134 16.4183 14 12 14C7.58172 14 4 17.134 4 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Login</span>
        </a>
      )}

      {/* Mobile Menu - Portal to Body for Proper Positioning */}
      {mobileMenuOpen && createPortal(
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 2147483647,
            padding: '2rem 1rem',
            overflowY: 'auto',
            pointerEvents: 'auto',
            border: 'none',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            margin: 0,
            boxSizing: 'border-box'
          }}
          onClick={(e) => {
            // Only close if clicking the background, not the content
            if (e.target === e.currentTarget) {
              toggleMobileMenu();
            }
          }}
        >
          <div style={{
            maxWidth: '400px',
            width: '100%',
            color: 'white',
            fontSize: '1rem',
            lineHeight: '1.5',
            position: 'relative',
            marginTop: '2rem'
          }}>
            <button 
              onClick={toggleMobileMenu}
              style={{
                float: 'right',
                background: 'rgba(255, 255, 255, 0.9)',
                border: '2px solid #ffffff',
                color: '#000000',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '1.8rem',
                marginBottom: '2rem',
                fontWeight: 'bold',
                boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >✕</button>
            
            <div style={{ clear: 'both', paddingTop: '2rem', zIndex: 1000, position: 'relative' }}>
              <h3 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.3rem', fontWeight: 'bold' }}>Services</h3>
              <a href="/services/websites" onClick={handleLinkClick} style={{ display: 'block', color: '#ffffff', textDecoration: 'none', padding: '0.75rem 0', fontSize: '1.1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.3)', fontWeight: '500' }}>Website Design</a>
              <a href="/services/automations" onClick={handleLinkClick} style={{ display: 'block', color: '#ffffff', textDecoration: 'none', padding: '0.75rem 0', fontSize: '1.1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.3)', fontWeight: '500' }}>AI Automations</a>
              <a href="/services/cybersecurity" onClick={handleLinkClick} style={{ display: 'block', color: '#ffffff', textDecoration: 'none', padding: '0.75rem 0', fontSize: '1.1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.3)', fontWeight: '500' }}>Cybersecurity</a>
              <a href="/services/managed-it" onClick={handleLinkClick} style={{ display: 'block', color: '#ffffff', textDecoration: 'none', padding: '0.75rem 0', fontSize: '1.1rem', borderBottom: 'none', fontWeight: '500' }}>Managed IT Services</a>

              <div style={{ marginTop: '1.5rem' }}>
                <h3 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.3rem', fontWeight: 'bold' }}>Locations</h3>
                <a href="/locations/fredericton" onClick={handleLinkClick} style={{ display: 'block', color: '#ffffff', textDecoration: 'none', padding: '0.75rem 0', fontSize: '1.1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.3)', fontWeight: '500' }}>Fredericton</a>
                <a href="/locations/moncton" onClick={handleLinkClick} style={{ display: 'block', color: '#ffffff', textDecoration: 'none', padding: '0.75rem 0', fontSize: '1.1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.3)', fontWeight: '500' }}>Moncton</a>
                <a href="/locations/saint-john" onClick={handleLinkClick} style={{ display: 'block', color: '#ffffff', textDecoration: 'none', padding: '0.75rem 0', fontSize: '1.1rem', borderBottom: 'none', fontWeight: '500' }}>Saint John</a>
              </div>

              <div style={{ marginTop: '0.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.3)' }}>
                <a href="/about" onClick={handleLinkClick} style={{ display: 'block', color: '#ffffff', textDecoration: 'none', padding: '0.75rem 0', fontSize: '1.1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.3)', fontWeight: '500' }}>About</a>
                <a href="/blog" onClick={handleLinkClick} style={{ display: 'block', color: '#ffffff', textDecoration: 'none', padding: '0.75rem 0', fontSize: '1.1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.3)', fontWeight: '500' }}>Blog</a>
                <a href="/contact" onClick={handleLinkClick} style={{ display: 'block', color: '#ffffff', textDecoration: 'none', padding: '0.75rem 0', fontSize: '1.1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.3)', fontWeight: '500' }}>Contact</a>

                {user ? (
                  <>
                    <a href="/dashboard" onClick={handleLinkClick} style={{ display: 'block', color: '#ffffff', textDecoration: 'none', padding: '0.75rem 0', fontSize: '1.1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.3)', fontWeight: '500' }}>📊 Dashboard</a>
                    <button onClick={() => { handleLogout(); handleLinkClick(); }} style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', color: '#ffffff', padding: '0.75rem 0', fontSize: '1.1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.3)', fontWeight: '500', cursor: 'pointer' }}>🚪 Logout ({user.email})</button>
                  </>
                ) : (
                  <a href="/logicpros" onClick={handleLinkClick} style={{ display: 'block', color: '#ffffff', textDecoration: 'none', padding: '0.75rem 0', fontSize: '1.1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.3)', fontWeight: '500' }}>👤 Login</a>
                )}

                <a href="/contact" onClick={handleLinkClick} style={{
                  display: 'block',
                  background: 'linear-gradient(135deg, #FFC600, #FFB800)',
                  color: '#1a1a2e',
                  padding: '1rem',
                  marginTop: '2rem',
                  borderRadius: '50px',
                  textAlign: 'center',
                  fontWeight: '600',
                  fontSize: '1.2rem',
                  textDecoration: 'none',
                  border: 'none',
                  boxShadow: '0 6px 20px rgba(29, 122, 175, 0.4)'
                }}>Let's Talk</a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
      
      {/* Updated button text to match goal design */}
      <a href="/contact" className="btn btn-nav-cta">Let's Talk</a>
      <button 
        className="mobile-menu-toggle" 
        onClick={toggleMobileMenu}
      >
        {mobileMenuOpen ? '✕' : '☰'}
      </button>
    </nav>
  );
};

// Professional dropdown navigation with improved hover zones
const dropdownStyles = `
/* Navigation scroll effects */
.nav-menu {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-visible {
  transform: translateY(0);
}

.nav-hidden {
  transform: translateY(-100%);
}

/* Mobile menu toggle - hidden by default */
.mobile-menu-toggle {
  display: none;
}

/* Navigation dropdown container */
.nav-dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown arrow in nav links */
.dropdown-arrow {
  font-size: 0.7rem;
  margin-left: 8px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: rgba(255, 255, 255, 0.7);
}

.nav-dropdown:hover .dropdown-arrow {
  transform: rotate(180deg);
  color: #ff8659;
}

/* Invisible bridge to prevent dropdown from closing */
.dropdown-hover-bridge {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 15px;
  background: transparent;
  z-index: 999;
}

/* Main dropdown content */
.dropdown-content {
  position: absolute;
  background: #1a1a1a;
  min-width: 240px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.3), 0 5px 15px rgba(0,0,0,0.2);
  border-radius: 12px;
  z-index: 1000;
  top: calc(100% + 15px);
  left: 0;
  padding: 12px 0;
  border: 1px solid rgba(255,255,255,0.1);
  overflow: hidden;

  /* Sliding animation properties */
  opacity: 0;
  visibility: hidden;
  transform: translateY(-15px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  /* Modern backdrop effect */
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
}

.dropdown-content.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* Dropdown arrow pointing up */
.dropdown-arrow-up {
  position: absolute;
  top: -8px;
  left: 24px;
  width: 16px;
  height: 16px;
  background: #1a1a1a;
  border: 1px solid rgba(255,255,255,0.1);
  border-bottom: none;
  border-right: none;
  transform: rotate(45deg);
  z-index: 1001;
}

/* Dropdown menu items */
.dropdown-content a {
  color: #ffffff;
  padding: 14px 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  font-weight: 500;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;
  margin: 2px 12px;
}

.dropdown-icon {
  margin-right: 12px;
  font-size: 1.1rem;
  width: 20px;
  display: inline-block;
}

/* Hover effect with slide animation */
.dropdown-content a::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: #1a79af;
  border-radius: 0 4px 4px 0;
  transform: scaleY(0);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.dropdown-content a:hover {
  background: rgba(29, 122, 175, 0.2);
  color: #1d7aaf;
  transform: translateX(8px);
  padding-left: 28px;
}

.dropdown-content a:hover::before {
  transform: scaleY(1);
}

.dropdown-content a:hover .dropdown-icon {
  transform: scale(1.1);
}

/* Show dropdown on hover with proper timing */
.nav-dropdown:hover .dropdown-content {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* ===== SUBMENU STYLES ===== */
.nav-subdropdown {
  position: relative;
}

.dropdown-item-with-submenu {
  position: relative;
  display: flex !important;
  justify-content: space-between;
  align-items: center;
}

.submenu-arrow {
  font-size: 0.7rem;
  color: #6c757d;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: auto;
}

.nav-subdropdown:hover .submenu-arrow {
  transform: rotate(90deg);
  color: #1d7aaf;
}

.submenu-content {
  position: absolute;
  left: 100%;
  top: 0;
  background: #1a1a1a;
  min-width: 280px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.3), 0 5px 15px rgba(0,0,0,0.2);
  border-radius: 12px;
  z-index: 1001;
  padding: 12px 0;
  border: 1px solid rgba(255,255,255,0.1);
  margin-left: 8px;
  
  /* Animation properties */
  opacity: 0;
  visibility: hidden;
  transform: translateX(-15px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Modern backdrop effect */
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
}

.submenu-content.show {
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
}

.submenu-content a {
  color: #ffffff;
  padding: 10px 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 6px;
  margin: 2px 8px;
}

.submenu-content a:hover {
  background: rgba(29, 122, 175, 0.2);
  color: #1d7aaf;
  transform: translateX(4px);
  padding-left: 20px;
}

.submenu-content .dropdown-icon {
  margin-right: 8px;
  font-size: 1rem;
  width: 16px;
}

/* Enhanced button animations */
.btn {
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: perspective(1px) translateZ(0);
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  transition: left 0.6s;
}

.btn:hover::before {
  left: 100%;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(0,0,0,0.15);
}

.btn:active {
  transform: translateY(0);
}

.btn-nav-cta {
  background: linear-gradient(135deg, #FFC600 0%, #FFB800 100%) !important;
  color: #1a1a2e !important;
  padding: 0.75rem 1.5rem !important;
  border-radius: 50px !important;
  text-decoration: none !important;
  font-size: 1rem !important;
  font-weight: 600 !important;
  border: none !important;
  box-shadow: 0 6px 20px rgba(29, 122, 175, 0.4) !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
  display: inline-block !important;
  outline: none !important;
  box-sizing: border-box !important;
}

.btn-nav-cta:hover {
  box-shadow: 0 8px 30px rgba(255, 198, 0, 0.6) !important;
  transform: translateY(-3px) !important;
  color: #1a1a2e !important;
  background: linear-gradient(135deg, #FFC600 0%, #FFB800 100%) !important;
}

/* User Menu Styles */
.user-menu {
  margin-right: 1rem;
}

.user-menu-button {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.user-menu-button:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
}

.user-icon {
  width: 20px;
  height: 20px;
  color: white;
}

.user-dropdown {
  min-width: 200px;
  right: 0;
  left: auto;
  overflow: hidden;
}

.user-info {
  padding: 12px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 8px;
}

.user-email {
  color: #aaa;
  font-size: 0.85rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.logout-button {
  width: calc(100% - 24px);
  background: none;
  border: none;
  color: #ffffff;
  padding: 14px 20px;
  text-align: left;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;
  margin: 2px 12px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.logout-button::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: #dc3545;
  border-radius: 0 4px 4px 0;
  transform: scaleY(0);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.logout-button:hover {
  background: rgba(220, 53, 69, 0.2);
  color: #dc3545;
  transform: translateX(8px);
  padding-left: 28px;
}

.logout-button:hover::before {
  transform: scaleY(1);
}

.login-link {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  margin-right: 1rem;
}

.login-link:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

/* Mobile Menu Styles removed - using inline styles for mobile menu */

/* Mobile responsive design */
@media (max-width: 768px) {
  .nav-menu {
    position: relative;
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    overflow: visible !important;
  }
  
  .nav-links {
    display: none !important;
  }
  
  .btn-nav-cta {
    display: none !important;
  }

  .user-menu,
  .login-link {
    display: none !important;
  }

  .mobile-menu-toggle {
    display: flex !important;
    background: transparent !important;
    border: 2px solid rgba(255, 255, 255, 0.3) !important;
    color: white !important;
    font-size: 1.5rem !important;
    padding: 0.5rem 0.75rem !important;
    border-radius: 8px !important;
    cursor: pointer !important;
    transition: all 0.3s ease !important;
    align-items: center !important;
    justify-content: center !important;
    width: auto !important;
    height: auto !important;
    position: relative !important;
    z-index: 10000 !important;
  }
  
  .mobile-menu-toggle:hover {
    border-color: rgba(29, 122, 175, 0.8) !important;
    color: #1d7aaf !important;
  }
  
  /* Mobile menu styles handled by inline styles */
}
`;

// Inject dropdown styles and ensure viewport meta tag
if (typeof document !== 'undefined') {
  // Ensure viewport meta tag exists for proper mobile rendering
  let viewportMeta = document.querySelector('meta[name="viewport"]');
  if (!viewportMeta) {
    viewportMeta = document.createElement('meta');
    viewportMeta.name = 'viewport';
    viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.head.appendChild(viewportMeta);
  } else {
    // Update existing viewport meta to prevent zoom issues
    viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
  }

  const styleSheet = document.createElement('style');
  styleSheet.textContent = dropdownStyles;
  document.head.appendChild(styleSheet);
  
  // Mobile menu body scroll prevention is handled in the React component
}