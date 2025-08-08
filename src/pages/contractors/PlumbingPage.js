import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';

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
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Get More Emergency Plumbing Calls with a Professional Website</h1>
              <p className="hero-subtitle">
                Stop losing customers to competitors. Get a website that shows up first for "emergency plumber near me" 
                and converts visitors into paying customers - even at 2 AM.
              </p>
              <a href="/contact" className="btn btn-primary btn-large">Get More Plumbing Leads Now</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Why Plumbers Are Losing Customers Online</h2>
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

        <section className="section">
          <div className="container">
            <h2>How We Make Your Phone Ring More</h2>
            <div className="solutions-grid">
              <div className="solution-item">
                <h3>🎯 Show Up First for "Emergency Plumber"</h3>
                <p>We optimize your site to dominate local emergency searches. When someone's toilet overflows at midnight, they find YOU first.</p>
              </div>
              <div className="solution-item">
                <h3>⚡ Lightning-Fast Mobile Experience</h3>
                <p>One-tap calling, instant quotes, and emergency buttons that work perfectly on every phone. No more lost mobile customers.</p>
              </div>
              <div className="solution-item">
                <h3>🏆 Justify Your Premium Pricing</h3>
                <p>Showcase your licenses, insurance, guarantees, and 5-star reviews. Customers choose quality over cheap when they understand the difference.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Services That Make You Money</h2>
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

        <section className="section">
          <div className="container">
            <h2>Get Your Plumbing Website That Actually Works</h2>
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
              <div className="solution-card featured">
                <h3>Lead Magnet Website</h3>
                <p className="solution-price">For growing plumbing businesses</p>
                <div className="solution-features">
                  <div className="feature">✅ Everything in Emergency-First</div>
                  <div className="feature">✅ Advanced local SEO domination</div>
                  <div className="feature">✅ Before/after photo galleries</div>
                  <div className="feature">✅ Online booking system</div>
                  <div className="feature">✅ Google Ads optimization</div>
                </div>
                <a href="/contact" className="btn btn-primary">Dominate Your Market</a>
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
                <a href="/contact" className="btn btn-primary">Scale Your Business</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Questions Plumbers Ask Us</h2>
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

        <section className="section cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Stop Losing Emergency Calls to Competitors</h2>
              <p>Every day without a professional website, you're losing $500+ emergency calls to plumbers who show up first in Google. Get your website that makes your phone ring.</p>
              <div className="cta-buttons">
                <a href="/contact" className="btn btn-primary btn-large">Get My Plumbing Website Now</a>
                <a href="/free-example" className="btn btn-outline btn-large">See a Plumbing Website Example</a>
              </div>
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