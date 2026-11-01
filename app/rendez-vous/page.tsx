import FadeIn from "@/components/FadeIn";
import CalEmbed from "@/components/CalEmbed";

export default function RendezVousPage() {
  // ⚠️ REMPLACE ICI par le lien de ton événement Cal.com (ex: "memon/consultation")
  const monLienCal = "memon-soumahoro-3yek7y/premium-consulting";

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      {/* En-tête */}
      <FadeIn>
        <div className="max-w-3xl mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-widest block mb-4">
            Consultation
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-marine mb-6 leading-tight">
            Prenez rendez-vous.
          </h1>
          <p className="text-lg md:text-xl text-marine/80 leading-relaxed">
            Choisissez directement un créneau dans l’agenda de notre équipe.
            Tous les horaires sont affichés à{" "}
            <strong>l’heure d’Abidjan (GMT)</strong>.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Colonne de gauche : Infos pratiques */}
        <div className="lg:col-span-4 space-y-8">
          <FadeIn delay={100}>
            <div className="bg-secondaire/30 border border-ligne p-6 rounded-lg">
              <h3 className="font-serif text-xl text-marine mb-3">
                Comment ça se passe ?
              </h3>
              <ul className="space-y-4 text-sm text-marine/80">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">1.</span>
                  <span>
                    Sélectionnez la date et l’heure qui vous conviennent dans le
                    calendrier à droite.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">2.</span>
                  <span>
                    Remplissez vos coordonnées (nom, email, WhatsApp).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">3.</span>
                  <span>
                    Vous recevrez immédiatement une confirmation par e-mail avec
                    le lien (si visio).
                  </span>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-marine p-6 rounded-lg shadow-xl shadow-marine/10">
              <h3 className="font-serif text-xl text-fond mb-3">
                Un empêchement ?
              </h3>
              <p className="text-sm text-fond/70 mb-6">
                Si vous ne trouvez pas de créneau qui vous convient,
                contactez-nous directement sur WhatsApp.
              </p>
              <a
                href="https://wa.me/+2250576693374"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 w-full bg-accent text-white px-6 py-3 text-sm font-medium hover:bg-[#b03d27] active:scale-[0.98] transition-all rounded-lg"
              >
                Ouvrir WhatsApp
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Colonne de droite : Le widget Cal.com */}
        <div className="lg:col-span-8">
          <FadeIn delay={300}>
            <CalEmbed calLink={monLienCal} />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
