## Objetivo
Mostrar 4 fotos por vez no carrossel de trabalhos reais (em telas grandes), mantendo responsividade em telas menores.

## Alteração
No `src/components/sections/RealWorkGallery.tsx`, ajustar as classes de `basis` do slide:

- Mobile: 1 foto (`basis-full`)
- sm (≥640px): 2 fotos (`basis-1/2`)
- lg (≥1024px): 3 fotos (`basis-1/3`)
- xl (≥1280px): **4 fotos** (`basis-1/4`) — novo

Ou seja, troca:
```
basis-full sm:basis-1/2 lg:basis-1/3
```
por:
```
basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4
```

Isso afeta todas as páginas que usam o `RealWorkGallery` (Home, Aquecedor, Manutenção e futuras Bomba de Calor / Pressurizador), o que é o comportamento esperado para um componente compartilhado.

## Observação
No viewport atual (1067px), continuará mostrando 3 por vez, pois ainda está abaixo de 1280px. A partir de 1280px de largura aparecem 4 lado a lado. Se preferir já mostrar 4 a partir de 1024px (lg), é só me dizer que ajusto o breakpoint.