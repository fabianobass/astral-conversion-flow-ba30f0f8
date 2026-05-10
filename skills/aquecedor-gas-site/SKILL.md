# Skill: Site de Aquecedor a Gás

Gera um site institucional/conversão para empresa de aquecedor a gás, manutenção, bomba de calor e pressurizador. Stack: TanStack Start v1 + Vite 7 + Tailwind v4 + framer-motion + shadcn/ui + Lovable Cloud (opcional).

## Como o usuário invoca

> "Use a skill `aquecedor-gas-site` com este config: marca=X, cidade=Y, tel=Z, paleta=forest-copper, fontes=fraunces."

## Fluxo de execução (siga em ordem)

### 1. Coletar/confirmar config
Leia `config.example.json` desta skill. Se o usuário não passou todos os campos obrigatórios (`brand.name`, `location.city`, `contact.phoneE164`), pergunte com `questions--ask_questions`. Campos opcionais têm defaults sensatos.

### 2. Stack e dependências
Confirme TanStack Start (template padrão Lovable). Adicione se faltar:
```
bun add framer-motion lucide-react
```
shadcn/ui já vem no template padrão. Se o usuário quer formulário de contato persistente, ative Lovable Cloud.

### 3. Gerar arquivos do site

Crie estes arquivos seguindo a referência de estrutura abaixo. **Use o conteúdo dos arquivos `copy-blocks.md`, `themes.json`, `fonts.json` e `photo-prompts.md` desta skill como fonte de verdade.**

**Rotas (`src/routes/`):**
- `__root.tsx` — shell html/body, Header, Footer, WhatsAppFloat, JSON-LD LocalBusiness, AnimatePresence entre rotas, StyleSwitcher com guard `if (!import.meta.env.DEV) return null;`
- `index.tsx` — Hero + TrustBar + Services + WhyUs + Process + RealWorkGallery + Testimonials + FAQ + CtaForm
- `servicos.aquecedor-a-gas.tsx`, `servicos.bomba-de-calor.tsx`, `servicos.manutencao.tsx`, `servicos.pressurizador.tsx` — cada uma com ServiceHero + ServiceContent + FAQ + CtaForm e `head()` próprio (title, description, og:title, og:description únicos)
- `sitemap[.]xml.tsx` — sitemap dinâmico

**Componentes (`src/components/`):**
- `layout/Header.tsx`, `layout/Footer.tsx`
- `WhatsAppFloat.tsx`, `StyleSwitcher.tsx`, `SpecialistDropdown.tsx`
- `icons/WhatsAppIcon.tsx`
- `sections/Hero.tsx`, `TrustBar.tsx`, `Services.tsx`, `WhyUs.tsx`, `Process.tsx`, `RealWorkGallery.tsx`, `Testimonials.tsx`, `FAQ.tsx`, `CtaForm.tsx`, `ServiceHero.tsx`, `ServiceContent.tsx`

**Lib (`src/lib/`):**
- `contact.ts` — `waLink(phone?, msg?)` que monta `https://wa.me/{phoneE164}?text=...` usando config.contact.phoneE164 como default
- `seo.ts` — `localBusinessJsonLd` (LocalBusiness com nome, telefone, endereço, areaServed, sameAs) + `jsonLdScript()` helper
- `themes.ts` — exporta as 5 paletas de `themes.json` com tipo `Theme[]`
- `fonts.ts` — exporta os 5 combos de `fonts.json` com tipo `FontCombo[]`
- `motion-presets.ts`, `work-photos.ts`

**Estilos (`src/styles.css`):**
- `@import "tailwindcss"` + `@theme inline` mapeando tokens
- `:root { ... }` com a paleta default escolhida (`config.theme`) — copie do `themes.json[<id>].vars`
- Variáveis: `--background --foreground --navy-deep --navy --gold --gold-foreground --primary --secondary --muted --accent --border --input --ring --whatsapp` (oklch)
- Carregar Google Fonts do combo escolhido via `<link>` em `index.html` ou `@import` no css

### 4. Aplicar tema e fontes do config
- Em `:root`, cole as `vars` da paleta `config.theme` de `themes.json`.
- Em `src/lib/fonts.ts`, deixe `DEFAULT_FONT_ID = config.fonts`.
- Adicione o `<link>` do Google Fonts do combo escolhido no `__root.tsx` head().
- StyleSwitcher inclui as 5 paletas + 5 combos para o usuário trocar no editor.

### 5. Substituir placeholders
Em todos os arquivos, troque:
- `[BRAND]` → `config.brand.name`
- `[BRAND_LOGO]` → `config.brand.logoText` (2-3 letras)
- `[TAGLINE]` → `config.brand.tagline`
- `[CITY]`, `[STATE]` → `config.location.*`
- `[PHONE_E164]` → `config.contact.phoneE164` (formato `5511999990000`)
- `[PHONE_DISPLAY]` → `(11) 99999-0000`
- `[WA_MSG]` → `config.contact.whatsappMsg`
- `[EMAIL]` → `config.contact.email`
- `[BRANDS]` → join de `config.brandsServiced` (ex: "Rinnai, Bosch, Komeco")
- `[NEIGHBORHOODS]` → join de `config.location.neighborhoods`
- `[SITE_URL]` → `config.seo.siteUrl`

### 6. Fotos
- Se o usuário enviou fotos próprias: usar.
- Senão: gerar com `imagegen--generate_image` usando os prompts de `photo-prompts.md`. Salvar em `src/assets/`.
- Hero: 1920×1080 jpg. Galeria: 1200×900 jpg. Logo opcional: png transparente 512×512.
- Sempre alt text descritivo em PT-BR.

### 7. SEO obrigatório
- `head()` único por rota (title <60ch, desc <160ch, og:title, og:description, og:image quando houver hero)
- `localBusinessJsonLd` no `__root.tsx` scripts
- `sitemap.xml`, `robots.txt` em `public/`
- H1 único por página, alt em todas imagens, lazy loading abaixo do fold
- `<link rel="dns-prefetch" href="https://wa.me">`

### 8. Validação final
- Build limpo (sem erros TS).
- Lighthouse mobile ≥ 85 performance, ≥ 95 SEO/A11y.
- WhatsApp float funciona em mobile (testar viewport 375px).
- Trocar paleta no StyleSwitcher reaplica em runtime sem recarregar.

## Arquivos desta skill

| Arquivo | Conteúdo |
|---|---|
| `config.example.json` | Schema de configuração da marca |
| `copy-blocks.md` | Todo o texto PT-BR (Hero, FAQ, depoimentos, etc.) |
| `themes.json` | 5 paletas oklch prontas |
| `fonts.json` | 5 combos Google Fonts |
| `photo-prompts.md` | Prompts de IA para fotos do nicho |
| `master-prompt.md` | Versão "tudo em um" pra colar sem usar a skill |

## Princípios de design (não negociar)

- Tokens semânticos sempre (`bg-background`, `text-foreground`, `text-gold`) — nunca cores literais (`text-white`, `bg-blue-500`).
- Tipografia: display + sans pareados, hierarquia clara, italic em palavras-chave.
- Espaço generoso, seções com `py-20` ou `py-24`, max-w-7xl.
- WhatsApp como CTA primário (verde `#22c55e` / `bg-whatsapp`), navy-deep para autoridade, gold como accent.
- Animações sutis com framer-motion `whileInView` once.
- Mobile first, testar 375/768/1280.
