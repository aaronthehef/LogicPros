import React, { useEffect } from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { colors } from '../../styles/colors';

export const ITServicesPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "IT & Digital Solutions New Brunswick | LogicPros | Enterprise Services Maritime";
    
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
              <linearGradient id="techGradientIT" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1d7aaf" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
              <linearGradient id="pulseGradientIT" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1d7aaf" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#1e40af" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#1d7aaf" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            
            {/* Security Grid Lines */}
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
              <circle cx="100" cy="100" r="8" fill="url(#techGradientIT)" opacity="0.4" />
              <circle cx="900" cy="300" r="6" fill="url(#techGradientIT)" opacity="0.5" />
              <circle cx="1100" cy="150" r="10" fill="url(#techGradientIT)" opacity="0.3" />
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
              }}>Enterprise IT & Digital Solutions for New Brunswick & the Maritimes</h1>
              <p style={{ 
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                marginBottom: '40px',
                maxWidth: '800px',
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: '1.7',
                fontWeight: '300',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)'
              }}>
                As a trusted partner to businesses across New Brunswick and the Maritime provinces, we deliver a comprehensive suite of IT and digital solutions designed to streamline operations, enhance security, and drive growth. Our tailored services empower small and medium businesses with modern technologies and expert support to meet today's competitive landscape.
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
                }}>Get Started Today</a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services Overview */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light, padding: '80px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ 
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>
                Comprehensive Business IT Solutions Trusted Across New Brunswick and the Maritimes
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: colors.text.secondary, 
                maxWidth: '800px', 
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                From managed IT support to enterprise-grade cybersecurity solutions, we deliver integrated technology services that help grow and protect businesses throughout New Brunswick and the Maritime provinces.
              </p>
            </div>

            <div className="services-grid-2x2" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '40px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* Web Design & Development - First */}
              <div style={{ 
                background: 'white',
                borderRadius: '20px',
                padding: '40px 35px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: `2px solid ${colors.secondary}`,
                position: 'relative',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                height: 'auto'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <div style={{ 
                    fontSize: '3rem', 
                    marginBottom: '15px'
                  }}>🎨</div>
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: '700', 
                    color: colors.text.primary, 
                    marginBottom: '8px'
                  }}>Web Design & Development</h3>
                  <p style={{ 
                    color: colors.secondary, 
                    fontWeight: '600',
                    fontSize: '1rem'
                  }}>Professional Digital Presence Across New Brunswick & the Maritimes</p>
                </div>
                <div style={{ 
                  marginBottom: '25px',
                  flexGrow: 1
                }}>
                  <p style={{ 
                    color: colors.text.secondary, 
                    lineHeight: '1.6',
                    marginBottom: '20px'
                  }}>
                    Build a modern, mobile-responsive website optimized for search engines that attracts and converts your target customers throughout New Brunswick and the Maritimes. Our WordPress web design services deliver customized solutions that reflect your brand's identity and meet your business goals. Our WordPress web design services help businesses establish a credible digital presence that builds customer trust and drives measurable results. Mobile-first design ensures seamless performance on all devices, while our local SEO expertise helps businesses rank higher and convert more website visitors.
                  </p>
                  <h4 style={{ 
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: colors.text.primary,
                    marginBottom: '15px'
                  }}>Key Features:</h4>
                  <ul style={{ 
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {[
                      'Custom WordPress Development',
                      'Mobile-Responsive Design',
                      'SEO Optimization & Local Search Targeting',
                      'E-commerce Platform Integration',
                      'Content Management Systems (CMS)',
                      'Website Hosting & Maintenance'
                    ].map((feature, index) => (
                      <li key={index} style={{ 
                        padding: '6px 0',
                        fontSize: '0.95rem',
                        color: colors.text.secondary,
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <span style={{ 
                          color: colors.secondary, 
                          marginRight: '10px',
                          fontWeight: 'bold'
                        }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ textAlign: 'center', marginTop: 'auto' }}>
                  <a 
                    href="/services/websites" 
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
                    Explore Web Design Services
                  </a>
                </div>
              </div>

              {/* Managed IT Services - Second */}
              <div style={{ 
                background: 'white',
                borderRadius: '20px',
                padding: '40px 35px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: `2px solid ${colors.primary}`,
                position: 'relative',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                height: 'auto'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <div style={{ 
                    fontSize: '3rem', 
                    marginBottom: '15px'
                  }}>🖥️</div>
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: '700', 
                    color: colors.text.primary, 
                    marginBottom: '8px'
                  }}>Managed IT Services New Brunswick</h3>
                  <p style={{ 
                    color: colors.primary, 
                    fontWeight: '600',
                    fontSize: '1rem'
                  }}>Comprehensive IT Infrastructure Management & Support</p>
                </div>
                <div style={{ 
                  marginBottom: '25px',
                  flexGrow: 1
                }}>
                  <p style={{ 
                    color: colors.text.secondary, 
                    lineHeight: '1.6',
                    marginBottom: '20px'
                  }}>
                    Our managed IT support for New Brunswick businesses provides proactive monitoring and strategic IT planning to keep operations secure and efficient. From 24/7 network management to cloud migration services, we ensure your IT infrastructure performs reliably across the Maritimes. Our complete IT solutions are designed to minimize downtime and maximize productivity, backed by local expertise.
                  </p>
                  <h4 style={{ 
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: colors.text.primary,
                    marginBottom: '15px'
                  }}>Key Offerings:</h4>
                  <ul style={{ 
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {[
                      '24/7 Network Monitoring & Incident Resolution',
                      'Proactive IT Support & Personalized Assistance',
                      'Server & Cloud Infrastructure Management',
                      'Data Backup & Disaster Recovery Solutions',
                      'Strategic IT Consulting',
                      'Hardware & Software Asset Management'
                    ].map((feature, index) => (
                      <li key={index} style={{ 
                        padding: '6px 0',
                        fontSize: '0.95rem',
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
                </div>
                <div style={{ textAlign: 'center', marginTop: 'auto' }}>
                  <a 
                    href="/services/managed-it" 
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
                    Explore Managed IT Services
                  </a>
                </div>
              </div>

              {/* Cybersecurity Solutions - Third */}
              <div style={{ 
                background: 'white',
                borderRadius: '20px',
                padding: '40px 35px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: `2px solid ${colors.accent}`,
                position: 'relative',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                height: 'auto'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <div style={{ 
                    fontSize: '3rem', 
                    marginBottom: '15px'
                  }}>🛡️</div>
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: '700', 
                    color: colors.text.primary, 
                    marginBottom: '8px'
                  }}>Cybersecurity Solutions Maritime</h3>
                  <p style={{ 
                    color: colors.accent, 
                    fontWeight: '600',
                    fontSize: '1rem'
                  }}>Enterprise-Grade Protection Tailored for New Brunswick Businesses</p>
                </div>
                <div style={{ 
                  marginBottom: '25px',
                  flexGrow: 1
                }}>
                  <p style={{ 
                    color: colors.text.secondary, 
                    lineHeight: '1.6',
                    marginBottom: '20px'
                  }}>
                    Protect your digital assets with comprehensive cybersecurity solutions tailored for New Brunswick businesses, addressing evolving cyber threats and regulatory compliance. Our services include security audits, firewall management, multi-factor authentication, incident response, and staff training to reduce risk and maintain business continuity. Advanced security compliance solutions protect Maritime businesses from sophisticated cyber threats while maintaining operational efficiency through specialized New Brunswick cybersecurity expertise.
                  </p>
                  <h4 style={{ 
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: colors.text.primary,
                    marginBottom: '15px'
                  }}>Security Highlights:</h4>
                  <ul style={{ 
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {[
                      'Security Audits & Vulnerability Assessments',
                      'Firewall Management & Network Security',
                      'Multi-Factor Authentication (MFA)',
                      'Security Awareness Training for Staff',
                      'Incident Response & Recovery Planning',
                      'Compliance Support for Industry Standards'
                    ].map((feature, index) => (
                      <li key={index} style={{ 
                        padding: '6px 0',
                        fontSize: '0.95rem',
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
                </div>
                <div style={{ textAlign: 'center', marginTop: 'auto' }}>
                  <a 
                    href="/services/cybersecurity" 
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
                    View Cybersecurity Services
                  </a>
                </div>
              </div>

              {/* AI Automation Solutions - Fourth */}
              <div style={{ 
                background: 'white',
                borderRadius: '20px',
                padding: '40px 35px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: `2px solid ${colors.primaryDark}`,
                position: 'relative',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                height: 'auto'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <div style={{ 
                    fontSize: '3rem', 
                    marginBottom: '15px'
                  }}>🤖</div>
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: '700', 
                    color: colors.text.primary, 
                    marginBottom: '8px'
                  }}>AI Automation Solutions New Brunswick</h3>
                  <p style={{ 
                    color: colors.primaryDark, 
                    fontWeight: '600',
                    fontSize: '1rem'
                  }}>Intelligent Business Process Automation & Insights</p>
                </div>
                <div style={{ 
                  marginBottom: '25px',
                  flexGrow: 1
                }}>
                  <p style={{ 
                    color: colors.text.secondary, 
                    lineHeight: '1.6',
                    marginBottom: '20px'
                  }}>
                    Use AI automation to reduce manual tasks, enhance accuracy, and gain real-time insights across New Brunswick and the Maritime region. Our AI solutions include smart chatbots, intelligent document processing, and tailored workflows designed to meet diverse industry needs. Transform your operations with innovative automation that delivers measurable efficiency and competitive advantages.
                  </p>
                  <h4 style={{ 
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: colors.text.primary,
                    marginBottom: '15px'
                  }}>AI Capabilities:</h4>
                  <ul style={{ 
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {[
                      'Business Process Automation',
                      'Intelligent Document Processing',
                      'Customer Service Chatbots',
                      'Data Analysis & Reporting',
                      'Workflow Integration Systems',
                      'Custom AI Solution Development'
                    ].map((feature, index) => (
                      <li key={index} style={{ 
                        padding: '6px 0',
                        fontSize: '0.95rem',
                        color: colors.text.secondary,
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <span style={{ 
                          color: colors.primaryDark, 
                          marginRight: '10px',
                          fontWeight: 'bold'
                        }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ textAlign: 'center', marginTop: 'auto' }}>
                  <a 
                    href="/services/automations" 
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
                    Discover AI Automation
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            @media (max-width: 768px) {
              .services-grid-2x2 {
                grid-template-columns: 1fr !important;
                gap: 30px !important;
              }
            }
          `}} />
        </section>

        {/* Cloud IT Services Section */}
        <section style={{ padding: '80px 20px', backgroundColor: 'white' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 style={{ 
                fontSize: 'clamp(2rem, 4vw, 3rem)', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '20px'
              }}>Cloud IT Services New Brunswick & the Maritimes</h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: colors.text.secondary, 
                maxWidth: '700px', 
                margin: '0 auto'
              }}>
                Scale your business with secure and reliable cloud IT services designed for enterprises and SMBs throughout New Brunswick and the Maritimes.
              </p>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '30px',
              marginBottom: '50px'
            }}>
              {[
                {
                  icon: '☁️',
                  title: 'Seamless Cloud Migration & Setup',
                  description: 'Minimize downtime with our expert cloud migration services that transition your business operations securely and efficiently to modern cloud platforms.'
                },
                {
                  icon: '🔄',
                  title: 'Automated Cloud Backup & Disaster Recovery',
                  description: 'Ensure data protection with comprehensive backup solutions and disaster recovery planning that keeps your critical business information secure and accessible.'
                },
                {
                  icon: '⚡',
                  title: 'Scalable Infrastructure',
                  description: 'Control costs while enabling growth with flexible cloud infrastructure that adapts to your business needs and optimizes performance automatically.'
                }
              ].map((service, index) => (
                <div key={index} style={{ 
                  background: 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)',
                  borderRadius: '15px',
                  padding: '35px 25px',
                  boxShadow: '0 5px 25px rgba(0, 0, 0, 0.08)',
                  border: `1px solid ${colors.backgrounds.light}`,
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ 
                    fontSize: '2.5rem', 
                    marginBottom: '20px'
                  }}>{service.icon}</div>
                  <h3 style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: '700', 
                    color: colors.text.primary, 
                    marginBottom: '15px'
                  }}>{service.title}</h3>
                  <p style={{ 
                    color: colors.text.secondary, 
                    lineHeight: '1.6',
                    fontSize: '1rem',
                    margin: 0
                  }}>{service.description}</p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <a 
                href="/contact" 
                style={{
                  display: 'inline-block',
                  background: colors.backgrounds.gradientPrimary,
                  color: 'white',
                  padding: '18px 40px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  boxShadow: '0 6px 20px rgba(29, 122, 175, 0.3)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: 'none',
                  minWidth: '200px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 8px 30px rgba(29, 122, 175, 0.4)';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 6px 20px rgba(29, 122, 175, 0.3)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Get Cloud IT Consultation
              </a>
              <a 
                href="/services/managed-it" 
                style={{
                  display: 'inline-block',
                  background: 'transparent',
                  color: colors.primary,
                  border: `2px solid ${colors.primary}`,
                  padding: '16px 38px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  minWidth: '200px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = colors.primary;
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = colors.primary;
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Explore Cloud Services
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section style={{ backgroundColor: colors.backgrounds.light, padding: '80px 20px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 style={{ 
                fontSize: 'clamp(2rem, 4vw, 3rem)', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '20px'
              }}>Why New Brunswick Businesses Choose LogicPros</h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: colors.text.secondary, 
                maxWidth: '700px', 
                margin: '0 auto'
              }}>
                Local expertise, enterprise-grade solutions, and personalized service for businesses across the Maritime provinces.
              </p>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '40px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: '20px',
                  background: colors.backgrounds.gradientPrimary,
                  borderRadius: '50%',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}>🏆</div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  color: colors.text.primary, 
                  marginBottom: '15px'
                }}>Maritime Expertise</h3>
                <p style={{ 
                  color: colors.text.secondary, 
                  lineHeight: '1.6'
                }}>
                  Local expertise in New Brunswick and the Maritimes with deep understanding of regional business needs and proven experience serving SMB and enterprise clients.
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: '20px',
                  background: colors.backgrounds.gradientPrimary,
                  borderRadius: '50%',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}>🔧</div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  color: colors.text.primary, 
                  marginBottom: '15px'
                }}>Integrated Solutions</h3>
                <p style={{ 
                  color: colors.text.secondary, 
                  lineHeight: '1.6'
                }}>
                  Integrated technology solutions that work seamlessly together, from IT consulting to AI automation, creating a complete ecosystem for your business.
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: '20px',
                  background: colors.backgrounds.gradientPrimary,
                  borderRadius: '50%',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}>📞</div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  color: colors.text.primary, 
                  marginBottom: '15px'
                }}>Personal Support</h3>
                <p style={{ 
                  color: colors.text.secondary, 
                  lineHeight: '1.6'
                }}>
                  Personalized, responsive support that goes beyond typical IT services with direct access to our team and dedicated account management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ padding: '80px 20px', backgroundColor: 'white' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 style={{ 
                fontSize: 'clamp(2rem, 4vw, 3rem)', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '20px'
              }}>Frequently Asked Questions</h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: colors.text.secondary, 
                maxWidth: '600px', 
                margin: '0 auto'
              }}>
                Common questions about our business IT solutions New Brunswick services
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
                  question: 'What managed IT services do you provide in New Brunswick and the Maritimes?',
                  answer: 'We offer comprehensive managed IT support including 24/7 network monitoring, proactive support, cloud IT services, data backup and disaster recovery, and strategic IT consulting tailored for Maritime businesses.'
                },
                {
                  question: 'How do cybersecurity solutions for New Brunswick businesses work?',
                  answer: 'Our cybersecurity services include security audits, firewall management, multi-factor authentication, compliance support, and incident response planning designed for New Brunswick regulatory requirements and business needs.'
                },
                {
                  question: 'Do you provide WordPress web design services across New Brunswick?',
                  answer: 'Yes, our WordPress web design services cover all Maritime provinces. We create mobile-responsive, SEO-optimized websites with ongoing support designed for local search visibility and customer conversion.'
                },
                {
                  question: 'What businesses benefit from AI automation solutions Maritime?',
                  answer: 'Our AI automation solutions serve businesses across industries including manufacturing, professional services, retail, and healthcare. We customize workflows to reduce manual tasks and improve efficiency with measurable ROI.'
                },
                {
                  question: 'How quickly do you respond to IT support requests?',
                  answer: 'Our IT support New Brunswick and Maritime provinces includes 24/7 monitoring with immediate alerts. We provide rapid response times with most issues resolved proactively before impacting operations.'
                },
                {
                  question: 'What are the benefits of cloud IT services for my business?',
                  answer: 'Cloud IT services reduce costs, improve scalability, and enhance business continuity. We handle complete migration planning and ongoing management with minimal downtime for Maritime businesses.'
                },
                {
                  question: 'How do AI automation solutions deliver ROI for Maritime businesses?',
                  answer: 'AI automation delivers measurable ROI through reduced operational costs, improved accuracy, and faster processing. Our solutions integrate seamlessly with existing systems across New Brunswick with rapid implementation.'
                },
                {
                  question: 'Do you provide ongoing support after implementation?',
                  answer: 'Yes, all our solutions include comprehensive ongoing support, maintenance, and proactive monitoring. We ensure optimal performance with dedicated Maritime-based support teams and rapid response.'
                }
              ].map((faq, index) => (
                <div key={index} style={{ 
                  background: 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)',
                  borderRadius: '15px',
                  padding: '30px 25px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: `1px solid ${colors.backgrounds.light}`,
                  textAlign: 'left'
                }}>
                  <h3 style={{ 
                    color: colors.text.primary, 
                    marginBottom: '15px',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    lineHeight: '1.4'
                  }}>{faq.question}</h3>
                  <p style={{ 
                    color: colors.text.secondary, 
                    lineHeight: '1.7',
                    margin: 0,
                    fontSize: '1rem'
                  }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section style={{ 
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', 
          color: 'white', 
          padding: '100px 20px',
          textAlign: 'center',
          position: 'relative'
        }}>
          <div className="container">
            <h2 style={{ 
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', 
              fontWeight: '800', 
              marginBottom: '25px',
              lineHeight: '1.1'
            }}>Partner with New Brunswick's Leading IT Experts</h2>
            <p style={{ 
              fontSize: '1.4rem', 
              marginBottom: '20px', 
              maxWidth: '800px', 
              margin: '0 auto 20px auto',
              opacity: 0.95,
              lineHeight: '1.5'
            }}>
              From managed IT services New Brunswick to cutting-edge AI automation solutions NB, we deliver integrated technology services that drive real business results across the Maritime provinces.
            </p>
            <p style={{ 
              fontSize: '1.1rem', 
              marginBottom: '50px', 
              maxWidth: '600px', 
              margin: '0 auto 50px auto',
              opacity: 0.85,
              lineHeight: '1.6'
            }}>
              <strong>Local expertise.</strong> Enterprise-grade solutions. <strong>Personalized service.</strong><br/>
              Experience the LogicPros difference today.
            </p>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '20px', 
              flexWrap: 'wrap',
              marginBottom: '40px'
            }}>
              <a 
                href="/contact" 
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '20px 45px',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  borderRadius: '50px',
                  boxShadow: '0 8px 30px rgba(29, 122, 175, 0.4)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  textDecoration: 'none',
                  minWidth: '220px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 12px 40px rgba(29, 122, 175, 0.6)';
                  e.target.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 8px 30px rgba(29, 122, 175, 0.4)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Get Your Free IT Consultation
              </a>
              
              <a 
                href="tel:+15061234567" 
                style={{
                  display: 'inline-block',
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  padding: '18px 43px',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  borderRadius: '50px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  textDecoration: 'none',
                  minWidth: '220px',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                  e.target.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                📞 Call Now
              </a>
            </div>

            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              gap: '40px',
              flexWrap: 'wrap',
              opacity: 0.8,
              fontSize: '0.95rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.2rem' }}>✓</span>
                <span>24/7 IT Support New Brunswick</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.2rem' }}>✓</span>
                <span>Maritime Business Expertise</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.2rem' }}>✓</span>
                <span>Integrated Technology Solutions</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};