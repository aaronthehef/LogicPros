const https = require('https');
const http = require('http');

// Test data as specified
const testData = {
  name: 'Test User',
  email: 'test@example.com',
  phone: '(555) 123-4567',
  company: 'Test Company',
  trade: 'construction',
  projectType: 'new-website',  
  timeline: '2-3-months',
  budget: '2500-5000',
  hearAbout: 'google',
  message: 'This is a test submission to verify the contact form is working correctly.'
};

console.log('Testing direct Oracle backend connection...');
console.log('Test data:', JSON.stringify(testData, null, 2));
console.log('\n--- Testing Oracle Backend ---\n');

async function testDirectBackend() {
  const backendUrl = 'https://168.138.65.108/api/contact';
  
  try {
    console.log('1. Making POST request to Oracle backend:', backendUrl);
    
    // Create an HTTPS agent that ignores SSL certificate errors (for testing self-signed certs)
    const agent = new https.Agent({
      rejectUnauthorized: false
    });
    
    const response = await fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
      agent: agent
    });
    
    console.log('2. Response status:', response.status);
    console.log('3. Response status text:', response.statusText);
    console.log('4. Response headers:', Object.fromEntries(response.headers.entries()));
    
    const responseText = await response.text();
    console.log('5. Response body (raw):', responseText);
    
    try {
      const responseJson = JSON.parse(responseText);
      console.log('6. Response body (parsed JSON):', responseJson);
    } catch (e) {
      console.log('6. Response body is not valid JSON');
    }
    
    if (response.ok) {
      console.log('\n✅ SUCCESS: Direct backend connection works!');
      console.log('The Oracle server is accepting form submissions.');
    } else {
      console.log('\n❌ ERROR: Backend responded with error status');
    }
    
  } catch (error) {
    console.log('\n❌ CONNECTION ERROR:', error.message);
    console.log('This could indicate:');
    console.log('- The Oracle server is down or unreachable');
    console.log('- Network connectivity issues');
    console.log('- SSL/TLS certificate issues');
  }
}

// Also test if we can reach the health endpoint
async function testHealthEndpoint() {
  const healthUrl = 'https://168.138.65.108/api/health';
  
  try {
    console.log('\n--- Testing Health Endpoint ---');
    console.log('Testing health endpoint:', healthUrl);
    
    const agent = new https.Agent({
      rejectUnauthorized: false
    });
    
    const response = await fetch(healthUrl, {
      method: 'GET',
      agent: agent
    });
    
    console.log('Health check status:', response.status);
    const healthText = await response.text();
    console.log('Health check response:', healthText);
    
  } catch (error) {
    console.log('Health check error:', error.message);
  }
}

// Run both tests
async function runTests() {
  await testDirectBackend();
  await testHealthEndpoint();
}

runTests();