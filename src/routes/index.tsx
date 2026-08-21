import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/aqua/Navbar";
import { Hero } from "@/components/aqua/Hero";
import { ProductIntro } from "@/components/aqua/ProductIntro";
import { FragranceNotes } from "@/components/aqua/FragranceNotes";
import { ScentJourney } from "@/components/aqua/ScentJourney";
import { Lifestyle } from "@/components/aqua/Lifestyle";
import { PurchaseSection } from "@/components/aqua/PurchaseSection";
import { WhyAqua } from "@/components/aqua/WhyAqua";
import { Testimonials } from "@/components/aqua/Testimonials";
import { FinalCTA } from "@/components/aqua/FinalCTA";
import { Footer } from "@/components/aqua/Footer";
import heroAsset from "@/assets/aqua_packaging.webp.asset.json";

const TITLE = "SARKAR AQUA — Freshness, With Presence";
const DESCRIPTION =
  "Discover SARKAR AQUA, a fresh aquatic Eau de Parfum with marine notes, mint, lavender, clean woods and musk.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroAsset.url },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "SARKAR AQUA",
          brand: { "@type": "Brand", name: "SARKAR" },
          description: DESCRIPTION,
          category: "Eau de Parfum",
          size: "100 ml",
          offers: {
            "@type": "Offer",
            price: "1499",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductIntro />
        <FragranceNotes />
        <ScentJourney />
        <Lifestyle />
        <PurchaseSection />
        <WhyAqua />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
