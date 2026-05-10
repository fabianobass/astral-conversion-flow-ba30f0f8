# Skill: `aquecedor-gas-site`

Pacote reutilizável em `knowledge://skill/aquecedor-gas-site/` que permite gerar um novo site de aquecedor a gás em qualquer projeto Lovable novo, mantendo a arquitetura técnica deste site (TanStack Start + Cloud + StyleSwitcher) e permitindo customizar marca, cidade, cores, fontes e fotos.

## Como você usará depois

Em um projeto Lovable novo, você vai colar:

> "Use a skill `aquecedor-gas-site` com este config:
> marca = Gás Pampa, cidade = Porto Alegre, telefone = 51 99999-0000,
> paleta = `forest-copper`, fontes = `fraunces`, marcas atendidas = Rinnai, Bosch."

A skill instrui o agente a ler `SKILL.md`, copiar templates de rota, aplicar o tema e gerar fotos novas via prompts pré-escritos.

---

## Estrutura da skill

```text
knowledge://skill/aquecedor-gas-site/
├── SKILL.md                      # Instruções mestras para o agente
├── config.example.json           # Template de configuração da marca
├── prompts/
│   ├── master-prompt.md          # Prompt completo (cópia-e-cola standalone)
│   ├── photo-prompts.md          # Prompts de IA para fotos do nicho
│   └── copy-blocks.md            # Headlines, FAQ, depoimentos editáveis
├── templates/
│   ├── routes/                   # __root, index, servicos.*, sitemap
│   ├── components/sections/      # Hero, WhyUs, Services, Process, FAQ…
│   ├── lib/                      # contact.ts, seo.ts, themes.ts, fonts.ts
│   └── styles.css                # Tokens base oklch
├── themes/
│   ├── astral-original.json
│   ├── royal-gold.json
│   ├── obsidian.json
│   ├── forest-copper.json
│   └── bordeaux-cream.json
└── fonts/
    └── combos.json               # 5 combos Google Fonts (display + sans)
```

## Conteúdo de cada peça

**SKILL.md** — fluxo em 6 passos que o agente segue:
1. Ler `config.json` do usuário (marca, cidade, telefone, WhatsApp, CNPJ, paleta, combo de fonte, marcas atendidas, serviços ativos).
2. Ativar Lovable Cloud se for usar formulário de contato persistente.
3. Copiar `templates/` para `src/` substituindo placeholders `[BRAND]`, `[CITY]`, `[PHONE_E164]`, `[WA_MSG]`, `[BRANDS]`.
4. Aplicar paleta escolhida em `src/styles.css` e combo de fonte em `src/lib/fonts.ts` como default.
5. Gerar fotos via `imagegen--generate_image` usando os prompts de `prompts/photo-prompts.md` (hero, galeria de obras, técnicos em ação) — ou pular se o usuário forneceu próprias.
6. Validar: `node scripts/check-deploy.mjs` opcional, build limpo, Lighthouse ≥ 90.

**config.example.json** — campos parametrizáveis:
```json
{
  "brand": { "name": "Astral Gás", "tagline": "...", "logoText": "AG" },
  "location": { "city": "São Paulo", "state": "SP", "neighborhoods": ["..."] },
  "contact": { "phoneE164": "+5511...", "whatsappMsg": "Olá...", "email": "..." },
  "theme": "astral-original",
  "fonts": "astral",
  "brandsServiced": ["Rinnai", "Bosch", "Komeco"],
  "services": ["aquecedor-a-gas", "bomba-de-calor", "manutencao", "pressurizador"],
  "seo": { "siteUrl": "https://...", "ogImage": "..." }
}
```

**prompts/master-prompt.md** — versão "tudo em um" pra quando você não quiser usar a skill: prompt grande com blocos `[CONFIG]`, `[ARQUITETURA]`, `[TEMA]`, `[COPY]`, `[FOTOS]`, `[SEO]`, `[CHECKLIST]`. Útil como fallback.

**prompts/photo-prompts.md** — prompts prontos para `imagegen`:
- Hero: técnico uniformizado instalando aquecedor moderno em parede de alvenaria, luz natural, cinematográfico
- Galeria: 6 prompts (instalação aparente, central de gás, manutenção, pressurizador, bomba de calor, equipe)
- Specs: 1920×1080 hero, 1200×900 galeria, .jpg, sem texto na imagem

**prompts/copy-blocks.md** — todo o texto do site em PT-BR com placeholders, dividido por seção (Hero, TrustBar, WhyUs, Services, Process, Testimonials, FAQ com 8 perguntas do nicho, CTA).

**templates/** — cópia fiel dos arquivos atuais deste projeto (este site é a referência), com strings literais substituídas por placeholders.

**themes/** — as 5 paletas oklch já definidas em `src/lib/themes.ts`, exportadas como JSON individual para o agente aplicar uma como default em `:root` de `src/styles.css`.

**fonts/combos.json** — os 5 combos atuais (Mulish, Fraunces+DM Sans, Playfair+Inter, Cormorant+Manrope, Sora+Jakarta) com `<link>` do Google Fonts pronto.

## Detalhes técnicos

- **Stack alvo**: TanStack Start v1 + Vite 7 + Tailwind v4 + framer-motion + shadcn/ui (mesmo deste projeto).
- **Rotas geradas**: `/`, `/servicos/aquecedor-a-gas`, `/servicos/bomba-de-calor`, `/servicos/manutencao`, `/servicos/pressurizador`, `/sitemap.xml` — cada uma com `head()` próprio (title, description, og:title, og:description) e JSON-LD `LocalBusiness` no root usando dados do `config.json`.
- **StyleSwitcher**: incluído com guard `import.meta.env.DEV` (só aparece no editor).
- **WhatsApp**: float button + CTAs usando `waLink()` parametrizado pelo telefone do config.
- **SEO**: sitemap dinâmico, robots.txt, JSON-LD, canonical, alt text em todas imagens, viewport responsivo.
- **Performance**: lazy loading em fotos abaixo do fold, fontes via `<link rel="preconnect">` Google Fonts, dns-prefetch para wa.me.

## Entregáveis ao final

1. Skill completa criada em `knowledge://skill/aquecedor-gas-site/` no projeto atual.
2. `prompts/master-prompt.md` também copiado para `/mnt/documents/master-prompt-aquecedor.md` para você baixar e guardar.
3. Mensagem de uso explicando os dois modos (skill vs prompt standalone).

## Trade-offs

- **Manutenção**: se você melhorar este site no futuro, precisa re-sincronizar os `templates/` da skill manualmente.
- **Tamanho**: ~25 arquivos na skill. Mais pesada que um prompt único, mas muito mais consistente entre projetos.
- **Reuso**: você poderá gerar um site novo em ~3 minutos só editando o `config.json`.
