import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Home, Flame, Wrench, Droplets, Thermometer } from "lucide-react";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
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

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map(({ to, short, icon: Icon }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`group relative flex items-center gap-1.5 rounded-full px-3 py-2 text-sm transition-all duration-300 ${
                  active
                    ? "text-gold"
                    : "text-foreground/80 hover:text-gold hover:bg-gold/5"
                }`}
              >
                <Icon className={`h-4 w-4 transition-transform duration-300 ${active ? "" : "group-hover:scale-110 group-hover:rotate-[-6deg]"}`} />
                <span>{short}</span>
                <span
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
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground transition-transform active:scale-90"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 py-4 lg:hidden animate-fade-in">
          <nav className="flex flex-col gap-1">
            {NAV.map(({ to, label, icon: Icon }) => {
              const active = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={`group flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200 ${
                    active
                      ? "bg-gold/10 text-gold"
                      : "text-foreground/90 hover:bg-secondary hover:translate-x-1"
                  }`}
                >
                  <span className={`flex h-9 w-9 items-center justify-center rounded-full ${active ? "bg-gold/20" : "bg-secondary group-hover:bg-gold/15"} transition-colors`}>
                    <Icon className={`h-4 w-4 ${active ? "text-gold" : "text-foreground/70 group-hover:text-gold"} transition-colors`} />
                  </span>
                  <span className="font-medium">{label}</span>
                </Link>
              );
            })}
            <div className="mt-3">
              <SpecialistDropdown className="w-full px-5 py-3" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
