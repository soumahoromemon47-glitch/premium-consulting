import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos tarifs et formules",
  description:
    "Des tarifs clairs et transparents pour votre accompagnement. Découvrez nos 3 packs (Essentiel, Sérénité, Premium) et ce qui est inclus.",
};

// ... le reste de tes imports

import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function TarifsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div>
            <span className="text-accent text-sm font-medium uppercase tracking-widest block mb-4">
              Nos formules
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-marine mb-6 leading-tight">
              Des tarifs clairs, sans surprise.
            </h1>
            <p className="text-lg md:text-xl text-marine/80 leading-relaxed">
              Nous croyons que la transparence est la base de la confiance. Les
              frais institutionnels restent à votre charge et sont détaillés
              ci-dessous.
            </p>
          </div>
          <div className="relative aspect-4/3 bg-secondaire border border-ligne rounded-lg overflow-hidden">
            <Image
              src="/images/pages/tarifs-hero.jpg" // <-- Ton image ici
              alt="Transparence des tarifs"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-ligne mb-20 bg-white shadow-sm">
        {/* Formule 1 */}
        <FadeIn delay={0}>
          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-ligne flex flex-col justify-between h-full hover:bg-secondaire/10 transition-colors">
            <div>
              <h2 className="text-xl font-serif text-marine mb-2">
                Pack Essentiel
              </h2>
              <p className="text-marine/60 text-sm mb-8 h-10">
                Idéal pour les dossiers solides.
              </p>
              <div className="text-3xl font-serif text-marine mb-8 border-b border-ligne pb-6">
                Sur devis
              </div>
              <ul className="space-y-4 mb-8 text-sm text-marine/80">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">✓</span> Analyse de
                  profil
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">✓</span> Stratégie
                  d’admission
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">✓</span> Relecture des
                  lettres
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">✓</span> Accompagnement
                  Campus France
                </li>
              </ul>
            </div>
            <Link
              href="/rendez-vous"
              className="block w-full border border-marine text-marine text-center px-6 py-3 text-sm font-medium hover:bg-marine hover:text-fond active:scale-[0.98] transition-all rounded-lg mt-auto"
            >
              Demander un devis
            </Link>
          </div>
        </FadeIn>

        {/* Formule 2 */}
        <FadeIn delay={100}>
          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-ligne flex flex-col justify-between relative bg-fond h-full">
            <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-serif text-marine">
                  Pack Sérénité
                </h2>
                <span className="text-[10px] font-medium uppercase tracking-wider text-white bg-accent px-2 py-1 rounded-lg">
                  Recommandé
                </span>
              </div>
              <p className="text-marine/60 text-sm mb-8 h-10">
                L’accompagnement de A à Z jusqu’au visa.
              </p>
              <div className="text-3xl font-serif text-marine mb-8 border-b border-ligne pb-6">
                Sur devis
              </div>
              <ul className="space-y-4 mb-8 text-sm text-marine/80">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">✓</span> Tout le Pack
                  Essentiel
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">✓</span> Préparation
                  entretien Campus France
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">✓</span> Constitution du
                  dossier Visa
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">✓</span> Prise de
                  rendez-vous TLScontact
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">✓</span> Simulation
                  d’entretien consulaire
                </li>
              </ul>
            </div>
            <Link
              href="/rendez-vous"
              className="block w-full bg-accent text-white text-center px-6 py-3 text-sm font-medium hover:bg-[#b03d27] active:scale-[0.98] transition-all rounded-lg mt-auto"
            >
              Demander un devis
            </Link>
          </div>
        </FadeIn>

        {/* Formule 3 */}
        <FadeIn delay={200}>
          <div className="p-8 md:p-10 flex flex-col justify-between h-full hover:bg-secondaire/10 transition-colors">
            <div>
              <h2 className="text-xl font-serif text-marine mb-2">
                Pack Premium
              </h2>
              <p className="text-marine/60 text-sm mb-8 h-10">
                Pour une installation clé en main à Paris.
              </p>
              <div className="text-3xl font-serif text-marine mb-8 border-b border-ligne pb-6">
                Sur devis
              </div>
              <ul className="space-y-4 mb-8 text-sm text-marine/80">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">✓</span> Tout le Pack
                  Sérénité
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">✓</span> Recherche de
                  logement
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">✓</span> Assurance
                  habitation et RC
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">✓</span> Accueil à
                  l’aéroport
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">✓</span> Aide à
                  l’ouverture de compte
                </li>
              </ul>
            </div>
            <Link
              href="/rendez-vous"
              className="block w-full border border-marine text-marine text-center px-6 py-3 text-sm font-medium hover:bg-marine hover:text-fond active:scale-[0.98] transition-all rounded-lg mt-auto"
            >
              Demander un devis
            </Link>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={100}>
        <div className="border border-ligne p-8 md:p-12 rounded-lg bg-secondaire/30">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-serif text-marine mb-4">
              Ce qui n’est pas inclus dans nos honoraires
            </h2>
            <p className="text-marine/70 mb-8 text-sm md:text-base">
              Pour respecter notre engagement de transparence, voici la liste
              des frais qui restent à votre charge (payables directement aux
              organismes concernés) :
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              {
                num: "01.",
                titre: "Frais de scolarité de l’école",
                desc: "Payables directement à l’établissement (de 0€ pour le public à plusieurs milliers d’euros pour le privé).",
              },
              {
                num: "02.",
                titre: "Frais de dossier et de visa",
                desc: "Frais Campus France, frais consulaires et frais de service TLScontact.",
              },
              {
                num: "03.",
                titre: "La CVEC",
                desc: "Contribution Vie Étudiante et de Campus (obligatoire, environ 100€ par an).",
              },
              {
                num: "04.",
                titre: "Le billet d’avion et les frais de vie",
                desc: "Transport international et budget mensuel pour vivre à Paris.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-marine/30 font-serif text-2xl font-bold">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-medium text-marine mb-1 text-sm">
                    {item.titre}
                  </h3>
                  <p className="text-sm text-marine/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
