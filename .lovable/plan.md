## Ajuste nos cards de logos das marcas

No `src/components/sections/Hero.tsx`, na faixa "Marcas autorizadas":

**Mudanças:**
- Reduzir o padding dos cards: de `px-2 py-3` para `px-2 py-1.5` (fundo branco fica mais fino)
- Aumentar a altura das logos: de `h-6 sm:h-8` para `h-9 sm:h-11` (logos maiores e mais legíveis)
- Manter o fundo branco (necessário para contraste das logos vermelhas no navy)

Resultado: logos ~40% maiores, com bem menos "moldura" branca em volta.

Nada mais é alterado.