import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez l'équipe de Premium Consulting à Abidjan. Prise de rendez-vous, WhatsApp, téléphone et adresse.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
