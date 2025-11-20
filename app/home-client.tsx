'use client';

import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
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
      title: "Cloisons Sèches",
      subtitle: "Pose et installation de cloisons",
      content: "Pose professionnelle de cloisons sèches en plaques de plâtre. Création d'espaces, séparation de pièces et aménagement intérieur pour particuliers et professionnels à Marseille.",
      image: "/prestation-1.png",
      gradientFrom: "#ff7e5f",
      gradientTo: "#feb47b",
      href: "/services/cloisons-seches"
    },
    {
      title: "Doublage et Isolation",
      subtitle: "Doublage des murs et isolation",
      content: "Doublage professionnel des murs avec isolation thermique et phonique. Amélioration du confort et de l'efficacité énergétique de votre habitat.",
      image: "/prestation-2.png",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2",
      href: "/services/doublage-isolation"
    },
    {
      title: "Faux Plafonds",
      subtitle: "Installation de faux plafonds",
      content: "Installation de faux plafonds suspendus en plaques de plâtre. Amélioration esthétique et technique avec intégration d'éclairage et isolation.",
      image: "/prestation-3.png",
      gradientFrom: "#28a745",
      gradientTo: "#20c997",
      href: "/services/faux-plafonds"
    },
    {
      title: "Finitions et Bandes",
      subtitle: "Finitions parfaites et bandes",
      content: "Réalisation de finitions parfaites avec pose de bandes, enduits et préparation pour peinture. Travail soigné pour un résultat impeccable.",
      image: "/prestation-4.png",
      gradientFrom: "#e74c3c",
      gradientTo: "#f39c12",
      href: "/services/finitions-bandes"
    },
    {
      title: "Rénovation Placo",
      subtitle: "Réparation et rénovation",
      content: "Réparation et rénovation de cloisons existantes. Remise en état, réparation de fissures et modernisation de vos espaces intérieurs.",
      image: "/prestation-5.png",
      gradientFrom: "#3498db",
      gradientTo: "#2980b9",
      href: "/services/renovation-placo"
    }
  ];

  const contactInfo = {
    address: "Marseille, Provence-Alpes-Côte d'Azur",
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    mapEmbedUrl: "https://maps.google.com/maps?q=Marseille+France&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
        subtitle="Parlons de vos besoins en travaux de plaquiste, cloisons, doublages, faux plafonds ou rénovation à Marseille et région PACA"
        contactInfo={contactInfo} 
      />
      {/* Utilisation de la variable d'environnement pour le Place ID */}
      
      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitIntent && (
          <ExitIntentPopup onClose={closeExitIntent} />
        )}
      </AnimatePresence>
    </div>
  );
}
