import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const fibreNord59Config = {
  title: "Travaux Fibre Optique Nord 59 - RAFCOM",
  description: "Spécialiste travaux fibre optique Nord 59. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit.",
  keywords: [
    "travaux fibre Nord 59",
    "fourreau bouché 59",
    "détection point blocage Nord",
    "raccordement fibre complexe 59",
    "urgence fibre Nord",
    "débouchage fourreaux 59",
    "entrepreneur fibre Nord",
    "devis travaux fibre 59"
  ],
  
  sectorName: "Nord (59)",
  heroImage: "/prestation-5.png",
  heroTitle: "Entreprise travaux fibre optique dans le Nord",
  heroSubtitle: "Spécialiste fibre optique Nord 59. Interventions techniques pour débouchage fourreaux, détection blocages et raccordements complexes dans tout le département.",
  
  location: "Nord (59)",
  
  mainDescription: "RAFCOM couvre l'ensemble du département du Nord (59) pour vos travaux fibre optique. De Lille à Valenciennes, en passant par Roubaix et Tourcoing, nous maîtrisons les spécificités des infrastructures nordistes. Notre expertise s'étend de la métropole lilloise aux zones frontalières, en passant par les secteurs industriels historiques.",
  
  mainServices: [
    {
      title: "Travaux Fibre Optique",
      description: "Installation et maintenance de réseaux fibre optique sur l'ensemble du département Nord."
    },
    {
      title: "Fourreau Bouché",
      description: "Débouchage spécialisé de fourreaux télécommunications avec techniques adaptées au 59."
    },
    {
      title: "Détection de Point de Blocage",
      description: "Diagnostic précis des obstructions avec équipements haute technologie pour réseaux Nord."
    },
    {
      title: "Raccordement Fibre Complexe",
      description: "Solutions techniques pour raccordements difficiles en zones métropolitaines denses."
    },
    {
      title: "Urgence Fibre",
      description: "Service d'urgence 24h/24 pour interventions rapides sur tout le département Nord."
    },
    {
      title: "Solutions Métropolitaines",
      description: "Expertise spécialisée pour métropole lilloise et zones urbaines denses du 59."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé",
    "Couverture complète Nord",
    "Expertise métropole lilloise",
    "Matériel professionnel adapté",
    "Service d'urgence 24h/24",
    "Connaissance spécificités 59",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie sur tous travaux",
    "Équipe technique expérimentée",
    "Solutions métropolitaines",
    "Respect réglementations locales"
  ],
  
  projectExamples: [
    {
      title: "Installation fibre métropole Lille",
      type: "Zone métropolitaine - Infrastructure dense",
      description: "Déploiement réseau fibre haute performance pour métropole européenne de Lille."
    },
    {
      title: "Débouchage fourreaux Roubaix",
      type: "Zone urbaine dense - Réseau ancien",
      description: "Intervention sur ancien réseau industriel avec techniques adaptées aux contraintes urbaines."
    },
    {
      title: "Urgence fibre Valenciennes",
      type: "Zone frontalière - Panne critique",
      description: "Réparation d'urgence avec rétablissement rapide pour zone frontalière stratégique."
    }
  ],
  
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcomm.fr",
    address: "Paris (75015), Île-de-France"
  },
  
  nearbyAreas: [
    "Lille",
    "Roubaix",
    "Tourcoing",
    "Valenciennes",
    "Dunkerque",
    "Villeneuve-d'Ascq",
    "Wattrelos",
    "Douai",
    "Marcq-en-Barœul",
    "Cambrai",
    "Maubeuge",
    "Lambersart"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Travaux Fibre " + fibreNord59Config.sectorName,
  fibreNord59Config.location,
  fibreNord59Config.description,
  fibreNord59Config.keywords
);

export default function FibreNord59Page() {
  return <SectorPage {...fibreNord59Config} />;
}
