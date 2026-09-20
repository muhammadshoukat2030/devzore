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
} from 'lucide-react';

const ReactDevelopment = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  const whatWeBuild = [
    {
      icon: <Monitor size={20} />,
      color: 'purple',
      title: 'Single-Page Applications',
      desc: 'Modern React single-page applications with client-side routing, reusable components, responsive interfaces and efficient data handling.',
    },
    {
      icon: <BarChart3 size={20} />,
      color: 'blue',
      title: 'Admin Dashboards & Portals',
      desc: 'React dashboards, admin panels and business portals with data tables, charts, forms, filters, authentication and role-based interfaces.',
    },
    {
      icon: <Layers size={20} />,
      color: 'green',
      title: 'Component Libraries & Design Systems',
      desc: 'Reusable React component systems with consistent design patterns, TypeScript interfaces, accessible UI elements and maintainable styling.',
    },
    {
      icon: <RefreshCw size={20} />,
      color: 'orange',
      title: 'React & Next.js Applications',
      desc: 'React and Next.js applications using suitable rendering strategies for interactive interfaces, content-driven pages and modern web products.',
    },
    {
      icon: <TrendingUp size={20} />,
      color: 'indigo',
      title: 'SaaS Frontend Development',
      desc: 'React interfaces for SaaS products including onboarding, account management, subscription screens, dashboards and application workflows.',
    },
    {
      icon: <Code2 size={20} />,
      color: 'cyan',
      title: 'React Migration & Refactoring',
      desc: 'Modernisation of existing frontend codebases using React hooks, TypeScript, improved component architecture and current development practices.',
    },
  ];

  const whyReact = [
    {
      icon: <Boxes size={15} />,
      title: 'Component-Based Architecture',
      desc: 'React encourages interfaces to be divided into reusable components, helping teams maintain consistency and reduce duplicated frontend code.',
    },
    {
      icon: <Zap size={15} />,
      title: 'Interactive User Interfaces',
      desc: 'React is well suited to applications with dynamic data, interactive workflows, dashboards, forms and frequently changing interface states.',
    },
    {
      icon: <Code2 size={15} />,
      title: 'TypeScript-Friendly Development',
      desc: 'React works well with TypeScript for typed component props, application models and safer communication between frontend and backend systems.',
    },
    {
      icon: <Database size={15} />,
      title: 'Modern Data Management',
      desc: 'Server data, caching, mutations and application state can be organised using tools such as TanStack Query and lightweight state management libraries.',
    },
    {
      icon: <Gauge size={15} />,
      title: 'Performance Optimisation',
      desc: 'Code splitting, lazy loading, efficient rendering and asset optimisation can help keep React applications responsive as functionality grows.',
    },
    {
      icon: <Globe size={15} />,
      title: 'Broad Web Ecosystem',
      desc: 'React integrates with a wide range of APIs, backend technologies, design systems, testing tools and deployment platforms.',
    },
  ];

  const qualityAreas = [
    {
      icon: <Gauge size={17} />,
      title: 'Performance',
      desc: 'Bundle analysis, lazy loading, code splitting and asset optimisation based on the requirements of the application.',
    },
    {
      icon: <Accessibility size={17} />,
      title: 'Accessibility',
      desc: 'Semantic HTML, keyboard-friendly interactions, focus handling and accessible component patterns where applicable.',
    },
    {
      icon: <TestTube2 size={17} />,
      title: 'Testing',
      desc: 'Testing strategies can include unit, component and end-to-end tests for important application behaviour and business flows.',
    },
    {
      icon: <Shield size={17} />,
      title: 'Frontend Security',
      desc: 'Careful handling of authentication state, user input, API communication and environment configuration.',
    },
    {
      icon: <Boxes size={17} />,
      title: 'Maintainability',
      desc: 'Reusable components, clear project structure and consistent coding patterns designed to make future development easier.',
    },
    {
      icon: <RefreshCw size={17} />,
      title: 'Scalable Development',
      desc: 'Frontend architecture organised so new screens, workflows and integrations can be introduced without unnecessary duplication.',
    },
  ];

  const techStack = [
    {
      category: 'React Development',
      items: ['React', 'TypeScript', 'React Hooks', 'Context API'],
    },
    {
      category: 'Data & State',
      items: ['TanStack Query', 'Zustand', 'Redux Toolkit', 'React Hook Form'],
    },
    {
      category: 'Routing & Frameworks',
      items: ['React Router', 'Next.js', 'Vite'],
    },
    {
      category: 'UI & Styling',
      items: ['Tailwind CSS', 'shadcn/ui', 'Radix UI', 'CSS Modules'],
    },
    {
      category: 'Testing',
      items: ['Vitest', 'React Testing Library', 'Playwright', 'Storybook'],
    },
    {
      category: 'Development Tools',
      items: ['Git', 'GitHub', 'ESLint', 'Prettier', 'CI/CD'],
    },
  ];

  const process = [
    {
      n: '01',
      title: 'Requirements & Frontend Architecture',
      desc: 'We review the product requirements, user flows, API requirements and interface structure before organising the React application.',
    },
    {
      n: '02',
      title: 'UI Foundation & Components',
      desc: 'Reusable components, layout patterns, responsive behaviour, typography and interface styles are established for consistency.',
    },
    {
      n: '03',
      title: 'React Feature Development',
      desc: 'Application screens and user workflows are developed with reusable React components and appropriate state management.',
    },
    {
      n: '04',
      title: 'API & Data Integration',
      desc: 'Frontend features are connected to REST or GraphQL APIs with loading states, validation, error handling and data synchronisation.',
    },
    {
      n: '05',
      title: 'Testing & Optimisation',
      desc: 'Important user flows are reviewed for functionality, responsiveness, accessibility and frontend performance.',
    },
    {
      n: '06',
      title: 'Deployment & Handover',
      desc: 'The application is prepared for production deployment with project documentation and source-code handover based on the agreed scope.',
    },
  ];

  const faqs = [
    {
      q: 'What React development services does DevZore provide?',
      a: 'DevZore provides React development for single-page applications, SaaS interfaces, dashboards, admin portals, business web applications, component systems and existing React application improvements.',
    },
    {
      q: 'What is the difference between React and Next.js?',
      a: 'React is a JavaScript library for building component-based user interfaces. Next.js is a framework built around React that adds features such as routing and server-side rendering options. The appropriate choice depends on the product requirements, content strategy and application architecture.',
    },
    {
      q: 'Do you use TypeScript with React?',
      a: 'TypeScript is commonly used in our React development because it can improve code clarity and help identify certain integration and component errors during development. The exact setup depends on the existing codebase and project requirements.',
    },
    {
      q: 'Can you build a React admin dashboard?',
      a: 'Yes. React can be used for admin dashboards and internal portals with tables, charts, filters, forms, authentication, permissions and API-driven data.',
    },
    {
      q: 'Can React be used for SaaS frontend development?',
      a: 'Yes. React is suitable for SaaS interfaces including onboarding flows, account settings, dashboards, subscription screens, team management and other interactive product workflows.',
    },
    {
      q: 'Can you connect a React frontend to an existing backend API?',
      a: 'Yes. React applications can be integrated with existing REST or GraphQL APIs. Integration work can include authentication, forms, data fetching, caching, loading states, validation and error handling.',
    },
    {
      q: 'Can you improve or modernise an existing React application?',
      a: 'Yes. Existing React projects can be reviewed and improved through component refactoring, TypeScript adoption, state-management changes, routing updates, performance work and dependency modernisation where appropriate.',
    },
    {
      q: 'Do you test React applications?',
      a: 'Testing can be included based on the project requirements. Depending on the application, this may include unit tests, component tests and end-to-end tests for important user journeys and business logic.',
    },
    {
      q: 'How do you improve React application performance?',
      a: 'Performance work may include reducing unnecessary rendering, lazy loading, code splitting, asset optimisation, bundle analysis, caching strategies and reviewing third-party dependencies. The appropriate optimisation depends on the application and measured bottlenecks.',
    },
    {
      q: 'How long does React development take?',
      a: 'The development timeline depends on the number of screens, feature complexity, API requirements, integrations, design readiness and testing requirements. After reviewing the scope, a project-specific development plan and estimate can be prepared.',
    },
    {
      q: 'Do you provide the React source code?',
      a: 'Source-code ownership and handover can be defined clearly in the project agreement. For custom development projects, the agreed deliverables can include the application source code and relevant project documentation.',
    },
    {
      q: 'Can React work with Node.js, Express and MongoDB?',
      a: 'Yes. React is commonly used as the frontend of MERN applications, with Node.js and Express handling backend APIs and MongoDB handling application data.',
    },
  ];

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
        'Custom SaaS applications with dashboards, authentication, subscriptions and scalable product architecture.',
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

  const whatsappUrl =
    'https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20a%20React%20development%20project.';

  const CtaStrip = ({ heading, sub }) => (
    <div
      className={`py-10 px-8 rounded-3xl border text-center ${
        d
          ? 'bg-purple-600/5 border-purple-500/15'
          : 'bg-purple-50 border-purple-100'
      }`}
    >
      <h3
        className={`text-xl font-black mb-2 ${
          d ? 'text-white' : 'text-gray-900'
        }`}
      >
        {heading}
      </h3>

      <p
        className={`text-sm mb-6 ${
          d ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        {sub}
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          to="/contact"
          className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
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
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z" />
          </svg>

          WhatsApp
        </a>

        <Link
          to="/allservices"
          className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl text-sm border transition-all ${
            d
              ? 'border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]'
              : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
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
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': 'https://devzore.com/reactdevelopment#service',
            name: 'React Development Services',
            description:
              'React development services for web applications, SaaS frontends, dashboards, admin portals, component systems and existing React application improvements.',
            url: 'https://devzore.com/reactdevelopment',
            provider: {
              '@id': 'https://devzore.com/#organization',
            },
            serviceType: 'React Development',
            areaServed: 'Worldwide',
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
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
                name: 'All Services',
                item: 'https://devzore.com/allservices',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'React Development',
                item: 'https://devzore.com/reactdevelopment',
              },
            ],
          })}
        </script>
      </Helmet>

      <div
        className={`min-h-screen transition-colors duration-300 ${
          d ? 'bg-[#030303]' : 'bg-white'
        }`}
      >
        {/* HERO */}
        <section
          aria-labelledby="react-heading"
          className={`pt-28 pb-12 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${
                      d
                        ? 'bg-purple-600/10 border-purple-500/20 text-purple-400'
                        : 'bg-purple-50 border-purple-200 text-purple-700'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    React Development
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
                  className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5 ${
                    d ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  React Development Services for{' '}
                  <span className="text-purple-600">
                    Modern Web Applications
                  </span>
                </h1>

                <p
                  className={`text-lg font-semibold mb-5 ${
                    d ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  React · TypeScript · Next.js · React Router · TanStack Query ·
                  Tailwind CSS
                </p>

                <p
                  className={`text-base leading-relaxed mb-5 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  DevZore provides React development services for startups and
                  businesses building interactive web applications, SaaS
                  interfaces, admin dashboards, customer portals and modern
                  frontend systems.
                </p>

                <p
                  className={`text-base leading-relaxed mb-8 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  We work with React, TypeScript and modern frontend tools to
                  create responsive, reusable and maintainable interfaces that
                  integrate with APIs, authentication systems, databases and
                  third-party services.
                </p>

                <div className="flex flex-wrap gap-3 mb-5">
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
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
                    className={`flex items-center gap-2 px-5 py-3 font-bold rounded-xl text-sm border transition-all ${
                      d
                        ? 'border-white/10 text-gray-300 hover:bg-white/[0.04]'
                        : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    View All Services
                  </Link>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    'Component-Based',
                    'TypeScript',
                    'API Integration',
                    'Responsive UI',
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
                className={`p-8 rounded-3xl border ${
                  d
                    ? 'bg-white/[0.02] border-white/[0.06]'
                    : 'bg-[#fafafa] border-gray-200'
                }`}
              >
                <p
                  className={`text-[11px] font-black uppercase tracking-widest mb-6 ${
                    d ? 'text-gray-500' : 'text-gray-400'
                  }`}
                >
                  React Development Capabilities
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: 'React & TypeScript',
                      desc: 'Reusable components and typed frontend architecture',
                    },
                    {
                      title: 'API Integration',
                      desc: 'REST and GraphQL integration with loading and error states',
                    },
                    {
                      title: 'State Management',
                      desc: 'Server and client state organised for application requirements',
                    },
                    {
                      title: 'Responsive Interfaces',
                      desc: 'Layouts designed for desktop, tablet and mobile screens',
                    },
                    {
                      title: 'Authentication UI',
                      desc: 'Login, registration, account and permission-based interfaces',
                    },
                    {
                      title: 'Testing',
                      desc: 'Testing strategies for important components and user flows',
                    },
                    {
                      title: 'Performance Optimisation',
                      desc: 'Lazy loading, code splitting and frontend performance review',
                    },
                    {
                      title: 'Deployment Support',
                      desc: 'Production preparation and deployment workflow assistance',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className={`flex items-start gap-3 pb-3 border-b last:border-0 ${
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

                        <p
                          className={`text-[11px] ${
                            d ? 'text-gray-500' : 'text-gray-500'
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

        {/* MID CTA */}
        <div
          className={`py-7 border-b ${
            d
              ? 'border-white/[0.06] bg-purple-600/5'
              : 'border-gray-100 bg-purple-50'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <p
                className={`font-black text-base ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Planning a React web application?
              </p>

              <p
                className={`text-sm ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Tell us about the frontend, API and product requirements.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all"
              >
                Discuss Project
                <ArrowRight size={13} />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] font-bold rounded-xl text-sm"
              >
                WhatsApp
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* WHAT WE BUILD */}
        <section
          aria-labelledby="whatwebuild-heading"
          className={`py-16 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2
                id="whatwebuild-heading"
                className={`text-3xl font-black mb-4 ${
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
                React can support everything from focused business interfaces
                to complex SaaS products. We structure each frontend around the
                actual workflows, data and integration requirements of the
                application.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whatWeBuild.map((item) => (
                <div
                  key={item.title}
                  className={`p-6 rounded-2xl border transition-all hover:border-purple-500/25 ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                      : 'bg-white border-gray-200 hover:shadow-sm'
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
          className={`py-16 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2
                id="why-heading"
                className={`text-3xl font-black mb-4 ${
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
                interactive interfaces and works with a broad ecosystem of
                frontend, backend and deployment technologies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {whyReact.map((item) => (
                <div
                  key={item.title}
                  className={`p-6 rounded-2xl border transition-all hover:border-purple-500/20 ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                      : 'bg-white border-gray-200 hover:shadow-sm'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-4 ${
                      d
                        ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                        : 'bg-purple-50 border-purple-100 text-purple-600'
                    }`}
                  >
                    {item.icon}
                  </div>

                  <h3
                    className={`text-[14px] font-bold mb-2 ${
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
              heading="Need React development for your product?"
              sub="Share your application requirements and we can discuss a suitable frontend approach."
            />
          </div>
        </section>

        {/* QUALITY */}
        <section
          aria-labelledby="quality-heading"
          className={`py-16 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                id="quality-heading"
                className={`text-3xl font-black mb-3 ${
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
                We consider more than visual implementation when developing a
                React application.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {qualityAreas.map((item) => (
                <div
                  key={item.title}
                  className={`p-6 rounded-2xl border ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 ${
                      d
                        ? 'bg-purple-500/10 text-purple-400'
                        : 'bg-purple-50 text-purple-600'
                    }`}
                  >
                    {item.icon}
                  </div>

                  <h3
                    className={`text-[14px] font-bold mb-2 ${
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

        {/* TECH STACK */}
        <section
          aria-labelledby="tech-heading"
          className={`py-16 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                id="tech-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                React Technology Stack
              </h2>

              <p
                className={`text-base ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Technologies can be selected according to the application
                architecture and project requirements.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStack.map((cat) => (
                <div
                  key={cat.category}
                  className={`p-5 rounded-2xl border ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-[#fafafa] border-gray-200'
                  }`}
                >
                  <p className="text-[11px] font-black uppercase tracking-widest mb-3 text-purple-500">
                    {cat.category}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((tech) => (
                      <span
                        key={tech}
                        className={`text-[11px] font-medium px-2.5 py-1 rounded-md border ${
                          d
                            ? 'bg-white/[0.04] border-white/[0.08] text-gray-300'
                            : 'bg-white border-gray-200 text-gray-700'
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

        {/* PROCESS */}
        <section
          aria-labelledby="process-heading"
          className={`py-16 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                id="process-heading"
                className={`text-3xl font-black mb-3 ${
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
                A structured workflow from requirements and component planning
                through development, testing and deployment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {process.map((step) => (
                <div
                  key={step.n}
                  className={`p-6 rounded-2xl border ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div
                    className={`text-[13px] font-black mb-3 ${
                      d ? 'text-purple-400' : 'text-purple-600'
                    }`}
                  >
                    {step.n}
                  </div>

                  <h3
                    className={`text-[14px] font-bold mb-2 ${
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
              sub="We can also discuss frontend improvements, API integration, refactoring and application modernisation."
            />
          </div>
        </section>

        {/* FAQ */}
        <section
          aria-labelledby="faq-heading"
          className={`py-16 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                id="faq-heading"
                className={`text-3xl font-black mb-3 ${
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
                Common questions about React development, integrations,
                performance and project delivery.
              </p>
            </div>

            <div className="space-y-3 mb-12">
              {faqs.map((faq, index) => (
                <div
                  key={faq.q}
                  className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                    activeFaq === index
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
                      setActiveFaq(activeFaq === index ? null : index)
                    }
                    aria-expanded={activeFaq === index}
                    className="w-full p-5 text-left flex items-start justify-between gap-4"
                  >
                    <span
                      className={`text-[14px] font-bold ${
                        activeFaq === index
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
                        activeFaq === index
                          ? 'bg-purple-600 text-white'
                          : d
                          ? 'bg-white/[0.06] text-gray-500'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {activeFaq === index ? (
                        <Minus size={13} />
                      ) : (
                        <Plus size={13} />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeFaq === index
                        ? 'max-h-[500px] opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div
                      className={`px-5 pb-5 pt-0 border-t text-[14px] leading-relaxed ${
                        d
                          ? 'border-white/[0.06] text-gray-400'
                          : 'border-purple-100 text-gray-600'
                      }`}
                    >
                      <p className="pt-4">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <CtaStrip
              heading="Have a question about your React project?"
              sub="Share the requirements and we can discuss the frontend architecture, integrations and next steps."
            />
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section
          aria-labelledby="related-services-heading"
          className={`py-16 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <p
                className={`text-[11px] font-black uppercase tracking-widest mb-2 ${
                  d ? 'text-gray-600' : 'text-gray-400'
                }`}
              >
                Explore More
              </p>

              <h2
                id="related-services-heading"
                className={`text-2xl md:text-3xl font-black ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Related Services
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className={`group p-7 md:p-9 rounded-3xl border transition-all duration-300 ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.07] hover:bg-white/[0.04] hover:border-purple-500/30'
                      : 'bg-white border-gray-200 hover:border-purple-200 hover:shadow-lg'
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:-translate-y-1 ${
                      d
                        ? 'bg-purple-500/10 text-purple-400'
                        : 'bg-purple-50 text-purple-600'
                    }`}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className={`text-xl font-black mb-4 ${
                      d ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-[15px] leading-7 mb-7 ${
                      d ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {service.description}
                  </p>

                  <span className="inline-flex items-center gap-3 text-sm font-bold text-purple-500 group-hover:gap-4 transition-all">
                    Learn More
                    <ArrowRight size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div
              className={`p-10 md:p-12 rounded-3xl border text-center ${
                d
                  ? 'bg-white/[0.02] border-white/[0.06]'
                  : 'bg-[#fafafa] border-gray-200'
              }`}
            >
              <div
                className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-6 ${
                  d
                    ? 'bg-purple-500/10 text-purple-400'
                    : 'bg-purple-50 text-purple-600'
                }`}
              >
                <Code2 size={25} />
              </div>

              <h2
                className={`text-3xl font-black mb-4 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Ready to Build Your React Application?
              </h2>

              <p
                className={`text-base mb-3 max-w-2xl mx-auto leading-relaxed ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Discuss your React frontend, SaaS interface, dashboard,
                application modernisation or API integration requirements with
                DevZore.
              </p>

              <p
                className={`text-[13px] mb-8 ${
                  d ? 'text-gray-600' : 'text-gray-400'
                }`}
              >
                React · TypeScript · Next.js · React Router · TanStack Query ·
                Tailwind CSS
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
                >
                  Discuss Your React Project
                  <ArrowRight size={15} />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
                >
                  WhatsApp
                </a>

                <Link
                  to="/allservices"
                  className={`flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-sm border transition-all ${
                    d
                      ? 'border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  View All Services
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ReactDevelopment;