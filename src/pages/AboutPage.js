import React, { useEffect } from 'react';
import { colors } from '../styles/colors';
import '../responsive-style.css';
import { Logo } from '../components/Logo';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const AboutPage = () => {
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
      .secondary-button {
        background: transparent !important;
        color: #1a79af !important;
        border: 2px solid #1a79af !important;
        padding: 18px 40px !important;
        font-size: 1.1rem !important;
        font-weight: 600 !important;
        border-radius: 50px !important;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
        text-decoration: none !important;
        display: inline-block !important;
      }
      .secondary-button:hover {
        box-shadow: 0 8px 25px rgba(29, 122, 175, 0.4) !important;
        transform: translateY(-3px) !important;
        border-color: rgba(29, 122, 175, 0.8) !important;
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
                  Technology Partner You Can Actually Trust
                </h1>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  color: '#e2e8f0',
                  marginBottom: '2.5rem',
                  fontWeight: '300',
                  maxWidth: '500px'
                }}>
                  Most IT companies disappear after the sale or nickel-and-dime you with hourly billing. We're different. We're a local New Brunswick company that answers the phone, shows up when we say we will, and charges flat rates so you never wonder if calling us is 'worth it.'
                </p>
                
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <a href="/contact" className="hero-button">
                    Free Consultation
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
                {/* Build Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Build</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Professional Web Design</p>
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

                {/* Automate Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Automate</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>AI-Powered Business Solutions</p>
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
                      {/* AI Robot Icon */}
                      <rect x="6" y="8" width="12" height="10" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                      <path d="M12 8V5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="12" cy="4" r="1.5" fill="white"/>
                      <circle cx="9.5" cy="12" r="1.5" fill="white"/>
                      <circle cx="14.5" cy="12" r="1.5" fill="white"/>
                      <path d="M9 15h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M7 10h2" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                      <path d="M15 10h2" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                      <path d="M12 18v2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M6 13H4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M18 13h2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="3" cy="13" r="1" fill="white"/>
                      <circle cx="21" cy="13" r="1" fill="white"/>
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
                  animation: 'pulseGlow 3s ease-in-out infinite 2s'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'flex-start' }}>
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Secure</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Cybersecurity & IT Solutions</p>
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
                      <path d="M12 2L4 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-8-4z" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* Meet the Founder */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light, padding: '80px 0' }}>
          <div className="container">
            <h2 className="section-title" style={{ 
              textAlign: 'center', 
              fontSize: '2.5rem', 
              fontWeight: '700',
              marginBottom: '60px',
              color: '#1a1a2e'
            }}>Your Technology Partner</h2>
            
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: '300px 1fr',
              gap: '60px',
              alignItems: 'start',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              {/* Profile Photo */}
              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <div style={{ 
                  width: '250px',
                  height: '250px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '5px solid #1d7aaf',
                  boxShadow: '0 12px 40px rgba(29, 122, 175, 0.2)',
                  marginBottom: '20px'
                }}>
                  <img 
                    src="/Profile.png" 
                    alt="Aaron Hefling - Founder & Technology Solutions Specialist"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 20%'
                    }}
                  />
                </div>
                
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: '700',
                    color: '#1a1a2e',
                    marginBottom: '8px',
                    lineHeight: '1.2'
                  }}>Aaron Hefling</h3>
                  <p style={{ 
                    fontSize: '1.1rem',
                    color: '#1d7aaf',
                    fontWeight: '600',
                    marginBottom: '20px'
                  }}>Founder & Technology Solutions Specialist</p>
                  
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    marginBottom: '25px'
                  }}>
                    <span style={{
                      backgroundColor: '#f0f6ff',
                      color: '#1d7aaf',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      border: '1px solid #e3f0ff'
                    }}>Microsoft Certified</span>
                    <span style={{
                      backgroundColor: '#f0f6ff',
                      color: '#1d7aaf',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      border: '1px solid #e3f0ff'
                    }}>CompTIA Certified</span>
                    <span style={{
                      backgroundColor: '#f0f6ff',
                      color: '#1d7aaf',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      border: '1px solid #e3f0ff'
                    }}>Technology Solutions Specialist</span>
                  </div>

                  <div style={{
                    backgroundColor: '#fafbfc',
                    padding: '20px',
                    borderRadius: '12px',
                    border: '1px solid #e9ecef',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: '#2c3e50',
                    textAlign: 'left'
                  }}>
                    After 21 years in technology—from leading IT security for New Brunswick's provincial government to fixing late-night server crashes for local contractors—I founded LogicPros because I was tired of seeing businesses get burned by IT companies that overpromise and underdeliver.
                  </div>
                </div>
              </div>

              {/* Content */}
              <div style={{ 
                backgroundColor: '#fafbfc',
                padding: '40px',
                borderRadius: '12px',
                border: '1px solid #e9ecef',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
              }}>
                <div style={{ 
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: '#2c3e50'
                }}>
                  
                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ 
                      color: '#1d7aaf', 
                      marginBottom: '12px', 
                      fontSize: '1.3rem',
                      fontWeight: '600'
                    }}>Why LogicPros?</h4>
                    <p style={{ marginBottom: '0' }}>
                      I started LogicPros because I kept seeing the same pattern: businesses paying too much for IT support that didn't show up when they needed it, getting locked into expensive contracts with big providers who didn't care, or trying to DIY everything and ending up with security nightmares. There had to be a better way. So I built a company that does three things differently: we answer the phone, we charge flat rates so you're never afraid to call, and we actually explain things in plain English instead of using tech jargon to justify our existence.
                    </p>
                  </div>
                  
                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ 
                      color: '#1d7aaf', 
                      marginBottom: '12px', 
                      fontSize: '1.3rem',
                      fontWeight: '600'
                    }}>My Vision</h4>
                    <p style={{ marginBottom: '0' }}>
                      To be the IT company you recommend to your fellow business owners — not because we're the cheapest, but because we're the most reliable, honest, and effective technology partner you've ever worked with.
                    </p>
                  </div>
                  
                  <p style={{ marginBottom: '24px' }}>
                    When I'm not troubleshooting networks or coding automation solutions, you'll find me woodworking, playing guitar, or exploring New Brunswick's trails. These hobbies often inspire creative approaches to solving technical problems.
                  </p>
                  
                  <div style={{
                    backgroundColor: '#1d7aaf',
                    color: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    marginTop: '30px'
                  }}>
                    <p style={{ 
                      fontWeight: '600',
                      fontSize: '1.1rem',
                      margin: '0'
                    }}>
                      Tired of IT providers who talk a big game and disappear when you need them? Let's talk about what's actually broken with your technology and how to fix it — no pressure, no sales pitch.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <style jsx>{`
              @media (max-width: 768px) {
                .founder-grid {
                  grid-template-columns: 1fr !important;
                  gap: 40px !important;
                  text-align: center !important;
                }
                .founder-photo {
                  position: static !important;
                  margin: 0 auto !important;
                }
                .founder-content {
                  padding: 30px 20px !important;
                }
              }
            `}</style>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Why Businesses Choose LogicPros</h2>
            <div className="expertise-grid">
              <div className="expertise-item">
                <div className="expertise-icon" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  margin: '0 auto 20px auto'
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L4 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-8-4z" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Cybersecurity Experts</h3>
                <p>
                  Led IT security for New Brunswick's provincial government before founding LogicPros. We bring enterprise-level security thinking to small business budgets — protecting your data like it actually matters, because it does.
                </p>
              </div>

              <div className="expertise-item">
                <div className="expertise-icon" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  margin: '0 auto 20px auto'
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* AI Robot/Brain Icon */}
                    {/* Robot head */}
                    <rect x="6" y="8" width="12" height="10" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                    {/* Antenna */}
                    <path d="M12 8V5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="4" r="1.5" fill="white"/>
                    {/* Eyes */}
                    <circle cx="9.5" cy="12" r="1.5" fill="white"/>
                    <circle cx="14.5" cy="12" r="1.5" fill="white"/>
                    {/* Mouth/processing indicator */}
                    <path d="M9 15h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    {/* Circuit pattern on head */}
                    <path d="M7 10h2" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                    <path d="M15 10h2" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                    {/* Body connection */}
                    <path d="M12 18v2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    {/* Arms/connections */}
                    <path d="M6 13H4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M18 13h2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="3" cy="13" r="1" fill="white"/>
                    <circle cx="21" cy="13" r="1" fill="white"/>
                  </svg>
                </div>
                <h3>AI Automation Specialists</h3>
                <p>
                  We build automation that actually works, not just demos that look cool. Google review requests that run themselves, social media posting you don't think about, data that flows between systems without you copy-pasting. Real time savings, not tech buzzwords.
                </p>
              </div>

              <div className="expertise-item">
                <div className="expertise-icon" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  margin: '0 auto 20px auto'
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="12" rx="1" stroke="white" strokeWidth="2" fill="none"/>
                    <rect x="8" y="16" width="8" height="2" fill="white"/>
                    <rect x="9" y="18" width="6" height="1" fill="white"/>
                  </svg>
                </div>
                <h3>Professional Web Design</h3>
                <p>
                  Websites that don't embarrass you when you share them. Fast, mobile-friendly, SEO-optimized, and built to convert visitors into customers — not just digital brochures that sit there looking pretty.
                </p>
              </div>

              <div className="expertise-item">
                <div className="expertise-icon" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  margin: '0 auto 20px auto'
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Fast Implementation</h3>
                <p>
                  Most IT projects take months. We deliver website examples in 48 hours, security audits in a week, and automations in days — not 'we'll get back to you in 6-8 weeks' nonsense. When you're ready to move, we move.
                </p>
              </div>

              <div className="expertise-item">
                <div className="expertise-icon" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  margin: '0 auto 20px auto'
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9V21H9V15H15V21H21V9L12 2L3 9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Local Maritime Expertise</h3>
                <p>
                  Born and raised in New Brunswick. We understand Maritime business challenges, we answer the phone when you call, and we show up in person when you need us — not 'submit a ticket to our overseas call center.'
                </p>
              </div>

              <div className="expertise-item">
                <div className="expertise-icon" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(31, 124, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  margin: '0 auto 20px auto'
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3v18h18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Measurable Results</h3>
                <p>
                  We don't hide behind vague promises. You'll know exactly what's improving: fewer security vulnerabilities, hours saved per week on automation, website traffic and conversions, uptime percentages. No 'trust us, it's working' — you see the data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different Section */}
        <section className="section" style={{ backgroundColor: 'white', padding: '80px 0' }}>
          <div className="container">
            <h2 className="section-title" style={{
              textAlign: 'center',
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '60px',
              color: '#1a1a2e'
            }}>Why We're Not Like Other IT Companies</h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* Differentiator 1 */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 30px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px auto'
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: '#1a1a2e',
                  marginBottom: '15px'
                }}>No Ticket Systems, No Waiting</h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>
                  When something breaks, you call us. A real person answers (usually within 3 rings). We fix it. That's how IT support should work — not 'submit a ticket and we'll respond in 24-48 hours.'
                </p>
              </div>

              {/* Differentiator 2 */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 30px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px auto'
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="12" y1="1" x2="12" y2="23" stroke="white" strokeWidth="2"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: '#1a1a2e',
                  marginBottom: '15px'
                }}>One Price, No Surprises</h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>
                  You pay one monthly rate that covers everything — support, monitoring, advice, updates. No hourly billing, no surprise invoices, no wondering if it's 'worth calling' because the meter's running.
                </p>
              </div>

              {/* Differentiator 3 */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 30px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px auto'
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="14,2 14,8 20,8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="2"/>
                    <line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="2"/>
                    <polyline points="10,9 9,9 8,9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: '#1a1a2e',
                  marginBottom: '15px'
                }}>We Explain Things Like Humans</h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>
                  No 'synergistic cloud-native solutions' or tech jargon to confuse you. We explain what's broken, why it matters, and how to fix it using words normal people actually use.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Responsive styles for new section */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 768px) {
              div[style*="gridTemplateColumns: repeat(3, 1fr)"] {
                grid-template-columns: 1fr !important;
              }
            }
          `
        }} />

        {/* Our Process */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <h2 className="section-title">How We Actually Work Together</h2>
            <div className="services-grid" style={{ marginTop: '40px', paddingTop: '20px', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
              <div className="service-card" style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>1</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Discovery Call</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We start with a detailed consultation to understand your business, goals, challenges, and technology needs.</p>
              </div>
              
              <div className="service-card" style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>2</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Custom Proposal</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We create a tailored solution proposal with clear scope, timeline, and pricing - no commitment required.</p>
              </div>
              
              <div className="service-card" style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>3</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Strategy & Planning</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Once approved, we develop a comprehensive implementation plan with clear milestones and deliverables.</p>
              </div>
              
              <div className="service-card" style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>4</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Implementation</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We execute the solution using proven methodologies, with regular check-ins for feedback and updates.</p>
              </div>
              
              <div className="service-card" style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>5</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Training & Handover</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We provide comprehensive training and documentation so you can manage and maintain the solution.</p>
              </div>
              
              <div className="service-card" style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>6</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Ongoing Support</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We continuously monitor performance and provide ongoing support to ensure long-term success.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Combined Quote & CTA Section with Gradient */}
        <section className="section" style={{ 
          background: 'linear-gradient(180deg, #16213e 0%, #0f3460 100%)', 
          color: 'white',
          padding: '60px 0 80px 0'
        }}>
          {/* Quote Part */}
          <div className="container" style={{ paddingBottom: '60px' }}>
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <blockquote style={{
                fontSize: '1.4rem',
                fontStyle: 'italic',
                color: 'white',
                lineHeight: '1.7',
                marginBottom: '30px',
                fontWeight: '300'
              }}>
                "Whether it's building your professional online presence or providing IT solutions, when we work together, we all move forward - your business success drives our success."
              </blockquote>
              <cite style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: '600',
                fontStyle: 'normal'
              }}>
                - Aaron Hefling
              </cite>
            </div>
          </div>

          {/* CTA Part */}
          <div className="container">
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              padding: '50px 40px',
              textAlign: 'center',
              maxWidth: '600px',
              margin: '0 auto',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}>
              <h2 style={{ 
                color: 'white',
                fontSize: '2.2rem',
                fontWeight: '700',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>Ready to Work Together?</h2>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.9)', 
                fontSize: '1.2rem',
                marginBottom: '35px',
                lineHeight: '1.6'
              }}>
                Let's discuss your project and show you exactly what we can do for your business.
              </p>
              <a href="/contact" className="hero-button" style={{
                backgroundColor: 'linear-gradient(135deg, #FFC600 0%, #FFB800 100%)',
                color: '#1a1a2e',
                fontSize: '1.3rem',
                padding: '20px 45px',
                boxShadow: '0 6px 20px rgba(255, 198, 0, 0.4)'
              }}>
                Free Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// Additional styles for about page
const aboutStyles = `
.about-story {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 40px;
}

.story-content h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: var(--primary-color);
}

.story-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: var(--text-secondary);
}

.company-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 40px;
  padding: 30px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
}

.company-stat {
  text-align: center;
}

.company-stat h3 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.company-stat p {
  color: var(--text-secondary);
  font-weight: 500;
}

.story-image {
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.team-member {
  background: white;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.member-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 20px;
  overflow: hidden;
}

.member-info h3 {
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.member-title {
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 15px;
}

.member-bio {
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.member-credentials {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.member-credentials span {
  background: #e9ecef;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.expertise-item {
  text-align: center;
  padding: 30px;
}

.expertise-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.expertise-item h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--primary-color);
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.cert-item {
  background: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.cert-logo {
  width: 80px;
  height: 80px;
  background: #f8f9fa;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-weight: bold;
  color: var(--primary-color);
}

.process-timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.process-step {
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
  position: relative;
}

.process-step:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 29px;
  top: 60px;
  width: 2px;
  height: calc(100% + 20px);
  background: #ddd;
}

.step-number {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 30px;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.step-content h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: var(--primary-color);
}

.step-content p {
  line-height: 1.6;
  color: var(--text-secondary);
}

.testimonial-rating {
  font-size: 1.2rem;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .about-story {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .company-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
  }
  
  .story-image {
    height: 250px;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .expertise-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .certifications-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .process-step {
    flex-direction: column;
    text-align: center;
  }
  
  .process-step::after {
    display: none;
  }
  
  .step-number {
    margin: 0 auto 20px;
  }
}

@media (max-width: 480px) {
  .company-stats {
    grid-template-columns: 1fr;
  }
  
  .certifications-grid {
    grid-template-columns: 1fr;
  }
}
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = aboutStyles;
  document.head.appendChild(styleSheet);
}