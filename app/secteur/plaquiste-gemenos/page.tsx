import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteGemenos = {
  title: "Plaquiste Gémenos - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste Gémenos. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste Gémenos",
    "cloisons sèches Gémenos",
    "doublage murs Gémenos",
    "faux plafonds Gémenos",
    "finitions placo Gémenos",
    "rénovation placo Gémenos",
    "entrepreneur plaquiste Gémenos",
    "devis gratuit plaquiste Gémenos",
    "isolation thermique Gémenos",
    "travaux placo Gémenos"
  ],
  
  sectorName: "Gémenos",
  heroImage: "/prestation-4.png",
  heroTitle: "Entreprise de plaquiste à Gémenos",
  heroSubtitle: "Spécialiste plaquiste Gémenos et massif de la Sainte-Baume. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions.",
  
  location: "Gémenos",
  
  mainDescription: "Marques Vaz Placo intervient à Gémenos et dans la région du massif de la Sainte-Baume pour tous vos travaux de plaquiste. Notre expertise couvre cette commune pittoresque située entre Aubagne et le massif de la Sainte-Baume. Nous maîtrisons parfaitement les besoins de Gémenos : du centre-ville aux quartiers résidentiels, en passant par les villas et les propriétés dans la nature.",

  mainServices: [
    {
      title: "Cloisons Sèches Gémenos",
      description: "Installation de cloisons sèches adaptées aux constructions de Gémenos, respectueuses de l'environnement naturel."
    },
    {
      title: "Doublage et Isolation Gémenos",
      description: "Doublage des murs avec isolation thermique et phonique pour améliorer le confort dans les logements de Gémenos."
    },
    {
      title: "Faux Plafonds Gémenos",
      description: "Installation de faux plafonds suspendus avec intégration d'éclairage pour valoriser vos espaces à Gémenos."
    },
    {
      title: "Finitions et Bandes Gémenos",
      description: "Finitions parfaites avec pose de bandes et enduits pour un résultat impeccable dans vos projets à Gémenos."
    },
    {
      title: "Rénovation Placo Gémenos",
      description: "Rénovation et réparation de cloisons existantes pour moderniser vos espaces dans la région de Gémenos."
    },
    {
      title: "Aménagement Intérieur Gémenos",
      description: "Solutions d'aménagement sur mesure pour optimiser vos espaces résidentiels et de loisirs à Gémenos."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Gémenos",
    "Intervention rapide région Sainte-Baume",
    "Expertise constructions en milieu naturel",
    "Matériaux de qualité certifiés",
    "Entrepreneur du bâtiment expérimenté",
    "Respect environnement naturel",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Gémenos",
    "Équipe technique qualifiée",
    "Solutions adaptées climat provençal",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Rénovation villa avec vue Sainte-Baume",
      type: "Villa 6 pièces - Rénovation haut de gamme",
      description: "Création de cloisons et doublage isolation dans villa d'exception avec vue sur le massif de la Sainte-Baume."
    },
    {
      title: "Aménagement maison de campagne Gémenos",
      type: "Maison traditionnelle - Modernisation",
      description: "Installation de cloisons sèches et faux plafonds pour modernisation respectueuse d'une maison provençale."
    },
    {
      title: "Isolation résidence secondaire Gémenos",
      type: "Maison de vacances - Doublage complet",
      description: "Doublage isolation thermique et phonique complète pour optimisation confort résidence secondaire."
    }
  ],
  
  contactInfo: {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Marseille, Provence-Alpes-Côte d'Azur"
  },
  
  nearbyAreas: [
    "Aubagne",
    "Roquevaire",
    "La Penne-sur-Huveaune",
    "Cuges-les-Pins",
    "Saint-Zacharie",
    "Plan-d'Aups-Sainte-Baume",
    "Nans-les-Pins",
    "Carnoux-en-Provence",
    "Cassis",
    "Roquefort-la-Bédoule",
    "La Ciotat",
    "Signes"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteGemenos.sectorName,
  plaquisteGemenos.location,
  plaquisteGemenos.description,
  plaquisteGemenos.keywords
);

export default function PlaquisteGemenos() {
  return <SectorPage {...plaquisteGemenos} />;
}
