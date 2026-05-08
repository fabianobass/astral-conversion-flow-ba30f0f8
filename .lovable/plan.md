## Redesign Astral Gás — Premium & Conversão

Vou recriar o site com estética **moderna premium** (azul profundo + dourado), arquitetura voltada para Google Ads (CTAs WhatsApp em todo lugar, prova social forte, atrito mínimo) e SEO local Curitiba.

### Identidade visual
- Paleta: azul-noite `#0A1628`, azul royal `#1E3A8A`, dourado `#D4AF37` (acentos), off-white `#FAFAF7`, verde WhatsApp para CTA principal
- Tipografia: **Playfair Display** (títulos, sofisticação) + **Inter** (corpo, legibilidade)
- Tokens definidos em `src/styles.css` (oklch), nada hardcoded
- Micro-animações com framer-motion (fade-up no scroll, hover sutil nos cards)
- Sticky header transparente → sólido no scroll, com telefone + CTA WhatsApp sempre visíveis

### Estrutura de rotas
```
src/routes/
  __root.tsx         → header + footer compartilhados, SEO base
  index.tsx          → Landing principal
  servicos.aquecedor-a-gas.tsx
  servicos.manutencao.tsx
  servicos.pressurizador.tsx
  servicos.bomba-de-calor.tsx
```
Cada rota com `head()` próprio (title/description/og otimizados para Curitiba + termo).

### Landing page (index) — seções

1. **Hero conversão** — headline forte ("Aquecedor a Gás em Curitiba — Instalação no Mesmo Dia"), subhead, 4 bullets de garantia, **dois CTAs** (WhatsApp verde + ligar), selo "Atendimento em até 30 min", imagem do aquecedor com glow dourado
2. **Barra de confiança** — selos: Rinnai, Komeco, Bosch, Lorenzetti (logos placeholder em cinza), "+15 anos no mercado", "+2.000 instalações", "Nota 4.9 Google"
3. **Serviços** — 4 cards premium clicáveis (vão para páginas individuais), ícone dourado, hover lift
4. **Por que Astral** — 4 pilares com ícones (Garantia, Técnicos certificados, Peças originais, Pagamento facilitado)
5. **Como funciona** — 3 passos visuais (WhatsApp → Visita técnica → Instalação)
6. **Depoimentos** — 3 cards com foto, nome, bairro de Curitiba, estrelas (placeholders realistas)
7. **FAQ** — accordion com 6 dúvidas frequentes (preço, prazo, garantia, marcas, região, pagamento)
8. **CTA final** — bloco escuro com dourado, formulário simples (nome, WhatsApp, tipo de serviço) + botão WhatsApp alternativo
9. **Footer** — contatos, horários, áreas atendidas (bairros Curitiba), redes

### Páginas de serviço (template comum)
Hero específico do serviço → benefícios → marcas atendidas → processo → FAQ específica → CTA WhatsApp. Cada uma com SEO próprio ("Manutenção de Aquecedor a Gás em Curitiba", etc).

### Conversão (Google Ads)
- **Botão WhatsApp flutuante** sempre visível (com link pré-preenchido "Vim pelo Google")
- CTA primário verde WhatsApp aparece em **todas as seções** (mín. 6x na landing)
- Telefone clicável (`tel:`) no header
- Above-the-fold limpo: headline + bullets + CTA visíveis sem scroll
- Form curto (3 campos) no final, sem login/cadastro
- Mobile-first: hero, CTAs e WhatsApp otimizados para touch

### Imagens
- Geração de hero (aquecedor moderno em ambiente sofisticado, fundo azul com luz dourada) via imagegen premium
- Ícones com lucide-react (Flame, Wrench, Droplets, Shield, Award, Clock)
- Placeholders de logos de marcas (texto estilizado)

### Arquivos a criar/modificar
- `src/styles.css` — tokens premium (azul/dourado), fontes Google
- `src/routes/__root.tsx` — meta SEO, fontes
- `src/components/layout/Header.tsx`, `Footer.tsx`, `WhatsAppFloat.tsx`
- `src/components/sections/*` — Hero, TrustBar, Services, WhyUs, Process, Testimonials, FAQ, CtaForm
- `src/routes/index.tsx` — landing
- 4 arquivos `src/routes/servicos.*.tsx`
- `src/assets/hero-aquecedor.jpg` (gerado)

### Observação
Depoimentos, estatísticas e fotos serão **placeholders realistas** (substituíveis depois). Telefones e WhatsApp reais do site original (41 99636-6543 / 41 99194-5563) serão mantidos.
