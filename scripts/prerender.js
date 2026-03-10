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

  // Inject H1 into root div so crawlers see it before JS runs
  if (meta.h1) {
    modified = modified.replace(
      '<div id="root"></div>',
      `<div id="root"><h1>${meta.h1}</h1></div>`
    );
  }

  return modified;
}

// Auto-generate BreadcrumbList from route path
function generateBreadcrumbs(route) {
  if (!route) return null;
  const nameMap = {
    'websites': 'Web Design', 'automations': 'AI Automation',
    'managed-it': 'Managed IT', 'cybersecurity': 'Cybersecurity',
    'about': 'About', 'contact': 'Contact', 'blog': 'Blog',
    'fredericton': 'Fredericton', 'moncton': 'Moncton', 'saint-john': 'Saint John',
    'web-design': 'Web Design',
  };
  const skipSegments = new Set(['services', 'locations']);
  const parts = route.split('/');
  const items = [{ name: 'Home', item: 'https://logicpros.ca' }];
  let cumulativePath = '';
  for (const part of parts) {
    cumulativePath += '/' + part;
    if (skipSegments.has(part)) continue;
    items.push({ name: nameMap[part] || part, item: 'https://logicpros.ca' + cumulativePath });
  }
  return items;
}

// Route-specific schemas
const routes = {
  // HOMEPAGE - Primary landing page, web design focused
  '': {
    meta: {
      title: 'Web Design Fredericton | LogicPros',
      description: 'Professional web design for Fredericton businesses. Custom websites with local SEO to get found on Google and win more clients.',
      keywords: 'web design Fredericton, website design New Brunswick, web designer Fredericton, website designer Moncton, web development Saint John, Fredericton web design agency, website design NB, professional websites Fredericton',
      canonical: 'https://logicpros.ca',
      h1: 'Web Design Fredericton — Websites That Actually Work',
      ogTitle: 'Web Design Fredericton | LogicPros',
      ogDescription: 'Professional web design for Fredericton businesses. Custom websites with local SEO that win more clients.'
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "WebDesign",
        "name": "LogicPros - Web Design Fredericton",
        "description": "Professional web design and digital solutions for businesses in Fredericton, Moncton, and Saint John, New Brunswick.",
        "url": "https://logicpros.ca",
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
        "areaServed": ["Fredericton", "Moncton", "Saint John", "New Brunswick"],
        "offers": {
          "@type": "Offer",
          "priceRange": "$$"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
          "@type": "LocalBusiness",
          "name": "LogicPros",
          "url": "https://logicpros.ca"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "name": "Amazing to work with from start to finish",
        "reviewBody": "Aaron at LogicPros was amazing to work with when I was building my company website. From our initial phone call all the way to the completion of the site, Aaron worked diligently, fully educated himself on what I do to provide the proper service, and had exceptional communication from start to finish. I recommend LogicPros to anyone that is looking to get their business online.",
        "author": {
          "@type": "Organization",
          "name": "IJM Builders"
        },
        "publisher": {
          "@type": "Organization",
          "name": "LogicPros"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "LogicPros",
        "description": "Web design, AI automation, and IT services for small businesses in Atlantic Canada. Based in Fredericton, New Brunswick.",
        "url": "https://logicpros.ca",
        "telephone": "+1-506-478-2949",
        "email": "contact@logicpros.ca",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Fredericton",
          "addressRegion": "NB",
          "addressCountry": "CA"
        },
        "founder": { "@type": "Person", "name": "Aaron Hefling" },
        "areaServed": ["Fredericton, NB", "Moncton, NB", "Saint John, NB", "New Brunswick"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "LogicPros Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Design", "url": "https://logicpros.ca/services/websites" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Automation", "url": "https://logicpros.ca/services/automations" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cybersecurity", "url": "https://logicpros.ca/services/cybersecurity" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Managed IT", "url": "https://logicpros.ca/services/managed-it" } }
          ]
        }
      }
    ]
  },

  'services/managed-it': {
    meta: {
      title: 'Managed IT Services Fredericton | LogicPros',
      description: 'Reliable managed IT for NB businesses. 24/7 monitoring, unlimited support, and cybersecurity protection. Flat-rate pricing.',
      keywords: 'managed IT services Fredericton, IT support New Brunswick, managed IT Moncton, IT services Saint John, business IT support NB',
      canonical: 'https://logicpros.ca/services/managed-it',
      h1: 'Managed IT Services for New Brunswick Businesses',
      ogTitle: 'Managed IT Services Fredericton | LogicPros',
      ogDescription: 'Reliable managed IT for NB businesses. 24/7 monitoring, unlimited support, flat-rate pricing.'
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
      title: 'Cybersecurity Services Fredericton | LogicPros',
      description: 'Cybersecurity for small businesses in New Brunswick. Security audits, threat monitoring, and employee training.',
      keywords: 'cybersecurity Fredericton, business security New Brunswick, IT security Moncton, cyber security Saint John, security audit NB',
      canonical: 'https://logicpros.ca/services/cybersecurity',
      h1: 'Cybersecurity Services for New Brunswick Businesses',
      ogTitle: 'Cybersecurity Services Fredericton | LogicPros',
      ogDescription: 'Cybersecurity for small businesses in New Brunswick. Security audits, threat monitoring, and employee training.'
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
      title: 'Web Design New Brunswick | LogicPros',
      description: 'Professional, SEO-optimized web design in New Brunswick. Custom websites that convert visitors into customers.',
      keywords: 'web design New Brunswick, website development NB, web designer Fredericton, website design Moncton, web development Saint John',
      canonical: 'https://logicpros.ca/services/websites',
      h1: 'Web Design New Brunswick — Built for Local Business',
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
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a website cost in Fredericton?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most business websites we build range from $2,000 to $6,000 depending on complexity. A clean, professional site with a contact form, service pages, and local SEO typically falls in the $2,500–$4,000 range. We give you a fixed quote before we start — no surprise invoices."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to build a website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most websites are live within 2–4 weeks from the time we have your content and feedback. Simple sites can move faster. We give you a clear timeline at the start of the project."
            }
          },
          {
            "@type": "Question",
            "name": "Will my website show up on Google?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — every site we build includes on-page SEO: proper title tags, meta descriptions, local schema markup, fast load times, and a sitemap submitted to Google. We build for search from day one, not as an add-on."
            }
          },
          {
            "@type": "Question",
            "name": "Do you build WordPress websites?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Most of our client websites are built on WordPress, which makes them easy to update yourself after launch. We also build custom sites depending on the project requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Can you redesign my existing website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Redesigns are a large part of what we do. We audit your current site, keep what's working (including any existing Google rankings), and rebuild the rest to perform better."
            }
          }
        ]
      }
    ]
  },
  'services/automations': {
    meta: {
      title: 'AI Automation New Brunswick | LogicPros',
      description: 'AI automation and workflow solutions for New Brunswick businesses. Automate repetitive tasks and save hours every week.',
      keywords: 'AI automation New Brunswick, workflow automation Fredericton, business automation Moncton, process automation Saint John',
      canonical: 'https://logicpros.ca/services/automations',
      h1: 'AI Automation for New Brunswick Businesses',
      ogTitle: 'AI Automation New Brunswick | LogicPros',
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
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What can AI automation actually do for a small business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The most common things we automate for small businesses: follow-up emails after a quote or inquiry, appointment reminders, Google review requests sent automatically after a job, social media posting on a schedule, and moving data between systems (like from a form into a spreadsheet or CRM) without anyone copy-pasting it."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to know how to code to use AI automation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. We build and set up the automation for you. Once it's running, you don't touch it — it just works in the background. If something needs to change, you call us."
            }
          },
          {
            "@type": "Question",
            "name": "How much does AI automation cost for a small business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A single automation (like an automatic follow-up email sequence or a review request system) typically runs $500–$1,500 to set up. More complex multi-step workflows cost more. Most clients see the setup cost recovered within a few months from time saved."
            }
          },
          {
            "@type": "Question",
            "name": "What tools do you use for automation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We primarily use n8n, which is an open-source workflow automation platform. It connects to almost any app or service — email, Google Sheets, CRMs, booking systems, social media, and more. We host it for you so there are no ongoing per-task fees like you'd pay with Zapier."
            }
          },
          {
            "@type": "Question",
            "name": "Can you build an AI chatbot for my website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We build AI chatbots that answer common customer questions, qualify leads, and collect contact information — 24/7, without you having to be available. The chatbot is trained on your business information so it gives accurate answers specific to what you offer."
            }
          }
        ]
      }
    ]
  },
  'locations/fredericton': {
    meta: {
      title: 'Web Design Fredericton | IT Services | LogicPros',
      description: 'Web design and IT services for Fredericton businesses. Websites, cybersecurity, managed IT, and automation. Free quotes.',
      keywords: 'web design Fredericton, website design Fredericton, Fredericton web designer, IT services Fredericton, managed IT Fredericton, web development Fredericton NB',
      canonical: 'https://logicpros.ca/locations/fredericton',
      h1: 'Web Design & IT Services in Fredericton, NB',
      ogTitle: 'Web Design Fredericton | IT Services | LogicPros',
      ogDescription: 'Web design and IT services for Fredericton businesses. Websites, cybersecurity, managed IT, and automation.'
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
      title: 'Web Design Moncton | IT Services | LogicPros',
      description: 'Web design and IT services for Moncton businesses. Websites, cybersecurity, managed IT, and automation. Free quotes.',
      keywords: 'web design Moncton, website design Moncton, Moncton web designer, IT services Moncton, managed IT Moncton, web development Moncton NB',
      canonical: 'https://logicpros.ca/locations/moncton',
      h1: 'Web Design & IT Services in Moncton, NB',
      ogTitle: 'Web Design Moncton | IT Services | LogicPros',
      ogDescription: 'Web design and IT services for Moncton businesses. Websites, cybersecurity, managed IT, and automation.'
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
      title: 'Web Design Saint John | IT Services | LogicPros',
      description: 'Web design and IT services for Saint John businesses. Websites, cybersecurity, managed IT, and automation. Free quotes.',
      keywords: 'web design Saint John, website design Saint John, Saint John web designer, IT services Saint John, managed IT Saint John, web development Saint John NB',
      canonical: 'https://logicpros.ca/locations/saint-john',
      h1: 'Web Design & IT Services in Saint John, NB',
      ogTitle: 'Web Design Saint John | IT Services | LogicPros',
      ogDescription: 'Web design and IT services for Saint John businesses. Websites, cybersecurity, managed IT, and automation.'
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
      title: 'Web Design Fredericton | Professional Websites | LogicPros',
      description: 'Professional websites for Fredericton businesses. Custom WordPress, local SEO, and mobile-responsive design. Free quotes.',
      keywords: 'web design Fredericton, website design Fredericton, Fredericton web designer, website designer Fredericton NB, web development Fredericton, Fredericton website design agency',
      canonical: 'https://logicpros.ca/locations/fredericton/web-design',
      h1: 'Web Design Fredericton — Professional Websites for Local Business',
      ogTitle: 'Web Design Fredericton | Professional Websites | LogicPros',
      ogDescription: 'Professional websites for Fredericton businesses. Custom WordPress, local SEO, and mobile-responsive design.'
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
      title: 'Managed IT Fredericton | IT Support NB | LogicPros',
      description: 'Managed IT services for Fredericton businesses. 24/7 monitoring, unlimited help desk support, and flat-rate pricing.',
      keywords: 'managed IT Fredericton, IT services Fredericton, IT support Fredericton, managed IT services Fredericton NB, IT company Fredericton',
      canonical: 'https://logicpros.ca/locations/fredericton/managed-it',
      h1: 'Managed IT Services in Fredericton, New Brunswick',
      ogTitle: 'Managed IT Fredericton | IT Support NB | LogicPros',
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
      title: 'Cybersecurity Fredericton | Business Security | LogicPros',
      description: 'Cybersecurity for Fredericton businesses. Security audits, threat monitoring, and employee training. Protect your business now.',
      keywords: 'cybersecurity Fredericton, IT security Fredericton, cyber security Fredericton NB, security audit Fredericton, business security Fredericton',
      canonical: 'https://logicpros.ca/locations/fredericton/cybersecurity',
      h1: 'Cybersecurity Services in Fredericton, New Brunswick',
      ogTitle: 'Cybersecurity Fredericton | Business Security | LogicPros',
      ogDescription: 'Cybersecurity for Fredericton businesses. Security audits, threat monitoring, and employee training.'
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
      title: 'Web Design Moncton | Professional Websites | LogicPros',
      description: 'Professional websites for Moncton businesses. Custom development, local SEO, and mobile-responsive design. Free quotes.',
      keywords: 'web design Moncton, website design Moncton, Moncton web designer, website designer Moncton NB, web development Moncton',
      canonical: 'https://logicpros.ca/locations/moncton/web-design',
      h1: 'Web Design Moncton — Professional Websites for Local Business',
      ogTitle: 'Web Design Moncton | Professional Websites | LogicPros',
      ogDescription: 'Professional websites for Moncton businesses. Custom development, local SEO, and mobile-responsive design.'
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
      title: 'Managed IT Moncton | IT Support NB | LogicPros',
      description: 'Managed IT services for Moncton businesses. 24/7 monitoring, unlimited help desk support, and flat-rate pricing.',
      keywords: 'managed IT Moncton, IT services Moncton, IT support Moncton, managed IT services Moncton NB, IT company Moncton',
      canonical: 'https://logicpros.ca/locations/moncton/managed-it',
      h1: 'Managed IT Services in Moncton, New Brunswick',
      ogTitle: 'Managed IT Moncton | IT Support NB | LogicPros',
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
      title: 'Cybersecurity Moncton | Business Security | LogicPros',
      description: 'Cybersecurity services for Moncton businesses. Security audits, threat monitoring, employee training, and compliance support.',
      keywords: 'cybersecurity Moncton, IT security Moncton, cyber security Moncton NB, security audit Moncton',
      canonical: 'https://logicpros.ca/locations/moncton/cybersecurity',
      h1: 'Cybersecurity Services in Moncton, New Brunswick',
      ogTitle: 'Cybersecurity Moncton | Business Security | LogicPros',
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
      title: 'Web Design Saint John | Professional Websites | LogicPros',
      description: 'Professional websites for Saint John businesses. Custom development, local SEO, and mobile-responsive design. Free quotes.',
      keywords: 'web design Saint John, website design Saint John, Saint John web designer, website designer Saint John NB, web development Saint John',
      canonical: 'https://logicpros.ca/locations/saint-john/web-design',
      h1: 'Web Design Saint John — Professional Websites for Local Business',
      ogTitle: 'Web Design Saint John | Professional Websites | LogicPros',
      ogDescription: 'Professional websites for Saint John businesses. Custom development, local SEO, and mobile-responsive design.'
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
      title: 'Managed IT Saint John | IT Support NB | LogicPros',
      description: 'Managed IT services for Saint John businesses. 24/7 monitoring, unlimited help desk support, and flat-rate pricing.',
      keywords: 'managed IT Saint John, IT services Saint John, IT support Saint John, managed IT services Saint John NB, IT company Saint John',
      canonical: 'https://logicpros.ca/locations/saint-john/managed-it',
      h1: 'Managed IT Services in Saint John, New Brunswick',
      ogTitle: 'Managed IT Saint John | IT Support NB | LogicPros',
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

  'about': {
    meta: {
      title: 'About LogicPros | Aaron Hefling | Fredericton NB',
      description: 'Aaron Hefling, founder of LogicPros. 21 years in tech, former NB Government IT lead. Web design and IT for Atlantic Canada.',
      keywords: 'about LogicPros, Aaron Hefling, web designer Fredericton, IT consultant New Brunswick, Aboriginal-owned tech company NB',
      canonical: 'https://logicpros.ca/about',
      h1: 'About LogicPros — Aaron Hefling, Fredericton NB',
      ogTitle: 'About LogicPros | Aaron Hefling',
      ogDescription: '21 years in technology. Former Government of NB IT lead. Web design and IT for Atlantic Canadian small businesses.'
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About LogicPros",
        "description": "Learn about Aaron Hefling and LogicPros — web design, AI automation, and IT services for Atlantic Canadian businesses.",
        "url": "https://logicpros.ca/about",
        "mainEntity": {
          "@type": "Person",
          "name": "Aaron Hefling",
          "jobTitle": "Founder & Technology Solutions Specialist",
          "worksFor": {
            "@type": "LocalBusiness",
            "name": "LogicPros"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Fredericton",
            "addressRegion": "NB",
            "addressCountry": "CA"
          }
        }
      }
    ]
  },

  'contact': {
    meta: {
      title: 'Contact LogicPros | Get a Free Quote | Fredericton NB',
      description: 'Get in touch with LogicPros for web design, AI automation, or IT support in NB. Free quote, no sales pitch.',
      keywords: 'contact LogicPros, web design quote Fredericton, IT support quote New Brunswick, free website quote NB',
      canonical: 'https://logicpros.ca/contact',
      h1: 'Contact LogicPros — Get a Free Quote',
      ogTitle: 'Contact LogicPros | Free Quote',
      ogDescription: 'Get a free quote for web design, AI automation, or IT support in New Brunswick. No sales pitch.'
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact LogicPros",
        "description": "Contact LogicPros for web design, AI automation, and IT services in Fredericton, Moncton, and Saint John.",
        "url": "https://logicpros.ca/contact",
        "mainEntity": {
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
        }
      }
    ]
  },

  'blog': {
    meta: {
      title: 'Blog | Web Design & Tech Tips for NB Businesses | LogicPros',
      description: 'Practical web design, AI automation, and IT tips for small businesses in New Brunswick. Written by LogicPros in Fredericton.',
      keywords: 'web design blog Fredericton, small business tech tips NB, IT advice New Brunswick, web design tips Atlantic Canada',
      canonical: 'https://logicpros.ca/blog',
      h1: 'Web Design & Tech Tips for New Brunswick Businesses',
      ogTitle: 'LogicPros Blog | Tech Tips for NB Businesses',
      ogDescription: 'Practical web design, AI automation, and IT tips for small businesses in New Brunswick.'
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "LogicPros Blog",
        "description": "Practical web design, AI automation, and IT advice for Atlantic Canadian small businesses.",
        "url": "https://logicpros.ca/blog",
        "publisher": {
          "@type": "LocalBusiness",
          "name": "LogicPros",
          "url": "https://logicpros.ca"
        }
      }
    ]
  },

  // SAINT JOHN CYBERSECURITY
  'locations/saint-john/cybersecurity': {
    meta: {
      title: 'Cybersecurity Saint John | Business Security | LogicPros',
      description: 'Cybersecurity services for Saint John businesses. Security audits, threat monitoring, employee training, and compliance support.',
      keywords: 'cybersecurity Saint John, IT security Saint John, cyber security Saint John NB, security audit Saint John',
      canonical: 'https://logicpros.ca/locations/saint-john/cybersecurity',
      h1: 'Cybersecurity Services in Saint John, New Brunswick',
      ogTitle: 'Cybersecurity Saint John | Business Security | LogicPros',
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
  },

  // FREDERICTON AI AUTOMATIONS
  'locations/fredericton/automations': {
    meta: {
      title: 'AI Automation Fredericton | LogicPros',
      description: 'AI automation for Fredericton businesses. Workflow automation, AI chatbots, email marketing, and data integrations. Free audit.',
      keywords: 'AI automation Fredericton, business automation Fredericton, workflow automation Fredericton NB, AI chatbot Fredericton, social media automation Fredericton',
      canonical: 'https://logicpros.ca/locations/fredericton/automations',
      h1: 'AI Automation Services in Fredericton, New Brunswick',
      ogTitle: 'AI Automation Fredericton | LogicPros',
      ogDescription: 'AI automation for Fredericton businesses. Workflow automation, AI chatbots, email marketing, and data integrations.'
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "AI Automation Services",
        "name": "AI Automation Fredericton",
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
        "description": "AI automation and business process automation for Fredericton businesses including workflow automation, AI chatbots, email marketing, and social media scheduling.",
        "offers": {
          "@type": "Offer",
          "priceRange": "$$"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How much does business automation cost in Fredericton?", "acceptedAnswer": { "@type": "Answer", "text": "Most projects fall in the $500–$2,500 range depending on complexity and the number of systems involved. Simple single-workflow automations start lower; multi-system integrations with AI components are at the higher end. We quote every project individually after a free audit." } },
          { "@type": "Question", "name": "Do I need to understand technology to use business automation?", "acceptedAnswer": { "@type": "Answer", "text": "No. We build and test everything, then hand it off running. You interact with the same forms, apps, and tools you already use — the automation works in the background without you needing to touch it." } },
          { "@type": "Question", "name": "How long does it take to set up a business automation?", "acceptedAnswer": { "@type": "Answer", "text": "Most automations are live within 1–3 weeks of project start. Complex multi-system integrations may take 4–6 weeks. We provide a realistic timeline during the free audit call." } },
          { "@type": "Question", "name": "What apps and tools do you connect for automation?", "acceptedAnswer": { "@type": "Answer", "text": "We can connect any combination of the 8,000+ apps supported by major automation platforms — including QuickBooks, Jobber, HubSpot, Stripe, Google Workspace, Shopify, Calendly, Mailchimp, and hundreds more." } },
          { "@type": "Question", "name": "What happens if the automation breaks after an app update?", "acceptedAnswer": { "@type": "Answer", "text": "We monitor the workflows we build and fix any breakage quickly at no charge within the first 60 days. After that, we offer an affordable support plan." } },
          { "@type": "Question", "name": "Can I start with just one automation?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Most clients start with one high-impact workflow — often the one that wastes the most time — and expand from there. There is no minimum commitment." } }
        ]
      }
    ]
  },

  // MONCTON AI AUTOMATIONS
  'locations/moncton/automations': {
    meta: {
      title: 'AI Automation Moncton | LogicPros',
      description: 'AI automation for Moncton businesses. Workflow automation, AI chatbots, email marketing, and data integrations. Free audit.',
      keywords: 'AI automation Moncton, business automation Moncton, workflow automation Moncton NB, AI chatbot Moncton, social media automation Moncton',
      canonical: 'https://logicpros.ca/locations/moncton/automations',
      h1: 'AI Automation Services in Moncton, New Brunswick',
      ogTitle: 'AI Automation Moncton | LogicPros',
      ogDescription: 'AI automation for Moncton businesses. Workflow automation, AI chatbots, email marketing, and data integrations.'
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "AI Automation Services",
        "name": "AI Automation Moncton",
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
        "description": "AI automation and business process automation for Moncton businesses including workflow automation, AI chatbots, email marketing, and social media scheduling.",
        "offers": {
          "@type": "Offer",
          "priceRange": "$$"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How much does business automation cost in Moncton?", "acceptedAnswer": { "@type": "Answer", "text": "Most projects fall in the $500–$2,500 range depending on complexity and the number of systems involved. Simple single-workflow automations start lower; multi-system integrations with AI components are at the higher end. We quote every project individually after a free audit." } },
          { "@type": "Question", "name": "Do I need to understand technology to use business automation?", "acceptedAnswer": { "@type": "Answer", "text": "No. We build and test everything, then hand it off running. You interact with the same forms, apps, and tools you already use — the automation works in the background without you needing to touch it." } },
          { "@type": "Question", "name": "How long does it take to set up a business automation?", "acceptedAnswer": { "@type": "Answer", "text": "Most automations are live within 1–3 weeks of project start. Complex multi-system integrations may take 4–6 weeks. We provide a realistic timeline during the free audit call." } },
          { "@type": "Question", "name": "What apps and tools do you connect for automation?", "acceptedAnswer": { "@type": "Answer", "text": "We can connect any combination of the 8,000+ apps supported by major automation platforms — including QuickBooks, Jobber, HubSpot, Stripe, Google Workspace, Shopify, Calendly, Mailchimp, and hundreds more." } },
          { "@type": "Question", "name": "What happens if the automation breaks after an app update?", "acceptedAnswer": { "@type": "Answer", "text": "We monitor the workflows we build and fix any breakage quickly at no charge within the first 60 days. After that, we offer an affordable support plan." } },
          { "@type": "Question", "name": "Can I start with just one automation?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Most clients start with one high-impact workflow — often the one that wastes the most time — and expand from there. There is no minimum commitment." } }
        ]
      }
    ]
  },

  // SAINT JOHN AI AUTOMATIONS
  'locations/saint-john/automations': {
    meta: {
      title: 'AI Automation Saint John | LogicPros',
      description: 'AI automation for Saint John businesses. Workflow automation, AI chatbots, email marketing, and data integrations. Free audit.',
      keywords: 'AI automation Saint John, business automation Saint John, workflow automation Saint John NB, AI chatbot Saint John, social media automation Saint John',
      canonical: 'https://logicpros.ca/locations/saint-john/automations',
      h1: 'AI Automation Services in Saint John, New Brunswick',
      ogTitle: 'AI Automation Saint John | LogicPros',
      ogDescription: 'AI automation for Saint John businesses. Workflow automation, AI chatbots, email marketing, and data integrations.'
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "AI Automation Services",
        "name": "AI Automation Saint John",
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
        "description": "AI automation and business process automation for Saint John businesses including workflow automation, AI chatbots, email marketing, and social media scheduling.",
        "offers": {
          "@type": "Offer",
          "priceRange": "$$"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How much does business automation cost in Saint John?", "acceptedAnswer": { "@type": "Answer", "text": "Most projects fall in the $500–$2,500 range depending on complexity and the number of systems involved. Simple single-workflow automations start lower; multi-system integrations with AI components are at the higher end. We quote every project individually after a free audit." } },
          { "@type": "Question", "name": "Do I need to understand technology to use business automation?", "acceptedAnswer": { "@type": "Answer", "text": "No. We build and test everything, then hand it off running. You interact with the same forms, apps, and tools you already use — the automation works in the background without you needing to touch it." } },
          { "@type": "Question", "name": "How long does it take to set up a business automation?", "acceptedAnswer": { "@type": "Answer", "text": "Most automations are live within 1–3 weeks of project start. Complex multi-system integrations may take 4–6 weeks. We provide a realistic timeline during the free audit call." } },
          { "@type": "Question", "name": "What apps and tools do you connect for automation?", "acceptedAnswer": { "@type": "Answer", "text": "We can connect any combination of the 8,000+ apps supported by major automation platforms — including QuickBooks, Jobber, HubSpot, Stripe, Google Workspace, Shopify, Calendly, Mailchimp, and hundreds more." } },
          { "@type": "Question", "name": "What happens if the automation breaks after an app update?", "acceptedAnswer": { "@type": "Answer", "text": "We monitor the workflows we build and fix any breakage quickly at no charge within the first 60 days. After that, we offer an affordable support plan." } },
          { "@type": "Question", "name": "Can I start with just one automation?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Most clients start with one high-impact workflow — often the one that wastes the most time — and expand from there. There is no minimum commitment." } }
        ]
      }
    ]
  }
};

// Generate pre-rendered HTML for each route
const sitemapUrls = [{ url: 'https://logicpros.ca', priority: '1.0' }];

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

  // Add BreadcrumbList schema
  const breadcrumbs = generateBreadcrumbs(route);
  if (breadcrumbs && breadcrumbs.length > 1) {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": crumb.name,
        "item": crumb.item
      }))
    };
    const schemaScript = `<script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>`;
    modifiedHtml = modifiedHtml.replace('</head>', `${schemaScript}</head>`);
  }

  const routeDir = path.join(buildDir, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  fs.writeFileSync(path.join(routeDir, 'index.html'), modifiedHtml);
  console.log(`✓ Pre-rendered ${route || '/'}`);

  // Collect for sitemap
  if (route) {
    const isHighPriority = route.includes('web-design') || route === 'locations/fredericton';
    const isMediumPriority = route.startsWith('locations/') || route.startsWith('services/');
    const priority = isHighPriority ? '0.9' : isMediumPriority ? '0.8' : '0.7';
    sitemapUrls.push({ url: `https://logicpros.ca/${route}`, priority });
  }
});

// Generate sitemap.xml
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(({ url, priority }) => `  <url>
    <loc>${url}</loc>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;
fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), sitemapXml);
console.log(`✓ Generated sitemap.xml (${sitemapUrls.length} URLs)`);

console.log(`\n🎉 Pre-rendering complete!`);
console.log(`   Generated ${Object.keys(routes).length} routes with SEO meta tags and schemas.`);
