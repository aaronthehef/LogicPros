const testVercelContactForm = async () => {
  console.log('Testing Vercel contact form API...');
  
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '(555) 123-4567',
    company: 'Test Company',
    trade: 'construction',
    projectType: 'new-website',
    timeline: '2-3-months',
    budget: '2500-5000',
    message: 'This is a test submission to verify the contact form is working correctly.',
    hearAbout: 'google'
  };

  const vercelUrls = [
    'https://logicpros-contact-test-4l0deykjv-aaronthehefs-projects.vercel.app/api/contact',
    'https://test-e5v85cmyi-aaronthehefs-projects.vercel.app/api/contact',
    'https://test-60q8exjf0-aaronthehefs-projects.vercel.app/api/contact'
  ];

  for (const url of vercelUrls) {
    console.log(`\nTesting: ${url}`);
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData)
      });

      console.log('Response status:', response.status);
      console.log('Response statusText:', response.statusText);
      
      if (response.status === 401) {
        console.log('❌ ERROR - Authentication required (Vercel protection enabled)');
      } else if (response.ok) {
        const result = await response.json();
        console.log('✅ SUCCESS - Form submitted successfully:', result);
        break; // Stop testing other URLs if one works
      } else {
        const error = await response.text();
        console.log('❌ ERROR - Form submission failed:', error);
      }
    } catch (error) {
      console.error('❌ NETWORK ERROR:', error.message);
    }
  }
};

testVercelContactForm();