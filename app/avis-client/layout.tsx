import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Évaluation de service - MARQUES VAZ PLACO',
  description: 'Évaluez votre expérience avec MARQUES VAZ PLACO',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AvisClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
