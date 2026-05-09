## Problema

A imagem nova foi trocada, mas o `ServiceHero` aplica **três camadas escuras** que escondem quase toda a foto, e a imagem está com `object-cover` centralizado, então o aquecedor aparece atrás do texto.

Camadas atuais sobre a imagem:
1. `bg-navy-deep/75` (mobile) → `/55` (sm) → `/30` (md)
2. Gradiente horizontal `from-navy-deep via-navy-deep/90 to-navy-deep/50`
3. Gradiente vertical `from-navy-deep/95 via-navy-deep/40 to-navy-deep/20`

## Plano

Ajustar somente o `ServiceHero` (`src/components/sections/ServiceHero.tsx`):

1. **Posicionar a imagem à direita** com `object-cover object-right` (no mobile mantém `object-center` para não cortar).
2. **Reduzir o overlay base** para `bg-navy-deep/70` mobile → `/40` sm → `/20` md, deixando a foto respirar.
3. **Substituir os dois gradientes por um único gradiente lateral** mais forte à esquerda e transparente à direita: `from-navy-deep via-navy-deep/80 to-transparent`. Isso garante legibilidade do título/CTA à esquerda e revela o aquecedor cinematográfico no lado direito.
4. **Remover o gradiente vertical** que achatava tudo.
5. Manter o glow dourado decorativo.

## Escopo

A mudança afeta `ServiceHero`, usado também em pressurizador, bomba de calor e manutenção. Como o efeito (foto cinematográfica à direita + texto à esquerda) é desejável em todas, aplico globalmente. Se preferir só na página de aquecedor, me avise.
