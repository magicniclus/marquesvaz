import { Metadata } from 'next';
import ContactClient from './contact-client';

// Métadonnées SEO pour la page contact
export const metadata: Metadata = {
  title: "Contact - RAFCOM | Devis Gratuit Travaux Fibre Optique Paris",
  description: "Contactez RAFCOM pour vos travaux fibre optique : débouchage fourreaux, détection blocages, raccordements complexes et urgences fibre en Île-de-France. Devis gratuit et personnalisé.",
  keywords: "contact RAFCOM, devis gratuit fibre optique, contact spécialiste fibre Paris, devis débouchage fourreaux, contact urgence fibre, travaux fibre contact",
  authors: [{ name: "RAFCOM" }],
  creator: "RAFCOM",
  publisher: "RAFCOM",
  openGraph: {
    title: "Contact RAFCOM - Devis Gratuit Travaux Fibre Optique Paris",
    description: "Contactez nos experts en travaux fibre optique pour votre projet. Devis gratuit et personnalisé en Île-de-France.",
    type: "website",
    locale: "fr_FR",
    siteName: "RAFCOM - Spécialiste Travaux Fibre Optique",
  },
  twitter: {
    card: "summary",
    title: "Contact RAFCOM - Devis Gratuit Fibre Optique",
    description: "Contactez nos experts en travaux fibre optique pour votre projet en Île-de-France.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}