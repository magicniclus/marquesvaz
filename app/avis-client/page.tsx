'use client';

import { useState } from 'react';
import { Star, Send, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import { Textarea } from '@/components/ui/textarea';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
export default function AvisClientPage() {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showCommentForm, setShowCommentForm] = useState<boolean>(false);
  const [showNextStepButton, setShowNextStepButton] = useState<boolean>(false);

  // Lien Google My Business depuis la variable d'environnement
  const googleMyBusinessUrl = process.env.NEXT_PUBLIC_GOOGLE_MY_BUSINESS_REVIEW_URL || "https://www.google.com/search?q=avis+google";

  const handleStarClick = async (selectedRating: number) => {
    setRating(selectedRating);

    // Logique selon la note
    if (selectedRating >= 3) {
      // Afficher le bouton "Étape suivante" pour notes 3-5
      setShowNextStepButton(true);
      setShowCommentForm(false);
    } else {
      // Afficher le formulaire de commentaire pour notes 1-2
      setShowCommentForm(true);
      setShowNextStepButton(false);
    }
  };

  const handleNextStep = () => {
    // Redirection vers Google My Business (ferme la page actuelle)
    window.location.href = googleMyBusinessUrl;
  };

  const handleCommentSubmit = async () => {
    if (!comment.trim()) return;

    setIsSubmitting(true);

    try {
      // Envoyer le commentaire à Firebase
      const response = await fetch('/api/save-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rating,
          comment: comment.trim(),
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setComment('');
      } else {
        console.error('Erreur lors de l\'envoi du commentaire');
      }
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setRating(0);
    setComment('');
    setShowCommentForm(false);
    setShowNextStepButton(false);
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          {/* Logo et titre */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-slate-900 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Image 
                src="/logo.png" 
                alt="Logo MARQUES VAZ PLACO" 
                width={64} 
                height={64} 
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Comment s'est passé votre projet ?
            </h1>
            <p className="text-gray-600">
              Votre avis nous aide à améliorer nos services
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="rating-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Système de notation par étoiles */}
                <div className="mb-8">
                  <p className="text-lg font-medium text-gray-700 mb-4">
                    Notez votre expérience
                  </p>
                  <div className="flex justify-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.button
                        key={star}
                        className="focus:outline-none"
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        onClick={() => handleStarClick(star)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Star
                          className={`w-12 h-12 transition-colors duration-200 ${
                            star <= (hoveredRating || rating)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      </motion.button>
                    ))}
                  </div>
                  {rating > 0 && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-gray-500 mt-2"
                    >
                      {rating === 1 && "Très insatisfait"}
                      {rating === 2 && "Insatisfait"}
                      {rating === 3 && "Correct"}
                      {rating === 4 && "Satisfait"}
                      {rating === 5 && "Très satisfait"}
                    </motion.p>
                  )}
                </div>

                {/* Bouton Étape suivante pour les notes positives */}
                <AnimatePresence>
                  {showNextStepButton && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="text-center">
                        <p className="text-lg font-medium text-gray-700 mb-2">
                          Merci pour votre évaluation !
                        </p>
                        <p className="text-sm text-gray-600 mb-6">
                          {rating === 5 
                            ? "Votre avis nous fait très plaisir ! Partagez votre expérience avec d'autres clients."
                            : "Votre retour positif nous encourage ! Aidez d'autres clients à nous découvrir."
                          }
                        </p>
                        <Button
                          onClick={handleNextStep}
                          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium"
                          size="lg"
                        >
                          Étape suivante →
                        </Button>
                        <p className="text-xs text-gray-500 mt-3">
                          Vous serez redirigé vers Google pour laisser votre avis
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Formulaire de commentaire pour les notes faibles */}
                <AnimatePresence>
                  {showCommentForm && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div>
                        <p className="text-lg font-medium text-gray-700 mb-3">
                          Aidez-nous à nous améliorer
                        </p>
                        <p className="text-sm text-gray-600 mb-4">
                          Vos commentaires nous permettront de mieux vous servir à l'avenir
                        </p>
                        <textarea
                          placeholder="Décrivez ce qui n'a pas fonctionné selon vous..."
                          value={comment}
                          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value)}
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                          maxLength={500}
                        />
                        <p className="text-xs text-gray-400 mt-1">
                          {comment.length}/500 caractères
                        </p>
                      </div>

                      <div className="flex space-x-3">
                        <Button
                          variant="outline"
                          onClick={resetForm}
                          className="flex-1"
                        >
                          Annuler
                        </Button>
                        <Button
                          onClick={handleCommentSubmit}
                          disabled={!comment.trim() || isSubmitting}
                          className="flex-1 bg-orange-500 hover:bg-orange-600"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center space-x-2">
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>Envoi...</span>
                            </div>
                          ) : (
                            <div className="flex items-center space-x-2">
                              <Send className="w-4 h-4" />
                              <span>Envoyer</span>
                            </div>
                          )}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ThumbsUp className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Merci pour votre retour !
                </h2>
                <p className="text-gray-600 mb-6">
                  Votre commentaire a été transmis à notre équipe.
                  Nous vous recontacterons rapidement.
                </p>
                <Button
                  onClick={resetForm}
                  variant="outline"
                  className="mx-auto"
                >
                  Donner un autre avis
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Footer discret */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-6"
        >
          <p className="text-sm text-gray-500">
            MARQUES VAZ PLACO - Spécialiste Plaquiste
          </p>
        </motion.div>
      </div>
    </div>
  );
}
