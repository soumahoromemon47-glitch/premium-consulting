import FadeIn from "@/components/FadeIn";

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-serif text-marine mb-12">
          Mentions Légales
        </h1>

        <div className="space-y-8 text-marine/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif text-marine mb-4">
              1. Éditeur du site
            </h2>
            <p>
              Le site <strong>premiumconsulting.ci</strong> est édité par{" "}
              <strong>Premium Consulting</strong>, cabinet de conseil en
              orientation académique.
              <br />
              Forme juridique : [À compléter - ex: SARL, SAS]
              <br />
              Siège social : Abidjan, Cocody, Riviera, Côte d&apos;Ivoire
              <br />
              Numéro d&apos;immatriculation (RCCM) : [À compléter]
              <br />
              Directeur de la publication : Soumahoro Memon
              <br />
              Contact : contact@premiumconsulting.ci
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-marine mb-4">
              2. Hébergement
            </h2>
            <p>
              Le site est hébergé par <strong>Vercel Inc.</strong>
              <br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
              <br />
              Site web : https://vercel.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-marine mb-4">
              3. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images,
              logos, graphismes) est la propriété exclusive de Premium
              Consulting. Toute reproduction, même partielle, est strictement
              interdite sans autorisation préalable écrite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-marine mb-4">
              4. Responsabilité
            </h2>
            <p>
              Premium Consulting s&apos;efforce d&apos;assurer l&apos;exactitude
              des informations diffusées sur ce site. Toutefois, elle ne peut
              garantir l&apos;exhaustivité des informations. Les informations
              concernant les procédures (Campus France, visa, etc.) sont données
              à titre indicatif et peuvent évoluer. La décision finale
              d&apos;admission ou de délivrance de visa appartient exclusivement
              aux autorités compétentes (écoles, consulat).
            </p>
          </section>
        </div>
      </FadeIn>
    </div>
  );
}
