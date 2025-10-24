import React, { useEffect } from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { colors } from '../../styles/colors';

export const ITHelpdeskPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "IT Support & Helpdesk Services | LogicPros - New Brunswick";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Stop wasting hours on IT problems. Professional helpdesk support for New Brunswick businesses—we fix technology issues fast so your team can keep working. Remote and on-site service.');
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
                  Who's Fixing Your IT When Everyone's Working?
                </h1>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  color: '#e2e8f0',
                  marginBottom: '2.5rem',
                  fontWeight: '300',
                  maxWidth: '500px'
                }}>
                  Your employees shouldn't be the IT department. When the printer breaks, emails stop working, or software won't install—your team loses hours trying to Google solutions. Professional helpdesk support means problems get fixed by people who actually know what they're doing, while your staff keeps working.
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
                    Get Reliable IT Support
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
                {/* Response Card */}
                <a
                  href="/contact"
                  className="hero-service-card"
                  style={{
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Response</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Quick Turnaround</p>
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

                {/* Expertise Card */}
                <a
                  href="/contact"
                  className="hero-service-card"
                  style={{
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Expertise</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Skilled Technicians</p>
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

                {/* Reliability Card */}
                <a
                  href="/contact"
                  className="hero-service-card"
                  style={{
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Reliability</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Consistent Solutions</p>
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
              </div>
            </div>
          </div>
        </section>

        {/* Why Professional IT Support Matters Section */}
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
                The Real Cost of DIY IT Support
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Every hour your team spends troubleshooting technology is an hour they're not doing the work you hired them for. IT problems don't just cost time when they happen—they cost productivity, create stress, and pile up into bigger problems when they're 'fixed' incorrectly.
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
                  }}>Minimizing Downtime</h3>
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.7',
                    fontSize: '1rem',
                    textAlign: 'center'
                  }}>
                    IT issues can bring business operations to a halt, costing time and money. Professional IT support with quick response times helps resolve problems before they significantly impact productivity, keeping your team focused on their work instead of troubleshooting technology issues.
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
                      <path d="M9 11l3 3L22 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: '#1f2937',
                    marginBottom: '15px',
                    lineHeight: '1.3',
                    textAlign: 'center'
                  }}>Preventative Support</h3>
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.7',
                    fontSize: '1rem',
                    textAlign: 'center'
                  }}>
                    Beyond fixing problems when they occur, professional IT support includes preventative maintenance that identifies potential issues before they become serious problems. This proactive approach helps extend the life of your technology and prevents unexpected disruptions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Support Section */}
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
                What We Support
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Technology breaks in frustrating, inconvenient ways. We fix the problems that steal time from your workday.
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
                  icon: 'hardware',
                  title: 'When Computers Won\'t Start',
                  description: 'Blue screens, black screens, computers that shut down randomly, hard drives making clicking noises, monitors that won\'t display—hardware failures are terrifying because you might lose everything. We diagnose what\'s wrong, recover your data if possible, and get you working again with minimal disruption.'
                },
                {
                  icon: 'software',
                  title: 'When Programs Stop Working',
                  description: 'Software that crashes, won\'t install, throws error messages, or just doesn\'t do what it\'s supposed to. Your team shouldn\'t waste hours searching forums trying to figure out why QuickBooks won\'t open or why Word keeps freezing. We fix software problems so you can get back to using the tools your business depends on.'
                },
                {
                  icon: 'accounts',
                  title: 'When People Can\'t Access What They Need',
                  description: 'New employee can\'t log into anything. Someone left and you\'re not sure if they still have access. Permissions are a mess and people can see (or delete) things they shouldn\'t. We set up accounts properly, manage who can access what, and make sure ex-employees can\'t get into your systems.'
                },
                {
                  icon: 'email',
                  title: 'When Email Isn\'t Working',
                  description: 'Emails aren\'t sending, aren\'t arriving, are going to spam, or you\'re locked out of your account. Email is how business happens—when it breaks, everything stops. We fix email problems fast because we know you can\'t wait days for a response from some offshore support team that doesn\'t understand the urgency.'
                },
                {
                  icon: 'printer',
                  title: 'When the Printer Won\'t Print (Again)',
                  description: 'Printers are the most frustrating technology ever invented. They\'re \'offline\' even though they\'re plugged in, they won\'t connect wirelessly, they print blank pages, or they jam constantly. We\'ve seen every possible printer problem and know how to actually fix them—not just turn them off and on again.'
                },
                {
                  icon: 'remote',
                  title: 'Fixed Fast, However We Need To',
                  description: 'Most problems we can fix remotely in minutes—you grant us access, we diagnose and solve it while you keep working. For physical issues (broken hardware, printer setup, new equipment), we come to you. Whatever gets the problem solved fastest.'
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
                      {service.icon === 'hardware' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="white" strokeWidth="2" fill="none"/>
                          <line x1="8" y1="21" x2="16" y2="21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="12" y1="17" x2="12.01" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {service.icon === 'software' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="14,2 14,8 20,8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="10" y1="9" x2="8" y2="9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {service.icon === 'accounts' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2"/>
                        </svg>
                      )}
                      {service.icon === 'email' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2" fill="none"/>
                          <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {service.icon === 'printer' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 9V2h12v7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <rect x="6" y="14" width="12" height="8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {service.icon === 'remote' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="2" y="3" width="20" height="14" rx="2" stroke="white" strokeWidth="2"/>
                          <path d="M8 21h8M12 17v4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M7 8h10M7 11h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
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

        {/* Our Support Process Section */}
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
                Our Support Process
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                No waiting days for a response. No being transferred between departments. No tech support that reads scripts and doesn't actually solve anything.
              </p>
            </div>
            
            <div style={{ marginTop: '40px', paddingTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>1</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Issue Reporting</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Call, email, or submit a ticket—whatever's easiest when you're dealing with a problem. You get a real response within 2 hours during business hours (usually much faster), not an automated 'we received your request' that means nothing. We acknowledge the issue, ask any clarifying questions, and let you know what happens next.</p>
              </div>
              
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>2</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>We Figure Out What's Actually Wrong</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Most IT problems are symptoms, not root causes. We diagnose the real issue (not just the obvious symptom) and decide on the fastest path to a solution. If it's something we can fix remotely in 10 minutes, we do that immediately. If it needs hands-on work, we schedule a time that doesn't disrupt your day.</p>
              </div>
              
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>3</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Resolution</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We fix it, test that it actually works, and make sure it won't break again tomorrow. You're not left wondering 'is this done?' or 'do I need to do anything else?'—we communicate clearly about what we're doing, how long it'll take, and when it's complete. Most issues are resolved the same day you report them.</p>
              </div>
              
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>4</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Follow-up & Documentation</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>After we fix something, we make sure it stays fixed. We document what went wrong and how we solved it, which helps us spot patterns (like 'this computer crashes weekly' or 'everyone has printer problems on Mondays'). Those patterns tell us when something needs replacing or upgrading before it becomes a crisis.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What Helpdesk Support Can't Do Section */}
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
                What Helpdesk Support Can't Do
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                We're good at fixing IT problems. We're not miracle workers. Here's what helpdesk support realistically handles:
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* Quick Helpdesk Fixes */}
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
                  Solved Through Helpdesk Support
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
                    Software crashes, freezes, won't install
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '15px', fontSize: '1.3rem' }}>✓</span>
                    Can't access files, folders, or network drives
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '15px', fontSize: '1.3rem' }}>✓</span>
                    Email not sending or receiving
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '15px', fontSize: '1.3rem' }}>✓</span>
                    Printer connection and configuration issues
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '15px', fontSize: '1.3rem' }}>✓</span>
                    Password resets and account lockouts
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '15px', fontSize: '1.3rem' }}>✓</span>
                    Slow computer performance
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#22c55e', marginRight: '15px', fontSize: '1.3rem' }}>✓</span>
                    Basic hardware troubleshooting
                  </li>
                </ul>
              </div>
              
              {/* Bigger Projects */}
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
                  Requires Planning & Projects
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
                    <span style={{ color: '#FFC600', marginRight: '15px', fontSize: '1.3rem' }}>→</span>
                    Complete system replacements
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#FFC600', marginRight: '15px', fontSize: '1.3rem' }}>→</span>
                    Server migrations or major upgrades
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#FFC600', marginRight: '15px', fontSize: '1.3rem' }}>→</span>
                    Network infrastructure redesigns
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#FFC600', marginRight: '15px', fontSize: '1.3rem' }}>→</span>
                    New software implementations
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#FFC600', marginRight: '15px', fontSize: '1.3rem' }}>→</span>
                    Data center moves
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#FFC600', marginRight: '15px', fontSize: '1.3rem' }}>→</span>
                    Custom software development
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
                    color: '#666',
                    margin: '0',
                    lineHeight: '1.5'
                  }}>
                    If your problem is "this doesn't work right now," that's helpdesk. If it's "we need to completely change how we do this," that's a project. We handle both—but they're different processes with different timelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Needs IT Helpdesk Support Section */}
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
                Is Your Business Losing Time to IT Problems?
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                You don't need helpdesk support if technology never breaks and everyone on your team is an IT expert. For everyone else in the real world, here are the signs you're wasting too much time on IT:
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '30px'
            }}>
              {[
                {
                  title: 'You\'re the "Tech Person" Because You\'re the Least Confused',
                  description: 'Nobody actually hired you to be IT support. You just ended up being the person everyone asks because you\'re slightly less terrified of technology. Now you\'re spending hours every week fixing problems that aren\'t your job, and you\'re doing it badly because you\'re learning as you go. This isn\'t sustainable.'
                },
                {
                  title: 'IT Problems Cause Actual Panic',
                  description: 'When the email goes down or the accounting software won\'t work, everyone\'s stressed because nobody knows how to fix it. You\'re Googling solutions, trying random things, and praying they work. Sometimes they do, sometimes they make it worse. The anxiety of "what if we can\'t fix this?" shouldn\'t be part of your workday.'
                },
                {
                  title: 'The Same Problems Keep Coming Back',
                  description: 'You\'ve "fixed" the printer six times this month. Someone\'s computer crashes every Tuesday. The Wi-Fi drops constantly. When problems recur weekly, it means they were never actually fixed—just temporarily bandaged. Professional support solves the root cause so you\'re not fighting the same fires repeatedly.'
                },
                {
                  title: 'Technology Decides When You\'re Productive',
                  description: 'Good days are when everything works. Bad days are when half your morning is lost to IT problems. Your business shouldn\'t run on luck—hoping today isn\'t the day something critical breaks. Reliable helpdesk support means technology is predictable, problems get fixed quickly, and your productivity isn\'t a gamble.'
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
                Providing remote and on-site IT helpdesk support to businesses throughout New Brunswick—Fredericton, Moncton, Saint John, and across the province. Most problems we fix remotely within hours. For hands-on work, we come to you.
              </p>
            </div>
          </div>
        </section>

        {/* How Helpdesk Support Actually Works Section */}
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
                How Helpdesk Support Actually Works
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                You're not hiring someone to sit in your office full-time. Here's how modern helpdesk support works for small businesses:
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* Card 1 */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 30px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>Contact Us When Problems Happen</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  Phone, email, or ticketing system—whatever works when you're dealing with a broken thing. You describe the problem (in normal language, not tech speak), and we start working on it. Most issues we can fix remotely the same day. For on-site work, we schedule a time that fits your schedule.
                </p>
              </div>
              
              {/* Card 2 */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 30px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
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
                    <line x1="12" y1="1" x2="12" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>Fixed-Fee Monthly or Pay-Per-Issue</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  Two pricing models: Monthly flat rate (unlimited tickets, predictable cost, priority response) or pay-per-ticket (only pay when you need help, good for businesses with rare IT issues). We'll recommend what makes sense based on how often you typically need support.
                </p>
              </div>
              
              {/* Card 3 */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 30px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
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
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="14,2 14,8 20,8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>We Remember Your Systems</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  Unlike calling random tech support where you explain your entire setup every time, we document your systems. We know what software you use, how your network is configured, what problems you've had before. This means faster diagnosis and solutions that actually fit your environment.
                </p>
              </div>
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
            }}>Stop Being Your Own IT Department</h2>
            <p style={{
              fontSize: '1.3rem',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px auto',
              opacity: 0.9
            }}>
              Your team was hired to do their actual jobs—not troubleshoot printers and reset passwords. Let's talk about helpdesk support that fixes problems fast so you can stop losing hours to technology issues that shouldn't be your responsibility.
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
                Talk About Helpdesk Support
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};