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
    console.log('=== NEW FREE EXAMPLE REQUEST ===');
    console.log('Timestamp:', new Date().toISOString());
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Phone:', formData.phone);
    console.log('Company:', formData.company || 'Not provided');
    console.log('Trade:', formData.trade || 'Not provided');
    console.log('Target Area:', formData.targetArea || 'Not provided');
    console.log('Timeline:', formData.timeline || 'Not provided');
    console.log('Preferred Style:', formData.preferredStyle || 'Not provided');
    console.log('Main Services:', formData.mainServices || 'Not provided');
    console.log('Sending emails directly via Zoho SMTP...');

    // Send emails directly using nodemailer
    const nodemailer = require('nodemailer');
    
    // Email transporter configuration for Zoho Mail
    const transporter = nodemailer.createTransport({
      host: 'smtp.zohocloud.ca',  // Canadian datacenter for logicpros.ca
      port: 465,
      secure: true, // SSL for port 465
      auth: {
        user: 'aaron@logicpros.ca',
        pass: '7WycykRn9aNd'  // App password from backend/.env
      }
    });

    // Email to Aaron (business notification)
    const mailOptions = {
      from: 'aaron@logicpros.ca',
      to: 'aaron@logicpros.ca',
      replyTo: formData.email,
      subject: `🎨 FREE EXAMPLE REQUEST: ${formData.name} - ${formData.trade || 'General'} Business`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; font-weight: bold;">🎨 FREE EXAMPLE REQUEST</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">48 Hour Deadline - Priority Request</p>
          </div>
          
          <!-- Contact Information -->
          <div style="padding: 25px; background: #f8f9fa; border-left: 4px solid #ff6b35;">
            <h3 style="color: #1a1a2e; margin: 0 0 15px 0; font-size: 18px;">👤 Contact Information</h3>
            <table style="width: 100%; font-size: 15px;">
              <tr><td style="padding: 5px 0; width: 30%;"><strong>Name:</strong></td><td style="padding: 5px 0;">${formData.name}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Email:</strong></td><td style="padding: 5px 0;"><a href="mailto:${formData.email}" style="color: #ff6b35; text-decoration: none;">${formData.email}</a></td></tr>
              <tr><td style="padding: 5px 0;"><strong>Phone:</strong></td><td style="padding: 5px 0;"><a href="tel:${formData.phone}" style="color: #28a745; text-decoration: none;">${formData.phone}</a></td></tr>
              <tr><td style="padding: 5px 0;"><strong>Company:</strong></td><td style="padding: 5px 0;">${formData.company || 'Not provided'}</td></tr>
            </table>
          </div>
          
          <!-- Business Details -->
          <div style="padding: 25px; background: #ffffff; border-left: 4px solid #28a745;">
            <h3 style="color: #1a1a2e; margin: 0 0 15px 0; font-size: 18px;">💼 Business Details</h3>
            <table style="width: 100%; font-size: 15px;">
              <tr><td style="padding: 5px 0; width: 30%;"><strong>Trade:</strong></td><td style="padding: 5px 0;">${formData.trade || 'Not specified'}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Service Area:</strong></td><td style="padding: 5px 0;">${formData.targetArea || 'Not specified'}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Timeline:</strong></td><td style="padding: 5px 0;">${formData.timeline || 'Not specified'}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Preferred Style:</strong></td><td style="padding: 5px 0;">${formData.preferredStyle || 'Not specified'}</td></tr>
            </table>
          </div>
          
          <!-- Main Services -->
          <div style="padding: 25px; background: #e7f3ff; border-left: 4px solid #1d7aaf;">
            <h3 style="color: #1d7aaf; margin: 0 0 15px 0; font-size: 18px;">🚀 Main Services</h3>
            <div style="background: white; padding: 15px; border-radius: 8px; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${formData.mainServices || 'Not provided'}</div>
          </div>
          
          <!-- Online Presence -->
          <div style="padding: 25px; background: #fff3cd; border-left: 4px solid #ffc107;">
            <h3 style="color: #856404; margin: 0 0 15px 0; font-size: 18px;">🌐 Current Online Presence</h3>
            <table style="width: 100%; font-size: 15px;">
              <tr><td style="padding: 5px 0; width: 30%;"><strong>Website:</strong></td><td style="padding: 5px 0;">${formData.website || 'None'}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Facebook:</strong></td><td style="padding: 5px 0;">${formData.facebook || 'None'}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Instagram:</strong></td><td style="padding: 5px 0;">${formData.instagram || 'None'}</td></tr>
            </table>
          </div>
          
          <!-- Competitor Research -->
          ${formData.competitors ? `
          <div style="padding: 25px; background: #f0f8ff; border-left: 4px solid #0066cc;">
            <h3 style="color: #0066cc; margin: 0 0 15px 0; font-size: 18px;">🔍 Competitor Research</h3>
            <div style="background: white; padding: 15px; border-radius: 8px; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${formData.competitors}</div>
          </div>
          ` : ''}
          
          <!-- Action Required -->
          <div style="padding: 25px; background: #ff6b35; color: white; text-align: center;">
            <h3 style="color: white; margin: 0 0 15px 0; font-size: 20px;">⚡ ACTION REQUIRED</h3>
            <p style="margin: 0 0 20px 0; font-size: 16px; font-weight: bold;">Create FREE Example Website within 48 hours</p>
            <div style="background: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 8px;">
              <p style="margin: 5px 0; font-size: 16px;"><strong>📧 Reply to:</strong> ${formData.email}</p>
              <p style="margin: 5px 0; font-size: 16px;"><strong>📱 Call:</strong> ${formData.phone}</p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 13px; margin: 0;">
              This email was sent from the <strong>LogicPros Free Example Form</strong><br>
              Priority: 48-hour deadline for example creation
            </p>
            <p style="color: #999; font-size: 11px; margin: 10px 0 0 0;">
              Received: ${new Date().toLocaleString()} | LogicPros Free Example System
            </p>
          </div>
        </div>
      `
    };

    // Auto-reply to client
    const autoReplyOptions = {
      from: 'aaron@logicpros.ca',
      to: formData.email,
      subject: 'Your Free LogicPros Website Example is Being Created!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a2e;">Hi ${formData.name}!</h2>
          
          <p>Excellent! We're excited to create your free website example${formData.trade ? ` for your ${formData.trade} business` : ''}.</p>
          
          <div style="background: #d4edda; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745;">
            <h3 style="color: #155724; margin-top: 0;">What happens next:</h3>
            <ul style="color: #155724; margin: 0; padding-left: 20px;">
              <li><strong>Within 48 hours:</strong> You'll receive a link to view your custom website example</li>
              <li><strong>No obligations:</strong> Review it and decide if you want to proceed</li>
              <li><strong>Personal touch:</strong> We will personally review your requirements</li>
              <li><strong>Follow up:</strong> We'll check in to see what you think</li>
            </ul>
          </div>
          
          <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
            <h3 style="color: #856404; margin-top: 0;">What we're creating for you:</h3>
            <ul style="color: #856404; margin: 0; padding-left: 20px;">
              <li>Custom homepage design featuring your business</li>
              <li>${formData.mainServices ? 'Content highlighting your services: ' + formData.mainServices.substring(0, 100) + '...' : 'Professional service descriptions'}</li>
              <li>${formData.targetArea ? 'Optimized for customers in ' + formData.targetArea : 'Local area optimization'}</li>
              <li>${formData.preferredStyle ? 'Styled in your preferred ' + formData.preferredStyle + ' approach' : 'Professional modern design'}</li>
              <li>Mobile-responsive layout that works on all devices</li>
            </ul>
          </div>
          
          <p><strong>Questions in the meantime?</strong><br>
          Reply to this email or call <a href="tel:+15064782949" style="color: #1d7aaf; text-decoration: none;">(506) 478-2949</a></p>
          
          <p>Looking forward to showing you what's possible!</p>
          
          <p>Best regards,<br>
          <strong>Aaron Hefling</strong><br>
          Founder, LogicPros<br>
          <a href="mailto:aaron@logicpros.ca" style="color: #1d7aaf; text-decoration: none;">aaron@logicpros.ca</a></p>
          
          <hr style="margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            LogicPros - Cybersecurity, AI Solutions & Professional Web Development<br>
            This is an automated confirmation for your free example request.
          </p>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);
    
    console.log('✅ Free example emails sent successfully!');

    return res.status(200).json({ 
      success: true, 
      message: 'Free example request submitted successfully! We will create your custom example and send it to you within 48 hours.' 
    });

  } catch (error) {
    console.error('Free example form error:', error);
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Error stack:', error.stack);
    
    return res.status(500).json({ 
      error: 'Failed to submit free example request. Please try again or email us directly at aaron@logicpros.ca',
      details: error.message
    });
  }
}