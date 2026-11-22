/**
 * Navbar.jsx — DevZore Navigation System
 *
 * Architecture:
 * - Shared, unified dropdown logic for Services (mega-menu) and compact dropdowns (Solutions, Resources, Company).
 * - Defined strictly at module scope to preserve React component identity across renders.
 * - Mega-menu: fixed centered panel with explicit 4-column minmax CSS grid (gap-x-8), no text crowding.
 * - Compact dropdowns: anchored directly under triggers (left-0 for Solutions/Resources, right-0 for Company).
 * - 120ms close-delay hover-bridge + instant click/tap toggle.
 * - Close on Escape, outside click, and route change.
 * - Keyboard accessible: Tab, Enter, Space, Arrow keys, Escape with visible focus rings.
 * - Mobile (<1180px): right-side drawer with accordion groups, 48px+ tap targets, pinned CTA.
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
// NAVIGATION DATA
// ============================================================

export const SERVICES_GROUPS = [
  {
    heading: "AI & Product",
    items: [
      { name: "Generative AI Development",     path: "/generative-ai-development" },
      { name: "AI Integration & LLM Services", path: "/ai-integration-services" },
      { name: "SaaS Product Development",      path: "/saas-product-development" },
      { name: "Startup MVP Development",       path: "/startup-mvp" },
    ],
  },
  {
    heading: "Web & Mobile",
    items: [
      { name: "Web Development",          path: "/web-development" },
      { name: "Next.js Development",      path: "/nextjs-development" },
      { name: "React Development",        path: "/reactdevelopment" },
      { name: "MERN Stack Development",   path: "/mern-stack-development" },
      { name: "Mobile App Development",   path: "/mobile-apps" },
      { name: "E-Commerce Development",   path: "/ecommerce" },
      { name: "Backend & API Development", path: "/backend-api" },
      { name: "UI/UX Design",             path: "/ui-ux-design" },
    ],
  },
  {
    heading: "Business Systems",
    items: [
      { name: "Inventory Management System",     path: "/inventory-management-system" },
      { name: "Distribution Management System",  path: "/distribution-management-system" },
      { name: "Installment Management Software", path: "/installment-management-software" },
      { name: "Tour Booking Systems",            path: "/tour-booking-system" },
      { name: "Online Food Ordering Systems",    path: "/food-ordering-system" },
    ],
  },
  {
    heading: "Growth & Support",
    items: [
      { name: "SEO Services",          path: "/seo-services" },
      { name: "Digital Marketing",     path: "/digital-marketing" },
      { name: "Cloud & Deployment",    path: "/cloud-deployment" },
      { name: "Maintenance & Support", path: "/maintenance" },
    ],
  },
];

export const SOLUTIONS = [
  { name: "Startup Solutions",         path: "/startup-solutions" },
  { name: "Business Solutions",        path: "/business-solutions" },
  { name: "E-Commerce Solutions",      path: "/ecommerce-solutions" },
  { name: "SaaS Solutions",            path: "/saas-solutions" },
  { name: "Management Systems",        path: "/management-systems" },
  { name: "Custom Software Solutions", path: "/custom-software-solutions" },
  { name: "Qatar & GCC Software",      path: "/qatar-software-development" },
];

export const RESOURCES = [
  { name: "Blog",               path: "/blog" },
  { name: "Development Guides", path: "/guides" },
  { name: "FAQs",               path: "/faqs" },
  { name: "Resources Hub",      path: "/resources" },
];

export const COMPANY = [
  { name: "About DevZore",       path: "/about" },
  { name: "Our Process",         path: "/our-process" },
  { name: "Technologies",        path: "/technologies" },
  { name: "Industries We Serve", path: "/industries" },
  { name: "Careers",             path: "/careers" },
  { name: "Contact Us",          path: "/contact" },
];

const ALL_SERVICE_PATHS = SERVICES_GROUPS.flatMap((g) => g.items.map((i) => i.path));

// ============================================================
// STYLES & SHARED HELPERS
// ============================================================

function navTriggerClass(active) {
  return [
    "relative h-[72px] flex items-center gap-1.5 px-3",
    "text-[13.5px] font-medium whitespace-nowrap select-none",
    "transition-colors duration-200",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#19C3C8]/50 rounded-sm",
    active ? "text-white" : "text-[#9db8c2] hover:text-white",
  ].join(" ");
}

function ActiveBar() {
  return (
    <span
      className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#19C3C8] rounded-t-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

// ============================================================
// SCROLL-TO-TOP BUTTON (stacks 12px above WhatsApp button)
// ============================================================

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling one full screen
      setVisible(window.scrollY > window.innerHeight);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{ bottom: "82px" }} // WhatsApp top edge is at 24+46=70px, 12px gap -> 82px
      className={[
        "fixed right-5 sm:right-6 z-40",
        "w-11 h-11",
        "flex items-center justify-center",
        "rounded-full",
        "bg-[#061923] border border-white/25",
        "text-white shadow-[0_6px_24px_rgba(0,0,0,0.4)]",
        "transition-all duration-300",
        "hover:bg-[#0A2F3C] hover:border-white/40",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#19C3C8]/60",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none",
      ].join(" ")}
    >
      <ChevronUp size={18} strokeWidth={2.2} />
    </button>
  );
}

// ============================================================
// UNIFIED DROPDOWN / PANEL COMPONENT
// ============================================================

function NavDropdown({
  id,
  label,
  items,
  isMega = false,
  isOpen,
  isActive,
  onOpen,
  onClose,
  onToggle,
  currentPath,
  onLinkClick,
  alignRight = false,
}) {
  const containerRef = useRef(null);
  const panelRef = useRef(null);
  const closeTimer = useRef(null);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    onOpen(id);
  };

  const handleMouseLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      onClose(id);
    }, 120);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle(id);
    } else if (e.key === "ArrowDown" && isOpen) {
      e.preventDefault();
      const firstLink = panelRef.current?.querySelector("a");
      firstLink?.focus();
    } else if (e.key === "Escape") {
      onClose(id);
    }
  };

  return (
    <li
      ref={containerRef}
      className="relative list-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        id={`nav-trigger-${id}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={`nav-panel-${id}`}
        onClick={() => onToggle(id)}
        onKeyDown={handleKeyDown}
        className={navTriggerClass(isOpen || isActive)}
      >
        {label}
        <ChevronDown
          size={13}
          strokeWidth={2}
          className={`flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#19C3C8]" : "text-[#7a9ba6]"
          }`}
        />
        {(isOpen || isActive) && <ActiveBar />}
      </button>

      {/* ========================================================
          PANEL: MEGA OR COMPACT
      ======================================================== */}
      {isMega ? (
        // Mega menu: position: fixed, centered relative to viewport
        <div
          id={`nav-panel-${id}`}
          ref={panelRef}
          role="region"
          aria-labelledby={`nav-trigger-${id}`}
          aria-hidden={!isOpen}
          className={[
            "fixed left-1/2 -translate-x-1/2 top-[72px]",
            "w-[min(1080px,calc(100vw-32px))]",
            "z-[10001]",
            "transition-all duration-200 ease-out",
            isOpen
              ? "opacity-100 visible translate-y-0 pointer-events-auto"
              : "opacity-0 invisible -translate-y-2 pointer-events-none",
          ].join(" ")}
        >
          {/* Hover bridge: 8px transparent bridge connecting header to panel */}
          <div className="h-2 w-full" />

          {/* Dark Navy Card */}
          <div className="
            bg-[#061923]
            border border-white/[0.12]
            rounded-[16px]
            shadow-[0_24px_64px_rgba(0,0,0,0.65)]
            px-8 py-6
          ">
            {/* 4-column CSS Grid with dedicated column widths */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(210px, 1fr) minmax(215px, 1.05fr) minmax(260px, 1.35fr) minmax(190px, 0.95fr)",
                columnGap: "32px",
              }}
            >
              {SERVICES_GROUPS.map((group) => (
                <div key={group.heading}>
                  <p className="mb-3.5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#19C3C8]">
                    {group.heading}
                  </p>
                  <ul className="space-y-0.5 list-none m-0 p-0">
                    {group.items.map((item) => {
                      const active = currentPath === item.path;
                      return (
                        <li key={item.path}>
                          <Link
                            to={item.path}
                            onClick={onLinkClick}
                            aria-current={active ? "page" : undefined}
                            className={[
                              "group flex items-center gap-2 py-[7px] px-1.5 rounded-md",
                              "text-[12.5px] font-medium leading-tight whitespace-nowrap",
                              "transition-colors duration-150",
                              active
                                ? "text-[#19C3C8] bg-white/[0.05]"
                                : "text-[#b0c8d0] hover:text-white hover:bg-white/[0.04]",
                            ].join(" ")}
                          >
                            <span
                              className={[
                                "w-[3px] h-[3px] rounded-full flex-shrink-0",
                                active
                                  ? "bg-[#19C3C8]"
                                  : "bg-white/20 group-hover:bg-[#19C3C8] transition-colors",
                              ].join(" ")}
                            />
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom Row */}
            <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <p className="text-[11.5px] text-[#5e7f8a]">
                Full-stack & AI engineering services — 180+ projects delivered
              </p>
              <Link
                to="/allservices"
                onClick={onLinkClick}
                className="
                  flex items-center gap-1.5
                  text-[12.5px] font-semibold text-[#19C3C8]
                  hover:text-white transition-colors
                "
              >
                View all services <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        // Compact dropdown: position: absolute, anchored directly under trigger
        <div
          id={`nav-panel-${id}`}
          ref={panelRef}
          role="region"
          aria-labelledby={`nav-trigger-${id}`}
          aria-hidden={!isOpen}
          className={[
            "absolute top-full z-[10001]",
            alignRight ? "right-0" : "left-0",
            "min-w-[270px] max-w-[calc(100vw-32px)]",
            "transition-all duration-200 ease-out",
            isOpen
              ? "opacity-100 visible translate-y-0 pointer-events-auto"
              : "opacity-0 invisible -translate-y-2 pointer-events-none",
          ].join(" ")}
        >
          {/* Hover bridge */}
          <div className="h-2 w-full" />

          {/* Dark Navy Card */}
          <div className="
            bg-[#061923]
            border border-white/[0.12]
            rounded-[14px]
            shadow-[0_20px_56px_rgba(0,0,0,0.6)]
            py-2.5 px-2
          ">
            <ul className="list-none m-0 p-0 space-y-0.5">
              {items.map((item) => {
                const active = currentPath === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={onLinkClick}
                      aria-current={active ? "page" : undefined}
                      className={[
                        "flex items-center gap-2 px-3 py-[9px] rounded-[8px]",
                        "text-[13px] font-medium whitespace-nowrap leading-tight",
                        "transition-colors duration-150",
                        active
                          ? "text-[#19C3C8] bg-white/[0.07]"
                          : "text-[#b0c8d0] hover:text-white hover:bg-white/[0.05]",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "w-[3px] h-[3px] rounded-full flex-shrink-0",
                          active ? "bg-[#19C3C8]" : "bg-transparent",
                        ].join(" ")}
                      />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
}

// ============================================================
// MOBILE ACCORDION GROUP
// ============================================================

function MobileAccordionGroup({ id, title, items, openId, setOpenId, currentPath, onLinkClick }) {
  const open = openId === id;
  const groupActive = items.some((i) => currentPath === i.path);

  return (
    <div className="border-b border-white/[0.07]">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpenId((m) => (m === id ? null : id))}
        className={[
          "w-full flex items-center justify-between",
          "py-4 text-left min-h-[52px]",
          "text-[14px] font-semibold",
          groupActive ? "text-[#19C3C8]" : "text-white",
        ].join(" ")}
      >
        {title}
        <ChevronDown
          size={15}
          className={`flex-shrink-0 transition-transform duration-250 ${
            open ? "rotate-180 text-[#19C3C8]" : "text-[#5e7f8a]"
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[1200px] opacity-100 pb-2" : "max-h-0 opacity-0"
        }`}
      >
        {id === "services"
          ? SERVICES_GROUPS.map((group) => (
              <div key={group.heading} className="mb-3">
                <p className="pl-3 mb-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#19C3C8]/75">
                  {group.heading}
                </p>
                {group.items.map((item) => (
                  <MobileDrawerLink
                    key={item.path}
                    item={item}
                    currentPath={currentPath}
                    onClick={onLinkClick}
                  />
                ))}
              </div>
            ))
          : items.map((item) => (
              <MobileDrawerLink
                key={item.path}
                item={item}
                currentPath={currentPath}
                onClick={onLinkClick}
              />
            ))}
      </div>
    </div>
  );
}

function MobileDrawerLink({ item, currentPath, onClick }) {
  const active = currentPath === item.path;
  return (
    <Link
      to={item.path}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={[
        "flex items-center gap-2.5 pl-4 pr-2 min-h-[46px] py-2",
        "text-[13px] font-medium transition-colors duration-150",
        active ? "text-[#19C3C8]" : "text-[#9db8c2] hover:text-white",
      ].join(" ")}
    >
      <span
        className={[
          "w-[3px] h-[3px] rounded-full flex-shrink-0",
          active ? "bg-[#19C3C8]" : "bg-white/20",
        ].join(" ")}
      />
      {item.name}
    </Link>
  );
}

// ============================================================
// MAIN NAVBAR COMPONENT
// ============================================================

export default function Navbar() {
  const location = useLocation();
  const navRef = useRef(null);

  const [openMenu, setOpenMenu] = useState(null); // "services" | "solutions" | "resources" | "company" | null
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // ---- Scroll background effect ----
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ---- Close on route change ----
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileGroup(null);
  }, [location.pathname, location.hash]);

  // ---- Body scroll lock when mobile drawer open ----
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // ---- Close on outside click ----
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("pointerdown", handleOutsideClick);
    return () => document.removeEventListener("pointerdown", handleOutsideClick);
  }, []);

  // ---- Close on Escape key ----
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
        setMobileGroup(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // ---- Smooth hash scrolling ----
  useEffect(() => {
    if (!location.hash) return;
    const timer = setTimeout(() => {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  // ---- Active section indicators ----
  const currentPath = location.pathname;
  const isServiceActive = ALL_SERVICE_PATHS.some((p) => currentPath === p);
  const isSolutionActive = SOLUTIONS.some((s) => currentPath === s.path);
  const isResourceActive = RESOURCES.some((r) => currentPath === r.path);
  const isCompanyActive = COMPANY.some((c) => currentPath === c.path);
  const isCaseStudiesActive = currentPath.startsWith("/projects");
  const isHireActive = currentPath.startsWith("/hire-");

  // ---- Handlers ----
  const handleLinkClick = useCallback(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileGroup(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleOpen = useCallback((id) => setOpenMenu(id), []);
  const handleClose = useCallback((id) => {
    setOpenMenu((current) => (current === id ? null : current));
  }, []);
  const handleToggle = useCallback((id) => {
    setOpenMenu((current) => (current === id ? null : id));
  }, []);

  return (
    <>
      {/* Mobile backdrop */}
      <button
        type="button"
        aria-label="Close navigation menu"
        tabIndex={mobileOpen ? 0 : -1}
        onClick={() => setMobileOpen(false)}
        className={[
          "fixed inset-0 z-[9998] min-[1180px]:hidden transition-all duration-300",
          mobileOpen
            ? "visible opacity-100 bg-black/60 backdrop-blur-[2px]"
            : "invisible opacity-0 pointer-events-none",
        ].join(" ")}
      />

      {/* ============================================================
          FIXED HEADER
      ============================================================ */}
      <nav
        ref={navRef}
        aria-label="Main navigation"
        className={[
          "fixed top-0 left-0 right-0 z-[9999] h-[72px]",
          "transition-all duration-300",
          scrolled
            ? "bg-[#061923]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_6px_32px_rgba(0,0,0,0.25)]"
            : "bg-[#061923] border-b border-white/[0.05]",
        ].join(" ")}
      >
        <div className="
          max-w-[1280px] mx-auto h-full
          px-4 sm:px-6 lg:px-8
          flex items-center justify-between gap-3
        ">
          {/* Logo */}
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

          {/* ========================================================
              DESKTOP NAVIGATION (Visible at >= 1180px)
          ======================================================== */}
          <div className="hidden min-[1180px]:flex items-center ml-auto gap-0">
            <ul className="flex items-center list-none m-0 p-0">

              {/* SERVICES — Mega Menu */}
              <NavDropdown
                id="services"
                label="Services"
                items={[]}
                isMega={true}
                isOpen={openMenu === "services"}
                isActive={isServiceActive}
                onOpen={handleOpen}
                onClose={handleClose}
                onToggle={handleToggle}
                currentPath={currentPath}
                onLinkClick={handleLinkClick}
              />

              {/* SOLUTIONS — Compact Dropdown */}
              <NavDropdown
                id="solutions"
                label="Solutions"
                items={SOLUTIONS}
                isMega={false}
                isOpen={openMenu === "solutions"}
                isActive={isSolutionActive}
                onOpen={handleOpen}
                onClose={handleClose}
                onToggle={handleToggle}
                currentPath={currentPath}
                onLinkClick={handleLinkClick}
                alignRight={false}
              />

              {/* CASE STUDIES — Direct Link */}
              <li className="list-none">
                <Link
                  to="/projects"
                  onClick={handleLinkClick}
                  aria-current={isCaseStudiesActive ? "page" : undefined}
                  className={navTriggerClass(isCaseStudiesActive)}
                >
                  Case Studies
                  {isCaseStudiesActive && <ActiveBar />}
                </Link>
              </li>

              {/* HIRE ENGINEERS — Direct Link */}
              <li className="list-none">
                <Link
                  to="/hire-engineers"
                  onClick={handleLinkClick}
                  aria-current={isHireActive ? "page" : undefined}
                  className={navTriggerClass(isHireActive)}
                >
                  Hire Engineers
                  {isHireActive && <ActiveBar />}
                </Link>
              </li>

              {/* RESOURCES — Compact Dropdown */}
              <NavDropdown
                id="resources"
                label="Resources"
                items={RESOURCES}
                isMega={false}
                isOpen={openMenu === "resources"}
                isActive={isResourceActive}
                onOpen={handleOpen}
                onClose={handleClose}
                onToggle={handleToggle}
                currentPath={currentPath}
                onLinkClick={handleLinkClick}
                alignRight={false}
              />

              {/* COMPANY — Compact Dropdown (Right-aligned to avoid overflow) */}
              <NavDropdown
                id="company"
                label="Company"
                items={COMPANY}
                isMega={false}
                isOpen={openMenu === "company"}
                isActive={isCompanyActive}
                onOpen={handleOpen}
                onClose={handleClose}
                onToggle={handleToggle}
                currentPath={currentPath}
                onLinkClick={handleLinkClick}
                alignRight={true}
              />
            </ul>

            {/* CTA BUTTON */}
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="
                group ml-4 h-[42px] px-5
                flex items-center justify-center gap-1.5 flex-shrink-0
                rounded-[10px] bg-white text-[#061923]
                text-[12.5px] font-bold uppercase tracking-[0.08em] whitespace-nowrap
                hover:bg-[#eaf5f6] transition-all duration-200
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

          {/* ========================================================
              MOBILE HAMBURGER (Visible at < 1180px)
          ======================================================== */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className={[
              "min-[1180px]:hidden w-10 h-10 flex items-center justify-center",
              "text-white rounded-md",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#19C3C8]/50",
              "transition-opacity duration-200",
              mobileOpen ? "opacity-0 pointer-events-none" : "opacity-100",
            ].join(" ")}
          >
            <Menu size={24} strokeWidth={1.9} />
          </button>
        </div>
      </nav>

      {/* ============================================================
          MOBILE DRAWER (< 1180px)
      ============================================================ */}
      <aside
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        inert={mobileOpen ? undefined : ""}
        className={[
          "fixed top-0 right-0 bottom-0 z-[10001] min-[1180px]:hidden",
          "w-[88%] max-w-[360px] h-[100dvh] flex flex-col",
          "bg-[#061923] border-l border-white/[0.08]",
          "shadow-[-24px_0_64px_rgba(0,0,0,0.4)]",
          "transition-transform duration-300 ease-in-out",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        {/* Mobile Header Row */}
        <div className="h-[72px] px-5 flex items-center justify-between shrink-0 border-b border-white/[0.07]">
          <Link
            to="/"
            onClick={handleLinkClick}
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
              text-white rounded-md hover:bg-white/[0.07]
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#19C3C8]/50
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile Scroll Area */}
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-4 py-2">
          {/* Services Accordion */}
          <MobileAccordionGroup
            id="services"
            title="Services"
            items={[]}
            openId={mobileGroup}
            setOpenId={setMobileGroup}
            currentPath={currentPath}
            onLinkClick={handleLinkClick}
          />

          {/* Solutions Accordion */}
          <MobileAccordionGroup
            id="solutions"
            title="Solutions"
            items={SOLUTIONS}
            openId={mobileGroup}
            setOpenId={setMobileGroup}
            currentPath={currentPath}
            onLinkClick={handleLinkClick}
          />

          {/* Case Studies — Direct */}
          <Link
            to="/projects"
            onClick={handleLinkClick}
            aria-current={isCaseStudiesActive ? "page" : undefined}
            className={[
              "flex items-center justify-between",
              "min-h-[52px] py-4 border-b border-white/[0.07]",
              "text-[14px] font-semibold",
              isCaseStudiesActive ? "text-[#19C3C8]" : "text-white",
            ].join(" ")}
          >
            <span className="flex items-center gap-2">
              Case Studies
              <span className="px-1.5 py-0.5 rounded bg-[#19C3C8]/20 text-[#19C3C8] text-[10px] font-bold leading-tight">
                6 Systems
              </span>
            </span>
            <ChevronRight size={14} className="text-[#5e7f8a]" />
          </Link>

          {/* Hire Engineers — Direct */}
          <Link
            to="/hire-engineers"
            onClick={handleLinkClick}
            aria-current={isHireActive ? "page" : undefined}
            className={[
              "flex items-center justify-between",
              "min-h-[52px] py-4 border-b border-white/[0.07]",
              "text-[14px] font-semibold",
              isHireActive ? "text-[#19C3C8]" : "text-white",
            ].join(" ")}
          >
            <span className="flex items-center gap-2">
              Hire Engineers
              <span className="px-1.5 py-0.5 rounded bg-[#19C3C8]/20 text-[#19C3C8] text-[10px] font-bold leading-tight">
                Talent
              </span>
            </span>
            <ChevronRight size={14} className="text-[#5e7f8a]" />
          </Link>

          {/* Resources Accordion */}
          <MobileAccordionGroup
            id="resources"
            title="Resources"
            items={RESOURCES}
            openId={mobileGroup}
            setOpenId={setMobileGroup}
            currentPath={currentPath}
            onLinkClick={handleLinkClick}
          />

          {/* Company Accordion */}
          <MobileAccordionGroup
            id="company"
            title="Company"
            items={COMPANY}
            openId={mobileGroup}
            setOpenId={setMobileGroup}
            currentPath={currentPath}
            onLinkClick={handleLinkClick}
          />
        </div>

        {/* Mobile Pinned CTA Bottom */}
        <div className="
          shrink-0 px-4 pt-4
          pb-[max(16px,env(safe-area-inset-bottom))]
          border-t border-white/[0.07] bg-[#061923]
        ">
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="
              group w-full h-[46px]
              flex items-center justify-center gap-2
              rounded-[10px] bg-white text-[#061923]
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
            className="mt-3 flex items-center justify-center gap-1.5 text-[13px] font-medium text-[#19C3C8] hover:text-white transition-colors"
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
