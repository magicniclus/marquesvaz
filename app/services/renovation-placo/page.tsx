import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo-config';

export const metadata: Metadata = generateSEOMetadata(
  'Rénovation Placo Marseille - Réparation et Modernisation',
  'Spécialiste de la rénovation placo à Marseille. Réparation et rénovation de cloisons existantes, remise en état et modernisation. Devis gratuit.',
  '/og-renovation-placo.jpg',
  '/services/renovation-placo'
);

export default function RenovationPlacoPage() {
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
      title: 'Réparation cloisons',
      description: 'Réparation de cloisons endommagées, fissurées ou détériorées pour leur redonner leur aspect d\'origine.'
    },
    {
      title: 'Remise en état',
      description: 'Remise en état complète de cloisons et plafonds anciens avec techniques modernes.'
    },
    {
      title: 'Modernisation espaces',
      description: 'Modernisation et réaménagement d\'espaces existants avec nouvelles cloisons et agencements.'
    },
    {
      title: 'Traitement humidité',
      description: 'Traitement des problèmes d\'humidité et remplacement des éléments détériorés.'
    },
    {
      title: 'Amélioration isolation',
      description: 'Amélioration de l\'isolation thermique et phonique lors de la rénovation des cloisons.'
    },
    {
      title: 'Mise aux normes',
      description: 'Mise aux normes actuelles des installations et amélioration des performances énergétiques.'
    }
  ];

  const advantages = [
    'Devis gratuit et personnalisé',
    'Diagnostic complet inclus',
    'Solutions adaptées à chaque situation',
    'Remise en état professionnelle',
    'Amélioration des performances',
    'Respect du style existant',
    'Conseil personnalisé sur mesure',
    'Garantie travaux incluse',
    'Tarification transparente',
    'Estimation gratuite et sans engagement'
  ];

  return (
    <ServicePage
      title="Rénovation Placo Marseille - Réparation et Modernisation"
      description="Spécialiste de la rénovation placo à Marseille. Réparation et rénovation de cloisons existantes, remise en état et modernisation. Devis gratuit."
      keywords={[
        'rénovation placo Marseille',
        'réparation cloisons Marseille',
        'modernisation placo PACA',
        'plaquiste rénovation Marseille',
        'remise en état placo Marseille',
        'réparation plafonds Marseille',
        'devis gratuit rénovation',
        'entrepreneur rénovation Marseille'
      ]}
      serviceName="Rénovation Placo"
      heroImage="/prestation-5.png"
      heroTitle="Rénovation Placo à Marseille"
      heroSubtitle="Réparation et rénovation de cloisons existantes. Remise en état, réparation de fissures et modernisation de vos espaces intérieurs."
      sector="Plaquiste"
      location="Marseille et région PACA"
      mainDescription="Marques Vaz Placo vous accompagne dans la rénovation de vos cloisons et plafonds à Marseille. Notre expertise d'entrepreneur du bâtiment nous permet de diagnostiquer et traiter tous types de problèmes : fissures, détériorations, problèmes d'humidité ou simple modernisation. Nous redonnons vie à vos espaces en alliant techniques traditionnelles et innovations modernes pour un résultat durable et esthétique qui respecte le caractère de votre habitat."
      subServices={subServices}
      advantages={advantages}
      serviceArea={serviceArea}
      contactInfo={contactInfo}
    />
  );
}
