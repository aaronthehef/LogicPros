import React, { useEffect } from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { colors } from '../../styles/colors';

export const PasswordManagementPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "Password Management Services | LogicPros - New Brunswick";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional password management services in New Brunswick. Secure password generation, encrypted storage, and team password sharing solutions.');
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
                  Still Using 'Password123' for Everything?
                </h1>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  color: '#e2e8f0',
                  marginBottom: '2.5rem',
                  fontWeight: '300',
                  maxWidth: '500px'
                }}>
                  Weak passwords cause 81% of data breaches. You know you should use strong, unique passwords for everything. But remembering 50+ complex passwords is impossible, so everyone uses the same password everywhere. That's how companies get hacked. Password managers solve this.
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
                    Stop the Password Madness
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
                {/* Generate Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Generate</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Strong Passwords</p>
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
                      <circle cx="12" cy="16" r="1" fill="white"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>

                {/* Store Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Store</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Encrypted Vault</p>
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
                      <rect x="2" y="4" width="20" height="18" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="13" r="4" stroke="white" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="13" r="2" stroke="white" strokeWidth="2" fill="none"/>
                      <line x1="12" y1="9" x2="12" y2="11" stroke="white" strokeWidth="2"/>
                      <line x1="12" y1="15" x2="12" y2="17" stroke="white" strokeWidth="2"/>
                      <line x1="8" y1="13" x2="10" y2="13" stroke="white" strokeWidth="2"/>
                      <line x1="14" y1="13" x2="16" y2="13" stroke="white" strokeWidth="2"/>
                      <rect x="5" y="2" width="3" height="2" fill="white"/>
                      <rect x="16" y="2" width="3" height="2" fill="white"/>
                    </svg>
                  </div>
                </a>

                {/* Share Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Share</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Secure Team Access</p>
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
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2" fill="none"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The Password Problem Section */}
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
                Why Password Security Fails
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
                border: '1px solid rgba(255, 255, 255, 0.2)',
                height: '100%'
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
                    <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '15px'
                }}>
                  Same Password
                </div>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  59% of people use the same password for multiple accounts. One breach = all accounts compromised.
                </p>
              </div>
              
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '40px 30px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                height: '100%'
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
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '15px'
                }}>
                  Weak Passwords
                </div>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  The most common passwords are still 'password,' '123456,' and 'qwerty.' Hackers crack these in seconds.
                </p>
              </div>
              
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '40px 30px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                height: '100%'
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
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="14,2 14,8 20,8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="10,9 9,9 8,9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '15px'
                }}>
                  Written Down
                </div>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  Employees write passwords on sticky notes or save them in unencrypted text files. Defeats the entire purpose.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Password Crisis Stats */}
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
              }}>The Real Cost of Bad Passwords</h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#6b7280',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                It's not about if you'll get hacked - it's about when. Your employees' password habits are the biggest security risk you're ignoring.
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
                  stat: '59%',
                  desc: 'of employees reuse passwords across work and personal accounts',
                  icon: 'lock',
                  color: '#1d7aaf',
                  bgColor: 'rgba(29, 122, 175, 0.08)',
                  title: 'Password Reuse'
                },
                {
                  stat: '65%',
                  desc: 'of small businesses close within 6 months of a cyber attack',
                  icon: 'refresh',
                  color: '#1e40af',
                  bgColor: 'rgba(30, 64, 175, 0.08)',
                  title: 'Business Survival'
                },
                {
                  stat: '49%',
                  desc: 'of employees don\'t change their default passwords',
                  icon: 'cost',
                  color: '#155e8a',
                  bgColor: 'rgba(21, 94, 138, 0.08)',
                  title: 'Default Passwords'
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
                        {item.icon === 'lock' && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="white" strokeWidth="2" fill="none"/>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {item.icon === 'refresh' && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 4v6h6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {item.icon === 'cost' && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="12" y1="1" x2="12" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5.5a3.5 3.5 0 0 1 0 7H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

        {/* How Password Managers Actually Work */}
        <section style={{
          background: 'white',
          padding: '80px 20px'
        }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: '700',
                color: '#1F7CFF',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>
                How Password Managers Actually Work
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#666',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                No more "forgot password" links. No more sticky notes under keyboards. Here's how modern password management solves your password problems for good.
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '30px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              <div style={{
                textAlign: 'center',
                padding: '30px 20px',
                borderRadius: '16px',
                background: 'rgba(31, 124, 255, 0.05)',
                border: '1px solid rgba(31, 124, 255, 0.1)',
                height: '100%'
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}>
                  <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '15px'
                }}>
                  Secure Vault
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#666'
                }}>
                  All passwords stored in an encrypted vault that only you can access. Military-grade encryption keeps everything safe.
                </p>
              </div>
              
              <div style={{
                textAlign: 'center',
                padding: '30px 20px',
                borderRadius: '16px',
                background: 'rgba(31, 124, 255, 0.05)',
                border: '1px solid rgba(31, 124, 255, 0.1)',
                height: '100%'
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}>
                  <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '15px'
                }}>
                  One Master Password
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#666'
                }}>
                  Remember just ONE strong password. The password manager handles all your other passwords automatically.
                </p>
              </div>
              
              <div style={{
                textAlign: 'center',
                padding: '30px 20px',
                borderRadius: '16px',
                background: 'rgba(31, 124, 255, 0.05)',
                border: '1px solid rgba(31, 124, 255, 0.1)',
                height: '100%'
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}>
                  <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '15px'
                }}>
                  Auto-Fill
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#666'
                }}>
                  Password manager automatically fills in login forms on websites and apps. No more typing passwords manually.
                </p>
              </div>
              
              <div style={{
                textAlign: 'center',
                padding: '30px 20px',
                borderRadius: '16px',
                background: 'rgba(31, 124, 255, 0.05)',
                border: '1px solid rgba(31, 124, 255, 0.1)',
                height: '100%'
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}>
                  <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '15px'
                }}>
                  Secure Sharing
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#666'
                }}>
                  Share passwords with team members securely. Control who can access what and track usage automatically.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Password Manager vs Personal */}
        <section style={{
          background: '#f8f9fa',
          padding: '80px 20px'
        }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: '700',
                color: '#1F7CFF',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>
                Business vs. Personal Password Managers
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#666',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Free personal password managers are great for individuals. But businesses need enterprise-grade features, control, and security.
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(31, 124, 255, 0.1)',
                height: '100%'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '25px'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #FFC600, #FFB800)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '20px'
                  }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="8.5" cy="7" r="4" stroke="#1a1a2e" strokeWidth="2" fill="none"/>
                      <line x1="20" y1="8" x2="20" y2="14" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="23" y1="11" x2="17" y2="11" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    color: '#1a1a2e',
                    margin: '0'
                  }}>
                    Personal Password Manager
                  </h3>
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <div style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#FFC600',
                    marginBottom: '10px'
                  }}>
                    Good for: Individuals, families
                  </div>
                </div>
                
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0'
                }}>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '12px',
                    fontSize: '1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                    Free or low cost
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '12px',
                    fontSize: '1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                    Basic password storage
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '12px',
                    fontSize: '1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                    Auto-fill on personal devices
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '12px',
                    fontSize: '1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#ef4444', marginRight: '10px', fontSize: '1.2rem' }}>✗</span>
                    No admin control
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '12px',
                    fontSize: '1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#ef4444', marginRight: '10px', fontSize: '1.2rem' }}>✗</span>
                    No employee offboarding
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    fontSize: '1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#ef4444', marginRight: '10px', fontSize: '1.2rem' }}>✗</span>
                    No business features
                  </li>
                </ul>
              </div>
              
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(31, 124, 255, 0.1)',
                height: '100%',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '20px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  color: 'white',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}>
                  Recommended for Business
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '25px'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '20px'
                  }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2" fill="none"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    color: '#1F7CFF',
                    margin: '0'
                  }}>
                    Business Password Manager
                  </h3>
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <div style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#1F7CFF',
                    marginBottom: '10px'
                  }}>
                    Essential for: Teams, companies, organizations
                  </div>
                </div>
                
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0'
                }}>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '12px',
                    fontSize: '1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                    Admin dashboard & control
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '12px',
                    fontSize: '1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                    Employee onboarding/offboarding
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '12px',
                    fontSize: '1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                    Role-based access control
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '12px',
                    fontSize: '1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                    Security policies enforcement
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '12px',
                    fontSize: '1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                    Activity monitoring & reports
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    fontSize: '1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                    Emergency access procedures
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What is Password Management */}
        <section className="section" style={{ padding: '80px 0' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '60px' }}>
              <h2 style={{ 
                fontSize: 'clamp(2rem, 3.5vw, 3rem)', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '20px',
                lineHeight: '1.2',
                textAlign: 'center'
              }}>Enterprise Password Management Solutions</h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: colors.text.secondary, 
                maxWidth: '800px', 
                margin: '0 auto', 
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                Enterprise password management provides your business with secure, centralized password storage, generation, and sharing. 
                Eliminate weak passwords and reduce security risks across your entire organization.
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
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ 
                  color: colors.text.primary, 
                  marginBottom: '15px',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  textAlign: 'center'
                }}>Secure Password Generation</h3>
                <p style={{ 
                  color: colors.text.secondary, 
                  marginBottom: '20px',
                  lineHeight: '1.7',
                  textAlign: 'center'
                }}>
                  Automatically generate strong, unique passwords for every account, eliminating password reuse 
                  and protecting against credential stuffing attacks.
                </p>
                <ul style={{ 
                  color: colors.text.secondary, 
                  paddingLeft: '20px', 
                  lineHeight: '1.8'
                }}>
                  <li>Complex password algorithms</li>
                  <li>Customizable password policies</li>
                  <li>Automatic password rotation</li>
                  <li>Breach monitoring integration</li>
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ 
                  color: colors.text.primary, 
                  marginBottom: '15px',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  textAlign: 'center'
                }}>Military-Grade Encryption</h3>
                <p style={{ 
                  color: colors.text.secondary, 
                  marginBottom: '20px',
                  lineHeight: '1.7',
                  textAlign: 'center'
                }}>
                  All passwords protected with AES-256 encryption and zero-knowledge architecture 
                  ensuring even we cannot access your sensitive data.
                </p>
                <ul style={{ 
                  color: colors.text.secondary, 
                  paddingLeft: '20px', 
                  lineHeight: '1.8'
                }}>
                  <li>AES-256 bit encryption</li>
                  <li>Zero-knowledge security model</li>
                  <li>End-to-end encryption</li>
                  <li>Secure cloud synchronization</li>
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
                }}>Team Password Sharing</h3>
                <p style={{ 
                  color: colors.text.secondary, 
                  marginBottom: '20px',
                  lineHeight: '1.7',
                  textAlign: 'center'
                }}>
                  Safely share passwords for shared accounts with granular permissions and 
                  administrative oversight for complete security control.
                </p>
                <ul style={{ 
                  color: colors.text.secondary, 
                  paddingLeft: '20px', 
                  lineHeight: '1.8'
                }}>
                  <li>Role-based access controls</li>
                  <li>Secure credential sharing</li>
                  <li>Activity logging and reporting</li>
                  <li>Emergency access procedures</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Common Objections */}
        <section style={{
          background: 'white',
          padding: '80px 20px'
        }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: '700',
                color: '#1F7CFF',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>
                Common Objections (And Why They're Wrong)
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#666',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                We've heard every excuse for not implementing proper password management. Here are the most common ones - and why they're putting your business at risk.
              </p>
            </div>
            
            <div style={{
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              {[
                {
                  objection: "We're too small to be a target",
                  response: "Hackers don't target businesses - they target vulnerabilities. Automated bots scan millions of websites looking for weak passwords. Small businesses are actually preferred targets because they typically have weaker security.",
                  icon: '🎯'
                },
                {
                  objection: "Our employees are trustworthy",
                  response: "Trust has nothing to do with it. Good people make mistakes: they use weak passwords, reuse them across accounts, write them down, or fall for phishing emails. Password management protects against human error, not malicious intent.",
                  icon: '👥'
                },
                {
                  objection: "It's too expensive",
                  response: "The average data breach costs $4.88 million. A business password manager costs a few hundred dollars per year. Which is more expensive? Plus, think about the time employees waste on password resets and lockouts.",
                  icon: '💰'
                },
                {
                  objection: "It's too complicated to implement",
                  response: "That's why we exist. We handle the entire setup, migration, and training. Your team just needs to learn one new habit - using the password manager instead of remembering passwords.",
                  icon: '⚙️'
                },
                {
                  objection: "What if the password manager gets hacked?",
                  response: "Legitimate password managers use zero-knowledge encryption. Even if their servers were compromised, your data remains encrypted and inaccessible without your master password. It's infinitely safer than storing passwords in browsers or spreadsheets.",
                  icon: '🔒'
                },
                {
                  objection: "We'll do it later when we have time",
                  response: "You won't have time after a breach. The average breach takes 287 days to discover. By the time you realize there's a problem, the damage has been done for months. This is one of those 'pay now or pay much more later' situations.",
                  icon: '⏰'
                }
              ].map((item, index) => (
                <div key={index} style={{
                  background: '#f8f9fa',
                  borderRadius: '16px',
                  padding: '30px',
                  marginBottom: '20px',
                  border: '1px solid rgba(31, 124, 255, 0.1)',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    fontSize: '2.5rem',
                    flexShrink: 0,
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '50%',
                    color: 'white'
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      color: '#1F7CFF',
                      marginBottom: '10px',
                      margin: '0 0 10px 0'
                    }}>
                      "{item.objection}"
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: '#666',
                      margin: '0'
                    }}>
                      {item.response}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light, padding: '80px 0' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '60px' }}>
              <h2 style={{ 
                fontSize: 'clamp(2rem, 3.5vw, 3rem)', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '20px',
                lineHeight: '1.2',
                textAlign: 'center'
              }}>Our Password Management Implementation Process</h2>
              <p style={{ 
                fontSize: '1.1rem', 
                color: colors.text.secondary, 
                maxWidth: '700px', 
                margin: '0 auto',
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                From assessment to full deployment, our proven methodology ensures smooth adoption and maximum security 
                benefits for your New Brunswick business.
              </p>
            </div>
            <div className="process-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '30px',
              marginTop: '40px',
              padding: '0 20px'
            }}>
              <div style={{ 
                position: 'relative', 
                padding: '60px 30px 40px 30px', 
                marginTop: '30px', 
                overflow: 'visible', 
                background: 'white', 
                borderRadius: '16px', 
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)', 
                border: '1px solid rgba(29, 122, 175, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '-25px', 
                  left: '30px', 
                  background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)', 
                  color: 'white', 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  boxShadow: '0 6px 20px rgba(29, 122, 175, 0.4)', 
                  zIndex: 10 
                }}>1</div>
                <h3 style={{ 
                  color: colors.text.primary, 
                  marginBottom: '15px', 
                  marginTop: '20px',
                  fontSize: '1.3rem',
                  fontWeight: '700'
                }}>Security Assessment</h3>
                <p style={{ 
                  color: colors.text.secondary, 
                  lineHeight: '1.6', 
                  marginBottom: '20px'
                }}>
                  Comprehensive evaluation of current password practices, vulnerability assessment, and solution selection 
                  based on your business needs and security requirements.
                </p>
                <ul style={{ 
                  color: colors.text.secondary, 
                  paddingLeft: '20px', 
                  lineHeight: '1.7',
                  listStyle: 'none'
                }}>
                  <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    Current password audit
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    Risk assessment analysis
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    Solution recommendation
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '25px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    ROI calculation
                  </li>
                </ul>
              </div>

              <div style={{ 
                position: 'relative', 
                padding: '60px 30px 40px 30px', 
                marginTop: '30px', 
                overflow: 'visible', 
                background: 'white', 
                borderRadius: '16px', 
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)', 
                border: '1px solid rgba(29, 122, 175, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '-25px', 
                  left: '30px', 
                  background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)', 
                  color: 'white', 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  boxShadow: '0 6px 20px rgba(29, 122, 175, 0.4)', 
                  zIndex: 10 
                }}>2</div>
                <h3 style={{ 
                  color: colors.text.primary, 
                  marginBottom: '15px', 
                  marginTop: '20px',
                  fontSize: '1.3rem',
                  fontWeight: '700'
                }}>Deployment & Configuration</h3>
                <p style={{ 
                  color: colors.text.secondary, 
                  lineHeight: '1.6', 
                  marginBottom: '20px'
                }}>
                  Professional installation, configuration, and integration with existing systems including Active Directory, 
                  SSO platforms, and business applications.
                </p>
                <ul style={{ 
                  color: colors.text.secondary, 
                  paddingLeft: '20px', 
                  lineHeight: '1.7',
                  listStyle: 'none'
                }}>
                  <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    Software installation
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    System integration
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    Policy configuration
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '25px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    Security hardening
                  </li>
                </ul>
              </div>

              <div style={{ 
                position: 'relative', 
                padding: '60px 30px 40px 30px', 
                marginTop: '30px', 
                overflow: 'visible', 
                background: 'white', 
                borderRadius: '16px', 
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)', 
                border: '1px solid rgba(29, 122, 175, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '-25px', 
                  left: '30px', 
                  background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)', 
                  color: 'white', 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  boxShadow: '0 6px 20px rgba(29, 122, 175, 0.4)', 
                  zIndex: 10 
                }}>3</div>
                <h3 style={{ 
                  color: colors.text.primary, 
                  marginBottom: '15px', 
                  marginTop: '20px',
                  fontSize: '1.3rem',
                  fontWeight: '700'
                }}>Training & Migration</h3>
                <p style={{ 
                  color: colors.text.secondary, 
                  lineHeight: '1.6', 
                  marginBottom: '20px'
                }}>
                  Comprehensive user training, password migration assistance, and change management to ensure successful 
                  adoption across your organization.
                </p>
                <ul style={{ 
                  color: colors.text.secondary, 
                  paddingLeft: '20px', 
                  lineHeight: '1.7',
                  listStyle: 'none'
                }}>
                  <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    Staff training sessions
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    Password migration assistance
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    Change management support
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '25px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    User adoption tracking
                  </li>
                </ul>
              </div>

              <div style={{ 
                position: 'relative', 
                padding: '60px 30px 40px 30px', 
                marginTop: '30px', 
                overflow: 'visible', 
                background: 'white', 
                borderRadius: '16px', 
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)', 
                border: '1px solid rgba(29, 122, 175, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '-25px', 
                  left: '30px', 
                  background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)', 
                  color: 'white', 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  boxShadow: '0 6px 20px rgba(29, 122, 175, 0.4)', 
                  zIndex: 10 
                }}>4</div>
                <h3 style={{ 
                  color: colors.text.primary, 
                  marginBottom: '15px', 
                  marginTop: '20px',
                  fontSize: '1.3rem',
                  fontWeight: '700'
                }}>Ongoing Support & Monitoring</h3>
                <p style={{ 
                  color: colors.text.secondary, 
                  lineHeight: '1.6', 
                  marginBottom: '20px'
                }}>
                  Continuous monitoring, security updates, and ongoing support to ensure optimal performance and security 
                  posture maintenance.
                </p>
                <ul style={{ 
                  color: colors.text.secondary, 
                  paddingLeft: '20px', 
                  lineHeight: '1.7',
                  listStyle: 'none'
                }}>
                  <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    24/7 technical support
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    Security monitoring
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    Regular security reviews
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '25px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    Policy updates & maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            @media (max-width: 768px) {
              .process-grid {
                grid-template-columns: 1fr !important;
                gap: 20px !important;
                padding: 0 5px !important;
              }
            }
            @media (max-width: 480px) {
              .process-grid {
                padding: 0 5px !important;
              }
              .container {
                padding: 0 5px !important;
              }
            }
          `}} />
        </section>

        {/* What We Set Up for You */}
        <section style={{
          background: '#f8f9fa',
          padding: '80px 20px'
        }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: '700',
                color: '#1F7CFF',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>
                What We Actually Set Up for You
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#666',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                We don't just sell you software. We configure everything specifically for your business needs and train your team to use it effectively.
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '30px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(31, 124, 255, 0.1)',
                height: '100%'
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
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>
                  Enterprise Password Manager
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0'
                }}>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '10px',
                    fontSize: '1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                    Admin dashboard setup
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '10px',
                    fontSize: '1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                    User accounts creation
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '10px',
                    fontSize: '1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                    Security policies configured
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    fontSize: '1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                    Emergency access setup
                  </li>
                </ul>
              </div>
              
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '30px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(31, 124, 255, 0.1)',
                height: '100%'
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
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="14,2 14,8 20,8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>
                  Password Migration
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0'
                }}>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '10px',
                    fontSize: '1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                    Existing passwords imported
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '10px',
                    fontSize: '1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                    Weak passwords identified
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '10px',
                    fontSize: '1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                    Duplicate passwords flagged
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    fontSize: '1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                    Secure password updates
                  </li>
                </ul>
              </div>
              
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '30px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(31, 124, 255, 0.1)',
                height: '100%'
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
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>
                  Team Training
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0'
                }}>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '10px',
                    fontSize: '1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                    Hands-on training sessions
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '10px',
                    fontSize: '1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                    Best practices guidance
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '10px',
                    fontSize: '1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                    Mobile app setup
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    fontSize: '1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                    Browser extensions installed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who Needs Password Management */}
        <section style={{
          background: 'white',
          padding: '80px 20px'
        }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: '700',
                color: '#1F7CFF',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>
                Who Actually Needs Password Management?
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#666',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Password management isn't just for large corporations. If you have employees, customer data, or business accounts - you need proper password security.
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(31, 124, 255, 0.1), rgba(31, 124, 255, 0.05))',
                borderRadius: '20px',
                padding: '40px',
                border: '2px solid rgba(31, 124, 255, 0.2)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '25px',
                  textAlign: 'center'
                }}>
                  You Need Password Management If:
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0'
                }}>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '15px', fontSize: '1.3rem' }}>✓</span>
                    You have 2+ employees with system access
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '15px', fontSize: '1.3rem' }}>✓</span>
                    You store customer information
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '15px', fontSize: '1.3rem' }}>✓</span>
                    You use online banking or payment systems
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '15px', fontSize: '1.3rem' }}>✓</span>
                    You have shared business accounts
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '15px', fontSize: '1.3rem' }}>✓</span>
                    Employees work remotely or on multiple devices
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '15px', fontSize: '1.3rem' }}>✓</span>
                    You need to track who accessed what and when
                  </li>
                </ul>
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, rgba(255, 198, 0, 0.1), rgba(255, 198, 0, 0.05))',
                borderRadius: '20px',
                padding: '40px',
                border: '2px solid rgba(255, 198, 0, 0.2)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#FFC600',
                  marginBottom: '25px',
                  textAlign: 'center'
                }}>
                  Warning Signs You're at Risk:
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0'
                }}>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#ef4444', marginRight: '15px', fontSize: '1.3rem' }}>⚠</span>
                    Employees share passwords via email or Slack
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#ef4444', marginRight: '15px', fontSize: '1.3rem' }}>⚠</span>
                    Former employees still have access to accounts
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#ef4444', marginRight: '15px', fontSize: '1.3rem' }}>⚠</span>
                    Passwords written on sticky notes or in spreadsheets
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#ef4444', marginRight: '15px', fontSize: '1.3rem' }}>⚠</span>
                    No way to reset passwords when employees leave
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#ef4444', marginRight: '15px', fontSize: '1.3rem' }}>⚠</span>
                    Same password used across multiple accounts
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#ef4444', marginRight: '15px', fontSize: '1.3rem' }}>⚠</span>
                    You can't remember all your business passwords
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section" style={{ backgroundColor: '#000', color: 'white', marginBottom: '0', paddingBottom: '60px' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Ready to Stop the Password Madness?</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Book a free password security consultation. We'll review your current password practices, identify your biggest risks, and show you exactly how to fix them. Even if you don't work with us, you'll leave knowing exactly what you need to do to protect your business.
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
              }}>Get Password Management</a>
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
        </section>

      </main>

      <Footer />
    </div>
  );
};