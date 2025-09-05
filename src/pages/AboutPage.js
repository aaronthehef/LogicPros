import React, { useEffect } from 'react';
import { colors } from '../styles/colors';
import '../responsive-style.css';
import { Logo } from '../components/Logo';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const AboutPage = () => {
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
              <linearGradient id="techGradientAbout" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1d7aaf" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
              <linearGradient id="pulseGradientAbout" x1="0%" y1="0%" x2="100%" y2="0%">
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
              <circle cx="100" cy="100" r="8" fill="url(#techGradientAbout)" opacity="0.4" />
              <circle cx="900" cy="300" r="6" fill="url(#techGradientAbout)" opacity="0.5" />
              <circle cx="1100" cy="150" r="10" fill="url(#techGradientAbout)" opacity="0.3" />
              <circle cx="200" cy="400" r="7" fill="url(#techGradientAbout)" opacity="0.4" />
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
              }}>About LogicPros: Complete Digital Solutions</h1>
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
                Based in New Brunswick, Canada, we provide websites, AI business automations, 
                and managed IT services to contractors and small businesses across Canada and the U.S.
              </p>
            </div>
          </div>
        </section>


        {/* Meet the Founder */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light, padding: '80px 0' }}>
          <div className="container">
            <h2 className="section-title" style={{ 
              textAlign: 'center', 
              fontSize: '2.5rem', 
              fontWeight: '700',
              marginBottom: '60px',
              color: '#1a1a2e'
            }}>Your Technology Partner</h2>
            
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: '300px 1fr',
              gap: '60px',
              alignItems: 'start',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              {/* Profile Photo */}
              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <div style={{ 
                  width: '250px',
                  height: '250px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '5px solid #1d7aaf',
                  boxShadow: '0 12px 40px rgba(29, 122, 175, 0.2)',
                  marginBottom: '20px'
                }}>
                  <img 
                    src="/Profile.png" 
                    alt="Aaron Hefling - Founder & Technology Solutions Specialist"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 20%'
                    }}
                  />
                </div>
                
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: '700',
                    color: '#1a1a2e',
                    marginBottom: '8px',
                    lineHeight: '1.2'
                  }}>Aaron Hefling</h3>
                  <p style={{ 
                    fontSize: '1.1rem',
                    color: '#1d7aaf',
                    fontWeight: '600',
                    marginBottom: '20px'
                  }}>Founder & Technology Solutions Specialist</p>
                  
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    marginBottom: '25px'
                  }}>
                    <span style={{
                      backgroundColor: '#f0f6ff',
                      color: '#1d7aaf',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      border: '1px solid #e3f0ff'
                    }}>Microsoft Certified</span>
                    <span style={{
                      backgroundColor: '#f0f6ff',
                      color: '#1d7aaf',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      border: '1px solid #e3f0ff'
                    }}>CompTIA Certified</span>
                    <span style={{
                      backgroundColor: '#f0f6ff',
                      color: '#1d7aaf',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      border: '1px solid #e3f0ff'
                    }}>Technology Solutions Specialist</span>
                  </div>

                  <div style={{
                    backgroundColor: '#fafbfc',
                    padding: '20px',
                    borderRadius: '12px',
                    border: '1px solid #e9ecef',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: '#2c3e50',
                    textAlign: 'left'
                  }}>
                    After 21 years in technology—from leading IT projects for the provincial government to building websites for contractors across New Brunswick—I founded LogicPros with one mission: helping businesses leverage technology to work smarter, not harder.
                  </div>
                </div>
              </div>

              {/* Content */}
              <div style={{ 
                backgroundColor: '#fafbfc',
                padding: '40px',
                borderRadius: '12px',
                border: '1px solid #e9ecef',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
              }}>
                <div style={{ 
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: '#2c3e50'
                }}>
                  
                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ 
                      color: '#1d7aaf', 
                      marginBottom: '12px', 
                      fontSize: '1.3rem',
                      fontWeight: '600'
                    }}>Why LogicPros?</h4>
                    <p style={{ marginBottom: '0' }}>
                      After years of providing IT services across Atlantic Canada, I saw the need for automating and simplifying processes that goes beyond just fixing problems. What truly energizes me is working collaboratively with fellow business owners - we're all in this together, and the best results come when we support each other to succeed. I'm passionate about using automation to eliminate repetitive tasks and free up time for the work that truly matters.
                    </p>
                  </div>
                  
                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ 
                      color: '#1d7aaf', 
                      marginBottom: '12px', 
                      fontSize: '1.3rem',
                      fontWeight: '600'
                    }}>My Vision</h4>
                    <p style={{ marginBottom: '0' }}>
                      To become Atlantic Canada's leading and trusted IT services provider by focusing on collaboration, reliability, and results that make a real difference for local businesses.
                    </p>
                  </div>
                  
                  <p style={{ marginBottom: '24px' }}>
                    When I'm not troubleshooting networks or coding automation solutions, you'll find me woodworking, playing guitar, or exploring New Brunswick's trails. These hobbies often inspire creative approaches to solving technical problems.
                  </p>
                  
                  <div style={{
                    backgroundColor: '#1d7aaf',
                    color: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    marginTop: '30px'
                  }}>
                    <p style={{ 
                      fontWeight: '600',
                      fontSize: '1.1rem',
                      margin: '0'
                    }}>
                      Ready to collaborate? Let's talk about how LogicPros can help secure, automate, and grow your operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <style jsx>{`
              @media (max-width: 768px) {
                .founder-grid {
                  grid-template-columns: 1fr !important;
                  gap: 40px !important;
                  text-align: center !important;
                }
                .founder-photo {
                  position: static !important;
                  margin: 0 auto !important;
                }
                .founder-content {
                  padding: 30px 20px !important;
                }
              }
            `}</style>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Why Businesses Choose LogicPros</h2>
            <div className="expertise-grid">
              <div className="expertise-item">
                <div className="expertise-icon">🏗️</div>
                <h3>Industry Specialists</h3>
                <p>
                  We exclusively serve contractors and construction businesses. This focus means we understand 
                  your unique challenges, seasonal patterns, and what your customers are looking for.
                </p>
              </div>

              <div className="expertise-item">
                <div className="expertise-icon">📱</div>
                <h3>Mobile-First Approach</h3>
                <p>
                  Over 70% of contractor searches happen on mobile devices. Every website we build is designed 
                  for mobile first, ensuring your customers can easily contact you from any device.
                </p>
              </div>

              <div className="expertise-item">
                <div className="expertise-icon">🎯</div>
                <h3>Lead Generation Focus</h3>
                <p>
                  Pretty websites don't pay the bills - leads do. Every design decision we make is focused 
                  on converting visitors into qualified prospects for your business.
                </p>
              </div>

              <div className="expertise-item">
                <div className="expertise-icon">⚡</div>
                <h3>Fast Implementation</h3>
                <p>
                  We know contractors need results quickly. Our streamlined process gets your website launched 
                  in 2-3 weeks, not months, so you can start generating leads immediately.
                </p>
              </div>

              <div className="expertise-item">
                <div className="expertise-icon">🛠️</div>
                <h3>Ongoing Support</h3>
                <p>
                  Your success is our success. We provide ongoing maintenance, updates, and optimization to 
                  ensure your website continues generating leads and growing your business.
                </p>
              </div>

              <div className="expertise-item">
                <div className="expertise-icon">📊</div>
                <h3>Measurable Results</h3>
                <p>
                  We track and report on what matters: leads, conversions, and ROI. You'll know exactly how 
                  your website investment is paying off with detailed analytics and reporting.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Our Process */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <h2 className="section-title">How We Collaborate</h2>
            <div className="services-grid" style={{ marginTop: '40px', paddingTop: '20px', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
              <div className="service-card" style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', background: colors.primary, color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(26, 121, 175, 0.3)', zIndex: 10 }}>1</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Discovery Call</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We start with a detailed consultation to understand your business, goals, challenges, and technology needs.</p>
              </div>
              
              <div className="service-card" style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', background: colors.accent, color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)', zIndex: 10 }}>2</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Custom Proposal</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We create a tailored solution proposal with clear scope, timeline, and pricing - no commitment required.</p>
              </div>
              
              <div className="service-card" style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', background: colors.secondary, color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(49, 66, 81, 0.3)', zIndex: 10 }}>3</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Strategy & Planning</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Once approved, we develop a comprehensive implementation plan with clear milestones and deliverables.</p>
              </div>
              
              <div className="service-card" style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', background: colors.primaryDark, color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(21, 94, 138, 0.3)', zIndex: 10 }}>4</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Implementation</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We execute the solution using proven methodologies, with regular check-ins for feedback and updates.</p>
              </div>
              
              <div className="service-card" style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', background: colors.primary, color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(26, 121, 175, 0.3)', zIndex: 10 }}>5</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Training & Handover</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We provide comprehensive training and documentation so you can manage and maintain the solution.</p>
              </div>
              
              <div className="service-card" style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', background: colors.accent, color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)', zIndex: 10 }}>6</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Ongoing Support</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We continuously monitor performance and provide ongoing support to ensure long-term success.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Combined Quote & CTA Section with Gradient */}
        <section className="section" style={{ 
          background: 'linear-gradient(180deg, #16213e 0%, #0f3460 100%)', 
          color: 'white',
          padding: '60px 0 80px 0'
        }}>
          {/* Quote Part */}
          <div className="container" style={{ paddingBottom: '60px' }}>
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <blockquote style={{
                fontSize: '1.4rem',
                fontStyle: 'italic',
                color: 'white',
                lineHeight: '1.7',
                marginBottom: '30px',
                fontWeight: '300'
              }}>
                "Whether it's building your professional online presence or providing IT solutions, when we work together, we all move forward - your business success drives our success."
              </blockquote>
              <cite style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: '600',
                fontStyle: 'normal'
              }}>
                - Aaron Hefling
              </cite>
            </div>
          </div>

          {/* CTA Part */}
          <div className="container">
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              padding: '50px 40px',
              textAlign: 'center',
              maxWidth: '600px',
              margin: '0 auto',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}>
              <h2 style={{ 
                color: 'white',
                fontSize: '2.2rem',
                fontWeight: '700',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>Ready to Work Together?</h2>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.9)', 
                fontSize: '1.2rem',
                marginBottom: '35px',
                lineHeight: '1.6'
              }}>
                Let's discuss your project and show you exactly what we can do for your business.
              </p>
              <a href="/contact" className="btn btn-primary" style={{ 
                backgroundColor: 'white', 
                color: '#1a1a2e',
                fontSize: '1.3rem',
                padding: '20px 45px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '700',
                display: 'inline-block',
                transition: 'all 0.3s ease',
                boxShadow: '0 6px 20px rgba(255, 255, 255, 0.3)',
                border: '2px solid transparent'
              }}>
                Free Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// Additional styles for about page
const aboutStyles = `
.about-story {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 40px;
}

.story-content h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: var(--primary-color);
}

.story-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: var(--text-secondary);
}

.company-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 40px;
  padding: 30px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
}

.company-stat {
  text-align: center;
}

.company-stat h3 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.company-stat p {
  color: var(--text-secondary);
  font-weight: 500;
}

.story-image {
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.team-member {
  background: white;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.member-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 20px;
  overflow: hidden;
}

.member-info h3 {
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.member-title {
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 15px;
}

.member-bio {
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.member-credentials {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.member-credentials span {
  background: #e9ecef;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.expertise-item {
  text-align: center;
  padding: 30px;
}

.expertise-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.expertise-item h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--primary-color);
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.cert-item {
  background: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.cert-logo {
  width: 80px;
  height: 80px;
  background: #f8f9fa;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-weight: bold;
  color: var(--primary-color);
}

.process-timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.process-step {
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
  position: relative;
}

.process-step:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 29px;
  top: 60px;
  width: 2px;
  height: calc(100% + 20px);
  background: #ddd;
}

.step-number {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 30px;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.step-content h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: var(--primary-color);
}

.step-content p {
  line-height: 1.6;
  color: var(--text-secondary);
}

.testimonial-rating {
  font-size: 1.2rem;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .about-story {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .company-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
  }
  
  .story-image {
    height: 250px;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .expertise-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .certifications-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .process-step {
    flex-direction: column;
    text-align: center;
  }
  
  .process-step::after {
    display: none;
  }
  
  .step-number {
    margin: 0 auto 20px;
  }
}

@media (max-width: 480px) {
  .company-stats {
    grid-template-columns: 1fr;
  }
  
  .certifications-grid {
    grid-template-columns: 1fr;
  }
}
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = aboutStyles;
  document.head.appendChild(styleSheet);
}