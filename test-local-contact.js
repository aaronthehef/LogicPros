const testFormSubmission = async () => {
  console.log('Testing contact form submission...');
  
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
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', [...response.headers.entries()]);
    
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

testFormSubmission();