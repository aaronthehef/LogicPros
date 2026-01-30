const fs = require('fs');
const path = require('path');

// Read the base index.html
const buildDir = path.join(__dirname, '..', 'build');
const indexPath = path.join(buildDir, 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');

// Helper to inject meta tags into HTML
function injectMetaTags(html, meta) {
  let modified = html;

  // Inject title
  if (meta.title) {
    modified = modified.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`);
  }

  // Inject meta description
  if (meta.description) {
    modified = modified.replace(
      /<meta name="description" content="[^"]*"/,
      `<meta name="description" content="${meta.description}"`
    );
  }

  // Inject keywords
  if (meta.keywords) {
    modified = modified.replace(
      /<meta name="keywords" content="[^"]*"/,
      `<meta name="keywords" content="${meta.keywords}"`
    );
  }

  // Inject canonical URL
  if (meta.canonical) {
    // Add canonical if not present, or replace existing
    if (modified.includes('<link rel="canonical"')) {
      modified = modified.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${meta.canonical}"`);
    } else {
      modified = modified.replace('</head>', `<link rel="canonical" href="${meta.canonical}">\n</head>`);
    }
  }

  // Inject Open Graph tags
  if (meta.ogTitle) {
    if (modified.includes('og:title')) {
      modified = modified.replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${meta.ogTitle}"`);
    } else {
      modified = modified.replace('</head>', `<meta property="og:title" content="${meta.ogTitle}">\n</head>`);
    }
  }
  if (meta.ogDescription) {
    if (modified.includes('og:description')) {
      modified = modified.replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${meta.ogDescription}"`);
    } else {
      modified = modified.replace('</head>', `<meta property="og:description" content="${meta.ogDescription}">\n</head>`);
    }
  }

  return modified;
}

// Route-specific schemas
const routes = {
  'services/managed-it': {
    meta: {
      title: 'Managed IT Services Fredericton | IT Support New Brunswick | LogicPros',
      description: 'Reliable managed IT services for Fredericton and New Brunswick businesses. 24/7 monitoring, unlimited support, cybersecurity protection, and data backups with flat-rate pricing.',
      keywords: 'managed IT services Fredericton, IT support New Brunswick, managed IT Moncton, IT services Saint John, business IT support NB',
      canonical: 'https://logicpros.ca/services/managed-it',
      ogTitle: 'Managed IT Services Fredericton | LogicPros',
      ogDescription: 'Reliable managed IT services for Fredericton and New Brunswick businesses. 24/7 monitoring, unlimited support, flat-rate pricing.'
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Managed IT Services",
        "provider": {
          "@type": "LocalBusiness",
          "name": "LogicPros",
          "telephone": "+1-506-478-2949",
          "email": "contact@logicpros.ca"
        },
        "areaServed": ["Fredericton", "Moncton", "Saint John", "New Brunswick"],
        "description": "Reliable managed IT services for Fredericton and New Brunswick businesses. 24/7 monitoring, unlimited support, cybersecurity protection, and data backups with flat-rate pricing.",
        "offers": {
          "@type": "Offer",
          "priceRange": "$$"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much do managed IT services cost in Fredericton?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Managed IT services in Fredericton typically range from $150-500/month per user depending on your needs. At LogicPros, we offer flat-rate pricing with no surprises - you pay one predictable monthly fee that includes 24/7 monitoring, unlimited support tickets, cybersecurity protection, and regular data backups."
            }
          },
          {
            "@type": "Question",
            "name": "What's included in managed IT services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our managed IT services include: 24/7 network monitoring and maintenance, unlimited help desk support, cybersecurity protection and threat monitoring, regular data backups and disaster recovery, software updates and patch management, and proactive issue resolution before problems impact your business."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need managed IT if I'm a small business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes - especially if you're a small business. Without IT support, one ransomware attack or data loss incident can shut you down for days or permanently. Managed IT is cheaper than hiring a full-time IT person and gives you enterprise-level protection at a fraction of the cost."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can you respond to IT issues?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide same-day response for urgent issues during business hours. Critical problems (like server outages or security breaches) get immediate attention. Most support tickets are resolved within 2-4 hours, and we're available 24/7 for emergencies."
            }
          },
          {
            "@type": "Question",
            "name": "Can you work with our existing IT setup?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We integrate with your existing systems - whether that's Microsoft 365, Google Workspace, on-premise servers, cloud services, or a hybrid setup. We'll assess your current infrastructure and make recommendations for improvements, but we work with what you have."
            }
          }
        ]
      }
    ]
  },
  'services/cybersecurity': {
    meta: {
      title: 'Cybersecurity Services Fredericton | Business Security NB | LogicPros',
      description: 'Enterprise-level cybersecurity for small businesses in New Brunswick. Security audits, threat monitoring, employee training, and compliance support.',
      keywords: 'cybersecurity Fredericton, business security New Brunswick, IT security Moncton, cyber security Saint John, security audit NB',
      canonical: 'https://logicpros.ca/services/cybersecurity',
      ogTitle: 'Cybersecurity Services Fredericton | LogicPros',
      ogDescription: 'Enterprise-level cybersecurity for small businesses in New Brunswick. Security audits, threat monitoring, employee training.'
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Cybersecurity Services",
        "provider": {
          "@type": "LocalBusiness",
          "name": "LogicPros",
          "telephone": "+1-506-478-2949",
          "email": "contact@logicpros.ca"
        },
        "areaServed": ["Fredericton", "Moncton", "Saint John", "New Brunswick"],
        "description": "Enterprise-level cybersecurity for small businesses in New Brunswick. Security audits, threat monitoring, employee training, and compliance support.",
        "offers": {
          "@type": "Offer",
          "priceRange": "$$"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a cybersecurity audit cost for a small business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A comprehensive cybersecurity audit for a small business in Fredericton typically costs $1,500-3,000 depending on your network size and complexity. This includes vulnerability scanning, security policy review, employee security awareness assessment, and a detailed report with actionable recommendations."
            }
          },
          {
            "@type": "Question",
            "name": "What are the most common cybersecurity threats for small businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The biggest threats we see in New Brunswick are: phishing emails targeting employees, ransomware attacks that encrypt your files, weak or reused passwords, unpatched software vulnerabilities, and inadequate backup systems. The good news? All of these are preventable with proper security measures."
            }
          },
          {
            "@type": "Question",
            "name": "Do I really need cybersecurity if I'm just a small local business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes - small businesses are actually targeted MORE than large companies because hackers know you have weaker defenses. 60% of small businesses close within 6 months of a major cyberattack. One ransomware incident or data breach can cost you tens of thousands of dollars, destroy customer trust, and put you out of business."
            }
          },
          {
            "@type": "Question",
            "name": "What's included in your cybersecurity services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our cybersecurity services include: security audits and vulnerability assessments, 24/7 threat monitoring and response, employee security awareness training, firewall and antivirus management, multi-factor authentication setup, password management solutions, regular security patches and updates, and compliance support for industry regulations."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to implement cybersecurity protections?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Basic protections (firewall, antivirus, MFA, password manager) can be set up in 1-2 weeks. A full security overhaul with employee training and advanced monitoring takes 3-4 weeks. We prioritize the highest-risk vulnerabilities first so you're protected quickly while we work on comprehensive security."
            }
          }
        ]
      }
    ]
  },
  'services/websites': {
    meta: {
      title: 'Web Design New Brunswick | Professional Website Development | LogicPros',
      description: 'Professional, SEO-optimized web design in New Brunswick. Custom websites that convert visitors into customers. Serving Fredericton, Moncton, and Saint John.',
      keywords: 'web design New Brunswick, website development NB, web designer Fredericton, website design Moncton, web development Saint John',
      canonical: 'https://logicpros.ca/services/websites',
      ogTitle: 'Web Design New Brunswick | LogicPros',
      ogDescription: 'Professional, SEO-optimized web design in New Brunswick. Custom websites that convert visitors into customers.'
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Web Design Services",
        "provider": {
          "@type": "LocalBusiness",
          "name": "LogicPros",
          "telephone": "+1-506-478-2949",
          "email": "contact@logicpros.ca"
        },
        "areaServed": ["Fredericton", "Moncton", "Saint John", "New Brunswick"],
        "description": "Professional, SEO-optimized web design in Fredericton. Custom websites that convert visitors into customers, delivered in 2-4 weeks.",
        "offers": {
          "@type": "Offer",
          "priceRange": "$$"
        }
      }
    ]
  },
  'services/automations': {
    meta: {
      title: 'AI Automation & Workflow Solutions New Brunswick | LogicPros',
      description: 'AI automation and workflow solutions for New Brunswick businesses. Automate repetitive tasks, integrate your tools, and save hours every week.',
      keywords: 'AI automation New Brunswick, workflow automation Fredericton, business automation Moncton, process automation Saint John',
      canonical: 'https://logicpros.ca/services/automations',
      ogTitle: 'AI Automation Solutions New Brunswick | LogicPros',
      ogDescription: 'AI automation and workflow solutions for New Brunswick businesses. Automate repetitive tasks and save hours every week.'
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "AI Automation & Workflow Solutions",
        "provider": {
          "@type": "LocalBusiness",
          "name": "LogicPros",
          "telephone": "+1-506-478-2949",
          "email": "contact@logicpros.ca"
        },
        "areaServed": ["Fredericton", "Moncton", "Saint John", "New Brunswick"],
        "description": "AI automation and workflow solutions for Fredericton businesses. Automate repetitive tasks, integrate your tools, and save hours every week.",
        "offers": {
          "@type": "Offer",
          "priceRange": "$$"
        }
      }
    ]
  },
  'locations/fredericton': {
    meta: {
      title: 'IT Services Fredericton | Web Design & Managed IT | LogicPros',
      description: 'IT services and web design for Fredericton businesses. Managed IT, cybersecurity, custom websites, and business automation. Local support with flat-rate pricing.',
      keywords: 'IT services Fredericton, web design Fredericton, managed IT Fredericton, cybersecurity Fredericton, IT support Fredericton NB',
      canonical: 'https://logicpros.ca/locations/fredericton',
      ogTitle: 'IT Services Fredericton | LogicPros',
      ogDescription: 'IT services and web design for Fredericton businesses. Managed IT, cybersecurity, custom websites, and business automation.'
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What IT services do you offer in Fredericton?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide managed IT services, cybersecurity, web design, and business automation for Fredericton businesses. This includes 24/7 network monitoring, help desk support, security audits, custom website development, and workflow automation."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide on-site IT support in Fredericton?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide both remote and on-site IT support in Fredericton. Most issues can be resolved remotely for faster service, but we'll come to your office when hands-on work is needed - like hardware installations, network setup, or complex troubleshooting."
            }
          },
          {
            "@type": "Question",
            "name": "How much do IT services cost in Fredericton?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Managed IT services typically cost $150-500 per user per month in Fredericton. Web design projects range from $2,000-10,000+ depending on complexity. We offer flat-rate pricing with no surprises - contact us for a free consultation and customized quote."
            }
          }
        ]
      }
    ]
  },
  'locations/moncton': {
    meta: {
      title: 'IT Services Moncton | Web Design & Managed IT | LogicPros',
      description: 'IT services and web design for Moncton businesses. Managed IT, cybersecurity, custom websites, and business automation. Local support with flat-rate pricing.',
      keywords: 'IT services Moncton, web design Moncton, managed IT Moncton, cybersecurity Moncton, IT support Moncton NB',
      canonical: 'https://logicpros.ca/locations/moncton',
      ogTitle: 'IT Services Moncton | LogicPros',
      ogDescription: 'IT services and web design for Moncton businesses. Managed IT, cybersecurity, custom websites, and business automation.'
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What IT services do you offer in Moncton?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide managed IT services, cybersecurity, web design, and business automation for Moncton businesses. This includes 24/7 network monitoring, help desk support, security audits, custom website development, and workflow automation."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide on-site IT support in Moncton?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide both remote and on-site IT support in Moncton. Most issues can be resolved remotely for faster service, but we'll come to your office when hands-on work is needed."
            }
          },
          {
            "@type": "Question",
            "name": "How much do IT services cost in Moncton?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Managed IT services typically cost $150-500 per user per month. Web design projects range from $2,000-10,000+ depending on complexity. We offer flat-rate pricing - contact us for a free consultation."
            }
          }
        ]
      }
    ]
  },
  'locations/saint-john': {
    meta: {
      title: 'IT Services Saint John | Web Design & Managed IT | LogicPros',
      description: 'IT services and web design for Saint John businesses. Managed IT, cybersecurity, custom websites, and business automation. Local support with flat-rate pricing.',
      keywords: 'IT services Saint John, web design Saint John, managed IT Saint John, cybersecurity Saint John, IT support Saint John NB',
      canonical: 'https://logicpros.ca/locations/saint-john',
      ogTitle: 'IT Services Saint John | LogicPros',
      ogDescription: 'IT services and web design for Saint John businesses. Managed IT, cybersecurity, custom websites, and business automation.'
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What IT services do you offer in Saint John?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide managed IT services, cybersecurity, web design, and business automation for Saint John businesses. This includes 24/7 network monitoring, help desk support, security audits, custom website development, and workflow automation."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide on-site IT support in Saint John?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide both remote and on-site IT support in Saint John. Most issues can be resolved remotely for faster service, but we'll come to your office when hands-on work is needed."
            }
          },
          {
            "@type": "Question",
            "name": "How much do IT services cost in Saint John?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Managed IT services typically cost $150-500 per user per month. Web design projects range from $2,000-10,000+ depending on complexity. We offer flat-rate pricing - contact us for a free consultation."
            }
          }
        ]
      }
    ]
  },

  // ============================================
  // LOCATION + SERVICE COMBO PAGES (NEW)
  // These are the KEY pages for local SEO targeting
  // ============================================

  // FREDERICTON WEB DESIGN - Primary target keyword
  'locations/fredericton/web-design': {
    meta: {
      title: 'Web Design Fredericton | Professional Website Designer NB | LogicPros',
      description: 'Professional websites for Fredericton businesses. Affordable web design services including custom WordPress development, local SEO optimization, and mobile-responsive design that gets you more customers.',
      keywords: 'web design Fredericton, website design Fredericton, Fredericton web designer, website designer Fredericton NB, web development Fredericton, Fredericton website design agency',
      canonical: 'https://logicpros.ca/locations/fredericton/web-design',
      ogTitle: 'Web Design Fredericton | Professional Website Designer | LogicPros',
      ogDescription: 'Professional websites for Fredericton businesses. Custom web design, local SEO, and mobile-responsive sites that convert.'
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Web Design",
        "name": "Web Design Fredericton",
        "provider": {
          "@type": "LocalBusiness",
          "name": "LogicPros",
          "telephone": "+1-506-478-2949",
          "email": "contact@logicpros.ca",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Fredericton",
            "addressRegion": "NB",
            "addressCountry": "CA"
          }
        },
        "areaServed": {
          "@type": "City",
          "name": "Fredericton",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "New Brunswick"
          }
        },
        "description": "Professional web design services for Fredericton businesses. Custom websites, WordPress development, SEO optimization, and responsive design.",
        "offers": {
          "@type": "Offer",
          "priceRange": "$$"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does web design cost in Fredericton?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Web design in Fredericton typically costs $2,000-$10,000+ depending on complexity. A basic business website runs $2,000-$4,000, while custom e-commerce or feature-rich sites cost more. We offer free quotes and flexible payment options."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to build a website in Fredericton?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most business websites take 2-4 weeks from start to launch. Simple sites can be done faster, while complex e-commerce or custom functionality may take 6-8 weeks. We provide a clear timeline during your free consultation."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer website maintenance for Fredericton businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer ongoing website maintenance packages including security updates, content changes, backups, and performance monitoring. This keeps your site secure and running smoothly without you having to worry about it."
            }
          }
        ]
      }
    ]
  },

  // FREDERICTON MANAGED IT
  'locations/fredericton/managed-it': {
    meta: {
      title: 'Managed IT Services Fredericton | IT Support & Monitoring | LogicPros',
      description: 'Managed IT services for Fredericton businesses. 24/7 monitoring, unlimited help desk support, cybersecurity protection, and flat-rate pricing. Local IT support you can count on.',
      keywords: 'managed IT Fredericton, IT services Fredericton, IT support Fredericton, managed IT services Fredericton NB, IT company Fredericton',
      canonical: 'https://logicpros.ca/locations/fredericton/managed-it',
      ogTitle: 'Managed IT Services Fredericton | LogicPros',
      ogDescription: 'Managed IT services for Fredericton businesses. 24/7 monitoring, unlimited support, flat-rate pricing.'
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Managed IT Services",
        "name": "Managed IT Services Fredericton",
        "provider": {
          "@type": "LocalBusiness",
          "name": "LogicPros",
          "telephone": "+1-506-478-2949",
          "email": "contact@logicpros.ca"
        },
        "areaServed": {
          "@type": "City",
          "name": "Fredericton"
        },
        "description": "Comprehensive managed IT services for Fredericton businesses including 24/7 monitoring, help desk support, and cybersecurity.",
        "offers": {
          "@type": "Offer",
          "priceRange": "$$"
        }
      }
    ]
  },

  // FREDERICTON CYBERSECURITY
  'locations/fredericton/cybersecurity': {
    meta: {
      title: 'Cybersecurity Services Fredericton | Business Security | LogicPros',
      description: 'Cybersecurity services for Fredericton businesses. Security audits, threat monitoring, employee training, and compliance support. Protect your business from cyber threats.',
      keywords: 'cybersecurity Fredericton, IT security Fredericton, cyber security Fredericton NB, security audit Fredericton, business security Fredericton',
      canonical: 'https://logicpros.ca/locations/fredericton/cybersecurity',
      ogTitle: 'Cybersecurity Services Fredericton | LogicPros',
      ogDescription: 'Cybersecurity services for Fredericton businesses. Security audits, threat monitoring, and employee training.'
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Cybersecurity Services",
        "name": "Cybersecurity Services Fredericton",
        "provider": {
          "@type": "LocalBusiness",
          "name": "LogicPros",
          "telephone": "+1-506-478-2949",
          "email": "contact@logicpros.ca"
        },
        "areaServed": {
          "@type": "City",
          "name": "Fredericton"
        },
        "description": "Enterprise-level cybersecurity for Fredericton small businesses. Security audits, threat monitoring, and employee training.",
        "offers": {
          "@type": "Offer",
          "priceRange": "$$"
        }
      }
    ]
  },

  // MONCTON WEB DESIGN
  'locations/moncton/web-design': {
    meta: {
      title: 'Web Design Moncton | Professional Website Designer NB | LogicPros',
      description: 'Professional websites for Moncton businesses. Affordable web design services including custom development, local SEO optimization, and mobile-responsive design.',
      keywords: 'web design Moncton, website design Moncton, Moncton web designer, website designer Moncton NB, web development Moncton',
      canonical: 'https://logicpros.ca/locations/moncton/web-design',
      ogTitle: 'Web Design Moncton | Professional Website Designer | LogicPros',
      ogDescription: 'Professional websites for Moncton businesses. Custom web design, local SEO, and mobile-responsive sites.'
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Web Design",
        "name": "Web Design Moncton",
        "provider": {
          "@type": "LocalBusiness",
          "name": "LogicPros",
          "telephone": "+1-506-478-2949",
          "email": "contact@logicpros.ca"
        },
        "areaServed": {
          "@type": "City",
          "name": "Moncton"
        },
        "description": "Professional web design services for Moncton businesses.",
        "offers": {
          "@type": "Offer",
          "priceRange": "$$"
        }
      }
    ]
  },

  // MONCTON MANAGED IT
  'locations/moncton/managed-it': {
    meta: {
      title: 'Managed IT Services Moncton | IT Support & Monitoring | LogicPros',
      description: 'Managed IT services for Moncton businesses. 24/7 monitoring, unlimited help desk support, cybersecurity protection, and flat-rate pricing.',
      keywords: 'managed IT Moncton, IT services Moncton, IT support Moncton, managed IT services Moncton NB, IT company Moncton',
      canonical: 'https://logicpros.ca/locations/moncton/managed-it',
      ogTitle: 'Managed IT Services Moncton | LogicPros',
      ogDescription: 'Managed IT services for Moncton businesses. 24/7 monitoring, unlimited support, flat-rate pricing.'
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Managed IT Services",
        "name": "Managed IT Services Moncton",
        "provider": {
          "@type": "LocalBusiness",
          "name": "LogicPros",
          "telephone": "+1-506-478-2949",
          "email": "contact@logicpros.ca"
        },
        "areaServed": {
          "@type": "City",
          "name": "Moncton"
        },
        "description": "Comprehensive managed IT services for Moncton businesses.",
        "offers": {
          "@type": "Offer",
          "priceRange": "$$"
        }
      }
    ]
  },

  // MONCTON CYBERSECURITY
  'locations/moncton/cybersecurity': {
    meta: {
      title: 'Cybersecurity Services Moncton | Business Security | LogicPros',
      description: 'Cybersecurity services for Moncton businesses. Security audits, threat monitoring, employee training, and compliance support.',
      keywords: 'cybersecurity Moncton, IT security Moncton, cyber security Moncton NB, security audit Moncton',
      canonical: 'https://logicpros.ca/locations/moncton/cybersecurity',
      ogTitle: 'Cybersecurity Services Moncton | LogicPros',
      ogDescription: 'Cybersecurity services for Moncton businesses. Security audits, threat monitoring, and employee training.'
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Cybersecurity Services",
        "name": "Cybersecurity Services Moncton",
        "provider": {
          "@type": "LocalBusiness",
          "name": "LogicPros",
          "telephone": "+1-506-478-2949",
          "email": "contact@logicpros.ca"
        },
        "areaServed": {
          "@type": "City",
          "name": "Moncton"
        },
        "description": "Enterprise-level cybersecurity for Moncton small businesses.",
        "offers": {
          "@type": "Offer",
          "priceRange": "$$"
        }
      }
    ]
  },

  // SAINT JOHN WEB DESIGN
  'locations/saint-john/web-design': {
    meta: {
      title: 'Web Design Saint John | Professional Website Designer NB | LogicPros',
      description: 'Professional websites for Saint John businesses. Affordable web design services including custom development, local SEO optimization, and mobile-responsive design.',
      keywords: 'web design Saint John, website design Saint John, Saint John web designer, website designer Saint John NB, web development Saint John',
      canonical: 'https://logicpros.ca/locations/saint-john/web-design',
      ogTitle: 'Web Design Saint John | Professional Website Designer | LogicPros',
      ogDescription: 'Professional websites for Saint John businesses. Custom web design, local SEO, and mobile-responsive sites.'
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Web Design",
        "name": "Web Design Saint John",
        "provider": {
          "@type": "LocalBusiness",
          "name": "LogicPros",
          "telephone": "+1-506-478-2949",
          "email": "contact@logicpros.ca"
        },
        "areaServed": {
          "@type": "City",
          "name": "Saint John"
        },
        "description": "Professional web design services for Saint John businesses.",
        "offers": {
          "@type": "Offer",
          "priceRange": "$$"
        }
      }
    ]
  },

  // SAINT JOHN MANAGED IT
  'locations/saint-john/managed-it': {
    meta: {
      title: 'Managed IT Services Saint John | IT Support & Monitoring | LogicPros',
      description: 'Managed IT services for Saint John businesses. 24/7 monitoring, unlimited help desk support, cybersecurity protection, and flat-rate pricing.',
      keywords: 'managed IT Saint John, IT services Saint John, IT support Saint John, managed IT services Saint John NB, IT company Saint John',
      canonical: 'https://logicpros.ca/locations/saint-john/managed-it',
      ogTitle: 'Managed IT Services Saint John | LogicPros',
      ogDescription: 'Managed IT services for Saint John businesses. 24/7 monitoring, unlimited support, flat-rate pricing.'
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Managed IT Services",
        "name": "Managed IT Services Saint John",
        "provider": {
          "@type": "LocalBusiness",
          "name": "LogicPros",
          "telephone": "+1-506-478-2949",
          "email": "contact@logicpros.ca"
        },
        "areaServed": {
          "@type": "City",
          "name": "Saint John"
        },
        "description": "Comprehensive managed IT services for Saint John businesses.",
        "offers": {
          "@type": "Offer",
          "priceRange": "$$"
        }
      }
    ]
  },

  // SAINT JOHN CYBERSECURITY
  'locations/saint-john/cybersecurity': {
    meta: {
      title: 'Cybersecurity Services Saint John | Business Security | LogicPros',
      description: 'Cybersecurity services for Saint John businesses. Security audits, threat monitoring, employee training, and compliance support.',
      keywords: 'cybersecurity Saint John, IT security Saint John, cyber security Saint John NB, security audit Saint John',
      canonical: 'https://logicpros.ca/locations/saint-john/cybersecurity',
      ogTitle: 'Cybersecurity Services Saint John | LogicPros',
      ogDescription: 'Cybersecurity services for Saint John businesses. Security audits, threat monitoring, and employee training.'
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Cybersecurity Services",
        "name": "Cybersecurity Services Saint John",
        "provider": {
          "@type": "LocalBusiness",
          "name": "LogicPros",
          "telephone": "+1-506-478-2949",
          "email": "contact@logicpros.ca"
        },
        "areaServed": {
          "@type": "City",
          "name": "Saint John"
        },
        "description": "Enterprise-level cybersecurity for Saint John small businesses.",
        "offers": {
          "@type": "Offer",
          "priceRange": "$$"
        }
      }
    ]
  }
};

// Generate pre-rendered HTML for each route
Object.entries(routes).forEach(([route, data]) => {
  let modifiedHtml = indexHtml;

  // Inject meta tags if present
  if (data.meta) {
    modifiedHtml = injectMetaTags(modifiedHtml, data.meta);
  }

  // Add all schemas for this route
  if (data.schemas) {
    data.schemas.forEach(schema => {
      const schemaScript = `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
      modifiedHtml = modifiedHtml.replace('</head>', `${schemaScript}</head>`);
    });
  }

  const routeDir = path.join(buildDir, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  fs.writeFileSync(path.join(routeDir, 'index.html'), modifiedHtml);
  console.log(`✓ Pre-rendered ${route}`);
});

console.log(`\n🎉 Pre-rendering complete!`);
console.log(`   Generated ${Object.keys(routes).length} routes with SEO meta tags and schemas.`);
