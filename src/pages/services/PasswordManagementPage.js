import React, { useEffect } from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { colors } from '../../styles/colors';

export const PasswordManagementPage = () => {
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
              <linearGradient id="techGradientPM" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1d7aaf" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
              <linearGradient id="pulseGradientPM" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1d7aaf" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#1e40af" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#1d7aaf" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            
            {/* Password Security Grid Lines */}
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

            {/* Security Patterns */}
            <g className="circuit-patterns" filter="blur(0.3px)">
              <path d="M100,150 L250,150 L270,170 L400,170 L420,150 L600,150" stroke="#1d7aaf" strokeWidth="1" opacity="0.4" fill="none" strokeDasharray="5,3" />
              <path d="M150,250 L300,250 L320,230 L500,230 L520,250 L750,250" stroke="#1e40af" strokeWidth="1" opacity="0.3" fill="none" strokeDasharray="8,4" />
              <path d="M80,350 L200,350 L220,330 L350,330 L370,350 L550,350" stroke="#1d7aaf" strokeWidth="1.5" opacity="0.5" fill="none" strokeDasharray="6,2" />
            </g>

            {/* Security Nodes */}
            <g className="tech-nodes">
              <circle cx="150" cy="120" r="4" fill="#1d7aaf" opacity="0.9" />
              <circle cx="270" cy="170" r="3" fill="#1e40af" opacity="0.8" />
              <circle cx="420" cy="150" r="5" fill="#1d7aaf" opacity="1.0" />
              <circle cx="650" cy="110" r="6" fill="#1e40af" opacity="0.9" />
              <circle cx="850" cy="200" r="3" fill="#1d7aaf" opacity="0.9" />
            </g>

            {/* Glowing Orbs */}
            <g className="glowing-orbs">
              <circle cx="100" cy="100" r="8" fill="url(#techGradientPM)" opacity="0.4" />
              <circle cx="900" cy="300" r="6" fill="url(#techGradientPM)" opacity="0.5" />
              <circle cx="1100" cy="150" r="10" fill="url(#techGradientPM)" opacity="0.3" />
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
              }}>Enterprise Password Management for New Brunswick Businesses</h1>
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
                Eliminate password-related security risks with professional enterprise password management. 
                Secure, scalable password solutions serving Fredericton, Moncton, Saint John, and across New Brunswick.
              </p>
              <div style={{ 
                display: 'flex',
                justifyContent: 'center',
                gap: '15px',
                flexWrap: 'wrap'
              }}>
                <a href="/contact" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '18px 40px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '50px',
                  boxShadow: '0 10px 30px rgba(29, 78, 216, 0.4)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 15px 40px rgba(29, 78, 216, 0.5)';
                  e.target.style.transform = 'translateY(-3px) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 10px 30px rgba(29, 78, 216, 0.4)';
                  e.target.style.transform = 'translateY(0) scale(1)';
                }}>Get Password Management</a>
                <a href="/contact" style={{
                  display: 'inline-block',
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  padding: '18px 40px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '50px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  textDecoration: 'none',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 10px 30px rgba(29, 78, 216, 0.4)';
                  e.target.style.transform = 'translateY(-3px) scale(1.02)';
                  e.target.style.borderColor = 'rgba(29, 78, 216, 0.8)';
                  e.target.style.background = 'rgba(29, 78, 216, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = 'none';
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.target.style.background = 'transparent';
                }}>Ask About Grant Eligibility</a>
              </div>
            </div>
          </div>
        </section>

        {/* Password Crisis Stats */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light, padding: '80px 0' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '60px', textAlign: 'center' }}>
              <h2 style={{ 
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
                fontWeight: '700', 
                background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>The Password Security Crisis</h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: '#6b7280', 
                maxWidth: '600px', 
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Weak passwords are the #1 cause of data breaches. Don't let poor password practices destroy your New Brunswick business.
              </p>
            </div>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: '25px',
              padding: '0 20px',
              marginBottom: '40px'
            }}>
              {[
                { 
                  stat: '81%', 
                  desc: 'of data breaches involve weak or stolen passwords', 
                  icon: '🔐',
                  color: '#1d7aaf',
                  bgColor: 'rgba(29, 122, 175, 0.08)',
                  title: 'Breach Rate'
                },
                { 
                  stat: '59%', 
                  desc: 'of people reuse passwords across multiple accounts', 
                  icon: '🔄',
                  color: '#1e40af',
                  bgColor: 'rgba(30, 64, 175, 0.08)',
                  title: 'Password Reuse'
                },
                { 
                  stat: '$4.88M', 
                  desc: 'average cost of a password-related data breach', 
                  icon: '💸',
                  color: '#155e8a',
                  bgColor: 'rgba(21, 94, 138, 0.08)',
                  title: 'Breach Cost'
                }
              ].map((item, index) => (
                <div key={index} style={{ 
                  background: 'white',
                  borderRadius: '16px',
                  padding: '0',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                }}>
                  {/* Header Section */}
                  <div style={{
                    background: item.bgColor,
                    padding: '20px 25px 15px 25px',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.06)'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between',
                      marginBottom: '8px'
                    }}>
                      <span style={{ 
                        fontSize: '1.75rem'
                      }}>{item.icon}</span>
                      <span style={{ 
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: item.color,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>{item.title}</span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div style={{ padding: '25px' }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'baseline', 
                      marginBottom: '15px',
                      gap: '8px'
                    }}>
                      <span style={{ 
                        fontSize: '2.5rem', 
                        fontWeight: '800',
                        color: item.color,
                        lineHeight: '1'
                      }}>{item.stat}</span>
                    </div>
                    <p style={{ 
                      color: '#4b5563', 
                      fontSize: '0.95rem',
                      lineHeight: '1.5',
                      margin: '0',
                      fontWeight: '500'
                    }}>{item.desc}</p>
                  </div>

                  {/* Bottom indicator */}
                  <div style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    height: '3px',
                    background: `linear-gradient(90deg, ${item.color} 0%, transparent 100%)`,
                    opacity: '0.8'
                  }}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What is Password Management */}
        <section className="section" style={{ padding: '80px 0' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '60px' }}>
              <h2 style={{ 
                fontSize: 'clamp(2rem, 3.5vw, 3rem)', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '20px',
                lineHeight: '1.2',
                textAlign: 'center'
              }}>Enterprise Password Management Solutions</h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: colors.text.secondary, 
                maxWidth: '800px', 
                margin: '0 auto', 
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                Enterprise password management provides your business with secure, centralized password storage, generation, and sharing. 
                Eliminate weak passwords and reduce security risks across your entire organization.
              </p>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '30px',
              marginBottom: '60px',
              padding: '0 20px'
            }}>
              <div style={{ 
                background: 'white', 
                border: '1px solid rgba(29, 122, 175, 0.1)', 
                padding: '40px 30px', 
                borderRadius: '20px', 
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '25px', textAlign: 'center' }}>🔐</div>
                <h3 style={{ 
                  color: colors.text.primary, 
                  marginBottom: '15px',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  textAlign: 'center'
                }}>Secure Password Generation</h3>
                <p style={{ 
                  color: colors.text.secondary, 
                  marginBottom: '20px',
                  lineHeight: '1.7',
                  textAlign: 'center'
                }}>
                  Automatically generate strong, unique passwords for every account, eliminating password reuse 
                  and protecting against credential stuffing attacks.
                </p>
                <ul style={{ 
                  color: colors.text.secondary, 
                  paddingLeft: '20px', 
                  lineHeight: '1.8'
                }}>
                  <li>Complex password algorithms</li>
                  <li>Customizable password policies</li>
                  <li>Automatic password rotation</li>
                  <li>Breach monitoring integration</li>
                </ul>
              </div>
              <div style={{ 
                background: 'white', 
                border: '1px solid rgba(29, 122, 175, 0.1)', 
                padding: '40px 30px', 
                borderRadius: '20px', 
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '25px', textAlign: 'center' }}>🔒</div>
                <h3 style={{ 
                  color: colors.text.primary, 
                  marginBottom: '15px',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  textAlign: 'center'
                }}>Military-Grade Encryption</h3>
                <p style={{ 
                  color: colors.text.secondary, 
                  marginBottom: '20px',
                  lineHeight: '1.7',
                  textAlign: 'center'
                }}>
                  All passwords protected with AES-256 encryption and zero-knowledge architecture 
                  ensuring even we cannot access your sensitive data.
                </p>
                <ul style={{ 
                  color: colors.text.secondary, 
                  paddingLeft: '20px', 
                  lineHeight: '1.8'
                }}>
                  <li>AES-256 bit encryption</li>
                  <li>Zero-knowledge security model</li>
                  <li>End-to-end encryption</li>
                  <li>Secure cloud synchronization</li>
                </ul>
              </div>
              <div style={{ 
                background: 'white', 
                border: '1px solid rgba(29, 122, 175, 0.1)', 
                padding: '40px 30px', 
                borderRadius: '20px', 
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '25px', textAlign: 'center' }}>👥</div>
                <h3 style={{ 
                  color: colors.text.primary, 
                  marginBottom: '15px',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  textAlign: 'center'
                }}>Team Password Sharing</h3>
                <p style={{ 
                  color: colors.text.secondary, 
                  marginBottom: '20px',
                  lineHeight: '1.7',
                  textAlign: 'center'
                }}>
                  Safely share passwords for shared accounts with granular permissions and 
                  administrative oversight for complete security control.
                </p>
                <ul style={{ 
                  color: colors.text.secondary, 
                  paddingLeft: '20px', 
                  lineHeight: '1.8'
                }}>
                  <li>Role-based access controls</li>
                  <li>Secure credential sharing</li>
                  <li>Activity logging and reporting</li>
                  <li>Emergency access procedures</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Implementation Process */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light, padding: '80px 0' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '60px' }}>
              <h2 style={{ 
                fontSize: 'clamp(2rem, 3.5vw, 3rem)', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '20px',
                lineHeight: '1.2',
                textAlign: 'center'
              }}>Our Password Management Implementation Process</h2>
              <p style={{ 
                fontSize: '1.1rem', 
                color: colors.text.secondary, 
                maxWidth: '700px', 
                margin: '0 auto',
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                From assessment to full deployment, our proven methodology ensures smooth adoption and maximum security 
                benefits for your New Brunswick business.
              </p>
            </div>
            <div className="process-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '30px',
              marginTop: '40px',
              padding: '0 20px'
            }}>
              <div style={{ 
                position: 'relative', 
                padding: '60px 30px 40px 30px', 
                marginTop: '30px', 
                overflow: 'visible', 
                background: 'white', 
                borderRadius: '16px', 
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)', 
                border: '1px solid rgba(29, 122, 175, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '-25px', 
                  left: '30px', 
                  background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)', 
                  color: 'white', 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  boxShadow: '0 6px 20px rgba(29, 122, 175, 0.4)', 
                  zIndex: 10 
                }}>1</div>
                <h3 style={{ 
                  color: colors.text.primary, 
                  marginBottom: '15px', 
                  marginTop: '20px',
                  fontSize: '1.3rem',
                  fontWeight: '700'
                }}>Security Assessment</h3>
                <p style={{ 
                  color: colors.text.secondary, 
                  lineHeight: '1.6', 
                  marginBottom: '20px'
                }}>
                  Comprehensive evaluation of current password practices, vulnerability assessment, and solution selection 
                  based on your business needs and security requirements.
                </p>
                <ul style={{ 
                  color: colors.text.secondary, 
                  paddingLeft: '20px', 
                  lineHeight: '1.7',
                  listStyle: 'none'
                }}>
                  <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    Current password audit
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    Risk assessment analysis
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    Solution recommendation
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '25px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    ROI calculation
                  </li>
                </ul>
              </div>

              <div style={{ 
                position: 'relative', 
                padding: '60px 30px 40px 30px', 
                marginTop: '30px', 
                overflow: 'visible', 
                background: 'white', 
                borderRadius: '16px', 
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)', 
                border: '1px solid rgba(29, 122, 175, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '-25px', 
                  left: '30px', 
                  background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)', 
                  color: 'white', 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  boxShadow: '0 6px 20px rgba(29, 122, 175, 0.4)', 
                  zIndex: 10 
                }}>2</div>
                <h3 style={{ 
                  color: colors.text.primary, 
                  marginBottom: '15px', 
                  marginTop: '20px',
                  fontSize: '1.3rem',
                  fontWeight: '700'
                }}>Deployment & Configuration</h3>
                <p style={{ 
                  color: colors.text.secondary, 
                  lineHeight: '1.6', 
                  marginBottom: '20px'
                }}>
                  Professional installation, configuration, and integration with existing systems including Active Directory, 
                  SSO platforms, and business applications.
                </p>
                <ul style={{ 
                  color: colors.text.secondary, 
                  paddingLeft: '20px', 
                  lineHeight: '1.7',
                  listStyle: 'none'
                }}>
                  <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    Software installation
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    System integration
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    Policy configuration
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '25px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    Security hardening
                  </li>
                </ul>
              </div>

              <div style={{ 
                position: 'relative', 
                padding: '60px 30px 40px 30px', 
                marginTop: '30px', 
                overflow: 'visible', 
                background: 'white', 
                borderRadius: '16px', 
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)', 
                border: '1px solid rgba(29, 122, 175, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '-25px', 
                  left: '30px', 
                  background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)', 
                  color: 'white', 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  boxShadow: '0 6px 20px rgba(29, 122, 175, 0.4)', 
                  zIndex: 10 
                }}>3</div>
                <h3 style={{ 
                  color: colors.text.primary, 
                  marginBottom: '15px', 
                  marginTop: '20px',
                  fontSize: '1.3rem',
                  fontWeight: '700'
                }}>Training & Migration</h3>
                <p style={{ 
                  color: colors.text.secondary, 
                  lineHeight: '1.6', 
                  marginBottom: '20px'
                }}>
                  Comprehensive user training, password migration assistance, and change management to ensure successful 
                  adoption across your organization.
                </p>
                <ul style={{ 
                  color: colors.text.secondary, 
                  paddingLeft: '20px', 
                  lineHeight: '1.7',
                  listStyle: 'none'
                }}>
                  <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    Staff training sessions
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    Password migration assistance
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    Change management support
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '25px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    User adoption tracking
                  </li>
                </ul>
              </div>

              <div style={{ 
                position: 'relative', 
                padding: '60px 30px 40px 30px', 
                marginTop: '30px', 
                overflow: 'visible', 
                background: 'white', 
                borderRadius: '16px', 
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)', 
                border: '1px solid rgba(29, 122, 175, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '-25px', 
                  left: '30px', 
                  background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)', 
                  color: 'white', 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  boxShadow: '0 6px 20px rgba(29, 122, 175, 0.4)', 
                  zIndex: 10 
                }}>4</div>
                <h3 style={{ 
                  color: colors.text.primary, 
                  marginBottom: '15px', 
                  marginTop: '20px',
                  fontSize: '1.3rem',
                  fontWeight: '700'
                }}>Ongoing Support & Monitoring</h3>
                <p style={{ 
                  color: colors.text.secondary, 
                  lineHeight: '1.6', 
                  marginBottom: '20px'
                }}>
                  Continuous monitoring, security updates, and ongoing support to ensure optimal performance and security 
                  posture maintenance.
                </p>
                <ul style={{ 
                  color: colors.text.secondary, 
                  paddingLeft: '20px', 
                  lineHeight: '1.7',
                  listStyle: 'none'
                }}>
                  <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    24/7 technical support
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    Security monitoring
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    Regular security reviews
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '25px' }}>
                    <span style={{ position: 'absolute', left: '0', color: colors.primary, fontWeight: 'bold' }}>✓</span>
                    Policy updates & maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            @media (max-width: 768px) {
              .process-grid {
                grid-template-columns: 1fr !important;
                gap: 20px !important;
                padding: 0 5px !important;
              }
            }
            @media (max-width: 480px) {
              .process-grid {
                padding: 0 5px !important;
              }
              .container {
                padding: 0 5px !important;
              }
            }
          `}} />
        </section>

        {/* Final CTA Section */}
        <section className="section" style={{ backgroundColor: '#000', color: 'white', marginBottom: '0', paddingBottom: '60px' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Ready to Eliminate Password Risks?</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Stop password-related breaches before they happen. Implement professional password management today.
              </p>
            </div>
            <div style={{ 
              display: 'flex',
              justifyContent: 'center',
              gap: '15px',
              flexWrap: 'wrap'
            }}>
              <a href="/contact" style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
                color: 'white',
                border: 'none',
                padding: '18px 40px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                boxShadow: '0 10px 30px rgba(29, 78, 216, 0.4)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 15px 40px rgba(29, 78, 216, 0.5)';
                e.target.style.transform = 'translateY(-3px) scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 10px 30px rgba(29, 78, 216, 0.4)';
                e.target.style.transform = 'translateY(0) scale(1)';
              }}>Get Password Management</a>
              <a href="/contact" style={{
                display: 'inline-block',
                background: 'transparent',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                padding: '18px 40px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 10px 30px rgba(29, 78, 216, 0.4)';
                e.target.style.transform = 'translateY(-3px) scale(1.02)';
                e.target.style.borderColor = 'rgba(29, 78, 216, 0.8)';
                e.target.style.background = 'rgba(29, 78, 216, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.target.style.background = 'transparent';
              }}>Ask About Grant Funding</a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};