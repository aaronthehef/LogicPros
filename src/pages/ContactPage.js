import React, { useState, useEffect } from 'react';
import '../responsive-style.css';
import { Logo } from '../components/Logo';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    trade: '',
    projectType: '',
    timeline: '',
    message: '',
    hearAbout: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [highlightForm, setHighlightForm] = useState(false);

  useEffect(() => {
    // Hero background animation and mobile responsive styles
    const style = document.createElement('style');
    style.textContent = `
      /* Mobile responsive adjustments for contact page */
      @media (max-width: 768px) {
        #contact-form-section .container {
          padding: 0 5px !important;
          max-width: 100% !important;
        }

        #contact-form-section .container > div {
          border-radius: 8px !important;
          padding: 15px !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }

        #contact-form-section h2 {
          font-size: 1.8rem !important;
        }

        #contact-form-section .contact-layout {
          grid-template-columns: 1fr !important;
        }

        .contact-form-container,
        .contact-info-sidebar {
          padding: 20px !important;
        }
      }

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
        cursor: pointer !important;
      }
      .hero-button:hover {
        box-shadow: 0 8px 30px rgba(255, 198, 0, 0.6) !important;
        transform: translateY(-3px) !important;
        color: #1a1a2e !important;
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
        cursor: pointer !important;
      }
      .secondary-button:hover {
        box-shadow: 0 8px 25px rgba(29, 122, 175, 0.4) !important;
        transform: translateY(-3px) !important;
        border-color: rgba(29, 122, 175, 0.8) !important;
        color: #1a79af !important;
      }
      /* Ensure secondary button overrides any parent container styles */
      div .secondary-button,
      div div .secondary-button {
        background: transparent !important;
        color: #1a79af !important;
        border: 2px solid #1a79af !important;
      }
      div .secondary-button:hover,
      div div .secondary-button:hover {
        color: #1a79af !important;
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
      /* Force blue styling for secondary buttons in orange containers */
      div[style*="rgba(255, 107, 53"] .secondary-button,
      div[style*="#ff6b35"] .secondary-button {
        background: transparent !important;
        color: #1a79af !important;
        border: 2px solid #1a79af !important;
      }
      div[style*="rgba(255, 107, 53"] .secondary-button:hover,
      div[style*="#ff6b35"] .secondary-button:hover {
        color: #1a79af !important;
        border-color: rgba(29, 122, 175, 0.8) !important;
        box-shadow: 0 8px 25px rgba(29, 122, 175, 0.4) !important;
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

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form-section');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    console.log('Starting contact form submission...');

    try {
      // Submit form via serverless API route
      const response = await fetch('https://logicpros-contact-final-lf2njts8c-aaronthehefs-projects.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '', email: '', phone: '', company: '', trade: '',
          projectType: '', timeline: '', message: '', hearAbout: ''
        });
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

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section homepage-hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', overflow: 'hidden' }}>
          {/* Circuit Board Background */}
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
                  Let's Grow Your Business Together
                </h1>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  color: '#e2e8f0',
                  marginBottom: '2.5rem',
                  fontWeight: '300',
                  maxWidth: '500px'
                }}>
                  Ready to enhance your cybersecurity, streamline operations, or attract more customers?
                  Get your free consultation today.
                </p>
                
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={scrollToForm}
                    className="hero-button"
                    style={{ minWidth: '200px' }}
                  >
                    Get Free Consultation
                  </button>
                </div>
              </div>

              <div className="hero-service-cards" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                height: 'auto',
                justifyContent: 'center'
              }}>
                {/* Build Card */}
                <a href="#contact-form-section" className="hero-service-card" style={{
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Build</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Professional Web Design</p>
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
                </a>
  
                {/* Automate Card */}
                <a href="#contact-form-section" className="hero-service-card" style={{
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
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>AI-Powered Business Solutions</p>
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
                      {/* AI Robot Icon */}
                      <rect x="6" y="8" width="12" height="10" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                      <path d="M12 8V5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="12" cy="4" r="1.5" fill="white"/>
                      <circle cx="9.5" cy="12" r="1.5" fill="white"/>
                      <circle cx="14.5" cy="12" r="1.5" fill="white"/>
                      <path d="M9 15h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M7 10h2" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                      <path d="M15 10h2" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                      <path d="M12 18v2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M6 13H4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M18 13h2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="3" cy="13" r="1" fill="white"/>
                      <circle cx="21" cy="13" r="1" fill="white"/>
                    </svg>
                  </div>
                </a>
  
                {/* Secure Card */}
                <a href="#contact-form-section" className="hero-service-card" style={{
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
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Secure</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Cybersecurity & IT Solutions</p>
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
                      <path d="M12 2L4 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-8-4z" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-form-section" className="section" style={{
          backgroundColor: '#f5f8fc'
        }}>
          <div className="container" style={{
            maxWidth: '100%',
            padding: '0 10px'
          }}>
            {/* Calendar Booking Section - Full Width Above Form */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '20px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(29, 122, 175, 0.1)',
              marginBottom: '40px'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 style={{
                  color: '#1a1a2e',
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '15px'
                }}>Book Your Free Consultation</h2>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#2c3e50',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}>
                  Schedule a time that works for you - we'll send you a calendar invitation with meeting details and answer all your questions about cybersecurity, IT services, or web development.
                </p>
              </div>

              {/* Google Calendar Appointment Scheduling */}
              <div style={{
                width: '100%',
                margin: '0',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '2px solid rgba(29, 122, 175, 0.15)',
                boxShadow: '0 4px 20px rgba(29, 122, 175, 0.1)'
              }}>
                <iframe
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Bg4PkNExnSkRTXv5QMDe5HjRWrbuMaf3gVvbHlf3T0aaqtq7cNkpIUZD5uqNR7Tx0owowJNgX?gv=true"
                  style={{ border: 0, display: 'block' }}
                  width="100%"
                  height="600"
                  title="Book a Consultation with LogicPros"
                />
              </div>
            </div>

            <div className="contact-layout">
              {/* Contact Form */}
              <div className="contact-form-container" style={{
                color: '#2c3e50',
                transition: 'all 0.3s ease',
                boxShadow: highlightForm ? '0 0 30px rgba(255, 193, 7, 0.6), 0 0 60px rgba(255, 193, 7, 0.3)' : '0 8px 32px rgba(0, 0, 0, 0.08)',
                transform: highlightForm ? 'scale(1.015)' : 'scale(1)',
                backgroundColor: highlightForm ? 'rgba(255, 193, 7, 0.08)' : 'white',
                borderRadius: '16px',
                padding: '40px',
                border: highlightForm ? '2px solid rgba(255, 193, 7, 0.4)' : '1px solid rgba(0, 0, 0, 0.1)'
              }}>
                <h2 style={{ color: '#1a1a2e' }}>Or Send Us a Message</h2>
                <p className="form-subtitle">
                  Tell us about your business and goals. Whether you need cybersecurity, AI automation, website development, or IT support - our team will provide a customized solution.
                </p>

                {submitStatus === 'success' && (
                  <div className="alert alert-success">
                    <h3>Thank You!</h3>
                    <p>Your message has been received by our team. We'll respond within 24 hours with next steps!</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="alert alert-error">
                    <h3>Oops! Something went wrong.</h3>
                    <p>Please try again or contact our office directly at aaron@logicpros.ca</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
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
                        placeholder="your@email.com"
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
                      <label htmlFor="company">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="trade">Your Industry</label>
                      <select
                        id="trade"
                        name="trade"
                        value={formData.trade}
                        onChange={handleChange}
                      >
                        <option value="">Select your industry</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="legal">Legal Services</option>
                        <option value="accounting">Accounting/Finance</option>
                        <option value="consulting">Consulting</option>
                        <option value="retail">Retail</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="construction">Construction</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="technology">Technology</option>
                        <option value="education">Education</option>
                        <option value="nonprofit">Non-Profit</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="projectType">Service Interest</label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                      >
                        <option value="">Select service type</option>
                        <option value="cybersecurity-audit">Cybersecurity Audit</option>
                        <option value="password-management">Password Management</option>
                        <option value="mfa-setup">Multi-Factor Authentication</option>
                        <option value="it-support">Managed IT Services</option>
                        <option value="ai-automation">AI Automation</option>
                        <option value="new-website">New Website</option>
                        <option value="website-redesign">Website Redesign</option>
                        <option value="ecommerce">E-Commerce Store</option>
                        <option value="seo">SEO & Marketing</option>
                        <option value="consultation">General Consultation</option>
                        <option value="not-sure">Not Sure - Need Help Deciding</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="timeline">Desired Timeline</label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP (Rush Job)</option>
                        <option value="1-month">Within 1 Month</option>
                        <option value="2-3-months">2-3 Months</option>
                        <option value="3-6-months">3-6 Months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="hearAbout">How did you hear about us?</label>
                      <select
                        id="hearAbout"
                        name="hearAbout"
                        value={formData.hearAbout}
                        onChange={handleChange}
                      >
                        <option value="">Select source</option>
                        <option value="google">Google Search</option>
                        <option value="referral">Referral from Friend/Client</option>
                        <option value="social-media">Social Media</option>
                        <option value="industry-event">Industry Event</option>
                        <option value="existing-client">I'm an Existing Client</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>


                  <div className="form-group">
                    <label htmlFor="message">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      placeholder="Tell us about your business, current challenges, goals, and any specific requirements. Whether it's cybersecurity, IT support, automation, or web development - we're here to help."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="hero-button"
                    disabled={isSubmitting}
                    style={{ width: '100%', fontSize: '1.2rem', padding: '20px 40px', marginTop: '1.5rem', marginBottom: '1.5rem' }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message to LogicPros'}
                  </button>

                  <p className="form-note">
                    * Required fields. Your message will be reviewed by our team and we typically respond within 2-4 hours during business hours.
                  </p>
                </form>
              </div>

              {/* Contact Info Sidebar */}
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(29, 122, 175, 0.1)'
              }}>
                <h3 style={{
                  color: '#1a1a2e',
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '30px',
                  textAlign: 'center'
                }}>Contact Our Team</h3>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '25px'
                }}>
                  
                  <div style={{
                    backgroundColor: 'rgba(29, 122, 175, 0.05)',
                    borderRadius: '12px',
                    padding: '15px',
                    border: '1px solid rgba(29, 122, 175, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '30px',
                      height: '30px',
                      background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                      borderRadius: '10px',
                      boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)',
                      flexShrink: 0
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 style={{
                        color: '#1d7aaf',
                        fontSize: '1rem',
                        fontWeight: '600',
                        margin: '0 0 5px 0'
                      }}>Business Email</h4>
                      <p style={{
                        margin: '0',
                        fontSize: '0.9rem'
                      }}>
                        <a href="mailto:aaron@logicpros.ca" style={{
                          color: '#2c3e50',
                          textDecoration: 'none',
                          fontWeight: '500'
                        }}>aaron@logicpros.ca</a>
                      </p>
                    </div>
                  </div>
                  
                  <div style={{
                    backgroundColor: 'rgba(29, 122, 175, 0.05)',
                    borderRadius: '12px',
                    padding: '15px',
                    border: '1px solid rgba(29, 122, 175, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '30px',
                      height: '30px',
                      background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                      borderRadius: '10px',
                      boxShadow: '0 4px 12px rgba(31, 124, 255, 0.3)',
                      flexShrink: 0
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 style={{
                        color: '#1d7aaf',
                        fontSize: '1rem',
                        fontWeight: '600',
                        margin: '0 0 5px 0'
                      }}>Office Phone</h4>
                      <p style={{
                        margin: '0',
                        fontSize: '0.9rem'
                      }}>
                        <a href="tel:+15064782949" style={{
                          color: '#2c3e50',
                          textDecoration: 'none',
                          fontWeight: '500'
                        }}>(506) 478-2949</a>
                      </p>
                      <small style={{
                        color: '#6c757d',
                        fontSize: '0.8rem'
                      }}>Mon-Fri, 8am-5pm EST</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section" style={{ backgroundColor: '#ffffff' }}>
          <div className="container">
            <h2 style={{ color: '#1a1a2e', textAlign: 'center', marginBottom: '50px' }}>Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>How do I get started?</h3>
                <p>Contact us for a free consultation where we'll discuss your business needs, security concerns, and growth goals. We'll create a custom solution whether you need cybersecurity, IT support, automation, or web development.</p>
              </div>
              
              <div className="faq-item">
                <h3>How long does it take?</h3>
                <p>Timelines vary by service: security audits (1-2 weeks), websites (2-4 weeks), IT setup (1-3 weeks). We'll provide an exact timeline during your consultation based on your specific needs.</p>
              </div>
              
              <div className="faq-item">
                <h3>Do you provide ongoing support?</h3>
                <p>Yes! We offer managed IT services, security monitoring, website maintenance, and ongoing support packages. We're here to help your business stay secure and grow long-term.</p>
              </div>
              
              <div className="faq-item">
                <h3>What cybersecurity services do you offer?</h3>
                <p>We provide security audits, password management, multi-factor authentication, endpoint protection, security training, and incident response planning to keep your business secure.</p>
              </div>
              
              <div className="faq-item">
                <h3>Can I update the site myself?</h3>
                <p>Absolutely! We build user-friendly sites and provide training. You can update content, add photos, and manage your site easily.</p>
              </div>
              
              <div className="faq-item">
                <h3>Do you offer free consultations?</h3>
                <p>Yes! Every project starts with a free consultation where we discuss your goals, analyze your competition, and create a custom strategy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section cta-section" style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          color: 'white',
          padding: '80px 0'
        }}>
          <div className="container">
            <div className="cta-content" style={{ textAlign: 'center' }}>
              <h2 style={{ 
                fontSize: '2.5rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'white'
              }}>Ready to Grow Your Business?</h2>
              <p style={{ 
                fontSize: '1.2rem',
                marginBottom: '40px',
                maxWidth: '600px',
                margin: '0 auto 40px auto',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>Get personalized recommendations for your business growth. Whether it's cybersecurity, automation, or web development - we'll create the perfect solution.</p>
              <div className="cta-buttons" style={{ 
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <button 
                  onClick={scrollToForm}
                  className="hero-button"
                  style={{ minWidth: '200px' }}
                >
                  Get Free Consultation
                </button>
                <a href="tel:+15064782949" className="secondary-button" style={{ color: 'white', borderColor: 'white', minWidth: '200px', textAlign: 'center' }}>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};