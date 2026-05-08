## Objetivo

Trocar o botão flutuante de WhatsApp atual (pílula verde com "Fale conosco") pelo **ícone padrão circular do WhatsApp** e, ao clicar, abrir um menu com duas opções de atendimento:

1. **Compra e instalação de aquecedor a gás** → abre WhatsApp do comercial (`PHONE_SALES`)
2. **Manutenção de aquecedor a gás** → abre WhatsApp da manutenção (`PHONE_MAINTENANCE`)

## Mudanças

### `src/components/WhatsAppFloat.tsx` (refatoração)
- Substituir o `<a>` único por um `<button>` que controla um estado `open`.
- Botão principal: círculo verde (`bg-whatsapp`), ícone oficial do WhatsApp (SVG inline, não o `MessageCircle` do lucide — esse é genérico). Tamanho ~`h-14 w-14`, sombra forte, animação de pulse mantida.
- Ao clicar, expande acima do botão um pequeno painel (card branco arredondado, `shadow-xl`, `border`) com:
  - Cabeçalho curto: "Como podemos ajudar?"
  - Opção 1: **Compra e instalação** — ícone `Flame`, texto curto, abre `waLink(PHONE_SALES, "Olá! Gostaria de orçamento para compra e instalação de aquecedor a gás.")`
  - Opção 2: **Manutenção** — ícone `Wrench`, texto curto, abre `waLink(PHONE_MAINTENANCE, "Olá! Preciso de manutenção do meu aquecedor a gás.")`
  - Botão fechar (X) no canto.
- Animação de abertura com `framer-motion` (fade + slide up).
- Fechar ao clicar fora (listener no `document`) ou após escolher uma opção.
- Acessibilidade: `aria-expanded`, `aria-label`, foco visível.

### Arquivos não tocados
- `src/lib/contact.ts` — já tem `PHONE_SALES`, `PHONE_MAINTENANCE` e `waLink(phone, text)` com mensagem customizável. Nada a alterar.
- `src/routes/__root.tsx` — `WhatsAppFloat` continua montado uma vez no root, aparece em todas as páginas.

## Detalhes visuais

- Botão fechado: círculo verde `h-14 w-14`, ícone WhatsApp branco, pulse no canto.
- Painel aberto: largura ~280px, ancorado `bottom-24 right-6`, fundo `bg-card`, borda sutil, opções como linhas clicáveis com hover suave (`hover:bg-secondary`).
- Mantém z-index `z-50`.

## Resultado

Botão flutuante mais clean (padrão WhatsApp), e usuário escolhe o canal certo (vendas vs manutenção) antes de iniciar a conversa, evitando triagem manual.
