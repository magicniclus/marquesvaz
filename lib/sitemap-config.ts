/**
 * Configuration centralisée pour le sitemap
 * Facilite la maintenance et les mises à jour
 */

export interface SitemapPage {
  url: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export interface SitemapConfig {
  staticPages: SitemapPage[];
  sectors: string[];
  services: string[];
}

export const sitemapConfig: SitemapConfig = {
  // Pages statiques avec leurs priorités et fréquences de mise à jour
  staticPages: [
    {
      url: '/',
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: '/contact',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: '/secteur',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: '/services',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: '/avis-client',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: '/mentions-legales',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: '/cgv',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: '/merci',
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ],

  // Secteurs géographiques (toutes les pages existantes)
  sectors: [
    'plaquiste-marseille-01',
    'plaquiste-marseille-02',
    'plaquiste-marseille-03',
    'plaquiste-marseille-04',
    'plaquiste-marseille-06',
    'plaquiste-marseille-07',
    'plaquiste-marseille-08',
    'plaquiste-marseille-09',
    'plaquiste-marseille-11',
    'plaquiste-marseille-12',
    'plaquiste-marseille-13',
    'plaquiste-marseille-14',
    'plaquiste-aix-en-provence',
    'plaquiste-allauch',
    'plaquiste-aubagne',
    'plaquiste-carnoux-en-provence',
    'plaquiste-cassis',
    'plaquiste-gardanne',
    'plaquiste-gemenos',
    'plaquiste-istres',
    'plaquiste-la-ciotat',
    'plaquiste-la-destrousse',
    'plaquiste-la-penne-sur-huveaune',
    'plaquiste-martigues',
    'plaquiste-roquefort-la-bedoule',
    'plaquiste-roquevaire',
    'plaquiste-salon-de-provence',
    'plaquiste-vitrolles',
  ],

  // Services spécialisés (toutes les pages existantes)
  services: [
    'cloisons-seches',
    'doublage-isolation',
    'faux-plafonds',
    'finitions-bandes',
    'renovation-placo',
  ],
};

/**
 * Génère les URLs complètes pour les secteurs
 */
export function getSectorUrls(baseUrl: string): SitemapPage[] {
  return sitemapConfig.sectors.map(sector => ({
    url: `/secteur/${sector}`,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));
}

/**
 * Génère les URLs complètes pour les services
 */
export function getServiceUrls(baseUrl: string): SitemapPage[] {
  return sitemapConfig.services.map(service => ({
    url: `/services/${service}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
}

/**
 * Valide qu'une URL est bien formée
 */
export function validateUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Compte le nombre total de pages dans le sitemap
 */
export function getTotalPagesCount(): number {
  return (
    sitemapConfig.staticPages.length +
    sitemapConfig.sectors.length +
    sitemapConfig.services.length
  );
}
