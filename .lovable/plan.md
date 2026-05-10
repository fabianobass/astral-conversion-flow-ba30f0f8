
## Diagnóstico (Lighthouse mobile atual: 87)

Pontos críticos detectados:

1. **LCP 2.8s** — `Element render delay` de 4.2s. O LCP é o `<p>` do hero, que está dentro de um `motion.div` com `opacity: 0 → 1` + delay 0.15s + duração 0.7s. A animação de entrada está atrasando o LCP.
2. **Imagens super-dimensionadas** (~121 KiB desperdiçados):
   - `hero-aquecedor-home.webp` 767×756 servida para 665×655 (mobile pede ~380px)
   - 5 fotos da galeria 1200×1200 servidas em 378×378 (~97 KiB desperdício)
   - `logo-astral` 1055×418 servido em 177×70 (~21 KiB desperdício)
3. **JS não usado: 94 KiB** no bundle principal (`index-*.js`).
4. **CSS render-blocking** (~150ms).
5. **Imagens da galeria sem `width`/`height`** explícitos — risco de CLS.
6. **Cache curto** no `~flock.js` (não controlável, ignorar).
7. **Preconnect Google Fonts não usado** — fontes parecem self-hosted; preconnects estão sobrando.

---

## Plano de otimização

### 1. Eliminar atraso do LCP
- Remover `delay: 0.15` e reduzir duração do hero de texto para 0.4s (manter apenas no hero da imagem se necessário).
- Alternativa mais segura: renderizar o `<p>` LCP **fora** do `motion.div` ou usar `initial={false}` em mobile/SSR para que o texto apareça imediatamente, mantendo só o fade da imagem.
- Ganho esperado: LCP de 2.8s → ~1.5s, score +5–8 pts.

### 2. Servir imagens em tamanho correto
- Reprocessar fotos da galeria: gerar variantes 768w (suficiente para mobile @2x em 380px) e usar `srcSet` + `sizes`.
- Hero home: gerar variante 800w; manter 767×756 mas adicionar `srcSet` com 400w e 800w.
- Logo `logo-astral`: regenerar em 360×142 (cobre @2x do display 177×70).
- Adicionar `width`/`height` em todas as imagens da galeria para travar CLS.
- Ganho: ~120 KiB economizados, LCP/Speed Index melhores.

### 3. Reduzir JS não usado (94 KiB)
- Auditar se o `framer-motion` está sendo importado inteiro; trocar `import { motion }` para `import { m }` + `LazyMotion` com `domAnimation` (reduz ~30–40 KiB).
- Verificar imports do `lucide-react` (já tree-shaken via ESM, confirmar).
- Remover `StyleSwitcher` da build de produção (parece dev-only) se aplicável.
- Verificar dropdowns/Radix carregados eagerly que poderiam ser lazy.

### 4. Remover render-blocking e preconnects órfãos
- Remover `<link rel="preconnect">` para `fonts.googleapis.com` e `fonts.gstatic.com` em `__root.tsx` (Lighthouse confirma que não há requisições para esses domínios).
- Avaliar inline do CSS crítico do hero (opcional, ganho marginal de 150ms).

### 5. Melhorias adicionais para "melhor do segmento"

**SEO técnico:**
- Verificar se há `canonical` em todas as rotas.
- Adicionar JSON-LD `BreadcrumbList` nas páginas de serviço.
- Adicionar JSON-LD `FAQPage` na seção FAQ da home.
- Adicionar `AggregateRating` (4.9★ já mencionado) ao `LocalBusiness`.
- Garantir `og:image` específico por rota de serviço.

**Acessibilidade (92 → 100):**
- Auditar contraste de `text-white/60`, `text-white/65` sobre `navy-deep` (provável falha WCAG AA).
- Verificar labels em links de ícone (WhatsApp float, breadcrumb chevron).
- Garantir que todos os botões têm `aria-label` quando só têm ícone.

**Qualidade percebida:**
- Adicionar `<link rel="dns-prefetch">` para `wa.me` (CTAs principais).
- Hint `loading="eager"` + `fetchpriority="high"` no logo do header (renderiza acima da dobra).
- Service Worker / cache headers para assets imutáveis (verificar se Cloudflare/Vercel já cuida).

---

## Detalhes técnicos por arquivo

```text
src/components/sections/Hero.tsx          → remover delay no texto LCP, ajustar srcSet do hero
src/components/sections/ServiceHero.tsx   → mesma estratégia anti-delay no texto
src/components/sections/RealWorkGallery.tsx → srcSet, width/height, sizes
src/components/layout/Header.tsx          → fetchpriority no logo, regenerar logo-astral menor
src/routes/__root.tsx                     → remover preconnects órfãos, adicionar dns-prefetch wa.me
src/lib/seo.ts                            → JSON-LD FAQPage, BreadcrumbList, AggregateRating
vite.config.ts                            → confirmar splitting; possivelmente manualChunks p/ framer-motion
package.json (via bun)                    → trocar motion por LazyMotion+m
```

---

## Resultado esperado

| Métrica | Antes | Meta |
|---|---|---|
| Performance | 87 | 95+ |
| LCP | 2.8s | <1.8s |
| Speed Index | 6.4s | <3.5s |
| Acessibilidade | 92 | 100 |
| SEO | 100 | 100 (com rich results) |

Posso executar tudo em sequência (LCP fix → imagens → JS → SEO/A11y) ou priorizar só performance se preferir. Confirme para implementar.
