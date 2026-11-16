import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { announcement } from "../src/data/announcement.js";
import { clients } from "../src/data/clients.js";
import { team } from "../src/data/team.js";
import { testimonials } from "../src/data/testimonials.js";

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
  assert(urlMatches.length >= 65, `Sitemap contains ${urlMatches.length} URLs (expected >= 65)`);

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

// 9. Expansion Round: 7 New Pages, 20 Core Services & Worldwide Targeting
console.log("\n--- TEST 9: Expansion Round (7 New Pages, 20 Services, Worldwide Framing) ---");
const newRoutes = [
  "ai-integration-services",
  "inventory-management-system",
  "distribution-management-system",
  "installment-management-software",
  "tour-booking-system",
  "food-ordering-system",
  "nextjs-development",
];

for (const route of newRoutes) {
  const pagePath = path.resolve(distDir, route, "index.html");
  assert(fs.existsSync(pagePath), `Expansion route exists: ${route}/index.html`);
  if (fs.existsSync(pagePath)) {
    const pageHtml = fs.readFileSync(pagePath, "utf-8");

    // Title tag check
    const titleMatch = pageHtml.match(/<title>(.*?)<\/title>/i);
    assert(
      titleMatch && titleMatch[1].length >= 35,
      `Route /${route} has valid title: "${titleMatch ? titleMatch[1] : ""}"`
    );

    // Meta description check
    const descMatch = pageHtml.match(/<meta name="description" content="(.*?)"/i);
    assert(
      descMatch && descMatch[1].length >= 80,
      `Route /${route} has valid description (length ${descMatch ? descMatch[1].length : 0})`
    );

    // Canonical link check
    const canonicalMatch = pageHtml.match(/<link rel="canonical" href="(.*?)"/i);
    assert(
      canonicalMatch && canonicalMatch[1] === `https://devzore.com/${route}`,
      `Route /${route} has canonical https://devzore.com/${route}`
    );

    // Exactly one H1 check
    const h1Matches = pageHtml.match(/<h1[\s>]/gi) || [];
    assert(
      h1Matches.length === 1,
      `Route /${route} has exactly one H1 tag (found ${h1Matches.length})`
    );
  }
}

// 20 Core Services check in pre-rendered contact & allservices
const allServicesUpdatedHtml = fs.readFileSync(path.resolve(distDir, "allservices/index.html"), "utf-8");
assert(allServicesUpdatedHtml.includes("20"), "All Services page contains updated '20' services count");

// Micro-fix check: zero pages leak "Price: 0 USD"
let priceDumpCount = 0;
for (const filePath of allHtmlFiles) {
  const content = fs.readFileSync(filePath, "utf-8");
  if (/Price:\s*0\s*USD/i.test(content)) {
    priceDumpCount++;
    console.error(`  Warning: Visible 'Price: 0 USD' found in ${filePath}`);
  }
}
assert(priceDumpCount === 0, `Zero HTML files display visible raw 'Price: 0 USD' data leak (found ${priceDumpCount})`);

// Worldwide targeting check in Homepage & Organization Schema
assert(homeHtml.includes("clients worldwide"), "Homepage includes worldwide targeting framing");
if (fs.existsSync(llmsPath)) {
  const llmsContent = fs.readFileSync(llmsPath, "utf-8");
  assert(llmsContent.includes("worldwide") || llmsContent.includes("Worldwide"), "llms.txt includes Worldwide service framing");
  assert(llmsContent.includes("20 Core Services") || llmsContent.includes("20 Services"), "llms.txt includes '20 Core Services'");
}

// 10. Devsinc-Flow Trust & Authority Layer Verification
console.log("\n--- TEST 10: Devsinc-Flow Trust & Authority Layer ---");

// 10.1 Announcement Bar
if (announcement && announcement.enabled) {
  assert(homeHtml.includes(announcement.text), "Homepage pre-rendered HTML contains active announcement text");
  assert(homeHtml.includes(announcement.linkUrl), "Homepage pre-rendered HTML links to announcement target URL");
}

// 10.2 Client Strip
assert(homeHtml.includes("Systems Engineered for Real Businesses"), "Homepage contains 'Systems Engineered for Real Businesses' client strip");
assert(clients.length === 6, `clients.js contains exactly 6 real case-study clients (found ${clients.length})`);
for (const client of clients) {
  assert(homeHtml.includes(client.name), `Homepage client strip includes real client: ${client.name}`);
  assert(homeHtml.includes(client.caseStudyUrl), `Homepage client strip links to case study: ${client.caseStudyUrl}`);
}

// 10.3 Testimonials Pipeline
assert(Array.isArray(testimonials), "testimonials.js exports valid testimonials array");
assert(testimonials.length === 0, "testimonials array is empty by default (no fabricated reviews)");
assert(!homeHtml.includes("Client Name"), "Homepage does NOT contain placeholder 'Client Name'");
assert(!homeHtml.includes("Client Reviews & Feedback"), "Testimonials section stays absent from pre-rendered HTML while testimonials data is empty");

// 10.4 Team Section on About
const aboutHtml = fs.readFileSync(path.resolve(distDir, "about/index.html"), "utf-8");
assert(aboutHtml.includes("Our Team & Leadership") || aboutHtml.includes("Meet the people behind DevZore"), "About page contains Team & Leadership section");
assert(aboutHtml.includes("Muhammad Shoukat"), "Team section includes founder Muhammad Shoukat");
assert(team.length === 1, `team.js contains exactly founder entry with zero invented team members (found ${team.length})`);

// 10.5 Industries We Serve
assert(homeHtml.includes("Industries We Serve"), "Homepage includes 'Industries We Serve' section");
const allServicesHtmlForInd = fs.readFileSync(path.resolve(distDir, "allservices/index.html"), "utf-8");
assert(allServicesHtmlForInd.includes("Industries We Serve"), "All Services page includes 'Industries We Serve' section");

const requiredIndustries = [
  "Manufacturing & Retail",
  "Food, Beverage & Distribution",
  "Tourism & Hospitality",
  "Finance & Installment Sales",
];
for (const ind of requiredIndustries) {
  assert(homeHtml.includes(ind), `Homepage contains industry: ${ind}`);
}
assert(homeHtml.includes("/projects/weldon-paints"), "Industries section links to Weldon Paints case study");
assert(homeHtml.includes("/projects/sarab-express"), "Industries section links to Sarab Express case study");
assert(homeHtml.includes("/projects/desert-safari-qatar"), "Industries section links to Desert Safari Qatar case study");
assert(homeHtml.includes("/projects/installment-management"), "Industries section links to Installment Management case study");

if (fs.existsSync(llmsPath)) {
  const llmsContent = fs.readFileSync(llmsPath, "utf-8");
  assert(llmsContent.includes("Industries We Serve"), "llms.txt includes 'Industries We Serve'");
  for (const ind of requiredIndustries) {
    assert(llmsContent.includes(ind), `llms.txt includes industry: ${ind}`);
  }
}

// 11. Devsinc Blueprint Round 2 Verification
console.log("\n--- TEST 11: Devsinc Blueprint Round 2 (Templates & Site Architecture) ---");

// 11.1 New Hub Pages: /industries and /careers
const industriesHtmlPath = path.resolve(distDir, "industries/index.html");
assert(fs.existsSync(industriesHtmlPath), "dist/industries/index.html exists");
if (fs.existsSync(industriesHtmlPath)) {
  const indHtml = fs.readFileSync(industriesHtmlPath, "utf-8");
  assert(indHtml.includes("Manufacturing & Retail"), "Industries page includes Manufacturing & Retail");
  assert(indHtml.includes("Tourism & Hospitality"), "Industries page includes Tourism & Hospitality");
  assert(indHtml.includes("/projects/weldon-paints"), "Industries page links to Weldon Paints case study");
}

const careersHtmlPath = path.resolve(distDir, "careers/index.html");
assert(fs.existsSync(careersHtmlPath), "dist/careers/index.html exists");
if (fs.existsSync(careersHtmlPath)) {
  const careersHtml = fs.readFileSync(careersHtmlPath, "utf-8");
  assert(careersHtml.includes("No open positions right now") || careersHtml.includes("No open roles"), "Careers page includes honest empty state");
  assert(careersHtml.includes("hellodevzore@gmail.com"), "Careers page includes contact email for spontaneous applications");
}

// 11.2 Case Study "At a Glance" Box
for (const slug of caseStudySlugs) {
  const casePath = path.resolve(distDir, `projects/${slug}/index.html`);
  if (fs.existsSync(casePath)) {
    const caseHtml = fs.readFileSync(casePath, "utf-8");
    assert(caseHtml.includes("At a Glance") || caseHtml.includes("at a Glance") || caseHtml.includes("Project Profile"), `projects/${slug} contains 'At a Glance' project profile box`);
  }
}

// 11.3 Contact "Where We Work" Section
const contactHtmlWork = fs.readFileSync(path.resolve(distDir, "contact/index.html"), "utf-8");
assert(contactHtmlWork.includes("Where We Work") || contactHtmlWork.includes("where-we-work"), "Contact page includes 'Where We Work' global delivery section");
assert(contactHtmlWork.includes("Pakistan"), "Where We Work includes Pakistan engineering hub");
assert(contactHtmlWork.includes("Qatar"), "Where We Work includes Qatar regional footprint");

// 11.4 Featured Insights on Homepage
assert(homeHtml.includes("Featured Insights") || homeHtml.includes("Engineering Insights"), "Homepage includes Featured Insights section");
assert(homeHtml.includes("SaaS Architecture Guide") || homeHtml.includes("/blog/saas-architecture-guide-startups"), "Featured Insights links to SaaS architecture guide");

// 12. Devsinc Typography & Ahrefs Recovery Integrity
console.log("\n--- TEST 12: Devsinc Typography & Ahrefs Recovery Integrity ---");

// 12.1 Typography Stack Check
const indexHtmlSrc = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf-8");
assert(indexHtmlSrc.includes("family=DM+Sans") && indexHtmlSrc.includes("family=DM+Mono"), "Google Fonts link loads DM Sans and DM Mono in index.html");

const indexCssSrc = fs.readFileSync(path.resolve(__dirname, "../src/index.css"), "utf-8");
assert(indexCssSrc.includes("--font-sans: \"DM Sans\"") || indexCssSrc.includes("--font-sans: 'DM Sans'"), "DM Sans configured in src/index.css");
assert(indexCssSrc.includes("--font-mono: \"DM Mono\"") || indexCssSrc.includes("--font-mono: 'DM Mono'"), "DM Mono configured in src/index.css");

// 12.2 Sitemap & HTML Integrity for all 67 URLs
const distSitemapPath = path.resolve(distDir, "sitemap.xml");
assert(fs.existsSync(distSitemapPath), "sitemap.xml exists in dist/");
const sitemapContent = fs.readFileSync(distSitemapPath, "utf-8");
const locMatches = [...sitemapContent.matchAll(/<loc>(https:\/\/devzore\.com[^<]*)<\/loc>/g)];
assert(locMatches.length === 67, `sitemap.xml contains exactly 67 URLs (found ${locMatches.length})`);

let duplicateTitles = 0;
let duplicateDescs = 0;
let missingLang = 0;
let invalidH1Count = 0;
let noindexInSitemap = 0;
let schemaPriceZeroCount = 0;
let longTitles = 0;
let longDescs = 0;

for (const match of locMatches) {
  const url = match[1];
  const urlPath = url.replace("https://devzore.com", "").replace(/\/$/, "");
  const fileRelPath = urlPath === "" ? "index.html" : `${urlPath.replace(/^\//, "")}/index.html`;
  const filePath = path.resolve(distDir, fileRelPath);

  assert(fs.existsSync(filePath), `HTML file exists for sitemap URL: ${url}`);
  if (!fs.existsSync(filePath)) continue;

  const html = fs.readFileSync(filePath, "utf-8");

  // Exactly one <title>
  const titles = html.match(/<title>.*?<\/title>/gis) || [];
  if (titles.length !== 1) duplicateTitles++;

  // Title length <= 60
  const titleContent = (titles[0] || "").replace(/<title>|<\/title>/gi, "");
  if (titleContent.length > 60) longTitles++;

  // Exactly one <meta name="description">
  const descs = html.match(/<meta[^>]*name=["']description["'][^>]*>/gis) || [];
  if (descs.length !== 1) duplicateDescs++;

  // Description length <= 160
  const descContentMatch = (descs[0] || "").match(/content="([^"]*)"/i);
  if (descContentMatch && descContentMatch[1].length > 160) longDescs++;

  // <html lang="en">
  if (!/<html[^>]*lang=["']en["']/i.test(html)) missingLang++;

  // Exactly one H1
  const h1s = html.match(/<h1[\s>]/gi) || [];
  if (h1s.length !== 1) invalidH1Count++;

  // Zero noindex in sitemap URLs
  if (html.includes('content="noindex') || html.includes("content='noindex")) noindexInSitemap++;

  // No offers: 0 or price: 0 in schema
  if (/["']price["']\s*:\s*["']?0["']?/i.test(html) || /Price:\s*0\s*USD/i.test(html)) {
    schemaPriceZeroCount++;
  }
}

assert(duplicateTitles === 0, `Zero pages with multiple or missing <title> tags (failures: ${duplicateTitles})`);
assert(duplicateDescs === 0, `Zero pages with multiple or missing <meta name="description"> tags (failures: ${duplicateDescs})`);
assert(missingLang === 0, `All sitemap HTML files have <html lang="en"> (missing: ${missingLang})`);
assert(invalidH1Count === 0, `All sitemap HTML files have exactly one <h1> (invalid: ${invalidH1Count})`);
assert(noindexInSitemap === 0, `Zero sitemap URLs contain noindex meta tag (found: ${noindexInSitemap})`);
assert(schemaPriceZeroCount === 0, `Zero sitemap URLs contain price: 0 USD data leak or schema (found: ${schemaPriceZeroCount})`);
assert(longTitles === 0, `Zero sitemap URLs have titles exceeding 60 characters (found: ${longTitles})`);
assert(longDescs === 0, `Zero sitemap URLs have descriptions exceeding 160 characters (found: ${longDescs})`);

// 12.3 IndexNow Key Files and Robots.txt Check
assert(fs.existsSync(path.resolve(distDir, "devzore-indexnow-key.txt")), "devzore-indexnow-key.txt exists in dist/");
assert(fs.existsSync(path.resolve(distDir, "4b8c9d2e1f0a7b5c8d6e3f2a1b9c8d7e.txt")), "UUID key file exists in dist/");
const robotsTxt = fs.readFileSync(path.resolve(distDir, "robots.txt"), "utf-8");
assert(robotsTxt.includes("Disallow: /admin"), "robots.txt disallows /admin");
assert(robotsTxt.includes("sitemap.xml"), "robots.txt references sitemap.xml");

console.log("\n=========================================");
console.log(`VERIFICATION SUMMARY: ${passes} Passed, ${failures} Failed`);
console.log("=========================================");

if (failures > 0) {
  process.exit(1);
}
