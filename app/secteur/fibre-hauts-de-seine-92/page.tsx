import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const fibreHautsDeSeine92Config = {
  title: "Travaux Fibre Optique Hauts-de-Seine 92 - RAFCOM",
  description: "Spécialiste travaux fibre optique Hauts-de-Seine 92. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit.",
  keywords: [
    "travaux fibre Hauts-de-Seine 92",
    "fourreau bouché 92",
    "détection point blocage Hauts-de-Seine",
    "raccordement fibre complexe 92",
    "urgence fibre Hauts-de-Seine",
    "débouchage fourreaux 92",
    "entrepreneur fibre Hauts-de-Seine",
    "devis travaux fibre 92"
  ],
  
  sectorName: "Hauts-de-Seine (92)",
  heroImage: "/prestation-2.png",
  heroTitle: "Entreprise travaux fibre optique dans les Hauts-de-Seine",
  heroSubtitle: "Spécialiste fibre optique Hauts-de-Seine 92. Interventions techniques pour débouchage fourreaux, détection blocages et raccordements complexes sur tout le département.",
  
  location: "Hauts-de-Seine (92)",
  
  mainDescription: "RAFCOM couvre l'ensemble du département des Hauts-de-Seine (92) pour tous vos travaux fibre optique. Notre expertise s'étend de Boulogne-Billancourt à Levallois-Perret, en passant par Issy-les-Moulineaux et Neuilly-sur-Seine. Nous maîtrisons les spécificités des infrastructures du 92 : immeubles de bureaux de La Défense, résidences haussmanniennes et constructions modernes.",
  
  mainServices: [
    {
      title: "Travaux Fibre Optique",
      description: "Installation et maintenance de réseaux fibre optique sur l'ensemble du département des Hauts-de-Seine."
    },
    {
      title: "Fourreau Bouché",
      description: "Débouchage professionnel de fourreaux télécommunications avec techniques adaptées aux infrastructures du 92."
    },
    {
      title: "Détection de Point de Blocage",
      description: "Localisation précise des obstructions dans les réseaux télécom avec équipements de diagnostic de pointe."
    },
    {
      title: "Raccordement Fibre Complexe",
      description: "Solutions techniques pour raccordements difficiles, notamment dans les immeubles de bureaux de La Défense."
    },
    {
      title: "Urgence Fibre",
      description: "Interventions d'urgence 24h/24 sur tout le département des Hauts-de-Seine pour rétablissement rapide."
    },
    {
      title: "Maintenance Entreprises",
      description: "Contrats de maintenance spécialisés pour entreprises et immeubles de bureaux du département."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé",
    "Couverture complète Hauts-de-Seine",
    "Expertise La Défense et centres d'affaires",
    "Équipements professionnels haute technologie",
    "Service d'urgence 24h/24",
    "Connaissance infrastructures 92",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie tous travaux",
    "Équipe technique expérimentée",
    "Solutions entreprises et particuliers",
    "Respect normes télécoms strictes"
  ],
  
  projectExamples: [
    {
      title: "Installation fibre La Défense",
      type: "Tour de bureaux - 30 étages",
      description: "Installation complète réseau fibre optique avec raccordements multiples et certification haute performance."
    },
    {
      title: "Débouchage fourreaux Boulogne-Billancourt",
      type: "Résidence 8 étages - Conduits obstrués",
      description: "Intervention débouchage avec techniques spécialisées et tests de continuité complets."
    },
    {
      title: "Urgence fibre Neuilly-sur-Seine",
      type: "Panne critique entreprise",
      description: "Réparation d'urgence avec rétablissement service en 1h30 pour continuité activité critique."
    }
  ],
  
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcomm.fr",
    address: "Paris (75015), Île-de-France"
  },
  
  nearbyAreas: [
    "Boulogne-Billancourt",
    "Issy-les-Moulineaux",
    "Neuilly-sur-Seine",
    "Levallois-Perret",
    "Courbevoie",
    "Puteaux",
    "Suresnes",
    "Nanterre",
    "Rueil-Malmaison",
    "Saint-Cloud",
    "Clichy",
    "Asnières-sur-Seine"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Travaux Fibre " + fibreHautsDeSeine92Config.sectorName,
  fibreHautsDeSeine92Config.location,
  fibreHautsDeSeine92Config.description,
  fibreHautsDeSeine92Config.keywords
);

export default function FibreHautsDeSeine92Page() {
  return <SectorPage {...fibreHautsDeSeine92Config} />;
}
