import React, { useState } from 'react';
import '../responsive-style.css';
import { Logo } from '../components/Logo';
import { Navigation } from '../components/Navigation';

export const FreeExamplePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    trade: '',
    website: '',
    mainServices: '',
    targetArea: '',
    preferredStyle: '',
    competitors: '',
    timeline: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Free example request:', formData);
    alert('Thank you! We\'ll create your free example website and send it to you within 48 hours.');
  };

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
              <h1>See Your Website Before You Buy It</h1>
              <p>
                Get a FREE sample page showing exactly what your business website will look like. 
                WordPress, Wix, or React with AI-powered content - no commitment required.
              </p>
              <div className="hero-benefits">
                <div className="benefit-item">✓ Completely FREE - No strings attached</div>
                <div className="benefit-item">✓ Custom design for YOUR business</div>
                <div className="benefit-item">✓ See it within 48 hours</div>
                <div className="benefit-item">✓ No obligation to purchase</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">How Our Free Example Website Works</h2>
            <div className="how-it-works-grid">
              <div className="step-card">
                <div className="step-icon">📝</div>
                <h3>1. Tell Us About Your Business</h3>
                <p>Fill out our quick form with details about your business, services, and style preferences.</p>
              </div>

              <div className="step-card">
                <div className="step-icon">🎨</div>
                <h3>2. We Create Your Sample Page</h3>
                <p>Our designers create a custom homepage mockup specifically for your business - completely free.</p>
              </div>

              <div className="step-card">
                <div className="step-icon">📧</div>
                <h3>3. Review Your Design</h3>
                <p>Within 48 hours, you'll receive a link to view your custom website example with your business information.</p>
              </div>

              <div className="step-card">
                <div className="step-icon">✅</div>
                <h3>4. Decide If You Want to Proceed</h3>
                <p>Love it? Let's build the full website. Don't like it? No problem - you're under no obligation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Get */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">What's Included in Your Free Example</h2>
            <div className="included-grid">
              <div className="included-item">
                <div className="included-icon">🏠</div>
                <h3>Custom Homepage Design</h3>
                <p>A fully designed homepage layout featuring your business name, services, and contact information.</p>
              </div>

              <div className="included-item">
                <div className="included-icon">📱</div>
                <h3>Mobile-Responsive Preview</h3>
                <p>See how your website will look on desktop, tablet, and mobile devices.</p>
              </div>

              <div className="included-item">
                <div className="included-icon">🎯</div>
                <h3>Industry-Specific Content</h3>
                <p>Content written specifically for your trade and target customers in your area.</p>
              </div>

              <div className="included-item">
                <div className="included-icon">🖼️</div>
                <h3>Professional Layout</h3>
                <p>Clean, modern design that builds trust and encourages customers to contact you.</p>
              </div>

              <div className="included-item">
                <div className="included-icon">📞</div>
                <h3>Lead Capture Elements</h3>
                <p>Contact forms, phone numbers, and call-to-action buttons strategically placed for maximum conversions.</p>
              </div>

              <div className="included-item">
                <div className="included-icon">🔍</div>
                <h3>SEO-Optimized Structure</h3>
                <p>Page structure and content optimized for search engines to help you get found online.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Free Example Form */}
        <section className="section">
          <div className="container">
            <div className="example-form-layout">
              <div className="form-header">
                <h2>Get Your Free Example Website</h2>
                <p>The more details you provide, the better we can customize your example. All fields are optional except the first three.</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-section">
                  <h3>Basic Information</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@smithconstruction.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Business/Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Smith Construction LLC"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Business Details</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="trade">Your Primary Trade</label>
                      <select
                        id="trade"
                        name="trade"
                        value={formData.trade}
                        onChange={handleChange}
                      >
                        <option value="">Select your trade</option>
                        <option value="roofing">Roofing</option>
                        <option value="plumbing">Plumbing</option>
                        <option value="electrical">Electrical</option>
                        <option value="hvac">HVAC</option>
                        <option value="landscaping">Landscaping</option>
                        <option value="construction">General Construction</option>
                        <option value="remodeling">Home Remodeling</option>
                        <option value="painting">Painting</option>
                        <option value="flooring">Flooring</option>
                        <option value="concrete">Concrete</option>
                        <option value="masonry">Masonry</option>
                        <option value="fencing">Fencing</option>
                        <option value="windows">Windows & Doors</option>
                        <option value="solar">Solar Installation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="targetArea">Service Area/City</label>
                      <input
                        type="text"
                        id="targetArea"
                        name="targetArea"
                        value={formData.targetArea}
                        onChange={handleChange}
                        placeholder="Atlanta, GA or Greater Toronto Area"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="mainServices">Main Services You Offer</label>
                    <textarea
                      id="mainServices"
                      name="mainServices"
                      value={formData.mainServices}
                      onChange={handleChange}
                      rows="3"
                      placeholder="e.g., Residential roofing, commercial roof repair, storm damage restoration, gutter installation"
                    ></textarea>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Design Preferences</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="preferredStyle">Preferred Website Style</label>
                      <select
                        id="preferredStyle"
                        name="preferredStyle"
                        value={formData.preferredStyle}
                        onChange={handleChange}
                      >
                        <option value="">Select style preference</option>
                        <option value="modern-clean">Modern & Clean</option>
                        <option value="professional-corporate">Professional Corporate</option>
                        <option value="bold-dynamic">Bold & Dynamic</option>
                        <option value="traditional-trustworthy">Traditional & Trustworthy</option>
                        <option value="creative-unique">Creative & Unique</option>
                        <option value="no-preference">No Preference - Surprise Me!</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="website">Current Website (if any)</label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="your-current-website.com (optional)"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="competitors">Competitor Websites You Like/Dislike</label>
                    <textarea
                      id="competitors"
                      name="competitors"
                      value={formData.competitors}
                      onChange={handleChange}
                      rows="3"
                      placeholder="Share any competitor websites you think look good or bad, and what you like/dislike about them"
                    ></textarea>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Project Timeline</h3>
                  <div className="form-group">
                    <label htmlFor="timeline">When would you need the website completed?</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      <option value="">Select timeline</option>
                      <option value="just-looking">Just exploring options</option>
                      <option value="asap">ASAP - Rush needed</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="next-season">Before next busy season</option>
                      <option value="flexible">Flexible timeline</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  Get My Free Example Website
                </button>

                <div className="form-guarantee">
                  <h4>Our Promise to You:</h4>
                  <ul>
                    <li>✓ Completely FREE with no obligations</li>
                    <li>✓ Custom design created specifically for your business</li>
                    <li>✓ Delivered within 48 hours (often sooner)</li>
                    <li>✓ No sales pressure - you decide if you want to proceed</li>
                    <li>✓ Your information remains confidential</li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Why We Offer This */}
        <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title">Why Do We Offer Free Examples?</h2>
            <div className="why-free-content">
              <div className="why-free-text">
                <h3>Because We're Confident in Our Work</h3>
                <p>
                  We've been building websites for contractors for over 5 years. We know what works and what doesn't. 
                  When you see the quality of our design and how well it represents your business, we're confident 
                  you'll want to work with us.
                </p>

                <h3>No Risk for You</h3>
                <p>
                  Hiring a web designer is a big decision. Many contractors have been burned by developers who 
                  promised the world and delivered generic templates. Our free example lets you see exactly 
                  what you're getting before spending a penny.
                </p>

                <h3>Better Results for Everyone</h3>
                <p>
                  When you can see and approve the design before we start, it leads to better communication, 
                  fewer revisions, and a final website that truly represents your business and attracts customers.
                </p>

                <div className="success-stats">
                  <div className="stat">
                    <h4>94%</h4>
                    <p>of contractors who request a free example proceed with the full project</p>
                  </div>
                  <div className="stat">
                    <h4>99%</h4>
                    <p>client satisfaction rate with final websites</p>
                  </div>
                </div>
              </div>

              <div className="why-free-image">
                <div className="placeholder-image">Testimonial Photo or Before/After</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>Is this really completely free?</h3>
                <p>Yes! There are no hidden costs, no setup fees, and no obligations. We create a custom sample page for your business at no charge.</p>
              </div>

              <div className="faq-item">
                <h3>How detailed is the example?</h3>
                <p>It's a fully designed homepage with your business information, services, contact details, and industry-specific content. You'll see exactly how your website will look.</p>
              </div>

              <div className="faq-item">
                <h3>What if I don't like the design?</h3>
                <p>No problem! You're under no obligation to proceed. We can discuss changes, or you can simply walk away - no hard feelings.</p>
              </div>

              <div className="faq-item">
                <h3>How long does it take to get my example?</h3>
                <p>Most examples are completed within 24-48 hours. Rush requests can often be done the same day.</p>
              </div>

              <div className="faq-item">
                <h3>Will you use my business information?</h3>
                <p>We only use the information you provide for creating your example. We never share your details with anyone else.</p>
              </div>

              <div className="faq-item">
                <h3>What happens after I see the example?</h3>
                <p>If you love it, we'll provide a quote for the full website. If not, no worries - you keep the example design concept and we part as friends.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ backgroundColor: '#000', color: 'white' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title" style={{ color: 'white' }}>Ready to See Your Website?</h2>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
                Join hundreds of contractors who've seen their business potential with our free examples.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="#example-form" className="btn btn-primary" style={{ backgroundColor: 'white', color: '#000' }}>
                Get Your Free Example Now
              </a>
              <a href="/contact" className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
                Talk to Us First
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Additional styles for free example page
const exampleStyles = `
.hero-benefits {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

.benefit-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 15px 20px;
  border-radius: 8px;
  font-weight: 500;
}

.how-it-works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.step-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.step-card:hover {
  transform: translateY(-5px);
}

.step-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.step-card h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
}

.included-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.included-item {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.included-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.included-item h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
}

.example-form-layout {
  max-width: 800px;
  margin: 0 auto;
}

.form-header {
  text-align: center;
  margin-bottom: 50px;
}

.form-header h2 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 15px;
}

.contact-form {
  /* Uses existing contact form styling */
}

.form-section {
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e9ecef;
}

.form-section:last-of-type {
  border-bottom: none;
}

.form-section h3 {
  color: var(--primary-color);
  margin-bottom: 25px;
  font-size: 1.5rem;
}

.form-guarantee {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 30px;
  border-radius: 12px;
  margin-top: 30px;
  border: 2px solid var(--primary-color);
}

.form-guarantee h4 {
  color: var(--primary-color);
  margin-bottom: 15px;
}

.form-guarantee ul {
  list-style: none;
  padding: 0;
}

.form-guarantee li {
  padding: 5px 0;
  color: var(--text-secondary);
}

.why-free-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: center;
}

.why-free-text h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
  margin-top: 30px;
}

.why-free-text h3:first-child {
  margin-top: 0;
}

.why-free-text p {
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.success-stats {
  display: flex;
  gap: 40px;
  margin-top: 30px;
}

.success-stats .stat {
  text-align: center;
}

.success-stats h4 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.success-stats p {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.why-free-image {
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
}

@media (max-width: 768px) {
  .hero-benefits {
    grid-template-columns: 1fr;
  }
  
  .how-it-works-grid {
    grid-template-columns: 1fr;
  }
  
  .included-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-form {
    /* Uses responsive contact form styling */
  }
  
  .why-free-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .success-stats {
    flex-direction: column;
    gap: 20px;
  }
}
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = exampleStyles;
  document.head.appendChild(styleSheet);
}