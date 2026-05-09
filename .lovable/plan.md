## Problema

No hero da página `/servicos/pressurizador`, há um espaço vazio entre o breadcrumb ("Início › Pressurizador de Água") e o eyebrow ("PRESSURIZADOR DE ÁGUA") — área marcada em azul nas imagens.

Isso acontece porque o grid de duas colunas usa `items-center`. Como a imagem do pressurizador (coluna direita) é mais alta que o bloco de texto, o texto fica centralizado verticalmente e "desce", deixando o vão acima do eyebrow.

## Correção

Em `src/routes/servicos.pressurizador.tsx` (linha 88), trocar o alinhamento vertical do grid do hero:

- De: `grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]`
- Para: `grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]`

Com isso, o texto começa no topo (logo abaixo do breadcrumb), eliminando o espaço vazio circulado e ficando alinhado ao mesmo padrão das outras páginas de serviço.

Nenhuma outra alteração é necessária — espaçamentos `pt/pb` do hero, `max-w-5xl` e `py-20` das demais seções já estão padronizados.
