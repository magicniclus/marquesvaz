'use client';

import { motion } from 'framer-motion';
import { Check, Home, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function MerciClient() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header avec animation de succès */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 text-center">
          <motion.div
            className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <Check className="h-10 w-10 text-green-500" />
          </motion.div>
          
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Merci pour votre demande !
          </motion.h1>
          
          <motion.p
            className="text-xl text-green-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Votre message a été envoyé avec succès
          </motion.p>
        </div>

        {/* Contenu principal */}
        <div className="p-8">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Nous avons bien reçu votre demande
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Notre équipe Marques Vaz Placo va étudier votre demande de travaux de plaquiste et vous recontacter 
              dans les plus brefs délais pour établir un devis personnalisé et gratuit.
            </p>
          </motion.div>

          {/* Informations de suivi */}
          <motion.div
            className="bg-gray-50 rounded-xl p-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Prochaines étapes :</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-green-600">1</span>
                </div>
                <span>Analyse de votre demande par notre équipe technique</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-green-600">2</span>
                </div>
                <span>Prise de contact sous 24h pour planifier un rendez-vous</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-green-600">3</span>
                </div>
                <span>Établissement d'un devis détaillé et personnalisé</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact d'urgence */}
          <motion.div
            className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <h3 className="text-lg font-semibold text-orange-900 mb-3">Besoin urgent ?</h3>
            <p className="text-orange-800 mb-4">
              Pour les interventions urgentes de plaquiste, contactez-nous directement :
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                className="border-orange-300 text-orange-700 hover:bg-orange-100"
                asChild
              >
                <a href="tel:0659764995" className="flex items-center justify-center">
                  <Phone className="h-4 w-4 mr-2" />
                  06 59 76 49 95
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-orange-300 text-orange-700 hover:bg-orange-100"
                asChild
              >
                <a href="mailto:amiltonvazmarques@gmail.com" className="flex items-center justify-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <Button
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
              asChild
            >
              <Link href="/" className="flex items-center justify-center">
                <Home className="h-4 w-4 mr-2" />
                Retour à l'accueil
              </Link>
            </Button>
            
            <Button
              variant="outline"
              className="flex-1"
              asChild
            >
              <Link href="/services/cloisons-seches">
                Découvrir nos services plaquiste
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-6 text-center">
          <p className="text-sm text-gray-500">
            Vous recevrez une confirmation par email dans quelques minutes.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
