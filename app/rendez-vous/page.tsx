"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function RendezVousPage() {
  const [typeRdv, setTypeRdv] = useState("visio");
  const [jourSelectionne, setJourSelectionne] = useState("");
  const [creneauSelectionne, setCreneauSelectionne] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Simulation de jours disponibles
  const jours = [
    { date: "Lun 02", dispo: true },
    { date: "Mar 03", dispo: true },
    { date: "Mer 04", dispo: false }, // Indisponible
    { date: "Jeu 05", dispo: true },
    { date: "Ven 06", dispo: true },
  ];

  // Simulation de créneaux horaires
  const creneaux = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (jourSelectionne && creneauSelectionne) {
      setIsSubmitted(true);
    }
  };

  // ÉCRAN DE CONFIRMATION (Si le formulaire est validé)
  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <FadeIn>
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
          <h1 className="text-4xl md:text-5xl font-serif text-marine mb-6">
            Rendez-vous confirmé !
          </h1>
          <p className="text-lg text-marine/80 mb-8">
            Votre rendez-vous est prévu le <strong>{jourSelectionne}</strong> à{" "}
            <strong>{creneauSelectionne}</strong> (Heure d’Abidjan).
          </p>
          <div className="bg-secondaire/50 border border-ligne p-6 rounded-lg mb-8 text-left max-w-md mx-auto">
            <p className="text-sm text-marine/70 mb-2">
              <strong>Format :</strong>{" "}
              {typeRdv === "visio"
                ? "Visio-conférence (lien envoyé par email)"
                : typeRdv === "telephone"
                  ? "Appel téléphonique"
                  : "À l’agence (Abidjan)"}
            </p>
            <p className="text-sm text-marine/70">
              <strong>Rappel :</strong> Un e-mail de confirmation vient de vous
              être envoyé. Vous recevrez également un rappel par WhatsApp la
              veille.
            </p>
          </div>
          <Link
            href="/"
            className="inline-block bg-marine text-fond px-8 py-4 font-medium hover:bg-opacity-90 transition-all rounded-lg"
          >
            Retour à l’accueil
          </Link>
        </FadeIn>
      </div>
    );
  }

  // ÉCRAN DE PRISE DE RENDEZ-VOUS
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <FadeIn>
        <div className="max-w-3xl mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-widest block mb-4">
            Consultation
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-marine mb-6 leading-tight">
            Prenez rendez-vous.
          </h1>
          <p className="text-lg md:text-xl text-marine/80 leading-relaxed">
            Choisissez le format qui vous convient. Tous les horaires sont
            affichés à <strong>l’heure d’Abidjan (GMT)</strong>.
          </p>
        </div>
      </FadeIn>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
      >
        {/* Colonne de gauche : Format + Coordonnées */}
        <div className="lg:col-span-5 space-y-10">
          {/* 1. Format */}
          <FadeIn delay={100}>
            <div>
              <h2 className="text-2xl font-serif text-marine mb-6 pb-2 border-b border-ligne">
                1. Format de l’entretien
              </h2>
              <div className="space-y-3">
                {[
                  {
                    id: "visio",
                    titre: "Visio-conférence",
                    desc: "Via Google Meet ou Zoom",
                  },
                  {
                    id: "telephone",
                    titre: "Par téléphone",
                    desc: "Nous vous appelons",
                  },
                  {
                    id: "agence",
                    titre: "À l’agence",
                    desc: "Abidjan, Cocody",
                  },
                ].map((option) => (
                  <label
                    key={option.id}
                    className={`block p-4 border cursor-pointer transition-all duration-300 rounded-lg ${
                      typeRdv === option.id
                        ? "border-accent bg-accent/5 ring-1 ring-accent"
                        : "border-ligne hover:border-marine/40"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <input
                        type="radio"
                        name="typeRdv"
                        value={option.id}
                        checked={typeRdv === option.id}
                        onChange={(e) => setTypeRdv(e.target.value)}
                        className="accent-accent w-4 h-4"
                      />
                      <span className="font-medium text-marine">
                        {option.titre}
                      </span>
                    </div>
                    <p className="text-xs text-marine/60 pl-7">{option.desc}</p>
                  </label>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 2. Coordonnées */}
          <FadeIn delay={200}>
            <div>
              <h2 className="text-2xl font-serif text-marine mb-6 pb-2 border-b border-ligne">
                2. Vos coordonnées
              </h2>
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="nom"
                    className="block text-sm font-medium text-marine mb-1"
                  >
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="nom"
                    required
                    className="w-full p-3 bg-transparent border-b border-ligne focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-marine mb-1"
                  >
                    Adresse e-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full p-3 bg-transparent border-b border-ligne focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="whatsapp"
                    className="block text-sm font-medium text-marine mb-1"
                  >
                    Numéro WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    required
                    className="w-full p-3 bg-transparent border-b border-ligne focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Colonne de droite : Calendrier et Créneaux */}
        <div className="lg:col-span-7">
          <FadeIn delay={300}>
            <div className="border border-ligne bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-serif text-marine mb-6 pb-2 border-b border-ligne">
                3. Choisissez un créneau
              </h2>

              {/* Sélection des jours */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-8">
                {jours.map((jour) => (
                  <button
                    key={jour.date}
                    type="button"
                    disabled={!jour.dispo}
                    onClick={() => setJourSelectionne(jour.date)}
                    className={`py-3 text-center text-sm font-medium border rounded-lg transition-all duration-300 ${
                      !jour.dispo
                        ? "bg-secondaire/50 text-marine/30 cursor-not-allowed border-transparent"
                        : jourSelectionne === jour.date
                          ? "bg-marine text-fond border-marine shadow-md"
                          : "border-ligne text-marine hover:border-marine/40"
                    }`}
                  >
                    {jour.date}
                  </button>
                ))}
              </div>

              {/* Sélection des heures */}
              {jourSelectionne ? (
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {creneaux.map((heure) => (
                    <button
                      key={heure}
                      type="button"
                      onClick={() => setCreneauSelectionne(heure)}
                      className={`py-3 text-center text-sm font-medium border rounded-lg transition-all duration-300 ${
                        creneauSelectionne === heure
                          ? "bg-accent text-white border-accent shadow-md"
                          : "border-ligne text-marine hover:border-accent hover:text-accent"
                      }`}
                    >
                      {heure}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-marine/50 text-sm italic mb-8 bg-secondaire/20 rounded-lg">
                  Veuillez d’abord sélectionner un jour.
                </div>
              )}

              {/* Bouton de confirmation */}
              <div className="pt-6 border-t border-ligne">
                <p className="text-xs text-marine/60 mb-4 text-center">
                  Un rappel vous sera envoyé par e-mail et WhatsApp dès la
                  confirmation.
                </p>
                <button
                  type="submit"
                  disabled={!jourSelectionne || !creneauSelectionne}
                  className={`w-full py-4 text-center font-medium rounded-lg transition-all duration-300 ${
                    jourSelectionne && creneauSelectionne
                      ? "bg-accent text-white hover:bg-[#b03d27] shadow-lg shadow-accent/20 active:scale-[0.98]"
                      : "bg-ligne text-marine/40 cursor-not-allowed"
                  }`}
                >
                  {jourSelectionne && creneauSelectionne
                    ? `Confirmer le RDV (${jourSelectionne} à ${creneauSelectionne})`
                    : "Sélectionnez un jour et une heure"}
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </form>
    </div>
  );
}
