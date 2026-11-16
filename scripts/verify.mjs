import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");

console.log("=========================================");
console.log("DEVZORE WORKSTREAM J VERIFICATION SUITE");
console.log("=========================================\n");

let failures = 0;
let passes = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    passes++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    failures++;
  }
}

// 1. Inspect Sample HTML files
const sampleRoutes = [
  "",
  "about",
  "contact",
  "allservices",
  "mern-stack-development",
  "cloud-deployment",
  "projects",
  "projects/weldon-paints",
  "projects/frostyops",
  "blog",
  "blog/how-much-does-a-website-cost-in-2026",
  "blog/saas-architecture-guide-startups",
  "blog/why-your-business-needs-a-professional-website-in-2026",
];

console.log("--- TEST 1: Inspect Sample Pre-rendered HTML Files ---");
for (const route of sampleRoutes) {
  const filePath = path.resolve(distDir, route, "index.html");
  assert(fs.existsSync(filePath), `File exists: ${route}/index.html`);

  if (fs.existsSync(filePath)) {
    const html = fs.readFileSync(filePath, "utf-8");

    // Title tag check
    const titleMatch = html.match(/<title>(.*?)<\/title>/i);
    assert(
      titleMatch && titleMatch[1].length >= 30,
      `Route /${route} has valid title: "${titleMatch ? titleMatch[1] : ""}"`
    );

    // Meta description check
    const descMatch = html.match(/<meta name="description" content="(.*?)"/i);
    assert(
      descMatch && descMatch[1].length >= 80,
      `Route /${route} has valid description: length ${descMatch ? descMatch[1].length : 0}`
    );

    // Canonical link check
    const canonicalMatch = html.match(/<link rel="canonical" href="(.*?)"/i);
    assert(
      canonicalMatch && canonicalMatch[1].startsWith("https://devzore.com"),
      `Route /${route} has valid canonical: ${canonicalMatch ? canonicalMatch[1] : ""}`
    );

    // Exactly one H1 check
    const h1Matches = html.match(/<h1[\s>]/gi) || [];
    assert(
      h1Matches.length === 1,
      `Route /${route} has exactly one H1 tag (found ${h1Matches.length})`
    );
  }
}

// 2. Scan All Pre-rendered HTML files for H1 Count and noindex
console.log("\n--- TEST 2: Sitewide Pre-rendered HTML H1 and Noindex Scan ---");
function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.resolve(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(filePath));
    } else if (file.endsWith(".html")) {
      results.push(filePath);
    }
  }
  return results;
}

const allHtmlFiles = getAllHtmlFiles(distDir);
console.log(`Scanning ${allHtmlFiles.length} HTML files...`);

let multipleH1Count = 0;
let zeroH1Count = 0;
let publicNoindexCount = 0;

for (const filePath of allHtmlFiles) {
  const relPath = path.relative(distDir, filePath).replace(/\\/g, "/");
  const html = fs.readFileSync(filePath, "utf-8");

  const h1Matches = html.match(/<h1[\s>]/gi) || [];
  if (h1Matches.length > 1) {
    multipleH1Count++;
    console.error(`  Warning: Multiple H1s in ${relPath} (${h1Matches.length})`);
  } else if (h1Matches.length === 0) {
    zeroH1Count++;
  }

  // Check noindex meta tag (not plain text)
  const robotsMatch = html.match(/<meta\s+name=["'](robots|googlebot)["']\s+content=["'](.*?)["']/gi) || [];
  const hasNoIndexTag = robotsMatch.some((tag) => tag.toLowerCase().includes("noindex"));

  if (hasNoIndexTag && !relPath.includes("admin") && !relPath.includes("thank-you")) {
    publicNoindexCount++;
    console.error(`  Warning: noindex tag found in public page ${relPath}`);
  }
}

assert(multipleH1Count === 0, `Zero HTML files have multiple H1s (found ${multipleH1Count})`);
assert(publicNoindexCount === 0, `Zero public HTML files have noindex (found ${publicNoindexCount})`);

// 3. Scan for forbidden placeholder / lorem text
console.log("\n--- TEST 3: Scan for Fabricated / Placeholder Strings in HTML ---");
let visiblePlaceholderMatches = 0;
for (const filePath of allHtmlFiles) {
  const html = fs.readFileSync(filePath, "utf-8");
  // Check for visible "Client Name" or "Lorem Ipsum"
  if (/Client Name/i.test(html)) {
    visiblePlaceholderMatches++;
    console.error(`  Warning: "Client Name" found in ${filePath}`);
  }
  if (/Lorem Ipsum/i.test(html)) {
    visiblePlaceholderMatches++;
    console.error(`  Warning: "Lorem Ipsum" found in ${filePath}`);
  }
}
assert(
  visiblePlaceholderMatches === 0,
  `Zero public HTML files contain placeholder "Client Name" or "Lorem Ipsum"`
);

// 4. Validate Sitemap XML
console.log("\n--- TEST 4: Sitemap XML Validation ---");
const sitemapPath = path.resolve(distDir, "sitemap.xml");
assert(fs.existsSync(sitemapPath), "dist/sitemap.xml exists");

if (fs.existsSync(sitemapPath)) {
  const xml = fs.readFileSync(sitemapPath, "utf-8");
  const urlMatches = xml.match(/<loc>(.*?)<\/loc>/g) || [];
  assert(urlMatches.length >= 50, `Sitemap contains ${urlMatches.length} URLs (expected >= 50)`);

  // Ensure no duplicate URLs
  const uniqueUrls = new Set(urlMatches);
  assert(uniqueUrls.size === urlMatches.length, `Sitemap has zero duplicate URLs (${uniqueUrls.size} unique)`);

  // Ensure old redirected blog URLs are NOT in sitemap
  const hasOldSlug1 = xml.includes("1790762380934");
  const hasOldSlug2 = xml.includes("1789029617095");
  const hasOldSlug3 = xml.includes("1790435181732");
  const hasOldSlug4 = xml.includes("1790507048277");
  assert(
    !hasOldSlug1 && !hasOldSlug2 && !hasOldSlug3 && !hasOldSlug4,
    "Sitemap excludes all legacy/redirected blog slugs"
  );
}

// 5. Check LLMs.txt and robots.txt
console.log("\n--- TEST 5: AI Crawlers & robots.txt / llms.txt ---");
const robotsPath = path.resolve(distDir, "robots.txt");
assert(fs.existsSync(robotsPath), "robots.txt exists in dist/");
if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, "utf-8");
  assert(robots.includes("GPTBot"), "robots.txt explicitly configures GPTBot");
  assert(robots.includes("ClaudeBot"), "robots.txt explicitly configures ClaudeBot");
  assert(robots.includes("PerplexityBot"), "robots.txt explicitly configures PerplexityBot");
  assert(robots.includes("sitemap.xml"), "robots.txt references sitemap.xml");
}

const llmsPath = path.resolve(distDir, "llms.txt");
assert(fs.existsSync(llmsPath), "llms.txt exists in dist/");
if (fs.existsSync(llmsPath)) {
  const llms = fs.readFileSync(llmsPath, "utf-8");
  assert(llms.includes("Muhammad Shoukat"), "llms.txt contains founder Muhammad Shoukat");
  assert(llms.includes("Weldon Paints"), "llms.txt contains real project Weldon Paints");
  assert(llms.includes("+92 334 8004300"), "llms.txt contains verified WhatsApp number");
}

// 6. Schema Completeness & Spot-checks
console.log("\n--- TEST 6: Schema Completeness & Spot-checks ---");
const homeHtml = fs.readFileSync(path.resolve(distDir, "index.html"), "utf-8");
assert(homeHtml.includes('"@type":"WebSite"') || homeHtml.includes('"@type": "WebSite"'), "Homepage has WebSite structured data");
assert(homeHtml.includes('"@type":"Organization"') || homeHtml.includes('"@type": "Organization"'), "Homepage has Organization structured data");
assert(homeHtml.includes("muhammadshoukat2030"), "Organization schema has real GitHub profile");
assert(homeHtml.includes("dev-zore-833893418"), "Organization schema has real LinkedIn profile");
assert(homeHtml.includes("https://www.facebook.com/profile.php?id=61591616471858"), "Organization schema has official DevZore Facebook profile in sameAs");
assert(homeHtml.includes("Get a Free Consultation on WhatsApp"), "Homepage hero has primary WhatsApp consultation CTA");
assert(homeHtml.includes("120+"), "Homepage contains updated 120+ stat");

const sampleBlogHtml = fs.readFileSync(
  path.resolve(distDir, "blog/how-much-does-a-website-cost-in-2026/index.html"),
  "utf-8"
);
assert(sampleBlogHtml.includes('"@type":"BlogPosting"'), "Blog post has BlogPosting schema");
assert(sampleBlogHtml.includes("Muhammad Shoukat"), "BlogPosting schema includes author Muhammad Shoukat");
assert(sampleBlogHtml.includes('"@type":"BreadcrumbList"'), "Blog post has BreadcrumbList schema");

const sampleCaseHtml = fs.readFileSync(
  path.resolve(distDir, "projects/weldon-paints/index.html"),
  "utf-8"
);
assert(sampleCaseHtml.includes('"@type":"SoftwareApplication"'), "Case study has SoftwareApplication schema");
assert(sampleCaseHtml.includes('"@type":"BreadcrumbList"'), "Case study has BreadcrumbList schema");

const allServicesHtml = fs.readFileSync(
  path.resolve(distDir, "allservices/index.html"),
  "utf-8"
);
assert(allServicesHtml.includes("Generative AI Development"), "Generative AI Development is in All Services grid");
assert(allServicesHtml.includes('"@type":"BreadcrumbList"'), "All Services has BreadcrumbList schema");

// 7. Case Study Big-Company Upgrade Verification
console.log("\n--- TEST 7: Case Study Big-Company Upgrade Verification ---");
const caseStudySlugs = [
  "weldon-paints",
  "sarab-express",
  "desert-safari-qatar",
  "gulf-dunes-tourism",
  "frostyops",
  "installment-management",
];

for (const slug of caseStudySlugs) {
  const casePath = path.resolve(distDir, `projects/${slug}/index.html`);
  assert(fs.existsSync(casePath), `Case study HTML exists: projects/${slug}/index.html`);
  if (fs.existsSync(casePath)) {
    const caseHtml = fs.readFileSync(casePath, "utf-8");
    assert(caseHtml.includes("The Challenge"), `projects/${slug} contains 'The Challenge' section`);
    assert(caseHtml.includes("What We Built"), `projects/${slug} contains 'What We Built' section`);
    assert(caseHtml.includes("The Outcome"), `projects/${slug} contains 'The Outcome' section`);
    assert(caseHtml.includes("/projects"), `projects/${slug} links back to /projects`);
    assert(/href="\/[a-z0-9-]+"/i.test(caseHtml), `projects/${slug} links to matching service page`);
  }
}

// 8. Stat Verification (120+ Projects Completed & Post-Launch Support)
console.log("\n--- TEST 8: Stat Verification (120+ Projects Completed) ---");
const contactHtml = fs.readFileSync(path.resolve(distDir, "contact/index.html"), "utf-8");
assert(contactHtml.includes("120+"), "Contact page includes '120+' stat");
assert(contactHtml.includes("Post-Launch Support"), "Contact page includes 'Post-Launch Support'");

const projectsIndexHtml = fs.readFileSync(path.resolve(distDir, "projects/index.html"), "utf-8");
assert(projectsIndexHtml.includes("120+"), "Projects index page includes '120+' stat");

if (fs.existsSync(llmsPath)) {
  const llmsContent = fs.readFileSync(llmsPath, "utf-8");
  assert(llmsContent.includes("120+ Projects Completed"), "llms.txt contains '120+ Projects Completed'");
}

console.log("\n=========================================");
console.log(`VERIFICATION SUMMARY: ${passes} Passed, ${failures} Failed`);
console.log("=========================================");

if (failures > 0) {
  process.exit(1);
}
