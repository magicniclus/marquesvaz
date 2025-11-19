import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteMarseille07 = {
  title: "Plaquiste Marseille 7ème - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste Marseille 7ème arrondissement. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste Marseille 7ème",
    "cloisons sèches Marseille 07",
    "doublage murs Marseille 7ème",
    "faux plafonds Marseille 07",
    "finitions placo Marseille 7ème",
    "rénovation placo Marseille 07",
    "entrepreneur plaquiste Marseille 7ème",
    "devis gratuit plaquiste Marseille 07",
    "isolation thermique Marseille 7ème",
    "travaux placo Marseille 7ème"
  ],
  
  sectorName: "Marseille 7ème",
  heroImage: "/prestation-1.png",
  heroTitle: "Entreprise de plaquiste à Marseille 7ème",
  heroSubtitle: "Spécialiste plaquiste Marseille 7ème arrondissement et Saint-Victor. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions près du Vieux-Port.",
  
  location: "Marseille 7ème",
  
  mainDescription: "Marques Vaz Placo intervient dans le 7ème arrondissement de Marseille pour tous vos travaux de plaquiste. Notre expertise couvre ce quartier central de Saint-Victor avec ses immeubles anciens et ses nouveaux développements. Nous maîtrisons parfaitement les besoins du 7ème arrondissement : des appartements rénovés aux espaces commerciaux, en passant par les lofts et les bureaux modernes.",

  mainServices: [
    {
      title: "Cloisons Sèches Marseille 7ème",
      description: "Installation de cloisons sèches pour les rénovations et nouveaux aménagements du 7ème arrondissement."
    },
    {
      title: "Doublage et Isolation Marseille 07",
      description: "Doublage des murs avec isolation pour améliorer le confort des logements de Saint-Victor."
    },
    {
      title: "Faux Plafonds Marseille 7ème",
      description: "Installation de faux plafonds pour les espaces commerciaux et bureaux du 7ème arrondissement."
    },
    {
      title: "Finitions et Bandes Marseille 07",
      description: "Finitions parfaites pour les projets de rénovation urbaine du quartier Saint-Victor."
    },
    {
      title: "Rénovation Placo Marseille 7ème",
      description: "Rénovation et modernisation de cloisons dans les immeubles anciens du 7ème."
    },
    {
      title: "Aménagement Intérieur Marseille 07",
      description: "Solutions d'aménagement pour optimiser les espaces du centre-ville élargi."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Marseille 7ème",
    "Intervention rapide Saint-Victor",
    "Expertise rénovations urbaines",
    "Spécialiste immeubles anciens",
    "Entrepreneur du bâtiment expérimenté",
    "Connaissance centre-ville",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Marseille 7ème",
    "Équipe technique qualifiée",
    "Solutions adaptées habitat urbain",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Rénovation appartement Saint-Victor",
      type: "Appartement T4 - Rénovation complète",
      description: "Création de nouvelles cloisons et doublage isolation dans appartement proche du Vieux-Port."
    },
    {
      title: "Aménagement local commercial",
      type: "Commerce 120m² - Espaces modulaires",
      description: "Installation de cloisons sèches et faux plafonds pour création d'espaces commerciaux modernes."
    },
    {
      title: "Isolation immeuble centre-ville",
      type: "Immeuble ancien - Doublage complet",
      description: "Doublage isolation thermique et phonique pour amélioration confort et économies d'énergie."
    }
  ],
  
  contactInfo: {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Marseille, Provence-Alpes-Côte d'Azur"
  },
  
  nearbyAreas: [
    "Marseille 1er",
    "Marseille 2ème",
    "Marseille 6ème",
    "Marseille 8ème",
    "Saint-Victor",
    "Vieux-Port",
    "Opéra",
    "Préfecture",
    "Castellane",
    "Endoume",
    "Catalans",
    "Pharo"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteMarseille07.sectorName,
  plaquisteMarseille07.location,
  plaquisteMarseille07.description,
  plaquisteMarseille07.keywords
);

export default function PlaquisteMarseille07() {
  return <SectorPage {...plaquisteMarseille07} />;
}
