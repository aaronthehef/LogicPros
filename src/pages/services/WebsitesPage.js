import React, { useEffect } from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Animations } from '../../components/Animations';
import { Footer } from '../../components/Footer';
import { colors } from '../../styles/colors';

export const WebsitesPage = () => {
  useEffect(() => {
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional website design and development services. Custom WordPress and React websites with SEO optimization, responsive design, and fast turnaround. Transform your online presence with our expert web design team.');
    }
    
    // Update page title
    const pageTitle = document.querySelector('title');
    if (pageTitle) {
      pageTitle.textContent = 'Professional Website Design & Development Services | LogicPros';
    }
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
        background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%) !important;
        color: #000 !important;
        padding: 18px 40px !important;
        border-radius: 50px !important;
        text-decoration: none !important;
        font-size: 1.1rem !important;
        font-weight: 600 !important;
        border: none !important;
        box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4) !important;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
        display: inline-block !important;
        outline: none !important;
        box-sizing: border-box !important;
      }
      .hero-button:hover {
        box-shadow: 0 8px 30px rgba(255, 215, 0, 0.5) !important;
        transform: translateY(-3px) !important;
        color: #000 !important;
      }
      .secondary-button {
        background: transparent !important;
        color: #1F7CFF !important;
        border: 2px solid #1F7CFF !important;
        padding: 18px 40px !important;
        font-size: 1.1rem !important;
        font-weight: 600 !important;
        border-radius: 50px !important;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
        text-decoration: none !important;
        display: inline-block !important;
      }
      .secondary-button:hover {
        box-shadow: 0 8px 25px rgba(31, 124, 255, 0.4) !important;
        transform: translateY(-3px) !important;
        border-color: rgba(31, 124, 255, 0.8) !important;
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
      
      /* Professional Service Cards Hover Effects */
      .professional-card:hover {
        transform: translateY(-8px) !important;
        box-shadow: 0 20px 60px rgba(31, 124, 255, 0.15), 0 8px 32px rgba(31, 124, 255, 0.2) !important;
        border-color: rgba(31, 124, 255, 0.3) !important;
      }
      
      .professional-card:hover .service-icon {
        transform: scale(1.1) rotate(5deg) !important;
        box-shadow: 0 12px 35px rgba(31, 124, 255, 0.4) !important;
      }
      
      .professional-card:hover .feature-highlight {
        background: linear-gradient(135deg, #1F7CFF, #1e40af) !important;
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
      
      .feature-highlight {
        background: linear-gradient(135deg, #1F7CFF, #1e40af);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 600;
        margin-top: 1rem;
        display: inline-block;
        transition: all 0.3s ease;
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
        <Animations />
        {/* Hero Section */}
        <section className="hero-section homepage-hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', overflow: 'hidden' }}>
          {/* Circuit Board Background - matching front page */}
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
                  Is Your Website Costing You Customers?
                </h1>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  color: '#e2e8f0',
                  marginBottom: '2.5rem',
                  fontWeight: '300',
                  maxWidth: '500px'
                }}>
                  3 seconds. That's how long visitors give you before clicking away to a competitor.
                  If your website is slow, outdated, or doesn't work on mobile — you're losing business every single day.
                  We build fast, conversion-focused websites that turn visitors into paying customers.
                </p>
                
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <a href="/free-example" className="hero-button">
                    Get Your FREE Website Example
                  </a>
                  
                  <a href="/contact" className="hero-button">
                    Get Free Quote
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
                {/* Web Design Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Design</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Custom Websites & User Experience</p>
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

                {/* SEO Card */}
                <a href="/services/seo" className="hero-service-card" style={{
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
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Local SEO & Google Ranking</p>
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

                {/* Marketing Card */}
                <a href="/services/marketing" className="hero-service-card" style={{
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
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Digital Marketing & Lead Generation</p>
                    <span style={{
                      color: '#1F7CFF',
                      fontSize: '0.8rem',
                      textDecoration: 'none',
                      fontWeight: '500',
                      marginTop: '0.25rem'
                    }}>Learn More</span>
                  </div>
                  <div style={{ marginLeft: '1rem', flexShrink: 0 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Your Website Matters Section */}
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
              }}>Why Your Website Can't Wait</h2>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* Card 1: Credibility */}
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
                    <rect x="3" y="4" width="18" height="12" rx="1" stroke="white" strokeWidth="2" fill="none"/>
                    <rect x="8" y="16" width="8" height="2" fill="white"/>
                    <rect x="9" y="18" width="6" height="1" fill="white"/>
                  </svg>
                </div>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  lineHeight: '1'
                }}>75%</div>
                <p style={{
                  color: 'white',
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  of consumers judge your business credibility based on your website design.
                </p>
              </div>

              {/* Card 2: Load Time */}
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
                }}>3 Seconds</div>
                <p style={{
                  color: 'white',
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  That's how long you have before visitors abandon a slow-loading site and choose your competitor.
                </p>
              </div>

              {/* Card 3: Mobile */}
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
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                    <line x1="12" y1="18" x2="12.01" y2="18" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  lineHeight: '1'
                }}>60%+</div>
                <p style={{
                  color: 'white',
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  of web traffic comes from mobile devices. If your site isn't mobile-optimized, you're losing half your potential customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Website Design Services Section */}
        <section className="section" style={{ backgroundColor: '#f8faff', padding: '80px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: '700',
                color: '#1F7CFF',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>Our Website Design Services</h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#6b7280',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Whether you need a brand-new site or want to fix what's not working, we've got you covered
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '30px',
              marginBottom: '40px'
            }}>
              {/* Custom Websites Card */}
              <a href="/services/websites/custom" style={{ textDecoration: 'none' }}>
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
                      <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: '#1a1a2e' }}>
                    Custom Websites
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '15px' }}>
                    Stand out from cookie-cutter competitors. Get a website that actually represents your brand — not a template that looks like everyone else's.
                  </p>
                  <span style={{ color: '#1F7CFF', fontWeight: '600', fontSize: '0.9rem' }}>
                    Learn More →
                  </span>
                </div>
              </a>

              {/* E-Commerce Sites Card */}
              <a href="/services/websites/ecommerce" style={{ textDecoration: 'none' }}>
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
                      <path d="M9 2L6 9H18L15 2H9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 9H18V20C18 21 17 22 16 22H8C7 22 6 21 6 20V9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 22V16H15V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: '#1a1a2e' }}>
                    E-Commerce Sites
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '15px' }}>
                    Turn browsers into buyers. Sell 24/7 with a store that's easy to manage, secure for customers, and optimized to maximize every sale.
                  </p>
                  <span style={{ color: '#1F7CFF', fontWeight: '600', fontSize: '0.9rem' }}>
                    Learn More →
                  </span>
                </div>
              </a>

              {/* Website Redesign Card */}
              <a href="/services/websites/redesign" style={{ textDecoration: 'none' }}>
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
                      <path d="M1 4V10H7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M23 20V14H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10M23 14L18.36 18.36A9 9 0 0 1 3.51 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: '#1a1a2e' }}>
                    Website Redesign
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '15px' }}>
                    Embarrassed by your outdated website? We'll transform it into something you're proud to share — faster load times, modern design, and better results.
                  </p>
                  <span style={{ color: '#1F7CFF', fontWeight: '600', fontSize: '0.9rem' }}>
                    Learn More →
                  </span>
                </div>
              </a>

              {/* SEO & Marketing Card */}
              <a href="/services/websites/seo" style={{ textDecoration: 'none' }}>
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
                      <line x1="18" y1="20" x2="18" y2="10" stroke="white" strokeWidth="2"/>
                      <line x1="12" y1="20" x2="12" y2="4" stroke="white" strokeWidth="2"/>
                      <line x1="6" y1="20" x2="6" y2="14" stroke="white" strokeWidth="2"/>
                      <line x1="3" y1="20" x2="21" y2="20" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: '#1a1a2e' }}>
                    SEO & Marketing
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '15px' }}>
                    Tired of being invisible on Google? Get found by customers actively searching for what you offer — not just random traffic that bounces.
                  </p>
                  <span style={{ color: '#1F7CFF', fontWeight: '600', fontSize: '0.9rem' }}>
                    Learn More →
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Platform Options */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light, padding: '80px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: '700',
                color: '#1F7CFF',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>Choose Your Perfect Platform</h2>
              <p style={{
                fontSize: '1.1rem',
                color: colors.text.secondary,
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Not sure what platform is right for you? We'll recommend the best fit based on your goals and budget.
                Every option includes mobile-responsive design, SEO optimization, and lead capture — so you can focus on running your business, not managing tech.
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <div className="service-card professional-card" style={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                padding: '40px 35px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
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
                  transition: 'all 0.3s ease',
                  margin: '0 auto 1.5rem auto',
                  color: 'white'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                    <text x="12" y="17" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">W</text>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '8px',
                  textAlign: 'center'
                }}>WordPress Websites</h3>
                <p style={{
                  color: '#1F7CFF',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  textAlign: 'center',
                  marginBottom: '1.5rem'
                }}>Most Popular Choice</p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  marginBottom: '25px'
                }}>
                  {[
                    'Easy content updates',
                    'Thousands of plugins available',
                    'Great for SEO',
                    'Flexible hosting options',
                    'Perfect for businesses'
                  ].map((feature, index) => (
                    <li key={index} style={{
                      padding: '8px 0',
                      fontSize: '1rem',
                      color: colors.text.secondary,
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
                        <path d="M20 6L9 17L4 12" stroke="#1F7CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="feature-highlight" style={{
                  textAlign: 'center'
                }}>
                  <strong>Best for:</strong> Businesses who want full control and easy updates
                </div>
              </div>

              <div className="service-card professional-card" style={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                padding: '40px 35px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
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
                  transition: 'all 0.3s ease',
                  margin: '0 auto 1.5rem auto',
                  color: 'white'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '8px',
                  textAlign: 'center'
                }}>React Websites</h3>
                <p style={{
                  color: '#1F7CFF',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  textAlign: 'center',
                  marginBottom: '1.5rem'
                }}>Premium Performance</p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  marginBottom: '25px'
                }}>
                  {[
                    'Lightning-fast loading',
                    'Custom functionality',
                    'Modern technology',
                    'Superior mobile experience',
                    'Advanced integrations'
                  ].map((feature, index) => (
                    <li key={index} style={{
                      padding: '8px 0',
                      fontSize: '1rem',
                      color: colors.text.secondary,
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
                        <path d="M20 6L9 17L4 12" stroke="#1F7CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="feature-highlight" style={{
                  textAlign: 'center'
                }}>
                  <strong>Best for:</strong> Businesses wanting cutting-edge performance and features
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included - Modern Design */}
        <section className="section" style={{ backgroundColor: 'linear-gradient(135deg, #f8faff 0%, #ffffff 100%)', padding: '80px 0' }}>
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
                Everything You Need to Succeed Online
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#6b7280',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Professional websites built to help Maritime businesses grow and dominate their local market
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '30px',
              marginBottom: '40px'
            }}>
              {/* Professional Copywriting */}
              <div className="service-card professional-card" style={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
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
                  transition: 'all 0.3s ease',
                  margin: '0 auto 1.5rem auto',
                  color: 'white'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="14 2 14 8 20 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="10 9 9 9 8 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  lineHeight: '1.3',
                  textAlign: 'center'
                }}>Professional Copywriting</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  Professional content written specifically for your industry and target customers. No generic templates or cookie-cutter copy.
                </p>
              </div>

              {/* Mobile-Responsive Design */}
              <div className="service-card professional-card" style={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
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
                  transition: 'all 0.3s ease',
                  margin: '0 auto 1.5rem auto',
                  color: 'white'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                    <line x1="12" y1="18" x2="12.01" y2="18" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  lineHeight: '1.3',
                  textAlign: 'center'
                }}>Mobile-Responsive Design</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  Your website looks perfect and loads fast on all devices - desktop, tablet, and smartphone. Essential for reaching today's mobile customers.
                </p>
              </div>

              {/* Local SEO Optimization */}
              <div className="service-card professional-card" style={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
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
                  transition: 'all 0.3s ease',
                  margin: '0 auto 1.5rem auto',
                  color: 'white'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/>
                    <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  lineHeight: '1.3',
                  textAlign: 'center'
                }}>Local SEO Optimization</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  Optimized for "[your service] near me" searches. Includes Google My Business integration and local directory listings.
                </p>
              </div>

              {/* Lead Capture Forms */}
              <div className="service-card professional-card" style={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
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
                  transition: 'all 0.3s ease',
                  margin: '0 auto 1.5rem auto',
                  color: 'white'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2"/>
                    <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  lineHeight: '1.3',
                  textAlign: 'center'
                }}>Lead Capture Forms</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  Custom contact and inquiry forms that gather the information you need to qualify prospects effectively.
                </p>
              </div>

              {/* SSL Security & Fast Hosting */}
              <div className="service-card professional-card" style={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
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
                  transition: 'all 0.3s ease',
                  margin: '0 auto 1.5rem auto',
                  color: 'white'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11L9 14L15 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  lineHeight: '1.3',
                  textAlign: 'center'
                }}>SSL Security & Fast Hosting</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  Secure, encrypted connection with fast hosting (or integration with your preferred hosting provider).
                </p>
              </div>

              {/* Analytics Setup */}
              <div className="service-card professional-card" style={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
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
                  transition: 'all 0.3s ease',
                  margin: '0 auto 1.5rem auto',
                  color: 'white'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="18" y1="20" x2="18" y2="10" stroke="white" strokeWidth="2"/>
                    <line x1="12" y1="20" x2="12" y2="4" stroke="white" strokeWidth="2"/>
                    <line x1="6" y1="20" x2="6" y2="14" stroke="white" strokeWidth="2"/>
                    <line x1="3" y1="20" x2="21" y2="20" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  lineHeight: '1.3',
                  textAlign: 'center'
                }}>Analytics Setup</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  Google Analytics and Search Console integration to track visitors, leads, and performance.
                </p>
              </div>
            </div>

            {/* Call-to-Action */}
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <a
                href="/contact"
                className="hero-button"
              >
                Start Your Website Project Today
              </a>
            </div>
          </div>
        </section>

        {/* Why Maritime Businesses Choose Us Section */}
        <section style={{ backgroundColor: colors.backgrounds.light, padding: '80px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: '700',
                color: '#1F7CFF',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>Why Maritime Businesses Trust Us With Their Websites</h2>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* Pillar 1: Fast Turnaround */}
              <div className="service-card professional-card" style={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
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
                  transition: 'all 0.3s ease',
                  margin: '0 auto 1.5rem auto',
                  color: 'white'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  lineHeight: '1.3',
                  textAlign: 'center'
                }}>Fast Turnaround, No Surprises</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  We deliver most websites in 2-4 weeks — not months. Fixed pricing, clear timelines, and no hidden fees. You'll know exactly what you're getting and when you're getting it.
                </p>
              </div>

              {/* Pillar 2: Built for Results */}
              <div className="service-card professional-card" style={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
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
                  transition: 'all 0.3s ease',
                  margin: '0 auto 1.5rem auto',
                  color: 'white'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2"/>
                    <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  lineHeight: '1.3',
                  textAlign: 'center'
                }}>Built for Results, Not Just Looks</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  Pretty websites don't pay the bills — conversions do. Every site we build is designed to turn visitors into leads and customers, with built-in SEO, fast load times, and clear calls-to-action.
                </p>
              </div>

              {/* Pillar 3: You're Never Stuck */}
              <div className="service-card professional-card" style={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
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
                }}>You're Never Stuck</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  We build sites you can update yourself (if you want to), or we'll handle updates for you. No proprietary systems, no getting locked into expensive maintenance contracts. You're always in control.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <h2 className="section-title">Our 2-4 Week Website Process</h2>
            <div className="process-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem',
              marginTop: '3rem'
            }}>
              <div className="service-card professional-card" style={{
                position: 'relative',
                padding: '60px 40px 40px 40px',
                marginTop: '35px',
                overflow: 'visible',
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-25px',
                  left: '0px',
                  right: '0px',
                  display: 'flex',
                  justifyContent: 'center',
                  zIndex: 1
                }}>
                  <div style={{
                    background: 'linear-gradient(335deg, #1F7CFF, #1e40af)',
                    color: 'white',
                    width: '3em',
                    height: '3em',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5em',
                    fontWeight: 'bolder',
                    boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)'
                  }}>1</div>
                </div>
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>Strategy Session</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  We discuss your business, target customers, competitors, and goals. Choose your platform and plan the site structure.
                </p>
              </div>
              
              <div className="service-card professional-card" style={{
                position: 'relative',
                padding: '60px 40px 40px 40px',
                marginTop: '35px',
                overflow: 'visible',
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-25px',
                  left: '0px',
                  right: '0px',
                  display: 'flex',
                  justifyContent: 'center',
                  zIndex: 1
                }}>
                  <div style={{
                    background: 'linear-gradient(335deg, #1F7CFF, #1e40af)',
                    color: 'white',
                    width: '3em',
                    height: '3em',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5em',
                    fontWeight: 'bolder',
                    boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)'
                  }}>2</div>
                </div>
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>Content Creation</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  Professional copywriting tailored to your industry. We create all text content while you focus on running your business.
                </p>
              </div>
              
              <div className="service-card professional-card" style={{
                position: 'relative',
                padding: '60px 40px 40px 40px',
                marginTop: '35px',
                overflow: 'visible',
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-25px',
                  left: '0px',
                  right: '0px',
                  display: 'flex',
                  justifyContent: 'center',
                  zIndex: 1
                }}>
                  <div style={{
                    background: 'linear-gradient(335deg, #1F7CFF, #1e40af)',
                    color: 'white',
                    width: '3em',
                    height: '3em',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5em',
                    fontWeight: 'bolder',
                    boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)'
                  }}>3</div>
                </div>
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>Design & Build</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  Professional design and development with regular updates. You'll see progress throughout the build process.
                </p>
              </div>
              
              <div className="service-card professional-card" style={{
                position: 'relative',
                padding: '60px 40px 40px 40px',
                marginTop: '35px',
                overflow: 'visible',
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-25px',
                  left: '0px',
                  right: '0px',
                  display: 'flex',
                  justifyContent: 'center',
                  zIndex: 1
                }}>
                  <div style={{
                    background: 'linear-gradient(335deg, #1F7CFF, #1e40af)',
                    color: 'white',
                    width: '3em',
                    height: '3em',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5em',
                    fontWeight: 'bolder',
                    boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)'
                  }}>4</div>
                </div>
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>Launch & Training</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  Go live with full training on how to update content, add photos, and track your website's performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="section" style={{ padding: '80px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ 
                fontSize: 'clamp(2rem, 3.5vw, 3rem)', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>Serving Businesses Across All Industries</h2>
              <p style={{ 
                fontSize: '1.1rem', 
                color: colors.text.secondary, 
                maxWidth: '700px', 
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                We work with businesses across all industries throughout the Maritimes, creating professional
                websites that convert visitors into customers.
              </p>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '30px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {[
                {
                  href: '/contact',
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16"><path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/></svg>,
                  title: 'Retail & E-commerce',
                  desc: 'Online stores, product catalogs, inventory management, and secure payment processing'
                },
                {
                  href: '/contact',
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16"><path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1h1ZM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5Zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9h-.5Zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Z"/><path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1V1Zm2 14h2v-3H7v3Zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3Zm0-14H6v1h4V1Zm2 7v7h3V8h-3Zm-8 7V8H1v7h3Z"/></svg>,
                  title: 'Healthcare & Wellness',
                  desc: 'Patient portals, appointment booking, secure forms, and HIPAA-compliant solutions'
                },
                {
                  href: '/contact',
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8.646.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a2 2 0 0 1-2 2H2.5a2 2 0 0 1-2-2v-7a.5.5 0 0 1 .146-.354l6-6zM5 15v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3h1.5a1 1 0 0 0 1-1V6.707L8 1.207l-5.5 5.5V14a1 1 0 0 0 1 1H5zm5 0v-3H6v3h4z"/></svg>,
                  title: 'Construction & Trades',
                  desc: 'Project portfolios, service area mapping, quote requests, and customer testimonials'
                },
                {
                  href: '/contact',
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16"><path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/></svg>,
                  title: 'Professional Services',
                  desc: 'Service showcases, client portals, scheduling systems, and lead capture forms'
                },
                {
                  href: '/contact',
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16"><path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/></svg>,
                  title: 'Restaurants & Hospitality',
                  desc: 'Online menus, reservation systems, photo galleries, and review integration'
                },
                {
                  href: '/contact',
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16"><path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>,
                  title: 'Education & Training',
                  desc: 'Course catalogs, enrollment systems, student portals, and learning management'
                },
                {
                  href: '/contact',
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16"><path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/></svg>,
                  title: 'Real Estate',
                  desc: 'Property listings, virtual tours, search filters, and lead generation systems'
                },
                {
                  href: '/contact',
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16"><path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/></svg>,
                  title: 'Automotive Services',
                  desc: 'Service booking, inventory displays, customer reviews, and maintenance tracking'
                }
              ].map((industry, index) => (
                <a 
                  key={index}
                  href={industry.href} 
                  style={{ 
                    textDecoration: 'none', 
                    color: 'inherit',
                    display: 'block',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '12px',
                    padding: '35px 25px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: 'linear-gradient(90deg, #1F7CFF, #1e40af)',
                      opacity: 0,
                      transition: 'all 0.3s ease'
                    }} className="industry-border"></div>
                    <div style={{
                      marginBottom: '20px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: '#1F7CFF'
                    }}>{industry.icon}</div>
                    <h4 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      color: '#1F7CFF',
                      marginBottom: '15px',
                      lineHeight: '1.3'
                    }}>{industry.title}</h4>
                    <p style={{ 
                      color: colors.text.secondary, 
                      lineHeight: '1.6',
                      fontSize: '0.95rem',
                      margin: 0
                    }}>{industry.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            .industry-item:hover .industry-border {
              opacity: 1 !important;
            }
            .industry-item:hover {
              box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12) !important;
            }
          `}} />
        </section>

        {/* FAQ */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light, padding: '80px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ 
                fontSize: 'clamp(2rem, 3.5vw, 3rem)', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>Frequently Asked Questions</h2>
              <p style={{ 
                fontSize: '1.1rem', 
                color: colors.text.secondary, 
                maxWidth: '600px', 
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Get answers to common questions about our website development process
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
                  question: 'Which platform should I choose?',
                  answer: 'We recommend WordPress for most small businesses due to its flexibility and ease of use. React is best for businesses needing custom features or maximum performance.'
                },
                {
                  question: 'Do you provide hosting?',
                  answer: 'We can provide hosting or work with your existing provider. For WordPress and React, we recommend reliable hosting partners.'
                },
                {
                  question: 'Can I update the website myself?',
                  answer: 'Absolutely! We provide full training and documentation. WordPress requires basic learning, and React sites typically need developer updates.'
                },
                {
                  question: 'What if I need changes after launch?',
                  answer: 'Minor updates are included for the first month. After that, we offer ongoing support or train your team to make updates independently.'
                },
                {
                  question: 'Do you work with businesses outside New Brunswick?',
                  answer: 'Yes! While we\'re based in New Brunswick, we serve clients across Canada and the United States. All work is done remotely with regular video check-ins.'
                },
                {
                  question: 'How do I get started?',
                  answer: 'Contact us for a free consultation where we\'ll discuss your needs, goals, and the best approach for your business. We\'ll create a custom plan tailored to your specific situation.'
                }
              ].map((faq, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '12px',
                  padding: '30px 25px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '20px',
                    color: '#1F7CFF',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    opacity: 0.3
                  }}>?</div>
                  <h3 style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: '700', 
                    color: '#1F7CFF',
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
        <section className="section" style={{ backgroundColor: '#000', color: 'white', marginBottom: '0', paddingBottom: '60px' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Ready to Stop Losing Customers to Bad First Impressions?</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Book a free consultation. We'll talk about what's not working with your current site (or why you need one),
                show you examples of what we can build, and give you an honest assessment — even if you don't work with us.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                color: '#000',
                border: 'none',
                padding: '18px 40px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                boxShadow: '0 6px 20px rgba(255, 215, 0, 0.4)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none',
                marginRight: '1rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 8px 30px rgba(255, 215, 0, 0.5)';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.4)';
                e.target.style.transform = 'translateY(0)';
              }}>
                Schedule Free Consultation
              </a>
              <a href="/free-example" style={{
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
                e.target.style.boxShadow = '0 8px 25px rgba(31, 124, 255, 0.4)';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.borderColor = 'rgba(31, 124, 255, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}>
                See a Free Example
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// Additional styles for websites page
const websiteStyles = `
.platform-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.platform-card {
  background: white;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.platform-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.service-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  will-change: transform, box-shadow;
  backface-visibility: hidden;
}

.service-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;
}

/* Prevent layout shifts on process cards specifically */
.services-grid .service-card {
  box-sizing: border-box !important;
  contain: layout style;
  transform: translateZ(0);
}

.services-grid .service-card:hover {
  transform: translateY(-2px) translateZ(0) !important;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;
}

.featured-platform {
  border-color: var(--primary-color);
  transform: scale(1.05);
}

.platform-badge {
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

.platform-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.platform-subtitle {
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 20px;
}

.platform-features {
  text-align: left;
  margin: 20px 0;
  padding-left: 20px;
}

.platform-features li {
  margin-bottom: 8px;
  color: var(--text-secondary);
}

.industries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-top: 40px;
}

.industry-item {
  background: white;
  padding: 25px 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.industry-item:hover {
  transform: translateY(-3px);
}

.industry-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.industry-item h4 {
  color: var(--primary-color);
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.industry-item p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .platform-grid {
    grid-template-columns: 1fr;
  }
  
  .featured-platform {
    transform: none;
  }
  
  .industries-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .process-grid {
    grid-template-columns: 1fr !important;
  }
  
  /* Website Design Services Grid - Responsive */
  .section:nth-of-type(2) .container > div:last-child {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 25px !important;
  }
}

@media (max-width: 480px) {
  .industries-grid {
    grid-template-columns: 1fr;
  }
  
  /* Website Design Services Grid - Mobile */
  .section:nth-of-type(2) .container > div:last-child {
    grid-template-columns: 1fr !important;
    gap: 20px !important;
  }
}
`;

// Inject additional styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = websiteStyles;
  document.head.appendChild(styleSheet);
}