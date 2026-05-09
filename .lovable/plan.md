## Objetivo
Transformar a imagem do chuveiro (atualmente ao lado direito do hero da página `/servicos/aquecedor-a-gas`) em **fundo do header**, ocupando toda a largura, com o texto sobreposto.

## Mudanças

1. **`src/components/sections/ServiceHero.tsx`**
   - Quando a prop `image` for fornecida, renderizar a imagem como `background` absoluto cobrindo toda a section (`object-cover`, `inset-0`).
   - Adicionar overlay com degradê escuro navy (`bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40`) por cima da imagem para garantir legibilidade do texto à esquerda.
   - Manter o glow dourado decorativo.
   - Aumentar o padding vertical (`pt-40 pb-28`) para dar mais presença visual ao banner.
   - Remover o layout em 2 colunas — texto volta a ocupar `max-w-3xl` alinhado à esquerda, sobre a imagem.

2. **`src/routes/servicos.aquecedor-a-gas.tsx`**
   - Sem alterações: continua passando `image={heroBanho}`.

## Resultado visual
- Foto do chuveiro dourado com vapor preenche todo o header.
- Degradê navy escuro à esquerda → transparente à direita revela a imagem.
- Texto, breadcrumb e botão WhatsApp ficam sobre o lado escuro com ótimo contraste.
