import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

const urgenceFibreConfig = {
  // SEO et métadonnées
  title: "Urgence Fibre Paris - RAFCOM",
  description: "Service d'urgence fibre optique 24h/24 en Île-de-France. Intervention rapide pour pannes et problèmes de connexion fibre. Dépannage express, devis gratuit.",
  keywords: ["urgence fibre Paris", "dépannage fibre 24h", "panne fibre optique", "intervention urgence télécom", "devis gratuit urgence", "RAFCOM", "urgence fibre 75015", "dépannage express"],
  
  // Contenu principal
  serviceName: "Urgence Fibre",
  heroImage: "/prestation-5.png",
  heroTitle: "Service d'Urgence Fibre Optique 24h/24",
  heroSubtitle: "Intervention d'urgence fibre optique 24h/24 et 7j/7. Service réactif pour résoudre rapidement vos pannes et problèmes de connexion fibre en Île-de-France.",
  
  // Localisation
  sector: "Télécommunications - Urgence",
  location: "Paris et Île-de-France",
  
  // Description détaillée
  mainDescription: "RAFCOM propose un service d'urgence fibre optique 24h/24 en Île-de-France. Nos équipes d'intervention rapide sont disponibles pour résoudre tous vos problèmes de fibre optique : pannes, coupures, dysfonctionnements. Nous intervenons rapidement avec les équipements nécessaires pour rétablir votre connexion fibre dans les plus brefs délais. Service réactif avec devis gratuit et intervention d'urgence garantie.",
  
  // Structure SEO optimisée
  problemSection: {
    title: "Urgences Fibre Optique Critiques",
    description: "Les pannes de fibre optique peuvent paralyser complètement l'activité d'une entreprise ou perturber gravement la vie quotidienne. Ces situations d'urgence nécessitent une intervention immédiate et professionnelle pour minimiser les impacts.",
    problems: [
      "Coupure totale de la connexion fibre",
      "Perte de débit et performances dégradées",
      "Câbles fibre endommagés par des travaux",
      "Dysfonctionnements d'équipements critiques",
      "Pannes en dehors des heures ouvrables",
      "Impact sur l'activité professionnelle"
    ]
  },
  
  diagnosticSection: {
    title: "Diagnostic d'Urgence Rapide",
    description: "En situation d'urgence, RAFCOM déploie immédiatement une équipe de diagnostic pour identifier rapidement la cause de la panne et définir la solution d'intervention la plus efficace.",
    steps: [
      "Prise d'appel d'urgence et évaluation de la criticité",
      "Déploiement immédiat d'une équipe d'intervention",
      "Diagnostic rapide sur site avec équipements portables",
      "Localisation précise de la panne ou du dysfonctionnement",
      "Évaluation des solutions de dépannage temporaire",
      "Planification de l'intervention définitive si nécessaire"
    ]
  },
  
  solutionSection: {
    title: "Solutions d'Intervention d'Urgence",
    description: "RAFCOM dispose des équipements et de l'expertise nécessaires pour intervenir rapidement sur tous types d'urgences fibre optique. Nos solutions visent à rétablir le service dans les meilleurs délais.",
    solutions: [
      "Intervention d'urgence 24h/24 et 7j/7",
      "Réparations temporaires pour continuité de service",
      "Remplacement d'équipements défaillants",
      "Contournements et solutions alternatives",
      "Réparations définitives avec garantie",
      "Suivi post-intervention et prévention"
    ]
  },
  
  // Sous-prestations
  subServices: [
    {
      title: "Dépannage Express 24h/24",
      description: "Intervention d'urgence 24h/24 et 7j/7 pour tous types de pannes fibre optique. Équipe de dépannage disponible en permanence."
    },
    {
      title: "Diagnostic Rapide",
      description: "Diagnostic express des pannes fibre optique avec équipements mobiles. Identification rapide de l'origine du dysfonctionnement."
    },
    {
      title: "Réparation Immédiate",
      description: "Réparation immédiate des câbles fibre endommagés. Stock de pièces de rechange pour intervention sans délai."
    },
    {
      title: "Rétablissement de Service",
      description: "Rétablissement prioritaire du service fibre optique. Solutions temporaires si nécessaire en attendant la réparation définitive."
    },
    {
      title: "Intervention Sécurisée",
      description: "Intervention d'urgence en toute sécurité, y compris en hauteur ou en milieu contraint. Équipements de sécurité professionnels."
    },
    {
      title: "Support Téléphonique",
      description: "Support téléphonique d'urgence pour diagnostic à distance. Assistance technique immédiate pour évaluer la situation."
    },
    {
      title: "Contournement Temporaire",
      description: "Mise en place de solutions de contournement temporaires. Maintien de la connectivité pendant les réparations."
    },
    {
      title: "Suivi Post-Intervention",
      description: "Suivi post-intervention pour s'assurer de la stabilité de la réparation. Contrôle qualité et tests de performance."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Intervention 24h/24 et 7j/7",
    "Équipe d'urgence dédiée",
    "Temps de réponse ultra-rapide",
    "Stock de pièces disponible",
    "Solutions temporaires",
    "Estimation gratuite et sans engagement",
    "Tarification transparente d'urgence",
    "Support téléphonique permanent",
    "Intervention sécurisée",
    "Garantie de réparation",
    "Suivi qualité"
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
  title: "Urgence Fibre Paris 24h/24 - RAFCOM | Dépannage Express | Devis Gratuit",
  description: urgenceFibreConfig.description,
  keywords: urgenceFibreConfig.keywords.join(", "),
  authors: [{ name: "RAFCOM" }],
  creator: "RAFCOM",
  publisher: "RAFCOM",
  openGraph: {
    title: "Urgence Fibre Paris 24h/24 - RAFCOM | Dépannage Express",
    description: urgenceFibreConfig.description,
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function UrgenceFibrePage() {
  return <ServicePage {...urgenceFibreConfig} />;
}
