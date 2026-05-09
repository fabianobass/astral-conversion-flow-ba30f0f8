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
            className="mt-8 inline-flex w-full sm:w-auto min-h-[56px] items-center justify-center gap-2.5 rounded-full bg-whatsapp px-8 py-4 sm:py-5 text-base sm:text-lg font-bold text-white ring-2 ring-emerald-300/50 shadow-[0_14px_40px_-8px_rgba(34,197,94,0.7)] hover:bg-emerald-500 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300/80 transition"
          >
            <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" /> {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
