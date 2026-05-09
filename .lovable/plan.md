## Ajustes no hero da página `/servicos/pressurizador`

### 1. Reverter foto para o produto antigo (menor, à direita)
- Voltar a usar `inversora-hpi-750.png` (produto Hioda em fundo branco) — apagar o uso de `hero-pressurizador.jpg`
- Como o `ServiceHero` atual aplica a imagem como `object-cover` em background full-bleed, isso não funciona para uma foto de produto recortado. Solução: criar uma **variante de hero específica** para esta página em vez de alterar o `ServiceHero` compartilhado (não quebra outras páginas).

### 2. Mover "Pressurizador de Água" para o eyebrow
- `eyebrow` passa de "Pressurizador" → **"Pressurizador de Água"**
- `title` passa de "Pressurizador de Água — pressão ideal em toda a casa" → **"Pressão ideal em toda a casa"**

### Implementação técnica
Em `src/routes/servicos.pressurizador.tsx`, substituir o `<ServiceHero ... />` por um hero inline construído neste arquivo (não toca em `ServiceHero.tsx`):

```text
[ Hero navy-deep, padding superior alto                                ]
[                                                                       ]
[  ← coluna esquerda (texto) ──────┐   ┌── coluna direita (imagem) ──┐ ]
[  Breadcrumb: Início > Press...   │   │                              │ ]
[  PRESSURIZADOR DE ÁGUA (gold)    │   │   [foto produto HPI 750]    │ ]
[  Pressão ideal em toda a casa    │   │   ~280-360px, com glow gold │ ]
[  (h1 grande)                     │   │                              │ ]
[  descrição (texto branco/80)     │   │                              │ ]
[  [WhatsApp CTA verde]            │   │                              │ ]
[  ────────────────────────────────┘   └──────────────────────────────┘ ]
```

- Layout: `grid lg:grid-cols-[1.4fr_1fr]` para a coluna do texto ser maior; em mobile a imagem aparece abaixo, menor (`max-w-xs mx-auto`)
- Imagem: `<img src={inversoraHpi750}>` com `object-contain`, altura controlada (~`h-72 lg:h-96`), com o mesmo "glow" dourado já usado na seção "A tecnologia" (`absolute -inset-6 ... bg-gradient-to-br from-gold/30 to-transparent blur-2xl`)
- Manter os mesmos elementos do `ServiceHero` original: breadcrumb, eyebrow, h1, descrição, botão WhatsApp, e o blob `gold/15 blur-3xl` decorativo
- Atualizar `og:image` e `twitter:image` para voltarem a apontar para `inversoraHpi750`
- Remover o import de `heroPressurizador` (arquivo `hero-pressurizador.jpg` permanece no disco mas sem uso — pode ser apagado depois)

### Arquivos afetados
- `src/routes/servicos.pressurizador.tsx` (único arquivo editado)
