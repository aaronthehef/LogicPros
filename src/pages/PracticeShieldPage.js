import React, { useEffect } from 'react';
import '../responsive-style.css';
import { Logo } from '../components/Logo';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { colors } from '../styles/colors';

export const PracticeShieldPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "PracticeShield - IT Support for Dental Practices in Fredericton & Saint John NB | LogicPros";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional IT management for dental practices in Fredericton and Saint John, NB. On-site and remote support, PIPEDA compliance, enterprise-grade security. Serving New Brunswick dental offices with local, personalized service.');
    }

    // Add/Update additional meta tags
    const updateOrCreateMeta = (attribute, attributeValue, contentValue) => {
      let meta = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, attributeValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', contentValue);
    };

    // Keywords
    updateOrCreateMeta('name', 'keywords', 'dental IT support Fredericton, dental IT support Saint John, PIPEDA compliance New Brunswick, dental practice IT management, managed IT services dental, on-site IT support NB, remote IT support dental, dental cybersecurity, practice management software support');

    // Open Graph tags for social media
    updateOrCreateMeta('property', 'og:title', 'PracticeShield - IT Support for Dental Practices in Fredericton & Saint John');
    updateOrCreateMeta('property', 'og:description', 'Professional IT management for dental practices in Fredericton and Saint John, NB. PIPEDA compliance support, enterprise security, and 24/7 monitoring. On-site and remote support from local NB experts.');
    updateOrCreateMeta('property', 'og:type', 'website');
    updateOrCreateMeta('property', 'og:url', 'https://logicpros.ca/practiceshield');
    updateOrCreateMeta('property', 'og:image', 'https://logicpros.ca/practiceshield/PracticeShieldLogo.png');
    updateOrCreateMeta('property', 'og:locale', 'en_CA');
    updateOrCreateMeta('property', 'og:site_name', 'LogicPros');

    // Twitter Card tags
    updateOrCreateMeta('name', 'twitter:card', 'summary_large_image');
    updateOrCreateMeta('name', 'twitter:title', 'PracticeShield - IT Support for Dental Practices in Fredericton & Saint John');
    updateOrCreateMeta('name', 'twitter:description', 'Professional IT management for dental practices in Fredericton and Saint John, NB. PIPEDA compliance support, enterprise security, 24/7 monitoring.');
    updateOrCreateMeta('name', 'twitter:image', 'https://logicpros.ca/practiceshield/PracticeShieldLogo.png');

    // Geographic tags
    updateOrCreateMeta('name', 'geo.region', 'CA-NB');
    updateOrCreateMeta('name', 'geo.placename', 'Fredericton, Saint John');

    // Additional SEO tags
    updateOrCreateMeta('name', 'author', 'LogicPros');
    updateOrCreateMeta('name', 'robots', 'index, follow');

    // Hero background animation styles
    const style = document.createElement('style');
    style.textContent = `
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

      /* Ensure hero service cards are visible on mobile */
      @media (max-width: 768px) {
        .hero-service-cards {
          display: flex !important;
        }
        .hero-section .container > div {
          grid-template-columns: 1fr !important;
          gap: 2rem !important;
        }
      }

      .hero-button {
        background: linear-gradient(135deg, #FFC600 0%, #FFB800 100%) !important;
        color: #1a1a2e !important;
        padding: 18px 40px !important;
        border-radius: 50px !important;
        text-decoration: none !important;
        font-size: 1.1rem !important;
        font-weight: 600 !important;
        border: none !important;
        box-shadow: 0 6px 20px rgba(255, 198, 0, 0.4) !important;
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

      .feature-card {
        background: white;
        border-radius: 16px;
        padding: 30px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        transition: all 0.3s ease;
        height: 100%;
      }

      .feature-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 40px rgba(29, 122, 175, 0.15);
      }

      .feature-icon {
        width: 64px;
        height: 64px;
        margin-bottom: 20px;
        border-radius: 12px;
      }

      .pricing-card {
        background: white;
        border-radius: 20px;
        padding: 40px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        border: 2px solid transparent;
      }

      .pricing-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 16px 48px rgba(29, 122, 175, 0.2);
        border-color: #1d7aaf;
      }

      .guarantee-badge {
        background: linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%);
        color: white;
        padding: 15px 30px;
        border-radius: 50px;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        margin: 10px;
        font-weight: 600;
        box-shadow: 0 4px 15px rgba(29, 122, 175, 0.3);
      }

      .checkmark-list {
        list-style: none;
        padding: 0;
      }

      .checkmark-list li {
        padding: 12px 0;
        padding-left: 40px;
        position: relative;
        font-size: 1.1rem;
        line-height: 1.6;
      }

      .checkmark-list li:before {
        content: "✓";
        position: absolute;
        left: 0;
        color: #1d7aaf;
        font-weight: bold;
        font-size: 1.5rem;
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
          {/* Circuit Board Background - Same as Managed IT Page */}
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
                              begin={`${dotIndex * 1.5}s`}
                              repeatCount="indefinite"
                            />
                          </circle>
                        );
                      })}
                    </g>

                    {/* Minimalist connection nodes */}
                    <circle cx="120" cy="120" r="2" fill="#1F7CFF" opacity="0.7" filter="url(#subtleGlow)"/>
                    <circle cx="280" cy="120" r="2" fill="#22c55e" opacity="0.6" filter="url(#subtleGlow)"/>
                    {(layerX + layerY) % 2 === 0 && (
                      <circle cx="200" cy="160" r="2.5" fill="#f59e0b" opacity="0.5" filter="url(#subtleGlow)"/>
                    )}
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
                  PracticeShield
                </h1>
                <h2 style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  fontWeight: '700',
                  lineHeight: '1.2',
                  marginBottom: '1rem',
                  color: '#e2e8f0'
                }}>
                  IT Management for Dental Practices in Fredericton & Saint John
                </h2>
                <div style={{
                  fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
                  color: '#FFC600',
                  marginBottom: '1.5rem',
                  fontWeight: '600',
                  maxWidth: '500px'
                }}>
                  On-Site & Remote Support
                </div>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  color: '#e2e8f0',
                  marginBottom: '2.5rem',
                  fontWeight: '300',
                  maxWidth: '500px'
                }}>
                  Focus on patient care while we handle your technology. Reliable systems, PIPEDA compliance support, and expert guidance—all managed proactively so your practice runs smoothly.
                </p>

                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <a href="/contact" className="hero-button">
                    Book Your Free Assessment
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
                  animation: 'pulseGlow 3s ease-in-out infinite'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'flex-start' }}>
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Protect</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Security & PIPEDA Compliance</p>
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
                  animation: 'pulseGlow 3s ease-in-out infinite 1s'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'flex-start' }}>
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Monitor</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>24/7 System & Network Monitoring</p>
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
                      <rect x="2" y="3" width="20" height="14" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                      <rect x="6" y="17" width="4" height="2" fill="white"/>
                      <rect x="14" y="17" width="4" height="2" fill="white"/>
                      <circle cx="12" cy="10" r="2" stroke="white" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                </a>

                {/* Support Card */}
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Support</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Direct Owner Access & Fast Response</p>
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
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section style={{ padding: '80px 20px', background: 'white' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{
                fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                fontWeight: '600',
                color: '#1d7aaf',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                marginBottom: '10px'
              }}>
                Everything You Need
              </div>
              <img src="/practiceshield/PracticeShieldLogo.png" alt="PracticeShield - IT Management for Dental Practices" style={{ maxWidth: '300px', height: 'auto', marginBottom: '10px' }} />
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              textAlign: 'center',
              marginBottom: '20px',
              color: '#1a1a2e'
            }}>What You Get with <span style={{ color: '#1d7aaf' }}>PracticeShield</span></h2>
            <p style={{
              textAlign: 'center',
              fontSize: '1.2rem',
              color: '#666',
              marginBottom: '60px',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>Enterprise-level protection designed specifically for dental practices.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
              <div className="feature-card" style={{ borderLeft: '4px solid #1d7aaf' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '15px', color: '#1a1a2e', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#1d7aaf" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="#1d7aaf" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Reclaim Your Time
                </h3>
                <p style={{ color: '#666', lineHeight: '1.8' }}>Eliminate 20+ hours per month spent on IT problems. Your team stays focused on patient care while we handle technology issues proactively.</p>
              </div>

              <div className="feature-card" style={{ borderLeft: '4px solid #1d7aaf' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '15px', color: '#1a1a2e', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="#1d7aaf" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="2" stroke="#1d7aaf" strokeWidth="2"/>
                  </svg>
                  99.9% Uptime Guarantee
                </h3>
                <p style={{ color: '#666', lineHeight: '1.8' }}>24/7 system monitoring catches problems before they impact patients. Your practice operations continue smoothly without interruption.</p>
              </div>

              <div className="feature-card" style={{ borderLeft: '4px solid #1d7aaf' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '15px', color: '#1a1a2e', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L4 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-8-4z" stroke="#1d7aaf" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M9 12l2 2 4-4" stroke="#1d7aaf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Enterprise-Level Security
                </h3>
                <p style={{ color: '#666', lineHeight: '1.8' }}>Advanced threat protection, encrypted patient data, and monthly backup verification. Government-grade security at small business pricing.</p>
              </div>

              <div className="feature-card" style={{ borderLeft: '4px solid #1d7aaf' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '15px', color: '#1a1a2e', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#1d7aaf" strokeWidth="2"/>
                    <polyline points="14,2 14,8 20,8" stroke="#1d7aaf" strokeWidth="2"/>
                    <line x1="9" y1="15" x2="15" y2="15" stroke="#1d7aaf" strokeWidth="2"/>
                  </svg>
                  PIPEDA Compliance
                </h3>
                <p style={{ color: '#666', lineHeight: '1.8' }}>Canada's federal privacy law protection for patient information. We help your practice meet all 10 fair information principles with technical safeguards, audit-ready documentation, and ongoing compliance support.</p>
              </div>

              <div className="feature-card" style={{ borderLeft: '4px solid #1d7aaf' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '15px', color: '#1a1a2e', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="12" y1="2" x2="12" y2="22" stroke="#1d7aaf" strokeWidth="2"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#1d7aaf" strokeWidth="2"/>
                  </svg>
                  Predictable Investment
                </h3>
                <p style={{ color: '#666', lineHeight: '1.8' }}>Fixed monthly pricing with no surprise bills. Budget confidently knowing your IT costs are consistent and manageable.</p>
              </div>

              <div className="feature-card" style={{ borderLeft: '4px solid #1d7aaf' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '15px', color: '#1a1a2e', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#1d7aaf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Direct Owner Support
                </h3>
                <p style={{ color: '#666', lineHeight: '1.8' }}>Work directly with the business owner, not a call center. Fast response times and personalized service for your practice.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose PracticeShield Section */}
        <section style={{ padding: '80px 20px', background: '#f8f9fa' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: '800',
              marginBottom: '40px',
              color: '#1a1a2e'
            }}>Specialized IT Service for Fredericton & Saint John Dental Practices</h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🏥</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px', color: '#1a1a2e' }}>Healthcare-Specific Expertise</h3>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>We understand practice management software, PIPEDA compliance, and dental workflows—not just general IT.</p>
              </div>

              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🛡️</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px', color: '#1a1a2e' }}>Government-Grade Security</h3>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>Enterprise-level protection at small business pricing, backed by years of government IT experience.</p>
              </div>

              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>📍</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px', color: '#1a1a2e' }}>Local Fredericton & Saint John Service</h3>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>On-site support in Fredericton and Saint John. Work directly with the owner, not a call center. Fast response times and personalized local service.</p>
              </div>

              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>⚡</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px', color: '#1a1a2e' }}>Proactive Monitoring</h3>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>24/7 system monitoring prevents problems before they impact patients—not just fixing them after.</p>
              </div>
            </div>

            <div style={{
              maxWidth: '700px',
              margin: '50px auto 0',
              padding: '25px 35px',
              background: 'white',
              borderRadius: '12px',
              border: '2px solid #1d7aaf',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '1.05rem', color: '#1a1a2e', lineHeight: '1.7', margin: 0 }}>
                The average ransomware attack costs dental practices $500,000 and results in 3+ weeks of downtime. Proactive protection is always more affordable than recovery.
              </p>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section style={{
          padding: '60px 20px',
          background: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background Image */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/dat-tran-ylyASgyDEX8-unsplash.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
            zIndex: 0
          }}></div>

          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: '800',
              marginBottom: '20px',
              color: '#1a1a2e'
            }}>Proudly Serving Dental Practices in Fredericton & Saint John</h2>
            <p style={{
              fontSize: '1.15rem',
              lineHeight: '1.7',
              color: '#666',
              marginBottom: '30px',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              As a local New Brunswick IT provider, we understand the unique needs of dental practices in our community. We offer both on-site visits and remote support to dental offices throughout the Fredericton and Saint John areas, ensuring your practice receives prompt, personalized service when you need it.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', marginTop: '30px' }}>
              <div style={{
                textAlign: 'center',
                background: 'rgba(248, 249, 250, 0.95)',
                backdropFilter: 'blur(10px)',
                padding: '30px',
                borderRadius: '12px',
                minWidth: '200px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>📍</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#1d7aaf', marginBottom: '5px' }}>Fredericton</h3>
                <p style={{ fontSize: '0.95rem', color: '#666' }}>On-site & remote support</p>
              </div>
              <div style={{
                textAlign: 'center',
                background: 'rgba(248, 249, 250, 0.95)',
                backdropFilter: 'blur(10px)',
                padding: '30px',
                borderRadius: '12px',
                minWidth: '200px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>📍</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#1d7aaf', marginBottom: '5px' }}>Saint John</h3>
                <p style={{ fontSize: '0.95rem', color: '#666' }}>On-site & remote support</p>
              </div>
            </div>
          </div>
        </section>

        {/* PIPEDA Compliance Section */}
        <section style={{ padding: '80px 20px', background: 'white' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              textAlign: 'center',
              marginBottom: '20px',
              color: '#1a1a2e'
            }}>PIPEDA Compliance for Fredericton & Saint John Dental Practices</h2>
            <p style={{
              textAlign: 'center',
              fontSize: '1.2rem',
              color: '#666',
              marginBottom: '60px',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>Understanding and meeting Canada's privacy law requirements doesn't have to be complicated.</p>

            <div style={{ maxWidth: '900px', margin: '0 auto', marginBottom: '50px' }}>
              <div style={{
                background: '#f8f9fa',
                padding: '40px',
                borderRadius: '12px',
                borderLeft: '4px solid #1d7aaf',
                marginBottom: '30px'
              }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '15px', color: '#1a1a2e' }}>What is PIPEDA?</h3>
                <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.05rem' }}>
                  PIPEDA (Personal Information Protection and Electronic Documents Act) is Canada's federal privacy law that governs how organizations collect, use, and disclose personal information in commercial activity. For dental practices, this means protecting patient records, contact information, and health data with proper safeguards, consent procedures, and accountability measures.
                </p>
              </div>

              <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '30px', color: '#1a1a2e', textAlign: 'center' }}>The 10 Fair Information Principles</h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
                <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '8px' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px', color: '#1d7aaf', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.4rem' }}>1.</span> Accountability
                  </h4>
                  <p style={{ color: '#666', lineHeight: '1.7' }}>Designate responsibility for compliance and manage third-party vendors who handle patient data.</p>
                </div>

                <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '8px' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px', color: '#1d7aaf', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.4rem' }}>2.</span> Identifying Purposes
                  </h4>
                  <p style={{ color: '#666', lineHeight: '1.7' }}>State why patient data is collected before or at the time of collection.</p>
                </div>

                <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '8px' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px', color: '#1d7aaf', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.4rem' }}>3.</span> Consent
                  </h4>
                  <p style={{ color: '#666', lineHeight: '1.7' }}>Obtain valid, informed agreement from patients for data collection and use.</p>
                </div>

                <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '8px' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px', color: '#1d7aaf', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.4rem' }}>4.</span> Limiting Collection
                  </h4>
                  <p style={{ color: '#666', lineHeight: '1.7' }}>Gather only the patient information necessary for stated purposes.</p>
                </div>

                <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '8px' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px', color: '#1d7aaf', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.4rem' }}>5.</span> Limiting Use & Disclosure
                  </h4>
                  <p style={{ color: '#666', lineHeight: '1.7' }}>Use patient data only for stated purposes and set appropriate retention limits.</p>
                </div>

                <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '8px' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px', color: '#1d7aaf', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.4rem' }}>6.</span> Accuracy
                  </h4>
                  <p style={{ color: '#666', lineHeight: '1.7' }}>Keep patient information complete, current, and accurate as needed.</p>
                </div>

                <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '8px' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px', color: '#1d7aaf', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.4rem' }}>7.</span> Safeguards
                  </h4>
                  <p style={{ color: '#666', lineHeight: '1.7' }}>Protect patient data with security measures proportionate to its sensitivity.</p>
                </div>

                <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '8px' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px', color: '#1d7aaf', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.4rem' }}>8.</span> Openness
                  </h4>
                  <p style={{ color: '#666', lineHeight: '1.7' }}>Explain privacy practices clearly and make them accessible to patients.</p>
                </div>

                <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '8px' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px', color: '#1d7aaf', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.4rem' }}>9.</span> Individual Access
                  </h4>
                  <p style={{ color: '#666', lineHeight: '1.7' }}>Allow patients to access and correct their personal information.</p>
                </div>

                <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '8px' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px', color: '#1d7aaf', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.4rem' }}>10.</span> Challenging Compliance
                  </h4>
                  <p style={{ color: '#666', lineHeight: '1.7' }}>Provide clear complaint and redress pathways for privacy concerns.</p>
                </div>
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)',
              padding: '40px',
              borderRadius: '12px',
              textAlign: 'center',
              color: 'white',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '15px', color: 'white' }}>How <span style={{ color: '#FFC600' }}>PracticeShield</span> Supports Your Compliance</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.95)', marginBottom: '25px' }}>
                We handle the technical requirements so you can focus on patient care. From encrypted data storage and access controls to audit-ready documentation and ongoing compliance guidance—we help your practice meet all 10 PIPEDA principles without the complexity.
              </p>
              <a href="/contact" style={{
                display: 'inline-block',
                background: '#FFC600',
                color: '#1a1a2e',
                padding: '15px 40px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease'
              }}>
                Get Your Compliance Assessment
              </a>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section style={{ padding: '80px 20px', background: '#f8f9fa' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              textAlign: 'center',
              marginBottom: '20px',
              color: '#1a1a2e'
            }}>Technology Shouldn't Slow Your Practice Down</h2>
            <p style={{
              textAlign: 'center',
              fontSize: '1.2rem',
              color: '#666',
              marginBottom: '60px',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>Your team deserves technology that works as hard as they do. Here's how we make that happen.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              <div className="feature-card">
                <img src="/practiceshield/money.png" alt="Maximize Productivity" className="feature-icon" />
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '15px', color: '#1a1a2e' }}>Maximize Productivity</h3>
                <p style={{ color: '#666', lineHeight: '1.8' }}>
                  Keep your systems running reliably during business hours. When technology works seamlessly, your team stays focused on patient care and your practice operates at full capacity.
                </p>
              </div>

              <div className="feature-card">
                <div style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#1d7aaf" strokeWidth="1.5"/>
                    <path d="M7 12l3 3 7-7" stroke="#1d7aaf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '15px', color: '#1a1a2e' }}>Eliminate IT Interruptions</h3>
                <p style={{ color: '#666', lineHeight: '1.8' }}>
                  Your staff excels at dental care—let them focus on what they do best. We handle printers, software, network issues, and password resets so they don't have to.
                </p>
              </div>

              <div className="feature-card">
                <img src="/practiceshield/headset.png" alt="Secure Patient Data" className="feature-icon" />
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '15px', color: '#1a1a2e' }}>Secure Patient Data</h3>
                <p style={{ color: '#666', lineHeight: '1.8' }}>
                  Protect your patients' trust with enterprise-grade security. We proactively defend against cyber threats, support PIPEDA compliance requirements, and maintain reliable backups—so your practice stays secure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section style={{ padding: '80px 20px', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', color: 'white' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              textAlign: 'center',
              marginBottom: '20px',
              color: 'white'
            }}>What's Included with <span style={{ color: '#1d7aaf' }}>PracticeShield</span></h2>
            <p style={{
              textAlign: 'center',
              fontSize: '1.2rem',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '60px',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>Comprehensive IT protection and support designed specifically for dental practices.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', padding: '30px', borderRadius: '16px' }}>
                <ul className="checkmark-list">
                  <li>24/7 remote monitoring & ransomware protection</li>
                  <li>Daily backups (cloud-based, tested monthly)</li>
                  <li>Email & network security</li>
                  <li>Practice management software support</li>
                  <li>Printer & technology troubleshooting</li>
                  <li>Equipment tracking & replacement planning</li>
                  <li>15-minute average response time</li>
                </ul>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', padding: '30px', borderRadius: '16px' }}>
                <ul className="checkmark-list">
                  <li>PIPEDA compliance support & guidance</li>
                  <li>Security patches & updates</li>
                  <li>Staff training (quarterly)</li>
                  <li>4-hour response time guarantee</li>
                  <li>Direct owner access (no call center)</li>
                  <li>Fixed monthly price (no surprise bills)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section style={{ padding: '80px 20px', background: '#f8f9fa' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              textAlign: 'center',
              marginBottom: '20px',
              color: '#1a1a2e'
            }}>Transparent, Predictable Pricing</h2>
            <p style={{
              textAlign: 'center',
              fontSize: '1.2rem',
              color: '#666',
              marginBottom: '60px',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>Pricing scales with your practice size. All packages include the same comprehensive protection and support.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1100px', margin: '0 auto' }}>
              <div className="pricing-card">
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '10px', color: '#1a1a2e' }}>Small Practice</h3>
                <p style={{ color: '#666', marginBottom: '20px' }}>1-2 dentists (5-10 employees)</p>
                <div style={{ fontSize: '3rem', fontWeight: '900', color: '#1d7aaf', marginBottom: '10px' }}>
                  $1,500<span style={{ fontSize: '1.2rem', fontWeight: '400', color: '#666' }}>/month</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#999', marginBottom: '30px' }}>to $2,000/month</p>
                <a href="/contact" style={{
                  display: 'block',
                  background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)',
                  color: 'white',
                  padding: '15px 30px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}>Get Started</a>
              </div>

              <div className="pricing-card">
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '10px', color: '#1a1a2e' }}>Medium Practice</h3>
                <p style={{ color: '#666', marginBottom: '20px' }}>3-4 dentists (11-20 employees)</p>
                <div style={{ fontSize: '3rem', fontWeight: '900', color: '#1d7aaf', marginBottom: '10px' }}>
                  $2,500<span style={{ fontSize: '1.2rem', fontWeight: '400', color: '#666' }}>/month</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#999', marginBottom: '30px' }}>to $3,500/month</p>
                <a href="/contact" style={{
                  display: 'block',
                  background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)',
                  color: 'white',
                  padding: '15px 30px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}>Get Started</a>
              </div>

              <div className="pricing-card">
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '10px', color: '#1a1a2e' }}>Large Practice</h3>
                <p style={{ color: '#666', marginBottom: '20px' }}>5+ dentists (21+ employees)</p>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#1d7aaf', marginBottom: '10px' }}>
                  Custom
                </div>
                <p style={{ fontSize: '0.9rem', color: '#999', marginBottom: '30px' }}>Tailored to your needs</p>
                <a href="/contact" style={{
                  display: 'block',
                  background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)',
                  color: 'white',
                  padding: '15px 30px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}>Contact Us</a>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section style={{ padding: '80px 20px', background: 'white' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              marginBottom: '40px',
              color: '#1a1a2e'
            }}>The <span style={{ color: '#1d7aaf' }}>PracticeShield</span> Triple Guarantee</h2>

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
              <div className="guarantee-badge">
                <span style={{ fontSize: '1.5rem' }}>✓</span>
                <span>90-Day Risk-Free Trial</span>
              </div>
              <div className="guarantee-badge">
                <span style={{ fontSize: '1.5rem' }}>⏱️</span>
                <span>4-Hour Response Time</span>
              </div>
              <div className="guarantee-badge">
                <span style={{ fontSize: '1.5rem' }}>💰</span>
                <span>No-Surprise Billing</span>
              </div>
            </div>

            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              marginTop: '40px',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: '1.8'
            }}>
              Not happy after 90 days? We'll refund your first month and help you transition to another provider at no cost. We're confident you'll see the difference professional IT management makes.
            </p>
          </div>
        </section>

        {/* Final CTA Section */}
        <section style={{ padding: '100px 20px', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', color: 'white', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: '900',
              marginBottom: '20px',
              color: 'white'
            }}>Ready to Simplify Your Practice IT?</h2>
            <p style={{
              fontSize: '1.3rem',
              marginBottom: '40px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              Let your team focus on patient care while we handle your technology. Book your free assessment to learn how <span style={{ color: '#1d7aaf' }}>PracticeShield</span> can support your practice.
            </p>
            <a href="/contact" className="hero-button" style={{ fontSize: '1.2rem', padding: '20px 50px' }}>
              Book Your Free Assessment Now
            </a>
            <p style={{
              fontSize: '0.95rem',
              marginTop: '30px',
              color: 'rgba(255, 255, 255, 0.7)'
            }}>
              No obligation. No pressure. Just an honest conversation about your practice's IT needs.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
