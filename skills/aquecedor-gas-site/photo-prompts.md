# Photo Prompts — Geração via imagegen

Use `imagegen--generate_image` (model `standard` para hero, `fast` para galeria).
**Sem texto na imagem.** Sempre alt text descritivo em PT-BR depois.

## Specs por tipo

| Tipo | Dimensões | Format | Model |
|---|---|---|---|
| Hero principal | 1920×1080 | .jpg | standard |
| Hero serviço | 1600×900 | .jpg | fast |
| Galeria de obras | 1200×900 | .jpg | fast |
| Card serviço | 800×600 | .jpg | fast |
| Logo | 512×512 | .png transparente | premium |

## Prompts

### 1. Hero — home
```
Realistic editorial photograph of a uniformed gas heater technician in clean
navy work clothes installing a modern wall-mounted tankless water heater on a
white tiled wall in a contemporary Brazilian bathroom. Warm natural side light
from a window, shallow depth of field, professional cinematic look, high
detail, no text, no logos.
```

### 2. Hero — serviço aquecedor a gás
```
Close-up of a modern silver tankless gas water heater mounted on a clean white
wall, copper gas pipes neatly installed, soft daylight, architectural
photography style, no text.
```

### 3. Hero — bomba de calor
```
Outdoor heat pump unit installed beside a residential pool deck in a Brazilian
upscale home, golden hour light, palm trees soft in background, premium
lifestyle photography, no text.
```

### 4. Hero — manutenção
```
Hands of a technician using a wrench to service the internal components of a
gas water heater, focused detail shot, controlled lighting, blue work gloves,
documentary style, no text.
```

### 5. Hero — pressurizador
```
Compact silver water pressure booster pump installed in a clean utility room,
copper pipes and pressure gauges visible, minimalist industrial photography,
no text.
```

### 6. Galeria — instalação aparente
```
Neatly installed gas water heater system with exposed copper piping on a
exterior service wall of a Brazilian house, professional craftsmanship visible,
documentary photo, no text.
```

### 7. Galeria — central de gás
```
Outdoor LPG gas central with two cylinders properly secured, valves and
manifold visible, safe installation, professional inspection photo, no text.
```

### 8. Galeria — equipe / técnicos
```
Two friendly Brazilian gas heater technicians in branded navy uniforms
standing in front of a service van, smiling confidently, daytime, residential
street, professional corporate photography, no text.
```

### 9. Logo (opcional)
```
Minimal flat geometric logo mark for a gas heater company, two letters [LOGO_TEXT]
intertwined, navy and gold color scheme, on a solid white background, vector
style, ultra clean.
```

## Pós-processamento

- Compressão: rodar `scripts/resize.mjs` se existir, ou usar `sharp` para gerar `@2x` quando precisar de retina.
- Lazy load: `loading="lazy"` em tudo abaixo do fold (galeria, depoimentos).
- Hero: `loading="eager"` + `fetchpriority="high"`.
- Alt text exemplo: `alt="Técnico [BRAND] instalando aquecedor a gás Rinnai em apartamento de [CITY]"`.

## Bancos gratuitos (fallback se imagegen estiver caro)

- Unsplash: termos `gas heater`, `plumber`, `home maintenance`
- Pexels: `water heater`, `technician`
- Burst: `home services`

⚠️ Sempre verificar licença comercial e dar atribuição quando exigida.
