import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Code2,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Heart,
  Target,
  Globe,
  Rocket,
  Lock,
  HeartHandshake,
  Layers,
  Server,
  Smartphone,
} from 'lucide-react';

const About = ({ isDark }) => {
  const d = isDark;

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const values = [
    {
      icon: <Shield size={20} />,
      color: 'blue',
      title: 'Transparent Collaboration',
      desc: 'We keep project scope, milestones, technical decisions and progress clear throughout the development process so clients understand what is being built and why.',
    },
    {
      icon: <Code2 size={20} />,
      color: 'purple',
      title: 'Maintainable Engineering',
      desc: 'We focus on clean architecture, reusable components, organised code and practical documentation so applications remain easier to maintain and extend.',
    },
    {
      icon: <Lock size={20} />,
      color: 'green',
      title: 'Security-Conscious Development',
      desc: 'Security is considered throughout development, including authentication, validation, permissions, environment configuration and responsible handling of application data.',
    },
    {
      icon: <Heart size={20} />,
      color: 'rose',
      title: 'Client-Focused Development',
      desc: 'Technology decisions are guided by the actual needs of the product and business rather than adding unnecessary complexity or features that do not provide useful value.',
    },
    {
      icon: <Zap size={20} />,
      color: 'amber',
      title: 'Performance Focus',
      desc: 'We consider page speed, responsive interfaces, efficient frontend rendering, API performance and practical optimisation as part of building production-ready software.',
    },
    {
      icon: <HeartHandshake size={20} />,
      color: 'cyan',
      title: 'Direct Communication',
      desc: 'Clear communication helps reduce misunderstandings and keeps projects moving. Clients can discuss requirements, feedback and technical questions directly with the team.',
    },
  ];

  const colorMap = {
    blue: d
      ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
      : 'bg-blue-50 border-blue-100 text-blue-600',
    purple: d
      ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
      : 'bg-purple-50 border-purple-100 text-purple-600',
    green: d
      ? 'bg-green-500/10 border-green-500/20 text-green-400'
      : 'bg-green-50 border-green-100 text-green-600',
    rose: d
      ? 'bg-rose-500/10 border-rose-500/20 text-rose-400'
      : 'bg-rose-50 border-rose-100 text-rose-600',
    amber: d
      ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'
      : 'bg-amber-50 border-amber-100 text-amber-600',
    cyan: d
      ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
      : 'bg-cyan-50 border-cyan-100 text-cyan-600',
  };

  const capabilities = [
    {
      icon: <Code2 size={20} />,
      title: 'Web Applications',
      desc: 'Responsive business websites, custom web applications, dashboards and customer-facing platforms.',
    },
    {
      icon: <Layers size={20} />,
      title: 'Full-Stack Development',
      desc: 'Frontend, backend, databases and APIs developed as connected parts of a complete software product.',
    },
    {
      icon: <Rocket size={20} />,
      title: 'SaaS & MVP Development',
      desc: 'Software products and MVPs designed around practical workflows, maintainable architecture and future development.',
    },
    {
      icon: <Smartphone size={20} />,
      title: 'Mobile Applications',
      desc: 'Cross-platform mobile application development connected to secure APIs, databases and business systems.',
    },
  ];

  const expertise = [
    'React & Modern Frontend Development',
    'Node.js & Express.js Backend Development',
    'MERN Stack Application Development',
    'REST API Development & Integration',
    'MongoDB & Database Development',
    'SaaS Product Development',
    'Responsive Web Application Development',
    'Authentication & Role-Based Access',
    'Cloud Deployment & Application Hosting',
    'UI/UX Implementation',
    'Technical SEO & Search-Friendly Development',
    'Website Maintenance & Technical Support',
  ];

  const industries = [
    {
      icon: '🛒',
      name: 'E-Commerce & Retail',
      desc: 'Stores, product systems and business applications',
    },
    {
      icon: '✈️',
      name: 'Travel & Tourism',
      desc: 'Tour websites, booking experiences and service platforms',
    },
    {
      icon: '⚙️',
      name: 'SaaS & Software',
      desc: 'Dashboards, subscription products and web platforms',
    },
    {
      icon: '🏢',
      name: 'Business Services',
      desc: 'Operational tools, portals and internal systems',
    },
    {
      icon: '📚',
      name: 'Education',
      desc: 'Learning portals and education-focused applications',
    },
    {
      icon: '🏗️',
      name: 'Property & Services',
      desc: 'Listings, management tools and service websites',
    },
    {
      icon: '📊',
      name: 'Management Systems',
      desc: 'Custom dashboards, reporting and workflow software',
    },
    {
      icon: '🚀',
      name: 'Startups',
      desc: 'MVPs and scalable foundations for new digital products',
    },
  ];

  const process = [
    {
      n: '01',
      title: 'Discovery & Requirements',
      desc: 'We start by understanding the business, users, required features, technical constraints and project priorities.',
    },
    {
      n: '02',
      title: 'Planning & Architecture',
      desc: 'The application structure, technology choices, database requirements and key user flows are planned before implementation.',
    },
    {
      n: '03',
      title: 'Design & Development',
      desc: 'We build the interface and application functionality in manageable stages while keeping the project aligned with the agreed requirements.',
    },
    {
      n: '04',
      title: 'Testing & Review',
      desc: 'Core functionality, responsive behaviour and important user flows are reviewed and tested before production release.',
    },
    {
      n: '05',
      title: 'Deployment',
      desc: 'The application is prepared for production and deployed to an appropriate hosting or cloud environment based on project requirements.',
    },
    {
      n: '06',
      title: 'Support & Improvement',
      desc: 'After launch, maintenance, fixes and future improvements can be handled according to the ongoing needs of the product.',
    },
  ];

  const faqs = [
    {
      q: 'What is DevZore?',
      a: 'DevZore is a software development agency providing web development, mobile app development, MERN stack development, backend and API development, SaaS development, UI/UX implementation, SEO and related digital services.',
    },
    {
      q: 'Who founded DevZore?',
      a: 'DevZore was founded by Muhammad Shoukat with a focus on building practical digital products and software solutions for businesses and startups.',
    },
    {
      q: 'Where does DevZore provide its services?',
      a: 'DevZore can work remotely with businesses and startups in Pakistan and international markets. Project communication and delivery can be managed online through common collaboration tools.',
    },
    {
      q: 'What technologies does DevZore work with?',
      a: 'Our development work includes technologies such as React, Node.js, Express.js, MongoDB, JavaScript, TypeScript and other tools selected according to the requirements of each project.',
    },
    {
      q: 'Does DevZore build custom software?',
      a: 'Yes. We can develop custom web applications, management systems, dashboards, APIs, SaaS products and other software based on specific business requirements.',
    },
    {
      q: 'Does DevZore develop mobile applications?',
      a: 'Yes. Mobile application development can include cross-platform applications, backend APIs, authentication, database integration and supporting web systems.',
    },
    {
      q: 'Can DevZore work on an existing project?',
      a: 'Yes. Depending on the codebase and requirements, we can help with new features, frontend improvements, backend development, API integrations, bug fixes, performance work and ongoing maintenance.',
    },
    {
      q: 'How can I discuss a project with DevZore?',
      a: 'You can use the DevZore contact page or WhatsApp to share your project requirements. After reviewing the requirements, we can discuss the appropriate scope, technology and next steps.',
    },
  ];

  const relatedServices = [
    {
      icon: <Code2 size={22} />,
      title: 'Web Development',
      desc: 'Custom websites and web applications built for modern businesses.',
      path: '/web-development',
    },
    {
      icon: <Server size={22} />,
      title: 'Backend & API',
      desc: 'Backend systems, REST APIs, databases and application integrations.',
      path: '/backend-api',
    },
    {
      icon: <Rocket size={22} />,
      title: 'SaaS Product',
      desc: 'Development for SaaS platforms, dashboards and digital products.',
      path: '/saas-product-development',
    },
  ];

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            '@id': 'https://devzore.com/about#aboutpage',
            url: 'https://devzore.com/about',
            name: 'About DevZore',
            description:
              'Learn about DevZore, a software development agency providing web application, mobile app, MERN stack, backend API and SaaS development services.',
            isPartOf: {
              '@id': 'https://devzore.com/#website',
            },
            about: {
              '@id': 'https://devzore.com/#organization',
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
                name: 'About',
                item: 'https://devzore.com/about',
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
          aria-labelledby="about-heading"
          className={`pt-28 pb-14 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    About DevZore
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
                  id="about-heading"
                  className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5 ${
                    d ? 'text-white' : 'text-slate-950'
                  }`}
                >
                  Software Development for{' '}
                  <span className="text-purple-600">
                    Modern Businesses & Startups
                  </span>
                </h1>

                <p
                  className={`text-base leading-relaxed mb-5 ${
                    d ? 'text-gray-400' : 'text-slate-600'
                  }`}
                >
                  DevZore is a software development agency founded by{' '}
                  <strong className={d ? 'text-gray-200' : 'text-slate-800'}>
                    Muhammad Shoukat
                  </strong>
                  . We design and develop web applications, mobile applications,
                  SaaS products, backend systems and custom digital solutions for
                  businesses and startups.
                </p>

                <p
                  className={`text-base leading-relaxed mb-5 ${
                    d ? 'text-gray-400' : 'text-slate-600'
                  }`}
                >
                  Our development work covers modern frontend engineering,
                  backend APIs, databases, authentication, responsive interfaces,
                  cloud deployment and the technical foundations required to run
                  reliable digital products.
                </p>

                <p
                  className={`text-base leading-relaxed mb-8 ${
                    d ? 'text-gray-500' : 'text-slate-500'
                  }`}
                >
                  We work remotely and can collaborate with clients worldwide.
                  Each project is approached according to its actual requirements,
                  users and business goals rather than forcing every product into
                  the same technical solution.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    onClick={scrollTop}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                  >
                    Discuss Your Project
                    <ArrowRight size={14} />
                  </Link>

                  <a
                    href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20a%20software%20development%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
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
                className={`p-6 sm:p-8 rounded-3xl border ${
                  d
                    ? 'bg-white/[0.02] border-white/[0.08]'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <p
                  className={`text-[11px] font-black uppercase tracking-widest mb-6 ${
                    d ? 'text-gray-500' : 'text-slate-400'
                  }`}
                >
                  What We Build
                </p>

                <div className="space-y-4">
                  {capabilities.map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-4 pb-4 border-b last:border-0 ${
                        d ? 'border-white/[0.05]' : 'border-slate-200'
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          d
                            ? 'bg-purple-500/10 text-purple-400'
                            : 'bg-purple-50 text-purple-600'
                        }`}
                      >
                        {item.icon}
                      </div>

                      <div>
                        <h2
                          className={`text-[13px] font-bold mb-1 ${
                            d ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {item.title}
                        </h2>

                        <p
                          className={`text-[12px] leading-relaxed ${
                            d ? 'text-gray-500' : 'text-slate-500'
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

        {/* ABOUT / STORY */}
        <section
          aria-labelledby="story-heading"
          className={`py-14 sm:py-16 border-b ${
            d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-slate-50'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2
                  id="story-heading"
                  className={`text-2xl sm:text-3xl font-black mb-5 ${
                    d ? 'text-white' : 'text-slate-950'
                  }`}
                >
                  Building Software With a{' '}
                  <span className="text-purple-600">Practical Approach</span>
                </h2>

                <div
                  className={`space-y-4 text-[14px] leading-relaxed ${
                    d ? 'text-gray-400' : 'text-slate-600'
                  }`}
                >
                  <p>
                    DevZore was created to help businesses turn ideas and operational
                    requirements into useful digital products. That can mean a new
                    business website, a custom management system, a SaaS platform,
                    a mobile application or a backend that connects several services.
                  </p>

                  <p>
                    Our approach starts with understanding the problem before choosing
                    the technology. The objective is to build software that is useful,
                    maintainable and appropriate for the stage of the business.
                  </p>

                  <p>
                    We use modern web technologies and reusable development practices
                    while keeping the architecture understandable enough for future
                    improvements and maintenance.
                  </p>

                  <p>
                    DevZore can work with startups launching new products as well as
                    existing businesses that need to improve, replace or extend their
                    current digital systems.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: <Target size={20} />,
                    color: 'purple',
                    title: 'Our Mission',
                    text: 'To help businesses build useful, maintainable and well-designed digital products through practical software engineering and clear collaboration.',
                  },
                  {
                    icon: <Rocket size={20} />,
                    color: 'blue',
                    title: 'Our Direction',
                    text: 'To continue developing DevZore as a trusted software development partner for businesses and startups that need modern web, mobile and SaaS solutions.',
                  },
                  {
                    icon: <Lightbulb size={20} />,
                    color: 'amber',
                    title: 'Our Approach',
                    text: 'Understand the requirement, choose an appropriate technical solution, build in manageable stages, test important workflows and improve the product as its needs evolve.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`p-5 sm:p-6 rounded-2xl border ${
                      d
                        ? 'bg-white/[0.02] border-white/[0.06]'
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-9 h-9 rounded-xl border flex items-center justify-center ${
                          colorMap[item.color]
                        }`}
                      >
                        {item.icon}
                      </div>

                      <h3
                        className={`text-[14px] font-bold ${
                          d ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <p
                      className={`text-[13px] leading-relaxed ${
                        d ? 'text-gray-400' : 'text-slate-600'
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section
          aria-labelledby="values-heading"
          className={`py-14 sm:py-16 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <h2
                id="values-heading"
                className={`text-2xl sm:text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-slate-950'
                }`}
              >
                How We Approach{' '}
                <span className="text-purple-600">Software Development</span>
              </h2>

              <p
                className={`text-[14px] leading-relaxed ${
                  d ? 'text-gray-400' : 'text-slate-600'
                }`}
              >
                Good software is more than a working interface. We consider
                maintainability, performance, security, communication and future
                development throughout the project.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {values.map((item, i) => (
                <div
                  key={i}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all hover:-translate-y-0.5 hover:border-purple-500/25 ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                      : 'bg-white border-slate-200 hover:shadow-sm'
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
                      d ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-[13px] leading-relaxed ${
                      d ? 'text-gray-400' : 'text-slate-600'
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section
          aria-labelledby="expertise-heading"
          className={`py-14 sm:py-16 border-b ${
            d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-slate-50'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2
                  id="expertise-heading"
                  className={`text-2xl sm:text-3xl font-black mb-4 ${
                    d ? 'text-white' : 'text-slate-950'
                  }`}
                >
                  Software Development{' '}
                  <span className="text-purple-600">Capabilities</span>
                </h2>

                <p
                  className={`text-[14px] leading-relaxed mb-6 ${
                    d ? 'text-gray-400' : 'text-slate-600'
                  }`}
                >
                  Our work covers the main layers required to build and operate
                  modern web applications and digital products.
                </p>

                <div className="space-y-2">
                  {expertise.map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 p-3 rounded-xl border ${
                        d
                          ? 'bg-white/[0.02] border-white/[0.06]'
                          : 'bg-white border-slate-200'
                      }`}
                    >
                      <CheckCircle
                        size={13}
                        className="text-purple-500 flex-shrink-0"
                      />

                      <span
                        className={`text-[12px] font-medium ${
                          d ? 'text-gray-300' : 'text-slate-700'
                        }`}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3
                  className={`text-xl font-black mb-4 ${
                    d ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Solutions for Different{' '}
                  <span className="text-purple-600">Business Needs</span>
                </h3>

                <p
                  className={`text-[13px] leading-relaxed mb-5 ${
                    d ? 'text-gray-400' : 'text-slate-600'
                  }`}
                >
                  Our development services can be adapted to different industries
                  and workflows depending on the requirements of the project.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {industries.map((industry, i) => (
                    <div
                      key={i}
                      className={`p-4 rounded-xl border transition-all hover:border-purple-500/25 hover:-translate-y-0.5 ${
                        d
                          ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                          : 'bg-white border-slate-200 hover:shadow-sm'
                      }`}
                    >
                      <div className="text-2xl mb-2">{industry.icon}</div>

                      <p
                        className={`text-[12px] font-bold mb-1 ${
                          d ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {industry.name}
                      </p>

                      <p
                        className={`text-[10px] leading-relaxed ${
                          d ? 'text-gray-500' : 'text-slate-500'
                        }`}
                      >
                        {industry.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section
          aria-labelledby="process-heading"
          className={`py-14 sm:py-16 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2
                id="process-heading"
                className={`text-2xl sm:text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-slate-950'
                }`}
              >
                Our Software Development{' '}
                <span className="text-purple-600">Process</span>
              </h2>

              <p
                className={`text-[14px] max-w-2xl mx-auto ${
                  d ? 'text-gray-400' : 'text-slate-600'
                }`}
              >
                A structured workflow from initial requirements through development,
                deployment and future improvements.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {process.map((step, i) => (
                <div
                  key={i}
                  className={`p-5 sm:p-6 rounded-2xl border ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div
                    className={`text-[12px] font-black mb-3 ${
                      d ? 'text-purple-400' : 'text-purple-600'
                    }`}
                  >
                    {step.n}
                  </div>

                  <h3
                    className={`text-[14px] font-bold mb-2 ${
                      d ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-[12px] leading-relaxed ${
                      d ? 'text-gray-400' : 'text-slate-600'
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEARCH INTENT / VISIBLE SEO CONTENT */}
        <section
          aria-labelledby="development-heading"
          className={`py-14 sm:py-16 border-b ${
            d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-slate-50'
          }`}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2
                id="development-heading"
                className={`text-2xl sm:text-3xl font-black mb-4 ${
                  d ? 'text-white' : 'text-slate-950'
                }`}
              >
                Web, Mobile, MERN Stack &{' '}
                <span className="text-purple-600">
                  SaaS Development Services
                </span>
              </h2>

              <p
                className={`text-[14px] leading-relaxed max-w-3xl mx-auto ${
                  d ? 'text-gray-400' : 'text-slate-600'
                }`}
              >
                DevZore provides software development services for companies that
                need custom web applications, MERN stack development, React
                frontend development, Node.js backend development, API integration,
                SaaS products, mobile applications and ongoing technical support.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {[
                'Software Development Agency',
                'Web Application Development',
                'MERN Stack Development',
                'React Development',
                'Node.js Development',
                'Backend & API Development',
                'SaaS Development',
                'Mobile App Development',
                'Custom Software Development',
                'Website Maintenance',
              ].map((item) => (
                <span
                  key={item}
                  className={`px-3 py-2 rounded-lg border text-[11px] font-semibold ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.07] text-gray-400'
                      : 'bg-white border-slate-200 text-slate-600'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          aria-labelledby="faq-heading"
          className={`py-14 sm:py-16 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2
                id="faq-heading"
                className={`text-2xl sm:text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-slate-950'
                }`}
              >
                About DevZore{' '}
                <span className="text-purple-600">FAQ</span>
              </h2>

              <p
                className={`text-[14px] ${
                  d ? 'text-gray-400' : 'text-slate-600'
                }`}
              >
                Common questions about our software development services and
                project workflow.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`p-5 sm:p-6 rounded-2xl border ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <h3
                    className={`text-[14px] font-bold mb-2 ${
                      d ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {faq.q}
                  </h3>

                  <p
                    className={`text-[13px] leading-relaxed ${
                      d ? 'text-gray-400' : 'text-slate-600'
                    }`}
                  >
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section
          aria-labelledby="related-services-heading"
          className={`py-14 sm:py-16 border-b ${
            d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-slate-50'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p
                className={`text-[11px] font-black uppercase tracking-widest mb-2 ${
                  d ? 'text-gray-600' : 'text-slate-400'
                }`}
              >
                Explore Our Services
              </p>

              <h2
                id="related-services-heading"
                className={`text-2xl sm:text-3xl font-black ${
                  d ? 'text-white' : 'text-slate-950'
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
                  className={`group p-6 rounded-2xl border transition-all hover:-translate-y-1 hover:border-purple-500/30 ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                      : 'bg-white border-slate-200 hover:shadow-md'
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
                      d ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-[13px] leading-relaxed mb-5 ${
                      d ? 'text-gray-400' : 'text-slate-600'
                    }`}
                  >
                    {service.desc}
                  </p>

                  <span className="inline-flex items-center gap-2 text-[12px] font-bold text-purple-500">
                    Learn More
                    <ArrowRight
                      size={13}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`p-8 sm:p-10 rounded-3xl border text-center ${
                d
                  ? 'bg-white/[0.02] border-white/[0.06]'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div
                className={`w-12 h-12 mx-auto rounded-2xl flex items-center justify-center mb-5 ${
                  d
                    ? 'bg-purple-500/10 text-purple-400'
                    : 'bg-purple-50 text-purple-600'
                }`}
              >
                <Rocket size={22} />
              </div>

              <h2
                className={`text-2xl sm:text-3xl font-black mb-4 ${
                  d ? 'text-white' : 'text-slate-950'
                }`}
              >
                Have a Software Project in Mind?
              </h2>

              <p
                className={`text-[14px] leading-relaxed mb-8 max-w-xl mx-auto ${
                  d ? 'text-gray-400' : 'text-slate-600'
                }`}
              >
                Tell us what you want to build, improve or automate. We can review
                the requirements and discuss an appropriate technical approach for
                your project.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/contact"
                  onClick={scrollTop}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
                >
                  Discuss Your Project
                  <ArrowRight size={15} />
                </Link>

                <a
                  href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20a%20software%20development%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
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

                <Link
                  to="/allservices"
                  onClick={scrollTop}
                  className={`inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-sm border transition-all ${
                    d
                      ? 'border-white/10 text-gray-300 hover:bg-white/[0.04]'
                      : 'border-slate-200 text-slate-700 hover:bg-white'
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

export default About;