import {
  useCallback,
  useEffect,
  useState,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Eye,
  ToggleLeft,
  ToggleRight,
  Trash2,
  Square,
  CheckSquare,
  Plus,
  RefreshCw,
  Search,
  FileText,
  Clock,
  CheckCircle2,
} from "lucide-react";
import postService from "../../services/postService";

const API_URL = (
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api"
).replace(/\/+$/, "");

const safeDecodeURIComponent = (value = "") => {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};

const extractImageFileId = (value = "") => {
  if (!value) return "";
  const imageUrl = String(value).trim();
  if (!imageUrl) return "";

  const markers = ["/api/upload/image/", "/upload/image/"];
  for (const marker of markers) {
    const markerIndex = imageUrl.indexOf(marker);
    if (markerIndex === -1) continue;
    const start = markerIndex + marker.length;
    const remainder = imageUrl.slice(start);
    const fileId = remainder.split("?")[0].split("#")[0].split("/")[0].trim();
    if (fileId) return safeDecodeURIComponent(fileId);
  }
  return "";
};

const getBlogImageUrl = (post) => {
  if (!post) return "";
  const publicId = typeof post.coverImagePublicId === "string" ? post.coverImagePublicId.trim() : "";
  if (publicId) {
    return `${API_URL}/upload/image/${encodeURIComponent(publicId)}`;
  }
  const coverImage = typeof post.coverImage === "string" ? post.coverImage.trim() : "";
  if (!coverImage) return "";
  const extractedFileId = extractImageFileId(coverImage);
  if (extractedFileId) {
    return `${API_URL}/upload/image/${encodeURIComponent(extractedFileId)}`;
  }
  if (
    coverImage.startsWith("http://") ||
    coverImage.startsWith("https://") ||
    coverImage.startsWith("data:") ||
    coverImage.startsWith("blob:")
  ) {
    return coverImage;
  }
  if (coverImage.startsWith("/api/")) {
    const backendOrigin = API_URL.replace(/\/api\/?$/, "");
    return `${backendOrigin}${coverImage}`;
  }
  if (coverImage.startsWith("/upload/")) {
    return `${API_URL}${coverImage}`;
  }
  return coverImage;
};

const getWordCount = (content) => {
  if (!content) return null;
  return content.replace(/<[^>]*>/g, "").trim().split(/\s+/).filter(Boolean).length;
};

const PostThumbnail = ({ post }) => {
  const imageUrl = getBlogImageUrl(post);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageFailed(false);
  }, [imageUrl]);

  return (
    <div className="w-9 h-8 rounded-lg overflow-hidden shrink-0 bg-slate-100 border border-slate-200 flex items-center justify-center">
      {imageUrl && !imageFailed ? (
        <img
          src={imageUrl}
          alt={post?.coverImageAlt || post?.title || "Post cover"}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <FileText className="w-4 h-4 text-slate-400" />
      )}
    </div>
  );
};

const STATUS_FILTERS = [
  { label: "All", value: "all" },
  { label: "Published", value: "published" },
  { label: "Draft", value: "draft" },
  { label: "Scheduled", value: "scheduled" },
];

const AdminPosts = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [togglingId, setTogglingId] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedIds, setSelectedIds] = useState([]);
  const [bulkDeleting, setBulkDeleting] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    pages: 1,
    limit: 20,
  });

  const extractPosts = (response) => {
    if (Array.isArray(response)) return response;
    if (Array.isArray(response?.data)) return response.data;
    if (Array.isArray(response?.posts)) return response.posts;
    if (Array.isArray(response?.data?.posts)) return response.data.posts;
    return [];
  };

  const getPostId = (post) => post?._id || post?.id || null;

  const loadPosts = useCallback(
    async (showRefresh = false) => {
      try {
        if (showRefresh) setRefreshing(true);
        else setLoading(true);

        const response = await postService.getAdminPosts(page, 20, "", search);
        const list = extractPosts(response);
        setPosts(list);
        setSelectedIds([]);

        setPagination({
          total: response?.pagination?.total || list.length,
          page: response?.pagination?.page || page,
          pages: Math.max(response?.pagination?.pages || 1, 1),
          limit: response?.pagination?.limit || 20,
        });
      } catch (error) {
        console.error("Load admin posts error:", error);
        toast.error(error?.response?.data?.message || "Failed to load posts.");
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [page, search]
  );

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(1);
      setSearch(searchInput.trim());
    }, 300);
    return () => clearTimeout(timer);
  }, [searchInput]);

  const filteredPosts = posts.filter((post) => {
    if (statusFilter === "all") return true;
    if (statusFilter === "published") {
      return post?.status === "published" || post?.published === true;
    }
    if (statusFilter === "draft") {
      return (
        post?.status === "draft" ||
        (!post?.published && post?.status !== "scheduled" && !post?.scheduledAt)
      );
    }
    if (statusFilter === "scheduled") {
      return post?.status === "scheduled" || Boolean(post?.scheduledAt);
    }
    return true;
  });

  const handleDelete = async (id) => {
    if (!id) return;
    const post = posts.find((item) => getPostId(item) === id);
    const title = post?.title || "this post";
    const confirmed = window.confirm(`Delete "${title}"? This cannot be undone.`);
    if (!confirmed) return;

    try {
      setDeletingId(id);
      await postService.deletePost(id);
      toast.success("Post deleted.");
      if (posts.length === 1 && page > 1) {
        setPage((c) => Math.max(c - 1, 1));
      } else {
        await loadPosts(true);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to delete post.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleEdit = (id) => {
    if (!id) return;
    navigate(`/admin/posts/edit/${id}`);
  };

  const handleStatusToggle = async (post) => {
    const id = getPostId(post);
    if (!id) return;
    const currentStatus = post?.status || (post?.published ? "published" : "draft");
    const newStatus = currentStatus === "published" ? "draft" : "published";

    try {
      setTogglingId(id);
      await postService.updatePost(id, { status: newStatus });
      toast.success(newStatus === "published" ? "Post published." : "Post unpublished.");
      await loadPosts(true);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to update status.");
    } finally {
      setTogglingId(null);
    }
  };

  const allFilteredIds = filteredPosts.map(getPostId).filter(Boolean);
  const allSelected =
    allFilteredIds.length > 0 && allFilteredIds.every((id) => selectedIds.includes(id));

  const toggleSelectAll = () => {
    if (allSelected) setSelectedIds([]);
    else setSelectedIds(allFilteredIds);
  };

  const toggleSelectOne = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleBulkDelete = async () => {
    if (selectedIds.length === 0) return;
    const confirmed = window.confirm(
      `Delete ${selectedIds.length} selected post${selectedIds.length > 1 ? "s" : ""}?`
    );
    if (!confirmed) return;

    setBulkDeleting(true);
    let successCount = 0;
    for (const id of selectedIds) {
      try {
        await postService.deletePost(id);
        successCount++;
      } catch (err) {
        console.error(err);
      }
    }
    setBulkDeleting(false);
    toast.success(`${successCount} post(s) deleted.`);
    setSelectedIds([]);
    await loadPosts(true);
  };

  const getStatusClass = (status, scheduledAt) => {
    if (status === "published") {
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    }
    if (status === "scheduled" || scheduledAt) {
      return "bg-cyan-50 text-cyan-700 border-cyan-200";
    }
    return "bg-amber-50 text-amber-700 border-amber-200";
  };

  const formatDate = (date) => {
    if (!date) return "—";
    const d = new Date(date);
    if (Number.isNaN(d.getTime())) return "—";
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="space-y-3">
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
        <div className="flex items-center gap-2">
          <h1 className="text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wider">
            Blog Posts
          </h1>
          <span className="text-[11px] font-semibold text-slate-500 bg-slate-200/70 px-2 py-0.5 rounded-full">
            {pagination.total} Total
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => loadPosts(true)}
            disabled={loading || refreshing}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-slate-200 bg-white text-slate-700 text-xs font-medium hover:bg-slate-50 transition disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? "animate-spin" : ""}`} />
            <span>{refreshing ? "Refreshing..." : "Refresh"}</span>
          </button>

          <Link
            to="/admin/posts/new"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#071923] text-white text-xs font-semibold hover:bg-[#0b2633] transition"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Create Post</span>
          </Link>
        </div>
      </div>

      {/* Unified Toolbar: Tabs Left + Search Right */}
      <div className="bg-white border border-slate-200 rounded-xl p-2 flex flex-col sm:flex-row items-center justify-between gap-2 shadow-2xs">
        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          {STATUS_FILTERS.map((filter) => {
            const isActive = statusFilter === filter.value;
            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => {
                  setStatusFilter(filter.value);
                  setSelectedIds([]);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                  isActive
                    ? "bg-[#071923] text-white shadow-2xs"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Compact Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search posts..."
            className="w-full pl-8 pr-7 py-1 text-xs border border-slate-200 rounded-lg bg-slate-50/50 text-slate-900 placeholder:text-slate-400 outline-none focus:bg-white focus:border-[#0796A8] transition"
          />
          {searchInput && (
            <button
              type="button"
              onClick={() => {
                setSearchInput("");
                setSearch("");
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Bulk Action Bar */}
      {selectedIds.length > 0 && (
        <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-red-50 border border-red-200 text-xs">
          <span className="font-semibold text-red-700">
            {selectedIds.length} post{selectedIds.length > 1 ? "s" : ""} selected
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleBulkDelete}
              disabled={bulkDeleting}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-red-600 text-white font-semibold hover:bg-red-700 transition disabled:opacity-50"
            >
              <Trash2 className="w-3.5 h-3.5" />
              {bulkDeleting ? "Deleting..." : "Delete Selected"}
            </button>
            <button
              type="button"
              onClick={() => setSelectedIds([])}
              className="text-slate-500 hover:text-slate-700 font-medium px-2 py-1"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Table Container */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[10px] uppercase tracking-wider font-semibold text-slate-500">
                <th className="pl-3 pr-1 py-2 w-8">
                  <button
                    type="button"
                    onClick={toggleSelectAll}
                    className="text-slate-400 hover:text-slate-700 flex items-center"
                    aria-label="Select all"
                  >
                    {allSelected ? (
                      <CheckSquare className="w-3.5 h-3.5 text-[#0796A8]" />
                    ) : (
                      <Square className="w-3.5 h-3.5" />
                    )}
                  </button>
                </th>
                <th className="px-3 py-2">Post</th>
                <th className="px-3 py-2">Category</th>
                <th className="px-2 py-2 text-center">Status</th>
                <th className="px-2 py-2 text-center">Words</th>
                <th className="px-2 py-2 text-center">Views</th>
                <th className="px-3 py-2 text-center">Schedule / Publish</th>
                <th className="px-3 py-2 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {loading && (
                <tr>
                  <td colSpan={8} className="text-center py-12 text-slate-400 text-xs">
                    <div className="inline-block w-5 h-5 border-2 border-slate-200 border-t-[#0796A8] rounded-full animate-spin mb-2" />
                    <p>Loading posts...</p>
                  </td>
                </tr>
              )}

              {!loading && filteredPosts.length === 0 && (
                <tr>
                  <td colSpan={8} className="text-center py-10 text-slate-400 text-xs">
                    No posts found.
                  </td>
                </tr>
              )}

              {!loading &&
                filteredPosts.map((post) => {
                  const id = getPostId(post);
                  const categoryName =
                    post?.category?.name ||
                    (typeof post?.category === "string" ? post.category : "Web Dev");
                  const status = post?.status || (post?.published ? "published" : "draft");
                  const isSelected = id && selectedIds.includes(id);
                  const wordCount = getWordCount(post?.content);
                  const isScheduled = status === "scheduled" || Boolean(post?.scheduledAt);

                  return (
                    <tr
                      key={id || post?.slug || post?.title}
                      className="hover:bg-slate-50/70 transition"
                    >
                      {/* Checkbox */}
                      <td className="pl-3 pr-1 py-2">
                        <button
                          type="button"
                          onClick={() => id && toggleSelectOne(id)}
                          disabled={!id}
                          className="text-slate-400 hover:text-slate-700 transition disabled:opacity-30 flex items-center"
                          aria-label="Select row"
                        >
                          {isSelected ? (
                            <CheckSquare className="w-3.5 h-3.5 text-[#0796A8]" />
                          ) : (
                            <Square className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </td>

                      {/* Post Title & Slug */}
                      <td className="px-3 py-2">
                        <div className="flex items-center gap-2.5 max-w-sm">
                          <PostThumbnail post={post} />
                          <div className="min-w-0 flex-1">
                            <p className="font-semibold text-slate-900 truncate text-xs leading-snug">
                              {post?.title || "Untitled"}
                            </p>
                            <p className="text-[10px] text-slate-400 font-mono truncate">
                              /{post?.slug || "no-slug"}
                            </p>
                            {post?.featured && (
                              <span className="inline-block text-[9px] font-bold text-cyan-700 bg-cyan-50 px-1.5 rounded border border-cyan-100">
                                Featured
                              </span>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="px-3 py-2 text-slate-600 text-[11px] truncate max-w-[120px]">
                        {categoryName}
                      </td>

                      {/* Status */}
                      <td className="px-2 py-2 text-center whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-0.5 rounded text-[10px] font-semibold border capitalize ${getStatusClass(
                            status,
                            post?.scheduledAt
                          )}`}
                        >
                          {status}
                        </span>
                      </td>

                      {/* Words */}
                      <td className="px-2 py-2 text-center font-mono text-[11px] text-slate-500 whitespace-nowrap">
                        {wordCount ? wordCount.toLocaleString() : "—"}
                      </td>

                      {/* Views */}
                      <td className="px-2 py-2 text-center font-mono text-[11px] text-slate-600 whitespace-nowrap">
                        {typeof post?.views === "number" ? post.views.toLocaleString() : "0"}
                      </td>

                      {/* Date / Schedule & Sitemap */}
                      <td className="px-3 py-2 text-center whitespace-nowrap">
                        {isScheduled && post?.scheduledAt ? (
                          <div className="space-y-0.5">
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-cyan-700 bg-cyan-50 border border-cyan-200 px-1.5 py-0.5 rounded">
                              <Clock className="w-2.5 h-2.5" />
                              Sched: {formatDate(post?.scheduledAt)}
                            </span>
                            <p className="text-[9px] text-slate-400 font-mono">Syncs sitemap on trigger</p>
                          </div>
                        ) : status === "published" ? (
                          <div className="space-y-0.5">
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                              <CheckCircle2 className="w-2.5 h-2.5" />
                              Pub: {formatDate(post?.publishedAt || post?.createdAt)}
                            </span>
                            <p className="text-[9px] text-emerald-600 font-mono">Sitemap: Synced</p>
                          </div>
                        ) : (
                          <span className="text-[10px] text-slate-400">
                            Draft: {formatDate(post?.createdAt)}
                          </span>
                        )}
                      </td>

                      {/* Actions: Clean single horizontal flex row */}
                      <td className="px-3 py-2 text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-1 justify-end">
                          {/* Live Preview */}
                          <button
                            type="button"
                            onClick={() => window.open("/blog/" + (post?.slug || ""), "_blank")}
                            disabled={!post?.slug}
                            title="Preview Post"
                            className="p-1 rounded text-slate-400 hover:text-[#0796A8] hover:bg-slate-100 transition disabled:opacity-30"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>

                          {/* Quick Publish / Unpublish Toggle */}
                          {status !== "scheduled" && (
                            <button
                              type="button"
                              onClick={() => handleStatusToggle(post)}
                              disabled={!id || togglingId === id || deletingId === id}
                              title={status === "published" ? "Unpublish Post" : "Publish Post"}
                              className={`px-1.5 py-0.5 rounded text-[10px] font-semibold border transition disabled:opacity-50 ${
                                status === "published"
                                  ? "bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-200"
                                  : "bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-200"
                              }`}
                            >
                              {togglingId === id
                                ? "..."
                                : status === "published"
                                ? "Unpublish"
                                : "Publish"}
                            </button>
                          )}

                          {/* Edit */}
                          <button
                            type="button"
                            onClick={() => handleEdit(id)}
                            disabled={!id || deletingId === id}
                            className="px-2 py-0.5 rounded text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition disabled:opacity-50"
                          >
                            Edit
                          </button>

                          {/* Delete */}
                          <button
                            type="button"
                            onClick={() => handleDelete(id)}
                            disabled={!id || deletingId === id}
                            title="Delete Post"
                            className="p-1 rounded text-red-400 hover:text-red-600 hover:bg-red-50 transition disabled:opacity-50"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPosts;
