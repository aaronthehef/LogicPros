import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';

export const ITServicesPage = () => {
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
              <h1>Managed IT Services for Small Businesses</h1>
              <p>
                Complete IT management including software updates, cybersecurity, backups, and remote support. 
                Based in New Brunswick, serving businesses across Canada and the U.S. 
                Focus on growing your business while we handle the technology.
              </p>
              <a href="/contact" className="btn btn-primary">Schedule Free Consultation</a>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Complete IT Management Services</h2>
            <p className="service-intro">
              Everything your business needs to stay secure, updated, and running smoothly. 
              No more IT headaches or unexpected downtime.
            </p>
            
            <div className="it-services-grid">
              <div className="it-service-card">
                <div className="service-icon">🔄</div>
                <h3>Software Updates & Patches</h3>
                <ul className="service-features">
                  <li>Automatic operating system updates</li>
                  <li>Business software patch management</li>
                  <li>Security update prioritization</li>
                  <li>Update testing and rollback capabilities</li>
                  <li>Scheduled maintenance windows</li>
                </ul>
                <div className="service-benefit">
                  Prevents security vulnerabilities and ensures optimal software performance
                </div>
              </div>

              <div className="it-service-card featured-service">
                <div className="service-badge">Essential</div>
                <div className="service-icon">🔒</div>
                <h3>Cybersecurity Protection</h3>
                <ul className="service-features">
                  <li>24/7 threat monitoring and detection</li>
                  <li>Firewall configuration and management</li>
                  <li>Email security and spam filtering</li>
                  <li>Employee security awareness training</li>
                  <li>Incident response and recovery</li>
                </ul>
                <div className="service-benefit">
                  Protects your business data and prevents costly cyber attacks
                </div>
              </div>

              <div className="it-service-card">
                <div className="service-icon">💾</div>
                <h3>Automated Backup Systems</h3>
                <ul className="service-features">
                  <li>Daily automated backups of critical data</li>
                  <li>Cloud and local backup redundancy</li>
                  <li>Regular backup testing and verification</li>
                  <li>Quick data recovery procedures</li>
                  <li>Disaster recovery planning</li>
                </ul>
                <div className="service-benefit">
                  Ensures your business data is always safe and recoverable
                </div>
              </div>

              <div className="it-service-card">
                <div className="service-icon">💻</div>
                <h3>Remote Technical Support</h3>
                <ul className="service-features">
                  <li>Fast resolution of IT issues</li>
                  <li>Remote desktop support when possible</li>
                  <li>Software troubleshooting and optimization</li>
                  <li>Hardware diagnostic and repair coordination</li>
                  <li>User training and guidance</li>
                </ul>
                <div className="service-benefit">
                  Minimizes downtime and keeps your team productive
                </div>
              </div>

              <div className="it-service-card">
                <div className="service-icon">🔍</div>
                <h3>System Monitoring & Audits</h3>
                <ul className="service-features">
                  <li>Proactive system health monitoring</li>
                  <li>Performance optimization recommendations</li>
                  <li>Regular IT infrastructure assessments</li>
                  <li>Compliance and security audits</li>
                  <li>Technology upgrade planning</li>
                </ul>
                <div className="service-benefit">
                  Identifies and prevents issues before they impact your business
                </div>
              </div>

              <div className="it-service-card">
                <div className="service-icon">📞</div>
                <h3>Proactive IT Management</h3>
                <ul className="service-features">
                  <li>24/7 system monitoring and alerts</li>
                  <li>Predictive maintenance and optimization</li>
                  <li>Regular system health reports</li>
                  <li>Technology roadmap planning</li>
                  <li>Budget planning for IT expenses</li>
                </ul>
                <div className="service-benefit">
                  Prevents problems before they happen and plans for growth
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Focus */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Specialized IT Support for Your Industry</h2>
            
            <div className="industry-it-grid">
              <div className="industry-it-item">
                <div className="industry-icon">🔨</div>
                <h4>Contractor IT Support</h4>
                <ul>
                  <li>Job site connectivity and mobile device management</li>
                  <li>Project management software optimization</li>
                  <li>Customer database security and backup</li>
                  <li>Accounting software integration and support</li>
                </ul>
              </div>
              
              <div className="industry-it-item">
                <div className="industry-icon">💼</div>
                <h4>Professional Services</h4>
                <ul>
                  <li>Client data security and confidentiality</li>
                  <li>Document management and version control</li>
                  <li>Communication system optimization</li>
                  <li>Compliance monitoring and reporting</li>
                </ul>
              </div>
              
              <div className="industry-it-item">
                <div className="industry-icon">🏪</div>
                <h4>Retail & E-commerce</h4>
                <ul>
                  <li>Point-of-sale system management</li>
                  <li>Inventory system integration</li>
                  <li>Payment processing security</li>
                  <li>Website and online store support</li>
                </ul>
              </div>
              
              <div className="industry-it-item">
                <div className="industry-icon">🏥</div>
                <h4>Healthcare Practices</h4>
                <ul>
                  <li>HIPAA compliance and security</li>
                  <li>Electronic health record support</li>
                  <li>Patient data backup and recovery</li>
                  <li>Telehealth technology support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our MSP Services */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Why Choose LogicPros for IT Management</h2>
            
            <div className="msp-benefits">
              <div className="benefit-content">
                <div className="benefit-item">
                  <h3>🇨🇦 Local Expertise, Wide Reach</h3>
                  <p>Based in New Brunswick with deep understanding of Canadian business needs and regulations. We also serve clients across the United States with the same level of dedicated service.</p>
                </div>
                
                <div className="benefit-item">
                  <h3>💰 Predictable IT Costs</h3>
                  <p>Fixed monthly pricing means no surprise IT bills. Budget your technology costs with confidence and avoid unexpected repair expenses.</p>
                </div>
                
                <div className="benefit-item">
                  <h3>🚀 Proactive Approach</h3>
                  <p>We prevent problems before they happen rather than just fixing issues after they occur. This approach minimizes downtime and keeps your business running smoothly.</p>
                </div>
                
                <div className="benefit-item">
                  <h3>📞 Responsive Support</h3>
                  <p>Fast response times with a team that understands your business. We prioritize critical issues and provide clear communication throughout the resolution process.</p>
                </div>
                
                <div className="benefit-item">
                  <h3>🔧 Complete Solution</h3>
                  <p>From websites to automation to IT management - we handle all your technology needs. One point of contact for all your digital business requirements.</p>
                </div>
                
                <div className="benefit-item">
                  <h3>📈 Scalable Services</h3>
                  <p>Our services grow with your business. Add employees, locations, or services without worrying about IT infrastructure limitations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Managed IT Service Packages</h2>
            
            <div className="package-grid">
              <div className="package-card">
                <h3>Essential IT Support</h3>
                <p className="package-subtitle">Perfect for Small Businesses</p>
                <ul className="package-features">
                  <li>Basic system monitoring</li>
                  <li>Software updates and patches</li>
                  <li>Email and phone support</li>
                  <li>Monthly backup verification</li>
                  <li>Basic security protection</li>
                </ul>
                <div className="package-cta">
                  <a href="/contact" className="btn btn-secondary">Request Quote</a>
                </div>
              </div>

              <div className="package-card featured-package">
                <div className="package-badge">Most Popular</div>
                <h3>Complete IT Management</h3>
                <p className="package-subtitle">Comprehensive Business Protection</p>
                <ul className="package-features">
                  <li>24/7 system monitoring and alerts</li>
                  <li>Proactive maintenance and optimization</li>
                  <li>Advanced cybersecurity protection</li>
                  <li>Daily automated backups</li>
                  <li>Remote and on-site support</li>
                  <li>Regular IT audits and reporting</li>
                </ul>
                <div className="package-cta">
                  <a href="/contact" className="btn btn-primary">Request Quote</a>
                </div>
              </div>

              <div className="package-card">
                <h3>Enterprise IT Solutions</h3>
                <p className="package-subtitle">Advanced Business Technology</p>
                <ul className="package-features">
                  <li>Custom IT infrastructure design</li>
                  <li>Advanced security and compliance</li>
                  <li>Disaster recovery planning</li>
                  <li>Technology strategic planning</li>
                  <li>Priority support and response</li>
                  <li>Dedicated account management</li>
                </ul>
                <div className="package-cta">
                  <a href="/contact" className="btn btn-secondary">Request Quote</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IT Security Focus */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Cybersecurity You Can Trust</h2>
            
            <div className="security-content">
              <div className="security-stats">
                <div className="stat-item">
                  <h4>60%</h4>
                  <p>of small businesses close within 6 months of a cyber attack</p>
                </div>
                <div className="stat-item">
                  <h4>$4.45M</h4>
                  <p>average cost of a data breach in 2023</p>
                </div>
                <div className="stat-item">
                  <h4>43%</h4>
                  <p>of cyber attacks target small businesses</p>
                </div>
              </div>
              
              <div className="security-features">
                <h3>Our Multi-Layer Security Approach</h3>
                <div className="security-layers">
                  <div className="security-layer">
                    <h4>🛡️ Network Protection</h4>
                    <p>Firewalls, intrusion detection, and network monitoring</p>
                  </div>
                  <div className="security-layer">
                    <h4>📧 Email Security</h4>
                    <p>Advanced spam filtering and phishing protection</p>
                  </div>
                  <div className="security-layer">
                    <h4>💻 Endpoint Protection</h4>
                    <p>Antivirus, anti-malware, and device management</p>
                  </div>
                  <div className="security-layer">
                    <h4>👥 User Training</h4>
                    <p>Security awareness training and best practices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">IT Services FAQ</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>What's included in managed IT services?</h3>
                <p>Our services include system monitoring, software updates, cybersecurity, backups, technical support, and regular IT audits. Specific features depend on your chosen package.</p>
              </div>
              
              <div className="faq-item">
                <h3>How quickly do you respond to IT issues?</h3>
                <p>Critical issues receive immediate attention (within 1 hour). Non-critical issues are typically addressed within 4-8 business hours, depending on your service level.</p>
              </div>
              
              <div className="faq-item">
                <h3>Do you work with businesses outside New Brunswick?</h3>
                <p>Yes! We serve clients across Canada and the United States. Most IT management is done remotely, with on-site visits arranged when needed.</p>
              </div>
              
              <div className="faq-item">
                <h3>Can you work with our existing IT setup?</h3>
                <p>Absolutely! We assess your current systems and integrate our services seamlessly. We can work with most existing hardware and software configurations.</p>
              </div>
              
              <div className="faq-item">
                <h3>What happens if you can't fix an issue remotely?</h3>
                <p>We coordinate on-site support through our network of trusted local technicians, or guide your team through solutions via phone/video support.</p>
              </div>
              
              <div className="faq-item">
                <h3>How do you handle data backup and recovery?</h3>
                <p>We implement automated daily backups with both cloud and local storage options. Regular testing ensures your data can be quickly recovered when needed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Ready for Worry-Free IT?</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Let us handle your technology so you can focus on what you do best - growing your business.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary" style={{ backgroundColor: 'white', color: '#000' }}>
                Request IT Assessment
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

// Additional styles for IT services page
const itServicesStyles = `
.it-services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.it-service-card {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.it-service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.featured-service {
  border-color: var(--primary-color);
  transform: scale(1.02);
}

.service-badge {
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

.service-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  text-align: center;
}

.it-service-card h3 {
  color: var(--primary-color);
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.4rem;
}

.service-features {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.service-features li {
  padding: 8px 0;
  color: var(--text-secondary);
  position: relative;
  padding-left: 20px;
}

.service-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

.service-benefit {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  color: var(--primary-color);
  font-weight: 600;
  text-align: center;
  font-size: 0.95rem;
}

.industry-it-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.industry-it-item {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.industry-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.industry-it-item h4 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.industry-it-item ul {
  list-style: none;
  padding: 0;
  text-align: left;
}

.industry-it-item li {
  padding: 5px 0;
  color: var(--text-secondary);
  position: relative;
  padding-left: 20px;
}

.industry-it-item li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-size: 0.8rem;
}

.msp-benefits {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.benefit-item {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.benefit-item h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.benefit-item p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.package-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.package-card {
  background: white;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  position: relative;
  transition: transform 0.3s ease;
}

.package-card:hover {
  transform: translateY(-5px);
}

.featured-package {
  border-color: var(--primary-color);
  transform: scale(1.05);
}

.package-badge {
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

.package-card h3 {
  color: var(--primary-color);
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.package-subtitle {
  color: var(--text-secondary);
  margin-bottom: 25px;
  font-weight: 500;
}

.package-features {
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
  text-align: left;
}

.package-features li {
  padding: 8px 0;
  color: var(--text-secondary);
  position: relative;
  padding-left: 20px;
}

.package-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

.security-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.security-stats {
  display: grid;
  gap: 30px;
}

.stat-item {
  background: white;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.stat-item h4 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.stat-item p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.4;
}

.security-features h3 {
  color: var(--primary-color);
  margin-bottom: 25px;
  font-size: 1.5rem;
}

.security-layers {
  display: grid;
  gap: 20px;
}

.security-layer {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.security-layer h4 {
  color: var(--primary-color);
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.security-layer p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .it-services-grid {
    grid-template-columns: 1fr;
  }
  
  .featured-service {
    transform: none;
  }
  
  .industry-it-grid {
    grid-template-columns: 1fr;
  }
  
  .package-grid {
    grid-template-columns: 1fr;
  }
  
  .featured-package {
    transform: none;
  }
  
  .security-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
`;

// Inject additional styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = itServicesStyles;
  document.head.appendChild(styleSheet);
}