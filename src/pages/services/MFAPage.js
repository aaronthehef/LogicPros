import React, { useEffect } from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { colors } from '../../styles/colors';

export const MFAPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "Multi-Factor Authentication (MFA) | LogicPros - New Brunswick";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Passwords alone can\'t protect your business. MFA blocks 99.9% of credential attacks even when passwords are stolen. Professional multi-factor authentication setup for Maritime businesses.');
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
        textShadow: 0 0 10px rgba(29, 122, 175, 0.8) !important;
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
                  Your Password Got Stolen. Again.
                </h1>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  color: '#e2e8f0',
                  marginBottom: '2.5rem',
                  fontWeight: '300',
                  maxWidth: '500px'
                }}>
                  Passwords alone can't protect your business anymore. Data breaches expose millions of credentials daily—and yours might already be for sale on the dark web. Multi-factor authentication blocks 99.9% of automated attacks, even when passwords are compromised.
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
                    Get MFA Implementation
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
                {/* Authenticate Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Authenticate</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Multi-Factor Verification</p>
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
                      <rect x="5" y="2" width="14" height="20" rx="2" stroke="white" strokeWidth="2"/>
                      <path d="M12 18h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
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
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Secure Access</p>
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
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>

                {/* Comply Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Verify</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Confirm Identity</p>
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
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="8.5" cy="7" r="4" stroke="white" strokeWidth="2"/>
                      <polyline points="17,11 19,13 23,9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why MFA is Critical Stats */}
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
              }}>The Hidden Cost of Password-Only Security</h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#6b7280',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Passwords used to be enough. Not anymore. Modern cyberattacks don't need to guess your password—they buy it from massive data breaches, use credential-stuffing tools, or simply trick your employees into handing it over. Without MFA, you're relying on a single layer of defense that fails daily.
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
                  stat: '99.9%',
                  desc: 'of automated account takeover attacks are blocked by MFA—even when the attacker has your actual password',
                  icon: 'shield',
                  color: '#1d7aaf',
                  bgColor: 'rgba(29, 122, 175, 0.08)',
                  title: 'Protection Rate'
                },
                {
                  stat: '81%',
                  desc: 'of company data breaches start with compromised passwords. MFA stops the attack even after the password is stolen',
                  icon: 'lock',
                  color: '#1e40af',
                  bgColor: 'rgba(30, 64, 175, 0.08)',
                  title: 'Breach Cause'
                },
                {
                  stat: '300%',
                  desc: 'increase in credential-based attacks on Canadian businesses. Attackers know passwords are the weak link',
                  icon: 'trend',
                  color: '#155e8a',
                  bgColor: 'rgba(21, 94, 138, 0.08)',
                  title: 'Attack Growth'
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
                        {item.icon === 'shield' && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {item.icon === 'lock' && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="white" strokeWidth="2" fill="none"/>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {item.icon === 'trend' && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 6l-9.5 9.5-5-5L1 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <polyline points="17,6 23,6 23,12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

        {/* Why Passwords Alone Fail */}
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
                Why Passwords Alone Fail
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
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>
                  Your Employees Use the Same Password Everywhere
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  It's human nature. Creating unique passwords for every system is exhausting, so people reuse the same few passwords everywhere. When one website gets breached (and they do constantly), attackers try those stolen passwords on every business system they can find. That's why 65% of people admit to reusing passwords—and why credential-stuffing attacks work so well.
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
                    <ellipse cx="14" cy="12" rx="7" ry="4" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M7 12L2 9M7 12L2 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12l2-2M21 12l2 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="17" cy="11" r="1" fill="white"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>
                  Phishing Is Getting Impossible to Spot
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  Even your most careful employees can fall for modern phishing attacks. Fake login pages look identical to real ones. Email impersonation is sophisticated. A single distracted moment—checking email before coffee, rushing between meetings—and suddenly someone's entered their real password into a fake site. MFA makes that stolen password worthless because the attacker can't access the second factor.
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
                    <rect x="2" y="5" width="20" height="14" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M2 10h20" stroke="white" strokeWidth="2"/>
                    <circle cx="7" cy="15" r="1" fill="white"/>
                    <circle cx="11" cy="15" r="1" fill="white"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>
                  Your Credentials Are Already for Sale
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  Billions of username and password combinations from past breaches are traded on the dark web. If your employees use personal email addresses that have ever been involved in any breach (LinkedIn, Adobe, Yahoo—the list is endless), attackers already have credentials to try against your business systems. MFA is the only defense that works even after your password is compromised.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What is MFA */}
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
              }}>Understanding Multi-Factor Authentication</h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                Multi-factor authentication adds a second proof of identity that an attacker can't easily steal or fake. Even if they have your password, they still need that second factor—your phone, a hardware key, or your fingerprint. Think of it like your debit card: you need both the physical card (something you have) and the PIN (something you know). Stealing one isn't enough.
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
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="white" strokeWidth="2" fill="none"/>
                    <line x1="12" y1="18" x2="12.01" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ 
                  color: colors.text.primary, 
                  marginBottom: '15px',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  textAlign: 'center'
                }}>Mobile Authenticator Apps</h3>
                <p style={{
                  color: colors.text.secondary,
                  marginBottom: '20px',
                  lineHeight: '1.7',
                  textAlign: 'center'
                }}>
                  Your phone generates a temporary 6-digit code that changes every 30 seconds. When you log in, you enter your password plus the current code from your phone. Even if an attacker steals your password, they can't log in without physically having your phone in their hands. Works with Office 365, Google Workspace, banking apps, and most business systems.
                </p>
                <ul style={{ 
                  color: colors.text.secondary, 
                  paddingLeft: '20px', 
                  lineHeight: '1.8'
                }}>
                  <li>Office 365 and Google Workspace</li>
                  <li>Banking and financial applications</li>
                  <li>Cloud services and remote access</li>
                  <li>30-second rotating security codes</li>
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
                    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ 
                  color: colors.text.primary, 
                  marginBottom: '15px',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  textAlign: 'center'
                }}>Hardware Security Keys</h3>
                <p style={{
                  color: colors.text.secondary,
                  marginBottom: '20px',
                  lineHeight: '1.7',
                  textAlign: 'center'
                }}>
                  A physical USB device (like a YubiKey) that you tap or plug in when logging in. The most secure option—it's cryptographically impossible to phish because the key verifies it's actually talking to the real website. Recommended for administrator accounts, financial systems, and anyone who's a high-value target. About the size of a thumb drive, lasts for years.
                </p>
                <ul style={{ 
                  color: colors.text.secondary, 
                  paddingLeft: '20px', 
                  lineHeight: '1.8'
                }}>
                  <li>Administrator accounts</li>
                  <li>Financial systems access</li>
                  <li>High-value target protection</li>
                  <li>Maximum security for critical systems</li>
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
                    <rect x="3" y="11" width="18" height="11" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="16" r="1.5" fill="white"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ 
                  color: colors.text.primary, 
                  marginBottom: '15px',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  textAlign: 'center'
                }}>Biometric Authentication</h3>
                <p style={{
                  color: colors.text.secondary,
                  marginBottom: '20px',
                  lineHeight: '1.7',
                  textAlign: 'center'
                }}>
                  Your fingerprint or face becomes the second factor. Most convenient for employees because modern laptops and phones have fingerprint readers and facial recognition built-in. Combines strong security (you can't forget your fingerprint) with ease of use (just touch the reader). Works great for physical device access and can be combined with other methods for remote access.
                </p>
                <ul style={{ 
                  color: colors.text.secondary, 
                  paddingLeft: '20px', 
                  lineHeight: '1.8'
                }}>
                  <li>Mobile device unlocking</li>
                  <li>Physical facility access</li>
                  <li>Time and attendance systems</li>
                  <li>Most convenient user experience</li>
                </ul>
              </div>
            </div>

            {/* MFA vs Passwords Security Difference */}
            <div style={{
              margin: '60px 20px 0',
              background: '#f8f9fa',
              borderRadius: '20px',
              padding: '40px',
              border: '1px solid rgba(29, 122, 175, 0.1)'
            }}>
              <h3 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: '700',
                color: colors.text.primary,
                marginBottom: '30px',
                textAlign: 'center'
              }}>MFA vs. Passwords: The Real Security Difference</h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '40px'
              }}>
                {/* Passwords Only */}
                <div style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '30px',
                  border: '1px solid rgba(220, 38, 38, 0.2)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '15px'
                    }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="white" strokeWidth="2" fill="none"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      color: '#ef4444',
                      margin: '0'
                    }}>What You're Risking With Passwords Alone</h4>
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
                      <span style={{ color: '#ef4444', marginRight: '10px', fontSize: '1.2rem' }}>✗</span>
                      Stolen in data breaches you don't control
                    </li>
                    <li style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: '12px',
                      fontSize: '1rem',
                      color: '#666'
                    }}>
                      <span style={{ color: '#ef4444', marginRight: '10px', fontSize: '1.2rem' }}>✗</span>
                      Employees write them down or reuse them
                    </li>
                    <li style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: '12px',
                      fontSize: '1rem',
                      color: '#666'
                    }}>
                      <span style={{ color: '#ef4444', marginRight: '10px', fontSize: '1.2rem' }}>✗</span>
                      Phishing attacks steal them in seconds
                    </li>
                    <li style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: '12px',
                      fontSize: '1rem',
                      color: '#666'
                    }}>
                      <span style={{ color: '#ef4444', marginRight: '10px', fontSize: '1.2rem' }}>✗</span>
                      Credential-stuffing attacks succeed constantly
                    </li>
                    <li style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: '12px',
                      fontSize: '1rem',
                      color: '#666'
                    }}>
                      <span style={{ color: '#ef4444', marginRight: '10px', fontSize: '1.2rem' }}>✗</span>
                      One compromised password = full system access
                    </li>
                    <li style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      fontSize: '1rem',
                      color: '#666'
                    }}>
                      <span style={{ color: '#ef4444', marginRight: '10px', fontSize: '1.2rem' }}>✗</span>
                      No way to know when credentials are stolen
                    </li>
                  </ul>
                </div>
                
                {/* Passwords + MFA */}
                <div style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '30px',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    right: '20px',
                    background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                    color: 'white',
                    padding: '6px 15px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    99.9% Protection
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '15px'
                    }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="white" strokeWidth="2" fill="none"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      color: '#22c55e',
                      margin: '0'
                    }}>What Changes With MFA Protection</h4>
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
                      Stolen passwords become worthless without second factor
                    </li>
                    <li style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: '12px',
                      fontSize: '1rem',
                      color: '#666'
                    }}>
                      <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                      Phishing attacks fail at the authentication step
                    </li>
                    <li style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: '12px',
                      fontSize: '1rem',
                      color: '#666'
                    }}>
                      <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                      Automated attacks blocked even with correct password
                    </li>
                    <li style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: '12px',
                      fontSize: '1rem',
                      color: '#666'
                    }}>
                      <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                      Login attempts from new locations require approval
                    </li>
                    <li style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: '12px',
                      fontSize: '1rem',
                      color: '#666'
                    }}>
                      <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                      You get notified when someone tries to access your account
                    </li>
                    <li style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      fontSize: '1rem',
                      color: '#666'
                    }}>
                      <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                      99.9% reduction in successful account compromises
                    </li>
                  </ul>
                </div>
              </div>
            </div>

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
                    Why Don't More Businesses Use MFA?
                  </h2>
                  <p style={{
                    fontSize: '1.2rem',
                    color: '#666',
                    maxWidth: '700px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                  }}>
                    If MFA blocks 99.9% of attacks, why doesn't everyone use it? Honestly, it comes down to misconceptions about convenience and cost. Let's address the real concerns:
                  </p>
                </div>
                
                <div style={{
                  maxWidth: '900px',
                  margin: '0 auto'
                }}>
                  {/* Objection 1 */}
                  <div style={{
                    background: '#f8f9fa',
                    borderRadius: '16px',
                    padding: '30px',
                    marginBottom: '20px',
                    border: '1px solid rgba(31, 124, 255, 0.1)'
                  }}>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      color: '#1F7CFF',
                      marginBottom: '15px'
                    }}>
                      "Won't employees hate the extra step?"
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: '#666'
                    }}>
                      Initially, there's always some adjustment. But modern MFA is pretty seamless—most apps remember your device for 30-90 days, so employees only authenticate once per month on their work computer. For remote access or sensitive systems, that extra 5 seconds is a small price compared to dealing with a breach. We set up MFA to balance security with usability, not to make everyone's life miserable.
                    </p>
                  </div>
                  
                  {/* Objection 2 */}
                  <div style={{
                    background: '#f8f9fa',
                    borderRadius: '16px',
                    padding: '30px',
                    marginBottom: '20px',
                    border: '1px solid rgba(31, 124, 255, 0.1)'
                  }}>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      color: '#1F7CFF',
                      marginBottom: '15px'
                    }}>
                      "What if someone loses their phone?"
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: '#666'
                    }}>
                      This is the most common concern, and it's handled with backup methods. We set up backup codes employees can print and keep secure, backup phone numbers, or hardware keys for critical staff. If someone loses their phone, we can temporarily disable MFA for their account while they get their backup method working. It's a solvable problem, not a showstopper.
                    </p>
                  </div>
                  
                  {/* Objection 3 */}
                  <div style={{
                    background: '#f8f9fa',
                    borderRadius: '16px',
                    padding: '30px',
                    marginBottom: '20px',
                    border: '1px solid rgba(31, 124, 255, 0.1)'
                  }}>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      color: '#1F7CFF',
                      marginBottom: '15px'
                    }}>
                      "Isn't this expensive to implement?"
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: '#666'
                    }}>
                      Microsoft 365 and Google Workspace include MFA for free in their business plans. Most business systems have built-in MFA at no extra cost. The implementation cost is typically 1-3 hours of setup time to configure systems and train your team. Compare that to the average cost of a data breach ($4.45 million according to IBM) and MFA is the cheapest insurance you'll ever buy.
                    </p>
                  </div>
                  
                  {/* Objection 4 */}
                  <div style={{
                    background: '#f8f9fa',
                    borderRadius: '16px',
                    padding: '30px',
                    marginBottom: '20px',
                    border: '1px solid rgba(31, 124, 255, 0.1)'
                  }}>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      color: '#1F7CFF',
                      marginBottom: '15px'
                    }}>
                      "Can't hackers bypass MFA too?"
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: '#666'
                    }}>
                      Sophisticated attackers with significant resources can sometimes bypass MFA through advanced techniques like MFA-fatigue attacks or SIM-swapping. But these require targeting a specific person with time and effort. MFA eliminates automated, spray-and-pray attacks that account for 99.9% of breach attempts. It raises the bar so high that attackers move on to easier targets (businesses without MFA).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Implementation */}
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
                    What's Involved in Setting Up MFA
                  </h2>
                  <p style={{
                    fontSize: '1.2rem',
                    color: '#666',
                    maxWidth: '700px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                  }}>
                    We handle the technical configuration. Your employees download an app and scan a QR code. That's it.
                  </p>
                </div>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '30px',
                  maxWidth: '1200px',
                  margin: '0 auto'
                }}>
                  {/* Step 1 */}
                  <div style={{
                    background: 'white',
                    borderRadius: '16px',
                    padding: '30px',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(31, 124, 175, 0.1)',
                    height: '100%',
                    position: 'relative'
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
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      color: '#1F7CFF',
                      marginBottom: '15px',
                      marginTop: '20px'
                    }}>
                      Assessment (30 minutes)
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: '#666',
                      marginBottom: '15px'
                    }}>
                      We review which systems you're currently using (Office 365, Google Workspace, accounting software, CRM, etc.)
                    </p>
                    <ul style={{
                      color: '#666',
                      paddingLeft: '20px',
                      lineHeight: '1.7',
                      fontSize: '0.9rem'
                    }}>
                      <li>Identify which accounts need MFA first</li>
                      <li>Discuss which MFA method makes sense</li>
                      <li>Create implementation timeline</li>
                    </ul>
                  </div>
                  
                  {/* Step 2 */}
                  <div style={{
                    background: 'white',
                    borderRadius: '16px',
                    padding: '30px',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(31, 124, 175, 0.1)',
                    height: '100%',
                    position: 'relative'
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
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      color: '#1F7CFF',
                      marginBottom: '15px',
                      marginTop: '20px'
                    }}>
                      System Configuration (1-2 hours)
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: '#666',
                      marginBottom: '15px'
                    }}>
                      We enable and configure MFA in your business systems and set up backup authentication methods.
                    </p>
                    <ul style={{
                      color: '#666',
                      paddingLeft: '20px',
                      lineHeight: '1.7',
                      fontSize: '0.9rem'
                    }}>
                      <li>Configure device trust policies</li>
                      <li>Set up backup codes and recovery options</li>
                      <li>Test everything before rollout</li>
                    </ul>
                  </div>
                  
                  {/* Step 3 */}
                  <div style={{
                    background: 'white',
                    borderRadius: '16px',
                    padding: '30px',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(31, 124, 175, 0.1)',
                    height: '100%',
                    position: 'relative'
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
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      color: '#1F7CFF',
                      marginBottom: '15px',
                      marginTop: '20px'
                    }}>
                      Employee Onboarding (15 minutes per person)
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: '#666',
                      marginBottom: '15px'
                    }}>
                      We walk each employee through installing the authenticator app and connecting their account.
                    </p>
                    <ul style={{
                      color: '#666',
                      paddingLeft: '20px',
                      lineHeight: '1.7',
                      fontSize: '0.9rem'
                    }}>
                      <li>Test first MFA login with each employee</li>
                      <li>Provide simple printed instructions</li>
                      <li>Address individual questions</li>
                    </ul>
                  </div>
                  
                  {/* Step 4 */}
                  <div style={{
                    background: 'white',
                    borderRadius: '16px',
                    padding: '30px',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(31, 124, 175, 0.1)',
                    height: '100%',
                    position: 'relative'
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
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      color: '#1F7CFF',
                      marginBottom: '15px',
                      marginTop: '20px'
                    }}>
                      Backup & Recovery Setup (30 minutes)
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: '#666',
                      marginBottom: '15px'
                    }}>
                      We generate backup codes and train key staff on handling lost device scenarios.
                    </p>
                    <ul style={{
                      color: '#666',
                      paddingLeft: '20px',
                      lineHeight: '1.7',
                      fontSize: '0.9rem'
                    }}>
                      <li>Document recovery processes</li>
                      <li>Train multiple people on procedures</li>
                      <li>Establish ongoing support contacts</li>
                    </ul>
                  </div>
                </div>
                
                <div style={{
                  textAlign: 'center',
                  marginTop: '40px',
                  background: 'rgba(31, 124, 255, 0.05)',
                  padding: '20px',
                  borderRadius: '12px'
                }}>
                  <p style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#1F7CFF',
                    margin: '0'
                  }}>
                    Timeline: Most small businesses (5-15 people) are fully set up within a week. Larger organizations take 2-4 weeks.
                  </p>
                </div>
              </div>
            </section>

            {/* Who Needs MFA */}
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
                    Is MFA Overkill for Your Business?
                  </h2>
                  <p style={{
                    fontSize: '1.2rem',
                    color: '#666',
                    maxWidth: '700px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                  }}>
                    Here's the honest answer: if you have anything worth protecting—customer data, financial records, proprietary information—you need MFA. But it's especially critical if:
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
                    background: 'linear-gradient(135deg, rgba(31, 124, 175, 0.1), rgba(31, 124, 175, 0.05))',
                    borderRadius: '20px',
                    padding: '40px',
                    border: '2px solid rgba(31, 124, 175, 0.2)'
                  }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: '#1F7CFF',
                      marginBottom: '25px',
                      textAlign: 'center'
                    }}>
                      You Absolutely Need MFA If:
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
                        You store customer information (names, emails, payment details, addresses)
                      </li>
                      <li style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginBottom: '15px',
                        fontSize: '1.1rem',
                        color: '#666'
                      }}>
                        <span style={{ color: '#22c55e', marginRight: '15px', fontSize: '1.3rem' }}>✓</span>
                        Employees access systems remotely or from personal devices
                      </li>
                      <li style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginBottom: '15px',
                        fontSize: '1.1rem',
                        color: '#666'
                      }}>
                        <span style={{ color: '#22c55e', marginRight: '15px', fontSize: '1.3rem' }}>✓</span>
                        You use cloud services like Office 365, Google Workspace, or QuickBooks Online
                      </li>
                      <li style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginBottom: '15px',
                        fontSize: '1.1rem',
                        color: '#666'
                      }}>
                        <span style={{ color: '#22c55e', marginRight: '15px', fontSize: '1.3rem' }}>✓</span>
                        Your business handles payments or financial transactions
                      </li>
                      <li style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginBottom: '15px',
                        fontSize: '1.1rem',
                        color: '#666'
                      }}>
                        <span style={{ color: '#22c55e', marginRight: '15px', fontSize: '1.3rem' }}>✓</span>
                        You're subject to compliance requirements (PCI-DSS, PIPEDA, industry regulations)
                      </li>
                      <li style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        fontSize: '1.1rem',
                        color: '#666'
                      }}>
                        <span style={{ color: '#22c55e', marginRight: '15px', fontSize: '1.3rem' }}>✓</span>
                        Admin accounts have access to delete data or change critical settings
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
                      You Can Probably Wait If:
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
                        <span style={{ color: '#ef4444', marginRight: '15px', fontSize: '1.3rem' }}>✗</span>
                        You have no internet-connected systems (exceedingly rare these days)
                      </li>
                      <li style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        fontSize: '1.1rem',
                        color: '#666'
                      }}>
                        <span style={{ color: '#ef4444', marginRight: '15px', fontSize: '1.3rem' }}>✗</span>
                        All access is physically on-site with no remote options
                      </li>
                    </ul>
                    
                    <div style={{
                      marginTop: '20px',
                      padding: '15px',
                      background: 'rgba(31, 124, 175, 0.1)',
                      borderRadius: '10px',
                      borderLeft: '4px solid #1F7CFF'
                    }}>
                      <p style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#1F7CFF',
                        margin: '0',
                        marginBottom: '5px'
                      }}>
                        Bottom line:
                      </p>
                      <p style={{
                        fontSize: '1rem',
                        color: '#666',
                        margin: '0',
                        lineHeight: '1.5'
                      }}>
                        If you're reading this page, you probably need MFA. The question isn't whether you need it, but how quickly you can get it implemented before you need it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

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
                }}>Stop Relying On Passwords Alone</h3>
                <p style={{
                  marginBottom: '30px',
                  fontSize: '1.2rem',
                  maxWidth: '600px',
                  margin: '0 auto 30px auto',
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: '1.6'
                }}>
                  Every day without MFA is another day your business is vulnerable to credential-based attacks. We'll set up multi-factor authentication that actually works—secure enough to block 99.9% of attacks, convenient enough that your employees won't hate it.
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
                  }}>Get MFA Implementation</a>
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

        {/* Mobile Responsive CSS */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 768px) {
            .mfa-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
              padding: 0 5px !important;
            }
          }
          @media (max-width: 480px) {
            .container {
              padding: 0 5px !important;
            }
          }
        `}} />
      </main>

      <Footer />
    </div>
  );
};