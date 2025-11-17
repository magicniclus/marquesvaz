import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const fibreSeineMaritime76Config = {
  title: "Travaux Fibre Optique Seine-Maritime 76 - RAFCOM",
  description: "Spécialiste travaux fibre optique Seine-Maritime 76. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit.",
  keywords: [
    "travaux fibre Seine-Maritime 76",
    "fourreau bouché 76",
    "détection point blocage Seine-Maritime",
    "raccordement fibre complexe 76",
    "urgence fibre Seine-Maritime",
    "débouchage fourreaux 76",
    "entrepreneur fibre Seine-Maritime",
    "devis travaux fibre 76"
  ],
  
  sectorName: "Seine-Maritime (76)",
  heroImage: "/prestation-4.png",
  heroTitle: "Entreprise travaux fibre optique en Seine-Maritime",
  heroSubtitle: "Spécialiste fibre optique Seine-Maritime 76. Interventions techniques pour débouchage fourreaux, détection blocages et raccordements complexes dans tout le département.",
  
  location: "Seine-Maritime (76)",
  
  mainDescription: "RAFCOM intervient dans tout le département de Seine-Maritime (76) pour vos travaux fibre optique. De Rouen au Havre, en passant par Dieppe et Fécamp, nous maîtrisons les spécificités des infrastructures normandes. Notre expertise couvre les zones urbaines, les secteurs industriels portuaires et les communes rurales du département.",
  
  mainServices: [
    {
      title: "Travaux Fibre Optique",
      description: "Installation et maintenance de réseaux fibre optique adaptés aux spécificités de Seine-Maritime."
    },
    {
      title: "Fourreau Bouché",
      description: "Débouchage professionnel de fourreaux télécommunications avec techniques spécialisées pour le département 76."
    },
    {
      title: "Détection de Point de Blocage",
      description: "Localisation précise des obstructions avec équipements de diagnostic pour réseaux Seine-Maritime."
    },
    {
      title: "Raccordement Fibre Complexe",
      description: "Solutions techniques pour raccordements difficiles en milieu industriel et portuaire."
    },
    {
      title: "Urgence Fibre",
      description: "Service d'urgence 24h/24 pour interventions rapides sur tout le département Seine-Maritime."
    },
    {
      title: "Maintenance Industrielle",
      description: "Contrats de maintenance spécialisés pour zones industrielles et portuaires du 76."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé",
    "Couverture complète Seine-Maritime",
    "Expertise zones industrielles",
    "Matériel professionnel adapté",
    "Service d'urgence disponible",
    "Connaissance spécificités normandes",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie tous travaux",
    "Équipe technique qualifiée",
    "Solutions milieux difficiles",
    "Respect normes industrielles"
  ],
  
  projectExamples: [
    {
      title: "Installation fibre zone portuaire Le Havre",
      type: "Zone industrielle - Contraintes maritimes",
      description: "Déploiement réseau fibre avec protection renforcée contre corrosion marine et contraintes industrielles."
    },
    {
      title: "Débouchage fourreaux centre-ville Rouen",
      type: "Centre historique - Infrastructures anciennes",
      description: "Intervention sur réseau ancien avec techniques préservant le patrimoine architectural rouennais."
    },
    {
      title: "Urgence fibre Dieppe",
      type: "Zone d'activité - Panne critique",
      description: "Réparation d'urgence avec rétablissement rapide pour maintien activité économique locale."
    }
  ],
  
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcomm.fr",
    address: "Paris (75015), Île-de-France"
  },
  
  nearbyAreas: [
    "Rouen",
    "Le Havre",
    "Dieppe",
    "Fécamp",
    "Elbeuf",
    "Sotteville-lès-Rouen",
    "Saint-Étienne-du-Rouvray",
    "Barentin",
    "Canteleu",
    "Montivilliers",
    "Bolbec",
    "Yvetot"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Travaux Fibre " + fibreSeineMaritime76Config.sectorName,
  fibreSeineMaritime76Config.location,
  fibreSeineMaritime76Config.description,
  fibreSeineMaritime76Config.keywords
);

export default function FibreSeineMaritime76Page() {
  return <SectorPage {...fibreSeineMaritime76Config} />;
}
