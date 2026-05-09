import { createFileRoute } from "@tanstack/react-router";
import { Wifi, Snowflake, Flame, ShieldCheck, Gauge, Wrench } from "lucide-react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceContent } from "@/components/sections/ServiceContent";
import { CtaForm } from "@/components/sections/CtaForm";
import { FAQ } from "@/components/sections/FAQ";
import { waLink } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import heroPiscina from "@/assets/bomba-de-calor/hero-piscina.png";
import bombaProduto from "@/assets/bomba-de-calor/bomba-produto.png";
import piscinaVapor from "@/assets/bomba-de-calor/piscina-vapor.jpg";
import piscinaAerea from "@/assets/bomba-de-calor/piscina-aerea.png";

export const Route = createFileRoute("/servicos/bomba-de-calor")({
  head: () => ({
    meta: [
      { title: "Bomba de Calor para Piscina em Curitiba | Astral Gás" },
      { name: "description", content: "Instalação de bomba de calor Full Inverter para piscinas em Curitiba. Aquece no inverno, refresca no verão, economia de até 80% e controle via Wi-Fi." },
      { property: "og:title", content: "Bomba de Calor para Piscina — Astral Gás" },
      { property: "og:description", content: "Conforto térmico o ano inteiro: tecnologia Full Inverter, condensador em titânio e Wi-Fi integrado." },
      { property: "og:image", content: heroPiscina },
      { name: "twitter:image", content: heroPiscina },
    ],
  }),
  component: Page,
});

const features = [
  { icon: Gauge, title: "Compressor Full Inverter", text: "Ajusta a potência conforme a necessidade da água, evita picos de energia e mantém a temperatura estável." },
  { icon: Snowflake, title: "Sistema Quente-Frio", text: "Aquecida no inverno, refrescante no verão. Uma única solução para o ano inteiro." },
  { icon: ShieldCheck, title: "Condensador em Titânio", text: "Alta resistência à corrosão, mesmo em piscinas com sal ou cloro elevado." },
  { icon: Wifi, title: "Controle via Wi-Fi", text: "Gerencie a temperatura da piscina direto do celular, de qualquer lugar." },
  { icon: Flame, title: "Até 80% de economia", text: "Eficiência muito superior ao aquecimento elétrico convencional." },
  { icon: Wrench, title: "Instalação especializada", text: "Equipe Astral Gás cuida do projeto hidráulico, elétrico e da partida." },
];

function Page() {
  return (
    <>
      <ServiceHero
        eyebrow="Bomba de Calor"
        title="Conforto térmico na sua piscina o ano inteiro"
        description="Aquecimento e refrigeração para piscinas com tecnologia Full Inverter, máxima eficiência, economia de até 80% e controle inteligente via Wi-Fi."
        image={heroPiscina}
      />

      {/* Sobre a tecnologia */}
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <div className="mb-3 text-xs uppercase tracking-widest text-gold font-semibold">A tecnologia</div>
            <h2 className="font-display text-3xl font-bold leading-tight text-navy-deep sm:text-4xl">
              Bombas de calor de última geração para a sua piscina
            </h2>
            <p className="mt-5 text-foreground/75">
              A Astral Gás trabalha com bombas de calor de alta performance, desenvolvidas para
              quem exige eficiência energética, durabilidade e conforto em todas as estações.
              Equipamentos com tecnologia Full Inverter, condensador em titânio e proteção
              anticorrosiva, ideais inclusive para piscinas com água salgada ou tratada com cloro.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-card p-4 text-center">
                <div className="font-display text-2xl font-bold text-navy-deep">2 anos</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-foreground/60">Garantia</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 text-center">
                <div className="font-display text-2xl font-bold text-navy-deep">até 80%</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-foreground/60">Economia</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 text-center">
                <div className="font-display text-2xl font-bold text-navy-deep">Wi-Fi</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-foreground/60">Integrado</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-gold/30 to-transparent blur-2xl" />
            <img
              src={bombaProduto}
              alt="Bomba de calor Full Inverter para piscina instalada pela Astral Gás"
              className="relative w-full rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Compatibilidade água salgada */}
      <section className="relative overflow-hidden bg-navy-deep py-20 text-white">
        <img src={piscinaVapor} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
        <div className="relative mx-auto max-w-4xl px-4 lg:px-8">
          <div className="mb-3 text-xs uppercase tracking-widest text-gold font-semibold">Versatilidade</div>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
            Compatível com todos os tipos de água, inclusive salgada
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Condensador em titânio e proteção anticorrosiva garantem alta durabilidade mesmo em
            piscinas com água salgada ou tratadas com cloro. Mais liberdade para você aproveitar,
            sem se preocupar com a corrosão.
          </p>
        </div>
      </section>

      {/* Engenharia / features */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 text-xs uppercase tracking-widest text-gold font-semibold">Engenharia</div>
            <h2 className="font-display text-3xl font-bold text-navy-deep sm:text-4xl">
              Engenharia que entrega performance
            </h2>
            <p className="mt-4 text-foreground/70">
              Bombas de calor para quem exige eficiência real: mais estabilidade, menos ruído, maior durabilidade.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="group rounded-2xl border border-border bg-card p-6 transition hover:border-gold hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-navy-deep transition group-hover:bg-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-navy-deep">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceContent
        benefits={[
          "Projeto sob medida para o tamanho da sua piscina",
          "Equipamentos Full Inverter de alta eficiência",
          "Instalação completa: hidráulica, elétrica e partida",
          "Compatível com piscinas de cloro e água salgada",
          "Funcionamento silencioso e durável",
          "Manutenção e suporte técnico continuado",
        ]}
        process={[
          "Conte sobre a sua piscina (volume, local, uso)",
          "Cálculo técnico e orçamento detalhado",
          "Aprovação e agendamento da instalação",
          "Execução, partida e treinamento do app Wi-Fi",
        ]}
      />

      {/* Decisão simples */}
      <section className="relative overflow-hidden py-20">
        <img src={piscinaAerea} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-navy-deep/30" />
        <div className="relative mx-auto max-w-4xl px-4 text-white lg:px-8">
          <div className="mb-3 text-xs uppercase tracking-widest text-gold font-semibold">Decisão simples</div>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
            Aproveite a piscina nos próximos anos, em qualquer estação
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Se você está construindo ou já tem piscina, este é o momento de decidir como ela
            será usada. A Astral Gás faz o dimensionamento, a instalação e o pós-venda.
          </p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-4 font-semibold text-white shadow-[0_10px_40px_-10px_rgba(34,197,94,0.6)] transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" /> Quero aquecer minha piscina
          </a>
        </div>
      </section>

      <FAQ />
      <CtaForm />
    </>
  );
}
