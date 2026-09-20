import React from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Zap,
  Code2,
  Users,
  CheckCircle,
  ArrowRight,
  Lock,
  TrendingUp,
  HeartHandshake,
  Search,
  Megaphone,
  Gauge,
} from "lucide-react";

const WhyUs = ({ isDark = true }) => {
  const d = isDark;

  // ======================================================
  // WHY DEVZORE
  // ======================================================

  const reasons = [
    {
      icon: <Code2 size={20} />,
      color: "purple",
      title: "Modern Development",
      desc: "We build websites, web applications and software products using modern development practices, reusable components and maintainable architecture.",
    },
    {
      icon: <Shield size={20} />,
      color: "blue",
      title: "Security-Conscious Development",
      desc: "Authentication, authorization, validation and secure development practices are considered throughout the application development process.",
    },
    {
      icon: <Zap size={20} />,
      color: "amber",
      title: "Performance-Focused",
      desc: "We focus on responsive interfaces, efficient frontend code and practical performance improvements for modern web and software applications.",
    },
    {
      icon: <Lock size={20} />,
      color: "green",
      title: "Clear Project Ownership",
      desc: "Project source code, repositories, design assets and deployment access can be organised around clearly agreed project ownership and delivery terms.",
    },
    {
      icon: <Users size={20} />,
      color: "cyan",
      title: "Direct Communication",
      desc: "Discuss requirements, feedback and project updates directly through practical communication channels including email, WhatsApp and online meetings.",
    },
    {
      icon: <Search size={20} />,
      color: "indigo",
      title: "SEO-Friendly Development",
      desc: "Websites can be structured with semantic content, technical SEO foundations, metadata, internal linking and search-friendly page architecture.",
      path: "/seo-services",
    },
    {
      icon: <Megaphone size={20} />,
      color: "rose",
      title: "Digital Marketing Support",
      desc: "Digital marketing services can support your website through content strategy, campaign planning, social media and online visibility initiatives.",
      path: "/digital-marketing",
    },
    {
      icon: <Gauge size={20} />,
      color: "orange",
      title: "Usability & Technical Quality",
      desc: "We consider responsive design, accessibility, maintainability and technical quality while building customer-facing digital products.",
    },
    {
      icon: <HeartHandshake size={20} />,
      color: "teal",
      title: "Ongoing Technical Support",
      desc: "After launch, DevZore can continue supporting your product with maintenance, bug fixes, updates, improvements and additional feature development.",
      path: "/maintenance",
    },
  ];

  // ======================================================
  // COLORS
  // ======================================================

  const colorMap = {
    purple: d
      ? "bg-purple-500/10 border-purple-500/20 text-purple-400"
      : "bg-purple-50 border-purple-100 text-purple-600",

    blue: d
      ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
      : "bg-blue-50 border-blue-100 text-blue-600",

    amber: d
      ? "bg-amber-500/10 border-amber-500/20 text-amber-400"
      : "bg-amber-50 border-amber-100 text-amber-600",

    green: d
      ? "bg-green-500/10 border-green-500/20 text-green-400"
      : "bg-green-50 border-green-100 text-green-600",

    indigo: d
      ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-400"
      : "bg-indigo-50 border-indigo-100 text-indigo-600",

    cyan: d
      ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
      : "bg-cyan-50 border-cyan-100 text-cyan-600",

    rose: d
      ? "bg-rose-500/10 border-rose-500/20 text-rose-400"
      : "bg-rose-50 border-rose-100 text-rose-600",

    orange: d
      ? "bg-orange-500/10 border-orange-500/20 text-orange-400"
      : "bg-orange-50 border-orange-100 text-orange-600",

    teal: d
      ? "bg-teal-500/10 border-teal-500/20 text-teal-400"
      : "bg-teal-50 border-teal-100 text-teal-600",
  };

  // ======================================================
  // CAPABILITIES
  // ======================================================

  const capabilities = [
    {
      title: "Web & Software Development",
      text: "Websites, dashboards and custom web applications",
      path: "/web-development",
    },
    {
      title: "Mobile App Development",
      text: "Cross-platform applications for business requirements",
      path: "/mobile-apps",
    },
    {
      title: "Backend & APIs",
      text: "Backend systems, databases and API integrations",
      path: "/backend-api",
    },
    {
      title: "UI/UX Design",
      text: "Responsive interfaces, prototypes and design systems",
      path: "/ui-ux-design",
    },
    {
      title: "SEO Services",
      text: "Technical SEO, on-page optimisation and search strategy",
      path: "/seo-services",
    },
    {
      title: "Digital Marketing",
      text: "Content, campaigns, social media and digital visibility",
      path: "/digital-marketing",
    },
  ];

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <section
      id="why-us"
      aria-labelledby="whyus-heading"
      className={`py-12 sm:py-14 transition-colors duration-300 ${
        d ? "bg-[#050505]" : "bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="max-w-3xl mb-9 sm:mb-10">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border mb-4 ${
              d
                ? "bg-purple-600/10 border-purple-500/20 text-purple-400"
                : "bg-purple-50 border-purple-200 text-purple-700"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            Why DevZore
          </div>

          <h2
            id="whyus-heading"
            className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 ${
              d ? "text-white" : "text-slate-950"
            }`}
          >
            More Than Just{" "}
            <span className="text-purple-600">
              Software Development
            </span>
          </h2>

          <p
            className={`text-base sm:text-lg leading-relaxed ${
              d ? "text-gray-400" : "text-slate-600"
            }`}
          >
            DevZore brings development, design, SEO, digital marketing and
            ongoing technical support together to help businesses build and
            improve their digital products.
          </p>
        </div>

        {/* ==================================================
            REASONS GRID
        ================================================== */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {reasons.map((item) => {
            const content = (
              <>
                <div
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-3 ${
                    colorMap[item.color]
                  }`}
                >
                  {item.icon}
                </div>

                <h3
                  className={`text-[14px] font-bold mb-2 transition-colors ${
                    d
                      ? "text-white group-hover:text-purple-300"
                      : "text-slate-900 group-hover:text-purple-700"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-[13px] leading-relaxed ${
                    d ? "text-gray-400" : "text-slate-600"
                  }`}
                >
                  {item.desc}
                </p>

                {item.path && (
                  <div
                    className={`inline-flex items-center gap-1.5 mt-4 text-[11px] font-bold ${
                      d ? "text-purple-400" : "text-purple-600"
                    }`}
                  >
                    Learn More
                    <ArrowRight
                      size={12}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                )}
              </>
            );

            if (item.path) {
              return (
                <Link
                  key={item.title}
                  to={item.path}
                  onClick={scrollTop}
                  className={`group p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-purple-500/25"
                      : "bg-white border-slate-200 hover:border-purple-200 hover:shadow-md"
                  }`}
                >
                  {content}
                </Link>
              );
            }

            return (
              <div
                key={item.title}
                className={`group p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 ${
                  d
                    ? "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-purple-500/25"
                    : "bg-white border-slate-200 hover:border-purple-200 hover:shadow-md"
                }`}
              >
                {content}
              </div>
            );
          })}
        </div>

        {/* ==================================================
            CAPABILITIES
        ================================================== */}

        <div
          className={`rounded-2xl border overflow-hidden mb-6 ${
            d
              ? "border-white/[0.08] bg-white/[0.02]"
              : "border-slate-200 bg-white"
          }`}
        >
          <div
            className={`px-5 sm:px-6 py-4 border-b ${
              d
                ? "border-white/[0.07]"
                : "border-slate-200"
            }`}
          >
            <h3
              className={`text-lg font-black ${
                d ? "text-white" : "text-slate-900"
              }`}
            >
              Development, SEO & Digital Growth Capabilities
            </h3>

            <p
              className={`text-[13px] mt-1 ${
                d ? "text-gray-500" : "text-slate-500"
              }`}
            >
              Explore the services that can support your product from
              development through online visibility.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                onClick={scrollTop}
                className={`group flex items-start gap-3 p-5 border-b transition-colors ${
                  d
                    ? "border-white/[0.05] hover:bg-purple-600/[0.05]"
                    : "border-slate-100 hover:bg-purple-50/50"
                }`}
              >
                <CheckCircle
                  size={16}
                  className="text-purple-500 shrink-0 mt-0.5"
                />

                <div className="min-w-0">
                  <h4
                    className={`text-[13px] font-bold mb-1 transition-colors ${
                      d
                        ? "text-gray-200 group-hover:text-purple-300"
                        : "text-slate-800 group-hover:text-purple-700"
                    }`}
                  >
                    {item.title}
                  </h4>

                  <p
                    className={`text-[11px] leading-relaxed ${
                      d ? "text-gray-500" : "text-slate-500"
                    }`}
                  >
                    {item.text}
                  </p>

                  <span
                    className={`inline-flex items-center gap-1 mt-2 text-[10px] font-bold ${
                      d ? "text-purple-400" : "text-purple-600"
                    }`}
                  >
                    Explore
                    <ArrowRight
                      size={10}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ==================================================
            CTA
        ================================================== */}

        <div
          className={`relative overflow-hidden rounded-2xl border p-6 sm:p-8 ${
            d
              ? "bg-purple-600/[0.05] border-purple-500/20"
              : "bg-purple-50 border-purple-100"
          }`}
        >
          <div
            aria-hidden="true"
            className="absolute -top-24 right-0 w-72 h-72 bg-purple-600/10 blur-[90px] rounded-full pointer-events-none"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <span
                className={`text-[10px] font-black uppercase tracking-[0.2em] ${
                  d ? "text-purple-400" : "text-purple-600"
                }`}
              >
                Start a Conversation
              </span>

              <h3
                className={`text-xl sm:text-2xl font-black mt-2 mb-2 ${
                  d ? "text-white" : "text-slate-900"
                }`}
              >
                Need Development, SEO or Digital Marketing?
              </h3>

              <p
                className={`text-[13px] sm:text-sm leading-relaxed ${
                  d ? "text-gray-400" : "text-slate-600"
                }`}
              >
                Tell us about your website, software product or online growth
                requirements and we can discuss the services that fit your
                project.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/contact"
                onClick={scrollTop}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_18px_rgba(124,58,237,0.3)] hover:-translate-y-0.5"
              >
                Discuss Your Project
                <ArrowRight size={14} />
              </Link>

              <a
                href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all hover:-translate-y-0.5"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z" />
                </svg>

                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;