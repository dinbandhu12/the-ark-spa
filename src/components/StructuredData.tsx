import { useEffect } from 'react';

interface StructuredDataProps {
  data: any;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  useEffect(() => {
    // Remove existing structured data script
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [data]);

  return null;
};

// Local Business Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Spa",
  "name": "The Ark Spa",
  "description": "Luxury wellness and relaxation spa offering comprehensive treatments including massage therapy, facials, and body treatments in Bangalore.",
  "url": "https://thearkspa.in",
  "telephone": "+91 82968 46578",
  "email": "theearkspa@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "The Ark Spa",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "13.0464",
    "longitude": "77.4727"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:30",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday"],
      "opens": "10:30",
      "closes": "21:00"
    }
  ],
  "image": [
    "https://thearkspa.in/assets/spa-hero.jpg",
    "https://thearkspa.in/assets/spa-treatment.jpg",
    "https://thearkspa.in/assets/spa-about.jpg"
  ],
  "logo": "https://thearkspa.in/assets/logo.png",
  "sameAs": [
    "https://www.instagram.com/thearkspa"
  ],
  "priceRange": "₹1999-₹5000",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, Credit Card",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Spa Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Traditional Thai Massage",
          "description": "Full body traditional Thai massage therapy"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Aromatherapy Massage",
          "description": "Full body aromatherapy massage with essential oils"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Swedish Massage",
          "description": "Classic Swedish massage therapy"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Deep Tissue Massage",
          "description": "Therapeutic deep tissue massage"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Foot Reflexology",
          "description": "Foot reflexology treatment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Balinese Massage",
          "description": "Traditional Balinese massage therapy"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Four Hand Massage",
          "description": "Luxury four hand massage with two therapists"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Six Hand Massage",
          "description": "Ultimate luxury six hand massage with three therapists"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "VIP Massage Package",
          "description": "VIP massage with Jacuzzi, Steam and Shower facilities"
        }
      }
    ]
  }
};

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "The Ark Spa",
  "url": "https://thearkspa.in",
  "logo": "https://thearkspa.in/assets/logo.png",
  "description": "Luxury wellness and relaxation spa in Bangalore offering comprehensive treatments for body, mind, and spirit.",
  "foundingDate": "2018",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "The Ark Spa",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 82968 46578",
    "contactType": "customer service",
    "availableLanguage": ["English", "Hindi", "Kannada"]
  },
  "sameAs": [
    "https://www.instagram.com/thearkspa"
  ]
};

// Reviews Schema
export const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "The Ark Spa",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "5",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Priya Sharma"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Absolutely amazing experience! The atmosphere here is so peaceful and relaxing. The facial treatment I received was truly exceptional and left my skin glowing."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Akira Tanaka"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Wonderful spa experience! The staff's professional service and the relaxing atmosphere really impressed me. I will definitely come back again."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Maria Rodriguez"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "A truly relaxing experience. The massage was exceptional and the environment is perfect for disconnecting from daily stress. Highly recommended."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "James Thompson"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "The most luxurious spa experience I've ever had. The attention to detail and the serene atmosphere made it absolutely perfect. Worth every penny!"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Fatima Al-Zahra"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "An unforgettable experience! The service is excellent and the atmosphere is very peaceful. The treatment I received was wonderful and I will definitely return."
    }
  ]
};

// FAQ Schema
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are your operating hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are open Monday through Sunday from 10:30 AM to 9:00 PM."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to book in advance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend booking 48 hours in advance to ensure availability. Same-day appointments may be available - please call to check."
      }
    },
    {
      "@type": "Question",
      "name": "What is your starting price?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All our services start from ₹1999."
      }
    },
    {
      "@type": "Question",
      "name": "What payment methods do you accept?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We accept cash and credit cards."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer couple massages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer couple massage packages with various options including Jacuzzi facilities."
      }
    }
  ]
};
