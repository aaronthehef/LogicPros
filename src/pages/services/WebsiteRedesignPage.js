import React, { useEffect } from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { colors } from '../../styles/colors';

export const WebsiteRedesignPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "Website Redesign Services | LogicPros - New Brunswick";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional website redesign services in New Brunswick. Modernize your site with updated design, improved performance, and better user experience.');
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
                  Embarrassed to Share Your Website Link?
                </h1>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  color: '#e2e8f0',
                  marginBottom: '2.5rem',
                  fontWeight: '300',
                  maxWidth: '500px'
                }}>
                  If your website looks like it's from 2012, doesn't work on phones, or makes you cringe when someone asks for your URL — you're losing customers before they even call. Let's fix what's costing you business.
                </p>
                
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <a href="/contact" className="hero-button">
                    See What's Actually Broken
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
                {/* Modern Design Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Modern Design</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Updated Look and Feel</p>
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
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="white" strokeWidth="2" fill="none"/>
                      <path d="M8 21h8M12 17v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>

                {/* Better Performance Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Performance</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Faster Loading Speed</p>
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
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>

                {/* User Experience Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>User Experience</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Better Navigation</p>
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
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="9,22 9,12 15,12 15,22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Signs You Need a Redesign Section */}
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
                color: 'white',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>
                Is Your Website Costing You Customers?
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                You know your site needs work when:
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* Card 1: Mobile Issues */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '40px 30px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
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
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="2" width="14" height="20" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M12 18h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '15px'
                }}>It Doesn't Work on Phones</h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  60% of your traffic is mobile. If they have to pinch and zoom, or your menu doesn't work on phones, they leave. Google penalizes mobile-broken sites too.
                </p>
              </div>

              {/* Card 2: Dated Design */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '40px 30px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
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
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                    <polyline points="12,6 12,12 16,14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '15px'
                }}>It Looks Dated</h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  If your site screams "2010 web design," visitors assume you're out of business or not keeping up. First impressions happen in 0.05 seconds. Outdated design = lost trust.
                </p>
              </div>

              {/* Card 3: Slow Loading */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '40px 30px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
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
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '15px'
                }}>It's Painfully Slow</h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  Takes more than 3 seconds to load? 53% of visitors bounce. Slow sites also rank lower on Google. Speed isn't optional anymore.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Actually Broken Section */}
        <section style={{ backgroundColor: '#f5f8fc', padding: '80px 20px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: '700',
                color: colors.text.primary,
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>
                Common Problems We Fix
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Here's what we typically find (and fix) when we redesign outdated websites:
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '40px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* Problem 1: Mobile Disaster */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 35px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                      <line x1="12" y1="18" x2="12.01" y2="18" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  Mobile Disaster
                </h3>
                <div style={{
                  padding: '15px',
                  backgroundColor: 'rgba(239, 68, 68, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(239, 68, 68, 0.1)',
                  marginBottom: '20px'
                }}>
                  <p style={{
                    color: colors.text.primary,
                    fontWeight: '600',
                    margin: '0 0 8px 0'
                  }}>What's Broken:</p>
                  <p style={{
                    color: colors.text.secondary,
                    margin: '0',
                    fontSize: '0.95rem'
                  }}>
                    Site was built when everyone used desktops. Now buttons don't work on phones, text is tiny, images don't scale. Mobile users give up immediately.
                  </p>
                </div>
                <div style={{
                  padding: '15px',
                  backgroundColor: 'rgba(34, 197, 94, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(34, 197, 94, 0.1)'
                }}>
                  <p style={{
                    color: colors.text.primary,
                    fontWeight: '600',
                    margin: '0 0 8px 0'
                  }}>What We Fix:</p>
                  <p style={{
                    color: colors.text.secondary,
                    margin: '0',
                    fontSize: '0.95rem'
                  }}>
                    Mobile-first redesign. Works perfectly on phones, tablets, and desktops. Tested on actual devices, not just resized browser windows.
                  </p>
                </div>
              </div>

              {/* Problem 2: Impossible Navigation */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 35px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5h18M3 12h18M3 19h18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  Impossible Navigation
                </h3>
                <div style={{
                  padding: '15px',
                  backgroundColor: 'rgba(239, 68, 68, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(239, 68, 68, 0.1)',
                  marginBottom: '20px'
                }}>
                  <p style={{
                    color: colors.text.primary,
                    fontWeight: '600',
                    margin: '0 0 8px 0'
                  }}>What's Broken:</p>
                  <p style={{
                    color: colors.text.secondary,
                    margin: '0',
                    fontSize: '0.95rem'
                  }}>
                    Visitors can't find what they're looking for. Menu is confusing, important pages are buried 3 clicks deep, no search function.
                  </p>
                </div>
                <div style={{
                  padding: '15px',
                  backgroundColor: 'rgba(34, 197, 94, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(34, 197, 94, 0.1)'
                }}>
                  <p style={{
                    color: colors.text.primary,
                    fontWeight: '600',
                    margin: '0 0 8px 0'
                  }}>What We Fix:</p>
                  <p style={{
                    color: colors.text.secondary,
                    margin: '0',
                    fontSize: '0.95rem'
                  }}>
                    Clean, logical navigation. Important stuff is obvious. Customers find what they need in under 3 clicks. Less frustration = more conversions.
                  </p>
                </div>
              </div>

              {/* Problem 3: Doesn't Rank on Google */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 35px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/>
                      <path d="m21 21-4.35-4.35" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  Doesn't Rank on Google
                </h3>
                <div style={{
                  padding: '15px',
                  backgroundColor: 'rgba(239, 68, 68, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(239, 68, 68, 0.1)',
                  marginBottom: '20px'
                }}>
                  <p style={{
                    color: colors.text.primary,
                    fontWeight: '600',
                    margin: '0 0 8px 0'
                  }}>What's Broken:</p>
                  <p style={{
                    color: colors.text.secondary,
                    margin: '0',
                    fontSize: '0.95rem'
                  }}>
                    Built before anyone cared about SEO. Bad code structure, no proper headings, slow load times, not mobile-friendly. Google ignores it.
                  </p>
                </div>
                <div style={{
                  padding: '15px',
                  backgroundColor: 'rgba(34, 197, 94, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(34, 197, 94, 0.1)'
                }}>
                  <p style={{
                    color: colors.text.primary,
                    fontWeight: '600',
                    margin: '0 0 8px 0'
                  }}>What We Fix:</p>
                  <p style={{
                    color: colors.text.secondary,
                    margin: '0',
                    fontSize: '0.95rem'
                  }}>
                    SEO-optimized from day one. Clean code, proper structure, fast loading, mobile-perfect. Gives you a fighting chance to rank.
                  </p>
                </div>
              </div>

              {/* Problem 4: No Clear Call-to-Action */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 35px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  No Clear Call-to-Action
                </h3>
                <div style={{
                  padding: '15px',
                  backgroundColor: 'rgba(239, 68, 68, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(239, 68, 68, 0.1)',
                  marginBottom: '20px'
                }}>
                  <p style={{
                    color: colors.text.primary,
                    fontWeight: '600',
                    margin: '0 0 8px 0'
                  }}>What's Broken:</p>
                  <p style={{
                    color: colors.text.secondary,
                    margin: '0',
                    fontSize: '0.95rem'
                  }}>
                    Visitors land on your site and... now what? No obvious "contact us," "get a quote," or "buy now." They leave confused.
                  </p>
                </div>
                <div style={{
                  padding: '15px',
                  backgroundColor: 'rgba(34, 197, 94, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(34, 197, 94, 0.1)'
                }}>
                  <p style={{
                    color: colors.text.primary,
                    fontWeight: '600',
                    margin: '0 0 8px 0'
                  }}>What We Fix:</p>
                  <p style={{
                    color: colors.text.secondary,
                    margin: '0',
                    fontSize: '0.95rem'
                  }}>
                    Clear CTAs throughout. Every page guides visitors to the next logical step. Make it dead simple to become a customer.
                  </p>
                </div>
              </div>

              {/* Problem 5: Looks Unprofessional */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 35px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  Looks Unprofessional
                </h3>
                <div style={{
                  padding: '15px',
                  backgroundColor: 'rgba(239, 68, 68, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(239, 68, 68, 0.1)',
                  marginBottom: '20px'
                }}>
                  <p style={{
                    color: colors.text.primary,
                    fontWeight: '600',
                    margin: '0 0 8px 0'
                  }}>What's Broken:</p>
                  <p style={{
                    color: colors.text.secondary,
                    margin: '0',
                    fontSize: '0.95rem'
                  }}>
                    Dated fonts, stock photos from 2005, broken layout, clashing colors. Looks amateur, so customers assume you're amateur.
                  </p>
                </div>
                <div style={{
                  padding: '15px',
                  backgroundColor: 'rgba(34, 197, 94, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(34, 197, 94, 0.1)'
                }}>
                  <p style={{
                    color: colors.text.primary,
                    fontWeight: '600',
                    margin: '0 0 8px 0'
                  }}>What We Fix:</p>
                  <p style={{
                    color: colors.text.secondary,
                    margin: '0',
                    fontSize: '0.95rem'
                  }}>
                    Modern, professional design that matches your actual brand quality. Custom layouts, current design trends, looks like a real business.
                  </p>
                </div>
              </div>

              {/* Problem 6: Content Management Nightmare */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 35px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="14,2 14,8 20,8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="10,9 9,9 8,9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  Content Management Nightmare
                </h3>
                <div style={{
                  padding: '15px',
                  backgroundColor: 'rgba(239, 68, 68, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(239, 68, 68, 0.1)',
                  marginBottom: '20px'
                }}>
                  <p style={{
                    color: colors.text.primary,
                    fontWeight: '600',
                    margin: '0 0 8px 0'
                  }}>What's Broken:</p>
                  <p style={{
                    color: colors.text.secondary,
                    margin: '0',
                    fontSize: '0.95rem'
                  }}>
                    Updating your site requires calling the original developer (who's MIA) or using a terrible backend system. So nothing ever gets updated.
                  </p>
                </div>
                <div style={{
                  padding: '15px',
                  backgroundColor: 'rgba(34, 197, 94, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(34, 197, 94, 0.1)'
                }}>
                  <p style={{
                    color: colors.text.primary,
                    fontWeight: '600',
                    margin: '0 0 8px 0'
                  }}>What We Fix:</p>
                  <p style={{
                    color: colors.text.secondary,
                    margin: '0',
                    fontSize: '0.95rem'
                  }}>
                    Easy-to-use content management. Update text, images, and pages yourself — or we'll do it. No more being held hostage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Redesign vs. Starting Over Section */}
        <section style={{ backgroundColor: 'white', padding: '80px 20px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: '700',
                color: colors.text.primary,
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>
                Do I Need a Full Redesign or Just Updates?
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Not every site needs a complete rebuild. Here's the honest breakdown:
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '40px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              {/* You Need a Full Redesign If */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: `2px solid ${colors.primary}`
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <polyline points="20 6 9 17 4 12" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  You Need a Full Redesign If:
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    "Your site was built more than 5 years ago",
                    "It doesn't work properly on mobile devices",
                    "It's built on outdated technology (Flash, old HTML, broken CMS)",
                    "You can't update it yourself and the original developer is gone",
                    "It's so slow that Google penalizes you",
                    "You're embarrassed to share the URL with potential customers"
                  ].map((item, index) => (
                    <li key={index} style={{
                      padding: '12px 0',
                      borderBottom: '1px solid #f3f4f6',
                      color: colors.text.secondary,
                      display: 'flex',
                      alignItems: 'flex-start'
                    }}>
                      <span style={{
                        color: colors.primary,
                        marginRight: '10px',
                        fontWeight: 'bold',
                        flexShrink: 0
                      }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Minor Updates Might Be Enough If */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: `1px solid #e5e7eb`
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: colors.text.secondary,
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #6b7280, #4b5563)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  Minor Updates Might Be Enough If:
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    "Your site was built in the last 2-3 years",
                    "It works fine on mobile",
                    "You just need content updates or minor design tweaks",
                    "The underlying platform is still modern and supported",
                    "Load times are decent",
                    "You're mostly happy with it but want small improvements"
                  ].map((item, index) => (
                    <li key={index} style={{
                      padding: '12px 0',
                      borderBottom: '1px solid #f3f4f6',
                      color: colors.text.secondary,
                      display: 'flex',
                      alignItems: 'flex-start'
                    }}>
                      <span style={{
                        color: '#6b7280',
                        marginRight: '10px',
                        fontWeight: 'bold',
                        flexShrink: 0
                      }}>○</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Callout Box */}
            <div style={{
              marginTop: '40px',
              padding: '25px',
              background: 'linear-gradient(135deg, rgba(29, 122, 175, 0.1), rgba(29, 122, 175, 0.05))',
              borderRadius: '16px',
              border: '1px solid rgba(29, 122, 175, 0.2)',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '40px auto 0 auto'
            }}>
              <p style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: colors.text.primary,
                margin: '0',
                lineHeight: '1.5'
              }}>
                Not sure? We'll give you an honest assessment. If your site just needs minor fixes, we'll tell you. We're not trying to sell you a $10K redesign if you only need $500 in updates.
              </p>
            </div>
          </div>
        </section>

        {/* What You Keep vs. What Gets Rebuilt Section */}
        <section style={{ backgroundColor: '#f5f8fc', padding: '80px 20px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: '700',
                color: colors.text.primary,
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>
                What Happens to My Current Site?
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Common concern: "I don't want to lose my Google rankings or existing content." Here's what stays and what changes:
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '40px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              {/* What You Keep */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <polyline points="20 6 9 17 4 12" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  What You Keep
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    "Your domain & hosting (usually — sometimes we recommend better hosting)",
                    "Your content (we migrate all text, images, blog posts)",
                    "Your SEO rankings (proper redirects maintain your Google position)",
                    "Your branding (logos, colors, messaging stay consistent unless you want updates)"
                  ].map((item, index) => (
                    <li key={index} style={{
                      padding: '12px 0',
                      borderBottom: '1px solid #f3f4f6',
                      color: colors.text.secondary,
                      display: 'flex',
                      alignItems: 'flex-start'
                    }}>
                      <span style={{
                        color: colors.primary,
                        marginRight: '10px',
                        fontWeight: 'bold',
                        flexShrink: 0
                      }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What Gets Rebuilt */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: colors.text.primary,
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  What Gets Rebuilt
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    "Design & layout (modern, mobile-friendly, professional)",
                    "Code & platform (updated technology, better performance)",
                    "Navigation & structure (easier to use, better organized)",
                    "Speed & optimization (faster load times, better Google scores)"
                  ].map((item, index) => (
                    <li key={index} style={{
                      padding: '12px 0',
                      borderBottom: '1px solid #f3f4f6',
                      color: colors.text.secondary,
                      display: 'flex',
                      alignItems: 'flex-start'
                    }}>
                      <span style={{
                        color: colors.primary,
                        marginRight: '10px',
                        fontWeight: 'bold',
                        flexShrink: 0
                      }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Redesign Timeline Section */}
        <section style={{ backgroundColor: 'white', padding: '80px 20px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: '700',
                color: colors.text.primary,
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>
                How Long Does a Redesign Take?
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Most website redesigns take 3-6 weeks, depending on complexity:
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '40px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              {/* Week 1 */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-25px',
                  left: '30px',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)',
                  zIndex: 10,
                  background: '#1F7CFF',
                  color: 'white'
                }}>1</div>
                <h3 style={{
                  color: colors.text.primary,
                  marginBottom: '15px',
                  marginTop: '20px',
                  fontSize: '1.4rem',
                  fontWeight: '600'
                }}>Week 1: Discovery & Planning</h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    "Review current site, identify what's broken",
                    "Clarify goals, audience, and must-have features",
                    "Competitor analysis and modern design research"
                  ].map((item, index) => (
                    <li key={index} style={{
                      padding: '12px 0',
                      borderBottom: '1px solid #f3f4f6',
                      color: colors.text.secondary,
                      display: 'flex',
                      alignItems: 'flex-start'
                    }}>
                      <span style={{
                        color: colors.primary,
                        marginRight: '10px',
                        fontWeight: 'bold',
                        flexShrink: 0
                      }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Weeks 2-3 */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-25px',
                  left: '30px',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)',
                  zIndex: 10,
                  background: '#1F7CFF',
                  color: 'white'
                }}>2</div>
                <h3 style={{
                  color: colors.text.primary,
                  marginBottom: '15px',
                  marginTop: '20px',
                  fontSize: '1.4rem',
                  fontWeight: '600'
                }}>Weeks 2-3: Design & Approval</h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    "Create new design mockups",
                    "Revisions based on your feedback",
                    "Finalize design before development starts"
                  ].map((item, index) => (
                    <li key={index} style={{
                      padding: '12px 0',
                      borderBottom: '1px solid #f3f4f6',
                      color: colors.text.secondary,
                      display: 'flex',
                      alignItems: 'flex-start'
                    }}>
                      <span style={{
                        color: colors.primary,
                        marginRight: '10px',
                        fontWeight: 'bold',
                        flexShrink: 0
                      }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Weeks 3-5 */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-25px',
                  left: '30px',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)',
                  zIndex: 10,
                  background: '#1F7CFF',
                  color: 'white'
                }}>3</div>
                <h3 style={{
                  color: colors.text.primary,
                  marginBottom: '15px',
                  marginTop: '20px',
                  fontSize: '1.4rem',
                  fontWeight: '600'
                }}>Weeks 3-5: Development & Content</h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    "Build the new site",
                    "Migrate and update content",
                    "Test on all devices and browsers"
                  ].map((item, index) => (
                    <li key={index} style={{
                      padding: '12px 0',
                      borderBottom: '1px solid #f3f4f6',
                      color: colors.text.secondary,
                      display: 'flex',
                      alignItems: 'flex-start'
                    }}>
                      <span style={{
                        color: colors.primary,
                        marginRight: '10px',
                        fontWeight: 'bold',
                        flexShrink: 0
                      }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Week 6 */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-25px',
                  left: '30px',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)',
                  zIndex: 10,
                  background: '#1F7CFF',
                  color: 'white'
                }}>4</div>
                <h3 style={{
                  color: colors.text.primary,
                  marginBottom: '15px',
                  marginTop: '20px',
                  fontSize: '1.4rem',
                  fontWeight: '600'
                }}>Week 6: Launch & Handoff</h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    "Final testing and tweaks",
                    "Launch new site with proper redirects",
                    "Training on how to update content yourself"
                  ].map((item, index) => (
                    <li key={index} style={{
                      padding: '12px 0',
                      borderBottom: '1px solid #f3f4f6',
                      color: colors.text.secondary,
                      display: 'flex',
                      alignItems: 'flex-start'
                    }}>
                      <span style={{
                        color: colors.primary,
                        marginRight: '10px',
                        fontWeight: 'bold',
                        flexShrink: 0
                      }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Timeline Note */}
            <div style={{
              marginTop: '40px',
              padding: '25px',
              background: 'rgba(29, 122, 175, 0.05)',
              borderRadius: '16px',
              border: '1px solid rgba(29, 122, 175, 0.1)',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '40px auto 0 auto'
            }}>
              <p style={{
                fontSize: '1.1rem',
                color: colors.text.secondary,
                margin: '0',
                lineHeight: '1.5'
              }}>
                Timelines vary. Simple redesigns can be done in 2-3 weeks. Complex sites with e-commerce or custom features take longer. We'll give you a realistic timeline upfront.
              </p>
            </div>
          </div>
        </section>

        {/* When It's Time for a Redesign Section */}
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
                When It's Time for a Redesign
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Recognizing the signs that your website needs updating
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
                  }}>Timing is Key</h3>
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.7',
                    fontSize: '1rem',
                    textAlign: 'center'
                  }}>
                    Most websites need a refresh every 3-5 years to keep up with changing technology, design trends, and user expectations. If your site looks dated, loads slowly, or doesn't work well on mobile devices, you're likely losing potential customers before they even have a chance to explore what you offer.
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
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: '#1f2937',
                    marginBottom: '15px',
                    lineHeight: '1.3',
                    textAlign: 'center'
                  }}>Beyond Aesthetics</h3>
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.7',
                    fontSize: '1rem',
                    textAlign: 'center'
                  }}>
                    A redesign isn't just about aesthetics—it's about improving functionality, performance, and user experience. We focus on preserving what already works while updating elements that need improvement, ensuring your redesigned website better serves your business goals and provides a more engaging experience for your visitors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Focus On Section */}
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
                What We Focus On
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Key areas we improve during a website redesign
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
                  icon: 'modern',
                  title: 'Modern Design',
                  description: 'Updated visual design that reflects current trends while maintaining your brand identity and improving user engagement.'
                },
                {
                  icon: 'mobile',
                  title: 'Mobile Optimization',
                  description: 'Fully responsive design that works flawlessly across all devices, with special attention to mobile user experience.'
                },
                {
                  icon: 'navigation',
                  title: 'Improved Navigation',
                  description: 'Streamlined menu structure and intuitive user pathways that help visitors find what they need quickly and easily.'
                },
                {
                  icon: 'performance',
                  title: 'Better Performance',
                  description: 'Optimized code, compressed images, and improved loading times that keep visitors engaged and reduce bounce rates.'
                },
                {
                  icon: 'content',
                  title: 'Updated Content',
                  description: 'Refreshed copy and messaging that clearly communicates your value proposition and speaks to your target audience.'
                },
                {
                  icon: 'analytics',
                  title: 'SEO Improvements',
                  description: 'Enhanced search engine optimization with proper structure, meta tags, and content that helps improve your rankings.'
                }
              ].map((focus, index) => (
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
                      {focus.icon === 'modern' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="white" strokeWidth="2" fill="none"/>
                          <path d="M8 21h8M12 17v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {focus.icon === 'mobile' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                          <line x1="12" y1="18" x2="12.01" y2="18" stroke="white" strokeWidth="2"/>
                        </svg>
                      )}
                      {focus.icon === 'navigation' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 5h18M3 12h18M3 19h18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {focus.icon === 'performance' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {focus.icon === 'content' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="14,2 14,8 20,8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="10,9 9,9 8,9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {focus.icon === 'analytics' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M7 10.5V17.5M11.5 5.5V17.5M16 10.5V17.5M20.5 5.5V17.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      color: '#1f2937',
                      marginBottom: '15px',
                      lineHeight: '1.3'
                    }}>{focus.title}</h3>
                    <p style={{
                      color: '#6b7280',
                      lineHeight: '1.7',
                      fontSize: '1rem'
                    }}>
                      {focus.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Redesign Process Section */}
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
                Our Redesign Process
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                A structured approach to refreshing your website
              </p>
            </div>
            
            <div style={{ marginTop: '40px', paddingTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>1</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Analysis & Planning</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We evaluate your current website's strengths and weaknesses, identify improvement opportunities, and create a detailed redesign plan that aligns with your business goals.</p>
              </div>
              
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>2</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Design Updates</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Our team creates a fresh visual design that modernizes your look while preserving brand recognition, focusing on improved user experience and conversion paths.</p>
              </div>
              
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>3</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Development & Migration</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We implement the new design, optimize performance, and migrate your existing content and functionality to the redesigned website with minimal disruption.</p>
              </div>
              
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>4</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Testing & Launch</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We thoroughly test all functionality across devices and browsers, train your team on any new features, and launch your redesigned website with confidence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Needs a Website Redesign Section */}
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
                Who Needs a Website Redesign
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Common scenarios where a website refresh makes sense
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '30px'
            }}>
              {[
                {
                  title: 'Businesses with Outdated Websites',
                  description: 'Companies with sites that are 5+ years old, use outdated technology, or have a design that no longer reflects their current brand positioning.'
                },
                {
                  title: 'Companies Rebranding',
                  description: 'Organizations that have updated their brand identity, messaging, or target audience and need their website to reflect these changes.'
                },
                {
                  title: 'Poor Mobile Experience',
                  description: 'Businesses whose websites do not work well on mobile devices, missing out on the growing number of customers who browse on phones and tablets.'
                },
                {
                  title: 'Declining Traffic or Engagement',
                  description: 'Sites experiencing decreasing visitor numbers, high bounce rates, or low conversion rates that indicate user experience issues.'
                }
              ].map((scenario, index) => (
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
                  }}>{scenario.title}</h3>
                  <p style={{
                    color: colors.text.secondary,
                    lineHeight: '1.6',
                    fontSize: '1rem'
                  }}>{scenario.description}</p>
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
                Serving businesses across New Brunswick including Fredericton, Saint John, Moncton, and surrounding communities
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
            }}>Ready to Stop Losing Customers to an Outdated Site?</h2>
            <p style={{
              fontSize: '1.3rem',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px auto',
              opacity: 0.9
            }}>
              Let's do a free website audit. We'll show you exactly what's broken, what's costing you business, and what a redesign would actually involve. No pressure, no obligation — just honest feedback on whether a redesign makes sense for you.
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