import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';

export const HVACPage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
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
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Professional Websites for HVAC Contractors</h1>
              <p className="hero-subtitle">
                Keep your HVAC business running at peak performance with a website that captures 
                emergency repairs, seasonal installations, and year-round maintenance contracts. 
                Specialized web development for heating and cooling professionals.
              </p>
              <a href="/contact" className="btn btn-primary btn-large">Get My HVAC Website</a>
            </div>
          </div>
        </section>

        {/* HVAC-Specific Challenges */}
        <section className="section">
          <div className="container">
            <h2>Challenges Every HVAC Business Owner Faces</h2>
            <div className="challenges-grid">
              <div className="challenge-item">
                <h3>🌡️ Seasonal Demand Fluctuations</h3>
                <p>HVAC work peaks in extreme weather. Your website needs to capture emergency repairs in summer/winter while building a pipeline for installations and maintenance year-round.</p>
              </div>
              <div className="challenge-item">
                <h3>💰 High-Ticket Sales Complexity</h3>
                <p>New HVAC systems cost $5,000-$15,000+. Customers research extensively and compare multiple contractors. Your website must educate and build confidence for these major purchases.</p>
              </div>
              <div className="challenge-item">
                <h3>🔧 Emergency vs. Planned Services</h3>
                <p>You handle urgent repairs when systems fail and planned installations/maintenance. Each requires different messaging, urgency, and customer psychology.</p>
              </div>
              <div className="challenge-item">
                <h3>🏆 Energy Efficiency Focus</h3>
                <p>Modern customers want energy-efficient systems and smart home integration. Your website needs to position you as the modern HVAC expert, not just a repair service.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="section">
          <div className="container">
            <h2>How LogicPros Optimizes Your HVAC Marketing</h2>
            <div className="solutions-grid">
              <div className="solution-item">
                <h3>🎯 Seasonal Campaign System</h3>
                <p><strong>What we do:</strong> Dynamic content that adapts seasonally - highlighting AC repair in summer, heating service in winter, and maintenance programs year-round.</p>
                <p><strong>Result:</strong> Consistent lead flow regardless of season, maximizing revenue potential.</p>
              </div>
              <div className="solution-item">
                <h3>💡 High-Value System Sales</h3>
                <p><strong>What we do:</strong> Create detailed system comparison pages, financing options, energy savings calculators, and installation processes to support big-ticket sales.</p>
                <p><strong>Result:</strong> Higher conversion rates on equipment sales and premium installations.</p>
              </div>
              <div className="solution-item">
                <h3>⚡ Emergency Response Optimization</h3>
                <p><strong>What we do:</strong> Prominent emergency contact options, 24/7 availability messaging, and fast-loading mobile pages for customers in HVAC crisis situations.</p>
                <p><strong>Result:</strong> Increased emergency call capture and faster response reputation.</p>
              </div>
              <div className="solution-item">
                <h3>🏠 Smart HVAC Positioning</h3>
                <p><strong>What we do:</strong> Showcase smart thermostats, zoning systems, air quality solutions, and energy-efficient upgrades to position you as a modern HVAC professional.</p>
                <p><strong>Result:</strong> Attract tech-savvy customers willing to pay premium for advanced systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* HVAC Services We Highlight */}
        <section className="section">
          <div className="container">
            <h2>HVAC Services We Help You Market</h2>
            <div className="services-grid">
              <div className="service-category">
                <h3>🚨 Emergency HVAC</h3>
                <ul>
                  <li>24/7 AC repair</li>
                  <li>Emergency heating service</li>
                  <li>System breakdown diagnosis</li>
                  <li>Urgent part replacement</li>
                  <li>Holiday/weekend service</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>❄️ Heating Services</h3>
                <ul>
                  <li>Furnace installation & repair</li>
                  <li>Heat pump systems</li>
                  <li>Boiler service & maintenance</li>
                  <li>Ductwork installation</li>
                  <li>Thermostat upgrades</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🌬️ Cooling Services</h3>
                <ul>
                  <li>Central AC installation</li>
                  <li>Ductless mini-split systems</li>
                  <li>AC tune-ups & maintenance</li>
                  <li>Refrigerant services</li>
                  <li>Energy efficiency upgrades</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🏠 Indoor Air Quality</h3>
                <ul>
                  <li>Air purification systems</li>
                  <li>Humidity control</li>
                  <li>Duct cleaning & sealing</li>
                  <li>Ventilation improvements</li>
                  <li>Allergen reduction solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ROI & Results */}
        <section className="section">
          <div className="container">
            <h2>Real Results for HVAC Contractors</h2>
            <div className="results-grid">
              <div className="result-item">
                <h3>Climate Control Experts</h3>
                <p><strong>Challenge:</strong> Losing high-value system sales to competitors with better online presence.</p>
                <p><strong>Solution:</strong> Comprehensive equipment showcase with financing options and energy savings information.</p>
                <p><strong>Results:</strong> 85% increase in system installation inquiries, $450K additional revenue.</p>
              </div>
              <div className="result-item">
                <h3>Arctic Air Solutions</h3>
                <p><strong>Challenge:</strong> Emergency calls going to competitors during peak summer season.</p>
                <p><strong>Solution:</strong> Emergency-optimized website with seasonal SEO and mobile-first design.</p>
                <p><strong>Results:</strong> 320% increase in emergency calls, became area's top AC repair service.</p>
              </div>
              <div className="result-item">
                <h3>Green HVAC Technologies</h3>
                <p><strong>Challenge:</strong> Attracting customers interested in energy-efficient and smart HVAC systems.</p>
                <p><strong>Solution:</strong> Energy-focused website highlighting smart systems, rebates, and long-term savings.</p>
                <p><strong>Results:</strong> 200% increase in high-efficiency system sales, average job value up 40%.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="section">
          <div className="container">
            <h2>HVAC Website Packages</h2>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Comfort Zone</h3>
                <div className="price">$3,200</div>
                <ul>
                  <li>7-page seasonal-optimized site</li>
                  <li>Emergency service emphasis</li>
                  <li>Equipment showcase pages</li>
                  <li>Service area targeting</li>
                  <li>Mobile emergency contact</li>
                  <li>Basic maintenance programs</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Get Started</a>
              </div>
              <div className="pricing-card featured">
                <h3>Climate Control Pro</h3>
                <div className="price">$5,800</div>
                <ul>
                  <li>15-page comprehensive site</li>
                  <li>Advanced seasonal campaigns</li>
                  <li>Equipment comparison tools</li>
                  <li>Financing integration</li>
                  <li>Smart HVAC showcase</li>
                  <li>Maintenance plan automation</li>
                  <li>Review & reputation management</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Most Popular</a>
              </div>
              <div className="pricing-card">
                <h3>Market Dominator</h3>
                <div className="price">$9,500</div>
                <ul>
                  <li>Unlimited pages & features</li>
                  <li>Custom HVAC calculators</li>
                  <li>Advanced lead scoring</li>
                  <li>Seasonal PPC campaigns</li>
                  <li>Energy audit tools</li>
                  <li>Customer portal & scheduling</li>
                  <li>Comprehensive analytics</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Dominate Your Market</a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container">
            <h2>Common Questions from HVAC Contractors</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>How do you handle seasonal fluctuations in HVAC demand?</h3>
                <p>We create dynamic seasonal content strategies - promoting AC services in spring/summer, heating in fall/winter, and maintenance year-round. Your website automatically adapts to seasonal search patterns and customer needs.</p>
              </div>
              <div className="faq-item">
                <h3>Can you help me sell high-value HVAC systems online?</h3>
                <p>Absolutely! We create detailed equipment pages with comparisons, financing options, energy savings calculators, and installation timelines. This helps customers understand the value before they call.</p>
              </div>
              <div className="faq-item">
                <h3>How do you optimize for both emergency and planned HVAC work?</h3>
                <p>We use different messaging strategies - urgent, prominent emergency contact for breakdowns, and educational, value-focused content for planned installations and maintenance contracts.</p>
              </div>
              <div className="faq-item">
                <h3>Do you showcase energy efficiency and smart HVAC features?</h3>
                <p>Yes! We highlight smart thermostats, energy-efficient systems, air quality solutions, and rebate programs. This positions you as a modern HVAC contractor who offers the latest technology.</p>
              </div>
              <div className="faq-item">
                <h3>How do you help me compete with big HVAC companies?</h3>
                <p>We emphasize your personal service, local expertise, faster response times, and competitive pricing. We position independent HVAC contractors as more flexible and customer-focused than large corporations.</p>
              </div>
              <div className="faq-item">
                <h3>Can you integrate with HVAC software and scheduling systems?</h3>
                <p>Yes! We integrate with popular HVAC software like ServiceTitan, Housecall Pro, and FieldEdge. Your website connects seamlessly with your existing business management systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Heat Up Your HVAC Business?</h2>
              <p>Join 60+ HVAC contractors who've increased their revenue with LogicPros websites. Emergency repairs, system installations, and maintenance contracts - all flowing to your business.</p>
              <div className="cta-buttons">
                <a href="/free-example" className="btn btn-primary btn-large">See My Free HVAC Website Example</a>
                <a href="/contact" className="btn btn-outline btn-large">Get My Custom Quote</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>LogicPros</h3>
              <p>Professional websites for HVAC contractors</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4>Contractor Services</h4>
                <a href="/contractors/hvac">HVAC Websites</a>
                <a href="/contractors/plumbing">Plumbing Websites</a>
                <a href="/contractors/electrical">Electrical Websites</a>
                <a href="/contractors/roofing">Roofing Websites</a>
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