import nodemailer from 'nodemailer';

export default async function handler(req, res) {
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
    console.log('Budget:', formData.budget || 'Not provided');
    console.log('How they heard about us:', formData.hearAbout || 'Not provided');
    console.log('Message:', formData.message || 'No message provided');
    
    // Check if we have credentials
    console.log('Email credentials check:', {
      hasZohoEmail: !!process.env.ZOHO_EMAIL,
      hasZohoPassword: !!process.env.ZOHO_PASSWORD,
      zohoEmail: process.env.ZOHO_EMAIL
    });

    if (!process.env.ZOHO_EMAIL || !process.env.ZOHO_PASSWORD) {
      console.error('Missing email credentials');
      return res.status(500).json({ 
        error: 'Email configuration missing',
        details: 'Missing ZOHO_EMAIL or ZOHO_PASSWORD environment variables'
      });
    }

    // Create transporter with multiple Zoho server options
    let transporter;
    
    try {
      // Try Canadian Zoho server first
      transporter = nodemailer.createTransporter({
        host: 'smtppro.zoho.ca',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.ZOHO_EMAIL,
          pass: process.env.ZOHO_PASSWORD
        },
        tls: {
          rejectUnauthorized: false
        }
      });
      
      // Test the connection
      await transporter.verify();
      console.log('Connected to Zoho Canada server successfully');
      
    } catch (canadaError) {
      console.log('Canada server failed, trying US server:', canadaError.message);
      
      // Try US Zoho server as fallback
      transporter = nodemailer.createTransporter({
        host: 'smtp.zoho.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.ZOHO_EMAIL,
          pass: process.env.ZOHO_PASSWORD
        },
        tls: {
          rejectUnauthorized: false
        }
      });
      
      await transporter.verify();
      console.log('Connected to Zoho US server successfully');
    }

    // Format the email content
    const emailContent = `
      <h2>New Contact Form Submission - LogicPros</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
      <p><strong>Trade/Industry:</strong> ${formData.trade || 'Not provided'}</p>
      <p><strong>Project Type:</strong> ${formData.projectType || 'Not provided'}</p>
      <p><strong>Timeline:</strong> ${formData.timeline || 'Not provided'}</p>
      <p><strong>Budget:</strong> ${formData.budget || 'Not provided'}</p>
      <p><strong>How they heard about us:</strong> ${formData.hearAbout || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message || 'No message provided'}</p>
      <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
    `;

    // Send notification email to LogicPros
    console.log('Sending notification email...');
    const notificationResult = await transporter.sendMail({
      from: process.env.ZOHO_EMAIL,
      to: process.env.ZOHO_EMAIL,
      subject: `New Contact Form Submission from ${formData.name}`,
      html: emailContent,
      replyTo: formData.email
    });
    console.log('Notification email sent:', notificationResult.messageId);

    // Send auto-reply to customer if they provided a valid email
    if (formData.email && formData.email.includes('@')) {
      console.log('Sending auto-reply to customer...');
      const replyResult = await transporter.sendMail({
        from: process.env.ZOHO_EMAIL,
        to: formData.email,
        subject: 'Thank you for contacting LogicPros',
        html: `
          <h2>Thank you for your inquiry!</h2>
          <p>Hi ${formData.name},</p>
          <p>Thank you for reaching out to LogicPros. We've received your message and will respond within 24 hours.</p>
          <p>Our team is excited to help you with your ${formData.projectType || 'project'}!</p>
          <p>Best regards,<br>Aaron & The LogicPros Team</p>
          <p>Email: <a href="mailto:aaron@logicpros.ca">aaron@logicpros.ca</a></p>
        `
      });
      console.log('Auto-reply sent:', replyResult.messageId);
    }

    console.log('==========================================');

    return res.status(200).json({ 
      success: true, 
      message: 'Contact form submitted successfully! Check your email for confirmation.' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    console.error('Error stack:', error.stack);
    
    return res.status(500).json({ 
      error: 'Failed to submit contact form. Please try again or email us directly at aaron@logicpros.ca',
      details: process.env.NODE_ENV === 'development' ? error.message : 'Email sending failed'
    });
  }
}