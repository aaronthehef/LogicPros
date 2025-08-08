import React from 'react';
import './responsive-style.css';
import { Logo } from './components/Logo';
import { Navigation } from './components/Navigation';
import { Animations } from './components/Animations';
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
                <h1 className="typewriter-text">Get Your FREE Website Example - See It Before You Buy</h1>
                <p className="hero-subheadline">
                  We'll build a custom website example for YOUR business in 48 hours. 
                  Completely free, no commitment required.
                </p>
                <div className="hero-cta-section">
                  <a href="/free-example" className="btn btn-primary btn-hero">Get My Free Website Example</a>
                  <a href="/contact" className="secondary-link">Have questions? Ask us first →</a>
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
                    <li>🔍 Ranks #1 in local search</li>
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
              <h2 className="section-title">Why 200+ Contractors Choose LogicPros</h2>
              <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                We specialize in contractor websites that actually get you more customers
              </p>
            </div>
            <div className="services-grid animate-on-scroll">
              <div className="service-card">
                <div className="service-icon floating-icon">⚡</div>
                <h3>Lightning-Fast Turnaround</h3>
                <p>
                  Get your professional website in 2-4 weeks, not months. 
                  We understand contractors can't wait - every day without a good website is money lost.
                </p>
                <div className="feature-highlight">Free example in 48 hours</div>
              </div>
              <div className="service-card">
                <div className="service-icon floating-icon">🏆</div>
                <h3>Proven Results That Matter</h3>
                <p>
                  Our contractor websites generate 3x more leads on average. 
                  We track what works and focus on getting your phone ringing with qualified customers.
                </p>
                <div className="feature-highlight">200+ successful contractor sites</div>
              </div>
              <div className="service-card">
                <div className="service-icon floating-icon">🔧</div>
                <h3>Built for Your Industry</h3>
                <p>
                  We specialize in contractors - plumbing, electrical, HVAC, roofing, and more. 
                  Your website speaks your customers' language and addresses their specific needs.
                </p>
                <div className="feature-highlight">10 contractor specializations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why Small Businesses Choose LogicPros</h2>
            </div>
            <div className="features-grid animate-on-scroll">
              <div className="feature-item">
                <h3>Local Expertise, Wider Reach</h3>
                <p>
                  Based in New Brunswick with deep understanding of Canadian and U.S. markets. 
                  We specialize in contractors and trades but work with any business that values results.
                </p>
              </div>
              <div className="feature-item">
                <h3>Complete Digital Solutions</h3>
                <p>
                  From website design to AI automations to managed IT services. 
                  Everything you need to modernize your business operations in one place.
                </p>
              </div>
              <div className="feature-item">
                <h3>Quick Results</h3>
                <p>
                  2-4 week website turnaround with AI-powered copywriting. 
                  Automations deployed with ongoing monitoring so they just work.
                </p>
              </div>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get Free Consultation</a>
              <a href="/portfolio" className="btn btn-secondary">View Portfolio</a>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="portfolio" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Real Results from Real Contractors</h2>
              <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                See how our websites transformed these contractor businesses
              </p>
            </div>
            <div className="case-studies-grid animate-on-scroll">
              <div className="case-study-card enhanced">
                <div className="case-study-header">
                  <div className="business-type">Plumbing Contractor</div>
                  <div className="location">Fredericton, NB</div>
                </div>
                <div className="case-study-content">
                  <h3>Atlantic Drain Services</h3>
                  <div className="results-grid">
                    <div className="result-item">
                      <div className="result-number">280%</div>
                      <div className="result-label">More emergency calls</div>
                    </div>
                    <div className="result-item">
                      <div className="result-number">4.9⭐</div>
                      <div className="result-label">Google rating</div>
                    </div>
                  </div>
                  <p>
                    "After 3 months with our new LogicPros website, we're booked solid. 
                    The phone rings constantly with qualified customers who found us on Google."
                  </p>
                </div>
              </div>
              <div className="case-study-card enhanced">
                <div className="case-study-header">
                  <div className="business-type">Electrical Contractor</div>
                  <div className="location">Saint John, NB</div>
                </div>
                <div className="case-study-content">
                  <h3>Pro Electric Solutions</h3>
                  <div className="results-grid">
                    <div className="result-item">
                      <div className="result-number">150%</div>
                      <div className="result-label">More service calls</div>
                    </div>
                    <div className="result-item">
                      <div className="result-number">$50k+</div>
                      <div className="result-label">Extra monthly revenue</div>
                    </div>
                  </div>
                  <p>
                    "The website pays for itself every month. We're getting bigger jobs 
                    and customers who appreciate quality work."
                  </p>
                </div>
              </div>
              <div className="case-study-card enhanced">
                <div className="case-study-header">
                  <div className="business-type">HVAC Contractor</div>
                  <div className="location">Moncton, NB</div>
                </div>
                <div className="case-study-content">
                  <h3>Climate Control Experts</h3>
                  <div className="results-grid">
                    <div className="result-item">
                      <div className="result-number">#1</div>
                      <div className="result-label">Google ranking</div>
                    </div>
                    <div className="result-item">
                      <div className="result-number">200+</div>
                      <div className="result-label">New customers/year</div>
                    </div>
                  </div>
                  <p>
                    "We dominate local search now. When people need HVAC work, 
                    they find us first and choose us over the competition."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">What Our Clients Say</h2>
            </div>
            <div className="testimonials-grid animate-on-scroll">
              <div className="testimonial-card">
                <p className="testimonial-quote">
                  "The WordPress site and Google review automation from LogicPros transformed our business. We went from 2-3 leads per week to 15+ qualified prospects. The 4-week turnaround was exactly what we needed."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <h4>Dave Mitchell</h4>
                    <p>Owner, Atlantic HVAC Services</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-quote">
                  "The AI automations handle our social media posting and review requests perfectly. It's like having a marketing assistant that never takes a day off. Excellent solution for our business."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <h4>Lisa Thompson</h4>
                    <p>Manager, Thompson Electric</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-quote">
                  "Professional service from start to finish. They built our React website with modern design and the managed IT services keep everything running smoothly. Highly recommended for any contractor."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <h4>Mark Sullivan</h4>
                    <p>CEO, Sullivan Construction</p>
                  </div>
                </div>
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

        {/* Final CTA Section */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Ready to Grow Your Business?</h2>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get Started Today</a>
              <a href="/contact" className="btn btn-secondary">Schedule Consultation</a>
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
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-column">
              <h4>Services</h4>
              <a href="#lead-generation">Lead Generation Sites</a>
              <a href="#ecommerce">E-Commerce Solutions</a>
              <a href="#project-management">Project Management</a>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <a href="/about">About Us</a>
              <a href="/portfolio">Portfolio</a>
              <a href="#case-studies">Case Studies</a>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <a href="#seo-guide">SEO Guide</a>
              <a href="#web-trends">Web Trends</a>
              <a href="/contact">Contact</a>
            </div>
            <div className="footer-column">
              <h4>Contact Info</h4>
              <p>LogicPros Web Development</p>
              <p>New Brunswick, Canada</p>
              <p>Serving Canada & U.S.</p>
              <a href="mailto:info@logicpros.ca">info@logicpros.ca</a>
            </div>
          </div>
          <div className="footer-bottom">
            <div>
              <p>&copy; 2025 LogicPros Web Development. All rights reserved.</p>
            </div>
            <div className="social-icons">
              <div className="social-icon">📧</div>
              <div className="social-icon">📱</div>
              <div className="social-icon">💼</div>
              <div className="social-icon">🌐</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};