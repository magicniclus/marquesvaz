import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const fibreChellesConfig = {
  title: "Travaux Fibre Optique Chelles - RAFCOM",
  description: "Spécialiste travaux fibre optique Chelles Seine-et-Marne. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit 77.",
  keywords: [
    "travaux fibre Chelles",
    "fourreau bouché Chelles",
    "détection point blocage Chelles",
    "raccordement fibre complexe Chelles",
    "urgence fibre Chelles",
    "débouchage fourreaux Chelles 77",
    "entrepreneur fibre Chelles",
    "devis travaux fibre Chelles",
    "fibre optique Chelles Seine-et-Marne",
    "installation fibre Chelles"
  ],
  
  sectorName: "Chelles",
  heroImage: "/prestation-5.png",
  heroTitle: "Entreprise travaux fibre optique à Chelles",
  heroSubtitle: "Spécialiste fibre optique Chelles Seine-et-Marne. Solutions techniques complètes pour débouchage fourreaux, détection blocages et raccordements dans cette ville en développement.",
  
  location: "Chelles",
  
  mainDescription: "RAFCOM intervient à Chelles et dans toute la Seine-et-Marne pour vos travaux fibre optique. Notre expertise technique s'adapte parfaitement à cette ville en plein développement avec ses nouveaux quartiers et ses besoins croissants en télécommunications. Nous couvrons tous les secteurs de Chelles : des quartiers historiques aux nouveaux développements, en passant par les zones commerciales et résidentielles.",
  
  mainServices: [
    {
      title: "Installation Fibre Optique Chelles",
      description: "Installation complète de réseaux fibre optique dans les nouveaux développements et quartiers existants de Chelles."
    },
    {
      title: "Débouchage Fourreaux Chelles 77",
      description: "Débouchage spécialisé de fourreaux télécommunications avec techniques adaptées aux réseaux de Chelles."
    },
    {
      title: "Détection Blocages Seine-et-Marne",
      description: "Localisation précise des points de blocage avec équipements de diagnostic pour réseaux Chelles et environs."
    },
    {
      title: "Raccordement Fibre Complexe Chelles",
      description: "Solutions techniques pour raccordements difficiles dans les nouveaux immeubles et zones d'activité de Chelles."
    },
    {
      title: "Urgence Fibre Chelles 24h/24",
      description: "Service d'urgence fibre optique disponible 24h/24 pour interventions rapides à Chelles et Seine-et-Marne."
    },
    {
      title: "Solutions Nouveaux Quartiers",
      description: "Expertise spécialisée pour déploiement fibre dans nouveaux développements urbains de Chelles."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Chelles",
    "Intervention rapide Seine-et-Marne",
    "Expertise nouveaux développements",
    "Matériel professionnel moderne",
    "Service d'urgence 24h/24 Chelles",
    "Connaissance évolution urbaine",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Chelles 77",
    "Équipe technique adaptable",
    "Solutions évolutives",
    "Accompagnement projets urbains"
  ],
  
  projectExamples: [
    {
      title: "Installation fibre nouveau quartier Chelles",
      type: "Développement urbain - 200 logements neufs",
      description: "Déploiement complet réseau fibre optique dans nouveau quartier résidentiel avec infrastructure moderne."
    },
    {
      title: "Débouchage fourreaux centre commercial",
      type: "Zone commerciale - Conduits saturés",
      description: "Intervention débouchage sur zone commerciale avec techniques spécialisées pour fourreaux haute capacité."
    },
    {
      title: "Urgence fibre gare RER Chelles",
      type: "Transport - Panne critique lundi matin",
      description: "Réparation d'urgence lundi 6h avec rétablissement express pour hub de transport stratégique."
    }
  ],
  
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcomm.fr",
    address: "Paris (75015), Île-de-France"
  },
  
  nearbyAreas: [
    "Gournay-sur-Marne",
    "Neuilly-sur-Marne",
    "Neuilly-Plaisance",
    "Vaires-sur-Marne",
    "Torcy",
    "Noisiel",
    "Lognes",
    "Emerainville",
    "Roissy-en-Brie",
    "Pontault-Combault",
    "Ozoir-la-Ferrière",
    "Brou-sur-Chantereine"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Travaux Fibre " + fibreChellesConfig.sectorName,
  fibreChellesConfig.location,
  fibreChellesConfig.description,
  fibreChellesConfig.keywords
);

export default function FibreChellesPage() {
  return <SectorPage {...fibreChellesConfig} />;
}
