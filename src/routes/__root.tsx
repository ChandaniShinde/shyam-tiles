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
import logoIco from "@/assets/jd/d30cc59d-fa85-4e59-b493-e55c0e9ae31a.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary"
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
    // Lovable error reporting removed — retained hook intentionally left blank.
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
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
      { title: "Shyam Tiles | Premium Parking Tiles & Paver Blocks" },
      {
        name: "description",
        content:
          "Shyam Tiles supplies parking tiles, paver blocks, kerb stones, concrete blocks and interlocking pavers for durable paving and construction projects in Nanded.",
      },
      {
        name: "keywords",
        content:
          "Shyam Tiles, Parking Tiles Nanded, Paver Blocks Nanded, Kerb Stones Nanded, Concrete Blocks Nanded, Interlocking Pavers Nanded",
      },
      { name: "author", content: "Shyam Tiles" },
      { property: "og:title", content: "Shyam Tiles | Premium Parking Tiles & Paver Blocks" },
      {
        property: "og:description",
        content:
          "Durable parking tiles, paver blocks, kerb stones, concrete blocks and interlocking pavers for commercial and residential paving projects.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Shyam Tiles" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Shyam Tiles | Premium Parking Tiles & Paver Blocks" },
      {
        name: "twitter:description",
        content: "Premium paving materials and construction blocks in Nanded.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: logoIco, type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: "Shyam Tiles | Premium Parking Tiles & Paver Blocks",
          image: "",
          description:
            "Paving and construction materials supplier in Nanded, Maharashtra, offering parking tiles, paver blocks, kerb stones, concrete blocks and interlocking pavers.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Plot No. D-69, Pandurang Industries, Near Ruby Hotel, MIDC",
            addressLocality: "Nanded",
            addressRegion: "Maharashtra",
            postalCode: "431603",
            addressCountry: "IN",
          },
          telephone: "+91-9766000008",
          openingHours: "Mo-Sa 09:30-20:30",
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
      <Outlet />
    </QueryClientProvider>
  );
}
