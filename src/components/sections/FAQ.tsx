import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const faqs = [
  { q: "Vocês atendem em toda Curitiba e região metropolitana?", a: "Sim. Atendemos Curitiba, São José dos Pinhais, Pinhais, Colombo, Araucária, Campo Largo e demais cidades da RMC." },
  { q: "Quanto custa instalar um aquecedor a gás?", a: "O valor varia conforme a vazão (litros/min), tipo de gás e complexidade da instalação. O orçamento é gratuito e sem compromisso pelo WhatsApp." },
  { q: "Em quanto tempo conseguem fazer a instalação?", a: "Para casos comuns, conseguimos fazer a visita técnica e instalação no mesmo dia, dependendo da disponibilidade do equipamento." },
  { q: "Quais marcas de aquecedor vocês trabalham?", a: "Rinnai, Komeco, Bosch, Lorenzetti, Cumulus, Orbis e outras. Indicamos a melhor opção para o seu consumo." },
  { q: "Como funciona a garantia?", a: "Todos os produtos têm garantia de fábrica. A instalação tem garantia adicional Astral Gás. Emitimos nota fiscal." },
  { q: "Vocês fazem manutenção em aquecedor de outra marca/empresa?", a: "Sim, fazemos manutenção em qualquer marca, mesmo que a instalação tenha sido feita por terceiros." },
];

export function FAQ({ items = faqs, title }: { items?: { q: string; a: string }[]; title?: string } = {}) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 text-xs uppercase tracking-widest text-gold font-semibold">Dúvidas frequentes</div>
          <h2 className="font-display text-4xl font-bold text-navy-deep sm:text-5xl">
            Respostas para suas <span className="italic text-navy">dúvidas</span>
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-semibold text-navy-deep hover:text-navy hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
