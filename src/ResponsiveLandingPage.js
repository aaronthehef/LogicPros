import React from 'react';
import './responsive-style.css';
import { Logo } from './components/Logo';
import { Navigation } from './components/Navigation';
import { Animations } from './components/Animations';
import { Footer } from './components/Footer';
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
                  Eligible for Cybersecure NB grants up to $3,000.
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
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">See The Difference a Professional Website Makes</h2>
              <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
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
              <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                Cybersecurity audits, AI automation, professional websites, and IT support - all eligible for Cybersecure NB grants
              </p>
            </div>
            <div className="services-grid animate-on-scroll">
              <div className="service-card">
                <div className="service-icon floating-icon">🔒</div>
                <h3>Cybersecurity Audits & Protection</h3>
                <p>
                  Comprehensive security assessments, password management, MFA implementation, and incident response planning. 
                  Protect your business from cyber threats with expert security solutions.
                </p>
                <div className="feature-highlight">Cybersecure NB Grant Eligible - Up to $3,000</div>
              </div>
              <div className="service-card">
                <div className="service-icon floating-icon">🤖</div>
                <h3>AI Automation & Integration</h3>
                <p>
                  Chatbots, automated marketing, predictive analytics, and AI-powered business processes. 
                  Streamline operations and reduce manual work with intelligent automation.
                </p>
                <div className="feature-highlight">Cybersecure NB Grant Eligible - Up to $3,000</div>
              </div>
              <div className="service-card">
                <div className="service-icon floating-icon">🌐</div>
                <h3>Professional Website Development</h3>
                <p>
                  Modern, secure websites built with the latest technology. Mobile-responsive, SEO-optimized, 
                  and designed to convert visitors into customers.
                </p>
                <div className="feature-highlight">Free example in 48 hours</div>
              </div>
              <div className="service-card">
                <div className="service-icon floating-icon">💻</div>
                <h3>Managed IT Services</h3>
                <p>
                  24/7 monitoring, patch management, endpoint security, and technical support. 
                  Keep your systems secure and running smoothly with proactive IT management.
                </p>
                <div className="feature-highlight">New Brunswick based support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why New Brunswick Businesses Choose LogicPros</h2>
            </div>
            <div className="features-grid animate-on-scroll">
              <div className="feature-item">
                <h3>Cybersecure NB Program Partner</h3>
                <p>
                  Officially recognized provider for cybersecurity and AI services under the Cybersecure NB program. 
                  Get up to $3,000 in grants to enhance your business security and AI capabilities.
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

        {/* Case Studies Section */}
        <section id="portfolio" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Cybersecurity, Website Development & AI Solutions</h2>
              <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                Comprehensive digital services for New Brunswick businesses - from security audits to modern websites
              </p>
            </div>
            <div className="services-grid animate-on-scroll">
              <div className="service-card">
                <div className="service-icon floating-icon">🔒</div>
                <h3>Cybersecurity Audits</h3>
                <p>
                  Comprehensive security assessments including password management, MFA implementation, 
                  security headers, patch management, and incident response planning.
                </p>
                <div className="feature-highlight">Cybersecure NB Grant Eligible - Up to $3,000</div>
              </div>
              <div className="service-card">
                <div className="service-icon floating-icon">🌐</div>
                <h3>Professional Websites</h3>
                <p>
                  Modern, secure, mobile-responsive websites built with React or WordPress. 
                  SEO-optimized and designed to convert visitors into customers.
                </p>
                <div className="feature-highlight">Free example delivered in 48 hours</div>
              </div>
              <div className="service-card">
                <div className="service-icon floating-icon">🤖</div>
                <h3>AI & Automation</h3>
                <p>
                  Chatbots, automated email marketing, predictive analytics, social media management, 
                  and AI-powered business process automation.
                </p>
                <div className="feature-highlight">Cybersecure NB Grant Eligible - Up to $3,000</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
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
                <h3>💰 Maximize Your Grants</h3>
                <p>
                  Expert guidance on Cybersecure NB grant applications and implementation. 
                  We help you get the full $3,000 grant for eligible cybersecurity and AI services.
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
        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Not Sure? See Your Website Before You Buy!</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
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
              <a href="/free-example" className="btn btn-primary" style={{ backgroundColor: 'white', color: '#000' }}>
                Get My Free Example Website
              </a>
              <a href="/contact" className="btn" style={{ backgroundColor: 'transparent', color: 'white', border: '2px solid white' }}>
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
              <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
                Local cybersecurity, AI automation, and IT services across New Brunswick. 
                Cybersecure NB grant eligible services available province-wide.
              </p>
            </div>
            <div className="features-grid animate-on-scroll">
              <div className="feature-item" style={{ textAlign: 'center' }}>
                <h3>🏢 Fredericton</h3>
                <p>
                  Cybersecurity audits, AI chatbots, managed IT services, and professional websites 
                  for Fredericton businesses. Cybersecure NB grants available.
                </p>
              </div>
              <div className="feature-item" style={{ textAlign: 'center' }}>
                <h3>🏭 Moncton</h3>
                <p>
                  Security assessments, automated marketing, endpoint protection, and web development 
                  for Moncton area SMEs. Full grant eligibility support.
                </p>
              </div>
              <div className="feature-item" style={{ textAlign: 'center' }}>
                <h3>⚓ Saint John</h3>
                <p>
                  MFA implementation, predictive analytics, patch management, and digital solutions 
                  for Saint John businesses. Maximize your $3,000 grant.
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
              <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                Get up to $3,000 in Cybersecure NB grants for cybersecurity and AI services
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get Security Assessment</a>
              <a href="/contact" className="btn btn-secondary">Learn About Grants</a>
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