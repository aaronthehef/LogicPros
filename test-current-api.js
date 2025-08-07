const testCurrentAPI = async () => {
  console.log('Testing current logicpros-contact-final deployment...');
  
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '(555) 123-4567',
    company: 'Test Company',
    trade: 'construction',
    projectType: 'new-website',
    timeline: '2-3-months',
    budget: '2500-5000',
    message: 'This is a test submission to verify the Oracle backend connection.',
    hearAbout: 'google'
  };

  try {
    const response = await fetch('https://logicpros-contact-final-1d4aoj4sf-aaronthehefs-projects.vercel.app/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    console.log('Response status:', response.status);
    console.log('Response statusText:', response.statusText);
    
    const responseText = await response.text();
    console.log('Raw response:', responseText);
    
    if (response.ok) {
      try {
        const result = JSON.parse(responseText);
        console.log('✅ SUCCESS - Contact form is working!');
        console.log('Result:', result);
      } catch (parseError) {
        console.log('✅ Response OK but not JSON:', responseText);
      }
    } else {
      console.log('❌ ERROR - Form submission failed:', responseText);
    }
  } catch (error) {
    console.error('❌ NETWORK ERROR:', error.message);
  }
};

testCurrentAPI();