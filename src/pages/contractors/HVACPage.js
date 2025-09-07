import React from 'react';
import { colors } from '../../styles/colors';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import heroImage from '../../assets/hero-growtika.jpg';

export const HVACPage = () => {
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
            <img src={heroImage} alt="Professional HVAC technician at work" />
            <div className="hero-overlay">
              <div className="hero-content">
                <h1 className="typewriter-text">See Your HVAC Website Before You Buy</h1>
                <p>
                  Get a FREE custom website example built for your HVAC business. 
                  See exactly how it will look - delivered in 48 hours, no commitment required.
                </p>
                <a href="/free-example" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '18px 40px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '50px',
                  boxShadow: '0 6px 20px rgba(29, 122, 175, 0.4)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  textDecoration: 'none'
                }}>Get My Free Website Example</a>
                <a href="/contact" style={{
                  display: 'inline-block',
                  background: 'transparent',
                  color: colors.primary,
                  border: `2px solid ${colors.primary}`,
                  padding: '18px 40px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '50px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  textDecoration: 'none'
                }} style={{ marginLeft: '1rem' }}>Ask Questions First</a>
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
                <h3>🌡️ Seasonal Work Problems</h3>
                <p>Busy in summer and winter, slow the rest of the year. You need steady work all year round.</p>
              </div>
              <div className="challenge-item">
                <h3>💰 Expensive System Sales</h3>
                <p>New HVAC systems cost thousands. Customers shop around and pick the cheapest guy, not the best.</p>
              </div>
              <div className="challenge-item">
                <h3>📱 Emergency Calls Going Elsewhere</h3>
                <p>When someone's AC dies in July, they call whoever shows up first in Google. That should be you.</p>
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
                <h3>🎯 Show Up First for Emergency HVAC</h3>
                <p>When someone searches "AC repair near me" at 2 AM, you show up first. More emergency calls mean more money.</p>
              </div>
              <div className="solution-item">
                <h3>⚡ Easy to Use on Phones</h3>
                <p>Big call buttons that work when customers need you most. No more lost emergency calls.</p>
              </div>
              <div className="solution-item">
                <h3>🏆 Show Why You're Worth More</h3>
                <p>Display your certifications, warranties, and good reviews. Customers will pay fair prices for quality work.</p>
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
                <h3>🚨 Emergency HVAC</h3>
                <p className="service-description">High-profit emergency calls that happen any time.</p>
                <div className="service-examples">
                  <span>AC Breakdowns</span>
                  <span>Heating Failures</span>
                  <span>System Repairs</span>
                  <span>24/7 Service</span>
                </div>
              </div>
              <div className="service-category">
                <h3>❄️ Heating Systems</h3>
                <p className="service-description">Big-ticket heating installs and repairs.</p>
                <div className="service-examples">
                  <span>Furnace Install</span>
                  <span>Heat Pumps</span>
                  <span>Boiler Service</span>
                  <span>Ductwork</span>
                </div>
              </div>
              <div className="service-category">
                <h3>🌬️ Cooling Systems</h3>
                <p className="service-description">High-value AC installs and maintenance.</p>
                <div className="service-examples">
                  <span>Central AC</span>
                  <span>Mini Splits</span>
                  <span>AC Tune-ups</span>
                  <span>System Upgrades</span>
                </div>
              </div>
              <div className="service-category">
                <h3>🏠 Air Quality</h3>
                <p className="service-description">Modern services customers are willing to pay for.</p>
                <div className="service-examples">
                  <span>Air Purifiers</span>
                  <span>Humidity Control</span>
                  <span>Duct Cleaning</span>
                  <span>Smart Thermostats</span>
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
                <h3>Basic HVAC Website</h3>
                <p className="solution-price">Perfect for solo HVAC techs</p>
                <div className="solution-features">
                  <div className="feature">✅ Emergency call buttons</div>
                  <div className="feature">✅ Show up first in Google</div>
                  <div className="feature">✅ Service area pages</div>
                  <div className="feature">✅ Customer reviews display</div>
                </div>
                <a href="/contact" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '18px 40px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '50px',
                  boxShadow: '0 6px 20px rgba(29, 122, 175, 0.4)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  textDecoration: 'none'
                }}>Get Started</a>
              </div>
              <div className="solution-card">
                <h3>Professional HVAC Website</h3>
                <p className="solution-price">For growing HVAC businesses</p>
                <div className="solution-features">
                  <div className="feature">✅ Everything in Basic</div>
                  <div className="feature">✅ Equipment showcases</div>
                  <div className="feature">✅ Before/after galleries</div>
                  <div className="feature">✅ Online estimates</div>
                  <div className="feature">✅ Google Ads ready</div>
                </div>
                <a href="/contact" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '18px 40px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '50px',
                  boxShadow: '0 6px 20px rgba(29, 122, 175, 0.4)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  textDecoration: 'none'
                }}>Get Started</a>
              </div>
              <div className="solution-card">
                <h3>Custom HVAC Portal</h3>
                <p className="solution-price">For established companies</p>
                <div className="solution-features">
                  <div className="feature">✅ Everything in Professional</div>
                  <div className="feature">✅ Customer portals</div>
                  <div className="feature">✅ Multi-location sites</div>
                  <div className="feature">✅ Advanced tracking</div>
                  <div className="feature">✅ Monthly updates</div>
                </div>
                <a href="/contact" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '18px 40px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '50px',
                  boxShadow: '0 6px 20px rgba(29, 122, 175, 0.4)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  textDecoration: 'none'
                }}>Get Started</a>
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
                <h3>Will I get more emergency calls?</h3>
                <p>Yes. We make sure you show up first when people search for emergency HVAC help. That means more urgent calls and higher-paying jobs.</p>
              </div>
              <div className="faq-item">
                <h3>How fast can I get my website running?</h3>
                <p>7-14 days. We know every day without a good website is money lost, especially during busy seasons.</p>
              </div>
              <div className="faq-item">
                <h3>What if I'm not good with computers?</h3>
                <p>Perfect. We handle everything. You focus on HVAC work, we handle the website. Updates, changes, new content - all handled.</p>
              </div>
              <div className="faq-item">
                <h3>Do you work with ServiceTitan, Housecall Pro, etc.?</h3>
                <p>Yes. We connect with all major HVAC software. Leads from your website go straight into your system automatically.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Ready to Get More Jobs?</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Get a website that brings you more HVAC work. Simple as that.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/free-example" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '18px 40px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '50px',
                  boxShadow: '0 6px 20px rgba(29, 122, 175, 0.4)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  textDecoration: 'none'
                }} style={{ backgroundColor: 'white', color: '#000' }}>
                Get My Free Example
              </a>
              <a href="/contact" className="btn" style={{ backgroundColor: 'transparent', color: 'white', border: '2px solid white' }}>
                Ask Questions First
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};