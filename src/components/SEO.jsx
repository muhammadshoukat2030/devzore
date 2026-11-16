import React from "react";
import { Helmet } from "react-helmet-async";

const BASE_URL = "https://devzore.com";
const DEFAULT_TITLE = "DevZore | Software Development Company";
const DEFAULT_DESCRIPTION =
  "DevZore is a software development company building high-performance web applications, mobile apps, SaaS products, and custom software for businesses worldwide.";
const DEFAULT_IMAGE = `${BASE_URL}/logo.png`;
const DEFAULT_AUTHOR = "Muhammad Shoukat, Founder, DevZore";
const DEFAULT_ROBOTS =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

/**
 * Universal SEO & Head Component for DevZore
 * Ensures no page ever renders missing title, description, canonical, OG, or Twitter tags.
 */
export default function SEO({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  author = DEFAULT_AUTHOR,
  robots = DEFAULT_ROBOTS,
  publishedTime,
  modifiedTime,
  schema,
  jsonLd,
  keywords,
}) {
  const safeTitle = (title && String(title).trim()) || DEFAULT_TITLE;
  const safeDescription =
    (description && String(description).trim()) || DEFAULT_DESCRIPTION;
  const safeImage = (ogImage && String(ogImage).trim()) || DEFAULT_IMAGE;

  // Build canonical URL
  let safeCanonical = BASE_URL;
  if (canonical) {
    if (canonical.startsWith("http")) {
      safeCanonical = canonical.replace(/\/+$/, "");
    } else {
      const cleanPath = canonical.startsWith("/") ? canonical : `/${canonical}`;
      safeCanonical = cleanPath === "/" ? BASE_URL : `${BASE_URL}${cleanPath.replace(/\/+$/, "")}`;
    }
  }

  // Schema normalizer (accepts schema or jsonLd)
  const rawSchema = schema || jsonLd;
  const schemas = Array.isArray(rawSchema)
    ? rawSchema.filter(Boolean)
    : rawSchema
    ? [rawSchema]
    : [];

  return (
    <Helmet>
      {/* HTML Lang */}
      <html lang="en" />

      {/* Primary Meta Tags */}
      <title>{safeTitle}</title>
      <meta name="title" content={safeTitle} />
      <meta name="description" content={safeDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />

      {/* Canonical */}
      <link rel="canonical" href={safeCanonical} />

      {/* Robots */}
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="DevZore" />
      <meta property="og:title" content={safeTitle} />
      <meta property="og:description" content={safeDescription} />
      <meta property="og:url" content={safeCanonical} />
      <meta property="og:image" content={safeImage} />
      <meta property="og:image:alt" content={safeTitle} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@devzore" />
      <meta name="twitter:creator" content="@muhammadshoukat" />
      <meta name="twitter:title" content={safeTitle} />
      <meta name="twitter:description" content={safeDescription} />
      <meta name="twitter:image" content={safeImage} />

      {/* Article dates */}
      {ogType === "article" && publishedTime && (
        <meta
          property="article:published_time"
          content={new Date(publishedTime).toISOString()}
        />
      )}
      {ogType === "article" && modifiedTime && (
        <meta
          property="article:modified_time"
          content={new Date(modifiedTime).toISOString()}
        />
      )}
      {ogType === "article" && (
        <meta property="article:author" content="Muhammad Shoukat" />
      )}

      {/* Structured Data (JSON-LD) */}
      {schemas.map((s, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
