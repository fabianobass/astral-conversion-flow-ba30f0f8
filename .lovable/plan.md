## Aumentar a foto do pressurizador e integrá-la mais ao fundo

### Mudanças no `<img>` do hero em `src/routes/servicos.pressurizador.tsx`

1. **Aumentar tamanho da imagem**
   - Container: `max-w-xs lg:max-w-sm` → `max-w-sm lg:max-w-lg`
   - Altura: `h-72 lg:h-96` → `h-96 lg:h-[32rem]`
   - Em telas grandes pode estourar levemente para fora da coluna usando `lg:scale-110` para reforçar presença

2. **Mais "para o fundo" (mais transparente / mais integrada)**
   - Opacidade: `opacity-90` → `opacity-60`
   - Máscara radial com fade mais agressivo: `radial-gradient(ellipse at center, black 35%, transparent 90%)` (antes começava a fade em 55%)
   - Glow dourado atrás reforçado: `from-gold/40` → `from-gold/50`, blur ainda maior

3. **Manter** `mix-blend-mode: lighten` (já ajuda a "queimar" no navy)

### Arquivos afetados
- `src/routes/servicos.pressurizador.tsx` (apenas o bloco da imagem do hero)
