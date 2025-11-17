import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const fibreValDeMarne94Config = {
  title: "Travaux Fibre Optique Val-de-Marne 94 - RAFCOM",
  description: "Spécialiste travaux fibre optique Val-de-Marne 94. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit.",
  keywords: [
    "travaux fibre Val-de-Marne 94",
    "fourreau bouché 94",
    "détection point blocage Val-de-Marne",
    "raccordement fibre complexe 94",
    "urgence fibre Val-de-Marne",
    "débouchage fourreaux 94",
    "entrepreneur fibre Val-de-Marne",
    "devis travaux fibre 94"
  ],
  
  sectorName: "Val-de-Marne (94)",
  heroImage: "/prestation-2.png",
  heroTitle: "Entreprise travaux fibre optique dans le Val-de-Marne",
  heroSubtitle: "Spécialiste fibre optique Val-de-Marne 94. Interventions techniques pour débouchage fourreaux, détection blocages et raccordements complexes dans tout le département.",
  
  location: "Val-de-Marne (94)",
  
  mainDescription: "RAFCOM intervient dans tout le département du Val-de-Marne (94) pour vos travaux fibre optique. De Créteil à Vincennes, en passant par Vitry-sur-Seine et Maisons-Alfort, nous maîtrisons les spécificités des infrastructures val-de-marnaises. Notre expertise couvre les zones urbaines denses, les quartiers résidentiels et les pôles d'activité du département.",
  
  mainServices: [
    {
      title: "Travaux Fibre Optique",
      description: "Installation et maintenance de réseaux fibre optique adaptés aux spécificités du Val-de-Marne."
    },
    {
      title: "Fourreau Bouché",
      description: "Débouchage professionnel de fourreaux télécommunications avec techniques spécialisées pour le 94."
    },
    {
      title: "Détection de Point de Blocage",
      description: "Localisation précise des obstructions avec équipements de diagnostic pour réseaux Val-de-Marne."
    },
    {
      title: "Raccordement Fibre Complexe",
      description: "Solutions techniques pour raccordements difficiles en milieu urbain dense du 94."
    },
    {
      title: "Urgence Fibre",
      description: "Service d'urgence 24h/24 pour interventions rapides sur tout le département Val-de-Marne."
    },
    {
      title: "Maintenance Urbaine",
      description: "Contrats de maintenance spécialisés pour zones urbaines denses et copropriétés du 94."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé",
    "Couverture complète Val-de-Marne",
    "Expertise zones urbaines denses",
    "Matériel professionnel adapté",
    "Service d'urgence disponible",
    "Connaissance spécificités 94",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie tous travaux",
    "Équipe technique expérimentée",
    "Solutions adaptées milieu urbain",
    "Respect réglementations locales"
  ],
  
  projectExamples: [
    {
      title: "Installation fibre Créteil Soleil",
      type: "Centre commercial - Infrastructure complexe",
      description: "Déploiement réseau fibre avec contraintes techniques liées à l'environnement commercial dense."
    },
    {
      title: "Débouchage fourreaux Vincennes",
      type: "Quartier résidentiel - Réseau ancien",
      description: "Intervention sur ancien réseau avec techniques préservant l'intégrité des infrastructures."
    },
    {
      title: "Urgence fibre Vitry-sur-Seine",
      type: "Zone d'activité - Panne critique",
      description: "Réparation d'urgence avec rétablissement rapide pour zone d'activité économique stratégique."
    }
  ],
  
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcomm.fr",
    address: "Paris (75015), Île-de-France"
  },
  
  nearbyAreas: [
    "Créteil",
    "Vitry-sur-Seine",
    "Champigny-sur-Marne",
    "Saint-Maur-des-Fossés",
    "Vincennes",
    "Maisons-Alfort",
    "Fontenay-sous-Bois",
    "Alfortville",
    "Ivry-sur-Seine",
    "Le Perreux-sur-Marne",
    "Nogent-sur-Marne",
    "Cachan"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Travaux Fibre " + fibreValDeMarne94Config.sectorName,
  fibreValDeMarne94Config.location,
  fibreValDeMarne94Config.description,
  fibreValDeMarne94Config.keywords
);

export default function FibreValDeMarne94Page() {
  return <SectorPage {...fibreValDeMarne94Config} />;
}
