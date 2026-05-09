## Regerar imagem com fundo casado ao navy do hero

### Cor de referência

`--navy-deep: oklch(0.18 0.01 50)` ≈ aproximadamente **#1F1814** (navy quase preto com leve toque quente). Vou pedir ao gerador um fundo com essa cor exata, totalmente uniforme, sem gradiente próprio nas bordas.

### Passos

1. **Regerar a imagem** com `imagegen--edit_image` a partir da imagem base atual (`src/assets/pressurizador/inversora-hpi-750.png`):
   - Fundo sólido uniforme na cor `#1F1814` (oklch 0.18 0.01 50), idêntico ao `--navy-deep`
   - Bordas TOTALMENTE planas na mesma cor (sem vinheta, sem gradiente próprio, sem linha de horizonte)
   - Manter a iluminação dramática dourada vinda da direita e o brilho no inox
   - Aspect ratio 1:1
   - Sobrescreve `src/assets/pressurizador/inversora-hpi-750-hero.jpg`

2. **Não alterar** o JSX — o `<img>` já aponta para esse caminho. O fundo da imagem vai casar com o navy do hero naturalmente.

### Arquivos afetados

- `src/assets/pressurizador/inversora-hpi-750-hero.jpg` (sobrescrito)
