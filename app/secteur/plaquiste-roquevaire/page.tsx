import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteRoquevaire = {
  title: "Plaquiste Roquevaire - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste Roquevaire. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste Roquevaire",
    "cloisons sèches Roquevaire",
    "doublage murs Roquevaire",
    "faux plafonds Roquevaire",
    "finitions placo Roquevaire",
    "rénovation placo Roquevaire",
    "entrepreneur plaquiste Roquevaire",
    "devis gratuit plaquiste Roquevaire",
    "isolation thermique Roquevaire",
    "travaux placo Roquevaire"
  ],
  
  sectorName: "Roquevaire",
  heroImage: "/prestation-3.png",
  heroTitle: "Entreprise de plaquiste à Roquevaire",
  heroSubtitle: "Spécialiste plaquiste Roquevaire et région. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions dans cette commune provençale.",
  
  location: "Roquevaire",
  
  mainDescription: "Marques Vaz Placo intervient à Roquevaire et sa région pour tous vos travaux de plaquiste. Notre expertise couvre cette commune provençale située dans la vallée de l'Huveaune. Nous maîtrisons parfaitement les besoins de Roquevaire : du centre historique aux quartiers résidentiels, en passant par les zones d'activité et les nouvelles constructions.",

  mainServices: [
    {
      title: "Cloisons Sèches Roquevaire",
      description: "Installation de cloisons sèches adaptées aux constructions de Roquevaire, respectueuses du patrimoine provençal."
    },
    {
      title: "Doublage et Isolation Roquevaire",
      description: "Doublage des murs avec isolation thermique et phonique pour améliorer le confort dans les logements de Roquevaire."
    },
    {
      title: "Faux Plafonds Roquevaire",
      description: "Installation de faux plafonds suspendus avec intégration d'éclairage pour valoriser vos espaces à Roquevaire."
    },
    {
      title: "Finitions et Bandes Roquevaire",
      description: "Finitions parfaites avec pose de bandes et enduits pour un résultat impeccable dans vos projets à Roquevaire."
    },
    {
      title: "Rénovation Placo Roquevaire",
      description: "Rénovation et réparation de cloisons existantes pour moderniser vos espaces dans la région de Roquevaire."
    },
    {
      title: "Aménagement Intérieur Roquevaire",
      description: "Solutions d'aménagement sur mesure pour optimiser vos espaces résidentiels à Roquevaire."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Roquevaire",
    "Intervention rapide vallée Huveaune",
    "Expertise patrimoine provençal",
    "Matériaux de qualité certifiés",
    "Entrepreneur du bâtiment expérimenté",
    "Connaissance spécificités locales",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Roquevaire",
    "Équipe technique qualifiée",
    "Solutions adaptées climat provençal",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Rénovation maison de village Roquevaire",
      type: "Maison provençale - Rénovation respectueuse",
      description: "Création de cloisons et doublage isolation dans maison de village avec respect des contraintes patrimoniales."
    },
    {
      title: "Aménagement villa quartier résidentiel",
      type: "Villa moderne - Espaces sur mesure",
      description: "Installation de cloisons sèches et faux plafonds pour optimisation espaces de vie familiale."
    },
    {
      title: "Isolation maison ancienne Roquevaire",
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
    "Aubagne",
    "La Penne-sur-Huveaune",
    "Gémenos",
    "Saint-Zacharie",
    "Nans-les-Pins",
    "Plan-d'Aups-Sainte-Baume",
    "Belcodène",
    "La Destrousse",
    "Peypin",
    "Trets",
    "Pourcieux",
    "Pourrières"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteRoquevaire.sectorName,
  plaquisteRoquevaire.location,
  plaquisteRoquevaire.description,
  plaquisteRoquevaire.keywords
);

export default function PlaquisteRoquevaire() {
  return <SectorPage {...plaquisteRoquevaire} />;
}
