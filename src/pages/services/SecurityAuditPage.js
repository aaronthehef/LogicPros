import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

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
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>Cybersecurity Audit Services for New Brunswick Businesses</h1>
              <p>
                Comprehensive security assessments to identify vulnerabilities and strengthen your business defenses. 
                Professional cybersecurity audits for Fredericton, Moncton, Saint John, and across New Brunswick.
              </p>
              <div className="hero-cta">
                <a href="/contact" className="btn btn-primary">Get Security Assessment Quote</a>
                <a href="/contact" className="secondary-link">Ask About Grant Eligibility →</a>
              </div>
            </div>
          </div>
        </section>

        {/* What is a Security Audit */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">What is a Cybersecurity Audit?</h2>
            <div className="content-grid">
              <div className="content-main">
                <p>
                  A cybersecurity audit is a comprehensive evaluation of your organization's security posture, 
                  identifying vulnerabilities in your systems, processes, and policies. Our assessments help 
                  New Brunswick businesses understand their risk exposure and create actionable security improvements.
                </p>
                <p>
                  During the audit process, we examine your network infrastructure, employee practices, 
                  data handling procedures, and compliance with industry standards to provide a complete 
                  picture of your cybersecurity readiness.
                </p>
              </div>
              <div className="content-sidebar">
                <div className="info-box">
                  <h3>🔍 Audit Coverage</h3>
                  <ul>
                    <li>Network security assessment</li>
                    <li>Employee security practices</li>
                    <li>Data protection evaluation</li>
                    <li>Access control review</li>
                    <li>Compliance gap analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audit Process */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Our Security Audit Process</h2>
            <div className="process-grid">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Initial Consultation</h3>
                <p>
                  We begin with a detailed discussion about your business, current security measures, 
                  and specific concerns. This helps us tailor the audit to your unique needs and industry requirements.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Comprehensive Assessment</h3>
                <p>
                  Our team conducts thorough testing of your systems, reviews security policies, 
                  and evaluates employee practices. We examine both technical and human elements of your security posture.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Detailed Report</h3>
                <p>
                  You receive a comprehensive report outlining findings, risk levels, and prioritized 
                  recommendations. Each issue includes clear explanations and actionable steps for improvement.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Implementation Support</h3>
                <p>
                  We provide ongoing support to help implement recommended changes, answer questions, 
                  and ensure your security improvements are properly deployed and maintained.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="section" style={{ backgroundColor: '#f0f9ff' }}>
          <div className="container">
            <h2 className="section-title">Why New Brunswick Businesses Need Security Audits</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">🎯</div>
                <h3>Identify Hidden Vulnerabilities</h3>
                <p>
                  Discover security gaps that could expose your business to cyber attacks, 
                  data breaches, or compliance violations before they become costly problems.
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">📋</div>
                <h3>Meet Compliance Requirements</h3>
                <p>
                  Ensure your business meets industry standards and regulatory requirements. 
                  Many industries require regular security assessments for compliance.
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">💰</div>
                <h3>Prevent Costly Breaches</h3>
                <p>
                  The average cost of a data breach for small businesses is $3.31 million. 
                  A security audit investment is minimal compared to breach recovery costs.
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🔒</div>
                <h3>Improve Overall Security</h3>
                <p>
                  Get actionable recommendations to strengthen your security posture, 
                  protect customer data, and build trust with clients and partners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Examine */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Comprehensive Security Assessment Areas</h2>
            <div className="assessment-grid">
              <div className="assessment-category">
                <h3>🌐 Network Security</h3>
                <ul>
                  <li>Firewall configuration and effectiveness</li>
                  <li>Network segmentation and access controls</li>
                  <li>Wireless security protocols</li>
                  <li>Intrusion detection systems</li>
                  <li>Network monitoring capabilities</li>
                </ul>
              </div>
              <div className="assessment-category">
                <h3>💻 System Security</h3>
                <ul>
                  <li>Server and workstation hardening</li>
                  <li>Operating system security settings</li>
                  <li>Software update and patch management</li>
                  <li>Antivirus and anti-malware protection</li>
                  <li>System backup and recovery procedures</li>
                </ul>
              </div>
              <div className="assessment-category">
                <h3>👥 User Access & Authentication</h3>
                <ul>
                  <li>Password policies and practices</li>
                  <li>Multi-factor authentication implementation</li>
                  <li>User account management</li>
                  <li>Privileged access controls</li>
                  <li>Remote access security</li>
                </ul>
              </div>
              <div className="assessment-category">
                <h3>📊 Data Protection</h3>
                <ul>
                  <li>Data classification and handling</li>
                  <li>Encryption implementation</li>
                  <li>Data backup and recovery testing</li>
                  <li>Data retention and disposal policies</li>
                  <li>Privacy protection measures</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Focus */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Security Audits for New Brunswick Industries</h2>
            <div className="industry-grid">
              <div className="industry-item">
                <h4>🏥 Healthcare Practices</h4>
                <p>PIPEDA compliance, patient data protection, electronic health records security, and medical device assessments.</p>
              </div>
              <div className="industry-item">
                <h4>⚖️ Legal Firms</h4>
                <p>Client confidentiality protection, document security, communication encryption, and professional compliance requirements.</p>
              </div>
              <div className="industry-item">
                <h4>💼 Financial Services</h4>
                <p>Financial data security, transaction protection, regulatory compliance, and fraud prevention measures.</p>
              </div>
              <div className="industry-item">
                <h4>🏢 Small & Medium Businesses</h4>
                <p>General business security, customer data protection, employee access controls, and operational security practices.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Service Areas */}
        <section className="section" style={{ backgroundColor: '#e8f5e8' }}>
          <div className="container">
            <h2 className="section-title">Cybersecurity Audit Services Across New Brunswick</h2>
            <div className="location-grid">
              <div className="location-item">
                <h3>🏛️ Fredericton Area</h3>
                <p>
                  Serving government contractors, professional services, and local businesses 
                  with comprehensive security audits tailored to provincial compliance requirements.
                </p>
              </div>
              <div className="location-item">
                <h3>🏭 Moncton Region</h3>
                <p>
                  Supporting manufacturing, logistics, and technology companies with detailed 
                  security assessments focused on operational continuity and data protection.
                </p>
              </div>
              <div className="location-item">
                <h3>⚓ Saint John Area</h3>
                <p>
                  Helping port businesses, energy companies, and maritime industries strengthen 
                  their cybersecurity posture against industry-specific threats.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Strengthen Your Business Security?</h2>
              <p>
                Get a comprehensive cybersecurity audit from New Brunswick's trusted security experts. 
                Protect your business, customers, and reputation with professional security assessment services.
              </p>
              <div className="cta-buttons">
                <a href="/contact" className="btn btn-primary btn-large">Get Your Security Audit Quote</a>
                <a href="/contact" className="btn btn-secondary btn-large">Ask About Grant Funding</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};