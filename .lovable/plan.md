## Objetivo

Reduzir aproximadamente 20% o tamanho visual do `<h1>` (hero) em todas as páginas. O `<title>` da aba é controlado pelo navegador e não tem tamanho de fonte ajustável via CSS — entendo "title" aqui como o título visual do hero (mesmo elemento H1). Confirmo isso na execução.

## Tamanhos atuais → novos (-20%)

Aplico nas duas variações de H1 hero existentes:

**`src/components/sections/Hero.tsx` (home)**
- Atual: `text-4xl sm:text-5xl lg:text-6xl` (36 / 48 / 60 px)
- Novo:  `text-3xl sm:text-4xl lg:text-5xl` (30 / 36 / 48 px) → ~17–20% menor

**`src/components/sections/ServiceHero.tsx` (aquecedor, manutenção, bomba de calor)**
- Atual: `text-4xl sm:text-5xl lg:text-6xl`
- Novo:  `text-3xl sm:text-4xl lg:text-5xl`

**`src/routes/servicos.pressurizador.tsx` (hero customizado)**
- Atual: `text-4xl sm:text-5xl lg:text-6xl`
- Novo:  `text-3xl sm:text-4xl lg:text-5xl`

## Fora de escopo

- Não altero o `<title>` HTML da aba (não é redimensionável).
- Não mexo em H2 de seções nem em descrições.
- Não altero conteúdo textual, apenas classes de tamanho.

## Arquivos editados

1. `src/components/sections/Hero.tsx`
2. `src/components/sections/ServiceHero.tsx`
3. `src/routes/servicos.pressurizador.tsx`
