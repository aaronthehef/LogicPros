import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

export const MFAPage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="sticky-header">
        <div className="header-content">
          <div className="logo">
            <Logo />
          </div>
          <Navigation />
        </div>
      </header>

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>Multi-Factor Authentication Implementation for New Brunswick Businesses</h1>
              <p>
                Add critical layers of security beyond passwords with professional MFA implementation. 
                Protect your business systems in Fredericton, Moncton, Saint John, and across New Brunswick.
              </p>
              <div className="hero-cta">
                <a href="/contact" className="btn btn-primary">Get MFA Implementation Quote</a>
                <a href="/contact" className="secondary-link">Ask About Grant Eligibility →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Why MFA Matters */}
        <section className="section" style={{ backgroundColor: '#fff3cd' }}>
          <div className="container">
            <h2 className="section-title">Why Multi-Factor Authentication is Essential</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <h3>99.9%</h3>
                <p>of password attacks can be blocked by MFA</p>
              </div>
              <div className="stat-item">
                <h3>80%</h3>
                <p>of data breaches involve compromised credentials</p>
              </div>
              <div className="stat-item">
                <h3>50%</h3>
                <p>increase in cyber attacks on small businesses</p>
              </div>
            </div>
            <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '1.1rem' }}>
              Multi-Factor Authentication is your most effective defense against account takeovers, 
              even when passwords are compromised.
            </p>
          </div>
        </section>

        {/* What is MFA */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">What is Multi-Factor Authentication?</h2>
            <div className="content-grid">
              <div className="content-main">
                <p>
                  Multi-Factor Authentication (MFA) requires users to provide multiple forms of verification 
                  before accessing systems or data. Instead of relying solely on passwords, MFA combines 
                  something you know (password) with something you have (phone/token) or something you are (biometric).
                </p>
                <p>
                  Our MFA implementation services ensure your New Brunswick business has robust authentication 
                  across all critical systems, applications, and data access points.
                </p>
              </div>
              <div className="content-sidebar">
                <div className="info-box">
                  <h3>🛡️ Authentication Factors</h3>
                  <ul>
                    <li><strong>Knowledge:</strong> Passwords, PINs</li>
                    <li><strong>Possession:</strong> Phones, tokens</li>
                    <li><strong>Inherence:</strong> Fingerprints, face ID</li>
                    <li><strong>Location:</strong> Geographic verification</li>
                    <li><strong>Time:</strong> Access time restrictions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MFA Implementation Process */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Our MFA Implementation Process</h2>
            <div className="process-grid">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Security Assessment</h3>
                <p>
                  We evaluate your current authentication methods, identify critical access points, 
                  and determine the best MFA solution for your business systems and user needs.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Solution Design</h3>
                <p>
                  Design a comprehensive MFA strategy that covers all business-critical applications, 
                  considering user experience, security requirements, and integration capabilities.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Deployment & Configuration</h3>
                <p>
                  Install and configure MFA solutions across your systems, ensuring proper integration 
                  with existing applications and minimal disruption to business operations.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Training & Support</h3>
                <p>
                  Provide comprehensive user training and ongoing support to ensure smooth adoption 
                  and maximum security effectiveness of your MFA implementation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MFA Methods */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Multi-Factor Authentication Methods</h2>
            <div className="mfa-methods-grid">
              <div className="mfa-method">
                <div className="method-icon">📱</div>
                <h3>Mobile Authenticator Apps</h3>
                <p>Time-based codes generated by apps like Microsoft Authenticator, Google Authenticator, or Authy. Works offline and provides excellent security.</p>
                <div className="method-rating">⭐⭐⭐⭐⭐ Most Secure</div>
              </div>
              <div className="mfa-method">
                <div className="method-icon">💬</div>
                <h3>SMS Text Messages</h3>
                <p>Verification codes sent via text message to registered mobile phones. Easy to use but less secure than other methods.</p>
                <div className="method-rating">⭐⭐⭐ Good for Basic Protection</div>
              </div>
              <div className="mfa-method">
                <div className="method-icon">🔑</div>
                <h3>Hardware Security Keys</h3>
                <p>Physical devices like YubiKey that provide the highest level of security. Ideal for high-privilege accounts and sensitive data.</p>
                <div className="method-rating">⭐⭐⭐⭐⭐ Highest Security</div>
              </div>
              <div className="mfa-method">
                <div className="method-icon">👆</div>
                <h3>Biometric Authentication</h3>
                <p>Fingerprint, face recognition, or voice authentication. Convenient and secure for device-based access.</p>
                <div className="method-rating">⭐⭐⭐⭐ Very Secure</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section" style={{ backgroundColor: '#f0f9ff' }}>
          <div className="container">
            <h2 className="section-title">Benefits of Professional MFA Implementation</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">🛡️</div>
                <h3>Prevent Account Takeovers</h3>
                <p>
                  Even if passwords are compromised, attackers cannot access your systems without 
                  the additional authentication factors your employees control.
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">📋</div>
                <h3>Meet Compliance Requirements</h3>
                <p>
                  Many industry regulations and insurance policies now require MFA for accessing 
                  sensitive data and systems. Stay compliant and reduce liability.
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">💰</div>
                <h3>Reduce Security Incidents</h3>
                <p>
                  Dramatically decrease the likelihood of successful cyber attacks, data breaches, 
                  and the associated costs of incident response and recovery.
                </p>
              </div>
              <div className="benefit-item">
                <div benefit-icon">🔍</div>
                <h3>Enhanced Visibility</h3>
                <p>
                  Monitor authentication attempts, detect suspicious login patterns, and receive 
                  alerts about potential security threats in real-time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">MFA Implementation for Business Systems</h2>
            <div className="applications-grid">
              <div className="application-category">
                <h3>☁️ Cloud Applications</h3>
                <ul>
                  <li>Microsoft 365 and Google Workspace</li>
                  <li>Salesforce and CRM systems</li>
                  <li>Accounting software (QuickBooks, Sage)</li>
                  <li>Project management tools</li>
                  <li>Cloud storage (Dropbox, OneDrive)</li>
                </ul>
              </div>
              <div className="application-category">
                <h3>💻 Network Access</h3>
                <ul>
                  <li>VPN and remote access</li>
                  <li>Windows domain login</li>
                  <li>Server and workstation access</li>
                  <li>Wireless network authentication</li>
                  <li>Administrative accounts</li>
                </ul>
              </div>
              <div className="application-category">
                <h3>💼 Business Applications</h3>
                <ul>
                  <li>Industry-specific software</li>
                  <li>Database access</li>
                  <li>Financial systems</li>
                  <li>Customer portals</li>
                  <li>Internal business applications</li>
                </ul>
              </div>
              <div className="application-category">
                <h3>🔧 IT Infrastructure</h3>
                <ul>
                  <li>Network equipment management</li>
                  <li>Security system consoles</li>
                  <li>Backup system access</li>
                  <li>Monitoring and management tools</li>
                  <li>Cloud infrastructure platforms</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Focus */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">MFA for New Brunswick Industries</h2>
            <div className="industry-grid">
              <div className="industry-item">
                <h4>🏥 Healthcare</h4>
                <p>Protect patient data and medical systems with MFA that meets PIPEDA requirements and healthcare security standards.</p>
              </div>
              <div className="industry-item">
                <h4>⚖️ Legal Services</h4>
                <p>Secure client information and case management systems with professional-grade authentication that maintains confidentiality.</p>
              </div>
              <div className="industry-item">
                <h4>💰 Financial Services</h4>
                <p>Meet regulatory requirements and protect financial data with robust MFA implementation across all critical systems.</p>
              </div>
              <div className="industry-item">
                <h4>🏢 Professional Services</h4>
                <p>Protect client data and business systems with scalable MFA solutions that grow with your practice.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Service Areas */}
        <section className="section" style={{ backgroundColor: '#e8f5e8' }}>
          <div className="container">
            <h2 className="section-title">MFA Services Across New Brunswick</h2>
            <div className="location-grid">
              <div className="location-item">
                <h3>🏛️ Fredericton Region</h3>
                <p>
                  Supporting government contractors and professional services with MFA solutions 
                  that meet provincial security standards and compliance requirements.
                </p>
              </div>
              <div className="location-item">
                <h3>🏭 Moncton Area</h3>
                <p>
                  Helping manufacturing and logistics companies protect operational systems and 
                  administrative access with robust multi-factor authentication.
                </p>
              </div>
              <div className="location-item">
                <h3>⚓ Saint John</h3>
                <p>
                  Providing maritime and energy sector businesses with secure authentication 
                  solutions that protect critical infrastructure and business operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Add Critical Security Layers?</h2>
              <p>
                Protect your New Brunswick business with professional multi-factor authentication implementation. 
                Stop 99.9% of password attacks with additional security factors.
              </p>
              <div className="cta-buttons">
                <a href="/contact" className="btn btn-primary btn-large">Get MFA Implementation Quote</a>
                <a href="/contact" className="btn btn-secondary btn-large">Learn About Grant Funding</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};