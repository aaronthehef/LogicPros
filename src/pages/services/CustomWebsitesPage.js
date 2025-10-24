import React, { useEffect, useRef } from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { colors } from '../../styles/colors';
import { gsap } from 'gsap';

export const CustomWebsitesPage = () => {
  const headerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    // Set page title
    document.title = "Custom Website Design New Brunswick | LogicPros | Professional Web Development Maritime";
    
    // Enhanced GSAP scroll animations for header
    const header = headerRef.current;
    
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

    // Hero background animation styles
    const style = document.createElement('style');
    style.textContent = `
      /* Ensure hero service cards are visible on mobile */
      @media (max-width: 768px) {
        .hero-service-cards {
          display: flex !important;
        }
        .hero-section .container {
          grid-template-columns: 1fr !important;
          gap: 2rem !important;
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
      
      /* Responsive grid styles */
      @media (max-width: 768px) {
        div[style*="gridTemplateColumns: repeat(2, 1fr)"],
        div[style*="gridTemplateColumns: repeat(3, 1fr)"] {
          grid-template-columns: 1fr !important;
        }
      }
      @media (max-width: 1024px) and (min-width: 769px) {
        div[style*="gridTemplateColumns: repeat(3, 1fr)"] {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="sticky-header" ref={headerRef}>
        <div className="header-content">
          <div className="logo">
            <Logo />
          </div>
          <Navigation />
        </div>
      </header>

      <main className="main-content">
        {/* Hero Section - Matching Homepage Style */}
        <section ref={heroRef} className="hero-section homepage-hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', overflow: 'hidden' }}>
          {/* Circuit Board Background - Same as Homepage */}
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
                  Tired of Looking Like Everyone Else Online?
                </h1>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  color: '#e2e8f0',
                  marginBottom: '2.5rem',
                  fontWeight: '300',
                  maxWidth: '500px'
                }}>
                  Your competitors all use the same 5 WordPress templates. Visitors can tell. They click away because your site looks generic, loads slowly, or doesn't work on mobile. A custom website isn't just 'nicer' — it's the difference between looking like a professional business and looking like you used a DIY builder on a weekend.
                </p>
                
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <a href="/contact" className="hero-button">
                    See What Your Site Could Be
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
                {/* Design Card */}
                <a href="/contact" className="hero-service-card" style={{
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Design</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Unique & Professional Design</p>
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
                      <rect x="2" y="3" width="20" height="14" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                      <rect x="6" y="17" width="4" height="2" fill="white"/>
                      <rect x="14" y="17" width="4" height="2" fill="white"/>
                      <circle cx="12" cy="10" r="2" stroke="white" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                </a>

                {/* Develop Card */}
                <a href="/contact" className="hero-service-card" style={{
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Develop</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Fast & Secure Development</p>
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
                      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>

                {/* Launch Card */}
                <a href="/contact" className="hero-service-card" style={{
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Launch</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Optimized for Conversions</p>
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
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Custom Websites Section */}
        <section style={{ backgroundColor: colors.backgrounds.light, padding: '80px 20px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ 
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>
                Why Choose Custom Websites Over Templates?
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: colors.text.secondary, 
                maxWidth: '600px', 
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Templates seem cheaper until you realize what you're actually giving up. Here's what happens when you go custom instead of settling for off-the-shelf:
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '40px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              {/* Problem 1: Templates Look Generic */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 35px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: `1px solid #e5e7eb`,
                position: 'relative',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '20px',
                    boxShadow: '0 8px 25px rgba(31, 124, 175, 0.3)',
                    transition: 'all 0.3s ease',
                    margin: '0 auto 15px auto'
                  }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 9h6v6h-6z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 9h6v6h-6z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 9h6v6h-6z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 3h6v6h-6z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 3h6v6h-6z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 15h6v6h-6z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 15h6v6h-6z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    color: '#1F7CFF',
                    marginBottom: '8px'
                  }}>Templates Look Generic</h3>
                  <p style={{
                    color: '#1F7CFF',
                    fontWeight: '600',
                    fontSize: '1.1rem'
                  }}>Template Problem</p>
                </div>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  That Wix/Squarespace site looks exactly like 10,000 other businesses. Visitors notice. They assume you're small-time or not established.
                </p>
                <div style={{
                  padding: '15px',
                  backgroundColor: 'rgba(29, 122, 175, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(29, 122, 175, 0.1)'
                }}>
                  <p style={{
                    color: colors.text.primary,
                    fontWeight: '600',
                    margin: '0 0 8px 0'
                  }}>Custom Solution:</p>
                  <p style={{
                    color: colors.text.secondary,
                    margin: '0',
                    fontSize: '0.95rem'
                  }}>
                    Unique design that matches your brand. No one else looks like you. Instant credibility boost just from having a professional, original site.
                  </p>
                </div>
              </div>

              {/* Problem 2: Template Performance Issues */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 35px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: `1px solid #e5e7eb`,
                position: 'relative',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '20px',
                    boxShadow: '0 8px 25px rgba(31, 124, 175, 0.3)',
                    transition: 'all 0.3s ease',
                    margin: '0 auto 15px auto'
                  }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                      <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    color: '#1F7CFF',
                    marginBottom: '8px'
                  }}>Template Performance Issues</h3>
                  <p style={{
                    color: '#1F7CFF',
                    fontWeight: '600',
                    fontSize: '1.1rem'
                  }}>Template Problem</p>
                </div>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  Templates load slow because they include code for 100 features you'll never use. Google penalizes slow sites. Visitors bounce after 3 seconds.
                </p>
                <div style={{
                  padding: '15px',
                  backgroundColor: 'rgba(29, 122, 175, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(29, 122, 175, 0.1)'
                }}>
                  <p style={{
                    color: colors.text.primary,
                    fontWeight: '600',
                    margin: '0 0 8px 0'
                  }}>Custom Solution:</p>
                  <p style={{
                    color: colors.text.secondary,
                    margin: '0',
                    fontSize: '0.95rem'
                  }}>
                    Built for speed from scratch. Only the code you actually need. Loads in under 1 second. Google rewards you with better rankings.
                  </p>
                </div>
              </div>

              {/* Problem 3: Template Limitations */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 35px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: `1px solid #e5e7eb`,
                position: 'relative',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '20px',
                    boxShadow: '0 8px 25px rgba(31, 124, 175, 0.3)',
                    transition: 'all 0.3s ease',
                    margin: '0 auto 15px auto'
                  }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="11" width="18" height="10" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    color: '#1F7CFF',
                    marginBottom: '8px'
                  }}>Template Limitations</h3>
                  <p style={{
                    color: '#1F7CFF',
                    fontWeight: '600',
                    fontSize: '1.1rem'
                  }}>Template Problem</p>
                </div>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  Want a custom booking system? Special calculator? Industry-specific feature? Too bad. Templates only do what the template builder thought of.
                </p>
                <div style={{
                  padding: '15px',
                  backgroundColor: 'rgba(29, 122, 175, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(29, 122, 175, 0.1)'
                }}>
                  <p style={{
                    color: colors.text.primary,
                    fontWeight: '600',
                    margin: '0 0 8px 0'
                  }}>Custom Solution:</p>
                  <p style={{
                    color: colors.text.secondary,
                    margin: '0',
                    fontSize: '0.95rem'
                  }}>
                    Build exactly what your business needs. Custom forms, integrations with your CRM, automated workflows — if you need it, we build it.
                  </p>
                </div>
              </div>

              {/* Problem 4: Mobile Experience */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 35px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: `1px solid #e5e7eb`,
                position: 'relative',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '20px',
                    boxShadow: '0 8px 25px rgba(31, 124, 175, 0.3)',
                    transition: 'all 0.3s ease',
                    margin: '0 auto 15px auto'
                  }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                      <line x1="12" y1="18" x2="12.01" y2="18" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    color: '#1F7CFF',
                    marginBottom: '8px'
                  }}>Mobile Experience</h3>
                  <p style={{
                    color: '#1F7CFF',
                    fontWeight: '600',
                    fontSize: '1.1rem'
                  }}>Template Problem</p>
                </div>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  Templates claim 'mobile responsive' but your menu breaks, images don't scale right, and forms are impossible to fill out on phones. 60% of your traffic sees a broken site.
                </p>
                <div style={{
                  padding: '15px',
                  backgroundColor: 'rgba(29, 122, 175, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(29, 122, 175, 0.1)'
                }}>
                  <p style={{
                    color: colors.text.primary,
                    fontWeight: '600',
                    margin: '0 0 8px 0'
                  }}>Custom Solution:</p>
                  <p style={{
                    color: colors.text.secondary,
                    margin: '0',
                    fontSize: '0.95rem'
                  }}>
                    Mobile-first design tested on actual devices. Looks perfect on every screen size. Works flawlessly whether someone's on an iPhone 8 or a 4K monitor.
                  </p>
                </div>
              </div>

              {/* Problem 5: SEO Disasters */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 35px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: `1px solid #e5e7eb`,
                position: 'relative',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '20px',
                    boxShadow: '0 8px 25px rgba(31, 124, 175, 0.3)',
                    transition: 'all 0.3s ease',
                    margin: '0 auto 15px auto'
                  }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/>
                      <path d="m21 21-4.35-4.35" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    color: '#1F7CFF',
                    marginBottom: '8px'
                  }}>SEO Disasters</h3>
                  <p style={{
                    color: '#1F7CFF',
                    fontWeight: '600',
                    fontSize: '1.1rem'
                  }}>Template Problem</p>
                </div>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  Template builders generate messy code that Google hates. Duplicate content issues, slow load times, poor mobile scores = invisible on search.
                </p>
                <div style={{
                  padding: '15px',
                  backgroundColor: 'rgba(29, 122, 175, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(29, 122, 175, 0.1)'
                }}>
                  <p style={{
                    color: colors.text.primary,
                    fontWeight: '600',
                    margin: '0 0 8px 0'
                  }}>Custom Solution:</p>
                  <p style={{
                    color: colors.text.secondary,
                    margin: '0',
                    fontSize: '0.95rem'
                  }}>
                    Clean, semantic code optimized for search engines from day one. Proper heading structure, fast load times, technical SEO built in — not bolted on later.
                  </p>
                </div>
              </div>

              {/* Problem 6: You're Stuck Forever */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 35px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: `1px solid #e5e7eb`,
                position: 'relative',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '20px',
                    boxShadow: '0 8px 25px rgba(31, 124, 175, 0.3)',
                    transition: 'all 0.3s ease',
                    margin: '0 auto 15px auto'
                  }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="5" y="11" width="14" height="10" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="16" r="1.5" fill="white"/>
                      <path d="M2 16h4M18 16h4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    color: '#1F7CFF',
                    marginBottom: '8px'
                  }}>You're Stuck Forever</h3>
                  <p style={{
                    color: '#1F7CFF',
                    fontWeight: '600',
                    fontSize: '1.1rem'
                  }}>Template Problem</p>
                </div>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  Switching from Wix/Squarespace later means rebuilding from scratch. You're locked in. They raise prices, you pay or lose your site.
                </p>
                <div style={{
                  padding: '15px',
                  backgroundColor: 'rgba(29, 122, 175, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(29, 122, 175, 0.1)'
                }}>
                  <p style={{
                    color: colors.text.primary,
                    fontWeight: '600',
                    margin: '0 0 8px 0'
                  }}>Custom Solution:</p>
                  <p style={{
                    color: colors.text.secondary,
                    margin: '0',
                    fontSize: '0.95rem'
                  }}>
                    You own everything. Code, design, content. Move hosts anytime. No proprietary lock-in. Your site, your rules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Website Features */}
        <section style={{ backgroundColor: colors.backgrounds.light, padding: '80px 20px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ 
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
                fontWeight: '700', 
                background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>
                Comprehensive Custom Website Solutions
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: colors.text.secondary, 
                maxWidth: '600px', 
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Everything you need for a professional online presence that drives results
              </p>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '30px',
              marginBottom: '40px'
            }}>
              {[
                {
                  icon: '🎨',
                  title: 'Custom Design & Branding',
                  description: 'Unique website design that perfectly matches your brand identity and stands out from competitors.'
                },
                {
                  icon: '📱',
                  title: 'Mobile-First Responsive Design',
                  description: 'Websites that look and work perfectly on all devices, from smartphones to desktop computers.'
                },
                {
                  icon: '⚡',
                  title: 'Lightning-Fast Performance',
                  description: 'Optimized code and images for blazing-fast load times that keep visitors engaged.'
                },
                {
                  icon: '🔍',
                  title: 'SEO Optimization',
                  description: 'Built with search engine optimization best practices to improve your Google rankings.'
                },
                {
                  icon: '🛡️',
                  title: 'Security & SSL',
                  description: 'Enterprise-level security with SSL certificates and protection against common threats.'
                },
                {
                  icon: '📊',
                  title: 'Analytics & Tracking',
                  description: 'Google Analytics setup and conversion tracking to measure your website performance.'
                }
              ].map((feature, index) => (
                <div key={index} style={{ 
                  background: 'linear-gradient(135deg, #ffffff 0%, #fafbff 100%)',
                  borderRadius: '20px',
                  padding: '40px 30px',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(29, 122, 175, 0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-20%',
                    width: '120px',
                    height: '120px',
                    background: 'linear-gradient(135deg, rgba(29, 122, 175, 0.1) 0%, rgba(30, 64, 175, 0.05) 100%)',
                    borderRadius: '50%',
                    zIndex: 0
                  }}></div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                      fontSize: '3rem',
                      marginBottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                      borderRadius: '20px',
                      boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                      transition: 'all 0.3s ease',
                      margin: '0 auto 25px auto'
                    }}>
                      {feature.icon === '🎨' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {feature.icon === '📱' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                          <line x1="12" y1="18" x2="12.01" y2="18" stroke="white" strokeWidth="2"/>
                        </svg>
                      )}
                      {feature.icon === '⚡' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {feature.icon === '🔍' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/>
                          <path d="m21 21-4.35-4.35" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {feature.icon === '🛡️' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {feature.icon === '📊' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="2" y="3" width="20" height="14" rx="2" stroke="white" strokeWidth="2"/>
                          <path d="M8 21h8M12 17v4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                          <circle cx="7" cy="10" r="1.5" fill="white"/>
                          <circle cx="12" cy="8" r="1.5" fill="white"/>
                          <circle cx="17" cy="11" r="1.5" fill="white"/>
                          <path d="M7 10l5-2M12 8l5 3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      )}
                    </div>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: '600', 
                      color: '#1f2937', 
                      marginBottom: '15px',
                      lineHeight: '1.3'
                    }}>{feature.title}</h3>
                    <p style={{ 
                      color: '#6b7280', 
                      lineHeight: '1.7',
                      fontSize: '1rem'
                    }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call-to-Action */}
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <a 
                href="/contact" 
                style={{ 
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)',
                  color: 'white',
                  padding: '18px 40px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  boxShadow: '0 6px 20px rgba(29, 122, 175, 0.4)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 8px 30px rgba(29, 122, 175, 0.5)';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 6px 20px rgba(29, 122, 175, 0.4)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Get Your Custom Website Quote
              </a>
            </div>
          </div>
        </section>

        {/* Is Custom Right For You Section */}
        <section style={{ backgroundColor: colors.backgrounds.light, padding: '80px 20px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: '700',
                color: colors.text.primary,
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>
                Is Custom Right For You?
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Custom websites aren't for everyone. Here's when it makes sense — and when a template is fine:
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '40px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              {/* You Need Custom If */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: `2px solid ${colors.primary}`
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 11l3 3L22 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  You Need Custom If:
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    "You're competing for customers who expect professionalism (lawyers, accountants, consultants, contractors)",
                    "Your website needs to DO something specific (booking, quoting, calculators, custom workflows)",
                    "You want to rank on Google for competitive keywords in your area",
                    "You're embarrassed to share your current site because it looks dated or generic",
                    "You have a real business with revenue — and your website should reflect that"
                  ].map((item, index) => (
                    <li key={index} style={{
                      padding: '12px 0',
                      borderBottom: '1px solid #f3f4f6',
                      color: colors.text.secondary,
                      display: 'flex',
                      alignItems: 'flex-start'
                    }}>
                      <span style={{
                        color: colors.primary,
                        marginRight: '10px',
                        fontWeight: 'bold',
                        flexShrink: 0
                      }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* A Template Is Fine If */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: `1px solid #e5e7eb`
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: colors.text.secondary,
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #6b7280, #4b5563)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  A Template Is Fine If:
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    "You're literally just starting out and need SOMETHING online fast (upgrade later)",
                    "Your business doesn't rely on your website for leads",
                    "You're okay looking like everyone else in your industry",
                    "Your budget is truly $0 and DIY is the only option right now"
                  ].map((item, index) => (
                    <li key={index} style={{
                      padding: '12px 0',
                      borderBottom: '1px solid #f3f4f6',
                      color: colors.text.secondary,
                      display: 'flex',
                      alignItems: 'flex-start'
                    }}>
                      <span style={{
                        color: '#6b7280',
                        marginRight: '10px',
                        fontWeight: 'bold',
                        flexShrink: 0
                      }}>○</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Callout Box */}
            <div style={{
              marginTop: '40px',
              padding: '25px',
              background: 'linear-gradient(135deg, rgba(29, 122, 175, 0.1), rgba(29, 122, 175, 0.05))',
              borderRadius: '16px',
              border: '1px solid rgba(29, 122, 175, 0.2)',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '40px auto 0 auto'
            }}>
              <p style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: colors.text.primary,
                margin: '0',
                lineHeight: '1.5'
              }}>
                Be honest: Does your current website make you look as professional as you actually are? If not, that's costing you customers.
              </p>
            </div>
          </div>
        </section>

        {/* What You Own Section */}
        <section style={{ backgroundColor: 'white', padding: '80px 20px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: '700',
                color: colors.text.primary,
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>
                You Own Everything. For Real.
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Unlike website builders that hold your site hostage, when we build your custom site, you own it all:
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* You Own the Code */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 30px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px auto'
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '15px'
                }}>You Own the Code</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>
                  All source files, designs, and code belong to you. Want to move to a different host? Take it. Want another developer to work on it later? They can. No proprietary lock-in BS.
                </p>
              </div>

              {/* You Own the Design */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 30px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px auto'
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '15px'
                }}>You Own the Design</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>
                  Every graphic, layout, and visual element is yours. Use them in marketing materials, update the design yourself, or hire someone else to refresh it in 5 years. We don't control it.
                </p>
              </div>

              {/* You Own the Content */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 30px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px auto'
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="14,2 14,8 20,8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="2"/>
                    <line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="2"/>
                    <polyline points="10,9 9,9 8,9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '15px'
                }}>You Own the Content</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>
                  Your text, images, videos — obviously yours. But also your blog posts, SEO metadata, and analytics data. Export it, back it up, or migrate it anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <h2 className="section-title">Our Custom Website Development Process</h2>
            <p style={{
              fontSize: '1.2rem',
              color: colors.text.secondary,
              maxWidth: '700px',
              margin: '0 auto 50px auto',
              textAlign: 'center',
              lineHeight: '1.6'
            }}>
              We don't disappear for 3 months and then unveil a 'ta-da!' moment you hate. Here's how we actually work with you:
            </p>
            <div style={{ marginTop: '40px', paddingTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>1</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Discovery & Strategy</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We learn about your business, goals, and target audience to create a comprehensive website strategy.</p>
              </div>
              
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>2</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Design & UX</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Create stunning visual designs and user experiences tailored to your brand and audience.</p>
              </div>
              
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>3</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Development & Testing</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Build your custom website with clean, optimized code and rigorous testing across all devices.</p>
              </div>
              
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>4</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Launch & Support</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Deploy your website and provide ongoing support, maintenance, and optimization to ensure continued success.</p>
              </div>
            </div>
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            @media (max-width: 768px) {
              div[style*="gridTemplateColumns: repeat(2, 1fr)"] {
                grid-template-columns: 1fr !important;
              }
            }
          `}} />
        </section>

        {/* FAQ Section */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light, padding: '80px 20px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ 
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '20px'
              }}>Custom Website FAQ</h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: colors.text.secondary, 
                maxWidth: '600px', 
                margin: '0 auto'
              }}>
                Common questions about our custom website development services
              </p>
            </div>
            
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {[
                {
                  question: 'How long does a custom website take?',
                  answer: 'Most custom websites take 4-8 weeks from discovery to launch, depending on complexity and features. Simple brochure websites may take 2-4 weeks, while complex e-commerce or web applications may take 3-6 months.'
                },
                {
                  question: 'What makes your websites different from templates?',
                  answer: 'Custom websites are built specifically for your business needs, with unique design, optimized performance, better SEO, and no limitations that templates have. They provide a competitive advantage and scale with your business.'
                },
                {
                  question: 'Do you provide ongoing maintenance?',
                  answer: 'Yes, we offer comprehensive maintenance packages including security updates, performance optimization, content updates, and technical support to keep your website running smoothly.'
                },
                {
                  question: 'Will my website be mobile-friendly?',
                  answer: 'Absolutely! All our websites are built with a mobile-first approach, ensuring they look and function perfectly on smartphones, tablets, and desktop computers.'
                },
                {
                  question: 'Can you integrate with my existing tools?',
                  answer: 'Yes, we integrate with CRM systems, booking software, payment processors, email marketing tools, and most third-party applications your business uses.'
                },
                {
                  question: 'What about SEO and rankings?',
                  answer: 'We build websites with SEO best practices from the ground up, including proper structure, fast loading times, mobile optimization, and semantic HTML to help improve your search engine rankings.'
                }
              ].map((faq, index) => (
                <div key={index} style={{ 
                  background: 'white',
                  borderRadius: '15px',
                  padding: '30px',
                  marginBottom: '20px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: `1px solid ${colors.backgrounds.light}`
                }}>
                  <h3 style={{ 
                    color: colors.text.primary, 
                    marginBottom: '15px',
                    fontSize: '1.2rem',
                    fontWeight: '600'
                  }}>{faq.question}</h3>
                  <p style={{ 
                    color: colors.text.secondary, 
                    lineHeight: '1.7',
                    margin: 0
                  }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section style={{ 
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', 
          color: 'white', 
          padding: '80px 20px',
          textAlign: 'center' 
        }}>
          <div className="container">
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              fontWeight: '700', 
              marginBottom: '30px'
            }}>Ready to Stop Looking Like a Template?</h2>
            <p style={{
              fontSize: '1.3rem',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px auto',
              opacity: 0.9
            }}>
              Let's build you a website you're actually proud to share. Free consultation, honest assessment of what you actually need, and a flat-rate quote with no hourly-billing surprises. Even if we're not the right fit, we'll tell you what to look for.
            </p>
            <div style={{ 
              display: 'flex', 
              flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
              gap: '20px', 
              justifyContent: 'center', 
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <a 
                href="/contact" 
                style={{ 
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)',
                  color: 'white',
                  padding: '18px 40px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  boxShadow: '0 6px 20px rgba(29, 122, 175, 0.4)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 8px 30px rgba(29, 122, 175, 0.5)';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 6px 20px rgba(29, 122, 175, 0.4)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                See What Your Site Could Be
              </a>
              <a 
                href="/contact" 
                style={{
                  display: 'inline-block',
                  background: 'transparent',
                  color: 'white',
                  padding: '18px 40px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
              >
                View Our Portfolio
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};