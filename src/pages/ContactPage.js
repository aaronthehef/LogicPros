import React, { useState } from 'react';
import '../responsive-style.css';
import { Logo } from '../components/Logo';
import { Navigation } from '../components/Navigation';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    trade: '',
    projectType: '',
    timeline: '',
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
    
    console.log('Starting contact form submission...');

    try {
      // Submit form via serverless API route
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
          projectType: '', timeline: '', message: '', hearAbout: ''
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
          <Navigation />
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Let's Grow Your Business Together</h1>
              <p className="hero-subtitle">
                Ready to enhance your cybersecurity, streamline operations, or attract more customers? 
                Get your free consultation today.
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
                  Tell us about your business and goals. Whether you need cybersecurity, AI automation, website development, or IT support - our team will provide a customized solution.
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
                      <label htmlFor="trade">Your Industry</label>
                      <select
                        id="trade"
                        name="trade"
                        value={formData.trade}
                        onChange={handleChange}
                      >
                        <option value="">Select your industry</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="legal">Legal Services</option>
                        <option value="accounting">Accounting/Finance</option>
                        <option value="consulting">Consulting</option>
                        <option value="retail">Retail</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="construction">Construction</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="technology">Technology</option>
                        <option value="education">Education</option>
                        <option value="nonprofit">Non-Profit</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="projectType">Service Interest</label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                      >
                        <option value="">Select service type</option>
                        <option value="cybersecurity-audit">Cybersecurity Audit</option>
                        <option value="password-management">Password Management</option>
                        <option value="mfa-setup">Multi-Factor Authentication</option>
                        <option value="it-support">Managed IT Services</option>
                        <option value="ai-automation">AI Automation</option>
                        <option value="new-website">New Website</option>
                        <option value="website-redesign">Website Redesign</option>
                        <option value="ecommerce">E-Commerce Store</option>
                        <option value="seo">SEO & Marketing</option>
                        <option value="consultation">General Consultation</option>
                        <option value="not-sure">Not Sure - Need Help Deciding</option>
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
                  </div>


                  <div className="form-group">
                    <label htmlFor="message">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      placeholder="Tell us about your business, current challenges, goals, and any specific requirements. Whether it's cybersecurity, IT support, automation, or web development - we're here to help."
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
                    <p><a href="tel:+15064782949">(506) 478-2949</a></p>
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
                  <p>Call our office directly for rush projects and immediate consultations.</p>
                  <a href="tel:+15064782949" className="btn btn-outline">Call Our Team</a>
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
                <h3>How do I get started?</h3>
                <p>Contact us for a free consultation where we'll discuss your business needs, security concerns, and growth goals. We'll create a custom solution whether you need cybersecurity, IT support, automation, or web development.</p>
              </div>
              
              <div className="faq-item">
                <h3>How long does it take?</h3>
                <p>Timelines vary by service: security audits (1-2 weeks), websites (2-4 weeks), IT setup (1-3 weeks). We'll provide an exact timeline during your consultation based on your specific needs.</p>
              </div>
              
              <div className="faq-item">
                <h3>Do you provide ongoing support?</h3>
                <p>Yes! We offer managed IT services, security monitoring, website maintenance, and ongoing support packages. We're here to help your business stay secure and grow long-term.</p>
              </div>
              
              <div className="faq-item">
                <h3>What cybersecurity services do you offer?</h3>
                <p>We provide security audits, password management, multi-factor authentication, endpoint protection, security training, and incident response planning to keep your business secure.</p>
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
                <a href="tel:+15064782949" className="btn btn-outline btn-large">Call Now</a>
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