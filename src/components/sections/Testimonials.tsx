import { Star, Quote } from "lucide-react";
import { m } from "framer-motion";
import { GoogleReviewBadge } from "@/components/GoogleReviewBadge";

const reviews = [
  {
    name: "Mariana Silva",
    area: "Batel, Curitiba",
    text: "Atendimento impecável. Instalaram o aquecedor Rinnai no mesmo dia da visita. Equipe muito educada e organizada.",
  },
  {
    name: "Rodrigo Martins",
    area: "Água Verde, Curitiba",
    text: "Meu aquecedor parou em pleno inverno. Resolveram em poucas horas com peça original. Preço justo e nota fiscal.",
  },
  {
    name: "Carolina Andrade",
    area: "Ecoville, Curitiba",
    text: "Instalei o pressurizador e a diferença é absurda. Recomendo de olhos fechados a Astral Gás.",
  },
  {
    name: "Felipe Costa",
    area: "Bigorrilho, Curitiba",
    text: "Trocaram meu aquecedor antigo por um Rinnai novo em poucas horas. Explicaram tudo com paciência. Top!",
  },
  {
    name: "Juliana Pereira",
    area: "Cabral, Curitiba",
    text: "Manutenção preventiva super profissional. Técnico chegou no horário, uniformizado, e deixou tudo limpo.",
  },
  {
    name: "André Ribeiro",
    area: "Champagnat, Curitiba",
    text: "Já é a segunda instalação que faço com eles. Preço honesto, garantia de verdade e atendimento humano.",
  },
];

function Avatar({ name }: { name: string }) {
  const initial = name.charAt(0).toUpperCase();
  return (
    <div
      aria-hidden="true"
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold to-amber-500 font-display text-xl font-bold text-navy-deep shadow-[0_4px_12px_-2px_rgba(0,0,0,0.4)]"
    >
      {initial}
    </div>
  );
}

export function Testimonials() {
  return (
    <section data-nav-surface="dark" className="bg-navy-deep py-24 text-nav-fg">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <div className="mb-3 text-xs uppercase tracking-widest text-nav-fg-active font-semibold">Depoimentos</div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            O que dizem nossos <span className="italic text-nav-fg-active">clientes</span>
          </h2>
          <div className="mt-6 flex justify-center">
            <GoogleReviewBadge variant="dark" size="lg" count="baseado em +200 avaliações" />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <m.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative rounded-2xl border border-nav-fg/15 bg-nav-fg/5 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-nav-fg/[0.08]"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-gold/20 transition-colors group-hover:text-gold/40" aria-hidden="true" />
              <div className="mb-4 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-nav-fg leading-relaxed">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-nav-fg/15 pt-4">
                <Avatar name={r.name} />
                <div className="min-w-0">
                  <div className="font-display text-base font-semibold text-nav-fg-active truncate">{r.name}</div>
                  <div className="text-xs text-nav-fg/70 truncate">{r.area}</div>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
