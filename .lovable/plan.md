## Objetivo

Adicionar a galeria `RealWorkGallery` (carrossel com setas e paginação) na rota `/servicos/bomba-de-calor` usando as 5 fotos enviadas, replicando o padrão visual já presente em Aquecedor a Gás e Pressurizador.

## Etapas

### 1. Copiar e otimizar as imagens

Copiar de `user-uploads://` para `src/assets/bomba-de-calor/instalacoes/` e converter para WebP (qualidade 82) via ImageMagick — fotos de WhatsApp viram ~80–150 KB cada.

Arquivos finais:
- `bomba-druck-inverter-curitiba.webp`
- `bomba-druck-dri-jardim.webp`
- `bomba-druck-dri35-laje.webp`
- `bomba-druck-dri45-area-externa.webp`
- `bomba-druck-dri45-casa-maquinas.webp`

### 2. Popular `heatPumpPhotos`

Em `src/lib/work-photos.ts`, importar as 5 imagens novas e preencher o array `heatPumpPhotos` (que hoje está vazio) com `src`, `alt`, `caption` e `neighborhood`.

`alt` segue o padrão: "Instalação de bomba de calor … em Curitiba, feita pela Astral Gás" (com a especificidade da foto).
`neighborhood`: "Curitiba e região" como genérico, já que não temos os bairros confirmados — fácil de trocar depois.

### 3. Inserir o carrossel na página

Em `src/routes/servicos.bomba-de-calor.tsx`:
- Importar `RealWorkGallery` e `heatPumpPhotos`.
- Adicionar `<RealWorkGallery photos={heatPumpPhotos} title="Bombas de calor instaladas pela Astral Gás" subtitle="Fotos reais de instalações Full Inverter em piscinas de Curitiba e região metropolitana." />` logo após a seção "Engenharia / features" e antes do `<ServiceContent>`.

O componente `RealWorkGallery` já tem setas (← →), paginação por bullets e autoplay com `embla-carousel-autoplay` — não precisa alterar nada nele.

## Fora de escopo

- Não altero hero, FAQ, CtaForm nem JSON-LD da página.
- Não mexo em outras rotas nem no componente do carrossel.

## Arquivos editados

1. `src/assets/bomba-de-calor/instalacoes/*.webp` — 5 imagens novas otimizadas.
2. `src/lib/work-photos.ts` — popular `heatPumpPhotos`.
3. `src/routes/servicos.bomba-de-calor.tsx` — adicionar a seção do carrossel.