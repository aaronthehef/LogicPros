import React, { useEffect, useRef } from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { ServiceSchema } from '../../components/ServiceSchema';
import { colors } from '../../styles/colors';
import { gsap } from 'gsap';

export const AutomationsPage = () => {
  const headerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    // Set page title
    document.title = "AI Automation New Brunswick | Chatbots, Email Marketing Automation & Workflow Automation | LogicPros";
    
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
      .floating-particle:nth-child(8) { animation: float3 25s ease-in-out infinite reverse; }
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
      <ServiceSchema
        serviceName="AI Automation and Workflow Solutions"
        description="AI automation for New Brunswick small businesses. AI chatbots, email marketing automation, workflow automation, data analytics, customer personalization, inventory management, and accounting automation. Save hours every week — deployed by a local NB team."
        priceRange="$$"
        url="https://logicpros.ca/services/automations"
      />

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
                  AI Automation for New Brunswick Businesses
                </h1>
                <h2 style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  fontWeight: '700',
                  lineHeight: '1.2',
                  marginBottom: '1.5rem',
                  color: '#e2e8f0'
                }}>
                  Drowning in Repetitive Tasks? Let AI Do the Boring Stuff.
                </h2>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  color: '#e2e8f0',
                  marginBottom: '2.5rem',
                  fontWeight: '300',
                  maxWidth: '500px'
                }}>
                  AI chatbots that answer customers 24/7. Email marketing automation that nurtures leads while you sleep.
                  Workflow automation that eliminates data entry. Data analytics that tell you what's actually working.
                  We deploy AI integrations for New Brunswick businesses — fast, local, and built to last.
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
                {/* Automate Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Automate</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Business Processes & Workflows</p>
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

                {/* Optimize Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Optimize</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Efficiency & Productivity</p>
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
                      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>

                {/* Grow Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Grow</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Revenue & Customer Relationships</p>
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
                      <path d="M12 20h9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The Cost of Manual Work Section */}
        <section style={{
          background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)',
          padding: '80px 0',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: '700',
                color: 'white',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>The Hidden Cost of Doing Everything Manually</h2>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* Card 1: Time Wasted */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '40px 30px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  lineHeight: '1'
                }}>15+ Hours</div>
                <p style={{
                  color: 'white',
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  The average small business owner spends every week on repetitive tasks that could be automated.
                </p>
              </div>

              {/* Card 2: Growth Prevention */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '40px 30px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="12" y1="1" x2="12" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  lineHeight: '1'
                }}>32%</div>
                <p style={{
                  color: 'white',
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  of small business owners say administrative tasks prevent them from focusing on growth.
                </p>
              </div>

              {/* Card 3: Speed */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '40px 30px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  lineHeight: '1'
                }}>5x Faster</div>
                <p style={{
                  color: 'white',
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  Automated workflows complete tasks 5x faster than manual processes, with zero errors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Automation Services Section */}
        <section className="section" style={{ backgroundColor: '#f8faff', padding: '80px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: '700',
                color: '#1F7CFF',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>Our AI Automation Services</h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#6b7280',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Stop wasting time on tasks a computer can do better, faster, and without complaining
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              marginBottom: '40px'
            }}>
              {/* Business Automation Card */}
              <a href="/services/automations/business" style={{ textDecoration: 'none' }}>
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
                      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2"/>
                      <path d="M12 1v3m0 16v3M4.22 4.22l2.12 2.12m11.31 11.31l2.12 2.12M1 12h3m16 0h3M4.22 19.78l2.12-2.12m11.31-11.31l2.12-2.12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: '#1a1a2e' }}>
                    Business Automation
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '15px' }}>
                    Tired of copy-pasting between systems? We connect your tools so data flows automatically — no more double-entry, no more 'I forgot to update that.'
                  </p>
                  <span style={{ color: '#1F7CFF', fontWeight: '600', fontSize: '0.9rem' }}>
                    Learn More →
                  </span>
                </div>
              </a>

              {/* AI Chatbots Card */}
              <a href="/services/automations/chatbots" style={{ textDecoration: 'none' }}>
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
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 10h.01M12 10h.01M16 10h.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: '#1a1a2e' }}>
                    AI Chatbots
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '15px' }}>
                    Stop losing leads at 2 AM when you're asleep. AI chatbots answer questions, book appointments, and qualify prospects 24/7 — so you wake up to new opportunities, not missed ones.
                  </p>
                  <span style={{ color: '#1F7CFF', fontWeight: '600', fontSize: '0.9rem' }}>
                    Learn More →
                  </span>
                </div>
              </a>

              {/* Workflow Automation Card */}
              <a href="/services/automations/workflow" style={{ textDecoration: 'none' }}>
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
                      <circle cx="5" cy="12" r="2" fill="white"/>
                      <circle cx="12" cy="5" r="2" fill="white"/>
                      <circle cx="19" cy="12" r="2" fill="white"/>
                      <circle cx="12" cy="19" r="2" fill="white"/>
                      <path d="M7 12h5M12 7v5M12 12l5.5 0M12 12v5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: '#1a1a2e' }}>
                    Workflow Automation
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '15px' }}>
                    Every time you think 'I do this same thing every week' — that's a workflow we can automate. Save hours on invoicing, follow-ups, reporting, and all the other stuff you hate doing.
                  </p>
                  <span style={{ color: '#1F7CFF', fontWeight: '600', fontSize: '0.9rem' }}>
                    Learn More →
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* AI Automation Types — Keyword Anchor Section */}
        <section className="section" style={{ backgroundColor: '#ffffff', padding: '60px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', color: '#1a1a2e', marginBottom: '12px' }}>
                What We Automate for New Brunswick Businesses
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#6b7280', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
                From AI chatbots to email marketing automation — here's the full picture of what we can take off your plate.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', maxWidth: '1100px', margin: '0 auto' }}>
              {[
                { title: 'AI Chatbots', desc: 'Answer customer questions 24/7, book appointments, and qualify leads automatically — without you lifting a finger.' },
                { title: 'Email Marketing Automation', desc: 'Welcome sequences, follow-ups, review requests, and re-engagement campaigns that run on their own.' },
                { title: 'Workflow Automation', desc: 'Connect your apps so data flows automatically between systems — no more copy-paste, no more dropped balls.' },
                { title: 'Data Analytics', desc: 'Automated dashboards and reports so you always know your numbers without digging through spreadsheets.' },
                { title: 'Customer Personalization', desc: 'Segment your audience and send the right message to the right person at the right time — automatically.' },
                { title: 'Inventory Management', desc: 'Automated stock alerts, purchase order triggers, and supplier notifications keep your inventory under control.' },
                { title: 'Accounting Automation', desc: 'Sync sales, invoices, and expenses automatically between your POS, e-commerce, and accounting software.' },
              ].map(({ title, desc }) => (
                <div key={title} style={{
                  background: '#f8faff',
                  border: '1px solid rgba(31, 124, 255, 0.12)',
                  borderRadius: '14px',
                  padding: '1.5rem'
                }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1F7CFF', marginBottom: '0.5rem' }}>{title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: '1.6', margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Automations */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Essential Business Automations</h2>
            <p className="service-intro">
              These are the automations our clients implement first — because they save the most time and make the biggest impact.
            </p>
            
            <div className="automation-grid">
              <div className="automation-card">
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
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
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
                  <strong>Typical Result:</strong> Most clients see 3-5x more reviews within 6 months
                </div>
              </div>

              <div className="automation-card">
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
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
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
                  <strong>Typical Result:</strong> Stay visible online without spending hours creating content
                </div>
              </div>

              <div className="automation-card">
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
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="white" strokeWidth="2" fill="none"/>
                    <line x1="16" y1="2" x2="16" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="8" y1="2" x2="8" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="3" y1="10" x2="21" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
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
                  <strong>Typical Result:</strong> Never miss a follow-up and save 5-10 hours per week on scheduling
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Workflow Automations */}
        <section className="section" style={{ padding: '80px 0' }}>
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
                Advanced Workflow Automations
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: '#6b7280', 
                maxWidth: '600px', 
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Powerful automation workflows that integrate with your existing systems and processes
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
                  icon: '🔄',
                  title: 'Lead Follow-Up Sequences',
                  description: 'Automatically nurture leads with personalized email and SMS sequences. Convert more prospects into customers with consistent follow-up.'
                },
                {
                  icon: '💬',
                  title: 'Customer Communication Hub',
                  description: 'Centralize all customer communications across email, SMS, and social media. Never miss an important message again.'
                },
                {
                  icon: '📊',
                  title: 'Invoice & Payment Automation',
                  description: 'Automatic invoice generation, payment reminders, and late payment follow-up. Get paid faster with less administrative work.'
                },
                {
                  icon: '📋',
                  title: 'Project Management Integration',
                  description: 'Connect your project management tools with customer communications, scheduling, and reporting systems.'
                },
                {
                  icon: '🎯',
                  title: 'Lead Qualification System',
                  description: 'Automatically score and route leads based on project size, location, and urgency. Focus your time on the best opportunities.'
                },
                {
                  icon: '📈',
                  title: 'Business Intelligence Dashboard',
                  description: 'Real-time reporting on leads, conversions, revenue, and customer satisfaction metrics. Make data-driven decisions.'
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
                      {feature.icon === '🔄' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 4v6h-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M1 20v-6h6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {feature.icon === '💬' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {feature.icon === '📊' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line x1="18" y1="20" x2="18" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="12" y1="20" x2="12" y2="4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="6" y1="20" x2="6" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {feature.icon === '📋' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="14,2 14,8 20,8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="2"/>
                          <line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="2"/>
                          <polyline points="10,9 9,9 8,9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {feature.icon === '🎯' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/>
                          <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="2" fill="none"/>
                          <circle cx="12" cy="12" r="2" stroke="white" strokeWidth="2" fill="none"/>
                        </svg>
                      )}
                      {feature.icon === '📈' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 20V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 20V4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6 20v-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                Get Your Free Automation Assessment
              </a>
            </div>
          </div>
        </section>

        {/* n8n Platform Benefits */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Why We Use n8n Automation Platform</h2>
            
            <div className="platform-benefits">
              <div className="benefit-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px', marginTop: '25px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                    flexShrink: 0
                  }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{ margin: 0, color: colors.primary }}>No Vendor Lock-In</h3>
                </div>
                <p style={{ marginLeft: '65px' }}>Unlike Zapier or other proprietary platforms, n8n is open-source and self-hosted. You own your automations completely.</p>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px', marginTop: '25px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                    flexShrink: 0
                  }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="12" y1="1" x2="12" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{ margin: 0, color: colors.primary }}>Value-Driven</h3>
                </div>
                <p style={{ marginLeft: '65px' }}>No per-automation fees or usage limits. Once set up, your automations run reliably without ongoing subscription fees.</p>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px', marginTop: '25px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                    flexShrink: 0
                  }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                      <circle cx="12" cy="16" r="1" fill="white"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{ margin: 0, color: colors.primary }}>Data Security</h3>
                </div>
                <p style={{ marginLeft: '65px' }}>All data stays on your servers or our secure infrastructure. No third-party services handling your sensitive business data.</p>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px', marginTop: '25px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                    flexShrink: 0
                  }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 16.5c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zM17.5 16.5c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 13h18M3 9h18M3 5h18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{ margin: 0, color: colors.primary }}>Unlimited Scalability</h3>
                </div>
                <p style={{ marginLeft: '65px' }}>Add as many automations as you need without worrying about hitting limits or restrictions.</p>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px', marginTop: '25px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                    flexShrink: 0
                  }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{ margin: 0, color: colors.primary }}>Powerful Integrations</h3>
                </div>
                <p style={{ marginLeft: '65px' }}>Connect to virtually any service or application, including custom integrations specific to your business needs.</p>
              </div>
              
              <div className="benefit-image n8n-workflow-container">
                <img
                  src="/n8n.png"
                  alt="n8n Automation Workflow Dashboard for New Brunswick businesses showing AI Agent HTTP Request Google Sheets integration"
                  className="n8n-workflow-image"
                />
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <p style={{ color: colors.text.secondary, fontSize: '1rem', marginBottom: '15px' }}>Want to see n8n automation in action for your business?</p>
              <a href="/contact" style={{
                display: 'inline-block',
                background: 'transparent',
                color: colors.primary,
                border: `2px solid ${colors.primary}`,
                padding: '18px 40px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 8px 25px rgba(29, 122, 175, 0.4)';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.borderColor = 'rgba(29, 122, 175, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0)';
                e.target.style.borderColor = colors.primary;
              }}>Request a Demo</a>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <h2 className="section-title">Our Automation Implementation Process</h2>
            <div style={{ marginTop: '40px', paddingTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>1</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Business Analysis</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We analyze your current workflows, identify repetitive tasks, and determine the highest-impact automation opportunities.</p>
              </div>
              
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>2</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Custom Design</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Create automated workflows tailored to your specific business processes and existing tools and systems.</p>
              </div>
              
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>3</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Backend Setup</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Full technical implementation including server setup, integrations, testing, and security configuration.</p>
              </div>
              
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>4</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Monitoring & Support</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Ongoing monitoring to ensure automations run smoothly, with proactive maintenance and optimization.</p>
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

        {/* Why Maritime Businesses Choose Our Automation Services Section */}
        <section style={{ backgroundColor: colors.backgrounds.light, padding: '80px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: '700',
                color: '#1F7CFF',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>Why Maritime Businesses Trust Us With Their Automation</h2>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* Pillar 1: We Build It, You Own It */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
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
                  transition: 'all 0.3s ease',
                  margin: '0 auto 1.5rem auto',
                  color: 'white'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  lineHeight: '1.3',
                  textAlign: 'center'
                }}>We Build It, You Own It</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  Unlike subscription automation services that lock you in, we build custom solutions using n8n — an open-source platform you can control. No surprise price hikes, no vendor lock-in. Just automation that works.
                </p>
              </div>

              {/* Pillar 2: Built for Real Businesses */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
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
                  transition: 'all 0.3s ease',
                  margin: '0 auto 1.5rem auto',
                  color: 'white'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  lineHeight: '1.3',
                  textAlign: 'center'
                }}>Built for Real Businesses, Not Tech Companies</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  We don't assume you're a tech expert. We explain what's happening in plain English, set everything up for you, and make sure it actually works with your existing tools — not against them.
                </p>
              </div>

              {/* Pillar 3: Ongoing Support */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
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
                  transition: 'all 0.3s ease',
                  margin: '0 auto 1.5rem auto',
                  color: 'white'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  lineHeight: '1.3',
                  textAlign: 'center'
                }}>Ongoing Support, Not 'Figure It Out Yourself'</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  When something breaks or you want to add a new automation, we're here. No 'submit a ticket and wait 72 hours' nonsense. We monitor your automations and fix issues before you even notice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <h2 className="section-title">Automation Solutions for Every Industry</h2>
            <p className="service-intro">
              From contractors to consultants, retailers to restaurants — if you're doing the same tasks over and over, we can automate them. Here's how we help different industries.
            </p>
            
            <div className="industry-detailed-grid">
              {/* Retail & E-commerce */}
              <div className="industry-detailed-card">
                <div className="industry-header">
                  <div className="industry-icon-large" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '16px',
                    boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)'
                  }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 11l3 3L22 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Retail & E-commerce</h3>
                    <p className="industry-subtitle">Automate inventory management, order processing, and customer follow-up to increase sales and reduce manual work.</p>
                  </div>
                </div>
                
                <div className="automation-solutions">
                  <div className="solution-item">
                    <h4>Order Processing Automation</h4>
                    <p>Automatically confirm orders, update inventory, send tracking information, and follow up for reviews.</p>
                    <div className="benefit-tag">30% faster order fulfillment and higher customer satisfaction</div>
                  </div>
                  
                  <div className="solution-item">
                    <h4>Inventory Reorder Alerts</h4>
                    <p>Monitor stock levels and automatically create purchase orders when items reach minimum thresholds.</p>
                    <div className="benefit-tag">Eliminate stockouts and optimize inventory investment</div>
                  </div>
                  
                  <div className="solution-item">
                    <h4>Customer Review Automation</h4>
                    <p>Send automated review requests after delivery with follow-up sequences for non-responders.</p>
                    <div className="benefit-tag">200% increase in product reviews and social proof</div>
                  </div>
                </div>
              </div>

              {/* Healthcare & Wellness */}
              <div className="industry-detailed-card">
                <div className="industry-header">
                  <div className="industry-icon-large" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '16px',
                    boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)'
                  }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Healthcare & Wellness</h3>
                    <p className="industry-subtitle">Streamline patient appointments, follow-ups, and compliance while maintaining HIPAA standards.</p>
                  </div>
                </div>
                
                <div className="automation-solutions">
                  <div className="solution-item">
                    <h4>Appointment Reminders & Follow-ups</h4>
                    <p>Automated SMS/email reminders with rescheduling options and post-appointment follow-up sequences.</p>
                    <div className="benefit-tag">40% reduction in no-shows and improved patient outcomes</div>
                  </div>
                  
                  <div className="solution-item">
                    <h4>Patient Intake & Onboarding</h4>
                    <p>Automated patient registration forms, insurance verification, and new patient welcome sequences.</p>
                    <div className="benefit-tag">60% faster patient onboarding and reduced admin workload</div>
                  </div>
                  
                  <div className="solution-item">
                    <h4>Compliance & Documentation</h4>
                    <p>Automated compliance reminders, document expiration alerts, and secure record management.</p>
                    <div className="benefit-tag">Improved regulatory compliance and reduced risk</div>
                  </div>
                </div>
              </div>

              {/* Construction & Trades */}
              <div className="industry-detailed-card">
                <div className="industry-header">
                  <div className="industry-icon-large" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '16px',
                    boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)'
                  }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="9,22 9,12 15,12 15,22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Construction & Trades</h3>
                    <p className="industry-subtitle">Automate scheduling, dispatch, quoting, and project management to increase efficiency and profitability.</p>
                  </div>
                </div>
                
                <div className="automation-solutions">
                  <div className="solution-item">
                    <h4>Smart Scheduling & Dispatch</h4>
                    <p>Automate job scheduling, technician dispatch, and customer communication with real-time updates.</p>
                    <div className="benefit-tag">25% more jobs per day and improved customer satisfaction</div>
                  </div>
                  
                  <div className="solution-item">
                    <h4>Quote to Job Workflow</h4>
                    <p>Automated quote generation, customer approval, job creation, and material ordering processes.</p>
                    <div className="benefit-tag">50% faster quote-to-job conversion and reduced admin work</div>
                  </div>
                  
                  <div className="solution-item">
                    <h4>Post-Job Follow-up & Billing</h4>
                    <p>Automated thank you messages, review requests, invoice generation, and payment reminders.</p>
                    <div className="benefit-tag">35% faster payment collection and increased reviews</div>
                  </div>
                </div>
              </div>

              {/* Professional Services */}
              <div className="industry-detailed-card">
                <div className="industry-header">
                  <div className="industry-icon-large" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '16px',
                    boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)'
                  }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="14,2 14,8 20,8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="2"/>
                      <line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="2"/>
                      <polyline points="10,9 9,9 8,9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Professional Services</h3>
                    <p className="industry-subtitle">Automate client onboarding, billing, compliance tracking, and reporting to focus on billable work.</p>
                  </div>
                </div>
                
                <div className="automation-solutions">
                  <div className="solution-item">
                    <h4>Client Onboarding & Intake</h4>
                    <p>Automated client intake forms, document collection, welcome sequences, and internal task creation.</p>
                    <div className="benefit-tag">70% faster client onboarding and improved first impressions</div>
                  </div>
                  
                  <div className="solution-item">
                    <h4>Time Tracking & Invoicing</h4>
                    <p>Automated time capture reminders, invoice generation, payment processing, and overdue follow-ups.</p>
                    <div className="benefit-tag">40% faster invoicing and improved cash flow</div>
                  </div>
                  
                  <div className="solution-item">
                    <h4>Compliance & Deadline Management</h4>
                    <p>Automated deadline tracking, compliance reminders, document expiration alerts, and reporting.</p>
                    <div className="benefit-tag">Eliminate missed deadlines and reduce compliance risk</div>
                  </div>
                </div>
              </div>

              {/* Restaurants & Hospitality */}
              <div className="industry-detailed-card">
                <div className="industry-header">
                  <div className="industry-icon-large" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '16px',
                    boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)'
                  }}>
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
                  </div>
                  <div>
                    <h3>Restaurants & Hospitality</h3>
                    <p className="industry-subtitle">Automate reservations, customer follow-up, staff scheduling, and inventory management to enhance guest experience.</p>
                  </div>
                </div>
                
                <div className="automation-solutions">
                  <div className="solution-item">
                    <h4>Reservation Management</h4>
                    <p>Automated reservation confirmations, reminders, cancellations, and waitlist management.</p>
                    <div className="benefit-tag">30% reduction in no-shows and optimized table turnover</div>
                  </div>
                  
                  <div className="solution-item">
                    <h4>Guest Feedback & Reviews</h4>
                    <p>Automated post-visit feedback requests, review monitoring, and reputation management responses.</p>
                    <div className="benefit-tag">200% increase in customer reviews and improved ratings</div>
                  </div>
                  
                  <div className="solution-item">
                    <h4>Staff Scheduling & Communication</h4>
                    <p>Automated schedule creation, shift reminders, staff communication, and time tracking.</p>
                    <div className="benefit-tag">50% reduction in scheduling conflicts and improved staff satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Education & Training */}
              <div className="industry-detailed-card">
                <div className="industry-header">
                  <div className="industry-icon-large" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '16px',
                    boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)'
                  }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Education & Training</h3>
                    <p className="industry-subtitle">Automate student enrollment, course delivery, progress tracking, and certificate generation.</p>
                  </div>
                </div>
                
                <div className="automation-solutions">
                  <div className="solution-item">
                    <h4>Student Enrollment & Onboarding</h4>
                    <p>Automated application processing, document collection, welcome sequences, and account creation.</p>
                    <div className="benefit-tag">60% faster enrollment and improved student experience</div>
                  </div>
                  
                  <div className="solution-item">
                    <h4>Course Progress & Communication</h4>
                    <p>Automated progress tracking, assignment reminders, parent updates, and intervention alerts.</p>
                    <div className="benefit-tag">40% improvement in course completion rates</div>
                  </div>
                  
                  <div className="solution-item">
                    <h4>Certificate & Report Generation</h4>
                    <p>Automated certificate creation, transcript generation, and delivery to students upon completion.</p>
                    <div className="benefit-tag">Eliminate manual certificate processing and reduce errors</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <p style={{ color: colors.text.secondary, fontSize: '1.1rem', marginBottom: '20px' }}>See how these automations could work for your specific business.</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                <a href="/contact" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '18px 40px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '50px',
                  boxShadow: '0 6px 20px rgba(29, 122, 175, 0.4)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  textDecoration: 'none',
                  marginRight: '1rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 8px 30px rgba(29, 122, 175, 0.5)';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 6px 20px rgba(29, 122, 175, 0.4)';
                  e.target.style.transform = 'translateY(0)';
                }}>Schedule Strategy Session</a>
                <a href="/contact" style={{
                  display: 'inline-block',
                  background: 'transparent',
                  color: colors.primary,
                  border: `2px solid ${colors.primary}`,
                  padding: '18px 40px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '50px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 8px 25px rgba(29, 122, 175, 0.4)';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.borderColor = 'rgba(29, 122, 175, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = 'none';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.borderColor = colors.primary;
                }}>Ask About Your Industry</a>
              </div>
            </div>
          </div>
        </section>


        {/* FAQ */}
        <section className="section" style={{ backgroundColor: '#f8f9fa', padding: '80px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ 
                fontSize: 'clamp(2rem, 3.5vw, 3rem)', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>Automation FAQ</h2>
              <p style={{ 
                fontSize: '1.1rem', 
                color: colors.text.secondary, 
                maxWidth: '600px', 
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Common questions about our automation implementation process
              </p>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '25px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              {[
                {
                  question: 'How long does setup take?',
                  answer: 'Basic automations (reviews, social media) typically take 1-2 weeks. Complex workflow automations may take 3-4 weeks depending on integrations needed.'
                },
                {
                  question: 'What if something breaks?',
                  answer: 'We provide ongoing monitoring and maintenance. Our team is alerted if any automation fails and we fix issues proactively.'
                },
                {
                  question: 'Can I modify automations later?',
                  answer: 'Absolutely! We can adjust workflows as your business evolves. Many changes can be made without additional development time.'
                },
                {
                  question: 'Do you work with my existing tools?',
                  answer: 'Yes! We integrate with most popular business tools including CRMs, scheduling software, accounting systems, and more.'
                },
                {
                  question: 'Is my data secure?',
                  answer: 'Yes. We use enterprise-grade security with encrypted connections. Data can be hosted on your servers or our secure infrastructure.'
                },
                {
                  question: 'How do I get started?',
                  answer: 'Contact us for a free consultation where we\'ll assess your current processes and recommend the best automation solutions for your business.'
                }
              ].map((faq, index) => (
                <div key={index} style={{ 
                  background: 'white',
                  borderRadius: '16px',
                  padding: '30px 25px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: `1px solid rgba(${colors.primary.replace('#', '').match(/.{2}/g).map(hex => parseInt(hex, 16)).join(', ')}, 0.1)`,
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '20px',
                    color: colors.primary,
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    opacity: 0.3
                  }}>?</div>
                  <h3 style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: '700', 
                    color: colors.text.primary, 
                    marginBottom: '15px',
                    lineHeight: '1.3',
                    paddingRight: '30px'
                  }}>{faq.question}</h3>
                  <p style={{ 
                    color: colors.text.secondary, 
                    lineHeight: '1.6',
                    fontSize: '1rem',
                    margin: 0
                  }}>{faq.answer}</p>
                </div>
              ))}
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
              <a href="/contact" style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)',
                color: 'white',
                border: 'none',
                padding: '18px 40px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                boxShadow: '0 6px 20px rgba(29, 122, 175, 0.4)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none',
                marginRight: '1rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 8px 30px rgba(29, 122, 175, 0.5)';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 6px 20px rgba(29, 122, 175, 0.4)';
                e.target.style.transform = 'translateY(0)';
              }}>
                Request Automation Consultation
              </a>
              <a href="/contact" style={{
                display: 'inline-block',
                background: 'transparent',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                padding: '18px 40px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 8px 25px rgba(29, 122, 175, 0.4)';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.borderColor = 'rgba(29, 122, 175, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}>
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
  
  /* AI Automation Services Section Responsive */
  @media (max-width: 1024px) {
    div[style*="gridTemplateColumns: repeat(3, 1fr)"] {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
  
  @media (max-width: 768px) {
    div[style*="gridTemplateColumns: repeat(3, 1fr)"] {
      grid-template-columns: 1fr !important;
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