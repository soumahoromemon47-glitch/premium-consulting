import Link from "next/link";
import FadeIn from "./FadeIn";

export default function CTASection() {
  return (
    <FadeIn>
      <section className="bg-marine py-20 text-center mt-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-fond mb-6">
            Prêt à passer à l&apos;étape suivante ?
          </h2>
          <p className="text-fond/70 mb-10 max-w-xl mx-auto">
            Remplissez notre formulaire d&apos;évaluation en 3 minutes pour que
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
      </section>
    </FadeIn>
  );
}
