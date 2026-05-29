## Objetivo
Garantir que todos os botões/links que disparam WhatsApp para o número **(41) 99662-0115** (vendas) abram a conversa com a mensagem:

> Olá! Vim pelo site da Astral Gás

O número de manutenção (99194-5563) mantém suas mensagens próprias.

## Alterações

1. **`src/lib/contact.ts`** — trocar o texto padrão de `waLink` para `"Olá! Vim pelo site da Astral Gás"`. Isso já cobre automaticamente todas as chamadas sem texto custom: `Process.tsx`, `CtaForm.tsx` (footer CTA), `Footer.tsx` (link de vendas) e o item "Compra e Instalação" do `SpecialistDropdown.tsx`.

2. **`src/components/WhatsAppFloat.tsx`** — substituir o texto da opção "Compra e instalação" (PHONE_SALES) pela mensagem padronizada.

3. **`src/components/sections/ServiceHero.tsx`** e **`src/components/sections/ServiceContent.tsx`** — quando `ctaMessage` não for informado, usar a mensagem padrão (já acontece via `waLink`). Adicionalmente, sobrescrever as mensagens custom atuais para usar a nova mensagem padronizada nas páginas de serviço, já que todas apontam para vendas:
   - `src/routes/servicos.aquecedor-a-gas.tsx`
   - `src/routes/servicos.pressurizador.tsx`
   - `src/routes/servicos.bomba-de-calor.tsx`
   - `src/routes/servicos.manutencao.tsx` (verificar — se aponta para manutenção, manter)

4. **`src/components/sections/CtaForm.tsx`** — o formulário monta um texto detalhado com dados do lead antes de abrir o WhatsApp. Pergunta abaixo.

## Pergunta

O formulário de contato (`CtaForm`) hoje envia mensagem com nome/telefone/serviço preenchidos pelo usuário. Devo:
- (A) manter esse comportamento (mensagem detalhada do formulário) e padronizar apenas os botões diretos de WhatsApp, **ou**
- (B) também substituir pela mensagem fixa "Olá! Vim pelo site da Astral Gás"?

Recomendo (A) para não perder os dados do lead.
