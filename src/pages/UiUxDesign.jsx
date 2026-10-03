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
  Code2,
  Rocket,
} from "lucide-react";

const UiUxDesign = ({ isDark }) => {
  const d = isDark;

  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* =====================================================
     UI/UX SERVICES
  ===================================================== */

  const services = [
    {
      icon: <Users size={20} />,
      color: "purple",
      title: "UX Research & Strategy",
      desc: "UX research, competitor analysis, user flows, journey mapping and information architecture to understand users and create a practical foundation for product design.",
    },
    {
      icon: <Eye size={20} />,
      color: "blue",
      title: "Wireframing & UX Design",
      desc: "Structured wireframes for websites, applications and digital products that define page hierarchy, user journeys, interactions and content before visual UI design begins.",
    },
    {
      icon: <Palette size={20} />,
      color: "pink",
      title: "User Interface (UI) Design",
      desc: "Modern user interface design with clear typography, visual hierarchy, spacing, components, interaction states and brand-aligned interface systems.",
    },
    {
      icon: <Monitor size={20} />,
      color: "green",
      title: "Website UI/UX Design",
      desc: "Professional website design for business websites, landing pages and web applications with responsive layouts, intuitive navigation and conversion-focused user experiences.",
    },
    {
      icon: <Smartphone size={20} />,
      color: "orange",
      title: "Mobile App UI/UX Design",
      desc: "Mobile UI/UX design for iOS, Android and cross-platform applications with intuitive navigation, responsive interfaces and practical mobile interaction patterns.",
    },
    {
      icon: <Layers size={20} />,
      color: "indigo",
      title: "SaaS UI/UX Design",
      desc: "SaaS UI/UX design for subscription products, web applications, account areas, onboarding experiences, settings, complex workflows and scalable product interfaces.",
    },
    {
      icon: <BarChart3 size={20} />,
      color: "cyan",
      title: "Dashboard UI/UX Design",
      desc: "Dashboard UI design for admin panels, analytics platforms and business applications with clear tables, charts, filters, navigation and data-heavy interfaces.",
    },
    {
      icon: <RefreshCw size={20} />,
      color: "amber",
      title: "Website Redesign Services",
      desc: "Website redesign services for outdated or difficult-to-use interfaces, improving visual presentation, responsive behavior, information structure and overall user experience.",
    },
    {
      icon: <Target size={20} />,
      color: "red",
      title: "Product Design",
      desc: "Digital product design covering UX strategy, user flows, interface design, prototypes and reusable components for websites, SaaS products and mobile applications.",
    },
    {
      icon: <Zap size={20} />,
      color: "purple",
      title: "Interactive Prototyping",
      desc: "Interactive Figma prototypes that demonstrate important user journeys, navigation and interactions before development begins.",
    },
    {
      icon: <Layers size={20} />,
      color: "blue",
      title: "Design System Development",
      desc: "Reusable components, typography, spacing, interface patterns and design tokens that help maintain consistency as a digital product grows.",
    },
    {
      icon: <Code2 size={20} />,
      color: "green",
      title: "Developer Handoff",
      desc: "Organized Figma files, reusable components, assets, responsive layouts and implementation guidance prepared for frontend development teams.",
    },
  ];

  /* =====================================================
     PRODUCT TYPES
  ===================================================== */

  const productTypes = [
    {
      title: "Business Website Design",
      desc: "Professional business website design focused on clear messaging, strong visual hierarchy, responsive layouts and simple user journeys.",
    },
    {
      title: "Custom Website Design",
      desc: "Custom website design created around your brand, content, services and business requirements instead of relying on a generic visual structure.",
    },
    {
      title: "Responsive Website Design",
      desc: "Responsive website interfaces planned for desktop, tablet and mobile screen sizes with consistent usability across devices.",
    },
    {
      title: "Web Application Design",
      desc: "UI/UX design for custom web applications, portals, internal tools and interactive business software.",
    },
    {
      title: "Mobile Application Design",
      desc: "User experience and interface design for mobile products, including navigation, onboarding, account flows and application screens.",
    },
    {
      title: "SaaS & Dashboard Design",
      desc: "Product interfaces for SaaS platforms, analytics dashboards, admin systems and data-heavy business applications.",
    },
  ];

  /* =====================================================
     PRINCIPLES
  ===================================================== */

  const principles = [
    {
      icon: <Target size={16} />,
      title: "Business-Focused Design",
      desc: "Design decisions consider product goals, user needs and business requirements rather than focusing only on visual appearance.",
    },
    {
      icon: <Users size={16} />,
      title: "User-Centered UX",
      desc: "User flows, navigation and interactions are planned around the tasks people need to complete within the product.",
    },
    {
      icon: <Smartphone size={16} />,
      title: "Responsive by Design",
      desc: "Layouts are considered across desktop, tablet and mobile experiences instead of treating responsive design as an afterthought.",
    },
    {
      icon: <Eye size={16} />,
      title: "Clear Visual Hierarchy",
      desc: "Typography, spacing, contrast and content hierarchy are used to make interfaces easier to understand and navigate.",
    },
    {
      icon: <Layers size={16} />,
      title: "Reusable Design Systems",
      desc: "Component-based design helps maintain visual consistency and makes future product expansion easier.",
    },
    {
      icon: <Code2 size={16} />,
      title: "Developer-Friendly Handoff",
      desc: "Designs are organized with practical components, states and specifications so implementation is clearer for developers.",
    },
  ];

  /* =====================================================
     DESIGN PROCESS
  ===================================================== */

  const designProcess = [
    {
      n: "01",
      title: "Discovery & UX Research",
      desc: "We understand your business, target users, product requirements, competitors and existing challenges before defining the design direction.",
    },
    {
      n: "02",
      title: "Information Architecture",
      desc: "Navigation, content hierarchy and user flows are organized so users can move through the website or application naturally.",
    },
    {
      n: "03",
      title: "Wireframing",
      desc: "Low-fidelity wireframes establish layouts, content placement and interactions before detailed visual design begins.",
    },
    {
      n: "04",
      title: "UI Design",
      desc: "Wireframes are transformed into polished interfaces using typography, spacing, visual hierarchy, components and brand-aligned styling.",
    },
    {
      n: "05",
      title: "Prototype & Review",
      desc: "Interactive prototypes help demonstrate important flows and allow the product experience to be reviewed before implementation.",
    },
    {
      n: "06",
      title: "Developer Handoff",
      desc: "Final Figma files, components, assets and implementation details are organized for development and future product work.",
    },
  ];

  /* =====================================================
     FAQ
  ===================================================== */

  const faqs = [
    {
      q: "What is UI/UX design?",
      a: "UI/UX design combines user interface design and user experience design. UX focuses on product structure, user flows, navigation and usability, while UI focuses on the visual interface including typography, spacing, colours, components and interaction states.",
    },
    {
      q: "What UI/UX design services does DevZore provide?",
      a: "DevZore provides UI/UX design services including UX research, user flows, wireframing, website UI design, mobile app UI/UX design, SaaS UI/UX design, dashboard design, interactive prototypes, design systems, website redesign and developer handoff.",
    },
    {
      q: "How much does UI/UX design cost?",
      a: "UI/UX design cost depends on the number of screens, product complexity, responsive requirements, research, prototypes and design-system requirements. DevZore reviews the project scope before preparing a project-specific proposal.",
    },
    {
      q: "Do you provide website UI/UX design?",
      a: "Yes. DevZore provides website UI/UX design for business websites, landing pages, service websites, web applications and other digital experiences. Designs can include desktop, tablet and mobile layouts depending on project requirements.",
    },
    {
      q: "Do you provide Figma source files?",
      a: "Yes. Project deliverables can include organized Figma source files, screens, reusable components, design tokens, assets and prototype connections according to the agreed project scope.",
    },
    {
      q: "Can you design mobile applications?",
      a: "Yes. We provide mobile app UI/UX design for iOS, Android and cross-platform applications, including onboarding, navigation, account screens, dashboards, forms and other application workflows.",
    },
    {
      q: "Do you provide SaaS UI/UX design?",
      a: "Yes. DevZore designs SaaS interfaces including onboarding, dashboards, account settings, subscription areas, tables, analytics, admin panels and other product-specific workflows.",
    },
    {
      q: "Can you design dashboards and admin panels?",
      a: "Yes. Dashboard UI/UX design can include navigation, charts, tables, filters, forms, analytics views, user management and other data-driven interfaces based on the application requirements.",
    },
    {
      q: "Can you redesign an existing website?",
      a: "Yes. Our website redesign services can improve outdated layouts, navigation, visual hierarchy, mobile responsiveness and important user journeys while considering your existing brand and business requirements.",
    },
    {
      q: "Do you create responsive website designs?",
      a: "Yes. Responsive website design is planned across desktop, tablet and mobile layouts so the interface can adapt clearly to different screen sizes.",
    },
    {
      q: "What is the difference between UI design and UX design?",
      a: "UX design focuses on how users move through and interact with a product, while UI design focuses on how the interface looks and communicates visually. Both disciplines work together to create a complete digital product experience.",
    },
    {
      q: "Do you conduct UX research?",
      a: "UX research can be included depending on project requirements. This may involve competitor analysis, user-flow evaluation, journey mapping, interviews, product review and usability feedback.",
    },
    {
      q: "Can you create a design system?",
      a: "Yes. A design system can include reusable components, typography, spacing rules, colors, states, interface patterns and design tokens to improve consistency across a product.",
    },
    {
      q: "Can you design both the website and help develop it?",
      a: "Yes. DevZore also provides web development services, allowing UI/UX design to be combined with frontend, backend or full-stack development when required.",
    },
    {
      q: "Do you provide UI/UX design services for international clients?",
      a: "DevZore provides remote UI/UX design services for startups, founders and businesses that can work with our design and development process regardless of location.",
    },
  ];

  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 5);

  /* =====================================================
     RELATED SERVICES
  ===================================================== */

  const relatedServices = [
    {
      icon: <Monitor size={21} />,
      title: "Web Development",
      desc: "Turn your UI/UX designs into responsive, modern and production-ready websites and web applications.",
      path: "/web-development",
    },
    {
      icon: <Smartphone size={21} />,
      title: "Mobile App Development",
      desc: "Build mobile applications with modern interfaces, responsive experiences and application-specific functionality.",
      path: "/mobile-apps",
    },
    {
      icon: <Rocket size={21} />,
      title: "SaaS Product Development",
      desc: "Design and develop SaaS products with dashboards, user management, subscriptions, APIs and scalable application architecture.",
      path: "/saas-product-development",
    },
  ];

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
     SCHEMA
  ===================================================== */

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://devzore.com/ui-ux-design#service",
    name: "UI/UX Design Services",
    url: "https://devzore.com/ui-ux-design",
    description:
      "Professional UI/UX design services for websites, mobile apps, SaaS products, dashboards and digital products including UX research, wireframes, Figma UI design, prototypes, design systems and website redesign.",
    serviceType: "UI/UX Design",
    provider: {
      "@id": "https://devzore.com/#organization",
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "UI/UX Design Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.desc,
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const breadcrumbSchema = {
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
  };

  return (
    <>
      <Helmet>
        {/* Title, description, canonical, OG and Twitter metadata
            are handled globally by SEOManager. */}

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
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
          className={`pt-27 pb-10 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <div className="flex flex-wrap gap-3 mb-5">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${
                      d
                        ? "bg-purple-600/10 border-purple-500/20 text-purple-400"
                        : "bg-purple-50 border-purple-200 text-purple-700"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    UI/UX Design Services
                  </div>

                  <div
                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold border ${
                      d
                        ? "bg-green-500/10 border-green-500/20 text-green-400"
                        : "bg-green-50 border-green-200 text-green-700"
                    }`}
                  >
                    <Globe size={11} />
                    Remote Design Services
                  </div>
                </div>

                <h1
                  id="uiux-heading"
                  className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5 ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  Professional UI/UX Design Services{" "}
                  <span className="text-purple-600">
                    for Digital Products
                  </span>
                </h1>

                <p
                  className={`text-lg font-semibold mb-4 ${
                    d ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Website UI/UX · Mobile Apps · SaaS · Dashboards · Product
                  Design · Website Redesign
                </p>

                <p
                  className={`text-base leading-relaxed mb-4 ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  DevZore is a{" "}
                  <strong className={d ? "text-white" : "text-gray-900"}>
                    UI/UX design company
                  </strong>{" "}
                  providing user interface design and user experience design
                  for websites, web applications, mobile apps, SaaS products
                  and dashboards. We create clear, modern and responsive
                  interfaces around your users, brand and business goals.
                </p>

                <p
                  className={`text-base leading-relaxed mb-7 ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  From UX research and wireframes to custom website design,
                  Figma UI design, interactive prototypes and developer
                  handoff, our UI/UX design services help turn product ideas
                  into practical digital experiences ready for development.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    onClick={scrollTop}
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                  >
                    Discuss Your Design Project
                    <ArrowRight size={14} />
                  </Link>

                  <a
                    href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20a%20UI%2FUX%20design%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* DELIVERABLES */}

              <div
                className={`p-7 lg:p-8 rounded-3xl border ${
                  d
                    ? "bg-white/[0.02] border-white/[0.06]"
                    : "bg-[#fafafa] border-gray-200"
                }`}
              >
                <p
                  className={`text-[11px] font-black uppercase tracking-widest mb-5 ${
                    d ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  UI/UX Design Deliverables
                </p>

                <div className="space-y-3">
                  {[
                    {
                      item: "UX Research & User Flows",
                      note: "Product structure and user journeys",
                    },
                    {
                      item: "Wireframes",
                      note: "Screen layouts before visual design",
                    },
                    {
                      item: "Figma UI Design",
                      note: "Modern high-fidelity interfaces",
                    },
                    {
                      item: "Responsive Website Design",
                      note: "Desktop, tablet and mobile layouts",
                    },
                    {
                      item: "Interactive Prototypes",
                      note: "Preview important product interactions",
                    },
                    {
                      item: "Design Systems",
                      note: "Reusable components and visual rules",
                    },
                    {
                      item: "Developer Handoff",
                      note: "Implementation-ready design files",
                    },
                    {
                      item: "Design Review Support",
                      note: "Support during product implementation",
                    },
                  ].map((item) => (
                    <div
                      key={item.item}
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
                          className={`text-[13px] font-bold ${
                            d ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {item.item}
                        </p>

                        <p
                          className={`text-[11px] mt-0.5 ${
                            d ? "text-gray-500" : "text-gray-500"
                          }`}
                        >
                          {item.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className={`mt-4 p-4 rounded-xl ${
                    d ? "bg-purple-600/5" : "bg-purple-50"
                  }`}
                >
                  <p
                    className={`text-[12px] font-semibold text-center ${
                      d ? "text-purple-400" : "text-purple-700"
                    }`}
                  >
                    UI/UX design for websites, SaaS products & mobile apps
                  </p>
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
          className={`py-12 border-b ${
            d
              ? "border-white/[0.06] bg-[#050505]"
              : "border-gray-100 bg-[#fafafa]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-9">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                UI/UX Design Services
              </p>

              <h2
                id="services-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                UI/UX Design Services We Provide
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Complete UI and UX design services covering research,
                wireframes, user interface design, responsive website design,
                mobile applications, SaaS products, dashboards and developer
                handoff.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((item) => (
                <article
                  key={item.title}
                  className={`p-6 rounded-2xl border transition-all hover:border-purple-500/25 ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]"
                      : "bg-white border-gray-200 hover:shadow-sm"
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
                    className={`text-[15px] font-bold mb-2 ${
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
            PRODUCT TYPES
        ===================================================== */}

        <section
          aria-labelledby="product-types-heading"
          className={`py-12 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-9">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                Digital Product Design
              </p>

              <h2
                id="product-types-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Website, Mobile App & SaaS UI/UX Design
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Professional UI/UX and product design for different types of
                websites, applications and digital platforms.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {productTypes.map((item) => (
                <article
                  key={item.title}
                  className={`p-6 rounded-2xl border ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06]"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <CheckCircle
                    size={16}
                    className="text-purple-500 mb-3"
                  />

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
            APPROACH
        ===================================================== */}

        <section
          aria-labelledby="approach-heading"
          className={`py-12 border-b ${
            d
              ? "border-white/[0.06] bg-[#050505]"
              : "border-gray-100 bg-[#fafafa]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-9">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                Our Design Approach
              </p>

              <h2
                id="approach-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                User Experience Design Built for Real Products
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Our approach combines user experience design, interface
                clarity, responsive layouts and practical implementation to
                create digital products that are easier to understand and
                develop.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {principles.map((item) => (
                <article
                  key={item.title}
                  className={`p-6 rounded-2xl border ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06]"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                      d
                        ? "bg-purple-500/10 text-purple-400"
                        : "bg-purple-50 text-purple-600"
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
            SEO / SEARCH INTENT CONTENT
        ===================================================== */}

        <section
          aria-labelledby="professional-design-heading"
          className={`py-12 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-9 items-start">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                  Professional Product Design
                </p>

                <h2
                  id="professional-design-heading"
                  className={`text-3xl font-black mb-4 ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  Custom Website Design & Digital Product UI/UX
                </h2>

                <p
                  className={`text-sm leading-7 mb-3 ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  A professional website design needs more than attractive
                  visuals. Navigation, content hierarchy, responsive behavior,
                  calls to action and user journeys all influence how people
                  interact with a website. Our website UI/UX design process
                  considers these elements together.
                </p>

                <p
                  className={`text-sm leading-7 ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Whether you need a custom website design, business website
                  design, mobile UI/UX design, SaaS UI/UX design, dashboard
                  interface or complete website redesign, DevZore can prepare
                  the product experience and interface for development.
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border ${
                  d
                    ? "bg-white/[0.02] border-white/[0.06]"
                    : "bg-[#fafafa] border-gray-200"
                }`}
              >
                <p
                  className={`text-[12px] font-black uppercase tracking-widest mb-4 ${
                    d ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Design Expertise
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "UI/UX Design",
                    "UI Design",
                    "UX Design",
                    "Website UI/UX Design",
                    "Professional Website Design",
                    "Custom Website Design",
                    "Business Website Design",
                    "Modern Website Design",
                    "Responsive Website Design",
                    "Mobile UI/UX Design",
                    "App UI/UX Design",
                    "SaaS UI/UX Design",
                    "Dashboard UI/UX Design",
                    "User Experience Design",
                    "User Interface Design",
                    "Product Design",
                    "Digital Product Design",
                    "UX Research",
                    "Website Redesign",
                  ].map((item) => (
                    <span
                      key={item}
                      className={`px-3 py-2 rounded-lg border text-[11px] font-semibold ${
                        d
                          ? "bg-white/[0.03] border-white/[0.08] text-gray-300"
                          : "bg-white border-gray-200 text-gray-700"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section
          aria-labelledby="process-heading"
          className={`py-12 border-b ${
            d
              ? "border-white/[0.06] bg-[#050505]"
              : "border-gray-100 bg-[#fafafa]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-9">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                Our Process
              </p>

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
                A structured design workflow from UX research and wireframes
                to final interface design and developer handoff.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {designProcess.map((step) => (
                <article
                  key={step.n}
                  className={`p-6 rounded-2xl border ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06]"
                      : "bg-white border-gray-200"
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
          </div>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}

        <section
          aria-labelledby="faq-heading"
          className={`py-12 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-9">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                Questions & Answers
              </p>

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
                Common questions about website UI/UX design, mobile app
                design, SaaS interfaces, Figma, redesigns and product design.
              </p>
            </div>

            <div className="space-y-3">
              {visibleFaqs.map((faq, index) => {
                const originalIndex = faqs.findIndex(
                  (item) => item.q === faq.q
                );

                const isOpen = activeFaq === originalIndex;

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
                      onClick={() =>
                        setActiveFaq(isOpen ? null : originalIndex)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`uiux-faq-${originalIndex}`}
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
                        {isOpen ? (
                          <Minus size={13} />
                        ) : (
                          <Plus size={13} />
                        )}
                      </span>
                    </button>

                    <div
                      id={`uiux-faq-${originalIndex}`}
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

            {faqs.length > 5 && (
              <div className="flex justify-center mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowAllFaqs((prev) => !prev);
                    setActiveFaq(null);
                  }}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border text-[13px] font-bold transition-all ${
                    d
                      ? "border-white/10 bg-white/[0.02] text-gray-300 hover:border-purple-500/30 hover:text-purple-400"
                      : "border-gray-200 bg-white text-gray-700 hover:border-purple-200 hover:text-purple-600"
                  }`}
                >
                  {showAllFaqs ? (
                    <>
                      Show Less
                      <Minus size={14} />
                    </>
                  ) : (
                    <>
                      Show More FAQs
                      <Plus size={14} />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            RELATED SERVICES
        ===================================================== */}

        <section
          aria-labelledby="related-services-heading"
          className={`py-12 border-b ${
            d
              ? "border-white/[0.06] bg-[#050505]"
              : "border-gray-100 bg-[#fafafa]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-7">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                Explore More
              </p>

              <h2
                id="related-services-heading"
                className={`text-2xl md:text-3xl font-black ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Related Design & Development Services
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {relatedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={scrollTop}
                  className={`group p-7 rounded-3xl border transition-all duration-300 ${
                    d
                      ? "bg-white/[0.015] border-white/[0.08] hover:bg-white/[0.035] hover:border-purple-500/30"
                      : "bg-white border-gray-200 hover:border-purple-200 hover:shadow-lg"
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:-translate-y-1 ${
                      d
                        ? "bg-purple-500/10 text-purple-400"
                        : "bg-purple-50 text-purple-600"
                    }`}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className={`text-lg font-black mb-2 ${
                      d ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed mb-5 ${
                      d ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {service.desc}
                  </p>

                  <span className="inline-flex items-center gap-2 text-sm font-bold text-purple-500 group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-7">
              <Link
                to="/allservices"
                onClick={scrollTop}
                className={`inline-flex items-center gap-2 text-[13px] font-bold transition-colors ${
                  d
                    ? "text-gray-400 hover:text-purple-400"
                    : "text-gray-600 hover:text-purple-700"
                }`}
              >
                View All DevZore Services
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="pt-12 pb-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
              Start Your Design Project
            </p>

            <h2
              className={`text-3xl font-black mb-3 ${
                d ? "text-white" : "text-gray-900"
              }`}
            >
              Need Professional UI/UX Design?
            </h2>

            <p
              className={`text-base mb-7 max-w-2xl mx-auto leading-relaxed ${
                d ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Tell us about your website, mobile app, SaaS platform or digital
              product. We can discuss UX research, wireframes, UI design,
              responsive layouts, prototypes, website redesign and developer
              handoff based on your requirements.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                onClick={scrollTop}
                className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
              >
                Discuss Your Design Project
                <ArrowRight size={15} />
              </Link>

              <a
                href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20a%20UI%2FUX%20design%20project."
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-sm border transition-all ${
                  d
                    ? "border-white/10 text-gray-300 hover:border-[#25D366]/30 hover:text-[#25D366]"
                    : "border-gray-200 text-gray-700 hover:border-[#25D366]/40 hover:text-[#159447]"
                }`}
              >
                WhatsApp DevZore
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default UiUxDesign;