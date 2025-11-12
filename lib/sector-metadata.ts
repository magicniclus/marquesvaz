import { Metadata } from 'next';

export function generateSectorMetadata(
  sectorName: string,
  location: string,
  description: string,
  keywords: string[]
): Metadata {
  return {
    title: `Travaux Fibre ${location} – RAFCOM | Devis Gratuit`,
    description: description,
    keywords: keywords.join(', '),
    openGraph: {
      title: `Travaux Fibre ${location} – RAFCOM`,
      description: description,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'RAFCOM - Spécialiste Fibre Optique',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Travaux Fibre ${location} – RAFCOM`,
      description: description,
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
      canonical: `https://rafcom.net/secteur/${location.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`,
    },
  };
}
