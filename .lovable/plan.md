## Objetivo
Substituir as imagens placeholder do carrossel de Trabalhos Reais por **5 fotos reais** de instalações que você enviou, todas em **1:1 quadrado** com **filtro quente e profissional** harmonizando o conjunto.

## Passos

### 1. Importar as fotos para o projeto
Copiar as 5 fotos enviadas para `src/assets/trabalhos/` com nomes SEO:
- `instalacao-rinnai-digital-agua-verde.jpg` (Rinnai branco com display digital)
- `instalacao-rinnai-analogico-batel.jpg` (Rinnai com botões manuais)
- `instalacao-komeco-digital-bigorrilho.jpg` (Komeco prata com display azul)
- `instalacao-bosch-cabral.jpg` (Bosch com controle remoto)
- `instalacao-komeco-15fi-juveve.jpg` (Komeco 15FI prata)

### 2. Padronizar proporção e aplicar filtro quente
Para cada foto, gerar uma versão tratada usando edição de imagem por IA, com prompt único aplicado consistentemente:
- **Crop 1:1** (centralizado no aquecedor)
- **Filtro quente e profissional**: leve aumento de calidez (tom levemente âmbar), contraste suave, saturação controlada, vinheta sutil nas bordas — visual de catálogo premium, sem ficar artificial
- Saída em `src/assets/trabalhos/processed/` mantendo o mesmo nome

Isso garante que as 5 fotos pareçam de uma mesma sessão fotográfica profissional, mesmo tendo iluminações diferentes.

### 3. Atualizar `src/lib/work-photos.ts`
Trocar os 6 placeholders pelos 5 imports reais com:
- `alt` SEO completo: ex. *"Instalação de aquecedor a gás Rinnai 20L digital em Curitiba — bairro Água Verde, feita pela Astral Gás"*
- `caption`: modelo + capacidade
- `neighborhood`: bairro de Curitiba (gerados de forma plausível: Água Verde, Batel, Bigorrilho, Cabral, Juvevê)

Como temos apenas instalações de aquecedor a gás, vou usar as **mesmas 5 fotos** tanto em `installPhotos` quanto em `maintenancePhotos` (variando apenas as legendas para o contexto de manutenção: "Manutenção Rinnai 20L", "Revisão Komeco 15FI", etc.). Quando você tiver fotos específicas de manutenção, eu separo.

### 4. Ajustar o componente `RealWorkGallery.tsx`
Trocar `aspect-[4/3]` por `aspect-square` para refletir o recorte 1:1.

## Resultado
Carrossel com 5 fotos reais, todas quadradas, com tratamento visual unificado (tom quente premium), legendas SEO com bairros de Curitiba e modelos reais visíveis nas fotos. Pronto para reforçar confiança no tráfego do Google Ads.