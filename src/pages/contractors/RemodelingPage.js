import React from 'react';
import { colors } from '../../styles/colors';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import heroImage from '../../assets/hero-growtika.jpg';

export const RemodelingPage = () => {
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
            <img src={heroImage} alt="Professional remodeling contractor at work" />
            <div className="hero-overlay">
              <div className="hero-content">
                <h1 className="typewriter-text">Websites That Get Remodeling Contractors More Jobs</h1>
                <p>
                  Get more kitchen and bathroom remodels. Show customers you're the contractor who creates beautiful transformations they'll love.
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
                <h3>🏠 Big Investment Decisions</h3>
                <p>Remodeling costs serious money - $15,000 to $100,000+. Customers research everything and need absolute confidence before hiring you.</p>
              </div>
              <div className="challenge-item">
                <h3>💰 Too Many Horror Stories</h3>
                <p>Everyone knows someone who had a bad remodeling experience. Customers are scared of contractors who don't finish jobs or do poor work.</p>
              </div>
              <div className="challenge-item">
                <h3>📱 Hard to Show Complex Projects</h3>
                <p>Remodeling involves design, permits, coordination, and multiple phases. Your website needs to explain your process and show transformations.</p>
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
                <h3>🎯 Show Up First for Remodeling Jobs</h3>
                <p>When someone searches "bathroom remodel near me", you show up first. More searches mean more high-value remodeling projects.</p>
              </div>
              <div className="solution-item">
                <h3>⚡ Stunning Transformation Galleries</h3>
                <p>Show dramatic before/after remodels and detailed project stories. Customers see your quality and want that transformation.</p>
              </div>
              <div className="solution-item">
                <h3>🏆 Build Trust for Big Projects</h3>
                <p>Display your licenses, insurance, process explanations, and real customer reviews. Customers feel confident investing in your work.</p>
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
                <h3>🍳 Kitchen Remodeling</h3>
                <p className="service-description">High-value projects that homeowners prioritize most.</p>
                <div className="service-examples">
                  <span>Complete Kitchens</span>
                  <span>Cabinet Installation</span>
                  <span>Countertops</span>
                  <span>Kitchen Islands</span>
                </div>
              </div>
              <div className="service-category">
                <h3>🛁 Bathroom Remodeling</h3>
                <p className="service-description">Popular projects with great margins and steady demand.</p>
                <div className="service-examples">
                  <span>Master Bathrooms</span>
                  <span>Shower Installs</span>
                  <span>Tile Work</span>
                  <span>Vanity Updates</span>
                </div>
              </div>
              <div className="service-category">
                <h3>🏠 Whole Home Renovations</h3>
                <p className="service-description">Premium projects that maximize your revenue per client.</p>
                <div className="service-examples">
                  <span>Complete Makeovers</span>
                  <span>Open Floor Plans</span>
                  <span>Home Additions</span>
                  <span>Historic Restoration</span>
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
                <h3>Basic Remodeling Website</h3>
                <p className="solution-price">Perfect for starting remodelers</p>
                <div className="solution-features">
                  <div className="feature">✅ Before/after project galleries</div>
                  <div className="feature">✅ Show up first in Google</div>
                  <div className="feature">✅ Process explanation pages</div>
                  <div className="feature">✅ License and insurance display</div>
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
                <h3>Professional Remodeling Website</h3>
                <p className="solution-price">For growing remodeling businesses</p>
                <div className="solution-features">
                  <div className="feature">✅ Everything in Basic</div>
                  <div className="feature">✅ Design consultation showcases</div>
                  <div className="feature">✅ Room-by-room galleries</div>
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
                <h3>Custom Remodeling Portal</h3>
                <p className="solution-price">For established companies</p>
                <div className="solution-features">
                  <div className="feature">✅ Everything in Professional</div>
                  <div className="feature">✅ Client project portals</div>
                  <div className="feature">✅ Multi-location optimization</div>
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
                <h3>Will I get more high-value remodeling projects?</h3>
                <p>Yes. We make sure you show up first when people search for remodeling contractors. We also showcase your transformations to attract serious customers.</p>
              </div>
              <div className="faq-item">
                <h3>How do you help build trust for big investments?</h3>
                <p>We prominently display your licenses, insurance, detailed process explanations, and real customer reviews with photos. This builds the confidence needed for major projects.</p>
              </div>
              <div className="faq-item">
                <h3>Can you showcase different types of remodeling work?</h3>
                <p>Absolutely. We create dedicated sections for kitchen remodels, bathroom renovations, and whole home projects - each with specific galleries and information.</p>
              </div>
              <div className="faq-item">
                <h3>How fast can my remodeling website be ready?</h3>
                <p>7-14 days. We know remodeling projects book months ahead, so we get your website working quickly to capture leads for future projects.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Ready to Get More Jobs?</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Get a website that brings you more remodeling work. Simple as that.
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