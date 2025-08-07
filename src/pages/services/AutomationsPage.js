import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';

export const AutomationsPage = () => {
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
              <h1>AI Business Automations That Work While You Sleep</h1>
              <p>
                Google review request systems, social media auto-posting, calendar integrations, and more. 
                Full backend setup with ongoing monitoring using the powerful n8n automation platform. 
                Save hours each week with intelligent business automation.
              </p>
              <a href="/contact" className="btn btn-primary">Request Your Quote</a>
            </div>
          </div>
        </section>

        {/* Core Automations */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Essential Business Automations</h2>
            <p className="service-intro">
              These proven automations handle repetitive tasks so you can focus on what matters most - 
              growing your business and serving customers.
            </p>
            
            <div className="automation-grid">
              <div className="automation-card featured-automation">
                <div className="automation-badge">Most Popular</div>
                <div className="automation-icon">⭐</div>
                <h3>Google Review Automation</h3>
                <p className="automation-subtitle">Build Your Online Reputation</p>
                <ul className="automation-features">
                  <li>Automatic review requests after job completion</li>
                  <li>Email and SMS follow-up sequences</li>
                  <li>Customizable timing and messaging</li>
                  <li>Integration with your existing systems</li>
                  <li>Detailed reporting and analytics</li>
                </ul>
                <div className="automation-result">
                  <strong>Typical Result:</strong> 300-500% increase in Google reviews within 6 months
                </div>
              </div>

              <div className="automation-card">
                <div className="automation-icon">📱</div>
                <h3>Social Media Auto-Posting</h3>
                <p className="automation-subtitle">Consistent Online Presence</p>
                <ul className="automation-features">
                  <li>Scheduled posts across multiple platforms</li>
                  <li>Before/after project showcases</li>
                  <li>Industry tips and educational content</li>
                  <li>Seasonal campaigns and promotions</li>
                  <li>Engagement tracking and optimization</li>
                </ul>
                <div className="automation-result">
                  <strong>Typical Result:</strong> 200% increase in social media engagement
                </div>
              </div>

              <div className="automation-card">
                <div className="automation-icon">📅</div>
                <h3>Calendar & Scheduling Integration</h3>
                <p className="automation-subtitle">Streamline Appointments</p>
                <ul className="automation-features">
                  <li>Online booking integration with your website</li>
                  <li>Automatic appointment confirmations</li>
                  <li>Reminder sequences via email and SMS</li>
                  <li>Calendar sync across team members</li>
                  <li>No-show reduction automation</li>
                </ul>
                <div className="automation-result">
                  <strong>Typical Result:</strong> 40% reduction in no-shows and missed appointments
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Automations */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Advanced Workflow Automations</h2>
            
            <div className="features-grid">
              <div className="feature-item">
                <h3>🔄 Lead Follow-Up Sequences</h3>
                <p>Automatically nurture leads with personalized email and SMS sequences. Convert more prospects into customers with consistent follow-up.</p>
              </div>
              
              <div className="feature-item">
                <h3>💬 Customer Communication Hub</h3>
                <p>Centralize all customer communications across email, SMS, and social media. Never miss an important message again.</p>
              </div>
              
              <div className="feature-item">
                <h3>📊 Invoice & Payment Automation</h3>
                <p>Automatic invoice generation, payment reminders, and late payment follow-up. Get paid faster with less administrative work.</p>
              </div>
              
              <div className="feature-item">
                <h3>📋 Project Management Integration</h3>
                <p>Connect your project management tools with customer communications, scheduling, and reporting systems.</p>
              </div>
              
              <div className="feature-item">
                <h3>🎯 Lead Qualification System</h3>
                <p>Automatically score and route leads based on project size, location, and urgency. Focus your time on the best opportunities.</p>
              </div>
              
              <div className="feature-item">
                <h3>📈 Business Intelligence Dashboard</h3>
                <p>Real-time reporting on leads, conversions, revenue, and customer satisfaction metrics. Make data-driven decisions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* n8n Platform Benefits */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Why We Use n8n Automation Platform</h2>
            
            <div className="platform-benefits">
              <div className="benefit-content">
                <h3>🔧 No Vendor Lock-In</h3>
                <p>Unlike Zapier or other proprietary platforms, n8n is open-source and self-hosted. You own your automations completely.</p>
                
                <h3>💰 Cost-Effective</h3>
                <p>No per-automation fees or usage limits. Once set up, your automations run without ongoing subscription costs.</p>
                
                <h3>🔒 Data Security</h3>
                <p>All data stays on your servers or our secure infrastructure. No third-party services handling your sensitive business data.</p>
                
                <h3>🚀 Unlimited Scalability</h3>
                <p>Add as many automations as you need without worrying about hitting limits or increased costs.</p>
                
                <h3>🔗 Powerful Integrations</h3>
                <p>Connect to virtually any service or application, including custom integrations specific to your business needs.</p>
              </div>
              
              <div className="benefit-image">
                <div className="placeholder-image">n8n Dashboard Screenshot</div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Our Automation Implementation Process</h2>
            <div className="process-grid">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Business Analysis</h3>
                <p>We analyze your current workflows, identify repetitive tasks, and determine the highest-impact automation opportunities.</p>
              </div>
              
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Custom Design</h3>
                <p>Create automated workflows tailored to your specific business processes and existing tools and systems.</p>
              </div>
              
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Backend Setup</h3>
                <p>Full technical implementation including server setup, integrations, testing, and security configuration.</p>
              </div>
              
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Monitoring & Support</h3>
                <p>Ongoing monitoring to ensure automations run smoothly, with proactive maintenance and optimization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Automation Applications by Industry</h2>
            
            <div className="industry-automations">
              <div className="industry-automation">
                <h4>🚰 Plumbing Contractors</h4>
                <ul>
                  <li>Emergency call routing and response automation</li>
                  <li>Seasonal maintenance reminder campaigns</li>
                  <li>Service completion follow-up and upselling</li>
                </ul>
              </div>
              
              <div className="industry-automation">
                <h4>⚡ Electrical Contractors</h4>
                <ul>
                  <li>Safety inspection reminder automation</li>
                  <li>Smart home upgrade follow-up sequences</li>
                  <li>Commercial client retention campaigns</li>
                </ul>
              </div>
              
              <div className="industry-automation">
                <h4>🏠 Roofing Contractors</h4>
                <ul>
                  <li>Weather-triggered marketing campaigns</li>
                  <li>Insurance claim support automation</li>
                  <li>Annual inspection reminder systems</li>
                </ul>
              </div>
              
              <div className="industry-automation">
                <h4>🌿 Landscaping Companies</h4>
                <ul>
                  <li>Seasonal service transition automation</li>
                  <li>Weather-based scheduling adjustments</li>
                  <li>Plant care reminder sequences for clients</li>
                </ul>
              </div>
              
              <div className="industry-automation">
                <h4>💼 Professional Services</h4>
                <ul>
                  <li>Client onboarding automation</li>
                  <li>Document collection and processing</li>
                  <li>Compliance reminder systems</li>
                </ul>
              </div>
              
              <div className="industry-automation">
                <h4>🏗️ General Contractors</h4>
                <ul>
                  <li>Project milestone communication automation</li>
                  <li>Subcontractor coordination systems</li>
                  <li>Material ordering and tracking automation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Calculate Your Time Savings</h2>
            <div className="roi-calculator">
              <div className="roi-content">
                <h3>Typical Time Savings per Week:</h3>
                <div className="savings-grid">
                  <div className="savings-item">
                    <h4>Google Review Management</h4>
                    <p><strong>5-8 hours</strong> → <strong>15 minutes</strong></p>
                  </div>
                  <div className="savings-item">
                    <h4>Social Media Posting</h4>
                    <p><strong>3-5 hours</strong> → <strong>30 minutes setup</strong></p>
                  </div>
                  <div className="savings-item">
                    <h4>Lead Follow-Up</h4>
                    <p><strong>4-6 hours</strong> → <strong>Automated</strong></p>
                  </div>
                  <div className="savings-item">
                    <h4>Appointment Scheduling</h4>
                    <p><strong>2-3 hours</strong> → <strong>Automated</strong></p>
                  </div>
                </div>
                <div className="roi-total">
                  <h4>Total Weekly Savings: 14-22 hours</h4>
                  <p>That's equivalent to hiring a part-time employee, but without the ongoing costs!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Automation FAQ</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>How long does setup take?</h3>
                <p>Basic automations (reviews, social media) typically take 1-2 weeks. Complex workflow automations may take 3-4 weeks depending on integrations needed.</p>
              </div>
              
              <div className="faq-item">
                <h3>What if something breaks?</h3>
                <p>We provide ongoing monitoring and maintenance. Our team is alerted if any automation fails and we fix issues proactively.</p>
              </div>
              
              <div className="faq-item">
                <h3>Can I modify automations later?</h3>
                <p>Absolutely! We can adjust workflows as your business evolves. Many changes can be made without additional development time.</p>
              </div>
              
              <div className="faq-item">
                <h3>Do you work with my existing tools?</h3>
                <p>Yes! We integrate with most popular business tools including CRMs, scheduling software, accounting systems, and more.</p>
              </div>
              
              <div className="faq-item">
                <h3>Is my data secure?</h3>
                <p>Yes. We use enterprise-grade security with encrypted connections. Data can be hosted on your servers or our secure infrastructure.</p>
              </div>
              
              <div className="faq-item">
                <h3>What's the ongoing cost?</h3>
                <p>Much lower than traditional automation platforms! Contact us for a detailed quote based on your specific automation needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Ready to Automate Your Business?</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Let's identify the biggest time-wasters in your business and automate them away.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary" style={{ backgroundColor: 'white', color: '#000' }}>
                Request Automation Consultation
              </a>
              <a href="/contact" className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
                Schedule Discovery Call
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Additional styles for automations page
const automationStyles = `
.automation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.automation-card {
  background: white;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.automation-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.featured-automation {
  border-color: var(--primary-color);
  transform: scale(1.03);
}

.automation-badge {
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

.automation-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.automation-subtitle {
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 20px;
}

.automation-features {
  text-align: left;
  margin: 20px 0;
  padding-left: 20px;
}

.automation-features li {
  margin-bottom: 8px;
  color: var(--text-secondary);
}

.automation-result {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
  color: var(--primary-color);
  font-size: 0.9rem;
}

.platform-benefits {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: center;
}

.benefit-content h3 {
  color: var(--primary-color);
  margin-bottom: 10px;
  margin-top: 25px;
}

.benefit-content h3:first-child {
  margin-top: 0;
}

.benefit-content p {
  margin-bottom: 20px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.benefit-image {
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
}

.industry-automations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.industry-automation {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.industry-automation h4 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.industry-automation ul {
  list-style: none;
  padding: 0;
}

.industry-automation li {
  padding: 5px 0;
  color: var(--text-secondary);
  position: relative;
  padding-left: 20px;
}

.industry-automation li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-size: 0.8rem;
}

.roi-calculator {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  padding: 40px;
  text-align: center;
}

.roi-content h3 {
  color: var(--primary-color);
  margin-bottom: 30px;
}

.savings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
  margin-bottom: 30px;
}

.savings-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.savings-item h4 {
  color: var(--primary-color);
  margin-bottom: 10px;
  font-size: 1rem;
}

.roi-total {
  background: var(--primary-color);
  color: white;
  padding: 25px;
  border-radius: 12px;
  margin-top: 30px;
}

.roi-total h4 {
  margin-bottom: 10px;
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .automation-grid {
    grid-template-columns: 1fr;
  }
  
  .featured-automation {
    transform: none;
  }
  
  .platform-benefits {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .savings-grid {
    grid-template-columns: 1fr;
  }
  
  .industry-automations {
    grid-template-columns: 1fr;
  }
}
`;

// Inject additional styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = automationStyles;
  document.head.appendChild(styleSheet);
}