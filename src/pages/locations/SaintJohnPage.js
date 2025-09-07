import React, { useEffect, useRef } from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Animations } from '../../components/Animations';
import { Footer } from '../../components/Footer';
import { colors } from '../../styles/colors';
import { gsap } from 'gsap';

export const SaintJohnPage = () => {
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
      /* White secondary button styling for dark backgrounds */
      .secondary-button[style*="color: white"] {
        color: white !important;
        border-color: white !important;
      }
      .secondary-button[style*="color: white"]:hover {
        box-shadow: 0 8px 25px rgba(255, 255, 255, 0.4) !important;
        border-color: rgba(255, 255, 255, 0.8) !important;
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
              <linearGradient id="techGradientSaintJohn" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1d7aaf" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
              <linearGradient id="pulseGradientSaintJohn" x1="0%" y1="0%" x2="100%" y2="0%">
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
              <circle cx="100" cy="100" r="8" fill="url(#techGradientSaintJohn)" opacity="0.4" />
              <circle cx="900" cy="300" r="6" fill="url(#techGradientSaintJohn)" opacity="0.5" />
              <circle cx="1100" cy="150" r="10" fill="url(#techGradientSaintJohn)" opacity="0.3" />
              <circle cx="200" cy="400" r="7" fill="url(#techGradientSaintJohn)" opacity="0.4" />
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
            <div className="hero-content" style={{ textAlign: 'center', color: 'white' }}>
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
                fontWeight: '900', 
                lineHeight: '1.1', 
                marginBottom: '1rem',
                color: 'white'
              }}>
                Professional Web Services in Saint John, New Brunswick
              </h1>
              <p style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.3rem)', 
                color: '#e2e8f0', 
                marginBottom: '40px',
                fontWeight: '300',
                maxWidth: '600px',
                margin: '0 auto 40px auto'
              }}>
                Custom websites, business automation, and IT management for contractors and businesses 
                in Saint John, Rothesay, Quispamsis, and the Greater Saint John area. 
                Canada's oldest incorporated city deserves modern digital solutions.
              </p>
              
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href="/contact" className="hero-button">
                  Get Your Free Quote
                </a>
                
                <a href="/free-example" className="secondary-button" style={{ borderColor: 'white', color: 'white' }}>
                  See Free Example
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Local Services */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Digital Excellence for Canada's Oldest City</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto' }}>
                From the historic Uptown core to the growing industrial sectors, we help Saint John businesses 
                combine traditional values with modern technology for sustainable growth.
              </p>
            </div>
            
            <div className="services-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem',
              maxWidth: '1400px',
              margin: '0 auto'
            }}>
              <div className="service-card professional-card" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(29, 122, 175, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(29, 122, 175, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <div className="service-icon" style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1d7aaf, #1e40af)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(29, 122, 175, 0.3)',
                  transition: 'all 0.3s ease'
                }}>🌐</div>
                <h3>Saint John Web Design</h3>
                <p>
                  Professional WordPress and React websites built for Saint John's diverse business community. 
                  From industrial services to tourism, we create websites that work for your industry.
                </p>
                <ul className="service-benefits">
                  <li>Saint John local SEO optimization</li>
                  <li>Industrial & marine industry focus</li>
                  <li>Tourism and hospitality websites</li>
                  <li>Professional service websites</li>
                </ul>
              </div>

              <div className="service-card professional-card" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(29, 122, 175, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(29, 122, 175, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <div className="service-icon" style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1d7aaf, #1e40af)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(29, 122, 175, 0.3)',
                  transition: 'all 0.3s ease'
                }}>🤖</div>
                <h3>Business Process Automation</h3>
                <p>
                  Streamline operations with automated review management, social media posting, 
                  and customer communications. Essential for competitive Saint John markets.
                </p>
                <ul className="service-benefits">
                  <li>Automated review generation</li>
                  <li>Social media management</li>
                  <li>Customer relationship automation</li>
                  <li>Industrial workflow optimization</li>
                </ul>
              </div>

              <div className="service-card professional-card" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(29, 122, 175, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(29, 122, 175, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <div className="service-icon" style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1d7aaf, #1e40af)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(29, 122, 175, 0.3)',
                  transition: 'all 0.3s ease'
                }}>💻</div>
                <h3>Enterprise IT Solutions</h3>
                <p>
                  Robust managed IT services designed for Saint John's industrial and professional sectors. 
                  Security, compliance, and reliability for mission-critical business operations.
                </p>
                <ul className="service-benefits">
                  <li>Industrial cybersecurity</li>
                  <li>Compliance management</li>
                  <li>24/7 system monitoring</li>
                  <li>Disaster recovery planning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Serving Greater Saint John and the Fundy Region</h2>
            
            <div className="services-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem',
              maxWidth: '1400px',
              margin: '0 auto'
            }}>
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease'
              }}>
                <h4>📍 Uptown Saint John</h4>
                <p>
                  Historic business district serving professional services, government offices, 
                  and tourism businesses. King Street, Charlotte Street, and the central business core.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease'
              }}>
                <h4>📍 East Saint John & Industrial</h4>
                <p>
                  Industrial contractors, manufacturing companies, and port-related businesses. 
                  Specialized in heavy industry and marine services digital solutions.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease'
              }}>
                <h4>📍 Rothesay & Quispamsis</h4>
                <p>
                  Upscale residential service contractors, professional services, and retail businesses 
                  serving the Kennebecasis Valley's affluent communities.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease'
              }}>
                <h4>📍 Grand Bay-Westfield & Surrounding</h4>
                <p>
                  Rural contractors, seasonal businesses, and service providers throughout 
                  Kings County and the scenic St. John River valley communities.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease'
              }}>
                <h4>📍 St. Martins & Fundy Coast</h4>
                <p>
                  Tourism businesses, seasonal services, and contractors serving the Bay of Fundy 
                  coastal communities and Fundy National Park area.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease'
              }}>
                <h4>📍 Hampton & Kingston Peninsula</h4>
                <p>
                  Residential contractors, professional services, and retail businesses serving 
                  the growing communities between Saint John and Sussex.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Saint John Business Focus */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <h2 className="section-title">Industries We Serve in Greater Saint John</h2>
            
            <div className="industries-content">
              <div className="industries-text">
                <h3>Industrial & Manufacturing</h3>
                <p>
                  Saint John's industrial heritage includes major manufacturing, oil refining, and port operations. 
                  We help industrial contractors, equipment suppliers, and manufacturing support services 
                  establish professional digital presences and streamline operations.
                </p>
                
                <h3>Marine & Port Services</h3>
                <p>
                  As a major Atlantic port, Saint John hosts numerous marine-related businesses. 
                  We specialize in websites for shipping companies, marine contractors, logistics providers, 
                  and port service companies operating in this unique environment.
                </p>
                
                <h3>Professional Services & Government</h3>
                <p>
                  With significant government presence and professional service firms, we help lawyers, 
                  accountants, consultants, and government contractors maintain professional digital 
                  presences that inspire confidence.
                </p>
                
                <h3>Tourism & Hospitality</h3>
                <p>
                  The Bay of Fundy region attracts visitors year-round. We help hotels, restaurants, 
                  tour operators, and tourism-related services capture seasonal opportunities with 
                  effective websites and marketing automation.
                </p>
              </div>
              
              <div className="industries-stats">
                <div className="stat-item">
                  <h4>67,000+</h4>
                  <p>Saint John residents</p>
                </div>
                <div className="stat-item">
                  <h4>130,000+</h4>
                  <p>Greater Saint John area</p>
                </div>
                <div className="stat-item">
                  <h4>Canada's Oldest</h4>
                  <p>Incorporated city (1785)</p>
                </div>
                <div className="stat-item">
                  <h4>Major Port</h4>
                  <p>Atlantic Canada gateway</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Focus */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Specialized Solutions for Industrial Businesses</h2>
            
            <div className="industrial-content">
              <div className="industrial-text">
                <h3>🏭 Manufacturing & Heavy Industry</h3>
                <p>
                  Saint John's industrial sector requires specialized digital solutions. We understand 
                  compliance requirements, safety protocols, and the unique communication needs of 
                  manufacturing and heavy industry businesses.
                </p>
                
                <h3>🚢 Marine & Logistics</h3>
                <p>
                  Port operations, shipping, and logistics companies need reliable IT infrastructure 
                  and professional websites that inspire confidence in international clients. 
                  We provide solutions that work in demanding maritime environments.
                </p>
                
                <h3>⚡ Energy & Utilities</h3>
                <p>
                  With major energy infrastructure in the region, we help energy contractors, 
                  utility service providers, and related businesses maintain secure, compliant 
                  digital operations and professional online presence.
                </p>
                
                <h3>🔧 Industrial Contracting</h3>
                <p>
                  Specialized contractors serving industrial clients need websites that demonstrate 
                  capability and reliability. We create digital solutions that help you compete 
                  for major industrial projects and maintain client relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <h2 className="section-title">Saint John Client Success Stories</h2>
            
            <div className="services-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              maxWidth: '1400px',
              margin: '0 auto'
            }}>
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🏭</div>
                <h4>Industrial Solutions Inc.</h4>
                <p>
                  "LogicPros understood our industrial client base and created a professional website 
                  that showcases our capabilities. The automated lead qualification system helps us 
                  focus on serious inquiries from major industrial projects."
                </p>
                <div className="story-results">
                  <span>Professional image</span>
                  <span>Lead qualification</span>
                </div>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🚢</div>
                <h4>Bay Marine Services</h4>
                <p>
                  "Our new React website loads quickly even on marine networks and showcases our 
                  international capabilities. The managed IT services keep our operations secure 
                  while we focus on serving shipping clients."
                </p>
                <div className="story-results">
                  <span>International reach</span>
                  <span>Secure operations</span>
                </div>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🏘️</div>
                <h4>Kennebecasis Valley Contractors</h4>
                <p>
                  "The WordPress website with local SEO optimization helped us dominate searches 
                  for 'contractors Rothesay' and similar terms. The Google review automation 
                  maintains our excellent reputation automatically."
                </p>
                <div className="story-results">
                  <span>Local SEO dominance</span>
                  <span>Automated reputation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fundy Advantage */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">The Fundy Business Advantage</h2>
            
            <div className="services-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem',
              maxWidth: '1400px',
              margin: '0 auto'
            }}>
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
              }}>
                <h4>🌊 Unique Market Position</h4>
                <p>
                  Saint John's location on the world's highest tides creates unique business opportunities 
                  and challenges. We help businesses leverage this distinctive maritime environment 
                  while overcoming connectivity and technology challenges.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
              }}>
                <h4>🏭 Industrial Heritage</h4>
                <p>
                  Deep understanding of industrial business requirements, from safety compliance to 
                  international trade documentation. We create digital solutions that work in demanding 
                  industrial environments.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
              }}>
                <h4>🎯 Niche Market Expertise</h4>
                <p>
                  Specialized knowledge of marine, energy, and industrial sectors that dominate 
                  the Saint John economy. We understand the unique digital needs of these industries.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
              }}>
                <h4>🌐 Global Connections</h4>
                <p>
                  Help Saint John businesses connect with international markets through professional 
                  websites and digital marketing that showcases Canadian reliability and expertise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tourism & Seasonal */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <h2 className="section-title">Tourism & Seasonal Business Solutions</h2>
            
            <div className="tourism-content">
              <h3>🌅 Bay of Fundy Tourism</h3>
              <p>
                The Bay of Fundy attracts visitors from around the world. We help tourism businesses 
                capture seasonal opportunities with websites optimized for travel searches and 
                automated marketing campaigns that adjust to seasonal patterns.
              </p>
              
              <div className="services-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.5rem',
                maxWidth: '1400px',
                margin: '2rem auto 0'
              }}>
                <div className="service-card" style={{
                  background: 'white',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                }}>
                  <h4>Seasonal Campaign Automation</h4>
                  <p>Marketing campaigns that automatically adjust to peak and off-seasons</p>
                </div>
                <div className="service-card" style={{
                  background: 'white',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                }}>
                  <h4>Booking Integration</h4>
                  <p>Online reservation systems for accommodations, tours, and activities</p>
                </div>
                <div className="service-card" style={{
                  background: 'white',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                }}>
                  <h4>Multi-Language Support</h4>
                  <p>Websites optimized for international visitors and multiple languages</p>
                </div>
                <div className="service-card" style={{
                  background: 'white',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                }}>
                  <h4>Weather Integration</h4>
                  <p>Dynamic content that helps visitors plan around Fundy's unique tidal conditions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Ready to Elevate Your Saint John Business?</h2>
            
            <div className="getting-started-content">
              <div className="steps-content">
                <h3>Three Ways to Begin Your Digital Transformation:</h3>
                
                <div className="start-option">
                  <h4>🆓 Free Website Preview</h4>
                  <p>
                    See exactly how your professional website will look and function before making any commitment. 
                    We'll create a custom sample page showcasing your Saint John business.
                  </p>
                  <a href="/free-example" className="hero-button">Get Free Preview</a>
                </div>
                
                <div className="start-option">
                  <h4>📞 Business Strategy Session</h4>
                  <p>
                    Complimentary consultation to discuss your unique business challenges and opportunities 
                    in the Saint John market, with tailored digital solution recommendations.
                  </p>
                  <a href="/contact" className="hero-button">Book Strategy Session</a>
                </div>
                
                <div className="start-option">
                  <h4>💬 Custom Project Quote</h4>
                  <p>
                    Detailed proposal for your specific website, automation, or IT management needs. 
                    Pricing tailored to Saint John businesses and market conditions.
                  </p>
                  <a href="/contact" className="hero-button">Request Custom Quote</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Building Digital Success in Canada's First City</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                From historic Uptown to modern industry - we're here to help Saint John businesses 
                thrive in the digital age while honoring their maritime heritage.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="hero-button" style={{ backgroundColor: 'white', color: '#000' }}>
                Start Your Project
              </a>
              <a href="/free-example" className="secondary-button" style={{ borderColor: 'white', color: 'white' }}>
                See Free Preview
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Enhanced styles matching homepage professional design
const locationStyles = `
/* Professional service card hover effects */
.professional-card:hover {
  transform: translateY(-8px) !important;
  box-shadow: 0 20px 60px rgba(29, 122, 175, 0.15), 0 8px 32px rgba(29, 122, 175, 0.2) !important;
  border-color: rgba(29, 122, 175, 0.3) !important;
}

.professional-card:hover .service-icon {
  transform: scale(1.1) rotate(5deg) !important;
  box-shadow: 0 12px 35px rgba(29, 122, 175, 0.4) !important;
}

/* Ensure responsive grid behavior */
@media (max-width: 768px) {
  .services-grid[style*="repeat(2, 1fr)"] {
    grid-template-columns: 1fr !important;
  }
  
  .services-grid[style*="repeat(auto-fit"] {
    grid-template-columns: 1fr !important;
  }
  
  .service-card {
    padding: 1.5rem !important;
  }
}

/* Remove old styles */
.local-services-grid, .local-service-card {
  display: none;
}

.local-service-card:hover {
  transform: translateY(-5px);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  text-align: center;
}

.local-service-card h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.4rem;
}

.local-service-card p {
  color: var(--text-secondary);
  margin-bottom: 20px;
  line-height: 1.6;
}

.service-benefits {
  list-style: none;
  padding: 0;
}

.service-benefits li {
  padding: 5px 0;
  color: var(--text-secondary);
  position: relative;
  padding-left: 20px;
  font-size: 0.95rem;
}

.service-benefits li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

.service-areas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 40px;
}

.service-area-card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.service-area-card:hover {
  transform: translateY(-3px);
}

.service-area-card h4 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.service-area-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
}

.industries-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: start;
}

.industries-text h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
  margin-top: 30px;
  font-size: 1.3rem;
}

.industries-text h3:first-child {
  margin-top: 0;
}

.industries-text p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.industries-stats {
  display: grid;
  gap: 20px;
}

.stat-item {
  background: white;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.stat-item h4 {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 8px;
}

.stat-item p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.industrial-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.industrial-text h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
  margin-top: 30px;
  font-size: 1.3rem;
}

.industrial-text h3:first-child {
  margin-top: 0;
}

.industrial-text p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.success-stories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.story-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.story-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.story-card h4 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.story-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
  font-style: italic;
}

.story-results {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.story-results span {
  background: #f8f9fa;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  color: var(--primary-color);
  font-weight: 600;
}

.fundy-advantages {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.advantage-item {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.advantage-item h4 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.advantage-item p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.tourism-content {
  text-align: center;
}

.tourism-content h3 {
  color: var(--primary-color);
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.tourism-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.tourism-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-top: 30px;
}

.tourism-feature {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.tourism-feature h4 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.tourism-feature p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.4;
}

.getting-started-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.steps-content h3 {
  color: var(--primary-color);
  margin-bottom: 30px;
  font-size: 1.5rem;
  text-align: center;
}

.start-option {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  margin-bottom: 25px;
}

.start-option h4 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.start-option p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .local-services-grid {
    grid-template-columns: 1fr;
  }
  
  .service-areas-grid {
    grid-template-columns: 1fr;
  }
  
  .industries-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .success-stories {
    grid-template-columns: 1fr;
  }
  
  .fundy-advantages {
    grid-template-columns: 1fr;
  }
  
  .tourism-features {
    grid-template-columns: 1fr;
  }
  
  .story-results {
    flex-direction: column;
    align-items: center;
  }
}
`;

// Inject additional styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = locationStyles;
  document.head.appendChild(styleSheet);
}