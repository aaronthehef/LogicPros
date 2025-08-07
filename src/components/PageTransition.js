import React, { useEffect, useState } from 'react';

export const PageTransition = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="page-transition-overlay">
          <div className="transition-animation">
            <div className="loading-spinner"></div>
            <p>LogicPros</p>
          </div>
        </div>
      )}
      <div className={`page-content ${!isLoading ? 'page-loaded' : ''}`}>
        {children}
      </div>
    </>
  );
};

// Page transition styles
const transitionStyles = `
.page-transition-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: slideUp 0.5s ease-in-out 0.3s forwards;
}

.transition-animation {
  text-align: center;
  color: white;
}

.transition-animation .loading-spinner {
  border-color: rgba(255, 255, 255, 0.3);
  border-top-color: white;
  margin: 0 auto 20px;
}

.transition-animation p {
  font-size: 1.5rem;
  font-weight: 600;
  opacity: 0;
  animation: fadeIn 0.3s ease-in-out 0.2s forwards;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.page-content {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-content.page-loaded {
  opacity: 1;
  transform: translateY(0);
}

@keyframes slideUp {
  to {
    transform: translateY(-100%);
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Enhanced focus states for accessibility */
*:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

/* Professional selection styles */
::selection {
  background: var(--primary-color);
  color: white;
}

::-moz-selection {
  background: var(--primary-color);
  color: white;
}
`;

// Inject transition styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = transitionStyles;
  document.head.appendChild(styleSheet);
}