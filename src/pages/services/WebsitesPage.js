import React, { useEffect } from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Animations } from '../../components/Animations';
import { Footer } from '../../components/Footer';
import { colors } from '../../styles/colors';

export const WebsitesPage = () => {
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
        <Animations />
        {/* Hero Section */}
        <section className="hero-section homepage-hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', overflow: 'hidden' }}>
          <svg 
            className="hero-background-svg"
            style={{ 
              position: 'absolute', 
              top: '-10%', 
              left: '-10%', 
              width: '120%', 
              height: '120%', 
              zIndex: 1,
              opacity: 0.7
            }} 
            viewBox="0 0 1200 800" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1d7aaf" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
              <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1d7aaf" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#1e40af" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#1d7aaf" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            
            {/* Main Grid Lines */}
            <g className="grid-lines" filter="blur(0.5px)">
              <line x1="0" y1="100" x2="1200" y2="100" stroke="#1d7aaf" strokeWidth="1.5" opacity="0.4" strokeDasharray="20,10" />
              <line x1="0" y1="200" x2="1200" y2="200" stroke="#1e40af" strokeWidth="1.5" opacity="0.3" strokeDasharray="15,15" />
              <line x1="0" y1="300" x2="1200" y2="300" stroke="#1d7aaf" strokeWidth="2" opacity="0.5" strokeDasharray="25,5" />
              <line x1="0" y1="400" x2="1200" y2="400" stroke="#1e40af" strokeWidth="1" opacity="0.2" strokeDasharray="30,10" />
              <line x1="0" y1="500" x2="1200" y2="500" stroke="#1d7aaf" strokeWidth="1.5" opacity="0.3" strokeDasharray="20,15" />
              
              <line x1="200" y1="0" x2="200" y2="800" stroke="#1d7aaf" strokeWidth="1.5" opacity="0.2" strokeDasharray="20,10" />
              <line x1="400" y1="0" x2="400" y2="800" stroke="#1e40af" strokeWidth="1.5" opacity="0.3" strokeDasharray="15,15" />
              <line x1="600" y1="0" x2="600" y2="800" stroke="#1d7aaf" strokeWidth="2" opacity="0.4" strokeDasharray="25,5" />
              <line x1="800" y1="0" x2="800" y2="800" stroke="#1e40af" strokeWidth="1" opacity="0.1" strokeDasharray="30,10" />
              <line x1="1000" y1="0" x2="1000" y2="800" stroke="#1d7aaf" strokeWidth="1.5" opacity="0.2" strokeDasharray="20,15" />
            </g>

            {/* Circuit Board Patterns */}
            <g className="circuit-patterns" filter="blur(0.3px)">
              <path d="M100,150 L250,150 L270,170 L400,170 L420,150 L600,150" stroke="#1d7aaf" strokeWidth="1" opacity="0.4" fill="none" strokeDasharray="5,3" />
              <path d="M150,250 L300,250 L320,230 L500,230 L520,250 L750,250" stroke="#1e40af" strokeWidth="1" opacity="0.3" fill="none" strokeDasharray="8,4" />
              <path d="M80,350 L200,350 L220,330 L350,330 L370,350 L550,350" stroke="#1d7aaf" strokeWidth="1.5" opacity="0.5" fill="none" strokeDasharray="6,2" />
              
              <path d="M300,50 L300,180 L280,200 L280,320 L300,340 L300,450" stroke="#1e40af" strokeWidth="1" opacity="0.2" fill="none" strokeDasharray="4,3" />
              <path d="M500,80 L500,200 L520,220 L520,300 L500,320 L500,480" stroke="#1d7aaf" strokeWidth="1" opacity="0.3" fill="none" strokeDasharray="7,3" />
              <path d="M700,60 L700,150 L680,170 L680,280 L700,300 L700,420" stroke="#1e40af" strokeWidth="1.5" opacity="0.4" fill="none" strokeDasharray="5,4" />
            </g>

            {/* Tech Nodes/Connection Points */}
            <g className="tech-nodes">
              <circle cx="150" cy="120" r="4" fill="#1d7aaf" opacity="0.9" />
              <circle cx="270" cy="170" r="3" fill="#1e40af" opacity="0.8" />
              <circle cx="420" cy="150" r="5" fill="#1d7aaf" opacity="1.0" />
              <circle cx="350" cy="180" r="3" fill="#1e40af" opacity="0.7" />
              <circle cx="520" cy="250" r="4" fill="#1d7aaf" opacity="0.8" />
              <circle cx="650" cy="110" r="6" fill="#1e40af" opacity="0.9" />
              <circle cx="850" cy="200" r="3" fill="#1d7aaf" opacity="0.9" />
              <circle cx="950" cy="140" r="4" fill="#1e40af" opacity="0.8" />
              <circle cx="300" cy="340" r="5" fill="#1d7aaf" opacity="0.9" />
              <circle cx="500" cy="320" r="3" fill="#1e40af" opacity="0.7" />
              <circle cx="700" cy="300" r="4" fill="#1d7aaf" opacity="0.8" />
            </g>

            {/* Glowing Orbs */}
            <g className="glowing-orbs">
              <circle cx="100" cy="100" r="8" fill="url(#techGradient)" opacity="0.4" />
              <circle cx="900" cy="300" r="6" fill="url(#techGradient)" opacity="0.5" />
              <circle cx="1100" cy="150" r="10" fill="url(#techGradient)" opacity="0.3" />
              <circle cx="200" cy="400" r="7" fill="url(#techGradient)" opacity="0.4" />
            </g>
          </svg>

          {/* Floating Particles */}
          <div className="floating-particle" style={{ top: '15%', left: '10%', width: '4px', height: '4px', background: '#1d7aaf', borderRadius: '50%' }}></div>
          <div className="floating-particle" style={{ top: '25%', right: '15%', width: '6px', height: '6px', background: '#1e40af', borderRadius: '50%' }}></div>
          <div className="floating-particle" style={{ top: '45%', left: '20%', width: '3px', height: '3px', background: '#1d7aaf', borderRadius: '50%' }}></div>
          <div className="floating-particle" style={{ top: '35%', right: '25%', width: '5px', height: '5px', background: '#1e40af', borderRadius: '50%' }}></div>
          <div className="floating-particle" style={{ top: '60%', left: '15%', width: '4px', height: '4px', background: '#1d7aaf', borderRadius: '50%' }}></div>
          <div className="floating-particle" style={{ top: '70%', right: '20%', width: '3px', height: '3px', background: '#1e40af', borderRadius: '50%' }}></div>

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="hero-content" style={{ color: 'white', textAlign: 'center' }}>
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
                fontWeight: '900', 
                lineHeight: '0.9', 
                marginBottom: '1rem',
                color: 'white',
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                letterSpacing: '-0.02em'
              }}>Professional Website Design & Hosting</h1>
              <p style={{ 
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                marginBottom: '40px',
                maxWidth: '700px',
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: '1.7',
                fontWeight: '300',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)'
              }}>
                WordPress or React websites built for SEO and lead generation. 
                Professional copywriting, mobile-responsive design, and 2-4 week turnaround. 
                Perfect for trades and service businesses across New Brunswick and the Maritimes.
              </p>
              <div style={{ 
                display: 'flex',
                justifyContent: 'center',
                gap: '15px',
                flexWrap: 'wrap'
              }}>
                <a href="/contact" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '18px 40px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '50px',
                  boxShadow: '0 6px 20px rgba(29, 122, 175, 0.4)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 8px 30px rgba(29, 122, 175, 0.5)';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 6px 20px rgba(29, 122, 175, 0.4)';
                  e.target.style.transform = 'translateY(0)';
                }}>Schedule Free Consultation</a>
                <a href="/free-example" style={{
                  display: 'inline-block',
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  padding: '18px 40px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '50px',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 8px 25px rgba(29, 122, 175, 0.4)';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.borderColor = 'rgba(29, 122, 175, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = 'none';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}>Get Free Website Example</a>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Options */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light, padding: '80px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ 
                fontSize: 'clamp(2rem, 3.5vw, 3rem)', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>Choose Your Perfect Platform</h2>
              <p style={{ 
                fontSize: '1.1rem', 
                color: colors.text.secondary, 
                maxWidth: '700px', 
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                We recommend the best platform based on your needs, goals, and technical comfort level. 
                All options include mobile-responsive design, SEO optimization, and lead capture features.
              </p>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '30px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <div style={{ 
                background: 'white',
                borderRadius: '20px',
                padding: '40px 35px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: `2px solid ${colors.primary}`,
                position: 'relative',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <div style={{ 
                    fontSize: '3rem', 
                    marginBottom: '15px'
                  }}>🌐</div>
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: '700', 
                    color: colors.text.primary, 
                    marginBottom: '8px'
                  }}>WordPress Websites</h3>
                  <p style={{ 
                    color: colors.primary, 
                    fontWeight: '600',
                    fontSize: '1.1rem'
                  }}>Most Popular Choice</p>
                </div>
                <ul style={{ 
                  listStyle: 'none',
                  padding: 0,
                  marginBottom: '25px'
                }}>
                  {[
                    'Easy content updates',
                    'Thousands of plugins available',
                    'Great for SEO',
                    'Flexible hosting options',
                    'Perfect for businesses'
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
                <p style={{ 
                  fontSize: '1rem',
                  color: colors.text.primary,
                  fontWeight: '600',
                  textAlign: 'center',
                  padding: '15px',
                  backgroundColor: colors.backgrounds.light,
                  borderRadius: '12px'
                }}>
                  <strong>Best for:</strong> Businesses who want full control and easy updates
                </p>
              </div>

              <div style={{ 
                background: 'white',
                borderRadius: '20px',
                padding: '40px 35px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: `2px solid ${colors.accent}`,
                position: 'relative',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <div style={{ 
                    fontSize: '3rem', 
                    marginBottom: '15px'
                  }}>⚡</div>
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: '700', 
                    color: colors.text.primary, 
                    marginBottom: '8px'
                  }}>React Websites</h3>
                  <p style={{ 
                    color: colors.accent, 
                    fontWeight: '600',
                    fontSize: '1.1rem'
                  }}>Premium Performance</p>
                </div>
                <ul style={{ 
                  listStyle: 'none',
                  padding: 0,
                  marginBottom: '25px'
                }}>
                  {[
                    'Lightning-fast loading',
                    'Custom functionality',
                    'Modern technology',
                    'Superior mobile experience',
                    'Advanced integrations'
                  ].map((feature, index) => (
                    <li key={index} style={{ 
                      padding: '8px 0',
                      fontSize: '1rem',
                      color: colors.text.secondary,
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <span style={{ 
                        color: colors.accent, 
                        marginRight: '10px',
                        fontWeight: 'bold'
                      }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <p style={{ 
                  fontSize: '1rem',
                  color: colors.text.primary,
                  fontWeight: '600',
                  textAlign: 'center',
                  padding: '15px',
                  backgroundColor: colors.backgrounds.light,
                  borderRadius: '12px'
                }}>
                  <strong>Best for:</strong> Businesses wanting cutting-edge performance and features
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included - Modern Design */}
        <section className="section" style={{ backgroundColor: 'linear-gradient(135deg, #f8faff 0%, #ffffff 100%)', padding: '80px 0' }}>
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
                Everything You Need to Succeed Online
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: '#6b7280', 
                maxWidth: '600px', 
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Professional websites built to help Maritime businesses grow and dominate their local market
              </p>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
              gap: '30px',
              marginBottom: '40px'
            }}>
              {/* AI-Powered Copywriting */}
              <div style={{ 
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
                    background: 'linear-gradient(135deg, #1d7aaf, #1e40af)',
                    borderRadius: '50%',
                    width: '70px',
                    height: '70px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '25px'
                  }}>🤖</div>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '600', 
                    color: '#1f2937', 
                    marginBottom: '15px',
                    lineHeight: '1.3'
                  }}>Professional Copywriting</h3>
                  <p style={{ 
                    color: '#6b7280', 
                    lineHeight: '1.7',
                    fontSize: '1rem'
                  }}>
                    Professional content written specifically for your industry and target customers. No generic templates or cookie-cutter copy.
                  </p>
                </div>
              </div>

              {/* Mobile-Responsive Design */}
              <div style={{ 
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
                    background: 'linear-gradient(135deg, #1d7aaf, #1e40af)',
                    borderRadius: '50%',
                    width: '70px',
                    height: '70px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '25px'
                  }}>📱</div>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '600', 
                    color: '#1f2937', 
                    marginBottom: '15px',
                    lineHeight: '1.3'
                  }}>Mobile-Responsive Design</h3>
                  <p style={{ 
                    color: '#6b7280', 
                    lineHeight: '1.7',
                    fontSize: '1rem'
                  }}>
                    Your website looks perfect and loads fast on all devices - desktop, tablet, and smartphone. Essential for reaching today's mobile customers.
                  </p>
                </div>
              </div>

              {/* Local SEO Optimization */}
              <div style={{ 
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
                    background: 'linear-gradient(135deg, #1d7aaf, #1e40af)',
                    borderRadius: '50%',
                    width: '70px',
                    height: '70px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '25px'
                  }}>🎯</div>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '600', 
                    color: '#1f2937', 
                    marginBottom: '15px',
                    lineHeight: '1.3'
                  }}>Local SEO Optimization</h3>
                  <p style={{ 
                    color: '#6b7280', 
                    lineHeight: '1.7',
                    fontSize: '1rem'
                  }}>
                    Optimized for "[your service] near me" searches. Includes Google My Business integration and local directory listings.
                  </p>
                </div>
              </div>

              {/* Lead Capture Forms */}
              <div style={{ 
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
                    background: 'linear-gradient(135deg, #1d7aaf, #1e40af)',
                    borderRadius: '50%',
                    width: '70px',
                    height: '70px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '25px'
                  }}>📋</div>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '600', 
                    color: '#1f2937', 
                    marginBottom: '15px',
                    lineHeight: '1.3'
                  }}>Lead Capture Forms</h3>
                  <p style={{ 
                    color: '#6b7280', 
                    lineHeight: '1.7',
                    fontSize: '1rem'
                  }}>
                    Custom contact and inquiry forms that gather the information you need to qualify prospects effectively.
                  </p>
                </div>
              </div>

              {/* SSL Security & Fast Hosting */}
              <div style={{ 
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
                    background: 'linear-gradient(135deg, #1d7aaf, #1e40af)',
                    borderRadius: '50%',
                    width: '70px',
                    height: '70px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '25px'
                  }}>🔒</div>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '600', 
                    color: '#1f2937', 
                    marginBottom: '15px',
                    lineHeight: '1.3'
                  }}>SSL Security & Fast Hosting</h3>
                  <p style={{ 
                    color: '#6b7280', 
                    lineHeight: '1.7',
                    fontSize: '1rem'
                  }}>
                    Secure, encrypted connection with fast hosting (or integration with your preferred hosting provider).
                  </p>
                </div>
              </div>

              {/* Analytics Setup */}
              <div style={{ 
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
                    background: 'linear-gradient(135deg, #1d7aaf, #1e40af)',
                    borderRadius: '50%',
                    width: '70px',
                    height: '70px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '25px'
                  }}>📊</div>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '600', 
                    color: '#1f2937', 
                    marginBottom: '15px',
                    lineHeight: '1.3'
                  }}>Analytics Setup</h3>
                  <p style={{ 
                    color: '#6b7280', 
                    lineHeight: '1.7',
                    fontSize: '1rem'
                  }}>
                    Google Analytics and Search Console integration to track visitors, leads, and performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Call-to-Action */}
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
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
                Start Your Website Project Today
              </a>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <h2 className="section-title">Our 2-4 Week Website Process</h2>
            <div className="process-grid" style={{ marginTop: '40px', paddingTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
              <div className="service-card" style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', background: colors.primary, color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(26, 121, 175, 0.3)', zIndex: 10 }}>1</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Strategy Session</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>We discuss your business, target customers, competitors, and goals. Choose your platform and plan the site structure.</p>
              </div>
              
              <div className="service-card" style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', background: colors.accent, color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)', zIndex: 10 }}>2</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Content Creation</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Professional copywriting tailored to your industry. We create all text content while you focus on running your business.</p>
              </div>
              
              <div className="service-card" style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', background: colors.secondary, color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(49, 66, 81, 0.3)', zIndex: 10 }}>3</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Design & Build</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Professional design and development with regular updates. You'll see progress throughout the build process.</p>
              </div>
              
              <div className="service-card" style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '30px', background: colors.primaryDark, color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(21, 94, 138, 0.3)', zIndex: 10 }}>4</div>
                <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Launch & Training</h3>
                <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Go live with full training on how to update content, add photos, and track your website's performance.</p>
              </div>
            </div>
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            @media (max-width: 768px) {
              .process-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}} />
        </section>

        {/* Industries We Serve */}
        <section className="section" style={{ padding: '80px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ 
                fontSize: 'clamp(2rem, 3.5vw, 3rem)', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>Serving Businesses Across All Industries</h2>
              <p style={{ 
                fontSize: '1.1rem', 
                color: colors.text.secondary, 
                maxWidth: '700px', 
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                We work with businesses across all industries throughout the Maritimes, creating professional
                websites that convert visitors into customers.
              </p>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '30px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {[
                {
                  href: '/contact',
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16"><path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/></svg>,
                  title: 'Retail & E-commerce',
                  desc: 'Online stores, product catalogs, inventory management, and secure payment processing'
                },
                {
                  href: '/contact',
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16"><path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1h1ZM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5Zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9h-.5Zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Z"/><path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1V1Zm2 14h2v-3H7v3Zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3Zm0-14H6v1h4V1Zm2 7v7h3V8h-3Zm-8 7V8H1v7h3Z"/></svg>,
                  title: 'Healthcare & Wellness',
                  desc: 'Patient portals, appointment booking, secure forms, and HIPAA-compliant solutions'
                },
                {
                  href: '/contact',
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8.646.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a2 2 0 0 1-2 2H2.5a2 2 0 0 1-2-2v-7a.5.5 0 0 1 .146-.354l6-6zM5 15v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3h1.5a1 1 0 0 0 1-1V6.707L8 1.207l-5.5 5.5V14a1 1 0 0 0 1 1H5zm5 0v-3H6v3h4z"/></svg>,
                  title: 'Construction & Trades',
                  desc: 'Project portfolios, service area mapping, quote requests, and customer testimonials'
                },
                {
                  href: '/contact',
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16"><path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/></svg>,
                  title: 'Professional Services',
                  desc: 'Service showcases, client portals, scheduling systems, and lead capture forms'
                },
                {
                  href: '/contact',
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16"><path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/></svg>,
                  title: 'Restaurants & Hospitality',
                  desc: 'Online menus, reservation systems, photo galleries, and review integration'
                },
                {
                  href: '/contact',
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16"><path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>,
                  title: 'Education & Training',
                  desc: 'Course catalogs, enrollment systems, student portals, and learning management'
                },
                {
                  href: '/contact',
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16"><path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/></svg>,
                  title: 'Real Estate',
                  desc: 'Property listings, virtual tours, search filters, and lead generation systems'
                },
                {
                  href: '/contact',
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16"><path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/></svg>,
                  title: 'Automotive Services',
                  desc: 'Service booking, inventory displays, customer reviews, and maintenance tracking'
                }
              ].map((industry, index) => (
                <a 
                  key={index}
                  href={industry.href} 
                  style={{ 
                    textDecoration: 'none', 
                    color: 'inherit',
                    display: 'block',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ 
                    background: 'white',
                    borderRadius: '16px',
                    padding: '35px 25px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    border: `1px solid ${colors.backgrounds.light}`,
                    textAlign: 'center',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
                      opacity: 0,
                      transition: 'all 0.3s ease'
                    }} className="industry-border"></div>
                    <div style={{
                      marginBottom: '20px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: colors.primary
                    }}>{industry.icon}</div>
                    <h4 style={{ 
                      fontSize: '1.3rem', 
                      fontWeight: '700', 
                      color: colors.text.primary, 
                      marginBottom: '15px',
                      lineHeight: '1.3'
                    }}>{industry.title}</h4>
                    <p style={{ 
                      color: colors.text.secondary, 
                      lineHeight: '1.6',
                      fontSize: '0.95rem',
                      margin: 0
                    }}>{industry.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            .industry-item:hover .industry-border {
              opacity: 1 !important;
            }
            .industry-item:hover {
              box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12) !important;
            }
          `}} />
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
              }}>Frequently Asked Questions</h2>
              <p style={{ 
                fontSize: '1.1rem', 
                color: colors.text.secondary, 
                maxWidth: '600px', 
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Get answers to common questions about our website development process
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
                  question: 'Which platform should I choose?',
                  answer: 'We recommend WordPress for most small businesses due to its flexibility and ease of use. React is best for businesses needing custom features or maximum performance.'
                },
                {
                  question: 'Do you provide hosting?',
                  answer: 'We can provide hosting or work with your existing provider. For WordPress and React, we recommend reliable hosting partners.'
                },
                {
                  question: 'Can I update the website myself?',
                  answer: 'Absolutely! We provide full training and documentation. WordPress requires basic learning, and React sites typically need developer updates.'
                },
                {
                  question: 'What if I need changes after launch?',
                  answer: 'Minor updates are included for the first month. After that, we offer ongoing support or train your team to make updates independently.'
                },
                {
                  question: 'Do you work with businesses outside New Brunswick?',
                  answer: 'Yes! While we\'re based in New Brunswick, we serve clients across Canada and the United States. All work is done remotely with regular video check-ins.'
                },
                {
                  question: 'How do I get started?',
                  answer: 'Contact us for a free consultation where we\'ll discuss your needs, goals, and the best approach for your business. We\'ll create a custom plan tailored to your specific situation.'
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
              <h2 className="section-title" style={{ color: 'white' }}>Ready to Get Started?</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Let's discuss your business goals and recommend the perfect website solution for you.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)',
                color: 'white',
                border: 'none',
                padding: '18px 40px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                boxShadow: '0 6px 20px rgba(29, 122, 175, 0.4)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none',
                marginRight: '1rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 8px 30px rgba(29, 122, 175, 0.5)';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 6px 20px rgba(29, 122, 175, 0.4)';
                e.target.style.transform = 'translateY(0)';
              }}>
                Schedule Free Consultation
              </a>
              <a href="/free-example" style={{
                display: 'inline-block',
                background: 'transparent',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                padding: '18px 40px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 8px 25px rgba(29, 122, 175, 0.4)';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.borderColor = 'rgba(29, 122, 175, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}>
                See a Free Example
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// Additional styles for websites page
const websiteStyles = `
.platform-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.platform-card {
  background: white;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.platform-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.service-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  will-change: transform, box-shadow;
  backface-visibility: hidden;
}

.service-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;
}

/* Prevent layout shifts on process cards specifically */
.services-grid .service-card {
  box-sizing: border-box !important;
  contain: layout style;
  transform: translateZ(0);
}

.services-grid .service-card:hover {
  transform: translateY(-2px) translateZ(0) !important;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;
}

.featured-platform {
  border-color: var(--primary-color);
  transform: scale(1.05);
}

.platform-badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary-color);
  color: white;
  padding: 5px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.platform-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.platform-subtitle {
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 20px;
}

.platform-features {
  text-align: left;
  margin: 20px 0;
  padding-left: 20px;
}

.platform-features li {
  margin-bottom: 8px;
  color: var(--text-secondary);
}

.industries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-top: 40px;
}

.industry-item {
  background: white;
  padding: 25px 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.industry-item:hover {
  transform: translateY(-3px);
}

.industry-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.industry-item h4 {
  color: var(--primary-color);
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.industry-item p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .platform-grid {
    grid-template-columns: 1fr;
  }
  
  .featured-platform {
    transform: none;
  }
  
  .industries-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .industries-grid {
    grid-template-columns: 1fr;
  }
}
`;

// Inject additional styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = websiteStyles;
  document.head.appendChild(styleSheet);
}