import React, { useEffect } from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { colors } from '../../styles/colors';

export const ITConsultingPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "IT Consulting Services | LogicPros - New Brunswick";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Tired of technology advice from people trying to sell you things? Objective IT consulting for New Brunswick businesses—honest recommendations, vendor evaluation, strategic planning without the sales pitch.');
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
                  Every Vendor Says Theirs Is the Best Solution.
                </h1>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  color: '#e2e8f0',
                  marginBottom: '2.5rem',
                  fontWeight: '300',
                  maxWidth: '500px'
                }}>
                  When you're evaluating technology, every salesperson has the perfect solution—which coincidentally is whatever they sell. IT consulting gives you objective advice from someone who isn't trying to sell you specific products. We help you understand what you actually need, evaluate options honestly, and avoid expensive mistakes that vendors won't warn you about.
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
                    Get Objective IT Advice
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
                {/* Strategy Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Strategy</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Strategic Planning</p>
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
                      <path d="M23 6l-9.5 9.5-5-5L1 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="17,6 23,6 23,12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Infrastructure Planning</p>
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

                {/* Growth Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Growth</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Informed Decisions</p>
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

        {/* Why IT Consulting Matters Section */}
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
                Why Technology Decisions Go Wrong
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                You're not an IT expert. That's fine—you're busy running your business. But that means every technology decision is a leap of faith based on vendor promises, online reviews, and hoping you're not being taken advantage of. Here's what happens without objective guidance:
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
                  }}>You're Making Expensive Guesses</h3>
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.7',
                    fontSize: '1rem',
                    textAlign: 'center'
                  }}>
                    Should you replace that server or just upgrade it? Move to the cloud or stay on-premises? Invest in this software or that one? You're making decisions that cost thousands of dollars based on information from people who are paid to sell you specific solutions. Vendor recommendations aren't evil—they're just not objective. IT consulting means someone evaluates your actual needs and gives you honest advice about what makes sense, not what's most profitable to sell.
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
                  }}>Your IT 'Strategy' Is Reacting to Problems</h3>
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.7',
                    fontSize: '1rem',
                    textAlign: 'center'
                  }}>
                    Most small businesses don't have an IT strategy—they have a series of emergency fixes and vendor-driven upgrades. Something breaks, so you buy a replacement. A salesperson pitches new software, so you try it. Years pass and you've accumulated a patchwork of systems nobody fully understands. Strategic planning means looking ahead, evaluating what's working and what isn't, and making proactive decisions instead of just reacting to whatever crisis or sales pitch comes next.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Help With Section */}
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
                What We Help With
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                IT consulting is objective advice about technology decisions. We're not selling specific products—we're helping you evaluate options and make informed choices.
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
                  icon: 'planning',
                  title: 'Planning Upgrades Before Things Break',
                  description: 'Right now you\'re probably replacing technology when it fails, not before. This means emergency purchases, rushed decisions, and downtime while you scramble. Technology planning means knowing what will need upgrading in the next 1-3 years, budgeting for it, and replacing things on your schedule—not when they catastrophically fail at the worst possible time.'
                },
                {
                  icon: 'assessment',
                  title: 'Understanding What You Actually Have',
                  description: 'Most businesses can\'t accurately describe their IT infrastructure. They have \'a server,\' \'some computers,\' and \'the cloud thing.\' An infrastructure assessment documents what you have, how old it is, what it\'s supposed to do, and whether it\'s actually doing that. This baseline lets you make informed decisions instead of guessing what needs fixing or upgrading.'
                },
                {
                  icon: 'security',
                  title: 'Finding Vulnerabilities Before Hackers Do',
                  description: 'You probably have security problems you don\'t know about—outdated software, weak passwords, missing backups, exposed systems. Security reviews identify those vulnerabilities and prioritize what needs fixing. We\'re not trying to scare you into buying expensive security products; we\'re showing you where your actual risks are so you can address them systematically.'
                },
                {
                  icon: 'analytics',
                  title: 'Figuring Out If IT Spending Makes Sense',
                  description: 'Are you spending too much on technology? Too little? Spending on the wrong things? Budget analysis shows you where your IT money goes and whether you\'re getting value. This includes identifying subscriptions you\'re paying for but not using, finding cheaper alternatives that work just as well, and calculating whether proposed investments will actually deliver the benefits vendors promise.'
                },
                {
                  icon: 'vendor',
                  title: 'Evaluating Vendors Who All Claim to Be Best',
                  description: 'When you\'re choosing software, cloud providers, hardware vendors, or service providers, everyone claims their solution is perfect for you. Objective vendor selection means evaluating options based on your specific needs, comparing real costs (not just sticker price), checking references honestly, and identifying red flags in contracts or capabilities that sales pitches gloss over.'
                },
                {
                  icon: 'growth',
                  title: 'Making Sure Technology Can Scale With You',
                  description: 'The system that works fine for 5 employees often collapses under 15. Growth planning means anticipating what breaks as you scale and addressing it before it becomes a crisis. This includes network capacity, software licenses, server performance, backup systems, and all the infrastructure that needs to grow with your business—not scramble to catch up after you\'ve already outgrown it.'
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
                      {service.icon === 'planning' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="14,2 14,8 20,8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="10" y1="9" x2="8" y2="9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {service.icon === 'assessment' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {service.icon === 'security' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {service.icon === 'analytics' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M7 10.5V17.5M11.5 5.5V17.5M16 10.5V17.5M20.5 5.5V17.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {service.icon === 'vendor' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="8.5" cy="7" r="4" stroke="white" strokeWidth="2"/>
                          <path d="M20 8v6M23 11h-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {service.icon === 'growth' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 6l-9.5 9.5-5-5L1 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="17,6 23,6 23,12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

        {/* What IT Consulting Actually Is Section */}
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
                What IT Consulting Actually Is
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                IT consulting gets confused with other IT services. Here's what we're actually providing:
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '30px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* Strategic Advice */}
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
                    <path d="M23 6l-9.5 9.5-5-5L1 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="17,6 23,6 23,12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>Strategic Advice, Not Implementation</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  IT consulting is recommending what you should do and why. Implementation is actually doing it. We can do both, but they're different services. Consulting means we analyze your situation, research options, provide recommendations, and explain the reasoning. You make the decision, then either you implement it, we implement it, or a vendor implements it. The value is objective expertise informing your choices.
                </p>
              </div>
              
              {/* Objective Analysis */}
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
                    <path d="M9 11l3 3L22 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>Objective Analysis, Not Sales</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  We're not selling specific hardware, software, or cloud services. We evaluate options based on your needs and give honest recommendations—even if that recommendation is "don't spend money on this right now." When vendors pitch solutions, they're optimizing for their commission. When we consult, we're optimizing for what actually solves your problem at a price that makes sense.
                </p>
              </div>
              
              {/* Proactive Planning */}
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
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                    <polyline points="12,6 12,12 16,14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>Proactive Planning, Not Emergency Fixes</h3>
                <p style={{
                  color: colors.text.secondary,
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  Most IT work is reactive—something breaks, you fix it. Consulting is proactive—looking ahead to prevent problems, planning upgrades before they're emergencies, and developing strategies that support your business goals instead of just keeping the lights on. This doesn't eliminate all emergencies, but it dramatically reduces the "scrambling in crisis mode" that defines most small business IT.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Consulting Process Section */}
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
                Our Consulting Process
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Consulting isn't one meeting where we tell you what to do. It's a collaborative process where we understand your business, analyze your technology, and develop recommendations that actually make sense for your situation.
              </p>
            </div>
            
            <div style={{ marginTop: '40px', paddingTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>1</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Discovery & Assessment</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We learn what your business does, what technology you currently use, what problems you're experiencing, and what you're trying to accomplish. This includes understanding your budget constraints, growth plans, and pain points. We're not just inventorying equipment—we're understanding context so recommendations make sense for your actual business, not a theoretical ideal.</p>
              </div>
              
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>2</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Analysis & Recommendations</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We analyze your current state against best practices, identify gaps and risks, research options that fit your needs, and develop specific recommendations with reasoning. These aren't vague suggestions like 'improve security'—they're actionable recommendations like 'replace the 2017 server with X or Y option, because it's reaching end-of-life and has these specific vulnerabilities, estimated cost $3,000-5,000.'</p>
              </div>
              
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>3</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Implementation Planning</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Recommendations are useless without execution plans. We create roadmaps that break large projects into phases, prioritize what's urgent versus important, estimate timelines and costs, and identify who needs to do what. This includes coordinating with vendors if needed, planning around your busy seasons, and setting success criteria so you know if changes actually delivered the promised benefits.</p>
              </div>
              
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>4</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Ongoing Advisory</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Technology changes. Your business changes. Consulting isn't a one-time report that sits on a shelf—it's ongoing guidance as you implement changes, encounter new challenges, or consider new opportunities. This might be quarterly check-ins, ad-hoc calls when you're evaluating a major purchase, or strategic planning sessions when you're expanding. The goal is consistent, objective advice as your needs evolve.</p>
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
                <strong>Important:</strong> IT consulting provides strategic guidance, not hands-on implementation. We can help with both, but our primary value is objective, expert advice to inform your decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Who Benefits From IT Consulting Section */}
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
                When You Actually Need IT Consulting
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Not every business needs consulting. If your technology is working fine and you're confident in your decisions, you're probably okay. But if you're experiencing these situations, objective expertise pays for itself:
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '30px'
            }}>
              {[
                {
                  title: 'You\'re About to Make a Major Technology Purchase',
                  description: 'New server, cloud migration, major software implementation, network overhaul—anything costing $10,000+ deserves objective analysis before you commit. Consulting fees (typically a fraction of the purchase cost) can save you from buying the wrong solution, overpaying dramatically, or missing critical requirements that become expensive problems later. Get a second opinion before signing contracts.'
                },
                {
                  title: 'Your Technology Is Old and You\'re Not Sure What to Do',
                  description: 'You have aging servers, outdated software, unsupported systems—you know you need to modernize but don\'t know where to start or what\'s actually urgent. Infrastructure assessment identifies what\'s high-risk versus just old, develops a phased modernization plan you can afford, and helps you prioritize what to tackle first based on actual risk and business impact.'
                },
                {
                  title: 'You\'re Growing and Technology Is Becoming a Problem',
                  description: 'What worked fine at 5 employees is breaking under 15. Systems are slow, workflows don\'t scale, employees are frustrated by limitations. Growth strategy consulting helps you anticipate what needs upgrading before it becomes a bottleneck, plan infrastructure that can handle your 3-year growth projections, and avoid the painful \'rip and replace everything\' scenario that happens when you outgrow your systems.'
                },
                {
                  title: 'Vendors Give You Conflicting Advice (And All Want Your Money)',
                  description: 'You\'re evaluating solutions and every vendor says theirs is the best. One recommends cloud, another says keep it on-premises. Software A claims it does everything, Software B says A is overpriced. You can\'t tell who\'s being honest because everyone has skin in the game. Objective consulting evaluates vendors based on your needs, not their commissions, and gives you honest pros and cons.'
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
                Providing IT consulting services throughout New Brunswick—Fredericton, Moncton, Saint John, and across the province. Most consulting work is remote (document review, analysis, research). In-person meetings available when needed.
              </p>
            </div>
          </div>
        </section>

        {/* What Consulting Costs (And What It Saves) Section */}
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
                What Consulting Costs (And What It Saves)
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                IT consulting is an upfront cost that prevents larger downstream costs. Here's the honest math:
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* Typical Consulting Costs */}
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
                  Typical Consulting Costs
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
                    <span style={{ color: '#1F7CFF', marginRight: '15px', fontSize: '1.3rem' }}>•</span>
                    Infrastructure assessment: $1,500-3,000 (depending on complexity)
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#1F7CFF', marginRight: '15px', fontSize: '1.3rem' }}>•</span>
                    Technology planning/roadmap: $2,000-4,000
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#1F7CFF', marginRight: '15px', fontSize: '1.3rem' }}>•</span>
                    Vendor selection assistance: $1,000-2,500
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#1F7CFF', marginRight: '15px', fontSize: '1.3rem' }}>•</span>
                    Security review: $1,500-3,000
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#1F7CFF', marginRight: '15px', fontSize: '1.3rem' }}>•</span>
                    Ongoing advisory (quarterly): $500-1,000/quarter
                  </li>
                </ul>
              </div>
              
              {/* What It Typically Saves */}
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
                  What It Typically Saves
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
                    <span style={{ color: '#FFC600', marginRight: '15px', fontSize: '1.3rem' }}>•</span>
                    Avoiding wrong software purchase: $5,000-20,000+ (software costs + implementation time)
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#FFC600', marginRight: '15px', fontSize: '1.3rem' }}>•</span>
                    Preventing over-spec'd hardware: $2,000-10,000 (buying what you need vs. what you're sold)
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#FFC600', marginRight: '15px', fontSize: '1.3rem' }}>•</span>
                    Catching security issues early: $10,000-50,000+ (vs. breach recovery costs)
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#FFC600', marginRight: '15px', fontSize: '1.3rem' }}>•</span>
                    Planning upgrades strategically: 30-50% of emergency replacement costs
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    <span style={{ color: '#FFC600', marginRight: '15px', fontSize: '1.3rem' }}>•</span>
                    Negotiating better vendor contracts: 10-20% savings on major purchases
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
                Consulting isn't free, but it typically saves 3-10x its cost by preventing expensive mistakes, identifying unnecessary spending, and negotiating better deals. Think of it as insurance against bad technology decisions—you pay upfront to avoid much larger costs later.
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
            }}>Get Advice That Isn't a Sales Pitch</h2>
            <p style={{
              fontSize: '1.3rem',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px auto',
              opacity: 0.9
            }}>
              Technology decisions are expensive and long-lasting. Get objective advice from someone who isn't trying to sell you specific products. We'll help you understand your options, evaluate what makes sense, and avoid mistakes that vendors won't warn you about.
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
                Schedule a Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};