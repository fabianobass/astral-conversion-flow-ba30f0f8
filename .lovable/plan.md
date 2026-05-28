# Plano — Melhorias Visuais

## 1. Topbar de contato (acima do header)
- Novo componente `src/components/layout/TopBar.tsx`: faixa fina escura (`bg-navy-deep`) com:
  - Esquerda: `Clock` + "Atendimento em 30 min · Seg–Sáb 8h–20h"
  - Direita: ícone telefone `(41) 99194-5563` (click-to-call, esconde em mobile <sm) + separador + WhatsApp link
- Montar dentro de `Header.tsx` (acima do nav atual) e ajustar o `pt-32` do Hero para `pt-36`/`pt-40` conforme nova altura.
- Sticky junto com o header? Não — só o header principal fica sticky; a topbar rola junto (mais leve em mobile).

## 2. Hero mais impactante + selo Google
- Em `Hero.tsx`:
  - Substituir o bloco "4.9★ avaliação Google" das stats por um **card destacado** logo abaixo dos CTAs: pílula com logo Google (SVG inline), 5 estrelas douradas preenchidas grandes, "4.9 · +200 avaliações" e link sutil.
  - Reforçar o badge superior: "Atendimento em até 30 min" ganha pulse dourado discreto.
  - Adicionar segundo selo ao lado das marcas: pílula "Assistência Autorizada Rinnai e Lorenzetti" com `BadgeCheck` dourado.
  - Refinar gradiente: trocar `from-gold/20` por gradiente radial duplo (gold + amber) mais sofisticado.
- Aplicar mesmo padrão de selo Google no `ServiceHero` da página `/servicos/aquecedor-a-gas`.

## 3. Depoimentos com avatar + estrelas grandes
- Em `Testimonials.tsx`:
  - Cabeçalho ganha selo Google grande centralizado (mesmo componente do hero) com "4.9 baseado em +200 avaliações".
  - Cards: avatar circular com inicial em gradiente dourado (sem foto real), nome em cima, cidade ao lado, estrelas maiores (h-5) e ícone aspas decorativo no canto.
  - Adicionar 3 depoimentos novos (total 6) — variando bairros de Curitiba.
  - Hover: leve elevação + borda dourada.

## 4. Microinterações
- Cards de benefícios do Hero: hover com `border-gold/40` + `translate-y-[-2px]`.
- Stats: contador animado simples (0 → valor) usando `useInView` + state, dispara uma vez.

## Arquivos
- novo: `src/components/layout/TopBar.tsx`
- novo: `src/components/GoogleReviewBadge.tsx` (reutilizável hero + depoimentos)
- editar: `Header.tsx`, `Hero.tsx`, `ServiceHero.tsx`, `Testimonials.tsx`

## Fora de escopo
- Conversão de imagens AVIF/WebP, bloco de preço, lightbox de galeria, política de privacidade (já feita).
