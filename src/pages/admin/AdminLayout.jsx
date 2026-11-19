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
  Sparkles,
  ExternalLink,
  Bell,
  Search,
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
  if (pathname.includes("posts/new")) return "Create New Post";
  if (pathname.includes("posts/edit")) return "Edit Post";
  if (pathname.includes("posts")) return "Blog Posts";
  if (pathname.includes("categories")) return "Categories";
  if (pathname.includes("comments")) return "Comments";
  if (pathname.includes("seo")) return "SEO & Sitemap";
  if (pathname.includes("analytics")) return "Search Analytics";
  return "Admin Panel";
};

const AdminLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(() => {
    try {
      const saved = localStorage.getItem("adminSidebarCollapsed");
      return saved === "true";
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

      <div className="min-h-screen bg-slate-100 font-sans text-slate-800 flex">
        {/* Mobile Backdrop */}
        {mobileOpen && (
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 md:hidden transition-opacity"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* ========================================================
            SIDEBAR (Desktop: Collapsible w-64 <-> w-20, Mobile: Drawer)
            ======================================================== */}
        <aside
          className={`
            fixed top-0 bottom-0 left-0 z-50
            bg-[#071923] text-white border-r border-white/10
            transition-all duration-300 ease-in-out
            flex flex-col select-none
            ${collapsed ? "w-20" : "w-64"}
            ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          `}
        >
          {/* Sidebar Top: Logo + Toggle */}
          <div
            className={`h-16 border-b border-white/10 flex items-center justify-between px-4 ${
              collapsed ? "justify-center px-0" : "px-5"
            }`}
          >
            {collapsed ? (
              <button
                onClick={toggleSidebar}
                title="Expand Sidebar"
                className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0796A8] to-cyan-400 text-slate-950 flex items-center justify-center font-bold text-lg shadow-md hover:scale-105 transition"
              >
                D
              </button>
            ) : (
              <>
                <Link to="/admin/dashboard" className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0796A8] to-cyan-400 text-slate-950 flex items-center justify-center font-bold text-lg shadow-md shrink-0">
                    D
                  </div>
                  <div className="min-w-0">
                    <h1 className="font-bold text-base leading-tight tracking-wide text-white truncate">
                      DevZore
                    </h1>
                    <p className="text-[11px] text-cyan-300/80 font-medium tracking-wider uppercase">
                      Admin Portal
                    </p>
                  </div>
                </Link>

                {/* Desktop Collapse Button */}
                <button
                  onClick={toggleSidebar}
                  title="Collapse Sidebar"
                  className="hidden md:flex w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 items-center justify-center text-slate-300 hover:text-white transition"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Mobile Close Button */}
                <button
                  onClick={() => setMobileOpen(false)}
                  className="md:hidden w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center"
                >
                  ✕
                </button>
              </>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
            {NAV_GROUPS.map((group) => (
              <div key={group.group} className="space-y-1.5">
                {!collapsed && (
                  <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400/80 mb-2">
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
                        `flex items-center gap-3 rounded-xl text-sm font-medium transition-all duration-150 ${
                          collapsed ? "px-0 py-3 justify-center" : "px-3.5 py-2.5"
                        } ${
                          isActive
                            ? "bg-[#0796A8] text-white shadow-md shadow-[#0796A8]/20 font-semibold"
                            : "text-slate-300 hover:bg-white/10 hover:text-white"
                        }`
                      }
                    >
                      <Icon className="w-5 h-5 shrink-0" />
                      {!collapsed && (
                        <span className="flex-1 truncate">{item.name}</span>
                      )}
                      {!collapsed && item.badge && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/15 text-cyan-200">
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
          <div className="p-3 border-t border-white/10 space-y-2 bg-black/20">
            {/* Live Site Link */}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              title={collapsed ? "View Live Site" : undefined}
              className={`flex items-center gap-3 rounded-xl text-xs font-semibold text-cyan-300 hover:bg-cyan-500/10 transition py-2.5 ${
                collapsed ? "justify-center px-0" : "px-3"
              }`}
            >
              <Globe className="w-4 h-4 shrink-0 text-cyan-400" />
              {!collapsed && <span>View devzore.com</span>}
              {!collapsed && <ExternalLink className="w-3 h-3 ml-auto opacity-70" />}
            </a>

            {/* Expand / Collapse Toggle button for Desktop bottom */}
            <button
              onClick={toggleSidebar}
              className={`hidden md:flex w-full items-center gap-3 rounded-xl text-xs text-slate-400 hover:text-white hover:bg-white/5 transition py-2 ${
                collapsed ? "justify-center px-0" : "px-3"
              }`}
            >
              {collapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <>
                  <ChevronLeft className="w-4 h-4" />
                  <span>Collapse Menu</span>
                </>
              )}
            </button>

            {/* User & Logout */}
            <div
              className={`pt-2 border-t border-white/10 flex items-center gap-3 ${
                collapsed ? "justify-center" : "justify-between px-2"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-full bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center shrink-0">
                  {(user?.name || "A").charAt(0).toUpperCase()}
                </div>
                {!collapsed && (
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-white truncate">
                      {user?.name || "Admin"}
                    </p>
                    <p className="text-[10px] text-slate-400 truncate">
                      {user?.email || "Super Admin"}
                    </p>
                  </div>
                )}
              </div>

              {!collapsed && (
                <button
                  onClick={handleLogout}
                  title="Logout"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </aside>

        {/* ========================================================
            MAIN WORKSPACE (Adjusts margin based on sidebar state)
            ======================================================== */}
        <div
          className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out ${
            collapsed ? "md:ml-20" : "md:ml-64"
          }`}
        >
          {/* Sticky Top Header */}
          <header className="sticky top-0 z-30 h-16 bg-white border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between shadow-xs">
            {/* Left: Sidebar toggle + Breadcrumbs */}
            <div className="flex items-center gap-3">
              {/* Mobile Drawer Trigger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition"
                aria-label="Open mobile menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              {/* Desktop Collapse / Expand Toggle */}
              <button
                onClick={toggleSidebar}
                className="hidden md:flex p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition"
                title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
              >
                {collapsed ? (
                  <PanelLeftOpen className="w-5 h-5 text-[#0796A8]" />
                ) : (
                  <PanelLeftClose className="w-5 h-5 text-slate-600" />
                )}
              </button>

              {/* Breadcrumb Info */}
              <div className="hidden sm:block">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <span>DevZore</span>
                  <span>/</span>
                  <span className="text-slate-700 font-semibold">{breadcrumb}</span>
                </div>
              </div>
            </div>

            {/* Right: Quick actions + Site link + Profile */}
            <div className="flex items-center gap-3">
              {/* New Post Button */}
              <Link
                to="/admin/posts/new"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#071923] text-white text-xs font-semibold hover:bg-[#0b2633] transition shadow-xs"
              >
                <PenSquare className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Write Post</span>
              </Link>

              {/* View Site Button */}
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 text-xs font-medium hover:bg-slate-50 transition"
              >
                <Globe className="w-3.5 h-3.5 text-[#0796A8]" />
                <span>Live Site</span>
              </a>

              {/* User Avatar */}
              <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
                <div className="w-8 h-8 rounded-full bg-slate-950 text-white font-bold text-xs flex items-center justify-center">
                  {(user?.name || "A").charAt(0).toUpperCase()}
                </div>
                <div className="hidden md:block text-left text-xs">
                  <p className="font-semibold text-slate-900 leading-tight">{user?.name || "Admin"}</p>
                  <p className="text-[10px] text-slate-400 leading-tight">Superuser</p>
                </div>
              </div>
            </div>
          </header>

          {/* Page Body */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
