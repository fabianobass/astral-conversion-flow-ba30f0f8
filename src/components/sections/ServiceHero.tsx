import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { waLink } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

type Variant = "card" | "background";

export function ServiceHero({
  eyebrow,
  title,
  description,
  image,
  ctaLabel = "Pedir orçamento no WhatsApp",
  ctaMessage,
  variant = "card",
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image?: string;
  ctaLabel?: string;
  ctaMessage?: string;
  variant?: Variant;
}) {
  const ctaButton = (
    <a
      href={waLink(undefined, ctaMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ctaLabel}
      className="inline-flex min-h-11 sm:min-h-12 md:min-h-[52px] items-center justify-center gap-2 rounded-full bg-whatsapp max-w-full px-3.5 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3.5 text-center text-balance text-[13px] sm:text-sm md:text-[15px] font-semibold leading-[1.2] sm:leading-[1.15] md:leading-[1.1] tracking-[-0.005em] text-white shadow-[0_8px_24px_-8px_rgba(34,197,94,0.55)] hover:bg-emerald-500 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80 transition motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100"
    >
      <WhatsAppIcon className="h-[1.15em] w-[1.15em] shrink-0 self-center" aria-hidden /> {ctaLabel}
    </a>
  );

  if (variant === "background") {
    return (
      <section className="relative overflow-hidden bg-navy-deep pt-28 pb-16 text-white sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        {image && (
          <>
            <img
              src={image}
              alt=""
              aria-hidden
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-navy-deep/75 sm:bg-navy-deep/55 md:bg-navy-deep/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/40 to-navy-deep/20" />
          </>
        )}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-4 lg:px-8">
          <nav data-nav-surface="dark" className="mb-8 flex items-center gap-1 text-xs text-nav-fg/85" aria-label="Breadcrumb">
            <Link to="/" className="rounded transition-colors hover:text-nav-fg-hover focus-ring-nav">Início</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-nav-fg-active font-semibold">{eyebrow}</span>
          </nav>
          <div className="mb-3 text-xs uppercase tracking-widest text-gold font-semibold">{eyebrow}</div>
          <h1 className="font-display text-[26px] font-bold leading-[1.15] sm:text-4xl lg:text-5xl max-w-3xl text-balance drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">{description}</p>
          <div className="mt-8">{ctaButton}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-navy-deep pt-28 pb-16 text-white sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-navy/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <nav data-nav-surface="dark" className="mb-8 flex items-center gap-1 text-xs text-nav-fg/85" aria-label="Breadcrumb">
            <Link to="/" className="rounded transition-colors hover:text-nav-fg-hover focus-ring-nav">Início</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-nav-fg-active font-semibold">{eyebrow}</span>
          </nav>
          <div className="mb-3 text-xs uppercase tracking-widest text-gold font-semibold">{eyebrow}</div>
          <h1 className="font-display text-[26px] font-bold leading-[1.15] sm:text-4xl lg:text-5xl text-balance">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">{description}</p>
          <div className="mt-8">{ctaButton}</div>
        </div>

        {image && (
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/30 to-transparent blur-2xl" />
            <img
              src={image}
              alt=""
              aria-hidden
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="relative rounded-3xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
            />
          </div>
        )}
      </div>
    </section>
  );
}
