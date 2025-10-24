import React, { useEffect } from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { colors } from '../../styles/colors';

export const SEOMarketingPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "SEO & Digital Marketing Services | LogicPros - New Brunswick";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional SEO and digital marketing services in New Brunswick. Improve your search rankings, drive more traffic, and grow your online presence.');
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
                  Invisible on Google? Let's Fix That.
                </h1>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  color: '#e2e8f0',
                  marginBottom: '2.5rem',
                  fontWeight: '300',
                  maxWidth: '500px'
                }}>
                  You have a great website, but nobody finds it. Your competitors rank on page 1 while you're buried on page 3 (which might as well be invisible). SEO isn't magic — it's technical work. We'll make Google actually notice you.
                </p>
                
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <a href="/contact" className="hero-button">
                    See Where You Actually Rank
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
                {/* Rankings Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Rankings</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Higher Search Visibility</p>
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
                      <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/>
                      <path d="m21 21-4.35-4.35" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>

                {/* Traffic Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Traffic</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>More Qualified Visitors</p>
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

                {/* Results Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Results</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Long-term Growth</p>
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
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,4 12,14.01 9,11.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why You're Invisible on Google Section */}
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
                Why Nobody Finds Your Website
              </h2>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* Card 1: Slow Site */}
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
                }}>Your Site Is Too Slow</h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  Google penalizes slow sites. If your page takes 5+ seconds to load, you're starting 3 positions lower than faster competitors — before content even matters.
                </p>
              </div>

              {/* Card 2: Mobile Issues */}
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
                }}>Mobile Experience Sucks</h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  60% of searches happen on phones. If your site is broken on mobile, Google ranks you lower. Period. Mobile-first isn't optional anymore.
                </p>
              </div>

              {/* Card 3: Technical SEO Issues */}
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
                    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '15px'
                }}>Technical SEO Disasters</h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  Broken code, duplicate content, missing metadata, bad URL structure. Google's robots can't even understand your site, so they rank competitors instead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Myths vs Reality Section */}
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
                Let's Talk About What SEO Actually Is
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                SEO companies promise magic. Here's the truth:
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '40px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* Myth 1 */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 35px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(31, 124, 255, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
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
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="12" y1="9" x2="12" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="12" cy="17" r="1" fill="white"/>
                    </svg>
                  </div>
                  Myth: "We'll get you page 1 in 30 days!"
                </h3>
                <div style={{
                  padding: '15px',
                  backgroundColor: 'rgba(29, 122, 175, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(29, 122, 175, 0.1)'
                }}>
                  <p style={{
                    color: colors.text.primary,
                    fontWeight: '600',
                    margin: '0 0 8px 0'
                  }}>Reality:</p>
                  <p style={{
                    color: colors.text.secondary,
                    margin: '0',
                    fontSize: '0.95rem'
                  }}>
                    SEO takes 3-6 months minimum for competitive keywords. Anyone promising instant results is lying or using black-hat tactics that will get you penalized later.
                  </p>
                </div>
              </div>

              {/* Myth 2 */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 35px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(31, 124, 255, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
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
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="12" y1="9" x2="12" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="12" cy="17" r="1" fill="white"/>
                    </svg>
                  </div>
                  Myth: "We have special relationships with Google"
                </h3>
                <div style={{
                  padding: '15px',
                  backgroundColor: 'rgba(29, 122, 175, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(29, 122, 175, 0.1)'
                }}>
                  <p style={{
                    color: colors.text.primary,
                    fontWeight: '600',
                    margin: '0 0 8px 0'
                  }}>Reality:</p>
                  <p style={{
                    color: colors.text.secondary,
                    margin: '0',
                    fontSize: '0.95rem'
                  }}>
                    Nobody does. Google doesn't care who you hire. Rankings come from good technical SEO, quality content, and legitimate backlinks. No shortcuts.
                  </p>
                </div>
              </div>

              {/* Myth 3 */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 35px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(31, 124, 255, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
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
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="12" y1="9" x2="12" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="12" cy="17" r="1" fill="white"/>
                    </svg>
                  </div>
                  Myth: "Just stuff keywords everywhere"
                </h3>
                <div style={{
                  padding: '15px',
                  backgroundColor: 'rgba(29, 122, 175, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(29, 122, 175, 0.1)'
                }}>
                  <p style={{
                    color: colors.text.primary,
                    fontWeight: '600',
                    margin: '0 0 8px 0'
                  }}>Reality:</p>
                  <p style={{
                    color: colors.text.secondary,
                    margin: '0',
                    fontSize: '0.95rem'
                  }}>
                    That stopped working in 2012. Google's smart now. Keyword-stuffing gets you penalized. Natural, helpful content ranks. Spam doesn't.
                  </p>
                </div>
              </div>

              {/* Myth 4 */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 35px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(31, 124, 255, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
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
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="12" y1="9" x2="12" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="12" cy="17" r="1" fill="white"/>
                    </svg>
                  </div>
                  Myth: "Buy 10,000 backlinks for $99!"
                </h3>
                <div style={{
                  padding: '15px',
                  backgroundColor: 'rgba(29, 122, 175, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(29, 122, 175, 0.1)'
                }}>
                  <p style={{
                    color: colors.text.primary,
                    fontWeight: '600',
                    margin: '0 0 8px 0'
                  }}>Reality:</p>
                  <p style={{
                    color: colors.text.secondary,
                    margin: '0',
                    fontSize: '0.95rem'
                  }}>
                    Garbage backlinks from spam sites hurt you, not help. One quality link from a real website beats 1,000 paid junk links.
                  </p>
                </div>
              </div>

              {/* Myth 5 */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 35px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(31, 124, 255, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
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
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="12" y1="9" x2="12" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="12" cy="17" r="1" fill="white"/>
                    </svg>
                  </div>
                  Myth: "SEO is a one-time thing"
                </h3>
                <div style={{
                  padding: '15px',
                  backgroundColor: 'rgba(29, 122, 175, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(29, 122, 175, 0.1)'
                }}>
                  <p style={{
                    color: colors.text.primary,
                    fontWeight: '600',
                    margin: '0 0 8px 0'
                  }}>Reality:</p>
                  <p style={{
                    color: colors.text.secondary,
                    margin: '0',
                    fontSize: '0.95rem'
                  }}>
                    Google's algorithm changes constantly. Competitors improve. SEO is ongoing or your rankings decay. Monthly maintenance isn't upselling, it's required.
                  </p>
                </div>
              </div>

              {/* Myth 6 */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 35px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(31, 124, 255, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
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
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="12" y1="9" x2="12" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="12" cy="17" r="1" fill="white"/>
                    </svg>
                  </div>
                  Myth: "More traffic = success"
                </h3>
                <div style={{
                  padding: '15px',
                  backgroundColor: 'rgba(29, 122, 175, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(29, 122, 175, 0.1)'
                }}>
                  <p style={{
                    color: colors.text.primary,
                    fontWeight: '600',
                    margin: '0 0 8px 0'
                  }}>Reality:</p>
                  <p style={{
                    color: colors.text.secondary,
                    margin: '0',
                    fontSize: '0.95rem'
                  }}>
                    Traffic from people who'll never buy doesn't matter. We optimize for qualified traffic — people actually searching for what you offer in your area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why SEO Matters Section */}
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
                Why SEO Matters
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Building visibility and authority for New Brunswick businesses
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
                      <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/>
                      <path d="m21 21-4.35-4.35" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: '#1f2937',
                    marginBottom: '15px',
                    lineHeight: '1.3',
                    textAlign: 'center'
                  }}>Organic Traffic</h3>
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.7',
                    fontSize: '1rem',
                    textAlign: 'center'
                  }}>
                    Search Engine Optimization helps your business appear in relevant search results, bringing visitors who are actively looking for your products or services. Unlike paid advertising, organic traffic builds sustainable long-term value.
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
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: '#1f2937',
                    marginBottom: '15px',
                    lineHeight: '1.3',
                    textAlign: 'center'
                  }}>Local Visibility</h3>
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.7',
                    fontSize: '1rem',
                    textAlign: 'center'
                  }}>
                    For New Brunswick businesses, local SEO is crucial for connecting with customers in your area. We optimize your online presence to attract local searches, helping you stand out from competitors in Fredericton, Saint John, Moncton, and surrounding communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Optimize Section */}
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
                What We Optimize
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Key areas of SEO that drive measurable results
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
                  icon: 'onpage',
                  title: 'On-Page SEO',
                  description: 'Optimizing content, meta tags, headings, and internal linking to improve relevance and search engine understanding of your pages.'
                },
                {
                  icon: 'technical',
                  title: 'Technical SEO',
                  description: 'Improving site architecture, crawlability, indexation, and technical elements that impact search engine rankings.'
                },
                {
                  icon: 'local',
                  title: 'Local SEO',
                  description: 'Enhancing your visibility in location-based searches with Google Business Profile optimization and local citation building.'
                },
                {
                  icon: 'content',
                  title: 'Content Strategy',
                  description: 'Developing valuable, relevant content that addresses your audience\'s needs and positions you as an authority.'
                },
                {
                  icon: 'links',
                  title: 'Link Building',
                  description: 'Acquiring high-quality backlinks from reputable sources to build your site\'s authority and credibility.'
                },
                {
                  icon: 'performance',
                  title: 'Performance Optimization',
                  description: 'Improving page speed, mobile-friendliness, and user experience metrics that affect search rankings.'
                }
              ].map((optimization, index) => (
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
                      {optimization.icon === 'onpage' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="14,2 14,8 20,8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="10,9 9,9 8,9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {optimization.icon === 'technical' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {optimization.icon === 'local' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2" fill="none"/>
                        </svg>
                      )}
                      {optimization.icon === 'content' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {optimization.icon === 'links' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {optimization.icon === 'performance' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      color: '#1f2937',
                      marginBottom: '15px',
                      lineHeight: '1.3'
                    }}>{optimization.title}</h3>
                    <p style={{
                      color: '#6b7280',
                      lineHeight: '1.7',
                      fontSize: '1rem'
                    }}>
                      {optimization.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our SEO Process Section */}
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
                Our SEO Process
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                We don't promise miracles. We do the actual technical work that makes Google notice you:
              </p>
            </div>
            
            <div style={{ marginTop: '40px', paddingTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>1</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>SEO Audit & Analysis</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We conduct a comprehensive audit of your current website to identify technical issues, content gaps, and competitive opportunities that form the foundation of our strategy.</p>
              </div>
              
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>2</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Strategy Development</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Based on our findings, we create a tailored SEO strategy that focuses on your business goals, target audience, and competitive landscape to maximize results.</p>
              </div>
              
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>3</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Implementation & Optimization</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Our team implements the recommended changes, from technical fixes to content creation, continuously optimizing based on performance data and search engine updates.</p>
              </div>
              
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>4</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Monitoring & Reporting</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We track key metrics, provide regular reports on progress, and adjust our strategy as needed to ensure continued improvement in search rankings and traffic.</p>
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
                <strong>Important:</strong> SEO is a long-term strategy that typically shows significant results in 3-6 months. Results vary based on competition, industry, and current website status.
              </p>
            </div>
          </div>
        </section>

        {/* What SEO Actually Includes Section */}
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
                What You're Actually Paying For
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                SEO isn't one thing. It's a bunch of technical fixes and ongoing work:
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* Technical SEO Fixes */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 30px',
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
                      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  Technical SEO Fixes
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    "Fix page speed issues",
                    "Mobile optimization",
                    "Proper URL structure",
                    "XML sitemap setup",
                    "Schema markup (helps Google understand your content)",
                    "Fix broken links and redirects"
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

              {/* On-Page Optimization */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 30px',
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
                  On-Page Optimization
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    "Keyword research (what people actually search)",
                    "Page title and meta description optimization",
                    "Heading structure (H1, H2, H3 done right)",
                    "Image optimization and alt tags",
                    "Internal linking strategy"
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

              {/* Content Strategy */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 30px',
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
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  Content Strategy
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    "Write content around what customers actually search for",
                    "Update existing pages to be more relevant",
                    "Blog posts targeting specific questions",
                    "Local content (for New Brunswick businesses)"
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

              {/* Local SEO */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 30px',
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
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  Local SEO (for local businesses)
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    "Google Business Profile optimization",
                    "Local citations and directories",
                    "Review management strategy",
                    "\"Near me\" search optimization"
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

              {/* Ongoing Monitoring */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 30px',
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
                      <line x1="18" y1="20" x2="18" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="12" y1="20" x2="12" y2="4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="6" y1="20" x2="6" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  Ongoing Monitoring
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    "Monthly ranking reports",
                    "Traffic and conversion analysis",
                    "Competitor analysis",
                    "Algorithm update responses",
                    "Continuous improvements"
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
                Notice what's NOT on this list: buying links, keyword stuffing, spammy tactics, or promising guaranteed rankings. We do legitimate work that lasts.
              </p>
            </div>
          </div>
        </section>

        {/* Who Actually Needs SEO Section */}
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
                Do You Even Need SEO?
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                SEO isn't for everyone. Here's when it makes sense vs. when you're wasting money:
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '40px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              {/* SEO Makes Sense If */}
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
                  SEO Makes Sense If:
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    "You sell products/services people actively search for (\"plumber Moncton,\" \"web designer Fredericton\")",
                    "You're competing for local customers in your area",
                    "Your website has the basics (works on mobile, loads reasonably fast)",
                    "You're willing to wait 3-6 months for real results",
                    "You have competition ranking above you on Google",
                    "Organic search would actually bring you customers (not all businesses work this way)"
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

              {/* Don't Waste Money on SEO If */}
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
                  Don't Waste Money on SEO If:
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    "You have zero web presence yet (build a decent site first)",
                    "Your site is so broken Google can't even crawl it (fix technical issues first)",
                    "Nobody searches for what you do (very niche B2B might need other marketing)",
                    "You expect instant results (that's paid ads, not SEO)",
                    "Your business is word-of-mouth only and you like it that way"
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
                Honest answer: If your business doesn't show up when locals search for your service, you need SEO. If you're already ranking well, maybe you don't. We'll tell you the truth.
              </p>
            </div>
          </div>
        </section>

        {/* SEO vs. Paid Ads Section */}
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
                SEO or Google Ads? What's the Difference?
              </h2>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '40px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              {/* SEO (Organic Search) */}
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
                      <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/>
                      <path d="m21 21-4.35-4.35" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  SEO (Organic Search)
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    { label: "Cost:", value: "Monthly ongoing work ($500-2000/month typical)" },
                    { label: "Timeline:", value: "3-6 months to see results" },
                    { label: "Sustainability:", value: "Lasts even if you pause (rankings stick around)" },
                    { label: "Trust:", value: "People trust organic results more than ads" },
                    { label: "Best for:", value: "Long-term growth, building authority" }
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
                      }}>{item.label}</span>
                      {item.value}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Google Ads (Paid Search) */}
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
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  Google Ads (Paid Search)
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    { label: "Cost:", value: "Pay per click (varies widely by industry)" },
                    { label: "Timeline:", value: "Instant traffic when you turn it on" },
                    { label: "Sustainability:", value: "Stops immediately when you stop paying" },
                    { label: "Trust:", value: "People know it's an ad (lower trust)" },
                    { label: "Best for:", value: "Immediate leads, testing markets, short-term campaigns" }
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
                      }}>{item.label}</span>
                      {item.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recommendation */}
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
                Best strategy: Both. SEO for long-term, ads for immediate. But if you can only pick one, SEO gives better ROI over 12+ months.
              </p>
            </div>
          </div>
        </section>

        {/* Who Benefits From SEO Section */}
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
                Who Benefits From SEO
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Business types that see the most value from search optimization
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '30px'
            }}>
              {[
                {
                  title: 'Local Service Businesses',
                  description: 'Plumbers, electricians, contractors, and other service providers who rely on local customers and need to appear in location-based searches.'
                },
                {
                  title: 'E-commerce Stores',
                  description: 'Online retailers who need to attract shoppers searching for specific products and compete in crowded digital marketplaces.'
                },
                {
                  title: 'Professional Services',
                  description: 'Lawyers, accountants, consultants, and healthcare providers who need to build trust and authority in their field.'
                },
                {
                  title: 'B2B Companies',
                  description: 'Businesses selling to other companies that need to reach decision-makers searching for specific solutions and expertise.'
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
            }}>Ready to Stop Being Invisible on Google?</h2>
            <p style={{
              fontSize: '1.3rem',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px auto',
              opacity: 0.9
            }}>
              Let's do a free SEO audit. We'll show you exactly where you rank now, what's broken, and what it would realistically take to outrank your competitors. No promises of page 1 in 30 days. No BS. Just honest assessment of whether SEO makes sense for your business.
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
                Get Your Free SEO Audit
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};