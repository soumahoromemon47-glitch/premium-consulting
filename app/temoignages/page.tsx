import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Témoignages d'étudiants",
  description:
    "Découvrez les parcours de nos étudiants ivoiriens admis dans les meilleures écoles françaises (ESCP, EPITA, Paris 1...).",
};

// ... le reste de tes imports

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const temoignages = [
  {
    id: 1,
    nom: "Aminata K.",
    ecole: "ESCP Business School",
    annee: "Admise en 2024",
    citation:
      "Je ne savais pas par où commencer. L’équipe de Premium Consulting a structuré mon dossier, m’a préparée à l’entretien Campus France et aujourd’hui je suis à Paris. Leur suivi est exceptionnel.",
    image: "/images/temoignages/tm4.jpg",
  },
  {
    id: 2,
    nom: "Yao M.",
    ecole: "EPITA",
    annee: "Admis en 2023",
    citation:
      "Le plus dur pour moi, c’était le visa. J’avais peur du refus. Grâce à leurs conseils sur le dossier financier et la simulation d’entretien, tout s’est très bien passé. Je recommande vivement.",
    image: "/images/temoignages/tm3.jpg",
  },
  {
    id: 3,
    nom: "Fatou D.",
    ecole: "Université Paris 1",
    annee: "Maman de Fatou, admise en 2024",
    citation:
      "En tant que parent, je voulais être sûre que ma fille serait bien encadrée. Le cabinet a été transparent sur les tarifs et très rassurant sur la sécurité à Paris. L’accueil à l’aéroport a été la cerise sur le gâteau.",
    image: "/images/temoignages/tm2.jpg",
  },
  {
    id: 4,
    nom: "Bini Deki.",
    ecole: "Université monaco 1",
    annee: "Bini Deki, admis en 2020",
    citation:
      "Agence très professionnelle et à l’écoute. Tout était bien préparé : billets, hébergement, transferts. Le suivi a été réactif pendant tout le séjour et le rapport qualité-prix est excellent. Je recommande à 100 % !",
    image: "/images/temoignages/tm1.jpg",
  },
];

export default function TemoignagesPage() {
  return (
    <div className="w-full">
      <section className="max-w-6xl mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24 text-center">
        <FadeIn>
          <span className="text-accent text-sm font-medium uppercase tracking-widest block mb-4">
            Parcours d’étudiants
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-marine mb-6 leading-tight max-w-4xl mx-auto">
            Ils ont fait le grand saut. <br className="hidden md:block" /> Et
            vous ?
          </h1>
          <p className="text-lg text-marine/70 max-w-2xl mx-auto">
            Découvrez les histoires de ceux que nous avons accompagnés d’Abidjan
            jusqu’à leur installation en France.
          </p>
        </FadeIn>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <FadeIn delay={100}>
          <div className="relative w-full h-[40vh] md:h-[60vh] bg-secondaire border border-ligne rounded-lg overflow-hidden">
            <Image
              src="/images/pages/temoignages-hero.jpg" // <-- Ton image ici
              alt="Étudiants sur le campus"
              fill
              className="object-cover object-center"
            />
          </div>
        </FadeIn>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="space-y-24 md:space-y-32">
          {temoignages.map((item, index) => (
            <FadeIn key={item.id} delay={index * 100}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
                <div
                  className={`md:col-span-5 ${index % 2 !== 0 ? "md:order-last" : ""}`}
                >
                  <div className="aspect-4/5 bg-secondaire border border-ligne relative overflow-hidden group">
                    <Image
                      src={item.image}
                      alt={`Portrait de ${item.nom}`}
                      fill
                      className="object-cover w-full h-full transition-all duration-700 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="md:col-span-7">
                  <span className="block text-7xl font-serif text-accent/20 leading-none mb-4 group-hover:text-accent/40 transition-colors duration-500">
                    «
                  </span>
                  <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-marine leading-snug mb-8">
                    {item.citation}
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-accent"></div>
                    <div>
                      <p className="font-semibold text-marine text-lg">
                        {item.nom}
                      </p>
                      <p className="text-sm text-marine/60">
                        {item.ecole} — {item.annee}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-marine py-20 text-center">
        <FadeIn>
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif text-fond mb-6">
              Et si c’était votre tour ?
            </h2>
            <p className="text-fond/70 mb-10 max-w-xl mx-auto">
              Rejoignez les étudiants que nous accompagnons chaque année vers
              les meilleures écoles françaises.
            </p>
            <Link
              href="/evaluation"
              className="group inline-flex items-center gap-2 bg-accent text-white px-8 py-4 font-medium hover:bg-[#b03d27] active:scale-[0.98] transition-all duration-300 rounded-lg"
            >
              Évaluer mon profil
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
