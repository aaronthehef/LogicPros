import React, { useState } from 'react';
import '../responsive-style.css';
import { Logo } from '../components/Logo';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    trade: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: '',
    hearAbout: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Use Vercel API route as proxy to Oracle backend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '', email: '', phone: '', company: '', trade: '',
          projectType: '', timeline: '', budget: '', message: '', hearAbout: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="sticky-header">
        <div className="header-content">
          <div className="logo">
            <Logo />
          </div>
          <nav className="nav-menu">
            <div className="nav-links">
              <a href="/services" className="nav-link">Services</a>
              <a href="/portfolio" className="nav-link">Portfolio</a>
              <a href="/about" className="nav-link">About</a>
              <a href="/contact" className="nav-link">Contact</a>
            </div>
            <a href="/free-example" className="btn btn-primary">Free Example</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Let's Build Your Perfect Website</h1>
              <p className="hero-subtitle">
                Ready to attract more customers and grow your contracting business? 
                Get your free consultation and project quote today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section">
          <div className="container">
            <div className="contact-layout">
              {/* Contact Form */}
              <div className="contact-form-container">
                <h2>Get Your Free Consultation</h2>
                <p className="form-subtitle">
                  Tell us about your business and project goals. Our team will review your inquiry and provide a customized solution.
                </p>

                {submitStatus === 'success' && (
                  <div className="alert alert-success">
                    <h3>Thank You!</h3>
                    <p>Your message has been received by our team. We'll respond within 24 hours with next steps!</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="alert alert-error">
                    <h3>Oops! Something went wrong.</h3>
                    <p>Please try again or contact our office directly at aaron@logicpros.ca</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
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
                        placeholder="your@email.com"
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
                      <label htmlFor="company">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="trade">Your Trade/Industry</label>
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
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="projectType">Project Type</label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                      >
                        <option value="">Select project type</option>
                        <option value="new-website">New Website</option>
                        <option value="website-redesign">Website Redesign</option>
                        <option value="ecommerce">E-Commerce Store</option>
                        <option value="project-portal">Project Management Portal</option>
                        <option value="maintenance">Website Maintenance</option>
                        <option value="seo">SEO & Marketing</option>
                        <option value="not-sure">Not Sure - Need Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="timeline">Desired Timeline</label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP (Rush Job)</option>
                        <option value="1-month">Within 1 Month</option>
                        <option value="2-3-months">2-3 Months</option>
                        <option value="3-6-months">3-6 Months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="budget">Budget Range</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                      >
                        <option value="">Select budget range</option>
                        <option value="under-2500">Under $2,500</option>
                        <option value="2500-5000">$2,500 - $5,000</option>
                        <option value="5000-10000">$5,000 - $10,000</option>
                        <option value="10000-plus">$10,000+</option>
                        <option value="discuss">Let's Discuss</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="hearAbout">How did you hear about us?</label>
                    <select
                      id="hearAbout"
                      name="hearAbout"
                      value={formData.hearAbout}
                      onChange={handleChange}
                    >
                      <option value="">Select source</option>
                      <option value="google">Google Search</option>
                      <option value="referral">Referral from Friend/Client</option>
                      <option value="social-media">Social Media</option>
                      <option value="industry-event">Industry Event</option>
                      <option value="existing-client">I'm an Existing Client</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      placeholder="Tell us about your business, current website (if any), goals, target customers, and any specific requirements or questions you have."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-large"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message to LogicPros'}
                  </button>

                  <p className="form-note">
                    * Required fields. Your message will be reviewed by our team and we typically respond within 2-4 hours during business hours.
                  </p>
                </form>
              </div>

              {/* Contact Info Sidebar */}
              <div className="contact-info">
                <h3>Contact Our Team</h3>
                <div className="contact-methods">
                  <div className="contact-item">
                    <h4>📧 Business Email</h4>
                    <p><a href="mailto:aaron@logicpros.ca">aaron@logicpros.ca</a></p>
                  </div>
                  
                  <div className="contact-item">
                    <h4>📱 Office Phone</h4>
                    <p><a href="tel:+1-555-LOGIC-1">(555) LOGIC-1</a></p>
                    <small>Mon-Fri 8am-6pm EST</small>
                  </div>
                  
                  <div className="contact-item">
                    <h4>⚡ Response Time</h4>
                    <p>2-4 hours during business hours</p>
                    <small>Same-day for urgent projects</small>
                  </div>
                </div>

                <div className="contact-cta">
                  <h4>🎯 Need It Done Fast?</h4>
                  <p>Call our office directly for rush projects and immediate quotes.</p>
                  <a href="tel:+1-555-LOGIC-1" className="btn btn-outline">Call Our Team</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>How much does a website cost?</h3>
                <p>Professional contractor websites start at $2,500. We offer packages from basic business sites to advanced project management portals. Every quote is customized to your specific needs and budget.</p>
              </div>
              
              <div className="faq-item">
                <h3>How long does it take?</h3>
                <p>Most websites are completed in 2-4 weeks. Rush jobs can be done in 5-7 days for an additional fee. We'll give you an exact timeline during your consultation.</p>
              </div>
              
              <div className="faq-item">
                <h3>Do you handle SEO?</h3>
                <p>Yes! Every website includes basic SEO setup. We also offer advanced SEO packages to help you rank higher in local searches and attract more customers.</p>
              </div>
              
              <div className="faq-item">
                <h3>What's included in maintenance?</h3>
                <p>Security updates, content changes, performance monitoring, and technical support. Plans start at $99/month and include hosting.</p>
              </div>
              
              <div className="faq-item">
                <h3>Can I update the site myself?</h3>
                <p>Absolutely! We build user-friendly sites and provide training. You can update content, add photos, and manage your site easily.</p>
              </div>
              
              <div className="faq-item">
                <h3>Do you offer free consultations?</h3>
                <p>Yes! Every project starts with a free consultation where we discuss your goals, analyze your competition, and create a custom strategy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Grow Your Business?</h2>
              <p>Join 200+ contractors who've increased their leads by 350% with LogicPros websites.</p>
              <div className="cta-buttons">
                <a href="/free-example" className="btn btn-primary btn-large">Get Free Example</a>
                <a href="tel:+1-555-LOGIC-1" className="btn btn-outline btn-large">Call Now</a>
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
              <p>Professional websites that win contracts</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                <a href="/services">Website Design</a>
                <a href="/services">E-Commerce</a>
                <a href="/services">SEO & Marketing</a>
                <a href="/services">Maintenance</a>
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
                <p>hello@logicpros.ca</p>
                <p>(555) LOGIC-1</p>
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