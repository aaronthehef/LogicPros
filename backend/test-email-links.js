// Test different email link approaches
const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('🔗 Testing Email Link Functionality...');

const transporter = nodemailer.createTransport({
  host: 'smtp.zohocloud.ca',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const testData = {
  name: 'John Test',
  email: 'john@example.com',
  phone: '555-123-4567'
};

async function testEmailLinks() {
  try {
    console.log('📨 Sending email with different link approaches...');
    
    const emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          
          <div style="background: linear-gradient(135deg, #000 0%, #333 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; font-weight: bold;">🔗 Email Link Testing</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Testing Different Link Approaches</p>
          </div>
          
          <!-- Test Section 1: Standard mailto links -->
          <div style="padding: 25px; background: #f8f9fa; border-left: 4px solid #007bff;">
            <h3 style="color: #000; margin: 0 0 15px 0;">📧 Method 1: Standard mailto Links</h3>
            <p>
              <a href="mailto:${testData.email}" style="color: #007bff; text-decoration: underline;">
                Email: ${testData.email}
              </a>
            </p>
            <p>
              <a href="tel:${testData.phone}" style="color: #28a745; text-decoration: underline;">
                Phone: ${testData.phone}
              </a>
            </p>
          </div>
          
          <!-- Test Section 2: Button-style links -->
          <div style="padding: 25px; background: #ffffff; border-left: 4px solid #28a745;">
            <h3 style="color: #000; margin: 0 0 15px 0;">🎯 Method 2: Button Links</h3>
            <div style="text-align: center; margin: 20px 0;">
              <a href="mailto:${testData.email}?subject=Re:%20Your%20LogicPros%20Inquiry&body=Hi%20${testData.name},%0D%0A%0D%0AThank%20you%20for%20your%20interest%20in%20LogicPros.%20"
                 style="display: inline-block; color: white; background: #007bff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 5px;">
                📧 Reply via Email
              </a>
              <a href="tel:${testData.phone}"
                 style="display: inline-block; color: white; background: #28a745; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 5px;">
                📞 Call Now
              </a>
            </div>
          </div>
          
          <!-- Test Section 3: Plain text alternatives -->
          <div style="padding: 25px; background: #fff3cd; border-left: 4px solid #ffc107;">
            <h3 style="color: #856404; margin: 0 0 15px 0;">📝 Method 3: Copy-Paste Info</h3>
            <div style="background: white; padding: 15px; border-radius: 8px; font-family: monospace;">
              <p style="margin: 5px 0;"><strong>Email:</strong> ${testData.email}</p>
              <p style="margin: 5px 0;"><strong>Phone:</strong> ${testData.phone}</p>
              <p style="margin: 5px 0;"><strong>Name:</strong> ${testData.name}</p>
            </div>
            <p style="font-size: 13px; color: #856404; margin: 10px 0 0 0;">
              💡 Copy and paste the email/phone above if links don't work
            </p>
          </div>
          
          <!-- Test Section 4: Alternative approaches -->
          <div style="padding: 25px; background: #e7f3ff; border-left: 4px solid #0066cc;">
            <h3 style="color: #0066cc; margin: 0 0 15px 0;">🔧 Method 4: Alternative Actions</h3>
            <div style="text-align: center;">
              <div style="margin: 10px 0;">
                <strong>Reply Options:</strong>
              </div>
              <div style="background: white; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p style="margin: 5px 0;">✅ Reply directly to this email</p>
                <p style="margin: 5px 0;">✅ Forward this email to your CRM</p>
                <p style="margin: 5px 0;">✅ Create calendar reminder to follow up</p>
              </div>
            </div>
          </div>
          
          <!-- Test Section 5: What email client are you using? -->
          <div style="padding: 25px; background: #f8f9fa; border-left: 4px solid #6c757d;">
            <h3 style="color: #495057; margin: 0 0 15px 0;">❓ Troubleshooting</h3>
            <p style="font-size: 14px; line-height: 1.6;">
              <strong>If links don't work, it might be because:</strong><br>
              • Your email client blocks mailto/tel links<br>
              • Security settings prevent link execution<br>
              • Using webmail instead of desktop client<br>
              • Corporate email restrictions<br><br>
              
              <strong>Which email client are you using?</strong><br>
              □ Outlook (Desktop)<br>
              □ Outlook (Web)<br>
              □ Gmail (Web)<br>
              □ Apple Mail<br>
              □ Thunderbird<br>
              □ Zoho Mail (Web)<br>
              □ Other: ___________
            </p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 13px; margin: 0;">
              Email Link Testing - LogicPros Contact Form<br>
              Please test each method above and let us know which works best.
            </p>
          </div>
        </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'aaron@logicpros.ca',
      subject: '🔗 EMAIL LINK TESTING - Which method works best?',
      html: emailContent
    });

    console.log('✅ Email link test sent successfully!');
    console.log('\n📋 Please check your email and test:');
    console.log('1. Standard email/phone links');
    console.log('2. Button-style links');
    console.log('3. Copy-paste method');
    console.log('4. Alternative approaches');
    console.log('\n💡 Let me know which method works in your email client!');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testEmailLinks();