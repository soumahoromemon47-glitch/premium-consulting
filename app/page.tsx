import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Texte avec animation d’apparition immédiate */}
          <FadeIn>
            <span className="text-accent text-sm font-medium uppercase tracking-widest block mb-6">
              Cabinet d’orientation — Abidjan
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-marine">
              Votre passage vers les études en France.
            </h1>
            <p className="text-lg md:text-xl text-marine/70 mb-10 max-w-lg leading-relaxed">
              De l’admission à l’installation à Paris, nous accompagnons les
              étudiants ivoiriens avec une méthode claire, transparente et un
              suivi personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/evaluation"
                className="group bg-accent text-white px-8 py-4 text-center font-medium hover:bg-[#b03d27] active:scale-[0.98] transition-all duration-300 rounded-lg flex items-center justify-center gap-2"
              >
                Évaluer mon profil
                {/* Petite flèche qui glisse au survol */}
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
              <Link
                href="/rendez-vous"
                className="group bg-transparent border border-marine text-marine px-8 py-4 text-center font-medium hover:bg-marine hover:text-fond active:scale-[0.98] transition-all duration-300 rounded-lg flex items-center justify-center gap-2"
              >
                Prendre rendez-vous
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </div>
          </FadeIn>

          {/* Image avec un léger délai d’apparition */}
          <FadeIn delay={200}>
            <div className="relative">
              <div className="aspect-4/5 bg-secondaire border border-ligne relative overflow-hidden">
                <Image
                  src="/images/hero/etud.jpg"
                  alt="Étudiants sur le campus"
                  fill
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 -z-10"></div>
            </div>
          </FadeIn>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        </div>
      </section>

      {/* 2. LES 3 PILIERS */}
      <section className="border-y border-ligne background-color: #FAF8F4">
        <FadeIn>
          <div className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="border-b md:border-b-0 md:border-r border-ligne pb-10 md:pb-0 md:pr-10 pt-6 md:pt-0 hover:bg-white/50 transition-colors duration-300">
              <span className="block text-6xl font-serif text-marine/20 mb-4">
                01
              </span>
              <h2 className="text-2xl font-serif text-marine mb-3">
                Admission
              </h2>
              <p className="text-marine/70 text-sm leading-relaxed">
                Campus France, Parcoursup ou Grandes Écoles. Nous optimisons
                votre dossier pour maximiser vos chances.
              </p>
            </div>
            <div className="border-b md:border-b-0 md:border-r border-ligne py-10 md:py-0 md:px-10 hover:bg-white/50 transition-colors duration-300">
              <span className="block text-6xl font-serif text-marine/20 mb-4">
                02
              </span>
              <h2 className="text-2xl font-serif text-marine mb-3">Visa</h2>
              <p className="text-marine/70 text-sm leading-relaxed">
                Préparation rigoureuse de votre dossier visa. Nous vous guidons
                pas à pas jusqu’à l’obtention.
              </p>
            </div>
            <div className="pt-10 md:pt-0 md:pl-10 hover:bg-white/50 transition-colors duration-300">
              <span className="block text-6xl font-serif text-marine/20 mb-4">
                03
              </span>
              <h2 className="text-2xl font-serif text-marine mb-3">
                Installation
              </h2>
              <p className="text-marine/70 text-sm leading-relaxed">
                Logement, banque, assurance, accueil à l’aéroport. Vous arrivez
                à Paris sereinement.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 3. LES CHIFFRES CLÉS */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <p className="text-5xl md:text-6xl font-serif text-marine mb-2">
                2016
              </p>
              <p className="text-sm font-medium text-marine/60 uppercase tracking-wider">
                Année de création
              </p>
            </div>
            <div className="md:border-l md:border-ligne md:pl-12">
              <p className="text-5xl md:text-6xl font-serif text-marine mb-2">
                30+
              </p>
              <p className="text-sm font-medium text-marine/60 uppercase tracking-wider">
                Écoles partenaires
              </p>
            </div>
            <div className="md:border-l md:border-ligne md:pl-12">
              <p className="text-5xl md:text-6xl font-serif text-marine mb-2">
                100%
              </p>
              <p className="text-sm font-medium text-marine/60 uppercase tracking-wider">
                Dossiers accompagnés
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 4. TÉMOIGNAGE */}
      <section className="bg-secondaire/40 border-y border-ligne py-20">
        <FadeIn>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="block text-6xl font-serif text-accent/30 leading-none mb-4">
              «
            </span>
            <blockquote className="text-2xl md:text-3xl font-serif text-marine leading-snug mb-8">
              Grâce à Premium Consulting, j’ai pu intégrer mon école de commerce
              à Paris. Leur suivi pour le visa et le logement a été impeccable.
              Je recommande à 100%.
            </blockquote>
            <div>
              <p className="font-medium text-marine">Aminata K.</p>
              <p className="text-sm text-marine/60">
                Admise à l’ESCP Business School en 2024
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 5. CTA FINAL */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <FadeIn>
          <div className="bg-marine rounded-lg p-10 md:p-16 text-center shadow-2xl shadow-marine/20">
            <h2 className="text-3xl md:text-4xl font-serif text-fond mb-4">
              Prêt à commencer votre projet ?
            </h2>
            <p className="text-fond/70 mb-8 max-w-xl mx-auto">
              Remplissez notre formulaire d’évaluation en 3 minutes pour que
              nous analysions votre profil et vous proposions un accompagnement
              sur mesure.
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
