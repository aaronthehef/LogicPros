import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';

export const RemodelingPage = () => {
  return (
    <div className="landing-page">
      <header className="sticky-header">
        <div className="header-content">
          <div className="logo"><Logo /></div>
          <Navigation />
        </div>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Professional Websites for Home Remodeling Contractors</h1>
              <p className="hero-subtitle">
                Transform your remodeling business with a website that showcases stunning 
                transformations, builds trust for major investments, and converts dreamers into clients. 
                Specialized web development for remodeling professionals who create beautiful living spaces.
              </p>
              <a href="/contact" className="btn btn-primary btn-large">Get My Remodeling Website</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Challenges Every Remodeling Business Owner Faces</h2>
            <div className="challenges-grid">
              <div className="challenge-item">
                <h3>🏠 Major Investment Decisions</h3>
                <p>Home remodeling projects cost $15,000-$100,000+. Homeowners research extensively, get multiple bids, and need absolute confidence before committing to such major investments.</p>
              </div>
              <div className="challenge-item">
                <h3>🎨 Vision Communication Challenge</h3>
                <p>Customers struggle to envision their transformed space. Your website must help them visualize possibilities and understand your design process and capabilities.</p>
              </div>
              <div className="challenge-item">
                <h3>📋 Complex Project Management</h3>
                <p>Remodeling involves permits, timelines, material selections, and coordination of multiple trades. Customers need assurance you can manage all aspects professionally.</p>
              </div>
              <div className="challenge-item">
                <h3>🔍 Trust & Credibility Requirements</h3>
                <p>Inviting contractors into their home for major work requires absolute trust. Your website must establish credibility, showcase quality work, and provide social proof.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>How LogicPros Transforms Your Remodeling Success</h2>
            <div className="solutions-grid">
              <div className="solution-item">
                <h3>💎 Stunning Transformation Showcase</h3>
                <p><strong>What we do:</strong> Create dramatic before/after galleries, detailed process documentation, and room-by-room transformation stories that demonstrate your design and construction expertise.</p>
                <p><strong>Result:</strong> Higher-quality leads who can envision their space transformed.</p>
              </div>
              <div className="solution-item">
                <h3>🏆 Trust & Expertise Building</h3>
                <p><strong>What we do:</strong> Showcase licenses, certifications, awards, insurance, and detailed customer testimonials with real names and photos to establish absolute credibility.</p>
                <p><strong>Result:</strong> Increased trust and confidence for major investment decisions.</p>
              </div>
              <div className="solution-item">
                <h3>📝 Process Transparency System</h3>
                <p><strong>What we do:</strong> Detailed pages explaining design consultation, permitting, timeline management, material selection, and project coordination processes.</p>
                <p><strong>Result:</strong> Reduced customer anxiety and smoother project completion.</p>
              </div>
              <div className="solution-item">
                <h3>🎯 Premium Market Positioning</h3>
                <p><strong>What we do:</strong> Position you as a design-build professional who creates custom living spaces, not just a contractor who does repairs.</p>
                <p><strong>Result:</strong> Attract customers willing to invest in quality remodeling and design.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Remodeling Services We Help You Market</h2>
            <div className="services-grid">
              <div className="service-category">
                <h3>🍳 Kitchen Remodeling</h3>
                <ul>
                  <li>Complete kitchen renovations</li>
                  <li>Custom cabinet installation</li>
                  <li>Kitchen design & planning</li>
                  <li>Countertop installation</li>
                  <li>Kitchen island design</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🛁 Bathroom Remodeling</h3>
                <ul>
                  <li>Master bathroom renovations</li>
                  <li>Bathroom design & layout</li>
                  <li>Shower & tub installations</li>
                  <li>Vanity & storage solutions</li>
                  <li>Accessibility modifications</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🏠 Whole Home Renovations</h3>
                <ul>
                  <li>Complete home makeovers</li>
                  <li>Open floor plan conversions</li>
                  <li>Home additions & expansions</li>
                  <li>Historic home restoration</li>
                  <li>Multi-room renovations</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🏡 Specialty Remodeling</h3>
                <ul>
                  <li>Basement finishing</li>
                  <li>Attic conversions</li>
                  <li>Home office creation</li>
                  <li>Outdoor living spaces</li>
                  <li>Aging-in-place modifications</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Common Questions from Remodeling Contractors</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>How do you help customers visualize their remodeling transformation?</h3>
                <p>We create stunning before/after galleries, detailed transformation stories, and showcase your design process. This helps customers envision their space transformed and builds confidence in your capabilities.</p>
              </div>
              <div className="faq-item">
                <h3>How do you help position me as a premium remodeling professional?</h3>
                <p>We emphasize your design expertise, quality materials, project management skills, and attention to detail. This positions you as a design-build professional, not just a contractor.</p>
              </div>
              <div className="faq-item">
                <h3>How do you address customer concerns about remodeling disruption?</h3>
                <p>We create detailed process pages explaining project timelines, dust control measures, living arrangements, and communication systems. This reduces anxiety and sets proper expectations.</p>
              </div>
              <div className="faq-item">
                <h3>Do you showcase different remodeling specialties effectively?</h3>
                <p>Yes! We create dedicated sections for kitchen, bathroom, whole home, and specialty remodeling, with specific galleries, processes, and consultation information for each service type.</p>
              </div>
              <div className="faq-item">
                <h3>How do you help build trust for major home investments?</h3>
                <p>We prominently display licenses, insurance, certifications, awards, and detailed customer testimonials with real names and photos. This establishes the credibility needed for major investments.</p>
              </div>
              <div className="faq-item">
                <h3>Can you integrate with design software and project management tools?</h3>
                <p>We can showcase your use of professional design software, integrate with project management platforms, and even create client portals where customers can track their remodeling progress.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Remodel Your Business Success?</h2>
              <p>Join 55+ remodeling contractors who've transformed their revenue with LogicPros websites. Kitchen renovations, bathroom makeovers, and whole home transformations - all flowing to your business.</p>
              <div className="cta-buttons">
                <a href="/free-example" className="btn btn-primary btn-large">See My Free Remodeling Website Example</a>
                <a href="/contact" className="btn btn-outline btn-large">Schedule Free Consultation</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>LogicPros</h3>
              <p>Professional websites for remodeling contractors</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Contractor Services</h4>
                <a href="/contractors/remodeling">Remodeling Websites</a>
                <a href="/contractors/construction">Construction Websites</a>
                <a href="/contractors/flooring">Flooring Websites</a>
                <a href="/contractors/painting">Painting Websites</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="/about">About Us</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/contact">Contact</a>
                <a href="/free-example">Free Example</a>
              </div>
              <div className="footer-column">
                <h4>Contact</h4>
                <p>aaron@logicpros.ca</p>
                <p>(506) 478-2949</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 LogicPros. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};