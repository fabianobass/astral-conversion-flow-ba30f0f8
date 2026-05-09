import { createFileRoute } from "@tanstack/react-router";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceContent } from "@/components/sections/ServiceContent";
import { TrustBar } from "@/components/sections/TrustBar";
import { CtaForm } from "@/components/sections/CtaForm";
import { FAQ } from "@/components/sections/FAQ";
import { RealWorkGallery } from "@/components/sections/RealWorkGallery";
import { installPhotos } from "@/lib/work-photos";
import heroBanho from "@/assets/hero-banho.jpg";

export const Route = createFileRoute("/servicos/aquecedor-a-gas")({
  head: () => ({
    meta: [
      { title: "Aquecedor a Gás em Curitiba — Venda e Instalação | Astral Gás" },
      { name: "description", content: "Aquecedores a gás Rinnai, Komeco e Bosch com instalação certificada em Curitiba. Orçamento grátis no WhatsApp." },
      { property: "og:title", content: "Aquecedor a Gás em Curitiba — Astral Gás" },
      { property: "og:description", content: "Venda e instalação de aquecedores a gás com técnicos certificados." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServiceHero
        eyebrow="Aquecedor a Gás"
        title="Banho quente, instantâneo e econômico"
        description="Venda e instalação de aquecedores a gás de passagem para casas e apartamentos. Dimensionamos o equipamento ideal para sua família e instalamos no mesmo dia."
        image={heroBanho}
      />
      <TrustBar />
      <RealWorkGallery
        title="Instalações reais feitas pela Astral Gás"
        subtitle="Veja exemplos recentes de aquecedores instalados em casas e apartamentos de Curitiba."
        photos={installPhotos}
      />
      <ServiceContent
        benefits={[
          "Visita técnica gratuita para dimensionamento",
          "Aquecedores Rinnai, Komeco, Bosch e Lorenzetti",
          "Conexões de gás e água com selo de segurança",
          "Sistema de ventilação adequado conforme norma",
          "Testes completos e orientação de uso",
          "Garantia de fábrica + garantia Astral",
        ]}
        process={[
          "Você fala conosco pelo WhatsApp e recebe orçamento estimado",
          "Agendamos visita técnica gratuita no horário que preferir",
          "Levamos o equipamento e instalamos no mesmo dia",
          "Testamos tudo e entregamos com nota fiscal",
        ]}
      />
      <FAQ />
      <CtaForm />
      <section className="bg-secondary py-10">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <p className="text-base leading-relaxed text-foreground/80">
            A Astral Gás é referência em Aquecedores a Gás em Curitiba, oferecendo as melhores marcas e assistência técnica qualificada para toda a região.
          </p>
        </div>
      </section>
    </>
  );
}
