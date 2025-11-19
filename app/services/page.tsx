import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo-config';
import ServicesClient from './services-client';

export const metadata: Metadata = generateSEOMetadata(
  'Services Plaquiste Marseille - Tous nos Services',
  'Découvrez tous nos services de plaquiste à Marseille : cloisons sèches, doublage, faux plafonds, finitions et rénovation placo. Devis gratuit.',
  '/og-services.jpg',
  '/services'
);

export default function ServicesPage() {
  return <ServicesClient />;
}
