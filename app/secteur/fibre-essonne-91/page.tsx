import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const fibreEssonne91Config = {
  title: "Travaux Fibre Optique Essonne 91 - RAFCOM",
  description: "Spécialiste travaux fibre optique Essonne 91. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit.",
  keywords: [
    "travaux fibre Essonne 91",
    "fourreau bouché 91",
    "détection point blocage Essonne",
    "raccordement fibre complexe 91",
    "urgence fibre Essonne",
    "débouchage fourreaux 91",
    "entrepreneur fibre Essonne",
    "devis travaux fibre 91"
  ],
  
  sectorName: "Essonne (91)",
  heroImage: "/prestation-3.png",
  heroTitle: "Entreprise travaux fibre optique en Essonne",
  heroSubtitle: "Spécialiste fibre optique Essonne 91. Solutions techniques complètes pour débouchage fourreaux, détection blocages et raccordements sur tout le département.",
  
  location: "Essonne (91)",
  
  mainDescription: "RAFCOM couvre l'ensemble du département de l'Essonne (91) pour vos travaux fibre optique. D'Évry-Courcouronnes à Palaiseau, en passant par Corbeil-Essonnes et Massy, nous maîtrisons les spécificités des infrastructures essonniennes. Notre expertise s'étend des villes nouvelles aux pôles technologiques, en passant par les zones rurales du département.",
  
  mainServices: [
    {
      title: "Travaux Fibre Optique",
      description: "Installation et maintenance de réseaux fibre optique sur l'ensemble du département Essonne."
    },
    {
      title: "Fourreau Bouché",
      description: "Débouchage spécialisé de fourreaux télécommunications avec techniques adaptées au 91."
    },
    {
      title: "Détection de Point de Blocage",
      description: "Diagnostic précis des obstructions avec équipements haute technologie pour réseaux Essonne."
    },
    {
      title: "Raccordement Fibre Complexe",
      description: "Solutions techniques pour raccordements difficiles en zones technologiques et urbaines."
    },
    {
      title: "Urgence Fibre",
      description: "Service d'urgence 24h/24 pour interventions rapides sur tout le département Essonne."
    },
    {
      title: "Solutions Technopoles",
      description: "Expertise spécialisée pour pôles technologiques et centres de recherche du 91."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé",
    "Couverture complète Essonne",
    "Expertise pôles technologiques",
    "Matériel professionnel haute technologie",
    "Service d'urgence 24h/24",
    "Connaissance spécificités 91",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie sur tous travaux",
    "Équipe technique spécialisée",
    "Solutions haute performance",
    "Respect normes techniques strictes"
  ],
  
  projectExamples: [
    {
      title: "Installation fibre Plateau de Saclay",
      type: "Pôle technologique - Haute performance",
      description: "Déploiement réseau fibre haute performance pour centres de recherche et entreprises tech."
    },
    {
      title: "Débouchage fourreaux Évry-Courcouronnes",
      type: "Ville nouvelle - Infrastructure moderne",
      description: "Intervention sur réseau moderne avec techniques adaptées aux infrastructures récentes."
    },
    {
      title: "Urgence fibre Massy",
      type: "Hub transport - Panne critique",
      description: "Réparation d'urgence avec rétablissement express pour hub de transport stratégique."
    }
  ],
  
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcomm.fr",
    address: "Paris (75015), Île-de-France"
  },
  
  nearbyAreas: [
    "Évry-Courcouronnes",
    "Corbeil-Essonnes",
    "Massy",
    "Palaiseau",
    "Sainte-Geneviève-des-Bois",
    "Viry-Châtillon",
    "Athis-Mons",
    "Yerres",
    "Brunoy",
    "Ris-Orangis",
    "Grigny",
    "Étampes"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Travaux Fibre " + fibreEssonne91Config.sectorName,
  fibreEssonne91Config.location,
  fibreEssonne91Config.description,
  fibreEssonne91Config.keywords
);

export default function FibreEssonne91Page() {
  return <SectorPage {...fibreEssonne91Config} />;
}
