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
                <h1 className="typewriter-text">Websites & Business Automation That Get Results</h1>
                <p>
                  Based in New Brunswick, serving contractors and small businesses across Canada and the U.S. 
                  Get more leads with WordPress or React websites, plus AI-powered automations that 
                  handle Google reviews, social media, and scheduling while you focus on what you do best.
                </p>
                <a href="/contact" className="btn btn-primary">Start Your Project</a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Complete Digital Solutions for Your Business</h2>
            </div>
            <div className="services-grid animate-on-scroll">
              <a href="/services/websites" className="service-card-link">
                <div className="service-card">
                  <div className="service-icon floating-icon">🌐</div>
                  <h3>Contractor & Business Websites</h3>
                  <p>
                    WordPress or React websites built for SEO and lead generation. 
                    AI-powered copywriting, mobile-responsive design, and 2-4 week turnaround. 
                    Perfect for trades and service businesses.
                  </p>
                </div>
              </a>
              <a href="/services/automations" className="service-card-link">
                <div className="service-card">
                  <div className="service-icon floating-icon">🤖</div>
                  <h3>AI Business Automations</h3>
                  <p>
                    Google review request systems, social media auto-posting, and calendar integrations. 
                    Full backend setup with ongoing monitoring using n8n automation platform.
                  </p>
                </div>
              </a>
              <a href="/services/it-services" className="service-card-link">
                <div className="service-card">
                  <div className="service-icon floating-icon">💻</div>
                  <h3>Managed IT Services</h3>
                  <p>
                    Software updates, cybersecurity, backups, and remote support. 
                    Complete IT management so you can focus on growing your business.
                  </p>
                </div>
              </a>
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
              <a href="/contact" className="btn btn-primary">Get Free Quote</a>
              <a href="/portfolio" className="btn btn-secondary">View Portfolio</a>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="portfolio" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Client Success Stories</h2>
            </div>
            <div className="case-studies-grid animate-on-scroll">
              <div className="case-study-card">
                <div className="case-study-image">Project Image</div>
                <div className="case-study-content">
                  <h3>Maritime Roofing Co.</h3>
                  <p>
                    New WordPress site with local SEO increased leads by 280% in 4 months. 
                    Google review automation maintains 4.9-star rating with 40+ new reviews.
                  </p>
                </div>
              </div>
              <div className="case-study-card">
                <div className="case-study-image">Project Image</div>
                <div className="case-study-content">
                  <h3>Pro Electric Solutions</h3>
                  <p>
                    React website with AI-powered content plus automated social posting 
                    resulted in 150% more service calls and stronger online presence.
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
                  "The AI automations handle our social media posting and review requests perfectly. It's like having a marketing assistant that never takes a day off. Great value for the investment."
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
              <a href="/contact" className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
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