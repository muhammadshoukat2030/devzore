import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Code2,
  Gauge,
  Globe2,
  HeartHandshake,
  Layers3,
  Lightbulb,
  LockKeyhole,
  Minus,
  Plus,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Target,
  Users,
  Zap,
} from "lucide-react";

const About = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

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

  // CAPABILITIES

  const capabilities = [
    {
      icon: <Code2 size={19} />,
      title: "Web Applications",
      desc:
        "Responsive business websites, custom web applications, dashboards and customer-facing digital platforms.",
    },
    {
      icon: <Layers3 size={19} />,
      title: "Full-Stack Development",
      desc:
        "Frontend, backend, databases and APIs developed as connected parts of a complete software product.",
    },
    {
      icon: <Rocket size={19} />,
      title: "SaaS & MVP Development",
      desc:
        "Software products and MVPs designed around practical workflows, maintainable architecture and future development.",
    },
    {
      icon: <Smartphone size={19} />,
      title: "Mobile Applications",
      desc:
        "Cross-platform mobile applications connected with backend APIs, databases and business systems.",
    },
  ];

  // VALUES

  const values = [
    {
      icon: <HeartHandshake size={18} />,
      title: "Transparent Collaboration",
      desc:
        "Project scope, milestones, decisions and progress are kept clear so clients understand what is being built and why.",
    },
    {
      icon: <Code2 size={18} />,
      title: "Maintainable Engineering",
      desc:
        "We focus on organized architecture and reusable development patterns that make future maintenance easier.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Security-Conscious Development",
      desc:
        "Authentication, permissions, validation and secure application practices are considered where relevant.",
    },
    {
      icon: <Target size={18} />,
      title: "Business-Focused Decisions",
      desc:
        "Technology choices are guided by the actual product and business requirements rather than unnecessary complexity.",
    },
    {
      icon: <Gauge size={18} />,
      title: "Performance Focus",
      desc:
        "Responsive interfaces, frontend efficiency and backend performance are considered throughout development.",
    },
    {
      icon: <Users size={18} />,
      title: "Direct Communication",
      desc:
        "Clients can discuss requirements, feedback and project questions directly throughout the development process.",
    },
  ];

  // STORY CARDS

  const storyCards = [
    {
      icon: <Target size={18} />,
      title: "Our Mission",
      text:
        "To help businesses and startups build useful, maintainable and well-designed digital products through practical software development.",
    },
    {
      icon: <Rocket size={18} />,
      title: "Our Direction",
      text:
        "To continue developing DevZore as a software development partner for businesses that need modern web, mobile, SaaS and custom software solutions.",
    },
    {
      icon: <Lightbulb size={18} />,
      title: "Our Approach",
      text:
        "Understand the problem first, choose an appropriate development approach, build in clear stages and improve the product as its requirements evolve.",
    },
  ];

  // PROJECT TYPES

  const projectTypes = [
    {
      title: "Business Websites",
      desc: "Professional websites built around services, customers and business goals.",
    },
    {
      title: "Web Applications",
      desc: "Custom applications with workflows, dashboards, user accounts and business logic.",
    },
    {
      title: "SaaS Products",
      desc: "Multi-user software products with dashboards, subscriptions and application workflows.",
    },
    {
      title: "Mobile Applications",
      desc: "Cross-platform applications connected with APIs and backend services.",
    },
    {
      title: "Management Systems",
      desc: "Software for customers, sales, inventory, reporting and internal operations.",
    },
    {
      title: "E-Commerce Platforms",
      desc: "Online stores with products, customer workflows, payments and administration.",
    },
    {
      title: "Startup MVPs",
      desc: "Focused first versions of digital products built around essential functionality.",
    },
    {
      title: "Existing Software",
      desc: "Improvements, maintenance, integrations and further development for existing projects.",
    },
  ];

  // PROCESS

  const process = [
    {
      number: "01",
      title: "Discovery",
      desc:
        "We understand the business, users, project goals, required functionality and important constraints.",
    },
    {
      number: "02",
      title: "Planning",
      desc:
        "The scope, architecture, major workflows and development priorities are organized before implementation.",
    },
    {
      number: "03",
      title: "Design & Development",
      desc:
        "Interfaces and application functionality are developed in structured stages according to the project requirements.",
    },
    {
      number: "04",
      title: "Testing",
      desc:
        "Important workflows, responsive behaviour, business logic and user interactions are reviewed before release.",
    },
    {
      number: "05",
      title: "Deployment",
      desc:
        "The application is prepared for production and deployed to the appropriate hosting or cloud environment.",
    },
    {
      number: "06",
      title: "Support & Improvement",
      desc:
        "Maintenance, fixes and future improvements can continue according to the ongoing needs of the product.",
    },
  ];

  // WHY DEVZORE

  const reasons = [
    {
      icon: <Target size={18} />,
      title: "Requirement First",
      desc:
        "We start by understanding what the product actually needs to achieve before deciding how it should be built.",
    },
    {
      icon: <Layers3 size={18} />,
      title: "Complete Product Thinking",
      desc:
        "Frontend, backend, data, user experience and deployment are considered as connected parts of one product.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Responsible Development",
      desc:
        "Security, maintainability and application reliability are considered throughout the development lifecycle.",
    },
    {
      icon: <Zap size={18} />,
      title: "Practical Performance",
      desc:
        "We aim to avoid unnecessary complexity and keep interfaces and application workflows efficient.",
    },
    {
      icon: <Globe2 size={18} />,
      title: "Remote Collaboration",
      desc:
        "Projects can be handled remotely through clear communication, online meetings and agreed collaboration channels.",
    },
    {
      icon: <HeartHandshake size={18} />,
      title: "Continued Support",
      desc:
        "Development does not have to stop at launch. Maintenance and future improvements can continue as needed.",
    },
  ];

  // FAQ

  const faqs = [
    {
      q: "What is DevZore?",
      a:
        "DevZore is a software development agency providing web development, mobile app development, SaaS development, backend and API development, custom software, UI/UX, SEO and related digital services.",
    },
    {
      q: "Who founded DevZore?",
      a:
        "DevZore was founded by Muhammad Shoukat with a focus on building practical digital products and software solutions for businesses and startups.",
    },
    {
      q: "Where does DevZore provide its services?",
      a:
        "DevZore works remotely and can collaborate with businesses and startups in Pakistan and international markets through online communication and project collaboration tools.",
    },
    {
      q: "What type of software does DevZore build?",
      a:
        "DevZore can build business websites, web applications, SaaS products, mobile applications, management systems, dashboards, APIs, e-commerce platforms and custom digital solutions.",
    },
    {
      q: "Does DevZore build custom software?",
      a:
        "Yes. Custom software can be designed around specific business workflows, users, reporting requirements, integrations and operational needs.",
    },
    {
      q: "Does DevZore develop mobile applications?",
      a:
        "Yes. Mobile application projects can include cross-platform interfaces, backend APIs, authentication, database integration and supporting business systems.",
    },
    {
      q: "Can DevZore work on an existing project?",
      a:
        "Yes. Existing projects can be reviewed for further development, frontend improvements, backend work, integrations, bug fixing, performance improvements and maintenance.",
    },
    {
      q: "Does DevZore provide maintenance after launch?",
      a:
        "Yes. Ongoing support can include bug fixing, updates, troubleshooting, performance reviews and future product improvements.",
    },
    {
      q: "How can I discuss a project with DevZore?",
      a:
        "You can use the DevZore contact page to share your project requirements, goals and expected functionality. We can then discuss the scope and appropriate next steps.",
    },
  ];

  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 3);

  // RELATED SERVICES

  const relatedServices = [
    {
      icon: <Code2 size={20} />,
      title: "Web Development",
      desc:
        "Custom websites and web applications for businesses and digital products.",
      path: "/web-development",
    },
    {
      icon: <Server size={20} />,
      title: "Backend & API",
      desc:
        "Backend systems, databases, APIs and integrations for modern applications.",
      path: "/backend-api",
    },
    {
      icon: <Rocket size={20} />,
      title: "SaaS Product Development",
      desc:
        "SaaS platforms with user accounts, dashboards and product workflows.",
      path: "/saas-product-development",
    },
    {
      icon: <Smartphone size={20} />,
      title: "Mobile App Development",
      desc:
        "Cross-platform mobile applications connected with scalable backend systems.",
      path: "/mobile-apps",
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

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://devzore.com/about#aboutpage",
    url: "https://devzore.com/about",
    name: "About DevZore",
    description:
      "Learn about DevZore, a software development agency building web applications, mobile applications, SaaS products, backend systems and custom digital solutions.",
    isPartOf: {
      "@id": "https://devzore.com/#website",
    },
    about: {
      "@id": "https://devzore.com/#organization",
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
        name: "About",
        item: "https://devzore.com/about",
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

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(aboutSchema)}
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
          aria-labelledby="about-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-55"
              style={darkGrid}
            />

            <div className="absolute -top-28 left-[8%] w-[540px] h-[540px] rounded-full bg-[#0796A8]/12 blur-[145px]" />

            <div className="absolute top-12 right-[5%] w-[420px] h-[420px] rounded-full bg-[#20bdcb]/7 blur-[130px]" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#04111a] via-[#04111a]/96 to-[#04111a]/78" />
          </div>

          <div className="relative max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10 pt-20 sm:pt-24 lg:pt-23 pb-11 sm:pb-13">
            <div className="grid lg:grid-cols-[0.98fr_1.02fr] gap-8 lg:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.17em] uppercase text-[#c2ccd2]">
                  <Globe2 size={14} className="text-[#25c0ce]" />
                  About DevZore
                </div>

                <h1
                  id="about-heading"
                  className="max-w-[790px] mt-5 text-[40px] sm:text-[48px] lg:text-[58px] xl:text-[54px] leading-[1.04] font-semibold tracking-[-0.045em]"
                >
                  Software development for{" "}
                  <span className="text-[#22bdca]">
                    modern businesses and startups.
                  </span>
                </h1>

                <p className="max-w-[690px] mt-4 text-[16px] sm:text-[13.5px] leading-7 text-slate-300">
                  DevZore is a software development agency founded by Muhammad
                  Shoukat, focused on building practical web applications,
                  mobile applications, SaaS products and custom software.
                </p>

                <p className="max-w-[660px] mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
                  We work around real product requirements, user workflows and
                  business goals instead of forcing every project into the same
                  technical solution.
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-6">
                  <Link
                    to="/contact"
                    onClick={scrollTop}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[12px] font-semibold text-[#071923] transition-colors"
                  >
                    Discuss Your Project
                    <ArrowRight size={14} />
                  </Link>

                  <a
                    href="#about-story"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 text-[12px] font-semibold text-white hover:text-[#28c5d4] transition-colors"
                  >
                    Learn About DevZore
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
                  {[
                    "Remote Collaboration",
                    "Custom Development",
                    "Product-Focused",
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

              {/* CAPABILITY VISUAL */}

              <div className="hidden md:block">
                <div className="relative rounded-[22px] border border-white/[0.1] bg-[#091d27]/95 p-5 sm:p-6 shadow-[0_35px_90px_rgba(0,0,0,0.4)]">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.17em] text-[#25c0ce] font-semibold">
                        What We Build
                      </p>

                      <p className="text-[15px] font-semibold mt-1">
                        Digital Products & Software
                      </p>
                    </div>

                    <div className="w-9 h-9 rounded-xl bg-[#0c2a35] text-[#28c5d4] flex items-center justify-center">
                      <Code2 size={18} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 mt-4">
                    {capabilities.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4"
                      >
                        <div className="w-9 h-9 rounded-xl bg-[#0c2a35] text-[#28c5d4] flex items-center justify-center">
                          {item.icon}
                        </div>

                        <h2 className="mt-3 text-[12px] font-semibold text-white">
                          {item.title}
                        </h2>

                        <p className="mt-1.5 text-[9px] leading-4 text-slate-500">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 mt-3">
                    {[
                      ["Plan", "Requirements"],
                      ["Build", "Development"],
                      ["Support", "After Launch"],
                    ].map(([title, label]) => (
                      <div
                        key={title}
                        className="rounded-lg border border-white/[0.07] bg-[#071923] px-3 py-2.5"
                      >
                        <p className="text-[8px] font-semibold text-[#26c3d1]">
                          {title}
                        </p>

                        <p className="text-[7px] text-slate-500 mt-0.5">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HERO STRIP */}

          <div className="relative border-t border-white/[0.08] bg-[#06151d]/90">
            <div className="max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10">
              <div className="grid grid-cols-2 lg:grid-cols-4">
                {[
                  ["01", "Web Products"],
                  ["02", "Mobile Apps"],
                  ["03", "SaaS Platforms"],
                  ["04", "Custom Software"],
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

        {/* STORY */}

        <section
          id="about-story"
          aria-labelledby="about-story-heading"
          className="py-10 md:py-12 bg-[#f8fafb] scroll-mt-24"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>Our Story</SectionLabel>

                <h2
                  id="about-story-heading"
                  className="mt-3 text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold"
                >
                  Building software with a{" "}
                  <span className="text-[#0796A8]">
                    practical approach.
                  </span>
                </h2>

                <div className="mt-4 space-y-3">
                  <p className="text-[14px] leading-7 text-slate-700">
                    DevZore was created to help businesses turn ideas and
                    operational requirements into useful digital products.
                    That may be a business website, management system, SaaS
                    platform, mobile application or custom software product.
                  </p>

                  <p className="text-[13px] leading-6 text-slate-500">
                    Our approach starts with understanding the problem before
                    deciding how it should be built. The goal is to create
                    software that fits the actual product requirements and can
                    continue evolving after launch.
                  </p>

                  <p className="text-[13px] leading-6 text-slate-500">
                    We can work with startups building new products as well as
                    businesses that need to improve, replace or extend existing
                    digital systems.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {storyCards.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-white p-4 flex gap-3"
                  >
                    <div className="w-9 h-9 shrink-0 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-[13px] font-semibold text-[#071923]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[11px] leading-5 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}

        <section
          aria-labelledby="about-values-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden"
        >
          <div className="absolute inset-0" style={darkGrid} />

          <div className="absolute top-0 right-0 w-[500px] h-[420px] rounded-full bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel light>How We Work</SectionLabel>

              <h2
                id="about-values-heading"
                className="mt-3 text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold"
              >
                Principles that guide{" "}
                <span className="text-[#25bfce]">
                  our development work.
                </span>
              </h2>

              <p className="mt-3 max-w-2xl text-[14px] leading-6 text-slate-400">
                Good software depends on more than a working interface. We
                consider communication, maintainability, security, performance
                and future development throughout the project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
              {values.map((item) => (
                <article
                  key={item.title}
                  className="bg-[#071923] p-5 min-h-[180px] hover:bg-[#0a202a] transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0c2a35] text-[#27c1cf] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="mt-5 text-[14px] font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-slate-400">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECT TYPES */}

        <section
          aria-labelledby="about-project-types-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>What We Work On</SectionLabel>

                <h2
                  id="about-project-types-heading"
                  className="mt-3 text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold"
                >
                  Different products for{" "}
                  <span className="text-[#0796A8]">
                    different business needs.
                  </span>
                </h2>

                <p className="mt-3 text-[13px] leading-6 text-slate-600">
                  Development can be adapted to the users, workflows and
                  operational requirements of each project.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {projectTypes.map((item, index) => (
                  <article
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <span className="text-[8px] font-semibold text-[#07899a]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-1 text-[13px] font-semibold text-[#071923]">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-[10px] leading-5 text-slate-500">
                      {item.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}

        <section
          aria-labelledby="about-process-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden"
        >
          <div className="absolute inset-0" style={darkGrid} />

          <div className="absolute -top-20 left-[8%] w-[440px] h-[440px] bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel light>Our Process</SectionLabel>

              <h2
                id="about-process-heading"
                className="mt-3 text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold"
              >
                A clear path from requirements to{" "}
                <span className="text-[#25bfce]">
                  working software.
                </span>
              </h2>

              <p className="mt-3 text-[14px] leading-6 text-slate-400 max-w-2xl">
                A structured workflow helps keep the product, technical
                decisions and delivery aligned throughout development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="bg-[#071923] p-5 min-h-[175px] hover:bg-[#0a202a] transition-colors"
                >
                  <span className="text-[10px] font-semibold text-[#25bfce]">
                    {step.number}
                  </span>

                  <h3 className="mt-6 text-[15px] font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-slate-400">
                    {step.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY DEVZORE */}

        <section
          aria-labelledby="why-devzore-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Why DevZore</SectionLabel>

              <h2
                id="why-devzore-heading"
                className="mt-3 text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold"
              >
                Development focused on the{" "}
                <span className="text-[#0796A8]">
                  product and its users.
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {reasons.map((item) => (
                <article
                  key={item.title}
                  className="flex gap-3 rounded-xl border border-slate-200 bg-[#fbfcfc] p-4 hover:border-[#0796A8]/35 transition-colors"
                >
                  <div className="w-9 h-9 shrink-0 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-[13px] font-semibold text-[#071923]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[10px] leading-5 text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}

        <section
          aria-labelledby="about-related-heading"
          className="py-10 md:py-12 bg-[#f7f9fa] border-y border-slate-200"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Related Services</SectionLabel>

              <h2
                id="about-related-heading"
                className="mt-3 text-[28px] sm:text-[33px] md:text-[38px] leading-[1.08] tracking-[-0.035em] font-semibold"
              >
                Explore how DevZore can help{" "}
                <span className="text-[#0796A8]">
                  build your product.
                </span>
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

                  <h3 className="mt-3 text-[13px] font-semibold text-[#071923]">
                    {service.title}
                  </h3>

                  <p className="mt-1.5 text-[10px] leading-5 text-slate-500">
                    {service.desc}
                  </p>

                  <span className="mt-3 inline-flex items-center gap-1.5 text-[9px] font-semibold text-[#07899a]">
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
          aria-labelledby="about-faq-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[980px] mx-auto px-5 sm:px-6">
            <div className="mb-6">
              <SectionLabel>FAQ</SectionLabel>

              <h2
                id="about-faq-heading"
                className="mt-3 text-[28px] sm:text-[33px] md:text-[38px] leading-[1.08] tracking-[-0.035em] font-semibold"
              >
                Common questions about{" "}
                <span className="text-[#0796A8]">DevZore.</span>
              </h2>

              <p className="mt-3 text-[13px] leading-6 text-slate-600 max-w-2xl">
                Learn more about our services, collaboration model and the
                types of software projects we work on.
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
                      aria-controls={`about-faq-${originalIndex}`}
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
                        className={`w-7 h-7 shrink-0 rounded-full border flex items-center justify-center transition-all ${
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
                      id={`about-faq-${originalIndex}`}
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

        {/* FINAL CTA */}

        <section className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden">
          <div className="absolute inset-0" style={darkGrid} />

          <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[620px] h-[400px] bg-[#0796A8]/10 blur-[145px]" />

          <div className="relative max-w-[900px] mx-auto px-5 sm:px-6 text-center">
            <div className="w-10 h-10 mx-auto rounded-xl bg-[#0b2a35] text-[#28c5d4] flex items-center justify-center">
              <Rocket size={19} />
            </div>

            <h2 className="mt-4 text-[29px] sm:text-[35px] md:text-[40px] font-semibold tracking-[-0.04em] leading-[1.06]">
              Have a software project{" "}
              <span className="text-[#25bfce]">you want to build?</span>
            </h2>

            <p className="max-w-2xl mx-auto mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
              Share your idea, business requirements or existing product and
              we can discuss a practical development approach for the next
              stage.
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
                Explore Our Services

                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* BOTTOM LINKS */}

        <section className="bg-[#06151d] border-t border-white/[0.06]">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6 py-5">
            <nav
              aria-label="DevZore about related pages"
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
            >
              {[
                ["All Services", "/allservices"],
                ["Web Development", "/web-development"],
                ["Mobile Apps", "/mobile-apps"],
                ["SaaS Development", "/saas-product-development"],
                ["Custom Software", "/custom-software-solutions"],
                ["Resources", "/resources"],
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

export default About;