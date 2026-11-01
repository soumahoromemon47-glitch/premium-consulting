"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // <-- Import de usePathname

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // <-- On récupère la page actuelle

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/ecoles", label: "Écoles" },
    { href: "/comment-ca-marche", label: "Comment ça marche" },
    { href: "/tarifs", label: "Tarifs" },
    { href: "/temoignages", label: "Témoignages" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
    { href: "/a-propos", label: "À propos" },
  ];

  return (
    <header className="sticky top-0 z-9999 bg-fond border-b border-ligne">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="relative block w-48 h-12 md:w-56 md:h-14"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/images/logo.jpg" // <-- C'est ici qu'on met .jpg
            alt="Premium Consulting"
            fill
            className="object-contain object-left mix-blend-multiply"
            priority
          />
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex gap-6 text-sm font-medium">
          {links.map((link) => {
            // On vérifie si le lien correspond à la page actuelle
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 transition-colors duration-300 ${
                  isActive
                    ? "text-accent font-semibold" // Style si actif (Rouge brique + gras)
                    : "text-marine/80 hover:text-marine" // Style si inactif
                }`}
              >
                {link.label}
                {/* Petit trait de soulignement qui apparaît si le lien est actif */}
                {isActive && (
                  <span className="absolute left-0 bottom-0 w-full h-2px bg-accent rounded-full"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bouton Desktop */}
        <div className="hidden lg:flex">
          <Link
            href="/evaluation"
            className="bg-accent text-white px-6 py-3 text-sm font-medium rounded-lg hover:bg-[#b03d27] active:scale-[0.98] transition-all duration-300"
          >
            Évaluer mon profil
          </Link>
        </div>

        {/* Bouton Mobile */}
        <button
          type="button"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="lg:hidden relative z-10001 bg-marine text-white px-5 py-3 text-sm font-medium rounded-lg cursor-pointer"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bottom-0 z-10000 bg-fond shadow-xl overflow-y-auto transition-transform duration-300 ${
          isOpen ? "translate-x-0 visible" : "translate-x-full invisible"
        }`}
      >
        <nav className="flex flex-col px-6 py-8 space-y-6">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-serif border-b border-ligne pb-4 transition-colors ${
                  isActive ? "text-accent font-semibold" : "text-marine"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/evaluation"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-accent text-white px-6 py-4 text-lg font-medium rounded-lg mt-4"
          >
            Évaluer mon profil
          </Link>
        </nav>
      </div>
    </header>
  );
}
