import { Metadata } from 'next';
import CGVClient from './cgv-client';

// Métadonnées SEO pour la page CGV
export const metadata: Metadata = {
  title: "Conditions Générales de Vente - MARQUES VAZ PLACO | CGV Plaquiste",
  description: "Consultez les Conditions Générales de Vente de MARQUES VAZ PLACO pour vos travaux de plaquiste : cloisons sèches, doublage, faux plafonds, finitions à Marseille. Garanties et modalités de service.",
  keywords: "CGV MARQUES VAZ PLACO, conditions générales vente plaquiste, garantie travaux Marseille, modalités service plaquiste, CGV artisan plaquiste",
  authors: [{ name: "MARQUES VAZ PLACO" }],
  creator: "MARQUES VAZ PLACO",
  publisher: "MARQUES VAZ PLACO",
  openGraph: {
    title: "CGV MARQUES VAZ PLACO - Conditions Générales de Vente",
    description: "Conditions Générales de Vente pour vos travaux de plaquiste à Marseille et région PACA.",
    type: "website",
    locale: "fr_FR",
    siteName: "MARQUES VAZ PLACO - Spécialiste Plaquiste",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CGVPage() {
  return <CGVClient />;
}