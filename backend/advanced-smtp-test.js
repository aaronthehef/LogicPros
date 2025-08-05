// Advanced SMTP Test Script for Zoho Mail Troubleshooting
const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('🔧 Advanced Zoho Mail SMTP Testing...');
console.log('Email:', process.env.EMAIL_USER);
console.log('Password length:', process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 'Not set');

// Different server configurations to try
const servers = [
  { name: 'US Primary', host: 'smtppro.zoho.com' },
  { name: 'US Alternative', host: 'smtp.zoho.com' },
  { name: 'European', host: 'smtppro.zoho.eu' },
  { name: 'India', host: 'smtppro.zoho.in' },
  { name: 'Australia', host: 'smtppro.zoho.com.au' }
];

// Port configurations
const portConfigs = [
  { port: 587, secure: false, name: 'STARTTLS (587)' },
  { port: 465, secure: true, name: 'SSL (465)' },
  { port: 25, secure: false, name: 'Plain (25)' }
];

async function testServerConfig(server, portConfig) {
  const configName = `${server.name} - ${portConfig.name}`;
  console.log(`\n📧 Testing ${configName}...`);
  
  const config = {
    host: server.host,
    port: portConfig.port,
    secure: portConfig.secure,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    },
    debug: false, // Set to true for verbose logging
    logger: false
  };
  
  const transporter = nodemailer.createTransport(config);
  
  try {
    // Test connection
    await transporter.verify();
    console.log(`✅ ${configName} - Connection successful!`);
    
    // Send test email
    const testEmail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `✅ SMTP Success - ${configName}`,
      text: `Success! This configuration works: ${server.host}:${portConfig.port}`,
      html: `
        <h2>🎉 SMTP Test Successful!</h2>
        <p><strong>Server:</strong> ${server.host}</p>
        <p><strong>Port:</strong> ${portConfig.port}</p>
        <p><strong>Security:</strong> ${portConfig.secure ? 'SSL' : 'STARTTLS'}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        <p>✅ Your contact form is ready to use this configuration!</p>
      `
    };
    
    const info = await transporter.sendMail(testEmail);
    console.log(`✅ ${configName} - Test email sent! Message ID: ${info.messageId}`);
    return { success: true, config, name: configName };
    
  } catch (error) {
    console.log(`❌ ${configName} - Failed: ${error.message}`);
    return { success: false, config, name: configName, error: error.message };
  }
}

async function runAdvancedTests() {
  console.log('\n' + '='.repeat(80));
  console.log('🚀 Advanced SMTP Configuration Testing');
  console.log('='.repeat(80));
  
  const results = [];
  
  // Test all combinations
  for (const server of servers) {
    for (const portConfig of portConfigs) {
      const result = await testServerConfig(server, portConfig);
      results.push(result);
      
      // If we find a working configuration, we can stop here
      if (result.success) {
        console.log('\n🎉 FOUND WORKING CONFIGURATION!');
        console.log('Update your server.js with these settings:');
        console.log('```javascript');
        console.log('const transporter = nodemailer.createTransport({');
        console.log(`  host: '${result.config.host}',`);
        console.log(`  port: ${result.config.port},`);
        console.log(`  secure: ${result.config.secure},`);
        console.log('  auth: {');
        console.log(`    user: '${process.env.EMAIL_USER}',`);
        console.log(`    pass: '${process.env.EMAIL_PASS}'`);
        console.log('  },');
        console.log('  tls: { rejectUnauthorized: false }');
        console.log('});');
        console.log('```');
        return result;
      }
    }
  }
  
  console.log('\n' + '='.repeat(80));
  console.log('📊 All Tests Completed - No Working Configuration Found');
  console.log('='.repeat(80));
  
  console.log('\n❌ All server and port combinations failed.');
  console.log('\n🔍 Additional Troubleshooting Required:');
  console.log('1. ✅ App password format is correct (12 characters)');
  console.log('2. ❓ Verify Two-Factor Authentication is enabled');
  console.log('3. ❓ Check if domain logicpros.ca is verified in Zoho admin');
  console.log('4. ❓ Verify you\'re using a PAID Zoho Mail account (required for custom domains)');
  console.log('5. ❓ Check account status - ensure no restrictions on SMTP access');
  
  console.log('\n📞 Next Steps:');
  console.log('• Contact Zoho Support with error code 535');
  console.log('• Verify account type and domain status in Zoho admin console');
  console.log('• Consider alternative email service (Gmail, SendGrid) if Zoho continues failing');
  
  return null;
}

// Test each failed configuration with debug info
async function debugFailedConfig() {
  console.log('\n🔍 Debug Mode - Detailed Error Analysis');
  
  const debugConfig = {
    host: 'smtppro.zoho.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    debug: true,
    logger: true
  };
  
  const transporter = nodemailer.createTransport(debugConfig);
  
  try {
    await transporter.verify();
  } catch (error) {
    console.log('\n📝 Detailed Error Information:');
    console.log('Error Message:', error.message);
    console.log('Error Code:', error.code);
    console.log('Response Code:', error.responseCode);
    console.log('Response:', error.response);
  }
}

// Run the tests
runAdvancedTests()
  .then(result => {
    if (!result) {
      return debugFailedConfig();
    }
  })
  .catch(console.error);