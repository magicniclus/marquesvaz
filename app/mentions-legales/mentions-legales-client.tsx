'use client';

import { motion } from 'framer-motion';
import { Building, Mail } from 'lucide-react';
import { config } from '@/lib/config';

export default function MentionsLegalesClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 overflow-hidden">
        {/* Optional background image overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Mentions Légales
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Informations légales et réglementaires de notre entreprise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Informations sur l'entreprise */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Building className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Informations sur l'entreprise</h2>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p><strong>Dénomination sociale :</strong> RAFCOM</p>
                <p><strong>Forme juridique :</strong> SASU (Société par Actions Simplifiée Unipersonnelle)</p>
                <p><strong>Directeur de la publication :</strong> Rafik Hamel</p>
                <p><strong>Siège social :</strong> 200 rue de la Croix Nivert, 75015 Paris</p>
                <p><strong>Téléphone :</strong> 07 83 49 01 36</p>
                <p><strong>Email :</strong> <a href="mailto:contact@rafcom.net" className="text-gray-600 hover:text-gray-800 transition-colors">contact@rafcom.net</a></p>
                <p><strong>SIRET :</strong> 991 943 010 00017</p>
                <p><strong>SIREN :</strong> 991 943 010</p>
                <p><strong>Activité :</strong> Travaux de fibre optique, débouchage de fourreaux télécommunications, détection de points de blocage, raccordements complexes et interventions d'urgence</p>
                <p><strong>Zone d'intervention :</strong> Paris et Île-de-France</p>
              </div>
            </div>

            {/* Directeur de publication */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Directeur de publication</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p><strong>Directeur de publication :</strong> Rafik Hamel</p>
                <p><strong>Contact :</strong> <a href="mailto:contact@rafcom.net" className="text-gray-600 hover:text-gray-800 transition-colors">contact@rafcom.net</a></p>
              </div>
            </div>

            {/* Hébergement */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hébergement du site</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p><strong>Hébergeur :</strong> Netlify, Inc.</p>
                <p><strong>Adresse :</strong> 2325 3rd Street, Suite 296, San Francisco, CA 94107, États-Unis</p>
                <p><strong>Site web :</strong> <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">www.netlify.com</a></p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Propriété intellectuelle</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                  Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite 
                  sauf autorisation expresse du directeur de la publication.
                </p>
                <p>
                  Les marques et logos figurant sur le site sont déposés par RAFCOM ou éventuellement par des partenaires. 
                  Toute reproduction totale ou partielle de ces marques ou de ces logos, effectuée à partir des éléments du site 
                  sans l'autorisation expresse de RAFCOM est donc prohibée.
                </p>
              </div>
            </div>

            {/* Protection des données personnelles */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Protection des données personnelles</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  RAFCOM s'engage à respecter la réglementation en vigueur applicable au traitement des données personnelles, 
                  notamment la loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés dans sa version 
                  actuelle et le Règlement Général sur la Protection des Données (RGPD).
                </p>
                <p>
                  Les données personnelles collectées sur ce site sont destinées à RAFCOM et ne sont jamais transmises à des tiers 
                  sans votre consentement préalable.
                </p>
                <p>
                  Conformément à la loi "Informatique et Libertés" et au RGPD, vous disposez d'un droit d'accès, de rectification, 
                  de suppression et de portabilité de vos données personnelles. Vous pouvez exercer ces droits en nous contactant à : 
                  <a href="mailto:contact@rafcom.net" className="text-gray-600 hover:text-gray-800 transition-colors"> contact@rafcom.net</a>
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. 
                  Les cookies sont de petits fichiers texte stockés sur votre ordinateur par votre navigateur web.
                </p>
                <p>
                  Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités du site 
                  pourraient ne pas fonctionner correctement.
                </p>
                <p>
                  Les cookies utilisés sur ce site sont :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Cookies techniques nécessaires au fonctionnement du site</li>
                  <li>Cookies d'analyse pour améliorer nos services (Google Analytics)</li>
                </ul>
              </div>
            </div>

            {/* Responsabilité */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Responsabilité</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, 
                  mais peut toutefois contenir des inexactitudes ou des omissions.
                </p>
                <p>
                  Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, 
                  à l'adresse <a href="mailto:batifrance@outlook.fr" className="text-gray-600 hover:text-gray-800 transition-colors">batifrance@outlook.fr</a>, 
                  en décrivant le problème de la manière la plus précise possible.
                </p>
                <p>
                  Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule responsabilité. 
                  En conséquence, BATI FRANCE ne saurait être tenu responsable d'un quelconque dommage subi par l'ordinateur de l'utilisateur 
                  ou d'une quelconque perte de données consécutives au téléchargement.
                </p>
              </div>
            </div>

            {/* Droit applicable et juridiction compétente */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Droit applicable et juridiction compétente</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Tout litige en relation avec l'utilisation du site www.batifrance.fr est soumis au droit français. 
                  Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :
                </p>
                <p><strong>Email :</strong> <a href="mailto:batifrance@outlook.fr" className="text-gray-600 hover:text-gray-800 transition-colors">batifrance@outlook.fr</a></p>
                <p><strong>Téléphone :</strong> <a href="tel:+33659699415" className="text-gray-600 hover:text-gray-800 transition-colors">+33 6 59 69 94 15</a></p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
