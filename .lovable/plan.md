## Objetivo

Trocar o fundo do **Header** para um tom claro (bege/off-white da paleta `--background`), permitindo usar a logo original (texto preto + esfera laranja) com legibilidade perfeita. O resto do site permanece com o navy escuro como está hoje. O Footer continua escuro e mantém a solução do halo âmbar (ou pode receber a versão light da logo, ver abaixo).

## Mudanças

### 1. `src/components/layout/Header.tsx`
- Trocar as classes de fundo:
  - Antes: `bg-navy-deep/95 backdrop-blur-md` / `bg-navy-deep/70 backdrop-blur-sm`
  - Depois: `bg-background/95 backdrop-blur-md border-b border-border` (scrolled) e `bg-background/80 backdrop-blur-sm` (topo).
- Remover o wrapper de halo âmbar atrás da logo (não é mais necessário em fundo claro).
- Atualizar cores dos elementos do header para contraste em fundo claro:
  - Links da nav: `text-foreground/80 hover:text-gold` (em vez de `text-white/80`).
  - Telefone: `text-foreground/90 hover:text-gold`.
  - Botão "Orçamento Grátis": mantém `bg-gold text-navy-deep` (já funciona em fundo claro).
  - Ícone do menu mobile: `text-foreground` (em vez de `text-white`).
- Menu mobile expandido: trocar `bg-navy-deep` por `bg-background`, links de `text-white/90` para `text-foreground/90`, borda `border-border`.

### 2. `src/components/layout/Footer.tsx`
- **Sem alteração** — footer continua escuro (`bg-navy-deep`) com a logo original + halo âmbar que já está implementado. A solução de halo funciona razoavelmente bem ali porque o footer é uma área menor e mais "decorativa".
- (Opcional, se quiser uniformizar depois: aplicar mesmo fundo claro numa faixa atrás da logo do footer — mas não faço agora para manter o escopo cirúrgico.)

### 3. Arquivos não tocados
- `logo-astral.webp` — continua sendo a logo usada.
- `logo-astral-light.png` — fica disponível para uso futuro (og:image, etc).
- `themes.ts`, `styles.css`, `fonts.ts` — sem mudanças.

## Considerações de design

- O Hero abaixo do header já usa fundo escuro com imagem — a transição entre header claro e hero escuro cria contraste forte e bem definido (estilo editorial / premium hospitality).
- O header fica "flutuando" como uma barra clara translúcida sobre o conteúdo escuro abaixo, separado por uma borda sutil.
- Em todas as 5 paletas do `themes.ts`, `--background` é claro e `--foreground` é escuro, então a mudança funciona consistentemente em todos os temas do StyleSwitcher.

## Resultado visual

- Topo do site: faixa clara (cor da paleta) com a logo original perfeitamente legível, links escuros elegantes, CTA dourado em destaque.
- Resto do site: inalterado.
- Footer: inalterado (continua escuro com halo).
