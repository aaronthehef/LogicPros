import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';

export const ConcretePage = () => {
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
              <h1 className="hero-title">Professional Websites for Concrete Contractors</h1>
              <p className="hero-subtitle">
                Build a rock-solid concrete business with a website that showcases your expertise 
                in driveways, patios, foundations, and decorative concrete. Specialized web development 
                for concrete professionals who create lasting foundations.
              </p>
              <a href="/contact" className="btn btn-primary btn-large">Get My Concrete Website</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Challenges Every Concrete Business Owner Faces</h2>
            <div className="challenges-grid">
              <div className="challenge-item">
                <h3>🏗️ Durability vs. Aesthetics Balance</h3>
                <p>Concrete work must be both functional and attractive. Customers want beautiful driveways and patios that also last decades. Your website must showcase both strength and visual appeal.</p>
              </div>
              <div className="challenge-item">
                <h3>💰 Weather-Dependent Scheduling</h3>
                <p>Concrete work is heavily weather-dependent, creating seasonal revenue fluctuations. You need consistent lead generation to fill your schedule during optimal working conditions.</p>
              </div>
              <div className="challenge-item">
                <h3>📋 Technical Process Education</h3>
                <p>Customers don't understand concrete curing times, reinforcement needs, or why quality concrete costs more. Your website must educate them on proper processes and materials.</p>
              </div>
              <div className="challenge-item">
                <h3>🎯 Diverse Service Portfolio</h3>
                <p>Concrete contractors handle everything from simple repairs to complex commercial foundations. Your website needs to attract the most profitable work while showing full capabilities.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>How LogicPros Builds Your Concrete Success</h2>
            <div className="solutions-grid">
              <div className="solution-item">
                <h3>🏆 Strength & Beauty Showcase</h3>
                <p><strong>What we do:</strong> Create stunning galleries highlighting both decorative concrete artistry and structural integrity with before/after transformations and detailed craftsmanship shots.</p>
                <p><strong>Result:</strong> Attract customers who value both function and form in concrete work.</p>
              </div>
              <div className="solution-item">
                <h3>📅 Year-Round Marketing Strategy</h3>
                <p><strong>What we do:</strong> Seasonal content promoting outdoor concrete in spring/summer and foundation/indoor work in fall/winter to maintain consistent lead flow.</p>
                <p><strong>Result:</strong> Steady revenue stream regardless of weather conditions.</p>
              </div>
              <div className="solution-item">
                <h3>🎓 Technical Education System</h3>
                <p><strong>What we do:</strong> Detailed pages explaining concrete quality, curing processes, reinforcement benefits, and why professional installation provides long-term value.</p>
                <p><strong>Result:</strong> Better educated customers who understand and appreciate your expertise.</p>
              </div>
              <div className="solution-item">
                <h3>🎯 Service Specialization Focus</h3>
                <p><strong>What we do:</strong> Highlight your most profitable concrete services while demonstrating full capabilities, targeting residential, commercial, or decorative work based on your goals.</p>
                <p><strong>Result:</strong> More leads for preferred project types and higher profit margins.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Concrete Services We Help You Market</h2>
            <div className="services-grid">
              <div className="service-category">
                <h3>🏠 Residential Concrete</h3>
                <ul>
                  <li>Driveways & sidewalks</li>
                  <li>Patios & outdoor living</li>
                  <li>Pool decks & surrounds</li>
                  <li>Basement floors</li>
                  <li>Garage floors & workshops</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🏢 Commercial Concrete</h3>
                <ul>
                  <li>Building foundations</li>
                  <li>Parking lots & driveways</li>
                  <li>Warehouse floors</li>
                  <li>Retail concrete work</li>
                  <li>Industrial concrete systems</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🎨 Decorative Concrete</h3>
                <ul>
                  <li>Stamped concrete designs</li>
                  <li>Colored & stained concrete</li>
                  <li>Exposed aggregate finishes</li>
                  <li>Polished concrete floors</li>
                  <li>Custom concrete countertops</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🔧 Repair & Restoration</h3>
                <ul>
                  <li>Concrete crack repair</li>
                  <li>Driveway resurfacing</li>
                  <li>Foundation repair</li>
                  <li>Concrete lifting & leveling</li>
                  <li>Joint sealing & maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Real Results for Concrete Contractors</h2>
            <div className="results-grid">
              <div className="result-item">
                <h3>Solid Foundation Concrete</h3>
                <p><strong>Challenge:</strong> Competing against cheaper concrete contractors who cut corners on materials and processes.</p>
                <p><strong>Solution:</strong> Quality-focused website emphasizing proper techniques, premium materials, and long-term durability guarantees.</p>
                <p><strong>Results:</strong> 85% increase in premium concrete projects, average job value increased to $12,500.</p>
              </div>
              <div className="result-item">
                <h3>Decorative Concrete Artisans</h3>
                <p><strong>Challenge:</strong> Customers didn't know decorative concrete options existed beyond basic gray slabs.</p>
                <p><strong>Solution:</strong> Visual-heavy website showcasing stamped, colored, and artistic concrete transformations.</p>
                <p><strong>Results:</strong> 300% increase in decorative concrete inquiries, $185K in high-end patio and driveway projects.</p>
              </div>
              <div className="result-item">
                <h3>Commercial Concrete Solutions</h3>
                <p><strong>Challenge:</strong> Small commercial clients were going to larger concrete companies for business projects.</p>
                <p><strong>Solution:</strong> Professional website highlighting commercial expertise, faster timelines, and competitive pricing for smaller businesses.</p>
                <p><strong>Results:</strong> Won 5 commercial contracts worth $340K, established ongoing maintenance relationships.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Concrete Website Packages</h2>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Solid Foundation</h3>
                <div className="price">$3,400</div>
                <ul>
                  <li>8-page strength-focused site</li>
                  <li>Project portfolio gallery</li>
                  <li>Service descriptions</li>
                  <li>Quality process explanations</li>
                  <li>Estimate request forms</li>
                  <li>Mobile-optimized design</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Get Started</a>
              </div>
              <div className="pricing-card featured">
                <h3>Concrete Professional</h3>
                <div className="price">$6,100</div>
                <ul>
                  <li>16-page comprehensive site</li>
                  <li>Extensive before/after galleries</li>
                  <li>Decorative concrete showcase</li>
                  <li>Technical process education</li>
                  <li>Customer testimonial system</li>
                  <li>Local SEO optimization</li>
                  <li>Seasonal marketing campaigns</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Most Popular</a>
              </div>
              <div className="pricing-card">
                <h3>Concrete Master</h3>
                <div className="price">$9,800</div>
                <ul>
                  <li>Unlimited pages & features</li>
                  <li>Custom concrete calculator</li>
                  <li>Advanced project management</li>
                  <li>Commercial client portals</li>
                  <li>Weather-based scheduling</li>
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
            <h2>Common Questions from Concrete Contractors</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>How do you showcase concrete durability and quality?</h3>
                <p>We create detailed process pages explaining proper concrete mixing, reinforcement, curing, and finishing techniques. Before/after galleries show the longevity and beauty of quality concrete work.</p>
              </div>
              <div className="faq-item">
                <h3>Can you help me compete against cheaper concrete contractors?</h3>
                <p>Absolutely! We emphasize your quality materials, proper techniques, warranties, and long-term value. This positions you as the professional choice and justifies premium pricing.</p>
              </div>
              <div className="faq-item">
                <h3>How do you market decorative concrete services?</h3>
                <p>We create stunning visual galleries showcasing stamped patterns, colored finishes, and artistic concrete work. This educates customers about decorative options and positions you as a concrete artist.</p>
              </div>
              <div className="faq-item">
                <h3>Do you optimize for both residential and commercial concrete work?</h3>
                <p>Yes! We create separate sections for residential driveways/patios and commercial foundations/parking lots, with different messaging and project examples for each market.</p>
              </div>
              <div className="faq-item">
                <h3>How do you handle seasonal fluctuations in concrete demand?</h3>
                <p>We create seasonal content strategies - promoting outdoor concrete in spring/summer and foundation/indoor work in fall/winter. This helps maintain lead flow year-round.</p>
              </div>
              <div className="faq-item">
                <h3>Can you help explain concrete maintenance and longevity?</h3>
                <p>We create educational content about concrete care, sealing schedules, and what customers can expect over the decades. This builds confidence in the long-term investment value.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Pour Success into Your Business?</h2>
              <p>Join 30+ concrete contractors who've solidified their success with LogicPros websites. Driveways, foundations, decorative work, and commercial projects - all flowing to your business.</p>
              <div className="cta-buttons">
                <a href="/free-example" className="btn btn-primary btn-large">See My Free Concrete Website Example</a>
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
              <p>Professional websites for concrete contractors</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Contractor Services</h4>
                <a href="/contractors/concrete">Concrete Websites</a>
                <a href="/contractors/construction">Construction Websites</a>
                <a href="/contractors/landscaping">Landscaping Websites</a>
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