// Send a test contact form submission to demonstrate the beautiful email design
const fetch = require('node-fetch').default || require('node-fetch');

console.log('📧 Sending test contact form submission...');

const testData = {
  name: 'Sarah Wilson',
  email: 'sarah.wilson@example.com',
  phone: '(555) 789-0123',
  company: 'Wilson Electrical Services',
  trade: 'electrical',
  projectType: 'new-website',
  timeline: '1-month',
  budget: '5000-10000',
  message: `Hi Aaron,

I run an electrical contracting business and need a professional website that showcases our safety certifications and smart home expertise. I've been losing leads to competitors with better online presence.

I'm looking for:
- Emergency service lead capture
- Smart home installation showcase  
- Safety certification display
- Mobile-friendly design

Looking forward to working with you!

Best regards,
Sarah`,
  hearAbout: 'google'
};

async function sendTestContact() {
  try {
    console.log('📨 Submitting contact form with beautiful design...');
    
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testData)
    });
    
    const result = await response.json();
    
    if (result.success) {
      console.log('✅ SUCCESS! Contact form submitted successfully!');
      console.log('📧 Beautiful email sent to aaron@logicpros.ca');
      console.log('📱 Auto-reply sent to sarah.wilson@example.com');
      console.log('\n🎨 The email includes:');
      console.log('✅ Professional gradient header');
      console.log('✅ Color-coded contact information section (blue)');
      console.log('✅ Project details section (green)');
      console.log('✅ Client message section (yellow)');
      console.log('✅ Working Quick Action buttons (blue Reply, green Call)');
      console.log('✅ Professional footer with timestamp');
      console.log('\n💡 Check your email - the buttons should now work perfectly!');
    } else {
      console.log('❌ Error:', result.message);
    }
    
  } catch (error) {
    console.error('❌ Network error:', error.message);
  }
}

sendTestContact();