import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function CommentCaMarchePage() {
  const etapes = [
    {
      numero: "01",
      titre: "L’analyse de votre dossier",
      description:
        "Nous faisons le point sur votre parcours académique, vos notes, votre budget et vos ambitions. C’est le moment de définir une stratégie claire et réaliste.",
      duree: "1 à 2 semaines",
    },
    {
      numero: "02",
      titre: "Le choix des écoles",
      description:
        "Nous sélectionnons ensemble les universités et écoles qui maximisent vos chances d’admission, en fonction de votre filière et de votre profil.",
      duree: "2 à 3 semaines",
    },
    {
      numero: "03",
      titre: "La constitution du dossier",
      description:
        "Rédaction des CV, lettres de motivation, création du compte Campus France ou Parcoursup. Nous optimisons chaque pièce de votre dossier.",
      duree: "3 à 4 semaines",
    },
    {
      numero: "04",
      titre: "La procédure Visa",
      description:
        "Une fois l’admission obtenue, nous vous accompagnons pas à pas dans la préparation de votre dossier visa pour le consulat de France.",
      duree: "2 à 4 semaines",
    },
    {
      numero: "05",
      titre: "L’installation à Paris",
      description:
        "Recherche de logement, ouverture de compte bancaire, assurance, accueil à l’aéroport. Nous préparons votre arrivée pour que tout soit prêt.",
      duree: "1 mois avant le départ",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Colonne de gauche (Sticky) : Titre et Intro */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
          <FadeIn>
            <span className="text-accent text-sm font-medium uppercase tracking-widest block mb-4">
              La méthode
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-marine mb-6 leading-tight">
              De votre projet à votre installation, en 5 étapes.
            </h1>
            <p className="text-lg text-marine/80 leading-relaxed mb-8">
              Nous ne vous laissons jamais seul face aux procédures. Découvrez
              notre méthode d’accompagnement, pensée pour sécuriser votre projet
              d’études en France.
            </p>
            <Link
              href="/evaluation"
              className="group inline-flex items-center gap-2 bg-accent text-white px-8 py-4 font-medium hover:bg-[#b03d27] active:scale-[0.98] transition-all duration-300 rounded-lg"
            >
              Commencer l’étape 01
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </FadeIn>
        </div>

        {/* Colonne de droite : La frise chronologique */}
        <div className="lg:col-span-7">
          <div className="relative border-l border-ligne ml-4 md:ml-8 space-y-16 pb-12">
            {etapes.map((etape, index) => (
              // On applique un délai progressif pour chaque étape (0ms, 150ms, 300ms...)
              <FadeIn key={etape.numero} delay={index * 150}>
                <div className="relative pl-10 md:pl-16 group">
                  {/* Le grand numéro en serif (le point sur la ligne) */}
                  <div className="absolute -left-2.1rem md:-left-3.1rem top-0 bg-fond py-2 transition-transform duration-500 group-hover:scale-110 group-hover:text-accent">
                    <span className="text-4xl md:text-5xl font-serif text-marine font-semibold tracking-tighter block leading-none">
                      {etape.numero}
                    </span>
                  </div>

                  {/* Contenu de l’étape */}
                  <div className="pt-1">
                    <h2 className="text-2xl md:text-3xl font-serif text-marine mb-4 group-hover:text-accent transition-colors duration-300">
                      {etape.titre}
                    </h2>
                    <p className="text-marine/80 leading-relaxed mb-6 max-w-xl text-sm md:text-base">
                      {etape.description}
                    </p>

                    {/* Badge de durée très sobre */}
                    <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-marine/70">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      Durée indicative : {etape.duree}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Bloc CTA final */}
      <FadeIn delay={200}>
        <div className="mt-24 bg-marine p-10 md:p-16 text-center rounded-lg shadow-xl shadow-marine/10">
          <h2 className="text-3xl md:text-4xl font-serif text-fond mb-4">
            Prêt à démarrer ?
          </h2>
          <p className="text-fond/80 mb-8 max-w-xl mx-auto">
            Remplissez notre formulaire d’évaluation en 3 minutes pour que nous
            analysions votre profil et lancions l’étape 01.
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
    </div>
  );
}
