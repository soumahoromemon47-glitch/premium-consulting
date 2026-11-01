import type { Metadata } from "next";
import { Newsreader, Public_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Premium Consulting | Étudier en France depuis Abidjan",
    template: "%s | Premium Consulting", // ex: "Tarifs | Premium Consulting"
  },
  description:
    "Cabinet d'orientation à Abidjan. Nous accompagnons les étudiants ivoiriens de l'admission (Campus France, Parcoursup) jusqu'à l'installation à Paris (visa, logement).",
  keywords: [
    "étudier en France",
    "Campus France Abidjan",
    "Parcoursup Côte d'Ivoire",
    "visa étudiant France",
    "cabinet d'orientation Abidjan",
    "Premium Consulting",
  ],
  authors: [{ name: "Premium Consulting" }],
  creator: "Premium Consulting",
  openGraph: {
    type: "website",
    locale: "fr_CI",
    url: "https://premiumconsulting.vercel.app", // Remplace par ton vrai domaine plus tard
    siteName: "Premium Consulting",
    title: "Premium Consulting | Étudier en France depuis Abidjan",
    description:
      "De l'admission à l'installation à Paris, nous accompagnons les étudiants ivoiriens avec une méthode claire et un suivi personnalisé.",
    images: [
      {
        url: "/images/hero/etud.jpg", // L'image qui s'affichera sur WhatsApp
        width: 1200,
        height: 630,
        alt: "Premium Consulting - Études en France",
      },
    ],
  },
  icons: {
    icon: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${newsreader.variable} ${publicSans.variable}`}>
      <body className="bg-fond text-marine min-h-screen flex flex-col">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
