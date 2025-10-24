import React, { useEffect } from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { colors } from '../../styles/colors';

export const WorkflowAutomationPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "Workflow Automation Services | LogicPros - New Brunswick";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional workflow automation services in New Brunswick. Connect your tools, eliminate manual tasks, and improve productivity with automated workflows.');
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
                  Every Time You Think 'I Do This Same Thing Every Week'...
                </h1>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  color: '#e2e8f0',
                  marginBottom: '2.5rem',
                  fontWeight: '300',
                  maxWidth: '500px'
                }}>
                  ...that's a workflow we can automate. Stop copy-pasting between systems, sending the same follow-up emails, and doing 12-step processes that should take 1 click. Workflow automation connects your tools and eliminates the repetitive busywork.
                </p>
                 
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <a href="/contact" className="hero-button">
                    Show Me What You Can Automate
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
                {/* Connect Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Connect</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Integrate Your Tools</p>
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
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Streamline Processes</p>
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

                {/* Productivity Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Productivity</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Focus on Value</p>
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

        {/* The Workflow Tax Section */}
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
                The Hidden Cost of Manual Workflows
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
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                    <polyline points="12,6 12,12 16,14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '15px'
                }}>
                  2+ Hours
                </div>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  Average daily time wasted on repetitive multi-step tasks that could run automatically in seconds.
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
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '15px'
                }}>
                  5-10 Tools
                </div>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  The average business uses this many separate tools that don't talk to each other. You're the manual connector.
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
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#1F7CFF',
                  marginBottom: '15px'
                }}>
                  Copy-Paste Errors
                </div>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  Every manual data transfer is a chance to paste in the wrong field, miss a step, or forget to do it entirely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What is Workflow Automation Section */}
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
                What is Workflow Automation
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Connecting your tools to create seamless automated processes
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
                  }}>Connecting Your Tools</h3>
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.7',
                    fontSize: '1rem',
                    textAlign: 'center'
                  }}>
                    Workflow automation creates connections between your different business applications, allowing them to share information and trigger actions automatically. Instead of manually transferring data between systems, you can set up automated workflows that handle these tasks for you.
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
                  }}>Eliminating Repetitive Tasks</h3>
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.7',
                    fontSize: '1rem',
                    textAlign: 'center'
                  }}>
                    Common workflows like data synchronization, file management, and team notifications can be automated to save time and reduce errors. While setup requires some planning, the ongoing time savings and consistency make it a valuable investment for growing businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Workflows We Automate Section */}
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
                Common Workflows We Automate
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                If you recognize yourself in any of these scenarios, we can automate it:
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
                  icon: 'crm',
                  title: 'New Customer Onboarding',
                  description: 'The Manual Way: Someone fills out a form. You get an email. Copy their info to your CRM. Send them a welcome email. Add them to your mailing list. Create a folder for their files. Set a reminder to follow up. (7 manual steps, 15+ minutes)\n\nAutomated: Form submission triggers everything automatically. Customer in CRM, welcome email sent, added to mailing list, folder created, follow-up scheduled. (0 manual steps, instant)'
                },
                {
                  icon: 'email',
                  title: 'Invoice & Payment Processing',
                  description: 'The Manual Way: Complete a job. Create invoice in accounting software. Email it to customer. Wait for payment. Manually mark as paid. Update project status. Send thank you email. (Multiple days, multiple manual steps)\n\nAutomated: Job marked complete triggers invoice creation and emailing. Payment received automatically marks invoice paid, updates status, sends thank you. (Done while you sleep)'
                },
                {
                  icon: 'documents',
                  title: 'Lead Qualification & Assignment',
                  description: 'The Manual Way: Lead fills out contact form. You get an email notification. Manually assess if they\'re qualified. Forward to the right team member. Hope they follow up. (Delays, missed leads)\n\nAutomated: Form answers automatically score the lead. Qualified leads assigned to sales team with all context. Unqualified leads get helpful resources via email. (Instant routing, nothing falls through cracks)'
                },
                {
                  icon: 'notifications',
                  title: 'Social Media Posting',
                  description: 'The Manual Way: Write a post. Log into Facebook. Post it. Log into Instagram. Post it again. Log into LinkedIn. Post there too. Repeat 3x per week. (Tedious, easy to skip)\n\nAutomated: Write once, schedule to all platforms automatically. Posts go out on time even when you\'re busy or forget. (3-minute setup, runs forever)'
                },
                {
                  icon: 'sync',
                  title: 'Report Generation',
                  description: 'The Manual Way: Export data from multiple systems. Copy into spreadsheet. Format it. Calculate totals. Create charts. Email to team. Every. Single. Week. (2+ hours)\n\nAutomated: Data pulled automatically, report generated and formatted, emailed to team every Monday at 8 AM. (You wake up to completed reports)'
                },
                {
                  icon: 'leads',
                  title: 'Appointment Reminders',
                  description: 'The Manual Way: Check tomorrow\'s calendar. Send reminder emails manually. Call no-shows. Reschedule. Update calendar. (Time-consuming, people still forget)\n\nAutomated: Automatic reminders 24 hours before, 1 hour before. Allows self-service rescheduling. Dramatically reduces no-shows. (Set it and forget it)'
                }
              ].map((workflow, index) => (
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
                      {workflow.icon === 'crm' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <ellipse cx="12" cy="5" rx="9" ry="3" stroke="white" strokeWidth="2"/>
                          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {workflow.icon === 'email' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2" fill="none"/>
                          <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {workflow.icon === 'documents' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="14,2 14,8 20,8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="10" y1="9" x2="8" y2="9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {workflow.icon === 'notifications' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {workflow.icon === 'sync' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <polyline points="23,4 23,10 17,10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="1,20 1,14 7,14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {workflow.icon === 'leads' && (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="8.5" cy="7" r="4" stroke="white" strokeWidth="2"/>
                          <path d="M20 8v6M23 11h-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      color: '#1f2937',
                      marginBottom: '15px',
                      lineHeight: '1.3'
                    }}>{workflow.title}</h3>
                    <p style={{
                      color: '#6b7280',
                      lineHeight: '1.7',
                      fontSize: '1rem'
                    }}>
                      {workflow.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow vs. Task Automation Section */}
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
                What's the Difference Between Workflow & Task Automation?
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                They're related but not the same:
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
                  Task Automation (Single Step)
                </h3>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>What it is:</strong> Automating one repetitive task
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>Example:</strong> Auto-send review requests after service
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>Example:</strong> Automatically save email attachments to cloud storage
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>Example:</strong> Post blog updates to social media
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>When to use:</strong> You do the same single action repeatedly
                </div>
                <div>
                  <strong style={{ color: '#1f2937' }}>Complexity:</strong> Simple, quick to set up
                </div>
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
                  Workflow Automation (Multi-Step Process)
                </h3>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>What it is:</strong> Automating entire multi-step processes across multiple tools
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>Example:</strong> New customer triggers CRM entry + welcome email + task creation + calendar invite + Slack notification to team
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>Example:</strong> Invoice paid triggers thank you email + update spreadsheet + notify bookkeeper + generate tax report
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>When to use:</strong> You follow the same multi-step process regularly
                </div>
                <div>
                  <strong style={{ color: '#1f2937' }}>Complexity:</strong> More involved setup, bigger time savings
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
                Most businesses need both. We start with high-impact workflows (save the most time) then automate smaller tasks as we go.
              </p>
            </div>
          </div>
        </section>

        {/* Tools We Connect Section */}
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
                What Tools Can You Connect?
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Almost anything with an API or integration capability. Common examples:
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
                  color: '#1F7CFF',
                  marginBottom: '15px'
                }}>
                  CRMs & Sales Tools
                </h3>
                <ul style={{
                  paddingLeft: '20px',
                  margin: 0,
                  color: colors.text.secondary,
                  lineHeight: '1.7'
                }}>
                  <li>Salesforce, HubSpot, Pipedrive</li>
                  <li>Custom databases</li>
                  <li>Spreadsheets (Google Sheets, Excel)</li>
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
                  color: '#1F7CFF',
                  marginBottom: '15px'
                }}>
                  Email & Communication
                </h3>
                <ul style={{
                  paddingLeft: '20px',
                  margin: 0,
                  color: colors.text.secondary,
                  lineHeight: '1.7'
                }}>
                  <li>Gmail, Outlook, Mailchimp</li>
                  <li>Slack, Microsoft Teams</li>
                  <li>SMS/texting platforms</li>
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
                  color: '#1F7CFF',
                  marginBottom: '15px'
                }}>
                  Payment & Accounting
                </h3>
                <ul style={{
                  paddingLeft: '20px',
                  margin: 0,
                  color: colors.text.secondary,
                  lineHeight: '1.7'
                }}>
                  <li>QuickBooks, Xero, FreshBooks</li>
                  <li>Stripe, Square, PayPal</li>
                  <li>Invoicing systems</li>
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
                  color: '#1F7CFF',
                  marginBottom: '15px'
                }}>
                  Project Management
                </h3>
                <ul style={{
                  paddingLeft: '20px',
                  margin: 0,
                  color: colors.text.secondary,
                  lineHeight: '1.7'
                }}>
                  <li>Asana, Trello, Monday.com</li>
                  <li>ClickUp, Basecamp</li>
                  <li>Custom task trackers</li>
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
                  color: '#1F7CFF',
                  marginBottom: '15px'
                }}>
                  Forms & Data Collection
                </h3>
                <ul style={{
                  paddingLeft: '20px',
                  margin: 0,
                  color: colors.text.secondary,
                  lineHeight: '1.7'
                }}>
                  <li>Google Forms, Typeform, Jotform</li>
                  <li>Website contact forms</li>
                  <li>Survey tools</li>
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
                  color: '#1F7CFF',
                  marginBottom: '15px'
                }}>
                  Marketing & Social Media
                </h3>
                <ul style={{
                  paddingLeft: '20px',
                  margin: 0,
                  color: colors.text.secondary,
                  lineHeight: '1.7'
                }}>
                  <li>Facebook, Instagram, LinkedIn</li>
                  <li>WordPress, website CMSs</li>
                  <li>Email marketing platforms</li>
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
                <strong style={{ color: '#1F7CFF' }}>Don't see your tool?</strong> If it has an API or webhook capability, we can probably connect it. If not, we'll find a workaround.
              </p>
            </div>
          </div>
        </section>

        {/* Workflow ROI Calculator Section */}
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
                Does Automation Actually Save Money?
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Let's do the math on a common workflow:
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
                border: '1px solid rgba(0, 0, 0, 0.1)',
                height: '100%'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Manual Invoice Workflow (Current State)
                </h3>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>Time per invoice:</strong> 15 minutes (create, email, track, follow up)
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>Invoices per month:</strong> 20
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>Monthly time cost:</strong> 5 hours
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>Your hourly rate:</strong> $50 (conservative)
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>Monthly cost of manual process:</strong> $250
                </div>
              </div>
              
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                height: '100%'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Automated Invoice Workflow
                </h3>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>One-time setup:</strong> $800
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>Monthly monitoring:</strong> $0 (runs itself)
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>Time saved per month:</strong> 5 hours
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>Break-even:</strong> 3.2 months
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>Year 1 savings:</strong> $2,200
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#1f2937' }}>Year 2+ savings:</strong> $3,000/year
                </div>
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
                <strong style={{ color: '#1F7CFF' }}>This is just ONE workflow.</strong> Most businesses have 5-10 automatable workflows. Multiply the savings.
              </p>
            </div>
          </div>
        </section>

        {/* Our Workflow Automation Process Section */}
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
                Our Workflow Automation Process
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                A systematic approach to creating efficient automated workflows
              </p>
            </div>
            
            <div style={{ marginTop: '40px', paddingTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>1</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Workflow Analysis</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We examine your current processes to identify repetitive tasks, data transfers, and notifications that could benefit from automation while understanding your business requirements.</p>
              </div>
              
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>2</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Tool Mapping & Design</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We identify the best integration methods between your applications and design workflows using platforms like Zapier, Make, or custom APIs as needed.</p>
              </div>
              
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>3</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Automation Setup</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Our team builds and implements the automated workflows, configures triggers and actions, and establishes error handling for reliable performance.</p>
              </div>
              
              <div style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)', zIndex: 10, background: '#1F7CFF', color: 'white' }}>4</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Testing & Refinement</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We thoroughly test the workflows, monitor performance, and make refinements to ensure they work reliably and deliver the expected time savings.</p>
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
                <strong>Important:</strong> Workflow automation requires planning and iteration. Some processes are too complex to automate fully, and workflows may need updates when tools or APIs change.
              </p>
            </div>
          </div>
        </section>

        {/* Is Workflow Automation Right for You? Section */}
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
                Do You Actually Need Workflow Automation?
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
                  You SHOULD Automate Workflows If:
                </h3>
                <ul style={{
                  paddingLeft: '20px',
                  margin: 0,
                  color: colors.text.secondary,
                  lineHeight: '1.7'
                }}>
                  <li>You use 3+ different tools daily (CRM, email, accounting, etc.)</li>
                  <li>You're constantly copy-pasting data between systems</li>
                  <li>You follow the same multi-step process weekly or more</li>
                  <li>Team members forget steps in processes</li>
                  <li>You think "I wish this just happened automatically"</li>
                  <li>Manual processes are creating bottlenecks</li>
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
                  SKIP Workflow Automation If:
                </h3>
                <ul style={{
                  paddingLeft: '20px',
                  margin: 0,
                  color: colors.text.secondary,
                  lineHeight: '1.7'
                }}>
                  <li>Your processes change constantly (nothing's repeatable)</li>
                  <li>You only use 1-2 tools total</li>
                  <li>Your workflows happen once per quarter</li>
                  <li>You have no repetitive multi-step processes</li>
                  <li>You actually enjoy manual data entry (rare, but some people do!)</li>
                  <li>Your tools literally cannot integrate (very rare)</li>
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
                <strong style={{ color: '#1F7CFF' }}>Not sure?</strong> We'll audit your current processes and tell you honestly if automation would help or if you're fine as-is.
              </p>
            </div>
          </div>
        </section>

        {/* Who Benefits From Workflow Automation Section */}
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
                Who Benefits From Workflow Automation
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Business teams that see the most value from automated workflows
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '30px'
            }}>
              {[
                {
                  title: 'Sales Teams Managing Multiple Tools',
                  description: 'Sales professionals who juggle CRM, email, calendar, and other systems that need to stay synchronized without manual data entry and updates.'
                },
                {
                  title: 'Marketing Teams with Lead Follow-Up',
                  description: 'Marketers who need to capture leads from various sources, update databases, trigger campaigns, and track conversions across different platforms.'
                },
                {
                  title: 'Operations Teams with Manual Data Entry',
                  description: 'Operations staff that spend hours transferring information between systems, generating reports, and managing routine administrative tasks.'
                },
                {
                  title: 'Remote Teams Needing Better Coordination',
                  description: 'Distributed teams that rely on digital workflows for collaboration, project updates, and notifications across different communication tools.'
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

        {/* How We Build Workflows Section */}
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
                Our Workflow Automation Process
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                We don't just set it up and disappear. Here's how we work:
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
                  Step 1: Process Mapping
                </h3>
                <ul style={{
                  paddingLeft: '20px',
                  margin: 0,
                  color: colors.text.secondary,
                  lineHeight: '1.7'
                }}>
                  <li>Document your current manual workflow step-by-step</li>
                  <li>Identify pain points, bottlenecks, and error-prone steps</li>
                  <li>Prioritize which workflows save the most time</li>
                </ul>
              </div>
              
              <div style={{
                background: 'white',
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
                  Step 2: Tool Assessment
                </h3>
                <ul style={{
                  paddingLeft: '20px',
                  margin: 0,
                  color: colors.text.secondary,
                  lineHeight: '1.7'
                }}>
                  <li>Review what tools you're currently using</li>
                  <li>Check integration capabilities</li>
                  <li>Identify any gaps or workarounds needed</li>
                </ul>
              </div>
              
              <div style={{
                background: 'white',
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
                  Step 3: Design & Approval
                </h3>
                <ul style={{
                  paddingLeft: '20px',
                  margin: 0,
                  color: colors.text.secondary,
                  lineHeight: '1.7'
                }}>
                  <li>Show you exactly how the automated workflow will work</li>
                  <li>Walk through every trigger, action, and condition</li>
                  <li>Get your sign-off before building anything</li>
                </ul>
              </div>
              
              <div style={{
                background: 'white',
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
                  Step 4: Build & Test
                </h3>
                <ul style={{
                  paddingLeft: '20px',
                  margin: 0,
                  color: colors.text.secondary,
                  lineHeight: '1.7'
                }}>
                  <li>Set up automation using n8n (open-source platform you own)</li>
                  <li>Test with real data in a safe environment</li>
                  <li>Make adjustments based on testing results</li>
                </ul>
              </div>
              
              <div style={{
                background: 'white',
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
                  Step 5: Deploy & Monitor
                </h3>
                <ul style={{
                  paddingLeft: '20px',
                  margin: 0,
                  color: colors.text.secondary,
                  lineHeight: '1.7'
                }}>
                  <li>Run automation alongside manual process initially (safety net)</li>
                  <li>Monitor for any edge cases or issues</li>
                  <li>Fully deploy once you're confident it works perfectly</li>
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
                <strong style={{ color: '#1F7CFF' }}>Most workflows take 1-3 weeks from start to finish</strong>, depending on complexity. You're involved at every step — no black box surprises.
              </p>
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
            }}>Ready to Stop Being the Glue Between Your Tools?</h2>
            <p style={{
              fontSize: '1.3rem',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px auto',
              opacity: 0.9
            }}>
              Book a free workflow audit. We'll map out 2-3 of your most time-consuming repetitive processes and show you exactly how automation would work. No obligation, no pressure — just honest assessment of whether workflow automation makes sense for your business.
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