import React from 'react';
import '../responsive-style.css';
import { Logo } from '../components/Logo';
import { Navigation } from '../components/Navigation';

export const PortfolioPage = () => {
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
              <h1>Our Portfolio: Proven Results for Contractors</h1>
              <p>
                See how we've helped contractors across different trades grow their business, 
                increase leads, and improve customer satisfaction with custom web solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="section">
          <div className="container">
            <div className="portfolio-filters">
              <button className="filter-btn active">All Projects</button>
              <button className="filter-btn">Lead Generation</button>
              <button className="filter-btn">E-Commerce</button>
              <button className="filter-btn">Project Portals</button>
            </div>
          </div>
        </section>

        {/* Case Study 1 - Roofing */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <div className="case-study-detailed">
              <div className="case-study-header">
                <div className="case-study-info">
                  <span className="case-study-tag">Lead Generation</span>
                  <h2>ABC Roofing Solutions</h2>
                  <p className="case-study-subtitle">How a local roofing contractor increased leads by 350% in 6 months</p>
                </div>
                <div className="case-study-image-large">
                  <div className="placeholder-image">Roofing Website Screenshot</div>
                </div>
              </div>
              
              <div className="case-study-content">
                <div className="case-study-stats">
                  <div className="stat">
                    <h3>350%</h3>
                    <p>Increase in Online Leads</p>
                  </div>
                  <div className="stat">
                    <h3>85%</h3>
                    <p>Mobile Traffic Conversion</p>
                  </div>
                  <div className="stat">
                    <h3>#1</h3>
                    <p>Google Ranking for "Roofing [City]"</p>
                  </div>
                  <div className="stat">
                    <h3>$180K</h3>
                    <p>Additional Revenue in 6 Months</p>
                  </div>
                </div>

                <div className="case-study-details">
                  <div className="detail-section">
                    <h3>The Challenge</h3>
                    <p>ABC Roofing was getting most of their business through word-of-mouth and Yellow Pages ads. Their old website was outdated, not mobile-friendly, and generated almost no leads. They were losing potential customers to competitors with better online presence.</p>
                  </div>

                  <div className="detail-section">
                    <h3>Our Solution</h3>
                    <ul>
                      <li><strong>Mobile-First Design:</strong> Created a responsive website optimized for mobile users</li>
                      <li><strong>Local SEO Optimization:</strong> Targeted "roofing contractor [city]" and related keywords</li>
                      <li><strong>Smart Quote Forms:</strong> Multi-step forms that qualify leads and gather project details</li>
                      <li><strong>Before/After Gallery:</strong> Showcase of completed roofing projects with customer testimonials</li>
                      <li><strong>Emergency Contact:</strong> Prominent storm damage and emergency repair call-to-actions</li>
                    </ul>
                  </div>

                  <div className="detail-section">
                    <h3>Results</h3>
                    <p>Within 6 months, ABC Roofing became the dominant online presence in their market. They now receive 15-20 qualified leads per week through their website, compared to 1-2 before. The improved lead quality means higher conversion rates and better project margins.</p>
                  </div>

                  <div className="testimonial-box">
                    <p>"LogicPros completely transformed our business. We went from struggling to find customers to having more leads than we can handle. The website pays for itself every month."</p>
                    <cite>- Mike Rodriguez, Owner, ABC Roofing Solutions</cite>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study 2 - Landscaping */}
        <section className="section">
          <div className="container">
            <div className="case-study-detailed">
              <div className="case-study-header">
                <div className="case-study-info">
                  <span className="case-study-tag">Project Portal</span>
                  <h2>Elite Landscaping Co.</h2>
                  <p className="case-study-subtitle">Streamlined project management improved client satisfaction by 98%</p>
                </div>
                <div className="case-study-image-large">
                  <div className="placeholder-image">Project Portal Screenshot</div>
                </div>
              </div>
              
              <div className="case-study-content">
                <div className="case-study-stats">
                  <div className="stat">
                    <h3>98%</h3>
                    <p>Client Satisfaction Score</p>
                  </div>
                  <div className="stat">
                    <h3>60%</h3>
                    <p>Reduction in Client Calls</p>
                  </div>
                  <div className="stat">
                    <h3>40%</h3>
                    <p>Faster Project Completion</p>
                  </div>
                  <div className="stat">
                    <h3>25%</h3>
                    <p>Increase in Repeat Business</p>
                  </div>
                </div>

                <div className="case-study-details">
                  <div className="detail-section">
                    <h3>The Challenge</h3>
                    <p>Elite Landscaping was spending too much time answering client calls about project status, sharing photos, and managing change requests. Communication was scattered across email, text, and phone calls, leading to confusion and delayed projects.</p>
                  </div>

                  <div className="detail-section">
                    <h3>Our Solution</h3>
                    <ul>
                      <li><strong>Client Dashboard:</strong> Real-time project timeline with milestone tracking</li>
                      <li><strong>Photo Updates:</strong> Automatic daily progress photos with GPS and timestamp</li>
                      <li><strong>Communication Hub:</strong> Centralized messaging for change requests and approvals</li>
                      <li><strong>Document Library:</strong> Plans, permits, and contracts in one secure location</li>
                      <li><strong>Payment Portal:</strong> Online invoicing and payment processing</li>
                    </ul>
                  </div>

                  <div className="detail-section">
                    <h3>Results</h3>
                    <p>Elite Landscaping now manages 40% more projects with the same team. Client satisfaction scores increased dramatically, leading to more referrals and repeat business. The time saved on communication is now spent on revenue-generating activities.</p>
                  </div>

                  <div className="testimonial-box">
                    <p>"The client portal changed everything for us. Our customers love being able to see progress in real-time, and we save hours every week on phone calls and emails."</p>
                    <cite>- Jennifer Park, Operations Manager, Elite Landscaping Co.</cite>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study 3 - Supply Company */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <div className="case-study-detailed">
              <div className="case-study-header">
                <div className="case-study-info">
                  <span className="case-study-tag">E-Commerce</span>
                  <h2>ProTools Supply</h2>
                  <p className="case-study-subtitle">Custom e-commerce platform increased online sales by 400%</p>
                </div>
                <div className="case-study-image-large">
                  <div className="placeholder-image">E-Commerce Website Screenshot</div>
                </div>
              </div>
              
              <div className="case-study-content">
                <div className="case-study-stats">
                  <div className="stat">
                    <h3>400%</h3>
                    <p>Increase in Online Sales</p>
                  </div>
                  <div className="stat">
                    <h3>2,500+</h3>
                    <p>Products in Catalog</p>
                  </div>
                  <div className="stat">
                    <h3>35%</h3>
                    <p>Reduction in Order Processing Time</p>
                  </div>
                  <div className="stat">
                    <h3>92%</h3>
                    <p>Customer Retention Rate</p>
                  </div>
                </div>

                <div className="case-study-details">
                  <div className="detail-section">
                    <h3>The Challenge</h3>
                    <p>ProTools Supply was primarily a brick-and-mortar operation selling to contractors through their physical store. They wanted to expand online but needed a platform that could handle complex contractor pricing, bulk orders, and account management.</p>
                  </div>

                  <div className="detail-section">
                    <h3>Our Solution</h3>
                    <ul>
                      <li><strong>Custom Product Catalog:</strong> 2,500+ tools organized by trade and brand</li>
                      <li><strong>Contractor Pricing:</strong> Tiered pricing based on customer type and volume</li>
                      <li><strong>Bulk Order System:</strong> Easy ordering for large quantities with volume discounts</li>
                      <li><strong>Inventory Integration:</strong> Real-time stock levels synced with POS system</li>
                      <li><strong>Delivery Scheduling:</strong> Job site delivery scheduling and tracking</li>
                    </ul>
                  </div>

                  <div className="detail-section">
                    <h3>Results</h3>
                    <p>ProTools Supply now serves contractors across three states through their online platform. The automated ordering system handles 70% of orders without manual intervention, freeing up staff for customer service and new business development.</p>
                  </div>

                  <div className="testimonial-box">
                    <p>"The e-commerce platform exceeded our expectations. We're now serving customers hundreds of miles away and our regular contractors love the convenience of online ordering."</p>
                    <cite>- Sarah Chen, Manager, ProTools Supply</cite>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Success Stories */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">More Success Stories</h2>
            <div className="portfolio-grid">
              <div className="portfolio-item">
                <div className="portfolio-image">Plumbing Website</div>
                <div className="portfolio-content">
                  <h3>Anderson Plumbing</h3>
                  <p>Emergency plumbing website with 24/7 booking system increased emergency calls by 225%.</p>
                  <div className="portfolio-tags">
                    <span>Lead Generation</span>
                    <span>Booking System</span>
                  </div>
                </div>
              </div>
              
              <div className="portfolio-item">
                <div className="portfolio-image">HVAC Website</div>
                <div className="portfolio-content">
                  <h3>CoolAir HVAC Services</h3>
                  <p>Seasonal marketing website with maintenance scheduling increased annual contracts by 180%.</p>
                  <div className="portfolio-tags">
                    <span>Seasonal Marketing</span>
                    <span>Scheduling</span>
                  </div>
                </div>
              </div>
              
              <div className="portfolio-item">
                <div className="portfolio-image">Electrical Website</div>
                <div className="portfolio-content">
                  <h3>Sparks Electrical</h3>
                  <p>Commercial electrical contractor portal streamlined bid submissions and project management.</p>
                  <div className="portfolio-tags">
                    <span>B2B Portal</span>
                    <span>Bid Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Ready for Results Like These?</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                See what your website could look like with our free example service.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/free-example" className="btn btn-primary" style={{ backgroundColor: 'white', color: '#000' }}>
                Get Your Free Example
              </a>
              <a href="/contact" className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
                Start Your Project
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Additional styles for portfolio page
const portfolioStyles = `
.portfolio-filters {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 10px 20px;
  border: 2px solid #ddd;
  background: white;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn.active,
.filter-btn:hover {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.case-study-detailed {
  margin-bottom: 80px;
}

.case-study-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 50px;
}

.case-study-tag {
  background: var(--primary-color);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.case-study-subtitle {
  color: var(--text-secondary);
  font-size: 1.2rem;
  margin-top: 10px;
}

.case-study-image-large {
  height: 300px;
  background: #f8f9fa;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  border: 2px dashed #ddd;
}

.case-study-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
  padding: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.stat {
  text-align: center;
  padding: 20px;
}

.stat h3 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.stat p {
  color: var(--text-secondary);
  font-weight: 500;
}

.case-study-details {
  display: grid;
  gap: 40px;
}

.detail-section h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--primary-color);
}

.detail-section ul {
  margin-left: 20px;
}

.detail-section li {
  margin-bottom: 10px;
  line-height: 1.6;
}

.testimonial-box {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 30px;
  border-radius: 12px;
  border-left: 4px solid var(--primary-color);
  font-style: italic;
  margin-top: 30px;
}

.testimonial-box cite {
  display: block;
  margin-top: 15px;
  font-weight: 600;
  color: var(--primary-color);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.portfolio-item {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.portfolio-item:hover {
  transform: translateY(-5px);
}

.portfolio-image {
  height: 200px;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  border-bottom: 1px solid #eee;
}

.portfolio-content {
  padding: 25px;
}

.portfolio-content h3 {
  margin-bottom: 15px;
}

.portfolio-tags {
  display: flex;
  gap: 10px;
  margin-top: 15px;
  flex-wrap: wrap;
}

.portfolio-tags span {
  background: #e9ecef;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .case-study-header {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .case-study-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
  }
  
  .stat h3 {
    font-size: 2rem;
  }
  
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = portfolioStyles;
  document.head.appendChild(styleSheet);
}