import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import heroImage from '../../assets/hero-growtika.jpg';

export const PaintingPage = () => {
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
            <img src={heroImage} alt="Professional painter at work" />
            <div className="hero-overlay">
              <div className="hero-content">
                <h1 className="typewriter-text">Websites That Get Painters More Jobs</h1>
                <p>
                  Get more interior and exterior painting projects. Show customers you're the painter who creates beautiful, lasting transformations.
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
                <h3>🎨 Everyone Thinks They Can Paint</h3>
                <p>Customers don't understand the difference between professional painting and weekend DIY work. Your website needs to show why quality matters.</p>
              </div>
              <div className="challenge-item">
                <h3>💰 Competing Against Cheap Guys</h3>
                <p>Unlicensed painters undercut your prices. Customers pick the lowest bid without understanding quality, prep work, or insurance protection.</p>
              </div>
              <div className="challenge-item">
                <h3>📱 Can't Show Your Quality Online</h3>
                <p>Great paint jobs look perfect from far away. Your website needs close-up details and before/after comparisons to show your craftsmanship.</p>
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
                <h3>🎯 Show Up First for Painting Jobs</h3>
                <p>When someone searches "painter near me", you show up first. More searches mean more interior and exterior painting contracts.</p>
              </div>
              <div className="solution-item">
                <h3>⚡ Beautiful Transformation Galleries</h3>
                <p>Show dramatic before/after transformations and detailed close-ups. Customers see the quality difference and want that for their home.</p>
              </div>
              <div className="solution-item">
                <h3>🏆 Show Why You're Worth More</h3>
                <p>Display your licenses, insurance, quality prep work, and guarantees. Customers understand why professional painting costs more.</p>
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
                <h3>🏠 Interior Painting</h3>
                <p className="service-description">Year-round work that keeps your schedule full.</p>
                <div className="service-examples">
                  <span>Whole House Interior</span>
                  <span>Room Makeovers</span>
                  <span>Kitchen & Bath</span>
                  <span>Trim & Ceilings</span>
                </div>
              </div>
              <div className="service-category">
                <h3>🌤️ Exterior Painting</h3>
                <p className="service-description">High-value projects that boost your revenue.</p>
                <div className="service-examples">
                  <span>House Exteriors</span>
                  <span>Deck Staining</span>
                  <span>Fence Painting</span>
                  <span>Pressure Washing</span>
                </div>
              </div>
              <div className="service-category">
                <h3>🏢 Commercial Painting</h3>
                <p className="service-description">Steady contracts with reliable payments.</p>
                <div className="service-examples">
                  <span>Office Buildings</span>
                  <span>Retail Stores</span>
                  <span>Restaurants</span>
                  <span>Warehouses</span>
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
                <h3>Basic Painter Website</h3>
                <p className="solution-price">Perfect for solo painters</p>
                <div className="solution-features">
                  <div className="feature">✅ Before/after project galleries</div>
                  <div className="feature">✅ Show up first in Google</div>
                  <div className="feature">✅ Quality process explanations</div>
                  <div className="feature">✅ License and insurance display</div>
                </div>
                <a href="/contact" className="btn btn-primary">Get Started</a>
              </div>
              <div className="solution-card">
                <h3>Professional Painter Website</h3>
                <p className="solution-price">For growing painting businesses</p>
                <div className="solution-features">
                  <div className="feature">✅ Everything in Basic</div>
                  <div className="feature">✅ Color consultation showcases</div>
                  <div className="feature">✅ Commercial project galleries</div>
                  <div className="feature">✅ Online estimate requests</div>
                  <div className="feature">✅ Google Ads optimization</div>
                </div>
                <a href="/contact" className="btn btn-primary">Get Started</a>
              </div>
              <div className="solution-card">
                <h3>Custom Painter Portal</h3>
                <p className="solution-price">For established companies</p>
                <div className="solution-features">
                  <div className="feature">✅ Everything in Professional</div>
                  <div className="feature">✅ Multi-location optimization</div>
                  <div className="feature">✅ Seasonal marketing campaigns</div>
                  <div className="feature">✅ Customer project tracking</div>
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
                <h3>Will I get more painting contracts?</h3>
                <p>Yes. We make sure you show up first when people search for painters. We also showcase your quality work to attract customers who want professional results.</p>
              </div>
              <div className="faq-item">
                <h3>How do you help me compete against cheap painters?</h3>
                <p>We emphasize your licensing, insurance, quality materials, proper prep work, and guarantees. This shows customers why professional painting is worth the investment.</p>
              </div>
              <div className="faq-item">
                <h3>Can you showcase both interior and exterior work?</h3>
                <p>Absolutely. We create separate showcases for interior transformations and exterior makeovers, highlighting the specific skills needed for each type of project.</p>
              </div>
              <div className="faq-item">
                <h3>How fast can my painting website be ready?</h3>
                <p>7-14 days. We know painting season doesn't wait, so we get your website ready quickly to capture leads when customers are ready to hire.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Ready to Get More Jobs?</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Get a website that brings you more painting work. Simple as that.
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