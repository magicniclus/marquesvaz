import { Metadata } from 'next';
import HomeClient from './home-client';

// Métadonnées SEO pour la page d'accueil
export const metadata: Metadata = {
  title: "RAFCOM - Spécialiste Travaux Fibre Optique Île-de-France | Devis Gratuit",
  description: "RAFCOM, spécialiste travaux fibre optique en Île-de-France. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit et intervention rapide.",
  keywords: "travaux fibre optique, fourreau bouché, détection point blocage, raccordement fibre complexe, urgence fibre, débouchage fourreaux, RAFCOM, fibre optique Île-de-France, devis gratuit",
  authors: [{ name: "RAFCOM" }],
  creator: "RAFCOM",
  publisher: "RAFCOM",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "RAFCOM - Spécialiste Travaux Fibre Optique Île-de-France",
    description: "Spécialiste travaux fibre optique en Île-de-France. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit et intervention rapide.",
    type: "website",
    locale: "fr_FR",
    siteName: "RAFCOM - Spécialiste Fibre Optique",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RAFCOM - Spécialiste Travaux Fibre Optique Île-de-France",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RAFCOM - Spécialiste Travaux Fibre Optique",
    description: "Spécialiste travaux fibre optique en Île-de-France. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre.",
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
