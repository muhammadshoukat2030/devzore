import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  FileText,
  RefreshCw,
  ChevronRight,
  Newspaper,
} from "lucide-react";

import postService from "../services/postService";

const BASE_URL = "https://devzore.com";

const BlogPost = ({ isDark = true }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ======================================================
  // FETCH POSTS
  // ======================================================

  useEffect(() => {
    let isMounted = true;

    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await postService.getPosts();

        let posts = [];

        if (Array.isArray(response)) {
          posts = response;
        } else if (Array.isArray(response?.data)) {
          posts = response.data;
        } else if (Array.isArray(response?.data?.posts)) {
          posts = response.data.posts;
        } else if (Array.isArray(response?.posts)) {
          posts = response.posts;
        }

        if (!isMounted) return;

        setAllPosts(posts);
      } catch (err) {
        console.error("Fetch blog posts error:", err);

        if (!isMounted) return;

        const message =
          err?.response?.data?.message ||
          err?.message ||
          "Failed to load blog posts.";

        setError(message);
        setAllPosts([]);

        toast.error("Could not load blog posts.");
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  // ======================================================
  // HELPERS
  // ======================================================

  const getCategoryName = (post) => {
    if (post?.category && typeof post.category === "object") {
      return post.category?.name?.trim() || "Uncategorized";
    }

    if (typeof post?.category === "string") {
      return post.category.trim() || "Uncategorized";
    }

    return "Uncategorized";
  };

  const formatDate = (date) => {
    if (!date) return "";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "";
    }

    return parsedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getReadTime = (post) => {
    if (!post?.readTime) return "";

    const value = String(post.readTime).trim();

    if (!value) return "";

    if (value.toLowerCase().includes("read")) {
      return value;
    }

    if (value.toLowerCase().includes("min")) {
      return `${value} read`;
    }

    return `${value} min read`;
  };

  const getPostKey = (post, index) =>
    post?._id ||
    post?.id ||
    post?.slug ||
    `blog-post-${index}`;

  const getPostUrl = (post) => {
    const slug = post?.slug?.trim();

    if (!slug) return null;

    return `/blog/${encodeURIComponent(slug)}`;
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ======================================================
  // SORT POSTS
  // ======================================================

  const sortedPosts = useMemo(() => {
    return [...allPosts].sort((a, b) => {
      const dateA = new Date(
        a?.publishedAt || a?.createdAt || 0
      ).getTime();

      const dateB = new Date(
        b?.publishedAt || b?.createdAt || 0
      ).getTime();

      return dateB - dateA;
    });
  }, [allPosts]);

  // ======================================================
  // CATEGORIES
  // ======================================================

  const categories = useMemo(() => {
    const names = sortedPosts
      .map((post) => getCategoryName(post))
      .filter(
        (category) =>
          category &&
          category.toLowerCase() !== "uncategorized"
      );

    return ["All", ...new Set(names)];
  }, [sortedPosts]);

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") {
      return sortedPosts;
    }

    return sortedPosts.filter(
      (post) => getCategoryName(post) === activeCategory
    );
  }, [sortedPosts, activeCategory]);

  useEffect(() => {
    if (!categories.includes(activeCategory)) {
      setActiveCategory("All");
    }
  }, [categories, activeCategory]);

  // ======================================================
  // LOADING
  // ======================================================

  if (loading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          isDark
            ? "bg-[#050505] text-white"
            : "bg-[#f8f8f8] text-slate-950"
        }`}
      >
        <div className="text-center px-6">
          <div
            className={`w-9 h-9 rounded-full border-[3px] mx-auto mb-4 animate-spin ${
              isDark
                ? "border-white/10 border-t-purple-500"
                : "border-slate-200 border-t-purple-600"
            }`}
          />

          <p
            className={`text-[10px] font-black uppercase tracking-[0.14em] ${
              isDark ? "text-gray-500" : "text-slate-500"
            }`}
          >
            Loading DevZore Journal
          </p>
        </div>
      </div>
    );
  }

  const leadPost = filteredPosts[0] || null;
  const secondaryPosts = filteredPosts.slice(1, 4);
  const latestPosts = filteredPosts.slice(4);

  // ======================================================
  // SCHEMA
  // ======================================================

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${BASE_URL}/blog#blog`,
    url: `${BASE_URL}/blog`,
    name: "DevZore Blog",
    description:
      "Software development, web development, SaaS, SEO and digital technology articles from DevZore.",
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${BASE_URL}/blog`,
      },
    ],
  };

  // ======================================================
  // MAIN
  // ======================================================

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div
        className={`min-h-screen transition-colors duration-300 ${
          isDark
            ? "bg-[#050505] text-white"
            : "bg-[#f8f8f8] text-slate-950"
        }`}
      >
        {/* ==================================================
            JOURNAL HEADER
        ================================================== */}

        <header
          className={`pt-24 sm:pt-28 border-b ${
            isDark
              ? "bg-[#080808] border-white/[0.08]"
              : "bg-white border-slate-200"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 pb-6 sm:pb-7">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-[3px] bg-purple-600" />

                  <span className="text-purple-500 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em]">
                    DevZore Editorial
                  </span>
                </div>

                <h1
                  className={`text-4xl sm:text-5xl lg:text-[54px] leading-none font-black tracking-[-0.04em] ${
                    isDark ? "text-white" : "text-slate-950"
                  }`}
                >
                  DevZore Journal
                </h1>

                <p
                  className={`mt-4 max-w-2xl text-sm sm:text-base leading-relaxed ${
                    isDark ? "text-gray-400" : "text-slate-600"
                  }`}
                >
                  Practical articles on software development,
                  web technologies, SaaS, mobile applications,
                  SEO and digital business.
                </p>
              </div>

              <div
                className={`flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.12em] ${
                  isDark ? "text-gray-500" : "text-slate-500"
                }`}
              >
                <Newspaper
                  size={14}
                  className="text-purple-500"
                />

                <span>
                  Technology · Development · Business
                </span>
              </div>
            </div>
          </div>

          {/* CATEGORY BAR */}

          <nav
            aria-label="Blog categories"
            className={`border-t ${
              isDark
                ? "border-white/[0.07] bg-[#0b0b0b]"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
              <div className="flex items-center min-w-max">
                {categories.map((category) => {
                  const active =
                    activeCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() =>
                        setActiveCategory(category)
                      }
                      className={`relative px-4 sm:px-5 py-3.5 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.1em] transition-colors ${
                        active
                          ? isDark
                            ? "text-white"
                            : "text-slate-950"
                          : isDark
                            ? "text-gray-500 hover:text-white"
                            : "text-slate-500 hover:text-slate-950"
                      }`}
                    >
                      {category}

                      {active && (
                        <span className="absolute bottom-0 left-4 right-4 h-[3px] bg-purple-600" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </nav>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-9">
          {/* ==================================================
              ERROR
          ================================================== */}

          {error && (
            <section
              className={`p-5 border mb-8 ${
                isDark
                  ? "bg-red-500/[0.05] border-red-500/20"
                  : "bg-red-50 border-red-200"
              }`}
            >
              <h2
                className={`text-base font-black mb-2 ${
                  isDark
                    ? "text-red-400"
                    : "text-red-700"
                }`}
              >
                Unable to load articles
              </h2>

              <p
                className={`text-sm mb-4 ${
                  isDark
                    ? "text-gray-400"
                    : "text-slate-600"
                }`}
              >
                {error}
              </p>

              <button
                type="button"
                onClick={() =>
                  window.location.reload()
                }
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-colors"
              >
                <RefreshCw size={13} />
                Try Again
              </button>
            </section>
          )}

          {/* ==================================================
              EMPTY
          ================================================== */}

          {!error && filteredPosts.length === 0 && (
            <section
              className={`text-center py-16 border ${
                isDark
                  ? "bg-[#080808] border-white/[0.08]"
                  : "bg-white border-slate-200"
              }`}
            >
              <FileText
                size={30}
                className="mx-auto mb-4 text-purple-500"
              />

              <h2
                className={`text-xl font-black mb-2 ${
                  isDark
                    ? "text-white"
                    : "text-slate-950"
                }`}
              >
                No articles found
              </h2>

              <p
                className={`text-sm ${
                  isDark
                    ? "text-gray-500"
                    : "text-slate-500"
                }`}
              >
                {activeCategory === "All"
                  ? "Published articles will appear here."
                  : `There are currently no articles in ${activeCategory}.`}
              </p>
            </section>
          )}

          {/* ==================================================
              FEATURED
          ================================================== */}

          {!error && leadPost && (
            <>
              <div
                className={`flex items-center justify-between border-b-2 pb-3 mb-5 ${
                  isDark
                    ? "border-white"
                    : "border-slate-950"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Newspaper
                    size={15}
                    className="text-purple-500"
                  />

                  <h2
                    className={`text-sm sm:text-base font-black uppercase tracking-[0.08em] ${
                      isDark
                        ? "text-white"
                        : "text-slate-950"
                    }`}
                  >
                    Featured
                  </h2>
                </div>

                <span
                  className={`text-[9px] font-bold ${
                    isDark
                      ? "text-gray-600"
                      : "text-slate-400"
                  }`}
                >
                  {filteredPosts.length}{" "}
                  {filteredPosts.length === 1
                    ? "ARTICLE"
                    : "ARTICLES"}
                </span>
              </div>

              <section className="grid lg:grid-cols-12 gap-0 lg:gap-6 mb-10 sm:mb-12">
                {/* LEAD STORY */}

                <article
                  className={`lg:col-span-8 lg:pr-6 lg:border-r ${
                    isDark
                      ? "lg:border-white/[0.08]"
                      : "lg:border-slate-200"
                  }`}
                >
                  <PostLink
                    post={leadPost}
                    getPostUrl={getPostUrl}
                    className="group block w-full"
                    onClick={scrollTop}
                  >
                    <div
                      className={`relative w-full h-[210px] sm:h-[330px] lg:h-[390px] overflow-hidden mb-5 ${
                        isDark
                          ? "bg-[#111]"
                          : "bg-slate-200"
                      }`}
                    >
                      {leadPost?.coverImage ? (
                        <img
                          src={leadPost.coverImage}
                          alt={
                            leadPost?.coverImageAlt ||
                            leadPost?.title ||
                            "DevZore article"
                          }
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          decoding="async"
                          fetchPriority="high"
                          onError={(event) => {
                            event.currentTarget.style.display =
                              "none";
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-purple-800 to-slate-950 flex items-center justify-center">
                          <Newspaper
                            size={50}
                            className="text-white/30"
                          />
                        </div>
                      )}

                      <div className="absolute top-0 left-0 bg-purple-600 text-white px-3 py-2 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.12em]">
                        {getCategoryName(leadPost)}
                      </div>
                    </div>

                    <div className="max-w-4xl">
                      <h2
                        className={`text-2xl sm:text-3xl lg:text-[36px] font-black tracking-[-0.025em] leading-[1.08] mb-3 transition-colors group-hover:text-purple-500 ${
                          isDark
                            ? "text-white"
                            : "text-slate-950"
                        }`}
                      >
                        {leadPost?.title ||
                          "Untitled Article"}
                      </h2>

                      {leadPost?.excerpt && (
                        <p
                          className={`text-sm sm:text-base leading-relaxed mb-4 max-w-3xl ${
                            isDark
                              ? "text-gray-400"
                              : "text-slate-600"
                          }`}
                        >
                          {leadPost.excerpt}
                        </p>
                      )}

                      <ArticleMeta
                        post={leadPost}
                        isDark={isDark}
                        formatDate={formatDate}
                        getReadTime={getReadTime}
                      />
                    </div>
                  </PostLink>
                </article>

                {/* SECONDARY STORIES */}

                {secondaryPosts.length > 0 && (
                  <div className="lg:col-span-4 mt-8 lg:mt-0">
                    <div
                      className={`border-b pb-3 mb-1 ${
                        isDark
                          ? "border-white/[0.08]"
                          : "border-slate-200"
                      }`}
                    >
                      <span className="text-[9px] font-black uppercase tracking-[0.15em] text-purple-500">
                        Latest
                      </span>
                    </div>

                    {secondaryPosts.map(
                      (post, index) => (
                        <SecondaryStory
                          key={getPostKey(
                            post,
                            index
                          )}
                          post={post}
                          isDark={isDark}
                          formatDate={formatDate}
                          getCategoryName={
                            getCategoryName
                          }
                          getPostUrl={getPostUrl}
                          scrollTop={scrollTop}
                        />
                      )
                    )}
                  </div>
                )}
              </section>
            </>
          )}

          {/* ==================================================
              MORE ARTICLES
          ================================================== */}

          {!error && latestPosts.length > 0 && (
            <section>
              <div
                className={`flex items-center justify-between border-b-2 pb-3 mb-1 ${
                  isDark
                    ? "border-white"
                    : "border-slate-950"
                }`}
              >
                <h2
                  className={`text-sm sm:text-base font-black uppercase tracking-[0.08em] ${
                    isDark
                      ? "text-white"
                      : "text-slate-950"
                  }`}
                >
                  More From DevZore
                </h2>

                <span className="text-purple-500 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.15em]">
                  {activeCategory}
                </span>
              </div>

              <div>
                {latestPosts.map((post, index) => (
                  <NewsRow
                    key={getPostKey(post, index)}
                    post={post}
                    isDark={isDark}
                    formatDate={formatDate}
                    getReadTime={getReadTime}
                    getCategoryName={
                      getCategoryName
                    }
                    getPostUrl={getPostUrl}
                    scrollTop={scrollTop}
                  />
                ))}
              </div>
            </section>
          )}

          {/* ==================================================
              FEW POSTS
          ================================================== */}

          {!error &&
            filteredPosts.length > 0 &&
            latestPosts.length === 0 && (
              <div
                className={`mt-9 pt-5 border-t ${
                  isDark
                    ? "border-white/[0.08]"
                    : "border-slate-200"
                }`}
              >
                <p
                  className={`text-xs ${
                    isDark
                      ? "text-gray-600"
                      : "text-slate-500"
                  }`}
                >
                  More articles will appear here as
                  they are published.
                </p>
              </div>
            )}

          {/* ==================================================
              CTA
          ================================================== */}

          {!error && allPosts.length > 0 && (
            <section
              className={`mt-12 sm:mt-14 border-t-4 border-purple-600 ${
                isDark
                  ? "bg-[#0a0a0a]"
                  : "bg-white border-x border-b border-slate-200"
              }`}
            >
              <div className="grid lg:grid-cols-12">
                <div className="lg:col-span-8 p-5 sm:p-7 lg:p-8">
                  <span className="text-purple-500 text-[9px] font-black uppercase tracking-[0.18em]">
                    Work With DevZore
                  </span>

                  <h2
                    className={`text-2xl sm:text-3xl font-black tracking-tight mt-2 mb-3 ${
                      isDark
                        ? "text-white"
                        : "text-slate-950"
                    }`}
                  >
                    Planning a software or digital
                    product?
                  </h2>

                  <p
                    className={`text-sm leading-relaxed max-w-2xl ${
                      isDark
                        ? "text-gray-400"
                        : "text-slate-600"
                    }`}
                  >
                    Discuss web development, mobile
                    applications, SaaS products,
                    backend systems, SEO or digital
                    marketing requirements with the
                    DevZore team.
                  </p>
                </div>

                <div
                  className={`lg:col-span-4 p-5 sm:p-7 lg:p-8 flex items-center lg:justify-end border-t lg:border-t-0 lg:border-l ${
                    isDark
                      ? "border-white/[0.08]"
                      : "border-slate-200"
                  }`}
                >
                  <Link
                    to="/contact"
                    onClick={scrollTop}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white text-[10px] font-black uppercase tracking-[0.08em] transition-colors"
                  >
                    Discuss Your Project
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </section>
          )}
        </div>
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
  const url = getPostUrl(post);

  if (!url) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <Link
      to={url}
      onClick={onClick}
      className={className}
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
  isDark,
  formatDate,
  getReadTime,
}) => {
  const publishedDate = formatDate(
    post?.publishedAt || post?.createdAt
  );

  const readTime = getReadTime(post);

  if (!publishedDate && !readTime) {
    return null;
  }

  return (
    <div
      className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.08em] ${
        isDark
          ? "text-gray-600"
          : "text-slate-500"
      }`}
    >
      {publishedDate && (
        <span className="flex items-center gap-1.5">
          <CalendarDays size={11} />
          {publishedDate}
        </span>
      )}

      {readTime && (
        <span className="flex items-center gap-1.5">
          <Clock3 size={11} />
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
  isDark,
  formatDate,
  getCategoryName,
  getPostUrl,
  scrollTop,
}) => {
  const publishedDate = formatDate(
    post?.publishedAt || post?.createdAt
  );

  return (
    <article
      className={`py-4 border-b last:border-b-0 ${
        isDark
          ? "border-white/[0.08]"
          : "border-slate-200"
      }`}
    >
      <PostLink
        post={post}
        getPostUrl={getPostUrl}
        onClick={scrollTop}
        className="group block w-full"
      >
        <div className="grid grid-cols-[1fr_96px] sm:grid-cols-[1fr_120px] lg:grid-cols-[1fr_100px] gap-4">
          <div>
            <span className="text-purple-500 text-[8px] font-black uppercase tracking-[0.14em]">
              {getCategoryName(post)}
            </span>

            <h3
              className={`text-sm sm:text-base lg:text-[14px] leading-snug font-black mt-1.5 mb-2 transition-colors group-hover:text-purple-500 ${
                isDark
                  ? "text-white"
                  : "text-slate-950"
              }`}
            >
              {post?.title || "Untitled Article"}
            </h3>

            {publishedDate && (
              <span
                className={`text-[8px] sm:text-[9px] font-semibold ${
                  isDark
                    ? "text-gray-600"
                    : "text-slate-400"
                }`}
              >
                {publishedDate}
              </span>
            )}
          </div>

          <div
            className={`h-[70px] overflow-hidden ${
              isDark
                ? "bg-[#111]"
                : "bg-slate-200"
            }`}
          >
            {post?.coverImage ? (
              <img
                src={post.coverImage}
                alt={
                  post?.coverImageAlt ||
                  post?.title ||
                  "Article"
                }
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(event) => {
                  event.currentTarget.style.display =
                    "none";
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-800 to-slate-950">
                <FileText
                  size={20}
                  className="text-white/30"
                />
              </div>
            )}
          </div>
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
  isDark,
  formatDate,
  getReadTime,
  getCategoryName,
  getPostUrl,
  scrollTop,
}) => {
  const publishedDate = formatDate(
    post?.publishedAt || post?.createdAt
  );

  const readTime = getReadTime(post);

  return (
    <article
      className={`border-b ${
        isDark
          ? "border-white/[0.08]"
          : "border-slate-200"
      }`}
    >
      <PostLink
        post={post}
        getPostUrl={getPostUrl}
        onClick={scrollTop}
        className="group block w-full py-4 sm:py-5"
      >
        <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[190px_1fr] lg:grid-cols-[225px_1fr] gap-4 sm:gap-6">
          <div
            className={`w-full h-[78px] sm:h-[115px] lg:h-[128px] overflow-hidden ${
              isDark
                ? "bg-[#111]"
                : "bg-slate-200"
            }`}
          >
            {post?.coverImage ? (
              <img
                src={post.coverImage}
                alt={
                  post?.coverImageAlt ||
                  post?.title ||
                  "DevZore article"
                }
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                onError={(event) => {
                  event.currentTarget.style.display =
                    "none";
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-800 to-slate-950">
                <Newspaper
                  size={26}
                  className="text-white/30"
                />
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center min-w-0">
            <span className="text-purple-500 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.14em] mb-1.5">
              {getCategoryName(post)}
            </span>

            <h3
              className={`text-[15px] sm:text-xl lg:text-[22px] font-black tracking-[-0.02em] leading-tight mb-2 transition-colors group-hover:text-purple-500 ${
                isDark
                  ? "text-white"
                  : "text-slate-950"
              }`}
            >
              {post?.title || "Untitled Article"}
            </h3>

            {post?.excerpt && (
              <p
                className={`hidden sm:block text-xs sm:text-sm leading-relaxed line-clamp-2 max-w-3xl mb-3 ${
                  isDark
                    ? "text-gray-500"
                    : "text-slate-600"
                }`}
              >
                {post.excerpt}
              </p>
            )}

            <div className="flex items-center justify-between gap-3">
              <div
                className={`flex flex-wrap items-center gap-2 sm:gap-3 text-[8px] sm:text-[9px] font-semibold ${
                  isDark
                    ? "text-gray-600"
                    : "text-slate-400"
                }`}
              >
                {publishedDate && (
                  <span className="flex items-center gap-1">
                    <CalendarDays size={9} />
                    {publishedDate}
                  </span>
                )}

                {readTime && (
                  <span className="hidden sm:flex items-center gap-1">
                    <Clock3 size={9} />
                    {readTime}
                  </span>
                )}
              </div>

              <ChevronRight
                size={16}
                className="text-purple-500 shrink-0 transition-transform group-hover:translate-x-1"
              />
            </div>
          </div>
        </div>
      </PostLink>
    </article>
  );
};

export default BlogPost;