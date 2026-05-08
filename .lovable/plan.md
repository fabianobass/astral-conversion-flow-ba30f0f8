## Objetivo

Reforçar conversão na dobra superior da home com 3 gatilhos de confiança e CTAs mais ativos.

## Mudanças

### 1. `src/components/sections/Hero.tsx` — gatilhos de confiança abaixo do H1

Substituir o badge atual "Atendimento em até 30 minutos" (acima do H1) e a lista de 4 itens genéricos por uma faixa enxuta de **3 selos de confiança** logo abaixo do subtítulo, com ícones do `lucide-react`:

- ✅ **Pronta Entrega** — ícone `Truck` — "Estoque local em Curitiba"
- ✅ **Instalação Inclusa** — ícone `Wrench` — "Técnicos certificados no mesmo dia"
- ✅ **Autorizada Rinnai e Lorenzetti** — ícone `BadgeCheck` — "Garantia de fábrica"

Layout: faixa horizontal em 3 colunas (`grid-cols-3` no desktop, empilhado no mobile), cards translúcidos (`bg-white/5 border border-white/10 rounded-xl p-3`), ícone dourado + label em negrito + descrição curta em `text-white/60`.

A lista de 4 bullets atual ("Orçamento gratuito em 5 min", etc.) sai — vira ruído depois dos 3 selos. O bloco de stats (+15 anos, +2.000 instalações, 4.9★) permanece.

### 2. `src/components/sections/Hero.tsx` — CTAs mais ativos

- Botão WhatsApp: "Orçamento no WhatsApp" → **"Falar com Especialista Agora"**
- Botão telefone: mantém ícone, label muda de "Ligar agora" → **"Ver Preços e Modelos"** apontando para a página `/servicos/aquecedor-a-gas` (mais alinhado ao copy; quem quer ligar usa o número exibido no Header). 
  - Alternativa se preferir manter como `tel:`: trocar só para **"Ligar para Especialista"**.

### 3. `src/components/layout/Header.tsx` — CTA do header

Botão gold do header: "Orçamento" → **"Falar com Especialista"** (desktop e mobile), mantendo ícone WhatsApp verde.

### Não tocar
- Demais seções, formulário do `CtaForm` (botão "Solicitar orçamento gratuito" já é ativo e específico), botão flutuante.

## Pergunta antes de implementar

No item 2, o segundo botão atual é `tel:` (ligação direta). Prefere:
- (a) Trocar para **"Ver Preços e Modelos"** linkando para `/servicos/aquecedor-a-gas` (mais comercial, mantém o usuário no funil), ou
- (b) Manter como ligação telefônica e só renomear para **"Ligar para Especialista"**?

Vou assumir **(a)** se não houver resposta — é o que mais reforça o gatilho "ver modelos/preços" que você citou.
