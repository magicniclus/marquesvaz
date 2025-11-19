import { Metadata } from 'next';
import HomeClient from './home-client';

// Métadonnées SEO pour la page d'accueil
export const metadata: Metadata = {
  title: "MARQUES VAZ PLACO - Spécialiste Plaquiste Marseille | Devis Gratuit",
  description: "MARQUES VAZ PLACO, spécialiste plaquiste à Marseille. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit et intervention rapide en PACA.",
  keywords: "plaquiste Marseille, cloisons sèches, doublage isolation, faux plafonds, finitions placo, rénovation placo, MARQUES VAZ PLACO, plaquiste PACA, devis gratuit",
  authors: [{ name: "MARQUES VAZ PLACO" }],
  creator: "MARQUES VAZ PLACO",
  publisher: "MARQUES VAZ PLACO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "MARQUES VAZ PLACO - Spécialiste Plaquiste Marseille",
    description: "Spécialiste plaquiste à Marseille. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit et intervention rapide en PACA.",
    type: "website",
    locale: "fr_FR",
    siteName: "MARQUES VAZ PLACO - Spécialiste Plaquiste",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MARQUES VAZ PLACO - Spécialiste Plaquiste Marseille",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MARQUES VAZ PLACO - Spécialiste Plaquiste",
    description: "Spécialiste plaquiste à Marseille. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo en PACA.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return <HomeClient />;
}
