import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Gauge, Zap, Volume2, Layers, ShieldCheck, Plug } from "lucide-react";
import { ServiceContent } from "@/components/sections/ServiceContent";
import { CtaForm } from "@/components/sections/CtaForm";
import { FAQ } from "@/components/sections/FAQ";
import { RealWorkGallery } from "@/components/sections/RealWorkGallery";
import { pressurizerPhotos } from "@/lib/work-photos";
import { waLink } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import inversoraHpi750 from "@/assets/pressurizador/inversora-hpi-750.png";

export const Route = createFileRoute("/servicos/pressurizador")({
  head: () => ({
    meta: [
      { title: "Pressurizador de Água INVERSORA HPI 750 1CV e 2CV em Curitiba | Astral Gás" },
      { name: "description", content: "Instalação de pressurizador de água inversor HPI 750 (1CV e 2CV) em Curitiba. Pressão constante, baixo ruído e total compatibilidade com aquecedores a gás." },
      { property: "og:title", content: "Pressurizador de Água — Astral Gás" },
      { property: "og:description", content: "Pressão ideal em todos os pontos da casa com tecnologia inversora." },
      { property: "og:image", content: inversoraHpi750 },
      { name: "twitter:image", content: inversoraHpi750 },
    ],
  }),
  component: Page,
});

const features = [
  { icon: Gauge, title: "Pressão constante", text: "Inversor de frequência mantém a pressão estável em todos os pontos de uso, mesmo com várias torneiras abertas." },
  { icon: Zap, title: "Motor com ímãs permanentes", text: "Maior eficiência energética e partidas suaves, sem golpes de aríete na tubulação." },
  { icon: Volume2, title: "Silenciosa e compacta", text: "Funcionamento discreto, ideal para áreas de serviço de apartamentos e residências." },
  { icon: Layers, title: "Bomba multiestágio", text: "Excelente performance hidráulica com pressão de sucção de até 30 mca." },
  { icon: ShieldCheck, title: "Aço Inox AISI 304", text: "Corpo, rotor e eixo em inox: alta durabilidade e resistência à corrosão." },
  { icon: Plug, title: "Tensão 220V", text: "Operação em 220V, temperatura de fluido até 60°C — compatível com aquecedores a gás." },
];

function Page() {
  return (
    <>
      {/* Hero customizado com produto à direita */}
      <section className="relative overflow-hidden bg-navy-deep pt-40 pb-28 text-white">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
          <nav className="mb-8 flex items-center gap-1 text-xs text-white/60">
            <Link to="/" className="hover:text-gold">Início</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/80">Pressurizador de Água</span>
          </nav>
          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="mb-3 text-xs uppercase tracking-widest text-gold font-semibold">
                Pressurizador de Água
              </div>
              <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
                Pressão ideal em toda a casa
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-white/80">
                Instalação do pressurizador inversor HPI 750 nas versões 1CV e 2CV. Banhos
                potentes, funcionamento perfeito do aquecedor a gás e pressão constante em
                todos os pontos.
              </p>
              <div className="mt-8">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Solicitar orçamento gratuito pelo WhatsApp"
                  className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-4 font-semibold text-white shadow-[0_10px_40px_-10px_rgba(34,197,94,0.6)] transition-transform hover:scale-105"
                >
                  <WhatsAppIcon className="h-5 w-5" /> Orçamento gratuito no WhatsApp
                </a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-sm lg:max-w-lg">
              <div className="absolute -inset-16 rounded-full bg-gradient-to-br from-gold/50 via-gold/15 to-transparent blur-3xl" />
              <img
                src={inversoraHpi750}
                alt="Pressurizador de água INVERSORA HPI 750 1CV e 2CV"
                className="relative h-96 w-full object-contain opacity-60 lg:h-[32rem] lg:scale-110"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(ellipse at center, black 35%, transparent 90%)",
                  maskImage:
                    "radial-gradient(ellipse at center, black 35%, transparent 90%)",
                  mixBlendMode: "lighten",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* A tecnologia */}
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <div className="mb-3 text-xs uppercase tracking-widest text-gold font-semibold">A tecnologia</div>
            <h2 className="font-display text-3xl font-bold leading-tight text-navy-deep sm:text-4xl">
              Pressurizador INVERSORA HPI 750 1CV e 2CV
            </h2>
            <p className="mt-5 text-foreground/75">
              A linha INVERSORA HPI 750 conta com inversor de frequência incorporado ao motor,
              indicada para a pressurização de redes hidráulicas residenciais e comerciais de
              pequeno e médio porte. Atende ao baixo e ao alto consumo de água com pressão
              praticamente constante — perfeita para integrar com aquecedores a gás.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-card p-4 text-center">
                <div className="font-display text-2xl font-bold text-navy-deep">1CV / 2CV</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-foreground/60">Modelos</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 text-center">
                <div className="font-display text-2xl font-bold text-navy-deep">30 mca</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-foreground/60">Sucção</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 text-center">
                <div className="font-display text-2xl font-bold text-navy-deep">Inox 304</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-foreground/60">Material</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-gold/30 to-transparent blur-2xl" />
            <img
              src={inversoraHpi750}
              alt="Pressurizador INVERSORA HPI 750 1CV e 2CV instalado pela Astral Gás"
              className="relative w-full rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Modelos disponíveis */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 text-xs uppercase tracking-widest text-gold font-semibold">Modelos disponíveis</div>
            <h2 className="font-display text-3xl font-bold text-navy-deep sm:text-4xl">
              Escolha a potência ideal para a sua casa
            </h2>
            <p className="mt-4 text-foreground/70">
              A Astral Gás faz o dimensionamento técnico para indicar o modelo certo conforme o
              número de pontos de uso e a altura da edificação.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 transition hover:border-gold hover:shadow-lg">
              <div className="text-xs uppercase tracking-widest text-gold font-semibold">Versão 1CV</div>
              <h3 className="mt-2 font-display text-2xl font-bold text-navy-deep">HPI 750 — 1CV</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                Indicada para residências e apartamentos de pequeno a médio porte, com até
                3 banheiros. Funcionamento silencioso e econômico.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 transition hover:border-gold hover:shadow-lg">
              <div className="text-xs uppercase tracking-widest text-gold font-semibold">Versão 2CV</div>
              <h3 className="mt-2 font-display text-2xl font-bold text-navy-deep">HPI 750 — 2CV</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                Para residências maiores, sobrados e imóveis com mais pontos de uso simultâneos.
                Maior vazão mantendo a pressão constante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engenharia / features */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 text-xs uppercase tracking-widest text-gold font-semibold">Engenharia</div>
            <h2 className="font-display text-3xl font-bold text-navy-deep sm:text-4xl">
              Por que escolher a INVERSORA HPI 750
            </h2>
            <p className="mt-4 text-foreground/70">
              Tecnologia, materiais e instalação especializada que garantem performance real no dia a dia.
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
          "Análise da pressão atual e dimensionamento correto",
          "Pressurizador INVERSORA HPI 750 nas versões 1CV e 2CV",
          "Corpo, rotor e eixo em Aço Inox AISI 304",
          "Instalação limpa e organizada",
          "Compatibilidade total com aquecedores a gás",
          "Garantia de fábrica + garantia Astral Gás",
        ]}
        process={[
          "Conte como está a pressão da sua casa",
          "Visita técnica para medição",
          "Recomendação entre HPI 750 1CV ou 2CV",
          "Instalação no mesmo dia",
        ]}
      />

      <RealWorkGallery
        title="Pressurizadores instalados pela Astral Gás"
        subtitle="Instalações reais com a INVERSORA HPI 750 em Curitiba e região."
        photos={pressurizerPhotos}
      />

      {/* CTA final */}
      <section className="relative overflow-hidden bg-navy-deep py-20 text-white">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 lg:px-8">
          <div className="mb-3 text-xs uppercase tracking-widest text-gold font-semibold">Decisão simples</div>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
            Resolva a baixa pressão de uma vez por todas
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Fale com a Astral Gás e receba uma recomendação técnica do modelo HPI 750 ideal
            para a sua casa, com instalação completa pela nossa equipe.
          </p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-4 font-semibold text-white shadow-[0_10px_40px_-10px_rgba(34,197,94,0.6)] transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" /> Quero meu orçamento
          </a>
        </div>
      </section>

      <FAQ />
      <CtaForm />
    </>
  );
}
