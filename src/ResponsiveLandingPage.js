import React from 'react';
import './responsive-style.css';
import { Logo } from './components/Logo';

export const ResponsiveLandingPage = () => {
  return (
    <div className="landing-page">
      {/* Sticky Header */}
      <header className="sticky-header">
        <div className="header-content">
          <div className="logo">
            <Logo />
          </div>
          <nav className="nav-menu">
            <div className="nav-links">
              <a href="/services" className="nav-link">Services</a>
              <a href="/portfolio" className="nav-link">Portfolio</a>
              <a href="/about" className="nav-link">About</a>
              <a href="/contact" className="nav-link">Contact</a>
            </div>
            <a href="/free-example" className="btn btn-primary">Free Example</a>
            <button className="mobile-menu-toggle">☰</button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-image">Hero Image Placeholder</div>
            <div className="hero-content">
              <h1>Professional Websites That Win Contracts</h1>
              <p>
                Custom web development for contractors who want to dominate their local market. 
                Get more leads, build trust, and convert visitors into paying customers with a website 
                that showcases your expertise and reliability.
              </p>
              <a href="/contact" className="btn btn-primary">Start Your Project</a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Our Specialized Services</h2>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🎯</div>
                <h3>Lead Generation Websites</h3>
                <p>
                  Mobile-responsive websites designed to capture leads and convert visitors 
                  into qualified prospects. Includes contact forms, quote requests, and local SEO optimization.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">🛒</div>
                <h3>E-Commerce Solutions</h3>
                <p>
                  Custom online stores for contractors selling tools, equipment, or materials. 
                  Secure payment processing, inventory management, and customer portals.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">📊</div>
                <h3>Project Management Portals</h3>
                <p>
                  Client portals for project tracking, document sharing, progress updates, 
                  and communication. Keep clients informed and streamline your workflow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why Contractors Choose LogicPros</h2>
            </div>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Industry Expertise</h3>
                <p>
                  We understand contractor workflows, bidding processes, and client relationships. 
                  Your website will speak directly to potential customers in your industry.
                </p>
              </div>
              <div className="feature-item">
                <h3>Local SEO Mastery</h3>
                <p>
                  Dominate local search results in your service area. We optimize for 
                  "contractor near me" searches and Google My Business integration.
                </p>
              </div>
              <div className="feature-item">
                <h3>Fast Turnaround</h3>
                <p>
                  Get your professional website launched in 2-3 weeks, not months. 
                  We know contractors need results quickly to stay competitive.
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
              <h2 className="section-title">Recent Success Stories</h2>
            </div>
            <div className="case-studies-grid">
              <div className="case-study-card">
                <div className="case-study-image">Project Image</div>
                <div className="case-study-content">
                  <h3>ABC Roofing Solutions</h3>
                  <p>
                    Increased online leads by 350% in 6 months with a mobile-first design 
                    and local SEO optimization. Now ranking #1 for "roofing contractor [city]".
                  </p>
                </div>
              </div>
              <div className="case-study-card">
                <div className="case-study-image">Project Image</div>
                <div className="case-study-content">
                  <h3>Elite Landscaping Co.</h3>
                  <p>
                    Custom project management portal reduced client communication time by 60% 
                    and improved customer satisfaction scores to 98%.
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
              <h2 className="section-title">What Our Contractor Clients Say</h2>
            </div>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <p className="testimonial-quote">
                  "LogicPros built us a website that actually gets results. We've tripled our online leads and the project management portal keeps our clients happy. Best investment we've made for our business."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <h4>Mike Rodriguez</h4>
                    <p>Owner, Rodriguez Construction</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-quote">
                  "The e-commerce site LogicPros built for our supply business increased our online sales by 400%. The inventory management system saves us hours every week."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <h4>Sarah Chen</h4>
                    <p>Manager, ProTools Supply</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-quote">
                  "Professional, fast, and they understand the construction industry. Our new website looks amazing and we're getting calls from customers who found us online. Highly recommended!"
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <h4>Tom Anderson</h4>
                    <p>CEO, Anderson Plumbing</p>
                  </div>
                </div>
              </div>
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
              <p>Serving Contractors Nationwide</p>
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