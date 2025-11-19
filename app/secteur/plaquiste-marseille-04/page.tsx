import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteMarseille04 = {
  title: "Plaquiste Marseille 4ème - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste Marseille 4ème arrondissement. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste Marseille 4ème",
    "cloisons sèches Marseille 04",
    "doublage murs Marseille 4ème",
    "faux plafonds Marseille 04",
    "finitions placo Marseille 4ème",
    "rénovation placo Marseille 04",
    "entrepreneur plaquiste Marseille 4ème",
    "devis gratuit plaquiste Marseille 04",
    "isolation thermique Marseille 4ème",
    "travaux placo Marseille 4ème"
  ],
  
  sectorName: "Marseille 4ème",
  heroImage: "/prestation-4.png",
  heroTitle: "Entreprise de plaquiste à Marseille 4ème",
  heroSubtitle: "Spécialiste plaquiste Marseille 4ème arrondissement et Cinq Avenues. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions dans ce quartier résidentiel.",
  
  location: "Marseille 4ème",
  
  mainDescription: "Marques Vaz Placo intervient dans le 4ème arrondissement de Marseille pour tous vos travaux de plaquiste. Notre expertise couvre ce quartier résidentiel des Cinq Avenues avec ses immeubles bourgeois et ses espaces verts. Nous maîtrisons parfaitement les besoins du 4ème arrondissement : des appartements familiaux aux commerces de proximité, en passant par les cabinets médicaux et les espaces professionnels.",

  mainServices: [
    {
      title: "Cloisons Sèches Marseille 4ème",
      description: "Installation de cloisons sèches pour les appartements familiaux du 4ème arrondissement de Marseille."
    },
    {
      title: "Doublage et Isolation Marseille 04",
      description: "Doublage des murs avec isolation pour améliorer le confort des logements des Cinq Avenues."
    },
    {
      title: "Faux Plafonds Marseille 4ème",
      description: "Installation de faux plafonds pour les cabinets médicaux et espaces professionnels du 4ème."
    },
    {
      title: "Finitions et Bandes Marseille 04",
      description: "Finitions parfaites pour les rénovations d'appartements bourgeois du 4ème arrondissement."
    },
    {
      title: "Rénovation Placo Marseille 4ème",
      description: "Rénovation et modernisation de cloisons dans les immeubles résidentiels du 4ème."
    },
    {
      title: "Aménagement Intérieur Marseille 04",
      description: "Solutions d'aménagement pour optimiser les espaces familiaux et professionnels du 4ème."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Marseille 4ème",
    "Intervention rapide Cinq Avenues",
    "Expertise immeubles bourgeois",
    "Spécialiste aménagements familiaux",
    "Entrepreneur du bâtiment expérimenté",
    "Connaissance quartiers résidentiels",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Marseille 4ème",
    "Équipe technique qualifiée",
    "Solutions adaptées habitat familial",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Rénovation appartement Cinq Avenues",
      type: "Appartement T5 - Rénovation familiale",
      description: "Création de nouvelles cloisons et doublage isolation dans grand appartement familial."
    },
    {
      title: "Aménagement cabinet médical",
      type: "Cabinet 80m² - Espaces fonctionnels",
      description: "Installation de cloisons sèches et faux plafonds pour création de salles de consultation."
    },
    {
      title: "Isolation immeuble années 30",
      type: "Immeuble bourgeois - Doublage complet",
      description: "Doublage isolation thermique et phonique respectueux de l'architecture d'époque."
    }
  ],
  
  contactInfo: {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Marseille, Provence-Alpes-Côte d'Azur"
  },
  
  nearbyAreas: [
    "Marseille 1er",
    "Marseille 3ème",
    "Marseille 5ème",
    "Marseille 6ème",
    "Cinq Avenues",
    "Castellane",
    "Préfecture",
    "Réformés",
    "Canebière",
    "Longchamp",
    "Palais de Justice",
    "Cours Julien"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteMarseille04.sectorName,
  plaquisteMarseille04.location,
  plaquisteMarseille04.description,
  plaquisteMarseille04.keywords
);

export default function PlaquisteMarseille04() {
  return <SectorPage {...plaquisteMarseille04} />;
}
