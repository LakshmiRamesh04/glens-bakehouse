import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";

import bakery from "@/assets/gallery-bakery.jpg";
import coffee from "@/assets/gallery-coffee.jpg";
import breakfast from "@/assets/gallery-breakfast.jpg";
import pizza from "@/assets/gallery-pizza.jpg";
import soup from "@/assets/gallery-soup.jpg";
import dessert from "@/assets/gallery-dessert.jpg";
import ambience from "@/assets/gallery-ambience.jpg";
import italian from "@/assets/feature-italian.jpg";
import sandwich from "@/assets/feature-sandwich.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Glen's Bakehouse | Bakery, Coffee & Ambience" },
      {
        name: "description",
        content:
          "Step inside Glen's Bakehouse — galleries of freshly baked goods, coffee, breakfast, pizza, desserts and our café ambience in Bengaluru.",
      },
      { property: "og:title", content: "Gallery — Glen's Bakehouse" },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: ambience },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

type Item = { src: string; alt: string; cat: string; tall?: boolean };

const items: Item[] = [
  { src: bakery, alt: "Fresh croissants and bakery items", cat: "Bakery", tall: true },
  { src: coffee, alt: "Latte art coffee", cat: "Coffee" },
  { src: breakfast, alt: "Breakfast pancakes and eggs", cat: "Breakfast" },
  { src: pizza, alt: "Wood-fired margherita pizza", cat: "Pizza" },
  { src: soup, alt: "Tomato basil soup", cat: "Soups", tall: true },
  { src: dessert, alt: "Tiramisu and red velvet desserts", cat: "Desserts" },
  { src: ambience, alt: "Café ambience with warm lighting", cat: "Ambience" },
  { src: italian, alt: "Chicken lasagna Italian favorite", cat: "Italian" },
  { src: sandwich, alt: "Burgers and sandwiches", cat: "Sandwiches" },
];

const categories = ["All", "Bakery", "Coffee", "Breakfast", "Pizza", "Soups", "Desserts", "Sandwiches", "Italian", "Ambience"];

function GalleryPage() {
  const [active, setActive] = useState("All");
  const list = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <>
      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="container-narrow text-center">
          <SectionHeading
            eyebrow="Gallery"
            title="A taste, in pictures"
            subtitle="Bakery shelves, brewing coffee, plated breakfasts and the cozy ambience that makes Glen's, well, Glen's."
          />
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-narrow">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium border transition ${
                  active === c
                    ? "bg-coffee text-cream border-coffee shadow-warm"
                    : "bg-card text-foreground/75 border-border hover:border-accent hover:text-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {list.map((it, i) => (
              <figure
                key={it.alt + i}
                className={`group relative overflow-hidden rounded-2xl bg-secondary shadow-warm ${
                  it.tall ? "row-span-2" : ""
                }`}
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    it.tall ? "h-full min-h-72 md:min-h-[34rem]" : "h-56 md:h-72"
                  }`}
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-coffee/85 to-transparent text-cream">
                  <span className="text-xs uppercase tracking-[0.2em] text-accent">{it.cat}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
