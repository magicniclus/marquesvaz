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
    { name: 'Cloisons Sèches', href: '/services/cloisons-seches' },
    { name: 'Doublage et Isolation', href: '/services/doublage-isolation' },
    { name: 'Faux Plafonds', href: '/services/faux-plafonds' },
    { name: 'Finitions et Bandes', href: '/services/finitions-bandes' },
    { name: 'Rénovation Placo', href: '/services/renovation-placo' },
  ];

  const sectorsLinks = [
    { name: 'Marseille (13)', href: '/secteur/plaquiste-marseille-13' },
    { name: 'Aix-en-Provence', href: '/secteur/plaquiste-aix-en-provence' },
    { name: 'Aubagne', href: '/secteur/plaquiste-aubagne' },
    { name: 'Martigues', href: '/secteur/plaquiste-martigues' },
    { name: 'Salon-de-Provence', href: '/secteur/plaquiste-salon-de-provence' },
    { name: 'Istres', href: '/secteur/plaquiste-istres' },
    { name: 'Vitrolles', href: '/secteur/plaquiste-vitrolles' },
    { name: 'Cassis', href: '/secteur/plaquiste-cassis' },
    { name: 'La Ciotat', href: '/secteur/plaquiste-la-ciotat' },
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
                  className="w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image 
                    src="/logo.png" 
                    alt="Logo MARQUES VAZ PLACO" 
                    width={56} 
                    height={56} 
                    className="object-contain"
                  />
                </motion.div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Entrepreneur du bâtiment spécialisé dans les travaux de plaquiste : cloisons sèches, doublage, faux plafonds, finitions et rénovation à Marseille et région PACA.
              </p>
              <a 
                href="tel:0659764995" 
                className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
              >
                06 59 76 49 95
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
                  href="tel:0659764995"
                  className="text-slate-300 hover:text-white text-sm transition-colors duration-200 block flex items-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>06 59 76 49 95</span>
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
              © {currentYear} MARQUES VAZ PLACO. Tous droits réservés.
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
