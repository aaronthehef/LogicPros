import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import heroImage from '../../assets/hero-growtika.jpg';

export const LandscapingPage = () => {
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
            <img src={heroImage} alt="Professional landscaper at work" />
            <div className="hero-overlay">
              <div className="hero-content">
                <h1 className="typewriter-text">Websites That Get Landscapers More Jobs</h1>
                <p>
                  Get more design projects and maintenance contracts. Show customers you're the landscaper who creates beautiful outdoor spaces.
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
                <h3>🌱 Seasonal Work Problems</h3>
                <p>Busy in spring and summer, slow the rest of the year. You need year-round work to keep your crew employed and bills paid.</p>
              </div>
              <div className="challenge-item">
                <h3>💰 Customers Pick Cheapest Lawn Guy</h3>
                <p>Your beautiful designs get compared to basic lawn cutting. Customers don't understand the difference between landscaping and lawn care.</p>
              </div>
              <div className="challenge-item">
                <h3>📱 Can't Show Your Best Work</h3>
                <p>Landscaping is visual. Customers need to see your transformations, plant knowledge, and design skills to hire you for good projects.</p>
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
                <h3>🎯 Show Up First for Design Work</h3>
                <p>When someone searches "landscape designer near me", you show up first. More design searches mean bigger, better jobs.</p>
              </div>
              <div className="solution-item">
                <h3>⚡ Beautiful Project Galleries</h3>
                <p>Show your best transformations with stunning before/after photos. Customers see what you can do and want to hire you.</p>
              </div>
              <div className="solution-item">
                <h3>🏆 Position You as the Expert</h3>
                <p>Show your plant knowledge, design skills, and completed projects. Customers will pay premium prices for quality landscaping.</p>
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
                <h3>🎨 Landscape Design</h3>
                <p className="service-description">High-profit design projects that lead to big installs.</p>
                <div className="service-examples">
                  <span>Custom Designs</span>
                  <span>Outdoor Living</span>
                  <span>Plant Selection</span>
                  <span>3D Renderings</span>
                </div>
              </div>
              <div className="service-category">
                <h3>🏗️ Installation Work</h3>
                <p className="service-description">Big-ticket installations that boost your revenue.</p>
                <div className="service-examples">
                  <span>Complete Landscapes</span>
                  <span>Hardscaping</span>
                  <span>Irrigation</span>
                  <span>Tree Planting</span>
                </div>
              </div>
              <div className="service-category">
                <h3>🌿 Maintenance Contracts</h3>
                <p className="service-description">Steady monthly income that keeps you busy year-round.</p>
                <div className="service-examples">
                  <span>Weekly Maintenance</span>
                  <span>Seasonal Cleanups</span>
                  <span>Pruning</span>
                  <span>Fertilization</span>
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
                <h3>Garden Basic Website</h3>
                <p className="solution-price">Perfect for starting landscapers</p>
                <div className="solution-features">
                  <div className="feature">✅ Beautiful project galleries</div>
                  <div className="feature">✅ Show up first in Google</div>
                  <div className="feature">✅ Seasonal service pages</div>
                  <div className="feature">✅ Before/after showcases</div>
                </div>
                <a href="/contact" className="btn btn-primary">Get Started</a>
              </div>
              <div className="solution-card">
                <h3>Professional Landscape Website</h3>
                <p className="solution-price">For growing landscaping businesses</p>
                <div className="solution-features">
                  <div className="feature">✅ Everything in Garden Basic</div>
                  <div className="feature">✅ Design process explanations</div>
                  <div className="feature">✅ Plant care guides</div>
                  <div className="feature">✅ Online estimate requests</div>
                  <div className="feature">✅ Google Ads optimization</div>
                </div>
                <a href="/contact" className="btn btn-primary">Get Started</a>
              </div>
              <div className="solution-card">
                <h3>Custom Landscape Portal</h3>
                <p className="solution-price">For established companies</p>
                <div className="solution-features">
                  <div className="feature">✅ Everything in Professional</div>
                  <div className="feature">✅ Client project portals</div>
                  <div className="feature">✅ Multi-location optimization</div>
                  <div className="feature">✅ Advanced photo management</div>
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
                <h3>Will I get more design projects?</h3>
                <p>Yes. We position you as a landscape designer, not just lawn care. Your photo galleries and design process pages attract customers who want beautiful landscaping.</p>
              </div>
              <div className="faq-item">
                <h3>How do you help with seasonal business fluctuations?</h3>
                <p>We create year-round content highlighting spring planting, summer maintenance, fall cleanups, and winter design planning. This keeps leads coming all year.</p>
              </div>
              <div className="faq-item">
                <h3>Can you showcase my plant knowledge and expertise?</h3>
                <p>Absolutely. We create plant care guides, seasonal tips, and design advice that position you as the local landscaping expert customers trust.</p>
              </div>
              <div className="faq-item">
                <h3>How fast can my landscaping website be ready?</h3>
                <p>7-14 days. We know spring is your busiest season, so we get your website ready quickly to capture all those design project leads.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Ready to Get More Jobs?</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Get a website that brings you more landscaping work. Simple as that.
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

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>LogicPros</h3>
              <p>Websites that make landscapers money</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Contractor Websites</h4>
                <a href="/contractors/landscaping">Landscaping Websites</a>
                <a href="/contractors/construction">Construction Websites</a>
                <a href="/contractors/plumbing">Plumbing Websites</a>
                <a href="/contractors/hvac">HVAC Websites</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/free-example">Free Example</a>
              </div>
              <div className="footer-column">
                <h4>Get Started</h4>
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