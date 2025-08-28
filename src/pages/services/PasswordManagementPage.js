import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

export const PasswordManagementPage = () => {
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
              <h1>Enterprise Password Management Solutions for New Brunswick Businesses</h1>
              <p>
                Eliminate password-related security risks with professional password management implementation. 
                Secure password solutions for businesses in Fredericton, Moncton, Saint John, and across New Brunswick.
              </p>
              <div className="hero-cta">
                <a href="/contact" className="btn btn-primary">Get Password Management Quote</a>
                <a href="/contact" className="secondary-link">Ask About Grant Eligibility →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Password Problem */}
        <section className="section" style={{ backgroundColor: '#fff3cd' }}>
          <div className="container">
            <h2 className="section-title">The Password Problem Facing New Brunswick Businesses</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <h3>81%</h3>
                <p>of data breaches involve weak or stolen passwords</p>
              </div>
              <div className="stat-item">
                <h3>59%</h3>
                <p>of people reuse passwords across multiple accounts</p>
              </div>
              <div className="stat-item">
                <h3>$4.35M</h3>
                <p>average cost of a password-related data breach</p>
              </div>
            </div>
            <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '1.1rem' }}>
              Don't let weak passwords become your business's biggest vulnerability. 
              Professional password management protects your team and customers.
            </p>
          </div>
        </section>

        {/* What is Password Management */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Enterprise Password Management Solutions</h2>
            <div className="content-grid">
              <div className="content-main">
                <p>
                  Enterprise password management provides your business with secure, centralized password storage 
                  and generation. Our solutions eliminate weak passwords, reduce security risks, and improve 
                  productivity by automating password creation and management across your organization.
                </p>
                <p>
                  We implement industry-leading password management platforms that integrate seamlessly with 
                  your existing systems while providing comprehensive security controls and administrative oversight.
                </p>
              </div>
              <div className="content-sidebar">
                <div className="info-box">
                  <h3>🔐 Core Features</h3>
                  <ul>
                    <li>Secure password generation</li>
                    <li>Encrypted password storage</li>
                    <li>Team password sharing</li>
                    <li>Admin controls & reporting</li>
                    <li>Multi-device synchronization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Our Password Management Implementation Process</h2>
            <div className="process-grid">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Security Assessment</h3>
                <p>
                  We evaluate your current password practices, identify vulnerabilities, 
                  and determine the best password management solution for your business needs and budget.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Platform Selection & Setup</h3>
                <p>
                  Choose the right enterprise password manager and configure it for your organization. 
                  We handle installation, configuration, and integration with your existing systems.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Team Training & Migration</h3>
                <p>
                  Provide comprehensive training for your team and assist with migrating existing passwords. 
                  We ensure smooth adoption with minimal disruption to daily operations.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Ongoing Support</h3>
                <p>
                  Provide continued support, policy updates, and regular security reviews to ensure 
                  your password management system remains effective and secure over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Benefits of Professional Password Management</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">🛡️</div>
                <h3>Enhanced Security</h3>
                <p>
                  Generate strong, unique passwords for every account. Eliminate password reuse 
                  and protect against credential stuffing attacks that target weak passwords.
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">⚡</div>
                <h3>Improved Productivity</h3>
                <p>
                  Employees no longer waste time on password resets or trying to remember passwords. 
                  Automatic login and form filling streamline daily workflows.
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">👥</div>
                <h3>Secure Team Sharing</h3>
                <p>
                  Safely share passwords for shared accounts without compromising security. 
                  Control who has access to what credentials with granular permissions.
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">📊</div>
                <h3>Administrative Control</h3>
                <p>
                  Monitor password health, enforce security policies, and maintain oversight 
                  of all organizational credentials from a centralized admin dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section" style={{ backgroundColor: '#f0f9ff' }}>
          <div className="container">
            <h2 className="section-title">Enterprise Password Management Features</h2>
            <div className="features-grid">
              <div className="feature-category">
                <h3>🔒 Security Features</h3>
                <ul>
                  <li>Military-grade encryption (AES-256)</li>
                  <li>Zero-knowledge architecture</li>
                  <li>Secure password generation</li>
                  <li>Dark web monitoring</li>
                  <li>Security breach alerts</li>
                  <li>Password strength analysis</li>
                </ul>
              </div>
              <div className="feature-category">
                <h3>👨‍💼 Administrative Tools</h3>
                <ul>
                  <li>User and group management</li>
                  <li>Policy enforcement</li>
                  <li>Activity monitoring and reporting</li>
                  <li>Emergency access procedures</li>
                  <li>Integration with Active Directory</li>
                  <li>Single sign-on (SSO) support</li>
                </ul>
              </div>
              <div className="feature-category">
                <h3>💼 Business Integration</h3>
                <ul>
                  <li>Browser extensions for all major browsers</li>
                  <li>Mobile apps for iOS and Android</li>
                  <li>Desktop applications</li>
                  <li>API integration capabilities</li>
                  <li>Multi-factor authentication support</li>
                  <li>Backup and recovery options</li>
                </ul>
              </div>
              <div className="feature-category">
                <h3>📱 User Experience</h3>
                <ul>
                  <li>Automatic password capture and save</li>
                  <li>One-click login functionality</li>
                  <li>Secure note storage</li>
                  <li>Form filling automation</li>
                  <li>Cross-device synchronization</li>
                  <li>Offline access capabilities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Password Management for New Brunswick Industries</h2>
            <div className="industry-grid">
              <div className="industry-item">
                <h4>🏥 Healthcare</h4>
                <p>Protect patient data with secure access to EHR systems, medical devices, and administrative platforms while maintaining PIPEDA compliance.</p>
              </div>
              <div className="industry-item">
                <h4>⚖️ Legal</h4>
                <p>Secure access to case management systems, client portals, and confidential documents with professional-grade password protection.</p>
              </div>
              <div className="industry-item">
                <h4>💰 Financial Services</h4>
                <p>Protect sensitive financial data and client information with enterprise password management that meets regulatory requirements.</p>
              </div>
              <div className="industry-item">
                <h4>🏢 Professional Services</h4>
                <p>Streamline access to client systems, project management tools, and business applications while maintaining security standards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Service */}
        <section className="section" style={{ backgroundColor: '#e8f5e8' }}>
          <div className="container">
            <h2 className="section-title">Password Management Services Across New Brunswick</h2>
            <div className="location-grid">
              <div className="location-item">
                <h3>🏛️ Fredericton</h3>
                <p>
                  Supporting government contractors and professional services with compliant password management 
                  solutions that meet provincial security requirements.
                </p>
              </div>
              <div className="location-item">
                <h3>🏭 Moncton</h3>
                <p>
                  Helping manufacturing and logistics companies secure their operational systems and 
                  administrative access with robust password management.
                </p>
              </div>
              <div className="location-item">
                <h3>⚓ Saint John</h3>
                <p>
                  Providing maritime and energy sector businesses with secure password solutions 
                  that protect critical infrastructure and business systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Eliminate Password Security Risks?</h2>
              <p>
                Protect your New Brunswick business with professional password management implementation. 
                Stop password-related breaches before they happen.
              </p>
              <div className="cta-buttons">
                <a href="/contact" className="btn btn-primary btn-large">Get Password Management Quote</a>
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