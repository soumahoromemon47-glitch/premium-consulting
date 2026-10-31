"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const faqData = [
  {
    theme: "Procédure & Admission",
    questions: [
      {
        q: "Quand dois-je commencer ma procédure Campus France ?",
        r: "La plateforme Études en France ouvre généralement en octobre/novembre pour une rentrée en septembre de l'année suivante. Nous recommandons de commencer la constitution du dossier dès l'ouverture pour maximiser vos chances.",
      },
      {
        q: "Puis-je postuler si j'ai des notes moyennes au bac ?",
        r: "Oui, chaque dossier est unique. Nous analysons votre profil global (notes, motivation, projet d'études) pour vous orienter vers des établissements où vous avez le plus de chances d'être admis.",
      },
    ],
  },
  {
    theme: "Visa & Finances",
    questions: [
      {
        q: "Le cabinet garantit-il l'obtention du visa ?",
        r: "Non. La décision finale revient exclusivement au consulat de France. Cependant, nous vous accompagnons dans la préparation rigoureuse de votre dossier pour mettre toutes les chances de votre côté.",
      },
      {
        q: "De combien d'argent faut-il justifier pour le visa ?",
        r: "Le consulat demande généralement de justifier d'environ 615 € par mois pour couvrir vos frais de subsistance. Nous vous aidons à préparer les documents nécessaires (attestation de prise en charge, relevés bancaires, etc.).",
      },
    ],
  },
  {
    theme: "Logement & Installation",
    questions: [
      {
        q: "Est-il difficile de trouver un logement à Paris ?",
        r: "Oui, le marché est tendu. C'est pourquoi nous proposons un accompagnement dédié dans notre Pack Premium. Nous vous aidons à trouver un logement et à constituer le dossier de garantie.",
      },
      {
        q: "Comment se passe l'accueil à l'aéroport ?",
        r: "Si vous optez pour le Pack Premium, un membre de notre équipe vous accueille à l'aéroport, vous accompagne jusqu'à votre logement et vous aide pour vos premières démarches (carte de transport, forfait mobile).",
      },
    ],
  },
];

export default function FaqPage() {
  const [recherche, setRecherche] = useState("");

  const resultats = faqData
    .map((categorie) => {
      const questionsFiltrees = categorie.questions.filter(
        (item) =>
          item.q.toLowerCase().includes(recherche.toLowerCase()) ||
          item.r.toLowerCase().includes(recherche.toLowerCase()),
      );
      return { ...categorie, questions: questionsFiltrees };
    })
    .filter((categorie) => categorie.questions.length > 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <FadeIn>
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-widest block mb-4">
            Aide & Support
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-marine mb-6 leading-tight">
            Questions fréquentes
          </h1>
          <p className="text-lg text-marine/70 max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos questions concernant les
            études en France.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="mb-16 relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Rechercher (ex: visa, logement, argent)..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            className="w-full p-4 pl-12 border-b-2 border-ligne focus:border-accent bg-transparent text-marine text-lg focus:outline-none transition-colors placeholder:text-marine/40"
          />
          <svg
            className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 text-marine/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </FadeIn>

      <div className="space-y-16 max-w-3xl mx-auto">
        {resultats.length > 0 ? (
          resultats.map((categorie, index) => (
            <FadeIn key={categorie.theme} delay={index * 100}>
              <div>
                <h2 className="text-2xl font-serif text-marine mb-8 pb-4 border-b border-ligne">
                  {categorie.theme}
                </h2>
                <div className="space-y-8">
                  {categorie.questions.map((item, i) => (
                    <div key={i} className="group">
                      <h3 className="font-medium text-marine mb-3 text-lg group-hover:text-accent transition-colors">
                        {item.q}
                      </h3>
                      <p className="text-marine/70 leading-relaxed">{item.r}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))
        ) : (
          <FadeIn>
            <div className="text-center py-20 bg-secondaire/30 border border-ligne rounded-lg">
              <p className="text-marine/60 mb-4 text-lg">
                Aucune réponse trouvée pour « {recherche} »
              </p>
              <Link
                href="/contact"
                className="text-accent font-medium hover:underline"
              >
                Contactez-nous directement
              </Link>
            </div>
          </FadeIn>
        )}
      </div>

      <FadeIn delay={200}>
        <div className="mt-24 pt-12 border-t border-ligne text-center">
          <h2 className="text-2xl font-serif text-marine mb-3">
            Vous ne trouvez pas votre réponse ?
          </h2>
          <p className="text-marine/70 mb-8">
            Notre équipe est disponible pour répondre à toutes vos questions
            spécifiques.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 border border-marine text-marine px-8 py-3 font-medium hover:bg-marine hover:text-fond active:scale-[0.98] transition-all duration-300 rounded-lg"
          >
            Poser une question
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
