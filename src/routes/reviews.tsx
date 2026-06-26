import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/lib/menu-data";
import { restaurant } from "@/lib/restaurant";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Glen's Bakehouse | 4.4★ from 4,584+ guests" },
      {
        name: "description",
        content:
          "Read what guests say about Glen's Bakehouse — a Bengaluru café rated 4.4 stars across 4,584+ reviews for its bakery, coffee, breakfast and desserts.",
      },
      { property: "og:title", content: "Reviews — Glen's Bakehouse" },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="container-narrow text-center">
          <div className="inline-flex flex-col items-center">
            <div className="flex items-center gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-7 w-7 fill-accent text-accent" />
              ))}
            </div>
            <p className="mt-3 font-display text-5xl md:text-6xl font-bold text-coffee">
              {restaurant.rating}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Based on <span className="font-semibold text-foreground">{restaurant.reviews.toLocaleString()}</span> reviews
            </p>
          </div>
          <div className="mt-6">
            <SectionHeading
              title="Loved by Bengaluru, one bite at a time"
              subtitle="Honest words from guests who've made Glen's a part of their everyday."
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="relative rounded-2xl bg-card border border-border p-7 hover:shadow-warm transition"
              >
                <Quote className="absolute -top-3 -left-3 h-8 w-8 text-accent" />
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full gradient-gold text-coffee font-display font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-coffee">{t.name}</p>
                    <p className="text-xs text-muted-foreground">Verified guest</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full gradient-warm px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Read more reviews on Google
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
