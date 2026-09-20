import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Code2,
  Smartphone,
  Zap,
  Palette,
  Search,
  Wrench,
  Server,
  Globe2,
  ShieldCheck,
  Layers3,
} from "lucide-react";

const WORDS = [
  "Web Applications",
  "Mobile Apps",
  "SaaS Platforms",
  "Startup MVPs",
  "MERN Stack Apps",
  "E-Commerce Stores",
  "React Applications",
];

const Hero = ({ isDark = true }) => {
  const d = isDark;

  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  const timeoutRef = useRef(null);

  // ======================================================
  // TYPING EFFECT
  // ======================================================

  useEffect(() => {
    const currentWord = WORDS[wordIdx];

    if (!deleting && displayed.length < currentWord.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(currentWord.slice(0, displayed.length + 1));
      }, 55);
    } else if (!deleting && displayed.length === currentWord.length) {
      timeoutRef.current = setTimeout(() => {
        setDeleting(true);
      }, 1700);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, 30);
    } else {
      setDeleting(false);
      setWordIdx((currentIndex) => (currentIndex + 1) % WORDS.length);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayed, deleting, wordIdx]);

  // ======================================================
  // HELPERS
  // ======================================================

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // ======================================================
  // SERVICE LINKS
  // ======================================================

  const services = [
    {
      icon: <Code2 size={13} />,
      label: "Web Development",
      path: "/web-development",
      dot: "bg-purple-500",
    },
    {
      icon: <Smartphone size={13} />,
      label: "Mobile Apps",
      path: "/mobile-apps",
      dot: "bg-blue-500",
    },
    {
      icon: <Zap size={13} />,
      label: "SaaS Development",
      path: "/saas-product-development",
      dot: "bg-green-500",
    },
    {
      icon: <Search size={13} />,
      label: "SEO Services",
      path: "/seo-services",
      dot: "bg-pink-500",
    },
    {
      icon: <Palette size={13} />,
      label: "UI/UX Design",
      path: "/ui-ux-design",
      dot: "bg-amber-500",
    },
    {
      icon: <Wrench size={13} />,
      label: "Maintenance",
      path: "/maintenance",
      dot: "bg-cyan-500",
    },
  ];

  // ======================================================
  // TRUST / CAPABILITY ITEMS
  // ======================================================

  const trustItems = [
    "Custom Software Development",
    "Responsive Solutions",
    "Modern Technology Stack",
    "Worldwide Remote Collaboration",
  ];

  // ======================================================
  // RIGHT PANEL CAPABILITIES
  // ======================================================

  const capabilities = [
    {
      icon: <Code2 size={18} />,
      title: "Web Applications",
      description: "Modern frontend and full-stack development",
    },
    {
      icon: <Smartphone size={18} />,
      title: "Mobile Applications",
      description: "Cross-platform mobile experiences",
    },
    {
      icon: <Server size={18} />,
      title: "Backend & APIs",
      description: "APIs, databases and backend architecture",
    },
    {
      icon: <Layers3 size={18} />,
      title: "SaaS Products",
      description: "Scalable software products and MVPs",
    },
  ];

  const panelServices = [
    {
      dot: "bg-purple-500",
      name: "Web Development",
      tech: "React · JavaScript · Node.js",
      path: "/web-development",
    },
    {
      dot: "bg-blue-500",
      name: "Mobile App Development",
      tech: "Cross-Platform · Mobile UI · APIs",
      path: "/mobile-apps",
    },
    {
      dot: "bg-green-500",
      name: "SaaS & MVP Development",
      tech: "Products · APIs · Databases",
      path: "/saas-product-development",
    },
    {
      dot: "bg-pink-500",
      name: "SEO Services",
      tech: "Technical · On-Page · Search Strategy",
      path: "/seo-services",
    },
    {
      dot: "bg-amber-500",
      name: "UI/UX Design",
      tech: "Figma · Prototyping · Design Systems",
      path: "/ui-ux-design",
    },
  ];

  return (
    <section
      aria-labelledby="hero-heading"
      className={`relative overflow-hidden transition-colors duration-300 ${
        d ? "bg-[#030303]" : "bg-white"
      }`}
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className={`absolute inset-0 ${
            d
              ? "bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]"
              : "bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]"
          } bg-[size:40px_40px] sm:bg-[size:48px_48px]`}
        />

        <div
          className={`absolute -top-24 left-1/2 -translate-x-1/2
          w-[300px] sm:w-[600px] lg:w-[760px]
          h-[280px] sm:h-[430px]
          rounded-full blur-[110px] sm:blur-[120px] opacity-20 ${
            d ? "bg-purple-700" : "bg-purple-200"
          }`}
        />

        <div
          className={`absolute bottom-0 right-0
          w-[220px] sm:w-[360px]
          h-[220px] sm:h-[360px]
          rounded-full blur-[100px] opacity-10 ${
            d ? "bg-blue-700" : "bg-blue-200"
          }`}
        />
      </div>

      {/* ==================================================
          MAIN CONTAINER
      ================================================== */}

      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          w-full
          px-4 sm:px-6 lg:px-8
          pt-5 pb-7
          sm:pt-12 sm:pb-12
          lg:py-20
          xl:py-24
        "
      >
        <div className="grid lg:grid-cols-[1.04fr_0.96fr] gap-8 lg:gap-12 xl:gap-16 items-center">

          {/* ==================================================
              LEFT CONTENT
          ================================================== */}

          <div className="text-center lg:text-left min-w-0">

            {/* Badge */}

            <div
              className={`inline-flex items-center gap-2
              px-3 py-1.5
              sm:px-4 sm:py-2
              rounded-full border
              mb-3 sm:mb-5
              text-[8px] sm:text-[11px]
              font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] ${
                d
                  ? "bg-purple-600/10 border-purple-500/20 text-purple-400"
                  : "bg-purple-50 border-purple-200 text-purple-700"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  d ? "bg-purple-400" : "bg-purple-600"
                }`}
              />

              Software Development Agency
            </div>

            {/* ==================================================
                H1
            ================================================== */}

            <h1
              id="hero-heading"
              className={`font-black tracking-[-0.04em] ${
                d ? "text-white" : "text-slate-950"
              }`}
            >
              <span
                className="
                  block
                  text-[34px]
                  min-[390px]:text-[37px]
                  sm:text-[54px]
                  lg:text-[56px]
                  xl:text-[64px]
                  leading-[1]
                "
              >
                We Build
              </span>

              {/* Fixed animated area */}

              <span
                className="
                  flex items-center
                  justify-center lg:justify-start
                  h-[48px]
                  min-[390px]:h-[52px]
                  sm:h-[78px]
                  lg:h-[82px]
                  xl:h-[90px]
                  overflow-hidden
                "
              >
                <span
                  className="
                    inline-flex items-center
                    whitespace-nowrap
                    text-[29px]
                    min-[390px]:text-[32px]
                    sm:text-[50px]
                    lg:text-[52px]
                    xl:text-[60px]
                    leading-none
                    text-purple-600
                  "
                >
                  {displayed}

                  <span
                    aria-hidden="true"
                    className="
                      inline-block
                      w-[2px] sm:w-[3px]
                      h-[0.82em]
                      ml-1
                      bg-purple-500
                      animate-pulse
                    "
                  />
                </span>
              </span>

              <span
                className={`block
                max-w-[350px] sm:max-w-none
                mx-auto lg:mx-0
                text-[30px]
                min-[390px]:text-[33px]
                sm:text-[50px]
                lg:text-[52px]
                xl:text-[60px]
                leading-[0.98] sm:leading-[1.02] ${
                  d ? "text-gray-300" : "text-slate-700"
                }`}
              >
                for Growing Businesses
              </span>
            </h1>

            {/* ==================================================
                SEO-FRIENDLY VISIBLE DESCRIPTION
            ================================================== */}

            <p
              className={`mt-4 sm:mt-6
              text-[12px] min-[390px]:text-[13px]
              sm:text-base lg:text-[17px]
              leading-[1.75] sm:leading-7
              max-w-[650px]
              mx-auto lg:mx-0 ${
                d ? "text-gray-400" : "text-slate-600"
              }`}
            >
              DevZore provides{" "}
              <strong
                className={`font-semibold ${
                  d ? "text-gray-200" : "text-slate-800"
                }`}
              >
                custom web development and software development services
              </strong>{" "}
              for startups and businesses worldwide, including web
              applications, mobile apps, SaaS products, e-commerce
              platforms and backend systems.
            </p>

            <p
              className={`mt-2 sm:mt-3
              text-[10px] min-[390px]:text-[11px]
              sm:text-sm
              leading-[1.7] sm:leading-6
              max-w-[650px]
              mx-auto lg:mx-0 ${
                d ? "text-gray-500" : "text-slate-500"
              }`}
            >
              Our development services include React development, MERN stack
              development, UI/UX design, backend API development, SEO
              services, deployment and ongoing technical support for remote
              projects.
            </p>

            {/* ==================================================
                SERVICE LINKS
            ================================================== */}

            <div
              className="
                grid grid-cols-2
                sm:flex sm:flex-wrap
                gap-1.5 sm:gap-2
                justify-center lg:justify-start
                mt-4 sm:mt-6
                max-w-[390px] sm:max-w-none
                mx-auto lg:mx-0
              "
            >
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={scrollTop}
                  className={`group
                  inline-flex items-center justify-center sm:justify-start
                  gap-1.5
                  px-2 py-1.5
                  sm:px-3 sm:py-2
                  rounded-lg
                  text-[8px] min-[390px]:text-[9px] sm:text-[11px]
                  font-semibold border
                  transition-all duration-200
                  hover:-translate-y-0.5 ${
                    d
                      ? "bg-white/[0.035] border-white/[0.08] text-gray-400 hover:text-white hover:border-purple-500/30"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-white hover:border-purple-300"
                  }`}
                >
                  <span
                    className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full shrink-0 ${service.dot}`}
                  />

                  <span className="text-purple-500 shrink-0">
                    {service.icon}
                  </span>

                  <span className="truncate">{service.label}</span>
                </Link>
              ))}
            </div>

            {/* ==================================================
                CTA
            ================================================== */}

            <div
              className="
                flex flex-col sm:flex-row flex-wrap
                gap-2 sm:gap-2.5
                justify-center lg:justify-start
                mt-4 sm:mt-6
                max-w-[390px] sm:max-w-none
                mx-auto lg:mx-0
              "
            >
              <Link
                to="/contact"
                onClick={scrollTop}
                className="
                  inline-flex items-center justify-center gap-2
                  w-full sm:w-auto
                  px-5 sm:px-6
                  py-2.5 sm:py-3
                  bg-purple-600 hover:bg-purple-700
                  text-white font-bold rounded-lg sm:rounded-xl
                  text-[11px] sm:text-sm
                  transition-all duration-200
                  hover:shadow-[0_0_24px_rgba(124,58,237,0.30)]
                  hover:-translate-y-0.5
                "
              >
                Discuss Your Project
                <ArrowRight size={14} />
              </Link>

              <a
                href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20a%20software%20development%20project."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discuss your project with DevZore on WhatsApp"
                className="
                  inline-flex items-center justify-center gap-2
                  w-full sm:w-auto
                  px-5 sm:px-6
                  py-2.5 sm:py-3
                  border border-[#25D366]/30
                  bg-[#25D366]/10
                  text-[#25D366]
                  font-bold rounded-lg sm:rounded-xl
                  text-[11px] sm:text-sm
                  transition-all duration-200
                  hover:bg-[#25D366]/15
                  hover:-translate-y-0.5
                "
              >
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z" />
                </svg>

                WhatsApp Us
              </a>

              <Link
                to="/allservices"
                onClick={scrollTop}
                className={`inline-flex items-center justify-center gap-2
                w-full sm:w-auto
                px-5 sm:px-6
                py-2.5 sm:py-3
                border font-bold rounded-lg sm:rounded-xl
                text-[11px] sm:text-sm
                transition-all duration-200 hover:-translate-y-0.5 ${
                  d
                    ? "border-white/10 text-gray-300 hover:bg-white/[0.04] hover:border-white/20"
                    : "border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                View Services
              </Link>
            </div>

            {/* ==================================================
                TRUST ITEMS
                Hidden on very small screens to keep Hero compact.
            ================================================== */}

            <div
              className="
                hidden sm:flex
                flex-wrap gap-x-5 gap-y-2
                justify-center lg:justify-start
                mt-6
              "
            >
              {trustItems.map((item) => (
                <span
                  key={item}
                  className={`inline-flex items-center gap-1.5
                  text-[11px] font-medium ${
                    d ? "text-gray-500" : "text-slate-500"
                  }`}
                >
                  <CheckCircle
                    size={12}
                    className="text-purple-500 shrink-0"
                  />

                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ==================================================
              RIGHT PANEL - DESKTOP ONLY
          ================================================== */}

          <div className="hidden lg:block min-w-0">
            <div
              className={`relative rounded-[28px] border p-5 xl:p-6 shadow-2xl ${
                d
                  ? "bg-white/[0.025] border-white/[0.08] shadow-black/20"
                  : "bg-slate-50 border-slate-200 shadow-slate-200/50"
              }`}
            >
              {/* Browser bar */}

              <div
                className={`flex items-center gap-2 mb-5 pb-4 border-b ${
                  d ? "border-white/[0.07]" : "border-slate-200"
                }`}
              >
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                <span
                  className={`text-[10px] xl:text-[11px] font-mono ml-2 ${
                    d ? "text-gray-500" : "text-slate-400"
                  }`}
                >
                  devzore.com — software solutions
                </span>
              </div>

              {/* Capability grid */}

              <div className="grid grid-cols-2 gap-3 mb-5">
                {capabilities.map((item) => (
                  <div
                    key={item.title}
                    className={`p-4 rounded-xl border ${
                      d
                        ? "bg-white/[0.025] border-white/[0.07]"
                        : "bg-white border-slate-200"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${
                        d
                          ? "bg-purple-600/10 text-purple-400"
                          : "bg-purple-50 text-purple-600"
                      }`}
                    >
                      {item.icon}
                    </div>

                    <h2
                      className={`text-[13px] font-bold mb-1 ${
                        d ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {item.title}
                    </h2>

                    <p
                      className={`text-[10px] leading-relaxed ${
                        d ? "text-gray-500" : "text-slate-500"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Services */}

              <div
                className={`mb-2.5 text-[9px] uppercase
                tracking-[0.18em] font-bold ${
                  d ? "text-gray-600" : "text-slate-400"
                }`}
              >
                Development Services
              </div>

              <div className="space-y-1">
                {panelServices.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={scrollTop}
                    className={`group flex items-center gap-3
                    px-3 py-2.5 rounded-xl
                    transition-all duration-200
                    hover:-translate-y-0.5
                    border border-transparent ${
                      d
                        ? "hover:bg-purple-600/10 hover:border-purple-500/20"
                        : "hover:bg-purple-50 hover:border-purple-100"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 ${item.dot}`}
                    />

                    <div className="flex-grow min-w-0">
                      <p
                        className={`text-[12px] font-semibold truncate
                        transition-colors group-hover:text-purple-500 ${
                          d ? "text-gray-200" : "text-slate-800"
                        }`}
                      >
                        {item.name}
                      </p>

                      <p
                        className={`text-[9px] truncate ${
                          d ? "text-gray-500" : "text-slate-500"
                        }`}
                      >
                        {item.tech}
                      </p>
                    </div>

                    <ArrowRight
                      size={12}
                      className={`shrink-0 transition-all duration-200
                      opacity-0 group-hover:opacity-100
                      group-hover:translate-x-0.5 ${
                        d ? "text-purple-400" : "text-purple-600"
                      }`}
                    />
                  </Link>
                ))}
              </div>

              {/* Bottom */}

              <div
                className={`mt-4 pt-4 border-t
                flex items-center justify-between gap-4 ${
                  d ? "border-white/[0.07]" : "border-slate-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Globe2
                    size={13}
                    className="text-green-500 shrink-0"
                  />

                  <span
                    className={`text-[10px] font-semibold ${
                      d ? "text-gray-400" : "text-slate-600"
                    }`}
                  >
                    Available for worldwide remote projects
                  </span>
                </div>

                <Link
                  to="/contact"
                  onClick={scrollTop}
                  className="
                    inline-flex items-center gap-1
                    text-[10px] font-bold
                    text-purple-500 hover:text-purple-400
                    transition-colors whitespace-nowrap
                  "
                >
                  Start a Project
                  <ArrowRight size={10} />
                </Link>
              </div>

              {/* Development note */}

              <div
                className={`mt-3 p-3 rounded-xl flex items-start gap-3 ${
                  d ? "bg-white/[0.02]" : "bg-white"
                }`}
              >
                <ShieldCheck
                  size={16}
                  className="text-purple-500 shrink-0 mt-0.5"
                />

                <p
                  className={`text-[9px] xl:text-[10px] leading-relaxed ${
                    d ? "text-gray-500" : "text-slate-500"
                  }`}
                >
                  Development focused on maintainable architecture,
                  responsive interfaces, security-conscious implementation
                  and practical business requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;