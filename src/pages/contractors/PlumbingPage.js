import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import heroImage from '../../assets/hero-growtika.jpg';

export const PlumbingPage = () => {
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
            <img src={heroImage} alt="Professional plumber at work" />
            <div className="hero-overlay">
              <div className="hero-content">
                <h1 className="typewriter-text">See Your Plumbing Website Before You Buy</h1>
                <p>
                  Get a FREE custom website example built for your plumbing business. 
                  See exactly how it will look - delivered in 48 hours, no commitment required.
                </p>
                <a href="/free-example" className="btn btn-primary">Get My Free Website Example</a>
                <a href="/contact" className="btn btn-secondary" style={{ marginLeft: '1rem' }}>Ask Questions First</a>
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
                <h3>🚨 Can't Be Found During Emergencies</h3>
                <p>When pipes burst at 2 AM, your competitors show up first in Google. You're losing $500+ emergency calls every week.</p>
              </div>
              <div className="challenge-item">
                <h3>💰 Customers Choose Cheaper Options</h3>
                <p>Your website doesn't explain why you're worth more. Customers pick whoever's cheapest instead of who's best.</p>
              </div>
              <div className="challenge-item">
                <h3>📱 Mobile Site Disasters</h3>
                <p>85% of plumbing searches happen on phones. If your site doesn't work perfectly on mobile, you've lost the customer.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">How We Get You More Jobs</h2>
            </div>
            <div className="solutions-grid">
              <div className="solution-item">
                <h3>🎯 Show Up First in Google</h3>
                <p>When people search for a plumber, your business comes up first. More searches mean more jobs.</p>
              </div>
              <div className="solution-item">
                <h3>⚡ Easy to Use on Phones</h3>
                <p>Big call buttons that work. People can reach you fast when they need a plumber.</p>
              </div>
              <div className="solution-item">
                <h3>🏆 Show Why You're Worth More</h3>
                <p>Display your licenses, insurance, and good reviews. Customers will pay fair prices for good work.</p>
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
                <h3>🚨 Emergency Services</h3>
                <p className="service-description">The bread and butter. High-profit emergency calls that happen 24/7.</p>
                <div className="service-examples">
                  <span>Burst Pipes</span>
                  <span>Drain Clogs</span>
                  <span>Water Heater Failures</span>
                  <span>Sewer Backups</span>
                </div>
              </div>
              <div className="service-category">
                <h3>🏠 Big-Ticket Installs</h3>
                <p className="service-description">High-value jobs that boost your monthly revenue.</p>
                <div className="service-examples">
                  <span>Water Heaters</span>
                  <span>Bathroom Remodels</span>
                  <span>Kitchen Plumbing</span>
                  <span>Whole-House Repipes</span>
                </div>
              </div>
              <div className="service-category">
                <h3>🔧 Steady Repair Work</h3>
                <p className="service-description">Consistent revenue from routine maintenance and repairs.</p>
                <div className="service-examples">
                  <span>Leak Repairs</span>
                  <span>Fixture Replacement</span>
                  <span>Drain Cleaning</span>
                  <span>Pipe Repairs</span>
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
                <h3>Emergency-First Website</h3>
                <p className="solution-price">Perfect for solo plumbers</p>
                <div className="solution-features">
                  <div className="feature">✅ Mobile emergency buttons</div>
                  <div className="feature">✅ "Emergency plumber" SEO</div>
                  <div className="feature">✅ Service area pages</div>
                  <div className="feature">✅ Customer reviews display</div>
                </div>
                <a href="/contact" className="btn btn-primary">Get Started</a>
              </div>
              <div className="solution-card">
                <h3>Lead Magnet Website</h3>
                <p className="solution-price">For growing plumbing businesses</p>
                <div className="solution-features">
                  <div className="feature">✅ Everything in Emergency-First</div>
                  <div className="feature">✅ Advanced local SEO domination</div>
                  <div className="feature">✅ Before/after photo galleries</div>
                  <div className="feature">✅ Online booking system</div>
                  <div className="feature">✅ Google Ads optimization</div>
                </div>
                <a href="/contact" className="btn btn-primary">Get Started</a>
              </div>
              <div className="solution-card">
                <h3>Custom Plumbing Portal</h3>
                <p className="solution-price">For established companies</p>
                <div className="solution-features">
                  <div className="feature">✅ Everything in Lead Magnet</div>
                  <div className="feature">✅ Customer account portals</div>
                  <div className="feature">✅ Multi-location optimization</div>
                  <div className="feature">✅ Advanced analytics dashboard</div>
                  <div className="feature">✅ Monthly optimization & content</div>
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
                <h3>Will I actually show up first for "emergency plumber near me"?</h3>
                <p>Yes. We specialize in emergency plumber SEO. Our clients typically rank #1-3 for local emergency searches within 30-60 days. We guarantee you'll outrank at least 5 competitors or we keep working for free.</p>
              </div>
              <div className="faq-item">
                <h3>How fast can I get my website up and making me money?</h3>
                <p>7-14 days. We know every day without a proper website is money lost. Emergency-focused sites go live fastest because we prioritize what makes your phone ring.</p>
              </div>
              <div className="faq-item">
                <h3>What if I'm terrible with technology?</h3>
                <p>Perfect. We handle everything. You focus on plumbing, we handle the website. Updates, changes, new content - we do it all. You just watch the leads come in.</p>
              </div>
              <div className="faq-item">
                <h3>Do you work with ServiceTitan, Housecall Pro, etc.?</h3>
                <p>Yes. We integrate with all major plumbing software. Leads from your website automatically flow into your existing system. No extra work for you.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Ready to Get More Jobs?</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Get a website that brings you more customers. Simple as that.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/free-example" className="btn btn-primary" style={{ backgroundColor: 'white', color: '#000' }}>
                Get My Free Example
              </a>
              <a href="/contact" className="btn" style={{ backgroundColor: 'transparent', color: 'white', border: '2px solid white' }}>
                Ask Questions First
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
              <p>Websites that make plumbers money</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Contractor Websites</h4>
                <a href="/contractors/plumbing">Plumbing Websites</a>
                <a href="/contractors/electrical">Electrical Websites</a>
                <a href="/contractors/hvac">HVAC Websites</a>
                <a href="/contractors/roofing">Roofing Websites</a>
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