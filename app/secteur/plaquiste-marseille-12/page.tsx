import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteMarseille12 = {
  title: "Plaquiste Marseille 12ème - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste Marseille 12ème arrondissement. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste Marseille 12ème",
    "cloisons sèches Marseille 12",
    "doublage murs Marseille 12ème",
    "faux plafonds Marseille 12",
    "finitions placo Marseille 12ème",
    "rénovation placo Marseille 12",
    "entrepreneur plaquiste Marseille 12ème",
    "devis gratuit plaquiste Marseille 12",
    "isolation thermique Marseille 12ème",
    "travaux placo Marseille 12ème"
  ],
  
  sectorName: "Marseille 12ème",
  heroImage: "/prestation-5.png",
  heroTitle: "Entreprise de plaquiste à Marseille 12ème",
  heroSubtitle: "Spécialiste plaquiste Marseille 12ème arrondissement et Saint-Julien. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions dans ce quartier résidentiel.",
  
  location: "Marseille 12ème",
  
  mainDescription: "Marques Vaz Placo intervient dans le 12ème arrondissement de Marseille pour tous vos travaux de plaquiste. Notre expertise couvre ce quartier résidentiel de Saint-Julien et La Fourragère avec ses lotissements et ses résidences. Nous maîtrisons parfaitement les besoins du 12ème arrondissement : des maisons familiales aux petits immeubles, en passant par les commerces locaux et les cabinets de proximité.",

  mainServices: [
    {
      title: "Cloisons Sèches Marseille 12ème",
      description: "Installation de cloisons sèches pour les maisons et résidences du 12ème arrondissement de Marseille."
    },
    {
      title: "Doublage et Isolation Marseille 12",
      description: "Doublage des murs avec isolation pour améliorer le confort des logements de Saint-Julien."
    },
    {
      title: "Faux Plafonds Marseille 12ème",
      description: "Installation de faux plafonds pour les aménagements et extensions du 12ème arrondissement."
    },
    {
      title: "Finitions et Bandes Marseille 12",
      description: "Finitions parfaites pour les rénovations de maisons familiales du quartier Saint-Julien."
    },
    {
      title: "Rénovation Placo Marseille 12ème",
      description: "Rénovation et modernisation de cloisons dans les habitations du 12ème arrondissement."
    },
    {
      title: "Aménagement Intérieur Marseille 12",
      description: "Solutions d'aménagement pour optimiser les espaces résidentiels du 12ème."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Marseille 12ème",
    "Intervention rapide Saint-Julien",
    "Expertise habitat résidentiel",
    "Spécialiste maisons familiales",
    "Entrepreneur du bâtiment expérimenté",
    "Connaissance quartiers pavillonnaires",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Marseille 12ème",
    "Équipe technique qualifiée",
    "Solutions adaptées habitat familial",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Rénovation maison Saint-Julien",
      type: "Maison familiale - Rénovation complète",
      description: "Création de nouvelles cloisons et doublage isolation dans maison avec jardin."
    },
    {
      title: "Aménagement combles La Fourragère",
      type: "Combles 40m² - Aménagement complet",
      description: "Installation de cloisons sèches et isolation pour création de chambres sous combles."
    },
    {
      title: "Isolation pavillon récent",
      type: "Pavillon 2000 - Doublage phonique",
      description: "Doublage isolation phonique pour amélioration confort acoustique en lotissement."
    }
  ],
  
  contactInfo: {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Marseille, Provence-Alpes-Côte d'Azur"
  },
  
  nearbyAreas: [
    "Marseille 11ème",
    "Marseille 13ème",
    "Aubagne",
    "Allauch",
    "Saint-Julien",
    "La Fourragère",
    "Les Trois Lucs",
    "Valentine",
    "La Pomme",
    "Plan-de-Cuques",
    "La Penne-sur-Huveaune",
    "Les Camoins"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteMarseille12.sectorName,
  plaquisteMarseille12.location,
  plaquisteMarseille12.description,
  plaquisteMarseille12.keywords
);

export default function PlaquisteMarseille12() {
  return <SectorPage {...plaquisteMarseille12} />;
}
