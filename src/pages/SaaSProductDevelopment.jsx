import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Users,
  CreditCard,
  BarChart3,
  Lock,
  Zap,
  RefreshCw,
  Server,
  Settings,
  Globe,
  CheckCircle,
  Plus,
  Minus,
  ArrowRight,
  Layers,
  Code2,
  Rocket,
} from 'lucide-react';

const SaaSProductDevelopment = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const features = [
    {
      icon: <Users size={20} />,
      color: 'purple',
      title: 'Multi-Tenant SaaS Architecture',
      desc: 'Build SaaS applications with tenant-aware data models, workspace management, organization settings, permissions and scalable application architecture.',
    },
    {
      icon: <CreditCard size={20} />,
      color: 'green',
      title: 'Subscription Billing & Payments',
      desc: 'Integrate subscription plans, recurring billing, trials, upgrades, downgrades, invoices and payment webhooks using services such as Stripe when they fit your product requirements.',
    },
    {
      icon: <BarChart3 size={20} />,
      color: 'blue',
      title: 'SaaS Analytics Dashboards',
      desc: 'Create dashboards for product metrics, customer activity, usage data, revenue reporting and operational insights using modern React visualization tools.',
    },
    {
      icon: <Lock size={20} />,
      color: 'red',
      title: 'Authentication & Access Control',
      desc: 'Secure authentication flows, account management, team invitations, role-based access control and optional third-party sign-in for modern SaaS applications.',
    },
    {
      icon: <Zap size={20} />,
      color: 'amber',
      title: 'API-First SaaS Development',
      desc: 'REST or GraphQL APIs designed around your product requirements with validation, authorization, rate limiting, documentation and integrations for web or mobile clients.',
    },
    {
      icon: <RefreshCw size={20} />,
      color: 'cyan',
      title: 'User Onboarding Experience',
      desc: 'Design onboarding flows, setup steps, product guidance and account configuration experiences that help users understand and start using your SaaS product.',
    },
    {
      icon: <Server size={20} />,
      color: 'indigo',
      title: 'Cloud-Ready Infrastructure',
      desc: 'Structure SaaS applications for modern cloud deployment with environment configuration, caching, database management, CI/CD workflows and deployment automation where appropriate.',
    },
    {
      icon: <Settings size={20} />,
      color: 'orange',
      title: 'SaaS Admin Panel Development',
      desc: 'Build internal administration tools for managing users, organizations, subscriptions, application settings, support operations and product-specific workflows.',
    },
    {
      icon: <Globe size={20} />,
      color: 'pink',
      title: 'International SaaS Applications',
      desc: 'Support international users with responsive interfaces, timezone-aware workflows, localization-ready architecture and product experiences designed for different markets.',
    },
  ];

  const saasTypes = [
    {
      title: 'B2B SaaS Platforms',
      desc: 'Custom B2B SaaS software for CRM, project management, operations, reporting, collaboration, business automation and internal productivity.',
    },
    {
      title: 'Vertical SaaS Solutions',
      desc: 'Industry-focused SaaS applications designed around specialized workflows for education, real estate, logistics, retail and professional services.',
    },
    {
      title: 'SaaS MVP Development',
      desc: 'Focused SaaS MVP development for startups and founders who want to validate a software idea with essential functionality before expanding the product.',
    },
    {
      title: 'Marketplace SaaS Platforms',
      desc: 'Platforms connecting different user groups with accounts, dashboards, payments, marketplace functionality and SaaS-style management features.',
    },
    {
      title: 'AI-Powered SaaS Applications',
      desc: 'SaaS products that integrate suitable AI APIs for assistants, content workflows, document processing, intelligent search, automation and data-driven features.',
    },
    {
      title: 'Mobile-Connected SaaS',
      desc: 'SaaS backends and web dashboards designed to work alongside mobile applications through shared APIs, authentication and centralized business logic.',
    },
  ];

  const benefits = [
    {
      icon: <Layers size={18} />,
      title: 'Product-Focused Architecture',
      desc: 'Architecture is planned around your users, workflows, business model and expected product evolution instead of forcing every project into the same template.',
    },
    {
      icon: <Code2 size={18} />,
      title: 'Maintainable SaaS Development',
      desc: 'Reusable components, organized APIs, clear project structure and practical documentation make future product development easier to manage.',
    },
    {
      icon: <Lock size={18} />,
      title: 'Security-Conscious Engineering',
      desc: 'Authentication, authorization, input validation, secure configuration and dependency management are considered throughout development.',
    },
    {
      icon: <Rocket size={18} />,
      title: 'Built for Future Growth',
      desc: 'We structure SaaS products so new features, integrations, users and workflows can be added without unnecessary rebuilding.',
    },
  ];

  const techStack = [
    {
      category: 'Frontend Development',
      items: [
        'React.js',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'TanStack Query',
      ],
    },
    {
      category: 'Backend Development',
      items: [
        'Node.js',
        'Express.js',
        'REST APIs',
        'GraphQL',
        'Socket.io',
      ],
    },
    {
      category: 'Databases',
      items: [
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Prisma',
        'Mongoose',
      ],
    },
    {
      category: 'Billing & Integrations',
      items: [
        'Stripe',
        'Payment Webhooks',
        'Email APIs',
        'Cloud Storage',
        'Third-Party APIs',
      ],
    },
    {
      category: 'Cloud & DevOps',
      items: [
        'AWS',
        'Docker',
        'GitHub Actions',
        'Vercel',
        'Nginx',
      ],
    },
    {
      category: 'Quality & Monitoring',
      items: [
        'API Testing',
        'Error Monitoring',
        'Analytics',
        'Logging',
        'Performance Testing',
      ],
    },
  ];

  const process = [
    {
      n: '01',
      title: 'SaaS Discovery & Product Planning',
      desc: 'We discuss your SaaS idea, target users, business model, core workflows, integrations and product priorities before defining the technical direction.',
    },
    {
      n: '02',
      title: 'Architecture & Database Design',
      desc: 'We plan application structure, database models, tenant strategy, authentication, APIs, integrations and deployment requirements around your product.',
    },
    {
      n: '03',
      title: 'UI/UX & Product Experience',
      desc: 'Key screens, SaaS dashboards, onboarding flows, account settings and responsive interfaces are designed around clear user journeys and practical usability.',
    },
    {
      n: '04',
      title: 'SaaS Application Development',
      desc: 'Frontend, backend, database and third-party integrations are developed in organized stages so core functionality can be reviewed as the product progresses.',
    },
    {
      n: '05',
      title: 'Testing & Optimization',
      desc: 'We review application functionality, responsive behavior, API handling, permissions, error states and performance before production release.',
    },
    {
      n: '06',
      title: 'Deployment & Handover',
      desc: 'The SaaS application is prepared for production deployment, environment configuration and project handover with the documentation required for ongoing development.',
    },
  ];

  const faqs = [
    {
      q: 'What is SaaS product development?',
      a: 'SaaS product development is the process of designing and building cloud-based software that users access online, commonly through an account or subscription model. A SaaS product can include authentication, dashboards, billing, team management, APIs, analytics and cloud infrastructure depending on its requirements.',
    },
    {
      q: 'What SaaS development services does DevZore provide?',
      a: 'DevZore provides custom SaaS development services including SaaS MVP development, React dashboards, Node.js backend development, database architecture, authentication, multi-tenant functionality, subscription billing integrations, admin panels, APIs and production deployment.',
    },
    {
      q: 'How much does SaaS product development cost?',
      a: 'SaaS development cost depends on product scope, user roles, dashboard complexity, billing requirements, integrations, backend architecture and other features. DevZore reviews the requirements first and then prepares a project-specific proposal.',
    },
    {
      q: 'How long does it take to build a SaaS application?',
      a: 'There is no single development timeline for every SaaS product. A focused SaaS MVP can require significantly less work than a multi-role platform with billing, analytics, integrations and complex workflows. The timeline should be estimated after reviewing the actual scope and priorities.',
    },
    {
      q: 'Can you build a SaaS MVP for a startup?',
      a: 'Yes. DevZore can develop a focused SaaS MVP around the core functionality needed to validate a product idea. The architecture can also be planned so additional functionality can be introduced as the product evolves.',
    },
    {
      q: 'Do you build multi-tenant SaaS applications?',
      a: 'Yes. When multi-tenancy is appropriate, we can design organization or workspace-based SaaS applications with tenant-aware data access, user roles, permissions and administration workflows.',
    },
    {
      q: 'Can you integrate Stripe subscription billing?',
      a: 'Yes. Depending on project requirements and service availability, Stripe can be integrated for subscriptions, checkout, plan changes, billing events and webhook-based payment workflows.',
    },
    {
      q: 'Can you add AI features to a SaaS product?',
      a: 'Yes. Suitable AI APIs can be integrated for assistants, content workflows, document processing, intelligent search, automation and other product-specific functionality.',
    },
    {
      q: 'Can you build both the SaaS frontend and backend?',
      a: 'Yes. DevZore provides full-stack SaaS development covering frontend interfaces, backend APIs, database architecture, authentication, integrations and deployment configuration.',
    },
    {
      q: 'Which technologies do you use for SaaS development?',
      a: 'Technology is selected according to product requirements. Common choices include React or Next.js for frontend development, Node.js and Express for backend APIs, MongoDB or PostgreSQL for data storage, and modern cloud deployment services.',
    },
    {
      q: 'Can you develop a SaaS dashboard in React?',
      a: 'Yes. We build React SaaS dashboards with account management, tables, filters, charts, forms, permissions, responsive layouts and API-driven data according to the application requirements.',
    },
    {
      q: 'Can you develop Node.js APIs for a SaaS platform?',
      a: 'Yes. Node.js and Express can be used to build backend APIs for authentication, users, organizations, billing, dashboards, integrations, administration and other SaaS functionality.',
    },
    {
      q: 'Can DevZore work on an existing SaaS application?',
      a: 'Yes. Existing SaaS applications can be reviewed for new feature development, frontend improvements, API integrations, dashboard development, backend changes and other product requirements.',
    },
    {
      q: 'Do you provide SaaS development services internationally?',
      a: 'DevZore provides remote SaaS and software development services for startups, founders and businesses that can work with our development process regardless of location.',
    },
    {
      q: 'Will I own the SaaS source code?',
      a: 'Project ownership, repositories, credentials, design files and handover terms should be defined clearly in the project agreement. DevZore can structure projects so clients receive the agreed source code and project assets at handover.',
    },
  ];

  const relatedServices = [
    {
      icon: <Layers size={21} />,
      title: 'MERN Stack Development',
      desc: 'Full-stack MongoDB, Express, React and Node.js development for modern web applications and SaaS platforms.',
      path: '/mern-stack-development',
    },
    {
      icon: <Server size={21} />,
      title: 'Backend & API Development',
      desc: 'Backend systems, REST APIs, GraphQL services, databases and integrations for web, mobile and SaaS products.',
      path: '/backend-api',
    },
    {
      icon: <Rocket size={21} />,
      title: 'Startup MVP Development',
      desc: 'Turn a software idea into a focused MVP with the essential functionality required for early users and product validation.',
      path: '/startup-mvp',
    },
  ];

  const colorMap = {
    purple: d
      ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
      : 'bg-purple-50 border-purple-100 text-purple-600',
    green: d
      ? 'bg-green-500/10 border-green-500/20 text-green-400'
      : 'bg-green-50 border-green-100 text-green-600',
    blue: d
      ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
      : 'bg-blue-50 border-blue-100 text-blue-600',
    red: d
      ? 'bg-red-500/10 border-red-500/20 text-red-400'
      : 'bg-red-50 border-red-100 text-red-600',
    amber: d
      ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'
      : 'bg-amber-50 border-amber-100 text-amber-600',
    cyan: d
      ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
      : 'bg-cyan-50 border-cyan-100 text-cyan-600',
    indigo: d
      ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
      : 'bg-indigo-50 border-indigo-100 text-indigo-600',
    orange: d
      ? 'bg-orange-500/10 border-orange-500/20 text-orange-400'
      : 'bg-orange-50 border-orange-100 text-orange-600',
    pink: d
      ? 'bg-pink-500/10 border-pink-500/20 text-pink-400'
      : 'bg-pink-50 border-pink-100 text-pink-600',
  };

  return (
    <>
      <Helmet>
        {/* Service Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': 'https://devzore.com/saas-product-development#service',
            name: 'SaaS Product Development Services',
            description:
              'Custom SaaS product development including SaaS MVPs, multi-tenant applications, subscription billing, React dashboards, Node.js APIs and cloud-ready software architecture.',
            url: 'https://devzore.com/saas-product-development',
            provider: {
              '@id': 'https://devzore.com/#organization',
            },
            serviceType: 'SaaS Product Development',
            areaServed: 'Worldwide',
          })}
        </script>

        {/* FAQ Structured Data */}
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

        {/* Breadcrumb Structured Data */}
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
                name: 'SaaS Product Development',
                item: 'https://devzore.com/saas-product-development',
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
          aria-labelledby="saas-heading"
          className={`pt-27 pb-10 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${
                      d
                        ? 'bg-purple-600/10 border-purple-500/20 text-purple-400'
                        : 'bg-purple-50 border-purple-200 text-purple-700'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                    SaaS Product Development
                  </div>

                  <div
                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold border ${
                      d
                        ? 'bg-green-500/10 border-green-500/20 text-green-400'
                        : 'bg-green-50 border-green-200 text-green-700'
                    }`}
                  >
                    <Globe size={10} />
                    Available Worldwide
                  </div>
                </div>

                <h1
                  id="saas-heading"
                  className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5 ${
                    d ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Custom SaaS Product Development{' '}
                  <span className="text-purple-600">
                    for Modern Businesses
                  </span>
                </h1>

                <p
                  className={`text-lg font-semibold mb-5 ${
                    d ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  SaaS MVPs · Multi-Tenant Platforms · Subscription Billing ·
                  React Dashboards · Node.js APIs
                </p>

                <p
                  className={`text-base leading-relaxed mb-5 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  DevZore provides{' '}
                  <strong className={d ? 'text-white' : 'text-gray-900'}>
                    SaaS product development services
                  </strong>{' '}
                  for startups, founders and businesses that need custom
                  cloud-based software. We build SaaS applications with modern
                  frontend experiences, backend APIs, databases,
                  authentication, dashboards, billing integrations and
                  administration tools.
                </p>

                <p
                  className={`text-base leading-relaxed mb-8 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Whether you need a{' '}
                  <strong className={d ? 'text-white' : 'text-gray-900'}>
                    SaaS MVP
                  </strong>
                  , B2B SaaS platform, multi-tenant application or an existing
                  SaaS product that needs new features, our development process
                  focuses on maintainable architecture, usability and future
                  product growth.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    onClick={scrollTop}
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                  >
                    Discuss Your SaaS Project
                    <ArrowRight size={14} />
                  </Link>

                  <a
                    href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20a%20SaaS%20product."
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
                    WhatsApp Us
                  </a>
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
                  SaaS Development Capabilities
                </p>

                <div className="space-y-3">
                  {[
                    {
                      item: 'Multi-tenant application architecture',
                      note: 'Organizations, workspaces and tenant-aware data',
                    },
                    {
                      item: 'Subscription billing integration',
                      note: 'Plans, checkout and billing workflows',
                    },
                    {
                      item: 'Authentication & user management',
                      note: 'Accounts, teams, roles and permissions',
                    },
                    {
                      item: 'SaaS dashboards & reporting',
                      note: 'Business data, activity and product insights',
                    },
                    {
                      item: 'Backend API development',
                      note: 'REST or GraphQL based on product requirements',
                    },
                    {
                      item: 'Third-party API integrations',
                      note: 'Payments, email, storage and external services',
                    },
                    {
                      item: 'SaaS admin panel',
                      note: 'Manage users, accounts and application settings',
                    },
                    {
                      item: 'Responsive product interface',
                      note: 'Desktop, tablet and mobile-friendly experiences',
                    },
                    {
                      item: 'Cloud deployment preparation',
                      note: 'Environment, CI/CD and production configuration',
                    },
                  ].map((item) => (
                    <div
                      key={item.item}
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
                          {item.item}
                        </p>

                        <p
                          className={`text-[10px] ${
                            d ? 'text-gray-500' : 'text-gray-400'
                          }`}
                        >
                          {item.note}
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
                    className={`text-[11px] font-semibold text-center ${
                      d ? 'text-purple-400' : 'text-purple-700'
                    }`}
                  >
                    Remote SaaS development services available worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES / FEATURES */}
        <section
          aria-labelledby="features-heading"
          className={`py-16 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <p className="text-[11px] font-black uppercase tracking-widest text-purple-500 mb-3">
                SaaS Development Services
              </p>

              <h2
                id="features-heading"
                className={`text-3xl font-black mb-4 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Custom SaaS Application Development Services
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                We develop the frontend, backend and product infrastructure
                required for modern SaaS applications, from user accounts and
                subscription billing to dashboards, APIs, integrations and
                administration tools.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((item) => (
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

        {/* SAAS TYPES */}
        <section
          aria-labelledby="saas-types-heading"
          className={`py-16 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <p className="text-[11px] font-black uppercase tracking-widest text-purple-500 mb-3">
                SaaS Solutions
              </p>

              <h2
                id="saas-types-heading"
                className={`text-3xl font-black mb-4 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Types of SaaS Products We Develop
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                From SaaS MVP development and B2B software to AI-enabled
                applications and marketplace platforms, the product
                architecture is shaped around your users and business
                workflows.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {saasTypes.map((type) => (
                <div
                  key={type.title}
                  className={`p-6 rounded-2xl border transition-all hover:border-purple-500/20 ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                      : 'bg-white border-gray-200 hover:shadow-sm'
                  }`}
                >
                  <CheckCircle size={15} className="text-purple-500 mb-3" />

                  <h3
                    className={`text-[14px] font-bold mb-2 ${
                      d ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {type.title}
                  </h3>

                  <p
                    className={`text-[13px] leading-relaxed ${
                      d ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {type.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section
          aria-labelledby="why-saas-heading"
          className={`py-16 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <p className="text-[11px] font-black uppercase tracking-widest text-purple-500 mb-3">
                SaaS Engineering
              </p>

              <h2
                id="why-saas-heading"
                className={`text-3xl font-black mb-4 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                SaaS Engineering Focused on Long-Term Product Development
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                A SaaS application needs more than a dashboard. Its
                architecture should support users, permissions, business data,
                integrations and future product changes without unnecessary
                complexity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className={`p-6 rounded-2xl border ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
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

        {/* SEARCH INTENT CONTENT */}
        <section
          aria-labelledby="saas-search-heading"
          className={`py-16 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-[11px] font-black uppercase tracking-widest text-purple-500 mb-3">
                  Full-Stack SaaS Development
                </p>

                <h2
                  id="saas-search-heading"
                  className={`text-3xl font-black mb-5 ${
                    d ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  SaaS Development for Startups, B2B Products and Custom
                  Software Platforms
                </h2>

                <p
                  className={`text-[14px] leading-relaxed mb-4 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  If you are planning a new SaaS startup, replacing manual
                  business processes with cloud software or expanding an
                  existing product, DevZore can work across the complete
                  application stack.
                </p>

                <p
                  className={`text-[14px] leading-relaxed ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Our SaaS application development work can include React
                  frontend development, Node.js backend APIs, MongoDB or
                  PostgreSQL databases, authentication, role-based access,
                  subscription payments, dashboards, admin panels and
                  third-party API integrations.
                </p>
              </div>

              <div
                className={`p-7 rounded-2xl border ${
                  d
                    ? 'bg-white/[0.02] border-white/[0.06]'
                    : 'bg-[#fafafa] border-gray-200'
                }`}
              >
                <p
                  className={`text-[12px] font-black uppercase tracking-widest mb-5 ${
                    d ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  SaaS Development Expertise
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    'SaaS Product Development',
                    'SaaS MVP Development',
                    'B2B SaaS Development',
                    'Multi-Tenant SaaS',
                    'React SaaS Dashboard',
                    'Node.js SaaS Backend',
                    'SaaS API Development',
                    'Stripe Subscription Integration',
                    'SaaS Admin Panel',
                    'MongoDB',
                    'PostgreSQL',
                    'Authentication & RBAC',
                    'Third-Party API Integration',
                    'Cloud Deployment',
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

        {/* TECH STACK */}
        <section
          aria-labelledby="tech-heading"
          className={`py-16 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
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
                SaaS Development Technology Stack
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                We select technologies according to application requirements
                instead of forcing every SaaS product onto the same technology
                stack.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStack.map((category) => (
                <div
                  key={category.category}
                  className={`p-5 rounded-2xl border ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <p className="text-[11px] font-black uppercase tracking-widest mb-3 text-purple-500">
                    {category.category}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {category.items.map((tech) => (
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
            d ? 'border-white/[0.06]' : 'border-gray-100'
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
                Our SaaS Product Development Process
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                A structured process from SaaS product planning and
                architecture through development, testing and deployment.
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

        {/* FAQ */}
        <section
          aria-labelledby="faq-heading"
          className={`py-16 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
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
                SaaS Product Development FAQ
              </h2>

              <p
                className={`text-base ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Common questions about custom SaaS application development,
                SaaS MVPs, architecture, subscription billing and technology.
              </p>
            </div>

            <div className="space-y-3">
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
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section
          aria-labelledby="related-services-heading"
          className={`py-16 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <p className="text-[11px] font-black uppercase tracking-widest text-purple-500 mb-2">
                Explore More
              </p>

              <h2
                id="related-services-heading"
                className={`text-2xl font-black ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Related Software Development Services
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {relatedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={scrollTop}
                  className={`group p-6 rounded-2xl border transition-all duration-300 ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-purple-500/30'
                      : 'bg-white border-gray-200 hover:border-purple-200 hover:shadow-sm'
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
                    Learn More
                    <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-[11px] font-black uppercase tracking-widest text-purple-500 mb-3">
              Start Your SaaS Project
            </p>

            <h2
              className={`text-3xl font-black mb-4 ${
                d ? 'text-white' : 'text-gray-900'
              }`}
            >
              Have a SaaS Product Idea?
            </h2>

            <p
              className={`text-base mb-8 max-w-2xl mx-auto ${
                d ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Tell us about your SaaS application, target users and core
              features. We can discuss the product architecture, technology
              options and a practical development approach for your
              requirements.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                onClick={scrollTop}
                className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
              >
                Discuss Your SaaS Project
                <ArrowRight size={15} />
              </Link>

              <Link
                to="/allservices"
                onClick={scrollTop}
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
        </section>
      </div>
    </>
  );
};

export default SaaSProductDevelopment;