import { createFileRoute } from "@tanstack/react-router";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceContent } from "@/components/sections/ServiceContent";
import { TrustBar } from "@/components/sections/TrustBar";
import { CtaForm } from "@/components/sections/CtaForm";
import { FAQ } from "@/components/sections/FAQ";
import { RealWorkGallery } from "@/components/sections/RealWorkGallery";
import { installPhotos } from "@/lib/work-photos";
import { buildRouteMeta, jsonLdScript, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import heroBanho from "@/assets/hero-banho.webp";

export const Route = createFileRoute("/servicos/aquecedor-a-gas")({
  head: () => {
    const seo = buildRouteMeta({
      path: "/servicos/aquecedor-a-gas",
      title: "Comprar aquecedor a gás em Curitiba — Rinnai, Bosch, Komeco | Astral",
      description:
        "Comprar aquecedor a gás em Curitiba com instalação no mesmo dia — Batel, Água Verde, Bigorrilho, Cabral. Rinnai, Bosch, Komeco e Lorenzetti. Orçamento grátis.",
      image: heroBanho,
    });
    return {
      ...seo,
      scripts: [
        jsonLdScript(
          serviceJsonLd({
            name: "Instalação de Aquecedor a Gás em Curitiba",
            description:
              "Venda e instalação de aquecedores a gás Rinnai, Bosch, Komeco e Lorenzetti em Curitiba e região metropolitana.",
            url: "/servicos/aquecedor-a-gas",
            image: heroBanho,
          }),
        ),
        jsonLdScript(
          breadcrumbJsonLd([
            { name: "Início", path: "/" },
            { name: "Aquecedor a Gás", path: "/servicos/aquecedor-a-gas" },
          ]),
        ),
      ],
    };
  },
  component: Page,
});

function Page() {
  return (
    <>
      <ServiceHero
        eyebrow="Aquecedor a Gás"
        title="Comprar aquecedor a gás com instalação no mesmo dia"
        description="Venda e instalação de aquecedores a gás de passagem para casas e apartamentos. Dimensionamos o equipamento ideal para sua família e instalamos no mesmo dia."
        image={heroBanho}
        ctaLabel="Comprar aquecedor a gás no WhatsApp"
        ctaMessage="Olá! Quero comprar um aquecedor a gás em Curitiba. Pode me passar um orçamento?"
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
