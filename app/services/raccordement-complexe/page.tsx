import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

const raccordementComplexeConfig = {
  // SEO et métadonnées
  title: "Raccordement Fibre Complexe Paris - RAFCOM",
  description: "Spécialiste des raccordements fibre optique complexes en Île-de-France. Solutions techniques avancées pour installations difficiles. Expertise reconnue, devis gratuit.",
  keywords: ["raccordement fibre complexe Paris", "installation fibre difficile", "raccordement technique avancé", "fibre optique complexe", "devis gratuit raccordement", "RAFCOM", "raccordement fibre 75015", "installation technique"],
  
  // Contenu principal
  serviceName: "Raccordement Fibre Complexe",
  heroImage: "/prestation-4.png",
  heroTitle: "Raccordements Fibre Optique Complexes",
  heroSubtitle: "Expertise technique pour les raccordements fibre optique les plus complexes. Solutions avancées pour les installations difficiles nécessitant des compétences spécialisées.",
  
  // Localisation
  sector: "Télécommunications - Raccordement Avancé",
  location: "Paris et Île-de-France",
  
  // Description détaillée
  mainDescription: "RAFCOM est spécialisé dans les raccordements fibre optique complexes en Île-de-France. Nos techniciens expérimentés maîtrisent les techniques avancées pour réaliser des raccordements dans les configurations les plus difficiles. Que ce soit pour des installations industrielles, des immeubles anciens ou des environnements techniques contraignants, nous apportons des solutions sur mesure avec un devis gratuit et une expertise reconnue.",
  
  // Structure SEO optimisée
  problemSection: {
    title: "Défis des Raccordements Fibre Complexes",
    description: "Les raccordements fibre optique complexes présentent des défis techniques majeurs qui nécessitent une expertise spécialisée. Ces situations particulières peuvent compromettre la qualité de l'installation si elles ne sont pas traitées correctement.",
    problems: [
      "Configurations architecturales contraignantes",
      "Distances importantes entre points de raccordement",
      "Environnements industriels avec perturbations",
      "Immeubles anciens sans infrastructure adaptée",
      "Contraintes d'accès et de sécurité",
      "Exigences de performance très élevées"
    ]
  },
  
  diagnosticSection: {
    title: "Analyse Technique Approfondie",
    description: "Avant tout raccordement complexe, RAFCOM effectue une analyse technique complète pour identifier les contraintes et définir la meilleure approche. Cette phase de diagnostic est cruciale pour la réussite du projet.",
    steps: [
      "Étude de faisabilité et analyse des contraintes techniques",
      "Mesures de distance et évaluation des pertes optiques",
      "Identification des points de passage et cheminements",
      "Analyse de l'environnement et des perturbations potentielles",
      "Définition des équipements et techniques adaptés",
      "Planification détaillée de l'intervention avec timeline"
    ]
  },
  
  solutionSection: {
    title: "Solutions Techniques Avancées",
    description: "RAFCOM dispose de l'expertise et des équipements nécessaires pour réaliser les raccordements fibre les plus complexes. Nos solutions techniques garantissent des performances optimales même dans les environnements les plus contraignants.",
    solutions: [
      "Soudures de précision avec équipements professionnels",
      "Techniques de raccordement longue distance",
      "Solutions de protection contre les perturbations",
      "Adaptations pour environnements spécifiques",
      "Tests et certifications de performance",
      "Documentation technique complète et garanties"
    ]
  },
  
  // Sous-prestations
  subServices: [
    {
      title: "Raccordement en Hauteur",
      description: "Raccordements fibre optique en hauteur avec équipements spécialisés. Intervention sur immeubles, pylônes et structures élevées."
    },
    {
      title: "Passages Techniques Complexes",
      description: "Réalisation de passages techniques dans des environnements contraints. Solutions pour traversées de murs, dalles et structures."
    },
    {
      title: "Raccordement Souterrain",
      description: "Raccordements en chambre souterraine et regard télécom. Techniques spécialisées pour les environnements humides et confinés."
    },
    {
      title: "Soudure de Précision",
      description: "Soudures fibre optique de haute précision pour raccordements critiques. Équipements professionnels pour performances optimales."
    },
    {
      title: "Raccordement Multi-Opérateurs",
      description: "Raccordements complexes multi-opérateurs dans les points de mutualisation. Gestion des contraintes techniques et réglementaires."
    },
    {
      title: "Installation en Milieu Industriel",
      description: "Raccordements fibre en environnement industriel avec contraintes spécifiques. Respect des normes de sécurité renforcées."
    },
    {
      title: "Raccordement Longue Distance",
      description: "Raccordements fibre optique longue distance avec amplification. Solutions pour liaisons inter-sites et backbone."
    },
    {
      title: "Tests et Certification",
      description: "Tests approfondis et certification des raccordements complexes. Validation des performances selon les normes les plus strictes."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Expertise technique reconnue",
    "Solutions pour cas complexes",
    "Équipements professionnels avancés",
    "Respect des normes strictes",
    "Intervention sécurisée",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Certification des installations",
    "Garantie de performance",
    "Équipe spécialisée",
    "Support technique dédié"
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
    email: "contact@rafcom.net",
    address: "Paris (75015), Île-de-France"
  }
};

// Métadonnées SEO automatiques
export const metadata: Metadata = {
  title: "Raccordement Fibre Complexe Paris - RAFCOM | Installation Technique | Devis Gratuit",
  description: raccordementComplexeConfig.description,
  keywords: raccordementComplexeConfig.keywords.join(", "),
  authors: [{ name: "RAFCOM" }],
  creator: "RAFCOM",
  publisher: "RAFCOM",
  openGraph: {
    title: "Raccordement Fibre Complexe Paris - RAFCOM | Installation Technique",
    description: raccordementComplexeConfig.description,
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RaccordementComplexePage() {
  return <ServicePage {...raccordementComplexeConfig} />;
}
