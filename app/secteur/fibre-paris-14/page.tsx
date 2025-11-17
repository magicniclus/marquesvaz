import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const fibreParis14Config = {
  title: "Travaux Fibre Optique Paris 14ème - RAFCOM",
  description: "Spécialiste travaux fibre optique Paris 14ème. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit.",
  keywords: [
    "travaux fibre Paris 14",
    "fourreau bouché Paris 14",
    "détection point blocage Paris 14",
    "raccordement fibre complexe Paris 14",
    "urgence fibre Paris 14",
    "débouchage fourreaux Paris 14ème",
    "entrepreneur fibre Paris 14",
    "devis travaux fibre Paris 14"
  ],
  
  sectorName: "Paris 14ème",
  heroImage: "/prestation-1.png",
  heroTitle: "Entreprise travaux fibre optique à Paris 14ème",
  heroSubtitle: "Spécialiste fibre optique Paris 14ème. Solutions techniques pour débouchage fourreaux, détection blocages et raccordements complexes avec intervention rapide.",
  
  location: "Paris 14ème",
  
  mainDescription: "RAFCOM intervient à Paris 14ème pour tous vos besoins en travaux fibre optique. Notre expertise technique couvre le débouchage de fourreaux obstrués, la détection précise de points de blocage, les raccordements fibre complexes et les interventions d'urgence. Nous connaissons parfaitement les spécificités du 14ème arrondissement, de Montparnasse aux quartiers résidentiels, pour vous offrir des solutions adaptées.",
  
  mainServices: [
    {
      title: "Travaux Fibre Optique",
      description: "Installation et maintenance complète de réseaux fibre optique adaptés aux infrastructures du 14ème arrondissement."
    },
    {
      title: "Fourreau Bouché",
      description: "Débouchage spécialisé de fourreaux télécommunications avec techniques professionnelles pour conduits obstrués."
    },
    {
      title: "Détection de Point de Blocage",
      description: "Diagnostic précis des obstructions avec équipements haute technologie pour localiser les points de blocage."
    },
    {
      title: "Raccordement Fibre Complexe",
      description: "Expertise pour raccordements techniques difficiles en environnement urbain dense du 14ème arrondissement."
    },
    {
      title: "Urgence Fibre",
      description: "Service d'urgence 24h/24 pour rétablissement rapide des connexions fibre optique dans Paris 14ème."
    },
    {
      title: "Tests et Certification",
      description: "Contrôles qualité et certification des installations fibre selon les normes télécommunications en vigueur."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé",
    "Intervention rapide Paris 14ème",
    "Expertise technique reconnue",
    "Matériel professionnel de pointe",
    "Service d'urgence disponible",
    "Connaissance du secteur Montparnasse",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux incluse",
    "Équipe expérimentée",
    "Solutions sur mesure",
    "Respect délais d'intervention"
  ],
  
  projectExamples: [
    {
      title: "Raccordement fibre complexe Tour Montparnasse",
      type: "Immeuble de bureaux - Installation technique",
      description: "Raccordement fibre haute performance avec contraintes techniques spécifiques et certification complète."
    },
    {
      title: "Débouchage fourreaux quartier Alésia",
      type: "Résidence 4 étages - Conduits obstrués",
      description: "Intervention débouchage avec techniques d'hydrocurage et tests de continuité pour validation."
    },
    {
      title: "Urgence fibre Gare Montparnasse",
      type: "Panne critique - Intervention express",
      description: "Réparation d'urgence avec rétablissement de service en moins de 3 heures pour continuité d'activité."
    }
  ],
  
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcomm.fr",
    address: "Paris (75015), Île-de-France"
  },
  
  nearbyAreas: [
    "Paris 15ème",
    "Paris 13ème",
    "Paris 6ème",
    "Montrouge",
    "Malakoff",
    "Châtillon",
    "Bagneux",
    "Arcueil",
    "Gentilly",
    "Le Kremlin-Bicêtre"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Travaux Fibre " + fibreParis14Config.sectorName,
  fibreParis14Config.location,
  fibreParis14Config.description,
  fibreParis14Config.keywords
);

export default function FibreParis14Page() {
  return <SectorPage {...fibreParis14Config} />;
}
