import { MetadataRoute } from 'next';
import { seoConfig } from '@/lib/seo-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.siteUrl;
  const currentDate = new Date().toISOString();

  // Secteurs géographiques Marseille et PACA
  const sectors = [
    'plaquiste-marseille-13', 'plaquiste-marseille-01', 'plaquiste-marseille-02', 
    'plaquiste-marseille-03', 'plaquiste-marseille-04', 'plaquiste-marseille-06',
    'plaquiste-marseille-07', 'plaquiste-marseille-08', 'plaquiste-marseille-09',
    'plaquiste-marseille-11', 'plaquiste-marseille-12', 'plaquiste-marseille-14',
    'plaquiste-aix-en-provence', 'plaquiste-aubagne', 'plaquiste-martigues',
    'plaquiste-salon-de-provence', 'plaquiste-istres', 'plaquiste-vitrolles',
    'plaquiste-cassis', 'plaquiste-la-ciotat', 'plaquiste-gardanne'
  ];

  // Services spécialisés plaquiste
  // const services = ['cloisons-seches', 'doublage-isolation', 'faux-plafonds', 'finitions-bandes', 'renovation-placo'];

  const sitemapEntries: MetadataRoute.Sitemap = [
    // Page d'accueil
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Page contact
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Page secteurs principale
    {
      url: `${baseUrl}/secteur`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Pages services existantes
    {
      url: `${baseUrl}/services/peinture-ravalement`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/renovation-globale`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/cloisons-seches`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/doublages`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/electricite-plomberie`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/faux-plafonds`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/finitions-platrerie`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Pages légales
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cgv`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/merci`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];

  // Ajouter toutes les pages secteurs existantes
  sectors.forEach(sector => {
    sitemapEntries.push({
      url: `${baseUrl}/secteur/${sector}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85, // Priorité élevée pour les pages géolocalisées
    });
  });

  return sitemapEntries;
}
