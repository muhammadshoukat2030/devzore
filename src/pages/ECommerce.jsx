import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CircleCheck,
  Code2,
  CreditCard,
  Database,
  Globe2,
  LockKeyhole,
  Mail,
  Minus,
  Package,
  Palette,
  Plus,
  Search,
  Send,
  Server,
  ShieldCheck,
  ShoppingCart,
  Store,
  Truck,
  Users,
  Zap,
} from "lucide-react";

const ECommerce = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "E-Commerce Development",
    timeline: "",
    message: "",
  });

  /* =========================================================
     BACKGROUND GRIDS
  ========================================================= */

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

  /* =========================================================
     E-COMMERCE SERVICES
  ========================================================= */

  const services = [
    {
      icon: <ShoppingCart size={21} />,
      number: "01",
      title: "Custom E-Commerce Websites",
      desc:
        "Custom online stores and responsive storefronts designed around your products, customers and buying journey.",
      points: [
        "Responsive storefront",
        "Product catalogue",
        "Cart & checkout",
      ],
    },
    {
      icon: <CreditCard size={21} />,
      number: "02",
      title: "Payment Gateway Integration",
      desc:
        "Integrate suitable local and international payment gateways according to merchant availability and business requirements.",
      points: [
        "Online payments",
        "Payment APIs",
        "Webhook workflows",
      ],
    },
    {
      icon: <Package size={21} />,
      number: "03",
      title: "Inventory & Order Management",
      desc:
        "Manage products, stock, orders, fulfilment statuses and commerce operations through structured administration tools.",
      points: [
        "Stock management",
        "Order workflows",
        "Admin controls",
      ],
    },
    {
      icon: <Users size={21} />,
      number: "04",
      title: "Multi-Vendor Marketplaces",
      desc:
        "Marketplace platforms with vendor onboarding, products, commissions, dashboards, orders and administration.",
      points: [
        "Vendor accounts",
        "Commission workflows",
        "Marketplace dashboard",
      ],
    },
    {
      icon: <Search size={21} />,
      number: "05",
      title: "Product Search & Filtering",
      desc:
        "Help customers discover products through search, categories, filters, sorting and structured product information.",
      points: [
        "Product search",
        "Category filters",
        "Sorting options",
      ],
    },
    {
      icon: <BarChart3 size={21} />,
      number: "06",
      title: "Commerce Analytics Dashboards",
      desc:
        "Dashboards for reviewing orders, revenue, inventory, customer activity and important commerce metrics.",
      points: [
        "Sales reporting",
        "Order analytics",
        "Inventory insights",
      ],
    },
    {
      icon: <Truck size={21} />,
      number: "07",
      title: "Shipping & Logistics Integration",
      desc:
        "Connect supported courier and logistics services for fulfilment, shipment tracking and delivery workflows.",
      points: [
        "Courier APIs",
        "Tracking workflows",
        "Order fulfilment",
      ],
    },
    {
      icon: <Bell size={21} />,
      number: "08",
      title: "Promotions & Engagement",
      desc:
        "Support discount codes, promotions, customer notifications, emails and other commerce engagement features.",
      points: [
        "Discount codes",
        "Notifications",
        "Email workflows",
      ],
    },
    {
      icon: <LockKeyhole size={21} />,
      number: "09",
      title: "Secure E-Commerce Development",
      desc:
        "Security-conscious development with authentication, validation, protected APIs and role-based access controls.",
      points: [
        "Protected APIs",
        "Authentication",
        "Access controls",
      ],
    },
  ];

  /* =========================================================
     BUSINESS TYPES
  ========================================================= */

  const commerceTypes = [
    {
      icon: <Store size={19} />,
      title: "Online Stores",
      desc:
        "Custom storefronts for businesses selling physical or digital products directly to customers.",
    },
    {
      icon: <Users size={19} />,
      title: "Multi-Vendor Marketplaces",
      desc:
        "Platforms connecting multiple vendors with customers through shared commerce workflows.",
    },
    {
      icon: <Package size={19} />,
      title: "Retail & Inventory Systems",
      desc:
        "Commerce platforms connecting products, stock, customer orders and internal operations.",
    },
    {
      icon: <Globe2 size={19} />,
      title: "Growing E-Commerce Brands",
      desc:
        "Scalable commerce systems for businesses that need more products, integrations and operational functionality.",
    },
  ];

  /* =========================================================
     DEVELOPMENT STANDARDS
  ========================================================= */

  const standards = [
    {
      icon: <ShoppingCart size={19} />,
      title: "Customer-Focused Shopping",
      desc:
        "Product discovery, cart and checkout experiences are planned around clear customer journeys.",
    },
    {
      icon: <Zap size={19} />,
      title: "Performance Considered",
      desc:
        "Page loading, images, API calls and important shopping interactions are considered during development.",
    },
    {
      icon: <ShieldCheck size={19} />,
      title: "Security Conscious",
      desc:
        "Authentication, validation, permissions and protected backend endpoints are applied where required.",
    },
    {
      icon: <CreditCard size={19} />,
      title: "Payment Ready",
      desc:
        "Supported payment providers can be integrated according to project and merchant requirements.",
    },
    {
      icon: <Server size={19} />,
      title: "Backend Connected",
      desc:
        "Stores can connect with databases, APIs, shipping providers, email platforms and other services.",
    },
    {
      icon: <Package size={19} />,
      title: "Operations Ready",
      desc:
        "Inventory, orders, customers and administration workflows can be structured around business operations.",
    },
  ];

  /* =========================================================
     PAYMENTS
  ========================================================= */

  const paymentGateways = [
    {
      name: "Stripe",
      desc: "Cards and supported online payment methods",
    },
    {
      name: "PayPal",
      desc: "Supported international payment workflows",
    },
    {
      name: "JazzCash",
      desc: "Local merchant payment integration",
    },
    {
      name: "Easypaisa",
      desc: "Local merchant payment integration",
    },
    {
      name: "Bank Payments",
      desc: "Project-specific bank payment workflows",
    },
  ];

  /* =========================================================
     TECHNOLOGY STACK
  ========================================================= */

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
      items: ["Vercel", "AWS", "Cloudflare", "Storage APIs"],
    },
    {
      category: "Commerce",
      items: [
        "Products",
        "Orders",
        "Inventory",
        "Customers",
        "Analytics",
      ],
    },
  ];

  /* =========================================================
     PROCESS
  ========================================================= */

  const process = [
    {
      number: "01",
      title: "Business & Product Discovery",
      desc:
        "We review your products, customers, catalogue structure, payment needs, shipping workflow and administration requirements.",
    },
    {
      number: "02",
      title: "Store Architecture & UI/UX",
      desc:
        "Categories, product pages, search, cart, checkout and customer journeys are planned around the shopping experience.",
    },
    {
      number: "03",
      title: "Platform Development",
      desc:
        "The storefront, authentication, product management, cart, checkout, inventory and administration features are developed.",
    },
    {
      number: "04",
      title: "Payments & Integrations",
      desc:
        "Payment gateways, shipping providers, email services and other supported external systems are integrated.",
    },
    {
      number: "05",
      title: "Testing & Review",
      desc:
        "Important shopping flows, forms, checkout, responsive behaviour, integrations and performance areas are reviewed.",
    },
    {
      number: "06",
      title: "Deployment & Support",
      desc:
        "The platform is prepared for production and can continue with maintenance, improvements and future features.",
    },
  ];

  /* =========================================================
     E-COMMERCE USE CASES
  ========================================================= */

  const useCases = [
    "Fashion Stores",
    "Electronics Stores",
    "Grocery Platforms",
    "Digital Products",
    "B2B Commerce",
    "Multi-Vendor Marketplaces",
    "Beauty & Cosmetics",
    "Home & Furniture",
    "Food Ordering",
    "Wholesale Platforms",
    "Subscription Commerce",
    "Custom Retail Systems",
  ];

  /* =========================================================
     WHY DEVZORE
  ========================================================= */

  const whyDevZore = [
    {
      icon: <ShoppingCart size={19} />,
      title: "Built Around Your Store",
      desc:
        "Commerce workflows are structured around your products, customers and operational requirements.",
    },
    {
      icon: <CreditCard size={19} />,
      title: "Payment Integration",
      desc:
        "Suitable supported payment providers can be connected according to your merchant setup.",
    },
    {
      icon: <ShieldCheck size={19} />,
      title: "Security-Conscious Development",
      desc:
        "Authentication, validation, permissions and protected APIs are considered throughout development.",
    },
    {
      icon: <Code2 size={19} />,
      title: "Maintainable Development",
      desc:
        "Organised frontend, backend and database structure makes future improvements easier to manage.",
    },
    {
      icon: <Package size={19} />,
      title: "Commerce Operations",
      desc:
        "Products, orders, inventory and administrative workflows can be managed within one connected system.",
    },
    {
      icon: <TrendingUpIcon />,
      title: "Ready to Grow",
      desc:
        "The platform can be structured so products, integrations and commerce functionality can expand later.",
    },
  ];

  function TrendingUpIcon() {
    return <BarChart3 size={19} />;
  }

  /* =========================================================
     FAQ
  ========================================================= */

  const faqs = [
    {
      q: "How much does custom e-commerce website development cost?",
      a:
        "The cost depends on catalogue size, design requirements, payment integrations, shipping workflows, customer features and marketplace requirements. DevZore can prepare a project-specific proposal after reviewing the scope.",
    },
    {
      q: "How long does it take to build an e-commerce website?",
      a:
        "The timeline depends on platform complexity. A focused online store normally requires less development than a large multi-vendor marketplace with complex integrations and business workflows.",
    },
    {
      q: "Can you develop a custom online store for my business?",
      a:
        "Yes. DevZore can build an e-commerce platform around your products, customers, ordering process, payment requirements, inventory and administrative workflow.",
    },
    {
      q: "Can you integrate JazzCash and Easypaisa?",
      a:
        "JazzCash, Easypaisa and other supported payment services can be integrated when the required merchant account, API access and provider capabilities are available.",
    },
    {
      q: "Can you build a multi-vendor marketplace?",
      a:
        "Yes. Marketplace functionality can include vendor registration, dashboards, product management, commissions, orders, customer accounts and administrative controls.",
    },
    {
      q: "Will my e-commerce website be SEO-friendly?",
      a:
        "Technical SEO foundations can include crawlable page structure, descriptive URLs, metadata support, structured data where appropriate, internal linking, responsive layouts and performance considerations. Search rankings cannot be guaranteed.",
    },
    {
      q: "Can you migrate an existing e-commerce store?",
      a:
        "Yes, depending on the existing platform and available data access. Migration can include supported products, categories, customer information and other relevant store data.",
    },
    {
      q: "Can shipping or courier services be integrated?",
      a:
        "Yes, where the courier or logistics provider offers suitable API access. Tracking and fulfilment workflows can be integrated according to provider capabilities.",
    },
    {
      q: "Can DevZore build an e-commerce MVP?",
      a:
        "Yes. A focused e-commerce MVP can include the essential catalogue, cart, checkout, account, payment and administration functionality required for an initial launch.",
    },
    {
      q: "Can you improve an existing online store?",
      a:
        "Yes. Existing stores can be reviewed for user experience, responsive behaviour, frontend structure, backend functionality, checkout workflows and performance improvements.",
    },
    {
      q: "Can DevZore work with e-commerce clients remotely?",
      a:
        "Yes. E-commerce projects can be managed remotely through organised communication, shared repositories and online project workflows.",
    },
    {
      q: "Will I receive the source code?",
      a:
        "Source-code ownership, repositories, design assets, deployment access and technical handover requirements can be defined in the project agreement.",
    },
  ];

  /* =========================================================
     RELATED SERVICES
  ========================================================= */

  const relatedServices = [
    {
      label: "WEB",
      title: "Web Development",
      desc:
        "Custom websites and web applications developed around business requirements.",
      path: "/web-development",
    },
    {
      label: "BACKEND",
      title: "Backend & API Development",
      desc:
        "APIs, databases, authentication and backend systems for commerce platforms.",
      path: "/backend-api",
    },
    {
      label: "DESIGN",
      title: "UI/UX Design",
      desc:
        "Product discovery, shopping, cart and checkout experiences designed around customers.",
      path: "/ui-ux-design",
    },
    {
      label: "FULL STACK",
      title: "MERN Stack Development",
      desc:
        "Full-stack JavaScript applications using React, Node.js, Express and MongoDB.",
      path: "/mern-stack-development",
    },
  ];

  /* =========================================================
     HELPERS
  ========================================================= */

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
      `E-Commerce Development Enquiry - ${formData.name}`
    );

    const body = encodeURIComponent(
`Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Service: ${formData.service}
Timeline: ${formData.timeline || "Not specified"}

Project Details:
${formData.message}`
    );

    window.location.href = `mailto:hellodevzore@gmail.com?subject=${subject}&body=${body}`;
  };

  /* =========================================================
     STRUCTURED DATA
  ========================================================= */

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://devzore.com/ecommerce#service",
    name: "E-Commerce Development Services",
    url: "https://devzore.com/ecommerce",
    serviceType: "E-Commerce Development",
    description:
      "Custom e-commerce development services for online stores, marketplaces, payments, inventory, orders and commerce applications.",
    provider: {
      "@type": "Organization",
      "@id": "https://devzore.com/#organization",
      name: "DevZore",
      url: "https://devzore.com/",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "E-Commerce Development Services",
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

  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 3);

  /* =========================================================
     SECTION LABEL
  ========================================================= */

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
          {JSON.stringify(serviceSchema)}
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
        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          aria-labelledby="ecommerce-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 right-[5%] w-[500px] h-[500px] rounded-full bg-[#078fa5]/12 blur-[130px]" />

            <div
              className="absolute inset-0 opacity-50"
              style={darkGrid}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#04111a] via-[#04111a]/95 to-[#04111a]/70" />
          </div>

          <div className="relative max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10 pt-23 sm:pt-24 lg:pt-28 pb-12 sm:pb-14">
            <div className="grid lg:grid-cols-[0.96fr_1.04fr] gap-8 lg:gap-12 items-center">
              {/* LEFT */}

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-[#c4ced5]">
                    <CircleCheck
                      size={14}
                      className="text-[#26becb]"
                    />
                    E-Commerce Development
                  </div>
                </div>

                <h1
                  id="ecommerce-heading"
                  className="max-w-[790px] text-[40px] sm:text-[48px] lg:text-[58px] xl:text-[54px] leading-[1.04] font-semibold tracking-[-0.045em]"
                >
                  E-commerce platforms built for{" "}
                  <span className="text-[#22bdca]">
                    real customers and operations.
                  </span>
                </h1>

                <p className="max-w-[700px] mt-4 text-[13.5px] sm:text-[17px] leading-7 font-normal text-slate-300">
                  DevZore develops custom online stores, marketplaces and
                  commerce applications with product management, payments,
                  inventory, orders and administration.
                </p>

                <p className="max-w-[650px] mt-3 text-[13px] sm:text-[14px] leading-6 font-normal text-slate-400">
                  From product discovery and checkout to backend operations,
                  shipping and analytics, we develop around how your customers
                  buy and how your business manages commerce.
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-6">
                  <a
                    href="#ecommerce-project-enquiry"
                    className="inline-flex justify-center items-center gap-2.5 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[12px] font-semibold text-[#071923] transition-all"
                  >
                    Start Your Store
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href="#ecommerce-development-services"
                    className="inline-flex justify-center items-center gap-2.5 px-4 py-3 text-[12px] font-semibold text-white hover:text-[#28c5d4] transition-colors"
                  >
                    Explore E-Commerce Services
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
                  {[
                    "Online Stores",
                    "Payments",
                    "Inventory",
                    "Marketplaces",
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

              {/* COMMERCE VISUAL */}

              <div className="relative min-h-[380px] lg:min-h-[430px] hidden md:block">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-[390px] h-[390px] rounded-full bg-[#0796A8]/15 blur-[90px]" />

                  <div className="relative w-full max-w-[560px]">
                    <div className="relative rounded-[20px] border border-white/10 bg-[#091d27]/95 shadow-[0_35px_90px_rgba(0,0,0,0.45)] overflow-hidden">
                      <div className="h-9 px-4 border-b border-white/10 bg-[#0b222d] flex items-center justify-between">
                        <div className="flex gap-1.5">
                          {[1, 2, 3].map((item) => (
                            <span
                              key={item}
                              className="w-2 h-2 rounded-full bg-white/20"
                            />
                          ))}
                        </div>

                        <div className="w-[46%] h-4 rounded bg-white/[0.05]" />
                        <div className="w-5" />
                      </div>

                      <div className="p-5">
                        <div className="flex items-center justify-between mb-5">
                          <div>
                            <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#25bfce]">
                              Commerce Dashboard
                            </p>

                            <p className="text-[14px] font-semibold mt-1">
                              Store Overview
                            </p>
                          </div>

                          <div className="w-9 h-9 rounded-xl bg-[#18bdcb]/10 border border-[#18bdcb]/20 text-[#25bfce] flex items-center justify-center">
                            <ShoppingCart size={17} />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                          {[
                            ["Orders", "1,248"],
                            ["Revenue", "84.2K"],
                            ["Products", "326"],
                          ].map(([label, value]) => (
                            <div
                              key={label}
                              className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3"
                            >
                              <p className="text-[8px] text-slate-500">
                                {label}
                              </p>

                              <p className="text-[16px] font-semibold mt-2">
                                {value}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="grid grid-cols-[1.2fr_0.8fr] gap-3 mt-3">
                          <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3">
                            <p className="text-[8px] font-medium text-slate-400">
                              Sales Activity
                            </p>

                            <div className="flex items-end gap-2 h-20 mt-3">
                              {[35, 55, 42, 72, 58, 87, 67, 94].map(
                                (height, index) => (
                                  <div
                                    key={index}
                                    className="flex-1 rounded-t bg-[#18b7c6]/40"
                                    style={{ height: `${height}%` }}
                                  />
                                )
                              )}
                            </div>
                          </div>

                          <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3">
                            <p className="text-[8px] font-medium text-slate-400">
                              Recent Orders
                            </p>

                            <div className="space-y-2.5 mt-3">
                              {[1, 2, 3, 4].map((item) => (
                                <div
                                  key={item}
                                  className="flex items-center gap-2"
                                >
                                  <div className="w-5 h-5 rounded-md bg-[#18bdcb]/10" />
                                  <div className="flex-1 h-2 rounded bg-white/[0.08]" />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -left-6 top-14 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <CreditCard
                        size={18}
                        className="text-[#29c7d5]"
                      />
                      <p className="text-[9px] font-semibold mt-2">
                        Payments
                      </p>
                    </div>

                    <div className="absolute -right-5 top-16 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Package
                        size={18}
                        className="text-[#29c7d5]"
                      />
                      <p className="text-[9px] font-semibold mt-2">
                        Inventory
                      </p>
                    </div>

                    <div className="absolute -right-4 bottom-10 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Truck
                        size={18}
                        className="text-[#29c7d5]"
                      />
                      <p className="text-[9px] font-semibold mt-2">
                        Shipping
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
                  ["01", "Online Stores"],
                  ["02", "Marketplaces"],
                  ["03", "Payments"],
                  ["04", "Commerce Systems"],
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

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section
          className="relative py-10 md:py-12 bg-[#f8fafb]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-7 lg:gap-12">
              <div>
                <SectionLabel>E-Commerce Development</SectionLabel>

                <h2 className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3">
                  More than a storefront.{" "}
                  <span className="text-[#0796A8]">
                    A complete commerce system.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 font-normal text-slate-700">
                  A strong e-commerce platform connects the customer shopping
                  experience with payments, product management, inventory,
                  orders and business operations.
                </p>

                <p className="text-[13px] leading-6 mt-3 text-slate-500">
                  DevZore develops commerce platforms around the actual
                  ordering process instead of treating the storefront and
                  backend as separate systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section
          id="ecommerce-development-services"
          aria-labelledby="ecommerce-services-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel>What We Build</SectionLabel>

              <h2
                id="ecommerce-services-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                E-commerce solutions built around how your business sells.
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3 max-w-2xl">
                Different commerce businesses require different catalogue,
                payment, inventory, shipping and customer workflows.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0796A8]/40 hover:shadow-[0_18px_50px_rgba(7,25,35,0.08)]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#071923] to-[#18bdcb]" />

                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#f0f4f5] text-[#075f70] flex items-center justify-center">
                      {service.icon}
                    </div>

                    <span className="text-[10px] font-semibold text-slate-300">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-[#071923] text-[16px] leading-6 font-semibold mt-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-[12px] leading-5 mt-2">
                    {service.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2
                          size={12}
                          className="text-[#0796A8]"
                        />

                        <span className="text-[10px] font-medium text-slate-600">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            STANDARDS
        ===================================================== */}

        <section
          aria-labelledby="commerce-standards-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-70"
            style={darkGrid}
          />

          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel light>Development Standards</SectionLabel>

              <h2
                id="commerce-standards-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                Built for customer experience,{" "}
                <span className="text-[#25bfce]">
                  backed by real commerce operations.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3 max-w-2xl">
                Commerce development decisions affect customer experience,
                payments, inventory, security and how efficiently the business
                handles orders after checkout.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {standards.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-white/[0.09] bg-white/[0.035] p-5 hover:bg-white/[0.055] hover:border-[#1bbac8]/25 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg border border-[#1bbac8]/20 bg-[#0e2b36] text-[#27c2d0] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="text-[14px] font-semibold mt-4">
                    {item.title}
                  </h3>

                  <p className="text-[11px] leading-5 text-slate-400 mt-1.5">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            COMMERCE TYPES
        ===================================================== */}

        <section
          aria-labelledby="commerce-types-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-12 items-start">
              <div>
                <SectionLabel>Commerce Platforms</SectionLabel>

                <h2
                  id="commerce-types-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Different businesses need{" "}
                  <span className="text-[#0796A8]">
                    different commerce workflows.
                  </span>
                </h2>

                <p className="text-slate-600 text-[14px] leading-6 mt-4">
                  The platform structure can be adapted around products,
                  customers, vendors, stock, fulfilment and the way the
                  business actually operates.
                </p>

                <a
                  href="#ecommerce-project-enquiry"
                  className="inline-flex items-center gap-2 mt-5 text-[11px] font-semibold text-[#07899a] hover:text-[#071923] transition-colors"
                >
                  Discuss Your Store
                  <ArrowRight size={13} />
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {commerceTypes.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-[#0796A8]/35 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#eef4f5] text-[#07899a] flex items-center justify-center">
                      {item.icon}
                    </div>

                    <h3 className="text-[#071923] font-semibold text-[14px] mt-4">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 text-[11px] leading-5 mt-1.5">
                      {item.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PAYMENT GATEWAYS
        ===================================================== */}

        <section
          aria-labelledby="payment-gateways-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel>Payments</SectionLabel>

              <h2
                id="payment-gateways-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Payment integrations based on your market and merchant setup.
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3">
                Suitable payment providers can be integrated when merchant
                accounts, API access and provider functionality are available.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {paymentGateways.map((gateway) => (
                <article
                  key={gateway.name}
                  className="rounded-2xl border border-slate-200 bg-[#fbfcfc] p-5 hover:border-[#0796A8]/35 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#eef4f5] text-[#07899a] flex items-center justify-center">
                    <CreditCard size={17} />
                  </div>

                  <h3 className="text-[#071923] text-[14px] font-semibold mt-4">
                    {gateway.name}
                  </h3>

                  <p className="text-slate-500 text-[10px] leading-5 mt-1.5">
                    {gateway.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            TECHNOLOGY
        ===================================================== */}

        <section
          aria-labelledby="ecommerce-tech-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel>Technology</SectionLabel>

              <h2
                id="ecommerce-tech-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Modern technologies for custom commerce platforms.
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3">
                Technology choices are based on storefront functionality,
                backend requirements, integrations and deployment needs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {techStack.map((category) => (
                <article
                  key={category.category}
                  className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-[#0796A8]/35 transition-colors"
                >
                  <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#07899a]">
                    {category.category}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {category.items.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-200 bg-[#f8fafb] px-2.5 py-1.5 text-[10px] font-medium text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section
          aria-labelledby="ecommerce-process-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white"
        >
          <div
            className="absolute inset-0"
            style={darkGrid}
          />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel light>Our Process</SectionLabel>

              <h2
                id="ecommerce-process-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                From product catalogue{" "}
                <span className="text-[#25bfce]">
                  to a launch-ready store.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3">
                A structured workflow keeps design, commerce logic,
                integrations, testing and deployment organised.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="relative bg-[#071923] p-5 min-h-[175px] hover:bg-[#0a202a] transition-colors"
                >
                  <span className="text-[10px] font-semibold text-[#22bfce]">
                    {step.number}
                  </span>

                  <h3 className="text-[15px] font-semibold mt-6">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-[11px] leading-5 mt-2">
                    {step.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            USE CASES
        ===================================================== */}

        <section
          aria-labelledby="ecommerce-use-cases-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>E-Commerce Use Cases</SectionLabel>

                <h2
                  id="ecommerce-use-cases-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Different products. Different commerce requirements.
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  Catalogue, checkout, inventory and fulfilment functionality
                  can be adapted around the business and products being sold.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {useCases.map((item, index) => (
                  <div
                    key={item}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4 hover:border-[#0796A8]/40 transition-colors"
                  >
                    <div>
                      <span className="text-[8px] font-semibold text-[#0796A8]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="text-[#071923] text-[11px] font-semibold mt-1">
                        {item}
                      </h3>
                    </div>

                    <ArrowUpRight
                      size={13}
                      className="text-slate-300 group-hover:text-[#0796A8]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY DEVZORE
        ===================================================== */}

        <section
          aria-labelledby="ecommerce-why-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel>Why DevZore</SectionLabel>

              <h2
                id="ecommerce-why-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Commerce development around{" "}
                <span className="text-[#0796A8]">
                  your real business workflow.
                </span>
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3">
                We focus on how customers shop and how your team manages the
                commerce operation after an order is placed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyDevZore.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-[#fbfcfc] p-5 hover:border-[#0796A8]/35 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#eef4f5] text-[#07899a] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="text-[#071923] text-[14px] font-semibold mt-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 text-[11px] leading-5 mt-1.5">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            RELATED SERVICES
        ===================================================== */}

        <section
          aria-labelledby="ecommerce-related-heading"
          className="py-10 md:py-12 bg-[#f7f9fa] border-y border-slate-200"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div>
                <SectionLabel>Related Services</SectionLabel>

                <h2
                  id="ecommerce-related-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] mt-3"
                >
                  Supporting your complete commerce platform.
                </h2>
              </div>

              <Link
                to="/allservices"
                onClick={scrollTop}
                className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#07899a]"
              >
                View All Services
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={scrollTop}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 hover:border-[#0796A8]/40 hover:-translate-y-1 transition-all"
                >
                  <span className="text-[8px] tracking-[0.15em] font-semibold text-[#0796A8]">
                    {service.label}
                  </span>

                  <h3 className="text-[#071923] text-[14px] font-semibold mt-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-[10px] leading-5 mt-2">
                    {service.desc}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[9px] font-medium text-slate-500 group-hover:text-[#07899a]">
                      Explore service
                    </span>

                    <ArrowUpRight
                      size={13}
                      className="text-[#07899a]"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}

        <section
          aria-labelledby="ecommerce-faq-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[980px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div>
                <SectionLabel>FAQ</SectionLabel>

                <h2
                  id="ecommerce-faq-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] mt-3"
                >
                  E-commerce development questions clients ask.
                </h2>
              </div>

              <a
                href="#ecommerce-project-enquiry"
                className="self-start md:self-auto inline-flex items-center gap-2 rounded-lg bg-[#071923] px-4 py-2.5 text-[10px] font-semibold text-white"
              >
                Ask Your Question
                <ArrowRight size={12} />
              </a>
            </div>

            <div className="border-t border-slate-200">
              {visibleFaqs.map((faq, index) => {
                const isOpen = activeFaq === index;

                return (
                  <div
                    key={faq.q}
                    className="border-b border-slate-200"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveFaq(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`ecommerce-faq-${index}`}
                      className="w-full flex items-center justify-between gap-5 py-4 text-left"
                    >
                      <span
                        className={`text-[13px] sm:text-[14px] font-semibold transition-colors ${
                          isOpen
                            ? "text-[#07899a]"
                            : "text-[#071923]"
                        }`}
                      >
                        {faq.q}
                      </span>

                      <span
                        className={`w-7 h-7 flex-shrink-0 rounded-full border flex items-center justify-center transition-all ${
                          isOpen
                            ? "border-[#0796A8] bg-[#0796A8] text-white"
                            : "border-slate-200 text-[#071923]"
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
                      id={`ecommerce-faq-${index}`}
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

        {/* =====================================================
            PROJECT ENQUIRY
        ===================================================== */}

        <section
          id="ecommerce-project-enquiry"
          aria-labelledby="ecommerce-project-enquiry-heading"
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
                <SectionLabel light>Start an E-Commerce Project</SectionLabel>

                <h2
                  id="ecommerce-project-enquiry-heading"
                  className="text-[30px] sm:text-[35px] md:text-[40px] leading-[1.06] tracking-[-0.04em] font-semibold mt-3"
                >
                  Tell us what you{" "}
                  <span className="text-[#25bfce]">
                    want to sell and build.
                  </span>
                </h2>

                <p className="text-slate-300 text-[14px] leading-6 mt-4 max-w-lg">
                  Share your products, catalogue requirements, payment needs,
                  shipping workflow and important store features. We can review
                  the requirements and discuss the next step.
                </p>

                <div className="mt-5 space-y-2.5">
                  {[
                    "Custom online stores",
                    "Multi-vendor marketplaces",
                    "Payments and checkout",
                    "Inventory and order management",
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
                    Prefer a direct conversation?
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

              {/* FORM */}

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
                      <option>E-Commerce Development</option>
                      <option>Custom Online Store</option>
                      <option>Multi-Vendor Marketplace</option>
                      <option>E-Commerce MVP</option>
                      <option>Payment Integration</option>
                      <option>Inventory & Order System</option>
                      <option>Existing Store Improvement</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="ecommerce-timeline"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Preferred Timeline
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
                      <option>3+ months</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="ecommerce-message"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Details *
                    </label>

                    <textarea
                      id="ecommerce-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your products, customers, catalogue size, payment requirements, shipping workflow and important store features..."
                      className="w-full resize-none rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] leading-5 text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
                  <p className="text-[9px] leading-4 text-slate-500 max-w-sm">
                    Share enough information for us to understand your commerce
                    requirements. Detailed scope and integrations can be
                    discussed afterwards.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-2 rounded-lg bg-[#1bbdca] hover:bg-[#28c9d5] px-5 py-3 text-[11px] font-semibold text-[#071923] transition-colors"
                  >
                    Send E-Commerce Enquiry
                    <Send size={13} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <section className="bg-[#06151d] border-t border-white/[0.06]">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6 py-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-white text-[14px] font-semibold">
                  Planning an online store? We’re ready to build it.
                </p>

                <p className="text-slate-500 text-[10px] mt-1">
                  Custom stores, marketplaces, payments and commerce systems by
                  DevZore.
                </p>
              </div>

              <Link
                to="/contact"
                onClick={scrollTop}
                className="inline-flex self-start items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-[10px] font-semibold text-[#071923] hover:bg-slate-100 transition-colors"
              >
                Contact DevZore
                <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ECommerce;