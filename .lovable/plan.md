## Plano — Galeria vertical 3:4 mostrando o aquecedor inteiro

### Mudanças

1. **Reprocessar as 9 fotos** em `src/assets/trabalhos/instalacao-*-curitiba.webp` para **760×1013 px** (3:4), `.webp` q80, usando `fit: "cover"` com `position: "top"` (corta o rodapé/pia se precisar, mas preserva o aquecedor que fica na parte de cima da foto).

2. **Atualizar `src/components/sections/RealWorkGallery.tsx`**:
   - Trocar `aspect-square` por `aspect-[3/4]` no wrapper da imagem.
   - Atualizar `width={760}` `height={760}` para `width={760}` `height={1013}`.
   - Manter o resto do layout (carrossel, autoplay, dots, basis-1/4 no desktop).

3. Apenas a galeria de **instalações** muda. Manutenção, bomba de calor e pressurizador continuam quadradas (o componente é reutilizado, então passo a aspect ratio como prop opcional com default `square` para não quebrar as outras).

### Detalhe técnico
Adicionar prop opcional `aspectRatio?: "square" | "portrait"` em `RealWorkGallery` (default `"square"`). Nas chamadas em `index.tsx` e `servicos.aquecedor-a-gas.tsx` para `installPhotos`, passar `aspectRatio="portrait"`.

### Resultado
Cards verticais 3:4 mostrando o aquecedor completo do topo (chaminé/duto) até as conexões de gás/água, sem cortar o equipamento.
