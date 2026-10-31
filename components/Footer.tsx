import Link from "next/link";

export default function Footer() {
  return (
    // mt-24 (96px) -> mt-16 (64px), py-16 (64px) -> py-10 (40px)
    <footer className="bg-marine text-fond py-10 mt-16">
      {/* gap-12 -> gap-8 */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          {/* text-2xl -> text-xl, mb-4 -> mb-3 */}
          <h3 className="font-serif text-xl mb-3">Premium Consulting</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Votre cabinet d’orientation à Abidjan. Nous vous accompagnons de
            l’admission jusqu’à votre installation à Paris.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-3">Contact</h4>
          <p className="text-sm text-gray-300">Abidjan, Côte d’Ivoire</p>
          <p className="text-sm text-gray-300 mt-2">
            Lundi - Vendredi : 8h - 18h
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-3">Actions</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link
                href="/rendez-vous"
                className="hover:text-accent transition-colors"
              >
                Prendre rendez-vous
              </Link>
            </li>
            <li>
              <a
                href="https://wa.me/VOTRE_NUMERO"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Nous écrire sur WhatsApp
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-accent transition-colors"
              >
                Nous contacter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
