## Plano — Trocar fotos da galeria "Trabalhos Reais"

### O que vai mudar
Substituir as 5 fotos atuais da galeria de instalações (usada na home e na página `/servicos/aquecedor-a-gas`) pelas 9 novas fotos enviadas no chat. Bairro genérico "Curitiba" em todas.

### Padronização das imagens
Todas as 9 fotos serão processadas iguais às atuais para manter o visual consistente da galeria:
- Formato: `.webp`, qualidade 78
- Dimensões: **760×760 px** (quadrado, `fit: cover` — recorta o centro)
- Compressão via `sharp` (mesmo script `scripts/resize.mjs` já usado no projeto)

### Passos

1. Copiar as 9 imagens de `user-uploads://` para `src/assets/trabalhos/` com nomes descritivos por marca:
   - `instalacao-rheem-20l-curitiba.webp`
   - `instalacao-komeco-prime-ko15di-curitiba.webp`
   - `instalacao-komeco-prime-corner-curitiba.webp`
   - `instalacao-komeco-prime-ko26di-curitiba.webp`
   - `instalacao-rinnai-teto-curitiba.webp`
   - `instalacao-rinnai-digital-42c-curitiba.webp`
   - `instalacao-komeco-black-brick-curitiba.webp`
   - `instalacao-komeco-black-area-servico-curitiba.webp`
   - `instalacao-komeco-prime-ko26di-banheiro-curitiba.webp`

2. Rodar `sharp` para converter/redimensionar cada uma para 760×760 .webp q78.

3. Atualizar `src/lib/work-photos.ts`:
   - Trocar os 5 imports antigos da `installPhotos` pelos 9 novos.
   - Reescrever o array `installPhotos` com 9 entradas (caption por marca/modelo, alt SEO em PT-BR mencionando marca + Curitiba + Astral Gás, neighborhood = "Curitiba").

4. Apagar os 5 arquivos `.webp` antigos não-utilizados de `src/assets/trabalhos/` para não inflar o bundle:
   - `instalacao-bosch-cabral.webp`
   - `instalacao-komeco-15fi-juveve.webp`
   - `instalacao-komeco-digital-bigorrilho.webp`
   - `instalacao-rinnai-analogico-batel.webp`
   - `instalacao-rinnai-digital-agua-verde.webp`
   - `instalacao-rinnai-digital-merces.webp` (já não está em uso)

5. Verificar build limpo e abrir a home + `/servicos/aquecedor-a-gas` no preview para confirmar que o carrossel mostra as 9 novas, todas no mesmo padrão quadrado.

### O que NÃO muda
- Layout/componente `RealWorkGallery` (já está perfeito — quadrado, autoplay, dots).
- Galerias de manutenção, bomba de calor e pressurizador.
- Textos da página, SEO, JSON-LD.
