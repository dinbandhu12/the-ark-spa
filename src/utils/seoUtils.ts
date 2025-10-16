// Dynamic sitemap generator utility
export const generateSitemap = () => {
  const baseUrl = 'https://arkspa.netlify.app';
  const currentDate = new Date().toISOString().split('T')[0];

  const pages = [
    {
      url: '/',
      priority: '1.0',
      changefreq: 'weekly',
      images: [
        {
          loc: `${baseUrl}/assets/spa-hero.jpg`,
          title: 'The Ark Spa - Luxury Wellness & Relaxation',
          caption: 'Experience ultimate relaxation at The Ark Spa'
        },
        {
          loc: `${baseUrl}/assets/spa-treatment.jpg`,
          title: 'Spa Treatment Room',
          caption: 'Luxurious spa treatment room at The Ark Spa'
        }
      ]
    },
    {
      url: '/about',
      priority: '0.8',
      changefreq: 'monthly',
      images: [
        {
          loc: `${baseUrl}/assets/spa-about.jpg`,
          title: 'About The Ark Spa',
          caption: 'Peaceful spa meditation space at The Ark Spa'
        },
        {
          loc: `${baseUrl}/assets/about-hero-bg.jpg`,
          title: 'The Ark Spa About',
          caption: 'About The Ark Spa - Your sanctuary of wellness'
        }
      ]
    },
    {
      url: '/services',
      priority: '0.9',
      changefreq: 'weekly',
      images: [
        {
          loc: `${baseUrl}/assets/services-hero-bg.png`,
          title: 'Spa Services',
          caption: 'Comprehensive range of spa services at The Ark Spa'
        },
        {
          loc: `${baseUrl}/assets/spa-treatment.jpg`,
          title: 'Spa Treatment Services',
          caption: 'Luxury spa treatments and services'
        }
      ]
    },
    {
      url: '/contact',
      priority: '0.7',
      changefreq: 'monthly',
      images: [
        {
          loc: `${baseUrl}/assets/contact-hero-bg.webp`,
          title: 'Contact The Ark Spa',
          caption: 'Get in touch with The Ark Spa'
        }
      ]
    }
  ];

  const galleryImages = Array.from({ length: 10 }, (_, i) => ({
    loc: `${baseUrl}/assets/gallery-images/img${String(i + 1).padStart(2, '0')}.webp`,
    title: `Spa Gallery Image ${i + 1}`,
    caption: `Beautiful spa interior at The Ark Spa - Image ${i + 1}`
  }));

  return {
    pages,
    galleryImages,
    baseUrl,
    currentDate
  };
};

// SEO configuration for different page types
export const seoPageTypes = {
  homepage: {
    title: 'The Ark Spa - Luxury Wellness & Relaxation | Bangalore',
    description: 'Experience ultimate relaxation at The Ark Spa in Bangalore. Luxury spa treatments, massage therapy, facials, and wellness rituals in a serene sanctuary.',
    keywords: 'spa bangalore, luxury spa, massage therapy, facial treatments, wellness center, relaxation, rejuvenation, the ark spa, bangalore spa, body treatments'
  },
  about: {
    title: 'About The Ark Spa - Your Sanctuary of Wellness | Bangalore',
    description: 'Learn about The Ark Spa\'s story, values, and mission. Founded in 2018, we provide holistic wellness experiences combining ancient traditions with modern luxury.',
    keywords: 'about ark spa, spa story, wellness mission, holistic treatments, bangalore spa history, spa values, luxury wellness'
  },
  services: {
    title: 'Spa Services & Treatments - The Ark Spa | Bangalore',
    description: 'Discover our comprehensive range of spa services including Thai massage, aromatherapy, Swedish massage, deep tissue, reflexology, and luxury VIP treatments.',
    keywords: 'spa services bangalore, massage therapy, thai massage, aromatherapy, swedish massage, deep tissue massage, reflexology, vip spa treatments, luxury spa packages'
  },
  contact: {
    title: 'Contact The Ark Spa - Book Your Appointment | Bangalore',
    description: 'Contact The Ark Spa in Bangalore. Call +91 82968 46578 or email theearkspa@gmail.com. Open 10:30 AM - 9:00 PM daily. Book your wellness experience today.',
    keywords: 'contact ark spa, spa booking bangalore, spa phone number, spa email, spa location, spa hours, book appointment'
  }
};
