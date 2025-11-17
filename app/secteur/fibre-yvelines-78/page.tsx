import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const fibreYvelines78Config = {
  title: "Travaux Fibre Optique Yvelines 78 - RAFCOM",
  description: "Spécialiste travaux fibre optique Yvelines 78. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit.",
  keywords: [
    "travaux fibre Yvelines 78",
    "fourreau bouché 78",
    "détection point blocage Yvelines",
    "raccordement fibre complexe 78",
    "urgence fibre Yvelines",
    "débouchage fourreaux 78",
    "entrepreneur fibre Yvelines",
    "devis travaux fibre 78"
  ],
  
  sectorName: "Yvelines (78)",
  heroImage: "/prestation-3.png",
  heroTitle: "Entreprise travaux fibre optique dans les Yvelines",
  heroSubtitle: "Spécialiste fibre optique Yvelines 78. Interventions techniques pour débouchage fourreaux, détection blocages et raccordements complexes dans tout le département.",
  
  location: "Yvelines (78)",
  
  mainDescription: "RAFCOM intervient dans tout le département des Yvelines (78) pour vos travaux fibre optique. De Versailles à Saint-Germain-en-Laye, en passant par Poissy et Mantes-la-Jolie, nous maîtrisons les spécificités des infrastructures yvelinoises. Notre expertise couvre les zones résidentielles de prestige, les centres-villes historiques et les zones d'activité du département.",
  
  mainServices: [
    {
      title: "Travaux Fibre Optique",
      description: "Installation et maintenance de réseaux fibre optique adaptés aux spécificités des Yvelines."
    },
    {
      title: "Fourreau Bouché",
      description: "Débouchage professionnel de fourreaux télécommunications avec techniques spécialisées pour le 78."
    },
    {
      title: "Détection de Point de Blocage",
      description: "Localisation précise des obstructions avec équipements de diagnostic pour réseaux Yvelines."
    },
    {
      title: "Raccordement Fibre Complexe",
      description: "Solutions techniques pour raccordements difficiles en zones résidentielles de prestige."
    },
    {
      title: "Urgence Fibre",
      description: "Service d'urgence 24h/24 pour interventions rapides sur tout le département des Yvelines."
    },
    {
      title: "Maintenance Résidentielle",
      description: "Contrats de maintenance spécialisés pour résidences et copropriétés haut de gamme."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé",
    "Couverture complète Yvelines",
    "Expertise zones résidentielles prestige",
    "Matériel professionnel de pointe",
    "Service d'urgence disponible",
    "Connaissance spécificités 78",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie tous travaux",
    "Équipe technique qualifiée",
    "Solutions discrètes et soignées",
    "Respect environnement patrimonial"
  ],
  
  projectExamples: [
    {
      title: "Installation fibre Château de Versailles",
      type: "Site patrimonial - Contraintes historiques",
      description: "Installation fibre avec respect strict des contraintes patrimoniales et architecturales."
    },
    {
      title: "Débouchage fourreaux Saint-Germain-en-Laye",
      type: "Centre historique - Réseau ancien",
      description: "Intervention délicate sur fourreaux anciens avec préservation du patrimoine urbain."
    },
    {
      title: "Urgence fibre Poissy",
      type: "Zone d'activité - Panne critique",
      description: "Réparation d'urgence avec rétablissement rapide pour continuité d'activité économique."
    }
  ],
  
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcomm.fr",
    address: "Paris (75015), Île-de-France"
  },
  
  nearbyAreas: [
    "Versailles",
    "Saint-Germain-en-Laye",
    "Poissy",
    "Mantes-la-Jolie",
    "Sartrouville",
    "Conflans-Sainte-Honorine",
    "Les Mureaux",
    "Plaisir",
    "Trappes",
    "Rambouillet",
    "Houilles",
    "Chatou"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Travaux Fibre " + fibreYvelines78Config.sectorName,
  fibreYvelines78Config.location,
  fibreYvelines78Config.description,
  fibreYvelines78Config.keywords
);

export default function FibreYvelines78Page() {
  return <SectorPage {...fibreYvelines78Config} />;
}
