## Adicionar Google Tag Manager (GTM-WKQZ4BV9)

Manter o gtag.js atual (GA4 + Google Ads) funcionando e adicionar o GTM em paralelo. Assim nada quebra e você pode migrar/gerenciar novas tags pelo painel do GTM quando quiser.

### Alterações em `src/routes/__root.tsx`

1. No `head().scripts`, adicionar o snippet do GTM logo após os scripts já existentes:
   ```js
   {
     children:
       "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WKQZ4BV9');",
   }
   ```

2. No `RootShell`, adicionar o `<noscript>` iframe do GTM como primeiro filho do `<body>` (fallback para navegadores sem JS):
   ```tsx
   <body>
     <noscript>
       <iframe
         src="https://www.googletagmanager.com/ns.html?id=GTM-WKQZ4BV9"
         height="0" width="0"
         style={{ display: "none", visibility: "hidden" }}
       />
     </noscript>
     {children}
     <Scripts />
   </body>
   ```

3. Adicionar `dns-prefetch` para `https://www.googletagmanager.com` já existe — manter.

### O que NÃO muda

- gtag.js (`GT-T5J9FRS6` + GA4 `G-R7WVSM499B`) continua carregando direto.
- Conversões do Google Ads (`trackWhatsAppClick`, `trackWhatsAppMaintenance`) continuam disparando via `window.gtag` em `src/lib/analytics.ts`.
- Nenhuma alteração em componentes, rotas ou lógica de negócio.

### Próximos passos (no painel do GTM, fora do código)

Depois de publicado, você pode no tagmanager.google.com:
- Criar uma tag GA4 dentro do GTM (opcional, se quiser migrar depois).
- Adicionar Meta Pixel, LinkedIn Insight, etc., sem mexer no código.
- Configurar triggers de conversão extras escutando o `dataLayer`.
