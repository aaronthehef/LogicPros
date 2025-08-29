import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

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
              <h1>Complete Digital Solutions for New Brunswick Businesses</h1>
              <p className="hero-subheadline">
                Professional website design, AI automation, and cybersecurity services. 
                Everything you need to grow your business online and protect it from digital threats.
              </p>
              <a href="/contact" className="btn btn-primary">Schedule Free Consultation</a>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title" style={{ color: '#2c3e50' }}>Our Complete Service Portfolio</h2>
            <p style={{ fontSize: '1.2rem', color: '#5d6d7e', maxWidth: '800px', margin: '0 auto 50px', textAlign: 'center' }}>
              From professional websites that convert visitors into customers, to AI automation that saves time, 
              to cybersecurity that protects your business - we provide everything you need to succeed online.
            </p>
            
            <div className="services-grid">
              {/* Cybersecurity & Managed IT Services - MOVED TO TOP */}
              <div className="service-card">
                <div className="service-icon floating-icon">🔒</div>
                <h3 style={{ color: '#2c3e50' }}>Cybersecurity & Managed IT Services</h3>
                <p style={{ color: '#5d6d7e', lineHeight: '1.6', marginBottom: '20px' }}>
                  Complete cybersecurity protection with comprehensive security audits, multi-factor 
                  authentication, password management, and 24/7 managed IT services for total peace of mind.
                </p>
                <ul style={{ color: '#5d6d7e', paddingLeft: '20px', marginBottom: '20px' }}>
                  <li>Comprehensive security audits & vulnerability assessments</li>
                  <li>Multi-factor authentication (MFA) implementation</li>
                  <li>Enterprise password management systems</li>
                  <li>Endpoint security & automated patch management</li>
                  <li>24/7 system monitoring & managed IT support</li>
                  <li>Compliance & risk assessment services</li>
                </ul>
                <div className="cta-buttons">
                  <a href="/services/security-audits" className="btn btn-primary">Security Audits</a>
                  <a href="/services/multi-factor-authentication" className="btn btn-secondary">Learn More</a>
                </div>
              </div>

              {/* Professional Website Design */}
              <div className="service-card">
                <div className="service-icon floating-icon">🌐</div>
                <h3 style={{ color: '#2c3e50' }}>Professional Website Design</h3>
                <p style={{ color: '#5d6d7e', lineHeight: '1.6', marginBottom: '20px' }}>
                  Custom websites designed to convert visitors into customers. Mobile-optimized, 
                  fast-loading, and built with modern SEO best practices to grow your business online.
                </p>
                <ul style={{ color: '#5d6d7e', paddingLeft: '20px', marginBottom: '20px' }}>
                  <li>Responsive mobile-first design</li>
                  <li>Search engine optimization (SEO)</li>
                  <li>Fast loading speeds & performance</li>
                  <li>Content management systems</li>
                  <li>E-commerce integration</li>
                  <li>Ongoing maintenance & updates</li>
                </ul>
                <div className="cta-buttons">
                  <a href="/services/websites" className="btn btn-primary">Learn More</a>
                  <a href="/free-example" className="btn btn-secondary">Free Example</a>
                </div>
              </div>

              {/* AI Automation Solutions */}
              <div className="service-card">
                <div className="service-icon floating-icon">🤖</div>
                <h3 style={{ color: '#2c3e50' }}>AI Automation Solutions</h3>
                <p style={{ color: '#5d6d7e', lineHeight: '1.6', marginBottom: '20px' }}>
                  Intelligent chatbots and automation tools that handle customer inquiries 24/7, 
                  qualify leads, and streamline your business operations to save time and increase efficiency.
                </p>
                <ul style={{ color: '#5d6d7e', paddingLeft: '20px', marginBottom: '20px' }}>
                  <li>Custom AI chatbots for your website</li>
                  <li>Lead qualification automation</li>
                  <li>Customer support automation</li>
                  <li>Appointment scheduling bots</li>
                  <li>Email marketing automation</li>
                  <li>Business process optimization</li>
                </ul>
                <div className="cta-buttons">
                  <a href="/services/automations" className="btn btn-primary">Learn More</a>
                  <a href="/contact" className="btn btn-secondary">Get Quote</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Specializations */}
        <section className="section">
          <div className="container">
            <h2 className="section-title" style={{ color: '#2c3e50' }}>Industry-Specific Solutions</h2>
            <p style={{ fontSize: '1.1rem', color: '#5d6d7e', maxWidth: '700px', margin: '0 auto 50px', textAlign: 'center' }}>
              We understand that every industry has unique digital needs. Our solutions are tailored 
              to help your specific business type succeed online and stay secure.
            </p>
            
            <div className="features-grid">
              <div className="feature-item" style={{ textAlign: 'center', padding: '30px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🏗️</div>
                <h3 style={{ color: '#2c3e50', marginBottom: '20px' }}>Contractors & Trades</h3>
                <ul style={{ color: '#5d6d7e', textAlign: 'left', paddingLeft: '20px' }}>
                  <li>Lead-generating contractor websites</li>
                  <li>Job estimate automation with AI chatbots</li>
                  <li>Project management system security</li>
                  <li>Mobile-optimized quote forms</li>
                  <li>Customer database protection</li>
                </ul>
              </div>
              
              <div className="feature-item" style={{ textAlign: 'center', padding: '30px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>💼</div>
                <h3 style={{ color: '#2c3e50', marginBottom: '20px' }}>Professional Services</h3>
                <ul style={{ color: '#5d6d7e', textAlign: 'left', paddingLeft: '20px' }}>
                  <li>Professional service websites with booking</li>
                  <li>Client consultation automation</li>
                  <li>Secure client data management</li>
                  <li>Appointment scheduling chatbots</li>
                  <li>Compliance and confidentiality protection</li>
                </ul>
              </div>
              
              <div className="feature-item" style={{ textAlign: 'center', padding: '30px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🏪</div>
                <h3 style={{ color: '#2c3e50', marginBottom: '20px' }}>Retail & E-commerce</h3>
                <ul style={{ color: '#5d6d7e', textAlign: 'left', paddingLeft: '20px' }}>
                  <li>High-converting e-commerce websites</li>
                  <li>Product recommendation AI</li>
                  <li>Payment processing security</li>
                  <li>Inventory management automation</li>
                  <li>Customer support chatbots</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose LogicPros */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title" style={{ color: '#2c3e50' }}>Why Choose LogicPros for Your Digital Success</h2>
            <p style={{ fontSize: '1.1rem', color: '#5d6d7e', maxWidth: '700px', margin: '0 auto 50px', textAlign: 'center' }}>
              We're more than just a service provider - we're your digital growth partner, helping New Brunswick 
              businesses thrive online while staying secure and efficient.
            </p>
            
            <div className="features-grid">
              <div className="feature-item" style={{ textAlign: 'center', padding: '30px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🇨🇦</div>
                <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>New Brunswick Local</h3>
                <p style={{ color: '#5d6d7e' }}>Based right here in New Brunswick, we understand local business needs and provide personalized service you can't get from distant corporations.</p>
              </div>
              
              <div className="feature-item" style={{ textAlign: 'center', padding: '30px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎯</div>
                <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>Complete Digital Solution</h3>
                <p style={{ color: '#5d6d7e' }}>Websites, AI automation, and cybersecurity all under one roof. No need to juggle multiple vendors for your digital needs.</p>
              </div>
              
              <div className="feature-item" style={{ textAlign: 'center', padding: '30px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🚀</div>
                <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>Growth-Focused Approach</h3>
                <p style={{ color: '#5d6d7e' }}>Every solution is designed to help you get more customers, save time, and protect your business while you focus on growth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Preview */}
        <section className="section" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
          <div className="container">
            <h2 className="section-title" style={{ color: 'white', marginBottom: '40px' }}>Helping New Brunswick Businesses Succeed</h2>
            
            <div className="features-grid">
              <div style={{ textAlign: 'center', padding: '30px', background: 'rgba(255,255,255,0.1)', borderRadius: '15px', backdropFilter: 'blur(10px)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📈</div>
                <h3 style={{ color: 'white', marginBottom: '15px' }}>300% Lead Increase</h3>
                <p style={{ color: 'white', opacity: '0.9' }}>Fredericton contractor saw 3x more leads after website redesign and AI chatbot implementation</p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '30px', background: 'rgba(255,255,255,0.1)', borderRadius: '15px', backdropFilter: 'blur(10px)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🛡️</div>
                <h3 style={{ color: 'white', marginBottom: '15px' }}>Zero Security Incidents</h3>
                <p style={{ color: 'white', opacity: '0.9' }}>Moncton professional services firm prevented cyber attacks with our comprehensive security audit</p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '30px', background: 'rgba(255,255,255,0.1)', borderRadius: '15px', backdropFilter: 'blur(10px)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>⏱️</div>
                <h3 style={{ color: 'white', marginBottom: '15px' }}>10 Hours Saved Weekly</h3>
                <p style={{ color: 'white', opacity: '0.9' }}>Saint John retailer saves time with automated customer inquiries and appointment scheduling</p>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <a href="/contact" className="btn btn-primary" style={{ background: 'white', color: '#667eea', padding: '15px 30px', fontWeight: '600' }}>Get Your Success Story</a>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="section">
          <div className="container">
            <h2 className="section-title" style={{ color: '#2c3e50' }}>Complete Digital Growth Packages</h2>
            <p style={{ fontSize: '1.1rem', color: '#5d6d7e', maxWidth: '700px', margin: '0 auto 50px', textAlign: 'center' }}>
              Choose the perfect combination of website design, AI automation, and cybersecurity 
              services to take your business to the next level.
            </p>
            
            <div className="services-grid">
              <div className="service-card" style={{ border: '2px solid #3498db' }}>
                <div className="service-icon floating-icon" style={{ color: '#3498db' }}>🌱</div>
                <h3 style={{ color: '#2c3e50' }}>Starter Growth Package</h3>
                <p style={{ color: '#5d6d7e', marginBottom: '20px', fontWeight: '500' }}>Perfect for New Businesses</p>
                <ul style={{ color: '#5d6d7e', paddingLeft: '20px', marginBottom: '25px' }}>
                  <li>Professional 5-page website</li>
                  <li>Basic AI chatbot for inquiries</li>
                  <li>Essential security audit</li>
                  <li>SSL certificate & basic protection</li>
                  <li>Mobile optimization</li>
                  <li>3 months support included</li>
                </ul>
                <div className="cta-buttons">
                  <a href="/contact" className="btn btn-primary">Get Quote</a>
                </div>
              </div>

              <div className="service-card" style={{ border: '3px solid #e74c3c', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: '#e74c3c', color: 'white', padding: '8px 20px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '600' }}>Most Popular</div>
                <div className="service-icon floating-icon" style={{ color: '#e74c3c' }}>🚀</div>
                <h3 style={{ color: '#2c3e50' }}>Complete Business Package</h3>
                <p style={{ color: '#5d6d7e', marginBottom: '20px', fontWeight: '500' }}>Everything You Need to Succeed</p>
                <ul style={{ color: '#5d6d7e', paddingLeft: '20px', marginBottom: '25px' }}>
                  <li>Custom website with lead generation</li>
                  <li>Advanced AI chatbot & automation</li>
                  <li>Comprehensive security audit</li>
                  <li>Multi-factor authentication setup</li>
                  <li>Password management system</li>
                  <li>6 months support & optimization</li>
                </ul>
                <div className="cta-buttons">
                  <a href="/contact" className="btn btn-primary">Get Quote</a>
                </div>
              </div>

              <div className="service-card" style={{ border: '2px solid #8e44ad' }}>
                <div className="service-icon floating-icon" style={{ color: '#8e44ad' }}>🏆</div>
                <h3 style={{ color: '#2c3e50' }}>Enterprise Solution</h3>
                <p style={{ color: '#5d6d7e', marginBottom: '20px', fontWeight: '500' }}>Maximum Growth & Protection</p>
                <ul style={{ color: '#5d6d7e', paddingLeft: '20px', marginBottom: '25px' }}>
                  <li>Custom e-commerce or advanced website</li>
                  <li>Full AI automation suite</li>
                  <li>Complete cybersecurity implementation</li>
                  <li>24/7 monitoring & managed IT</li>
                  <li>Priority support & dedicated account manager</li>
                  <li>12 months comprehensive service</li>
                </ul>
                <div className="cta-buttons">
                  <a href="/contact" className="btn btn-primary">Get Quote</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Growth Statistics */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title" style={{ color: '#2c3e50' }}>The Digital Advantage for New Brunswick Businesses</h2>
            <p style={{ fontSize: '1.1rem', color: '#5d6d7e', maxWidth: '800px', margin: '0 auto 40px', textAlign: 'center' }}>
              Modern digital solutions aren't just nice to have - they're essential for business growth and protection in today's competitive landscape.
            </p>
            
            <div className="features-grid" style={{ marginBottom: '50px' }}>
              <div style={{ textAlign: 'center', padding: '30px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '3rem', color: '#3498db', fontWeight: '700', margin: '0 0 15px 0' }}>75%</h3>
                <h4 style={{ color: '#2c3e50', marginBottom: '15px' }}>More Leads with Professional Websites</h4>
                <p style={{ color: '#5d6d7e', fontSize: '0.95rem' }}>Businesses with modern, mobile-optimized websites generate significantly more qualified leads</p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '30px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '3rem', color: '#e74c3c', fontWeight: '700', margin: '0 0 15px 0' }}>60%</h3>
                <h4 style={{ color: '#2c3e50', marginBottom: '15px' }}>Time Saved with AI Automation</h4>
                <p style={{ color: '#5d6d7e', fontSize: '0.95rem' }}>Businesses using AI chatbots reduce customer service workload by over half</p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '30px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '3rem', color: '#8e44ad', fontWeight: '700', margin: '0 0 15px 0' }}>99.9%</h3>
                <h4 style={{ color: '#2c3e50', marginBottom: '15px' }}>Attack Prevention with MFA</h4>
                <p style={{ color: '#5d6d7e', fontSize: '0.95rem' }}>Multi-factor authentication blocks nearly all automated password attacks</p>
              </div>
            </div>
            
            <div style={{ background: 'white', borderRadius: '20px', padding: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              <h3 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '30px', fontSize: '1.5rem' }}>The Complete Digital Growth Formula</h3>
              <div className="features-grid" style={{ gap: '30px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🌐</div>
                  <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>Professional Website</h4>
                  <p style={{ color: '#5d6d7e', fontSize: '0.9rem' }}>Attracts and converts visitors into customers 24/7</p>
                </div>
                <div style={{ textAlign: 'center', fontSize: '2rem', color: '#ddd' }}>+</div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🤖</div>
                  <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>AI Automation</h4>
                  <p style={{ color: '#5d6d7e', fontSize: '0.9rem' }}>Handles inquiries and qualifies leads automatically</p>
                </div>
                <div style={{ textAlign: 'center', fontSize: '2rem', color: '#ddd' }}>+</div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🔒</div>
                  <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>Cybersecurity</h4>
                  <p style={{ color: '#5d6d7e', fontSize: '0.9rem' }}>Protects your business and customer data</p>
                </div>
                <div style={{ textAlign: 'center', fontSize: '2rem', color: '#ddd' }}>=</div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>📈</div>
                  <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>Business Growth</h4>
                  <p style={{ color: '#5d6d7e', fontSize: '0.9rem' }}>More customers, less work, complete protection</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grant Information */}
        <section className="section" style={{ backgroundColor: '#e8f5e8' }}>
          <div className="container">
            <div style={{ textAlign: 'center' }}>
              <h2 className="section-title" style={{ color: '#2c3e50', marginBottom: '20px' }}>Funding Opportunities Available</h2>
              <p style={{ fontSize: '1.2rem', color: '#5d6d7e', maxWidth: '700px', margin: '0 auto 30px' }}>
                New Brunswick businesses may be eligible for various grants to help cover website development, 
                AI automation, and cybersecurity implementation costs. We can help you research available programs.
              </p>
              <div style={{ background: 'white', borderRadius: '15px', padding: '30px', marginBottom: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <h3 style={{ color: '#27ae60', marginBottom: '15px' }}>🌱 Digital Transformation Grants</h3>
                <p style={{ color: '#5d6d7e', marginBottom: '15px' }}>Many programs support website development, e-commerce, and digital marketing initiatives</p>
                <h3 style={{ color: '#3498db', marginBottom: '15px' }}>🔒 Cybersecurity Funding</h3>
                <p style={{ color: '#5d6d7e', marginBottom: '15px' }}>Special funding available for security audits, MFA implementation, and IT infrastructure</p>
                <h3 style={{ color: '#e74c3c', marginBottom: '15px' }}>🤖 Innovation & AI Support</h3>
                <p style={{ color: '#5d6d7e' }}>Grants for businesses adopting AI and automation technologies to improve efficiency</p>
              </div>
              <a href="/contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '15px 30px' }}>
                Help Me Find Grant Opportunities
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section" style={{ background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)', color: 'white' }}>
          <div className="container">
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ marginBottom: '25px', fontSize: '2.5rem', color: 'white' }}>Ready to Transform Your Business?</h2>
              <p style={{ fontSize: '1.3rem', opacity: '0.9', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}>
                Join hundreds of New Brunswick businesses who've chosen LogicPros for their complete digital transformation. 
                Get more customers, save time, and stay secure.
              </p>
              
              <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '15px', padding: '30px', marginBottom: '40px' }}>
                <h3 style={{ marginBottom: '20px', fontSize: '1.3rem', color: 'white' }}>🎯 What Happens Next?</h3>
                <div className="features-grid" style={{ textAlign: 'center' }}>
                  <div>
                    <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>📞</div>
                    <p style={{ fontSize: '0.95rem', opacity: '0.9', color: 'white' }}>Free consultation to understand your needs</p>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>📊</div>
                    <p style={{ fontSize: '0.95rem', opacity: '0.9', color: 'white' }}>Custom proposal with transparent pricing</p>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>🚀</div>
                    <p style={{ fontSize: '0.95rem', opacity: '0.9', color: 'white' }}>Professional implementation & support</p>
                  </div>
                </div>
              </div>
              
              <div className="cta-buttons">
                <a href="/contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '15px 35px', marginRight: '20px', background: 'white', color: '#2c3e50' }}>Get Started Today</a>
                <a href="/free-example" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '15px 35px', background: 'transparent', border: '2px solid white', color: 'white' }}>See Free Example</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// This page now uses standard CSS classes from responsive-style.css