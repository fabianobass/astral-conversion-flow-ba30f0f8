## Objetivo
Criar 4 sitelinks para a campanha do Google Ads apontando para a página `/servicos/aquecedor-a-gas`. Cada sitelink precisa de:
- Título (até 25 caracteres)
- 2 linhas de descrição (até 35 caracteres cada)
- URL de destino que leve o usuário ao conteúdo certo (não só a topo da página)

## Estratégia
Hoje a página `/servicos/aquecedor-a-gas` é uma landing única. Para os sitelinks fazerem sentido (e o Google aprovar/melhorar Quality Score), cada um deve abrir num ponto específico. Vou:

1. **Adicionar `id`s nas seções existentes** do arquivo `src/routes/servicos.aquecedor-a-gas.tsx` (e nos componentes filhos quando preciso) para virar âncoras profundas:
   - `#orcamento` → seção `CtaForm` (formulário final)
   - `#instalacoes` → `RealWorkGallery` (fotos reais)
   - `#duvidas` → `FAQ` (perguntas frequentes)
   - `#servico` → bloco `ServiceContent` ("O que está incluído" + "Como atendemos")

2. **Garantir scroll suave até a âncora** (o navegador já faz por padrão com `scroll-behavior: smooth` em `src/styles.css` — vou confirmar; se faltar, adiciono).

3. **Entregar a copy pronta dos 4 sitelinks** para você colar no Google Ads.

## Sitelinks propostos (copy pt-BR)

| # | Título (≤25) | Descrição 1 (≤35) | Descrição 2 (≤35) | URL |
|---|---|---|---|---|
| 1 | Pedir orçamento grátis | Resposta no WhatsApp em 1 hora | Sem compromisso, atendemos hoje | `https://astralgas.com.br/servicos/aquecedor-a-gas#orcamento` |
| 2 | Instalações reais | Fotos de obras em Curitiba | Rinnai, Bosch, Komeco e Lorenzetti | `https://astralgas.com.br/servicos/aquecedor-a-gas#instalacoes` |
| 3 | Dúvidas frequentes | Quantos litros/min preciso? | Preço, prazo, marcas e garantia | `https://astralgas.com.br/servicos/aquecedor-a-gas#duvidas` |
| 4 | O que está incluído | Visita técnica gratuita | Instalação no mesmo dia, com NF | `https://astralgas.com.br/servicos/aquecedor-a-gas#servico` |

(Contagem já validada: todos os títulos ≤25 e descrições ≤35.)

## Arquivos a alterar
- `src/routes/servicos.aquecedor-a-gas.tsx` — envolver `CtaForm`, `RealWorkGallery`, `FAQ` e `ServiceContent` em `<section id="...">` (ou passar `id` se o componente aceitar) e ajustar `scroll-margin-top` para o header fixo não cobrir o título.
- `src/styles.css` — confirmar `html { scroll-behavior: smooth; }`; se ausente, adicionar. Adicionar utilitário `scroll-mt-24` nas âncoras para compensar o header.

## Fora do escopo
- Não vou criar/configurar a campanha no Google Ads (isso é feito por você no painel) — entrego a copy e os URLs prontos.
- Sem mudanças de copy nas seções, só infra de âncora.

Posso seguir?
