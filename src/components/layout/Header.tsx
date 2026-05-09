import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Home, Flame, Wrench, Droplets, Thermometer } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SpecialistDropdown } from "@/components/SpecialistDropdown";
import logoAstral from "@/assets/logo-astral.webp";

const NAV = [
  { to: "/", label: "Início", short: "Início", icon: Home },
  { to: "/servicos/aquecedor-a-gas", label: "Aquecedor a Gás", short: "Aquecedor", icon: Flame },
  { to: "/servicos/manutencao", label: "Manutenção", short: "Manutenção", icon: Wrench },
  { to: "/servicos/pressurizador", label: "Pressurizador", short: "Pressurizador", icon: Droplets },
  { to: "/servicos/bomba-de-calor", label: "Bomba de Calor", short: "Bomba de Calor", icon: Thermometer },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setTimeout(() => setOpen(false), 180);
      }
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-background/80 backdrop-blur-sm border-b border-border/50"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link to="/" className="flex items-center transition-transform hover:scale-105" aria-label="Astral Gás — Início">
          <img
            src={logoAstral}
            alt="Astral Gás Aquecedores"
            className="h-10 w-auto md:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {NAV.map(({ to, label, short, icon: Icon }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                aria-label={label}
                aria-current={active ? "page" : undefined}
                className={`group relative flex items-center gap-1.5 rounded-full px-3 py-2 text-sm transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  active
                    ? "text-navy-deep font-semibold"
                    : "text-foreground font-medium hover:text-navy-deep hover:bg-gold/10"
                }`}
              >
                <Icon aria-hidden="true" className={`h-4 w-4 transition-transform duration-300 ${active ? "text-navy-deep" : "text-foreground/80 group-hover:text-navy-deep group-hover:scale-110 group-hover:rotate-[-6deg]"}`} />
                <span>{short}</span>
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <SpecialistDropdown />
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="lg:hidden rounded-md p-1 text-foreground transition-transform active:scale-90 outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {open ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Navegação mobile">
              {NAV.map(({ to, label, icon: Icon }, i) => {
                const active = pathname === to;
                return (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.25, delay: 0.05 + i * 0.04, ease: "easeOut" }}
                  >
                    <Link
                      to={to}
                      aria-label={label}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setTimeout(() => setOpen(false), 180)}
                      className={`group flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                        active
                          ? "bg-gold/10 text-gold"
                          : "text-foreground hover:bg-secondary hover:translate-x-1"
                      }`}
                    >
                      <span aria-hidden="true" className={`flex h-9 w-9 items-center justify-center rounded-full ${active ? "bg-gold/20" : "bg-secondary group-hover:bg-gold/15"} transition-colors`}>
                        <Icon className={`h-4 w-4 ${active ? "text-gold" : "text-foreground/80 group-hover:text-gold"} transition-colors`} />
                      </span>
                      <span className="font-medium">{label}</span>
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.25, delay: 0.05 + NAV.length * 0.04, ease: "easeOut" }}
                className="mt-3"
              >
                <SpecialistDropdown className="w-full px-5 py-3" />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
