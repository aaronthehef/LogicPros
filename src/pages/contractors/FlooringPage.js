import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';

export const FlooringPage = () => {
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
              <h1 className="hero-title">Professional Websites for Flooring Contractors</h1>
              <p className="hero-subtitle">
                Build your flooring business on solid ground with a website that showcases your 
                craftsmanship, educates customers on material choices, and converts browsers into buyers. 
                Specialized web development for flooring professionals who create beautiful foundations.
              </p>
              <a href="/contact" className="btn btn-primary btn-large">Get My Flooring Website</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Challenges Every Flooring Business Owner Faces</h2>
            <div className="challenges-grid">
              <div className="challenge-item">
                <h3>📐 Complex Material Education</h3>
                <p>Customers are overwhelmed by flooring options - hardwood, laminate, vinyl, tile, carpet. Your website must educate them on differences, benefits, and costs to guide informed decisions.</p>
              </div>
              <div className="challenge-item">
                <h3>💰 High-Value Purchase Hesitation</h3>
                <p>Flooring is expensive ($3,000-$15,000+ projects) and long-lasting. Customers research extensively and get multiple quotes. Your website must build trust and demonstrate value.</p>
              </div>
              <div className="challenge-item">
                <h3>🏠 Installation Complexity Concerns</h3>
                <p>Customers worry about installation disruption, timeline, dust, and moving furniture. Your website needs to address these concerns and showcase your professional process.</p>
              </div>
              <div className="challenge-item">
                <h3>🎨 Visual Showroom Limitations</h3>
                <p>Physical showrooms can't display every option. Your website needs extensive galleries showing materials in real homes to help customers visualize their space.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>How LogicPros Lays the Foundation for Your Success</h2>
            <div className="solutions-grid">
              <div className="solution-item">
                <h3>📚 Comprehensive Material Guide</h3>
                <p><strong>What we do:</strong> Create detailed comparison pages for each flooring type with pros/cons, cost ranges, durability ratings, and room-specific recommendations.</p>
                <p><strong>Result:</strong> Better educated customers who come to you knowing what they want.</p>
              </div>
              <div className="solution-item">
                <h3>🏆 Trust & Value Building</h3>
                <p><strong>What we do:</strong> Showcase warranties, certifications, installation process, timeline management, and customer testimonials to justify premium pricing.</p>
                <p><strong>Result:</strong> Higher conversion rates and acceptance of professional pricing.</p>
              </div>
              <div className="solution-item">
                <h3>🛠️ Process Transparency</h3>
                <p><strong>What we do:</strong> Detailed installation process pages, timeline expectations, dust protection measures, and furniture handling procedures.</p>
                <p><strong>Result:</strong> Reduced customer anxiety and smoother project completion.</p>
              </div>
              <div className="solution-item">
                <h3>🖼️ Virtual Showroom Experience</h3>
                <p><strong>What we do:</strong> Extensive photo galleries showing each flooring type in various room settings, lighting conditions, and design styles.</p>
                <p><strong>Result:</strong> Customers can envision their space and make confident decisions.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Flooring Services We Help You Market</h2>
            <div className="services-grid">
              <div className="service-category">
                <h3>🌳 Hardwood Flooring</h3>
                <ul>
                  <li>Solid hardwood installation</li>
                  <li>Engineered hardwood systems</li>
                  <li>Hardwood refinishing</li>
                  <li>Custom wood flooring</li>
                  <li>Hardwood repair & restoration</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🏢 Luxury Vinyl & Laminate</h3>
                <ul>
                  <li>Luxury vinyl plank (LVP)</li>
                  <li>Luxury vinyl tile (LVT)</li>
                  <li>Laminate flooring installation</li>
                  <li>Waterproof flooring systems</li>
                  <li>Commercial vinyl flooring</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🏺 Tile & Stone</h3>
                <ul>
                  <li>Ceramic & porcelain tile</li>
                  <li>Natural stone installation</li>
                  <li>Tile backsplashes</li>
                  <li>Bathroom & kitchen tiling</li>
                  <li>Tile repair & replacement</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🏠 Carpet & Specialty</h3>
                <ul>
                  <li>Residential carpet installation</li>
                  <li>Commercial carpet systems</li>
                  <li>Carpet removal & disposal</li>
                  <li>Subfloor preparation</li>
                  <li>Floor leveling & repair</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Real Results for Flooring Contractors</h2>
            <div className="results-grid">
              <div className="result-item">
                <h3>Premier Floor Installations</h3>
                <p><strong>Challenge:</strong> Customers couldn't visualize how different flooring materials would look in their homes.</p>
                <p><strong>Solution:</strong> Comprehensive photo gallery website showing each material type in various room settings and lighting conditions.</p>
                <p><strong>Results:</strong> 145% increase in consultation appointments, 60% higher close rate on estimates.</p>
              </div>
              <div className="result-item">
                <h3>Luxury Flooring Specialists</h3>
                <p><strong>Challenge:</strong> Competing against big box stores on high-end flooring installations.</p>
                <p><strong>Solution:</strong> Premium website emphasizing custom service, expert installation, and lifetime support versus retail competition.</p>
                <p><strong>Results:</strong> $320K in luxury hardwood projects, 80% increase in average project value.</p>
              </div>
              <div className="result-item">
                <h3>Complete Floor Solutions</h3>
                <p><strong>Challenge:</strong> Customers were overwhelmed by flooring choices and going elsewhere for simplicity.</p>
                <p><strong>Solution:</strong> Educational website with guided material selection, room-specific recommendations, and clear pricing information.</p>
                <p><strong>Results:</strong> 200% increase in qualified leads, 25% reduction in project consultation time.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Flooring Website Solutions</h2>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Foundation</h3>
                <div className="price">$3,100</div>
                <ul>
                  <li>9-page material-focused site</li>
                  <li>Flooring type comparisons</li>
                  <li>Installation process pages</li>
                  <li>Photo gallery showcase</li>
                  <li>Estimate request forms</li>
                  <li>Mobile-optimized design</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Get Started</a>
              </div>
              <div className="pricing-card featured">
                <h3>Floor Professional</h3>
                <div className="price">$5,600</div>
                <ul>
                  <li>18-page comprehensive site</li>
                  <li>Extensive material galleries</li>
                  <li>Room-specific recommendations</li>
                  <li>Installation timeline tools</li>
                  <li>Customer testimonial system</li>
                  <li>Care & maintenance guides</li>
                  <li>Local SEO optimization</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Most Popular</a>
              </div>
              <div className="pricing-card">
                <h3>Floor Master</h3>
                <div className="price">$8,900</div>
                <ul>
                  <li>Unlimited pages & features</li>
                  <li>Custom flooring visualizer</li>
                  <li>Advanced material calculator</li>
                  <li>Client project portals</li>
                  <li>Inventory management integration</li>
                  <li>Comprehensive analytics</li>
                  <li>Monthly content updates</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Dominate Your Market</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Common Questions from Flooring Contractors</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>How do you help customers choose between flooring materials?</h3>
                <p>We create comprehensive comparison guides with pros/cons, cost ranges, durability ratings, and room-specific recommendations. Customers arrive at your showroom already educated about their options.</p>
              </div>
              <div className="faq-item">
                <h3>Can you showcase different flooring materials effectively online?</h3>
                <p>Absolutely! We create extensive photo galleries showing each material in various room settings, lighting conditions, and design styles. It's like having an unlimited virtual showroom.</p>
              </div>
              <div className="faq-item">
                <h3>How do you address customer concerns about installation disruption?</h3>
                <p>We create detailed process pages explaining installation timelines, dust protection measures, furniture handling, and cleanup procedures. This reduces anxiety and sets proper expectations.</p>
              </div>
              <div className="faq-item">
                <h3>Do you help compete against big box store pricing?</h3>
                <p>Yes! We emphasize your professional installation expertise, warranties, customer service, and long-term value versus big box stores' lower-quality installation and limited support.</p>
              </div>
              <div className="faq-item">
                <h3>How do you showcase flooring durability and warranties?</h3>
                <p>We create detailed pages about material durability, manufacturer warranties, installation guarantees, and long-term care. This justifies professional pricing and builds confidence.</p>
              </div>
              <div className="faq-item">
                <h3>Can you integrate with flooring suppliers and manufacturers?</h3>
                <p>We can showcase your partnerships with quality manufacturers, highlight available materials, and even integrate with supplier inventory systems for real-time availability and pricing.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Floor Your Competition?</h2>
              <p>Join 35+ flooring contractors who've elevated their business with LogicPros websites. Hardwood installations, luxury vinyl projects, and tile transformations - all flowing to your business.</p>
              <div className="cta-buttons">
                <a href="/free-example" className="btn btn-primary btn-large">See My Free Flooring Website Example</a>
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
              <p>Professional websites for flooring contractors</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Contractor Services</h4>
                <a href="/contractors/flooring">Flooring Websites</a>
                <a href="/contractors/painting">Painting Websites</a>
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