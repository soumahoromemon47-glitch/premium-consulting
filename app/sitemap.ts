import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://premiumconsulting.vercel.app"; // Remplace par ton domaine plus tard

  const routes = [
    "",
    "/ecoles",
    "/comment-ca-marche",
    "/tarifs",
    "/temoignages",
    "/faq",
    "/contact",
    "/a-propos",
    "/evaluation",
    "/rendez-vous",
    "/mentions-legales",
    "/politique-de-confidentialite",
    "/services/campus-france",
    "/services/visa",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
