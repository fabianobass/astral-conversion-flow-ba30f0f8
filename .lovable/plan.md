## Objetivo
Adicionar um carrossel de fotos reais dos trabalhos da Astral Gás na home (abaixo das marcas) e em todas as páginas de serviço, para gerar prova social e reduzir objeção de segurança no tráfego do Google Ads.

## Componente novo: `src/components/sections/RealWorkGallery.tsx`
Carrossel responsivo com Embla (já instalado em `src/components/ui/carousel.tsx`):
- **Auto-play suave** a cada 4s usando `embla-carousel-autoplay`, pausa no hover/touch.
- Setas de navegação (estilo gold/navy alinhado ao site) e dots indicadores embaixo.
- Cards com cantos arredondados, sombra elegante, e overlay gradiente na parte inferior com a **legenda** (bairro + equipamento).
- Mobile: 1 foto por slide. Tablet: 2. Desktop: 3.
- Cada foto com:
  - `loading="lazy"` e `decoding="async"` para performance.
  - `alt` descritivo e SEO-otimizado (ex: "Instalação de aquecedor Rinnai 20L em Curitiba — Água Verde").
- Header da seção: eyebrow "Trabalhos Reais", título "Instalações feitas pela equipe Astral Gás" e subtítulo curto reforçando segurança/localidade.
- Aceita props:
  - `title`, `eyebrow`, `subtitle` (para variar o texto por página)
  - `photos: { src; alt; caption; neighborhood }[]`

## Onde será inserido
1. `src/routes/index.tsx` — logo após `<TrustBar />`.
2. `src/routes/servicos.aquecedor-a-gas.tsx` — após `<TrustBar />`.
3. `src/routes/servicos.manutencao.tsx` — após o `<ServiceHero />` (página não tem TrustBar).
4. `src/routes/servicos.pressurizador.tsx` — abaixo do hero/conteúdo principal.
5. `src/routes/servicos.bomba-de-calor.tsx` — abaixo do hero/conteúdo principal.

Cada página recebe um conjunto de fotos relevante (instalação para venda, conserto para manutenção, etc.).

## Fotos
Você vai enviar as fotos no chat. Para a implementação:
- Salvo em `src/assets/trabalhos/` com nomes SEO (ex: `instalacao-rinnai-agua-verde.jpg`, `manutencao-bosch-batel.jpg`).
- Importadas como ES modules para o Vite otimizar/comprimir automaticamente.
- Cada foto vem acompanhada da legenda no formato: **"[Tipo de serviço] [marca/modelo] — [bairro]"**.

Enquanto as fotos não chegam, uso 6 placeholders neutros (do `src/assets` existente, ex: `hero-banho.jpg`, `hero-manutencao.jpg`) para você ver o layout funcionando, e troco assim que enviar.

## Dependência nova
- `embla-carousel-autoplay` (peso ~2KB) — necessário para o auto-play suave com pausa no hover.

## SEO / Performance
- Alt-text único por foto, com palavra-chave + bairro de Curitiba.
- Lazy loading nativo nas imagens fora da primeira tela.
- Vite já comprime imagens importadas; recomendo enviar as fotos em até 1600px de largura para manter o site leve no 4G.

## Resultado
Um carrossel elegante, com prova social real, posicionado nos pontos de maior conversão do funil — alinhado à estratégia de Google Ads que você descreveu.