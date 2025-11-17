import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const fibreEvryCourcourronnesConfig = {
  title: "Travaux Fibre Optique Évry-Courcouronnes - RAFCOM",
  description: "Spécialiste travaux fibre optique Évry-Courcouronnes. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit Essonne.",
  keywords: [
    "travaux fibre Évry-Courcouronnes",
    "fourreau bouché Évry",
    "détection point blocage Courcouronnes",
    "raccordement fibre complexe Évry",
    "urgence fibre Évry-Courcouronnes",
    "débouchage fourreaux Évry",
    "entrepreneur fibre Courcouronnes",
    "devis travaux fibre Évry",
    "fibre optique Évry-Courcouronnes",
    "installation fibre Évry"
  ],
  
  sectorName: "Évry-Courcouronnes",
  heroImage: "/prestation-5.png",
  heroTitle: "Entreprise travaux fibre optique à Évry-Courcouronnes",
  heroSubtitle: "Spécialiste fibre optique Évry-Courcouronnes. Expertise technique pour débouchage fourreaux, détection blocages et raccordements dans cette ville nouvelle de l'Essonne.",
  
  location: "Évry-Courcouronnes",
  
  mainDescription: "RAFCOM intervient à Évry-Courcouronnes pour tous vos travaux fibre optique. Notre expertise technique s'adapte parfaitement à cette ville nouvelle de l'Essonne avec ses infrastructures modernes et ses besoins technologiques avancés. Nous couvrons tous les quartiers d'Évry-Courcouronnes : du centre-ville aux zones résidentielles, en passant par les pôles d'activité et les établissements universitaires.",
  
  mainServices: [
    {
      title: "Installation Fibre Évry-Courcouronnes",
      description: "Installation complète de réseaux fibre optique dans les infrastructures modernes d'Évry-Courcouronnes."
    },
    {
      title: "Débouchage Fourreaux Évry",
      description: "Débouchage professionnel de fourreaux télécommunications avec techniques adaptées aux réseaux d'Évry."
    },
    {
      title: "Détection Blocages Courcouronnes",
      description: "Diagnostic précis des obstructions avec équipements haute technologie pour réseaux Évry-Courcouronnes."
    },
    {
      title: "Raccordement Fibre Complexe Évry",
      description: "Solutions techniques pour raccordements difficiles dans les immeubles et zones d'activité d'Évry-Courcouronnes."
    },
    {
      title: "Urgence Fibre Évry 24h/24",
      description: "Service d'urgence fibre optique disponible 24h/24 pour interventions rapides à Évry-Courcouronnes."
    },
    {
      title: "Solutions Universitaires Évry",
      description: "Expertise spécialisée pour établissements universitaires et centres de formation d'Évry-Courcouronnes."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Évry",
    "Intervention rapide Évry-Courcouronnes",
    "Expertise ville nouvelle Essonne",
    "Matériel professionnel de pointe",
    "Service d'urgence 24h/24 Évry",
    "Connaissance infrastructures locales",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Évry-Courcouronnes",
    "Équipe technique qualifiée",
    "Solutions adaptées besoins modernes",
    "Respect normes télécoms strictes"
  ],
  
  projectExamples: [
    {
      title: "Installation fibre campus universitaire Évry",
      type: "Campus universitaire - Infrastructure haute performance",
      description: "Déploiement réseau fibre haute performance pour campus avec besoins techniques spécifiques et débits élevés."
    },
    {
      title: "Débouchage fourreaux quartier Pyramides",
      type: "Zone résidentielle - Conduits récents",
      description: "Intervention débouchage sur réseau moderne avec techniques adaptées aux infrastructures récentes."
    },
    {
      title: "Urgence fibre centre commercial Évry 2",
      type: "Centre commercial - Panne critique",
      description: "Réparation d'urgence dimanche avec rétablissement express pour maintien activité commerciale."
    }
  ],
  
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcomm.fr",
    address: "Paris (75015), Île-de-France"
  },
  
  nearbyAreas: [
    "Corbeil-Essonnes",
    "Ris-Orangis",
    "Grigny",
    "Viry-Châtillon",
    "Bondoufle",
    "Lisses",
    "Le Coudray-Montceaux",
    "Saint-Germain-lès-Corbeil",
    "Villabé",
    "Soisy-sur-Seine",
    "Saint-Pierre-du-Perray",
    "Tigery"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Travaux Fibre " + fibreEvryCourcourronnesConfig.sectorName,
  fibreEvryCourcourronnesConfig.location,
  fibreEvryCourcourronnesConfig.description,
  fibreEvryCourcourronnesConfig.keywords
);

export default function FibreEvryCourcourronnesPage() {
  return <SectorPage {...fibreEvryCourcourronnesConfig} />;
}
