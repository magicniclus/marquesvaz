import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const fibreSeineEtMarne77Config = {
  title: "Travaux Fibre Optique Seine-et-Marne 77 - RAFCOM",
  description: "Spécialiste travaux fibre optique Seine-et-Marne 77. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit.",
  keywords: [
    "travaux fibre Seine-et-Marne 77",
    "fourreau bouché 77",
    "détection point blocage Seine-et-Marne",
    "raccordement fibre complexe 77",
    "urgence fibre Seine-et-Marne",
    "débouchage fourreaux 77",
    "entrepreneur fibre Seine-et-Marne",
    "devis travaux fibre 77"
  ],
  
  sectorName: "Seine-et-Marne (77)",
  heroImage: "/prestation-3.png",
  heroTitle: "Entreprise travaux fibre optique en Seine-et-Marne",
  heroSubtitle: "Spécialiste fibre optique Seine-et-Marne 77. Solutions techniques complètes pour débouchage fourreaux, détection blocages et raccordements sur tout le département.",
  
  location: "Seine-et-Marne (77)",
  
  mainDescription: "RAFCOM couvre l'ensemble du département de Seine-et-Marne (77) pour vos travaux fibre optique. De Meaux à Melun, en passant par Chelles et Fontainebleau, nous maîtrisons les spécificités des infrastructures seine-et-marnaises. Notre expertise s'étend des villes nouvelles aux communes rurales, en passant par les zones d'activité de Marne-la-Vallée.",
  
  mainServices: [
    {
      title: "Travaux Fibre Optique",
      description: "Installation et maintenance de réseaux fibre optique sur l'ensemble du département Seine-et-Marne."
    },
    {
      title: "Fourreau Bouché",
      description: "Débouchage spécialisé de fourreaux télécommunications avec techniques adaptées au 77."
    },
    {
      title: "Détection de Point de Blocage",
      description: "Diagnostic précis des obstructions avec équipements haute technologie pour réseaux Seine-et-Marne."
    },
    {
      title: "Raccordement Fibre Complexe",
      description: "Solutions techniques pour raccordements difficiles en zones urbaines et rurales du 77."
    },
    {
      title: "Urgence Fibre",
      description: "Service d'urgence 24h/24 pour interventions rapides sur tout le département Seine-et-Marne."
    },
    {
      title: "Déploiement Rural",
      description: "Expertise spécialisée pour déploiement fibre en zones rurales et périurbaines du 77."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé",
    "Couverture complète Seine-et-Marne",
    "Expertise zones urbaines et rurales",
    "Matériel professionnel adapté",
    "Service d'urgence 24h/24",
    "Connaissance spécificités 77",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie sur tous travaux",
    "Équipe technique expérimentée",
    "Solutions adaptées au terrain",
    "Respect délais d'intervention"
  ],
  
  projectExamples: [
    {
      title: "Installation fibre Marne-la-Vallée",
      type: "Ville nouvelle - Zone d'activité",
      description: "Déploiement complet réseau fibre optique dans zone d'activité avec infrastructure moderne."
    },
    {
      title: "Débouchage fourreaux Meaux",
      type: "Centre-ville - Réseau ancien",
      description: "Intervention débouchage sur ancien réseau avec techniques spécialisées et mise aux normes."
    },
    {
      title: "Urgence fibre Fontainebleau",
      type: "Zone touristique - Panne critique",
      description: "Réparation d'urgence réseau fibre avec rétablissement rapide pour secteur touristique."
    }
  ],
  
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcomm.fr",
    address: "Paris (75015), Île-de-France"
  },
  
  nearbyAreas: [
    "Meaux",
    "Chelles",
    "Melun",
    "Fontainebleau",
    "Torcy",
    "Roissy-en-Brie",
    "Pontault-Combault",
    "Savigny-le-Temple",
    "Champs-sur-Marne",
    "Lagny-sur-Marne",
    "Coulommiers",
    "Provins"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Travaux Fibre " + fibreSeineEtMarne77Config.sectorName,
  fibreSeineEtMarne77Config.location,
  fibreSeineEtMarne77Config.description,
  fibreSeineEtMarne77Config.keywords
);

export default function FibreSeineEtMarne77Page() {
  return <SectorPage {...fibreSeineEtMarne77Config} />;
}
