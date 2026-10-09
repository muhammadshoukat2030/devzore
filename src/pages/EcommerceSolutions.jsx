import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Boxes,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Code2,
  CreditCard,
  Database,
  Globe,
  Headphones,
  LayoutDashboard,
  Mail,
  Minus,
  Package,
  Plus,
  RefreshCw,
  Search,
  Send,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Store,
  Truck,
  Users,
  Zap,
} from "lucide-react";

const EcommerceSolutions = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "E-Commerce Platform",
    timeline: "",
    message: "",
  });

  // BACKGROUNDS

  const lightGrid = {
    backgroundImage:
      "linear-gradient(rgba(7,25,35,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(7,25,35,0.045) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
  };

  const darkGrid = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
    backgroundSize: "52px 52px",
  };

  // E-COMMERCE SOLUTIONS

  const solutions = [
    {
      icon: <Store size={20} />,
      number: "01",
      title: "Custom Online Stores",
      description:
        "Professional e-commerce storefronts designed around your products, customers, brand and operational requirements.",
      path: "/ecommerce",
    },
    {
      icon: <ShoppingCart size={20} />,
      number: "02",
      title: "Shopping & Checkout",
      description:
        "Product browsing, cart and checkout flows designed to make purchasing easier and reduce unnecessary friction.",
      path: "/ecommerce",
    },
    {
      icon: <CreditCard size={20} />,
      number: "03",
      title: "Payment Integration",
      description:
        "Connect suitable payment gateways and transaction workflows according to your market and merchant setup.",
      path: "/ecommerce",
    },
    {
      icon: <Package size={20} />,
      number: "04",
      title: "Product & Inventory",
      description:
        "Manage products, categories, pricing, stock levels and availability through a central administration workflow.",
      path: "/contact",
    },
    {
      icon: <Users size={20} />,
      number: "05",
      title: "Customer Management",
      description:
        "Organize customer accounts, order history and relevant customer information through structured commerce workflows.",
      path: "/contact",
    },
    {
      icon: <LayoutDashboard size={20} />,
      number: "06",
      title: "E-Commerce Dashboard",
      description:
        "Central dashboards for orders, products, customers, inventory and important store activity.",
      path: "/contact",
    },
  ];

  // DEVELOPMENT STANDARDS

  const standards = [
    {
      icon: <Smartphone size={18} />,
      title: "Responsive Storefront",
      description:
        "Shopping experiences are planned for desktop, tablet and mobile devices from the beginning.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Security Conscious",
      description:
        "Authentication, validation, permissions and sensitive commerce workflows are handled carefully.",
    },
    {
      icon: <Zap size={18} />,
      title: "Performance Considered",
      description:
        "Frontend assets, page delivery and application behaviour are developed with performance in mind.",
    },
    {
      icon: <Search size={18} />,
      title: "Search-Friendly Structure",
      description:
        "Product and category structures can support crawlability, metadata and useful internal navigation.",
    },
    {
      icon: <Code2 size={18} />,
      title: "Maintainable Development",
      description:
        "Clear application structure makes future product, checkout and operational updates easier to manage.",
    },
    {
      icon: <RefreshCw size={18} />,
      title: "Built for Iteration",
      description:
        "Commerce workflows can continue evolving as products, customers and operational requirements change.",
    },
  ];

  // STORE TYPES

  const storeTypes = [
    {
      icon: <Store size={18} />,
      title: "Retail Businesses",
      description:
        "Online storefronts for businesses moving products from physical or traditional sales into digital commerce.",
    },
    {
      icon: <ShoppingBag size={18} />,
      title: "Online Brands",
      description:
        "Branded shopping experiences for direct-to-customer and growing digital product businesses.",
    },
    {
      icon: <Boxes size={18} />,
      title: "Growing E-Commerce",
      description:
        "Store platforms with more advanced inventory, order and administration requirements.",
    },
    {
      icon: <Globe size={18} />,
      title: "Custom Marketplaces",
      description:
        "Commerce platforms with custom product, seller, customer and operational workflows.",
    },
  ];

  // STORE REQUIREMENTS

  const storeRequirements = [
    "Product and category management",
    "Product search and filtering",
    "Shopping cart workflows",
    "Customer accounts",
    "Checkout experience",
    "Payment integrations",
    "Order and inventory management",
    "Shipping and delivery workflows",
  ];

  // BUSINESS IMPACT

  const benefits = [
    {
      icon: <Smartphone size={18} />,
      title: "Better Mobile Experience",
      description:
        "Create shopping journeys that remain clear and usable across smaller screens.",
    },
    {
      icon: <ShoppingCart size={18} />,
      title: "Clearer Buying Journey",
      description:
        "Organize product discovery, cart and checkout experiences around customer needs.",
    },
    {
      icon: <BarChart3 size={18} />,
      title: "Operational Visibility",
      description:
        "Bring products, orders, inventory and customer activity into useful administrative views.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Reliable Commerce Foundation",
      description:
        "Build a platform that can support future features, integrations and operational changes.",
    },
  ];

  // STORE CAPABILITIES

  const capabilities = [
    {
      icon: <ShoppingBag size={18} />,
      title: "Product Catalogue",
      description:
        "Structured products, categories, pricing, descriptions and product information.",
    },
    {
      icon: <Boxes size={18} />,
      title: "Inventory Management",
      description:
        "Track stock information and manage product availability through central workflows.",
    },
    {
      icon: <Truck size={18} />,
      title: "Order Management",
      description:
        "Manage customer orders, statuses and fulfilment through an organized administrative system.",
    },
    {
      icon: <BarChart3 size={18} />,
      title: "Sales Reporting",
      description:
        "Use dashboards and reporting views to understand important store activity.",
    },
    {
      icon: <Database size={18} />,
      title: "Customer Data",
      description:
        "Organize customer, order and product information in a structured application database.",
    },
    {
      icon: <RefreshCw size={18} />,
      title: "API Integrations",
      description:
        "Connect suitable payment, shipping and external services where provider APIs are available.",
    },
  ];

  // PROCESS

  const process = [
    {
      number: "01",
      title: "Store Discovery",
      description:
        "We understand your products, customers, catalogue, ordering process and business requirements.",
    },
    {
      number: "02",
      title: "Commerce Planning",
      description:
        "Product structure, customer journeys, administration workflows and integrations are defined.",
    },
    {
      number: "03",
      title: "UI & UX Direction",
      description:
        "Important storefront screens, product discovery, cart and checkout experiences are planned.",
    },
    {
      number: "04",
      title: "Development",
      description:
        "Storefront, administration features, backend functionality and integrations are developed.",
    },
    {
      number: "05",
      title: "Testing",
      description:
        "Important commerce workflows, responsive behaviour and integrations are reviewed before launch.",
    },
    {
      number: "06",
      title: "Launch & Improvement",
      description:
        "The platform is prepared for deployment and can continue through improvements and ongoing support.",
    },
  ];

  // USE CASES

  const useCases = [
    "Retail Stores",
    "Direct-to-Customer Brands",
    "Product Catalogues",
    "Multi-Vendor Marketplaces",
    "Wholesale Platforms",
    "Customer Portals",
    "Order Management",
    "Inventory Systems",
    "Subscription Commerce",
    "Local Online Stores",
    "Niche Marketplaces",
    "Custom Commerce Apps",
  ];

  // WHY DEVZORE

  const whyDevZore = [
    {
      icon: <ShoppingCart size={18} />,
      title: "Built Around Your Store",
      description:
        "Commerce functionality is planned around your actual products, customers and operating model.",
    },
    {
      icon: <Users size={18} />,
      title: "Customer-Focused Experience",
      description:
        "Product discovery, cart and checkout flows are planned around real customer journeys.",
    },
    {
      icon: <Code2 size={18} />,
      title: "Professional Engineering",
      description:
        "Frontend, backend and data workflows are structured for maintenance and future development.",
    },
    {
      icon: <CreditCard size={18} />,
      title: "Integration Ready",
      description:
        "Payment, shipping and other suitable third-party services can be connected according to project needs.",
    },
    {
      icon: <BarChart3 size={18} />,
      title: "Operational Visibility",
      description:
        "Administration and reporting interfaces can help teams understand orders, products and store activity.",
    },
    {
      icon: <RefreshCw size={18} />,
      title: "Ongoing Improvement",
      description:
        "Maintenance and new feature development can continue as your store and operational needs evolve.",
    },
  ];

  // FAQ

  const faqs = [
    {
      q: "What e-commerce solutions does DevZore provide?",
      a: "DevZore can build custom online stores, product catalogues, shopping carts, checkout workflows, payment integrations, inventory systems, order management, customer accounts, dashboards and custom commerce applications.",
    },
    {
      q: "Can you build a custom online store?",
      a: "Yes. A custom store can be designed around your products, brand, customer journey, payment requirements, inventory workflow and administration needs.",
    },
    {
      q: "Can you integrate payment gateways?",
      a: "Yes. Suitable local or international payment providers can be integrated when the required merchant account, API access and provider functionality are available.",
    },
    {
      q: "Can DevZore build a marketplace?",
      a: "Yes. Marketplace development can include customer accounts, seller workflows, product management, orders, commissions and administration depending on the business model.",
    },
    {
      q: "Can you build inventory and order management?",
      a: "Yes. E-commerce platforms can include product inventory, stock information, order statuses, fulfilment workflows and administrative management.",
    },
    {
      q: "Will the store work on mobile devices?",
      a: "Yes. Storefront interfaces can be developed responsively for mobile, tablet and desktop screen sizes.",
    },
    {
      q: "Can shipping providers be integrated?",
      a: "Yes, where suitable APIs are available. Shipping workflows, rates and tracking information can be connected according to provider capabilities.",
    },
    {
      q: "Can you improve an existing e-commerce platform?",
      a: "Yes. Existing commerce platforms can be reviewed for UI improvements, new features, performance work, backend changes, integrations or operational updates.",
    },
    {
      q: "How much does custom e-commerce development cost?",
      a: "Cost depends on catalogue size, design requirements, checkout complexity, integrations, customer features, administration requirements and overall project scope.",
    },
    {
      q: "How long does an e-commerce project take?",
      a: "The timeline depends on the store size, design scope, integrations, custom workflows and administrative requirements. A focused store and a larger marketplace require different development timelines.",
    },
    {
      q: "Do you provide ongoing support?",
      a: "Yes. Ongoing support can include maintenance, bug fixes, performance improvements, integrations and additional commerce functionality after launch.",
    },
    {
      q: "Can DevZore work with international e-commerce businesses?",
      a: "Yes. E-commerce projects can be managed remotely using online communication, requirement reviews and regular project updates.",
    },
  ];

  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 3);

  // RELATED SERVICES

  const relatedServices = [
    {
      icon: <ShoppingCart size={21} />,
      title: "E-Commerce Development",
      description:
        "Custom e-commerce websites, payments, products, orders, inventory and commerce application development.",
      path: "/ecommerce",
    },
    {
      icon: <Code2 size={21} />,
      title: "Web Development",
      description:
        "Responsive web applications and customer-facing digital experiences built around your requirements.",
      path: "/web-development",
    },
    {
      icon: <Database size={21} />,
      title: "Backend & API Development",
      description:
        "Backend systems, databases and APIs for products, customers, payments, inventory and integrations.",
      path: "/backend-api",
    },
    {
      icon: <Search size={21} />,
      title: "SEO Services",
      description:
        "Technical and on-page SEO support for product, category and commercial website visibility.",
      path: "/seo-services",
    },
  ];

  // HELPERS

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `E-Commerce Project Enquiry - ${formData.name}`
    );

    const body = encodeURIComponent(
`Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Project Type: ${formData.service}
Timeline: ${formData.timeline || "Not specified"}

Project Requirements:
${formData.message}`
    );

    window.location.href = `mailto:hellodevzore@gmail.com?subject=${subject}&body=${body}`;
  };

  // STRUCTURED DATA

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://devzore.com/ecommerce-solutions#webpage",
    url: "https://devzore.com/ecommerce-solutions",
    name: "E-Commerce Solutions",
    description:
      "Custom e-commerce solutions for online stores, product management, payments, inventory, orders, customer accounts and commerce platforms.",
    isPartOf: {
      "@id": "https://devzore.com/#website",
    },
    about: {
      "@id": "https://devzore.com/#organization",
    },
  };

  const solutionsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "E-Commerce Solutions",
    itemListElement: solutions.map((solution, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: solution.title,
        description: solution.description,
        url: `https://devzore.com${solution.path}`,
        provider: {
          "@id": "https://devzore.com/#organization",
        },
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
        name: "E-Commerce Solutions",
        item: "https://devzore.com/ecommerce-solutions",
      },
    ],
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

  // SECTION LABEL

  const SectionLabel = ({ children, light = false }) => (
    <div
      className={`flex items-center gap-2.5 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase ${
        light ? "text-[#28c5d4]" : "text-[#07899a]"
      }`}
    >
      <span className="w-5 h-[2px] bg-[#0796A8]" />
      {children}
    </div>
  );

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(solutionsSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div
        className="min-h-screen overflow-hidden bg-[#f7f9fa] text-[#071923] antialiased"
        style={{
          fontFamily: '"Inter", "Segoe UI", Arial, Helvetica, sans-serif',
        }}
      >
        {/* HERO */}

        <section
          aria-labelledby="ecommerce-solutions-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 right-[7%] w-[520px] h-[520px] rounded-full bg-[#0796A8]/12 blur-[140px]" />

            <div className="absolute inset-0 opacity-50" style={darkGrid} />

            <div className="absolute inset-0 bg-gradient-to-r from-[#04111a] via-[#04111a]/96 to-[#04111a]/76" />
          </div>

          <div className="relative max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10 pt-20 sm:pt-24 lg:pt-24 pb-11 sm:pb-13">
            <div className="grid lg:grid-cols-[0.98fr_1.02fr] gap-8 lg:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-[#c4ced5] mb-5">
                  <ShoppingCart
                    size={14}
                    className="text-[#26becb]"
                  />
                  E-Commerce Solutions
                </div>

                <h1
                  id="ecommerce-solutions-heading"
                  className="max-w-[780px] text-[40px] sm:text-[48px] lg:text-[58px] xl:text-[53px] leading-[1.04] font-semibold tracking-[-0.045em]"
                >
                  Build an online store designed for{" "}
                  <span className="text-[#22bdca]">
                    real business growth.
                  </span>
                </h1>

                <p className="max-w-[690px] mt-4 text-[16px] sm:text-[13.5px] leading-7 text-slate-300">
                  DevZore builds modern e-commerce platforms with responsive
                  storefronts, product management, checkout experiences,
                  payments, inventory and business-focused administration.
                </p>

                <p className="max-w-[650px] mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
                  Build a focused online store or a more advanced commerce
                  platform around your products, customers and operational
                  requirements.
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-6">
                  <a
                    href="#ecommerce-enquiry"
                    className="inline-flex justify-center items-center gap-2 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[12px] font-semibold text-[#071923] transition-all"
                  >
                    Start a Project
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href="#ecommerce-solutions-list"
                    className="inline-flex justify-center items-center gap-2 px-4 py-3 text-[12px] font-semibold text-white hover:text-[#28c5d4] transition-colors"
                  >
                    Explore E-Commerce Solutions
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
                  {[
                    "Responsive Storefront",
                    "Checkout Workflows",
                    "Product Management",
                    "Ongoing Support",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 text-[10px] font-medium text-slate-400"
                    >
                      <CheckCircle2
                        size={12}
                        className="text-[#20becd]"
                      />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* STORE DASHBOARD */}

              <div className="relative min-h-[360px] lg:min-h-[410px] hidden md:block">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-[410px] h-[410px] rounded-full bg-[#0796A8]/15 blur-[100px]" />

                  <div className="relative w-full max-w-[540px]">
                    <div className="rounded-[20px] border border-white/10 bg-[#091d27]/95 shadow-[0_35px_90px_rgba(0,0,0,0.45)] overflow-hidden">
                      <div className="h-9 px-4 border-b border-white/10 bg-[#0b222d] flex items-center justify-between">
                        <div className="flex gap-1.5">
                          {[1, 2, 3].map((item) => (
                            <span
                              key={item}
                              className="w-2 h-2 rounded-full bg-white/20"
                            />
                          ))}
                        </div>

                        <div className="w-[44%] h-4 rounded bg-white/[0.05]" />

                        <div className="w-5" />
                      </div>

                      <div className="p-5">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="w-20 h-2 rounded bg-[#1bbac8]/60 mb-2" />
                            <div className="w-36 h-3 rounded bg-white/80" />
                          </div>

                          <div className="rounded-lg border border-[#21bfcd]/20 bg-[#21bfcd]/10 px-3 py-1.5 text-[8px] font-semibold text-[#2bc6d3]">
                            STORE OVERVIEW
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3 mb-3">
                          {[
                            ["Products", "Live"],
                            ["Orders", "Active"],
                            ["Inventory", "Synced"],
                          ].map(([title, text]) => (
                            <div
                              key={title}
                              className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3"
                            >
                              <p className="text-[7px] uppercase tracking-[0.14em] text-slate-500">
                                {title}
                              </p>

                              <p className="text-[10px] font-semibold mt-1.5">
                                {text}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="grid grid-cols-[1.3fr_0.7fr] gap-3">
                          <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
                            <div className="flex items-center justify-between mb-4">
                              <p className="text-[9px] font-semibold text-slate-300">
                                Sales Activity
                              </p>

                              <BarChart3
                                size={13}
                                className="text-[#28c5d4]"
                              />
                            </div>

                            <div className="flex items-end gap-2 h-20">
                              {[36, 48, 42, 68, 58, 84, 72].map(
                                (height, index) => (
                                  <div
                                    key={index}
                                    className="flex-1 rounded-t bg-[#1bbac8]/70"
                                    style={{
                                      height: `${height}%`,
                                    }}
                                  />
                                )
                              )}
                            </div>
                          </div>

                          <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
                            <p className="text-[8px] font-semibold text-slate-400">
                              Store Health
                            </p>

                            <div className="mt-3 space-y-2">
                              {[86, 68, 92].map((width, index) => (
                                <div key={index}>
                                  <div className="h-1.5 rounded-full bg-white/[0.06]">
                                    <div
                                      className="h-full rounded-full bg-[#20becd]"
                                      style={{
                                        width: `${width}%`,
                                      }}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>

                            <p className="text-[8px] font-semibold text-[#28c5d4] mt-4">
                              Commerce Ready
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -left-5 top-20 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 px-3 py-3 shadow-xl">
                      <ShoppingBag
                        size={17}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[8px] font-semibold mt-2">
                        Products
                      </p>
                    </div>

                    <div className="absolute -right-5 top-14 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 px-3 py-3 shadow-xl">
                      <CreditCard
                        size={17}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[8px] font-semibold mt-2">
                        Checkout
                      </p>
                    </div>

                    <div className="absolute -right-4 bottom-10 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 px-3 py-3 shadow-xl">
                      <Truck
                        size={17}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[8px] font-semibold mt-2">
                        Orders
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CAPABILITY STRIP */}

          <div className="relative border-t border-white/[0.08] bg-[#06151d]/90">
            <div className="max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10">
              <div className="grid grid-cols-2 lg:grid-cols-4">
                {[
                  ["01", "Store Discovery"],
                  ["02", "Commerce Planning"],
                  ["03", "Development"],
                  ["04", "Launch & Support"],
                ].map(([number, title], index) => (
                  <div
                    key={title}
                    className={`py-4 ${
                      index !== 3
                        ? "lg:border-r border-white/[0.07]"
                        : ""
                    } ${index > 0 ? "lg:pl-7" : ""}`}
                  >
                    <span className="block text-[9px] font-semibold text-[#1bb8c7] mb-1">
                      {number}
                    </span>

                    <span className="text-[11px] font-medium text-slate-300">
                      {title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}

        <section
          className="py-10 md:py-12 bg-[#f8fafb]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-7 lg:gap-12">
              <div>
                <SectionLabel>
                  More Than an Online Store
                </SectionLabel>

                <h2 className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3">
                  Build a better{" "}
                  <span className="text-[#0796A8]">
                    shopping experience.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 text-slate-700">
                  A useful e-commerce platform needs more than product pages.
                  Customers should be able to discover products, understand
                  what they are buying and move through the purchasing process
                  without unnecessary friction.
                </p>

                <p className="text-[13px] leading-6 mt-3 text-slate-500">
                  The commerce system behind the storefront should also help
                  your team manage products, inventory, customers, orders and
                  integrations clearly as the business grows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}

        <section
          id="ecommerce-solutions-list"
          aria-labelledby="ecommerce-solutions-list-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>E-Commerce Development</SectionLabel>

              <h2
                id="ecommerce-solutions-list-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                Everything your online store needs to{" "}
                <span className="text-[#0796A8]">
                  operate clearly.
                </span>
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3">
                Build customer-facing shopping experiences together with the
                operational functionality required behind the store.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {solutions.map((solution) => (
                <Link
                  key={solution.title}
                  to={solution.path}
                  onClick={scrollTop}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0796A8]/40 hover:shadow-[0_18px_50px_rgba(7,25,35,0.08)]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#071923] to-[#18bdcb]" />

                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center group-hover:bg-[#071923] group-hover:text-[#28c5d4] transition-colors">
                      {solution.icon}
                    </div>

                    <span className="text-[10px] font-semibold text-slate-300">
                      {solution.number}
                    </span>
                  </div>

                  <h3 className="text-[#071923] text-[16px] font-semibold mt-4">
                    {solution.title}
                  </h3>

                  <p className="text-slate-600 text-[12px] leading-5 mt-2">
                    {solution.description}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold text-[#07899a] mt-4">
                    Explore Solution
                    <ArrowUpRight size={11} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* DEVELOPMENT STANDARDS */}

        <section
          aria-labelledby="commerce-standards-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white"
        >
          <div className="absolute inset-0" style={darkGrid} />

          <div className="absolute top-0 right-0 w-[500px] h-[420px] bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel light>
                Commerce Standards
              </SectionLabel>

              <h2
                id="commerce-standards-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Store development focused on{" "}
                <span className="text-[#25bfce]">
                  customers and operations.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3 max-w-2xl">
                Customer experience and operational workflows should work
                together as one connected commerce platform.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
              {standards.map((item) => (
                <article
                  key={item.title}
                  className="bg-[#071923] p-5 min-h-[170px] hover:bg-[#0a202a] transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0c2a35] text-[#27c1cf] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="text-[14px] font-semibold mt-5">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-[11px] leading-5 mt-2">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* STORE TYPES */}

        <section
          aria-labelledby="store-types-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>Who We Help</SectionLabel>

                <h2
                  id="store-types-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Commerce platforms for different{" "}
                  <span className="text-[#0796A8]">
                    business models.
                  </span>
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  The right store architecture depends on what you sell, how
                  customers purchase and how your team manages operations.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {storeTypes.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-white p-4 hover:border-[#0796A8]/40 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      {item.icon}
                    </div>

                    <h3 className="text-[#071923] text-[13px] font-semibold mt-3">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 text-[10px] leading-5 mt-1.5">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STORE REQUIREMENTS */}

        <section
          aria-labelledby="store-requirements-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <SectionLabel>Commerce Requirements</SectionLabel>

                <h2
                  id="store-requirements-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Connect your storefront with{" "}
                  <span className="text-[#0796A8]">
                    business operations.
                  </span>
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  Product pages are only one part of a commerce platform.
                  Customers, orders, inventory, payments and delivery
                  workflows need to work together behind the scenes.
                </p>

                <p className="text-slate-500 text-[12px] leading-6 mt-3">
                  The exact functionality can be planned around your catalogue,
                  customer journey and operational requirements.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {storeRequirements.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#fbfcfc] p-3.5"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#edf4f5] flex items-center justify-center">
                      <Check
                        size={12}
                        className="text-[#07899a]"
                      />
                    </div>

                    <span className="text-[11px] font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BUSINESS IMPACT */}

        <section className="py-10 md:py-12 bg-[#f7f9fa] border-y border-slate-200">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[760px] mb-7">
              <SectionLabel>Store Experience</SectionLabel>

              <h2 className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3">
                Create a shopping experience that supports{" "}
                <span className="text-[#0796A8]">
                  customers and operations.
                </span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-xl border border-slate-200 bg-white p-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                    {benefit.icon}
                  </div>

                  <h3 className="text-[#071923] text-[13px] font-semibold mt-3">
                    {benefit.title}
                  </h3>

                  <p className="text-slate-500 text-[10px] leading-5 mt-1.5">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* STORE CAPABILITIES */}

        <section
          aria-labelledby="store-capabilities-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>Store Management</SectionLabel>

                <h2
                  id="store-capabilities-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Manage more than{" "}
                  <span className="text-[#0796A8]">
                    just products.
                  </span>
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  Bring important store information into one system so your
                  team can manage the commerce operation more clearly.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {capabilities.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-[#fbfcfc] p-4"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      {item.icon}
                    </div>

                    <h3 className="text-[#071923] text-[13px] font-semibold mt-3">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 text-[10px] leading-5 mt-1.5">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CUSTOM DEVELOPMENT */}

        <section className="py-10 md:py-12 bg-[#f7f9fa] border-y border-slate-200">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                    <Code2 size={19} />
                  </div>

                  <h2 className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] leading-[1.08] mt-4">
                    Custom e-commerce functionality for{" "}
                    <span className="text-[#0796A8]">
                      unique workflows.
                    </span>
                  </h2>

                  <p className="text-slate-600 text-[13px] leading-6 mt-3">
                    When generic commerce software does not match your
                    workflow, custom functionality can be developed around
                    products, customers, administration and operational
                    requirements.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Custom product workflows",
                    "Custom admin dashboards",
                    "API integrations",
                    "Customer account systems",
                    "Business-specific features",
                    "Scalable commerce architecture",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-[#f7f9fa] border border-slate-200 p-3.5"
                    >
                      <BadgeCheck
                        size={15}
                        className="text-[#07899a] flex-shrink-0"
                      />

                      <span className="text-[11px] font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}

        <section
          aria-labelledby="ecommerce-process-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white"
        >
          <div className="absolute inset-0" style={darkGrid} />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel light>Our Process</SectionLabel>

              <h2
                id="ecommerce-process-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                From store concept to{" "}
                <span className="text-[#25bfce]">
                  working commerce platform.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3">
                A structured process connects customer experience, commerce
                functionality and operational requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="bg-[#071923] p-5 min-h-[175px] hover:bg-[#0a202a] transition-colors"
                >
                  <span className="text-[10px] font-semibold text-[#22bfce]">
                    {step.number}
                  </span>

                  <h3 className="text-[15px] font-semibold mt-6">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-[11px] leading-5 mt-2">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}

        <section
          aria-labelledby="commerce-use-cases-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>Commerce Use Cases</SectionLabel>

                <h2
                  id="commerce-use-cases-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  E-commerce platforms for{" "}
                  <span className="text-[#0796A8]">
                    different selling models.
                  </span>
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  Commerce systems can be adapted to different catalogue,
                  customer and operational requirements.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                {useCases.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 bg-white px-3.5 py-3.5"
                  >
                    <span className="text-[8px] font-semibold text-[#0796A8]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-[11px] font-semibold text-[#071923] mt-1">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY DEVZORE */}

        <section
          aria-labelledby="why-ecommerce-devzore-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Why DevZore</SectionLabel>

              <h2
                id="why-ecommerce-devzore-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                E-commerce development focused on{" "}
                <span className="text-[#0796A8]">
                  how your store works.
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {whyDevZore.map((item) => (
                <article
                  key={item.title}
                  className="flex gap-3 rounded-xl border border-slate-200 bg-[#fbfcfc] p-4 hover:border-[#0796A8]/35 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#eef4f5] text-[#07899a] flex-shrink-0 flex items-center justify-center">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-[#071923] text-[13px] font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 text-[10px] leading-5 mt-1">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}

        <section
          aria-labelledby="ecommerce-related-heading"
          className="py-10 md:py-12 bg-[#f7f9fa] border-y border-slate-200"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Related Services</SectionLabel>

              <h2
                id="ecommerce-related-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Supporting services for complete commerce platforms.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={scrollTop}
                  className="group rounded-xl border border-slate-200 bg-white p-4 hover:border-[#0796A8]/40 hover:-translate-y-1 transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                    {service.icon}
                  </div>

                  <h3 className="text-[#071923] text-[13px] font-semibold mt-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-[10px] leading-5 mt-1.5">
                    {service.description}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold text-[#07899a] mt-3">
                    Explore Service
                    <ArrowUpRight size={11} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section
          aria-labelledby="ecommerce-solutions-faq-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[980px] mx-auto px-5 sm:px-6">
            <div className="mb-6">
              <SectionLabel>FAQ</SectionLabel>

              <h2
                id="ecommerce-solutions-faq-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] mt-3"
              >
                E-commerce solution questions.
              </h2>

              <p className="text-slate-600 text-[13px] leading-6 mt-3 max-w-2xl">
                Common questions about online stores, payments, marketplaces,
                inventory, orders and custom commerce development.
              </p>
            </div>

            <div className="border-t border-slate-200">
              {visibleFaqs.map((faq) => {
                const originalIndex = faqs.findIndex(
                  (item) => item.q === faq.q
                );

                const isOpen = activeFaq === originalIndex;

                return (
                  <div
                    key={faq.q}
                    className="border-b border-slate-200"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveFaq(isOpen ? null : originalIndex)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`ecommerce-solutions-faq-${originalIndex}`}
                      className="w-full flex items-center justify-between gap-5 py-4 text-left"
                    >
                      <span
                        className={`text-[13px] sm:text-[14px] font-semibold ${
                          isOpen
                            ? "text-[#07899a]"
                            : "text-[#071923]"
                        }`}
                      >
                        {faq.q}
                      </span>

                      <span
                        className={`w-7 h-7 flex-shrink-0 rounded-full border flex items-center justify-center ${
                          isOpen
                            ? "border-[#0796A8] bg-[#0796A8] text-white"
                            : "border-slate-200 bg-white text-[#071923]"
                        }`}
                      >
                        {isOpen ? (
                          <Minus size={12} />
                        ) : (
                          <Plus size={12} />
                        )}
                      </span>
                    </button>

                    <div
                      id={`ecommerce-solutions-faq-${originalIndex}`}
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-3xl pb-4 text-[12px] leading-6 text-slate-600">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {faqs.length > 3 && (
              <div className="flex justify-center mt-5">
                <button
                  type="button"
                  onClick={() => {
                    setShowAllFaqs((current) => !current);
                    setActiveFaq(null);
                  }}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#071923]/15 bg-[#f8fafb] px-4 py-2.5 text-[10px] font-semibold text-[#071923] hover:border-[#0796A8]/50 transition-colors"
                >
                  {showAllFaqs
                    ? "Show Less Questions"
                    : `Show More Questions (${faqs.length - 3})`}

                  {showAllFaqs ? (
                    <ChevronUp size={13} />
                  ) : (
                    <ChevronDown size={13} />
                  )}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* PROJECT ENQUIRY */}

        <section
          id="ecommerce-enquiry"
          aria-labelledby="ecommerce-enquiry-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-70"
            style={darkGrid}
          />

          <div className="absolute -top-20 left-[5%] w-[450px] h-[450px] rounded-full bg-[#0796A8]/10 blur-[130px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel light>Start a Project</SectionLabel>

                <h2
                  id="ecommerce-enquiry-heading"
                  className="text-[30px] sm:text-[35px] md:text-[40px] leading-[1.06] tracking-[-0.04em] font-semibold mt-3"
                >
                  Tell us about your{" "}
                  <span className="text-[#25bfce]">
                    e-commerce project.
                  </span>
                </h2>

                <p className="text-slate-300 text-[14px] leading-6 mt-4 max-w-lg">
                  Share your products, current store, ordering process and
                  required payment, inventory or shipping workflows.
                </p>

                <div className="mt-5 space-y-2.5">
                  {[
                    "Custom online stores",
                    "Marketplaces",
                    "Payments & checkout",
                    "Inventory, orders & integrations",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#19b9c8]/10 border border-[#19b9c8]/25 flex items-center justify-center">
                        <Check
                          size={10}
                          className="text-[#2ac6d4]"
                        />
                      </div>

                      <span className="text-[11px] font-medium text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/[0.08]">
                  <p className="text-[9px] uppercase tracking-[0.18em] font-semibold text-slate-500">
                    Prefer email?
                  </p>

                  <a
                    href="mailto:hellodevzore@gmail.com"
                    className="inline-flex items-center gap-2 mt-2 text-[12px] font-medium text-[#26c4d2]"
                  >
                    <Mail size={14} />
                    hellodevzore@gmail.com
                  </a>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/[0.1] bg-[#0a202a]/90 p-5 sm:p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="ecommerce-name"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Your Name *
                    </label>

                    <input
                      id="ecommerce-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="ecommerce-email"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Email Address *
                    </label>

                    <input
                      id="ecommerce-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="ecommerce-company"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Company
                    </label>

                    <input
                      id="ecommerce-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="ecommerce-service"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Type
                    </label>

                    <select
                      id="ecommerce-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option>E-Commerce Platform</option>
                      <option>Custom Online Store</option>
                      <option>Marketplace</option>
                      <option>Store Redesign</option>
                      <option>Inventory & Order System</option>
                      <option>Payment Integration</option>
                      <option>Existing Store Improvement</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="ecommerce-timeline"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Timeline
                    </label>

                    <select
                      id="ecommerce-timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option value="">Select a timeline</option>
                      <option>As soon as possible</option>
                      <option>Within 1 month</option>
                      <option>1–3 months</option>
                      <option>3–6 months</option>
                      <option>Still planning</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="ecommerce-message"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Requirements *
                    </label>

                    <textarea
                      id="ecommerce-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your products, current store, payments, inventory, shipping and required functionality..."
                      className="w-full resize-none rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] leading-5 text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
                  <p className="text-[9px] leading-4 text-slate-500 max-w-sm">
                    You do not need a complete technical specification. Share
                    the products you sell and the store functionality you need.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-2 rounded-lg bg-[#1bbdca] hover:bg-[#28c9d5] px-5 py-3 text-[11px] font-semibold text-[#071923] transition-colors"
                  >
                    Send Project Enquiry
                    <Send size={13} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}

        <section className="bg-[#06151d] border-t border-white/[0.06]">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6 py-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-white text-[14px] font-semibold">
                  Planning a new store or improving an existing commerce platform?
                </p>

                <p className="text-slate-500 text-[10px] mt-1">
                  Share your products and requirements so we can discuss the
                  right commerce approach.
                </p>
              </div>

              <Link
                to="/contact"
                onClick={scrollTop}
                className="inline-flex self-start items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-[10px] font-semibold text-[#071923] hover:bg-slate-100 transition-colors"
              >
                Discuss Your Store
                <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EcommerceSolutions;