import React, { useState } from 'react';

export const NetlifyContactForm = () => {
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
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
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
    <div className="contact-form-container">
      <h2>Get Your Free Consultation</h2>
      <p className="form-subtitle">
        Tell us about your business and project goals. All information is confidential.
      </p>

      {submitStatus === 'success' && (
        <div className="alert alert-success">
          <h3>Thank You!</h3>
          <p>Your message has been sent successfully. We'll respond within 24 hours to aaron@logicpros.ca</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="alert alert-error">
          <h3>Oops! Something went wrong.</h3>
          <p>Please try again or email us directly at aaron@logicpros.ca</p>
        </div>
      )}

      <form 
        name="contact" 
        method="POST" 
        data-netlify="true" 
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit} 
        className="contact-form"
      >
        {/* Hidden fields for Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

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
          {isSubmitting ? 'Sending...' : 'Get My Free Consultation'}
        </button>

        <p className="form-note">
          * Required fields. Emails sent directly to aaron@logicpros.ca. We typically respond within 2-4 hours during business hours.
        </p>
      </form>
    </div>
  );
};

// Add alert styles
const alertStyles = `
.alert {
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  border-left: 4px solid;
}

.alert-success {
  background-color: #d4edda;
  border-color: #28a745;
  color: #155724;
}

.alert-error {
  background-color: #f8d7da;
  border-color: #dc3545;
  color: #721c24;
}

.alert h3 {
  margin-bottom: 10px;
  font-size: 1.2rem;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = alertStyles;
  document.head.appendChild(styleSheet);
}