# Master Prompt — Site de Aquecedor a Gás (cópia-e-cola)

Use este prompt em um projeto Lovable novo se você não quiser usar a skill estruturada. Edite só o bloco `[CONFIG]` no topo.

---

```
Crie um site institucional/conversão completo para empresa de aquecedor a gás
seguindo TODAS as instruções abaixo. Não pule nenhuma seção.

[CONFIG]
- Marca: Astral Gás
- Logo (2-3 letras): AG
- Tagline: Aquecimento a gás com instalação certificada
- Cidade: São Paulo / SP
- Bairros principais: Pinheiros, Vila Madalena, Moema, Itaim Bibi, Jardins
- Telefone E.164: 5511999990000
- Telefone display: (11) 99999-0000
- WhatsApp msg padrão: "Olá! Vim pelo site e gostaria de um orçamento."
- E-mail: contato@exemplo.com.br
- Marcas atendidas: Rinnai, Bosch, Komeco
- Paleta: astral-original | royal-gold | obsidian | forest-copper | bordeaux-cream
- Combo de fontes: astral | fraunces | playfair | cormorant | sora
- Site URL: https://exemplo.com.br

[STACK]
TanStack Start v1, Vite 7, Tailwind v4, framer-motion, lucide-react,
shadcn/ui, Lovable Cloud (apenas se for usar formulário persistente).
File-based routing em src/routes/. Tokens semânticos em oklch via src/styles.css.

[ARQUITETURA — rotas separadas, NÃO single-page com âncoras]
- src/routes/__root.tsx — html shell, Header, Footer, WhatsAppFloat, JSON-LD
  LocalBusiness, AnimatePresence entre rotas, StyleSwitcher (com guard
  `if (!import.meta.env.DEV) return null;`)
- src/routes/index.tsx — Hero + TrustBar + Services + WhyUs + Process +
  RealWorkGallery + Testimonials + FAQ + CtaForm
- src/routes/servicos.aquecedor-a-gas.tsx
- src/routes/servicos.bomba-de-calor.tsx
- src/routes/servicos.manutencao.tsx
- src/routes/servicos.pressurizador.tsx
- src/routes/sitemap[.]xml.tsx
Cada rota com head() único (title <60ch, description <160ch, og:title,
og:description). Nunca duplicar metadata da home.

[COMPONENTES]
src/components/layout/{Header,Footer}.tsx
src/components/{WhatsAppFloat,StyleSwitcher,SpecialistDropdown}.tsx
src/components/icons/WhatsAppIcon.tsx
src/components/sections/{Hero,TrustBar,Services,WhyUs,Process,
  RealWorkGallery,Testimonials,FAQ,CtaForm,ServiceHero,ServiceContent}.tsx
src/lib/{contact,seo,themes,fonts,motion-presets,work-photos}.ts

[TEMA]
Em src/styles.css definir :root com tokens oklch da paleta escolhida:
--background --foreground --navy-deep --navy --gold --gold-foreground
--primary --primary-foreground --secondary --muted --muted-foreground
--accent --accent-foreground --border --input --ring --whatsapp
StyleSwitcher permite trocar entre 5 paletas e 5 combos de fontes em runtime
(localStorage). Carregar Google Fonts via <link> no head do __root.tsx.

[COPY — em PT-BR]
Hero: headline "Água quente sem dor de cabeça em toda a sua casa", sub
mencionando [CITY] e [BRANDS], CTA primário "Falar agora no WhatsApp", trust
line "⭐ 4,9 no Google • +2.000 atendimentos • Garantia total".
4 serviços: Aquecedor a gás, Bomba de calor, Manutenção, Pressurizador.
4 pilares WhyUs: Garantia total, Técnicos certificados, Peças originais,
Pagamento facilitado.
5 passos do processo (WhatsApp → orçamento 1h → agenda → execução → garantia).
8 perguntas FAQ obrigatórias: custo de instalação, passagem vs acumulação,
dimensionamento L/min, bomba de calor compensa, intervalo de manutenção,
apartamento, marcas, emergência. Resposta detalhada em cada uma usando [CITY],
[NEIGHBORHOODS], [BRANDS], [PHONE_DISPLAY].

[FOTOS]
Gerar com imagegen--generate_image:
- Hero 1920×1080 standard: técnico uniformado instalando aquecedor moderno em
  parede branca, luz natural, cinematográfico
- 6 fotos de galeria 1200×900 fast: instalação aparente, central de gás,
  manutenção interna, pressurizador, bomba de calor outdoor, equipe na van
- Sem texto nas imagens. Alt text descritivo em PT-BR mencionando marca/cidade.

[SEO obrigatório]
- head() único por rota
- JSON-LD LocalBusiness no __root.tsx (nome, telefone, endereço, areaServed,
  openingHours, sameAs)
- public/robots.txt + src/routes/sitemap[.]xml.tsx dinâmico
- H1 único por página, alt em todas imagens, lazy loading abaixo do fold
- <link rel="dns-prefetch" href="https://wa.me">
- meta theme-color, viewport com viewport-fit=cover

[DESIGN — não negociar]
- SEMPRE tokens semânticos (bg-background, text-foreground, text-gold).
  NUNCA cores literais (text-white, bg-blue-500).
- Tipografia: display + sans pareados, italic em palavras-chave.
- Espaço generoso: py-20/py-24, max-w-7xl, gap-8.
- WhatsApp como CTA primário (bg-whatsapp #22c55e), navy-deep para autoridade,
  gold como accent.
- framer-motion `whileInView` once em cards e sections.
- Mobile first: testar 375 / 768 / 1280.

[VALIDAÇÃO]
Build limpo, Lighthouse mobile ≥ 85 perf / ≥ 95 SEO/A11y, WhatsApp float
funciona em 375px, trocar paleta no StyleSwitcher reaplica sem recarregar.
```

---

**Dica:** depois de rodar uma vez, você pode pedir refinamentos: "trocar paleta para forest-copper", "regenerar foto do hero mais minimalista", "adicionar serviço de gás encanado".
