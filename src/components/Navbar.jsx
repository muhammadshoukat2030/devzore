import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Settings,
  Palette,
  Wrench,
  Rocket,
  Cloud,
  Lightbulb,
  ChevronDown,
  LayoutGrid,
  Mail,
  X,
  ArrowRight,
  Zap,
  Sun,
  Moon,
  Megaphone,
  SearchCheck,
} from "lucide-react";

const Navbar = ({ isDark, toggleTheme }) => {
  const d = isDark;
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

  const services = [
    {
      name: "All Services",
      icon: <LayoutGrid size={16} />,
      path: "/allservices",
      desc: "Browse everything we offer",
    },
    {
      name: "Web Development",
      icon: <Globe size={16} />,
      path: "/web-development",
      desc: "React, Next.js & modern web apps",
    },
    {
      name: "Mobile App Development",
      icon: <Smartphone size={16} />,
      path: "/mobile-apps",
      desc: "Modern mobile applications",
    },
    {
      name: "E-Commerce",
      icon: <ShoppingCart size={16} />,
      path: "/ecommerce",
      desc: "Custom online stores",
    },
    {
      name: "MERN Stack",
      icon: <Rocket size={16} />,
      path: "/mern-stack-development",
      desc: "MongoDB, Express, React & Node.js",
    },
    {
      name: "SaaS Development",
      icon: <Cloud size={16} />,
      path: "/saas-product-development",
      desc: "Scalable SaaS products",
    },
    {
      name: "React Development",
      icon: <Zap size={16} />,
      path: "/reactdevelopment",
      desc: "Modern React applications",
    },
    {
      name: "UI/UX Design",
      icon: <Palette size={16} />,
      path: "/ui-ux-design",
      desc: "User-focused product design",
    },
    {
      name: "Startup MVP",
      icon: <Lightbulb size={16} />,
      path: "/startup-mvp",
      desc: "Turn your idea into an MVP",
    },
    {
      name: "Maintenance & Support",
      icon: <Wrench size={16} />,
      path: "/maintenance",
      desc: "Website maintenance & support",
    },
    {
      name: "Backend & API",
      icon: <Settings size={16} />,
      path: "/backend-api",
      desc: "Node.js, Express & REST APIs",
    },
    {
      name: "SEO Services",
      icon: <SearchCheck size={16} />,
      path: "/seo-services",
      desc: "Technical & on-page SEO",
    },
    {
      name: "Digital Marketing",
      icon: <Megaphone size={16} />,
      path: "/digital-marketing",
      desc: "Marketing & online growth",
    },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/#projects" },
    { name: "Blog", path: "/blog" },
  ];

  // ======================================================
  // SCROLL STATE
  // ======================================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ======================================================
  // HASH NAVIGATION
  // ======================================================

  useEffect(() => {
    if (!location.hash) return;

    const timer = setTimeout(() => {
      const element = document.getElementById(
        location.hash.replace("#", "")
      );

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  // ======================================================
  // CLOSE MENUS ON ROUTE CHANGE
  // ======================================================

  useEffect(() => {
    setIsOpen(false);
    setServiceOpen(false);
    setMobileServiceOpen(false);
  }, [location.pathname, location.hash]);

  // ======================================================
  // LOCK BODY SCROLL
  // ======================================================

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ======================================================
  // ESCAPE KEY
  // ======================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setServiceOpen(false);
        setMobileServiceOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // ======================================================
  // HELPERS
  // ======================================================

  const handleLinkClick = (path) => {
    setIsOpen(false);
    setServiceOpen(false);
    setMobileServiceOpen(false);

    if (!path.includes("#")) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const isLinkActive = (path) => {
    if (path.includes("#")) {
      const [, hash] = path.split("#");

      return (
        location.pathname === "/" &&
        location.hash === `#${hash}`
      );
    }

    return (
      location.pathname === path &&
      location.hash === ""
    );
  };

  const isServiceActive = services.some(
    (service) => service.path === location.pathname
  );

  const navScrolledBg = d
    ? "bg-[#050505]/98 backdrop-blur-3xl border-b border-white/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.8)]"
    : "bg-white/95 backdrop-blur-3xl border-b border-gray-200 shadow-[0_1px_20px_rgba(0,0,0,0.08)]";

  const linkCls = (active) => {
    if (active) {
      return d
        ? "text-white bg-white/[0.06]"
        : "text-gray-900 bg-gray-100";
    }

    return d
      ? "text-gray-400 hover:text-white hover:bg-white/[0.04]"
      : "text-gray-500 hover:text-gray-900 hover:bg-gray-100";
  };

  // ======================================================
  // THEME TOGGLE
  // ======================================================

  const ThemeToggle = ({ mobile = false }) => (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        d ? "Switch to light mode" : "Switch to dark mode"
      }
      className={`flex items-center gap-2 rounded-full font-semibold transition-all duration-300 ${
        mobile
          ? "w-full px-4 py-3 justify-between border"
          : "px-3 py-2 text-[11px] border"
      } ${
        d
          ? "bg-white/[0.06] border-white/[0.1] text-gray-300 hover:bg-white/[0.1]"
          : "bg-gray-100 border-gray-200 text-gray-600 hover:bg-gray-200"
      }`}
    >
      {mobile ? (
        <>
          <div className="flex items-center gap-3">
            <div
              className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                d ? "bg-yellow-500/20" : "bg-gray-800/10"
              }`}
            >
              {d ? (
                <Sun size={14} className="text-yellow-400" />
              ) : (
                <Moon size={14} className="text-gray-700" />
              )}
            </div>

            <div className="text-left">
              <p
                className={`text-[13px] font-semibold ${
                  d ? "text-white" : "text-gray-800"
                }`}
              >
                {d ? "Switch to Light" : "Switch to Dark"}
              </p>

              <p className="text-[9px] text-gray-500 mt-0.5">
                {d ? "Bright & minimal" : "Easy on the eyes"}
              </p>
            </div>
          </div>

          <div
            className={`w-10 h-5 rounded-full relative transition-colors duration-300 ${
              d ? "bg-gray-700" : "bg-purple-600"
            }`}
          >
            <div
              className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300 ${
                d ? "left-0.5" : "left-5"
              }`}
            />
          </div>
        </>
      ) : (
        <>
          {d ? (
            <Sun size={13} className="text-yellow-400" />
          ) : (
            <Moon size={13} className="text-gray-600" />
          )}

          <span className="text-[11px] tracking-wide">
            {d ? "Light" : "Dark"}
          </span>
        </>
      )}
    </button>
  );

  return (
    <>
      {/* ==================================================
          MOBILE OVERLAY
      ================================================== */}

      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[9998] md:hidden transition-all duration-300 ${
          isOpen
            ? "visible bg-black/70 opacity-100 backdrop-blur-sm"
            : "invisible opacity-0 pointer-events-none"
        }`}
      />

      {/* ==================================================
          NAVBAR
      ================================================== */}

      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 z-[9999] h-[70px] ${
          scrolled || isOpen
            ? navScrolledBg
            : d
            ? "bg-[#030303]/90 backdrop-blur-xl border-b border-white/[0.04]"
            : "bg-white/90 backdrop-blur-xl border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">

          {/* LOGO */}

          <Link
            to="/"
            aria-label="DevZore home"
            onClick={() => handleLinkClick("/")}
            className="flex items-center leading-none group"
          >
            <img
              src="/logo.png"
              alt="DevZore"
              width="64"
              height="64"
              className="w-[64px] h-[64px] object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
            />

            <div className="flex flex-col leading-none -ml-3">
              <span
                className={`text-[21px] font-extrabold tracking-tight ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Dev<span className="text-purple-500">Zore</span>
              </span>

              <span
                className={`text-[8px] uppercase tracking-[0.2em] mt-1 ${
                  d ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Software Agency
              </span>
            </div>
          </Link>

          {/* ==================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`relative px-3 lg:px-4 py-2 rounded-lg text-[11px] lg:text-[12px] font-semibold uppercase tracking-[0.12em] lg:tracking-[0.15em] transition-all duration-200 ${linkCls(
                      isLinkActive(link.path)
                    )}`}
                  >
                    {isLinkActive(link.path) && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-500" />
                    )}

                    {link.name}
                  </Link>
                </li>
              ))}

              {/* SERVICES DROPDOWN */}

              <li
                className="relative"
                onMouseEnter={() => setServiceOpen(true)}
                onMouseLeave={() => setServiceOpen(false)}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={serviceOpen}
                  aria-controls="desktop-services-menu"
                  onClick={() =>
                    setServiceOpen((current) => !current)
                  }
                  className={`flex items-center gap-1.5 px-3 lg:px-4 py-2 rounded-lg text-[11px] lg:text-[12px] font-semibold uppercase tracking-[0.12em] lg:tracking-[0.15em] transition-all duration-200 ${linkCls(
                    serviceOpen || isServiceActive
                  )}`}
                >
                  Services

                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-300 ${
                      serviceOpen
                        ? "rotate-180 text-purple-500"
                        : ""
                    }`}
                  />
                </button>

                <div
                  id="desktop-services-menu"
                  className={`absolute top-full right-0 pt-3 w-[500px] transition-all duration-200 ${
                    serviceOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div
                    className={`absolute top-[6px] right-16 w-3 h-3 border-l border-t rotate-45 ${
                      d
                        ? "bg-[#0a0a0a] border-white/10"
                        : "bg-white border-gray-200"
                    }`}
                  />

                  <div
                    className={`relative border rounded-2xl shadow-2xl overflow-hidden ${
                      d
                        ? "bg-[#0a0a0a] border-white/[0.1]"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    <div
                      className={`px-5 py-4 border-b flex items-center justify-between ${
                        d
                          ? "border-white/[0.1]"
                          : "border-gray-100"
                      }`}
                    >
                      <div>
                        <p
                          className={`text-[10px] font-black uppercase tracking-[0.3em] ${
                            d
                              ? "text-gray-500"
                              : "text-gray-400"
                          }`}
                        >
                          Our Expertise
                        </p>

                        <p
                          className={`text-sm font-bold mt-1 ${
                            d ? "text-white" : "text-gray-900"
                          }`}
                        >
                          What can we build for you?
                        </p>
                      </div>

                      <Link
                        to="/allservices"
                        onClick={() =>
                          handleLinkClick("/allservices")
                        }
                        className="text-[10px] text-purple-500 hover:text-purple-600 font-bold uppercase tracking-widest flex items-center gap-1"
                      >
                        View all
                        <ArrowRight size={10} />
                      </Link>
                    </div>

                    <div className="p-2 grid grid-cols-2 gap-1 max-h-[58vh] overflow-y-auto">
                      {services
                        .filter(
                          (service) =>
                            service.path !== "/allservices"
                        )
                        .map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            onClick={() =>
                              handleLinkClick(service.path)
                            }
                            className={`group flex items-start gap-3 px-3 py-3 rounded-xl transition-all duration-200 border ${
                              location.pathname === service.path
                                ? d
                                  ? "bg-purple-500/10 border-purple-500/20"
                                  : "bg-purple-50 border-purple-100"
                                : d
                                ? "border-transparent hover:bg-white/[0.05] hover:border-white/[0.06]"
                                : "border-transparent hover:bg-gray-50 hover:border-gray-200"
                            }`}
                          >
                            <div
                              className={`flex-shrink-0 w-8 h-8 rounded-lg border flex items-center justify-center text-purple-500 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all mt-0.5 ${
                                d
                                  ? "bg-white/[0.04] border-white/[0.06]"
                                  : "bg-gray-100 border-gray-200"
                              }`}
                            >
                              {service.icon}
                            </div>

                            <div className="min-w-0">
                              <p
                                className={`text-[12px] lg:text-[13px] font-semibold group-hover:text-purple-500 leading-tight ${
                                  d
                                    ? "text-gray-200"
                                    : "text-gray-700"
                                }`}
                              >
                                {service.name}
                              </p>

                              <p
                                className={`text-[10px] lg:text-[11px] mt-1 leading-tight ${
                                  d
                                    ? "text-gray-500"
                                    : "text-gray-400"
                                }`}
                              >
                                {service.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                    </div>

                    <div
                      className={`px-5 py-4 border-t flex items-center justify-between ${
                        d
                          ? "border-white/[0.06] bg-gradient-to-r from-purple-600/5 to-indigo-600/5"
                          : "border-gray-100 bg-gray-50"
                      }`}
                    >
                      <div>
                        <p
                          className={`text-[11px] ${
                            d
                              ? "text-gray-500"
                              : "text-gray-400"
                          }`}
                        >
                          Not sure what you need?
                        </p>

                        <p
                          className={`text-[12px] font-bold ${
                            d ? "text-white" : "text-gray-900"
                          }`}
                        >
                          Let's figure it out together
                        </p>
                      </div>

                      <Link
                        to="/contact"
                        onClick={() =>
                          handleLinkClick("/contact")
                        }
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-[11px] font-bold rounded-lg transition-colors"
                      >
                        Discuss Project
                        <ArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <ThemeToggle />

            <Link
              to="/contact"
              onClick={() => handleLinkClick("/contact")}
              className={`group flex items-center gap-2 px-5 lg:px-6 py-2.5 text-[10px] lg:text-[11px] font-black uppercase tracking-[0.12em] lg:tracking-[0.15em] rounded-full transition-all duration-300 ${
                d
                  ? "bg-white hover:bg-purple-500 text-black hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                  : "bg-[#111827] hover:bg-purple-600 text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
              }`}
            >
              Start a Project

              <ArrowRight
                size={13}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>

          {/* ==================================================
              MOBILE HAMBURGER
          ================================================== */}

          <div className="md:hidden">
            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(true)}
              className={`w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl transition-all ${
                isOpen
                  ? "opacity-0 pointer-events-none"
                  : "opacity-100"
              }`}
            >
              <span
                className={`w-6 h-0.5 rounded-full ${
                  d ? "bg-white" : "bg-gray-800"
                }`}
              />

              <span className="w-5 h-0.5 bg-purple-500 rounded-full" />

              <span
                className={`w-4 h-0.5 rounded-full ${
                  d ? "bg-white/50" : "bg-gray-400"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ==================================================
          MOBILE SIDEBAR
      ================================================== */}

      <aside
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 bottom-0 w-[88%] max-w-[370px] h-[100dvh] z-[10001] md:hidden flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* BACKGROUND */}

        <div
          className={`absolute inset-0 backdrop-blur-3xl border-l ${
            d
              ? "bg-[#060606]/[0.99] border-white/[0.08]"
              : "bg-white/[0.99] border-gray-200"
          }`}
        />

        {/* ==================================================
            MOBILE HEADER
        ================================================== */}

        <div
          className={`relative z-10 h-[78px] px-4 border-b flex items-center justify-between shrink-0 ${
            d
              ? "border-white/[0.06]"
              : "border-gray-100"
          }`}
        >
          <Link
            to="/"
            onClick={() => handleLinkClick("/")}
            className="flex items-center min-w-0"
          >
            <img
              src="/logo.png"
              alt="DevZore"
              width="52"
              height="52"
              className="w-[52px] h-[52px] object-contain shrink-0"
            />

            <div className="-ml-2 min-w-0">
              <p
                className={`text-[16px] font-black tracking-tight leading-none ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Dev<span className="text-purple-500">Zore</span>
              </p>

              <p
                className={`text-[7px] uppercase tracking-[0.18em] mt-1 ${
                  d ? "text-gray-600" : "text-gray-400"
                }`}
              >
                Software Agency
              </p>
            </div>
          </Link>

          {/* IMPORTANT: CLOSE BUTTON IS INSIDE SIDEBAR */}

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            title="Close menu"
            className={`relative z-20 w-10 h-10 shrink-0 rounded-xl border flex items-center justify-center transition-all duration-200 ${
              d
                ? "bg-white/[0.06] border-white/[0.12] text-white hover:bg-purple-600 hover:border-purple-600"
                : "bg-gray-100 border-gray-200 text-gray-800 hover:bg-purple-600 hover:border-purple-600 hover:text-white"
            }`}
          >
            <X size={20} strokeWidth={2.3} />
          </button>
        </div>

        {/* ==================================================
            MOBILE SCROLLABLE CONTENT
        ================================================== */}

        <div className="relative z-10 flex-1 min-h-0 overflow-y-auto overscroll-contain px-4 py-4">
          {/* NAVIGATION */}

          <div className="mb-4">
            <p
              className={`text-[8px] font-black uppercase tracking-[0.35em] mb-2.5 px-2 ${
                d ? "text-gray-600" : "text-gray-400"
              }`}
            >
              Navigation
            </p>

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl border transition-all duration-200 ${
                    isLinkActive(link.path)
                      ? d
                        ? "bg-purple-600/15 border-purple-500/30 text-white"
                        : "bg-purple-50 border-purple-200 text-purple-700"
                      : d
                      ? "text-gray-400 hover:text-white hover:bg-white/[0.04] border-transparent"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 border-transparent"
                  }`}
                >
                  <span className="text-[13px] font-semibold">
                    {link.name}
                  </span>

                  {isLinkActive(link.path) ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  ) : (
                    <ArrowRight
                      size={13}
                      className={
                        d ? "text-gray-600" : "text-gray-400"
                      }
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* THEME */}

          <div className="mb-4">
            <ThemeToggle mobile />
          </div>

          {/* ==================================================
              MOBILE SERVICES
          ================================================== */}

          <div>
            <button
              type="button"
              onClick={() =>
                setMobileServiceOpen(
                  (current) => !current
                )
              }
              aria-expanded={mobileServiceOpen}
              aria-controls="mobile-services-menu"
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all ${
                d
                  ? "border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04]"
                  : "border-gray-200 bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-purple-600/20 flex items-center justify-center">
                  <LayoutGrid
                    size={14}
                    className="text-purple-500"
                  />
                </div>

                <div className="text-left">
                  <p
                    className={`text-[13px] font-semibold ${
                      d ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Our Services
                  </p>

                  <p
                    className={`text-[9px] mt-0.5 ${
                      d ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {services.length - 1} services available
                  </p>
                </div>
              </div>

              <ChevronDown
                size={15}
                className={`transition-transform duration-300 ${
                  mobileServiceOpen
                    ? "rotate-180 text-purple-500"
                    : d
                    ? "text-gray-500"
                    : "text-gray-400"
                }`}
              />
            </button>

            <div
              id="mobile-services-menu"
              className={`overflow-hidden transition-all duration-300 ${
                mobileServiceOpen
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col gap-0.5 pt-2">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() =>
                      handleLinkClick(service.path)
                    }
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group ${
                      location.pathname === service.path
                        ? d
                          ? "bg-purple-600/10 text-purple-400"
                          : "bg-purple-50 text-purple-700"
                        : d
                        ? "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-purple-500/80 group-hover:text-purple-500 transition-colors">
                      {service.icon}
                    </span>

                    <span className="text-[12px] font-medium">
                      {service.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================
            MOBILE CTA - ALWAYS AT BOTTOM
        ================================================== */}

        <div
          className={`relative z-10 shrink-0 px-4 pt-3 pb-[max(14px,env(safe-area-inset-bottom))] border-t space-y-2 ${
            d
              ? "border-white/[0.06] bg-[#060606]"
              : "border-gray-100 bg-white"
          }`}
        >
          <Link
            to="/contact"
            onClick={() => handleLinkClick("/contact")}
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl font-bold text-[11px] uppercase tracking-widest hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all"
          >
            <Mail size={13} />
            Start a Project
          </Link>

          <a
            href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-[#25D366]/20 transition-all"
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z" />
            </svg>

            WhatsApp Us
          </a>

          <p
            className={`text-[8px] text-center uppercase tracking-[0.15em] ${
              d ? "text-gray-700" : "text-gray-400"
            }`}
          >
            DevZore · Software Development Agency
          </p>
        </div>
      </aside>
    </>
  );
};

export default Navbar;