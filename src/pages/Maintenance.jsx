import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Wrench,
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  Activity,
  RefreshCw,
  AlertTriangle,
  BarChart3,
  Server,
  Plus,
  Minus,
  Bell,
  Database,
  Settings,
  Eye,
  Code2,
} from 'lucide-react';

const Maintenance = ({ isDark }) => {
  const d = isDark;

  const [activeFaq, setActiveFaq] = useState(null);
  const [activePlan, setActivePlan] = useState(1);

  const whatsappUrl =
    'https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20website%20maintenance%20and%20support.';

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const services = [
    {
      icon: <Shield size={20} />,
      color: 'blue',
      title: 'Security Updates & Patching',
      desc: 'Dependency reviews, security updates, SSL checks and application hardening to help reduce avoidable security risks in production.',
    },
    {
      icon: <Activity size={20} />,
      color: 'green',
      title: 'Website & Application Monitoring',
      desc: 'Availability, application errors and important operational signals can be monitored so technical issues are easier to identify and investigate.',
    },
    {
      icon: <RefreshCw size={20} />,
      color: 'purple',
      title: 'Dependency & Framework Updates',
      desc: 'Planned dependency updates for React, Next.js, Node.js and other project packages, with testing before production deployment where appropriate.',
    },
    {
      icon: <AlertTriangle size={20} />,
      color: 'amber',
      title: 'Bug Fixing & Troubleshooting',
      desc: 'Investigation and resolution of frontend, backend, API, database and integration issues affecting your website or web application.',
    },
    {
      icon: <BarChart3 size={20} />,
      color: 'cyan',
      title: 'Performance Optimisation',
      desc: 'Frontend performance reviews, bundle analysis, image optimisation, caching improvements and backend or database tuning where required.',
    },
    {
      icon: <Database size={20} />,
      color: 'indigo',
      title: 'Backup & Recovery Support',
      desc: 'Support for database and application backup strategies, recovery procedures and safer operational practices based on your hosting environment.',
    },
    {
      icon: <Settings size={20} />,
      color: 'orange',
      title: 'Infrastructure Maintenance',
      desc: 'Review and maintenance of deployment configuration, server resources, logs, environment settings and cloud infrastructure related to your application.',
    },
    {
      icon: <Bell size={20} />,
      color: 'red',
      title: 'Issue & Incident Support',
      desc: 'Structured investigation of production issues with clear communication, technical diagnosis and recommended steps to reduce repeat problems.',
    },
    {
      icon: <Eye size={20} />,
      color: 'pink',
      title: 'Maintenance Reports',
      desc: 'Clear summaries of completed maintenance work, identified issues, updates performed and recommendations for upcoming technical improvements.',
    },
  ];

  const plans = [
    {
      name: 'Essential',
      desc: 'For business websites and smaller web applications.',
      features: [
        'Routine dependency and security reviews',
        'Website availability monitoring',
        'Backup configuration review',
        'Performance health checks',
        'General bug fixing allocation',
        'SSL and deployment checks',
        'Maintenance summary',
        'Email support',
      ],
      cta: 'Discuss Essential',
    },
    {
      name: 'Professional',
      desc: 'For active web applications, stores and growing digital products.',
      features: [
        'Everything in Essential',
        'More frequent dependency reviews',
        'Application error monitoring',
        'Database and API health checks',
        'Performance optimisation work',
        'Priority issue handling',
        'Deployment and infrastructure support',
        'Technical recommendations',
        'Email and WhatsApp communication',
      ],
      cta: 'Discuss Professional',
    },
    {
      name: 'Advanced',
      desc: 'For SaaS platforms and applications with broader maintenance requirements.',
      features: [
        'Everything in Professional',
        'Custom monitoring requirements',
        'Infrastructure health reviews',
        'Database performance reviews',
        'Deployment workflow support',
        'Architecture and technical-debt reviews',
        'Incident investigation support',
        'Maintenance planning',
        'Ongoing technical coordination',
      ],
      cta: 'Discuss Advanced',
    },
  ];

  const process = [
    {
      n: '01',
      title: 'Codebase & Infrastructure Review',
      desc: 'We review the application stack, deployment setup, dependencies, database, integrations and current maintenance requirements.',
    },
    {
      n: '02',
      title: 'Maintenance Scope',
      desc: 'We identify the areas that need ongoing attention and define a maintenance scope based on the application, hosting environment and business needs.',
    },
    {
      n: '03',
      title: 'Monitoring & Backup Review',
      desc: 'Monitoring, logging and backup arrangements are reviewed or configured where they are part of the agreed maintenance scope.',
    },
    {
      n: '04',
      title: 'Updates & Issue Resolution',
      desc: 'Dependencies, bugs, security concerns and operational issues are handled according to priority and the agreed maintenance plan.',
    },
    {
      n: '05',
      title: 'Testing & Deployment',
      desc: 'Relevant changes are reviewed and tested before production deployment to reduce the risk of regressions and unexpected behaviour.',
    },
    {
      n: '06',
      title: 'Reporting & Improvement',
      desc: 'We summarise completed work and highlight technical recommendations that can improve maintainability, security and performance over time.',
    },
  ];

  const faqs = [
    {
      q: 'What is included in website maintenance services?',
      a: 'Website maintenance can include dependency updates, bug fixing, security reviews, monitoring, backups, performance improvements, deployment support and technical reporting. The exact scope depends on your website or application and the maintenance arrangement you choose.',
    },
    {
      q: 'Can DevZore maintain a website you did not build?',
      a: 'Yes. We can review existing websites and web applications before taking over maintenance. We first inspect the codebase, technology stack, deployment setup and known issues so the maintenance scope can be defined properly.',
    },
    {
      q: 'Which technologies can you maintain?',
      a: 'Our maintenance work can cover modern JavaScript web applications including React, Next.js, Node.js, Express, MERN stack applications, REST APIs, databases and custom web platforms. We review each project before confirming the exact support scope.',
    },
    {
      q: 'Do you provide React and Node.js maintenance?',
      a: 'Yes. Maintenance can include React frontend issues, Node.js and Express backend work, API troubleshooting, dependency updates, database-related issues and deployment configuration.',
    },
    {
      q: 'Do you provide maintenance for SaaS applications?',
      a: 'Yes. SaaS maintenance may include frontend and backend updates, authentication issues, API integrations, database work, deployment support, monitoring and performance improvements depending on the platform architecture.',
    },
    {
      q: 'Can you fix bugs in an existing web application?',
      a: 'Yes. We can investigate frontend, backend, API, database, authentication, integration and deployment issues. We normally review the issue and relevant code first before estimating the work required.',
    },
    {
      q: 'Do you monitor website uptime and application errors?',
      a: 'Monitoring can be included in a maintenance arrangement. The exact tools and monitoring configuration depend on the application, infrastructure and level of visibility required.',
    },
    {
      q: 'Do you handle website security updates?',
      a: 'We can review dependencies, framework updates, security configuration and identified vulnerabilities as part of maintenance. Security work reduces risk, but no website or application can reasonably be described as completely risk-free.',
    },
    {
      q: 'How much does website maintenance cost?',
      a: 'Maintenance pricing depends on the technology stack, application size, existing technical condition, required support level and expected workload. After reviewing the project, DevZore can provide a maintenance scope and tailored proposal.',
    },
    {
      q: 'Can I request performance optimisation as part of maintenance?',
      a: 'Yes. Depending on the project, maintenance can include frontend optimisation, image and asset improvements, bundle reviews, caching, API performance work and database query optimisation.',
    },
  ];

  const relatedServices = [
    {
      icon: <Code2 size={22} />,
      title: 'Web Development',
      desc: 'Modern business websites and custom web applications built around your requirements.',
      path: '/web-development',
    },
    {
      icon: <Server size={22} />,
      title: 'Backend & API Development',
      desc: 'Node.js, Express, REST APIs, authentication, databases and third-party integrations.',
      path: '/backend-api',
    },
    {
      icon: <Activity size={22} />,
      title: 'SaaS Product Development',
      desc: 'Frontend, backend and product development for scalable SaaS applications.',
      path: '/saas-product-development',
    },
  ];

  const colorMap = {
    blue: d
      ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
      : 'bg-blue-50 border-blue-100 text-blue-600',

    green: d
      ? 'bg-green-500/10 border-green-500/20 text-green-400'
      : 'bg-green-50 border-green-100 text-green-600',

    purple: d
      ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
      : 'bg-purple-50 border-purple-100 text-purple-600',

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

    red: d
      ? 'bg-red-500/10 border-red-500/20 text-red-400'
      : 'bg-red-50 border-red-100 text-red-600',

    pink: d
      ? 'bg-pink-500/10 border-pink-500/20 text-pink-400'
      : 'bg-pink-50 border-pink-100 text-pink-600',
  };

  const CtaStrip = ({ heading, sub }) => (
    <div
      className={`p-8 rounded-2xl border text-center ${
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
          onClick={scrollTop}
          className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
        >
          Discuss Maintenance
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
          onClick={scrollTop}
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
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': 'https://devzore.com/maintenance#service',
            name: 'Website Maintenance and Support Services',
            description:
              'Website and web application maintenance services including updates, bug fixing, monitoring, backups, performance optimisation and technical support.',
            url: 'https://devzore.com/maintenance',
            serviceType: 'Website Maintenance and Support',
            provider: {
              '@id': 'https://devzore.com/#organization',
            },
            areaServed: 'Worldwide',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Website Maintenance Services',
              itemListElement: services.map((service) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: service.title,
                  description: service.desc,
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
                name: 'All Services',
                item: 'https://devzore.com/allservices',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Maintenance & Support',
                item: 'https://devzore.com/maintenance',
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
          aria-labelledby="maintenance-heading"
          className={`pt-28 pb-16 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${
                      d
                        ? 'bg-purple-600/10 border-purple-500/20 text-purple-400'
                        : 'bg-purple-50 border-purple-200 text-purple-700'
                    }`}
                  >
                    <Wrench size={12} />
                    Maintenance & Support
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
                  id="maintenance-heading"
                  className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5 ${
                    d ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Website Maintenance &{' '}
                  <span className="text-purple-600">
                    Support Services
                  </span>
                </h1>

                <p
                  className={`text-lg font-semibold mb-5 ${
                    d ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Updates · Monitoring · Bug Fixes · Backups · Performance ·
                  Technical Support
                </p>

                <p
                  className={`text-base leading-relaxed mb-5 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  DevZore provides website maintenance and web application
                  support for businesses that need ongoing technical care after
                  launch. We help maintain modern websites, dashboards, APIs,
                  SaaS products and custom web applications.
                </p>

                <p
                  className={`text-base leading-relaxed mb-8 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Our maintenance work can cover React, Next.js, Node.js,
                  Express, MERN stack applications, databases, APIs,
                  integrations and deployment environments. Existing projects
                  can also be reviewed before maintenance begins.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {[
                    {
                      icon: <Shield size={18} />,
                      title: 'Security',
                      label: 'Updates & reviews',
                    },
                    {
                      icon: <Activity size={18} />,
                      title: 'Monitoring',
                      label: 'Application health',
                    },
                    {
                      icon: <Wrench size={18} />,
                      title: 'Support',
                      label: 'Bug resolution',
                    },
                    {
                      icon: <RefreshCw size={18} />,
                      title: 'Updates',
                      label: 'Ongoing maintenance',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className={`p-4 rounded-xl border ${
                        d
                          ? 'bg-white/[0.02] border-white/[0.06]'
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="text-purple-500 mb-2">
                        {item.icon}
                      </div>

                      <div
                        className={`text-sm font-black ${
                          d ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {item.title}
                      </div>

                      <div
                        className={`text-[10px] mt-1 ${
                          d ? 'text-gray-500' : 'text-gray-500'
                        }`}
                      >
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    onClick={scrollTop}
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                  >
                    Discuss Maintenance
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
                    onClick={scrollTop}
                    className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl text-sm border transition-all ${
                      d
                        ? 'border-white/10 text-gray-300 hover:bg-white/[0.04]'
                        : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    All Services
                  </Link>
                </div>
              </div>

              {/* RIGHT PANEL */}
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
                  Ongoing Maintenance Can Help With
                </p>

                <div className="space-y-3">
                  {[
                    {
                      title: 'Outdated dependencies',
                      desc: 'Review and update packages as the application evolves.',
                    },
                    {
                      title: 'Production bugs',
                      desc: 'Investigate application errors and unexpected behaviour.',
                    },
                    {
                      title: 'Performance issues',
                      desc: 'Identify frontend, backend and database bottlenecks.',
                    },
                    {
                      title: 'Deployment problems',
                      desc: 'Review build, environment and hosting configuration.',
                    },
                    {
                      title: 'Security maintenance',
                      desc: 'Review updates, dependencies and application configuration.',
                    },
                    {
                      title: 'Backup readiness',
                      desc: 'Review backup and recovery arrangements for important data.',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className={`flex items-start gap-3 p-4 rounded-xl border ${
                        d
                          ? 'bg-white/[0.02] border-white/[0.05]'
                          : 'bg-white border-gray-100'
                      }`}
                    >
                      <CheckCircle
                        size={15}
                        className="text-purple-500 flex-shrink-0 mt-0.5"
                      />

                      <div>
                        <p
                          className={`text-[13px] font-bold mb-1 ${
                            d ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {item.title}
                        </p>

                        <p
                          className={`text-[11px] leading-relaxed ${
                            d ? 'text-gray-500' : 'text-gray-500'
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
                    d ? 'bg-purple-500/10' : 'bg-purple-50'
                  }`}
                >
                  <p
                    className={`text-[12px] font-semibold text-center ${
                      d ? 'text-purple-300' : 'text-purple-700'
                    }`}
                  >
                    Existing applications can be reviewed before an ongoing
                    maintenance plan is defined.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          aria-labelledby="services-heading"
          className={`py-16 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <p className="text-purple-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                Maintenance Services
              </p>

              <h2
                id="services-heading"
                className={`text-3xl font-black mb-4 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Website & Web Application Maintenance
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Maintenance can be tailored around the technologies, risks and
                operational requirements of your existing website or
                application.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((item) => (
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

        {/* SUPPORT OPTIONS */}
        <section
          aria-labelledby="plans-heading"
          className={`py-16 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-purple-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                Flexible Support
              </p>

              <h2
                id="plans-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Maintenance Support Options
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                The final maintenance scope and pricing depend on your
                application, technology stack and support requirements.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {plans.map((plan, index) => (
                <button
                  key={plan.name}
                  type="button"
                  onClick={() => setActivePlan(index)}
                  className={`px-5 py-2.5 rounded-lg text-[12px] font-bold transition-all border ${
                    activePlan === index
                      ? 'bg-purple-600 text-white border-purple-600'
                      : d
                        ? 'bg-white/[0.03] border-white/[0.08] text-gray-400 hover:text-white'
                        : 'bg-white border-gray-200 text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {plan.name}
                </button>
              ))}
            </div>

            <div
              className={`max-w-2xl mx-auto p-7 md:p-8 rounded-3xl border ${
                activePlan === 1
                  ? d
                    ? 'border-purple-500/40 bg-purple-600/5'
                    : 'border-purple-200 bg-purple-50'
                  : d
                    ? 'bg-white/[0.02] border-white/[0.06]'
                    : 'bg-[#fafafa] border-gray-200'
              }`}
            >
              <h3
                className={`text-2xl font-black mb-2 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                {plans[activePlan].name}
              </h3>

              <p
                className={`text-sm mb-7 ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {plans[activePlan].desc}
              </p>

              <div className="space-y-3 mb-8">
                {plans[activePlan].features.map((feature) => (
                  <div
                    key={feature}
                    className={`flex items-start gap-3 text-[13px] ${
                      d ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    <CheckCircle
                      size={14}
                      className="text-purple-500 flex-shrink-0 mt-0.5"
                    />

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  onClick={scrollTop}
                  className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all"
                >
                  {plans[activePlan].cta}
                  <ArrowRight size={13} />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
                >
                  Discuss on WhatsApp
                </a>
              </div>
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
              <p className="text-purple-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                Our Process
              </p>

              <h2
                id="process-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                How Website Maintenance Works
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                A structured process for understanding, maintaining and
                improving an existing application.
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
              heading="Need ongoing technical support for your website?"
              sub="Share your current stack and maintenance requirements with DevZore so we can review the right support approach."
            />
          </div>
        </section>

        {/* SEARCH INTENT CONTENT */}
        <section
          className={`py-16 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-purple-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                  Technical Maintenance
                </p>

                <h2
                  className={`text-3xl font-black mb-4 ${
                    d ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Maintenance for React, Node.js, MERN & SaaS Applications
                </h2>

                <p
                  className={`text-base leading-relaxed mb-6 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Modern web application maintenance goes beyond changing
                  content. Frontend packages, APIs, authentication, databases,
                  integrations, deployment settings and hosting infrastructure
                  may all require ongoing technical attention.
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    'React Maintenance',
                    'Next.js Support',
                    'Node.js Maintenance',
                    'MERN Stack Support',
                    'SaaS Maintenance',
                    'API Support',
                    'Database Maintenance',
                    'Bug Fixing',
                  ].map((item) => (
                    <span
                      key={item}
                      className={`text-[11px] font-semibold px-3 py-1.5 rounded-lg border ${
                        d
                          ? 'bg-white/[0.03] border-white/[0.08] text-gray-300'
                          : 'bg-gray-50 border-gray-200 text-gray-700'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`p-7 rounded-2xl border ${
                  d
                    ? 'bg-white/[0.02] border-white/[0.06]'
                    : 'bg-[#fafafa] border-gray-200'
                }`}
              >
                <h3
                  className={`text-lg font-black mb-5 ${
                    d ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Projects We Can Review
                </h3>

                <div className="space-y-3">
                  {[
                    'Business websites and web applications',
                    'React and Next.js applications',
                    'Node.js and Express backends',
                    'MERN stack applications',
                    'SaaS products and dashboards',
                    'E-commerce applications',
                    'REST APIs and integrations',
                    'Existing custom software projects',
                  ].map((item) => (
                    <div
                      key={item}
                      className={`flex items-center gap-3 text-sm ${
                        d ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      <CheckCircle
                        size={14}
                        className="text-purple-500 flex-shrink-0"
                      />
                      {item}
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
          className={`py-16 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-purple-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                FAQ
              </p>

              <h2
                id="faq-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Website Maintenance & Support FAQ
              </h2>

              <p
                className={`text-base ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Common questions about maintaining existing websites and web
                applications.
              </p>
            </div>

            <div className="space-y-3 mb-12">
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
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? 'max-h-[500px] opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div
                        className={`px-5 pb-5 border-t text-[14px] leading-relaxed ${
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

            <CtaStrip
              heading="Have a maintenance question?"
              sub="Tell us about your website, application stack or current technical problem and we can discuss the next step."
            />
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section
          aria-label="Related services"
          className={`py-16 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <p className="text-purple-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                Related Services
              </p>

              <h2
                className={`text-2xl md:text-3xl font-black ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Explore Related Development Services
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {relatedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={scrollTop}
                  className={`group p-6 rounded-2xl border transition-all ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-purple-500/30'
                      : 'bg-white border-gray-200 hover:border-purple-200 hover:shadow-sm'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${
                      d
                        ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                        : 'bg-purple-50 border-purple-100 text-purple-600'
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
                    className={`text-sm leading-relaxed mb-5 ${
                      d ? 'text-gray-400' : 'text-gray-600'
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

        {/* FINAL CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div
              className={`p-8 md:p-10 rounded-3xl border text-center ${
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
                <Wrench size={26} />
              </div>

              <h2
                className={`text-3xl font-black mb-4 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Need Reliable Website Maintenance?
              </h2>

              <p
                className={`text-base mb-8 max-w-2xl mx-auto leading-relaxed ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Tell us about your website or web application. DevZore can
                review the technology stack, current issues and ongoing support
                requirements before recommending a suitable maintenance
                approach.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/contact"
                  onClick={scrollTop}
                  className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
                >
                  Discuss Your Website
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

export default Maintenance;