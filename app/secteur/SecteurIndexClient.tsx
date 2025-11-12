'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ChevronRight, Star, Building2, Phone } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

const sectors = [
  { name: 'Paris (75)', slug: 'fibre-paris-75' },
  { name: 'Paris 15ème', slug: 'fibre-paris-15' },
  { name: 'Paris 14ème', slug: 'fibre-paris-14' },
  { name: 'Seine-Maritime (76)', slug: 'fibre-seine-maritime-76' },
  { name: 'Seine-et-Marne (77)', slug: 'fibre-seine-et-marne-77' },
  { name: 'Yvelines (78)', slug: 'fibre-yvelines-78' },
  { name: 'Essonne (91)', slug: 'fibre-essonne-91' },
  { name: 'Hauts-de-Seine (92)', slug: 'fibre-hauts-de-seine-92' },
  { name: 'Seine-Saint-Denis (93)', slug: 'fibre-seine-saint-denis-93' },
  { name: 'Val-de-Marne (94)', slug: 'fibre-val-de-marne-94' },
  { name: 'Val-d\'Oise (95)', slug: 'fibre-val-d-oise-95' },
  { name: 'Eure-et-Loir (28)', slug: 'fibre-eure-et-loir-28' },
  { name: 'Eure (27)', slug: 'fibre-eure-27' },
  { name: 'Oise (60)', slug: 'fibre-oise-60' },
  { name: 'Pas-de-Calais (62)', slug: 'fibre-pas-de-calais-62' },
  { name: 'Nord (59)', slug: 'fibre-nord-59' },
  { name: 'Loiret (45)', slug: 'fibre-loiret-45' },
  { name: 'Cergy', slug: 'fibre-cergy' },
  { name: 'Évry-Courcouronnes', slug: 'fibre-evry-courcouronnes' },
  { name: 'Meaux', slug: 'fibre-meaux' },
  { name: 'Poissy', slug: 'fibre-poissy' },
  { name: 'Chelles', slug: 'fibre-chelles' }
];

export default function SecteurIndexClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 py-16 md:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            {/* Breadcrumb */}
            <div className="flex justify-center mb-6">
              <Breadcrumb 
                items={[
                  { label: 'Accueil', href: '/' },
                  { label: 'Secteurs', current: true }
                ]}
                className="opacity-90"
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nos secteurs d'intervention fibre
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Découvrez nos prestations de travaux fibre optique en Île-de-France : 
              débouchage fourreaux, détection blocages, raccordements complexes et urgences.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <MapPin className="h-5 w-5 text-orange-300" />
                <span className="text-sm font-medium">Île-de-France</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="h-5 w-5 text-yellow-300" />
                <span className="text-sm font-medium">22 secteurs couverts</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Building2 className="h-5 w-5 text-green-300" />
                <span className="text-sm font-medium">Spécialiste fibre optique</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secteurs Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choisissez votre secteur
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cliquez sur votre secteur pour découvrir nos prestations fibre optique spécialisées dans votre zone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Link
                  href={`/secteur/${sector.slug}`}
                  className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {sector.name}
                    </h3>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Travaux fibre, débouchage fourreaux, urgences
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Votre secteur n'est pas listé ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Nous intervenons sur toute l'Île-de-France pour vos travaux fibre optique. 
            Contactez-nous pour connaître nos possibilités d'intervention dans votre secteur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200"
            >
              Nous contacter
            </Link>
            <Link
              href="tel:0783490136"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
            >
              <Phone className="h-4 w-4 mr-2" />
              07 83 49 01 36
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
