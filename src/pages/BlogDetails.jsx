import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle,
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

// ======================================================
// HELPERS
// ======================================================

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

const getPostCategoryValue = (post) => {
  if (!post?.category) return "";

  if (typeof post.category === "object") {
    return post.category?._id || post.category?.name || "";
  }

  return post.category;
};

const getPostsFromResponse = (response) => {
  if (Array.isArray(response)) {
    return response;
  }

  if (Array.isArray(response?.data)) {
    return response.data;
  }

  if (Array.isArray(response?.data?.posts)) {
    return response.data.posts;
  }

  if (Array.isArray(response?.posts)) {
    return response.posts;
  }

  return [];
};

// ======================================================
// SERVICES
// ======================================================

const SERVICES = [
  {
    title: "Web Development",
    description:
      "Modern, responsive and scalable websites and web applications built around business requirements.",
    icon: Globe,
    path: "/web-development",
    label: "Web",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications for businesses, digital products, e-commerce and SaaS platforms.",
    icon: Smartphone,
    path: "/mobile-apps",
    label: "Mobile",
  },
  {
    title: "MERN Stack Development",
    description:
      "Full-stack applications using MongoDB, Express, React and Node.js with maintainable architecture.",
    icon: Layers,
    path: "/mern-stack-development",
    label: "Development",
  },
  {
    title: "SaaS Development",
    description:
      "Scalable SaaS products, dashboards, APIs and business platforms designed for continued development.",
    icon: Rocket,
    path: "/saas-product-development",
    label: "SaaS",
  },
  {
    title: "SEO Services",
    description:
      "Technical SEO, on-page optimisation, keyword strategy and search-focused website improvements.",
    icon: Search,
    path: "/seo-services",
    label: "SEO",
  },
  {
    title: "Digital Marketing",
    description:
      "Content, social media and digital campaign strategies designed to strengthen your online presence.",
    icon: Megaphone,
    path: "/digital-marketing",
    label: "Marketing",
  },
];

// ======================================================
// COMPONENT
// ======================================================

const BlogDetails = ({ isDark = true }) => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // ======================================================
  // BLOG STATE
  // ======================================================

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ======================================================
  // RELATED POSTS
  // ======================================================

  const [relatedPosts, setRelatedPosts] = useState([]);
  const [relatedLoading, setRelatedLoading] = useState(false);

  // ======================================================
  // COMMENTS STATE
  // ======================================================

  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [commentsError, setCommentsError] = useState("");

  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    content: "",
  });

  const [commentSubmitting, setCommentSubmitting] = useState(false);

  // ======================================================
  // FETCH BLOG
  // ======================================================

  useEffect(() => {
    let isMounted = true;

    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await postService.getPostBySlug(slug);

        const blog =
          response?.data?.post ||
          response?.data ||
          response?.post ||
          response;

        if (!blog || typeof blog !== "object") {
          throw new Error("Invalid blog data.");
        }

        if (!blog?._id) {
          throw new Error("Blog post ID is missing.");
        }

        if (isMounted) {
          setPost(blog);
        }
      } catch (err) {
        console.error("Fetch single blog error:", err);

        const message =
          err?.response?.data?.message ||
          err?.message ||
          "Blog post not found.";

        if (isMounted) {
          setPost(null);
          setError(message);
          toast.error("Unable to load article.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    if (slug) {
      fetchBlog();
    } else {
      setLoading(false);
      setError("Blog slug is missing.");
    }

    return () => {
      isMounted = false;
    };
  }, [slug]);

  // ======================================================
  // FETCH COMMENTS
  // ======================================================

  useEffect(() => {
    let isMounted = true;

    const fetchComments = async () => {
      if (!post?._id) return;

      try {
        setCommentsLoading(true);
        setCommentsError("");

        const response = await commentService.getPostComments(post._id);

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

        const message =
          err?.response?.data?.message ||
          "Unable to load comments.";

        if (isMounted) {
          setCommentsError(message);
          setComments([]);
        }
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

  // ======================================================
  // FETCH RELATED POSTS
  // ======================================================

  useEffect(() => {
    let isMounted = true;

    const fetchRelatedPosts = async () => {
      if (!post?._id) return;

      try {
        setRelatedLoading(true);

        const response = await postService.getPosts();
        const posts = getPostsFromResponse(response);

        const availablePosts = posts.filter((item) => {
          if (!item) return false;

          if (item?._id && post?._id) {
            return String(item._id) !== String(post._id);
          }

          return item?.slug !== post?.slug;
        });

        const currentCategory = getPostCategoryValue(post);

        const sameCategoryPosts = availablePosts.filter((item) => {
          if (!currentCategory) return false;

          return (
            String(getPostCategoryValue(item)).toLowerCase() ===
            String(currentCategory).toLowerCase()
          );
        });

        const sortByNewest = (a, b) => {
          const dateA = new Date(
            a?.publishedAt || a?.createdAt || 0
          ).getTime();

          const dateB = new Date(
            b?.publishedAt || b?.createdAt || 0
          ).getTime();

          return dateB - dateA;
        };

        sameCategoryPosts.sort(sortByNewest);

        const selected = [...sameCategoryPosts];

        if (selected.length < 3) {
          const selectedKeys = new Set(
            selected.map((item) =>
              String(item?._id || item?.slug || "")
            )
          );

          const otherPosts = availablePosts
            .filter((item) => {
              const key = String(item?._id || item?.slug || "");
              return !selectedKeys.has(key);
            })
            .sort(sortByNewest);

          selected.push(...otherPosts);
        }

        if (isMounted) {
          setRelatedPosts(selected.slice(0, 3));
        }
      } catch (err) {
        console.error("Fetch related posts error:", err);

        if (isMounted) {
          setRelatedPosts([]);
        }
      } finally {
        if (isMounted) {
          setRelatedLoading(false);
        }
      }
    };

    fetchRelatedPosts();

    return () => {
      isMounted = false;
    };
  }, [post]);

  // ======================================================
  // POST DATA
  // ======================================================

  const categoryName =
    post?.category && typeof post.category === "object"
      ? post.category?.name?.trim()
      : typeof post?.category === "string"
        ? post.category.trim()
        : "";

  const authorName =
    post?.author && typeof post.author === "object"
      ? post.author?.name?.trim()
      : typeof post?.author === "string"
        ? post.author.trim()
        : "";

  const authorAvatar =
    post?.author && typeof post.author === "object"
      ? post.author?.avatar
      : null;

  const authorBio =
    post?.author && typeof post.author === "object"
      ? post.author?.bio
      : null;

  const publishedDate = post?.publishedAt || post?.createdAt;
  const readTime = getReadTime(post);

  // ======================================================
  // DYNAMIC SEO
  // ======================================================

  const seo = useMemo(() => {
    if (!post) return null;

    const cleanContent = stripHtml(post?.content || "");

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

    const canonicalUrl = `${BASE_URL}/blog/${encodeURIComponent(
      canonicalSlug
    )}`;

    const image = post?.coverImage || null;

    const datePublished = toISODate(
      post?.publishedAt || post?.createdAt
    );

    const dateModified = toISODate(
      post?.updatedAt ||
        post?.publishedAt ||
        post?.createdAt
    );

    return {
      title,
      description,
      canonicalUrl,
      image,
      datePublished,
      dateModified,
    };
  }, [post, slug]);

  // ======================================================
  // COMMENT INPUT
  // ======================================================

  const handleCommentChange = (event) => {
    const { name, value } = event.target;

    setCommentForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ======================================================
  // SUBMIT COMMENT
  // ======================================================

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

    const commentData = {
      post: post._id,
      name,
      email,
      content,
    };

    try {
      setCommentSubmitting(true);

      await commentService.createComment(commentData);

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

      const message =
        err?.response?.data?.message ||
        err?.response?.data?.errors?.[0]?.msg ||
        err?.message ||
        "Unable to submit comment.";

      toast.error(message);
    } finally {
      setCommentSubmitting(false);
    }
  };

  // ======================================================
  // COMMENT HELPERS
  // ======================================================

  const getCommentAuthorName = (comment) => {
    if (comment?.name) {
      return comment.name;
    }

    if (comment?.user && typeof comment.user === "object") {
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

  // ======================================================
  // NAVIGATION
  // ======================================================

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleBackToBlog = () => {
    navigate("/blog");
    scrollTop();
  };

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
            Loading Article
          </p>
        </div>
      </div>
    );
  }

  // ======================================================
  // ERROR
  // ======================================================

  if (error || !post) {
    return (
      <>
        <Helmet>
          <title>Article Not Found | DevZore</title>
          <meta name="robots" content="noindex, follow" />
        </Helmet>

        <div
          className={`min-h-screen flex items-center justify-center px-6 ${
            isDark
              ? "bg-[#050505] text-white"
              : "bg-[#f8f8f8] text-slate-950"
          }`}
        >
          <div className="max-w-xl text-center">
            <div className="w-14 h-1 bg-purple-600 mx-auto mb-6" />

            <span className="text-purple-500 text-[9px] font-black uppercase tracking-[0.2em]">
              DevZore Journal
            </span>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight mt-3 mb-4">
              Article Not Found
            </h1>

            <p
              className={`text-sm leading-relaxed mb-7 ${
                isDark ? "text-gray-500" : "text-slate-600"
              }`}
            >
              {error || "The requested article could not be found."}
            </p>

            <button
              type="button"
              onClick={handleBackToBlog}
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 text-[10px] font-black uppercase tracking-[0.08em] transition-colors"
            >
              <ArrowLeft size={13} />
              Back to Journal
            </button>
          </div>
        </div>
      </>
    );
  }

  // ======================================================
  // SCHEMA
  // ======================================================

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${seo.canonicalUrl}#article`,
    headline: post?.title,
    description: seo.description,
    url: seo.canonicalUrl,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": seo.canonicalUrl,
    },

    ...(seo.image && {
      image: [seo.image],
    }),

    ...(seo.datePublished && {
      datePublished: seo.datePublished,
    }),

    ...(seo.dateModified && {
      dateModified: seo.dateModified,
    }),

    author: authorName
      ? {
          "@type": "Person",
          name: authorName,
        }
      : {
          "@type": "Organization",
          name: "DevZore",
          "@id": `${BASE_URL}/#organization`,
        },

    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },

    ...(categoryName && {
      articleSection: categoryName,
    }),
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
        name: post?.title || "Article",
        item: seo.canonicalUrl,
      },
    ],
  };

  return (
    <>
      {/* ======================================================
          SEO
      ====================================================== */}

      <Helmet>
        <title>{`${seo.title} | DevZore`}</title>

        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonicalUrl} />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="DevZore" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.canonicalUrl} />

        {seo.image && (
          <meta property="og:image" content={seo.image} />
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
          content={seo.image ? "summary_large_image" : "summary"}
        />

        <meta name="twitter:title" content={seo.title} />
        <meta
          name="twitter:description"
          content={seo.description}
        />

        {seo.image && (
          <meta name="twitter:image" content={seo.image} />
        )}

        <script type="application/ld+json">
          {JSON.stringify(blogPostingSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div
        className={`min-h-screen ${
          isDark
            ? "bg-[#050505] text-white"
            : "bg-[#f8f8f8] text-slate-950"
        }`}
      >
        {/* ======================================================
            TOP BAR
        ====================================================== */}

        <div
          className={`pt-20 sm:pt-24 border-b ${
            isDark
              ? "bg-[#080808] border-white/[0.08]"
              : "bg-white border-slate-200"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between gap-4 py-3">
              <button
                type="button"
                onClick={handleBackToBlog}
                className={`inline-flex items-center gap-2 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.1em] transition-colors ${
                  isDark
                    ? "text-gray-400 hover:text-white"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                <ArrowLeft size={13} />
                DevZore Journal
              </button>

              {categoryName && (
                <span className="text-purple-500 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.15em]">
                  {categoryName}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ======================================================
            ARTICLE WRAPPER
        ====================================================== */}

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* BREADCRUMB */}

          <nav
            aria-label="Breadcrumb"
            className={`py-4 border-b ${
              isDark
                ? "border-white/[0.07]"
                : "border-slate-200"
            }`}
          >
            <div
              className={`flex items-center gap-2 text-[9px] font-semibold overflow-hidden ${
                isDark ? "text-gray-600" : "text-slate-500"
              }`}
            >
              <Link
                to="/"
                onClick={scrollTop}
                className="hover:text-purple-500 transition-colors shrink-0"
                aria-label="Home"
              >
                <Home size={11} />
              </Link>

              <span>/</span>

              <Link
                to="/blog"
                onClick={scrollTop}
                className="hover:text-purple-500 transition-colors shrink-0"
              >
                Blog
              </Link>

              <span>/</span>

              <span className="truncate">{post?.title}</span>
            </div>
          </nav>

          {/* ======================================================
              ARTICLE HEADER
          ====================================================== */}

          <header className="max-w-4xl pt-7 sm:pt-9 pb-6">
            {categoryName && (
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-[2px] bg-purple-600" />

                <span className="text-purple-500 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.18em]">
                  {categoryName}
                </span>
              </div>
            )}

            <h1
              className={`text-[30px] sm:text-[42px] md:text-[50px] lg:text-[56px] font-black tracking-[-0.04em] leading-[1.04] mb-5 ${
                isDark ? "text-white" : "text-slate-950"
              }`}
            >
              {post?.title || "Untitled Article"}
            </h1>

            {post?.excerpt && (
              <p
                className={`text-base sm:text-lg leading-[1.6] max-w-3xl mb-6 ${
                  isDark ? "text-gray-400" : "text-slate-600"
                }`}
              >
                {post.excerpt}
              </p>
            )}

            <div
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t ${
                isDark
                  ? "border-white/[0.08]"
                  : "border-slate-200"
              }`}
            >
              <div className="flex items-center gap-3">
                {authorAvatar ? (
                  <img
                    src={authorAvatar}
                    alt={authorName || "Article author"}
                    className={`w-9 h-9 rounded-full object-cover border ${
                      isDark
                        ? "border-white/10"
                        : "border-slate-200"
                    }`}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center ${
                      isDark
                        ? "bg-white/[0.06] text-gray-400"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <User size={15} />
                  </div>
                )}

                <div>
                  <p
                    className={`text-[8px] font-bold uppercase tracking-[0.13em] ${
                      isDark
                        ? "text-gray-600"
                        : "text-slate-400"
                    }`}
                  >
                    By
                  </p>

                  <p
                    className={`text-[12px] font-black ${
                      isDark
                        ? "text-white"
                        : "text-slate-950"
                    }`}
                  >
                    {authorName || "DevZore Team"}
                  </p>
                </div>
              </div>

              <div
                className={`flex flex-wrap items-center gap-x-3 gap-y-2 text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.06em] ${
                  isDark ? "text-gray-600" : "text-slate-500"
                }`}
              >
                {publishedDate && (
                  <span className="flex items-center gap-1">
                    <CalendarDays size={10} />
                    {formatDate(publishedDate)}
                  </span>
                )}

                {readTime && (
                  <span className="flex items-center gap-1">
                    <Clock3 size={10} />
                    {readTime}
                  </span>
                )}

                {post?.views !== undefined &&
                  post?.views !== null && (
                    <span className="flex items-center gap-1">
                      <Eye size={10} />
                      {post.views} views
                    </span>
                  )}
              </div>
            </div>
          </header>

          {/* ======================================================
              COMPACT COVER IMAGE
          ====================================================== */}

          {post?.coverImage && (
            <figure className="max-w-5xl mb-7 sm:mb-9">
              <div
                className={`w-full h-[210px] sm:h-[300px] md:h-[360px] lg:h-[400px] overflow-hidden rounded-xl ${
                  isDark ? "bg-[#111]" : "bg-slate-200"
                }`}
              >
                <img
                  src={post.coverImage}
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
                <figcaption
                  className={`text-[9px] sm:text-[10px] pt-2 ${
                    isDark
                      ? "text-gray-600"
                      : "text-slate-500"
                  }`}
                >
                  {post.coverImageAlt}
                </figcaption>
              )}
            </figure>
          )}

          {/* ======================================================
              CONTENT + SIDEBAR
          ====================================================== */}

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-8">
              {/* ARTICLE */}

              <article
                className={`blog-content ${
                  isDark
                    ? "blog-content-dark"
                    : "blog-content-light"
                }`}
                dangerouslySetInnerHTML={{
                  __html:
                    post?.content ||
                    "<p>No article content is available.</p>",
                }}
              />

              {/* AUTHOR */}

              {authorBio && (
                <section
                  className={`mt-10 pt-6 border-t ${
                    isDark
                      ? "border-white/[0.08]"
                      : "border-slate-200"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {authorAvatar ? (
                      <img
                        src={authorAvatar}
                        alt={authorName || "Article author"}
                        className="w-12 h-12 rounded-full object-cover shrink-0"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white shrink-0">
                        <User size={18} />
                      </div>
                    )}

                    <div>
                      <span className="text-purple-500 text-[8px] font-black uppercase tracking-[0.16em]">
                        About the author
                      </span>

                      <h2
                        className={`text-base font-black mt-1 mb-1.5 ${
                          isDark
                            ? "text-white"
                            : "text-slate-950"
                        }`}
                      >
                        {authorName || "DevZore Team"}
                      </h2>

                      <p
                        className={`text-xs sm:text-sm leading-relaxed ${
                          isDark
                            ? "text-gray-500"
                            : "text-slate-600"
                        }`}
                      >
                        {authorBio}
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {/* ======================================================
                  RELATED ARTICLES
              ====================================================== */}

              {(relatedLoading || relatedPosts.length > 0) && (
                <section
                  className={`mt-10 sm:mt-12 pt-7 border-t ${
                    isDark
                      ? "border-white/[0.07]"
                      : "border-slate-200"
                  }`}
                >
                  <div className="flex items-end justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-[2px] bg-purple-600" />

                        <span className="text-purple-500 text-[8px] font-black uppercase tracking-[0.18em]">
                          Continue Reading
                        </span>
                      </div>

                      <h2
                        className={`text-xl sm:text-2xl font-black tracking-tight ${
                          isDark
                            ? "text-white"
                            : "text-slate-950"
                        }`}
                      >
                        Related Articles
                      </h2>

                      <p
                        className={`text-[10px] sm:text-[11px] mt-1 max-w-lg leading-relaxed ${
                          isDark
                            ? "text-gray-600"
                            : "text-slate-500"
                        }`}
                      >
                        Explore more useful articles and insights
                        from the DevZore Journal.
                      </p>
                    </div>

                    <Link
                      to="/blog"
                      onClick={scrollTop}
                      className="hidden sm:inline-flex items-center gap-1.5 text-purple-500 hover:text-purple-400 text-[8px] font-black uppercase tracking-[0.1em]"
                    >
                      All Articles
                      <ArrowRight size={10} />
                    </Link>
                  </div>

                  {relatedLoading ? (
                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className={`overflow-hidden rounded-xl border animate-pulse ${
                            isDark
                              ? "bg-[#080808] border-white/[0.07]"
                              : "bg-white border-slate-200"
                          }`}
                        >
                          <div
                            className={`h-[130px] ${
                              isDark
                                ? "bg-white/[0.05]"
                                : "bg-slate-200"
                            }`}
                          />

                          <div className="p-3.5">
                            <div
                              className={`h-2 w-16 rounded mb-3 ${
                                isDark
                                  ? "bg-white/[0.07]"
                                  : "bg-slate-200"
                              }`}
                            />

                            <div
                              className={`h-4 w-full rounded mb-2 ${
                                isDark
                                  ? "bg-white/[0.07]"
                                  : "bg-slate-200"
                              }`}
                            />

                            <div
                              className={`h-4 w-3/4 rounded ${
                                isDark
                                  ? "bg-white/[0.07]"
                                  : "bg-slate-200"
                              }`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
                      {relatedPosts.map((relatedPost) => {
                        const relatedCategory =
                          relatedPost?.category &&
                          typeof relatedPost.category ===
                            "object"
                            ? relatedPost.category?.name
                            : relatedPost?.category;

                        const relatedDate =
                          relatedPost?.publishedAt ||
                          relatedPost?.createdAt;

                        const relatedReadTime =
                          getReadTime(relatedPost);

                        const relatedDescription =
                          truncateText(
                            relatedPost?.excerpt ||
                              stripHtml(
                                relatedPost?.content || ""
                              ),
                            90
                          );

                        return (
                          <Link
                            key={
                              relatedPost?._id ||
                              relatedPost?.slug
                            }
                            to={`/blog/${relatedPost.slug}`}
                            onClick={scrollTop}
                            className={`group overflow-hidden rounded-xl border transition-all duration-300 ${
                              isDark
                                ? "bg-[#080808] border-white/[0.07] hover:border-purple-500/30 hover:bg-[#0d0d0d]"
                                : "bg-white border-slate-200 hover:border-purple-300 hover:shadow-lg"
                            }`}
                          >
                            <div
                              className={`relative h-[130px] sm:h-[135px] overflow-hidden ${
                                isDark
                                  ? "bg-[#111]"
                                  : "bg-slate-100"
                              }`}
                            >
                              {relatedPost?.coverImage ? (
                                <img
                                  src={
                                    relatedPost.coverImage
                                  }
                                  alt={
                                    relatedPost?.coverImageAlt ||
                                    relatedPost?.title ||
                                    "Related article"
                                  }
                                  loading="lazy"
                                  decoding="async"
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <Search
                                    size={20}
                                    className={
                                      isDark
                                        ? "text-gray-800"
                                        : "text-slate-300"
                                    }
                                  />
                                </div>
                              )}

                              {relatedCategory && (
                                <span className="absolute top-2.5 left-2.5 bg-purple-600 text-white px-2 py-1 rounded text-[6px] font-black uppercase tracking-[0.1em]">
                                  {relatedCategory}
                                </span>
                              )}
                            </div>

                            <div className="p-3.5">
                              <div
                                className={`flex flex-wrap items-center gap-2 mb-2 text-[7px] font-bold uppercase ${
                                  isDark
                                    ? "text-gray-600"
                                    : "text-slate-400"
                                }`}
                              >
                                {relatedDate && (
                                  <span className="inline-flex items-center gap-1">
                                    <CalendarDays size={8} />
                                    {formatDate(
                                      relatedDate
                                    )}
                                  </span>
                                )}

                                {relatedReadTime && (
                                  <span className="inline-flex items-center gap-1">
                                    <Clock3 size={8} />
                                    {relatedReadTime}
                                  </span>
                                )}
                              </div>

                              <h3
                                className={`text-[13px] sm:text-[14px] font-black leading-[1.35] mb-2 line-clamp-2 transition-colors ${
                                  isDark
                                    ? "text-white group-hover:text-purple-400"
                                    : "text-slate-950 group-hover:text-purple-600"
                                }`}
                              >
                                {relatedPost?.title ||
                                  "DevZore Article"}
                              </h3>

                              {relatedDescription && (
                                <p
                                  className={`text-[9px] sm:text-[10px] leading-relaxed line-clamp-2 mb-3 ${
                                    isDark
                                      ? "text-gray-600"
                                      : "text-slate-500"
                                  }`}
                                >
                                  {relatedDescription}
                                </p>
                              )}

                              <span className="inline-flex items-center gap-1.5 text-purple-500 text-[7px] font-black uppercase tracking-[0.08em]">
                                Read Article

                                <ArrowRight
                                  size={9}
                                  className="transition-transform group-hover:translate-x-1"
                                />
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}

                  <Link
                    to="/blog"
                    onClick={scrollTop}
                    className={`sm:hidden mt-4 w-full inline-flex items-center justify-center gap-2 border rounded-lg py-2.5 text-[8px] font-black uppercase tracking-[0.1em] ${
                      isDark
                        ? "border-white/10 text-gray-400"
                        : "border-slate-200 text-slate-600"
                    }`}
                  >
                    View All Articles
                    <ArrowRight size={10} />
                  </Link>
                </section>
              )}

              {/* ======================================================
                  SERVICES
              ====================================================== */}

              <section
                className={`mt-10 pt-7 border-t ${
                  isDark
                    ? "border-white/[0.08]"
                    : "border-slate-200"
                }`}
              >
                <div className="flex items-end justify-between gap-4 mb-5">
                  <div>
                    <span className="text-purple-500 text-[8px] font-black uppercase tracking-[0.18em]">
                      DevZore Services
                    </span>

                    <h2
                      className={`text-xl sm:text-2xl font-black mt-1 ${
                        isDark
                          ? "text-white"
                          : "text-slate-950"
                      }`}
                    >
                      Need Help With Your Digital Product?
                    </h2>
                  </div>

                  <Link
                    to="/allservices"
                    onClick={scrollTop}
                    className="hidden sm:inline-flex items-center gap-1.5 text-purple-500 text-[8px] font-black uppercase"
                  >
                    All Services
                    <ArrowRight size={10} />
                  </Link>
                </div>

                <div
                  className={`grid sm:grid-cols-2 border-t border-l ${
                    isDark
                      ? "border-white/[0.08]"
                      : "border-slate-200"
                  }`}
                >
                  {SERVICES.map((service) => {
                    const Icon = service.icon;

                    return (
                      <Link
                        key={service.title}
                        to={service.path}
                        onClick={scrollTop}
                        className={`group p-4 border-r border-b transition-colors ${
                          isDark
                            ? "border-white/[0.08] bg-[#080808] hover:bg-[#0d0d0d]"
                            : "border-slate-200 bg-white hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 mb-2">
                          <div
                            className={`w-8 h-8 flex items-center justify-center ${
                              isDark
                                ? "bg-white/[0.05] text-purple-400"
                                : "bg-purple-50 text-purple-600"
                            }`}
                          >
                            <Icon size={14} />
                          </div>

                          <h3
                            className={`text-[13px] font-black ${
                              isDark
                                ? "text-white"
                                : "text-slate-950"
                            }`}
                          >
                            {service.title}
                          </h3>
                        </div>

                        <p
                          className={`text-[10px] leading-relaxed ${
                            isDark
                              ? "text-gray-600"
                              : "text-slate-500"
                          }`}
                        >
                          {service.description}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </section>

              {/* ======================================================
                  COMPACT COMMENTS
              ====================================================== */}

              <section
                className={`mt-10 pt-7 border-t ${
                  isDark
                    ? "border-white/[0.08]"
                    : "border-slate-200"
                }`}
              >
                <div
                  className={`flex items-center justify-between gap-4 border-b pb-3 mb-5 ${
                    isDark
                      ? "border-white/[0.1]"
                      : "border-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <MessageCircle
                      size={14}
                      className="text-purple-500"
                    />

                    <h2
                      className={`text-sm font-black uppercase tracking-[0.06em] ${
                        isDark
                          ? "text-white"
                          : "text-slate-950"
                      }`}
                    >
                      Discussion
                    </h2>
                  </div>

                  <span
                    className={`text-[8px] font-bold ${
                      isDark
                        ? "text-gray-600"
                        : "text-slate-400"
                    }`}
                  >
                    {comments.length}{" "}
                    {comments.length === 1
                      ? "COMMENT"
                      : "COMMENTS"}
                  </span>
                </div>

                <form
                  onSubmit={handleCommentSubmit}
                  className={`p-4 sm:p-5 mb-6 rounded-xl border ${
                    isDark
                      ? "bg-[#0a0a0a] border-white/[0.08]"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <h3
                    className={`text-base font-black mb-1 ${
                      isDark
                        ? "text-white"
                        : "text-slate-950"
                    }`}
                  >
                    Join the discussion
                  </h3>

                  <p
                    className={`text-[10px] mb-4 ${
                      isDark
                        ? "text-gray-600"
                        : "text-slate-500"
                    }`}
                  >
                    Share a relevant question or perspective
                    about this article.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-3">
                    <input
                      type="text"
                      name="name"
                      value={commentForm.name}
                      onChange={handleCommentChange}
                      placeholder="Your name"
                      autoComplete="name"
                      maxLength={60}
                      disabled={commentSubmitting}
                      required
                      className={`w-full px-3.5 py-2.5 rounded-lg outline-none border text-xs ${
                        isDark
                          ? "bg-[#050505] border-white/10 text-white placeholder:text-gray-700 focus:border-purple-500"
                          : "bg-white border-slate-300 text-slate-950 focus:border-purple-600"
                      }`}
                    />

                    <input
                      type="email"
                      name="email"
                      value={commentForm.email}
                      onChange={handleCommentChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      maxLength={120}
                      disabled={commentSubmitting}
                      required
                      className={`w-full px-3.5 py-2.5 rounded-lg outline-none border text-xs ${
                        isDark
                          ? "bg-[#050505] border-white/10 text-white placeholder:text-gray-700 focus:border-purple-500"
                          : "bg-white border-slate-300 text-slate-950 focus:border-purple-600"
                      }`}
                    />
                  </div>

                  <textarea
                    name="content"
                    value={commentForm.content}
                    onChange={handleCommentChange}
                    placeholder="Write your comment..."
                    rows={3}
                    minLength={10}
                    maxLength={500}
                    disabled={commentSubmitting}
                    required
                    className={`w-full px-3.5 py-2.5 rounded-lg outline-none border text-xs resize-y ${
                      isDark
                        ? "bg-[#050505] border-white/10 text-white placeholder:text-gray-700 focus:border-purple-500"
                        : "bg-white border-slate-300 text-slate-950 focus:border-purple-600"
                    }`}
                  />

                  <div
                    className={`flex justify-between mt-1.5 text-[8px] ${
                      isDark
                        ? "text-gray-700"
                        : "text-slate-400"
                    }`}
                  >
                    <span>10–500 characters</span>
                    <span>{commentForm.content.length}/500</span>
                  </div>

                  <button
                    type="submit"
                    disabled={commentSubmitting}
                    className="mt-4 inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white px-4 py-2.5 rounded-lg text-[9px] font-black uppercase tracking-[0.08em]"
                  >
                    <Send size={11} />

                    {commentSubmitting
                      ? "Submitting..."
                      : "Post Comment"}
                  </button>
                </form>

                {commentsLoading && (
                  <p
                    className={`py-5 text-center text-xs ${
                      isDark
                        ? "text-gray-600"
                        : "text-slate-500"
                    }`}
                  >
                    Loading comments...
                  </p>
                )}

                {!commentsLoading && commentsError && (
                  <div className="p-3 border border-red-500/20 text-red-400 text-xs">
                    {commentsError}
                  </div>
                )}

                {!commentsLoading &&
                  !commentsError &&
                  comments.length === 0 && (
                    <div
                      className={`py-7 text-center rounded-xl border ${
                        isDark
                          ? "bg-[#080808] border-white/[0.07]"
                          : "bg-white border-slate-200"
                      }`}
                    >
                      <MessageCircle
                        size={20}
                        className="mx-auto mb-2 text-purple-500"
                      />

                      <p className="text-xs font-black">
                        No comments yet
                      </p>

                      <p
                        className={`text-[10px] mt-1 ${
                          isDark
                            ? "text-gray-600"
                            : "text-slate-500"
                        }`}
                      >
                        Be the first to join the discussion.
                      </p>
                    </div>
                  )}

                {!commentsLoading &&
                  !commentsError &&
                  comments.length > 0 && (
                    <div>
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
                            className={`py-4 border-b last:border-b-0 ${
                              isDark
                                ? "border-white/[0.07]"
                                : "border-slate-200"
                            }`}
                          >
                            <div className="flex gap-3">
                              <div className="w-8 h-8 shrink-0 rounded-full bg-purple-600 flex items-center justify-center text-white font-black text-[10px]">
                                {commentAuthor
                                  .charAt(0)
                                  .toUpperCase()}
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex justify-between gap-2 mb-1">
                                  <h4 className="text-xs font-black">
                                    {commentAuthor}
                                  </h4>

                                  {commentDate && (
                                    <time
                                      dateTime={toISODate(
                                        commentDate
                                      )}
                                      className={`text-[8px] ${
                                        isDark
                                          ? "text-gray-700"
                                          : "text-slate-400"
                                      }`}
                                    >
                                      {formatDate(
                                        commentDate
                                      )}
                                    </time>
                                  )}
                                </div>

                                <p
                                  className={`text-xs leading-relaxed whitespace-pre-wrap break-words ${
                                    isDark
                                      ? "text-gray-400"
                                      : "text-slate-600"
                                  }`}
                                >
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

            {/* ======================================================
                SIDEBAR
            ====================================================== */}

            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24 space-y-4">
                <div
                  className={`border-t-4 border-purple-600 p-5 ${
                    isDark
                      ? "bg-[#0a0a0a] border-x border-b border-x-white/[0.07] border-b-white/[0.07]"
                      : "bg-white border-x border-b border-x-slate-200 border-b-slate-200"
                  }`}
                >
                  <span className="text-purple-500 text-[8px] font-black uppercase tracking-[0.18em]">
                    DevZore Journal
                  </span>

                  <h2 className="text-lg font-black mt-2 mb-2">
                    Technology insights for modern digital products.
                  </h2>

                  <p
                    className={`text-[11px] leading-relaxed mb-4 ${
                      isDark
                        ? "text-gray-500"
                        : "text-slate-600"
                    }`}
                  >
                    Explore practical articles covering software
                    development, SaaS, mobile applications, SEO
                    and digital business.
                  </p>

                  <Link
                    to="/blog"
                    onClick={scrollTop}
                    className="inline-flex items-center gap-2 text-purple-500 text-[9px] font-black uppercase"
                  >
                    More Articles
                    <ArrowRight size={11} />
                  </Link>
                </div>

                <div
                  className={`p-5 border ${
                    isDark
                      ? "bg-[#080808] border-white/[0.07]"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <span
                    className={`text-[8px] font-black uppercase tracking-[0.15em] ${
                      isDark
                        ? "text-gray-600"
                        : "text-slate-400"
                    }`}
                  >
                    DevZore Services
                  </span>

                  <div className="mt-3">
                    {SERVICES.map((service) => {
                      const Icon = service.icon;

                      return (
                        <Link
                          key={service.title}
                          to={service.path}
                          onClick={scrollTop}
                          className={`group flex items-center gap-2.5 py-2.5 border-b last:border-b-0 ${
                            isDark
                              ? "border-white/[0.06] text-gray-400 hover:text-white"
                              : "border-slate-100 text-slate-600 hover:text-slate-950"
                          }`}
                        >
                          <Icon
                            size={12}
                            className="text-purple-500"
                          />

                          <span className="text-[9px] font-bold flex-1">
                            {service.title}
                          </span>

                          <ArrowRight
                            size={9}
                            className="text-purple-500"
                          />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div
                  className={`p-5 border ${
                    isDark
                      ? "bg-[#080808] border-white/[0.07]"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <span className="text-purple-500 text-[8px] font-black uppercase tracking-[0.15em]">
                    Have a Project?
                  </span>

                  <h3 className="text-base font-black mt-2 mb-2">
                    Build your next digital product with DevZore.
                  </h3>

                  <p
                    className={`text-[10px] leading-relaxed mb-4 ${
                      isDark
                        ? "text-gray-500"
                        : "text-slate-600"
                    }`}
                  >
                    Discuss your web, mobile, SaaS, backend,
                    SEO or digital marketing requirements.
                  </p>

                  <Link
                    to="/contact"
                    onClick={scrollTop}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-[8px] font-black uppercase"
                  >
                    Discuss Project
                    <ArrowRight size={10} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* ======================================================
              BOTTOM
          ====================================================== */}

          <div
            className={`mt-10 py-6 border-t ${
              isDark
                ? "border-white/[0.08]"
                : "border-slate-200"
            }`}
          >
            <button
              type="button"
              onClick={handleBackToBlog}
              className={`group inline-flex items-center gap-2 text-[9px] font-black uppercase ${
                isDark
                  ? "text-gray-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              <ArrowLeft
                size={12}
                className="group-hover:-translate-x-1 transition-transform"
              />

              Explore More Articles
            </button>
          </div>

          {/* FINAL CTA */}

          <section
            className={`my-10 sm:my-12 border-t-4 border-purple-600 ${
              isDark ? "bg-[#0a0a0a]" : "bg-white"
            }`}
          >
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-8 p-5 sm:p-6">
                <span className="text-purple-500 text-[8px] font-black uppercase tracking-[0.18em]">
                  Work With DevZore
                </span>

                <h2 className="text-xl sm:text-2xl font-black mt-2 mb-2">
                  Have a software or digital project in mind?
                </h2>

                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    isDark
                      ? "text-gray-500"
                      : "text-slate-600"
                  }`}
                >
                  Tell us what you are planning and discuss the
                  technical requirements and suitable approach.
                </p>
              </div>

              <div
                className={`lg:col-span-4 p-5 sm:p-6 flex items-center lg:justify-end border-t lg:border-t-0 lg:border-l ${
                  isDark
                    ? "border-white/[0.08]"
                    : "border-slate-200"
                }`}
              >
                <Link
                  to="/contact"
                  onClick={scrollTop}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-[9px] font-black uppercase"
                >
                  Discuss Your Project
                  <ArrowRight size={11} />
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* ======================================================
            ARTICLE CONTENT CSS
        ====================================================== */}

        <style>{`
          .blog-content {
            width: 100%;
            max-width: 740px;
            overflow-wrap: break-word;
            word-break: normal;
            font-size: 16px;
            line-height: 1.8;
          }

          .blog-content > *:first-child {
            margin-top: 0;
          }

          .blog-content > *:last-child {
            margin-bottom: 0;
          }

          .blog-content p {
            margin: 0 0 1.25rem;
          }

          .blog-content-dark {
            color: #d1d5db;
          }

          .blog-content-light {
            color: #334155;
          }

          .blog-content h1,
          .blog-content h2,
          .blog-content h3,
          .blog-content h4,
          .blog-content h5,
          .blog-content h6 {
            font-weight: 900;
            letter-spacing: -0.025em;
            line-height: 1.2;
            margin-top: 2rem;
            margin-bottom: 0.8rem;
          }

          .blog-content-dark h1,
          .blog-content-dark h2,
          .blog-content-dark h3,
          .blog-content-dark h4,
          .blog-content-dark h5,
          .blog-content-dark h6 {
            color: #ffffff;
          }

          .blog-content-light h1,
          .blog-content-light h2,
          .blog-content-light h3,
          .blog-content-light h4,
          .blog-content-light h5,
          .blog-content-light h6 {
            color: #0f172a;
          }

          .blog-content h1 {
            font-size: clamp(1.8rem, 4vw, 2.4rem);
          }

          .blog-content h2 {
            font-size: clamp(1.45rem, 3vw, 1.9rem);
          }

          .blog-content h3 {
            font-size: clamp(1.2rem, 2.5vw, 1.45rem);
          }

          .blog-content h4 {
            font-size: 1.08rem;
          }

          .blog-content strong {
            font-weight: 800;
          }

          .blog-content-dark strong {
            color: #f9fafb;
          }

          .blog-content-light strong {
            color: #0f172a;
          }

          .blog-content a {
            color: #9333ea;
            text-decoration: underline;
            text-underline-offset: 3px;
          }

          .blog-content a:hover {
            color: #a855f7;
          }

          .blog-content ul,
          .blog-content ol {
            padding-left: 1.35rem;
            margin: 0.7rem 0 1.25rem;
          }

          .blog-content ul {
            list-style-type: disc;
          }

          .blog-content ol {
            list-style-type: decimal;
          }

          .blog-content li {
            margin-bottom: 0.5rem;
          }

          .blog-content li::marker {
            color: #9333ea;
          }

          .blog-content blockquote {
            border-left: 3px solid #9333ea;
            margin: 1.6rem 0;
            padding: 1rem 1.2rem;
          }

          .blog-content-dark blockquote {
            background: rgba(147, 51, 234, 0.07);
          }

          .blog-content-light blockquote {
            background: #faf5ff;
          }

          .blog-content img {
            display: block;
            max-width: 100%;
            height: auto;
            max-height: 460px;
            object-fit: contain;
            margin: 1.5rem auto;
            border-radius: 0.65rem;
          }

          .blog-content figure {
            max-width: 100%;
            margin: 1.5rem 0;
          }

          .blog-content figcaption {
            font-size: 0.7rem;
            opacity: 0.65;
          }

          .blog-content pre {
            width: 100%;
            max-width: 100%;
            overflow-x: auto;
            margin: 1.5rem 0;
            padding: 1rem;
            background: #0b0b0b;
            border: 1px solid rgba(255, 255, 255, 0.08);
            color: #f3f4f6;
            font-size: 0.8rem;
            line-height: 1.65;
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
            font-size: 0.88em;
          }

          .blog-content-dark p code,
          .blog-content-dark li code {
            background: rgba(255, 255, 255, 0.08);
            color: #e9d5ff;
          }

          .blog-content-light p code,
          .blog-content-light li code {
            background: #f1f5f9;
            color: #7e22ce;
          }

          .blog-content table {
            display: block;
            width: 100%;
            overflow-x: auto;
            border-collapse: collapse;
            margin: 1.5rem 0;
            font-size: 0.85rem;
          }

          .blog-content th,
          .blog-content td {
            padding: 0.65rem 0.75rem;
            border: 1px solid;
            text-align: left;
          }

          .blog-content-dark th,
          .blog-content-dark td {
            border-color: rgba(255, 255, 255, 0.1);
          }

          .blog-content-light th,
          .blog-content-light td {
            border-color: #e2e8f0;
          }

          .blog-content iframe,
          .blog-content video {
            display: block;
            width: 100%;
            max-width: 100%;
            margin: 1.5rem 0;
          }

          .blog-content hr {
            border: 0;
            border-top: 1px solid;
            margin: 2rem 0;
          }

          .blog-content-dark hr {
            border-color: rgba(255, 255, 255, 0.1);
          }

          .blog-content-light hr {
            border-color: #e2e8f0;
          }

          @media (max-width: 768px) {
            .blog-content {
              max-width: 100%;
              font-size: 15px;
              line-height: 1.75;
            }

            .blog-content h1,
            .blog-content h2,
            .blog-content h3,
            .blog-content h4,
            .blog-content h5,
            .blog-content h6 {
              margin-top: 1.7rem;
              margin-bottom: 0.7rem;
            }

            .blog-content p {
              margin-bottom: 1.05rem;
            }

            .blog-content img {
              max-height: 350px;
              margin: 1.25rem auto;
            }
          }

          @media (max-width: 480px) {
            .blog-content {
              font-size: 15px;
              line-height: 1.72;
            }

            .blog-content blockquote {
              padding: 0.85rem;
              margin: 1.25rem 0;
            }

            .blog-content pre {
              padding: 0.85rem;
              font-size: 0.74rem;
            }

            .blog-content ul,
            .blog-content ol {
              padding-left: 1.15rem;
            }

            .blog-content img {
              max-height: 300px;
              border-radius: 0.5rem;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default BlogDetails;