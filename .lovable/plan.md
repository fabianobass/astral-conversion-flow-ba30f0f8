## Mover a seção "Engenharia" para logo abaixo dos cards 1CV / 2CV

Hoje a ordem da página `/servicos/pressurizador` é:

1. Hero
2. A tecnologia
3. Modelos disponíveis (cards 1CV e 2CV)
4. **Marcas parceiras**
5. **Engenharia — Por que escolher a INVERSORA HPI 750** (6 cards de features)
6. Benefícios / processo
7. Galeria
8. CTA final

### Mudança

Trocar a ordem para que a seção **"Engenharia"** apareça **imediatamente abaixo dos cards 1CV / 2CV**, mantendo "Marcas parceiras" depois dela.

Nova ordem:

1. Hero
2. A tecnologia
3. Modelos disponíveis (cards 1CV e 2CV)
4. **Engenharia — Por que escolher a INVERSORA HPI 750** ⬅️ movida pra cá
5. **Marcas parceiras** ⬅️ desce uma posição
6. Benefícios / processo
7. Galeria
8. CTA final

### Detalhes

- Nenhuma alteração de conteúdo, estilo ou textos — apenas reordenação dos blocos `<section>`.
- Para evitar duas seções claras (`bg-background`) coladas uma na outra, mudo o fundo de "Marcas parceiras" para `bg-muted/30` (mesmo tom usado na seção "Modelos disponíveis"), preservando o ritmo visual de alternância de cores da página.

### Arquivo afetado

- `src/routes/servicos.pressurizador.tsx`
