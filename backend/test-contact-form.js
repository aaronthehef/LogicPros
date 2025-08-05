const http = require('http');

const postData = JSON.stringify({
  name: 'Test Client',
  email: 'test@example.com',
  phone: '555-123-4567',
  company: 'Test Company',
  trade: 'roofing',
  projectType: 'new-website',
  timeline: '1-month',
  budget: '5000-10000',
  message: 'This is a test submission from the fixed contact form. Testing that emails are working properly.',
  hearAbout: 'google'
});

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/contact',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

console.log('🧪 Testing contact form submission...');

const req = http.request(options, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Response:', data);
    
    try {
      const result = JSON.parse(data);
      if (result.success) {
        console.log('✅ Contact form test successful!');
        console.log('📧 Check aaron@logicpros.ca for the test email');
        console.log('📧 Check test@example.com for the auto-reply');
      } else {
        console.log('❌ Contact form test failed:', result.message);
      }
    } catch (error) {
      console.log('❌ Invalid JSON response');
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Request failed:', error.message);
  console.log('💡 Make sure the server is running: node server.js');
});

req.write(postData);
req.end();