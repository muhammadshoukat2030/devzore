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
  Users,
  Zap,
  Lock,
} from 'lucide-react';

const MernStackDevelopment = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  const whatWeBuild = [
    {
      icon: <Monitor size={20} />,
      color: 'purple',
      title: 'MERN Stack Web Development',
      desc: 'Custom MERN stack web development using MongoDB, Express.js, React.js and Node.js. We connect responsive frontend interfaces, backend APIs and databases into one maintainable full-stack application.',
    },
    {
      icon: <TrendingUp size={20} />,
      color: 'blue',
      title: 'MERN SaaS Application Development',
      desc: 'Build MERN-based SaaS platforms with authentication, user management, dashboards, subscriptions, role-based access, APIs and scalable application architecture.',
    },
    {
      icon: <Database size={20} />,
      color: 'green',
      title: 'Business Dashboards & Portals',
      desc: 'Develop custom dashboards, CRM systems, management portals and internal business applications with reporting, filtering, analytics and secure user access.',
    },
    {
      icon: <Server size={20} />,
      color: 'orange',
      title: 'MERN Backend & API Development',
      desc: 'Node.js and Express.js backend development with MongoDB, REST APIs, authentication, validation, business logic and third-party integrations.',
    },
    {
      icon: <Rocket size={20} />,
      color: 'amber',
      title: 'MERN Stack MVP Development',
      desc: 'MERN stack development for startups that need to validate an idea, launch core functionality and establish a technical foundation that can evolve with the product.',
    },
    {
      icon: <Settings size={20} />,
      color: 'indigo',
      title: 'MERN Migration & Modernisation',
      desc: 'Modernise existing applications using React, Node.js, Express.js and MongoDB with improved interfaces, APIs, application structure and maintainable code.',
    },
  ];

  const whyMern = [
    {
      title: 'JavaScript Across the Full Stack',
      desc: 'MERN uses JavaScript across frontend and backend development, providing a consistent technology stack for building modern full-stack web applications.',
    },
    {
      title: 'Flexible MongoDB Data Models',
      desc: 'MongoDB supports flexible document-based data structures that work well for many modern applications and evolving product requirements.',
    },
    {
      title: 'Component-Based React Interfaces',
      desc: 'React enables reusable UI components for dashboards, SaaS platforms, portals and interactive business applications.',
    },
    {
      title: 'Node.js Backend Development',
      desc: 'Node.js provides a server-side JavaScript runtime for building APIs, authentication systems, integrations and real-time application functionality.',
    },
    {
      title: 'Maintainable Application Architecture',
      desc: 'A properly structured MERN application separates frontend, backend and database responsibilities while keeping the overall development stack consistent.',
    },
    {
      title: 'Established Development Ecosystem',
      desc: 'MongoDB, Express.js, React.js and Node.js provide established ecosystems for authentication, testing, payments, deployment, monitoring and application development.',
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
        'React.js',
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
      desc: 'We review your product requirements, target users, workflows, integrations and business objectives before defining the MERN application architecture.',
    },
    {
      n: '02',
      title: 'Database & Backend Foundation',
      desc: 'MongoDB data models, Express.js routes, authentication, validation and core backend APIs are structured around the requirements of your application.',
    },
    {
      n: '03',
      title: 'React Frontend Development',
      desc: 'Reusable React components and responsive interfaces are developed and connected to the Node.js backend through structured API communication.',
    },
    {
      n: '04',
      title: 'Features & Integrations',
      desc: 'Business logic, payment services, notifications, third-party APIs and other project-specific functionality are integrated into the application.',
    },
    {
      n: '05',
      title: 'Testing & Optimisation',
      desc: 'The application is reviewed for functionality, responsive behaviour, API reliability, validation, security considerations and performance before release.',
    },
    {
      n: '06',
      title: 'Deployment & Handover',
      desc: 'We prepare the MERN application for production deployment and provide relevant project code, configuration and technical handover according to the project agreement.',
    },
  ];

  const faqs = [
    {
      q: 'What is MERN stack development?',
      a: 'MERN stack development uses MongoDB for data storage, Express.js for backend application logic, React.js for the frontend user interface and Node.js as the server-side JavaScript runtime. Together, these technologies are used to build full-stack JavaScript web applications.',
    },
    {
      q: 'What MERN stack development services does DevZore provide?',
      a: 'DevZore provides MERN stack development services for custom web applications, SaaS products, startup MVPs, business dashboards, customer portals, backend APIs, MongoDB databases and existing MERN applications.',
    },
    {
      q: 'What types of applications can be built with MERN?',
      a: 'MERN can be used for SaaS platforms, business applications, admin dashboards, customer portals, e-commerce systems, startup MVPs, management software and other custom web applications.',
    },
    {
      q: 'How much does MERN stack development cost?',
      a: 'MERN stack development cost depends on the application scope, number of features, UI requirements, user roles, integrations, backend complexity and deployment requirements. DevZore reviews the requirements before preparing a project-specific proposal.',
    },
    {
      q: 'How long does a MERN stack project take?',
      a: 'Development time depends on the size and complexity of the application. A focused MVP may require considerably less development work than a multi-role SaaS platform or complex business management system. A project timeline can be estimated after the required features and deliverables are defined.',
    },
    {
      q: 'Is MERN stack suitable for SaaS development?',
      a: 'Yes. MERN can be used to build SaaS applications with authentication, dashboards, subscriptions, role-based permissions, APIs, notifications, account management and other product-specific functionality.',
    },
    {
      q: 'Can you build REST APIs for a MERN application?',
      a: 'Yes. Node.js and Express.js can be used to create REST APIs for React applications, mobile applications and third-party integrations. API development can include authentication, validation, database operations, permissions and external service integrations.',
    },
    {
      q: 'Can MERN applications integrate payment gateways?',
      a: 'Yes. MERN applications can integrate supported payment providers through their APIs and webhooks. The appropriate payment gateway depends on the project requirements, business location and provider availability.',
    },
    {
      q: 'Can DevZore work with an existing MERN stack project?',
      a: 'Yes. We can review an existing React, Node.js, Express.js or MongoDB application for new features, bug fixes, API development, UI improvements, maintenance, integrations or architecture improvements.',
    },
    {
      q: 'Can I hire a MERN stack developer for my startup or business?',
      a: 'Yes. DevZore provides project-based MERN stack development for startups and businesses that need help building or improving web applications, SaaS platforms, dashboards, APIs and other full-stack JavaScript products.',
    },
    {
      q: 'Do you provide MERN stack development worldwide?',
      a: 'Yes. DevZore works remotely and provides MERN stack development services for businesses and startups that need custom full-stack web application development.',
    },
  ];

  const relatedServices = [
    {
      icon: <Server size={22} />,
      title: 'Backend & API Development',
      desc: 'Node.js, Express.js, REST APIs, authentication, databases and integrations for modern applications.',
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

  const solutions = [
    'Custom MERN Web Applications',
    'MERN SaaS Development',
    'React + Node.js Development',
    'MongoDB Application Development',
    'Express.js REST APIs',
    'MERN MVP Development',
    'MERN Dashboard Development',
    'Existing MERN Project Support',
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

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://devzore.com/mern-stack-development#service',
    name: 'MERN Stack Development Services',
    url: 'https://devzore.com/mern-stack-development',
    description:
      'Custom MERN stack development services using MongoDB, Express.js, React.js and Node.js for web applications, SaaS products, dashboards, APIs and startup MVPs.',
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
        name: 'MERN Stack Development',
        item: 'https://devzore.com/mern-stack-development',
      },
    ],
  };

  const whatsappMessage = encodeURIComponent(
    'Hi DevZore! I would like to discuss a MERN stack development project.'
  );

  return (
    <>
      <Helmet>
        {/* Page title, description, canonical, OG and Twitter tags
            are handled globally by SEOManager. */}

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
          d ? 'bg-[#030303]' : 'bg-white'
        }`}
      >
        {/* HERO */}
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
                    Remote Development Worldwide
                  </div>
                </div>

                <h1
                  id="mern-heading"
                  className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 ${
                    d ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  MERN Stack Development Services{' '}
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
                  JavaScript Development
                </p>

                <p
                  className={`text-base leading-relaxed mb-5 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  DevZore is a software development agency providing{' '}
                  <strong
                    className={d ? 'text-gray-200' : 'text-gray-800'}
                  >
                    custom MERN stack development services
                  </strong>{' '}
                  for startups and businesses. We build web applications,
                  SaaS platforms, dashboards, portals, MVPs and custom
                  business software using MongoDB, Express.js, React.js and
                  Node.js.
                </p>

                <p
                  className={`text-base leading-relaxed mb-8 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Our full-stack MERN development approach connects responsive
                  React interfaces with Node.js and Express.js backend APIs,
                  MongoDB databases, authentication and third-party
                  integrations to create maintainable applications around your
                  actual business requirements.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    'Full-Stack MERN Development',
                    'Custom REST API Development',
                    'Responsive React Applications',
                    'MongoDB Database Development',
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
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                  >
                    Discuss Your MERN Project
                    <ArrowRight size={14} />
                  </Link>

                  <a
                    href={`https://wa.me/923348004300?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* MERN STACK EXPLANATION */}
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
                      desc: 'Document-oriented database used to store and manage application data.',
                    },
                    {
                      letter: 'E',
                      name: 'Express.js',
                      role: 'Backend Framework',
                      color: d ? 'text-gray-300' : 'text-gray-700',
                      bg: d ? 'bg-white/[0.06]' : 'bg-gray-100',
                      desc: 'Node.js framework used for APIs, middleware, routes and server-side application logic.',
                    },
                    {
                      letter: 'R',
                      name: 'React.js',
                      role: 'Frontend',
                      color: 'text-blue-400',
                      bg: d ? 'bg-blue-500/10' : 'bg-blue-50',
                      desc: 'Component-based JavaScript library for interactive and reusable user interfaces.',
                    },
                    {
                      letter: 'N',
                      name: 'Node.js',
                      role: 'Runtime',
                      color: 'text-green-400',
                      bg: d ? 'bg-green-500/10' : 'bg-green-50',
                      desc: 'Server-side JavaScript runtime used for APIs, business logic and backend services.',
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
                        <span className={`text-lg font-black ${item.color}`}>
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
                    MongoDB + Express.js + React.js + Node.js for complete
                    full-stack web application development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
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
                Custom MERN Stack Development Services
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Our MERN stack web development services cover complete
                full-stack applications, SaaS products, backend systems,
                dashboards, portals, startup MVPs and custom business
                software.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whatWeBuild.map((item) => (
                <article
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
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* STARTUPS & BUSINESSES */}
        <section
          aria-labelledby="mern-company-heading"
          className={`py-14 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <p className="text-purple-500 text-[11px] font-black uppercase tracking-widest mb-3">
                  Full-Stack Development
                </p>

                <h2
                  id="mern-company-heading"
                  className={`text-3xl font-black mb-5 ${
                    d ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  MERN Stack Development for Startups & Businesses
                </h2>

                <p
                  className={`text-sm leading-7 mb-4 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Businesses often need more than a standard website. A custom
                  MERN application can combine user interfaces, business
                  workflows, APIs, databases, authentication and integrations
                  within one connected software product.
                </p>

                <p
                  className={`text-sm leading-7 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Whether you are a startup building an MVP or an established
                  business developing an internal system, customer portal,
                  dashboard or SaaS product, DevZore can provide project-based
                  MERN application development around your requirements.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: <Rocket size={18} />,
                    title: 'Startup Products',
                    desc: 'MVPs and product foundations for new software ideas.',
                  },
                  {
                    icon: <Users size={18} />,
                    title: 'Business Applications',
                    desc: 'Custom applications built around operational workflows.',
                  },
                  {
                    icon: <Layers size={18} />,
                    title: 'SaaS Platforms',
                    desc: 'User accounts, dashboards, subscriptions and APIs.',
                  },
                  {
                    icon: <Lock size={18} />,
                    title: 'Secure Portals',
                    desc: 'Authenticated customer, staff and administration systems.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className={`p-5 rounded-2xl border ${
                      d
                        ? 'bg-white/[0.02] border-white/[0.06]'
                        : 'bg-[#fafafa] border-gray-200'
                    }`}
                  >
                    <div className="text-purple-500 mb-3">{item.icon}</div>

                    <h3
                      className={`text-[14px] font-bold mb-2 ${
                        d ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-[12px] leading-relaxed ${
                        d ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY MERN */}
        <section
          aria-labelledby="whymern-heading"
          className={`py-14 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
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
                frontend interfaces, server-side development, APIs and
                database operations within a modern full-stack development
                environment.
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

        {/* TECH STACK */}
        <section
          aria-labelledby="tech-heading"
          className={`py-14 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
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
                MERN Stack Technologies & Development Tools
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Technologies used for MongoDB, Express.js, React.js and
                Node.js application development, integrations and deployment.
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

        {/* DEVELOPMENT PROCESS */}
        <section
          aria-labelledby="process-heading"
          className={`py-14 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
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
                A structured workflow covering application requirements,
                MongoDB architecture, backend development, React interfaces,
                integrations, testing and deployment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
          </div>
        </section>

        {/* MERN SOLUTIONS */}
        <section
          aria-labelledby="mern-solutions-heading"
          className={`py-14 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={`rounded-3xl border p-7 lg:p-10 ${
                d
                  ? 'bg-white/[0.02] border-white/[0.06]'
                  : 'bg-[#fafafa] border-gray-200'
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
                    Custom MERN Application Development
                  </h2>

                  <p
                    className={`text-[14px] leading-relaxed mb-4 ${
                      d ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    Need a MERN stack developer for a new application or an
                    existing software product? DevZore provides project-based
                    MERN software development covering React interfaces,
                    Node.js and Express.js APIs, MongoDB databases and
                    application integrations.
                  </p>

                  <p
                    className={`text-[14px] leading-relaxed ${
                      d ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    The architecture and technology choices are planned around
                    the requirements of your product rather than applying the
                    same structure to every project.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {solutions.map((item) => (
                    <div
                      key={item}
                      className={`flex items-center gap-2 p-3 rounded-xl border ${
                        d
                          ? 'bg-white/[0.02] border-white/[0.06] text-gray-300'
                          : 'bg-white border-gray-200 text-gray-700'
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

        {/* REMOTE / WORLDWIDE */}
        <section
          aria-labelledby="worldwide-mern-heading"
          className={`py-14 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div
              className={`w-12 h-12 mx-auto rounded-2xl flex items-center justify-center mb-5 ${
                d
                  ? 'bg-purple-500/10 text-purple-400'
                  : 'bg-purple-50 text-purple-600'
              }`}
            >
              <Globe size={22} />
            </div>

            <p className="text-purple-500 text-[11px] font-black uppercase tracking-widest mb-3">
              Remote Development
            </p>

            <h2
              id="worldwide-mern-heading"
              className={`text-3xl font-black mb-4 ${
                d ? 'text-white' : 'text-gray-900'
              }`}
            >
              MERN Stack Development Services Worldwide
            </h2>

            <p
              className={`text-base leading-relaxed max-w-3xl mx-auto ${
                d ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              DevZore provides remote MERN stack application development for
              startups and businesses. Projects can be managed remotely with
              defined requirements, development milestones, code
              collaboration, testing and technical handover.
            </p>
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
              {faqs.map((faq, index) => {
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
                      aria-controls={`mern-faq-${index}`}
                      className="w-full p-5 text-left flex items-start justify-between gap-4"
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
                      id={`mern-faq-${index}`}
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen
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
                );
              })}
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}
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
                Related Development Services
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {relatedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
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
        <section className="py-14 lg:py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div
              className={`w-12 h-12 mx-auto mb-5 rounded-2xl flex items-center justify-center ${
                d
                  ? 'bg-purple-500/10 text-purple-400'
                  : 'bg-purple-50 text-purple-600'
              }`}
            >
              <Zap size={21} />
            </div>

            <h2
              className={`text-3xl md:text-4xl font-black mb-4 ${
                d ? 'text-white' : 'text-gray-900'
              }`}
            >
              Need a MERN Stack Developer for Your Project?
            </h2>

            <p
              className={`text-base mb-8 max-w-2xl mx-auto leading-relaxed ${
                d ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Tell us what you want to build. We can discuss your React
              frontend, Node.js and Express.js backend, MongoDB database,
              APIs, authentication, integrations and deployment requirements.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
              >
                Discuss Your MERN Project
                <ArrowRight size={15} />
              </Link>

              <a
                href={`https://wa.me/923348004300?text=${whatsappMessage}`}
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