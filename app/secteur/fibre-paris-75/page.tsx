import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const fibreParis75Config = {
  title: "Travaux Fibre Optique Paris 75 - RAFCOM",
  description: "Spécialiste travaux fibre optique Paris 75. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit.",
  keywords: [
    "travaux fibre Paris 75",
    "fourreau bouché Paris",
    "détection point blocage Paris 75",
    "raccordement fibre complexe Paris",
    "urgence fibre Paris 75",
    "débouchage fourreaux Paris",
    "entrepreneur fibre Paris 75",
    "devis travaux fibre Paris"
  ],
  
  sectorName: "Paris (75)",
  heroImage: "/prestation-1.png",
  heroTitle: "Entreprise travaux fibre optique à Paris",
  heroSubtitle: "Spécialiste fibre optique Paris 75. Solutions complètes pour débouchage fourreaux, détection blocages, raccordements complexes et urgences fibre dans tous les arrondissements.",
  
  location: "Paris (75)",
  
  mainDescription: "RAFCOM couvre l'ensemble de Paris (75) pour tous vos travaux fibre optique. Notre expertise technique s'étend sur les 20 arrondissements parisiens, des quartiers historiques aux zones d'affaires modernes. Nous maîtrisons parfaitement les spécificités des infrastructures parisiennes : immeubles haussmanniens, constructions modernes, centres d'affaires et résidences de standing.",
  
  mainServices: [
    {
      title: "Travaux Fibre Optique",
      description: "Installation et maintenance complète de réseaux fibre optique dans tous les arrondissements de Paris."
    },
    {
      title: "Fourreau Bouché",
      description: "Débouchage spécialisé de fourreaux télécommunications avec techniques adaptées aux infrastructures parisiennes."
    },
    {
      title: "Détection de Point de Blocage",
      description: "Diagnostic précis des obstructions avec équipements haute technologie pour réseaux parisiens complexes."
    },
    {
      title: "Raccordement Fibre Complexe",
      description: "Expertise pour raccordements techniques difficiles en milieu urbain dense parisien."
    },
    {
      title: "Urgence Fibre",
      description: "Service d'urgence 24h/24 pour interventions rapides dans tout Paris 75."
    },
    {
      title: "Maintenance Préventive",
      description: "Contrats de maintenance spécialisés pour immeubles et entreprises parisiennes."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé",
    "Couverture complète Paris 75",
    "Expertise tous arrondissements",
    "Matériel professionnel de pointe",
    "Service d'urgence 24h/24",
    "Connaissance infrastructures parisiennes",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie sur tous travaux",
    "Équipe technique expérimentée",
    "Solutions sur mesure",
    "Respect normes télécoms strictes"
  ],
  
  projectExamples: [
    {
      title: "Installation fibre Tour Eiffel - 7ème arrondissement",
      type: "Zone touristique - Contraintes patrimoniales",
      description: "Installation fibre avec respect des contraintes architecturales et patrimoniales du secteur Tour Eiffel."
    },
    {
      title: "Débouchage fourreaux Marais - 4ème arrondissement",
      type: "Quartier historique - Immeubles anciens",
      description: "Intervention délicate sur fourreaux anciens avec techniques préservant l'intégrité du bâti historique."
    },
    {
      title: "Urgence fibre La Défense - Courbevoie",
      type: "Centre d'affaires - Panne critique",
      description: "Réparation d'urgence réseau fibre avec rétablissement en moins de 2h pour continuité d'activité."
    }
  ],
  
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcomm.fr",
    address: "Paris (75015), Île-de-France"
  },
  
  nearbyAreas: [
    "Paris 1er", "Paris 2ème", "Paris 3ème", "Paris 4ème", "Paris 5ème",
    "Paris 6ème", "Paris 7ème", "Paris 8ème", "Paris 9ème", "Paris 10ème",
    "Paris 11ème", "Paris 12ème", "Paris 13ème", "Paris 14ème", "Paris 15ème",
    "Paris 16ème", "Paris 17ème", "Paris 18ème", "Paris 19ème", "Paris 20ème"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Travaux Fibre " + fibreParis75Config.sectorName,
  fibreParis75Config.location,
  fibreParis75Config.description,
  fibreParis75Config.keywords
);

export default function FibreParis75Page() {
  return <SectorPage {...fibreParis75Config} />;
}
