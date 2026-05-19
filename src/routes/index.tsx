import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CtaForm } from "@/components/sections/CtaForm";
import { RealWorkGallery } from "@/components/sections/RealWorkGallery";
import { installPhotos } from "@/lib/work-photos";
import { buildRouteMeta, jsonLdScript, serviceJsonLd, faqJsonLd } from "@/lib/seo";
import { faqs } from "@/components/sections/FAQ";
import heroImg from "@/assets/hero-aquecedor-home.webp";

export const Route = createFileRoute("/")({
  head: () => {
    const seo = buildRouteMeta({
      path: "/",
      title: "Aquecedor a Gás em Curitiba | Astral Gás",
      description:
        "Aquecedor a gás em Curitiba com venda e instalação no mesmo dia — Batel, Água Verde, Bigorrilho e região. Rinnai, Bosch, Komeco. Orçamento grátis no WhatsApp.",
      image: heroImg,
    });
    return {
      ...seo,
      links: [
        ...(seo.links ?? []),
        { rel: "preload", as: "image", href: heroImg, type: "image/webp", fetchpriority: "high" },
      ],
      scripts: [
        jsonLdScript(
          serviceJsonLd({
            name: "Instalação de Aquecedor a Gás em Curitiba",
            description:
              "Venda e instalação de aquecedores a gás de passagem em Curitiba e região. Marcas Rinnai, Bosch, Komeco e Lorenzetti.",
            url: "/",
            image: heroImg,
          }),
        ),
        jsonLdScript(faqJsonLd(faqs)),
      ],
    };
  },
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <RealWorkGallery photos={installPhotos} aspectRatio="portrait" />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <FAQ />
      <CtaForm />
    </>
  );
}
