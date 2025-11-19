import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteSalonConfig = {
  title: "Plaquiste Salon-de-Provence - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste Salon-de-Provence. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste Salon-de-Provence",
    "cloisons sèches Salon-de-Provence",
    "doublage murs Salon-de-Provence",
    "faux plafonds Salon-de-Provence",
    "finitions placo Salon-de-Provence",
    "rénovation placo Salon-de-Provence",
    "entrepreneur plaquiste Salon",
    "devis gratuit plaquiste Salon",
    "isolation thermique Salon-de-Provence",
    "travaux placo Salon-de-Provence"
  ],
  
  sectorName: "Salon-de-Provence",
  heroImage: "/prestation-5.png",
  heroTitle: "Entreprise de plaquiste à Salon-de-Provence",
  heroSubtitle: "Spécialiste plaquiste Salon-de-Provence et région. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions dans la ville de Nostradamus.",
  
  location: "Salon-de-Provence",
  
  mainDescription: "Marques Vaz Placo intervient à Salon-de-Provence et sa région pour tous vos travaux de plaquiste. Notre expertise couvre cette ville historique avec ses quartiers anciens et modernes. Nous maîtrisons parfaitement les besoins de Salon-de-Provence : du centre historique aux nouveaux lotissements, en passant par les zones d'activité et commerciales.",

  mainServices: [
    {
      title: "Cloisons Sèches Salon-de-Provence",
      description: "Installation de cloisons sèches respectueuses du patrimoine salonais et adaptées aux constructions contemporaines."
    },
    {
      title: "Doublage et Isolation Salon",
      description: "Doublage des murs avec isolation thermique pour améliorer le confort dans les logements salonais anciens et récents."
    },
    {
      title: "Faux Plafonds Salon-de-Provence",
      description: "Installation de faux plafonds suspendus pour valoriser les espaces résidentiels et professionnels salonais."
    },
    {
      title: "Finitions et Bandes Salon",
      description: "Finitions parfaites avec pose de bandes et enduits pour un résultat impeccable dans vos projets salonais."
    },
    {
      title: "Rénovation Placo Salon-de-Provence",
      description: "Rénovation et modernisation de cloisons existantes dans les bâtiments historiques et contemporains de Salon."
    },
    {
      title: "Aménagement Intérieur Salon",
      description: "Solutions d'aménagement sur mesure pour optimiser vos espaces de vie et de travail à Salon-de-Provence."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Salon-de-Provence",
    "Intervention rapide région salonaise",
    "Expertise bâtiments historiques et modernes",
    "Matériaux de qualité certifiés",
    "Entrepreneur du bâtiment expérimenté",
    "Respect patrimoine architectural",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Salon-de-Provence",
    "Équipe technique qualifiée",
    "Solutions adaptées contraintes locales",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Rénovation bastide centre Salon",
      type: "Bastide provençale - Rénovation respectueuse",
      description: "Création de cloisons et doublage isolation dans bastide XVIIIe avec respect des contraintes patrimoniales."
    },
    {
      title: "Aménagement bureaux zone d'activité",
      type: "Bureaux 200m² - Espaces modulaires",
      description: "Installation de cloisons sèches et faux plafonds techniques pour espace de travail moderne."
    },
    {
      title: "Isolation villa quartier résidentiel",
      type: "Villa contemporaine - Doublage complet",
      description: "Doublage isolation thermique et phonique complète pour optimisation confort et performance énergétique."
    }
  ],
  
  contactInfo: {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Marseille, Provence-Alpes-Côte d'Azur"
  },
  
  nearbyAreas: [
    "Pélissanne",
    "Lançon-Provence",
    "Miramas",
    "Istres",
    "Grans",
    "Saint-Chamas",
    "Berre-l'Étang",
    "Rognac",
    "Velaux",
    "Coudoux",
    "Ventabren",
    "Éguilles"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteSalonConfig.sectorName,
  plaquisteSalonConfig.location,
  plaquisteSalonConfig.description,
  plaquisteSalonConfig.keywords
);

export default function PlaquisteSalonPage() {
  return <SectorPage {...plaquisteSalonConfig} />;
}
