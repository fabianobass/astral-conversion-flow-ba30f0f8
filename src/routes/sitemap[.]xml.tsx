import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/seo";

const ROUTES = [
  { path: "/", priority: "1.0" },
  { path: "/servicos/aquecedor-a-gas", priority: "0.9" },
  { path: "/servicos/manutencao", priority: "0.9" },
  { path: "/servicos/pressurizador", priority: "0.8" },
  { path: "/servicos/bomba-de-calor", priority: "0.8" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const today = new Date().toISOString().split("T")[0];
        const urls = ROUTES.map(
          (r) =>
            `  <url><loc>${SITE_URL}${r.path}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>${r.priority}</priority></url>`,
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
