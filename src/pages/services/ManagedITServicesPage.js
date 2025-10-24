import React, { useEffect, useRef } from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { colors } from '../../styles/colors';
import { gsap } from 'gsap';

export const ManagedITServicesPage = () => {
  const headerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    // Set page title
    document.title = "Managed IT Services New Brunswick | LogicPros | Enterprise IT Solutions Maritime";
    
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
      
      /* Managed IT Services Section Responsive */
      @media (max-width: 1200px) {
        div[style*="gridTemplateColumns: repeat(4, 1fr)"] {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
      
      @media (max-width: 768px) {
        div[style*="gridTemplateColumns: repeat(4, 1fr)"] {
          grid-template-columns: 1fr !important;
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
                  Tired of Being Your Own IT Department?
                </h1>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  color: '#e2e8f0',
                  marginBottom: '2.5rem',
                  fontWeight: '300',
                  maxWidth: '500px'
                }}>
                  You didn't start a business to troubleshoot printers and reset passwords all day. Stop playing IT hero and get back to what you're actually good at. We'll handle your technology so it just works — no more surprise downtime, no more 'Can you look at this?' interruptions.
                </p>
                
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <a href="/contact" className="hero-button">
                    Free Consultation
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
                {/* Monitor Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Monitor</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Network & System Management</p>
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

                {/* Defend Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Defend</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Cyber Protection & Threat Response</p>
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

                {/* Support Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Support</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Help Desk & End-User Assistance</p>
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
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The Cost of DIY IT Section */}
        <section style={{ backgroundColor: '#16213e', padding: '80px 0', color: 'white' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: '700',
                color: 'white',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>What DIY IT Is Really Costing You</h2>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              {/* Card 1 */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '30px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '10px'
                }}>10+ Hours</div>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: '1.6'
                }}>Every week the average business owner spends dealing with IT issues instead of running their business.</p>
              </div>

              {/* Card 2 */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '30px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="12" y1="1" x2="12" y2="23" stroke="white" strokeWidth="2"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '10px'
                }}>3x More</div>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: '1.6'
                }}>Businesses with proactive IT support spend 3x less on IT problems than those who wait for things to break.</p>
              </div>

              {/* Card 3 */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '30px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="12" y1="9" x2="12" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="17" r="1" fill="white"/>
                  </svg>
                </div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '10px'
                }}>43%</div>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: '1.6'
                }}>of data breaches target small businesses who think 'we're too small to be a target' and neglect IT security.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Responsive styles for new section */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 768px) {
              div[style*="gridTemplateColumns: repeat(3, 1fr)"] {
                grid-template-columns: 1fr !important;
              }
            }
          `
        }} />

        {/* Managed IT Services Section */}
        <section className="section" style={{ backgroundColor: '#f8faff', padding: '80px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: '700',
                color: '#1F7CFF',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>Our Managed IT Services</h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#6b7280',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                From 'someone answer the phone' support to proactive monitoring, we handle everything so your tech actually works
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '30px',
              marginBottom: '40px'
            }}>
              {/* IT Support & Helpdesk Card */}
              <a href="/services/managed-it/helpdesk" style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(31, 124, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: '#1a1a2e' }}>
                    IT Support & Helpdesk
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '15px' }}>
                    Real people answer the phone (not a ticket system). We fix problems fast, explain what happened in plain English, and make sure it doesn't happen again.
                  </p>
                  <span style={{ color: '#1F7CFF', fontWeight: '600', fontSize: '0.9rem' }}>
                    Learn More →
                  </span>
                </div>
              </a>

              {/* Network Management Card */}
              <a href="/services/managed-it/network-management" style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(31, 124, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="3" width="20" height="14" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                      <rect x="6" y="17" width="4" height="2" fill="white"/>
                      <rect x="14" y="17" width="4" height="2" fill="white"/>
                      <circle cx="12" cy="10" r="2" stroke="white" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: '#1a1a2e' }}>
                    Network Management
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '15px' }}>
                    No more 'the internet is down and nobody can work.' We monitor your network 24/7 and fix problems before you notice — or 10 minutes after if something breaks.
                  </p>
                  <span style={{ color: '#1F7CFF', fontWeight: '600', fontSize: '0.9rem' }}>
                    Learn More →
                  </span>
                </div>
              </a>

              {/* Cloud Services Card */}
              <a href="/services/managed-it/cloud-services" style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(31, 124, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: '#1a1a2e' }}>
                    Cloud Services
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '15px' }}>
                    Work from anywhere without 'can you VPN in?' headaches. Access your files, email, and systems securely from home, the office, or a coffee shop — it just works.
                  </p>
                  <span style={{ color: '#1F7CFF', fontWeight: '600', fontSize: '0.9rem' }}>
                    Learn More →
                  </span>
                </div>
              </a>

              {/* IT Consulting Card */}
              <a href="/services/managed-it/consulting" style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(31, 124, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="2" fill="none"/>
                      <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="5" r="1" fill="white"/>
                      <circle cx="12" cy="19" r="1" fill="white"/>
                      <circle cx="19" cy="12" r="1" fill="white"/>
                      <circle cx="5" cy="12" r="1" fill="white"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: '#1a1a2e' }}>
                    IT Consulting
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '15px' }}>
                    Stop guessing what tech you actually need. We'll tell you what's worth spending money on, what's not, and how to plan for growth without wasting thousands on the wrong solution.
                  </p>
                  <span style={{ color: '#1F7CFF', fontWeight: '600', fontSize: '0.9rem' }}>
                    Learn More →
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Why Maritime Businesses Trust Us Section */}
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
                Why Maritime Businesses Trust Us With Their IT
              </h2>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* Pillar 1 */}
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
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '15px'
                }}>We Actually Answer the Phone</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>
                  No ticket systems, no 'we'll get back to you in 48 hours' nonsense. When something breaks, you call us, a real person answers, and we fix it. That's how IT support should work.
                </p>
              </div>

              {/* Pillar 2 */}
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
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="12" y1="1" x2="12" y2="23" stroke="white" strokeWidth="2"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '15px'
                }}>Flat-Rate Pricing, No Surprises</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>
                  One predictable monthly rate covers everything — unlimited support, monitoring, updates, and advice. No hourly billing, no surprise invoices, no wondering if you should call us because the meter's running.
                </p>
              </div>

              {/* Pillar 3 */}
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
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                    <line x1="16" y1="2" x2="16" y2="6" stroke="white" strokeWidth="2"/>
                    <line x1="8" y1="2" x2="8" y2="6" stroke="white" strokeWidth="2"/>
                    <line x1="3" y1="10" x2="21" y2="10" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '15px'
                }}>We Plan Ahead, Not Just React</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>
                  Most IT companies wait for things to break and then charge you to fix them. We monitor, update, and maintain everything proactively so problems don't happen in the first place. Prevention is cheaper than emergency repairs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Responsive styles for new section */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 768px) {
              div[style*="gridTemplateColumns: repeat(3, 1fr)"] {
                grid-template-columns: 1fr !important;
              }
            }
          `
        }} />

      {/* Main Services Section */}
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
              Comprehensive Managed IT Solutions
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: colors.text.secondary, 
              maxWidth: '600px', 
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Technology should enable your business, not slow it down. We take care of everything from backups to updates to security so you can focus on your customers, not your computer problems.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px',
            alignItems: 'stretch'
          }}>
            <div style={{ 
              background: 'white',
              borderRadius: '20px',
              padding: '40px 35px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
              border: `2px solid ${colors.primary}`,
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
                  boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  margin: '0 auto 15px auto'
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                    <rect x="6" y="17" width="4" height="2" fill="white"/>
                    <rect x="14" y="17" width="4" height="2" fill="white"/>
                    <circle cx="12" cy="10" r="2" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '8px'
                }}>24/7 Network Monitoring</h3>
                <p style={{
                  color: colors.primary,
                  fontWeight: '600',
                  fontSize: '1.1rem'
                }}>Proactive Infrastructure Management</p>
              </div>
              <ul style={{ 
                listStyle: 'none',
                padding: 0,
                marginBottom: '25px'
              }}>
                {[
                  '24/7 network monitoring & management',
                  'Proactive issue detection & resolution',
                  'Real-time alerts & automated fixes',
                  'Server & endpoint monitoring',
                  'Performance optimization',
                  'Network security monitoring',
                  'Infrastructure health reporting'
                ].map((feature, index) => (
                  <li key={index} style={{ 
                    padding: '8px 0',
                    fontSize: '1rem',
                    color: colors.text.secondary,
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{ 
                      color: colors.primary, 
                      marginRight: '10px',
                      fontWeight: 'bold'
                    }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div style={{ textAlign: 'center', marginTop: 'auto', paddingTop: '20px' }}>
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
                  Request IT Service Consultation
                </a>
              </div>
            </div>

            <div style={{ 
              background: 'white',
              borderRadius: '20px',
              padding: '40px 35px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
              border: `2px solid ${colors.primary}`,
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
                  boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  margin: '0 auto 15px auto'
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '8px'
                }}>Personalized Phone Support</h3>
                <p style={{
                  color: colors.primary,
                  fontWeight: '600',
                  fontSize: '1.1rem'
                }}>Direct Client Assistance</p>
              </div>
              <ul style={{ 
                listStyle: 'none',
                padding: 0,
                marginBottom: '25px'
              }}>
                {[
                  'Personalized phone support for critical issues',
                  'Remote & onsite technical support',
                  'Software patch management & updates',
                  'IT asset & inventory management',
                  'Vendor & license management',
                  'Backup, recovery & disaster planning',
                  'IT strategy & planning'
                ].map((feature, index) => (
                  <li key={index} style={{ 
                    padding: '8px 0',
                    fontSize: '1rem',
                    color: colors.text.secondary,
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{ 
                      color: colors.primary, 
                      marginRight: '10px',
                      fontWeight: 'bold'
                    }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div style={{ textAlign: 'center', marginTop: 'auto', paddingTop: '20px' }}>
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
                  Get IT Management Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section style={{ backgroundColor: colors.backgrounds.light, padding: '80px 20px' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '30px',
            alignItems: 'stretch'
          }}>
            <div className="service-card" style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px 30px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
              border: `1px solid ${colors.backgrounds.light}`,
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
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
                margin: '0 auto 20px auto'
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                  <rect x="6" y="17" width="4" height="2" fill="white"/>
                  <rect x="14" y="17" width="4" height="2" fill="white"/>
                  <circle cx="12" cy="10" r="2" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '15px'
              }}>Proactive Network & Infrastructure Monitoring</h3>
              <p style={{ 
                color: colors.text.secondary, 
                lineHeight: '1.6',
                fontSize: '1rem'
              }}>
                Our team continuously monitors your network, servers, and endpoints to identify and resolve issues 
                before they impact your business operations. Ensure minimal downtime and peak performance with 
                real-time alerts and automated fixes.
              </p>
            </div>

            <div className="service-card" style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px 30px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
              border: `1px solid ${colors.backgrounds.light}`,
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
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
                margin: '0 auto 20px auto'
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '15px'
              }}>Personalized Phone Support & Client Assistance</h3>
              <p style={{ 
                color: colors.text.secondary, 
                lineHeight: '1.6',
                fontSize: '1rem'
              }}>
                We provide dedicated phone support for select clients, assisting with critical hardware, software, 
                and connectivity questions. This tailored assistance ensures timely help when you need it most, 
                offering peace of mind without full help desk coverage.
              </p>
            </div>

            <div className="service-card" style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px 30px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
              border: `1px solid ${colors.backgrounds.light}`,
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
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
                margin: '0 auto 20px auto'
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
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '15px'
              }}>Software Updates, Patch Management & Security</h3>
              <p style={{ 
                color: colors.text.secondary, 
                lineHeight: '1.6',
                fontSize: '1rem'
              }}>
                We manage regular software updates and patching to protect your systems from vulnerabilities and 
                security risks, maintaining safety and compliance.
              </p>
            </div>

            <div className="service-card" style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px 30px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
              border: `1px solid ${colors.backgrounds.light}`,
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
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
                margin: '0 auto 20px auto'
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                  <path d="M3 9h18" stroke="white" strokeWidth="2"/>
                  <path d="M9 21V9" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '15px'
              }}>IT Asset & Vendor Management</h3>
              <p style={{ 
                color: colors.text.secondary, 
                lineHeight: '1.6',
                fontSize: '1rem'
              }}>
                Track and manage your hardware, software licenses, and third-party vendors efficiently, reducing 
                costs and preventing disruptions.
              </p>
            </div>

            <div className="service-card" style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px 30px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
              border: `1px solid ${colors.backgrounds.light}`,
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
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
                margin: '0 auto 20px auto'
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="7,10 12,15 17,10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="15" x2="12" y2="3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '15px'
              }}>Backup & Disaster Recovery</h3>
              <p style={{ 
                color: colors.text.secondary, 
                lineHeight: '1.6',
                fontSize: '1rem'
              }}>
                Implement robust data backup and disaster recovery solutions to ensure business continuity with 
                tested restoration procedures.
              </p>
            </div>

            <div className="service-card" style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px 30px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
              border: `1px solid ${colors.backgrounds.light}`,
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
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
                margin: '0 auto 20px auto'
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
              }}>IT Strategy & Compliance Guidance</h3>
              <p style={{ 
                color: colors.text.secondary, 
                lineHeight: '1.6',
                fontSize: '1rem'
              }}>
                Partner with us for IT planning aligned with your business goals, compliance requirements, and 
                technology roadmap for future growth.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Industry-Specific Solutions */}
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
              Industry-Specific IT Services
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: colors.text.secondary, 
              maxWidth: '600px', 
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Tailored managed IT solutions for businesses across Maritime sectors
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '30px',
            marginBottom: '50px'
          }}>
            {[
              {
                icon: '🏦',
                title: 'Financial Services',
                description: 'Regulatory compliance, data security, and risk management for New Brunswick financial institutions.',
                features: ['Regulatory compliance', 'Data security', 'Risk management', 'Secure communications']
              },
              {
                icon: '🏪',
                title: 'Retail & E-commerce', 
                description: 'Point-of-sale system support, payment security, and network reliability for Maritime retailers.',
                features: ['Point-of-sale support', 'Payment security', 'Network reliability', 'E-commerce platforms']
              },
              {
                icon: '🎓',
                title: 'Education',
                description: 'Network management, student device support, and secure access management for educational institutions.',
                features: ['Network management', 'Device support', 'Access management', 'Educational software']
              },
              {
                icon: '🏭',
                title: 'Manufacturing',
                description: 'Operational technology management, supply chain IT integration, and industrial network security.',
                features: ['OT management', 'Supply chain integration', 'Industrial networks', 'Process optimization']
              },
              {
                icon: '⚖️',
                title: 'Legal & Professional',
                description: 'Data confidentiality, document management, and secure communications for Maritime law firms.',
                features: ['Data confidentiality', 'Document management', 'Secure communications', 'Compliance']
              },
              {
                icon: '🏨',
                title: 'Hospitality & Tourism',
                description: 'Keep guest Wi-Fi working, POS systems running, and booking systems online — because one system failure during peak season costs thousands in lost revenue',
                features: ['Booking systems', 'Guest Wi-Fi management', 'POS integration', 'Property management']
              }
            ].map((industry, index) => (
              <div key={index} style={{ 
                background: 'linear-gradient(135deg, #ffffff 0%, #fafbff 100%)',
                borderRadius: '20px',
                padding: '35px 25px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-30%',
                  right: '-15%',
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(135deg, rgba(29, 122, 175, 0.1) 0%, rgba(30, 64, 175, 0.05) 100%)',
                  borderRadius: '50%',
                  zIndex: 0
                }}></div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    fontSize: '2.5rem',
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '20px',
                    boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                    transition: 'all 0.3s ease',
                    margin: '0 auto 20px auto'
                  }}>
                    {industry.icon === '🏦' && (
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 10h18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M6 10v9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M10 10v9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M14 10v9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M18 10v9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M2 19h20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M12 3L2 8l10 2 10-2z" stroke="white" strokeWidth="2" strokeLinejoin="round" fill="none"/>
                        <circle cx="12" cy="6" r="1" fill="white"/>
                      </svg>
                    )}
                    {industry.icon === '🏪' && (
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="3" y1="6" x2="21" y2="6" stroke="white" strokeWidth="2"/>
                        <path d="M16 10a4 4 0 0 1-8 0" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {industry.icon === '🎓' && (
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {industry.icon === '🏭' && (
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 21h18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 21V7l8-4v18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19 21V11l-6-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 9h1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 13h1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {industry.icon === '⚖️' && (
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3v18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M9 21h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M12 3h5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M7 8l-3 6h6z" stroke="white" strokeWidth="2" strokeLinejoin="round" fill="none"/>
                        <path d="M17 8l-3 6h6z" stroke="white" strokeWidth="2" strokeLinejoin="round" fill="none"/>
                        <circle cx="7" cy="8" r="1" fill="white"/>
                        <circle cx="17" cy="8" r="1" fill="white"/>
                      </svg>
                    )}
                    {industry.icon === '🏨' && (
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Pineapple - Classic symbol of hospitality */}
                        {/* Pineapple body */}
                        <path d="M12 8c-2.5 0-4 1.5-4 4v4c0 2.5 1.5 4 4 4s4-1.5 4-4v-4c0-2.5-1.5-4-4-4z" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.2"/>

                        {/* Diamond pattern on body */}
                        <path d="M10 10l2 2 2-2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 13l2 2 2-2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 16l2 2 2-2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>

                        {/* Leaves on top */}
                        <path d="M12 8V3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M10 7l-1-3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M14 7l1-3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M11 6l-1.5-2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M13 6l1.5-2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M9.5 8l-1.5-2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M14.5 8l1.5-2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    )}
                  </div>
                  <h3 style={{ 
                    fontSize: '1.4rem', 
                    fontWeight: '600', 
                    color: '#1f2937', 
                    marginBottom: '12px'
                  }}>{industry.title}</h3>
                  <p style={{ 
                    color: colors.text.secondary, 
                    lineHeight: '1.6',
                    marginBottom: '20px'
                  }}>{industry.description}</p>
                  <ul style={{ 
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {industry.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={{ 
                        padding: '4px 0',
                        fontSize: '0.9rem',
                        color: colors.text.secondary,
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <span style={{ color: '#1d7aaf', marginRight: '8px' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a 
              href="/contact" 
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)',
                color: 'white',
                padding: '20px 50px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1.2rem',
                fontWeight: '600',
                boxShadow: '0 8px 30px rgba(29, 122, 175, 0.4)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 12px 40px rgba(29, 122, 175, 0.5)';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 8px 30px rgba(29, 122, 175, 0.4)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Get IT Management Quote
            </a>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
        <div className="container">
          <h2 className="section-title">Our Managed IT Service Process</h2>
          <p style={{
            fontSize: '1.2rem',
            color: colors.text.secondary,
            maxWidth: '700px',
            margin: '0 auto 50px auto',
            textAlign: 'center',
            lineHeight: '1.6'
          }}>
            We don't just drop a bunch of software on your network and disappear. Here's how we actually become your IT department:
          </p>
          <div style={{ marginTop: '40px', paddingTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
            <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>1</div>
              <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>IT Infrastructure Assessment</h3>
              <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Comprehensive audit identifying gaps, inefficiencies, and security risks in your current IT environment.</p>
            </div>
            
            <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems:'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>2</div>
              <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Custom IT Management Plan</h3>
              <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Strategic plan tailored to your business needs, budget, and growth objectives with clear timelines.</p>
            </div>
            
            <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>3</div>
              <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Implementation & Onboarding</h3>
              <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Smooth transition with minimal disruption, including setup of monitoring and support systems.</p>
            </div>
            
            <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>4</div>
              <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Ongoing Monitoring & Support</h3>
              <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>24/7 proactive management, regular reporting, and continuous improvements to optimize performance.</p>
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
            }}>Managed IT Services FAQ</h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: colors.text.secondary, 
              maxWidth: '600px', 
              margin: '0 auto'
            }}>
              Common questions about our managed IT services and support solutions
            </p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              {
                question: 'What is included in managed IT support?',
                answer: 'Comprehensive network monitoring, personalized phone assistance for critical issues, patch and software management, backup services, and vendor coordination. We provide end-to-end IT management tailored to your business needs.'
              },
              {
                question: 'How quickly can issues be resolved?',
                answer: 'Critical issues receive immediate attention through our 24/7 monitoring system, with rapid response times for phone support clients. Most network issues are resolved proactively before they impact your operations.'
              },
              {
                question: 'Do you assist with IT compliance?',
                answer: 'Yes, we help businesses comply with industry regulations and data security standards. Our team ensures your IT infrastructure meets compliance requirements and helps maintain necessary documentation.'
              },
              {
                question: 'Can you work with my existing IT staff?',
                answer: 'Absolutely. We integrate seamlessly as an extension of your existing team or work independently as your complete IT department. Our approach is flexible and collaborative.'
              },
              {
                question: 'What industries do you serve in New Brunswick?',
                answer: 'We serve Maritime businesses across all sectors including financial services, retail, education, manufacturing, legal, healthcare, and specialized industries like fisheries and shipping.'
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
          }}>Ready to Stop Fighting Your Technology?</h2>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '40px',
            maxWidth: '600px',
            margin: '0 auto 40px auto',
            opacity: 0.9
          }}>
            Book a free IT assessment. We'll review your current setup, identify what's at risk, and show you exactly what proactive IT support looks like — even if you don't work with us. No hard sell, no pressure, just honest advice.
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
              Request IT Service Consultation
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
              Get IT Management Quote
            </a>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
};