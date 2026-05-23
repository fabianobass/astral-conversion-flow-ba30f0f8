import { createFileRoute } from "@tanstack/react-router";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceContent } from "@/components/sections/ServiceContent";
import { CtaForm } from "@/components/sections/CtaForm";
import { FAQ } from "@/components/sections/FAQ";
import { RealWorkGallery } from "@/components/sections/RealWorkGallery";
import { maintenancePhotos } from "@/lib/work-photos";
import { buildRouteMeta, jsonLdScript, serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { faqs } from "@/components/sections/FAQ";
import heroManutencao from "@/assets/hero-manutencao-v4.png";

export const Route = createFileRoute("/servicos/manutencao")({
  head: () => {
    const seo = buildRouteMeta({
      path: "/servicos/manutencao",
      title: "Manutenção, Conserto e Revisão de Aquecedor a Gás em Curitiba | Astral",
      description:
        "Manutenção, conserto e revisão de aquecedor a gás em Curitiba — Batel, Cabral, Juvevê, Mercês, Portão. Peças originais, garantia e atendimento no mesmo dia.",
      image: heroManutencao,
    });
    return {
      ...seo,
      scripts: [
        jsonLdScript(
          serviceJsonLd({
            name: "Manutenção, Conserto e Revisão de Aquecedor a Gás em Curitiba",
            description:
              "Serviços de manutenção preventiva, conserto corretivo e revisão técnica de aquecedores a gás de todas as marcas, com peças originais e garantia.",
            url: "/servicos/manutencao",
            image: heroManutencao,
          }),
        ),
        jsonLdScript(
          breadcrumbJsonLd([
            { name: "Início", path: "/" },
            { name: "Manutenção", path: "/servicos/manutencao" },
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
        eyebrow="Manutenção"
        title={<><span className="bg-gradient-to-r from-gold to-amber-300 bg-clip-text text-transparent">Manutenção, conserto e revisão de aquecedor a gás</span> com atendimento ainda hoje</>}
        description="Conserto corretivo, revisão preventiva e manutenção completa para todas as marcas de aquecedor a gás. Atendimento rápido em Curitiba com peças genuínas e garantia."
        image={heroManutencao}
        ctaLabel="Manutenção de aquecedor a gás — chamar agora"
        ctaMessage="Olá! Preciso de manutenção do meu aquecedor a gás em Curitiba. Podem me atender hoje?"
      />
      <RealWorkGallery
        eyebrow="Conserto Urgente"
        title="Manutenções recentes da equipe Astral Gás"
        subtitle="Consertos e revisões reais em Curitiba: diagnóstico, troca de peças e testes finais com peças originais."
        photos={maintenancePhotos}
      />
      <ServiceContent
        benefits={[
          "Diagnóstico técnico completo para conserto ou revisão",
          "Revisão completa: limpeza interna e troca de peças desgastadas",
          "Substituição apenas com peças originais",
          "Ajuste fino de pressão e temperatura",
          "Verificação de vazamentos e segurança",
          "Garantia escrita do serviço prestado",
        ]}
        process={[
          "Descreva o problema pelo WhatsApp",
          "Agendamos visita ainda hoje sempre que possível",
          "Diagnóstico do conserto ou revisão com orçamento sem compromisso",
          "Conserto realizado com nota fiscal",
        ]}
        ctaLabel="Manutenção de aquecedor a gás — chamar agora"
        ctaMessage="Olá! Preciso de manutenção do meu aquecedor a gás em Curitiba. Podem me atender hoje?"
      />
      <FAQ />
      <CtaForm />
    </>
  );
}
