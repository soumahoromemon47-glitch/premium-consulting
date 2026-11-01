import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos écoles partenaires",
  description:
    "Découvrez notre réseau de plus de 30 écoles françaises partenaires (Commerce, Informatique, Communication, Santé, Architecture).",
};

export default function EcolesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
