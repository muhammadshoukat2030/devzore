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
  Monitor,
  ChevronDown,
  ChevronUp,
  Database,
  Cloud,
} from 'lucide-react';

const SaaSProductDevelopment = ({ isDark }) => {
  const d = isDark;

  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl =
    'https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20a%20SaaS%20development%20project.';

  /* =========================
     SERVICES
  ========================= */

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
      desc: 'Integrate subscription plans, recurring billing, trials, upgrades, downgrades, invoices and payment webhooks using suitable payment providers based on your product requirements.',
    },
    {
      icon: <BarChart3 size={20} />,
      color: 'blue',
      title: 'SaaS Analytics Dashboards',
      desc: 'Create SaaS dashboards for product metrics, customer activity, usage data, revenue reporting and operational insights using modern React interfaces.',
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
      title: 'SaaS API Development',
      desc: 'REST or GraphQL APIs designed around your SaaS product requirements with validation, authorization, rate limiting, documentation and third-party integrations.',
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
      title: 'Cloud-Ready SaaS Infrastructure',
      desc: 'Structure SaaS applications for modern cloud deployment with environment configuration, caching, database management, CI/CD workflows and deployment automation where appropriate.',
    },
    {
      icon: <Settings size={20} />,
      color: 'orange',
      title: 'SaaS Admin Panel Development',
      desc: 'Build internal administration tools for managing users, organizations, subscriptions, application settings, support operations and product-specific workflows.',
    },
    {
      icon: <Monitor size={20} />,
      color: 'pink',
      title: 'SaaS UI/UX Design',
      desc: 'SaaS UI/UX design for dashboards, onboarding flows, account settings, data-heavy interfaces and responsive product experiences focused on usability and clear user journeys.',
    },
    {
      icon: <Code2 size={20} />,
      color: 'blue',
      title: 'Custom SaaS Software Development',
      desc: 'Custom SaaS software development for startups and businesses that need purpose-built cloud software, subscription workflows, dashboards, APIs, databases and product-specific functionality.',
    },
    {
      icon: <Layers size={20} />,
      color: 'purple',
      title: 'SaaS Web Application Development',
      desc: 'Full-stack SaaS web application development covering responsive frontend interfaces, backend services, database architecture, authentication, user management and integrations.',
    },
    {
      icon: <Rocket size={20} />,
      color: 'green',
      title: 'SaaS MVP Development',
      desc: 'Build a focused SaaS MVP with the essential features required to validate your product idea, onboard early users and create a foundation for future development.',
    },
  ];

  /* =========================
     SAAS TYPES
  ========================= */

  const saasTypes = [
    {
      title: 'B2B SaaS Development',
      desc: 'Custom B2B SaaS development for CRM platforms, project management systems, operations software, reporting tools, business automation and team collaboration.',
    },
    {
      title: 'B2C SaaS Development',
      desc: 'Customer-facing SaaS applications with user accounts, subscriptions, personalized dashboards, payments and scalable cloud-based product functionality.',
    },
    {
      title: 'Vertical SaaS Development',
      desc: 'Industry-specific SaaS platforms designed around specialized business workflows for education, real estate, logistics, retail and professional services.',
    },
    {
      title: 'SaaS MVP Development',
      desc: 'Focused SaaS MVP development for startups and founders who want to validate a software product with essential functionality before expanding it.',
    },
    {
      title: 'AI-Powered SaaS Applications',
      desc: 'SaaS software with suitable AI API integrations for assistants, automation, document processing, intelligent search, content workflows and product-specific AI features.',
    },
    {
      title: 'Marketplace SaaS Platforms',
      desc: 'Multi-user marketplace SaaS applications with customer and provider accounts, dashboards, payments, administration and marketplace workflows.',
    },
  ];

  /* =========================
     BENEFITS
  ========================= */

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
      desc: 'Authentication, authorization, input validation, secure configuration and dependency management are considered throughout SaaS development.',
    },
    {
      icon: <Rocket size={18} />,
      title: 'Built for Future Growth',
      desc: 'We structure SaaS products so new features, integrations, users and workflows can be added without unnecessary rebuilding.',
    },
  ];

  /* =========================
     TECHNOLOGY
  ========================= */

  const technologies = [
    {
      icon: <Monitor size={18} />,
      title: 'Frontend',
      items: 'React.js · Next.js · TypeScript · Tailwind CSS',
    },
    {
      icon: <Server size={18} />,
      title: 'Backend & APIs',
      items: 'Node.js · Express.js · REST · GraphQL',
    },
    {
      icon: <Database size={18} />,
      title: 'Databases',
      items: 'MongoDB · PostgreSQL · Redis · Prisma',
    },
    {
      icon: <CreditCard size={18} />,
      title: 'Billing & Integrations',
      items: 'Stripe · Webhooks · Email APIs · Third-Party APIs',
    },
    {
      icon: <Cloud size={18} />,
      title: 'Cloud & Deployment',
      items: 'AWS · Vercel · Docker · GitHub Actions',
    },
    {
      icon: <Zap size={18} />,
      title: 'Product Infrastructure',
      items: 'Authentication · RBAC · Analytics · Monitoring',
    },
  ];

  /* =========================
     PROCESS
  ========================= */

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
      title: 'SaaS UI/UX & Product Experience',
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
      desc: 'We review application functionality, responsive behavior, API handling, permissions, error states, security considerations and performance before production release.',
    },
    {
      n: '06',
      title: 'Deployment & Handover',
      desc: 'The SaaS application is prepared for production deployment, environment configuration and project handover with the documentation required for ongoing development.',
    },
  ];

  /* =========================
     FAQ
  ========================= */

  const faqs = [
    {
      q: 'What is SaaS product development?',
      a: 'SaaS product development is the process of designing and building cloud-based software that users access online, commonly through an account or subscription model. A SaaS product can include authentication, dashboards, billing, team management, APIs, analytics and cloud infrastructure depending on its requirements.',
    },
    {
      q: 'What SaaS development services does DevZore provide?',
      a: 'DevZore provides custom SaaS development services including SaaS MVP development, SaaS web application development, React dashboards, Node.js backend development, database architecture, authentication, multi-tenant functionality, subscription billing integrations, admin panels, APIs and production deployment.',
    },
    {
      q: 'How much does SaaS product development cost?',
      a: 'SaaS development cost depends on product scope, user roles, dashboard complexity, billing requirements, integrations, backend architecture and other features. DevZore reviews the requirements first and then prepares a project-specific proposal.',
    },
    {
      q: 'How long does it take to build a SaaS application?',
      a: 'There is no single development timeline for every SaaS product. A focused SaaS MVP can require significantly less work than a multi-role platform with billing, analytics, integrations and complex workflows. The timeline is estimated after reviewing the actual scope and priorities.',
    },
    {
      q: 'Can you build a SaaS MVP for a startup?',
      a: 'Yes. DevZore can develop a focused SaaS MVP around the core functionality needed to validate a product idea. The architecture can also be planned so additional functionality can be introduced as the product evolves.',
    },
    {
      q: 'Do you provide B2B and B2C SaaS development?',
      a: 'Yes. DevZore develops both B2B and B2C SaaS applications. B2B products can include organization accounts, teams, permissions, business dashboards and workflow automation, while B2C products can include individual accounts, subscriptions, personalized experiences and customer-facing functionality.',
    },
    {
      q: 'Do you build multi-tenant SaaS applications?',
      a: 'Yes. When multi-tenancy is appropriate, we can design organization or workspace-based SaaS applications with tenant-aware data access, user roles, permissions and administration workflows.',
    },
    {
      q: 'Can you build subscription-based software?',
      a: 'Yes. Subscription software development can include plans, trials, checkout, recurring billing, upgrades, downgrades, billing webhooks and account access rules depending on the selected payment provider and product requirements.',
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
      a: 'Technology is selected according to product requirements. Common choices include React or Next.js for frontend development, Node.js and Express.js for backend APIs, MongoDB or PostgreSQL for data storage, and modern cloud deployment services.',
    },
    {
      q: 'Can you develop a SaaS dashboard in React?',
      a: 'Yes. We build React SaaS dashboards with account management, tables, filters, charts, forms, permissions, responsive layouts and API-driven data according to application requirements.',
    },
    {
      q: 'Can you develop Node.js APIs for a SaaS platform?',
      a: 'Yes. Node.js and Express.js can be used to build backend APIs for authentication, users, organizations, billing, dashboards, integrations, administration and other SaaS functionality.',
    },
    {
      q: 'Can DevZore work on an existing SaaS application?',
      a: 'Yes. Existing SaaS applications can be reviewed for new feature development, frontend improvements, API integrations, dashboard development, backend changes and other product requirements.',
    },
    {
      q: 'Do you provide SaaS development services worldwide?',
      a: 'DevZore provides remote SaaS development services for startups, founders and businesses that can work with our development process regardless of location.',
    },
    {
      q: 'Will I own the SaaS source code?',
      a: 'Project ownership, repositories, credentials, design files and handover terms should be defined clearly in the project agreement. DevZore can structure projects so clients receive the agreed source code and project assets at handover.',
    },
  ];

  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 5);

  /* =========================
     RELATED SERVICES
  ========================= */

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

  /* =========================
     SCHEMA
  ========================= */

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://devzore.com/saas-product-development#service',
    name: 'SaaS Product Development Services',
    url: 'https://devzore.com/saas-product-development',
    description:
      'Custom SaaS development services for B2B and B2C SaaS products, SaaS MVPs, subscription software, cloud applications, multi-tenant platforms, React dashboards and Node.js backend systems.',
    serviceType: 'SaaS Product Development',
    provider: {
      '@id': 'https://devzore.com/#organization',
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'SaaS Development Services',
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
        name: 'SaaS Product Development',
        item: 'https://devzore.com/saas-product-development',
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
          d ? 'bg-[#030303]' : 'bg-white'
        }`}
      >
        {/* ================= HERO ================= */}

        <section
          aria-labelledby="saas-heading"
          className={`pt-24 pb-10 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <div className="flex flex-wrap gap-2 mb-5">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${
                      d
                        ? 'bg-purple-600/10 border-purple-500/20 text-purple-400'
                        : 'bg-purple-50 border-purple-200 text-purple-700'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    SaaS Product Development
                  </div>

                  <div
                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold border ${
                      d
                        ? 'bg-green-500/10 border-green-500/20 text-green-400'
                        : 'bg-green-50 border-green-200 text-green-700'
                    }`}
                  >
                    <Globe size={11} />
                    Remote Development Services
                  </div>
                </div>

                <h1
                  id="saas-heading"
                  className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 ${
                    d ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  SaaS Development Services{' '}
                  <span className="text-purple-600">
                    for Custom Software Products
                  </span>
                </h1>

                <p
                  className={`text-lg font-semibold mb-4 ${
                    d ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  SaaS MVPs · B2B & B2C SaaS · Multi-Tenant Platforms ·
                  Subscription Software · React Dashboards · Node.js APIs
                </p>

                <p
                  className={`text-base leading-relaxed mb-4 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  DevZore is a{' '}
                  <strong className={d ? 'text-white' : 'text-gray-900'}>
                    SaaS development company
                  </strong>{' '}
                  providing custom SaaS product development for startups,
                  founders and businesses. Our SaaS development services cover
                  frontend development, backend APIs, cloud databases,
                  authentication, subscription billing, dashboards,
                  administration systems and third-party integrations.
                </p>

                <p
                  className={`text-base leading-relaxed mb-6 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  From SaaS MVP development and B2B SaaS development to B2C
                  SaaS applications and established software platforms, we
                  build cloud-based products around your users, workflows and
                  business requirements.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    onClick={scrollTop}
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                  >
                    Discuss Your SaaS Project
                    <ArrowRight size={14} />
                  </Link>

                  <a
                    href={whatsappUrl}
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
                className={`p-7 rounded-3xl border ${
                  d
                    ? 'bg-white/[0.02] border-white/[0.06]'
                    : 'bg-[#fafafa] border-gray-200'
                }`}
              >
                <p
                  className={`text-[11px] font-black uppercase tracking-widest mb-5 ${
                    d ? 'text-gray-500' : 'text-gray-400'
                  }`}
                >
                  SaaS Development Capabilities
                </p>

                <div className="space-y-3">
                  {[
                    ['Multi-Tenant SaaS Architecture', 'Organizations, workspaces and tenant-aware data'],
                    ['Subscription Billing', 'Plans, checkout and recurring billing workflows'],
                    ['Authentication & User Management', 'Accounts, teams, roles and permissions'],
                    ['SaaS Dashboards', 'Business data, activity and product insights'],
                    ['Backend API Development', 'REST or GraphQL APIs for SaaS products'],
                    ['Third-Party Integrations', 'Payments, email, storage and external services'],
                    ['SaaS Admin Panels', 'Users, accounts, subscriptions and settings'],
                    ['Responsive SaaS UI/UX', 'Desktop, tablet and mobile experiences'],
                  ].map(([title, note]) => (
                    <div
                      key={title}
                      className={`flex items-start gap-3 pb-3 border-b last:border-0 ${
                        d ? 'border-white/[0.05]' : 'border-gray-100'
                      }`}
                    >
                      <CheckCircle
                        size={14}
                        className="text-purple-500 flex-shrink-0 mt-0.5"
                      />

                      <div>
                        <p
                          className={`text-[13px] font-bold ${
                            d ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {title}
                        </p>

                        <p
                          className={`text-[11px] mt-0.5 ${
                            d ? 'text-gray-500' : 'text-gray-500'
                          }`}
                        >
                          {note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}

        <section
          aria-labelledby="features-heading"
          className={`py-12 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-8">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                SaaS Development Services
              </p>

              <h2
                id="features-heading"
                className={`text-3xl font-black mb-3 ${
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
                Full-stack SaaS software development covering SaaS UI/UX,
                frontend interfaces, backend systems, databases, APIs,
                subscriptions, user management, integrations and cloud-ready
                application architecture.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((item) => (
                <article
                  key={item.title}
                  className={`p-5 rounded-2xl border transition-all hover:border-purple-500/25 ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                      : 'bg-white border-gray-200 hover:shadow-sm'
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
                    className={`text-[15px] font-bold mb-2 ${
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

        {/* ================= TYPES ================= */}

        <section
          aria-labelledby="saas-types-heading"
          className={`py-12 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-8">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                SaaS Solutions
              </p>

              <h2
                id="saas-types-heading"
                className={`text-3xl font-black mb-3 ${
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
                Custom SaaS application development for different business
                models, audiences and software product requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {saasTypes.map((type) => (
                <div
                  key={type.title}
                  className={`p-5 rounded-2xl border ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <CheckCircle size={16} className="text-purple-500 mb-3" />

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

        {/* ================= BENEFITS ================= */}

        <section
          aria-labelledby="why-saas-heading"
          className={`py-12 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-8">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                SaaS Engineering
              </p>

              <h2
                id="why-saas-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                SaaS Engineering Built Around Your Product
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                SaaS software needs architecture that supports users,
                permissions, business data, integrations and future product
                changes without unnecessary complexity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className={`p-5 rounded-2xl border ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
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

        {/* ================= SEARCH CONTENT ================= */}

        <section
          aria-labelledby="saas-search-heading"
          className={`py-12 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                  Full-Stack SaaS Development
                </p>

                <h2
                  id="saas-search-heading"
                  className={`text-3xl font-black mb-4 ${
                    d ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Custom SaaS Development for B2B, B2C & Startup Products
                </h2>

                <p
                  className={`text-sm leading-7 mb-3 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Our SaaS application development services support startups,
                  founders and established businesses building subscription
                  software, cloud software and custom web applications.
                </p>

                <p
                  className={`text-sm leading-7 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  DevZore develops SaaS web applications using technologies
                  such as React, Next.js, Node.js, MongoDB and PostgreSQL.
                  Platforms can include multi-tenant architecture, subscription
                  billing, role-based access, dashboards, admin panels, APIs
                  and cloud deployment.
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
                  SaaS Development Expertise
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    'SaaS Development',
                    'Custom SaaS Development',
                    'SaaS Product Development',
                    'SaaS Application Development',
                    'SaaS Software Development',
                    'SaaS Platform Development',
                    'SaaS Web Application Development',
                    'SaaS MVP Development',
                    'B2B SaaS Development',
                    'B2C SaaS Development',
                    'Subscription Software Development',
                    'Cloud Software Development',
                    'SaaS UI/UX Design',
                    'Multi-Tenant SaaS',
                    'React SaaS Development',
                    'Node.js SaaS Backend',
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

        {/* ================= TECHNOLOGY ================= */}

        <section
          aria-labelledby="technology-heading"
          className={`py-12 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-8">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                Technology
              </p>

              <h2
                id="technology-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Technologies for SaaS Product Development
              </h2>

              <p
                className={`text-base ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                We select technologies according to your SaaS architecture,
                integrations, product requirements and future development
                needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech.title}
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
                    {tech.icon}
                  </div>

                  <h3
                    className={`font-bold text-sm mb-2 ${
                      d ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {tech.title}
                  </h3>

                  <p
                    className={`text-[12px] leading-6 ${
                      d ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {tech.items}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROCESS ================= */}

        <section
          aria-labelledby="process-heading"
          className={`py-12 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                Our Process
              </p>

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
                A structured SaaS development workflow from product planning
                and architecture through development, testing and deployment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {process.map((step) => (
                <div
                  key={step.n}
                  className={`p-5 rounded-2xl border ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-[#fafafa] border-gray-200'
                  }`}
                >
                  <div className="text-[13px] font-black mb-2 text-purple-500">
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

        {/* ================= FAQ ================= */}

        <section
          aria-labelledby="faq-heading"
          className={`py-12 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-8">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                Questions & Answers
              </p>

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
                Common questions about custom SaaS development, SaaS MVPs,
                B2B and B2C applications, subscriptions and technology.
              </p>
            </div>

            <div className="space-y-3">
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
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`saas-faq-${index}`}
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
                        {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                      </div>
                    </button>

                    <div
                      id={`saas-faq-${index}`}
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? 'max-h-[500px] opacity-100'
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
                        <p className="pt-4">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {faqs.length > 5 && (
              <div className="text-center mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowAllFaqs((prev) => !prev);
                    setActiveFaq(null);
                  }}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-bold transition-all ${
                    d
                      ? 'border-white/10 text-gray-300 hover:border-purple-500/30 hover:text-purple-400'
                      : 'border-gray-200 text-gray-700 hover:border-purple-200 hover:text-purple-700'
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
          </div>
        </section>

        {/* ================= RELATED ================= */}

        <section
          aria-labelledby="related-services-heading"
          className={`py-12 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-7">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                Explore More
              </p>

              <h2
                id="related-services-heading"
                className={`text-2xl md:text-3xl font-black ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Related Software Development Services
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {relatedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={scrollTop}
                  className={`group p-6 rounded-2xl border transition-all duration-300 ${
                    d
                      ? 'bg-white/[0.015] border-white/[0.08] hover:bg-white/[0.035] hover:border-purple-500/30'
                      : 'bg-white border-gray-200 hover:border-purple-200 hover:shadow-md'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                      d
                        ? 'bg-purple-500/10 text-purple-400'
                        : 'bg-purple-50 text-purple-600'
                    }`}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className={`text-base font-black mb-2 ${
                      d ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-[13px] leading-relaxed mb-4 ${
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

            <div className="text-center mt-6">
              <Link
                to="/allservices"
                onClick={scrollTop}
                className={`inline-flex items-center gap-2 text-[13px] font-bold ${
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

        {/* ================= FINAL CTA ================= */}

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
              Start Your SaaS Project
            </p>

            <h2
              className={`text-3xl font-black mb-3 ${
                d ? 'text-white' : 'text-gray-900'
              }`}
            >
              Need a SaaS Development Partner?
            </h2>

            <p
              className={`text-base mb-6 max-w-2xl mx-auto leading-relaxed ${
                d ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Tell us about your SaaS product, target users and core features.
              We can discuss your SaaS MVP, application architecture,
              frontend, backend, database, subscriptions, integrations and
              deployment requirements.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/contact"
                onClick={scrollTop}
                className="flex items-center gap-2 px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
              >
                Discuss Your SaaS Project
                <ArrowRight size={15} />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-8 py-3.5 font-bold rounded-xl text-sm border transition-all ${
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

export default SaaSProductDevelopment;