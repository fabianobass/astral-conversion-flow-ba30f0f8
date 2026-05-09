## Auditoria geral + plano de melhorias

Foco: SEO para Google Ads (palavras-chave Curitiba + bairros), layout mobile e PageSpeed.

---

### 1. SEO — todas as páginas

**Root (`__root.tsx`)**
- Trocar `<html lang="en">` por `lang="pt-BR"`.
- Remover `og:image` e `twitter:site=@Lovable` herdados (poluem todas as páginas com imagem genérica).
- Manter só defaults (charset, viewport, twitter:card=summary_large_image, og:type=website, og:locale=pt_BR, og:site_name).
- Adicionar `theme-color`, `format-detection`.

**Por página** (Home, Aquecedor, Manutenção, Pressurizador, Bomba de Calor)
- Reescrever `title` e `description` com foco Curitiba + bairros (Batel, Água Verde, Bigorrilho, Cabral, Juvevê, Mercês, Portão, Cristo Rei, Santa Felicidade) — mantendo <60 / <160 chars.
- Adicionar `og:url` (canônica), `og:image` real da página (hero), `twitter:image`, `<link rel="canonical">`.
- Garantir um único `<h1>` por rota (já está OK).

**JSON-LD (LocalBusiness)** no root, mais `Service` em cada página de serviço e `BreadcrumbList` nas páginas internas. Telefones via `src/lib/contact.ts`.

**Arquivos públicos**
- Criar `public/robots.txt` apontando para sitemap.
- Criar `src/routes/sitemap[.]xml.tsx` (server route) listando as 5 rotas.

Exemplos de títulos:
```
/                          → Aquecedor a Gás em Curitiba | Instalação no Mesmo Dia — Astral Gás
/servicos/aquecedor-a-gas  → Instalação de Aquecedor a Gás em Curitiba — Rinnai, Bosch, Komeco | Astral
/servicos/manutencao       → Manutenção de Aquecedor a Gás em Curitiba — Atendimento Hoje | Astral Gás
/servicos/pressurizador    → Pressurizador de Água em Curitiba — INVERSORA HPI 750 | Astral Gás
/servicos/bomba-de-calor   → Bomba de Calor para Piscina em Curitiba — Full Inverter | Astral Gás
```

---

### 2. Performance / PageSpeed

**Imagens (maior ganho — hoje há 8 MB de assets)**
Conversão para WebP com `cwebp` (q=82 fotos, q=90 produtos com alpha) + redimensionamento:

| Arquivo | Hoje | Ação | Alvo |
|---|---|---|---|
| `bomba-de-calor/piscina-aerea.png` | 2.4 MB | resize 1600w + webp | ~150 KB |
| `bomba-de-calor/hero-piscina.png` | 1.6 MB | resize 1600w + webp | ~120 KB |
| `bomba-de-calor/bomba-produto.png` | 715 KB | webp (alpha) | ~120 KB |
| `pressurizador/inversora-hpi-750.png` | 404 KB | webp (alpha) | ~80 KB |
| `logo-astral-light.png` | 1.1 MB | webp ou remover (não é referenciado) | 0–20 KB |
| `trabalhos/*.jpg` (×6) | 88–152 KB | webp q82 | ~50 KB cada |
| `trabalhos/manutencao/*.jpg` (×9) | similar | webp q82 | ~50 KB cada |
| `pressurizador/instalacoes/*.jpg` | similar | webp q82 | ~50 KB cada |
| `marcas/*.png` (×8) | 11–29 KB | webp + resize 240w | ~5 KB cada |

**Hero LCP**
- Adicionar `fetchpriority="high"` + `loading="eager"` no `<img>` do hero da home e dos `ServiceHero` (atualmente sem prioridade).
- Adicionar `width`/`height` nas imagens grandes (CLS).
- Pré-carregar a imagem do hero da rota via `head().links` com `rel="preload" as="image"`.

**Animações / JS**
- Substituir `AnimatePresence` no `__root.tsx` por uma transição CSS leve (ou desativar em `prefers-reduced-motion`) — economiza JS no caminho crítico.
- `RealWorkGallery`: trocar autoplay padrão por `prefers-reduced-motion`-aware e parar autoplay quando fora do viewport (IntersectionObserver) — reduz long tasks.
- Carregar `framer-motion` apenas onde realmente usado; remover do header se possível (substituir abrir/fechar do menu por CSS transition).

**Cache / fontes**
- Verificar `src/lib/fonts.ts` e garantir `font-display: swap`.

---

### 3. Layout mobile (audit em 360 / 390 / 414 px)

**Hero (home)**
- A linha de stats (`+15 anos · +2.000 instalações · 4.9★`) usa flex com dividers — em 360 px fica apertada. Mudar para `grid grid-cols-3` com texto centralizado.
- Grid de logos com `-my-2 sm:-my-3` corta logos pequenos no mobile — remover negative margins no mobile, manter só >= sm.
- Reduzir `pt-32` para `pt-28` e `text-4xl` H1 já está OK.

**ServiceHero**
- `pt-40 pb-28` excessivo no mobile → `pt-28 pb-16 sm:pt-36 sm:pb-24`.
- Imagem de fundo escurece muito o texto em telas estreitas — já tem overlay; revisar contraste.

**Pressurizador (route)**
- Hero customizado: imagem do produto com `mix-blend-mode: lighten` pode sumir em mobile claro — testar e ajustar.
- Grid de marcas: `grid-cols-2 sm:grid-cols-4` OK; logos com `max-h-full` em container `h-24` deixam alguns pequenos — usar `h-12` interno fixo.

**Bomba de calor**
- Verificar overflow das seções de features no breakpoint sm.

**Header**
- Menu mobile já OK; testar tap targets >= 44 px.

**CtaForm**
- Form em duas colunas no lg, OK; revisar inputs em 360 px.

---

### 4. Verificação

- Após build, abrir cada rota no preview em viewport 375 e 1280 e checar console + visual.
- Rodar `npx lighthouse` mentalmente via Web Vitals do `browser--performance_profile`.
- Confirmar que todas as 5 rotas têm título, description, canonical, og:image próprios.

---

### Arquivos afetados

- `src/routes/__root.tsx`, `src/routes/index.tsx`, `src/routes/servicos.*.tsx` (5)
- `src/components/sections/Hero.tsx`, `ServiceHero.tsx`, `RealWorkGallery.tsx`
- `src/components/layout/Header.tsx` (motion → CSS opcional)
- `src/lib/seo.ts` (novo — helpers para JSON-LD e meta)
- `public/robots.txt` (novo), `src/routes/sitemap[.]xml.tsx` (novo)
- `src/assets/**` — substituição/adição de versões `.webp`; imports atualizados nos componentes

Sem alterações de conteúdo de copy a não ser nos meta tags. Sem mudanças de regra de negócio.
