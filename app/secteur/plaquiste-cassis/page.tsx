import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteCassisConfig = {
  title: "Plaquiste Cassis - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste Cassis. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste Cassis",
    "cloisons sèches Cassis",
    "doublage murs Cassis",
    "faux plafonds Cassis",
    "finitions placo Cassis",
    "rénovation placo Cassis",
    "entrepreneur plaquiste Cassis",
    "devis gratuit plaquiste Cassis",
    "isolation thermique Cassis",
    "travaux placo Cassis"
  ],
  
  sectorName: "Cassis",
  heroImage: "/prestation-3.png",
  heroTitle: "Entreprise de plaquiste à Cassis",
  heroSubtitle: "Spécialiste plaquiste Cassis et Calanques. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions dans la perle de la Côte d'Azur.",
  
  location: "Cassis",
  
  mainDescription: "Marques Vaz Placo intervient à Cassis et dans la région des Calanques pour tous vos travaux de plaquiste. Notre expertise couvre cette ville touristique prestigieuse avec ses spécificités patrimoniales et climatiques. Nous maîtrisons parfaitement les besoins de Cassis : du port historique aux villas sur les hauteurs, en passant par les établissements touristiques et résidences de prestige.",

  mainServices: [
    {
      title: "Cloisons Sèches Cassis",
      description: "Installation de cloisons sèches respectueuses du patrimoine cassidain et adaptées au climat maritime."
    },
    {
      title: "Doublage et Isolation Cassis",
      description: "Doublage des murs avec isolation adaptée aux contraintes du littoral et aux embruns marins."
    },
    {
      title: "Faux Plafonds Cassis",
      description: "Installation de faux plafonds suspendus résistants à l'humidité marine pour vos espaces à Cassis."
    },
    {
      title: "Finitions et Bandes Cassis",
      description: "Finitions parfaites avec matériaux adaptés au climat maritime pour un résultat durable à Cassis."
    },
    {
      title: "Rénovation Placo Cassis",
      description: "Rénovation respectueuse du patrimoine avec traitement anti-humidité pour les bâtiments cassidains."
    },
    {
      title: "Aménagement Haut de Gamme Cassis",
      description: "Solutions d'aménagement prestige pour villas et établissements touristiques de Cassis."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Cassis",
    "Intervention rapide région Calanques",
    "Expertise patrimoine et climat marin",
    "Matériaux résistants embruns",
    "Entrepreneur du bâtiment expérimenté",
    "Respect contraintes patrimoniales",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Cassis",
    "Équipe technique qualifiée",
    "Spécialiste aménagement prestige",
    "Solutions anti-humidité marine"
  ],
  
  projectExamples: [
    {
      title: "Rénovation villa vue mer Cassis",
      type: "Villa de prestige - Rénovation haut de gamme",
      description: "Doublage isolation et création cloisons avec matériaux nobles pour villa d'exception face aux Calanques."
    },
    {
      title: "Aménagement restaurant port Cassis",
      type: "Restaurant 120m² - Cloisons techniques",
      description: "Installation de cloisons sèches et faux plafonds résistants à l'humidité pour restaurant du port."
    },
    {
      title: "Isolation maison centre historique",
      type: "Maison de ville - Rénovation patrimoniale",
      description: "Doublage isolation respectueux du patrimoine avec techniques adaptées aux contraintes historiques."
    }
  ],
  
  contactInfo: {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Marseille, Provence-Alpes-Côte d'Azur"
  },
  
  nearbyAreas: [
    "La Ciotat",
    "Aubagne",
    "Marseille",
    "Roquefort-la-Bédoule",
    "Cuges-les-Pins",
    "Gémenos",
    "Carnoux-en-Provence",
    "Ceyreste",
    "Bandol",
    "Saint-Cyr-sur-Mer",
    "Sanary-sur-Mer",
    "Ollioules"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteCassisConfig.sectorName,
  plaquisteCassisConfig.location,
  plaquisteCassisConfig.description,
  plaquisteCassisConfig.keywords
);

export default function PlaquisteCassisPage() {
  return <SectorPage {...plaquisteCassisConfig} />;
}
