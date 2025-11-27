# 🗺️ Sitemap & SEO Configuration

Ce document explique la configuration et la gestion du sitemap XML pour le site **Marques Vaz Placo**.

## 📋 Vue d'ensemble

Le sitemap est généré automatiquement à chaque build et inclut toutes les pages du site :

- **Pages statiques** : Accueil, Contact, Services, etc.
- **Pages secteurs** : Toutes les villes et arrondissements de Marseille et PACA
- **Pages services** : Tous les services de plaquiste proposés
- **Pages légales** : Mentions légales, CGV, etc.

## 🔧 Configuration

### Fichiers principaux

- `app/sitemap.ts` - Générateur du sitemap XML
- `app/robots.ts` - Configuration du fichier robots.txt
- `lib/sitemap-config.ts` - Configuration centralisée
- `scripts/validate-sitemap.js` - Script de validation

### URLs générées

Le sitemap génère automatiquement les URLs pour :

#### Pages statiques (8 pages)
- `/` (Accueil) - Priorité 1.0
- `/contact` - Priorité 0.8
- `/secteur` - Priorité 0.9
- `/services` - Priorité 0.9
- `/avis-client` - Priorité 0.8
- `/mentions-legales` - Priorité 0.3
- `/cgv` - Priorité 0.3
- `/merci` - Priorité 0.2

#### Pages secteurs (28 pages)
Toutes les villes et arrondissements avec priorité 0.85 :
- Marseille (14 arrondissements)
- Aix-en-Provence, Aubagne, Cassis, etc.

#### Pages services (5 pages)
Tous les services avec priorité 0.8 :
- Cloisons sèches
- Doublage isolation
- Faux plafonds
- Finitions bandes
- Rénovation placo

**Total : 41 pages indexées**

## 🚀 Utilisation

### Génération automatique

Le sitemap se met à jour automatiquement :
- ✅ À chaque `npm run build`
- ✅ À chaque déploiement
- ✅ Avec la date de dernière modification

### Commandes disponibles

```bash
# Build standard
npm run build

# Build avec validation du sitemap
npm run build:full

# Validation seule du sitemap
npm run validate-sitemap
```

### Accès aux fichiers

- **Sitemap XML** : `https://marques-vaz-placo.fr/sitemap.xml`
- **Robots.txt** : `https://marques-vaz-placo.fr/robots.txt`

## 🔍 Validation et monitoring

### Script de validation

Le script `validate-sitemap.js` vérifie :
- ✅ Accessibilité de toutes les URLs
- ✅ Codes de statut HTTP
- ✅ Temps de réponse
- ✅ Statistiques détaillées

### Exemple de sortie

```
🔍 Validation du sitemap...
📍 URL du sitemap: https://marques-vaz-placo.fr/sitemap.xml

📥 Récupération des URLs du sitemap...
✅ 41 URLs trouvées dans le sitemap

🌐 Vérification des URLs...
[41/41] Vérification: https://marques-vaz-placo.fr/services/renovation-placo...

📊 Résultats de la validation:
✅ URLs valides: 41
❌ URLs en erreur: 0
📈 Taux de succès: 100.0%

📈 Répartition par code de statut:
  • 200: 41 URL(s)

🎉 Validation terminée!
```

## 🛠️ Maintenance

### Ajouter une nouvelle page

1. **Page statique** : Modifier `lib/sitemap-config.ts`
2. **Nouveau secteur** : Ajouter à la liste `sectors`
3. **Nouveau service** : Ajouter à la liste `services`

### Modifier les priorités

Éditer les valeurs dans `lib/sitemap-config.ts` :
- `1.0` : Page d'accueil (maximum)
- `0.9` : Pages principales importantes
- `0.8` : Pages de contenu importantes
- `0.3` : Pages légales
- `0.2` : Pages utilitaires

### Fréquences de mise à jour

- `weekly` : Pages principales et dynamiques
- `monthly` : Pages de contenu stable
- `yearly` : Pages légales et statiques

## 🔒 Robots.txt

Configuration optimisée pour le SEO :

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Crawl-delay: 1

User-agent: Googlebot
Allow: /
Disallow: /api/

Sitemap: https://marques-vaz-placo.fr/sitemap.xml
Host: https://marques-vaz-placo.fr
```

## 📈 SEO Benefits

- ✅ **Indexation complète** : Toutes les pages sont découvrables
- ✅ **Priorités optimisées** : Guide les moteurs de recherche
- ✅ **Mise à jour automatique** : Toujours synchronisé
- ✅ **Validation continue** : Détection proactive des erreurs
- ✅ **Performance** : Génération rapide et efficace

## 🚨 Troubleshooting

### Erreur de génération
```bash
# Vérifier la configuration
cat lib/sitemap-config.ts

# Tester la génération
npm run build
```

### URLs inaccessibles
```bash
# Valider le sitemap
npm run validate-sitemap

# Vérifier une URL spécifique
curl -I https://marques-vaz-placo.fr/secteur/plaquiste-marseille-01
```

### Problème de robots.txt
```bash
# Tester l'accès
curl https://marques-vaz-placo.fr/robots.txt
```

---

**Note** : Ce système est conçu pour être autonome et ne nécessite aucune intervention manuelle. Il se met à jour automatiquement à chaque déploiement.
