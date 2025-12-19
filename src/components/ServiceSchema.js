import React from 'react';
import { Helmet } from 'react-helmet';

export const ServiceSchema = ({
  serviceName,
  description,
  priceRange = "$$",
  url
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "provider": {
      "@type": "LocalBusiness",
      "name": "LogicPros",
      "image": "https://logicpros.ca/logicpros-new-logo.png",
      "telephone": "+1-506-478-2949",
      "email": "contact@logicpros.ca",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Fredericton",
        "addressRegion": "NB",
        "addressCountry": "CA"
      },
      "url": "https://logicpros.ca"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Fredericton",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "New Brunswick"
        }
      },
      {
        "@type": "City",
        "name": "Moncton",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "New Brunswick"
        }
      },
      {
        "@type": "City",
        "name": "Saint John",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "New Brunswick"
        }
      },
      {
        "@type": "AdministrativeArea",
        "name": "New Brunswick"
      }
    ],
    "description": description,
    "offers": {
      "@type": "Offer",
      "priceRange": priceRange,
      "availability": "https://schema.org/InStock"
    },
    "url": url || "https://logicpros.ca"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
