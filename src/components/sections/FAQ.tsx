import type * as React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const faqs = [
  { q: "Vocês atendem em toda Curitiba e região metropolitana?", a: "Sim. Atendemos Curitiba (Batel, Água Verde, Bigorrilho, Cabral, Ecoville, Boa Vista, Portão, Santa Felicidade, Jardim Botânico, Centro) e cidades da RMC: São José dos Pinhais, Pinhais, Colombo, Araucária, Campo Largo, Almirante Tamandaré, Piraquara e Fazenda Rio Grande." },
  { q: "Quanto custa instalar um aquecedor a gás em Curitiba?", a: "O valor depende da vazão escolhida (litros por minuto), tipo de gás (GN encanado ou GLP), local da instalação e dos materiais necessários (tubulação, exaustão, suportes). Em casos comuns, o serviço de instalação fica em uma faixa acessível e o orçamento é gratuito. Envie uma foto do local pelo WhatsApp e devolvemos o valor estimado em minutos." },
  { q: "Em quanto tempo vocês conseguem instalar?", a: "Para casos comuns conseguimos fazer a visita técnica e a instalação no mesmo dia, dependendo da disponibilidade do equipamento e do horário do contato. Atendimentos solicitados antes das 11h costumam ser concluídos no próprio dia." },
  { q: "Quais marcas de aquecedor a gás vocês trabalham?", a: "Rinnai (linhas E, REU e Infinity), Bosch (Therm), Komeco, Lorenzetti, Rheem, Cumulus, Orbis e Heliotek. Indicamos a melhor marca conforme o seu consumo, número de pontos de água e orçamento. Trabalhamos apenas com equipamentos novos, com nota fiscal e garantia de fábrica." },
  { q: "Como funciona a garantia da instalação?", a: "Todos os equipamentos têm garantia de fábrica (geralmente 1 a 2 anos para peças). A instalação tem garantia adicional Astral Gás de 12 meses contra defeitos de mão de obra. Emitimos nota fiscal em todos os serviços." },
  { q: "Vocês fazem manutenção em aquecedor de outra marca ou de outra empresa?", a: "Sim. Atendemos qualquer marca e qualquer aquecedor, mesmo que a instalação original tenha sido feita por terceiros. Limpeza, troca de membrana, sensor de chama, válvula de gás, ignição e revisão completa." },
  { q: "Qual a diferença entre aquecedor a gás de passagem e de acumulação (boiler)?", a: "O aquecedor de passagem (instantâneo) aquece a água apenas quando você abre a torneira, ocupa pouco espaço e é o mais usado em apartamentos e casas em Curitiba. O de acumulação (boiler) armazena água quente em um reservatório, indicado para grandes consumos simultâneos. Avaliamos o seu caso e indicamos o melhor formato." },
  { q: "Qual a vazão ideal de aquecedor para minha casa?", a: "A vazão (L/min) deve cobrir os pontos de água usados ao mesmo tempo. Como referência: 1 ponto (1 chuveiro) = 10 a 15 L/min; 2 pontos simultâneos = 18 a 22 L/min; 3 ou mais pontos = 27 a 32 L/min. Em Curitiba a água fria chega a 12 °C no inverno, então sempre dimensionamos com folga." },
  { q: "Posso instalar aquecedor a gás em apartamento?", a: "Sim. A maioria dos prédios em Curitiba permite e tem ponto de gás encanado disponível. Verificamos a ventilação, a saída de exaustão (chaminé balanceada ou natural) e a aprovação do síndico/administração. Trabalhamos dentro das normas ABNT NBR 13103 e 15526." },
  { q: "Aquecedor a gás é seguro? E se faltar luz?", a: "Sim, é seguro quando instalado por empresa qualificada e com componentes certificados Inmetro. Os modelos modernos têm sensor de chama, sensor de superaquecimento e válvula de corte automático. Em quedas de luz, modelos eletrônicos podem precisar de pilha ou tomada — orientamos na escolha." },
  { q: "Gás encanado (GN) ou gás de botijão (GLP) — qual é melhor?", a: "Em Curitiba, onde a Compagas atende a maior parte da cidade, o gás encanado (GN) costuma sair mais barato no custo mensal e dispensa troca de botijão. O GLP é a alternativa quando não há rede encanada. O equipamento precisa ser configurado para o tipo de gás certo — fazemos a conversão quando necessário." },
  { q: "Vocês emitem nota fiscal e parcelam no cartão?", a: "Sim. Emitimos nota fiscal em todos os atendimentos e aceitamos PIX, transferência, cartão de débito e crédito (parcelamento em até 12x conforme a maquininha)." },
];

export function FAQ({ items = faqs, title }: { items?: { q: string; a: string }[]; title?: React.ReactNode } = {}) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 text-xs uppercase tracking-widest text-gold font-semibold">Dúvidas frequentes</div>
          <h2 className="font-display text-4xl font-bold text-navy-deep sm:text-5xl">
            {title ?? <>Respostas para suas <span className="italic text-navy">dúvidas</span></>}
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {items.map((f, i) => (
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
