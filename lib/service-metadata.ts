import { Metadata } from 'next';
import { seoConfig } from './seo-config';

// Fonction utilitaire pour générer les métadonnées SEO des pages services
export function generateServiceMetadata(
  serviceName: string,
  location: string,
  description: string,
  keywords: string[]
): Metadata {
  const title = `${serviceName} ${location} - RAFCOM | Devis Gratuit`;
  const metaDescription = `${description} Devis gratuit et personnalisé pour vos travaux de ${serviceName.toLowerCase()} à ${location}. Contactez RAFCOM.`;

  return {
    title,
    description: metaDescription,
    keywords: [...keywords, 'devis gratuit', 'RAFCOM', location].join(', '),
    authors: [{ name: 'RAFCOM' }],
    creator: 'RAFCOM',
    publisher: 'RAFCOM',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seoConfig.siteUrl),
    openGraph: {
      title,
      description: metaDescription,
      url: `${seoConfig.siteUrl}/services/${serviceName.toLowerCase().replace(/\s+/g, '-').replace(/é/g, 'e')}`,
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
  };
}
