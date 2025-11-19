import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteMarttiguesConfig = {
  title: "Plaquiste Martigues - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste Martigues. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste Martigues",
    "cloisons sèches Martigues",
    "doublage murs Martigues",
    "faux plafonds Martigues",
    "finitions placo Martigues",
    "rénovation placo Martigues",
    "entrepreneur plaquiste Martigues",
    "devis gratuit plaquiste Martigues",
    "isolation thermique Martigues",
    "travaux placo Martigues"
  ],
  
  sectorName: "Martigues",
  heroImage: "/prestation-4.png",
  heroTitle: "Entreprise de plaquiste à Martigues",
  heroSubtitle: "Spécialiste plaquiste Martigues et Côte Bleue. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions dans la Venise provençale.",
  
  location: "Martigues",
  
  mainDescription: "Marques Vaz Placo intervient à Martigues et sur la Côte Bleue pour tous vos travaux de plaquiste. Notre expertise couvre cette ville industrielle et touristique avec ses spécificités maritimes et industrielles. Nous maîtrisons parfaitement les besoins de Martigues : du centre historique aux quartiers résidentiels, en passant par les zones industrielles et portuaires.",

  mainServices: [
    {
      title: "Cloisons Sèches Martigues",
      description: "Installation de cloisons sèches adaptées au climat maritime et aux spécificités architecturales martégales."
    },
    {
      title: "Doublage et Isolation Martigues",
      description: "Doublage des murs avec isolation thermique et phonique adaptée aux contraintes du littoral méditerranéen."
    },
    {
      title: "Faux Plafonds Martigues",
      description: "Installation de faux plafonds suspendus résistants à l'humidité marine pour vos espaces à Martigues."
    },
    {
      title: "Finitions et Bandes Martigues",
      description: "Finitions parfaites avec matériaux adaptés au climat maritime pour un résultat durable à Martigues."
    },
    {
      title: "Rénovation Placo Martigues",
      description: "Rénovation et réparation de cloisons avec traitement anti-humidité pour les bâtiments martégaux."
    },
    {
      title: "Aménagement Intérieur Martigues",
      description: "Solutions d'aménagement résistantes au climat maritime pour optimiser vos espaces à Martigues."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Martigues",
    "Intervention rapide Côte Bleue",
    "Expertise climat maritime",
    "Matériaux résistants humidité",
    "Entrepreneur du bâtiment expérimenté",
    "Connaissance contraintes littorales",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Martigues",
    "Équipe technique qualifiée",
    "Solutions adaptées environnement marin",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Rénovation villa bord de mer Martigues",
      type: "Villa 5 pièces - Traitement humidité",
      description: "Doublage isolation et création cloisons avec traitement anti-humidité pour villa exposée aux embruns."
    },
    {
      title: "Aménagement bureaux zone industrielle",
      type: "Bureaux 250m² - Cloisons techniques",
      description: "Installation de cloisons sèches et faux plafonds techniques pour espace professionnel industriel."
    },
    {
      title: "Isolation maison quartier Ferrières",
      type: "Maison individuelle - Doublage complet",
      description: "Doublage isolation thermique et phonique complète avec matériaux adaptés au climat maritime."
    }
  ],
  
  contactInfo: {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Marseille, Provence-Alpes-Côte d'Azur"
  },
  
  nearbyAreas: [
    "Port-de-Bouc",
    "Fos-sur-Mer",
    "Saint-Mitre-les-Remparts",
    "Istres",
    "Carry-le-Rouet",
    "Sausset-les-Pins",
    "Ensuès-la-Redonne",
    "Le Rove",
    "Gignac-la-Nerthe",
    "Châteauneuf-les-Martigues",
    "Saint-Victoret",
    "Berre-l'Étang"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteMarttiguesConfig.sectorName,
  plaquisteMarttiguesConfig.location,
  plaquisteMarttiguesConfig.description,
  plaquisteMarttiguesConfig.keywords
);

export default function PlaquisteMarttiguesPage() {
  return <SectorPage {...plaquisteMarttiguesConfig} />;
}
