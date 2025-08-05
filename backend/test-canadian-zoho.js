// Test Canadian Zoho Cloud SMTP
const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('🍁 Testing Canadian Zoho Cloud SMTP...');
console.log('Email:', process.env.EMAIL_USER);
console.log('Password length:', process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 'Not set');

// Canadian Zoho configurations
const canadianConfigs = [
  {
    name: 'Canadian SSL (465)',
    host: 'smtp.zohocloud.ca',
    port: 465,
    secure: true
  },
  {
    name: 'Canadian STARTTLS (587)',
    host: 'smtp.zohocloud.ca',
    port: 587,
    secure: false
  }
];

async function testCanadianConfig(config) {
  console.log(`\n📧 Testing ${config.name}...`);
  console.log(`Host: ${config.host}:${config.port} (${config.secure ? 'SSL' : 'STARTTLS'})`);
  
  const transporterConfig = {
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  };
  
  const transporter = nodemailer.createTransport(transporterConfig);
  
  try {
    // Test connection
    await transporter.verify();
    console.log(`✅ ${config.name} - Connection successful!`);
    
    // Send test email
    const testEmail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `🍁 SUCCESS - Canadian Zoho SMTP Test - ${config.name}`,
      text: `Success! Canadian Zoho SMTP is working with ${config.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #28a745;">🎉 Canadian Zoho SMTP Success!</h2>
          <p><strong>Configuration:</strong> ${config.name}</p>
          <p><strong>Server:</strong> ${config.host}:${config.port}</p>
          <p><strong>Security:</strong> ${config.secure ? 'SSL' : 'STARTTLS'}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          <div style="background: #d4edda; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #155724; margin-top: 0;">✅ Contact Form Ready!</h3>
            <p style="color: #155724;">Your contact form emails will now be delivered successfully using the Canadian Zoho datacenter.</p>
          </div>
          <p>🍁 Proudly Canadian! 🇨🇦</p>
        </div>
      `
    };
    
    const info = await transporter.sendMail(testEmail);
    console.log(`✅ ${config.name} - Test email sent successfully!`);
    console.log(`Message ID: ${info.messageId}`);
    console.log(`\n🎉 SOLUTION FOUND: Update your server.js with Canadian settings!`);
    return true;
    
  } catch (error) {
    console.log(`❌ ${config.name} - Failed:`);
    console.log(`Error: ${error.message}`);
    if (error.code) console.log(`Code: ${error.code}`);
    return false;
  }
}

async function runCanadianTests() {
  console.log('\n' + '='.repeat(70));
  console.log('🍁 CANADIAN ZOHO CLOUD SMTP TESTING');
  console.log('='.repeat(70));
  
  let workingConfig = null;
  
  for (const config of canadianConfigs) {
    const success = await testCanadianConfig(config);
    if (success) {
      workingConfig = config;
      break; // Stop at first working config
    }
  }
  
  console.log('\n' + '='.repeat(70));
  if (workingConfig) {
    console.log('🎉 SUCCESS! Canadian Zoho SMTP is working!');
    console.log('='.repeat(70));
    console.log('\n✅ Your contact form should now send emails properly.');
    console.log('✅ Check your email for the test message.');
    console.log('\n💡 The issue was using the wrong datacenter server.');
    console.log('🍁 Canadian accounts must use smtp.zohocloud.ca');
    console.log('🌍 Other regions use different servers (smtppro.zoho.com, etc.)');
  } else {
    console.log('❌ Canadian Zoho SMTP still not working');
    console.log('='.repeat(70));
    console.log('\n🔍 If still failing, verify:');
    console.log('• App password is correctly generated');
    console.log('• Two-factor authentication is enabled');
    console.log('• Domain logicpros.ca is verified in Zoho admin');
    console.log('• Account has SMTP permissions');
  }
}

runCanadianTests().catch(console.error);