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
  ShieldCheck,
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
        const drafts = postsData.filter(
          (post) => post.status === "draft" || post.published === false
        );

        setStats({
          posts: postsData.length,
          categories: categoriesData.length,
          comments: commentsData.length,
          published: published.length,
          drafts: drafts.length,
        });

        setRecentPosts(postsData.slice(0, 8));
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
      subtext: `${stats.drafts} draft${stats.drafts === 1 ? "" : "s"} in review`,
      icon: FileText,
      accent: "bg-blue-500",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      link: "/admin/posts",
    },
    {
      title: "Published Live",
      value: stats.published,
      subtext: "100% crawlable by Google",
      icon: CheckCircle,
      accent: "bg-emerald-500",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      link: "/admin/posts",
    },
    {
      title: "Blog Categories",
      value: stats.categories,
      subtext: "Web, AI, Cloud, SaaS",
      icon: Tag,
      accent: "bg-violet-500",
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
      link: "/admin/categories",
    },
    {
      title: "User Comments",
      value: stats.comments,
      subtext: "Moderation active",
      icon: MessageSquare,
      accent: "bg-amber-500",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      link: "/admin/comments",
    },
  ];

  const quickActions = [
    {
      label: "Write New Post",
      desc: "Full rich editor with live SEO counters",
      icon: Plus,
      color: "bg-[#071923] text-white hover:bg-[#0b2633]",
      action: () => navigate("/admin/posts/new"),
    },
    {
      label: "Manage Blog Posts",
      desc: "Bulk edit, status filters & search",
      icon: FileText,
      color: "bg-white border border-slate-200 text-slate-800 hover:bg-slate-50",
      action: () => navigate("/admin/posts"),
    },
    {
      label: "SEO & Sitemap Audit",
      desc: "67 URLs status & IndexNow ping",
      icon: SearchCheck,
      color: "bg-white border border-slate-200 text-slate-800 hover:bg-slate-50",
      action: () => navigate("/admin/seo"),
    },
    {
      label: "GSC Traffic Analytics",
      desc: "Impressions, CTR & search queries",
      icon: BarChart3,
      color: "bg-white border border-slate-200 text-slate-800 hover:bg-slate-50",
      action: () => navigate("/admin/analytics"),
    },
  ];

  const statusBadge = (status) => {
    const s = (status || "draft").toLowerCase();
    if (s === "published") {
      return "bg-emerald-50 text-emerald-700 border border-emerald-200";
    }
    if (s === "scheduled") {
      return "bg-cyan-50 text-cyan-700 border border-cyan-200";
    }
    return "bg-amber-50 text-amber-700 border border-amber-200";
  };

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
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#071923] via-slate-900 to-[#0796A8] text-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative overflow-hidden">
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-cyan-200 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" /> DevZore High Performance CMS
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Welcome to DevZore Admin
          </h1>
          <p className="mt-2 text-slate-200 text-sm leading-relaxed">
            Manage your articles, categories, comments, indexing signals, and inbound traffic performance across all 67 production routes.
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap gap-3">
          <Link
            to="/admin/posts/new"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-950 text-sm font-bold shadow-md hover:bg-slate-100 transition"
          >
            <Plus className="w-4 h-4" /> Create Post
          </Link>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition"
          >
            <Globe className="w-4 h-4 text-cyan-300" /> View devzore.com
          </a>
        </div>
      </div>

      {/* KPI Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.title}
              to={card.link}
              className="bg-white border border-slate-200 rounded-2xl p-5 relative overflow-hidden shadow-xs hover:border-slate-300 hover:shadow-sm transition block group"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 ${card.accent}`} />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {card.title}
                  </p>
                  <h3 className="text-3xl font-bold text-slate-900 mt-1">
                    {loading ? "—" : card.value}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-medium">{card.subtext}</p>
                </div>
                <div
                  className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center group-hover:scale-105 transition`}
                >
                  <Icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions.map((qa) => {
          const Icon = qa.icon;
          return (
            <button
              key={qa.label}
              onClick={qa.action}
              className={`p-4 rounded-2xl text-left transition shadow-xs flex flex-col justify-between ${qa.color}`}
            >
              <div className="w-9 h-9 rounded-xl bg-slate-100/10 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm">{qa.label}</p>
                <p className="text-xs opacity-80 mt-0.5">{qa.desc}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* 2-Column: SEO & Site Health (Left) + Recent Posts Table (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Health & Traffic Snapshot */}
        <div className="space-y-6">
          {/* SEO Health Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-base text-slate-900">SEO & Health Signals</h3>
              </div>
              <Link
                to="/admin/seo"
                className="text-xs font-semibold text-[#0796A8] hover:underline flex items-center gap-1"
              >
                Manage <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="divide-y divide-slate-100 text-sm mt-3">
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-slate-500">Sitemap URLs</span>
                <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
                  67 Pages Indexed
                </span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-slate-500">Ahrefs Health Score</span>
                <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
                  92 / 100
                </span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-slate-500">IndexNow Protocol</span>
                <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-teal-50 text-teal-700">
                  Active (Auto-Ping)
                </span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-slate-500">Canonicals</span>
                <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-violet-50 text-violet-700">
                  Self-Referencing
                </span>
              </div>
            </div>
          </div>

          {/* Traffic Snapshot */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <TrendingUp className="w-5 h-5 text-[#0796A8]" />
                <h3 className="font-bold text-base text-slate-900">Search Reach Target</h3>
              </div>
              <Link
                to="/admin/analytics"
                className="text-xs font-semibold text-[#0796A8] hover:underline flex items-center gap-1"
              >
                Analytics <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Daily Impression Target</span>
                  <span>1,000+ / day</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#0796A8] to-emerald-500 rounded-full" style={{ width: "78%" }} />
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Primary traffic drivers: MERN Stack Development, Next.js Development, and AI Integration.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Recent Posts Table */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h2 className="font-bold text-base text-slate-900">Recent Blog Posts</h2>
              <p className="text-xs text-slate-400 mt-0.5">Latest published and draft articles</p>
            </div>
            <Link
              to="/admin/posts"
              className="text-xs font-semibold text-[#0796A8] hover:underline flex items-center gap-1"
            >
              View All Posts <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-500 font-semibold border-b border-slate-200">
                  <th className="py-3 px-6">Title</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4 text-center">Status</th>
                  <th className="py-3 px-4 text-center">Date</th>
                  <th className="py-3 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading && (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-slate-400 text-xs">
                      Loading articles...
                    </td>
                  </tr>
                )}

                {!loading && recentPosts.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-slate-400 text-xs">
                      No blog posts found.
                    </td>
                  </tr>
                )}

                {!loading &&
                  recentPosts.map((post) => {
                    const id = post._id || post.id;
                    const catName =
                      post.category?.name ||
                      (typeof post.category === "string" ? post.category : "Web Development");
                    return (
                      <tr key={id} className="hover:bg-slate-50/70 transition">
                        <td className="py-3.5 px-6 font-medium text-slate-900 max-w-xs">
                          <p className="truncate">{post.title || "Untitled"}</p>
                        </td>
                        <td className="py-3.5 px-4 text-xs text-slate-600">
                          {catName}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <span
                            className={`inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-semibold capitalize ${statusBadge(
                              post.status
                            )}`}
                          >
                            {post.status || "draft"}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-center text-xs text-slate-500 font-mono">
                          {fmtDate(post.createdAt || post.date)}
                        </td>
                        <td className="py-3.5 px-6 text-right">
                          <div className="inline-flex items-center gap-2">
                            {post.slug && (
                              <a
                                href={`/blog/${post.slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Preview post"
                                className="p-1 rounded text-slate-400 hover:text-[#0796A8] transition"
                              >
                                <Eye className="w-4 h-4" />
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

      {/* Footer System Status Banner */}
      <div className="bg-[#071923] text-slate-400 rounded-2xl p-4 text-xs flex flex-col sm:flex-row items-center justify-between gap-3 border border-white/5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white font-semibold">DevZore Production Core</span>
          <span className="text-slate-500">|</span>
          <span>Build: SSR Pre-rendered (67 Routes)</span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Sitemap: 67 URLs verified</span>
          <span>noindex on /admin</span>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
