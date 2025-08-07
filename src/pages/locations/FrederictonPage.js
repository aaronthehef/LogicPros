import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';

export const FrederictonPage = () => {
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
              <h1>Web Design & IT Services in Fredericton, New Brunswick</h1>
              <p>
                Professional websites, AI business automations, and managed IT services for contractors 
                and small businesses in Fredericton, Oromocto, Hanwell, and throughout the Capital Region. 
                Local expertise with modern digital solutions.
              </p>
              <a href="/contact" className="btn btn-primary">Get Your Free Quote</a>
            </div>
          </div>
        </section>

        {/* Local Services */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Complete Digital Solutions for Fredericton Businesses</h2>
            <p className="service-intro">
              Based right here in New Brunswick, we understand the unique needs of Fredericton-area businesses. 
              From downtown offices to rural contractors, we provide technology solutions that work.
            </p>
            
            <div className="local-services-grid">
              <div className="local-service-card">
                <div className="service-icon">🌐</div>
                <h3>Fredericton Website Design</h3>
                <p>
                  WordPress, Wix, or React websites optimized for local search. Perfect for contractors, 
                  professionals, and retailers serving Fredericton and surrounding areas.
                </p>
                <ul className="service-benefits">
                  <li>Local SEO for Fredericton searches</li>
                  <li>Mobile-responsive design</li>
                  <li>2-4 week turnaround</li>
                  <li>AI-powered content creation</li>
                </ul>
              </div>

              <div className="local-service-card">
                <div className="service-icon">🤖</div>
                <h3>Business Process Automation</h3>
                <p>
                  Save time with automated Google review requests, social media posting, and customer 
                  follow-up systems. Perfect for busy Fredericton contractors and service providers.
                </p>
                <ul className="service-benefits">
                  <li>Google review automation</li>
                  <li>Social media management</li>
                  <li>Customer follow-up sequences</li>
                  <li>Calendar and scheduling integration</li>
                </ul>
              </div>

              <div className="local-service-card">
                <div className="service-icon">💻</div>
                <h3>Managed IT Support</h3>
                <p>
                  Complete IT management for Fredericton businesses. Security, backups, updates, and 
                  technical support so you can focus on serving your customers.
                </p>
                <ul className="service-benefits">
                  <li>24/7 system monitoring</li>
                  <li>Cybersecurity protection</li>
                  <li>Automated backups</li>
                  <li>Remote technical support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Serving Fredericton and Surrounding Communities</h2>
            
            <div className="service-areas-grid">
              <div className="service-area-card">
                <h4>📍 Downtown Fredericton</h4>
                <p>
                  Professional services, retail businesses, and restaurants in the historic downtown core. 
                  King Street, Queen Street, Regent Street, and surrounding business districts.
                </p>
              </div>
              
              <div className="service-area-card">
                <h4>📍 North Side Fredericton</h4>
                <p>
                  Contractors and service providers in Nashwaaksis, Marysville, and Douglas areas. 
                  Specialized in trades and home service businesses.
                </p>
              </div>
              
              <div className="service-area-card">
                <h4>📍 Oromocto & Area</h4>
                <p>
                  Supporting businesses in Oromocto, Geary, Burton, and surrounding York County communities. 
                  Strong focus on contractor and military family-owned businesses.
                </p>
              </div>
              
              <div className="service-area-card">
                <h4>📍 Hanwell & Lincoln</h4>
                <p>
                  Growing residential areas with contractors, home services, and retail businesses. 
                  Optimized for suburban service area coverage.
                </p>
              </div>
              
              <div className="service-area-card">
                <h4>📍 Harvey Station & Zealand</h4>
                <p>
                  Rural contractors and service providers throughout York County. 
                  Specialized in agricultural and rural business digital solutions.
                </p>
              </div>
              
              <div className="service-area-card">
                <h4>📍 New Maryland & Charters Settlement</h4>
                <p>
                  Suburban contractors, professionals, and service businesses. 
                  Focus on quality residential service providers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fredericton Business Focus */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Industries We Serve in Fredericton</h2>
            
            <div className="industries-content">
              <div className="industries-text">
                <h3>Government & Professional Services</h3>
                <p>
                  As New Brunswick's capital city, Fredericton has a strong government and professional services sector. 
                  We help lawyers, accountants, consultants, and government contractors establish strong online presences 
                  and streamline their operations with automation.
                </p>
                
                <h3>Construction & Home Services</h3>
                <p>
                  The Fredericton area's steady growth creates consistent demand for contractors. We specialize in 
                  websites for plumbers, electricians, HVAC technicians, roofers, and general contractors serving 
                  the Capital Region.
                </p>
                
                <h3>Technology & Innovation</h3>
                <p>
                  Fredericton's growing tech sector includes many small businesses and startups. We provide scalable 
                  web solutions and IT management that grows with innovative companies.
                </p>
                
                <h3>Healthcare & Wellness</h3>
                <p>
                  Private healthcare practices, dental offices, wellness centers, and medical professionals throughout 
                  Fredericton benefit from our HIPAA-compliant IT solutions and professional website designs.
                </p>
              </div>
              
              <div className="industries-stats">
                <div className="stat-item">
                  <h4>58,000+</h4>
                  <p>Fredericton residents</p>
                </div>
                <div className="stat-item">
                  <h4>85,000+</h4>
                  <p>Greater Fredericton area population</p>
                </div>
                <div className="stat-item">
                  <h4>Provincial Capital</h4>
                  <p>Government & business hub</p>
                </div>
                <div className="stat-item">
                  <h4>2 Universities</h4>
                  <p>UNB & STU driving innovation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local SEO Benefits */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Why Local SEO Matters for Fredericton Businesses</h2>
            
            <div className="seo-benefits">
              <div className="seo-content">
                <h3>📱 Local Search Dominance</h3>
                <p>
                  When Fredericton residents search for "contractor near me" or "web design Fredericton," 
                  you want to be found first. Our local SEO strategies help you rank above competitors 
                  for location-specific searches.
                </p>
                
                <h3>🎯 Targeted Traffic</h3>
                <p>
                  Focus on customers who can actually use your services. We optimize for searches including 
                  specific Fredericton neighborhoods, making sure you attract qualified local leads.
                </p>
                
                <h3>🏆 Competitive Advantage</h3>
                <p>
                  Many Fredericton businesses still lack strong online presence. A professionally optimized 
                  website gives you a significant advantage over competitors relying on word-of-mouth alone.
                </p>
                
                <h3>📊 Measurable Results</h3>
                <p>
                  Track exactly how many Fredericton customers find your business online, which services 
                  they're searching for, and how your local visibility improves over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Fredericton Client Success Stories</h2>
            
            <div className="success-stories">
              <div className="story-card">
                <div className="story-icon">🔧</div>
                <h4>Capital Region Plumbing</h4>
                <p>
                  "LogicPros built us a WordPress website that ranks #1 for 'plumber Fredericton.' 
                  The Google review automation increased our ratings from 4.2 to 4.8 stars. 
                  We now get 3-4 calls per week from the website."
                </p>
                <div className="story-results">
                  <span>+300% online leads</span>
                  <span>4.8⭐ Google rating</span>
                </div>
              </div>
              
              <div className="story-card">
                <div className="story-icon">💼</div>
                <h4>Downtown Law Office</h4>
                <p>
                  "Our new React website positioned us as the modern choice for legal services in Fredericton. 
                  The professional design and fast loading speed helped us attract younger clients 
                  and compete with larger firms."
                </p>
                <div className="story-results">
                  <span>Professional image</span>
                  <span>Faster loading</span>
                </div>
              </div>
              
              <div className="story-card">
                <div className="story-icon">🏠</div>
                <h4>Oromocto Home Services</h4>
                <p>
                  "The automation systems handle our social media and customer follow-up perfectly. 
                  We focus on the work while LogicPros' technology keeps our customers happy 
                  and brings in new business."
                </p>
                <div className="story-results">
                  <span>Automated workflows</span>
                  <span>Better customer service</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Ready to Grow Your Fredericton Business Online?</h2>
            
            <div className="getting-started-content">
              <div className="steps-content">
                <h3>Three Ways to Get Started:</h3>
                
                <div className="start-option">
                  <h4>🆓 Free Website Example</h4>
                  <p>
                    See exactly what your website will look like before you commit. 
                    We'll create a custom sample page for your Fredericton business - completely free.
                  </p>
                  <a href="/free-example" className="btn btn-secondary">Get Free Example</a>
                </div>
                
                <div className="start-option">
                  <h4>📞 Strategy Consultation</h4>
                  <p>
                    15-minute call to discuss your business goals and recommend the best 
                    digital solutions for your Fredericton market.
                  </p>
                  <a href="/contact" className="btn btn-secondary">Schedule Call</a>
                </div>
                
                <div className="start-option">
                  <h4>💬 Get a Quote</h4>
                  <p>
                    Tell us about your project and get a detailed quote for website design, 
                    automation, or IT services in Fredericton.
                  </p>
                  <a href="/contact" className="btn btn-primary">Request Quote</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Serving Fredericton with Modern Digital Solutions</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Local expertise, modern technology, and results you can measure. 
                Let's help your Fredericton business succeed online.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary" style={{ backgroundColor: 'white', color: '#000' }}>
                Get Started Today
              </a>
              <a href="/free-example" className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
                See Free Example
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Additional styles for location pages
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

.seo-benefits {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.seo-content h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
  margin-top: 30px;
  font-size: 1.3rem;
}

.seo-content h3:first-child {
  margin-top: 0;
}

.seo-content p {
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