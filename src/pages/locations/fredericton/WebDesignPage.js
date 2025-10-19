import React, { useEffect, useRef } from 'react';
import '../../../responsive-style.css';
import { Logo } from '../../../components/Logo';
import { Navigation } from '../../../components/Navigation';
import { Animations } from '../../../components/Animations';
import { Footer } from '../../../components/Footer';
import { colors } from '../../../styles/colors';
import { gsap } from 'gsap';

export const FrederictonWebDesignPage = () => {
  const heroRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    // Set up SEO meta tags
    document.title = 'Web Design Fredericton | Professional Website Designer NB | LogicPros';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional websites for Fredericton businesses. Affordable web design services including custom WordPress development, local SEO optimization, and mobile-responsive design that gets you more customers. Free quotes available.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Professional websites for Fredericton businesses. Affordable web design services including custom WordPress development, local SEO optimization, and mobile-responsive design that gets you more customers. Free quotes available.';
      document.head.appendChild(newMetaDescription);
    }
    
    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "LogicPros - Web Design Fredericton",
      "description": "Professional website designer and web development company serving Fredericton, NB",
      "url": "https://logicpros.ca/locations/fredericton",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Fredericton",
        "addressRegion": "NB",
        "addressCountry": "CA"
      },
      "serviceArea": "Fredericton, New Brunswick",
      "services": [
        "Website Design",
        "Web Development",
        "SEO Services",
        "Digital Marketing",
        "WordPress Development",
        "Website Maintenance"
      ]
    };
    
    const structuredDataScript = document.createElement('script');
    structuredDataScript.type = 'application/ld+json';
    structuredDataScript.textContent = JSON.stringify(structuredData);
    document.head.appendChild(structuredDataScript);
    
    // Enhanced GSAP scroll animations for header
    const header = headerRef.current;
    let lastScrollY = 0;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        // Add enhanced blur and shadow when scrolled
        gsap.to(header, {
          duration: 0.3,
          css: {
            backdropFilter: "blur(25px) saturate(200%)",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(31, 124, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
          },
          ease: "power2.out"
        });
      } else {
        // Return to original state
        gsap.to(header, {
          duration: 0.3,
          css: {
            backdropFilter: "blur(20px) saturate(180%)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(31, 124, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
          },
          ease: "power2.out"
        });
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial header animation on load
    gsap.fromTo(header, 
      { y: -100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power3.out",
        delay: 0.2 
      }
    );

    // Background panning animation
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
        box-shadow: 0 6px 20px rgba(31, 124, 255, 0.4) !important;
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
      /* White secondary button styling for dark backgrounds */
      .secondary-button[style*="color: white"] {
        color: white !important;
        border-color: white !important;
      }
      .secondary-button[style*="color: white"]:hover {
        box-shadow: 0 8px 25px rgba(255, 255, 255, 0.4) !important;
        border-color: rgba(255, 255, 255, 0.8) !important;
      }
      
      /* Hero Service Card Animations */
      @keyframes pulseGlow {
        0%, 100% {
          box-shadow: 0 8px 32px rgba(31, 124, 255, 0.15), 0 0 20px rgba(31, 124, 255, 0.3);
        }
        50% {
          box-shadow: 0 8px 32px rgba(31, 124, 255, 0.25), 0 0 30px rgba(31, 124, 255, 0.5);
        }
      }

      .hero-service-card:hover {
        transform: translateY(-8px) scale(1.02) !important;
        box-shadow: 0 20px 60px rgba(31, 124, 255, 0.3), 0 0 40px rgba(31, 124, 255, 0.6) !important;
        border-color: rgba(31, 124, 255, 0.8) !important;
      }

      .hero-service-card:hover h3 {
        color: #ffffff !important;
        text-shadow: 0 0 10px rgba(31, 124, 255, 0.8) !important;
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
      
      /* Fix for multiple checkmarks in lists */
      .professional-card .service-benefits li::before {
        content: none !important;
      }
    `;
    document.head.appendChild(style);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(style);
      
      // Remove structured data script
      const existingStructuredData = document.querySelector('script[type="application/ld+json"]');
      if (existingStructuredData) {
        document.head.removeChild(existingStructuredData);
      }
    };
  }, []);
  return (
    <div className="landing-page homepage">
      <Animations />
      
      {/* Sticky Header */}
      <header className="sticky-header" ref={headerRef}>
        <div className="header-content">
          <div className="logo">
            <Logo />
          </div>
          <Navigation />
        </div>
      </header>

      <main className="main-content">
        {/* Hero Section */}
        <section ref={heroRef} className="hero-section homepage-hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', overflow: 'hidden' }}>
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
                  Professional Web Design for Fredericton Businesses
                </h1>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  color: '#e2e8f0',
                  marginBottom: '2.5rem',
                  fontWeight: '300',
                  maxWidth: '500px'
                }}>
                  Custom websites that get you more customers. Serving Fredericton businesses including contractors,
                  professionals, and service providers with mobile-responsive design and local SEO.
                </p>
                
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <a href="/free-example" className="hero-button">
                    Get Your FREE Website Example
                  </a>
                  
                  <a href="/contact" className="hero-button">
                    Get Free Quote
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
                {/* Web Design Card */}
                <div className="hero-service-card" style={{
                  background: 'linear-gradient(135deg, rgba(31, 124, 255, 0.15), rgba(31, 124, 255, 0.08))',
                  border: '2px solid rgba(31, 124, 255, 0.3)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(31, 124, 255, 0.15), 0 0 0 rgba(31, 124, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  minHeight: '80px',
                  cursor: 'default',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  animation: 'pulseGlow 3s ease-in-out infinite'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'flex-start' }}>
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Design</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Custom Websites & User Experience</p>
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
                </div>

                {/* SEO Card */}
                <div className="hero-service-card" style={{
                  background: 'linear-gradient(135deg, rgba(31, 124, 255, 0.15), rgba(31, 124, 255, 0.08))',
                  border: '2px solid rgba(31, 124, 255, 0.3)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(31, 124, 255, 0.15), 0 0 0 rgba(31, 124, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  minHeight: '80px',
                  cursor: 'default',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  animation: 'pulseGlow 3s ease-in-out infinite 1s'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'flex-start' }}>
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Optimize</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Local SEO & Google Ranking</p>
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
                      <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="2" fill="none"/>
                      <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="5" r="1" fill="white"/>
                      <circle cx="12" cy="19" r="1" fill="white"/>
                      <circle cx="19" cy="12" r="1" fill="white"/>
                      <circle cx="5" cy="12" r="1" fill="white"/>
                    </svg>
                  </div>
                </div>

                {/* Marketing Card */}
                <div className="hero-service-card" style={{
                  background: 'linear-gradient(135deg, rgba(31, 124, 255, 0.15), rgba(31, 124, 255, 0.08))',
                  border: '2px solid rgba(31, 124, 255, 0.3)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(31, 124, 255, 0.15), 0 0 0 rgba(31, 124, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  minHeight: '80px',
                  cursor: 'default',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  animation: 'pulseGlow 3s ease-in-out infinite 2s'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'flex-start' }}>
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Grow</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Digital Marketing & Lead Generation</p>
                    <span style={{
                      color: '#1F7CFF',
                      fontSize: '0.8rem',
                      textDecoration: 'none',
                      fontWeight: '500',
                      marginTop: '0.25rem'
                    }}>Learn More</span>
                  </div>
                  <div style={{ marginLeft: '1rem', flexShrink: 0 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Services */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Get More Customers with Professional Web Design Fredericton</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto' }}>
                Your business needs a website that works as hard as you do. Our web design Fredericton services
                help businesses of all types get found online and convert visitors into paying customers.
                Professional websites that actually drive business growth.
              </p>
            </div>
            
            <div className="services-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem',
              maxWidth: '1400px',
              margin: '0 auto'
            }}>
              <div className="service-card professional-card" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(31, 124, 255, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(31, 124, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div className="service-icon" style={{
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
                  color: 'white',
                  margin: '0 auto 1rem auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>Websites That Grow Your Business</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6', marginBottom: '1.5rem', textAlign: 'center'}}>
                  Stop losing customers to competitors with better websites. Our affordable web design
                  services create professional websites that showcase your work, build trust with customers,
                  and generate leads 24/7. Perfect for businesses of all sizes in Fredericton.
                </p>
                <div style={{background: 'rgba(31, 124, 255, 0.05)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1F7CFF', fontWeight: '600', marginBottom: '0.5rem', justifyContent: 'center'}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Free example in 48 hours
                  </div>
                  <div style={{fontSize: '0.9rem', color: colors.text.secondary, textAlign: 'center'}}>
                    See your custom website design before committing
                  </div>
                </div>
                <ul className="service-benefits" style={{color: colors.text.secondary, listStyle: 'none', padding: 0, textAlign: 'left'}}>
                  <li style={{padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#1F7CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Local SEO to get found in search results
                  </li>
                  <li style={{padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#1F7CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Mobile-responsive design
                  </li>
                  <li style={{padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#1F7CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Custom WordPress development
                  </li>
                  <li style={{padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#1F7CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Expert copywriting and content
                  </li>
                </ul>
              </div>

              {/* SEO & Digital Marketing */}
              <div className="service-card professional-card" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(31, 124, 255, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(31, 124, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div className="service-icon" style={{
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
                  color: 'white',
                  margin: '0 auto 1rem auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}><a href="/services/seo" style={{color: 'inherit', textDecoration: 'none'}}>Local SEO Services</a></h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6', marginBottom: '1.5rem', textAlign: 'center'}}>
                  Professional SEO services and digital marketing that local businesses trust. Our web design
                  expertise combined with proven online marketing strategies help boost your search rankings.
                </p>
                <div style={{background: 'rgba(31, 124, 255, 0.05)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1F7CFF', fontWeight: '600', marginBottom: '0.5rem', justifyContent: 'center'}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 7L8 12L13 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 17H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Local search experts
                  </div>
                  <div style={{fontSize: '0.9rem', color: colors.text.secondary, textAlign: 'center'}}>
                    Get found by customers searching in Fredericton
                  </div>
                </div>
                <ul className="service-benefits" style={{color: colors.text.secondary, listStyle: 'none', padding: 0, textAlign: 'left'}}>
                  <li style={{padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#1F7CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Google My Business optimization
                  </li>
                  <li style={{padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#1F7CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Content marketing and blogging
                  </li>
                  <li style={{padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#1F7CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Social media integration
                  </li>
                  <li style={{padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#1F7CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Analytics and performance tracking
                  </li>
                </ul>
              </div>

              {/* Website Maintenance */}
              <div className="service-card professional-card" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(31, 124, 255, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(31, 124, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div className="service-icon" style={{
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
                  color: 'white',
                  margin: '0 auto 1rem auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 7L12 12L2 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>Website Maintenance</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6', marginBottom: '1.5rem', textAlign: 'center'}}>
                  Keep your website running smoothly with our comprehensive maintenance services.
                  Regular updates, security monitoring, and technical support for your business website.
                </p>
                <div style={{background: 'rgba(31, 124, 255, 0.05)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1F7CFF', fontWeight: '600', marginBottom: '0.5rem', justifyContent: 'center'}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Peace of mind included
                  </div>
                  <div style={{fontSize: '0.9rem', color: colors.text.secondary, textAlign: 'center'}}>
                    Focus on your business while we handle the tech
                  </div>
                </div>
                <ul className="service-benefits" style={{color: colors.text.secondary, listStyle: 'none', padding: 0, textAlign: 'left'}}>
                  <li style={{padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#1F7CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    WordPress and plugin updates
                  </li>
                  <li style={{padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#1F7CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Security monitoring and protection
                  </li>
                  <li style={{padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#1F7CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Performance optimization
                  </li>
                  <li style={{padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#1F7CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Monthly health reports
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Web Design Company */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why Fredericton Businesses Choose Us for Web Design</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '800px', margin: '0 auto' }}>
                We understand your business. As the leading web design company Fredericton businesses trust,
                we know what works for local businesses of all types. No generic templates - just websites
                that get you more customers and grow your business.
              </p>
            </div>
            
            <div className="services-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginTop: '3rem'
            }}>
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                transition: 'transform 0.3s ease'
              }}>
                <div className="service-icon" style={{
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
                  color: 'white',
                  margin: '0 auto 1rem auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="11" width="18" height="10" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                    <path d="M7 11V7" stroke="white" strokeWidth="2"/>
                    <path d="M12 11V5" stroke="white" strokeWidth="2"/>
                    <path d="M17 11V8" stroke="white" strokeWidth="2"/>
                    <rect x="5" y="14" width="4" height="7" rx="1" fill="white"/>
                    <rect x="10" y="14" width="4" height="7" rx="1" fill="white"/>
                    <rect x="15" y="14" width="4" height="7" rx="1" fill="white"/>
                  </svg>
                </div>
                <h3 style={{color: colors.primary, marginBottom: '1rem', textAlign: 'center'}}>Built for Your Industry</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6', textAlign: 'center'}}>
                  We specialize in websites for businesses of all types. Our website designer
                  Fredericton team knows what your customers want to see - professional design, clear information,
                  testimonials, and contact details that build trust.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                transition: 'transform 0.3s ease'
              }}>
                <div className="service-icon" style={{
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
                  color: 'white',
                  margin: '0 auto 1rem auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="12" y1="2" x2="12" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{color: colors.primary, marginBottom: '1rem', textAlign: 'center'}}>Affordable for Small Business</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6', textAlign: 'center'}}>
                  Professional websites shouldn't cost a fortune. Our affordable web design Fredericton
                  packages are designed for businesses of all sizes. Quality custom web design
                  with transparent pricing and no hidden fees.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                transition: 'transform 0.3s ease'
              }}>
                <div className="service-icon" style={{
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
                  color: 'white',
                  margin: '0 auto 1rem auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                    <line x1="12" y1="18" x2="12.01" y2="18" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 style={{color: colors.primary, marginBottom: '1rem', textAlign: 'center'}}>Mobile-First Web Development</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6', textAlign: 'center'}}>
                  Every mobile website we create is fully responsive and optimized for all devices. 
                  Professional web development that ensures perfect performance on smartphones, tablets, and desktops.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Areas We Serve */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <h2 className="section-title">Professional Web Design for Local Communities</h2>
            
            <div className="areas-list" style={{
              maxWidth: '1200px',
              margin: '2rem auto 0'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem',
                gap: '1rem'
              }}>
                <div style={{
                  color: '#1F7CFF',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  minWidth: '30px'
                }}>
                  →
                </div>
                <div>
                  <h3 style={{color: '#1F7CFF', marginBottom: '0.5rem', margin: 0}}>Downtown Fredericton</h3>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6', margin: 0}}>
                    Professional services, retail businesses, and restaurants in the historic downtown core.
                    King Street, Queen Street, Regent Street, and surrounding business districts.
                  </p>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem',
                gap: '1rem'
              }}>
                <div style={{
                  color: '#1F7CFF',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  minWidth: '30px'
                }}>
                  →
                </div>
                <div>
                  <h3 style={{color: '#1F7CFF', marginBottom: '0.5rem', margin: 0}}>North Side Fredericton</h3>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6', margin: 0}}>
                    Contractors and service providers in Nashwaaksis, Marysville, and Douglas areas.
                    Specialized in trades and home service businesses.
                  </p>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem',
                gap: '1rem'
              }}>
                <div style={{
                  color: '#1F7CFF',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  minWidth: '30px'
                }}>
                  →
                </div>
                <div>
                  <h3 style={{color: '#1F7CFF', marginBottom: '0.5rem', margin: 0}}>Oromocto & Area</h3>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6', margin: 0}}>
                    Supporting businesses in Oromocto, Geary, Burton, and surrounding York County communities.
                    Strong focus on contractor and military family-owned businesses.
                  </p>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem',
                gap: '1rem'
              }}>
                <div style={{
                  color: '#1F7CFF',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  minWidth: '30px'
                }}>
                  →
                </div>
                <div>
                  <h3 style={{color: '#1F7CFF', marginBottom: '0.5rem', margin: 0}}>Hanwell & Lincoln</h3>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6', margin: 0}}>
                    Growing residential areas with contractors, home services, and retail businesses.
                    Optimized for suburban service area coverage.
                  </p>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem',
                gap: '1rem'
              }}>
                <div style={{
                  color: '#1F7CFF',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  minWidth: '30px'
                }}>
                  →
                </div>
                <div>
                  <h3 style={{color: '#1F7CFF', marginBottom: '0.5rem', margin: 0}}>Harvey Station & Zealand</h3>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6', margin: 0}}>
                    Rural contractors and service providers throughout York County.
                    Specialized in agricultural and rural business digital solutions.
                  </p>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem',
                gap: '1rem'
              }}>
                <div style={{
                  color: '#1F7CFF',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  minWidth: '30px'
                }}>
                  →
                </div>
                <div>
                  <h3 style={{color: '#1F7CFF', marginBottom: '0.5rem', margin: 0}}>New Maryland & Charters Settlement</h3>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6', margin: 0}}>
                    Suburban contractors, professionals, and service businesses.
                    Focus on quality residential service providers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fredericton Business Focus */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <h2 className="section-title">Industries We Serve in Fredericton</h2>
            
            <div className="industries-content">
              <div className="industries-text">
                <h3>Government & Professional Services</h3>
                <p>
                  As New Brunswick's capital city, Fredericton has a strong government and professional services sector. 
                  We help lawyers, accountants, consultants, and government contractors establish strong online presences 
                  and grow their businesses with professional websites.
                </p>
                
                <h3>Construction & Home Services</h3>
                <p>
                  The Fredericton area's steady growth creates consistent demand for contractors. We specialize in 
                  websites for plumbers, electricians, HVAC technicians, roofers, and general contractors serving 
                  the Capital Region.
                </p>
                
                <h3>Technology & Innovation</h3>
                <p>
                  Fredericton's growing tech sector includes many small businesses and startups. We provide scalable 
                  web solutions and professional websites that grow with innovative companies.
                </p>
                
                <h3>Healthcare & Wellness</h3>
                <p>
                  Private healthcare practices, dental offices, wellness centers, and medical professionals throughout 
                  Fredericton benefit from our HIPAA-compliant IT solutions and professional website designs.
                </p>
              </div>
              
              <div className="industries-stats">
                <div className="stat-item">
                  <h4>58,000+</h4>
                  <p>Fredericton residents</p>
                </div>
                <div className="stat-item">
                  <h4>85,000+</h4>
                  <p>Greater Fredericton area population</p>
                </div>
                <div className="stat-item">
                  <h4>Provincial Capital</h4>
                  <p>Government & business hub</p>
                </div>
                <div className="stat-item">
                  <h4>2 Universities</h4>
                  <p>UNB & STU driving innovation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Web Development Process */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">How We Build Your Business Website</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto' }}>
                No surprises, no delays. Our website development Fredericton process is designed for busy 
                contractors and business owners. You'll know exactly what's happening at every step, 
                and we handle all the technical details.
              </p>
            </div>
            
            <div className="process-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>Understanding Your Business</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  We start by learning about your services, target customers, and what makes your
                  Fredericton business unique. Then we plan a website that showcases your strengths
                  and attracts the right customers.
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
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>Building Your Professional Website</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  We create your custom WordPress website with professional photos, compelling content,
                  and mobile-responsive design. Every website includes contact forms, service pages,
                  and SEO optimization to help customers find you.
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
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>Testing & Launch</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  Thorough testing across all devices and browsers, SEO optimization, and smooth website launch.
                  Comprehensive training and ongoing website maintenance support.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Local SEO Benefits */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <h2 className="section-title">Get Found by Customers Searching in Fredericton</h2>
            
            <div className="services-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginTop: '2rem'
            }}>
              <div className="service-card professional-card" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(31, 124, 255, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(31, 124, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div className="service-icon" style={{
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
                  color: 'white',
                  margin: '0 auto 1rem auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/>
                    <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>Show Up When Customers Search</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6', textAlign: 'center'}}>
                  When Fredericton residents search for "plumber near me" or "roofing contractor Fredericton,"
                  you want to be found first. Our SEO services Fredericton help your business appear at the top
                  of search results when customers need your services.
                </p>
              </div>
              
              <div className="service-card professional-card" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(31, 124, 255, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(31, 124, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div className="service-icon" style={{
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
                  color: 'white',
                  margin: '0 auto 1rem auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L3 7V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>Online Marketing That Works</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6', textAlign: 'center'}}>
                  Beyond just web design, we help promote your business online. Our digital marketing Fredericton
                  services include Google My Business optimization, social media setup, and review management
                  to build your reputation and attract more customers.
                </p>
              </div>
              
              <div className="service-card professional-card" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(31, 124, 255, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(31, 124, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div className="service-icon" style={{
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
                  color: 'white',
                  margin: '0 auto 1rem auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9H4V20H20V9H18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9H18V14H6V9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="12" y1="14" x2="12" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>Competitive Advantage</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6', textAlign: 'center'}}>
                  Many Fredericton small businesses lack professional web presence. Our custom web design
                  and SEO services give you a significant advantage over competitors still relying on word-of-mouth.
                </p>
              </div>
              
              <div className="service-card professional-card" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(31, 124, 255, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(31, 124, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div className="service-icon" style={{
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
                  color: 'white',
                  margin: '0 auto 1rem auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="18" y1="20" x2="18" y2="10" stroke="white" strokeWidth="2"/>
                    <line x1="12" y1="20" x2="12" y2="4" stroke="white" strokeWidth="2"/>
                    <line x1="6" y1="20" x2="6" y2="14" stroke="white" strokeWidth="2"/>
                    <line x1="3" y1="20" x2="21" y2="20" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>Analytics & Reporting</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6', textAlign: 'center'}}>
                  Track exactly how many Fredericton customers find your business online through detailed
                  analytics and reporting. Measure ROI from your website investment with transparent metrics.
                </p>
              </div>
              
              <div className="service-card professional-card" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(31, 124, 255, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(31, 124, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div className="service-icon" style={{
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
                  color: 'white',
                  margin: '0 auto 1rem auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>Fast, Responsive Websites</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6', textAlign: 'center'}}>
                  Every mobile website we develop loads quickly and performs perfectly on all devices.
                  Professional website development with focus on speed and user experience optimization.
                </p>
              </div>
              
              <div className="service-card professional-card" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(31, 124, 255, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(31, 124, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div className="service-icon" style={{
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
                  color: 'white',
                  margin: '0 auto 1rem auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>Security & Maintenance</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6', textAlign: 'center'}}>
                  Comprehensive website maintenance Fredericton services including security monitoring,
                  regular backups, and software updates. Protect your business investment with proactive care.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Website Features for Contractors */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">What Your Fredericton Business Website Includes</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto' }}>
                Every custom web design Fredericton project includes essential features that help contractors
                and small businesses get found online and convert visitors into customers.
              </p>
            </div>
            
            <div className="services-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginTop: '2rem'
            }}>
              <div className="service-card professional-card" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(31, 124, 255, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(31, 124, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div className="service-icon" style={{
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
                  color: 'white',
                  margin: '0 auto 1rem auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                    <line x1="12" y1="18" x2="12.01" y2="18" stroke="white" strokeWidth="2"/>
                    <path d="M12 8L10 10L12 12L14 10L12 8Z" fill="white"/>
                    <line x1="12" y1="8" x2="12" y2="6" stroke="white" strokeWidth="1"/>
                    <line x1="12" y1="12" x2="12" y2="14" stroke="white" strokeWidth="1"/>
                    <line x1="10" y1="10" x2="8" y2="10" stroke="white" strokeWidth="1"/>
                    <line x1="14" y1="10" x2="16" y2="10" stroke="white" strokeWidth="1"/>
                  </svg>
                </div>
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>Mobile Website Optimization</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6', textAlign: 'center'}}>
                  Your mobile website Fredericton customers will love. Every site is fully responsive and
                  loads fast on smartphones - critical since 70% of local searches happen on mobile devices.
                </p>
                <ul style={{color: colors.text.secondary, marginTop: '1rem', paddingLeft: '1rem', textAlign: 'left'}}>
                  <li>Fast loading on all mobile devices</li>
                  <li>Easy-to-tap phone and email buttons</li>
                  <li>Mobile-friendly contact forms</li>
                  <li>Google mobile-first indexing ready</li>
                </ul>
              </div>
              
              <div className="service-card professional-card" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(31, 124, 255, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(31, 124, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div className="service-icon" style={{
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
                  color: 'white',
                  margin: '0 auto 1rem auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                    <text x="12" y="17" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">W</text>
                  </svg>
                </div>
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>WordPress Website Development</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6', textAlign: 'center'}}>
                  Professional WordPress website Fredericton businesses trust. Easy to update, secure,
                  and built with the world's most popular website platform that powers 40% of the internet.
                </p>
                <ul style={{color: colors.text.secondary, marginTop: '1rem', paddingLeft: '1rem', textAlign: 'left'}}>
                  <li>Easy content management system</li>
                  <li>Regular security updates included</li>
                  <li>Professional themes and plugins</li>
                  <li>Search engine optimized structure</li>
                </ul>
              </div>
              
              <div className="service-card professional-card" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(31, 124, 255, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(31, 124, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div className="service-icon" style={{
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
                  color: 'white',
                  margin: '0 auto 1rem auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="white" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>Local SEO Optimization</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6', textAlign: 'center'}}>
                  Every website includes comprehensive SEO services Fredericton businesses need to get
                  found by local customers. We optimize for location-based searches that drive real business.
                </p>
                <ul style={{color: colors.text.secondary, marginTop: '1rem', paddingLeft: '1rem', textAlign: 'left'}}>
                  <li>Google My Business integration</li>
                  <li>Local keyword optimization</li>
                  <li>Fredericton location pages</li>
                  <li>Review system integration</li>
                </ul>
              </div>
              
              <div className="service-card professional-card" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(31, 124, 255, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(31, 124, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div className="service-icon" style={{
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
                  color: 'white',
                  margin: '0 auto 1rem auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L8 8H2L6 14L2 22L12 17L22 22L18 14L22 8H16L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <circle cx="12" cy="12" r="2" fill="white"/>
                  </svg>
                </div>
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>Lead Generation Tools</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6', textAlign: 'center'}}>
                  Built-in tools to capture more leads from your website visitors. Contact forms, quote
                  request systems, and call-to-action buttons that convert browsers into customers.
                </p>
                <ul style={{color: colors.text.secondary, marginTop: '1rem', paddingLeft: '1rem', textAlign: 'left'}}>
                  <li>Custom contact and quote forms</li>
                  <li>Prominent phone number display</li>
                  <li>Service area optimization</li>
                  <li>Emergency contact features</li>
                </ul>
              </div>
              
              <div className="service-card professional-card" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(31, 124, 255, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(31, 124, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div className="service-icon" style={{
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
                  color: 'white',
                  margin: '0 auto 1rem auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="10" y="10" width="4" height="5" rx="1" stroke="white" strokeWidth="2"/>
                    <path d="M10 10V8C10 6.9 10.9 6 12 6C13.1 6 14 6.9 14 8V10" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>Security & Reliability</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6', textAlign: 'center'}}>
                  Your business website stays secure and online 24/7. Professional hosting, SSL certificates,
                  regular backups, and security monitoring included with every project.
                </p>
                <ul style={{color: colors.text.secondary, marginTop: '1rem', paddingLeft: '1rem', textAlign: 'left'}}>
                  <li>SSL security certificates</li>
                  <li>Regular automated backups</li>
                  <li>99.9% uptime guarantee</li>
                  <li>Malware protection included</li>
                </ul>
              </div>
              
              <div className="service-card professional-card" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid rgba(31, 124, 255, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(31, 124, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div className="service-icon" style={{
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
                  color: 'white',
                  margin: '0 auto 1rem auto'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 20V4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M3 20H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M7 16L11 10L15 13L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="7" cy="16" r="1.5" fill="white"/>
                    <circle cx="11" cy="10" r="1.5" fill="white"/>
                    <circle cx="15" cy="13" r="1.5" fill="white"/>
                    <circle cx="19" cy="7" r="1.5" fill="white"/>
                  </svg>
                </div>
                <h3 style={{color: '#1F7CFF', marginBottom: '1rem', textAlign: 'center'}}>Performance Tracking</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6', textAlign: 'center'}}>
                  See exactly how your website investment is paying off. Google Analytics setup,
                  monthly reports, and performance monitoring to track leads and customer inquiries.
                </p>
                <ul style={{color: colors.text.secondary, marginTop: '1rem', paddingLeft: '1rem', textAlign: 'left'}}>
                  <li>Google Analytics integration</li>
                  <li>Monthly performance reports</li>
                  <li>Lead tracking and analysis</li>
                  <li>Search ranking monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        
        {/* Website Maintenance & Support */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Website Maintenance Fredericton - Keep Your Site Running Perfectly</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto' }}>
                Your business depends on your website working 24/7. Our website maintenance Fredericton 
                services ensure your site stays secure, fast, and up-to-date so you never lose potential customers.
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              marginTop: '2rem',
              alignItems: 'center'
            }}>
              <div>
                <h3 style={{color: colors.primary, marginBottom: '1.5rem', fontSize: '1.8rem'}}>What's Included in Website Maintenance:</h3>
                <div style={{marginBottom: '2rem'}}>
                  <h4 style={{color: colors.text.primary, marginBottom: '0.5rem'}}>✅ Security & Updates</h4>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6', marginBottom: '1rem'}}>WordPress core updates, plugin updates, security patches, and malware scanning to keep your site protected.</p>
                  
                  <h4 style={{color: colors.text.primary, marginBottom: '0.5rem'}}>✅ Performance Monitoring</h4>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6', marginBottom: '1rem'}}>Speed optimization, uptime monitoring, and performance reports to ensure your site loads fast for customers.</p>
                  
                  <h4 style={{color: colors.text.primary, marginBottom: '0.5rem'}}>✅ Content Updates</h4>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6', marginBottom: '1rem'}}>Text changes, new photos, service updates, and minor design modifications to keep your content fresh.</p>
                  
                  <h4 style={{color: colors.text.primary, marginBottom: '0.5rem'}}>✅ Backup & Recovery</h4>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>Daily automated backups and quick recovery service if anything goes wrong with your website.</p>
                </div>
                <a href="/contact" className="hero-button" style={{
                  background: 'linear-gradient(135deg, #FFC600 0%, #FFB800 100%)',
                  color: '#1a1a2e',
                  padding: '18px 40px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  display: 'inline-block',
                  boxShadow: '0 6px 20px rgba(31, 124, 255, 0.4)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: 'none'
                }}>Get Maintenance Quote</a>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <h3 style={{color: colors.primary, marginBottom: '1.5rem', textAlign: 'center'}}>Why Website Maintenance Matters</h3>
                <ul style={{color: colors.text.secondary, lineHeight: '1.8', paddingLeft: '1.5rem'}}>
                  <li><strong>Security Protection:</strong> Hackers target outdated websites - stay protected with regular updates</li>
                  <li><strong>Better Google Rankings:</strong> Fast, updated sites rank higher in search results</li>
                  <li><strong>Professional Image:</strong> Fresh content and working features build customer trust</li>
                  <li><strong>Mobile Performance:</strong> Ensure your mobile website works perfectly on new devices</li>
                  <li><strong>Lead Generation:</strong> Working contact forms and features capture every potential customer</li>
                </ul>
                
                <div style={{
                  marginTop: '1.5rem',
                  padding: '1rem',
                  background: colors.backgrounds.light,
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <strong style={{color: colors.primary}}>Competitive Monthly Plans</strong>
                  <br />
                  <small style={{color: colors.text.secondary}}>Affordable website maintenance for Fredericton businesses</small>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Getting Started */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <h2 className="section-title">Get Started With Professional Web Design Fredericton</h2>
            
            <div className="getting-started-content">
              <div className="steps-content">
                <h3>Three Ways to Get Started:</h3>
                
                <div className="start-option">
                  <h4>Free Custom Web Design Example</h4>
                  <p>
                    See exactly how your professional website will look before you invest. Our web design company 
                    creates a custom sample page showcasing your Fredericton business - completely free with no obligation.
                  </p>
                  <a href="/free-example" className="hero-button" style={{
                    background: 'linear-gradient(135deg, #FFC600 0%, #FFB800 100%)',
                    color: '#1a1a2e',
                    padding: '18px 40px',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    display: 'inline-block',
                    boxShadow: '0 6px 20px rgba(31, 124, 255, 0.4)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: 'none'
                  }}>Get Free Website Example</a>
                </div>
                
                <div className="start-option">
                  <h4>Web Design Consultation</h4>
                  <p>
                    Free strategy session with our experienced website designer Fredericton team. Discuss your 
                    business goals and get expert recommendations for affordable web design solutions.
                  </p>
                  <a href="/contact" className="hero-button" style={{
                    background: 'linear-gradient(135deg, #FFC600 0%, #FFB800 100%)',
                    color: '#1a1a2e',
                    padding: '18px 40px',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    display: 'inline-block',
                    boxShadow: '0 6px 20px rgba(31, 124, 255, 0.4)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: 'none'
                  }}>Schedule Free Consultation</a>
                </div>
                
                <div className="start-option">
                  <h4>Custom Quote for Your Project</h4>
                  <p>
                    Get a detailed, transparent quote for professional web development, SEO services, 
                    or digital marketing. Local web designer pricing with no hidden fees.
                  </p>
                  <a href="/contact" className="hero-button" style={{
                    background: 'linear-gradient(135deg, #FFC600 0%, #FFB800 100%)',
                    color: '#1a1a2e',
                    padding: '18px 40px',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    display: 'inline-block',
                    boxShadow: '0 6px 20px rgba(31, 124, 255, 0.4)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: 'none'
                  }}>Request Custom Quote</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Comprehensive FAQ for Contractors */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Common Questions About Web Design Fredericton Services</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto' }}>
                Get answers to the most common questions contractors and small business owners ask 
                about professional web design, SEO services, and website development in Fredericton.
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem',
              marginTop: '2rem'
            }}>
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <h3 style={{color: colors.primary, marginBottom: '1rem'}}>How much does web design cost in Fredericton?</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  Our affordable web design Fredericton services offer competitive pricing for a professional small business 
                  website. This includes custom design, mobile optimization, SEO setup, and training. We offer 
                  transparent pricing with no hidden fees - perfect for contractors and local businesses.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <h3 style={{color: colors.primary, marginBottom: '1rem'}}>Do I need SEO services for my Fredericton business?</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  Absolutely! Local SEO services help your business show up when Fredericton customers search 
                  for your services online. 97% of people search online before hiring contractors. Without proper 
                  SEO, you're invisible to potential customers searching for your services.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <h3 style={{color: colors.primary, marginBottom: '1rem'}}>How long does website development take?</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  Most professional web design Fredericton projects take 2-4 weeks from start to launch. 
                  This includes planning, design, development, content creation, and testing. We keep you 
                  updated throughout the process and handle all the technical details.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <h3 style={{color: colors.primary, marginBottom: '1rem'}}>Will my website work on mobile phones?</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  Every mobile website we create is fully responsive and optimized for smartphones and tablets. 
                  This is crucial since 70% of local searches happen on mobile devices. Your website will 
                  look perfect and load fast on all screen sizes.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <h3 style={{color: colors.primary, marginBottom: '1rem'}}>Why choose WordPress for my business website?</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  WordPress powers 40% of all websites and is perfect for small businesses. Our WordPress website 
                  Fredericton development gives you an easy-to-update site that's secure, SEO-friendly, and 
                  grows with your business. You'll be able to add photos and update content yourself.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <h3 style={{color: colors.primary, marginBottom: '1rem'}}>Do you provide website maintenance after launch?</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  Yes! Our website maintenance Fredericton services include security updates, backups, 
                  performance monitoring, and content updates. Our competitive monthly plans are an affordable 
                  way to keep your website secure and performing well for your customers.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <h3 style={{color: colors.primary, marginBottom: '1rem'}}>What makes a good website for contractors?</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  A professional contractor website needs clear contact information, service area details, 
                  photo galleries of your work, customer testimonials, and easy quote request forms. 
                  Our custom web design focuses on building trust and converting visitors into customers.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <h3 style={{color: colors.primary, marginBottom: '1rem'}}>How do I choose a web design company in Fredericton?</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  Look for a local web designer Fredericton with experience in your industry, transparent 
                  pricing, and a portfolio of successful projects. We specialize in contractor and small 
                  business websites with proven results getting our clients more customers.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <h3 style={{color: colors.primary, marginBottom: '1rem'}}>Can you help with digital marketing beyond web design?</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  Absolutely! Our digital marketing Fredericton services include Google My Business optimization, 
                  online review management, social media setup, and local SEO. We help you get found online 
                  and build a strong reputation in the Fredericton market.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Service Areas & Specializations */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Professional Web Design Company Fredericton - Full Service Solutions</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '800px', margin: '0 auto' }}>
                From custom web design to comprehensive digital marketing Fredericton businesses rely on us 
                for complete online solutions. Our web development company serves contractors, professionals, 
                and small businesses throughout the greater Fredericton area.
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              marginTop: '2rem',
              alignItems: 'start'
            }}>
              <div>
                <h3 style={{color: colors.primary, marginBottom: '1.5rem', fontSize: '1.5rem'}}>Our Web Design Fredericton Specializations:</h3>
                <div style={{marginBottom: '2rem'}}>
                  <h4 style={{color: colors.text.primary, marginBottom: '0.8rem', fontSize: '1.2rem'}}>🏢 Small Business Website Fredericton</h4>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6', marginBottom: '1.5rem'}}>Professional websites designed specifically for Fredericton small businesses. Our local web designer team understands what works in the Maritime market.</p>
                  
                  <h4 style={{color: colors.text.primary, marginBottom: '0.8rem', fontSize: '1.2rem'}}>🔧 Contractor Web Development</h4>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6', marginBottom: '1.5rem'}}>Custom web design for plumbers, electricians, HVAC technicians, roofers, and construction companies throughout Fredericton and surrounding areas.</p>
                  
                  <h4 style={{color: colors.text.primary, marginBottom: '0.8rem', fontSize: '1.2rem'}}>🌟 WordPress Website Fredericton Development</h4>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6', marginBottom: '1.5rem'}}>Professional WordPress development with easy content management, security features, and SEO optimization built-in from day one.</p>
                  
                  <h4 style={{color: colors.text.primary, marginBottom: '0.8rem', fontSize: '1.2rem'}}>📱 Mobile Website Optimization</h4>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>Every website is fully mobile-responsive and optimized for smartphones - critical for local businesses since most customers search on mobile devices.</p>
                </div>
              </div>
              
              <div>
                <h3 style={{color: colors.primary, marginBottom: '1.5rem', fontSize: '1.5rem'}}>Complete Online Marketing Services:</h3>
                <div style={{marginBottom: '2rem'}}>
                  <h4 style={{color: colors.text.primary, marginBottom: '0.8rem', fontSize: '1.2rem'}}>🎯 SEO Services Fredericton</h4>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6', marginBottom: '1.5rem'}}>Local search engine optimization to help your business appear first when Fredericton customers search for your services online.</p>
                  
                  <h4 style={{color: colors.text.primary, marginBottom: '0.8rem', fontSize: '1.2rem'}}>📊 Digital Marketing Fredericton</h4>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6', marginBottom: '1.5rem'}}>Comprehensive online marketing including Google My Business optimization, review management, and social media integration.</p>
                  
                  <h4 style={{color: colors.text.primary, marginBottom: '0.8rem', fontSize: '1.2rem'}}>🛠️ Website Maintenance Fredericton</h4>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6', marginBottom: '1.5rem'}}>Ongoing website maintenance to keep your site secure, updated, and performing optimally for your customers.</p>
                  
                  <h4 style={{color: colors.text.primary, marginBottom: '0.8rem', fontSize: '1.2rem'}}>🎨 Custom Web Design Solutions</h4>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>No templates or cookie-cutter designs. Every custom web design project is tailored specifically for your Fredericton business and industry.</p>
                </div>
              </div>
            </div>
            
            {/* Centered Ready to Get Started */}
            <div style={{marginTop: '3rem', display: 'flex', justifyContent: 'center'}}>
              <div style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(31, 124, 255, 0.15), 0 2px 8px rgba(0, 0, 0, 0.05)',
                textAlign: 'center',
                maxWidth: '600px',
                width: '100%',
                border: '2px solid rgba(31, 124, 255, 0.2)'
              }}>
                <h3 style={{color: '#1F7CFF', marginBottom: '1.5rem', fontSize: '1.8rem'}}>Ready to Get Started?</h3>
                <p style={{color: colors.text.secondary, marginBottom: '2rem', lineHeight: '1.6', fontSize: '1.1rem'}}>
                  Contact our local web designer Fredericton team for a free consultation and custom quote.
                </p>
                <button
                  onClick={() => window.location.href = '#/contact'}
                  style={{
                    background: 'linear-gradient(135deg, #FFC600 0%, #FFB800 100%)',
                    color: '#1a1a2e',
                    padding: '16px 40px',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 6px 20px rgba(31, 124, 255, 0.4)',
                    transition: 'all 0.3s ease',
                    display: 'inline-block'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 8px 30px rgba(255, 198, 0, 0.6)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 6px 20px rgba(31, 124, 255, 0.4)';
                  }}
                >
                  Get Free Quote
                </button>
              </div>
            </div>
            
            {/* Service Coverage Areas */}
            <div style={{marginTop: '3rem'}}>
              <h3 style={{color: colors.primary, marginBottom: '1.5rem', textAlign: 'center', fontSize: '1.5rem'}}>Web Development Company Serving Greater Fredericton</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                textAlign: 'center'
              }}>
                {[
                  'Downtown Fredericton',
                  'Nashwaaksis',
                  'Marysville', 
                  'Oromocto',
                  'Hanwell',
                  'Lincoln',
                  'New Maryland',
                  'Harvey Station',
                  'Zealand',
                  'Burton',
                  'Geary',
                  'Douglas'
                ].map((area, index) => (
                  <div key={index} style={{
                    background: 'white',
                    padding: '1rem',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                    border: '1px solid rgba(29, 122, 175, 0.1)'
                  }}>
                    <span style={{color: colors.text.primary, fontSize: '0.95rem', fontWeight: '500'}}>{area}</span>
                  </div>
                ))}
              </div>
              <p style={{
                textAlign: 'center',
                marginTop: '1.5rem',
                color: colors.text.secondary,
                fontStyle: 'italic'
              }}>Professional web design Fredericton services for businesses throughout York County and the greater capital region.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Leading Web Design Company Fredericton</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Professional website development, affordable web design, and comprehensive digital marketing 
                services for small businesses throughout Fredericton and the Maritimes.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="hero-button" style={{
                background: 'linear-gradient(135deg, #FFC600 0%, #FFB800 100%)',
                color: '#1a1a2e',
                padding: '18px 40px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                display: 'inline-block',
                boxShadow: '0 6px 20px rgba(31, 124, 255, 0.4)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                border: 'none'
              }}>
                Get Started Today
              </a>
              <a href="/free-example" className="secondary-button" style={{
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                padding: '18px 40px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                See Free Example
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Additional styles for location pages
const locationStyles = `
.local-services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.local-service-card {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.local-service-card:hover {
  transform: translateY(-5px);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  text-align: center;
}

.local-service-card h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.4rem;
}

.local-service-card p {
  color: var(--text-secondary);
  margin-bottom: 20px;
  line-height: 1.6;
}

.service-benefits {
  list-style: none;
  padding: 0;
}

.service-benefits li {
  padding: 5px 0;
  color: var(--text-secondary);
  position: relative;
  padding-left: 20px;
  font-size: 0.95rem;
}

.service-benefits li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

.service-areas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 40px;
}

.service-area-card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.service-area-card:hover {
  transform: translateY(-3px);
}

.service-area-card h4 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.service-area-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
}

.industries-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: start;
}

.industries-text h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
  margin-top: 30px;
  font-size: 1.3rem;
}

.industries-text h3:first-child {
  margin-top: 0;
}

.industries-text p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.industries-stats {
  display: grid;
  gap: 20px;
}

.stat-item {
  background: white;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.stat-item h4 {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 8px;
}

.stat-item p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.seo-benefits {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.seo-content h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
  margin-top: 30px;
  font-size: 1.3rem;
}

.seo-content h3:first-child {
  margin-top: 0;
}

.seo-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.success-stories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.story-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.story-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.story-card h4 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.story-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
  font-style: italic;
}

.story-results {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.story-results span {
  background: #f8f9fa;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  color: var(--primary-color);
  font-weight: 600;
}

.getting-started-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.steps-content h3 {
  color: var(--primary-color);
  margin-bottom: 30px;
  font-size: 1.5rem;
  text-align: center;
}

.start-option {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  margin-bottom: 25px;
}

.start-option h4 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.start-option p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .local-services-grid {
    grid-template-columns: 1fr;
  }
  
  .service-areas-grid {
    grid-template-columns: 1fr;
  }
  
  .industries-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .success-stories {
    grid-template-columns: 1fr;
  }
  
  .story-results {
    flex-direction: column;
    align-items: center;
  }
}
`;

// Inject additional styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = locationStyles + `
    .no-hover-card:hover {
      transform: none !important;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08) !important;
    }
    .no-hover-card .hero-button:hover,
    .no-hover-card .secondary-button:hover {
      transform: translateY(-3px) !important;
    }
  `;
  document.head.appendChild(styleSheet);
}