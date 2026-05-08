## Troca de fontes + Seletor de fontes ao vivo

### 1. Fontes principais (default)
Trocar Playfair Display + Inter por **Fraunces** (títulos) + **DM Sans** (corpo).

- Importar todas as 4 famílias do Google Fonts em `src/styles.css` (mantenho Playfair e Inter carregadas para o seletor poder alternar)
- Definir variáveis CSS:
  ```css
  --font-display: 'Fraunces', serif;
  --font-sans: 'DM Sans', sans-serif;
  ```
- Fraunces com optical sizing e `font-variation-settings` para um leve toque "soft" nas curvas (visual sofisticado)

### 2. Seletor de fontes (FontSwitcher)
Componente flutuante discreto no canto inferior esquerdo (não conflita com o WhatsApp à direita).

**Comportamento:**
- Botão pequeno com ícone de tipografia (`Type` do lucide)
- Ao clicar, abre um popover com 4 opções de combinação:
  1. Fraunces + DM Sans (default)
  2. Playfair Display + Inter (premium editorial)
  3. Cormorant Garamond + Manrope (luxo fino)
  4. Sora + Plus Jakarta Sans (tech moderno)
- Cada opção mostra preview do nome renderizado na própria fonte
- Seleção troca as variáveis `--font-display` e `--font-sans` no `<html>` em tempo real
- Persistência em `localStorage` para manter a escolha entre páginas
- Indicação visual da combinação ativa

**Arquivos:**
- `src/lib/fonts.ts` — array com as 4 combinações (id, label, display, sans)
- `src/components/FontSwitcher.tsx` — botão + popover (usa `Popover` do shadcn já disponível)
- `src/styles.css` — `@import` das 4 famílias do Google Fonts
- `src/routes/__root.tsx` — montar `<FontSwitcher />` junto com o `<WhatsAppFloat />`

### 3. Detalhes técnicos
- O switcher aplica `document.documentElement.style.setProperty('--font-display', value)` para herança em todo o site
- Como o Tailwind v4 lê `--font-display` via `@theme inline`, todos os componentes que usam `font-display` ou `font-sans` mudam automaticamente
- Hidratação SSR-safe: leitura do localStorage só dentro de `useEffect`
- Carregamento de fontes em paralelo (não bloqueante, `display=swap`)
