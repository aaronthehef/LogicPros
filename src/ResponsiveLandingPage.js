import React from 'react';
import './responsive-style.css';
import { Logo } from './components/Logo';
import { Navigation } from './components/Navigation';
import { Animations } from './components/Animations';
import { Footer } from './components/Footer';
import { colors } from './styles/colors';
import heroImage from './assets/hero-growtika.jpg';

export const ResponsiveLandingPage = () => {
  return (
    <div className="landing-page homepage">
      <Animations />
      {/* Sticky Header */}
      <header className="sticky-header">
        <div className="header-content">
          <div className="logo">
            <Logo />
          </div>
          <Navigation />
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section homepage-hero">
          <div className="hero-image">
            <img src={heroImage} alt="Professional team working on digital solutions" />
            <div className="hero-overlay">
              <div className="hero-content">
                <h1 className="typewriter-text">Professional Cybersecurity, AI Solutions & Website Development</h1>
                <p className="hero-subheadline">
                  New Brunswick's trusted partner for cybersecurity audits, AI automation, and professional websites.
                </p>
                <div className="hero-cta-section">
                  <a href="/contact" className="btn btn-primary btn-hero">Get Security Assessment</a>
                  <a href="/free-example" className="secondary-link">Or get a free website example →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Example Visual Section */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">See The Difference a Professional Website Makes</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '600px', margin: '0 auto' }}>
                Here's how your business website transforms from basic to professional - 
                and why customers choose businesses with better websites.
              </p>
            </div>
            <div className="before-after-comparison">
              <div className="comparison-item">
                <div className="before-section">
                  <h3>❌ Most Business Websites</h3>
                  <div className="website-screenshot before">
                    <div className="screenshot-header">
                      <div className="browser-dots">
                        <span></span><span></span><span></span>
                      </div>
                      <div className="address-bar">oldwebsite.com</div>
                    </div>
                    <div className="screenshot-content">
                      <div className="old-header">
                        <div className="old-logo">COMPANY NAME</div>
                        <div className="old-nav">
                          <span>Home</span><span>Services</span><span>Contact</span>
                        </div>
                      </div>
                      <div className="old-hero">
                        <div className="old-title">Welcome to Our Business</div>
                        <div className="old-text">We provide quality services</div>
                        <div className="old-button">Contact Us</div>
                      </div>
                      <div className="old-services">
                        <div className="old-service">• Service 1</div>
                        <div className="old-service">• Service 2</div>
                        <div className="old-service">• Service 3</div>
                      </div>
                    </div>
                  </div>
                  <ul className="comparison-bullets">
                    <li>📱 Breaks on mobile devices</li>
                    <li>🔍 Hard to find on Google</li>
                    <li>😴 Generic, boring content</li>
                    <li>❓ Unclear what to do next</li>
                  </ul>
                </div>
              </div>
              
              <div className="comparison-arrow">
                <div className="arrow-circle">→</div>
                <span className="transform-text">48-Hour FREE Example</span>
              </div>
              
              <div className="comparison-item">
                <div className="after-section">
                  <h3>✅ Your LogicPros Website</h3>
                  <div className="website-screenshot after">
                    <div className="screenshot-header">
                      <div className="browser-dots">
                        <span></span><span></span><span></span>
                      </div>
                      <div className="address-bar">yourbusiness.com</div>
                    </div>
                    <div className="screenshot-content">
                      <div className="new-header">
                        <div className="new-logo">YOUR BUSINESS</div>
                        <div className="new-nav">
                          <span>Services</span><span>Portfolio</span>
                          <div className="nav-cta">Get Quote</div>
                        </div>
                      </div>
                      <div className="new-hero">
                        <div className="new-title">Get Professional Results</div>
                        <div className="new-subtitle">Licensed • Insured • 5-Star Reviews</div>
                        <div className="new-buttons">
                          <div className="new-button primary">Get Free Quote</div>
                          <div className="new-button secondary">📞 Call Now</div>
                        </div>
                      </div>
                      <div className="trust-indicators">
                        <div className="trust-item">⭐⭐⭐⭐⭐ 127 Reviews</div>
                        <div className="trust-item">🏆 Licensed & Insured</div>
                      </div>
                    </div>
                  </div>
                  <ul className="comparison-bullets">
                    <li>📱 Perfect on all devices</li>
                    <li>🔍 Built for better Google visibility</li>
                    <li>💼 Professional, trustworthy</li>
                    <li>📞 Clear path to contact you</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="cta-section-inline">
              <h3>Want to see YOUR website before you buy it?</h3>
              <p>We'll create a custom example specifically for your business - delivered in 48 hours, completely free.</p>
              <a href="/free-example" className="btn btn-primary btn-large">Get My Free Website Example</a>
            </div>
          </div>
        </section>

        {/* Key Differentiators Section */}
        <section id="services" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Complete Digital Security & Growth Solutions</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '600px', margin: '0 auto' }}>
                Cybersecurity audits, AI automation, professional websites, and IT support for New Brunswick businesses
              </p>
            </div>
            <div className="services-grid animate-on-scroll">
              <a href="/services" className="service-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="service-icon floating-icon">🔒</div>
                <h3>Cybersecurity & IT Services</h3>
                <p>
                  Professional cybersecurity services including security audits, MFA, and managed IT support to protect your business from cyber threats.
                </p>
                <div className="feature-highlight">Professional Security Solutions</div>
              </a>
              <a href="/services/websites" className="service-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="service-icon floating-icon">🌐</div>
                <h3>Website Design & Development</h3>
                <p>
                  Custom websites designed to convert visitors into customers. Mobile-optimized, fast-loading, and built with modern SEO practices.
                </p>
                <div className="feature-highlight">Free example in 48 hours</div>
              </a>
              <a href="/services/automations" className="service-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="service-icon floating-icon">🤖</div>
                <h3>AI Automation Solutions</h3>
                <p>
                  Intelligent chatbots and automation tools that handle customer inquiries, qualify leads, and streamline business operations.
                </p>
                <div className="feature-highlight">Streamline Operations</div>
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why New Brunswick Businesses Choose LogicPros</h2>
            </div>
            <div className="features-grid animate-on-scroll">
              <div className="feature-item">
                <h3>Grant Funding Available</h3>
                <p>
                  New Brunswick businesses may qualify for cybersecurity and technology grants. 
                  We can help you research available programs and determine eligibility for your projects.
                </p>
              </div>
              <div className="feature-item">
                <h3>Local New Brunswick Expertise</h3>
                <p>
                  Based in New Brunswick with deep understanding of local business needs. 
                  We work with SMEs across all industries to improve their digital security and operations.
                </p>
              </div>
              <div className="feature-item">
                <h3>Complete Security & Growth Solutions</h3>
                <p>
                  From cybersecurity audits to AI automation to professional websites. 
                  Everything your business needs to stay secure and competitive in the digital age.
                </p>
              </div>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get Security Assessment</a>
              <a href="/free-example" className="btn btn-secondary">View Free Website Example</a>
            </div>
          </div>
        </section>


        {/* Testimonials Section */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why Choose LogicPros for Cybersecurity & Website Development</h2>
            </div>
            <div className="features-grid animate-on-scroll">
              <div className="feature-item">
                <h3>🏆 Proven Expertise</h3>
                <p>
                  Years of experience in cybersecurity, web development, and IT services. 
                  We understand the unique challenges facing New Brunswick businesses.
                </p>
              </div>
              <div className="feature-item">
                <h3>💰 Funding Assistance</h3>
                <p>
                  We help you research and apply for available cybersecurity and technology grants. 
                  Many New Brunswick businesses can access funding to offset implementation costs.
                </p>
              </div>
              <div className="feature-item">
                <h3>⚡ Fast Implementation</h3>
                <p>
                  Quick turnaround on all projects - website examples in 48 hours, 
                  security audits within a week, AI solutions deployed rapidly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Free Example CTA Section */}
        <section className="section" style={{ backgroundColor: colors.secondary, color: colors.text.light }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: colors.text.light }}>Not Sure? See Your Website Before You Buy!</h2>
              <p style={{ color: colors.text.light, fontSize: '1.2rem', opacity: 0.9 }}>
                Get a FREE custom website example created specifically for your business. 
                See exactly how your website will look - no commitment required.
              </p>
            </div>
            <div className="free-example-benefits">
              <div className="benefit-item">✓ Completely FREE with no obligations</div>
              <div className="benefit-item">✓ Custom design for YOUR business</div>
              <div className="benefit-item">✓ Delivered within 48 hours</div>
              <div className="benefit-item">✓ See it before you decide</div>
            </div>
            <div className="cta-buttons">
              <a href="/free-example" className="btn btn-primary" style={{ backgroundColor: colors.accent, color: colors.text.light }}>
                Get My Free Example Website
              </a>
              <a href="/contact" className="btn" style={{ backgroundColor: 'transparent', color: colors.text.light, border: `2px solid ${colors.text.light}` }}>
                Ask Questions First
              </a>
            </div>
          </div>
        </section>

        {/* New Brunswick Service Areas */}
        <section className="section" style={{ backgroundColor: '#f0f9ff' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Serving New Brunswick Businesses</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto' }}>
                Local cybersecurity, AI automation, and IT services across New Brunswick. 
                Professional technology solutions available province-wide.
              </p>
            </div>
            <div className="features-grid animate-on-scroll">
              <div className="feature-item" style={{ textAlign: 'center' }}>
                <h3>🏢 Fredericton</h3>
                <p>
                  Cybersecurity audits, AI chatbots, managed IT services, and professional websites 
                  for Fredericton businesses. Expert technology solutions.
                </p>
              </div>
              <div className="feature-item" style={{ textAlign: 'center' }}>
                <h3>🏭 Moncton</h3>
                <p>
                  Security assessments, automated marketing, endpoint protection, and web development 
                  for Moncton area SMEs. Comprehensive technology support.
                </p>
              </div>
              <div className="feature-item" style={{ textAlign: 'center' }}>
                <h3>⚓ Saint John</h3>
                <p>
                  MFA implementation, predictive analytics, patch management, and digital solutions 
                  for Saint John businesses. Professional implementation support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Ready to Secure & Grow Your New Brunswick Business?</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '600px', margin: '0 auto' }}>
                Professional cybersecurity, AI automation, and technology solutions
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get Security Assessment</a>
              <a href="/contact" className="btn btn-secondary">Get Free Consultation</a>
            </div>
          </div>
        </section>

        {/* Grant Information */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <div style={{ textAlign: 'center' }}>
              <h2 className="section-title" style={{ color: colors.text.primary, marginBottom: '20px' }}>Funding Opportunities Available</h2>
              <p style={{ fontSize: '1.2rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto 30px' }}>
                New Brunswick businesses may be eligible for various grants to help cover website development, 
                AI automation, and cybersecurity implementation costs. We can help you research available programs.
              </p>
              <div style={{ background: 'white', borderRadius: '15px', padding: '30px', marginBottom: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <h3 style={{ color: colors.primary, marginBottom: '15px' }}>🌱 Digital Transformation Grants</h3>
                <p style={{ color: colors.text.secondary, marginBottom: '15px' }}>Many programs support website development, e-commerce, and digital marketing initiatives</p>
                <h3 style={{ color: colors.primary, marginBottom: '15px' }}>🔒 Cybersecurity Funding</h3>
                <p style={{ color: colors.text.secondary, marginBottom: '15px' }}>Special funding available for security audits, MFA implementation, and IT infrastructure</p>
                <h3 style={{ color: colors.accent, marginBottom: '15px' }}>🤖 Innovation & AI Support</h3>
                <p style={{ color: colors.text.secondary }}>Grants for businesses adopting AI and automation technologies to improve efficiency</p>
              </div>
              <a href="/contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '15px 30px' }}>
                Help Me Find Grant Opportunities
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer CTA Section */}
      <section className="footer-cta-section">
        <div className="container">
          <div className="footer-cta-content">
            <h3>Still Not Sure? Get Your FREE Website Example</h3>
            <p>No risk, no commitment - see your new website before making any decisions</p>
            <a href="/free-example" className="btn btn-primary btn-large">Get My Free Website Example</a>
            <div className="assurance-text">✓ Delivered in 48 hours ✓ Completely free ✓ No obligation</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};