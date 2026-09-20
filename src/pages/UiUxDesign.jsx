import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Palette,
  ArrowRight,
  CheckCircle,
  Globe,
  Zap,
  Monitor,
  Smartphone,
  Layers,
  Plus,
  Minus,
  Users,
  Eye,
  Layout,
  BarChart3,
  RefreshCw,
  Target,
  Cpu,
  Server,
  Code2,
  TrendingUp,
} from "lucide-react";

const UiUxDesign = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  /* =====================================================
     SERVICES
  ===================================================== */

  const services = [
    {
      icon: <Layout size={20} />,
      color: "purple",
      title: "UX Research & Strategy",
      desc: "User interviews, competitive analysis, journey mapping, persona development and information architecture — building a strong research foundation for better product decisions.",
    },
    {
      icon: <Eye size={20} />,
      color: "blue",
      title: "Wireframing & Low-Fidelity Design",
      desc: "Rapid wireframes for screens and user flows — defining interactions, layout logic and content hierarchy before investing in high-fidelity design or development.",
    },
    {
      icon: <Palette size={20} />,
      color: "pink",
      title: "Visual UI Design & Branding",
      desc: "High-fidelity UI designs in Figma with typography, colour systems, iconography, visual hierarchy and reusable components aligned with your brand.",
    },
    {
      icon: <Target size={20} />,
      color: "green",
      title: "Conversion-Focused Design",
      desc: "Thoughtful interface decisions around calls to action, onboarding, pricing pages and checkout flows designed to reduce friction and support business goals.",
    },
    {
      icon: <Smartphone size={20} />,
      color: "orange",
      title: "Mobile App UI/UX Design",
      desc: "Modern mobile interfaces designed for iOS, Android and cross-platform applications with responsive layouts and intuitive interaction patterns.",
    },
    {
      icon: <RefreshCw size={20} />,
      color: "cyan",
      title: "Prototype & Usability Testing",
      desc: "Interactive Figma prototypes that help teams validate user flows, interactions and product ideas before development begins.",
    },
    {
      icon: <Layers size={20} />,
      color: "indigo",
      title: "Design System Development",
      desc: "Reusable component libraries, design tokens, typography, spacing rules and usage guidelines that keep product design consistent as it grows.",
    },
    {
      icon: <Monitor size={20} />,
      color: "amber",
      title: "SaaS & Dashboard Design",
      desc: "UI/UX design for SaaS platforms, dashboards, admin panels, analytics interfaces, data tables and complex business workflows.",
    },
    {
      icon: <Users size={20} />,
      color: "red",
      title: "Developer Handoff & Design QA",
      desc: "Organised Figma files, component specifications, design tokens and implementation guidance to help developers accurately translate designs into production.",
    },
  ];

  /* =====================================================
     DESIGN PROCESS
  ===================================================== */

  const designProcess = [
    {
      n: "01",
      title: "Discovery & Research",
      desc: "We begin by understanding your business, users, competitors, product requirements and technical constraints before making design decisions.",
    },
    {
      n: "02",
      title: "Information Architecture",
      desc: "We organise navigation, content hierarchy, user flows and product structure so users can move through the experience naturally.",
    },
    {
      n: "03",
      title: "Wireframes & Concepts",
      desc: "Low-fidelity wireframes help define layouts and interactions early, allowing ideas to be reviewed before detailed visual design begins.",
    },
    {
      n: "04",
      title: "Visual Design & Prototyping",
      desc: "We turn approved wireframes into polished Figma interfaces and interactive prototypes that demonstrate the intended product experience.",
    },
    {
      n: "05",
      title: "Testing & Iteration",
      desc: "Designs are reviewed and refined based on feedback, usability considerations and product requirements before final handoff.",
    },
    {
      n: "06",
      title: "Handoff & Implementation QA",
      desc: "Developers receive organised design files, component specifications and implementation guidance to help maintain design consistency.",
    },
  ];

  /* =====================================================
     TOOLS
  ===================================================== */

  const tools = [
    {
      category: "Design",
      items: ["Figma", "FigJam", "Adobe XD", "Sketch", "Framer"],
    },
    {
      category: "Prototyping",
      items: ["Figma Prototyping", "Framer", "ProtoPie"],
    },
    {
      category: "Research",
      items: ["Maze", "Hotjar", "UserTesting", "Dovetail"],
    },
    {
      category: "Design Systems",
      items: [
        "Figma Variables",
        "Storybook",
        "Design Tokens",
        "Component Libraries",
      ],
    },
    {
      category: "Analytics",
      items: [
        "Google Analytics",
        "PostHog",
        "Mixpanel",
        "Microsoft Clarity",
      ],
    },
    {
      category: "Handoff",
      items: [
        "Figma Dev Mode",
        "Design Tokens",
        "SVG Assets",
        "Component Specs",
      ],
    },
  ];

  /* =====================================================
     PRINCIPLES
  ===================================================== */

  const principles = [
    {
      icon: <Target size={15} />,
      title: "Business-Outcome Driven",
      desc: "We connect design decisions with real product and business goals instead of focusing only on visual appearance.",
    },
    {
      icon: <Users size={15} />,
      title: "User-Centred Thinking",
      desc: "We consider user goals, expectations and friction points throughout the design process.",
    },
    {
      icon: <Zap size={15} />,
      title: "Rapid Iteration",
      desc: "Starting with wireframes allows ideas to be reviewed and improved before significant development work begins.",
    },
    {
      icon: <Eye size={15} />,
      title: "Accessible Interfaces",
      desc: "We consider readable contrast, keyboard interaction, focus states and accessibility best practices while designing interfaces.",
    },
    {
      icon: <Cpu size={15} />,
      title: "Developer Collaboration",
      desc: "Our designs use component-based thinking and practical interaction states so implementation is clearer for development teams.",
    },
    {
      icon: <BarChart3 size={15} />,
      title: "Evidence-Informed Decisions",
      desc: "Analytics, user feedback and product data can be used to guide improvements instead of relying only on assumptions.",
    },
  ];

  /* =====================================================
     FAQ
  ===================================================== */

  const faqs = [
    {
      q: "What is the difference between UI design and UX design?",
      a: "UX design focuses on how a product works and how easily users can complete their goals. It includes research, information architecture, user flows, wireframing and usability. UI design focuses on the visual interface, including typography, colours, spacing, components and interaction states. DevZore can handle both UI and UX as part of one product design process.",
    },
    {
      q: "How much does UI/UX design cost?",
      a: "UI/UX design pricing depends on the number of screens, product complexity, research requirements, responsive layouts, prototypes and design-system requirements. After understanding your project, DevZore can provide a proposal with the project scope, deliverables and estimated timeline.",
    },
    {
      q: "Do you provide Figma source files after the project?",
      a: "Yes. Project deliverables can include organised Figma source files, reusable components, screens, design tokens and prototype connections so your development team can continue working with the designs.",
    },
    {
      q: "How long does a UI/UX design project take?",
      a: "The timeline depends on the size and complexity of the product. A landing page can take considerably less time than a complete SaaS platform or mobile application. We define the expected timeline after reviewing the screens, workflows and research requirements.",
    },
    {
      q: "Do you conduct user research and usability testing?",
      a: "User research and usability testing can be included depending on the project scope. This may involve competitor research, user-flow analysis, interviews, prototype reviews and usability feedback before development.",
    },
    {
      q: "Can you prepare designs for developer handoff?",
      a: "Yes. We organise designs for implementation with reusable components, layout specifications, interaction states, assets and other information developers need to build the interface accurately.",
    },
    {
      q: "Do you create design systems?",
      a: "Yes. DevZore can create reusable design systems containing colours, typography, spacing rules, components, interaction states and usage guidelines for web and mobile products.",
    },
    {
      q: "Can you redesign an existing product?",
      a: "Yes. We can review an existing website, SaaS platform or application, identify usability and interface issues, and redesign important screens and workflows around the goals of the product.",
    },
  ];

  /* =====================================================
     RELATED SERVICES
  ===================================================== */

  const relatedServices = [
    {
      badge: "Scalable",
      icon: <Server size={22} />,
      title: "Backend & API Development",
      subtitle: "Node.js · Express · MongoDB",
      description:
        "Robust, secure and scalable backend systems and REST APIs built for modern web and mobile applications.",
      points: [
        "RESTful & GraphQL APIs",
        "JWT auth & role-based access",
        "Scalable backend architecture",
      ],
      path: "/backend-api",
      color: "orange",
    },
    {
      badge: "Full Stack",
      icon: <Code2 size={22} />,
      title: "MERN Stack Development",
      subtitle: "MongoDB · Express · React · Node",
      description:
        "Complete full-stack JavaScript development for modern products, dashboards and business applications.",
      points: [
        "Full-stack development",
        "Reusable React interfaces",
        "API & database integration",
      ],
      path: "/mern-stack-development",
      color: "purple",
    },
    {
      badge: "Product",
      icon: <TrendingUp size={22} />,
      title: "SaaS Product Development",
      subtitle: "Multi-tenant · Billing · Dashboards",
      description:
        "End-to-end SaaS product development with scalable architecture, subscriptions and admin dashboards.",
      points: [
        "Multi-tenant architecture",
        "Subscription-ready systems",
        "Analytics & admin dashboards",
      ],
      path: "/saas-product-development",
      color: "blue",
    },
  ];

  /* =====================================================
     COLOR MAP
  ===================================================== */

  const colorMap = {
    purple: d
      ? "bg-purple-500/10 border-purple-500/20 text-purple-400"
      : "bg-purple-50 border-purple-100 text-purple-600",
    blue: d
      ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
      : "bg-blue-50 border-blue-100 text-blue-600",
    pink: d
      ? "bg-pink-500/10 border-pink-500/20 text-pink-400"
      : "bg-pink-50 border-pink-100 text-pink-600",
    green: d
      ? "bg-green-500/10 border-green-500/20 text-green-400"
      : "bg-green-50 border-green-100 text-green-600",
    orange: d
      ? "bg-orange-500/10 border-orange-500/20 text-orange-400"
      : "bg-orange-50 border-orange-100 text-orange-600",
    cyan: d
      ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
      : "bg-cyan-50 border-cyan-100 text-cyan-600",
    indigo: d
      ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-400"
      : "bg-indigo-50 border-indigo-100 text-indigo-600",
    amber: d
      ? "bg-amber-500/10 border-amber-500/20 text-amber-400"
      : "bg-amber-50 border-amber-100 text-amber-600",
    red: d
      ? "bg-red-500/10 border-red-500/20 text-red-400"
      : "bg-red-50 border-red-100 text-red-600",
  };

  /* =====================================================
     CTA COMPONENT
  ===================================================== */

  const CtaStrip = ({ heading, sub }) => (
    <div
      className={`p-8 rounded-2xl border text-center ${
        d
          ? "bg-purple-600/5 border-purple-500/15"
          : "bg-purple-50 border-purple-100"
      }`}
    >
      <h3
        className={`text-lg font-black mb-2 ${
          d ? "text-white" : "text-gray-900"
        }`}
      >
        {heading}
      </h3>

      <p
        className={`text-sm mb-5 ${
          d ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {sub}
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          to="/contact"
          className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_16px_rgba(124,58,237,0.3)]"
        >
          Get Free Design Quote
          <ArrowRight size={13} />
        </Link>

        <a
          href="https://wa.me/923348004300?text=Hi%20DevZore!%20I%20need%20UI%2FUX%20design%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
        >
          WhatsApp
        </a>

        <Link
          to="/allservices"
          className={`flex items-center gap-2 px-5 py-2.5 font-bold rounded-xl text-sm border transition-all ${
            d
              ? "border-white/10 text-gray-300 hover:bg-white/[0.04]"
              : "border-gray-200 text-gray-700 hover:bg-gray-50"
          }`}
        >
          All Services
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://devzore.com/ui-ux-design#service",
            name: "UI/UX Design Services",
            description:
              "UI/UX design services including UX research, wireframing, Figma interface design, interactive prototypes, usability testing, design systems and developer handoff.",
            url: "https://devzore.com/ui-ux-design",
            serviceType: "UI/UX Design",
            provider: {
              "@type": "Organization",
              "@id": "https://devzore.com/#organization",
              name: "DevZore",
              url: "https://devzore.com/",
            },
            areaServed: "Worldwide",
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://devzore.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://devzore.com/allservices",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "UI/UX Design",
                item: "https://devzore.com/ui-ux-design",
              },
            ],
          })}
        </script>
      </Helmet>

      <main
        className={`min-h-screen transition-colors duration-300 ${
          d ? "bg-[#030303]" : "bg-white"
        }`}
      >
        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          aria-labelledby="uiux-heading"
          className={`pt-28 pb-16 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
              <div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${
                      d
                        ? "bg-purple-600/10 border-purple-500/20 text-purple-400"
                        : "bg-purple-50 border-purple-200 text-purple-700"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    UI/UX Design
                  </div>

                  <div
                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold border ${
                      d
                        ? "bg-pink-500/10 border-pink-500/20 text-pink-400"
                        : "bg-pink-50 border-pink-200 text-pink-700"
                    }`}
                  >
                    <Globe size={10} />
                    Worldwide Clients
                  </div>
                </div>

                <h1
                  id="uiux-heading"
                  className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5 ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  UI/UX Design Services{" "}
                  <span className="text-purple-600">
                    Built Around Your Users
                  </span>
                </h1>

                <p
                  className={`text-lg font-semibold mb-5 ${
                    d ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  UX Research · Wireframes · Figma UI · Prototypes · Design
                  Systems
                </p>

                <p
                  className={`text-base leading-relaxed mb-5 ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  DevZore designs modern digital products for startups and
                  businesses. We combine user-focused UX thinking with clean,
                  professional interface design to create websites, SaaS
                  platforms and mobile applications that are easier to
                  understand and use.
                </p>

                <p
                  className={`text-base leading-relaxed mb-8 ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Our workflow is built around Figma, reusable components,
                  responsive layouts and developer-friendly handoff so your
                  product can move smoothly from design to development.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                  >
                    Get Free Design Quote
                    <ArrowRight size={14} />
                  </Link>

                  <a
                    href="https://wa.me/923348004300?text=Hi%20DevZore!%20I%20need%20UI%2FUX%20design%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
                  >
                    WhatsApp
                  </a>

                  <Link
                    to="/allservices"
                    className={`flex items-center gap-2 px-5 py-3 font-bold rounded-xl text-sm border transition-all ${
                      d
                        ? "border-white/10 text-gray-300 hover:bg-white/[0.04]"
                        : "border-gray-200 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    All Services
                  </Link>
                </div>
              </div>

              {/* DELIVERABLES */}

              <div
                className={`p-7 md:p-8 rounded-3xl border ${
                  d
                    ? "bg-white/[0.02] border-white/[0.06]"
                    : "bg-[#fafafa] border-gray-200"
                }`}
              >
                <p
                  className={`text-[11px] font-black uppercase tracking-widest mb-6 ${
                    d ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  Typical Project Deliverables
                </p>

                <div className="space-y-3">
                  {[
                    ["Organised Figma design files", "Screens and reusable components"],
                    ["Interactive product prototype", "Preview important user flows"],
                    ["Responsive interface designs", "Desktop, tablet and mobile layouts"],
                    ["Reusable component library", "Consistent interface patterns"],
                    ["Design tokens", "Colours, typography and spacing"],
                    ["Developer handoff", "Implementation-ready design details"],
                    ["Accessibility considerations", "Contrast, focus and usability"],
                    ["Design review support", "Help during implementation"],
                  ].map(([item, note]) => (
                    <div
                      key={item}
                      className={`flex items-start gap-3 pb-3 border-b last:border-0 ${
                        d ? "border-white/[0.05]" : "border-gray-100"
                      }`}
                    >
                      <CheckCircle
                        size={14}
                        className="text-purple-500 flex-shrink-0 mt-0.5"
                      />

                      <div>
                        <p
                          className={`text-[12px] font-bold ${
                            d ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {item}
                        </p>

                        <p
                          className={`text-[10px] ${
                            d ? "text-gray-500" : "text-gray-400"
                          }`}
                        >
                          {note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section
          aria-labelledby="services-heading"
          className={`py-16 border-b ${
            d
              ? "border-white/[0.06] bg-[#050505]"
              : "border-gray-100 bg-[#fafafa]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2
                id="services-heading"
                className={`text-3xl font-black mb-4 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                UI/UX Design Services We Offer
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                From product discovery and wireframes to polished interfaces
                and developer handoff, we can support different stages of your
                product design process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((item) => (
                <article
                  key={item.title}
                  className={`p-6 rounded-2xl border transition-all hover:-translate-y-1 ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06] hover:border-purple-500/25 hover:bg-white/[0.04]"
                      : "bg-white border-gray-200 hover:border-purple-200 hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${
                      colorMap[item.color]
                    }`}
                  >
                    {item.icon}
                  </div>

                  <h3
                    className={`text-[14px] font-bold mb-2 ${
                      d ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-[13px] leading-relaxed ${
                      d ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PRINCIPLES
        ===================================================== */}

        <section
          aria-labelledby="principles-heading"
          className={`py-16 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2
                id="principles-heading"
                className={`text-3xl font-black mb-4 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                How We Approach Product Design
              </h2>

              <p
                className={`text-base ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Our approach balances user experience, business requirements
                and practical implementation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {principles.map((item) => (
                <article
                  key={item.title}
                  className={`p-6 rounded-2xl border transition-all ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06] hover:border-purple-500/20"
                      : "bg-white border-gray-200 hover:border-purple-200 hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-4 ${
                      d
                        ? "bg-purple-500/10 border-purple-500/20 text-purple-400"
                        : "bg-purple-50 border-purple-100 text-purple-600"
                    }`}
                  >
                    {item.icon}
                  </div>

                  <h3
                    className={`text-[14px] font-bold mb-2 ${
                      d ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-[13px] leading-relaxed ${
                      d ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>

            <CtaStrip
              heading="Ready to discuss your product design?"
              sub="Tell us what you are building and we can discuss the right UI/UX approach for your project."
            />
          </div>
        </section>

        {/* =====================================================
            TOOLS
        ===================================================== */}

        <section
          aria-labelledby="tools-heading"
          className={`py-16 border-b ${
            d
              ? "border-white/[0.06] bg-[#050505]"
              : "border-gray-100 bg-[#fafafa]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                id="tools-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Design Tools & Workflow
              </h2>

              <p
                className={`text-base ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Modern tools for product design, prototyping, research and
                developer collaboration.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools.map((cat) => (
                <div
                  key={cat.category}
                  className={`p-5 rounded-2xl border ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06]"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <p className="text-[11px] font-black uppercase tracking-widest mb-3 text-purple-500">
                    {cat.category}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((tool) => (
                      <span
                        key={tool}
                        className={`text-[11px] font-medium px-2.5 py-1 rounded-md border ${
                          d
                            ? "bg-white/[0.04] border-white/[0.08] text-gray-300"
                            : "bg-white border-gray-200 text-gray-700"
                        }`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section
          aria-labelledby="process-heading"
          className={`py-16 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                id="process-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Our UI/UX Design Process
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                A clear process from discovery and structure to final design
                and developer handoff.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {designProcess.map((step) => (
                <article
                  key={step.n}
                  className={`p-6 rounded-2xl border ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06]"
                      : "bg-[#fafafa] border-gray-200"
                  }`}
                >
                  <div
                    className={`text-[13px] font-black mb-3 ${
                      d ? "text-purple-400" : "text-purple-600"
                    }`}
                  >
                    {step.n}
                  </div>

                  <h3
                    className={`text-[14px] font-bold mb-2 ${
                      d ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-[13px] leading-relaxed ${
                      d ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {step.desc}
                  </p>
                </article>
              ))}
            </div>

            <CtaStrip
              heading="Have a product idea or an existing interface?"
              sub="Share your requirements with us and we can discuss the next design steps."
            />
          </div>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}

        <section
          aria-labelledby="faq-heading"
          className={`py-16 border-b ${
            d
              ? "border-white/[0.06] bg-[#050505]"
              : "border-gray-100 bg-[#fafafa]"
          }`}
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                id="faq-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                UI/UX Design FAQ
              </h2>

              <p
                className={`text-base ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Common questions about our product design services.
              </p>
            </div>

            <div className="space-y-3 mb-10">
              {faqs.map((faq, i) => {
                const isOpen = activeFaq === i;

                return (
                  <div
                    key={faq.q}
                    className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? d
                          ? "border-purple-500/40 bg-purple-600/5"
                          : "border-purple-200 bg-purple-50/50"
                        : d
                          ? "border-white/[0.06] bg-white/[0.02]"
                          : "border-gray-200 bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`uiux-faq-${i}`}
                      className="w-full p-5 text-left flex items-start justify-between gap-4"
                    >
                      <span
                        className={`text-[14px] font-bold ${
                          isOpen
                            ? "text-purple-500"
                            : d
                              ? "text-white"
                              : "text-gray-900"
                        }`}
                      >
                        {faq.q}
                      </span>

                      <span
                        className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center ${
                          isOpen
                            ? "bg-purple-600 text-white"
                            : d
                              ? "bg-white/[0.06] text-gray-500"
                              : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                      </span>
                    </button>

                    <div
                      id={`uiux-faq-${i}`}
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div
                        className={`px-5 pb-5 pt-0 border-t text-[14px] leading-relaxed ${
                          d
                            ? "border-white/[0.06] text-gray-400"
                            : "border-purple-100 text-gray-600"
                        }`}
                      >
                        <p className="pt-4">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <CtaStrip
              heading="Still have design questions?"
              sub="Contact DevZore and tell us about your product, users and design requirements."
            />
          </div>
        </section>

        {/* =====================================================
            RELATED SERVICES - PROFESSIONAL CARDS
        ===================================================== */}

        <section
          aria-labelledby="related-services-heading"
          className={`py-16 border-b ${
            d
              ? "border-white/[0.06] bg-[#030303]"
              : "border-gray-100 bg-[#fafafa]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-9">
              <p
                className={`text-[11px] font-black uppercase tracking-[0.18em] mb-3 ${
                  d ? "text-purple-400" : "text-purple-600"
                }`}
              >
                Related Services
              </p>

              <h2
                id="related-services-heading"
                className={`text-2xl md:text-3xl font-black ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Explore More Development Services
              </h2>

              <p
                className={`mt-3 text-sm max-w-2xl leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Combine professional UI/UX design with the development services
                needed to turn your product into a complete digital solution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedServices.map((service) => {
                const relatedStyles = {
                  orange: {
                    badge: d
                      ? "bg-orange-500/10 border-orange-500/20 text-orange-400"
                      : "bg-orange-50 border-orange-200 text-orange-600",
                    icon: d
                      ? "bg-orange-500/10 border-orange-500/20 text-orange-400"
                      : "bg-orange-50 border-orange-100 text-orange-600",
                  },
                  purple: {
                    badge: d
                      ? "bg-purple-500/10 border-purple-500/20 text-purple-400"
                      : "bg-purple-50 border-purple-200 text-purple-600",
                    icon: d
                      ? "bg-purple-500/10 border-purple-500/20 text-purple-400"
                      : "bg-purple-50 border-purple-100 text-purple-600",
                  },
                  blue: {
                    badge: d
                      ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
                      : "bg-blue-50 border-blue-200 text-blue-600",
                    icon: d
                      ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
                      : "bg-blue-50 border-blue-100 text-blue-600",
                  },
                };

                const style = relatedStyles[service.color];

                return (
                  <article
                    key={service.path}
                    className={`group relative p-6 md:p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                      d
                        ? "bg-white/[0.02] border-white/[0.08] hover:border-purple-500/30 hover:bg-white/[0.035]"
                        : "bg-white border-gray-200 hover:border-purple-200 hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
                    }`}
                  >
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full border text-[10px] font-black mb-5 ${style.badge}`}
                    >
                      {service.badge}
                    </span>

                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className={`w-11 h-11 flex-shrink-0 rounded-xl border flex items-center justify-center ${style.icon}`}
                      >
                        {service.icon}
                      </div>

                      <div className="min-w-0">
                        <h3
                          className={`text-[16px] md:text-[17px] font-black leading-tight ${
                            d ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {service.title}
                        </h3>

                        <p
                          className={`text-[11px] md:text-[12px] font-semibold mt-1 ${
                            d ? "text-gray-500" : "text-gray-400"
                          }`}
                        >
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <p
                      className={`text-[13px] leading-6 mb-5 ${
                        d ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {service.description}
                    </p>

                    <div className="space-y-2.5 mb-6">
                      {service.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-2.5"
                        >
                          <CheckCircle
                            size={14}
                            className="text-purple-500 flex-shrink-0"
                          />

                          <span
                            className={`text-[12px] ${
                              d ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={service.path}
                      aria-label={`Learn more about ${service.title}`}
                      className="inline-flex items-center gap-2 text-[13px] font-bold text-purple-500 hover:text-purple-400 transition-colors group/link"
                    >
                      Learn more

                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover/link:translate-x-1"
                      />
                    </Link>
                  </article>
                );
              })}
            </div>

            <div className="mt-7 text-center">
              <Link
                to="/allservices"
                className={`inline-flex items-center gap-2 text-[13px] font-bold transition-colors ${
                  d
                    ? "text-gray-400 hover:text-purple-400"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                Explore All DevZore Services
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div
              className={`p-8 md:p-10 rounded-3xl border text-center ${
                d
                  ? "bg-white/[0.02] border-white/[0.06]"
                  : "bg-[#fafafa] border-gray-200"
              }`}
            >
              <h2
                className={`text-3xl font-black mb-4 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Ready to Design Your Product?
              </h2>

              <p
                className={`text-base mb-8 max-w-2xl mx-auto ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Whether you need a new website interface, mobile app, SaaS
                dashboard or redesign of an existing product, tell us what
                you're building and we can discuss the right design approach.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
                >
                  Get Free Design Consultation
                  <ArrowRight size={15} />
                </Link>

                <a
                  href="https://wa.me/923348004300?text=Hi%20DevZore!%20I%20need%20UI%2FUX%20design%20for%20my%20product."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
                >
                  WhatsApp Now
                </a>

                <Link
                  to="/allservices"
                  className={`flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-sm border transition-all ${
                    d
                      ? "border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]"
                      : "border-gray-200 text-gray-700 hover:border-gray-300"
                  }`}
                >
                  View All Services
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default UiUxDesign;