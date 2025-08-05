// Gmail SMTP Test as Alternative to Zoho
const nodemailer = require('nodemailer');

console.log('📧 Testing Gmail SMTP as Alternative...');
console.log('This will help determine if the issue is Zoho-specific or general SMTP');

// Gmail SMTP Configuration
const gmailConfig = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // STARTTLS
  auth: {
    user: 'YOUR_GMAIL@gmail.com', // Replace with your Gmail
    pass: 'YOUR_APP_PASSWORD'      // Gmail app password
  }
};

async function testGmailSMTP() {
  console.log('\n🔧 Gmail SMTP Configuration Test');
  console.log('Note: This is just to test if SMTP works in general');
  console.log('You would need to:');
  console.log('1. Enable 2-Factor Authentication on Gmail');
  console.log('2. Generate an app password for Gmail');
  console.log('3. Replace the credentials above');
  
  console.log('\n📝 Gmail SMTP Setup Instructions:');
  console.log('• Go to myaccount.google.com');
  console.log('• Navigate to Security > 2-Step Verification (enable if not already)');
  console.log('• Go to Security > App passwords');
  console.log('• Generate password for "Mail" application');
  console.log('• Use that 16-character password instead of your regular password');
  
  console.log('\n💡 Alternative Email Services for Contact Forms:');
  console.log('1. Gmail SMTP (free, reliable)');
  console.log('2. SendGrid (free tier: 100 emails/day)');
  console.log('3. Mailgun (free tier: 5,000 emails/month)');
  console.log('4. AWS SES (very cheap, reliable)');
  console.log('5. Postmark (premium but excellent deliverability)');
}

// Zoho Account Verification Checklist
function displayZohoTroubleshooting() {
  console.log('\n' + '='.repeat(60));
  console.log('🔍 ZOHO MAIL ACCOUNT VERIFICATION CHECKLIST');
  console.log('='.repeat(60));
  
  console.log('\n✅ Items to Verify in Your Zoho Account:');
  console.log('□ Two-Factor Authentication is enabled');
  console.log('□ Domain logicpros.ca is verified and active');
  console.log('□ Account is on a PAID plan (required for custom domains)');
  console.log('□ SMTP access is enabled in account settings');
  console.log('□ No account restrictions or suspensions');
  console.log('□ App password was generated AFTER enabling 2FA');
  console.log('□ Domain MX records are properly configured');
  
  console.log('\n🔧 Steps to Fix Zoho SMTP:');
  console.log('1. Login to admin.zoho.com (not accounts.zoho.com)');
  console.log('2. Go to Admin Console > Domains');
  console.log('3. Verify logicpros.ca shows as "Verified"');
  console.log('4. Check Email Hosting > Mail Accounts > aaron@logicpros.ca');
  console.log('5. Ensure the account is active and has SMTP permissions');
  console.log('6. Generate a NEW app password specifically for SMTP');
  
  console.log('\n📞 If Still Failing:');
  console.log('• Contact Zoho Support directly with error code 535');
  console.log('• Ask them to verify SMTP access for aaron@logicpros.ca');
  console.log('• Mention you\'re using Node.js nodemailer for contact forms');
  
  console.log('\n🚀 Quick Fix Options:');
  console.log('1. Set up Gmail SMTP (15 minutes)');
  console.log('2. Use SendGrid free tier (20 minutes)');
  console.log('3. Continue troubleshooting Zoho with their support');
}

// Working Gmail Configuration Template
function showGmailTemplate() {
  console.log('\n' + '='.repeat(60));
  console.log('📧 GMAIL SMTP CONFIGURATION TEMPLATE');
  console.log('='.repeat(60));
  
  console.log('\n// Replace in your server.js:');
  console.log('const transporter = nodemailer.createTransport({');
  console.log('  host: "smtp.gmail.com",');
  console.log('  port: 587,');
  console.log('  secure: false, // STARTTLS');
  console.log('  auth: {');
  console.log('    user: "your-gmail@gmail.com",');
  console.log('    pass: "your-16-char-app-password"');
  console.log('  }');
  console.log('});');
  
  console.log('\n// Update your .env file:');
  console.log('EMAIL_USER=your-gmail@gmail.com');
  console.log('EMAIL_PASS=your-16-char-app-password');
  
  console.log('\n📝 Note: You can still send FROM aaron@logicpros.ca');
  console.log('Just set the "from" field in your emails to aaron@logicpros.ca');
  console.log('Gmail will handle the delivery through their servers.');
}

// Run the analysis
testGmailSMTP();
displayZohoTroubleshooting();
showGmailTemplate();