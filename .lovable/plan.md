## Objetivo

Otimizar a página `/servicos/aquecedor-a-gas` para conversão (clique pago de R$ 30) e SEO/Índice de Qualidade do Google Ads, com foco nas marcas Rinnai e Lorenzetti.

## Mudanças

### 1. Reordenar seções (`src/routes/servicos.aquecedor-a-gas.tsx`)

Hoje a ordem é: Hero → TrustBar → **RealWorkGallery** → ServiceContent (lista de aparelhos/benefícios) → FAQ → CtaForm.

Nova ordem: Hero → TrustBar → **ServiceContent** (lista de aparelhos) → **RealWorkGallery** (logo abaixo, como prova social visual) → FAQ → CtaForm.

Justificativa: o usuário lê primeiro o que está incluído + processo, e logo abaixo vê fotos reais das instalações — sequência clássica de prova social que aumenta conversão antes do FAQ.

### 2. Reforçar menções a Rinnai e Lorenzetti (mesma rota)

Hoje "Rinnai" e "Lorenzetti" aparecem 1× cada (no `description` do Hero e no item de benefícios). Vou levar cada marca a no mínimo 2–3 ocorrências naturais, sem keyword stuffing:

- **Hero `description`**: reescrever para citar "Rinnai e Lorenzetti" explicitamente como linhas principais.
- **`benefits` (lista "O que está incluído")**: separar em dois itens — um destacando "Aquecedores Rinnai (linhas E, REU, Infinity)" e outro "Aquecedores Lorenzetti, Komeco e Bosch", em vez do item genérico atual.
- **Bloco final cinza** (parágrafo SEO no fim da página): reescrever para mencionar "Rinnai" e "Lorenzetti" novamente, junto com "Curitiba" e bairros-chave (Batel, Água Verde, Bigorrilho).
- **`title` do Hero**: manter como está (já tem boa densidade), mas garantir que o `<title>` da aba (`buildRouteMeta`) e a `description` continuem com "Rinnai" — já estão.

Resultado: 3× "Rinnai" e 2–3× "Lorenzetti" no HTML renderizado, distribuídos em hero, conteúdo e rodapé semântico.

### 3. Não mexer

- Estrutura de componentes (`ServiceHero`, `ServiceContent`, `RealWorkGallery`) — só reordenar e ajustar props/strings.
- CTAs, estilos, design system, formulário, FAQ, JSON-LD.
- Outras páginas de serviço.

## Arquivos a editar

1. `src/routes/servicos.aquecedor-a-gas.tsx` — reordenar JSX + reescrever `description` do Hero, `benefits[]` e parágrafo SEO final.

## Fora de escopo

- Alterar `serviceJsonLd` / metadados (já citam Rinnai).
- Reescrever FAQ ou CtaForm.
- Mudar páginas de bomba de calor, manutenção, pressurizador.