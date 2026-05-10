#!/usr/bin/env node
/**
 * Verifica se um novo build entrou em produção.
 *
 * Lê o HTML de https://astralgas.com.br/, extrai o hash do entry
 * `index-*.js` (o que está em `<script type="module" async>import("…")`)
 * e o `x-deployment-id` desse asset. Compara com o último valor salvo em
 * `.lovable/last-deploy.json` e imprime um diff legível.
 *
 * Uso:
 *   node scripts/check-deploy.mjs                 # checa uma vez
 *   node scripts/check-deploy.mjs --watch         # repete a cada 15s até mudar
 *   node scripts/check-deploy.mjs --url https://...  # outra origem
 */
import fs from "node:fs/promises";
import path from "node:path";

const args = process.argv.slice(2);
const watch = args.includes("--watch");
const urlIdx = args.indexOf("--url");
const SITE = urlIdx >= 0 ? args[urlIdx + 1] : "https://astralgas.com.br/";
const STATE_FILE = path.resolve(".lovable/last-deploy.json");
const POLL_MS = 15_000;

async function readState() {
  try { return JSON.parse(await fs.readFile(STATE_FILE, "utf8")); }
  catch { return null; }
}
async function writeState(s) {
  await fs.mkdir(path.dirname(STATE_FILE), { recursive: true });
  await fs.writeFile(STATE_FILE, JSON.stringify(s, null, 2) + "\n");
}

async function probe() {
  const html = await fetch(SITE, { cache: "no-store" }).then(r => r.text());

  // O entry real é o último `import("/assets/index-*.js")` no <script type="module" async>
  const entryMatch = [...html.matchAll(/import\(["']\/assets\/(index-[A-Za-z0-9_-]+\.js)["']\)/g)].pop();
  if (!entryMatch) throw new Error("Não encontrei o entry index-*.js no HTML");
  const entry = entryMatch[1];

  const head = await fetch(`${new URL(SITE).origin}/assets/${entry}`, { method: "HEAD" });
  const deploymentId = head.headers.get("x-deployment-id") ?? "(ausente)";
  const size = head.headers.get("content-length") ?? "?";

  return { entry, deploymentId, size, checkedAt: new Date().toISOString() };
}

function fmt(s) {
  return `entry=${s.entry}  deployment=${s.deploymentId.slice(0, 12)}…  size=${s.size}B`;
}

async function runOnce() {
  const prev = await readState();
  const cur = await probe();

  if (!prev) {
    await writeState(cur);
    console.log("📌 baseline salvo:", fmt(cur));
    return { changed: false, prev, cur };
  }

  const changed = prev.entry !== cur.entry || prev.deploymentId !== cur.deploymentId;
  if (changed) {
    console.log("✅ NOVO DEPLOY DETECTADO");
    console.log("   antes :", fmt(prev));
    console.log("   agora :", fmt(cur));
    await writeState(cur);
  } else {
    console.log("⏸  sem mudança —", fmt(cur));
  }
  return { changed, prev, cur };
}

if (watch) {
  console.log(`👀 polling ${SITE} a cada ${POLL_MS / 1000}s (Ctrl+C para sair)`);
  // eslint-disable-next-line no-constant-condition
  while (true) {
    try { const r = await runOnce(); if (r.changed) break; }
    catch (e) { console.error("erro:", e.message); }
    await new Promise(r => setTimeout(r, POLL_MS));
  }
} else {
  await runOnce();
}
