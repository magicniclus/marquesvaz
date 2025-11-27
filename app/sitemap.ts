import { MetadataRoute } from 'next';
import { seoConfig } from '@/lib/seo-config';
import { sitemapConfig, getSectorUrls, getServiceUrls, getTotalPagesCount } from '@/lib/sitemap-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.siteUrl;
  const currentDate = new Date().toISOString();

  console.log(`🗺️ Génération du sitemap avec ${getTotalPagesCount()} pages`);

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Ajouter les pages statiques
  sitemapConfig.staticPages.forEach(page => {
    sitemapEntries.push({
      url: `${baseUrl}${page.url}`,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
  });

  // Ajouter toutes les pages secteurs
  const sectorUrls = getSectorUrls(baseUrl);
  sectorUrls.forEach(page => {
    sitemapEntries.push({
      url: `${baseUrl}${page.url}`,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
  });

  // Ajouter toutes les pages services
  const serviceUrls = getServiceUrls(baseUrl);
  serviceUrls.forEach(page => {
    sitemapEntries.push({
      url: `${baseUrl}${page.url}`,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
  });

  console.log(`✅ Sitemap généré avec succès: ${sitemapEntries.length} URLs`);
  
  return sitemapEntries;
}
