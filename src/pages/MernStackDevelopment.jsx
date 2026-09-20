import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Database,
  Monitor,
  Server,
  Settings,
  Plus,
  Minus,
  TrendingUp,
  Rocket,
  Globe,
  Code2,
  Shield,
  Layers,
} from 'lucide-react';

const MernStackDevelopment = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  const whatWeBuild = [
    {
      icon: <Monitor size={20} />,
      color: 'purple',
      title: 'MERN Stack Web Applications',
      desc: 'Custom full-stack web applications built with MongoDB, Express.js, React.js and Node.js. We connect frontend interfaces, backend APIs and databases into one maintainable application architecture.',
    },
    {
      icon: <TrendingUp size={20} />,
      color: 'blue',
      title: 'SaaS Platforms with MERN',
      desc: 'MERN-based SaaS applications with authentication, user management, dashboards, subscriptions, role-based access and scalable backend architecture.',
    },
    {
      icon: <Database size={20} />,
      color: 'green',
      title: 'Business Dashboards & Portals',
      desc: 'Admin dashboards, CRM systems, management portals and internal business applications with filtering, reporting, analytics and secure user access.',
    },
    {
      icon: <Server size={20} />,
      color: 'orange',
      title: 'MERN APIs & Backend Systems',
      desc: 'Node.js and Express.js backend development with MongoDB, REST APIs, authentication, integrations, validation and structured application architecture.',
    },
    {
      icon: <Rocket size={20} />,
      color: 'amber',
      title: 'Startup MVP Development',
      desc: 'MERN stack MVP development for startups that need to validate an idea, launch core functionality and create a technical foundation that can evolve with the product.',
    },
    {
      icon: <Settings size={20} />,
      color: 'indigo',
      title: 'MERN Migration & Modernisation',
      desc: 'Modernisation of older web applications into React, Node.js and MongoDB-based solutions with improved interfaces, APIs and maintainable code structure.',
    },
  ];

  const whyMern = [
    {
      title: 'JavaScript Across the Stack',
      desc: 'MERN uses JavaScript across frontend and backend development, helping teams maintain a consistent technology stack throughout the application.',
    },
    {
      title: 'Flexible MongoDB Data Models',
      desc: 'MongoDB supports flexible document-based data structures that work well for many modern web applications and evolving product requirements.',
    },
    {
      title: 'Component-Based React UI',
      desc: 'React makes it possible to create reusable interface components for dashboards, SaaS applications, portals and interactive business software.',
    },
    {
      title: 'Node.js Backend Development',
      desc: 'Node.js provides an efficient server-side JavaScript environment for APIs, authentication systems, integrations and real-time application features.',
    },
    {
      title: 'Reusable Application Architecture',
      desc: 'A well-structured MERN application can separate frontend, backend and database responsibilities while keeping the overall development stack consistent.',
    },
    {
      title: 'Strong Development Ecosystem',
      desc: 'React, Node.js, Express and MongoDB have established ecosystems with libraries and tools for authentication, testing, payments, deployment and application monitoring.',
    },
  ];

  const techStack = [
    {
      category: 'MongoDB',
      items: [
        'MongoDB Atlas',
        'Mongoose',
        'Aggregation',
        'Indexing',
        'Data Modeling',
      ],
    },
    {
      category: 'Express.js',
      items: [
        'Express.js',
        'REST APIs',
        'Middleware',
        'Authentication',
        'Validation',
      ],
    },
    {
      category: 'React.js',
      items: [
        'React',
        'React Router',
        'TypeScript',
        'Tailwind CSS',
        'State Management',
      ],
    },
    {
      category: 'Node.js',
      items: [
        'Node.js',
        'Socket.io',
        'JWT',
        'Nodemailer',
        'Background Jobs',
      ],
    },
    {
      category: 'Deployment & DevOps',
      items: [
        'Docker',
        'GitHub Actions',
        'Vercel',
        'AWS',
        'Nginx',
      ],
    },
    {
      category: 'Integrations',
      items: [
        'Payment APIs',
        'Redis',
        'Cloudinary',
        'Email APIs',
        'Third-Party APIs',
      ],
    },
  ];

  const process = [
    {
      n: '01',
      title: 'Requirements & Architecture',
      desc: 'We review your product requirements, users, workflows and integrations before defining the MERN application architecture.',
    },
    {
      n: '02',
      title: 'Database & Backend Foundation',
      desc: 'MongoDB data models, Express routes, authentication, validation and core backend APIs are structured around the requirements of the application.',
    },
    {
      n: '03',
      title: 'React Frontend Development',
      desc: 'Reusable React components and responsive interfaces are developed and connected to the backend through structured API communication.',
    },
    {
      n: '04',
      title: 'Features & Integrations',
      desc: 'Business logic, payment services, notifications, third-party APIs and other project-specific functionality are integrated into the application.',
    },
    {
      n: '05',
      title: 'Testing & Optimisation',
      desc: 'The application is reviewed for functionality, responsive behaviour, API reliability, security considerations and performance before release.',
    },
    {
      n: '06',
      title: 'Deployment & Handover',
      desc: 'We prepare the application for production deployment and provide the relevant project code, configuration and technical handover based on the project agreement.',
    },
  ];

  const faqs = [
    {
      q: 'What is MERN stack development?',
      a: 'MERN stack development uses MongoDB for data storage, Express.js for backend application logic, React.js for the user interface and Node.js as the server-side JavaScript runtime. Together, these technologies can be used to build full-stack web applications using JavaScript across much of the application.',
    },
    {
      q: 'What types of applications can be built with MERN stack?',
      a: 'MERN can be used for SaaS platforms, business applications, admin dashboards, customer portals, e-commerce systems, startup MVPs, management software and other custom web applications.',
    },
    {
      q: 'How much does MERN stack development cost?',
      a: 'MERN stack development cost depends on the project scope, number of features, UI requirements, integrations, backend complexity and deployment requirements. DevZore reviews the requirements before preparing a project-specific proposal.',
    },
    {
      q: 'How long does a MERN stack project take?',
      a: 'Development time depends on the size and complexity of the application. A focused MVP may require considerably less development work than a multi-role SaaS platform or a complex business management system. A project timeline can be estimated after the required features and deliverables are defined.',
    },
    {
      q: 'Is MERN stack suitable for SaaS development?',
      a: 'Yes. MERN can be used to build SaaS applications with features such as user authentication, dashboards, subscriptions, role-based permissions, APIs, notifications and account management.',
    },
    {
      q: 'Can you build REST APIs for a MERN application?',
      a: 'Yes. Node.js and Express.js can be used to create REST APIs for React applications, mobile applications and third-party integrations. API work can include authentication, validation, database operations, permissions and external service integrations.',
    },
    {
      q: 'Can MERN stack applications integrate payment gateways?',
      a: 'Yes. MERN applications can integrate supported payment providers through their APIs and webhooks. The exact payment gateway depends on the project requirements, business location and provider availability.',
    },
    {
      q: 'Can you work with an existing MERN stack project?',
      a: 'Yes. DevZore can review an existing React, Node.js, Express or MongoDB application for feature development, bug fixes, API work, UI improvements, maintenance or architecture improvements.',
    },
    {
      q: 'Do you provide MERN stack development for international clients?',
      a: 'DevZore provides remote MERN stack development services for businesses and startups that need web application, SaaS, API or full-stack JavaScript development.',
    },
  ];

  const relatedServices = [
    {
      icon: <Server size={22} />,
      title: 'Backend & API Development',
      desc: 'Node.js, Express, REST APIs, authentication, databases and integrations for modern applications.',
      path: '/backend-api',
    },
    {
      icon: <Layers size={22} />,
      title: 'SaaS Product Development',
      desc: 'Custom SaaS platforms with dashboards, user management, subscriptions and scalable product architecture.',
      path: '/saas-product-development',
    },
    {
      icon: <Code2 size={22} />,
      title: 'React Development',
      desc: 'Responsive React interfaces, dashboards and frontend applications connected to modern APIs.',
      path: '/reactdevelopment',
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

    amber: d
      ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'
      : 'bg-amber-50 border-amber-100 text-amber-600',

    indigo: d
      ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
      : 'bg-indigo-50 border-indigo-100 text-indigo-600',
  };

  return (
    <>
      <Helmet>
        {/* Page-specific structured data.
            Title, description, canonical, OG and Twitter metadata
            are handled globally in App.jsx / SEOManager. */}

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id':
              'https://devzore.com/mern-stack-development#service',
            name: 'MERN Stack Development Services',
            description:
              'DevZore provides MERN stack development services using MongoDB, Express.js, React.js and Node.js for custom web applications, SaaS products, dashboards and startup MVPs.',
            url: 'https://devzore.com/mern-stack-development',
            serviceType: 'MERN Stack Development',
            provider: {
              '@id': 'https://devzore.com/#organization',
            },
            areaServed: 'Worldwide',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'MERN Stack Development Services',
              itemListElement: whatWeBuild.map((item) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: item.title,
                  description: item.desc,
                },
              })),
            },
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
                name: 'Services',
                item: 'https://devzore.com/allservices',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'MERN Stack Development',
                item:
                  'https://devzore.com/mern-stack-development',
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
        {/* Hero */}
        <section
          aria-labelledby="mern-heading"
          className={`pt-27 pb-10 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${
                      d
                        ? 'bg-purple-600/10 border-purple-500/20 text-purple-400'
                        : 'bg-purple-50 border-purple-200 text-purple-700'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                    MERN Stack Development
                  </div>

                  <div
                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold border ${
                      d
                        ? 'bg-green-500/10 border-green-500/20 text-green-400'
                        : 'bg-green-50 border-green-200 text-green-700'
                    }`}
                  >
                    <Globe size={10} />
                    Remote Development
                  </div>
                </div>

                <h1
                  id="mern-heading"
                  className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 ${
                    d ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  MERN Stack Development{' '}
                  <span className="text-purple-600">
                    for Modern Web Applications
                  </span>
                </h1>

                <p
                  className={`text-lg font-semibold mb-5 ${
                    d ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  MongoDB · Express.js · React.js · Node.js · Full-Stack
                  JavaScript
                </p>

                <p
                  className={`text-base leading-relaxed mb-5 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  DevZore provides{' '}
                  <strong
                    className={d ? 'text-gray-200' : 'text-gray-800'}
                  >
                    MERN stack development services
                  </strong>{' '}
                  for businesses and startups that need custom web
                  applications, SaaS platforms, dashboards, portals and
                  digital products.
                </p>

                <p
                  className={`text-base leading-relaxed mb-8 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  We use MongoDB, Express.js, React.js and Node.js to build
                  connected frontend and backend systems with APIs,
                  authentication, database architecture and third-party
                  integrations based on your business requirements.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    'Full-Stack JavaScript',
                    'Custom REST APIs',
                    'Responsive React UI',
                    'MongoDB Data Modeling',
                  ].map((item) => (
                    <div
                      key={item}
                      className={`flex items-center gap-2 p-3 rounded-xl border ${
                        d
                          ? 'bg-white/[0.02] border-white/[0.06] text-gray-300'
                          : 'bg-gray-50 border-gray-200 text-gray-700'
                      }`}
                    >
                      <CheckCircle
                        size={14}
                        className="text-purple-500 flex-shrink-0"
                      />
                      <span className="text-[12px] font-semibold">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                      })
                    }
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                  >
                    Discuss Your MERN Project
                    <ArrowRight size={14} />
                  </Link>

                  <a
                    href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20need%20help%20with%20a%20MERN%20stack%20development%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* MERN Explanation */}
              <div
                className={`p-7 lg:p-8 rounded-3xl border ${
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
                  The MERN Technology Stack
                </p>

                <div className="space-y-4">
                  {[
                    {
                      letter: 'M',
                      name: 'MongoDB',
                      role: 'Database',
                      color: 'text-green-500',
                      bg: d ? 'bg-green-500/10' : 'bg-green-50',
                      desc: 'Document-based database for storing and managing application data.',
                    },
                    {
                      letter: 'E',
                      name: 'Express.js',
                      role: 'Backend',
                      color: d ? 'text-gray-300' : 'text-gray-700',
                      bg: d ? 'bg-white/[0.06]' : 'bg-gray-100',
                      desc: 'Node.js framework for APIs, middleware and server-side application logic.',
                    },
                    {
                      letter: 'R',
                      name: 'React.js',
                      role: 'Frontend',
                      color: 'text-blue-400',
                      bg: d ? 'bg-blue-500/10' : 'bg-blue-50',
                      desc: 'Component-based frontend library for interactive and reusable user interfaces.',
                    },
                    {
                      letter: 'N',
                      name: 'Node.js',
                      role: 'Runtime',
                      color: 'text-green-400',
                      bg: d ? 'bg-green-500/10' : 'bg-green-50',
                      desc: 'Server-side JavaScript runtime used for application APIs and backend services.',
                    },
                  ].map((item) => (
                    <div
                      key={item.letter}
                      className={`flex items-start gap-4 p-4 rounded-xl border ${
                        d
                          ? 'bg-white/[0.02] border-white/[0.05]'
                          : 'bg-white border-gray-100'
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}
                      >
                        <span
                          className={`text-lg font-black ${item.color}`}
                        >
                          {item.letter}
                        </span>
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <p
                            className={`text-[14px] font-black ${
                              d ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {item.name}
                          </p>

                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              d
                                ? 'bg-white/[0.06] text-gray-500'
                                : 'bg-gray-100 text-gray-500'
                            }`}
                          >
                            {item.role}
                          </span>
                        </div>

                        <p
                          className={`text-[12px] leading-relaxed ${
                            d ? 'text-gray-400' : 'text-gray-600'
                          }`}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className={`mt-5 p-4 rounded-xl ${
                    d ? 'bg-purple-600/5' : 'bg-purple-50'
                  }`}
                >
                  <p
                    className={`text-[11px] leading-relaxed font-semibold text-center ${
                      d ? 'text-purple-400' : 'text-purple-700'
                    }`}
                  >
                    MERN development for SaaS, business applications,
                    dashboards, portals, APIs and startup products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Build */}
        <section
          aria-labelledby="whatwebuild-heading"
          className={`py-14 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <p className="text-purple-500 text-[11px] font-black uppercase tracking-widest mb-3">
                MERN Development Services
              </p>

              <h2
                id="whatwebuild-heading"
                className={`text-3xl font-black mb-4 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                What We Build with MERN Stack
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Our full-stack JavaScript development services cover
                customer-facing web applications, SaaS products, backend
                systems, dashboards, portals and MVP development.
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

        {/* Why MERN */}
        <section
          aria-labelledby="whymern-heading"
          className={`py-14 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <p className="text-purple-500 text-[11px] font-black uppercase tracking-widest mb-3">
                Full-Stack JavaScript
              </p>

              <h2
                id="whymern-heading"
                className={`text-3xl font-black mb-4 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Why Use the MERN Stack?
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                MERN combines established JavaScript technologies for
                frontend interfaces, backend development, APIs and database
                operations within a modern web application stack.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyMern.map((item) => (
                <div
                  key={item.title}
                  className={`p-6 rounded-2xl border transition-all hover:border-purple-500/20 ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                      : 'bg-white border-gray-200 hover:shadow-sm'
                  }`}
                >
                  <CheckCircle
                    size={16}
                    className="text-purple-500 mb-3"
                  />

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

        {/* Tech Stack */}
        <section
          aria-labelledby="tech-heading"
          className={`py-14 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-purple-500 text-[11px] font-black uppercase tracking-widest mb-3">
                Technologies
              </p>

              <h2
                id="tech-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                MERN Stack Technologies & Tools
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Technologies commonly used across our MERN stack web
                development workflow.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStack.map((cat) => (
                <div
                  key={cat.category}
                  className={`p-5 rounded-2xl border ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-white border-gray-200'
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

        {/* Process */}
        <section
          aria-labelledby="process-heading"
          className={`py-14 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-purple-500 text-[11px] font-black uppercase tracking-widest mb-3">
                Development Workflow
              </p>

              <h2
                id="process-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Our MERN Stack Development Process
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                A structured workflow covering requirements, backend
                architecture, React development, integrations, testing and
                deployment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {process.map((step) => (
                <div
                  key={step.n}
                  className={`p-6 rounded-2xl border ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-[#fafafa] border-gray-200'
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
          </div>
        </section>

        {/* Search Intent Section */}
        <section
          aria-labelledby="mern-solutions-heading"
          className={`py-14 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={`rounded-3xl border p-7 lg:p-10 ${
                d
                  ? 'bg-white/[0.02] border-white/[0.06]'
                  : 'bg-white border-gray-200'
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-purple-500 text-[11px] font-black uppercase tracking-widest mb-3">
                    Custom MERN Solutions
                  </p>

                  <h2
                    id="mern-solutions-heading"
                    className={`text-2xl lg:text-3xl font-black mb-4 ${
                      d ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    MERN Stack Development for Startups and Businesses
                  </h2>

                  <p
                    className={`text-[14px] leading-relaxed ${
                      d ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    Whether you need a MERN stack developer for a new web
                    application, a Node.js API, a React dashboard, MongoDB
                    database development or an existing full-stack JavaScript
                    project, the technical approach should match your actual
                    product requirements.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'Custom MERN Web Apps',
                    'MERN SaaS Development',
                    'React + Node.js Development',
                    'MongoDB Development',
                    'Express.js REST APIs',
                    'MERN MVP Development',
                    'MERN Dashboard Development',
                    'Existing MERN Project Support',
                  ].map((item) => (
                    <div
                      key={item}
                      className={`flex items-center gap-2 p-3 rounded-xl border ${
                        d
                          ? 'bg-white/[0.02] border-white/[0.06] text-gray-300'
                          : 'bg-gray-50 border-gray-200 text-gray-700'
                      }`}
                    >
                      <CheckCircle
                        size={13}
                        className="text-purple-500 flex-shrink-0"
                      />
                      <span className="text-[12px] font-semibold">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          aria-labelledby="faq-heading"
          className={`py-14 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-purple-500 text-[11px] font-black uppercase tracking-widest mb-3">
                Questions & Answers
              </p>

              <h2
                id="faq-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                MERN Stack Development FAQ
              </h2>

              <p
                className={`text-base ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Common questions about MongoDB, Express.js, React.js,
                Node.js and custom MERN application development.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={faq.q}
                  className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                    activeFaq === i
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
                      setActiveFaq(activeFaq === i ? null : i)
                    }
                    aria-expanded={activeFaq === i}
                    className="w-full p-5 text-left flex items-start justify-between gap-4"
                  >
                    <span
                      className={`text-[14px] font-bold ${
                        activeFaq === i
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
                        activeFaq === i
                          ? 'bg-purple-600 text-white'
                          : d
                          ? 'bg-white/[0.06] text-gray-500'
                          : 'bg-gray-100 text-gray-500'
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
                        ? 'max-h-[400px] opacity-100'
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
          </div>
        </section>

        {/* Related Services */}
        <section
          aria-labelledby="related-services-heading"
          className={`py-14 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <p className="text-purple-500 text-[11px] font-black uppercase tracking-widest mb-3">
                Explore More
              </p>

              <h2
                id="related-services-heading"
                className={`text-2xl lg:text-3xl font-black ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Related Services
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {relatedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    })
                  }
                  className={`group p-6 rounded-2xl border transition-all duration-300 ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-purple-500/30'
                      : 'bg-white border-gray-200 hover:border-purple-200 hover:shadow-md'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                      d
                        ? 'bg-purple-500/10 text-purple-400'
                        : 'bg-purple-50 text-purple-600'
                    }`}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className={`text-[15px] font-bold mb-2 ${
                      d ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-[13px] leading-relaxed mb-5 ${
                      d ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {service.desc}
                  </p>

                  <span className="inline-flex items-center gap-2 text-[12px] font-bold text-purple-500 group-hover:gap-3 transition-all">
                    Explore Service
                    <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                to="/allservices"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  })
                }
                className={`inline-flex items-center gap-2 text-[13px] font-bold transition-colors ${
                  d
                    ? 'text-gray-400 hover:text-purple-400'
                    : 'text-gray-600 hover:text-purple-700'
                }`}
              >
                View All DevZore Services
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div
              className={`w-12 h-12 mx-auto mb-5 rounded-2xl flex items-center justify-center ${
                d
                  ? 'bg-purple-500/10 text-purple-400'
                  : 'bg-purple-50 text-purple-600'
              }`}
            >
              <Shield size={21} />
            </div>

            <h2
              className={`text-3xl font-black mb-4 ${
                d ? 'text-white' : 'text-gray-900'
              }`}
            >
              Need a MERN Stack Development Partner?
            </h2>

            <p
              className={`text-base mb-8 max-w-2xl mx-auto leading-relaxed ${
                d ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Tell us what you want to build. We can discuss your React
              frontend, Node.js and Express backend, MongoDB database,
              required APIs, integrations and deployment requirements.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  })
                }
                className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
              >
                Discuss Your Project
                <ArrowRight size={15} />
              </Link>

              <a
                href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20a%20MERN%20stack%20project."
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-sm border transition-all ${
                  d
                    ? 'border-white/10 text-gray-300 hover:border-[#25D366]/30 hover:text-[#25D366]'
                    : 'border-gray-200 text-gray-700 hover:border-[#25D366]/40 hover:text-[#159447]'
                }`}
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

export default MernStackDevelopment;