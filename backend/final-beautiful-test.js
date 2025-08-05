// Send final test email with the beautiful working design
const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('🎨 Sending Final Beautiful Contact Form Test...');

const transporter = nodemailer.createTransport({
  host: 'smtp.zohocloud.ca',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Test form data
const formData = {
  name: 'David Rodriguez',
  email: 'david@rodriguezroofing.com',
  phone: '(555) 456-7890',
  company: 'Rodriguez Roofing & Construction',
  trade: 'roofing',
  projectType: 'new-website',
  timeline: '2-3-months',
  budget: '5000-10000',
  message: `Hi Aaron,

I own a roofing company and desperately need a professional website. We're losing too many leads to competitors who show up first in Google searches.

What I need:
- Storm damage lead capture
- Insurance claim assistance pages
- Before/after photo galleries
- Emergency contact system
- Mobile-friendly design

We do about $500K in revenue annually but our current website looks like it's from 2005. Ready to invest in something professional that will help us grow.

Can we schedule a call this week?

Thanks,
David Rodriguez
Rodriguez Roofing & Construction`,
  hearAbout: 'referral'
};

async function sendFinalTest() {
  try {
    console.log('📨 Creating beautiful business notification email...');
    
    // Business notification email with beautiful design
    const businessEmail = {
      from: process.env.EMAIL_USER,
      to: 'aaron@logicpros.ca',
      replyTo: formData.email,
      subject: `New Lead: ${formData.name} - ${formData.trade} Contractor`,
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
              <tr><td style="padding: 5px 0; width: 30%;"><strong>Name:</strong></td><td style="padding: 5px 0;">${formData.name}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Email:</strong></td><td style="padding: 5px 0;"><a href="mailto:${formData.email}" style="color: #007bff; text-decoration: none;">${formData.email}</a></td></tr>
              <tr><td style="padding: 5px 0;"><strong>Phone:</strong></td><td style="padding: 5px 0;"><a href="tel:${formData.phone}" style="color: #28a745; text-decoration: none;">${formData.phone}</a></td></tr>
              <tr><td style="padding: 5px 0;"><strong>Company:</strong></td><td style="padding: 5px 0;">${formData.company}</td></tr>
            </table>
          </div>
          
          <!-- Project Details -->
          <div style="padding: 25px; background: #ffffff; border-left: 4px solid #28a745;">
            <h3 style="color: #000; margin: 0 0 15px 0; font-size: 18px;">🚀 Project Details</h3>
            <table style="width: 100%; font-size: 15px;">
              <tr><td style="padding: 5px 0; width: 30%;"><strong>Trade:</strong></td><td style="padding: 5px 0;">${formData.trade}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Project Type:</strong></td><td style="padding: 5px 0;">${formData.projectType}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Timeline:</strong></td><td style="padding: 5px 0;">${formData.timeline}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Budget:</strong></td><td style="padding: 5px 0;">${formData.budget}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Heard About Us:</strong></td><td style="padding: 5px 0;">${formData.hearAbout}</td></tr>
            </table>
          </div>
          
          <!-- Message -->
          <div style="padding: 25px; background: #fff3cd; border-left: 4px solid #ffc107;">
            <h3 style="color: #856404; margin: 0 0 15px 0; font-size: 18px;">💬 Client Message</h3>
            <div style="background: white; padding: 15px; border-radius: 8px; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${formData.message}</div>
          </div>
          
          <!-- Quick Actions -->
          <div style="text-align: center; margin: 30px 0; padding: 30px; background: #f8f9fa; border: 2px solid #000; border-radius: 12px;">
            <h3 style="color: #000; margin: 0 0 20px 0; font-size: 18px;">🚀 Quick Actions</h3>
            <table style="margin: 0 auto;">
              <tr>
                <td style="padding: 0 10px;">
                  <a href="mailto:${formData.email}?subject=Re:%20Your%20LogicPros%20Inquiry" 
                     style="display: inline-block; color: white; background: #007bff; padding: 15px 25px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; min-width: 140px; text-align: center;">
                    📧 Reply to Client
                  </a>
                </td>
                <td style="padding: 0 10px;">
                  <a href="tel:${formData.phone}" 
                     style="display: inline-block; color: white; background: #28a745; padding: 15px 25px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; min-width: 140px; text-align: center;">
                    📞 Call Client
                  </a>
                </td>
              </tr>
            </table>
            <p style="margin: 20px 0 0 0; color: #666; font-size: 14px;">
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

    // Customer auto-reply
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

    console.log('📧 Sending business notification...');
    const businessResult = await transporter.sendMail(businessEmail);
    console.log('✅ Beautiful business email sent! Message ID:', businessResult.messageId);

    console.log('📧 Sending customer auto-reply...');
    const customerResult = await transporter.sendMail(customerReply);
    console.log('✅ Customer auto-reply sent! Message ID:', customerResult.messageId);

    console.log('\n🎉 FINAL TEST COMPLETE!');
    console.log('='.repeat(50));
    console.log('✅ Beautiful professional email design');
    console.log('✅ Working Reply and Call buttons');
    console.log('✅ Color-coded sections (blue, green, yellow)');
    console.log('✅ Professional gradient header');
    console.log('✅ Proper table layout for information');
    console.log('✅ Enhanced typography and spacing');
    console.log('✅ Professional footer with timestamp');
    console.log('\n💼 This is exactly what your contact form emails will look like!');
    console.log('📱 The buttons should work perfectly in your email client.');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

sendFinalTest();