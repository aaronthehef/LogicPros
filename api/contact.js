module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formData = req.body;
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and phone are required'
      });
    }
    
    // Log the submission
    console.log('=== NEW CONTACT FORM SUBMISSION ===');
    console.log('Timestamp:', new Date().toISOString());
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Phone:', formData.phone);
    console.log('Company:', formData.company || 'Not provided');
    console.log('Trade/Industry:', formData.trade || 'Not provided');
    console.log('Project Type:', formData.projectType || 'Not provided');
    console.log('Timeline:', formData.timeline || 'Not provided');
    console.log('How they heard about us:', formData.hearAbout || 'Not provided');
    console.log('Message:', formData.message || 'No message provided');
    console.log('Sending emails directly via Zoho SMTP...');

    // Function to convert projectType to friendly description
    const getFriendlyServiceName = (projectType) => {
      const serviceMap = {
        'cybersecurity-audit': 'a cybersecurity audit',
        'password-management': 'password management solutions',
        'mfa-setup': 'multi-factor authentication setup',
        'it-support': 'managed IT services',
        'ai-automation': 'AI automation solutions',
        'new-website': 'a new website',
        'website-redesign': 'website redesign services',
        'ecommerce': 'e-commerce development',
        'seo': 'SEO & digital marketing services',
        'consultation': 'a consultation',
        'not-sure': 'our services (we\'ll help you decide what\'s best)',
        'free-example-website': 'a free website example (we\'ll create a custom sample for your business within 48 hours)'
      };
      return serviceMap[projectType] || 'our services';
    };

    // Send emails directly using nodemailer
    const nodemailer = require('nodemailer');
    
    // Email transporter configuration for Zoho Mail
    const transporter = nodemailer.createTransport({
      host: 'smtp.zohocloud.ca',  // Canadian datacenter for logicpros.ca
      port: 465,
      secure: true, // SSL for port 465
      auth: {
        user: 'aaron@logicpros.ca', // Using the credentials from backend/.env
        pass: '7WycykRn9aNd'  // App password from backend/.env
      }
    });

    // Email to Aaron
    const mailOptions = {
      from: 'aaron@logicpros.ca',
      to: 'aaron@logicpros.ca',
      replyTo: formData.email,
      subject: `New Lead: ${formData.name} - ${formData.trade || 'General'} Contact`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1d7aaf 0%, #1e40af 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; font-weight: bold;">🎉 New Lead Alert!</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">LogicPros Contact Form Submission</p>
          </div>
          
          <!-- Contact Information -->
          <div style="padding: 25px; background: #f8f9fa; border-left: 4px solid #1d7aaf;">
            <h3 style="color: #1a1a2e; margin: 0 0 15px 0; font-size: 18px;">👤 Contact Information</h3>
            <table style="width: 100%; font-size: 15px;">
              <tr><td style="padding: 5px 0; width: 30%;"><strong>Name:</strong></td><td style="padding: 5px 0;">${formData.name}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Email:</strong></td><td style="padding: 5px 0;"><a href="mailto:${formData.email}" style="color: #1d7aaf; text-decoration: none;">${formData.email}</a></td></tr>
              <tr><td style="padding: 5px 0;"><strong>Phone:</strong></td><td style="padding: 5px 0;"><a href="tel:${formData.phone}" style="color: #28a745; text-decoration: none;">${formData.phone}</a></td></tr>
              <tr><td style="padding: 5px 0;"><strong>Company:</strong></td><td style="padding: 5px 0;">${formData.company || 'Not provided'}</td></tr>
            </table>
          </div>
          
          <!-- Project Details -->
          <div style="padding: 25px; background: #ffffff; border-left: 4px solid #28a745;">
            <h3 style="color: #1a1a2e; margin: 0 0 15px 0; font-size: 18px;">🚀 Project Details</h3>
            <table style="width: 100%; font-size: 15px;">
              <tr><td style="padding: 5px 0; width: 30%;"><strong>Industry:</strong></td><td style="padding: 5px 0;">${formData.trade || 'Not specified'}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Service Interest:</strong></td><td style="padding: 5px 0;">${formData.projectType || 'Not specified'}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Timeline:</strong></td><td style="padding: 5px 0;">${formData.timeline || 'Not specified'}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Heard About Us:</strong></td><td style="padding: 5px 0;">${formData.hearAbout || 'Not specified'}</td></tr>
            </table>
          </div>
          
          <!-- Message -->
          <div style="padding: 25px; background: #fff3cd; border-left: 4px solid #ffc107;">
            <h3 style="color: #856404; margin: 0 0 15px 0; font-size: 18px;">💬 Client Message</h3>
            <div style="background: white; padding: 15px; border-radius: 8px; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${formData.message || 'No additional message provided'}</div>
          </div>
          
          <!-- Contact Actions -->
          <div style="padding: 25px; background: #e7f3ff; border-left: 4px solid #1d7aaf;">
            <h3 style="color: #1d7aaf; margin: 0 0 15px 0; font-size: 18px;">📞 Contact This Lead</h3>
            <div style="background: white; padding: 20px; border-radius: 8px;">
              <p style="margin: 5px 0; font-size: 16px;"><strong>📧 Email:</strong> ${formData.email}</p>
              <p style="margin: 5px 0; font-size: 16px;"><strong>📱 Phone:</strong> ${formData.phone}</p>
              <p style="margin: 15px 0 5px 0; color: #1d7aaf; font-weight: bold;">✅ Quick Reply:</p>
              <p style="margin: 5px 0; color: #666;">Simply hit <strong>REPLY</strong> to respond directly to this client!</p>
            </div>
            <p style="margin: 15px 0 0 0; color: #1d7aaf; font-size: 14px;">
              💡 <strong>Pro Tip:</strong> Reply within 2 hours for best conversion rates!
            </p>
          </div>
          
          <!-- Footer -->
          <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 13px; margin: 0;">
              This email was sent from the <strong>LogicPros Contact Form</strong><br>
              Reply directly to this email to respond to the client.
            </p>
            <p style="color: #999; font-size: 11px; margin: 10px 0 0 0;">
              Received: ${new Date().toLocaleString()} | LogicPros Cybersecurity & Web Development
            </p>
          </div>
        </div>
      `
    };

    // Auto-reply to client
    const autoReplyOptions = {
      from: 'aaron@logicpros.ca',
      to: formData.email,
      subject: 'Thank you for contacting LogicPros - We\'ll be in touch soon!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a2e;">Thank You, ${formData.name}!</h2>
          
          <p>We received your inquiry about ${getFriendlyServiceName(formData.projectType)} and will respond within 24 hours.</p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>What happens next?</h3>
            <ul>
              <li>We will personally review your inquiry</li>
              <li>We'll respond with initial questions and next steps</li>
              <li>If it's a good fit, we'll schedule a consultation call</li>
              <li>We'll discuss solutions tailored to your business needs</li>
            </ul>
          </div>
          
          <p><strong>Need immediate assistance?</strong><br>
          Call us directly at <a href="tel:+15064782949">(506) 478-2949</a></p>
          
          <p>Best regards,<br>
          <strong>Aaron Hefling</strong><br>
          Founder, LogicPros<br>
          <a href="mailto:aaron@logicpros.ca">aaron@logicpros.ca</a></p>
          
          <hr style="margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            LogicPros - Cybersecurity, AI Solutions & Professional Web Development<br>
            This is an automated confirmation. Please don't reply to this email.
          </p>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);
    
    console.log('✅ Emails sent successfully!');

    return res.status(200).json({ 
      success: true, 
      message: 'Contact form submitted successfully! We will respond within 24 hours.' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Error stack:', error.stack);
    
    return res.status(500).json({ 
      error: 'Failed to submit contact form. Please try again or email us directly at aaron@logicpros.ca',
      details: error.message
    });
  }
}