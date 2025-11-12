import { Metadata } from 'next';
import SecteurIndexClient from './SecteurIndexClient';

export const metadata: Metadata = {
  title: 'Nos secteurs d\'intervention - RAFCOM | Travaux fibre optique Île-de-France',
  description: 'Découvrez tous nos secteurs d\'intervention en Île-de-France. Travaux fibre optique, débouchage fourreaux, détection blocages dans 22 secteurs autour de Paris.',
  keywords: 'fibre optique Paris, secteurs intervention RAFCOM, travaux fibre Île-de-France, débouchage fourreaux Paris, urgence fibre optique',
  openGraph: {
    title: 'Nos secteurs d\'intervention - RAFCOM',
    description: 'Découvrez tous nos secteurs d\'intervention en Île-de-France. Travaux fibre optique, débouchage fourreaux, détection blocages dans 22 secteurs autour de Paris.',
    type: 'website',
  },
};

export default function SecteurPage() {
  return <SecteurIndexClient />;
}
