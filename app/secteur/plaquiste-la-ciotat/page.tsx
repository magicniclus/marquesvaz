import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteLaCiotatConfig = {
  title: "Plaquiste La Ciotat - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste La Ciotat. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste La Ciotat",
    "cloisons sèches La Ciotat",
    "doublage murs La Ciotat",
    "faux plafonds La Ciotat",
    "finitions placo La Ciotat",
    "rénovation placo La Ciotat",
    "entrepreneur plaquiste La Ciotat",
    "devis gratuit plaquiste La Ciotat",
    "isolation thermique La Ciotat",
    "travaux placo La Ciotat"
  ],
  
  sectorName: "La Ciotat",
  heroImage: "/prestation-4.png",
  heroTitle: "Entreprise de plaquiste à La Ciotat",
  heroSubtitle: "Spécialiste plaquiste La Ciotat et région. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions dans la ville du cinéma.",
  
  location: "La Ciotat",
  
  mainDescription: "Marques Vaz Placo intervient à La Ciotat et sa région pour tous vos travaux de plaquiste. Notre expertise couvre cette ville balnéaire et industrielle avec ses spécificités maritimes et urbaines. Nous maîtrisons parfaitement les besoins de La Ciotat : du Vieux-Port aux quartiers résidentiels, en passant par les zones d'activité et les établissements touristiques.",

  mainServices: [
    {
      title: "Cloisons Sèches La Ciotat",
      description: "Installation de cloisons sèches adaptées au climat maritime et aux spécificités architecturales ciotadennes."
    },
    {
      title: "Doublage et Isolation La Ciotat",
      description: "Doublage des murs avec isolation thermique et phonique adaptée aux contraintes du littoral méditerranéen."
    },
    {
      title: "Faux Plafonds La Ciotat",
      description: "Installation de faux plafonds suspendus résistants à l'humidité marine pour vos espaces à La Ciotat."
    },
    {
      title: "Finitions et Bandes La Ciotat",
      description: "Finitions parfaites avec matériaux adaptés au climat maritime pour un résultat durable à La Ciotat."
    },
    {
      title: "Rénovation Placo La Ciotat",
      description: "Rénovation et réparation de cloisons avec traitement anti-humidité pour les bâtiments ciotadens."
    },
    {
      title: "Aménagement Intérieur La Ciotat",
      description: "Solutions d'aménagement résistantes au climat maritime pour optimiser vos espaces à La Ciotat."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé La Ciotat",
    "Intervention rapide région ciotadenne",
    "Expertise climat maritime",
    "Matériaux résistants humidité",
    "Entrepreneur du bâtiment expérimenté",
    "Connaissance contraintes littorales",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux La Ciotat",
    "Équipe technique qualifiée",
    "Solutions adaptées environnement marin",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Rénovation appartement front de mer",
      type: "Appartement T5 - Traitement humidité",
      description: "Doublage isolation et création cloisons avec traitement anti-humidité pour appartement face à la mer."
    },
    {
      title: "Aménagement bureaux zone industrielle",
      type: "Bureaux 300m² - Cloisons techniques",
      description: "Installation de cloisons sèches et faux plafonds techniques pour espace professionnel moderne."
    },
    {
      title: "Isolation villa quartier Eden",
      type: "Villa contemporaine - Doublage complet",
      description: "Doublage isolation thermique et phonique complète avec matériaux adaptés au climat maritime."
    }
  ],
  
  contactInfo: {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Marseille, Provence-Alpes-Côte d'Azur"
  },
  
  nearbyAreas: [
    "Cassis",
    "Aubagne",
    "Marseille",
    "Ceyreste",
    "Roquefort-la-Bédoule",
    "Gémenos",
    "Cuges-les-Pins",
    "Carnoux-en-Provence",
    "Bandol",
    "Saint-Cyr-sur-Mer",
    "Sanary-sur-Mer",
    "Beausset"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteLaCiotatConfig.sectorName,
  plaquisteLaCiotatConfig.location,
  plaquisteLaCiotatConfig.description,
  plaquisteLaCiotatConfig.keywords
);

export default function PlaquisteLaCiotatPage() {
  return <SectorPage {...plaquisteLaCiotatConfig} />;
}
