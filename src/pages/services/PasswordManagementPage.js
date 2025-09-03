import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { colors } from '../../styles/colors';

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
        <section className="hero-section" style={{ textAlign: 'center' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div className="hero-content" style={{ 
              textAlign: 'center !important', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto'
            }}>
              <h1 style={{ 
                textAlign: 'center !important', 
                width: '100%',
                margin: '0 auto 24px auto'
              }}>Enterprise Password Management for New Brunswick Businesses</h1>
              <p style={{ 
                textAlign: 'center !important', 
                width: '100%', 
                margin: '0 auto 40px auto'
              }}>
                Eliminate password-related security risks with professional enterprise password management. 
                Secure, scalable password solutions serving Fredericton, Moncton, Saint John, and across New Brunswick.
              </p>
              <div style={{ 
                textAlign: 'center !important', 
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                gap: '15px',
                flexWrap: 'wrap'
              }}>
                <a href="/contact" className="btn btn-primary">Get Password Management Quote</a>
                <a href="/contact" className="btn btn-secondary">Ask About Grant Eligibility</a>
              </div>
            </div>
          </div>
        </section>

        {/* Password Crisis Stats */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light, padding: '60px 20px' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '30px', textAlign: 'center' }}>
              <h2 style={{ color: colors.primary, fontSize: '2.2rem', marginBottom: '15px' }}>The Password Security Crisis</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto' }}>
                Weak passwords are the #1 cause of data breaches. Don't let poor password practices destroy your New Brunswick business.
              </p>
            </div>
            <div className="features-grid">
              <div className="feature-item" style={{ textAlign: 'center', background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '3rem', color: colors.accent, marginBottom: '10px' }}>81%</h3>
                <p style={{ color: colors.text.primary, fontWeight: '600' }}>of data breaches involve weak or stolen passwords</p>
              </div>
              <div className="feature-item" style={{ textAlign: 'center', background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '3rem', color: colors.accent, marginBottom: '10px' }}>59%</h3>
                <p style={{ color: colors.text.primary, fontWeight: '600' }}>of people reuse passwords across multiple accounts</p>
              </div>
              <div className="feature-item" style={{ textAlign: 'center', background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '3rem', color: colors.accent, marginBottom: '10px' }}>$4.88M</h3>
                <p style={{ color: colors.text.primary, fontWeight: '600' }}>average cost of a password-related data breach</p>
              </div>
            </div>
          </div>
        </section>

        {/* What is Password Management */}
        <section className="section">
          <div className="container">
            <div className="section-header" style={{ marginBottom: '50px' }}>
              <h2 className="section-title" style={{ color: colors.text.primary }}>Enterprise Password Management Solutions</h2>
              <p style={{ fontSize: '1.2rem', color: colors.text.secondary, maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                Enterprise password management provides your business with secure, centralized password storage, generation, and sharing. 
                Our solutions eliminate weak passwords, reduce security risks, and improve productivity by automating password management 
                across your entire New Brunswick organization.
              </p>
            </div>

            <div className="services-grid" style={{ marginBottom: '60px' }}>
              <div className="service-card" style={{ background: colors.backgrounds.white, border: `1px solid ${colors.backgrounds.light}`, padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <div className="service-icon floating-icon" style={{ fontSize: '3rem', marginBottom: '20px' }}>🔐</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px' }}>Secure Password Generation</h3>
                <p style={{ color: colors.text.secondary, marginBottom: '20px' }}>
                  Automatically generate strong, unique passwords for every account, eliminating password reuse 
                  and protecting against credential stuffing attacks.
                </p>
                <ul style={{ color: colors.text.secondary, paddingLeft: '20px', lineHeight: '1.8' }}>
                  <li>Complex password algorithms</li>
                  <li>Customizable password policies</li>
                  <li>Automatic password rotation</li>
                  <li>Breach monitoring integration</li>
                </ul>
              </div>
              <div className="service-card" style={{ background: colors.backgrounds.white, border: `1px solid ${colors.backgrounds.light}`, padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <div className="service-icon floating-icon" style={{ fontSize: '3rem', marginBottom: '20px' }}>🔒</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px' }}>Military-Grade Encryption</h3>
                <p style={{ color: colors.text.secondary, marginBottom: '20px' }}>
                  All passwords protected with AES-256 encryption and zero-knowledge architecture 
                  ensuring even we cannot access your sensitive data.
                </p>
                <ul style={{ color: colors.text.secondary, paddingLeft: '20px', lineHeight: '1.8' }}>
                  <li>AES-256 bit encryption</li>
                  <li>Zero-knowledge security model</li>
                  <li>End-to-end encryption</li>
                  <li>Secure cloud synchronization</li>
                </ul>
              </div>
              <div className="service-card" style={{ background: colors.backgrounds.white, border: `1px solid ${colors.backgrounds.light}`, padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <div className="service-icon floating-icon" style={{ fontSize: '3rem', marginBottom: '20px' }}>👥</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px' }}>Team Password Sharing</h3>
                <p style={{ color: colors.text.secondary, marginBottom: '20px' }}>
                  Safely share passwords for shared accounts with granular permissions and 
                  administrative oversight for complete security control.
                </p>
                <ul style={{ color: colors.text.secondary, paddingLeft: '20px', lineHeight: '1.8' }}>
                  <li>Role-based access controls</li>
                  <li>Secure credential sharing</li>
                  <li>Activity logging and reporting</li>
                  <li>Emergency access procedures</li>
                </ul>
              </div>
            </div>

            {/* Feature Comparison */}
            <div style={{ background: colors.backgrounds.gradientPrimary, padding: '50px 30px', borderRadius: '15px', color: 'white', marginBottom: '60px' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '30px', textAlign: 'center' }}>Why Choose Professional Password Management?</h3>
              <div className="features-grid">
                <div>
                  <h4 style={{ color: colors.text.light, marginBottom: '15px' }}>❌ Without Password Management</h4>
                  <ul style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.8' }}>
                    <li>Weak, reused passwords</li>
                    <li>Frequent password resets</li>
                    <li>Security breaches</li>
                    <li>Lost productivity</li>
                    <li>No oversight or control</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: colors.text.light, marginBottom: '15px' }}>✅ With Password Management</h4>
                  <ul style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.8' }}>
                    <li>Strong, unique passwords</li>
                    <li>Automatic login capabilities</li>
                    <li>Enhanced security posture</li>
                    <li>Increased productivity</li>
                    <li>Complete administrative control</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: colors.text.light, marginBottom: '15px' }}>📊 Business Impact</h4>
                  <ul style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.8' }}>
                    <li>95% reduction in password-related breaches</li>
                    <li>75% decrease in help desk tickets</li>
                    <li>30 minutes saved per employee per week</li>
                    <li>100% compliance with security policies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '50px' }}>
              <h2 className="section-title" style={{ color: colors.text.primary }}>Our Password Management Implementation Process</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                From assessment to full deployment, our proven methodology ensures smooth adoption and maximum security 
                benefits for your New Brunswick business.
              </p>
            </div>
            <div className="services-grid" style={{ marginTop: '30px', paddingTop: '10px', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px', marginBottom: '40px' }}>
              <div className="service-card" style={{ position: 'relative', padding: '50px 30px 30px 30px', marginTop: '25px', overflow: 'visible', background: 'white', borderRadius: '12px', boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)', border: '1px solid rgba(26, 121, 175, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', background: colors.primary, color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(26, 121, 175, 0.3)', zIndex: 10 }}>1</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '12px', marginTop: '15px' }}>Security Assessment</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6', marginBottom: '20px' }}>
                  Comprehensive evaluation of current password practices, vulnerability assessment, and solution selection 
                  based on your business needs and security requirements.
                </p>
                <ul style={{ color: colors.text.secondary, paddingLeft: '20px', lineHeight: '1.7' }}>
                  <li>Current password audit</li>
                  <li>Risk assessment analysis</li>
                  <li>Solution recommendation</li>
                  <li>ROI calculation</li>
                </ul>
              </div>
              <div className="service-card" style={{ position: 'relative', padding: '50px 30px 30px 30px', marginTop: '25px', overflow: 'visible', background: 'white', borderRadius: '12px', boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)', border: '1px solid rgba(26, 121, 175, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', background: colors.accent, color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)', zIndex: 10 }}>2</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '12px', marginTop: '15px' }}>Deployment & Configuration</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6', marginBottom: '20px' }}>
                  Professional installation, configuration, and integration with existing systems including Active Directory, 
                  SSO platforms, and business applications.
                </p>
                <ul style={{ color: colors.text.secondary, paddingLeft: '20px', lineHeight: '1.7' }}>
                  <li>Software installation</li>
                  <li>System integration</li>
                  <li>Policy configuration</li>
                  <li>Security hardening</li>
                </ul>
              </div>
              <div className="service-card" style={{ position: 'relative', padding: '50px 30px 30px 30px', marginTop: '25px', overflow: 'visible', background: 'white', borderRadius: '12px', boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)', border: '1px solid rgba(26, 121, 175, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', background: colors.secondary, color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(49, 66, 81, 0.3)', zIndex: 10 }}>3</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '12px', marginTop: '15px' }}>Training & Support</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6', marginBottom: '20px' }}>
                  Comprehensive user training, password migration assistance, and ongoing support to ensure successful 
                  adoption across your organization.
                </p>
                <ul style={{ color: colors.text.secondary, paddingLeft: '20px', lineHeight: '1.7' }}>
                  <li>Staff training sessions</li>
                  <li>Migration assistance</li>
                  <li>Ongoing technical support</li>
                  <li>Regular security reviews</li>
                </ul>
              </div>
            </div>

            <div style={{ textAlign: 'center', background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: colors.text.primary, marginBottom: '20px' }}>Ready to Eliminate Password Risks?</h3>
              <p style={{ color: colors.text.secondary, marginBottom: '25px', fontSize: '1.1rem' }}>
                Stop password-related breaches before they happen. Implement professional password management today.
              </p>
              <div className="cta-buttons">
                <a href="/contact" className="btn btn-primary">Get Password Management Quote</a>
                <a href="/contact" className="btn btn-secondary">Ask About Grant Funding</a>
              </div>
            </div>
          </div>
        </section>

        {/* Local Service Areas */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '50px' }}>
              <h2 className="section-title" style={{ color: colors.text.primary }}>Password Management Services Across New Brunswick</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                Professional password security solutions tailored to the unique needs of New Brunswick businesses, 
                from small startups to large enterprises.
              </p>
            </div>
            <div className="features-grid">
              <div className="feature-item" style={{ background: 'white', padding: '35px', borderRadius: '15px', boxShadow: '0 6px 20px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <h3 style={{ color: colors.primary, marginBottom: '20px' }}>🏛️ Fredericton Region</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6', marginBottom: '20px' }}>
                  Password management solutions for government contractors, professional services, and healthcare organizations 
                  with strict compliance requirements and security standards.
                </p>
                <div style={{ background: colors.backgrounds.light, padding: '15px', borderRadius: '8px' }}>
                  <strong style={{ color: colors.primary }}>Industries Served:</strong>
                  <p style={{ color: colors.text.secondary, margin: '10px 0 0 0' }}>Government contracting, legal services, healthcare, consulting, education</p>
                </div>
              </div>
              <div className="feature-item" style={{ background: 'white', padding: '35px', borderRadius: '15px', boxShadow: '0 6px 20px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <h3 style={{ color: colors.accent, marginBottom: '20px' }}>🏭 Moncton Area</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6', marginBottom: '20px' }}>
                  Enterprise password solutions for manufacturing, logistics, and technology companies requiring robust security 
                  for operational systems and business applications.
                </p>
                <div style={{ background: colors.backgrounds.light, padding: '15px', borderRadius: '8px' }}>
                  <strong style={{ color: colors.accent }}>Industries Served:</strong>
                  <p style={{ color: colors.text.secondary, margin: '10px 0 0 0' }}>Manufacturing, logistics, technology, retail, financial services</p>
                </div>
              </div>
              <div className="feature-item" style={{ background: 'white', padding: '35px', borderRadius: '15px', boxShadow: '0 6px 20px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <h3 style={{ color: colors.primaryDark, marginBottom: '20px' }}>⚓ Saint John Region</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6', marginBottom: '20px' }}>
                  Specialized password management for maritime, energy, and port businesses requiring high-security solutions 
                  for critical infrastructure and operational systems.
                </p>
                <div style={{ background: colors.backgrounds.light, padding: '15px', borderRadius: '8px' }}>
                  <strong style={{ color: colors.primaryDark }}>Industries Served:</strong>
                  <p style={{ color: colors.text.secondary, margin: '10px 0 0 0' }}>Maritime, energy, port operations, manufacturing, transportation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section" style={{ background: colors.backgrounds.gradientPrimary, color: 'white' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '40px' }}>
              <h2 style={{ color: colors.text.light, fontSize: '2.5rem', marginBottom: '20px' }}>Stop Password-Related Breaches Today</h2>
              <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6', opacity: '0.9' }}>
                Every minute you delay implementing professional password management is another minute your New Brunswick 
                business remains vulnerable to credential-based attacks. Take action now to protect your organization.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary" style={{ backgroundColor: 'white', color: colors.primary, padding: '15px 30px', fontSize: '1.1rem', fontWeight: '600' }}>
                Get Password Management Quote
              </a>
              <a href="/contact" className="btn btn-secondary" style={{ background: 'transparent', color: 'white', border: '2px solid white', padding: '15px 30px', fontSize: '1.1rem', marginLeft: '20px' }}>
                Learn About Grant Funding
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};