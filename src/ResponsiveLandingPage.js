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
  const parallaxRef = useRef(null);
  const parallaxRef2 = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Enhanced GSAP scroll animations for header with hide on scroll down
    const header = headerRef.current;
    const parallaxSection = parallaxRef.current;
    const parallaxSection2 = parallaxRef2.current;
    if (!header) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
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

          // Parallax effect - smooth scrolling with positive values
          if (parallaxSection && window.innerWidth > 1024) {
            const parallaxOffset = parallaxSection.offsetTop;
            const parallaxHeight = parallaxSection.offsetHeight;

            if (currentScrollY > parallaxOffset - window.innerHeight && currentScrollY < parallaxOffset + parallaxHeight) {
              const yPos = (currentScrollY - parallaxOffset) * 0.5;
              parallaxSection.style.backgroundPosition = `center ${yPos}px`;
            }
          }

          // Second parallax effect for IT Problems section
          if (parallaxSection2 && window.innerWidth > 1024) {
            const parallaxOffset2 = parallaxSection2.offsetTop;
            const parallaxHeight2 = parallaxSection2.offsetHeight;

            if (currentScrollY > parallaxOffset2 - window.innerHeight && currentScrollY < parallaxOffset2 + parallaxHeight2) {
              const yPos2 = (currentScrollY - parallaxOffset2) * 0.5;
              parallaxSection2.style.backgroundPosition = `center ${yPos2}px`;
            }
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
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

      /* IT Services Showcase Image Styles */
      .it-service-image {
        object-fit: cover;
      }

      .it-service-image:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 60px rgba(29, 122, 175, 0.3) !important;
      }

      /* Responsive breakpoints for IT showcase grid */
      @media (max-width: 1024px) {
        .it-showcase-grid {
          grid-template-columns: 1fr !important;
          gap: 2.5rem !important;
          margin-bottom: 3rem !important;
        }

        .it-showcase-reverse {
          direction: ltr !important;
        }

        .it-showcase-reverse > div:first-child {
          order: 2;
        }

        .it-showcase-reverse > div:last-child {
          order: 1;
        }
      }

      @media (max-width: 768px) {
        .it-showcase-grid {
          gap: 2rem !important;
          margin-bottom: 2.5rem !important;
        }

        .it-showcase-image-wrapper {
          margin-bottom: 1rem;
        }

        .it-service-image {
          border-radius: 12px !important;
        }
      }

      @media (max-width: 480px) {
        .it-showcase-grid {
          gap: 1.5rem !important;
        }

        .it-service-image {
          border-radius: 8px !important;
          box-shadow: 0 8px 24px rgba(29, 122, 175, 0.15) !important;
        }
      }

      /* Parallax Section Responsive */
      @media (max-width: 1024px) {
        .parallax-section {
          background-attachment: scroll !important;
          height: 400px !important;
        }
      }

      @media (max-width: 768px) {
        .parallax-section {
          height: 350px !important;
        }

        .parallax-section h2 {
          font-size: 1.8rem !important;
        }

        .parallax-section > div > div {
          gap: 1.5rem !important;
        }

        .parallax-section [style*="fontSize: '2.5rem'"] {
          font-size: 2rem !important;
        }
      }

      @media (max-width: 480px) {
        .parallax-section {
          height: 300px !important;
        }

        .parallax-section > div > div {
          flex-direction: column !important;
          gap: 1rem !important;
        }
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
                  Web Design & AI Automations for Atlantic Canadian Businesses
                </h1>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  color: '#e2e8f0',
                  marginBottom: '2.5rem',
                  fontWeight: '300',
                  maxWidth: '500px'
                }}>
                  We build websites that get found and automate the busywork — so Atlantic Canadian businesses can focus on what they do best.
                </p>

                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <a href="/contact" className="hero-button">
                    Get My Free Quote
                  </a>
                  <a href="tel:5064782949" style={{
                    color: '#e2e8f0',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    (506) 478-2949
                  </a>
                </div>
              </div>

              <div className="hero-service-cards" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                height: 'auto',
                justifyContent: 'center'
              }}>
                {/* Build Card - FIRST (Web Design Primary) */}
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

                {/* Automate Card - SECOND */}
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

                {/* Secure Card - THIRD */}
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
              Fredericton Chamber of Commerce Member | 21 Years in Technology
            </p>
          </div>
        </section>

        {/* Client Logos Section */}
        <section style={{ backgroundColor: '#ffffff', padding: '3rem 0', borderBottom: '1px solid rgba(29, 122, 175, 0.1)' }}>
          <div className="container">
            <p style={{
              textAlign: 'center',
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#94a3b8',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '2rem'
            }}>Trusted by Atlantic Canadian Businesses</p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2.5rem'
            }}>
              {[
                { name: 'B Foulkes Plumbing', src: '/images/cropped-Logo-BF-175x75-1.png' },
                { name: 'IJM Construction Management', src: '/images/LOGOdarkLowRes-300x169.png' },
                { name: 'J. Parker Roofing', src: '/images/logoPNG--300x270.png' },
                { name: 'Thomson Plumbing', src: '/images/thomson-300x91.png' },
                { name: 'Volt Vision Electric', src: '/images/VoltVisionElectric_Transparent_400x350-300x300.png' },
                { name: "Crawford's Plumbing and Heating", src: '/images/Logo-black-text-300x96.png' },
              ].map(({ name, src }) => (
                <img key={name} src={src} alt={name} style={{
                  height: '50px',
                  width: 'auto',
                  maxWidth: '160px',
                  objectFit: 'contain',
                  filter: 'grayscale(100%)',
                  opacity: 0.6,
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => { e.target.style.filter = 'grayscale(0%)'; e.target.style.opacity = '1'; }}
                onMouseLeave={(e) => { e.target.style.filter = 'grayscale(100%)'; e.target.style.opacity = '0.6'; }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section style={{ backgroundColor: '#ffffff', padding: '60px 0' }}>
          <div className="container">
            <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
              <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '1.5rem', opacity: 0.2 }}>
                <path d="M0 32V19.2C0 14.4 1.2 10.4 3.6 7.2 6 3.87 9.47 1.47 14 0l2 3.6C12.93 4.67 11.07 6.13 9.4 8c-1.6 1.87-2.53 3.87-2.8 6H12V32H0zm22 0V19.2c0-4.8 1.2-8.8 3.6-12 2.4-3.33 5.87-5.73 10.4-7.2l2 3.6c-3.07 1.07-4.93 2.53-5.6 4.4-1.6 1.87-2.53 3.87-2.8 6H34V32H22z" fill="#1F7CFF"/>
              </svg>
              <blockquote style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                lineHeight: '1.8',
                color: '#374151',
                fontStyle: 'italic',
                margin: '0 0 2rem 0',
                fontWeight: '400'
              }}>
                "Aaron at LogicPros was amazing to work with when I was building my company website. From our initial phone call all the way to the completion of the site, Aaron worked diligently, fully educated himself on what I do to provide the proper service, and had exceptional communication from start to finish. I recommend LogicPros to anyone that is looking to get their business online."
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                <img
                  src="https://logicpros.ca/wp-content/uploads/2026/02/LOGOdarkLowRes-300x169.png"
                  alt="IJM Builders"
                  style={{ height: '36px', width: 'auto', objectFit: 'contain', opacity: 0.75 }}
                />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: '700', color: '#1a1a2e', fontSize: '1rem' }}>IJM Builders</div>
                  <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>Construction — Fredericton, NB</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Actually Do for Local Businesses */}
        <section
          ref={parallaxRef2}
          className="parallax-section-2"
          style={{
            position: 'relative',
            backgroundImage: 'url(/it-cybersecurity.jpg)',
            backgroundPosition: 'center 0px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '120%',
            padding: '80px 0',
            overflow: 'hidden'
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(22, 33, 62, 0.92) 0%, rgba(15, 52, 96, 0.92) 100%)',
            zIndex: 1
          }} />
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>What We Actually Do</h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', maxWidth: '580px', margin: '0 auto' }}>
                Plain English. No jargon. No upselling services you don't need.
              </p>
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
                    <rect x="3" y="4" width="18" height="12" rx="1" stroke="white" strokeWidth="2" fill="none"/>
                    <rect x="8" y="16" width="8" height="2" fill="white"/>
                  </svg>
                </div>
                <h3 style={{ color: '#1F7CFF', fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>Build you a site that gets found</h3>
                <p style={{ color: 'white', fontSize: '1rem', lineHeight: '1.6', margin: '0' }}>
                  We build websites that rank on Google for the searches your customers are actually making — not just something that looks nice.
                </p>
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
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ color: '#1F7CFF', fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>Automate the repetitive stuff</h3>
                <p style={{ color: 'white', fontSize: '1rem', lineHeight: '1.6', margin: '0' }}>
                  Follow-up emails, appointment reminders, social media posts — we set these up once so you stop doing them manually every week.
                </p>
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
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ color: '#1F7CFF', fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>Keep your tech from holding you back</h3>
                <p style={{ color: 'white', fontSize: '1rem', lineHeight: '1.6', margin: '0' }}>
                  Slow computers, dead email, hacked accounts — we fix the things that quietly cost you time and customers every day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Digital Security & Growth Solutions Section */}
        <section id="services" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">We help Atlantic Canadian businesses get found online, automate the busywork, and stay secure — plain English, no jargon, no runaround.</h2>
            </div>
            <div className="services-grid animate-on-scroll" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridTemplateRows: 'repeat(2, 1fr)',
              gap: '2rem',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* Websites - FIRST (Primary Service) */}
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
              {/* Automations - SECOND */}
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
              {/* Cybersecurity - THIRD */}
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
              {/* Managed IT - FOURTH */}
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

        {/* Why New Brunswick Businesses Choose LogicPros Section */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why New Brunswick Businesses Choose LogicPros</h2>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              maxWidth: '960px',
              margin: '0 auto'
            }}>
              <div>
                <h3 style={{ color: colors.text.primary, fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem' }}>
                  We're based here — not outsourced to a call center
                </h3>
                <p style={{ color: colors.text.secondary, fontSize: '1rem', lineHeight: '1.7', margin: '0' }}>
                  I'm Aaron. I run LogicPros out of Fredericton and I take every client call myself. If something breaks, you're not waiting on a ticket queue — you're calling someone who knows your setup.
                </p>
              </div>
              <div>
                <h3 style={{ color: colors.text.primary, fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem' }}>
                  I've done this for the provincial government — now I'm doing it for small business
                </h3>
                <p style={{ color: colors.text.secondary, fontSize: '1rem', lineHeight: '1.7', margin: '0' }}>
                  Before LogicPros, I led IT for the Government of New Brunswick. That background means I know what good looks like, and I can bring the same standard to a 10-person trades company without the government price tag.
                </p>
              </div>
              <div>
                <h3 style={{ color: colors.text.primary, fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem' }}>
                  You should know what you're paying for
                </h3>
                <p style={{ color: colors.text.secondary, fontSize: '1rem', lineHeight: '1.7', margin: '0' }}>
                  No retainers for things you don't need. No jargon designed to keep you dependent. Every recommendation I make, I explain in plain English first — and you decide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Parallax Section */}
        <section
          ref={parallaxRef}
          className="parallax-section"
          style={{
            position: 'relative',
            height: '500px',
            backgroundImage: 'url(/server-room-parallax.jpg)',
            backgroundPosition: 'center 0px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '120%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          {/* Dark Overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(26, 33, 46, 0.85), rgba(15, 52, 96, 0.75))',
            zIndex: 1
          }} />

          {/* Content */}
          <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '1.5rem',
              textShadow: '0 4px 12px rgba(0, 0, 0, 0.5)'
            }}>
              21 Years in Technology. Based in Fredericton.
            </h2>
            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
              color: '#e2e8f0',
              maxWidth: '720px',
              margin: '0 auto 2.5rem',
              lineHeight: '1.7',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
            }}>
              Before LogicPros, I led IT for the Government of New Brunswick. I've seen what happens when small businesses don't have the right tech support — and I built this company to fix that.
            </p>
            <div style={{
              display: 'flex',
              gap: '3rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              {[
                { stat: '21', label: 'Years in Technology' },
                { stat: '6+', label: 'Atlantic Canadian Clients' },
                { stat: 'NB', label: 'Fredericton Chamber Member' },
              ].map(({ stat, label }) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#1F7CFF',
                    marginBottom: '0.5rem',
                    textShadow: '0 0 20px rgba(31, 124, 255, 0.5)'
                  }}>{stat}</div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#cbd5e0',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Services Showcase Section */}
        <InteractiveServicesShowcase />

        {/* IT Services Visual Showcase */}
        <section className="section" style={{ backgroundColor: '#ffffff', padding: '4rem 0' }}>
          <div className="container">
            {/* Main Feature - IT Support Team */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
              marginBottom: '5rem'
            }} className="it-showcase-grid">
              <div className="it-showcase-image-wrapper">
                <img
                  src="/it-support-team.jpg"
                  alt="Professional IT support team providing help desk services in Fredericton"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '16px',
                    boxShadow: '0 16px 48px rgba(29, 122, 175, 0.2)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative'
                  }}
                  className="it-service-image"
                />
              </div>
              <div>
                <h2 style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '1.5rem',
                  lineHeight: '1.2'
                }}>
                  Responsive IT Support When You Need It
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  color: colors.text.secondary,
                  lineHeight: '1.8',
                  marginBottom: '2rem'
                }}>
                  Our experienced IT support team is ready to help your Fredericton business resolve technical issues quickly. From network troubleshooting to user support, we keep your team productive and your technology running smoothly.
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {['Fast response times', 'Remote and on-site support', 'Preventive monitoring', 'User-friendly help desk'].map((item, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '1rem',
                      fontSize: '1rem',
                      color: colors.text.secondary
                    }}>
                      <svg style={{ marginRight: '0.75rem', flexShrink: 0 }} width="20" height="20" fill={colors.primary} viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Alternating Section - Server Management */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
              marginBottom: '5rem'
            }} className="it-showcase-grid it-showcase-reverse">
              <div>
                <h2 style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '1.5rem',
                  lineHeight: '1.2'
                }}>
                  Expert Network & Infrastructure Management
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  color: colors.text.secondary,
                  lineHeight: '1.8',
                  marginBottom: '2rem'
                }}>
                  We manage and maintain your critical IT infrastructure so you can focus on your business. From servers to network security, our proactive approach prevents problems before they impact your operations.
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {['24/7 system monitoring', 'Regular maintenance & updates', 'Network optimization', 'Data backup & recovery'].map((item, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '1rem',
                      fontSize: '1rem',
                      color: colors.text.secondary
                    }}>
                      <svg style={{ marginRight: '0.75rem', flexShrink: 0 }} width="20" height="20" fill={colors.primary} viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="it-showcase-image-wrapper">
                <img
                  src="/it-server-work.jpg"
                  alt="IT technician managing server infrastructure and network cables"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '16px',
                    boxShadow: '0 16px 48px rgba(29, 122, 175, 0.2)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  className="it-service-image"
                />
              </div>
            </div>

            {/* Cybersecurity Section */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center'
            }} className="it-showcase-grid">
              <div className="it-showcase-image-wrapper">
                <img
                  src="/it-cybersecurity.jpg"
                  alt="Cybersecurity monitoring and code analysis for business protection"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '16px',
                    boxShadow: '0 16px 48px rgba(29, 122, 175, 0.2)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  className="it-service-image"
                />
              </div>
              <div>
                <h2 style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '1.5rem',
                  lineHeight: '1.2'
                }}>
                  Comprehensive Cybersecurity Protection
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  color: colors.text.secondary,
                  lineHeight: '1.8',
                  marginBottom: '2rem'
                }}>
                  Protect your business from cyber threats with our multi-layered security approach. We combine advanced technology with employee training to keep your data and systems secure.
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {['Threat detection & response', 'Security audits & assessments', 'Employee security training', 'Compliance assistance'].map((item, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '1rem',
                      fontSize: '1rem',
                      color: colors.text.secondary
                    }}>
                      <svg style={{ marginRight: '0.75rem', flexShrink: 0 }} width="20" height="20" fill={colors.primary} viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

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
              {[
                {
                  city: 'Fredericton', href: '/locations/fredericton',
                  desc: 'Serving Fredericton, Oromocto, Gagetown, and the Capital Region.',
                  links: [
                    { label: 'Web Design', href: '/locations/fredericton/web-design' },
                    { label: 'AI Automation', href: '/locations/fredericton/automations' },
                    { label: 'Cybersecurity', href: '/locations/fredericton/cybersecurity' },
                    { label: 'Managed IT', href: '/locations/fredericton/managed-it' },
                  ]
                },
                {
                  city: 'Moncton', href: '/locations/moncton',
                  desc: 'Serving Moncton, Dieppe, Riverview, Shediac, and Greater Moncton.',
                  links: [
                    { label: 'Web Design', href: '/locations/moncton/web-design' },
                    { label: 'AI Automation', href: '/locations/moncton/automations' },
                    { label: 'Cybersecurity', href: '/locations/moncton/cybersecurity' },
                    { label: 'Managed IT', href: '/locations/moncton/managed-it' },
                  ]
                },
                {
                  city: 'Saint John', href: '/locations/saint-john',
                  desc: 'Serving Saint John, Quispamsis, Rothesay, and Greater Saint John.',
                  links: [
                    { label: 'Web Design', href: '/locations/saint-john/web-design' },
                    { label: 'AI Automation', href: '/locations/saint-john/automations' },
                    { label: 'Cybersecurity', href: '/locations/saint-john/cybersecurity' },
                    { label: 'Managed IT', href: '/locations/saint-john/managed-it' },
                  ]
                }
              ].map(({ city, href, desc, links }) => (
                <div key={city} className="service-card" style={{ textAlign: 'center' }}>
                  <h3>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                    <a href={href} style={{ color: 'inherit', textDecoration: 'none' }}>{city}</a>
                  </h3>
                  <p style={{ marginBottom: '1rem' }}>{desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                    {links.map(({ label, href: lhref }) => (
                      <a key={label} href={lhref} style={{ fontSize: '0.8rem', color: '#1F7CFF', background: 'rgba(31,124,255,0.08)', border: '1px solid rgba(31,124,255,0.25)', borderRadius: '20px', padding: '4px 12px', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all 0.2s ease' }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(31,124,255,0.18)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(31,124,255,0.08)'; }}>
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Websites We've Built */}
        <section style={{ backgroundColor: '#f8faff', padding: '60px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', color: '#1a1a2e', marginBottom: '0.75rem' }}>
                Recent Websites We've Built
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                Real Atlantic Canadian businesses. Click any card to see the live site.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
              {[
                { name: 'IJM Builders', img: '/images/ijm-riy9mvzivqcux5qaloznbc2eh3qj5stgif7vv2q8dc.webp', tag: 'Construction', href: 'https://www.ijmbuilders.ca/' },
                { name: "Crawford's Plumbing", img: '/images/crawfords-riy9ly5c1p2jb73g3ad2tklt38dbgp34drqel44elc.webp', tag: 'Plumbing', href: 'https://www.crawfordsplumbing.ca/' },
                { name: 'Volt Vision Electric', img: '/images/voltvision.webp', tag: 'Electrical', href: 'https://www.voltvisionelectric.ca/' },
              ].map(({ name, img, tag, href }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{
                    borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    backgroundColor: '#fff', transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    cursor: 'pointer'
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.14)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'; }}
                  >
                    <div style={{ position: 'relative', paddingTop: '62%', backgroundColor: '#e5e7eb', overflow: 'hidden' }}>
                      <img src={img} alt={name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '1.25rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: '600', color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{tag}</span>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1a1a2e', margin: '0.4rem 0 0.5rem' }}>{name}</h3>
                      <span style={{ fontSize: '0.9rem', color: '#2563eb' }}>Visit site ↗</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works — 4-Step Process */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">How It Works</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '600px', margin: '0 auto' }}>
                From first conversation to live results — here's exactly what to expect.
              </p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '2rem',
              maxWidth: '1100px',
              margin: '0 auto'
            }}>
              {[
                { step: '01', title: 'Free Consultation', desc: "Tell us what you need. We'll listen, ask the right questions, and give you an honest recommendation — no jargon, no sales pressure." },
                { step: '02', title: 'Custom Proposal', desc: "We send a clear scope of work, timeline, and fixed-price quote within 48 hours. No surprises. No hidden fees." },
                { step: '03', title: 'We Build It', desc: "Websites go live in 2–4 weeks. Automations are deployed rapidly. You're kept in the loop every step of the way." },
                { step: '04', title: 'You See Results', desc: "More leads, less busywork, better security. We measure what matters and keep optimizing after launch." }
              ].map(({ step, title, desc }) => (
                <div key={step} style={{
                  background: '#ffffff',
                  border: '2px solid rgba(29, 122, 175, 0.1)',
                  borderRadius: '16px',
                  padding: '2rem',
                  boxShadow: '0 4px 16px rgba(29, 122, 175, 0.08)',
                  position: 'relative'
                }}>
                  <div style={{
                    fontSize: '3rem',
                    fontWeight: '900',
                    color: 'rgba(31, 124, 255, 0.12)',
                    lineHeight: '1',
                    marginBottom: '0.5rem'
                  }}>{step}</div>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    color: colors.text.primary,
                    marginBottom: '0.75rem'
                  }}>{title}</h3>
                  <p style={{
                    fontSize: '0.95rem',
                    color: colors.text.secondary,
                    lineHeight: '1.6',
                    margin: 0
                  }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Ready to Get Started?</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '600px', margin: '0 auto' }}>
                Book a free 30-minute call. We'll look at your situation, tell you exactly what we'd recommend, and give you a quote — even if you don't end up working with us.
              </p>
            </div>
            <div className="cta-buttons" style={{ textAlign: 'center', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
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
              }}>Get My Free Quote</a>
              <a href="tel:5064782949" style={{
                color: colors.text.secondary,
                textDecoration: 'none',
                fontSize: '1.05rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                (506) 478-2949
              </a>
            </div>
            <p style={{
              textAlign: 'center',
              color: colors.text.secondary,
              fontSize: '0.9rem',
              marginTop: '1.5rem',
              fontStyle: 'italic'
            }}>
              No pressure, no sales pitch — just honest advice from people who've been doing this for 21 years.
            </p>
          </div>
        </section>

      </main>


      {/* Footer */}
      <Footer />
    </div>
  );
};