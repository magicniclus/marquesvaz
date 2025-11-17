'use client';

import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import GoogleReviewsBanner from '@/components/GoogleReviewsBanner';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ProjectGallery from '@/components/ProjectGallery';
import ContactSection from '@/components/ContactSection';
import LogoCarousel from '@/components/LogoCarousel';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import { useExitIntent } from '@/hooks/useExitIntent';
import { config } from '@/lib/config';
import { organizationSchema, servicesSchema } from '@/lib/seo-config';

export default function HomeClient() {
  const { showExitIntent, closeExitIntent } = useExitIntent({
    enabled: true,
    delay: 500,
    sensitivity: 20
  });
  
  const servicesData = [
    {
      title: "Travaux Fibre",
      subtitle: "Installation et maintenance fibre optique",
      content: "Installation, maintenance et réparation de réseaux fibre optique. Interventions techniques spécialisées pour particuliers et professionnels en Île-de-France.",
      image: "/prestation-1.png",
      gradientFrom: "#ff7e5f",
      gradientTo: "#feb47b",
      href: "/services/travaux-fibre"
    },
    {
      title: "Fourreau Bouché",
      subtitle: "Débouchage de fourreaux télécom",
      content: "Débouchage professionnel de fourreaux télécommunications. Techniques spécialisées pour libérer les conduits obstrués et permettre le passage de la fibre optique.",
      image: "/prestation-2.png",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2",
      href: "/services/fourreau-bouche"
    },
    {
      title: "Détection de Point de Blocage",
      subtitle: "Localisation précise des obstructions",
      content: "Détection et localisation précise des points de blocage dans les réseaux de télécommunications. Diagnostic technique avancé pour identifier les problèmes.",
      image: "/prestation-3.png",
      gradientFrom: "#28a745",
      gradientTo: "#20c997",
      href: "/services/detection-blocage"
    },
    {
      title: "Raccordement Fibre Complexe",
      subtitle: "Solutions techniques avancées",
      content: "Raccordements fibre optique complexes et techniques. Expertise pour les installations difficiles nécessitant des compétences spécialisées.",
      image: "/prestation-4.png",
      gradientFrom: "#e74c3c",
      gradientTo: "#f39c12",
      href: "/services/raccordement-complexe"
    },
    {
      title: "Urgence Fibre",
      subtitle: "Intervention rapide 24h/24",
      content: "Interventions d'urgence fibre optique. Service réactif pour résoudre rapidement vos pannes et problèmes de connexion fibre.",
      image: "/prestation-5.png",
      gradientFrom: "#3498db",
      gradientTo: "#2980b9",
      href: "/services/urgence-fibre"
    }
  ];

  const contactInfo = {
    address: "Paris (75015)",
    phone: "07 83 49 01 36",
    email: "contact@rafcomm.fr",
    mapEmbedUrl: "https://maps.google.com/maps?q=Paris+75015&t=&z=13&ie=UTF8&iwloc=&output=embed"
  };

  return (
    <div>
      {/* Données structurées JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      
      <Hero config={config.hero} />
      <LogoCarousel config={config.partners} speed={30} />
      <AboutSection
        id="expertise"
        smallTitle={config.about.sections[0].smallTitle}
        title={config.about.sections[0].title}
        subtitle={config.about.sections[0].subtitle}
        content={config.about.sections[0].content}
        image={config.about.sections[0].image}
        gradientFrom={config.about.sections[0].gradientFrom}
        gradientTo={config.about.sections[0].gradientTo}
        buttonText={config.about.sections[0].buttonText}
        buttonHref={config.about.sections[0].buttonHref}
        reversed={config.about.sections[0].reversed}
      />
      <ServicesSection id="services" cards={servicesData} />
      <ProjectGallery id="realisations" config={config.gallery} />
      <AboutSection
        smallTitle={config.about.sections[1].smallTitle}
        title={config.about.sections[1].title}
        subtitle={config.about.sections[1].subtitle}
        content={config.about.sections[1].content}
        image={config.about.sections[1].image}
        gradientFrom={config.about.sections[1].gradientFrom}
        gradientTo={config.about.sections[1].gradientTo}
        buttonText={config.about.sections[1].buttonText}
        buttonHref={config.about.sections[1].buttonHref}
        reversed={config.about.sections[1].reversed}
      />
      <TeamSection config={config.team} />
      <ContactSection 
        title="Contactez-nous"
        subtitle="Parlons de vos besoins en travaux fibre, débouchage de fourreaux, détection de blocages ou urgences fibre en Île-de-France"
        contactInfo={contactInfo} 
      />
      {/* Utilisation de la variable d'environnement pour le Place ID */}
      <GoogleReviewsBanner placeId={process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || "JuUub4TSV8uuF6tqj"} />
      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitIntent && (
          <ExitIntentPopup onClose={closeExitIntent} />
        )}
      </AnimatePresence>
    </div>
  );
}
