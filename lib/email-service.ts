import sgMail from '@sendgrid/mail';
import { FormData } from './firebase-service';

// Configuration SendGrid
const apiKey = process.env.SENDGRID_API_KEY;
if (!apiKey) {
  console.error('❌ SENDGRID_API_KEY non configurée dans les variables d\'environnement');
} else if (!apiKey.startsWith('SG.')) {
  console.error('❌ Format de clé SendGrid invalide (doit commencer par "SG.")');
} else {
  console.log('✅ Clé SendGrid configurée:', apiKey.substring(0, 10) + '...');
}
sgMail.setApiKey(apiKey || '');

export interface EmailData extends FormData {
  dateCreation?: string;
}

// Email de confirmation au client
export const sendClientConfirmationEmail = async (prospectData: EmailData): Promise<void> => {
  if (!process.env.SENDGRID_API_KEY) {
    console.warn('SendGrid API key not configured - email notifications disabled');
    throw new Error('Email service not configured');
  }
  
  try {
    const logoUrl = 'https://firebasestorage.googleapis.com/v0/b/trouvermonchantier.firebasestorage.app/o/logo.png?alt=media&token=becd91c3-7d25-4ac2-80a9-6a6c796bd021';
    
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmation - Trouver Mon Chantier</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 500px; margin: 0 auto; padding: 20px; }
            .container { background: white; border-radius: 8px; padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .header { text-align: center; margin-bottom: 20px; }
            .logo { max-width: 150px; height: auto; }
            h1 { color: #ff7e5f; font-size: 20px; margin: 10px 0; }
            .success { background: #e8f5e8; padding: 15px; border-radius: 5px; text-align: center; color: #2e7d32; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <img src="${logoUrl}" alt="Trouver Mon Chantier" class="logo">
                <h1>Demande reçue !</h1>
            </div>
            <div class="success">
                <p><strong>✅ Votre demande a été enregistrée</strong></p>
                <p>Nous vous recontacterons rapidement pour votre projet : <strong>${prospectData.motif}</strong></p>
            </div>
            <div class="footer">
                <p>Trouver Mon Chantier<br>service@trouver-mon-chantier.fr</p>
            </div>
        </div>
    </body>
    </html>
    `;

    const textContent = `
TROUVER MON CHANTIER - Demande reçue

Bonjour ${prospectData.prenom} ${prospectData.nom},

Votre demande pour "${prospectData.motif}" a été enregistrée.
Nous vous recontacterons rapidement.

Cordialement,
Trouver Mon Chantier
service@trouver-mon-chantier.fr
    `;

    const msg = {
      to: prospectData.email,
      from: {
        email: 'service@trouver-mon-chantier.fr',
        name: 'Trouver Mon Chantier'
      },
      subject: `✅ Demande reçue - ${prospectData.motif}`,
      text: textContent,
      html: htmlContent,
    };

    await sgMail.send(msg);
    console.log('Email de confirmation envoyé au client:', prospectData.email);
  } catch (error: unknown) {
    console.error('❌ Erreur envoi email client:');
    const sendGridError = error as { code?: number; message?: string; response?: { body?: unknown } };
    console.error('Code:', sendGridError.code);
    console.error('Message:', sendGridError.message);
    
    if (sendGridError.response && sendGridError.response.body) {
      console.error('Détails SendGrid:', JSON.stringify(sendGridError.response.body, null, 2));
    }
    
    // Messages d'aide basés sur le code d'erreur
    if (sendGridError.code === 401) {
      console.error('💡 Erreur 401: Vérifiez votre clé API SendGrid');
      console.error('   - La clé doit commencer par "SG."');
      console.error('   - Vérifiez qu\'elle n\'est pas expirée');
      console.error('   - Créez une nouvelle clé avec les permissions "Mail Send"');
    } else if (sendGridError.code === 403) {
      console.error('💡 Erreur 403: Problème de permissions ou domaine');
      console.error('   - Vérifiez que service@trouver-mon-chantier.fr est vérifié dans SendGrid');
      console.error('   - Vérifiez les permissions de votre clé API');
    }
    
    throw error;
  }
};

// Email de notification interne
export const sendProspectEmail = async (prospectData: EmailData): Promise<void> => {
  if (!process.env.SENDGRID_API_KEY) {
    console.warn('SendGrid API key not configured - email notifications disabled');
    throw new Error('Email service not configured');
  }
  
  try {
    // Email HTML template - ALERTE URGENTE
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>🚨 NOUVEAU CONTACT - Action Immédiate Requise</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.4; color: #333; max-width: 500px; margin: 0 auto; padding: 15px; background: #f5f5f5; }
            .container { background: white; border-radius: 8px; padding: 20px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); border-left: 5px solid #007bff; }
            .urgent { background: #007bff; color: white; padding: 15px; border-radius: 5px; text-align: center; margin-bottom: 20px; }
            .urgent h1 { margin: 0; font-size: 18px; }
            .contact-info { background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; }
            .contact-row { margin: 8px 0; }
            .label { font-weight: bold; color: #007bff; }
            .value { margin-left: 10px; }
            .phone { font-size: 18px; font-weight: bold; color: #007bff; }
            .action { background: #28a745; color: white; padding: 15px; border-radius: 5px; text-align: center; margin: 20px 0; }
            .footer { text-align: center; font-size: 11px; color: #666; margin-top: 20px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="urgent">
                <h1>🚨 NOUVEAU CONTACT</h1>
                <p style="margin: 5px 0;">Via votre site internet</p>
            </div>
            
            <div class="contact-info">
                <div class="contact-row">
                    <span class="label">👤 Contact :</span>
                    <span class="value">${prospectData.prenom} ${prospectData.nom}</span>
                </div>
                <div class="contact-row">
                    <span class="label">� Téléphone :</span>
                    <span class="value phone"><a href="tel:${prospectData.telephone}" style="color: #007bff; text-decoration: none;">${prospectData.telephone}</a></span>
                </div>
                <div class="contact-row">
                    <span class="label">� Email :</span>
                    <span class="value"><a href="mailto:${prospectData.email}" style="color: #333;">${prospectData.email}</a></span>
                </div>
                <div class="contact-row">
                    <span class="label">🏗️ Projet :</span>
                    <span class="value"><strong>${prospectData.motif}</strong></span>
                </div>
                <div class="contact-row">
                    <span class="label">⏰ Reçu à :</span>
                    <span class="value">${new Date().toLocaleString('fr-FR')}</span>
                </div>
            </div>
            
            <div class="action">
                <p style="margin: 0; font-weight: bold;">⚡ CONTACTEZ-LE DANS LES 10 MINUTES</p>
                <p style="margin: 5px 0 0 0; font-size: 14px;">pour optimiser vos chances de réussite !</p>
            </div>
            
            <div class="footer">
                <p>Notification automatique - Trouver Mon Chantier</p>
            </div>
        </div>
    </body>
    </html>
    `;

    // Version texte simple - ALERTE
    const textContent = `
🚨 NOUVEAU CONTACT - TROUVER MON CHANTIER

👤 ${prospectData.prenom} ${prospectData.nom}
📞 ${prospectData.telephone}
📧 ${prospectData.email}
🏗️ ${prospectData.motif}
⏰ ${new Date().toLocaleString('fr-FR')}

⚡ CONTACTEZ-LE DANS LES 10 MINUTES pour optimiser vos chances de réussite !

---
Notification automatique
    `;

    // Get email from site config directly
    const recipientEmails = ['service@trouver-mon-chantier.fr', 'amiltonvazmarques@gmail.com'];

    const msg = {
      to: recipientEmails,
      from: {
        email: 'service@trouver-mon-chantier.fr',
        name: 'Trouver Mon Chantier - Notifications'
      },
      subject: `🚨 NOUVEAU CONTACT : ${prospectData.prenom} ${prospectData.nom} - ${prospectData.motif}`,
      text: textContent,
      html: htmlContent,
    };

    await sgMail.send(msg);
    console.log('Email de notification envoyé à:', msg.to);
  } catch (error: unknown) {
    console.error('❌ Erreur envoi email notification:');
    const sendGridError = error as { code?: number; message?: string; response?: { body?: unknown } };
    console.error('Code:', sendGridError.code);
    console.error('Message:', sendGridError.message);
    
    if (sendGridError.response && sendGridError.response.body) {
      console.error('Détails SendGrid:', JSON.stringify(sendGridError.response.body, null, 2));
    }
    
    throw error;
  }
};

// Fonction pour envoyer seulement l'email de notification interne
export const sendBothEmails = async (prospectData: EmailData): Promise<void> => {
  try {
    // Envoyer seulement l'email de notification interne
    await sendProspectEmail(prospectData);
    
    console.log('Email de notification envoyé avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email de notification:', error);
    throw error;
  }
};
