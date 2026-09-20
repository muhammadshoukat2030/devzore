import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Rocket,
  ArrowRight,
  CheckCircle,
  Globe,
  Zap,
  Shield,
  TrendingUp,
  Code2,
  Users,
  Layers,
  Target,
  Plus,
  Minus,
  RefreshCw,
  Database,
  Monitor,
  CreditCard,
  Smartphone,
  Server,
  Palette,
} from 'lucide-react';

const StartupMVP = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mvpTypes = [
    {
      icon: <Monitor size={20} />,
      color: 'purple',
      title: 'SaaS MVP Development',
      desc: 'Build a focused SaaS MVP with authentication, dashboards, user roles, subscription workflows, APIs and the core features required to validate your software product.',
    },
    {
      icon: <Smartphone size={20} />,
      color: 'blue',
      title: 'Mobile App MVP',
      desc: 'Develop mobile MVPs around the most important user journeys with authentication, backend APIs, notifications and responsive mobile experiences for your target users.',
    },
    {
      icon: <Globe size={20} />,
      color: 'green',
      title: 'Marketplace MVP',
      desc: 'Create marketplace MVPs with buyer and seller accounts, listings, search, dashboards, communication and payment integrations based on your business model.',
    },
    {
      icon: <Database size={20} />,
      color: 'orange',
      title: 'B2B Software MVP',
      desc: 'Develop B2B MVPs for business workflows, internal tools, reporting systems, productivity software, customer portals and workflow automation.',
    },
    {
      icon: <CreditCard size={20} />,
      color: 'cyan',
      title: 'Fintech MVP',
      desc: 'Build fintech product prototypes and MVPs with account workflows, dashboards and suitable third-party financial or payment integrations where provider requirements allow.',
    },
    {
      icon: <Layers size={20} />,
      color: 'indigo',
      title: 'API-First MVP',
      desc: 'Develop API-focused products with authentication, validation, documentation, usage controls and integrations for web applications, mobile apps or external developers.',
    },
  ];

  const mvpPrinciples = [
    {
      icon: <Target size={16} />,
      title: 'Validate the Core Idea',
      desc: 'We focus the first version around the main problem, target users and essential product workflow instead of filling the MVP with unnecessary features.',
    },
    {
      icon: <Zap size={16} />,
      title: 'Focused Product Scope',
      desc: 'Feature prioritisation helps keep development focused on functionality that supports early product validation and meaningful user feedback.',
    },
    {
      icon: <Users size={16} />,
      title: 'User-Centred Experience',
      desc: 'Core screens and user journeys are designed around clarity and usability so early users can understand and interact with the product effectively.',
    },
    {
      icon: <Code2 size={16} />,
      title: 'Maintainable Codebase',
      desc: 'We use organized project structures, reusable components and practical development patterns so the MVP can continue evolving after its first release.',
    },
    {
      icon: <RefreshCw size={16} />,
      title: 'Ready for Iteration',
      desc: 'The product is structured so feedback can guide future improvements, integrations and additional functionality without unnecessary rebuilding.',
    },
    {
      icon: <Shield size={16} />,
      title: 'Security-Conscious Development',
      desc: 'Authentication, authorization, validation, secure configuration and sensible data handling are considered as part of the MVP architecture.',
    },
  ];

  const process = [
    {
      n: '01',
      title: 'MVP Discovery & Product Planning',
      desc: 'We discuss the product idea, target users, business goals, core problem, required platforms and the assumptions the MVP should help validate.',
    },
    {
      n: '02',
      title: 'Feature Prioritisation',
      desc: 'The feature set is organized around the essential product workflow so development remains focused on what the first usable version actually needs.',
    },
    {
      n: '03',
      title: 'UI/UX & Product Flow',
      desc: 'Key screens, user journeys, dashboards and responsive interfaces are planned around the core MVP experience before implementation.',
    },
    {
      n: '04',
      title: 'Frontend & Backend Development',
      desc: 'The application frontend, backend APIs, database, authentication and required integrations are developed in organized stages.',
    },
    {
      n: '05',
      title: 'Testing & Product Review',
      desc: 'Core functionality, responsive behavior, permissions, API handling, forms, error states and important user journeys are reviewed before release.',
    },
    {
      n: '06',
      title: 'Deployment & Next Iteration',
      desc: 'The MVP is prepared for production deployment and handover so real user feedback can guide the next stage of product development.',
    },
  ];

  const techStack = [
    {
      category: 'Frontend',
      items: [
        'React.js',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'React Router',
      ],
    },
    {
      category: 'Mobile',
      items: [
        'React Native',
        'Expo',
        'iOS',
        'Android',
        'Push Notifications',
      ],
    },
    {
      category: 'Backend',
      items: [
        'Node.js',
        'Express.js',
        'REST APIs',
        'GraphQL',
        'Socket.IO',
      ],
    },
    {
      category: 'Database',
      items: [
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Prisma',
        'Mongoose',
      ],
    },
    {
      category: 'Payments',
      items: [
        'Stripe',
        'Subscription Billing',
        'Payment Webhooks',
        'Checkout',
        'Third-Party APIs',
      ],
    },
    {
      category: 'Product Analytics',
      items: [
        'Google Analytics',
        'PostHog',
        'Error Monitoring',
        'Logging',
        'Usage Analytics',
      ],
    },
    {
      category: 'Cloud & DevOps',
      items: [
        'AWS',
        'Vercel',
        'Docker',
        'GitHub Actions',
        'Nginx',
      ],
    },
    {
      category: 'Authentication',
      items: [
        'JWT',
        'OAuth',
        'Role-Based Access',
        'Email Verification',
        '2FA',
      ],
    },
  ];

  const faqs = [
    {
      q: 'What is MVP development?',
      a: 'MVP development is the process of building a focused first version of a software product with the essential functionality required to test the idea with real users. The goal is to learn from actual product usage before investing in a much larger feature set.',
    },
    {
      q: 'What is a Minimum Viable Product?',
      a: 'A Minimum Viable Product is a usable version of a product that focuses on its core value proposition. It should provide enough functionality for target users to experience the main product workflow and provide meaningful feedback.',
    },
    {
      q: 'How much does startup MVP development cost?',
      a: 'MVP development cost depends on the product type, feature scope, platforms, number of user roles, UI requirements, backend complexity and third-party integrations. DevZore reviews the requirements first and then prepares a project-specific proposal.',
    },
    {
      q: 'How long does it take to build an MVP?',
      a: 'There is no single development timeline for every MVP. A focused web application may require significantly less work than a marketplace, mobile application or multi-role SaaS platform. The development estimate should be based on the actual feature scope and technical requirements.',
    },
    {
      q: 'What features should a startup MVP include?',
      a: 'An MVP should normally focus on the main user problem, essential user journey and functionality required to test the product concept. Features that are not necessary for early validation can usually be planned for later product iterations.',
    },
    {
      q: 'Can you build a SaaS MVP for a startup?',
      a: 'Yes. DevZore can develop SaaS MVPs with features such as user authentication, dashboards, account management, APIs, databases, subscription workflows and administration tools according to the product requirements.',
    },
    {
      q: 'Can you build a mobile app MVP?',
      a: 'Yes. We can develop mobile MVPs with React Native and supporting backend APIs when a mobile application is the right format for the product. The exact architecture depends on the required devices, functionality and integrations.',
    },
    {
      q: 'Can you build a marketplace MVP?',
      a: 'Yes. Marketplace MVP development can include buyer and seller accounts, listings, search, dashboards, communication features, administration and suitable payment workflows depending on the business model.',
    },
    {
      q: 'Can you add payment or subscription billing to an MVP?',
      a: 'Yes. Payment providers such as Stripe can be integrated when they are suitable for the project and available for the required business setup. Checkout, subscriptions, billing events and webhooks can be implemented according to the product requirements.',
    },
    {
      q: 'Will my MVP be able to grow after launch?',
      a: 'We structure MVP projects with future development in mind. The exact scaling strategy depends on the product and usage requirements, but organized APIs, data models, reusable components and deployment practices can make future iteration easier.',
    },
    {
      q: 'Do you help with MVP feature prioritisation?',
      a: 'Yes. We can help organize product requirements into core functionality and later-stage features so the initial development scope remains focused on the primary product experience.',
    },
    {
      q: 'Can you improve or rebuild an existing MVP?',
      a: 'Yes. Existing MVPs can be reviewed for frontend structure, backend APIs, database design, usability, performance and maintainability before planning improvements or additional functionality.',
    },
    {
      q: 'Which technologies do you use for MVP development?',
      a: 'Technology depends on the product requirements. Common options include React, Next.js, React Native, Node.js, Express, MongoDB, PostgreSQL, TypeScript and modern cloud deployment platforms.',
    },
    {
      q: 'Do you provide MVP development services internationally?',
      a: 'DevZore provides remote MVP and software development services for startups, founders and businesses that can work with our development process regardless of location.',
    },
    {
      q: 'Will I receive the MVP source code?',
      a: 'Source code ownership, repositories, credentials, design files and handover requirements should be clearly defined in the project agreement. DevZore can structure projects so agreed project assets are transferred during handover.',
    },
  ];

  const relatedServices = [
    {
      icon: <Layers size={22} />,
      title: 'SaaS Product Development',
      desc: 'Custom SaaS applications with dashboards, subscriptions, user management, APIs and scalable product architecture.',
      path: '/saas-product-development',
    },
    {
      icon: <Server size={22} />,
      title: 'Backend & API Development',
      desc: 'Backend systems, REST APIs, GraphQL services, databases, authentication and third-party integrations.',
      path: '/backend-api',
    },
    {
      icon: <Palette size={22} />,
      title: 'UI/UX Design',
      desc: 'User-focused interfaces, product flows, wireframes and responsive UI design for web and mobile products.',
      path: '/ui-ux-design',
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

    cyan: d
      ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
      : 'bg-cyan-50 border-cyan-100 text-cyan-600',

    indigo: d
      ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
      : 'bg-indigo-50 border-indigo-100 text-indigo-600',
  };

  const whatsappUrl =
    'https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20an%20MVP%20for%20my%20startup.';

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': 'https://devzore.com/startup-mvp#service',
            name: 'Startup MVP Development Services',
            description:
              'Custom startup MVP development for SaaS products, web applications, mobile apps, marketplaces and B2B software.',
            url: 'https://devzore.com/startup-mvp',
            provider: {
              '@id': 'https://devzore.com/#organization',
            },
            serviceType: 'Startup MVP Development',
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
                name: 'Startup MVP Development',
                item: 'https://devzore.com/startup-mvp',
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
          aria-labelledby="mvp-heading"
          className={`pt-28 pb-14 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
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
                    Startup MVP Development
                  </div>

                  <div
                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold border ${
                      d
                        ? 'bg-green-500/10 border-green-500/20 text-green-400'
                        : 'bg-green-50 border-green-200 text-green-700'
                    }`}
                  >
                    <Globe size={11} />
                    Available Worldwide
                  </div>
                </div>

                <h1
                  id="mvp-heading"
                  className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5 ${
                    d ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Startup MVP Development{' '}
                  <span className="text-purple-600">
                    for Web, Mobile & SaaS Products
                  </span>
                </h1>

                <p
                  className={`text-lg font-semibold mb-5 ${
                    d ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  SaaS MVPs · Mobile App MVPs · Marketplace MVPs · B2B Software
                  · React · Node.js
                </p>

                <p
                  className={`text-base leading-relaxed mb-5 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  DevZore provides{' '}
                  <strong className={d ? 'text-white' : 'text-gray-900'}>
                    startup MVP development services
                  </strong>{' '}
                  for founders and businesses that want to turn a software idea
                  into a usable digital product. We develop web application
                  MVPs, SaaS products, mobile applications, marketplaces and
                  custom business software.
                </p>

                <p
                  className={`text-base leading-relaxed mb-8 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Our MVP development approach focuses on the core product
                  experience first, with frontend development, backend APIs,
                  database architecture, authentication and integrations
                  selected according to the actual product requirements.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    onClick={scrollTop}
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                  >
                    Discuss Your MVP Idea
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
                  MVP Development Capabilities
                </p>

                <div className="space-y-3">
                  {[
                    {
                      item: 'MVP product planning',
                      note: 'Core workflows and feature prioritisation',
                    },
                    {
                      item: 'Responsive UI development',
                      note: 'Web and mobile-friendly product interfaces',
                    },
                    {
                      item: 'Frontend application development',
                      note: 'React, Next.js or React Native where appropriate',
                    },
                    {
                      item: 'Backend API development',
                      note: 'Node.js, Express, REST or GraphQL',
                    },
                    {
                      item: 'Database architecture',
                      note: 'MongoDB or PostgreSQL based on requirements',
                    },
                    {
                      item: 'Authentication & permissions',
                      note: 'Accounts, roles and secure access workflows',
                    },
                    {
                      item: 'Payment integrations',
                      note: 'Checkout or subscriptions where required',
                    },
                    {
                      item: 'Third-party integrations',
                      note: 'Email, storage, analytics and external APIs',
                    },
                    {
                      item: 'Deployment preparation',
                      note: 'Production configuration and project handover',
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
                    MVP development for startups, founders and businesses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MVP TYPES */}
        <section
          aria-labelledby="mvp-types-heading"
          className={`py-16 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2
                id="mvp-types-heading"
                className={`text-3xl font-black mb-4 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                MVP Development Services for Different Product Ideas
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Different startup ideas need different product architecture. We
                shape the MVP around the users, business model, platform and
                functionality that need to be validated.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {mvpTypes.map((item) => (
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

        {/* PRINCIPLES */}
        <section
          aria-labelledby="principles-heading"
          className={`py-16 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2
                id="principles-heading"
                className={`text-3xl font-black mb-4 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Our Startup MVP Development Approach
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                MVP development should balance product validation with a
                technical foundation that can continue evolving after early
                user feedback.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mvpPrinciples.map((item) => (
                <div
                  key={item.title}
                  className={`p-6 rounded-2xl border transition-all hover:border-purple-500/20 ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                      : 'bg-white border-gray-200 hover:shadow-sm'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${
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
                Our MVP Development Process
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                A practical development process from startup idea and feature
                planning through implementation, testing and deployment.
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
                MVP Development Technology Stack
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Technology is selected according to your product requirements,
                platform, integrations and future development needs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {techStack.map((category) => (
                <div
                  key={category.category}
                  className={`p-5 rounded-2xl border ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-[#fafafa] border-gray-200'
                  }`}
                >
                  <p className="text-[11px] font-black uppercase tracking-widest mb-3 text-purple-500">
                    {category.category}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {category.items.map((tech) => (
                      <span
                        key={tech}
                        className={`text-[10px] font-medium px-2 py-1 rounded-md border ${
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

        {/* SEARCH INTENT / CONTENT */}
        <section
          aria-labelledby="mvp-solutions-heading"
          className={`py-16 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[11px] font-black uppercase tracking-widest text-purple-500 mb-3">
                  Startup Product Development
                </p>

                <h2
                  id="mvp-solutions-heading"
                  className={`text-3xl font-black mb-5 ${
                    d ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  From Startup Idea to a Usable Software MVP
                </h2>

                <p
                  className={`text-base leading-relaxed mb-5 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  A successful MVP is not simply a smaller application. It is a
                  focused software product designed to test an important
                  business idea with actual users.
                </p>

                <p
                  className={`text-base leading-relaxed ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  DevZore combines UI development, backend engineering,
                  database design, APIs and integrations to build custom MVP
                  software for startups that need a practical first product.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  'Startup MVP Development',
                  'SaaS MVP Development',
                  'Web App MVP',
                  'Mobile App MVP',
                  'Marketplace MVP',
                  'B2B Software MVP',
                  'React MVP Development',
                  'Node.js MVP Development',
                  'MVP Backend Development',
                  'MVP UI/UX Design',
                  'Custom Software MVP',
                  'Product Prototype Development',
                ].map((keyword) => (
                  <span
                    key={keyword}
                    className={`px-4 py-2 rounded-xl border text-[12px] font-semibold ${
                      d
                        ? 'bg-white/[0.03] border-white/[0.08] text-gray-300'
                        : 'bg-white border-gray-200 text-gray-700'
                    }`}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
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
                Startup MVP Development FAQ
              </h2>

              <p
                className={`text-base ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Common questions about MVP development, cost, technology,
                features and product planning.
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
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
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
                Related Services
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {relatedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={scrollTop}
                  className={`group p-7 lg:p-9 min-h-[300px] rounded-3xl border transition-all duration-300 flex flex-col ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.07] hover:bg-white/[0.04] hover:border-purple-500/30'
                      : 'bg-white border-gray-200 hover:border-purple-200 hover:shadow-sm'
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${
                      d
                        ? 'bg-purple-500/10 text-purple-400'
                        : 'bg-purple-50 text-purple-600'
                    }`}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className={`text-lg font-black mb-3 ${
                      d ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-[14px] leading-7 mb-8 ${
                      d ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {service.desc}
                  </p>

                  <span className="mt-auto inline-flex items-center gap-2 text-[13px] font-bold text-purple-500 group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div
              className={`p-8 md:p-12 rounded-3xl border ${
                d
                  ? 'bg-white/[0.02] border-white/[0.06]'
                  : 'bg-[#fafafa] border-gray-200'
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center ${
                  d
                    ? 'bg-purple-500/10 text-purple-400'
                    : 'bg-purple-50 text-purple-600'
                }`}
              >
                <Rocket size={24} />
              </div>

              <h2
                className={`text-3xl font-black mb-4 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Ready to Discuss Your Startup MVP?
              </h2>

              <p
                className={`text-base leading-relaxed mb-8 max-w-2xl mx-auto ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Tell us about your software idea, target users and core
                features. We can discuss a focused MVP scope, suitable
                technology and a practical development approach for your
                product.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/contact"
                  onClick={scrollTop}
                  className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
                >
                  Discuss Your MVP
                  <ArrowRight size={15} />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
                >
                  WhatsApp Us
                </a>

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
          </div>
        </section>
      </div>
    </>
  );
};

export default StartupMVP;