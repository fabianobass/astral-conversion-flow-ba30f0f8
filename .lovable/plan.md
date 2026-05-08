## Objetivo

Alinhar o H1 da home (e meta tags relacionadas) com a palavra-chave da campanha Google Ads para subir o Índice de Qualidade — relevância 100% entre Palavra-chave > Anúncio > Landing Page.

## Mudanças

### 1. `src/components/sections/Hero.tsx` — trocar o H1
De:
> Aquecedor a Gás em Curitiba com instalação no mesmo dia

Para:
> **Venda e Instalação de Aquecedores a Gás em Curitiba**

Mantendo o destaque visual em gradiente dourado na expressão "Aquecedores a Gás em Curitiba" (parte que casa com a palavra-chave) para preservar a hierarquia visual atual.

Subtítulo (`<p>`) ajustado para reforçar termos secundários sem repetir o H1:
> Instalação no mesmo dia, técnicos certificados e garantia de fábrica. Rinnai, Komeco, Bosch e Lorenzetti.

### 2. `src/routes/index.tsx` — alinhar `<title>` e meta description
- `title`: "Venda e Instalação de Aquecedores a Gás em Curitiba | Astral Gás"
- `description`: já está boa, leve refinamento para começar com "Venda e instalação de aquecedores a gás em Curitiba…" (espelha o H1 e o anúncio).
- `og:title` / `og:description`: mesmo alinhamento.

### Não tocar
- Demais H2/H3, FAQ e estrutura — só o H1 e meta da home precisam refletir a palavra-chave principal da campanha.
- Páginas de serviço (`/servicos/*`) já têm H1 próprios bem alinhados a cada palavra-chave secundária.

## Resultado esperado

Quando o robô do Google Ads rastrear a landing page da campanha, vai encontrar exatamente o termo "Venda e Instalação de Aquecedores a Gás em Curitiba" no H1 e no `<title>`, aumentando o Quality Score e reduzindo o CPC.
