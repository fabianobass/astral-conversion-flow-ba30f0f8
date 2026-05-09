import { createFileRoute } from "@tanstack/react-router";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceContent } from "@/components/sections/ServiceContent";
import { CtaForm } from "@/components/sections/CtaForm";
import { FAQ } from "@/components/sections/FAQ";
import { RealWorkGallery } from "@/components/sections/RealWorkGallery";
import { installPhotos } from "@/lib/work-photos";

export const Route = createFileRoute("/servicos/pressurizador")({
  head: () => ({
    meta: [
      { title: "Pressurizador de Água em Curitiba | Astral Gás" },
      { name: "description", content: "Instalação de bomba pressurizadora de água em Curitiba. Acabe com a baixa pressão no chuveiro e torneiras." },
      { property: "og:title", content: "Pressurizador de Água — Astral Gás" },
      { property: "og:description", content: "Pressão ideal em todos os pontos da casa." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServiceHero
        eyebrow="Pressurizador"
        title="Pressão ideal em todos os pontos da casa"
        description="Instalação de bombas pressurizadoras silenciosas para residências e apartamentos. Banhos potentes e funcionamento perfeito do aquecedor a gás."
      />
      <ServiceContent
        benefits={[
          "Análise da pressão atual e dimensionamento correto",
          "Bombas silenciosas das melhores marcas",
          "Instalação limpa e organizada",
          "Compatibilidade total com aquecedores a gás",
          "Garantia de fábrica + garantia Astral",
          "Suporte técnico contínuo",
        ]}
        process={[
          "Conte como está a pressão da sua casa",
          "Visita técnica para medição",
          "Recomendação do equipamento ideal",
          "Instalação no mesmo dia",
        ]}
      />
      <RealWorkGallery
        title="Trabalhos recentes da Astral Gás"
        subtitle="Instalações reais feitas pela nossa equipe em Curitiba."
        photos={installPhotos}
      />
      <FAQ />
      <CtaForm />
    </>
  );
}
