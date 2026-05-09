## Objetivo
Permitir um carrossel de fotos diferente em cada página, começando pela de Manutenção (com fotos novas que você vai enviar) e deixando Bomba de Calor e Pressurizador prontos para receber lotes próprios.

## Estrutura

Hoje `src/lib/work-photos.ts` exporta `installPhotos` e `maintenancePhotos`, mas todas as páginas importam `installPhotos`. Vou reorganizar para 4 conjuntos independentes:

- `installPhotos` → Home + página Aquecedor a Gás (atual, já com fotos reais)
- `maintenancePhotos` → página Manutenção (fotos novas)
- `heatPumpPhotos` → página Bomba de Calor
- `pressurizerPhotos` → página Pressurizador

Cada página importa só o seu conjunto.

## Passos

### 1. Receber fotos da Manutenção
Você envia as fotos de serviços de manutenção/conserto/revisão. Eu copio para `src/assets/trabalhos/manutencao/` com nomes SEO (ex.: `manutencao-rinnai-revisao-batel.jpg`) e processo cada uma com o mesmo tratamento das outras: **crop 1:1** centralizado + **filtro quente profissional** (calidez âmbar, contraste suave, vinheta sutil).

### 2. Atualizar `src/lib/work-photos.ts`
Adicionar imports das novas fotos e popular o array `maintenancePhotos` com `alt` SEO completo, `caption` (tipo de serviço + modelo) e `neighborhood` (bairros plausíveis de Curitiba, sem repetir os de instalação).

### 3. Trocar import na `src/routes/servicos.manutencao.tsx`
Substituir `installPhotos` por `maintenancePhotos` na seção `<RealWorkGallery />`.

### 4. Bomba de Calor e Pressurizador
Criar arrays vazios `heatPumpPhotos` e `pressurizerPhotos` no `work-photos.ts` e ajustar as duas páginas para importá-los. **Enquanto estiverem vazios, o carrossel não renderiza** (o componente `RealWorkGallery` recebe um guard: se `photos.length === 0`, retorna `null`). Assim, ao invés de mostrar fotos de instalação fora de contexto, a seção simplesmente não aparece até você enviar as fotos certas.

Quando você mandar as fotos de cada serviço, a gente repete os passos 1–3 para cada página.

## Próximo passo
Pode anexar as fotos de manutenção na próxima mensagem que eu já implemento o plano completo (estrutura + processamento das fotos novas).