import React from 'react';
import { colors } from '../../styles/colors';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import heroImage from '../../assets/hero-growtika.jpg';

export const ConcretePage = () => {
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
            <img src={heroImage} alt="Professional concrete worker at work" />
            <div className="hero-overlay">
              <div className="hero-content">
                <h1 className="typewriter-text">Websites That Get Concrete Contractors More Jobs</h1>
                <p>
                  Get more driveways and foundation work. Show customers you're the concrete contractor who builds things to last.
                </p>
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
                }}>Get My Website</a>
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
                <h3>🏗️ Weather Stops Your Work</h3>
                <p>Rain, snow, and extreme temperatures shut down concrete work. You need steady leads to stay busy when weather permits.</p>
              </div>
              <div className="challenge-item">
                <h3>💰 Customers Pick the Cheapest Guy</h3>
                <p>Concrete work is expensive and customers get multiple quotes. They often choose price over quality and proper technique.</p>
              </div>
              <div className="challenge-item">
                <h3>📱 Hard to Show Quality Differences</h3>
                <p>Good concrete looks the same as cheap concrete at first. Customers don't understand why proper technique and materials matter.</p>
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
                <h3>🎯 Show Up First for Concrete Work</h3>
                <p>When someone searches "concrete contractor near me", you show up first. More searches mean more driveways and foundations.</p>
              </div>
              <div className="solution-item">
                <h3>⚡ Show Your Quality Work</h3>
                <p>Beautiful galleries show your finished driveways, patios, and foundations. Customers see the difference quality makes.</p>
              </div>
              <div className="solution-item">
                <h3>🏆 Explain Why You're Worth More</h3>
                <p>Show your proper techniques, quality materials, and guarantees. Customers understand why good concrete costs more.</p>
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
                <h3>🏠 Residential Concrete</h3>
                <p className="service-description">High-profit residential projects that homeowners need.</p>
                <div className="service-examples">
                  <span>Driveways</span>
                  <span>Patios</span>
                  <span>Sidewalks</span>
                  <span>Pool Decks</span>
                </div>
              </div>
              <div className="service-category">
                <h3>🎨 Decorative Concrete</h3>
                <p className="service-description">Premium decorative work with higher margins.</p>
                <div className="service-examples">
                  <span>Stamped Concrete</span>
                  <span>Colored Finishes</span>
                  <span>Exposed Aggregate</span>
                  <span>Polished Floors</span>
                </div>
              </div>
              <div className="service-category">
                <h3>🏢 Commercial Work</h3>
                <p className="service-description">Steady commercial projects with good volume.</p>
                <div className="service-examples">
                  <span>Foundations</span>
                  <span>Parking Lots</span>
                  <span>Warehouse Floors</span>
                  <span>Sidewalks</span>
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
                <h3>Basic Concrete Website</h3>
                <p className="solution-price">Perfect for starting concrete contractors</p>
                <div className="solution-features">
                  <div className="feature">✅ Project photo galleries</div>
                  <div className="feature">✅ Show up first in Google</div>
                  <div className="feature">✅ Quality process explanations</div>
                  <div className="feature">✅ Customer testimonials</div>
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
                <h3>Professional Concrete Website</h3>
                <p className="solution-price">For growing concrete businesses</p>
                <div className="solution-features">
                  <div className="feature">✅ Everything in Basic</div>
                  <div className="feature">✅ Decorative concrete showcases</div>
                  <div className="feature">✅ Before/after transformations</div>
                  <div className="feature">✅ Online estimate requests</div>
                  <div className="feature">✅ Google Ads optimization</div>
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
                <h3>Custom Concrete Portal</h3>
                <p className="solution-price">For established companies</p>
                <div className="solution-features">
                  <div className="feature">✅ Everything in Professional</div>
                  <div className="feature">✅ Multi-location optimization</div>
                  <div className="feature">✅ Commercial project showcases</div>
                  <div className="feature">✅ Advanced project tracking</div>
                  <div className="feature">✅ Monthly content updates</div>
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
                <h3>Will I get more driveway and patio jobs?</h3>
                <p>Yes. We make sure you show up first when people search for concrete work. We also showcase your best projects to attract serious customers.</p>
              </div>
              <div className="faq-item">
                <h3>How do you help me compete against cheap concrete guys?</h3>
                <p>We explain your proper techniques, quality materials, and guarantees. Customers learn why good concrete is worth paying more for.</p>
              </div>
              <div className="faq-item">
                <h3>Can you showcase decorative concrete work?</h3>
                <p>Absolutely. We create stunning galleries of stamped patterns, colored finishes, and artistic concrete that shows you're more than basic gray slabs.</p>
              </div>
              <div className="faq-item">
                <h3>How fast can my concrete website be ready?</h3>
                <p>7-14 days. We know good weather for concrete work doesn't last forever, so we get your website working fast to capture leads.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Ready to Get More Jobs?</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Get a website that brings you more concrete work. Simple as that.
              </p>
            </div>
            <div className="cta-buttons">
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
                }} style={{ backgroundColor: 'white', color: '#000' }}>
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