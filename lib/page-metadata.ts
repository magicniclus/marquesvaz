import { Metadata } from 'next';
import { generateMetadata } from './seo-config';

// Métadonnées pour la page d'accueil
export const homeMetadata: Metadata = generateMetadata(
  "RAFCOM - Spécialiste Travaux Fibre Optique Île-de-France",
  "RAFCOM, spécialiste travaux fibre optique en Île-de-France. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit et intervention rapide.",
  "/og-rafcom-home.jpg",
  "/"
);

// Métadonnées pour la section services
export const servicesMetadata = {
  title: "Services Fibre Optique - Débouchage, Détection, Raccordement | RAFCOM",
  description: "Découvrez nos services fibre optique : débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit en Île-de-France.",
  keywords: [
    "services fibre optique",
    "débouchage fourreaux", 
    "détection blocages",
    "raccordement fibre",
    "urgence fibre",
    "travaux fibre optique"
  ]
};

// Métadonnées pour la section réalisations
export const realisationsMetadata = {
  title: "Nos Réalisations en Travaux Fibre Optique | RAFCOM",
  description: "Découvrez nos dernières réalisations en travaux fibre optique en Île-de-France. Projets résidentiels, commerciaux et industriels de qualité.",
  keywords: [
    "réalisations fibre optique",
    "projets fibre",
    "chantiers Île-de-France",
    "travaux fibre finis",
    "portfolio fibre optique"
  ]
};

// Métadonnées pour la section contact
export const contactMetadata = {
  title: "Contact et Devis Gratuit | RAFCOM Spécialiste Fibre Optique",
  description: "Contactez RAFCOM pour un devis gratuit. Intervention en Île-de-France pour tous vos travaux fibre optique. Réponse rapide garantie.",
  keywords: [
    "devis gratuit fibre optique",
    "contact spécialiste fibre",
    "Île-de-France",
    "travaux fibre",
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
    `/og-rafcom-${section}.jpg`,
    `${baseUrl}#${section}`
  );
}
