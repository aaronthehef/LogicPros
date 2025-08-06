export default async function handler(req, res) {
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
    
    // Log the submission (for debugging)
    console.log('Contact form submission:', formData);
    
    // Forward to your Oracle backend
    const response = await fetch('https://168.138.65.108/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      // Disable SSL certificate validation for this internal request
      agent: process.env.NODE_ENV === 'production' ? undefined : new (require('https').Agent)({ rejectUnauthorized: false })
    });

    if (response.ok) {
      const result = await response.text();
      return res.status(200).json({ success: true, message: 'Contact form submitted successfully' });
    } else {
      throw new Error(`Backend responded with status: ${response.status}`);
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      error: 'Failed to submit contact form',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}