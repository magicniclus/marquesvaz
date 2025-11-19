import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteIstresConfig = {
  title: "Plaquiste Istres - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste Istres. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste Istres",
    "cloisons sèches Istres",
    "doublage murs Istres",
    "faux plafonds Istres",
    "finitions placo Istres",
    "rénovation placo Istres",
    "entrepreneur plaquiste Istres",
    "devis gratuit plaquiste Istres",
    "isolation thermique Istres",
    "travaux placo Istres"
  ],
  
  sectorName: "Istres",
  heroImage: "/prestation-1.png",
  heroTitle: "Entreprise de plaquiste à Istres",
  heroSubtitle: "Spécialiste plaquiste Istres et région de l'Étang de Berre. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions.",
  
  location: "Istres",
  
  mainDescription: "Marques Vaz Placo intervient à Istres et dans la région de l'Étang de Berre pour tous vos travaux de plaquiste. Notre expertise couvre cette ville dynamique avec ses quartiers résidentiels et zones d'activité. Nous maîtrisons parfaitement les besoins d'Istres : du centre-ville aux nouveaux quartiers, en passant par les zones industrielles et commerciales.",

  mainServices: [
    {
      title: "Cloisons Sèches Istres",
      description: "Installation de cloisons sèches adaptées aux constructions istriennes, du patrimoine aux bâtiments contemporains."
    },
    {
      title: "Doublage et Isolation Istres",
      description: "Doublage des murs avec isolation thermique et phonique pour améliorer le confort dans les logements istriens."
    },
    {
      title: "Faux Plafonds Istres",
      description: "Installation de faux plafonds suspendus avec intégration d'éclairage pour valoriser vos espaces à Istres."
    },
    {
      title: "Finitions et Bandes Istres",
      description: "Finitions parfaites avec pose de bandes et enduits pour un résultat impeccable dans vos projets istriens."
    },
    {
      title: "Rénovation Placo Istres",
      description: "Rénovation et réparation de cloisons existantes pour moderniser vos espaces dans la région istrienne."
    },
    {
      title: "Aménagement Intérieur Istres",
      description: "Solutions d'aménagement sur mesure pour optimiser vos espaces résidentiels et professionnels à Istres."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Istres",
    "Intervention rapide région Étang de Berre",
    "Expertise constructions locales",
    "Matériaux de qualité certifiés",
    "Entrepreneur du bâtiment expérimenté",
    "Connaissance spécificités istriennes",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Istres",
    "Équipe technique qualifiée",
    "Solutions adaptées climat provençal",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Rénovation maison centre-ville Istres",
      type: "Maison de ville - Rénovation complète",
      description: "Création de nouvelles cloisons, doublage isolation et faux plafonds dans maison traditionnelle provençale."
    },
    {
      title: "Aménagement local commercial Istres",
      type: "Commerce 180m² - Cloisons modulaires",
      description: "Installation de cloisons sèches et faux plafonds pour création d'espaces commerciaux modernes."
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
    "Fos-sur-Mer",
    "Miramas",
    "Saint-Mitre-les-Remparts",
    "Martigues",
    "Port-de-Bouc",
    "Berre-l'Étang",
    "Saint-Chamas",
    "Grans",
    "Salon-de-Provence",
    "Lançon-Provence",
    "Cornillon-Confoux",
    "Rassuen"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteIstresConfig.sectorName,
  plaquisteIstresConfig.location,
  plaquisteIstresConfig.description,
  plaquisteIstresConfig.keywords
);

export default function PlaquisteIstresPage() {
  return <SectorPage {...plaquisteIstresConfig} />;
}
