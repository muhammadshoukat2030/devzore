import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FileText,
  CheckCircle,
  Tag,
  MessageSquare,
  Plus,
  Globe,
  SearchCheck,
  BarChart3,
  ExternalLink,
  Eye,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Clock,
  Calendar,
  ShieldCheck,
  MousePointerClick,
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
    drafts: 0,
    scheduled: 0,
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

        let postsData = [];
        let categoriesData = [];
        let commentsData = [];

        try {
          const postsResult = await postService.getPosts();
          postsData = extractArray(postsResult);
        } catch (err) {
          console.error("Posts load error:", err);
        }

        try {
          const catsResult = await categoryService.getCategories();
          categoriesData = extractArray(catsResult);
        } catch (err) {
          console.error("Categories load error:", err);
        }

        try {
          const commentsResult = await commentService.getComments();
          commentsData = extractArray(commentsResult);
        } catch (err) {
          console.error("Comments load error:", err);
        }

        const published = postsData.filter(
          (post) => post.status === "published" || post.published === true
        );
        const scheduled = postsData.filter(
          (post) => post.status === "scheduled" || Boolean(post.scheduledAt)
        );
        const drafts = postsData.filter(
          (post) =>
            post.status === "draft" ||
            (!post.published && post.status !== "scheduled" && !post.scheduledAt)
        );

        setStats({
          posts: postsData.length,
          categories: categoriesData.length,
          comments: commentsData.length,
          published: published.length,
          drafts: drafts.length,
          scheduled: scheduled.length,
        });

        setRecentPosts(postsData.slice(0, 10));
      } catch (error) {
        console.error("Dashboard error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  const statCards = [
    {
      title: "Total Posts",
      value: stats.posts,
      subtext: `${stats.drafts} drafts • ${stats.scheduled} scheduled`,
      icon: FileText,
      accent: "bg-blue-500",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      link: "/admin/posts",
    },
    {
      title: "Published Live",
      value: stats.published,
      subtext: "Auto-synced with sitemap",
      icon: CheckCircle,
      accent: "bg-emerald-500",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      link: "/admin/posts",
    },
    {
      title: "Categories",
      value: stats.categories,
      subtext: "Active topic clusters",
      icon: Tag,
      accent: "bg-violet-500",
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
      link: "/admin/categories",
    },
    {
      title: "Visitor Comments",
      value: stats.comments,
      subtext: "Live moderation queue",
      icon: MessageSquare,
      accent: "bg-amber-500",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      link: "/admin/comments",
    },
  ];

  const quickActions = [
    {
      label: "Write Post",
      desc: "Rich editor & SEO",
      icon: Plus,
      color: "bg-[#071923] text-white hover:bg-[#0b2633]",
      action: () => navigate("/admin/posts/new"),
    },
    {
      label: "Blog Queue",
      desc: "Filters & schedules",
      icon: FileText,
      color: "bg-white border border-slate-200 text-slate-800 hover:bg-slate-50",
      action: () => navigate("/admin/posts"),
    },
    {
      label: "SEO Audit",
      desc: "67 URLs & IndexNow",
      icon: SearchCheck,
      color: "bg-white border border-slate-200 text-slate-800 hover:bg-slate-50",
      action: () => navigate("/admin/seo"),
    },
    {
      label: "GSC Traffic",
      desc: "Clicks & impressions",
      icon: BarChart3,
      color: "bg-white border border-slate-200 text-slate-800 hover:bg-slate-50",
      action: () => navigate("/admin/analytics"),
    },
  ];

  const statusBadge = (status, scheduledAt) => {
    const s = (status || "draft").toLowerCase();
    if (s === "published") {
      return "bg-emerald-50 text-emerald-700 border border-emerald-200";
    }
    if (s === "scheduled" || scheduledAt) {
      return "bg-cyan-50 text-cyan-700 border border-cyan-200";
    }
    return "bg-amber-50 text-amber-700 border border-amber-200";
  };

  const fmtDateTime = (d) => {
    if (!d) return "—";
    try {
      const date = new Date(d);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return "—";
    }
  };

  return (
    <div className="space-y-4">
      {/* Compact Top Welcome Strip */}
      <div className="bg-gradient-to-r from-[#071923] via-slate-900 to-[#0796A8] text-white rounded-xl p-3.5 sm:p-4 shadow-2xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-bold tracking-tight">
              DevZore Content & Schedule Control
            </h1>
            <p className="text-[11px] text-slate-300">
              Real-time blog scheduling, indexing sync, and organic Google visibility.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <Link
            to="/admin/posts/new"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-slate-950 text-xs font-bold shadow-xs hover:bg-slate-100 transition"
          >
            <Plus className="w-3.5 h-3.5" /> Write Post
          </Link>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white text-xs font-medium hover:bg-white/20 transition"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-300" /> Site
          </a>
        </div>
      </div>

      {/* 4 Compact Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.title}
              to={card.link}
              className="bg-white border border-slate-200 rounded-xl p-3 relative overflow-hidden shadow-2xs hover:border-slate-300 transition block group"
            >
              <div className={`absolute top-0 left-0 right-0 h-0.5 ${card.accent}`} />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    {card.title}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                    {loading ? "—" : card.value}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-medium truncate mt-0.5">
                    {card.subtext}
                  </p>
                </div>
                <div
                  className={`w-8 h-8 rounded-lg ${card.iconBg} flex items-center justify-center shrink-0 group-hover:scale-105 transition`}
                >
                  <Icon className={`w-4 h-4 ${card.iconColor}`} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* 4 Compact Quick Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {quickActions.map((qa) => {
          const Icon = qa.icon;
          return (
            <button
              key={qa.label}
              onClick={qa.action}
              className={`p-2.5 rounded-xl text-left transition shadow-2xs flex items-center gap-2.5 ${qa.color}`}
            >
              <div className="w-7 h-7 rounded-lg bg-slate-100/10 flex items-center justify-center shrink-0">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-xs leading-tight truncate">{qa.label}</p>
                <p className="text-[10px] opacity-75 truncate">{qa.desc}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* 2-Column: Realtime Scheduling & Signals (Left) + Recent Blog Posts (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Column: Realtime Scheduling & SEO Signals */}
        <div className="space-y-3">
          {/* Scheduling & Publish Pipeline Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-2xs">
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-600" />
                <h3 className="font-bold text-xs text-slate-900 uppercase tracking-wider">
                  Publish & Sitemap Sync
                </h3>
              </div>
              <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                Live Auto-Sync
              </span>
            </div>

            <div className="divide-y divide-slate-100 text-xs mt-1">
              <div className="py-2 flex items-center justify-between">
                <span className="text-slate-500">Scheduled Trigger</span>
                <span className="font-mono text-[11px] font-semibold text-slate-800">
                  Exact Date/Time Match
                </span>
              </div>
              <div className="py-2 flex items-center justify-between">
                <span className="text-slate-500">Sitemap Action</span>
                <span className="font-mono text-[11px] font-semibold text-emerald-600">
                  Instant Append & Ping
                </span>
              </div>
              <div className="py-2 flex items-center justify-between">
                <span className="text-slate-500">Google / Bing Ping</span>
                <span className="font-mono text-[11px] font-semibold text-[#0796A8]">
                  IndexNow Active
                </span>
              </div>
              <div className="py-2 flex items-center justify-between">
                <span className="text-slate-500">Canonical Enforcement</span>
                <span className="font-mono text-[11px] font-semibold text-violet-600">
                  Self-Referencing
                </span>
              </div>
            </div>
          </div>

          {/* SEO Health Snapshot */}
          <div className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-2xs">
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <h3 className="font-bold text-xs text-slate-900 uppercase tracking-wider">
                  SEO & Indexing Health
                </h3>
              </div>
              <Link to="/admin/seo" className="text-[11px] font-semibold text-[#0796A8] hover:underline">
                Details →
              </Link>
            </div>

            <div className="divide-y divide-slate-100 text-xs mt-1">
              <div className="py-2 flex items-center justify-between">
                <span className="text-slate-500">Indexed Routes</span>
                <span className="font-mono text-[11px] font-bold text-slate-900">67 URLs</span>
              </div>
              <div className="py-2 flex items-center justify-between">
                <span className="text-slate-500">Ahrefs Score</span>
                <span className="font-mono text-[11px] font-bold text-emerald-600">92 / 100</span>
              </div>
              <div className="py-2 flex items-center justify-between">
                <span className="text-slate-500">24h Impressions</span>
                <span className="font-mono text-[11px] font-bold text-slate-900">1,640+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Recent Blog Posts Table with Schedule & Publish Times */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
          <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h2 className="font-bold text-xs sm:text-sm text-slate-900 uppercase tracking-wider">
                Recent Articles & Schedule Tracking
              </h2>
            </div>
            <Link
              to="/admin/posts"
              className="text-[11px] font-semibold text-[#0796A8] hover:underline flex items-center gap-1"
            >
              View All Posts <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 font-semibold border-b border-slate-200">
                  <th className="py-2.5 px-3">Title</th>
                  <th className="py-2.5 px-2">Category</th>
                  <th className="py-2.5 px-2 text-center">Status</th>
                  <th className="py-2.5 px-2 text-center">Date / Schedule</th>
                  <th className="py-2.5 px-2 text-center">Views</th>
                  <th className="py-2.5 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading && (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-slate-400 text-xs">
                      Loading articles...
                    </td>
                  </tr>
                )}

                {!loading && recentPosts.length === 0 && (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-slate-400 text-xs">
                      No blog posts found.
                    </td>
                  </tr>
                )}

                {!loading &&
                  recentPosts.map((post) => {
                    const id = post._id || post.id;
                    const catName =
                      post.category?.name ||
                      (typeof post.category === "string" ? post.category : "Web Dev");
                    const isScheduled = post.status === "scheduled" || Boolean(post.scheduledAt);
                    const timeDisplay = isScheduled && post.scheduledAt
                      ? `Sched: ${fmtDateTime(post.scheduledAt)}`
                      : fmtDateTime(post.publishedAt || post.createdAt || post.date);

                    return (
                      <tr key={id} className="hover:bg-slate-50/70 transition">
                        <td className="py-2.5 px-3 font-medium text-slate-900 max-w-[200px] truncate">
                          {post.title || "Untitled"}
                        </td>
                        <td className="py-2.5 px-2 text-slate-500 text-[11px] truncate max-w-[100px]">
                          {catName}
                        </td>
                        <td className="py-2.5 px-2 text-center">
                          <span
                            className={`inline-flex px-1.5 py-0.5 rounded text-[10px] font-semibold capitalize ${statusBadge(
                              post.status,
                              post.scheduledAt
                            )}`}
                          >
                            {post.status || "draft"}
                          </span>
                        </td>
                        <td className="py-2.5 px-2 text-center font-mono text-[10px] text-slate-500 whitespace-nowrap">
                          {timeDisplay}
                        </td>
                        <td className="py-2.5 px-2 text-center font-mono text-[11px] text-slate-600">
                          {post.views || 0}
                        </td>
                        <td className="py-2.5 px-3 text-right whitespace-nowrap">
                          <div className="inline-flex items-center gap-1.5">
                            {post.slug && (
                              <a
                                href={`/blog/${post.slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Live Preview"
                                className="p-1 rounded text-slate-400 hover:text-[#0796A8] transition"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </a>
                            )}
                            <Link
                              to={`/admin/posts/edit/${id}`}
                              className="text-xs font-semibold text-[#0796A8] hover:underline"
                            >
                              Edit
                            </Link>
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

      {/* Mini System Footer Strip */}
      <div className="bg-[#071923] text-slate-400 rounded-xl px-3 py-2 text-[11px] flex flex-col sm:flex-row items-center justify-between gap-2 border border-white/5">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white font-semibold">DevZore Engine</span>
          <span className="text-slate-500">•</span>
          <span>67 Static Routes SSR</span>
        </div>
        <div className="flex items-center gap-3 text-slate-400 font-mono text-[10px]">
          <span>Sitemap: 67 URLs</span>
          <span>robots: /admin blocked</span>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
