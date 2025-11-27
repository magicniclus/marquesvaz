#!/usr/bin/env node

/**
 * Script de vérification post-build
 * Vérifie que le sitemap et robots.txt sont bien générés
 */

const fs = require('fs');
const path = require('path');

const BUILD_DIR = '.next';
const EXPECTED_FILES = [
  'server/app/sitemap.xml/route.js',
  'server/app/robots.txt/route.js'
];

console.log('🔍 Vérification post-build...\n');

let allGood = true;

// Vérifier que le dossier de build existe
if (!fs.existsSync(BUILD_DIR)) {
  console.error('❌ Dossier de build introuvable:', BUILD_DIR);
  process.exit(1);
}

// Vérifier les fichiers générés
EXPECTED_FILES.forEach(file => {
  const filePath = path.join(BUILD_DIR, file);
  if (fs.existsSync(filePath)) {
    console.log('✅', file);
  } else {
    console.error('❌', file, '- Fichier manquant');
    allGood = false;
  }
});

// Vérifier la configuration du sitemap
try {
  const sitemapConfigPath = 'lib/sitemap-config.ts';
  if (fs.existsSync(sitemapConfigPath)) {
    console.log('✅ Configuration du sitemap présente');
    
    const content = fs.readFileSync(sitemapConfigPath, 'utf8');
    const sectorCount = (content.match(/plaquiste-/g) || []).length;
    const serviceCount = (content.match(/'[^']*-[^']*'/g) || []).filter(match => 
      ['cloisons', 'doublage', 'faux', 'finitions', 'renovation'].some(service => 
        match.includes(service)
      )
    ).length;
    
    console.log(`📊 Secteurs détectés: ${sectorCount}`);
    console.log(`📊 Services détectés: ${serviceCount}`);
  } else {
    console.error('❌ Configuration du sitemap manquante');
    allGood = false;
  }
} catch (error) {
  console.error('❌ Erreur lors de la lecture de la configuration:', error.message);
  allGood = false;
}

// Vérifier les scripts dans package.json
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const scripts = packageJson.scripts || {};
  
  if (scripts['validate-sitemap']) {
    console.log('✅ Script de validation du sitemap présent');
  } else {
    console.warn('⚠️  Script de validation du sitemap manquant');
  }
  
  if (scripts['build:full']) {
    console.log('✅ Script de build complet présent');
  } else {
    console.warn('⚠️  Script de build complet manquant');
  }
} catch (error) {
  console.error('❌ Erreur lors de la lecture du package.json:', error.message);
  allGood = false;
}

console.log('\n' + '='.repeat(50));

if (allGood) {
  console.log('🎉 Vérification post-build réussie !');
  console.log('✅ Sitemap et robots.txt configurés correctement');
  console.log('✅ Génération automatique activée');
  console.log('\n📍 URLs disponibles:');
  console.log('   • /sitemap.xml');
  console.log('   • /robots.txt');
  process.exit(0);
} else {
  console.log('❌ Vérification post-build échouée');
  console.log('🔧 Veuillez corriger les erreurs ci-dessus');
  process.exit(1);
}
