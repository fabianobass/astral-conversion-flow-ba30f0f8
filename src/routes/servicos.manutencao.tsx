import { createFileRoute } from "@tanstack/react-router";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceContent } from "@/components/sections/ServiceContent";
import { CtaForm } from "@/components/sections/CtaForm";
import { FAQ } from "@/components/sections/FAQ";

export const Route = createFileRoute("/servicos/manutencao")({
  head: () => ({
    meta: [
      { title: "Manutenção de Aquecedor a Gás em Curitiba | Astral Gás" },
      { name: "description", content: "Manutenção corretiva e preventiva de aquecedores a gás em Curitiba. Atendimento no mesmo dia, peças originais e garantia." },
      { property: "og:title", content: "Manutenção de Aquecedor a Gás — Astral Gás" },
      { property: "og:description", content: "Conserto e manutenção rápida do seu aquecedor com peças originais." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServiceHero
        eyebrow="Manutenção"
        title="Volte a ter banho quente hoje mesmo"
        description="Manutenção corretiva e preventiva para todas as marcas de aquecedor a gás. Atendimento rápido em Curitiba com peças genuínas e garantia."
        image={heroManutencao}
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
      />
      <FAQ />
      <CtaForm />
    </>
  );
}
