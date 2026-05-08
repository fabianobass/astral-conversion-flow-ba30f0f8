## Logo + paleta + fonte baseadas na identidade Astral Gás

### 1. Adicionar a logo
- Copiar `user-uploads://logo_astral_gas.webp` → `src/assets/logo-astral.webp`
- **Header**: substituir o ícone de chama + texto "Astral Gás" pelo logo real (`<img>` com altura ~40px, mantém link para `/`)
- **Footer**: mesma logo, versão um pouco maior (~48px). Como a logo tem texto preto, em fundo escuro do footer vou aplicar leve fundo branco arredondado ou usar `filter: brightness/invert` parcial — solução escolhida: envelopar em pequeno "badge" branco arredondado com padding (preserva legibilidade sem editar o arquivo)
- Atualizar `og:image` do root para apontar para a logo (presença em compartilhamentos)
- Alt text: "Astral Gás Aquecedores"

### 2. Nova paleta "Astral Original"
Extraída da logo (laranja vibrante + preto + tons quentes). Vai virar a **5ª opção** no seletor de cores e o novo **default** do site (a marca real do cliente).

| Token | Cor | Origem |
|---|---|---|
| background | off-white quente | papel da logo |
| navy-deep (superfícies escuras) | preto-grafite | letras da logo |
| gold (acento) | laranja vibrante `oklch(0.72 0.18 50)` | esfera principal |
| navy (azul royal vira marrom-quente) | terracota escuro | sombra da esfera |
| accent secundário | amarelo-ouro do highlight da esfera |

Tudo em `oklch`, mantém os mesmos nomes de tokens (sem mexer em componentes). Adicionar em `src/lib/themes.ts` com swatches para preview.

### 3. Nova combinação de fontes "Astral"
A logo usa um sans **black/extra-bold com cantos levemente arredondados** (lembra Mada/Mulish Black ou Sora Black). Para refletir isso:

- **Display:** `Mulish` weight 900 (geométrico, redondo, encorpado — combina com a logo)
- **Sans (corpo):** `Mulish` weight 400/600 (mesma família, mantém coesão visual com o logotipo)

Vai entrar como **5ª opção** no seletor de fontes e virar o novo **default**. Importar do Google Fonts em `src/styles.css`.

### 4. Defaults atualizados
- `DEFAULT_THEME_ID = "astral-original"`
- `DEFAULT_FONT_ID = "astral"`
- Quem já tem outra escolha salva em localStorage mantém a sua

### 5. Arquivos a alterar
- `src/assets/logo-astral.webp` (novo, via copy)
- `src/components/layout/Header.tsx` — usar `<img>` no lugar do ícone+texto
- `src/components/layout/Footer.tsx` — idem com badge branco
- `src/lib/themes.ts` — adicionar paleta "Astral Original" + mudar default
- `src/lib/fonts.ts` — adicionar combo "Mulish" + mudar default
- `src/styles.css` — importar Mulish do Google Fonts
- `src/routes/__root.tsx` — `og:image` apontando para a logo
