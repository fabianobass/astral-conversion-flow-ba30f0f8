import { Check, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";

export function ServiceContent({ benefits, process }: { benefits: string[]; process: string[] }) {
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
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-white"
          >
            <MessageCircle className="h-5 w-5" /> Falar agora
          </a>
        </div>
      </div>
    </section>
  );
}
