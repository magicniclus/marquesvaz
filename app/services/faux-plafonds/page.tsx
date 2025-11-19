import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo-config';

export const metadata: Metadata = generateSEOMetadata(
  'Faux Plafonds Marseille - Installation Plafonds Suspendus',
  'Spécialiste de l\'installation de faux plafonds à Marseille. Plafonds suspendus en plaques de plâtre avec intégration d\'éclairage et isolation. Devis gratuit.',
  '/og-faux-plafonds.jpg',
  '/services/faux-plafonds'
);

export default function FauxPlafondsPage() {
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
      title: 'Plafonds suspendus',
      description: 'Installation de plafonds suspendus en plaques de plâtre pour masquer les défauts et intégrer l\'éclairage.'
    },
    {
      title: 'Plafonds décoratifs',
      description: 'Création de plafonds aux formes originales et design pour sublimer vos espaces intérieurs.'
    },
    {
      title: 'Plafonds acoustiques',
      description: 'Mise en place de faux plafonds avec isolation phonique pour améliorer le confort acoustique.'
    },
    {
      title: 'Intégration éclairage',
      description: 'Intégration de spots LED, éclairage indirect et systèmes d\'éclairage modernes dans vos faux plafonds.'
    },
    {
      title: 'Plafonds techniques',
      description: 'Installation de plafonds techniques avec passages de gaines électriques, ventilation et climatisation.'
    },
    {
      title: 'Rénovation plafonds',
      description: 'Rénovation et modernisation de plafonds existants avec création de nouveaux volumes.'
    }
  ];

  const advantages = [
    'Devis gratuit et personnalisé',
    'Intégration parfaite de l\'éclairage',
    'Amélioration esthétique garantie',
    'Isolation thermique et phonique',
    'Pose professionnelle soignée',
    'Finitions parfaites',
    'Conseil personnalisé sur mesure',
    'Garantie travaux incluse',
    'Tarification transparente',
    'Estimation gratuite et sans engagement'
  ];

  return (
    <ServicePage
      title="Faux Plafonds Marseille - Installation Plafonds Suspendus"
      description="Spécialiste de l'installation de faux plafonds à Marseille. Plafonds suspendus en plaques de plâtre avec intégration d'éclairage et isolation. Devis gratuit."
      keywords={[
        'faux plafonds Marseille',
        'plafonds suspendus Marseille',
        'installation plafonds PACA',
        'plaquiste plafonds Marseille',
        'éclairage intégré Marseille',
        'plafonds décoratifs Marseille',
        'devis gratuit plafonds',
        'entrepreneur plafonds Marseille'
      ]}
      serviceName="Faux Plafonds"
      heroImage="/prestation-3.png"
      heroTitle="Faux Plafonds à Marseille"
      heroSubtitle="Installation professionnelle de faux plafonds suspendus en plaques de plâtre avec intégration d'éclairage et isolation pour sublimer vos espaces."
      sector="Plaquiste"
      location="Marseille et région PACA"
      mainDescription="Marques Vaz Placo, spécialiste des faux plafonds à Marseille, transforme vos intérieurs avec des solutions esthétiques et techniques. Nos faux plafonds suspendus permettent de masquer les défauts, intégrer un éclairage moderne et améliorer l'isolation de vos pièces. En tant qu'entrepreneur du bâtiment expérimenté, nous créons des plafonds sur mesure qui allient fonctionnalité et design pour valoriser votre habitat ou vos locaux professionnels."
      subServices={subServices}
      advantages={advantages}
      serviceArea={serviceArea}
      contactInfo={contactInfo}
    />
  );
}
