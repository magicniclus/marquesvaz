import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const fibreLoiret45Config = {
  title: "Travaux Fibre Optique Loiret 45 - RAFCOM",
  description: "Spécialiste travaux fibre optique Loiret 45. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit.",
  keywords: [
    "travaux fibre Loiret 45",
    "fourreau bouché 45",
    "détection point blocage Loiret",
    "raccordement fibre complexe 45",
    "urgence fibre Loiret",
    "débouchage fourreaux 45",
    "entrepreneur fibre Loiret",
    "devis travaux fibre 45"
  ],
  
  sectorName: "Loiret (45)",
  heroImage: "/prestation-5.png",
  heroTitle: "Entreprise travaux fibre optique dans le Loiret",
  heroSubtitle: "Spécialiste fibre optique Loiret 45. Solutions techniques complètes pour débouchage fourreaux, détection blocages et raccordements dans tout le département.",
  
  location: "Loiret (45)",
  
  mainDescription: "RAFCOM intervient dans tout le département du Loiret (45) pour vos travaux fibre optique. D'Orléans à Montargis, en passant par Olivet et Fleury-les-Aubrais, nous maîtrisons les spécificités des infrastructures loirétaines. Notre expertise couvre la métropole orléanaise, les zones rurales et les secteurs en développement de ce département du Centre-Val de Loire.",
  
  mainServices: [
    {
      title: "Travaux Fibre Optique",
      description: "Installation et maintenance de réseaux fibre optique adaptés aux spécificités du Loiret."
    },
    {
      title: "Fourreau Bouché",
      description: "Débouchage professionnel de fourreaux télécommunications avec techniques spécialisées pour le 45."
    },
    {
      title: "Détection de Point de Blocage",
      description: "Localisation précise des obstructions avec équipements de diagnostic pour réseaux Loiret."
    },
    {
      title: "Raccordement Fibre Complexe",
      description: "Solutions techniques pour raccordements difficiles en zones métropolitaines et rurales."
    },
    {
      title: "Urgence Fibre",
      description: "Service d'urgence 24h/24 pour interventions rapides sur tout le département Loiret."
    },
    {
      title: "Solutions Centre-Val de Loire",
      description: "Expertise spécialisée pour région Centre-Val de Loire avec spécificités géographiques."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé",
    "Couverture complète Loiret",
    "Expertise métropole orléanaise",
    "Matériel professionnel adapté",
    "Service d'urgence disponible",
    "Connaissance spécificités 45",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie tous travaux",
    "Équipe technique qualifiée",
    "Solutions adaptées région Centre",
    "Respect environnement ligérien"
  ],
  
  projectExamples: [
    {
      title: "Installation fibre métropole Orléans",
      type: "Zone métropolitaine - Centre historique",
      description: "Déploiement réseau fibre avec respect du patrimoine historique de la métropole orléanaise."
    },
    {
      title: "Débouchage fourreaux Montargis",
      type: "Centre urbain - Réseau mixte",
      description: "Intervention sur réseau urbain avec techniques adaptées aux infrastructures existantes."
    },
    {
      title: "Urgence fibre Olivet",
      type: "Zone résidentielle - Panne critique",
      description: "Réparation d'urgence avec rétablissement rapide pour zone résidentielle stratégique."
    }
  ],
  
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcomm.fr",
    address: "Paris (75015), Île-de-France"
  },
  
  nearbyAreas: [
    "Orléans",
    "Montargis",
    "Olivet",
    "Fleury-les-Aubrais",
    "Saint-Jean-de-Braye",
    "Châlette-sur-Loing",
    "Gien",
    "Pithiviers",
    "Amilly",
    "Saint-Jean-de-la-Ruelle",
    "Saran",
    "La Chapelle-Saint-Mesmin"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Travaux Fibre " + fibreLoiret45Config.sectorName,
  fibreLoiret45Config.location,
  fibreLoiret45Config.description,
  fibreLoiret45Config.keywords
);

export default function FibreLoiret45Page() {
  return <SectorPage {...fibreLoiret45Config} />;
}
