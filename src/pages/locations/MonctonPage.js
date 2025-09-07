import React, { useEffect, useRef } from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Animations } from '../../components/Animations';
import { Footer } from '../../components/Footer';
import { colors } from '../../styles/colors';
import { gsap } from 'gsap';

export const MonctonPage = () => {
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
              <linearGradient id="techGradientMoncton" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1d7aaf" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
              <linearGradient id="pulseGradientMoncton" x1="0%" y1="0%" x2="100%" y2="0%">
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
              <circle cx="100" cy="100" r="8" fill="url(#techGradientMoncton)" opacity="0.4" />
              <circle cx="900" cy="300" r="6" fill="url(#techGradientMoncton)" opacity="0.5" />
              <circle cx="1100" cy="150" r="10" fill="url(#techGradientMoncton)" opacity="0.3" />
              <circle cx="200" cy="400" r="7" fill="url(#techGradientMoncton)" opacity="0.4" />
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
                Web Design & Digital Marketing in Moncton, New Brunswick
              </h1>
              <p style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.3rem)', 
                color: '#e2e8f0', 
                marginBottom: '40px',
                fontWeight: '300',
                maxWidth: '600px',
                margin: '0 auto 40px auto'
              }}>
                Professional websites, AI business automations, and managed IT services for contractors 
                and businesses in Moncton, Dieppe, Riverview, and throughout Greater Moncton. 
                Serving the Hub City with cutting-edge digital solutions.
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
              <h2 className="section-title">Digital Solutions for Greater Moncton Businesses</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto' }}>
                From downtown Moncton to Dieppe's growing tech corridor and Riverview's thriving business community, 
                we help Maritime businesses succeed with modern technology solutions.
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
                <h3>Moncton Website Development</h3>
                <p>
                  Custom WordPress and React websites optimized for Greater Moncton searches. 
                  Perfect for contractors, retailers, and service providers in Canada's fastest-growing city.
                </p>
                <ul className="service-benefits">
                  <li>Moncton local SEO optimization</li>
                  <li>Bilingual website options</li>
                  <li>E-commerce capabilities</li>
                  <li>Mobile-first design approach</li>
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
                <h3>Marketing Automation</h3>
                <p>
                  Automated systems for Google reviews, social media posting, and customer relationship 
                  management. Essential for busy Moncton contractors and service businesses.
                </p>
                <ul className="service-benefits">
                  <li>Review generation automation</li>
                  <li>Social media scheduling</li>
                  <li>Lead nurturing sequences</li>
                  <li>Customer retention systems</li>
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
                <h3>Business IT Management</h3>
                <p>
                  Complete managed IT services for Moncton businesses. Security, data protection, 
                  system monitoring, and technical support tailored to Maritime business needs.
                </p>
                <ul className="service-benefits">
                  <li>Cybersecurity protection</li>
                  <li>Cloud backup solutions</li>
                  <li>Remote technical support</li>
                  <li>Compliance management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Serving Greater Moncton and Surrounding Areas</h2>
            
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
                <h4>📍 Downtown Moncton</h4>
                <p>
                  Professional services, retail businesses, and restaurants in the central business district. 
                  Main Street, St. George Street, Church Street, and the cultural precinct.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease'
              }}>
                <h4>📍 Dieppe & Surrounding</h4>
                <p>
                  Growing tech companies, bilingual businesses, and service providers in New Brunswick's 
                  fourth-largest city. Strong focus on innovation and technology adoption.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease'
              }}>
                <h4>📍 Riverview & Hillsborough</h4>
                <p>
                  Residential service contractors, professional services, and retail businesses 
                  serving Riverview, Hillsborough, and Albert County communities.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease'
              }}>
                <h4>📍 Salisbury & Petitcodiac</h4>
                <p>
                  Rural contractors and service providers throughout Westmorland County. 
                  Agricultural businesses and rural service specialists.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease'
              }}>
                <h4>📍 Shediac & Coastal Areas</h4>
                <p>
                  Seasonal businesses, tourism-related services, and contractors serving 
                  the beautiful Shediac Bay and southeastern New Brunswick coast.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease'
              }}>
                <h4>📍 Sackville & Border Communities</h4>
                <p>
                  Cross-border businesses, university-related services, and contractors 
                  serving the Tantramar region and Nova Scotia border area.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Moncton Business Focus */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <h2 className="section-title">Industries We Serve in Greater Moncton</h2>
            
            <div className="industries-content">
              <div className="industries-text">
                <h3>Transportation & Logistics</h3>
                <p>
                  As the transportation hub of the Maritimes, Moncton hosts numerous logistics and 
                  transportation companies. We help trucking companies, freight forwarders, and 
                  logistics providers establish strong digital presences and streamline operations.
                </p>
                
                <h3>Construction & Development</h3>
                <p>
                  Greater Moncton's rapid growth drives constant construction activity. We specialize 
                  in websites for general contractors, residential builders, commercial developers, 
                  and specialty trades serving the booming market.
                </p>
                
                <h3>Healthcare & Professional Services</h3>
                <p>
                  The Moncton Hospital and numerous private practices make healthcare a major sector. 
                  We provide compliant IT solutions and professional websites for medical practices, 
                  dental offices, and healthcare professionals.
                </p>
                
                <h3>Technology & Innovation</h3>
                <p>
                  Dieppe's Emergence commercial park and Moncton's growing tech scene include many 
                  innovative companies. We provide scalable solutions for startups, software companies, 
                  and technology service providers.
                </p>
              </div>
              
              <div className="industries-stats">
                <div className="stat-item">
                  <h4>71,000+</h4>
                  <p>Moncton residents</p>
                </div>
                <div className="stat-item">
                  <h4>157,000+</h4>
                  <p>Greater Moncton CMA</p>
                </div>
                <div className="stat-item">
                  <h4>Fastest Growing</h4>
                  <p>City in Atlantic Canada</p>
                </div>
                <div className="stat-item">
                  <h4>Transportation Hub</h4>
                  <p>Maritime logistics center</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bilingual Services */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Bilingual Digital Solutions for New Brunswick</h2>
            
            <div className="bilingual-content">
              <div className="bilingual-text">
                <h3>🇫🇷 Services Bilingues Disponibles</h3>
                <p>
                  En tant qu'entreprise basée au Nouveau-Brunswick, nous comprenons l'importance 
                  du bilinguisme pour les entreprises de Moncton et du Grand Moncton. Nous offrons 
                  des sites web bilingues et des services en français.
                </p>
                
                <h3>🇨🇦 English & French Website Design</h3>
                <p>
                  Many Greater Moncton businesses serve both English and French-speaking customers. 
                  We create fully bilingual websites that provide seamless experiences in both languages, 
                  essential for businesses in New Brunswick's officially bilingual environment.
                </p>
                
                <h3>📈 Bilingual SEO & Marketing</h3>
                <p>
                  Optimize your online presence for both English and French search terms. 
                  We understand the unique SEO challenges of bilingual markets and create 
                  strategies that capture customers in both languages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <h2 className="section-title">Greater Moncton Client Success Stories</h2>
            
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
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🚛</div>
                <h4>Maritime Transport Solutions</h4>
                <p>
                  "LogicPros built us a bilingual WordPress website that showcases our cross-Canada 
                  capabilities. The automated lead follow-up system helped us convert 40% more 
                  inquiries into actual contracts. Great ROI."
                </p>
                <div className="story-results">
                  <span>Bilingual website</span>
                  <span>+40% lead conversion</span>
                </div>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🏗️</div>
                <h4>Dieppe Construction Group</h4>
                <p>
                  "The React website loads incredibly fast and looks professional on all devices. 
                  Combined with the Google review automation, we've established ourselves as 
                  the premium choice for commercial construction in Greater Moncton."
                </p>
                <div className="story-results">
                  <span>Premium positioning</span>
                  <span>Fast performance</span>
                </div>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🏥</div>
                <h4>Riverview Medical Practice</h4>
                <p>
                  "The managed IT services ensure our patient data is secure and compliant. 
                  The automated appointment reminders reduced no-shows by 35%, improving 
                  our scheduling efficiency significantly."
                </p>
                <div className="story-results">
                  <span>HIPAA compliant</span>
                  <span>-35% no-shows</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maritime Advantages */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Why Choose Local for Your Digital Needs</h2>
            
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
                <h4>🌊 Maritime Business Understanding</h4>
                <p>
                  We understand the unique challenges and opportunities of doing business in the Maritimes. 
                  Seasonal fluctuations, interprovincial commerce, and the importance of relationship-building 
                  in smaller communities.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
              }}>
                <h4>⏰ Atlantic Time Zone Advantage</h4>
                <p>
                  Working in the same time zone means real-time communication and support. 
                  No waiting for responses from companies in other time zones - we're here 
                  when you need us during Maritime business hours.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
              }}>
                <h4>🤝 Personal Relationships</h4>
                <p>
                  In the Maritimes, business is personal. We build long-term relationships with our clients, 
                  understanding your business evolution and providing ongoing support that grows with you.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
              }}>
                <h4>💼 Regional Market Knowledge</h4>
                <p>
                  Deep understanding of Maritime markets, from Moncton's rapid growth to seasonal 
                  tourism patterns. We tailor solutions to work effectively in regional contexts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <h2 className="section-title">Ready to Grow Your Moncton Business Online?</h2>
            
            <div className="getting-started-content">
              <div className="steps-content">
                <h3>Get Started with Your Digital Transformation:</h3>
                
                <div className="start-option">
                  <h4>🆓 Free Website Mockup</h4>
                  <p>
                    See exactly what your professional website will look like before you commit. 
                    We'll create a custom sample page for your Greater Moncton business at no cost.
                  </p>
                  <a href="/free-example" className="hero-button">Get Free Mockup</a>
                </div>
                
                <div className="start-option">
                  <h4>📞 Digital Strategy Call</h4>
                  <p>
                    15-minute consultation to discuss your business goals and recommend the best 
                    digital marketing strategies for the competitive Moncton market.
                  </p>
                  <a href="/contact" className="hero-button">Book Strategy Call</a>
                </div>
                
                <div className="start-option">
                  <h4>💬 Project Quote</h4>
                  <p>
                    Tell us about your project requirements and receive a detailed proposal 
                    for website design, automation, or IT services in Greater Moncton.
                  </p>
                  <a href="/contact" className="hero-button">Request Project Quote</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Powering Greater Moncton's Digital Future</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                From the Hub City to the entire Maritime region - we're your technology partners 
                for sustainable business growth.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="hero-button" style={{ backgroundColor: 'white', color: '#000' }}>
                Start Your Project
              </a>
              <a href="/free-example" className="secondary-button" style={{ borderColor: 'white', color: 'white' }}>
                See Free Example
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
}

/* Remove old styles */
.local-services-grid {
  display: none;
}

/* Remove old card styles - replaced with inline styles */
.local-service-card {
  display: none;
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

/* Remove old area card styles - replaced with service-card */
.service-areas-grid, .service-area-card {
  display: none;
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

.bilingual-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.bilingual-text h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
  margin-top: 30px;
  font-size: 1.3rem;
}

.bilingual-text h3:first-child {
  margin-top: 0;
}

.bilingual-text p {
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

.maritime-advantages {
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

/* Updated mobile responsive styles */
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
  }
  
  .industries-content {
    grid-template-columns: 1fr !important;
    gap: 2rem !important;
  }
  
  .story-results {
    flex-direction: column;
    align-items: center;
  }
  
  .service-card {
    padding: 1.5rem !important;
  }
}
`;

// Inject additional styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = locationStyles;
  document.head.appendChild(styleSheet);
}