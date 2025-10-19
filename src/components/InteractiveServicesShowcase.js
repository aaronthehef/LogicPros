import React, { useState } from 'react';
import { colors } from '../styles/colors';
import './InteractiveServicesShowcase.css';

export const InteractiveServicesShowcase = () => {
  const [activeService, setActiveService] = useState('websites');

  const switchService = (serviceId) => {
    setActiveService(serviceId);
  };

  const services = [
    {
      id: 'websites',
      label: 'Professional Websites',
      icon: '🌐',
      color: '#1F7CFF',
      title: 'Professional Websites That Convert Visitors',
      description: 'Custom websites that attract customers and grow your business. Built in 2-4 weeks with mobile optimization, SEO, and security.',
      features: [
        'Professional Design',
        'Mobile Optimization',
        'SEO & Google Visibility',
        'Lead Capture Forms',
        'Secure Hosting',
        'Performance Analytics'
      ],
      ctaText: 'Get Your FREE Website Example',
      ctaLink: '/free-example',
      ctaColor: '#FFC600'
    },
    {
      id: 'cybersecurity',
      label: 'Cybersecurity',
      icon: '🔒',
      color: '#1F7CFF',
      title: 'Protect Your Business with Enterprise-Grade Security',
      description: 'Complete cybersecurity protection for small to medium businesses. From threat detection to compliance, we keep your business safe.',
      features: [
        'Security Audits',
        'Multi-Factor Authentication',
        'Firewall Management',
        'Cloud Security',
        'Incident Response',
        'Compliance Support'
      ],
      ctaText: 'Request Security Assessment',
      ctaLink: '/contact',
      ctaColor: '#FFC600'
    },
    {
      id: 'it',
      label: 'Managed IT',
      icon: '💻',
      color: '#1F7CFF',
      title: 'Reliable IT Support That Keeps Your Business Running',
      description: 'Comprehensive IT support to keep your business technology running smoothly. From network monitoring to personalized assistance.',
      features: [
        '24/7 Network Monitoring',
        'Personalized Support',
        'Software Updates',
        'IT Asset Management',
        'Backup & Recovery',
        'IT Strategy Planning'
      ],
      ctaText: 'Request IT Service Consultation',
      ctaLink: '/contact',
      ctaColor: '#FFC600'
    },
    {
      id: 'automations',
      label: 'AI Automations',
      icon: '🤖',
      color: '#1F7CFF',
      title: 'Automate Your Business with AI-Powered Solutions',
      description: 'Streamline operations and boost efficiency with intelligent automation tools. From chatbots to workflow automation, we help you work smarter.',
      features: [
        'AI Chatbots',
        'Workflow Automation',
        'Lead Scoring Systems',
        'Email Automation',
        'Social Media Scheduling',
        'Data Analysis & Reporting'
      ],
      ctaText: 'Request Automation Consultation',
      ctaLink: '/contact',
      ctaColor: '#FFC600'
    }
  ];

  const currentService = services.find(s => s.id === activeService);

  return (
    <section className="section" style={{ backgroundColor: colors.backgrounds.light, position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Transform Your Business with Our Complete Solutions</h2>
          <p style={{ fontSize: '1.1rem', color: colors.text.secondary, maxWidth: '700px', margin: '0 auto' }}>
            Professional websites, cybersecurity, and IT support to grow your New Brunswick business
          </p>
        </div>
        
        {/* Service Card with Tabs */}
        <div className="service-card-container" style={{
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Service Tabs */}
          <div className="service-tabs" style={{
            display: 'flex',
            borderBottom: '1px solid #e9ecef'
          }}>
            {services.map((service) => (
              <button
                key={service.id}
                className={`service-tab ${activeService === service.id ? 'active' : ''}`}
                onClick={() => switchService(service.id)}
                style={{
                  flex: 1,
                  padding: '20px',
                  background: activeService === service.id ? service.color : 'transparent',
                  border: 'none',
                  color: activeService === service.id ? 'white' : colors.text.secondary,
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{service.icon}</span>
                {service.label}
              </button>
            ))}
          </div>
          
          {/* Service Content */}
          <div className="service-content" style={{ padding: '2rem' }}>
            {/* Websites Service Content */}
            {activeService === 'websites' && (
              <div className="service-content-panel service-content-grid">
                <div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: '700', color: currentService.color, marginBottom: '0.8rem' }}>
                    {currentService.title}
                  </h3>
                  <p style={{ fontSize: '1rem', lineHeight: '1.5', color: colors.text.secondary, marginBottom: '1.5rem' }}>
                    {currentService.description}
                  </p>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: '600', color: colors.text.primary, marginBottom: '0.8rem' }}>
                      What's Included:
                    </h4>
                    <ul className="service-features-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {currentService.features.map((feature, index) => (
                        <li key={index} style={{
                          padding: '6px 0',
                          fontSize: '0.9rem',
                          color: colors.text.secondary,
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          <span style={{
                            color: currentService.color,
                            marginRight: '8px',
                            fontWeight: 'bold'
                          }}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a href={currentService.ctaLink} className="cta-button" style={{
                    background: `linear-gradient(135deg, ${currentService.ctaColor} 0%, ${currentService.ctaColor}dd 100%)`,
                    color: currentService.ctaColor === '#FFC600' ? '#1a1a2e' : 'white',
                    padding: '14px 28px',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: '600',
                    display: 'inline-block',
                    boxShadow: `0 6px 20px ${currentService.ctaColor}40`,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: 'none'
                  }}>
                    {currentService.ctaText}
                  </a>
                </div>
                
                <div className="visual-container">
                  <div className="website-showcase">
                    <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: colors.text.primary, marginBottom: '1rem', textAlign: 'center' }}>
                      Your LogicPros Website
                    </h3>
                    <div className="website-screenshot after">
                      <div className="screenshot-header">
                        <div className="browser-dots">
                          <span></span><span></span><span></span>
                        </div>
                        <div className="address-bar">yourbusiness.com</div>
                      </div>
                      <div className="screenshot-content">
                        <div className="new-header">
                          <div className="new-logo" style={{ color: 'white' }}>YOUR BUSINESS</div>
                          <div className="new-nav">
                            <span style={{ color: 'white' }}>Services</span><span style={{ color: 'white' }}>Portfolio</span>
                            <div className="nav-cta">Get Quote</div>
                          </div>
                        </div>
                        <div className="new-hero">
                          <div className="new-title">Get Professional Results</div>
                          <div className="new-subtitle">Licensed • Insured • 5-Star Reviews</div>
                          <div className="new-buttons">
                            <div className="new-button primary">Get Free Quote</div>
                            <div className="new-button secondary">📞 Call Now</div>
                          </div>
                        </div>
                        <div className="trust-indicators">
                          <div className="trust-item">⭐⭐⭐⭐⭐ 127 Reviews</div>
                          <div className="trust-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '6px', verticalAlign: 'middle'}}>
                              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M6 9h12v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9z" stroke="currentColor" strokeWidth="2" fill="none"/>
                              <path d="M10 22h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                              <path d="M12 18v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            Licensed & Insured
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                      <p style={{ fontSize: '0.9rem', color: colors.text.secondary, margin: '0 0 10px 0' }}>
                        <strong>Get your FREE website example in 48 hours</strong>
                      </p>
                      <ul className="comparison-bullets" style={{ textAlign: 'left', display: 'inline-block' }}>
                        <li>📱 Perfect on all devices</li>
                        <li>🔍 Built for better Google visibility</li>
                        <li>💼 Professional, trustworthy design</li>
                        <li>📞 Clear path to contact you</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Cybersecurity Service Content */}
            {activeService === 'cybersecurity' && (
              <div className="service-content-panel">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '2rem', fontWeight: '700', color: currentService.color, marginBottom: '1rem' }}>
                      {currentService.title}
                    </h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: colors.text.secondary, marginBottom: '2rem' }}>
                      {currentService.description}
                    </p>
                    
                    <div style={{ marginBottom: '2rem' }}>
                      <h4 style={{ fontSize: '1.3rem', fontWeight: '600', color: colors.text.primary, marginBottom: '1rem' }}>
                        Security Services:
                      </h4>
                      <ul className="service-features-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {currentService.features.map((feature, index) => (
                          <li key={index} style={{ 
                            padding: '8px 0', 
                            fontSize: '1rem', 
                            color: colors.text.secondary,
                            display: 'flex',
                            alignItems: 'center'
                          }}>
                            <span style={{ 
                              color: currentService.color, 
                              marginRight: '10px',
                              fontWeight: 'bold'
                            }}>✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a href={currentService.ctaLink} className="cta-button" style={{
                      background: `linear-gradient(135deg, ${currentService.ctaColor} 0%, ${currentService.ctaColor}dd 100%)`,
                      color: 'white',
                      padding: '16px 32px',
                      borderRadius: '50px',
                      textDecoration: 'none',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      display: 'inline-block',
                      boxShadow: `0 6px 20px ${currentService.ctaColor}40`,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: 'none'
                    }}>
                      {currentService.ctaText}
                    </a>
                  </div>
                  
                  <div className="visual-container">
                    <div className="security-metrics">
                      <h4 style={{ fontSize: '1.5rem', fontWeight: '600', color: colors.text.primary, marginBottom: '1.5rem', textAlign: 'center' }}>
                        Cybersecurity Risk Assessment
                      </h4>
                      
                      <div style={{ marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                          <span style={{ fontSize: '0.9rem', color: colors.text.secondary }}>Overall Security Score</span>
                          <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#dc3545' }}>35/100</span>
                        </div>
                        <div className="progress-bar" style={{ height: '10px', background: '#e9ecef', borderRadius: '5px', overflow: 'hidden' }}>
                          <div style={{ 
                            height: '100%', 
                            width: '35%', 
                            background: 'linear-gradient(90deg, #dc3545, #c82333)',
                            borderRadius: '5px'
                          }}></div>
                        </div>
                      </div>
                      
                      <div style={{ marginBottom: '1.5rem' }}>
                        <h5 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' }}>Security Issues Found:</h5>
                        <div style={{ display: 'grid', gap: '10px' }}>
                          {[
                            { issue: 'Outdated Software', severity: 'High', color: '#dc3545' },
                            { issue: 'Weak Passwords', severity: 'Critical', color: '#721c24' },
                            { issue: 'No MFA Enabled', severity: 'High', color: '#dc3545' },
                            { issue: 'Unsecured Network', severity: 'Medium', color: '#f59e0b' }
                          ].map((item, index) => (
                            <div key={index} style={{ 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              padding: '10px 15px', 
                              background: '#f8f9fa', 
                              borderRadius: '6px',
                              border: `1px solid ${item.color}20`
                            }}>
                              <span style={{ fontSize: '0.9rem' }}>{item.issue}</span>
                              <span style={{ 
                                fontSize: '0.8rem', 
                                fontWeight: '600', 
                                color: 'white',
                                background: item.color,
                                padding: '2px 8px',
                                borderRadius: '10px'
                              }}>{item.severity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div style={{ textAlign: 'center', padding: '15px', background: '#f8f9fa', borderRadius: '6px' }}>
                        <p style={{ fontSize: '0.9rem', color: colors.text.secondary, margin: '0 0 10px 0' }}>
                          <strong>After LogicPros Security Implementation:</strong>
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                          <span style={{ fontSize: '0.9rem', color: colors.text.secondary }}>Overall Security Score</span>
                          <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#22c55e' }}>92/100</span>
                        </div>
                        <div className="progress-bar" style={{ height: '10px', background: '#e9ecef', borderRadius: '5px', overflow: 'hidden' }}>
                          <div style={{ 
                            height: '100%', 
                            width: '92%', 
                            background: 'linear-gradient(90deg, #22c55e, #16a34a)',
                            borderRadius: '5px'
                          }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Managed IT Service Content */}
            {activeService === 'it' && (
              <div className="service-content-panel">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '2rem', fontWeight: '700', color: currentService.color, marginBottom: '1rem' }}>
                      {currentService.title}
                    </h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: colors.text.secondary, marginBottom: '2rem' }}>
                      {currentService.description}
                    </p>
                    
                    <div style={{ marginBottom: '2rem' }}>
                      <h4 style={{ fontSize: '1.3rem', fontWeight: '600', color: colors.text.primary, marginBottom: '1rem' }}>
                        IT Management Services:
                      </h4>
                      <ul className="service-features-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {currentService.features.map((feature, index) => (
                          <li key={index} style={{ 
                            padding: '8px 0', 
                            fontSize: '1rem', 
                            color: colors.text.secondary,
                            display: 'flex',
                            alignItems: 'center'
                          }}>
                            <span style={{ 
                              color: currentService.color, 
                              marginRight: '10px',
                              fontWeight: 'bold'
                            }}>✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a href={currentService.ctaLink} className="cta-button" style={{
                      background: `linear-gradient(135deg, ${currentService.ctaColor} 0%, ${currentService.ctaColor}dd 100%)`,
                      color: 'white',
                      padding: '16px 32px',
                      borderRadius: '50px',
                      textDecoration: 'none',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      display: 'inline-block',
                      boxShadow: `0 6px 20px ${currentService.ctaColor}40`,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: 'none'
                    }}>
                      {currentService.ctaText}
                    </a>
                  </div>
                  
                  <div className="visual-container">
                    <div className="it-dashboard">
                      <h4 style={{ fontSize: '1.5rem', fontWeight: '600', color: colors.text.primary, marginBottom: '1.5rem', textAlign: 'center' }}>
                        IT Management Dashboard
                      </h4>
                      
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '1.5rem' }}>
                        <div style={{ 
                          background: '#f8f9fa', 
                          padding: '15px', 
                          borderRadius: '8px',
                          textAlign: 'center'
                        }}>
                          <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#22c55e' }}>99.9%</div>
                          <div style={{ fontSize: '0.9rem', color: colors.text.secondary }}>Uptime</div>
                        </div>
                        <div style={{ 
                          background: '#f8f9fa', 
                          padding: '15px', 
                          borderRadius: '8px',
                          textAlign: 'center'
                        }}>
                          <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#1F7CFF' }}>
                            {'<15min'}
                          </div>
                          <div style={{ fontSize: '0.9rem', color: colors.text.secondary }}>Response Time</div>
                        </div>
                        <div style={{ 
                          background: '#f8f9fa', 
                          padding: '15px', 
                          borderRadius: '8px',
                          textAlign: 'center'
                        }}>
                          <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#f59e0b' }}>24/7</div>
                          <div style={{ fontSize: '0.9rem', color: colors.text.secondary }}>Monitoring</div>
                        </div>
                        <div style={{ 
                          background: '#f8f9fa', 
                          padding: '15px', 
                          borderRadius: '8px',
                          textAlign: 'center'
                        }}>
                          <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#22c55e' }}>0</div>
                          <div style={{ fontSize: '0.9rem', color: colors.text.secondary }}>Security Breaches</div>
                        </div>
                      </div>
                      
                      <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
                        <h5 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px' }}>System Health</h5>
                        <div style={{ display: 'grid', gap: '8px' }}>
                          {[
                            { service: 'Network', status: 'Operational', color: '#22c55e' },
                            { service: 'Servers', status: 'Operational', color: '#22c55e' },
                            { service: 'Backups', status: 'Operational', color: '#22c55e' },
                            { service: 'Security', status: 'Operational', color: '#22c55e' }
                          ].map((item, index) => (
                            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <span style={{ fontSize: '0.9rem' }}>{item.service}</span>
                              <span style={{ 
                                fontSize: '0.8rem', 
                                fontWeight: '600', 
                                color: 'white',
                                background: item.color,
                                padding: '2px 8px',
                                borderRadius: '10px'
                              }}>{item.status}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: colors.text.secondary }}>
                        <em>With LogicPros Managed IT Services</em>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* AI Automations Service Content */}
            {activeService === 'automations' && (
              <div className="service-content-panel service-content-grid">
                <div>
                  <h3 style={{ fontSize: '2rem', fontWeight: '700', color: currentService.color, marginBottom: '1rem' }}>
                    {currentService.title}
                  </h3>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: colors.text.secondary, marginBottom: '2rem' }}>
                    {currentService.description}
                  </p>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontSize: '1.3rem', fontWeight: '600', color: colors.text.primary, marginBottom: '1rem' }}>
                      Automation Solutions:
                    </h4>
                    <ul className="service-features-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {currentService.features.map((feature, index) => (
                        <li key={index} style={{
                          padding: '8px 0',
                          fontSize: '1rem',
                          color: colors.text.secondary,
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          <span style={{
                            color: currentService.color,
                            marginRight: '10px',
                            fontWeight: 'bold'
                          }}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a href={currentService.ctaLink} className="cta-button" style={{
                    background: `linear-gradient(135deg, ${currentService.ctaColor} 0%, ${currentService.ctaColor}dd 100%)`,
                    color: currentService.ctaColor === '#FFC600' ? '#1a1a2e' : 'white',
                    padding: '16px 32px',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    display: 'inline-block',
                    boxShadow: `0 6px 20px ${currentService.ctaColor}40`,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: 'none'
                  }}>
                    {currentService.ctaText}
                  </a>
                </div>
                
                <div className="visual-container">
                  <div className="automation-visualization" style={{
                    background: 'white',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)'
                  }}>
                    <h4 style={{ fontSize: '1.5rem', fontWeight: '600', color: colors.text.primary, marginBottom: '1.5rem', textAlign: 'center' }}>
                      Automation Workflow
                    </h4>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '1.5rem' }}>
                      {[
                        { step: '1', title: 'Customer Inquiry', description: 'AI chatbot handles initial contact', icon: '💬' },
                        { step: '2', title: 'Lead Qualification', description: 'System scores and categorizes leads', icon: '🎯' },
                        { step: '3', title: 'Automated Follow-up', description: 'Personalized emails sent automatically', icon: '📧' },
                        { step: '4', title: 'Data Analysis', description: 'Performance metrics tracked and reported', icon: '📊' }
                      ].map((item, index) => (
                        <div key={index} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '15px',
                          padding: '15px',
                          background: '#f8f9fa',
                          borderRadius: '8px',
                          border: '1px solid #e9ecef'
                        }}>
                          <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: '#1F7CFF',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.2rem',
                            fontWeight: 'bold'
                          }}>
                            {item.step}
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: '600', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span>{item.title}</span>
                              <span>{item.icon}</span>
                            </div>
                            <div style={{ fontSize: '0.9rem', color: colors.text.secondary }}>
                              {item.description}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div style={{ textAlign: 'center', padding: '15px', background: '#f8f9fa', borderRadius: '6px' }}>
                      <p style={{ fontSize: '0.9rem', color: colors.text.secondary, margin: '0' }}>
                        <strong>Save 15+ hours per week</strong> with intelligent automation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};