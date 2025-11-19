import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteRoquefort = {
  title: "Plaquiste Roquefort-la-Bédoule - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste Roquefort-la-Bédoule. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste Roquefort-la-Bédoule",
    "cloisons sèches Roquefort-la-Bédoule",
    "doublage murs Roquefort-la-Bédoule",
    "faux plafonds Roquefort-la-Bédoule",
    "finitions placo Roquefort-la-Bédoule",
    "rénovation placo Roquefort-la-Bédoule",
    "entrepreneur plaquiste Roquefort",
    "devis gratuit plaquiste Roquefort",
    "isolation thermique Roquefort-la-Bédoule",
    "travaux placo Roquefort-la-Bédoule"
  ],
  
  sectorName: "Roquefort-la-Bédoule",
  heroImage: "/prestation-5.png",
  heroTitle: "Entreprise de plaquiste à Roquefort-la-Bédoule",
  heroSubtitle: "Spécialiste plaquiste Roquefort-la-Bédoule et région. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions entre Cassis et Aubagne.",
  
  location: "Roquefort-la-Bédoule",
  
  mainDescription: "Marques Vaz Placo intervient à Roquefort-la-Bédoule et sa région pour tous vos travaux de plaquiste. Notre expertise couvre cette commune située entre Cassis et Aubagne, dans un cadre naturel préservé. Nous maîtrisons parfaitement les besoins de Roquefort-la-Bédoule : du centre-village aux quartiers résidentiels, en passant par les villas et les propriétés de caractère.",

  mainServices: [
    {
      title: "Cloisons Sèches Roquefort-la-Bédoule",
      description: "Installation de cloisons sèches adaptées aux constructions de Roquefort-la-Bédoule, respectueuses du cadre naturel."
    },
    {
      title: "Doublage et Isolation Roquefort",
      description: "Doublage des murs avec isolation thermique et phonique pour améliorer le confort dans les logements de Roquefort."
    },
    {
      title: "Faux Plafonds Roquefort-la-Bédoule",
      description: "Installation de faux plafonds suspendus avec intégration d'éclairage pour valoriser vos espaces à Roquefort."
    },
    {
      title: "Finitions et Bandes Roquefort",
      description: "Finitions parfaites avec pose de bandes et enduits pour un résultat impeccable dans vos projets à Roquefort."
    },
    {
      title: "Rénovation Placo Roquefort-la-Bédoule",
      description: "Rénovation et réparation de cloisons existantes pour moderniser vos espaces dans la région de Roquefort."
    },
    {
      title: "Aménagement Intérieur Roquefort",
      description: "Solutions d'aménagement sur mesure pour optimiser vos espaces résidentiels à Roquefort-la-Bédoule."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Roquefort-la-Bédoule",
    "Intervention rapide région Cassis-Aubagne",
    "Expertise constructions en milieu naturel",
    "Matériaux de qualité certifiés",
    "Entrepreneur du bâtiment expérimenté",
    "Respect environnement préservé",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Roquefort-la-Bédoule",
    "Équipe technique qualifiée",
    "Solutions adaptées climat provençal",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Rénovation maison de caractère Roquefort",
      type: "Maison provençale - Rénovation respectueuse",
      description: "Création de cloisons et doublage isolation dans maison de caractère avec respect du patrimoine local."
    },
    {
      title: "Aménagement villa moderne Roquefort",
      type: "Villa contemporaine - Espaces ouverts",
      description: "Installation de cloisons sèches et faux plafonds pour création d'espaces de vie modernes et lumineux."
    },
    {
      title: "Isolation maison ancienne Roquefort",
      type: "Maison traditionnelle - Doublage complet",
      description: "Doublage isolation thermique et phonique complète pour amélioration confort et performance énergétique."
    }
  ],
  
  contactInfo: {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Marseille, Provence-Alpes-Côte d'Azur"
  },
  
  nearbyAreas: [
    "Cassis",
    "Aubagne",
    "La Ciotat",
    "Carnoux-en-Provence",
    "Gémenos",
    "Cuges-les-Pins",
    "Ceyreste",
    "Marseille",
    "Roquevaire",
    "La Penne-sur-Huveaune",
    "Saint-Zacharie",
    "Bandol"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteRoquefort.sectorName,
  plaquisteRoquefort.location,
  plaquisteRoquefort.description,
  plaquisteRoquefort.keywords
);

export default function PlaquisteRoquefort() {
  return <SectorPage {...plaquisteRoquefort} />;
}
