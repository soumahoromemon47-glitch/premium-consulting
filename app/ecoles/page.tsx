"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const ecolesData = [
  {
    id: 1,
    nom: "ESCP Business School",
    domaine: "Commerce",
    ville: "Paris",
    logo: "/images/ecoles/escp.jpg",
  },
  {
    id: 2,
    nom: "EM Lyon",
    domaine: "Commerce",
    ville: "Lyon",
    logo: "/images/ecoles/em-lyon.jpg",
  },
  {
    id: 3,
    nom: "EPITA",
    domaine: "Informatique",
    ville: "Paris",
    logo: "/images/ecoles/epita.jpg",
  },
  {
    id: 4,
    nom: "42",
    domaine: "Informatique",
    ville: "Paris",
    logo: "/images/ecoles/42.png",
  },
  {
    id: 5,
    nom: "CELSA",
    domaine: "Communication",
    ville: "Paris",
    logo: "/images/ecoles/celsa.png",
  },
  {
    id: 6,
    nom: "Sciences Po",
    domaine: "Sciences Politiques",
    ville: "Paris",
    logo: "/images/ecoles/sciences-po.png",
  },
];

const domaines = [
  "Toutes",
  "Commerce",
  "Informatique",
  "Communication",
  "Sciences Politiques",
];

export default function EcolesPage() {
  const [filtreActif, setFiltreActif] = useState("Toutes");

  const ecolesFiltrees = ecolesData.filter(
    (ecole) => filtreActif === "Toutes" || ecole.domaine === filtreActif,
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div className="max-w-3xl">
            <span className="text-accent text-sm font-medium uppercase tracking-widest block mb-4">
              Notre réseau
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-marine mb-6 leading-tight">
              Les meilleures écoles françaises, à votre portée.
            </h1>
            <p className="text-lg md:text-xl text-marine/80 leading-relaxed">
              Nous avons sélectionné plus de 30 établissements partenaires.
              Découvrez ceux qui correspondent à votre profil et à vos
              ambitions.
            </p>
          </div>
          <div className="relative aspect-4/3 lg:aspect-square bg-secondaire border border-ligne rounded-lg overflow-hidden">
            <Image
              src="/images/pages/ecoles-hero.jpg" // <-- Ton image ici
              alt="Campus universitaire en France"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="flex flex-wrap gap-x-8 gap-y-4 mb-12 border-b border-ligne pb-4">
          {domaines.map((domaine) => (
            <button
              key={domaine}
              onClick={() => setFiltreActif(domaine)}
              className={`text-sm font-medium pb-4 -mb-4 transition-colors border-b-2 ${
                filtreActif === domaine
                  ? "border-marine text-marine"
                  : "border-transparent text-marine/50 hover:text-marine"
              }`}
            >
              {domaine}
            </button>
          ))}
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ecolesFiltrees.map((ecole, index) => (
          <FadeIn key={ecole.id} delay={index * 100}>
            <div className="group border border-ligne bg-white p-8 flex flex-col justify-between hover:border-marine/40 hover:-translate-y-1 transition-all duration-300 h-full">
              <div>
                <div className="h-24 w-full mb-8 flex items-center justify-center relative transition-all duration-500 md:grayscale md:opacity-60 md:group-hover:grayscale-0 md:group-hover:opacity-100">
                  <Image
                    src={ecole.logo}
                    alt={`Logo ${ecole.nom}`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <h2 className="text-2xl font-serif text-marine mb-2">
                  {ecole.nom}
                </h2>
                <p className="text-sm text-marine/60 mb-6">{ecole.ville}</p>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-ligne/50">
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  {ecole.domaine}
                </span>
                <Link
                  href="/evaluation"
                  className="group/link text-sm font-medium text-marine hover:text-accent transition-colors flex items-center gap-1"
                >
                  S’y orienter{" "}
                  <span
                    className="group-hover/link:translate-x-1 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={200}>
        <div className="mt-24 bg-marine p-10 md:p-16 text-center rounded-lg shadow-xl shadow-marine/10">
          <h2 className="text-3xl md:text-4xl font-serif text-fond mb-4">
            Vous ne trouvez pas votre école ?
          </h2>
          <p className="text-fond/70 mb-8 max-w-xl mx-auto">
            Notre réseau compte de nombreux autres partenaires. Évaluez votre
            profil pour que nous vous orientions vers l’établissement idéal.
          </p>
          <Link
            href="/evaluation"
            className="group inline-flex items-center gap-2 bg-accent text-white px-8 py-4 font-medium hover:bg-[#b03d27] active:scale-[0.98] transition-all duration-300 rounded-lg"
          >
            Demander une orientation
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
