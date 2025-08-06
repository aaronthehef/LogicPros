const testNewAPI = async () => {
  console.log('Testing new Vercel API with nodemailer...');
  
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

  try {
    const response = await fetch('https://logicpros-contact-test-r4a8cs6mz-aaronthehefs-projects.vercel.app/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    console.log('Response status:', response.status);
    console.log('Response statusText:', response.statusText);
    
    if (response.ok) {
      const result = await response.json();
      console.log('✅ SUCCESS - Form submitted successfully:', result);
    } else {
      const error = await response.text();
      console.log('❌ ERROR - Form submission failed:', error);
    }
  } catch (error) {
    console.error('❌ NETWORK ERROR:', error.message);
  }
};

testNewAPI();