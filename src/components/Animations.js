import React, { useEffect } from 'react';

export const Animations = () => {
  useEffect(() => {
    // Initialize scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all animation targets
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));

    // Typewriter effect for hero titles
    const typewriterElements = document.querySelectorAll('.typewriter-text');
    typewriterElements.forEach((element, index) => {
      const text = element.textContent;
      element.textContent = '';
      element.style.opacity = '1';
      
      let charIndex = 0;
      const delay = index * 1000; // Stagger multiple typewriter elements
      
      setTimeout(() => {
        const typeInterval = setInterval(() => {
          if (charIndex < text.length) {
            element.textContent += text.charAt(charIndex);
            charIndex++;
          } else {
            clearInterval(typeInterval);
            element.classList.add('typing-complete');
          }
        }, 50);
      }, delay);
    });

    // Floating animation for icons
    const floatingElements = document.querySelectorAll('.floating-icon');
    floatingElements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.5}s`;
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return null; // This component only adds behavior, no visual elements
};

// Inject comprehensive professional animation styles
const professionalAnimations = `
/* ===== LOADING ANIMATIONS ===== */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes rotateIn {
  from {
    opacity: 0;
    transform: rotate(-10deg) scale(0.9);
  }
  to {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
}

/* ===== FLOATING ANIMATIONS ===== */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* ===== SCROLL-TRIGGERED ANIMATIONS ===== */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.animate-on-scroll:nth-child(even) {
  transform: translateX(-50px);
}

.animate-on-scroll:nth-child(even).animate-in {
  transform: translateX(0);
}

/* ===== PROFESSIONAL CARD ANIMATIONS ===== */
.service-card, .platform-card, .automation-card, .it-service-card,
.local-service-card, .story-card, .feature-item {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.service-card::before, .platform-card::before, .automation-card::before,
.it-service-card::before, .local-service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
  transition: left 0.6s;
  z-index: 1;
}

.service-card:hover::before, .platform-card:hover::before,
.automation-card:hover::before, .it-service-card:hover::before,
.local-service-card:hover::before {
  left: 100%;
}

.service-card:hover, .platform-card:hover, .automation-card:hover,
.it-service-card:hover, .local-service-card:hover, .story-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15), 0 10px 20px rgba(0,0,0,0.1);
}

.service-card:hover .service-icon, .platform-card:hover .platform-icon,
.automation-card:hover .automation-icon, .it-service-card:hover .service-icon,
.local-service-card:hover .service-icon, .story-card:hover .story-icon {
  transform: scale(1.2) rotate(5deg);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ===== TYPEWRITER EFFECT ===== */
.typewriter-text {
  opacity: 0;
  border-right: 3px solid var(--primary-color);
  white-space: normal;
  overflow: visible;
  animation: blink 1s infinite;
  word-wrap: break-word;
  line-height: 1.2;
}

.typewriter-text.typing-complete {
  border-right: none;
  animation: none;
}

@keyframes blink {
  0%, 50% {
    border-color: var(--primary-color);
  }
  51%, 100% {
    border-color: transparent;
  }
}

/* ===== FLOATING ICONS ===== */
.floating-icon {
  animation: float 6s ease-in-out infinite;
}

.service-icon, .platform-icon, .automation-icon, .story-icon {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ===== PROFESSIONAL BUTTON EFFECTS ===== */
.btn {
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn:hover::after {
  width: 300px;
  height: 300px;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.2);
}

.btn:active {
  transform: translateY(-1px);
}

/* ===== HERO SECTION ANIMATIONS ===== */
.hero-content {
  animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-content h1 {
  animation: slideInLeft 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
  max-width: 100%;
  word-wrap: break-word;
}

.hero-content p {
  animation: slideInLeft 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both;
}

.hero-content .btn {
  animation: scaleIn 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s both;
}

/* Fix for mobile typewriter */
@media (max-width: 768px) {
  .typewriter-text {
    font-size: 2rem !important;
    line-height: 1.1;
  }
}

/* ===== SECTION TITLE ANIMATIONS ===== */
.section-title {
  position: relative;
  overflow: hidden;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color), #667eea);
  transform: translateX(-50%);
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.animate-in .section-title::after {
  width: 60px;
}

/* ===== ENHANCED GRID ANIMATIONS ===== */
.services-grid > *, .features-grid > *, .platform-grid > *,
.automation-grid > *, .it-services-grid > * {
  animation-fill-mode: both;
}

.services-grid > *:nth-child(1), .features-grid > *:nth-child(1) {
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
}

.services-grid > *:nth-child(2), .features-grid > *:nth-child(2) {
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
}

.services-grid > *:nth-child(3), .features-grid > *:nth-child(3) {
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
}

.services-grid > *:nth-child(4), .features-grid > *:nth-child(4) {
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
}

.services-grid > *:nth-child(5), .features-grid > *:nth-child(5) {
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s;
}

.services-grid > *:nth-child(6), .features-grid > *:nth-child(6) {
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
}

/* ===== LOADING SPINNER ===== */
.loading-spinner {
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 4px solid rgba(102, 126, 234, 0.3);
  border-radius: 50%;
  border-top-color: var(--primary-color);
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* ===== PROFESSIONAL TESTIMONIAL ANIMATIONS ===== */
.testimonial-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.testimonial-card:hover {
  transform: scale(1.03) translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.12);
}

.testimonial-quote {
  position: relative;
}

.testimonial-quote::before {
  content: '"';
  position: absolute;
  top: -20px;
  left: -10px;
  font-size: 4rem;
  color: var(--primary-color);
  opacity: 0.3;
  line-height: 1;
  font-family: serif;
}

/* ===== RESPONSIVE ANIMATIONS ===== */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

@media (max-width: 768px) {
  .service-card:hover, .platform-card:hover, .automation-card:hover,
  .it-service-card:hover, .local-service-card:hover, .story-card:hover {
    transform: none;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
  
  .btn:hover {
    transform: none;
  }
}
`;

// Inject styles when component loads
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = professionalAnimations;
  document.head.appendChild(styleSheet);
}