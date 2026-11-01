import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Évaluer mon profil",
  description:
    "Remplissez notre formulaire en 5 étapes pour que notre équipe analyse votre profil et vous propose la meilleure stratégie d'admission.",
};

export default function EvaluationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
