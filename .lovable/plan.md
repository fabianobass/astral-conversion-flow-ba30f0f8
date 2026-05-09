## Integrar a foto do pressurizador ao fundo do hero

A foto do produto (`inversora-hpi-750.png`) está com fundo transparente, mas visualmente ainda aparece como um "recorte" sobre o navy escuro. Vou aplicar efeitos de blending para ela parecer integrada ao header.

### Mudanças em `src/routes/servicos.pressurizador.tsx` (apenas no `<img>` do hero)

1. **Reduzir opacidade da imagem** para ~80–85% (`opacity-85`) para suavizar o contraste com o fundo navy
2. **Aplicar máscara radial de fade** nas bordas usando `mask-image` (CSS), fazendo as extremidades da foto se dissolverem no fundo navy-deep
3. **Reforçar o glow dourado** atrás da imagem (já existe) aumentando levemente o blur, para dar a sensação de luz emanando do produto
4. **Adicionar `mix-blend-mode: lighten`** opcional — testar; em fundos escuros ajuda o produto branco/cinza a parecer luminoso ao invés de "colado"

### Resultado esperado

Foto do HPI 750 parece flutuar no header navy, com bordas suaves dissolvendo no fundo e um halo dourado por trás — mesma linguagem visual do resto da página, sem o aspecto de "sticker" recortado.

### Arquivos afetados

- `src/routes/servicos.pressurizador.tsx` (apenas as classes do `<img>` e do container do glow no hero)
