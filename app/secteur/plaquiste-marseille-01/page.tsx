import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteMarseille01 = {
  title: "Plaquiste Marseille 1er - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste Marseille 1er arrondissement. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste Marseille 1er",
    "cloisons sèches Marseille 01",
    "doublage murs Marseille 1er",
    "faux plafonds Marseille 01",
    "finitions placo Marseille 1er",
    "rénovation placo Marseille 01",
    "entrepreneur plaquiste Marseille 1er",
    "devis gratuit plaquiste Marseille 01",
    "isolation thermique Marseille 1er",
    "travaux placo Marseille 1er"
  ],
  
  sectorName: "Marseille 1er",
  heroImage: "/prestation-1.png",
  heroTitle: "Entreprise de plaquiste à Marseille 1er",
  heroSubtitle: "Spécialiste plaquiste Marseille 1er arrondissement et Vieux-Port. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions dans le cœur historique de Marseille.",
  
  location: "Marseille 1er",
  
  mainDescription: "Marques Vaz Placo intervient dans le 1er arrondissement de Marseille pour tous vos travaux de plaquiste. Notre expertise couvre ce quartier emblématique du Vieux-Port avec ses spécificités patrimoniales et architecturales. Nous maîtrisons parfaitement les besoins du 1er arrondissement : du Vieux-Port aux quartiers historiques, en passant par les immeubles anciens et les rénovations de prestige.",

  mainServices: [
    {
      title: "Cloisons Sèches Marseille 1er",
      description: "Installation de cloisons sèches respectueuses du patrimoine historique du 1er arrondissement de Marseille."
    },
    {
      title: "Doublage et Isolation Marseille 01",
      description: "Doublage des murs avec isolation adaptée aux contraintes des bâtiments anciens du centre historique."
    },
    {
      title: "Faux Plafonds Marseille 1er",
      description: "Installation de faux plafonds suspendus pour valoriser les espaces du Vieux-Port et centre historique."
    },
    {
      title: "Finitions et Bandes Marseille 01",
      description: "Finitions parfaites respectueuses du cachet historique des immeubles du 1er arrondissement."
    },
    {
      title: "Rénovation Placo Marseille 1er",
      description: "Rénovation et modernisation respectueuse des cloisons dans les bâtiments patrimoniaux du centre."
    },
    {
      title: "Aménagement Intérieur Marseille 01",
      description: "Solutions d'aménagement sur mesure pour optimiser les espaces du centre historique marseillais."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Marseille 1er",
    "Intervention rapide centre-ville Marseille",
    "Expertise bâtiments historiques",
    "Respect contraintes patrimoniales",
    "Entrepreneur du bâtiment expérimenté",
    "Connaissance réglementations centre historique",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Marseille 1er",
    "Équipe technique qualifiée",
    "Solutions adaptées immeubles anciens",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Rénovation appartement Vieux-Port",
      type: "Appartement haussmannien - Rénovation patrimoniale",
      description: "Création de cloisons et doublage isolation dans appartement face au Vieux-Port avec respect des contraintes architecturales."
    },
    {
      title: "Aménagement loft centre historique",
      type: "Loft 120m² - Espaces ouverts",
      description: "Installation de cloisons sèches modulaires et faux plafonds pour création d'espaces modernes dans bâtiment historique."
    },
    {
      title: "Isolation immeuble rue de la République",
      type: "Immeuble ancien - Doublage complet",
      description: "Doublage isolation thermique et phonique respectueux du patrimoine architectural marseillais."
    }
  ],
  
  contactInfo: {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Marseille, Provence-Alpes-Côte d'Azur"
  },
  
  nearbyAreas: [
    "Marseille 2ème",
    "Marseille 3ème",
    "Marseille 6ème",
    "Marseille 7ème",
    "Vieux-Port",
    "Opéra",
    "Hôtel de Ville",
    "Panier",
    "République",
    "Canebière",
    "Joliette",
    "Euroméditerranée"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteMarseille01.sectorName,
  plaquisteMarseille01.location,
  plaquisteMarseille01.description,
  plaquisteMarseille01.keywords
);

export default function PlaquisteMarseille01() {
  return <SectorPage {...plaquisteMarseille01} />;
}
