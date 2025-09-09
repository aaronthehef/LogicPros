import React, { useEffect, useRef } from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { colors } from '../../styles/colors';
import { gsap } from 'gsap';

export const ManagedITServicesPage = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    // Set page title
    document.title = "Managed IT Services New Brunswick | LogicPros | Enterprise IT Solutions Maritime";
    
    // Enhanced GSAP scroll animations for header
    const header = headerRef.current;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        // Add enhanced blur and shadow when scrolled
        gsap.to(header, {
          duration: 0.3,
          css: {
            backdropFilter: "blur(25px) saturate(200%)",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(29, 122, 175, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
          },
          ease: "power2.out"
        });
      } else {
        // Return to original state
        gsap.to(header, {
          duration: 0.3,
          css: {
            backdropFilter: "blur(20px) saturate(180%)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(29, 122, 175, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
          },
          ease: "power2.out"
        });
      }
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
      window.removeEventListener('scroll', handleScroll);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div className="landing-page">
      {/* Header */}
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
        <section className="hero-section" style={{ 
          position: 'relative', 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', 
          overflow: 'hidden' 
        }}>
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
              {/* Horizontal circuit paths */}
              <path d="M100,150 L250,150 L270,170 L400,170 L420,150 L600,150" stroke="#1d7aaf" strokeWidth="1" opacity="0.4" fill="none" strokeDasharray="5,3" />
              <path d="M150,250 L300,250 L320,230 L500,230 L520,250 L750,250" stroke="#1e40af" strokeWidth="1" opacity="0.3" fill="none" strokeDasharray="8,4" />
              <path d="M80,350 L200,350 L220,330 L350,330 L370,350 L550,350" stroke="#1d7aaf" strokeWidth="1.5" opacity="0.5" fill="none" strokeDasharray="6,2" />
              
              {/* Vertical circuit paths */}
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

          <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: 'white' }}>
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: '700', 
              marginBottom: '30px',
              lineHeight: '1.2',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
            }}>Enterprise Managed IT Services New Brunswick & Maritime Solutions</h1>
            <p style={{ 
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', 
              marginBottom: '50px', 
              maxWidth: '800px', 
              margin: '0 auto 50px auto',
              lineHeight: '1.6',
              opacity: 0.9,
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
            }}>
              Keep your New Brunswick business technology running smoothly and securely with our comprehensive 
              managed IT services. From network monitoring to personalized phone assistance, we provide end-to-end 
              IT management solutions tailored for Maritime businesses and SMBs.
            </p>
            <div style={{ textAlign: 'center' }}>
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
              }}>Request IT Service Consultation</a>
            </div>
          </div>
        </section>

      {/* Main Services Section */}
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
              Comprehensive Managed IT Solutions
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: colors.text.secondary, 
              maxWidth: '600px', 
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Optimize your IT infrastructure with proactive and fully managed services designed to reduce downtime, improve security, and enhance productivity.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px',
            alignItems: 'stretch'
          }}>
            <div style={{ 
              background: 'white',
              borderRadius: '20px',
              padding: '40px 35px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
              border: `2px solid ${colors.primary}`,
              position: 'relative',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column'
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
                }}>24/7 Network Monitoring</h3>
                <p style={{ 
                  color: colors.primary, 
                  fontWeight: '600',
                  fontSize: '1.1rem'
                }}>Proactive Infrastructure Management</p>
              </div>
              <ul style={{ 
                listStyle: 'none',
                padding: 0,
                marginBottom: '25px'
              }}>
                {[
                  '24/7 network monitoring & management',
                  'Proactive issue detection & resolution',
                  'Real-time alerts & automated fixes',
                  'Server & endpoint monitoring',
                  'Performance optimization',
                  'Network security monitoring',
                  'Infrastructure health reporting'
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
              <div style={{ textAlign: 'center', marginTop: 'auto', paddingTop: '20px' }}>
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
                  Request IT Service Consultation
                </a>
              </div>
            </div>

            <div style={{ 
              background: 'white',
              borderRadius: '20px',
              padding: '40px 35px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
              border: `2px solid ${colors.primary}`,
              position: 'relative',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: '15px'
                }}>📞</div>
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: '700', 
                  color: colors.text.primary, 
                  marginBottom: '8px'
                }}>Personalized Phone Support</h3>
                <p style={{ 
                  color: colors.primary, 
                  fontWeight: '600',
                  fontSize: '1.1rem'
                }}>Direct Client Assistance</p>
              </div>
              <ul style={{ 
                listStyle: 'none',
                padding: 0,
                marginBottom: '25px'
              }}>
                {[
                  'Personalized phone support for critical issues',
                  'Remote & onsite technical support',
                  'Software patch management & updates',
                  'IT asset & inventory management',
                  'Vendor & license management',
                  'Backup, recovery & disaster planning',
                  'IT strategy & planning'
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
              <div style={{ textAlign: 'center', marginTop: 'auto', paddingTop: '20px' }}>
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
                  Get IT Management Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section style={{ backgroundColor: colors.backgrounds.light, padding: '80px 20px' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '30px',
            alignItems: 'stretch'
          }}>
            <div className="service-card" style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px 30px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
              border: `1px solid ${colors.backgrounds.light}`,
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '20px'
              }}>🔍</div>
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '15px'
              }}>Proactive Network & Infrastructure Monitoring</h3>
              <p style={{ 
                color: colors.text.secondary, 
                lineHeight: '1.6',
                fontSize: '1rem'
              }}>
                Our team continuously monitors your network, servers, and endpoints to identify and resolve issues 
                before they impact your business operations. Ensure minimal downtime and peak performance with 
                real-time alerts and automated fixes.
              </p>
            </div>

            <div className="service-card" style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px 30px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
              border: `1px solid ${colors.backgrounds.light}`,
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '20px'
              }}>📞</div>
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '15px'
              }}>Personalized Phone Support & Client Assistance</h3>
              <p style={{ 
                color: colors.text.secondary, 
                lineHeight: '1.6',
                fontSize: '1rem'
              }}>
                We provide dedicated phone support for select clients, assisting with critical hardware, software, 
                and connectivity questions. This tailored assistance ensures timely help when you need it most, 
                offering peace of mind without full help desk coverage.
              </p>
            </div>

            <div className="service-card" style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px 30px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
              border: `1px solid ${colors.backgrounds.light}`,
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '20px'
              }}>🔄</div>
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '15px'
              }}>Software Updates, Patch Management & Security</h3>
              <p style={{ 
                color: colors.text.secondary, 
                lineHeight: '1.6',
                fontSize: '1rem'
              }}>
                We manage regular software updates and patching to protect your systems from vulnerabilities and 
                security risks, maintaining safety and compliance.
              </p>
            </div>

            <div className="service-card" style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px 30px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
              border: `1px solid ${colors.backgrounds.light}`,
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '20px'
              }}>📊</div>
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '15px'
              }}>IT Asset & Vendor Management</h3>
              <p style={{ 
                color: colors.text.secondary, 
                lineHeight: '1.6',
                fontSize: '1rem'
              }}>
                Track and manage your hardware, software licenses, and third-party vendors efficiently, reducing 
                costs and preventing disruptions.
              </p>
            </div>

            <div className="service-card" style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px 30px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
              border: `1px solid ${colors.backgrounds.light}`,
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '20px'
              }}>💾</div>
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '15px'
              }}>Backup & Disaster Recovery</h3>
              <p style={{ 
                color: colors.text.secondary, 
                lineHeight: '1.6',
                fontSize: '1rem'
              }}>
                Implement robust data backup and disaster recovery solutions to ensure business continuity with 
                tested restoration procedures.
              </p>
            </div>

            <div className="service-card" style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px 30px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
              border: `1px solid ${colors.backgrounds.light}`,
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '20px'
              }}>📋</div>
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: '700', 
                color: colors.text.primary,
                marginBottom: '15px'
              }}>IT Strategy & Compliance Guidance</h3>
              <p style={{ 
                color: colors.text.secondary, 
                lineHeight: '1.6',
                fontSize: '1rem'
              }}>
                Partner with us for IT planning aligned with your business goals, compliance requirements, and 
                technology roadmap for future growth.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Industry-Specific Solutions */}
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
              Industry-Specific IT Services
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: colors.text.secondary, 
              maxWidth: '600px', 
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Tailored managed IT solutions for businesses across Maritime sectors
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
                icon: '🏦',
                title: 'Financial Services',
                description: 'Regulatory compliance, data security, and risk management for New Brunswick financial institutions.',
                features: ['Regulatory compliance', 'Data security', 'Risk management', 'Secure communications']
              },
              {
                icon: '🏪',
                title: 'Retail & E-commerce', 
                description: 'Point-of-sale system support, payment security, and network reliability for Maritime retailers.',
                features: ['Point-of-sale support', 'Payment security', 'Network reliability', 'E-commerce platforms']
              },
              {
                icon: '🎓',
                title: 'Education',
                description: 'Network management, student device support, and secure access management for educational institutions.',
                features: ['Network management', 'Device support', 'Access management', 'Educational software']
              },
              {
                icon: '🏭',
                title: 'Manufacturing',
                description: 'Operational technology management, supply chain IT integration, and industrial network security.',
                features: ['OT management', 'Supply chain integration', 'Industrial networks', 'Process optimization']
              },
              {
                icon: '⚖️',
                title: 'Legal & Professional',
                description: 'Data confidentiality, document management, and secure communications for Maritime law firms.',
                features: ['Data confidentiality', 'Document management', 'Secure communications', 'Compliance']
              },
              {
                icon: '🚢',
                title: 'Fisheries & Shipping',
                description: 'Specialized IT solutions supporting maritime logistics and compliance across New Brunswick.',
                features: ['Maritime logistics', 'Compliance systems', 'Fleet management', 'Port operations']
              }
            ].map((industry, index) => (
              <div key={index} style={{ 
                background: 'linear-gradient(135deg, #ffffff 0%, #fafbff 100%)',
                borderRadius: '20px',
                padding: '35px 25px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-30%',
                  right: '-15%',
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(135deg, rgba(29, 122, 175, 0.1) 0%, rgba(30, 64, 175, 0.05) 100%)',
                  borderRadius: '50%',
                  zIndex: 0
                }}></div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ 
                    fontSize: '2.5rem', 
                    marginBottom: '15px',
                    background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>{industry.icon}</div>
                  <h3 style={{ 
                    fontSize: '1.4rem', 
                    fontWeight: '600', 
                    color: '#1f2937', 
                    marginBottom: '12px'
                  }}>{industry.title}</h3>
                  <p style={{ 
                    color: colors.text.secondary, 
                    lineHeight: '1.6',
                    marginBottom: '20px'
                  }}>{industry.description}</p>
                  <ul style={{ 
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {industry.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={{ 
                        padding: '4px 0',
                        fontSize: '0.9rem',
                        color: colors.text.secondary,
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <span style={{ color: '#1d7aaf', marginRight: '8px' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a 
              href="/contact" 
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)',
                color: 'white',
                padding: '20px 50px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1.2rem',
                fontWeight: '600',
                boxShadow: '0 8px 30px rgba(29, 122, 175, 0.4)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 12px 40px rgba(29, 122, 175, 0.5)';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 8px 30px rgba(29, 122, 175, 0.4)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Get IT Management Quote
            </a>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
        <div className="container">
          <h2 className="section-title">Our Managed IT Service Process</h2>
          <div className="process-grid-it" style={{ marginTop: '40px', paddingTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
            <div className="service-card" style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible' }}>
              <div style={{ position: 'absolute', top: '-25px', left: '30px', background: colors.primary, color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: `0 4px 12px ${colors.primary}4D`, zIndex: 10 }}>1</div>
              <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>IT Infrastructure Assessment</h3>
              <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Comprehensive audit identifying gaps, inefficiencies, and security risks in your current IT environment.</p>
            </div>
            
            <div className="service-card" style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible' }}>
              <div style={{ position: 'absolute', top: '-25px', left: '30px', background: colors.accent, color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems:'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: `0 4px 12px ${colors.accent}4D`, zIndex: 10 }}>2</div>
              <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Custom IT Management Plan</h3>
              <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Strategic plan tailored to your business needs, budget, and growth objectives with clear timelines.</p>
            </div>
            
            <div className="service-card" style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible' }}>
              <div style={{ position: 'absolute', top: '-25px', left: '30px', background: colors.secondary, color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: `0 4px 12px ${colors.secondary}4D`, zIndex: 10 }}>3</div>
              <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Implementation & Onboarding</h3>
              <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>Smooth transition with minimal disruption, including setup of monitoring and support systems.</p>
            </div>
            
            <div className="service-card" style={{ position: 'relative', padding: '60px 40px 40px 40px', marginTop: '35px', overflow: 'visible' }}>
              <div style={{ position: 'absolute', top: '-25px', left: '30px', background: colors.primaryDark, color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', boxShadow: `0 4px 12px ${colors.primaryDark}4D`, zIndex: 10 }}>4</div>
              <h3 style={{ color: colors.text.primary, marginBottom: '15px', marginTop: '20px' }}>Ongoing Monitoring & Support</h3>
              <p style={{ color: colors.text.secondary, lineHeight: '1.6' }}>24/7 proactive management, regular reporting, and continuous improvements to optimize performance.</p>
            </div>
          </div>
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 768px) {
            .process-grid-it {
              grid-template-columns: 1fr !important;
            }
          }
        `}} />
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ backgroundColor: colors.backgrounds.light, padding: '80px 20px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
              fontWeight: '700', 
              color: colors.text.primary,
              marginBottom: '20px'
            }}>Managed IT Services FAQ</h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: colors.text.secondary, 
              maxWidth: '600px', 
              margin: '0 auto'
            }}>
              Common questions about our managed IT services and support solutions
            </p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              {
                question: 'What is included in managed IT support?',
                answer: 'Comprehensive network monitoring, personalized phone assistance for critical issues, patch and software management, backup services, and vendor coordination. We provide end-to-end IT management tailored to your business needs.'
              },
              {
                question: 'How quickly can issues be resolved?',
                answer: 'Critical issues receive immediate attention through our 24/7 monitoring system, with rapid response times for phone support clients. Most network issues are resolved proactively before they impact your operations.'
              },
              {
                question: 'Do you assist with IT compliance?',
                answer: 'Yes, we help businesses comply with industry regulations and data security standards. Our team ensures your IT infrastructure meets compliance requirements and helps maintain necessary documentation.'
              },
              {
                question: 'Can you work with my existing IT staff?',
                answer: 'Absolutely. We integrate seamlessly as an extension of your existing team or work independently as your complete IT department. Our approach is flexible and collaborative.'
              },
              {
                question: 'What industries do you serve in New Brunswick?',
                answer: 'We serve Maritime businesses across all sectors including financial services, retail, education, manufacturing, legal, healthcare, and specialized industries like fisheries and shipping.'
              }
            ].map((faq, index) => (
              <div key={index} style={{ 
                background: 'white',
                borderRadius: '15px',
                padding: '30px',
                marginBottom: '20px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: `1px solid ${colors.backgrounds.light}`
              }}>
                <h3 style={{ 
                  color: colors.text.primary, 
                  marginBottom: '15px',
                  fontSize: '1.2rem',
                  fontWeight: '600'
                }}>{faq.question}</h3>
                <p style={{ 
                  color: colors.text.secondary, 
                  lineHeight: '1.7',
                  margin: 0
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
        padding: '80px 20px',
        textAlign: 'center' 
      }}>
        <div className="container">
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            fontWeight: '700', 
            marginBottom: '30px'
          }}>Ready to optimize your IT infrastructure?</h2>
          <p style={{ 
            fontSize: '1.3rem', 
            marginBottom: '40px', 
            maxWidth: '600px', 
            margin: '0 auto 40px auto',
            opacity: 0.9
          }}>
            Let our managed IT services keep your New Brunswick business running smoothly and securely.
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
              Request IT Service Consultation
            </a>
            <a 
              href="/contact" 
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: 'white',
                padding: '18px 40px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.transform = 'translateY(0)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
            >
              Get IT Management Quote
            </a>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
};