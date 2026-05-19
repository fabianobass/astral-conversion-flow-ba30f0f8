## Objetivo
Verificar a propriedade `https://astralgas.com.br/` no Google Search Console (já conectado) e submeter o `sitemap.xml` para indexação.

## Passos

1. **Obter token de verificação META** via gateway do GSC (Site Verification API) para `https://astralgas.com.br/`.

2. **Inserir a meta tag no `<head>`** do site em `src/routes/__root.tsx` (renderizada em SSR para que o Google consiga ler):
   ```html
   <meta name="google-site-verification" content="<TOKEN>" />
   ```

3. **Publicar o site** (necessário — a meta tag precisa estar viva no domínio `astralgas.com.br` antes da verificação).

4. **Chamar verify** no endpoint `siteVerification/v1/webResource?verificationMethod=META`.

5. **Adicionar o site** ao Search Console: `PUT /webmasters/v3/sites/https%3A%2F%2Fastralgas.com.br%2F`.

6. **Submeter o sitemap**: `PUT /webmasters/v3/sites/https%3A%2F%2Fastralgas.com.br%2F/sitemaps/https%3A%2F%2Fastralgas.com.br%2Fsitemap.xml`.

7. **Marcar finding `gsc:gsc` como fixed**.

## Observação importante
O passo 3 (publicar) precisa acontecer **entre** os passos 2 e 4. Vou pausar após inserir a meta tag para você clicar em Publicar, e então continuo a verificação e o envio do sitemap.

Posso prosseguir?