import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteMarseille03 = {
  title: "Plaquiste Marseille 3ème - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste Marseille 3ème arrondissement. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste Marseille 3ème",
    "cloisons sèches Marseille 03",
    "doublage murs Marseille 3ème",
    "faux plafonds Marseille 03",
    "finitions placo Marseille 3ème",
    "rénovation placo Marseille 03",
    "entrepreneur plaquiste Marseille 3ème",
    "devis gratuit plaquiste Marseille 03",
    "isolation thermique Marseille 3ème",
    "travaux placo Marseille 3ème"
  ],
  
  sectorName: "Marseille 3ème",
  heroImage: "/prestation-3.png",
  heroTitle: "Entreprise de plaquiste à Marseille 3ème",
  heroSubtitle: "Spécialiste plaquiste Marseille 3ème arrondissement et Belle de Mai. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions dans ce quartier en pleine transformation.",
  
  location: "Marseille 3ème",
  
  mainDescription: "Marques Vaz Placo intervient dans le 3ème arrondissement de Marseille pour tous vos travaux de plaquiste. Notre expertise couvre ce quartier en pleine mutation avec la Belle de Mai, Saint-Mauront et la gare Saint-Charles. Nous maîtrisons parfaitement les besoins du 3ème arrondissement : des rénovations urbaines aux nouveaux projets, en passant par les espaces culturels et les logements sociaux réhabilités.",

  mainServices: [
    {
      title: "Cloisons Sèches Marseille 3ème",
      description: "Installation de cloisons sèches pour les projets de rénovation urbaine du 3ème arrondissement de Marseille."
    },
    {
      title: "Doublage et Isolation Marseille 03",
      description: "Doublage des murs avec isolation pour améliorer les logements réhabilités de la Belle de Mai."
    },
    {
      title: "Faux Plafonds Marseille 3ème",
      description: "Installation de faux plafonds pour les espaces culturels et commerciaux du 3ème arrondissement."
    },
    {
      title: "Finitions et Bandes Marseille 03",
      description: "Finitions parfaites pour les projets de réhabilitation urbaine du quartier Saint-Mauront."
    },
    {
      title: "Rénovation Placo Marseille 3ème",
      description: "Rénovation et modernisation de cloisons dans les bâtiments en cours de transformation urbaine."
    },
    {
      title: "Aménagement Intérieur Marseille 03",
      description: "Solutions d'aménagement pour les nouveaux espaces de vie et de travail du 3ème arrondissement."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Marseille 3ème",
    "Intervention rapide Belle de Mai",
    "Expertise rénovation urbaine",
    "Spécialiste réhabilitation logements",
    "Entrepreneur du bâtiment expérimenté",
    "Connaissance projets urbains",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Marseille 3ème",
    "Équipe technique qualifiée",
    "Solutions adaptées transformation urbaine",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Réhabilitation logement Belle de Mai",
      type: "Appartement T4 - Rénovation complète",
      description: "Création de nouvelles cloisons et doublage isolation dans logement social réhabilité."
    },
    {
      title: "Aménagement espace culturel Friche",
      type: "Local associatif - Espaces modulaires",
      description: "Installation de cloisons sèches modulaires pour création d'espaces culturels polyvalents."
    },
    {
      title: "Isolation immeuble Saint-Mauront",
      type: "Immeuble années 60 - Doublage complet",
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
    "Marseille 4ème",
    "Marseille 5ème",
    "Belle de Mai",
    "Saint-Mauront",
    "Gare Saint-Charles",
    "Friche",
    "National",
    "Félix Pyat",
    "Castellane",
    "Réformés"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteMarseille03.sectorName,
  plaquisteMarseille03.location,
  plaquisteMarseille03.description,
  plaquisteMarseille03.keywords
);

export default function PlaquisteMarseille03() {
  return <SectorPage {...plaquisteMarseille03} />;
}
