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
} from "lucide-react";

const MobileApp = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatWeBuild = [
    {
      icon: <TrendingUp size={20} />,
      color: "purple",
      title: "Business Mobile Apps",
      desc: "Custom mobile applications for internal operations, field teams, inventory, customer management, sales workflows and business processes.",
    },
    {
      icon: <Globe size={20} />,
      color: "blue",
      title: "E-Commerce & Marketplace Apps",
      desc: "Mobile shopping experiences with product catalogs, customer accounts, checkout flows, order tracking, notifications and payment integrations.",
    },
    {
      icon: <Bell size={20} />,
      color: "green",
      title: "Booking & On-Demand Apps",
      desc: "Applications for appointments, service booking, delivery workflows and location-based experiences with customer and administration interfaces.",
    },
    {
      icon: <Wifi size={20} />,
      color: "cyan",
      title: "Community & Communication Apps",
      desc: "Mobile products with profiles, messaging, notifications, media sharing and content experiences designed around user interaction.",
    },
    {
      icon: <Lock size={20} />,
      color: "orange",
      title: "Finance & Business Tools",
      desc: "Secure mobile interfaces for financial workflows, dashboards and account management with authentication and careful handling of sensitive data.",
    },
    {
      icon: <Layers size={20} />,
      color: "pink",
      title: "Health & Fitness Applications",
      desc: "Mobile experiences for appointments, activity tracking, fitness workflows and other health-related use cases with privacy-conscious architecture.",
    },
  ];

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
      items: ["JWT", "OAuth", "Biometric Authentication", "Secure Storage"],
    },
    {
      category: "Distribution",
      items: ["App Store", "Google Play", "TestFlight", "Beta Testing"],
    },
  ];

  const process = [
    {
      n: "01",
      title: "Discovery & Planning",
      desc: "We define the app goals, users, core features, integrations and technical requirements before development begins.",
    },
    {
      n: "02",
      title: "UI/UX Design",
      desc: "User flows, wireframes and interface designs are prepared around the mobile experience and business requirements.",
    },
    {
      n: "03",
      title: "App Development",
      desc: "The application is developed using a structured component architecture with frontend, API and data integrations.",
    },
    {
      n: "04",
      title: "Testing & QA",
      desc: "Core user flows, responsive behaviour, API integrations, authentication and device-specific functionality are tested before release.",
    },
    {
      n: "05",
      title: "Release Preparation",
      desc: "We prepare production builds and can assist with the technical requirements for App Store and Google Play submission.",
    },
    {
      n: "06",
      title: "Support & Iteration",
      desc: "After launch, maintenance and continued feature development can be provided according to the project requirements.",
    },
  ];

  const whyUs = [
    {
      icon: <Smartphone size={16} />,
      title: "Cross-Platform Development",
      desc: "React Native enables us to build mobile experiences for both iOS and Android while sharing much of the application code.",
    },
    {
      icon: <Shield size={16} />,
      title: "Security-Conscious Development",
      desc: "Authentication, secure storage, API protection and sensible data-handling practices are considered throughout development.",
    },
    {
      icon: <Zap size={16} />,
      title: "Performance Focus",
      desc: "We structure applications to reduce unnecessary rendering, optimise assets and keep common mobile interactions responsive.",
    },
    {
      icon: <Code2 size={16} />,
      title: "Maintainable Code",
      desc: "Reusable components, organised project structure and clear application logic make future updates easier to manage.",
    },
    {
      icon: <Store size={16} />,
      title: "Release Assistance",
      desc: "We can help prepare production builds, store assets and technical requirements for publishing your application.",
    },
    {
      icon: <RefreshCw size={16} />,
      title: "Continued Development",
      desc: "The application can continue evolving after launch with maintenance, improvements and new functionality.",
    },
  ];

  const faqs = [
    {
      q: "How much does mobile app development cost?",
      a: "Mobile app development cost depends on the required features, integrations, user roles, design complexity and backend requirements. After reviewing your requirements, DevZore can provide a project-specific proposal.",
    },
    {
      q: "How long does it take to build a mobile app?",
      a: "Development time depends on the scope and complexity of the application. A focused application can require considerably less work than a product involving payments, real-time functionality, multiple user roles or complex backend systems. We define the expected delivery stages after reviewing the requirements.",
    },
    {
      q: "Can you build an app for both iOS and Android?",
      a: "Yes. React Native allows a large portion of the application code to be shared across iOS and Android while still supporting platform-specific functionality where required.",
    },
    {
      q: "Do you help with App Store and Google Play submission?",
      a: "Yes. DevZore can assist with production builds and the technical preparation required for Apple App Store and Google Play submission. Store approval itself remains subject to the policies and review processes of Apple and Google.",
    },
    {
      q: "Can a mobile app work offline?",
      a: "Yes, when the project requires it. Local storage and synchronization strategies can be used so selected functionality remains available without a continuous internet connection.",
    },
    {
      q: "Can you connect the mobile app to an existing backend?",
      a: "Yes. We can integrate a mobile application with an existing REST API or other compatible backend service, or develop a new backend when the project requires one.",
    },
    {
      q: "Can the app include push notifications?",
      a: "Yes. Push notifications can be implemented for use cases such as order updates, reminders, account activity and other relevant application events.",
    },
    {
      q: "Do you provide maintenance after launch?",
      a: "Yes. Ongoing maintenance, bug fixes, compatibility updates and additional feature development can be provided according to the agreed support arrangement.",
    },
  ];

  const relatedServices = [
    {
      title: "UI/UX Design",
      desc: "Plan user flows and mobile interfaces before development.",
      path: "/ui-ux-design",
      icon: <Layers size={18} />,
    },
    {
      title: "Backend & API",
      desc: "Build APIs, authentication and server-side functionality for your app.",
      path: "/backend-api",
      icon: <Database size={18} />,
    },
    {
      title: "Startup MVP",
      desc: "Turn a focused product idea into an initial working release.",
      path: "/startup-mvp",
      icon: <Zap size={18} />,
    },
  ];

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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://devzore.com/mobile-apps#service",
    name: "Mobile App Development Services",
    serviceType: "Mobile App Development",
    url: "https://devzore.com/mobile-apps",
    description:
      "Cross-platform mobile application development for iOS and Android using React Native.",
    provider: {
      "@id": "https://devzore.com/#organization",
    },
    areaServed: "Worldwide",
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
        name: "All Services",
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

      <div
        className={`min-h-screen transition-colors duration-300 ${
          d ? "bg-[#030303]" : "bg-white"
        }`}
      >
        {/* HERO */}
        <section
          aria-labelledby="mobile-heading"
          className={`pt-28 pb-14 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="flex flex-wrap gap-3 mb-6">
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
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold border ${
                      d
                        ? "bg-green-500/10 border-green-500/20 text-green-400"
                        : "bg-green-50 border-green-200 text-green-700"
                    }`}
                  >
                    <Globe size={11} />
                    Available Worldwide
                  </div>
                </div>

                <h1
                  id="mobile-heading"
                  className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5 ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  Mobile App Development for{" "}
                  <span className="text-purple-600">
                    iOS & Android
                  </span>
                </h1>

                <p
                  className={`text-lg font-semibold mb-5 ${
                    d ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  React Native · Mobile UI · APIs · Authentication ·
                  App Distribution
                </p>

                <p
                  className={`text-base leading-relaxed mb-5 ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  DevZore builds cross-platform mobile applications for
                  businesses and startups using React Native. We focus on
                  practical user experiences, reliable backend integrations
                  and maintainable application architecture.
                </p>

                <p
                  className={`text-base leading-relaxed mb-8 ${
                    d ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  From customer-facing applications to internal business
                  tools, we can help with product planning, interface
                  development, APIs, authentication, notifications and
                  production release preparation.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    {
                      icon: <Smartphone size={15} />,
                      title: "iOS & Android",
                      desc: "Cross-platform application development",
                    },
                    {
                      icon: <Code2 size={15} />,
                      title: "React Native",
                      desc: "Modern component-based development",
                    },
                    {
                      icon: <Shield size={15} />,
                      title: "Secure Architecture",
                      desc: "Authentication and data protection practices",
                    },
                    {
                      icon: <Store size={15} />,
                      title: "Release Support",
                      desc: "Production build and store preparation",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className={`p-4 rounded-xl border ${
                        d
                          ? "bg-white/[0.02] border-white/[0.06]"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <div className="text-purple-500 mb-2">
                        {item.icon}
                      </div>
                      <p
                        className={`text-[13px] font-bold ${
                          d ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {item.title}
                      </p>
                      <p
                        className={`text-[11px] mt-1 ${
                          d ? "text-gray-500" : "text-gray-500"
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    onClick={scrollTop}
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                  >
                    Discuss Your Mobile App
                    <ArrowRight size={14} />
                  </Link>

                  <a
                    href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20a%20mobile%20app%20project."
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
                className={`p-7 sm:p-8 rounded-3xl border ${
                  d
                    ? "bg-white/[0.02] border-white/[0.06]"
                    : "bg-[#fafafa] border-gray-200"
                }`}
              >
                <p
                  className={`text-[11px] font-black uppercase tracking-widest mb-6 ${
                    d ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  Mobile Development Capabilities
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: "Cross-Platform Applications",
                      desc: "Shared application architecture for iOS and Android.",
                    },
                    {
                      title: "Backend & API Integration",
                      desc: "Connect mobile interfaces to application data and services.",
                    },
                    {
                      title: "Authentication",
                      desc: "Account access, tokens and supported biometric workflows.",
                    },
                    {
                      title: "Push Notifications",
                      desc: "Notification workflows for relevant application events.",
                    },
                    {
                      title: "Offline Data",
                      desc: "Local storage and synchronization where the product requires it.",
                    },
                    {
                      title: "Production Builds",
                      desc: "Release preparation for mobile application distribution.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className={`flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0 ${
                        d ? "border-white/[0.05]" : "border-gray-100"
                      }`}
                    >
                      <CheckCircle
                        size={15}
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
                          className={`text-[11px] mt-1 leading-relaxed ${
                            d ? "text-gray-500" : "text-gray-500"
                          }`}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE BUILD */}
        <section
          aria-labelledby="mobile-build-heading"
          className={`py-16 border-b ${
            d
              ? "border-white/[0.06] bg-[#050505]"
              : "border-gray-100 bg-[#fafafa]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <p className="text-[11px] font-black uppercase tracking-widest text-purple-500 mb-3">
                Solutions
              </p>

              <h2
                id="mobile-build-heading"
                className={`text-3xl font-black mb-4 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Mobile Applications We Can Build
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Mobile products can be designed around customer experiences,
                internal workflows, commerce, communication and other
                business requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whatWeBuild.map((item) => (
                <article
                  key={item.title}
                  className={`p-6 rounded-2xl border transition-all ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-purple-500/25"
                      : "bg-white border-gray-200 hover:border-purple-200 hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${
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

        {/* TECH STACK */}
        <section
          aria-labelledby="mobile-tech-heading"
          className={`py-16 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[11px] font-black uppercase tracking-widest text-purple-500 mb-3">
                Technology
              </p>

              <h2
                id="mobile-tech-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Mobile App Technology Stack
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Technologies selected according to the application's
                functionality, integrations and deployment requirements.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {techStack.map((cat) => (
                <div
                  key={cat.category}
                  className={`p-5 rounded-2xl border ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06]"
                      : "bg-[#fafafa] border-gray-200"
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
                            : "bg-white border-gray-200 text-gray-700"
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

        {/* WHY DEVZORE */}
        <section
          aria-labelledby="mobile-why-heading"
          className={`py-16 border-b ${
            d
              ? "border-white/[0.06] bg-[#050505]"
              : "border-gray-100 bg-[#fafafa]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <p className="text-[11px] font-black uppercase tracking-widest text-purple-500 mb-3">
                Why DevZore
              </p>

              <h2
                id="mobile-why-heading"
                className={`text-3xl font-black mb-4 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                A Practical Approach to Mobile Development
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                We focus on maintainable architecture, clear communication
                and mobile experiences aligned with the actual requirements
                of the product.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyUs.map((item) => (
                <article
                  key={item.title}
                  className={`p-6 rounded-2xl border transition-all ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-purple-500/20"
                      : "bg-white border-gray-200 hover:border-purple-200 hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-4 ${
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

        {/* PROCESS */}
        <section
          aria-labelledby="mobile-process-heading"
          className={`py-16 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[11px] font-black uppercase tracking-widest text-purple-500 mb-3">
                Process
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
                A structured workflow from initial requirements through
                development, testing and release preparation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {process.map((step) => (
                <article
                  key={step.n}
                  className={`p-6 rounded-2xl border ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06]"
                      : "bg-[#fafafa] border-gray-200"
                  }`}
                >
                  <div
                    className={`text-[13px] font-black mb-3 ${
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

        {/* FAQ */}
        <section
          aria-labelledby="mobile-faq-heading"
          className={`py-16 border-b ${
            d
              ? "border-white/[0.06] bg-[#050505]"
              : "border-gray-100 bg-[#fafafa]"
          }`}
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[11px] font-black uppercase tracking-widest text-purple-500 mb-3">
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
                Common questions about planning, developing and launching a
                mobile application.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={faq.q}
                  className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                    activeFaq === i
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
                      setActiveFaq(activeFaq === i ? null : i)
                    }
                    aria-expanded={activeFaq === i}
                    className="w-full p-5 text-left flex items-start justify-between gap-4"
                  >
                    <span
                      className={`text-[14px] font-bold leading-snug ${
                        activeFaq === i
                          ? "text-purple-500"
                          : d
                            ? "text-white"
                            : "text-gray-900"
                      }`}
                    >
                      {faq.q}
                    </span>

                    <div
                      className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center ${
                        activeFaq === i
                          ? "bg-purple-600 text-white"
                          : d
                            ? "bg-white/[0.06] text-gray-500"
                            : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {activeFaq === i ? (
                        <Minus size={13} />
                      ) : (
                        <Plus size={13} />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeFaq === i
                        ? "max-h-[400px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div
                      className={`px-5 pb-5 border-t text-[14px] leading-relaxed ${
                        d
                          ? "border-white/[0.06] text-gray-400"
                          : "border-purple-100 text-gray-600"
                      }`}
                    >
                      <p className="pt-4">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section
          aria-labelledby="mobile-related-heading"
          className={`py-14 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <p className="text-[11px] font-black uppercase tracking-widest text-purple-500 mb-3">
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
                onClick={scrollTop}
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
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={scrollTop}
                  className={`group p-6 rounded-2xl border transition-all ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06] hover:border-purple-500/25 hover:bg-white/[0.04]"
                      : "bg-white border-gray-200 hover:border-purple-200 hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
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

                  <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-purple-500">
                    Learn More
                    <ArrowRight
                      size={12}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          aria-labelledby="mobile-cta-heading"
          className="py-16"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                d ? "bg-purple-600/15" : "bg-purple-50"
              }`}
            >
              <Smartphone size={24} className="text-purple-500" />
            </div>

            <h2
              id="mobile-cta-heading"
              className={`text-3xl font-black mb-4 ${
                d ? "text-white" : "text-gray-900"
              }`}
            >
              Have a Mobile App Idea?
            </h2>

            <p
              className={`text-base mb-8 max-w-xl mx-auto leading-relaxed ${
                d ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Tell us what you want to build. We can review the requirements
              and discuss the right approach for your iOS and Android
              application.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                onClick={scrollTop}
                className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
              >
                Discuss Your Project
                <ArrowRight size={15} />
              </Link>

              <a
                href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20a%20mobile%20app%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
              >
                WhatsApp DevZore
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MobileApp;