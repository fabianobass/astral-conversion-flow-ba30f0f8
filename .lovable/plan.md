## Retirar fundo branco da logo

A logo original tem texto **preto**, então em cima do header/footer escuros ela some sem o badge branco. Para retirar o fundo branco mantendo o design intacto, preciso de uma **versão clara da logo** para usar nos fundos escuros.

### Solução
1. Gerar uma variante `logo-astral-light.webp` via `imagegen--edit_image`:
   - Mesmo arquivo da logo
   - Apenas troca o texto preto "Astral Gás" para **branco**
   - Mantém a esfera laranja idêntica, mesmas formas, mesmas proporções, fundo transparente
   - Design preservado, só inverte a cor do texto para legibilidade em fundo escuro

2. Atualizar `Header.tsx`:
   - Remover o `<div>` branco wrapper
   - Usar `logoAstral` light, com altura `h-10 md:h-11` e leve `drop-shadow` para destacar
   - Logo flutua direto sobre o navy

3. Atualizar `Footer.tsx`:
   - Mesma coisa: usar a versão clara, sem badge branco
   - Altura `h-12`

4. Manter a logo original (`logo-astral.webp`) para uso futuro em fundos claros (ex: og:image, favicon, página de impressão)

### Arquivos
- `src/assets/logo-astral-light.webp` (novo, gerado)
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
