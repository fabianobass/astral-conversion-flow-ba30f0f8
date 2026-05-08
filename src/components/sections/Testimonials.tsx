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
    <section className="bg-navy-deep py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <div className="mb-3 text-xs uppercase tracking-widest text-gold font-semibold">Depoimentos</div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            O que dizem nossos <span className="italic text-gold">clientes</span>
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
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur"
            >
              <div className="mb-4 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-white/85 leading-relaxed">"{r.text}"</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="font-display text-lg font-semibold">{r.name}</div>
                <div className="text-xs text-white/50">{r.area}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
