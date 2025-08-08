import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';

export const PaintingPage = () => {
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
              <h1 className="hero-title">Professional Websites for Painting Contractors</h1>
              <p className="hero-subtitle">
                Brush up your painting business with a website that showcases your color expertise, 
                attracts premium residential and commercial clients, and transforms leads into signed contracts. 
                Specialized web development for painters who create beautiful transformations.
              </p>
              <a href="/contact" className="btn btn-primary btn-large">Get My Painting Website</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Challenges Every Painting Business Owner Faces</h2>
            <div className="challenges-grid">
              <div className="challenge-item">
                <h3>🎨 Visual Portfolio Importance</h3>
                <p>Painting is visual work where quality speaks louder than words. Customers need to see stunning before/after transformations, color expertise, and attention to detail to trust you with their biggest investment.</p>
              </div>
              <div className="challenge-item">
                <h3>💰 Price Competition Battle</h3>
                <p>Everyone knows someone who "paints on weekends." You're competing against unlicensed, uninsured competitors who undercut your professional rates. Your website must demonstrate value beyond just price.</p>
              </div>
              <div className="challenge-item">
                <h3>🏠 Seasonal Revenue Swings</h3>
                <p>Exterior painting peaks in spring/summer while interior work stays steady year-round. You need consistent lead generation to maintain cash flow through seasonal fluctuations.</p>
              </div>
              <div className="challenge-item">
                <h3>📋 Service Scope Clarity</h3>
                <p>Customers don't understand paint quality differences, surface preparation importance, or why professional painting costs more. Your website needs to educate and justify your premium pricing.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>How LogicPros Paints Your Success Story</h2>
            <div className="solutions-grid">
              <div className="solution-item">
                <h3>🖼️ Stunning Visual Showcase</h3>
                <p><strong>What we do:</strong> Create beautiful before/after galleries, color transformation showcases, and detailed close-up shots that highlight your craftsmanship and attention to detail.</p>
                <p><strong>Result:</strong> Higher-quality leads who appreciate and will pay for professional work.</p>
              </div>
              <div className="solution-item">
                <h3>🏆 Premium Value Positioning</h3>
                <p><strong>What we do:</strong> Emphasize quality materials, proper preparation, licensed/insured status, and warranties to justify premium pricing over weekend warriors.</p>
                <p><strong>Result:</strong> Attract customers who value quality over cheap prices.</p>
              </div>
              <div className="solution-item">
                <h3>📅 Year-Round Marketing Strategy</h3>
                <p><strong>What we do:</strong> Seasonal content highlighting exterior painting in spring/summer and interior transformations in fall/winter to maintain consistent lead flow.</p>
                <p><strong>Result:</strong> Steady revenue stream regardless of season.</p>
              </div>
              <div className="solution-item">
                <h3>🎓 Customer Education System</h3>
                <p><strong>What we do:</strong> Detailed pages explaining paint quality, surface preparation, color consultation, and why professional painting provides long-term value.</p>
                <p><strong>Result:</strong> Better qualified leads who understand and appreciate your expertise.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Painting Services We Help You Market</h2>
            <div className="services-grid">
              <div className="service-category">
                <h3>🏠 Residential Painting</h3>
                <ul>
                  <li>Interior house painting</li>
                  <li>Exterior home painting</li>
                  <li>Kitchen & bathroom painting</li>
                  <li>Trim & molding painting</li>
                  <li>Ceiling painting & textures</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🏢 Commercial Painting</h3>
                <ul>
                  <li>Office building painting</li>
                  <li>Retail store painting</li>
                  <li>Restaurant & hospitality</li>
                  <li>Industrial facility painting</li>
                  <li>Multi-unit residential</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🎨 Specialty Services</h3>
                <ul>
                  <li>Color consultation & design</li>
                  <li>Wallpaper removal & installation</li>
                  <li>Deck & fence staining</li>
                  <li>Pressure washing prep</li>
                  <li>Decorative finishes</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🔧 Restoration & Repair</h3>
                <ul>
                  <li>Drywall repair & patching</li>
                  <li>Wood rot repair & painting</li>
                  <li>Lead paint remediation</li>
                  <li>Historic restoration</li>
                  <li>Insurance damage painting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Common Questions from Painting Contractors</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>How do you showcase painting quality and craftsmanship?</h3>
                <p>We create detailed photo galleries with before/after comparisons, close-up detail shots, and transformation stories. Your portfolio becomes a powerful sales tool that demonstrates quality before customers even call.</p>
              </div>
              <div className="faq-item">
                <h3>Can you help me compete against cheap, unlicensed painters?</h3>
                <p>Absolutely! We emphasize your licensing, insurance, quality materials, proper preparation, and warranties. This positions you as the professional choice and demonstrates your value over weekend painters.</p>
              </div>
              <div className="faq-item">
                <h3>How do you handle seasonal fluctuations in painting demand?</h3>
                <p>We create seasonal content strategies - promoting exterior painting in spring/summer and interior transformations in fall/winter. This helps maintain consistent lead flow year-round.</p>
              </div>
              <div className="faq-item">
                <h3>Do you optimize for both residential and commercial painting?</h3>
                <p>Yes! We create separate sections for residential and commercial services, with different messaging, project examples, and client testimonials relevant to each market segment.</p>
              </div>
              <div className="faq-item">
                <h3>How do you help customers understand paint quality differences?</h3>
                <p>We create educational content explaining paint grades, surface preparation importance, application techniques, and long-term value. This helps customers understand the investment in professional painting services.</p>
              </div>
              <div className="faq-item">
                <h3>Can you integrate color consultation and design services?</h3>
                <p>Definitely! We highlight your color expertise, design consultation services, and trend knowledge. This positions you as more than just a painter - you're a color and design professional.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Paint Your Path to Success?</h2>
              <p>Join 50+ painting contractors who've transformed their business with LogicPros websites. Residential makeovers, commercial projects, and specialty finishes - all flowing to your business.</p>
              <div className="cta-buttons">
                <a href="/free-example" className="btn btn-primary btn-large">See My Free Painting Website Example</a>
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
              <p>Professional websites for painting contractors</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Contractor Services</h4>
                <a href="/contractors/painting">Painting Websites</a>
                <a href="/contractors/flooring">Flooring Websites</a>
                <a href="/contractors/concrete">Concrete Websites</a>
                <a href="/contractors/remodeling">Remodeling Websites</a>
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