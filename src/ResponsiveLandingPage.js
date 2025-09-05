import React, { useEffect, useRef } from 'react';
import './responsive-style.css';
import { Logo } from './components/Logo';
import { Navigation } from './components/Navigation';
import { Animations } from './components/Animations';
import { Footer } from './components/Footer';
import { colors } from './styles/colors';
import heroImage from './assets/hero-growtika.jpg';
import { gsap } from 'gsap';

export const ResponsiveLandingPage = () => {
  const heroRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    // Enhanced GSAP scroll animations for header
    const header = headerRef.current;
    let lastScrollY = 0;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        // Add enhanced blur and shadow when scrolled
        gsap.to(header, {
          duration: 0.3,
          css: {
            backdropFilter: "blur(25px) saturate(200%)",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(29, 122, 175, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
          },
          ease: "power2.out"
        });
      } else {
        // Return to original state
        gsap.to(header, {
          duration: 0.3,
          css: {
            backdropFilter: "blur(20px) saturate(180%)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(29, 122, 175, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
          },
          ease: "power2.out"
        });
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial header animation on load
    gsap.fromTo(header, 
      { y: -100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power3.out",
        delay: 0.2 
      }
    );

    // Background panning animation
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
        background: transparent !important;
        color: white !important;
        padding: 1rem 2rem !important;
        border-radius: 8px !important;
        text-decoration: none !important;
        font-size: 1.1rem !important;
        font-weight: 600 !important;
        border: 2px solid rgba(255, 255, 255, 0.3) !important;
        box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1) !important;
        transition: all 0.3s ease !important;
        display: inline-block !important;
        outline: none !important;
        box-sizing: border-box !important;
      }
      .hero-button:hover {
        border-color: rgba(29, 122, 175, 0.8) !important;
        box-shadow: 0 8px 25px rgba(29, 122, 175, 0.4), 0 0 20px rgba(29, 122, 175, 0.3) !important;
        transform: translateY(-2px) !important;
        color: white !important;
      }
      /* Enhanced Logo Hover Effects */
      .logo img {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        filter: drop-shadow(0 0 0 transparent);
      }
      .logo:hover img {
        transform: scale(1.05) rotate(1deg);
        filter: drop-shadow(0 4px 12px rgba(29, 122, 175, 0.3)) saturate(120%);
      }
      .logo {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        border-radius: 8px;
      }
      .logo:hover {
        transform: translateY(-1px);
      }
    `;
    document.head.appendChild(style);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(style);
    };
  }, []);
  return (
    <div className="landing-page homepage">
      <Animations />
      {/* Sticky Header */}
      <header className="sticky-header" ref={headerRef}>
        <div className="header-content">
          <div className="logo">
            <Logo />
          </div>
          <Navigation />
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section ref={heroRef} className="hero-section homepage-hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', overflow: 'hidden' }}>
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
              <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1d7aaf" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
              <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
              {/* Horizontal circuit paths */}
              <path d="M100,150 L250,150 L270,170 L400,170 L420,150 L600,150" stroke="#1d7aaf" strokeWidth="1" opacity="0.4" fill="none" strokeDasharray="5,3" />
              <path d="M150,250 L300,250 L320,230 L500,230 L520,250 L750,250" stroke="#1e40af" strokeWidth="1" opacity="0.3" fill="none" strokeDasharray="8,4" />
              <path d="M80,350 L200,350 L220,330 L350,330 L370,350 L550,350" stroke="#1d7aaf" strokeWidth="1.5" opacity="0.5" fill="none" strokeDasharray="6,2" />
              
              {/* Vertical circuit paths */}
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
              <circle cx="100" cy="100" r="8" fill="url(#techGradient)" opacity="0.4" />
              <circle cx="900" cy="300" r="6" fill="url(#techGradient)" opacity="0.5" />
              <circle cx="1100" cy="150" r="10" fill="url(#techGradient)" opacity="0.3" />
              <circle cx="200" cy="400" r="7" fill="url(#techGradient)" opacity="0.4" />
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '4rem', alignItems: 'center' }}>
              <div style={{ textAlign: 'left', color: 'white' }}>
                <h1 style={{ 
                  fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
                  fontWeight: '900', 
                  lineHeight: '0.9', 
                  marginBottom: '1rem',
                  color: '#1d7aaf'
                }}>
                  BUILD<br />
                  AUTOMATE<br />
                  SECURE
                </h1>
                <p style={{ 
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)', 
                  color: '#e2e8f0', 
                  marginBottom: '2.5rem',
                  fontWeight: '300',
                  maxWidth: '500px'
                }}>
                  Professional cybersecurity, AI automation, and web development for New Brunswick businesses
                </p>
                
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <a href="/contact" className="hero-button">
                    Start Security Assessment
                  </a>
                  
                  <a href="/free-example" className="hero-button">
                    Free Example Website
                  </a>
                </div>
              </div>

              <div className="hero-service-cards" style={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                height: '500px',
                justifyContent: 'center'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))',
                  border: '1px solid rgba(0, 0, 0, 0.3)',
                  borderRadius: '12px',
                  padding: '1rem',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div>
                    <h3 style={{ color: 'white', fontSize: '1rem', fontWeight: '600', margin: '0 0 0.3rem 0' }}>Security Audits & Vulnerability Assessments</h3>
                    <p style={{ color: '#e2e8f0', fontSize: '0.85rem', margin: '0' }}>Comprehensive security testing and threat analysis</p>
                  </div>
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))',
                  border: '1px solid rgba(0, 0, 0, 0.3)',
                  borderRadius: '12px',
                  padding: '1rem',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div>
                    <h3 style={{ color: 'white', fontSize: '1rem', fontWeight: '600', margin: '0 0 0.3rem 0' }}>Multi-Factor Authentication (MFA)</h3>
                    <p style={{ color: '#e2e8f0', fontSize: '0.85rem', margin: '0' }}>Enhanced login security and access control</p>
                  </div>
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))',
                  border: '1px solid rgba(0, 0, 0, 0.3)',
                  borderRadius: '12px',
                  padding: '1rem',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div>
                    <h3 style={{ color: 'white', fontSize: '1rem', fontWeight: '600', margin: '0 0 0.3rem 0' }}>Custom AI Chatbots for Your Website</h3>
                    <p style={{ color: '#e2e8f0', fontSize: '0.85rem', margin: '0' }}>Intelligent customer service automation</p>
                  </div>
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))',
                  border: '1px solid rgba(0, 0, 0, 0.3)',
                  borderRadius: '12px',
                  padding: '1rem',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div>
                    <h3 style={{ color: 'white', fontSize: '1rem', fontWeight: '600', margin: '0 0 0.3rem 0' }}>Responsive Mobile-First Design</h3>
                    <p style={{ color: '#e2e8f0', fontSize: '0.85rem', margin: '0' }}>Modern websites optimized for all devices</p>
                  </div>
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))',
                  border: '1px solid rgba(0, 0, 0, 0.3)',
                  borderRadius: '12px',
                  padding: '1rem',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div>
                    <h3 style={{ color: 'white', fontSize: '1rem', fontWeight: '600', margin: '0 0 0.3rem 0' }}>24/7 System Monitoring & IT Support</h3>
                    <p style={{ color: '#e2e8f0', fontSize: '0.85rem', margin: '0' }}>Round-the-clock infrastructure monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Example Visual Section */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">See The Difference a Professional Website Makes</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '600px', margin: '0 auto' }}>
                Here's how your business website transforms from basic to professional - 
                and why customers choose businesses with better websites.
              </p>
            </div>
            <div className="before-after-comparison">
              <div className="comparison-item">
                <div className="before-section">
                  <h3>❌ Most Business Websites</h3>
                  <div className="website-screenshot before">
                    <div className="screenshot-header">
                      <div className="browser-dots">
                        <span></span><span></span><span></span>
                      </div>
                      <div className="address-bar">oldwebsite.com</div>
                    </div>
                    <div className="screenshot-content">
                      <div className="old-header">
                        <div className="old-logo">COMPANY NAME</div>
                        <div className="old-nav">
                          <span>Home</span><span>Services</span><span>Contact</span>
                        </div>
                      </div>
                      <div className="old-hero">
                        <div className="old-title">Welcome to Our Business</div>
                        <div className="old-text">We provide quality services</div>
                        <div className="old-button">Contact Us</div>
                      </div>
                      <div className="old-services">
                        <div className="old-service">• Service 1</div>
                        <div className="old-service">• Service 2</div>
                        <div className="old-service">• Service 3</div>
                      </div>
                    </div>
                  </div>
                  <ul className="comparison-bullets">
                    <li>📱 Breaks on mobile devices</li>
                    <li>🔍 Hard to find on Google</li>
                    <li>😴 Generic, boring content</li>
                    <li>❓ Unclear what to do next</li>
                  </ul>
                </div>
              </div>
              
              <div className="comparison-arrow">
                <div className="arrow-circle">→</div>
                <span className="transform-text">48-Hour FREE Example</span>
              </div>
              
              <div className="comparison-item">
                <div className="after-section">
                  <h3>✅ Your LogicPros Website</h3>
                  <div className="website-screenshot after">
                    <div className="screenshot-header">
                      <div className="browser-dots">
                        <span></span><span></span><span></span>
                      </div>
                      <div className="address-bar">yourbusiness.com</div>
                    </div>
                    <div className="screenshot-content">
                      <div className="new-header">
                        <div className="new-logo">YOUR BUSINESS</div>
                        <div className="new-nav">
                          <span>Services</span><span>Portfolio</span>
                          <div className="nav-cta">Get Quote</div>
                        </div>
                      </div>
                      <div className="new-hero">
                        <div className="new-title">Get Professional Results</div>
                        <div className="new-subtitle">Licensed • Insured • 5-Star Reviews</div>
                        <div className="new-buttons">
                          <div className="new-button primary">Get Free Quote</div>
                          <div className="new-button secondary">📞 Call Now</div>
                        </div>
                      </div>
                      <div className="trust-indicators">
                        <div className="trust-item">⭐⭐⭐⭐⭐ 127 Reviews</div>
                        <div className="trust-item">🏆 Licensed & Insured</div>
                      </div>
                    </div>
                  </div>
                  <ul className="comparison-bullets">
                    <li>📱 Perfect on all devices</li>
                    <li>🔍 Built for better Google visibility</li>
                    <li>💼 Professional, trustworthy</li>
                    <li>📞 Clear path to contact you</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="cta-section-inline">
              <h3>Want to see YOUR website before you buy it?</h3>
              <p>We'll create a custom example specifically for your business - delivered in 48 hours, completely free.</p>
              <a href="/free-example" className="btn btn-primary btn-large">Get My Free Website Example</a>
            </div>
          </div>
        </section>

        {/* Key Differentiators Section */}
        <section id="services" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Complete Digital Security & Growth Solutions</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '600px', margin: '0 auto' }}>
                Cybersecurity audits, AI automation, professional websites, and IT support for New Brunswick businesses
              </p>
            </div>
            <div className="services-grid animate-on-scroll">
              <a href="/services" className="service-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="service-icon floating-icon">🔒</div>
                <h3>Cybersecurity & IT Services</h3>
                <p>
                  Professional cybersecurity services including security audits, MFA, and managed IT support to protect your business from cyber threats.
                </p>
                <div className="feature-highlight">Professional Security Solutions</div>
              </a>
              <a href="/services/websites" className="service-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="service-icon floating-icon">🌐</div>
                <h3>Website Design & Development</h3>
                <p>
                  Custom websites designed to convert visitors into customers. Mobile-optimized, fast-loading, and built with modern SEO practices.
                </p>
                <div className="feature-highlight">Free example in 48 hours</div>
              </a>
              <a href="/services/automations" className="service-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="service-icon floating-icon">🤖</div>
                <h3>AI Automation Solutions</h3>
                <p>
                  Intelligent chatbots and automation tools that handle customer inquiries, qualify leads, and streamline business operations.
                </p>
                <div className="feature-highlight">Streamline Operations</div>
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why New Brunswick Businesses Choose LogicPros</h2>
            </div>
            <div className="services-grid animate-on-scroll">
              <div className="service-card">
                <h3>💰 Grant Funding Available</h3>
                <p>
                  New Brunswick businesses may qualify for cybersecurity and technology grants. 
                  We can help you research available programs and determine eligibility for your projects.
                </p>
              </div>
              <div className="service-card">
                <h3>🏠 Local New Brunswick Expertise</h3>
                <p>
                  Based in New Brunswick with deep understanding of local business needs. 
                  We work with SMEs across all industries to improve their digital security and operations.
                </p>
              </div>
              <div className="service-card">
                <h3>🔐 Complete Security & Growth Solutions</h3>
                <p>
                  From cybersecurity audits to AI automation to professional websites. 
                  Everything your business needs to stay secure and competitive in the digital age.
                </p>
              </div>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get Security Assessment</a>
              <a href="/free-example" className="btn btn-secondary">View Free Website Example</a>
            </div>
          </div>
        </section>


        {/* Testimonials Section */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why Choose LogicPros for Cybersecurity & Website Development</h2>
            </div>
            <div className="services-grid animate-on-scroll">
              <div className="service-card">
                <h3>🏆 Proven Expertise</h3>
                <p>
                  Years of experience in cybersecurity, web development, and IT services. 
                  We understand the unique challenges facing New Brunswick businesses.
                </p>
              </div>
              <div className="service-card">
                <h3>💰 Funding Assistance</h3>
                <p>
                  We help you research and apply for available cybersecurity and technology grants. 
                  Many New Brunswick businesses can access funding to offset implementation costs.
                </p>
              </div>
              <div className="service-card">
                <h3>⚡ Fast Implementation</h3>
                <p>
                  Quick turnaround on all projects - website examples in 48 hours, 
                  security audits within a week, AI solutions deployed rapidly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Free Example CTA Section */}
        <section className="section" style={{ backgroundColor: colors.secondary, color: colors.text.light }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: colors.text.light }}>Not Sure? See Your Website Before You Buy!</h2>
              <p style={{ color: colors.text.light, fontSize: '1.2rem', opacity: 0.9 }}>
                Get a FREE custom website example created specifically for your business. 
                See exactly how your website will look - no commitment required.
              </p>
            </div>
            <div className="free-example-benefits">
              <div className="benefit-item">✓ Completely FREE with no obligations</div>
              <div className="benefit-item">✓ Custom design for YOUR business</div>
              <div className="benefit-item">✓ Delivered within 48 hours</div>
              <div className="benefit-item">✓ See it before you decide</div>
            </div>
            <div className="cta-buttons">
              <a href="/free-example" className="btn btn-primary" style={{ backgroundColor: colors.accent, color: colors.text.light }}>
                Get My Free Example Website
              </a>
              <a href="/contact" className="btn" style={{ backgroundColor: 'transparent', color: colors.text.light, border: `2px solid ${colors.text.light}` }}>
                Ask Questions First
              </a>
            </div>
          </div>
        </section>

        {/* New Brunswick Service Areas */}
        <section className="section" style={{ backgroundColor: '#e8f2ff' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Serving New Brunswick Businesses</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto' }}>
                Local cybersecurity, AI automation, and IT services across New Brunswick. 
                Professional technology solutions available province-wide.
              </p>
            </div>
            <div className="services-grid animate-on-scroll">
              <div className="service-card" style={{ textAlign: 'center' }}>
                <h3>🏢 Fredericton</h3>
                <p>
                  Cybersecurity audits, AI chatbots, managed IT services, and professional websites 
                  for Fredericton businesses. Expert technology solutions.
                </p>
              </div>
              <div className="service-card" style={{ textAlign: 'center' }}>
                <h3>🏭 Moncton</h3>
                <p>
                  Security assessments, automated marketing, endpoint protection, and web development 
                  for Moncton area SMEs. Comprehensive technology support.
                </p>
              </div>
              <div className="service-card" style={{ textAlign: 'center' }}>
                <h3>⚓ Saint John</h3>
                <p>
                  MFA implementation, predictive analytics, patch management, and digital solutions 
                  for Saint John businesses. Professional implementation support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Ready to Secure & Grow Your New Brunswick Business?</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '600px', margin: '0 auto' }}>
                Professional cybersecurity, AI automation, and technology solutions
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get Security Assessment</a>
              <a href="/contact" className="btn btn-secondary">Get Free Consultation</a>
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
      </main>

      {/* Footer CTA Section */}
      <section className="footer-cta-section">
        <div className="container">
          <div className="footer-cta-content">
            <h3>Still Not Sure? Get Your FREE Website Example</h3>
            <p>No risk, no commitment - see your new website before making any decisions</p>
            <a href="/free-example" className="btn btn-primary btn-large">Get My Free Website Example</a>
            <div className="assurance-text">✓ Delivered in 48 hours ✓ Completely free ✓ No obligation</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};