import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Eye,
  Globe,
  Home,
  Layers,
  Megaphone,
  MessageCircle,
  Rocket,
  Search,
  Send,
  Smartphone,
  User,
} from "lucide-react";

import postService from "../services/postService";
import commentService from "../services/commentService";

const BASE_URL = "https://devzore.com";

// HELPERS

const getBlogImageUrl = (post) => {
  if (!post?.coverImage) return "";
  return String(post.coverImage).trim();
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

const toISODate = (date) => {
  if (!date) return undefined;

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return undefined;
  }

  return parsedDate.toISOString();
};

const stripHtml = (html = "") => {
  if (!html) return "";

  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim();
};

const truncateText = (text = "", maxLength = 160) => {
  if (!text) return "";

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength - 1).trim()}…`;
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

const slugifyHeading = (text = "") => {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/&amp;/gi, "and")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};

const prepareArticleContent = (html = "") => {
  if (!html) {
    return {
      html: "<p>No article content is available.</p>",
      headings: [],
    };
  }

  let cleanedHtml = String(html);

  // Remove accidental editor labels
  cleanedHtml = cleanedHtml
    .replace(
      /<p[^>]*>\s*(TITLE|SLUG|EXCERPT|CONTENT)\s*:?\s*<\/p>/gi,
      ""
    )
    .replace(
      /<h[1-6][^>]*>\s*(TITLE|SLUG|EXCERPT|CONTENT)\s*:?\s*<\/h[1-6]>/gi,
      ""
    )
    .replace(
      /<div[^>]*>\s*(TITLE|SLUG|EXCERPT|CONTENT)\s*:?\s*<\/div>/gi,
      ""
    );

  if (
    typeof window === "undefined" ||
    typeof DOMParser === "undefined"
  ) {
    return {
      html: cleanedHtml,
      headings: [],
    };
  }

  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(cleanedHtml, "text/html");

    const headingElements = [
      ...doc.querySelectorAll("h2, h3"),
    ];

    const usedIds = new Map();

    const headings = headingElements
      .map((heading) => {
        const text = heading.textContent?.trim();

        if (!text) return null;

        let baseId =
          heading.getAttribute("id") ||
          slugifyHeading(text) ||
          "article-section";

        const existingCount = usedIds.get(baseId) || 0;
        usedIds.set(baseId, existingCount + 1);

        const finalId =
          existingCount === 0
            ? baseId
            : `${baseId}-${existingCount + 1}`;

        heading.setAttribute("id", finalId);

        return {
          id: finalId,
          text,
          level: heading.tagName.toLowerCase() === "h3" ? 3 : 2,
        };
      })
      .filter(Boolean);

    return {
      html: doc.body.innerHTML,
      headings,
    };
  } catch (error) {
    console.error("Prepare article content error:", error);

    return {
      html: cleanedHtml,
      headings: [],
    };
  }
};

const getTags = (post) => {
  if (Array.isArray(post?.tags)) {
    return post.tags
      .map((tag) => {
        if (typeof tag === "string") {
          return tag.trim();
        }

        return tag?.name?.trim() || "";
      })
      .filter(Boolean)
      .slice(0, 5);
  }

  if (typeof post?.tags === "string") {
    return post.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean)
      .slice(0, 5);
  }

  if (typeof post?.seoKeywords === "string") {
    return post.seoKeywords
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean)
      .slice(0, 5);
  }

  return [];
};

// SERVICES

const SERVICES = [
  {
    title: "Web Development",
    description:
      "Modern websites and web applications built around real business requirements.",
    icon: Globe,
    path: "/web-development",
  },
  {
    title: "Mobile App Development",
    description:
      "Modern mobile applications connected with reliable backend systems.",
    icon: Smartphone,
    path: "/mobile-apps",
  },
  {
    title: "MERN Stack Development",
    description:
      "Full-stack applications built with maintainable frontend, backend and data architecture.",
    icon: Layers,
    path: "/mern-stack-development",
  },
  {
    title: "SaaS Development",
    description:
      "SaaS products, dashboards and scalable business platforms.",
    icon: Rocket,
    path: "/saas-product-development",
  },
  {
    title: "SEO Services",
    description:
      "Technical and on-page improvements focused on stronger search visibility.",
    icon: Search,
    path: "/seo-services",
  },
  {
    title: "Digital Marketing",
    description:
      "Focused digital strategies for strengthening your online business presence.",
    icon: Megaphone,
    path: "/digital-marketing",
  },
];

// COMPONENT

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [relatedPosts, setRelatedPosts] = useState([]);
  const [relatedLoading, setRelatedLoading] = useState(false);

  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [commentsError, setCommentsError] = useState("");

  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    content: "",
  });

  const [commentSubmitting, setCommentSubmitting] = useState(false);
  const [activeHeading, setActiveHeading] = useState("");

  // FETCH POST

  useEffect(() => {
    let isMounted = true;

    const fetchBlog = async () => {
      try {
        setLoading(true);
        setRelatedLoading(true);
        setError("");

        const response = await postService.getPostBySlug(slug);

        const blog =
          response?.data?.post ||
          response?.post ||
          response?.data ||
          response;

        if (!blog || typeof blog !== "object") {
          throw new Error("Invalid blog data.");
        }

        if (!blog?._id) {
          throw new Error("Blog post ID is missing.");
        }

        if (!isMounted) return;

        let related = [];

        if (Array.isArray(response?.data?.related)) {
          related = response.data.related;
        } else if (Array.isArray(response?.related)) {
          related = response.related;
        }

        related = related.filter(
          (item) =>
            item?._id !== blog?._id &&
            item?.slug !== blog?.slug
        );

        setPost(blog);
        setRelatedPosts(related);
      } catch (err) {
        console.error("Fetch single blog error:", err);

        if (!isMounted) return;

        const message =
          err?.response?.data?.message ||
          err?.message ||
          "Blog post not found.";

        setPost(null);
        setRelatedPosts([]);
        setError(message);

        toast.error("Unable to load article.");
      } finally {
        if (isMounted) {
          setLoading(false);
          setRelatedLoading(false);
        }
      }
    };

    if (slug) {
      fetchBlog();
    } else {
      setLoading(false);
      setRelatedLoading(false);
      setError("Blog slug is missing.");
    }

    return () => {
      isMounted = false;
    };
  }, [slug]);

  // FETCH COMMENTS

  useEffect(() => {
    let isMounted = true;

    const fetchComments = async () => {
      if (!post?._id) return;

      try {
        setCommentsLoading(true);
        setCommentsError("");

        const response =
          await commentService.getPostComments(post._id);

        let commentList = [];

        if (Array.isArray(response)) {
          commentList = response;
        } else if (Array.isArray(response?.data)) {
          commentList = response.data;
        } else if (Array.isArray(response?.data?.comments)) {
          commentList = response.data.comments;
        } else if (Array.isArray(response?.comments)) {
          commentList = response.comments;
        }

        if (isMounted) {
          setComments(commentList);
        }
      } catch (err) {
        console.error("Fetch comments error:", err);

        if (!isMounted) return;

        setCommentsError(
          err?.response?.data?.message ||
            "Unable to load comments."
        );

        setComments([]);
      } finally {
        if (isMounted) {
          setCommentsLoading(false);
        }
      }
    };

    fetchComments();

    return () => {
      isMounted = false;
    };
  }, [post?._id]);

  // DATA

  const categoryName =
    post?.category && typeof post.category === "object"
      ? post.category?.name?.trim()
      : typeof post?.category === "string"
        ? post.category.trim()
        : "";

  const authorAvatar =
    post?.author && typeof post.author === "object"
      ? post.author?.avatar || ""
      : "";

  const authorBio =
    post?.author && typeof post.author === "object"
      ? post.author?.bio || ""
      : "";

  const publishedDate =
    post?.publishedAt || post?.createdAt;

  const readTime = getReadTime(post);
  const coverImage = getBlogImageUrl(post);

  const articleTags = useMemo(() => getTags(post), [post]);

  const preparedArticle = useMemo(
    () => prepareArticleContent(post?.content || ""),
    [post?.content]
  );

  // ACTIVE TABLE OF CONTENTS

  useEffect(() => {
    if (!preparedArticle.headings.length) {
      return undefined;
    }

    const elements = preparedArticle.headings
      .map((heading) => document.getElementById(heading.id))
      .filter(Boolean);

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top -
              b.boundingClientRect.top
          );

        if (visible.length > 0) {
          setActiveHeading(visible[0].target.id);
        }
      },
      {
        rootMargin: "-100px 0px -65% 0px",
        threshold: [0, 1],
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [preparedArticle]);

  // SEO

  const seo = useMemo(() => {
    if (!post) return null;

    const cleanContent = stripHtml(preparedArticle.html);

    const description = truncateText(
      post?.metaDescription ||
        post?.seoDescription ||
        post?.excerpt ||
        cleanContent ||
        "Read software development insights and technical articles from DevZore.",
      160
    );

    const title =
      post?.metaTitle ||
      post?.seoTitle ||
      post?.title ||
      "DevZore Blog";

    const canonicalSlug = post?.slug || slug || "";

    return {
      title,
      description,
      canonicalUrl: `${BASE_URL}/blog/${encodeURIComponent(
        canonicalSlug
      )}`,
      image: coverImage || null,
      datePublished: toISODate(
        post?.publishedAt || post?.createdAt
      ),
      dateModified: toISODate(
        post?.updatedAt ||
          post?.publishedAt ||
          post?.createdAt
      ),
    };
  }, [post, slug, coverImage, preparedArticle.html]);

  // COMMENT INPUT

  const handleCommentChange = (event) => {
    const { name, value } = event.target;

    setCommentForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  // COMMENT SUBMIT

  const handleCommentSubmit = async (event) => {
    event.preventDefault();

    if (!post?._id) {
      toast.error("Blog post ID is missing.");
      return;
    }

    const name = commentForm.name.trim();
    const email = commentForm.email.trim();
    const content = commentForm.content.trim();

    if (!name) {
      toast.error("Please enter your name.");
      return;
    }

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    if (!content) {
      toast.error("Please write a comment.");
      return;
    }

    if (content.length < 10) {
      toast.error("Comment must be at least 10 characters.");
      return;
    }

    if (content.length > 500) {
      toast.error("Comment cannot exceed 500 characters.");
      return;
    }

    try {
      setCommentSubmitting(true);

      await commentService.createComment({
        post: post._id,
        name,
        email,
        content,
      });

      toast.success(
        "Comment submitted. It may need admin approval before appearing."
      );

      setCommentForm({
        name: "",
        email: "",
        content: "",
      });
    } catch (err) {
      console.error("Create comment error:", err);

      toast.error(
        err?.response?.data?.message ||
          err?.response?.data?.errors?.[0]?.msg ||
          err?.message ||
          "Unable to submit comment."
      );
    } finally {
      setCommentSubmitting(false);
    }
  };

  // COMMENT HELPERS

  const getCommentAuthorName = (comment) => {
    if (comment?.name) {
      return comment.name;
    }

    if (
      comment?.user &&
      typeof comment.user === "object"
    ) {
      return (
        comment.user?.name ||
        comment.user?.username ||
        "Anonymous"
      );
    }

    if (typeof comment?.user === "string") {
      return comment.user;
    }

    return "Anonymous";
  };

  const getCommentDate = (comment) =>
    comment?.createdAt ||
    comment?.date ||
    comment?.updatedAt;

  // NAVIGATION

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleBackToBlog = () => {
    navigate("/blog");

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleHeadingClick = (headingId) => {
    const element = document.getElementById(headingId);

    if (!element) return;

    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      105;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    window.history.replaceState(
      null,
      "",
      `#${headingId}`
    );

    setActiveHeading(headingId);
  };

  // LOADING

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-white text-[#071923] antialiased"
        style={{
          fontFamily:
            '"Inter", "Segoe UI", Arial, Helvetica, sans-serif',
        }}
      >
        <div className="text-center px-6">
          <div className="w-9 h-9 rounded-full border-[3px] border-slate-200 border-t-[#0796A8] mx-auto mb-4 animate-spin" />

          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
            Loading Article
          </p>
        </div>
      </div>
    );
  }

  // ERROR

  if (error || !post) {
    return (
      <>
        <Helmet>
          <title>Article Not Found | DevZore</title>

          <meta
            name="robots"
            content="noindex, follow"
          />
        </Helmet>

        <div
          className="min-h-screen flex items-center justify-center bg-[#04111a] text-white px-6"
          style={{
            fontFamily:
              '"Inter", "Segoe UI", Arial, Helvetica, sans-serif',
          }}
        >
          <div className="max-w-xl text-center">
            <span className="text-[#28c5d4] text-[10px] font-bold uppercase tracking-[0.2em]">
              DevZore Journal
            </span>

            <h1 className="mt-4 text-[36px] sm:text-[48px] leading-[1.05] font-semibold tracking-[-0.04em]">
              Article Not Found
            </h1>

            <p className="mt-4 text-[13px] leading-6 text-slate-400">
              {error ||
                "The requested article could not be found."}
            </p>

            <button
              type="button"
              onClick={handleBackToBlog}
              className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-[11px] font-semibold text-[#071923]"
            >
              <ArrowLeft
                size={13}
                className="transition-transform group-hover:-translate-x-1"
              />

              Back to Journal
            </button>
          </div>
        </div>
      </>
    );
  }

  // SCHEMA

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${seo.canonicalUrl}#article`,
    headline: post?.title || seo.title,
    description: seo.description,
    url: seo.canonicalUrl,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": seo.canonicalUrl,
    },

    ...(seo.image && {
      image: {
        "@type": "ImageObject",
        url: seo.image,

        ...(post?.coverImageAlt && {
          caption: post.coverImageAlt,
        }),
      },
    }),

    ...(seo.datePublished && {
      datePublished: seo.datePublished,
    }),

    ...(seo.dateModified && {
      dateModified: seo.dateModified,
    }),

    author: {
      "@type": "Organization",
      name: "DevZore Engineering Team",
      url: `${BASE_URL}/`,
    },

    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "DevZore",
      url: `${BASE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },

    ...(categoryName && {
      articleSection: categoryName,
    }),

    ...(post?.seoKeywords?.trim() && {
      keywords: post.seoKeywords.trim(),
    }),

    inLanguage: "en",
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
      {
        "@type": "ListItem",
        position: 3,
        name: post?.title || seo.title || "Article",
        item: seo.canonicalUrl,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <html lang="en" />

        <title>{`${seo.title} | DevZore`}</title>

        <meta
          name="description"
          content={seo.description}
        />

        {post?.seoKeywords?.trim() && (
          <meta
            name="keywords"
            content={post.seoKeywords.trim()}
          />
        )}

        <meta
          name="author"
          content="DevZore Engineering Team"
        />

        <meta
          name="publisher"
          content="DevZore"
        />

        <link
          rel="canonical"
          href={seo.canonicalUrl}
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta
          property="og:type"
          content="article"
        />

        <meta
          property="og:site_name"
          content="DevZore"
        />

        <meta
          property="og:title"
          content={seo.title}
        />

        <meta
          property="og:description"
          content={seo.description}
        />

        <meta
          property="og:url"
          content={seo.canonicalUrl}
        />

        <meta
          property="og:locale"
          content="en_US"
        />

        {seo.image && (
          <meta
            property="og:image"
            content={seo.image}
          />
        )}

        {seo.image && post?.coverImageAlt && (
          <meta
            property="og:image:alt"
            content={post.coverImageAlt}
          />
        )}

        {seo.datePublished && (
          <meta
            property="article:published_time"
            content={seo.datePublished}
          />
        )}

        {seo.dateModified && (
          <meta
            property="article:modified_time"
            content={seo.dateModified}
          />
        )}

        {categoryName && (
          <meta
            property="article:section"
            content={categoryName}
          />
        )}

        <meta
          name="twitter:card"
          content={
            seo.image
              ? "summary_large_image"
              : "summary"
          }
        />

        <meta
          name="twitter:title"
          content={seo.title}
        />

        <meta
          name="twitter:description"
          content={seo.description}
        />

        {seo.image && (
          <meta
            name="twitter:image"
            content={seo.image}
          />
        )}

        <script type="application/ld+json">
          {JSON.stringify(blogPostingSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div
        className="min-h-screen overflow-hidden bg-white text-[#071923] antialiased"
        style={{
          fontFamily:
            '"Inter", "Segoe UI", Arial, Helvetica, sans-serif',
        }}
      >
        {/* TOP */}

        <section className="bg-white pt-20 sm:pt-24 lg:pt-28">
          <div className="max-w-[1120px] mx-auto px-5 sm:px-6">
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <button
                type="button"
                onClick={handleBackToBlog}
                className="group inline-flex items-center gap-2 text-[10px] font-medium text-slate-500 transition-colors hover:text-[#07899a]"
              >
                <ArrowLeft
                  size={12}
                  className="transition-transform group-hover:-translate-x-1"
                />

                DevZore Journal
              </button>

              {categoryName && (
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#07899a]">
                  {categoryName}
                </span>
              )}
            </div>
          </div>
        </section>

        {/* BREADCRUMB */}

        <section className="bg-white">
          <div className="max-w-[1120px] mx-auto px-5 sm:px-6">
            <nav
              aria-label="Breadcrumb"
              className="py-4"
            >
              <div className="flex items-center gap-2 overflow-hidden text-[9px] text-slate-400">
                <Link
                  to="/"
                  onClick={scrollTop}
                  className="shrink-0 transition-colors hover:text-[#07899a]"
                >
                  <Home size={11} />
                </Link>

                <span>/</span>

                <Link
                  to="/blog"
                  onClick={scrollTop}
                  className="shrink-0 transition-colors hover:text-[#07899a]"
                >
                  Blogs
                </Link>

                {categoryName && (
                  <>
                    <span>/</span>
                    <span>{categoryName}</span>
                  </>
                )}
              </div>
            </nav>
          </div>
        </section>

        {/* COVER + TITLE */}

        <section className="bg-white">
          <div className="max-w-[1120px] mx-auto px-5 sm:px-6 pb-9">
            {coverImage && (
              <figure className="mb-6">
                <div className="w-full aspect-[16/6.4] min-h-[220px] max-h-[440px] overflow-hidden rounded-2xl bg-[#071923]">
                  <img
                    src={coverImage}
                    alt={
                      post?.coverImageAlt ||
                      post?.title ||
                      "DevZore article"
                    }
                    className="w-full h-full object-cover"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>

                {post?.coverImageAlt && (
                  <figcaption className="mt-2 text-[9px] italic leading-5 text-slate-400">
                    {post.coverImageAlt}
                  </figcaption>
                )}
              </figure>
            )}

            {categoryName && (
              <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#07899a]">
                {categoryName}
              </p>
            )}

            <h1 className="mt-4 max-w-[980px] text-[36px] sm:text-[46px] lg:text-[54px] xl:text-[58px] leading-[1.08] font-semibold tracking-[-0.045em] text-[#172126]">
              {post?.title || "Untitled Article"}
            </h1>

            {post?.excerpt?.trim() && (
              <p className="mt-5 max-w-[850px] text-[15px] sm:text-[17px] leading-7 text-slate-600">
                {post.excerpt.trim()}
              </p>
            )}

            {/* AUTHOR META */}

            <div className="mt-7 border-t border-slate-200 pt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                {authorAvatar ? (
                  <img
                    src={authorAvatar}
                    alt="DevZore Engineering Team"
                    loading="lazy"
                    decoding="async"
                    className="w-10 h-10 shrink-0 rounded-full object-cover bg-slate-100"
                  />
                ) : (
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                    <User size={15} />
                  </div>
                )}

                <div>
                  <p className="text-[11px] leading-5 text-slate-500">
                    Written by{" "}
                    <strong className="font-semibold text-[#071923]">
                      DevZore Engineering
                    </strong>
                  </p>

                  <div className="flex flex-wrap items-center gap-x-2 text-[9px] font-medium text-slate-400">
                    <span>Team</span>

                    {publishedDate && (
                      <>
                        <span>·</span>
                        <span>
                          {formatDate(publishedDate)}
                        </span>
                      </>
                    )}

                    {readTime && (
                      <>
                        <span>·</span>
                        <span>{readTime}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {post?.views !== undefined &&
                  post?.views !== null && (
                    <span className="inline-flex items-center gap-1.5 text-[9px] text-slate-400">
                      <Eye size={11} />
                      {post.views} views
                    </span>
                  )}

                {articleTags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {articleTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#f4f6f7] px-3 py-1.5 text-[9px] font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ARTICLE */}

        <section className="border-t border-slate-100 bg-white py-9 md:py-12">
          <div className="max-w-[1120px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[220px_minmax(0,1fr)] gap-8 lg:gap-12 items-start">
              {/* LEFT SIDEBAR */}

              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  {preparedArticle.headings.length > 0 && (
                    <div className="pb-6 border-b border-slate-200">
                      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.17em] text-slate-500">
                        On This Page
                      </p>

                      <nav className="border-l border-slate-200">
                        {preparedArticle.headings.map((heading) => {
                          const active =
                            activeHeading === heading.id;

                          return (
                            <button
                              key={heading.id}
                              type="button"
                              onClick={() =>
                                handleHeadingClick(heading.id)
                              }
                              className={`relative block w-full text-left transition-colors ${
                                heading.level === 3
                                  ? "pl-5 py-1.5"
                                  : "pl-3 py-2"
                              } ${
                                active
                                  ? "font-semibold text-[#071923]"
                                  : "text-slate-500 hover:text-[#07899a]"
                              }`}
                            >
                              {active && (
                                <span className="absolute -left-[1px] inset-y-0 w-[2px] bg-[#0796A8]" />
                              )}

                              <span className="block text-[10px] leading-[1.45]">
                                {heading.text}
                              </span>
                            </button>
                          );
                        })}
                      </nav>
                    </div>
                  )}

                  {/* SIDEBAR SERVICES */}

                  <div className="py-6 border-b border-slate-200">
                    <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-slate-500">
                      Related Services
                    </p>

                    <div className="mt-3">
                      {SERVICES.slice(0, 5).map((service) => (
                        <Link
                          key={service.title}
                          to={service.path}
                          onClick={scrollTop}
                          className="group flex items-center gap-2 py-1.5 text-[10px] leading-5 text-slate-500 transition-colors hover:text-[#07899a]"
                        >
                          <ArrowRight
                            size={9}
                            className="shrink-0 text-[#0796A8]"
                          />

                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-slate-500">
                      Work With DevZore
                    </p>

                    <p className="mt-2 text-[10px] leading-5 text-slate-500">
                      Planning a web, mobile, SaaS or custom
                      software project?
                    </p>

                    <Link
                      to="/contact"
                      onClick={scrollTop}
                      className="mt-3 inline-flex items-center gap-2 text-[10px] font-semibold text-[#07899a]"
                    >
                      Discuss Project
                      <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              </aside>

              {/* CONTENT */}

              <div className="min-w-0 max-w-[800px]">
                <article
                  className="blog-content"
                  dangerouslySetInnerHTML={{
                    __html: preparedArticle.html,
                  }}
                />

                {/* AUTHOR */}

                {authorBio && (
                  <section className="mt-12 border-t border-slate-200 pt-7">
                    <div className="flex items-start gap-4">
                      {authorAvatar ? (
                        <img
                          src={authorAvatar}
                          alt="DevZore Engineering Team"
                          loading="lazy"
                          decoding="async"
                          className="w-12 h-12 shrink-0 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 shrink-0 rounded-full bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                          <User size={17} />
                        </div>
                      )}

                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#07899a]">
                          About the Author
                        </p>

                        <h2 className="mt-1 text-[15px] font-semibold text-[#071923]">
                          DevZore Engineering Team
                        </h2>

                        <p className="mt-2 text-[11px] sm:text-[12px] leading-6 text-slate-600">
                          {authorBio}
                        </p>
                      </div>
                    </div>
                  </section>
                )}

                {/* RELATED ARTICLES */}

                {(relatedLoading ||
                  relatedPosts.length > 0) && (
                  <section className="mt-12 border-t border-slate-200 pt-8">
                    <div className="mb-5 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#07899a]">
                          Continue Reading
                        </p>

                        <h2 className="mt-2 text-[25px] sm:text-[29px] font-semibold tracking-[-0.03em] text-[#071923]">
                          Related Articles
                        </h2>
                      </div>

                      <Link
                        to="/blog"
                        onClick={scrollTop}
                        className="hidden sm:inline-flex items-center gap-1.5 text-[9px] font-semibold text-[#07899a]"
                      >
                        All Articles
                        <ArrowRight size={10} />
                      </Link>
                    </div>

                    {relatedLoading ? (
                      <div className="grid sm:grid-cols-2 gap-4">
                        {[1, 2].map((item) => (
                          <div
                            key={item}
                            className="overflow-hidden rounded-xl border border-slate-200 bg-white animate-pulse"
                          >
                            <div className="h-[155px] bg-slate-200" />

                            <div className="p-4">
                              <div className="h-3 bg-slate-200 rounded" />
                              <div className="mt-2 h-3 w-3/4 bg-slate-200 rounded" />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid sm:grid-cols-2 gap-4">
                        {relatedPosts
                          .slice(0, 4)
                          .map((relatedPost) => {
                            const relatedCategory =
                              relatedPost?.category &&
                              typeof relatedPost.category ===
                                "object"
                                ? relatedPost.category?.name
                                : relatedPost?.category;

                            const relatedImage =
                              getBlogImageUrl(relatedPost);

                            return (
                              <Link
                                key={
                                  relatedPost?._id ||
                                  relatedPost?.slug
                                }
                                to={`/blog/${encodeURIComponent(
                                  relatedPost.slug
                                )}`}
                                onClick={scrollTop}
                                className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0796A8]/40 hover:shadow-[0_12px_36px_rgba(7,25,35,0.07)]"
                              >
                                {relatedImage && (
                                  <div className="h-[155px] overflow-hidden bg-slate-100">
                                    <img
                                      src={relatedImage}
                                      alt={
                                        relatedPost?.coverImageAlt ||
                                        relatedPost?.title ||
                                        "Related article"
                                      }
                                      loading="lazy"
                                      decoding="async"
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                    />
                                  </div>
                                )}

                                <div className="p-4">
                                  {relatedCategory && (
                                    <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#07899a]">
                                      {relatedCategory}
                                    </p>
                                  )}

                                  <h3 className="mt-1.5 text-[14px] leading-5 font-semibold text-[#071923] line-clamp-2 transition-colors group-hover:text-[#07899a]">
                                    {relatedPost?.title ||
                                      "DevZore Article"}
                                  </h3>

                                  <span className="mt-3 inline-flex items-center gap-1.5 text-[9px] font-semibold text-[#07899a]">
                                    Read Article
                                    <ArrowRight size={9} />
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                      </div>
                    )}
                  </section>
                )}

                {/* SERVICES */}

                <section className="mt-12 border-t border-slate-200 pt-8">
                  <div className="mb-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#07899a]">
                        DevZore Services
                      </p>

                      <h2 className="mt-2 text-[25px] sm:text-[29px] leading-tight font-semibold tracking-[-0.03em] text-[#071923]">
                        Need help with your digital product?
                      </h2>
                    </div>

                    <Link
                      to="/allservices"
                      onClick={scrollTop}
                      className="hidden sm:inline-flex items-center gap-1.5 text-[9px] font-semibold text-[#07899a]"
                    >
                      All Services
                      <ArrowRight size={10} />
                    </Link>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {SERVICES.map((service, index) => {
                      const Icon = service.icon;

                      return (
                        <Link
                          key={service.title}
                          to={service.path}
                          onClick={scrollTop}
                          className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0796A8]/40"
                        >
                          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#071923] to-[#18bdcb]" />

                          <div className="flex items-start justify-between gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                              <Icon size={15} />
                            </div>

                            <span className="text-[8px] font-semibold text-slate-300">
                              {String(index + 1).padStart(
                                2,
                                "0"
                              )}
                            </span>
                          </div>

                          <h3 className="mt-3 text-[13px] font-semibold text-[#071923]">
                            {service.title}
                          </h3>

                          <p className="mt-1.5 text-[10px] leading-5 text-slate-500">
                            {service.description}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </section>

                {/* COMMENTS */}

                <section className="mt-12 border-t border-slate-200 pt-8">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#07899a]">
                        Discussion
                      </p>

                      <h2 className="mt-2 text-[25px] font-semibold tracking-[-0.03em] text-[#071923]">
                        Join the conversation
                      </h2>
                    </div>

                    <span className="text-[9px] text-slate-400">
                      {comments.length}{" "}
                      {comments.length === 1
                        ? "comment"
                        : "comments"}
                    </span>
                  </div>

                  <form
                    onSubmit={handleCommentSubmit}
                    className="rounded-2xl border border-slate-200 bg-[#fafbfb] p-5 sm:p-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="blog-comment-name"
                          className="block mb-1.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-slate-400"
                        >
                          Name
                        </label>

                        <input
                          id="blog-comment-name"
                          type="text"
                          name="name"
                          value={commentForm.name}
                          onChange={handleCommentChange}
                          placeholder="Your name"
                          autoComplete="name"
                          maxLength={60}
                          required
                          disabled={commentSubmitting}
                          className="w-full min-h-[44px] rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-[12px] text-[#071923] outline-none placeholder:text-slate-400 transition-all focus:border-[#0796A8] focus:ring-4 focus:ring-[#0796A8]/10"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="blog-comment-email"
                          className="block mb-1.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-slate-400"
                        >
                          Email
                        </label>

                        <input
                          id="blog-comment-email"
                          type="email"
                          name="email"
                          value={commentForm.email}
                          onChange={handleCommentChange}
                          placeholder="you@example.com"
                          autoComplete="email"
                          maxLength={120}
                          required
                          disabled={commentSubmitting}
                          className="w-full min-h-[44px] rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-[12px] text-[#071923] outline-none placeholder:text-slate-400 transition-all focus:border-[#0796A8] focus:ring-4 focus:ring-[#0796A8]/10"
                        />
                      </div>
                    </div>

                    <div className="mt-3">
                      <label
                        htmlFor="blog-comment-content"
                        className="block mb-1.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-slate-400"
                      >
                        Comment
                      </label>

                      <textarea
                        id="blog-comment-content"
                        name="content"
                        value={commentForm.content}
                        onChange={handleCommentChange}
                        placeholder="Write your comment..."
                        rows={4}
                        minLength={10}
                        maxLength={500}
                        required
                        disabled={commentSubmitting}
                        className="w-full resize-y rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-[12px] text-[#071923] outline-none placeholder:text-slate-400 transition-all focus:border-[#0796A8] focus:ring-4 focus:ring-[#0796A8]/10"
                      />
                    </div>

                    <div className="mt-2 flex justify-between text-[8px] text-slate-400">
                      <span>10–500 characters</span>

                      <span>
                        {commentForm.content.length}/500
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={commentSubmitting}
                      className="mt-4 inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg bg-[#0796A8] px-4 py-2.5 text-[10px] font-semibold text-white transition-colors hover:bg-[#078899] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {commentSubmitting ? (
                        <>
                          <span className="w-3.5 h-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send size={11} />
                          Post Comment
                        </>
                      )}
                    </button>
                  </form>

                  {commentsLoading && (
                    <p className="py-6 text-center text-[11px] text-slate-500">
                      Loading comments...
                    </p>
                  )}

                  {!commentsLoading && commentsError && (
                    <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-[11px] text-red-600">
                      {commentsError}
                    </div>
                  )}

                  {!commentsLoading &&
                    !commentsError &&
                    comments.length === 0 && (
                      <div className="mt-4 rounded-xl border border-slate-200 bg-white px-4 py-7 text-center">
                        <MessageCircle
                          size={20}
                          className="mx-auto text-[#07899a]"
                        />

                        <p className="mt-2 text-[12px] font-semibold text-[#071923]">
                          No comments yet
                        </p>

                        <p className="mt-1 text-[10px] text-slate-500">
                          Be the first to join the discussion.
                        </p>
                      </div>
                    )}

                  {!commentsLoading &&
                    !commentsError &&
                    comments.length > 0 && (
                      <div className="mt-5">
                        {comments.map((comment, index) => {
                          const commentKey =
                            comment?._id ||
                            comment?.id ||
                            `comment-${index}`;

                          const commentAuthor =
                            getCommentAuthorName(comment);

                          const commentDate =
                            getCommentDate(comment);

                          return (
                            <article
                              key={commentKey}
                              className="border-b border-slate-200 py-4 last:border-b-0"
                            >
                              <div className="flex gap-3">
                                <div className="w-8 h-8 shrink-0 rounded-full bg-[#071923] text-[#28c5d4] flex items-center justify-center text-[10px] font-semibold">
                                  {commentAuthor
                                    .charAt(0)
                                    .toUpperCase()}
                                </div>

                                <div className="min-w-0 flex-1">
                                  <div className="flex items-start justify-between gap-3">
                                    <h3 className="text-[11px] font-semibold text-[#071923]">
                                      {commentAuthor}
                                    </h3>

                                    {commentDate && (
                                      <time
                                        dateTime={toISODate(
                                          commentDate
                                        )}
                                        className="text-[8px] text-slate-400"
                                      >
                                        {formatDate(
                                          commentDate
                                        )}
                                      </time>
                                    )}
                                  </div>

                                  <p className="mt-1 text-[11px] sm:text-[12px] leading-6 whitespace-pre-wrap break-words text-slate-600">
                                    {comment?.content ||
                                      comment?.comment ||
                                      comment?.text ||
                                      ""}
                                  </p>
                                </div>
                              </div>
                            </article>
                          );
                        })}
                      </div>
                    )}
                </section>
              </div>
            </div>

            {/* BACK */}

            <div className="mt-10 border-t border-slate-200 py-6">
              <button
                type="button"
                onClick={handleBackToBlog}
                className="group inline-flex items-center gap-2 text-[10px] font-semibold text-slate-500 transition-colors hover:text-[#07899a]"
              >
                <ArrowLeft
                  size={12}
                  className="transition-transform group-hover:-translate-x-1"
                />

                Explore More Articles
              </button>
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="bg-[#f7f9fa] py-10 md:py-12">
          <div className="max-w-[1120px] mx-auto px-5 sm:px-6">
            <div className="relative overflow-hidden rounded-2xl bg-[#071923] px-5 sm:px-7 py-7 sm:py-8 text-white">
              <div className="absolute -top-24 right-[-50px] w-72 h-72 rounded-full bg-[#0796A8]/15 blur-[100px]" />

              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div className="max-w-2xl">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#28c5d4]">
                    Work With DevZore
                  </p>

                  <h2 className="mt-2 text-[24px] sm:text-[30px] leading-tight font-semibold tracking-[-0.03em]">
                    Have a software or digital project in mind?
                  </h2>

                  <p className="mt-2 text-[11px] sm:text-[12px] leading-6 text-slate-400">
                    Share what you are planning to build and
                    discuss your requirements and development
                    approach with DevZore.
                  </p>
                </div>

                <Link
                  to="/contact"
                  onClick={scrollTop}
                  className="group shrink-0 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-[10px] font-semibold text-[#071923] transition-colors hover:bg-slate-100"
                >
                  Discuss Your Project

                  <ArrowRight
                    size={11}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ARTICLE CONTENT STYLES */}

        <style>{`
          html {
            scroll-behavior: smooth;
          }

          .blog-content {
            width: 100%;
            max-width: 800px;
            color: #334155;
            font-size: 16px;
            line-height: 1.82;
            overflow-wrap: break-word;
            word-break: normal;
          }

          .blog-content > *:first-child {
            margin-top: 0;
          }

          .blog-content > *:last-child {
            margin-bottom: 0;
          }

          .blog-content p {
            margin: 0 0 1.35rem;
          }

          .blog-content h1,
          .blog-content h2,
          .blog-content h3,
          .blog-content h4,
          .blog-content h5,
          .blog-content h6 {
            color: #172126;
            font-weight: 600;
            letter-spacing: -0.035em;
            line-height: 1.18;
            scroll-margin-top: 110px;
          }

          .blog-content h1 {
            margin: 2.5rem 0 1rem;
            font-size: clamp(2rem, 4vw, 2.65rem);
          }

          .blog-content h2 {
            margin: 2.55rem 0 0.95rem;
            font-size: clamp(1.7rem, 3vw, 2.1rem);
          }

          .blog-content h3 {
            margin: 2.1rem 0 0.8rem;
            font-size: clamp(1.3rem, 2.5vw, 1.58rem);
          }

          .blog-content h4 {
            margin: 1.85rem 0 0.7rem;
            font-size: 1.15rem;
          }

          .blog-content h5 {
            margin: 1.7rem 0 0.65rem;
            font-size: 1.04rem;
          }

          .blog-content h6 {
            margin: 1.6rem 0 0.6rem;
            font-size: 0.96rem;
          }

          .blog-content strong,
          .blog-content b {
            color: #172126;
            font-weight: 700;
          }

          .blog-content em,
          .blog-content i {
            font-style: italic;
          }

          .blog-content a {
            color: #07899a;
            font-weight: 500;
            text-decoration: underline;
            text-decoration-color: rgba(7, 137, 154, 0.35);
            text-underline-offset: 3px;
          }

          .blog-content a:hover {
            color: #075f70;
            text-decoration-color: #075f70;
          }

          .blog-content ul,
          .blog-content ol {
            margin: 0.8rem 0 1.4rem;
            padding-left: 1.45rem;
          }

          .blog-content ul {
            list-style-type: disc;
          }

          .blog-content ol {
            list-style-type: decimal;
          }

          .blog-content li {
            margin-bottom: 0.55rem;
            padding-left: 0.1rem;
          }

          .blog-content li::marker {
            color: #0796a8;
          }

          .blog-content blockquote {
            margin: 1.8rem 0;
            padding: 0.95rem 0 0.95rem 1.35rem;
            border-left: 3px solid #18bdcb;
            color: #172126;
            font-size: 16px;
            font-weight: 600;
            line-height: 1.75;
          }

          .blog-content blockquote p:last-child {
            margin-bottom: 0;
          }

          .blog-content img {
            display: block;
            width: 100%;
            max-width: 100%;
            height: auto;
            max-height: 560px;
            object-fit: contain;
            margin: 1.9rem auto 0.65rem;
            border-radius: 0.8rem;
          }

          .blog-content figure {
            width: 100%;
            max-width: 100%;
            margin: 1.9rem 0;
          }

          .blog-content figure img {
            margin: 0;
          }

          .blog-content figcaption {
            margin-top: 0.55rem;
            color: #64748b;
            font-size: 0.7rem;
            line-height: 1.55;
            font-style: italic;
          }

          .blog-content pre {
            width: 100%;
            max-width: 100%;
            overflow-x: auto;
            margin: 1.8rem 0;
            padding: 1.1rem;
            border: 1px solid #16303b;
            border-radius: 0.8rem;
            background: #04111a;
            color: #e2e8f0;
            font-size: 0.8rem;
            line-height: 1.7;
          }

          .blog-content code {
            font-family:
              ui-monospace,
              SFMono-Regular,
              Menlo,
              Monaco,
              Consolas,
              "Liberation Mono",
              monospace;
          }

          .blog-content p code,
          .blog-content li code {
            padding: 0.15rem 0.35rem;
            border-radius: 0.3rem;
            background: #e8f1f2;
            color: #075f70;
            font-size: 0.88em;
          }

          .blog-content table {
            display: block;
            width: 100%;
            max-width: 100%;
            overflow-x: auto;
            border-collapse: collapse;
            margin: 1.8rem 0;
            font-size: 0.84rem;
          }

          .blog-content th,
          .blog-content td {
            min-width: 120px;
            padding: 0.75rem;
            border: 1px solid #e2e8f0;
            text-align: left;
            vertical-align: top;
          }

          .blog-content th {
            background: #edf4f5;
            color: #071923;
            font-weight: 600;
          }

          .blog-content iframe,
          .blog-content video {
            display: block;
            width: 100%;
            max-width: 100%;
            margin: 1.8rem 0;
            border-radius: 0.8rem;
          }

          .blog-content hr {
            border: 0;
            border-top: 1px solid #e2e8f0;
            margin: 2.2rem 0;
          }

          @media (max-width: 768px) {
            .blog-content {
              max-width: 100%;
              font-size: 15px;
              line-height: 1.78;
            }

            .blog-content h1 {
              margin-top: 2rem;
              font-size: 2rem;
            }

            .blog-content h2 {
              margin-top: 2.1rem;
              font-size: 1.65rem;
            }

            .blog-content h3 {
              margin-top: 1.8rem;
              font-size: 1.3rem;
            }

            .blog-content h4 {
              font-size: 1.08rem;
            }

            .blog-content p {
              margin-bottom: 1.15rem;
            }

            .blog-content img {
              max-height: 420px;
              margin-top: 1.5rem;
            }
          }

          @media (max-width: 480px) {
            .blog-content {
              font-size: 14px;
              line-height: 1.76;
            }

            .blog-content h1 {
              font-size: 1.8rem;
            }

            .blog-content h2 {
              font-size: 1.5rem;
            }

            .blog-content h3 {
              font-size: 1.2rem;
            }

            .blog-content h4 {
              font-size: 1.05rem;
            }

            .blog-content blockquote {
              margin: 1.35rem 0;
              padding-left: 1rem;
              font-size: 14px;
            }

            .blog-content ul,
            .blog-content ol {
              padding-left: 1.2rem;
            }

            .blog-content img {
              max-height: 330px;
              border-radius: 0.65rem;
            }

            .blog-content pre {
              padding: 0.85rem;
              font-size: 0.74rem;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default BlogDetails;