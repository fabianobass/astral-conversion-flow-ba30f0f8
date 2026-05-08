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
      { title: "Venda e Instalação de Aquecedores a Gás em Curitiba | Astral Gás" },
      { name: "description", content: "Venda e instalação de aquecedores a gás em Curitiba com técnicos certificados, peças originais e orçamento gratuito no WhatsApp." },
      { property: "og:title", content: "Venda e Instalação de Aquecedores a Gás em Curitiba | Astral Gás" },
      { property: "og:description", content: "Venda e instalação de aquecedores a gás em Curitiba. Atendimento no mesmo dia com garantia." },
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
