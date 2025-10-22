import React from 'react';
import { ResponsiveLandingPage } from './ResponsiveLandingPage';
import { PageTransition } from './components/PageTransition';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FreeExamplePage } from './pages/FreeExamplePage';
import { PlumbingPage } from './pages/contractors/PlumbingPage';
import { ElectricalPage } from './pages/contractors/ElectricalPage';
import { HVACPage } from './pages/contractors/HVACPage';
import { RoofingPage } from './pages/contractors/RoofingPage';
import { ConstructionPage } from './pages/contractors/ConstructionPage';
import { LandscapingPage } from './pages/contractors/LandscapingPage';
import { PaintingPage } from './pages/contractors/PaintingPage';
import { FlooringPage } from './pages/contractors/FlooringPage';
import { ConcretePage } from './pages/contractors/ConcretePage';
import { RemodelingPage } from './pages/contractors/RemodelingPage';
import { WebsitesPage } from './pages/services/WebsitesPage';
import { CustomWebsitesPage } from './pages/services/CustomWebsitesPage';
import { EcommerceWebsitesPage } from './pages/EcommerceWebsitesPage';
import { WebsiteRedesignPage } from './pages/services/WebsiteRedesignPage';
import { SEOMarketingPage } from './pages/services/SEOMarketingPage';
import { BusinessAutomationPage } from './pages/services/BusinessAutomationPage';
import { AIChatbotsPage } from './pages/services/AIChatbotsPage';
import { WorkflowAutomationPage } from './pages/services/WorkflowAutomationPage';
import { ITHelpdeskPage } from './pages/services/ITHelpdeskPage';
import { NetworkManagementPage } from './pages/services/NetworkManagementPage';
import { CloudServicesPage } from './pages/services/CloudServicesPage';
import { ITConsultingPage } from './pages/services/ITConsultingPage';
import { AutomationsPage } from './pages/services/AutomationsPage';
import { ITServicesPage } from './pages/services/ITServicesPage';
import { CybersecurityPage } from './pages/services/CybersecurityPage';
import { SecurityAuditPage } from './pages/services/SecurityAuditPage';
import { PasswordManagementPage } from './pages/services/PasswordManagementPage';
import { MFAPage } from './pages/services/MFAPage';
import { ManagedITServicesPage } from './pages/services/ManagedITServicesPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { FrederictonPage } from './pages/locations/FrederictonPage';
import { MonctonPage } from './pages/locations/MonctonPage';
import { SaintJohnPage } from './pages/locations/SaintJohnPage';
import { FrederictonWebDesignPage } from './pages/locations/fredericton/WebDesignPage';
import { FrederictonCybersecurityPage } from './pages/locations/fredericton/CybersecurityPage';
import { ManagedITServicesPage as FrederictonManagedITPage } from './pages/locations/fredericton/ManagedITPage';
import { SaintJohnWebDesignPage } from './pages/locations/saint-john/WebDesignPage';
import { SaintJohnCybersecurityPage } from './pages/locations/saint-john/CybersecurityPage';
import { ManagedITServicesPage as SaintJohnManagedITPage } from './pages/locations/saint-john/ManagedITPage';
import { MonctonWebDesignPage } from './pages/locations/moncton/WebDesignPage';
import { MonctonCybersecurityPage } from './pages/locations/moncton/CybersecurityPage';
import { ManagedITServicesPage as MonctonManagedITPage } from './pages/locations/moncton/ManagedITPage';

export const Router = () => {
  const [currentPath, setCurrentPath] = React.useState(() => {
    // Use clean URLs (pathname) - hash routing only as fallback
    const pathname = window.location.pathname;
    const hashPath = window.location.hash.slice(1);
    return pathname !== '/' ? pathname : (hashPath || '/');
  });

  React.useEffect(() => {
    const handleRouteChange = () => {
      const pathname = window.location.pathname;
      const hashPath = window.location.hash.slice(1);
      setCurrentPath(pathname !== '/' ? pathname : (hashPath || '/'));
      // Scroll to top when route changes
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Also scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  const renderPage = () => {
    console.log('Current path:', currentPath); // Debug log
    switch (currentPath) {
      case '/services':
        // Redirect to home page services section
        window.location.hash = '/#services';
        return <ResponsiveLandingPage />;
      case '/portfolio':
        return <PortfolioPage />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      case '/free-example':
        return <FreeExamplePage />;
      case '/privacy':
        return <PrivacyPolicyPage />;
      case '/terms':
        return <TermsOfServicePage />;
      case '/contractors/plumbing':
        return <PlumbingPage />;
      case '/contractors/electrical':
        return <ElectricalPage />;
      case '/contractors/hvac':
        return <HVACPage />;
      case '/contractors/roofing':
        return <RoofingPage />;
      case '/contractors/construction':
        return <ConstructionPage />;
      case '/contractors/landscaping':
        return <LandscapingPage />;
      case '/contractors/painting':
        return <PaintingPage />;
      case '/contractors/flooring':
        return <FlooringPage />;
      case '/contractors/concrete':
        return <ConcretePage />;
      case '/contractors/remodeling':
        return <RemodelingPage />;
      case '/services/websites':
        return <WebsitesPage />;
      case '/services/websites/custom':
        return <CustomWebsitesPage />;
      case '/services/websites/ecommerce':
        return <EcommerceWebsitesPage />;
      case '/services/websites/redesign':
        return <WebsiteRedesignPage />;
      case '/services/websites/seo':
        return <SEOMarketingPage />;
      case '/services/automations/business':
        return <BusinessAutomationPage />;
      case '/services/automations/chatbots':
        return <AIChatbotsPage />;
      case '/services/automations/workflow':
        return <WorkflowAutomationPage />;
      case '/services/managed-it/helpdesk':
        return <ITHelpdeskPage />;
      case '/services/managed-it/network-management':
        return <NetworkManagementPage />;
      case '/services/managed-it/cloud-services':
        return <CloudServicesPage />;
      case '/services/managed-it/consulting':
        return <ITConsultingPage />;
      case '/services/automations':
        return <AutomationsPage />;
      case '/services/it-services':
        return <ITServicesPage />;
      case '/services/cybersecurity':
        return <CybersecurityPage />;
      case '/services/security-audits':
        return <SecurityAuditPage />;
      case '/services/password-management':
        return <PasswordManagementPage />;
      case '/services/multi-factor-authentication':
        return <MFAPage />;
      case '/services/managed-it':
        return <ManagedITServicesPage />;
      case '/locations/fredericton':
        return <FrederictonPage />;
      case '/locations/fredericton/web-design':
        return <FrederictonWebDesignPage />;
      case '/locations/fredericton/cybersecurity':
        return <FrederictonCybersecurityPage />;
      case '/locations/fredericton/managed-it':
        return <FrederictonManagedITPage />;
      case '/locations/saint-john/web-design':
        return <SaintJohnWebDesignPage />;
      case '/locations/saint-john/cybersecurity':
        return <SaintJohnCybersecurityPage />;
      case '/locations/saint-john/managed-it':
        return <SaintJohnManagedITPage />;
      case '/locations/moncton/web-design':
        return <MonctonWebDesignPage />;
      case '/locations/moncton/cybersecurity':
        return <MonctonCybersecurityPage />;
      case '/locations/moncton/managed-it':
        return <MonctonManagedITPage />;
      case '/locations/moncton':
        return <MonctonPage />;
      case '/locations/saint-john':
        return <SaintJohnPage />;
      default:
        console.log('No route matched, showing landing page for path:', currentPath);
        return <ResponsiveLandingPage />;
    }
  };

  return (
    <PageTransition key={currentPath}>
      {renderPage()}
    </PageTransition>
  );
};

// Handle link clicks for SPA navigation with clean URLs
if (typeof window !== 'undefined') {
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a');
    if (anchor && anchor.href) {
      const href = anchor.getAttribute('href');
      // Only handle internal links (starting with /)
      if (href && href.startsWith('/') && !href.startsWith('//') && !href.includes('mailto:') && !href.includes('tel:')) {
        e.preventDefault();
        console.log('Navigating to:', href);
        // Use pushState for clean URLs
        window.history.pushState({}, '', href);
        // Trigger popstate to update the router
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    }
  });
}