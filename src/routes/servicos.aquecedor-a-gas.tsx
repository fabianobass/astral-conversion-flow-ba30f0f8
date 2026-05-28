import { createFileRoute } from "@tanstack/react-router";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceContent } from "@/components/sections/ServiceContent";
import { TrustBar } from "@/components/sections/TrustBar";
import { CtaForm } from "@/components/sections/CtaForm";
import { FAQ, faqs } from "@/components/sections/FAQ";
import { SizingGuide } from "@/components/sections/SizingGuide";
import { Testimonials } from "@/components/sections/Testimonials";
import { RealWorkGallery } from "@/components/sections/RealWorkGallery";
import { installPhotos } from "@/lib/work-photos";
import { buildRouteMeta, jsonLdScript, serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import heroAquecedor from "@/assets/hero-aquecedor-v5.png";
import { RmcCities } from "@/components/RmcCities";

export const Route = createFileRoute("/servicos/aquecedor-a-gas")({
  head: () => {
    const seo = buildRouteMeta({
      path: "/servicos/aquecedor-a-gas",
      title: "Comprar Aquecedor a Gás em Curitiba | Venda e Instalação Rinnai e Bosch",
      description:
        "Comprar aquecedor a gás em Curitiba com instalação imediata. Modelos Rinnai, Bosch e Komeco. Visita técnica gratuita em Batel, Cabral, Bigorrilho e região. Confira!",
      image: heroAquecedor,
    });
    return {
      ...seo,
      links: [
        ...(seo.links ?? []),
        {
          rel: "preload",
          as: "image",
          href: heroAquecedor,
          fetchpriority: "high",
        },
      ],
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
        jsonLdScript(faqJsonLd(faqs)),
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
        title={<><span className="bg-gradient-to-r from-gold to-amber-300 bg-clip-text text-transparent">Comprar aquecedor a gás em Curitiba</span> com instalação no mesmo dia</>}
        description="Venda e instalação de aquecedores a gás de passagem Rinnai, Lorenzetti, Bosch e Komeco para casas e apartamentos em Curitiba e região metropolitana. Dimensionamos o equipamento ideal para sua família e instalamos no mesmo dia, com nota fiscal e garantia."
        image={heroAquecedor}
        ctaLabel="Comprar aquecedor a gás no WhatsApp"
        ctaMessage="Olá! Quero comprar um aquecedor a gás em Curitiba. Pode me passar um orçamento?"
        variant="background"
      />
      <TrustBar />
      <div id="servico" className="scroll-mt-24">
        <ServiceContent
          benefits={[
            "Visita técnica gratuita para dimensionamento",
            "Aquecedores Rinnai (linhas E, REU e Infinity) com estoque pronta-entrega",
            "Aquecedores Lorenzetti, Bosch e Komeco para todos os perfis de consumo",
            "Conexões de gás e água com selo de segurança",
            "Sistema de ventilação adequado conforme norma ABNT NBR 13103/15526",
            "Testes completos e orientação de uso",
            "Garantia de fábrica + garantia Astral",
            "Nota fiscal e pagamento em até 12x no cartão",
          ]}
          process={[
            "Você fala conosco pelo WhatsApp e recebe orçamento estimado em minutos",
            "Agendamos visita técnica gratuita no horário que preferir",
            "Levamos o equipamento e instalamos no mesmo dia",
            "Testamos tudo e entregamos com nota fiscal",
          ]}
          ctaLabel="Comprar aquecedor a gás agora"
          ctaMessage="Olá! Quero comprar um aquecedor a gás em Curitiba. Pode me passar um orçamento?"
        />
      </div>
      <SizingGuide />
      <div id="instalacoes" className="scroll-mt-24">
        <RealWorkGallery
          title="Instalações reais feitas pela Astral Gás"
          subtitle="Fotos recentes de aquecedores Rinnai e Lorenzetti instalados em casas e apartamentos de Curitiba."
          photos={installPhotos}
          aspectRatio="portrait"
        />
      </div>
      <Testimonials />
      <div id="duvidas" className="scroll-mt-24">
        <FAQ />
      </div>
      <div id="orcamento" className="scroll-mt-24">
        <CtaForm />
      </div>
      <section className="bg-secondary py-10">
        <RmcCities />
      </section>
    </>
  );
}
