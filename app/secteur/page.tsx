import { Metadata } from 'next';
import SecteurIndexClient from './SecteurIndexClient';

export const metadata: Metadata = {
  title: 'Nos secteurs d\'intervention - MARQUES VAZ PLACO | Plaquiste Provence-Alpes-Côte d\'Azur',
  description: 'Découvrez tous nos secteurs d\'intervention en PACA. Travaux de plaquiste, cloisons sèches, doublage, faux plafonds dans 28 secteurs autour de Marseille.',
  keywords: 'plaquiste Marseille, secteurs intervention MARQUES VAZ PLACO, travaux placo PACA, cloisons sèches Marseille, plaquiste Bouches-du-Rhône',
  openGraph: {
    title: 'Nos secteurs d\'intervention - MARQUES VAZ PLACO',
    description: 'Découvrez tous nos secteurs d\'intervention en PACA. Travaux de plaquiste, cloisons sèches, doublage, faux plafonds dans 28 secteurs autour de Marseille.',
    type: 'website',
  },
};

export default function SecteurPage() {
  return <SecteurIndexClient />;
}
