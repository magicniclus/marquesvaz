import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteLaPenne = {
  title: "Plaquiste La Penne-sur-Huveaune - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste La Penne-sur-Huveaune. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste La Penne-sur-Huveaune",
    "cloisons sèches La Penne-sur-Huveaune",
    "doublage murs La Penne-sur-Huveaune",
    "faux plafonds La Penne-sur-Huveaune",
    "finitions placo La Penne-sur-Huveaune",
    "rénovation placo La Penne-sur-Huveaune",
    "entrepreneur plaquiste La Penne",
    "devis gratuit plaquiste La Penne",
    "isolation thermique La Penne-sur-Huveaune",
    "travaux placo La Penne-sur-Huveaune"
  ],
  
  sectorName: "La Penne-sur-Huveaune",
  heroImage: "/prestation-2.png",
  heroTitle: "Entreprise de plaquiste à La Penne-sur-Huveaune",
  heroSubtitle: "Spécialiste plaquiste La Penne-sur-Huveaune et vallée de l'Huveaune. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions.",
  
  location: "La Penne-sur-Huveaune",
  
  mainDescription: "Marques Vaz Placo intervient à La Penne-sur-Huveaune et dans la vallée de l'Huveaune pour tous vos travaux de plaquiste. Notre expertise couvre cette commune dynamique située entre Marseille et Aubagne. Nous maîtrisons parfaitement les besoins de La Penne-sur-Huveaune : du centre-ville aux quartiers résidentiels, en passant par les zones d'activité et les nouvelles constructions.",

  mainServices: [
    {
      title: "Cloisons Sèches La Penne-sur-Huveaune",
      description: "Installation de cloisons sèches adaptées aux constructions de La Penne-sur-Huveaune, du patrimoine aux bâtiments contemporains."
    },
    {
      title: "Doublage et Isolation La Penne",
      description: "Doublage des murs avec isolation thermique et phonique pour améliorer le confort dans les logements de La Penne."
    },
    {
      title: "Faux Plafonds La Penne-sur-Huveaune",
      description: "Installation de faux plafonds suspendus avec intégration d'éclairage pour valoriser vos espaces à La Penne."
    },
    {
      title: "Finitions et Bandes La Penne",
      description: "Finitions parfaites avec pose de bandes et enduits pour un résultat impeccable dans vos projets à La Penne."
    },
    {
      title: "Rénovation Placo La Penne-sur-Huveaune",
      description: "Rénovation et réparation de cloisons existantes pour moderniser vos espaces dans la région de La Penne."
    },
    {
      title: "Aménagement Intérieur La Penne",
      description: "Solutions d'aménagement sur mesure pour optimiser vos espaces résidentiels et professionnels à La Penne."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé La Penne-sur-Huveaune",
    "Intervention rapide vallée Huveaune",
    "Expertise constructions locales",
    "Matériaux de qualité certifiés",
    "Entrepreneur du bâtiment expérimenté",
    "Connaissance spécificités vallée",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux La Penne-sur-Huveaune",
    "Équipe technique qualifiée",
    "Solutions adaptées climat provençal",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Rénovation appartement centre La Penne",
      type: "Appartement T4 - Rénovation complète",
      description: "Création de nouvelles cloisons, doublage isolation et faux plafonds dans appartement familial."
    },
    {
      title: "Aménagement local commercial La Penne",
      type: "Commerce 100m² - Cloisons modulaires",
      description: "Installation de cloisons sèches et faux plafonds pour création d'espaces commerciaux modernes."
    },
    {
      title: "Isolation maison quartier résidentiel",
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
    "Aubagne",
    "Marseille",
    "Roquevaire",
    "Gémenos",
    "Carnoux-en-Provence",
    "Allauch",
    "Plan-de-Cuques",
    "Belcodène",
    "La Destrousse",
    "Saint-Zacharie",
    "Nans-les-Pins",
    "Cuges-les-Pins"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteLaPenne.sectorName,
  plaquisteLaPenne.location,
  plaquisteLaPenne.description,
  plaquisteLaPenne.keywords
);

export default function PlaquisteLaPenne() {
  return <SectorPage {...plaquisteLaPenne} />;
}
