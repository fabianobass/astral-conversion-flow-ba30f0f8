## Plano

Apenas CSS, sem recriar a imagem.

Ajustes em `src/components/sections/ServiceHero.tsx`:

1. **Reposicionar a imagem** via `object-position` customizado: trocar `md:object-right` por `md:object-[78%_center]`. Isso "puxa" o aquecedor (que está no centro do arquivo) para o lado direito do hero, sem cortá-lo.

2. **Encurtar o gradiente lateral** para não invadir o aquecedor: trocar `from-navy-deep via-navy-deep/80 to-transparent` por `from-navy-deep from-0% via-navy-deep/70 via-30% to-transparent to-60%`. O lado esquerdo continua sólido para legibilidade do título/CTA, e a transição termina antes do meio — o aquecedor aparece limpo.

3. **Reduzir o overlay base no desktop** de `md:bg-navy-deep/20` para `md:bg-navy-deep/10`, deixando o aquecedor mais nítido.

## Resultado

- Texto/CTA à esquerda sobre navy sólido.
- Aquecedor visível inteiro no lado direito, sem faixa preta cortando.
- Mesma imagem atual, sem nova geração.
