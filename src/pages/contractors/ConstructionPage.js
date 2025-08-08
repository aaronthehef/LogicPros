import React from 'react';
import '../../responsive-style.css';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';

export const ConstructionPage = () => {
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

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Professional Websites for General Contractors</h1>
              <p className="hero-subtitle">
                Build your construction business on a solid foundation with a website that showcases 
                your craftsmanship, attracts premium projects, and converts leads into signed contracts. 
                Specialized web development for general contractors who build success.
              </p>
              <a href="/contact" className="btn btn-primary btn-large">Get My Construction Website</a>
            </div>
          </div>
        </section>

        {/* Construction-Specific Challenges */}
        <section className="section">
          <div className="container">
            <h2>Challenges Every General Contractor Faces</h2>
            <div className="challenges-grid">
              <div className="challenge-item">
                <h3>🏗️ Project Complexity Communication</h3>
                <p>Construction projects are complex with multiple phases, permits, and timelines. Customers need clear explanations of processes, timelines, and what to expect at each stage.</p>
              </div>
              <div className="challenge-item">
                <h3>💰 High-Value Project Competition</h3>
                <p>Custom homes, additions, and major renovations are significant investments. Customers research extensively and compare multiple contractors before making decisions.</p>
              </div>
              <div className="challenge-item">
                <h3>📋 Licensing & Insurance Verification</h3>
                <p>Construction requires proper licensing, bonding, and insurance. Customers need proof you're legitimate and their investment is protected before they'll trust you with major projects.</p>
              </div>
              <div className="challenge-item">
                <h3>🎯 Diverse Service Portfolio</h3>
                <p>General contractors handle everything from small repairs to custom homes. Your website needs to showcase your range while positioning you for the most profitable work.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="section">
          <div className="container">
            <h2>How LogicPros Builds Your Construction Success</h2>
            <div className="solutions-grid">
              <div className="solution-item">
                <h3>🎯 Project Process Visualization</h3>
                <p><strong>What we do:</strong> Create detailed project timeline pages, phase-by-phase explanations, permit processes, and progress tracking systems to demystify construction.</p>
                <p><strong>Result:</strong> Better qualified leads who understand the process and value your expertise.</p>
              </div>
              <div className="solution-item">
                <h3>🏆 Premium Project Positioning</h3>
                <p><strong>What we do:</strong> Showcase high-end projects, custom work, and attention to detail that justifies premium service and attracts serious clients.</p>
                <p><strong>Result:</strong> Higher-value projects and clients willing to pay for quality workmanship.</p>
              </div>
              <div className="solution-item">
                <h3>📜 Credibility & Trust Building</h3>
                <p><strong>What we do:</strong> Prominently display licenses, bonding, insurance, certifications, awards, and detailed customer testimonials with project photos.</p>
                <p><strong>Result:</strong> Increased trust and confidence in your ability to handle major investments.</p>
              </div>
              <div className="solution-item">
                <h3>🔧 Service Specialization Strategy</h3>
                <p><strong>What we do:</strong> Create dedicated pages for your most profitable services while showing your full capabilities, targeting the work you want most.</p>
                <p><strong>Result:</strong> More leads for your preferred project types and higher profit margins.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Construction Services We Highlight */}
        <section className="section">
          <div className="container">
            <h2>Construction Services We Help You Market</h2>
            <div className="services-grid">
              <div className="service-category">
                <h3>🏠 Custom Home Building</h3>
                <ul>
                  <li>Custom home construction</li>
                  <li>Luxury home building</li>
                  <li>Design-build services</li>
                  <li>New construction consulting</li>
                  <li>Spec home development</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🔧 Major Renovations</h3>
                <ul>
                  <li>Whole house renovations</li>
                  <li>Kitchen & bathroom remodels</li>
                  <li>Home additions</li>
                  <li>Basement finishing</li>
                  <li>Historic restoration</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🏢 Commercial Construction</h3>
                <ul>
                  <li>Office building construction</li>
                  <li>Retail space buildouts</li>
                  <li>Restaurant construction</li>
                  <li>Warehouse & industrial</li>
                  <li>Tenant improvements</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>🔨 Repair & Maintenance</h3>
                <ul>
                  <li>Structural repairs</li>
                  <li>Storm damage restoration</li>
                  <li>Foundation work</li>
                  <li>Siding & exterior work</li>
                  <li>Handyman services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ROI & Results */}
        <section className="section">
          <div className="container">
            <h2>Real Results for General Contractors</h2>
            <div className="results-grid">
              <div className="result-item">
                <h3>Premier Custom Builders</h3>
                <p><strong>Challenge:</strong> Attracting high-end custom home clients willing to invest in quality construction.</p>
                <p><strong>Solution:</strong> Luxury-focused website showcasing premium projects, detailed craftsmanship, and white-glove service approach.</p>
                <p><strong>Results:</strong> 180% increase in custom home inquiries, average project value increased to $350K.</p>
              </div>
              <div className="result-item">
                <h3>Solid Foundation Construction</h3>
                <p><strong>Challenge:</strong> Competing against larger construction companies for commercial projects.</p>
                <p><strong>Solution:</strong> Professional website highlighting specialized expertise, faster timelines, and personalized service.</p>
                <p><strong>Results:</strong> Won 3 major commercial contracts worth $2.8M, established preferred contractor relationships.</p>
              </div>
              <div className="result-item">
                <h3>Heritage Home Builders</h3>
                <p><strong>Challenge:</strong> Complex renovation projects scared away potential customers due to process uncertainty.</p>
                <p><strong>Solution:</strong> Educational website with detailed renovation processes, timelines, and project management approach.</p>
                <p><strong>Results:</strong> 220% increase in major renovation leads, 45% higher project completion rate.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="section">
          <div className="container">
            <h2>Construction Website Solutions</h2>
            <div className="solutions-grid">
              <div className="solution-card">
                <h3>Foundation Sites</h3>
                <ul>
                  <li>10-page professional site</li>
                  <li>Project portfolio gallery</li>
                  <li>Service capability pages</li>
                  <li>Licensing & insurance display</li>
                  <li>Contact & estimate forms</li>
                  <li>Basic SEO optimization</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Discuss Your Needs</a>
              </div>
              <div className="solution-card featured">
                <h3>Custom Builder Pro Sites</h3>
                <ul>
                  <li>20-page comprehensive site</li>
                  <li>Detailed project process pages</li>
                  <li>Premium portfolio showcases</li>
                  <li>Client testimonial system</li>
                  <li>Project timeline tools</li>
                  <li>Advanced local SEO</li>
                  <li>Lead management integration</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Schedule Consultation</a>
              </div>
              <div className="solution-card">
                <h3>Market Domination Sites</h3>
                <ul>
                  <li>Unlimited pages & features</li>
                  <li>Custom project management portal</li>
                  <li>Advanced client communication tools</li>
                  <li>Comprehensive analytics dashboard</li>
                  <li>Multi-location optimization</li>
                  <li>Ongoing content marketing</li>
                  <li>Complete digital marketing suite</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Explore Possibilities</a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container">
            <h2>Common Questions from General Contractors</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>How do you help me attract higher-value construction projects?</h3>
                <p>We position you as a premium contractor through high-quality project galleries, detailed process explanations, and testimonials from satisfied clients. This attracts customers willing to invest in quality construction.</p>
              </div>
              <div className="faq-item">
                <h3>Can you showcase both residential and commercial capabilities?</h3>
                <p>Absolutely! We create separate sections for residential and commercial work, with tailored messaging, project examples, and client testimonials relevant to each market segment.</p>
              </div>
              <div className="faq-item">
                <h3>How do you handle the complex construction sales process?</h3>
                <p>We create educational content explaining construction phases, permitting processes, timeline expectations, and project factors. This helps customers understand the value and complexity before they contact you.</p>
              </div>
              <div className="faq-item">
                <h3>Do you help with licensing and insurance credibility?</h3>
                <p>Yes! We prominently display all licenses, bonding information, insurance coverage, certifications, and safety records. This immediately establishes credibility and trust with potential clients.</p>
              </div>
              <div className="faq-item">
                <h3>How do you showcase construction quality and craftsmanship?</h3>
                <p>We create detailed project galleries with before/during/after photos, close-up craftsmanship shots, material details, and progress documentation to visually demonstrate your quality work.</p>
              </div>
              <div className="faq-item">
                <h3>Can you integrate with construction management software?</h3>
                <p>Yes! We integrate with popular construction software like Buildertrend, CoConstruct, and Procore, allowing clients to track project progress and communicate seamlessly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Build Your Construction Empire?</h2>
              <p>Join 85+ general contractors who've increased their revenue with LogicPros websites. Custom homes, major renovations, and commercial projects - all flowing to your business.</p>
              <div className="cta-buttons">
                <a href="/free-example" className="btn btn-primary btn-large">See My Free Construction Website Example</a>
                <a href="/contact" className="btn btn-outline btn-large">Schedule Free Consultation</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>LogicPros</h3>
              <p>Professional websites for general contractors</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4>Contractor Services</h4>
                <a href="/contractors/construction">Construction Websites</a>
                <a href="/contractors/roofing">Roofing Websites</a>
                <a href="/contractors/remodeling">Remodeling Websites</a>
                <a href="/contractors/concrete">Concrete Websites</a>
              </div>
              
              <div className="footer-column">
                <h4>Company</h4>
                <a href="/about">About Us</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/contact">Contact</a>
                <a href="/free-example">Free Example</a>
              </div>
              
              <div className="footer-column">
                <h4>Contact</h4>
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