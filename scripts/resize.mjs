import sharp from "sharp";
import fs from "fs";
import path from "path";

async function resize(file, width, height, quality = 80) {
  const buf = fs.readFileSync(file);
  const out = await sharp(buf)
    .resize(width, height, { fit: "cover", withoutEnlargement: true })
    .webp({ quality })
    .toBuffer();
  fs.writeFileSync(file, out);
  console.log(`✓ ${file} -> ${out.length} bytes`);
}

// Galeria: exibido em 378px, gerar 760px (2x mobile) - quadrado
const gallery = [
  "src/assets/trabalhos/instalacao-bosch-cabral.webp",
  "src/assets/trabalhos/instalacao-komeco-15fi-juveve.webp",
  "src/assets/trabalhos/instalacao-komeco-digital-bigorrilho.webp",
  "src/assets/trabalhos/instalacao-rinnai-analogico-batel.webp",
  "src/assets/trabalhos/instalacao-rinnai-digital-agua-verde.webp",
  "src/assets/trabalhos/instalacao-rinnai-digital-merces.webp",
];

for (const f of gallery) {
  await resize(f, 760, 760, 78);
}

// Manutenção
const manut = fs.readdirSync("src/assets/trabalhos/manutencao")
  .filter(f => f.endsWith(".webp"))
  .map(f => path.join("src/assets/trabalhos/manutencao", f));
for (const f of manut) {
  await resize(f, 760, 760, 78);
}

// Bomba de calor / pressurizador
for (const dir of ["src/assets/bomba-de-calor/instalacoes", "src/assets/pressurizador/instalacoes"]) {
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".webp")).map(f => path.join(dir, f));
  for (const f of files) await resize(f, 760, 760, 78);
}

// Logo: exibido 177x70, gerar 360x142
await resize("src/assets/logo-astral.webp", 360, null, 88);

// Hero home: exibido máx 665x655 mobile, 448 desktop -> gerar 800px largura
await resize("src/assets/hero-aquecedor-home.webp", 800, null, 82);

console.log("Done.");
