Desacoplar a imagem do hero do pressurizador da imagem da manutenção, para que futuras trocas na manutenção não afetem mais a página de pressurizador.

## Causa do problema

Hoje `src/routes/servicos.pressurizador.tsx` importa exatamente o mesmo arquivo da manutenção:

```ts
import heroManutencao from "@/assets/hero-manutencao-v4.png";
```

Como é o mesmo arquivo físico, qualquer troca feita na manutenção aparece também no pressurizador.

## O que será feito

1. **Criar um arquivo separado** para o pressurizador: `src/assets/hero-pressurizador.png`, copiando o conteúdo atual de `hero-manutencao-v4.png` (assim a página continua igual ao que está agora, sem mudança visual imediata).
2. **Atualizar o import** em `src/routes/servicos.pressurizador.tsx`:
   - Remover: `import heroManutencao from "@/assets/hero-manutencao-v4.png";`
   - Adicionar: `import heroPressurizador from "@/assets/hero-pressurizador.png";`
   - Trocar a prop do `ServiceHero` para `image={heroPressurizador}`.
3. A página de manutenção (`servicos.manutencao.tsx`) **não muda** — continua usando `hero-manutencao-v4.png`.

## Próximo passo (depois deste plano)

Quando você enviar a nova imagem específica do pressurizador, eu apenas substituo o conteúdo de `hero-pressurizador.png` (ou crio uma `-v2`) e a manutenção segue intocada.

## Escopo

- Cria: `src/assets/hero-pressurizador.png`
- Edita: `src/routes/servicos.pressurizador.tsx` (apenas import + prop `image`)
- Não toca em mais nenhum arquivo.