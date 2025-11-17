import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

const fourreauBoucheConfig = {
  // SEO et métadonnées
  title: "Fourreau Bouché Paris - RAFCOM",
  description: "Spécialiste du débouchage de fourreaux télécommunications en Île-de-France. Techniques professionnelles pour libérer les conduits obstrués. Devis gratuit et intervention rapide.",
  keywords: ["fourreau bouché Paris", "débouchage fourreau télécom", "conduit obstrué fibre", "débouchage gaine télécom", "devis gratuit débouchage", "RAFCOM", "fourreau télécom 75015", "débouchage conduit"],
  
  // Contenu principal
  serviceName: "Fourreau Bouché",
  heroImage: "/prestation-2.png",
  heroTitle: "Débouchage de Fourreaux Télécommunications",
  heroSubtitle: "Spécialiste du débouchage de fourreaux et gaines télécommunications. Techniques professionnelles pour libérer les conduits obstrués et permettre le passage de la fibre optique.",
  
  // Localisation
  sector: "Télécommunications - Débouchage",
  location: "Paris et Île-de-France",
  
  // Description détaillée
  mainDescription: "RAFCOM est spécialisé dans le débouchage de fourreaux télécommunications en Île-de-France. Nos techniciens expérimentés utilisent des techniques professionnelles pour libérer les conduits obstrués et permettre le passage de la fibre optique. Nous intervenons rapidement sur tous types de blocages : terre, gravats, racines, anciens câbles. Notre expertise nous permet de résoudre les situations les plus complexes avec un devis gratuit et une intervention rapide.",
  
  // Structure SEO optimisée
  problemSection: {
    title: "Problèmes de Fourreaux Bouchés",
    description: "Les fourreaux télécommunications peuvent se boucher pour diverses raisons, empêchant le passage des câbles fibre optique. Ces obstructions nécessitent une intervention technique spécialisée pour éviter d'endommager les infrastructures existantes.",
    problems: [
      "Fourreaux complètement obstrués par la terre",
      "Présence de gravats et débris de chantier",
      "Racines d'arbres qui ont envahi les conduits",
      "Anciens câbles abandonnés qui bloquent",
      "Eau stagnante et boue dans les fourreaux",
      "Déformation ou écrasement des conduits"
    ]
  },
  
  diagnosticSection: {
    title: "Diagnostic Précis des Obstructions",
    description: "Notre équipe utilise des équipements de détection avancés pour localiser et identifier précisément la nature des obstructions dans vos fourreaux télécommunications.",
    steps: [
      "Inspection visuelle des regards et chambres de tirage",
      "Sondage mécanique pour localiser les obstructions",
      "Utilisation de caméras d'inspection si nécessaire",
      "Évaluation de l'état général du fourreau",
      "Identification de la nature du blocage (terre, racines, câbles)",
      "Définition de la méthode de débouchage adaptée"
    ]
  },
  
  solutionSection: {
    title: "Techniques de Débouchage Professionnel",
    description: "RAFCOM maîtrise toutes les techniques de débouchage de fourreaux, des méthodes douces aux interventions plus complexes, toujours dans le respect des infrastructures existantes.",
    solutions: [
      "Débouchage par aspiration haute pression",
      "Utilisation de furets et tire-fils spécialisés",
      "Nettoyage par jet d'eau haute pression",
      "Extraction d'anciens câbles et débris",
      "Réparation de fourreaux endommagés",
      "Contrôle final et test de passage"
    ]
  },
  
  // Sous-prestations
  subServices: [
    {
      title: "Diagnostic d'Obstruction",
      description: "Diagnostic précis de l'obstruction par caméra d'inspection. Localisation exacte du blocage et évaluation de la faisabilité du débouchage."
    },
    {
      title: "Aiguillage Professionnel",
      description: "Aiguillage manuel et mécanique des fourreaux obstrués. Techniques adaptées selon le type d'obstruction et la configuration du conduit."
    },
    {
      title: "Soufflage Haute Pression",
      description: "Débouchage par soufflage haute pression pour évacuer les obstructions. Technique efficace pour les bouchons de terre ou débris."
    },
    {
      title: "Hydrocurage Spécialisé",
      description: "Nettoyage par hydrocurage pour les obstructions importantes. Évacuation des boues, sédiments et débris accumulés dans les conduits."
    },
    {
      title: "Aspiration de Débris",
      description: "Aspiration puissante des débris et obstructions évacués. Nettoyage complet du fourreau pour garantir un passage libre."
    },
    {
      title: "Test de Continuité",
      description: "Vérification de la continuité du fourreau après débouchage. Test de passage avec aiguille de tirage pour valider l'intervention."
    },
    {
      title: "Tirage de Câble",
      description: "Tirage immédiat du câble fibre optique après débouchage. Service complet pour finaliser l'installation en une seule intervention."
    },
    {
      title: "Rapport d'Intervention",
      description: "Rapport détaillé de l'intervention avec photos avant/après et recommandations pour éviter les futures obstructions."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Diagnostic précis par caméra",
    "Techniques professionnelles adaptées",
    "Équipements haute performance",
    "Intervention rapide et efficace",
    "Garantie de résultat",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Service d'urgence disponible",
    "Expertise technique reconnue",
    "Rapport d'intervention détaillé",
    "Solutions durables"
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
  title: "Fourreau Bouché Paris - RAFCOM | Débouchage Télécom | Devis Gratuit",
  description: fourreauBoucheConfig.description,
  keywords: fourreauBoucheConfig.keywords.join(", "),
  authors: [{ name: "RAFCOM" }],
  creator: "RAFCOM",
  publisher: "RAFCOM",
  openGraph: {
    title: "Fourreau Bouché Paris - RAFCOM | Débouchage Télécom",
    description: fourreauBoucheConfig.description,
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FourreauBouchePage() {
  return <ServicePage {...fourreauBoucheConfig} />;
}
