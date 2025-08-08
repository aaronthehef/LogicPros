import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';

export const RoofingPage = () => {
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
              <h1 className="hero-title">Professional Websites for Roofing Contractors</h1>
              <p className="hero-subtitle">
                Build your roofing business from the ground up with a website that captures storm 
                damage leads, showcases quality workmanship, and converts estimates into signed contracts. 
                Specialized web development for roofers who want to weather any competition.
              </p>
              <a href="/contact" className="btn btn-primary btn-large">Get My Roofing Website</a>
            </div>
          </div>
        </section>

        {/* Roofing-Specific Challenges */}
        <section className="section">
          <div className="container">
            <h2>Challenges Every Roofing Business Owner Faces</h2>
            <div className="challenges-grid">
              <div className="challenge-item">
                <h3>⛈️ Storm Damage Competition</h3>
                <p>After storms, dozens of roofers flood the area. You need to capture leads immediately when homeowners are researching insurance claims and emergency repairs.</p>
              </div>
              <div className="challenge-item">
                <h3>🏠 High-Value Sales Process</h3>
                <p>Roof replacements are major investments. Homeowners get multiple estimates and research extensively. Your website must build trust and demonstrate value before the sales call.</p>
              </div>
              <div className="challenge-item">
                <h3>📋 Insurance Claim Complexity</h3>
                <p>Most customers don't understand insurance claims, material choices, or roofing processes. Your website needs to educate and guide them through the entire journey.</p>
              </div>
              <div className="challenge-item">
                <h3>🔍 Reputation & Trust Issues</h3>
                <p>Roofing has a reputation problem with fly-by-night contractors. Customers are skeptical and need proof of quality work, proper licensing, and business stability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="section">
          <div className="container">
            <h2>How LogicPros Elevates Your Roofing Business</h2>
            <div className="solutions-grid">
              <div className="solution-item">
                <h3>⚡ Storm Response System</h3>
                <p><strong>What we do:</strong> Create storm damage landing pages, emergency contact systems, and rapid-response messaging to capture leads immediately after weather events.</p>
                <p><strong>Result:</strong> First to market after storms, capturing premium emergency work.</p>
              </div>
              <div className="solution-item">
                <h3>🎯 Insurance Claims Education</h3>
                <p><strong>What we do:</strong> Detailed pages explaining insurance processes, material options, timeline expectations, and how you handle claims from start to finish.</p>
                <p><strong>Result:</strong> More qualified leads who understand the value of working with experienced roofers.</p>
              </div>
              <div className="solution-item">
                <h3>🏆 Trust & Credibility Showcase</h3>
                <p><strong>What we do:</strong> Prominent display of licenses, insurance, warranties, certifications, before/after galleries, and customer testimonials with real names and photos.</p>
                <p><strong>Result:</strong> Higher conversion rates and ability to command premium rates.</p>
              </div>
              <div className="solution-item">
                <h3>📱 Mobile Estimate System</h3>
                <p><strong>What we do:</strong> Mobile-optimized estimate request forms, photo upload capabilities, and instant contact options for homeowners researching on their phones.</p>
                <p><strong>Result:</strong> More estimate requests and faster response to time-sensitive opportunities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Roofing Services We Highlight */}
        <section className="section">
          <div className="container">
            <h2>Roofing Services We Help You Market</h2>
            <div className="services-grid">
              <div className="service-category">
                <h3>⛈️ Storm & Emergency</h3>
                <ul>
                  <li>Storm damage assessment</li>
                  <li>Emergency roof repair</li>
                  <li>Tarp & temporary protection</li>
                  <li>Insurance claim assistance</li>
                  <li>Wind & hail damage repair</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🏠 Residential Roofing</h3>
                <ul>
                  <li>Complete roof replacement</li>
                  <li>Asphalt shingle installation</li>
                  <li>Metal roofing systems</li>
                  <li>Tile & slate roofing</li>
                  <li>Roof maintenance programs</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🔧 Repair & Maintenance</h3>
                <ul>
                  <li>Leak detection & repair</li>
                  <li>Gutter installation & repair</li>
                  <li>Chimney flashing repair</li>
                  <li>Roof inspection services</li>
                  <li>Preventive maintenance</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🏢 Commercial Roofing</h3>
                <ul>
                  <li>Flat roof systems</li>
                  <li>TPO & EPDM installation</li>
                  <li>Commercial roof repair</li>
                  <li>Building envelope services</li>
                  <li>Roof coating applications</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ROI & Results */}
        <section className="section">
          <div className="container">
            <h2>Real Results for Roofing Contractors</h2>
            <div className="results-grid">
              <div className="result-item">
                <h3>Storm Shield Roofing</h3>
                <p><strong>Challenge:</strong> Missing out on storm damage work to competitors with faster response times.</p>
                <p><strong>Solution:</strong> Storm-optimized website with emergency contact system and instant estimate requests.</p>
                <p><strong>Results:</strong> 500% increase in storm leads, captured $2.1M in storm work in first season.</p>
              </div>
              <div className="result-item">
                <h3>Heritage Roof Systems</h3>
                <p><strong>Challenge:</strong> Customers choosing cheaper competitors due to lack of trust and credibility.</p>
                <p><strong>Solution:</strong> Trust-focused website showcasing certifications, warranties, and detailed customer testimonials.</p>
                <p><strong>Results:</strong> 65% increase in estimate-to-sale conversion, 30% higher average project value.</p>
              </div>
              <div className="result-item">
                <h3>Pinnacle Roofing Co.</h3>
                <p><strong>Challenge:</strong> Complex insurance claim process scared away potential customers.</p>
                <p><strong>Solution:</strong> Educational website explaining insurance claims process and how they handle everything.</p>
                <p><strong>Results:</strong> 250% increase in insurance claim jobs, became preferred contractor for 3 insurance companies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="section">
          <div className="container">
            <h2>Roofing Website Solutions</h2>
            <div className="solutions-grid">
              <div className="solution-card">
                <h3>Storm Response Sites</h3>
                <ul>
                  <li>8-page storm-optimized site</li>
                  <li>Emergency contact system</li>
                  <li>Basic photo gallery</li>
                  <li>Insurance claim information</li>
                  <li>Mobile estimate forms</li>
                  <li>Service area targeting</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Discuss Your Needs</a>
              </div>
              <div className="solution-card featured">
                <h3>Professional Roofing Sites</h3>
                <ul>
                  <li>15-page comprehensive site</li>
                  <li>Advanced storm damage pages</li>
                  <li>Extensive before/after galleries</li>
                  <li>Insurance claim assistance pages</li>
                  <li>Material comparison guides</li>
                  <li>Customer testimonial system</li>
                  <li>Local SEO optimization</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Schedule Consultation</a>
              </div>
              <div className="solution-card">
                <h3>Market Leader Sites</h3>
                <ul>
                  <li>Unlimited pages & features</li>
                  <li>Custom storm tracking integration</li>
                  <li>Advanced lead management</li>
                  <li>Insurance company partnerships</li>
                  <li>Drone inspection showcases</li>
                  <li>Comprehensive analytics</li>
                  <li>Ongoing storm campaign management</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Explore Possibilities</a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container">
            <h2>Common Questions from Roofing Contractors</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>How do you help me capture storm damage leads quickly?</h3>
                <p>We create storm-specific landing pages that can be activated immediately after weather events, with emergency contact forms, photo upload capabilities, and rapid response messaging to capture leads before competitors.</p>
              </div>
              <div className="faq-item">
                <h3>Can you help me stand out from fly-by-night roofers?</h3>
                <p>Absolutely! We prominently showcase your licenses, insurance, certifications, warranties, and local business history. This immediately differentiates you from temporary storm chasers and builds customer confidence.</p>
              </div>
              <div className="faq-item">
                <h3>How do you handle the complex roofing sales process?</h3>
                <p>We create educational content explaining insurance claims, material options, installation processes, and timelines. This helps customers understand the value before they meet with you, leading to higher conversion rates.</p>
              </div>
              <div className="faq-item">
                <h3>Do you optimize for both residential and commercial roofing?</h3>
                <p>Yes! We create separate sections for residential and commercial services, with different messaging, service approaches, and customer testimonials relevant to each market segment.</p>
              </div>
              <div className="faq-item">
                <h3>How do you showcase roofing work visually?</h3>
                <p>We create comprehensive photo galleries with before/after comparisons, drone footage capabilities, material close-ups, and progress photos to visually demonstrate your quality workmanship.</p>
              </div>
              <div className="faq-item">
                <h3>Can you help with insurance company relationships?</h3>
                <p>We create pages highlighting your insurance claim expertise, preferred contractor relationships, and streamlined claim processes. This positions you as the insurance-friendly choice for customers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Weather Any Competition?</h2>
              <p>Join 75+ roofing contractors who've increased their revenue with LogicPros websites. Storm damage leads, insurance jobs, and premium installations - all flowing to your business.</p>
              <div className="cta-buttons">
                <a href="/free-example" className="btn btn-primary btn-large">See My Free Roofing Website Example</a>
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
              <p>Professional websites for roofing contractors</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4>Contractor Services</h4>
                <a href="/contractors/roofing">Roofing Websites</a>
                <a href="/contractors/construction">Construction Websites</a>
                <a href="/contractors/landscaping">Landscaping Websites</a>
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