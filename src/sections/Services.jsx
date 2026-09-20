import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Server,
  Layers,
  Palette,
  Wrench,
  Rocket,
  Code2,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield,
  Search,
  Megaphone,
} from "lucide-react";

const Services = ({ isDark = true }) => {
  const d = isDark;

  const [hoveredIndex, setHoveredIndex] = useState(null);

  // ======================================================
  // SERVICES
  // ======================================================

  const services = [
    {
      icon: <Globe size={22} />,
      title: "Web Development",
      subtitle: "React · JavaScript · Node.js",
      path: "/web-development",
      tag: "Web",
      tagColor: "purple",
      desc: "Custom websites and web applications built around performance, usability, responsive design and maintainable architecture.",
      points: [
        "Responsive web applications",
        "Performance-focused development",
        "Search-friendly structure",
      ],
    },

    {
      icon: <Smartphone size={22} />,
      title: "Mobile App Development",
      subtitle: "Cross-Platform · iOS · Android",
      path: "/mobile-apps",
      tag: "Mobile",
      tagColor: "blue",
      desc: "Cross-platform mobile applications designed for practical business requirements, smooth user experiences and reliable backend integration.",
      points: [
        "iOS & Android development",
        "API & backend integration",
        "App release assistance",
      ],
    },

    {
      icon: <ShoppingCart size={22} />,
      title: "E-Commerce Development",
      subtitle: "Stores · Payments · Admin",
      path: "/ecommerce",
      tag: "Commerce",
      tagColor: "green",
      desc: "Custom e-commerce solutions with product management, order workflows, payment integrations and responsive storefront experiences.",
      points: [
        "Product & order management",
        "Payment gateway integration",
        "Mobile-friendly storefronts",
      ],
    },

    {
      icon: <Server size={22} />,
      title: "Backend & API Development",
      subtitle: "Node.js · Express · Databases",
      path: "/backend-api",
      tag: "Backend",
      tagColor: "orange",
      desc: "Backend systems and APIs for web, mobile and SaaS applications, with structured architecture, authentication and database integration.",
      points: [
        "REST & GraphQL APIs",
        "Authentication & authorization",
        "Database & cloud integration",
      ],
    },

    {
      icon: <Layers size={22} />,
      title: "MERN Stack Development",
      subtitle: "MongoDB · Express · React · Node.js",
      path: "/mern-stack-development",
      tag: "Full Stack",
      tagColor: "purple",
      desc: "End-to-end JavaScript application development using MongoDB, Express, React and Node.js for modern full-stack products.",
      points: [
        "Frontend & backend development",
        "Database architecture",
        "Reusable application structure",
      ],
    },

    {
      icon: <TrendingUp size={22} />,
      title: "SaaS Product Development",
      subtitle: "Dashboards · Billing · APIs",
      path: "/saas-product-development",
      tag: "SaaS",
      tagColor: "indigo",
      desc: "SaaS product development for businesses and startups, including dashboards, account management, subscriptions and backend systems.",
      points: [
        "SaaS application architecture",
        "Subscription & billing integration",
        "Admin and analytics dashboards",
      ],
    },

    {
      icon: <Palette size={22} />,
      title: "UI/UX Design",
      subtitle: "Figma · Prototypes · Design Systems",
      path: "/ui-ux-design",
      tag: "Design",
      tagColor: "pink",
      desc: "User-focused interface and experience design for websites, mobile applications and software products, from wireframes to developer-ready designs.",
      points: [
        "Wireframes & prototypes",
        "Responsive interface design",
        "Design systems & handoff",
      ],
    },

    {
      icon: <Rocket size={22} />,
      title: "Startup MVP Development",
      subtitle: "Plan · Build · Validate",
      path: "/startup-mvp",
      tag: "MVP",
      tagColor: "amber",
      desc: "Focused MVP development that helps turn a product idea into a usable first version with the features needed to test and refine the concept.",
      points: [
        "Core feature planning",
        "MVP design & development",
        "Post-launch iteration support",
      ],
    },

    {
      icon: <Wrench size={22} />,
      title: "Maintenance & Support",
      subtitle: "Updates · Bugs · Performance",
      path: "/maintenance",
      tag: "Support",
      tagColor: "gray",
      desc: "Ongoing website and application maintenance covering bug fixes, dependency updates, performance improvements and technical support.",
      points: [
        "Bug fixes & troubleshooting",
        "Dependency & security updates",
        "Performance maintenance",
      ],
    },

    {
      icon: <Code2 size={22} />,
      title: "React Development",
      subtitle: "React · Components · State",
      path: "/reactdevelopment",
      tag: "Frontend",
      tagColor: "cyan",
      desc: "React development for interactive websites, dashboards and web applications using reusable components and maintainable frontend architecture.",
      points: [
        "Reusable React components",
        "State & data management",
        "Responsive application UI",
      ],
    },

    {
      icon: <Shield size={22} />,
      title: "Backend Security & DevOps",
      subtitle: "Deployment · CI/CD · Cloud",
      path: "/backend-api",
      tag: "Infrastructure",
      tagColor: "red",
      desc: "Deployment and backend infrastructure support including environment configuration, CI/CD workflows, application security and cloud hosting.",
      points: [
        "Cloud deployment workflows",
        "CI/CD configuration",
        "Security-conscious setup",
      ],
    },

    // ====================================================
    // SEO SERVICES
    // ====================================================

    {
      icon: <Search size={22} />,
      title: "SEO Services",
      subtitle: "Technical · On-Page · Search Strategy",
      path: "/seo-services",
      tag: "SEO",
      tagColor: "green",
      desc: "Search engine optimization services focused on improving website structure, technical SEO, content relevance and organic search visibility.",
      points: [
        "Technical & on-page SEO",
        "Keyword research & content strategy",
        "Search performance monitoring",
      ],
    },

    // ====================================================
    // DIGITAL MARKETING
    // ====================================================

    {
      icon: <Megaphone size={22} />,
      title: "Digital Marketing",
      subtitle: "Content · Social · Campaigns",
      path: "/digital-marketing",
      tag: "Marketing",
      tagColor: "pink",
      desc: "Digital marketing support for businesses that want to strengthen their online presence through content, social media and campaign strategy.",
      points: [
        "Social media marketing",
        "Content & campaign strategy",
        "Performance tracking",
      ],
    },
  ];

  // ======================================================
  // TAG COLORS
  // ======================================================

  const tagColors = {
    purple: d
      ? "bg-purple-500/15 text-purple-400 border-purple-500/20"
      : "bg-purple-50 text-purple-700 border-purple-200",

    blue: d
      ? "bg-blue-500/15 text-blue-400 border-blue-500/20"
      : "bg-blue-50 text-blue-700 border-blue-200",

    green: d
      ? "bg-green-500/15 text-green-400 border-green-500/20"
      : "bg-green-50 text-green-700 border-green-200",

    orange: d
      ? "bg-orange-500/15 text-orange-400 border-orange-500/20"
      : "bg-orange-50 text-orange-700 border-orange-200",

    indigo: d
      ? "bg-indigo-500/15 text-indigo-400 border-indigo-500/20"
      : "bg-indigo-50 text-indigo-700 border-indigo-200",

    pink: d
      ? "bg-pink-500/15 text-pink-400 border-pink-500/20"
      : "bg-pink-50 text-pink-700 border-pink-200",

    amber: d
      ? "bg-amber-500/15 text-amber-400 border-amber-500/20"
      : "bg-amber-50 text-amber-700 border-amber-200",

    gray: d
      ? "bg-white/[0.06] text-gray-400 border-white/[0.08]"
      : "bg-gray-100 text-gray-600 border-gray-200",

    cyan: d
      ? "bg-cyan-500/15 text-cyan-400 border-cyan-500/20"
      : "bg-cyan-50 text-cyan-700 border-cyan-200",

    red: d
      ? "bg-red-500/15 text-red-400 border-red-500/20"
      : "bg-red-50 text-red-700 border-red-200",
  };

  // ======================================================
  // SCROLL TOP
  // ======================================================

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
      id="services"
      aria-labelledby="services-heading"
      className={`py-20 sm:py-24 transition-colors duration-300 ${
        d ? "bg-[#030303]" : "bg-[#fafafa]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================================================
            SECTION HEADER
        ================================================== */}

        <div className="max-w-3xl mb-12 sm:mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 border ${
              d
                ? "bg-purple-600/10 border-purple-500/20 text-purple-400"
                : "bg-purple-50 border-purple-200 text-purple-700"
            }`}
          >
            What We Do
          </div>

          <h2
            id="services-heading"
            className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5 ${
              d ? "text-white" : "text-gray-900"
            }`}
          >
            Software & Digital Services
            <span className="text-purple-600"> Built Around Your Business</span>
          </h2>

          <p
            className={`text-base sm:text-lg leading-relaxed ${
              d ? "text-gray-400" : "text-gray-600"
            }`}
          >
            DevZore provides web development, mobile app development, SaaS
            development, MERN stack development, backend APIs, e-commerce,
            UI/UX design, SEO services, digital marketing and software
            maintenance for startups and businesses.
          </p>

          <p
            className={`text-sm sm:text-base leading-relaxed mt-4 ${
              d ? "text-gray-500" : "text-gray-500"
            }`}
          >
            From planning and design to development, deployment, search
            optimization and digital growth, our services can support different
            stages of your online product and business.
          </p>
        </div>

        {/* ==================================================
            SERVICES GRID
        ================================================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <Link
              to={service.path}
              key={service.title}
              aria-label={`Learn more about ${service.title}`}
              onClick={scrollTop}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative flex flex-col p-6 rounded-2xl border transition-all duration-300 ${
                d
                  ? hoveredIndex === index
                    ? "bg-white/[0.04] border-purple-500/30 shadow-[0_0_30px_rgba(124,58,237,0.08)]"
                    : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-purple-500/20"
                  : hoveredIndex === index
                    ? "bg-white border-purple-200 shadow-[0_4px_24px_rgba(124,58,237,0.08)]"
                    : "bg-white border-gray-200 hover:border-purple-200 hover:shadow-sm"
              }`}
            >
              {/* TAG */}

              <span
                className={`self-start text-[10px] font-bold px-2.5 py-1 rounded-full border mb-4 ${
                  tagColors[service.tagColor]
                }`}
              >
                {service.tag}
              </span>

              {/* ICON + TITLE */}

              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                    d
                      ? "bg-white/[0.04] border border-white/[0.08] text-purple-400 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600"
                      : "bg-purple-50 border border-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600"
                  }`}
                >
                  {service.icon}
                </div>

                <div className="min-w-0">
                  <h3
                    className={`text-[15px] font-bold leading-tight mb-1 transition-colors ${
                      d
                        ? "text-white group-hover:text-purple-300"
                        : "text-gray-900 group-hover:text-purple-700"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-[11px] font-medium ${
                      d ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {service.subtitle}
                  </p>
                </div>
              </div>

              {/* DESCRIPTION */}

              <p
                className={`text-[13px] leading-relaxed mb-5 flex-grow ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {service.desc}
              </p>

              {/* POINTS */}

              <ul className="space-y-2 mb-5">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className={`flex items-start gap-2 text-[12px] leading-relaxed ${
                      d ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <CheckCircle
                      size={12}
                      className="text-purple-500 shrink-0 mt-0.5"
                    />

                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}

              <div
                className={`flex items-center gap-1.5 text-[12px] font-semibold mt-auto ${
                  d ? "text-purple-400" : "text-purple-600"
                }`}
              >
                Explore {service.title}

                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* ==================================================
            BOTTOM CTA
        ================================================== */}

        <div
          className={`mt-14 sm:mt-16 p-7 sm:p-10 lg:p-12 rounded-3xl border text-center relative overflow-hidden ${
            d
              ? "bg-white/[0.02] border-white/[0.06]"
              : "bg-white border-gray-200"
          }`}
        >
          <div
            aria-hidden="true"
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"
          />

          <div className="relative z-10">
            <span
              className={`inline-block text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] mb-4 ${
                d ? "text-purple-400" : "text-purple-600"
              }`}
            >
              Need Help Choosing?
            </span>

            <h2
              className={`text-2xl sm:text-3xl font-black mb-4 ${
                d ? "text-white" : "text-gray-900"
              }`}
            >
              Not Sure Which Service Fits Your Project?
            </h2>

            <p
              className={`text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto ${
                d ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Tell us what you are planning to build, improve or promote.
              We can discuss your requirements and identify the services that
              fit your project.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/contact"
                onClick={scrollTop}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)] hover:-translate-y-0.5"
              >
                Discuss Your Project
                <ArrowRight size={15} />
              </Link>

              <a
                href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-bold rounded-xl text-sm transition-all hover:bg-[#25D366]/15 hover:-translate-y-0.5"
              >
                WhatsApp Us
              </a>

              <Link
                to="/allservices"
                onClick={scrollTop}
                className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold rounded-xl text-sm transition-all border hover:-translate-y-0.5 ${
                  d
                    ? "border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]"
                    : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                View All Services
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;