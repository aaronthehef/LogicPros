import React, { useEffect, useRef } from 'react';
import '../../../responsive-style.css';
import { Logo } from '../../../components/Logo';
import { Navigation } from '../../../components/Navigation';
import { Animations } from '../../../components/Animations';
import { Footer } from '../../../components/Footer';
import { colors } from '../../../styles/colors';
import { gsap } from 'gsap';

export const MonctonCybersecurityPage = () => {
  const heroRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    // Set up SEO meta tags
    document.title = 'Cybersecurity Services Moncton | IT Security Solutions NB | LogicPros';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional cybersecurity services for Moncton businesses. IT security solutions, threat protection, security audits, and managed security services. Protect your business from cyber threats with expert cybersecurity consulting in New Brunswick.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Professional cybersecurity services for Moncton businesses. IT security solutions, threat protection, security audits, and managed security services. Protect your business from cyber threats with expert cybersecurity consulting in New Brunswick.';
      document.head.appendChild(newMetaDescription);
    }
    
    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "LogicPros - Cybersecurity Services Moncton",
      "description": "Professional cybersecurity and IT security services company serving Moncton, NB",
      "url": "https://logicpros.ca/locations/moncton/cybersecurity",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Moncton",
        "addressRegion": "NB",
        "addressCountry": "CA"
      },
      "serviceArea": "Moncton, New Brunswick",
      "services": [
        "Cybersecurity Services",
        "IT Security Solutions",
        "Security Audits",
        "Threat Protection",
        "Managed Security Services",
        "Security Consulting"
      ]
    };
    
    const structuredDataScript = document.createElement('script');
    structuredDataScript.type = 'application/ld+json';
    structuredDataScript.textContent = JSON.stringify(structuredData);
    document.head.appendChild(structuredDataScript);
    
    // Add necessary styles for buttons and animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float1 {
        0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        33% { transform: translateY(-20px) translateX(10px) rotate(120deg); }
        66% { transform: translateY(10px) translateX(-10px) rotate(240deg); }
      }
      @keyframes float2 {
        0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        50% { transform: translateY(-15px) translateX(15px) rotate(180deg); }
      }
      @keyframes float3 {
        0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        25% { transform: translateY(15px) translateX(-5px) rotate(90deg); }
        75% { transform: translateY(-10px) translateX(5px) rotate(270deg); }
      }
      @keyframes pulse {
        0% { opacity: 0.7; }
        100% { opacity: 1; }
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
        background: linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%) !important;
        color: white !important;
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
        box-shadow: 0 8px 30px rgba(29, 122, 175, 0.5) !important;
        transform: translateY(-3px) !important;
        color: white !important;
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
      .secondary-button[style*="color: white"] {
        color: white !important;
        border-color: white !important;
      }
      .secondary-button[style*="color: white"]:hover {
        box-shadow: 0 8px 25px rgba(255, 255, 255, 0.4) !important;
        border-color: rgba(255, 255, 255, 0.8) !important;
      }
      .cta-buttons {
        text-align: center;
        margin-top: 2rem;
      }
      .cta-buttons a {
        margin: 0 0.5rem;
      }
    `;
    document.head.appendChild(style);

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

    // Hero section animations
    gsap.fromTo('.hero-content', 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
        ease: "power3.out",
        delay: 0.5 
      }
    );

    // Service cards staggered animation
    gsap.fromTo('.service-card', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.8,
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%'
        }
      }
    );

    // Cleanup scroll listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(style);
      document.head.removeChild(structuredDataScript);
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
            <div className="hero-content" style={{ textAlign: 'center', color: 'white' }}>
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
                fontWeight: '900', 
                lineHeight: '1.1', 
                marginBottom: '1rem',
                color: 'white'
              }}>
                Cybersecurity Services Moncton - Protect Your Business from Cyber Threats
              </h1>
              <p style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.3rem)', 
                color: '#e2e8f0', 
                marginBottom: '40px',
                fontWeight: '300',
                maxWidth: '700px',
                margin: '0 auto 40px auto'
              }}>
                Professional cybersecurity solutions for Moncton businesses. Protect your company from cyber threats 
                with comprehensive security audits, IT security consulting, and managed security services. Expert 
                cybersecurity protection for New Brunswick businesses of all sizes.
              </p>
              
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href="/contact" className="hero-button">
                  Request Security Assessment
                </a>
                
                <a href="/contact" className="secondary-button" style={{ borderColor: 'white', color: 'white' }}>
                  Get Cybersecurity Quote
                </a>
              </div>
            </div>
          </div>
        </section>

      {/* Core Cybersecurity Services */}
      <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Enterprise Cybersecurity Services Trusted by Moncton Government & Business Sectors</h2>
            <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '800px', margin: '0 auto' }}>
              Protect your Moncton organization from evolving cyber threats with comprehensive cybersecurity solutions. 
              Our certified IT security specialists deliver managed security services, regulatory compliance support, and 24/7 
              Security Operations Center monitoring. Mission-critical protection engineered specifically for New Brunswick's 
              Hub City ensures your business remains secure and resilient.
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
              border: '2px solid rgba(29, 122, 175, 0.1)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 8px 32px rgba(29, 122, 175, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              <div className="service-icon" style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #1d7aaf, #1e40af)',
                borderRadius: '20px',
                boxShadow: '0 8px 25px rgba(29, 122, 175, 0.3)',
                transition: 'all 0.3s ease'
              }}>🔒</div>
              <h3>Security Audits & Risk Assessment</h3>
              <p>
                Identify vulnerabilities before attackers do with our thorough security audits and risk assessments. Using 
                industry-leading tools and expert analysis, we evaluate your IT infrastructure, applications, and policies to 
                pinpoint weaknesses and recommend actionable plans. Our services help Moncton businesses strengthen 
                defenses, meet regulatory requirements like PIPEDA, and reduce risk proactively.
              </p>
              <ul className="service-benefits">
                <li>Vulnerability scanning and penetration testing</li>
                <li>Network architecture evaluation</li>
                <li>Compliance gap analysis and remediation roadmaps</li>
                <li>Risk prioritization aligned with business impact</li>
              </ul>
            </div>


            {/* SEO & Digital Marketing */}
            <div className="service-card professional-card" style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
              border: '2px solid rgba(29, 122, 175, 0.1)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 8px 32px rgba(29, 122, 175, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              <div className="service-icon" style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #1d7aaf, #1e40af)',
                borderRadius: '20px',
                boxShadow: '0 8px 25px rgba(29, 122, 175, 0.3)',
                transition: 'all 0.3s ease',
                color: 'white'
              }}>🔐</div>
              <h3><a href="/services/multi-factor-authentication" style={{color: colors.text.primary, textDecoration: 'none'}}>Identity & Access Management</a></h3>
              <p>
                Secure your critical business assets with advanced identity and access controls. We implement multi-factor 
                authentication, role-based access policies, and secure single sign-on, designed to prevent unauthorized 
                breaches and safeguard sensitive data. Our solutions are tailored to Moncton businesses needing robust 
                protection while maintaining user productivity.
              </p>
              <ul className="service-benefits">
                <li>Adaptive multi-factor authentication setups</li>
                <li>Privileged access management</li>
                <li>Identity federation and streamlined access</li>
                <li>Continuous monitoring for insider threats</li>
              </ul>
            </div>


            {/* Website Maintenance */}
            <div className="service-card professional-card" style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
              border: '2px solid rgba(29, 122, 175, 0.1)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 8px 32px rgba(29, 122, 175, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              <div className="service-icon" style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #1d7aaf, #1e40af)',
                borderRadius: '20px',
                boxShadow: '0 8px 25px rgba(29, 122, 175, 0.3)',
                transition: 'all 0.3s ease',
                color: 'white'
              }}>🛡️</div>
              <h3>Managed Security Operations Center (SOC) Services</h3>
              <p>
                Our 24/7 SOC provides continuous monitoring and rapid incident response to detect, analyze, and remediate 
                threats before they impact your business. Leveraging artificial intelligence and expert threat hunting, we 
                deliver real-time defense and ongoing security improvements. Trusted by New Brunswick's critical infrastructure, 
                our SOC helps Moncton organizations maintain uninterrupted operations.
              </p>
              <ul className="service-benefits">
                <li>AI-driven threat detection and anomaly analysis</li>
                <li>Rapid incident containment and forensic investigation</li>
                <li>Endpoint detection and response (EDR)</li>
                <li>Security automation and strategic consulting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Grant Funding Information */}
      <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Cybersecurity Grant Funding Available</h2>
          </div>
          
          <div className="service-card" style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
            border: '2px solid rgba(29, 122, 175, 0.1)',
            borderRadius: '16px',
            padding: '2.5rem',
            boxShadow: '0 8px 32px rgba(29, 122, 175, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            
            <div style={{ position: 'relative', zIndex: 2 }}>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Many New Brunswick small and medium-sized businesses can access <strong style={{color: colors.primary}}>up to $3,000 in fully reimbursed funding</strong> for 
                cybersecurity and AI projects through the provincial <strong style={{color: colors.primary}}>Cybersecure NB program</strong>.
              </p>
              
              <p style={{ fontSize: '1rem', color: colors.text.secondary, lineHeight: '1.6', marginBottom: '2rem' }}>
                For full eligibility details, application instructions, and program guidelines, please visit the official 
                Cybersecure New Brunswick program page.
              </p>
              
              <a 
                href="https://www.cbdc.ca/en/programs/cybersecure-new-brunswick" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-button"
                style={{ display: 'inline-block', textDecoration: 'none' }}
              >
                View Cybersecure NB Program Details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Web Design Company */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Moncton's Most Critical Organizations Trust Our Cybersecurity Leadership</h2>
            <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '900px', margin: '0 auto' }}>
              Government-grade expertise meets mission-critical cybersecurity excellence. Our IT security consulting Moncton 
              specialists deliver battle-tested solutions forged in the highest-stakes environments. From transportation hubs 
              to financial institutions and logistics networks, we architect uncompromising security frameworks 
              that have never been successfully breached. When failure is not an option, Moncton chooses proven cybersecurity leadership.
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
              <div style={{fontSize: '3rem', marginBottom: '1rem', textAlign: 'center'}}>🏆</div>
              <h3 style={{color: colors.primary, marginBottom: '1rem', textAlign: 'center'}}>Local Cybersecurity Expertise</h3>
              <p style={{color: colors.text.secondary, lineHeight: '1.6', textAlign: 'center'}}>
                Deep understanding of New Brunswick's business landscape and regulatory environment. Our cybersecurity 
                services Moncton team knows local compliance requirements, regional threat patterns, and industry 
                challenges. We provide personalized security consulting with rapid on-site response when you need it most.
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
              <div style={{fontSize: '3rem', marginBottom: '1rem', textAlign: 'center'}}>💰</div>
              <h3 style={{color: colors.primary, marginBottom: '1rem', textAlign: 'center'}}>Scalable Security Solutions</h3>
              <p style={{color: colors.text.secondary, lineHeight: '1.6', textAlign: 'center'}}>
                From startups to established enterprises, our cybersecurity solutions scale with your business. 
                Affordable managed security services New Brunswick small businesses can afford, with the flexibility 
                to expand protection as you grow. Transparent pricing, no long-term contracts, measurable results.
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
              <div style={{fontSize: '3rem', marginBottom: '1rem', textAlign: 'center'}}>🔄</div>
              <h3 style={{color: colors.primary, marginBottom: '1rem', textAlign: 'center'}}>Proven Incident Response</h3>
              <p style={{color: colors.text.secondary, lineHeight: '1.6', textAlign: 'center'}}>
                When security incidents occur, response time is critical. Our cybersecurity team provides 
                15-minute incident response, complete forensics, and business continuity support. Proven track 
                record helping Moncton businesses recover quickly and strengthen defenses after attacks.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Areas We Serve */}
      <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
        <div className="container">
          <h2 className="section-title">Cybersecurity Services Throughout Greater Moncton</h2>
          
          <div className="services-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1400px',
            margin: '2rem auto 0'
          }}>
            <div className="service-card" style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.3s ease'
            }}>
              <h4>📍 Downtown Moncton</h4>
              <p>
                Transportation hub, logistics companies, and financial institutions requiring high-security standards. 
                Specialized cybersecurity services Moncton downtown businesses trust, including Main Street financial 
                services, logistics operations, and professional offices serving Atlantic Canada.
              </p>
            </div>
            
            <div className="service-card" style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.3s ease'
            }}>
              <h4>📍 Dieppe & Riverview</h4>
              <p>
                Growing suburban communities with technology companies, healthcare facilities, and service businesses. 
                Comprehensive IT security consulting Moncton region businesses need to protect operations 
                and customer data from cyber threats targeting the Greater Moncton Area.
              </p>
            </div>
            
            <div className="service-card" style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.3s ease'
            }}>
              <h4>📍 Westmorland County Industrial</h4>
              <p>
                Manufacturing, energy, and transportation businesses throughout Petitcodiac, Salisbury, 
                and Sackville. Managed security services New Brunswick industrial sector businesses require, including 
                supply chain protection and operational technology cybersecurity for critical infrastructure.
              </p>
            </div>
            
            <div className="service-card" style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.3s ease'
            }}>
              <h4>📍 Shediac & Coastal Communities</h4>
              <p>
                Tourism, hospitality, and seasonal businesses requiring flexible cybersecurity protection. 
                Small business managed security services protecting customer payment data, booking systems, 
                and seasonal operational continuity against targeted attacks on tourism infrastructure.
              </p>
            </div>
            
            <div className="service-card" style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.3s ease'
            }}>
              <h4>📍 Albert County & Sussex Area</h4>
              <p>
                Agricultural businesses, rural contractors, and service providers requiring remote cybersecurity 
                monitoring. Specialized in protecting agricultural operations, forestry companies, and rural 
                infrastructure against ransomware and supply chain attacks.
              </p>
            </div>
            
            <div className="service-card" style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.3s ease'
            }}>
              <h4>📍 Kent County & Richibucto</h4>
              <p>
                Rural professionals, contractors, and service businesses requiring secure remote work capabilities. 
                Comprehensive cybersecurity solutions protecting home-based professionals, small contractors, and 
                coastal service providers with cloud security, VPN management, and endpoint protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Moncton Business Focus */}
      <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
        <div className="container">
          <h2 className="section-title">Mission-Critical Cybersecurity Solutions for Moncton's High-Stakes Industries</h2>
          
          <div className="industries-content">
            <div className="industries-text">
              <h3>🚛 Transportation & Logistics Cybersecurity Hub</h3>
              <p>
                Securing Atlantic Canada's transportation gateway with specialized logistics cybersecurity solutions. Our certified 
                security architects protect trucking companies, rail operations, distribution centers, and supply chain management 
                systems. Advanced cargo tracking security, fleet management protection, cross-border data compliance, and 
                just-in-time delivery system hardening. Zero-downtime security for operations where delays cost millions.
              </p>
              
              <h3>⚖️ Financial Services & Professional Protection</h3>
              <p>
                Banking confidentiality and financial data demand bulletproof security. Our financial technology 
                specialists architect security frameworks for Moncton's credit unions, investment firms, insurance 
                companies, and accounting practices. Specialized in payment card security, anti-fraud systems, 
                PCI DSS compliance, and regulatory compliance across multiple jurisdictions including PIPEDA and FINTRAC requirements.
              </p>
              
              <h3>🏭 Energy & Industrial Control Systems</h3>
              <p>
                Moncton's energy infrastructure, manufacturing plants, and industrial facilities represent high-value targets 
                for cyberattacks. Our industrial cybersecurity specialists deploy SCADA security, industrial control system 
                hardening, and operational technology (OT) network segregation. Advanced persistent threat (APT) detection, 
                zero-trust architecture, and incident response specifically designed for critical infrastructure resilience.
              </p>
              
              <h3>🎓 Education & Healthcare Technology Security</h3>
              <p>
                Université de Moncton, Crandall University, and regional healthcare facilities require specialized protection 
                for sensitive research and patient data. Our education and healthcare cybersecurity specialists secure 
                student information systems, research databases, medical records, and collaborative platforms. Specialized 
                in protecting international partnerships, research IP, and maintaining regulatory compliance while preventing data breaches.
              </p>
            </div>
            
            <div className="industries-stats">
              <div className="stat-item">
                <h4>71,000+</h4>
                <p>Moncton residents</p>
              </div>
              <div className="stat-item">
                <h4>150,000+</h4>
                <p>Greater Moncton area population</p>
              </div>
              <div className="stat-item">
                <h4>Hub City</h4>
                <p>Atlantic Canada transportation center</p>
              </div>
              <div className="stat-item">
                <h4>3 Universities</h4>
                <p>UdeM, Crandall & NBCC driving innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

        
      {/* Service Areas & Specializations */}
      <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
        <div className="container">
          {/* Service Coverage Areas */}
          <div style={{marginTop: '3rem'}}>
            <h3 style={{color: colors.primary, marginBottom: '1.5rem', textAlign: 'center', fontSize: '1.5rem'}}>Cybersecurity Company Serving Greater Moncton</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              textAlign: 'center'
            }}>
              {[
                'Downtown Moncton',
                'Dieppe',
                'Riverview', 
                'Shediac',
                'Petitcodiac',
                'Salisbury',
                'Sussex',
                'Sackville',
                'Hillsborough',
                'Alma',
                'Richibucto',
                'Bouctouche'
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
            }}>Professional cybersecurity services Moncton businesses trust throughout Westmorland, Albert, and Kent Counties and the greater Hub City region.</p>
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Leading Cybersecurity Provider Moncton</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Professional cybersecurity services, comprehensive security audits, and enterprise-grade 
                IT security solutions for businesses throughout Moncton and New Brunswick.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="hero-button" style={{ backgroundColor: 'white', color: '#000' }}>
                Get Security Assessment
              </a>
              <a href="/contact" className="secondary-button" style={{ borderColor: 'white', color: 'white' }}>
                Get Cybersecurity Quote
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};