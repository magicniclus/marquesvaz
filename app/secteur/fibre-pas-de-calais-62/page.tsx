import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const fibrePasDeCalais62Config = {
  title: "Travaux Fibre Optique Pas-de-Calais 62 - RAFCOM",
  description: "Spécialiste travaux fibre optique Pas-de-Calais 62. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit.",
  keywords: [
    "travaux fibre Pas-de-Calais 62",
    "fourreau bouché 62",
    "détection point blocage Pas-de-Calais",
    "raccordement fibre complexe 62",
    "urgence fibre Pas-de-Calais",
    "débouchage fourreaux 62",
    "entrepreneur fibre Pas-de-Calais",
    "devis travaux fibre 62"
  ],
  
  sectorName: "Pas-de-Calais (62)",
  heroImage: "/prestation-5.png",
  heroTitle: "Entreprise travaux fibre optique dans le Pas-de-Calais",
  heroSubtitle: "Spécialiste fibre optique Pas-de-Calais 62. Solutions techniques complètes pour débouchage fourreaux, détection blocages et raccordements dans tout le département.",
  
  location: "Pas-de-Calais (62)",
  
  mainDescription: "RAFCOM intervient dans tout le département du Pas-de-Calais (62) pour vos travaux fibre optique. De Calais à Arras, en passant par Boulogne-sur-Mer et Lens, nous maîtrisons les spécificités des infrastructures du Nord. Notre expertise couvre les zones portuaires, les centres urbains et les secteurs industriels de ce département stratégique.",
  
  mainServices: [
    {
      title: "Travaux Fibre Optique",
      description: "Installation et maintenance de réseaux fibre optique adaptés aux spécificités du Pas-de-Calais."
    },
    {
      title: "Fourreau Bouché",
      description: "Débouchage professionnel de fourreaux télécommunications avec techniques spécialisées pour le 62."
    },
    {
      title: "Détection de Point de Blocage",
      description: "Localisation précise des obstructions avec équipements de diagnostic pour réseaux Pas-de-Calais."
    },
    {
      title: "Raccordement Fibre Complexe",
      description: "Solutions techniques pour raccordements difficiles en zones portuaires et industrielles."
    },
    {
      title: "Urgence Fibre",
      description: "Service d'urgence 24h/24 pour interventions rapides sur tout le département Pas-de-Calais."
    },
    {
      title: "Solutions Portuaires",
      description: "Expertise spécialisée pour zones portuaires avec contraintes maritimes et industrielles."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé",
    "Couverture complète Pas-de-Calais",
    "Expertise zones portuaires",
    "Matériel professionnel résistant",
    "Service d'urgence disponible",
    "Connaissance spécificités 62",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie tous travaux",
    "Équipe technique qualifiée",
    "Solutions milieux difficiles",
    "Résistance corrosion marine"
  ],
  
  projectExamples: [
    {
      title: "Installation fibre port de Calais",
      type: "Zone portuaire - Contraintes maritimes",
      description: "Déploiement réseau fibre avec protection renforcée contre corrosion marine et contraintes portuaires."
    },
    {
      title: "Débouchage fourreaux Arras",
      type: "Centre historique - Patrimoine",
      description: "Intervention délicate sur réseau ancien avec préservation du patrimoine architectural."
    },
    {
      title: "Urgence fibre Lens",
      type: "Zone industrielle - Panne critique",
      description: "Réparation d'urgence avec rétablissement rapide pour maintien activité industrielle régionale."
    }
  ],
  
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcomm.fr",
    address: "Paris (75015), Île-de-France"
  },
  
  nearbyAreas: [
    "Calais",
    "Boulogne-sur-Mer",
    "Arras",
    "Lens",
    "Liévin",
    "Béthune",
    "Bruay-la-Buissière",
    "Carvin",
    "Avion",
    "Wingles",
    "Nœux-les-Mines",
    "Harnes"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Travaux Fibre " + fibrePasDeCalais62Config.sectorName,
  fibrePasDeCalais62Config.location,
  fibrePasDeCalais62Config.description,
  fibrePasDeCalais62Config.keywords
);

export default function FibrePasDeCalais62Page() {
  return <SectorPage {...fibrePasDeCalais62Config} />;
}
