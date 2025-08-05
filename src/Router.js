import React from 'react';
import { ResponsiveLandingPage } from './ResponsiveLandingPage';
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

export const Router = () => {
  const [currentPath, setCurrentPath] = React.useState(
    window.location.hash.slice(1) || '/'
  );

  React.useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
      // Scroll to top when route changes
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Also scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  const renderPage = () => {
    console.log('Current path:', currentPath); // Debug log
    switch (currentPath) {
      case '/services':
        return <ServicesPage />;
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
      default:
        console.log('No route matched, showing landing page for path:', currentPath);
        return <ResponsiveLandingPage />;
    }
  };

  return renderPage();
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