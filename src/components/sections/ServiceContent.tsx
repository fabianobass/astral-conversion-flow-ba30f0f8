import { Check } from "lucide-react";
import { waLink } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function ServiceContent({ benefits, process, ctaLabel = "Falar agora no WhatsApp", ctaMessage }: { benefits: string[]; process: string[]; ctaLabel?: string; ctaMessage?: string }) {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-3xl font-bold text-navy-deep">O que está incluído</h2>
          <ul className="mt-6 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 group">
                <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 transition-colors group-hover:bg-gold/40">
                  <Check className="h-3 w-3 text-navy-deep" strokeWidth={3} />
                </span>
                <span className="text-foreground/80">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-secondary p-8">
          <h2 className="font-display text-3xl font-bold text-navy-deep">Como atendemos</h2>
          <ol className="mt-6 space-y-4">
            {process.map((p, i) => (
              <li key={p} className="flex gap-4 group">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy-deep font-bold text-gold transition-transform group-hover:scale-110">
                  {i + 1}
                </span>
                <span className="pt-1 text-foreground/80">{p}</span>
              </li>
            ))}
          </ol>
          <a
            href={waLink(undefined, ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ctaLabel}
            className="relative overflow-hidden mt-8 inline-flex min-h-11 sm:min-h-12 md:min-h-[52px] items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] max-w-full px-3.5 py-2.5 sm:px-5 sm:py-3 md:px-8 md:py-4.5 text-center text-balance text-[13px] sm:text-sm md:text-[15px] font-bold leading-[1.2] sm:leading-[1.15] md:leading-[1.1] tracking-tight text-white shadow-[0_12px_40px_-12px_rgba(37,211,102,0.5)] hover:shadow-[0_15px_45px_-10px_rgba(37,211,102,0.6)] hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80 transition duration-300 motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100 group"
          >
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
            <WhatsAppIcon className="relative z-10 h-[1.15em] w-[1.15em] shrink-0 self-center drop-shadow-sm" aria-hidden /> 
            <span className="relative z-10">{ctaLabel}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
