
import React, { useEffect } from 'react';
import '../responsive-style.css';
import { Logo } from '../components/Logo';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { colors } from '../styles/colors';

export const TermsOfServicePage = () => {
  useEffect(() => {
    // Set page title
    document.title = "Terms of Service | LogicPros";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'LogicPros terms of service - Review our terms and conditions for website design, IT services, cybersecurity, and automation services.';
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
              Terms of Service
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

        {/* Terms of Service Content */}
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
                1. Acceptance of Terms
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '2rem', 
                color: colors.text.primary 
              }}>
                By accessing or using LogicPros (LPS LogicPros Solutions Inc.) services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services or website. These Terms apply to all visitors, users, and others who access or use our services.
              </p>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '2rem', 
                color: colors.text.primary 
              }}>
                These Terms govern your use of our website (logicpros.ca) and our services, including website design, AI automations, cybersecurity, and managed IT services. Your use of our services constitutes your acceptance of these Terms.
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
                2. Services Offered
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem', 
                color: colors.text.primary 
              }}>
                LogicPros provides the following services to businesses and organizations:
              </p>
              <ul style={{ 
                marginBottom: '2rem', 
                paddingLeft: '2rem',
                color: colors.text.primary,
                lineHeight: '1.8'
              }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Website Design:</strong> Custom website development and design services
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>AI Automations:</strong> Business process automation using artificial intelligence tools
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Cybersecurity:</strong> Security audits, assessments, and protection services
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Managed IT Services:</strong> Ongoing IT support and infrastructure management
                </li>
              </ul>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '2rem', 
                color: colors.text.primary 
              }}>
                Services are provided as described in individual service agreements. LogicPros reserves the right to modify, suspend, or discontinue any service at any time without prior notice.
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
                3. Service Agreements & Contracts
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '2rem', 
                color: colors.text.primary 
              }}>
                For specific projects, individual service agreements or contracts may be established that contain additional terms and conditions specific to that project. These individual agreements will take precedence over these general Terms to the extent of any conflict.
              </p>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '2rem', 
                color: colors.text.primary 
              }}>
                The scope of work, deliverables, timelines, and specific requirements will be defined in project proposals, statements of work, or service contracts. LogicPros will perform services in accordance with these agreements.
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
                4. User Responsibilities
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem', 
                color: colors.text.primary 
              }}>
                As a user of LogicPros services, you agree to:
              </p>
              <ul style={{ 
                marginBottom: '2rem', 
                paddingLeft: '2rem',
                color: colors.text.primary,
                lineHeight: '1.8'
              }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  Provide accurate, current, and complete information as required for the provision of services
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Maintain the confidentiality of your account credentials and notify us immediately of any unauthorized use
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Use our services legally and ethically, in compliance with all applicable laws and regulations
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Not misuse our services or attempt to gain unauthorized access to our systems or client systems
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Provide timely feedback, approvals, and information necessary for project completion
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
                5. Payment Terms
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem', 
                color: colors.text.primary 
              }}>
                Payment for services is due as specified in individual service agreements or contracts. All fees are quoted and payable in Canadian dollars (CAD).
              </p>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem', 
                color: colors.text.primary 
              }}>
                Late payments may be subject to interest charges at the rate of 1.5% per month on the outstanding balance. LogicPros reserves the right to suspend services for non-payment in accordance with the terms of the service agreement.
              </p>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '2rem', 
                color: colors.text.primary 
              }}>
                Refunds, if applicable, will be handled according to the terms specified in individual service agreements. Deposits and payments for work already completed are generally non-refundable.
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
                6. Intellectual Property
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem', 
                color: colors.text.primary 
              }}>
                Upon full payment for services, LogicPros grants you a license to use the website designs, code, and other deliverables created specifically for your project. Ownership of these deliverables transfers to you upon completion of payment.
              </p>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem', 
                color: colors.text.primary 
              }}>
                Any content, images, or materials provided by you remain your property. LogicPros retains rights to its proprietary tools, methodologies, and processes used in providing services.
              </p>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '2rem', 
                color: colors.text.primary 
              }}>
                LogicPros reserves the right to display completed projects in our portfolio and marketing materials, unless specifically prohibited by a written agreement.
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
                7. Confidentiality
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem', 
                color: colors.text.primary 
              }}>
                Both parties agree to maintain confidentiality of sensitive business information shared during the course of providing services. This includes, but is not limited to, business strategies, technical information, customer data, and proprietary processes.
              </p>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '2rem', 
                color: colors.text.primary 
              }}>
                Confidentiality obligations do not apply to information that is publicly available, becomes publicly available through no fault of the receiving party, is required to be disclosed by law, or is properly obtained from a third party without restriction.
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
                8. Service Level & Availability
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem', 
                color: colors.text.primary 
              }}>
                LogicPros will make reasonable efforts to maintain service availability and performance. However, we do not guarantee 100% uptime or uninterrupted service.
              </p>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem', 
                color: colors.text.primary 
              }}>
                Scheduled maintenance may be required from time to time, which may temporarily affect service availability. We will attempt to schedule such maintenance during off-peak hours when possible.
              </p>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '2rem', 
                color: colors.text.primary 
              }}>
                Support response times will be as specified in individual service agreements. Response times may vary based on the severity of the issue and the service level purchased.
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
                9. Limitation of Liability
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem', 
                color: colors.text.primary 
              }}>
                Services are provided "as is" without warranties beyond those explicitly stated in service agreements. LogicPros makes no representations or warranties of any kind, express or implied, as to the operation of our services or the information, content, materials, or products included on our website.
              </p>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem', 
                color: colors.text.primary 
              }}>
                In no event shall LogicPros, our directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
              </p>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '2rem', 
                color: colors.text.primary 
              }}>
                Our total liability for any claims arising out of or relating to these Terms or our services shall not exceed the amount you paid for the services giving rise to the claim. You are responsible for maintaining backups of your data and information.
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
                10. Cybersecurity Services Disclaimer
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem', 
                color: colors.text.primary 
              }}>
                While LogicPros provides professional cybersecurity services, we cannot guarantee complete security against all threats. Cybersecurity is an ongoing process that requires regular updates and monitoring.
              </p>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem', 
                color: colors.text.primary 
              }}>
                Client responsibilities include implementing recommended security measures, maintaining software updates, and following security best practices. LogicPros is not liable for security breaches that result from failure to implement our recommendations or from factors outside our control.
              </p>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '2rem', 
                color: colors.text.primary 
              }}>
                Our cybersecurity services do not provide insurance against security incidents and should not be considered as such.
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
                11. Third-Party Services
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem', 
                color: colors.text.primary 
              }}>
                LogicPros may use third-party services, tools, or platforms in providing our services, including but not limited to hosting providers, domain registrars, email services, and software applications.
              </p>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem', 
                color: colors.text.primary 
              }}>
                Your use of our services may require you to agree to the terms of service of these third-party providers. LogicPros is not responsible for the availability, functionality, or terms of service of third-party services.
              </p>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '2rem', 
                color: colors.text.primary 
              }}>
                We are not liable for any damages, losses, or issues arising from your use of third-party services or their failure to perform.
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
                12. Termination
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem', 
                color: colors.text.primary 
              }}>
                Either party may terminate the service agreement with written notice as specified in the individual service agreement.
              </p>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem', 
                color: colors.text.primary 
              }}>
                LogicPros may immediately terminate or suspend access to services for any breach of these Terms or for any other reason at our sole discretion.
              </p>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.8',
                marginBottom: '1.5rem',
                color: colors.text.primary
              }}>
                Upon termination, you remain obligated to pay all outstanding fees for services rendered. LogicPros will provide you with your data and deliverables upon request, subject to payment of all outstanding amounts.
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
                13. Modifications to Terms
              </h2>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.8',
                marginBottom: '2rem',
                color: colors.text.primary
              }}>
                LogicPros reserves the right to modify these Terms of Service at any time. We will notify you of any changes by posting the updated Terms on our website and updating the "Last Updated" date.
              </p>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.8',
                marginBottom: '2rem',
                color: colors.text.primary
              }}>
                Your continued use of our services after any such modifications constitutes your acceptance of the updated Terms.
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
                14. Dispute Resolution
              </h2>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.8',
                marginBottom: '1.5rem',
                color: colors.text.primary
              }}>
                In the event of any dispute arising out of or relating to these Terms or our services, both parties agree to first attempt to resolve the dispute through good faith negotiation.
              </p>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.8',
                marginBottom: '1.5rem',
                color: colors.text.primary
              }}>
                If the dispute cannot be resolved through negotiation, the parties may agree to mediation before pursuing other remedies.
              </p>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.8',
                marginBottom: '2rem',
                color: colors.text.primary
              }}>
                These Terms shall be governed by and construed in accordance with the laws of New Brunswick, Canada, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts of New Brunswick, Canada.
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
                15. General Provisions
              </h2>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.8',
                marginBottom: '1.5rem',
                color: colors.text.primary
              }}>
                These Terms constitute the entire agreement between you and LogicPros regarding the use of our services and supersede all prior agreements, communications, and understandings.
              </p>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.8',
                marginBottom: '1.5rem',
                color: colors.text.primary
              }}>
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the remaining Terms will remain in full force and effect.
              </p>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.8',
                marginBottom: '1.5rem',
                color: colors.text.primary
              }}>
                No waiver of any term of these Terms will be deemed a further or continuing waiver of such term or any other term.
              </p>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.8',
                marginBottom: '1.5rem',
                color: colors.text.primary
              }}>
                You may not assign or transfer these Terms or your rights and obligations hereunder without our prior written consent.
              </p>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.8',
                marginBottom: '2rem',
                color: colors.text.primary
              }}>
                LogicPros will not be liable for any failure or delay in performance under these Terms due to circumstances beyond our reasonable control, including but not limited to acts of God, war, terrorism, labor disputes, or government actions.
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
                16. Contact Information
              </h2>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.8',
                marginBottom: '1.5rem',
                color: colors.text.primary
              }}>
                If you have any questions about these Terms of Service, please contact us:
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
                <em>Disclaimer: These Terms of Service are provided as a starting point and should not be considered legal advice. We recommend consulting with a Canadian business lawyer for final review to ensure compliance with all applicable laws and regulations.</em>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};