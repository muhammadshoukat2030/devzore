import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Check,
  CheckCircle2,
  CircleHelp,
  Code2,
  Database,
  Gauge,
  Globe,
  Lightbulb,
  Newspaper,
  Rocket,
  SearchCheck,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";

const Resources = () => {
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

  // RESOURCE COLLECTIONS

  const resourceCollections = [
    {
      icon: <Newspaper size={20} />,
      number: "01",
      title: "Development Blog",
      description:
        "Explore articles about web development, software, SaaS, AI, SEO, performance and modern digital products.",
      points: [
        "Development insights",
        "Software topics",
        "SEO & performance",
      ],
      link: "/blog",
      linkText: "Read Our Blog",
    },
    {
      icon: <BookOpen size={20} />,
      number: "02",
      title: "Development Guides",
      description:
        "Practical guides covering websites, applications, mobile apps, backend systems, SaaS and development decisions.",
      points: [
        "Web development",
        "SaaS & applications",
        "Planning & architecture",
      ],
      link: "/guides",
      linkText: "Explore Guides",
    },
    {
      icon: <CircleHelp size={20} />,
      number: "03",
      title: "Frequently Asked Questions",
      description:
        "Find answers about DevZore services, project planning, pricing, development timelines, support and collaboration.",
      points: [
        "Project process",
        "Pricing questions",
        "Support & maintenance",
      ],
      link: "/faqs",
      linkText: "Browse FAQs",
    },
  ];

  // TOPICS

  const topics = [
    {
      icon: <Globe size={18} />,
      title: "Web Development",
      description:
        "Modern websites, web applications, responsive development and scalable web architecture.",
      link: "/web-development",
    },
    {
      icon: <Smartphone size={18} />,
      title: "Mobile Applications",
      description:
        "Mobile product planning, application development and connected digital experiences.",
      link: "/mobile-apps",
    },
    {
      icon: <Sparkles size={18} />,
      title: "Generative AI",
      description:
        "AI applications, assistants, LLM integrations, chatbots and intelligent automation.",
      link: "/generative-ai-development",
    },
    {
      icon: <BarChart3 size={18} />,
      title: "SaaS Products",
      description:
        "SaaS architecture, dashboards, subscriptions, authentication and scalable product development.",
      link: "/saas-product-development",
    },
    {
      icon: <ShoppingCart size={18} />,
      title: "E-Commerce",
      description:
        "Online stores, product experiences, payments and scalable commerce functionality.",
      link: "/ecommerce",
    },
    {
      icon: <SearchCheck size={18} />,
      title: "SEO & Search",
      description:
        "Technical SEO, crawlability, structured data, performance and search visibility.",
      link: "/seo-services",
    },
  ];

  // INSIGHT AREAS

  const insightAreas = [
    {
      icon: <Code2 size={18} />,
      title: "Development",
      description:
        "Understand development approaches, architecture and important decisions behind digital products.",
    },
    {
      icon: <Gauge size={18} />,
      title: "Performance",
      description:
        "Learn how speed, responsiveness and technical performance affect websites and applications.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Security",
      description:
        "Explore security considerations for applications, APIs, authentication and business systems.",
    },
    {
      icon: <Database size={18} />,
      title: "Scalability",
      description:
        "Understand how data, APIs and application architecture can support future product growth.",
    },
    {
      icon: <Workflow size={18} />,
      title: "Business Systems",
      description:
        "Explore how custom software can organize workflows, operations, reporting and business data.",
    },
    {
      icon: <SearchCheck size={18} />,
      title: "Digital Growth",
      description:
        "Understand how technology, SEO and digital strategy support a stronger online presence.",
    },
  ];

  // LEARNING FLOW

  const learningFlow = [
    {
      number: "01",
      title: "Understand the Problem",
      description:
        "Start with the users, business goals and problem the product needs to solve.",
    },
    {
      number: "02",
      title: "Explore the Options",
      description:
        "Compare websites, applications, SaaS, mobile and custom software approaches.",
    },
    {
      number: "03",
      title: "Plan the Product",
      description:
        "Define important features, workflows, architecture and project priorities.",
    },
    {
      number: "04",
      title: "Build & Validate",
      description:
        "Develop the essential functionality, test important flows and prepare for launch.",
    },
    {
      number: "05",
      title: "Improve Over Time",
      description:
        "Use real requirements and feedback to guide future improvements and development.",
    },
    {
      number: "06",
      title: "Maintain the Product",
      description:
        "Keep performance, security, software dependencies and technical health under review.",
    },
  ];

  // AUDIENCES

  const audiences = [
    {
      icon: <Rocket size={19} />,
      title: "Startup Founders",
      description:
        "Explore MVP planning, SaaS products, product development and practical paths from idea to launch.",
      link: "/startup-solutions",
      linkText: "Startup Solutions",
    },
    {
      icon: <Workflow size={19} />,
      title: "Business Owners",
      description:
        "Learn about websites, management systems, custom software and digital tools for business operations.",
      link: "/business-solutions",
      linkText: "Business Solutions",
    },
    {
      icon: <Code2 size={19} />,
      title: "Product Teams",
      description:
        "Explore development services, application architecture, backend systems and product improvement options.",
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

  // STRUCTURED DATA

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://devzore.com/resources#webpage",
    url: "https://devzore.com/resources",
    name: "Development Resources",
    description:
      "DevZore resources covering software development, web applications, SaaS, mobile apps, AI, e-commerce, SEO and digital product development.",
    isPartOf: {
      "@id": "https://devzore.com/#website",
    },
    about: {
      "@id": "https://devzore.com/#organization",
    },
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "DevZore Resource Collections",
    itemListElement: resourceCollections.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "WebPage",
        name: item.title,
        description: item.description,
        url: `https://devzore.com${item.link}`,
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
        name: "Resources",
        item: "https://devzore.com/resources",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(collectionSchema)}
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
          aria-labelledby="resources-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-55"
              style={darkGrid}
            />

            <div className="absolute -top-32 left-[9%] w-[560px] h-[560px] rounded-full bg-[#0796A8]/12 blur-[150px]" />

            <div className="absolute top-4 right-[5%] w-[430px] h-[430px] rounded-full bg-[#20bdcb]/7 blur-[135px]" />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#04111a]/85" />
          </div>

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6 pt-20 sm:pt-24 lg:pt-28 pb-10 sm:pb-12">
            <div className="max-w-[900px] mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.17em] uppercase text-[#c2ccd2]">
                <Lightbulb size={14} className="text-[#25c0ce]" />
                Insights & Resources
              </div>

              <h1
                id="resources-heading"
                className="mt-5 text-[40px] sm:text-[50px] lg:text-[62px] xl:text-[68px] leading-[1.04] font-semibold tracking-[-0.045em]"
              >
                Resources for building{" "}
                <span className="text-[#22bdca]">
                  better digital products.
                </span>
              </h1>

              <p className="max-w-[760px] mx-auto mt-5 text-[16px] sm:text-[17px] leading-7 text-slate-300">
                Explore practical insights about websites, software
                development, SaaS, mobile applications, generative AI,
                e-commerce, SEO and modern digital products.
              </p>

              <p className="max-w-[700px] mx-auto mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
                Use our blog, guides and FAQs to understand important concepts,
                compare approaches and make more informed product decisions.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  to="/guides"
                  onClick={scrollTop}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[12px] font-semibold text-[#071923] transition-colors"
                >
                  Explore Development Guides
                  <ArrowRight size={14} />
                </Link>

                <Link
                  to="/blog"
                  onClick={scrollTop}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold text-white hover:text-[#28c5d4] transition-colors"
                >
                  Read Our Blog
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="mt-7 pt-5 border-t border-white/[0.08] flex flex-wrap justify-center gap-x-6 gap-y-2.5">
                {[
                  "Development",
                  "SaaS Products",
                  "AI",
                  "Business Technology",
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

          {/* HERO STRIP */}

          <div className="relative border-t border-white/[0.08] bg-[#06151d]/90">
            <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
              <div className="grid grid-cols-2 lg:grid-cols-4">
                {[
                  ["01", "Learn"],
                  ["02", "Explore"],
                  ["03", "Compare"],
                  ["04", "Build"],
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
                <SectionLabel>Knowledge Hub</SectionLabel>

                <h2 className="mt-3 text-[28px] sm:text-[34px] md:text-[40px] leading-[1.08] tracking-[-0.035em] font-semibold">
                  Learn before you{" "}
                  <span className="text-[#0796A8]">build.</span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 text-slate-700">
                  Good digital product decisions start with understanding the
                  problem, the available options and the technical requirements
                  behind the solution.
                </p>

                <p className="mt-3 text-[13px] leading-6 text-slate-500">
                  DevZore resources are organized to help founders, businesses
                  and product teams explore development topics without
                  unnecessary complexity.
                </p>

                <div className="grid sm:grid-cols-2 gap-2.5 mt-5">
                  {[
                    "Explore development concepts",
                    "Understand product options",
                    "Review project considerations",
                    "Learn about digital growth",
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

        {/* RESOURCE COLLECTIONS */}

        <section
          aria-labelledby="resource-collections-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Explore Resources</SectionLabel>

              <h2
                id="resource-collections-heading"
                className="mt-3 text-[28px] sm:text-[34px] md:text-[40px] leading-[1.08] tracking-[-0.035em] font-semibold"
              >
                Learn, explore &{" "}
                <span className="text-[#0796A8]">find answers.</span>
              </h2>

              <p className="mt-3 text-[14px] leading-6 text-slate-600">
                Choose the resource format that best matches what you want to
                understand.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {resourceCollections.map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  onClick={scrollTop}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0796A8]/40 hover:shadow-[0_18px_50px_rgba(7,25,35,0.08)]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#071923] to-[#18bdcb]" />

                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center group-hover:bg-[#071923] group-hover:text-[#28c5d4] transition-colors">
                      {item.icon}
                    </div>

                    <span className="text-[10px] font-semibold text-slate-300">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-4 text-[15px] font-semibold text-[#071923]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-4 space-y-2">
                    {item.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2 text-[10px] text-slate-600"
                      >
                        <Check
                          size={11}
                          className="text-[#07899a] shrink-0"
                        />

                        {point}
                      </div>
                    ))}
                  </div>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#07899a]">
                    {item.linkText}
                    <ArrowUpRight size={11} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* POPULAR TOPICS */}

        <section
          aria-labelledby="resource-topics-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.65fr_1.35fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>Explore Topics</SectionLabel>

                <h2
                  id="resource-topics-heading"
                  className="mt-3 text-[28px] sm:text-[34px] md:text-[40px] leading-[1.08] tracking-[-0.035em] font-semibold"
                >
                  Popular digital product{" "}
                  <span className="text-[#0796A8]">topics.</span>
                </h2>

                <p className="mt-3 text-[13px] leading-6 text-slate-600">
                  Explore service areas and product categories commonly used by
                  startups and businesses building modern digital products.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {topics.map((topic) => (
                  <Link
                    key={topic.title}
                    to={topic.link}
                    onClick={scrollTop}
                    className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 hover:border-[#0796A8]/40 transition-all"
                  >
                    <div className="shrink-0 w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      {topic.icon}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-[13px] font-semibold text-[#071923]">
                          {topic.title}
                        </h3>

                        <ArrowRight
                          size={11}
                          className="text-[#07899a] group-hover:translate-x-1 transition-transform"
                        />
                      </div>

                      <p className="mt-1.5 text-[10px] leading-5 text-slate-500">
                        {topic.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INSIGHT AREAS */}

        <section
          aria-labelledby="insight-areas-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden"
        >
          <div className="absolute inset-0" style={darkGrid} />

          <div className="absolute top-0 right-0 w-[500px] h-[430px] rounded-full bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel light>Knowledge Areas</SectionLabel>

              <h2
                id="insight-areas-heading"
                className="mt-3 text-[28px] sm:text-[34px] md:text-[40px] leading-[1.08] tracking-[-0.035em] font-semibold"
              >
                Understand what makes a{" "}
                <span className="text-[#25bfce]">
                  stronger digital product.
                </span>
              </h2>

              <p className="mt-3 text-[14px] leading-6 text-slate-400 max-w-2xl">
                Development decisions affect performance, security,
                maintainability, scalability and how useful a product remains
                over time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
              {insightAreas.map((item) => (
                <article
                  key={item.title}
                  className="bg-[#071923] p-5 min-h-[170px] hover:bg-[#0a202a] transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0c2a35] text-[#27c1cf] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="mt-5 text-[14px] font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-slate-400">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* LEARNING FLOW */}

        <section
          aria-labelledby="resource-learning-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Product Journey</SectionLabel>

              <h2
                id="resource-learning-heading"
                className="mt-3 text-[28px] sm:text-[34px] md:text-[40px] leading-[1.08] tracking-[-0.035em] font-semibold"
              >
                Learn across the{" "}
                <span className="text-[#0796A8]">
                  full product lifecycle.
                </span>
              </h2>

              <p className="mt-3 text-[13px] leading-6 text-slate-600">
                Useful product knowledge is not limited to development. It
                starts before code and continues after launch.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {learningFlow.map((step) => (
                <article
                  key={step.number}
                  className="rounded-xl border border-slate-200 bg-[#fbfcfc] p-4"
                >
                  <span className="text-[9px] font-semibold text-[#07899a]">
                    {step.number}
                  </span>

                  <h3 className="mt-2 text-[13px] font-semibold text-[#071923]">
                    {step.title}
                  </h3>

                  <p className="mt-1.5 text-[10px] leading-5 text-slate-500">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AUDIENCES */}

        <section
          aria-labelledby="resources-audience-heading"
          className="py-10 md:py-12 bg-[#f7f9fa] border-y border-slate-200"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Explore by Goal</SectionLabel>

              <h2
                id="resources-audience-heading"
                className="mt-3 text-[28px] sm:text-[34px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold"
              >
                Resources for different{" "}
                <span className="text-[#0796A8]">
                  product journeys.
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {audiences.map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  onClick={scrollTop}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 hover:border-[#0796A8]/40 hover:-translate-y-1 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="mt-4 text-[15px] font-semibold text-[#071923]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-slate-500">
                    {item.description}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#07899a]">
                    {item.linkText}
                    <ArrowUpRight size={11} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ / GUIDES CTA */}

        <section className="py-10 md:py-12 bg-white">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to="/guides"
                onClick={scrollTop}
                className="group rounded-2xl border border-slate-200 bg-[#fbfcfc] p-5 hover:border-[#0796A8]/40 transition-all"
              >
                <BookOpen
                  size={20}
                  className="text-[#07899a]"
                />

                <h2 className="mt-4 text-[18px] font-semibold text-[#071923]">
                  Looking for practical development guides?
                </h2>

                <p className="mt-2 text-[11px] leading-5 text-slate-500">
                  Explore focused guides covering development areas, product
                  planning and important technical concepts.
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold text-[#07899a]">
                  Explore Development Guides
                  <ArrowRight
                    size={11}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Link>

              <Link
                to="/faqs"
                onClick={scrollTop}
                className="group rounded-2xl border border-slate-200 bg-[#fbfcfc] p-5 hover:border-[#0796A8]/40 transition-all"
              >
                <CircleHelp
                  size={20}
                  className="text-[#07899a]"
                />

                <h2 className="mt-4 text-[18px] font-semibold text-[#071923]">
                  Have a specific project question?
                </h2>

                <p className="mt-2 text-[11px] leading-5 text-slate-500">
                  Browse common questions about services, pricing, project
                  timelines, development and ongoing support.
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold text-[#07899a]">
                  Browse Frequently Asked Questions
                  <ArrowRight
                    size={11}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}

        <section className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden">
          <div className="absolute inset-0" style={darkGrid} />

          <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[620px] h-[400px] bg-[#0796A8]/10 blur-[145px]" />

          <div className="relative max-w-[900px] mx-auto px-5 sm:px-6 text-center">
            <div className="w-10 h-10 mx-auto rounded-xl bg-[#0b2a35] text-[#28c5d4] flex items-center justify-center">
              <Lightbulb size={19} />
            </div>

            <h2 className="mt-4 text-[29px] sm:text-[35px] md:text-[40px] font-semibold tracking-[-0.04em] leading-[1.06]">
              Have a digital product{" "}
              <span className="text-[#25bfce]">you want to build?</span>
            </h2>

            <p className="max-w-2xl mx-auto mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
              Tell us about your idea, business requirements or existing
              product and we can discuss a suitable development approach.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                onClick={scrollTop}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[11px] font-semibold text-[#071923] transition-colors"
              >
                Discuss Your Project

                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                to="/allservices"
                onClick={scrollTop}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.12] px-5 py-3 text-[11px] font-semibold text-white hover:border-[#23bfce]/40 hover:text-[#28c5d4] transition-colors"
              >
                Explore Services

                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}

        <section className="bg-[#06151d] border-t border-white/[0.06]">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6 py-5">
            <nav
              aria-label="DevZore resource pages"
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
            >
              {[
                ["Blog", "/blog"],
                ["Development Guides", "/guides"],
                ["FAQs", "/faqs"],
                ["Web Development", "/web-development"],
                ["Generative AI", "/generative-ai-development"],
                ["SaaS Development", "/saas-product-development"],
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

export default Resources;