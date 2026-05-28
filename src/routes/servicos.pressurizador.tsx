import { createFileRoute } from "@tanstack/react-router";
import { Gauge, Zap, Volume2, Layers, ShieldCheck, Plug } from "lucide-react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceContent } from "@/components/sections/ServiceContent";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaForm } from "@/components/sections/CtaForm";
import { FAQ } from "@/components/sections/FAQ";
import { RealWorkGallery } from "@/components/sections/RealWorkGallery";
import { pressurizerPhotos } from "@/lib/work-photos";
import { waLink } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { RmcCities } from "@/components/RmcCities";
import inversoraHpi750 from "@/assets/pressurizador/inversora-hpi-750-v2.png";
import heroPressurizador from "@/assets/hero-pressurizador-v2.png";
import logoDruck from "@/assets/marcas/druck.webp";
import logoFluxonn from "@/assets/marcas/fluxonn.webp";
import logoSyllent from "@/assets/marcas/syllent.webp";
import logoTexius from "@/assets/marcas/texius.webp";
import logoLepono from "@/assets/marcas/lepono.webp";
import logoInova from "@/assets/marcas/inova.webp";
import logoKomeco from "@/assets/marcas/komeco.webp";
import logoRowa from "@/assets/marcas/rowa.webp";

const partnerBrands = [
  { src: logoRowa, alt: "Rowa" },
  { src: logoKomeco, alt: "Komeco" },
  { src: logoSyllent, alt: "Syllent" },
  { src: logoLepono, alt: "Lepono" },
  { src: logoTexius, alt: "Texius" },
  { src: logoFluxonn, alt: "Fluxonn" },
  { src: logoInova, alt: "Inova" },
  { src: logoDruck, alt: "Druck" },
];

import { buildRouteMeta, jsonLdScript, serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const pressurizadorFaqs = [
  { q: "O que é um pressurizador de água e quando devo instalar?", a: "É um equipamento que aumenta e estabiliza a pressão da água na tubulação. É indicado quando o chuveiro fica fraco, o aquecedor a gás não aciona corretamente ou quando várias torneiras abertas ao mesmo tempo derrubam a pressão." },
  { q: "Qual a diferença entre o HPI 750 1CV e o 2CV?", a: "O modelo 1CV atende residências e apartamentos com até 3 banheiros. O 2CV é indicado para casas maiores, sobrados e imóveis com muitos pontos de uso simultâneos, mantendo pressão constante mesmo com alta demanda." },
  { q: "O pressurizador é compatível com aquecedor a gás?", a: "Sim. O INVERSORA HPI 750 trabalha com temperatura de fluido até 60°C e pressão estável, garantindo o acionamento correto de aquecedores a gás Rinnai, Komeco, Bosch, Lorenzetti e outras marcas." },
  { q: "O pressurizador faz muito barulho?", a: "Não. O HPI 750 tem motor com ímãs permanentes e inversor de frequência, com funcionamento silencioso e partidas suaves — sem golpes de aríete na tubulação. Pode ser instalado em áreas de serviço de apartamentos sem incomodar." },
  { q: "Quanto tempo leva a instalação de um pressurizador em Curitiba?", a: "Após a visita técnica e definição do modelo, a instalação geralmente é feita no mesmo dia, em algumas horas. Trabalho limpo, organizado e com testes de pressão antes da entrega." },
  { q: "O pressurizador gasta muita energia?", a: "Não. O inversor de frequência ajusta a rotação do motor conforme a demanda real de água, consumindo apenas o necessário. É bem mais econômico que sistemas tradicionais com pressostato." },
  { q: "Vocês instalam pressurizador em apartamento?", a: "Sim. Atendemos apartamentos em Curitiba e região metropolitana, com instalação compacta e silenciosa, respeitando as normas do condomínio." },
  { q: "Qual a garantia do pressurizador?", a: "O equipamento tem garantia de fábrica do fabricante e a instalação tem garantia adicional da Astral Gás. Emitimos nota fiscal em todos os serviços." },
];

export const Route = createFileRoute("/servicos/pressurizador")({
  head: () => {
    const seo = buildRouteMeta({
      path: "/servicos/pressurizador",
      title: "Pressurizador de Água em Curitiba | Astral Gás",
      description:
        "Pressurizador de água em Curitiba — instalação do inversor HPI 750 (1CV e 2CV). Pressão constante, baixo ruído e total compatibilidade com aquecedores a gás.",
      image: inversoraHpi750,
    });
    return {
      ...seo,
      scripts: [
        jsonLdScript(
          serviceJsonLd({
            name: "Instalação de Pressurizador de Água em Curitiba",
            description:
              "Instalação de pressurizadores inversores HPI 750 1CV e 2CV em residências e apartamentos de Curitiba e região.",
            url: "/servicos/pressurizador",
            image: inversoraHpi750,
          }),
        ),
        jsonLdScript(
          breadcrumbJsonLd([
            { name: "Início", path: "/" },
            { name: "Pressurizador", path: "/servicos/pressurizador" },
          ]),
        ),
        jsonLdScript(faqJsonLd(pressurizadorFaqs)),
      ],
    };
  },
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
      <ServiceHero
        eyebrow="Pressurizador de Água"
        title={<><span className="bg-gradient-to-r from-gold to-amber-300 bg-clip-text text-transparent">Pressurizador de água</span> para pressão constante em casa</>}
        description="Instalação do pressurizador inversor HPI 750 nas versões 1CV e 2CV. Banhos potentes, funcionamento perfeito do aquecedor a gás e pressão constante em todos os pontos."
        image={heroPressurizador}
        ctaLabel="Pressurizador de água — orçamento no WhatsApp"
        ctaMessage="Olá! Quero instalar um pressurizador de água em Curitiba. Pode me passar um orçamento?"
      />

      {/* A tecnologia */}
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-5xl gap-12 px-4 lg:grid-cols-2 lg:items-center lg:px-8">
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
                <div className="mt-1 text-xs uppercase tracking-wider text-foreground/75">Modelos</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 text-center">
                <div className="font-display text-2xl font-bold text-navy-deep">30 mca</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-foreground/75">Sucção</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 text-center">
                <div className="font-display text-2xl font-bold text-navy-deep">Inox 304</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-foreground/75">Material</div>
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
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
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

      {/* Marcas parceiras */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 text-xs uppercase tracking-widest text-gold font-semibold">Marcas parceiras</div>
            <h2 className="font-display text-3xl font-bold leading-tight text-navy-deep sm:text-4xl">
              Trabalhamos com as melhores marcas do mercado
            </h2>
            <p className="mt-4 text-foreground/70">
              Operamos apenas com fabricantes reconhecidos, peças originais e garantia de
              fábrica — qualidade comprovada para cada instalação da Astral Gás.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {partnerBrands.map((b) => (
              <div
                key={b.alt}
                className="flex h-24 items-center justify-center rounded-xl border border-border bg-card p-4 transition hover:border-gold hover:shadow-md"
              >
                <img
                  src={b.src}
                  alt={`Logo ${b.alt}`}
                  width="160"
                  height="56"
                  className="h-12 w-auto max-w-full object-contain sm:h-14"
                  loading="lazy"
                  decoding="async"
                />
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
            href={waLink(undefined, "Olá! Quero instalar um pressurizador de água em Curitiba. Pode me passar um orçamento?")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pressurizador de água — pedir orçamento no WhatsApp"
            className="relative overflow-hidden mt-8 inline-flex min-h-11 sm:min-h-12 md:min-h-[52px] items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] max-w-full px-3.5 py-2.5 sm:px-5 sm:py-3 md:px-8 md:py-4.5 text-center text-balance text-[13px] sm:text-sm md:text-[15px] font-bold leading-[1.2] sm:leading-[1.15] md:leading-[1.1] tracking-tight text-white shadow-[0_12px_40px_-12px_rgba(37,211,102,0.5)] hover:shadow-[0_15px_45px_-10px_rgba(37,211,102,0.6)] hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80 transition duration-300 motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100 group"
          >
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
            <WhatsAppIcon className="relative z-10 h-[1.15em] w-[1.15em] shrink-0 self-center drop-shadow-sm" aria-hidden /> 
            <span className="relative z-10">Pressurizador de água — orçamento agora</span>
          </a>
        </div>
      </section>

      <section className="bg-secondary py-8"><RmcCities /></section>
      <Testimonials />
      <FAQ items={pressurizadorFaqs} title={<>Pressurizador de água: <span className="italic text-navy">dúvidas frequentes</span></>} />
      <CtaForm />
    </>
  );
}
