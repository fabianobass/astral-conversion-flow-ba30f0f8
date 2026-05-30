import sharp from "sharp";
import fs from "fs";

const jobs = [
  { src: "src/assets/hero-aquecedor-v5.png", dst: "src/assets/hero-aquecedor-v5.webp", w: 1200, q: 78 },
  { src: "src/assets/hero-manutencao-v4.png", dst: "src/assets/hero-manutencao-v4.webp", w: 1200, q: 78 },
  { src: "src/assets/hero-pressurizador-v2.png", dst: "src/assets/hero-pressurizador-v2.webp", w: 1200, q: 78 },
];
for (const j of jobs) {
  const meta = await sharp(j.src).metadata();
  const buf = await sharp(j.src).resize({ width: Math.min(j.w, meta.width), withoutEnlargement: true }).webp({ quality: j.q }).toBuffer();
  fs.writeFileSync(j.dst, buf);
  console.log(`✓ ${j.dst} ${(buf.length/1024).toFixed(1)}KB (orig ${(fs.statSync(j.src).size/1024).toFixed(1)}KB)`);
}
