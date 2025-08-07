import React from 'react';
import '../responsive-style.css';
import { Logo } from '../components/Logo';
import { Navigation } from '../components/Navigation';

export const AboutPage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="sticky-header">
        <div className="header-content">
          <div className="logo">
            <Logo />
          </div>
          <Navigation />
        </div>
      </header>

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>About LogicPros: Complete Digital Solutions</h1>
              <p>
                Based in New Brunswick, Canada, we provide websites, AI business automations, 
                and managed IT services to contractors and small businesses across Canada and the U.S.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section">
          <div className="container">
            <div className="about-story">
              <div className="story-content">
                <h2>Our Story</h2>
                <p>
                  LogicPros was founded with a simple mission: help contractors dominate their local markets through 
                  powerful web presence. After seeing too many skilled contractors lose business to competitors 
                  with better websites, we decided to level the playing field.
                </p>
                <p>
                  Since 2019, we've helped over 200 contractors across various trades increase their online leads, 
                  streamline operations, and grow their businesses. We understand the unique challenges contractors 
                  face and build solutions that actually work in the real world.
                </p>
                <div className="company-stats">
                  <div className="company-stat">
                    <h3>200+</h3>
                    <p>Contractors Served</p>
                  </div>
                  <div className="company-stat">
                    <h3>$2.5M+</h3>
                    <p>Additional Revenue Generated</p>
                  </div>
                  <div className="company-stat">
                    <h3>98%</h3>
                    <p>Client Satisfaction Rate</p>
                  </div>
                  <div className="company-stat">
                    <h3>5</h3>
                    <p>Years of Industry Focus</p>
                  </div>
                </div>
              </div>
              <div className="story-image">
                <div className="placeholder-image">Team Photo or Office</div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Meet Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-photo">
                  <div className="placeholder-image">Aaron's Photo</div>
                </div>
                <div className="member-info">
                  <h3>Aaron Hefling</h3>
                  <p className="member-title">Founder & Lead Developer</p>
                  <p className="member-bio">
                    With 8+ years in web development and a background in construction project management, 
                    Aaron understands both the technical and business sides of contractor operations. He 
                    personally oversees every project to ensure quality and results.
                  </p>
                  <div className="member-credentials">
                    <span>Full-Stack Developer</span>
                    <span>Former Project Manager</span>
                    <span>Google Certified</span>
                  </div>
                </div>
              </div>

              <div className="team-member">
                <div className="member-photo">
                  <div className="placeholder-image">Sarah's Photo</div>
                </div>
                <div className="member-info">
                  <h3>Sarah Mitchell</h3>
                  <p className="member-title">UX/UI Designer & SEO Specialist</p>
                  <p className="member-bio">
                    Sarah creates designs that not only look great but convert visitors into customers. 
                    Her background in digital marketing ensures every website is optimized for search 
                    engines and user experience.
                  </p>
                  <div className="member-credentials">
                    <span>Certified UX Designer</span>
                    <span>SEO Expert</span>
                    <span>Conversion Specialist</span>
                  </div>
                </div>
              </div>

              <div className="team-member">
                <div className="member-photo">
                  <div className="placeholder-image">Mike's Photo</div>
                </div>
                <div className="member-info">
                  <h3>Mike Rodriguez</h3>
                  <p className="member-title">Client Success Manager</p>
                  <p className="member-bio">
                    As a former contractor himself, Mike speaks your language and understands your challenges. 
                    He ensures every client gets the support they need to maximize their website's potential 
                    and grow their business.
                  </p>
                  <div className="member-credentials">
                    <span>Former Contractor</span>
                    <span>Business Consultant</span>
                    <span>Industry Expert</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Why Businesses Choose LogicPros</h2>
            <div className="expertise-grid">
              <div className="expertise-item">
                <div className="expertise-icon">🏗️</div>
                <h3>Industry Specialists</h3>
                <p>
                  We exclusively serve contractors and construction businesses. This focus means we understand 
                  your unique challenges, seasonal patterns, and what your customers are looking for.
                </p>
              </div>

              <div className="expertise-item">
                <div className="expertise-icon">📱</div>
                <h3>Mobile-First Approach</h3>
                <p>
                  Over 70% of contractor searches happen on mobile devices. Every website we build is designed 
                  for mobile first, ensuring your customers can easily contact you from any device.
                </p>
              </div>

              <div className="expertise-item">
                <div className="expertise-icon">🎯</div>
                <h3>Lead Generation Focus</h3>
                <p>
                  Pretty websites don't pay the bills - leads do. Every design decision we make is focused 
                  on converting visitors into qualified prospects for your business.
                </p>
              </div>

              <div className="expertise-item">
                <div className="expertise-icon">⚡</div>
                <h3>Fast Implementation</h3>
                <p>
                  We know contractors need results quickly. Our streamlined process gets your website launched 
                  in 2-3 weeks, not months, so you can start generating leads immediately.
                </p>
              </div>

              <div className="expertise-item">
                <div className="expertise-icon">🛠️</div>
                <h3>Ongoing Support</h3>
                <p>
                  Your success is our success. We provide ongoing maintenance, updates, and optimization to 
                  ensure your website continues generating leads and growing your business.
                </p>
              </div>

              <div className="expertise-item">
                <div className="expertise-icon">📊</div>
                <h3>Measurable Results</h3>
                <p>
                  We track and report on what matters: leads, conversions, and ROI. You'll know exactly how 
                  your website investment is paying off with detailed analytics and reporting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Partnerships */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Certifications & Partnerships</h2>
            <div className="certifications-grid">
              <div className="cert-item">
                <div className="cert-logo">Google Partner</div>
                <h4>Google Certified Partner</h4>
                <p>Certified in Google Ads, Analytics, and SEO best practices</p>
              </div>
              
              <div className="cert-item">
                <div className="cert-logo">AWS</div>
                <h4>AWS Solutions Architect</h4>
                <p>Certified in cloud infrastructure and security</p>
              </div>
              
              <div className="cert-item">
                <div className="cert-logo">Security+</div>
                <h4>Security Certified</h4>
                <p>Advanced security protocols to protect your data</p>
              </div>
              
              <div className="cert-item">
                <div className="cert-logo">Better Business Bureau</div>
                <h4>BBB Accredited</h4>
                <p>A+ rating with the Better Business Bureau</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">How We Work With You</h2>
            <div className="process-timeline">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Discovery Call</h3>
                  <p>We start with a detailed consultation to understand your business, goals, target customers, and competitive landscape.</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Free Example Website</h3>
                  <p>We create a sample page showing exactly what your website will look like - no commitment required until you love it.</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Strategy & Planning</h3>
                  <p>Once approved, we develop a comprehensive strategy including site structure, content plan, and SEO targeting.</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Design & Development</h3>
                  <p>We build your website using proven frameworks and optimization techniques, with regular check-ins for feedback.</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Launch & Training</h3>
                  <p>We handle the technical launch and provide comprehensive training so you can manage content and track results.</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">6</div>
                <div className="step-content">
                  <h3>Ongoing Optimization</h3>
                  <p>We continuously monitor performance and make improvements to maximize your lead generation and ROI.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                <p className="testimonial-quote">
                  "Working with LogicPros was the best business decision we've made. They understand contractors 
                  and built us a website that actually generates leads. Professional, responsive, and results-driven."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <h4>Jennifer Park</h4>
                    <p>Elite Landscaping Co.</p>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                <p className="testimonial-quote">
                  "The team at LogicPros delivered exactly what they promised. Our online leads have tripled, 
                  and the project management portal has streamlined our entire workflow. Exceptional service!"
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <h4>Tom Anderson</h4>
                    <p>Anderson Plumbing</p>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                <p className="testimonial-quote">
                  "Finally, a web company that gets the construction industry! They created a website that 
                  speaks to our customers and converts visits into actual paying jobs. Highly recommended."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <h4>Sarah Chen</h4>
                    <p>ProTools Supply</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Ready to Work Together?</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Let's discuss your project and show you exactly what we can do for your business.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/free-example" className="btn btn-primary" style={{ backgroundColor: 'white', color: '#000' }}>
                Get Free Example Website
              </a>
              <a href="/contact" className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
                Schedule a Call
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Additional styles for about page
const aboutStyles = `
.about-story {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 40px;
}

.story-content h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: var(--primary-color);
}

.story-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: var(--text-secondary);
}

.company-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 40px;
  padding: 30px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
}

.company-stat {
  text-align: center;
}

.company-stat h3 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.company-stat p {
  color: var(--text-secondary);
  font-weight: 500;
}

.story-image {
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.team-member {
  background: white;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.member-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 20px;
  overflow: hidden;
}

.member-info h3 {
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.member-title {
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 15px;
}

.member-bio {
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.member-credentials {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.member-credentials span {
  background: #e9ecef;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.expertise-item {
  text-align: center;
  padding: 30px;
}

.expertise-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.expertise-item h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--primary-color);
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.cert-item {
  background: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.cert-logo {
  width: 80px;
  height: 80px;
  background: #f8f9fa;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-weight: bold;
  color: var(--primary-color);
}

.process-timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.process-step {
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
  position: relative;
}

.process-step:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 29px;
  top: 60px;
  width: 2px;
  height: calc(100% + 20px);
  background: #ddd;
}

.step-number {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 30px;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.step-content h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: var(--primary-color);
}

.step-content p {
  line-height: 1.6;
  color: var(--text-secondary);
}

.testimonial-rating {
  font-size: 1.2rem;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .about-story {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .company-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
  }
  
  .story-image {
    height: 250px;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .expertise-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .certifications-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .process-step {
    flex-direction: column;
    text-align: center;
  }
  
  .process-step::after {
    display: none;
  }
  
  .step-number {
    margin: 0 auto 20px;
  }
}

@media (max-width: 480px) {
  .company-stats {
    grid-template-columns: 1fr;
  }
  
  .certifications-grid {
    grid-template-columns: 1fr;
  }
}
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = aboutStyles;
  document.head.appendChild(styleSheet);
}