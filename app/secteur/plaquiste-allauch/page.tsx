import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteAllauch = {
  title: "Plaquiste Allauch - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste Allauch. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste Allauch",
    "cloisons sèches Allauch",
    "doublage murs Allauch",
    "faux plafonds Allauch",
    "finitions placo Allauch",
    "rénovation placo Allauch",
    "entrepreneur plaquiste Allauch",
    "devis gratuit plaquiste Allauch",
    "isolation thermique Allauch",
    "travaux placo Allauch"
  ],
  
  sectorName: "Allauch",
  heroImage: "/prestation-1.png",
  heroTitle: "Entreprise de plaquiste à Allauch",
  heroSubtitle: "Spécialiste plaquiste Allauch et région. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions dans cette commune des collines marseillaises.",
  
  location: "Allauch",
  
  mainDescription: "Marques Vaz Placo intervient à Allauch et sa région pour tous vos travaux de plaquiste. Notre expertise couvre cette commune pittoresque des collines marseillaises, réputée pour son cadre de vie exceptionnel. Nous maîtrisons parfaitement les besoins d'Allauch : du centre historique aux quartiers résidentiels, en passant par les villas avec vue panoramique et les propriétés de caractère.",

  mainServices: [
    {
      title: "Cloisons Sèches Allauch",
      description: "Installation de cloisons sèches adaptées aux constructions d'Allauch, respectueuses du patrimoine et du cadre naturel."
    },
    {
      title: "Doublage et Isolation Allauch",
      description: "Doublage des murs avec isolation thermique et phonique pour améliorer le confort dans les logements d'Allauch."
    },
    {
      title: "Faux Plafonds Allauch",
      description: "Installation de faux plafonds suspendus avec intégration d'éclairage pour valoriser vos espaces à Allauch."
    },
    {
      title: "Finitions et Bandes Allauch",
      description: "Finitions parfaites avec pose de bandes et enduits pour un résultat impeccable dans vos projets à Allauch."
    },
    {
      title: "Rénovation Placo Allauch",
      description: "Rénovation et réparation de cloisons existantes pour moderniser vos espaces dans la région d'Allauch."
    },
    {
      title: "Aménagement Intérieur Allauch",
      description: "Solutions d'aménagement sur mesure pour optimiser vos espaces résidentiels de prestige à Allauch."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Allauch",
    "Intervention rapide collines marseillaises",
    "Expertise constructions de prestige",
    "Matériaux de qualité certifiés",
    "Entrepreneur du bâtiment expérimenté",
    "Respect patrimoine et environnement",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Allauch",
    "Équipe technique qualifiée",
    "Solutions adaptées habitat de qualité",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Rénovation villa vue panoramique Allauch",
      type: "Villa de prestige - Rénovation haut de gamme",
      description: "Création de cloisons et doublage isolation dans villa d'exception avec vue panoramique sur Marseille."
    },
    {
      title: "Aménagement maison de village Allauch",
      type: "Maison provençale - Modernisation respectueuse",
      description: "Installation de cloisons sèches et faux plafonds pour modernisation d'une maison de village historique."
    },
    {
      title: "Isolation propriété de caractère Allauch",
      type: "Bastide provençale - Doublage complet",
      description: "Doublage isolation thermique et phonique complète pour amélioration confort bastide de caractère."
    }
  ],
  
  contactInfo: {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Marseille, Provence-Alpes-Côte d'Azur"
  },
  
  nearbyAreas: [
    "Marseille",
    "Plan-de-Cuques",
    "La Penne-sur-Huveaune",
    "Aubagne",
    "Roquevaire",
    "Belcodène",
    "Gardanne",
    "Simiane-Collongue",
    "Mimet",
    "Gréasque",
    "Carnoux-en-Provence",
    "Septèmes-les-Vallons"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteAllauch.sectorName,
  plaquisteAllauch.location,
  plaquisteAllauch.description,
  plaquisteAllauch.keywords
);

export default function PlaquisteAllauch() {
  return <SectorPage {...plaquisteAllauch} />;
}
