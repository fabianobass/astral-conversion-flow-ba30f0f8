Substituir o hero customizado da página `/servicos/pressurizador` para usar o mesmo padrão visual da página de manutenção (fundo + imagem), apenas nessa página.

## O que muda

- **Somente o bloco `<section>` do hero** em `src/routes/servicos.pressurizador.tsx` (linhas 78–134).
- O restante da página (tecnologia, modelos, engenharia, marcas, galeria, CTA final, FAQ, formulário) permanece intacto.

## Como fica o novo hero

Trocar o hero customizado pelo componente `ServiceHero` (variante "card", igual à página de manutenção), passando:

- `eyebrow="Pressurizador de Água"`
- `title` com gradiente dourado em "Pressurizador de água" + "para pressão constante em casa"
- `description` atual (HPI 750 1CV/2CV, banhos potentes, etc.)
- `image={heroManutencao}` — importando `@/assets/hero-manutencao-v2.png` (a mesma foto da página de manutenção)
- `ctaLabel` e `ctaMessage` de pressurizador

## Detalhes técnicos

- Adicionar import: `import { ServiceHero } from "@/components/sections/ServiceHero";`
- Adicionar import: `import heroManutencao from "@/assets/hero-manutencao-v2.png";`
- Remover imports que ficarão sem uso no topo do arquivo: `Link`, `ChevronRight`, `waLink` e `WhatsAppIcon` continuam sendo usados no CTA final, então **permanecem**.
- O import de `inversoraHpi750` permanece (continua sendo usado nas seções "A tecnologia" e nos metadados SEO/JSON-LD).
- Metadados (`buildRouteMeta`, `serviceJsonLd`) continuam usando `inversoraHpi750` como `image` — não alteramos SEO.

## Escopo

Mudança isolada à rota `servicos.pressurizador.tsx`. Nenhum outro arquivo é tocado.