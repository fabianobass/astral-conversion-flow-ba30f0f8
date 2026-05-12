## Favicon Astral Gás

Vou gerar um favicon baseado na identidade visual da marca (navy + dourado) e conectá-lo ao site.

### Conceito visual
- Monograma **"A"** estilizado em dourado (oklch gold da marca) sobre fundo navy-deep arredondado.
- Estilo limpo, legível em 16×16, alinhado ao logo Astral.

### Arquivos a gerar
- `public/favicon.ico` — 32×32 (clássico, fallback)
- `public/favicon.svg` — vetor (nítido em qualquer DPI)
- `public/apple-touch-icon.png` — 180×180 (iOS)
- `public/icon-192.png` e `public/icon-512.png` — PWA / Android
- `public/site.webmanifest` — manifest mínimo com nome e ícones

### Integração
Editar `src/routes/__root.tsx` adicionando aos `links` do head:
```
{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }
{ rel: "icon", href: "/favicon.ico", sizes: "32x32" }
{ rel: "apple-touch-icon", href: "/apple-touch-icon.png" }
{ rel: "manifest", href: "/site.webmanifest" }
```

### QA
Após gerar, abrir cada PNG/SVG e confirmar legibilidade nos tamanhos pequenos antes de finalizar.
