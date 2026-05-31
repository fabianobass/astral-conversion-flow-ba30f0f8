import { createFileRoute } from "@tanstack/react-router";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceContent } from "@/components/sections/ServiceContent";
import { TrustBar } from "@/components/sections/TrustBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaForm } from "@/components/sections/CtaForm";
import { FAQ } from "@/components/sections/FAQ";
import { RealWorkGallery } from "@/components/sections/RealWorkGallery";
import { maintenancePhotos } from "@/lib/work-photos";
import { buildRouteMeta, jsonLdScript, serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { PHONE_MAINTENANCE } from "@/lib/contact";
import { RmcCities } from "@/components/RmcCities";
import heroManutencao from "@/assets/hero-manutencao-v4.webp";

const manutencaoFaqs = [
  { q: "Qual a diferença entre conserto e revisão de aquecedor a gás?", a: "O conserto é corretivo: corrige uma falha específica (não acende, água fria, vazamento, erro no display). A revisão é preventiva: limpeza interna, checagem de queimadores, sensores, pressão de gás e troca de peças desgastadas antes de virarem problema." },
  { q: "Com que frequência devo fazer a revisão do aquecedor a gás?", a: "A revisão preventiva é recomendada uma vez por ano. Em regiões com água dura ou uso intenso (famílias grandes, comércios), a revisão semestral evita conserto emergencial e prolonga a vida útil do equipamento." },
  { q: "Vocês fazem conserto de aquecedor de qualquer marca?", a: "Sim. Realizamos conserto e revisão em Rinnai, Komeco, Bosch, Lorenzetti, Rheem, Orbis, Cumulus e outras marcas, mesmo que a instalação original tenha sido feita por outra empresa." },
  { q: "Quanto tempo leva um conserto de aquecedor a gás em Curitiba?", a: "A maioria dos consertos é resolvida na mesma visita, em 1 a 2 horas. Quando há necessidade de peça específica, agendamos o retorno em até 48h. A revisão completa leva cerca de 1h30." },
  { q: "Quanto custa o conserto ou a revisão do aquecedor?", a: "O orçamento do conserto é gratuito e feito após o diagnóstico técnico. A revisão preventiva tem valor fechado conforme o modelo. Tudo é informado antes da execução, sem surpresas." },
  { q: "O conserto e a revisão têm garantia?", a: "Sim. Todo conserto tem garantia escrita sobre o serviço prestado e sobre as peças trocadas. A revisão também é acompanhada de relatório técnico e nota fiscal." },
  { q: "Atendem conserto de aquecedor com urgência no mesmo dia?", a: "Sim, sempre que há disponibilidade na agenda. Atendemos Curitiba e região metropolitana com prioridade para casos de aquecedor parado, vazamento ou falha de ignição." },
];


export const Route = createFileRoute("/servicos/manutencao")({
  head: () => {
    const seo = buildRouteMeta({
      path: "/servicos/manutencao",
      title: "Conserto e Manutenção de Aquecedor a Gás em Curitiba | Atendimento Hoje",
      description:
        "Manutenção e conserto de aquecedor a gás em Curitiba. Atendemos todas as marcas com peças originais e garantia. Batel, Cabral, Mercês e região. Chame agora!",
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
        jsonLdScript(faqJsonLd(manutencaoFaqs)),
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
        ctaMessage="Olá! Preciso de manutenção do meu aquecedor a gás."
        ctaPhone={PHONE_MAINTENANCE}
        variant="background"
      />
      <TrustBar />
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
        ctaMessage="Olá! Preciso de manutenção do meu aquecedor a gás."
        ctaPhone={PHONE_MAINTENANCE}
      />
      <section className="bg-secondary py-8"><RmcCities /></section>
      <Testimonials />
      <FAQ items={manutencaoFaqs} title={<>Conserto e revisão: <span className="italic text-navy">dúvidas frequentes</span></>} />
      <CtaForm />
    </>
  );
}
