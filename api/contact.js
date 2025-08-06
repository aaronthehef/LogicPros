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
    
    // Log the submission (for debugging)
    console.log('Contact form submission:', formData);
    
    // Create transporter for Zoho Mail
    const transporter = nodemailer.createTransporter({
      host: 'smtppro.zoho.ca',
      port: 587,
      secure: false,
      auth: {
        user: process.env.ZOHO_EMAIL || 'aaron@logicpros.ca',
        pass: process.env.ZOHO_PASSWORD || process.env.EMAIL_PASSWORD
      }
    });

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
    `;

    // Send notification email to LogicPros
    await transporter.sendMail({
      from: 'aaron@logicpros.ca',
      to: 'aaron@logicpros.ca',
      subject: `New Contact Form Submission from ${formData.name}`,
      html: emailContent
    });

    // Send auto-reply to customer
    await transporter.sendMail({
      from: 'aaron@logicpros.ca',
      to: formData.email,
      subject: 'Thank you for contacting LogicPros',
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Hi ${formData.name},</p>
        <p>Thank you for reaching out to LogicPros. We've received your message and will respond within 24 hours.</p>
        <p>Our team is excited to help you with your project!</p>
        <p>Best regards,<br>Aaron & The LogicPros Team</p>
        <p><a href="mailto:aaron@logicpros.ca">aaron@logicpros.ca</a></p>
      `
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Contact form submitted successfully' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      error: 'Failed to submit contact form',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}