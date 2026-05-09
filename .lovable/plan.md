## Nova seção "Marcas parceiras" na página do Pressurizador

### O que será criado

Uma nova seção destacada em `src/routes/servicos.pressurizador.tsx`, posicionada logo **após a seção "Modelos disponíveis"** e **antes de "Engenharia / Por que escolher"**, com:

- **Eyebrow**: "Marcas parceiras" (dourado, uppercase, no padrão do site)
- **Título grande (h2)**: "Trabalhamos com as melhores marcas do mercado"
- **Subtítulo**: texto curto reforçando que a Astral Gás opera apenas com fabricantes reconhecidos, com peças originais e garantia de fábrica
- **Grid de 6 placeholders de logo** (3 col mobile, 6 col desktop), em cards brancos com borda sutil, prontos para você subir as imagens depois

### Placeholders dos logos

Cada slot será um card no padrão visual da `TrustBar` existente, mas maior e mais destacado, mostrando temporariamente o nome da marca em texto cinza ("Logo 1", "Logo 2"...). Quando você enviar os arquivos, basta trocar o conteúdo de cada slot por um `<img>`.

### Detalhes técnicos

- Fundo: `bg-background` (claro), para contrastar com as seções navy e dar destaque
- Espaçamento: `py-20` (mesmo ritmo das outras seções)
- Grid: `grid-cols-3 sm:grid-cols-6 gap-6`
- Cards: `rounded-xl border border-border bg-card h-20` com placeholder centralizado
- Sem mexer em nenhuma outra página nem na `TrustBar` da home

### Arquivo afetado

- `src/routes/servicos.pressurizador.tsx` (apenas inserção da nova seção)
