const fs = require('fs');
const path = require('path');

// Read the base index.html
const buildDir = path.join(__dirname, '..', 'build');
const indexPath = path.join(buildDir, 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');

// Route-specific schemas
const routes = {
  'services/managed-it': {
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
  }
};

// Generate pre-rendered HTML for each route
Object.entries(routes).forEach(([route, data]) => {
  let modifiedHtml = indexHtml;

  // Add all schemas for this route
  data.schemas.forEach(schema => {
    const schemaScript = `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
    modifiedHtml = modifiedHtml.replace('</head>', `${schemaScript}</head>`);
  });

  const routeDir = path.join(buildDir, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  fs.writeFileSync(path.join(routeDir, 'index.html'), modifiedHtml);
  console.log(`✓ Pre-rendered ${route}`);
});

console.log(`Pre-rendering complete! Generated ${Object.keys(routes).length} routes.`);
