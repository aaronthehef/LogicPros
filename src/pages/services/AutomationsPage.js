import React, { useEffect } from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { colors } from '../../styles/colors';

export const AutomationsPage = () => {
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
              <linearGradient id="techGradientAuto" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1d7aaf" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
              <linearGradient id="pulseGradientAuto" x1="0%" y1="0%" x2="100%" y2="0%">
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
              <circle cx="100" cy="100" r="8" fill="url(#techGradientAuto)" opacity="0.4" />
              <circle cx="900" cy="300" r="6" fill="url(#techGradientAuto)" opacity="0.5" />
              <circle cx="1100" cy="150" r="10" fill="url(#techGradientAuto)" opacity="0.3" />
              <circle cx="200" cy="400" r="7" fill="url(#techGradientAuto)" opacity="0.4" />
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
              }}>AI Business Automations That Work While You Sleep</h1>
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
                Google review request systems, social media auto-posting, calendar integrations, and more. 
                Full backend setup with ongoing monitoring using the powerful n8n automation platform. 
                Save hours each week with intelligent business automation.
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

        {/* Core Automations */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Essential Business Automations</h2>
            <p className="service-intro">
              These proven automations handle repetitive tasks so you can focus on what matters most - 
              growing your business and serving customers.
            </p>
            
            <div className="automation-grid">
              <div className="automation-card">
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
            
            <div className="features-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
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
            
            <div style={{ textAlign: 'center', marginTop: '50px', padding: '30px', backgroundColor: 'rgba(26, 121, 175, 0.05)', borderRadius: '12px', border: '1px solid rgba(26, 121, 175, 0.1)' }}>
              <p style={{ color: colors.text.secondary, fontSize: '1.1rem', marginBottom: '20px' }}>Ready to eliminate repetitive tasks in your business?</p>
              <a href="/contact" className="btn btn-primary">Get Your Free Automation Assessment</a>
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
                
                <h3>💰 Value-Driven</h3>
                <p>No per-automation fees or usage limits. Once set up, your automations run reliably without ongoing subscription fees.</p>
                
                <h3>🔒 Data Security</h3>
                <p>All data stays on your servers or our secure infrastructure. No third-party services handling your sensitive business data.</p>
                
                <h3>🚀 Unlimited Scalability</h3>
                <p>Add as many automations as you need without worrying about hitting limits or restrictions.</p>
                
                <h3>🔗 Powerful Integrations</h3>
                <p>Connect to virtually any service or application, including custom integrations specific to your business needs.</p>
              </div>
              
              <div className="benefit-image n8n-workflow-container">
                <img 
                  src="/n8n.png" 
                  alt="n8n Automation Workflow Dashboard showing AI Agent, HTTP Request, Google Sheets integration" 
                  className="n8n-workflow-image"
                />
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <p style={{ color: colors.text.secondary, fontSize: '1rem', marginBottom: '15px' }}>Want to see n8n automation in action for your business?</p>
              <a href="/contact" className="btn btn-secondary">Request a Demo</a>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Our Automation Implementation Process</h2>
            <div className="services-grid" style={{ marginTop: '30px', paddingTop: '10px', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px' }}>
              <div className="service-card" style={{ position: 'relative', padding: '50px 30px 30px 30px', marginTop: '25px', overflow: 'visible' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', background: colors.primary, color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(26, 121, 175, 0.3)', zIndex: 10 }}>1</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '12px', marginTop: '15px' }}>Business Analysis</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We analyze your current workflows, identify repetitive tasks, and determine the highest-impact automation opportunities.</p>
              </div>
              
              <div className="service-card" style={{ position: 'relative', padding: '50px 30px 30px 30px', marginTop: '25px', overflow: 'visible' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', background: colors.accent, color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)', zIndex: 10 }}>2</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '12px', marginTop: '15px' }}>Custom Design</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Create automated workflows tailored to your specific business processes and existing tools and systems.</p>
              </div>
              
              <div className="service-card" style={{ position: 'relative', padding: '50px 30px 30px 30px', marginTop: '25px', overflow: 'visible' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', background: colors.secondary, color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(49, 66, 81, 0.3)', zIndex: 10 }}>3</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '12px', marginTop: '15px' }}>Backend Setup</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Full technical implementation including server setup, integrations, testing, and security configuration.</p>
              </div>
              
              <div className="service-card" style={{ position: 'relative', padding: '50px 30px 30px 30px', marginTop: '25px', overflow: 'visible' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', background: colors.primaryDark, color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(21, 94, 138, 0.3)', zIndex: 10 }}>4</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '12px', marginTop: '15px' }}>Monitoring & Support</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Ongoing monitoring to ensure automations run smoothly, with proactive maintenance and optimization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <h2 className="section-title">Real-World Automation Solutions by Industry</h2>
            <p className="service-intro">
              See how specific automations solve common pain points in different trades and professional services. 
              These workflows are designed to reduce overhead, improve customer satisfaction, and increase revenue.
            </p>
            
            <div className="industry-detailed-grid">
              {/* Plumbing */}
              <div className="industry-detailed-card">
                <div className="industry-header">
                  <div className="industry-icon-large">🚰</div>
                  <div>
                    <h3>Plumbing Contractors</h3>
                    <p className="industry-subtitle">Reduce missed calls, no-shows and admin overhead so your crew spends more time fixing pipes and less time chasing paperwork.</p>
                  </div>
                </div>
                
                <div className="automation-solutions">
                  <div className="solution-item">
                    <h4>Smart Scheduling & Dispatch</h4>
                    <p>Automate intake (phone, web form or SMS), check technician availability, calculate travel time, and push appointments to crew calendars with ETA links.</p>
                    <div className="benefit-tag">Fewer missed jobs, better ETA accuracy, less dispatcher burnout</div>
                  </div>
                  
                  <div className="solution-item">
                    <h4>Post-Job Billing & Payment Flow</h4>
                    <p>When a job is completed, automatically generate an invoice (QuickBooks/Xero), send a secure payment link (Stripe/Moneris), and follow up on overdue invoices with staged reminders.</p>
                    <div className="benefit-tag">Faster cash collection, fewer late payments</div>
                  </div>
                  
                  <div className="solution-item">
                    <h4>No-Show & Late Arrival Escalation</h4>
                    <p>If a tech updates status as delayed, automatically notify customers with revised ETA + reschedule options and inform the office via Slack/SMS. Optionally issue a small discount code for service recovery.</p>
                    <div className="benefit-tag">Reduced cancellations and improved customer satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Electrical */}
              <div className="industry-detailed-card">
                <div className="industry-header">
                  <div className="industry-icon-large">⚡</div>
                  <div>
                    <h3>Electrical Contractors</h3>
                    <p className="industry-subtitle">Streamline permits, recurring safety checks, and estimate-to-contract workflows so projects move smoothly from quote to completion.</p>
                  </div>
                </div>
                
                <div className="automation-solutions">
                  <div className="solution-item">
                    <h4>Permit & Inspection Tracker</h4>
                    <p>Automate permit creation, upload required documents, and schedule reminders for inspection windows—notify clients and inspectors automatically.</p>
                    <div className="benefit-tag">Fewer inspection delays and missed filings</div>
                  </div>
                  
                  <div className="solution-item">
                    <h4>Quote → Contract → Job Creation</h4>
                    <p>Approved estimate triggers a contract signature request (DocuSign/HelloSign). Once signed, the system creates the job in your PM tool and books the first visit.</p>
                    <div className="benefit-tag">Faster onboarding of projects, fewer manual entries</div>
                  </div>
                  
                  <div className="solution-item">
                    <h4>Recurring Maintenance Automation</h4>
                    <p>Set up recurring safety inspection schedules for commercial clients with auto-generated work orders and automatic invoicing.</p>
                    <div className="benefit-tag">Stable recurring revenue and improved client retention</div>
                  </div>
                </div>
              </div>

              {/* Roofing */}
              <div className="industry-detailed-card">
                <div className="industry-header">
                  <div className="industry-icon-large">🏠</div>
                  <div>
                    <h3>Roofing Contractors</h3>
                    <p className="industry-subtitle">Get clients through storm season faster—automate damage intake, claim packets, and warranty/inspection reminders.</p>
                  </div>
                </div>
                
                <div className="automation-solutions">
                  <div className="solution-item">
                    <h4>Storm-Damage Intake & Claim Kit</h4>
                    <p>Client uploads photos (EXIF/GPS verified), the system builds a claim packet (photos, estimate, property info) and shares it with client and insurer.</p>
                    <div className="benefit-tag">Faster claims, clearer documentation, better trust</div>
                  </div>
                  
                  <div className="solution-item">
                    <h4>Insurance Liaison Workflow</h4>
                    <p>Automate timeline creation, adjuster follow-ups, and templated client updates. Track all touchpoints in a single record.</p>
                    <div className="benefit-tag">Less back-and-forth and improved claim approval rates</div>
                  </div>
                  
                  <div className="solution-item">
                    <h4>Warranty & Annual Inspection Reminders</h4>
                    <p>Automatically notify homeowners when warranties or yearly roof checks are due and offer one-click booking.</p>
                    <div className="benefit-tag">Repeat business and fewer warranty disputes</div>
                  </div>
                </div>
              </div>

              {/* Landscaping */}
              <div className="industry-detailed-card">
                <div className="industry-header">
                  <div className="industry-icon-large">🌿</div>
                  <div>
                    <h3>Landscaping Companies</h3>
                    <p className="industry-subtitle">Cut fuel costs, improve crew productivity, and lock in seasonal work with automation that handles routes, renewals and change orders.</p>
                  </div>
                </div>
                
                <div className="automation-solutions">
                  <div className="solution-item">
                    <h4>Route Optimization & Crew Assignment</h4>
                    <p>Group same-day jobs into efficient routes and push turn-by-turn directions to technicians' phones.</p>
                    <div className="benefit-tag">Lower fuel and labour costs, more jobs per day</div>
                  </div>
                  
                  <div className="solution-item">
                    <h4>Seasonal Plan Automation</h4>
                    <p>Automatically transition customers between seasonal packages (spring/summer/fall/winter), send renewal offers and collect approvals.</p>
                    <div className="benefit-tag">Lower churn and predictable seasonal revenue</div>
                  </div>
                  
                  <div className="solution-item">
                    <h4>Field Change-Order Approvals</h4>
                    <p>Field techs submit on-site changes via mobile form → client receives digital quote for approval → once accepted the job and invoice update automatically.</p>
                    <div className="benefit-tag">Faster approvals and fewer disputes</div>
                  </div>
                </div>
              </div>

              {/* Professional Services */}
              <div className="industry-detailed-card">
                <div className="industry-header">
                  <div className="industry-icon-large">💼</div>
                  <div>
                    <h3>Professional Services</h3>
                    <p className="industry-subtitle">Remove onboarding friction, tighten compliance calendars, and automate billing so professionals focus on client work, not paperwork.</p>
                  </div>
                </div>
                
                <div className="automation-solutions">
                  <div className="solution-item">
                    <h4>Automated Client Onboarding</h4>
                    <p>Send secure intake forms, collect ID/docs, create client folders, and assign internal checklists automatically.</p>
                    <div className="benefit-tag">Faster client ramp-up, fewer missing documents</div>
                  </div>
                  
                  <div className="solution-item">
                    <h4>Deadline & Compliance Engine</h4>
                    <p>Map client-specific compliance dates (tax deadlines, renewals) to a calendar that triggers client reminders and internal escalation if items are late.</p>
                    <div className="benefit-tag">Fewer missed deadlines and reduced liability</div>
                  </div>
                  
                  <div className="solution-item">
                    <h4>Time Tracking → Invoicing Pipeline</h4>
                    <p>Automate time capture reminders, convert approved time entries to invoices in QuickBooks/Xero, and handle retainer draws automatically.</p>
                    <div className="benefit-tag">Faster invoicing and predictability in cashflow</div>
                  </div>
                </div>
              </div>

              {/* General Contractors */}
              <div className="industry-detailed-card">
                <div className="industry-header">
                  <div className="industry-icon-large">🏗️</div>
                  <div>
                    <h3>General Contractors</h3>
                    <p className="industry-subtitle">Keep projects on schedule by automating sub coordination, material re-orders and milestone acceptance.</p>
                  </div>
                </div>
                
                <div className="automation-solutions">
                  <div className="solution-item">
                    <h4>Subcontractor Coordination Hub</h4>
                    <p>When a milestone is met, auto-notify subs with scope docs and request confirmations/ETAs; escalate if no response.</p>
                    <div className="benefit-tag">Fewer coordination bottlenecks and faster turnaround</div>
                  </div>
                  
                  <div className="solution-item">
                    <h4>Material & Inventory Auto-Reorder</h4>
                    <p>Trigger POs when material thresholds are met and email suppliers with current lead-time estimates.</p>
                    <div className="benefit-tag">Fewer project stoppages due to missing materials</div>
                  </div>
                  
                  <div className="solution-item">
                    <h4>Milestone Sign-Off & Billing</h4>
                    <p>Client receives digital milestone acceptance; when signed the system issues invoices, updates cashflow dashboards, and notifies accounting.</p>
                    <div className="benefit-tag">Faster payment cycles and clearer project finances</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <p style={{ color: colors.text.secondary, fontSize: '1.1rem', marginBottom: '20px' }}>See how these automations could work for your specific business.</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                <a href="/contact" className="btn btn-primary">Schedule Strategy Session</a>
                <a href="/contact" className="btn btn-secondary">Ask About Your Industry</a>
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
                <h3>How do I get started?</h3>
                <p>Contact us for a free consultation where we'll assess your current processes and recommend the best automation solutions for your business.</p>
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
              <a href="/contact" className="btn btn-secondary" style={{ borderColor: 'white', color: '#000', backgroundColor: 'white' }}>
                Schedule Discovery Call
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
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

.industry-detailed-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 50px;
}

.industry-detailed-card {
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(26, 121, 175, 0.1);
}

.industry-header {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 30px;
  padding-bottom: 25px;
  border-bottom: 2px solid #f8f9fa;
}

.industry-icon-large {
  font-size: 3.5rem;
  min-width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(26, 121, 175, 0.1);
}

.industry-header h3 {
  color: ${colors.primary};
  font-size: 1.8rem;
  margin: 0 0 12px 0;
  font-weight: 700;
}

.industry-subtitle {
  color: ${colors.text.secondary};
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 0;
  font-style: italic;
}

.automation-solutions {
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
}

.solution-item {
  background: #fafbfc;
  padding: 25px;
  border-radius: 12px;
  border-left: 4px solid ${colors.primary};
  transition: all 0.2s ease;
}

.solution-item:hover {
  background: #f1f8fc;
  border-left-color: ${colors.accent};
}

.solution-item h4 {
  color: ${colors.text.primary};
  font-size: 1.3rem;
  margin: 0 0 12px 0;
  font-weight: 600;
}

.solution-item p {
  color: ${colors.text.secondary};
  line-height: 1.6;
  margin: 0 0 15px 0;
  font-size: 1rem;
}

.benefit-tag {
  display: inline-block;
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(26, 121, 175, 0.3);
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

.n8n-workflow-container {
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid #e9ecef;
  background: #f8f9fa;
  position: relative;
}

.n8n-workflow-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: zoomPan 20s ease-in-out infinite;
  animation-play-state: running !important;
  transform-origin: center center;
}

.n8n-workflow-container:hover .n8n-workflow-image {
  animation-play-state: running !important;
}

@keyframes zoomPan {
  0% {
    transform: scale(1) translate(0, 0);
  }
  25% {
    transform: scale(1.8) translate(-15%, -10%);
  }
  50% {
    transform: scale(2.2) translate(10%, -15%);
  }
  75% {
    transform: scale(1.6) translate(-5%, 10%);
  }
  100% {
    transform: scale(1) translate(0, 0);
  }
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
  
  .industry-detailed-grid {
    grid-template-columns: 1fr;
  }
  
  .industry-detailed-card {
    padding: 25px;
  }
  
  .industry-header {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
  
  .industry-icon-large {
    align-self: center;
    min-width: 60px;
    height: 60px;
    font-size: 2.5rem;
  }
  
  .industry-header h3 {
    font-size: 1.5rem;
  }
  
  .industry-subtitle {
    font-size: 1rem;
  }
  
  .solution-item {
    padding: 20px;
  }
  
  .solution-item h4 {
    font-size: 1.1rem;
  }
  
  .n8n-workflow-image {
    animation-duration: 15s;
  }
  
  @keyframes zoomPan {
    0% {
      transform: scale(1) translate(0, 0);
    }
    25% {
      transform: scale(1.5) translate(-10%, -5%);
    }
    50% {
      transform: scale(1.8) translate(8%, -10%);
    }
    75% {
      transform: scale(1.3) translate(-3%, 8%);
    }
    100% {
      transform: scale(1) translate(0, 0);
    }
  }
}
`;

// Inject additional styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = automationStyles;
  document.head.appendChild(styleSheet);
}