import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { waLink } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function ServiceHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden bg-navy-deep pt-32 pb-20 text-white">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-4 lg:px-8">
        <nav className="mb-8 flex items-center gap-1 text-xs text-white/50">
          <Link to="/" className="hover:text-gold">Início</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white/80">{eyebrow}</span>
        </nav>
        <div className="mb-3 text-xs uppercase tracking-widest text-gold font-semibold">{eyebrow}</div>
        <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-white/75">{description}</p>
        <div className="mt-8">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar orçamento gratuito pelo WhatsApp"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-4 font-semibold text-white shadow-[0_10px_40px_-10px_rgba(34,197,94,0.6)] transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" /> Orçamento gratuito no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
