import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Mariana S.",
    area: "Batel, Curitiba",
    text: "Atendimento impecável. Instalaram o aquecedor Rinnai no mesmo dia da visita. Equipe muito educada e organizada.",
  },
  {
    name: "Rodrigo M.",
    area: "Água Verde, Curitiba",
    text: "Meu aquecedor parou em pleno inverno. Resolveram em poucas horas com peça original. Preço justo e nota fiscal.",
  },
  {
    name: "Carolina A.",
    area: "Ecoville, Curitiba",
    text: "Instalei o pressurizador e a diferença é absurda. Recomendo de olhos fechados a Astral Gás.",
  },
];

export function Testimonials() {
  return (
    <section data-nav-surface="dark" className="bg-navy-deep py-24 text-nav-fg">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <div className="mb-3 text-xs uppercase tracking-widest text-nav-fg-active font-semibold">Depoimentos</div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            O que dizem nossos <span className="italic text-nav-fg-active">clientes</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-nav-fg/15 bg-nav-fg/5 p-7 backdrop-blur"
            >
              <div className="mb-4 flex gap-1 text-nav-accent">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-nav-fg leading-relaxed">"{r.text}"</p>
              <div className="mt-6 border-t border-nav-fg/15 pt-4">
                <div className="font-display text-lg font-semibold text-nav-fg-active">{r.name}</div>
                <div className="text-xs text-nav-fg/70">{r.area}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
