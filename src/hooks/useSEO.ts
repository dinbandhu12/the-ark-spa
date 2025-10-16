import { useEffect } from 'react';

interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  robots?: string;
}

export const useSEO = (seoData: SEOData) => {
  useEffect(() => {
    // Update document title
    document.title = seoData.title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let metaTag = document.querySelector(selector) as HTMLMetaElement;
      
      if (!metaTag) {
        metaTag = document.createElement('meta');
        if (property) {
          metaTag.setAttribute('property', name);
        } else {
          metaTag.setAttribute('name', name);
        }
        document.head.appendChild(metaTag);
      }
      
      metaTag.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', seoData.description);
    if (seoData.keywords) {
      updateMetaTag('keywords', seoData.keywords);
    }
    if (seoData.robots) {
      updateMetaTag('robots', seoData.robots);
    } else {
      updateMetaTag('robots', 'index, follow');
    }

    // Additional SEO meta tags
    updateMetaTag('author', 'The Ark Spa');
    updateMetaTag('generator', 'React + Vite');
    updateMetaTag('theme-color', '#5900ff');
    updateMetaTag('msapplication-TileColor', '#5900ff');
    updateMetaTag('msapplication-config', '/browserconfig.xml');

    // Language and locale
    updateMetaTag('language', 'en');
    updateMetaTag('geo.region', 'IN-KA');
    updateMetaTag('geo.placename', 'Bangalore');
    updateMetaTag('geo.position', '13.0464;77.4727');
    updateMetaTag('ICBM', '13.0464, 77.4727');

    // Open Graph tags
    updateMetaTag('og:title', seoData.ogTitle || seoData.title, true);
    updateMetaTag('og:description', seoData.ogDescription || seoData.description, true);
    updateMetaTag('og:type', 'website', true);
    if (seoData.ogImage) {
      updateMetaTag('og:image', seoData.ogImage, true);
    }
    if (seoData.ogUrl) {
      updateMetaTag('og:url', seoData.ogUrl, true);
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', seoData.twitterCard || 'summary_large_image');
    updateMetaTag('twitter:title', seoData.twitterTitle || seoData.title);
    updateMetaTag('twitter:description', seoData.twitterDescription || seoData.description);
    if (seoData.twitterImage) {
      updateMetaTag('twitter:image', seoData.twitterImage);
    }

    // Canonical URL
    if (seoData.canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', seoData.canonical);
    } else {
      // Auto-generate canonical URL if not provided
      const canonicalUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    // Cleanup function
    return () => {
      // Reset to default title if needed
      document.title = 'The Ark Spa - Luxury Wellness & Relaxation';
    };
  }, [seoData]);
};
