import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Smartphone,
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  Code2,
  Globe,
  Plus,
  Minus,
  Wifi,
  Bell,
  Lock,
  Layers,
  TrendingUp,
  Store,
  Database,
  RefreshCw,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

const MobileApp = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  /* =====================================================
     WHAT WE BUILD
  ===================================================== */

  const whatWeBuild = [
    {
      icon: <BriefcaseBusiness size={20} />,
      color: "purple",
      title: "Business Mobile App Development",
      desc: "Custom mobile apps for businesses including internal operations, field teams, inventory, customer management, sales workflows and other business processes.",
    },
    {
      icon: <TrendingUp size={20} />,
      color: "blue",
      title: "Startup App Development",
      desc: "Mobile application development for startups, from focused MVPs and early product releases to scalable applications prepared for future features and growth.",
    },
    {
      icon: <Store size={20} />,
      color: "green",
      title: "E-Commerce & Marketplace Apps",
      desc: "Mobile shopping applications with product catalogs, customer accounts, secure checkout workflows, payments, order tracking and push notifications.",
    },
    {
      icon: <Bell size={20} />,
      color: "orange",
      title: "Booking & On-Demand Apps",
      desc: "Custom applications for appointments, service booking, delivery workflows, customer requests and location-based mobile experiences.",
    },
    {
      icon: <Users size={20} />,
      color: "cyan",
      title: "Community & Communication Apps",
      desc: "Mobile products with user profiles, messaging, notifications, media sharing, feeds and other interactive communication features.",
    },
    {
      icon: <Layers size={20} />,
      color: "pink",
      title: "Enterprise Mobile Applications",
      desc: "Mobile software development for organisations that need secure workflows, role-based access, dashboards, integrations and business data on mobile devices.",
    },
  ];

  /* =====================================================
     MOBILE DEVELOPMENT SERVICES
  ===================================================== */

  const mobileServices = [
    {
      icon: <Smartphone size={18} />,
      title: "iOS App Development",
      desc: "Cross-platform iOS and iPhone app development using React Native with platform-specific functionality where required.",
    },
    {
      icon: <Smartphone size={18} />,
      title: "Android App Development",
      desc: "Android application development for smartphones and supported devices with responsive interfaces and backend integrations.",
    },
    {
      icon: <Code2 size={18} />,
      title: "Cross-Platform App Development",
      desc: "Shared React Native architecture for iOS and Android that helps reduce duplicated development while supporting platform-specific requirements.",
    },
    {
      icon: <Layers size={18} />,
      title: "Mobile App Design & UI/UX",
      desc: "Mobile UI/UX design including user flows, screen layouts, navigation, interaction patterns and interfaces designed around the product experience.",
    },
    {
      icon: <Database size={18} />,
      title: "Backend & API Integration",
      desc: "Connect mobile applications with REST APIs, databases, authentication systems, payments and third-party services.",
    },
    {
      icon: <RefreshCw size={18} />,
      title: "App Maintenance & Improvements",
      desc: "Continued mobile application development including bug fixes, compatibility updates, performance improvements and additional features.",
    },
  ];

  /* =====================================================
     TECHNOLOGY STACK
  ===================================================== */

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

  /* =====================================================
     PROCESS
  ===================================================== */

  const process = [
    {
      n: "01",
      title: "Discovery & App Planning",
      desc: "We define your mobile app goals, target users, platforms, core features, integrations and technical requirements before development begins.",
    },
    {
      n: "02",
      title: "Mobile UI/UX Design",
      desc: "User flows, wireframes and mobile interfaces are planned around usability, product requirements and the expected user journey.",
    },
    {
      n: "03",
      title: "Mobile App Development",
      desc: "The application is developed using structured components, frontend logic, APIs, authentication and required backend integrations.",
    },
    {
      n: "04",
      title: "Testing & Quality Assurance",
      desc: "Important user flows, device behaviour, API integrations, authentication, notifications and application functionality are tested before release.",
    },
    {
      n: "05",
      title: "App Store Release Preparation",
      desc: "We prepare production builds and can assist with technical requirements for Apple App Store and Google Play submission.",
    },
    {
      n: "06",
      title: "Maintenance & Iteration",
      desc: "After launch, continued development, bug fixes, compatibility updates and additional features can be provided according to project requirements.",
    },
  ];

  /* =====================================================
     WHY DEVZORE
  ===================================================== */

  const whyUs = [
    {
      icon: <Smartphone size={16} />,
      title: "iOS & Android Development",
      desc: "We build cross-platform mobile applications for iOS and Android using React Native and platform-specific functionality where needed.",
    },
    {
      icon: <Shield size={16} />,
      title: "Security-Conscious Development",
      desc: "Authentication, secure storage, API protection, permissions and appropriate data-handling practices are considered throughout development.",
    },
    {
      icon: <Zap size={16} />,
      title: "Performance Focus",
      desc: "We reduce unnecessary rendering, optimise application assets and structure common interactions for responsive mobile experiences.",
    },
    {
      icon: <Code2 size={16} />,
      title: "Maintainable Code",
      desc: "Reusable components, organised project structure and clear application logic help make future improvements easier to manage.",
    },
    {
      icon: <Store size={16} />,
      title: "Release Assistance",
      desc: "We can help prepare production builds and technical requirements for publishing applications to supported mobile app stores.",
    },
    {
      icon: <Globe size={16} />,
      title: "Remote Development Worldwide",
      desc: "DevZore works remotely with startups and businesses worldwide using online communication and project collaboration workflows.",
    },
  ];

  /* =====================================================
     FAQ
  ===================================================== */

  const faqs = [
    {
      q: "How much does mobile app development cost?",
      a: "Mobile app development cost depends on the required features, platforms, integrations, user roles, UI/UX complexity and backend requirements. After reviewing your project, DevZore can provide a proposal based on the required scope and deliverables.",
    },
    {
      q: "How long does it take to develop a mobile application?",
      a: "The timeline depends on the size and complexity of the application. A focused startup app or MVP generally requires less development than an enterprise mobile application with payments, real-time functionality, multiple user roles and complex backend integrations.",
    },
    {
      q: "Do you provide Android and iOS app development?",
      a: "Yes. DevZore provides cross-platform Android and iOS app development using React Native. Much of the application code can be shared while platform-specific functionality can be implemented when required.",
    },
    {
      q: "Can you build a custom mobile app for my business?",
      a: "Yes. Custom mobile app development can be tailored around your business workflows, customers, employees, services, inventory, bookings, sales or other operational requirements.",
    },
    {
      q: "Do you provide mobile app development for startups?",
      a: "Yes. We can help startups develop focused mobile products and MVPs, including product planning, mobile UI/UX, frontend development, APIs, authentication, testing and release preparation.",
    },
    {
      q: "What is cross-platform mobile app development?",
      a: "Cross-platform development allows applications for platforms such as iOS and Android to share a significant portion of their codebase. DevZore uses React Native for cross-platform mobile application development.",
    },
    {
      q: "Do you provide mobile app UI/UX design?",
      a: "Yes. Mobile app design can include user flows, wireframes, screen layouts, navigation patterns, interface design and prototypes according to the needs of the project.",
    },
    {
      q: "Can you connect a mobile app to an existing backend?",
      a: "Yes. We can integrate a mobile application with an existing REST API or compatible backend service, or develop a new backend and API when required.",
    },
    {
      q: "Can mobile apps include push notifications and offline functionality?",
      a: "Yes. Push notifications can be implemented for relevant application events, while local storage and synchronization strategies can support selected offline functionality when required.",
    },
    {
      q: "Do you help with App Store and Google Play submission?",
      a: "Yes. DevZore can assist with production builds and technical preparation for Apple App Store and Google Play submission. Final approval remains subject to Apple and Google's policies and review processes.",
    },
    {
      q: "Can I hire a mobile app developer through DevZore?",
      a: "You can contact DevZore with your project requirements to discuss mobile application development for a startup, business or digital product. The development scope and collaboration approach can then be defined around the project.",
    },
    {
      q: "Do you provide mobile app maintenance after launch?",
      a: "Yes. Ongoing maintenance, bug fixes, compatibility updates, performance improvements and additional feature development can be provided according to the agreed support arrangement.",
    },
  ];

  /* =====================================================
     RELATED SERVICES
  ===================================================== */

  const relatedServices = [
    {
      title: "UI/UX Design",
      desc: "Plan user flows, mobile UI/UX and product interfaces before development.",
      path: "/ui-ux-design",
      icon: <Layers size={18} />,
    },
    {
      title: "Backend & API Development",
      desc: "Build APIs, databases, authentication and server-side functionality for your mobile application.",
      path: "/backend-api",
      icon: <Database size={18} />,
    },
    {
      title: "Startup MVP Development",
      desc: "Turn a focused startup product idea into an initial working web or mobile release.",
      path: "/startup-mvp",
      icon: <Zap size={18} />,
    },
  ];

  /* =====================================================
     COLORS
  ===================================================== */

  const colorMap = {
    purple: d
      ? "bg-purple-500/10 border-purple-500/20 text-purple-400"
      : "bg-purple-50 border-purple-100 text-purple-600",

    blue: d
      ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
      : "bg-blue-50 border-blue-100 text-blue-600",

    green: d
      ? "bg-green-500/10 border-green-500/20 text-green-400"
      : "bg-green-50 border-green-100 text-green-600",

    cyan: d
      ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
      : "bg-cyan-50 border-cyan-100 text-cyan-600",

    orange: d
      ? "bg-orange-500/10 border-orange-500/20 text-orange-400"
      : "bg-orange-50 border-orange-100 text-orange-600",

    pink: d
      ? "bg-pink-500/10 border-pink-500/20 text-pink-400"
      : "bg-pink-50 border-pink-100 text-pink-600",
  };

  /* =====================================================
     STRUCTURED DATA
  ===================================================== */

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
    areaServed: "Worldwide",
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
        name: "Mobile App Development",
        item: "https://devzore.com/mobile-apps",
      },
    ],
  };

  return (
    <>
      {/* =====================================================
          STRUCTURED DATA
          Main title/meta/canonical/OG tags are handled in App.jsx
      ===================================================== */}

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
        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          aria-labelledby="mobile-heading"
          className={`pt-24 pb-10 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${
                      d
                        ? "bg-purple-600/10 border-purple-500/20 text-purple-400"
                        : "bg-purple-50 border-purple-200 text-purple-700"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Mobile App Development
                  </div>

                  <div
                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold border ${
                      d
                        ? "bg-green-500/10 border-green-500/20 text-green-400"
                        : "bg-green-50 border-green-200 text-green-700"
                    }`}
                  >
                    <Globe size={11} />
                    Worldwide Clients
                  </div>
                </div>

                <h1
                  id="mobile-heading"
                  className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  Custom Mobile App Development for{" "}
                  <span className="text-purple-600">
                    iOS & Android
                  </span>
                </h1>

                <p
                  className={`text-lg font-semibold mb-4 ${
                    d ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  React Native · iOS · Android · Mobile UI/UX · APIs
                </p>

                <p
                  className={`text-base leading-relaxed mb-4 ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  DevZore provides mobile app development services for startups
                  and businesses that need reliable, modern and maintainable
                  mobile products. We build custom mobile applications for iOS
                  and Android using React Native and modern backend technologies.
                </p>

                <p
                  className={`text-base leading-relaxed mb-6 ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  From business mobile app development and startup applications
                  to e-commerce and enterprise mobile software, our development
                  process can cover mobile UI/UX, APIs, authentication,
                  notifications, payments, testing and release preparation.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                  >
                    Get a Mobile App Quote
                    <ArrowRight size={14} />
                  </Link>

                  <a
                    href="https://wa.me/923348004300?text=Hi%20DevZore!%20I%20would%20like%20to%20discuss%20a%20mobile%20app%20development%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* CAPABILITIES */}

              <div
                className={`p-6 md:p-7 rounded-3xl border ${
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
                  Mobile Development Capabilities
                </p>

                <div className="space-y-3">
                  {[
                    {
                      title: "iOS Application Development",
                      desc: "Mobile applications prepared for supported Apple devices.",
                    },
                    {
                      title: "Android Application Development",
                      desc: "Modern Android applications using cross-platform technology.",
                    },
                    {
                      title: "Cross-Platform Development",
                      desc: "Shared React Native architecture for iOS and Android.",
                    },
                    {
                      title: "Mobile UI/UX Design",
                      desc: "User flows and interfaces designed for mobile experiences.",
                    },
                    {
                      title: "Backend & API Integration",
                      desc: "APIs, authentication, databases and third-party integrations.",
                    },
                    {
                      title: "App Release Preparation",
                      desc: "Production builds and technical store submission support.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className={`flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0 ${
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
                          className={`text-[11px] mt-0.5 leading-relaxed ${
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
                  className={`mt-4 p-3 rounded-xl ${
                    d ? "bg-purple-600/5" : "bg-purple-50"
                  }`}
                >
                  <p
                    className={`text-[11px] font-semibold text-center ${
                      d ? "text-purple-400" : "text-purple-700"
                    }`}
                  >
                    Available for remote mobile app development projects
                    worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MOBILE DEVELOPMENT SERVICES
        ===================================================== */}

        <section
          aria-labelledby="mobile-services-heading"
          className={`py-12 border-b ${
            d
              ? "border-white/[0.06] bg-[#050505]"
              : "border-gray-100 bg-[#fafafa]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-8">
              <p className="text-[11px] font-black uppercase tracking-widest text-purple-500 mb-2">
                Mobile Development Services
              </p>

              <h2
                id="mobile-services-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Mobile Application Development Services
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                From Android and iOS development to mobile UI/UX and backend
                integrations, we build the technical components required for
                modern mobile products.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mobileServices.map((service) => (
                <article
                  key={service.title}
                  className={`p-5 rounded-2xl border transition-all ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06] hover:border-purple-500/25"
                      : "bg-white border-gray-200 hover:border-purple-200 hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-3 ${
                      d
                        ? "bg-purple-500/10 border-purple-500/20 text-purple-400"
                        : "bg-purple-50 border-purple-100 text-purple-600"
                    }`}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className={`text-[14px] font-bold mb-2 ${
                      d ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-[13px] leading-relaxed ${
                      d ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {service.desc}
                  </p>
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
          className={`py-12 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-8">
              <p className="text-[11px] font-black uppercase tracking-widest text-purple-500 mb-2">
                What We Build
              </p>

              <h2
                id="mobile-build-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Custom Mobile Apps for Startups & Businesses
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Our custom app development approach adapts the application
                architecture, interfaces and integrations around your users,
                workflows and business requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whatWeBuild.map((item) => (
                <article
                  key={item.title}
                  className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-purple-500/25"
                      : "bg-[#fafafa] border-gray-200 hover:border-purple-200 hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-3 ${
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

        {/* =====================================================
            TECHNOLOGY STACK
        ===================================================== */}

        <section
          aria-labelledby="mobile-tech-heading"
          className={`py-12 border-b ${
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
                id="mobile-tech-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Mobile App Development Technology Stack
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Technologies selected according to application functionality,
                integrations, security, maintainability and deployment
                requirements.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {techStack.map((cat) => (
                <div
                  key={cat.category}
                  className={`p-4 rounded-2xl border ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06]"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <p className="text-[11px] font-black uppercase tracking-widest mb-3 text-purple-500">
                    {cat.category}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((tech) => (
                      <span
                        key={tech}
                        className={`text-[10px] font-medium px-2 py-1 rounded-md border ${
                          d
                            ? "bg-white/[0.04] border-white/[0.08] text-gray-300"
                            : "bg-[#fafafa] border-gray-200 text-gray-700"
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

        {/* =====================================================
            WHY DEVZORE
        ===================================================== */}

        <section
          aria-labelledby="mobile-why-heading"
          className={`py-12 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-8">
              <p className="text-[11px] font-black uppercase tracking-widest text-purple-500 mb-2">
                Why DevZore
              </p>

              <h2
                id="mobile-why-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                A Practical Mobile App Development Approach
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                DevZore combines mobile application development, backend
                integration and product-focused engineering to build software
                around real business requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyUs.map((item) => (
                <article
                  key={item.title}
                  className={`p-5 rounded-2xl border transition-all ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06] hover:border-purple-500/20"
                      : "bg-[#fafafa] border-gray-200 hover:border-purple-200 hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-3 ${
                      d
                        ? "bg-purple-500/10 border-purple-500/20 text-purple-400"
                        : "bg-purple-50 border-purple-100 text-purple-600"
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

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section
          aria-labelledby="mobile-process-heading"
          className={`py-12 border-b ${
            d
              ? "border-white/[0.06] bg-[#050505]"
              : "border-gray-100 bg-[#fafafa]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <p className="text-[11px] font-black uppercase tracking-widest text-purple-500 mb-2">
                Development Process
              </p>

              <h2
                id="mobile-process-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                How We Build Mobile Applications
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                A structured mobile software development workflow from initial
                requirements through design, development, testing and release.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {process.map((step) => (
                <article
                  key={step.n}
                  className={`p-5 rounded-2xl border ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06]"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div
                    className={`text-[13px] font-black mb-2 ${
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

        {/* =====================================================
            BUSINESS / STARTUP SECTION
        ===================================================== */}

        <section
          aria-labelledby="mobile-business-heading"
          className={`py-12 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <article
                className={`p-6 rounded-2xl border ${
                  d
                    ? "bg-white/[0.02] border-white/[0.06]"
                    : "bg-[#fafafa] border-gray-200"
                }`}
              >
                <p className="text-[11px] font-black uppercase tracking-widest text-purple-500 mb-2">
                  For Businesses
                </p>

                <h2
                  id="mobile-business-heading"
                  className={`text-2xl font-black mb-3 ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  Custom Mobile App Development for Business
                </h2>

                <p
                  className={`text-[14px] leading-relaxed ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  A custom mobile app can support customers, employees, sales,
                  operations, bookings, inventory and other business workflows.
                  We plan the application around the processes and integrations
                  your organisation actually needs.
                </p>
              </article>

              <article
                className={`p-6 rounded-2xl border ${
                  d
                    ? "bg-white/[0.02] border-white/[0.06]"
                    : "bg-[#fafafa] border-gray-200"
                }`}
              >
                <p className="text-[11px] font-black uppercase tracking-widest text-purple-500 mb-2">
                  For Startups
                </p>

                <h2
                  className={`text-2xl font-black mb-3 ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  Mobile App Development for Startups
                </h2>

                <p
                  className={`text-[14px] leading-relaxed ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Startup app development can begin with a focused MVP and
                  evolve as the product gains users and requirements become
                  clearer. We can support product planning, mobile UI/UX,
                  development, APIs, testing and future iterations.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}

        <section
          aria-labelledby="mobile-faq-heading"
          className={`py-12 border-b ${
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
                id="mobile-faq-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Mobile App Development FAQ
              </h2>

              <p
                className={`text-base ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Common questions about custom mobile application development,
                platforms, costs, features and launch.
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
                      aria-controls={`mobile-faq-${index}`}
                      className="w-full p-4 text-left flex items-start justify-between gap-4"
                    >
                      <span
                        className={`text-[14px] font-bold leading-snug ${
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
                      id={`mobile-faq-${index}`}
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div
                        className={`px-4 pb-4 border-t text-[14px] leading-relaxed ${
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

        {/* =====================================================
            RELATED SERVICES
        ===================================================== */}

        <section
          aria-labelledby="mobile-related-heading"
          className={`py-12 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-7">
              <div>
                <p className="text-[11px] font-black uppercase tracking-widest text-purple-500 mb-2">
                  Related Services
                </p>

                <h2
                  id="mobile-related-heading"
                  className={`text-2xl font-black ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  Supporting Your Mobile Product
                </h2>
              </div>

              <Link
                to="/allservices"
                className={`inline-flex items-center gap-2 text-[13px] font-semibold ${
                  d
                    ? "text-purple-400 hover:text-purple-300"
                    : "text-purple-600 hover:text-purple-700"
                }`}
              >
                View All Services
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {relatedServices.map((service) => (
                <article
                  key={service.path}
                  className={`group p-5 rounded-2xl border transition-all ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06] hover:border-purple-500/25 hover:bg-white/[0.04]"
                      : "bg-[#fafafa] border-gray-200 hover:border-purple-200 hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                      d
                        ? "bg-purple-500/10 text-purple-400"
                        : "bg-purple-50 text-purple-600"
                    }`}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className={`text-[14px] font-bold mb-2 ${
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

                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-purple-500"
                  >
                    Learn More
                    <ArrowRight
                      size={12}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section
          aria-labelledby="mobile-cta-heading"
          className="py-12"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div
              className={`p-7 md:p-8 rounded-3xl border text-center ${
                d
                  ? "bg-white/[0.02] border-white/[0.06]"
                  : "bg-[#fafafa] border-gray-200"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                  d ? "bg-purple-600/15" : "bg-purple-50"
                }`}
              >
                <Smartphone
                  size={22}
                  className="text-purple-500"
                />
              </div>

              <h2
                id="mobile-cta-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Need a Mobile App Developer for Your Project?
              </h2>

              <p
                className={`text-base mb-6 max-w-2xl mx-auto leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Tell us about your mobile application, business requirements
                and target users. We can discuss the development scope,
                technology and next steps for your iOS and Android project.
              </p>

              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
                >
                  Discuss Your Mobile App
                  <ArrowRight size={15} />
                </Link>

                <a
                  href="https://wa.me/923348004300?text=Hi%20DevZore!%20I%20would%20like%20to%20discuss%20a%20mobile%20app%20development%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-3.5 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
                >
                  WhatsApp DevZore
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MobileApp;