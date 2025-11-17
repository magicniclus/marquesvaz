import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const fibreCergyConfig = {
  title: "Travaux Fibre Optique Cergy - RAFCOM",
  description: "Spécialiste travaux fibre optique Cergy. Débouchage fourreaux, détection blocages, raccordements complexes, urgences fibre. Devis gratuit Cergy-Pontoise.",
  keywords: [
    "travaux fibre Cergy",
    "fourreau bouché Cergy",
    "détection point blocage Cergy",
    "raccordement fibre complexe Cergy",
    "urgence fibre Cergy",
    "débouchage fourreaux Cergy-Pontoise",
    "entrepreneur fibre Cergy",
    "devis travaux fibre Cergy",
    "fibre optique Cergy-Pontoise",
    "installation fibre Cergy"
  ],
  
  sectorName: "Cergy",
  heroImage: "/prestation-5.png",
  heroTitle: "Entreprise travaux fibre optique à Cergy",
  heroSubtitle: "Spécialiste fibre optique Cergy-Pontoise. Solutions techniques expertes pour débouchage fourreaux, détection blocages et raccordements complexes dans la ville nouvelle.",
  
  location: "Cergy",
  
  mainDescription: "RAFCOM intervient à Cergy et Cergy-Pontoise pour tous vos travaux fibre optique. Notre expertise technique couvre cette ville nouvelle du Val-d'Oise avec ses infrastructures modernes et ses besoins spécifiques en télécommunications. Nous maîtrisons parfaitement les réseaux de Cergy : du centre-ville aux quartiers résidentiels, en passant par la zone d'activité de Saint-Christophe.",
  
  mainServices: [
    {
      title: "Installation Fibre Optique Cergy",
      description: "Installation complète de réseaux fibre optique adaptés aux infrastructures modernes de Cergy-Pontoise."
    },
    {
      title: "Débouchage Fourreaux Cergy",
      description: "Débouchage spécialisé de fourreaux télécommunications dans les réseaux de la ville nouvelle de Cergy."
    },
    {
      title: "Détection Blocages Cergy-Pontoise",
      description: "Localisation précise des points de blocage avec équipements haute technologie pour réseaux Cergy."
    },
    {
      title: "Raccordement Fibre Complexe Cergy",
      description: "Solutions techniques pour raccordements difficiles dans les immeubles et zones d'activité de Cergy."
    },
    {
      title: "Urgence Fibre Cergy 24h/24",
      description: "Service d'urgence fibre optique disponible 24h/24 pour interventions rapides à Cergy-Pontoise."
    },
    {
      title: "Maintenance Préventive Cergy",
      description: "Contrats de maintenance spécialisés pour entreprises et résidences de Cergy-Pontoise."
    }
  ],
  
  advantages: [
    "Devis gratuit et personnalisé Cergy",
    "Intervention rapide Cergy-Pontoise",
    "Expertise infrastructures ville nouvelle",
    "Matériel professionnel haute performance",
    "Service d'urgence 24h/24 Cergy",
    "Connaissance réseaux locaux Cergy",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie travaux Cergy-Pontoise",
    "Équipe technique expérimentée",
    "Solutions adaptées ville nouvelle",
    "Respect normes télécoms Cergy"
  ],
  
  projectExamples: [
    {
      title: "Installation fibre résidence Les Touleuses Cergy",
      type: "Résidence 150 logements - Infrastructure moderne",
      description: "Déploiement complet réseau fibre optique dans grande résidence avec raccordements multiples et tests performance."
    },
    {
      title: "Débouchage fourreaux zone Saint-Christophe",
      type: "Zone d'activité - Conduits obstrués",
      description: "Intervention débouchage sur zone d'activité avec techniques spécialisées pour fourreaux professionnels."
    },
    {
      title: "Urgence fibre centre-ville Cergy",
      type: "Commerce - Panne critique weekend",
      description: "Réparation d'urgence samedi soir avec rétablissement service en 2h pour continuité activité commerciale."
    }
  ],
  
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcomm.fr",
    address: "Paris (75015), Île-de-France"
  },
  
  nearbyAreas: [
    "Pontoise",
    "Osny",
    "Éragny",
    "Neuville-sur-Oise",
    "Vauréal",
    "Jouy-le-Moutier",
    "Courdimanche",
    "Puiseux-Pontoise",
    "Saint-Ouen-l'Aumône",
    "Menucourt",
    "Boisemont",
    "Pierrelaye"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Travaux Fibre " + fibreCergyConfig.sectorName,
  fibreCergyConfig.location,
  fibreCergyConfig.description,
  fibreCergyConfig.keywords
);

export default function FibreCergyPage() {
  return <SectorPage {...fibreCergyConfig} />;
}
