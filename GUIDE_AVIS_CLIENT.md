# Guide d'utilisation - Page d'évaluation client

## 📍 **URL de la page**
```
https://votre-domaine.com/avis-client
```

Cette page est **cachée** - elle n'apparaît dans aucun menu ni lien interne du site.

## 🎯 **Fonctionnement**

### **Système de notation intelligent :**

#### ⭐ **Note = 5 étoiles**
- **Action** : Redirection automatique vers Google My Business
- **Objectif** : Maximiser les avis 5 étoiles publics

#### ⭐ **Note = 3 ou 4 étoiles** 
- **Action** : Redirection automatique vers Google My Business
- **Objectif** : Récupérer les avis positifs publics

#### ⭐ **Note = 1 ou 2 étoiles**
- **Action** : Formulaire de commentaire privé
- **Objectif** : Traiter les problèmes en interne sans impact public

## 🔧 **Configuration**

### **1. Variable d'environnement Google My Business**
Ajoutez dans votre fichier `.env.local` :
```bash
NEXT_PUBLIC_GOOGLE_MY_BUSINESS_REVIEW_URL=https://g.page/r/VOTRE_ID_GOOGLE_MY_BUSINESS/review
```

### **2. Récupérer votre lien Google My Business**
1. Allez sur votre fiche Google My Business
2. Cliquez sur "Obtenir plus d'avis"
3. Copiez le lien généré
4. Collez-le dans la variable d'environnement

### **3. Fallback automatique**
Si la variable n'est pas définie, redirection vers : `https://www.google.com/search?q=avis+google`

## 📊 **Données sauvegardées**

### **Firebase - Collection : `commentaires-clients`**
```javascript
{
  rating: 1-2,           // Note donnée
  comment: "...",        // Commentaire du client
  timestamp: "...",      // Date/heure
  dateCreation: "...",   // Timestamp Firebase
  status: "nouveau",     // Statut de traitement
  uid: "..."            // ID utilisateur
}
```

## 💡 **Utilisation recommandée**

### **Envoi aux clients :**
1. **Après un chantier terminé**
2. **Dans un email de suivi**
3. **Via SMS de satisfaction**

### **Exemple d'email :**
```
Bonjour [Nom du client],

Votre projet de plaquiste est maintenant terminé !

Pourriez-vous prendre 30 secondes pour évaluer notre service ?
👉 https://votre-domaine.com/avis-client

Merci pour votre confiance,
L'équipe MARQUES VAZ PLACO
```

## 🎨 **Interface utilisateur**

- **Design moderne et épuré**
- **Système d'étoiles interactif**
- **Animations fluides**
- **Responsive mobile/desktop**
- **Feedback visuel immédiat**

## 🔒 **Sécurité et confidentialité**

- **Page non indexée** (`robots: noindex, nofollow`)
- **Aucun lien interne** vers cette page
- **Commentaires négatifs privés** (Firebase uniquement)
- **Avis positifs publics** (Google My Business)

## 📈 **Avantages**

✅ **Filtre les avis négatifs** avant publication  
✅ **Maximise les avis positifs** sur Google  
✅ **Récupère les retours constructifs** en privé  
✅ **Améliore la réputation en ligne**  
✅ **Interface client simple et rapide**  

## 🛠 **Maintenance**

### **Consulter les commentaires négatifs :**
1. Accédez à votre console Firebase
2. Collection : `clients/{userId}/commentaires-clients`
3. Filtrez par `status: "nouveau"`

### **Traitement des retours :**
1. Contactez le client pour résoudre le problème
2. Marquez le commentaire comme `status: "traité"`
3. Proposez une nouvelle évaluation si résolu

---

**Cette page est maintenant prête à utiliser !** 🚀
