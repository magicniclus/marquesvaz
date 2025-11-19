'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ChevronRight, Star, Building2, Phone } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

const sectors = [
  { name: 'Marseille (13)', slug: 'plaquiste-marseille-13' },
  { name: 'Marseille 1er', slug: 'plaquiste-marseille-01' },
  { name: 'Marseille 2ème', slug: 'plaquiste-marseille-02' },
  { name: 'Marseille 3ème', slug: 'plaquiste-marseille-03' },
  { name: 'Marseille 4ème', slug: 'plaquiste-marseille-04' },
  { name: 'Marseille 6ème', slug: 'plaquiste-marseille-06' },
  { name: 'Marseille 7ème', slug: 'plaquiste-marseille-07' },
  { name: 'Marseille 8ème', slug: 'plaquiste-marseille-08' },
  { name: 'Marseille 9ème', slug: 'plaquiste-marseille-09' },
  { name: 'Marseille 11ème', slug: 'plaquiste-marseille-11' },
  { name: 'Marseille 12ème', slug: 'plaquiste-marseille-12' },
  { name: 'Marseille 14ème', slug: 'plaquiste-marseille-14' },
  { name: 'Aix-en-Provence', slug: 'plaquiste-aix-en-provence' },
  { name: 'Aubagne', slug: 'plaquiste-aubagne' },
  { name: 'Martigues', slug: 'plaquiste-martigues' },
  { name: 'Salon-de-Provence', slug: 'plaquiste-salon-de-provence' },
  { name: 'Istres', slug: 'plaquiste-istres' },
  { name: 'Vitrolles', slug: 'plaquiste-vitrolles' },
  { name: 'Cassis', slug: 'plaquiste-cassis' },
  { name: 'La Ciotat', slug: 'plaquiste-la-ciotat' },
  { name: 'Gardanne', slug: 'plaquiste-gardanne' },
  { name: 'Carnoux-en-Provence', slug: 'plaquiste-carnoux-en-provence' },
  { name: 'La Penne-sur-Huveaune', slug: 'plaquiste-la-penne-sur-huveaune' },
  { name: 'Roquevaire', slug: 'plaquiste-roquevaire' },
  { name: 'Gémenos', slug: 'plaquiste-gemenos' },
  { name: 'Roquefort-la-Bédoule', slug: 'plaquiste-roquefort-la-bedoule' },
  { name: 'Allauch', slug: 'plaquiste-allauch' },
  { name: 'La Destrousse', slug: 'plaquiste-la-destrousse' }
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
              Nos secteurs d'intervention plaquiste
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Découvrez nos prestations de plaquiste en Provence-Alpes-Côte d'Azur : 
              cloisons sèches, doublage, faux plafonds, finitions et rénovation placo.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <MapPin className="h-5 w-5 text-orange-300" />
                <span className="text-sm font-medium">Provence-Alpes-Côte d'Azur</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="h-5 w-5 text-yellow-300" />
                <span className="text-sm font-medium">28 secteurs couverts</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Building2 className="h-5 w-5 text-green-300" />
                <span className="text-sm font-medium">Spécialiste plaquiste</span>
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
              Cliquez sur votre secteur pour découvrir nos prestations de plaquiste spécialisées dans votre zone.
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
                    Cloisons sèches, doublage, faux plafonds, finitions
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
            Nous intervenons sur toute la région PACA pour vos travaux de plaquiste. 
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
              href="tel:0659764995"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
            >
              <Phone className="h-4 w-4 mr-2" />
              06 59 76 49 95
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
