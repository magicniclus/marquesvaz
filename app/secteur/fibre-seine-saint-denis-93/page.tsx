import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const fibreSeineSaintDenis93Config = {
  title: "Travaux Fibre Optique Seine-Saint-Denis 93 - RAFCOM",
  description: "Spécialiste travaux fibre optique Seine-Saint-Denis 93. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit.",
  keywords: [
    "travaux fibre Seine-Saint-Denis 93",
    "fourreau bouché 93",
    "détection point blocage Seine-Saint-Denis",
    "raccordement fibre complexe 93",
    "urgence fibre Seine-Saint-Denis",
    "débouchage fourreaux 93",
    "entrepreneur fibre Seine-Saint-Denis",
    "devis travaux fibre 93"
  ],
  
  sectorName: "Seine-Saint-Denis (93)",
  heroImage: "/prestation-2.png",
  heroTitle: "Entreprise travaux fibre optique en Seine-Saint-Denis",
  heroSubtitle: "Spécialiste fibre optique Seine-Saint-Denis 93. Solutions techniques complètes pour débouchage fourreaux, détection blocages et raccordements sur tout le département.",
  
  location: "Seine-Saint-Denis (93)",
  
  mainDescription: "RAFCOM intervient sur l'ensemble du département de Seine-Saint-Denis (93) pour vos travaux fibre optique. De Saint-Denis à Montreuil, en passant par Aubervilliers et Pantin, nous maîtrisons les spécificités des infrastructures du 93. Notre expertise couvre les zones urbaines denses, les quartiers en rénovation et les nouveaux développements immobiliers du département.",
  
  mainServices: [
    {
      title: "Travaux Fibre Optique",
      description: "Installation et maintenance de réseaux fibre optique adaptés aux spécificités urbaines de Seine-Saint-Denis."
    },
    {
      title: "Fourreau Bouché",
      description: "Débouchage spécialisé de fourreaux télécommunications avec techniques professionnelles pour le département 93."
    },
    {
      title: "Détection de Point de Blocage",
      description: "Diagnostic précis des obstructions avec équipements haute technologie pour réseaux Seine-Saint-Denis."
    },
    {
      title: "Raccordement Fibre Complexe",
      description: "Solutions techniques pour raccordements difficiles en milieu urbain dense du 93."
    },
    {
      title: "Urgence Fibre",
      description: "Service d'urgence 24h/24 pour interventions rapides sur tout le département Seine-Saint-Denis."
    },
    {
      title: "Rénovation Réseaux",
      description: "Modernisation et rénovation des réseaux fibre dans les quartiers en développement du 93."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé",
    "Couverture complète Seine-Saint-Denis",
    "Expertise zones urbaines denses",
    "Matériel professionnel adapté",
    "Intervention rapide 24h/24",
    "Connaissance spécificités 93",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie sur tous travaux",
    "Équipe technique qualifiée",
    "Solutions adaptées au terrain",
    "Respect réglementations locales"
  ],
  
  projectExamples: [
    {
      title: "Installation fibre Saint-Denis Pleyel",
      type: "Nouveau quartier - 200 logements",
      description: "Déploiement complet réseau fibre optique dans nouveau développement urbain avec infrastructure moderne."
    },
    {
      title: "Débouchage fourreaux Montreuil",
      type: "Immeuble rénové - Conduits anciens",
      description: "Intervention débouchage sur ancien réseau avec techniques adaptées et mise aux normes."
    },
    {
      title: "Urgence fibre Aubervilliers",
      type: "Zone d'activité - Panne critique",
      description: "Réparation d'urgence réseau fibre avec rétablissement rapide pour zone d'activité économique."
    }
  ],
  
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcomm.fr",
    address: "Paris (75015), Île-de-France"
  },
  
  nearbyAreas: [
    "Saint-Denis",
    "Montreuil",
    "Aubervilliers",
    "Pantin",
    "Bobigny",
    "Drancy",
    "Le Bourget",
    "La Courneuve",
    "Épinay-sur-Seine",
    "Pierrefitte-sur-Seine",
    "Stains",
    "Villetaneuse"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Travaux Fibre " + fibreSeineSaintDenis93Config.sectorName,
  fibreSeineSaintDenis93Config.location,
  fibreSeineSaintDenis93Config.description,
  fibreSeineSaintDenis93Config.keywords
);

export default function FibreSeineSaintDenis93Page() {
  return <SectorPage {...fibreSeineSaintDenis93Config} />;
}
