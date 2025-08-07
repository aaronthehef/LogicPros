import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';

export const MonctonPage = () => {
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
              <h1>Web Design & Digital Marketing in Moncton, New Brunswick</h1>
              <p>
                Professional websites, AI business automations, and managed IT services for contractors 
                and businesses in Moncton, Dieppe, Riverview, and throughout Greater Moncton. 
                Serving the Hub City with cutting-edge digital solutions.
              </p>
              <a href="/contact" className="btn btn-primary">Get Your Free Quote</a>
            </div>
          </div>
        </section>

        {/* Local Services */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Digital Solutions for Greater Moncton Businesses</h2>
            <p className="service-intro">
              From downtown Moncton to Dieppe's growing tech corridor and Riverview's thriving business community, 
              we help Maritime businesses succeed with modern technology solutions.
            </p>
            
            <div className="local-services-grid">
              <div className="local-service-card">
                <div className="service-icon">🌐</div>
                <h3>Moncton Website Development</h3>
                <p>
                  Custom WordPress and React websites optimized for Greater Moncton searches. 
                  Perfect for contractors, retailers, and service providers in Canada's fastest-growing city.
                </p>
                <ul className="service-benefits">
                  <li>Moncton local SEO optimization</li>
                  <li>Bilingual website options</li>
                  <li>E-commerce capabilities</li>
                  <li>Mobile-first design approach</li>
                </ul>
              </div>

              <div className="local-service-card">
                <div className="service-icon">🤖</div>
                <h3>Marketing Automation</h3>
                <p>
                  Automated systems for Google reviews, social media posting, and customer relationship 
                  management. Essential for busy Moncton contractors and service businesses.
                </p>
                <ul className="service-benefits">
                  <li>Review generation automation</li>
                  <li>Social media scheduling</li>
                  <li>Lead nurturing sequences</li>
                  <li>Customer retention systems</li>
                </ul>
              </div>

              <div className="local-service-card">
                <div className="service-icon">💻</div>
                <h3>Business IT Management</h3>
                <p>
                  Complete managed IT services for Moncton businesses. Security, data protection, 
                  system monitoring, and technical support tailored to Maritime business needs.
                </p>
                <ul className="service-benefits">
                  <li>Cybersecurity protection</li>
                  <li>Cloud backup solutions</li>
                  <li>Remote technical support</li>
                  <li>Compliance management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Serving Greater Moncton and Surrounding Areas</h2>
            
            <div className="service-areas-grid">
              <div className="service-area-card">
                <h4>📍 Downtown Moncton</h4>
                <p>
                  Professional services, retail businesses, and restaurants in the central business district. 
                  Main Street, St. George Street, Church Street, and the cultural precinct.
                </p>
              </div>
              
              <div className="service-area-card">
                <h4>📍 Dieppe & Surrounding</h4>
                <p>
                  Growing tech companies, bilingual businesses, and service providers in New Brunswick's 
                  fourth-largest city. Strong focus on innovation and technology adoption.
                </p>
              </div>
              
              <div className="service-area-card">
                <h4>📍 Riverview & Hillsborough</h4>
                <p>
                  Residential service contractors, professional services, and retail businesses 
                  serving Riverview, Hillsborough, and Albert County communities.
                </p>
              </div>
              
              <div className="service-area-card">
                <h4>📍 Salisbury & Petitcodiac</h4>
                <p>
                  Rural contractors and service providers throughout Westmorland County. 
                  Agricultural businesses and rural service specialists.
                </p>
              </div>
              
              <div className="service-area-card">
                <h4>📍 Shediac & Coastal Areas</h4>
                <p>
                  Seasonal businesses, tourism-related services, and contractors serving 
                  the beautiful Shediac Bay and southeastern New Brunswick coast.
                </p>
              </div>
              
              <div className="service-area-card">
                <h4>📍 Sackville & Border Communities</h4>
                <p>
                  Cross-border businesses, university-related services, and contractors 
                  serving the Tantramar region and Nova Scotia border area.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Moncton Business Focus */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Industries We Serve in Greater Moncton</h2>
            
            <div className="industries-content">
              <div className="industries-text">
                <h3>Transportation & Logistics</h3>
                <p>
                  As the transportation hub of the Maritimes, Moncton hosts numerous logistics and 
                  transportation companies. We help trucking companies, freight forwarders, and 
                  logistics providers establish strong digital presences and streamline operations.
                </p>
                
                <h3>Construction & Development</h3>
                <p>
                  Greater Moncton's rapid growth drives constant construction activity. We specialize 
                  in websites for general contractors, residential builders, commercial developers, 
                  and specialty trades serving the booming market.
                </p>
                
                <h3>Healthcare & Professional Services</h3>
                <p>
                  The Moncton Hospital and numerous private practices make healthcare a major sector. 
                  We provide compliant IT solutions and professional websites for medical practices, 
                  dental offices, and healthcare professionals.
                </p>
                
                <h3>Technology & Innovation</h3>
                <p>
                  Dieppe's Emergence commercial park and Moncton's growing tech scene include many 
                  innovative companies. We provide scalable solutions for startups, software companies, 
                  and technology service providers.
                </p>
              </div>
              
              <div className="industries-stats">
                <div className="stat-item">
                  <h4>71,000+</h4>
                  <p>Moncton residents</p>
                </div>
                <div className="stat-item">
                  <h4>157,000+</h4>
                  <p>Greater Moncton CMA</p>
                </div>
                <div className="stat-item">
                  <h4>Fastest Growing</h4>
                  <p>City in Atlantic Canada</p>
                </div>
                <div className="stat-item">
                  <h4>Transportation Hub</h4>
                  <p>Maritime logistics center</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bilingual Services */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Bilingual Digital Solutions for New Brunswick</h2>
            
            <div className="bilingual-content">
              <div className="bilingual-text">
                <h3>🇫🇷 Services Bilingues Disponibles</h3>
                <p>
                  En tant qu'entreprise basée au Nouveau-Brunswick, nous comprenons l'importance 
                  du bilinguisme pour les entreprises de Moncton et du Grand Moncton. Nous offrons 
                  des sites web bilingues et des services en français.
                </p>
                
                <h3>🇨🇦 English & French Website Design</h3>
                <p>
                  Many Greater Moncton businesses serve both English and French-speaking customers. 
                  We create fully bilingual websites that provide seamless experiences in both languages, 
                  essential for businesses in New Brunswick's officially bilingual environment.
                </p>
                
                <h3>📈 Bilingual SEO & Marketing</h3>
                <p>
                  Optimize your online presence for both English and French search terms. 
                  We understand the unique SEO challenges of bilingual markets and create 
                  strategies that capture customers in both languages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Greater Moncton Client Success Stories</h2>
            
            <div className="success-stories">
              <div className="story-card">
                <div className="story-icon">🚛</div>
                <h4>Maritime Transport Solutions</h4>
                <p>
                  "LogicPros built us a bilingual WordPress website that showcases our cross-Canada 
                  capabilities. The automated lead follow-up system helped us convert 40% more 
                  inquiries into actual contracts. Great ROI."
                </p>
                <div className="story-results">
                  <span>Bilingual website</span>
                  <span>+40% lead conversion</span>
                </div>
              </div>
              
              <div className="story-card">
                <div className="story-icon">🏗️</div>
                <h4>Dieppe Construction Group</h4>
                <p>
                  "The React website loads incredibly fast and looks professional on all devices. 
                  Combined with the Google review automation, we've established ourselves as 
                  the premium choice for commercial construction in Greater Moncton."
                </p>
                <div className="story-results">
                  <span>Premium positioning</span>
                  <span>Fast performance</span>
                </div>
              </div>
              
              <div className="story-card">
                <div className="story-icon">🏥</div>
                <h4>Riverview Medical Practice</h4>
                <p>
                  "The managed IT services ensure our patient data is secure and compliant. 
                  The automated appointment reminders reduced no-shows by 35%, improving 
                  our scheduling efficiency significantly."
                </p>
                <div className="story-results">
                  <span>HIPAA compliant</span>
                  <span>-35% no-shows</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maritime Advantages */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Why Choose Local for Your Digital Needs</h2>
            
            <div className="maritime-advantages">
              <div className="advantage-item">
                <h4>🌊 Maritime Business Understanding</h4>
                <p>
                  We understand the unique challenges and opportunities of doing business in the Maritimes. 
                  Seasonal fluctuations, interprovincial commerce, and the importance of relationship-building 
                  in smaller communities.
                </p>
              </div>
              
              <div className="advantage-item">
                <h4>⏰ Atlantic Time Zone Advantage</h4>
                <p>
                  Working in the same time zone means real-time communication and support. 
                  No waiting for responses from companies in other time zones - we're here 
                  when you need us during Maritime business hours.
                </p>
              </div>
              
              <div className="advantage-item">
                <h4>🤝 Personal Relationships</h4>
                <p>
                  In the Maritimes, business is personal. We build long-term relationships with our clients, 
                  understanding your business evolution and providing ongoing support that grows with you.
                </p>
              </div>
              
              <div className="advantage-item">
                <h4>💼 Regional Market Knowledge</h4>
                <p>
                  Deep understanding of Maritime markets, from Moncton's rapid growth to seasonal 
                  tourism patterns. We tailor solutions to work effectively in regional contexts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Ready to Grow Your Moncton Business Online?</h2>
            
            <div className="getting-started-content">
              <div className="steps-content">
                <h3>Get Started with Your Digital Transformation:</h3>
                
                <div className="start-option">
                  <h4>🆓 Free Website Mockup</h4>
                  <p>
                    See exactly what your professional website will look like before you commit. 
                    We'll create a custom sample page for your Greater Moncton business at no cost.
                  </p>
                  <a href="/free-example" className="btn btn-secondary">Get Free Mockup</a>
                </div>
                
                <div className="start-option">
                  <h4>📞 Digital Strategy Call</h4>
                  <p>
                    15-minute consultation to discuss your business goals and recommend the best 
                    digital marketing strategies for the competitive Moncton market.
                  </p>
                  <a href="/contact" className="btn btn-secondary">Book Strategy Call</a>
                </div>
                
                <div className="start-option">
                  <h4>💬 Project Quote</h4>
                  <p>
                    Tell us about your project requirements and receive a detailed proposal 
                    for website design, automation, or IT services in Greater Moncton.
                  </p>
                  <a href="/contact" className="btn btn-primary">Request Project Quote</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Powering Greater Moncton's Digital Future</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                From the Hub City to the entire Maritime region - we're your technology partners 
                for sustainable business growth.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary" style={{ backgroundColor: 'white', color: '#000' }}>
                Start Your Project
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

// Use the same styles as Fredericton page
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

.bilingual-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.bilingual-text h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
  margin-top: 30px;
  font-size: 1.3rem;
}

.bilingual-text h3:first-child {
  margin-top: 0;
}

.bilingual-text p {
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

.maritime-advantages {
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
  
  .maritime-advantages {
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