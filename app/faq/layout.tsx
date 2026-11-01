import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Questions fréquentes (FAQ)",
  description:
    "Toutes les réponses à vos questions sur Campus France, Parcoursup, les visas étudiants et le logement à Paris.",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
