import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteGardanneConfig = {
  title: "Plaquiste Gardanne - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste Gardanne. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste Gardanne",
    "cloisons sèches Gardanne",
    "doublage murs Gardanne",
    "faux plafonds Gardanne",
    "finitions placo Gardanne",
    "rénovation placo Gardanne",
    "entrepreneur plaquiste Gardanne",
    "devis gratuit plaquiste Gardanne",
    "isolation thermique Gardanne",
    "travaux placo Gardanne"
  ],
  
  sectorName: "Gardanne",
  heroImage: "/prestation-5.png",
  heroTitle: "Entreprise de plaquiste à Gardanne",
  heroSubtitle: "Spécialiste plaquiste Gardanne et région. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions entre Aix et Marseille.",
  
  location: "Gardanne",
  
  mainDescription: "Marques Vaz Placo intervient à Gardanne et sa région pour tous vos travaux de plaquiste. Notre expertise couvre cette ville dynamique située entre Aix-en-Provence et Marseille. Nous maîtrisons parfaitement les besoins de Gardanne : du centre-ville aux quartiers résidentiels, en passant par les zones d'activité et les nouveaux développements urbains.",

  mainServices: [
    {
      title: "Cloisons Sèches Gardanne",
      description: "Installation de cloisons sèches adaptées aux constructions gardannaises, du patrimoine minier aux bâtiments contemporains."
    },
    {
      title: "Doublage et Isolation Gardanne",
      description: "Doublage des murs avec isolation thermique et phonique pour améliorer le confort dans les logements gardannais."
    },
    {
      title: "Faux Plafonds Gardanne",
      description: "Installation de faux plafonds suspendus avec intégration d'éclairage pour valoriser vos espaces à Gardanne."
    },
    {
      title: "Finitions et Bandes Gardanne",
      description: "Finitions parfaites avec pose de bandes et enduits pour un résultat impeccable dans vos projets gardannais."
    },
    {
      title: "Rénovation Placo Gardanne",
      description: "Rénovation et réparation de cloisons existantes pour moderniser vos espaces dans la région gardannaise."
    },
    {
      title: "Aménagement Intérieur Gardanne",
      description: "Solutions d'aménagement sur mesure pour optimiser vos espaces résidentiels et professionnels à Gardanne."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Gardanne",
    "Intervention rapide région gardannaise",
    "Expertise constructions locales",
    "Matériaux de qualité certifiés",
    "Entrepreneur du bâtiment expérimenté",
    "Connaissance spécificités gardannaises",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Gardanne",
    "Équipe technique qualifiée",
    "Solutions adaptées climat provençal",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Rénovation maison centre Gardanne",
      type: "Maison de ville - Rénovation complète",
      description: "Création de nouvelles cloisons, doublage isolation et faux plafonds dans maison traditionnelle provençale."
    },
    {
      title: "Aménagement bureaux zone d'activité",
      type: "Bureaux 250m² - Espaces modulaires",
      description: "Installation de cloisons sèches et faux plafonds techniques pour espace de travail moderne."
    },
    {
      title: "Isolation villa quartier résidentiel",
      type: "Villa moderne - Doublage complet",
      description: "Doublage isolation thermique et phonique complète pour optimisation confort et économies d'énergie."
    }
  ],
  
  contactInfo: {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Marseille, Provence-Alpes-Côte d'Azur"
  },
  
  nearbyAreas: [
    "Aix-en-Provence",
    "Marseille",
    "Bouc-Bel-Air",
    "Cabriès",
    "Simiane-Collongue",
    "Mimet",
    "Gréasque",
    "Fuveau",
    "Belcodène",
    "La Destrousse",
    "Peypin",
    "Auriol"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteGardanneConfig.sectorName,
  plaquisteGardanneConfig.location,
  plaquisteGardanneConfig.description,
  plaquisteGardanneConfig.keywords
);

export default function PlaquisteGardannePage() {
  return <SectorPage {...plaquisteGardanneConfig} />;
}
