import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Code2,
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  Zap,
  Database,
  Monitor,
  Server,
  Layers,
  Plus,
  Minus,
  TrendingUp,
  RefreshCw,
  BarChart3,
  Boxes,
  Gauge,
  TestTube2,
  Accessibility,
  Rocket,
  ShoppingCart,
  Smartphone,
  Workflow,
  Users,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const ReactDevelopment = ({ isDark }) => {
  const d = isDark;

  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const whatsappUrl =
    'https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20a%20React%20development%20project.';

  const whatWeBuild = [
    {
      icon: <Monitor size={20} />,
      color: 'purple',
      title: 'React Web Development',
      desc: 'Custom React web development for responsive, interactive and maintainable business websites and web applications using reusable components and modern frontend architecture.',
    },
    {
      icon: <Code2 size={20} />,
      color: 'cyan',
      title: 'React Application Development',
      desc: 'React application development for business software, customer portals, internal tools and interactive products connected to APIs and backend systems.',
    },
    {
      icon: <TrendingUp size={20} />,
      color: 'indigo',
      title: 'React SaaS Development',
      desc: 'React SaaS development for onboarding, account management, subscription interfaces, team workflows, dashboards and data-driven software products.',
    },
    {
      icon: <BarChart3 size={20} />,
      color: 'blue',
      title: 'React Dashboard Development',
      desc: 'Custom React dashboards and admin panels with charts, data tables, filters, forms, authentication, permissions and API-driven business data.',
    },
    {
      icon: <ShoppingCart size={20} />,
      color: 'green',
      title: 'React eCommerce Development',
      desc: 'React eCommerce development for storefront interfaces, product catalogs, search, filtering, carts, customer accounts and checkout integrations.',
    },
    {
      icon: <Layers size={20} />,
      color: 'orange',
      title: 'React UI Development',
      desc: 'Reusable React UI development with component libraries, responsive layouts, design systems, accessible interface patterns and consistent styling.',
    },
    {
      icon: <RefreshCw size={20} />,
      color: 'purple',
      title: 'React Migration & Modernization',
      desc: 'Modernize legacy frontend applications through React migration, component refactoring, hooks, TypeScript adoption and updated frontend architecture.',
    },
    {
      icon: <Server size={20} />,
      color: 'blue',
      title: 'React API Integration',
      desc: 'Connect React applications with REST APIs, GraphQL services, authentication systems, payment services and third-party platforms.',
    },
    {
      icon: <Smartphone size={20} />,
      color: 'cyan',
      title: 'Responsive React Development',
      desc: 'Responsive React interfaces optimized for desktop, tablet and mobile screens with layouts adapted to different devices.',
    },
  ];

  const services = [
    {
      icon: <Code2 size={18} />,
      title: 'Custom React Development',
      desc: 'Custom React development services for products requiring purpose-built frontend functionality, business workflows, APIs and reusable interface architecture.',
    },
    {
      icon: <Monitor size={18} />,
      title: 'React Website Development',
      desc: 'React website development for businesses that need responsive interfaces, dynamic content, reusable sections and backend integrations.',
    },
    {
      icon: <Workflow size={18} />,
      title: 'Single-Page Applications',
      desc: 'React SPA development with client-side routing, dynamic data, reusable components, authentication and application-style user experiences.',
    },
    {
      icon: <Users size={18} />,
      title: 'React Portal Development',
      desc: 'Customer, employee, partner and internal business portals with role-based interfaces and secure data access.',
    },
    {
      icon: <Layers size={18} />,
      title: 'React Component Development',
      desc: 'Reusable React components and design systems designed to improve interface consistency and simplify ongoing frontend development.',
    },
    {
      icon: <Rocket size={18} />,
      title: 'React MVP Development',
      desc: 'Focused React frontend development for startup MVPs with essential workflows, API integration and room for future product growth.',
    },
  ];

  const whyReact = [
    {
      icon: <Boxes size={15} />,
      title: 'Component-Based Architecture',
      desc: 'Reusable React components help maintain interface consistency and reduce duplicated frontend code.',
    },
    {
      icon: <Zap size={15} />,
      title: 'Interactive User Interfaces',
      desc: 'React works well for dynamic applications, dashboards, forms, workflows and frequently changing interface states.',
    },
    {
      icon: <Code2 size={15} />,
      title: 'TypeScript-Friendly',
      desc: 'React works effectively with TypeScript for typed components, application models and clearer frontend-to-backend contracts.',
    },
    {
      icon: <Database size={15} />,
      title: 'Modern Data Management',
      desc: 'Server data, caching, mutations and client state can be organized using tools such as TanStack Query, Zustand and Redux Toolkit.',
    },
    {
      icon: <Gauge size={15} />,
      title: 'Performance Optimization',
      desc: 'Code splitting, lazy loading, efficient rendering and asset optimization can help keep React applications responsive.',
    },
    {
      icon: <Globe size={15} />,
      title: 'Broad Development Ecosystem',
      desc: 'React integrates with a wide range of APIs, backend technologies, UI systems, testing tools and deployment platforms.',
    },
  ];

  const qualityAreas = [
    {
      icon: <Gauge size={17} />,
      title: 'React Performance',
      desc: 'Bundle analysis, lazy loading, code splitting, rendering optimization and asset optimization based on application requirements.',
    },
    {
      icon: <Accessibility size={17} />,
      title: 'Accessibility',
      desc: 'Semantic HTML, keyboard-friendly interactions, focus handling and accessible component patterns where applicable.',
    },
    {
      icon: <TestTube2 size={17} />,
      title: 'React Testing',
      desc: 'Unit, component and end-to-end testing strategies for important application behavior and business workflows.',
    },
    {
      icon: <Shield size={17} />,
      title: 'Frontend Security',
      desc: 'Careful handling of authentication state, user input, API communication, environment configuration and frontend data.',
    },
    {
      icon: <Boxes size={17} />,
      title: 'Maintainable Code',
      desc: 'Reusable components, clear project structure and consistent coding patterns for ongoing React development.',
    },
    {
      icon: <RefreshCw size={17} />,
      title: 'Scalable Architecture',
      desc: 'Frontend architecture organized so new screens, features and integrations can be introduced without unnecessary duplication.',
    },
  ];

  const process = [
    {
      n: '01',
      title: 'React Project Discovery',
      desc: 'We review product requirements, target users, frontend functionality, existing systems, APIs and business workflows.',
    },
    {
      n: '02',
      title: 'Frontend Architecture & UI Planning',
      desc: 'Application structure, routing, reusable components, state management and integration requirements are planned.',
    },
    {
      n: '03',
      title: 'React UI Development',
      desc: 'Application screens and workflows are developed using reusable React components and responsive layouts.',
    },
    {
      n: '04',
      title: 'API & Backend Integration',
      desc: 'React features are connected to REST or GraphQL APIs with authentication, validation, loading states and error handling.',
    },
    {
      n: '05',
      title: 'Testing & Optimization',
      desc: 'Important workflows are reviewed for functionality, responsive behavior, accessibility and frontend performance.',
    },
    {
      n: '06',
      title: 'Application Deployment',
      desc: 'The application is prepared for production deployment, environment configuration and source-code handover.',
    },
  ];

  const faqs = [
    {
      q: 'What React development services does DevZore provide?',
      a: 'DevZore provides React development services for custom web applications, React websites, SaaS frontends, dashboards, admin panels, customer portals, eCommerce interfaces, component systems, API integrations and existing React application improvements.',
    },
    {
      q: 'Why hire a React development company?',
      a: 'A React development company can handle frontend architecture, reusable components, API integration, responsive UI, application state, testing and deployment as part of one structured development workflow.',
    },
    {
      q: 'Can I hire a React developer from DevZore?',
      a: 'Yes. DevZore provides React development for complete projects, individual product features and ongoing frontend requirements. Share your project scope and expected deliverables to discuss the appropriate development approach.',
    },
    {
      q: 'What is React.js development?',
      a: 'React.js development is the process of building component-based web interfaces using React. It can be used for websites, single-page applications, dashboards, SaaS products, portals and interactive web applications.',
    },
    {
      q: 'Do you provide custom React development?',
      a: 'Yes. DevZore provides custom React development based on the workflows, interface requirements, backend systems and integrations of each product rather than relying on a fixed template.',
    },
    {
      q: 'Can you build a React web application?',
      a: 'Yes. We build React web applications with reusable components, routing, forms, authentication, dashboards, API integrations, responsive layouts and application-specific functionality.',
    },
    {
      q: 'Do you provide React website development?',
      a: 'Yes. React can be used to develop responsive business websites and interactive web experiences. Depending on SEO and content requirements, React may also be combined with frameworks such as Next.js.',
    },
    {
      q: 'Can you build a React admin dashboard?',
      a: 'Yes. React dashboard development can include data tables, charts, filters, forms, authentication, permissions, reporting interfaces and API-driven business data.',
    },
    {
      q: 'Can React be used for SaaS development?',
      a: 'Yes. React is suitable for SaaS frontend development including onboarding, account settings, subscription interfaces, team management, dashboards and other interactive software workflows.',
    },
    {
      q: 'Do you provide React eCommerce development?',
      a: 'Yes. React eCommerce development can include product catalogs, category pages, filtering, search, carts, customer accounts and integration with backend and payment systems.',
    },
    {
      q: 'What is the difference between React and Next.js?',
      a: 'React is a JavaScript library for building component-based interfaces. Next.js is a React framework that provides additional features such as routing and multiple rendering approaches.',
    },
    {
      q: 'Do you use TypeScript with React?',
      a: 'Yes. TypeScript can be used with React to provide typed components, application models and clearer contracts between frontend code and backend APIs.',
    },
    {
      q: 'Can you connect React to an existing backend API?',
      a: 'Yes. React applications can integrate with REST or GraphQL APIs including authentication, forms, data fetching, caching, loading states, validation and error handling.',
    },
    {
      q: 'Can React work with Node.js, Express and MongoDB?',
      a: 'Yes. React is commonly used as the frontend of MERN applications, with Node.js and Express handling backend APIs and MongoDB storing application data.',
    },
    {
      q: 'Can you improve an existing React application?',
      a: 'Yes. Existing React applications can be reviewed for component refactoring, TypeScript adoption, state-management improvements, routing changes, API integration and performance improvements.',
    },
    {
      q: 'Do you provide React migration services?',
      a: 'Yes. Depending on the existing system, frontend applications can be migrated or progressively modernized using React, reusable components, hooks and TypeScript.',
    },
    {
      q: 'How do you optimize React application performance?',
      a: 'React performance optimization may include reducing unnecessary renders, lazy loading, code splitting, bundle analysis, asset optimization, caching and reviewing third-party dependencies.',
    },
    {
      q: 'Do you test React applications?',
      a: 'Testing can include unit tests, component tests and end-to-end tests for important application workflows depending on project requirements.',
    },
    {
      q: 'How much does React development cost?',
      a: 'React development cost depends on the number of screens, UI complexity, backend and API requirements, authentication, integrations, testing and other product functionality. A project-specific estimate can be prepared after reviewing the scope.',
    },
    {
      q: 'How long does React application development take?',
      a: 'The timeline depends on product scope, number of screens, feature complexity, API readiness, integrations, design requirements and testing.',
    },
    {
      q: 'Do you provide React source code?',
      a: 'Source-code ownership and handover terms can be defined in the project agreement. Custom development deliverables can include the agreed React source code and relevant documentation.',
    },
    {
      q: 'Do you provide React development services worldwide?',
      a: 'DevZore provides remote React development services for startups, founders and businesses that can work with our development process regardless of location.',
    },
  ];

  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 5);

  const relatedServices = [
    {
      title: 'MERN Stack Development',
      description:
        'Full-stack MongoDB, Express, React and Node.js development for modern web applications and SaaS products.',
      path: '/mern-stack-development',
      icon: <Layers size={25} />,
    },
    {
      title: 'Backend & API Development',
      description:
        'Backend systems, REST APIs, GraphQL services, databases and integrations for React applications.',
      path: '/backend-api',
      icon: <Server size={25} />,
    },
    {
      title: 'SaaS Product Development',
      description:
        'Custom SaaS applications with React dashboards, authentication, subscriptions, APIs and scalable product architecture.',
      path: '/saas-product-development',
      icon: <Rocket size={25} />,
    },
  ];

  const colorMap = {
    purple: d
      ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
      : 'bg-purple-50 border-purple-100 text-purple-600',
    blue: d
      ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
      : 'bg-blue-50 border-blue-100 text-blue-600',
    green: d
      ? 'bg-green-500/10 border-green-500/20 text-green-400'
      : 'bg-green-50 border-green-100 text-green-600',
    orange: d
      ? 'bg-orange-500/10 border-orange-500/20 text-orange-400'
      : 'bg-orange-50 border-orange-100 text-orange-600',
    indigo: d
      ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
      : 'bg-indigo-50 border-indigo-100 text-indigo-600',
    cyan: d
      ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
      : 'bg-cyan-50 border-cyan-100 text-cyan-600',
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://devzore.com/reactdevelopment#service',
    name: 'React Development Services',
    url: 'https://devzore.com/reactdevelopment',
    description:
      'Custom React development services for web applications, websites, SaaS frontends, dashboards, admin portals, eCommerce interfaces, UI development, API integration and application modernization.',
    serviceType: 'React Development',
    provider: {
      '@id': 'https://devzore.com/#organization',
    },
    areaServed: 'Worldwide',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://devzore.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://devzore.com/allservices',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'React Development',
        item: 'https://devzore.com/reactdevelopment',
      },
    ],
  };

  const CtaStrip = ({ heading, sub }) => (
    <div
      className={`py-7 px-6 rounded-2xl border text-center ${
        d
          ? 'bg-purple-600/5 border-purple-500/15'
          : 'bg-purple-50 border-purple-100'
      }`}
    >
      <h3
        className={`text-xl font-black mb-1.5 ${
          d ? 'text-white' : 'text-gray-900'
        }`}
      >
        {heading}
      </h3>

      <p
        className={`text-sm mb-4 ${
          d ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        {sub}
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          to="/contact"
          className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all"
        >
          Discuss Your React Project
          <ArrowRight size={14} />
        </Link>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
        >
          WhatsApp
        </a>

        <Link
          to="/allservices"
          className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl text-sm border transition-all ${
            d
              ? 'border-white/10 text-gray-300 hover:bg-white/[0.04]'
              : 'border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          All Services
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );

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

      <main
        className={`min-h-screen transition-colors duration-300 ${
          d ? 'bg-[#030303]' : 'bg-white'
        }`}
      >
        {/* HERO */}
        <section
          aria-labelledby="react-heading"
          className={`pt-24 pb-9 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-9 items-center">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${
                      d
                        ? 'bg-purple-600/10 border-purple-500/20 text-purple-400'
                        : 'bg-purple-50 border-purple-200 text-purple-700'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    React Development Services
                  </div>

                  <div
                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold border ${
                      d
                        ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                        : 'bg-blue-50 border-blue-200 text-blue-700'
                    }`}
                  >
                    <Globe size={10} />
                    Available Worldwide
                  </div>
                </div>

                <h1
                  id="react-heading"
                  className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 ${
                    d ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  React Development Company for{' '}
                  <span className="text-purple-600">
                    Modern Web Applications
                  </span>
                </h1>

                <p
                  className={`text-lg font-semibold mb-3 ${
                    d ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  React.js · TypeScript · SaaS Frontends · Dashboards ·
                  eCommerce · API Integration
                </p>

                <p
                  className={`text-base leading-relaxed mb-3 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  DevZore is a React development company providing custom React
                  development services for startups and businesses. We build
                  React web applications, business websites, SaaS interfaces,
                  dashboards, admin portals, eCommerce interfaces and custom
                  frontend systems.
                </p>

                <p
                  className={`text-base leading-relaxed mb-5 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Our React developers use React.js, TypeScript and modern
                  frontend tools to create responsive, reusable and
                  maintainable applications connected to APIs, authentication
                  systems, databases and third-party services.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all"
                  >
                    Discuss Your React Project
                    <ArrowRight size={14} />
                  </Link>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
                  >
                    WhatsApp
                  </a>

                  <Link
                    to="/allservices"
                    className={`flex items-center gap-2 px-5 py-3 font-bold rounded-xl text-sm border ${
                      d
                        ? 'border-white/10 text-gray-300'
                        : 'border-gray-200 text-gray-700'
                    }`}
                  >
                    View All Services
                  </Link>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    'React.js',
                    'TypeScript',
                    'React Frontend',
                    'API Integration',
                    'Responsive UI',
                    'SaaS Development',
                  ].map((item) => (
                    <span
                      key={item}
                      className={`px-3 py-1.5 rounded-lg border text-[11px] font-semibold ${
                        d
                          ? 'border-white/[0.08] bg-white/[0.03] text-gray-400'
                          : 'border-gray-200 bg-gray-50 text-gray-600'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT PANEL */}
              <div
                className={`p-7 rounded-3xl border ${
                  d
                    ? 'bg-white/[0.02] border-white/[0.06]'
                    : 'bg-[#fafafa] border-gray-200'
                }`}
              >
                <p
                  className={`text-[11px] font-black uppercase tracking-widest mb-4 ${
                    d ? 'text-gray-500' : 'text-gray-400'
                  }`}
                >
                  React Development Capabilities
                </p>

                <div className="space-y-3">
                  {[
                    {
                      title: 'React.js & TypeScript',
                      desc: 'Reusable components and typed frontend architecture',
                    },
                    {
                      title: 'React Web Applications',
                      desc: 'Custom business applications and interactive products',
                    },
                    {
                      title: 'React SaaS Frontends',
                      desc: 'Dashboards, onboarding and account workflows',
                    },
                    {
                      title: 'React Dashboard Development',
                      desc: 'Data-driven admin panels and reporting interfaces',
                    },
                    {
                      title: 'REST & GraphQL Integration',
                      desc: 'API communication with loading and error handling',
                    },
                    {
                      title: 'State Management',
                      desc: 'Server and client state organized for product requirements',
                    },
                    {
                      title: 'Responsive React UI',
                      desc: 'Desktop, tablet and mobile-friendly interfaces',
                    },
                    {
                      title: 'Performance Optimization',
                      desc: 'Lazy loading, code splitting and rendering review',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className={`flex items-start gap-3 pb-2.5 border-b last:border-0 ${
                        d ? 'border-white/[0.05]' : 'border-gray-100'
                      }`}
                    >
                      <CheckCircle
                        size={13}
                        className="text-purple-500 flex-shrink-0 mt-0.5"
                      />

                      <div>
                        <p
                          className={`text-[12px] font-bold ${
                            d ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {item.title}
                        </p>

                        <p className="text-[11px] text-gray-500">
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

        {/* QUICK CTA */}
        <div
          className={`py-5 border-b ${
            d
              ? 'border-white/[0.06] bg-purple-600/5'
              : 'border-gray-100 bg-purple-50'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p
                className={`font-black text-base ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Looking for a React developer?
              </p>

              <p
                className={`text-sm ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Share your frontend, API and product requirements with DevZore.
              </p>
            </div>

            <Link
              to="/contact"
              className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm"
            >
              Discuss Project
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* WHAT WE BUILD */}
        <section
          aria-labelledby="whatwebuild-heading"
          className={`py-11 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-7">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                React Development Solutions
              </p>

              <h2
                id="whatwebuild-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                React Applications We Build
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Our React development services cover custom web applications,
                SaaS frontends, dashboards, eCommerce interfaces, business
                portals, responsive UI development and application
                modernization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whatWeBuild.map((item) => (
                <article
                  key={item.title}
                  className={`p-5 rounded-2xl border transition-all hover:border-purple-500/25 ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-white border-gray-200'
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
                    className={`text-[14px] font-bold mb-1.5 ${
                      d ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-[13px] leading-relaxed ${
                      d ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CUSTOM SERVICES */}
        <section
          aria-labelledby="services-heading"
          className={`py-11 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-7">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                Custom React Development
              </p>

              <h2
                id="services-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                React Development Services for Custom Digital Products
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                From new React applications to existing frontend
                modernization, DevZore works across UI development,
                architecture, API integration and product workflows.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((item) => (
                <div
                  key={item.title}
                  className={`p-5 rounded-2xl border ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-[#fafafa] border-gray-200'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${
                      d
                        ? 'bg-purple-500/10 text-purple-400'
                        : 'bg-purple-50 text-purple-600'
                    }`}
                  >
                    {item.icon}
                  </div>

                  <h3
                    className={`text-[14px] font-bold mb-1.5 ${
                      d ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-[13px] leading-relaxed ${
                      d ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY REACT */}
        <section
          aria-labelledby="why-heading"
          className={`py-11 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-7">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                React.js Development
              </p>

              <h2
                id="why-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Why Use React for Web Application Development?
              </h2>

              <p
                className={`text-base ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                React provides a flexible component model for building
                interactive frontend applications and integrates with a broad
                ecosystem of APIs, backend technologies and UI systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-7">
              {whyReact.map((item) => (
                <div
                  key={item.title}
                  className={`p-5 rounded-2xl border ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-3 ${
                      d
                        ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                        : 'bg-purple-50 border-purple-100 text-purple-600'
                    }`}
                  >
                    {item.icon}
                  </div>

                  <h3
                    className={`text-[14px] font-bold mb-1.5 ${
                      d ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-[13px] leading-relaxed ${
                      d ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <CtaStrip
              heading="Need custom React development?"
              sub="Share your application requirements and we can discuss the frontend architecture and integrations."
            />
          </div>
        </section>

        {/* REACT EXPERTISE */}
        <section
          aria-labelledby="expertise-heading"
          className={`py-11 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-7 items-start">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                  React Frontend Development
                </p>

                <h2
                  id="expertise-heading"
                  className={`text-3xl font-black mb-3 ${
                    d ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  React Frontend Development for Websites, SaaS & Web Apps
                </h2>

                <p
                  className={`text-sm leading-7 mb-3 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  DevZore provides React frontend development for interactive
                  websites, web applications, SaaS products, dashboards,
                  portals and eCommerce interfaces.
                </p>

                <p
                  className={`text-sm leading-7 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  React.js can be combined with TypeScript, Tailwind CSS,
                  React Router, Node.js, Express, MongoDB and third-party APIs
                  according to the architecture of your application.
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border ${
                  d
                    ? 'bg-white/[0.02] border-white/[0.06]'
                    : 'bg-[#fafafa] border-gray-200'
                }`}
              >
                <p
                  className={`text-[12px] font-black uppercase tracking-widest mb-4 ${
                    d ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  React Development Expertise
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    'React Development',
                    'React Development Services',
                    'React Web Development',
                    'React Website Development',
                    'React Application Development',
                    'React App Development',
                    'React Frontend Development',
                    'React.js Development',
                    'React JS Development',
                    'Custom React Development',
                    'React UI Development',
                    'React Dashboard Development',
                    'React SaaS Development',
                    'React eCommerce Development',
                    'React API Integration',
                    'React SPA Development',
                    'React TypeScript Development',
                    'React Component Development',
                    'React Migration',
                    'React Performance Optimization',
                  ].map((item) => (
                    <span
                      key={item}
                      className={`px-3 py-2 rounded-lg border text-[11px] font-semibold ${
                        d
                          ? 'bg-white/[0.03] border-white/[0.08] text-gray-300'
                          : 'bg-white border-gray-200 text-gray-700'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUALITY */}
        <section
          aria-labelledby="quality-heading"
          className={`py-11 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-7">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                Frontend Engineering
              </p>

              <h2
                id="quality-heading"
                className={`text-3xl font-black mb-2 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                React Development Quality Areas
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Architecture, accessibility, testing, performance and
                maintainability all affect the long-term quality of a React
                application.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {qualityAreas.map((item) => (
                <div
                  key={item.title}
                  className={`p-5 rounded-2xl border ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${
                      d
                        ? 'bg-purple-500/10 text-purple-400'
                        : 'bg-purple-50 text-purple-600'
                    }`}
                  >
                    {item.icon}
                  </div>

                  <h3
                    className={`text-[14px] font-bold mb-1.5 ${
                      d ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-[13px] leading-relaxed ${
                      d ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section
          aria-labelledby="process-heading"
          className={`py-11 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-7">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                Development Process
              </p>

              <h2
                id="process-heading"
                className={`text-3xl font-black mb-2 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Our React Development Process
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                A structured workflow from requirements and frontend
                architecture through development, API integration, testing and
                deployment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-7">
              {process.map((step) => (
                <div
                  key={step.n}
                  className={`p-5 rounded-2xl border ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-[#fafafa] border-gray-200'
                  }`}
                >
                  <div
                    className={`text-[13px] font-black mb-2 ${
                      d ? 'text-purple-400' : 'text-purple-600'
                    }`}
                  >
                    {step.n}
                  </div>

                  <h3
                    className={`text-[14px] font-bold mb-1.5 ${
                      d ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-[13px] leading-relaxed ${
                      d ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <CtaStrip
              heading="Have an existing React application?"
              sub="We can discuss frontend improvements, API integration, migration, refactoring and modernization."
            />
          </div>
        </section>

        {/* FAQ */}
        <section
          aria-labelledby="faq-heading"
          className={`py-11 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-7">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                Questions & Answers
              </p>

              <h2
                id="faq-heading"
                className={`text-3xl font-black mb-2 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                React Development FAQ
              </h2>

              <p
                className={`text-base ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Common questions about React development, developers,
                applications, integrations and project delivery.
              </p>
            </div>

            <div className="space-y-2.5">
              {visibleFaqs.map((faq, index) => {
                const isOpen = activeFaq === index;

                return (
                  <div
                    key={faq.q}
                    className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? d
                          ? 'border-purple-500/40 bg-purple-600/5'
                          : 'border-purple-200 bg-purple-50/50'
                        : d
                        ? 'border-white/[0.06] bg-white/[0.02]'
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveFaq(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`react-faq-${index}`}
                      className="w-full px-5 py-4 text-left flex items-start justify-between gap-4"
                    >
                      <span
                        className={`text-[14px] font-bold ${
                          isOpen
                            ? 'text-purple-500'
                            : d
                            ? 'text-white'
                            : 'text-gray-900'
                        }`}
                      >
                        {faq.q}
                      </span>

                      <div
                        className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center ${
                          isOpen
                            ? 'bg-purple-600 text-white'
                            : d
                            ? 'bg-white/[0.06] text-gray-500'
                            : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        {isOpen ? (
                          <Minus size={13} />
                        ) : (
                          <Plus size={13} />
                        )}
                      </div>
                    </button>

                    <div
                      id={`react-faq-${index}`}
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? 'max-h-[600px] opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div
                        className={`px-5 pb-4 border-t text-[14px] leading-relaxed ${
                          d
                            ? 'border-white/[0.06] text-gray-400'
                            : 'border-purple-100 text-gray-600'
                        }`}
                      >
                        <p className="pt-3">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* SHOW MORE / SHOW LESS */}
            {faqs.length > 5 && (
              <div className="flex justify-center mt-5">
                <button
                  type="button"
                  onClick={() => {
                    setShowAllFaqs((prev) => !prev);
                    setActiveFaq(null);
                  }}
                  aria-expanded={showAllFaqs}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-bold transition-all ${
                    d
                      ? 'border-purple-500/25 bg-purple-500/[0.07] text-purple-400 hover:bg-purple-500/[0.12]'
                      : 'border-purple-200 bg-purple-50 text-purple-700 hover:bg-purple-100'
                  }`}
                >
                  {showAllFaqs ? (
                    <>
                      Show Less
                      <ChevronUp size={15} />
                    </>
                  ) : (
                    <>
                      Show More FAQs
                      <ChevronDown size={15} />
                    </>
                  )}
                </button>
              </div>
            )}

            <div className="mt-7">
              <CtaStrip
                heading="Have a question about your React project?"
                sub="Share your requirements and we can discuss the frontend architecture, integrations and next steps."
              />
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section
          aria-labelledby="related-services-heading"
          className={`py-11 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                Explore More
              </p>

              <h2
                id="related-services-heading"
                className={`text-2xl md:text-3xl font-black ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Related Development Services
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {relatedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className={`group p-6 rounded-2xl border transition-all duration-300 ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.07] hover:border-purple-500/30'
                      : 'bg-[#fafafa] border-gray-200 hover:border-purple-200'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      d
                        ? 'bg-purple-500/10 text-purple-400'
                        : 'bg-purple-50 text-purple-600'
                    }`}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className={`text-lg font-black mb-2 ${
                      d ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-[13px] leading-6 mb-4 ${
                      d ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {service.description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-sm font-bold text-purple-500">
                    Learn More
                    <ArrowRight size={15} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-11">
          <div className="max-w-4xl mx-auto px-6">
            <div
              className={`p-8 md:p-9 rounded-3xl border text-center ${
                d
                  ? 'bg-white/[0.02] border-white/[0.06]'
                  : 'bg-[#fafafa] border-gray-200'
              }`}
            >
              <div
                className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4 ${
                  d
                    ? 'bg-purple-500/10 text-purple-400'
                    : 'bg-purple-50 text-purple-600'
                }`}
              >
                <Code2 size={23} />
              </div>

              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                React Development Agency
              </p>

              <h2
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Ready to Build Your React Application?
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto leading-relaxed mb-6 ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Discuss your React website, custom web application, SaaS
                frontend, dashboard, eCommerce interface or API integration
                requirements with DevZore.
              </p>

              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-7 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all"
                >
                  Discuss Your React Project
                  <ArrowRight size={15} />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-7 py-3.5 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
                >
                  WhatsApp
                </a>

                <Link
                  to="/allservices"
                  className={`flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl text-sm border ${
                    d
                      ? 'border-white/10 text-gray-300'
                      : 'border-gray-200 text-gray-700'
                  }`}
                >
                  View All Services
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ReactDevelopment;