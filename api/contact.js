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

    // Forward to your Oracle backend server
    const backendResponse = await fetch('https://168.138.65.108/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      // Disable SSL certificate validation for this internal request
      agent: process.env.NODE_TLS_REJECT_UNAUTHORIZED === '0' ? 
        new (require('https').Agent)({ rejectUnauthorized: false }) : 
        undefined
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
    console.error('Error stack:', error.stack);
    
    return res.status(500).json({ 
      error: 'Failed to submit contact form. Please try again or email us directly at aaron@logicpros.ca',
      details: process.env.NODE_ENV === 'development' ? error.message : 'Backend forwarding failed'
    });
  }
}