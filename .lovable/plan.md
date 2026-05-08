## Objetivo

Voltar a usar a **logo original** (texto preto "Astral Gás" + esfera laranja, fundo transparente) no Header e Footer, sem fundo branco e sem alterar o design. Para que ela não fique "apagada" sobre o navy escuro, adicionar um **brilho/halo âmbar discreto** atrás da logo — um glow suave que destaca sem competir com o desenho.

## Mudanças

### 1. `src/components/layout/Header.tsx`
- Trocar import de `logo-astral-light.png` → `logo-astral.webp` (a original).
- Remover o `drop-shadow` escuro adicionado antes.
- Envolver o `<img>` num wrapper relativo com um pseudo-glow:
  - Um `div` absoluto atrás da logo, com `bg-[radial-gradient(ellipse_at_center,_hsl(var(--gold)/0.55),_transparent_70%)]`, `blur-2xl`, `scale-110`, `-z-10`.
  - Resultado: a logo original flutua sobre um halo cor-de-laranja suave, leve, que dá contraste ao texto preto sem virar "caixa branca".

### 2. `src/components/layout/Footer.tsx`
- Mesma troca: import volta para `logo-astral.webp`.
- Mesmo wrapper com halo âmbar (um pouco mais intenso, ex.: `0.6` opacity), já que o footer é mais escuro.

### 3. Arquivos não tocados
- `logo-astral-light.png` permanece no projeto (pode ser útil no futuro, ex.: og:image em fundo escuro). Sem deleção.
- Nenhuma mudança em `themes.ts`, `fonts.ts` ou `styles.css`.

## Resultado visual

- Logo idêntica à original (texto preto, esfera laranja, sem fundo).
- Atrás dela: um brilho laranja difuso (~120% do tamanho da logo, bem desfocado) que "ilumina" a área e dá legibilidade ao texto preto sobre o navy.
- Sem retângulo branco, sem alteração do design da marca.
