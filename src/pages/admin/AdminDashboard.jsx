import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FileText,
  CheckCircle,
  Tag,
  MessageSquare,
  Plus,
  Globe,
} from "lucide-react";
import postService from "../../services/postService";
import categoryService from "../../services/categoryService";
import commentService from "../../services/commentService";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    posts: 0,
    categories: 0,
    comments: 0,
    published: 0,
  });

  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const extractArray = (data) => {
    if (Array.isArray(data)) return data;
    return (
      data?.posts ||
      data?.categories ||
      data?.comments ||
      data?.data ||
      []
    );
  };

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        setLoading(true);
        console.log("📊 Loading dashboard data...");

        let postsData = [];
        let categoriesData = [];
        let commentsData = [];

        try {
          const postsResult = await postService.getPosts();
          postsData = extractArray(postsResult);
          console.log("✅ Posts loaded:", postsData.length);
        } catch (err) {
          console.error("❌ Posts load error:", err);
        }

        try {
          const catsResult = await categoryService.getCategories();
          categoriesData = extractArray(catsResult);
          console.log("✅ Categories loaded:", categoriesData.length);
        } catch (err) {
          console.error("❌ Categories load error:", err);
        }

        try {
          const commentsResult = await commentService.getComments();
          commentsData = extractArray(commentsResult);
          console.log("✅ Comments loaded:", commentsData.length);
        } catch (err) {
          console.error("❌ Comments load error:", err);
        }

        const published = postsData.filter(
          (post) =>
            post.status === "published" || post.published === true
        );

        setStats({
          posts: postsData.length,
          categories: categoriesData.length,
          comments: commentsData.length,
          published: published.length,
        });

        setRecentPosts(postsData.slice(0, 8));
        console.log("✅ Dashboard stats updated");
      } catch (error) {
        console.error("❌ Dashboard error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  /* ── Stat cards ── */
  const statCards = [
    {
      title: "Total Posts",
      value: stats.posts,
      icon: FileText,
      accent: "bg-blue-500",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Published",
      value: stats.published,
      icon: CheckCircle,
      accent: "bg-green-500",
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      title: "Categories",
      value: stats.categories,
      icon: Tag,
      accent: "bg-violet-500",
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
    },
    {
      title: "Comments",
      value: stats.comments,
      icon: MessageSquare,
      accent: "bg-orange-500",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  /* ── Quick actions ── */
  const quickActions = [
    {
      label: "Create New Post",
      description: "Start writing a new article",
      icon: Plus,
      bg: "bg-slate-950",
      text: "text-white",
      action: () => navigate("/admin/posts/new"),
    },
    {
      label: "Manage Posts",
      description: "Edit, delete or review posts",
      icon: FileText,
      bg: "bg-blue-600",
      text: "text-white",
      action: () => navigate("/admin/posts"),
    },
    {
      label: "View Live Site",
      description: "Open devzore.com in a new tab",
      icon: Globe,
      bg: "bg-teal-600",
      text: "text-white",
      action: () => window.open("https://devzore.com", "_blank"),
    },
  ];

  /* ── Status badge helper ── */
  const statusBadge = (status) => {
    const s = (status || "draft").toLowerCase();
    if (s === "published")
      return "bg-green-100 text-green-700";
    if (s === "scheduled")
      return "bg-cyan-100 text-cyan-700";
    return "bg-amber-100 text-amber-700";
  };

  /* ── Date formatter ── */
  const fmtDate = (d) => {
    if (!d) return "—";
    try {
      return new Date(d).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return "—";
    }
  };

  return (
    <div className="space-y-8">
      {/* Page heading */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Dashboard
        </h1>
        <p className="mt-1 text-slate-500">
          Manage your DevZore website content.
        </p>
      </div>

      {/* ── Stat cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="bg-white border border-slate-200 rounded-2xl p-5 relative overflow-hidden"
            >
              {/* colored top accent bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 ${card.accent} rounded-t-2xl`}
              />
              <div className="flex items-center justify-between mt-2">
                <div>
                  <p className="text-sm text-slate-500">{card.title}</p>
                  <h3 className="text-3xl font-bold text-slate-900 mt-1">
                    {loading ? "—" : card.value}
                  </h3>
                </div>
                <div
                  className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center`}
                >
                  <Icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Quick actions ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.label}
              onClick={action.action}
              className={`${action.bg} ${action.text} rounded-2xl p-5 text-left transition-opacity hover:opacity-90 active:scale-[0.98]`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-semibold text-base">
                  {action.label}
                </span>
              </div>
              <p className="text-sm opacity-75">{action.description}</p>
            </button>
          );
        })}
      </div>

      {/* ── SEO & Site Health + Recent Posts (side-by-side on xl) ── */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        {/* SEO & Site Health */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 xl:col-span-1">
          <h2 className="font-bold text-lg text-slate-900 mb-4">
            SEO &amp; Site Health
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Pages Indexed</span>
              <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                67
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Health Score</span>
              <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                92 / 100
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Sitemap</span>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:underline font-medium"
              >
                /sitemap.xml
              </a>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-sm text-slate-600">IndexNow</span>
              <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                Enabled
              </span>
            </li>
          </ul>
        </div>

        {/* Recent Posts table */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden xl:col-span-2">
          <div className="px-5 sm:px-6 py-5 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h2 className="font-bold text-lg text-slate-900">
                Recent Posts
              </h2>
              <p className="text-sm text-slate-500 mt-0.5">
                Latest content added to your website.
              </p>
            </div>
            <Link
              to="/admin/posts"
              className="text-sm font-medium text-blue-600 hover:underline whitespace-nowrap"
            >
              View All Posts →
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-slate-50 text-left">
                  <th className="px-6 py-3 text-xs uppercase tracking-wider text-slate-500">
                    Title
                  </th>
                  <th className="px-6 py-3 text-xs uppercase tracking-wider text-slate-500">
                    Category
                  </th>
                  <th className="px-6 py-3 text-xs uppercase tracking-wider text-slate-500">
                    Status
                  </th>
                  <th className="px-6 py-3 text-xs uppercase tracking-wider text-slate-500">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading && (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-6 py-12 text-center text-slate-400"
                    >
                      Loading…
                    </td>
                  </tr>
                )}

                {!loading && recentPosts.length === 0 && (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-6 py-12 text-center text-slate-400"
                    >
                      No posts found.
                    </td>
                  </tr>
                )}

                {!loading &&
                  recentPosts.map((post) => (
                    <tr
                      key={post._id || post.id}
                      className="border-t border-slate-100 hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <p className="font-medium text-slate-900 truncate max-w-[200px]">
                          {post.title || "Untitled"}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        {post.category?.name ||
                          post.category ||
                          "Uncategorized"}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${statusBadge(
                            post.status
                          )}`}
                        >
                          {post.status || "draft"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        {fmtDate(
                          post.publishedAt ||
                            post.createdAt ||
                            post.created_at
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── System Info footer ── */}
      <div className="bg-slate-900 text-slate-300 rounded-2xl px-6 py-4 text-sm flex flex-wrap gap-x-6 gap-y-1 items-center">
        <span className="font-semibold text-white">System Info</span>
        <span>Last build: Static SSR — 67 routes pre-rendered</span>
        <span className="hidden sm:inline text-slate-600">|</span>
        <span>Sitemap: 67 URLs</span>
        <span className="hidden sm:inline text-slate-600">|</span>
        <span>noindex: All /admin routes</span>
      </div>
    </div>
  );
};

export default AdminDashboard;
