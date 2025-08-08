import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-column">
            <h4>Contractor Websites</h4>
            <a href="/contractors/plumbing">Plumbing Websites</a>
            <a href="/contractors/electrical">Electrical Websites</a>
            <a href="/contractors/hvac">HVAC Websites</a>
            <a href="/contractors/roofing">Roofing Websites</a>
            <a href="/contractors/construction">Construction Websites</a>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <a href="/services/websites">Website Design</a>
            <a href="/services/automations">AI Automations</a>
            <a href="/services/it-services">Managed IT</a>
            <a href="/free-example">Free Website Example</a>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <a href="/about">About Us</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/contact">Contact</a>
            <a href="#services">Our Services</a>
          </div>
          <div className="footer-column">
            <h4>Get Started</h4>
            <p>LogicPros Web Development</p>
            <p>New Brunswick, Canada</p>
            <a href="mailto:aaron@logicpros.ca">aaron@logicpros.ca</a>
            <a href="tel:+15064782949">(506) 478-2949</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            <p>&copy; 2025 LogicPros Web Development. All rights reserved.</p>
          </div>
          <div className="social-icons">
            <div className="social-icon">📧</div>
            <div className="social-icon">📱</div>
            <div className="social-icon">💼</div>
            <div className="social-icon">🌐</div>
          </div>
        </div>
      </div>
    </footer>
  );
};