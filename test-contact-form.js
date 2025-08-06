const https = require('https');

// Test data as specified
const testData = {
  name: 'Test User',
  email: 'test@example.com',
  phone: '(555) 123-4567',
  company: 'Test Company',
  trade: 'construction', // "General Construction" maps to "construction" value
  projectType: 'new-website', // "New Website" maps to "new-website" value  
  timeline: '2-3-months', // "2-3 Months" maps to "2-3-months" value
  budget: '2500-5000', // "$2,500 - $5,000" maps to "2500-5000" value
  hearAbout: 'google', // "Google Search" maps to "google" value
  message: 'This is a test submission to verify the contact form is working correctly.'
};

console.log('Testing contact form with the following data:');
console.log(JSON.stringify(testData, null, 2));
console.log('\n--- Starting Form Test ---\n');

// Test the deployed Vercel API endpoint
async function testContactForm() {
  const url = 'https://test-e5v85cmyi-aaronthehefs-projects.vercel.app/api/contact';
  
  try {
    console.log('1. Making POST request to:', url);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
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
      console.log('\n✅ SUCCESS: Form submission completed successfully!');
      console.log('The form is now using the /api/contact endpoint correctly.');
    } else {
      console.log('\n❌ ERROR: Form submission failed');
      console.log('Status:', response.status, response.statusText);
    }
    
  } catch (error) {
    console.log('\n❌ NETWORK ERROR:', error.message);
    
    // If fetch fails, test the direct Oracle backend connection
    console.log('\n--- Testing Direct Backend Connection ---');
    await testDirectBackend();
  }
}

// Test the Oracle backend directly
async function testDirectBackend() {
  const backendUrl = 'https://168.138.65.108/api/contact';
  
  try {
    console.log('Testing direct connection to Oracle backend:', backendUrl);
    
    // Create an HTTPS agent that ignores SSL certificate errors (for testing)
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
    
    console.log('Direct backend response status:', response.status);
    const backendText = await response.text();
    console.log('Direct backend response:', backendText);
    
  } catch (error) {
    console.log('Direct backend connection error:', error.message);
  }
}

// Run the test
testContactForm();