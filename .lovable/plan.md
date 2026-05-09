## Objetivo

Garantir que cada página comece (H1 visível e `<title>` SEO) com a palavra-chave exata definida pelo cliente, otimizando para campanhas de Google Ads.

## Mapeamento de palavras-chave

| Página | Rota | Palavra-chave inicial |
|---|---|---|
| Home | `/` | **Aquecedor a gás em Curitiba** |
| Aquecedor | `/servicos/aquecedor-a-gas` | **Comprar aquecedor a gás** |
| Manutenção | `/servicos/manutencao` | **Manutenção de aquecedor a gás** |
| Pressurizador | `/servicos/pressurizador` | **Pressurizador de água** |
| Bomba de calor | `/servicos/bomba-de-calor` | **Bomba de calor para piscina** |

## Mudanças por página

Para cada rota vou ajustar **dois pontos**:

1. **`<title>` SEO** (em `head()` via `buildRouteMeta`) — começar com a keyword exata, seguida de complemento curto + marca.
2. **H1 visível** no Hero/ServiceHero — reescrever para começar com a keyword exata, mantendo subtítulo persuasivo.

### Home (`src/routes/index.tsx` + `src/components/sections/Hero.tsx`)
- Title: `Aquecedor a gás em Curitiba | Instalação no mesmo dia — Astral Gás`
- H1: `Aquecedor a gás em Curitiba com instalação no mesmo dia`

### Aquecedor (`src/routes/servicos.aquecedor-a-gas.tsx`)
- Title: `Comprar aquecedor a gás em Curitiba — Rinnai, Bosch, Komeco | Astral`
- H1 (eyebrow + title): eyebrow "Aquecedor a Gás" / title `Comprar aquecedor a gás com instalação no mesmo dia`
- Description ajustada para reforçar "comprar".

### Manutenção (`src/routes/servicos.manutencao.tsx`)
- Title: `Manutenção de aquecedor a gás em Curitiba — Atendimento hoje | Astral`
- H1: `Manutenção de aquecedor a gás com atendimento ainda hoje`

### Pressurizador (`src/routes/servicos.pressurizador.tsx`)
- Title: `Pressurizador de água em Curitiba — Instalação e venda | Astral Gás`
- H1: `Pressurizador de água para pressão constante em casa`
- Ajusto também o `head()` SEO da rota.

### Bomba de calor (`src/routes/servicos.bomba-de-calor.tsx`)
- Title: `Bomba de calor para piscina em Curitiba — Full Inverter | Astral Gás`
- H1: `Bomba de calor para piscina com tecnologia Full Inverter`

## Detalhes técnicos

- Apenas alteração de strings em `head()` e em props `title`/`eyebrow` passadas para `Hero` e `ServiceHero`.
- Mantenho descrições, schema JSON-LD, canonical e og:image já implementados.
- Nenhuma mudança de layout, lógica ou assets.
- Verificação visual após edição: confirmar que H1 nos heros começa com a keyword e que `<title>` aparece corretamente nas abas (preview).
