import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteMarseille02 = {
  title: "Plaquiste Marseille 2ème - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste Marseille 2ème arrondissement. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste Marseille 2ème",
    "cloisons sèches Marseille 02",
    "doublage murs Marseille 2ème",
    "faux plafonds Marseille 02",
    "finitions placo Marseille 2ème",
    "rénovation placo Marseille 02",
    "entrepreneur plaquiste Marseille 2ème",
    "devis gratuit plaquiste Marseille 02",
    "isolation thermique Marseille 2ème",
    "travaux placo Marseille 2ème"
  ],
  
  sectorName: "Marseille 2ème",
  heroImage: "/prestation-2.png",
  heroTitle: "Entreprise de plaquiste à Marseille 2ème",
  heroSubtitle: "Spécialiste plaquiste Marseille 2ème arrondissement et Joliette. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions dans le quartier d'affaires.",
  
  location: "Marseille 2ème",
  
  mainDescription: "Marques Vaz Placo intervient dans le 2ème arrondissement de Marseille pour tous vos travaux de plaquiste. Notre expertise couvre ce quartier dynamique de la Joliette et d'Euroméditerranée avec ses nouveaux développements urbains. Nous maîtrisons parfaitement les besoins du 2ème arrondissement : des tours modernes aux immeubles rénovés, en passant par les espaces de bureaux et les lofts contemporains.",

  mainServices: [
    {
      title: "Cloisons Sèches Marseille 2ème",
      description: "Installation de cloisons sèches pour les nouveaux développements urbains du 2ème arrondissement de Marseille."
    },
    {
      title: "Doublage et Isolation Marseille 02",
      description: "Doublage des murs avec isolation haute performance pour les bâtiments modernes de la Joliette."
    },
    {
      title: "Faux Plafonds Marseille 2ème",
      description: "Installation de faux plafonds techniques pour les espaces de bureaux et commerces du 2ème arrondissement."
    },
    {
      title: "Finitions et Bandes Marseille 02",
      description: "Finitions parfaites pour les aménagements contemporains du quartier d'affaires de la Joliette."
    },
    {
      title: "Rénovation Placo Marseille 2ème",
      description: "Rénovation et modernisation de cloisons pour les espaces professionnels du 2ème arrondissement."
    },
    {
      title: "Aménagement Intérieur Marseille 02",
      description: "Solutions d'aménagement sur mesure pour bureaux et lofts du quartier Euroméditerranée."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Marseille 2ème",
    "Intervention rapide quartier Joliette",
    "Expertise bâtiments modernes",
    "Spécialiste aménagements professionnels",
    "Entrepreneur du bâtiment expérimenté",
    "Connaissance normes bureaux",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Marseille 2ème",
    "Équipe technique qualifiée",
    "Solutions adaptées espaces contemporains",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Aménagement bureaux tour CMA-CGM",
      type: "Bureaux 300m² - Cloisons techniques",
      description: "Installation de cloisons sèches modulaires et faux plafonds techniques pour espaces de bureaux modernes."
    },
    {
      title: "Rénovation loft Joliette",
      type: "Loft industriel - Espaces ouverts",
      description: "Création de cloisons design et doublage isolation dans loft avec vue sur le port autonome."
    },
    {
      title: "Isolation appartement Euroméditerranée",
      type: "Appartement neuf - Finitions haut de gamme",
      description: "Doublage isolation phonique et finitions parfaites pour appartement dans résidence de standing."
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
    "Marseille 15ème",
    "Marseille 16ème",
    "Joliette",
    "Euroméditerranée",
    "Arenc",
    "République",
    "Gare Saint-Charles",
    "Port Autonome",
    "CMA-CGM",
    "Docks"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteMarseille02.sectorName,
  plaquisteMarseille02.location,
  plaquisteMarseille02.description,
  plaquisteMarseille02.keywords
);

export default function PlaquisteMarseille02() {
  return <SectorPage {...plaquisteMarseille02} />;
}
