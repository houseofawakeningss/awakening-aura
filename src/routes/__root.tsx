import { Outlet, createRootRoute, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import appCss from "../styles.css?url";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Preloader from "../components/Preloader";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 text-xl">Page not found</h2>
        <p className="mt-2 text-sm opacity-70">This path hasn't yet been awakened.</p>
        <a href="/" className="btn-primary mt-8">Return Home</a>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "House of Awakenings — Yoga & Inner Healing in Bangalore" },
      { name: "description", content: "A sanctuary for deep inner work — yoga, sound healing, breathwork, ice baths and more, founded by Gunja Tolani in Bangalore." },
      { name: "author", content: "House of Awakenings" },
      { property: "og:title", content: "House of Awakenings" },
      { property: "og:description", content: "A sanctuary for deep inner work in Bangalore." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://files.catbox.moe/kixhvl.webp" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
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

function ScrollToTop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    // Always start each route at the top — but allow hash anchors
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
    // Reset theme to light on route change; Home page can opt back into dark via scroll
    document.body.classList.remove("theme-dark");
  }, [pathname]);
  return null;
}

function RootComponent() {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen pt-0">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
