const nodemailer = require('nodemailer');
require('dotenv').config();

// Email transporter configuration for Zoho Mail with additional options
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  authMethod: 'PLAIN',
  debug: true,
  logger: true
});

async function sendTestEmail() {
  try {
    console.log('Testing email configuration...');
    console.log('Email User:', process.env.EMAIL_USER);
    console.log('Email Pass length:', process.env.EMAIL_PASS.length);
    console.log('SMTP Host: smtp.zoho.com:465 (secure)');
    
    const testEmail = {
      from: process.env.EMAIL_USER,
      to: 'aaron@logicpros.ca',
      subject: '🧪 LogicPros Contact Form Test - Configuration Working!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">
            ✅ Email Configuration Test Successful!
          </h2>
          
          <div style="background: #d4edda; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745;">
            <h3 style="color: #155724; margin-top: 0;">🎉 Great News!</h3>
            <p style="color: #155724; margin: 0;">
              Your LogicPros contact form is now properly configured and ready to receive real customer inquiries!
            </p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #000; margin-top: 0;">📧 Email Configuration Details</h3>
            <p><strong>From:</strong> ${process.env.EMAIL_USER}</p>
            <p><strong>SMTP Server:</strong> smtp.zoho.com:587</p>
            <p><strong>Authentication:</strong> ✅ Working</p>
            <p><strong>Test Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
            <h3 style="color: #856404; margin-top: 0;">🚀 Next Steps</h3>
            <ul style="color: #856404;">
              <li>Your contact form at <strong>localhost:3000/#/contact</strong> is ready</li>
              <li>Customer emails will arrive at <strong>aaron@logicpros.ca</strong></li>
              <li>Auto-replies will be sent to customers</li>
              <li>All form data will be professionally formatted</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 30px 0; padding: 20px; background: #000; color: white; border-radius: 8px;">
            <p style="margin: 0;"><strong>🎯 Contact Form Ready!</strong></p>
            <p style="margin: 10px 0; font-size: 0.9rem;">
              This test confirms your LogicPros website can successfully send emails.
            </p>
          </div>
          
          <p style="color: #666; font-size: 12px; text-align: center;">
            This is a test email from your LogicPros contact form configuration.<br>
            Generated at ${new Date().toLocaleString()}
          </p>
        </div>
      `
    };

    const result = await transporter.sendMail(testEmail);
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', result.messageId);
    console.log('📧 Check aaron@logicpros.ca for the test email');
    
  } catch (error) {
    console.error('❌ Email test failed:');
    console.error('Error details:', error.message);
    console.error('Error code:', error.code);
    console.error('Full error:', error);
    
    if (error.message.includes('535') || error.message.includes('Authentication Failed')) {
      console.error('🔐 Authentication Issue:');
      console.error('   - Zoho might require an App Password instead of regular password');
      console.error('   - Check if 2-Factor Authentication is enabled');
      console.error('   - Try: Zoho Mail Settings → Security → App Passwords');
    } else if (error.code === 'ECONNECTION') {
      console.error('🌐 Connection failed - check internet/SMTP settings');
    }
  }
}

// Run the test
sendTestEmail();