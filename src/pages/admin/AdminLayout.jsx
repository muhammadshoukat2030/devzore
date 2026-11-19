import { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate, useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import {
  LayoutDashboard,
  FileText,
  PenSquare,
  FolderTree,
  MessageSquare,
  SearchCheck,
  BarChart3,
  Globe,
  LogOut,
  Menu,
  ChevronLeft,
  ChevronRight,
  PanelLeftClose,
  PanelLeftOpen,
  ExternalLink,
} from "lucide-react";
import useAuth from "../../hooks/useAuth";

const NAV_GROUPS = [
  {
    group: "OVERVIEW",
    items: [
      { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
    ],
  },
  {
    group: "CONTENT",
    items: [
      { name: "All Posts", path: "/admin/posts", icon: FileText },
      { name: "New Post", path: "/admin/posts/new", icon: PenSquare },
      { name: "Categories", path: "/admin/categories", icon: FolderTree },
      { name: "Comments", path: "/admin/comments", icon: MessageSquare },
    ],
  },
  {
    group: "PERFORMANCE",
    items: [
      { name: "SEO & Sitemap", path: "/admin/seo", icon: SearchCheck, badge: "67 URLs" },
      { name: "Analytics & GSC", path: "/admin/analytics", icon: BarChart3, badge: "GSC" },
    ],
  },
];

const getBreadcrumb = (pathname) => {
  if (pathname.includes("dashboard")) return "Dashboard";
  if (pathname.includes("posts/new")) return "Create Post";
  if (pathname.includes("posts/edit")) return "Edit Post";
  if (pathname.includes("posts")) return "Blog Posts";
  if (pathname.includes("categories")) return "Categories";
  if (pathname.includes("comments")) return "Comments";
  if (pathname.includes("seo")) return "SEO & Sitemap";
  if (pathname.includes("analytics")) return "Analytics";
  return "Admin Panel";
};

const AdminLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(() => {
    try {
      return localStorage.getItem("adminSidebarCollapsed") === "true";
    } catch {
      return false;
    }
  });

  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    try {
      localStorage.setItem("adminSidebarCollapsed", String(collapsed));
    } catch {
      // ignore
    }
  }, [collapsed]);

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully.");
    navigate("/admin/login", { replace: true });
  };

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  const breadcrumb = getBreadcrumb(location.pathname);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>DevZore Admin Portal</title>
        <meta name="robots" content="noindex, nofollow, noarchive" />
        <meta name="googlebot" content="noindex, nofollow, noarchive" />
      </Helmet>

      <div className="min-h-screen bg-slate-100 font-sans text-slate-800 flex text-xs sm:text-sm">
        {/* Mobile Backdrop */}
        {mobileOpen && (
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-40 md:hidden transition-opacity"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* Compact Sidebar */}
        <aside
          className={`
            fixed top-0 bottom-0 left-0 z-50
            bg-[#071923] text-white border-r border-white/10
            transition-all duration-200 ease-in-out
            flex flex-col select-none
            ${collapsed ? "w-14" : "w-52"}
            ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          `}
        >
          {/* Sidebar Top: Logo + Toggle */}
          <div
            className={`h-12 border-b border-white/10 flex items-center justify-between px-3 ${
              collapsed ? "justify-center px-0" : "px-3.5"
            }`}
          >
            {collapsed ? (
              <button
                onClick={toggleSidebar}
                title="Expand Sidebar"
                className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0796A8] to-cyan-400 text-slate-950 flex items-center justify-center font-bold text-sm shadow-xs hover:scale-105 transition"
              >
                D
              </button>
            ) : (
              <>
                <Link to="/admin/dashboard" className="flex items-center gap-2.5 min-w-0">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#0796A8] to-cyan-400 text-slate-950 flex items-center justify-center font-bold text-xs shadow-xs shrink-0">
                    D
                  </div>
                  <div className="min-w-0">
                    <h1 className="font-bold text-xs leading-tight tracking-wide text-white truncate">
                      DevZore
                    </h1>
                    <p className="text-[9px] text-cyan-300/80 font-medium tracking-wider uppercase">
                      Admin Portal
                    </p>
                  </div>
                </Link>

                {/* Desktop Collapse Button */}
                <button
                  onClick={toggleSidebar}
                  title="Collapse Sidebar"
                  className="hidden md:flex w-6 h-6 rounded bg-white/5 hover:bg-white/10 border border-white/10 items-center justify-center text-slate-300 hover:text-white transition"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                {/* Mobile Close Button */}
                <button
                  onClick={() => setMobileOpen(false)}
                  className="md:hidden w-6 h-6 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center"
                >
                  ✕
                </button>
              </>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-2 py-2.5 space-y-3">
            {NAV_GROUPS.map((group) => (
              <div key={group.group} className="space-y-0.5">
                {!collapsed && (
                  <p className="px-2 text-[9px] font-bold uppercase tracking-wider text-slate-400/80 mb-1">
                    {group.group}
                  </p>
                )}

                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      title={collapsed ? item.name : undefined}
                      className={({ isActive }) =>
                        `flex items-center gap-2.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                          collapsed ? "px-0 py-2 justify-center" : "px-2.5 py-1.5"
                        } ${
                          isActive
                            ? "bg-[#0796A8] text-white shadow-xs font-semibold"
                            : "text-slate-300 hover:bg-white/10 hover:text-white"
                        }`
                      }
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      {!collapsed && (
                        <span className="flex-1 truncate">{item.name}</span>
                      )}
                      {!collapsed && item.badge && (
                        <span className="text-[9px] font-semibold px-1.5 py-0.2 rounded-full bg-white/15 text-cyan-200">
                          {item.badge}
                        </span>
                      )}
                    </NavLink>
                  );
                })}
              </div>
            ))}
          </nav>

          {/* Bottom Sidebar: Collapse bar + Live site + Profile */}
          <div className="p-2 border-t border-white/10 space-y-1.5 bg-black/20 text-xs">
            {/* Live Site Link */}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              title={collapsed ? "View Live Site" : undefined}
              className={`flex items-center gap-2 rounded-lg text-[11px] font-semibold text-cyan-300 hover:bg-cyan-500/10 transition py-1.5 ${
                collapsed ? "justify-center px-0" : "px-2.5"
              }`}
            >
              <Globe className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
              {!collapsed && <span>devzore.com</span>}
              {!collapsed && <ExternalLink className="w-2.5 h-2.5 ml-auto opacity-70" />}
            </a>

            {/* Expand / Collapse Toggle button for Desktop bottom */}
            <button
              onClick={toggleSidebar}
              className={`hidden md:flex w-full items-center gap-2 rounded-lg text-[10px] text-slate-400 hover:text-white hover:bg-white/5 transition py-1 ${
                collapsed ? "justify-center px-0" : "px-2.5"
              }`}
            >
              {collapsed ? (
                <ChevronRight className="w-3.5 h-3.5" />
              ) : (
                <>
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Minimize</span>
                </>
              )}
            </button>

            {/* User & Logout */}
            <div
              className={`pt-1.5 border-t border-white/10 flex items-center gap-2 ${
                collapsed ? "justify-center" : "justify-between px-1.5"
              }`}
            >
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 rounded-full bg-cyan-400 text-slate-950 font-bold text-[10px] flex items-center justify-center shrink-0">
                  {(user?.name || "A").charAt(0).toUpperCase()}
                </div>
                {!collapsed && (
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-white truncate">
                      {user?.name || "Admin"}
                    </p>
                  </div>
                )}
              </div>

              {!collapsed && (
                <button
                  onClick={handleLogout}
                  title="Logout"
                  className="p-1 rounded text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </aside>

        {/* Workspace */}
        <div
          className={`flex-1 flex flex-col min-h-screen transition-all duration-200 ease-in-out ${
            collapsed ? "md:ml-14" : "md:ml-52"
          }`}
        >
          {/* Compact Top Header */}
          <header className="sticky top-0 z-30 h-12 bg-white border-b border-slate-200 px-3 sm:px-5 flex items-center justify-between shadow-2xs">
            {/* Left: Sidebar toggle + Breadcrumbs */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden p-1.5 rounded border border-slate-200 text-slate-600 hover:bg-slate-50 transition"
                aria-label="Open mobile menu"
              >
                <Menu className="w-4 h-4" />
              </button>

              <button
                onClick={toggleSidebar}
                className="hidden md:flex p-1.5 rounded border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition"
                title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
              >
                {collapsed ? (
                  <PanelLeftOpen className="w-4 h-4 text-[#0796A8]" />
                ) : (
                  <PanelLeftClose className="w-4 h-4 text-slate-600" />
                )}
              </button>

              {/* Breadcrumb Info */}
              <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                <span>DevZore</span>
                <span>/</span>
                <span className="text-slate-700 font-semibold">{breadcrumb}</span>
              </div>
            </div>

            {/* Right: Quick actions + Site link + Profile */}
            <div className="flex items-center gap-2">
              <Link
                to="/admin/posts/new"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#071923] text-white text-xs font-semibold hover:bg-[#0b2633] transition"
              >
                <PenSquare className="w-3 h-3" />
                <span className="hidden sm:inline">Write Post</span>
              </Link>

              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded border border-slate-200 text-slate-700 text-xs font-medium hover:bg-slate-50 transition"
              >
                <Globe className="w-3 h-3 text-[#0796A8]" />
                <span>Live Site</span>
              </a>

              <div className="flex items-center gap-1.5 pl-2 border-l border-slate-200">
                <div className="w-6 h-6 rounded-full bg-slate-950 text-white font-bold text-[10px] flex items-center justify-center">
                  {(user?.name || "A").charAt(0).toUpperCase()}
                </div>
              </div>
            </div>
          </header>

          {/* Compact Page Body */}
          <main className="flex-1 p-3 sm:p-4 lg:p-5 max-w-7xl w-full mx-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
