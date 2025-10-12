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
      .hero-button {
        background: linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%) !important;
        color: white !important;
        padding: 18px 40px !important;
        border-radius: 50px !important;
        text-decoration: none !important;
        font-size: 1.1rem !important;
        font-weight: 600 !important;
        border: none !important;
        box-shadow: 0 6px 20px rgba(29, 122, 175, 0.4) !important;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
        display: inline-block !important;
        outline: none !important;
        box-sizing: border-box !important;
      }
      .hero-button:hover {
        box-shadow: 0 8px 30px rgba(29, 122, 175, 0.5) !important;
        transform: translateY(-3px) !important;
        color: white !important;
      }
      .secondary-button {
        background: transparent !important;
        color: #1a79af !important;
        border: 2px solid #1a79af !important;
        padding: 18px 40px !important;
        font-size: 1.1rem !important;
        font-weight: 600 !important;
        border-radius: 50px !important;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
        text-decoration: none !important;
        display: inline-block !important;
      }
      .secondary-button:hover {
        box-shadow: 0 8px 25px rgba(29, 122, 175, 0.4) !important;
        transform: translateY(-3px) !important;
        border-color: rgba(29, 122, 175, 0.8) !important;
      }
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
                Maritime-based technology company providing professional website design, hosting, IT services,
                cybersecurity, and AI automation to businesses throughout Atlantic Canada.
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
                <div className="expertise-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 26">
                    <path d="M12 2L4 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-8-4z" stroke="#1d7aaf" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                    <path d="M9 12l2 2 4-4" stroke="#1d7aaf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Cybersecurity Experts</h3>
                <p>
                  Protect your business with comprehensive security audits, managed IT services, and proactive
                  threat protection. We keep your data and systems secure so you can focus on running your business.
                </p>
              </div>

              <div className="expertise-item">
                <div className="expertise-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#1d7aaf" viewBox="0 0 16 16">
                    <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"/>
                    <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"/>
                  </svg>
                </div>
                <h3>AI Automation Specialists</h3>
                <p>
                  Streamline your operations with intelligent chatbots, automated workflows, and AI-powered
                  solutions that save time and reduce manual tasks, letting you focus on growth.
                </p>
              </div>

              <div className="expertise-item">
                <div className="expertise-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#1d7aaf" viewBox="0 0 16 16">
                    <rect x="3" y="4" width="18" height="12" rx="1" stroke="#1d7aaf" strokeWidth="1.5" fill="none" transform="scale(0.67) translate(-2, -1)"/>
                    <rect x="8" y="16" width="8" height="2" fill="#1d7aaf" transform="scale(0.67) translate(-2, -1)"/>
                    <rect x="9" y="18" width="6" height="1" fill="#1d7aaf" transform="scale(0.67) translate(-2, -1)"/>
                  </svg>
                </div>
                <h3>Professional Web Design</h3>
                <p>
                  Modern, mobile-responsive websites designed to convert visitors into customers. We create
                  professional online presences that build trust and drive business growth.
                </p>
              </div>

              <div className="expertise-item">
                <div className="expertise-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#1d7aaf" viewBox="0 0 16 16">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#1d7aaf" strokeWidth="1.5" fill="none" strokeLinejoin="round" transform="scale(0.67) translate(0, 0)"/>
                  </svg>
                </div>
                <h3>Fast Implementation</h3>
                <p>
                  Get results quickly with our streamlined processes. Website examples in 48 hours, security
                  audits within a week, and rapid deployment of AI solutions to accelerate your business.
                </p>
              </div>

              <div className="expertise-item">
                <div className="expertise-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24">
                    <path d="M3 9V21H9V15H15V21H21V9L12 2L3 9Z" stroke="#1d7aaf" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Local Maritime Expertise</h3>
                <p>
                  Based in New Brunswick with deep understanding of Maritime business needs. We're your local
                  technology partner, providing personalized service and support throughout Atlantic Canada.
                </p>
              </div>

              <div className="expertise-item">
                <div className="expertise-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#1d7aaf" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
                  </svg>
                </div>
                <h3>Measurable Results</h3>
                <p>
                  Track what matters with detailed analytics and reporting. We measure security improvements,
                  automation efficiency, website performance, and ROI so you can see the value we deliver.
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
              <a href="/contact" className="hero-button" style={{ 
                backgroundColor: 'white', 
                color: '#1a1a2e',
                fontSize: '1.3rem',
                padding: '20px 45px'
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