import React, { useEffect, useRef } from 'react';
import '../../../responsive-style.css';
import { Logo } from '../../../components/Logo';
import { Navigation } from '../../../components/Navigation';
import { Animations } from '../../../components/Animations';
import { Footer } from '../../../components/Footer';
import { colors } from '../../../styles/colors';
import { gsap } from 'gsap';

export const MonctonWebDesignPage = () => {
  const heroRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    // Set up SEO meta tags
    document.title = 'Web Design Moncton | Professional Website Designer NB | LogicPros';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Need a professional website for your Moncton business? Affordable web design for contractors, tradespeople & small businesses. Custom WordPress websites, local SEO services & mobile-responsive design that gets you more customers. Free quotes available.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Need a professional website for your Moncton business? Affordable web design for contractors, tradespeople & small businesses. Custom WordPress websites, local SEO services & mobile-responsive design that gets you more customers. Free quotes available.';
      document.head.appendChild(newMetaDescription);
    }
    
    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "LogicPros - Web Design Moncton",
      "description": "Professional website designer and web development company serving Moncton, NB",
      "url": "https://logicpros.ca/locations/fredericton",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Moncton",
        "addressRegion": "NB",
        "addressCountry": "CA"
      },
      "serviceArea": "Moncton, New Brunswick",
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
      /* White secondary button styling for dark backgrounds */
      .secondary-button[style*="color: white"] {
        color: white !important;
        border-color: white !important;
      }
      .secondary-button[style*="color: white"]:hover {
        box-shadow: 0 8px 25px rgba(255, 255, 255, 0.4) !important;
        border-color: rgba(255, 255, 255, 0.8) !important;
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
                Need a Website? Moncton's Top Web Designer for Contractors & Small Business
              </h1>
              <p style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.3rem)', 
                color: '#e2e8f0', 
                marginBottom: '40px',
                fontWeight: '300',
                maxWidth: '700px',
                margin: '0 auto 40px auto'
              }}>
                Professional websites that get you more customers. Affordable web design Moncton contractors 
                and small businesses trust. Custom WordPress websites, local SEO services, and mobile-responsive 
                design that works 24/7 to grow your business in Moncton and surrounding areas.
              </p>
              
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href="/free-example" className="hero-button">
                  Get Your FREE Website Example
                </a>
                
                <a href="/contact" className="secondary-button" style={{ borderColor: 'white', color: 'white' }}>
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Local Services */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Get More Customers in Moncton, Dieppe & Riverview with Professional Web Design</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto' }}>
                Your business needs a website that works as hard as you do. Our professional web design services in Moncton 
                help contractors, tradespeople, and small businesses get found online and convert visitors into 
                paying customers. Professional websites that actually drive business growth.
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
                }}>🌐</div>
                <h3>Websites That Get More Jobs</h3>
                <p>
                  Stop losing customers to competitors with better websites. Our affordable web design services create professional WordPress websites that showcase your work, build trust, and generate leads 24/7. Perfect for contractors, tradespeople, and service businesses in Moncton.
                </p>
                <ul className="service-benefits">
                  <li>Local SEO services to get found in Moncton searches</li>
                  <li>Mobile-responsive website design</li>
                  <li>Custom WordPress development</li>
                  <li>Expert copywriting and content creation</li>
                  <li>Fast 2-4 week website development timeline</li>
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
                }}>🎯</div>
                <h3><a href="/services/seo" style={{color: colors.text.primary, textDecoration: 'none'}}>SEO Services in Moncton</a></h3>
                <p>
                  Trusted SEO and digital marketing tailored for Moncton businesses. Combining local expertise with proven strategies, we help you climb search rankings and attract more customers.
                </p>
                <ul className="service-benefits">
                  <li>Local SEO optimization for Moncton searches</li>
                  <li>Google My Business management</li>
                  <li>Content marketing and blogging</li>
                  <li>Social media integration</li>
                  <li>Analytics and performance tracking</li>
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
                }}>🔧</div>
                <h3>Website Maintenance for Moncton Businesses</h3>
                <p>
                  Our ongoing website maintenance keeps your Moncton business site secure, updated, and running smoothly. With regular backups, security patches, and content updates, you'll never miss an opportunity.
                </p>
                <ul className="service-benefits">
                  <li>Timely WordPress and plugin updates</li>
                  <li>Security monitoring and malware protection</li>
                  <li>Speed testing and performance optimization</li>
                  <li>Content edits and updates as needed</li>
                  <li>Monthly site health reports</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Web Design Company */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why Moncton Contractors Choose Us for Web Design</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '800px', margin: '0 auto' }}>
                We understand your business. As the leading web design company Moncton contractors trust, 
                we know what works for trades and service businesses. No generic templates - just websites 
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
                <div style={{fontSize: '3rem', marginBottom: '1rem', textAlign: 'center'}}>🏆</div>
                <h3 style={{color: colors.primary, marginBottom: '1rem', textAlign: 'center'}}>Built for Your Industry</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6', textAlign: 'center'}}>
                  We specialize in websites for contractors and service businesses. Our website designer 
                  team knows what your customers in Moncton want to see - licenses, insurance, testimonials, 
                  and clear contact information that builds trust.
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
                <h3 style={{color: colors.primary, marginBottom: '1rem', textAlign: 'center'}}>Affordable for Small Business</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6', textAlign: 'center'}}>
                  Professional websites shouldn't cost a fortune. Our affordable web design 
                  packages are designed for contractors and small businesses in Moncton. Quality custom web design 
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
                <div style={{fontSize: '3rem', marginBottom: '1rem', textAlign: 'center'}}>📱</div>
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
            <h2 className="section-title">Web Design Services Throughout Greater Moncton</h2>
            
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
                <h4>📍 Moncton</h4>
                <p>
                  Professional website design for downtown Moncton businesses, commercial districts, and the growing tech sector. 
                  Custom web development helping local businesses attract customers and grow online.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease'
              }}>
                <h4>📍 Dieppe</h4>
                <p>
                  Affordable web design for Dieppe's growing business community. Home to Champlain Place mall 
                  and many retail, service, and professional businesses serving the Greater Moncton area.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease'
              }}>
                <h4>📍 Riverview</h4>
                <p>
                  Local web designer serving Riverview's residential and business community. 
                  Professional websites for service providers, contractors, and retailers in this growing town.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease'
              }}>
                <h4>📍 Shediac</h4>
                <p>
                  Website development for Shediac's tourism and seafood industry businesses. 
                  Mobile-responsive websites perfect for restaurants, hotels, and seasonal businesses serving visitors.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease'
              }}>
                <h4>📍 Salisbury & Petitcodiac</h4>
                <p>
                  Rural contractors and agricultural businesses throughout Westmorland County. 
                  Professional websites for farming operations, agricultural services, and small town businesses.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease'
              }}>
                <h4>📍 Sackville & Area</h4>
                <p>
                  University town businesses and professional services serving Mount Allison University community. 
                  Websites for retail, restaurants, and academic-related businesses in this historic border town.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Moncton Business Focus */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <h2 className="section-title">Industries We Serve in Moncton</h2>
            
            <div className="industries-content">
              <div className="industries-text">
                <h3>Gaming & Technology</h3>
                <p>
                  As Atlantic Canada's tech hub, Moncton is home to gaming companies, ICT firms, and technology startups. 
                  With Université de Moncton fostering innovation, we help gaming companies, software developers, and tech businesses establish strong online presences 
                  and showcase their innovations with professional websites.
                </p>
                
                <h3>Construction & Home Services</h3>
                <p>
                  Greater Moncton's rapid growth as Canada's fastest-growing CMA creates consistent demand for contractors. We specialize in 
                  websites for plumbers, electricians, HVAC technicians, roofers, and general contractors serving 
                  Moncton, Dieppe, and Riverview.
                </p>
                
                <h3>Manufacturing & Distribution</h3>
                <p>
                  Major companies like Irving, Cavendish Farms, and Kent Building Supplies call Moncton home. We provide 
                  professional websites for manufacturing, distribution, and logistics companies throughout the region.
                </p>
                
                <h3>Tourism & Hospitality</h3>
                <p>
                  From Shediac's lobster festivals to Greater Moncton's attractions, tourism is vital to the region. We help hotels, restaurants, and tourism businesses throughout 
                  Moncton benefit from our HIPAA-compliant IT solutions and professional website designs.
                </p>
              </div>
              
              <div className="industries-stats">
                <div className="stat-item">
                  <h4>79,000+</h4>
                  <p>Moncton residents</p>
                </div>
                <div className="stat-item">
                  <h4>188,000+</h4>
                  <p>Greater Moncton area population</p>
                </div>
                <div className="stat-item">
                  <h4>Fastest Growing CMA</h4>
                  <p>5.1% growth rate in Canada</p>
                </div>
                <div className="stat-item">
                  <h4>Université de Moncton</h4>
                  <p>Major francophone university</p>
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
                No surprises, no delays. Our website development Moncton process is designed for busy 
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
              <div className="service-card" style={{
                position: 'relative',
                padding: '60px 40px 40px 40px',
                marginTop: '35px',
                overflow: 'visible',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-25px',
                  left: '30px',
                  background: colors.primary,
                  color: 'white',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 12px rgba(26, 121, 175, 0.3)',
                  zIndex: 10
                }}>1</div>
                <h3 style={{color: colors.primary, marginBottom: '1rem'}}>Understanding Your Business</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  We start by learning about your services, target customers, and what makes your 
                  Moncton business unique. Then we plan a website that showcases your strengths 
                  and attracts the right customers.
                </p>
              </div>
              
              <div className="service-card" style={{
                position: 'relative',
                padding: '60px 40px 40px 40px',
                marginTop: '35px',
                overflow: 'visible',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-25px',
                  left: '30px',
                  background: colors.accent,
                  color: 'white',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)',
                  zIndex: 10
                }}>2</div>
                <h3 style={{color: colors.primary, marginBottom: '1rem'}}>Building Your Professional Website</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  We create your custom WordPress website with professional photos, compelling content, 
                  and mobile-responsive design. Every website includes contact forms, service pages, 
                  and SEO optimization to help customers find you.
                </p>
              </div>
              
              <div className="service-card" style={{
                position: 'relative',
                padding: '60px 40px 40px 40px',
                marginTop: '35px',
                overflow: 'visible',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-25px',
                  left: '30px',
                  background: colors.secondary,
                  color: 'white',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 12px rgba(49, 66, 81, 0.3)',
                  zIndex: 10
                }}>3</div>
                <h3 style={{color: colors.primary, marginBottom: '1rem'}}>Testing & Launch</h3>
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
            <h2 className="section-title">Get Found by Customers Searching in Moncton</h2>
            
            <div className="services-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
                <div style={{fontSize: '3rem', marginBottom: '1rem', textAlign: 'center'}}>📱</div>
                <h3 style={{color: colors.primary, marginBottom: '1rem', textAlign: 'center'}}>Show Up When Customers Search</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  When Moncton residents search for "plumber near me" or "roofing contractor Moncton," 
                  you want to be found first. Our SEO services Moncton help your business appear at the top 
                  of search results when customers need your services.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <div style={{fontSize: '3rem', marginBottom: '1rem', textAlign: 'center'}}>🎯</div>
                <h3 style={{color: colors.primary, marginBottom: '1rem', textAlign: 'center'}}>Online Marketing That Works</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  Beyond just web design, we help promote your business online. Our digital marketing Moncton 
                  services include Google My Business optimization, social media setup, and review management 
                  to build your reputation and attract more customers.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <div style={{fontSize: '3rem', marginBottom: '1rem', textAlign: 'center'}}>🏆</div>
                <h3 style={{color: colors.primary, marginBottom: '1rem', textAlign: 'center'}}>Competitive Advantage</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  Many Moncton small businesses lack professional web presence. Our custom web design 
                  and SEO services give you a significant advantage over competitors still relying on word-of-mouth.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <div style={{fontSize: '3rem', marginBottom: '1rem', textAlign: 'center'}}>📊</div>
                <h3 style={{color: colors.primary, marginBottom: '1rem', textAlign: 'center'}}>Analytics & Reporting</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  Track exactly how many Moncton customers find your business online through detailed 
                  analytics and reporting. Measure ROI from your website investment with transparent metrics.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <div style={{fontSize: '3rem', marginBottom: '1rem', textAlign: 'center'}}>⚡</div>
                <h3 style={{color: colors.primary, marginBottom: '1rem', textAlign: 'center'}}>Fast, Responsive Websites</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  Every mobile website we develop loads quickly and performs perfectly on all devices. 
                  Professional website development with focus on speed and user experience optimization.
                </p>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <div style={{fontSize: '3rem', marginBottom: '1rem', textAlign: 'center'}}>🛡️</div>
                <h3 style={{color: colors.primary, marginBottom: '1rem', textAlign: 'center'}}>Security & Maintenance</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  Comprehensive website maintenance Moncton services including security monitoring, 
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
              <h2 className="section-title">What Your Moncton Business Website Includes</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto' }}>
                Every custom web design Moncton project includes essential features that help contractors 
                and small businesses get found online and convert visitors into customers.
              </p>
            </div>
            
            <div className="services-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
                <div style={{fontSize: '3rem', marginBottom: '1rem', textAlign: 'center'}}>📱</div>
                <h3 style={{color: colors.primary, marginBottom: '1rem', textAlign: 'center'}}>Mobile Website Optimization</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  Your mobile website Moncton customers will love. Every site is fully responsive and 
                  loads fast on smartphones - critical since 70% of local searches happen on mobile devices.
                </p>
                <ul style={{color: colors.text.secondary, marginTop: '1rem', paddingLeft: '1rem'}}>
                  <li>Fast loading on all mobile devices</li>
                  <li>Easy-to-tap phone and email buttons</li>
                  <li>Mobile-friendly contact forms</li>
                  <li>Google mobile-first indexing ready</li>
                </ul>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <div style={{fontSize: '3rem', marginBottom: '1rem', textAlign: 'center'}}>🌟</div>
                <h3 style={{color: colors.primary, marginBottom: '1rem', textAlign: 'center'}}>WordPress Website Development</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  Professional WordPress website Moncton businesses trust. Easy to update, secure, 
                  and built with the world's most popular website platform that powers 40% of the internet.
                </p>
                <ul style={{color: colors.text.secondary, marginTop: '1rem', paddingLeft: '1rem'}}>
                  <li>Easy content management system</li>
                  <li>Regular security updates included</li>
                  <li>Professional themes and plugins</li>
                  <li>Search engine optimized structure</li>
                </ul>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <div style={{fontSize: '3rem', marginBottom: '1rem', textAlign: 'center'}}>🎯</div>
                <h3 style={{color: colors.primary, marginBottom: '1rem', textAlign: 'center'}}>Local SEO Optimization</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  Every website includes comprehensive SEO services Moncton businesses need to get 
                  found by local customers. We optimize for location-based searches that drive real business.
                </p>
                <ul style={{color: colors.text.secondary, marginTop: '1rem', paddingLeft: '1rem'}}>
                  <li>Google My Business integration</li>
                  <li>Local keyword optimization</li>
                  <li>Moncton location pages</li>
                  <li>Review system integration</li>
                </ul>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <div style={{fontSize: '3rem', marginBottom: '1rem', textAlign: 'center'}}>💬</div>
                <h3 style={{color: colors.primary, marginBottom: '1rem', textAlign: 'center'}}>Lead Generation Tools</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  Built-in tools to capture more leads from your website visitors. Contact forms, quote 
                  request systems, and call-to-action buttons that convert browsers into customers.
                </p>
                <ul style={{color: colors.text.secondary, marginTop: '1rem', paddingLeft: '1rem'}}>
                  <li>Custom contact and quote forms</li>
                  <li>Prominent phone number display</li>
                  <li>Service area optimization</li>
                  <li>Emergency contact features</li>
                </ul>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <div style={{fontSize: '3rem', marginBottom: '1rem', textAlign: 'center'}}>🛡️</div>
                <h3 style={{color: colors.primary, marginBottom: '1rem', textAlign: 'center'}}>Security & Reliability</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  Your business website stays secure and online 24/7. Professional hosting, SSL certificates, 
                  regular backups, and security monitoring included with every project.
                </p>
                <ul style={{color: colors.text.secondary, marginTop: '1rem', paddingLeft: '1rem'}}>
                  <li>SSL security certificates</li>
                  <li>Regular automated backups</li>
                  <li>99.9% uptime guarantee</li>
                  <li>Malware protection included</li>
                </ul>
              </div>
              
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <div style={{fontSize: '3rem', marginBottom: '1rem', textAlign: 'center'}}>📊</div>
                <h3 style={{color: colors.primary, marginBottom: '1rem', textAlign: 'center'}}>Performance Tracking</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  See exactly how your website investment is paying off. Google Analytics setup, 
                  monthly reports, and performance monitoring to track leads and customer inquiries.
                </p>
                <ul style={{color: colors.text.secondary, marginTop: '1rem', paddingLeft: '1rem'}}>
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
              <h2 className="section-title">Keep your website running smoothly with our comprehensive website maintenance services in Moncton</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto' }}>
                Your business depends on your website working 24/7. Our website maintenance Moncton 
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
                <a href="/contact" className="hero-button">Get Maintenance Quote</a>
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
                  <small style={{color: colors.text.secondary}}>Affordable website maintenance for Moncton businesses</small>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Getting Started */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <h2 className="section-title">Get Started With Professional Web Design Moncton</h2>
            
            <div className="getting-started-content">
              <div className="steps-content">
                <h3>Three Ways to Get Started:</h3>
                
                <div className="start-option">
                  <h4>Free Custom Web Design Example</h4>
                  <p>
                    See exactly how your professional website will look before you invest. Our web design company 
                    creates a custom sample page showcasing your Moncton business - completely free with no obligation.
                  </p>
                  <a href="/free-example" className="hero-button">Get Free Website Example</a>
                </div>
                
                <div className="start-option">
                  <h4>Web Design Consultation</h4>
                  <p>
                    Free strategy session with our experienced website designer Moncton team. Discuss your 
                    business goals and get expert recommendations for affordable web design solutions.
                  </p>
                  <a href="/contact" className="hero-button">Schedule Free Consultation</a>
                </div>
                
                <div className="start-option">
                  <h4>Custom Quote for Your Project</h4>
                  <p>
                    Get a detailed, transparent quote for professional web development, SEO services, 
                    or digital marketing. Local web designer pricing with no hidden fees.
                  </p>
                  <a href="/contact" className="hero-button">Request Custom Quote</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Comprehensive FAQ for Contractors */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Common Questions About Web Design Moncton Services</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto' }}>
                Get answers to the most common questions contractors and small business owners ask 
                about professional web design, SEO services, and website development in Moncton.
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
                <h3 style={{color: colors.primary, marginBottom: '1rem'}}>How much does web design cost in Moncton?</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  Our affordable web design Moncton services offer competitive pricing for a professional small business 
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
                <h3 style={{color: colors.primary, marginBottom: '1rem'}}>Do I need SEO services for my Moncton business?</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  Absolutely! Local SEO services help your business show up when Moncton customers search 
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
                  Most professional web design Moncton projects take 2-4 weeks from start to launch. 
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
                  Moncton development gives you an easy-to-update site that's secure, SEO-friendly, and 
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
                  Yes! Our website maintenance Moncton services include security updates, backups, 
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
                <h3 style={{color: colors.primary, marginBottom: '1rem'}}>How do I choose a web design company in Moncton?</h3>
                <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>
                  Look for a local web designer Moncton with experience in your industry, transparent 
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
                  Absolutely! Our digital marketing Moncton services include Google My Business optimization, 
                  online review management, social media setup, and local SEO. We help you get found online 
                  and build a strong reputation in the Moncton market.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Service Areas & Specializations */}
        <section className="section" style={{ backgroundColor: colors.backgrounds.light }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Professional Web Design Company Moncton - Full Service Solutions</h2>
              <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '800px', margin: '0 auto' }}>
                From custom web design to comprehensive digital marketing Moncton businesses rely on us 
                for complete online solutions. Our web development company serves contractors, professionals, 
                and small businesses throughout the greater Moncton area.
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
                <h3 style={{color: colors.primary, marginBottom: '1.5rem', fontSize: '1.5rem'}}>Our Web Design Moncton Specializations:</h3>
                <div style={{marginBottom: '2rem'}}>
                  <h4 style={{color: colors.text.primary, marginBottom: '0.8rem', fontSize: '1.2rem'}}>🏢 Small Business Website Moncton</h4>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6', marginBottom: '1.5rem'}}>Professional websites designed specifically for Moncton small businesses. Our local web designer team understands what works in the Maritime market.</p>
                  
                  <h4 style={{color: colors.text.primary, marginBottom: '0.8rem', fontSize: '1.2rem'}}>🔧 Contractor Web Development</h4>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6', marginBottom: '1.5rem'}}>Custom web design for plumbers, electricians, HVAC technicians, roofers, and construction companies throughout Moncton and surrounding areas.</p>
                  
                  <h4 style={{color: colors.text.primary, marginBottom: '0.8rem', fontSize: '1.2rem'}}>🌟 WordPress Website Moncton Development</h4>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6', marginBottom: '1.5rem'}}>Professional WordPress development with easy content management, security features, and SEO optimization built-in from day one.</p>
                  
                  <h4 style={{color: colors.text.primary, marginBottom: '0.8rem', fontSize: '1.2rem'}}>📱 Mobile Website Optimization</h4>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>Every website is fully mobile-responsive and optimized for smartphones - critical for local businesses since most customers search on mobile devices.</p>
                </div>
              </div>
              
              <div>
                <h3 style={{color: colors.primary, marginBottom: '1.5rem', fontSize: '1.5rem'}}>Complete Online Marketing Services:</h3>
                <div style={{marginBottom: '2rem'}}>
                  <h4 style={{color: colors.text.primary, marginBottom: '0.8rem', fontSize: '1.2rem'}}>🎯 SEO Services Moncton</h4>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6', marginBottom: '1.5rem'}}>Local search engine optimization to help your business appear first when Moncton customers search for your services online.</p>
                  
                  <h4 style={{color: colors.text.primary, marginBottom: '0.8rem', fontSize: '1.2rem'}}>📊 Digital Marketing Moncton</h4>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6', marginBottom: '1.5rem'}}>Comprehensive online marketing including Google My Business optimization, review management, and social media integration.</p>
                  
                  <h4 style={{color: colors.text.primary, marginBottom: '0.8rem', fontSize: '1.2rem'}}>🛠️ Website Maintenance Moncton</h4>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6', marginBottom: '1.5rem'}}>Ongoing website maintenance to keep your site secure, updated, and performing optimally for your customers.</p>
                  
                  <h4 style={{color: colors.text.primary, marginBottom: '0.8rem', fontSize: '1.2rem'}}>🎨 Custom Web Design Solutions</h4>
                  <p style={{color: colors.text.secondary, lineHeight: '1.6'}}>No templates or cookie-cutter designs. Every custom web design project is tailored specifically for your Moncton business and industry.</p>
                </div>
              </div>
            </div>
            
            {/* Centered Ready to Get Started */}
            <div style={{marginTop: '3rem', display: 'flex', justifyContent: 'center'}}>
              <div className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '2px solid ' + colors.primary,
                textAlign: 'center',
                maxWidth: '500px',
                width: '100%'
              }}>
                <h4 style={{color: colors.primary, marginBottom: '1rem'}}>Ready to Get Started?</h4>
                <p style={{color: colors.text.secondary, marginBottom: '1.5rem', lineHeight: '1.6'}}>Contact our local web designer Moncton team for a free consultation and custom quote.</p>
                <div style={{display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap'}}>
                  <a href="/contact" className="hero-button" style={{fontSize: '1rem', padding: '12px 24px'}}>Get Free Quote</a>
                  <a href="/free-example" className="secondary-button" style={{fontSize: '1rem', padding: '12px 24px'}}>See Example</a>
                </div>
              </div>
            </div>
            
            {/* Service Coverage Areas */}
            <div style={{marginTop: '3rem'}}>
              <h3 style={{color: colors.primary, marginBottom: '1.5rem', textAlign: 'center', fontSize: '1.5rem'}}>Web Development Company Serving Greater Moncton</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                textAlign: 'center'
              }}>
                {[
                  'Moncton',
                  'Dieppe',
                  'Riverview', 
                  'Shediac',
                  'Salisbury',
                  'Sackville',
                  'Petitcodiac',
                  'Memramcook',
                  'Hillsborough',
                  'Elgin',
                  'Alma',
                  'Sussex'
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
              }}>Professional web design Moncton services for businesses throughout Westmorland County and the greater Moncton region.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Leading Web Design Company Moncton</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Professional website development, affordable web design, and comprehensive digital marketing 
                services for small businesses throughout Moncton and the Maritimes.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="hero-button" style={{ backgroundColor: 'white', color: '#000' }}>
                Get Started Today
              </a>
              <a href="/free-example" className="secondary-button" style={{ borderColor: 'white', color: 'white' }}>
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
  styleSheet.textContent = locationStyles;
  document.head.appendChild(styleSheet);
}