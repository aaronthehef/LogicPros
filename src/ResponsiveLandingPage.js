import React, { useEffect, useRef } from 'react';
import './responsive-style.css';
import { Logo } from './components/Logo';
import { Navigation } from './components/Navigation';
import { Animations } from './components/Animations';
import { Footer } from './components/Footer';
import { InteractiveServicesShowcase } from './components/InteractiveServicesShowcase';
import { colors } from './styles/colors';
import heroImage from './assets/hero-growtika.jpg';
import { gsap } from 'gsap';

export const ResponsiveLandingPage = () => {
  const heroRef = useRef(null);
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Enhanced GSAP scroll animations for header with hide on scroll down
    const header = headerRef.current;
    if (!header) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      const scrollingDown = currentScrollY > lastScrollY.current && currentScrollY > 100;
      const scrollingUp = currentScrollY < lastScrollY.current || currentScrollY <= 100;

      // Hide header when scrolling down, show when scrolling up
      if (scrollingDown) {
        header.style.transform = 'translateY(-120px)';
        header.style.transition = 'transform 0.3s ease';
      } else if (scrollingUp) {
        header.style.transform = 'translateY(0)';
        header.style.transition = 'transform 0.3s ease';
      }

      // Enhanced blur and shadow when scrolled
      if (currentScrollY > 100) {
        header.style.backdropFilter = "blur(25px) saturate(200%)";
        header.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(29, 122, 175, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)";
      } else {
        header.style.backdropFilter = "blur(20px) saturate(180%)";
        header.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(29, 122, 175, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)";
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Background panning animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes panLeft {
        0% { transform: translateX(0px); }
        100% { transform: translateX(-400px); }
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
        background: linear-gradient(135deg, #FFC600 0%, #FFB800 100%) !important;
        color: #1a1a2e !important;
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
        box-shadow: 0 8px 30px rgba(255, 198, 0, 0.6) !important;
        transform: translateY(-3px) !important;
        color: #1a1a2e !important;
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
      
      /* Professional Service Cards Hover Effects */
      .professional-card:hover {
        transform: translateY(-8px) !important;
        box-shadow: 0 20px 60px rgba(29, 122, 175, 0.15), 0 8px 32px rgba(29, 122, 175, 0.2) !important;
        border-color: rgba(29, 122, 175, 0.3) !important;
      }
      
      .professional-card:hover .service-icon {
        transform: scale(1.1) rotate(5deg) !important;
        box-shadow: 0 12px 35px rgba(29, 122, 175, 0.4) !important;
      }
      
      .professional-card:hover .feature-highlight {
        background: linear-gradient(135deg, #22c55e, #16a34a) !important;
        transform: scale(1.05) !important;
      }
      
      /* Override existing service card styles for professional cards */
      .professional-card .service-icon {
        width: 80px !important;
        height: 80px !important;
        margin-bottom: 1rem !important;
        background-color: transparent !important;
        border-radius: 20px !important;
      }
      
      .professional-card h3 {
        font-size: 1.4rem !important;
        font-weight: 700 !important;
        margin-bottom: 1rem !important;
        line-height: 1.3 !important;
      }
      
      .professional-card p {
        font-size: 1rem !important;
        line-height: 1.6 !important;
        margin-bottom: 0 !important;
      }
      
      /* Ensure cards are visible */
      .services-grid {
        display: grid !important;
        opacity: 1 !important;
        visibility: visible !important;
      }
      
      .professional-card {
        display: block !important;
        opacity: 1 !important;
        visibility: visible !important;
        transform: none !important;
      }
      
      /* Responsive 2x2 grid */
      @media (max-width: 768px) {
        .services-grid {
          grid-template-columns: 1fr !important;
          grid-template-rows: auto !important;
        }
      }

      /* Hero Service Card Animations */
      @keyframes pulseGlow {
        0%, 100% {
          box-shadow: 0 8px 32px rgba(29, 122, 175, 0.15), 0 0 20px rgba(29, 122, 175, 0.3);
        }
        50% {
          box-shadow: 0 8px 32px rgba(29, 122, 175, 0.25), 0 0 30px rgba(29, 122, 175, 0.5);
        }
      }

      .hero-service-card:hover {
        transform: translateY(-8px) scale(1.02) !important;
        box-shadow: 0 20px 60px rgba(29, 122, 175, 0.3), 0 0 40px rgba(29, 122, 175, 0.6) !important;
        border-color: rgba(29, 122, 175, 0.8) !important;
      }

      .hero-service-card:hover h3 {
        color: #ffffff !important;
        text-shadow: 0 0 10px rgba(29, 122, 175, 0.8) !important;
      }

      .hero-service-card:hover svg {
        transform: scale(1.1) !important;
        filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8)) !important;
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
          {/* Circuit Board Background */}
          <svg
            className="circuit-background"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
              opacity: 0.4
            }}
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* Subtle glow filter */}
              <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Professional circuit background with slow panning */}
            <g transform="translate(0,0)">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; -500,0; -500,-350; 0,-350; 0,0"
                dur="150s"
                repeatCount="indefinite"
              />

              {/* Clean circuit grid layout */}
              {[0, 1, 2, 3, 4, 5].map(layerX => (
                [...Array(4)].map((_, layerY) => (
                  <g key={`layer-${layerX}-${layerY}`} transform={`translate(${layerX * 400}, ${layerY * 250})`}>

                    {/* Single clean horizontal trace */}
                    <g stroke="#1F7CFF" strokeWidth="1.5" fill="none">
                      <path d="M50 120 L350 120" strokeDasharray="20,12" opacity="0.5">
                        <animate attributeName="stroke-dashoffset" values="0;-32" dur="3s" repeatCount="indefinite"/>
                      </path>
                    </g>

                    {/* Single clean vertical trace */}
                    {(layerX + layerY) % 2 === 0 && (
                      <g stroke="#22c55e" strokeWidth="1.5" fill="none">
                        <path d="M200 30 L200 220" strokeDasharray="18,10" opacity="0.4">
                          <animate attributeName="stroke-dashoffset" values="0;-28" dur="2.8s" repeatCount="indefinite"/>
                        </path>
                      </g>
                    )}

                    {/* Occasional L-shaped route */}
                    {(layerX + layerY) % 3 === 0 && (
                      <g stroke="#f59e0b" strokeWidth="1" fill="none">
                        <path d="M100 80 L100 160 L300 160" strokeDasharray="15,8" opacity="0.35">
                          <animate attributeName="stroke-dashoffset" values="0;-23" dur="3.5s" repeatCount="indefinite"/>
                        </path>
                      </g>
                    )}

                    {/* Subtle floating dots */}
                    <g>
                      {[...Array(3)].map((_, dotIndex) => {
                        const x = 80 + (dotIndex * 120);
                        const y = 60 + (dotIndex * 40);
                        const delay = dotIndex * 1.5;
                        return (
                          <circle
                            key={`dot-${dotIndex}`}
                            cx={x}
                            cy={y}
                            r="1.5"
                            fill="#1F7CFF"
                            opacity="0.6"
                          >
                            <animateTransform
                              attributeName="transform"
                              type="translate"
                              values="0,0; 8,-12; -5,10; 0,0"
                              dur="6s"
                              repeatCount="indefinite"
                              begin={`${delay}s`}
                            />
                            <animate
                              attributeName="opacity"
                              values="0.3;0.6;0.3"
                              dur="4s"
                              repeatCount="indefinite"
                              begin={`${delay}s`}
                            />
                          </circle>
                        );
                      })}
                    </g>
                  </g>
                ))
              ))}
            </g>
          </svg>

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '4rem', alignItems: 'center' }}>
              <div style={{ textAlign: 'left', color: 'white' }}>
                <h1 style={{
                  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                  fontWeight: '900',
                  lineHeight: '0.9',
                  marginBottom: '1rem',
                  color: '#1F7CFF',
                  textShadow: '0 0 5px rgba(31, 124, 255, 0.3), 0 0 10px rgba(31, 124, 255, 0.2)'
                }}>
                  Your Business Deserves Technology That Just Works
                </h1>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  color: '#e2e8f0',
                  marginBottom: '2.5rem',
                  fontWeight: '300',
                  maxWidth: '500px'
                }}>
                  Tired of IT headaches? Websites that don't convert? Worrying about cybersecurity at 3 AM? We help Maritime businesses stop fighting their technology and start growing.
                </p>
                
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <a href="/contact" className="hero-button">
                    Get Your Free Tech Assessment
                  </a>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#e2e8f0',
                    marginTop: '1rem',
                    opacity: 0.8
                  }}>
                    No pressure, no sales pitch — just great advice
                  </p>
                </div>
              </div>

              <div className="hero-service-cards" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                height: 'auto',
                justifyContent: 'center'
              }}>
                {/* Build Card */}
                <a href="/services/websites" className="hero-service-card" style={{
                  background: 'linear-gradient(135deg, rgba(29, 122, 175, 0.15), rgba(29, 122, 175, 0.08))',
                  border: '2px solid rgba(29, 122, 175, 0.3)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(29, 122, 175, 0.15), 0 0 0 rgba(29, 122, 175, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  minHeight: '80px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  animation: 'pulseGlow 3s ease-in-out infinite'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'flex-start' }}>
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Build</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Websites, SEO & Online Marketing</p>
                    <span style={{
                      color: '#1F7CFF',
                      fontSize: '0.8rem',
                      textDecoration: 'none',
                      fontWeight: '500',
                      marginTop: '0.25rem'
                    }}>Learn More</span>
                  </div>
                  <div style={{ marginLeft: '1rem', flexShrink: 0 }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="4" width="18" height="12" rx="1" stroke="white" strokeWidth="2" fill="none"/>
                      <rect x="8" y="16" width="8" height="2" fill="white"/>
                      <rect x="9" y="18" width="6" height="1" fill="white"/>
                    </svg>
                  </div>
                </a>

                {/* Automate Card */}
                <a href="/services/automations" className="hero-service-card" style={{
                  background: 'linear-gradient(135deg, rgba(29, 122, 175, 0.15), rgba(29, 122, 175, 0.08))',
                  border: '2px solid rgba(29, 122, 175, 0.3)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(29, 122, 175, 0.15), 0 0 0 rgba(29, 122, 175, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  minHeight: '80px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  animation: 'pulseGlow 3s ease-in-out infinite 1s'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'flex-start' }}>
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Automate</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>AI Powered Marketing & Business Automation</p>
                    <span style={{
                      color: '#1F7CFF',
                      fontSize: '0.8rem',
                      textDecoration: 'none',
                      fontWeight: '500',
                      marginTop: '0.25rem'
                    }}>Learn More</span>
                  </div>
                  <div style={{ marginLeft: '1rem', flexShrink: 0 }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="2" fill="none"/>
                      <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="5" r="1" fill="white"/>
                      <circle cx="12" cy="19" r="1" fill="white"/>
                      <circle cx="19" cy="12" r="1" fill="white"/>
                      <circle cx="5" cy="12" r="1" fill="white"/>
                    </svg>
                  </div>
                </a>

                {/* Secure Card */}
                <a href="/services/cybersecurity" className="hero-service-card" style={{
                  background: 'linear-gradient(135deg, rgba(29, 122, 175, 0.15), rgba(29, 122, 175, 0.08))',
                  border: '2px solid rgba(29, 122, 175, 0.3)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(29, 122, 175, 0.15), 0 0 0 rgba(29, 122, 175, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  minHeight: '80px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  animation: 'pulseGlow 3s ease-in-out infinite 2s'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'flex-start' }}>
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Secure</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Managed IT, Cyber Protection & Security Audits</p>
                    <span style={{
                      color: '#1F7CFF',
                      fontSize: '0.8rem',
                      textDecoration: 'none',
                      fontWeight: '500',
                      marginTop: '0.25rem'
                    }}>Learn More</span>
                  </div>
                  <div style={{ marginLeft: '1rem', flexShrink: 0 }}>
                    <svg width="40" height="40" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L4 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-8-4z" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Credibility Bar */}
        <section style={{
          background: 'linear-gradient(135deg, #0f3460 0%, #16213e 50%, #1a1a2e 100%)',
          padding: '20px 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <p style={{
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: '500',
              margin: '0',
              letterSpacing: '0.5px'
            }}>
              21 Years in Technology | New Brunswick Based | Former Provincial Government IT Professional
            </p>
          </div>
        </section>

        {/* Why Technology Can't Wait Section */}
        <section style={{
          background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)',
          padding: '80px 0'
        }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Why Technology Can't Wait</h2>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '2rem',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M12 8v4m0 4h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 style={{
                  color: '#1F7CFF',
                  fontSize: '2.2rem',
                  fontWeight: '700',
                  marginBottom: '1rem'
                }}>85%</h3>
                <p style={{
                  color: 'white',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  margin: '0'
                }}>of SMBs faced a cyberattack in the last year. Is your business protected?</p>
              </div>
              
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '2rem',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  color: '#1F7CFF',
                  fontSize: '2.2rem',
                  fontWeight: '700',
                  marginBottom: '1rem'
                }}>3 Seconds</h3>
                <p style={{
                  color: 'white',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  margin: '0'
                }}>That's how long you have to capture a website visitor's attention.</p>
              </div>
              
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '2rem',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="12" y1="1" x2="12" y2="23" stroke="white" strokeWidth="2"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  color: '#1F7CFF',
                  fontSize: '2.2rem',
                  fontWeight: '700',
                  marginBottom: '1rem'
                }}>87 Hours</h3>
                <p style={{
                  color: 'white',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  margin: '0'
                }}>Average downtime per year for small businesses.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Digital Security & Growth Solutions Section */}
        <section id="services" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">We're not just an IT company. We're your technology partner who speaks plain English, shows up when we say we will, and actually cares if your business succeeds.</h2>
            </div>
            <div className="services-grid animate-on-scroll" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridTemplateRows: 'repeat(2, 1fr)',
              gap: '2rem',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              <a href="/services/cybersecurity" className="service-card professional-card" style={{
                textDecoration: 'none',
                color: 'inherit',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(29, 122, 175, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(29, 122, 175, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'block',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div className="service-icon floating-icon" style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L4 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-8-4z" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Sleep Easy at Night</h3>
                <p>
                  One breach can destroy years of reputation and cost thousands in recovery. We protect your business with enterprise-grade security that actually works — at prices small businesses can afford.
                </p>
                <div style={{
                  marginTop: '1rem',
                  textAlign: 'center',
                  color: '#1F7CFF',
                  fontWeight: '600',
                  fontSize: '0.9rem'
                }}>
                  Secure Your Business →
                </div>
              </a>
              <a href="/services/websites" className="service-card professional-card" style={{ 
                textDecoration: 'none', 
                color: 'inherit',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(29, 122, 175, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(29, 122, 175, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'block',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div className="service-icon floating-icon" style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="12" rx="1" stroke="white" strokeWidth="2" fill="none"/>
                    <rect x="8" y="16" width="8" height="2" fill="white"/>
                    <rect x="9" y="18" width="6" height="1" fill="white"/>
                  </svg>
                </div>
                <h3>Websites That Actually Convert</h3>
                <p>
                  Stop losing customers to competitors with faster, better-looking sites. We build websites that turn visitors into paying customers — not digital brochures that sit there looking pretty.
                </p>
                <div style={{
                  marginTop: '1rem',
                  textAlign: 'center',
                  color: '#1F7CFF',
                  fontWeight: '600',
                  fontSize: '0.9rem'
                }}>
                  See Our Website Solutions →
                </div>
              </a>
              <a href="/services/automations" className="service-card professional-card" style={{ 
                textDecoration: 'none', 
                color: 'inherit',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(29, 122, 175, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(29, 122, 175, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'block',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div className="service-icon floating-icon" style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="5" r="1" fill="white"/>
                    <circle cx="12" cy="19" r="1" fill="white"/>
                    <circle cx="19" cy="12" r="1" fill="white"/>
                    <circle cx="5" cy="12" r="1" fill="white"/>
                  </svg>
                </div>
                <h3>Get Your Time Back</h3>
                <p>
                  Spending hours on repetitive tasks? Let AI handle the busywork while you focus on growing your business. Automate workflows, customer service, and data entry without hiring more staff.
                </p>
                <div style={{
                  marginTop: '1rem',
                  textAlign: 'center',
                  color: '#1F7CFF',
                  fontWeight: '600',
                  fontSize: '0.9rem'
                }}>
                  Explore AI Automation →
                </div>
              </a>
              <a href="/services/managed-it" className="service-card professional-card" style={{
                textDecoration: 'none',
                color: 'inherit',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(29, 122, 175, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(29, 122, 175, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'block',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div className="service-icon floating-icon" style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                    <rect x="6" y="17" width="4" height="2" fill="white"/>
                    <rect x="14" y="17" width="4" height="2" fill="white"/>
                    <circle cx="12" cy="10" r="2" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3>Tech That Never Fails You</h3>
                <p>
                  No more 'Can you look at this?' moments or surprise downtime. Get proactive IT support that fixes problems before they happen — and actually picks up the phone when you call.
                </p>
                <div style={{
                  marginTop: '1rem',
                  textAlign: 'center',
                  color: '#1F7CFF',
                  fontWeight: '600',
                  fontSize: '0.9rem'
                }}>
                  Get Reliable IT Support →
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Why Maritime Businesses Choose LogicPros Section */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why Maritime Businesses Choose LogicPros</h2>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(29, 122, 175, 0.1)',
                borderRadius: '16px',
                padding: '2.5rem 2rem',
                boxShadow: '0 8px 32px rgba(29, 122, 175, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="white" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 style={{
                  color: colors.text.primary,
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  lineHeight: '1.3'
                }}>Local Expertise That Gets It</h3>
                <p style={{
                  color: colors.text.secondary,
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '0'
                }}>
                  We understand the unique challenges of running a business in Atlantic Canada. No outsourced call centers, no tech bro jargon — just straight talk from people who live and work here.
                </p>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(29, 122, 175, 0.1)',
                borderRadius: '16px',
                padding: '2.5rem 2rem',
                boxShadow: '0 8px 32px rgba(29, 122, 175, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  color: colors.text.primary,
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  lineHeight: '1.3'
                }}>Security-First, Always</h3>
                <p style={{
                  color: colors.text.secondary,
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '0'
                }}>
                  With a background leading IT for New Brunswick's provincial government, we bring enterprise-level security thinking to every small business we serve. Your data is protected like it matters — because it does.
                </p>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(29, 122, 175, 0.1)',
                borderRadius: '16px',
                padding: '2.5rem 2rem',
                boxShadow: '0 8px 32px rgba(29, 122, 175, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  color: colors.text.primary,
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  lineHeight: '1.3'
                }}>We're Business Growth Partners, Not Just Tech Support</h3>
                <p style={{
                  color: colors.text.secondary,
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '0'
                }}>
                  Technology should make you money, not cost you sleep. We measure our success by whether your business is growing, not by how many hours we bill.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Services Showcase Section */}
        <InteractiveServicesShowcase />

        {/* Why Choose Us Section */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why New Brunswick Businesses Choose LogicPros</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto' }}>
                Local expertise, proven results, funding assistance, and fast implementation for New Brunswick businesses
              </p>
            </div>
            <div className="services-grid" style={{
              display: 'grid !important',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              maxWidth: '1400px',
              margin: '0 auto',
              opacity: '1 !important',
              visibility: 'visible !important'
            }}>
              <div className="service-card professional-card" style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(29, 122, 175, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(29, 122, 175, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                display: 'block',
                opacity: 1,
                visibility: 'visible'
              }}>
                <div className="service-icon" style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" viewBox="0 0 16 16">
                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
                  </svg>
                </div>
                <h3 style={{
                  color: colors.text.primary,
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  lineHeight: '1.3'
                }}>Funding Assistance Available</h3>
                <p style={{
                  color: colors.text.secondary,
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '0'
                }}>
                  Many New Brunswick businesses qualify for cybersecurity and technology grants. We help you research programs and determine eligibility for digital transformation, security audits, and AI automation projects.
                </p>
              </div>

              <div className="service-card professional-card" style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(29, 122, 175, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(29, 122, 175, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                display: 'block',
                opacity: 1,
                visibility: 'visible'
              }}>
                <div className="service-icon" style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9V21H9V15H15V21H21V9L12 2L3 9Z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ 
                  color: colors.text.primary, 
                  fontSize: '1.4rem', 
                  fontWeight: '700',
                  marginBottom: '1rem',
                  lineHeight: '1.3'
                }}>Local New Brunswick Expertise</h3>
                <p style={{
                  color: colors.text.secondary,
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '0'
                }}>
                  Based in New Brunswick with deep understanding of local business needs. Years of experience helping SMEs across all industries improve their digital security and operations.
                </p>
              </div>

              <div className="service-card professional-card" style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(29, 122, 175, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(29, 122, 175, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                display: 'block',
                opacity: 1,
                visibility: 'visible'
              }}>
                <div className="service-icon" style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L4 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-8-4z" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  color: colors.text.primary,
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  lineHeight: '1.3'
                }}>Complete Security & Growth Solutions</h3>
                <p style={{
                  color: colors.text.secondary,
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '0'
                }}>
                  From cybersecurity audits to AI automation to professional websites and hands free marketing. Everything your business needs to stay secure and competitive in the digital age.
                </p>
              </div>

              <div className="service-card professional-card" style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(29, 122, 175, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(29, 122, 175, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                display: 'block',
                opacity: 1,
                visibility: 'visible'
              }}>
                <div className="service-icon" style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" viewBox="0 0 16 16">
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
                  </svg>
                </div>
                <h3 style={{
                  color: colors.text.primary,
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  lineHeight: '1.3'
                }}>Proven Expertise</h3>
                <p style={{
                  color: colors.text.secondary,
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '0'
                }}>
                  Years of experience in cybersecurity, web development, and IT services. We understand the unique challenges facing New Brunswick businesses and deliver results.
                </p>
              </div>

              <div className="service-card professional-card" style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(29, 122, 175, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(29, 122, 175, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                display: 'block',
                opacity: 1,
                visibility: 'visible'
              }}>
                <div className="service-icon" style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ 
                  color: colors.text.primary, 
                  fontSize: '1.4rem', 
                  fontWeight: '700',
                  marginBottom: '1rem',
                  lineHeight: '1.3'
                }}>Fast Implementation</h3>
                <p style={{
                  color: colors.text.secondary,
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '0'
                }}>
                  Quick turnaround on all projects - website examples in 48 hours, security audits within a week, AI solutions deployed rapidly to get you results fast.
                </p>
              </div>

              <div className="service-card professional-card" style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(29, 122, 175, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(29, 122, 175, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                display: 'block',
                opacity: 1,
                visibility: 'visible'
              }}>
                <div className="service-icon" style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" viewBox="0 0 16 16">
                    <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"/>
                    <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"/>
                  </svg>
                </div>
                <h3 style={{
                  color: colors.text.primary,
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  lineHeight: '1.3'
                }}>Hands Free Marketing Systems</h3>
                <p style={{
                  color: colors.text.secondary,
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '0'
                }}>
                  Automated email sequences, social media scheduling, lead scoring, and customer retention systems that generate results while you focus on running your business.
                </p>
              </div>

            </div>
            <div className="cta-buttons" style={{ marginTop: '3rem', textAlign: 'center' }}>
              <a href="/contact" style={{
                background: 'linear-gradient(135deg, #FFC600 0%, #FFB800 100%)',
                color: '#1a1a2e',
                padding: '18px 40px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                display: 'inline-block',
                boxShadow: '0 6px 20px rgba(29, 122, 175, 0.4)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 8px 30px rgba(255, 198, 0, 0.6)';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 6px 20px rgba(29, 122, 175, 0.4)';
                e.target.style.transform = 'translateY(0)';
              }}>Start the Conversation</a>
            </div>
          </div>
        </section>

        {/* Grant & Funding Programs Section */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Funding Opportunities Available</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto' }}>
                New Brunswick businesses may be eligible for various grants to help cover technology implementation costs. 
                We help you research and apply for available programs.
              </p>
            </div>
            <div className="services-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridTemplateRows: 'repeat(2, 1fr)',
              gap: '2rem',
              maxWidth: '800px',
              margin: '0 auto 3rem auto',
              opacity: '1 !important',
              visibility: 'visible !important'
            }}>
              <div className="service-card professional-card" style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(34, 197, 94, 0.2)',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 4px 16px rgba(34, 197, 94, 0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                textAlign: 'center',
                display: 'block',
                opacity: 1,
                visibility: 'visible'
              }}>
                <div style={{
                  fontSize: '2rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  margin: '0 auto 1rem auto'
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="12" rx="1" stroke="white" strokeWidth="2" fill="none"/>
                    <rect x="8" y="16" width="8" height="2" fill="white"/>
                    <rect x="9" y="18" width="6" height="1" fill="white"/>
                  </svg>
                </div>
                <h4 style={{
                  color: colors.primary,
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  marginBottom: '0.8rem'
                }}>Digital Transformation</h4>
                <p style={{ 
                  color: colors.text.secondary, 
                  fontSize: '1rem', 
                  lineHeight: '1.5', 
                  margin: '0' 
                }}>Website development, e-commerce, digital marketing</p>
              </div>

              <div className="service-card professional-card" style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(29, 122, 175, 0.2)',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 4px 16px rgba(29, 122, 175, 0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                textAlign: 'center',
                display: 'block',
                opacity: 1,
                visibility: 'visible'
              }}>
                <div style={{
                  fontSize: '2rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  margin: '0 auto 1rem auto'
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L4 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-8-4z" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 style={{
                  color: colors.primary,
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  marginBottom: '0.8rem'
                }}>Cybersecurity Funding</h4>
                <p style={{ 
                  color: colors.text.secondary, 
                  fontSize: '1rem', 
                  lineHeight: '1.5', 
                  margin: '0' 
                }}>Security audits, MFA implementation, IT infrastructure</p>
              </div>

              <div className="service-card professional-card" style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(124, 58, 237, 0.2)',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 4px 16px rgba(124, 58, 237, 0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                textAlign: 'center',
                display: 'block',
                opacity: 1,
                visibility: 'visible'
              }}>
                <div style={{
                  fontSize: '2rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  margin: '0 auto 1rem auto'
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="5" r="1" fill="white"/>
                    <circle cx="12" cy="19" r="1" fill="white"/>
                    <circle cx="19" cy="12" r="1" fill="white"/>
                    <circle cx="5" cy="12" r="1" fill="white"/>
                  </svg>
                </div>
                <h4 style={{
                  color: colors.primary,
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  marginBottom: '0.8rem'
                }}>Innovation & AI Support</h4>
                <p style={{ 
                  color: colors.text.secondary, 
                  fontSize: '1rem', 
                  lineHeight: '1.5', 
                  margin: '0' 
                }}>AI automation, chatbots, efficiency improvements</p>
              </div>

              <div className="service-card professional-card" style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(225, 29, 72, 0.2)',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 4px 16px rgba(225, 29, 72, 0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                textAlign: 'center',
                display: 'block',
                opacity: 1,
                visibility: 'visible'
              }}>
                <div style={{
                  fontSize: '2rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  margin: '0 auto 1rem auto'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
                  </svg>
                </div>
                <h4 style={{
                  color: colors.primary,
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  marginBottom: '0.8rem'
                }}>Marketing Automation</h4>
                <p style={{ 
                  color: colors.text.secondary, 
                  fontSize: '1rem', 
                  lineHeight: '1.5', 
                  margin: '0' 
                }}>Email marketing, SEO, social media automation</p>
              </div>
            </div>

            <div style={{ 
              textAlign: 'center',
              padding: '2rem',
              background: 'rgba(29, 122, 175, 0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(29, 122, 175, 0.1)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <p style={{
                color: colors.text.secondary,
                fontSize: '1.1rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                fontWeight: '500'
              }}>
                Ready to explore funding opportunities for your technology projects?
              </p>
              <a href="/contact" style={{
                background: 'linear-gradient(135deg, #FFC600 0%, #FFB800 100%)',
                color: '#1a1a2e',
                padding: '18px 40px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                display: 'inline-block',
                boxShadow: '0 6px 20px rgba(29, 122, 175, 0.4)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 8px 30px rgba(255, 198, 0, 0.6)';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 6px 20px rgba(29, 122, 175, 0.4)';
                e.target.style.transform = 'translateY(0)';
              }}>Help Me Find Grant Opportunities</a>
            </div>
          </div>
        </section>

        {/* New Brunswick Service Areas */}
        <section className="section" style={{ backgroundColor: '#e8f2ff' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Serving New Brunswick Businesses</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto' }}>
                Local cybersecurity, AI automation, hands free marketing, and IT services across New Brunswick. 
                Professional technology solutions available province-wide.
              </p>
            </div>
            <div className="services-grid animate-on-scroll">
              <div className="service-card" style={{ textAlign: 'center' }}>
                <h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                  Fredericton
                </h3>
                <p>
                  Cybersecurity audits, AI chatbots, hands free marketing, managed IT services, and professional websites 
                  for Fredericton businesses. Expert technology solutions.
                </p>
              </div>
              <div className="service-card" style={{ textAlign: 'center' }}>
                <h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                  Moncton
                </h3>
                <p>
                  Security assessments, automated marketing, endpoint protection, and web development 
                  for Moncton area SMEs. Comprehensive technology support.
                </p>
              </div>
              <div className="service-card" style={{ textAlign: 'center' }}>
                <h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                  Saint John
                </h3>
                <p>
                  MFA implementation, SEO optimization, patch management, and digital solutions 
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
              <h2 className="section-title">Ready to Stop Fighting Your Technology?</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '600px', margin: '0 auto' }}>
                Book a free 30-minute tech assessment. We'll review your current setup, identify vulnerabilities and opportunities, and give you an honest roadmap — even if you don't work with us.
              </p>
            </div>
            <div className="cta-buttons" style={{ textAlign: 'center', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" style={{
                background: 'linear-gradient(135deg, #FFC600 0%, #FFB800 100%)',
                color: '#1a1a2e',
                padding: '18px 40px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                display: 'inline-block',
                boxShadow: '0 6px 20px rgba(29, 122, 175, 0.4)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 8px 30px rgba(255, 198, 0, 0.6)';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 6px 20px rgba(29, 122, 175, 0.4)';
                e.target.style.transform = 'translateY(0)';
              }}>Schedule Your Free Assessment</a>
            </div>
            <p style={{
              textAlign: 'center',
              color: colors.text.secondary,
              fontSize: '0.9rem',
              marginTop: '1.5rem',
              fontStyle: 'italic'
            }}>
              No pressure, no sales pitch — just great advice from people who've been doing this for 21 years.
            </p>
          </div>
        </section>

      </main>


      {/* Footer */}
      <Footer />
    </div>
  );
};