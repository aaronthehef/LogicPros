import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';

export const PlumbingPage = () => {
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
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Professional Websites for Plumbing Contractors</h1>
              <p className="hero-subtitle">
                Turn emergency calls into loyal customers with a website that showcases your expertise, 
                builds trust, and generates leads 24/7. Specialized web development for plumbers who 
                want to dominate their local market.
              </p>
              <a href="/contact" className="btn btn-primary btn-large">Get My Plumbing Website</a>
            </div>
          </div>
        </section>

        {/* Plumbing-Specific Challenges */}
        <section className="section">
          <div className="container">
            <h2>Challenges Every Plumbing Business Owner Faces</h2>
            <div className="challenges-grid">
              <div className="challenge-item">
                <h3>🚨 Emergency Call Competition</h3>
                <p>When pipes burst at 2 AM, customers need to find you instantly. Your website needs to be the first result they see with clear emergency contact information.</p>
              </div>
              <div className="challenge-item">
                <h3>💰 Value-Focused Customers</h3>
                <p>Customers compare multiple plumbers online. Your website needs to demonstrate value and expertise before they even pick up the phone.</p>
              </div>
              <div className="challenge-item">
                <h3>🔧 Trust & Credibility Issues</h3>
                <p>Plumbing is expensive and invasive. Customers need proof you're licensed, insured, and won't leave them with bigger problems.</p>
              </div>
              <div className="challenge-item">
                <h3>📱 Mobile-First Customers</h3>
                <p>85% of plumbing searches happen on mobile devices. Your website must load fast and display perfectly on smartphones.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>How LogicPros Solves Your Plumbing Marketing Problems</h2>
            <div className="solutions-grid">
              <div className="solution-item">
                <h3>🎯 Emergency Service Optimization</h3>
                <p><strong>What we do:</strong> Create prominent emergency call buttons, 24/7 contact forms, and location-based SEO to ensure you're found first during plumbing emergencies.</p>
                <p><strong>Result:</strong> Increase emergency calls by 40% and reduce customer acquisition cost.</p>
              </div>
              <div className="solution-item">
                <h3>📋 Service Showcase System</h3>
                <p><strong>What we do:</strong> Detailed service pages for drain cleaning, pipe repair, water heater installation, bathroom remodeling, and emergency services with clear service information.</p>
                <p><strong>Result:</strong> Pre-qualified leads who understand your value before calling.</p>
              </div>
              <div className="solution-item">
                <h3>🏆 Trust Building Elements</h3>
                <p><strong>What we do:</strong> Showcase licenses, certifications, insurance information, before/after photos, customer testimonials, and warranty information prominently.</p>
                <p><strong>Result:</strong> Higher conversion rates and better qualified leads.</p>
              </div>
              <div className="solution-item">
                <h3>⚡ Lightning Fast Mobile Experience</h3>
                <p><strong>What we do:</strong> Mobile-first design with emergency contact buttons, click-to-call functionality, and instant inquiry forms.</p>
                <p><strong>Result:</strong> Capture more emergency and non-emergency leads from mobile searches.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Plumbing Services We Highlight */}
        <section className="section">
          <div className="container">
            <h2>Plumbing Services We Help You Market</h2>
            <div className="services-grid">
              <div className="service-category">
                <h3>🚨 Emergency Services</h3>
                <ul>
                  <li>Burst pipe repair</li>
                  <li>Drain clearing & unclogging</li>
                  <li>Water heater emergencies</li>
                  <li>Sewer line backups</li>
                  <li>Gas leak detection</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🔧 Repair & Maintenance</h3>
                <ul>
                  <li>Leak detection & repair</li>
                  <li>Fixture replacement</li>
                  <li>Pipe relining</li>
                  <li>Water pressure issues</li>
                  <li>Preventive maintenance</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🏠 Installation Services</h3>
                <ul>
                  <li>Water heater installation</li>
                  <li>Bathroom remodeling</li>
                  <li>Kitchen plumbing</li>
                  <li>New construction plumbing</li>
                  <li>Appliance hookups</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🏢 Commercial Plumbing</h3>
                <ul>
                  <li>Restaurant plumbing</li>
                  <li>Office building maintenance</li>
                  <li>Retail space plumbing</li>
                  <li>Industrial systems</li>
                  <li>Backflow prevention</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Plumbing Website Solutions</h2>
            <div className="solutions-grid">
              <div className="solution-card">
                <h3>Emergency Response Sites</h3>
                <ul>
                  <li>5-page mobile-optimized site</li>
                  <li>Emergency call buttons</li>
                  <li>Service area pages</li>
                  <li>Customer testimonials</li>
                  <li>Basic SEO setup</li>
                  <li>Contact forms</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Discuss Your Needs</a>
              </div>
              <div className="solution-card featured">
                <h3>Lead Generation Sites</h3>
                <ul>
                  <li>10-page comprehensive site</li>
                  <li>Advanced local SEO</li>
                  <li>Before/after galleries</li>
                  <li>Online scheduling system</li>
                  <li>Service-specific landing pages</li>
                  <li>Google Ads integration</li>
                  <li>Review management</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Schedule Consultation</a>
              </div>
              <div className="solution-card">
                <h3>Market Domination Sites</h3>
                <ul>
                  <li>Unlimited pages</li>
                  <li>Custom functionality</li>
                  <li>Customer portal</li>
                  <li>Advanced analytics</li>
                  <li>Competitor analysis</li>
                  <li>Monthly SEO optimization</li>
                  <li>Pay-per-click management</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Explore Possibilities</a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container">
            <h2>Common Questions from Plumbing Contractors</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>How quickly can you get my plumbing website live?</h3>
                <p>Emergency Response websites launch in 7-10 days. Lead Generation Pro sites take 2-3 weeks. We understand plumbers need to capture leads immediately, so we prioritize fast delivery without sacrificing quality.</p>
              </div>
              <div className="faq-item">
                <h3>Will my website show up when people search for "emergency plumber"?</h3>
                <p>Yes! We specialize in local SEO for emergency services. Our sites are optimized for "emergency plumber," "24 hour plumber," and location-specific searches to ensure you're found during urgent situations.</p>
              </div>
              <div className="faq-item">
                <h3>Can you integrate with my existing booking/dispatch system?</h3>
                <p>Absolutely. We integrate with popular plumbing software like ServiceTitan, Housecall Pro, and Jobber. Your website will sync with your existing workflow seamlessly.</p>
              </div>
              <div className="faq-item">
                <h3>How do you handle seasonal demand changes?</h3>
                <p>We create seasonal content strategies - highlighting water heater services in winter, AC drain cleaning in summer, and pipe protection during freeze warnings. Your site adapts to seasonal search patterns.</p>
              </div>
              <div className="faq-item">
                <h3>What about compliance with plumbing codes and licensing?</h3>
                <p>We ensure your website displays all required licensing information, certifications, and insurance details prominently. We understand plumbing regulations and help you stay compliant while marketing effectively.</p>
              </div>
              <div className="faq-item">
                <h3>How do you handle negative reviews or reputation management?</h3>
                <p>Our websites include reputation management features - encouraging happy customers to leave reviews, responding to feedback professionally, and showcasing your best testimonials prominently.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Capture More Plumbing Leads?</h2>
              <p>Join 50+ plumbing contractors who've increased their revenue with LogicPros websites. Emergency calls, service requests, and customer referrals - all flowing to your business 24/7.</p>
              <div className="cta-buttons">
                <a href="/free-example" className="btn btn-primary btn-large">See My Free Plumbing Website Example</a>
                <a href="/contact" className="btn btn-outline btn-large">Schedule Free Consultation</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>LogicPros</h3>
              <p>Professional websites for plumbing contractors</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4>Plumbing Services</h4>
                <a href="/contractors/plumbing">Plumbing Websites</a>
                <a href="/contractors/electrical">Electrical Websites</a>
                <a href="/contractors/hvac">HVAC Websites</a>
                <a href="/contractors/roofing">Roofing Websites</a>
              </div>
              
              <div className="footer-column">
                <h4>Company</h4>
                <a href="/about">About Us</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/contact">Contact</a>
                <a href="/free-example">Free Example</a>
              </div>
              
              <div className="footer-column">
                <h4>Contact</h4>
                <p>aaron@logicpros.ca</p>
                <p>(506) 478-2949</p>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 LogicPros. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};