
# Otimizar /servicos/aquecedor-a-gas para Quality Score 10/10

O Google Ads avalia 3 componentes do Index de Qualidade: **Experiência da página de destino**, **Relevância do anúncio** e **CTR esperado**. A landing já está boa (FAQ, JSON-LD, hero, formulário, marcas). Faltam ajustes específicos para aumentar relevância palavra-chave ⇄ página, velocidade e sinais de confiança que o Google reconhece.

## 1. Relevância de palavra-chave (impacto alto)

O algoritmo procura o termo exato da palavra-chave no H1, primeiro parágrafo, título do navegador e meta description.

- **H1 atual**: "Comprar aquecedor a gás com instalação no mesmo dia" → adicionar a cidade: "Comprar aquecedor a gás **em Curitiba** com instalação no mesmo dia". Cidade no H1 é o sinal #1 de relevância local.
- **Adicionar variações de match**: criar um pequeno bloco logo após o hero com headings H2/H3 cobrindo: "Aquecedor a gás de passagem", "Aquecedor a gás Rinnai", "Aquecedor a gás Bosch", "Instalação de aquecedor a gás Curitiba", "Preço de aquecedor a gás". Isso amplia a cobertura semântica sem keyword stuffing.
- **Title** já está bom (58 chars). Manter.
- **URL final do anúncio**: garantir que está usando `/servicos/aquecedor-a-gas` (não `/`) — confirmar com você.

## 2. Sinais de confiança que o Google reconhece (impacto alto)

A página tem 4 link de confiança ausentes que afetam Landing Page Experience:

- **Link visível para Política de Privacidade** no footer (Google penaliza páginas com formulário que coletam telefone sem política).
- **Endereço físico + CNPJ visível** no footer (já tem cidade, falta endereço completo e CNPJ — sinal forte de NAP local).
- **Avaliações reais com schema Review** (não só `aggregateRating` no LocalBusiness). Adicionar 3–6 depoimentos com nome, data e estrela na própria página.
- **Selo SSL/segurança** explícito ao lado do formulário ("🔒 Seus dados estão seguros — usados apenas para o orçamento").

## 3. Velocidade da página (Core Web Vitals — impacto médio-alto)

LCP é o que mais conta. A página carrega `hero-aquecedor-v5.png` (PNG, não WebP/AVIF).

- Converter o hero para **AVIF + WebP + fallback JPG** usando `<picture>` (a skill `aquecedor-gas-landing` tem o pipeline). Ganho típico de 60–80% no peso da LCP.
- Adicionar `<link rel="preload" as="image">` para o hero no `head()` da rota (não no `__root.tsx`) com `imagesrcset` correto.
- Verificar se os 6 logos de marcas (TrustBar) estão em WebP otimizado — já estão `.webp`, ok.

## 4. CTR esperado (impacto médio)

O Google mede o CTR contra a média do leilão. Boas práticas que ajudam o CTR a se manter alto reduzem chance de queda no IQ:

- Adicionar um **bloco de preço aproximado** ("A partir de R$ X instalado" ou "Aquecedores 15 L/min a partir de R$ Y") — combina com extensões de preço do anúncio e aumenta CTR pós-clique.
- Garantir que o **CTA do hero** tem o mesmo texto que o headline do anúncio (ex.: se o anúncio diz "Orçamento grátis em 5 min", o botão também).

## 5. Conteúdo único e profundidade (impacto médio)

Google premia páginas com 800+ palavras de conteúdo único e útil. A página tem ~400 palavras visíveis.

- Expandir o FAQ atual de 6 para 10–12 perguntas com respostas longas (esse FAQ também já alimenta o JSON-LD FAQPage e pode render rich snippets na busca orgânica).
- Adicionar uma seção curta "Como escolher a vazão certa (10, 15, 20, 32 L/min)" — 200 palavras, super específica, casa com intenção de compra.

## 6. Mobile UX (impacto alto — 70%+ tráfego Ads é mobile)

- Verificar contraste do CTA WhatsApp em mobile (verde sobre branco pode falhar AA — usar `bg-whatsapp-aa` conforme regra da skill).
- Adicionar `click-to-call` mais proeminente no header em mobile (botão fixo com ícone de telefone ao lado do botão WhatsApp).

## Arquivos que vão ser tocados

```text
src/routes/servicos.aquecedor-a-gas.tsx   (H1, preload hero, novos blocos)
src/components/sections/FAQ.tsx           (+ 4–6 perguntas)
src/components/sections/ServiceContent.tsx (bloco "como escolher vazão")
src/components/sections/Testimonials.tsx  (incluir na rota com schema Review)
src/components/layout/Footer.tsx          (CNPJ, endereço, link privacidade)
src/routes/politica-privacidade.tsx       (novo — página simples)
src/assets/hero-aquecedor-v5.{avif,webp}  (gerar via pipeline)
src/lib/seo.ts                            (helper para Review JSON-LD)
```

## O que **não** vou mudar

- GTM, gtag, conversões Google Ads (já configurados).
- Estrutura de rotas, design system, tokens de cor.
- Backend / formulário (continua abrindo WhatsApp).

## Perguntas antes de implementar

1. **Tem CNPJ + endereço físico** para colocar no footer? (Se não tiver endereço público, podemos usar só cidade + CNPJ.)
2. **Tem depoimentos reais** (nome + texto) ou gero placeholders genéricos para você substituir?
3. Quer que eu inclua **faixa de preço aproximada** ("a partir de R$ X")? Se sim, qual valor para 15 L/min instalado em Curitiba?
4. A URL final dos seus anúncios já está como `/servicos/aquecedor-a-gas` ou ainda aponta para `/`?

Posso prosseguir com placeholders nos pontos 1–3 se você preferir destravar agora e ajustar os textos depois.
