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
  title: "MARQUES VAZ PLACO - Spécialiste Plaquiste à Marseille",
  description: "Marques Vaz Placo, entrepreneur du bâtiment spécialisé en travaux de plaquiste : cloisons sèches, doublage, faux plafonds, finitions à Marseille et région PACA. Devis gratuit.",
  keywords: [
    "plaquiste Marseille",
    "cloisons sèches Marseille",
    "doublage murs Marseille",
    "faux plafonds Marseille",
    "finitions placo Marseille",
    "travaux plaquiste PACA",
    "MARQUES VAZ PLACO",
    "placo Provence-Alpes-Côte d'Azur",
    "entrepreneur plaquiste Marseille",
    "devis gratuit plaquiste",
    "spécialiste placo Marseille",
    "rénovation placo Marseille",
    "isolation thermique Marseille"
  ],
  author: "MARQUES VAZ PLACO",
  siteUrl: "https://marquesvazplaco.fr",
  siteName: "MARQUES VAZ PLACO - Spécialiste Plaquiste Marseille",
  locale: "fr_FR",
  type: "website",
  image: "/og-image.jpg",
  twitterHandle: "@marquesvazplaco"
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
  "name": "MARQUES VAZ PLACO",
  "legalName": "Marques Vaz Placo - Spécialiste plaquiste à Marseille",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/logo.png`,
  "image": `${seoConfig.siteUrl}/og-image.jpg`,
  "description": seoConfig.description,
  "founder": {
    "@type": "Person",
    "name": "Amilton Vaz"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Marseille",
    "addressLocality": "Marseille",
    "postalCode": "13000",
    "addressRegion": "Provence-Alpes-Côte d'Azur",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "0659764995",
    "contactType": "customer service",
    "email": "amiltonvazmarques@gmail.com",
    "availableLanguage": "French"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Provence-Alpes-Côte d'Azur"
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Bouches-du-Rhône"
    },
    {
      "@type": "City",
      "name": "Marseille"
    },
    {
      "@type": "City",
      "name": "Aix-en-Provence"
    },
    {
      "@type": "City",
      "name": "Aubagne"
    }
  ],
  "serviceType": [
    "Travaux de Plaquiste",
    "Cloisons Sèches", 
    "Doublage et Isolation",
    "Faux Plafonds",
    "Finitions et Bandes",
    "Rénovation Placo",
    "Isolation Thermique",
    "Isolation Phonique",
    "Aménagement Intérieur"
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
    "name": "Services de plaquiste",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloisons Sèches",
          "description": "Pose professionnelle de cloisons sèches en plaques de plâtre pour création d'espaces et séparation de pièces"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Doublage et Isolation",
          "description": "Doublage professionnel des murs avec isolation thermique et phonique pour améliorer le confort"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Faux Plafonds",
          "description": "Installation de faux plafonds suspendus avec intégration d'éclairage et isolation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Finitions et Bandes",
          "description": "Réalisation de finitions parfaites avec pose de bandes, enduits et préparation pour peinture"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Rénovation Placo",
          "description": "Réparation et rénovation de cloisons existantes, remise en état et modernisation"
        }
      }
    ]
  }
};
