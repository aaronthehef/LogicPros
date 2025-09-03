import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { colors } from '../../styles/colors';

export const SecurityAuditPage = () => {
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
              }}>Cybersecurity Audit Services for New Brunswick Businesses</h1>
              <p style={{ 
                textAlign: 'center !important', 
                width: '100%', 
                margin: '0 auto 40px auto'
              }}>
                Comprehensive security assessments to identify vulnerabilities and strengthen your business defenses. 
                Professional cybersecurity audits serving Fredericton, Moncton, Saint John, and across New Brunswick.
              </p>
              <div style={{ 
                textAlign: 'center !important', 
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                gap: '15px',
                flexWrap: 'wrap'
              }}>
                <a href="/contact" className="btn btn-primary">Get Security Assessment Quote</a>
                <a href="/contact" className="btn btn-secondary">Ask About Grant Eligibility</a>
              </div>
            </div>
          </div>
        </section>

        {/* Critical Stats Section */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light, padding: '60px 20px' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '30px', textAlign: 'center' }}>
              <h2 style={{ color: colors.primary, fontSize: '2.2rem', marginBottom: '15px' }}>The Cybersecurity Crisis Facing Canadian Businesses</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto' }}>
                Don't become another statistic. Professional security audits protect your New Brunswick business from growing cyber threats.
              </p>
            </div>
            <div className="features-grid">
              <div className="feature-item" style={{ textAlign: 'center', background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '3rem', color: colors.accent, marginBottom: '10px' }}>85%</h3>
                <p style={{ color: colors.text.primary, fontWeight: '600' }}>of Canadian SMEs experienced a cyber attack in 2024</p>
              </div>
              <div className="feature-item" style={{ textAlign: 'center', background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '3rem', color: colors.accent, marginBottom: '10px' }}>$4.88M</h3>
                <p style={{ color: colors.text.primary, fontWeight: '600' }}>average cost of a data breach in Canada</p>
              </div>
              <div className="feature-item" style={{ textAlign: 'center', background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '3rem', color: colors.accent, marginBottom: '10px' }}>287 days</h3>
                <p style={{ color: colors.text.primary, fontWeight: '600' }}>average time to identify and contain a breach</p>
              </div>
            </div>
          </div>
        </section>

        {/* What is Security Audit */}
        <section className="section">
          <div className="container">
            <div className="section-header" style={{ marginBottom: '50px' }}>
              <h2 className="section-title" style={{ color: colors.text.primary }}>What is a Cybersecurity Audit?</h2>
              <p style={{ fontSize: '1.2rem', color: colors.text.secondary, maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                A cybersecurity audit is a comprehensive evaluation of your organization's security posture, examining every aspect 
                of your digital infrastructure to identify vulnerabilities before cybercriminals do. Our expert assessments provide 
                actionable insights to strengthen your defenses and protect your New Brunswick business.
              </p>
            </div>

            <div className="services-grid" style={{ marginBottom: '60px' }}>
              <div className="service-card" style={{ background: colors.backgrounds.white, border: `1px solid ${colors.backgrounds.light}`, padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <div className="service-icon floating-icon" style={{ fontSize: '3rem', marginBottom: '20px' }}>🔍</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px' }}>Network Security Assessment</h3>
                <p style={{ color: colors.text.secondary, marginBottom: '20px' }}>
                  Thorough evaluation of your network infrastructure, firewalls, and access controls to identify 
                  potential entry points for cyber attacks.
                </p>
                <ul style={{ color: colors.text.secondary, paddingLeft: '20px', lineHeight: '1.8' }}>
                  <li>Firewall configuration analysis</li>
                  <li>Network segmentation review</li>
                  <li>Wireless security assessment</li>
                  <li>VPN and remote access evaluation</li>
                </ul>
              </div>
              <div className="service-card" style={{ background: colors.backgrounds.white, border: `1px solid ${colors.backgrounds.light}`, padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <div className="service-icon floating-icon" style={{ fontSize: '3rem', marginBottom: '20px' }}>👥</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px' }}>Employee Security Practices</h3>
                <p style={{ color: colors.text.secondary, marginBottom: '20px' }}>
                  Review of user behavior, password policies, and security awareness to address the human 
                  element of cybersecurity risks.
                </p>
                <ul style={{ color: colors.text.secondary, paddingLeft: '20px', lineHeight: '1.8' }}>
                  <li>Password policy effectiveness</li>
                  <li>User access controls audit</li>
                  <li>Security awareness assessment</li>
                  <li>Social engineering vulnerability tests</li>
                </ul>
              </div>
              <div className="service-card" style={{ background: colors.backgrounds.white, border: `1px solid ${colors.backgrounds.light}`, padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <div className="service-icon floating-icon" style={{ fontSize: '3rem', marginBottom: '20px' }}>📊</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px' }}>Compliance & Risk Assessment</h3>
                <p style={{ color: colors.text.secondary, marginBottom: '20px' }}>
                  Assess your current security posture against industry standards and regulatory requirements 
                  to ensure full compliance.
                </p>
                <ul style={{ color: colors.text.secondary, paddingLeft: '20px', lineHeight: '1.8' }}>
                  <li>PIPEDA compliance review</li>
                  <li>Industry standard alignment</li>
                  <li>Risk assessment and scoring</li>
                  <li>Regulatory gap analysis</li>
                </ul>
              </div>
            </div>

            {/* Detailed Audit Coverage */}
            <div style={{ background: colors.backgrounds.gradientPrimary, padding: '50px 30px', borderRadius: '15px', color: 'white', marginBottom: '60px' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '30px', textAlign: 'center' }}>Comprehensive Security Assessment Areas</h3>
              <div className="features-grid">
                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ color: colors.text.light, marginBottom: '15px' }}>🌐 Network Infrastructure</h4>
                  <ul style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.8', textAlign: 'left', display: 'inline-block' }}>
                    <li>Router and switch configurations</li>
                    <li>Network monitoring systems</li>
                    <li>Intrusion detection/prevention</li>
                    <li>Network segmentation effectiveness</li>
                  </ul>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ color: colors.text.light, marginBottom: '15px' }}>💻 Endpoint Security</h4>
                  <ul style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.8', textAlign: 'left', display: 'inline-block' }}>
                    <li>Antivirus and anti-malware</li>
                    <li>Patch management processes</li>
                    <li>Device encryption status</li>
                    <li>Mobile device management</li>
                  </ul>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ color: colors.text.light, marginBottom: '15px' }}>📁 Data Protection</h4>
                  <ul style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.8', textAlign: 'left', display: 'inline-block' }}>
                    <li>Data classification systems</li>
                    <li>Backup and recovery testing</li>
                    <li>Encryption implementation</li>
                    <li>Data retention policies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Audits Matter */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '50px' }}>
              <h2 className="section-title" style={{ color: colors.text.primary }}>Why New Brunswick Businesses Need Security Audits</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                Cyber threats are evolving rapidly. What protected your business last year may not be sufficient today. 
                Regular security audits ensure your defenses keep pace with emerging threats.
              </p>
            </div>
            <div className="features-grid" style={{ marginBottom: '40px' }}>
              <div className="feature-item" style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <h3 style={{ color: colors.accent, marginBottom: '15px' }}>🎯 Identify Hidden Vulnerabilities</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>
                  Our comprehensive assessments discover security gaps that automated tools miss. We identify 
                  vulnerabilities in configurations, processes, and human behaviors that could expose your business 
                  to cyber attacks, data breaches, and financial losses.
                </p>
              </div>
              <div className="feature-item" style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <h3 style={{ color: colors.primary, marginBottom: '15px' }}>📋 Meet Compliance Requirements</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>
                  Stay ahead of regulatory requirements with professional assessments that ensure your business 
                  meets PIPEDA, industry-specific standards, and insurance requirements. Avoid costly fines and 
                  maintain customer trust through demonstrated security compliance.
                </p>
              </div>
              <div className="feature-item" style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <h3 style={{ color: colors.primaryDark, marginBottom: '15px' }}>💰 Prevent Costly Breaches</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>
                  The investment in a security audit is minimal compared to the average $4.88 million cost of a data breach. 
                  Proactive security assessments help prevent incidents that could devastate your business operations and reputation.
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center', background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: colors.text.primary, marginBottom: '20px' }}>Ready to Protect Your Business?</h3>
              <p style={{ color: colors.text.secondary, marginBottom: '25px', fontSize: '1.1rem' }}>
                Don't wait for a cyber attack to discover your vulnerabilities. Get a professional security assessment today.
              </p>
              <div className="cta-buttons">
                <a href="/contact" className="btn btn-primary">Get Security Assessment Quote</a>
                <a href="/contact" className="btn btn-secondary">Ask About Grant Funding</a>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section">
          <div className="container">
            <div className="section-header" style={{ marginBottom: '50px' }}>
              <h2 className="section-title" style={{ color: colors.text.primary }}>Our Proven Security Audit Process</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                Our systematic approach ensures no stone is left unturned in assessing your cybersecurity posture. 
                Every audit follows our proven methodology developed specifically for New Brunswick businesses.
              </p>
            </div>
            <div className="services-grid" style={{ marginTop: '30px', paddingTop: '10px', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px', marginBottom: '50px' }}>
              <div className="service-card" style={{ position: 'relative', padding: '50px 30px 30px 30px', marginTop: '25px', overflow: 'visible', background: 'white', borderRadius: '12px', boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)', border: '1px solid rgba(26, 121, 175, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', background: colors.primary, color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(26, 121, 175, 0.3)', zIndex: 10 }}>1</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '12px', marginTop: '15px' }}>Discovery & Planning</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6', marginBottom: '20px' }}>
                  We begin with an in-depth consultation to understand your business operations, existing security measures, 
                  compliance requirements, and specific concerns.
                </p>
                <ul style={{ color: colors.text.secondary, paddingLeft: '20px', lineHeight: '1.7' }}>
                  <li>Business process mapping</li>
                  <li>Asset inventory compilation</li>
                  <li>Threat landscape analysis</li>
                  <li>Audit scope definition</li>
                </ul>
              </div>
              <div className="service-card" style={{ position: 'relative', padding: '50px 30px 30px 30px', marginTop: '25px', overflow: 'visible', background: 'white', borderRadius: '12px', boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)', border: '1px solid rgba(26, 121, 175, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', background: colors.accent, color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)', zIndex: 10 }}>2</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '12px', marginTop: '15px' }}>Comprehensive Testing</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6', marginBottom: '20px' }}>
                  Our security experts conduct thorough testing of your systems, networks, and processes using industry-leading 
                  tools and methodologies.
                </p>
                <ul style={{ color: colors.text.secondary, paddingLeft: '20px', lineHeight: '1.7' }}>
                  <li>Vulnerability scanning</li>
                  <li>Penetration testing</li>
                  <li>Configuration reviews</li>
                  <li>Policy effectiveness analysis</li>
                </ul>
              </div>
              <div className="service-card" style={{ position: 'relative', padding: '50px 30px 30px 30px', marginTop: '25px', overflow: 'visible', background: 'white', borderRadius: '12px', boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)', border: '1px solid rgba(26, 121, 175, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', background: colors.secondary, color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(49, 66, 81, 0.3)', zIndex: 10 }}>3</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '12px', marginTop: '15px' }}>Detailed Reporting</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6', marginBottom: '20px' }}>
                  You receive a comprehensive report with executive summaries, technical findings, risk ratings, 
                  and prioritized recommendations for improvement.
                </p>
                <ul style={{ color: colors.text.secondary, paddingLeft: '20px', lineHeight: '1.7' }}>
                  <li>Executive dashboard</li>
                  <li>Risk prioritization matrix</li>
                  <li>Remediation roadmap</li>
                  <li>Compliance status report</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Service Areas */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '50px' }}>
              <h2 className="section-title" style={{ color: colors.text.primary }}>Cybersecurity Audit Services Across New Brunswick</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                Local expertise serving businesses throughout New Brunswick with tailored security assessments 
                that understand regional compliance requirements and industry challenges.
              </p>
            </div>
            <div className="features-grid">
              <div className="feature-item" style={{ background: 'white', padding: '35px', borderRadius: '15px', boxShadow: '0 6px 20px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <h3 style={{ color: colors.primary, marginBottom: '20px' }}>🏛️ Fredericton Region</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6', marginBottom: '20px' }}>
                  Comprehensive security audits for government contractors, professional services, and local businesses. 
                  Our assessments ensure compliance with provincial security standards and federal contracting requirements.
                </p>
                <div style={{ background: colors.backgrounds.light, padding: '15px', borderRadius: '8px' }}>
                  <strong style={{ color: '#6f42c1' }}>Specialized in:</strong>
                  <p style={{ color: colors.text.secondary, margin: '10px 0 0 0' }}>Government compliance, professional services security, healthcare PIPEDA requirements</p>
                </div>
              </div>
              <div className="feature-item" style={{ background: 'white', padding: '35px', borderRadius: '15px', boxShadow: '0 6px 20px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <h3 style={{ color: colors.accent, marginBottom: '20px' }}>🏭 Moncton Area</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6', marginBottom: '20px' }}>
                  Security assessments focused on manufacturing, logistics, and technology companies. We understand 
                  operational technology security and supply chain risk management.
                </p>
                <div style={{ background: colors.backgrounds.light, padding: '15px', borderRadius: '8px' }}>
                  <strong style={{ color: '#e83e8c' }}>Specialized in:</strong>
                  <p style={{ color: colors.text.secondary, margin: '10px 0 0 0' }}>Industrial control systems, logistics security, manufacturing compliance</p>
                </div>
              </div>
              <div className="feature-item" style={{ background: 'white', padding: '35px', borderRadius: '15px', boxShadow: '0 6px 20px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <h3 style={{ color: colors.primaryDark, marginBottom: '20px' }}>⚓ Saint John Region</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6', marginBottom: '20px' }}>
                  Specialized security assessments for maritime, energy, and port businesses. Our audits address 
                  critical infrastructure protection and industry-specific threat landscapes.
                </p>
                <div style={{ background: colors.backgrounds.light, padding: '15px', borderRadius: '8px' }}>
                  <strong style={{ color: '#20c997' }}>Specialized in:</strong>
                  <p style={{ color: colors.text.secondary, margin: '10px 0 0 0' }}>Maritime security, energy sector compliance, critical infrastructure protection</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section" style={{ background: colors.backgrounds.gradientPrimary, color: 'white' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '40px' }}>
              <h2 style={{ color: colors.text.light, fontSize: '2.5rem', marginBottom: '20px' }}>Don't Wait for a Cyber Attack</h2>
              <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6', opacity: '0.9' }}>
                Every day you delay a security audit is another day cybercriminals could be exploiting vulnerabilities 
                in your systems. Protect your New Brunswick business with a comprehensive cybersecurity assessment today.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary" style={{ backgroundColor: 'white', color: colors.primary, padding: '15px 30px', fontSize: '1.1rem', fontWeight: '600' }}>
                Get Security Assessment Quote
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