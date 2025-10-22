import React, { useEffect } from 'react';
import '../responsive-style.css';
import { Logo } from '../components/Logo';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { colors } from '../styles/colors';

export const PrivacyPolicyPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "Privacy Policy | LogicPros";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'LogicPros privacy policy - Learn how we collect, use, and protect your personal information in compliance with Canadian privacy laws.';
    document.head.appendChild(metaDescription);
    
    return () => {
      if (document.head.contains(metaDescription)) {
        document.head.removeChild(metaDescription);
      }
    };
  }, []);

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="sticky-header">
        <div className="header-content">
          <div className="logo">
            <Logo />
          </div>
          <Navigation />
        </div>
      </header>

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section" style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          padding: '140px 0 80px 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '700',
              marginBottom: '1rem',
              color: '#1F7CFF',
              textShadow: '0 0 5px rgba(31, 124, 255, 0.3), 0 0 10px rgba(31, 124, 255, 0.2)'
            }}>
              Privacy Policy
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: '#e2e8f0',
              marginBottom: '2rem'
            }}>
              Last Updated: October 22, 2025
            </p>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '80px 0'
        }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ 
              background: 'white', 
              borderRadius: '20px', 
              padding: '50px', 
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)'
            }}>
              
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}>
                1. Introduction
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '2rem', 
                color: colors.text.primary 
              }}>
                LogicPros (LPS LogicPros Solutions Inc.) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (logicpros.ca) or use our services, including website design, AI automations, cybersecurity, and managed IT services.
              </p>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '2rem', 
                color: colors.text.primary 
              }}>
                We comply with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA) and other applicable privacy legislation. This policy outlines our practices regarding the collection, use, and disclosure of personal information.
              </p>

              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}>
                2. Information We Collect
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem', 
                color: colors.text.primary 
              }}>
                We may collect the following types of information:
              </p>
              <ul style={{ 
                marginBottom: '2rem', 
                paddingLeft: '2rem',
                color: colors.text.primary,
                lineHeight: '1.8'
              }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Contact Information:</strong> Name, email address, phone number, company name, and job title when you contact us or request services.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Technical Information:</strong> IP address, browser type, device information, operating system, and browsing behavior collected through standard web analytics.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Service Information:</strong> Details provided through contact forms, consultations, or service requests, including business requirements and technical specifications.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Website Analytics:</strong> Information about how you use our website, collected through tools like Google Analytics.
                </li>
              </ul>

              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}>
                3. How We Use Your Information
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem', 
                color: colors.text.primary 
              }}>
                We use your information for the following purposes:
              </p>
              <ul style={{ 
                marginBottom: '2rem', 
                paddingLeft: '2rem',
                color: colors.text.primary,
                lineHeight: '1.8'
              }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  To provide IT services, website design, cybersecurity, and automation services as requested
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  To respond to inquiries and service requests
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  To send service updates and important notifications
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  To improve our services and website functionality
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  To comply with legal obligations
                </li>
              </ul>

              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}>
                4. Information Sharing
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem', 
                color: colors.text.primary 
              }}>
                LogicPros does not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul style={{ 
                marginBottom: '2rem', 
                paddingLeft: '2rem',
                color: colors.text.primary,
                lineHeight: '1.8'
              }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  With trusted service providers who assist us in operating our business (hosting services, email providers, analytics services)
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  When required by law or to protect our rights, property, or safety
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  With your explicit consent
                </li>
              </ul>

              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}>
                5. Data Security
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '2rem', 
                color: colors.text.primary 
              }}>
                We implement appropriate security measures to protect your personal information, including encryption, secure servers, and access controls. However, no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>

              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}>
                6. Client Data & IT Services
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem', 
                color: colors.text.primary 
              }}>
                When providing IT services, managed services, and cybersecurity work, we may have access to your business data. We:
              </p>
              <ul style={{ 
                marginBottom: '2rem', 
                paddingLeft: '2rem',
                color: colors.text.primary,
                lineHeight: '1.8'
              }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  Maintain strict confidentiality of all client data
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Access only the data necessary to provide the requested services
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Retain client data only as long as necessary for service provision and legal compliance
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Securely dispose of client data when no longer needed
                </li>
              </ul>

              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}>
                7. Cookies & Tracking
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem', 
                color: colors.text.primary 
              }}>
                Our website uses cookies and similar tracking technologies to enhance your experience and analyze website traffic. You can manage cookie preferences through your browser settings.
              </p>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '2rem', 
                color: colors.text.primary 
              }}>
                We use Google Analytics to understand how visitors interact with our website. Google Analytics may collect information about your use of our website, but does not collect personally identifying information.
              </p>

              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}>
                8. Your Rights (Under PIPEDA)
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem', 
                color: colors.text.primary 
              }}>
                Under PIPEDA, you have the following rights regarding your personal information:
              </p>
              <ul style={{ 
                marginBottom: '2rem', 
                paddingLeft: '2rem',
                color: colors.text.primary,
                lineHeight: '1.8'
              }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Right to Access:</strong> You can request access to the personal information we hold about you.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Right to Correct:</strong> You can request correction of inaccurate personal information.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Right to Withdraw Consent:</strong> You can withdraw consent for the collection, use, or disclosure of your personal information, where appropriate.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Right to Complain:</strong> You can file a complaint with the Privacy Commissioner of Canada if you believe your privacy rights have been violated.
                </li>
              </ul>

              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}>
                9. Third-Party Services
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem', 
                color: colors.text.primary 
              }}>
                Our website may contain links to third-party websites or use third-party services, including:
              </p>
              <ul style={{ 
                marginBottom: '2rem', 
                paddingLeft: '2rem',
                color: colors.text.primary,
                lineHeight: '1.8'
              }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Google Analytics:</strong> For website analytics
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Hosting Providers:</strong> For website hosting services
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Email Service Providers:</strong> For communication with clients
                </li>
              </ul>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '2rem', 
                color: colors.text.primary 
              }}>
                These third-party services have their own privacy policies, and we are not responsible for their practices. We encourage you to review their privacy policies.
              </p>

              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}>
                10. Children's Privacy
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '2rem', 
                color: colors.text.primary 
              }}>
                Our services are not directed to children under the age of 13 (or 16 in some jurisdictions). We do not knowingly collect personal information from children under these ages. If we become aware that we have collected personal information from a child without parental consent, we will take steps to remove that information.
              </p>

              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}>
                11. Changes to Privacy Policy
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '2rem', 
                color: colors.text.primary 
              }}>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
              </p>

              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #1F7CFF, #1e40af)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}>
                12. Contact Information
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem', 
                color: colors.text.primary 
              }}>
                If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <ul style={{ 
                marginBottom: '2rem', 
                paddingLeft: '2rem',
                color: colors.text.primary,
                lineHeight: '1.8'
              }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Email:</strong> aaron@logicpros.ca
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Website:</strong> logicpros.ca
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Location:</strong> New Brunswick, Canada
                </li>
              </ul>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '2rem', 
                color: colors.text.primary 
              }}>
                <em>Disclaimer: This Privacy Policy is provided as a starting point and should not be considered legal advice. We recommend consulting with a Canadian privacy lawyer for final review to ensure compliance with all applicable privacy laws.</em>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};