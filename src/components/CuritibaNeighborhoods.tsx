import { m } from "framer-motion";

const neighborhoods = [
  "Batel", "Água Verde", "Bigorrilho", "Cabral", "Juvevê", 
  "Mercês", "Portão", "Ecoville", "Centro Civico", "Santa Felicidade",
  "Cristo Rei", "Jardim das Américas", "Vila Izabel", "Rebouças", "Prado Velho"
];

export function CuritibaNeighborhoods() {
  return (
    <div className="mt-12 border-t border-white/5 pt-10">
      <div className="mb-6 text-center">
        <h5 className="font-display text-sm font-bold uppercase tracking-widest text-gold/80">
          Atendimento nos principais bairros de Curitiba
        </h5>
      </div>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 px-4 text-center">
        {neighborhoods.map((n, i) => (
          <m.span
            key={n}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="text-[11px] font-medium text-white/40 transition-colors hover:text-gold"
          >
            • {n}
          </m.span>
        ))}
      </div>
    </div>
  );
}
