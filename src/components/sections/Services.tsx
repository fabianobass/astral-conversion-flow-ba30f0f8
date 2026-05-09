import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Flame, Wrench, Droplets, Thermometer, ArrowRight } from "lucide-react";

const services = [
  {
    to: "/servicos/aquecedor-a-gas",
    icon: Flame,
    title: "Aquecedor a Gás",
    desc: "Venda e instalação certificada de aquecedores das melhores marcas, dimensionados para sua casa.",
  },
  {
    to: "/servicos/manutencao",
    icon: Wrench,
    title: "Manutenção",
    desc: "Manutenção preventiva e corretiva com peças originais. Volte a ter banho quente no mesmo dia.",
  },
  {
    to: "/servicos/pressurizador",
    icon: Droplets,
    title: "Pressurizador",
    desc: "Acabe com a baixa pressão. Banhos e torneiras com força ideal em todos os pontos da casa.",
  },
  {
    to: "/servicos/bomba-de-calor",
    icon: Thermometer,
    title: "Bomba de Calor",
    desc: "Aquecimento eficiente para piscinas e residências, com economia de até 70% de energia.",
  },
];

export function Services() {
  return (
    <section className="py-24" id="servicos">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <div className="mb-3 text-xs uppercase tracking-widest text-gold font-semibold">Nossos Serviços</div>
          <h2 className="font-display text-4xl font-bold text-navy-deep sm:text-5xl">
            Soluções completas em <span className="italic text-navy">aquecimento</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.to}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={s.to}
                aria-label={`${s.title} — Saiba mais`}
                className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 outline-none hover:-translate-y-1 hover:border-nav-accent hover:shadow-[var(--shadow-premium)] focus-visible:ring-2 focus-visible:ring-nav-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="absolute right-0 top-0 h-32 w-32 -translate-y-12 translate-x-12 rounded-full bg-gold/10 blur-2xl transition-all group-hover:bg-gold/20" />
                <div className="relative">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-navy-deep to-navy text-gold">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy-deep">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-gold">
                    Saiba mais <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
