import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import heroImage from '../../assets/hero-growtika.jpg';

export const ConstructionPage = () => {
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
            <img src={heroImage} alt="Professional construction worker at work" />
            <div className="hero-overlay">
              <div className="hero-content">
                <h1 className="typewriter-text">Websites That Get Contractors More Jobs</h1>
                <p>
                  Get more custom homes and big renovation projects. Show customers you're the builder they can trust with their investment.
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
                <h3>🏗️ Projects Are Too Complex to Explain</h3>
                <p>Construction projects involve permits, timelines, and multiple phases. Customers need simple explanations of what you do and how you do it.</p>
              </div>
              <div className="challenge-item">
                <h3>💰 Customers Pick the Cheapest Bid</h3>
                <p>Big construction jobs cost serious money. Homeowners get multiple quotes and often choose price over quality and experience.</p>
              </div>
              <div className="challenge-item">
                <h3>📱 Trust Issues with Contractors</h3>
                <p>Construction has a reputation problem. Customers need proof you're licensed, insured, and actually finish the job.</p>
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
                <h3>🎯 Show Up First for Big Projects</h3>
                <p>When someone searches "custom home builder near me", you show up first. More searches mean bigger jobs.</p>
              </div>
              <div className="solution-item">
                <h3>⚡ Make Complex Projects Simple</h3>
                <p>We explain your construction process in plain language. Customers understand what they're getting and why it's worth paying for.</p>
              </div>
              <div className="solution-item">
                <h3>🏆 Show Why You're Worth More</h3>
                <p>Display your licenses, insurance, and completed projects. Customers will pay fair prices for trusted builders.</p>
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
                <h3>🏠 Custom Homes</h3>
                <p className="service-description">High-profit custom builds and spec homes.</p>
                <div className="service-examples">
                  <span>Custom Builds</span>
                  <span>Luxury Homes</span>
                  <span>Design-Build</span>
                  <span>Spec Homes</span>
                </div>
              </div>
              <div className="service-category">
                <h3>🔧 Major Renovations</h3>
                <p className="service-description">Big-ticket renovation projects that transform homes.</p>
                <div className="service-examples">
                  <span>Whole House</span>
                  <span>Additions</span>
                  <span>Kitchen Remodels</span>
                  <span>Basement Finishing</span>
                </div>
              </div>
              <div className="service-category">
                <h3>🏢 Commercial Work</h3>
                <p className="service-description">Steady commercial projects with good margins.</p>
                <div className="service-examples">
                  <span>Office Buildings</span>
                  <span>Retail Spaces</span>
                  <span>Warehouses</span>
                  <span>Tenant Improvements</span>
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
                <h3>Builder Basic Website</h3>
                <p className="solution-price">Perfect for starting contractors</p>
                <div className="solution-features">
                  <div className="feature">✅ Project showcase galleries</div>
                  <div className="feature">✅ Show up first in Google</div>
                  <div className="feature">✅ License and insurance display</div>
                  <div className="feature">✅ Customer testimonials</div>
                </div>
                <a href="/contact" className="btn btn-primary">Get Started</a>
              </div>
              <div className="solution-card">
                <h3>Professional Builder Website</h3>
                <p className="solution-price">For growing construction companies</p>
                <div className="solution-features">
                  <div className="feature">✅ Everything in Builder Basic</div>
                  <div className="feature">✅ Detailed process explanations</div>
                  <div className="feature">✅ Before/during/after galleries</div>
                  <div className="feature">✅ Online estimate requests</div>
                  <div className="feature">✅ Google Ads optimization</div>
                </div>
                <a href="/contact" className="btn btn-primary">Get Started</a>
              </div>
              <div className="solution-card">
                <h3>Custom Builder Portal</h3>
                <p className="solution-price">For established companies</p>
                <div className="solution-features">
                  <div className="feature">✅ Everything in Professional</div>
                  <div className="feature">✅ Client project portals</div>
                  <div className="feature">✅ Multi-location optimization</div>
                  <div className="feature">✅ Advanced project tracking</div>
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
                <h3>Will I get more custom home projects?</h3>
                <p>Yes. We make sure you show up first when people search for custom builders. We also showcase your best work to attract serious clients.</p>
              </div>
              <div className="faq-item">
                <h3>How do you help with the long construction sales cycle?</h3>
                <p>We create educational content that builds trust over time. By the time customers contact you, they understand your process and value.</p>
              </div>
              <div className="faq-item">
                <h3>Do you showcase both residential and commercial work?</h3>
                <p>Absolutely. We create separate sections for residential and commercial projects, targeting the specific customers you want most.</p>
              </div>
              <div className="faq-item">
                <h3>How fast can my construction website be ready?</h3>
                <p>7-14 days. We know construction projects book months ahead, so we get your website working quickly to capture future work.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Ready to Get More Jobs?</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Get a website that brings you more construction work. Simple as that.
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