import React, { useEffect, useRef } from 'react';
import '../../../responsive-style.css';
import { Logo } from '../../../components/Logo';
import { Navigation } from '../../../components/Navigation';
import { Animations } from '../../../components/Animations';
import { Footer } from '../../../components/Footer';
import { colors } from '../../../styles/colors';
import { gsap } from 'gsap';

export const FrederictonAutomationsPage = () => {
  const heroRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    document.title = 'AI Automation Fredericton | Workflow Automation & AI Chatbots NB | LogicPros';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI automation services for Fredericton businesses. Workflow automation, AI chatbots, email marketing automation, social media scheduling, and data integrations built by a local New Brunswick team.');
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "LogicPros - AI Automation Fredericton",
      "description": "AI automation and workflow automation services for Fredericton, NB businesses.",
      "url": "https://logicpros.ca/locations/fredericton/automations",
      "telephone": "+1-506-478-2949",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Fredericton",
        "addressRegion": "NB",
        "addressCountry": "CA"
      },
      "serviceArea": "Fredericton, New Brunswick",
      "services": [
        "Workflow Automation",
        "AI Chatbots",
        "Email Marketing Automation",
        "Social Media Automation",
        "Data Integration",
        "Business Process Automation"
      ]
    };
    const structuredDataScript = document.createElement('script');
    structuredDataScript.type = 'application/ld+json';
    structuredDataScript.textContent = JSON.stringify(structuredData);
    document.head.appendChild(structuredDataScript);

    const header = headerRef.current;
    const handleScroll = () => {
      if (window.scrollY > 100) {
        gsap.to(header, { duration: 0.3, css: { backdropFilter: 'blur(25px) saturate(200%)', boxShadow: '0 12px 40px rgba(0,0,0,0.4), 0 4px 12px rgba(29,122,175,0.2)' }, ease: 'power2.out' });
      } else {
        gsap.to(header, { duration: 0.3, css: { backdropFilter: 'blur(20px) saturate(180%)', boxShadow: '0 8px 32px rgba(0,0,0,0.3), 0 2px 8px rgba(29,122,175,0.1)' }, ease: 'power2.out' });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    gsap.fromTo(header, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 });

    const style = document.createElement('style');
    style.textContent = `
      @keyframes panLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-200px); } }
      @keyframes pulse { 0%, 100% { opacity: 0.7; } 50% { opacity: 0.9; } }
      @keyframes float1 { 0%, 100% { transform: translate(0,0); opacity: 0.3; } 50% { transform: translate(30px,-50px); opacity: 0.6; } }
      @keyframes float2 { 0%, 100% { transform: translate(0,0); opacity: 0.4; } 50% { transform: translate(-40px,-60px); opacity: 0.2; } }
      @keyframes pulseGlow {
        0%, 100% { box-shadow: 0 8px 32px rgba(29,122,175,0.15), 0 0 20px rgba(29,122,175,0.3); }
        50% { box-shadow: 0 8px 32px rgba(29,122,175,0.25), 0 0 30px rgba(29,122,175,0.5); }
      }
      .hero-background-svg { animation: panLeft 30s linear infinite, pulse 4s ease-in-out infinite; }
      .floating-particle { position: absolute; pointer-events: none; z-index: 1; }
      .floating-particle:nth-child(1) { animation: float1 15s ease-in-out infinite; }
      .floating-particle:nth-child(2) { animation: float2 18s ease-in-out infinite; }
      .floating-particle:nth-child(3) { animation: float1 20s ease-in-out infinite reverse; }
      .automation-card:hover { transform: translateY(-8px) scale(1.02) !important; box-shadow: 0 20px 60px rgba(29,122,175,0.3) !important; }
      .hero-button {
        background: linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%) !important;
        color: white !important; padding: 18px 40px !important; border-radius: 50px !important;
        text-decoration: none !important; font-size: 1.1rem !important; font-weight: 600 !important;
        border: none !important; box-shadow: 0 6px 20px rgba(29,122,175,0.4) !important;
        transition: all 0.4s cubic-bezier(0.4,0,0.2,1) !important; display: inline-block !important;
      }
      .hero-button:hover { box-shadow: 0 8px 30px rgba(29,122,175,0.5) !important; transform: translateY(-3px) !important; }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(style);
      const sd = document.querySelector('script[type="application/ld+json"]');
      if (sd) document.head.removeChild(sd);
    };
  }, []);

  return (
    <div className="landing-page homepage">
      <Animations />

      <header className="sticky-header" ref={headerRef}>
        <div className="header-content">
          <div className="logo"><Logo /></div>
          <Navigation />
        </div>
      </header>

      <main className="main-content">

        {/* Hero */}
        <section ref={heroRef} className="hero-section homepage-hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', overflow: 'hidden' }}>
          <svg className="circuit-background" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, opacity: 0.4 }} viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <g transform="translate(0,0)">
              <animateTransform attributeName="transform" type="translate" values="0,0; -500,0; -500,-350; 0,-350; 0,0" dur="150s" repeatCount="indefinite"/>
              {[0,1,2,3,4,5].map(layerX => (
                [...Array(4)].map((_, layerY) => (
                  <g key={`layer-${layerX}-${layerY}`} transform={`translate(${layerX*400},${layerY*250})`}>
                    <g stroke="#1F7CFF" strokeWidth="1.5" fill="none">
                      <path d="M50 120 L350 120" strokeDasharray="20,12" opacity="0.5">
                        <animate attributeName="stroke-dashoffset" values="0;-32" dur="3s" repeatCount="indefinite"/>
                      </path>
                    </g>
                    {(layerX+layerY)%2===0 && (
                      <g stroke="#22c55e" strokeWidth="1.5" fill="none">
                        <path d="M200 30 L200 220" strokeDasharray="18,10" opacity="0.4">
                          <animate attributeName="stroke-dashoffset" values="0;-28" dur="2.8s" repeatCount="indefinite"/>
                        </path>
                      </g>
                    )}
                    {(layerX+layerY)%3===0 && (
                      <g stroke="#f59e0b" strokeWidth="1" fill="none">
                        <path d="M100 80 L100 160 L300 160" strokeDasharray="15,8" opacity="0.35">
                          <animate attributeName="stroke-dashoffset" values="0;-23" dur="3.5s" repeatCount="indefinite"/>
                        </path>
                      </g>
                    )}
                    <g>
                      {[...Array(3)].map((_,dotIndex) => {
                        const x=80+(dotIndex*120), y=60+(dotIndex*40), delay=dotIndex*1.5;
                        return (
                          <circle key={`dot-${dotIndex}`} cx={x} cy={y} r="1.5" fill="#1F7CFF" opacity="0.6">
                            <animateTransform attributeName="transform" type="translate" values="0,0; 8,-12; -5,10; 0,0" dur="6s" repeatCount="indefinite" begin={`${delay}s`}/>
                            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" begin={`${delay}s`}/>
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '4rem', alignItems: 'center' }}>
              <div style={{ textAlign: 'left', color: 'white' }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '900', lineHeight: '1.0', marginBottom: '1rem', color: '#1F7CFF', textShadow: '0 0 10px rgba(31,124,255,0.3)' }}>
                  AI Automation for Fredericton Businesses
                </h1>
                <h2 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', fontWeight: '700', lineHeight: '1.3', marginBottom: '1.5rem', color: '#e2e8f0' }}>
                  Let the Software Do the Repetitive Work
                </h2>
                <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: 'rgba(255,255,255,0.8)', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '520px', fontWeight: '300' }}>
                  Fredericton businesses are losing hours every week to tasks a well-built automation could handle in seconds. We build AI chatbots, email sequences, social media workflows, and data integrations — set up once, running without you.
                </p>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', marginBottom: '2.5rem', maxWidth: '520px', lineHeight: '1.6' }}>
                  Serving Fredericton, Oromocto, Gagetown, Nackawic, Woodstock, and surrounding Capital Region communities.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <a href="/contact" className="hero-button">Get a Free Consultation</a>
                </div>
              </div>

              <div className="hero-service-cards" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: 'auto', justifyContent: 'center' }}>
                <a href="/contact" className="automation-card" style={{ background: 'linear-gradient(135deg, rgba(29,122,175,0.15), rgba(29,122,175,0.08))', border: '2px solid rgba(29,122,175,0.3)', borderRadius: '12px', padding: '1.5rem', backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px rgba(29,122,175,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '80px', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)', animation: 'pulseGlow 3s ease-in-out infinite' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'flex-start' }}>
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Automate</h3>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Business Processes & Workflows</p>
                    <span style={{ color: '#1F7CFF', fontSize: '0.8rem', fontWeight: '500', marginTop: '0.25rem' }}>Learn More</span>
                  </div>
                  <div style={{ marginLeft: '1rem', flexShrink: 0 }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2"/>
                      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </a>
                <a href="/contact" className="automation-card" style={{ background: 'linear-gradient(135deg, rgba(29,122,175,0.15), rgba(29,122,175,0.08))', border: '2px solid rgba(29,122,175,0.3)', borderRadius: '12px', padding: '1.5rem', backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px rgba(29,122,175,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '80px', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)', animation: 'pulseGlow 3s ease-in-out infinite 1s' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'flex-start' }}>
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Optimize</h3>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Efficiency & Productivity</p>
                    <span style={{ color: '#1F7CFF', fontSize: '0.8rem', fontWeight: '500', marginTop: '0.25rem' }}>Learn More</span>
                  </div>
                  <div style={{ marginLeft: '1rem', flexShrink: 0 }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="12" width="4" height="9" rx="1" stroke="white" strokeWidth="2"/>
                      <rect x="10" y="7" width="4" height="14" rx="1" stroke="white" strokeWidth="2"/>
                      <rect x="17" y="3" width="4" height="18" rx="1" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                </a>
                <a href="/contact" className="automation-card" style={{ background: 'linear-gradient(135deg, rgba(29,122,175,0.15), rgba(29,122,175,0.08))', border: '2px solid rgba(29,122,175,0.3)', borderRadius: '12px', padding: '1.5rem', backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px rgba(29,122,175,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '80px', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)', animation: 'pulseGlow 3s ease-in-out infinite 2s' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'flex-start' }}>
                    <h3 style={{ color: '#1F7CFF', fontSize: '1.8rem', fontWeight: '700', margin: '0', lineHeight: '1.2', textAlign: 'left' }}>Grow</h3>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem', margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Revenue & Customer Relationships</p>
                    <span style={{ color: '#1F7CFF', fontSize: '0.8rem', fontWeight: '500', marginTop: '0.25rem' }}>Learn More</span>
                  </div>
                  <div style={{ marginLeft: '1rem', flexShrink: 0 }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <path d="M22 7l-8.5 8.5-5-5L2 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 7h6v6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What We Automate */}
        <section style={{ background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)', padding: '80px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: '700', color: 'white', marginBottom: '20px' }}>What We Automate for Fredericton Businesses</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                From solo operators to growing teams — if it's repetitive, manual, or error-prone, it's a candidate for automation.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '1100px', margin: '0 auto' }}>
              {[
                {
                  num: '01', id: 'workflow-automation', title: 'Workflow Automation',
                  desc: 'Connect your apps and eliminate copy-paste work. Forms, spreadsheets, CRMs, invoices — data moves automatically without anyone touching it.',
                  icon: <svg width="32" height="32" viewBox="0 0 36 36" fill="none"><circle cx="8" cy="18" r="5" stroke="white" strokeWidth="1.8"/><circle cx="28" cy="8" r="5" stroke="white" strokeWidth="1.8"/><circle cx="28" cy="28" r="5" stroke="white" strokeWidth="1.8"/><line x1="13" y1="18" x2="20" y2="18" stroke="white" strokeWidth="1.8" strokeLinecap="round"/><line x1="23" y1="11" x2="23" y2="25" stroke="white" strokeWidth="1.8" strokeLinecap="round"/><line x1="20" y1="18" x2="23" y2="11" stroke="white" strokeWidth="1.8" strokeLinecap="round"/><line x1="20" y1="18" x2="23" y2="25" stroke="white" strokeWidth="1.8" strokeLinecap="round"/></svg>
                },
                {
                  num: '02', id: 'ai-chatbots', title: 'AI Chatbots',
                  desc: '24/7 customer service without the staffing cost. Chatbots that answer common questions, qualify leads, and collect contact info — trained on your business.',
                  icon: <svg width="32" height="32" viewBox="0 0 36 36" fill="none"><rect x="4" y="6" width="28" height="18" rx="4" stroke="white" strokeWidth="1.8"/><path d="M11 30l3-5h8l3 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="15" r="2" fill="white"/><circle cx="18" cy="15" r="2" fill="white"/><circle cx="24" cy="15" r="2" fill="white"/></svg>
                },
                {
                  num: '03', id: 'email-automation', title: 'Email Marketing Automation',
                  desc: 'Follow-up sequences, lead nurturing, and review requests sent automatically after every job or inquiry. Never chase a lead manually again.',
                  icon: <svg width="32" height="32" viewBox="0 0 36 36" fill="none"><rect x="4" y="8" width="28" height="20" rx="3" stroke="white" strokeWidth="1.8"/><path d="M4 13l14 9 14-9" stroke="white" strokeWidth="1.8" strokeLinecap="round"/></svg>
                },
                {
                  num: '04', id: 'social-media', title: 'Social Media Scheduling',
                  desc: 'Weeks of posts planned and published automatically. Build your local Fredericton audience without spending an hour a day on social.',
                  icon: <svg width="32" height="32" viewBox="0 0 36 36" fill="none"><rect x="4" y="4" width="28" height="28" rx="4" stroke="white" strokeWidth="1.8"/><path d="M4 13h28" stroke="white" strokeWidth="1.8"/><circle cx="10" cy="8.5" r="1.5" fill="white"/><circle cx="16" cy="8.5" r="1.5" fill="white"/><rect x="9" y="18" width="5" height="4" rx="1" stroke="white" strokeWidth="1.5"/><rect x="16" y="18" width="5" height="4" rx="1" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="1.5"/><rect x="9" y="24" width="5" height="4" rx="1" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="1.5"/><rect x="22" y="18" width="5" height="10" rx="1" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.5"/></svg>
                },
                {
                  num: '05', id: 'data-integration', title: 'Data Integration',
                  desc: 'Connect your booking system, payment processor, and accounting software. Eliminate double-entry and get one view of your business.',
                  icon: <svg width="32" height="32" viewBox="0 0 36 36" fill="none"><ellipse cx="18" cy="10" rx="12" ry="4" stroke="white" strokeWidth="1.8"/><path d="M6 10v6c0 2.2 5.4 4 12 4s12-1.8 12-4v-6" stroke="white" strokeWidth="1.8"/><path d="M6 16v6c0 2.2 5.4 4 12 4s12-1.8 12-4v-6" stroke="white" strokeWidth="1.8"/></svg>
                },
                {
                  num: '06', id: 'document-automation', title: 'Document Automation',
                  desc: 'Proposals, contracts, invoices, and reports generated and sent automatically based on triggers. Done in seconds instead of minutes.',
                  icon: <svg width="32" height="32" viewBox="0 0 36 36" fill="none"><path d="M8 4h14l8 8v20a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="white" strokeWidth="1.8"/><path d="M22 4v8h8" stroke="white" strokeWidth="1.8" strokeLinecap="round"/><line x1="12" y1="16" x2="24" y2="16" stroke="white" strokeWidth="1.8" strokeLinecap="round"/><line x1="12" y1="21" x2="24" y2="21" stroke="white" strokeWidth="1.8" strokeLinecap="round"/><line x1="12" y1="26" x2="20" y2="26" stroke="white" strokeWidth="1.8" strokeLinecap="round"/></svg>
                }
              ].map(({ num, id, title, desc, icon }) => (
                <a key={num} href={`#${id}`} style={{ display: 'block', textDecoration: 'none', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', padding: '28px 22px', border: '1px solid rgba(255,255,255,0.12)', transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.11)'; e.currentTarget.style.borderColor = 'rgba(31,124,255,0.5)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div style={{ width: '54px', height: '54px', background: 'linear-gradient(135deg, #1d7aaf, #1e40af)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {icon}
                    </div>
                    <span style={{ fontSize: '0.7rem', fontWeight: '700', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.1em' }}>{num}</span>
                  </div>
                  <h3 style={{ color: 'white', fontSize: '1.05rem', fontWeight: '700', marginBottom: '10px' }}>{title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.88rem', lineHeight: '1.6', margin: '0 0 14px' }}>{desc}</p>
                  <div style={{ fontSize: '0.78rem', color: '#60a5fa', fontWeight: '600', letterSpacing: '0.02em' }}>View details ↓</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Deep-dive: Workflow Automation */}
        <section id="workflow-automation" style={{ padding: '80px 0', background: 'white' }}>
          <div className="container">
            <div style={{ maxWidth: '860px', margin: '0 auto' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, rgba(29,122,175,0.12), rgba(30,64,175,0.12))', border: '1px solid rgba(29,122,175,0.3)', color: '#1d7aaf', padding: '6px 16px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>
                Workflow Automation
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: '700', color: '#1a1a2e', marginBottom: '8px' }}>
                Workflow Automation for Fredericton Businesses
              </h2>
              <div style={{ width: '50px', height: '4px', background: 'linear-gradient(135deg, #1d7aaf, #1e40af)', borderRadius: '2px', marginBottom: '2rem', marginTop: '8px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '3rem', alignItems: 'start', marginBottom: '2rem' }}>
                <div>
                  <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                    Workflow automation connects the software tools your business already uses so data moves between them automatically, without anyone copying, pasting, or re-entering it. When a form is filled, a payment is received, or a job is marked complete, the right information flows to the right place immediately. The process runs the same way every time, with no missed steps.
                  </p>
                  <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                    Research consistently shows that managers and business owners spend 8 or more hours per week on routine data tasks that automation can handle. For a small Fredericton operation, that is a full workday recovered every single week.
                  </p>
                </div>
                <img
                  src="/images/automations/workflow.jpg"
                  alt="Workflow automation for Fredericton businesses"
                  style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', objectFit: 'cover', height: '280px' }}
                />
              </div>

              <div style={{ background: 'linear-gradient(135deg, rgba(29,122,175,0.06), rgba(30,64,175,0.04))', border: '1px solid rgba(29,122,175,0.15)', borderLeft: '4px solid #1d7aaf', borderRadius: '0 12px 12px 0', padding: '24px 28px', marginBottom: '2rem', marginTop: '2rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#1d7aaf', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>In Practice</div>
                <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.8', margin: 0 }}>
                  A Fredericton plumbing company uses an online booking form. When a customer submits it, the automation creates a job in their CRM, fires a confirmation email to the customer, adds the appointment to the technician's calendar, and sends an SMS reminder 24 hours before. No staff involvement required. A retail shop connects its e-commerce platform to its accounting software — every sale automatically creates an invoice and updates inventory counts. A professional services firm routes every new contact form submission into their client database, tags them by service interest, and starts a follow-up email sequence the same hour.
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#64748b', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Benefits</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  {[
                    'Eliminates 5-10 hours per week of manual data entry for most service businesses',
                    'Reduces data entry errors by removing human copy-paste steps between systems',
                    'Responds to leads and customers instantly, even outside business hours',
                    'Processes run the same way every time — no missed steps, no forgotten follow-ups',
                    'Works across 8,000+ apps including QuickBooks, Google Workspace, Jobber, HubSpot, Stripe, and more',
                    'Typically pays for itself within 2-3 months when replacing even part-time admin work'
                  ].map((benefit, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '14px 16px' }}>
                      <div style={{ width: '22px', height: '22px', background: 'linear-gradient(135deg, #1d7aaf, #1e40af)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span style={{ color: '#374151', fontSize: '0.92rem', lineHeight: '1.5' }}>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#64748b', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Common Triggers We Set Up</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {[
                    'New form submission triggers CRM entry, email confirmation, and calendar event',
                    'Completed job triggers invoice creation and a review request email',
                    'New payment received triggers accounting entry and a receipt to the customer',
                    'New lead from website triggers immediate notification to the owner\'s phone',
                    'Weekly schedule triggers a report delivered to your inbox every Monday morning'
                  ].map((trigger, i) => (
                    <div key={i} style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 16px', fontSize: '0.88rem', color: '#374151', lineHeight: '1.4' }}>{trigger}</div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0', flexWrap: 'wrap' }}>
                <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.6', margin: 0, flex: 1, minWidth: '200px' }}>
                  If you can describe the steps your team does manually, we can almost certainly automate them.
                </p>
                <a href="/contact" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #1d7aaf, #1e40af)', color: 'white', padding: '12px 28px', borderRadius: '8px', fontWeight: '600', fontSize: '0.95rem', textDecoration: 'none', whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(29,122,175,0.3)' }}>
                  Book a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Deep-dive: AI Chatbots */}
        <section id="ai-chatbots" style={{ padding: '80px 0', background: '#f8fafc' }}>
          <div className="container">
            <div style={{ maxWidth: '860px', margin: '0 auto' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, rgba(29,122,175,0.12), rgba(30,64,175,0.12))', border: '1px solid rgba(29,122,175,0.3)', color: '#1d7aaf', padding: '6px 16px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>
                AI Chatbots
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: '700', color: '#1a1a2e', marginBottom: '8px' }}>
                AI Chatbots for Fredericton Businesses
              </h2>
              <div style={{ width: '50px', height: '4px', background: 'linear-gradient(135deg, #1d7aaf, #1e40af)', borderRadius: '2px', marginBottom: '2rem', marginTop: '8px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '3rem', alignItems: 'start', marginBottom: '2rem' }}>
                <div>
                  <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                    An AI chatbot is a trained conversational assistant that lives on your website and answers visitor questions in real time, around the clock. Unlike simple FAQ pages, a well-built chatbot understands natural language, asks qualifying questions, collects contact details, and routes conversations to the right person when needed. It is trained specifically on your services, pricing, hours, service area, and common customer questions.
                  </p>
                  <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                    Studies show that 64% of consumers rate 24/7 availability as the top benefit of chatbots, and 55% of businesses using chatbots for marketing report an increase in high-quality leads. For a Fredericton business with no after-hours staff, a chatbot is effectively a front-desk employee who never goes home.
                  </p>
                </div>
                <img
                  src="/images/automations/chatbot.jpg"
                  alt="AI chatbot for Fredericton businesses"
                  style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', objectFit: 'cover', height: '280px' }}
                />
              </div>

              <div style={{ background: 'linear-gradient(135deg, rgba(29,122,175,0.06), rgba(30,64,175,0.04))', border: '1px solid rgba(29,122,175,0.15)', borderLeft: '4px solid #1d7aaf', borderRadius: '0 12px 12px 0', padding: '24px 28px', marginBottom: '2rem', marginTop: '2rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#1d7aaf', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>In Practice</div>
                <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.8', margin: 0 }}>
                  A Fredericton contractor's chatbot answers questions about project timelines and service areas at 10pm, then asks for the visitor's name and phone number and flags the conversation for follow-up the next morning. A dental clinic's chatbot handles booking inquiries and insurance questions instantly, reducing phone volume. A local retail store uses a chatbot to handle "do you carry X?" questions, check availability, and link directly to the product page. In each case, the business captures interest that would otherwise leave without converting.
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#64748b', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Benefits</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  {[
                    'Responds to every website visitor immediately, 24 hours a day, 7 days a week',
                    'Captures lead information automatically — name, email, phone, and what they need',
                    'Reduces phone and email volume for routine questions by 30-50% for most clients',
                    'Increases contact form conversions by engaging visitors before they leave',
                    'Trained on your actual business — not a generic script that confuses customers',
                    'Hands off to a human when the conversation needs personal attention'
                  ].map((benefit, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '14px 16px' }}>
                      <div style={{ width: '22px', height: '22px', background: 'linear-gradient(135deg, #1d7aaf, #1e40af)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span style={{ color: '#374151', fontSize: '0.92rem', lineHeight: '1.5' }}>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#64748b', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>What Gets Automated</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {[
                    'Answering pricing and service questions without staff involvement',
                    'Qualifying leads by asking about project type, timeline, and budget',
                    'Collecting contact information and routing to your CRM or email inbox',
                    'Booking appointments directly into your calendar system',
                    'Providing hours, location, and service area information instantly'
                  ].map((item, i) => (
                    <div key={i} style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 16px', fontSize: '0.88rem', color: '#374151', lineHeight: '1.4' }}>{item}</div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0', flexWrap: 'wrap' }}>
                <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.6', margin: 0, flex: 1, minWidth: '200px' }}>
                  We build chatbots specific to your industry and train them on your business content.
                </p>
                <a href="/contact" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #1d7aaf, #1e40af)', color: 'white', padding: '12px 28px', borderRadius: '8px', fontWeight: '600', fontSize: '0.95rem', textDecoration: 'none', whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(29,122,175,0.3)' }}>
                  Book a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Deep-dive: Email Marketing Automation */}
        <section id="email-automation" style={{ padding: '80px 0', background: 'white' }}>
          <div className="container">
            <div style={{ maxWidth: '860px', margin: '0 auto' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, rgba(29,122,175,0.12), rgba(30,64,175,0.12))', border: '1px solid rgba(29,122,175,0.3)', color: '#1d7aaf', padding: '6px 16px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>
                Email Marketing
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: '700', color: '#1a1a2e', marginBottom: '8px' }}>
                Email Marketing Automation for Fredericton Businesses
              </h2>
              <div style={{ width: '50px', height: '4px', background: 'linear-gradient(135deg, #1d7aaf, #1e40af)', borderRadius: '2px', marginBottom: '2rem', marginTop: '8px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '3rem', alignItems: 'start', marginBottom: '2rem' }}>
                <div>
                  <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                    Email marketing automation means sending the right message to the right person at the right time — without anyone hitting send manually. You set up the sequence once: what gets sent, when it goes out, and what triggers it. After that, every new lead or customer enters the sequence automatically and moves through it based on their behaviour.
                  </p>
                  <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                    The numbers behind email automation are hard to argue with. Automated emails generate 320% more revenue than non-automated campaigns. For every dollar spent on email marketing, businesses average $36 in return. Drip campaigns — sequences sent over days or weeks — have click rates three times higher than one-off blasts.
                  </p>
                </div>
                <img
                  src="/images/automations/email.jpg"
                  alt="Email marketing automation for Fredericton businesses"
                  style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', objectFit: 'cover', height: '280px' }}
                />
              </div>

              <div style={{ background: 'linear-gradient(135deg, rgba(29,122,175,0.06), rgba(30,64,175,0.04))', border: '1px solid rgba(29,122,175,0.15)', borderLeft: '4px solid #1d7aaf', borderRadius: '0 12px 12px 0', padding: '24px 28px', marginBottom: '2rem', marginTop: '2rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#1d7aaf', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>In Practice</div>
                <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.8', margin: 0 }}>
                  A Fredericton renovation company sends a quote follow-up sequence: an immediate "thank you for your inquiry" email, then a project showcase email two days later, then a soft check-in at day five if there has been no response. A landscaping business sends a review request three days after every completed job, then a seasonal service reminder in spring. A professional services firm nurtures new newsletter subscribers with a five-email welcome sequence that explains what they do and shows relevant case studies — all sent automatically over two weeks.
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#64748b', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Benefits</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  {[
                    'Follow-up happens automatically — no more leads falling through the cracks',
                    'Automated welcome emails average 82% open rates, far above standard campaign averages',
                    'Review requests sent at the right moment increase Google review volume significantly',
                    'Sequences nurture cold leads over weeks without any manual effort',
                    'Unsubscribes, bounces, and list hygiene handled automatically',
                    'Works with your existing email provider: Mailchimp, ActiveCampaign, Kit, and others'
                  ].map((benefit, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '14px 16px' }}>
                      <div style={{ width: '22px', height: '22px', background: 'linear-gradient(135deg, #1d7aaf, #1e40af)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span style={{ color: '#374151', fontSize: '0.92rem', lineHeight: '1.5' }}>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#64748b', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Common Sequences We Build</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {[
                    'New lead welcome sequence triggered by contact form submission',
                    'Post-job review request sent 2-3 days after work is marked complete',
                    'Quote follow-up series for leads who did not respond',
                    'Seasonal reactivation email for past customers',
                    'Newsletter welcome sequence for new subscribers',
                    'Appointment reminder and confirmation emails'
                  ].map((item, i) => (
                    <div key={i} style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 16px', fontSize: '0.88rem', color: '#374151', lineHeight: '1.4' }}>{item}</div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0', flexWrap: 'wrap' }}>
                <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.6', margin: 0, flex: 1, minWidth: '200px' }}>
                  Most of our clients have existing customer lists that are sitting unused. We can put that list to work with sequences built around your actual services.
                </p>
                <a href="/contact" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #1d7aaf, #1e40af)', color: 'white', padding: '12px 28px', borderRadius: '8px', fontWeight: '600', fontSize: '0.95rem', textDecoration: 'none', whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(29,122,175,0.3)' }}>
                  Book a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Deep-dive: Social Media Scheduling */}
        <section id="social-media" style={{ padding: '80px 0', background: '#f8fafc' }}>
          <div className="container">
            <div style={{ maxWidth: '860px', margin: '0 auto' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, rgba(29,122,175,0.12), rgba(30,64,175,0.12))', border: '1px solid rgba(29,122,175,0.3)', color: '#1d7aaf', padding: '6px 16px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>
                Social Media Scheduling
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: '700', color: '#1a1a2e', marginBottom: '8px' }}>
                Social Media Scheduling for Fredericton Businesses
              </h2>
              <div style={{ width: '50px', height: '4px', background: 'linear-gradient(135deg, #1d7aaf, #1e40af)', borderRadius: '2px', marginBottom: '2rem', marginTop: '8px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '3rem', alignItems: 'start', marginBottom: '2rem' }}>
                <div>
                  <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                    Social media scheduling means planning and queuing your posts in advance, then having them publish automatically at optimal times across your platforms. Instead of logging into Facebook or Instagram every day to post something, you batch your content creation into one focused session and let the scheduling tool do the rest. The result is a consistent, active presence on social media without the daily distraction.
                  </p>
                  <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                    Consistency is the single biggest factor in social media growth for local businesses. An account that posts three times a week, every week, outperforms one that posts daily for a burst and then goes silent. Scheduling is what makes consistency achievable without it consuming hours of your week.
                  </p>
                </div>
                <img
                  src="/images/automations/social.jpg"
                  alt="Social media scheduling tools"
                  style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', objectFit: 'cover', height: '280px' }}
                />
              </div>

              <div style={{ background: 'linear-gradient(135deg, rgba(29,122,175,0.06), rgba(30,64,175,0.04))', border: '1px solid rgba(29,122,175,0.15)', borderLeft: '4px solid #1d7aaf', borderRadius: '0 12px 12px 0', padding: '24px 28px', marginBottom: '2rem', marginTop: '2rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#1d7aaf', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>In Practice</div>
                <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.8', margin: 0 }}>
                  A Fredericton trades business spends 90 minutes on a Monday morning preparing three posts for the week — a before/after photo from a recent job, a customer tip, and a service highlight. Those three posts publish automatically on Tuesday, Thursday, and Saturday at the times their audience is most active. A local restaurant queues a month of posts in one afternoon, mixing seasonal promotions, staff spotlights, and daily specials. We can also connect AI content generation tools to help draft captions so the writing step takes minutes instead of an hour.
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#64748b', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Benefits</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  {[
                    'Reduces daily social media time from 30-60 minutes to a single weekly batch session',
                    'Posts go live at optimal times for your audience, not just when you remember',
                    'Consistent posting schedule builds local followers steadily over time',
                    'One tool manages Facebook, Instagram, Google Business Profile, and LinkedIn simultaneously',
                    'Content calendar view lets you see and adjust a full month at a glance',
                    'Recycling evergreen content automatically keeps your feed active with minimal new work'
                  ].map((benefit, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '14px 16px' }}>
                      <div style={{ width: '22px', height: '22px', background: 'linear-gradient(135deg, #1d7aaf, #1e40af)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span style={{ color: '#374151', fontSize: '0.92rem', lineHeight: '1.5' }}>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#64748b', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>What Gets Automated</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {[
                    'Scheduled publishing across multiple platforms from one dashboard',
                    'Optimal time selection based on when your specific audience is online',
                    'Automatic cross-posting from Facebook to Instagram or Google Business Profile',
                    'Bulk upload of a month\'s content from a spreadsheet or content calendar',
                    'Notification when a post receives comments or messages requiring a response'
                  ].map((item, i) => (
                    <div key={i} style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 16px', fontSize: '0.88rem', color: '#374151', lineHeight: '1.4' }}>{item}</div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0', flexWrap: 'wrap' }}>
                <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.6', margin: 0, flex: 1, minWidth: '200px' }}>
                  We set up the scheduling system, connect your accounts, and build a content template your team can fill in without a learning curve.
                </p>
                <a href="/contact" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #1d7aaf, #1e40af)', color: 'white', padding: '12px 28px', borderRadius: '8px', fontWeight: '600', fontSize: '0.95rem', textDecoration: 'none', whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(29,122,175,0.3)' }}>
                  Book a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Deep-dive: Data Integration */}
        <section id="data-integration" style={{ padding: '80px 0', background: 'white' }}>
          <div className="container">
            <div style={{ maxWidth: '860px', margin: '0 auto' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, rgba(29,122,175,0.12), rgba(30,64,175,0.12))', border: '1px solid rgba(29,122,175,0.3)', color: '#1d7aaf', padding: '6px 16px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>
                Data Integration
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: '700', color: '#1a1a2e', marginBottom: '8px' }}>
                Data Integration for Fredericton Businesses
              </h2>
              <div style={{ width: '50px', height: '4px', background: 'linear-gradient(135deg, #1d7aaf, #1e40af)', borderRadius: '2px', marginBottom: '2rem', marginTop: '8px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '3rem', alignItems: 'start', marginBottom: '2rem' }}>
                <div>
                  <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                    Data integration connects separate software systems so they share information automatically, without manual exports, imports, or copy-paste. When your booking system, payment processor, accounting software, and CRM all talk to each other, you stop re-entering the same data in four different places. Every record stays accurate and up to date across all your tools.
                  </p>
                  <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                    Double data entry is one of the most common and costly time drains for small businesses. It is also a primary source of billing errors, missed follow-ups, and reporting inaccuracies. Integration eliminates the problem at the source by making data flow happen automatically the moment a record is created or updated.
                  </p>
                </div>
                <img
                  src="/images/automations/data.jpg"
                  alt="Business data integration and analytics"
                  style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', objectFit: 'cover', height: '280px' }}
                />
              </div>

              <div style={{ background: 'linear-gradient(135deg, rgba(29,122,175,0.06), rgba(30,64,175,0.04))', border: '1px solid rgba(29,122,175,0.15)', borderLeft: '4px solid #1d7aaf', borderRadius: '0 12px 12px 0', padding: '24px 28px', marginBottom: '2rem', marginTop: '2rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#1d7aaf', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>In Practice</div>
                <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.8', margin: 0 }}>
                  A Fredericton service company uses three separate tools: a job management app, Stripe for payments, and QuickBooks for accounting. We build integrations so that when a job is marked complete in the job app, an invoice is automatically created in QuickBooks, the payment is reconciled when Stripe processes it, and the customer record is updated in all three systems. A retail business syncs its online store with its point-of-sale system so inventory counts are always accurate regardless of where a sale happens. A professional services firm connects their intake form to their project management tool and their billing platform so a new client file, project board, and invoicing account are all created from a single form submission.
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#64748b', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Benefits</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  {[
                    'Eliminates double data entry across multiple systems',
                    'Reduces billing errors caused by inconsistent records between apps',
                    'Gives a single accurate view of your customer, job, and financial data',
                    'Works with over 8,000 apps including Jobber, QuickBooks, Stripe, HubSpot, Shopify, and Google Sheets',
                    'Scales as you add new tools — integrations can be extended without rebuilding from scratch',
                    'Reduces the administrative overhead of reconciling data between systems'
                  ].map((benefit, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '14px 16px' }}>
                      <div style={{ width: '22px', height: '22px', background: 'linear-gradient(135deg, #1d7aaf, #1e40af)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span style={{ color: '#374151', fontSize: '0.92rem', lineHeight: '1.5' }}>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#64748b', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Common Integrations We Build</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {[
                    'Booking or job management system to accounting software (QuickBooks, Wave, FreshBooks)',
                    'Payment processor to CRM and invoicing platform',
                    'Contact form or lead capture to CRM (HubSpot, Pipedrive, Zoho)',
                    'E-commerce platform to inventory and fulfillment systems',
                    'Google Sheets to any operational tool for reporting and dashboards',
                    'Scheduling tool to calendar and notification systems'
                  ].map((item, i) => (
                    <div key={i} style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 16px', fontSize: '0.88rem', color: '#374151', lineHeight: '1.4' }}>{item}</div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0', flexWrap: 'wrap' }}>
                <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.6', margin: 0, flex: 1, minWidth: '200px' }}>
                  Tell us which tools you use and where data falls through the cracks. We will build the integrations that close those gaps.
                </p>
                <a href="/contact" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #1d7aaf, #1e40af)', color: 'white', padding: '12px 28px', borderRadius: '8px', fontWeight: '600', fontSize: '0.95rem', textDecoration: 'none', whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(29,122,175,0.3)' }}>
                  Book a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Deep-dive: Document Automation */}
        <section id="document-automation" style={{ padding: '80px 0', background: '#f8fafc' }}>
          <div className="container">
            <div style={{ maxWidth: '860px', margin: '0 auto' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, rgba(29,122,175,0.12), rgba(30,64,175,0.12))', border: '1px solid rgba(29,122,175,0.3)', color: '#1d7aaf', padding: '6px 16px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>
                Document Automation
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: '700', color: '#1a1a2e', marginBottom: '8px' }}>
                Document Automation for Fredericton Businesses
              </h2>
              <div style={{ width: '50px', height: '4px', background: 'linear-gradient(135deg, #1d7aaf, #1e40af)', borderRadius: '2px', marginBottom: '2rem', marginTop: '8px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '3rem', alignItems: 'start', marginBottom: '2rem' }}>
                <div>
                  <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                    Document automation generates professional documents — proposals, contracts, invoices, work orders, and reports — from templates automatically, using data that already exists in your system. Instead of opening a Word document, copying a previous version, updating the client name and project details, and hoping you did not miss anything, the document is generated and sent in seconds based on a trigger you define.
                  </p>
                  <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                    Research shows that document automation reduces document creation time by 50 to 80 percent. A process that takes 20-30 minutes manually takes under a minute when automated. For businesses that generate multiple documents per day, that adds up to several hours recovered every week.
                  </p>
                </div>
                <img
                  src="/images/automations/documents.jpg"
                  alt="Document automation for business"
                  style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', objectFit: 'cover', height: '280px' }}
                />
              </div>

              <div style={{ background: 'linear-gradient(135deg, rgba(29,122,175,0.06), rgba(30,64,175,0.04))', border: '1px solid rgba(29,122,175,0.15)', borderLeft: '4px solid #1d7aaf', borderRadius: '0 12px 12px 0', padding: '24px 28px', marginBottom: '2rem', marginTop: '2rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#1d7aaf', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>In Practice</div>
                <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.8', margin: 0 }}>
                  A Fredericton renovation contractor fills out a short intake form with the client name, job address, scope, and price. The automation generates a fully formatted proposal PDF, attaches it to an email, and sends it to the client within seconds. When the client accepts, the same data populates a contract, which is sent for e-signature automatically. Once signed, the system creates the first invoice with the deposit amount and sends it directly to the client. An accounting firm automates their monthly client reports — the data is pulled from the client's books, the report is generated in a standard format, and it is emailed to the client on the first of every month without anyone touching it.
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#64748b', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Benefits</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  {[
                    'Generates proposals, contracts, and invoices in seconds instead of 20-30 minutes',
                    'Eliminates copy-paste errors in client-facing documents',
                    'Consistent formatting and branding across every document, every time',
                    'Studies show automated proposals improve sales win rates by over 50%',
                    'Documents can be sent for e-signature automatically without additional steps',
                    'Scales with volume — automate 5 documents or 500 with the same effort'
                  ].map((benefit, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '14px 16px' }}>
                      <div style={{ width: '22px', height: '22px', background: 'linear-gradient(135deg, #1d7aaf, #1e40af)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span style={{ color: '#374151', fontSize: '0.92rem', lineHeight: '1.5' }}>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#64748b', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Documents We Automate</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {[
                    'Project proposals and quotes generated from intake form data',
                    'Service agreements and contracts sent automatically after quote acceptance',
                    'Invoices created when a job is completed or a milestone is reached',
                    'Work orders and job sheets generated from booking or dispatch systems',
                    'Monthly reports populated from live data and delivered on a schedule',
                    'Welcome packages and onboarding documents sent automatically to new clients'
                  ].map((item, i) => (
                    <div key={i} style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 16px', fontSize: '0.88rem', color: '#374151', lineHeight: '1.4' }}>{item}</div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0', flexWrap: 'wrap' }}>
                <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.6', margin: 0, flex: 1, minWidth: '200px' }}>
                  If you are still building documents manually from templates, we can almost certainly automate that process.
                </p>
                <a href="/contact" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #1d7aaf, #1e40af)', color: 'white', padding: '12px 28px', borderRadius: '8px', fontWeight: '600', fontSize: '0.95rem', textDecoration: 'none', whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(29,122,175,0.3)' }}>
                  Book a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why LogicPros in Fredericton */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why Fredericton Businesses Choose LogicPros for Automation</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
              {[
                { title: 'Local, not a remote agency', desc: 'Based in Fredericton. You can call, meet in person, or email. No offshore hand-offs, no ticket queue.' },
                { title: '21 years in technology', desc: 'Aaron Hefling — former IT lead for the Government of New Brunswick — builds automations that are reliable, not experimental.' },
                { title: 'Set up once, runs without you', desc: 'We build it, test it, and hand it off running. You don\'t need to understand how it works — it just does.' }
              ].map(({ title, desc }, i) => (
                <div key={i} style={{ background: 'white', borderRadius: '16px', padding: '35px 28px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid rgba(29,122,175,0.1)' }}>
                  <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #1d7aaf, #1e40af)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <span style={{ color: 'white', fontWeight: '900', fontSize: '1.2rem' }}>{i + 1}</span>
                  </div>
                  <h3 style={{ color: colors.text.primary, fontSize: '1.15rem', fontWeight: '700', marginBottom: '12px' }}>{title}</h3>
                  <p style={{ color: colors.text.secondary, fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section style={{ background: '#1a1a2e', padding: '50px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              {[
                { stat: '8+ hrs', label: 'saved per week per client' },
                { stat: '2–3 mo', label: 'typical payback period' },
                { stat: '8,000+', label: 'apps we can connect' },
                { stat: '100%', label: 'built in New Brunswick' }
              ].map(({ stat, label }, i) => (
                <div key={i} style={{ padding: '20px 10px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                  <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: '800', color: '#1F7CFF', lineHeight: '1' }}>{stat}</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: '8px', lineHeight: '1.4' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section style={{ padding: '80px 0', background: 'white' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: '700', color: '#1a1a2e', marginBottom: '16px' }}>How It Works</h2>
              <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '580px', margin: '0 auto' }}>Four steps from first conversation to a fully running automation.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '32px', left: 'calc(12.5% + 24px)', right: 'calc(12.5% + 24px)', height: '2px', background: 'linear-gradient(90deg, #1d7aaf, #1e40af)', zIndex: 0 }}></div>
              {[
                { step: '01', title: 'Free Audit', desc: 'We map your current workflows and identify what\'s worth automating first.' },
                { step: '02', title: 'Automation Plan', desc: 'You approve the exact scope, tools, and timeline before we build anything.' },
                { step: '03', title: 'Build & Test', desc: 'We build, test, and document every workflow with real data before launch.' },
                { step: '04', title: 'Handoff & Support', desc: 'It runs without you. We\'re available if anything ever needs adjustment.' }
              ].map(({ step, title, desc }, i) => (
                <div key={i} style={{ padding: '0 20px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, #1d7aaf, #1e40af)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', boxShadow: '0 4px 16px rgba(29,122,175,0.3)' }}>
                    <span style={{ color: 'white', fontWeight: '800', fontSize: '1rem' }}>{step}</span>
                  </div>
                  <h3 style={{ color: '#1a1a2e', fontSize: '1.05rem', fontWeight: '700', marginBottom: '10px' }}>{title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section style={{ padding: '80px 0', background: '#f8fafc' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: '700', color: '#1a1a2e', marginBottom: '16px' }}>Industries We Serve in Fredericton & the Capital Region</h2>
              <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto' }}>Serving businesses in Fredericton, Oromocto, Gagetown, Nackawic, and Woodstock across every sector.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', maxWidth: '860px', margin: '0 auto' }}>
              {[
                { title: 'Trades & Contractors', desc: 'Plumbers, electricians, HVAC, roofers — automate booking, follow-up, and invoicing.' },
                { title: 'Retail & E-commerce', desc: 'Order processing, inventory updates, abandoned cart sequences, and loyalty follow-ups.' },
                { title: 'Professional Services', desc: 'Lawyers, accountants, consultants — intake forms, proposals, billing, and reporting.' },
                { title: 'Healthcare & Clinics', desc: 'Appointment reminders, intake forms, follow-up surveys, and records requests.' },
                { title: 'Real Estate', desc: 'Lead routing, listing updates, client follow-up sequences, and document generation.' },
                { title: 'Non-profits & Associations', desc: 'Volunteer coordination, donor follow-up, event registration, and membership renewal.' }
              ].map(({ title, desc }, i) => (
                <div key={i} style={{ background: 'white', borderRadius: '12px', padding: '24px 22px', border: '1px solid #e2e8f0', borderLeft: '3px solid #1d7aaf' }}>
                  <h3 style={{ color: '#1a1a2e', fontSize: '1rem', fontWeight: '700', marginBottom: '8px' }}>{title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '80px 0', background: 'white' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: '700', color: '#1a1a2e', marginBottom: '16px' }}>Frequently Asked Questions</h2>
              <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '580px', margin: '0 auto' }}>Common questions from Fredericton business owners about automation.</p>
            </div>
            <div style={{ maxWidth: '780px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { q: 'How much does business automation cost?', a: 'Most projects fall in the $500–$2,500 range depending on complexity and the number of systems involved. Simple single-workflow automations start lower; multi-system integrations with AI components are at the higher end. We quote every project individually after the free audit — no surprises.' },
                { q: 'Do I need to understand technology to use this?', a: 'No. We build and test everything, then hand it off running. You interact with the same forms, apps, and tools you already use — the automation works in the background without you needing to touch it.' },
                { q: 'How long does it take to set up?', a: 'Most automations are live within 1–3 weeks of project start. Complex multi-system integrations may take 4–6 weeks. We will give you a realistic timeline during the audit call.' },
                { q: 'What tools and apps do you work with?', a: 'We can connect any combination of the 8,000+ apps supported by major automation platforms — including QuickBooks, Jobber, HubSpot, Stripe, Google Workspace, Shopify, Calendly, Mailchimp, and hundreds more. If you use it, we can almost certainly connect it.' },
                { q: 'What happens if the automation breaks after an app update?', a: 'Automations are generally stable through app updates, but it does occasionally happen. We monitor the workflows we build and will fix any breakage quickly at no charge within the first 60 days. After that, we offer an affordable support plan.' },
                { q: 'Can I start with just one automation?', a: 'Absolutely. Most clients start with one high-impact workflow — often the one that wastes the most time — and expand from there once they see how it works. There is no minimum commitment.' }
              ].map(({ q, a }, i) => (
                <div key={i} style={{ background: '#f8fafc', borderRadius: '12px', padding: '24px 28px', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ color: '#1a1a2e', fontSize: '1.02rem', fontWeight: '700', marginBottom: '12px', lineHeight: '1.4' }}>{q}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)', padding: '80px 0', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: '700', color: 'white', marginBottom: '20px' }}>
              Ready to Automate Your Fredericton Business?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.15rem', maxWidth: '580px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
              Free consultation. No commitment. We'll look at your current processes and tell you exactly what's worth automating and what isn't.
            </p>
            <a href="/contact" className="hero-button" style={{ background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)', color: 'white', padding: '20px 50px', borderRadius: '50px', fontWeight: '700', fontSize: '1.1rem', textDecoration: 'none', display: 'inline-block', boxShadow: '0 8px 30px rgba(29,122,175,0.5)' }}>
              Book a Free Consultation
            </a>
            <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '20px', fontSize: '0.9rem' }}>
              (506) 478-2949 · contact@logicpros.ca · Fredericton, NB
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};
