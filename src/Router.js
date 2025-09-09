import React from 'react';
import { ResponsiveLandingPage } from './ResponsiveLandingPage';
import { PageTransition } from './components/PageTransition';
import { ServicesPage } from './pages/ServicesPage';
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
import { AutomationsPage } from './pages/services/AutomationsPage';
import { ITServicesPage } from './pages/services/ITServicesPage';
import { CybersecurityPage } from './pages/services/CybersecurityPage';
import { SecurityAuditPage } from './pages/services/SecurityAuditPage';
import { PasswordManagementPage } from './pages/services/PasswordManagementPage';
import { MFAPage } from './pages/services/MFAPage';
import { ManagedITServicesPage } from './pages/services/ManagedITServicesPage';
import { FrederictonPage } from './pages/locations/FrederictonPage';
import { MonctonPage } from './pages/locations/MonctonPage';
import { SaintJohnPage } from './pages/locations/SaintJohnPage';
import { FrederictonWebDesignPage } from './pages/locations/fredericton/WebDesignPage';
import { FrederictonCybersecurityPage } from './pages/locations/fredericton/CybersecurityPage';
import { SaintJohnWebDesignPage } from './pages/locations/saint-john/WebDesignPage';
import { SaintJohnCybersecurityPage } from './pages/locations/saint-john/CybersecurityPage';
import { MonctonWebDesignPage } from './pages/locations/moncton/WebDesignPage';
import { MonctonCybersecurityPage } from './pages/locations/moncton/CybersecurityPage';

export const Router = () => {
  const [currentPath, setCurrentPath] = React.useState(() => {
    // Support both hash routing (development) and clean URLs (production)
    const hashPath = window.location.hash.slice(1);
    const pathname = window.location.pathname;
    return hashPath || pathname || '/';
  });

  React.useEffect(() => {
    const handleRouteChange = () => {
      const hashPath = window.location.hash.slice(1);
      const pathname = window.location.pathname;
      setCurrentPath(hashPath || pathname || '/');
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
        return <ITServicesPage />;
      case '/portfolio':
        return <PortfolioPage />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      case '/free-example':
        return <FreeExamplePage />;
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
      case '/locations/saint-john/web-design':
        return <SaintJohnWebDesignPage />;
      case '/locations/saint-john/cybersecurity':
        return <SaintJohnCybersecurityPage />;
      case '/locations/moncton/web-design':
        return <MonctonWebDesignPage />;
      case '/locations/moncton/cybersecurity':
        return <MonctonCybersecurityPage />;
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

// Update links to use hash routing
if (typeof window !== 'undefined') {
  // Override link clicks to use hash routing
  document.addEventListener('click', (e) => {
    // Find the closest anchor tag (in case we clicked on a child element)
    const anchor = e.target.closest('a');
    if (anchor && anchor.href.includes('/')) {
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('/') && !href.startsWith('//') && !href.includes('mailto:') && !href.includes('tel:')) {
        e.preventDefault();
        console.log('Navigating to:', href); // Debug log
        window.location.hash = href;
      }
    }
  });
}