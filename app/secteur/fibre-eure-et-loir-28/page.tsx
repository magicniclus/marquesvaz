import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const fibreEureEtLoir28Config = {
  title: "Travaux Fibre Optique Eure-et-Loir 28 - RAFCOM",
  description: "Spécialiste travaux fibre optique Eure-et-Loir 28. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit.",
  keywords: [
    "travaux fibre Eure-et-Loir 28",
    "fourreau bouché 28",
    "détection point blocage Eure-et-Loir",
    "raccordement fibre complexe 28",
    "urgence fibre Eure-et-Loir",
    "débouchage fourreaux 28",
    "entrepreneur fibre Eure-et-Loir",
    "devis travaux fibre 28"
  ],
  
  sectorName: "Eure-et-Loir (28)",
  heroImage: "/prestation-4.png",
  heroTitle: "Entreprise travaux fibre optique en Eure-et-Loir",
  heroSubtitle: "Spécialiste fibre optique Eure-et-Loir 28. Interventions techniques pour débouchage fourreaux, détection blocages et raccordements complexes dans tout le département.",
  
  location: "Eure-et-Loir (28)",
  
  mainDescription: "RAFCOM intervient dans tout le département d'Eure-et-Loir (28) pour vos travaux fibre optique. De Chartres à Dreux, en passant par Châteaudun et Nogent-le-Rotrou, nous maîtrisons les spécificités des infrastructures eurélienne. Notre expertise couvre les centres urbains, les zones rurales et les secteurs industriels du département.",
  
  mainServices: [
    {
      title: "Travaux Fibre Optique",
      description: "Installation et maintenance de réseaux fibre optique adaptés aux spécificités d'Eure-et-Loir."
    },
    {
      title: "Fourreau Bouché",
      description: "Débouchage professionnel de fourreaux télécommunications avec techniques spécialisées pour le 28."
    },
    {
      title: "Détection de Point de Blocage",
      description: "Localisation précise des obstructions avec équipements de diagnostic pour réseaux Eure-et-Loir."
    },
    {
      title: "Raccordement Fibre Complexe",
      description: "Solutions techniques pour raccordements difficiles en zones rurales et urbaines du 28."
    },
    {
      title: "Urgence Fibre",
      description: "Service d'urgence 24h/24 pour interventions rapides sur tout le département Eure-et-Loir."
    },
    {
      title: "Déploiement Rural",
      description: "Expertise spécialisée pour déploiement fibre en zones rurales et périurbaines du 28."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé",
    "Couverture complète Eure-et-Loir",
    "Expertise zones rurales",
    "Matériel professionnel adapté",
    "Service d'urgence disponible",
    "Connaissance spécificités 28",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie tous travaux",
    "Équipe technique qualifiée",
    "Solutions adaptées au terrain",
    "Respect environnement rural"
  ],
  
  projectExamples: [
    {
      title: "Installation fibre centre-ville Chartres",
      type: "Centre historique - Contraintes patrimoniales",
      description: "Déploiement réseau fibre avec respect des contraintes architecturales du centre historique."
    },
    {
      title: "Débouchage fourreaux Dreux",
      type: "Zone périurbaine - Réseau mixte",
      description: "Intervention sur réseau mixte avec techniques adaptées aux spécificités périurbaines."
    },
    {
      title: "Urgence fibre Châteaudun",
      type: "Zone d'activité - Panne critique",
      description: "Réparation d'urgence avec rétablissement rapide pour zone d'activité économique locale."
    }
  ],
  
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcomm.fr",
    address: "Paris (75015), Île-de-France"
  },
  
  nearbyAreas: [
    "Chartres",
    "Dreux",
    "Châteaudun",
    "Nogent-le-Rotrou",
    "Mainvilliers",
    "Vernouillet",
    "Saint-Rémy-sur-Avre",
    "Épernon",
    "Bonneval",
    "Auneau-Bleury-Saint-Symphorien",
    "Maintenon",
    "Lèves"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Travaux Fibre " + fibreEureEtLoir28Config.sectorName,
  fibreEureEtLoir28Config.location,
  fibreEureEtLoir28Config.description,
  fibreEureEtLoir28Config.keywords
);

export default function FibreEureEtLoir28Page() {
  return <SectorPage {...fibreEureEtLoir28Config} />;
}
