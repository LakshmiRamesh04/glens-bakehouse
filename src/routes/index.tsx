import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, Clock, Coffee, Croissant, Pizza, UtensilsCrossed, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-bakery.jpg";
import bakeryImg from "@/assets/gallery-bakery.jpg";
import coffeeImg from "@/assets/gallery-coffee.jpg";
import breakfastImg from "@/assets/gallery-breakfast.jpg";
import italianImg from "@/assets/feature-italian.jpg";
import ambienceImg from "@/assets/gallery-ambience.jpg";
import dessertImg from "@/assets/gallery-dessert.jpg";
import { restaurant } from "@/lib/restaurant";
import { RatingBadge } from "@/components/RatingBadge";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/lib/menu-data";
import { Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glen's Bakehouse — Bakery & Café in HRBR Layout, Bengaluru" },
      {
        name: "description",
        content:
          "Freshly baked happiness every day. Artisan coffee, hearty breakfasts, pizzas, sandwiches and signature desserts at Glen's Bakehouse, Kalyan Nagar.",
      },
      { property: "og:title", content: "Glen's Bakehouse — Freshly Baked Happiness Every Day" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const highlights = [
  { icon: Croissant, title: "Freshly Baked", text: "Artisan breads, croissants & cakes baked fresh every morning." },
  { icon: Coffee, title: "Artisan Coffee", text: "From signature cold coffee to perfectly pulled espressos." },
  { icon: UtensilsCrossed, title: "Breakfast Specials", text: "All-day pancakes, waffles, eggs, croissants & combos." },
  { icon: Pizza, title: "Italian Favorites", text: "Wood-fired pizzas, creamy lasagnas and homestyle risottos." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Freshly baked croissants and pastries at Glen's Bakehouse"
            width={1920}
            height={1280}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coffee/90 via-coffee/55 to-coffee/35" />
        </div>

        <div className="container-narrow relative py-24 md:py-36 lg:py-44">
          <div className="max-w-2xl text-cream animate-fade-up">
            <RatingBadge variant="dark" />
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance">
              Freshly Baked <span className="text-accent italic">Happiness</span> Every Day
            </h1>
            <p className="mt-5 max-w-xl text-base md:text-lg text-cream/85 leading-relaxed">
              A beloved Bengaluru bakery & café in HRBR Layout — artisan coffee,
              hearty breakfasts, wood-fired pizzas and signature desserts.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3 text-sm font-semibold text-coffee shadow-gold hover:scale-[1.02] transition"
              >
                View Menu <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={restaurant.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-cream/15 backdrop-blur px-6 py-3 text-sm font-semibold text-cream border border-cream/30 hover:bg-cream/25 transition"
              >
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
              <a
                href={`tel:${restaurant.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full bg-cream text-coffee px-6 py-3 text-sm font-semibold hover:bg-accent transition"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-cream/80">
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> {restaurant.hours}</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> {restaurant.shortAddress}</span>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="What we're known for"
            title="A bakery, café and kitchen all in one"
            subtitle="Every loaf, every cup and every plate is made with the same intention — warmth, craft and care."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-2xl bg-card border border-border p-6 hover:shadow-warm hover:-translate-y-1 transition-all duration-300"
              >
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

      {/* FEATURE STRIP */}
      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container-narrow grid gap-12 lg:grid-cols-2 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={bakeryImg} alt="Fresh croissants" width={1280} height={960} loading="lazy" className="rounded-2xl object-cover h-48 sm:h-64 w-full shadow-warm" />
            <img src={coffeeImg} alt="Latte art" width={1280} height={960} loading="lazy" className="rounded-2xl object-cover h-48 sm:h-64 w-full shadow-warm mt-8" />
            <img src={italianImg} alt="Chicken lasagna" width={1280} height={960} loading="lazy" className="rounded-2xl object-cover h-48 sm:h-64 w-full shadow-warm -mt-4" />
            <img src={dessertImg} alt="Tiramisu and red velvet" width={1280} height={960} loading="lazy" className="rounded-2xl object-cover h-48 sm:h-64 w-full shadow-warm mt-4" />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="A neighbourhood favourite for over a decade"
              subtitle="Glen's Bakehouse has been Bengaluru's go-to for buttery croissants, signature cold coffees and that comforting plate of breakfast you keep coming back to."
            />
            <ul className="mt-8 space-y-3 text-sm text-foreground/85">
              {[
                "Freshly baked breads, croissants & cakes — every morning",
                "Signature Glen's coffee, frappes & milkshakes",
                "All-day breakfast, sandwiches, burgers & pizzas",
                "Italian favorites: lasagna, quiche & risotto",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-coffee hover:text-accent transition"
            >
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* AMBIENCE BANNER */}
      <section
        className="relative h-[60vh] min-h-[420px] flex items-center justify-center text-center text-cream overflow-hidden"
      >
        <img
          src={ambienceImg}
          alt="Glen's Bakehouse café interior"
          width={1280}
          height={960}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover -z-10"
        />
        <div className="absolute inset-0 -z-10 bg-coffee/70" />
        <div className="container-narrow">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">A warm welcome awaits</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-balance">
            Pull up a chair. Stay a while.
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-cream/85">
            Soft lighting, the aroma of fresh bread, and the kind of coffee that
            makes you slow down. That's the Glen's experience.
          </p>
          <Link
            to="/gallery"
            className="mt-7 inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3 text-sm font-semibold text-coffee shadow-gold"
          >
            Explore the gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* REVIEWS PREVIEW */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Loved by Bengaluru"
            title="Rated 4.4 across 4,584 reviews"
            subtitle="A little of what our guests have to say about Glen's."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <article key={t.name} className="rounded-2xl bg-card border border-border p-7 hover:shadow-warm transition">
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">"{t.text}"</p>
                <p className="mt-5 font-display font-semibold text-coffee">— {t.name}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/reviews" className="inline-flex items-center gap-2 rounded-full border border-coffee px-6 py-3 text-sm font-semibold text-coffee hover:bg-coffee hover:text-cream transition">
              See all reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-narrow">
          <div className="rounded-3xl gradient-warm text-cream p-10 md:p-16 text-center shadow-warm overflow-hidden relative">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
            <h2 className="relative font-display text-3xl md:text-5xl font-bold text-balance">
              Come for the coffee. Stay for the cake.
            </h2>
            <p className="relative mt-4 text-cream/85 max-w-xl mx-auto">
              Open every day from 9 AM to 11:30 PM in HRBR Layout, Kalyan Nagar.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <a href={`tel:${restaurant.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full bg-cream text-coffee px-6 py-3 text-sm font-semibold hover:bg-accent transition">
                <Phone className="h-4 w-4" /> Call {restaurant.phone}
              </a>
              <a href={restaurant.directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold hover:bg-cream/10 transition">
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <img src={breakfastImg} className="hidden" alt="" aria-hidden width={1} height={1} />
    </>
  );
}
