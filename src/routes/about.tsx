import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Heart, Sparkles, Users, ArrowRight } from "lucide-react";
import ambienceImg from "@/assets/gallery-ambience.jpg";
import bakeryImg from "@/assets/gallery-bakery.jpg";
import { SectionHeading } from "@/components/SectionHeading";
import { RatingBadge } from "@/components/RatingBadge";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Glen's Bakehouse | Our Story" },
      {
        name: "description",
        content:
          "Discover the story of Glen's Bakehouse — a beloved Bengaluru bakery & café known for artisan coffee, freshly baked goods and a signature café experience.",
      },
      { property: "og:title", content: "About Glen's Bakehouse" },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: ambienceImg },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Made with love", text: "Every recipe is crafted with care, from morning bakes to late-night desserts." },
  { icon: Sparkles, title: "Always fresh", text: "We bake throughout the day so every bite tastes like it just came out of the oven." },
  { icon: Award, title: "Signature experience", text: "Cozy interiors, warm service and flavours that have made us a Bengaluru favourite." },
  { icon: Users, title: "Community first", text: "A neighbourhood café where regulars feel like family and first-timers leave as friends." },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary/40 py-20 md:py-28">
        <div className="container-narrow">
          <RatingBadge />
          <h1 className="mt-5 font-display text-4xl md:text-6xl font-bold text-coffee max-w-3xl text-balance">
            Our story is written in flour, butter and a lot of coffee.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Glen's Bakehouse is a popular bakery and café in Bengaluru known for
            its freshly baked goods, artisan coffee, hearty breakfasts,
            sandwiches, pizzas, desserts and signature café experience.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-narrow grid gap-12 lg:grid-cols-2 items-center">
          <img
            src={ambienceImg}
            alt="Glen's Bakehouse interior"
            width={1280}
            height={960}
            loading="lazy"
            className="rounded-3xl object-cover h-[26rem] w-full shadow-warm"
          />
          <div>
            <SectionHeading
              align="left"
              eyebrow="A neighbourhood favourite"
              title="Where Bengaluru gathers, slows down and savours"
            />
            <div className="mt-6 space-y-5 text-foreground/85 leading-relaxed">
              <p>
                Tucked into HRBR Layout in Kalyan Nagar, Glen's Bakehouse has grown
                from a small bakery into one of the city's most-loved cafés.
                What hasn't changed is our obsession with quality — flaky
                croissants, perfectly pulled espressos and dishes that feel like a
                warm hug.
              </p>
              <p>
                Whether you're stopping in for a quick coffee, settling down with
                a weekend breakfast, or sharing a slice of cheesecake with someone
                you love — there's a corner here with your name on it.
              </p>
            </div>
            <Link
              to="/menu"
              className="mt-8 inline-flex items-center gap-2 rounded-full gradient-warm px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Explore the menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="What we stand for"
            title="Little things, done lovingly"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl bg-card border border-border p-6 hover:shadow-warm transition">
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-gold text-coffee shadow-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-coffee">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <img src={bakeryImg} className="hidden" alt="" aria-hidden width={1} height={1} />
    </>
  );
}
