import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';

export const SaintJohnPage = () => {
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

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>Professional Web Services in Saint John, New Brunswick</h1>
              <p>
                Custom websites, business automation, and IT management for contractors and businesses 
                in Saint John, Rothesay, Quispamsis, and the Greater Saint John area. 
                Canada's oldest incorporated city deserves modern digital solutions.
              </p>
              <a href="/contact" className="btn btn-primary">Get Your Free Quote</a>
            </div>
          </div>
        </section>

        {/* Local Services */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Digital Excellence for Canada's Oldest City</h2>
            <p className="service-intro">
              From the historic Uptown core to the growing industrial sectors, we help Saint John businesses 
              combine traditional values with modern technology for sustainable growth.
            </p>
            
            <div className="local-services-grid">
              <div className="local-service-card">
                <div className="service-icon">🌐</div>
                <h3>Saint John Web Design</h3>
                <p>
                  Professional WordPress, Wix, and React websites built for Saint John's diverse business community. 
                  From industrial services to tourism, we create websites that work for your industry.
                </p>
                <ul className="service-benefits">
                  <li>Saint John local SEO optimization</li>
                  <li>Industrial & marine industry focus</li>
                  <li>Tourism and hospitality websites</li>
                  <li>Professional service websites</li>
                </ul>
              </div>

              <div className="local-service-card">
                <div className="service-icon">🤖</div>
                <h3>Business Process Automation</h3>
                <p>
                  Streamline operations with automated review management, social media posting, 
                  and customer communications. Essential for competitive Saint John markets.
                </p>
                <ul className="service-benefits">
                  <li>Automated review generation</li>
                  <li>Social media management</li>
                  <li>Customer relationship automation</li>
                  <li>Industrial workflow optimization</li>
                </ul>
              </div>

              <div className="local-service-card">
                <div className="service-icon">💻</div>
                <h3>Enterprise IT Solutions</h3>
                <p>
                  Robust managed IT services designed for Saint John's industrial and professional sectors. 
                  Security, compliance, and reliability for mission-critical business operations.
                </p>
                <ul className="service-benefits">
                  <li>Industrial cybersecurity</li>
                  <li>Compliance management</li>
                  <li>24/7 system monitoring</li>
                  <li>Disaster recovery planning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Serving Greater Saint John and the Fundy Region</h2>
            
            <div className="service-areas-grid">
              <div className="service-area-card">
                <h4>📍 Uptown Saint John</h4>
                <p>
                  Historic business district serving professional services, government offices, 
                  and tourism businesses. King Street, Charlotte Street, and the central business core.
                </p>
              </div>
              
              <div className="service-area-card">
                <h4>📍 East Saint John & Industrial</h4>
                <p>
                  Industrial contractors, manufacturing companies, and port-related businesses. 
                  Specialized in heavy industry and marine services digital solutions.
                </p>
              </div>
              
              <div className="service-area-card">
                <h4>📍 Rothesay & Quispamsis</h4>
                <p>
                  Upscale residential service contractors, professional services, and retail businesses 
                  serving the Kennebecasis Valley's affluent communities.
                </p>
              </div>
              
              <div className="service-area-card">
                <h4>📍 Grand Bay-Westfield & Surrounding</h4>
                <p>
                  Rural contractors, seasonal businesses, and service providers throughout 
                  Kings County and the scenic St. John River valley communities.
                </p>
              </div>
              
              <div className="service-area-card">
                <h4>📍 St. Martins & Fundy Coast</h4>
                <p>
                  Tourism businesses, seasonal services, and contractors serving the Bay of Fundy 
                  coastal communities and Fundy National Park area.
                </p>
              </div>
              
              <div className="service-area-card">
                <h4>📍 Hampton & Kingston Peninsula</h4>
                <p>
                  Residential contractors, professional services, and retail businesses serving 
                  the growing communities between Saint John and Sussex.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Saint John Business Focus */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Industries We Serve in Greater Saint John</h2>
            
            <div className="industries-content">
              <div className="industries-text">
                <h3>Industrial & Manufacturing</h3>
                <p>
                  Saint John's industrial heritage includes major manufacturing, oil refining, and port operations. 
                  We help industrial contractors, equipment suppliers, and manufacturing support services 
                  establish professional digital presences and streamline operations.
                </p>
                
                <h3>Marine & Port Services</h3>
                <p>
                  As a major Atlantic port, Saint John hosts numerous marine-related businesses. 
                  We specialize in websites for shipping companies, marine contractors, logistics providers, 
                  and port service companies operating in this unique environment.
                </p>
                
                <h3>Professional Services & Government</h3>
                <p>
                  With significant government presence and professional service firms, we help lawyers, 
                  accountants, consultants, and government contractors maintain professional digital 
                  presences that inspire confidence.
                </p>
                
                <h3>Tourism & Hospitality</h3>
                <p>
                  The Bay of Fundy region attracts visitors year-round. We help hotels, restaurants, 
                  tour operators, and tourism-related services capture seasonal opportunities with 
                  effective websites and marketing automation.
                </p>
              </div>
              
              <div className="industries-stats">
                <div className="stat-item">
                  <h4>67,000+</h4>
                  <p>Saint John residents</p>
                </div>
                <div className="stat-item">
                  <h4>130,000+</h4>
                  <p>Greater Saint John area</p>
                </div>
                <div className="stat-item">
                  <h4>Canada's Oldest</h4>
                  <p>Incorporated city (1785)</p>
                </div>
                <div className="stat-item">
                  <h4>Major Port</h4>
                  <p>Atlantic Canada gateway</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Focus */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Specialized Solutions for Industrial Businesses</h2>
            
            <div className="industrial-content">
              <div className="industrial-text">
                <h3>🏭 Manufacturing & Heavy Industry</h3>
                <p>
                  Saint John's industrial sector requires specialized digital solutions. We understand 
                  compliance requirements, safety protocols, and the unique communication needs of 
                  manufacturing and heavy industry businesses.
                </p>
                
                <h3>🚢 Marine & Logistics</h3>
                <p>
                  Port operations, shipping, and logistics companies need reliable IT infrastructure 
                  and professional websites that inspire confidence in international clients. 
                  We provide solutions that work in demanding maritime environments.
                </p>
                
                <h3>⚡ Energy & Utilities</h3>
                <p>
                  With major energy infrastructure in the region, we help energy contractors, 
                  utility service providers, and related businesses maintain secure, compliant 
                  digital operations and professional online presence.
                </p>
                
                <h3>🔧 Industrial Contracting</h3>
                <p>
                  Specialized contractors serving industrial clients need websites that demonstrate 
                  capability and reliability. We create digital solutions that help you compete 
                  for major industrial projects and maintain client relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Saint John Client Success Stories</h2>
            
            <div className="success-stories">
              <div className="story-card">
                <div className="story-icon">🏭</div>
                <h4>Industrial Solutions Inc.</h4>
                <p>
                  "LogicPros understood our industrial client base and created a professional website 
                  that showcases our capabilities. The automated lead qualification system helps us 
                  focus on serious inquiries from major industrial projects."
                </p>
                <div className="story-results">
                  <span>Professional image</span>
                  <span>Lead qualification</span>
                </div>
              </div>
              
              <div className="story-card">
                <div className="story-icon">🚢</div>
                <h4>Bay Marine Services</h4>
                <p>
                  "Our new React website loads quickly even on marine networks and showcases our 
                  international capabilities. The managed IT services keep our operations secure 
                  while we focus on serving shipping clients."
                </p>
                <div className="story-results">
                  <span>International reach</span>
                  <span>Secure operations</span>
                </div>
              </div>
              
              <div className="story-card">
                <div className="story-icon">🏘️</div>
                <h4>Kennebecasis Valley Contractors</h4>
                <p>
                  "The WordPress website with local SEO optimization helped us dominate searches 
                  for 'contractors Rothesay' and similar terms. The Google review automation 
                  maintains our excellent reputation automatically."
                </p>
                <div className="story-results">
                  <span>Local SEO dominance</span>
                  <span>Automated reputation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fundy Advantage */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">The Fundy Business Advantage</h2>
            
            <div className="fundy-advantages">
              <div className="advantage-item">
                <h4>🌊 Unique Market Position</h4>
                <p>
                  Saint John's location on the world's highest tides creates unique business opportunities 
                  and challenges. We help businesses leverage this distinctive maritime environment 
                  while overcoming connectivity and technology challenges.
                </p>
              </div>
              
              <div className="advantage-item">
                <h4>🏭 Industrial Heritage</h4>
                <p>
                  Deep understanding of industrial business requirements, from safety compliance to 
                  international trade documentation. We create digital solutions that work in demanding 
                  industrial environments.
                </p>
              </div>
              
              <div className="advantage-item">
                <h4>🎯 Niche Market Expertise</h4>
                <p>
                  Specialized knowledge of marine, energy, and industrial sectors that dominate 
                  the Saint John economy. We understand the unique digital needs of these industries.
                </p>
              </div>
              
              <div className="advantage-item">
                <h4>🌐 Global Connections</h4>
                <p>
                  Help Saint John businesses connect with international markets through professional 
                  websites and digital marketing that showcases Canadian reliability and expertise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tourism & Seasonal */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Tourism & Seasonal Business Solutions</h2>
            
            <div className="tourism-content">
              <h3>🌅 Bay of Fundy Tourism</h3>
              <p>
                The Bay of Fundy attracts visitors from around the world. We help tourism businesses 
                capture seasonal opportunities with websites optimized for travel searches and 
                automated marketing campaigns that adjust to seasonal patterns.
              </p>
              
              <div className="tourism-features">
                <div className="tourism-feature">
                  <h4>Seasonal Campaign Automation</h4>
                  <p>Marketing campaigns that automatically adjust to peak and off-seasons</p>
                </div>
                <div className="tourism-feature">
                  <h4>Booking Integration</h4>
                  <p>Online reservation systems for accommodations, tours, and activities</p>
                </div>
                <div className="tourism-feature">
                  <h4>Multi-Language Support</h4>
                  <p>Websites optimized for international visitors and multiple languages</p>
                </div>
                <div className="tourism-feature">
                  <h4>Weather Integration</h4>
                  <p>Dynamic content that helps visitors plan around Fundy's unique tidal conditions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Ready to Elevate Your Saint John Business?</h2>
            
            <div className="getting-started-content">
              <div className="steps-content">
                <h3>Three Ways to Begin Your Digital Transformation:</h3>
                
                <div className="start-option">
                  <h4>🆓 Free Website Preview</h4>
                  <p>
                    See exactly how your professional website will look and function before making any commitment. 
                    We'll create a custom sample page showcasing your Saint John business.
                  </p>
                  <a href="/free-example" className="btn btn-secondary">Get Free Preview</a>
                </div>
                
                <div className="start-option">
                  <h4>📞 Business Strategy Session</h4>
                  <p>
                    Complimentary consultation to discuss your unique business challenges and opportunities 
                    in the Saint John market, with tailored digital solution recommendations.
                  </p>
                  <a href="/contact" className="btn btn-secondary">Book Strategy Session</a>
                </div>
                
                <div className="start-option">
                  <h4>💬 Custom Project Quote</h4>
                  <p>
                    Detailed proposal for your specific website, automation, or IT management needs. 
                    Pricing tailored to Saint John businesses and market conditions.
                  </p>
                  <a href="/contact" className="btn btn-primary">Request Custom Quote</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Building Digital Success in Canada's First City</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                From historic Uptown to modern industry - we're here to help Saint John businesses 
                thrive in the digital age while honoring their maritime heritage.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary" style={{ backgroundColor: 'white', color: '#000' }}>
                Start Your Project
              </a>
              <a href="/free-example" className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
                See Free Preview
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Use the same styles as other location pages
const locationStyles = `
.local-services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.local-service-card {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.local-service-card:hover {
  transform: translateY(-5px);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  text-align: center;
}

.local-service-card h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.4rem;
}

.local-service-card p {
  color: var(--text-secondary);
  margin-bottom: 20px;
  line-height: 1.6;
}

.service-benefits {
  list-style: none;
  padding: 0;
}

.service-benefits li {
  padding: 5px 0;
  color: var(--text-secondary);
  position: relative;
  padding-left: 20px;
  font-size: 0.95rem;
}

.service-benefits li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

.service-areas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 40px;
}

.service-area-card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.service-area-card:hover {
  transform: translateY(-3px);
}

.service-area-card h4 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.service-area-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
}

.industries-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: start;
}

.industries-text h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
  margin-top: 30px;
  font-size: 1.3rem;
}

.industries-text h3:first-child {
  margin-top: 0;
}

.industries-text p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.industries-stats {
  display: grid;
  gap: 20px;
}

.stat-item {
  background: white;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.stat-item h4 {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 8px;
}

.stat-item p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.industrial-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.industrial-text h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
  margin-top: 30px;
  font-size: 1.3rem;
}

.industrial-text h3:first-child {
  margin-top: 0;
}

.industrial-text p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.success-stories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.story-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.story-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.story-card h4 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.story-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
  font-style: italic;
}

.story-results {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.story-results span {
  background: #f8f9fa;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  color: var(--primary-color);
  font-weight: 600;
}

.fundy-advantages {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.advantage-item {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.advantage-item h4 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.advantage-item p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.tourism-content {
  text-align: center;
}

.tourism-content h3 {
  color: var(--primary-color);
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.tourism-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.tourism-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-top: 30px;
}

.tourism-feature {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.tourism-feature h4 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.tourism-feature p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.4;
}

.getting-started-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.steps-content h3 {
  color: var(--primary-color);
  margin-bottom: 30px;
  font-size: 1.5rem;
  text-align: center;
}

.start-option {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  margin-bottom: 25px;
}

.start-option h4 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.start-option p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .local-services-grid {
    grid-template-columns: 1fr;
  }
  
  .service-areas-grid {
    grid-template-columns: 1fr;
  }
  
  .industries-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .success-stories {
    grid-template-columns: 1fr;
  }
  
  .fundy-advantages {
    grid-template-columns: 1fr;
  }
  
  .tourism-features {
    grid-template-columns: 1fr;
  }
  
  .story-results {
    flex-direction: column;
    align-items: center;
  }
}
`;

// Inject additional styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = locationStyles;
  document.head.appendChild(styleSheet);
}