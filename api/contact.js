module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formData = req.body;
    
    // Log the submission
    console.log('=== NEW CONTACT FORM SUBMISSION ===');
    console.log('Timestamp:', new Date().toISOString());
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Phone:', formData.phone);
    console.log('Company:', formData.company || 'Not provided');
    console.log('Trade/Industry:', formData.trade || 'Not provided');
    console.log('Project Type:', formData.projectType || 'Not provided');
    console.log('Timeline:', formData.timeline || 'Not provided');
    console.log('Budget:', formData.budget || 'Not provided');
    console.log('How they heard about us:', formData.hearAbout || 'Not provided');
    console.log('Message:', formData.message || 'No message provided');
    console.log('Forwarding to Oracle backend server...');

    // Forward to your Oracle backend server using node-https directly
    // since Vercel's fetch doesn't properly support custom agents
    const https = require('https');
    
    const postData = JSON.stringify(formData);
    
    const options = {
      hostname: '168.138.65.108',
      port: 443,
      path: '/api/contact',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      },
      rejectUnauthorized: false, // Ignore SSL certificate errors
      timeout: 30000 // 30 second timeout
    };
    
    const backendResponse = await new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          resolve({
            ok: res.statusCode >= 200 && res.statusCode < 300,
            status: res.statusCode,
            statusText: res.statusMessage,
            text: () => Promise.resolve(data)
          });
        });
      });
      
      req.on('error', (error) => {
        reject(error);
      });
      
      req.on('timeout', () => {
        req.destroy();
        reject(new Error('Request timeout'));
      });
      
      req.write(postData);
      req.end();
    });

    if (backendResponse.ok) {
      console.log('Successfully forwarded to Oracle backend');
      const result = await backendResponse.text();
      console.log('Backend response:', result);
      
      return res.status(200).json({ 
        success: true, 
        message: 'Contact form submitted successfully! We will respond within 24 hours.' 
      });
    } else {
      console.error('Backend responded with error:', backendResponse.status, backendResponse.statusText);
      throw new Error(`Backend responded with status: ${backendResponse.status}`);
    }

  } catch (error) {
    console.error('Contact form error:', error);
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Error stack:', error.stack);
    
    // More specific error messages based on error type
    let errorMessage = 'Backend forwarding failed';
    if (error.code === 'ECONNREFUSED') {
      errorMessage = 'Cannot connect to backend server - connection refused';
    } else if (error.code === 'ENOTFOUND') {
      errorMessage = 'Cannot find backend server - DNS resolution failed';
    } else if (error.code === 'ETIMEDOUT' || error.name === 'AbortError') {
      errorMessage = 'Backend server connection timeout';
    } else if (error.message.includes('certificate')) {
      errorMessage = 'SSL certificate error with backend server';
    }
    
    return res.status(500).json({ 
      error: 'Failed to submit contact form. Please try again or email us directly at aaron@logicpros.ca',
      details: errorMessage,
      errorCode: error.code,
      errorName: error.name
    });
  }
}