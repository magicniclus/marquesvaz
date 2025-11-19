import { Metadata } from 'next';
import { seoConfig } from './seo-config';

export function generateSectorMetadata(
  sectorName: string,
  location: string,
  description: string,
  keywords: string[]
): Metadata {
  const title = `${sectorName} ${location} - MARQUES VAZ PLACO | Devis Gratuit`;
  const metaDescription = `${description} Devis gratuit et personnalisé pour vos travaux de plaquiste à ${location}. Contactez MARQUES VAZ PLACO.`;

  return {
    title,
    description: metaDescription,
    keywords: [...keywords, 'devis gratuit', 'MARQUES VAZ PLACO', location].join(', '),
    authors: [{ name: 'MARQUES VAZ PLACO' }],
    creator: 'MARQUES VAZ PLACO',
    publisher: 'MARQUES VAZ PLACO',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seoConfig.siteUrl),
    openGraph: {
      title,
      description: metaDescription,
      url: `${seoConfig.siteUrl}/secteur/${location.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`,
      siteName: seoConfig.siteName,
      images: [
        {
          url: `${seoConfig.siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: metaDescription,
      images: [`${seoConfig.siteUrl}/og-image.jpg`],
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
    alternates: {
      canonical: `${seoConfig.siteUrl}/secteur/${location.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`,
    },
  };
}
