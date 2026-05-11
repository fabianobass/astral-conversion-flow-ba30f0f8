import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { isWhatsAppUrl, trackWhatsAppClick } from "@/lib/analytics";

import appCss from "../styles.css?url";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { StyleSwitcher } from "@/components/StyleSwitcher";
import { localBusinessJsonLd, jsonLdScript } from "@/lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
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

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
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
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#0a1628" },
      { name: "format-detection", content: "telephone=no" },
      { name: "author", content: "Astral Gás Aquecedores" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "dns-prefetch", href: "https://wa.me" },
      { rel: "dns-prefetch", href: "https://api.whatsapp.com" },
      { rel: "dns-prefetch", href: "https://www.googletagmanager.com" },
    ],
    scripts: [
      jsonLdScript(localBusinessJsonLd),
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-R7WVSM499B",
      },
      {
        children:
          "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','G-R7WVSM499B');gtag('config','AW-11394967004');",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
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

function AnimatedOutlet() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <AnimatePresence mode="wait">
      <m.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.18, ease: "easeOut" } }}
        exit={{ opacity: 0, transition: { duration: 0.12, ease: "easeIn" } }}
      >
        <Outlet />
      </m.div>
    </AnimatePresence>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  // Listener global: dispara conversão do Google Ads em qualquer clique
  // de link do WhatsApp (wa.me / api.whatsapp.com), em qualquer parte do site.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      if (isWhatsAppUrl(anchor.getAttribute("href"))) {
        trackWhatsAppClick();
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LazyMotion features={domAnimation} strict>
        <a
          href="#main-content"
          data-nav-surface="dark"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-navy-deep focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-nav-fg-active focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-nav-accent"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="main-content" tabIndex={-1} className="min-h-screen focus:outline-none">
          <AnimatedOutlet />
        </main>
        <Footer />
        <WhatsAppFloat />
        <StyleSwitcher />
      </LazyMotion>
    </QueryClientProvider>
  );
}
