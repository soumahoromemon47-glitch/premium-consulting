"use client";

import { useState } from "react";

export default function RendezVousPage() {
  const [typeRdv, setTypeRdv] = useState("visio");
  const [creneauSelectionne, setCreneauSelectionne] = useState("");

  // Simulation de créneaux disponibles
  const creneaux = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* En-tête */}
      <div className="max-w-2xl mb-12 text-center mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-marine mb-6">
          Prenez rendez-vous avec notre équipe.
        </h1>
        <p className="text-lg text-marine/70 leading-relaxed">
          Choisissez le format qui vous convient. Tous les horaires sont
          affichés à l’heure d’Abidjan (GMT).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Colonne de gauche : Options de RDV */}
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h2 className="text-xl font-serif text-marine mb-4">
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
                { id: "agence", titre: "À l’agence", desc: "Abidjan, Cocody" },
              ].map((option) => (
                <label
                  key={option.id}
                  className={`block p-4 border rounded-lg cursor-pointer transition-colors ${
                    typeRdv === option.id
                      ? "border-accent bg-accent/5"
                      : "border-ligne hover:border-marine/30"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <input
                      type="radio"
                      name="typeRdv"
                      value={option.id}
                      checked={typeRdv === option.id}
                      onChange={(e) => setTypeRdv(e.target.value)}
                      className="accent-accent"
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

          <div>
            <h2 className="text-xl font-serif text-marine mb-4">
              2. Vos coordonnées
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nom complet"
                className="w-full p-3 border border-ligne rounded-lg focus:outline-none focus:border-accent bg-white"
              />
              <input
                type="email"
                placeholder="Adresse e-mail"
                className="w-full p-3 border border-ligne rounded-lg focus:outline-none focus:border-accent bg-white"
              />
              <input
                type="tel"
                placeholder="Numéro WhatsApp"
                className="w-full p-3 border border-ligne rounded-lg focus:outline-none focus:border-accent bg-white"
              />
            </div>
          </div>
        </div>

        {/* Colonne de droite : Calendrier simulé */}
        <div className="lg:col-span-2">
          <div className="border border-ligne bg-white p-8 rounded-lg h-full flex flex-col">
            <h2 className="text-xl font-serif text-marine mb-6">
              3. Choisissez un créneau
            </h2>

            {/* Simulation des jours */}
            <div className="grid grid-cols-4 gap-2 mb-8">
              {["Lun 02", "Mar 03", "Mer 04", "Jeu 05"].map((jour, index) => (
                <button
                  key={jour}
                  className={`py-3 text-center text-sm font-medium border rounded-lg transition-colors ${
                    index === 0
                      ? "bg-marine text-fond border-marine"
                      : "border-ligne text-marine hover:border-marine/30"
                  }`}
                >
                  {jour}
                </button>
              ))}
            </div>

            {/* Simulation des heures */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {creneaux.map((heure) => (
                <button
                  key={heure}
                  onClick={() => setCreneauSelectionne(heure)}
                  className={`py-3 text-center text-sm font-medium border rounded-lg transition-colors ${
                    creneauSelectionne === heure
                      ? "bg-accent text-white border-accent"
                      : "border-ligne text-marine hover:border-accent hover:text-accent"
                  }`}
                >
                  {heure}
                </button>
              ))}
            </div>

            {/* Bouton de confirmation */}
            <div className="mt-auto pt-6 border-t border-ligne">
              <p className="text-sm text-marine/60 mb-4">
                Un rappel vous sera envoyé par e-mail et WhatsApp dès la
                confirmation.
              </p>
              <button
                disabled={!creneauSelectionne}
                className={`w-full py-4 text-center font-medium rounded-lg transition-all ${
                  creneauSelectionne
                    ? "bg-accent text-white hover:opacity-90"
                    : "bg-ligne text-marine/40 cursor-not-allowed"
                }`}
              >
                {creneauSelectionne
                  ? `Confirmer le RDV à ${creneauSelectionne}`
                  : "Sélectionnez un créneau"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
