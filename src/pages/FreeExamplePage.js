import React, { useState, useEffect } from 'react';
import '../responsive-style.css';
import { Logo } from '../components/Logo';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const FreeExamplePage = () => {
  const [highlightForm, setHighlightForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    trade: '',
    website: '',
    facebook: '',
    instagram: '',
    mainServices: '',
    targetArea: '',
    preferredStyle: '',
    competitors: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const scrollToForm = () => {
    const formElement = document.getElementById('example-form');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Wait for scroll to finish (typical smooth scroll takes ~1-1.5 seconds)
      setTimeout(() => {
        // Quick yellow flash nudge
        setHighlightForm(true);
        setTimeout(() => setHighlightForm(false), 300); // Much faster flash
      }, 1200); // Wait for scroll to complete
    }
  };

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
      
      /* Responsive grid for how-it-works section */
      @media (max-width: 768px) {
        .how-it-works-grid-responsive {
          grid-template-columns: 1fr !important;
          max-width: 400px !important;
          gap: 20px !important;
        }
        .whats-included-grid-responsive {
          grid-template-columns: 1fr !important;
          max-width: 400px !important;
          gap: 20px !important;
        }
      }
      
      /* Tablet responsive for whats-included */
      @media (max-width: 1024px) and (min-width: 769px) {
        .whats-included-grid-responsive {
          grid-template-columns: repeat(2, 1fr) !important;
          max-width: 800px !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    console.log('Starting free example form submission...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          trade: formData.trade,
          projectType: 'Free Example Website Request',
          timeline: formData.timeline,
          budget: 'Free Example - No Budget',
          hearAbout: 'Free Example Request',
          message: `🆓 FREE EXAMPLE WEBSITE REQUEST - 48 HOUR DEADLINE

📍 SERVICE AREA: ${formData.targetArea || 'Not specified'}

💼 MAIN SERVICES:
${formData.mainServices || 'Not specified'}

🌐 CURRENT ONLINE PRESENCE:
• Website: ${formData.website || 'None'}
• Facebook: ${formData.facebook || 'None'}  
• Instagram: ${formData.instagram || 'None'}

🎨 DESIGN PREFERENCE: ${formData.preferredStyle || 'Not specified'}

🔍 COMPETITOR RESEARCH:
${formData.competitors || 'Not provided'}

=====================================
✅ NEXT STEPS: Create custom homepage mockup within 48 hours using above business details.
=====================================`
        })
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '', email: '', phone: '', company: '', trade: '', website: '',
          facebook: '', instagram: '', mainServices: '', targetArea: '', 
          preferredStyle: '', competitors: '', timeline: ''
        });
        
        // Auto-scroll to success message
        setTimeout(() => {
          const successAlert = document.querySelector('.alert-success');
          if (successAlert) {
            successAlert.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            });
          }
        }, 100);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <linearGradient id="techGradientFreeExample" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1d7aaf" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
              <linearGradient id="pulseGradientFreeExample" x1="0%" y1="0%" x2="100%" y2="0%">
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
              <circle cx="100" cy="100" r="8" fill="url(#techGradientFreeExample)" opacity="0.4" />
              <circle cx="900" cy="300" r="6" fill="url(#techGradientFreeExample)" opacity="0.5" />
              <circle cx="1100" cy="150" r="10" fill="url(#techGradientFreeExample)" opacity="0.3" />
              <circle cx="200" cy="400" r="7" fill="url(#techGradientFreeExample)" opacity="0.4" />
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
              }}>See Your Website Before You Buy It</h1>
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
                Get a FREE sample page showing exactly what your business website will look like. 
                WordPress or React with AI-powered content - no commitment required.
              </p>
              <div className="hero-benefits" style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
                maxWidth: '800px',
                margin: '0 auto',
                marginTop: '40px'
              }}>
                <div className="benefit-item" style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '20px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  color: 'white',
                  textAlign: 'center'
                }}>✓ Completely FREE - No strings attached</div>
                <div className="benefit-item" style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '20px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  color: 'white',
                  textAlign: 'center'
                }}>✓ Custom design for YOUR business</div>
                <div className="benefit-item" style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '20px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  color: 'white',
                  textAlign: 'center'
                }}>✓ See it within 48 hours</div>
                <div className="benefit-item" style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '20px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  color: 'white',
                  textAlign: 'center'
                }}>✓ No obligation to purchase</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section" style={{ backgroundColor: '#f5f8fc', padding: '80px 0' }}>
          <div className="container">
            <h2 style={{ 
              textAlign: 'center', 
              fontSize: '2.5rem', 
              fontWeight: '700',
              marginBottom: '20px',
              color: '#1a1a2e'
            }}>How Our Free Example Website Works</h2>
            <p style={{
              textAlign: 'center',
              fontSize: '1.2rem',
              color: '#6c757d',
              maxWidth: '600px',
              margin: '0 auto 60px auto',
              lineHeight: '1.6'
            }}>Simple process, amazing results. See exactly what your website will look like before making any commitment.</p>
            
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '30px',
              maxWidth: '800px',
              margin: '0 auto'
            }} className="how-it-works-grid-responsive">
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                position: 'relative',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(29, 122, 175, 0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#1d7aaf',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  boxShadow: '0 4px 12px rgba(29, 122, 175, 0.3)'
                }}>1</div>
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '20px',
                  marginTop: '20px'
                }}>📝</div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: '#1a1a2e'
                }}>Tell Us About Your Business</h3>
                <p style={{
                  color: '#6c757d',
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>Fill out our quick form with details about your business, services, and style preferences.</p>
              </div>

              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                position: 'relative',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(29, 122, 175, 0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#1d7aaf',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  boxShadow: '0 4px 12px rgba(29, 122, 175, 0.3)'
                }}>2</div>
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '20px',
                  marginTop: '20px'
                }}>🎨</div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: '#1a1a2e'
                }}>We Create Your Sample Page</h3>
                <p style={{
                  color: '#6c757d',
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>Our designers create a custom homepage mockup specifically for your business - completely free.</p>
              </div>

              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                position: 'relative',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(29, 122, 175, 0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#1d7aaf',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  boxShadow: '0 4px 12px rgba(29, 122, 175, 0.3)'
                }}>3</div>
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '20px',
                  marginTop: '20px'
                }}>📧</div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: '#1a1a2e'
                }}>Review Your Design</h3>
                <p style={{
                  color: '#6c757d',
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>Within 48 hours, you'll receive a link to view your custom website example with your business information.</p>
              </div>

              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                position: 'relative',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(29, 122, 175, 0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#1d7aaf',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  boxShadow: '0 4px 12px rgba(29, 122, 175, 0.3)'
                }}>4</div>
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '20px',
                  marginTop: '20px'
                }}>✅</div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: '#1a1a2e'
                }}>Decide If You Want to Proceed</h3>
                <p style={{
                  color: '#6c757d',
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>Love it? Let's build the full website. Don't like it? No problem - you're under no obligation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Get */}
        <section className="section" style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
          <div className="container">
            <h2 style={{ 
              textAlign: 'center', 
              fontSize: '2.5rem', 
              fontWeight: '700',
              marginBottom: '20px',
              color: '#1a1a2e'
            }}>What's Included in Your Free Example</h2>
            <p style={{
              textAlign: 'center',
              fontSize: '1.2rem',
              color: '#6c757d',
              maxWidth: '700px',
              margin: '0 auto 60px auto',
              lineHeight: '1.6'
            }}>Everything you need to see exactly how your professional website will look and perform.</p>
            
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              maxWidth: '1200px',
              margin: '0 auto'
            }} className="whats-included-grid-responsive">
              <div style={{
                backgroundColor: '#f5f8fc',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                position: 'relative'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(29, 122, 175, 0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px'
                }}>🏠</div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: '#1a1a2e'
                }}>Custom Homepage Design</h3>
                <p style={{
                  color: '#6c757d',
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>A fully designed homepage layout featuring your business name, services, and contact information.</p>
              </div>

              <div style={{
                backgroundColor: '#f5f8fc',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(29, 122, 175, 0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px'
                }}>📱</div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: '#1a1a2e'
                }}>Mobile-Responsive Preview</h3>
                <p style={{
                  color: '#6c757d',
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>See how your website will look on desktop, tablet, and mobile devices.</p>
              </div>

              <div style={{
                backgroundColor: '#f5f8fc',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(29, 122, 175, 0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px'
                }}>🎯</div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: '#1a1a2e'
                }}>Industry-Specific Content</h3>
                <p style={{
                  color: '#6c757d',
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>Content written specifically for your trade and target customers in your area.</p>
              </div>

              <div style={{
                backgroundColor: '#f5f8fc',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(29, 122, 175, 0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px'
                }}>🖼️</div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: '#1a1a2e'
                }}>Professional Layout</h3>
                <p style={{
                  color: '#6c757d',
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>Clean, modern design that builds trust and encourages customers to contact you.</p>
              </div>

              <div style={{
                backgroundColor: '#f5f8fc',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(29, 122, 175, 0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px'
                }}>📞</div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: '#1a1a2e'
                }}>Lead Capture Elements</h3>
                <p style={{
                  color: '#6c757d',
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>Contact forms, phone numbers, and call-to-action buttons strategically placed for maximum conversions.</p>
              </div>

              <div style={{
                backgroundColor: '#f5f8fc',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(29, 122, 175, 0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px'
                }}>🔍</div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: '#1a1a2e'
                }}>SEO-Optimized Structure</h3>
                <p style={{
                  color: '#6c757d',
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>Page structure and content optimized for search engines to help you get found online.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Free Example Form */}
        <section id="example-form" className="section">
          <div className="container">
            <div className="example-form-layout" style={{ 
              transition: 'all 0.3s ease',
              boxShadow: highlightForm ? '0 0 20px rgba(255, 193, 7, 0.3), 0 0 40px rgba(255, 193, 7, 0.15)' : 'none',
              transform: highlightForm ? 'scale(1.005)' : 'scale(1)',
              backgroundColor: highlightForm ? 'rgba(255, 193, 7, 0.03)' : 'transparent',
              borderRadius: '16px',
              border: highlightForm ? '1px solid rgba(255, 193, 7, 0.2)' : 'none'
            }}>
              <div className="form-header">
                <h2>Get Your Free Example Website</h2>
                <p>The more details you provide, the better we can customize your example. All fields are optional except the first three.</p>
              </div>

              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  <h3>Thank You!</h3>
                  <p>Your free example website request has been received! We'll create your custom example and send it to you within 48 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="alert alert-error">
                  <h3>Oops! Something went wrong.</h3>
                  <p>Please try again or contact our office directly at aaron@logicpros.ca</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-section">
                  <h3>Basic Information</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@smithconstruction.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Business/Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Smith Construction LLC"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Business Details</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="trade">Your Primary Trade</label>
                      <select
                        id="trade"
                        name="trade"
                        value={formData.trade}
                        onChange={handleChange}
                      >
                        <option value="">Select your trade</option>
                        <option value="roofing">Roofing</option>
                        <option value="plumbing">Plumbing</option>
                        <option value="electrical">Electrical</option>
                        <option value="hvac">HVAC</option>
                        <option value="landscaping">Landscaping</option>
                        <option value="construction">General Construction</option>
                        <option value="remodeling">Home Remodeling</option>
                        <option value="painting">Painting</option>
                        <option value="flooring">Flooring</option>
                        <option value="concrete">Concrete</option>
                        <option value="masonry">Masonry</option>
                        <option value="fencing">Fencing</option>
                        <option value="windows">Windows & Doors</option>
                        <option value="solar">Solar Installation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="targetArea">Service Area/City</label>
                      <input
                        type="text"
                        id="targetArea"
                        name="targetArea"
                        value={formData.targetArea}
                        onChange={handleChange}
                        placeholder="Atlanta, GA or Greater Toronto Area"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="mainServices">Main Services You Offer</label>
                    <textarea
                      id="mainServices"
                      name="mainServices"
                      value={formData.mainServices}
                      onChange={handleChange}
                      rows="3"
                      placeholder="e.g., Residential roofing, commercial roof repair, storm damage restoration, gutter installation"
                    ></textarea>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Design Preferences</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="preferredStyle">Preferred Website Style</label>
                      <select
                        id="preferredStyle"
                        name="preferredStyle"
                        value={formData.preferredStyle}
                        onChange={handleChange}
                      >
                        <option value="">Select style preference</option>
                        <option value="modern-clean">Modern & Clean</option>
                        <option value="professional-corporate">Professional Corporate</option>
                        <option value="bold-dynamic">Bold & Dynamic</option>
                        <option value="traditional-trustworthy">Traditional & Trustworthy</option>
                        <option value="creative-unique">Creative & Unique</option>
                        <option value="no-preference">No Preference - Surprise Me!</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="website">Current Website (if any)</label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="your-current-website.com (optional)"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="facebook">Facebook Page</label>
                      <input
                        type="text"
                        id="facebook"
                        name="facebook"
                        value={formData.facebook}
                        onChange={handleChange}
                        placeholder="facebook.com/your-business-name (optional)"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="instagram">Instagram Profile</label>
                      <input
                        type="text"
                        id="instagram"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                        placeholder="instagram.com/your-business (optional)"
                      />
                    </div>
                  </div>


                  <div className="form-group">
                    <label htmlFor="competitors">Competitor Websites You Like/Dislike</label>
                    <textarea
                      id="competitors"
                      name="competitors"
                      value={formData.competitors}
                      onChange={handleChange}
                      rows="3"
                      placeholder="Share any competitor websites you think look good or bad, and what you like/dislike about them"
                    ></textarea>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Project Timeline</h3>
                  <div className="form-group">
                    <label htmlFor="timeline">When would you need the website completed?</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      <option value="">Select timeline</option>
                      <option value="just-looking">Just exploring options</option>
                      <option value="asap">ASAP - Rush needed</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="next-season">Before next busy season</option>
                      <option value="flexible">Flexible timeline</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-large"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending Request...' : 'Get My Free Example Website'}
                </button>

                <p className="form-note">
                  * Required fields. Your request will be reviewed by our team and we typically respond within 2-4 hours during business hours.
                </p>

                <div className="form-guarantee">
                  <h4>Our Promise to You:</h4>
                  <ul>
                    <li>✓ Completely FREE with no obligations</li>
                    <li>✓ Custom design created specifically for your business</li>
                    <li>✓ Delivered within 48 hours (often sooner)</li>
                    <li>✓ No sales pressure - you decide if you want to proceed</li>
                    <li>✓ Your information remains confidential</li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Why We Offer This */}
        <section className="section" style={{ backgroundColor: '#f5f8fc', padding: '80px 0' }}>
          <div className="container">
            <h2 style={{ 
              textAlign: 'center', 
              fontSize: '2.5rem', 
              fontWeight: '700',
              marginBottom: '20px',
              color: '#1a1a2e'
            }}>Why Do We Offer Free Examples?</h2>
            <p style={{
              textAlign: 'center',
              fontSize: '1.2rem',
              color: '#6c757d',
              maxWidth: '600px',
              margin: '0 auto 60px auto',
              lineHeight: '1.6'
            }}>Simple - we believe you should see exactly what you're getting before making any commitment.</p>
            
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '40px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(29, 122, 175, 0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>💪</div>
                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: '700',
                  marginBottom: '20px',
                  color: '#1a1a2e',
                  textAlign: 'center'
                }}>Because We're Confident in Our Work</h3>
                <p style={{
                  color: '#6c757d',
                  lineHeight: '1.7',
                  fontSize: '1.1rem',
                  textAlign: 'center'
                }}>
                  We've been building websites for businesses for years. We know what works and what doesn't. 
                  When you see the quality of our design and how well it represents your business, we're confident 
                  you'll want to work with us.
                </p>
              </div>

              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(29, 122, 175, 0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>🛡️</div>
                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: '700',
                  marginBottom: '20px',
                  color: '#1a1a2e',
                  textAlign: 'center'
                }}>No Risk for You</h3>
                <p style={{
                  color: '#6c757d',
                  lineHeight: '1.7',
                  fontSize: '1.1rem',
                  textAlign: 'center'
                }}>
                  Hiring a web designer is a big decision. Many businesses have been burned by developers who 
                  promised the world and delivered generic templates. Our free example lets you see exactly 
                  what you're getting before spending a penny.
                </p>
              </div>

              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(29, 122, 175, 0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>🎯</div>
                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: '700',
                  marginBottom: '20px',
                  color: '#1a1a2e',
                  textAlign: 'center'
                }}>Better Results for Everyone</h3>
                <p style={{
                  color: '#6c757d',
                  lineHeight: '1.7',
                  fontSize: '1.1rem',
                  textAlign: 'center'
                }}>
                  When you can see and approve the design before we start, it leads to better communication, 
                  fewer revisions, and a final website that truly represents your business and attracts customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>Is this really completely free?</h3>
                <p>Yes! There are no hidden costs, no setup fees, and no obligations. We create a custom sample page for your business at no charge.</p>
              </div>

              <div className="faq-item">
                <h3>How detailed is the example?</h3>
                <p>It's a fully designed homepage with your business information, services, contact details, and industry-specific content. You'll see exactly how your website will look.</p>
              </div>

              <div className="faq-item">
                <h3>What if I don't like the design?</h3>
                <p>No problem! You're under no obligation to proceed. We can discuss changes, or you can simply walk away - no hard feelings.</p>
              </div>

              <div className="faq-item">
                <h3>How long does it take to get my example?</h3>
                <p>Most examples are completed within 24-48 hours. Rush requests can often be done the same day.</p>
              </div>

              <div className="faq-item">
                <h3>Will you use my business information?</h3>
                <p>We only use the information you provide for creating your example. We never share your details with anyone else.</p>
              </div>

              <div className="faq-item">
                <h3>What happens after I see the example?</h3>
                <p>If you love it, we'll provide a quote for the full website. If not, no worries - you keep the example design concept and we part as friends.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Ready to See Your Website?</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Join hundreds of contractors who've seen their business potential with our free examples.
              </p>
            </div>
            <div className="cta-buttons">
              <button 
                onClick={scrollToForm}
                className="btn btn-primary" 
                style={{ 
                  backgroundColor: 'white', 
                  color: '#000',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
              >
                Get Your Free Example Now
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Additional styles for free example page
const exampleStyles = `
.hero-benefits {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

.benefit-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 15px 20px;
  border-radius: 8px;
  font-weight: 500;
}

.how-it-works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.step-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.step-card:hover {
  transform: translateY(-5px);
}

.step-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.step-card h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
}

.included-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.included-item {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.included-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.included-item h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
}

.example-form-layout {
  max-width: 800px;
  margin: 0 auto;
}

.form-header {
  text-align: center;
  margin-bottom: 50px;
}

.form-header h2 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 15px;
}

.contact-form {
  /* Uses existing contact form styling */
}

.form-section {
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e9ecef;
}

.form-section:last-of-type {
  border-bottom: none;
}

.form-section h3 {
  color: var(--primary-color);
  margin-bottom: 25px;
  font-size: 1.5rem;
}

.form-guarantee {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 30px;
  border-radius: 12px;
  margin-top: 30px;
  border: 2px solid var(--primary-color);
}

.form-guarantee h4 {
  color: var(--primary-color);
  margin-bottom: 15px;
}

.form-guarantee ul {
  list-style: none;
  padding: 0;
}

.form-guarantee li {
  padding: 5px 0;
  color: var(--text-secondary);
}

.why-free-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: center;
}

.why-free-text h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
  margin-top: 30px;
}

.why-free-text h3:first-child {
  margin-top: 0;
}

.why-free-text p {
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.success-stats {
  display: flex;
  gap: 40px;
  margin-top: 30px;
}

.success-stats .stat {
  text-align: center;
}

.success-stats h4 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.success-stats p {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.why-free-image {
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
}

.file-input {
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  background: #fafafa;
  cursor: pointer;
  transition: all 0.3s ease;
}

.file-input:hover {
  border-color: var(--primary-color);
  background: #f0f0f0;
}

.file-help {
  display: block;
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-top: 8px;
  line-height: 1.4;
}

.file-preview {
  background: #e8f5e8;
  border: 1px solid #4caf50;
  border-radius: 6px;
  padding: 12px;
  margin-top: 10px;
  color: #2e7d32;
  font-weight: 500;
}

@media (max-width: 768px) {
  .hero-benefits {
    grid-template-columns: 1fr;
  }
  
  .how-it-works-grid {
    grid-template-columns: 1fr;
  }
  
  .included-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-form {
    /* Uses responsive contact form styling */
  }
  
  .why-free-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .success-stats {
    flex-direction: column;
    gap: 20px;
  }
}
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = exampleStyles;
  document.head.appendChild(styleSheet);
}