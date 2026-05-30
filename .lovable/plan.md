## Objetivo
Melhorar a nota do PageSpeed Insights (mobile), reduzir LCP e Total Blocking Time, para baixar CPC do Google Ads.

## Auditoria rápida — principais gargalos encontrados

1. **Imagens hero gigantes em PNG** nas páginas de serviço:
   - `hero-aquecedor-v5.png` → 364 KB
   - `hero-manutencao-v3.png` → 621 KB
   - `hero-pressurizador.png` → 1.35 MB
   - `hero-manutencao-v4.png` / `v2.png` → 1.38 MB cada
   Todas servidas em PNG, no hero (LCP). A home já usa WebP 22KB (bom).

2. **Scripts de tracking carregando síncronos no `<head>`**: GTM + GA + Google Ads inicializam antes do paint, bloqueando o LCP no mobile.

3. **Embla Carousel + Autoplay rodando acima da dobra** (galeria na home) — JS executando imediatamente em mobile.

4. **Logos de marcas** no hero usam `loading="lazy"` mas estão visíveis acima da dobra em mobile → atrasa pintura.

## Plano de execução

### 1. Otimizar imagens hero das páginas de serviço
- Converter os 3 hero PNG (aquecedor v5, manutenção v3, pressurizador) para WebP comprimido (~1200px largura, qualidade 78).
- Meta: cada hero abaixo de 80 KB.
- Atualizar imports em `src/routes/servicos.aquecedor-a-gas.tsx`, `servicos.manutencao.tsx`, `servicos.pressurizador.tsx`.
- Apagar PNGs antigos não utilizados (`hero-aquecedor-v4.png`, `hero-manutencao-v2.png/v4.png`, `hero-pressurizador-v2.png`) para reduzir bundle de assets.

### 2. Deferir scripts de tracking
- Em `src/routes/__root.tsx`, mudar GTM e gtag para carregar após `load` (manter via `requestIdleCallback` ou listener `load`), preservando todas as conversões.
- Adicionar `defer` no script do gtag.

### 3. Lazy-load da galeria (Embla)
- Tornar `RealWorkGallery` da home um componente dinâmico (`React.lazy` + `Suspense`), carregado só quando entrar no viewport (IntersectionObserver) — corta `embla-carousel-react` + `embla-carousel-autoplay` do bundle inicial.

### 4. Ajustes finos no hero
- Trocar `loading="lazy"` para `eager` nos 4 logos de marca do Hero (acima da dobra em mobile).
- Manter `fetchPriority="high"` no hero image (já está).

### 5. Validação
- Rodar a build, abrir o preview no browser tool em viewport 390×844 (mobile), verificar:
  - tamanho total transferido na primeira tela;
  - que GA/GTM ainda disparam após o load;
  - galeria continua aparecendo e auto-rotacionando.

## Arquivos a editar
- `src/routes/__root.tsx` (scripts diferidos)
- `src/routes/index.tsx` (lazy gallery)
- `src/routes/servicos.aquecedor-a-gas.tsx`
- `src/routes/servicos.manutencao.tsx`
- `src/routes/servicos.pressurizador.tsx`
- `src/components/sections/Hero.tsx` (logos eager)
- `src/assets/` — novos `.webp` otimizados, remoção de PNG não usados

## Fora de escopo
- Mudar visual/copy do site.
- Tocar em backend / Cloud / formulários.
- Servir imagens dinâmicas via CDN externo.
