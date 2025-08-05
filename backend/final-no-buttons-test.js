// Test the beautiful design without problematic buttons
const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('🎨 Testing Beautiful Design Without Buttons...');

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
  name: 'Lisa Chen',
  email: 'lisa@chenpaintingpros.com',
  phone: '(555) 321-9876',
  company: 'Chen Painting Professionals',
  trade: 'painting',
  projectType: 'new-website',
  timeline: '1-month',
  budget: '2500-5000',
  message: `Hi Aaron,

I run a painting business and need a professional website that helps me compete against larger companies. I'm tired of losing jobs to contractors who show up higher in search results.

I need:
- Before/after photo galleries
- Color consultation services showcase
- Customer testimonial section
- Easy contact forms
- Professional look that builds trust

I'm ready to invest in a quality website that will help grow my business.

Thanks!
Lisa Chen`,
  hearAbout: 'google'
};

async function testSimplifiedDesign() {
  try {
    console.log('📧 Sending test with simplified, beautiful design...');
    
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
              <tr><td style="padding: 5px 0; width: 30%;"><strong>Name:</strong></td><td style="padding: 5px 0;">${testData.name}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Email:</strong></td><td style="padding: 5px 0;">${testData.email}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Phone:</strong></td><td style="padding: 5px 0;">${testData.phone}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Company:</strong></td><td style="padding: 5px 0;">${testData.company}</td></tr>
            </table>
          </div>
          
          <!-- Project Details -->
          <div style="padding: 25px; background: #ffffff; border-left: 4px solid #28a745;">
            <h3 style="color: #000; margin: 0 0 15px 0; font-size: 18px;">🚀 Project Details</h3>
            <table style="width: 100%; font-size: 15px;">
              <tr><td style="padding: 5px 0; width: 30%;"><strong>Trade:</strong></td><td style="padding: 5px 0;">${testData.trade}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Project Type:</strong></td><td style="padding: 5px 0;">${testData.projectType}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Timeline:</strong></td><td style="padding: 5px 0;">${testData.timeline}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Budget:</strong></td><td style="padding: 5px 0;">${testData.budget}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Heard About Us:</strong></td><td style="padding: 5px 0;">${testData.hearAbout}</td></tr>
            </table>
          </div>
          
          <!-- Message -->
          <div style="padding: 25px; background: #fff3cd; border-left: 4px solid #ffc107;">
            <h3 style="color: #856404; margin: 0 0 15px 0; font-size: 18px;">💬 Client Message</h3>
            <div style="background: white; padding: 15px; border-radius: 8px; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${testData.message}</div>
          </div>
          
          <!-- Contact Actions -->
          <div style="padding: 25px; background: #e7f3ff; border-left: 4px solid #0066cc;">
            <h3 style="color: #0066cc; margin: 0 0 15px 0; font-size: 18px;">📞 Contact This Lead</h3>
            <div style="background: white; padding: 20px; border-radius: 8px;">
              <p style="margin: 5px 0; font-size: 16px;"><strong>📧 Email:</strong> ${testData.email}</p>
              <p style="margin: 5px 0; font-size: 16px;"><strong>📱 Phone:</strong> ${testData.phone}</p>
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
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'aaron@logicpros.ca',
      replyTo: testData.email,
      subject: `✅ FINAL DESIGN (No Buttons) - New Lead: ${testData.name} - ${testData.trade} Contractor`,
      html: emailContent
    });

    console.log('✅ Final beautiful email sent successfully!');
    console.log('\n🎨 Final Design Features:');
    console.log('✅ Beautiful professional gradient header');
    console.log('✅ Color-coded sections (blue, green, yellow, light blue)');
    console.log('✅ Clean table layout for all information');
    console.log('✅ NO PROBLEMATIC BUTTONS - just clear contact info');
    console.log('✅ Emphasis on using REPLY button (which always works)');
    console.log('✅ Professional footer with timestamp');
    console.log('✅ Easy-to-read contact information');
    console.log('\n💼 This design is both beautiful AND functional!');
    console.log('📧 Just hit REPLY to respond to leads - simple and reliable!');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testSimplifiedDesign();