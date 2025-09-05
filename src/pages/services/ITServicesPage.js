import React, { useEffect } from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { colors } from '../../styles/colors';

export const ITServicesPage = () => {
  useEffect(() => {
    // Hero background animation styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes panLeft {
        0% { transform: translateX(0); }
        100% { transform: translateX(-200px); }
      }
      @keyframes pulse {
        0%, 100% { opacity: 0.7; }
        50% { opacity: 0.9; }
      }
      @keyframes glow {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.4); }
      }
      @keyframes float1 {
        0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; }
        33% { transform: translate(30px, -50px) rotate(120deg); opacity: 0.6; }
        66% { transform: translate(-20px, -80px) rotate(240deg); opacity: 0.4; }
      }
      @keyframes float2 {
        0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
        50% { transform: translate(-40px, -60px) rotate(180deg); opacity: 0.2; }
      }
      @keyframes float3 {
        0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.2; }
        25% { transform: translate(50px, -30px) rotate(90deg); opacity: 0.5; }
        75% { transform: translate(-30px, -70px) rotate(270deg); opacity: 0.3; }
      }
      .hero-background-svg {
        animation: panLeft 30s linear infinite, pulse 4s ease-in-out infinite;
      }
      .tech-nodes circle {
        animation: glow 3s ease-in-out infinite alternate;
      }
      .glowing-orbs circle {
        animation: pulse 2s ease-in-out infinite alternate;
      }
      .floating-particle {
        position: absolute;
        pointer-events: none;
        z-index: 1;
      }
      .floating-particle:nth-child(1) { animation: float1 15s ease-in-out infinite; }
      .floating-particle:nth-child(2) { animation: float2 18s ease-in-out infinite; }
      .floating-particle:nth-child(3) { animation: float3 20s ease-in-out infinite; }
      .floating-particle:nth-child(4) { animation: float1 22s ease-in-out infinite reverse; }
      .floating-particle:nth-child(5) { animation: float2 16s ease-in-out infinite reverse; }
      .floating-particle:nth-child(6) { animation: float3 25s ease-in-out infinite reverse; }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

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
        <section className="hero-section homepage-hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', overflow: 'hidden' }}>
          <svg 
            className="hero-background-svg"
            style={{ 
              position: 'absolute', 
              top: '-10%', 
              left: '-10%', 
              width: '120%', 
              height: '120%', 
              zIndex: 1,
              opacity: 0.7
            }} 
            viewBox="0 0 1200 800" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="techGradientIT" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1d7aaf" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
              <linearGradient id="pulseGradientIT" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1d7aaf" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#1e40af" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#1d7aaf" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            
            {/* Main Grid Lines */}
            <g className="grid-lines" filter="blur(0.5px)">
              <line x1="0" y1="100" x2="1200" y2="100" stroke="#1d7aaf" strokeWidth="1.5" opacity="0.4" strokeDasharray="20,10" />
              <line x1="0" y1="200" x2="1200" y2="200" stroke="#1e40af" strokeWidth="1.5" opacity="0.3" strokeDasharray="15,15" />
              <line x1="0" y1="300" x2="1200" y2="300" stroke="#1d7aaf" strokeWidth="2" opacity="0.5" strokeDasharray="25,5" />
              <line x1="0" y1="400" x2="1200" y2="400" stroke="#1e40af" strokeWidth="1" opacity="0.2" strokeDasharray="30,10" />
              <line x1="0" y1="500" x2="1200" y2="500" stroke="#1d7aaf" strokeWidth="1.5" opacity="0.3" strokeDasharray="20,15" />
              
              <line x1="200" y1="0" x2="200" y2="800" stroke="#1d7aaf" strokeWidth="1.5" opacity="0.2" strokeDasharray="20,10" />
              <line x1="400" y1="0" x2="400" y2="800" stroke="#1e40af" strokeWidth="1.5" opacity="0.3" strokeDasharray="15,15" />
              <line x1="600" y1="0" x2="600" y2="800" stroke="#1d7aaf" strokeWidth="2" opacity="0.4" strokeDasharray="25,5" />
              <line x1="800" y1="0" x2="800" y2="800" stroke="#1e40af" strokeWidth="1" opacity="0.1" strokeDasharray="30,10" />
              <line x1="1000" y1="0" x2="1000" y2="800" stroke="#1d7aaf" strokeWidth="1.5" opacity="0.2" strokeDasharray="20,15" />
            </g>

            {/* Circuit Board Patterns */}
            <g className="circuit-patterns" filter="blur(0.3px)">
              <path d="M100,150 L250,150 L270,170 L400,170 L420,150 L600,150" stroke="#1d7aaf" strokeWidth="1" opacity="0.4" fill="none" strokeDasharray="5,3" />
              <path d="M150,250 L300,250 L320,230 L500,230 L520,250 L750,250" stroke="#1e40af" strokeWidth="1" opacity="0.3" fill="none" strokeDasharray="8,4" />
              <path d="M80,350 L200,350 L220,330 L350,330 L370,350 L550,350" stroke="#1d7aaf" strokeWidth="1.5" opacity="0.5" fill="none" strokeDasharray="6,2" />
              
              <path d="M300,50 L300,180 L280,200 L280,320 L300,340 L300,450" stroke="#1e40af" strokeWidth="1" opacity="0.2" fill="none" strokeDasharray="4,3" />
              <path d="M500,80 L500,200 L520,220 L520,300 L500,320 L500,480" stroke="#1d7aaf" strokeWidth="1" opacity="0.3" fill="none" strokeDasharray="7,3" />
              <path d="M700,60 L700,150 L680,170 L680,280 L700,300 L700,420" stroke="#1e40af" strokeWidth="1.5" opacity="0.4" fill="none" strokeDasharray="5,4" />
            </g>

            {/* Tech Nodes/Connection Points */}
            <g className="tech-nodes">
              <circle cx="150" cy="120" r="4" fill="#1d7aaf" opacity="0.9" />
              <circle cx="270" cy="170" r="3" fill="#1e40af" opacity="0.8" />
              <circle cx="420" cy="150" r="5" fill="#1d7aaf" opacity="1.0" />
              <circle cx="350" cy="180" r="3" fill="#1e40af" opacity="0.7" />
              <circle cx="520" cy="250" r="4" fill="#1d7aaf" opacity="0.8" />
              <circle cx="650" cy="110" r="6" fill="#1e40af" opacity="0.9" />
              <circle cx="850" cy="200" r="3" fill="#1d7aaf" opacity="0.9" />
              <circle cx="950" cy="140" r="4" fill="#1e40af" opacity="0.8" />
              <circle cx="300" cy="340" r="5" fill="#1d7aaf" opacity="0.9" />
              <circle cx="500" cy="320" r="3" fill="#1e40af" opacity="0.7" />
              <circle cx="700" cy="300" r="4" fill="#1d7aaf" opacity="0.8" />
            </g>

            {/* Glowing Orbs */}
            <g className="glowing-orbs">
              <circle cx="100" cy="100" r="8" fill="url(#techGradientIT)" opacity="0.4" />
              <circle cx="900" cy="300" r="6" fill="url(#techGradientIT)" opacity="0.5" />
              <circle cx="1100" cy="150" r="10" fill="url(#techGradientIT)" opacity="0.3" />
              <circle cx="200" cy="400" r="7" fill="url(#techGradientIT)" opacity="0.4" />
            </g>
          </svg>

          {/* Floating Particles */}
          <div className="floating-particle" style={{ top: '15%', left: '10%', width: '4px', height: '4px', background: '#1d7aaf', borderRadius: '50%' }}></div>
          <div className="floating-particle" style={{ top: '25%', right: '15%', width: '6px', height: '6px', background: '#1e40af', borderRadius: '50%' }}></div>
          <div className="floating-particle" style={{ top: '45%', left: '20%', width: '3px', height: '3px', background: '#1d7aaf', borderRadius: '50%' }}></div>
          <div className="floating-particle" style={{ top: '35%', right: '25%', width: '5px', height: '5px', background: '#1e40af', borderRadius: '50%' }}></div>
          <div className="floating-particle" style={{ top: '60%', left: '15%', width: '4px', height: '4px', background: '#1d7aaf', borderRadius: '50%' }}></div>
          <div className="floating-particle" style={{ top: '70%', right: '20%', width: '3px', height: '3px', background: '#1e40af', borderRadius: '50%' }}></div>

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="hero-content" style={{ color: 'white', textAlign: 'center' }}>
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
                fontWeight: '900', 
                lineHeight: '0.9', 
                marginBottom: '1rem',
                color: 'white',
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                letterSpacing: '-0.02em'
              }}>Complete Digital Solutions for New Brunswick Businesses</h1>
              <p style={{ 
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                marginBottom: '40px',
                maxWidth: '700px',
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: '1.7',
                fontWeight: '300',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)'
              }}>
                Professional website design, AI automation, and cybersecurity services. 
                Everything you need to grow your business online and protect it from digital threats.
              </p>
              <div style={{ 
                display: 'flex',
                justifyContent: 'center',
                gap: '15px',
                flexWrap: 'wrap'
              }}>
                <a href="/contact" className="btn btn-primary" style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.9) 100%)',
                  color: '#1a1a2e',
                  border: '2px solid rgba(255, 255, 255, 0.8)',
                  padding: '18px 40px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '50px',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  backdropFilter: 'blur(10px)'
                }}>Schedule Free Consultation</a>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <h2 className="section-title" style={{ color: colors.text.primary }}>Our Complete Service Portfolio</h2>
            <p style={{ fontSize: '1.2rem', color: colors.text.secondary, maxWidth: '800px', margin: '0 auto 50px', textAlign: 'center' }}>
              From professional websites that convert visitors into customers, to AI automation that saves time, 
              to cybersecurity that protects your business - we provide everything you need to succeed online.
            </p>
            
            <div className="services-grid">
              {/* Cybersecurity & Managed IT Services - MOVED TO TOP */}
              <div className="service-card">
                <div className="service-icon floating-icon">🔒</div>
                <h3 style={{ color: colors.text.primary }}>Cybersecurity & IT Services</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6', marginBottom: '20px' }}>
                  Professional cybersecurity services including security audits, MFA, and managed IT support to protect your business from cyber threats.
                </p>
                <ul style={{ color: colors.text.secondary, paddingLeft: '20px', marginBottom: '20px' }}>
                  <li>Security audits & vulnerability assessments</li>
                  <li>Multi-factor authentication (MFA)</li>
                  <li>Password management systems</li>
                  <li>Endpoint security & patch management</li>
                  <li>24/7 system monitoring & IT support</li>
                  <li>Compliance & risk assessment</li>
                </ul>
                <div className="cta-buttons">
                  <a href="/services/security-audits" className="btn btn-primary">Learn More</a>
                  <a href="/free-example" className="btn btn-secondary">Get Quote</a>
                </div>
              </div>

              {/* Professional Website Design */}
              <div className="service-card">
                <div className="service-icon floating-icon">🌐</div>
                <h3 style={{ color: colors.text.primary }}>Website Design & Development</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6', marginBottom: '20px' }}>
                  Custom websites designed to convert visitors into customers. Mobile-optimized, fast-loading, and built with modern SEO practices.
                </p>
                <ul style={{ color: colors.text.secondary, paddingLeft: '20px', marginBottom: '20px' }}>
                  <li>Responsive mobile-first design</li>
                  <li>Search engine optimization (SEO)</li>
                  <li>Fast loading speeds & performance</li>
                  <li>Content management systems</li>
                  <li>E-commerce integration</li>
                  <li>Ongoing maintenance & updates</li>
                </ul>
                <div className="cta-buttons">
                  <a href="/services/websites" className="btn btn-primary">Learn More</a>
                  <a href="/free-example" className="btn btn-secondary">Get Quote</a>
                </div>
              </div>

              {/* AI Automation Solutions */}
              <div className="service-card">
                <div className="service-icon floating-icon">🤖</div>
                <h3 style={{ color: colors.text.primary }}>AI Automation Solutions</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6', marginBottom: '20px' }}>
                  Intelligent chatbots and automation tools that handle customer inquiries, qualify leads, and streamline business operations.
                </p>
                <ul style={{ color: colors.text.secondary, paddingLeft: '20px', marginBottom: '20px' }}>
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
            <h2 className="section-title" style={{ color: 'colors.text.primary' }}>Industry-Specific Solutions</h2>
            <p style={{ fontSize: '1.1rem', color: 'colors.text.secondary', maxWidth: '700px', margin: '0 auto 50px', textAlign: 'center' }}>
              We understand that every industry has unique digital needs. Our solutions are tailored 
              to help your specific business type succeed online and stay secure.
            </p>
            
            <div className="features-grid">
              <div className="feature-item" style={{ textAlign: 'center', padding: '30px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🏗️</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '20px', fontSize: '1.3rem' }}>Contractors & Trades</h3>
                <ul style={{ color: colors.text.secondary, textAlign: 'left', paddingLeft: '20px', fontSize: '1rem' }}>
                  <li>Lead-generating contractor websites</li>
                  <li>Job estimate automation with AI chatbots</li>
                  <li>Project management system security</li>
                  <li>Mobile-optimized quote forms</li>
                  <li>Customer database protection</li>
                </ul>
              </div>
              
              <div className="feature-item" style={{ textAlign: 'center', padding: '30px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>💼</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '20px', fontSize: '1.3rem' }}>Professional Services</h3>
                <ul style={{ color: colors.text.secondary, textAlign: 'left', paddingLeft: '20px', fontSize: '1rem' }}>
                  <li>Professional service websites with booking</li>
                  <li>Client consultation automation</li>
                  <li>Secure client data management</li>
                  <li>Appointment scheduling chatbots</li>
                  <li>Compliance and confidentiality protection</li>
                </ul>
              </div>
              
              <div className="feature-item" style={{ textAlign: 'center', padding: '30px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🏪</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '20px', fontSize: '1.3rem' }}>Retail & E-commerce</h3>
                <ul style={{ color: colors.text.secondary, textAlign: 'left', paddingLeft: '20px', fontSize: '1rem' }}>
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
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <h2 className="section-title" style={{ color: 'colors.text.primary' }}>Why Choose LogicPros for Your Digital Success</h2>
            <p style={{ fontSize: '1.1rem', color: 'colors.text.secondary', maxWidth: '700px', margin: '0 auto 50px', textAlign: 'center' }}>
              We're more than just a service provider - we're your digital growth partner, helping New Brunswick 
              businesses thrive online while staying secure and efficient.
            </p>
            
            <div className="features-grid">
              <div className="feature-item" style={{ textAlign: 'center', padding: '30px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🇨🇦</div>
                <h3 style={{ color: 'colors.text.primary', marginBottom: '15px' }}>New Brunswick Local</h3>
                <p style={{ color: 'colors.text.secondary' }}>Based right here in New Brunswick, we understand local business needs and provide personalized service you can't get from distant corporations.</p>
              </div>
              
              <div className="feature-item" style={{ textAlign: 'center', padding: '30px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎯</div>
                <h3 style={{ color: 'colors.text.primary', marginBottom: '15px' }}>Complete Digital Solution</h3>
                <p style={{ color: 'colors.text.secondary' }}>Websites, AI automation, and cybersecurity all under one roof. No need to juggle multiple vendors for your digital needs.</p>
              </div>
              
              <div className="feature-item" style={{ textAlign: 'center', padding: '30px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🚀</div>
                <h3 style={{ color: 'colors.text.primary', marginBottom: '15px' }}>Growth-Focused Approach</h3>
                <p style={{ color: 'colors.text.secondary' }}>Every solution is designed to help you get more customers, save time, and protect your business while you focus on growth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Preview */}
        <section className="section" style={{ background: colors.backgrounds.gradientPrimary, color: colors.text.light }}>
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
              <a href="/contact" className="btn btn-primary" style={{ background: colors.accent, color: colors.text.light, padding: '15px 30px', fontWeight: '600' }}>Get Your Success Story</a>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="section">
          <div className="container">
            <h2 className="section-title" style={{ color: 'colors.text.primary' }}>Complete Digital Growth Packages</h2>
            <p style={{ fontSize: '1.1rem', color: 'colors.text.secondary', maxWidth: '700px', margin: '0 auto 50px', textAlign: 'center' }}>
              Choose the perfect combination of website design, AI automation, and cybersecurity 
              services to take your business to the next level.
            </p>
            
            <div className="services-grid">
              <div className="service-card" style={{ border: '2px solid #3498db' }}>
                <div className="service-icon floating-icon" style={{ color: '#3498db' }}>🌱</div>
                <h3 style={{ color: 'colors.text.primary' }}>Starter Growth Package</h3>
                <p style={{ color: 'colors.text.secondary', marginBottom: '20px', fontWeight: '500' }}>Perfect for New Businesses</p>
                <ul style={{ color: 'colors.text.secondary', paddingLeft: '20px', marginBottom: '25px' }}>
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

              <div className="service-card" style={{ border: `3px solid ${colors.accent}`, position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: colors.accent, color: 'white', padding: '8px 20px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '600' }}>Most Popular</div>
                <div className="service-icon floating-icon" style={{ color: colors.accent }}>🚀</div>
                <h3 style={{ color: 'colors.text.primary' }}>Complete Business Package</h3>
                <p style={{ color: 'colors.text.secondary', marginBottom: '20px', fontWeight: '500' }}>Everything You Need to Succeed</p>
                <ul style={{ color: 'colors.text.secondary', paddingLeft: '20px', marginBottom: '25px' }}>
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
                <h3 style={{ color: 'colors.text.primary' }}>Enterprise Solution</h3>
                <p style={{ color: 'colors.text.secondary', marginBottom: '20px', fontWeight: '500' }}>Maximum Growth & Protection</p>
                <ul style={{ color: 'colors.text.secondary', paddingLeft: '20px', marginBottom: '25px' }}>
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
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <h2 className="section-title" style={{ color: 'colors.text.primary' }}>The Digital Advantage for New Brunswick Businesses</h2>
            <p style={{ fontSize: '1.1rem', color: 'colors.text.secondary', maxWidth: '800px', margin: '0 auto 40px', textAlign: 'center' }}>
              Modern digital solutions aren't just nice to have - they're essential for business growth and protection in today's competitive landscape.
            </p>
            
            <div className="features-grid" style={{ marginBottom: '50px' }}>
              <div style={{ textAlign: 'center', padding: '30px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '3rem', color: '#3498db', fontWeight: '700', margin: '0 0 15px 0' }}>75%</h3>
                <h4 style={{ color: 'colors.text.primary', marginBottom: '15px' }}>More Leads with Professional Websites</h4>
                <p style={{ color: 'colors.text.secondary', fontSize: '0.95rem' }}>Businesses with modern, mobile-optimized websites generate significantly more qualified leads</p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '30px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '3rem', color: colors.accent, fontWeight: '700', margin: '0 0 15px 0' }}>60%</h3>
                <h4 style={{ color: 'colors.text.primary', marginBottom: '15px' }}>Time Saved with AI Automation</h4>
                <p style={{ color: 'colors.text.secondary', fontSize: '0.95rem' }}>Businesses using AI chatbots reduce customer service workload by over half</p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '30px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '3rem', color: '#8e44ad', fontWeight: '700', margin: '0 0 15px 0' }}>99.9%</h3>
                <h4 style={{ color: 'colors.text.primary', marginBottom: '15px' }}>Attack Prevention with MFA</h4>
                <p style={{ color: 'colors.text.secondary', fontSize: '0.95rem' }}>Multi-factor authentication blocks nearly all automated password attacks</p>
              </div>
            </div>
            
            <div style={{ background: 'white', borderRadius: '20px', padding: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              <h3 style={{ textAlign: 'center', color: colors.text.primary, marginBottom: '30px', fontSize: '1.5rem' }}>The Complete Digital Growth Formula</h3>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', minHeight: '140px', justifyContent: 'space-between', width: '160px', flex: '0 0 160px' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🌐</div>
                  <h4 style={{ color: colors.text.primary, marginBottom: '10px' }}>Professional Website</h4>
                  <p style={{ color: colors.text.secondary, fontSize: '0.9rem' }}>Attracts and converts visitors into customers 24/7</p>
                </div>
                <div style={{ textAlign: 'center', fontSize: '1.5rem', color: colors.text.secondary, flex: '0 0 auto', padding: '0 10px' }}>+</div>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', minHeight: '140px', justifyContent: 'space-between', width: '160px', flex: '0 0 160px' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🤖</div>
                  <h4 style={{ color: colors.text.primary, marginBottom: '10px' }}>AI Automation</h4>
                  <p style={{ color: colors.text.secondary, fontSize: '0.9rem' }}>Handles inquiries and qualifies leads automatically</p>
                </div>
                <div style={{ textAlign: 'center', fontSize: '1.5rem', color: colors.text.secondary, flex: '0 0 auto', padding: '0 10px' }}>+</div>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', minHeight: '140px', justifyContent: 'space-between', width: '160px', flex: '0 0 160px' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🔒</div>
                  <h4 style={{ color: colors.text.primary, marginBottom: '10px' }}>Cybersecurity</h4>
                  <p style={{ color: colors.text.secondary, fontSize: '0.9rem' }}>Protects your business and customer data</p>
                </div>
                <div style={{ textAlign: 'center', fontSize: '1.5rem', color: colors.accent, flex: '0 0 auto', padding: '0 10px', fontWeight: 'bold' }}>=</div>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', minHeight: '140px', justifyContent: 'space-between', width: '160px', flex: '0 0 160px' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>📈</div>
                  <h4 style={{ color: colors.text.primary, marginBottom: '10px' }}>Business Growth</h4>
                  <p style={{ color: colors.text.secondary, fontSize: '0.9rem' }}>More customers, less work, complete protection</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grant Information */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <div style={{ textAlign: 'center' }}>
              <h2 className="section-title" style={{ color: colors.text.primary, marginBottom: '20px' }}>Funding Opportunities Available</h2>
              <p style={{ fontSize: '1.2rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto 30px' }}>
                New Brunswick businesses may be eligible for various grants to help cover website development, 
                AI automation, and cybersecurity implementation costs. We can help you research available programs.
              </p>
              <div style={{ background: 'white', borderRadius: '15px', padding: '30px', marginBottom: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <h3 style={{ color: colors.primary, marginBottom: '15px' }}>🌱 Digital Transformation Grants</h3>
                <p style={{ color: colors.text.secondary, marginBottom: '15px' }}>Many programs support website development, e-commerce, and digital marketing initiatives</p>
                <h3 style={{ color: colors.primary, marginBottom: '15px' }}>🔒 Cybersecurity Funding</h3>
                <p style={{ color: colors.text.secondary, marginBottom: '15px' }}>Special funding available for security audits, MFA implementation, and IT infrastructure</p>
                <h3 style={{ color: colors.accent, marginBottom: '15px' }}>🤖 Innovation & AI Support</h3>
                <p style={{ color: colors.text.secondary }}>Grants for businesses adopting AI and automation technologies to improve efficiency</p>
              </div>
              <a href="/contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '15px 30px' }}>
                Help Me Find Grant Opportunities
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section" style={{ background: colors.backgrounds.gradientPrimary, color: colors.text.light }}>
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
                <a href="/contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '15px 35px', marginRight: '20px', background: colors.accent, color: colors.text.light }}>Get Started Today</a>
                <a href="/free-example" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '15px 35px', background: 'transparent', border: `2px solid ${colors.text.light}`, color: colors.text.light }}>See Free Example</a>
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