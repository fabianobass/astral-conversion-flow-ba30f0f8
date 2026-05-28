import { createFileRoute } from "@tanstack/react-router";
import { buildRouteMeta } from "@/lib/seo";

export const Route = createFileRoute("/politica-privacidade")({
  head: () => buildRouteMeta({
    path: "/politica-privacidade",
    title: "Política de Privacidade — Astral Gás Aquecedores",
    description:
      "Como a Astral Gás Aquecedores coleta, usa e protege os dados pessoais informados em nosso site e atendimento via WhatsApp.",
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 pt-32 pb-20 lg:px-8">
      <h1 className="font-display text-4xl font-bold text-navy-deep sm:text-5xl">
        Política de Privacidade
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Última atualização: {new Date().toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}
      </p>

      <div className="mt-8 space-y-8 text-foreground/85">
        <section>
          <h2 className="font-display text-2xl font-bold text-navy-deep">1. Quem somos</h2>
          <p className="mt-2">
            A Astral Gás Aquecedores é especializada em venda, instalação e
            manutenção de aquecedores a gás, pressurizadores e bombas de calor em
            Curitiba e região metropolitana. Esta política descreve como tratamos
            os dados pessoais que você nos fornece neste site ou no nosso WhatsApp.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-navy-deep">2. Dados que coletamos</h2>
          <p className="mt-2">
            Ao preencher um formulário de orçamento ou iniciar conversa pelo
            WhatsApp, coletamos: nome, telefone/WhatsApp, endereço aproximado da
            instalação (quando informado) e mensagens/fotos enviadas durante o
            atendimento.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-navy-deep">3. Como usamos seus dados</h2>
          <ul className="mt-2 ml-6 list-disc space-y-1">
            <li>Responder ao seu pedido de orçamento;</li>
            <li>Agendar visita técnica e execução do serviço;</li>
            <li>Emitir nota fiscal, contrato e termos de garantia;</li>
            <li>Realizar atendimento pós-venda e suporte de manutenção.</li>
          </ul>
          <p className="mt-2">
            Não vendemos, alugamos nem compartilhamos seus dados com terceiros
            para fins de marketing.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-navy-deep">4. Cookies e medição</h2>
          <p className="mt-2">
            Usamos Google Analytics, Google Ads e Google Tag Manager para medir o
            desempenho de campanhas e melhorar o site. Esses serviços podem
            instalar cookies no seu navegador, que você pode desativar nas
            configurações do navegador a qualquer momento.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-navy-deep">5. Seus direitos (LGPD)</h2>
          <p className="mt-2">
            Conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018), você pode
            solicitar acesso, correção, exclusão ou portabilidade dos seus dados a
            qualquer momento pelos canais informados no rodapé.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-navy-deep">6. Segurança</h2>
          <p className="mt-2">
            Mantemos seus dados em ambiente seguro, com acesso restrito à equipe
            envolvida no atendimento. Toda a navegação no site usa conexão
            criptografada (HTTPS).
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-navy-deep">7. Contato</h2>
          <p className="mt-2">
            Dúvidas sobre esta política? Fale conosco pelo WhatsApp ou pelos
            telefones informados no rodapé do site.
          </p>
        </section>
      </div>
    </article>
  );
}
