import { Award, ShieldCheck, Users, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: ShieldCheck, title: "Garantia total", desc: "Produtos e instalação com garantia de fábrica e nossa cobertura adicional." },
  { icon: Users, title: "Técnicos certificados", desc: "Equipe treinada diretamente pelos fabricantes Rinnai, Komeco e Bosch." },
  { icon: Award, title: "Peças 100% originais", desc: "Apenas componentes genuínos. Recusamos similares que comprometem a segurança." },
  { icon: CreditCard, title: "Pagamento facilitado", desc: "PIX, cartão em até 12x e condições especiais para projetos completos." },
];

export function WhyUs() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <div className="mb-3 text-xs uppercase tracking-widest text-gold font-semibold">Por que Astral Gás</div>
          <h2 className="font-display text-4xl font-bold text-navy-deep sm:text-5xl">
            Confiança construída em cada <span className="italic text-navy">instalação</span>
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold to-amber-500 shadow-[var(--shadow-gold)]">
                <it.icon className="h-7 w-7 text-navy-deep" strokeWidth={2.2} />
              </div>
              <h3 className="font-display text-lg font-bold text-navy-deep">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
