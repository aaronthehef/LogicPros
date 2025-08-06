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
    
    // Log the submission (for debugging and manual processing)
    console.log('=== CONTACT FORM SUBMISSION ===');
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Phone:', formData.phone);
    console.log('Company:', formData.company);
    console.log('Trade:', formData.trade);
    console.log('Project Type:', formData.projectType);
    console.log('Timeline:', formData.timeline);
    console.log('Budget:', formData.budget);
    console.log('How they heard:', formData.hearAbout);
    console.log('Message:', formData.message);
    console.log('Timestamp:', new Date().toISOString());
    console.log('===============================');

    // For now, just return success - you can check the Vercel logs to see submissions
    // We'll add email functionality once credentials are set up
    return res.status(200).json({ 
      success: true, 
      message: 'Contact form submitted successfully. We will respond within 24 hours!' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      error: 'Failed to submit contact form',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}