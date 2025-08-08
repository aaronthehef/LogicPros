import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import heroImage from '../../assets/hero-growtika.jpg';

export const ElectricalPage = () => {
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
        <section className="hero-section homepage-hero">
          <div className="hero-image">
            <img src={heroImage} alt="Professional electrician at work" />
            <div className="hero-overlay">
              <div className="hero-content">
                <h1 className="typewriter-text">Websites That Get Electricians More Jobs</h1>
                <p>
                  Show customers you're licensed, safe, and skilled. Get more emergency calls and bigger electrical projects.
                </p>
                <a href="/contact" className="btn btn-primary">Get My Website</a>
              </div>
            </div>
          </div>
        </section>

        {/* Electrical-Specific Challenges */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why Customers Don't Call You</h2>
            </div>
            <div className="challenges-grid">
              <div className="challenge-item">
                <h3>⚡ Safety Worries</h3>
                <p>Customers are scared of electrical work. They need to see your licenses and insurance before they trust you in their home.</p>
              </div>
              <div className="challenge-item">
                <h3>🏆 Price Shopping</h3>
                <p>Everyone wants cheap electrical work. Show them why good work costs more and saves money long-term.</p>
              </div>
              <div className="challenge-item">
                <h3>📋 Confusing Services</h3>
                <p>Panel upgrades, rewiring, smart homes - customers don't understand what they need. Make it simple.</p>
              </div>
              <div className="challenge-item">
                <h3>🚨 Emergency and Big Jobs</h3>
                <p>You want both emergency calls and big installation projects. Your website needs to get both.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">How We Get You More Work</h2>
            </div>
            <div className="solutions-grid">
              <div className="solution-item">
                <h3>🛡️ Show You're Safe</h3>
                <p>Display your licenses, insurance, and certifications prominently. Customers see you're qualified and trustworthy.</p>
              </div>
              <div className="solution-item">
                <h3>💡 Explain Your Services</h3>
                <p>Break down complex electrical work into simple terms. Customers understand what they need and why.</p>
              </div>
              <div className="solution-item">
                <h3>🎯 Emergency and Project Leads</h3>
                <p>Different contact methods for urgent repairs and planned installations. Get both types of work.</p>
              </div>
              <div className="solution-item">
                <h3>📱 Modern Electrical Work</h3>
                <p>Showcase smart homes, EV chargers, and modern electrical services. Get the high-paying jobs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Electrical Services We Highlight */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Services That Make You Money</h2>
            </div>
            <div className="services-grid">
              <div className="service-category">
                <h3>🚨 Emergency Work</h3>
                <p className="service-description">High-profit emergency calls that happen any time.</p>
                <div className="service-examples">
                  <span>Power Outages</span>
                  <span>Circuit Problems</span>
                  <span>Panel Failures</span>
                  <span>Electrical Faults</span>
                </div>
              </div>
              <div className="service-category">
                <h3>🔌 Big Home Projects</h3>
                <p className="service-description">Large installations that bring in serious money.</p>
                <div className="service-examples">
                  <span>Panel Upgrades</span>
                  <span>House Rewiring</span>
                  <span>New Outlets</span>
                  <span>Lighting Install</span>
                </div>
              </div>
              <div className="service-category">
                <h3>🏠 Modern Tech Work</h3>
                <p className="service-description">High-value modern electrical services customers want.</p>
                <div className="service-examples">
                  <span>Smart Homes</span>
                  <span>EV Chargers</span>
                  <span>Security Systems</span>
                  <span>Smart Controls</span>
                </div>
              </div>
              <div className="service-category">
                <h3>🏢 Business Work</h3>
                <p className="service-description">Commercial jobs with steady, reliable income.</p>
                <div className="service-examples">
                  <span>Office Electrical</span>
                  <span>Store Lighting</span>
                  <span>Industrial Work</span>
                  <span>Generators</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Get Your Website That Actually Works</h2>
            </div>
            <div className="solutions-grid">
              <div className="solution-card">
                <h3>Basic Electrical Website</h3>
                <p className="solution-price">Perfect for solo electricians</p>
                <div className="solution-features">
                  <div className="feature">✅ Show licenses and insurance</div>
                  <div className="feature">✅ Emergency call buttons</div>
                  <div className="feature">✅ Service area pages</div>
                  <div className="feature">✅ Customer reviews</div>
                </div>
                <a href="/contact" className="btn btn-primary">Get Started</a>
              </div>
              <div className="solution-card">
                <h3>Professional Electrical Website</h3>
                <p className="solution-price">For growing electrical businesses</p>
                <div className="solution-features">
                  <div className="feature">✅ Everything in Basic</div>
                  <div className="feature">✅ Smart home showcase</div>
                  <div className="feature">✅ Project photo galleries</div>
                  <div className="feature">✅ Online estimates</div>
                  <div className="feature">✅ Google Ads ready</div>
                </div>
                <a href="/contact" className="btn btn-primary">Get Started</a>
              </div>
              <div className="solution-card">
                <h3>Custom Electrical Portal</h3>
                <p className="solution-price">For established companies</p>
                <div className="solution-features">
                  <div className="feature">✅ Everything in Professional</div>
                  <div className="feature">✅ Customer portals</div>
                  <div className="feature">✅ Multi-location sites</div>
                  <div className="feature">✅ Advanced tracking</div>
                  <div className="feature">✅ Monthly updates</div>
                </div>
                <a href="/contact" className="btn btn-primary">Get Started</a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Common Questions</h2>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>How do you showcase electrical safety and licensing?</h3>
                <p>We create dedicated pages for your licenses, certifications, insurance information, and safety protocols. Your credentials are prominently displayed throughout the site to build immediate trust with safety-conscious customers.</p>
              </div>
              <div className="faq-item">
                <h3>Can you help me compete against big electrical companies?</h3>
                <p>Absolutely! We position independent electrical contractors as more personal, flexible, and quality-focused than large companies. We highlight your local expertise, faster response times, and personalized service.</p>
              </div>
              <div className="faq-item">
                <h3>How do you handle complex electrical service explanations?</h3>
                <p>We break down complex electrical work into customer-friendly language, using diagrams, before/after photos, and benefit-focused explanations. Customers understand what they're buying and why it's worth your premium service.</p>
              </div>
              <div className="faq-item">
                <h3>Do you optimize for both emergency and planned electrical work?</h3>
                <p>Yes! We create separate pathways for emergency calls (prominent phone numbers, urgent messaging) and planned projects (detailed service pages, estimate request forms, project galleries).</p>
              </div>
              <div className="faq-item">
                <h3>How do you help me capture the smart home market?</h3>
                <p>We create dedicated smart home and automation pages, showcase modern electrical services like EV chargers, and position you as the tech-savvy electrician in your area. This attracts higher-value customers.</p>
              </div>
              <div className="faq-item">
                <h3>What about electrical code compliance and regulations?</h3>
                <p>We ensure your website emphasizes code compliance, proper permitting, and inspection processes. This differentiates you from unlicensed competitors and attracts customers who value quality work.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Ready to Get More Jobs?</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Get a website that brings you more electrical work. Simple as that.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary" style={{ backgroundColor: 'white', color: '#000' }}>
                Get Started
              </a>
              <a href="/free-example" className="btn" style={{ backgroundColor: 'transparent', color: 'white', border: '2px solid white' }}>
                See an Example
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};