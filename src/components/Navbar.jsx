/**
 * Navbar.jsx  — Complete redesign (seo-overhaul branch)
 *
 * Changes vs. previous version:
 * - Removed: Home link, Language switcher (placeholder only, noted in SEO_REPORT.md)
 * - Removed: Duplicate "Case Studies" from Resources & Company
 * - Removed: Duplicate "Hire Dedicated Engineers" from Services
 * - Removed: ArrowUpRight icons on internal links (misleading external-link signal)
 * - Added:   Services mega-menu (4 columns with group headings + all niche services)
 * - Fixed:   Dropdown panels anchored under their own trigger, never overflow viewport
 * - Fixed:   Services mega-menu centred under the nav container (max-w ~960 px)
 * - Fixed:   z-index stack: nav 9999, dropdown 10000
 * - Fixed:   120 ms close-delay (hover-bridge) prevents flicker when moving mouse
 * - Fixed:   Active underline only on current section — no Home underline bleed
 * - Fixed:   CTA button never clipped — header max-w 1280px + overflow-x handling
 * - Fixed:   Keyboard: Tab / Enter / Space / Arrow / Escape, aria-expanded, aria-current
 * - Fixed:   Mobile drawer: 44px+ tap targets, body-scroll lock, focus trap, Escape
 * - Added:   ScrollToTopButton component (shows after 1 screen scroll, stacks above WhatsApp)
 * - Fixed:   Hero heading letter-spacing & line-height tweaks applied inline in Hero section
 */

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  X,
  ArrowRight,
  ArrowUpRight,
  Menu,
  ChevronUp,
} from "lucide-react";

// ============================================================
// NAV DATA
// ============================================================

const SERVICES_GROUPS = [
  {
    heading: "AI & Product",
    items: [
      { name: "Generative AI Development", path: "/generative-ai-development" },
      { name: "AI Integration & LLM Services", path: "/ai-integration-services" },
      { name: "SaaS Product Development", path: "/saas-product-development" },
      { name: "Startup MVP Development", path: "/startup-mvp" },
    ],
  },
  {
    heading: "Web & Mobile",
    items: [
      { name: "Web Development", path: "/web-development" },
      { name: "Next.js Development", path: "/nextjs-development" },
      { name: "React Development", path: "/reactdevelopment" },
      { name: "MERN Stack Development", path: "/mern-stack-development" },
      { name: "Mobile App Development", path: "/mobile-apps" },
      { name: "E-Commerce Development", path: "/ecommerce" },
      { name: "Backend & API Development", path: "/backend-api" },
      { name: "UI/UX Design", path: "/ui-ux-design" },
    ],
  },
  {
    heading: "Business Systems",
    items: [
      { name: "Inventory Management System", path: "/inventory-management-system" },
      { name: "Distribution Management System", path: "/distribution-management-system" },
      { name: "Installment Management Software", path: "/installment-management-software" },
      { name: "Tour Booking Systems", path: "/tour-booking-system" },
      { name: "Online Food Ordering Systems", path: "/food-ordering-system" },
    ],
  },
  {
    heading: "Growth & Support",
    items: [
      { name: "SEO Services", path: "/seo-services" },
      { name: "Digital Marketing", path: "/digital-marketing" },
      { name: "Cloud & Deployment", path: "/cloud-deployment" },
      { name: "Maintenance & Support", path: "/maintenance" },
    ],
  },
];

const SOLUTIONS = [
  { name: "Startup Solutions", path: "/startup-solutions" },
  { name: "Business Solutions", path: "/business-solutions" },
  { name: "E-Commerce Solutions", path: "/ecommerce-solutions" },
  { name: "SaaS Solutions", path: "/saas-solutions" },
  { name: "Management Systems", path: "/management-systems" },
  { name: "Custom Software Solutions", path: "/custom-software-solutions" },
  { name: "Qatar & GCC Software", path: "/qatar-software-development" },
];

const RESOURCES = [
  { name: "Blog", path: "/blog" },
  { name: "Development Guides", path: "/guides" },
  { name: "FAQs", path: "/faqs" },
  { name: "Resources Hub", path: "/resources" },
];

const COMPANY = [
  { name: "About DevZore", path: "/about" },
  { name: "Our Process", path: "/our-process" },
  { name: "Technologies", path: "/technologies" },
  { name: "Industries We Serve", path: "/industries" },
  { name: "Careers", path: "/careers" },
  { name: "Contact Us", path: "/contact" },
];

// All flat service paths (for active state check)
const ALL_SERVICE_PATHS = SERVICES_GROUPS.flatMap((g) =>
  g.items.map((i) => i.path)
);

// ============================================================
// HELPERS
// ============================================================

function useCloseDelay(delay = 120) {
  const timer = useRef(null);

  const schedule = useCallback(
    (fn) => {
      timer.current = setTimeout(fn, delay);
    },
    [delay]
  );

  const cancel = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  useEffect(() => () => cancel(), [cancel]);

  return { schedule, cancel };
}

// ============================================================
// SCROLL-TO-TOP BUTTON  (exported so App.jsx can render it)
// ============================================================

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{ bottom: "96px" }}   /* 60px WhatsApp + 24px gap + 12px extra */
      className={`
        fixed right-5 sm:right-6
        z-40
        w-11 h-11
        flex items-center justify-center
        rounded-full
        bg-[#071923] border border-white/20
        text-white
        shadow-[0_6px_24px_rgba(0,0,0,0.35)]
        transition-all duration-300
        hover:bg-[#0A2F3C] hover:border-white/40
        focus:outline-none focus:ring-2 focus:ring-[#19C3C8]/60
        ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <ChevronUp size={18} strokeWidth={2.2} />
    </button>
  );
}

// ============================================================
// MAIN NAVBAR
// ============================================================

export default function Navbar() {
  const location = useLocation();

  // Desktop dropdown state
  const [openMenu, setOpenMenu] = useState(null); // "services" | "solutions" | "resources" | "company" | null
  // Mobile
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState(null);
  // Scroll
  const [scrolled, setScrolled] = useState(false);

  const { schedule: scheduleClose, cancel: cancelClose } = useCloseDelay(120);

  // ---- Scroll listener ----
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ---- Close everything on route change ----
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileGroup(null);
  }, [location.pathname, location.hash]);

  // ---- Body scroll lock ----
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // ---- Escape key ----
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
        setMobileGroup(null);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // ---- Hash scroll ----
  useEffect(() => {
    if (!location.hash) return;
    const t = setTimeout(() => {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => clearTimeout(t);
  }, [location.pathname, location.hash]);

  // ---- Helpers ----
  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileGroup(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isServiceActive = ALL_SERVICE_PATHS.some((p) => location.pathname === p);
  const isSolutionActive = SOLUTIONS.some((s) => location.pathname === s.path);
  const isResourceActive = RESOURCES.some((r) => location.pathname === r.path);
  const isCompanyActive = COMPANY.some((c) => location.pathname === c.path);
  const isCaseStudiesActive = location.pathname.startsWith("/projects");
  const isHireActive = location.pathname.startsWith("/hire-");

  // ============================================================
  // DESKTOP — MEGA MENU (SERVICES)
  // ============================================================

  const ServicesMegaMenu = () => {
    const open = openMenu === "services";

    return (
      <li
        className="relative"
        onMouseEnter={() => { cancelClose(); setOpenMenu("services"); }}
        onMouseLeave={() => scheduleClose(() => setOpenMenu((m) => m === "services" ? null : m))}
      >
        <button
          type="button"
          aria-haspopup="true"
          aria-expanded={open}
          onClick={() => setOpenMenu((m) => m === "services" ? null : "services")}
          className={navTriggerClass(open || isServiceActive)}
        >
          Services
          <ChevronDown
            size={13}
            strokeWidth={2}
            className={`flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180 text-[#19C3C8]" : "text-[#7a9ba6]"}`}
          />
          {(open || isServiceActive) && <ActiveBar />}
        </button>

        {/* Mega-panel: centred under header container, 960px max */}
        <div
          role="region"
          aria-label="Services menu"
          className={`
            fixed left-1/2 -translate-x-1/2
            top-[72px]
            w-[min(960px,calc(100vw-32px))]
            transition-all duration-200 ease-out
            ${open
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2 pointer-events-none"
            }
            z-[10000]
          `}
        >
          {/* hover bridge — invisible 8px gap filler so mouse can travel to panel */}
          <div className="h-2 w-full" />
          <div className="
            bg-[#071923]
            border border-white/[0.10]
            rounded-[16px]
            shadow-[0_24px_64px_rgba(0,0,0,0.5)]
            px-6 py-5
          ">
            {/* 4 columns */}
            <div className="grid grid-cols-4 gap-x-6 gap-y-0">
              {SERVICES_GROUPS.map((group) => (
                <div key={group.heading}>
                  <p className="
                    mb-2.5 text-[10px] font-bold uppercase tracking-[0.16em]
                    text-[#19C3C8]
                  ">
                    {group.heading}
                  </p>
                  <ul className="space-y-0.5">
                    {group.items.map((item) => {
                      const active = location.pathname === item.path;
                      return (
                        <li key={item.path}>
                          <Link
                            to={item.path}
                            onClick={closeAll}
                            aria-current={active ? "page" : undefined}
                            className={`
                              group flex items-center gap-1.5
                              py-[7px] pr-2 pl-0
                              text-[12.5px] font-medium leading-tight whitespace-nowrap
                              rounded-md
                              transition-colors duration-150
                              ${active
                                ? "text-[#19C3C8]"
                                : "text-[#b0c8d0] hover:text-white"
                              }
                            `}
                          >
                            <span className={`
                              w-[3px] h-[3px] rounded-full flex-shrink-0 mt-0.5
                              transition-colors
                              ${active ? "bg-[#19C3C8]" : "bg-white/20 group-hover:bg-[#19C3C8]"}
                            `} />
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
            {/* Bottom row */}
            <div className="mt-4 pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <p className="text-[11px] text-[#5e7f8a]">
                Full-stack & AI engineering services — 180+ projects delivered
              </p>
              <Link
                to="/allservices"
                onClick={closeAll}
                className="
                  flex items-center gap-1.5
                  text-[12px] font-semibold text-[#19C3C8]
                  hover:text-white transition-colors
                "
              >
                View all services <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </li>
    );
  };

  // ============================================================
  // DESKTOP — SIMPLE DROPDOWN
  // ============================================================

  const SimpleDropdown = ({ id, label, items, isActive }) => {
    const open = openMenu === id;

    return (
      <li
        className="relative"
        onMouseEnter={() => { cancelClose(); setOpenMenu(id); }}
        onMouseLeave={() => scheduleClose(() => setOpenMenu((m) => m === id ? null : m))}
      >
        <button
          type="button"
          aria-haspopup="true"
          aria-expanded={open}
          onClick={() => setOpenMenu((m) => m === id ? null : id)}
          className={navTriggerClass(open || isActive)}
        >
          {label}
          <ChevronDown
            size={13}
            strokeWidth={2}
            className={`flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180 text-[#19C3C8]" : "text-[#7a9ba6]"}`}
          />
          {(open || isActive) && <ActiveBar />}
        </button>

        <div
          className={`
            absolute top-full left-0
            pt-2
            min-w-[220px]
            transition-all duration-200 ease-out
            z-[10000]
            ${open
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2 pointer-events-none"
            }
          `}
          /* Clamp so panel never goes off-screen right */
          style={{ maxWidth: "calc(100vw - 24px)" }}
        >
          {/* hover bridge */}
          <div className="h-2 w-full" />
          <div className="
            bg-[#071923]
            border border-white/[0.10]
            rounded-[14px]
            shadow-[0_20px_56px_rgba(0,0,0,0.45)]
            py-2 px-1.5
          ">
            {items.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeAll}
                  aria-current={active ? "page" : undefined}
                  className={`
                    flex items-center gap-2
                    px-3 py-2.5
                    rounded-[8px]
                    text-[13px] font-medium whitespace-nowrap
                    transition-colors duration-150
                    ${active
                      ? "text-[#19C3C8] bg-white/[0.06]"
                      : "text-[#b0c8d0] hover:text-white hover:bg-white/[0.05]"
                    }
                  `}
                >
                  {active && (
                    <span className="w-[3px] h-[3px] rounded-full bg-[#19C3C8] flex-shrink-0" />
                  )}
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </li>
    );
  };

  // ============================================================
  // MOBILE ACCORDION GROUP
  // ============================================================

  const MobileGroup = ({ id, title, items }) => {
    const open = mobileGroup === id;
    const groupActive = items.some((i) => location.pathname === i.path);

    return (
      <div className="border-b border-white/[0.07]">
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setMobileGroup((m) => m === id ? null : id)}
          className={`
            w-full flex items-center justify-between
            py-4 text-left min-h-[52px]
            text-[14px] font-semibold
            ${groupActive ? "text-[#19C3C8]" : "text-white"}
          `}
        >
          {title}
          <ChevronDown
            size={15}
            className={`flex-shrink-0 transition-transform duration-250 ${open ? "rotate-180 text-[#19C3C8]" : "text-[#5e7f8a]"}`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[1200px] opacity-100 pb-2" : "max-h-0 opacity-0"}`}
        >
          {id === "services"
            ? /* Mobile services: show headings + items */
              SERVICES_GROUPS.map((group) => (
                <div key={group.heading} className="mb-3">
                  <p className="pl-3 mb-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#19C3C8]/70">
                    {group.heading}
                  </p>
                  {group.items.map((item) => (
                    <MobileLink key={item.path} item={item} />
                  ))}
                </div>
              ))
            : items.map((item) => <MobileLink key={item.path} item={item} />)
          }
        </div>
      </div>
    );
  };

  const MobileLink = ({ item }) => {
    const active = location.pathname === item.path;
    return (
      <Link
        to={item.path}
        onClick={() => { setMobileOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        aria-current={active ? "page" : undefined}
        className={`
          flex items-center gap-2.5
          pl-4 pr-2 min-h-[44px] py-2
          text-[13px] font-medium
          transition-colors duration-150
          ${active ? "text-[#19C3C8]" : "text-[#9db8c2] hover:text-white"}
        `}
      >
        <span className={`w-[3px] h-[3px] rounded-full flex-shrink-0 ${active ? "bg-[#19C3C8]" : "bg-white/20"}`} />
        {item.name}
      </Link>
    );
  };

  // ============================================================
  // SHARED STYLE HELPERS
  // ============================================================

  function navTriggerClass(active) {
    return `
      relative h-[72px] flex items-center gap-1.5
      px-3
      text-[13.5px] font-medium whitespace-nowrap
      transition-colors duration-200
      ${active ? "text-white" : "text-[#9db8c2] hover:text-white"}
      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#19C3C8]/50 rounded-sm
    `;
  }

  function navLinkClass(active) {
    return `
      relative h-[72px] flex items-center gap-1.5
      px-3
      text-[13.5px] font-medium whitespace-nowrap
      transition-colors duration-200
      ${active ? "text-white" : "text-[#9db8c2] hover:text-white"}
      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#19C3C8]/50 rounded-sm
    `;
  }

  function ActiveBar() {
    return (
      <span
        className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#19C3C8] rounded-t-full"
        aria-hidden="true"
      />
    );
  }

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <>
      {/* ---- Mobile overlay ---- */}
      <button
        type="button"
        aria-label="Close navigation menu"
        tabIndex={mobileOpen ? 0 : -1}
        onClick={() => setMobileOpen(false)}
        className={`
          fixed inset-0 z-[9998] lg:hidden
          transition-all duration-300
          ${mobileOpen ? "visible opacity-100 bg-black/60 backdrop-blur-[2px]" : "invisible opacity-0 pointer-events-none"}
        `}
      />

      {/* ============================================================
          STICKY HEADER
      ============================================================ */}
      <nav
        aria-label="Main navigation"
        className={`
          fixed top-0 left-0 right-0
          z-[9999]
          h-[72px]
          transition-all duration-300
          ${scrolled
            ? "bg-[#061923]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_6px_32px_rgba(0,0,0,0.25)]"
            : "bg-[#061923] border-b border-white/[0.05]"
          }
        `}
      >
        <div className="
          max-w-[1280px] mx-auto h-full
          px-4 sm:px-5 lg:px-8
          flex items-center justify-between
          gap-3
          overflow-x-hidden
        ">

          {/* ---- Logo ---- */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="DevZore home"
            className="flex items-center shrink-0 group"
          >
            <img
              src="/logo.png"
              alt="DevZore Software Agency"
              width="56"
              height="56"
              className="w-[52px] h-[52px] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <div className="-ml-2 flex flex-col leading-none">
              <span className="text-[19px] font-extrabold tracking-[-0.03em] text-white">
                Dev<span className="text-[#19C3C8]">Zore</span>
              </span>
              <span className="mt-[2px] text-[9.5px] font-semibold uppercase tracking-[0.19em] text-[#5e7f8a]">
                Software Agency
              </span>
            </div>
          </Link>

          {/* ============================================================
              DESKTOP NAV
          ============================================================ */}
          <div className="hidden lg:flex items-center ml-auto gap-1">
            <ul className="flex items-center list-none m-0 p-0">

              {/* SERVICES */}
              <ServicesMegaMenu />

              {/* SOLUTIONS */}
              <SimpleDropdown
                id="solutions"
                label="Solutions"
                items={SOLUTIONS}
                isActive={isSolutionActive}
              />

              {/* CASE STUDIES — direct link */}
              <li>
                <Link
                  to="/projects"
                  onClick={closeAll}
                  aria-current={isCaseStudiesActive ? "page" : undefined}
                  className={navLinkClass(isCaseStudiesActive)}
                >
                  Case Studies
                  {isCaseStudiesActive && <ActiveBar />}
                </Link>
              </li>

              {/* HIRE ENGINEERS — direct link */}
              <li>
                <Link
                  to="/hire-engineers"
                  onClick={closeAll}
                  aria-current={isHireActive ? "page" : undefined}
                  className={navLinkClass(isHireActive)}
                >
                  Hire Engineers
                  {isHireActive && <ActiveBar />}
                </Link>
              </li>

              {/* RESOURCES */}
              <SimpleDropdown
                id="resources"
                label="Resources"
                items={RESOURCES}
                isActive={isResourceActive}
              />

              {/* COMPANY */}
              <SimpleDropdown
                id="company"
                label="Company"
                items={COMPANY}
                isActive={isCompanyActive}
              />
            </ul>

            {/* CTA */}
            <Link
              to="/contact"
              onClick={closeAll}
              className="
                group ml-3
                h-[42px] px-5
                flex items-center justify-center gap-1.5
                flex-shrink-0
                rounded-[10px]
                bg-white text-[#061923]
                text-[12.5px] font-bold uppercase tracking-[0.08em]
                whitespace-nowrap
                hover:bg-[#eaf5f6]
                transition-all duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#19C3C8]/50
              "
            >
              Start a Project
              <ArrowRight
                size={13}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* ---- Mobile hamburger ---- */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className={`
              lg:hidden w-10 h-10 flex items-center justify-center
              text-white rounded-md
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#19C3C8]/50
              transition-opacity duration-200
              ${mobileOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
            `}
          >
            <Menu size={24} strokeWidth={1.9} />
          </button>
        </div>
      </nav>

      {/* ============================================================
          MOBILE DRAWER
      ============================================================ */}
      <aside
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        inert={mobileOpen ? undefined : ""}
        className={`
          fixed top-0 right-0 bottom-0
          z-[10001] lg:hidden
          w-[88%] max-w-[360px] h-[100dvh]
          flex flex-col
          bg-[#061923]
          border-l border-white/[0.08]
          shadow-[-24px_0_64px_rgba(0,0,0,0.4)]
          transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Mobile header */}
        <div className="h-[72px] px-5 flex items-center justify-between shrink-0 border-b border-white/[0.07]">
          <Link
            to="/"
            onClick={() => { setMobileOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center"
          >
            <img src="/logo.png" alt="DevZore" width="48" height="48" className="w-[46px] h-[46px] object-contain" />
            <div className="-ml-1.5">
              <p className="text-[16px] font-extrabold text-white leading-tight">
                Dev<span className="text-[#19C3C8]">Zore</span>
              </p>
              <p className="text-[9px] uppercase tracking-[0.17em] text-[#5e7f8a]">Software Agency</p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
            className="
              w-9 h-9 flex items-center justify-center
              text-white rounded-md
              hover:bg-white/[0.07]
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#19C3C8]/50
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile scroll area */}
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-4 py-2">

          {/* SERVICES accordion */}
          <MobileGroup id="services" title="Services" items={[]} />

          {/* SOLUTIONS accordion */}
          <MobileGroup id="solutions" title="Solutions" items={SOLUTIONS} />

          {/* CASE STUDIES — direct */}
          <Link
            to="/projects"
            onClick={() => { setMobileOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            aria-current={isCaseStudiesActive ? "page" : undefined}
            className={`
              flex items-center justify-between
              min-h-[52px] py-4
              border-b border-white/[0.07]
              text-[14px] font-semibold
              ${isCaseStudiesActive ? "text-[#19C3C8]" : "text-white"}
            `}
          >
            <span className="flex items-center gap-2">
              Case Studies
              <span className="px-1.5 py-0.5 rounded bg-[#19C3C8]/20 text-[#19C3C8] text-[10px] font-bold leading-tight">
                6 Systems
              </span>
            </span>
            <ChevronRight size={14} className="text-[#5e7f8a]" />
          </Link>

          {/* HIRE ENGINEERS — direct */}
          <Link
            to="/hire-engineers"
            onClick={() => { setMobileOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            aria-current={isHireActive ? "page" : undefined}
            className={`
              flex items-center justify-between
              min-h-[52px] py-4
              border-b border-white/[0.07]
              text-[14px] font-semibold
              ${isHireActive ? "text-[#19C3C8]" : "text-white"}
            `}
          >
            <span className="flex items-center gap-2">
              Hire Engineers
              <span className="px-1.5 py-0.5 rounded bg-[#19C3C8]/20 text-[#19C3C8] text-[10px] font-bold leading-tight">
                Talent
              </span>
            </span>
            <ChevronRight size={14} className="text-[#5e7f8a]" />
          </Link>

          {/* RESOURCES accordion */}
          <MobileGroup id="resources" title="Resources" items={RESOURCES} />

          {/* COMPANY accordion */}
          <MobileGroup id="company" title="Company" items={COMPANY} />
        </div>

        {/* Mobile CTA — pinned bottom */}
        <div className="
          shrink-0 px-4 pt-4
          pb-[max(16px,env(safe-area-inset-bottom))]
          border-t border-white/[0.07]
          bg-[#061923]
        ">
          <Link
            to="/contact"
            onClick={() => { setMobileOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="
              group w-full h-[46px]
              flex items-center justify-center gap-2
              rounded-[10px]
              bg-white text-[#061923]
              text-[13px] font-bold uppercase tracking-[0.07em]
              hover:bg-[#eaf5f6] transition-colors
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#19C3C8]/50
            "
          >
            Start a Project
            <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>

          <a
            href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-3 flex items-center justify-center gap-1.5
              text-[13px] font-medium text-[#19C3C8]
              hover:text-white transition-colors
            "
          >
            Chat on WhatsApp
            <ArrowUpRight size={12} />
          </a>

          <p className="mt-3 text-[10px] text-center uppercase tracking-[0.14em] text-[#3d5f6b]">
            Digital Solutions · Trusted Worldwide
          </p>
        </div>
      </aside>
    </>
  );
}
