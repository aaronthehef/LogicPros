import React from 'react';
import '../responsive-style.css';
import { Logo } from '../components/Logo';

export const ServicesPage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="sticky-header">
        <div className="header-content">
          <div className="logo">
            <Logo />
          </div>
          <nav className="nav-menu">
            <div className="nav-links">
              <a href="/services" className="nav-link">Services</a>
              <a href="/portfolio" className="nav-link">Portfolio</a>
              <a href="/about" className="nav-link">About</a>
              <a href="/contact" className="nav-link">Contact</a>
            </div>
            <a href="/contact" className="btn btn-primary">Get Quote</a>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>Professional Web Development Services for Contractors</h1>
              <p>
                Specialized web solutions designed to help contractors win more projects, 
                streamline operations, and grow their business online.
              </p>
              <a href="/free-example" className="btn btn-primary">Get Your Free Example Website</a>
            </div>
          </div>
        </section>

        {/* Contractor Specialties */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Specialized Websites by Contractor Type</h2>
            <p className="service-intro">
              Get a website designed specifically for your trade, with industry-specific content, 
              targeted SEO, and features that speak directly to your customers.
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
              <h2>Lead Generation Websites</h2>
              <p className="service-intro">
                Turn your website into a 24/7 lead generation machine that attracts qualified prospects 
                and converts them into paying customers.
              </p>
              
              <div className="features-grid">
                <div className="feature-item">
                  <h3>📱 Mobile-First Design</h3>
                  <p>Over 70% of contractor searches happen on mobile. Your website will look perfect and load fast on every device.</p>
                </div>
                <div className="feature-item">
                  <h3>🎯 Local SEO Optimization</h3>
                  <p>Dominate local search results for "[your service] near me" searches. Get found by customers in your service area.</p>
                </div>
                <div className="feature-item">
                  <h3>📋 Smart Contact Forms</h3>
                  <p>Custom quote request forms that gather all project details upfront, saving you time on unqualified leads.</p>
                </div>
                <div className="feature-item">
                  <h3>⚡ Lightning Fast Loading</h3>
                  <p>Google prioritizes fast websites. We optimize for speed to improve your search rankings and user experience.</p>
                </div>
                <div className="feature-item">
                  <h3>🔄 Easy Content Updates</h3>
                  <p>Update your services, prices, and portfolio without technical knowledge. Full training included.</p>
                </div>
                <div className="feature-item">
                  <h3>📊 Performance Analytics</h3>
                  <p>Track leads, conversions, and ROI with built-in analytics. Know exactly how your website performs.</p>
                </div>
              </div>

              <div className="pricing-highlight">
                <h3>Lead Generation Website Package</h3>
                <ul>
                  <li>5-8 Page Professional Website</li>
                  <li>Mobile-Responsive Design</li>
                  <li>Local SEO Setup</li>
                  <li>Contact Forms & Quote Requests</li>
                  <li>Google My Business Integration</li>
                  <li>3 Months Free Maintenance</li>
                </ul>
                <p className="price">Starting at $2,497</p>
                <a href="/contact" className="btn btn-primary">Get Started</a>
              </div>
            </div>
          </div>
        </section>

        {/* E-Commerce Solutions */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <div className="service-detail">
              <h2>E-Commerce Solutions for Contractors</h2>
              <p className="service-intro">
                Sell tools, equipment, materials, or services online with a custom e-commerce platform 
                built specifically for the construction industry.
              </p>
              
              <div className="features-grid">
                <div className="feature-item">
                  <h3>🛒 Custom Product Catalogs</h3>
                  <p>Organize your inventory by category, brand, or project type. Easy search and filtering for customers.</p>
                </div>
                <div className="feature-item">
                  <h3>💳 Secure Payment Processing</h3>
                  <p>Accept credit cards, PayPal, and contractor accounts. PCI-compliant security for customer trust.</p>
                </div>
                <div className="feature-item">
                  <h3>📦 Inventory Management</h3>
                  <p>Track stock levels, automatic reorder alerts, and integration with your existing systems.</p>
                </div>
                <div className="feature-item">
                  <h3>👥 Customer Account Portals</h3>
                  <p>Let customers track orders, view purchase history, and manage their account information.</p>
                </div>
                <div className="feature-item">
                  <h3>🚚 Shipping Integration</h3>
                  <p>Real-time shipping rates, tracking, and delivery scheduling for equipment and materials.</p>
                </div>
                <div className="feature-item">
                  <h3>📈 Sales Analytics</h3>
                  <p>Detailed reports on best-selling products, customer behavior, and revenue trends.</p>
                </div>
              </div>

              <div className="pricing-highlight">
                <h3>E-Commerce Platform Package</h3>
                <ul>
                  <li>Custom Online Store Design</li>
                  <li>Product Catalog (up to 500 items)</li>
                  <li>Payment Gateway Integration</li>
                  <li>Inventory Management System</li>
                  <li>Customer Account Portal</li>
                  <li>Mobile Shopping Experience</li>
                  <li>6 Months Support & Training</li>
                </ul>
                <p className="price">Starting at $4,997</p>
                <a href="/contact" className="btn btn-primary">Get Started</a>
              </div>
            </div>
          </div>
        </section>

        {/* Project Management Portals */}
        <section className="section">
          <div className="container">
            <div className="service-detail">
              <h2>Project Management Portals</h2>
              <p className="service-intro">
                Keep clients informed and streamline your workflow with custom client portals 
                that improve communication and project transparency.
              </p>
              
              <div className="features-grid">
                <div className="feature-item">
                  <h3>📋 Project Dashboard</h3>
                  <p>Visual project timeline, milestones, and progress tracking that clients can access 24/7.</p>
                </div>
                <div className="feature-item">
                  <h3>📁 Document Sharing</h3>
                  <p>Secure file sharing for contracts, permits, plans, and photos. Version control included.</p>
                </div>
                <div className="feature-item">
                  <h3>💬 Communication Hub</h3>
                  <p>Centralized messaging, change requests, and approval workflows to eliminate email chaos.</p>
                </div>
                <div className="feature-item">
                  <h3>📅 Scheduling Integration</h3>
                  <p>Sync with your calendar, send automatic updates, and manage subcontractor schedules.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 Invoice & Payment Portal</h3>
                  <p>Online invoicing, payment processing, and financial tracking for each project.</p>
                </div>
                <div className="feature-item">
                  <h3>📸 Progress Photo Updates</h3>
                  <p>Automated photo uploads with timestamp and location data for project documentation.</p>
                </div>
              </div>

              <div className="pricing-highlight">
                <h3>Project Management Portal Package</h3>
                <ul>
                  <li>Custom Client Portal Interface</li>
                  <li>Project Timeline & Milestones</li>
                  <li>Document Management System</li>
                  <li>Communication Tools</li>
                  <li>Invoice & Payment Integration</li>
                  <li>Mobile App Access</li>
                  <li>Unlimited Projects</li>
                  <li>12 Months Support</li>
                </ul>
                <p className="price">Starting at $3,997</p>
                <a href="/contact" className="btn btn-primary">Get Started</a>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Additional Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>🔧 Website Maintenance</h3>
                <p>Keep your website secure, updated, and performing optimally with our maintenance plans starting at $197/month.</p>
              </div>
              <div className="service-card">
                <h3>📈 SEO & Digital Marketing</h3>
                <p>Ongoing SEO, Google Ads management, and social media marketing to continuously grow your online presence.</p>
              </div>
              <div className="service-card">
                <h3>🔗 System Integrations</h3>
                <p>Connect your website with CRM, accounting software, scheduling tools, and other business systems.</p>
              </div>
              <div className="service-card">
                <h3>🎓 Training & Support</h3>
                <p>Comprehensive training for your team and ongoing technical support to maximize your investment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Our Development Process</h2>
            <div className="process-grid">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Discovery & Planning</h3>
                <p>We analyze your business, competitors, and target customers to create a strategic plan for your website.</p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Design & Prototyping</h3>
                <p>Custom designs that reflect your brand and appeal to your target customers. Full approval before development.</p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Development & Testing</h3>
                <p>Clean, secure code with thorough testing across all devices and browsers. SEO optimization included.</p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Launch & Training</h3>
                <p>Smooth launch with full training for your team. Ongoing support to ensure your success.</p>
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
                Get a free consultation and see exactly what your website will look like before you commit.
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