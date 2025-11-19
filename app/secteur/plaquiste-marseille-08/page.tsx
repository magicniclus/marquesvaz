import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteMarseille08 = {
  title: "Plaquiste Marseille 8ème - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste Marseille 8ème arrondissement. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste Marseille 8ème",
    "cloisons sèches Marseille 08",
    "doublage murs Marseille 8ème",
    "faux plafonds Marseille 08",
    "finitions placo Marseille 8ème",
    "rénovation placo Marseille 08",
    "entrepreneur plaquiste Marseille 8ème",
    "devis gratuit plaquiste Marseille 08",
    "isolation thermique Marseille 8ème",
    "travaux placo Marseille 8ème"
  ],
  
  sectorName: "Marseille 8ème",
  heroImage: "/prestation-2.png",
  heroTitle: "Entreprise de plaquiste à Marseille 8ème",
  heroSubtitle: "Spécialiste plaquiste Marseille 8ème arrondissement et Prado. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions dans ce quartier résidentiel haut de gamme.",
  
  location: "Marseille 8ème",
  
  mainDescription: "Marques Vaz Placo intervient dans le 8ème arrondissement de Marseille pour tous vos travaux de plaquiste. Notre expertise couvre ce quartier résidentiel prestigieux du Prado avec ses belles avenues et ses immeubles de standing. Nous maîtrisons parfaitement les besoins du 8ème arrondissement : des appartements familiaux de prestige aux villas, en passant par les cabinets médicaux et les espaces professionnels haut de gamme.",

  mainServices: [
    {
      title: "Cloisons Sèches Marseille 8ème",
      description: "Installation de cloisons sèches haut de gamme pour les résidences de prestige du 8ème arrondissement."
    },
    {
      title: "Doublage et Isolation Marseille 08",
      description: "Doublage des murs avec isolation premium pour les logements de standing du Prado."
    },
    {
      title: "Faux Plafonds Marseille 8ème",
      description: "Installation de faux plafonds design pour les espaces de prestige du 8ème arrondissement."
    },
    {
      title: "Finitions et Bandes Marseille 08",
      description: "Finitions parfaites haut de gamme pour les rénovations de luxe du quartier Prado."
    },
    {
      title: "Rénovation Placo Marseille 8ème",
      description: "Rénovation et modernisation respectueuse des cloisons dans les immeubles bourgeois."
    },
    {
      title: "Aménagement Intérieur Marseille 08",
      description: "Solutions d'aménagement sur mesure pour les espaces de prestige du 8ème."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Marseille 8ème",
    "Intervention rapide quartier Prado",
    "Expertise immeubles de prestige",
    "Spécialiste finitions luxe",
    "Entrepreneur du bâtiment expérimenté",
    "Connaissance quartiers haut de gamme",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Marseille 8ème",
    "Équipe technique qualifiée",
    "Solutions adaptées habitat de luxe",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Rénovation appartement avenue du Prado",
      type: "Appartement T7 - Rénovation luxe",
      description: "Création de cloisons design et doublage isolation dans appartement de prestige avec terrasse."
    },
    {
      title: "Aménagement villa Bonneveine",
      type: "Villa 200m² - Espaces sur mesure",
      description: "Installation de cloisons sèches et faux plafonds pour optimisation espaces de vie haut de gamme."
    },
    {
      title: "Isolation résidence standing Prado",
      type: "Résidence de luxe - Doublage complet",
      description: "Doublage isolation haute performance pour résidence de standing avec piscine."
    }
  ],
  
  contactInfo: {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Marseille, Provence-Alpes-Côte d'Azur"
  },
  
  nearbyAreas: [
    "Marseille 6ème",
    "Marseille 7ème",
    "Marseille 9ème",
    "Prado",
    "Bonneveine",
    "Castellane",
    "Périer",
    "Rond-Point du Prado",
    "Plage du Prado",
    "Parc Borély",
    "Vélodrome",
    "Mazargues"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteMarseille08.sectorName,
  plaquisteMarseille08.location,
  plaquisteMarseille08.description,
  plaquisteMarseille08.keywords
);

export default function PlaquisteMarseille08() {
  return <SectorPage {...plaquisteMarseille08} />;
}
