import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import heroImage from '../../assets/hero-growtika.jpg';

export const RoofingPage = () => {
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
            <img src={heroImage} alt="Professional roofer at work" />
            <div className="hero-overlay">
              <div className="hero-content">
                <h1 className="typewriter-text">Websites That Get Roofers More Jobs</h1>
                <p>
                  Get more storm damage calls and big roof installations. Show customers you're the roofing contractor they can trust.
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
                <h3>⛈️ Storm Chasers Beat You to Leads</h3>
                <p>After every storm, out-of-town roofers flood your area and grab the best jobs. You need to capture leads first.</p>
              </div>
              <div className="challenge-item">
                <h3>💰 Customers Pick the Cheapest Bid</h3>
                <p>Big roofing jobs are expensive. Homeowners get multiple quotes and often choose the lowest price instead of best quality.</p>
              </div>
              <div className="challenge-item">
                <h3>📱 Insurance Claims Are Confusing</h3>
                <p>Customers don't understand the insurance process. They need a roofer who can guide them through it professionally.</p>
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
                <h3>🎯 Show Up First for Storm Damage</h3>
                <p>When someone searches "roof repair near me" after a storm, you show up first. More storm calls mean bigger jobs.</p>
              </div>
              <div className="solution-item">
                <h3>⚡ Easy Insurance Help</h3>
                <p>Show customers you handle insurance claims professionally. They'll choose you over fly-by-night contractors.</p>
              </div>
              <div className="solution-item">
                <h3>🏆 Show Why You're Worth More</h3>
                <p>Display your licenses, insurance, and quality work. Customers will pay fair prices for trusted roofers.</p>
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
                <h3>⛈️ Storm Damage</h3>
                <p className="service-description">High-profit emergency work that happens year-round.</p>
                <div className="service-examples">
                  <span>Hail Damage</span>
                  <span>Wind Damage</span>
                  <span>Emergency Repairs</span>
                  <span>Insurance Claims</span>
                </div>
              </div>
              <div className="service-category">
                <h3>🏠 Roof Replacements</h3>
                <p className="service-description">Big-ticket jobs that boost your monthly revenue.</p>
                <div className="service-examples">
                  <span>Shingle Roofs</span>
                  <span>Metal Roofing</span>
                  <span>Tile Systems</span>
                  <span>Complete Tear-offs</span>
                </div>
              </div>
              <div className="service-category">
                <h3>🔧 Repair Services</h3>
                <p className="service-description">Steady work that keeps your schedule full.</p>
                <div className="service-examples">
                  <span>Leak Repairs</span>
                  <span>Gutter Work</span>
                  <span>Flashing Fixes</span>
                  <span>Maintenance</span>
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
                <h3>Storm Response Website</h3>
                <p className="solution-price">Perfect for solo roofers</p>
                <div className="solution-features">
                  <div className="feature">✅ Storm damage emergency buttons</div>
                  <div className="feature">✅ Show up first in Google</div>
                  <div className="feature">✅ Insurance claim help pages</div>
                  <div className="feature">✅ Before/after photo galleries</div>
                </div>
                <a href="/contact" className="btn btn-primary">Get Started</a>
              </div>
              <div className="solution-card">
                <h3>Professional Roofing Website</h3>
                <p className="solution-price">For growing roofing businesses</p>
                <div className="solution-features">
                  <div className="feature">✅ Everything in Storm Response</div>
                  <div className="feature">✅ Material comparison guides</div>
                  <div className="feature">✅ Customer testimonial system</div>
                  <div className="feature">✅ Online estimate requests</div>
                  <div className="feature">✅ Google Ads optimization</div>
                </div>
                <a href="/contact" className="btn btn-primary">Get Started</a>
              </div>
              <div className="solution-card">
                <h3>Custom Roofing Portal</h3>
                <p className="solution-price">For established companies</p>
                <div className="solution-features">
                  <div className="feature">✅ Everything in Professional</div>
                  <div className="feature">✅ Multi-location optimization</div>
                  <div className="feature">✅ Advanced storm tracking</div>
                  <div className="feature">✅ Customer portals</div>
                  <div className="feature">✅ Monthly optimization updates</div>
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
                <h3>Will I get more storm damage calls?</h3>
                <p>Yes. We make sure you show up first when people search for storm damage help. That means more emergency calls and bigger insurance jobs.</p>
              </div>
              <div className="faq-item">
                <h3>How do you help me beat storm chasers?</h3>
                <p>We create storm response pages that go live immediately after weather events. You'll capture leads while out-of-town contractors are still driving to your area.</p>
              </div>
              <div className="faq-item">
                <h3>Do you help with insurance claim marketing?</h3>
                <p>Absolutely. We create pages that explain how you handle insurance claims professionally. This builds trust and gets you more insurance work.</p>
              </div>
              <div className="faq-item">
                <h3>How fast can my roofing website be ready?</h3>
                <p>7-14 days. We know storm season doesn't wait. Your website will be ready to capture leads as soon as possible.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Ready to Get More Jobs?</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Get a website that brings you more roofing work. Simple as that.
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