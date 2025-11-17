import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const fibreParis15Config = {
  // SEO et métadonnées
  title: "Travaux Fibre Optique Paris 15ème - RAFCOM",
  description: "Spécialiste travaux fibre optique Paris 15ème. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit.",
  keywords: [
    "travaux fibre Paris 15",
    "fourreau bouché Paris 15",
    "détection point blocage Paris 15",
    "raccordement fibre complexe Paris 15",
    "urgence fibre Paris 15",
    "débouchage fourreaux Paris 15ème",
    "entrepreneur fibre Paris 15",
    "devis travaux fibre Paris 15"
  ],
  
  // Contenu principal
  sectorName: "Paris 15ème",
  heroImage: "/prestation-1.png",
  heroTitle: "Entreprise travaux fibre optique à Paris 15ème",
  heroSubtitle: "Spécialiste fibre optique Paris 15ème. Débouchage fourreaux, détection points de blocage, raccordements complexes et urgences fibre avec expertise technique.",
  
  // Localisation
  location: "Paris 15ème",
  
  // Description détaillée
  mainDescription: "RAFCOM est votre spécialiste des travaux fibre optique à Paris 15ème. Notre expertise technique nous permet d'intervenir rapidement sur tous types de problématiques fibre : débouchage de fourreaux obstrués, détection précise de points de blocage, raccordements fibre complexes et interventions d'urgence. Nous maîtrisons parfaitement les spécificités du 15ème arrondissement avec ses immeubles haussmanniens et ses infrastructures modernes.",
  
  // Prestations principales
  mainServices: [
    {
      title: "Travaux Fibre Optique",
      description: "Installation, maintenance et réparation de réseaux fibre optique pour particuliers et professionnels dans le 15ème arrondissement."
    },
    {
      title: "Fourreau Bouché",
      description: "Débouchage professionnel de fourreaux télécommunications obstrués avec techniques spécialisées adaptées aux infrastructures parisiennes."
    },
    {
      title: "Détection de Point de Blocage",
      description: "Localisation précise des obstructions dans les réseaux télécom avec équipements de diagnostic avancés."
    },
    {
      title: "Raccordement Fibre Complexe",
      description: "Solutions techniques pour raccordements fibre difficiles nécessitant une expertise particulière en milieu urbain dense."
    },
    {
      title: "Urgence Fibre",
      description: "Interventions d'urgence 24h/24 pour rétablir rapidement vos connexions fibre optique dans Paris 15ème."
    },
    {
      title: "Maintenance Préventive",
      description: "Contrôles réguliers et maintenance préventive des installations fibre pour éviter les pannes et optimiser les performances."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Intervention rapide Paris 15ème",
    "Expertise technique certifiée",
    "Équipements professionnels",
    "Disponibilité 24h/24 et 7j/7",
    "Connaissance des infrastructures locales",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie sur tous nos travaux",
    "Service client dédié",
    "Solutions adaptées milieu urbain",
    "Respect des normes télécoms"
  ],
  
  // Exemples de chantiers
  projectExamples: [
    {
      title: "Débouchage fourreau immeuble haussmannien Paris 15ème",
      type: "Immeuble 6 étages - Fourreaux obstrués",
      description: "Intervention sur fourreaux télécoms obstrués avec techniques de soufflage haute pression et aiguillage spécialisé."
    },
    {
      title: "Installation fibre entreprise Beaugrenelle",
      type: "Bureau 200m² - Raccordement complexe",
      description: "Installation complète fibre optique avec raccordements multiples et tests de performance certifiés."
    },
    {
      title: "Urgence fibre résidence Tour Eiffel",
      type: "Panne fibre - Intervention 2h",
      description: "Réparation d'urgence câble fibre endommagé avec rétablissement de service en moins de 2 heures."
    }
  ],
  
  // Informations de contact
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcomm.fr",
    address: "Paris (75015), Île-de-France"
  },
  
  // Secteurs proches
  nearbyAreas: [
    "Paris 14ème",
    "Paris 16ème", 
    "Paris 7ème",
    "Issy-les-Moulineaux",
    "Boulogne-Billancourt",
    "Vanves",
    "Malakoff",
    "Montrouge",
    "Levallois-Perret",
    "Neuilly-sur-Seine"
  ]
};

// Métadonnées SEO automatiques
export const metadata: Metadata = generateSectorMetadata(
  "Travaux Fibre " + fibreParis15Config.sectorName,
  fibreParis15Config.location,
  fibreParis15Config.description,
  fibreParis15Config.keywords
);

export default function FibreParis15Page() {
  return <SectorPage {...fibreParis15Config} />;
}
