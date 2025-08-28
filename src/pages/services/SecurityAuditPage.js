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
              <p className="hero-subheadline">
                Professional security assessments to identify vulnerabilities and strengthen your business defenses. 
                Serving Fredericton, Moncton, Saint John, and across New Brunswick.
              </p>
              <div className="hero-cta-section">
                <a href="/contact" className="btn btn-primary btn-hero">Get Security Assessment Quote</a>
                <a href="/contact" className="secondary-link">Ask About Grant Eligibility →</a>
              </div>
            </div>
          </div>
        </section>

        {/* What is Security Audit */}
        <section className="section">
          <div className="container">
            <div className="section-header" style={{ marginBottom: '40px' }}>
              <h2 className="section-title">What is a Cybersecurity Audit?</h2>
              <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
                A comprehensive evaluation of your organization's security posture to identify vulnerabilities 
                and create actionable security improvements for New Brunswick businesses.
              </p>
            </div>
            <div className="services-grid animate-on-scroll">
              <div className="service-card">
                <div className="service-icon floating-icon">🔍</div>
                <h3>Network Security Assessment</h3>
                <p>
                  Thorough evaluation of your network infrastructure, firewalls, and access controls 
                  to identify potential entry points for cyber attacks.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon floating-icon">👥</div>
                <h3>Employee Security Practices</h3>
                <p>
                  Review of user behavior, password policies, and security awareness to address 
                  the human element of cybersecurity risks.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon floating-icon">📊</div>
                <h3>Compliance Gap Analysis</h3>
                <p>
                  Assess your current security posture against industry standards and regulatory 
                  requirements to ensure full compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '40px' }}>
              <h2 className="section-title">Why New Brunswick Businesses Need Security Audits</h2>
            </div>
            <div className="features-grid animate-on-scroll">
              <div className="feature-item">
                <h3>🎯 Identify Hidden Vulnerabilities</h3>
                <p>
                  Discover security gaps that could expose your business to cyber attacks before they become costly problems.
                </p>
              </div>
              <div className="feature-item">
                <h3>📋 Meet Compliance Requirements</h3>
                <p>
                  Ensure your business meets industry standards and regulatory requirements with professional assessments.
                </p>
              </div>
              <div className="feature-item">
                <h3>💰 Prevent Costly Breaches</h3>
                <p>
                  Security audit investment is minimal compared to the $3.31 million average cost of a data breach.
                </p>
              </div>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get Security Assessment</a>
              <a href="/contact" className="btn btn-secondary">Ask About Grants</a>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section">
          <div className="container">
            <div className="section-header" style={{ marginBottom: '40px' }}>
              <h2 className="section-title">Our Security Audit Process</h2>
              <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                Professional security assessment process designed for New Brunswick businesses
              </p>
            </div>
            <div className="services-grid animate-on-scroll">
              <div className="service-card">
                <div className="service-icon floating-icon">1️⃣</div>
                <h3>Initial Consultation</h3>
                <p>
                  Detailed discussion about your business, current security measures, and specific concerns 
                  tailored to your industry requirements.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon floating-icon">2️⃣</div>
                <h3>Comprehensive Assessment</h3>
                <p>
                  Thorough testing of systems, review of security policies, and evaluation of both 
                  technical and human elements of security.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon floating-icon">3️⃣</div>
                <h3>Detailed Report & Recommendations</h3>
                <p>
                  Comprehensive report with findings, risk levels, prioritized recommendations, 
                  and clear steps for improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Service Areas */}
        <section className="section" style={{ backgroundColor: '#f0f9ff' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '40px' }}>
              <h2 className="section-title">Cybersecurity Audit Services Across New Brunswick</h2>
              <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
                Professional security assessments for businesses throughout New Brunswick
              </p>
            </div>
            <div className="features-grid animate-on-scroll">
              <div className="feature-item" style={{ textAlign: 'center' }}>
                <h3>🏛️ Fredericton Area</h3>
                <p>
                  Serving government contractors, professional services, and local businesses 
                  with comprehensive security audits tailored to provincial compliance requirements.
                </p>
              </div>
              <div className="feature-item" style={{ textAlign: 'center' }}>
                <h3>🏭 Moncton Region</h3>
                <p>
                  Supporting manufacturing, logistics, and technology companies with detailed 
                  security assessments focused on operational continuity.
                </p>
              </div>
              <div className="feature-item" style={{ textAlign: 'center' }}>
                <h3>⚓ Saint John Area</h3>
                <p>
                  Helping port businesses, energy companies, and maritime industries strengthen 
                  their cybersecurity posture against industry-specific threats.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section">
          <div className="container">
            <div className="section-header" style={{ marginBottom: '30px' }}>
              <h2 className="section-title">Ready to Strengthen Your Business Security?</h2>
              <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                Get a comprehensive cybersecurity audit from New Brunswick's trusted security experts
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get Security Assessment Quote</a>
              <a href="/contact" className="btn btn-secondary">Learn About Grant Funding</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};