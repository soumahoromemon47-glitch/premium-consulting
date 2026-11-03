"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Liste des images du carousel
const images = [
  { src: "/images/hero/etud.jpg", alt: "Étudiants sur le campus" },
  { src: "/images/hero/paris.jpg", alt: "Paris, ville étudiante" },
  { src: "/images/hero/abidjan.jpg", alt: "Abidjan, point de départ" },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Change d'image toutes les 5 secondes
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-4/5 bg-secondaire border border-ligne rounded-lg overflow-hidden group">
      {/* Les images empilées avec un effet de fondu */}
      {images.map((img, index) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            priority={index === 0} // Charge la première image en priorité
          />
        </div>
      ))}

      {/* Petits points indicateurs en bas */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex
                ? "bg-accent"
                : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
