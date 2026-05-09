## Objetivo

Aplicar 3 ajustes finais de conversão no Hero e CtaForm.

## Mudanças

### 1. `src/components/sections/Hero.tsx` — faixa de logos das marcas (placeholders)

Adicionar logo abaixo dos botões CTA (e antes do bloco de stats `+15 anos / +2.000 / 4.9★`) uma linha discreta com o título "Marcas autorizadas" e 3 placeholders horizontais para Rinnai, Lorenzetti e Rheem.

Como você ainda vai enviar os arquivos oficiais, faço um componente `<BrandLogos />` interno usando placeholders em texto estilizado (font-display, tracking largo, opacidade reduzida) dentro de cards `bg-white/5 border border-white/10 rounded-lg`. Assim que você anexar os PNG/SVG, troco os textos por `<img>` em uma única edição.

```text
[ RINNAI ]   [ LORENZETTI ]   [ RHEEM ]
```

Layout: `grid-cols-3` no desktop, `grid-cols-3` também no mobile (logos ficam pequenos mas alinhados — é o padrão de "selo de marca").

### 2. Botão flutuante de WhatsApp — **já existe**

O `WhatsAppFloat` (em `src/components/WhatsAppFloat.tsx`) já está montado em `__root.tsx` e abre um popover com 2 opções (Compra/Instalação e Manutenção), cada uma indo direto para WhatsApp sem passar pelo formulário. Item 2 já está atendido.

Se você prefere **um único clique → WhatsApp de vendas direto** (sem o popover de escolha), me avise — é uma simplificação de 5 linhas. Por padrão, mantenho como está.

### 3. `src/components/sections/CtaForm.tsx` — texto do CTA do formulário

- Botão de submit: "Solicitar orçamento gratuito" → **"Falar com Especialista no WhatsApp"**
- Microcopy abaixo do botão: mantém ("Ao enviar você será redirecionado para o WhatsApp.") — já reforça a promessa do botão.

### Não tocar
- Demais seções, copy do Hero, botões existentes do Header/Footer, fluxo do formulário (continua abrindo WhatsApp com nome+telefone+serviço).

## Próximo passo (você)

Anexar os logos oficiais (.png ou .svg, fundo transparente, ~200×80px). Quando enviar, faço uma edição rápida no `BrandLogos` trocando os textos pelas `<img>`.
