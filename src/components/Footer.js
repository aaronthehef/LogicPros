import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer modern-footer">
      <div className="footer-content">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-column footer-brand">
              <h4>LogicPros</h4>
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

      {/* Footer Styles */}
      <style jsx>{`
        .modern-footer {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          color: #ffffff;
          margin-top: 80px;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-main {
          padding: 60px 0 40px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-brand {
          padding-right: 20px;
        }

        .footer-brand h4 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 15px;
          color: #ffffff;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-tagline {
          font-size: 1.1rem;
          font-weight: 600;
          color: #e5e7eb;
          margin-bottom: 15px;
          line-height: 1.4;
        }

        .footer-description {
          color: #9ca3af;
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 0.95rem;
        }

        .footer-contact-info {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .contact-icon {
          font-size: 1.1rem;
        }

        .contact-item a {
          color: #3b82f6;
          text-decoration: none;
          font-weight: 500;
        }

        .contact-item a:hover {
          color: #60a5fa;
        }

        .footer-column h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 20px;
          color: #f9fafb;
          border-bottom: 2px solid #374151;
          padding-bottom: 10px;
        }

        .footer-column a {
          display: block;
          color: #d1d5db;
          text-decoration: none;
          padding: 6px 0;
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }

        .footer-column a:hover {
          color: #3b82f6;
          padding-left: 8px;
          transition: all 0.2s ease;
        }

        .footer-certifications {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-certifications small {
          color: #6b7280;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .footer-bottom {
          border-top: 1px solid #374151;
          padding: 25px 0;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-legal {
          display: flex;
          align-items: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .footer-legal p {
          color: #9ca3af;
          margin: 0;
          font-size: 0.9rem;
        }

        .footer-links {
          display: flex;
          gap: 20px;
        }

        .footer-links a {
          color: #6b7280;
          text-decoration: none;
          font-size: 0.9rem;
        }

        .footer-links a:hover {
          color: #3b82f6;
        }

        .footer-cta {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .footer-cta-text {
          color: #e5e7eb;
          font-weight: 500;
          font-size: 0.95rem;
        }

        .btn-small {
          padding: 8px 16px;
          font-size: 0.9rem;
          border-radius: 6px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-brand {
            padding-right: 0;
            text-align: center;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .footer-legal {
            flex-direction: column;
            gap: 15px;
          }

          .footer-cta {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer-main {
            padding: 40px 0 30px;
          }

          .footer-brand h4 {
            font-size: 1.8rem;
          }

          .footer-links {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};