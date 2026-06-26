import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-coffee">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full gradient-warm px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-semibold text-coffee">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Please try refreshing.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full gradient-warm px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-input bg-background px-5 py-2.5 text-sm font-semibold"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Glen's Bakehouse — Freshly Baked Happiness Every Day | Bengaluru" },
      {
        name: "description",
        content:
          "Glen's Bakehouse is a beloved Bengaluru bakery & café in HRBR Layout serving artisan coffee, freshly baked goods, hearty breakfasts, pizzas, sandwiches and signature desserts.",
      },
      { name: "author", content: "Glen's Bakehouse" },
      { property: "og:title", content: "Glen's Bakehouse — Freshly Baked Happiness Every Day | Bengaluru" },
      {
        property: "og:description",
        content:
          "Artisan bakery & café in Kalyan Nagar, Bengaluru. Freshly baked goods, coffee, breakfast and Italian favorites.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Glen's Bakehouse" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#f5e9c9" },
      { name: "twitter:title", content: "Glen's Bakehouse — Freshly Baked Happiness Every Day | Bengaluru" },
      { name: "description", content: "Glen's Bakehouse Digital is a modern, premium restaurant website showcasing a bakery and café's offerings." },
      { property: "og:description", content: "Glen's Bakehouse Digital is a modern, premium restaurant website showcasing a bakery and café's offerings." },
      { name: "twitter:description", content: "Glen's Bakehouse Digital is a modern, premium restaurant website showcasing a bakery and café's offerings." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c9355d42-f34b-4292-9447-3acf1890f8d3/id-preview-a6b13c8b--9f25f738-f394-4813-b82b-f0220e78b33b.lovable.app-1782497196929.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c9355d42-f34b-4292-9447-3acf1890f8d3/id-preview-a6b13c8b--9f25f738-f394-4813-b82b-f0220e78b33b.lovable.app-1782497196929.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Glen's Bakehouse",
          servesCuisine: ["Bakery", "Cafe", "Italian", "Continental"],
          priceRange: "₹₹",
          telephone: "+91-9008003473",
          address: {
            "@type": "PostalAddress",
            streetAddress: "426, 7th Main Rd, HRBR Layout 1st Block",
            addressLocality: "Bengaluru",
            addressRegion: "Karnataka",
            postalCode: "560043",
            addressCountry: "IN",
          },
          openingHours: "Mo-Su 09:00-23:30",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.4",
            reviewCount: "4584",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </QueryClientProvider>
  );
}
