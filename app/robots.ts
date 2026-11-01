import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/evaluation"], // On empêche Google d'indexer la page de formulaire (pour éviter le spam)
    },
    sitemap: "https://premiumconsulting.vercel.app/sitemap.xml",
  };
}
