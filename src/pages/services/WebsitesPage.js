import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Animations } from '../../components/Animations';

export const WebsitesPage = () => {
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
        <Animations />
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="typewriter-text">Professional Websites for Contractors & Small Businesses</h1>
              <p>
                WordPress or React websites built for SEO and lead generation. 
                AI-powered copywriting, mobile-responsive design, and 2-4 week turnaround. 
                Perfect for trades and service businesses across New Brunswick, Canada, and the U.S.
              </p>
              <a href="/contact" className="btn btn-primary">Request Your Quote</a>
            </div>
          </div>
        </section>

        {/* Platform Options */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Choose Your Perfect Platform</h2>
            <p className="service-intro">
              We recommend the best platform based on your needs, budget, and technical comfort level. 
              All options include mobile-responsive design, SEO optimization, and lead capture features.
            </p>
            
            <div className="platform-grid animate-on-scroll">
              <div className="platform-card">
                <div className="platform-icon floating-icon">🌐</div>
                <h3>WordPress Websites</h3>
                <p className="platform-subtitle">Most Popular Choice</p>
                <ul className="platform-features">
                  <li>Easy content updates</li>
                  <li>Thousands of plugins available</li>
                  <li>Great for SEO</li>
                  <li>Cost-effective hosting</li>
                  <li>Perfect for contractors</li>
                </ul>
                <p><strong>Best for:</strong> Contractors who want full control and easy updates</p>
              </div>


              <div className="platform-card">
                <div className="platform-icon floating-icon">⚡</div>
                <h3>React Websites</h3>
                <p className="platform-subtitle">Premium Performance</p>
                <ul className="platform-features">
                  <li>Lightning-fast loading</li>
                  <li>Custom functionality</li>
                  <li>Modern technology</li>
                  <li>Superior mobile experience</li>
                  <li>Advanced integrations</li>
                </ul>
                <p><strong>Best for:</strong> Businesses wanting cutting-edge performance and features</p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Everything You Need to Succeed Online</h2>
            
            <div className="features-grid animate-on-scroll">
              <div className="feature-item">
                <h3>🤖 AI-Powered Copywriting</h3>
                <p>Professional content written specifically for your industry and target customers. No generic templates or cookie-cutter copy.</p>
              </div>
              
              <div className="feature-item">
                <h3>📱 Mobile-Responsive Design</h3>
                <p>Your website looks perfect and loads fast on all devices - desktop, tablet, and smartphone. Essential for contractor searches.</p>
              </div>
              
              <div className="feature-item">
                <h3>🎯 Local SEO Optimization</h3>
                <p>Optimized for "[your service] near me" searches. Includes Google My Business integration and local directory listings.</p>
              </div>
              
              <div className="feature-item">
                <h3>📋 Lead Capture Forms</h3>
                <p>Custom contact and quote request forms that gather the information you need to qualify prospects effectively.</p>
              </div>
              
              <div className="feature-item">
                <h3>🔒 SSL Security & Fast Hosting</h3>
                <p>Secure, encrypted connection with fast hosting (or integration with your preferred hosting provider).</p>
              </div>
              
              <div className="feature-item">
                <h3>📊 Analytics Setup</h3>
                <p>Google Analytics and Search Console integration to track visitors, leads, and performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Our 2-4 Week Website Process</h2>
            <div className="process-grid">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Strategy Session</h3>
                <p>We discuss your business, target customers, competitors, and goals. Choose your platform and plan the site structure.</p>
              </div>
              
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Content Creation</h3>
                <p>AI-powered copywriting tailored to your industry. We create all text content while you focus on running your business.</p>
              </div>
              
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Design & Build</h3>
                <p>Professional design and development with regular updates. You'll see progress throughout the build process.</p>
              </div>
              
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Launch & Training</h3>
                <p>Go live with full training on how to update content, add photos, and track your website's performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Specialized Websites by Industry</h2>
            <p className="service-intro">
              While we work with various industries, we specialize in contractor and service business websites 
              that convert visitors into customers.
            </p>
            
            <div className="industries-grid animate-on-scroll">
              <div className="industry-item">
                <div className="industry-icon">🚰</div>
                <h4>Plumbing Contractors</h4>
                <p>Emergency repair focus, service area mapping, before/after galleries</p>
              </div>
              
              <div className="industry-item">
                <div className="industry-icon">⚡</div>
                <h4>Electrical Contractors</h4>
                <p>Safety credentials, residential/commercial services, smart home features</p>
              </div>
              
              <div className="industry-item">
                <div className="industry-icon">🌡️</div>
                <h4>HVAC Contractors</h4>
                <p>Seasonal campaigns, energy efficiency focus, emergency service capture</p>
              </div>
              
              <div className="industry-item">
                <div className="industry-icon">🏠</div>
                <h4>Roofing Contractors</h4>
                <p>Storm damage expertise, insurance claim support, material showcases</p>
              </div>
              
              <div className="industry-item">
                <div className="industry-icon">🌿</div>
                <h4>Landscaping Companies</h4>
                <p>Visual portfolios, seasonal services, design consultation booking</p>
              </div>
              
              <div className="industry-item">
                <div className="industry-icon">🏗️</div>
                <h4>General Contractors</h4>
                <p>Project portfolios, testimonial integration, multi-service positioning</p>
              </div>
              
              <div className="industry-item">
                <div className="industry-icon">🎨</div>
                <h4>Home Services</h4>
                <p>Painting, flooring, remodeling - before/after showcases and trust-building</p>
              </div>
              
              <div className="industry-item">
                <div className="industry-icon">💼</div>
                <h4>Professional Services</h4>
                <p>Lawyers, accountants, consultants - credibility and lead generation focus</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>Which platform should I choose?</h3>
                <p>We recommend WordPress for most small businesses due to its flexibility and ease of use. React is best for businesses needing custom features or maximum performance.</p>
              </div>
              
              <div className="faq-item">
                <h3>Do you provide hosting?</h3>
                <p>We can provide hosting or work with your existing provider. For WordPress and React, we recommend reliable hosting partners.</p>
              </div>
              
              <div className="faq-item">
                <h3>Can I update the website myself?</h3>
                <p>Absolutely! We provide full training and documentation. WordPress requires basic learning, and React sites typically need developer updates.</p>
              </div>
              
              <div className="faq-item">
                <h3>What if I need changes after launch?</h3>
                <p>Minor updates are included for the first month. After that, we offer maintenance packages or train your team to make updates independently.</p>
              </div>
              
              <div className="faq-item">
                <h3>Do you work with businesses outside New Brunswick?</h3>
                <p>Yes! While we're based in New Brunswick, we serve clients across Canada and the United States. All work is done remotely with regular video check-ins.</p>
              </div>
              
              <div className="faq-item">
                <h3>How much does a website cost?</h3>
                <p>Pricing varies based on platform, features, and complexity. Contact us for a personalized quote based on your specific needs and goals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Ready to Get Started?</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Let's discuss your business goals and recommend the perfect website solution for you.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary" style={{ backgroundColor: 'white', color: '#000' }}>
                Request Your Quote
              </a>
              <a href="/free-example" className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
                See a Free Example
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Additional styles for websites page
const websiteStyles = `
.platform-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.platform-card {
  background: white;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.platform-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.featured-platform {
  border-color: var(--primary-color);
  transform: scale(1.05);
}

.platform-badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary-color);
  color: white;
  padding: 5px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.platform-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.platform-subtitle {
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 20px;
}

.platform-features {
  text-align: left;
  margin: 20px 0;
  padding-left: 20px;
}

.platform-features li {
  margin-bottom: 8px;
  color: var(--text-secondary);
}

.industries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-top: 40px;
}

.industry-item {
  background: white;
  padding: 25px 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.industry-item:hover {
  transform: translateY(-3px);
}

.industry-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.industry-item h4 {
  color: var(--primary-color);
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.industry-item p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .platform-grid {
    grid-template-columns: 1fr;
  }
  
  .featured-platform {
    transform: none;
  }
  
  .industries-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .industries-grid {
    grid-template-columns: 1fr;
  }
}
`;

// Inject additional styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = websiteStyles;
  document.head.appendChild(styleSheet);
}