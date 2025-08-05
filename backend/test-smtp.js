// SMTP Test Script for Zoho Mail Troubleshooting
const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('🔧 Testing Zoho Mail SMTP Configurations...');
console.log('Email:', process.env.EMAIL_USER);
console.log('Password length:', process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 'Not set');

// Configuration 1: STARTTLS (Port 587)
const config1 = {
  host: 'smtppro.zoho.com',
  port: 587,
  secure: false, // STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
};

// Configuration 2: SSL (Port 465)
const config2 = {
  host: 'smtppro.zoho.com',
  port: 465,
  secure: true, // SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
};

async function testConfiguration(config, name) {
  console.log(`\n📧 Testing ${name}...`);
  console.log(`Host: ${config.host}:${config.port} (${config.secure ? 'SSL' : 'STARTTLS'})`);
  
  const transporter = nodemailer.createTransport(config);
  
  try {
    // Test connection
    await transporter.verify();
    console.log(`✅ ${name} - Connection successful!`);
    
    // Send test email
    const testEmail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Test Email - ${name} - ${new Date().toLocaleString()}`,
      text: `This is a test email sent using ${name} configuration.`,
      html: `
        <h2>✅ SMTP Test Successful!</h2>
        <p><strong>Configuration:</strong> ${name}</p>
        <p><strong>Server:</strong> ${config.host}:${config.port}</p>
        <p><strong>Security:</strong> ${config.secure ? 'SSL' : 'STARTTLS'}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        <p>Your contact form emails should now work properly!</p>
      `
    };
    
    const info = await transporter.sendMail(testEmail);
    console.log(`✅ ${name} - Test email sent successfully!`);
    console.log(`Message ID: ${info.messageId}`);
    return true;
    
  } catch (error) {
    console.log(`❌ ${name} - Failed:`);
    console.log(`Error: ${error.message}`);
    if (error.code) console.log(`Code: ${error.code}`);
    return false;
  }
}

async function runTests() {
  console.log('\n' + '='.repeat(60));
  console.log('🚀 Starting SMTP Configuration Tests');
  console.log('='.repeat(60));
  
  const results = [];
  
  // Test STARTTLS configuration
  results.push(await testConfiguration(config1, 'STARTTLS (Port 587)'));
  
  // Test SSL configuration
  results.push(await testConfiguration(config2, 'SSL (Port 465)'));
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 Test Results Summary');
  console.log('='.repeat(60));
  
  if (results.some(r => r)) {
    console.log('✅ At least one configuration is working!');
    console.log('💡 Update your server.js to use the working configuration.');
  } else {
    console.log('❌ All configurations failed.');
    console.log('\n🔍 Troubleshooting Steps:');
    console.log('1. Verify Two-Factor Authentication is enabled in your Zoho account');
    console.log('2. Generate a new app password:');
    console.log('   - Go to https://accounts.zoho.com');
    console.log('   - Navigate to Security > App Passwords');
    console.log('   - Generate new password for "Nodemailer SMTP"');
    console.log('3. Update .env file with the new 12-digit app password');
    console.log('4. Verify your domain is confirmed in Zoho admin console');
    console.log('5. Try regional servers if needed (smtppro.zoho.eu, etc.)');
  }
  
  console.log('\n📝 Current Environment:');
  console.log(`EMAIL_USER: ${process.env.EMAIL_USER}`);
  console.log(`EMAIL_PASS: ${process.env.EMAIL_PASS ? '*'.repeat(process.env.EMAIL_PASS.length) : 'NOT SET'}`);
}

// Run the tests
runTests().catch(console.error);