import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteAixConfig = {
  title: "Plaquiste Aix-en-Provence - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste Aix-en-Provence. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste Aix-en-Provence",
    "cloisons sèches Aix-en-Provence",
    "doublage murs Aix-en-Provence",
    "faux plafonds Aix-en-Provence",
    "finitions placo Aix-en-Provence",
    "rénovation placo Aix-en-Provence",
    "entrepreneur plaquiste Aix",
    "devis gratuit plaquiste Aix",
    "isolation thermique Aix-en-Provence",
    "travaux placo Aix-en-Provence"
  ],
  
  sectorName: "Aix-en-Provence",
  heroImage: "/prestation-2.png",
  heroTitle: "Entreprise de plaquiste à Aix-en-Provence",
  heroSubtitle: "Spécialiste plaquiste Aix-en-Provence et région. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions dans la ville de Cézanne.",
  
  location: "Aix-en-Provence",
  
  mainDescription: "Marques Vaz Placo intervient à Aix-en-Provence et sa région pour tous vos travaux de plaquiste. Notre expertise couvre cette ville universitaire et culturelle avec ses spécificités patrimoniales et modernes. Nous maîtrisons parfaitement les besoins d'Aix-en-Provence : du centre historique aux quartiers résidentiels, en passant par les zones d'activité et campus universitaires.",

  mainServices: [
    {
      title: "Cloisons Sèches Aix-en-Provence",
      description: "Installation de cloisons sèches respectueuses du patrimoine architectural aixois et adaptées aux constructions modernes."
    },
    {
      title: "Doublage et Isolation Aix",
      description: "Doublage des murs avec isolation thermique pour améliorer le confort dans les logements aixois anciens et récents."
    },
    {
      title: "Faux Plafonds Aix-en-Provence",
      description: "Installation de faux plafonds suspendus pour valoriser les espaces résidentiels et professionnels aixois."
    },
    {
      title: "Finitions et Bandes Aix",
      description: "Finitions parfaites avec pose de bandes et enduits pour un résultat impeccable dans vos projets aixois."
    },
    {
      title: "Rénovation Placo Aix-en-Provence",
      description: "Rénovation et modernisation de cloisons existantes dans les bâtiments historiques et contemporains d'Aix."
    },
    {
      title: "Aménagement Intérieur Aix",
      description: "Solutions d'aménagement sur mesure pour optimiser vos espaces de vie et bureaux à Aix-en-Provence."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Aix-en-Provence",
    "Intervention rapide région aixoise",
    "Expertise bâtiments historiques et modernes",
    "Matériaux de qualité certifiés",
    "Entrepreneur du bâtiment expérimenté",
    "Respect patrimoine architectural",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Aix-en-Provence",
    "Équipe technique qualifiée",
    "Solutions adaptées contraintes locales",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Rénovation hôtel particulier centre Aix",
      type: "Bâtiment historique - Rénovation respectueuse",
      description: "Création de cloisons et doublage isolation dans hôtel particulier XVIIIe avec respect des contraintes patrimoniales."
    },
    {
      title: "Aménagement bureaux Technopôle Aix",
      type: "Bureaux 300m² - Espaces modulaires",
      description: "Installation de cloisons sèches et faux plafonds techniques pour espace de travail high-tech."
    },
    {
      title: "Isolation villa quartier Puyricard",
      type: "Villa moderne - Doublage complet",
      description: "Doublage isolation thermique et phonique complète pour optimisation confort et performance énergétique."
    }
  ],
  
  contactInfo: {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Marseille, Provence-Alpes-Côte d'Azur"
  },
  
  nearbyAreas: [
    "Marseille",
    "Gardanne",
    "Bouc-Bel-Air",
    "Cabriès",
    "Les Pennes-Mirabeau",
    "Ventabren",
    "Eguilles",
    "Saint-Cannat",
    "Lambesc",
    "Peyrolles-en-Provence",
    "Meyreuil",
    "Fuveau"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteAixConfig.sectorName,
  plaquisteAixConfig.location,
  plaquisteAixConfig.description,
  plaquisteAixConfig.keywords
);

export default function PlaquisteAixPage() {
  return <SectorPage {...plaquisteAixConfig} />;
}
