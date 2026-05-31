## O que mudar

O elemento selecionado é o link "(41) 99662-0115" que hoje usa `href="tel:+..."` e abre o discador. Você quer que ele se comporte como os outros CTAs de vendas — abrir direto a conversa no WhatsApp.

Existem dois lugares no site com esse mesmo padrão (telefone clicável de Vendas em `tel:`). Vou padronizar os dois para WhatsApp, mantendo a aparência atual (ícone de telefone + número visível):

1. **`src/components/sections/CtaForm.tsx`** (linha 104) — bloco "Vendas" da seção de contato no rodapé das páginas.
2. **`src/components/layout/Footer.tsx`** (linha 41) — coluna "Contato → Vendas" do rodapé global.

Em ambos:
- Trocar `href={\`tel:+${PHONE_SALES}\`}` por `href={waLink(PHONE_SALES)}`
- Adicionar `target="_blank"` e `rel="noopener noreferrer"`
- Atualizar `aria-label` para deixar claro que abre o WhatsApp
- Manter o ícone `<Phone />` e o texto `PHONE_SALES_DISPLAY` exatamente como estão (visual idêntico)

O telefone de **Manutenção** no Footer (linha 56) fica como `tel:` — já existe um botão verde de WhatsApp logo abaixo dele, então preservar o `tel:` mantém as duas opções (ligar OU WhatsApp). Se quiser que esse também vire WhatsApp, me avise.

## Fora de escopo

- Não mexer no TopBar (já é WhatsApp).
- Não mexer em estilos, cores ou layout.
- Não tocar em SEO/schema (`PHONE_SALES_DISPLAY` continua aparecendo como texto).