import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { restaurant } from "@/lib/restaurant";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex h-16 md:h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 min-w-0" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full gradient-gold text-coffee font-display font-bold text-lg shadow-gold">
            G
          </span>
          <span className="font-display text-lg md:text-xl font-bold tracking-tight truncate text-coffee">
            Glen's Bakehouse
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              activeProps={{ className: "text-accent after:w-full" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${restaurant.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-full gradient-warm px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-warm hover:opacity-95 transition"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>

        <button
          className="lg:hidden grid place-items-center h-10 w-10 rounded-full border border-border bg-background/80"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md animate-fade-in">
          <nav className="container-narrow py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-base font-medium text-foreground/85 hover:bg-secondary hover:text-accent"
                activeProps={{ className: "bg-secondary text-accent" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${restaurant.phoneRaw}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-warm px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> Call {restaurant.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
