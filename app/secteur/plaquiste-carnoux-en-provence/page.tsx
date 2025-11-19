import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteCarnoux = {
  title: "Plaquiste Carnoux-en-Provence - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste Carnoux-en-Provence. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste Carnoux-en-Provence",
    "cloisons sèches Carnoux-en-Provence",
    "doublage murs Carnoux-en-Provence",
    "faux plafonds Carnoux-en-Provence",
    "finitions placo Carnoux-en-Provence",
    "rénovation placo Carnoux-en-Provence",
    "entrepreneur plaquiste Carnoux",
    "devis gratuit plaquiste Carnoux",
    "isolation thermique Carnoux-en-Provence",
    "travaux placo Carnoux-en-Provence"
  ],
  
  sectorName: "Carnoux-en-Provence",
  heroImage: "/prestation-1.png",
  heroTitle: "Entreprise de plaquiste à Carnoux-en-Provence",
  heroSubtitle: "Spécialiste plaquiste Carnoux-en-Provence et région. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions dans cette commune résidentielle.",
  
  location: "Carnoux-en-Provence",
  
  mainDescription: "Marques Vaz Placo intervient à Carnoux-en-Provence et sa région pour tous vos travaux de plaquiste. Notre expertise couvre cette commune résidentielle prisée avec ses villas et lotissements modernes. Nous maîtrisons parfaitement les besoins de Carnoux-en-Provence : des quartiers pavillonnaires aux zones d'activité, en passant par les nouvelles constructions et rénovations.",

  mainServices: [
    {
      title: "Cloisons Sèches Carnoux-en-Provence",
      description: "Installation de cloisons sèches adaptées aux constructions résidentielles de Carnoux-en-Provence, villas et maisons individuelles."
    },
    {
      title: "Doublage et Isolation Carnoux",
      description: "Doublage des murs avec isolation thermique et phonique pour améliorer le confort dans les logements de Carnoux."
    },
    {
      title: "Faux Plafonds Carnoux-en-Provence",
      description: "Installation de faux plafonds suspendus avec intégration d'éclairage pour valoriser vos espaces à Carnoux."
    },
    {
      title: "Finitions et Bandes Carnoux",
      description: "Finitions parfaites avec pose de bandes et enduits pour un résultat impeccable dans vos projets à Carnoux."
    },
    {
      title: "Rénovation Placo Carnoux-en-Provence",
      description: "Rénovation et réparation de cloisons existantes pour moderniser vos espaces dans la région de Carnoux."
    },
    {
      title: "Aménagement Intérieur Carnoux",
      description: "Solutions d'aménagement sur mesure pour optimiser vos espaces résidentiels à Carnoux-en-Provence."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Carnoux-en-Provence",
    "Intervention rapide région Est Marseille",
    "Expertise constructions résidentielles",
    "Matériaux de qualité certifiés",
    "Entrepreneur du bâtiment expérimenté",
    "Connaissance spécificités locales",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Carnoux-en-Provence",
    "Équipe technique qualifiée",
    "Solutions adaptées habitat pavillonnaire",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Rénovation villa quartier résidentiel Carnoux",
      type: "Villa 5 pièces - Rénovation complète",
      description: "Création de nouvelles cloisons, doublage isolation et faux plafonds dans villa moderne avec piscine."
    },
    {
      title: "Aménagement maison individuelle Carnoux",
      type: "Maison neuve - Cloisons sur mesure",
      description: "Installation de cloisons sèches modulaires et faux plafonds pour optimisation espaces de vie."
    },
    {
      title: "Isolation extension maison Carnoux",
      type: "Extension 40m² - Doublage complet",
      description: "Doublage isolation thermique et phonique complète pour extension avec création bureau."
    }
  ],
  
  contactInfo: {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Marseille, Provence-Alpes-Côte d'Azur"
  },
  
  nearbyAreas: [
    "Aubagne",
    "Cassis",
    "La Ciotat",
    "Gémenos",
    "Roquefort-la-Bédoule",
    "Cuges-les-Pins",
    "Ceyreste",
    "Marseille",
    "Allauch",
    "Plan-de-Cuques",
    "Roquevaire",
    "Saint-Zacharie"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteCarnoux.sectorName,
  plaquisteCarnoux.location,
  plaquisteCarnoux.description,
  plaquisteCarnoux.keywords
);

export default function PlaquisteCarnoux() {
  return <SectorPage {...plaquisteCarnoux} />;
}
