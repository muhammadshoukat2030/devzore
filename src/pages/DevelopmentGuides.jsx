import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Gauge,
  Globe,
  Layers3,
  Lightbulb,
  Rocket,
  SearchCheck,
  Server,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
} from "lucide-react";

const DevelopmentGuides = () => {
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

  // GUIDES

  const guides = [
    {
      icon: <Globe size={20} />,
      number: "01",
      title: "Web Development",
      description:
        "Learn about modern websites, web applications, responsive development and choosing the right approach for your project.",
      topics: [
        "Business Websites",
        "Web Applications",
        "Responsive Design",
      ],
      link: "/web-development",
      linkText: "Explore Web Development",
    },
    {
      icon: <Code2 size={20} />,
      number: "02",
      title: "React Development",
      description:
        "Understand React development, component-based architecture and how modern frontend applications are structured.",
      topics: [
        "React Applications",
        "Reusable Components",
        "Frontend Architecture",
      ],
      link: "/reactdevelopment",
      linkText: "Explore React Development",
    },
    {
      icon: <Layers3 size={20} />,
      number: "03",
      title: "MERN Stack",
      description:
        "Explore how MongoDB, Express, React and Node.js work together to build full-stack web applications.",
      topics: [
        "MongoDB",
        "Express & Node.js",
        "Full-Stack Applications",
      ],
      link: "/mern-stack-development",
      linkText: "Explore MERN Stack",
    },
    {
      icon: <Smartphone size={20} />,
      number: "04",
      title: "Mobile App Development",
      description:
        "Learn the fundamentals of planning and developing modern mobile applications for businesses and startups.",
      topics: [
        "Mobile App Planning",
        "Cross-Platform Apps",
        "Mobile UX",
      ],
      link: "/mobile-apps",
      linkText: "Explore Mobile Apps",
    },
    {
      icon: <Cloud size={20} />,
      number: "05",
      title: "SaaS Development",
      description:
        "Understand SaaS architecture, subscriptions, dashboards, authentication and scalable product development.",
      topics: [
        "SaaS Architecture",
        "Subscriptions",
        "User Management",
      ],
      link: "/saas-product-development",
      linkText: "Explore SaaS Development",
    },
    {
      icon: <Sparkles size={20} />,
      number: "06",
      title: "Generative AI",
      description:
        "Explore AI applications, LLM integrations, intelligent assistants, chatbots and AI-powered product development.",
      topics: [
        "LLM Integration",
        "AI Assistants",
        "AI Applications",
      ],
      link: "/generative-ai-development",
      linkText: "Explore AI Development",
    },
    {
      icon: <Server size={20} />,
      number: "07",
      title: "Backend & APIs",
      description:
        "Learn about backend architecture, APIs, databases and the systems that power modern digital products.",
      topics: [
        "REST APIs",
        "Backend Architecture",
        "Database Integration",
      ],
      link: "/backend-api",
      linkText: "Explore Backend Development",
    },
    {
      icon: <ShoppingCart size={20} />,
      number: "08",
      title: "E-Commerce",
      description:
        "Understand the core components of modern online stores, from product management to checkout and payments.",
      topics: [
        "Online Stores",
        "Product Management",
        "Payment Integration",
      ],
      link: "/ecommerce",
      linkText: "Explore E-Commerce",
    },
    {
      icon: <SearchCheck size={20} />,
      number: "09",
      title: "SEO & Optimization",
      description:
        "Learn how technical SEO, crawlability, performance and on-page optimization improve website visibility.",
      topics: [
        "Technical SEO",
        "Website Performance",
        "Search Visibility",
      ],
      link: "/seo-services",
      linkText: "Explore SEO Services",
    },
  ];

  // PRINCIPLES

  const principles = [
    {
      icon: <Lightbulb size={18} />,
      title: "Plan Before Building",
      text: "Define the problem, users, requirements and essential features before development begins.",
    },
    {
      icon: <Gauge size={18} />,
      title: "Build for Performance",
      text: "Fast loading, responsive interfaces and efficient architecture improve the overall user experience.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Think About Security",
      text: "Authentication, validation, permissions and secure data handling should be considered from the beginning.",
    },
    {
      icon: <Database size={18} />,
      title: "Design for Growth",
      text: "A clean data model and maintainable architecture make future improvements easier to implement.",
    },
  ];

  // LEARNING PATH

  const learningPath = [
    {
      number: "01",
      title: "Understand the Problem",
      description:
        "Start by identifying the users, business requirements and problem the digital product needs to solve.",
    },
    {
      number: "02",
      title: "Choose the Product Type",
      description:
        "Decide whether the requirement is best served by a website, web app, mobile app, SaaS product or another software solution.",
    },
    {
      number: "03",
      title: "Plan the Architecture",
      description:
        "Consider frontend, backend, database, integrations, user access and important technical requirements.",
    },
    {
      number: "04",
      title: "Build & Validate",
      description:
        "Develop the important functionality, test core workflows and validate the product experience.",
    },
    {
      number: "05",
      title: "Launch & Improve",
      description:
        "Deploy the product, monitor how it performs and improve features based on real requirements.",
    },
  ];

  // FEATURED RESOURCE GROUPS

  const resourceGroups = [
    {
      icon: <Rocket size={18} />,
      title: "For Startups",
      description:
        "Learn how MVPs, SaaS products and early-stage software can move from idea to launch.",
      link: "/startup-solutions",
      linkText: "Startup Solutions",
    },
    {
      icon: <Layers3 size={18} />,
      title: "For Businesses",
      description:
        "Explore management systems, custom software, automation and digital business solutions.",
      link: "/business-solutions",
      linkText: "Business Solutions",
    },
    {
      icon: <Code2 size={18} />,
      title: "For Developers",
      description:
        "Explore frontend, backend, MERN stack, APIs and modern application architecture.",
      link: "/allservices",
      linkText: "Development Services",
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

  // STRUCTURED DATA

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://devzore.com/guides#webpage",
    url: "https://devzore.com/guides",
    name: "Development Guides",
    description:
      "Practical development guides and resources covering web development, React, MERN stack, mobile apps, SaaS, generative AI, backend APIs, e-commerce and SEO.",
    isPartOf: {
      "@id": "https://devzore.com/#website",
    },
    about: {
      "@id": "https://devzore.com/#organization",
    },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "DevZore Development Guides",
    itemListElement: guides.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "WebPage",
        name: guide.title,
        description: guide.description,
        url: `https://devzore.com${guide.link}`,
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
        name: "Development Guides",
        item: "https://devzore.com/guides",
      },
    ],
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
          {JSON.stringify(itemListSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
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
          aria-labelledby="development-guides-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-55"
              style={darkGrid}
            />

            <div className="absolute -top-28 left-[12%] w-[520px] h-[520px] rounded-full bg-[#0796A8]/12 blur-[145px]" />

            <div className="absolute top-8 right-[5%] w-[420px] h-[420px] rounded-full bg-[#20bdcb]/7 blur-[130px]" />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#04111a]/85" />
          </div>

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6 pt-23 sm:pt-24 lg:pt-28 pb-10 sm:pb-12">
            <div className="max-w-[900px] mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.17em] uppercase text-[#c2ccd2]">
                <BookOpen size={14} className="text-[#25c0ce]" />
                Development Guides
              </div>

              <h1
                id="development-guides-heading"
                className="mt-5 text-[40px] sm:text-[50px] lg:text-[62px] xl:text-[54px] leading-[1.04] font-semibold tracking-[-0.045em]"
              >
                Practical guides for{" "}
                <span className="text-[#22bdca]">
                  modern digital products.
                </span>
              </h1>

              <p className="max-w-[760px] mx-auto mt-4 text-[16px] sm:text-[15px] leading-7 text-slate-300">
                Explore practical topics covering web development, mobile
                applications, SaaS, AI, e-commerce, backend systems and search
                optimization.
              </p>

              <p className="max-w-[700px] mx-auto mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
                Use these resources to understand development concepts,
                technology choices and the building blocks behind modern
                software products.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  to="/blog"
                  onClick={scrollTop}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[12px] font-semibold text-[#071923] transition-all"
                >
                  Read Our Blog
                  <ArrowRight size={14} />
                </Link>

                <a
                  href="#guide-topics"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold text-white hover:text-[#28c5d4] transition-colors"
                >
                  Explore Guides
                  <ArrowRight size={14} />
                </a>
              </div>

              <div className="mt-7 pt-5 border-t border-white/[0.08] flex flex-wrap justify-center gap-x-6 gap-y-2.5">
                {[
                  "Web Development",
                  "SaaS",
                  "Mobile Apps",
                  "AI Development",
                ].map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 text-[10px] font-medium text-slate-400"
                  >
                    <CheckCircle2
                      size={12}
                      className="text-[#25c0ce]"
                    />

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* GUIDE STRIP */}

          <div className="relative border-t border-white/[0.08] bg-[#06151d]/90">
            <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
              <div className="grid grid-cols-2 lg:grid-cols-4">
                {[
                  ["01", "Learn"],
                  ["02", "Plan"],
                  ["03", "Build"],
                  ["04", "Improve"],
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
            <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-7 lg:gap-12 items-start">
              <div>
                <SectionLabel>Development Resources</SectionLabel>

                <h2 className="text-[28px] sm:text-[34px] md:text-[40px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3">
                  Understand what goes into{" "}
                  <span className="text-[#0796A8]">
                    building good software.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 text-slate-700">
                  Building a digital product involves more than choosing a
                  programming language. Product requirements, user experience,
                  application architecture, security, performance and future
                  maintenance all influence the final result.
                </p>

                <p className="text-[13px] leading-6 text-slate-500 mt-3">
                  These guide categories help you explore the development areas
                  most relevant to your website, application or software
                  product.
                </p>

                <div className="grid sm:grid-cols-2 gap-2.5 mt-5">
                  {[
                    "Understand product requirements",
                    "Explore development approaches",
                    "Learn important software concepts",
                    "Compare relevant service areas",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5"
                    >
                      <CheckCircle2
                        size={13}
                        className="text-[#07899a]"
                      />

                      <span className="text-[10px] font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GUIDE TOPICS */}

        <section
          id="guide-topics"
          aria-labelledby="guide-topics-heading"
          className="py-10 md:py-12 bg-white scroll-mt-24"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Explore Topics</SectionLabel>

              <h2
                id="guide-topics-heading"
                className="text-[28px] sm:text-[34px] md:text-[40px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                Development guides &{" "}
                <span className="text-[#0796A8]">resources.</span>
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3">
                Start with the development area most relevant to the product
                you want to understand, improve or build.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {guides.map((guide) => (
                <article
                  key={guide.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0796A8]/40 hover:shadow-[0_18px_50px_rgba(7,25,35,0.08)]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#071923] to-[#18bdcb]" />

                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center group-hover:bg-[#071923] group-hover:text-[#28c5d4] transition-colors">
                      {guide.icon}
                    </div>

                    <span className="text-[10px] font-semibold text-slate-300">
                      {guide.number}
                    </span>
                  </div>

                  <h3 className="mt-4 text-[15px] font-semibold text-[#071923]">
                    {guide.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-slate-600">
                    {guide.description}
                  </p>

                  <div className="mt-4 space-y-2">
                    {guide.topics.map((topic) => (
                      <div
                        key={topic}
                        className="flex items-center gap-2 text-[10px] text-slate-600"
                      >
                        <Check
                          size={11}
                          className="text-[#07899a] shrink-0"
                        />

                        {topic}
                      </div>
                    ))}
                  </div>

                  <Link
                    to={guide.link}
                    onClick={scrollTop}
                    className="inline-flex items-center gap-1.5 mt-5 text-[10px] font-semibold text-[#07899a] group/link"
                  >
                    {guide.linkText}

                    <ArrowRight
                      size={11}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}

        <section
          aria-labelledby="development-principles-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white"
        >
          <div className="absolute inset-0" style={darkGrid} />

          <div className="absolute right-0 top-0 w-[500px] h-[430px] bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel light>Development Fundamentals</SectionLabel>

              <h2
                id="development-principles-heading"
                className="text-[28px] sm:text-[34px] md:text-[40px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                Principles behind{" "}
                <span className="text-[#25bfce]">better software.</span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3 max-w-2xl">
                Good digital products depend on planning, usability,
                performance, security and maintainable technical decisions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
              {principles.map((item) => (
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
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* LEARNING PATH */}

        <section
          aria-labelledby="learning-path-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.65fr_1.35fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>Product Thinking</SectionLabel>

                <h2
                  id="learning-path-heading"
                  className="text-[28px] sm:text-[34px] md:text-[40px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
                >
                  A simple path from{" "}
                  <span className="text-[#0796A8]">
                    idea to product.
                  </span>
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  The exact process varies by project, but most successful
                  digital products move through the same core stages.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                {learningPath.map((step) => (
                  <article
                    key={step.number}
                    className="rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <span className="text-[9px] font-semibold text-[#07899a]">
                      {step.number}
                    </span>

                    <h3 className="text-[#071923] text-[13px] font-semibold mt-2">
                      {step.title}
                    </h3>

                    <p className="text-slate-500 text-[10px] leading-5 mt-1.5">
                      {step.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RESOURCE GROUPS */}

        <section className="py-10 md:py-12 bg-white">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Explore by Goal</SectionLabel>

              <h2 className="text-[28px] sm:text-[34px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3">
                Find resources based on{" "}
                <span className="text-[#0796A8]">what you are building.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {resourceGroups.map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  onClick={scrollTop}
                  className="group rounded-2xl border border-slate-200 bg-[#fbfcfc] p-5 hover:border-[#0796A8]/40 hover:-translate-y-1 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="text-[#071923] text-[15px] font-semibold mt-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 text-[11px] leading-5 mt-2">
                    {item.description}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#07899a] mt-4">
                    {item.linkText}
                    <ArrowUpRight size={11} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG CTA */}

        <section className="py-10 md:py-12 bg-[#f7f9fa] border-y border-slate-200">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-7 lg:gap-12 items-center">
              <div>
                <SectionLabel>More Resources</SectionLabel>

                <h2 className="text-[28px] sm:text-[34px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3">
                  Continue learning on the{" "}
                  <span className="text-[#0796A8]">DevZore blog.</span>
                </h2>
              </div>

              <div>
                <p className="text-slate-600 text-[14px] leading-6">
                  Explore additional articles about websites, development,
                  software products, technical SEO, business systems and
                  digital product development.
                </p>

                <Link
                  to="/blog"
                  onClick={scrollTop}
                  className="inline-flex items-center gap-2 mt-4 rounded-lg bg-[#071923] px-4 py-2.5 text-[10px] font-semibold text-white hover:bg-[#0b2631] transition-colors"
                >
                  Visit DevZore Blog
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}

        <section className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden">
          <div className="absolute inset-0" style={darkGrid} />

          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#0796A8]/10 blur-[145px]" />

          <div className="relative max-w-[920px] mx-auto px-5 sm:px-6 text-center">
            <div className="w-10 h-10 mx-auto rounded-xl bg-[#0b2a35] text-[#28c5d4] flex items-center justify-center">
              <Sparkles size={19} />
            </div>

            <h2 className="mt-4 text-[29px] sm:text-[35px] md:text-[40px] font-semibold tracking-[-0.04em] leading-[1.06]">
              Need help turning your idea into{" "}
              <span className="text-[#25bfce]">a working product?</span>
            </h2>

            <p className="max-w-2xl mx-auto mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
              Tell us what you want to build and we can discuss the product
              requirements, suitable development approach and next steps.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                to="/contact"
                onClick={scrollTop}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-[11px] font-semibold text-[#071923] hover:bg-slate-100 transition-colors"
              >
                Discuss Your Project
                <ArrowRight size={13} />
              </Link>

              <Link
                to="/allservices"
                onClick={scrollTop}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.12] px-5 py-3 text-[11px] font-semibold text-white hover:border-[#23bfce]/40 hover:text-[#28c5d4] transition-colors"
              >
                Explore Our Services
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}

        <section className="bg-[#06151d] border-t border-white/[0.06]">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6 py-5">
            <nav
              aria-label="Development guide links"
              className="flex flex-wrap justify-center gap-x-5 gap-y-2"
            >
              {[
                ["Web Development", "/web-development"],
                ["Generative AI", "/generative-ai-development"],
                ["SaaS Development", "/saas-product-development"],
                ["MERN Stack", "/mern-stack-development"],
                ["SEO Services", "/seo-services"],
                ["DevZore Blog", "/blog"],
                ["Contact DevZore", "/contact"],
              ].map(([label, path]) => (
                <Link
                  key={path}
                  to={path}
                  onClick={scrollTop}
                  className="text-[9px] font-medium text-slate-500 hover:text-[#25bfce] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </section>
      </div>
    </>
  );
};

export default DevelopmentGuides;