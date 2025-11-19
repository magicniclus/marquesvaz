import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteMarseilleConfig = {
  title: "Plaquiste Marseille 13 - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste Marseille 13. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste Marseille 13",
    "cloisons sèches Marseille",
    "doublage murs Marseille",
    "faux plafonds Marseille",
    "finitions placo Marseille",
    "rénovation placo Marseille",
    "entrepreneur plaquiste Marseille",
    "devis gratuit plaquiste Marseille",
    "isolation thermique Marseille",
    "travaux placo Marseille 13"
  ],
  
  sectorName: "Marseille 13",
  heroImage: "/prestation-1.png",
  heroTitle: "Entreprise de plaquiste à Marseille 13",
  heroSubtitle: "Spécialiste plaquiste Marseille et Bouches-du-Rhône. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions dans la cité phocéenne.",
  
  location: "Marseille",
  
  mainDescription: "Marques Vaz Placo intervient dans tout Marseille et les Bouches-du-Rhône pour tous vos travaux de plaquiste. Notre expertise couvre cette métropole méditerranéenne avec ses spécificités architecturales et climatiques. Nous maîtrisons parfaitement les besoins de Marseille : du Vieux-Port aux quartiers Nord, en passant par les arrondissements résidentiels et les zones d'activité.",

  mainServices: [
    {
      title: "Cloisons Sèches Marseille",
      description: "Installation de cloisons sèches adaptées au climat méditerranéen et aux spécificités architecturales marseillaises."
    },
    {
      title: "Doublage et Isolation Marseille",
      description: "Doublage des murs avec isolation thermique et phonique pour améliorer le confort dans les logements marseillais."
    },
    {
      title: "Faux Plafonds Marseille",
      description: "Installation de faux plafonds suspendus avec intégration d'éclairage pour valoriser vos espaces à Marseille."
    },
    {
      title: "Finitions et Bandes Marseille",
      description: "Finitions parfaites avec pose de bandes et enduits pour un résultat impeccable dans vos projets marseillais."
    },
    {
      title: "Rénovation Placo Marseille",
      description: "Rénovation et réparation de cloisons existantes pour moderniser vos espaces dans la région marseillaise."
    },
    {
      title: "Aménagement Intérieur Marseille",
      description: "Solutions d'aménagement sur mesure pour optimiser vos espaces de vie et de travail à Marseille."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Marseille",
    "Intervention rapide Bouches-du-Rhône",
    "Expertise climat méditerranéen",
    "Matériaux de qualité certifiés",
    "Entrepreneur du bâtiment expérimenté",
    "Connaissance réglementations locales",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Marseille",
    "Équipe technique qualifiée",
    "Solutions adaptées architecture locale",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Rénovation appartement Vieux-Port Marseille",
      type: "Appartement 4 pièces - Rénovation complète",
      description: "Création de nouvelles cloisons, doublage isolation et faux plafonds avec éclairage LED dans appartement historique."
    },
    {
      title: "Aménagement bureau quartier Euromed",
      type: "Bureaux 200m² - Cloisons modulaires",
      description: "Installation de cloisons sèches modulaires et faux plafonds techniques pour espace de travail moderne."
    },
    {
      title: "Isolation maison quartiers Sud Marseille",
      type: "Maison individuelle - Doublage complet",
      description: "Doublage isolation thermique et phonique complète pour amélioration confort et économies d'énergie."
    }
  ],
  
  contactInfo: {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Marseille, Provence-Alpes-Côte d'Azur"
  },
  
  nearbyAreas: [
    "Aix-en-Provence",
    "Aubagne",
    "Martigues",
    "Salon-de-Provence",
    "Istres",
    "Vitrolles",
    "Cassis",
    "La Ciotat",
    "Gardanne",
    "Allauch",
    "Plan-de-Cuques",
    "Septèmes-les-Vallons"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteMarseilleConfig.sectorName,
  plaquisteMarseilleConfig.location,
  plaquisteMarseilleConfig.description,
  plaquisteMarseilleConfig.keywords
);

export default function PlaquisteMarseilleePage() {
  return <SectorPage {...plaquisteMarseilleConfig} />;
}
