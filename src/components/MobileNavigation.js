import React, { useState } from 'react';

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="mobile-header">
        <div className="mobile-header-content">
          <div className="mobile-logo">
            <span>Logic Pros</span>
          </div>
          <button 
            className="mobile-hamburger" 
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger-line ${isOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${isOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${isOpen ? 'active' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMenu}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <span>Navigation</span>
              <button className="mobile-close-btn" onClick={toggleMenu}>
                ✕
              </button>
            </div>
            
            <nav className="mobile-nav-links">
              <a href="/" onClick={handleLinkClick}>Home</a>
              <a href="/services" onClick={handleLinkClick}>Services</a>
              <a href="/services/websites" onClick={handleLinkClick}>Website Design</a>
              <a href="/services/automations" onClick={handleLinkClick}>AI Automations</a>
              <a href="/services/it-services" onClick={handleLinkClick}>Cybersecurity & IT</a>
              <a href="/about" onClick={handleLinkClick}>About</a>
              <a href="/contact" onClick={handleLinkClick}>Contact</a>
              
              <div className="mobile-locations">
                <h4>Locations</h4>
                <a href="/locations/fredericton" onClick={handleLinkClick}>Fredericton</a>
                <a href="/locations/moncton" onClick={handleLinkClick}>Moncton</a>
                <a href="/locations/saint-john" onClick={handleLinkClick}>Saint John</a>
              </div>
              
              <a href="/contact" className="mobile-cta-button" onClick={handleLinkClick}>
                Let's Talk
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

// CSS styles for mobile navigation
const mobileStyles = `
/* Mobile Header - Only visible on mobile */
.mobile-header {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 80px;
  background: rgba(26, 26, 26, 0.95) !important;
  backdrop-filter: blur(20px);
  z-index: 10000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
}

.mobile-header-content {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  height: 100% !important;
  padding: 0 1.5rem !important;
  max-width: 1200px !important;
  margin: 0 auto !important;
  width: 100% !important;
  box-sizing: border-box !important;
}

.mobile-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: white !important;
  z-index: 10001;
}

.mobile-hamburger {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
}

.hamburger-line {
  width: 24px;
  height: 3px;
  background: white !important;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.hamburger-line.active:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger-line.active:nth-child(2) {
  opacity: 0;
}

.hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Mobile Menu Overlay */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 80px;
}

.mobile-menu-content {
  background: #1a1a1a;
  width: 90%;
  max-width: 400px;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-menu-header span {
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
}

.mobile-close-btn {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.mobile-close-btn:hover {
  border-color: #1d7aaf;
  color: #1d7aaf;
}

.mobile-nav-links {
  padding: 1rem 0 2rem 0;
}

.mobile-nav-links > a {
  display: block;
  color: white;
  text-decoration: none;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.mobile-nav-links > a:hover {
  background: rgba(29, 122, 175, 0.1);
  color: #1d7aaf;
  padding-left: 2rem;
}

.mobile-locations {
  margin: 1.5rem 0;
  padding: 0 1.5rem;
}

.mobile-locations h4 {
  color: #1d7aaf;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}

.mobile-locations a {
  display: block;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  margin: 0.25rem 0;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.mobile-locations a:hover {
  background: rgba(29, 122, 175, 0.1);
  color: #1d7aaf;
}

.mobile-cta-button {
  display: block !important;
  background: linear-gradient(135deg, #1d7aaf, #1e40af) !important;
  color: white !important;
  padding: 1rem 1.5rem !important;
  margin: 1.5rem 1.5rem 1rem 1.5rem !important;
  border-radius: 8px !important;
  text-align: center !important;
  font-weight: 600 !important;
  font-size: 1.1rem !important;
  text-decoration: none !important;
  border: none !important;
  transition: all 0.3s ease !important;
}

.mobile-cta-button:hover {
  background: linear-gradient(135deg, #1e40af, #1d7aaf) !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 25px rgba(29, 122, 175, 0.4) !important;
}

/* Show mobile header only on mobile devices */
@media (max-width: 768px) {
  .mobile-header {
    display: block;
  }
  
  /* Hide desktop navigation on mobile */
  .nav-menu {
    display: none !important;
  }
}

/* Hide mobile header on desktop */
@media (min-width: 769px) {
  .mobile-header {
    display: none !important;
  }
  
  .mobile-menu-overlay {
    display: none !important;
  }
}
`;

// Inject mobile styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = mobileStyles;
  document.head.appendChild(styleSheet);
}