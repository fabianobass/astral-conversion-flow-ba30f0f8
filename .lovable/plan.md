## Objetivo
Quando o usuário clicar em **"Falar com Especialista"**, em vez de abrir o WhatsApp direto, exibir um menu com duas opções:
- **Compra / Orçamento** → WhatsApp `(41) 99636-6543`
- **Manutenção** → WhatsApp `(41) 99194-5563`

Os dois números já existem em `src/lib/contact.ts` (`PHONE_SALES` e `PHONE_MAINTENANCE`).

## Mudanças

### 1. Novo componente `src/components/SpecialistDropdown.tsx`
Botão verde do WhatsApp com mesmo visual atual, mas envolvido por um `DropdownMenu` (shadcn) que abre ao clicar:
- Item 1: ícone WhatsApp + "Compra / Orçamento" + "(41) 99636-6543" → abre `waLink(PHONE_SALES, "Olá, gostaria de um orçamento.")`
- Item 2: ícone WhatsApp + "Manutenção" + "(41) 99194-5563" → abre `waLink(PHONE_MAINTENANCE, "Olá, preciso de manutenção no meu aquecedor.")`

Aceita props `label` e `className` para permitir variações de tamanho/texto nos diferentes locais.

### 2. Substituir os CTAs "Falar com Especialista"
Trocar o `<a>` direto pelo novo componente nestes pontos:
- `src/components/layout/Header.tsx` (desktop linha 53 e mobile linha 85)
- `src/components/sections/Hero.tsx` (linha 67)
- `src/components/sections/CtaForm.tsx` (linha 92)

### 3. Não alterar
- Botão flutuante `WhatsAppFloat` e botões "Orçamento gratuito no WhatsApp" das páginas de serviço continuam como link direto para vendas (já estão em contexto de orçamento de venda).
- Footer e botões "Falar agora" da seção de processo continuam diretos.

## Resultado
Em qualquer "Falar com Especialista" do site, o usuário vê um pequeno menu elegante com as duas opções e escolhe o número certo, evitando atendimentos no setor errado.
