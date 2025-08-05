// Test the improved email formatting
const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('📧 Testing Improved Email Design...');

// Canadian Zoho configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.zohocloud.ca',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Sample form data for testing
const testFormData = {
  name: 'Mike Johnson',
  email: 'mike.johnson@example.com',
  phone: '(555) 987-6543',
  company: 'Johnson Roofing & Construction',
  trade: 'roofing',
  projectType: 'new-website',
  timeline: '2-3-months',
  budget: '5000-10000',
  message: 'Hi Aaron,\n\nI run a roofing company and need a professional website that can help me get more storm damage leads. I\'ve seen some of your other contractor websites and they look great.\n\nI\'m particularly interested in:\n- Emergency repair lead capture\n- Insurance claim assistance pages\n- Before/after photo galleries\n- Mobile-friendly design\n\nLooking forward to hearing from you!\n\nBest regards,\nMike',
  hearAbout: 'referral'
};

async function testImprovedEmail() {
  try {
    console.log('📨 Sending test email with improved design...');
    
    // Create the improved email
    const emailContent = `
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
              <tr><td style="padding: 5px 0; width: 30%;"><strong>Name:</strong></td><td style="padding: 5px 0;">${testFormData.name}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Email:</strong></td><td style="padding: 5px 0;"><a href="mailto:${testFormData.email}" style="color: #007bff; text-decoration: none;">${testFormData.email}</a></td></tr>
              <tr><td style="padding: 5px 0;"><strong>Phone:</strong></td><td style="padding: 5px 0;"><a href="tel:${testFormData.phone}" style="color: #28a745; text-decoration: none;">${testFormData.phone}</a></td></tr>
              <tr><td style="padding: 5px 0;"><strong>Company:</strong></td><td style="padding: 5px 0;">${testFormData.company}</td></tr>
            </table>
          </div>
          
          <!-- Project Details -->
          <div style="padding: 25px; background: #ffffff; border-left: 4px solid #28a745;">
            <h3 style="color: #000; margin: 0 0 15px 0; font-size: 18px;">🚀 Project Details</h3>
            <table style="width: 100%; font-size: 15px;">
              <tr><td style="padding: 5px 0; width: 30%;"><strong>Trade:</strong></td><td style="padding: 5px 0;">${testFormData.trade}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Project Type:</strong></td><td style="padding: 5px 0;">${testFormData.projectType}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Timeline:</strong></td><td style="padding: 5px 0;">${testFormData.timeline}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Budget:</strong></td><td style="padding: 5px 0;">${testFormData.budget}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Heard About Us:</strong></td><td style="padding: 5px 0;">${testFormData.hearAbout}</td></tr>
            </table>
          </div>
          
          <!-- Message -->
          <div style="padding: 25px; background: #fff3cd; border-left: 4px solid #ffc107;">
            <h3 style="color: #856404; margin: 0 0 15px 0; font-size: 18px;">💬 Client Message</h3>
            <div style="background: white; padding: 15px; border-radius: 8px; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${testFormData.message}</div>
          </div>
          
          <!-- Quick Actions -->
          <div style="text-align: center; margin: 30px 0; padding: 30px; background: #f8f9fa; border: 2px solid #000; border-radius: 12px;">
            <h3 style="color: #000; margin: 0 0 20px 0; font-size: 18px;">🚀 Quick Actions</h3>
            <table style="margin: 0 auto;">
              <tr>
                <td style="padding: 0 10px;">
                  <a href="mailto:${testFormData.email}?subject=Re: Your LogicPros Inquiry" 
                     style="display: inline-block; color: white; background: #007bff; padding: 15px 25px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; min-width: 140px; text-align: center;">
                    📧 Reply to Client
                  </a>
                </td>
                <td style="padding: 0 10px;">
                  <a href="tel:${testFormData.phone}" 
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
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'aaron@logicpros.ca',
      replyTo: testFormData.email,
      subject: `✨ IMPROVED DESIGN TEST - New Lead: ${testFormData.name} - ${testFormData.trade} Contractor`,
      html: emailContent
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Improved email sent successfully!');
    console.log('Message ID:', result.messageId);
    console.log('\n🎨 Email Design Improvements:');
    console.log('✅ Larger, more readable buttons (16px font, better padding)');
    console.log('✅ Better color contrast (blue/green instead of gray)');
    console.log('✅ Professional gradient header');
    console.log('✅ Color-coded sections with left borders');
    console.log('✅ Proper table layout for information');
    console.log('✅ Enhanced typography and spacing');
    console.log('✅ Clear call-to-action section');
    console.log('\n💡 Check your email to see the improved design!');

  } catch (error) {
    console.error('❌ Error sending test email:', error.message);
  }
}

testImprovedEmail();