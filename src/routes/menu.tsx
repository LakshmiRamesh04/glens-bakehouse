import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { menu } from "@/lib/menu-data";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Glen's Bakehouse | Bakery, Coffee, Breakfast & More" },
      {
        name: "description",
        content:
          "Browse the full Glen's Bakehouse menu: soups, salads, pizzas, sandwiches, burgers, breakfast, Italian favorites, signature dishes, beverages & desserts.",
      },
      { property: "og:title", content: "Menu — Glen's Bakehouse" },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(() => {
    if (active === "all") return menu;
    return menu.filter((c) => c.id === active);
  }, [active]);

  return (
    <>
      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="container-narrow text-center">
          <SectionHeading
            eyebrow="Our menu"
            title="Crafted with care, baked with love"
            subtitle="From morning bakes to late-night desserts — there's something here for every craving."
          />
        </div>
      </section>

      {/* Category filter pills */}
      <section className="sticky top-16 md:top-20 z-30 bg-background/90 backdrop-blur border-b border-border">
        <div className="container-narrow py-3 overflow-x-auto">
          <div className="flex gap-2 w-max">
            <FilterPill active={active === "all"} onClick={() => setActive("all")}>
              All
            </FilterPill>
            {menu.map((c) => (
              <FilterPill key={c.id} active={active === c.id} onClick={() => setActive(c.id)}>
                {c.title}
              </FilterPill>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-narrow space-y-20">
          {filtered.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-36">
              <div className="text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-coffee">{cat.title}</h2>
                {cat.subtitle && (
                  <p className="mt-2 text-muted-foreground">{cat.subtitle}</p>
                )}
                <div className="mt-4 mx-auto h-[2px] w-14 gradient-gold rounded" />
              </div>

              {cat.items.length > 0 && (
                <div className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-2">
                  {cat.items.map((item) => (
                    <MenuRow key={item.name} name={item.name} description={item.description} />
                  ))}
                </div>
              )}

              {cat.subgroups?.map((sg) => (
                <div key={sg.title} className="mt-12">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-accent">
                    {sg.title}
                  </h3>
                  <div className="mt-6 grid gap-x-10 gap-y-6 md:grid-cols-2">
                    {sg.items.map((item) => (
                      <MenuRow key={sg.title + item.name} name={item.name} description={item.description} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function FilterPill({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium border transition ${
        active
          ? "bg-coffee text-cream border-coffee shadow-warm"
          : "bg-card text-foreground/75 border-border hover:border-accent hover:text-accent"
      }`}
    >
      {children}
    </button>
  );
}

function MenuRow({ name, description }: { name: string; description?: string }) {
  return (
    <div className="group">
      <div className="flex items-baseline gap-3">
        <h4 className="font-display text-lg font-semibold text-coffee">{name}</h4>
        <div className="flex-1 border-b border-dashed border-border/80 translate-y-[-4px]" />
      </div>
      {description && (
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}
