/**
 * IndexNow Submission Script for DevZore
 * Automatically submits all canonical URLs from sitemap.xml to IndexNow (Bing, Yandex, etc.)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");
const sitemapPath = path.resolve(distDir, "sitemap.xml");

const HOST = "devzore.com";
const KEY = "4b8c9d2e1f0a7b5c8d6e3f2a1b9c8d7e";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function submitIndexNow() {
  console.log("🚀 Preparing IndexNow URL submission for devzore.com...");

  if (!fs.existsSync(sitemapPath)) {
    console.error("❌ sitemap.xml not found in dist. Run build first.");
    process.exit(1);
  }

  const sitemapXml = fs.readFileSync(sitemapPath, "utf-8");
  const urlMatches = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  if (!urlMatches.length) {
    console.error("❌ No URLs found in sitemap.xml.");
    process.exit(1);
  }

  console.log(`Found ${urlMatches.length} URLs to submit to IndexNow.`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlMatches,
  };

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (response.status === 200 || response.status === 202) {
      console.log(`✅ IndexNow submission successful! Status: ${response.status}`);
      console.log(`Submitted ${urlMatches.length} URLs to Bing & IndexNow search engines.`);
    } else {
      console.warn(`⚠️ IndexNow responded with status: ${response.status}`);
      const text = await response.text();
      console.warn(`Response: ${text}`);
    }
  } catch (error) {
    console.error("❌ IndexNow submission error:", error.message);
  }
}

submitIndexNow();
