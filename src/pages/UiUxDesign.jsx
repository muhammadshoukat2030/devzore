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
  CircleCheck,
  Code2,
  Eye,
  Layout,
  Mail,
  Minus,
  Monitor,
  Palette,
  Plus,
  RefreshCw,
  Rocket,
  Send,
  Smartphone,
  Target,
  Users,
  Zap,
} from "lucide-react";

const UiUxDesign = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "UI/UX Design",
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

  // UI/UX SERVICES

  const services = [
    {
      icon: <Users size={21} />,
      number: "01",
      title: "UX Research & Strategy",
      desc:
        "Understand users, competitors, business goals and product requirements before defining the experience and interface direction.",
      points: [
        "User flow planning",
        "Competitor review",
        "Product structure",
      ],
    },
    {
      icon: <Eye size={21} />,
      number: "02",
      title: "Wireframing & UX Design",
      desc:
        "Structured wireframes for websites, applications and digital products that define layouts, hierarchy and important interactions.",
      points: [
        "Page structure",
        "User journeys",
        "Interaction planning",
      ],
    },
    {
      icon: <Palette size={21} />,
      number: "03",
      title: "User Interface Design",
      desc:
        "Modern interface design with typography, spacing, hierarchy, components and visual direction aligned with the product.",
      points: [
        "High-fidelity UI",
        "Visual hierarchy",
        "Component styling",
      ],
    },
    {
      icon: <Monitor size={21} />,
      number: "04",
      title: "Website UI/UX Design",
      desc:
        "Professional website interfaces for business websites, landing pages and web applications with clear user journeys.",
      points: [
        "Business websites",
        "Landing pages",
        "Responsive layouts",
      ],
    },
    {
      icon: <Smartphone size={21} />,
      number: "05",
      title: "Mobile App UI/UX",
      desc:
        "Mobile application interfaces designed around touch interactions, navigation, onboarding and practical mobile workflows.",
      points: [
        "Mobile screens",
        "App navigation",
        "Responsive interactions",
      ],
    },
    {
      icon: <Layout size={21} />,
      number: "06",
      title: "SaaS & Dashboard Design",
      desc:
        "Interfaces for SaaS products, dashboards, admin panels and business systems with clear data and workflow presentation.",
      points: [
        "SaaS dashboards",
        "Admin interfaces",
        "Data-driven layouts",
      ],
    },
    {
      icon: <RefreshCw size={21} />,
      number: "07",
      title: "Website Redesign",
      desc:
        "Modernise outdated interfaces and improve layout, navigation, responsive behaviour and overall user experience.",
      points: [
        "Interface refresh",
        "UX improvements",
        "Responsive redesign",
      ],
    },
    {
      icon: <Zap size={21} />,
      number: "08",
      title: "Interactive Prototyping",
      desc:
        "Interactive prototypes that demonstrate important product journeys and interface behaviour before development begins.",
      points: [
        "Clickable prototypes",
        "Flow validation",
        "Interaction preview",
      ],
    },
    {
      icon: <Code2 size={21} />,
      number: "09",
      title: "Developer Handoff",
      desc:
        "Organised design files, reusable components, assets and interface guidance prepared for implementation.",
      points: [
        "Organised files",
        "Reusable components",
        "Implementation support",
      ],
    },
  ];

  // PRODUCT TYPES

  const productTypes = [
    {
      icon: <Monitor size={19} />,
      title: "Business Websites",
      desc:
        "Professional website interfaces designed around clear messaging, services, trust and customer actions.",
    },
    {
      icon: <Layout size={19} />,
      title: "Web Applications",
      desc:
        "UI/UX for portals, business systems, dashboards and interactive software products.",
    },
    {
      icon: <Smartphone size={19} />,
      title: "Mobile Applications",
      desc:
        "Mobile experiences for onboarding, navigation, accounts, workflows and application features.",
    },
    {
      icon: <Rocket size={19} />,
      title: "Startup Products",
      desc:
        "Focused product design for MVPs that need clear core journeys before development begins.",
    },
    {
      icon: <Users size={19} />,
      title: "SaaS Products",
      desc:
        "Interfaces for user accounts, dashboards, settings, teams and subscription-based workflows.",
    },
    {
      icon: <Target size={19} />,
      title: "Digital Products",
      desc:
        "Custom interface and experience design around product goals, users and business requirements.",
    },
  ];

  // DESIGN STANDARDS

  const principles = [
    {
      icon: <Target size={19} />,
      title: "Business-Focused Design",
      desc:
        "Design decisions consider product goals, user needs and business requirements rather than visual appearance alone.",
    },
    {
      icon: <Users size={19} />,
      title: "User-Centred Experience",
      desc:
        "Flows, navigation and interactions are planned around the tasks users need to complete.",
    },
    {
      icon: <Smartphone size={19} />,
      title: "Responsive by Design",
      desc:
        "Layouts are considered across desktop, tablet and mobile instead of treating responsiveness as an afterthought.",
    },
    {
      icon: <Eye size={19} />,
      title: "Clear Visual Hierarchy",
      desc:
        "Typography, spacing, contrast and content structure help make interfaces easier to understand.",
    },
    {
      icon: <Layout size={19} />,
      title: "Reusable Design Systems",
      desc:
        "Reusable components and interface patterns help maintain consistency as the product grows.",
    },
    {
      icon: <Code2 size={19} />,
      title: "Developer-Friendly Handoff",
      desc:
        "Designs are organised so implementation is clearer for frontend and product development teams.",
    },
  ];

  // REDESIGN REASONS

  const redesignReasons = [
    "The interface looks outdated",
    "Navigation is confusing for users",
    "Mobile layouts need improvement",
    "Important actions are difficult to find",
    "The visual hierarchy is inconsistent",
    "The product has grown without a clear design system",
    "Dashboard information feels difficult to understand",
    "Existing screens no longer match the product direction",
  ];

  // PROCESS

  const designProcess = [
    {
      number: "01",
      title: "Discovery & Research",
      desc:
        "We understand the business, product, users, requirements, competitors and existing interface challenges.",
    },
    {
      number: "02",
      title: "UX Planning",
      desc:
        "Navigation, information hierarchy and important user journeys are organised around the product requirements.",
    },
    {
      number: "03",
      title: "Wireframing",
      desc:
        "Layouts and content placement are planned before detailed visual interface design begins.",
    },
    {
      number: "04",
      title: "UI Design",
      desc:
        "Wireframes are developed into polished interfaces with typography, spacing, hierarchy and reusable components.",
    },
    {
      number: "05",
      title: "Prototype & Review",
      desc:
        "Important flows can be connected into interactive prototypes for review before implementation.",
    },
    {
      number: "06",
      title: "Developer Handoff",
      desc:
        "Final screens, components, assets and design details are organised for development and future product work.",
    },
  ];

  // USE CASES

  const useCases = [
    "Business Websites",
    "Landing Pages",
    "SaaS Platforms",
    "Mobile Applications",
    "Admin Dashboards",
    "Customer Portals",
    "E-Commerce Interfaces",
    "Startup MVPs",
    "Booking Platforms",
    "Management Systems",
    "Analytics Products",
    "Internal Business Tools",
  ];

  // WHY DEVZORE

  const whyDevZore = [
    {
      icon: <Target size={19} />,
      title: "Designed Around the Goal",
      desc:
        "The interface is planned around the actual product, audience and actions users need to complete.",
    },
    {
      icon: <Users size={19} />,
      title: "User-Focused Process",
      desc:
        "We consider important user journeys before focusing on visual styling and interface polish.",
    },
    {
      icon: <Layout size={19} />,
      title: "Consistent Interfaces",
      desc:
        "Reusable components and clear layout rules help keep the experience visually consistent.",
    },
    {
      icon: <Smartphone size={19} />,
      title: "Responsive Thinking",
      desc:
        "Desktop, tablet and mobile behaviour are considered throughout the interface design process.",
    },
    {
      icon: <Code2 size={19} />,
      title: "Development Aware",
      desc:
        "Design decisions consider practical frontend implementation and reusable application components.",
    },
    {
      icon: <RefreshCw size={19} />,
      title: "Ready to Evolve",
      desc:
        "Product design can be structured so future screens, states and workflows can be added more consistently.",
    },
  ];

  // FAQ

  const faqs = [
    {
      q: "What is UI/UX design?",
      a:
        "UI/UX design combines user interface design and user experience design. UX focuses on structure, user flows, navigation and usability, while UI focuses on the visual interface including typography, spacing, colours, components and interaction states.",
    },
    {
      q: "What UI/UX design services does DevZore provide?",
      a:
        "DevZore provides UX research, user flows, wireframing, website interface design, mobile app design, SaaS and dashboard design, prototypes, design systems, redesign services and developer handoff.",
    },
    {
      q: "How much does UI/UX design cost?",
      a:
        "Cost depends on the number of screens, product complexity, responsive requirements, research, prototypes and design-system requirements. A project-specific estimate can be prepared after reviewing the scope.",
    },
    {
      q: "Do you provide website UI/UX design?",
      a:
        "Yes. DevZore provides UI/UX design for business websites, landing pages, service websites, web applications and other digital experiences.",
    },
    {
      q: "Do you provide Figma source files?",
      a:
        "Project deliverables can include organised design source files, screens, reusable components, design assets and prototype connections according to the agreed scope.",
    },
    {
      q: "Can you design mobile applications?",
      a:
        "Yes. Mobile app UI/UX can include onboarding, navigation, account screens, dashboards, forms and other application workflows.",
    },
    {
      q: "Do you provide SaaS UI/UX design?",
      a:
        "Yes. SaaS interface design can include onboarding, dashboards, account settings, subscription areas, tables, analytics and product-specific workflows.",
    },
    {
      q: "Can you design dashboards and admin panels?",
      a:
        "Yes. Dashboard design can include navigation, charts, tables, filters, forms, analytics views and user-management interfaces.",
    },
    {
      q: "Can you redesign an existing website?",
      a:
        "Yes. Existing websites can be reviewed for layout, navigation, visual hierarchy, mobile responsiveness and important user journeys before redesign.",
    },
    {
      q: "Do you create responsive website designs?",
      a:
        "Yes. Responsive interface design can consider desktop, tablet and mobile layouts so the experience adapts clearly across screen sizes.",
    },
    {
      q: "What is the difference between UI design and UX design?",
      a:
        "UX focuses on how users move through and interact with a product, while UI focuses on how the interface looks and communicates visually.",
    },
    {
      q: "Do you conduct UX research?",
      a:
        "UX research can be included depending on project needs and may involve competitor analysis, user-flow evaluation, journey mapping and product review.",
    },
    {
      q: "Can you create a design system?",
      a:
        "Yes. A design system can include reusable components, typography, spacing rules, colours, states and interface patterns.",
    },
    {
      q: "Can you design and develop the same website?",
      a:
        "Yes. DevZore also provides web development, mobile development and SaaS development, allowing design and development to be handled as part of the same project where required.",
    },
    {
      q: "Can DevZore work with clients remotely?",
      a:
        "Yes. UI/UX projects can be handled remotely through online communication, shared design files and organised feedback workflows.",
    },
  ];

  // RELATED SERVICES

  const relatedServices = [
    {
      label: "WEB",
      title: "Web Development",
      desc:
        "Turn approved interfaces into responsive business websites and web applications.",
      path: "/web-development",
    },
    {
      label: "MOBILE",
      title: "Mobile App Development",
      desc:
        "Build mobile products around clear user journeys and application requirements.",
      path: "/mobile-apps",
    },
    {
      label: "PRODUCT",
      title: "SaaS Product Development",
      desc:
        "Design and develop SaaS products with dashboards, users and scalable workflows.",
      path: "/saas-product-development",
    },
    {
      label: "STARTUP",
      title: "Startup MVP Development",
      desc:
        "Turn a focused product idea into a usable first version for validation.",
      path: "/startup-mvp",
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
      `UI/UX Design Enquiry - ${formData.name}`
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

  // STRUCTURED DATA

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://devzore.com/ui-ux-design#service",
    name: "UI/UX Design Services",
    url: "https://devzore.com/ui-ux-design",
    serviceType: "UI/UX Design",
    description:
      "Professional UI/UX design services for websites, mobile applications, SaaS products, dashboards and digital products including UX planning, wireframes, interface design, prototypes and design systems.",
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
          aria-labelledby="uiux-heading"
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

          <div className="relative max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-14">
            <div className="grid lg:grid-cols-[0.96fr_1.04fr] gap-8 lg:gap-12 items-center">
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-[#c4ced5]">
                    <CircleCheck
                      size={14}
                      className="text-[#26becb]"
                    />
                    UI/UX Design
                  </div>
                </div>

                <h1
                  id="uiux-heading"
                  className="max-w-[800px] text-[40px] sm:text-[48px] lg:text-[58px] xl:text-[64px] leading-[1.04] font-semibold tracking-[-0.045em]"
                >
                  Digital experiences designed for{" "}
                  <span className="text-[#22bdca]">
                    clarity and real users.
                  </span>
                </h1>

                <p className="max-w-[700px] mt-5 text-[16px] sm:text-[17px] leading-7 text-slate-300">
                  DevZore designs user experiences and interfaces for business
                  websites, mobile applications, SaaS products, dashboards and
                  custom digital products.
                </p>

                <p className="max-w-[650px] mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
                  From UX planning and wireframes to polished interfaces,
                  prototypes and developer handoff, we focus on making digital
                  products easier to understand, use and develop.
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-6">
                  <a
                    href="#uiux-project-enquiry"
                    className="inline-flex justify-center items-center gap-2.5 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[12px] font-semibold text-[#071923] transition-all"
                  >
                    Start Your Design Project
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href="#uiux-services"
                    className="inline-flex justify-center items-center gap-2.5 px-4 py-3 text-[12px] font-semibold text-white hover:text-[#28c5d4] transition-colors"
                  >
                    Explore Design Services
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
                  {[
                    "UX Planning",
                    "Responsive UI",
                    "Prototypes",
                    "Developer Handoff",
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

              {/* DESIGN VISUAL */}

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

                      <div className="grid grid-cols-[66px_1fr] min-h-[285px]">
                        <div className="border-r border-white/[0.08] p-3">
                          <div className="w-8 h-8 rounded-lg bg-[#1bbac8]/20 border border-[#1bbac8]/30 mb-5 flex items-center justify-center">
                            <Palette
                              size={14}
                              className="text-[#23bfce]"
                            />
                          </div>

                          <div className="space-y-3">
                            {[1, 2, 3, 4, 5].map((item) => (
                              <div
                                key={item}
                                className="w-7 h-2 rounded bg-white/[0.07]"
                              />
                            ))}
                          </div>
                        </div>

                        <div className="p-5">
                          <div className="flex justify-between items-center mb-5">
                            <div>
                              <div className="w-20 h-2 rounded bg-[#1bbac8]/60 mb-2" />
                              <div className="w-36 h-3 rounded bg-white/80" />
                            </div>

                            <div className="w-16 h-7 rounded-lg bg-[#18bdcb]" />
                          </div>

                          <div className="grid grid-cols-[1fr_0.7fr] gap-3">
                            <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3">
                              <div className="w-full h-20 rounded-lg bg-[#18bdcb]/10 border border-[#18bdcb]/10" />

                              <div className="w-[70%] h-3 rounded bg-white/70 mt-3" />
                              <div className="w-[90%] h-2 rounded bg-white/10 mt-2" />
                              <div className="w-[65%] h-2 rounded bg-white/10 mt-1.5" />

                              <div className="w-20 h-7 rounded-md bg-[#18bdcb] mt-4" />
                            </div>

                            <div className="space-y-3">
                              {[1, 2, 3].map((item) => (
                                <div
                                  key={item}
                                  className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-[#159daf]/15" />
                                  <div className="w-16 h-2 rounded bg-white/20 mt-3" />
                                  <div className="w-full h-2 rounded bg-white/[0.07] mt-2" />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -left-6 top-14 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Eye
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[9px] font-semibold mt-2">
                        UX Flow
                      </p>
                    </div>

                    <div className="absolute -right-5 top-16 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Palette
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[9px] font-semibold mt-2">
                        Interface
                      </p>
                    </div>

                    <div className="absolute -right-4 bottom-10 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Smartphone
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[9px] font-semibold mt-2">
                        Responsive
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
                  ["01", "UX Strategy"],
                  ["02", "UI Design"],
                  ["03", "Prototyping"],
                  ["04", "Design Systems"],
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
          className="relative py-10 md:py-12 bg-[#f8fafb]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-7 lg:gap-12">
              <div>
                <SectionLabel>UI/UX Design</SectionLabel>

                <h2 className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3">
                  More than attractive screens.{" "}
                  <span className="text-[#0796A8]">
                    A usable product experience.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 text-slate-700">
                  Strong product design helps people understand where they are,
                  what they can do and how to complete the actions that matter.
                  It brings structure, usability and visual clarity together.
                </p>

                <p className="text-[13px] leading-6 mt-3 text-slate-500">
                  DevZore designs interfaces around real product and business
                  requirements, whether that means a business website, mobile
                  app, SaaS product, dashboard, portal or startup MVP.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}

        <section
          id="uiux-services"
          aria-labelledby="uiux-services-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel>Design Services</SectionLabel>

              <h2
                id="uiux-services-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                UI/UX design from product structure to final interface.
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3 max-w-2xl">
                We support the design process from early user journeys and
                wireframes through polished interfaces, prototypes and
                implementation-ready files.
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

        {/* PRODUCT TYPES */}

        <section
          aria-labelledby="uiux-product-types-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-12 items-start">
              <div>
                <SectionLabel>What We Design</SectionLabel>

                <h2
                  id="uiux-product-types-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Interfaces designed around{" "}
                  <span className="text-[#0796A8]">
                    real product workflows.
                  </span>
                </h2>

                <p className="text-slate-600 text-[14px] leading-6 mt-4">
                  Different products require different interface structures,
                  navigation models and user journeys.
                </p>

                <p className="text-slate-500 text-[12px] leading-5 mt-3">
                  We adapt the design approach around the product type, audience
                  and actions users need to complete.
                </p>

                <a
                  href="#uiux-project-enquiry"
                  className="inline-flex items-center gap-2 mt-5 text-[11px] font-semibold text-[#07899a] hover:text-[#071923] transition-colors"
                >
                  Discuss Your Product
                  <ArrowRight size={13} />
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {productTypes.map((item) => (
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

        {/* DESIGN STANDARDS */}

        <section
          aria-labelledby="uiux-standards-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-70"
            style={darkGrid}
          />

          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel light>Design Standards</SectionLabel>

              <h2
                id="uiux-standards-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                Designed for users,{" "}
                <span className="text-[#25bfce]">
                  business and implementation.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3 max-w-2xl">
                Product design decisions affect usability, consistency,
                responsive behaviour, development and how easily an interface
                can evolve.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {principles.map((item) => (
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

        {/* REDESIGN */}

        <section
          aria-labelledby="uiux-redesign-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <SectionLabel>UI/UX Redesign</SectionLabel>

                <div className="w-10 h-10 mt-4 rounded-xl bg-[#edf5f6] text-[#07899a] flex items-center justify-center">
                  <RefreshCw size={19} />
                </div>

                <h2
                  id="uiux-redesign-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-4"
                >
                  Is the current interface making your product harder to use?
                </h2>

                <p className="text-slate-600 text-[14px] leading-6 mt-3">
                  A product may still work technically while its interface
                  becomes outdated, inconsistent or difficult for users to
                  navigate.
                </p>

                <p className="text-slate-500 text-[12px] leading-5 mt-3">
                  We can review the existing interface and identify where
                  structure, navigation, hierarchy or responsive behaviour
                  should improve.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#f8fafb] p-5">
                <p className="text-[#071923] text-[10px] font-semibold tracking-[0.16em] uppercase">
                  Common reasons to redesign
                </p>

                <div className="grid sm:grid-cols-2 gap-2.5 mt-4">
                  {redesignReasons.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl bg-white border border-slate-100 p-3"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-[#0796A8] flex-shrink-0 mt-0.5"
                      />

                      <span className="text-slate-600 text-[10px] leading-5">
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
          aria-labelledby="uiux-process-heading"
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
                id="uiux-process-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                From product requirements{" "}
                <span className="text-[#25bfce]">
                  to implementation-ready design.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3">
                A structured workflow keeps research, UX decisions, interface
                design, review and developer handoff easier to manage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
              {designProcess.map((step) => (
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

        {/* USE CASES */}

        <section
          aria-labelledby="uiux-use-cases-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>Design Use Cases</SectionLabel>

                <h2
                  id="uiux-use-cases-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Different products need different experiences.
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  Interface structure and user journeys can be adapted around
                  the type of product and the workflows people need to
                  complete.
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

        {/* WHY DEVZORE */}

        <section
          aria-labelledby="uiux-why-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel>Why DevZore</SectionLabel>

              <h2
                id="uiux-why-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Product-focused design,{" "}
                <span className="text-[#0796A8]">
                  not just attractive screens.
                </span>
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3 max-w-2xl">
                We focus on how the experience needs to work for users,
                developers and the business behind the product.
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

        {/* RELATED SERVICES */}

        <section
          aria-labelledby="uiux-related-heading"
          className="py-10 md:py-12 bg-[#f7f9fa] border-y border-slate-200"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div>
                <SectionLabel>Related Services</SectionLabel>

                <h2
                  id="uiux-related-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] mt-3"
                >
                  From interface design to complete product development.
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
          aria-labelledby="uiux-faq-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[980px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div>
                <SectionLabel>FAQ</SectionLabel>

                <h2
                  id="uiux-faq-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] mt-3"
                >
                  UI/UX design questions clients ask.
                </h2>
              </div>

              <a
                href="#uiux-project-enquiry"
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
                      aria-controls={`uiux-faq-${index}`}
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
                      id={`uiux-faq-${index}`}
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
          id="uiux-project-enquiry"
          aria-labelledby="uiux-project-enquiry-heading"
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
                <SectionLabel light>Start a Design Project</SectionLabel>

                <h2
                  id="uiux-project-enquiry-heading"
                  className="text-[30px] sm:text-[35px] md:text-[40px] leading-[1.06] tracking-[-0.04em] font-semibold mt-3"
                >
                  Tell us what you{" "}
                  <span className="text-[#25bfce]">
                    want users to experience.
                  </span>
                </h2>

                <p className="text-slate-300 text-[14px] leading-6 mt-4 max-w-lg">
                  Share your website, mobile app, SaaS product or digital
                  product requirements. We can review the product and discuss
                  the appropriate UI/UX approach.
                </p>

                <div className="mt-5 space-y-2.5">
                  {[
                    "Website and landing page design",
                    "Mobile application UI/UX",
                    "SaaS and dashboard interfaces",
                    "Wireframes, prototypes and redesigns",
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
                      htmlFor="uiux-name"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Your Name *
                    </label>

                    <input
                      id="uiux-name"
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
                      htmlFor="uiux-email"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Email Address *
                    </label>

                    <input
                      id="uiux-email"
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
                      htmlFor="uiux-company"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Company
                    </label>

                    <input
                      id="uiux-company"
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
                      htmlFor="uiux-service"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Type
                    </label>

                    <select
                      id="uiux-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option>UI/UX Design</option>
                      <option>Website UI/UX Design</option>
                      <option>Mobile App UI/UX</option>
                      <option>SaaS UI/UX Design</option>
                      <option>Dashboard Design</option>
                      <option>Website Redesign</option>
                      <option>Wireframing</option>
                      <option>Interactive Prototype</option>
                      <option>Design System</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="uiux-timeline"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Preferred Timeline
                    </label>

                    <select
                      id="uiux-timeline"
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
                      htmlFor="uiux-message"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Details *
                    </label>

                    <textarea
                      id="uiux-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your product, target users, required screens and important user journeys..."
                      className="w-full resize-none rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] leading-5 text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
                  <p className="text-[9px] leading-4 text-slate-500 max-w-sm">
                    Share enough detail for us to understand the product and
                    design requirements. The complete scope can be discussed
                    afterwards.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-2 rounded-lg bg-[#1bbdca] hover:bg-[#28c9d5] px-5 py-3 text-[11px] font-semibold text-[#071923] transition-colors"
                  >
                    Send Design Enquiry
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
                  Have a product idea? We can help shape the experience.
                </p>

                <p className="text-slate-500 text-[10px] mt-1">
                  UI/UX design, prototypes and digital product experiences by
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

export default UiUxDesign;