import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Server,
  ArrowRight,
  CheckCircle,
  Shield,
  Code2,
  Globe,
  Database,
  Layers,
  Settings,
  TrendingUp,
  Plus,
  Minus,
  Activity,
  Key,
  Lock,
  Cloud,
} from 'lucide-react';

const BackendApi = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  const features = [
    {
      icon: <Server size={20} />,
      color: 'purple',
      title: 'REST API Development',
      desc: 'Custom REST API development using Node.js and Express.js for web applications, mobile apps, SaaS platforms and business software, with structured endpoints, validation, pagination and clear documentation.',
    },
    {
      icon: <Code2 size={20} />,
      color: 'blue',
      title: 'GraphQL API Development',
      desc: 'GraphQL API development for applications that need flexible queries, mutations, subscriptions and efficient communication between frontend and backend systems.',
    },
    {
      icon: <Database size={20} />,
      color: 'green',
      title: 'Database Design & Development',
      desc: 'MongoDB, PostgreSQL and MySQL database architecture including schemas, relationships, indexing, queries and data models designed around your application requirements.',
    },
    {
      icon: <Shield size={20} />,
      color: 'red',
      title: 'Authentication & API Security',
      desc: 'Authentication and authorization systems using JWT, refresh tokens, OAuth, role-based access control, validation, rate limiting and secure API development practices.',
    },
    {
      icon: <Activity size={20} />,
      color: 'amber',
      title: 'Real-Time Backend Development',
      desc: 'Real-time backend development using WebSockets and Socket.io for chat applications, live notifications, dashboards, collaboration tools and event-driven application features.',
    },
    {
      icon: <Layers size={20} />,
      color: 'indigo',
      title: 'SaaS Backend & Microservices',
      desc: 'Backend architecture for SaaS products and larger applications, including modular services, APIs, queues, reusable business logic and scalable application components.',
    },
    {
      icon: <Key size={20} />,
      color: 'cyan',
      title: 'Third-Party API Integration',
      desc: 'Integrate payment gateways, email services, maps, authentication providers, AI APIs, webhooks and other external services into your web or mobile application.',
    },
    {
      icon: <TrendingUp size={20} />,
      color: 'orange',
      title: 'Backend Performance Optimisation',
      desc: 'Improve backend performance through database query optimisation, caching, indexing, pagination, connection management and application-level performance improvements.',
    },
    {
      icon: <Settings size={20} />,
      color: 'pink',
      title: 'Cloud Deployment & DevOps',
      desc: 'Deploy backend applications using suitable cloud infrastructure, Docker, CI/CD pipelines, environment configuration, reverse proxies and production monitoring.',
    },
  ];

  const techStack = [
    {
      category: 'Backend Development',
      items: ['Node.js', 'Express.js', 'TypeScript', 'JavaScript', 'NestJS'],
    },
    {
      category: 'API Development',
      items: ['REST APIs', 'GraphQL', 'WebSockets', 'Socket.io', 'Webhooks'],
    },
    {
      category: 'Databases',
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch'],
    },
    {
      category: 'Authentication & Security',
      items: ['JWT', 'OAuth', 'RBAC', 'bcrypt', 'Helmet', 'Rate Limiting'],
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Docker', 'GitHub Actions', 'Nginx', 'CI/CD'],
    },
    {
      category: 'Testing & Documentation',
      items: ['Jest', 'Supertest', 'Postman', 'Swagger', 'OpenAPI'],
    },
  ];

  const process = [
    {
      n: '01',
      title: 'Backend & API Architecture',
      desc: 'We review your application requirements, frontend or mobile app needs, business logic, integrations, authentication requirements and data structure before development begins.',
    },
    {
      n: '02',
      title: 'Database Architecture',
      desc: 'We design MongoDB, PostgreSQL or another suitable database structure with appropriate relationships, schemas, validation, indexes and data access patterns.',
    },
    {
      n: '03',
      title: 'Core Backend Development',
      desc: 'We build authentication, APIs, business logic, middleware, validation, error handling and database operations using a maintainable backend architecture.',
    },
    {
      n: '04',
      title: 'API & Third-Party Integrations',
      desc: 'Payment services, email providers, maps, AI APIs, storage services, webhooks and other external systems are integrated according to your project requirements.',
    },
    {
      n: '05',
      title: 'Testing, Security & Performance',
      desc: 'Backend functionality is reviewed for validation, authentication, authorization, error handling, API security, database performance and application reliability.',
    },
    {
      n: '06',
      title: 'Deployment & Documentation',
      desc: 'We prepare the backend for production deployment and provide relevant API documentation, environment information and deployment guidance according to the project scope.',
    },
  ];

  const whyUs = [
    {
      icon: <Code2 size={16} />,
      title: 'Clean Backend Architecture',
      desc: 'Modular backend code designed to remain understandable, maintainable and easier to extend as your application grows.',
    },
    {
      icon: <Shield size={16} />,
      title: 'Security-Conscious Development',
      desc: 'Authentication, authorization, validation, rate limiting and secure configuration are considered throughout backend development.',
    },
    {
      icon: <Database size={16} />,
      title: 'Database-Focused Engineering',
      desc: 'Database structures and queries are designed around the real data relationships and workflows of your application.',
    },
    {
      icon: <Activity size={16} />,
      title: 'Performance-Focused APIs',
      desc: 'API responses, database queries, caching and application architecture are considered with performance and scalability in mind.',
    },
    {
      icon: <Cloud size={16} />,
      title: 'Production Deployment',
      desc: 'Backend applications can be prepared for cloud deployment with environment configuration, CI/CD and production-ready infrastructure.',
    },
    {
      icon: <Globe size={16} />,
      title: 'Remote Project Delivery',
      desc: 'DevZore provides backend and API development services for businesses and startups that need remote software development support.',
    },
  ];

  const faqs = [
    {
      q: 'What backend development services does DevZore provide?',
      a: 'DevZore provides custom backend development for web applications, mobile apps, SaaS platforms and business software. Services can include Node.js and Express.js development, REST APIs, GraphQL APIs, authentication, database architecture, third-party integrations, real-time functionality and deployment.',
    },
    {
      q: 'How much does backend and API development cost?',
      a: 'Backend development cost depends on the application complexity, database requirements, authentication, integrations, business logic and deployment requirements. After reviewing your project scope, we can provide a tailored proposal based on the required work.',
    },
    {
      q: 'Do you provide Node.js and Express.js backend development?',
      a: 'Yes. Node.js and Express.js can be used to build backend systems and APIs for web applications, mobile applications, SaaS products, dashboards and other software platforms.',
    },
    {
      q: 'Do you build REST APIs and GraphQL APIs?',
      a: 'Yes. We can develop REST or GraphQL APIs depending on the application architecture and data requirements. The appropriate approach is selected based on how your frontend, mobile app or external services need to consume data.',
    },
    {
      q: 'Can you build a backend for a mobile app?',
      a: 'Yes. Mobile app backend development can include authentication, user accounts, databases, APIs, notifications, payments, file storage, real-time functionality and administration systems.',
    },
    {
      q: 'Can you build a backend for a SaaS application?',
      a: 'Yes. SaaS backend development can include user and organization management, authentication, subscription workflows, APIs, databases, permissions, dashboards and integrations based on the product requirements.',
    },
    {
      q: 'Can you integrate third-party APIs and payment gateways?',
      a: 'Yes. Third-party API integration can include payment providers, email services, maps, authentication providers, AI services, webhooks and other external platforms when suitable API access is available.',
    },
    {
      q: 'Do you work with MongoDB and PostgreSQL?',
      a: 'Yes. Database technology can be selected according to the application requirements. MongoDB, PostgreSQL, MySQL and other databases can be used depending on the data structure, relationships and application requirements.',
    },
    {
      q: 'Do you provide API documentation?',
      a: 'API projects can include endpoint documentation, request and response examples, authentication instructions and development environment information. Postman collections or OpenAPI documentation can also be included according to the project scope.',
    },
    {
      q: 'How do you secure backend APIs?',
      a: 'Backend security can include authentication, authorization, input validation, rate limiting, secure headers, protected environment variables, password hashing and appropriate database and API access controls.',
    },
    {
      q: 'Can you improve or integrate an existing API?',
      a: 'Yes. Existing backend systems can be reviewed for API structure, database queries, authentication, integrations, error handling and maintainability. The appropriate improvements depend on the current codebase and project requirements.',
    },
    {
      q: 'Can a React or Next.js frontend connect to your backend APIs?',
      a: 'Yes. Backend APIs can be designed for React, Next.js and other frontend applications with appropriate authentication, CORS configuration, data structures and API endpoints.',
    },
  ];

  const relatedServices = [
    {
      icon: <Code2 size={24} />,
      title: 'MERN Stack Development',
      desc: 'Build complete MongoDB, Express, React and Node.js applications with an integrated frontend and backend.',
      path: '/mern-stack-development',
    },
    {
      icon: <Layers size={24} />,
      title: 'SaaS Development',
      desc: 'Build SaaS products with authentication, APIs, databases, dashboards and scalable backend architecture.',
      path: '/saas-product-development',
    },
    {
      icon: <Globe size={24} />,
      title: 'Web Development',
      desc: 'Connect backend APIs to responsive, modern and maintainable web applications built around your business requirements.',
      path: '/web-development',
    },
  ];

  const backendCapabilities = [
    {
      title: 'Web Application Backend',
      desc: 'APIs and business logic for modern web applications.',
    },
    {
      title: 'Mobile App Backend',
      desc: 'Authentication, data, notifications and APIs for mobile apps.',
    },
    {
      title: 'SaaS Backend',
      desc: 'Backend architecture for subscription and software products.',
    },
    {
      title: 'Database Development',
      desc: 'MongoDB, PostgreSQL and relational or document data models.',
    },
    {
      title: 'API Integrations',
      desc: 'Connect external platforms, payments, webhooks and services.',
    },
    {
      title: 'Real-Time Systems',
      desc: 'WebSocket and Socket.io functionality for live application features.',
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
    red: d
      ? 'bg-red-500/10 border-red-500/20 text-red-400'
      : 'bg-red-50 border-red-100 text-red-600',
    amber: d
      ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'
      : 'bg-amber-50 border-amber-100 text-amber-600',
    indigo: d
      ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
      : 'bg-indigo-50 border-indigo-100 text-indigo-600',
    cyan: d
      ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
      : 'bg-cyan-50 border-cyan-100 text-cyan-600',
    orange: d
      ? 'bg-orange-500/10 border-orange-500/20 text-orange-400'
      : 'bg-orange-50 border-orange-100 text-orange-600',
    pink: d
      ? 'bg-pink-500/10 border-pink-500/20 text-pink-400'
      : 'bg-pink-50 border-pink-100 text-pink-600',
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://devzore.com/backend-api#service',
    name: 'Backend & API Development Services',
    url: 'https://devzore.com/backend-api',
    description:
      'Custom backend and API development for web applications, mobile apps and SaaS platforms using Node.js, Express.js, REST APIs, GraphQL, MongoDB and PostgreSQL.',
    serviceType: 'Backend and API Development',
    provider: {
      '@id': 'https://devzore.com/#organization',
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Backend & API Development Services',
      itemListElement: features.map((feature) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feature.title,
          description: feature.desc,
        },
      })),
    },
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
        name: 'Backend & API Development',
        item: 'https://devzore.com/backend-api',
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
        className={`min-h-screen transition-colors duration-300 ${d ? 'bg-[#030303]' : 'bg-white'
          }`}
      >
        {/* Hero */}
        <section
          aria-labelledby="backend-heading"
          className={`pt-27 pb-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'
            }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${d
                        ? 'bg-purple-600/10 border-purple-500/20 text-purple-400'
                        : 'bg-purple-50 border-purple-200 text-purple-700'
                      }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Backend & API Development
                  </div>

                  <div
                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold border ${d
                        ? 'bg-green-500/10 border-green-500/20 text-green-400'
                        : 'bg-green-50 border-green-200 text-green-700'
                      }`}
                  >
                    <Globe size={11} />
                    Remote Development Services
                  </div>
                </div>

                <h1
                  id="backend-heading"
                  className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5 ${d ? 'text-white' : 'text-gray-900'
                    }`}
                >
                  Backend & API Development Services{' '}
                  <span className="text-purple-600">
                    for Web, Mobile & SaaS Applications
                  </span>
                </h1>

                <p
                  className={`text-lg font-semibold mb-5 ${d ? 'text-gray-300' : 'text-gray-700'
                    }`}
                >
                  Node.js Backend Development · Express.js · REST APIs ·
                  GraphQL · MongoDB · PostgreSQL · Authentication · API
                  Integrations
                </p>

                <p
                  className={`text-base leading-relaxed mb-5 ${d ? 'text-gray-400' : 'text-gray-600'
                    }`}
                >
                  DevZore provides custom backend development and API
                  development services for web applications, mobile apps,
                  SaaS products and business software. We build Node.js and
                  Express.js backend systems, REST APIs, GraphQL APIs,
                  authentication systems, database architectures and
                  third-party API integrations for modern applications.
                </p>

                <p
                  className={`text-base leading-relaxed mb-8 ${d ? 'text-gray-500' : 'text-gray-500'
                    }`}
                >
                  Whether you need a new application backend, SaaS backend
                  development, mobile app backend, payment API integration,
                  MongoDB or PostgreSQL database architecture, WebSocket
                  functionality or improvements to an existing API, our
                  development approach focuses on security, maintainability,
                  performance and clear documentation.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                  >
                    Discuss Your Backend Project
                    <ArrowRight size={14} />
                  </Link>

                  <a
                    href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20need%20help%20with%20backend%20and%20API%20development."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Backend capabilities */}
              <div
                className={`p-7 lg:p-8 rounded-3xl border ${d
                    ? 'bg-white/[0.02] border-white/[0.06]'
                    : 'bg-[#fafafa] border-gray-200'
                  }`}
              >
                <p
                  className={`text-[11px] font-black uppercase tracking-widest mb-6 ${d ? 'text-gray-500' : 'text-gray-400'
                    }`}
                >
                  Backend Development Capabilities
                </p>

                <div className="space-y-4">
                  {backendCapabilities.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3 pb-4 border-b last:border-0 ${d ? 'border-white/[0.05]' : 'border-gray-100'
                        }`}
                    >
                      <CheckCircle
                        size={15}
                        className="text-purple-500 flex-shrink-0 mt-0.5"
                      />

                      <div>
                        <p
                          className={`text-[13px] font-bold ${d ? 'text-white' : 'text-gray-900'
                            }`}
                        >
                          {item.title}
                        </p>

                        <p
                          className={`text-[12px] mt-1 leading-relaxed ${d ? 'text-gray-500' : 'text-gray-500'
                            }`}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className={`mt-5 p-4 rounded-xl ${d ? 'bg-purple-600/5' : 'bg-purple-50'
                    }`}
                >
                  <p
                    className={`text-[12px] font-semibold text-center ${d ? 'text-purple-400' : 'text-purple-700'
                      }`}
                  >
                    Backend solutions for startups, businesses and software
                    products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          aria-labelledby="features-heading"
          className={`py-14 border-b ${d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
            }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-3">
                Backend Services
              </p>

              <h2
                id="features-heading"
                className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'
                  }`}
              >
                Custom Backend & API Development Services
              </h2>

              <p
                className={`text-base leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'
                  }`}
              >
                Backend development for web applications, mobile apps and SaaS
                platforms — including REST API development, GraphQL APIs,
                Node.js development, database architecture, authentication,
                third-party integrations, real-time systems and cloud
                deployment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((item, index) => (
                <article
                  key={index}
                  className={`p-6 rounded-2xl border transition-all hover:border-purple-500/25 ${d
                      ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                      : 'bg-white border-gray-200 hover:shadow-sm'
                    }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${colorMap[item.color]
                      }`}
                  >
                    {item.icon}
                  </div>

                  <h3
                    className={`text-[15px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'
                      }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'
                      }`}
                  >
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Search-intent content */}
        <section
          aria-labelledby="backend-solutions-heading"
          className={`py-14 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'
            }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-3">
                  Application Backends
                </p>

                <h2
                  id="backend-solutions-heading"
                  className={`text-3xl font-black mb-5 ${d ? 'text-white' : 'text-gray-900'
                    }`}
                >
                  Backend Development for Web Apps, Mobile Apps and SaaS
                </h2>

                <p
                  className={`text-sm leading-7 mb-4 ${d ? 'text-gray-400' : 'text-gray-600'
                    }`}
                >
                  A reliable application needs more than a frontend. Its backend
                  manages business logic, users, authentication, databases,
                  permissions, integrations and communication between different
                  parts of the software.
                </p>

                <p
                  className={`text-sm leading-7 ${d ? 'text-gray-400' : 'text-gray-600'
                    }`}
                >
                  DevZore can build custom backend systems for React and Next.js
                  websites, React Native mobile applications, SaaS products,
                  dashboards, e-commerce platforms and custom business
                  applications.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Node.js Backend Development',
                  'Express.js Development',
                  'REST API Development',
                  'GraphQL API Development',
                  'MongoDB Development',
                  'PostgreSQL Development',
                  'SaaS Backend Development',
                  'Mobile App Backend',
                ].map((item) => (
                  <div
                    key={item}
                    className={`flex items-center gap-3 p-4 rounded-xl border ${d
                        ? 'bg-white/[0.02] border-white/[0.06]'
                        : 'bg-[#fafafa] border-gray-200'
                      }`}
                  >
                    <CheckCircle
                      size={14}
                      className="text-purple-500 flex-shrink-0"
                    />

                    <span
                      className={`text-[13px] font-semibold ${d ? 'text-gray-300' : 'text-gray-700'
                        }`}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section
          aria-labelledby="tech-heading"
          className={`py-14 border-b ${d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
            }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-3">
                Technologies
              </p>

              <h2
                id="tech-heading"
                className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'
                  }`}
              >
                Backend Development Technology Stack
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'
                  }`}
              >
                Technologies for API development, database systems,
                authentication, testing and backend deployment.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStack.map((category, index) => (
                <div
                  key={index}
                  className={`p-5 rounded-2xl border ${d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-white border-gray-200'
                    }`}
                >
                  <p className="text-[11px] font-black uppercase tracking-widest mb-4 text-purple-500">
                    {category.category}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((tech) => (
                      <span
                        key={tech}
                        className={`text-[11px] font-medium px-2.5 py-1.5 rounded-md border ${d
                            ? 'bg-white/[0.04] border-white/[0.08] text-gray-300'
                            : 'bg-[#fafafa] border-gray-200 text-gray-700'
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

        {/* Why DevZore */}
        <section
          aria-labelledby="why-backend-heading"
          className={`py-14 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'
            }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-3">
                Development Approach
              </p>

              <h2
                id="why-backend-heading"
                className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'
                  }`}
              >
                Backend Development Built Around Your Application
              </h2>

              <p
                className={`text-base leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'
                  }`}
              >
                We focus on backend architecture that supports your actual
                product requirements instead of forcing every application into
                the same technical structure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyUs.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border ${d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-[#fafafa] border-gray-200'
                    }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-4 ${d
                        ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                        : 'bg-purple-50 border-purple-100 text-purple-600'
                      }`}
                  >
                    {item.icon}
                  </div>

                  <h3
                    className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'
                      }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'
                      }`}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section
          aria-labelledby="process-heading"
          className={`py-14 border-b ${d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
            }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-3">
                Our Process
              </p>

              <h2
                id="process-heading"
                className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'
                  }`}
              >
                Our Backend & API Development Process
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'
                  }`}
              >
                A structured development process from application architecture
                and database design to testing, documentation and deployment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {process.map((step) => (
                <div
                  key={step.n}
                  className={`p-6 rounded-2xl border ${d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-white border-gray-200'
                    }`}
                >
                  <div
                    className={`text-[13px] font-black mb-3 ${d ? 'text-purple-400' : 'text-purple-600'
                      }`}
                  >
                    {step.n}
                  </div>

                  <h3
                    className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'
                      }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'
                      }`}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security content */}
        <section
          aria-labelledby="secure-api-heading"
          className={`py-14 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'
            }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={`rounded-3xl border p-7 md:p-10 ${d
                  ? 'bg-white/[0.02] border-white/[0.06]'
                  : 'bg-[#fafafa] border-gray-200'
                }`}
            >
              <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${d
                        ? 'bg-purple-500/10 text-purple-400'
                        : 'bg-purple-50 text-purple-600'
                      }`}
                  >
                    <Lock size={22} />
                  </div>

                  <h2
                    id="secure-api-heading"
                    className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'
                      }`}
                  >
                    Secure API & Authentication Development
                  </h2>

                  <p
                    className={`text-sm leading-7 ${d ? 'text-gray-400' : 'text-gray-600'
                      }`}
                  >
                    Backend security starts with architecture. Authentication,
                    authorization, validation and API access controls are
                    considered as part of the development process rather than
                    being added only after the application is complete.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'JWT Authentication',
                    'Role-Based Access Control',
                    'OAuth Integration',
                    'Input Validation',
                    'API Rate Limiting',
                    'Password Hashing',
                    'Secure Environment Variables',
                    'CORS Configuration',
                  ].map((item) => (
                    <div
                      key={item}
                      className={`flex items-center gap-3 p-4 rounded-xl border ${d
                          ? 'bg-black/20 border-white/[0.06]'
                          : 'bg-white border-gray-200'
                        }`}
                    >
                      <Shield
                        size={14}
                        className="text-purple-500 flex-shrink-0"
                      />

                      <span
                        className={`text-[12px] font-semibold ${d ? 'text-gray-300' : 'text-gray-700'
                          }`}
                      >
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
          className={`py-14 border-b ${d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
            }`}
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-3">
                Questions & Answers
              </p>

              <h2
                id="faq-heading"
                className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'
                  }`}
              >
                Backend & API Development FAQ
              </h2>

              <p
                className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'
                  }`}
              >
                Common questions about Node.js backend development, REST APIs,
                GraphQL, databases, integrations and application backends.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;

                return (
                  <div
                    key={faq.q}
                    className={`rounded-xl border overflow-hidden transition-all duration-300 ${isOpen
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
                      aria-controls={`backend-faq-${index}`}
                      className="w-full p-5 text-left flex items-start justify-between gap-4"
                    >
                      <span
                        className={`text-[14px] font-bold ${isOpen
                            ? 'text-purple-500'
                            : d
                              ? 'text-white'
                              : 'text-gray-900'
                          }`}
                      >
                        {faq.q}
                      </span>

                      <div
                        className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center ${isOpen
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
                      id={`backend-faq-${index}`}
                      className={`overflow-hidden transition-all duration-300 ${isOpen
                          ? 'max-h-[500px] opacity-100'
                          : 'max-h-0 opacity-0'
                        }`}
                    >
                      <div
                        className={`px-5 pb-5 pt-0 border-t text-[14px] leading-relaxed ${d
                            ? 'border-white/[0.06] text-gray-400'
                            : 'border-purple-100 text-gray-600'
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

        {/* Related services */}
        <section
          aria-labelledby="related-backend-services"
          className={`py-14 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'
            }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                Explore More
              </p>

              <h2
                id="related-backend-services"
                className={`text-2xl md:text-3xl font-black ${d ? 'text-white' : 'text-gray-900'
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
                  className={`group p-7 md:p-8 rounded-3xl border transition-all duration-300 ${d
                      ? 'bg-white/[0.015] border-white/[0.08] hover:bg-white/[0.035] hover:border-purple-500/30'
                      : 'bg-white border-gray-200 hover:border-purple-200 hover:shadow-lg'
                    }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:-translate-y-1 ${d
                        ? 'bg-purple-500/10 text-purple-400'
                        : 'bg-purple-50 text-purple-600'
                      }`}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className={`text-lg font-black mb-3 ${d ? 'text-white' : 'text-gray-900'
                      }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed mb-7 ${d ? 'text-gray-400' : 'text-gray-600'
                      }`}
                  >
                    {service.desc}
                  </p>

                  <span className="inline-flex items-center gap-2 text-sm font-bold text-purple-500 group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pt-14 pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2
              className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'
                }`}
            >
              Need a Backend or API for Your Application?
            </h2>

            <p
              className={`text-base mb-8 max-w-2xl mx-auto leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'
                }`}
            >
              Tell us about your web application, mobile app, SaaS product,
              database or API integration requirements. We can review the
              project and discuss a suitable backend development approach.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
              >
                Discuss Your Project
                <ArrowRight size={15} />
              </Link>

              <Link
                to="/allservices"
                className={`flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-sm border transition-all ${d
                    ? 'border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]'
                    : 'border-gray-200 text-gray-700 hover:border-gray-300'
                  }`}
              >
                View All Services
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BackendApi;