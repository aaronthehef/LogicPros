// Final Contact Form Test with Canadian Zoho SMTP
const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('🎉 Final Contact Form Test - Canadian Zoho SMTP');
console.log('='.repeat(60));

// Working Canadian Zoho configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.zohocloud.ca',  // Canadian datacenter
  port: 465,
  secure: true, // SSL for port 465
  auth: {
    user: process.env.EMAIL_USER, // aaron@logicpros.ca
    pass: process.env.EMAIL_PASS  // fe5FjkvsEY8T
  }
});

// Simulate a contact form submission
const formData = {
  name: 'John Smith',
  email: 'john.smith@example.com',
  phone: '(555) 123-4567',
  company: 'Smith Construction',
  trade: 'roofing',
  projectType: 'new-website',
  timeline: '1-month',
  budget: '5000-10000',
  message: 'I need a professional website for my roofing company. Looking to attract more storm damage leads and showcase our quality work.',
  hearAbout: 'google'
};

async function sendContactEmail() {
  try {
    console.log('📧 Sending contact form email...');
    
    // Email to Aaron (business notification)
    const businessEmail = {
      from: process.env.EMAIL_USER,
      to: 'aaron@logicpros.ca',
      replyTo: formData.email,
      subject: `New Lead: ${formData.name} - ${formData.trade || 'General'} Contractor`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">
            🎉 New Contact Form Submission - LogicPros
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #000; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${formData.phone}">${formData.phone}</a></p>
            <p><strong>Company:</strong> ${formData.company}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #000; margin-top: 0;">Project Details</h3>
            <p><strong>Trade:</strong> ${formData.trade}</p>
            <p><strong>Project Type:</strong> ${formData.projectType}</p>
            <p><strong>Timeline:</strong> ${formData.timeline}</p>
            <p><strong>Budget:</strong> ${formData.budget}</p>
            <p><strong>How they heard:</strong> ${formData.hearAbout}</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #000; margin-top: 0;">Message</h3>
            <p>${formData.message}</p>
          </div>
          
          <div style="text-align: center; margin: 30px 0; padding: 20px; background: #000; color: white; border-radius: 8px;">
            <p style="margin: 0;"><strong>Quick Actions:</strong></p>
            <p style="margin: 10px 0;">
              <a href="mailto:${formData.email}?subject=Re: Your LogicPros Inquiry" 
                 style="color: white; background: #666; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 5px;">
                Reply to Client
              </a>
              <a href="tel:${formData.phone}" 
                 style="color: white; background: #666; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 5px;">
                Call Client
              </a>
            </p>
          </div>
        </div>
      `
    };

    // Auto-reply to customer
    const customerReply = {
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: 'Thank you for contacting LogicPros - We\'ll be in touch soon!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000;">Thank You, ${formData.name}!</h2>
          
          <p>We received your inquiry about ${formData.projectType} and will respond within 24 hours.</p>
          
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
          Call us directly at <a href="tel:+1-555-LOGIC-1">(555) LOGIC-1</a></p>
          
          <p>Best regards,<br>
          <strong>Aaron Thompson</strong><br>
          Founder, LogicPros<br>
          <a href="mailto:aaron@logicpros.ca">aaron@logicpros.ca</a></p>
        </div>
      `
    };

    // Send both emails
    console.log('📨 Sending business notification...');
    const businessResult = await transporter.sendMail(businessEmail);
    console.log('✅ Business email sent! Message ID:', businessResult.messageId);

    console.log('📨 Sending customer auto-reply...');
    const customerResult = await transporter.sendMail(customerReply);
    console.log('✅ Customer reply sent! Message ID:', customerResult.messageId);

    console.log('\n🎉 SUCCESS! Contact form is working perfectly!');
    console.log('✅ Business notification sent to aaron@logicpros.ca');
    console.log('✅ Auto-reply sent to customer');
    console.log('\n💡 Your contact form is now ready for production!');

  } catch (error) {
    console.error('❌ Email sending failed:', error.message);
    console.error('Code:', error.code);
  }
}

// Run the test
sendContactEmail();