import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteDestrosse = {
  title: "Plaquiste La Destrousse - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste La Destrousse. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste La Destrousse",
    "cloisons sèches La Destrousse",
    "doublage murs La Destrousse",
    "faux plafonds La Destrousse",
    "finitions placo La Destrousse",
    "rénovation placo La Destrousse",
    "entrepreneur plaquiste La Destrousse",
    "devis gratuit plaquiste La Destrousse",
    "isolation thermique La Destrousse",
    "travaux placo La Destrousse"
  ],
  
  sectorName: "La Destrousse",
  heroImage: "/prestation-2.png",
  heroTitle: "Entreprise de plaquiste à La Destrousse",
  heroSubtitle: "Spécialiste plaquiste La Destrousse et région. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions dans cette commune provençale.",
  
  location: "La Destrousse",
  
  mainDescription: "Marques Vaz Placo intervient à La Destrousse et sa région pour tous vos travaux de plaquiste. Notre expertise couvre cette commune provençale située entre Aubagne et Gardanne. Nous maîtrisons parfaitement les besoins de La Destrousse : du centre-village aux quartiers résidentiels, en passant par les zones d'activité et les nouvelles constructions.",

  mainServices: [
    {
      title: "Cloisons Sèches La Destrousse",
      description: "Installation de cloisons sèches adaptées aux constructions de La Destrousse, respectueuses du patrimoine provençal."
    },
    {
      title: "Doublage et Isolation La Destrousse",
      description: "Doublage des murs avec isolation thermique et phonique pour améliorer le confort dans les logements de La Destrousse."
    },
    {
      title: "Faux Plafonds La Destrousse",
      description: "Installation de faux plafonds suspendus avec intégration d'éclairage pour valoriser vos espaces à La Destrousse."
    },
    {
      title: "Finitions et Bandes La Destrousse",
      description: "Finitions parfaites avec pose de bandes et enduits pour un résultat impeccable dans vos projets à La Destrousse."
    },
    {
      title: "Rénovation Placo La Destrousse",
      description: "Rénovation et réparation de cloisons existantes pour moderniser vos espaces dans la région de La Destrousse."
    },
    {
      title: "Aménagement Intérieur La Destrousse",
      description: "Solutions d'aménagement sur mesure pour optimiser vos espaces résidentiels à La Destrousse."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé La Destrousse",
    "Intervention rapide région Aubagne-Gardanne",
    "Expertise constructions provençales",
    "Matériaux de qualité certifiés",
    "Entrepreneur du bâtiment expérimenté",
    "Connaissance spécificités locales",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux La Destrousse",
    "Équipe technique qualifiée",
    "Solutions adaptées climat provençal",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Rénovation maison de village La Destrousse",
      type: "Maison provençale - Rénovation traditionnelle",
      description: "Création de cloisons et doublage isolation dans maison de village avec respect des techniques traditionnelles."
    },
    {
      title: "Aménagement villa quartier résidentiel",
      type: "Villa moderne - Espaces optimisés",
      description: "Installation de cloisons sèches et faux plafonds pour optimisation des espaces de vie familiale."
    },
    {
      title: "Isolation maison ancienne La Destrousse",
      type: "Maison traditionnelle - Doublage complet",
      description: "Doublage isolation thermique et phonique complète pour amélioration confort et économies d'énergie."
    }
  ],
  
  contactInfo: {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Marseille, Provence-Alpes-Côte d'Azur"
  },
  
  nearbyAreas: [
    "Aubagne",
    "Gardanne",
    "Belcodène",
    "Peypin",
    "Roquevaire",
    "Gémenos",
    "La Penne-sur-Huveaune",
    "Allauch",
    "Marseille",
    "Mimet",
    "Gréasque",
    "Fuveau"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteDestrosse.sectorName,
  plaquisteDestrosse.location,
  plaquisteDestrosse.description,
  plaquisteDestrosse.keywords
);

export default function PlaquisteDestrosse() {
  return <SectorPage {...plaquisteDestrosse} />;
}
