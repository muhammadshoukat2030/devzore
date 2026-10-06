import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Globe,
  ChevronDown,
  X,
  ArrowUpRight,
  ArrowRight,
  Menu,
} from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [scrolled, setScrolled] = useState(false);

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
      name: "Generative AI Development",
      path: "/generative-ai-development",
    },
    {
      name: "Web Development",
      path: "/web-development",
    },
    {
      name: "Mobile App Development",
      path: "/mobile-apps",
    },
    {
      name: "SaaS Product Development",
      path: "/saas-product-development",
    },
    {
      name: "MERN Stack Development",
      path: "/mern-stack-development",
    },
    {
      name: "E-Commerce Development",
      path: "/ecommerce",
    },
    {
      name: "React Development",
      path: "/reactdevelopment",
    },
    {
      name: "Backend & API Development",
      path: "/backend-api",
    },
    {
      name: "UI/UX Design",
      path: "/ui-ux-design",
    },
    {
      name: "Startup MVP Development",
      path: "/startup-mvp",
    },
    {
      name: "SEO Services",
      path: "/seo-services",
    },
    {
      name: "Digital Marketing",
      path: "/digital-marketing",
    },
    {
      name: "Maintenance & Support",
      path: "/maintenance",
    },
    {
      name: "All Services",
      path: "/allservices",
    },
  ];

  // ======================================================
  // SOLUTIONS
  // ======================================================

  const solutions = [
    {
      name: "Startup Solutions",
      path: "/startup-solutions",
    },
    {
      name: "Business Solutions",
      path: "/business-solutions",
    },
    {
      name: "E-Commerce Solutions",
      path: "/ecommerce-solutions",
    },
    {
      name: "SaaS Solutions",
      path: "/saas-solutions",
    },
    {
      name: "Management Systems",
      path: "/management-systems",
    },
    {
      name: "Custom Software Solutions",
      path: "/custom-software-solutions",
    },
  ];

  // ======================================================
  // RESOURCES
  // ======================================================

  const resources = [
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Development Guides",
      path: "/guides",
    },
    {
      name: "FAQs",
      path: "/faqs",
    },
    {
      name: "Insights & Resources",
      path: "/resources",
    },
  ];

  // ======================================================
  // COMPANY
  // ======================================================

  const company = [
    {
      name: "About DevZore",
      path: "/about",
    },
    {
      name: "Our Process",
      path: "/our-process",
    },
    {
      name: "Technologies",
      path: "/technologies",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];

  // ======================================================
  // SCROLL
  // ======================================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
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
  // ESCAPE KEY
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

  // ======================================================
  // DESKTOP NAV LINK
  // ======================================================

  const navLinkClass = (active) => `
    relative
    h-[72px]
    flex
    items-center
    gap-1.5
    px-2.5
    xl:px-3
    text-[13px]
    xl:text-[14px]
    font-medium
    whitespace-nowrap
    transition-colors
    duration-200
    ${
      active
        ? "text-white"
        : "text-[#C4D0D5] hover:text-white"
    }
  `;

  // ======================================================
  // LANGUAGE SELECTOR
  // ======================================================

  const LanguageSelector = ({ mobile = false }) => {
    if (mobile) {
      return (
        <div className="border-t border-white/[0.08] pt-3 mt-3">
          <button
            type="button"
            onClick={() =>
              setLanguageOpen((current) => !current)
            }
            className="
              w-full
              flex
              items-center
              justify-between
              py-3
              text-white
            "
          >
            <div className="flex items-center gap-3">
              <Globe size={16} />

              <span className="text-[13px] font-medium">
                Language
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[12px] text-[#A8BAC1]">
                {selectedLanguage}
              </span>

              <ChevronDown
                size={14}
                className={`transition-transform ${
                  languageOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              languageOpen
                ? "max-h-[150px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                onClick={() => {
                  setSelectedLanguage(language.code);
                  setLanguageOpen(false);
                }}
                className={`
                  w-full
                  flex
                  items-center
                  justify-between
                  py-2
                  pl-7
                  text-[12px]
                  ${
                    selectedLanguage === language.code
                      ? "text-[#19C3C8]"
                      : "text-[#A8BAC1]"
                  }
                `}
              >
                <span>{language.name}</span>
                <span>{language.code}</span>
              </button>
            ))}
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
          aria-expanded={languageOpen}
          className="
            h-[42px]
            flex
            items-center
            gap-2
            px-3
            rounded-[10px]
            border
            border-white/[0.18]
            text-[#D6E0E4]
            hover:text-white
            hover:border-white/[0.30]
            transition-all
          "
        >
          <Globe size={15} />

          <span className="text-[13px] font-medium">
            {selectedLanguage}
          </span>

          <ChevronDown
            size={12}
            className={`transition-transform ${
              languageOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`
            absolute
            right-0
            top-full
            pt-2
            w-[160px]
            transition-all
            duration-200
            ${
              languageOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-1 pointer-events-none"
            }
          `}
        >
          <div
            className="
              bg-white
              rounded-[12px]
              border
              border-[#E1E7E9]
              shadow-[0_18px_50px_rgba(0,0,0,0.16)]
              py-1.5
            "
          >
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                onClick={() => {
                  setSelectedLanguage(language.code);
                  setLanguageOpen(false);
                }}
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  px-4
                  py-2.5
                  text-[#263A44]
                  hover:text-[#079EA5]
                  transition-colors
                "
              >
                <span className="text-[12px] font-medium">
                  {language.name}
                </span>

                <span className="text-[10px] text-[#8B9BA2]">
                  {language.code}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // ======================================================
  // DESKTOP DROPDOWN
  // COMPACT DEVSINC STYLE
  // ======================================================

  const DesktopDropdown = ({
    id,
    label,
    items,
    width = "w-[500px]",
  }) => {
    const open = desktopMenu === id;
    const active = isGroupActive(items);

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
          className={navLinkClass(open || active)}
        >
          {label}

          <ChevronDown
            size={13}
            strokeWidth={2}
            className={`transition-transform duration-200 ${
              open
                ? "rotate-180 text-[#19C3C8]"
                : "text-[#94A7AF]"
            }`}
          />

          {(open || active) && (
            <span
              className="
                absolute
                bottom-0
                left-2.5
                right-2.5
                h-[2px]
                bg-[#19C3C8]
              "
            />
          )}
        </button>

        {/* DROPDOWN */}

        <div
          className={`
            absolute
            top-full
            left-1/2
            -translate-x-1/2
            pt-2.5
            ${width}
            transition-all
            duration-200
            ${
              open
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-1 pointer-events-none"
            }
          `}
        >
          <div
            className="
              bg-white
              border
              border-[#E0E6E8]
              rounded-[15px]
              shadow-[0_18px_55px_rgba(0,0,0,0.15)]
              px-4
              py-3
            "
          >
            <div
              className={`
                grid
                ${
                  items.length > 4
                    ? "grid-cols-2"
                    : "grid-cols-1"
                }
                gap-x-7
              `}
            >
              {items.map((item) => {
                const itemActive =
                  location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() =>
                      handleLinkClick(item.path)
                    }
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      gap-3
                      min-h-[42px]
                      py-1.5
                      transition-colors
                    "
                  >
                    <span
                      className={`
                        text-[13px]
                        font-medium
                        leading-[1.25]
                        transition-colors
                        ${
                          itemActive
                            ? "text-[#079EA5]"
                            : "text-[#172B35] group-hover:text-[#079EA5]"
                        }
                      `}
                    >
                      {item.name}
                    </span>

                    <ArrowUpRight
                      size={12}
                      strokeWidth={1.6}
                      className="
                        shrink-0
                        text-[#A5B4BA]
                        transition-all
                        duration-200
                        group-hover:text-[#079EA5]
                        group-hover:translate-x-[1px]
                        group-hover:-translate-y-[1px]
                      "
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </li>
    );
  };

  // ======================================================
  // MOBILE GROUP
  // ======================================================

  const MobileGroup = ({ id, title, items }) => {
    const open = mobileMenu === id;

    return (
      <div className="border-b border-white/[0.08]">
        <button
          type="button"
          onClick={() =>
            setMobileMenu((current) =>
              current === id ? null : id
            )
          }
          className="
            w-full
            flex
            items-center
            justify-between
            py-3.5
            text-white
          "
        >
          <span className="text-[14px] font-medium">
            {title}
          </span>

          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${
              open
                ? "rotate-180 text-[#19C3C8]"
                : "text-[#91A5AE]"
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            open
              ? "max-h-[1200px] opacity-100 pb-2"
              : "max-h-0 opacity-0"
          }`}
        >
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => handleLinkClick(item.path)}
              className="
                flex
                items-center
                justify-between
                gap-3
                py-2
                pl-3
                text-[#AFC0C7]
                hover:text-[#19C3C8]
                transition-colors
              "
            >
              <span
                className={`text-[12px] font-medium ${
                  location.pathname === item.path
                    ? "text-[#19C3C8]"
                    : ""
                }`}
              >
                {item.name}
              </span>

              <ArrowUpRight
                size={11}
                className="text-[#70868F]"
              />
            </Link>
          ))}
        </div>
      </div>
    );
  };

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <>
      {/* MOBILE OVERLAY */}

      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[9998] md:hidden transition-all duration-300 ${
          isOpen
            ? "visible opacity-100 bg-black/65 backdrop-blur-[2px]"
            : "invisible opacity-0 pointer-events-none"
        }`}
      />

      {/* ==================================================
          NAVBAR
      ================================================== */}

      <nav
        aria-label="Main navigation"
        className={`
          fixed
          top-0
          left-0
          right-0
          z-[9999]
          w-full
          h-[72px]
          border-b
          transition-all
          duration-300
          ${
            scrolled
              ? "bg-[#071923]/[0.98] border-white/[0.08] shadow-[0_6px_30px_rgba(0,0,0,0.20)] backdrop-blur-xl"
              : "bg-[#071923] border-white/[0.06]"
          }
        `}
      >
        <div
          className="
            max-w-[1500px]
            mx-auto
            h-full
            px-5
            sm:px-6
            lg:px-8
            flex
            items-center
            justify-between
            gap-5
          "
        >
          {/* LOGO */}

          <Link
            to="/"
            onClick={() => handleLinkClick("/")}
            aria-label="DevZore home"
            className="flex items-center shrink-0 group"
          >
            <img
              src="/logo.png"
              alt="DevZore Software Agency"
              width="58"
              height="58"
              className="
                w-[58px]
                h-[58px]
                object-contain
                transition-transform
                duration-300
                group-hover:scale-[1.03]
              "
            />

            <div className="-ml-2.5 flex flex-col leading-none">
              <span
                className="
                  text-[20px]
                  font-extrabold
                  tracking-[-0.025em]
                  text-white
                "
              >
                Dev
                <span className="text-[#19C3C8]">
                  Zore
                </span>
              </span>

              <span
                className="
                  mt-1
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#91A5AE]
                "
              >
                Software Agency
              </span>
            </div>
          </Link>

          {/* ==================================================
              DESKTOP
          ================================================== */}

          <div className="hidden md:flex items-center ml-auto gap-2">
            <ul className="flex items-center">

              {/* HOME */}

              <li>
                <Link
                  to="/"
                  onClick={() => handleLinkClick("/")}
                  className={navLinkClass(
                    location.pathname === "/" &&
                      location.hash === ""
                  )}
                >
                  Home

                  {location.pathname === "/" &&
                    location.hash === "" && (
                      <span
                        className="
                          absolute
                          bottom-0
                          left-2.5
                          right-2.5
                          h-[2px]
                          bg-[#19C3C8]
                        "
                      />
                    )}
                </Link>
              </li>

              {/* SERVICES */}

              <DesktopDropdown
                id="services"
                label="Services"
                items={services}
                width="w-[570px]"
              />

              {/* SOLUTIONS */}

              <DesktopDropdown
                id="solutions"
                label="Solutions"
                items={solutions}
                width="w-[500px]"
              />

              {/* PORTFOLIO */}

              <li>
                <Link
                  to="/#projects"
                  onClick={() =>
                    handleLinkClick("/#projects")
                  }
                  className={navLinkClass(
                    location.pathname === "/" &&
                      location.hash === "#projects"
                  )}
                >
                  Portfolio

                  {location.pathname === "/" &&
                    location.hash === "#projects" && (
                      <span
                        className="
                          absolute
                          bottom-0
                          left-2.5
                          right-2.5
                          h-[2px]
                          bg-[#19C3C8]
                        "
                      />
                    )}
                </Link>
              </li>

              {/* RESOURCES */}

              <DesktopDropdown
                id="resources"
                label="Resources"
                items={resources}
                width="w-[320px]"
              />

              {/* COMPANY */}

              <DesktopDropdown
                id="company"
                label="Company"
                items={company}
                width="w-[300px]"
              />
            </ul>

            {/* LANGUAGE */}

            <LanguageSelector />

            {/* CTA */}

            <Link
              to="/contact"
              onClick={() => handleLinkClick("/contact")}
              className="
                group
                h-[44px]
                flex
                items-center
                justify-center
                gap-2
                ml-2
                px-5
                xl:px-6
                rounded-[11px]
                bg-white
                text-[#071923]
                text-[10px]
                xl:text-[11px]
                font-bold
                uppercase
                tracking-[0.08em]
                whitespace-nowrap
                hover:bg-[#EAF5F6]
                transition-all
                duration-300
              "
            >
              Start a Project

              <ArrowUpRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
            className={`
              md:hidden
              w-10
              h-10
              flex
              items-center
              justify-center
              text-white
              ${
                isOpen
                  ? "opacity-0 pointer-events-none"
                  : ""
              }
            `}
          >
            <Menu size={25} strokeWidth={1.8} />
          </button>
        </div>
      </nav>

      {/* ==================================================
          MOBILE SIDEBAR
      ================================================== */}

      <aside
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        className={`
          fixed
          top-0
          right-0
          bottom-0
          z-[10001]
          md:hidden
          w-[88%]
          max-w-[360px]
          h-[100dvh]
          flex
          flex-col
          bg-[#071923]
          border-l
          border-white/[0.08]
          shadow-[-20px_0_60px_rgba(0,0,0,0.30)]
          transition-transform
          duration-300
          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* MOBILE HEADER */}

        <div
          className="
            h-[72px]
            px-5
            flex
            items-center
            justify-between
            shrink-0
            border-b
            border-white/[0.08]
          "
        >
          <Link
            to="/"
            onClick={() => handleLinkClick("/")}
            className="flex items-center"
          >
            <img
              src="/logo.png"
              alt="DevZore"
              width="50"
              height="50"
              className="w-[50px] h-[50px] object-contain"
            />

            <div className="-ml-2">
              <p className="text-[17px] font-extrabold text-white">
                Dev
                <span className="text-[#19C3C8]">
                  Zore
                </span>
              </p>

              <p
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.18em]
                  text-[#91A5AE]
                "
              >
                Software Agency
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            className="
              w-9
              h-9
              flex
              items-center
              justify-center
              text-white
            "
          >
            <X size={21} />
          </button>
        </div>

        {/* MOBILE CONTENT */}

        <div
          className="
            flex-1
            min-h-0
            overflow-y-auto
            overscroll-contain
            px-5
            py-3
          "
        >
          {/* HOME */}

          <Link
            to="/"
            onClick={() => handleLinkClick("/")}
            className={`
              flex
              items-center
              justify-between
              py-3.5
              border-b
              border-white/[0.08]
              text-[14px]
              font-medium
              ${
                location.pathname === "/" &&
                !location.hash
                  ? "text-[#19C3C8]"
                  : "text-white"
              }
            `}
          >
            Home

            <ArrowRight size={13} />
          </Link>

          <MobileGroup
            id="services"
            title="Services"
            items={services}
          />

          <MobileGroup
            id="solutions"
            title="Solutions"
            items={solutions}
          />

          {/* PORTFOLIO */}

          <Link
            to="/#projects"
            onClick={() =>
              handleLinkClick("/#projects")
            }
            className="
              flex
              items-center
              justify-between
              py-3.5
              border-b
              border-white/[0.08]
              text-[14px]
              font-medium
              text-white
            "
          >
            Portfolio

            <ArrowUpRight
              size={13}
              className="text-[#91A5AE]"
            />
          </Link>

          <MobileGroup
            id="resources"
            title="Resources"
            items={resources}
          />

          <MobileGroup
            id="company"
            title="Company"
            items={company}
          />

          <LanguageSelector mobile />
        </div>

        {/* MOBILE CTA */}

        <div
          className="
            shrink-0
            px-5
            pt-4
            pb-[max(16px,env(safe-area-inset-bottom))]
            border-t
            border-white/[0.08]
            bg-[#071923]
          "
        >
          <Link
            to="/contact"
            onClick={() => handleLinkClick("/contact")}
            className="
              group
              w-full
              h-[45px]
              flex
              items-center
              justify-center
              gap-2
              rounded-[10px]
              bg-white
              text-[#071923]
              text-[11px]
              font-bold
              uppercase
              tracking-[0.08em]
              transition-colors
            "
          >
            Start a Project

            <ArrowUpRight size={13} />
          </Link>

          <a
            href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-3
              flex
              items-center
              justify-center
              gap-1.5
              text-[11px]
              font-medium
              text-[#19C3C8]
            "
          >
            WhatsApp Us
            <ArrowUpRight size={11} />
          </a>

          <p
            className="
              mt-3
              text-[7px]
              text-center
              uppercase
              tracking-[0.15em]
              text-[#70868F]
            "
          >
            Digital Solutions. Trusted Worldwide.
          </p>
        </div>
      </aside>
    </>
  );
};

export default Navbar;