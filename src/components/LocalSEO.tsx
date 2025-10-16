import { useEffect } from 'react';

// Google My Business integration component
export const GoogleMyBusinessIntegration = () => {
  useEffect(() => {
    // Add Google My Business verification meta tag
    const verificationTag = document.createElement('meta');
    verificationTag.setAttribute('name', 'google-site-verification');
    verificationTag.setAttribute('content', 'YOUR_GOOGLE_VERIFICATION_CODE'); // Replace with actual code
    document.head.appendChild(verificationTag);

    // Add Google Analytics (if needed)
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'; // Replace with actual ID
    document.head.appendChild(gtagScript);

    const gtagConfig = document.createElement('script');
    gtagConfig.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID'); // Replace with actual ID
    `;
    document.head.appendChild(gtagConfig);

    // Cleanup function
    return () => {
      const verificationTagToRemove = document.querySelector('meta[name="google-site-verification"]');
      if (verificationTagToRemove) {
        verificationTagToRemove.remove();
      }
    };
  }, []);

  return null;
};

// Local SEO utilities
export const localSEOConfig = {
  businessName: 'The Ark Spa',
  address: {
    street: 'The Ark Spa',
    city: 'Bangalore',
    state: 'Karnataka',
    country: 'India',
    postalCode: '560001',
    fullAddress: 'The Ark Spa, Bangalore, Karnataka, India'
  },
  coordinates: {
    latitude: 13.0464,
    longitude: 77.4727
  },
  contact: {
    phone: '+91 82968 46578',
    email: 'theearkspa@gmail.com',
    website: 'https://arkspa.netlify.app'
  },
  hours: {
    monday: '10:30 AM - 9:00 PM',
    tuesday: '10:30 AM - 9:00 PM',
    wednesday: '10:30 AM - 9:00 PM',
    thursday: '10:30 AM - 9:00 PM',
    friday: '10:30 AM - 9:00 PM',
    saturday: '10:30 AM - 9:00 PM',
    sunday: '10:30 AM - 9:00 PM'
  },
  services: [
    'Traditional Thai Massage',
    'Aromatherapy Massage',
    'Swedish Massage',
    'Deep Tissue Massage',
    'Foot Reflexology',
    'Balinese Massage',
    'Four Hand Massage',
    'Six Hand Massage',
    'VIP Massage Package',
    'Couple Massage'
  ],
  keywords: [
    'spa bangalore',
    'massage therapy bangalore',
    'luxury spa bangalore',
    'wellness center bangalore',
    'relaxation spa bangalore',
    'spa near me',
    'massage near me',
    'bangalore spa services',
    'karnataka spa',
    'indian spa treatments'
  ]
};

// Enhanced local business schema with more details
export const enhancedLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Spa",
  "name": localSEOConfig.businessName,
  "description": "Luxury wellness and relaxation spa offering comprehensive treatments including massage therapy, facials, and body treatments in Bangalore.",
  "url": localSEOConfig.contact.website,
  "telephone": localSEOConfig.contact.phone,
  "email": localSEOConfig.contact.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": localSEOConfig.address.street,
    "addressLocality": localSEOConfig.address.city,
    "addressRegion": localSEOConfig.address.state,
    "addressCountry": localSEOConfig.address.country,
    "postalCode": localSEOConfig.address.postalCode
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": localSEOConfig.coordinates.latitude,
    "longitude": localSEOConfig.coordinates.longitude
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Monday",
      "opens": "10:30",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Tuesday",
      "opens": "10:30",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Wednesday",
      "opens": "10:30",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Thursday",
      "opens": "10:30",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "10:30",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:30",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "10:30",
      "closes": "21:00"
    }
  ],
  "image": [
    "https://arkspa.netlify.app/assets/spa-hero.jpg",
    "https://arkspa.netlify.app/assets/spa-treatment.jpg",
    "https://arkspa.netlify.app/assets/spa-about.jpg"
  ],
  "logo": "https://arkspa.netlify.app/assets/logo.png",
  "sameAs": [
    "https://www.instagram.com/thearkspa"
  ],
  "priceRange": "₹1999-₹5000",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, Credit Card",
  "areaServed": {
    "@type": "City",
    "name": "Bangalore",
    "containedInPlace": {
      "@type": "State",
      "name": "Karnataka"
    }
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": localSEOConfig.coordinates.latitude,
      "longitude": localSEOConfig.coordinates.longitude
    },
    "geoRadius": "50000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Spa Services",
    "itemListElement": localSEOConfig.services.map(service => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service,
        "description": `${service} at The Ark Spa in Bangalore`
      }
    }))
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "5",
    "bestRating": "5",
    "worstRating": "1"
  }
};

// Location-specific content generator
export const generateLocationContent = (page: string) => {
  const locationKeywords = [
    'bangalore', 'karnataka', 'india', 'south india',
    'koramangala', 'indiranagar', 'whitefield', 'electronic city'
  ];

  const contentTemplates = {
    home: `Experience luxury spa treatments in ${locationKeywords[0]}, ${locationKeywords[1]}. The Ark Spa offers premium wellness services in the heart of ${locationKeywords[0]}.`,
    about: `Located in ${locationKeywords[0]}, ${locationKeywords[1]}, The Ark Spa has been serving the ${locationKeywords[0]} community with exceptional wellness services since 2018.`,
    services: `Our comprehensive spa services in ${locationKeywords[0]} include traditional and modern treatments designed for the ${locationKeywords[1]} wellness market.`,
    contact: `Visit our spa location in ${locationKeywords[0]}, ${locationKeywords[1]}. We're easily accessible from ${locationKeywords[2]}, ${locationKeywords[3]}, and surrounding areas.`
  };

  return contentTemplates[page as keyof typeof contentTemplates] || '';
};

// Local SEO meta tags generator
export const generateLocalSEOMetaTags = (page: string) => {
  const baseKeywords = localSEOConfig.keywords;
  const locationKeywords = ['bangalore spa', 'karnataka wellness', 'indian spa treatments'];
  const allKeywords = [...baseKeywords, ...locationKeywords].join(', ');

  return {
    keywords: allKeywords,
    geo: {
      region: 'IN-KA',
      placename: 'Bangalore',
      position: `${localSEOConfig.coordinates.latitude};${localSEOConfig.coordinates.longitude}`
    },
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
  };
};
