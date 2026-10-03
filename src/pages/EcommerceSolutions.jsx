import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShoppingCart,
  CheckCircle2,
  Store,
  CreditCard,
  Package,
  Users,
  BarChart3,
  Smartphone,
  ShieldCheck,
  Search,
  Settings,
  Database,
  Zap,
  Globe,
  Boxes,
  Truck,
  LayoutDashboard,
  Headphones,
  Code2,
  RefreshCw,
  ShoppingBag,
  BadgeCheck,
} from "lucide-react";

const EcommerceSolutions = ({ isDark }) => {
  const d = isDark;

  // ======================================================
  // E-COMMERCE SOLUTIONS
  // ======================================================

  const solutions = [
    {
      icon: <Store size={22} />,
      title: "Custom Online Stores",
      description:
        "Professional e-commerce stores designed around your products, customers, brand and business requirements.",
      link: "/ecommerce",
    },
    {
      icon: <ShoppingCart size={22} />,
      title: "Shopping & Checkout",
      description:
        "Smooth product browsing, cart and checkout experiences designed to make online purchasing simple for customers.",
      link: "/ecommerce",
    },
    {
      icon: <CreditCard size={22} />,
      title: "Payment Integration",
      description:
        "Connect suitable payment gateways and payment workflows to support secure and convenient online transactions.",
      link: "/ecommerce",
    },
    {
      icon: <Package size={22} />,
      title: "Product & Inventory",
      description:
        "Manage products, categories, pricing, stock levels and inventory information from a centralized system.",
      link: "/contact",
    },
    {
      icon: <Users size={22} />,
      title: "Customer Management",
      description:
        "Manage customer accounts, orders and important customer information through an organized digital workflow.",
      link: "/contact",
    },
    {
      icon: <LayoutDashboard size={22} />,
      title: "E-Commerce Dashboard",
      description:
        "Centralized dashboards for monitoring orders, products, customers, inventory and important store activity.",
      link: "/contact",
    },
  ];

  // ======================================================
  // FEATURES
  // ======================================================

  const features = [
    {
      icon: <Smartphone size={20} />,
      title: "Mobile Responsive",
      description:
        "Shopping experiences designed to work smoothly across phones, tablets and desktop devices.",
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Secure Architecture",
      description:
        "Modern development practices with security and maintainability considered throughout the platform.",
    },
    {
      icon: <Zap size={20} />,
      title: "Performance Focused",
      description:
        "Fast and optimized storefront experiences designed to reduce unnecessary friction for visitors.",
    },
    {
      icon: <Search size={20} />,
      title: "SEO-Friendly Structure",
      description:
        "Search-friendly pages, metadata and technical foundations that support product and category discoverability.",
    },
  ];

  // ======================================================
  // STORE CAPABILITIES
  // ======================================================

  const capabilities = [
    {
      icon: <ShoppingBag size={20} />,
      title: "Product Catalog",
      text: "Organized product listings with categories, pricing, descriptions and product information.",
    },
    {
      icon: <Boxes size={20} />,
      title: "Inventory Management",
      text: "Track stock information and manage product availability through centralized workflows.",
    },
    {
      icon: <Truck size={20} />,
      title: "Order Management",
      text: "Manage customer orders and order status through a structured administration system.",
    },
    {
      icon: <BarChart3 size={20} />,
      title: "Sales Reporting",
      text: "Useful dashboards and reporting views for understanding store activity and business performance.",
    },
    {
      icon: <Database size={20} />,
      title: "Customer Data",
      text: "Organize customer and order information in a structured database designed around your requirements.",
    },
    {
      icon: <RefreshCw size={20} />,
      title: "API Integrations",
      text: "Connect payment, delivery and other third-party services through APIs when required.",
    },
  ];

  // ======================================================
  // PROCESS
  // ======================================================

  const process = [
    {
      number: "01",
      title: "Store Planning",
      description:
        "We understand your products, customers, sales process, required functionality and business goals.",
    },
    {
      number: "02",
      title: "UX & Architecture",
      description:
        "We plan the storefront experience, product structure, checkout flow and technical architecture.",
    },
    {
      number: "03",
      title: "Development",
      description:
        "We build the storefront, management features, integrations and responsive customer experience.",
    },
    {
      number: "04",
      title: "Test & Launch",
      description:
        "We test important store workflows, deploy the platform and support future improvements.",
    },
  ];

  // ======================================================
  // BUSINESS TYPES
  // ======================================================

  const businessTypes = [
    "Retail Businesses",
    "Online Brands",
    "Local Stores",
    "Growing E-Commerce Businesses",
    "B2C Stores",
    "Custom Online Marketplaces",
  ];

  return (
    <div
      className={`min-h-screen overflow-hidden transition-colors duration-300 ${d
          ? "bg-[#030303] text-white"
          : "bg-[#fafafa] text-[#111827]"
        }`}
    >
      {/* ==================================================
          HERO
      ================================================== */}

      <section
        className={`relative pt-[108px] sm:pt-[116px] pb-12 sm:pb-14 border-b overflow-hidden ${d ? "border-white/[0.06]" : "border-gray-200"
          }`}
      >
        {/* BACKGROUND GLOW */}

        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute top-[-180px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[120px] ${d ? "bg-purple-700/10" : "bg-purple-300/20"
              }`}
          />

          <div
            className={`absolute top-[-130px] right-[-150px] w-[500px] h-[500px] rounded-full blur-[120px] ${d ? "bg-indigo-700/10" : "bg-indigo-200/20"
              }`}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">

            {/* BADGE */}

            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[10px] sm:text-[11px] font-black uppercase tracking-[0.18em] ${d
                  ? "bg-purple-500/[0.08] border-purple-500/20 text-purple-400"
                  : "bg-purple-50 border-purple-200 text-purple-700"
                }`}
            >
              <ShoppingCart size={14} />
              E-Commerce Solutions
            </div>

            {/* HEADING */}

            <h1
              className={`mt-6 text-[38px] sm:text-5xl lg:text-[64px] xl:text-[70px] leading-[1.02] font-black tracking-[-0.045em] ${d ? "text-white" : "text-[#090d18]"
                }`}
            >
              Build an Online Store
              <span className="block mt-1 bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
                Designed to Grow Your Business
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              className={`max-w-3xl mx-auto mt-5 text-[15px] sm:text-[17px] leading-7 ${d ? "text-gray-400" : "text-gray-600"
                }`}
            >
              DevZore builds modern e-commerce solutions with
              responsive storefronts, product management, shopping
              experiences, payment integrations and scalable
              functionality for growing online businesses.
            </p>

            {/* CTA */}

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-[12px] font-bold transition-all hover:shadow-[0_10px_35px_rgba(147,51,234,0.25)]"
              >
                Discuss Your Store
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/ecommerce"
                className={`group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border text-[12px] font-bold transition-all ${d
                    ? "border-white/[0.12] text-white hover:bg-white/[0.06]"
                    : "border-gray-300 text-gray-800 hover:bg-gray-100"
                  }`}
              >
                E-Commerce Development
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* TRUST POINTS */}

            <div
              className={`mt-8 pt-6 border-t flex flex-wrap items-center justify-center gap-x-7 gap-y-3 ${d ? "border-white/[0.07]" : "border-gray-200"
                }`}
            >
              {[
                "Responsive Storefront",
                "Secure Checkout",
                "Product Management",
                "Scalable Platform",
              ].map((item) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 text-[11px] sm:text-[12px] font-medium ${d ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                  <CheckCircle2
                    size={14}
                    className="text-purple-500"
                  />

                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          INTRODUCTION
      ================================================== */}

      <section className="py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-14 items-center">

            {/* LEFT */}

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-purple-500">
                More Than an Online Store
              </p>

              <h2
                className={`mt-3 text-3xl sm:text-4xl lg:text-[44px] leading-[1.08] font-black tracking-tight ${d ? "text-white" : "text-gray-950"
                  }`}
              >
                Build a better
                <span className="text-purple-500">
                  {" "}shopping experience.
                </span>
              </h2>

              <p
                className={`mt-4 text-[14px] leading-7 ${d ? "text-gray-400" : "text-gray-600"
                  }`}
              >
                A successful e-commerce platform needs more than product
                pages. Customers should be able to discover products,
                understand what they're buying and move through the
                shopping process without unnecessary friction.
              </p>

              <p
                className={`mt-3 text-[14px] leading-7 ${d ? "text-gray-400" : "text-gray-600"
                  }`}
              >
                We build e-commerce solutions around your products,
                operations and customer journey while keeping future
                growth and maintainability in mind.
              </p>

              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold text-purple-500 hover:text-purple-600 group"
              >
                Tell us about your store
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            {/* RIGHT */}

            <div
              className={`rounded-2xl border p-5 sm:p-6 ${d
                  ? "bg-white/[0.025] border-white/[0.07]"
                  : "bg-white border-gray-200 shadow-sm"
                }`}
            >
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Responsive product pages",
                  "Product categories & search",
                  "Shopping cart experience",
                  "Checkout workflows",
                  "Customer accounts",
                  "Order management",
                  "Inventory management",
                  "Payment integrations",
                ].map((item) => (
                  <div
                    key={item}
                    className={`flex items-start gap-2.5 rounded-xl px-3.5 py-3 ${d
                        ? "bg-white/[0.03]"
                        : "bg-gray-50"
                      }`}
                  >
                    <CheckCircle2
                      size={16}
                      className="text-purple-500 shrink-0 mt-0.5"
                    />

                    <span
                      className={`text-[12px] leading-5 ${d ? "text-gray-300" : "text-gray-700"
                        }`}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SOLUTIONS
      ================================================== */}

      <section
        className={`py-12 sm:py-14 border-y ${d
            ? "bg-white/[0.015] border-white/[0.05]"
            : "bg-white border-gray-200"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* HEADING */}

          <div className="max-w-2xl">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-purple-500">
              E-Commerce Development
            </p>

            <h2
              className={`mt-3 text-3xl sm:text-4xl font-black tracking-tight ${d ? "text-white" : "text-gray-950"
                }`}
            >
              Everything your online store needs
            </h2>

            <p
              className={`mt-3 text-[14px] leading-6 ${d ? "text-gray-400" : "text-gray-600"
                }`}
            >
              From storefront development to order management, we can
              build the core digital systems required for your
              e-commerce operation.
            </p>
          </div>

          {/* CARDS */}

          <div className="mt-7 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.map((solution) => (
              <Link
                key={solution.title}
                to={solution.link}
                className={`group rounded-2xl border p-5 transition-all duration-300 ${d
                    ? "bg-[#080808] border-white/[0.07] hover:border-purple-500/30 hover:bg-white/[0.035]"
                    : "bg-[#fafafa] border-gray-200 hover:border-purple-200 hover:shadow-lg"
                  }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center text-purple-500 border transition-all group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 ${d
                      ? "bg-purple-500/[0.08] border-purple-500/15"
                      : "bg-purple-50 border-purple-100"
                    }`}
                >
                  {solution.icon}
                </div>

                <h3
                  className={`mt-4 text-[16px] font-bold ${d ? "text-white" : "text-gray-900"
                    }`}
                >
                  {solution.title}
                </h3>

                <p
                  className={`mt-2 text-[12px] leading-6 ${d ? "text-gray-500" : "text-gray-600"
                    }`}
                >
                  {solution.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-[11px] font-bold text-purple-500">
                  Learn More

                  <ArrowRight
                    size={13}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          WHY ECOMMERCE
      ================================================== */}

      <section className="py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-purple-500">
              Store Experience
            </p>

            <h2
              className={`mt-3 text-3xl sm:text-4xl font-black ${d ? "text-white" : "text-gray-950"
                }`}
            >
              Built around your customers
            </h2>

            <p
              className={`mt-3 text-[13px] leading-6 ${d ? "text-gray-400" : "text-gray-600"
                }`}
            >
              Every part of the storefront should make it easier for
              customers to explore products and complete their purchase.
            </p>
          </div>

          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`rounded-2xl border p-5 ${d
                    ? "bg-white/[0.02] border-white/[0.07]"
                    : "bg-white border-gray-200"
                  }`}
              >
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center">
                  {feature.icon}
                </div>

                <h3
                  className={`mt-4 text-[14px] font-bold ${d ? "text-white" : "text-gray-900"
                    }`}
                >
                  {feature.title}
                </h3>

                <p
                  className={`mt-2 text-[11px] leading-5 ${d ? "text-gray-500" : "text-gray-600"
                    }`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          STORE CAPABILITIES
      ================================================== */}

      <section
        className={`py-12 sm:py-14 border-y ${d
            ? "bg-[#070707] border-white/[0.05]"
            : "bg-white border-gray-200"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-14 items-center">

            {/* LEFT */}

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-purple-500">
                Store Management
              </p>

              <h2
                className={`mt-3 text-3xl sm:text-4xl font-black leading-tight ${d ? "text-white" : "text-gray-950"
                  }`}
              >
                Manage more than
                <span className="text-purple-500">
                  {" "}just products.
                </span>
              </h2>

              <p
                className={`mt-4 text-[13px] leading-6 ${d ? "text-gray-400" : "text-gray-600"
                  }`}
              >
                Your e-commerce platform can bring products, customers,
                orders, inventory and business information together in
                one organized system.
              </p>

              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold text-purple-500 group"
              >
                Discuss Your Requirements

                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            {/* RIGHT */}

            <div className="grid sm:grid-cols-2 gap-3">
              {capabilities.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-xl border p-4 ${d
                      ? "bg-white/[0.025] border-white/[0.07]"
                      : "bg-gray-50 border-gray-200"
                    }`}
                >
                  <div className="text-purple-500">
                    {item.icon}
                  </div>

                  <h3
                    className={`mt-3 text-[13px] font-bold ${d ? "text-white" : "text-gray-900"
                      }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-1.5 text-[10px] leading-5 ${d ? "text-gray-500" : "text-gray-600"
                      }`}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          CUSTOM DEVELOPMENT
      ================================================== */}

      <section className="py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className={`rounded-[22px] border p-5 sm:p-7 lg:p-8 ${d
                ? "bg-white/[0.02] border-white/[0.07]"
                : "bg-white border-gray-200"
              }`}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">

              {/* LEFT */}

              <div>
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                  <Code2 size={22} />
                </div>

                <h2
                  className={`mt-4 text-3xl sm:text-4xl font-black ${d ? "text-white" : "text-gray-950"
                    }`}
                >
                  Custom e-commerce development
                </h2>

                <p
                  className={`mt-3 text-[13px] leading-6 ${d ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                  When a generic store setup does not match your
                  workflow, we can build custom functionality around
                  your products, customers and operational requirements.
                </p>
              </div>

              {/* RIGHT */}

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Custom product workflows",
                  "Custom admin dashboards",
                  "API integrations",
                  "Customer account systems",
                  "Business-specific features",
                  "Scalable architecture",
                ].map((item) => (
                  <div
                    key={item}
                    className={`flex items-center gap-2.5 px-3.5 py-3 rounded-xl ${d
                        ? "bg-white/[0.03]"
                        : "bg-gray-50"
                      }`}
                  >
                    <BadgeCheck
                      size={16}
                      className="text-purple-500 shrink-0"
                    />

                    <span
                      className={`text-[11px] font-medium ${d ? "text-gray-300" : "text-gray-700"
                        }`}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          PROCESS
      ================================================== */}

      <section
        className={`py-12 sm:py-14 border-y ${d
            ? "bg-white/[0.015] border-white/[0.05]"
            : "bg-white border-gray-200"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="max-w-2xl">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-purple-500">
              Development Process
            </p>

            <h2
              className={`mt-3 text-3xl sm:text-4xl font-black ${d ? "text-white" : "text-gray-950"
                }`}
            >
              From store idea to launch
            </h2>

            <p
              className={`mt-3 text-[13px] leading-6 ${d ? "text-gray-400" : "text-gray-600"
                }`}
            >
              A structured process helps us build the right platform
              around your products and business requirements.
            </p>
          </div>

          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((step) => (
              <div
                key={step.number}
                className={`rounded-2xl border p-5 ${d
                    ? "bg-[#080808] border-white/[0.07]"
                    : "bg-[#fafafa] border-gray-200"
                  }`}
              >
                <span className="text-[10px] font-black tracking-[0.2em] text-purple-500">
                  STEP {step.number}
                </span>

                <h3
                  className={`mt-3 text-[16px] font-bold ${d ? "text-white" : "text-gray-900"
                    }`}
                >
                  {step.title}
                </h3>

                <p
                  className={`mt-2 text-[11px] leading-5 ${d ? "text-gray-500" : "text-gray-600"
                    }`}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          WHO WE HELP
      ================================================== */}

      <section className="py-11 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-purple-500">
                Who We Help
              </p>

              <h2
                className={`mt-3 text-3xl sm:text-4xl font-black ${d ? "text-white" : "text-gray-950"
                  }`}
              >
                E-commerce solutions for different businesses
              </h2>

              <p
                className={`mt-3 text-[13px] leading-6 ${d ? "text-gray-400" : "text-gray-600"
                  }`}
              >
                Whether you're launching your first online store or
                improving an existing commerce operation, we can shape
                the platform around your business requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {businessTypes.map((item) => (
                <div
                  key={item}
                  className={`flex items-center gap-2.5 rounded-xl border px-3.5 py-3 ${d
                      ? "border-white/[0.07] bg-white/[0.02]"
                      : "border-gray-200 bg-white"
                    }`}
                >
                  <CheckCircle2
                    size={15}
                    className="text-purple-500 shrink-0"
                  />

                  <span
                    className={`text-[11px] font-semibold ${d ? "text-gray-300" : "text-gray-700"
                      }`}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          FINAL CTA
      ================================================== */}

      <section className="pb-12 sm:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className={`relative overflow-hidden rounded-[24px] border px-5 sm:px-8 lg:px-12 py-9 sm:py-10 ${d
                ? "bg-[#090909] border-white/[0.08]"
                : "bg-[#111827] border-gray-900"
              }`}
          >
            {/* GLOW */}

            <div className="absolute -top-24 right-0 w-[350px] h-[350px] rounded-full bg-purple-600/20 blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

              {/* CONTENT */}

              <div className="max-w-2xl">
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-purple-400">
                  Build Your Online Store
                </p>

                <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white leading-tight">
                  Ready to build or improve your e-commerce platform?
                </h2>

                <p className="mt-3 text-[13px] leading-6 text-gray-400">
                  Tell us about your products, current store and
                  business requirements. We can help you plan the right
                  e-commerce solution.
                </p>
              </div>

              {/* CTA */}

              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 shrink-0">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-[11px] font-bold transition-all"
                >
                  Discuss Your Store

                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                <a
                  href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20an%20e-commerce%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 text-white hover:bg-white/[0.06] text-[11px] font-bold transition-all"
                >
                  <Headphones size={14} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          INTERNAL LINKS
      ================================================== */}

      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-5 border-t ${d ? "border-white/[0.06]" : "border-gray-200"
              }`}
          >
            <Link
              to="/ecommerce"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              E-Commerce Development
            </Link>

            <Link
              to="/web-development"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              Web Development
            </Link>

            <Link
              to="/backend-api"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              Backend & API
            </Link>

            <Link
              to="/ui-ux-design"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              UI/UX Design
            </Link>

            <Link
              to="/seo-services"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              SEO Services
            </Link>

            <Link
              to="/contact"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              Contact DevZore
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceSolutions;