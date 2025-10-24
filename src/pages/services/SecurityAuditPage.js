import React, { useEffect } from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { colors } from '../../styles/colors';

export const SecurityAuditPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "Security Audits & Assessments | LogicPros - New Brunswick";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional security audits and cybersecurity assessments in New Brunswick. Identify vulnerabilities, protect your business, and ensure compliance.');
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
                  You Don't Know What You Don't Know
                </h1>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  color: '#e2e8f0',
                  marginBottom: '2.5rem',
                  fontWeight: '300',
                  maxWidth: '500px'
                }}>
                  Most businesses think they're secure until they're not. A security audit finds the vulnerabilities hackers would exploit before they actually exploit them. Think of it as finding the unlocked doors in your digital fortress before thieves do.
                </p>
                
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <a
                    href="/contact"
                    style={{
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
                    }}
                  >
                    Find My Vulnerabilities
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
                {/* Assess Card */}
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
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(29, 122, 175, 0.3), 0 0 40px rgba(29, 122, 175, 0.6)';
                  e.currentTarget.style.borderColor = 'rgba(29, 122, 175, 0.8)';
                  const h3 = e.currentTarget.querySelector('h3');
                  if (h3) {
                    h3.style.color = '#ffffff';
                    h3.style.textShadow = '0 0 10px rgba(29, 122, 175, 0.8)';
                  }
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) {
                    svg.style.transform = 'scale(1.1)';
                    svg.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(29, 122, 175, 0.15), 0 0 0 rgba(29, 122, 175, 0.4)';
                  e.currentTarget.style.borderColor = 'rgba(29, 122, 175, 0.3)';
                  const h3 = e.currentTarget.querySelector('h3');
                  if (h3) {
                    h3.style.color = '#1F7CFF';
                    h3.style.textShadow = 'none';
                  }
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) {
                    svg.style.transform = 'scale(1)';
                    svg.style.filter = 'none';
                  }
                }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'flex-start' }}>
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Assess</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Security Vulnerabilities</p>
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
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                </a>

                {/* Protect Card */}
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
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(29, 122, 175, 0.3), 0 0 40px rgba(29, 122, 175, 0.6)';
                  e.currentTarget.style.borderColor = 'rgba(29, 122, 175, 0.8)';
                  const h3 = e.currentTarget.querySelector('h3');
                  if (h3) {
                    h3.style.color = '#ffffff';
                    h3.style.textShadow = '0 0 10px rgba(29, 122, 175, 0.8)';
                  }
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) {
                    svg.style.transform = 'scale(1.1)';
                    svg.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(29, 122, 175, 0.15), 0 0 0 rgba(29, 122, 175, 0.4)';
                  e.currentTarget.style.borderColor = 'rgba(29, 122, 175, 0.3)';
                  const h3 = e.currentTarget.querySelector('h3');
                  if (h3) {
                    h3.style.color = '#1F7CFF';
                    h3.style.textShadow = 'none';
                  }
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) {
                    svg.style.transform = 'scale(1)';
                    svg.style.filter = 'none';
                  }
                }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'flex-start' }}>
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Protect</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Implement Safeguards</p>
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
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="white" strokeWidth="2" fill="none"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>

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
                  animation: 'pulseGlow 3s ease-in-out infinite 2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(29, 122, 175, 0.3), 0 0 40px rgba(29, 122, 175, 0.6)';
                  e.currentTarget.style.borderColor = 'rgba(29, 122, 175, 0.8)';
                  const h3 = e.currentTarget.querySelector('h3');
                  if (h3) {
                    h3.style.color = '#ffffff';
                    h3.style.textShadow = '0 0 10px rgba(29, 122, 175, 0.8)';
                  }
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) {
                    svg.style.transform = 'scale(1.1)';
                    svg.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(29, 122, 175, 0.15), 0 0 0 rgba(29, 122, 175, 0.4)';
                  e.currentTarget.style.borderColor = 'rgba(29, 122, 175, 0.3)';
                  const h3 = e.currentTarget.querySelector('h3');
                  if (h3) {
                    h3.style.color = '#1F7CFF';
                    h3.style.textShadow = 'none';
                  }
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) {
                    svg.style.transform = 'scale(1)';
                    svg.style.filter = 'none';
                  }
                }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'flex-start' }}>
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Monitor</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Ongoing Security</p>
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
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Audits Matter Section */}
        <section style={{
          background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)',
          padding: '80px 20px',
          color: 'white'
        }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>
                What Security Audits Actually Prevent
              </h2>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '40px 30px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.2)',
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
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '15px'
                }}>
                  60%
                </div>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  of small businesses close within 6 months of a cyberattack. They can't afford the recovery costs, legal fees, or reputation damage.
                </p>
              </div>
              
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '40px 30px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.2)',
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
                    <line x1="12" y1="1" x2="12" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5.5a3.5 3.5 0 0 1 0 7H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '15px'
                }}>
                  $200K+
                </div>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  Average cost of a data breach for small businesses — including forensics, recovery, legal fees, lost revenue, and customer notification.
                </p>
              </div>
              
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '40px 30px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.2)',
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
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/>
                    <polyline points="12,6 12,12 16,14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '15px'
                }}>
                  287 Days
                </div>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  Average time to identify and contain a data breach. That's 9+ months of attackers inside your systems before you even know.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Critical Stats Section */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light, padding: '80px 0' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '60px', textAlign: 'center' }}>
              <h2 style={{ 
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
                fontWeight: '700', 
                background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>The Cybersecurity Crisis Facing Canadian Businesses</h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: '#6b7280', 
                maxWidth: '600px', 
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Don't become another statistic. Professional security audits protect your New Brunswick business from growing cyber threats.
              </p>
            </div>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: '25px',
              padding: '0 20px',
              marginBottom: '40px'
            }}>
              {[
                {
                  stat: '85%',
                  desc: 'of Canadian SMEs experienced a cyber attack in 2024',
                  icon: 'alert',
                  color: '#1d7aaf',
                  bgColor: 'rgba(29, 122, 175, 0.08)',
                  title: 'Attack Rate'
                },
                {
                  stat: '$4.88M',
                  desc: 'average cost of a data breach in Canada',
                  icon: 'cost',
                  color: '#1e40af',
                  bgColor: 'rgba(30, 64, 175, 0.08)',
                  title: 'Breach Cost'
                },
                {
                  stat: '287',
                  desc: 'average days to identify and contain a breach',
                  icon: 'time',
                  color: '#155e8a',
                  bgColor: 'rgba(21, 94, 138, 0.08)',
                  title: 'Response Time'
                }
              ].map((item, index) => (
                <div key={index} style={{ 
                  background: 'white',
                  borderRadius: '16px',
                  padding: '0',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                }}>
                  {/* Header Section */}
                  <div style={{
                    background: item.bgColor,
                    padding: '20px 25px 15px 25px',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.06)'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between',
                      marginBottom: '8px'
                    }}>
                      <span style={{
                        fontSize: '1.75rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                        borderRadius: '10px',
                        boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)',
                        transition: 'all 0.3s ease',
                        margin: '0 auto'
                      }}>
                        {item.icon === 'alert' && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <line x1="12" y1="9" x2="12" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <line x1="12" y1="17" x2="12.01" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {item.icon === 'cost' && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="12" y1="1" x2="12" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5.5a3.5 3.5 0 0 1 0 7H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {item.icon === 'time' && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/>
                            <polyline points="12,6 12,12 16,14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </span>
                      <span style={{ 
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: item.color,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>{item.title}</span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div style={{ padding: '25px' }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'baseline', 
                      marginBottom: '15px',
                      gap: '8px'
                    }}>
                      <span style={{ 
                        fontSize: '2.5rem', 
                        fontWeight: '800',
                        color: item.color,
                        lineHeight: '1'
                      }}>{item.stat}</span>
                      {item.stat === '287' && (
                        <span style={{ 
                          fontSize: '1rem',
                          color: '#6b7280',
                          fontWeight: '500'
                        }}>days</span>
                      )}
                    </div>
                    <p style={{ 
                      color: '#4b5563', 
                      fontSize: '0.95rem',
                      lineHeight: '1.5',
                      margin: '0',
                      fontWeight: '500'
                    }}>{item.desc}</p>
                  </div>

                  {/* Bottom indicator */}
                  <div style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    height: '3px',
                    background: `linear-gradient(90deg, ${item.color} 0%, transparent 100%)`,
                    opacity: '0.8'
                  }}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What is a Security Audit Section */}
        <section style={{ backgroundColor: '#f8f9fa', padding: '80px 20px' }}>
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
                What a Security Audit Actually Is
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                No scare tactics. Just honest assessment of where you're exposed.
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '40px',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1.1rem',
                  marginBottom: '20px'
                }}>
                  A security audit is basically a professional hacker (ethical, working for you) trying to break into your systems. We look for the same vulnerabilities real attackers look for — weak passwords, outdated software, misconfigured firewalls, missing encryption, exposed data.
                </p>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1.1rem',
                  marginBottom: '20px'
                }}>
                  The difference: we tell you what we found instead of stealing your data. Then we show you exactly how to fix it, prioritized by actual risk level. Not everything needs fixing immediately — we help you focus on what actually matters.
                </p>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1.1rem'
                }}>
                  Think of it like a home security assessment. We check if your doors are locked, windows are secure, alarm system works, and valuables are hidden. Except for your digital business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What is Security Audit */}
        <section className="section" style={{ padding: '80px 0' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '60px' }}>
              <h2 style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                marginBottom: '20px',
                lineHeight: '1.2',
                textAlign: 'center'
              }}>What We Look For in a Security Audit</h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                Here's what we actually examine (in plain English, not tech jargon):
              </p>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '30px',
              marginBottom: '60px',
              padding: '0 20px'
            }}>
              <div style={{ 
                background: 'white', 
                border: '1px solid rgba(29, 122, 175, 0.1)', 
                padding: '40px 30px', 
                borderRadius: '20px', 
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}>
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
                    <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="m21 21-4.35-4.35" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  color: colors.text.primary,
                  marginBottom: '15px',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  textAlign: 'center'
                }}>Network Security</h3>
                <p style={{
                  color: colors.text.secondary,
                  marginBottom: '20px',
                  lineHeight: '1.7',
                  textAlign: 'center'
                }}>
                  Who can access your network and from where
                </p>
                <ul style={{
                  color: colors.text.secondary,
                  paddingLeft: '20px',
                  lineHeight: '1.8'
                }}>
                  <li>Firewall configuration (is it actually protecting you?)</li>
                  <li>Wi-Fi security (is your guest network exposing your business network?)</li>
                  <li>VPN setup for remote workers</li>
                </ul>
              </div>
              <div style={{ 
                background: 'white', 
                border: '1px solid rgba(29, 122, 175, 0.1)', 
                padding: '40px 30px', 
                borderRadius: '20px', 
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}>
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
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  color: colors.text.primary,
                  marginBottom: '15px',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  textAlign: 'center'
                }}>Password & Access Security</h3>
                <p style={{
                  color: colors.text.secondary,
                  marginBottom: '20px',
                  lineHeight: '1.7',
                  textAlign: 'center'
                }}>
                  Who can access what and how they prove it
                </p>
                <ul style={{
                  color: colors.text.secondary,
                  paddingLeft: '20px',
                  lineHeight: '1.8'
                }}>
                  <li>Weak or default passwords</li>
                  <li>Accounts that should be disabled but aren't</li>
                  <li>Admin access given to people who don't need it</li>
                  <li>Missing multi-factor authentication</li>
                </ul>
              </div>
              <div style={{ 
                background: 'white', 
                border: '1px solid rgba(29, 122, 175, 0.1)', 
                padding: '40px 30px', 
                borderRadius: '20px', 
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}>
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
                    <path d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M7 10.5V17.5M11.5 5.5V17.5M16 10.5V17.5M20.5 5.5V17.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  color: colors.text.primary,
                  marginBottom: '15px',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  textAlign: 'center'
                }}>Software & Systems</h3>
                <p style={{
                  color: colors.text.secondary,
                  marginBottom: '20px',
                  lineHeight: '1.7',
                  textAlign: 'center'
                }}>
                  What you're running and how current it is
                </p>
                <ul style={{
                  color: colors.text.secondary,
                  paddingLeft: '20px',
                  lineHeight: '1.8'
                }}>
                  <li>Outdated software with known vulnerabilities</li>
                  <li>Missing security patches and updates</li>
                  <li>Unnecessary services running (more doors for hackers)</li>
                  <li>End-of-life systems that no longer get security updates</li>
                </ul>
              </div>
            </div>

            {/* Additional Security Areas */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
              marginBottom: '60px',
              padding: '0 20px'
            }}>
              <div style={{
                background: 'white',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                padding: '40px 30px',
                borderRadius: '20px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{
                  color: colors.text.primary,
                  marginBottom: '15px',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  textAlign: 'center'
                }}>Data Protection</h3>
                <ul style={{
                  color: colors.text.secondary,
                  paddingLeft: '20px',
                  lineHeight: '1.8'
                }}>
                  <li>Where sensitive data is stored (and who can access it)</li>
                  <li>Encryption status (or lack thereof)</li>
                  <li>Backup systems (do they work? are they tested?)</li>
                  <li>Data that should be deleted but isn't</li>
                </ul>
              </div>
              <div style={{
                background: 'white',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                padding: '40px 30px',
                borderRadius: '20px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{
                  color: colors.text.primary,
                  marginBottom: '15px',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  textAlign: 'center'
                }}>Compliance & Policy</h3>
                <ul style={{
                  color: colors.text.secondary,
                  paddingLeft: '20px',
                  lineHeight: '1.8'
                }}>
                  <li>PIPEDA requirements (Canadian privacy law)</li>
                  <li>Industry-specific regulations</li>
                  <li>Employee security training (or lack thereof)</li>
                  <li>Incident response plan (what happens when you're breached)</li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div style={{ 
              textAlign: 'center',
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
              padding: '60px 40px',
              borderRadius: '20px',
              color: 'white',
              margin: '0 20px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 30% 20%, rgba(29, 122, 175, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(30, 64, 175, 0.1) 0%, transparent 50%)',
                zIndex: 0
              }}></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ 
                  fontSize: '2rem', 
                  marginBottom: '20px',
                  color: 'white',
                  fontWeight: '700'
                }}>Ready to Protect Your Business?</h3>
                <p style={{ 
                  marginBottom: '30px', 
                  fontSize: '1.2rem',
                  maxWidth: '600px',
                  margin: '0 auto 30px auto',
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: '1.6'
                }}>
                  Don't wait for a cyber attack to discover your vulnerabilities. Get a professional security assessment today.
                </p>
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '15px',
                  flexWrap: 'wrap'
                }}>
                  <a href="/contact" style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '18px 40px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    borderRadius: '50px',
                    boxShadow: '0 10px 30px rgba(29, 78, 216, 0.4)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.boxShadow = '0 15px 40px rgba(29, 78, 216, 0.5)';
                    e.target.style.transform = 'translateY(-3px) scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = '0 10px 30px rgba(29, 78, 216, 0.4)';
                    e.target.style.transform = 'translateY(0) scale(1)';
                  }}>Get Security Assessment</a>
                  <a href="/contact" style={{
                    display: 'inline-block',
                    background: 'transparent',
                    color: 'white',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    padding: '18px 40px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    borderRadius: '50px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    textDecoration: 'none',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.boxShadow = '0 10px 30px rgba(29, 78, 216, 0.4)';
                    e.target.style.transform = 'translateY(-3px) scale(1.02)';
                    e.target.style.borderColor = 'rgba(29, 78, 216, 0.8)';
                    e.target.style.background = 'rgba(29, 78, 216, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = 'none';
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.target.style.background = 'transparent';
                  }}>Ask About Grant Funding</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audit vs. Penetration Testing Section */}
        <section style={{ backgroundColor: 'white', padding: '80px 20px' }}>
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
                Security Audit vs. Penetration Test: What's the Difference?
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                They're related but not the same thing:
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '40px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                height: '100%'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Security Audit (What We Do)
                </h3>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>What it is:</strong> Comprehensive review of your security posture
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>Approach:</strong> Check configurations, policies, access controls, vulnerabilities
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>Goal:</strong> Find everything that's wrong or risky
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>Typical findings:</strong> 20-50+ issues ranging from critical to minor
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>Time:</strong> 1-3 days depending on business size
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>Cost:</strong> $2,000-$5,000 typical for small business
                </div>
                <div>
                  <strong style={{ color: '#1f2937' }}>Best for:</strong> Understanding your overall security status
                </div>
              </div>
              
              <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                height: '100%'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Penetration Testing (More Intensive)
                </h3>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>What it is:</strong> Simulated attack trying to actually break in
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>Approach:</strong> Actively exploit vulnerabilities like real hackers
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>Goal:</strong> See if we can actually breach your systems
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>Typical findings:</strong> Proof that specific attack vectors work
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>Time:</strong> 3-10+ days depending on scope
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>Cost:</strong> $5,000-$25,000+ depending on complexity
                </div>
                <div>
                  <strong style={{ color: '#1f2937' }}>Best for:</strong> Testing if your defenses actually hold up
                </div>
              </div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
              color: 'white',
              borderRadius: '20px',
              padding: '30px',
              marginTop: '40px',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '40px auto 0 auto'
            }}>
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.6',
                margin: 0
              }}>
                Most small businesses start with a security audit. It's cheaper, less disruptive, and finds 80%+ of vulnerabilities. Penetration testing makes sense for businesses handling highly sensitive data or meeting compliance requirements.
              </p>
            </div>
          </div>
        </section>

        {/* What Happens After the Audit Section */}
        <section style={{ backgroundColor: '#f8f9fa', padding: '80px 20px' }}>
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
                What You Actually Get
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                We don't just hand you a 50-page technical report and disappear:
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '40px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                height: '100%'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Step 1: The Audit Itself (1-3 Days)
                </h3>
                <ul style={{
                  paddingLeft: '20px',
                  margin: 0,
                  color: colors.text.secondary,
                  lineHeight: '1.7'
                }}>
                  <li>We examine your systems, network, policies, and practices</li>
                  <li>Non-disruptive to your business (you keep working normally)</li>
                  <li>May ask questions about your processes and policies</li>
                </ul>
              </div>
              
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                height: '100%'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Step 2: Findings Report (Plain English)
                </h3>
                <ul style={{
                  paddingLeft: '20px',
                  margin: 0,
                  color: colors.text.secondary,
                  lineHeight: '1.7'
                }}>
                  <li>List of every vulnerability we found</li>
                  <li>Risk level for each (critical, high, medium, low)</li>
                  <li>Explanation of what it means and why it matters</li>
                  <li>NO tech jargon — explained like you're a smart business owner, not a security expert</li>
                </ul>
              </div>
              
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                height: '100%'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Step 3: Prioritized Roadmap
                </h3>
                <ul style={{
                  paddingLeft: '20px',
                  margin: 0,
                  color: colors.text.secondary,
                  lineHeight: '1.7'
                }}>
                  <li>What to fix first (critical risks)</li>
                  <li>What to fix soon (high risks)</li>
                  <li>What to fix eventually (medium/low risks)</li>
                  <li>Realistic timeline and cost estimates</li>
                </ul>
              </div>
              
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                height: '100%'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Step 4: Fix It (Optional)
                </h3>
                <ul style={{
                  paddingLeft: '20px',
                  margin: 0,
                  color: colors.text.secondary,
                  lineHeight: '1.7'
                }}>
                  <li>We can fix it for you, or</li>
                  <li>Work with your existing IT person/team, or</li>
                  <li>You can DIY with our guidance</li>
                  <li>Your choice — no forced upselling</li>
                </ul>
              </div>
            </div>
            
            <div style={{
              background: 'rgba(31, 124, 255, 0.1)',
              borderRadius: '20px',
              padding: '30px',
              marginTop: '40px',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '40px auto 0 auto'
            }}>
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.6',
                margin: 0,
                color: colors.text.secondary
              }}>
                Most audits find 20-50 issues. Don't panic — that's normal. We help you prioritize so you fix what actually matters first, not everything at once.
              </p>
            </div>
          </div>
        </section>

        {/* Who Needs Security Audits Section */}
        <section style={{ backgroundColor: 'white', padding: '80px 20px' }}>
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
                Do You Actually Need a Security Audit?
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Be honest about your situation:
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '40px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                height: '100%'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#22c55e',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  You SHOULD Get an Audit If:
                </h3>
                <ul style={{
                  paddingLeft: '20px',
                  margin: 0,
                  color: colors.text.secondary,
                  lineHeight: '1.7'
                }}>
                  <li>You handle customer data (names, emails, payments, health info)</li>
                  <li>You've never had a professional security review</li>
                  <li>You're not sure if your security measures are working</li>
                  <li>You have remote workers accessing company systems</li>
                  <li>You've grown but security hasn't kept pace</li>
                  <li>Cyber insurance requires it (many policies do now)</li>
                  <li>You're in healthcare, legal, finance, or other regulated industry</li>
                </ul>
              </div>
              
              <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                height: '100%'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#ef4444',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  You Probably DON'T Need One If:
                </h3>
                <ul style={{
                  paddingLeft: '20px',
                  margin: 0,
                  color: colors.text.secondary,
                  lineHeight: '1.7'
                }}>
                  <li>You're a solo freelancer with no customer data</li>
                  <li>You just had a comprehensive audit within the last year</li>
                  <li>You have a dedicated IT security team (they should be auditing)</li>
                  <li>Your business is entirely offline with no digital systems</li>
                  <li>You have literally nothing digital to protect (very rare)</li>
                </ul>
              </div>
            </div>
            
            <div style={{
              background: 'rgba(31, 124, 255, 0.1)',
              borderRadius: '20px',
              padding: '30px',
              marginTop: '40px',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '40px auto 0 auto'
            }}>
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.6',
                margin: 0,
                color: colors.text.secondary
              }}>
                <strong style={{ color: '#1F7CFF' }}>When in doubt, get audited.</strong> The cost of an audit ($2K-$5K) is way less than the cost of a breach ($200K+ average). It's cheap insurance.
              </p>
            </div>
          </div>
        </section>

        {/* Common Findings Section */}
        <section style={{ backgroundColor: '#f8f9fa', padding: '80px 20px' }}>
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
                What We Usually Find
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Almost every small business audit reveals these issues:
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '40px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                height: '100%'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Weak Password Policies
                </h3>
                <ul style={{
                  paddingLeft: '20px',
                  margin: 0,
                  color: colors.text.secondary,
                  lineHeight: '1.7'
                }}>
                  <li>Passwords like "Password123" or "Company2024"</li>
                  <li>Same password used for everything</li>
                  <li>No password expiration or complexity requirements</li>
                  <li>Shared accounts (multiple people use "admin")</li>
                </ul>
              </div>
              
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                height: '100%'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Missing Updates
                </h3>
                <ul style={{
                  paddingLeft: '20px',
                  margin: 0,
                  color: colors.text.secondary,
                  lineHeight: '1.7'
                }}>
                  <li>Windows updates disabled "because they're annoying"</li>
                  <li>Software 2-3 versions behind current</li>
                  <li>Known security holes that patches would fix</li>
                  <li>End-of-life systems still running (Windows 7, etc.)</li>
                </ul>
              </div>
              
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                height: '100%'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Poor Access Control
                </h3>
                <ul style={{
                  paddingLeft: '20px',
                  margin: 0,
                  color: colors.text.secondary,
                  lineHeight: '1.7'
                }}>
                  <li>Former employees still have access</li>
                  <li>Everyone has admin rights (nobody should)</li>
                  <li>No multi-factor authentication anywhere</li>
                  <li>Guest Wi-Fi can access business network</li>
                </ul>
              </div>
              
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                height: '100%'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Unencrypted Data
                </h3>
                <ul style={{
                  paddingLeft: '20px',
                  margin: 0,
                  color: colors.text.secondary,
                  lineHeight: '1.7'
                }}>
                  <li>Sensitive files stored in plain text</li>
                  <li>No encryption on laptops (theft = immediate breach)</li>
                  <li>Email sent unencrypted</li>
                  <li>Cloud storage without encryption</li>
                </ul>
              </div>
            </div>
            
            <div style={{
              background: 'rgba(31, 124, 255, 0.1)',
              borderRadius: '20px',
              padding: '30px',
              marginTop: '40px',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '40px auto 0 auto'
            }}>
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.6',
                margin: 0,
                color: colors.text.secondary
              }}>
                <strong style={{ color: '#1F7CFF' }}>If you're thinking "oh no, we do that"</strong> — you're not alone. These are the most common issues we fix. Awareness is the first step.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section" style={{ backgroundColor: '#000', color: 'white', marginBottom: '0', paddingBottom: '60px' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Ready to Find Out Where You're Exposed?</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Book a free security consultation. We'll discuss your current setup, what you're worried about, and whether a full audit makes sense. No scare tactics, no pressure — just honest assessment of whether you actually need this. If you're already secure, we'll tell you.
              </p>
            </div>
            <div style={{ 
              display: 'flex',
              justifyContent: 'center',
              gap: '15px',
              flexWrap: 'wrap'
            }}>
              <a href="/contact" style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
                color: 'white',
                border: 'none',
                padding: '18px 40px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                boxShadow: '0 10px 30px rgba(29, 78, 216, 0.4)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 15px 40px rgba(29, 78, 216, 0.5)';
                e.target.style.transform = 'translateY(-3px) scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 10px 30px rgba(29, 78, 216, 0.4)';
                e.target.style.transform = 'translateY(0) scale(1)';
              }}>Get Security Assessment</a>
              <a href="/contact" style={{
                display: 'inline-block',
                background: 'transparent',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                padding: '18px 40px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 10px 30px rgba(29, 78, 216, 0.4)';
                e.target.style.transform = 'translateY(-3px) scale(1.02)';
                e.target.style.borderColor = 'rgba(29, 78, 216, 0.8)';
                e.target.style.background = 'rgba(29, 78, 216, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.target.style.background = 'transparent';
              }}>Learn About Grant Funding</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};