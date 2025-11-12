import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  siteUrl: string;
  siteName: string;
  locale: string;
  type: string;
  image: string;
  twitterHandle?: string;
}

export const seoConfig: SEOConfig = {
  title: "RAFCOM - Spécialiste Travaux Fibre Optique à Paris",
  description: "RAFCOM, spécialiste des travaux fibre optique : débouchage fourreaux, détection blocages, raccordements complexes et urgences fibre en Île-de-France. Devis gratuit.",
  keywords: [
    "travaux fibre optique Paris",
    "débouchage fourreaux Paris",
    "détection point blocage fibre",
    "raccordement fibre complexe",
    "urgence fibre optique",
    "travaux télécommunications Paris",
    "RAFCOM",
    "fibre optique Île-de-France",
    "entrepreneur fibre optique",
    "devis gratuit fibre",
    "spécialiste fibre optique",
    "installation fibre optique",
    "maintenance fibre optique"
  ],
  author: "RAFCOM",
  siteUrl: "https://rafcom.net",
  siteName: "RAFCOM - Spécialiste Travaux Fibre Optique",
  locale: "fr_FR",
  type: "website",
  image: "/og-image.jpg",
  twitterHandle: "@rafcom"
};

export function generateMetadata(
  title?: string,
  description?: string,
  image?: string,
  url?: string
): Metadata {
  const metaTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.title;
  const metaDescription = description || seoConfig.description;
  const metaImage = image || seoConfig.image;
  const metaUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: seoConfig.keywords.join(', '),
    authors: [{ name: seoConfig.author }],
    creator: seoConfig.author,
    publisher: seoConfig.author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: {
      canonical: metaUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      siteName: seoConfig.siteName,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: seoConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: seoConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  };
}

// Données structurées pour l'entreprise
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${seoConfig.siteUrl}#organization`,
  "name": "RAFCOM",
  "legalName": "RAFCOM - Spécialiste Travaux Fibre Optique",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/logo.png`,
  "image": `${seoConfig.siteUrl}/og-image.jpg`,
  "description": seoConfig.description,
  "founder": {
    "@type": "Person",
    "name": "Rafik Hamel"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "200 rue de la Croix Nivert",
    "addressLocality": "Paris",
    "postalCode": "75015",
    "addressRegion": "Île-de-France",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "0783490136",
    "contactType": "customer service",
    "email": "contact@rafcom.net",
    "availableLanguage": "French"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Île-de-France"
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Paris"
    },
    {
      "@type": "City",
      "name": "Paris 20e"
    },
    {
      "@type": "City",
      "name": "Belleville"
    },
    {
      "@type": "City",
      "name": "Ménilmontant"
    }
  ],
  "serviceType": [
    "Travaux Fibre Optique",
    "Débouchage Fourreaux Télécommunications", 
    "Détection Points de Blocage",
    "Raccordements Fibre Complexes",
    "Interventions d'Urgence Fibre",
    "Installation Fibre Optique",
    "Maintenance Réseaux Fibre",
    "Télécommunications",
    "Expertise Technique Fibre"
  ],
  "priceRange": "€€",
  "openingHours": "Mo-Sa 08:00-18:00",
  "sameAs": [
    `${seoConfig.siteUrl}`,
  ]
};

// Schema pour les services
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Construction Services",
  "provider": {
    "@id": `${seoConfig.siteUrl}#organization`
  },
  "areaServed": organizationSchema.areaServed,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de rénovation",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Peinture et Ravalement",
          "description": "Spécialisés en peinture générale et ravalement, intérieur et extérieur"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Électricité et Plomberie",
          "description": "Installation et rénovation électricité et plomberie, conformes aux normes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Rénovation globale",
          "description": "Transformations et nettoyage, rénovation complète de vos espaces"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Cloisons Sèches",
          "description": "Installation de cloisons sèches et aménagement d'espaces intérieurs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Doublages et Isolation",
          "description": "Doublages et isolation thermique et phonique de vos murs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Faux Plafonds",
          "description": "Installation de faux plafonds et plafonds suspendus avec intégration d'éclairage"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Finitions Plâtrerie",
          "description": "Finitions plâtrerie, enduits, lissage et préparation surfaces"
        }
      }
    ]
  }
};
