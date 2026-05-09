## Objetivo
Atualizar `/servicos/pressurizador` com:
1. Hero igual ao da Bomba de Calor — background com imagem da bomba **INVERSORA HPI 750 1CV e 2CV**
2. Seções de conteúdo destacando o modelo (características técnicas e vantagens)
3. Carrossel `RealWorkGallery` com fotos de pressurizadores instalados

## Fontes
Página oficial do produto: https://hioda.com.br/produto/pressurizador-750-hpi-1cv-2cv/
- Imagem do produto: `https://hioda.com.br/wp-content/uploads/2024/05/13-1.png`
- Características: Corpo/rotor/eixo Aço Inox AISI 304, pressão sucção 30 mca, temp. máx. 60°C, 220V
- Vantagens: motor de frequência variável com ímãs permanentes, silenciosa e compacta, bomba multiestágio, pressão constante

## Passos

### 1. Baixar imagens
- `src/assets/pressurizador/inversora-hpi-750.png` — produto Hioda HPI 750 (background do hero)
- Gerar 1 imagem de fundo "ambiente técnico" (área de bombas / casa de máquinas) para uma seção secundária, se necessário

### 2. Carrossel — fotos
Como ainda não há fotos reais da Astral Gás de pressurizadores instalados, gerar 4 imagens estilizadas e realistas via `imagegen` mostrando:
- Bomba pressurizadora HPI compacta instalada em parede de área de serviço
- Bomba pressurizadora ligada à tubulação de PVC/cobre, instalação limpa
- Bomba pressurizadora em casa de máquinas residencial, com isolamento
- Detalhe de conexão hidráulica polida com bomba inversora

Salvar em `src/assets/pressurizador/instalacoes/` e popular `pressurizerPhotos` em `src/lib/work-photos.ts` com captions e bairros de Curitiba (Batel, Água Verde, Bigorrilho, Cabral).

> Observação: assim que houver fotos reais da equipe, basta substituir os arquivos mantendo os mesmos imports.

### 3. Reescrever `src/routes/servicos.pressurizador.tsx`
Estrutura igual à da página de Bomba de Calor:
- `ServiceHero` com `image={inversoraHpi750}` — background da bomba com overlay
- Seção "A tecnologia INVERSORA HPI 750" com cards: Inox AISI 304, Inversor de frequência, Ímãs permanentes, Multiestágio, Silenciosa, 220V
- Seção "Modelos disponíveis" — dois cards lado a lado: **HPI 750 — 1CV** e **HPI 750 — 2CV** com a imagem do produto
- `ServiceContent` (benefícios + processo) — manter o conteúdo atual ajustado ao modelo
- `RealWorkGallery` com `pressurizerPhotos` populado
- `FAQ` + `CtaForm`

### 4. Metadados SEO
Atualizar title/description para incluir "INVERSORA HPI 750 1CV e 2CV" e "Curitiba".

## Arquivos afetados
- `src/assets/pressurizador/inversora-hpi-750.png` (novo)
- `src/assets/pressurizador/instalacoes/*.jpg` (novos, 4 arquivos)
- `src/lib/work-photos.ts` (popular `pressurizerPhotos`)
- `src/routes/servicos.pressurizador.tsx` (reescrita)
