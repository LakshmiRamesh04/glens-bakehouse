import { Star } from "lucide-react";
import { restaurant } from "@/lib/restaurant";

export function RatingBadge({ variant = "light" }: { variant?: "light" | "dark" }) {
  const dark = variant === "dark";
  return (
    <div
      className={`inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium ${
        dark
          ? "bg-coffee/90 text-cream backdrop-blur-sm"
          : "bg-cream/95 text-coffee backdrop-blur-sm border border-border"
      }`}
    >
      <div className="flex items-center gap-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-accent text-accent"
          />
        ))}
      </div>
      <span className="font-display font-bold">{restaurant.rating}</span>
      <span className={dark ? "text-cream/70" : "text-muted-foreground"}>
        ({restaurant.reviews.toLocaleString()} reviews)
      </span>
    </div>
  );
}
