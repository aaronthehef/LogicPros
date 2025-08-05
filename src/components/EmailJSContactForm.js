import React, { useState } from 'react';
// You'll need to install EmailJS: npm install emailjs-com
// import emailjs from 'emailjs-com';

export const EmailJSContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    trade: '',
    projectType: '',
    message: ''
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
      // EmailJS configuration
      const serviceID = 'YOUR_SERVICE_ID'; // Get from EmailJS dashboard
      const templateID = 'YOUR_TEMPLATE_ID'; // Get from EmailJS dashboard  
      const userID = 'YOUR_PUBLIC_KEY'; // Get from EmailJS dashboard

      const templateParams = {
        to_email: 'aaron@logicpros.ca',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        trade: formData.trade,
        project_type: formData.projectType,
        message: formData.message,
        reply_to: formData.email
      };

      // Uncomment when you have EmailJS set up:
      // await emailjs.send(serviceID, templateID, templateParams, userID);
      
      // For now, just simulate success:
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        name: '', email: '', phone: '', company: '', 
        trade: '', projectType: '', message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Get Your Free Consultation</h2>
      <p className="form-subtitle">
        Tell us about your business and project goals. Emails sent directly to aaron@logicpros.ca
      </p>

      {submitStatus === 'success' && (
        <div className="alert alert-success">
          <h3>Thank You!</h3>
          <p>Your message has been sent to aaron@logicpros.ca. We'll respond within 24 hours!</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="alert alert-error">
          <h3>Oops! Something went wrong.</h3>
          <p>Please try again or email us directly at aaron@logicpros.ca</p>
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
              <option value="not-sure">Not Sure - Need Consultation</option>
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
            placeholder="Tell us about your business, goals, and project requirements."
            required
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="btn btn-primary btn-large"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message to Aaron'}
        </button>

        <p className="form-note">
          * Required fields. Message sent directly to aaron@logicpros.ca
        </p>
      </form>
    </div>
  );
};