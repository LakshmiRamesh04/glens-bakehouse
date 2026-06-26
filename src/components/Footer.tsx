import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Instagram, Facebook, Youtube } from "lucide-react";
import { restaurant } from "@/lib/restaurant";

export function Footer() {
  return (
    <footer className="mt-24 bg-coffee text-cream">
      <div className="container-narrow py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full gradient-gold text-coffee font-display font-bold text-lg">
              G
            </span>
            <span className="font-display text-2xl font-bold">Glen's Bakehouse</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream/75">
            {restaurant.tagline}. A beloved Bengaluru bakery and café crafting
            artisan coffee, hearty breakfasts and signature baked goods every day.
          </p>
          <div className="mt-6 flex gap-3">
            <a aria-label="Instagram" href="#" className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 hover:bg-accent hover:text-coffee transition">
              <Instagram className="h-4 w-4" />
            </a>
            <a aria-label="Facebook" href="#" className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 hover:bg-accent hover:text-coffee transition">
              <Facebook className="h-4 w-4" />
            </a>
            <a aria-label="YouTube" href="#" className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 hover:bg-accent hover:text-coffee transition">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-accent">Visit</h4>
          <div className="mt-4 space-y-3 text-sm text-cream/80">
            <p className="flex items-start gap-2">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-accent" />
              <span>{restaurant.address}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <a href={`tel:${restaurant.phoneRaw}`} className="hover:text-accent">{restaurant.phone}</a>
            </p>
            <p className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" />
              <span>{restaurant.hours}</span>
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-accent">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li><Link to="/menu" className="hover:text-accent">Menu</Link></li>
            <li><Link to="/gallery" className="hover:text-accent">Gallery</Link></li>
            <li><Link to="/reviews" className="hover:text-accent">Reviews</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-narrow py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/60">
          <p>© {new Date().getFullYear()} Glen's Bakehouse. All rights reserved.</p>
          <p>Crafted with love in Bengaluru.</p>
        </div>
      </div>
    </footer>
  );
}
