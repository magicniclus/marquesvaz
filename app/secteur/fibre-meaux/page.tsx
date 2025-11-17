import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const fibreMeauxConfig = {
  title: "Travaux Fibre Optique Meaux - RAFCOM",
  description: "Spécialiste travaux fibre optique Meaux Seine-et-Marne. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit 77.",
  keywords: [
    "travaux fibre Meaux",
    "fourreau bouché Meaux",
    "détection point blocage Meaux",
    "raccordement fibre complexe Meaux",
    "urgence fibre Meaux",
    "débouchage fourreaux Meaux 77",
    "entrepreneur fibre Meaux",
    "devis travaux fibre Meaux",
    "fibre optique Meaux Seine-et-Marne",
    "installation fibre Meaux"
  ],
  
  sectorName: "Meaux",
  heroImage: "/prestation-5.png",
  heroTitle: "Entreprise travaux fibre optique à Meaux",
  heroSubtitle: "Spécialiste fibre optique Meaux Seine-et-Marne. Solutions techniques expertes pour débouchage fourreaux, détection blocages et raccordements complexes dans cette ville historique.",
  
  location: "Meaux",
  
  mainDescription: "RAFCOM intervient à Meaux et dans toute la Seine-et-Marne pour vos travaux fibre optique. Notre expertise technique s'adapte parfaitement à cette ville historique avec ses infrastructures mixtes alliant patrimoine et modernité. Nous couvrons tous les secteurs de Meaux : du centre historique aux nouveaux quartiers, en passant par les zones d'activité et les quartiers résidentiels.",
  
  mainServices: [
    {
      title: "Installation Fibre Optique Meaux",
      description: "Installation complète de réseaux fibre optique adaptés aux spécificités urbaines et patrimoniales de Meaux."
    },
    {
      title: "Débouchage Fourreaux Meaux 77",
      description: "Débouchage spécialisé de fourreaux télécommunications avec techniques adaptées aux réseaux de Meaux."
    },
    {
      title: "Détection Blocages Seine-et-Marne",
      description: "Localisation précise des points de blocage avec équipements de diagnostic pour réseaux Meaux."
    },
    {
      title: "Raccordement Fibre Complexe Meaux",
      description: "Solutions techniques pour raccordements difficiles dans les bâtiments historiques et modernes de Meaux."
    },
    {
      title: "Urgence Fibre Meaux 24h/24",
      description: "Service d'urgence fibre optique disponible 24h/24 pour interventions rapides à Meaux et environs."
    },
    {
      title: "Maintenance Patrimoine Meaux",
      description: "Expertise spécialisée pour installations fibre dans bâtiments historiques avec contraintes patrimoniales."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Meaux",
    "Intervention rapide Seine-et-Marne",
    "Expertise bâtiments historiques",
    "Matériel professionnel adapté",
    "Service d'urgence 24h/24 Meaux",
    "Connaissance spécificités locales",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Meaux 77",
    "Équipe technique expérimentée",
    "Solutions respectueuses patrimoine",
    "Respect normes et contraintes"
  ],
  
  projectExamples: [
    {
      title: "Installation fibre centre historique Meaux",
      type: "Bâtiment classé - Contraintes patrimoniales",
      description: "Déploiement fibre avec respect strict des contraintes architecturales du centre historique de Meaux."
    },
    {
      title: "Débouchage fourreaux quartier Colbert",
      type: "Zone résidentielle - Réseau mixte",
      description: "Intervention débouchage sur réseau mixte avec techniques préservant l'intégrité des infrastructures."
    },
    {
      title: "Urgence fibre zone commerciale Meaux",
      type: "Zone d'activité - Panne weekend",
      description: "Réparation d'urgence samedi avec rétablissement rapide pour zone commerciale stratégique."
    }
  ],
  
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcomm.fr",
    address: "Paris (75015), Île-de-France"
  },
  
  nearbyAreas: [
    "Chelles",
    "Lagny-sur-Marne",
    "Torcy",
    "Noisiel",
    "Champs-sur-Marne",
    "Vaires-sur-Marne",
    "Brou-sur-Chantereine",
    "Annet-sur-Marne",
    "Poincy",
    "Trilbardou",
    "Penchard",
    "Villenoy"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Travaux Fibre " + fibreMeauxConfig.sectorName,
  fibreMeauxConfig.location,
  fibreMeauxConfig.description,
  fibreMeauxConfig.keywords
);

export default function FibreMeauxPage() {
  return <SectorPage {...fibreMeauxConfig} />;
}
