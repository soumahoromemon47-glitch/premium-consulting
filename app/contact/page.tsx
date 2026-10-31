import FadeIn from "@/components/FadeIn";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <FadeIn>
        <div className="max-w-2xl mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-widest block mb-4">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-marine mb-6 leading-tight">
            Parlons de votre projet.
          </h1>
          <p className="text-lg text-marine/70 leading-relaxed">
            Une question sur une procédure ? Besoin d’un accompagnement ? Notre
            équipe à Abidjan vous répond sous 24h ouvrées.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <FadeIn delay={100} className="lg:col-span-7">
          <h2 className="text-2xl font-serif text-marine mb-8">
            Envoyez-nous un message
          </h2>
          <form
            action="https://formspree.io/f/xbggawdl"
            method="POST"
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label
                  htmlFor="nom"
                  className="block text-sm font-medium text-marine mb-2"
                >
                  Nom complet
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  className="w-full p-3 bg-transparent border-b border-ligne focus:border-accent focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-marine mb-2"
                >
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 bg-transparent border-b border-ligne focus:border-accent focus:outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="telephone"
                className="block text-sm font-medium text-marine mb-2"
              >
                Numéro WhatsApp / Téléphone
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                className="w-full p-3 bg-transparent border-b border-ligne focus:border-accent focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="sujet"
                className="block text-sm font-medium text-marine mb-2"
              >
                Sujet de votre demande
              </label>
              <select
                id="sujet"
                name="sujet"
                className="w-full p-3 bg-transparent border-b border-ligne focus:border-accent focus:outline-none transition-colors text-marine"
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="campus-france">Campus France</option>
                <option value="visa">Visa</option>
                <option value="logement">Logement</option>
                <option value="autre">Autre demande</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-marine mb-2"
              >
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full p-3 bg-transparent border-b border-ligne focus:border-accent focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-white px-8 py-4 font-medium hover:bg-[#b03d27] active:scale-[0.98] transition-all rounded-lg"
            >
              Envoyer le message
            </button>
          </form>
        </FadeIn>

        <div className="lg:col-span-5 space-y-12">
          <FadeIn delay={200}>
            <div className="bg-marine p-8 rounded-lg shadow-xl shadow-marine/10">
              <h3 className="text-xl font-serif text-fond mb-3">
                Le plus rapide : WhatsApp
              </h3>
              <p className="text-sm text-fond/70 mb-6 leading-relaxed">
                Pour une réponse immédiate ou pour prendre rendez-vous
                rapidement, écrivez-nous directement sur WhatsApp.
              </p>
              <a
                href="https://wa.me/+2250576693374"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 text-sm font-medium hover:bg-[#b03d27] active:scale-[0.98] transition-all rounded-lg w-full text-center"
              >
                Ouvrir WhatsApp
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div>
              <h3 className="text-xl font-serif text-marine mb-6 pb-4 border-b border-ligne">
                Nos coordonnées
              </h3>
              <ul className="space-y-6 text-marine/80">
                <li>
                  <span className="block text-xs font-medium uppercase tracking-wider text-marine/50 mb-1">
                    Adresse
                  </span>
                  <span className="text-base">
                    Abidjan, Côte d’Ivoire
                    <br />
                    Cocody, Riviera Palmeraie
                  </span>
                </li>
                <li>
                  <span className="block text-xs font-medium uppercase tracking-wider text-marine/50 mb-1">
                    Téléphone
                  </span>
                  <span className="text-base">+225 05 76 69 33 74</span>
                </li>
                <li>
                  <span className="block text-xs font-medium uppercase tracking-wider text-marine/50 mb-1">
                    E-mail
                  </span>
                  <span className="text-base">
                    contact@premiumconsulting.ci
                  </span>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div>
              <h3 className="text-xl font-serif text-marine mb-6 pb-4 border-b border-ligne">
                Horaires d’ouverture
              </h3>
              <ul className="space-y-3 text-sm text-marine/80">
                <li className="flex justify-between border-b border-ligne/50 pb-2">
                  <span>Lundi - Vendredi</span>
                  <span className="font-medium text-marine">08h00 - 18h00</span>
                </li>
                <li className="flex justify-between border-b border-ligne/50 pb-2">
                  <span>Samedi</span>
                  <span className="font-medium text-marine">09h00 - 13h00</span>
                </li>
                <li className="flex justify-between text-marine/50">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
