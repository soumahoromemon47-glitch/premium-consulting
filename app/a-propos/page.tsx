import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function AProposPage() {
  const equipe = [
    {
      nom: "Soumahoro Memon",
      role: "Fondateur & Directeur",
      bio: "Expert en orientation internationale, il accompagne les étudiants ivoiriens depuis 2016.",
      image: "/images/equipe/dg.jpg",
    },
    {
      nom: "Nom du Conseiller",
      role: "Conseiller Pédagogique",
      bio: "Spécialiste des procédures Campus France et Parcoursup, il optimise chaque dossier.",
      image: "/images/equipe/cp.jpg",
    },
    {
      nom: "Nom de la Conseillère",
      role: "Responsable Logement & Installation",
      bio: "Basée à Paris, elle accueille les étudiants et les aide à s’installer sereinement.",
      image: "/images/equipe/cc.jpg",
    },
  ];

  return (
    <div className="w-full">
      <section className="max-w-4xl mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24 text-center">
        <FadeIn>
          <span className="text-accent text-sm font-medium uppercase tracking-widest block mb-4">
            Depuis 2016
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-marine mb-8 leading-tight">
            Nous ouvrons les portes des meilleures écoles françaises aux
            étudiants ivoiriens.
          </h1>
          <p className="text-lg md:text-xl text-marine/70 leading-relaxed max-w-3xl mx-auto">
            Premium Consulting est né d’un constat simple : le passage d’Abidjan
            à Paris est un parcours semé d’embûches administratives. Depuis
            2016, notre mission est de transformer cette complexité en une
            procédure claire, humaine et sécurisée pour vous et vos parents.
          </p>
        </FadeIn>
      </section>

      <section className="border-y border-ligne bg-fond">
        <FadeIn>
          <div className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="border-b md:border-b-0 md:border-r border-ligne pb-10 md:pb-0 md:pr-10 hover:bg-white/50 transition-colors duration-300">
              <h2 className="text-2xl font-serif text-marine mb-4">Rigueur</h2>
              <p className="text-marine/70 text-sm leading-relaxed">
                Chaque dossier est unique. Nous l’analysons avec une précision
                extrême pour maximiser vos chances de succès, sans jamais faire
                de fausses promesses.
              </p>
            </div>
            <div className="border-b md:border-b-0 md:border-r border-ligne py-10 md:py-0 md:px-10 hover:bg-white/50 transition-colors duration-300">
              <h2 className="text-2xl font-serif text-marine mb-4">
                Transparence
              </h2>
              <p className="text-marine/70 text-sm leading-relaxed">
                Pas de frais cachés. Nous vous disons exactement ce qui est
                inclus dans nos formules et ce qui reste à votre charge.
              </p>
            </div>
            <div className="pt-10 md:pt-0 md:pl-10 hover:bg-white/50 transition-colors duration-300">
              <h2 className="text-2xl font-serif text-marine mb-4">
                Accompagnement
              </h2>
              <p className="text-marine/70 text-sm leading-relaxed">
                Nous ne vous laissons pas tomber après l’admission. De l’analyse
                du dossier jusqu’à votre installation à Paris, nous sommes
                présents.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-24">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-marine mb-4">
              L’équipe
            </h2>
            <p className="text-marine/60">
              Des professionnels engagés à vos côtés.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {equipe.map((membre, index) => (
            <FadeIn key={index} delay={index * 150}>
              <div className="group">
                {/* C'est la classe "md:grayscale" qui limite le noir et blanc aux ordinateurs */}
                <div className="aspect-4/5 bg-secondaire border border-ligne mb-6 overflow-hidden relative transition-all duration-700 md:grayscale md:group-hover:grayscale-0">
                  <Image
                    src={membre.image}
                    alt={`Portrait de ${membre.nom}`}
                    fill
                    className="object-cover w-full h-full transition-transform duration-700 md:group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-serif text-marine mb-1">
                  {membre.nom}
                </h3>
                <p className="text-accent text-sm font-medium uppercase tracking-wider mb-3">
                  {membre.role}
                </p>
                <p className="text-marine/70 text-sm leading-relaxed">
                  {membre.bio}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <FadeIn>
        <section className="max-w-4xl mx-auto px-4 py-16 text-center border-t border-ligne">
          <p className="text-sm text-marine/50 leading-relaxed">
            Premium Consulting est un cabinet de conseil en orientation
            académique enregistré en Côte d’Ivoire.{" "}
            <br className="hidden md:block" /> Raison sociale : [À compléter] —
            Numéro d’immatriculation : [À compléter] — Siège social : Abidjan,
            Cocody.
          </p>
        </section>
      </FadeIn>

      <section className="bg-marine py-20 text-center">
        <FadeIn>
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif text-fond mb-6">
              Confiez-nous votre projet.
            </h2>
            <p className="text-fond/70 mb-10 max-w-xl mx-auto">
              Discutons de votre avenir. Notre équipe est à votre écoute pour
              vous guider vers la bonne direction.
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
