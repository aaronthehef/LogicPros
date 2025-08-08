import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';

export const ElectricalPage = () => {
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
              <h1 className="hero-title">Professional Websites for Electrical Contractors</h1>
              <p className="hero-subtitle">
                Power up your electrical business with a website that showcases your expertise, 
                builds trust for safety-critical work, and generates qualified leads. Specialized 
                web development for electricians who want to charge premium rates.
              </p>
              <a href="/contact" className="btn btn-primary btn-large">Get My Electrical Website</a>
            </div>
          </div>
        </section>

        {/* Electrical-Specific Challenges */}
        <section className="section">
          <div className="container">
            <h2>Challenges Every Electrical Business Owner Faces</h2>
            <div className="challenges-grid">
              <div className="challenge-item">
                <h3>⚡ Safety & Trust Concerns</h3>
                <p>Electrical work is dangerous and expensive. Customers need absolute confidence you're licensed, insured, and follow all safety codes before they'll trust you in their home.</p>
              </div>
              <div className="challenge-item">
                <h3>🏆 Premium Service Positioning</h3>
                <p>Quality electrical work commands premium rates, but customers often focus on cost alone. Your website needs to demonstrate why your expertise is worth the investment.</p>
              </div>
              <div className="challenge-item">
                <h3>📋 Complex Service Explanation</h3>
                <p>Panel upgrades, rewiring, smart home installation - electrical services are complex. Customers need clear explanations to understand what they're buying.</p>
              </div>
              <div className="challenge-item">
                <h3>🚨 Emergency vs. Planned Work</h3>
                <p>You handle both emergency repairs and planned installations. Your website needs to capture both urgent calls and qualified project leads.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="section">
          <div className="container">
            <h2>How LogicPros Elevates Your Electrical Business</h2>
            <div className="solutions-grid">
              <div className="solution-item">
                <h3>🛡️ Safety & Credibility Showcase</h3>
                <p><strong>What we do:</strong> Prominently display licenses, certifications, insurance, safety awards, and code compliance information. Include detailed safety protocols and team qualifications.</p>
                <p><strong>Result:</strong> Higher trust levels and acceptance of premium service.</p>
              </div>
              <div className="solution-item">
                <h3>💡 Service Education System</h3>
                <p><strong>What we do:</strong> Create detailed pages explaining electrical services in customer-friendly terms, with service breakdowns, timelines, and safety benefits.</p>
                <p><strong>Result:</strong> More qualified leads who understand your value proposition.</p>
              </div>
              <div className="solution-item">
                <h3>🎯 Dual-Purpose Lead Capture</h3>
                <p><strong>What we do:</strong> Separate emergency and project inquiry systems with different messaging and urgency levels to capture both types of work.</p>
                <p><strong>Result:</strong> Increased emergency calls and larger planned project bookings.</p>
              </div>
              <div className="solution-item">
                <h3>📱 Smart Home Integration Focus</h3>
                <p><strong>What we do:</strong> Highlight modern electrical services like smart home installation, EV chargers, and energy efficiency upgrades to attract high-value customers.</p>
                <p><strong>Result:</strong> Position your business as a modern, tech-savvy electrical contractor.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Electrical Services We Highlight */}
        <section className="section">
          <div className="container">
            <h2>Electrical Services We Help You Market</h2>
            <div className="services-grid">
              <div className="service-category">
                <h3>🚨 Emergency Electrical</h3>
                <ul>
                  <li>Power outage troubleshooting</li>
                  <li>Electrical fire prevention</li>
                  <li>Circuit breaker repair</li>
                  <li>Emergency panel service</li>
                  <li>Electrical fault finding</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🔌 Residential Services</h3>
                <ul>
                  <li>Panel upgrades & replacement</li>
                  <li>Whole house rewiring</li>
                  <li>Outlet & switch installation</li>
                  <li>Lighting design & installation</li>
                  <li>Ceiling fan installation</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🏠 Smart Home & Modern</h3>
                <ul>
                  <li>Smart home automation</li>
                  <li>EV charging station installation</li>
                  <li>Home security systems</li>
                  <li>Smart lighting controls</li>
                  <li>Energy management systems</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🏢 Commercial Electrical</h3>
                <ul>
                  <li>Office electrical systems</li>
                  <li>Retail store lighting</li>
                  <li>Industrial wiring</li>
                  <li>Data center power</li>
                  <li>Emergency generator systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ROI & Results */}
        <section className="section">
          <div className="container">
            <h2>Real Results for Electrical Contractors</h2>
            <div className="results-grid">
              <div className="result-item">
                <h3>Apex Electrical Solutions</h3>
                <p><strong>Challenge:</strong> Customers choosing cheaper, unlicensed electricians over their premium services.</p>
                <p><strong>Solution:</strong> Safety-focused website emphasizing licensing, insurance, and quality workmanship value.</p>
                <p><strong>Results:</strong> 60% increase in project inquiries, 35% higher average job value.</p>
              </div>
              <div className="result-item">
                <h3>Modern Electric Co.</h3>
                <p><strong>Challenge:</strong> Missing out on lucrative smart home and EV charger installation market.</p>
                <p><strong>Solution:</strong> Tech-forward website showcasing modern electrical services and smart home expertise.</p>
                <p><strong>Results:</strong> $250K in new smart home projects, became area's go-to EV charger installer.</p>
              </div>
              <div className="result-item">
                <h3>Heritage Electrical Services</h3>
                <p><strong>Challenge:</strong> Emergency calls going to competitors with better online visibility.</p>
                <p><strong>Solution:</strong> Emergency-optimized website with local SEO and 24/7 contact options.</p>
                <p><strong>Results:</strong> 400% increase in emergency calls, ranked #1 for "emergency electrician near me".</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="section">
          <div className="container">
            <h2>Electrical Website Solutions</h2>
            <div className="solutions-grid">
              <div className="solution-card">
                <h3>Safety First Sites</h3>
                <ul>
                  <li>6-page professional site</li>
                  <li>License & certification display</li>
                  <li>Emergency contact system</li>
                  <li>Service area optimization</li>
                  <li>Safety-focused messaging</li>
                  <li>Mobile emergency buttons</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Discuss Your Needs</a>
              </div>
              <div className="solution-card featured">
                <h3>Power Professional Sites</h3>
                <ul>
                  <li>12-page comprehensive site</li>
                  <li>Smart home service showcase</li>
                  <li>Project gallery & testimonials</li>
                  <li>Advanced local SEO</li>
                  <li>Online estimate requests</li>
                  <li>Safety certification pages</li>
                  <li>Review management system</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Schedule Consultation</a>
              </div>
              <div className="solution-card">
                <h3>Market Leader Sites</h3>
                <ul>
                  <li>Unlimited pages & features</li>
                  <li>Custom project portal</li>
                  <li>Advanced analytics & tracking</li>
                  <li>Competitor SEO analysis</li>
                  <li>Smart home content marketing</li>
                  <li>Monthly optimization</li>
                  <li>Pay-per-click advertising</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Explore Possibilities</a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container">
            <h2>Common Questions from Electrical Contractors</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>How do you showcase electrical safety and licensing?</h3>
                <p>We create dedicated pages for your licenses, certifications, insurance information, and safety protocols. Your credentials are prominently displayed throughout the site to build immediate trust with safety-conscious customers.</p>
              </div>
              <div className="faq-item">
                <h3>Can you help me compete against big electrical companies?</h3>
                <p>Absolutely! We position independent electrical contractors as more personal, flexible, and quality-focused than large companies. We highlight your local expertise, faster response times, and personalized service.</p>
              </div>
              <div className="faq-item">
                <h3>How do you handle complex electrical service explanations?</h3>
                <p>We break down complex electrical work into customer-friendly language, using diagrams, before/after photos, and benefit-focused explanations. Customers understand what they're buying and why it's worth your premium service.</p>
              </div>
              <div className="faq-item">
                <h3>Do you optimize for both emergency and planned electrical work?</h3>
                <p>Yes! We create separate pathways for emergency calls (prominent phone numbers, urgent messaging) and planned projects (detailed service pages, estimate request forms, project galleries).</p>
              </div>
              <div className="faq-item">
                <h3>How do you help me capture the smart home market?</h3>
                <p>We create dedicated smart home and automation pages, showcase modern electrical services like EV chargers, and position you as the tech-savvy electrician in your area. This attracts higher-value customers.</p>
              </div>
              <div className="faq-item">
                <h3>What about electrical code compliance and regulations?</h3>
                <p>We ensure your website emphasizes code compliance, proper permitting, and inspection processes. This differentiates you from unlicensed competitors and attracts customers who value quality work.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Energize Your Electrical Business?</h2>
              <p>Join 40+ electrical contractors who've increased their revenue with LogicPros websites. Emergency calls, smart home projects, and commercial contracts - all flowing to your business.</p>
              <div className="cta-buttons">
                <a href="/free-example" className="btn btn-primary btn-large">See My Free Electrical Website Example</a>
                <a href="/contact" className="btn btn-outline btn-large">Schedule Free Consultation</a>
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
              <p>Professional websites for electrical contractors</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4>Contractor Services</h4>
                <a href="/contractors/electrical">Electrical Websites</a>
                <a href="/contractors/plumbing">Plumbing Websites</a>
                <a href="/contractors/hvac">HVAC Websites</a>
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