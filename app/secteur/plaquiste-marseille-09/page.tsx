import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteMarseille09 = {
  title: "Plaquiste Marseille 9ème - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste Marseille 9ème arrondissement. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste Marseille 9ème",
    "cloisons sèches Marseille 09",
    "doublage murs Marseille 9ème",
    "faux plafonds Marseille 09",
    "finitions placo Marseille 9ème",
    "rénovation placo Marseille 09",
    "entrepreneur plaquiste Marseille 9ème",
    "devis gratuit plaquiste Marseille 09",
    "isolation thermique Marseille 9ème",
    "travaux placo Marseille 9ème"
  ],
  
  sectorName: "Marseille 9ème",
  heroImage: "/prestation-3.png",
  heroTitle: "Entreprise de plaquiste à Marseille 9ème",
  heroSubtitle: "Spécialiste plaquiste Marseille 9ème arrondissement et Mazargues. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions dans ce quartier en développement.",
  
  location: "Marseille 9ème",
  
  mainDescription: "Marques Vaz Placo intervient dans le 9ème arrondissement de Marseille pour tous vos travaux de plaquiste. Notre expertise couvre ce quartier en plein développement de Mazargues et Sainte-Marguerite avec ses nouveaux programmes immobiliers. Nous maîtrisons parfaitement les besoins du 9ème arrondissement : des appartements neufs aux rénovations, en passant par les espaces commerciaux et les équipements publics.",

  mainServices: [
    {
      title: "Cloisons Sèches Marseille 9ème",
      description: "Installation de cloisons sèches pour les nouveaux programmes immobiliers du 9ème arrondissement."
    },
    {
      title: "Doublage et Isolation Marseille 09",
      description: "Doublage des murs avec isolation moderne pour les logements neufs de Mazargues."
    },
    {
      title: "Faux Plafonds Marseille 9ème",
      description: "Installation de faux plafonds pour les espaces commerciaux et équipements du 9ème."
    },
    {
      title: "Finitions et Bandes Marseille 09",
      description: "Finitions parfaites pour les constructions neuves et rénovations du quartier Mazargues."
    },
    {
      title: "Rénovation Placo Marseille 9ème",
      description: "Rénovation et modernisation de cloisons dans les bâtiments existants du 9ème."
    },
    {
      title: "Aménagement Intérieur Marseille 09",
      description: "Solutions d'aménagement pour les nouveaux espaces de vie du 9ème arrondissement."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Marseille 9ème",
    "Intervention rapide Mazargues",
    "Expertise constructions neuves",
    "Spécialiste programmes immobiliers",
    "Entrepreneur du bâtiment expérimenté",
    "Connaissance normes modernes",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Marseille 9ème",
    "Équipe technique qualifiée",
    "Solutions adaptées habitat moderne",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Aménagement appartement neuf Mazargues",
      type: "Appartement T4 - Construction neuve",
      description: "Installation de cloisons sèches et finitions dans appartement neuf avec terrasse."
    },
    {
      title: "Rénovation maison Sainte-Marguerite",
      type: "Maison individuelle - Modernisation",
      description: "Création de nouvelles cloisons et doublage isolation pour modernisation complète."
    },
    {
      title: "Isolation résidence récente",
      type: "Résidence 2010 - Doublage complet",
      description: "Doublage isolation phonique pour amélioration confort acoustique en résidence récente."
    }
  ],
  
  contactInfo: {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Marseille, Provence-Alpes-Côte d'Azur"
  },
  
  nearbyAreas: [
    "Marseille 8ème",
    "Marseille 10ème",
    "Marseille 11ème",
    "Mazargues",
    "Sainte-Marguerite",
    "Prado",
    "Bonneveine",
    "Vélodrome",
    "Parc Borély",
    "Luminy",
    "Roy d'Espagne",
    "Sormiou"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteMarseille09.sectorName,
  plaquisteMarseille09.location,
  plaquisteMarseille09.description,
  plaquisteMarseille09.keywords
);

export default function PlaquisteMarseille09() {
  return <SectorPage {...plaquisteMarseille09} />;
}
