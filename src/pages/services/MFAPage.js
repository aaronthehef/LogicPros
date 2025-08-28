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
              <h1>Multi-Factor Authentication for New Brunswick Businesses</h1>
              <p className="hero-subheadline">
                Add critical layers of security beyond passwords with professional MFA implementation. 
                Protect your business systems in Fredericton, Moncton, Saint John, and across New Brunswick.
              </p>
              <div className="hero-cta-section">
                <a href="/contact" className="btn btn-primary btn-hero">Get MFA Implementation Quote</a>
                <a href="/contact" className="secondary-link">Ask About Grant Eligibility →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Why MFA Matters Statistics */}
        <section className="section" style={{ backgroundColor: '#fff3cd', padding: '60px 0' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '50px' }}>
              <h2 className="section-title" style={{ color: '#2c3e50' }}>Why Multi-Factor Authentication is Critical</h2>
              <p style={{ fontSize: '1.2rem', color: '#2c3e50', maxWidth: '800px', margin: '20px auto 0' }}>
                The cybersecurity landscape is evolving rapidly. Traditional password security is no longer sufficient 
                against modern attack methods targeting New Brunswick businesses.
              </p>
            </div>
            <div className="features-grid animate-on-scroll" style={{ marginBottom: '50px' }}>
              <div className="feature-item" style={{ textAlign: 'center', padding: '30px' }}>
                <h3 style={{ fontSize: '3rem', color: '#e74c3c', fontWeight: '700', margin: '0 0 10px 0' }}>99.9%</h3>
                <p style={{ fontSize: '1.1rem', color: '#2c3e50', fontWeight: '600' }}>of password attacks can be blocked by MFA</p>
                <p style={{ fontSize: '0.95rem', color: '#34495e', marginTop: '10px' }}>According to Microsoft Security Intelligence</p>
              </div>
              <div className="feature-item" style={{ textAlign: 'center', padding: '30px' }}>
                <h3 style={{ fontSize: '3rem', color: '#e67e22', fontWeight: '700', margin: '0 0 10px 0' }}>81%</h3>
                <p style={{ fontSize: '1.1rem', color: '#2c3e50', fontWeight: '600' }}>of company data breaches are due to poor passwords</p>
                <p style={{ fontSize: '0.95rem', color: '#34495e', marginTop: '10px' }}>Verizon Data Breach Investigations Report</p>
              </div>
              <div className="feature-item" style={{ textAlign: 'center', padding: '30px' }}>
                <h3 style={{ fontSize: '3rem', color: '#8e44ad', fontWeight: '700', margin: '0 0 10px 0' }}>300%</h3>
                <p style={{ fontSize: '1.1rem', color: '#2c3e50', fontWeight: '600' }}>increase in cyber attacks on Canadian SMBs</p>
                <p style={{ fontSize: '0.95rem', color: '#34495e', marginTop: '10px' }}>Canadian Centre for Cyber Security</p>
              </div>
            </div>
            
            <div style={{ background: 'rgba(255, 255, 255, 0.9)', borderRadius: '15px', padding: '40px', marginTop: '40px' }}>
              <h3 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '30px', fontSize: '1.5rem' }}>The Cost of Not Having MFA</h3>
              <div className="features-grid">
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '15px' }}>💰</div>
                  <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>$4.88M Average</h4>
                  <p style={{ color: '#2c3e50' }}>Cost of a data breach in Canada (IBM, 2024)</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '15px' }}>⏰</div>
                  <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>287 Days Average</h4>
                  <p style={{ color: '#2c3e50' }}>Time to identify and contain a breach</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '15px' }}>📉</div>
                  <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>60% Close</h4>
                  <p style={{ color: '#2c3e50' }}>Small businesses close within 6 months of major breach</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is MFA */}
        <section className="section">
          <div className="container">
            <div className="section-header" style={{ marginBottom: '60px' }}>
              <h2 className="section-title" style={{ color: '#2c3e50' }}>Understanding Multi-Factor Authentication</h2>
              <p style={{ fontSize: '1.2rem', color: '#2c3e50', maxWidth: '800px', margin: '20px auto 0' }}>
                MFA requires multiple forms of verification before accessing systems, combining something you know 
                (password) with something you have (phone) or something you are (biometrics) for maximum security.
              </p>
            </div>
            
            {/* Three Factors Explained */}
            <div style={{ marginBottom: '60px' }}>
              <h3 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '40px', fontSize: '1.8rem' }}>The Three Authentication Factors</h3>
              <div className="features-grid animate-on-scroll">
                <div style={{ textAlign: 'center', padding: '30px', background: '#f8f9fa', borderRadius: '15px' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🧠</div>
                  <h4 style={{ color: '#2c3e50', marginBottom: '15px' }}>Something You Know</h4>
                  <p style={{ color: '#2c3e50' }}>Passwords, PINs, security questions, or passphrases that exist in your memory</p>
                </div>
                <div style={{ textAlign: 'center', padding: '30px', background: '#f8f9fa', borderRadius: '15px' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📱</div>
                  <h4 style={{ color: '#2c3e50', marginBottom: '15px' }}>Something You Have</h4>
                  <p style={{ color: '#2c3e50' }}>Mobile devices, hardware tokens, smart cards, or authenticator apps</p>
                </div>
                <div style={{ textAlign: 'center', padding: '30px', background: '#f8f9fa', borderRadius: '15px' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '20px' }}>👤</div>
                  <h4 style={{ color: '#2c3e50', marginBottom: '15px' }}>Something You Are</h4>
                  <p style={{ color: '#2c3e50' }}>Fingerprints, facial recognition, voice patterns, or retinal scans</p>
                </div>
              </div>
            </div>
            
            <div className="services-grid animate-on-scroll">
              <div className="service-card" style={{ border: '2px solid #3498db' }}>
                <div className="service-icon floating-icon">📱</div>
                <h3 style={{ color: '#2c3e50' }}>Mobile Authenticator Apps</h3>
                <p style={{ color: '#2c3e50', lineHeight: '1.6' }}>
                  Time-based one-time passwords (TOTP) generated by apps like Microsoft Authenticator, 
                  Google Authenticator, or Authy. Works offline and provides excellent security 
                  with 30-second rotating codes.
                </p>
                <div style={{ marginTop: '15px' }}>
                  <div className="feature-highlight" style={{ background: '#3498db', color: 'white' }}>Recommended for Most Users</div>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <strong style={{ color: '#2c3e50' }}>Best for:</strong>
                  <ul style={{ color: '#2c3e50', marginTop: '10px', paddingLeft: '20px' }}>
                    <li>Office 365 and Google Workspace</li>
                    <li>Banking and financial applications</li>
                    <li>Cloud services and remote access</li>
                  </ul>
                </div>
              </div>
              
              <div className="service-card" style={{ border: '2px solid #e74c3c' }}>
                <div className="service-icon floating-icon">🔑</div>
                <h3 style={{ color: '#2c3e50' }}>Hardware Security Keys</h3>
                <p style={{ color: '#2c3e50', lineHeight: '1.6' }}>
                  Physical devices like YubiKey or Google Titan that provide the highest level of security 
                  using FIDO2/WebAuthn standards. Immune to phishing attacks and SIM swapping.
                </p>
                <div style={{ marginTop: '15px' }}>
                  <div className="feature-highlight" style={{ background: '#e74c3c', color: 'white' }}>Maximum Security</div>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <strong style={{ color: '#2c3e50' }}>Perfect for:</strong>
                  <ul style={{ color: '#2c3e50', marginTop: '10px', paddingLeft: '20px' }}>
                    <li>Administrator accounts</li>
                    <li>Financial systems access</li>
                    <li>High-value target protection</li>
                  </ul>
                </div>
              </div>
              
              <div className="service-card" style={{ border: '2px solid #27ae60' }}>
                <div className="service-icon floating-icon">👆</div>
                <h3 style={{ color: '#2c3e50' }}>Biometric Authentication</h3>
                <p style={{ color: '#2c3e50', lineHeight: '1.6' }}>
                  Fingerprint scanning, facial recognition, iris scanning, or voice authentication. 
                  Convenient and secure for device-based access control and mobile applications.
                </p>
                <div style={{ marginTop: '15px' }}>
                  <div className="feature-highlight" style={{ background: '#27ae60', color: 'white' }}>Most Convenient</div>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <strong style={{ color: '#2c3e50' }}>Ideal for:</strong>
                  <ul style={{ color: '#2c3e50', marginTop: '10px', paddingLeft: '20px' }}>
                    <li>Mobile device unlocking</li>
                    <li>Physical facility access</li>
                    <li>Time and attendance systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '60px' }}>
              <h2 className="section-title" style={{ color: '#2c3e50' }}>Why Your New Brunswick Business Needs Professional MFA</h2>
              <p style={{ fontSize: '1.2rem', color: '#2c3e50', maxWidth: '800px', margin: '20px auto 0' }}>
                Professional implementation ensures maximum security effectiveness while maintaining user productivity 
                and business continuity across your organization.
              </p>
            </div>
            
            <div className="features-grid animate-on-scroll" style={{ marginBottom: '50px' }}>
              <div className="feature-item" style={{ padding: '40px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🛡️</div>
                <h3 style={{ color: '#2c3e50', marginBottom: '20px', fontSize: '1.4rem' }}>Prevent Account Takeovers</h3>
                <p style={{ color: '#2c3e50', lineHeight: '1.6', marginBottom: '20px' }}>
                  Even if passwords are compromised through phishing, data breaches, or social engineering, 
                  attackers cannot access your systems without the additional authentication factors 
                  your employees physically control.
                </p>
                <div style={{ background: '#ecf0f1', padding: '15px', borderRadius: '8px' }}>
                  <strong style={{ color: '#2c3e50' }}>Real Protection Against:</strong>
                  <ul style={{ color: '#2c3e50', marginTop: '10px', paddingLeft: '20px' }}>
                    <li>Credential stuffing attacks</li>
                    <li>Phishing and social engineering</li>
                    <li>Password spray attacks</li>
                    <li>Compromised password databases</li>
                  </ul>
                </div>
              </div>
              
              <div className="feature-item" style={{ padding: '40px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📋</div>
                <h3 style={{ color: '#2c3e50', marginBottom: '20px', fontSize: '1.4rem' }}>Meet Compliance & Insurance Requirements</h3>
                <p style={{ color: '#2c3e50', lineHeight: '1.6', marginBottom: '20px' }}>
                  Many industry regulations, cyber insurance policies, and client contracts now require 
                  MFA for accessing sensitive data and systems. Stay compliant and reduce liability 
                  while demonstrating security maturity.
                </p>
                <div style={{ background: '#ecf0f1', padding: '15px', borderRadius: '8px' }}>
                  <strong style={{ color: '#2c3e50' }}>Required for:</strong>
                  <ul style={{ color: '#2c3e50', marginTop: '10px', paddingLeft: '20px' }}>
                    <li>Cyber insurance coverage</li>
                    <li>PIPEDA compliance</li>
                    <li>Professional services contracts</li>
                    <li>Government contractor requirements</li>
                  </ul>
                </div>
              </div>
              
              <div className="feature-item" style={{ padding: '40px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>💰</div>
                <h3 style={{ color: '#2c3e50', marginBottom: '20px', fontSize: '1.4rem' }}>Reduce Security Incident Costs</h3>
                <p style={{ color: '#2c3e50', lineHeight: '1.6', marginBottom: '20px' }}>
                  Dramatically decrease the likelihood of successful cyber attacks, data breaches, 
                  and the associated costs of incident response, recovery, legal fees, and 
                  business disruption.
                </p>
                <div style={{ background: '#ecf0f1', padding: '15px', borderRadius: '8px' }}>
                  <strong style={{ color: '#2c3e50' }}>Avoid Costs From:</strong>
                  <ul style={{ color: '#2c3e50', marginTop: '10px', paddingLeft: '20px' }}>
                    <li>Business interruption and downtime</li>
                    <li>Ransomware and data recovery</li>
                    <li>Legal fees and regulatory fines</li>
                    <li>Reputation damage and client loss</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Additional Benefits */}
            <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '20px', padding: '50px', color: 'white', marginTop: '50px' }}>
              <h3 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.8rem' }}>Additional Business Benefits</h3>
              <div className="features-grid">
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>📊</div>
                  <h4 style={{ marginBottom: '15px', fontSize: '1.2rem' }}>Enhanced Productivity</h4>
                  <p style={{ opacity: '0.9', fontSize: '0.95rem' }}>Single sign-on integration reduces password fatigue while improving security</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🌍</div>
                  <h4 style={{ marginBottom: '15px', fontSize: '1.2rem' }}>Secure Remote Work</h4>
                  <p style={{ opacity: '0.9', fontSize: '0.95rem' }}>Enable confident remote access to business systems from anywhere</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🎯</div>
                  <h4 style={{ marginBottom: '15px', fontSize: '1.2rem' }}>Competitive Advantage</h4>
                  <p style={{ opacity: '0.9', fontSize: '0.95rem' }}>Demonstrate security maturity to clients and business partners</p>
                </div>
              </div>
            </div>
            
            <div className="cta-buttons" style={{ marginTop: '50px' }}>
              <a href="/contact" className="btn btn-primary">Get MFA Implementation</a>
              <a href="/contact" className="btn btn-secondary">Ask About Grants</a>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="section">
          <div className="container">
            <div className="section-header" style={{ marginBottom: '60px' }}>
              <h2 className="section-title" style={{ color: '#2c3e50' }}>Our Comprehensive MFA Implementation Process</h2>
              <p style={{ fontSize: '1.2rem', color: '#2c3e50', maxWidth: '800px', margin: '20px auto 0' }}>
                Professional multi-factor authentication implementation designed specifically for New Brunswick 
                businesses, ensuring security without disrupting productivity.
              </p>
            </div>
            
            <div className="services-grid animate-on-scroll" style={{ marginBottom: '60px' }}>
              <div className="service-card" style={{ padding: '40px', border: '3px solid #3498db', borderRadius: '15px' }}>
                <div className="service-icon floating-icon" style={{ fontSize: '3rem', marginBottom: '25px' }}>1️⃣</div>
                <h3 style={{ color: '#2c3e50', marginBottom: '25px', fontSize: '1.4rem' }}>Security Assessment & Planning</h3>
                <p style={{ color: '#2c3e50', lineHeight: '1.6', marginBottom: '25px' }}>
                  Comprehensive evaluation of your current authentication methods, identification of 
                  critical access points, and analysis of your specific business requirements 
                  and compliance needs.
                </p>
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
                  <strong style={{ color: '#2c3e50', display: 'block', marginBottom: '15px' }}>What We Analyze:</strong>
                  <ul style={{ color: '#2c3e50', paddingLeft: '20px', margin: '0' }}>
                    <li>Current authentication systems and vulnerabilities</li>
                    <li>User roles and access requirements</li>
                    <li>Compliance and insurance requirements</li>
                    <li>Integration points with existing systems</li>
                    <li>User experience and productivity considerations</li>
                  </ul>
                </div>
                <div style={{ marginTop: '20px', padding: '15px', background: '#e8f4f8', borderRadius: '8px' }}>
                  <strong style={{ color: '#2c3e50' }}>Timeline:</strong> <span style={{ color: '#2c3e50' }}>1-2 weeks</span>
                </div>
              </div>
              
              <div className="service-card" style={{ padding: '40px', border: '3px solid #e74c3c', borderRadius: '15px' }}>
                <div className="service-icon floating-icon" style={{ fontSize: '3rem', marginBottom: '25px' }}>2️⃣</div>
                <h3 style={{ color: '#2c3e50', marginBottom: '25px', fontSize: '1.4rem' }}>Solution Design & Deployment</h3>
                <p style={{ color: '#2c3e50', lineHeight: '1.6', marginBottom: '25px' }}>
                  Design and implement a comprehensive MFA strategy across all business-critical 
                  applications with proper integration, testing, and minimal disruption to 
                  daily operations.
                </p>
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
                  <strong style={{ color: '#2c3e50', display: 'block', marginBottom: '15px' }}>Implementation Includes:</strong>
                  <ul style={{ color: '#2c3e50', paddingLeft: '20px', margin: '0' }}>
                    <li>MFA system configuration and integration</li>
                    <li>User account setup and device enrollment</li>
                    <li>Policy configuration and conditional access</li>
                    <li>Backup authentication methods</li>
                    <li>Security monitoring and alerting setup</li>
                  </ul>
                </div>
                <div style={{ marginTop: '20px', padding: '15px', background: '#fdf2f2', borderRadius: '8px' }}>
                  <strong style={{ color: '#2c3e50' }}>Timeline:</strong> <span style={{ color: '#2c3e50' }}>2-4 weeks</span>
                </div>
              </div>
              
              <div className="service-card" style={{ padding: '40px', border: '3px solid #27ae60', borderRadius: '15px' }}>
                <div className="service-icon floating-icon" style={{ fontSize: '3rem', marginBottom: '25px' }}>3️⃣</div>
                <h3 style={{ color: '#2c3e50', marginBottom: '25px', fontSize: '1.4rem' }}>Training & Ongoing Support</h3>
                <p style={{ color: '#2c3e50', lineHeight: '1.6', marginBottom: '25px' }}>
                  Comprehensive user training and ongoing support to ensure smooth adoption, 
                  maximum security effectiveness, and continuous optimization of your 
                  MFA implementation.
                </p>
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
                  <strong style={{ color: '#2c3e50', display: 'block', marginBottom: '15px' }}>Support Services:</strong>
                  <ul style={{ color: '#2c3e50', paddingLeft: '20px', margin: '0' }}>
                    <li>Staff training sessions and documentation</li>
                    <li>Device enrollment assistance</li>
                    <li>Ongoing technical support and troubleshooting</li>
                    <li>Security monitoring and incident response</li>
                    <li>System updates and maintenance</li>
                  </ul>
                </div>
                <div style={{ marginTop: '20px', padding: '15px', background: '#f0f9f4', borderRadius: '8px' }}>
                  <strong style={{ color: '#2c3e50' }}>Timeline:</strong> <span style={{ color: '#2c3e50' }}>Ongoing</span>
                </div>
              </div>
            </div>
            
            {/* Additional Implementation Details */}
            <div style={{ background: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)', borderRadius: '20px', padding: '50px', color: 'white' }}>
              <h3 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '1.8rem' }}>Why Choose Professional Implementation?</h3>
              <div className="features-grid">
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>⚙️</div>
                  <h4 style={{ marginBottom: '15px', fontSize: '1.2rem' }}>Expert Configuration</h4>
                  <p style={{ opacity: '0.9', fontSize: '0.95rem' }}>Proper setup prevents security gaps and ensures optimal user experience</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🔄</div>
                  <h4 style={{ marginBottom: '15px', fontSize: '1.2rem' }}>Seamless Integration</h4>
                  <p style={{ opacity: '0.9', fontSize: '0.95rem' }}>Works with your existing systems without disrupting business operations</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>📞</div>
                  <h4 style={{ marginBottom: '15px', fontSize: '1.2rem' }}>Local Support</h4>
                  <p style={{ opacity: '0.9', fontSize: '0.95rem' }}>New Brunswick-based support team available when you need assistance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Service Areas */}
        <section className="section" style={{ backgroundColor: '#f0f9ff' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '60px' }}>
              <h2 className="section-title" style={{ color: '#2c3e50' }}>MFA Services Across New Brunswick</h2>
              <p style={{ fontSize: '1.2rem', color: '#2c3e50', maxWidth: '800px', margin: '20px auto 0' }}>
                Professional multi-factor authentication services delivered by local experts who understand 
                the unique needs of New Brunswick businesses and regulatory requirements.
              </p>
            </div>
            
            <div className="features-grid animate-on-scroll" style={{ marginBottom: '50px' }}>
              <div className="feature-item" style={{ textAlign: 'center', padding: '40px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '4rem', marginBottom: '25px' }}>🏛️</div>
                <h3 style={{ color: '#2c3e50', marginBottom: '20px', fontSize: '1.5rem' }}>Fredericton Region</h3>
                <p style={{ color: '#2c3e50', lineHeight: '1.6', marginBottom: '25px' }}>
                  Supporting government contractors, professional services, and educational institutions 
                  with MFA solutions that meet provincial security standards and compliance requirements.
                </p>
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
                  <strong style={{ color: '#2c3e50', display: 'block', marginBottom: '10px' }}>Specialized Services:</strong>
                  <ul style={{ color: '#2c3e50', textAlign: 'left', paddingLeft: '20px' }}>
                    <li>Government contractor security compliance</li>
                    <li>Professional services client portal security</li>
                    <li>Healthcare practice PIPEDA compliance</li>
                    <li>Legal firm document security</li>
                  </ul>
                </div>
              </div>
              
              <div className="feature-item" style={{ textAlign: 'center', padding: '40px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '4rem', marginBottom: '25px' }}>🏭</div>
                <h3 style={{ color: '#2c3e50', marginBottom: '20px', fontSize: '1.5rem' }}>Moncton Area</h3>
                <p style={{ color: '#2c3e50', lineHeight: '1.6', marginBottom: '25px' }}>
                  Helping manufacturing, logistics, and technology companies protect operational 
                  systems with robust multi-factor authentication solutions that don't impact productivity.
                </p>
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
                  <strong style={{ color: '#2c3e50', display: 'block', marginBottom: '10px' }}>Industry Focus:</strong>
                  <ul style={{ color: '#2c3e50', textAlign: 'left', paddingLeft: '20px' }}>
                    <li>Manufacturing system security</li>
                    <li>Logistics and transportation</li>
                    <li>Call center and customer service</li>
                    <li>Technology and software companies</li>
                  </ul>
                </div>
              </div>
              
              <div className="feature-item" style={{ textAlign: 'center', padding: '40px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '4rem', marginBottom: '25px' }}>⚓</div>
                <h3 style={{ color: '#2c3e50', marginBottom: '20px', fontSize: '1.5rem' }}>Saint John</h3>
                <p style={{ color: '#2c3e50', lineHeight: '1.6', marginBottom: '25px' }}>
                  Providing maritime, energy sector, and industrial businesses with secure authentication 
                  solutions that protect critical infrastructure and meet industry regulations.
                </p>
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
                  <strong style={{ color: '#2c3e50', display: 'block', marginBottom: '10px' }}>Critical Sectors:</strong>
                  <ul style={{ color: '#2c3e50', textAlign: 'left', paddingLeft: '20px' }}>
                    <li>Maritime and port operations</li>
                    <li>Energy and utilities</li>
                    <li>Industrial manufacturing</li>
                    <li>Financial services and credit unions</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Service Coverage */}
            <div style={{ background: 'white', borderRadius: '20px', padding: '50px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              <h3 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '40px', fontSize: '1.8rem' }}>Complete New Brunswick Coverage</h3>
              <div className="features-grid">
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🚗</div>
                  <h4 style={{ color: '#2c3e50', marginBottom: '15px', fontSize: '1.2rem' }}>On-Site Services</h4>
                  <p style={{ color: '#2c3e50', fontSize: '0.95rem' }}>Available throughout New Brunswick for initial setup and training</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>💻</div>
                  <h4 style={{ color: '#2c3e50', marginBottom: '15px', fontSize: '1.2rem' }}>Remote Support</h4>
                  <p style={{ color: '#2c3e50', fontSize: '0.95rem' }}>24/7 remote monitoring and support for all implemented systems</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>📞</div>
                  <h4 style={{ color: '#2c3e50', marginBottom: '15px', fontSize: '1.2rem' }}>Local Expertise</h4>
                  <p style={{ color: '#2c3e50', fontSize: '0.95rem' }}>Maritime timezone support with understanding of local business needs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common MFA Questions */}
        <section className="section" style={{ backgroundColor: '#2c3e50', color: 'white' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '60px' }}>
              <h2 className="section-title" style={{ color: 'white' }}>Common MFA Questions</h2>
              <p style={{ fontSize: '1.2rem', color: '#2c3e50', maxWidth: '800px', margin: '20px auto 0' }}>
                Answers to frequently asked questions about multi-factor authentication implementation
              </p>
            </div>
            
            <div className="features-grid">
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '30px', borderRadius: '15px', backdropFilter: 'blur(10px)' }}>
                <h3 style={{ color: '#74b9ff', marginBottom: '20px' }}>Will MFA slow down my employees?</h3>
                <p style={{ color: '#2c3e50', lineHeight: '1.6' }}>
                  Modern MFA solutions like push notifications and biometrics actually speed up login 
                  compared to typing complex passwords. Most authentications take less than 5 seconds.
                </p>
              </div>
              
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '30px', borderRadius: '15px', backdropFilter: 'blur(10px)' }}>
                <h3 style={{ color: '#74b9ff', marginBottom: '20px' }}>What if employees lose their phones?</h3>
                <p style={{ color: '#2c3e50', lineHeight: '1.6' }}>
                  We implement multiple backup methods including backup codes, alternative devices, 
                  and admin override capabilities to ensure business continuity.
                </p>
              </div>
              
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '30px', borderRadius: '15px', backdropFilter: 'blur(10px)' }}>
                <h3 style={{ color: '#74b9ff', marginBottom: '20px' }}>How much does MFA cost?</h3>
                <p style={{ color: '#2c3e50', lineHeight: '1.6' }}>
                  MFA costs are typically $2-8 per user per month, far less than the potential cost 
                  of a single security incident. Many solutions are included with existing software.
                </p>
              </div>
              
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '30px', borderRadius: '15px', backdropFilter: 'blur(10px)' }}>
                <h3 style={{ color: '#74b9ff', marginBottom: '20px' }}>Does it work with our existing systems?</h3>
                <p style={{ color: '#2c3e50', lineHeight: '1.6' }}>
                  Yes! Modern MFA solutions integrate with virtually all business applications 
                  including Office 365, Google Workspace, accounting software, and custom systems.
                </p>
              </div>
              
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '30px', borderRadius: '15px', backdropFilter: 'blur(10px)' }}>
                <h3 style={{ color: '#74b9ff', marginBottom: '20px' }}>How long does implementation take?</h3>
                <p style={{ color: '#2c3e50', lineHeight: '1.6' }}>
                  Most implementations take 2-4 weeks from start to finish, including assessment, 
                  configuration, testing, and user training with minimal business disruption.
                </p>
              </div>
              
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '30px', borderRadius: '15px', backdropFilter: 'blur(10px)' }}>
                <h3 style={{ color: '#74b9ff', marginBottom: '20px' }}>Is training provided?</h3>
                <p style={{ color: '#2c3e50', lineHeight: '1.6' }}>
                  Absolutely! We provide comprehensive training for all users and administrators, 
                  along with documentation and ongoing support to ensure successful adoption.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '25px', padding: '60px', color: 'white' }}>
              <h2 style={{ marginBottom: '25px', fontSize: '2.5rem' }}>Ready to Secure Your Business?</h2>
              <p style={{ fontSize: '1.3rem', opacity: '0.9', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}>
                Don't wait for a security incident. Protect your New Brunswick business with professional 
                multi-factor authentication that your employees will actually use.
              </p>
              
              <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '15px', padding: '30px', marginBottom: '40px' }}>
                <h3 style={{ marginBottom: '20px', fontSize: '1.3rem' }}>🎯 Get Started Today</h3>
                <div className="features-grid" style={{ textAlign: 'center' }}>
                  <div>
                    <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>📞</div>
                    <p style={{ fontSize: '0.95rem', opacity: '0.9' }}>Free consultation call to discuss your needs</p>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>📊</div>
                    <p style={{ fontSize: '0.95rem', opacity: '0.9' }}>Security assessment and customized proposal</p>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>🚀</div>
                    <p style={{ fontSize: '0.95rem', opacity: '0.9' }}>Professional implementation and training</p>
                  </div>
                </div>
              </div>
              
              <div className="cta-buttons">
                <a href="/contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '15px 35px', marginRight: '20px' }}>Get MFA Implementation Quote</a>
                <a href="/contact" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '15px 35px', background: 'rgba(255,255,255,0.2)', border: '2px solid white' }}>Ask About Grant Funding</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};