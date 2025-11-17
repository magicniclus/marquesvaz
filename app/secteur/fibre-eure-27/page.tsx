import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const fibreEure27Config = {
  title: "Travaux Fibre Optique Eure 27 - RAFCOM",
  description: "Spécialiste travaux fibre optique Eure 27. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit.",
  keywords: [
    "travaux fibre Eure 27",
    "fourreau bouché 27",
    "détection point blocage Eure",
    "raccordement fibre complexe 27",
    "urgence fibre Eure",
    "débouchage fourreaux 27",
    "entrepreneur fibre Eure",
    "devis travaux fibre 27"
  ],
  
  sectorName: "Eure (27)",
  heroImage: "/prestation-4.png",
  heroTitle: "Entreprise travaux fibre optique dans l'Eure",
  heroSubtitle: "Spécialiste fibre optique Eure 27. Solutions techniques complètes pour débouchage fourreaux, détection blocages et raccordements dans tout le département.",
  
  location: "Eure (27)",
  
  mainDescription: "RAFCOM intervient dans tout le département de l'Eure (27) pour vos travaux fibre optique. D'Évreux à Vernon, en passant par Louviers et Bernay, nous maîtrisons les spécificités des infrastructures eureuses. Notre expertise couvre les centres urbains, les zones rurales et les secteurs industriels de ce département normand.",
  
  mainServices: [
    {
      title: "Travaux Fibre Optique",
      description: "Installation et maintenance de réseaux fibre optique adaptés aux spécificités de l'Eure."
    },
    {
      title: "Fourreau Bouché",
      description: "Débouchage professionnel de fourreaux télécommunications avec techniques spécialisées pour le 27."
    },
    {
      title: "Détection de Point de Blocage",
      description: "Localisation précise des obstructions avec équipements de diagnostic pour réseaux Eure."
    },
    {
      title: "Raccordement Fibre Complexe",
      description: "Solutions techniques pour raccordements difficiles en zones rurales et industrielles du 27."
    },
    {
      title: "Urgence Fibre",
      description: "Service d'urgence 24h/24 pour interventions rapides sur tout le département Eure."
    },
    {
      title: "Déploiement Rural Normand",
      description: "Expertise spécialisée pour déploiement fibre en zones rurales normandes du 27."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé",
    "Couverture complète Eure",
    "Expertise zones rurales normandes",
    "Matériel professionnel adapté",
    "Service d'urgence disponible",
    "Connaissance spécificités 27",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie tous travaux",
    "Équipe technique qualifiée",
    "Solutions adaptées milieu rural",
    "Respect environnement normand"
  ],
  
  projectExamples: [
    {
      title: "Installation fibre centre-ville Évreux",
      type: "Centre urbain - Infrastructure mixte",
      description: "Déploiement réseau fibre avec adaptation aux spécificités urbaines et périurbaines d'Évreux."
    },
    {
      title: "Débouchage fourreaux Vernon",
      type: "Zone périurbaine - Réseau ancien",
      description: "Intervention sur ancien réseau avec techniques préservant l'intégrité des infrastructures existantes."
    },
    {
      title: "Urgence fibre Louviers",
      type: "Zone industrielle - Panne critique",
      description: "Réparation d'urgence avec rétablissement rapide pour maintien activité industrielle locale."
    }
  ],
  
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcomm.fr",
    address: "Paris (75015), Île-de-France"
  },
  
  nearbyAreas: [
    "Évreux",
    "Vernon",
    "Louviers",
    "Bernay",
    "Pont-Audemer",
    "Gisors",
    "Les Andelys",
    "Conches-en-Ouche",
    "Brionne",
    "Pacy-sur-Eure",
    "Gaillon",
    "Val-de-Reuil"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Travaux Fibre " + fibreEure27Config.sectorName,
  fibreEure27Config.location,
  fibreEure27Config.description,
  fibreEure27Config.keywords
);

export default function FibreEure27Page() {
  return <SectorPage {...fibreEure27Config} />;
}
