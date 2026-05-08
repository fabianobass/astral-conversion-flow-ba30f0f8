import { MessageCircle, ClipboardCheck, Wrench } from "lucide-react";
import { waLink } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const steps = [
  { icon: MessageCircle, title: "Fale conosco", desc: "Envie uma mensagem no WhatsApp. Respondemos em minutos com orçamento estimado." },
  { icon: ClipboardCheck, title: "Visita técnica", desc: "Avaliação no local sem compromisso para dimensionar a melhor solução." },
  { icon: Wrench, title: "Instalação no mesmo dia", desc: "Execução rápida, limpa e segura, com testes finais e orientações de uso." },
];

export function Process() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <div className="mb-3 text-xs uppercase tracking-widest text-gold font-semibold">Como funciona</div>
          <h2 className="font-display text-4xl font-bold text-navy-deep sm:text-5xl">
            Do primeiro contato ao <span className="italic text-navy">banho quente</span>
          </h2>
        </div>
        <div className="relative grid gap-10 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent md:block" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center">
              <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-navy-deep text-gold ring-4 ring-background">
                <s.icon className="h-7 w-7" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy-deep">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-navy-deep">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-4 font-semibold text-white shadow-[0_10px_40px_-10px_rgba(34,197,94,0.6)] transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" /> Começar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
