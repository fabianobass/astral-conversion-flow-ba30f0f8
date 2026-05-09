## Objetivo

Adicionar links de Instagram e Facebook no rodapé do site.

## Mudanças

### 1. `src/components/layout/Footer.tsx`

Dentro da coluna **"Contato"**, logo abaixo do botão verde do WhatsApp, adicionar uma linha "Redes sociais" com dois ícones circulares clicáveis:

- **Instagram** → `https://www.instagram.com/gasastral/` (ícone `Instagram` de `lucide-react`)
- **Facebook** → URL completa do perfil enviada pelo usuário (ícone `Facebook` de `lucide-react`)

Cada link com:
- Botão circular ~40 px (`h-10 w-10 rounded-full border border-white/15 bg-white/5`)
- `hover:text-gold hover:border-gold transition-colors`
- `target="_blank" rel="noopener noreferrer"`
- `aria-label="Astral Gás no Instagram"` / `aria-label="Astral Gás no Facebook"`

### 2. `src/lib/seo.ts`

Adicionar `sameAs: ["https://www.instagram.com/gasastral/", "https://www.facebook.com/..."]` no objeto `localBusinessJsonLd`. Isso ajuda o Google a vincular o site aos perfis sociais (Knowledge Panel, Maps).

## Fora de escopo

- Não reorganizar o rodapé nem criar coluna nova.
- Não adicionar outras redes (LinkedIn, YouTube etc.).

## Arquivos editados

1. `src/components/layout/Footer.tsx`
2. `src/lib/seo.ts`