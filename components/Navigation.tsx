'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, User, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showSectorsDropdown, setShowSectorsDropdown] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const phoneNumber = "06 59 76 49 95";

  // Détecter si on est sur la page d'accueil
  const isHomePage = pathname === '/';

  // Liste des services pour le dropdown
  const servicesLinks = [
    { name: 'Cloisons Sèches', href: '/services/cloisons-seches' },
    { name: 'Doublage et Isolation', href: '/services/doublage-isolation' },
    { name: 'Faux Plafonds', href: '/services/faux-plafonds' },
    { name: 'Finitions et Bandes', href: '/services/finitions-bandes' },
    { name: 'Rénovation Placo', href: '/services/renovation-placo' },
  ];

  // Liste des secteurs pour le dropdown
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
    { name: 'Gardanne', href: '/secteur/plaquiste-gardanne' },
    { name: 'Voir tous nos secteurs', href: '/secteur' },
  ];

  // Navigation adaptative selon la page
  const navigationLinks = isHomePage ? [
    { name: 'Notre expertise', href: '#expertise' },
    { name: 'Services', href: '#services', hasDropdown: true, dropdownType: 'services' },
    { name: 'Secteurs', href: '/secteur', hasDropdown: true, dropdownType: 'sectors' },
    { name: 'Nos réalisations', href: '#realisations' },
  ] : [
    { name: 'Notre expertise', href: '/#expertise' },
    { name: 'Services', href: '/#services', hasDropdown: true, dropdownType: 'services' },
    { name: 'Secteurs', href: '/secteur', hasDropdown: true, dropdownType: 'sectors' },
    { name: 'Nos réalisations', href: '/#realisations' },
  ];

  // Handle mounting to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    const preventScroll = (e: TouchEvent | WheelEvent) => {
      // Permettre le scroll si l'événement vient du menu mobile
      const target = e.target as Element;
      const mobileMenu = document.querySelector('[data-mobile-menu]');
      
      if (mobileMenu && mobileMenu.contains(target)) {
        return; // Permettre le scroll dans le menu mobile
      }
      
      e.preventDefault();
    };

    if (isOpen) {
      // Sauvegarder la position de scroll actuelle
      const scrollY = window.scrollY;
      
      // Empêcher le scroll du body en arrière-plan
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      
      // Stocker la position pour la restaurer plus tard
      document.body.setAttribute('data-scroll-y', scrollY.toString());
      
      // Ajouter des event listeners pour empêcher le scroll
      document.addEventListener('touchmove', preventScroll, { passive: false });
      document.addEventListener('wheel', preventScroll, { passive: false });
    } else {
      // Restaurer le scroll normal
      const scrollY = document.body.getAttribute('data-scroll-y');
      
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.removeAttribute('data-scroll-y');
      
      // Supprimer les event listeners
      document.removeEventListener('touchmove', preventScroll);
      document.removeEventListener('wheel', preventScroll);
      
      // Restaurer la position de scroll
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY));
      }
    }
    
    return () => {
      // Cleanup au cas où le composant se démonte
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.removeAttribute('data-scroll-y');
      document.removeEventListener('touchmove', preventScroll);
      document.removeEventListener('wheel', preventScroll);
    };
  }, [isOpen]);

  // Handle scroll to show/hide floating call button
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Show floating button only when scrolled down significantly (past nav + some buffer)
      setShowFloatingButton(scrollY > 100);
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="bg-background/95 supports-[backdrop-filter]:bg-background/60 border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
          {/* Logo à gauche */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <Link href="/" className="flex items-center">
              <motion.div 
                className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center overflow-hidden my-2"
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
            </Link>
          </motion.div>

          {/* Navigation au centre - Desktop */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={link.name}>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="relative"
                    >
                      {link.hasDropdown ? (
                        <div
                          className="relative"
                          onMouseEnter={() => {
                            if (link.dropdownType === 'services') {
                              setShowServicesDropdown(true);
                              setShowSectorsDropdown(false);
                            } else if (link.dropdownType === 'sectors') {
                              setShowSectorsDropdown(true);
                              setShowServicesDropdown(false);
                            }
                          }}
                          onMouseLeave={() => {
                            setShowServicesDropdown(false);
                            setShowSectorsDropdown(false);
                          }}
                        >
                          <NavigationMenuLink
                            href={link.href}
                            className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                          >
                            <motion.span
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 400 }}
                              className="flex items-center space-x-1"
                            >
                              <span>{link.name}</span>
                              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${
                                isMounted && (
                                  (link.dropdownType === 'services' && showServicesDropdown) || 
                                  (link.dropdownType === 'sectors' && showSectorsDropdown)
                                ) ? 'rotate-180' : ''
                              }`} />
                            </motion.span>
                          </NavigationMenuLink>
                          
                          {/* Services Dropdown Menu */}
                          <AnimatePresence>
                            {isMounted && link.dropdownType === 'services' && showServicesDropdown && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                              >
                                {servicesLinks.map((service, serviceIndex) => (
                                  <Link
                                    key={service.name}
                                    href={service.href}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors duration-200"
                                  >
                                    <motion.div
                                      initial={{ opacity: 0, y: 5 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.2, delay: serviceIndex * 0.05 }}
                                    >
                                      {service.name}
                                    </motion.div>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Sectors Dropdown Menu */}
                          <AnimatePresence>
                            {isMounted && link.dropdownType === 'sectors' && showSectorsDropdown && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                              >
                                {sectorsLinks.map((sector, sectorIndex) => (
                                  <Link
                                    key={sector.name}
                                    href={sector.href}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors duration-200"
                                  >
                                    <motion.div
                                      initial={{ opacity: 0, y: 5 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.2, delay: sectorIndex * 0.05 }}
                                    >
                                      {sector.name}
                                    </motion.div>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <NavigationMenuLink
                          href={link.href}
                          className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        >
                          <motion.span
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {link.name}
                          </motion.span>
                        </NavigationMenuLink>
                      )}
                    </motion.div>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Boutons à droite - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Bouton téléphone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Button 
                variant="outline"
                size="lg"
                className="flex items-center space-x-2 hover:bg-gray-50 transition-all duration-300"
                asChild
              >
                <motion.a
                  href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Phone className="h-4 w-4" />
                  <span>{phoneNumber}</span>
                </motion.a>
              </Button>
            </motion.div>

            {/* Bouton CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Button 
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Prendre rendez-vous
                </motion.a>
              </Button>
            </motion.div>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Ouvrir le menu</span>
            </Button>
          </div>
        </div>
      </div>
      </nav>

    {/* Mobile Menu Overlay - Full Screen */}
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-background md:hidden overflow-y-auto"
          data-mobile-menu
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
        >
          <div className="flex flex-col min-h-full">
            {/* Header with close button */}
            <div className="flex justify-between items-center p-6 border-b">
              <div className="flex items-center">
                <motion.div 
                  className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center shadow-lg overflow-hidden"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image 
                    src="/logo.png" 
                    alt="Logo MARQUES VAZ PLACO" 
                    width={48} 
                    height={48} 
                    className="object-contain"
                  />
                </motion.div>
              </div>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Navigation Links */}
            <div className="px-6 pt-8 flex-1 overflow-y-auto">
              <div className="space-y-6">
                {navigationLinks.map((link, index) => (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <div>
                        <motion.a
                          href={link.href}
                          className="block text-2xl font-medium text-foreground hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: 0.1 + index * 0.1,
                            type: "spring",
                            damping: 25,
                            stiffness: 300
                          }}
                          whileHover={{ y: -2 }}
                        >
                          {link.name}
                        </motion.a>
                        {/* Submenu mobile */}
                        <div className="ml-4 mt-3 space-y-3">
                          {link.dropdownType === 'services' && servicesLinks.map((service, serviceIndex) => (
                            <motion.div
                              key={service.name}
                              initial={{ opacity: 0, x: 30 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ 
                                delay: 0.2 + index * 0.1 + serviceIndex * 0.05,
                                type: "spring",
                                damping: 25,
                                stiffness: 300
                              }}
                            >
                              <Link
                                href={service.href}
                                className="block text-lg text-gray-600 hover:text-orange-500 transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {service.name}
                              </Link>
                            </motion.div>
                          ))}
                          {link.dropdownType === 'sectors' && sectorsLinks.map((sector, sectorIndex) => (
                            <motion.div
                              key={sector.name}
                              initial={{ opacity: 0, x: 30 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ 
                                delay: 0.2 + index * 0.1 + sectorIndex * 0.05,
                                type: "spring",
                                damping: 25,
                                stiffness: 300
                              }}
                            >
                              <Link
                                href={sector.href}
                                className="block text-lg text-gray-600 hover:text-orange-500 transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {sector.name}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <motion.a
                        href={link.href}
                        className="block text-2xl font-medium text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: 0.1 + index * 0.1,
                          type: "spring",
                          damping: 25,
                          stiffness: 300
                        }}
                        whileHover={{ x: 10 }}
                      >
                        {link.name}
                      </motion.a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Spacer */}
            <div className="flex-1"></div>

            {/* Buttons */}
            <div className="p-6 space-y-4">
              {/* Phone Button */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button 
                  variant="outline"
                  className="w-full h-14 text-lg flex items-center justify-center space-x-2" 
                  size="lg"
                  onClick={() => setIsOpen(false)}
                  asChild
                >
                  <a href={`tel:${phoneNumber.replace(/\s/g, '')}`}>
                    <Phone className="h-5 w-5" />
                    <span>{phoneNumber}</span>
                  </a>
                </Button>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button 
                  className="w-full h-14 text-lg bg-orange-500 hover:bg-orange-600 text-white" 
                  size="lg"
                  onClick={() => setIsOpen(false)}
                >
                  Prendre rendez-vous
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>

    {/* Floating Call Button - Mobile (Simple) */}
    <AnimatePresence>
      {showFloatingButton && (
        <motion.div
          className="fixed bottom-4 right-4 md:hidden z-[60]"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ 
            type: "spring", 
            damping: 25, 
            stiffness: 300,
            duration: 0.3 
          }}
        >
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white shadow-xl hover:shadow-2xl rounded-full w-14 h-14 p-0 transition-all duration-300"
            asChild
          >
            <motion.a
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="flex items-center justify-center"
            >
              <Phone className="h-6 w-6" />
            </motion.a>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>

    {/* Floating Call Button - Desktop (Expanded) */}
    <AnimatePresence>
      {showFloatingButton && (
        <div className="hidden md:block fixed top-0 left-0 right-0 z-[60] pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:p-6 lg:p-8 py-4 flex justify-end">
            <motion.div
              className="pointer-events-auto"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 300,
                duration: 0.4 
              }}
            >
              <motion.a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="bg-white hover:bg-gray-50 shadow-xl hover:shadow-2xl rounded-2xl px-6 py-4 transition-all duration-300 flex items-center space-x-4 border border-gray-200"
              >
                <div className="bg-orange-500 rounded-full p-3 shadow-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600 font-bold text-base">Appelez-nous !</span>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">Gratuit</span>
                  </div>
                  <span className="text-sm text-gray-600 leading-tight">Du lundi au samedi - 8h à 19h</span>
                  <span className="font-bold text-xl text-gray-900 mt-1">{phoneNumber}</span>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
    </>
  );
}
