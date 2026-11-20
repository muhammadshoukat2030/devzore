import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");

const pages = [
  "index.html",
  "mern-stack-development/index.html",
  "saas-product-development/index.html",
  "projects/weldon-paints/index.html",
  "blog/why-your-business-needs-a-professional-website-in-2026/index.html"
];

for (const p of pages) {
  const filePath = path.join(distDir, p);
  if (!fs.existsSync(filePath)) {
    console.log("MISSING:", p);
    continue;
  }
  const html = fs.readFileSync(filePath, "utf8");
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : "";
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
  const desc = descMatch ? descMatch[1] : "";
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
  const canonical = canonicalMatch ? canonicalMatch[1] : "";
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, "").trim());
  const jsonLd = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].length;

  console.log("=== " + p + " ===");
  console.log("Title (" + title.length + " chars): " + title);
  console.log("Desc (" + desc.length + " chars): " + desc);
  console.log("Canonical: " + canonical);
  console.log("H1 count: " + h1s.length + " | Text: " + JSON.stringify(h1s));
  console.log("JSON-LD scripts: " + jsonLd);
  console.log("Raw HTML size: " + (html.length / 1024).toFixed(1) + " KB\n");
}
