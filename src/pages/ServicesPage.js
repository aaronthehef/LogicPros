import React from 'react';
import '../responsive-style.css';
import { Logo } from '../components/Logo';
import { Navigation } from '../components/Navigation';

export const ServicesPage = () => {
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
              <h1>Complete Digital Solutions for Your Business</h1>
              <p>
                Based in New Brunswick, serving contractors and small businesses across Canada and the U.S. 
                From websites to AI automations to managed IT services – everything you need to modernize and grow.
              </p>
              <a href="/free-example" className="btn btn-primary">Get Your Free Example Website</a>
            </div>
          </div>
        </section>

        {/* Contractor Specialties */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Websites Built for Your Industry</h2>
            <p className="service-intro">
              We specialize in contractor and trades websites, but work with any business that values results. 
              Industry-specific content, local SEO, and features that convert visitors into customers.
            </p>
            <div className="contractor-grid">
              <a href="/contractors/plumbing" className="contractor-card-link">
                <div className="contractor-card">
                  <div className="contractor-icon">🚰</div>
                  <h3>Plumbing Contractors</h3>
                  <p>Emergency repairs, installations, and maintenance contracts. Capture urgent calls and premium service work.</p>
                  <div className="card-cta">Learn More →</div>
                </div>
              </a>
              <a href="/contractors/electrical" className="contractor-card-link">
                <div className="contractor-card">
                  <div className="contractor-icon">⚡</div>
                  <h3>Electrical Contractors</h3>
                  <p>Safety-focused websites that build trust for electrical work, smart home installations, and commercial projects.</p>
                  <div className="card-cta">Learn More →</div>
                </div>
              </a>
              <a href="/contractors/hvac" className="contractor-card-link">
                <div className="contractor-card">
                  <div className="contractor-icon">🌡️</div>
                  <h3>HVAC Contractors</h3>
                  <p>Seasonal campaigns, emergency service capture, and high-value system sales for heating and cooling professionals.</p>
                  <div className="card-cta">Learn More →</div>
                </div>
              </a>
              <a href="/contractors/roofing" className="contractor-card-link">
                <div className="contractor-card">
                  <div className="contractor-icon">🏠</div>
                  <h3>Roofing Contractors</h3>
                  <p>Storm damage leads, insurance claim expertise, and premium roofing installations that command top dollar.</p>
                  <div className="card-cta">Learn More →</div>
                </div>
              </a>
              <a href="/contractors/construction" className="contractor-card-link">
                <div className="contractor-card">
                  <div className="contractor-icon">🏗️</div>
                  <h3>General Construction</h3>
                  <p>Custom homes, major renovations, and commercial construction. Showcase complex projects and build trust.</p>
                  <div className="card-cta">Learn More →</div>
                </div>
              </a>
              <a href="/contractors/landscaping" className="contractor-card-link">
                <div className="contractor-card">
                  <div className="contractor-icon">🌿</div>
                  <h3>Landscaping Contractors</h3>
                  <p>Visual portfolios, seasonal campaigns, and design consultation services that justify premium landscaping rates.</p>
                  <div className="card-cta">Learn More →</div>
                </div>
              </a>
              <a href="/contractors/painting" className="contractor-card-link">
                <div className="contractor-card">
                  <div className="contractor-icon">🎨</div>
                  <h3>Painting Contractors</h3>
                  <p>Before/after showcases, color expertise, and professional positioning to compete against weekend painters.</p>
                  <div className="card-cta">Learn More →</div>
                </div>
              </a>
              <a href="/contractors/flooring" className="contractor-card-link">
                <div className="contractor-card">
                  <div className="contractor-icon">📐</div>
                  <h3>Flooring Contractors</h3>
                  <p>Material education, installation process transparency, and visual galleries for hardwood, tile, and luxury vinyl.</p>
                  <div className="card-cta">Learn More →</div>
                </div>
              </a>
              <a href="/contractors/concrete" className="contractor-card-link">
                <div className="contractor-card">
                  <div className="contractor-icon">🏗️</div>
                  <h3>Concrete Contractors</h3>
                  <p>Decorative concrete showcase, durability emphasis, and quality positioning for driveways, patios, and foundations.</p>
                  <div className="card-cta">Learn More →</div>
                </div>
              </a>
              <a href="/contractors/remodeling" className="contractor-card-link">
                <div className="contractor-card">
                  <div className="contractor-icon">🏡</div>
                  <h3>Home Remodeling</h3>
                  <p>Stunning transformations, design-build positioning, and trust-building for major home investment decisions.</p>
                  <div className="card-cta">Learn More →</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Lead Generation Websites */}
        <section className="section">
          <div className="container">
            <div className="service-detail">
              <h2>Contractor & Business Websites</h2>
              <p className="service-intro">
                WordPress or React websites designed for SEO and lead generation. 
                AI-powered copywriting, 2-4 week turnaround, mobile-responsive design. 
                Perfect for contractors and service businesses.
              </p>
              
              <div className="features-grid">
                <div className="feature-item">
                  <h3>🌐 WordPress or React</h3>
                  <p>Choose the platform that fits your needs and goals. All options include mobile-responsive design and SEO optimization.</p>
                </div>
                <div className="feature-item">
                  <h3>🤖 AI-Powered Copywriting</h3>
                  <p>Professional content written with AI assistance, tailored to your industry and target customers. No generic templates.</p>
                </div>
                <div className="feature-item">
                  <h3>📋 Lead Capture Forms</h3>
                  <p>Custom contact and inquiry forms that gather the information you need to qualify prospects effectively.</p>
                </div>
                <div className="feature-item">
                  <h3>📍 Local SEO Focus</h3>
                  <p>Optimized for local search results so customers in your service area find you first. Google My Business integration included.</p>
                </div>
                <div className="feature-item">
                  <h3>⏱️ 2-4 Week Turnaround</h3>
                  <p>Fast delivery without compromising quality. Your business needs results quickly, and we deliver on time.</p>
                </div>
                <div className="feature-item">
                  <h3>📊 Hosting Options</h3>
                  <p>We can provide hosting or work with your preferred provider. Flexible solutions that fit your existing setup.</p>
                </div>
              </div>

              <div className="pricing-highlight">
                <h3>Website Solutions</h3>
                <ul>
                  <li>WordPress or React Website</li>
                  <li>AI-Powered Content Writing</li>
                  <li>Mobile-Responsive Design</li>
                  <li>Local SEO Optimization</li>
                  <li>Contact & Inquiry Forms</li>
                  <li>2-4 Week Delivery</li>
                  <li>Training & Support</li>
                </ul>
                <p className="price">Ready to Get Started?</p>
                <a href="/contact" className="btn btn-primary">Schedule Free Consultation</a>
              </div>
            </div>
          </div>
        </section>

        {/* E-Commerce Solutions */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <div className="service-detail">
              <h2>AI Business Automations</h2>
              <p className="service-intro">
                Google review request systems, social media auto-posting, calendar integrations, and more. 
                Built with n8n automation platform with full backend setup and ongoing monitoring.
              </p>
              
              <div className="features-grid">
                <div className="feature-item">
                  <h3>⭐ Google Review Automation</h3>
                  <p>Automatically request reviews from satisfied customers via email and SMS. Increase your star rating and local search visibility.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Social Media Auto-Posting</h3>
                  <p>Schedule and automatically post content across Facebook, Instagram, and LinkedIn. Maintain consistent online presence.</p>
                </div>
                <div className="feature-item">
                  <h3>📅 Calendar Integrations</h3>
                  <p>Sync appointments between your scheduling system, website bookings, and team calendars. Eliminate double-booking.</p>
                </div>
                <div className="feature-item">
                  <h3>🔄 Workflow Automations</h3>
                  <p>Custom automations for lead follow-up, customer communications, and internal processes. Save hours each week.</p>
                </div>
                <div className="feature-item">
                  <h3>📊 Backend Monitoring</h3>
                  <p>Full setup with ongoing monitoring to ensure your automations keep running smoothly. We handle the technical details.</p>
                </div>
                <div className="feature-item">
                  <h3>🚀 n8n Platform</h3>
                  <p>Built on the powerful n8n automation platform with hundreds of integrations available for future expansion.</p>
                </div>
              </div>

              <div className="pricing-highlight">
                <h3>AI Automation Solutions</h3>
                <ul>
                  <li>Google Review Request System</li>
                  <li>Social Media Auto-Posting</li>
                  <li>Calendar Integration Setup</li>
                  <li>Custom Workflow Automations</li>
                  <li>Full Backend Configuration</li>
                  <li>Ongoing Monitoring & Support</li>
                  <li>n8n Platform Access</li>
                </ul>
                <p className="price">Interested in Automation?</p>
                <a href="/contact" className="btn btn-primary">Discuss Your Needs</a>
              </div>
            </div>
          </div>
        </section>

        {/* Project Management Portals */}
        <section className="section">
          <div className="container">
            <div className="service-detail">
              <h2>Managed IT Services (MSP)</h2>
              <p className="service-intro">
                Complete IT management for small businesses. Software updates, cybersecurity, 
                backups, and remote support so you can focus on what you do best.
              </p>
              
              <div className="features-grid">
                <div className="feature-item">
                  <h3>🔄 Software Updates</h3>
                  <p>Keep all your business software current with automated updates and security patches. No more outdated systems.</p>
                </div>
                <div className="feature-item">
                  <h3>🔒 Cybersecurity Protection</h3>
                  <p>Comprehensive security monitoring, threat detection, and incident response to protect your business data.</p>
                </div>
                <div className="feature-item">
                  <h3>💾 Automated Backups</h3>
                  <p>Regular, tested backups of your critical business data with quick recovery options when you need them.</p>
                </div>
                <div className="feature-item">
                  <h3>💻 Remote Support</h3>
                  <p>Fast resolution of IT issues without disrupting your workday. Remote access support when possible.</p>
                </div>
                <div className="feature-item">
                  <h3>🔍 System Audits</h3>
                  <p>Regular IT infrastructure assessments to identify potential issues before they become problems.</p>
                </div>
                <div className="feature-item">
                  <h3>📞 Proactive Monitoring</h3>
                  <p>24/7 system monitoring to catch and resolve issues before they impact your business operations.</p>
                </div>
              </div>

              <div className="pricing-highlight">
                <h3>Managed IT Solutions</h3>
                <ul>
                  <li>Software Updates & Patches</li>
                  <li>Cybersecurity Monitoring</li>
                  <li>Automated Backup Systems</li>
                  <li>Remote Technical Support</li>
                  <li>Regular System Audits</li>
                  <li>Proactive Issue Resolution</li>
                  <li>24/7 System Monitoring</li>
                </ul>
                <p className="price">Need IT Support?</p>
                <a href="/contact" className="btn btn-primary">Let's Talk Solutions</a>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Why Choose LogicPros</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>🇨🇦 Local Expertise</h3>
                <p>Based in New Brunswick with deep understanding of Canadian and U.S. markets. We know what works in both regions.</p>
              </div>
              <div className="service-card">
                <h3>🔨 Contractor Specialists</h3>
                <p>We specialize in contractors and trades but work with any business that values results and professional service.</p>
              </div>
              <div className="service-card">
                <h3>⏱️ Fast Turnaround</h3>
                <p>2-4 week website delivery with AI-powered content. Automations deployed with ongoing monitoring included.</p>
              </div>
              <div className="service-card">
                <h3>🎯 Complete Solutions</h3>
                <p>From websites to automations to managed IT services. Everything you need to modernize your business operations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">How We Work</h2>
            <div className="process-grid">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Initial Consultation</h3>
                <p>We discuss your business needs, target customers, and goals to determine the best solutions for your situation.</p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Strategy & Planning</h3>
                <p>Choose your platform (WordPress or React), plan automations, and outline the project scope and timeline.</p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Build & Configure</h3>
                <p>Website development with AI-powered content, automation setup, and system integrations. Regular updates throughout.</p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Launch & Support</h3>
                <p>Go live with full training and ongoing support. Automation monitoring ensures everything keeps working smoothly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Ready to Start Your Project?</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Get a free consultation to discuss your needs and see how we can help modernize your business operations.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/free-example" className="btn btn-primary" style={{ backgroundColor: 'white', color: '#000' }}>
                Get Free Example Website
              </a>
              <a href="/contact" className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
                Schedule Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Add custom styles for services page
const additionalStyles = `
.service-detail {
  margin-bottom: 60px;
}

.service-intro {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 40px;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.pricing-highlight {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  margin-top: 50px;
  border: 2px solid #000;
}

.pricing-highlight h3 {
  font-size: 1.8rem;
  margin-bottom: 20px;
}

.pricing-highlight ul {
  list-style: none;
  padding: 0;
  margin: 20px 0;
  text-align: left;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.pricing-highlight li {
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
}

.pricing-highlight li:before {
  content: "✓ ";
  color: #28a745;
  font-weight: bold;
}

.price {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 30px 0;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 40px;
}

.process-step {
  text-align: center;
  padding: 30px;
}

.step-number {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 20px;
}

.contractor-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.contractor-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.contractor-card {
  background: white;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.contractor-card-link:hover .contractor-card {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  border-color: var(--primary-color);
}

.contractor-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.contractor-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--text-primary);
}

.contractor-card p {
  color: var(--text-secondary);
  margin-bottom: 25px;
  line-height: 1.6;
  flex-grow: 1;
}

.card-cta {
  background-color: var(--primary-color);
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95rem;
  margin-top: auto;
  transition: background-color 0.3s ease;
}

.contractor-card-link:hover .card-cta {
  background-color: #333;
}

@media (max-width: 768px) {
  .pricing-highlight {
    padding: 30px 20px;
  }
  
  .price {
    font-size: 2rem;
  }
  
  .process-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .contractor-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .contractor-card {
    padding: 25px 20px;
  }
}
`;

// Inject additional styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = additionalStyles;
  document.head.appendChild(styleSheet);
}