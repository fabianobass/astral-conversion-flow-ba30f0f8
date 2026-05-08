import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CtaForm } from "@/components/sections/CtaForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Astral Gás — Aquecedor a Gás em Curitiba | Instalação no Mesmo Dia" },
      { name: "description", content: "Venda, instalação e manutenção de aquecedores a gás em Curitiba. Técnicos certificados, peças originais e orçamento gratuito no WhatsApp." },
      { property: "og:title", content: "Astral Gás — Aquecedor a Gás em Curitiba" },
      { property: "og:description", content: "Venda, instalação e manutenção de aquecedores. Atendimento rápido em Curitiba e região." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <FAQ />
      <CtaForm />
    </>
  );
}
