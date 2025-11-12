'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const legalLinks = [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'CGV', href: '/cgv' },
    { name: 'Contact', href: '/contact' },
    { name: 'Espace pro', href: 'https://app.trouver-mon-chantier.fr' },
  ];

  const servicesLinks = [
    { name: 'Travaux Fibre', href: '/services/travaux-fibre' },
    { name: 'Fourreau Bouché', href: '/services/fourreau-bouche' },
    { name: 'Détection de Point de Blocage', href: '/services/detection-blocage' },
    { name: 'Raccordement Fibre Complexe', href: '/services/raccordement-complexe' },
    { name: 'Urgence Fibre', href: '/services/urgence-fibre' },
  ];

  const sectorsLinks = [
    { name: 'Paris (75)', href: '/secteur/fibre-paris-75' },
    { name: 'Seine-Maritime (76)', href: '/secteur/fibre-seine-maritime-76' },
    { name: 'Seine-et-Marne (77)', href: '/secteur/fibre-seine-et-marne-77' },
    { name: 'Yvelines (78)', href: '/secteur/fibre-yvelines-78' },
    { name: 'Essonne (91)', href: '/secteur/fibre-essonne-91' },
    { name: 'Hauts-de-Seine (92)', href: '/secteur/fibre-hauts-de-seine-92' },
    { name: 'Seine-Saint-Denis (93)', href: '/secteur/fibre-seine-saint-denis-93' },
    { name: 'Val-de-Marne (94)', href: '/secteur/fibre-val-de-marne-94' },
    { name: 'Val-d\'Oise (95)', href: '/secteur/fibre-val-d-oise-95' },
    { name: 'Voir tous nos secteurs', href: '/secteur' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and description */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center">
                <motion.div 
                  className="w-16 h-16 rounded-lg bg-white flex items-center justify-center shadow-lg overflow-hidden"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image 
                    src="/logo.png" 
                    alt="Logo RAFCOM" 
                    width={56} 
                    height={56} 
                    className="object-contain"
                  />
                </motion.div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Spécialiste des travaux fibre optique : débouchage fourreaux, détection points de blocage, raccordements complexes et urgences fibre en Île-de-France.
              </p>
              <a 
                href="tel:0783490136" 
                className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
              >
                07 83 49 01 36
              </a>
            </motion.div>

            {/* Legal links */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold">Liens utiles</h3>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-slate-300 hover:text-white text-sm transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services links */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold">Nos Prestations</h3>
              <ul className="space-y-2">
                {servicesLinks.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-slate-300 hover:text-white text-sm transition-colors duration-200 hover:underline"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Secteurs links */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold">Nos Secteurs</h3>
              <ul className="space-y-2">
                {sectorsLinks.map((sector) => (
                  <li key={sector.name}>
                    <a
                      href={sector.href}
                      className="text-slate-300 hover:text-white text-sm transition-colors duration-200 hover:underline"
                    >
                      {sector.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact info */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="space-y-2">
                <a 
                  href="tel:0783490136"
                  className="text-slate-300 hover:text-white text-sm transition-colors duration-200 block flex items-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>07 83 49 01 36</span>
                </a>
                <p className="text-slate-400 text-xs">
                  Service gratuit 7j/7 de 9h à 19h
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.p 
              className="text-slate-400 text-sm text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              © {currentYear} RAFCOM. Tous droits réservés.
            </motion.p>

            {/* Powered by */}
            <motion.p 
              className="text-slate-500 text-xs text-center md:text-right"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Site propulsé par{' '}
              <a 
                href="https://trouver-mon-chantier.fr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-500/80 transition-colors underline"
              >
                trouver-mon-chantier.fr
              </a>
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}
