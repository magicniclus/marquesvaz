import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteMarseille11 = {
  title: "Plaquiste Marseille 11ème - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste Marseille 11ème arrondissement. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste Marseille 11ème",
    "cloisons sèches Marseille 11",
    "doublage murs Marseille 11ème",
    "faux plafonds Marseille 11",
    "finitions placo Marseille 11ème",
    "rénovation placo Marseille 11",
    "entrepreneur plaquiste Marseille 11ème",
    "devis gratuit plaquiste Marseille 11",
    "isolation thermique Marseille 11ème",
    "travaux placo Marseille 11ème"
  ],
  
  sectorName: "Marseille 11ème",
  heroImage: "/prestation-4.png",
  heroTitle: "Entreprise de plaquiste à Marseille 11ème",
  heroSubtitle: "Spécialiste plaquiste Marseille 11ème arrondissement et Valentine. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions dans ce quartier résidentiel.",
  
  location: "Marseille 11ème",
  
  mainDescription: "Marques Vaz Placo intervient dans le 11ème arrondissement de Marseille pour tous vos travaux de plaquiste. Notre expertise couvre ce quartier résidentiel de Valentine et La Pomme avec ses maisons individuelles et ses résidences. Nous maîtrisons parfaitement les besoins du 11ème arrondissement : des pavillons familiaux aux petits collectifs, en passant par les commerces de proximité et les espaces professionnels.",

  mainServices: [
    {
      title: "Cloisons Sèches Marseille 11ème",
      description: "Installation de cloisons sèches pour les maisons individuelles et résidences du 11ème arrondissement."
    },
    {
      title: "Doublage et Isolation Marseille 11",
      description: "Doublage des murs avec isolation pour améliorer le confort des pavillons de Valentine."
    },
    {
      title: "Faux Plafonds Marseille 11ème",
      description: "Installation de faux plafonds pour les extensions et aménagements du 11ème arrondissement."
    },
    {
      title: "Finitions et Bandes Marseille 11",
      description: "Finitions parfaites pour les rénovations de maisons individuelles du quartier Valentine."
    },
    {
      title: "Rénovation Placo Marseille 11ème",
      description: "Rénovation et modernisation de cloisons dans les pavillons et résidences du 11ème."
    },
    {
      title: "Aménagement Intérieur Marseille 11",
      description: "Solutions d'aménagement pour optimiser les espaces familiaux du 11ème arrondissement."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Marseille 11ème",
    "Intervention rapide Valentine",
    "Expertise maisons individuelles",
    "Spécialiste habitat pavillonnaire",
    "Entrepreneur du bâtiment expérimenté",
    "Connaissance quartiers résidentiels",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Marseille 11ème",
    "Équipe technique qualifiée",
    "Solutions adaptées habitat familial",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Extension maison Valentine",
      type: "Pavillon - Extension 30m²",
      description: "Création de cloisons et doublage isolation pour extension avec création chambre et bureau."
    },
    {
      title: "Rénovation résidence La Pomme",
      type: "Appartement T3 - Rénovation complète",
      description: "Installation de nouvelles cloisons et faux plafonds pour optimisation espaces de vie."
    },
    {
      title: "Isolation pavillon années 80",
      type: "Maison individuelle - Doublage complet",
      description: "Doublage isolation thermique et phonique pour amélioration confort et économies d'énergie."
    }
  ],
  
  contactInfo: {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Marseille, Provence-Alpes-Côte d'Azur"
  },
  
  nearbyAreas: [
    "Marseille 9ème",
    "Marseille 12ème",
    "Aubagne",
    "Allauch",
    "Valentine",
    "La Pomme",
    "Saint-Marcel",
    "Sainte-Marguerite",
    "La Penne-sur-Huveaune",
    "Plan-de-Cuques",
    "La Treille",
    "Les Camoins"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteMarseille11.sectorName,
  plaquisteMarseille11.location,
  plaquisteMarseille11.description,
  plaquisteMarseille11.keywords
);

export default function PlaquisteMarseille11() {
  return <SectorPage {...plaquisteMarseille11} />;
}
