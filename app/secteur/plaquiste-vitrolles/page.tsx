import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const plaquisteVitrollesConfig = {
  title: "Plaquiste Vitrolles - MARQUES VAZ PLACO",
  description: "Spécialiste plaquiste Vitrolles. Cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit entrepreneur du bâtiment.",
  keywords: [
    "plaquiste Vitrolles",
    "cloisons sèches Vitrolles",
    "doublage murs Vitrolles",
    "faux plafonds Vitrolles",
    "finitions placo Vitrolles",
    "rénovation placo Vitrolles",
    "entrepreneur plaquiste Vitrolles",
    "devis gratuit plaquiste Vitrolles",
    "isolation thermique Vitrolles",
    "travaux placo Vitrolles"
  ],
  
  sectorName: "Vitrolles",
  heroImage: "/prestation-2.png",
  heroTitle: "Entreprise de plaquiste à Vitrolles",
  heroSubtitle: "Spécialiste plaquiste Vitrolles et région. Solutions expertes pour cloisons sèches, doublage, faux plafonds et finitions près de l'aéroport de Marseille.",
  
  location: "Vitrolles",
  
  mainDescription: "Marques Vaz Placo intervient à Vitrolles et sa région pour tous vos travaux de plaquiste. Notre expertise couvre cette ville moderne avec ses quartiers résidentiels et zones d'activité proches de l'aéroport. Nous maîtrisons parfaitement les besoins de Vitrolles : des centres commerciaux aux quartiers résidentiels, en passant par les zones d'activité et hôtelières.",

  mainServices: [
    {
      title: "Cloisons Sèches Vitrolles",
      description: "Installation de cloisons sèches adaptées aux constructions vitrollaises modernes et aux contraintes aéroportuaires."
    },
    {
      title: "Doublage et Isolation Vitrolles",
      description: "Doublage des murs avec isolation phonique renforcée pour les logements proches de l'aéroport de Marseille."
    },
    {
      title: "Faux Plafonds Vitrolles",
      description: "Installation de faux plafonds suspendus avec isolation acoustique pour vos espaces à Vitrolles."
    },
    {
      title: "Finitions et Bandes Vitrolles",
      description: "Finitions parfaites avec pose de bandes et enduits pour un résultat impeccable dans vos projets vitrollais."
    },
    {
      title: "Rénovation Placo Vitrolles",
      description: "Rénovation et réparation de cloisons existantes pour moderniser vos espaces dans la région vitrollaise."
    },
    {
      title: "Aménagement Commercial Vitrolles",
      description: "Solutions d'aménagement spécialisées pour commerces et hôtels près de l'aéroport de Marseille."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Vitrolles",
    "Intervention rapide région aéroportuaire",
    "Expertise isolation phonique",
    "Matériaux de qualité certifiés",
    "Entrepreneur du bâtiment expérimenté",
    "Solutions anti-bruit aéroport",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Vitrolles",
    "Équipe technique qualifiée",
    "Spécialiste aménagement commercial",
    "Respect délais convenus"
  ],
  
  projectExamples: [
    {
      title: "Isolation phonique villa proche aéroport",
      type: "Villa 6 pièces - Isolation acoustique",
      description: "Doublage isolation phonique renforcée et faux plafonds acoustiques pour villa exposée au bruit aérien."
    },
    {
      title: "Aménagement hôtel zone aéroportuaire",
      type: "Hôtel 50 chambres - Cloisons techniques",
      description: "Installation de cloisons sèches et faux plafonds techniques pour hôtel d'affaires moderne."
    },
    {
      title: "Rénovation appartement centre Vitrolles",
      type: "Appartement T4 - Rénovation complète",
      description: "Création nouvelles cloisons, doublage isolation et finitions parfaites en appartement récent."
    }
  ],
  
  contactInfo: {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Marseille, Provence-Alpes-Côte d'Azur"
  },
  
  nearbyAreas: [
    "Marignane",
    "Les Pennes-Mirabeau",
    "Cabriès",
    "Bouc-Bel-Air",
    "Aix-en-Provence",
    "Rognac",
    "Velaux",
    "Berre-l'Étang",
    "Saint-Victoret",
    "Gignac-la-Nerthe",
    "Châteauneuf-les-Martigues",
    "Carry-le-Rouet"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Plaquiste " + plaquisteVitrollesConfig.sectorName,
  plaquisteVitrollesConfig.location,
  plaquisteVitrollesConfig.description,
  plaquisteVitrollesConfig.keywords
);

export default function PlaquisteVitrollesPage() {
  return <SectorPage {...plaquisteVitrollesConfig} />;
}
