import React, { useEffect } from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { colors } from '../../styles/colors';

export const CybersecurityPage = () => {
  useEffect(() => {
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
      
      .service-icon {
        transition: all 0.3s ease !important;
      }
      .service-icon:hover {
        transform: scale(1.1) rotate(5deg) !important;
        box-shadow: 0 12px 35px rgba(31, 124, 255, 0.4) !important;
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
        .process-grid {
          grid-template-columns: 1fr !important;
        }
      }
      
      /* Cybersecurity Services Section Responsive */
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
                  One Breach Can Destroy Everything You've Built
                </h1>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  color: '#e2e8f0',
                  marginBottom: '2.5rem',
                  fontWeight: '300',
                  maxWidth: '500px'
                }}>
                  Your business has customer data, financial records, and years of reputation at stake.
                  A single ransomware attack can cost tens of thousands in recovery — if you recover at all.
                  We protect Maritime businesses with enterprise-grade security at prices small businesses can actually afford.
                </p>
                
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <a href="/contact" className="hero-button">
                    Request Security Assessment
                  </a>
                  
                  <a href="/contact" className="secondary-button">
                    Learn What's At Risk
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
                {/* Security Audit Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Secure</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Security Audits & Compliance</p>
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

                {/* MFA Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Protect</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>MFA & Access Control</p>
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
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>

                {/* Incident Response Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Respond</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>24/7 Monitoring & Response</p>
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
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="12" y1="9" x2="12" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="12" y1="17" x2="12.01" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The Real Cost of a Breach Section */}
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
              }}>Why Cybersecurity Can't Wait</h2>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* Card 1: Business Closure */}
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
                    <path d="M12 2L4 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-8-4z" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  lineHeight: '1'
                }}>60%</div>
                <p style={{
                  color: 'white',
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  of small businesses close within 6 months of a cyberattack. They can't afford the recovery costs or lost reputation.
                </p>
              </div>

              {/* Card 2: Ransomware Cost */}
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
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  lineHeight: '1'
                }}>$200K+</div>
                <p style={{
                  color: 'white',
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  Average cost of a ransomware attack for small businesses — including ransom, recovery, lost revenue, and legal fees.
                </p>
              </div>

              {/* Card 3: Recovery Time */}
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
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  lineHeight: '1'
                }}>21 Days</div>
                <p style={{
                  color: 'white',
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  Average time to recover from a cyberattack. That's 3 weeks your business is crippled or completely shut down.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cybersecurity Services Section */}
        <section className="section" style={{ backgroundColor: '#f8faff', padding: '80px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: '700',
                color: '#1F7CFF',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>Our Cybersecurity Services</h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#6b7280',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Stop hackers before they get in. Recover fast if they do.
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              marginBottom: '40px'
            }}>
              {/* Security Audits Card */}
              <a href="/services/security-audits" style={{ textDecoration: 'none' }}>
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
                      <path d="M12 2L4 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-8-4z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: '#1a1a2e' }}>
                    Security Audits
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '15px' }}>
                    Find your weaknesses before hackers do. We'll show you exactly where you're exposed and how to fix it — in plain English, not tech jargon.
                  </p>
                  <span style={{ color: '#1F7CFF', fontWeight: '600', fontSize: '0.9rem' }}>
                    Learn More →
                  </span>
                </div>
              </a>

              {/* Password Management Card */}
              <a href="/services/password-management" style={{ textDecoration: 'none' }}>
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
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="16" r="1" fill="white"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: '#1a1a2e' }}>
                    Password Management
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '15px' }}>
                    Still using 'Password123' or the same password everywhere? That's how 81% of breaches happen. We'll set up secure password management so your team stops being the weak link.
                  </p>
                  <span style={{ color: '#1F7CFF', fontWeight: '600', fontSize: '0.9rem' }}>
                    Learn More →
                  </span>
                </div>
              </a>

              {/* Multi-Factor Authentication Card */}
              <a href="/services/multi-factor-authentication" style={{ textDecoration: 'none' }}>
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
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: '#1a1a2e' }}>
                    Multi-Factor Authentication
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '15px' }}>
                    Even if hackers steal your password, they can't get in without the second factor. MFA blocks 99.9% of automated attacks — it's the easiest security win you'll ever get.
                  </p>
                  <span style={{ color: '#1F7CFF', fontWeight: '600', fontSize: '0.9rem' }}>
                    Learn More →
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Core Cybersecurity & IT Services */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light, padding: '80px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ 
                fontSize: 'clamp(2rem, 3.5vw, 3rem)', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>Comprehensive Cybersecurity Solutions</h2>
              <p style={{
                fontSize: '1.1rem',
                color: colors.text.secondary,
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                You don't need a massive IT department to be secure. You just need someone who knows what they're doing and actually cares if you get hacked.
              </p>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '30px',
              maxWidth: '1000px',
              margin: '0 auto',
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
                  <div className="service-icon" style={{
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
                    margin: '0 auto 1.5rem auto',
                    color: 'white'
                  }}>
                    <svg width="40" height="40" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L4 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-8-4z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: '700', 
                    color: colors.text.primary, 
                    marginBottom: '8px'
                  }}>Security Audits</h3>
                  <p style={{ 
                    color: colors.primary, 
                    fontWeight: '600',
                    fontSize: '1.1rem'
                  }}>Comprehensive Assessment</p>
                </div>
                <ul style={{ 
                  listStyle: 'none',
                  padding: 0,
                  marginBottom: '25px'
                }}>
                  {[
                    'Vulnerability scanning & assessment',
                    'Penetration testing',
                    'Network security evaluation',
                    'Security policy reviews',
                    'Risk analysis & reporting',
                    'Compliance gap analysis',
                    'Remediation recommendations'
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
                    className="hero-button"
                    style={{
                      display: 'inline-block',
                      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                      color: '#000',
                      padding: '18px 40px',
                      borderRadius: '50px',
                      textDecoration: 'none',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      boxShadow: '0 6px 20px rgba(255, 215, 0, 0.4)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.boxShadow = '0 8px 30px rgba(255, 215, 0, 0.5)';
                      e.target.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.4)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    Request Security Assessment
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
                  <div className="service-icon" style={{
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
                    margin: '0 auto 1.5rem auto',
                    color: 'white'
                  }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: '700', 
                    color: colors.text.primary, 
                    marginBottom: '8px'
                  }}>Identity & Access</h3>
                  <p style={{ 
                    color: colors.primary, 
                    fontWeight: '600',
                    fontSize: '1.1rem'
                  }}>MFA & Password Security</p>
                </div>
                <ul style={{ 
                  listStyle: 'none',
                  padding: 0,
                  marginBottom: '25px'
                }}>
                  {[
                    'Multi-factor authentication setup',
                    'Password management systems',
                    'Single sign-on (SSO) solutions',
                    'Access control policies',
                    'User security training'
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
                    className="hero-button"
                    style={{
                      display: 'inline-block',
                      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                      color: '#000',
                      padding: '18px 40px',
                      borderRadius: '50px',
                      textDecoration: 'none',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      boxShadow: '0 6px 20px rgba(255, 215, 0, 0.4)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.boxShadow = '0 8px 30px rgba(255, 215, 0, 0.5)';
                      e.target.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.4)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    Get Cybersecurity Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Security Services */}
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
                Cybersecurity Services NB & Maritime Solutions
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#6b7280',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Beyond the basics — for businesses that handle sensitive data or need compliance with industry regulations
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
                  icon: '🔥',
                  title: 'Firewall Management',
                  description: 'Next-generation firewall configuration, monitoring, and management. Protect your network perimeter from advanced threats.'
                },
                {
                  icon: '☁️',
                  title: 'Cloud Security',
                  description: 'Secure your cloud infrastructure with proper configuration, access controls, and continuous monitoring across AWS, Azure, and Google Cloud.'
                },
                {
                  icon: '💾',
                  title: 'Backup & Recovery',
                  description: 'Automated backup solutions with disaster recovery planning. Ensure business continuity with tested recovery procedures.'
                },
                {
                  icon: '📋',
                  title: 'Compliance Support',
                  description: 'Meet industry compliance requirements including PIPEDA, PCI DSS, and sector-specific regulations with documented processes.'
                },
                {
                  icon: '🎓',
                  title: 'Security Training',
                  description: 'Employee cybersecurity awareness training, phishing simulations, and security policy development for your team.'
                },
                {
                  icon: '🚨',
                  title: 'Incident Response',
                  description: '24/7 security incident monitoring and response. Rapid containment and remediation of security threats and breaches.'
                }
              ].map((service, index) => (
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
                    <div className="service-icon" style={{
                      fontSize: '3rem',
                      marginBottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '70px',
                      height: '70px',
                      background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                      borderRadius: '20px',
                      boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                      transition: 'all 0.3s ease',
                      margin: '0 auto 1.5rem auto',
                      color: 'white'
                    }}>
                      {service.icon === '🔥' && (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="14" width="4" height="7" stroke="white" strokeWidth="2" fill="none"/>
                          <rect x="8" y="12" width="4" height="9" stroke="white" strokeWidth="2" fill="none"/>
                          <rect x="13" y="10" width="4" height="11" stroke="white" strokeWidth="2" fill="none"/>
                          <rect x="18" y="8" width="4" height="13" stroke="white" strokeWidth="2" fill="none"/>
                          <rect x="3" y="14" width="19" height="2" stroke="white" strokeWidth="2" fill="none"/>
                          <rect x="3" y="11" width="19" height="2" stroke="white" strokeWidth="2" fill="none"/>
                          <rect x="3" y="8" width="19" height="2" stroke="white" strokeWidth="2" fill="none"/>
                          <rect x="3" y="5" width="19" height="2" stroke="white" strokeWidth="2" fill="none"/>
                        </svg>
                      )}
                      {service.icon === '☁️' && (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {service.icon === '💾' && (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="7,10 12,15 17,10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="12" y1="15" x2="12" y2="3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {service.icon === '📋' && (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="14,2 14,8 20,8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="10,9 9,9 8,9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {service.icon === '🎓' && (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {service.icon === '🚨' && (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="12" y1="9" x2="12" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="12" y1="17" x2="12.01" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: '600', 
                      color: '#1f2937', 
                      marginBottom: '15px',
                      lineHeight: '1.3'
                    }}>{service.title}</h3>
                    <p style={{ 
                      color: '#6b7280', 
                      lineHeight: '1.7',
                      fontSize: '1rem'
                    }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call-to-Action */}
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <a
                href="/contact"
                className="hero-button"
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  color: '#000',
                  padding: '18px 40px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  boxShadow: '0 6px 20px rgba(255, 215, 0, 0.4)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 8px 30px rgba(255, 215, 0, 0.5)';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.4)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Request Security Assessment
              </a>
            </div>
          </div>
        </section>

        {/* Industry-Specific Cybersecurity Solutions */}
        <section style={{ backgroundColor: '#f8fafc', padding: '80px 0' }}>
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
                Industry-Specific Security Solutions
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: '#6b7280', 
                maxWidth: '600px', 
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Tailored cybersecurity solutions for New Brunswick and Maritime businesses
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
                  icon: '🏥',
                  title: 'Healthcare Security',
                  description: 'PIPEDA-compliant solutions for medical practices, clinics, and healthcare providers across New Brunswick.',
                  features: ['Patient data protection', 'PIPEDA compliance', 'Secure communications', 'Incident response plans']
                },
                {
                  icon: '💰',
                  title: 'Financial Services', 
                  description: 'PCI DSS compliance and advanced security for banks, credit unions, and financial advisors in the Maritimes.',
                  features: ['PCI DSS compliance', 'Transaction security', 'Fraud prevention', 'Risk assessments']
                },
                {
                  icon: '🏪',
                  title: 'Retail & E-commerce',
                  description: 'Secure payment processing and customer data protection for Maritime retail businesses.',
                  features: ['Payment security', 'Customer data protection', 'E-commerce security', 'Vulnerability scans']
                },
                {
                  icon: '🎓',
                  title: 'Education',
                  description: 'Cybersecurity solutions for schools, universities, and educational institutions across New Brunswick.',
                  features: ['Student data protection', 'Network security', 'Staff training', 'Compliance support']
                },
                {
                  icon: '🏭',
                  title: 'Manufacturing',
                  description: 'Industrial cybersecurity for Maritime manufacturing, protecting operational technology and data.',
                  features: ['OT security', 'Supply chain protection', 'Industrial controls', 'Business continuity']
                },
                {
                  icon: '⚖️',
                  title: 'Legal & Professional',
                  description: 'Client confidentiality and regulatory compliance for law firms and professional services.',
                  features: ['Client confidentiality', 'Document security', 'Regulatory compliance', 'Secure communications']
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
                    <div className="service-icon" style={{
                      fontSize: '2.5rem',
                      marginBottom: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                      borderRadius: '20px',
                      boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                      transition: 'all 0.3s ease',
                      margin: '0 auto 1.5rem auto',
                      color: 'white'
                    }}>
                      {industry.icon === '🏥' && (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="9,22 9,12 15,12 15,22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {industry.icon === '💰' && (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line x1="12" y1="1" x2="12" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {industry.icon === '🏪' && (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="3" y1="6" x2="21" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M16 10a4 4 0 0 1-8 0" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {industry.icon === '🎓' && (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {industry.icon === '🏭' && (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 21h18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M5 21V7l8-4v18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M19 21V11l-6-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {industry.icon === '⚖️' && (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 3h18v18H3zM12 8v8m-4-4h8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                      color: '#6b7280', 
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
                          color: '#6b7280',
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
            
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <a
                href="/contact"
                className="hero-button"
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  color: '#000',
                  padding: '18px 40px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  boxShadow: '0 6px 20px rgba(255, 215, 0, 0.4)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: 'none'
                }}
              >
                Get Cybersecurity Quote
              </a>
            </div>
          </div>
        </section>

        {/* Why Maritime Businesses Trust Us For Security Section */}
        <section style={{ backgroundColor: colors.backgrounds.light, padding: '80px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: '700',
                color: '#1F7CFF',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>Why Maritime Businesses Trust Us With Their Security</h2>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* Pillar 1: Government-Grade Security Expertise */}
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
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  lineHeight: '1.3',
                  textAlign: 'center'
                }}>Government-Grade Security Expertise</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  Our founder led IT for New Brunswick's provincial government. We bring the same security thinking that protects government data to your small business — without the government-sized price tag.
                </p>
              </div>

              {/* Pillar 2: We Explain What's Actually Wrong */}
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
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="14,2 14,8 20,8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="2"/>
                    <line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="2"/>
                    <polyline points="10,9 9,9 8,9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  lineHeight: '1.3',
                  textAlign: 'center'
                }}>We Explain What's Actually Wrong</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  No scary tech jargon designed to upsell you. We'll show you exactly what's vulnerable, what the real risks are, and what fixes actually matter vs. what's just nice to have.
                </p>
              </div>

              {/* Pillar 3: Ongoing Protection */}
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1F7CFF',
                  marginBottom: '15px',
                  lineHeight: '1.3',
                  textAlign: 'center'
                }}>Ongoing Protection, Not Just a One-Time Audit</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  Cybersecurity isn't a one-and-done project. New threats emerge constantly. We monitor, update, and keep you protected as the threat landscape changes — you won't be left exposed 6 months after we're done.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Our Cybersecurity Implementation Process</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto' }}>
                We don't just hand you a 50-page report full of technical jargon and leave. We find the problems, explain them in plain English,
                fix what matters most first, and make sure you're actually protected — not just checked off a compliance box.
              </p>
            </div>
            
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
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(31, 124, 255, 0.1)',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(31, 124, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
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
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>Security Assessment</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  We start by evaluating your current IT infrastructure, identifying vulnerabilities
                  and security gaps across all systems. Then we plan a comprehensive security strategy
                  tailored to your business needs.
                </p>
              </div>
              
              <div className="service-card professional-card" style={{
                position: 'relative',
                padding: '60px 40px 40px 40px',
                marginTop: '35px',
                overflow: 'visible',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(31, 124, 255, 0.1)',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(31, 124, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
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
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>Custom Security Plan</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  We create a tailored cybersecurity strategy based on your business needs,
                  compliance requirements, and risk tolerance. Every plan includes specific
                  security tools, policies, and procedures.
                </p>
              </div>
              
              <div className="service-card professional-card" style={{
                position: 'relative',
                padding: '60px 40px 40px 40px',
                marginTop: '35px',
                overflow: 'visible',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(31, 124, 255, 0.1)',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(31, 124, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
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
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>Implementation & Setup</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  Professional deployment of security tools, policies, and procedures with
                  minimal business disruption. We handle all technical details and ensure
                  everything works seamlessly.
                </p>
              </div>
              
              <div className="service-card professional-card" style={{
                position: 'relative',
                padding: '60px 40px 40px 40px',
                marginTop: '35px',
                overflow: 'visible',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(31, 124, 255, 0.1)',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(31, 124, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
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
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>Ongoing Support & Monitoring</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  24/7 security monitoring, regular updates, and continuous improvement
                  of your security posture. We keep your business protected against evolving threats.
                </p>
              </div>
            </div>
          </div>
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
              }}>Cybersecurity FAQ</h2>
              <p style={{ 
                fontSize: '1.1rem', 
                color: colors.text.secondary, 
                maxWidth: '600px', 
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Common questions about our cybersecurity and security audit services
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
                  question: 'How often should we do security audits?',
                  answer: 'We recommend comprehensive security audits annually, with quarterly vulnerability scans and monthly security reviews for optimal protection.'
                },
                {
                  question: 'What does a security audit include?',
                  answer: 'Comprehensive vulnerability assessment, penetration testing, security policy review, compliance analysis, risk assessment, and detailed remediation recommendations.'
                },
                {
                  question: 'Do you help with compliance requirements?',
                  answer: 'Yes! We help businesses meet PIPEDA, PCI DSS, and industry-specific compliance requirements with documentation and procedures.'
                },
                {
                  question: 'How quickly do you respond to security incidents?',
                  answer: 'Critical security incidents receive immediate response within 15 minutes, with full containment procedures initiated within 1 hour.'
                },
                {
                  question: 'Can you work with our existing IT team?',
                  answer: 'Absolutely! We complement your existing IT staff or can serve as your complete IT department, depending on your needs.'
                },
                {
                  question: 'What happens if we get breached?',
                  answer: 'Our incident response plan includes immediate containment, forensic analysis, system recovery, and compliance reporting as required.'
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
        <section className="section" style={{ backgroundColor: '#000', color: 'white', marginBottom: '0', paddingBottom: '60px' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Ready to Stop Worrying About Getting Hacked?</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Book a free security assessment. We'll review your current setup, identify your biggest risks, and show you exactly what needs fixing —
                even if you don't work with us. No scare tactics, no pressure, just honest advice from someone who's been protecting data for 21 years.
              </p>
            </div>
            <div style={{ 
              display: 'flex',
              justifyContent: 'center',
              gap: '15px',
              flexWrap: 'wrap'
            }}>
              <a
                href="/contact"
                className="hero-button"
                style={{
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
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 8px 30px rgba(255, 215, 0, 0.5)';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.4)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Request Security Assessment
              </a>
              <a
                href="/contact"
                className="secondary-button"
                style={{
                  display: 'inline-block',
                  background: 'transparent',
                  color: '#1F7CFF',
                  border: '2px solid #1F7CFF',
                  padding: '18px 40px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '50px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  textDecoration: 'none',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 8px 25px rgba(31, 124, 255, 0.4)';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.borderColor = 'rgba(31, 124, 255, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = 'none';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.borderColor = '#1F7CFF';
                }}
              >
                Get Cybersecurity Quote
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};