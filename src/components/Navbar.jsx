import React, { useEffect, useRef, useState } from "react";
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
  Sparkles,
  Building2,
  Store,
  Boxes,
  Code2,
  BookOpen,
  Newspaper,
  CircleHelp,
  Users,
  Workflow,
  Cpu,
  FolderKanban,
  Layers3,
  Languages,
} from "lucide-react";

const Navbar = ({ isDark, toggleTheme }) => {
  const d = isDark;
  const location = useLocation();
  const navRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [desktopMenu, setDesktopMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(null);

  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  // ======================================================
  // LANGUAGES
  // ======================================================

  const languages = [
    { name: "English", code: "EN" },
    { name: "Français", code: "FR" },
    { name: "Español", code: "ES" },
  ];

  // ======================================================
  // SERVICES
  // ======================================================

  const services = [
    {
      name: "All Services",
      icon: <LayoutGrid size={14} />,
      path: "/allservices",
      desc: "Browse all DevZore services",
    },
    {
      name: "Web Development",
      icon: <Globe size={14} />,
      path: "/web-development",
      desc: "React, Next.js & modern web apps",
    },
    {
      name: "Mobile App Development",
      icon: <Smartphone size={14} />,
      path: "/mobile-apps",
      desc: "Modern mobile applications",
    },
    {
      name: "Generative AI Development",
      icon: <Sparkles size={14} />,
      path: "/generative-ai-development",
      desc: "LLM apps, RAG, AI agents & chatbots",
    },
    {
      name: "E-Commerce Development",
      icon: <ShoppingCart size={14} />,
      path: "/ecommerce",
      desc: "Custom online stores",
    },
    {
      name: "MERN Stack Development",
      icon: <Rocket size={14} />,
      path: "/mern-stack-development",
      desc: "MongoDB, Express, React & Node.js",
    },
    {
      name: "React Development",
      icon: <Zap size={14} />,
      path: "/reactdevelopment",
      desc: "Modern React applications",
    },
    {
      name: "Backend & API Development",
      icon: <Settings size={14} />,
      path: "/backend-api",
      desc: "Node.js, Express & REST APIs",
    },
    {
      name: "SaaS Product Development",
      icon: <Cloud size={14} />,
      path: "/saas-product-development",
      desc: "Scalable SaaS products",
    },
    {
      name: "UI/UX Design",
      icon: <Palette size={14} />,
      path: "/ui-ux-design",
      desc: "User-focused product design",
    },
    {
      name: "Startup MVP Development",
      icon: <Lightbulb size={14} />,
      path: "/startup-mvp",
      desc: "Turn your idea into an MVP",
    },
    {
      name: "SEO Services",
      icon: <SearchCheck size={14} />,
      path: "/seo-services",
      desc: "Technical & on-page SEO",
    },
    {
      name: "Digital Marketing",
      icon: <Megaphone size={14} />,
      path: "/digital-marketing",
      desc: "Digital marketing & online growth",
    },
    {
      name: "Maintenance & Support",
      icon: <Wrench size={14} />,
      path: "/maintenance",
      desc: "Website maintenance & support",
    },
  ];

  // ======================================================
  // SOLUTIONS
  // ======================================================

  const solutions = [
    {
      name: "Startup Solutions",
      icon: <Rocket size={14} />,
      path: "/startup-solutions",
      desc: "MVPs and digital products for startups",
    },
    {
      name: "Business Solutions",
      icon: <Building2 size={14} />,
      path: "/business-solutions",
      desc: "Custom software for businesses",
    },
    {
      name: "E-Commerce Solutions",
      icon: <Store size={14} />,
      path: "/ecommerce-solutions",
      desc: "Online selling & commerce solutions",
    },
    {
      name: "SaaS Solutions",
      icon: <Cloud size={14} />,
      path: "/saas-solutions",
      desc: "Scalable subscription software",
    },
    {
      name: "Management Systems",
      icon: <Boxes size={14} />,
      path: "/management-systems",
      desc: "Business management platforms",
    },
    {
      name: "Custom Software Solutions",
      icon: <Code2 size={14} />,
      path: "/custom-software-solutions",
      desc: "Software tailored to your workflow",
    },
  ];

  // ======================================================
  // RESOURCES
  // ======================================================

  const resources = [
    {
      name: "Blog",
      icon: <Newspaper size={14} />,
      path: "/blog",
      desc: "Development, business & technology",
    },
    {
      name: "Development Guides",
      icon: <BookOpen size={14} />,
      path: "/guides",
      desc: "Practical software development guides",
    },
    {
      name: "FAQs",
      icon: <CircleHelp size={14} />,
      path: "/faqs",
      desc: "Frequently asked questions",
    },
    {
      name: "Insights & Resources",
      icon: <Lightbulb size={14} />,
      path: "/resources",
      desc: "Insights for digital products",
    },
  ];

  // ======================================================
  // COMPANY
  // ======================================================

  const company = [
    {
      name: "About DevZore",
      icon: <Users size={14} />,
      path: "/about",
      desc: "Learn more about DevZore",
    },
    {
      name: "Our Process",
      icon: <Workflow size={14} />,
      path: "/our-process",
      desc: "How we plan, build & deliver",
    },
    {
      name: "Technologies",
      icon: <Cpu size={14} />,
      path: "/technologies",
      desc: "Our development technology stack",
    },
    {
      name: "Contact",
      icon: <Mail size={14} />,
      path: "/contact",
      desc: "Discuss your project with us",
    },
  ];

  // ======================================================
  // SCROLL
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
  // ROUTE CHANGE
  // ======================================================

  useEffect(() => {
    setIsOpen(false);
    setDesktopMenu(null);
    setMobileMenu(null);
    setLanguageOpen(false);
  }, [location.pathname, location.hash]);

  // ======================================================
  // BODY LOCK
  // ======================================================

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ======================================================
  // ESCAPE
  // ======================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setDesktopMenu(null);
        setMobileMenu(null);
        setLanguageOpen(false);
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
    setDesktopMenu(null);
    setMobileMenu(null);
    setLanguageOpen(false);

    if (!path.includes("#")) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const isGroupActive = (items) =>
    items.some((item) => item.path === location.pathname);

  const navScrolledBg = d
    ? "bg-[#050505]/98 backdrop-blur-3xl border-b border-white/[0.06] shadow-[0_1px_35px_rgba(0,0,0,0.75)]"
    : "bg-white/95 backdrop-blur-3xl border-b border-gray-200 shadow-[0_1px_18px_rgba(0,0,0,0.07)]";

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
      aria-label={d ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex items-center rounded-full font-semibold transition-all duration-300 ${
        mobile
          ? "w-full px-4 py-2.5 justify-between border"
          : "gap-1.5 px-2.5 py-1.5 border text-[10px]"
      } ${
        d
          ? "bg-white/[0.05] border-white/[0.09] text-gray-300 hover:bg-white/[0.09]"
          : "bg-gray-100 border-gray-200 text-gray-600 hover:bg-gray-200"
      }`}
    >
      {mobile ? (
        <>
          <div className="flex items-center gap-3">
            <div
              className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                d ? "bg-yellow-500/15" : "bg-gray-800/10"
              }`}
            >
              {d ? (
                <Sun size={13} className="text-yellow-400" />
              ) : (
                <Moon size={13} className="text-gray-700" />
              )}
            </div>

            <div className="text-left">
              <p
                className={`text-[12px] font-semibold ${
                  d ? "text-white" : "text-gray-800"
                }`}
              >
                {d ? "Light Mode" : "Dark Mode"}
              </p>

              <p className="text-[9px] text-gray-500">
                Change website appearance
              </p>
            </div>
          </div>

          <div
            className={`w-9 h-[18px] rounded-full relative ${
              d ? "bg-gray-700" : "bg-purple-600"
            }`}
          >
            <div
              className={`absolute top-[2px] w-[14px] h-[14px] rounded-full bg-white transition-all ${
                d ? "left-[2px]" : "left-[20px]"
              }`}
            />
          </div>
        </>
      ) : (
        <>
          {d ? (
            <Sun size={12} className="text-yellow-400" />
          ) : (
            <Moon size={12} className="text-gray-600" />
          )}

          <span>{d ? "Light" : "Dark"}</span>
        </>
      )}
    </button>
  );

  // ======================================================
  // LANGUAGE SELECTOR
  // ======================================================

  const LanguageSelector = ({ mobile = false }) => {
    if (mobile) {
      return (
        <div className="relative">
          <button
            type="button"
            onClick={() => setLanguageOpen((current) => !current)}
            aria-expanded={languageOpen}
            className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl border transition-all ${
              d
                ? "bg-white/[0.02] border-white/[0.06] text-gray-300"
                : "bg-gray-50 border-gray-200 text-gray-700"
            }`}
          >
            <div className="flex items-center gap-3">
              <Languages size={15} className="text-purple-500" />

              <div className="text-left">
                <p className="text-[12px] font-semibold">
                  Language
                </p>

                <p className="text-[9px] text-gray-500">
                  {
                    languages.find(
                      (lang) => lang.code === selectedLanguage
                    )?.name
                  }
                </p>
              </div>
            </div>

            <ChevronDown
              size={14}
              className={`transition-transform ${
                languageOpen ? "rotate-180 text-purple-500" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              languageOpen
                ? "max-h-[180px] opacity-100 mt-1.5"
                : "max-h-0 opacity-0"
            }`}
          >
            <div
              className={`rounded-xl border p-1 ${
                d
                  ? "bg-white/[0.02] border-white/[0.06]"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              {languages.map((language) => (
                <button
                  type="button"
                  key={language.code}
                  onClick={() => {
                    setSelectedLanguage(language.code);
                    setLanguageOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-[11px] transition-all ${
                    selectedLanguage === language.code
                      ? d
                        ? "bg-purple-600/15 text-purple-400"
                        : "bg-purple-50 text-purple-700"
                      : d
                      ? "text-gray-400 hover:bg-white/[0.04]"
                      : "text-gray-600 hover:bg-white"
                  }`}
                >
                  <span>{language.name}</span>

                  <span className="text-[9px] opacity-60">
                    {language.code}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="relative">
        <button
          type="button"
          onClick={() => {
            setLanguageOpen((current) => !current);
            setDesktopMenu(null);
          }}
          aria-label="Select language"
          aria-expanded={languageOpen}
          className={`h-[30px] px-2.5 flex items-center gap-1.5 rounded-full border text-[10px] font-semibold transition-all ${
            languageOpen
              ? "border-purple-500/40"
              : d
              ? "border-white/[0.09]"
              : "border-gray-200"
          } ${
            d
              ? "bg-white/[0.05] text-gray-300 hover:bg-white/[0.09]"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          <Globe size={11} />

          <span>{selectedLanguage}</span>

          <ChevronDown
            size={10}
            className={`transition-transform duration-200 ${
              languageOpen ? "rotate-180 text-purple-500" : ""
            }`}
          />
        </button>

        <div
          className={`absolute right-0 top-full pt-2 w-[160px] transition-all duration-200 ${
            languageOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-1 pointer-events-none"
          }`}
        >
          <div
            className={`p-1.5 rounded-xl border shadow-xl ${
              d
                ? "bg-[#0a0a0a] border-white/[0.1]"
                : "bg-white border-gray-200"
            }`}
          >
            {languages.map((language) => {
              const active = selectedLanguage === language.code;

              return (
                <button
                  type="button"
                  key={language.code}
                  onClick={() => {
                    setSelectedLanguage(language.code);
                    setLanguageOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-all ${
                    active
                      ? d
                        ? "bg-white/[0.06]"
                        : "bg-gray-100"
                      : d
                      ? "hover:bg-white/[0.04]"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <span
                    className={`text-[11px] font-medium ${
                      d ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {language.name}
                  </span>

                  <span
                    className={`text-[9px] ${
                      active
                        ? "text-purple-500 font-bold"
                        : "text-gray-400"
                    }`}
                  >
                    {language.code}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // ======================================================
  // DESKTOP DROPDOWN
  // ======================================================

  const DesktopDropdown = ({
    id,
    label,
    items,
    width = "w-[380px]",
  }) => {
    const open = desktopMenu === id;
    const active = isGroupActive(items);
    const isServices = id === "services";

    return (
      <li
        className="relative"
        onMouseEnter={() => {
          setDesktopMenu(id);
          setLanguageOpen(false);
        }}
        onMouseLeave={() => setDesktopMenu(null)}
      >
        <button
          type="button"
          onClick={() => {
            setDesktopMenu((current) =>
              current === id ? null : id
            );
            setLanguageOpen(false);
          }}
          aria-expanded={open}
          aria-haspopup="true"
          className={`flex items-center gap-1 px-2 lg:px-2.5 py-1.5 rounded-lg text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.07em] lg:tracking-[0.09em] transition-all ${linkCls(
            open || active
          )}`}
        >
          {label}

          <ChevronDown
            size={11}
            className={`transition-transform duration-200 ${
              open ? "rotate-180 text-purple-500" : ""
            }`}
          />
        </button>

        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 ${width} transition-all duration-200 ${
            open
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-1 pointer-events-none"
          }`}
        >
          <div
            className={`border rounded-xl shadow-2xl overflow-hidden ${
              d
                ? "bg-[#0a0a0a] border-white/[0.1]"
                : "bg-white border-gray-200"
            }`}
          >
            {/* HEADER */}

            <div
              className={`px-3.5 py-2.5 border-b flex items-center justify-between ${
                d ? "border-white/[0.07]" : "border-gray-100"
              }`}
            >
              <div>
                <p className="text-[7px] font-black uppercase tracking-[0.25em] text-purple-500">
                  {label}
                </p>

                <p
                  className={`text-[11px] font-bold mt-0.5 ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  {label === "Services"
                    ? "What can we build for you?"
                    : label === "Solutions"
                    ? "Solutions for your business"
                    : label === "Resources"
                    ? "Learn, explore & discover"
                    : "Learn more about DevZore"}
                </p>
              </div>

              {isServices && (
                <Link
                  to="/allservices"
                  onClick={() => handleLinkClick("/allservices")}
                  className="text-[8px] font-bold text-purple-500 flex items-center gap-1"
                >
                  View All
                  <ArrowRight size={9} />
                </Link>
              )}
            </div>

            {/* ITEMS */}

            <div
              className={`p-1.5 grid ${
                items.length > 4 ? "grid-cols-2" : "grid-cols-1"
              } gap-0.5 ${
                isServices
                  ? "max-h-[355px] overflow-y-auto"
                  : "max-h-[330px] overflow-y-auto"
              }`}
            >
              {items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => handleLinkClick(item.path)}
                  className={`group flex items-center gap-2 px-2 py-[7px] rounded-lg border transition-all ${
                    location.pathname === item.path
                      ? d
                        ? "bg-purple-500/10 border-purple-500/20"
                        : "bg-purple-50 border-purple-100"
                      : d
                      ? "border-transparent hover:bg-white/[0.05]"
                      : "border-transparent hover:bg-gray-50"
                  }`}
                >
                  <div
                    className={`shrink-0 w-[26px] h-[26px] rounded-md border flex items-center justify-center text-purple-500 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all ${
                      d
                        ? "bg-white/[0.04] border-white/[0.06]"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <p
                      className={`text-[10px] font-semibold leading-tight truncate group-hover:text-purple-500 ${
                        d ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </p>

                    <p
                      className={`text-[8px] mt-[2px] leading-tight truncate ${
                        d ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* FOOTER */}

            {isServices && (
              <div
                className={`px-3.5 py-2 border-t flex items-center justify-between ${
                  d
                    ? "border-white/[0.06] bg-purple-600/[0.03]"
                    : "border-gray-100 bg-gray-50/80"
                }`}
              >
                <Link
                  to="/allservices"
                  onClick={() => handleLinkClick("/allservices")}
                  className="text-[8px] font-bold text-purple-500 flex items-center gap-1"
                >
                  View All Services
                  <ArrowRight size={8} />
                </Link>

                <Link
                  to="/contact"
                  onClick={() => handleLinkClick("/contact")}
                  className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-[8px] font-bold"
                >
                  Discuss Project
                </Link>
              </div>
            )}
          </div>
        </div>
      </li>
    );
  };

  // ======================================================
  // MOBILE GROUP
  // ======================================================

  const MobileGroup = ({ id, title, icon, items }) => {
    const open = mobileMenu === id;

    return (
      <div>
        <button
          type="button"
          onClick={() =>
            setMobileMenu((current) =>
              current === id ? null : id
            )
          }
          aria-expanded={open}
          className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl border transition-all ${
            d
              ? "border-white/[0.06] bg-white/[0.02]"
              : "border-gray-200 bg-gray-50"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-purple-600/15 text-purple-500 flex items-center justify-center">
              {icon}
            </div>

            <span
              className={`text-[12px] font-semibold ${
                d ? "text-white" : "text-gray-800"
              }`}
            >
              {title}
            </span>
          </div>

          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${
              open
                ? "rotate-180 text-purple-500"
                : "text-gray-500"
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            open
              ? "max-h-[1600px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-1 pb-1 pl-2 flex flex-col gap-0.5">
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleLinkClick(item.path)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                  location.pathname === item.path
                    ? d
                      ? "bg-purple-600/10 text-purple-400"
                      : "bg-purple-50 text-purple-700"
                    : d
                    ? "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <span className="text-purple-500">
                  {item.icon}
                </span>

                <span className="text-[11px] font-medium">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

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
        ref={navRef}
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 w-full z-[9999] h-[66px] transition-all duration-300 ${
          scrolled || isOpen
            ? navScrolledBg
            : d
            ? "bg-[#030303]/90 backdrop-blur-xl border-b border-white/[0.04]"
            : "bg-white/90 backdrop-blur-xl border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-5 h-full flex items-center justify-between">

          {/* LOGO */}

          <Link
            to="/"
            onClick={() => handleLinkClick("/")}
            aria-label="DevZore home"
            className="flex items-center leading-none group shrink-0"
          >
            <img
              src="/logo.png"
              alt="DevZore"
              width="58"
              height="58"
              className="w-[58px] h-[58px] object-contain transition-transform group-hover:scale-105"
            />

            <div className="flex flex-col leading-none -ml-3">
              <span
                className={`text-[19px] font-extrabold tracking-tight ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Dev<span className="text-purple-500">Zore</span>
              </span>

              <span
                className={`text-[7px] uppercase tracking-[0.18em] mt-1 ${
                  d ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Software Agency
              </span>
            </div>
          </Link>

          {/* ==================================================
              DESKTOP
          ================================================== */}

          <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
            <ul className="flex items-center gap-0">

              {/* HOME */}

              <li>
                <Link
                  to="/"
                  onClick={() => handleLinkClick("/")}
                  className={`px-2 lg:px-2.5 py-1.5 rounded-lg text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.07em] lg:tracking-[0.09em] transition-all ${linkCls(
                    location.pathname === "/" &&
                      location.hash === ""
                  )}`}
                >
                  Home
                </Link>
              </li>

              {/* SERVICES */}

              <DesktopDropdown
                id="services"
                label="Services"
                items={services.filter(
                  (item) => item.path !== "/allservices"
                )}
                width="w-[455px]"
              />

              {/* SOLUTIONS */}

              <DesktopDropdown
                id="solutions"
                label="Solutions"
                items={solutions}
                width="w-[400px]"
              />

              {/* PORTFOLIO */}

              <li>
                <Link
                  to="/#projects"
                  onClick={() => handleLinkClick("/#projects")}
                  className={`px-2 lg:px-2.5 py-1.5 rounded-lg text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.07em] lg:tracking-[0.09em] transition-all ${linkCls(
                    location.pathname === "/" &&
                      location.hash === "#projects"
                  )}`}
                >
                  Portfolio
                </Link>
              </li>

              {/* RESOURCES */}

              <DesktopDropdown
                id="resources"
                label="Resources"
                items={resources}
                width="w-[315px]"
              />

              {/* COMPANY */}

              <DesktopDropdown
                id="company"
                label="Company"
                items={company}
                width="w-[315px]"
              />
            </ul>

            {/* LANGUAGE */}

            <LanguageSelector />

            {/* DARK / LIGHT */}

            <ThemeToggle />

            {/* CTA */}

            <Link
              to="/contact"
              onClick={() => handleLinkClick("/contact")}
              className={`group flex items-center gap-1.5 px-3.5 lg:px-4 py-2 text-[8px] lg:text-[9px] font-black uppercase tracking-[0.08em] rounded-full whitespace-nowrap transition-all ${
                d
                  ? "bg-white hover:bg-purple-500 text-black hover:text-white"
                  : "bg-[#111827] hover:bg-purple-600 text-white"
              }`}
            >
              Start a Project

              <ArrowRight
                size={11}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
            className={`md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-xl ${
              isOpen ? "opacity-0 pointer-events-none" : ""
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
      </nav>

      {/* ==================================================
          MOBILE SIDEBAR
      ================================================== */}

      <aside
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 bottom-0 w-[88%] max-w-[360px] h-[100dvh] z-[10001] md:hidden flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className={`absolute inset-0 border-l ${
            d
              ? "bg-[#060606] border-white/[0.08]"
              : "bg-white border-gray-200"
          }`}
        />

        {/* MOBILE HEADER */}

        <div
          className={`relative z-10 h-[68px] px-4 border-b flex items-center justify-between shrink-0 ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <Link
            to="/"
            onClick={() => handleLinkClick("/")}
            className="flex items-center"
          >
            <img
              src="/logo.png"
              alt="DevZore"
              width="48"
              height="48"
              className="w-[48px] h-[48px] object-contain"
            />

            <div className="-ml-2">
              <p
                className={`text-[15px] font-black ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Dev<span className="text-purple-500">Zore</span>
              </p>

              <p className="text-[7px] uppercase tracking-[0.16em] text-gray-500">
                Software Agency
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all ${
              d
                ? "bg-white/[0.06] border-white/[0.12] text-white hover:bg-purple-600"
                : "bg-gray-100 border-gray-200 text-gray-800 hover:bg-purple-600 hover:text-white"
            }`}
          >
            <X size={18} />
          </button>
        </div>

        {/* MOBILE CONTENT */}

        <div className="relative z-10 flex-1 min-h-0 overflow-y-auto overscroll-contain px-4 py-3">

          {/* HOME */}

          <Link
            to="/"
            onClick={() => handleLinkClick("/")}
            className={`flex items-center justify-between px-4 py-2.5 rounded-xl mb-1.5 ${
              location.pathname === "/" &&
              location.hash === ""
                ? d
                  ? "bg-purple-600/15 text-white"
                  : "bg-purple-50 text-purple-700"
                : d
                ? "text-gray-400 hover:bg-white/[0.04]"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span className="text-[12px] font-semibold">
              Home
            </span>

            <ArrowRight size={12} />
          </Link>

          <div className="space-y-1.5">
            <MobileGroup
              id="services"
              title="Services"
              icon={<LayoutGrid size={14} />}
              items={services}
            />

            <MobileGroup
              id="solutions"
              title="Solutions"
              icon={<Layers3 size={14} />}
              items={solutions}
            />

            {/* PORTFOLIO */}

            <Link
              to="/#projects"
              onClick={() => handleLinkClick("/#projects")}
              className={`flex items-center justify-between px-4 py-2.5 rounded-xl border ${
                d
                  ? "border-white/[0.06] bg-white/[0.02] text-gray-300"
                  : "border-gray-200 bg-gray-50 text-gray-700"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-purple-600/15 text-purple-500 flex items-center justify-center">
                  <FolderKanban size={14} />
                </div>

                <span className="text-[12px] font-semibold">
                  Portfolio
                </span>
              </div>

              <ArrowRight size={12} />
            </Link>

            <MobileGroup
              id="resources"
              title="Resources"
              icon={<BookOpen size={14} />}
              items={resources}
            />

            <MobileGroup
              id="company"
              title="Company"
              icon={<Building2 size={14} />}
              items={company}
            />
          </div>

          {/* LANGUAGE */}

          <div className="mt-2">
            <LanguageSelector mobile />
          </div>

          {/* THEME */}

          <div className="mt-2">
            <ThemeToggle mobile />
          </div>
        </div>

        {/* ==================================================
            MOBILE BOTTOM CTA
        ================================================== */}

        <div
          className={`relative z-10 shrink-0 px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] border-t space-y-2 ${
            d
              ? "border-white/[0.06] bg-[#060606]"
              : "border-gray-100 bg-white"
          }`}
        >
          <Link
            to="/contact"
            onClick={() => handleLinkClick("/contact")}
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest"
          >
            <Mail size={12} />
            Start a Project
          </Link>

          <a
            href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-[#25D366]/20 transition-all"
          >
            WhatsApp Us
          </a>

          <p
            className={`text-[7px] text-center uppercase tracking-[0.14em] ${
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