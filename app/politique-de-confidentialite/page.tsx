import FadeIn from "@/components/FadeIn";

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-serif text-marine mb-12">
          Politique de Confidentialité
        </h1>

        <div className="space-y-8 text-marine/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif text-marine mb-4">
              1. Collecte des données personnelles
            </h2>
            <p>
              Nous collectons les informations que vous nous transmettez
              volontairement via nos formulaires de contact et
              d&apos;évaluation. Ces données incluent : votre nom, votre adresse
              e-mail, votre numéro de téléphone/WhatsApp, votre niveau
              d&apos;études et votre projet professionnel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-marine mb-4">
              2. Utilisation des données
            </h2>
            <p>
              Les données collectées sont utilisées uniquement dans le cadre de
              l&apos;accompagnement de votre projet d&apos;études. Elles nous
              permettent de :<br />
              - Répondre à vos demandes de renseignements.
              <br />
              - Évaluer votre profil pour vous proposer la meilleure stratégie
              d&apos;admission.
              <br />- Vous envoyer des informations relatives aux procédures
              (Campus France, visa, etc.).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-marine mb-4">
              3. Partage des données
            </h2>
            <p>
              Vos données ne sont jamais vendues ni cédées à des tiers. Elles
              sont uniquement accessibles par l&apos;équipe de Premium
              Consulting et par nos prestataires techniques (comme Formspree
              pour l&apos;envoi des e-mails et Cal.com pour la prise de
              rendez-vous) qui respectent les normes de sécurité en vigueur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-marine mb-4">
              4. Durée de conservation
            </h2>
            <p>
              Vos données sont conservées pendant une durée de 3 ans à compter
              de votre dernier contact avec notre cabinet, après quoi elles sont
              définitivement supprimées.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-marine mb-4">
              5. Vos droits
            </h2>
            <p>
              Conformément à la loi ivoirienne sur la protection des données à
              caractère personnel et au RGPD, vous disposez d&apos;un droit
              d&apos;accès, de rectification, de suppression et
              d&apos;opposition au traitement de vos données.
              <br />
              Pour exercer ces droits, vous pouvez nous contacter par e-mail à :{" "}
              <strong>contact@premiumconsulting.ci</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-marine mb-4">6. Cookies</h2>
            <p>
              Ce site n&apos;utilise pas de cookies de traçage publicitaire. Des
              cookies techniques peuvent être utilisés pour assurer le bon
              fonctionnement du site (notamment lors de l&apos;utilisation des
              modules de prise de rendez-vous).
            </p>
          </section>
        </div>
      </FadeIn>
    </div>
  );
}
