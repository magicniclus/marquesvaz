import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

const detectionBlocageConfig = {
  // SEO et métadonnées
  title: "Détection Point de Blocage Paris - RAFCOM",
  description: "Spécialiste de la détection et localisation de points de blocage dans les réseaux télécommunications. Diagnostic technique avancé pour identifier les obstructions. Devis gratuit.",
  keywords: ["détection point blocage Paris", "localisation obstruction fibre", "diagnostic réseau télécom", "point de blocage conduit", "devis gratuit détection", "RAFCOM", "blocage fibre 75015", "diagnostic télécom"],
  
  // Contenu principal
  serviceName: "Détection de Point de Blocage",
  heroImage: "/prestation-3.png",
  heroTitle: "Détection et Localisation de Points de Blocage",
  heroSubtitle: "Diagnostic technique avancé pour détecter et localiser précisément les points de blocage dans les réseaux de télécommunications. Solutions professionnelles pour identifier les obstructions.",
  
  // Localisation
  sector: "Télécommunications - Diagnostic",
  location: "Paris et Île-de-France",
  
  // Description détaillée
  mainDescription: "RAFCOM propose des services de détection et localisation précise des points de blocage dans les réseaux de télécommunications. Grâce à nos équipements de diagnostic avancés, nous identifions rapidement et avec précision les obstructions qui empêchent le passage des câbles fibre optique. Notre expertise technique nous permet d'analyser tous types de réseaux et de proposer les solutions les plus adaptées avec un devis gratuit et personnalisé.",
  
  // Structure SEO optimisée
  problemSection: {
    title: "Problèmes de Points de Blocage dans les Réseaux",
    description: "Les points de blocage dans les infrastructures télécommunications peuvent paralyser complètement les installations fibre optique. Une détection rapide et précise est essentielle pour éviter des retards coûteux et des interventions destructives.",
    problems: [
      "Impossibilité de faire passer les câbles fibre",
      "Localisation imprécise des obstructions",
      "Perte de temps sur les chantiers",
      "Risque d'endommager les infrastructures",
      "Coûts supplémentaires d'intervention",
      "Retards dans les projets de raccordement"
    ]
  },
  
  diagnosticSection: {
    title: "Méthodes de Détection Professionnelles",
    description: "RAFCOM utilise des technologies de pointe pour localiser avec précision les points de blocage. Notre approche méthodique combine plusieurs techniques de détection pour un diagnostic fiable et complet.",
    steps: [
      "Analyse préliminaire des plans et de la documentation existante",
      "Inspection visuelle des points d'accès et regards",
      "Utilisation de sondes de détection et d'aiguilles de localisation",
      "Déploiement de caméras d'inspection haute définition",
      "Mesures de distance et cartographie précise des obstructions",
      "Rapport détaillé avec localisation GPS et recommandations"
    ]
  },
  
  solutionSection: {
    title: "Solutions de Localisation et Résolution",
    description: "Une fois le point de blocage identifié, RAFCOM propose des solutions adaptées pour résoudre le problème rapidement et efficacement, en minimisant les impacts sur l'infrastructure existante.",
    solutions: [
      "Localisation GPS précise des obstructions",
      "Cartographie complète des réseaux souterrains",
      "Techniques de contournement des blocages",
      "Coordination avec les équipes de débouchage",
      "Solutions alternatives de cheminement",
      "Documentation technique pour interventions futures"
    ]
  },
  
  // Sous-prestations
  subServices: [
    {
      title: "Inspection par Caméra",
      description: "Inspection vidéo haute définition des conduits et fourreaux. Visualisation en temps réel des obstructions et de l'état interne des gaines."
    },
    {
      title: "Localisation GPS",
      description: "Localisation précise des points de blocage par GPS. Marquage au sol pour faciliter les interventions de débouchage ou de contournement."
    },
    {
      title: "Mesure de Distance",
      description: "Mesure précise de la distance jusqu'au point de blocage. Calcul exact de la longueur de conduit libre et de la position de l'obstruction."
    },
    {
      title: "Analyse de Faisabilité",
      description: "Analyse technique de la faisabilité du débouchage. Évaluation des différentes solutions possibles selon le type d'obstruction."
    },
    {
      title: "Test de Continuité",
      description: "Test de continuité électrique et optique des conduits. Vérification de l'intégrité des gaines et détection des ruptures."
    },
    {
      title: "Cartographie Réseau",
      description: "Établissement d'une cartographie précise du réseau existant. Documentation complète des tracés et points de passage."
    },
    {
      title: "Rapport Technique",
      description: "Rapport détaillé avec photos, mesures et recommandations. Documentation complète pour planifier les interventions."
    },
    {
      title: "Préconisations Solutions",
      description: "Préconisations techniques pour résoudre les blocages. Conseil sur les meilleures méthodes d'intervention selon chaque situation."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Équipements de diagnostic haute technologie",
    "Localisation GPS précise",
    "Rapport technique détaillé",
    "Intervention rapide et efficace",
    "Expertise reconnue",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Documentation photographique",
    "Préconisations personnalisées",
    "Service professionnel",
    "Solutions adaptées"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "Paris 15ème",
    "Paris 14ème", 
    "Paris 16ème",
    "Paris 7ème",
    "Paris 6ème",
    "Issy-les-Moulineaux",
    "Boulogne-Billancourt",
    "Vanves",
    "Malakoff",
    "Montrouge",
    "Île-de-France"
  ],
  
  // Contact
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcomm.fr",
    address: "Paris (75015), Île-de-France"
  }
};

// Métadonnées SEO automatiques
export const metadata: Metadata = {
  title: "Détection Point de Blocage Paris - RAFCOM | Diagnostic Télécom | Devis Gratuit",
  description: detectionBlocageConfig.description,
  keywords: detectionBlocageConfig.keywords.join(", "),
  authors: [{ name: "RAFCOM" }],
  creator: "RAFCOM",
  publisher: "RAFCOM",
  openGraph: {
    title: "Détection Point de Blocage Paris - RAFCOM | Diagnostic Télécom",
    description: detectionBlocageConfig.description,
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DetectionBlocagePage() {
  return <ServicePage {...detectionBlocageConfig} />;
}
