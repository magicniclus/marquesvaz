import { Metadata } from 'next';
import { generateMetadata } from './seo-config';

// Métadonnées pour la page d'accueil
export const homeMetadata: Metadata = generateMetadata(
  "MARQUES VAZ PLACO - Spécialiste Plaquiste Marseille",
  "MARQUES VAZ PLACO, spécialiste plaquiste à Marseille. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit et intervention rapide en PACA.",
  "/og-image.jpg",
  "/"
);

// Métadonnées pour la section services
export const servicesMetadata = {
  title: "Services Plaquiste - Cloisons, Doublage, Faux Plafonds | MARQUES VAZ PLACO",
  description: "Découvrez nos services plaquiste : cloisons sèches, doublage isolation, faux plafonds, finitions et rénovation placo. Devis gratuit à Marseille et PACA.",
  keywords: [
    "services plaquiste",
    "cloisons sèches", 
    "doublage isolation",
    "faux plafonds",
    "finitions placo",
    "travaux plaquiste Marseille"
  ]
};

// Métadonnées pour la section réalisations
export const realisationsMetadata = {
  title: "Nos Réalisations en Travaux de Plaquiste | MARQUES VAZ PLACO",
  description: "Découvrez nos dernières réalisations en travaux de plaquiste à Marseille et PACA. Projets résidentiels, commerciaux et industriels de qualité.",
  keywords: [
    "réalisations plaquiste",
    "projets placo",
    "chantiers Marseille PACA",
    "travaux plaquiste finis",
    "portfolio plaquiste"
  ]
};

// Métadonnées pour la section contact
export const contactMetadata = {
  title: "Contact et Devis Gratuit | MARQUES VAZ PLACO Spécialiste Plaquiste",
  description: "Contactez MARQUES VAZ PLACO pour un devis gratuit. Intervention à Marseille et PACA pour tous vos travaux de plaquiste. Réponse rapide garantie.",
  keywords: [
    "devis gratuit plaquiste",
    "contact spécialiste placo",
    "Marseille PACA",
    "travaux plaquiste",
    "intervention rapide"
  ]
};

// Fonction pour générer des métadonnées de section
export function generateSectionMetadata(
  section: 'services' | 'realisations' | 'contact',
  baseUrl: string = ''
): Metadata {
  const sectionData = {
    services: servicesMetadata,
    realisations: realisationsMetadata,
    contact: contactMetadata
  }[section];

  return generateMetadata(
    sectionData.title,
    sectionData.description,
    `/og-${section}.jpg`,
    `${baseUrl}#${section}`
  );
}
