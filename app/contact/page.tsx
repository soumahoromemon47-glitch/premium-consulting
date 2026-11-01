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
                  <span className="text-base">
                    +225 05 76 69 33 74 | +225 07 87 01 41 29
                  </span>
                </li>
                <li>
                  <span className="block text-xs font-medium uppercase tracking-wider text-marine/50 mb-1">
                    E-mail
                  </span>
                  <span className="text-base">
                    procetude@agencepremium-ci.com | etude.premiumc@gmail.com
                  </span>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Réseaux Sociaux */}
          <FadeIn delay={350}>
            <div>
              <h3 className="text-xl font-serif text-marine mb-6 pb-4 border-b border-ligne">
                Suivez-nous
              </h3>
              <div className="flex gap-6">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/premium-consulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-marine/60 hover:text-accent transition-colors duration-300 group"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/premiumconsulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-marine/60 hover:text-accent transition-colors duration-300 group"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/premiumconsulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-marine/60 hover:text-accent transition-colors duration-300 group"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@premiumconsulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-marine/60 hover:text-accent transition-colors duration-300 group"
                  aria-label="TikTok"
                >
                  <svg
                    className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
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
