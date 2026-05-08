## Seletor de tema/cores unificado

### 1. Paletas curadas (4)
Cada paleta define 4 tokens principais: `background`, `foreground`, `navy-deep` (superfícies escuras), `gold` (acento). Os demais tokens (card, muted, border, etc.) são derivados.

| Paleta | Background | Acento | Vibe |
|---|---|---|---|
| **Royal Gold** (atual) | off-white | dourado em fundo azul-noite | Premium clássico |
| **Obsidian** | preto suave | dourado em fundo grafite | Luxo minimal |
| **Forest Copper** | creme | cobre em fundo verde-floresta | Orgânico sofisticado |
| **Bordeaux Cream** | creme quente | bordô em fundo vinho profundo | Boutique elegante |

Todas em `oklch` para coerência perceptiva.

### 2. Implementação técnica
- `src/lib/themes.ts` — array `THEMES` com id, label, swatches (4 cores para preview) e mapa de variáveis CSS
- Aplicação: `document.documentElement.style.setProperty(...)` para cada token
- Persistência em `localStorage` (`astral-theme`)
- Mantém compatibilidade total com tokens existentes (`navy-deep`, `gold`, `background`, etc.) — nenhum componente precisa mudar

### 3. Unificar com seletor de fontes
Renomear `FontSwitcher` → `StyleSwitcher` (mesmo botão, mesmo lugar):
- Popover ganha **2 abas** no topo (shadcn `Tabs`): "Cores" e "Fontes"
- Aba **Cores**: 4 cards com 4 swatches cada (preview visual da paleta) + nome + check no ativo
- Aba **Fontes**: o conteúdo atual do `FontSwitcher`
- Largura do popover aumenta para `w-80`
- Estado de fonte e tema independentes, ambos persistidos

### 4. Arquivos
- **Novo:** `src/lib/themes.ts`
- **Novo:** `src/components/StyleSwitcher.tsx` (substitui FontSwitcher)
- **Editar:** `src/routes/__root.tsx` (trocar import e tag)
- **Remover:** `src/components/FontSwitcher.tsx`
- `src/components/ui/tabs.tsx` já existe no projeto

Sem mudanças em outros componentes — tudo se adapta via CSS variables.
