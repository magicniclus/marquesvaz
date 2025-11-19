import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteMarseille14 = {
  title: "Plaquiste Marseille 14ème - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste Marseille 14ème arrondissement. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste Marseille 14ème",
    "cloisons sèches Marseille 14",
    "doublage murs Marseille 14ème",
    "faux plafonds Marseille 14",
    "finitions placo Marseille 14ème",
    "rénovation placo Marseille 14",
    "entrepreneur plaquiste Marseille 14ème",
    "devis gratuit plaquiste Marseille 14",
    "isolation thermique Marseille 14ème",
    "travaux placo Marseille 14ème"
  ],
  
  sectorName: "Marseille 14ème",
  heroImage: "/prestation-1.png",
  heroTitle: "Entreprise de plaquiste à Marseille 14ème",
  heroSubtitle: "Spécialiste plaquiste Marseille 14ème arrondissement et Sainte-Marthe. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions dans ce quartier populaire.",
  
  location: "Marseille 14ème",
  
  mainDescription: "Marques Vaz Placo intervient dans le 14ème arrondissement de Marseille pour tous vos travaux de plaquiste. Notre expertise couvre ce quartier populaire de Sainte-Marthe et Saint-Barthélemy avec ses grands ensembles et ses maisons de ville. Nous maîtrisons parfaitement les besoins du 14ème arrondissement : des appartements familiaux aux commerces de proximité, en passant par les équipements publics et les espaces associatifs.",

  mainServices: [
    {
      title: "Cloisons Sèches Marseille 14ème",
      description: "Installation de cloisons sèches pour les logements et équipements du 14ème arrondissement de Marseille."
    },
    {
      title: "Doublage et Isolation Marseille 14",
      description: "Doublage des murs avec isolation pour améliorer le confort des logements de Sainte-Marthe."
    },
    {
      title: "Faux Plafonds Marseille 14ème",
      description: "Installation de faux plafonds pour les rénovations et aménagements du 14ème arrondissement."
    },
    {
      title: "Finitions et Bandes Marseille 14",
      description: "Finitions parfaites pour les projets de réhabilitation du quartier Sainte-Marthe."
    },
    {
      title: "Rénovation Placo Marseille 14ème",
      description: "Rénovation et modernisation de cloisons dans les logements du 14ème arrondissement."
    },
    {
      title: "Aménagement Intérieur Marseille 14",
      description: "Solutions d'aménagement pour optimiser les espaces de vie du 14ème arrondissement."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Marseille 14ème",
    "Intervention rapide Sainte-Marthe",
    "Expertise logements sociaux",
    "Spécialiste réhabilitation",
    "Entrepreneur du bâtiment expérimenté",
    "Connaissance quartiers populaires",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Marseille 14ème",
    "Équipe technique qualifiée",
    "Solutions adaptées habitat social",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Réhabilitation appartement Sainte-Marthe",
      type: "Appartement T4 - Rénovation sociale",
      description: "Création de nouvelles cloisons et doublage isolation dans logement social réhabilité."
    },
    {
      title: "Aménagement local associatif",
      type: "Local 100m² - Espaces polyvalents",
      description: "Installation de cloisons sèches modulaires pour création d'espaces associatifs."
    },
    {
      title: "Isolation grand ensemble",
      type: "Immeuble HLM - Doublage complet",
      description: "Doublage isolation thermique et phonique pour amélioration confort et économies d'énergie."
    }
  ],
  
  contactInfo: {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Marseille, Provence-Alpes-Côte d'Azur"
  },
  
  nearbyAreas: [
    "Marseille 12ème",
    "Marseille 15ème",
    "Marseille 13ème",
    "Sainte-Marthe",
    "Saint-Barthélemy",
    "Les Olives",
    "Saint-Just",
    "Château-Gombert",
    "Les Arnavaux",
    "Plan-de-Cuques",
    "Allauch",
    "Septèmes-les-Vallons"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteMarseille14.sectorName,
  plaquisteMarseille14.location,
  plaquisteMarseille14.description,
  plaquisteMarseille14.keywords
);

export default function PlaquisteMarseille14() {
  return <SectorPage {...plaquisteMarseille14} />;
}
