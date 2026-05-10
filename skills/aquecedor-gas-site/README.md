# Skill: aquecedor-gas-site

Pacote para gerar sites de empresas de aquecedor a gás com a mesma qualidade técnica deste projeto (Astral Gás), permitindo customizar marca, cidade, paleta, fontes e fotos.

## Dois modos de uso

### Modo 1 — Skill estruturada (recomendado)

Em qualquer projeto Lovable novo, cole no chat:

> Use a skill em `skills/aquecedor-gas-site/` deste repositório como referência.
> Leia `SKILL.md` e gere o site completo com este config:
>
> ```json
> { "brand": { "name": "Gás Pampa" }, "location": { "city": "Porto Alegre", "state": "RS" }, "contact": { "phoneE164": "5551999990000", "phoneDisplay": "(51) 99999-0000" }, "theme": "forest-copper", "fonts": "fraunces", "brandsServiced": ["Rinnai", "Bosch"] }
> ```

O agente vai:
1. Ler `SKILL.md` (instruções mestras)
2. Aplicar `themes.json[forest-copper]` em `src/styles.css`
3. Setar `fonts.json[fraunces]` como default
4. Usar copy de `copy-blocks.md` substituindo placeholders
5. Gerar fotos com prompts de `photo-prompts.md`

### Modo 2 — Master prompt (standalone)

Abra `master-prompt.md`, copie tudo, edite o bloco `[CONFIG]` no topo e cole no Lovable. Funciona sem precisar acessar esta pasta.

## Arquivos

| Arquivo | Função |
|---|---|
| `SKILL.md` | Instruções mestras pro agente seguir |
| `config.example.json` | Schema de configuração da marca |
| `themes.json` | 5 paletas oklch (astral-original, royal-gold, obsidian, forest-copper, bordeaux-cream) |
| `fonts.json` | 5 combos Google Fonts (astral, fraunces, playfair, cormorant, sora) |
| `copy-blocks.md` | Todo o texto PT-BR (Hero, FAQ, depoimentos, SEO meta) |
| `photo-prompts.md` | Prompts pro imagegen + specs |
| `master-prompt.md` | Versão standalone do prompt |

## Atualizando a skill

Esta skill foi clonada do estado atual de `astral-conversion-flow` em maio de 2026. Quando você melhorar este site (novos componentes, copy, paletas), atualize os arquivos correspondentes desta pasta para manter a skill sincronizada.
