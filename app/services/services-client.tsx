'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const servicesData = [
  {
    title: "Cloisons Sèches",
    subtitle: "Pose et installation de cloisons",
    content: "Pose professionnelle de cloisons sèches en plaques de plâtre. Création d'espaces, séparation de pièces et aménagement intérieur pour particuliers et professionnels à Marseille.",
    image: "/prestation-1.png",
    href: "/services/cloisons-seches"
  },
  {
    title: "Doublage et Isolation",
    subtitle: "Doublage des murs et isolation",
    content: "Doublage professionnel des murs avec isolation thermique et phonique. Amélioration du confort et de l'efficacité énergétique de votre habitat.",
    image: "/prestation-2.png",
    href: "/services/doublage-isolation"
  },
  {
    title: "Faux Plafonds",
    subtitle: "Installation de faux plafonds",
    content: "Installation de faux plafonds suspendus en plaques de plâtre. Amélioration esthétique et technique avec intégration d'éclairage et isolation.",
    image: "/prestation-3.png",
    href: "/services/faux-plafonds"
  },
  {
    title: "Finitions et Bandes",
    subtitle: "Finitions parfaites et bandes",
    content: "Réalisation de finitions parfaites avec pose de bandes, enduits et préparation pour peinture. Travail soigné pour un résultat impeccable.",
    image: "/prestation-4.png",
    href: "/services/finitions-bandes"
  },
  {
    title: "Rénovation Placo",
    subtitle: "Réparation et rénovation",
    content: "Réparation et rénovation de cloisons existantes. Remise en état, réparation de fissures et modernisation de vos espaces intérieurs.",
    image: "/prestation-5.png",
    href: "/services/renovation-placo"
  }
];

export default function ServicesClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Nos Services de Plaquiste
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Marques Vaz Placo vous propose une gamme complète de services de plaquiste à Marseille et région PACA. 
              Devis gratuit et personnalisé pour tous vos projets.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <Link key={index} href={service.href} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full group-hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <h4 className="text-lg font-medium text-orange-500 mb-3">
                      {service.subtitle}
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.content}
                    </p>
                    <div className="flex items-center text-orange-500 font-medium group-hover:text-orange-600 transition-colors">
                      <span>En savoir plus</span>
                      <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Besoin d'un devis gratuit ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contactez Marques Vaz Placo pour obtenir un devis personnalisé et sans engagement pour vos travaux de plaquiste à Marseille.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0659764995"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
            >
              Appeler maintenant
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold rounded-lg transition-colors"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
