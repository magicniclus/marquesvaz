import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const fibreOise60Config = {
  title: "Travaux Fibre Optique Oise 60 - RAFCOM",
  description: "Spécialiste travaux fibre optique Oise 60. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit.",
  keywords: [
    "travaux fibre Oise 60",
    "fourreau bouché 60",
    "détection point blocage Oise",
    "raccordement fibre complexe 60",
    "urgence fibre Oise",
    "débouchage fourreaux 60",
    "entrepreneur fibre Oise",
    "devis travaux fibre 60"
  ],
  
  sectorName: "Oise (60)",
  heroImage: "/prestation-5.png",
  heroTitle: "Entreprise travaux fibre optique dans l'Oise",
  heroSubtitle: "Spécialiste fibre optique Oise 60. Interventions techniques pour débouchage fourreaux, détection blocages et raccordements complexes dans tout le département.",
  
  location: "Oise (60)",
  
  mainDescription: "RAFCOM couvre l'ensemble du département de l'Oise (60) pour vos travaux fibre optique. De Beauvais à Compiègne, en passant par Creil et Senlis, nous maîtrisons les spécificités des infrastructures oisienne. Notre expertise s'étend des centres urbains aux zones rurales, en passant par les secteurs aéroportuaires de Roissy-Charles de Gaulle.",
  
  mainServices: [
    {
      title: "Travaux Fibre Optique",
      description: "Installation et maintenance de réseaux fibre optique sur l'ensemble du département Oise."
    },
    {
      title: "Fourreau Bouché",
      description: "Débouchage spécialisé de fourreaux télécommunications avec techniques adaptées au 60."
    },
    {
      title: "Détection de Point de Blocage",
      description: "Diagnostic précis des obstructions avec équipements haute technologie pour réseaux Oise."
    },
    {
      title: "Raccordement Fibre Complexe",
      description: "Solutions techniques pour raccordements difficiles en zones aéroportuaires et urbaines."
    },
    {
      title: "Urgence Fibre",
      description: "Service d'urgence 24h/24 pour interventions rapides sur tout le département Oise."
    },
    {
      title: "Solutions Aéroportuaires",
      description: "Expertise spécialisée pour zones aéroportuaires avec contraintes techniques spécifiques."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé",
    "Couverture complète Oise",
    "Expertise zones aéroportuaires",
    "Matériel professionnel haute technologie",
    "Service d'urgence 24h/24",
    "Connaissance spécificités 60",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie sur tous travaux",
    "Équipe technique spécialisée",
    "Solutions adaptées contraintes",
    "Respect normes aéronautiques"
  ],
  
  projectExamples: [
    {
      title: "Installation fibre aéroport Roissy-CDG",
      type: "Zone aéroportuaire - Contraintes sécuritaires",
      description: "Déploiement réseau fibre avec respect strict des contraintes sécuritaires aéroportuaires."
    },
    {
      title: "Débouchage fourreaux Beauvais",
      type: "Centre urbain - Réseau mixte",
      description: "Intervention sur réseau urbain avec techniques adaptées aux infrastructures existantes."
    },
    {
      title: "Urgence fibre Compiègne",
      type: "Zone d'activité - Panne critique",
      description: "Réparation d'urgence avec rétablissement rapide pour zone d'activité économique stratégique."
    }
  ],
  
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcomm.fr",
    address: "Paris (75015), Île-de-France"
  },
  
  nearbyAreas: [
    "Beauvais",
    "Compiègne",
    "Creil",
    "Senlis",
    "Noyon",
    "Clermont",
    "Méru",
    "Chantilly",
    "Pont-Sainte-Maxence",
    "Montataire",
    "Nogent-sur-Oise",
    "Gouvieux"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Travaux Fibre " + fibreOise60Config.sectorName,
  fibreOise60Config.location,
  fibreOise60Config.description,
  fibreOise60Config.keywords
);

export default function FibreOise60Page() {
  return <SectorPage {...fibreOise60Config} />;
}
