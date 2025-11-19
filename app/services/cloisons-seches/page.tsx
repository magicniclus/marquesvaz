import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo-config';

export const metadata: Metadata = generateSEOMetadata(
  'Cloisons Sèches Marseille - Pose et Installation Professionnelle',
  'Spécialiste de la pose de cloisons sèches à Marseille. Installation de cloisons en plaques de plâtre, séparation de pièces et aménagement intérieur. Devis gratuit et personnalisé.',
  '/og-cloisons-seches.jpg',
  '/services/cloisons-seches'
);

export default function CloisonsSechesPlacoPage() {
  const contactInfo = {
    phone: '06 59 76 49 95',
    email: 'amiltonvazmarques@gmail.com',
    address: 'Marseille, Provence-Alpes-Côte d\'Azur'
  };

  const serviceArea = [
    'Marseille (13)',
    'Aix-en-Provence',
    'Aubagne',
    'Martigues',
    'Salon-de-Provence',
    'Istres',
    'Vitrolles',
    'Cassis',
    'La Ciotat',
    'Gardanne'
  ];

  const subServices = [
    {
      title: 'Cloisons de séparation',
      description: 'Installation de cloisons pour séparer et créer de nouveaux espaces dans votre habitat ou local professionnel.'
    },
    {
      title: 'Cloisons alvéolaires',
      description: 'Pose de cloisons légères et isolantes pour optimiser l\'espace tout en conservant de bonnes performances thermiques.'
    },
    {
      title: 'Cloisons hydrofuges',
      description: 'Installation de cloisons résistantes à l\'humidité pour salles de bains, cuisines et pièces humides.'
    },
    {
      title: 'Cloisons phoniques',
      description: 'Mise en place de cloisons avec isolation acoustique pour réduire les nuisances sonores entre les pièces.'
    },
    {
      title: 'Cloisons courbes',
      description: 'Réalisation de cloisons aux formes originales et courbes pour des aménagements sur mesure et design.'
    },
    {
      title: 'Cloisons techniques',
      description: 'Installation de cloisons intégrant passages de gaines électriques, plomberie et autres réseaux techniques.'
    }
  ];

  const advantages = [
    'Devis gratuit et personnalisé',
    'Pose professionnelle et soignée',
    'Matériaux de qualité certifiés',
    'Respect des délais convenus',
    'Finitions parfaites',
    'Conseil personnalisé sur mesure',
    'Garantie travaux incluse',
    'Tarification transparente',
    'Estimation gratuite et sans engagement',
    'Entrepreneur du bâtiment expérimenté'
  ];

  return (
    <ServicePage
      title="Cloisons Sèches Marseille - Pose et Installation Professionnelle"
      description="Spécialiste de la pose de cloisons sèches à Marseille. Installation de cloisons en plaques de plâtre, séparation de pièces et aménagement intérieur. Devis gratuit et personnalisé."
      keywords={[
        'cloisons sèches Marseille',
        'pose cloisons placo Marseille',
        'installation cloisons PACA',
        'plaquiste Marseille',
        'séparation pièces Marseille',
        'aménagement intérieur Marseille',
        'devis gratuit cloisons',
        'entrepreneur plaquiste Marseille'
      ]}
      serviceName="Cloisons Sèches"
      heroImage="/prestation-1.png"
      heroTitle="Cloisons Sèches à Marseille"
      heroSubtitle="Installation professionnelle de cloisons sèches en plaques de plâtre pour créer, séparer et aménager vos espaces intérieurs à Marseille et région PACA."
      sector="Plaquiste"
      location="Marseille et région PACA"
      mainDescription="Marques Vaz Placo, votre spécialiste en pose de cloisons sèches à Marseille, vous accompagne dans tous vos projets d'aménagement intérieur. Que ce soit pour créer de nouveaux espaces, séparer des pièces ou optimiser votre habitat, nous mettons notre expertise d'entrepreneur du bâtiment à votre service. Nos cloisons en plaques de plâtre offrent une solution rapide, propre et économique pour transformer votre intérieur selon vos besoins."
      subServices={subServices}
      advantages={advantages}
      serviceArea={serviceArea}
      contactInfo={contactInfo}
    />
  );
}
