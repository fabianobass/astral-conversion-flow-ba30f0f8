# Instalar Google Analytics 4 (GA4) no site

**Measurement ID:** `G-R7WVSM499B` (fluxo `astralgas`)

## O que será feito

### 1. Adicionar o snippet do gtag.js no `__root.tsx`
No `head()` do root route, incluir 2 scripts:
- `<script async src="https://www.googletagmanager.com/gtag/js?id=G-R7WVSM499B">`
- Script inline com `window.dataLayer`, `gtag('js', new Date())` e `gtag('config', 'G-R7WVSM499B')`

Vai dentro do array `scripts` do `head()`, junto do JSON-LD que já existe — assim o GA4 entra no HTML inicial (SSR), começa a contar pageview imediatamente e dispara automaticamente em mudanças de rota do TanStack Router.

### 2. Adicionar `dns-prefetch` para o domínio do GA
Adicionar `{ rel: "dns-prefetch", href: "https://www.googletagmanager.com" }` nos `links` do root — pequena melhoria de performance.

## Detalhes técnicos
- **ID público:** `G-R7WVSM499B` é Measurement ID público (igual ao do site antigo). Pode ficar hardcoded, sem secret nem env var.
- **SSR-safe:** o snippet vai como tag `<script>` no `<head>`, renderizada pelo `HeadContent` do TanStack Start.
- **Nada quebra:** zero mudança em componentes, rotas, SEO ou skill.

## Arquivo afetado
- `src/routes/__root.tsx` (apenas o objeto retornado por `head()`)

## Fora de escopo
- Eventos customizados (whatsapp_click, form_submit) — fica para um próximo passo se quiser.
- GTM — pode ser adicionado depois junto ou no lugar do gtag direto.
- Consent mode (LGPD/cookies) — não há banner de cookies hoje; podemos adicionar separadamente.

## Como validar depois
1. Abrir o site publicado.
2. No GA4 → Relatórios → **Tempo real**: confirmar 1 usuário ativo.
3. Opcional: extensão **Tag Assistant** mostra o disparo do `G-R7WVSM499B`.
