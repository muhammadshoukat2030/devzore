import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Bell,
  Bug,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Code2,
  Database,
  Gauge,
  Globe2,
  HardDrive,
  LifeBuoy,
  LockKeyhole,
  Mail,
  Minus,
  MonitorCheck,
  Plus,
  RefreshCw,
  Send,
  Server,
  Settings,
  Shield,
  Wrench,
} from "lucide-react";

const Maintenance = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [activePlan, setActivePlan] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Website Maintenance",
    timeline: "",
    message: "",
  });

  // BACKGROUND GRIDS

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

  // SERVICES

  const services = [
    {
      icon: <Shield size={21} />,
      number: "01",
      title: "Website Security Maintenance",
      desc:
        "Ongoing security-focused maintenance for website dependencies, frameworks, SSL configuration and application settings.",
      points: [
        "Security update reviews",
        "Dependency checks",
        "SSL configuration review",
      ],
    },
    {
      icon: <MonitorCheck size={21} />,
      number: "02",
      title: "Website Monitoring",
      desc:
        "Monitor website availability, application health and important operational issues that may affect users.",
      points: [
        "Availability monitoring",
        "Application health checks",
        "Error review",
      ],
    },
    {
      icon: <RefreshCw size={21} />,
      number: "03",
      title: "Website Updates",
      desc:
        "Planned framework, library and dependency updates with compatibility review and testing before deployment.",
      points: [
        "Framework updates",
        "Package maintenance",
        "Compatibility testing",
      ],
    },
    {
      icon: <Bug size={21} />,
      number: "04",
      title: "Website Bug Fixing",
      desc:
        "Technical troubleshooting across frontend, backend, APIs, authentication, databases and integrations.",
      points: [
        "Frontend fixes",
        "Backend troubleshooting",
        "Integration issues",
      ],
    },
    {
      icon: <Gauge size={21} />,
      number: "05",
      title: "Performance Optimisation",
      desc:
        "Review frontend delivery, application code, APIs, caching and database performance to identify improvement opportunities.",
      points: [
        "Performance review",
        "Caching improvements",
        "Database optimisation",
      ],
    },
    {
      icon: <HardDrive size={21} />,
      number: "06",
      title: "Backup & Recovery Support",
      desc:
        "Review website and database backup arrangements together with practical recovery procedures for important application data.",
      points: [
        "Backup review",
        "Recovery planning",
        "Data protection guidance",
      ],
    },
    {
      icon: <Settings size={21} />,
      number: "07",
      title: "Website Management",
      desc:
        "Ongoing technical management covering deployments, environments, hosting configuration, logs and application maintenance.",
      points: [
        "Deployment support",
        "Environment management",
        "Technical coordination",
      ],
    },
    {
      icon: <Bell size={21} />,
      number: "08",
      title: "Technical Troubleshooting",
      desc:
        "Structured investigation of production problems, application errors, deployment issues and unexpected website behaviour.",
      points: [
        "Incident investigation",
        "Deployment troubleshooting",
        "Error diagnosis",
      ],
    },
    {
      icon: <Activity size={21} />,
      number: "09",
      title: "Maintenance Reviews",
      desc:
        "Clear summaries of completed work, technical issues, updates and recommended improvements for the website or application.",
      points: [
        "Work summaries",
        "Issue reporting",
        "Technical recommendations",
      ],
    },
  ];

  // SUPPORT AREAS

  const supportAreas = [
    {
      icon: <Shield size={19} />,
      title: "Security Maintenance",
      desc:
        "Keep frameworks, dependencies and important website configurations under regular technical review.",
    },
    {
      icon: <Gauge size={19} />,
      title: "Performance",
      desc:
        "Review website speed, frontend delivery, APIs and database performance where appropriate.",
    },
    {
      icon: <Bug size={19} />,
      title: "Bug Fixing",
      desc:
        "Investigate website problems across frontend, backend, authentication and integrations.",
    },
    {
      icon: <LifeBuoy size={19} />,
      title: "Technical Support",
      desc:
        "Ongoing technical assistance for updates, operational problems and application maintenance.",
    },
    {
      icon: <HardDrive size={19} />,
      title: "Backup Review",
      desc:
        "Review backup configuration and recovery arrangements around your hosting and database setup.",
    },
    {
      icon: <MonitorCheck size={19} />,
      title: "Application Monitoring",
      desc:
        "Review important operational signals and application availability as part of the support scope.",
    },
  ];

  // SUPPORT PLANS

  const plans = [
    {
      name: "Essential",
      desc:
        "For business websites and smaller applications that need routine technical maintenance and support.",
      features: [
        "Routine dependency and security reviews",
        "Website availability monitoring",
        "Backup configuration review",
        "Performance health checks",
        "General bug-fixing allocation",
        "SSL and deployment checks",
        "Maintenance summary",
        "Email support",
      ],
      cta: "Discuss Essential",
    },
    {
      name: "Professional",
      desc:
        "For active websites, e-commerce platforms and growing digital products requiring broader technical support.",
      features: [
        "Everything in Essential",
        "More frequent dependency reviews",
        "Application error monitoring",
        "Database and API health checks",
        "Performance optimisation support",
        "Priority issue handling",
        "Deployment support",
        "Technical recommendations",
      ],
      cta: "Discuss Professional",
    },
    {
      name: "Advanced",
      desc:
        "For SaaS products and custom software with broader ongoing maintenance and application support requirements.",
      features: [
        "Everything in Professional",
        "Custom monitoring requirements",
        "Infrastructure health reviews",
        "Database performance reviews",
        "Deployment workflow support",
        "Technical-debt reviews",
        "Incident investigation support",
        "Ongoing technical coordination",
      ],
      cta: "Discuss Advanced",
    },
  ];

  // PROCESS

  const process = [
    {
      number: "01",
      title: "Website Review",
      desc:
        "We review the website or application stack, codebase, deployment setup, dependencies, database and known technical issues.",
    },
    {
      number: "02",
      title: "Maintenance Scope",
      desc:
        "The required support areas are identified and a practical maintenance scope is defined around the current system.",
    },
    {
      number: "03",
      title: "Monitoring & Backups",
      desc:
        "Monitoring, logs and backup arrangements are reviewed or configured where they form part of the agreed support scope.",
    },
    {
      number: "04",
      title: "Updates & Fixes",
      desc:
        "Dependencies, bugs, security concerns and operational issues are handled according to priority and the maintenance agreement.",
    },
    {
      number: "05",
      title: "Testing & Deployment",
      desc:
        "Relevant changes are reviewed and tested before production deployment to reduce avoidable regressions.",
    },
    {
      number: "06",
      title: "Reporting & Improvement",
      desc:
        "Completed maintenance work is summarised and technical recommendations are provided for future improvements.",
    },
  ];

  // SUPPORTED PROJECTS

  const supportedProjects = [
    "Business Websites",
    "React Applications",
    "Next.js Applications",
    "Node.js Backends",
    "MERN Applications",
    "SaaS Platforms",
    "E-Commerce Platforms",
    "REST APIs",
    "Dashboards",
    "Database Systems",
    "Custom Web Applications",
    "Existing Client Projects",
  ];

  // WHY MAINTENANCE

  const maintenanceReasons = [
    {
      icon: <RefreshCw size={19} />,
      title: "Software Changes",
      desc:
        "Frameworks, packages, browsers and APIs continue changing after a website has been launched.",
    },
    {
      icon: <Shield size={19} />,
      title: "Security Exposure",
      desc:
        "Outdated dependencies and incorrect configuration can create avoidable technical risk over time.",
    },
    {
      icon: <Gauge size={19} />,
      title: "Performance Changes",
      desc:
        "Growing data, new features and third-party integrations can affect performance as an application evolves.",
    },
    {
      icon: <Database size={19} />,
      title: "Data Growth",
      desc:
        "Databases and storage requirements can change as customers and application activity increase.",
    },
    {
      icon: <AlertTriangle size={19} />,
      title: "Unexpected Issues",
      desc:
        "Production systems can encounter errors that require investigation even when no major development is underway.",
    },
    {
      icon: <LockKeyhole size={19} />,
      title: "Operational Reliability",
      desc:
        "Routine technical review helps important deployment, backup and application processes stay organised.",
    },
  ];

  // FAQ

  const faqs = [
    {
      q: "What are website maintenance services?",
      a:
        "Website maintenance services provide ongoing technical care after a website or application is launched. Depending on the scope, maintenance can include updates, bug fixing, security reviews, monitoring, backups, performance work and technical troubleshooting.",
    },
    {
      q: "What is included in website maintenance?",
      a:
        "The exact scope depends on the project. It can include dependency updates, security maintenance, bug fixing, monitoring, backups, performance improvements, deployment checks, database support and technical reporting.",
    },
    {
      q: "Does DevZore provide website support services?",
      a:
        "Yes. DevZore provides technical website and application support covering frontend problems, backend issues, APIs, databases, integrations, deployment environments, updates and performance issues.",
    },
    {
      q: "Can DevZore maintain a website you did not build?",
      a:
        "Yes. Existing websites and applications can be reviewed before maintenance begins. We inspect the technology stack, codebase, deployment environment and known issues before defining the support scope.",
    },
    {
      q: "Which technologies can you maintain?",
      a:
        "Support can cover modern JavaScript applications including React, Next.js, Node.js, Express, MERN applications, REST APIs, databases and custom web platforms. Each project is reviewed before the scope is confirmed.",
    },
    {
      q: "Do you provide React and Node.js maintenance?",
      a:
        "Yes. Support can include React frontend maintenance, Node.js and Express backend work, API troubleshooting, dependency updates, database issues and deployment configuration.",
    },
    {
      q: "Do you provide SaaS and application maintenance?",
      a:
        "Yes. SaaS maintenance can include frontend and backend updates, authentication problems, APIs, databases, deployment support, monitoring, bug fixing and performance improvements depending on the architecture.",
    },
    {
      q: "Can you fix bugs in an existing website or application?",
      a:
        "Yes. Bug fixing can cover frontend, backend, API, database, authentication, integration and deployment problems after the relevant issue and codebase have been reviewed.",
    },
    {
      q: "Do you provide website troubleshooting?",
      a:
        "Yes. Troubleshooting can include application errors, broken functionality, API failures, deployment problems, database issues, performance problems and unexpected application behaviour.",
    },
    {
      q: "Do you provide website monitoring?",
      a:
        "Website monitoring can be included in a maintenance arrangement. The exact monitoring setup depends on the application infrastructure and the level of visibility required.",
    },
    {
      q: "Do you handle website security maintenance?",
      a:
        "Yes. Security maintenance can include dependency reviews, framework updates, SSL checks, configuration reviews and remediation of identified vulnerabilities. No website can be guaranteed to be completely risk-free.",
    },
    {
      q: "Can you improve website speed as part of maintenance?",
      a:
        "Yes. Performance work can include image and asset optimisation, JavaScript bundle reviews, caching improvements, API optimisation and database query improvements where appropriate.",
    },
    {
      q: "Do you provide website backup support?",
      a:
        "Yes. We can review website and database backup arrangements, backup configuration and recovery procedures based on the technologies and hosting environment used.",
    },
    {
      q: "What is the difference between website maintenance and website management?",
      a:
        "Maintenance generally focuses on keeping the technical system updated, stable and functional. Website management can be broader and may also include deployments, hosting configuration, monitoring and ongoing technical coordination.",
    },
    {
      q: "How much do website maintenance services cost?",
      a:
        "Pricing depends on the technology stack, application size, existing condition, support level and expected workload. A maintenance scope and proposal can be prepared after reviewing the project.",
    },
  ];

  // RELATED SERVICES

  const relatedServices = [
    {
      label: "WEB",
      title: "Web Development",
      desc:
        "Modern business websites and custom web applications built around your requirements.",
      path: "/web-development",
    },
    {
      label: "BACKEND",
      title: "Backend & API Development",
      desc:
        "Backend systems, APIs, authentication, databases and third-party integrations.",
      path: "/backend-api",
    },
    {
      label: "SAAS",
      title: "SaaS Product Development",
      desc:
        "Custom SaaS products with frontend, backend, dashboards and scalable workflows.",
      path: "/saas-product-development",
    },
    {
      label: "MERN",
      title: "MERN Stack Development",
      desc:
        "Full-stack React, Node.js, Express.js and MongoDB application development.",
      path: "/mern-stack-development",
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
      `Website Maintenance Enquiry - ${formData.name}`
    );

    const body = encodeURIComponent(
`Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Support Requirement: ${formData.service}
Timeline: ${formData.timeline || "Not specified"}

Website / Application Details:
${formData.message}`
    );

    window.location.href = `mailto:hellodevzore@gmail.com?subject=${subject}&body=${body}`;
  };

  // STRUCTURED DATA

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://devzore.com/maintenance#service",
    name: "Website Maintenance & Support Services",
    url: "https://devzore.com/maintenance",
    serviceType: "Website Maintenance and Support Services",
    description:
      "Website maintenance and support services including website updates, bug fixing, troubleshooting, security maintenance, backups, monitoring, performance optimization and web application support.",
    provider: {
      "@id": "https://devzore.com/#organization",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Website Maintenance Services",
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
        name: "Website Maintenance & Support",
        item: "https://devzore.com/maintenance",
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
        {/* HERO */}

        <section
          aria-labelledby="maintenance-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-28 right-[7%] w-[480px] h-[480px] rounded-full bg-[#078fa5]/12 blur-[130px]" />

            <div
              className="absolute inset-0 opacity-50"
              style={darkGrid}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#04111a] via-[#04111a]/95 to-[#04111a]/70" />
          </div>

          <div className="relative max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10 pt-20 sm:pt-24 lg:pt-24 pb-12 sm:pb-13">
            <div className="grid lg:grid-cols-[0.96fr_1.04fr] gap-8 lg:gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-[#c4ced5] mb-5">
                  <Wrench
                    size={14}
                    className="text-[#26becb]"
                  />
                  Website Maintenance & Support
                </div>

                <h1
                  id="maintenance-heading"
                  className="max-w-[780px] text-[40px] sm:text-[48px] lg:text-[58px] xl:text-[53px] leading-[1.04] font-semibold tracking-[-0.045em]"
                >
                  Keep your website{" "}
                  <span className="text-[#22bdca]">
                    maintained, monitored and supported.
                  </span>
                </h1>

                <p className="max-w-[700px] mt-4 text-[16px] sm:text-[13.5px] leading-7 text-slate-300">
                  DevZore provides ongoing website maintenance and technical
                  support for business websites, SaaS products, dashboards,
                  APIs and custom web applications.
                </p>

                <p className="max-w-[660px] mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
                  From bug fixing and software updates to security reviews,
                  performance work, monitoring and deployment support, the
                  maintenance scope can be adapted around your application.
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-6">
                  <a
                    href="#maintenance-project-enquiry"
                    className="inline-flex justify-center items-center gap-2 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[12px] font-semibold text-[#071923] transition-all"
                  >
                    Discuss Maintenance
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href="#maintenance-services"
                    className="inline-flex justify-center items-center gap-2 px-4 py-3 text-[12px] font-semibold text-white hover:text-[#28c5d4] transition-colors"
                  >
                    Explore Support Services
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
                  {[
                    "Security",
                    "Monitoring",
                    "Bug Fixing",
                    "Performance",
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

              {/* SUPPORT VISUAL */}

              <div className="relative min-h-[370px] lg:min-h-[420px] hidden md:block">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-[390px] h-[390px] rounded-full bg-[#0796A8]/15 blur-[90px]" />

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
                        <div className="flex justify-between items-center mb-5">
                          <div>
                            <div className="w-20 h-2 rounded bg-[#1bbac8]/60 mb-2" />
                            <div className="w-36 h-3 rounded bg-white/80" />
                          </div>

                          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#25c1ce]/25 bg-[#25c1ce]/10 px-3 py-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#25c1ce]" />
                            <span className="text-[8px] font-semibold text-[#31cbd7]">
                              SYSTEM HEALTHY
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3 mb-3">
                          {[
                            ["99.9%", "Availability"],
                            ["0", "Critical Issues"],
                            ["24", "Checks"],
                          ].map(([value, label]) => (
                            <div
                              key={label}
                              className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3"
                            >
                              <p className="text-[15px] font-semibold text-white">
                                {value}
                              </p>

                              <p className="text-[8px] text-slate-500 mt-1">
                                {label}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-[9px] font-semibold text-slate-300">
                              Maintenance Overview
                            </span>

                            <Activity
                              size={13}
                              className="text-[#22bdca]"
                            />
                          </div>

                          <div className="space-y-3">
                            {[
                              ["Security Review", "Complete"],
                              ["Dependency Updates", "Reviewed"],
                              ["Database Backup", "Active"],
                              ["Performance Check", "Stable"],
                            ].map(([name, status]) => (
                              <div
                                key={name}
                                className="flex justify-between items-center"
                              >
                                <span className="text-[9px] text-slate-500">
                                  {name}
                                </span>

                                <span className="text-[8px] font-medium text-[#26c3d0]">
                                  {status}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -left-5 top-16 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Shield
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[9px] font-semibold mt-2">
                        Security
                      </p>
                    </div>

                    <div className="absolute -right-5 top-20 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <MonitorCheck
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[9px] font-semibold mt-2">
                        Monitoring
                      </p>
                    </div>

                    <div className="absolute -right-4 bottom-8 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Gauge
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[9px] font-semibold mt-2">
                        Performance
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
                  ["01", "Security Reviews"],
                  ["02", "Website Monitoring"],
                  ["03", "Bug Fixing"],
                  ["04", "Performance Support"],
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
                <SectionLabel>Website Maintenance</SectionLabel>

                <h2 className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3">
                  Technical care after{" "}
                  <span className="text-[#0796A8]">
                    your website has launched.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 text-slate-700">
                  Websites and applications continue changing after launch.
                  Dependencies receive updates, APIs evolve, data grows and
                  production issues can appear over time.
                </p>

                <p className="text-[13px] leading-6 mt-3 text-slate-500">
                  Ongoing maintenance provides a structured way to review,
                  update and support the technical parts of the system as your
                  business continues using it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}

        <section
          id="maintenance-services"
          aria-labelledby="maintenance-services-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel>Maintenance Services</SectionLabel>

              <h2
                id="maintenance-services-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                Ongoing support for websites and web applications.
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3 max-w-2xl">
                Maintenance can cover routine updates, operational review,
                troubleshooting and technical improvements according to the
                needs of your application.
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

        {/* SUPPORT AREAS */}

        <section
          aria-labelledby="maintenance-support-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-70"
            style={darkGrid}
          />

          <div className="absolute top-0 right-0 w-[500px] h-[420px] bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel light>Ongoing Technical Care</SectionLabel>

              <h2
                id="maintenance-support-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                Maintenance is more than{" "}
                <span className="text-[#25bfce]">
                  changing website content.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3 max-w-2xl">
                Modern applications can require regular attention across
                security, performance, backups, dependencies and production
                systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {supportAreas.map((item) => (
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

        {/* SUPPORT OPTIONS */}

        <section
          aria-labelledby="maintenance-plans-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
            <div className="text-center max-w-[720px] mx-auto mb-7">
              <SectionLabel>Flexible Support</SectionLabel>

              <h2
                id="maintenance-plans-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Maintenance support based on your application needs.
              </h2>

              <p className="text-slate-600 text-[13px] leading-6 mt-3">
                The final maintenance scope depends on your stack, current
                technical condition, workload and support expectations.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-5">
              {plans.map((plan, index) => (
                <button
                  key={plan.name}
                  type="button"
                  onClick={() => setActivePlan(index)}
                  className={`px-4 py-2.5 rounded-lg text-[11px] font-semibold transition-all border ${
                    activePlan === index
                      ? "bg-[#071923] text-white border-[#071923]"
                      : "bg-white border-slate-200 text-slate-600 hover:border-[#0796A8]/40"
                  }`}
                >
                  {plan.name}
                </button>
              ))}
            </div>

            <div className="max-w-[720px] mx-auto rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-[0_18px_50px_rgba(7,25,35,0.05)]">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                  <span className="text-[9px] tracking-[0.16em] font-semibold text-[#07899a] uppercase">
                    Maintenance Support
                  </span>

                  <h3 className="text-[#071923] text-[22px] font-semibold tracking-[-0.02em] mt-1">
                    {plans[activePlan].name}
                  </h3>
                </div>

                {activePlan === 1 && (
                  <span className="self-start rounded-full bg-[#eaf7f8] border border-[#0796A8]/15 px-3 py-1 text-[9px] font-semibold text-[#07899a]">
                    BROADER SUPPORT
                  </span>
                )}
              </div>

              <p className="text-slate-600 text-[12px] leading-6 mt-3">
                {plans[activePlan].desc}
              </p>

              <div className="grid sm:grid-cols-2 gap-2.5 mt-5">
                {plans[activePlan].features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2
                      size={13}
                      className="text-[#0796A8] flex-shrink-0 mt-0.5"
                    />

                    <span className="text-[10px] leading-5 text-slate-600">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <a
                  href="#maintenance-project-enquiry"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#071923] px-4 py-2.5 text-[10px] font-semibold text-white hover:bg-[#0b2833] transition-colors"
                >
                  {plans[activePlan].cta}
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}

        <section
          aria-labelledby="maintenance-process-heading"
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
                id="maintenance-process-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                From technical review{" "}
                <span className="text-[#25bfce]">
                  to ongoing maintenance and improvement.
                </span>
              </h2>
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

        {/* PROJECT TYPES */}

        <section
          aria-labelledby="supported-projects-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>Projects We Support</SectionLabel>

                <h2
                  id="supported-projects-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Existing websites and applications can be reviewed first.
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  DevZore can review an existing project before taking on an
                  ongoing support scope.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {supportedProjects.map((item, index) => (
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

        {/* WHY MAINTENANCE */}

        <section
          aria-labelledby="why-maintenance-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel>Why Maintenance Matters</SectionLabel>

              <h2
                id="why-maintenance-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Websites continue changing{" "}
                <span className="text-[#0796A8]">
                  even when the design stays the same.
                </span>
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3 max-w-2xl">
                Ongoing maintenance helps identify and manage technical changes
                before they become harder to deal with.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {maintenanceReasons.map((item) => (
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

        {/* RELATED SERVICES */}

        <section
          aria-labelledby="maintenance-related-heading"
          className="py-10 md:py-12 bg-[#f7f9fa] border-y border-slate-200"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div>
                <SectionLabel>Related Services</SectionLabel>

                <h2
                  id="maintenance-related-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] mt-3"
                >
                  Supporting your wider application needs.
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

        {/* FAQ */}

        <section
          aria-labelledby="maintenance-faq-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[980px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div>
                <SectionLabel>FAQ</SectionLabel>

                <h2
                  id="maintenance-faq-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] mt-3"
                >
                  Website maintenance questions businesses commonly ask.
                </h2>
              </div>

              <a
                href="#maintenance-project-enquiry"
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
                      aria-controls={`maintenance-faq-${index}`}
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
                      id={`maintenance-faq-${index}`}
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
          id="maintenance-project-enquiry"
          aria-labelledby="maintenance-project-enquiry-heading"
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
                <SectionLabel light>Start a Support Project</SectionLabel>

                <h2
                  id="maintenance-project-enquiry-heading"
                  className="text-[30px] sm:text-[35px] md:text-[40px] leading-[1.06] tracking-[-0.04em] font-semibold mt-3"
                >
                  Tell us what your{" "}
                  <span className="text-[#25bfce]">
                    website currently needs.
                  </span>
                </h2>

                <p className="text-slate-300 text-[14px] leading-6 mt-4 max-w-lg">
                  Share the existing website or application, technology stack
                  and current technical issues. We can review the situation and
                  discuss a suitable maintenance scope.
                </p>

                <div className="mt-5 space-y-2.5">
                  {[
                    "Existing projects can be reviewed",
                    "Frontend and backend support",
                    "Bug fixing and maintenance",
                    "Ongoing technical coordination",
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
                      htmlFor="maintenance-name"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Your Name *
                    </label>

                    <input
                      id="maintenance-name"
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
                      htmlFor="maintenance-email"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Email Address *
                    </label>

                    <input
                      id="maintenance-email"
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
                      htmlFor="maintenance-company"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Company
                    </label>

                    <input
                      id="maintenance-company"
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
                      htmlFor="maintenance-service"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Support Requirement
                    </label>

                    <select
                      id="maintenance-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option>Website Maintenance</option>
                      <option>Bug Fixing</option>
                      <option>Security Maintenance</option>
                      <option>Performance Optimisation</option>
                      <option>Website Monitoring</option>
                      <option>React / Next.js Support</option>
                      <option>Node.js / Backend Support</option>
                      <option>SaaS Maintenance</option>
                      <option>API / Database Support</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="maintenance-timeline"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Preferred Timeline
                    </label>

                    <select
                      id="maintenance-timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option value="">Select a timeline</option>
                      <option>Urgent issue</option>
                      <option>As soon as possible</option>
                      <option>Within 1 month</option>
                      <option>Ongoing support</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="maintenance-message"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Website / Application Details *
                    </label>

                    <textarea
                      id="maintenance-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about the website, stack, current issues and the type of support you need..."
                      className="w-full resize-none rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] leading-5 text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
                  <p className="text-[9px] leading-4 text-slate-500 max-w-sm">
                    Existing codebases may need a technical review before the
                    final maintenance scope is confirmed.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-2 rounded-lg bg-[#1bbdca] hover:bg-[#28c9d5] px-5 py-3 text-[11px] font-semibold text-[#071923] transition-colors"
                  >
                    Send Support Enquiry
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
                  Need ongoing website or application support?
                </p>

                <p className="text-slate-500 text-[10px] mt-1">
                  Maintenance, bug fixing, monitoring and technical support by
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

export default Maintenance;