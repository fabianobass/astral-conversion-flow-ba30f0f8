## Entendi

Você quer que o hero da página de aquecedor use o **mesmo padrão da home**: fundo navy sólido com glows decorativos + imagem do produto separada num card à direita (em vez de imagem full-bleed atrás de tudo). Assim, trocar a foto depois é só substituir o arquivo.

## Plano

Reescrever `src/components/sections/ServiceHero.tsx` espelhando o `Hero.tsx` da home:

1. **Fundo**: remover a imagem full-bleed e os 3 overlays. Manter só `bg-navy-deep` + os dois glows decorativos (`bg-gold/20 blur-3xl` no canto superior esquerdo, `bg-navy/40 blur-3xl` no canto inferior direito) — exatamente como a home.

2. **Layout em 2 colunas no desktop** (`lg:grid-cols-2`):
   - **Esquerda**: breadcrumb, eyebrow dourada, `<h1>`, descrição e botão WhatsApp (conteúdo já existente).
   - **Direita**: card com a imagem do aquecedor — `rounded-3xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]` + glow dourado por trás (`bg-gradient-to-br from-gold/30 to-transparent blur-2xl`), idêntico à home.

3. **Mobile**: vira coluna única (texto em cima, imagem embaixo), comportamento natural do grid.

4. **Container**: trocar `max-w-5xl` por `max-w-7xl` (igual home) para acomodar as 2 colunas confortavelmente.

5. **Prop `image`**: continua recebendo o caminho da imagem — só que agora renderiza dentro do card à direita, não como background. Trocar a foto futuramente é só mudar o import na rota.

## Escopo

`ServiceHero` é usado também em pressurizador, bomba de calor e manutenção. A mudança vale para todas — todas ganham o mesmo visual da home, basta cada rota apontar sua própria imagem. Se preferir aplicar só na página de aquecedor, me avise antes de implementar.
