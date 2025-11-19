import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo-config';

export const metadata: Metadata = generateSEOMetadata(
  'Doublage et Isolation Marseille - Isolation Thermique et Phonique',
  'Spécialiste du doublage des murs et isolation à Marseille. Isolation thermique et phonique professionnelle pour améliorer le confort de votre habitat. Devis gratuit.',
  '/og-doublage-isolation.jpg',
  '/services/doublage-isolation'
);

export default function DoublageIsolationPage() {
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
      title: 'Doublage thermique',
      description: 'Doublage des murs avec isolation thermique pour réduire les déperditions énergétiques et améliorer le confort.'
    },
    {
      title: 'Isolation phonique',
      description: 'Mise en place d\'isolation acoustique pour réduire les nuisances sonores et améliorer le confort acoustique.'
    },
    {
      title: 'Doublage sur ossature',
      description: 'Installation de doublage sur ossature métallique pour une isolation performante et durable.'
    },
    {
      title: 'Doublage collé',
      description: 'Pose de panneaux isolants collés directement sur les murs existants pour une solution rapide et efficace.'
    },
    {
      title: 'Isolation des combles',
      description: 'Isolation des combles perdus ou aménageables pour optimiser les performances énergétiques du logement.'
    },
    {
      title: 'Correction thermique',
      description: 'Correction des ponts thermiques et amélioration globale de l\'isolation de votre habitat.'
    }
  ];

  const advantages = [
    'Devis gratuit et personnalisé',
    'Matériaux isolants haute performance',
    'Amélioration du confort thermique',
    'Réduction des factures énergétiques',
    'Pose professionnelle certifiée',
    'Respect des normes RT2012',
    'Conseil personnalisé sur mesure',
    'Garantie travaux incluse',
    'Tarification transparente',
    'Estimation gratuite et sans engagement'
  ];

  return (
    <ServicePage
      title="Doublage et Isolation Marseille - Isolation Thermique et Phonique"
      description="Spécialiste du doublage des murs et isolation à Marseille. Isolation thermique et phonique professionnelle pour améliorer le confort de votre habitat. Devis gratuit."
      keywords={[
        'doublage murs Marseille',
        'isolation thermique Marseille',
        'isolation phonique PACA',
        'plaquiste isolation Marseille',
        'doublage placo Marseille',
        'isolation intérieure Marseille',
        'devis gratuit isolation',
        'entrepreneur isolation Marseille'
      ]}
      serviceName="Doublage et Isolation"
      heroImage="/prestation-2.png"
      heroTitle="Doublage et Isolation à Marseille"
      heroSubtitle="Doublage professionnel des murs avec isolation thermique et phonique pour améliorer le confort et l'efficacité énergétique de votre habitat à Marseille."
      sector="Plaquiste"
      location="Marseille et région PACA"
      mainDescription="Marques Vaz Placo vous propose ses services de doublage et isolation à Marseille pour améliorer significativement le confort de votre habitat. Notre expertise d'entrepreneur du bâtiment nous permet de vous offrir des solutions d'isolation thermique et phonique adaptées à vos besoins. Que ce soit pour réduire vos factures énergétiques, améliorer votre confort acoustique ou corriger des défauts d'isolation, nous mettons en œuvre les meilleures techniques de doublage avec des matériaux de qualité."
      subServices={subServices}
      advantages={advantages}
      serviceArea={serviceArea}
      contactInfo={contactInfo}
    />
  );
}
