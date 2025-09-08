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
        cursor: pointer !important;
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
              <linearGradient id="techGradientContact" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1d7aaf" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
              <linearGradient id="pulseGradientContact" x1="0%" y1="0%" x2="100%" y2="0%">
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
              <circle cx="100" cy="100" r="8" fill="url(#techGradientContact)" opacity="0.4" />
              <circle cx="900" cy="300" r="6" fill="url(#techGradientContact)" opacity="0.5" />
              <circle cx="1100" cy="150" r="10" fill="url(#techGradientContact)" opacity="0.3" />
              <circle cx="200" cy="400" r="7" fill="url(#techGradientContact)" opacity="0.4" />
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
              }}>Let's Grow Your Business Together</h1>
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
                Ready to enhance your cybersecurity, streamline operations, or attract more customers? 
                Get your free consultation today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-form-section" className="section" style={{ 
          backgroundColor: '#f5f8fc'
        }}>
          <div className="container">
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
                <h2 style={{ color: '#1a1a2e' }}>Get Your Free Consultation</h2>
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
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                  <div style={{
                    backgroundColor: 'rgba(29, 122, 175, 0.05)',
                    borderRadius: '12px',
                    padding: '20px',
                    border: '1px solid rgba(29, 122, 175, 0.15)'
                  }}>
                    <h4 style={{ 
                      color: '#1d7aaf',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      📧 Business Email
                    </h4>
                    <p style={{ 
                      margin: '0',
                      fontSize: '1rem'
                    }}>
                      <a href="mailto:aaron@logicpros.ca" style={{
                        color: '#2c3e50',
                        textDecoration: 'none',
                        fontWeight: '500'
                      }}>aaron@logicpros.ca</a>
                    </p>
                  </div>
                  
                  <div style={{
                    backgroundColor: 'rgba(29, 122, 175, 0.05)',
                    borderRadius: '12px',
                    padding: '20px',
                    border: '1px solid rgba(29, 122, 175, 0.15)'
                  }}>
                    <h4 style={{ 
                      color: '#1d7aaf',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      📱 Office Phone
                    </h4>
                    <p style={{ 
                      margin: '0 0 8px 0',
                      fontSize: '1rem'
                    }}>
                      <a href="tel:+15064782949" style={{
                        color: '#2c3e50',
                        textDecoration: 'none',
                        fontWeight: '500'
                      }}>(506) 478-2949</a>
                    </p>
                    <small style={{ 
                      color: '#6c757d',
                      fontSize: '0.9rem'
                    }}>Monday - Friday, 8am - 5pm EST</small>
                  </div>
                  
                  <div style={{
                    backgroundColor: 'rgba(29, 122, 175, 0.05)',
                    borderRadius: '12px',
                    padding: '20px',
                    border: '1px solid rgba(29, 122, 175, 0.15)'
                  }}>
                    <h4 style={{ 
                      color: '#1d7aaf',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      ⚡ Response Time
                    </h4>
                    <p style={{ 
                      margin: '0 0 8px 0',
                      fontSize: '1rem',
                      color: '#2c3e50'
                    }}>2-4 hours during business hours</p>
                    <small style={{ 
                      color: '#6c757d',
                      fontSize: '0.9rem'
                    }}>Same-day for urgent projects</small>
                  </div>
                </div>

                <div style={{
                  marginTop: '30px',
                  textAlign: 'center',
                  padding: '25px',
                  backgroundColor: 'rgba(255, 107, 53, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 107, 53, 0.15)'
                }}>
                  <h4 style={{ 
                    color: '#ff6b35',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}>
                    🎯 Need It Done Fast?
                  </h4>
                  <p style={{ 
                    color: '#2c3e50',
                    marginBottom: '20px',
                    fontSize: '0.95rem',
                    lineHeight: '1.5'
                  }}>Call our office directly for rush projects and immediate consultations.</p>
                  <a href="tel:+15064782949" className="hero-button">
                    Call Our Team
                  </a>
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