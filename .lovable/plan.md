## Objetivo
Adicionar lista de cidades da Região Metropolitana de Curitiba (RMC) na página `/servicos/aquecedor-a-gas` de forma discreta, reforçando SEO local sem poluir o design.

## Onde
Arquivo único: `src/routes/servicos.aquecedor-a-gas.tsx`, dentro da seção final `bg-secondary` (último bloco antes do fechamento), logo abaixo do parágrafo institucional já existente.

## Como
- Manter o mesmo bloco visual (fundo `bg-secondary`, container centralizado).
- Adicionar uma linha pequena com rótulo "Atendemos também:" seguida da lista de cidades separadas por bullet (`·`), em `text-sm text-foreground/60`.
- Sem cards, sem links, sem ícones — apenas texto corrido discreto.

## Cidades (RMC principais, alinhadas ao `llms.txt`)
São José dos Pinhais · Pinhais · Colombo · Araucária · Campo Largo · Pinhais · Piraquara · Fazenda Rio Grande · Almirante Tamandaré · Quatro Barras · Campina Grande do Sul · Bocaiúva do Sul

(ajustável — confirme se quer mais/menos cidades)

## Não fazer
- Não criar nova seção destacada.
- Não alterar hero, FAQ, formulário, JSON-LD ou meta tags.
- Não mexer em outras páginas (manutenção, bomba de calor, pressurizador).
