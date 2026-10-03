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
  Gauge,
  Bug,
  HardDrive,
  MonitorCheck,
  LifeBuoy,
  LockKeyhole,
} from 'lucide-react';

const Maintenance = ({ isDark }) => {
  const d = isDark;

  const [activeFaq, setActiveFaq] = useState(null);
  const [activePlan, setActivePlan] = useState(1);

  const whatsappUrl =
    'https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20website%20maintenance%20and%20support%20services.';

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
      title: 'Website Security Maintenance',
      desc: 'Ongoing website security maintenance including dependency reviews, security updates, SSL checks and application configuration reviews to help reduce avoidable security risks.',
      includes: [
        'Security update reviews',
        'Dependency vulnerability checks',
        'SSL configuration checks',
        'Application security review',
        'Framework security updates',
        'Security recommendations',
      ],
    },
    {
      icon: <MonitorCheck size={20} />,
      color: 'green',
      title: 'Website Monitoring',
      desc: 'Website and application monitoring helps identify availability problems, application errors and important operational issues that may affect users.',
      includes: [
        'Website availability monitoring',
        'Application health checks',
        'Error monitoring support',
        'API availability checks',
        'Operational issue review',
        'Technical recommendations',
      ],
    },
    {
      icon: <RefreshCw size={20} />,
      color: 'purple',
      title: 'Website Updates',
      desc: 'Planned website updates for frameworks, libraries, dependencies and application components with appropriate testing before production deployment.',
      includes: [
        'Framework updates',
        'Package updates',
        'Dependency maintenance',
        'Compatibility reviews',
        'Update testing',
        'Production deployment support',
      ],
    },
    {
      icon: <Bug size={20} />,
      color: 'amber',
      title: 'Website Bug Fixing',
      desc: 'Technical website support for identifying and resolving frontend, backend, API, database, authentication and integration problems.',
      includes: [
        'Frontend bug fixing',
        'Backend troubleshooting',
        'API issue resolution',
        'Database troubleshooting',
        'Authentication problems',
        'Integration bug fixing',
      ],
    },
    {
      icon: <Gauge size={20} />,
      color: 'cyan',
      title: 'Website Performance Optimization',
      desc: 'Website speed optimization and application performance improvements covering frontend assets, code delivery, APIs, caching and database performance where appropriate.',
      includes: [
        'Performance review',
        'Image optimization',
        'Bundle optimization',
        'Caching improvements',
        'API performance review',
        'Database query optimization',
      ],
    },
    {
      icon: <HardDrive size={20} />,
      color: 'indigo',
      title: 'Website Backup & Recovery Support',
      desc: 'Review and support for website backup, application data protection and recovery procedures based on the hosting platform and database environment.',
      includes: [
        'Backup strategy review',
        'Database backup review',
        'Recovery planning',
        'Backup configuration support',
        'Data protection recommendations',
        'Recovery procedure review',
      ],
    },
    {
      icon: <Settings size={20} />,
      color: 'orange',
      title: 'Website Management Services',
      desc: 'Ongoing technical website management covering deployments, hosting configuration, environment settings, logs, infrastructure and operational maintenance.',
      includes: [
        'Deployment management',
        'Environment configuration',
        'Hosting configuration review',
        'Application log review',
        'Infrastructure maintenance',
        'Technical coordination',
      ],
    },
    {
      icon: <Bell size={20} />,
      color: 'red',
      title: 'Website Troubleshooting & Support',
      desc: 'Structured website troubleshooting for production issues, unexpected application behaviour, deployment problems and other technical incidents.',
      includes: [
        'Production issue investigation',
        'Technical diagnosis',
        'Deployment troubleshooting',
        'Application error review',
        'Incident support',
        'Preventive recommendations',
      ],
    },
    {
      icon: <Eye size={20} />,
      color: 'pink',
      title: 'Maintenance Reports & Reviews',
      desc: 'Clear maintenance summaries covering completed work, identified technical issues, updates performed and recommended improvements.',
      includes: [
        'Maintenance summaries',
        'Completed work overview',
        'Issue reporting',
        'Update records',
        'Performance observations',
        'Technical recommendations',
      ],
    },
  ];

  const plans = [
    {
      name: 'Essential',
      desc: 'Suitable for business websites and smaller web applications that need routine website maintenance and technical support.',
      features: [
        'Routine dependency and security reviews',
        'Website availability monitoring',
        'Backup configuration review',
        'Website performance health checks',
        'General bug fixing allocation',
        'SSL and deployment checks',
        'Maintenance summary',
        'Email support',
      ],
      cta: 'Discuss Essential',
    },
    {
      name: 'Professional',
      desc: 'Designed for active websites, e-commerce applications and growing digital products requiring broader website support services.',
      features: [
        'Everything in Essential',
        'More frequent dependency reviews',
        'Application error monitoring',
        'Database and API health checks',
        'Website speed optimization support',
        'Priority issue handling',
        'Deployment and infrastructure support',
        'Technical recommendations',
        'Email and WhatsApp communication',
      ],
      cta: 'Discuss Professional',
    },
    {
      name: 'Advanced',
      desc: 'For SaaS platforms, custom software and applications with broader software maintenance and support requirements.',
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
      title: 'Website & Codebase Review',
      desc: 'We review the website or application stack, codebase, deployment setup, dependencies, database, integrations and current technical condition.',
    },
    {
      n: '02',
      title: 'Maintenance Scope',
      desc: 'We identify the areas requiring ongoing website management and define a maintenance scope based on the application, infrastructure and business requirements.',
    },
    {
      n: '03',
      title: 'Monitoring & Backup Review',
      desc: 'Website monitoring, application logging and backup arrangements are reviewed or configured where they form part of the agreed maintenance scope.',
    },
    {
      n: '04',
      title: 'Updates & Bug Fixing',
      desc: 'Website updates, software dependencies, bugs, security concerns and operational issues are handled according to priority and the agreed support arrangement.',
    },
    {
      n: '05',
      title: 'Testing & Deployment',
      desc: 'Relevant maintenance changes are reviewed and tested before production deployment to help reduce regressions and unexpected application behaviour.',
    },
    {
      n: '06',
      title: 'Reporting & Improvement',
      desc: 'Completed maintenance work is summarised and technical recommendations are provided for improving website security, performance and maintainability.',
    },
  ];

  const supportAreas = [
    {
      icon: <Shield size={19} />,
      title: 'Security Maintenance',
      desc: 'Keep dependencies, frameworks and important website configurations under regular technical review.',
    },
    {
      icon: <Gauge size={19} />,
      title: 'Performance Optimization',
      desc: 'Identify opportunities to improve website speed, frontend delivery, APIs and database performance.',
    },
    {
      icon: <Bug size={19} />,
      title: 'Bug Fixing',
      desc: 'Investigate website and web application problems across frontend, backend, databases and integrations.',
    },
    {
      icon: <LifeBuoy size={19} />,
      title: 'Technical Support',
      desc: 'Get ongoing technical website support for operational problems, updates and application maintenance.',
    },
  ];

  const faqs = [
    {
      q: 'What are website maintenance services?',
      a: 'Website maintenance services provide ongoing technical care after a website or web application is launched. Depending on the project, maintenance can include website updates, bug fixing, security reviews, monitoring, backups, performance optimization, deployment support and technical troubleshooting.',
    },
    {
      q: 'What is included in website maintenance?',
      a: 'The exact website maintenance scope depends on the project. It can include dependency updates, website security maintenance, bug fixing, website monitoring, backups, performance improvements, deployment checks, database support and technical reporting.',
    },
    {
      q: 'Does DevZore provide website support services?',
      a: 'Yes. DevZore provides technical website support for existing websites and web applications. Support can cover frontend issues, backend problems, APIs, databases, integrations, deployment environments, application updates and performance issues.',
    },
    {
      q: 'Can DevZore maintain a website you did not build?',
      a: 'Yes. Existing websites and web applications can be reviewed before maintenance begins. We inspect the technology stack, codebase, deployment environment and known issues before defining the appropriate support scope.',
    },
    {
      q: 'Which technologies can you maintain?',
      a: 'Our software maintenance work can cover modern JavaScript applications including React, Next.js, Node.js, Express, MERN stack applications, REST APIs, databases and custom web platforms. Each project is reviewed before the exact support scope is confirmed.',
    },
    {
      q: 'Do you provide React and Node.js maintenance?',
      a: 'Yes. Web application support can include React frontend maintenance, Node.js and Express backend work, API troubleshooting, dependency updates, database-related issues and deployment configuration.',
    },
    {
      q: 'Do you provide SaaS and application maintenance?',
      a: 'Yes. Application maintenance for SaaS products can include frontend and backend updates, authentication issues, API integrations, database work, deployment support, monitoring, bug fixing and performance improvements depending on the architecture.',
    },
    {
      q: 'Can you fix bugs in an existing website or application?',
      a: 'Yes. Website bug fixing can cover frontend, backend, API, database, authentication, integration and deployment issues. We normally review the problem and relevant code before estimating the work required.',
    },
    {
      q: 'Do you provide website troubleshooting?',
      a: 'Yes. Website troubleshooting can include investigating application errors, broken functionality, API failures, deployment problems, database issues, performance problems and unexpected behaviour.',
    },
    {
      q: 'Do you provide website monitoring?',
      a: 'Website monitoring can be included in a maintenance arrangement. The exact monitoring setup depends on the website, application infrastructure and level of visibility required.',
    },
    {
      q: 'Do you handle website security maintenance?',
      a: 'Yes. Website security maintenance can include dependency reviews, framework updates, SSL checks, configuration reviews and identified vulnerability remediation. Security maintenance helps reduce risk, although no website can be guaranteed to be completely risk-free.',
    },
    {
      q: 'Can you improve website speed as part of maintenance?',
      a: 'Yes. Website speed optimization can include image and asset optimization, JavaScript bundle reviews, caching improvements, frontend performance work, API optimization and database query improvements where appropriate.',
    },
    {
      q: 'Do you provide website backup support?',
      a: 'Yes. We can review website and database backup arrangements, backup configuration and recovery procedures based on the technologies and hosting environment used by the project.',
    },
    {
      q: 'What is the difference between website maintenance and website management?',
      a: 'Website maintenance generally focuses on keeping the technical system updated, stable and functional. Website management can be broader and may include deployments, hosting configuration, monitoring, technical coordination and ongoing operational support. The exact scope depends on the service arrangement.',
    },
    {
      q: 'How much do website maintenance services cost?',
      a: 'Website maintenance pricing depends on the technology stack, application size, existing technical condition, support level and expected workload. After reviewing the project, DevZore can provide a tailored maintenance scope and proposal.',
    },
  ];

  const relatedServices = [
    {
      icon: <Code2 size={22} />,
      title: 'Web Development',
      desc: 'Modern business websites and custom web applications designed and developed around your requirements.',
      path: '/web-development',
    },
    {
      icon: <Server size={22} />,
      title: 'Backend & API Development',
      desc: 'Node.js, Express, REST APIs, authentication, databases and third-party integration development.',
      path: '/backend-api',
    },
    {
      icon: <Activity size={22} />,
      title: 'SaaS Product Development',
      desc: 'Frontend, backend and product development for modern SaaS applications and digital platforms.',
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
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': 'https://devzore.com/maintenance#service',
            name: 'Website Maintenance & Support Services',
            alternateName: [
              'Website Maintenance Services',
              'Website Support Services',
              'Website Management Services',
              'Web Application Support',
              'Software Maintenance Services',
            ],
            description:
              'Professional website maintenance and support services including website updates, bug fixing, troubleshooting, security maintenance, backups, monitoring, performance optimization and web application support.',
            url: 'https://devzore.com/maintenance',
            serviceType: 'Website Maintenance and Support Services',
            provider: {
              '@id': 'https://devzore.com/#organization',
            },
            areaServed: {
              '@type': 'Place',
              name: 'Worldwide',
            },
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

        {/* FAQ Schema */}
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

        {/* Breadcrumb Schema */}
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
                name: 'Website Maintenance & Support',
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
                    Website Maintenance
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
                  Website Updates · Security · Monitoring · Bug Fixing ·
                  Backups · Performance Optimization
                </p>

                <p
                  className={`text-base leading-relaxed mb-5 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  DevZore provides professional website maintenance services
                  and technical website support for businesses that need
                  ongoing care after launch. We help maintain websites,
                  dashboards, APIs, SaaS products and custom web applications.
                </p>

                <p
                  className={`text-base leading-relaxed mb-8 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Our website management services can cover React, Next.js,
                  Node.js, Express, MERN stack applications, databases, APIs,
                  third-party integrations and deployment environments.
                  Existing projects can also be reviewed before ongoing
                  maintenance begins.
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
                      label: 'Website health',
                    },
                    {
                      icon: <Bug size={18} />,
                      title: 'Bug Fixing',
                      label: 'Technical support',
                    },
                    {
                      icon: <Gauge size={18} />,
                      title: 'Performance',
                      label: 'Speed optimization',
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

                      <div className="text-[10px] mt-1 text-gray-500">
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
                  Ongoing Website Support
                </p>

                <div className="space-y-3">
                  {[
                    {
                      title: 'Website Updates',
                      desc: 'Keep frameworks, dependencies and application components maintained.',
                    },
                    {
                      title: 'Website Bug Fixing',
                      desc: 'Investigate technical errors and unexpected application behaviour.',
                    },
                    {
                      title: 'Website Performance',
                      desc: 'Review speed, frontend delivery, APIs and database performance.',
                    },
                    {
                      title: 'Website Security',
                      desc: 'Review dependencies, SSL and important application configurations.',
                    },
                    {
                      title: 'Website Monitoring',
                      desc: 'Monitor important website and application operational signals.',
                    },
                    {
                      title: 'Website Backup',
                      desc: 'Review backup and recovery arrangements for important application data.',
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
                    Existing websites and applications can be reviewed before
                    an ongoing support plan is defined.
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
                Complete Website Maintenance Services
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                From routine website updates and monitoring to bug fixing,
                security maintenance and performance optimization, support can
                be tailored around your website or application's technical
                requirements.
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
                    className={`text-[13px] leading-relaxed mb-5 ${
                      d ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {item.desc}
                  </p>

                  <div className="space-y-2">
                    {item.includes.map((feature) => (
                      <div
                        key={feature}
                        className={`flex items-start gap-2 text-[11px] ${
                          d ? 'text-gray-500' : 'text-gray-500'
                        }`}
                      >
                        <CheckCircle
                          size={11}
                          className="text-purple-500 flex-shrink-0 mt-0.5"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAINTENANCE APPROACH */}
        <section
          aria-labelledby="support-approach-heading"
          className={`py-16 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-purple-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                Ongoing Technical Care
              </p>

              <h2
                id="support-approach-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                More Than Basic Website Updates
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Modern website maintenance combines security, performance,
                monitoring and technical support to keep important parts of
                your digital platform under regular review.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {supportAreas.map((item) => (
                <div
                  key={item.title}
                  className={`p-6 rounded-2xl border ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-[#fafafa] border-gray-200'
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
                    className={`text-sm font-bold mb-2 ${
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
              heading="Looking for ongoing website support?"
              sub="Tell us about your website, technology stack and current maintenance requirements."
            />
          </div>
        </section>

        {/* SUPPORT OPTIONS */}
        <section
          aria-labelledby="plans-heading"
          className={`py-16 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
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
                Website Maintenance Support Options
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                The final website maintenance scope and pricing depend on your
                application, technology stack, existing condition and ongoing
                support requirements.
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
                    : 'bg-white border-gray-200'
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
            d ? 'border-white/[0.06]' : 'border-gray-100'
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
                How Our Website Maintenance Process Works
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                A structured process for understanding, maintaining,
                troubleshooting and improving an existing website or web
                application.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
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

            <CtaStrip
              heading="Need technical website support?"
              sub="Share your current stack, website issues and maintenance requirements so we can discuss the right support approach."
            />
          </div>
        </section>

        {/* TECHNICAL SUPPORT */}
        <section
          aria-labelledby="technical-support-heading"
          className={`py-16 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              <div
                className={`p-7 md:p-8 rounded-3xl border ${
                  d
                    ? 'bg-white/[0.02] border-white/[0.06]'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                    d
                      ? 'bg-purple-500/10 text-purple-400'
                      : 'bg-purple-50 text-purple-600'
                  }`}
                >
                  <Code2 size={21} />
                </div>

                <p className="text-purple-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                  Web Application Support
                </p>

                <h2
                  id="technical-support-heading"
                  className={`text-2xl md:text-3xl font-black mb-4 ${
                    d ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  React, Node.js, MERN & SaaS Maintenance
                </h2>

                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Software maintenance for modern web applications goes beyond
                  editing website content. Frontend packages, APIs,
                  authentication, databases, integrations, deployment settings
                  and hosting infrastructure can all require ongoing technical
                  attention.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'React Maintenance',
                    'Next.js Support',
                    'Node.js Maintenance',
                    'Express Support',
                    'MERN Stack Support',
                    'SaaS Maintenance',
                    'API Support',
                    'Database Maintenance',
                  ].map((item) => (
                    <div
                      key={item}
                      className={`flex items-center gap-2 p-3 rounded-xl border text-[12px] font-semibold ${
                        d
                          ? 'bg-white/[0.02] border-white/[0.06] text-gray-300'
                          : 'bg-gray-50 border-gray-200 text-gray-700'
                      }`}
                    >
                      <CheckCircle
                        size={13}
                        className="text-purple-500 flex-shrink-0"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`p-7 md:p-8 rounded-3xl border ${
                  d
                    ? 'bg-white/[0.02] border-white/[0.06]'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                    d
                      ? 'bg-purple-500/10 text-purple-400'
                      : 'bg-purple-50 text-purple-600'
                  }`}
                >
                  <Server size={21} />
                </div>

                <p className="text-purple-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                  Projects We Support
                </p>

                <h2
                  className={`text-2xl md:text-3xl font-black mb-4 ${
                    d ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Website & Application Maintenance
                </h2>

                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Existing projects can be technically reviewed before DevZore
                  takes responsibility for an agreed maintenance or web support
                  scope.
                </p>

                <div className="space-y-3">
                  {[
                    'Business websites and web applications',
                    'React and Next.js applications',
                    'Node.js and Express backends',
                    'MERN stack applications',
                    'SaaS products and dashboards',
                    'E-commerce applications',
                    'REST APIs and integrations',
                    'Custom software projects',
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

        {/* WHY MAINTENANCE */}
        <section
          aria-labelledby="why-maintenance-heading"
          className={`py-16 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-purple-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                  Website Management
                </p>

                <h2
                  id="why-maintenance-heading"
                  className={`text-3xl font-black mb-4 ${
                    d ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Why Ongoing Website Maintenance Matters
                </h2>

                <p
                  className={`text-base leading-relaxed mb-5 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  A website can continue to change after launch even when the
                  visible design stays the same. Frameworks and dependencies
                  receive updates, browsers change, APIs evolve and application
                  data grows over time.
                </p>

                <p
                  className={`text-base leading-relaxed ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Regular web maintenance helps teams identify technical
                  problems earlier, keep software dependencies under review,
                  maintain important operational processes and plan
                  improvements before issues become harder to manage.
                </p>
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
                  Maintenance Can Cover
                </h3>

                <div className="space-y-3">
                  {[
                    'Website security maintenance and updates',
                    'Website bug fixing and troubleshooting',
                    'Website performance and speed optimization',
                    'Website backup and recovery planning',
                    'Website and application monitoring',
                    'Software and dependency maintenance',
                    'Deployment and infrastructure support',
                    'Ongoing web application support',
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
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
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
                Common questions about website maintenance services, website
                support, security, monitoring, backups and application
                maintenance.
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
                          ? 'max-h-[600px] opacity-100'
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
              heading="Have a website maintenance question?"
              sub="Tell us about your website, application stack or current technical problem and we can discuss the next step."
            />
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section
          aria-label="Related services"
          className={`py-16 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
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
                      : 'bg-[#fafafa] border-gray-200 hover:border-purple-200 hover:shadow-sm'
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
                Need Reliable Website Maintenance & Support?
              </h2>

              <p
                className={`text-base mb-8 max-w-2xl mx-auto leading-relaxed ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Tell us about your website or web application. DevZore can
                review your technology stack, current technical issues,
                website security, performance and ongoing support requirements
                before discussing a suitable maintenance approach.
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