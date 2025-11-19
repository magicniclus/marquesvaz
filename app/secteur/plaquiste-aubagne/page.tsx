import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteAubagneConfig = {
  title: "Plaquiste Aubagne - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste Aubagne. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste Aubagne",
    "cloisons sèches Aubagne",
    "doublage murs Aubagne",
    "faux plafonds Aubagne",
    "finitions placo Aubagne",
    "rénovation placo Aubagne",
    "entrepreneur plaquiste Aubagne",
    "devis gratuit plaquiste Aubagne",
    "isolation thermique Aubagne",
    "travaux placo Aubagne"
  ],
  
  sectorName: "Aubagne",
  heroImage: "/prestation-3.png",
  heroTitle: "Entreprise de plaquiste à Aubagne",
  heroSubtitle: "Spécialiste plaquiste Aubagne et vallée de l'Huveaune. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions dans la ville de Marcel Pagnol.",
  
  location: "Aubagne",
  
  mainDescription: "Marques Vaz Placo intervient à Aubagne et dans la vallée de l'Huveaune pour tous vos travaux de plaquiste. Notre expertise couvre cette ville dynamique avec ses quartiers résidentiels et zones d'activité. Nous maîtrisons parfaitement les besoins d'Aubagne : du centre-ville historique aux nouveaux quartiers, en passant par les zones industrielles et commerciales.",

  mainServices: [
    {
      title: "Cloisons Sèches Aubagne",
      description: "Installation de cloisons sèches adaptées aux constructions aubagnaises, du patrimoine aux bâtiments contemporains."
    },
    {
      title: "Doublage et Isolation Aubagne",
      description: "Doublage des murs avec isolation thermique et phonique pour améliorer le confort dans les logements aubagnais."
    },
    {
      title: "Faux Plafonds Aubagne",
      description: "Installation de faux plafonds suspendus avec intégration d'éclairage pour valoriser vos espaces à Aubagne."
    },
    {
      title: "Finitions et Bandes Aubagne",
      description: "Finitions parfaites avec pose de bandes et enduits pour un résultat impeccable dans vos projets aubagnais."
    },
    {
      title: "Rénovation Placo Aubagne",
      description: "Rénovation et réparation de cloisons existantes pour moderniser vos espaces dans la région aubagnaise."
    },
    {
      title: "Aménagement Intérieur Aubagne",
      description: "Solutions d'aménagement sur mesure pour optimiser vos espaces résidentiels et commerciaux à Aubagne."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Aubagne",
    "Intervention rapide vallée Huveaune",
    "Expertise constructions locales",
    "Matériaux de qualité certifiés",
    "Entrepreneur du bâtiment expérimenté",
    "Connaissance spécificités aubagnaises",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Aubagne",
    "Équipe technique qualifiée",
    "Solutions adaptées climat provençal",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Rénovation maison centre-ville Aubagne",
      type: "Maison de ville - Rénovation complète",
      description: "Création de nouvelles cloisons, doublage isolation et faux plafonds dans maison traditionnelle provençale."
    },
    {
      title: "Aménagement local commercial Aubagne",
      type: "Commerce 150m² - Cloisons modulaires",
      description: "Installation de cloisons sèches et faux plafonds pour création d'espaces commerciaux modernes."
    },
    {
      title: "Isolation appartement résidence neuve",
      type: "Appartement T4 - Doublage phonique",
      description: "Doublage isolation phonique pour amélioration confort acoustique en résidence récente."
    }
  ],
  
  contactInfo: {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Marseille, Provence-Alpes-Côte d'Azur"
  },
  
  nearbyAreas: [
    "Marseille",
    "La Ciotat",
    "Cassis",
    "Roquevaire",
    "Saint-Zacharie",
    "Nans-les-Pins",
    "Plan-d'Aups-Sainte-Baume",
    "Gémenos",
    "Cuges-les-Pins",
    "Belcodène",
    "La Destrousse",
    "Peypin"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteAubagneConfig.sectorName,
  plaquisteAubagneConfig.location,
  plaquisteAubagneConfig.description,
  plaquisteAubagneConfig.keywords
);

export default function PlaquisteAubagnePage() {
  return <SectorPage {...plaquisteAubagneConfig} />;
}
