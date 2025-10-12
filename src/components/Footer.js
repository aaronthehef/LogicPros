import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer modern-footer">
      <div className="footer-content">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-column footer-brand">
              <div className="footer-logo" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <img
                  src="/logicpros-new-logo.png"
                  alt="LogicPros"
                  style={{
                    width: '100%',
                    height: 'auto',
                    marginBottom: '1rem'
                  }}
                />
              </div>
              <p className="footer-tagline">Cybersecurity, AI Solutions & Professional Web Development</p>
              <p className="footer-description">
                Protecting and modernizing New Brunswick businesses with expert cybersecurity, 
                AI automation, and technology solutions.
              </p>
              <div className="footer-contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <a href="mailto:aaron@logicpros.ca">aaron@logicpros.ca</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <a href="tel:+15064782949">(506) 478-2949</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>New Brunswick, Canada</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="footer-column">
              <h4>Cybersecurity Services</h4>
              <a href="/services/it-services">Security Audits</a>
              <a href="/services/it-services">Password Management</a>
              <a href="/services/it-services">Multi-Factor Authentication</a>
              <a href="/services/it-services">Endpoint Security</a>
              <a href="/services/it-services">Managed IT Services</a>
            </div>

            {/* Technology Solutions */}
            <div className="footer-column">
              <h4>Technology Solutions</h4>
              <a href="/services/websites">Professional Websites</a>
              <a href="/services/automations">AI Automation</a>
              <a href="/services/automations">Chatbot Integration</a>
              <a href="/free-example">Free Website Example</a>
              <a href="/contact">Grant Assistance</a>
            </div>

            {/* Company */}
            <div className="footer-column">
              <h4>Company</h4>
              <a href="/about">About LogicPros</a>
              <a href="/contact">Get Consultation</a>
              <a href="/contact">Check Grant Eligibility</a>
              <a href="#services">Our Services</a>
              <div className="footer-certifications">
                <small>🔒 Cybersecurity Specialists</small>
                <small>🇨🇦 New Brunswick Based</small>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-legal">
              <p>&copy; 2025 LogicPros. All rights reserved.</p>
              <div className="footer-links">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
              </div>
            </div>
            <div className="footer-cta">
              <span className="footer-cta-text">Ready to secure your business?</span>
              <a href="/contact" className="btn btn-primary btn-small">Get Started</a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};