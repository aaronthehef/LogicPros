import React, { useEffect } from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { colors } from '../../styles/colors';

export const NetworkManagementPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "Network Management Services | LogicPros - New Brunswick";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Tired of Wi-Fi that randomly fails and networks nobody understands? Professional network management for New Brunswick businesses—reliable connectivity, proactive monitoring, actual solutions to chronic problems.');
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
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
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
                  The Wi-Fi Works. Until It Doesn't.
                </h1>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  color: '#e2e8f0',
                  marginBottom: '2.5rem',
                  fontWeight: '300',
                  maxWidth: '500px'
                }}>
                  Nobody knows why the network is slow today. Nobody knows why the Wi-Fi drops in certain rooms. And everyone just accepts that "rebooting the router" is normal IT maintenance. Your business network shouldn't be a mystery that randomly fails—professional network management means predictable performance and someone who actually understands what's wrong when things break.
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
                    Fix Your Network Problems
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
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Proactive Monitoring</p>
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

                {/* Secure Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Secure</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Network Security</p>
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Optimize</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Performance Tuning</p>
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
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Network Management Matters Section */}
        <section style={{ backgroundColor: 'linear-gradient(135deg, #f8faff 0%, #ffffff 100%)', padding: '80px 20px' }}>
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
                What Unreliable Networks Actually Cost
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Slow internet is annoying. Wi-Fi that drops during video calls is embarrassing. Networks that mysteriously stop working are terrifying—because nobody knows how to fix them, how long it'll take, or whether you'll lose customers while you're offline. The real cost isn't just downtime. It's the uncertainty.
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
                padding: '40px 35px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                height: '100%'
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
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                      <polyline points="12,6 12,12 16,14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: '#1f2937',
                    marginBottom: '15px',
                    lineHeight: '1.3',
                    textAlign: 'center'
                  }}>Your Business Runs on Wi-Fi Nobody Understands</h3>
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.7',
                    fontSize: '1rem',
                    textAlign: 'center'
                  }}>
                    Internet access, file sharing, cloud applications, point-of-sale systems, security cameras—everything depends on your network working. When it fails, your entire operation stops. And usually, nobody on your team knows why it failed or how to fix it beyond "turn it off and on again." You're at the mercy of equipment you don't understand, hoping today isn't the day it completely dies.
                  </p>
                </div>
              </div>
              
              <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                padding: '40px 35px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                height: '100%'
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
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: '#1f2937',
                    marginBottom: '15px',
                    lineHeight: '1.3',
                    textAlign: 'center'
                  }}>Networks Get Slower and More Vulnerable Over Time</h3>
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.7',
                    fontSize: '1rem',
                    textAlign: 'center'
                  }}>
                    That router you installed five years ago? It hasn't had a firmware update since 2019, has known security vulnerabilities, and is running configuration settings someone Googled and hoped would work. Networks don't maintain themselves—they slowly accumulate problems until performance degrades to "barely usable" and security is "basically nonexistent." By the time you notice, you're years behind on patches and updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Manage Section */}
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
                What We Manage
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Your network isn't magic. It's hardware, configuration, and maintenance—all things that can be understood, monitored, and fixed properly.
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
                  icon: 'monitoring',
                  title: 'We Know When Things Break (Before You Do)',
                  description: 'Right now, you find out your network\'s failing when someone yells "the internet\'s down!" We monitor your network 24/7—bandwidth usage, device health, connection stability—and get alerts when something\'s wrong. Often we\'re fixing problems before anyone notices they existed. You shouldn\'t learn about network failures from frustrated employees.'
                },
                {
                  icon: 'router',
                  title: 'Your Router Needs Updates You\'re Not Getting',
                  description: 'Business routers and switches need firmware updates for security, performance, and bug fixes. When\'s the last time yours were updated? If the answer is "when we bought them" or "I have no idea," you\'re running outdated, vulnerable equipment. We keep your network hardware current, properly configured, and actually doing what it\'s supposed to do.'
                },
                {
                  icon: 'wifi',
                  title: 'Why the Wi-Fi Dies in Certain Rooms',
                  description: 'Dead zones, slow spots, constant dropouts—Wi-Fi problems usually come from poor access point placement, wrong channel settings, or interference from neighboring networks. We optimize your wireless coverage so the Wi-Fi actually works in the conference room, the back office, and everywhere else people need to work. Reliable connectivity shouldn\'t be location-dependent.'
                },
                {
                  icon: 'security',
                  title: 'Your Network Is Probably Wide Open',
                  description: 'Default passwords on routers, no firewall rules, guest Wi-Fi that can access internal systems, devices you don\'t recognize connected to your network—most small business networks have zero security because nobody knew what needed to be secured. We implement proper firewalls, access controls, and monitoring to actually protect your network from unauthorized access.'
                },
                {
                  icon: 'performance',
                  title: 'Why Everything Feels Slow Even With Fast Internet',
                  description: 'You\'re paying for 500Mbps internet but video calls still stutter and file uploads crawl. The problem isn\'t your internet speed—it\'s how your network is configured. Outdated equipment, poor Quality of Service settings, bandwidth-hogging devices—we tune your network so you actually get the performance you\'re paying for.'
                },
                {
                  icon: 'troubleshooting',
                  title: 'Actual Diagnosis, Not Just Guessing',
                  description: 'When your network fails, most "fixes" are just trying random things and hoping they work. We diagnose the actual problem—failed hardware, configuration errors, overloaded devices—and fix the root cause so it doesn\'t break again next week. Remote fixes for most issues, on-site for hardware problems that need hands-on work.'
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
                      {service.icon === 'monitoring' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="white" strokeWidth="2" fill="none"/>
                          <line x1="9" y1="9" x2="15" y2="9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="9" y1="15" x2="15" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {service.icon === 'router' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="4" y="13" width="16" height="8" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                          <path d="M8 13V8h8v5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="8" y1="17" x2="16" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {service.icon === 'wifi' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12.55a11 11 0 0 1 14.08 0" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M1.42 9a16 16 0 0 1 21.16 0" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="12" y1="20" x2="12.01" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {service.icon === 'security' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {service.icon === 'performance' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/>
                          <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {service.icon === 'troubleshooting' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
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
          </div>
        </section>

        {/* Our Network Management Approach Section */}
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
                Our Network Management Approach
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Good network management isn't magic—it's a systematic process of understanding what you have, configuring it properly, and maintaining it before problems become emergencies.
              </p>
            </div>
            
            <div style={{ marginTop: '40px', paddingTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>1</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Network Assessment</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We start by mapping your current network—what equipment you have, how it's configured, what's working and what's barely holding together. Most businesses discover they have hardware they didn't know existed, bottlenecks nobody identified, and security gaps that make us wince. This assessment creates the roadmap for fixing the underlying problems.</p>
              </div>
              
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>2</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>We Fix the Foundational Problems</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Based on the assessment, we implement proper network configuration—secure settings, optimal performance tuning, monitoring tools that actually tell us when something's wrong. This means rebuilding weak parts of your network infrastructure before they fail catastrophically. The goal is predictable, reliable performance instead of crossing your fingers daily.</p>
              </div>
              
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>3</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Ongoing Monitoring</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Once your network is properly configured, we monitor it continuously for performance degradation, security threats, and hardware failures. We get alerts when issues develop—often before they impact your business. Proactive monitoring means we're fixing problems during the 'warning sign' phase instead of the 'everything's broken' phase.</p>
              </div>
              
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>4</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Regular Upkeep That Actually Happens</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Firmware updates, security patches, performance optimization, configuration adjustments as your business changes—we handle the ongoing maintenance that most networks never receive. This prevents the slow degradation where networks gradually get slower, less secure, and more unstable until they're 'mysteriously' failing weekly.</p>
              </div>
            </div>
            
            <div style={{
              maxWidth: '800px',
              margin: '40px auto 0',
              padding: '20px',
              background: 'rgba(31, 124, 255, 0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(31, 124, 255, 0.1)'
            }}>
              <p style={{
                fontSize: '0.95rem',
                color: colors.text.secondary,
                textAlign: 'center',
                margin: 0,
                fontStyle: 'italic'
              }}>
                <strong>Important:</strong> While proactive management prevents many issues, some network outages are unavoidable. Our focus is on minimizing downtime and ensuring rapid recovery.
              </p>
            </div>
          </div>
        </section>

        {/* Common Network Problems We Fix Section */}
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
                Common Network Problems We Fix
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Every business network develops problems. Here are the ones we see most often in Maritime small businesses:
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* Problem 1 */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(31, 124, 175, 0.1), rgba(31, 124, 175, 0.05))',
                borderRadius: '20px',
                padding: '40px 30px',
                border: '2px solid rgba(31, 124, 175, 0.2)',
                height: '100%'
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
                    <path d="M5 12.55a11 11 0 0 1 14.08 0" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.42 9a16 16 0 0 1 21.16 0" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 20v.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 2L12 8" stroke="#ff4444" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="10" r="1" fill="#ff4444"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>Wi-Fi Dead Zones and Slow Spots</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  Conference room has no signal. Back office gets one bar. Someone's desk randomly disconnects three times a day. Usually caused by poor access point placement, interference, or trying to cover too much area with consumer-grade equipment. We add access points where needed, optimize placement and channels, and actually test coverage.
                </p>
              </div>
              
              {/* Problem 2 */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(31, 124, 175, 0.1), rgba(31, 124, 175, 0.05))',
                borderRadius: '20px',
                padding: '40px 30px',
                border: '2px solid rgba(31, 124, 175, 0.2)',
                height: '100%'
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
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>Network That's Randomly Slow</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  Some days the internet is fine. Other days everything crawls for no apparent reason. Often caused by outdated equipment, Quality of Service not configured, or bandwidth-hogging devices (security camera uploads, cloud backups, software updates) competing with actual work. We identify what's consuming bandwidth and prioritize business-critical traffic.
                </p>
              </div>
              
              {/* Problem 3 */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(31, 124, 175, 0.1), rgba(31, 124, 175, 0.05))',
                borderRadius: '20px',
                padding: '40px 30px',
                border: '2px solid rgba(31, 124, 175, 0.2)',
                height: '100%'
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
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>Equipment That's Silently Failing</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  Your network switch has been overheating for months but nobody noticed until it started dropping connections. Routers running at 98% CPU capacity. Network cables that are barely making contact. Hardware failures usually give warnings—we monitor for those warnings so you can replace equipment on your schedule, not in an emergency.
                </p>
              </div>
              
              {/* Problem 4 */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(31, 124, 175, 0.1), rgba(31, 124, 175, 0.05))',
                borderRadius: '20px',
                padding: '40px 30px',
                border: '2px solid rgba(31, 124, 175, 0.2)',
                height: '100%'
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
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>Security That's Basically Nonexistent</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  Default admin passwords still set. No firewall rules configured. Guest Wi-Fi can access internal servers. Devices connected that nobody recognizes. Most small business networks were set up by "someone who knows computers" and have zero actual security. We audit what's exposed and lock down what should be protected.
                </p>
              </div>
              
              {/* Problem 5 */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(31, 124, 175, 0.1), rgba(31, 124, 175, 0.05))',
                borderRadius: '20px',
                padding: '40px 30px',
                border: '2px solid rgba(31, 124, 175, 0.2)',
                height: '100%'
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
                    <rect x="3" y="3" width="7" height="7" rx="1" stroke="white" strokeWidth="2" fill="none"/>
                    <rect x="14" y="3" width="7" height="7" rx="1" stroke="white" strokeWidth="2" fill="none"/>
                    <rect x="3" y="14" width="7" height="7" rx="1" stroke="white" strokeWidth="2" fill="none"/>
                    <rect x="14" y="14" width="7" height="7" rx="1" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M10 6.5h4M10 17.5h4M6.5 10v4M17.5 10v4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>Networks That Grew Organically Into Chaos</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  Started with one router. Added a switch when you ran out of ports. Someone brought in another access point. Now you have a Frankenstein network where nobody knows what device does what, and changing anything might break everything. We document and organize what you actually have so changes don't cause panic.
                </p>
              </div>
              
              {/* Problem 6 */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(31, 124, 175, 0.1), rgba(31, 124, 175, 0.05))',
                borderRadius: '20px',
                padding: '40px 30px',
                border: '2px solid rgba(31, 124, 175, 0.2)',
                height: '100%'
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
                    <path d="M12 2v20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M9 22h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 6c-4 0-7 3-7 7M12 6c4 0 7 3 7 7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 10c-2 0-3.5 1.5-3.5 3.5M12 10c2 0 3.5 1.5 3.5 3.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="14" r="1.5" fill="white"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>Remote Access That Barely Works</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  VPN connections that timeout, drop constantly, or are so slow they're unusable. Remote workers who can't access files. Employees who just email documents around because the "proper" way doesn't work. Remote access requires specific configuration—we set up reliable VPN, remote desktop, or cloud access that actually functions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Needs Network Management Section */}
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
                Signs Your Network Needs Professional Management
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                You don't need network management if everything works perfectly and never breaks. For everyone in reality, here's when DIY network management stops being sufficient:
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '30px'
            }}>
              {[
                {
                  title: '"The Internet Is Down" Is a Weekly Event',
                  description: 'If network problems are a regular occurrence, not a rare emergency, something is fundamentally wrong with your infrastructure. You shouldn\'t be restarting routers weekly, dealing with "slow Wi-Fi days," or accepting that certain areas just "don\'t get good signal." Chronic problems mean your network isn\'t properly configured or maintained—and hoping it\'ll fix itself doesn\'t work.'
                },
                {
                  title: 'Nobody Knows How Your Network Actually Works',
                  description: 'The person who set it up left. Or it was installed years ago and nobody remembers the configuration. You don\'t have network diagrams, admin passwords are lost, and making any change feels like defusing a bomb because you don\'t know what\'s connected to what. When your network is a mystery to everyone, you need someone to document, understand, and properly manage it.'
                },
                {
                  title: 'You\'re Growing Faster Than Your Network Can Handle',
                  description: 'That consumer-grade router that worked fine for five people is choking under ten. You\'re running out of network ports, Wi-Fi capacity, and bandwidth. New employees slow everything down because your network wasn\'t designed to scale. Growth is good—but your network infrastructure needs to grow with you, not slowly collapse under increased load.'
                },
                {
                  title: 'You Have Remote Workers or Multiple Locations',
                  description: 'Connecting multiple offices, setting up reliable VPN access, ensuring remote workers can access files securely—these aren\'t tasks you can Google your way through. Multi-site and remote access require proper network design, security, and ongoing management. If you\'re doing it DIY and it barely works, that\'s costing you productivity every single day.'
                }
              ].map((benefit, index) => (
                <div key={index} style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '40px 30px',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(29, 122, 175, 0.1)',
                  transition: 'all 0.3s ease',
                  height: '100%'
                }}>
                  <h3 style={{
                    color: colors.primary,
                    marginBottom: '15px',
                    fontSize: '1.4rem',
                    fontWeight: '600'
                  }}>{benefit.title}</h3>
                  <p style={{
                    color: colors.text.secondary,
                    lineHeight: '1.6',
                    fontSize: '1rem'
                  }}>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section style={{ backgroundColor: colors.backgrounds.light, padding: '40px 20px' }}>
          <div className="container">
            <div style={{ textAlign: 'center' }}>
              <p style={{
                fontSize: '1.1rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Providing network management services throughout New Brunswick—Fredericton, Moncton, Saint John, and across the province. Network monitoring is remote. Configuration and equipment work includes on-site visits when needed.
              </p>
            </div>
          </div>
        </section>

        {/* What Network Management Can't Fix Section */}
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
                What Network Management Can't Fix
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Network management solves most connectivity and performance problems. But some issues are outside the network's control:
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* Can Fix */}
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
                  Can Fix
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
                    Slow Wi-Fi from poor configuration
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '15px', fontSize: '1.3rem' }}>✓</span>
                    Random disconnections from failing equipment
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '15px', fontSize: '1.3rem' }}>✓</span>
                    Security vulnerabilities in network devices
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '15px', fontSize: '1.3rem' }}>✓</span>
                    Dead zones and coverage gaps
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '15px', fontSize: '1.3rem' }}>✓</span>
                    Performance problems from improper settings
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '15px', fontSize: '1.3rem' }}>✓</span>
                    Equipment failures before they become emergencies
                  </li>
                </ul>
              </div>
              
              {/* Can't Fix */}
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
                  Can't Fix
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
                    Your ISP being terrible (we can help you switch ISPs, but if rural internet options are limited, we can't magic faster service into existence)
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#ef4444', marginRight: '15px', fontSize: '1.3rem' }}>✗</span>
                    Software problems on individual computers (that's helpdesk support, not network management)
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#ef4444', marginRight: '15px', fontSize: '1.3rem' }}>✗</span>
                    Physical damage to cables you accidentally cut with a shovel
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#ef4444', marginRight: '15px', fontSize: '1.3rem' }}>✗</span>
                    Power outages taking down equipment (though we can set up proper UPS backup power)
                  </li>
                </ul>
              </div>
            </div>
            
            <div style={{
              textAlign: 'center',
              marginTop: '40px',
              background: 'rgba(31, 124, 175, 0.05)',
              padding: '20px',
              borderRadius: '12px'
            }}>
              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                margin: '0',
                lineHeight: '1.5'
              }}>
                Network management makes your internal network reliable and fast. It doesn't fix your internet provider being slow or unreliable—though we can help evaluate whether switching ISPs makes sense, and optimize your network to get the best performance from whatever internet you have.
              </p>
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
            }}>Stop Accepting Network Problems as Normal</h2>
            <p style={{
              fontSize: '1.3rem',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px auto',
              opacity: 0.9
            }}>
              Your network shouldn't be the thing everyone blames when technology doesn't work. Let's talk about network management that makes your infrastructure predictable, reliable, and actually understood by someone who knows what they're doing.
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
                Get a Network Assessment
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};