import React, { useState, useEffect } from 'react';

export const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleMouseEnter = (dropdown) => {
    setDropdownOpen(dropdown);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  const handleLinkClick = () => {
    setDropdownOpen(null);
  };

  return (
    <nav className={`nav-menu ${isVisible ? 'nav-visible' : 'nav-hidden'}`}>
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
            <div 
              className="nav-subdropdown"
              onMouseEnter={() => handleMouseEnter('websites')}
              onMouseLeave={() => handleMouseEnter('services')}
            >
              <a href="/services/websites" className="dropdown-item-with-submenu">
                <span className="dropdown-icon">🌐</span>
                Website Design
                <span className="submenu-arrow">▶</span>
              </a>
              <div className={`submenu-content ${dropdownOpen === 'websites' ? 'show' : ''}`}>
                <a href="/contractors/plumbing" onClick={handleLinkClick}>
                  <span className="dropdown-icon">🚰</span>
                  Plumbing Contractors
                </a>
                <a href="/contractors/electrical" onClick={handleLinkClick}>
                  <span className="dropdown-icon">⚡</span>
                  Electrical Contractors
                </a>
                <a href="/contractors/hvac" onClick={handleLinkClick}>
                  <span className="dropdown-icon">🌡️</span>
                  HVAC Contractors
                </a>
                <a href="/contractors/roofing" onClick={handleLinkClick}>
                  <span className="dropdown-icon">🏠</span>
                  Roofing Contractors
                </a>
                <a href="/contractors/construction" onClick={handleLinkClick}>
                  <span className="dropdown-icon">🏗️</span>
                  Construction
                </a>
                <a href="/contractors/landscaping" onClick={handleLinkClick}>
                  <span className="dropdown-icon">🌿</span>
                  Landscaping
                </a>
                <a href="/contractors/painting" onClick={handleLinkClick}>
                  <span className="dropdown-icon">🎨</span>
                  Painting Contractors
                </a>
                <a href="/contractors/flooring" onClick={handleLinkClick}>
                  <span className="dropdown-icon">📐</span>
                  Flooring Contractors
                </a>
                <a href="/contractors/concrete" onClick={handleLinkClick}>
                  <span className="dropdown-icon">🏗️</span>
                  Concrete Contractors
                </a>
                <a href="/contractors/remodeling" onClick={handleLinkClick}>
                  <span className="dropdown-icon">🏡</span>
                  Home Remodeling
                </a>
              </div>
            </div>
            <a href="/services/automations" onClick={handleLinkClick}>
              <span className="dropdown-icon">🤖</span>
              AI Automations
            </a>
            <a href="/services/it-services" onClick={handleLinkClick}>
              <span className="dropdown-icon">💻</span>
              Managed IT
            </a>
          </div>
          <div className="dropdown-hover-bridge"></div>
        </div>

        <div 
          className="nav-dropdown"
          onMouseEnter={() => handleMouseEnter('locations')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" className="nav-link">
            Locations
            <span className="dropdown-arrow">▼</span>
          </a>
          <div className={`dropdown-content ${dropdownOpen === 'locations' ? 'show' : ''}`}>
            <div className="dropdown-arrow-up"></div>
            <a href="/locations/fredericton" onClick={handleLinkClick}>
              <span className="dropdown-icon">🏢</span>
              Fredericton
            </a>
            <a href="/locations/moncton" onClick={handleLinkClick}>
              <span className="dropdown-icon">🏭</span>
              Moncton
            </a>
            <a href="/locations/saint-john" onClick={handleLinkClick}>
              <span className="dropdown-icon">⚓</span>
              Saint John
            </a>
          </div>
          <div className="dropdown-hover-bridge"></div>
        </div>

        <a href="/portfolio" className="nav-link">Portfolio</a>
        <a href="/about" className="nav-link">About</a>
        <a href="/contact" className="nav-link">Contact</a>
      </div>
      <a href="/contact" className="btn btn-secondary">Request Quote</a>
      <a href="/free-example" className="btn btn-primary btn-nav-cta">Free Website Example</a>
      <button className="mobile-menu-toggle">☰</button>
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
  color: var(--text-secondary);
}

.nav-dropdown:hover .dropdown-arrow {
  transform: rotate(180deg);
  color: var(--primary-color);
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
  background: white;
  min-width: 240px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.08);
  border-radius: 12px;
  z-index: 1000;
  top: calc(100% + 15px);
  left: 0;
  padding: 12px 0;
  border: 1px solid rgba(0,0,0,0.06);
  
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
  background: white;
  border: 1px solid rgba(0,0,0,0.06);
  border-bottom: none;
  border-right: none;
  transform: rotate(45deg);
  z-index: 1001;
}

/* Dropdown menu items */
.dropdown-content a {
  color: var(--text-primary);
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
  background: var(--primary-color);
  border-radius: 0 4px 4px 0;
  transform: scaleY(0);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.dropdown-content a:hover {
  background: rgba(0, 0, 0, 0.04);
  color: var(--primary-color);
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
  color: var(--text-secondary);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: auto;
}

.nav-subdropdown:hover .submenu-arrow {
  transform: rotate(90deg);
  color: var(--primary-color);
}

.submenu-content {
  position: absolute;
  left: 100%;
  top: 0;
  background: white;
  min-width: 280px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.08);
  border-radius: 12px;
  z-index: 1001;
  padding: 12px 0;
  border: 1px solid rgba(0,0,0,0.06);
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
  color: var(--text-primary);
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
  background: rgba(0, 0, 0, 0.04);
  color: var(--primary-color);
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

/* Mobile responsive design */
@media (max-width: 768px) {
  .nav-dropdown {
    display: block;
    width: 100%;
  }
  
  .dropdown-hover-bridge {
    display: none;
  }
  
  .dropdown-content {
    position: static;
    box-shadow: inset 0 3px 8px rgba(0,0,0,0.08);
    border: none;
    background: #f8f9fa;
    margin-top: 8px;
    border-radius: 8px;
    transform: none;
    backdrop-filter: none;
    max-height: 0;
    overflow: hidden;
    padding: 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .dropdown-content.show {
    max-height: 300px;
    padding: 8px 0;
  }
  
  .dropdown-arrow-up {
    display: none;
  }
  
  .dropdown-content a {
    margin: 0;
    border-radius: 0;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    padding: 12px 20px;
  }
  
  .dropdown-content a:hover {
    transform: none;
    padding-left: 32px;
    background: rgba(0,0,0,0.05);
  }
  
  .dropdown-arrow {
    font-size: 0.8rem;
  }
  
  /* Submenu mobile styles */
  .nav-subdropdown {
    display: block;
    width: 100%;
  }
  
  .submenu-content {
    position: static;
    box-shadow: inset 0 3px 8px rgba(0,0,0,0.12);
    border: none;
    background: #efefef;
    margin: 8px 0 0 20px;
    border-radius: 8px;
    transform: none;
    backdrop-filter: none;
    max-height: 0;
    overflow: hidden;
    padding: 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .submenu-content.show {
    max-height: 500px;
    padding: 8px 0;
  }
  
  .submenu-content a {
    margin: 0;
    border-radius: 0;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    padding: 10px 16px;
    font-size: 0.85rem;
  }
  
  .submenu-content a:hover {
    transform: none;
    padding-left: 24px;
    background: rgba(0,0,0,0.08);
  }
  
  .submenu-arrow {
    font-size: 0.7rem;
  }
}
`;

// Inject dropdown styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = dropdownStyles;
  document.head.appendChild(styleSheet);
}