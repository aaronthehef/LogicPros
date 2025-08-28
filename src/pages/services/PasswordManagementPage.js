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
              <h1>Enterprise Password Management for New Brunswick Businesses</h1>
              <p className="hero-subheadline">
                Eliminate password-related security risks with professional password management implementation. 
                Secure password solutions for Fredericton, Moncton, Saint John, and across New Brunswick.
              </p>
              <div className="hero-cta-section">
                <a href="/contact" className="btn btn-primary btn-hero">Get Password Management Quote</a>
                <a href="/contact" className="secondary-link">Ask About Grant Eligibility →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Password Problem Statistics */}
        <section className="section" style={{ backgroundColor: '#fff3cd' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '40px' }}>
              <h2 className="section-title">The Password Problem Facing New Brunswick Businesses</h2>
            </div>
            <div className="features-grid animate-on-scroll">
              <div className="feature-item" style={{ textAlign: 'center' }}>
                <h3>81%</h3>
                <p>of data breaches involve weak or stolen passwords</p>
              </div>
              <div className="feature-item" style={{ textAlign: 'center' }}>
                <h3>59%</h3>
                <p>of people reuse passwords across multiple accounts</p>
              </div>
              <div className="feature-item" style={{ textAlign: 'center' }}>
                <h3>$4.35M</h3>
                <p>average cost of a password-related data breach</p>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                Don't let weak passwords become your business's biggest vulnerability. 
                Professional password management protects your team and customers.
              </p>
            </div>
          </div>
        </section>

        {/* What is Password Management */}
        <section className="section">
          <div className="container">
            <div className="section-header" style={{ marginBottom: '40px' }}>
              <h2 className="section-title">Enterprise Password Management Solutions</h2>
              <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
                Secure, centralized password storage and generation that eliminates weak passwords 
                and improves productivity across your New Brunswick business.
              </p>
            </div>
            <div className="services-grid animate-on-scroll">
              <div className="service-card">
                <div className="service-icon floating-icon">🔐</div>
                <h3>Secure Password Generation</h3>
                <p>
                  Automatically generate strong, unique passwords for every account, 
                  eliminating password reuse and protecting against credential attacks.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon floating-icon">🔒</div>
                <h3>Encrypted Password Storage</h3>
                <p>
                  Military-grade encryption protects all stored passwords with zero-knowledge 
                  architecture ensuring even we cannot access your data.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon floating-icon">👥</div>
                <h3>Team Password Sharing</h3>
                <p>
                  Safely share passwords for shared accounts with granular permissions 
                  and administrative oversight for complete security control.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '40px' }}>
              <h2 className="section-title">Benefits of Professional Password Management</h2>
            </div>
            <div className="features-grid animate-on-scroll">
              <div className="feature-item">
                <h3>🛡️ Enhanced Security</h3>
                <p>
                  Generate strong, unique passwords for every account and eliminate password reuse 
                  that makes your business vulnerable to credential attacks.
                </p>
              </div>
              <div className="feature-item">
                <h3>⚡ Improved Productivity</h3>
                <p>
                  Employees save time with automatic login and form filling, eliminating password resets 
                  and streamlining daily workflows.
                </p>
              </div>
              <div className="feature-item">
                <h3>📊 Administrative Control</h3>
                <p>
                  Monitor password health, enforce security policies, and maintain complete oversight 
                  of organizational credentials from a centralized dashboard.
                </p>
              </div>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get Password Management Solution</a>
              <a href="/contact" className="btn btn-secondary">Ask About Grants</a>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="section">
          <div className="container">
            <div className="section-header" style={{ marginBottom: '40px' }}>
              <h2 className="section-title">Our Password Management Implementation Process</h2>
              <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                Professional implementation process designed for New Brunswick businesses
              </p>
            </div>
            <div className="services-grid animate-on-scroll">
              <div className="service-card">
                <div className="service-icon floating-icon">1️⃣</div>
                <h3>Security Assessment</h3>
                <p>
                  Evaluate current password practices, identify vulnerabilities, and determine 
                  the best password management solution for your business.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon floating-icon">2️⃣</div>
                <h3>Platform Setup & Configuration</h3>
                <p>
                  Install and configure your chosen password manager with proper integration 
                  to existing systems and security policies.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon floating-icon">3️⃣</div>
                <h3>Training & Migration Support</h3>
                <p>
                  Comprehensive team training and password migration assistance to ensure 
                  smooth adoption with minimal disruption.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Service Areas */}
        <section className="section" style={{ backgroundColor: '#f0f9ff' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '40px' }}>
              <h2 className="section-title">Password Management Services Across New Brunswick</h2>
              <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
                Professional password security solutions for businesses throughout New Brunswick
              </p>
            </div>
            <div className="features-grid animate-on-scroll">
              <div className="feature-item" style={{ textAlign: 'center' }}>
                <h3>🏛️ Fredericton</h3>
                <p>
                  Supporting government contractors and professional services with compliant password management 
                  solutions that meet provincial security requirements.
                </p>
              </div>
              <div className="feature-item" style={{ textAlign: 'center' }}>
                <h3>🏭 Moncton</h3>
                <p>
                  Helping manufacturing and logistics companies secure their operational systems 
                  with robust enterprise password management solutions.
                </p>
              </div>
              <div className="feature-item" style={{ textAlign: 'center' }}>
                <h3>⚓ Saint John</h3>
                <p>
                  Providing maritime and energy sector businesses with secure password solutions 
                  that protect critical infrastructure and business systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section">
          <div className="container">
            <div className="section-header" style={{ marginBottom: '30px' }}>
              <h2 className="section-title">Ready to Eliminate Password Security Risks?</h2>
              <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                Protect your New Brunswick business with professional password management implementation
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get Password Management Quote</a>
              <a href="/contact" className="btn btn-secondary">Learn About Grant Funding</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};