import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer modern-footer">
      <div className="footer-content">
        {/* Main Footer Content */}
        <div className="footer-main" style={{ paddingBottom: '40px' }}>
          {/* Main Footer Service Columns - HORIZONTAL LAYOUT */}
          <div className="footer-service-columns" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px',
            width: '100%',
            maxWidth: '1400px',
            margin: '20px auto 30px auto',
            paddingTop: '20px'
          }}>
            
            {/* Website Design Column */}
            <div>
              <h4 style={{
                color: '#1F7CFF',
                marginBottom: '25px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderBottom: '2px solid #1F7CFF',
                paddingBottom: '10px',
                letterSpacing: '0.5px'
              }}>
                <a href="/services/websites" style={{
                  color: '#1F7CFF',
                  textDecoration: 'none'
                }}>Website Design</a>
              </h4>
              <a href="/services/websites/custom" style={{
                display: 'block',
                color: '#ffffff',
                textDecoration: 'none',
                marginBottom: '16px',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease'
              }}>Custom Websites</a>
              <a href="/services/websites/ecommerce" style={{
                display: 'block',
                color: '#ffffff',
                textDecoration: 'none',
                marginBottom: '16px',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease'
              }}>E-Commerce Sites</a>
              <a href="/services/websites/redesign" style={{
                display: 'block',
                color: '#ffffff',
                textDecoration: 'none',
                marginBottom: '16px',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease'
              }}>Website Redesign</a>
              <a href="/services/websites/seo" style={{
                display: 'block',
                color: '#ffffff',
                textDecoration: 'none',
                marginBottom: '16px',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease'
              }}>SEO & Marketing</a>
            </div>

            {/* AI Automations Column */}
            <div>
              <h4 style={{
                color: '#1F7CFF',
                marginBottom: '25px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderBottom: '2px solid #1F7CFF',
                paddingBottom: '10px',
                letterSpacing: '0.5px'
              }}>
                <a href="/services/automations" style={{
                  color: '#1F7CFF',
                  textDecoration: 'none'
                }}>AI Automations</a>
              </h4>
              <a href="/services/automations/business" style={{
                display: 'block',
                color: '#ffffff',
                textDecoration: 'none',
                marginBottom: '16px',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease'
              }}>Business Automation</a>
              <a href="/services/automations/chatbots" style={{
                display: 'block',
                color: '#ffffff',
                textDecoration: 'none',
                marginBottom: '16px',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease'
              }}>AI Chatbots</a>
              <a href="/services/automations/workflow" style={{
                display: 'block',
                color: '#ffffff',
                textDecoration: 'none',
                marginBottom: '16px',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease'
              }}>Workflow Automation</a>
            </div>

            {/* Cybersecurity Column */}
            <div>
              <h4 style={{
                color: '#1F7CFF',
                marginBottom: '25px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderBottom: '2px solid #1F7CFF',
                paddingBottom: '10px',
                letterSpacing: '0.5px'
              }}>
                <a href="/services/cybersecurity" style={{
                  color: '#1F7CFF',
                  textDecoration: 'none'
                }}>Cybersecurity</a>
              </h4>
              <a href="/services/security-audits" style={{
                display: 'block',
                color: '#ffffff',
                textDecoration: 'none',
                marginBottom: '16px',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease'
              }}>Security Audits</a>
              <a href="/services/password-management" style={{
                display: 'block',
                color: '#ffffff',
                textDecoration: 'none',
                marginBottom: '16px',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease'
              }}>Password Management</a>
              <a href="/services/multi-factor-authentication" style={{
                display: 'block',
                color: '#ffffff',
                textDecoration: 'none',
                marginBottom: '16px',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease'
              }}>Multi-Factor Authentication</a>
            </div>

            {/* Managed IT Services Column */}
            <div>
              <h4 style={{
                color: '#1F7CFF',
                marginBottom: '25px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderBottom: '2px solid #1F7CFF',
                paddingBottom: '10px',
                letterSpacing: '0.5px'
              }}>
                <a href="/services/managed-it" style={{
                  color: '#1F7CFF',
                  textDecoration: 'none'
                }}>Managed IT Services</a>
              </h4>
              <a href="/services/managed-it/helpdesk" style={{
                display: 'block',
                color: '#ffffff',
                textDecoration: 'none',
                marginBottom: '16px',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease'
              }}>IT Support & Helpdesk</a>
              <a href="/services/managed-it/network-management" style={{
                display: 'block',
                color: '#ffffff',
                textDecoration: 'none',
                marginBottom: '16px',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease'
              }}>Network Management</a>
              <a href="/services/managed-it/cloud-services" style={{
                display: 'block',
                color: '#ffffff',
                textDecoration: 'none',
                marginBottom: '16px',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease'
              }}>Cloud Services</a>
              <a href="/services/managed-it/consulting" style={{
                display: 'block',
                color: '#ffffff',
                textDecoration: 'none',
                marginBottom: '16px',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease'
              }}>IT Consulting</a>
            </div>

          </div>

          {/* Company Info and Links Row - 3-COLUMN STRUCTURE: 50% | 25% | 25% */}
          <div className="footer-company-row" style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gap: '40px',
            paddingTop: '50px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            marginBottom: '40px',
            width: '100%',
            maxWidth: '1400px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            {/* Force refresh with comment */}
            
            {/* COLUMN 1 - About LogicPros */}
            <div className="footer-about-column" style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div className="footer-logo" style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <img
                  src="/logicpros-new-logo.png"
                  alt="LogicPros"
                  style={{
                    width: '180px',
                    height: 'auto'
                  }}
                />
              </div>
              <p className="footer-tagline" style={{
                marginBottom: '0.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                color: '#e5e7eb'
              }}>Cybersecurity, AI Solutions & Professional Web Development</p>
              <p className="footer-description" style={{
                fontSize: '0.9rem',
                lineHeight: '1.4',
                color: '#9ca3af',
                marginBottom: '1.5rem'
              }}>
                Protecting and modernizing New Brunswick businesses with expert cybersecurity,
                AI automation, and technology solutions.
              </p>
              
            </div>

            {/* COLUMN 2 - Quick Links */}
            <div className="footer-links-column" style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h4 style={{
                color: '#1F7CFF',
                marginBottom: '25px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderBottom: '2px solid #1F7CFF',
                paddingBottom: '10px',
                letterSpacing: '0.5px'
              }}>Quick Links</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="/about" style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease'
                }}>About Us</a>
                <a href="/contact" style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease'
                }}>Contact</a>
                <a href="/privacy" style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease'
                }}>Privacy Policy</a>
                <a href="/terms" style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease'
                }}>Terms of Service</a>
              </div>
            </div>

            {/* COLUMN 3 - Get In Touch */}
            <div className="footer-contact-column" style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h4 style={{
                color: '#1F7CFF',
                marginBottom: '25px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderBottom: '2px solid #1F7CFF',
                paddingBottom: '10px',
                letterSpacing: '0.5px'
              }}>Get In Touch</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span>📧</span>
                  <a href="mailto:aaron@logicpros.ca" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.9rem' }}>aaron@logicpros.ca</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span>📱</span>
                  <a href="tel:+15064782949" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.9rem' }}>(506) 478-2949</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span>📍</span>
                  <span style={{ color: '#ffffff', fontSize: '0.9rem' }}>New Brunswick, Canada</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom" style={{ paddingTop: '40px' }}>
          <div className="footer-bottom-content">
            <div className="footer-legal">
              <p>&copy; 2025 LPS LogicPros Solutions Inc. All rights reserved.</p>
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