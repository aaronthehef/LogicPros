import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import heroImage from '../../assets/hero-growtika.jpg';

export const FlooringPage = () => {
  return (
    <div className="landing-page">
      <header className="sticky-header">
        <div className="header-content">
          <div className="logo">
            <Logo />
          </div>
          <Navigation />
        </div>
      </header>

      <main className="main-content">
        <section className="hero-section homepage-hero">
          <div className="hero-image">
            <img src={heroImage} alt="Professional flooring installer at work" />
            <div className="hero-overlay">
              <div className="hero-content">
                <h1 className="typewriter-text">Websites That Get Flooring Contractors More Jobs</h1>
                <p>
                  Get more hardwood installs and tile projects. Show customers you're the flooring contractor who creates beautiful, lasting floors.
                </p>
                <a href="/contact" className="btn btn-primary">Get My Website</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why Your Phone Isn't Ringing</h2>
            </div>
            <div className="challenges-grid">
              <div className="challenge-item">
                <h3>🏠 Too Many Material Options</h3>
                <p>Hardwood, laminate, vinyl, tile, carpet - customers get overwhelmed by choices. They need help understanding what works best for their space and budget.</p>
              </div>
              <div className="challenge-item">
                <h3>💰 Competing Against Big Box Stores</h3>
                <p>Home stores sell cheap materials and installation. Customers don't understand why professional installation costs more until they see the difference.</p>
              </div>
              <div className="challenge-item">
                <h3>📱 Hard to Show Quality Online</h3>
                <p>Flooring quality is about craftsmanship, precision cuts, and perfect transitions. Your website needs to showcase these professional details.</p>
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
                <h3>🎯 Show Up First for Flooring Jobs</h3>
                <p>When someone searches "flooring contractor near me", you show up first. More searches mean more hardwood and tile installs.</p>
              </div>
              <div className="solution-item">
                <h3>⚡ Beautiful Project Galleries</h3>
                <p>Show your best installations with detailed photos. Customers see your craftsmanship and want that quality in their home.</p>
              </div>
              <div className="solution-item">
                <h3>🏆 Show Why You're Worth More</h3>
                <p>Display your expertise, quality materials, and installation guarantees. Customers understand why professional flooring is worth the investment.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Services That Make You Money</h2>
            </div>
            <div className="services-grid">
              <div className="service-category">
                <h3>🌳 Hardwood Flooring</h3>
                <p className="service-description">Premium installations that add serious value to homes.</p>
                <div className="service-examples">
                  <span>Solid Hardwood</span>
                  <span>Engineered Flooring</span>
                  <span>Hardwood Refinishing</span>
                  <span>Custom Installation</span>
                </div>
              </div>
              <div className="service-category">
                <h3>🏢 Luxury Vinyl & Laminate</h3>
                <p className="service-description">Popular modern options with great margins.</p>
                <div className="service-examples">
                  <span>Luxury Vinyl Plank</span>
                  <span>Waterproof Flooring</span>
                  <span>Laminate Installation</span>
                  <span>Commercial Vinyl</span>
                </div>
              </div>
              <div className="service-category">
                <h3>🏺 Tile & Stone</h3>
                <p className="service-description">High-skill work that commands premium prices.</p>
                <div className="service-examples">
                  <span>Ceramic Tile</span>
                  <span>Natural Stone</span>
                  <span>Bathroom Tiling</span>
                  <span>Custom Patterns</span>
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
                <h3>Basic Flooring Website</h3>
                <p className="solution-price">Perfect for solo flooring contractors</p>
                <div className="solution-features">
                  <div className="feature">✅ Beautiful project galleries</div>
                  <div className="feature">✅ Show up first in Google</div>
                  <div className="feature">✅ Material comparison guides</div>
                  <div className="feature">✅ Installation guarantees display</div>
                </div>
                <a href="/contact" className="btn btn-primary">Get Started</a>
              </div>
              <div className="solution-card">
                <h3>Professional Flooring Website</h3>
                <p className="solution-price">For growing flooring businesses</p>
                <div className="solution-features">
                  <div className="feature">✅ Everything in Basic</div>
                  <div className="feature">✅ Room-by-room showcases</div>
                  <div className="feature">✅ Before/after transformations</div>
                  <div className="feature">✅ Online estimate requests</div>
                  <div className="feature">✅ Google Ads optimization</div>
                </div>
                <a href="/contact" className="btn btn-primary">Get Started</a>
              </div>
              <div className="solution-card">
                <h3>Custom Flooring Portal</h3>
                <p className="solution-price">For established companies</p>
                <div className="solution-features">
                  <div className="feature">✅ Everything in Professional</div>
                  <div className="feature">✅ Multi-location optimization</div>
                  <div className="feature">✅ Virtual showroom features</div>
                  <div className="feature">✅ Customer project portals</div>
                  <div className="feature">✅ Monthly content updates</div>
                </div>
                <a href="/contact" className="btn btn-primary">Get Started</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Common Questions</h2>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>Will I get more hardwood and tile jobs?</h3>
                <p>Yes. We make sure you show up first when people search for flooring contractors. We also showcase your best work to attract customers who want quality flooring.</p>
              </div>
              <div className="faq-item">
                <h3>How do you help me compete against big box stores?</h3>
                <p>We emphasize your professional installation expertise, quality guarantees, and long-term value. Customers learn why professional flooring is worth the investment.</p>
              </div>
              <div className="faq-item">
                <h3>Can you help customers choose the right flooring material?</h3>
                <p>Absolutely. We create material comparison guides and room-specific recommendations that educate customers and position you as the flooring expert.</p>
              </div>
              <div className="faq-item">
                <h3>How fast can my flooring website be ready?</h3>
                <p>7-14 days. We know every day without a professional website is a lost opportunity for high-value flooring projects.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Ready to Get More Jobs?</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Get a website that brings you more flooring work. Simple as that.
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