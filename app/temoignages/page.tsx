import CTASection from "@/components/CTASection";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";

// Les témoignages classés par profil
const temoignagesData = [
  {
    profil: "Lycéens & Bacheliers",
    description:
      "Ils viennent d'obtenir leur bac et ont intégré leur école de rêve.",
    items: [
      {
        id: 1,
        nom: "Aminata K.",
        ecole: "ESCP Business School",
        annee: "Admise en 2024",
        citation:
          "Je ne savais pas par où commencer. L'équipe de Premium Consulting a structuré mon dossier, m'a préparée à l'entretien Campus France et aujourd'hui je suis à Paris. Leur suivi est exceptionnel.",
        image: "/images/temoignages/tm1.jpg",
      },
    ],
  },
  {
    profil: "Étudiants en Licence / BTS",
    description:
      "Ils ont poursuivi leurs études en France pour se spécialiser.",
    items: [
      {
        id: 2,
        nom: "Yao M.",
        ecole: "EPITA",
        annee: "Admis en 2023",
        citation:
          "Le plus dur pour moi, c'était le visa. J'avais peur du refus. Grâce à leurs conseils sur le dossier financier et la simulation d'entretien, tout s'est très bien passé. Je recommande vivement.",
        image: "/images/temoignages/tm3.jpg",
      },
    ],
  },
  {
    profil: "Parents",
    description:
      "Ils ont fait confiance à notre cabinet pour accompagner leur enfant.",
    items: [
      {
        id: 3,
        nom: "Fatou D.",
        ecole: "Université Paris 1",
        annee: "Maman de Fatou, admise en 2024",
        citation:
          "En tant que parent, je voulais être sûre que ma fille serait bien encadrée. Le cabinet a été transparent sur les tarifs et très rassurant sur la sécurité à Paris. L'accueil à l'aéroport a été la cerise sur le gâteau.",
        image: "/images/temoignages/tm2.jpg",
      },
    ],
  },
];

export default function TemoignagesPage() {
  return (
    <div className="w-full">
      {/* En-tête */}
      <section className="max-w-4xl mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24 text-center">
        <FadeIn>
          <span className="text-accent text-sm font-medium uppercase tracking-widest block mb-4">
            Parcours d’étudiants
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-marine mb-6 leading-tight">
            Ils ont fait le grand saut. <br className="hidden md:block" /> Et
            vous ?
          </h1>
          <p className="text-lg md:text-xl text-marine/80 max-w-2xl mx-auto">
            Découvrez les histoires de ceux que nous avons accompagnés d’Abidjan
            jusqu’à leur installation en France.
          </p>
        </FadeIn>
      </section>

      {/* Liste des témoignages par catégorie */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="space-y-32">
          {temoignagesData.map((categorie, catIndex) => (
            <div key={catIndex}>
              {/* Titre de la catégorie */}
              <FadeIn>
                <div className="mb-12 border-b border-ligne pb-6">
                  <h2 className="text-3xl md:text-4xl font-serif text-marine mb-2">
                    {categorie.profil}
                  </h2>
                  <p className="text-marine/70">{categorie.description}</p>
                </div>
              </FadeIn>

              {/* Témoignages de la catégorie */}
              <div className="space-y-24">
                {categorie.items.map((item, index) => (
                  <FadeIn key={item.id} delay={index * 150}>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
                      <div
                        className={`md:col-span-5 ${index % 2 !== 0 ? "md:order-last" : ""}`}
                      >
                        <div className="aspect-4/5 bg-secondaire border border-ligne relative overflow-hidden group rounded-lg">
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
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-marine py-20 text-center">
        <FadeIn>
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif text-fond mb-6">
              Et si c&apos;était votre tour ?
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
      <CTASection />
    </div>
  );
}
