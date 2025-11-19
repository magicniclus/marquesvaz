import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo-config';

export const metadata: Metadata = generateSEOMetadata(
  'Finitions et Bandes Marseille - Finitions Parfaites Placo',
  'Spécialiste des finitions et bandes placo à Marseille. Pose de bandes, enduits et préparation surfaces pour un résultat impeccable. Devis gratuit.',
  '/og-finitions-bandes.jpg',
  '/services/finitions-bandes'
);

export default function FinitionsBandesPage() {
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
      title: 'Pose de bandes',
      description: 'Application professionnelle de bandes de joints pour masquer les raccords entre plaques de plâtre.'
    },
    {
      title: 'Enduits de finition',
      description: 'Application d\'enduits de lissage et de finition pour obtenir des surfaces parfaitement lisses.'
    },
    {
      title: 'Ponçage et lissage',
      description: 'Ponçage minutieux et lissage des surfaces pour une préparation optimale avant peinture.'
    },
    {
      title: 'Préparation peinture',
      description: 'Préparation complète des surfaces pour recevoir la peinture avec un résultat professionnel.'
    },
    {
      title: 'Finitions décoratives',
      description: 'Réalisation de finitions décoratives et texturées pour personnaliser vos surfaces.'
    },
    {
      title: 'Réparation fissures',
      description: 'Traitement et réparation des fissures et défauts sur cloisons et plafonds existants.'
    }
  ];

  const advantages = [
    'Devis gratuit et personnalisé',
    'Finitions parfaites garanties',
    'Préparation optimale pour peinture',
    'Matériaux de qualité professionnelle',
    'Travail soigné et minutieux',
    'Respect des délais convenus',
    'Conseil personnalisé sur mesure',
    'Garantie travaux incluse',
    'Tarification transparente',
    'Estimation gratuite et sans engagement'
  ];

  return (
    <ServicePage
      title="Finitions et Bandes Marseille - Finitions Parfaites Placo"
      description="Spécialiste des finitions et bandes placo à Marseille. Pose de bandes, enduits et préparation surfaces pour un résultat impeccable. Devis gratuit."
      keywords={[
        'finitions placo Marseille',
        'bandes placo Marseille',
        'enduits finition PACA',
        'plaquiste finitions Marseille',
        'préparation peinture Marseille',
        'lissage surfaces Marseille',
        'devis gratuit finitions',
        'entrepreneur finitions Marseille'
      ]}
      serviceName="Finitions et Bandes"
      heroImage="/prestation-4.png"
      heroTitle="Finitions et Bandes à Marseille"
      heroSubtitle="Réalisation de finitions parfaites avec pose de bandes, enduits et préparation pour peinture. Un travail soigné pour un résultat impeccable."
      sector="Plaquiste"
      location="Marseille et région PACA"
      mainDescription="Marques Vaz Placo excelle dans les finitions et la pose de bandes à Marseille. Cette étape cruciale détermine la qualité finale de vos travaux de plaquiste. Notre savoir-faire d'entrepreneur du bâtiment nous permet de réaliser des finitions parfaites : pose de bandes de joints, application d'enduits de lissage, ponçage minutieux et préparation optimale pour la peinture. Chaque détail compte pour obtenir des surfaces impeccables qui sublimeront votre intérieur."
      subServices={subServices}
      advantages={advantages}
      serviceArea={serviceArea}
      contactInfo={contactInfo}
    />
  );
}
