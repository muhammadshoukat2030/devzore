import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CircleCheck,
  Code2,
  Database,
  Gauge,
  Globe2,
  Layers3,
  LockKeyhole,
  Mail,
  Minus,
  Palette,
  Plus,
  RefreshCw,
  Rocket,
  Send,
  Server,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Store,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

/* =========================================================
   MOBILE APP DEVELOPMENT
========================================================= */

const MobileApp = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Mobile App Development",
    timeline: "",
    message: "",
  });

  /* =========================================================
     GRID
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
     MOBILE DEVELOPMENT SERVICES
  ========================================================= */

  const mobileServices = [
    {
      icon: <Smartphone size={20} />,
      number: "01",
      title: "iOS App Development",
      desc:
        "Cross-platform iOS and iPhone app development using React Native with platform-specific functionality where required.",
      points: [
        "React Native development",
        "iPhone-ready interfaces",
        "Platform integrations",
      ],
    },
    {
      icon: <Smartphone size={20} />,
      number: "02",
      title: "Android App Development",
      desc:
        "Android application development for smartphones and supported devices with responsive interfaces and backend integrations.",
      points: [
        "Android applications",
        "Responsive mobile UI",
        "API integrations",
      ],
    },
    {
      icon: <Code2 size={20} />,
      number: "03",
      title: "Cross-Platform Development",
      desc:
        "Shared React Native architecture for iOS and Android that reduces duplicated development while supporting platform-specific requirements.",
      points: [
        "Shared codebase",
        "iOS & Android",
        "Maintainable architecture",
      ],
    },
    {
      icon: <Palette size={20} />,
      number: "04",
      title: "Mobile UI/UX Design",
      desc:
        "Mobile UI/UX design including user flows, screen layouts, navigation, interaction patterns and product-focused interfaces.",
      points: [
        "User flows",
        "Mobile interfaces",
        "Interaction design",
      ],
    },
    {
      icon: <Database size={20} />,
      number: "05",
      title: "Backend & API Integration",
      desc:
        "Connect mobile applications with REST APIs, databases, authentication systems, payments and third-party services.",
      points: [
        "REST APIs",
        "Authentication",
        "Database integration",
      ],
    },
    {
      icon: <RefreshCw size={20} />,
      number: "06",
      title: "Maintenance & Improvements",
      desc:
        "Continued mobile application development including bug fixes, compatibility updates, performance improvements and additional features.",
      points: [
        "Bug fixes",
        "Compatibility updates",
        "Feature development",
      ],
    },
  ];

  /* =========================================================
     WHAT WE BUILD
  ========================================================= */

  const whatWeBuild = [
    {
      icon: <BriefcaseBusiness size={18} />,
      title: "Business Mobile Apps",
      desc:
        "Custom mobile applications for internal operations, field teams, inventory, customer management, sales workflows and other business processes.",
    },
    {
      icon: <Rocket size={18} />,
      title: "Startup Mobile Apps",
      desc:
        "Focused MVPs and scalable mobile products designed for startups that need to validate, launch and grow their product.",
    },
    {
      icon: <ShoppingCart size={18} />,
      title: "E-Commerce Apps",
      desc:
        "Mobile shopping applications with products, customer accounts, checkout workflows, payments, orders and notifications.",
    },
    {
      icon: <Bell size={18} />,
      title: "Booking & On-Demand Apps",
      desc:
        "Applications for appointments, service bookings, delivery workflows, customer requests and location-based experiences.",
    },
    {
      icon: <Users size={18} />,
      title: "Community Apps",
      desc:
        "Mobile products with profiles, messaging, notifications, media sharing, feeds and interactive communication features.",
    },
    {
      icon: <Layers3 size={18} />,
      title: "Enterprise Mobile Apps",
      desc:
        "Secure mobile software with role-based access, dashboards, integrations and business data for organisations and teams.",
    },
  ];

  /* =========================================================
     DEVELOPMENT STANDARDS
  ========================================================= */

  const standards = [
    {
      icon: <Smartphone size={19} />,
      title: "Mobile-First Experience",
      desc:
        "Interfaces are planned specifically around mobile screens, touch interactions and common mobile user behaviour.",
    },
    {
      icon: <Gauge size={19} />,
      title: "Performance Focused",
      desc:
        "Rendering, application assets, API calls and common interactions are considered throughout development.",
    },
    {
      icon: <LockKeyhole size={19} />,
      title: "Security Conscious",
      desc:
        "Authentication, permissions, secure storage and appropriate data handling are considered where required.",
    },
    {
      icon: <Server size={19} />,
      title: "Backend Ready",
      desc:
        "Applications can connect with custom APIs, databases, authentication services and third-party platforms.",
    },
    {
      icon: <Bell size={19} />,
      title: "Notifications Ready",
      desc:
        "Push notification workflows can be integrated for relevant application events and customer communication.",
    },
    {
      icon: <Code2 size={19} />,
      title: "Maintainable Architecture",
      desc:
        "Reusable components and organised application structure make future improvements easier to manage.",
    },
  ];

  /* =========================================================
     TECHNOLOGY STACK
  ========================================================= */

  const techStack = [
    {
      category: "Core",
      items: ["React Native", "Expo", "TypeScript", "JavaScript"],
    },
    {
      category: "Navigation",
      items: ["React Navigation", "Expo Router", "Deep Linking"],
    },
    {
      category: "State & Data",
      items: ["Redux Toolkit", "TanStack Query", "Zustand", "AsyncStorage"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "REST APIs", "MongoDB"],
    },
    {
      category: "Notifications",
      items: ["Expo Notifications", "Firebase FCM", "Push Notifications"],
    },
    {
      category: "Payments",
      items: ["Stripe", "PayPal", "Payment APIs"],
    },
    {
      category: "Authentication",
      items: ["JWT", "OAuth", "Biometrics", "Secure Storage"],
    },
    {
      category: "Distribution",
      items: ["App Store", "Google Play", "TestFlight", "Beta Testing"],
    },
  ];

  /* =========================================================
     PROCESS
  ========================================================= */

  const process = [
    {
      number: "01",
      title: "Discovery & Planning",
      desc:
        "We define your app goals, target users, platforms, core features, integrations and technical requirements.",
    },
    {
      number: "02",
      title: "Mobile UI/UX",
      desc:
        "User flows, screen layouts and mobile interfaces are planned around usability and the expected product journey.",
    },
    {
      number: "03",
      title: "App Development",
      desc:
        "The application is developed with structured components, frontend logic, APIs, authentication and required integrations.",
    },
    {
      number: "04",
      title: "Testing",
      desc:
        "Important user flows, device behaviour, APIs, authentication, notifications and application functionality are reviewed.",
    },
    {
      number: "05",
      title: "Release Preparation",
      desc:
        "Production builds are prepared and we can assist with technical requirements for App Store and Google Play submission.",
    },
    {
      number: "06",
      title: "Support & Iteration",
      desc:
        "After launch, continued development, fixes, compatibility updates and additional features can be provided.",
    },
  ];

  /* =========================================================
     WHY DEVZORE
  ========================================================= */

  const whyDevZore = [
    {
      icon: <Smartphone size={18} />,
      title: "iOS & Android",
      desc:
        "Cross-platform applications for iOS and Android using React Native with platform-specific functionality where required.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Security-Conscious",
      desc:
        "Authentication, secure storage, API protection and permissions are considered throughout development.",
    },
    {
      icon: <Zap size={18} />,
      title: "Performance Focus",
      desc:
        "Application structure, assets, rendering and common interactions are developed with performance in mind.",
    },
    {
      icon: <Code2 size={18} />,
      title: "Maintainable Code",
      desc:
        "Reusable components, organised structure and clear application logic help simplify future development.",
    },
    {
      icon: <Store size={18} />,
      title: "Release Assistance",
      desc:
        "We can assist with production builds and technical preparation for supported mobile application stores.",
    },
    {
      icon: <Globe2 size={18} />,
      title: "Remote Collaboration",
      desc:
        "Projects can be managed remotely through organised communication, repositories and development workflows.",
    },
  ];

  /* =========================================================
     FAQ
  ========================================================= */

  const faqs = [
    {
      q: "How much does mobile app development cost?",
      a:
        "Mobile app development cost depends on required features, platforms, integrations, user roles, UI/UX complexity and backend requirements. After reviewing the project, DevZore can prepare an estimate based on the required scope.",
    },
    {
      q: "How long does it take to develop a mobile application?",
      a:
        "The timeline depends on application size and complexity. A focused MVP normally requires less development time than a larger application with payments, multiple user roles, real-time features and complex integrations.",
    },
    {
      q: "Do you develop apps for both Android and iOS?",
      a:
        "Yes. DevZore develops cross-platform Android and iOS applications using React Native. Much of the codebase can be shared while platform-specific functionality can be implemented when required.",
    },
    {
      q: "Can you build a custom mobile app for my business?",
      a:
        "Yes. Mobile applications can be developed around business workflows such as customers, employees, services, inventory, bookings, sales and internal operations.",
    },
    {
      q: "Do you provide mobile app development for startups?",
      a:
        "Yes. We can help startups develop focused mobile products and MVPs including planning, UI/UX, frontend development, APIs, authentication, testing and release preparation.",
    },
    {
      q: "What is cross-platform mobile app development?",
      a:
        "Cross-platform development allows iOS and Android applications to share a significant portion of their codebase. DevZore uses React Native for cross-platform mobile development.",
    },
    {
      q: "Do you provide mobile app UI/UX design?",
      a:
        "Yes. Mobile app design can include user flows, wireframes, screen layouts, navigation patterns, interface design and prototypes according to project requirements.",
    },
    {
      q: "Can you connect a mobile app to an existing backend?",
      a:
        "Yes. We can integrate a mobile application with an existing compatible REST API or backend service, or develop a new backend and API when required.",
    },
    {
      q: "Can mobile apps include push notifications?",
      a:
        "Yes. Push notifications can be implemented for relevant application events, reminders, updates and other communication requirements.",
    },
    {
      q: "Can the application support offline functionality?",
      a:
        "Selected offline functionality can be implemented using local storage and appropriate synchronization strategies depending on the application requirements.",
    },
    {
      q: "Do you help with App Store and Google Play submission?",
      a:
        "Yes. DevZore can assist with production builds and technical preparation for Apple App Store and Google Play submission. Final approval remains subject to each platform's review policies.",
    },
    {
      q: "Do you provide mobile app maintenance after launch?",
      a:
        "Yes. Maintenance can include bug fixes, compatibility updates, performance improvements and additional feature development according to the agreed support arrangement.",
    },
  ];

  /* =========================================================
     RELATED SERVICES
  ========================================================= */

  const relatedServices = [
    {
      label: "DESIGN",
      title: "UI/UX Design",
      desc:
        "User flows, mobile interfaces and product experiences designed before and during development.",
      path: "/ui-ux-design",
    },
    {
      label: "BACKEND",
      title: "Backend & API Development",
      desc:
        "APIs, databases, authentication and server-side functionality for mobile applications.",
      path: "/backend-api",
    },
    {
      label: "STARTUP",
      title: "Startup MVP Development",
      desc:
        "Turn a focused product idea into an initial working web or mobile release.",
      path: "/startup-mvp",
    },
    {
      label: "FULL STACK",
      title: "MERN Stack Development",
      desc:
        "Full-stack development for dashboards, applications and connected digital products.",
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
      `Mobile App Development Enquiry - ${formData.name}`
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

    window.location.href = `mailto:hello@devzore.com?subject=${subject}&body=${body}`;
  };

  /* =========================================================
     STRUCTURED DATA
  ========================================================= */

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://devzore.com/mobile-apps#service",
    name: "Mobile App Development Services",
    url: "https://devzore.com/mobile-apps",
    serviceType: "Mobile Application Development",
    description:
      "Custom mobile app development services for businesses and startups, including iOS, Android and cross-platform mobile applications.",
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
      name: "Mobile Application Development Services",
      itemListElement: mobileServices.map((service) => ({
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
        name: "Mobile App Development",
        item: "https://devzore.com/mobile-apps",
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
          aria-labelledby="mobile-app-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 right-[5%] w-[560px] h-[560px] rounded-full bg-[#078fa5]/14 blur-[140px]" />

            <div
              className="absolute inset-0 opacity-50"
              style={darkGrid}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#04111a] via-[#04111a]/95 to-[#04111a]/65" />
          </div>

          <div className="relative max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10 pt-23 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 lg:pb-13">
            <div className="grid lg:grid-cols-[0.96fr_1.04fr] gap-7 lg:gap-10 items-center">
              {/* LEFT */}

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-slate-300">
                    <CircleCheck
                      size={13}
                      className="text-[#26becb]"
                    />
                    Mobile App Development
                  </div>
                </div>

                <h1
                  id="mobile-app-heading"
                  className="max-w-[760px] text-[40px] sm:text-[50px] lg:text-[62px] xl:text-[54px] leading-[1.04] font-semibold tracking-[-0.045em]"
                >
                  Mobile apps built for{" "}
                  <span className="text-[#23bfce]">
                    real users and growth.
                  </span>
                </h1>

                <p className="max-w-2xl mt-5 text-[16px] sm:text-[17px] lg:text-[13.5px] leading-7 text-slate-300 font-normal">
                  DevZore develops custom mobile applications for startups and
                  businesses across iOS and Android using React Native and
                  modern backend technologies.
                </p>

                <p className="max-w-xl mt-2.5 text-[13px] sm:text-[14px] leading-6 text-slate-400 font-normal">
                  From a focused MVP to a business or customer application, we
                  combine mobile UI/UX, application development, APIs,
                  authentication, notifications and release preparation.
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5 mt-6">
                  <a
                    href="#mobile-project-enquiry"
                    className="inline-flex justify-center items-center gap-2.5 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[12px] font-semibold text-[#071923] transition-all"
                  >
                    Start Your App
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href="#mobile-development-services"
                    className="inline-flex justify-center items-center gap-2.5 px-5 py-3 text-[12px] font-semibold text-white hover:text-[#28c5d4] transition-colors"
                  >
                    Explore Mobile Development
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
                  {[
                    "iOS & Android",
                    "React Native",
                    "API Integration",
                    "Custom Development",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium text-slate-400"
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

              {/* RIGHT MOBILE VISUAL */}

              <div className="relative min-h-[390px] lg:min-h-[430px] hidden md:block">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-[370px] h-[370px] rounded-full bg-[#0796A8]/16 blur-[90px]" />

                  <div className="relative scale-[0.88] lg:scale-95">
                    <div className="relative w-[230px] h-[450px] rounded-[38px] border-[6px] border-[#263943] bg-[#071923] shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[84px] h-[21px] rounded-b-[14px] bg-[#02080b] z-20" />

                      <div className="px-5 pt-9 pb-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-[8px] text-[#24c4d3] font-semibold tracking-wider">
                              DEVZORE
                            </span>

                            <p className="text-[7px] text-slate-500">
                              MOBILE PRODUCT
                            </p>
                          </div>

                          <div className="w-7 h-7 rounded-lg bg-[#19bdca]/10 flex items-center justify-center">
                            <Smartphone
                              size={13}
                              className="text-[#20c0cf]"
                            />
                          </div>
                        </div>

                        <div className="mt-6">
                          <p className="text-[8px] font-semibold tracking-[0.16em] text-[#20bfce] uppercase">
                            Dashboard
                          </p>

                          <h3 className="text-[20px] leading-tight font-semibold mt-2">
                            Your business.
                            <br />
                            In your pocket.
                          </h3>

                          <p className="text-[9px] leading-4.5 text-slate-400 mt-2">
                            A connected mobile experience designed around users,
                            data and real workflows.
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mt-5">
                          <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-3">
                            <TrendingUp
                              size={13}
                              className="text-[#20c0cf]"
                            />

                            <p className="text-[15px] font-semibold mt-3">
                              24.8K
                            </p>

                            <p className="text-[7px] text-slate-500">
                              Activity
                            </p>
                          </div>

                          <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-3">
                            <Users
                              size={13}
                              className="text-[#20c0cf]"
                            />

                            <p className="text-[15px] font-semibold mt-3">
                              8.2K
                            </p>

                            <p className="text-[7px] text-slate-500">
                              Users
                            </p>
                          </div>
                        </div>

                        <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 mt-2">
                          <div className="flex justify-between items-center">
                            <p className="text-[8px] font-medium">
                              Product Activity
                            </p>

                            <span className="text-[7px] text-[#20c0cf]">
                              Live
                            </span>
                          </div>

                          <div className="flex items-end gap-1.5 h-[62px] mt-2.5">
                            {[35, 55, 42, 72, 52, 86, 67, 94].map(
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
                      </div>
                    </div>

                    {/* FLOATING CARDS */}

                    <div className="absolute -left-28 top-20 w-28 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Palette
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[9px] font-medium mt-2">
                        Mobile UI/UX
                      </p>
                    </div>

                    <div className="absolute -right-28 top-16 w-28 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Zap
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[9px] font-medium mt-2">
                        Performance
                      </p>
                    </div>

                    <div className="absolute -left-24 bottom-14 w-28 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Database
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[9px] font-medium mt-2">
                        API Connected
                      </p>
                    </div>

                    <div className="absolute -right-24 bottom-16 w-28 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <ShieldCheck
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[9px] font-medium mt-2">
                        Secure
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
                  ["01", "iOS Apps"],
                  ["02", "Android Apps"],
                  ["03", "React Native"],
                  ["04", "Mobile UI/UX"],
                ].map(([number, title], index) => (
                  <div
                    key={title}
                    className={`py-3.5 ${
                      index !== 3
                        ? "lg:border-r border-white/[0.07]"
                        : ""
                    } ${index > 0 ? "lg:pl-7" : ""}`}
                  >
                    <span className="block text-[9px] font-semibold text-[#1bb8c7] mb-0.5">
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
          className="relative py-11 md:py-13 bg-[#f8fafb]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-7 lg:gap-12">
              <div>
                <SectionLabel>Mobile Development</SectionLabel>

                <h2 className="text-[#071923] text-[30px] sm:text-[35px] md:text-[42px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3">
                  More than screens.{" "}
                  <span className="text-[#078fa1]">
                    A complete mobile product.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] sm:text-[16px] leading-7 text-slate-700 font-normal">
                  A successful mobile application needs to combine useful
                  functionality, clear user journeys, reliable backend
                  services and an interface that feels natural on a mobile
                  device.
                </p>

                <p className="text-[13px] sm:text-[14px] leading-6 mt-2.5 text-slate-500 font-normal">
                  DevZore develops mobile applications around real product and
                  business requirements. That can mean a startup MVP, customer
                  application, e-commerce app, booking platform or internal
                  business system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section
          id="mobile-development-services"
          aria-labelledby="mobile-services-heading"
          className="py-11 md:py-13 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Mobile Services</SectionLabel>

              <h2
                id="mobile-services-heading"
                className="text-[#071923] text-[30px] sm:text-[35px] md:text-[42px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                Mobile development from interface to backend.
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3 max-w-2xl">
                We develop the technical components required to turn a mobile
                product idea into a working application.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mobileServices.map((service) => (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0796A8]/40 hover:shadow-[0_16px_40px_rgba(7,25,35,0.07)]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#071923] to-[#18bdcb]" />

                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#eef3f4] text-[#075f70] flex items-center justify-center">
                      {service.icon}
                    </div>

                    <span className="text-[9px] font-semibold text-slate-300">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-[#071923] text-[16px] leading-6 font-semibold mt-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-[12px] leading-5.5 mt-2 font-normal">
                    {service.desc}
                  </p>

                  <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-2">
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
            WHAT WE BUILD
        ===================================================== */}

        <section
          aria-labelledby="mobile-build-heading"
          className="py-11 md:py-13 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-7 lg:gap-10 items-start">
              <div>
                <SectionLabel>What We Build</SectionLabel>

                <h2
                  id="mobile-build-heading"
                  className="text-[#071923] text-[30px] sm:text-[35px] md:text-[42px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Mobile applications designed around{" "}
                  <span className="text-[#078fa1]">
                    real workflows.
                  </span>
                </h2>

                <p className="text-slate-600 text-[14px] leading-6 mt-3">
                  Different mobile products require different functionality,
                  user journeys and backend architecture.
                </p>

                <p className="text-slate-500 text-[12px] leading-5.5 mt-2">
                  We adapt the application structure around the people using
                  the product and the business processes it needs to support.
                </p>

                <a
                  href="#mobile-project-enquiry"
                  className="inline-flex items-center gap-2 mt-4 text-[11px] font-semibold text-[#07899a] hover:text-[#071923] transition-colors"
                >
                  Discuss Your Mobile App
                  <ArrowRight size={13} />
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {whatWeBuild.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-[#0796A8]/35 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#eef4f5] text-[#07899a] flex items-center justify-center">
                      {item.icon}
                    </div>

                    <h3 className="text-[#071923] font-semibold text-[15px] mt-3.5">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 text-[11px] leading-5.5 mt-1.5">
                      {item.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            STANDARDS
        ===================================================== */}

        <section
          aria-labelledby="mobile-standards-heading"
          className="relative py-11 md:py-13 bg-[#071923] text-white overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-70"
            style={darkGrid}
          />

          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel light>Development Standards</SectionLabel>

              <h2
                id="mobile-standards-heading"
                className="text-[30px] sm:text-[35px] md:text-[42px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                Built for the device,{" "}
                <span className="text-[#25bfce]">
                  engineered for the product.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3 max-w-2xl">
                Mobile development decisions affect usability, performance,
                security, integrations and how easily the application can
                evolve after launch.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {standards.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.035] p-5 hover:bg-white/[0.055] hover:border-[#1bbac8]/25 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg border border-[#1bbac8]/20 bg-[#0e2b36] text-[#27c2d0] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="text-[14px] font-semibold mt-3.5">
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
            TECHNOLOGY
        ===================================================== */}

        <section
          aria-labelledby="mobile-tech-heading"
          className="py-11 md:py-13 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Technology Stack</SectionLabel>

              <h2
                id="mobile-tech-heading"
                className="text-[#071923] text-[30px] sm:text-[35px] md:text-[42px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Modern technologies for connected mobile products.
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3">
                Technologies are selected according to application
                functionality, integrations, security, maintainability and
                deployment requirements.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {techStack.map((category) => (
                <article
                  key={category.category}
                  className="rounded-2xl border border-slate-200 bg-[#fbfcfc] p-4 hover:border-[#0796A8]/35 transition-colors"
                >
                  <p className="text-[9px] font-semibold tracking-[0.16em] uppercase text-[#07899a]">
                    {category.category}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {category.items.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-200 bg-white px-2 py-1.5 text-[9px] font-medium text-slate-600"
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
            BUSINESS / STARTUPS
        ===================================================== */}

        <section
          aria-labelledby="mobile-business-heading"
          className="py-11 md:py-13 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Who We Build For</SectionLabel>

              <h2
                id="mobile-business-heading"
                className="text-[#071923] text-[30px] sm:text-[35px] md:text-[40px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Mobile development for businesses and startups.
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <div className="w-10 h-10 rounded-xl bg-[#eef4f5] text-[#07899a] flex items-center justify-center">
                  <BriefcaseBusiness size={19} />
                </div>

                <p className="text-[9px] font-semibold tracking-[0.16em] uppercase text-[#07899a] mt-4">
                  For Businesses
                </p>

                <h3 className="text-[#071923] text-[20px] font-semibold mt-1.5">
                  Custom Mobile Apps for Business
                </h3>

                <p className="text-slate-600 text-[12px] leading-6 mt-2.5">
                  A custom application can support customers, employees,
                  sales, operations, bookings, inventory and other business
                  workflows. We plan the product around the processes and
                  integrations your organisation actually needs.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <div className="w-10 h-10 rounded-xl bg-[#eef4f5] text-[#07899a] flex items-center justify-center">
                  <Rocket size={19} />
                </div>

                <p className="text-[9px] font-semibold tracking-[0.16em] uppercase text-[#07899a] mt-4">
                  For Startups
                </p>

                <h3 className="text-[#071923] text-[20px] font-semibold mt-1.5">
                  Mobile App Development for Startups
                </h3>

                <p className="text-slate-600 text-[12px] leading-6 mt-2.5">
                  Startup development can begin with a focused MVP and evolve
                  as the product gains users. We can support product planning,
                  UI/UX, development, APIs, testing and future iterations.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section
          aria-labelledby="mobile-process-heading"
          className="relative py-11 md:py-13 bg-[#071923] text-white"
        >
          <div
            className="absolute inset-0"
            style={darkGrid}
          />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel light>Our Process</SectionLabel>

              <h2
                id="mobile-process-heading"
                className="text-[30px] sm:text-[35px] md:text-[42px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                From product idea{" "}
                <span className="text-[#25bfce]">
                  to mobile release.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3">
                A structured workflow keeps requirements, design, development,
                testing and release easier to manage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="relative bg-[#071923] p-5 min-h-[170px] hover:bg-[#0a202a] transition-colors"
                >
                  <span className="text-[10px] font-semibold text-[#22bfce]">
                    {step.number}
                  </span>

                  <h3 className="text-[15px] font-semibold mt-5">
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
            WHY DEVZORE
        ===================================================== */}

        <section
          aria-labelledby="mobile-why-heading"
          className="py-11 md:py-13 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Why DevZore</SectionLabel>

              <h2
                id="mobile-why-heading"
                className="text-[#071923] text-[30px] sm:text-[35px] md:text-[42px] font-semibold tracking-[-0.04em] leading-[1.08] mt-3"
              >
                Product-focused development,{" "}
                <span className="text-[#078fa1]">
                  not just mobile screens.
                </span>
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3">
                We focus on how the application needs to work for its users,
                business and future development requirements.
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

                  <h3 className="text-[#071923] text-[15px] font-semibold mt-3.5">
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
          aria-labelledby="mobile-related-heading"
          className="py-11 md:py-13 bg-[#f7f9fa] border-y border-slate-200"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-7">
              <div>
                <SectionLabel>Related Services</SectionLabel>

                <h2
                  id="mobile-related-heading"
                  className="text-[#071923] text-[30px] sm:text-[35px] md:text-[40px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Supporting your complete product.
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
                  <span className="text-[8px] tracking-[0.16em] font-semibold text-[#0796A8]">
                    {service.label}
                  </span>

                  <h3 className="text-[#071923] text-[14px] leading-5 font-semibold mt-3">
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
          aria-labelledby="mobile-faq-heading"
          className="py-11 md:py-13 bg-white"
        >
          <div className="max-w-[980px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div>
                <SectionLabel>FAQ</SectionLabel>

                <h2
                  id="mobile-faq-heading"
                  className="text-[#071923] text-[30px] sm:text-[35px] md:text-[40px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Mobile app development questions clients ask.
                </h2>
              </div>

              <a
                href="#mobile-project-enquiry"
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
                      aria-controls={`mobile-faq-${index}`}
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
                      id={`mobile-faq-${index}`}
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
          id="mobile-project-enquiry"
          aria-labelledby="mobile-project-enquiry-heading"
          className="relative py-11 md:py-13 bg-[#071923] text-white overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-70"
            style={darkGrid}
          />

          <div className="absolute -top-20 left-[5%] w-[450px] h-[450px] rounded-full bg-[#0796A8]/10 blur-[130px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-7 lg:gap-12">
              <div>
                <SectionLabel light>Start a Project</SectionLabel>

                <h2
                  id="mobile-project-enquiry-heading"
                  className="text-[30px] sm:text-[35px] md:text-[42px] leading-[1.07] tracking-[-0.04em] font-semibold mt-3"
                >
                  Tell us about your{" "}
                  <span className="text-[#25bfce]">
                    mobile app idea.
                  </span>
                </h2>

                <p className="text-slate-300 text-[14px] leading-6 mt-3 max-w-lg">
                  Share the product idea, users and important features. We can
                  review the requirements and discuss the appropriate
                  development approach.
                </p>

                <div className="mt-5 space-y-2.5">
                  {[
                    "iOS and Android applications",
                    "Startup MVPs",
                    "Business mobile applications",
                    "Backend and API integrations",
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

                <div className="mt-6 pt-4 border-t border-white/[0.08]">
                  <p className="text-[9px] uppercase tracking-[0.18em] font-semibold text-slate-500">
                    Prefer a direct conversation?
                  </p>

                  <a
                    href="mailto:hello@devzore.com"
                    className="inline-flex items-center gap-2 mt-2 text-[12px] font-medium text-[#26c4d2]"
                  >
                    <Mail size={14} />
                    hello@devzore.com
                  </a>
                </div>
              </div>

              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/[0.1] bg-[#0a202a]/90 p-5 sm:p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
              >
                <div className="grid md:grid-cols-2 gap-3.5">
                  <div>
                    <label
                      htmlFor="mobile-name"
                      className="block text-[9px] font-semibold tracking-[0.13em] uppercase text-slate-400 mb-1.5"
                    >
                      Your Name *
                    </label>

                    <input
                      id="mobile-name"
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
                      htmlFor="mobile-email"
                      className="block text-[9px] font-semibold tracking-[0.13em] uppercase text-slate-400 mb-1.5"
                    >
                      Email Address *
                    </label>

                    <input
                      id="mobile-email"
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
                      htmlFor="mobile-company"
                      className="block text-[9px] font-semibold tracking-[0.13em] uppercase text-slate-400 mb-1.5"
                    >
                      Company
                    </label>

                    <input
                      id="mobile-company"
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
                      htmlFor="mobile-service"
                      className="block text-[9px] font-semibold tracking-[0.13em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Type
                    </label>

                    <select
                      id="mobile-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option>Mobile App Development</option>
                      <option>iOS App</option>
                      <option>Android App</option>
                      <option>Cross-Platform App</option>
                      <option>Startup MVP</option>
                      <option>Business Mobile App</option>
                      <option>E-Commerce App</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="mobile-timeline"
                      className="block text-[9px] font-semibold tracking-[0.13em] uppercase text-slate-400 mb-1.5"
                    >
                      Preferred Timeline
                    </label>

                    <select
                      id="mobile-timeline"
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
                      htmlFor="mobile-message"
                      className="block text-[9px] font-semibold tracking-[0.13em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Details *
                    </label>

                    <textarea
                      id="mobile-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your app, target users, important features and requirements..."
                      className="w-full resize-none rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] leading-5 text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
                  <p className="text-[9px] leading-4 text-slate-500 max-w-sm">
                    Share enough information for us to understand the product.
                    Detailed specifications can be discussed afterwards.
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

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <section className="bg-[#06151d] border-t border-white/[0.06]">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6 py-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-white text-[14px] font-semibold">
                  Have a mobile app idea? We’re ready to build it.
                </p>

                <p className="text-slate-500 text-[10px] mt-1">
                  iOS, Android, React Native and custom mobile products by
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

export default MobileApp;