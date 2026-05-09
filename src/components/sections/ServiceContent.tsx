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
              <li key={b} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold/20">
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
              <li key={p} className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy-deep font-bold text-gold">
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
            className="mt-8 inline-flex min-h-11 sm:min-h-12 md:min-h-[52px] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-whatsapp px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3.5 text-[12px] sm:text-[13px] md:text-sm font-semibold leading-none tracking-[-0.005em] text-white shadow-[0_8px_24px_-8px_rgba(34,197,94,0.55)] hover:bg-emerald-500 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80 transition"
          >
            <WhatsAppIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px] md:h-5 md:w-5 shrink-0 self-center [vertical-align:middle]" aria-hidden /> {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
