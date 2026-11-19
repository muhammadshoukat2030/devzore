import { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import {
  LayoutDashboard,
  FileText,
  Tag,
  MessageSquare,
  LogOut,
  Menu,
  ChevronLeft,
  Globe,
} from "lucide-react";
import useAuth from "../../hooks/useAuth";

const navItems = [
  { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Posts", path: "/admin/posts", icon: FileText },
  { name: "Categories", path: "/admin/categories", icon: Tag },
  { name: "Comments", path: "/admin/comments", icon: MessageSquare },
];

const getBreadcrumb = (pathname) => {
  if (pathname.includes("dashboard")) return "Dashboard";
  if (pathname.includes("posts")) return "Posts";
  if (pathname.includes("categories")) return "Categories";
  if (pathname.includes("comments")) return "Comments";
  return "Admin Panel";
};

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // mobile drawer
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

  const toggleCollapse = () => setCollapsed((prev) => !prev);

  const breadcrumb = getBreadcrumb(location.pathname);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>DevZore Admin</title>
        <meta name="robots" content="noindex, nofollow, noarchive" />
        <meta name="googlebot" content="noindex, nofollow, noarchive" />
      </Helmet>

      <div className="min-h-screen bg-slate-100 font-sans">
        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* ───────────── SIDEBAR ───────────── */}
        <aside
          className={`
            fixed top-0 left-0 z-40 h-screen
            bg-slate-950 text-white
            transition-all duration-300
            flex flex-col
            ${collapsed ? "w-16" : "w-64"}
            /* mobile: hidden off-screen, desktop: always visible */
            -translate-x-full lg:translate-x-0
            ${sidebarOpen ? "translate-x-0" : ""}
          `}
        >
          {/* Logo */}
          <div
            className={`h-20 flex items-center border-b border-white/10 overflow-hidden ${
              collapsed ? "px-0 justify-center" : "px-6"
            }`}
          >
            {collapsed ? (
              <div className="w-10 h-10 rounded-xl bg-white text-slate-950 flex items-center justify-center font-bold text-lg select-none">
                D
              </div>
            ) : (
              <div className="flex items-center gap-3 w-full">
                <div className="w-10 h-10 rounded-xl bg-white text-slate-950 flex items-center justify-center font-bold flex-shrink-0">
                  D
                </div>
                <div className="min-w-0">
                  <h1 className="font-bold text-lg leading-tight">DevZore</h1>
                  <p className="text-xs text-slate-400">Admin Panel</p>
                </div>
                {/* Mobile close button */}
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="ml-auto lg:hidden text-slate-400 hover:text-white p-1"
                  aria-label="Close sidebar"
                >
                  <ChevronLeft size={20} />
                </button>
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
            {!collapsed && (
              <p className="px-3 text-[11px] uppercase tracking-wider text-slate-500 mb-3">
                Management
              </p>
            )}

            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  title={collapsed ? item.name : undefined}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl text-sm font-medium transition-all duration-150
                    ${collapsed ? "px-0 py-3 justify-center" : "px-4 py-3"}
                    ${
                      isActive
                        ? "bg-white text-slate-950 shadow-lg"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`
                  }
                >
                  <Icon size={20} className="flex-shrink-0" />
                  {!collapsed && <span>{item.name}</span>}
                </NavLink>
              );
            })}
          </nav>

          {/* Bottom: View Site + Logout */}
          <div className="p-3 border-t border-white/10 space-y-1">
            {/* View Site */}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              title={collapsed ? "View Site" : undefined}
              className={`flex items-center gap-3 rounded-xl text-sm font-medium transition-all duration-150
                text-slate-300 hover:bg-white/10 hover:text-white
                ${collapsed ? "px-0 py-3 justify-center" : "px-4 py-3"}`}
            >
              <Globe size={20} className="flex-shrink-0" />
              {!collapsed && <span>View Site</span>}
            </a>

            {/* Logout */}
            <button
              onClick={handleLogout}
              title={collapsed ? "Logout" : undefined}
              className={`w-full flex items-center gap-3 rounded-xl text-sm font-medium transition-all duration-150
                text-slate-300 hover:bg-red-500/10 hover:text-red-400
                ${collapsed ? "px-0 py-3 justify-center" : "px-4 py-3"}`}
            >
              <LogOut size={20} className="flex-shrink-0" />
              {!collapsed && <span>Logout</span>}
            </button>
          </div>
        </aside>

        {/* ───────────── MAIN ───────────── */}
        <div
          className={`transition-all duration-300 ${
            collapsed ? "lg:ml-16" : "lg:ml-64"
          }`}
        >
          {/* Top Navbar */}
          <header className="sticky top-0 z-20 h-16 bg-white border-b border-slate-200 shadow-sm">
            <div className="h-full px-4 sm:px-6 flex items-center justify-between gap-4">
              {/* Left: toggle + breadcrumb */}
              <div className="flex items-center gap-3">
                {/* Desktop collapse toggle */}
                <button
                  onClick={toggleCollapse}
                  className="hidden lg:flex w-9 h-9 rounded-lg border border-slate-200 items-center justify-center text-slate-600 hover:bg-slate-100 transition"
                  aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                  {collapsed ? <Menu size={18} /> : <ChevronLeft size={18} />}
                </button>

                {/* Mobile open toggle */}
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden flex w-9 h-9 rounded-lg border border-slate-200 items-center justify-center text-slate-600 hover:bg-slate-100 transition"
                  aria-label="Open sidebar"
                >
                  <Menu size={18} />
                </button>

                {/* Breadcrumb */}
                <div>
                  <p className="text-xs text-slate-400 leading-none mb-0.5">
                    Admin Panel
                  </p>
                  <h2 className="font-semibold text-slate-900 text-sm leading-none">
                    {breadcrumb}
                  </h2>
                </div>
              </div>

              {/* Right: View Site + user */}
              <div className="flex items-center gap-3">
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg px-3 py-1.5 hover:bg-slate-50 transition"
                >
                  <Globe size={15} />
                  <span>View Site</span>
                </a>

                <div className="hidden sm:block text-right">
                  <p className="text-sm font-semibold text-slate-900 leading-tight">
                    {user?.name || "Admin"}
                  </p>
                  <p className="text-xs text-slate-400 leading-tight">
                    {user?.email || "Administrator"}
                  </p>
                </div>

                <div className="w-9 h-9 rounded-full bg-slate-950 text-white flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  {(user?.name || "A").charAt(0).toUpperCase()}
                </div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="p-4 sm:p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
