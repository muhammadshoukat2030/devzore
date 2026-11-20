import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "../public");

async function optimizeFavicons() {
  const masterSource = path.join(publicDir, "favicon-32x32.png");
  const masterMeta = await sharp(masterSource).metadata();
  console.log("Master icon metadata:", masterMeta.width, "x", masterMeta.height);

  const targets = [
    { file: "favicon-16x16.png", width: 16, height: 16 },
    { file: "favicon-32x32.png", width: 32, height: 32 },
    { file: "favicon.png", width: 32, height: 32 },
    { file: "apple-touch-icon.png", width: 180, height: 180 },
    { file: "android-chrome-192x192.png", width: 192, height: 192 },
    { file: "android-chrome-512x512.png", width: 512, height: 512 },
  ];

  // Also convert master to proper ico if needed or keep existing favicon.ico
  for (const target of targets) {
    const targetPath = path.join(publicDir, target.file);
    const beforeSize = fs.existsSync(targetPath) ? fs.statSync(targetPath).size : 0;

    const buffer = await sharp(masterSource)
      .resize(target.width, target.height, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toBuffer();

    fs.writeFileSync(targetPath, buffer);
    const afterSize = fs.statSync(targetPath).size;
    console.log(`Optimized ${target.file}: ${(beforeSize / 1024).toFixed(1)} KB -> ${(afterSize / 1024).toFixed(1)} KB`);
  }
}

optimizeFavicons().catch(console.error);
