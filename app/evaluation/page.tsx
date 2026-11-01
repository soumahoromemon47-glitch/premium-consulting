"use client";

import { useState } from "react";
import Link from "next/link";

export default function EvaluationPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    niveau: "",
    filiere: "",
    annee: "",
    budget: "",
    nom: "",
    email: "",
    whatsapp: "",
  });

  // ⚠️ REMPLACE CETTE URL PAR CELLE DE TON FORMSPREE (Évaluation)
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbggawdl";

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch {
      alert("Erreur de connexion. Veuillez vérifier votre réseau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Écran de succès
  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-serif text-marine mb-6">
          Demande envoyée !
        </h1>
        <p className="text-lg text-marine/80 mb-8">
          Merci {formData.nom}. Votre profil a bien été enregistré. Un
          conseiller vous contactera sous 24h ouvrées.
        </p>
        <Link
          href="/"
          className="inline-block bg-marine text-fond px-8 py-4 font-medium hover:bg-opacity-90 transition-all rounded-lg"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      {/* Barre de progression */}
      <div className="mb-12">
        <div className="flex justify-between text-sm font-medium mb-2 text-marine/60">
          <span>Étape {step} sur 5</span>
          <span>{Math.round((step / 5) * 100)}%</span>
        </div>
        <div className="w-full bg-ligne h-2 rounded-sm">
          <div
            className="bg-accent h-2 rounded-sm transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* ÉTAPE 1 */}
        {step === 1 && (
          <div className="space-y-6">
            <h1 className="text-3xl font-serif text-marine mb-2">
              Quel est votre niveau actuel ?
            </h1>
            <p className="text-marine/80 mb-6">
              Cela nous aidera à déterminer la meilleure procédure pour vous.
            </p>

            <div className="space-y-4">
              {["Lycéen / Bachelier", "Étudiant en Licence / BTS", "Autre"].map(
                (option) => (
                  <label
                    key={option}
                    className={`block p-4 border rounded-lg cursor-pointer transition-colors ${formData.niveau === option ? "border-accent bg-accent/5" : "border-ligne hover:border-marine/30"}`}
                  >
                    <input
                      type="radio"
                      name="niveau"
                      value={option}
                      checked={formData.niveau === option}
                      onChange={handleChange}
                      className="mr-3 accent-accent"
                    />
                    {option}
                  </label>
                ),
              )}
            </div>
          </div>
        )}

        {/* ÉTAPE 2 */}
        {step === 2 && (
          <div className="space-y-6">
            <h1 className="text-3xl font-serif text-marine mb-2">
              Quelle filière visez-vous ?
            </h1>
            <p className="text-marine/80 mb-6">
              Sélectionnez le domaine qui vous intéresse.
            </p>
            <select
              name="filiere"
              value={formData.filiere}
              onChange={handleChange}
              className="w-full p-4 border border-ligne rounded-lg bg-white focus:outline-none focus:border-accent"
            >
              <option value="">Sélectionnez une filière</option>
              <option value="commerce">Commerce / Gestion</option>
              <option value="informatique">Informatique / Tech</option>
              <option value="communication">Communication / Marketing</option>
              <option value="sante">Santé</option>
              <option value="architecture">Architecture</option>
            </select>
          </div>
        )}

        {/* ÉTAPE 3 */}
        {step === 3 && (
          <div className="space-y-6">
            <h1 className="text-3xl font-serif text-marine mb-2">
              Pour quelle année de départ ?
            </h1>
            <div className="space-y-4">
              {["Rentrée 2026", "Rentrée 2027", "Je ne sais pas encore"].map(
                (option) => (
                  <label
                    key={option}
                    className={`block p-4 border rounded-lg cursor-pointer transition-colors ${formData.annee === option ? "border-accent bg-accent/5" : "border-ligne hover:border-marine/30"}`}
                  >
                    <input
                      type="radio"
                      name="annee"
                      value={option}
                      checked={formData.annee === option}
                      onChange={handleChange}
                      className="mr-3 accent-accent"
                    />
                    {option}
                  </label>
                ),
              )}
            </div>
          </div>
        )}

        {/* ÉTAPE 4 */}
        {step === 4 && (
          <div className="space-y-6">
            <h1 className="text-3xl font-serif text-marine mb-2">
              Quel est votre budget indicatif annuel ?
            </h1>
            <p className="text-marine/80 mb-6">
              Pour l&apos;ensemble des frais (école, logement, vie sur place).
            </p>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full p-4 border border-ligne rounded-lg bg-white focus:outline-none focus:border-accent"
            >
              <option value="">Sélectionnez une fourchette</option>
              <option value="moins10k">Moins de 10 000 € / an</option>
              <option value="10k-15k">Entre 10 000 € et 15 000 € / an</option>
              <option value="plus15k">Plus de 15 000 € / an</option>
            </select>
          </div>
        )}

        {/* ÉTAPE 5 */}
        {step === 5 && (
          <div className="space-y-6">
            <h1 className="text-3xl font-serif text-marine mb-2">
              Vos coordonnées
            </h1>
            <p className="text-marine/80 mb-6">
              Pour recevoir votre évaluation et être recontacté.
            </p>
            <div className="space-y-4">
              <input
                type="text"
                name="nom"
                placeholder="Nom complet"
                required
                value={formData.nom}
                onChange={handleChange}
                className="w-full p-4 border border-ligne rounded-lg focus:outline-none focus:border-accent"
              />
              <input
                type="email"
                name="email"
                placeholder="Adresse e-mail"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-ligne rounded-lg focus:outline-none focus:border-accent"
              />
              <input
                type="tel"
                name="whatsapp"
                placeholder="Numéro WhatsApp"
                required
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full p-4 border border-ligne rounded-lg focus:outline-none focus:border-accent"
              />
            </div>
            <div className="flex items-start gap-3 mt-4">
              <input type="checkbox" required className="mt-1 accent-accent" />
              <p className="text-sm text-marine/60 leading-tight">
                J&apos;accepte que Premium Consulting utilise ces informations
                pour me contacter dans le cadre de mon projet d&apos;études.
              </p>
            </div>
          </div>
        )}

        {/* BOUTONS DE NAVIGATION */}
        <div className="flex justify-between pt-8 border-t border-ligne mt-8">
          {step > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="text-marine/60 hover:text-marine font-medium px-4 py-2 transition-colors"
            >
              ← Retour
            </button>
          ) : (
            <div></div>
          )}

          {step < 5 ? (
            <button
              type="button"
              onClick={nextStep}
              className="bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-[#b03d27] active:scale-[0.98] transition-all"
            >
              Continuer
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-marine text-fond px-8 py-3 rounded-lg font-medium hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-70"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer mon dossier"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
