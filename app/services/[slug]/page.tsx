import CTASection from "@/components/CTASection";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";

// 1. Les types (pour éviter l'erreur 'any')
type FaqItem = {
  q: string;
  r: string;
};

type Service = {
  titre: string;
  soustitre: string;
  pourQui: string;
  inclus: string[];
  aCharge: string[];
  duree: string;
  faq: FaqItem[];
};

// 2. Les données (qu'il ne faut pas effacer !)
const servicesData: Record<string, Service> = {
  "campus-france": {
    titre: "Universités publiques & Campus France",
    soustitre:
      "Intégrez une université française sans frais de scolarité excessifs.",
    pourQui:
      "Lycéens, bacheliers ou étudiants en réorientation souhaitant intégrer le système universitaire public français (Licence, Master).",
    inclus: [
      "Création et gestion du compte Campus France",
      "Sélection stratégique des universités (3 vœux)",
      "Relecture et optimisation du dossier",
      "Préparation aux entretiens Campus France",
      "Rédaction des lettres de motivation",
    ],
    aCharge: [
      "Frais de dossier Campus France (environ 70€)",
      "Frais de traduction assermentée des documents",
      "Frais de visa",
    ],
    duree: "3 à 4 mois",
    faq: [
      {
        q: "Quand commencer la procédure Campus France ?",
        r: "La plateforme ouvre généralement en octobre/novembre pour une rentrée en septembre suivant. Il est conseillé de commencer dès l'ouverture.",
      },
      {
        q: "Puis-je postuler sans passer par Campus France ?",
        r: "Non, pour la majorité des établissements publics, la procédure Campus France (Études en France) est obligatoire pour les résidents ivoiriens.",
      },
    ],
  },
  visa: {
    titre: "Accompagnement Visa Étudiant",
    soustitre:
      "Mettez toutes les chances de votre côté pour obtenir votre visa.",
    pourQui:
      "Tout étudiant ayant reçu une admission et devant préparer son dossier de visa long séjour pour la France.",
    inclus: [
      "Analyse complète des pièces justificatives",
      "Aide à la constitution du dossier financier",
      "Prise de rendez-vous auprès du consulat/TLScontact",
      "Simulation d'entretien et conseils de présentation",
    ],
    aCharge: [
      "Frais de visa consulaire (environ 50€)",
      "Frais de service TLScontact",
      "Frais de photos d'identité aux normes",
    ],
    duree: "2 à 4 semaines",
    faq: [
      {
        q: "Le cabinet garantit-il l'obtention du visa ?",
        r: "Non. La décision finale revient exclusivement au consulat de France. Notre rôle est de vous aider à présenter le dossier le plus solide et cohérent possible.",
      },
      {
        q: "Que faire en cas de refus de visa ?",
        r: "Nous analysons les motifs du refus avec vous et vous accompagnons dans la procédure de recours ou dans une nouvelle demande si les conditions le permettent.",
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return { title: "Service introuvable" };
  }

  return {
    title: service.titre,
    description: service.soustitre,
  };
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <FadeIn>
        <div className="mb-16 border-b border-ligne pb-12">
          <span className="text-accent text-sm font-medium uppercase tracking-widest block mb-4">
            Nos services
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-marine mb-6">
            {service.titre}
          </h1>
          <p className="text-xl text-marine/70 max-w-2xl">
            {service.soustitre}
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-12">
          <FadeIn delay={100}>
            <section>
              <h2 className="text-2xl font-serif text-marine mb-4">
                Pour qui ?
              </h2>
              <p className="text-marine/80 leading-relaxed bg-secondaire/30 p-6 border-l-2 border-marine">
                {service.pourQui}
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={150}>
            <section>
              <h2 className="text-2xl font-serif text-marine mb-6">
                Ce qui est inclus
              </h2>
              <ul className="space-y-4">
                {service.inclus.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span className="text-marine/80 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </FadeIn>

          <FadeIn delay={200}>
            <section>
              <h2 className="text-2xl font-serif text-marine mb-6">
                Ce qui reste à votre charge
              </h2>
              <p className="text-sm text-marine/60 mb-4">
                Pour une totale transparence, voici les frais non inclus dans
                notre accompagnement :
              </p>
              <ul className="space-y-3">
                {service.aCharge.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-marine/70"
                  >
                    <span className="w-1.5 h-1.5 bg-marine/30 rounded-full mt-2 shrink-0"></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </FadeIn>

          <FadeIn delay={250}>
            <section className="pt-8 border-t border-ligne">
              <h2 className="text-2xl font-serif text-marine mb-6">
                Questions fréquentes
              </h2>
              <div className="space-y-6">
                {/* Remplacement du "any" par le type FaqItem */}
                {service.faq.map((item: FaqItem, index: number) => (
                  <div key={index}>
                    <h3 className="font-medium text-marine mb-2">{item.q}</h3>
                    <p className="text-marine/70 text-sm leading-relaxed">
                      {item.r}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>
        </div>

        <div className="md:col-span-1">
          <FadeIn delay={300}>
            <div className="bg-marine text-fond p-8 rounded-lg sticky top-28 shadow-xl shadow-marine/10">
              <h3 className="font-serif text-2xl mb-2">Durée indicative</h3>
              <p className="text-3xl text-accent font-semibold mb-8">
                {service.duree}
              </p>
              <p className="text-sm text-fond/70 mb-6 leading-relaxed">
                Prêt à démarrer cette étape ? Évaluez votre profil pour que nous
                vérifiions votre éligibilité.
              </p>
              <Link
                href="/evaluation"
                className="group flex items-center justify-center gap-2 w-full bg-accent text-white text-center px-6 py-3 font-medium hover:bg-[#b03d27] active:scale-[0.98] transition-all rounded-lg mb-3"
              >
                Évaluer mon profil
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
              <Link
                href="/rendez-vous"
                className="block w-full border border-fond/30 text-fond text-center px-6 py-3 font-medium hover:bg-fond/10 active:scale-[0.98] transition-all rounded-lg"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
      <CTASection />
    </div>
  );
}
