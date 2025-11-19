import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteMarseille06 = {
  title: "Plaquiste Marseille 6ème - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste Marseille 6ème arrondissement. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste Marseille 6ème",
    "cloisons sèches Marseille 06",
    "doublage murs Marseille 6ème",
    "faux plafonds Marseille 06",
    "finitions placo Marseille 6ème",
    "rénovation placo Marseille 06",
    "entrepreneur plaquiste Marseille 6ème",
    "devis gratuit plaquiste Marseille 06",
    "isolation thermique Marseille 6ème",
    "travaux placo Marseille 6ème"
  ],
  
  sectorName: "Marseille 6ème",
  heroImage: "/prestation-5.png",
  heroTitle: "Entreprise de plaquiste à Marseille 6ème",
  heroSubtitle: "Spécialiste plaquiste Marseille 6ème arrondissement et Palais Longchamp. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions dans ce quartier prestigieux.",
  
  location: "Marseille 6ème",
  
  mainDescription: "Marques Vaz Placo intervient dans le 6ème arrondissement de Marseille pour tous vos travaux de plaquiste. Notre expertise couvre ce quartier prestigieux du Palais Longchamp avec ses beaux immeubles et ses espaces culturels. Nous maîtrisons parfaitement les besoins du 6ème arrondissement : des appartements de standing aux espaces professionnels, en passant par les commerces de luxe et les cabinets libéraux.",

  mainServices: [
    {
      title: "Cloisons Sèches Marseille 6ème",
      description: "Installation de cloisons sèches haut de gamme pour les appartements de standing du 6ème arrondissement."
    },
    {
      title: "Doublage et Isolation Marseille 06",
      description: "Doublage des murs avec isolation premium pour les logements prestigieux du Palais Longchamp."
    },
    {
      title: "Faux Plafonds Marseille 6ème",
      description: "Installation de faux plafonds design pour les espaces professionnels et commerces du 6ème."
    },
    {
      title: "Finitions et Bandes Marseille 06",
      description: "Finitions parfaites haut de gamme pour les rénovations de prestige du 6ème arrondissement."
    },
    {
      title: "Rénovation Placo Marseille 6ème",
      description: "Rénovation et modernisation respectueuse des cloisons dans les immeubles de standing."
    },
    {
      title: "Aménagement Intérieur Marseille 06",
      description: "Solutions d'aménagement sur mesure pour les espaces de prestige du 6ème arrondissement."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Marseille 6ème",
    "Intervention rapide Palais Longchamp",
    "Expertise immeubles de standing",
    "Spécialiste finitions haut de gamme",
    "Entrepreneur du bâtiment expérimenté",
    "Connaissance quartiers prestigieux",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Marseille 6ème",
    "Équipe technique qualifiée",
    "Solutions adaptées habitat de prestige",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Rénovation appartement Palais Longchamp",
      type: "Appartement T6 - Rénovation prestige",
      description: "Création de cloisons design et doublage isolation dans appartement de standing avec vue sur le palais."
    },
    {
      title: "Aménagement cabinet d'avocat",
      type: "Cabinet libéral - Espaces professionnels",
      description: "Installation de cloisons sèches et faux plafonds pour création d'espaces de réception et bureaux."
    },
    {
      title: "Isolation immeuble haussmannien",
      type: "Immeuble de standing - Doublage complet",
      description: "Doublage isolation haute performance respectueux de l'architecture haussmannienne."
    }
  ],
  
  contactInfo: {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Marseille, Provence-Alpes-Côte d'Azur"
  },
  
  nearbyAreas: [
    "Marseille 1er",
    "Marseille 4ème",
    "Marseille 5ème",
    "Marseille 8ème",
    "Palais Longchamp",
    "Cours Julien",
    "Notre-Dame du Mont",
    "Castellane",
    "Préfecture",
    "Réformés",
    "Canebière",
    "Opéra"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteMarseille06.sectorName,
  plaquisteMarseille06.location,
  plaquisteMarseille06.description,
  plaquisteMarseille06.keywords
);

export default function PlaquisteMarseille06() {
  return <SectorPage {...plaquisteMarseille06} />;
}
