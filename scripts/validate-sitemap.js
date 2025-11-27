#!/usr/bin/env node

/**
 * Script de validation du sitemap
 * Vérifie que toutes les URLs sont valides et accessibles
 */

const https = require('https');
const http = require('http');

// Configuration
const SITE_URL = 'https://marques-vaz-placo.fr';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

/**
 * Fait une requête HTTP pour vérifier qu'une URL est accessible
 */
function checkUrl(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https:') ? https : http;
    
    const req = protocol.get(url, (res) => {
      resolve({
        url,
        status: res.statusCode,
        success: res.statusCode >= 200 && res.statusCode < 400
      });
    });

    req.on('error', (err) => {
      resolve({
        url,
        status: 0,
        success: false,
        error: err.message
      });
    });

    req.setTimeout(10000, () => {
      req.destroy();
      resolve({
        url,
        status: 0,
        success: false,
        error: 'Timeout'
      });
    });
  });
}

/**
 * Récupère et parse le sitemap XML
 */
async function getSitemapUrls() {
  return new Promise((resolve, reject) => {
    const protocol = SITEMAP_URL.startsWith('https:') ? https : http;
    
    protocol.get(SITEMAP_URL, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          // Extraction simple des URLs du XML
          const urlMatches = data.match(/<loc>(.*?)<\/loc>/g);
          if (!urlMatches) {
            reject(new Error('Aucune URL trouvée dans le sitemap'));
            return;
          }
          
          const urls = urlMatches.map(match => 
            match.replace('<loc>', '').replace('</loc>', '')
          );
          
          resolve(urls);
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject);
  });
}

/**
 * Fonction principale de validation
 */
async function validateSitemap() {
  console.log('🔍 Validation du sitemap...');
  console.log(`📍 URL du sitemap: ${SITEMAP_URL}\n`);

  try {
    // Récupérer les URLs du sitemap
    console.log('📥 Récupération des URLs du sitemap...');
    const urls = await getSitemapUrls();
    console.log(`✅ ${urls.length} URLs trouvées dans le sitemap\n`);

    // Vérifier chaque URL
    console.log('🌐 Vérification des URLs...');
    const results = [];
    
    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      process.stdout.write(`\r[${i + 1}/${urls.length}] Vérification: ${url.substring(0, 60)}...`);
      
      const result = await checkUrl(url);
      results.push(result);
      
      // Petite pause pour éviter de surcharger le serveur
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    console.log('\n');

    // Analyser les résultats
    const successful = results.filter(r => r.success);
    const failed = results.filter(r => !r.success);

    console.log('📊 Résultats de la validation:');
    console.log(`✅ URLs valides: ${successful.length}`);
    console.log(`❌ URLs en erreur: ${failed.length}`);
    console.log(`📈 Taux de succès: ${((successful.length / results.length) * 100).toFixed(1)}%\n`);

    // Afficher les erreurs s'il y en a
    if (failed.length > 0) {
      console.log('❌ URLs en erreur:');
      failed.forEach(result => {
        console.log(`  • ${result.url} (${result.status || 'Erreur'}: ${result.error || 'Code de statut invalide'})`);
      });
      console.log('');
    }

    // Statistiques par code de statut
    const statusCodes = {};
    results.forEach(result => {
      const status = result.status || 'Erreur';
      statusCodes[status] = (statusCodes[status] || 0) + 1;
    });

    console.log('📈 Répartition par code de statut:');
    Object.entries(statusCodes)
      .sort(([a], [b]) => a.localeCompare(b))
      .forEach(([status, count]) => {
        console.log(`  • ${status}: ${count} URL(s)`);
      });

    console.log('\n🎉 Validation terminée!');
    
    // Code de sortie
    process.exit(failed.length > 0 ? 1 : 0);

  } catch (error) {
    console.error('❌ Erreur lors de la validation:', error.message);
    process.exit(1);
  }
}

// Exécuter la validation si le script est appelé directement
if (require.main === module) {
  validateSitemap();
}

module.exports = { validateSitemap, checkUrl, getSitemapUrls };
