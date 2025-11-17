import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const fibrePoissyConfig = {
  title: "Travaux Fibre Optique Poissy - RAFCOM",
  description: "Spécialiste travaux fibre optique Poissy Yvelines. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit 78.",
  keywords: [
    "travaux fibre Poissy",
    "fourreau bouché Poissy",
    "détection point blocage Poissy",
    "raccordement fibre complexe Poissy",
    "urgence fibre Poissy",
    "débouchage fourreaux Poissy 78",
    "entrepreneur fibre Poissy",
    "devis travaux fibre Poissy",
    "fibre optique Poissy Yvelines",
    "installation fibre Poissy"
  ],
  
  sectorName: "Poissy",
  heroImage: "/prestation-5.png",
  heroTitle: "Entreprise travaux fibre optique à Poissy",
  heroSubtitle: "Spécialiste fibre optique Poissy Yvelines. Interventions techniques expertes pour débouchage fourreaux, détection blocages et raccordements complexes dans cette ville industrielle.",
  
  location: "Poissy",
  
  mainDescription: "RAFCOM intervient à Poissy et dans les Yvelines pour tous vos travaux fibre optique. Notre expertise technique s'adapte parfaitement à cette ville industrielle avec ses besoins spécifiques en télécommunications haute performance. Nous couvrons tous les secteurs de Poissy : des zones industrielles aux quartiers résidentiels, en passant par le centre-ville et les nouveaux développements urbains.",
  
  mainServices: [
    {
      title: "Installation Fibre Industrielle Poissy",
      description: "Installation de réseaux fibre optique haute performance pour zones industrielles et entreprises de Poissy."
    },
    {
      title: "Débouchage Fourreaux Poissy 78",
      description: "Débouchage professionnel de fourreaux télécommunications avec techniques adaptées aux infrastructures de Poissy."
    },
    {
      title: "Détection Blocages Yvelines",
      description: "Diagnostic précis des obstructions avec équipements haute technologie pour réseaux Poissy et environs."
    },
    {
      title: "Raccordement Fibre Complexe Poissy",
      description: "Solutions techniques pour raccordements difficiles en milieu industriel et zones d'activité de Poissy."
    },
    {
      title: "Urgence Fibre Poissy 24h/24",
      description: "Service d'urgence fibre optique disponible 24h/24 pour interventions rapides à Poissy et Yvelines."
    },
    {
      title: "Solutions Industrielles Poissy",
      description: "Expertise spécialisée pour installations fibre en milieu industriel avec contraintes techniques spécifiques."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Poissy",
    "Intervention rapide Yvelines 78",
    "Expertise milieu industriel",
    "Matériel professionnel résistant",
    "Service d'urgence 24h/24 Poissy",
    "Connaissance zones industrielles",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Poissy 78",
    "Équipe technique spécialisée",
    "Solutions haute performance",
    "Respect normes industrielles"
  ],
  
  projectExamples: [
    {
      title: "Installation fibre usine PSA Poissy",
      type: "Site industriel - Infrastructure critique",
      description: "Déploiement réseau fibre haute performance pour site industriel avec contraintes de production continue."
    },
    {
      title: "Débouchage fourreaux zone Technoparc",
      type: "Zone d'activité - Conduits professionnels",
      description: "Intervention débouchage sur zone d'activité avec techniques spécialisées pour fourreaux professionnels."
    },
    {
      title: "Urgence fibre centre-ville Poissy",
      type: "Commerce - Panne critique vendredi",
      description: "Réparation d'urgence vendredi soir avec rétablissement express pour continuité activité commerciale."
    }
  ],
  
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcomm.fr",
    address: "Paris (75015), Île-de-France"
  },
  
  nearbyAreas: [
    "Achères",
    "Saint-Germain-en-Laye",
    "Conflans-Sainte-Honorine",
    "Triel-sur-Seine",
    "Verneuil-sur-Seine",
    "Vernouillet",
    "Carrières-sous-Poissy",
    "Villennes-sur-Seine",
    "Médan",
    "Orgeval",
    "Chambourcy",
    "L'Étang-la-Ville"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Travaux Fibre " + fibrePoissyConfig.sectorName,
  fibrePoissyConfig.location,
  fibrePoissyConfig.description,
  fibrePoissyConfig.keywords
);

export default function FibrePoissyPage() {
  return <SectorPage {...fibrePoissyConfig} />;
}
