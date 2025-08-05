const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://your-domain.com']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email transporter configuration for Zoho Mail
const transporter = nodemailer.createTransport({
  host: 'smtp.zohocloud.ca',  // Canadian datacenter for logicpros.ca
  port: 465,
  secure: true, // SSL for port 465
  auth: {
    user: process.env.EMAIL_USER, // aaron@logicpros.ca
    pass: process.env.EMAIL_PASS  // App password
  }
});

// Verify SMTP connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.log('❌ SMTP Connection Error:', error.message);
    console.log('Please check:');
    console.log('1. App password is correctly generated');
    console.log('2. Two-factor authentication is enabled');
    console.log('3. Domain is verified in Zoho admin console');
  } else {
    console.log('✅ SMTP Server ready to send emails');
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      trade,
      projectType,
      timeline,
      budget,
      message,
      hearAbout
    } = req.body;

    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and phone are required'
      });
    }

    // Email content
    const emailContent = `
      New Contact Form Submission - LogicPros
      
      Contact Information:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Company: ${company || 'Not provided'}
      
      Project Details:
      Trade/Industry: ${trade || 'Not specified'}
      Project Type: ${projectType || 'Not specified'}
      Timeline: ${timeline || 'Not specified'}
      Budget: ${budget || 'Not specified'}
      How they heard about us: ${hearAbout || 'Not specified'}
      
      Message:
      ${message || 'No additional message provided'}
      
      ---
      This email was sent from the LogicPros contact form.
      Reply directly to this email to respond to the client.
    `;

    // Email to Aaron
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'aaron@logicpros.ca',
      replyTo: email,
      subject: `New Lead: ${name} - ${trade || 'General'} Contractor`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #000 0%, #333 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; font-weight: bold;">🎉 New Lead Alert!</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">LogicPros Contact Form Submission</p>
          </div>
          
          <!-- Contact Information -->
          <div style="padding: 25px; background: #f8f9fa; border-left: 4px solid #007bff;">
            <h3 style="color: #000; margin: 0 0 15px 0; font-size: 18px;">👤 Contact Information</h3>
            <table style="width: 100%; font-size: 15px;">
              <tr><td style="padding: 5px 0; width: 30%;"><strong>Name:</strong></td><td style="padding: 5px 0;">${name}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Email:</strong></td><td style="padding: 5px 0;"><a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></td></tr>
              <tr><td style="padding: 5px 0;"><strong>Phone:</strong></td><td style="padding: 5px 0;"><a href="tel:${phone}" style="color: #28a745; text-decoration: none;">${phone}</a></td></tr>
              <tr><td style="padding: 5px 0;"><strong>Company:</strong></td><td style="padding: 5px 0;">${company || 'Not provided'}</td></tr>
            </table>
          </div>
          
          <!-- Project Details -->
          <div style="padding: 25px; background: #ffffff; border-left: 4px solid #28a745;">
            <h3 style="color: #000; margin: 0 0 15px 0; font-size: 18px;">🚀 Project Details</h3>
            <table style="width: 100%; font-size: 15px;">
              <tr><td style="padding: 5px 0; width: 30%;"><strong>Trade:</strong></td><td style="padding: 5px 0;">${trade || 'Not specified'}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Project Type:</strong></td><td style="padding: 5px 0;">${projectType || 'Not specified'}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Timeline:</strong></td><td style="padding: 5px 0;">${timeline || 'Not specified'}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Budget:</strong></td><td style="padding: 5px 0;">${budget || 'Not specified'}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Heard About Us:</strong></td><td style="padding: 5px 0;">${hearAbout || 'Not specified'}</td></tr>
            </table>
          </div>
          
          <!-- Message -->
          <div style="padding: 25px; background: #fff3cd; border-left: 4px solid #ffc107;">
            <h3 style="color: #856404; margin: 0 0 15px 0; font-size: 18px;">💬 Client Message</h3>
            <div style="background: white; padding: 15px; border-radius: 8px; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message || 'No additional message provided'}</div>
          </div>
          
          <!-- Contact Actions -->
          <div style="padding: 25px; background: #e7f3ff; border-left: 4px solid #0066cc;">
            <h3 style="color: #0066cc; margin: 0 0 15px 0; font-size: 18px;">📞 Contact This Lead</h3>
            <div style="background: white; padding: 20px; border-radius: 8px;">
              <p style="margin: 5px 0; font-size: 16px;"><strong>📧 Email:</strong> ${email}</p>
              <p style="margin: 5px 0; font-size: 16px;"><strong>📱 Phone:</strong> ${phone}</p>
              <p style="margin: 15px 0 5px 0; color: #0066cc; font-weight: bold;">✅ Quick Reply:</p>
              <p style="margin: 5px 0; color: #666;">Simply hit <strong>REPLY</strong> to respond directly to this client!</p>
            </div>
            <p style="margin: 15px 0 0 0; color: #0066cc; font-size: 14px;">
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
              Received: ${new Date().toLocaleString()} | LogicPros Web Development
            </p>
          </div>
        </div>
      `
    };

    // Auto-reply to client
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting LogicPros - We\'ll be in touch soon!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000;">Thank You, ${name}!</h2>
          
          <p>We received your inquiry about ${projectType || 'web development services'} and will respond within 24 hours.</p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>What happens next?</h3>
            <ul>
              <li>Aaron will personally review your inquiry</li>
              <li>We'll respond with initial questions and next steps</li>
              <li>If it's a good fit, we'll schedule a consultation call</li>
              <li>We can often provide a free example of your website</li>
            </ul>
          </div>
          
          <p><strong>Need immediate assistance?</strong><br>
          Call us directly at <a href="tel:+1-506-478-2949">(506) 478-2949</a></p>
          
          <p>Best regards,<br>
          <strong>Aaron Hefling</strong><br>
          Founder, LogicPros<br>
          <a href="mailto:aaron@logicpros.ca">aaron@logicpros.ca</a></p>
          
          <hr style="margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            LogicPros - Professional Web Development for Contractors<br>
            This is an automated confirmation. Please don't reply to this email.
          </p>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    res.json({
      success: true,
      message: 'Message sent successfully!'
    });

  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again.'
    });
  }
});

// Free example form endpoint
app.post('/api/free-example', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      trade,
      targetArea,
      mainServices,
      preferredStyle,
      website,
      competitors,
      timeline
    } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and phone are required'
      });
    }

    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">
          🎨 NEW FREE EXAMPLE REQUEST - LogicPros
        </h2>
        
        <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
          <h3 style="color: #856404; margin-top: 0;">⚡ Priority: Free Example Request</h3>
          <p style="color: #856404; margin: 0;"><strong>Timeline:</strong> Deliver within 48 hours</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #000; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        </div>
        
        <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #000; margin-top: 0;">Business Details</h3>
          <p><strong>Trade/Industry:</strong> ${trade || 'Not specified'}</p>
          <p><strong>Service Area:</strong> ${targetArea || 'Not specified'}</p>
          <p><strong>Main Services:</strong></p>
          <p style="white-space: pre-wrap; background: #f8f9fa; padding: 10px; border-radius: 5px;">${mainServices || 'Not provided'}</p>
        </div>
        
        <div style="background: #e7f3ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0066cc; margin-top: 0;">Design Preferences</h3>
          <p><strong>Preferred Style:</strong> ${preferredStyle || 'Not specified'}</p>
          <p><strong>Current Website:</strong> ${website || 'None'}</p>
          <p><strong>Competitor Analysis:</strong></p>
          <p style="white-space: pre-wrap; background: white; padding: 10px; border-radius: 5px;">${competitors || 'Not provided'}</p>
          <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
        </div>
        
        <div style="text-align: center; margin: 30px 0; padding: 20px; background: #000; color: white; border-radius: 8px;">
          <p style="margin: 0;"><strong>🎯 Action Required: Create Free Example</strong></p>
          <p style="margin: 10px 0;">
            <a href="mailto:${email}?subject=Your Free LogicPros Website Example" 
               style="color: white; background: #666; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 5px;">
              Email Client
            </a>
            <a href="tel:${phone}" 
               style="color: white; background: #666; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 5px;">
              Call Client
            </a>
          </p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'aaron@logicpros.ca',
      replyTo: email,
      subject: `🎨 FREE EXAMPLE REQUEST: ${name} - ${trade || 'Contractor'}`,
      html: emailContent
    });

    // Auto-reply for free example
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your Free LogicPros Website Example is Being Created!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000;">Hi ${name}! 🎨</h2>
          
          <p>Excellent! We're excited to create your free website example.</p>
          
          <div style="background: #d4edda; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745;">
            <h3 style="color: #155724;">What happens next:</h3>
            <ul style="color: #155724;">
              <li><strong>Within 48 hours:</strong> You'll receive a link to view your custom website example</li>
              <li><strong>No obligations:</strong> Review it and decide if you want to proceed</li>
              <li><strong>Personal touch:</strong> Aaron will personally review your requirements</li>
              <li><strong>Follow up:</strong> We'll check in to see what you think</li>
            </ul>
          </div>
          
          <p><strong>Questions in the meantime?</strong><br>
          Reply to this email or call <a href="tel:+1-555-LOGIC-1">(555) LOGIC-1</a></p>
          
          <p>Looking forward to showing you what's possible!</p>
          
          <p>Best regards,<br>
          <strong>Aaron Hefling</strong><br>
          Founder, LogicPros<br>
          <a href="mailto:aaron@logicpros.ca">aaron@logicpros.ca</a></p>
        </div>
      `
    });

    res.json({
      success: true,
      message: 'Free example request submitted successfully!'
    });

  } catch (error) {
    console.error('Free example email error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit request. Please try again.'
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'LogicPros contact API is running' });
});

app.listen(PORT, () => {
  console.log(`LogicPros contact server running on port ${PORT}`);
});