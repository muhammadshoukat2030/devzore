import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  Code2,
  Globe,
  CreditCard,
  Package,
  BarChart3,
  Plus,
  Minus,
  Truck,
  Users,
  Search,
  Bell,
  Lock,
  Server,
  Palette,
} from "lucide-react";

const ECommerce = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  // ======================================================
  // E-COMMERCE CAPABILITIES
  // ======================================================

  const features = [
    {
      icon: <ShoppingCart size={20} />,
      color: "purple",
      title: "Custom E-Commerce Website Development",
      desc: "Custom online stores and responsive storefronts designed around your products, customers and buying journey, with clear navigation, product discovery and checkout experiences.",
    },
    {
      icon: <CreditCard size={20} />,
      color: "green",
      title: "Payment Gateway Integration",
      desc: "Integrate suitable local and international payment gateways, including card payments, digital wallets and other supported payment methods based on your business requirements.",
    },
    {
      icon: <Package size={20} />,
      color: "blue",
      title: "Inventory & Order Management",
      desc: "Manage products, stock levels, orders, statuses and fulfilment workflows through a structured administration system designed around your commerce operations.",
    },
    {
      icon: <Users size={20} />,
      color: "orange",
      title: "Multi-Vendor Marketplace Development",
      desc: "Custom marketplace solutions with vendor onboarding, product management, commissions, vendor dashboards, order workflows and administrative controls.",
    },
    {
      icon: <Search size={20} />,
      color: "cyan",
      title: "Product Search & Filtering",
      desc: "Help customers discover products through search, categories, filters, sorting and structured product information for small or large product catalogues.",
    },
    {
      icon: <BarChart3 size={20} />,
      color: "indigo",
      title: "Sales & Analytics Dashboards",
      desc: "Commerce dashboards for monitoring orders, revenue, products, inventory and customer activity so your team can understand store performance more clearly.",
    },
    {
      icon: <Truck size={20} />,
      color: "amber",
      title: "Shipping & Logistics Integration",
      desc: "Connect suitable courier and logistics services for shipping workflows, tracking information and fulfilment based on available provider APIs.",
    },
    {
      icon: <Bell size={20} />,
      color: "pink",
      title: "Promotions & Customer Engagement",
      desc: "Support discount codes, promotional campaigns, notifications, email integrations and other customer engagement features according to your store requirements.",
    },
    {
      icon: <Lock size={20} />,
      color: "red",
      title: "Secure E-Commerce Development",
      desc: "Security-conscious development with authentication, protected APIs, validation, access controls and careful handling of customer and transaction-related data.",
    },
  ];

  // ======================================================
  // TECHNOLOGY STACK
  // ======================================================

  const techStack = [
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    },
    {
      category: "Payments",
      items: ["Stripe", "PayPal", "JazzCash", "Easypaisa"],
    },
    {
      category: "Infrastructure",
      items: ["Vercel", "AWS", "Cloudinary", "Cloudflare"],
    },
    {
      category: "Commerce Features",
      items: [
        "Product Management",
        "Order Management",
        "Inventory",
        "Analytics",
      ],
    },
  ];

  // ======================================================
  // DEVELOPMENT PROCESS
  // ======================================================

  const process = [
    {
      n: "01",
      title: "Business & Product Discovery",
      desc: "We understand your products, customers, catalogue structure, payment requirements, shipping workflow and administrative needs before defining the e-commerce solution.",
    },
    {
      n: "02",
      title: "Store Architecture & UI/UX",
      desc: "We plan the customer journey and important shopping experiences including categories, product pages, search, cart, checkout and customer accounts.",
    },
    {
      n: "03",
      title: "E-Commerce Platform Development",
      desc: "We develop the storefront, authentication, product management, cart, checkout, inventory and administration features using a maintainable architecture.",
    },
    {
      n: "04",
      title: "Payments & Integrations",
      desc: "Required payment gateways, shipping providers, email services, analytics tools and other supported third-party systems are integrated according to the project scope.",
    },
    {
      n: "05",
      title: "Testing & Optimisation",
      desc: "We test important customer journeys, responsive layouts, forms, checkout flows, integrations, performance and technical SEO foundations before launch.",
    },
    {
      n: "06",
      title: "Deployment & Support",
      desc: "After final review, we deploy the platform, assist with technical handover and can provide ongoing maintenance, improvements and feature development when required.",
    },
  ];

  // ======================================================
  // FAQ
  // ======================================================

  const faqs = [
    {
      q: "How much does custom e-commerce website development cost?",
      a: "The cost depends on your catalogue size, design requirements, payment integrations, shipping workflow, customer features, marketplace requirements and other project-specific needs. After reviewing your requirements, DevZore can provide a tailored proposal.",
    },
    {
      q: "How long does it take to build an e-commerce website?",
      a: "The development timeline depends on the size and complexity of the platform. A focused online store and a large multi-vendor marketplace require different levels of design, development, integration and testing. We define project milestones after understanding the requirements.",
    },
    {
      q: "Can you develop a custom online store for my business?",
      a: "Yes. DevZore can build a custom e-commerce website around your products, customers, ordering process, payment requirements, inventory workflow and administration needs.",
    },
    {
      q: "Can you integrate JazzCash and Easypaisa?",
      a: "JazzCash, Easypaisa and other payment services can be integrated when the required merchant account, API access and provider capabilities are available for the project.",
    },
    {
      q: "Can you build a multi-vendor marketplace?",
      a: "Yes. A custom marketplace can include vendor registration, vendor dashboards, product management, commissions, order workflows, customer accounts and administrative controls based on your business model.",
    },
    {
      q: "Will my e-commerce website be SEO-friendly?",
      a: "We can implement technical SEO foundations such as crawlable page structures, descriptive URLs, metadata, structured data where appropriate, internal linking, responsive layouts and performance optimisation. Search rankings depend on many additional factors and cannot be guaranteed.",
    },
    {
      q: "Can you migrate an existing e-commerce store?",
      a: "Yes, depending on the existing platform and available data access. Migration can include products, categories, customers, orders and other supported information. The migration approach is reviewed before implementation.",
    },
    {
      q: "Can shipping or courier services be integrated?",
      a: "Yes, where a courier or logistics provider offers suitable API access. Shipping rates, tracking information and fulfilment workflows can be integrated according to provider capabilities and your business requirements.",
    },
    {
      q: "Will I receive the source code?",
      a: "Source code ownership, repositories, design files, deployment access and technical handover terms can be clearly defined in the project agreement so both sides understand what is included.",
    },
  ];

  // ======================================================
  // RELATED SERVICES
  // ======================================================

  const relatedServices = [
    {
      icon: <Code2 size={22} />,
      title: "Web Development",
      desc: "Custom web development for responsive business websites, applications and digital platforms.",
      path: "/web-development",
    },
    {
      icon: <Server size={22} />,
      title: "Backend & API Development",
      desc: "APIs, authentication, databases and server-side functionality for modern commerce platforms.",
      path: "/backend-api",
    },
    {
      icon: <Palette size={22} />,
      title: "UI/UX Design",
      desc: "Design product discovery, shopping, cart and checkout experiences before development.",
      path: "/ui-ux-design",
    },
  ];

  // ======================================================
  // COLOR MAP
  // ======================================================

  const colorMap = {
    purple: d
      ? "bg-purple-500/10 border-purple-500/20 text-purple-400"
      : "bg-purple-50 border-purple-100 text-purple-600",

    green: d
      ? "bg-green-500/10 border-green-500/20 text-green-400"
      : "bg-green-50 border-green-100 text-green-600",

    blue: d
      ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
      : "bg-blue-50 border-blue-100 text-blue-600",

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

    pink: d
      ? "bg-pink-500/10 border-pink-500/20 text-pink-400"
      : "bg-pink-50 border-pink-100 text-pink-600",

    red: d
      ? "bg-red-500/10 border-red-500/20 text-red-400"
      : "bg-red-50 border-red-100 text-red-600",
  };

  // ======================================================
  // STRUCTURED DATA
  // ======================================================

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://devzore.com/ecommerce#service",
    name: "E-Commerce Development Services",
    serviceType: "E-Commerce Development",
    url: "https://devzore.com/ecommerce",
    description:
      "Custom e-commerce website development for online stores, marketplaces, payment integrations, inventory management, order management and commerce applications.",
    provider: {
      "@type": "Organization",
      "@id": "https://devzore.com/#organization",
      name: "DevZore",
      url: "https://devzore.com/",
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "E-Commerce Development Services",
      itemListElement: features.map((feature) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature.title,
          description: feature.desc,
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
        name: "E-Commerce Development",
        item: "https://devzore.com/ecommerce",
      },
    ],
  };

  const whatsappMessage = encodeURIComponent(
    "Hi DevZore! I would like to discuss an e-commerce development project."
  );

  return (
    <>
      {/* ==================================================
          STRUCTURED DATA
          Main title/meta/canonical are managed in App.jsx
      ================================================== */}

      <Helmet>
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
        {/* ==================================================
            HERO
        ================================================== */}

        <section
          aria-labelledby="ecommerce-heading"
          className={`pt-24 pb-10 border-b ${
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
                    E-Commerce Development
                  </div>

                  <div
                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold border ${
                      d
                        ? "bg-green-500/10 border-green-500/20 text-green-400"
                        : "bg-green-50 border-green-200 text-green-700"
                    }`}
                  >
                    <Globe size={11} />
                    Worldwide Projects
                  </div>
                </div>

                <h1
                  id="ecommerce-heading"
                  className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  Custom E-Commerce Development{" "}
                  <span className="text-purple-600">
                    for Modern Businesses
                  </span>
                </h1>

                <p
                  className={`text-lg font-semibold mb-4 ${
                    d ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Online Stores · Marketplaces · Payments · Inventory ·
                  Commerce Applications
                </p>

                <p
                  className={`text-base leading-relaxed mb-4 ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  DevZore provides custom e-commerce development services for
                  businesses, startups and growing brands. We build responsive
                  e-commerce websites, online stores, multi-vendor
                  marketplaces and custom commerce applications around your
                  products and business workflows.
                </p>

                <p
                  className={`text-base leading-relaxed mb-6 ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  From product management and checkout to payment gateway
                  integration, inventory, orders, shipping and administration,
                  we develop scalable e-commerce solutions without forcing your
                  business into a fixed template.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    {
                      icon: <ShoppingCart size={17} />,
                      label: "Custom Online Stores",
                    },
                    {
                      icon: <CreditCard size={17} />,
                      label: "Payment Integrations",
                    },
                    {
                      icon: <Package size={17} />,
                      label: "Orders & Inventory",
                    },
                    {
                      icon: <Shield size={17} />,
                      label: "Secure Architecture",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-3 p-3 rounded-xl border ${
                        d
                          ? "bg-white/[0.02] border-white/[0.06]"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <span className="text-purple-500">{item.icon}</span>

                      <span
                        className={`text-[12px] font-bold ${
                          d ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                  >
                    Discuss Your E-Commerce Project
                    <ArrowRight size={14} />
                  </Link>

                  <a
                    href={`https://wa.me/923348004300?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* CAPABILITIES PANEL */}

              <div
                className={`p-7 rounded-3xl border ${
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
                  E-Commerce Development Capabilities
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: "Custom E-Commerce Websites",
                      desc: "Responsive shopping experiences built around your products, brand and customers.",
                    },
                    {
                      title: "Custom Business Logic",
                      desc: "Commerce workflows adapted to pricing, ordering and operational requirements.",
                    },
                    {
                      title: "Payment Gateway Integration",
                      desc: "Suitable local and international payment services based on your merchant setup.",
                    },
                    {
                      title: "Inventory & Order Management",
                      desc: "Structured product, stock, order and fulfilment management.",
                    },
                    {
                      title: "Multi-Vendor Marketplaces",
                      desc: "Vendor accounts, commissions, products, orders and marketplace administration.",
                    },
                    {
                      title: "Third-Party API Integrations",
                      desc: "Shipping, analytics, email and other supported business integrations.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className={`flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0 ${
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
                          {item.title}
                        </p>

                        <p
                          className={`text-[11px] mt-1 leading-relaxed ${
                            d ? "text-gray-500" : "text-gray-500"
                          }`}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className={`mt-5 p-3 rounded-xl ${
                    d ? "bg-purple-600/5" : "bg-purple-50"
                  }`}
                >
                  <p
                    className={`text-[11px] font-semibold text-center ${
                      d ? "text-purple-400" : "text-purple-700"
                    }`}
                  >
                    Remote e-commerce development services available worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            FEATURES
        ================================================== */}

        <section
          aria-labelledby="features-heading"
          className={`py-10 border-b ${
            d
              ? "border-white/[0.06] bg-[#050505]"
              : "border-gray-100 bg-[#fafafa]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-8">
              <p className="text-[11px] font-black uppercase tracking-widest text-purple-500 mb-2">
                E-Commerce Solutions
              </p>

              <h2
                id="features-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Custom E-Commerce Development Capabilities
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Our e-commerce development services can cover both the
                customer-facing online store and the operational systems behind
                it, creating one connected commerce platform.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((item) => (
                <article
                  key={item.title}
                  className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-purple-500/25"
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

        {/* ==================================================
            PAYMENT INTEGRATIONS
        ================================================== */}

        <section
          aria-labelledby="payments-heading"
          className={`py-10 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2
                id="payments-heading"
                className={`text-2xl font-black mb-3 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                E-Commerce Payment Gateway Integration
              </h2>

              <p
                className={`text-sm max-w-2xl mx-auto ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Payment providers can be integrated according to your target
                market, merchant account availability and technical project
                requirements.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                {
                  name: "Stripe",
                  desc: "Cards and supported payment methods",
                },
                {
                  name: "PayPal",
                  desc: "Supported international payments",
                },
                {
                  name: "JazzCash",
                  desc: "Local payment integration",
                },
                {
                  name: "Easypaisa",
                  desc: "Local payment integration",
                },
                {
                  name: "Bank Payments",
                  desc: "Project-specific bank workflows",
                },
              ].map((gateway) => (
                <article
                  key={gateway.name}
                  className={`p-4 rounded-xl border text-center transition-all hover:border-purple-500/30 ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06]"
                      : "bg-[#fafafa] border-gray-200"
                  }`}
                >
                  <CreditCard
                    size={21}
                    className="mx-auto mb-3 text-purple-500"
                  />

                  <h3
                    className={`text-[13px] font-bold mb-1 ${
                      d ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {gateway.name}
                  </h3>

                  <p
                    className={`text-[10px] leading-relaxed ${
                      d ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    {gateway.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            TECHNOLOGY STACK
        ================================================== */}

        <section
          aria-labelledby="ecommerce-tech-heading"
          className={`py-10 border-b ${
            d
              ? "border-white/[0.06] bg-[#050505]"
              : "border-gray-100 bg-[#fafafa]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <p className="text-[11px] font-black uppercase tracking-widest text-purple-500 mb-2">
                Technology
              </p>

              <h2
                id="ecommerce-tech-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                E-Commerce Development Technology Stack
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Modern frontend, backend, database and infrastructure
                technologies selected according to the requirements of each
                commerce project.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStack.map((category) => (
                <div
                  key={category.category}
                  className={`p-5 rounded-2xl border ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06]"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <p className="text-[11px] font-black uppercase tracking-widest mb-3 text-purple-500">
                    {category.category}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {category.items.map((tech) => (
                      <span
                        key={tech}
                        className={`text-[11px] font-medium px-2.5 py-1 rounded-md border ${
                          d
                            ? "bg-white/[0.04] border-white/[0.08] text-gray-300"
                            : "bg-white border-gray-200 text-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            PROCESS
        ================================================== */}

        <section
          aria-labelledby="ecommerce-process-heading"
          className={`py-10 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <p className="text-[11px] font-black uppercase tracking-widest text-purple-500 mb-2">
                Our Process
              </p>

              <h2
                id="ecommerce-process-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                How We Build Your E-Commerce Platform
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                A structured e-commerce development process from business
                requirements and UI/UX through integrations, testing,
                deployment and technical handover.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {process.map((step) => (
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
          </div>
        </section>

        {/* ==================================================
            FAQ
        ================================================== */}

        <section
          aria-labelledby="ecommerce-faq-heading"
          className={`py-10 border-b ${
            d
              ? "border-white/[0.06] bg-[#050505]"
              : "border-gray-100 bg-[#fafafa]"
          }`}
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-8">
              <p className="text-[11px] font-black uppercase tracking-widest text-purple-500 mb-2">
                FAQ
              </p>

              <h2
                id="ecommerce-faq-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                E-Commerce Development FAQ
              </h2>

              <p
                className={`text-base ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Common questions about custom e-commerce website development,
                marketplaces, payments, shipping and online store development.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;

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
                        setActiveFaq(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`ecommerce-faq-${index}`}
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
                      id={`ecommerce-faq-${index}`}
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div
                        className={`px-5 pb-5 border-t text-[14px] leading-relaxed ${
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
          </div>
        </section>

        {/* ==================================================
            RELATED SERVICES
        ================================================== */}

        <section
          aria-labelledby="related-ecommerce-services"
          className={`py-10 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-7">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                Related Services
              </p>

              <h2
                id="related-ecommerce-services"
                className={`text-2xl md:text-3xl font-black ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Supporting Your E-Commerce Platform
              </h2>

              <p
                className={`mt-3 text-sm max-w-2xl leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Explore related development and design services that can
                support your online store or custom commerce application.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {relatedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className={`group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                    d
                      ? "bg-white/[0.015] border-white/[0.08] hover:bg-white/[0.035] hover:border-purple-500/30"
                      : "bg-white border-gray-200 hover:border-purple-200 hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                      d
                        ? "bg-purple-500/10 text-purple-400"
                        : "bg-purple-50 text-purple-600"
                    }`}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className={`text-[16px] font-black mb-2 ${
                      d ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-[13px] leading-relaxed mb-4 ${
                      d ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {service.desc}
                  </p>

                  <span className="inline-flex items-center gap-2 text-[13px] font-bold text-purple-500">
                    Learn More
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            FINAL CTA
        ================================================== */}

        <section
          aria-labelledby="ecommerce-cta-heading"
          className="py-10"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div
              className={`p-7 md:p-9 rounded-3xl border text-center ${
                d
                  ? "bg-white/[0.02] border-white/[0.06]"
                  : "bg-[#fafafa] border-gray-200"
              }`}
            >
              <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[11px] font-bold uppercase tracking-widest mb-4 ${
                  d
                    ? "bg-purple-500/10 border-purple-500/20 text-purple-400"
                    : "bg-purple-50 border-purple-200 text-purple-700"
                }`}
              >
                <Zap size={12} />
                Start Your Project
              </div>

              <h2
                id="ecommerce-cta-heading"
                className={`text-3xl md:text-4xl font-black mb-4 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Planning an E-Commerce Website or Marketplace?
              </h2>

              <p
                className={`text-base mb-7 max-w-2xl mx-auto leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Tell us what you want to sell, how your ordering process works
                and which payment, inventory or shipping integrations you need.
                DevZore can help plan and develop a custom e-commerce solution
                around your business requirements.
              </p>

              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
                >
                  Discuss Your Project
                  <ArrowRight size={15} />
                </Link>

                <a
                  href={`https://wa.me/923348004300?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
                >
                  WhatsApp DevZore
                  <ArrowRight size={15} />
                </a>

                <Link
                  to="/allservices"
                  className={`flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-sm border transition-all ${
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
        </section>
      </main>
    </>
  );
};

export default ECommerce;