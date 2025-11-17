import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const fibreValDOise95Config = {
  title: "Travaux Fibre Optique Val-d'Oise 95 - RAFCOM",
  description: "Spécialiste travaux fibre optique Val-d'Oise 95. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit.",
  keywords: [
    "travaux fibre Val-d'Oise 95",
    "fourreau bouché 95",
    "détection point blocage Val-d'Oise",
    "raccordement fibre complexe 95",
    "urgence fibre Val-d'Oise",
    "débouchage fourreaux 95",
    "entrepreneur fibre Val-d'Oise",
    "devis travaux fibre 95"
  ],
  
  sectorName: "Val-d'Oise (95)",
  heroImage: "/prestation-5.png",
  heroTitle: "Entreprise travaux fibre optique dans le Val-d'Oise",
  heroSubtitle: "Spécialiste fibre optique Val-d'Oise 95. Solutions techniques complètes pour débouchage fourreaux, détection blocages et raccordements sur tout le département.",
  
  location: "Val-d'Oise (95)",
  
  mainDescription: "RAFCOM couvre l'ensemble du département du Val-d'Oise (95) pour vos travaux fibre optique. De Cergy-Pontoise à Argenteuil, en passant par Sarcelles et Ermont, nous maîtrisons les spécificités des infrastructures val-d'oisienne. Notre expertise s'étend des villes nouvelles aux zones aéroportuaires, en passant par les communes rurales du Vexin.",
  
  mainServices: [
    {
      title: "Travaux Fibre Optique",
      description: "Installation et maintenance de réseaux fibre optique sur l'ensemble du département Val-d'Oise."
    },
    {
      title: "Fourreau Bouché",
      description: "Débouchage spécialisé de fourreaux télécommunications avec techniques adaptées au 95."
    },
    {
      title: "Détection de Point de Blocage",
      description: "Diagnostic précis des obstructions avec équipements haute technologie pour réseaux Val-d'Oise."
    },
    {
      title: "Raccordement Fibre Complexe",
      description: "Solutions techniques pour raccordements difficiles en zones aéroportuaires et urbaines."
    },
    {
      title: "Urgence Fibre",
      description: "Service d'urgence 24h/24 pour interventions rapides sur tout le département Val-d'Oise."
    },
    {
      title: "Solutions Aéroportuaires",
      description: "Expertise spécialisée pour zones aéroportuaires avec contraintes techniques spécifiques."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé",
    "Couverture complète Val-d'Oise",
    "Expertise zones aéroportuaires",
    "Matériel professionnel haute technologie",
    "Service d'urgence 24h/24",
    "Connaissance spécificités 95",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie sur tous travaux",
    "Équipe technique qualifiée",
    "Solutions adaptées contraintes",
    "Respect normes aéronautiques"
  ],
  
  projectExamples: [
    {
      title: "Installation fibre zone aéroportuaire Roissy",
      type: "Zone aéroportuaire - Contraintes sécuritaires",
      description: "Déploiement réseau fibre avec respect des contraintes sécuritaires et techniques aéroportuaires."
    },
    {
      title: "Débouchage fourreaux Cergy-Pontoise",
      type: "Ville nouvelle - Infrastructure moderne",
      description: "Intervention sur réseau moderne avec techniques adaptées aux infrastructures récentes."
    },
    {
      title: "Urgence fibre Argenteuil",
      type: "Zone industrielle - Panne critique",
      description: "Réparation d'urgence avec rétablissement rapide pour maintien activité industrielle."
    }
  ],
  
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcomm.fr",
    address: "Paris (75015), Île-de-France"
  },
  
  nearbyAreas: [
    "Cergy",
    "Pontoise",
    "Argenteuil",
    "Sarcelles",
    "Ermont",
    "Franconville",
    "Herblay-sur-Seine",
    "Goussainville",
    "Villiers-le-Bel",
    "Garges-lès-Gonesse",
    "Bezons",
    "Taverny"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Travaux Fibre " + fibreValDOise95Config.sectorName,
  fibreValDOise95Config.location,
  fibreValDOise95Config.description,
  fibreValDOise95Config.keywords
);

export default function FibreValDOise95Page() {
  return <SectorPage {...fibreValDOise95Config} />;
}
