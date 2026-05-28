import { Droplets } from "lucide-react";

const tiers = [
  {
    flow: "10 a 15 L/min",
    title: "1 ponto de uso",
    desc: "Ideal para apartamentos compactos e casas com 1 chuveiro em uso simultâneo. Modelos populares: Rinnai E11, Lorenzetti LZ 1600D, Bosch Therm 1000.",
  },
  {
    flow: "18 a 22 L/min",
    title: "2 pontos simultâneos",
    desc: "Cobre chuveiro + cozinha ou 2 chuveiros ao mesmo tempo. Sugestões: Rinnai REU E21, Komeco KO 22D, Bosch Therm 2400.",
  },
  {
    flow: "27 a 32 L/min",
    title: "3 ou mais pontos",
    desc: "Casas grandes, hidromassagem, lavabos extras ou famílias numerosas. Sugestões: Rinnai Infinity 32, Bosch Therm 3000, Rheem 32L.",
  },
];

export function SizingGuide() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 text-xs uppercase tracking-widest text-gold font-semibold">
            Como escolher
          </div>
          <h2 className="font-display text-3xl font-bold text-navy-deep sm:text-4xl">
            Qual vazão de aquecedor a gás é ideal para você?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/75">
            A vazão (litros por minuto) define quantas torneiras podem ser usadas
            ao mesmo tempo com água quente. Em Curitiba, onde a água fria chega
            perto de 12 °C no inverno, sempre dimensionamos com folga de segurança.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.flow}
              className="rounded-2xl border border-border bg-background p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy-deep text-gold">
                <Droplets className="h-6 w-6" />
              </div>
              <div className="text-xs uppercase tracking-widest text-gold font-semibold">
                {t.flow}
              </div>
              <h3 className="mt-1 font-display text-xl font-bold text-navy-deep">
                {t.title}
              </h3>
              <p className="mt-3 text-sm text-foreground/75">{t.desc}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-muted-foreground">
          Não tem certeza? Manda uma foto do ponto atual no WhatsApp que
          dimensionamos gratuitamente — sem compromisso.
        </p>
      </div>
    </section>
  );
}
