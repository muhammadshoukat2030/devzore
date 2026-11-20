import React, { useEffect } from "react";

const BASE_URL = "https://devzore.com";
const DEFAULT_TITLE = "Software & Web Development Company | DevZore";
const DEFAULT_DESCRIPTION =
  "DevZore is a Pakistan-based software development company delivering custom web apps, mobile applications, SaaS platforms and AI solutions to clients worldwide.";
const DEFAULT_IMAGE = `${BASE_URL}/logo.png`;
const DEFAULT_AUTHOR = "Muhammad Shoukat, Founder, DevZore";
const DEFAULT_ROBOTS =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

const LEGACY_CANONICAL_REDIRECTS = {
  "/blog/how-much-does-a-website-cost-in-2026-complete-website-development-pricing-guide-1790762380934":
    "/blog/how-much-does-a-website-cost-in-2026",
  "/blog/how-a-professional-website-can-help-your-business-get-more-customers-1789029617095":
    "/blog/how-a-professional-website-helps-your-business-get-more-customers",
  "/blog/why-your-business-needs-a-professional-website-in-2026-1790435181732":
    "/blog/why-your-business-needs-a-professional-website-in-2026",
  "/blog/why-every-business-needs-a-professional-website-in-2026-1790507048277":
    "/blog/why-your-business-needs-a-professional-website-in-2026",
  "/blog/why-every-business-needs-a-professional-website-in-2026-1790598175467":
    "/blog/why-your-business-needs-a-professional-website-in-2026",
  "/blog/how-to-plan-saas-mvp-complete-guide":
    "/blog/how-to-plan-saas-mvp-development",
  "/blog/how-to-plan-a-saas-mvp-in-2026":
    "/blog/how-to-plan-saas-mvp-development",
};

/**
 * Universal SEO & Head Component for DevZore
 * Direct DOM synchronization ("Find-and-update, never create")
 * Guarantees exactly ONE <title> and exactly ONE <meta name="description"> in both raw HTML and post-hydration DOM.
 */
export default function SEO({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  author = DEFAULT_AUTHOR,
  robots: customRobots,
  noindex = false,
  publishedTime,
  modifiedTime,
  schema,
  jsonLd,
  keywords,
}) {
  const robots = noindex ? "noindex, follow" : (customRobots || DEFAULT_ROBOTS);
  const safeTitle = (title && String(title).trim()) || DEFAULT_TITLE;
  const safeDescription =
    (description && String(description).trim()) || DEFAULT_DESCRIPTION;
  const safeImage = (ogImage && String(ogImage).trim()) || DEFAULT_IMAGE;

  // Build canonical URL with legacy redirect guard
  let safeCanonical = BASE_URL;
  if (canonical) {
    let rawPath = canonical.startsWith("http")
      ? canonical.replace(/^https?:\/\/[^/]+/, "")
      : (canonical.startsWith("/") ? canonical : `/${canonical}`);
    rawPath = rawPath.replace(/\/+$/, "") || "/";

    // Normalize known legacy redirect slugs
    if (LEGACY_CANONICAL_REDIRECTS[rawPath]) {
      rawPath = LEGACY_CANONICAL_REDIRECTS[rawPath];
    } else if (rawPath.startsWith("/blog/")) {
      // Strip trailing numeric timestamp (13+ digits) if accidentally attached
      const stripped = rawPath.replace(/-\d{13,}$/, "");
      if (LEGACY_CANONICAL_REDIRECTS[stripped]) {
        rawPath = LEGACY_CANONICAL_REDIRECTS[stripped];
      } else {
        rawPath = stripped;
      }
    }

    safeCanonical = rawPath === "/" ? `${BASE_URL}/` : `${BASE_URL}${rawPath}`;
  }

  useEffect(() => {
    if (typeof document === "undefined") return;

    // 1. Ensure <html lang="en">
    if (document.documentElement) {
      document.documentElement.lang = "en";
    }

    // 2. Set title in place
    document.title = safeTitle;

    // Purge any extra <title> tags if any exist
    const titles = document.querySelectorAll("title");
    if (titles.length > 1) {
      for (let i = 1; i < titles.length; i++) {
        titles[i].remove();
      }
    }

    // Helper to find and update or create meta/link elements
    const setMetaTag = (selector, attrName, attrVal, content) => {
      if (!content) return;
      let el = document.querySelector(selector);
      if (el) {
        el.setAttribute("content", content);
      } else {
        el = document.createElement("meta");
        el.setAttribute(attrName, attrVal);
        el.setAttribute("content", content);
        document.head.appendChild(el);
      }
    };

    // 3. Meta description (find-and-update, ensure only 1 exists)
    const descs = document.querySelectorAll('meta[name="description"]');
    if (descs.length > 0) {
      descs[0].setAttribute("content", safeDescription);
      for (let i = 1; i < descs.length; i++) {
        descs[i].remove();
      }
    } else {
      const el = document.createElement("meta");
      el.setAttribute("name", "description");
      el.setAttribute("content", safeDescription);
      document.head.appendChild(el);
    }

    // 4. Other core meta tags
    setMetaTag('meta[name="title"]', "name", "title", safeTitle);
    setMetaTag('meta[name="robots"]', "name", "robots", robots);
    setMetaTag('meta[name="googlebot"]', "name", "googlebot", robots);
    if (keywords) setMetaTag('meta[name="keywords"]', "name", "keywords", keywords);
    if (author) setMetaTag('meta[name="author"]', "name", "author", author);

    // 5. Canonical Link (find-and-update, ensure only 1 exists)
    const canonLinks = document.querySelectorAll('link[rel="canonical"]');
    if (canonLinks.length > 0) {
      canonLinks[0].setAttribute("href", safeCanonical);
      for (let i = 1; i < canonLinks.length; i++) {
        canonLinks[i].remove();
      }
    } else {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", safeCanonical);
      document.head.appendChild(link);
    }

    // 6. OpenGraph tags
    setMetaTag('meta[property="og:type"]', "property", "og:type", ogType);
    setMetaTag('meta[property="og:site_name"]', "property", "og:site_name", "DevZore");
    setMetaTag('meta[property="og:title"]', "property", "og:title", safeTitle);
    setMetaTag('meta[property="og:description"]', "property", "og:description", safeDescription);
    setMetaTag('meta[property="og:url"]', "property", "og:url", safeCanonical);
    setMetaTag('meta[property="og:image"]', "property", "og:image", safeImage);

    // 7. Twitter tags
    setMetaTag('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMetaTag('meta[name="twitter:site"]', "name", "twitter:site", "@devzore");
    setMetaTag('meta[name="twitter:creator"]', "name", "twitter:creator", "@muhammadshoukat");
    setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", safeTitle);
    setMetaTag('meta[name="twitter:description"]', "name", "twitter:description", safeDescription);
    setMetaTag('meta[name="twitter:image"]', "name", "twitter:image", safeImage);

    // 8. Article dates
    if (ogType === "article") {
      if (publishedTime) {
        setMetaTag('meta[property="article:published_time"]', "property", "article:published_time", new Date(publishedTime).toISOString());
      }
      if (modifiedTime) {
        setMetaTag('meta[property="article:modified_time"]', "property", "article:modified_time", new Date(modifiedTime).toISOString());
      }
      setMetaTag('meta[property="article:author"]', "property", "article:author", "Muhammad Shoukat");
    }

    // 9. Structured Data JSON-LD
    const rawSchema = schema || jsonLd;
    const schemas = Array.isArray(rawSchema) ? rawSchema.filter(Boolean) : (rawSchema ? [rawSchema] : []);
    if (schemas.length > 0) {
      let schemaScript = document.getElementById("client-seo-schema");
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.id = "client-seo-schema";
        schemaScript.type = "application/ld+json";
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
    }
  }, [safeTitle, safeDescription, safeCanonical, safeImage, ogType, author, robots, keywords, publishedTime, modifiedTime, schema, jsonLd]);

  return null;
}
