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
    
    // Log all the form data for manual processing
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
    console.log('==========================================');

    // Return success immediately - emails will be added later
    return res.status(200).json({ 
      success: true, 
      message: 'Contact form submitted successfully! We will respond within 24 hours.' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      error: 'Failed to submit contact form',
      details: error.message
    });
  }
}