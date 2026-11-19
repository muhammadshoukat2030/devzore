import {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import toast from "react-hot-toast";

import {
  Eye,
  ToggleLeft,
  ToggleRight,
  Trash2,
  Square,
  CheckSquare,
} from "lucide-react";

import postService from "../../services/postService";

// ======================================================
// API CONFIG
// ======================================================
//
// Local:
// http://localhost:5000/api
//
// Production:
// https://devzore-backend.vercel.app/api
//
// Production value VITE_API_URL se aayegi.
// ======================================================

const API_URL = (
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api"
).replace(/\/+$/, "");

// ======================================================
// IMAGE HELPERS
// ======================================================

const safeDecodeURIComponent = (value = "") => {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};

// ------------------------------------------------------
// Old saved image URL se Google Drive File ID nikalna.
//
// Supports:
//
// http://localhost:5000/api/upload/image/FILE_ID
// https://backend.com/api/upload/image/FILE_ID
// /api/upload/image/FILE_ID
// /upload/image/FILE_ID
// ------------------------------------------------------

const extractImageFileId = (value = "") => {
  if (!value) {
    return "";
  }

  const imageUrl = String(value).trim();

  if (!imageUrl) {
    return "";
  }

  const markers = [
    "/api/upload/image/",
    "/upload/image/",
  ];

  for (const marker of markers) {
    const markerIndex =
      imageUrl.indexOf(marker);

    if (markerIndex === -1) {
      continue;
    }

    const start =
      markerIndex + marker.length;

    const remainder =
      imageUrl.slice(start);

    const fileId =
      remainder
        .split("?")[0]
        .split("#")[0]
        .split("/")[0]
        .trim();

    if (fileId) {
      return safeDecodeURIComponent(fileId);
    }
  }

  return "";
};

// ------------------------------------------------------
// FINAL BLOG IMAGE URL
// ------------------------------------------------------
//
// Priority:
//
// 1. coverImagePublicId
// 2. File ID extracted from old coverImage URL
// 3. External/custom coverImage URL
//
// This prevents localhost URLs stored in MongoDB from
// breaking production images.
// ------------------------------------------------------

const getBlogImageUrl = (post) => {
  if (!post) {
    return "";
  }

  // ----------------------------------------------------
  // 1. Google Drive File ID saved separately
  // ----------------------------------------------------

  const publicId =
    typeof post.coverImagePublicId === "string"
      ? post.coverImagePublicId.trim()
      : "";

  if (publicId) {
    return `${API_URL}/upload/image/${encodeURIComponent(
      publicId
    )}`;
  }

  // ----------------------------------------------------
  // 2. Existing cover image
  // ----------------------------------------------------

  const coverImage =
    typeof post.coverImage === "string"
      ? post.coverImage.trim()
      : "";

  if (!coverImage) {
    return "";
  }

  // ----------------------------------------------------
  // 3. Old backend image URL
  // ----------------------------------------------------

  const extractedFileId =
    extractImageFileId(coverImage);

  if (extractedFileId) {
    return `${API_URL}/upload/image/${encodeURIComponent(
      extractedFileId
    )}`;
  }

  // ----------------------------------------------------
  // 4. Normal remote URL
  // ----------------------------------------------------

  if (
    coverImage.startsWith("http://") ||
    coverImage.startsWith("https://") ||
    coverImage.startsWith("data:") ||
    coverImage.startsWith("blob:")
  ) {
    return coverImage;
  }

  // ----------------------------------------------------
  // 5. Relative /api/... URL
  // ----------------------------------------------------

  if (coverImage.startsWith("/api/")) {
    const backendOrigin =
      API_URL.replace(/\/api\/?$/, "");

    return `${backendOrigin}${coverImage}`;
  }

  // ----------------------------------------------------
  // 6. Relative /upload/... URL
  // ----------------------------------------------------

  if (coverImage.startsWith("/upload/")) {
    return `${API_URL}${coverImage}`;
  }

  // ----------------------------------------------------
  // Fallback
  // ----------------------------------------------------

  return coverImage;
};

// ======================================================
// WORD COUNT HELPER
// ======================================================

const getWordCount = (content) => {
  if (!content) return null;
  const count = content
    .replace(/<[^>]*>/g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return count;
};

// ======================================================
// POST THUMBNAIL
// ======================================================

const PostThumbnail = ({ post }) => {
  const imageUrl =
    getBlogImageUrl(post);

  const [imageFailed, setImageFailed] =
    useState(false);

  useEffect(() => {
    setImageFailed(false);
  }, [imageUrl]);

  return (
    <div className="w-10 h-8 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100 border border-slate-200">
      {imageUrl && !imageFailed ? (
        <img
          src={imageUrl}
          alt={
            post?.coverImageAlt ||
            post?.title ||
            "Post cover"
          }
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          onError={() => {
            console.warn(
              "⚠️ Admin thumbnail failed:",
              {
                title: post?.title,
                imageUrl,
                publicId:
                  post?.coverImagePublicId,
              }
            );

            setImageFailed(true);
          }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-slate-50">
          <span className="text-[10px] font-medium text-slate-400">
            No Image
          </span>
        </div>
      )}
    </div>
  );
};

// ======================================================
// STATUS FILTER TABS
// ======================================================

const STATUS_FILTERS = [
  { label: "All", value: "all" },
  { label: "Published", value: "published" },
  { label: "Draft", value: "draft" },
  { label: "Scheduled", value: "scheduled" },
];

// ======================================================
// COMPONENT
// ======================================================

const AdminPosts = () => {
  const navigate = useNavigate();

  // ====================================================
  // STATE
  // ====================================================

  const [posts, setPosts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [refreshing, setRefreshing] =
    useState(false);

  const [deletingId, setDeletingId] =
    useState(null);

  const [togglingId, setTogglingId] =
    useState(null);

  // Status filter
  const [statusFilter, setStatusFilter] =
    useState("all");

  // Bulk select
  const [selectedIds, setSelectedIds] =
    useState([]);

  const [bulkDeleting, setBulkDeleting] =
    useState(false);

  // Search

  const [searchInput, setSearchInput] =
    useState("");

  const [search, setSearch] =
    useState("");

  // Pagination

  const [page, setPage] =
    useState(1);

  const [pagination, setPagination] =
    useState({
      total: 0,
      page: 1,
      pages: 1,
      limit: 10,
    });

  // ====================================================
  // EXTRACT POSTS
  // ====================================================

  const extractPosts = (response) => {
    if (Array.isArray(response)) {
      return response;
    }

    if (Array.isArray(response?.data)) {
      return response.data;
    }

    if (
      Array.isArray(response?.posts)
    ) {
      return response.posts;
    }

    if (
      Array.isArray(
        response?.data?.posts
      )
    ) {
      return response.data.posts;
    }

    return [];
  };

  // ====================================================
  // GET POST ID
  // ====================================================

  const getPostId = (post) => {
    return (
      post?._id ||
      post?.id ||
      null
    );
  };

  // ====================================================
  // LOAD POSTS
  // ====================================================

  const loadPosts = useCallback(
    async (showRefresh = false) => {
      try {
        if (showRefresh) {
          setRefreshing(true);
        } else {
          setLoading(true);
        }

        const response =
          await postService.getAdminPosts(
            page,
            10,
            "",
            search
          );

        const list =
          extractPosts(response);

        setPosts(list);
        setSelectedIds([]);

        setPagination({
          total:
            response?.pagination
              ?.total || 0,

          page:
            response?.pagination
              ?.page || page,

          pages: Math.max(
            response?.pagination
              ?.pages || 1,
            1
          ),

          limit:
            response?.pagination
              ?.limit || 10,
        });
      } catch (error) {
        console.error(
          "❌ Load admin posts error:",
          error
        );

        toast.error(
          error?.response?.data
            ?.message ||
            error?.message ||
            "Failed to load posts."
        );
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [page, search]
  );

  // ====================================================
  // LOAD
  // ====================================================

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  // ====================================================
  // LIVE SEARCH
  // ====================================================

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setPage(1);

        setSearch(
          searchInput.trim()
        );
      },
      300
    );

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

  // ====================================================
  // CLIENT-SIDE FILTERED POSTS
  // ====================================================

  const filteredPosts =
    statusFilter === "all"
      ? posts
      : posts.filter(
          (post) =>
            (post?.status || "draft") === statusFilter
        );

  // ====================================================
  // DELETE POST
  // ====================================================

  const handleDelete = async (id) => {
    if (!id) {
      toast.error(
        "Invalid post ID."
      );

      return;
    }

    const post = posts.find(
      (item) =>
        getPostId(item) === id
    );

    const title =
      post?.title ||
      "this post";

    const confirmed =
      window.confirm(
        `Are you sure you want to delete "${title}"?`
      );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(id);

      await postService.deletePost(
        id
      );

      toast.success(
        "Post deleted successfully."
      );

      // If this was the last post on a page,
      // go to previous page.
      if (
        posts.length === 1 &&
        page > 1
      ) {
        setPage(
          (current) =>
            Math.max(
              current - 1,
              1
            )
        );
      } else {
        await loadPosts(true);
      }
    } catch (error) {
      console.error(
        "❌ Delete post error:",
        error
      );

      toast.error(
        error?.response?.data
          ?.message ||
          error?.message ||
          "Failed to delete post."
      );
    } finally {
      setDeletingId(null);
    }
  };

  // ====================================================
  // EDIT POST
  // ====================================================

  const handleEdit = (id) => {
    if (!id) {
      toast.error(
        "Invalid post ID."
      );

      return;
    }

    navigate(
      `/admin/posts/edit/${id}`
    );
  };

  // ====================================================
  // QUICK STATUS TOGGLE
  // ====================================================

  const handleStatusToggle = async (post) => {
    const id = getPostId(post);
    if (!id) return;

    const currentStatus = post?.status || "draft";
    const newStatus =
      currentStatus === "published" ? "draft" : "published";

    try {
      setTogglingId(id);
      await postService.updatePost(id, { status: newStatus });
      toast.success(
        newStatus === "published"
          ? "Post published."
          : "Post unpublished."
      );
      await loadPosts(true);
    } catch (error) {
      console.error("❌ Toggle status error:", error);
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to update status."
      );
    } finally {
      setTogglingId(null);
    }
  };

  // ====================================================
  // BULK SELECT HELPERS
  // ====================================================

  const allFilteredIds = filteredPosts.map(getPostId).filter(Boolean);
  const allSelected =
    allFilteredIds.length > 0 &&
    allFilteredIds.every((id) => selectedIds.includes(id));

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(allFilteredIds);
    }
  };

  const toggleSelectOne = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    );
  };

  // ====================================================
  // BULK DELETE
  // ====================================================

  const handleBulkDelete = async () => {
    if (selectedIds.length === 0) return;

    const confirmed = window.confirm(
      `Delete ${selectedIds.length} selected post${
        selectedIds.length > 1 ? "s" : ""
      }? This cannot be undone.`
    );
    if (!confirmed) return;

    setBulkDeleting(true);
    let successCount = 0;
    let failCount = 0;

    for (const id of selectedIds) {
      try {
        await postService.deletePost(id);
        successCount++;
      } catch {
        failCount++;
      }
    }

    setBulkDeleting(false);

    if (successCount > 0) {
      toast.success(
        `${successCount} post${successCount > 1 ? "s" : ""} deleted.`
      );
    }
    if (failCount > 0) {
      toast.error(`${failCount} deletion${failCount > 1 ? "s" : ""} failed.`);
    }

    setSelectedIds([]);
    await loadPosts(true);
  };

  // ====================================================
  // STATUS CLASS
  // ====================================================

  const getStatusClass = (
    status
  ) => {
    switch (status) {
      case "published":
        return "bg-emerald-50 text-emerald-700 border border-emerald-200";

      case "scheduled":
        return "bg-cyan-50 text-[#07899a] border border-cyan-200";

      case "draft":
      default:
        return "bg-amber-50 text-amber-700 border border-amber-200";
    }
  };

  // ====================================================
  // FORMAT DATE
  // ====================================================

  const formatDate = (date) => {
    if (!date) return "—";
    const parsedDate = new Date(date);
    if (Number.isNaN(parsedDate.getTime())) return "—";
    return parsedDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // ====================================================
  // SEARCH SUBMIT
  // ====================================================

  const handleSearch = (event) => {
    event.preventDefault();

    setPage(1);

    setSearch(
      searchInput.trim()
    );
  };

  // ====================================================
  // CLEAR SEARCH
  // ====================================================

  const clearSearch = () => {
    setSearchInput("");
    setSearch("");
    setPage(1);
  };

  // ====================================================
  // COLUMN COUNT (for colSpan)
  // ====================================================

  // checkbox + Post + Category + Status + Words + Views + Date + Actions = 8
  const COL_COUNT = 8;

  // ====================================================
  // RENDER
  // ====================================================

  return (
    <div>
      {/* ================================================
          HEADER
      ================================================ */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
        <div>
          <h1 className="text-base sm:text-lg font-bold text-slate-900">
            Posts
          </h1>

          <p className="text-slate-500 mt-1">
            Create and manage your
            blog posts.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* REFRESH */}

          <button
            type="button"
            onClick={() =>
              loadPosts(true)
            }
            disabled={
              loading ||
              refreshing
            }
            className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs border-slate-200 bg-white text-slate-700 font-medium hover:bg-slate-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span
              className={
                refreshing
                  ? "inline-block animate-spin"
                  : ""
              }
            >
              ↻
            </span>

            {refreshing
              ? "Refreshing..."
              : "Refresh"}
          </button>

          {/* CREATE */}

          <Link
            to="/admin/posts/new"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#071923] text-xs text-white font-semibold hover:bg-[#0b2633] transition"
          >
            <span className="text-lg leading-none">
              +
            </span>

            Create Post
          </Link>
        </div>
      </div>

      {/* ================================================
          SEARCH
      ================================================ */}

      <form
        onSubmit={handleSearch}
        className="mb-3 flex flex-col sm:flex-row gap-3"
      >
        <div className="relative flex-1">
          <input
            type="search"
            value={searchInput}
            onChange={(event) =>
              setSearchInput(
                event.target.value
              )
            }
            placeholder="Search posts..."
            className="w-full px-3 py-1.5 rounded-lg text-xs border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#0796A8] focus:ring-4 focus:ring-[#0796A8]/10"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-1.5 rounded-lg bg-[#071923] text-white text-xs font-semibold hover:bg-[#0b2633] transition"
        >
          Search
        </button>

        {search && (
          <button
            type="button"
            onClick={
              clearSearch
            }
            className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white text-slate-700 font-medium hover:bg-slate-50 transition"
          >
            Clear
          </button>
        )}
      </form>

      {/* ================================================
          STATUS FILTER
      ================================================ */}

      <div className="flex flex-wrap items-center gap-2 mb-5">
        {STATUS_FILTERS.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => {
              setStatusFilter(filter.value);
              setSelectedIds([]);
            }}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
              statusFilter === filter.value
                ? "bg-[#071923] text-white border-[#071923]"
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* ================================================
          STATS
      ================================================ */}

      {!loading && (
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 text-slate-600 text-sm">
            <span className="font-semibold text-slate-900">
              {
                pagination.total
              }
            </span>

            {pagination.total === 1
              ? "Post"
              : "Posts"}
          </div>

          {statusFilter !== "all" && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-sm">
              Showing{" "}
              <span className="font-semibold text-slate-900">
                {filteredPosts.length}
              </span>{" "}
              {statusFilter}
            </div>
          )}
        </div>
      )}

      {/* ================================================
          BULK ACTION BAR
      ================================================ */}

      {selectedIds.length > 0 && (
        <div className="mb-4 flex items-center gap-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200">
          <span className="text-sm font-medium text-red-700">
            {selectedIds.length} post{selectedIds.length > 1 ? "s" : ""} selected
          </span>

          <button
            type="button"
            onClick={handleBulkDelete}
            disabled={bulkDeleting}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Trash2 className="w-4 h-4" />
            {bulkDeleting ? "Deleting..." : "Delete Selected"}
          </button>

          <button
            type="button"
            onClick={() => setSelectedIds([])}
            className="ml-auto text-sm text-red-500 hover:text-red-700 transition"
          >
            Cancel
          </button>
        </div>
      )}

      {/* ================================================
          TABLE
      ================================================ */}

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px]">
            {/* TABLE HEADER */}

            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-left">
                {/* CHECKBOX */}
                <th className="pl-4 pr-2 py-4 w-10">
                  <button
                    type="button"
                    onClick={toggleSelectAll}
                    className="text-slate-400 hover:text-slate-700 transition"
                    aria-label="Select all"
                  >
                    {allSelected ? (
                      <CheckSquare className="w-4 h-4 text-[#0796A8]" />
                    ) : (
                      <Square className="w-4 h-4" />
                    )}
                  </button>
                </th>

                <th className="px-3 py-2 text-[10px] text-xs uppercase tracking-wider font-semibold text-slate-500">
                  Post
                </th>

                <th className="px-3 py-2 text-[10px] text-xs uppercase tracking-wider font-semibold text-slate-500">
                  Category
                </th>

                <th className="px-3 py-2 text-[10px] text-xs uppercase tracking-wider font-semibold text-slate-500">
                  Status
                </th>

                <th className="px-3 py-2 text-[10px] text-xs uppercase tracking-wider font-semibold text-slate-500">
                  Words
                </th>

                <th className="px-3 py-2 text-[10px] text-xs uppercase tracking-wider font-semibold text-slate-500">
                  Views
                </th>

                <th className="px-3 py-2 text-[10px] text-xs uppercase tracking-wider font-semibold text-slate-500">
                  Date
                </th>

                <th className="px-3 py-2 text-[10px] text-xs uppercase tracking-wider font-semibold text-slate-500 text-right">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {/* LOADING */}

              {loading && (
                <tr>
                  <td
                    colSpan={COL_COUNT}
                    className="text-center py-16"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-7 h-7 border-2 border-slate-200 border-t-[#0796A8] rounded-full animate-spin mb-3" />

                      <p className="text-slate-400">
                        Loading posts...
                      </p>
                    </div>
                  </td>
                </tr>
              )}

              {/* POSTS */}

              {!loading &&
                filteredPosts.map(
                  (post) => {
                    const id =
                      getPostId(
                        post
                      );

                    const categoryName =
                      post?.category
                        ?.name ||
                      (typeof post?.category ===
                      "string"
                        ? post.category
                        : "Uncategorized");

                    const status =
                      post?.status ||
                      "draft";

                    const isSelected =
                      id && selectedIds.includes(id);

                    const wordCount =
                      getWordCount(post?.content);

                    return (
                      <tr
                        key={
                          id ||
                          post?.slug ||
                          post?.title
                        }
                        className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition"
                      >
                        {/* CHECKBOX */}

                        <td className="pl-3 pr-1 py-2">
                          <button
                            type="button"
                            onClick={() =>
                              id && toggleSelectOne(id)
                            }
                            disabled={!id}
                            className="text-slate-400 hover:text-slate-700 transition disabled:opacity-30"
                            aria-label="Select post"
                          >
                            {isSelected ? (
                              <CheckSquare className="w-4 h-4 text-[#0796A8]" />
                            ) : (
                              <Square className="w-4 h-4" />
                            )}
                          </button>
                        </td>

                        {/* POST */}

                        <td className="px-3 py-2 text-xs">
                          <div className="flex items-center gap-4">
                            <PostThumbnail
                              post={
                                post
                              }
                            />

                            <div className="min-w-0">
                              <p className="font-semibold text-slate-900 line-clamp-1">
                                {post?.title ||
                                  "Untitled"}
                              </p>

                              <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                                {post?.slug ||
                                  "No slug"}
                              </p>

                              {post?.featured && (
                                <span className="inline-flex mt-2 px-2.5 py-0.5 rounded-full bg-cyan-50 border border-cyan-100 text-[#07899a] text-[10px] font-semibold">
                                  Featured
                                </span>
                              )}
                            </div>
                          </div>
                        </td>

                        {/* CATEGORY */}

                        <td className="px-3 py-2 text-xs text-sm text-slate-600">
                          {
                            categoryName
                          }
                        </td>

                        {/* STATUS */}

                        <td className="px-3 py-2 text-xs">
                          <span
                            className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusClass(
                              status
                            )}`}
                          >
                            {
                              status
                            }
                          </span>
                        </td>

                        {/* WORDS */}

                        <td className="px-3 py-2 text-xs text-sm text-slate-500">
                          {wordCount !== null
                            ? wordCount.toLocaleString()
                            : "—"}
                        </td>

                        {/* VIEWS */}

                        <td className="px-3 py-2 text-xs text-sm text-slate-500">
                          {typeof post?.views ===
                          "number"
                            ? post.views.toLocaleString()
                            : "0"}
                        </td>

                        {/* DATE */}

                        <td className="px-3 py-2 text-xs text-slate-600 whitespace-nowrap">
                          {post?.status === "scheduled" || post?.scheduledAt ? (
                            <div className="space-y-0.5">
                              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-cyan-700 bg-cyan-50 border border-cyan-200 px-1.5 py-0.5 rounded">
                                ⏰ Sched: {formatDate(post?.scheduledAt || post?.createdAt)}
                              </span>
                              <p className="text-[9px] text-slate-400">Syncs sitemap on trigger</p>
                            </div>
                          ) : post?.status === "published" ? (
                            <div className="space-y-0.5">
                              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                                ✓ Pub: {formatDate(post?.publishedAt || post?.createdAt)}
                              </span>
                              <p className="text-[9px] text-emerald-600 font-mono">Sitemap: Synced</p>
                            </div>
                          ) : (
                            <div className="space-y-0.5">
                              <span className="inline-flex items-center gap-1 text-[10px] text-slate-500">
                                Draft: {formatDate(post?.createdAt)}
                              </span>
                            </div>
                          )}
                        </td>

                        {/* ACTIONS */}

                        <td className="px-3 py-2 text-xs">
                          <div className="flex items-center justify-end gap-2 flex-wrap">
                            {/* PREVIEW */}
                            <button
                              type="button"
                              onClick={() =>
                                window.open(
                                  "/blog/" + (post?.slug || ""),
                                  "_blank"
                                )
                              }
                              disabled={!post?.slug}
                              title="Preview post"
                              className="p-2 rounded-lg text-sm font-medium bg-slate-100 hover:bg-slate-200 text-slate-600 transition disabled:opacity-40 disabled:cursor-not-allowed"
                            >
                              <Eye className="w-4 h-4" />
                            </button>

                            {/* QUICK STATUS TOGGLE */}
                            {status !== "scheduled" && (
                              <button
                                type="button"
                                onClick={() =>
                                  handleStatusToggle(post)
                                }
                                disabled={
                                  !id ||
                                  togglingId === id ||
                                  deletingId === id
                                }
                                title={
                                  status === "published"
                                    ? "Unpublish"
                                    : "Publish"
                                }
                                className={`inline-flex items-center gap-1 px-2.5 py-2 rounded-lg text-xs font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed ${
                                  status === "published"
                                    ? "bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200"
                                    : "bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200"
                                }`}
                              >
                                {togglingId === id ? (
                                  <span className="inline-block w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
                                ) : status === "published" ? (
                                  <ToggleRight className="w-4 h-4" />
                                ) : (
                                  <ToggleLeft className="w-4 h-4" />
                                )}
                                {status === "published"
                                  ? "Unpublish"
                                  : "Publish"}
                              </button>
                            )}

                            {/* EDIT */}
                            <button
                              type="button"
                              onClick={() =>
                                handleEdit(
                                  id
                                )
                              }
                              disabled={
                                !id ||
                                deletingId ===
                                  id
                              }
                              className="px-3 py-2 rounded-lg text-sm font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              Edit
                            </button>

                            {/* DELETE */}
                            <button
                              type="button"
                              onClick={() =>
                                handleDelete(
                                  id
                                )
                              }
                              disabled={
                                !id ||
                                deletingId ===
                                  id
                              }
                              className="p-2 rounded-lg text-sm font-medium bg-red-50 hover:bg-red-100 text-red-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                              title="Delete post"
                            >
                              {deletingId ===
                              id ? (
                                <span className="inline-block w-4 h-4 border border-red-400 border-t-transparent rounded-full animate-spin" />
                              ) : (
                                <Trash2 className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}

              {/* EMPTY */}

              {!loading &&
                filteredPosts.length ===
                  0 && (
                  <tr>
                    <td
                      colSpan={COL_COUNT}
                      className="text-center py-16 px-6"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 text-2xl mb-4">
                          ✎
                        </div>

                        <p className="font-semibold text-slate-700">
                          {search || statusFilter !== "all"
                            ? "No matching posts"
                            : "No posts yet"}
                        </p>

                        <p className="text-sm text-slate-400 mt-1">
                          {search
                            ? "Try a different search term."
                            : statusFilter !== "all"
                            ? `No ${statusFilter} posts found.`
                            : "Create your first blog post."}
                        </p>

                        {!search && statusFilter === "all" && (
                          <Link
                            to="/admin/posts/new"
                            className="mt-5 px-4 py-2.5 rounded-lg bg-[#071923] text-white text-sm font-semibold hover:bg-[#0b2633] transition"
                          >
                            Create
                            Post
                          </Link>
                        )}
                      </div>
                    </td>
                  </tr>
                )}
            </tbody>
          </table>
        </div>

        {/* ==============================================
            PAGINATION
        ============================================== */}

        {!loading &&
          pagination.pages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-slate-200 bg-slate-50/50">
              <p className="text-sm text-slate-500">
                Page{" "}
                <span className="font-semibold text-slate-900">
                  {
                    pagination.page
                  }
                </span>{" "}
                of{" "}
                <span className="font-semibold text-slate-900">
                  {
                    pagination.pages
                  }
                </span>
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setPage(
                      (
                        previous
                      ) =>
                        Math.max(
                          previous -
                            1,
                          1
                        )
                    )
                  }
                  disabled={
                    page <= 1
                  }
                  className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-100 transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                {Array.from(
                  {
                    length:
                      pagination.pages,
                  },
                  (_, index) =>
                    index + 1
                ).map(
                  (
                    pageNumber
                  ) => (
                    <button
                      key={
                        pageNumber
                      }
                      type="button"
                      onClick={() =>
                        setPage(
                          pageNumber
                        )
                      }
                      className={`min-w-10 px-3 py-2 rounded-lg text-sm font-semibold transition ${
                        pageNumber ===
                        pagination.page
                          ? "bg-[#071923] text-white"
                          : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {
                        pageNumber
                      }
                    </button>
                  )
                )}

                <button
                  type="button"
                  onClick={() =>
                    setPage(
                      (
                        previous
                      ) =>
                        Math.min(
                          previous +
                            1,
                          pagination.pages
                        )
                    )
                  }
                  disabled={
                    page >=
                    pagination.pages
                  }
                  className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-100 transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default AdminPosts;
