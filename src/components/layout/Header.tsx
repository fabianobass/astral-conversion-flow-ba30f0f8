import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { PHONE_SALES_DISPLAY, PHONE_SALES, waLink } from "@/lib/contact";
import logoAstral from "@/assets/logo-astral.webp";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-navy-deep/95 backdrop-blur-md shadow-lg" : "bg-navy-deep/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link to="/" className="relative flex items-center" aria-label="Astral Gás — Início">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 scale-150 rounded-full bg-[radial-gradient(ellipse_at_center,_hsl(var(--gold)/0.55),_transparent_70%)] blur-2xl"
          />
          <img
            src={logoAstral}
            alt="Astral Gás Aquecedores"
            className="relative h-10 w-auto md:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link to="/" className="text-sm text-white/80 hover:text-gold">Início</Link>
          <Link to="/servicos/aquecedor-a-gas" className="text-sm text-white/80 hover:text-gold">Aquecedor</Link>
          <Link to="/servicos/manutencao" className="text-sm text-white/80 hover:text-gold">Manutenção</Link>
          <Link to="/servicos/pressurizador" className="text-sm text-white/80 hover:text-gold">Pressurizador</Link>
          <Link to="/servicos/bomba-de-calor" className="text-sm text-white/80 hover:text-gold">Bomba de Calor</Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:+${PHONE_SALES}`} className="flex items-center gap-2 text-sm text-white/90 hover:text-gold">
            <Phone className="h-4 w-4 text-gold" />
            {PHONE_SALES_DISPLAY}
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep transition-transform hover:scale-105"
          >
            Orçamento Grátis
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-deep px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            <Link to="/" onClick={() => setOpen(false)} className="text-white/90 py-2">Início</Link>
            <Link to="/servicos/aquecedor-a-gas" onClick={() => setOpen(false)} className="text-white/90 py-2">Aquecedor a Gás</Link>
            <Link to="/servicos/manutencao" onClick={() => setOpen(false)} className="text-white/90 py-2">Manutenção</Link>
            <Link to="/servicos/pressurizador" onClick={() => setOpen(false)} className="text-white/90 py-2">Pressurizador</Link>
            <Link to="/servicos/bomba-de-calor" onClick={() => setOpen(false)} className="text-white/90 py-2">Bomba de Calor</Link>
            <a href={`tel:+${PHONE_SALES}`} className="flex items-center gap-2 text-white py-2">
              <Phone className="h-4 w-4 text-gold" /> {PHONE_SALES_DISPLAY}
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-gold px-5 py-3 text-center font-semibold text-navy-deep"
            >
              Orçamento Grátis no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
