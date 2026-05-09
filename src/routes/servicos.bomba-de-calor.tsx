import { createFileRoute } from "@tanstack/react-router";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceContent } from "@/components/sections/ServiceContent";
import { CtaForm } from "@/components/sections/CtaForm";
import { FAQ } from "@/components/sections/FAQ";
import { RealWorkGallery } from "@/components/sections/RealWorkGallery";
import { installPhotos } from "@/lib/work-photos";

export const Route = createFileRoute("/servicos/bomba-de-calor")({
  head: () => ({
    meta: [
      { title: "Bomba de Calor para Piscina em Curitiba | Astral Gás" },
      { name: "description", content: "Instalação de bomba de calor para aquecimento de piscinas e residências em Curitiba. Economia de até 70%." },
      { property: "og:title", content: "Bomba de Calor — Astral Gás" },
      { property: "og:description", content: "Aquecimento eficiente e econômico para piscinas e casas." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServiceHero
        eyebrow="Bomba de Calor"
        title="Piscina aquecida o ano todo, com economia"
        description="Sistema de aquecimento por bomba de calor para piscinas e residências. Até 70% mais econômico que aquecimento elétrico convencional."
      />
      <ServiceContent
        benefits={[
          "Projeto sob medida para o tamanho da sua piscina",
          "Equipamentos das principais marcas do mercado",
          "Instalação completa, hidráulica e elétrica",
          "Economia de energia comprovada",
          "Funcionamento silencioso e durável",
          "Manutenção e suporte continuado",
        ]}
        process={[
          "Conte sobre sua piscina ou residência",
          "Cálculo técnico e orçamento detalhado",
          "Aprovação e agendamento da instalação",
          "Execução e entrega com testes completos",
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
