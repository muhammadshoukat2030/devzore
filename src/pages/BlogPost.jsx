import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  ImageOff,
  Newspaper,
  RefreshCw,
} from "lucide-react";

import postService from "../services/postService";

// ======================================================
// CONFIG
// ======================================================

const BASE_URL = "https://devzore.com";

const PRODUCTION_API_URL =
  "https://devzore-backend.vercel.app";

const LOCAL_API_URL =
  "http://localhost:5000";

const BLOG_TITLE =
  "DevZore Blog | Software Development, SaaS, Web & SEO Insights";

const BLOG_DESCRIPTION =
  "Explore practical DevZore articles covering software development, web applications, SaaS products, mobile apps, SEO and digital business.";

// ======================================================
// BACKGROUNDS
// ======================================================

const lightGrid = {
  backgroundImage:
    "linear-gradient(rgba(7,25,35,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(7,25,35,0.045) 1px, transparent 1px)",

  backgroundSize:
    "48px 48px",
};

const darkGrid = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",

  backgroundSize:
    "52px 52px",
};

// ======================================================
// SECTION LABEL
// ======================================================

const SectionLabel = ({
  children,
  light = false,
}) => {
  return (
    <div
      className={`flex items-center gap-2.5 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase ${
        light
          ? "text-[#28c5d4]"
          : "text-[#07899a]"
      }`}
    >
      <span className="w-5 h-[2px] bg-[#0796A8]" />

      {children}
    </div>
  );
};

// ======================================================
// IMAGE API BASE
// ======================================================

const isLocalFrontend = () => {
  if (
    typeof window ===
    "undefined"
  ) {
    return false;
  }

  return [
    "localhost",
    "127.0.0.1",
  ].includes(
    window.location.hostname
  );
};

const getImageApiBase = () => {
  return isLocalFrontend()
    ? LOCAL_API_URL
    : PRODUCTION_API_URL;
};

// ======================================================
// EXTRACT GOOGLE DRIVE FILE ID
// ======================================================

const extractGoogleDriveFileId = (
  value = ""
) => {
  if (
    !value ||
    typeof value !== "string"
  ) {
    return "";
  }

  const url =
    value.trim();

  if (!url) {
    return "";
  }

  // --------------------------------------------------
  // DevZore backend proxy
  //
  // localhost:5000/api/upload/image/FILE_ID
  //
  // OR
  //
  // devzore-backend.vercel.app/api/upload/image/FILE_ID
  // --------------------------------------------------

  const proxyMatch =
    url.match(
      /\/api\/upload\/image\/([a-zA-Z0-9_-]+)/i
    );

  if (proxyMatch?.[1]) {
    return proxyMatch[1];
  }

  // --------------------------------------------------
  // Google Drive file URL
  //
  // drive.google.com/file/d/FILE_ID/view
  // --------------------------------------------------

  const driveFileMatch =
    url.match(
      /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/i
    );

  if (
    driveFileMatch?.[1]
  ) {
    return driveFileMatch[1];
  }

  // --------------------------------------------------
  // Google Drive / Google user content ?id=
  // --------------------------------------------------

  if (
    url.includes(
      "drive.google.com"
    ) ||
    url.includes(
      "drive.usercontent.google.com"
    )
  ) {
    const idMatch =
      url.match(
        /[?&]id=([a-zA-Z0-9_-]+)/i
      );

    if (idMatch?.[1]) {
      return idMatch[1];
    }
  }

  return "";
};

// ======================================================
// STABLE BACKEND IMAGE URL
// ======================================================

const createStableImageUrl = (
  fileId
) => {
  if (!fileId) {
    return "";
  }

  return `${getImageApiBase()}/api/upload/image/${encodeURIComponent(
    fileId
  )}`;
};

// ======================================================
// NORMALIZE IMAGE URL
// ======================================================

const normalizeImageUrl = (
  value = ""
) => {
  if (
    !value ||
    typeof value !== "string"
  ) {
    return "";
  }

  const url =
    value.trim();

  if (!url) {
    return "";
  }

  /*
   * Google Drive URL ya purana backend
   * proxy URL ho to file ID nikaal kar
   * current environment ka backend
   * image endpoint use karo.
   */

  const fileId =
    extractGoogleDriveFileId(
      url
    );

  if (fileId) {
    return createStableImageUrl(
      fileId
    );
  }

  /*
   * Relative backend image URL.
   */

  if (
    url.startsWith(
      "/api/upload/image/"
    )
  ) {
    return `${getImageApiBase()}${url}`;
  }

  /*
   * Normal external URL.
   */

  return url;
};

// ======================================================
// BLOG IMAGE
// ======================================================

const getBlogImageUrl = (
  post
) => {
  return normalizeImageUrl(
    post?.coverImage || ""
  );
};

// ======================================================
// CATEGORY
// ======================================================

const getCategoryName = (
  post
) => {
  if (
    post?.category &&
    typeof post.category ===
      "object"
  ) {
    return (
      post.category?.name?.trim() ||
      "Uncategorized"
    );
  }

  if (
    typeof post?.category ===
    "string"
  ) {
    return (
      post.category.trim() ||
      "Uncategorized"
    );
  }

  return "Uncategorized";
};

// ======================================================
// DATE
// ======================================================

const formatDate = (
  date
) => {
  if (!date) {
    return "";
  }

  const parsedDate =
    new Date(date);

  if (
    Number.isNaN(
      parsedDate.getTime()
    )
  ) {
    return "";
  }

  return parsedDate.toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
};

// ======================================================
// READ TIME
// ======================================================

const getReadTime = (
  post
) => {
  if (!post?.readTime) {
    return "";
  }

  const value =
    String(
      post.readTime
    ).trim();

  if (!value) {
    return "";
  }

  if (
    value
      .toLowerCase()
      .includes("read")
  ) {
    return value;
  }

  if (
    value
      .toLowerCase()
      .includes("min")
  ) {
    return `${value} read`;
  }

  return `${value} min read`;
};

// ======================================================
// POST KEY
// ======================================================

const getPostKey = (
  post,
  index
) => {
  return (
    post?._id ||
    post?.id ||
    post?.slug ||
    `blog-post-${index}`
  );
};

// ======================================================
// POST URL
// ======================================================

const getPostUrl = (
  post
) => {
  const slug =
    String(
      post?.slug || ""
    ).trim();

  if (!slug) {
    return null;
  }

  return `/blog/${encodeURIComponent(
    slug
  )}`;
};

// ======================================================
// SCROLL TOP
// ======================================================

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// ======================================================
// BLOG IMAGE COMPONENT
// ======================================================

const BlogImage = ({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  priority = false,
  iconSize = 28,
}) => {
  const [
    failed,
    setFailed,
  ] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (
    !src ||
    failed
  ) {
    return (
      <div
        className={`relative overflow-hidden bg-[#071923] ${wrapperClassName}`}
      >
        <div
          className="absolute inset-0 opacity-60"
          style={darkGrid}
        />

        <div className="absolute -top-20 right-[-70px] w-64 h-64 rounded-full bg-[#0796A8]/20 blur-[90px]" />

        <div className="relative z-10 flex h-full min-h-[68px] items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.05] text-[#28c5d4]">
              <ImageOff
                size={
                  iconSize
                }
              />
            </div>

            <span className="mt-2 hidden text-[9px] font-medium text-slate-500 sm:block">
              Image unavailable
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        wrapperClassName
      }
    >
      <img
        src={src}
        alt={
          alt ||
          "DevZore article"
        }
        className={
          className
        }
        loading={
          priority
            ? "eager"
            : "lazy"
        }
        fetchPriority={
          priority
            ? "high"
            : "auto"
        }
        decoding="async"
        onError={() =>
          setFailed(true)
        }
      />
    </div>
  );
};

// ======================================================
// MAIN COMPONENT
// ======================================================

const BlogPost = () => {
  const [
    activeCategory,
    setActiveCategory,
  ] = useState("All");

  const [
    allPosts,
    setAllPosts,
  ] = useState([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState("");

  const [
    retryKey,
    setRetryKey,
  ] = useState(0);

  // ====================================================
  // FETCH POSTS
  // ====================================================

  useEffect(() => {
    let mounted = true;

    const fetchPosts =
      async () => {
        try {
          setLoading(true);

          setError("");

          const response =
            await postService.getPosts(
              1,
              100
            );

          let posts = [];

          if (
            Array.isArray(
              response
            )
          ) {
            posts = response;
          } else if (
            Array.isArray(
              response?.data
            )
          ) {
            posts =
              response.data;
          } else if (
            Array.isArray(
              response?.data
                ?.posts
            )
          ) {
            posts =
              response.data.posts;
          } else if (
            Array.isArray(
              response?.posts
            )
          ) {
            posts =
              response.posts;
          }

          if (!mounted) {
            return;
          }

          const validPosts =
            posts.filter(
              (post) =>
                post &&
                typeof post ===
                  "object"
            );

          setAllPosts(
            validPosts
          );
        } catch (err) {
          console.error(
            "Fetch blog posts error:",
            err
          );

          if (!mounted) {
            return;
          }

          const message =
            err?.response?.data
              ?.message ||
            err?.message ||
            "Unable to load blog posts.";

          setError(
            message
          );

          setAllPosts([]);

          toast.error(
            "Could not load blog posts."
          );
        } finally {
          if (mounted) {
            setLoading(false);
          }
        }
      };

    fetchPosts();

    return () => {
      mounted = false;
    };
  }, [retryKey]);

  // ====================================================
  // SORT POSTS
  // ====================================================

  const sortedPosts =
    useMemo(() => {
      return [
        ...allPosts,
      ].sort(
        (a, b) => {
          const dateA =
            new Date(
              a?.publishedAt ||
                a?.createdAt ||
                0
            ).getTime();

          const dateB =
            new Date(
              b?.publishedAt ||
                b?.createdAt ||
                0
            ).getTime();

          const safeA =
            Number.isFinite(
              dateA
            )
              ? dateA
              : 0;

          const safeB =
            Number.isFinite(
              dateB
            )
              ? dateB
              : 0;

          return (
            safeB -
            safeA
          );
        }
      );
    }, [allPosts]);

  // ====================================================
  // CATEGORIES
  // ====================================================

  const categories =
    useMemo(() => {
      const names =
        sortedPosts
          .map((post) =>
            getCategoryName(
              post
            )
          )
          .filter(
            (category) =>
              category &&
              category.toLowerCase() !==
                "uncategorized"
          );

      return [
        "All",
        ...new Set(
          names
        ),
      ];
    }, [sortedPosts]);

  // ====================================================
  // FILTERED POSTS
  // ====================================================

  const filteredPosts =
    useMemo(() => {
      if (
        activeCategory ===
        "All"
      ) {
        return sortedPosts;
      }

      return sortedPosts.filter(
        (post) =>
          getCategoryName(
            post
          ) ===
          activeCategory
      );
    }, [
      sortedPosts,
      activeCategory,
    ]);

  // ====================================================
  // RESET CATEGORY
  // ====================================================

  useEffect(() => {
    if (
      !categories.includes(
        activeCategory
      )
    ) {
      setActiveCategory(
        "All"
      );
    }
  }, [
    categories,
    activeCategory,
  ]);

  // ====================================================
  // LAYOUT GROUPS
  // ====================================================

  const leadPost =
    filteredPosts[0] ||
    null;

  const secondaryPosts =
    filteredPosts.slice(
      1,
      4
    );

  const latestPosts =
    filteredPosts.slice(4);

  // ====================================================
  // SEO IMAGE
  // ====================================================

  const seoImage =
    leadPost
      ? getBlogImageUrl(
          leadPost
        )
      : "";

  // ====================================================
  // SCHEMA
  // ====================================================

  const blogSchema =
    useMemo(
      () => ({
        "@context":
          "https://schema.org",

        "@type":
          "Blog",

        "@id":
          `${BASE_URL}/blog#blog`,

        url:
          `${BASE_URL}/blog`,

        name:
          "DevZore Blog",

        description:
          BLOG_DESCRIPTION,

        publisher: {
          "@id":
            `${BASE_URL}/#organization`,
        },

        inLanguage:
          "en",
      }),
      []
    );

  const breadcrumbSchema =
    useMemo(
      () => ({
        "@context":
          "https://schema.org",

        "@type":
          "BreadcrumbList",

        itemListElement: [
          {
            "@type":
              "ListItem",

            position: 1,

            name:
              "Home",

            item:
              `${BASE_URL}/`,
          },

          {
            "@type":
              "ListItem",

            position: 2,

            name:
              "Blog",

            item:
              `${BASE_URL}/blog`,
          },
        ],
      }),
      []
    );

  const itemListSchema =
    useMemo(() => {
      if (
        sortedPosts.length ===
        0
      ) {
        return null;
      }

      const items =
        sortedPosts
          .filter(
            (post) =>
              post?.slug
          )
          .slice(
            0,
            20
          )
          .map(
            (
              post,
              index
            ) => ({
              "@type":
                "ListItem",

              position:
                index +
                1,

              name:
                post?.title ||
                "DevZore Article",

              url:
                `${BASE_URL}/blog/${encodeURIComponent(
                  post.slug
                )}`,
            })
          );

      if (
        items.length ===
        0
      ) {
        return null;
      }

      return {
        "@context":
          "https://schema.org",

        "@type":
          "ItemList",

        name:
          "DevZore Blog Articles",

        itemListElement:
          items,
      };
    }, [sortedPosts]);

  // ====================================================
  // LOADING
  // ====================================================

  if (loading) {
    return (
      <div
        className="min-h-screen bg-[#f7f9fa] text-[#071923] flex items-center justify-center antialiased"
        style={{
          fontFamily:
            '"Inter", "Segoe UI", Arial, Helvetica, sans-serif',
        }}
      >
        <div className="px-6 text-center">
          <div className="w-9 h-9 mx-auto mb-4 rounded-full border-[3px] border-slate-200 border-t-[#0796A8] animate-spin" />

          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
            Loading DevZore
            Journal
          </p>
        </div>
      </div>
    );
  }

  // ====================================================
  // UI
  // ====================================================

  return (
    <>
      {/* =================================================
          SEO
      ================================================= */}

      <Helmet>
        <html lang="en" />

        <title>
          {BLOG_TITLE}
        </title>

        <meta
          name="description"
          content={
            BLOG_DESCRIPTION
          }
        />

        <link
          rel="canonical"
          href={`${BASE_URL}/blog`}
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* OPEN GRAPH */}

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="DevZore"
        />

        <meta
          property="og:title"
          content={
            BLOG_TITLE
          }
        />

        <meta
          property="og:description"
          content={
            BLOG_DESCRIPTION
          }
        />

        <meta
          property="og:url"
          content={`${BASE_URL}/blog`}
        />

        <meta
          property="og:locale"
          content="en_US"
        />

        {seoImage && (
          <meta
            property="og:image"
            content={
              seoImage
            }
          />
        )}

        {/* TWITTER */}

        <meta
          name="twitter:card"
          content={
            seoImage
              ? "summary_large_image"
              : "summary"
          }
        />

        <meta
          name="twitter:title"
          content={
            BLOG_TITLE
          }
        />

        <meta
          name="twitter:description"
          content={
            BLOG_DESCRIPTION
          }
        />

        {seoImage && (
          <meta
            name="twitter:image"
            content={
              seoImage
            }
          />
        )}

        {/* STRUCTURED DATA */}

        <script type="application/ld+json">
          {JSON.stringify(
            blogSchema
          )}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(
            breadcrumbSchema
          )}
        </script>

        {itemListSchema && (
          <script type="application/ld+json">
            {JSON.stringify(
              itemListSchema
            )}
          </script>
        )}
      </Helmet>

      <div
        className="min-h-screen overflow-hidden bg-[#f7f9fa] text-[#071923] antialiased"
        style={{
          fontFamily:
            '"Inter", "Segoe UI", Arial, Helvetica, sans-serif',
        }}
      >
        {/* =================================================
            HERO
        ================================================= */}

        <section className="relative overflow-hidden bg-[#04111a] pt-23 sm:pt-24 lg:pt-21 pb-12 sm:pb-14">
          <div
            className="absolute inset-0 pointer-events-none opacity-65"
            style={darkGrid}
          />

          <div className="absolute -top-28 left-[12%] w-[340px] h-[340px] rounded-full bg-[#0796A8]/10 blur-[120px] pointer-events-none" />

          <div className="absolute top-12 right-[5%] w-[280px] h-[280px] rounded-full bg-[#18bdcb]/10 blur-[120px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_0.72fr] gap-8 lg:gap-12 items-end">
              {/* LEFT */}

              <div>
                <SectionLabel
                  light
                >
                  DevZore Journal
                </SectionLabel>

                <h1 className="mt-4 max-w-4xl text-[40px] sm:text-[48px] lg:text-[58px] xl:text-[53px] leading-[1.04] font-semibold tracking-[-0.045em] text-white">
                  Practical insights
                  for{" "}

                  <span className="text-[#28c5d4]">
                    modern digital
                    products.
                  </span>
                </h1>

                <p className="mt-4 max-w-3xl text-[13px] sm:text-[15px] leading-7 text-slate-300">
                  Explore practical
                  articles covering
                  software development,
                  web applications,
                  SaaS, mobile products,
                  SEO and digital
                  business.
                </p>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                  {[
                    "Software Development",
                    "Product Engineering",
                    "SEO Insights",
                    "Business Technology",
                  ].map(
                    (item) => (
                      <div
                        key={
                          item
                        }
                        className="flex items-center gap-2 text-[10px] sm:text-[11px] font-medium text-slate-400"
                      >
                        <CheckCircle2
                          size={13}
                          className="text-[#22bdca]"
                        />

                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* RIGHT */}

              <div className="hidden lg:block">
                <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5">
                  <div className="absolute -top-20 right-[-70px] w-60 h-60 rounded-full bg-[#0796A8]/10 blur-[90px]" />

                  <div className="relative">
                    <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-[#28c5d4]">
                          DevZore
                          Editorial
                        </p>

                        <p className="mt-1 text-[14px] font-semibold text-white">
                          Development ·
                          Product · Growth
                        </p>
                      </div>

                      <div className="w-10 h-10 rounded-xl bg-[#0796A8]/15 text-[#28c5d4] flex items-center justify-center">
                        <Newspaper
                          size={18}
                        />
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {[
                        [
                          "Guides",
                          "Practical",
                        ],
                        [
                          "Insights",
                          "Focused",
                        ],
                        [
                          "Topics",
                          "Modern",
                        ],
                        [
                          "Articles",
                          "Useful",
                        ],
                      ].map(
                        ([
                          title,
                          label,
                        ]) => (
                          <div
                            key={
                              title
                            }
                            className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4"
                          >
                            <p className="text-[9px] text-slate-500">
                              {label}
                            </p>

                            <p className="mt-1 text-[13px] font-semibold text-white">
                              {title}
                            </p>

                            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
                              <div className="w-[68%] h-full rounded-full bg-gradient-to-r from-[#0796A8] to-[#22bdca]" />
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            CATEGORY NAV
        ================================================= */}

        {!error &&
          categories.length >
            1 && (
            <section className="border-b border-slate-200 bg-white">
              <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 overflow-x-auto">
                <nav
                  aria-label="Blog categories"
                  className="flex min-w-max items-center"
                >
                  {categories.map(
                    (
                      category
                    ) => {
                      const active =
                        activeCategory ===
                        category;

                      return (
                        <button
                          key={
                            category
                          }
                          type="button"
                          aria-pressed={
                            active
                          }
                          onClick={() =>
                            setActiveCategory(
                              category
                            )
                          }
                          className={`relative px-4 sm:px-5 py-4 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors ${
                            active
                              ? "text-[#071923]"
                              : "text-slate-400 hover:text-[#07899a]"
                          }`}
                        >
                          {
                            category
                          }

                          {active && (
                            <span className="absolute left-4 right-4 bottom-0 h-[2px] bg-[#0796A8]" />
                          )}
                        </button>
                      );
                    }
                  )}
                </nav>
              </div>
            </section>
          )}

        {/* =================================================
            FEATURED AREA
        ================================================= */}

        <section
          className="relative py-10 md:py-12"
          style={lightGrid}
        >
          <div className="absolute inset-0 bg-[#f7f9fa]/95 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            {/* ERROR */}

            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5 sm:p-6">
                <h2 className="text-[16px] font-semibold text-red-700">
                  Unable to load
                  articles
                </h2>

                <p className="mt-2 text-[12px] sm:text-[13px] leading-6 text-slate-600">
                  {error}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setRetryKey(
                      (
                        current
                      ) =>
                        current +
                        1
                    )
                  }
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#071923] px-4 py-2.5 text-[11px] font-semibold text-white transition-colors hover:bg-[#0b2633]"
                >
                  <RefreshCw
                    size={13}
                  />

                  Try Again
                </button>
              </div>
            )}

            {/* EMPTY */}

            {!error &&
              filteredPosts.length ===
                0 && (
                <div className="rounded-2xl border border-slate-200 bg-white py-12 px-5 text-center">
                  <div className="w-11 h-11 mx-auto rounded-xl bg-[#0796A8]/10 text-[#07899a] flex items-center justify-center">
                    <FileText
                      size={20}
                    />
                  </div>

                  <h2 className="mt-4 text-[18px] font-semibold text-[#071923]">
                    No articles
                    found
                  </h2>

                  <p className="mt-2 text-[12px] leading-6 text-slate-500">
                    {activeCategory ===
                    "All"
                      ? "Published articles will appear here."
                      : `There are currently no articles in ${activeCategory}.`}
                  </p>

                  {activeCategory !==
                    "All" && (
                    <button
                      type="button"
                      onClick={() =>
                        setActiveCategory(
                          "All"
                        )
                      }
                      className="mt-4 text-[10px] font-semibold text-[#07899a]"
                    >
                      View all
                      articles
                    </button>
                  )}
                </div>
              )}

            {/* FEATURED */}

            {!error &&
              leadPost && (
                <>
                  <div className="flex items-end justify-between gap-4 mb-6">
                    <div>
                      <SectionLabel>
                        Featured
                        Article
                      </SectionLabel>

                      <h2 className="mt-3 text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] font-semibold tracking-[-0.035em] text-[#071923]">
                        Latest from
                        the{" "}

                        <span className="text-[#07899a]">
                          DevZore
                          Journal.
                        </span>
                      </h2>
                    </div>

                    <span className="hidden sm:block text-[10px] font-semibold text-slate-400">
                      {
                        filteredPosts.length
                      }{" "}
                      {filteredPosts.length ===
                      1
                        ? "ARTICLE"
                        : "ARTICLES"}
                    </span>
                  </div>

                  <div className="grid lg:grid-cols-[1.65fr_0.75fr] gap-5 lg:gap-6">
                    {/* MAIN */}

                    <article>
                      <PostLink
                        post={
                          leadPost
                        }
                        getPostUrl={
                          getPostUrl
                        }
                        onClick={
                          scrollTop
                        }
                        className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#0796A8]/40 hover:shadow-[0_18px_50px_rgba(7,25,35,0.08)]"
                      >
                        <div className="relative">
                          <BlogImage
                            src={getBlogImageUrl(
                              leadPost
                            )}
                            alt={
                              leadPost?.coverImageAlt ||
                              leadPost?.title ||
                              "DevZore article"
                            }
                            priority
                            iconSize={
                              22
                            }
                            wrapperClassName="w-full h-[220px] sm:h-[320px] lg:h-[390px] overflow-hidden bg-[#071923]"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                          />

                          <span className="absolute top-4 left-4 rounded-lg bg-[#071923]/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#28c5d4] backdrop-blur-sm">
                            {getCategoryName(
                              leadPost
                            )}
                          </span>
                        </div>

                        <div className="p-5 sm:p-6">
                          <h2 className="text-[23px] sm:text-[29px] lg:text-[34px] leading-[1.12] font-semibold tracking-[-0.035em] text-[#071923] transition-colors group-hover:text-[#07899a]">
                            {leadPost?.title ||
                              "Untitled Article"}
                          </h2>

                          {leadPost?.excerpt && (
                            <p className="mt-3 max-w-3xl text-[12px] sm:text-[13px] leading-6 text-slate-600">
                              {
                                leadPost.excerpt
                              }
                            </p>
                          )}

                          <div className="mt-4 flex items-center justify-between gap-4">
                            <ArticleMeta
                              post={
                                leadPost
                              }
                            />

                            <span className="hidden sm:inline-flex items-center gap-2 text-[10px] font-semibold text-[#07899a]">
                              Read Article

                              <ArrowRight
                                size={12}
                                className="transition-transform group-hover:translate-x-1"
                              />
                            </span>
                          </div>
                        </div>
                      </PostLink>
                    </article>

                    {/* SECONDARY */}

                    {secondaryPosts.length >
                      0 && (
                      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white self-start">
                        <div className="px-5 py-4 border-b border-slate-200">
                          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#07899a]">
                            Latest
                            Articles
                          </p>
                        </div>

                        {secondaryPosts.map(
                          (
                            post,
                            index
                          ) => (
                            <SecondaryStory
                              key={getPostKey(
                                post,
                                index
                              )}
                              post={
                                post
                              }
                            />
                          )
                        )}
                      </div>
                    )}
                  </div>
                </>
              )}
          </div>
        </section>

        {/* =================================================
            MORE ARTICLES
        ================================================= */}

        {!error &&
          latestPosts.length >
            0 && (
            <section className="py-10 md:py-12 bg-white border-y border-slate-200">
              <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between gap-4 mb-7">
                  <div>
                    <SectionLabel>
                      More Insights
                    </SectionLabel>

                    <h2 className="mt-3 text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] font-semibold tracking-[-0.035em] text-[#071923]">
                      More from{" "}

                      <span className="text-[#07899a]">
                        DevZore.
                      </span>
                    </h2>
                  </div>

                  <span className="hidden sm:block text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    {
                      activeCategory
                    }
                  </span>
                </div>

                <div className="border-t border-slate-200">
                  {latestPosts.map(
                    (
                      post,
                      index
                    ) => (
                      <NewsRow
                        key={getPostKey(
                          post,
                          index
                        )}
                        post={
                          post
                        }
                      />
                    )
                  )}
                </div>
              </div>
            </section>
          )}

        {/* =================================================
            FEW POSTS
        ================================================= */}

        {!error &&
          filteredPosts.length >
            0 &&
          latestPosts.length ===
            0 && (
            <section className="pb-10 bg-[#f7f9fa]">
              <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="border-t border-slate-200 pt-5">
                  <p className="text-[11px] text-slate-500">
                    More articles
                    will appear here
                    as they are
                    published.
                  </p>
                </div>
              </div>
            </section>
          )}

        {/* =================================================
            WHY WE PUBLISH
        ================================================= */}

        {!error &&
          allPosts.length >
            0 && (
            <section className="relative overflow-hidden bg-[#071923] py-10 md:py-12">
              <div
                className="absolute inset-0 pointer-events-none opacity-60"
                style={
                  darkGrid
                }
              />

              <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#0796A8]/10 blur-[120px]" />

              <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 items-center">
                  <div>
                    <SectionLabel
                      light
                    >
                      Why We
                      Publish
                    </SectionLabel>

                    <h2 className="mt-3 text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] font-semibold tracking-[-0.035em] text-white">
                      Useful insights
                      for better{" "}

                      <span className="text-[#28c5d4]">
                        digital
                        decisions.
                      </span>
                    </h2>

                    <p className="mt-4 text-[12px] sm:text-[13px] leading-6 text-slate-400">
                      The DevZore
                      Journal focuses
                      on practical
                      development,
                      product and
                      digital-growth
                      topics that help
                      businesses
                      understand how
                      modern digital
                      products are
                      planned, built
                      and improved.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      {
                        title:
                          "Practical Development",

                        text:
                          "Understand common development decisions, workflows and product considerations.",
                      },

                      {
                        title:
                          "Product Thinking",

                        text:
                          "Explore SaaS, MVP, web and mobile product planning from a business perspective.",
                      },

                      {
                        title:
                          "Search & Growth",

                        text:
                          "Learn about technical SEO, performance and improving digital visibility.",
                      },

                      {
                        title:
                          "Business Technology",

                        text:
                          "See how software can support real operations, customers and business workflows.",
                      },
                    ].map(
                      (
                        item
                      ) => (
                        <div
                          key={
                            item.title
                          }
                          className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5"
                        >
                          <div className="w-9 h-9 rounded-xl bg-[#0796A8]/15 text-[#28c5d4] flex items-center justify-center">
                            <CheckCircle2
                              size={16}
                            />
                          </div>

                          <h3 className="mt-4 text-[14px] font-semibold text-white">
                            {
                              item.title
                            }
                          </h3>

                          <p className="mt-2 text-[11px] leading-5 text-slate-400">
                            {
                              item.text
                            }
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}

        {/* =================================================
            RESOURCES
        ================================================= */}

        {!error &&
          allPosts.length >
            0 && (
            <section className="py-10 md:py-12 bg-[#f7f9fa]">
              <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="mb-7">
                  <SectionLabel>
                    Explore More
                  </SectionLabel>

                  <h2 className="mt-3 text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] font-semibold tracking-[-0.035em] text-[#071923]">
                    Continue
                    exploring{" "}

                    <span className="text-[#07899a]">
                      DevZore
                      resources.
                    </span>
                  </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    {
                      title:
                        "Development Guides",

                      description:
                        "Explore practical guides covering websites, applications, SaaS, mobile products and development decisions.",

                      path:
                        "/guides",
                    },

                    {
                      title:
                        "Frequently Asked Questions",

                      description:
                        "Find answers about DevZore services, project workflows, development and support.",

                      path:
                        "/faqs",
                    },

                    {
                      title:
                        "Software Services",

                      description:
                        "Explore development services for businesses, startups and modern digital products.",

                      path:
                        "/allservices",
                    },
                  ].map(
                    (
                      item,
                      index
                    ) => (
                      <Link
                        key={
                          item.path
                        }
                        to={
                          item.path
                        }
                        onClick={
                          scrollTop
                        }
                        className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0796A8]/40 hover:shadow-[0_18px_50px_rgba(7,25,35,0.08)]"
                      >
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#071923] to-[#18bdcb]" />

                        <div className="flex items-start justify-between">
                          <div className="w-10 h-10 rounded-xl bg-[#f0f4f5] text-[#075f70] flex items-center justify-center">
                            <FileText
                              size={17}
                            />
                          </div>

                          <span className="text-[10px] font-semibold text-slate-300">
                            {String(
                              index +
                                1
                            ).padStart(
                              2,
                              "0"
                            )}
                          </span>
                        </div>

                        <h3 className="mt-4 text-[16px] leading-6 font-semibold text-[#071923]">
                          {
                            item.title
                          }
                        </h3>

                        <p className="mt-2 text-[12px] leading-5 text-slate-600">
                          {
                            item.description
                          }
                        </p>

                        <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold text-[#07899a]">
                          Explore

                          <ArrowRight
                            size={12}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </span>
                      </Link>
                    )
                  )}
                </div>
              </div>
            </section>
          )}

        {/* =================================================
            CTA
        ================================================= */}

        {!error &&
          allPosts.length >
            0 && (
            <section className="pb-10 md:pb-12 bg-[#f7f9fa]">
              <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-2xl bg-[#071923] px-5 sm:px-7 py-7 sm:py-8">
                  <div
                    className="absolute inset-0 pointer-events-none opacity-60"
                    style={
                      darkGrid
                    }
                  />

                  <div className="absolute -top-24 right-[-80px] h-72 w-72 rounded-full bg-[#0796A8]/15 blur-[100px]" />

                  <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                    <div className="max-w-2xl">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#28c5d4]">
                        Work With
                        DevZore
                      </p>

                      <h2 className="mt-2 text-[24px] sm:text-[30px] leading-tight font-semibold tracking-[-0.03em] text-white">
                        Planning a
                        software or
                        digital
                        product?
                      </h2>

                      <p className="mt-2 text-[12px] sm:text-[13px] leading-6 text-slate-400">
                        Tell us what
                        you want to
                        build and we
                        can discuss
                        your
                        requirements,
                        product goals
                        and the
                        appropriate
                        development
                        approach.
                      </p>
                    </div>

                    <Link
                      to="/contact"
                      onClick={
                        scrollTop
                      }
                      className="group shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-[11px] font-semibold text-[#071923] transition-all hover:-translate-y-0.5 hover:bg-slate-100"
                    >
                      Discuss Your
                      Project

                      <ArrowRight
                        size={13}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}
      </div>
    </>
  );
};

// ======================================================
// SAFE POST LINK
// ======================================================

const PostLink = ({
  post,
  getPostUrl,
  className = "",
  onClick,
  children,
}) => {
  const url =
    getPostUrl(post);

  if (!url) {
    return (
      <div
        className={
          className
        }
      >
        {children}
      </div>
    );
  }

  return (
    <Link
      to={url}
      onClick={onClick}
      className={
        className
      }
    >
      {children}
    </Link>
  );
};

// ======================================================
// ARTICLE META
// ======================================================

const ArticleMeta = ({
  post,
}) => {
  const publishedDate =
    formatDate(
      post?.publishedAt ||
        post?.createdAt
    );

  const readTime =
    getReadTime(post);

  if (
    !publishedDate &&
    !readTime
  ) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] sm:text-[10px] font-semibold text-slate-400">
      {publishedDate && (
        <span className="flex items-center gap-1.5">
          <CalendarDays
            size={11}
          />

          {publishedDate}
        </span>
      )}

      {readTime && (
        <span className="flex items-center gap-1.5">
          <Clock3
            size={11}
          />

          {readTime}
        </span>
      )}
    </div>
  );
};

// ======================================================
// SECONDARY STORY
// ======================================================

const SecondaryStory = ({
  post,
}) => {
  const publishedDate =
    formatDate(
      post?.publishedAt ||
        post?.createdAt
    );

  return (
    <article className="border-b border-slate-200 last:border-b-0">
      <PostLink
        post={post}
        getPostUrl={
          getPostUrl
        }
        onClick={
          scrollTop
        }
        className="group block p-4 sm:p-5 transition-colors hover:bg-[#f7f9fa]"
      >
        <div className="grid grid-cols-[1fr_92px] gap-4 items-center">
          <div className="min-w-0">
            <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#07899a]">
              {getCategoryName(
                post
              )}
            </span>

            <h3 className="mt-1.5 text-[13px] sm:text-[14px] leading-5 font-semibold text-[#071923] transition-colors group-hover:text-[#07899a] line-clamp-3">
              {post?.title ||
                "Untitled Article"}
            </h3>

            {publishedDate && (
              <span className="mt-2 block text-[9px] text-slate-400">
                {publishedDate}
              </span>
            )}
          </div>

          <BlogImage
            src={getBlogImageUrl(
              post
            )}
            alt={
              post?.coverImageAlt ||
              post?.title ||
              "Article"
            }
            iconSize={14}
            wrapperClassName="w-full h-[68px] overflow-hidden rounded-lg bg-[#071923]"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </PostLink>
    </article>
  );
};

// ======================================================
// NEWS ROW
// ======================================================

const NewsRow = ({
  post,
}) => {
  const publishedDate =
    formatDate(
      post?.publishedAt ||
        post?.createdAt
    );

  const readTime =
    getReadTime(post);

  return (
    <article className="border-b border-slate-200">
      <PostLink
        post={post}
        getPostUrl={
          getPostUrl
        }
        onClick={
          scrollTop
        }
        className="group block w-full py-5"
      >
        <div className="grid grid-cols-[105px_1fr] sm:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr] gap-4 sm:gap-6 items-center">
          <BlogImage
            src={getBlogImageUrl(
              post
            )}
            alt={
              post?.coverImageAlt ||
              post?.title ||
              "DevZore article"
            }
            iconSize={17}
            wrapperClassName="w-full h-[78px] sm:h-[112px] lg:h-[125px] overflow-hidden rounded-xl bg-[#071923]"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />

          <div className="min-w-0">
            <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.14em] text-[#07899a]">
              {getCategoryName(
                post
              )}
            </span>

            <h3 className="mt-1.5 text-[15px] sm:text-[19px] lg:text-[21px] leading-tight font-semibold tracking-[-0.025em] text-[#071923] transition-colors group-hover:text-[#07899a]">
              {post?.title ||
                "Untitled Article"}
            </h3>

            {post?.excerpt && (
              <p className="hidden sm:block mt-2 max-w-3xl text-[11px] sm:text-[12px] leading-5 text-slate-600 line-clamp-2">
                {
                  post.excerpt
                }
              </p>
            )}

            <div className="mt-3 flex items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3 text-[8px] sm:text-[9px] text-slate-400">
                {publishedDate && (
                  <span className="flex items-center gap-1">
                    <CalendarDays
                      size={9}
                    />

                    {
                      publishedDate
                    }
                  </span>
                )}

                {readTime && (
                  <span className="hidden sm:flex items-center gap-1">
                    <Clock3
                      size={9}
                    />

                    {readTime}
                  </span>
                )}
              </div>

              <ChevronRight
                size={15}
                className="shrink-0 text-[#07899a] transition-transform group-hover:translate-x-1"
              />
            </div>
          </div>
        </div>
      </PostLink>
    </article>
  );
};

// ======================================================
// EXPORT
// ======================================================

export default BlogPost;