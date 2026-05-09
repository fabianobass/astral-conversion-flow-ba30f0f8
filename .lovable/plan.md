## Problema

A troca de páginas está demorando ~700ms perceptíveis. Identifiquei duas causas no código:

### 1. Animação de transição muito longa (principal causa)
Em `src/routes/__root.tsx` (linhas 115–127), o `AnimatedOutlet` usa `AnimatePresence mode="wait"` com:
- exit: 0.35s
- enter: 0.35s

Como `mode="wait"` espera o exit terminar antes de iniciar o enter, **toda navegação leva ~700ms só de animação**, mesmo que a próxima página já esteja pronta. É exatamente a sensação de "demora ao abrir".

### 2. Sem preload nos links
Em `src/router.tsx`, falta `defaultPreload: "intent"`. Hoje a próxima página só começa a carregar quando o usuário clica — com `intent`, ela começa no hover/touchstart, ficando pronta antes do clique.

## Solução proposta

**A) Reduzir a animação de transição** em `src/routes/__root.tsx`:
- Trocar para apenas fade (sem deslocamento `y`) para parecer mais instantâneo
- Reduzir duração: exit 0.12s, enter 0.18s (~300ms total em vez de 700ms)
- Manter `mode="wait"` para evitar sobreposição

**B) Habilitar preload por intenção** em `src/router.tsx`:
- Adicionar `defaultPreload: "intent"` e `defaultPreloadDelay: 50`
- Isso faz o TanStack Router pré-carregar o chunk da rota assim que o mouse passa por cima do link (Header/Footer/CTAs)

Combinando os dois, a troca de página deve ficar quase imediata.

## Arquivos alterados
- `src/routes/__root.tsx` — ajustar `AnimatedOutlet`
- `src/router.tsx` — adicionar opções de preload

Sem mudanças de conteúdo ou layout das páginas.