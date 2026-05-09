## Nova imagem cinematográfica do pressurizador para o hero

### O que vou fazer

1. **Gerar nova imagem** usando o pressurizador HPI 750 atual (`src/assets/pressurizador/inversora-hpi-750.png`) como base, com edição AI para criar uma composição cinematográfica:
   - Fundo navy escuro (igual `--navy-deep` do hero) já mesclado na imagem
   - Iluminação dramática dourada vindo da lateral
   - Reflexos e brilho sutil no inox do equipamento
   - Partículas/névoa dourada suave ao redor
   - Aspect ratio 1:1 para caber bem no card lateral
   - Salva em `src/assets/pressurizador/inversora-hpi-750-hero.jpg`

2. **Substituir o bloco da imagem no hero** em `src/routes/servicos.pressurizador.tsx`:
   - Trocar o `import inversoraHpi750` usado no hero por um novo import `inversoraHpi750Hero`
   - Remover a máscara radial, `mix-blend-mode` e o glow gold extra (já estarão "queimados" na própria imagem)
   - Manter a imagem original `inversoraHpi750` na seção "A tecnologia" (sem fundo) e nas meta tags (og:image)

### Detalhes técnicos

- O `<img>` no hero passará a ser limpo: `className="relative h-80 w-full object-contain sm:h-96 lg:h-[32rem] lg:scale-105"` sem `style` de máscara/blend.
- O wrapper externo mantém o glow dourado leve para reforçar transição com o fundo do hero, mas reduzido (`from-gold/20`) já que a imagem traz luz própria.
- Nenhuma alteração em outras seções, conteúdo, SEO ou rotas.

### Arquivos afetados

- `src/assets/pressurizador/inversora-hpi-750-hero.jpg` (novo)
- `src/routes/servicos.pressurizador.tsx` (apenas bloco da imagem do hero)
