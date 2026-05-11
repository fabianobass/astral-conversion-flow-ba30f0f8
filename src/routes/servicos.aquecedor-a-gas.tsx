import { createFileRoute } from "@tanstack/react-router";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceContent } from "@/components/sections/ServiceContent";
import { TrustBar } from "@/components/sections/TrustBar";
import { CtaForm } from "@/components/sections/CtaForm";
import { FAQ } from "@/components/sections/FAQ";
import { RealWorkGallery } from "@/components/sections/RealWorkGallery";
import { installPhotos } from "@/lib/work-photos";
import { buildRouteMeta, jsonLdScript, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import heroAquecedor from "@/assets/hero-aquecedor-v5.png";

export const Route = createFileRoute("/servicos/aquecedor-a-gas")({
  head: () => {
    const seo = buildRouteMeta({
      path: "/servicos/aquecedor-a-gas",
      title: "Comprar aquecedor a gás em Curitiba — Rinnai, Bosch, Komeco | Astral",
      description:
        "Comprar aquecedor a gás em Curitiba com instalação no mesmo dia — Batel, Água Verde, Bigorrilho, Cabral. Rinnai, Bosch, Komeco e Lorenzetti. Orçamento grátis.",
      image: heroAquecedor,
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
            image: heroAquecedor,
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
        title={<><span className="bg-gradient-to-r from-gold to-amber-300 bg-clip-text text-transparent">Comprar aquecedor a gás</span> com instalação no mesmo dia</>}
        description="Venda e instalação de aquecedores a gás de passagem Rinnai, Lorenzetti, Bosch e Komeco para casas e apartamentos em Curitiba. Dimensionamos o equipamento ideal para sua família e instalamos no mesmo dia."
        image={heroAquecedor}
        ctaLabel="Comprar aquecedor a gás no WhatsApp"
        ctaMessage="Olá! Quero comprar um aquecedor a gás em Curitiba. Pode me passar um orçamento?"
      />
      <TrustBar />
      <ServiceContent
        benefits={[
          "Visita técnica gratuita para dimensionamento",
          "Aquecedores Rinnai (linhas E, REU e Infinity) com estoque pronta-entrega",
          "Aquecedores Lorenzetti, Bosch e Komeco para todos os perfis de consumo",
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
        ctaLabel="Comprar aquecedor a gás agora"
        ctaMessage="Olá! Quero comprar um aquecedor a gás em Curitiba. Pode me passar um orçamento?"
      />
      <RealWorkGallery
        title="Instalações reais feitas pela Astral Gás"
        subtitle="Fotos recentes de aquecedores Rinnai e Lorenzetti instalados em casas e apartamentos de Curitiba."
        photos={installPhotos}
        aspectRatio="portrait"
      />
      <FAQ />
      <CtaForm />
      <section className="bg-secondary py-10">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <p className="text-base leading-relaxed text-foreground/80">
            A Astral Gás é referência na venda e instalação de aquecedores a gás Rinnai e Lorenzetti em Curitiba — atendendo Batel, Água Verde, Bigorrilho, Cabral e região metropolitana. Trabalhamos também com Bosch e Komeco, sempre com assistência técnica autorizada Rinnai e Lorenzetti para garantir qualidade do início ao fim.
          </p>
        </div>
      </section>
    </>
  );
}
