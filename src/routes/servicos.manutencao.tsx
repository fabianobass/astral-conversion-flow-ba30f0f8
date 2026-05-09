import { createFileRoute } from "@tanstack/react-router";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceContent } from "@/components/sections/ServiceContent";
import { CtaForm } from "@/components/sections/CtaForm";
import { FAQ } from "@/components/sections/FAQ";
import { RealWorkGallery } from "@/components/sections/RealWorkGallery";
import { maintenancePhotos } from "@/lib/work-photos";
import { buildRouteMeta, jsonLdScript, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import heroManutencao from "@/assets/hero-manutencao.webp";

export const Route = createFileRoute("/servicos/manutencao")({
  head: () => {
    const seo = buildRouteMeta({
      path: "/servicos/manutencao",
      title: "Manutenção de aquecedor a gás em Curitiba — Atendimento hoje | Astral",
      description:
        "Manutenção de aquecedor a gás em Curitiba — Batel, Cabral, Juvevê, Mercês, Portão. Peças originais, garantia e atendimento no mesmo dia.",
      image: heroManutencao,
    });
    return {
      ...seo,
      scripts: [
        jsonLdScript(
          serviceJsonLd({
            name: "Manutenção de Aquecedor a Gás em Curitiba",
            description:
              "Manutenção corretiva e preventiva de aquecedores a gás de todas as marcas, com peças originais e garantia.",
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
        title={<><span className="bg-gradient-to-r from-gold to-amber-300 bg-clip-text text-transparent">Manutenção de aquecedor a gás</span> com atendimento ainda hoje</>}
        description="Manutenção corretiva e preventiva para todas as marcas de aquecedor a gás. Atendimento rápido em Curitiba com peças genuínas e garantia."
        image={heroManutencao}
        ctaLabel="Manutenção de aquecedor a gás — chamar agora"
        ctaMessage="Olá! Preciso de manutenção do meu aquecedor a gás em Curitiba. Podem me atender hoje?"
      />
      <RealWorkGallery
        eyebrow="Conserto Urgente"
        title="Manutenções recentes da equipe Astral Gás"
        subtitle="Atendimentos reais em Curitiba: diagnóstico, troca de peças e testes finais com peças originais."
        photos={maintenancePhotos}
      />
      <ServiceContent
        benefits={[
          "Diagnóstico técnico completo",
          "Limpeza interna e troca de peças desgastadas",
          "Substituição apenas com peças originais",
          "Ajuste fino de pressão e temperatura",
          "Verificação de vazamentos e segurança",
          "Garantia escrita do serviço prestado",
        ]}
        process={[
          "Descreva o problema pelo WhatsApp",
          "Agendamos visita ainda hoje sempre que possível",
          "Diagnóstico e orçamento sem compromisso",
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
