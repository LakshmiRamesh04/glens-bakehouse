import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { restaurant } from "@/lib/restaurant";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Glen's Bakehouse | HRBR Layout, Bengaluru" },
      {
        name: "description",
        content:
          "Visit or call Glen's Bakehouse in HRBR Layout, Kalyan Nagar, Bengaluru. Open daily 9 AM – 11:30 PM. Phone: 090080 03473.",
      },
      { property: "og:title", content: "Contact — Glen's Bakehouse" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="container-narrow text-center">
          <SectionHeading
            eyebrow="Get in touch"
            title="Come say hello"
            subtitle="We'd love to bake you something special. Drop by, call us or get directions below."
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-narrow grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-5">
            <InfoCard icon={MapPin} title="Address">
              <p className="text-foreground/85 leading-relaxed">{restaurant.address}</p>
            </InfoCard>

            <InfoCard icon={Phone} title="Phone">
              <a href={`tel:${restaurant.phoneRaw}`} className="text-foreground/85 hover:text-accent text-lg font-medium">
                {restaurant.phone}
              </a>
            </InfoCard>

            <InfoCard icon={Clock} title="Opening Hours">
              <p className="text-foreground/85">{restaurant.hours}</p>
              <p className="mt-1 text-sm text-muted-foreground">Open all 7 days of the week</p>
            </InfoCard>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`tel:${restaurant.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full gradient-warm px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={restaurant.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-coffee text-cream px-6 py-3 text-sm font-semibold hover:bg-accent hover:text-coffee transition"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-3xl overflow-hidden border border-border shadow-warm min-h-[420px]">
            <iframe
              title="Glen's Bakehouse map"
              src={restaurant.mapEmbed}
              width="100%"
              height="100%"
              className="w-full h-full min-h-[420px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-card border border-border p-6 hover:shadow-warm transition">
      <div className="flex items-center gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl gradient-gold text-coffee shadow-gold">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-display text-xl font-bold text-coffee">{title}</h3>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
