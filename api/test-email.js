import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Testing email with credentials:', {
      user: process.env.ZOHO_EMAIL,
      hasPassword: !!process.env.ZOHO_PASSWORD,
      passwordLength: process.env.ZOHO_PASSWORD ? process.env.ZOHO_PASSWORD.length : 0
    });

    const transporter = nodemailer.createTransporter({
      host: 'smtppro.zoho.ca',
      port: 587,
      secure: false,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD
      },
      debug: true,
      logger: true
    });

    // Test the connection
    await transporter.verify();
    console.log('SMTP connection verified successfully');

    // Send test email
    const result = await transporter.sendMail({
      from: process.env.ZOHO_EMAIL,
      to: process.env.ZOHO_EMAIL,
      subject: 'Test Email from Vercel',
      text: 'This is a test email to verify the email setup is working.',
      html: '<h2>Test Email</h2><p>This is a test email to verify the email setup is working.</p>'
    });

    console.log('Email sent successfully:', result.messageId);

    return res.status(200).json({ 
      success: true, 
      message: 'Test email sent successfully!',
      messageId: result.messageId
    });

  } catch (error) {
    console.error('Email test error:', error);
    return res.status(500).json({ 
      error: 'Email test failed',
      details: error.message,
      code: error.code
    });
  }
}