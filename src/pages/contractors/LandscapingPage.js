import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';

export const LandscapingPage = () => {
  return (
    <div className="landing-page">
      <header className="sticky-header">
        <div className="header-content">
          <div className="logo"><Logo /></div>
          <nav className="nav-menu">
            <div className="nav-links">
              <a href="/services" className="nav-link">Services</a>
              <a href="/portfolio" className="nav-link">Portfolio</a>
              <a href="/about" className="nav-link">About</a>
              <a href="/contact" className="nav-link">Contact</a>
            </div>
            <a href="/free-example" className="btn btn-primary">Free Example</a>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Professional Websites for Landscaping Contractors</h1>
              <p className="hero-subtitle">
                Cultivate your landscaping business with a website that showcases your outdoor 
                artistry, attracts premium clients, and grows your revenue season after season. 
                Specialized web development for landscapers who create outdoor masterpieces.
              </p>
              <a href="/contact" className="btn btn-primary btn-large">Get My Landscaping Website</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Challenges Every Landscaping Business Owner Faces</h2>
            <div className="challenges-grid">
              <div className="challenge-item">
                <h3>🌱 Seasonal Revenue Fluctuations</h3>
                <p>Landscaping revenue varies dramatically by season. You need to capture design work in winter, installations in spring, and maintenance contracts year-round to maintain consistent cash flow.</p>
              </div>
              <div className="challenge-item">
                <h3>🎨 Visual Portfolio Importance</h3>
                <p>Landscaping is visual work. Customers need to see stunning before/after photos, design concepts, and completed projects to understand your artistic vision and quality standards.</p>
              </div>
              <div className="challenge-item">
                <h3>💰 Premium Service Positioning</h3>
                <p>Quality landscaping commands premium prices, but customers often shop based on price alone. Your website must demonstrate value and artistry to justify higher rates.</p>
              </div>
              <div className="challenge-item">
                <h3>🏠 Diverse Client Education</h3>
                <p>Customers don't understand plant selection, soil conditions, maintenance requirements, or seasonal timing. Your website needs to educate and guide their decisions.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>How LogicPros Grows Your Landscaping Business</h2>
            <div className="solutions-grid">
              <div className="solution-item">
                <h3>🌸 Seasonal Campaign System</h3>
                <p><strong>What we do:</strong> Create dynamic content highlighting spring plantings, summer maintenance, fall cleanups, and winter design planning to capture year-round opportunities.</p>
                <p><strong>Result:</strong> Consistent lead flow and revenue stabilization across all seasons.</p>
              </div>
              <div className="solution-item">
                <h3>📸 Stunning Visual Showcase</h3>
                <p><strong>What we do:</strong> Professional photo galleries, before/after transformations, seasonal progression photos, and detailed close-ups of your landscaping artistry.</p>
                <p><strong>Result:</strong> Higher-quality leads who appreciate and will pay for premium work.</p>
              </div>
              <div className="solution-item">
                <h3>🎯 Premium Market Positioning</h3>
                <p><strong>What we do:</strong> Position you as a landscape artist and outdoor living expert, not just a lawn care service, with sophisticated design showcases and client testimonials.</p>
                <p><strong>Result:</strong> Attract customers willing to invest in quality landscaping and design.</p>
              </div>
              <div className="solution-item">
                <h3>🌿 Educational Content Strategy</h3>
                <p><strong>What we do:</strong> Create informative pages about plant selection, seasonal care, design principles, and maintenance to establish you as the local landscaping expert.</p>
                <p><strong>Result:</strong> Better educated customers who understand and value your expertise.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Landscaping Services We Help You Market</h2>
            <div className="services-grid">
              <div className="service-category">
                <h3>🎨 Landscape Design</h3>
                <ul>
                  <li>Custom landscape design</li>
                  <li>3D design renderings</li>
                  <li>Plant selection consultation</li>
                  <li>Outdoor living spaces</li>
                  <li>Garden planning & layout</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🏗️ Installation Services</h3>
                <ul>
                  <li>Complete landscape installation</li>
                  <li>Sod & seeding installation</li>
                  <li>Tree & shrub planting</li>
                  <li>Irrigation system installation</li>
                  <li>Hardscape construction</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🌿 Maintenance Programs</h3>
                <ul>
                  <li>Weekly lawn maintenance</li>
                  <li>Seasonal cleanup services</li>
                  <li>Pruning & trimming</li>
                  <li>Fertilization programs</li>
                  <li>Pest & disease management</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🏞️ Specialty Services</h3>
                <ul>
                  <li>Water feature installation</li>
                  <li>Outdoor lighting design</li>
                  <li>Retaining wall construction</li>
                  <li>Patio & walkway installation</li>
                  <li>Snow removal services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Real Results for Landscaping Contractors</h2>
            <div className="results-grid">
              <div className="result-item">
                <h3>Artisan Landscapes</h3>
                <p><strong>Challenge:</strong> Competing against low-cost lawn care services for premium landscape design projects.</p>
                <p><strong>Solution:</strong> Sophisticated website showcasing artistic designs, luxury installations, and high-end client testimonials.</p>
                <p><strong>Results:</strong> 275% increase in design consultation requests, average project value increased to $25K.</p>
              </div>
              <div className="result-item">
                <h3>Seasonal Scapes Pro</h3>
                <p><strong>Challenge:</strong> Revenue dropped 60% during winter months with no design or planning work.</p>
                <p><strong>Solution:</strong> Year-round marketing strategy with winter design planning and early spring booking incentives.</p>
                <p><strong>Results:</strong> Maintained 80% revenue during off-season, booked $180K in spring work during winter.</p>
              </div>
              <div className="result-item">
                <h3>Elite Outdoor Living</h3>
                <p><strong>Challenge:</strong> Customers couldn't visualize completed projects from basic proposals and estimates.</p>
                <p><strong>Solution:</strong> Visual-heavy website with extensive before/after galleries and 3D design showcases.</p>
                <p><strong>Results:</strong> 65% higher proposal acceptance rate, 40% increase in project add-ons and upgrades.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Landscaping Website Packages</h2>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Garden Starter</h3>
                <div className="price">$2,900</div>
                <ul>
                  <li>8-page visual-focused site</li>
                  <li>Photo gallery showcase</li>
                  <li>Service descriptions</li>
                  <li>Seasonal service calendar</li>
                  <li>Contact & estimate forms</li>
                  <li>Mobile-optimized design</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Get Started</a>
              </div>
              <div className="pricing-card featured">
                <h3>Landscape Professional</h3>
                <div className="price">$5,400</div>
                <ul>
                  <li>15-page comprehensive site</li>
                  <li>Extensive before/after galleries</li>
                  <li>Seasonal marketing campaigns</li>
                  <li>Design portfolio showcase</li>
                  <li>Client testimonial system</li>
                  <li>Maintenance program pages</li>
                  <li>Local SEO optimization</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Most Popular</a>
              </div>
              <div className="pricing-card">
                <h3>Landscape Artist</h3>
                <div className="price">$8,800</div>
                <ul>
                  <li>Unlimited pages & galleries</li>
                  <li>Custom design tools</li>
                  <li>Advanced portfolio management</li>
                  <li>Seasonal campaign automation</li>
                  <li>Client project portals</li>
                  <li>Comprehensive analytics</li>
                  <li>Monthly content updates</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Dominate Your Market</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Grow Your Landscaping Business?</h2>
              <p>Join 45+ landscaping contractors who've flourished with LogicPros websites. Design projects, installations, and maintenance contracts - blooming year-round.</p>
              <div className="cta-buttons">
                <a href="/free-example" className="btn btn-primary btn-large">See My Free Landscaping Website Example</a>
                <a href="/contact" className="btn btn-outline btn-large">Get My Custom Quote</a>
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
              <p>Professional websites for landscaping contractors</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Contractor Services</h4>
                <a href="/contractors/landscaping">Landscaping Websites</a>
                <a href="/contractors/painting">Painting Websites</a>
                <a href="/contractors/flooring">Flooring Websites</a>
                <a href="/contractors/concrete">Concrete Websites</a>
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
                <p>hello@logicpros.ca</p>
                <p>(555) LOGIC-1</p>
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