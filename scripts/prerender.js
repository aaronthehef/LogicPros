const fs = require('fs');
const path = require('path');

// Read the base index.html
const buildDir = path.join(__dirname, '..', 'build');
const indexPath = path.join(buildDir, 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');

// Route-specific schemas
const routes = {
  'services/managed-it': {
    schema: {
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
      "description": "Reliable managed IT services for Fredericton and New Brunswick businesses."
    }
  },
  'services/cybersecurity': {
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Cybersecurity Services",
      "provider": {
        "@type": "LocalBusiness",
        "name": "LogicPros"
      },
      "areaServed": ["Fredericton", "Moncton", "Saint John"],
      "description": "Enterprise-level cybersecurity for small businesses in New Brunswick."
    }
  }
};

// Generate pre-rendered HTML for each route
Object.entries(routes).forEach(([route, data]) => {
  const schemaScript = `<script type="application/ld+json">${JSON.stringify(data.schema)}</script>`;
  const modifiedHtml = indexHtml.replace('</head>', `${schemaScript}</head>`);

  const routeDir = path.join(buildDir, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  fs.writeFileSync(path.join(routeDir, 'index.html'), modifiedHtml);
  console.log(`✓ Pre-rendered ${route}`);
});

console.log('Pre-rendering complete!');
