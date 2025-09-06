import React, { useState } from 'react';

export const SimpleNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="simple-nav">
        <div className="nav-content">
          <div className="logo">Logic Pros</div>
          <button className="menu-toggle" onClick={toggleMenu}>
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* ULTRA SIMPLE MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeMenu}>
          <div className="mobile-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeMenu}>✕</button>
            <div className="menu-items">
              <a href="/services" onClick={closeMenu}>Services</a>
              <a href="/services/websites" onClick={closeMenu}>Website Design</a>
              <a href="/services/automations" onClick={closeMenu}>AI Automations</a>
              <a href="/services/it-services" onClick={closeMenu}>Cybersecurity & IT</a>
              <a href="/contractors/plumbing" onClick={closeMenu}>Plumbing</a>
              <a href="/contractors/electrical" onClick={closeMenu}>Electrical</a>
              <a href="/contractors/hvac" onClick={closeMenu}>HVAC</a>
              <a href="/contractors/roofing" onClick={closeMenu}>Roofing</a>
              <a href="/locations/fredericton" onClick={closeMenu}>Fredericton</a>
              <a href="/locations/moncton" onClick={closeMenu}>Moncton</a>
              <a href="/locations/saint-john" onClick={closeMenu}>Saint John</a>
              <a href="/about" onClick={closeMenu}>About</a>
              <a href="/contact" onClick={closeMenu}>Contact</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// DEAD SIMPLE CSS - NO COMPLEXITY
const simpleStyles = `
.simple-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(20px);
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}

.menu-toggle {
  display: none;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.menu-toggle:hover {
  border-color: #1d7aaf;
  color: #1d7aaf;
}

/* MOBILE OVERLAY - GUARANTEED TO WORK */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 1rem;
}

.mobile-content {
  background: #1a1a1a;
  width: 90%;
  max-width: 300px;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow-y: auto;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10000;
}

.close-btn:hover {
  border-color: #1d7aaf;
  color: #1d7aaf;
}

.menu-items {
  padding: 4rem 0 2rem 0;
}

.menu-items a {
  display: block;
  color: white;
  text-decoration: none;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.menu-items a:hover {
  background: rgba(29, 122, 175, 0.1);
  color: #1d7aaf;
  padding-left: 2rem;
}

/* Show on mobile only */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex !important;
    align-items: center;
    justify-content: center;
  }
}
`;

// Inject the simple styles
if (typeof document !== 'undefined') {
  const existingStyles = document.getElementById('simple-nav-styles');
  if (existingStyles) {
    existingStyles.remove();
  }
  
  const styleSheet = document.createElement('style');
  styleSheet.id = 'simple-nav-styles';
  styleSheet.textContent = simpleStyles;
  document.head.appendChild(styleSheet);
}