import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Shield,
  Eye,
  Database,
  Globe,
  Cookie,
  Lock,
  ArrowRight,
  CheckCircle,
  Mail,
  FileText,
  UserCheck,
  Server,
} from 'lucide-react';

const PrivacyPolicy = ({ isDark }) => {
  const d = isDark;

  const lastUpdated = 'September 19, 2026';

  const navItems = [
    {
      id: 'collection',
      label: 'Data We Collect',
      icon: <Database size={15} />,
    },
    {
      id: 'usage',
      label: 'How We Use Data',
      icon: <Eye size={15} />,
    },
    {
      id: 'security',
      label: 'Data Security',
      icon: <Shield size={15} />,
    },
    {
      id: 'cookies',
      label: 'Cookies & Analytics',
      icon: <Cookie size={15} />,
    },
    {
      id: 'thirdparty',
      label: 'Third-Party Services',
      icon: <Globe size={15} />,
    },
    {
      id: 'retention',
      label: 'Data Retention',
      icon: <Lock size={15} />,
    },
    {
      id: 'rights',
      label: 'Your Rights',
      icon: <UserCheck size={15} />,
    },
    {
      id: 'contact',
      label: 'Contact Us',
      icon: <Mail size={15} />,
    },
  ];

  const sectionClass = `
    scroll-mt-28
    py-10
    sm:py-12
    border-b
    ${d ? 'border-white/[0.06]' : 'border-slate-200'}
  `;

  const h2Class = `
    text-xl
    sm:text-2xl
    font-black
    tracking-tight
    ${d ? 'text-white' : 'text-slate-950'}
  `;

  const pClass = `
    text-[13px]
    sm:text-[14px]
    leading-7
    mb-4
    ${d ? 'text-gray-400' : 'text-slate-600'}
  `;

  const cardClass = `
    p-5
    rounded-2xl
    border
    mb-3
    ${
      d
        ? 'bg-white/[0.02] border-white/[0.06]'
        : 'bg-slate-50 border-slate-200'
    }
  `;

  const itemTextClass = `
    text-[13px]
    leading-6
    ${d ? 'text-gray-400' : 'text-slate-600'}
  `;

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappUrl =
    'https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20have%20a%20question%20about%20your%20privacy%20policy.';

  return (
    <>
      {/* =====================================================
          STRUCTURED DATA ONLY
          Global title, description, canonical and social SEO
          are handled by App.jsx / SEOManager.
      ====================================================== */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': 'https://devzore.com/privacy-policy#webpage',
            name: 'Privacy Policy — DevZore',
            url: 'https://devzore.com/privacy-policy',
            description:
              'DevZore Privacy Policy explaining how information may be collected, used, protected and handled when using our website or contacting us.',
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
                name: 'Privacy Policy',
                item: 'https://devzore.com/privacy-policy',
              },
            ],
          })}
        </script>
      </Helmet>

      <div
        className={`
          min-h-screen
          overflow-x-hidden
          transition-colors
          duration-300
          ${d ? 'bg-[#030303]' : 'bg-[#f8fafc]'}
        `}
      >
        {/* =====================================================
            HERO
        ====================================================== */}
        <section
          aria-labelledby="privacy-heading"
          className={`
            relative
            pt-28
            sm:pt-32
            lg:pt-36
            pb-12
            sm:pb-14
            border-b
            overflow-hidden
            ${
              d
                ? 'border-white/[0.06] bg-[#030303]'
                : 'border-slate-200 bg-white'
            }
          `}
        >
          <div
            aria-hidden="true"
            className={`
              absolute
              pointer-events-none
              left-1/2
              -translate-x-1/2
              -top-40
              w-[400px]
              sm:w-[600px]
              h-[400px]
              rounded-full
              blur-[120px]
              opacity-20
              ${d ? 'bg-purple-700' : 'bg-purple-200'}
            `}
          />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <div
              className={`
                inline-flex
                items-center
                gap-2
                px-3.5
                py-1.5
                rounded-full
                border
                text-[10px]
                sm:text-[11px]
                font-bold
                uppercase
                tracking-[0.15em]
                mb-5
                ${
                  d
                    ? 'bg-purple-500/10 border-purple-500/20 text-purple-300'
                    : 'bg-purple-50 border-purple-200 text-purple-700'
                }
              `}
            >
              <Shield size={13} />
              Privacy Policy
            </div>

            <h1
              id="privacy-heading"
              className={`
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-black
                tracking-tight
                leading-tight
                ${d ? 'text-white' : 'text-slate-950'}
              `}
            >
              How DevZore Handles
              <span className="text-purple-600"> Your Information</span>
            </h1>

            <p
              className={`
                mt-5
                max-w-3xl
                mx-auto
                text-sm
                sm:text-base
                leading-7
                ${d ? 'text-gray-400' : 'text-slate-600'}
              `}
            >
              This Privacy Policy explains what information may be collected
              when you use the DevZore website or contact us, why that
              information may be used, and the choices available to you.
            </p>

            <div
              className={`
                mt-6
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-xl
                border
                text-[11px]
                font-semibold
                ${
                  d
                    ? 'bg-white/[0.025] border-white/[0.07] text-gray-400'
                    : 'bg-slate-50 border-slate-200 text-slate-500'
                }
              `}
            >
              <FileText size={13} className="text-purple-500" />
              Last updated: {lastUpdated}
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTENT
        ====================================================== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid lg:grid-cols-4 gap-10 lg:gap-14">

            {/* ================= SIDEBAR ================= */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p
                  className={`
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.16em]
                    mb-4
                    ${d ? 'text-gray-600' : 'text-slate-400'}
                  `}
                >
                  Contents
                </p>

                <nav
                  aria-label="Privacy policy sections"
                  className="space-y-1"
                >
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`
                        flex
                        items-center
                        gap-2.5
                        px-3
                        py-2.5
                        rounded-lg
                        text-[12px]
                        font-semibold
                        transition-all
                        ${
                          d
                            ? 'text-gray-400 hover:text-purple-400 hover:bg-purple-600/10'
                            : 'text-slate-500 hover:text-purple-600 hover:bg-purple-50'
                        }
                      `}
                    >
                      <span className="text-purple-500">
                        {item.icon}
                      </span>

                      {item.label}
                    </a>
                  ))}
                </nav>

                <div
                  className={`
                    mt-6
                    p-4
                    rounded-xl
                    border
                    ${
                      d
                        ? 'bg-white/[0.02] border-white/[0.06]'
                        : 'bg-white border-slate-200'
                    }
                  `}
                >
                  <p
                    className={`
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-widest
                      mb-1
                      ${d ? 'text-gray-600' : 'text-slate-400'}
                    `}
                  >
                    Last Updated
                  </p>

                  <p
                    className={`
                      text-[12px]
                      font-semibold
                      ${d ? 'text-white' : 'text-slate-900'}
                    `}
                  >
                    {lastUpdated}
                  </p>
                </div>

                <div
                  className={`
                    mt-3
                    p-4
                    rounded-xl
                    border
                    ${
                      d
                        ? 'bg-purple-500/[0.05] border-purple-500/15'
                        : 'bg-purple-50 border-purple-100'
                    }
                  `}
                >
                  <Mail
                    size={16}
                    className="text-purple-500 mb-2"
                  />

                  <p
                    className={`
                      text-[11px]
                      leading-5
                      ${d ? 'text-gray-400' : 'text-slate-600'}
                    `}
                  >
                    Have a privacy question?
                  </p>

                  <a
                    href="mailto:hellodevzore@gmail.com"
                    className="block mt-1 text-[11px] font-bold text-purple-500 hover:underline break-all"
                  >
                    hellodevzore@gmail.com
                  </a>
                </div>
              </div>
            </aside>

            {/* ================= MAIN ================= */}
            <div className="lg:col-span-3">

              {/* INTRODUCTION */}
              <div
                className={`
                  p-5
                  sm:p-6
                  rounded-2xl
                  border
                  mb-2
                  ${
                    d
                      ? 'bg-purple-500/[0.04] border-purple-500/15'
                      : 'bg-purple-50 border-purple-100'
                  }
                `}
              >
                <div className="flex items-start gap-3">
                  <Shield
                    size={18}
                    className="text-purple-500 shrink-0 mt-0.5"
                  />

                  <div>
                    <h2
                      className={`
                        text-sm
                        font-bold
                        mb-2
                        ${d ? 'text-white' : 'text-slate-900'}
                      `}
                    >
                      About This Privacy Policy
                    </h2>

                    <p
                      className={`
                        text-[13px]
                        leading-6
                        ${d ? 'text-gray-400' : 'text-slate-600'}
                      `}
                    >
                      This policy applies to information handled through
                      devzore.com and information you voluntarily provide
                      when contacting DevZore about software development,
                      web development, mobile applications, SaaS products,
                      technical services or related enquiries.
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  DATA COLLECTION
              ================================================== */}
              <section
                id="collection"
                className={sectionClass}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`
                      w-9
                      h-9
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      ${
                        d
                          ? 'bg-blue-500/10 text-blue-400'
                          : 'bg-blue-50 text-blue-600'
                      }
                    `}
                  >
                    <Database size={16} />
                  </div>

                  <h2 className={h2Class}>
                    Information We May Collect
                  </h2>
                </div>

                <p className={pClass}>
                  The information we receive depends on how you interact
                  with DevZore. You may browse the website without directly
                  providing personal information, while contacting us may
                  require you to provide certain details.
                </p>

                <div className={cardClass}>
                  <h3
                    className={`
                      text-[13px]
                      font-bold
                      mb-3
                      ${d ? 'text-white' : 'text-slate-900'}
                    `}
                  >
                    Information You Provide
                  </h3>

                  <ul className={`${itemTextClass} space-y-2`}>
                    <li>
                      • Your name and email address when you contact us.
                    </li>

                    <li>
                      • Your phone number or WhatsApp number if you choose
                      to provide it.
                    </li>

                    <li>
                      • Company or business information that you voluntarily
                      share with us.
                    </li>

                    <li>
                      • Project requirements, technical requirements,
                      business goals and other information included in your
                      enquiry.
                    </li>

                    <li>
                      • Messages, documents or other information you send
                      through email, WhatsApp or another agreed communication
                      channel.
                    </li>
                  </ul>
                </div>

                <div className={cardClass}>
                  <h3
                    className={`
                      text-[13px]
                      font-bold
                      mb-3
                      ${d ? 'text-white' : 'text-slate-900'}
                    `}
                  >
                    Technical & Usage Information
                  </h3>

                  <p className={itemTextClass}>
                    Depending on the technologies and analytics services
                    active on our website, certain technical information may
                    be processed automatically. This can include browser
                    type, device information, pages viewed, referring pages,
                    approximate location derived from technical data, IP
                    address and general website usage information.
                  </p>
                </div>

                <div className={cardClass}>
                  <h3
                    className={`
                      text-[13px]
                      font-bold
                      mb-3
                      ${d ? 'text-white' : 'text-slate-900'}
                    `}
                  >
                    Please Avoid Sending Unnecessary Sensitive Information
                  </h3>

                  <p className={itemTextClass}>
                    Please do not send passwords, payment card details,
                    private authentication credentials or sensitive personal
                    information unless it is genuinely required for an agreed
                    project and an appropriate secure method has been
                    arranged.
                  </p>
                </div>
              </section>

              {/* =================================================
                  USAGE
              ================================================== */}
              <section
                id="usage"
                className={sectionClass}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`
                      w-9
                      h-9
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      ${
                        d
                          ? 'bg-purple-500/10 text-purple-400'
                          : 'bg-purple-50 text-purple-600'
                      }
                    `}
                  >
                    <Eye size={16} />
                  </div>

                  <h2 className={h2Class}>
                    How We May Use Your Information
                  </h2>
                </div>

                <p className={pClass}>
                  Information may be used where reasonably necessary to
                  communicate with you, understand your requirements, provide
                  requested services and operate or improve our website.
                </p>

                {[
                  {
                    title: 'Responding to Enquiries',
                    desc:
                      'To understand your request, communicate with you and discuss potential software development or digital services.',
                  },
                  {
                    title: 'Project Planning',
                    desc:
                      'To understand project requirements, features, technical needs, timelines and other information necessary to discuss a potential project.',
                  },
                  {
                    title: 'Providing Services',
                    desc:
                      'Where you become a client, relevant information may be used to manage communication and perform agreed project work.',
                  },
                  {
                    title: 'Website Improvement',
                    desc:
                      'Technical or analytics information may be used to understand website performance, usability and general visitor behaviour.',
                  },
                  {
                    title: 'Security & Reliability',
                    desc:
                      'Technical information may be processed where necessary to protect the website, investigate problems and reduce misuse.',
                  },
                  {
                    title: 'Legal & Business Records',
                    desc:
                      'Certain information may be retained where reasonably necessary for accounting, contractual, legal or business record purposes.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className={`${cardClass} flex items-start gap-3`}
                  >
                    <CheckCircle
                      size={15}
                      className="text-purple-500 shrink-0 mt-0.5"
                    />

                    <div>
                      <h3
                        className={`
                          text-[13px]
                          font-bold
                          mb-1
                          ${d ? 'text-white' : 'text-slate-900'}
                        `}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`
                          text-[12px]
                          leading-5
                          ${d ? 'text-gray-400' : 'text-slate-600'}
                        `}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </section>

              {/* =================================================
                  SECURITY
              ================================================== */}
              <section
                id="security"
                className={sectionClass}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`
                      w-9
                      h-9
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      ${
                        d
                          ? 'bg-green-500/10 text-green-400'
                          : 'bg-green-50 text-green-600'
                      }
                    `}
                  >
                    <Shield size={16} />
                  </div>

                  <h2 className={h2Class}>
                    Data Security
                  </h2>
                </div>

                <p className={pClass}>
                  We take reasonable technical and organisational measures
                  to reduce the risk of unauthorised access, misuse, loss,
                  alteration or disclosure of information handled by
                  DevZore.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    {
                      icon: <Lock size={15} />,
                      title: 'Secure Connections',
                      desc:
                        'Our website uses HTTPS to help protect information transmitted between your browser and the website.',
                    },
                    {
                      icon: <UserCheck size={15} />,
                      title: 'Controlled Access',
                      desc:
                        'Access to project or enquiry information should be limited to people who reasonably require it for business or project purposes.',
                    },
                    {
                      icon: <Database size={15} />,
                      title: 'Data Minimisation',
                      desc:
                        'We aim to avoid collecting or retaining information that is not reasonably needed for the relevant purpose.',
                    },
                    {
                      icon: <Server size={15} />,
                      title: 'Technical Safeguards',
                      desc:
                        'Hosting, application and account security measures may be used to help protect website and project information.',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className={`
                        p-5
                        rounded-2xl
                        border
                        ${
                          d
                            ? 'bg-white/[0.02] border-white/[0.06]'
                            : 'bg-slate-50 border-slate-200'
                        }
                      `}
                    >
                      <div className="text-purple-500 mb-3">
                        {item.icon}
                      </div>

                      <h3
                        className={`
                          text-[12px]
                          font-bold
                          mb-1.5
                          ${d ? 'text-white' : 'text-slate-900'}
                        `}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`
                          text-[11px]
                          leading-5
                          ${d ? 'text-gray-500' : 'text-slate-500'}
                        `}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <p
                  className={`
                    mt-5
                    text-[12px]
                    leading-6
                    ${d ? 'text-gray-500' : 'text-slate-500'}
                  `}
                >
                  No internet transmission or storage system can be
                  guaranteed to be completely secure. We therefore cannot
                  guarantee absolute security of information transmitted or
                  stored electronically.
                </p>
              </section>

              {/* =================================================
                  COOKIES
              ================================================== */}
              <section
                id="cookies"
                className={sectionClass}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`
                      w-9
                      h-9
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      ${
                        d
                          ? 'bg-amber-500/10 text-amber-400'
                          : 'bg-amber-50 text-amber-600'
                      }
                    `}
                  >
                    <Cookie size={16} />
                  </div>

                  <h2 className={h2Class}>
                    Cookies, Local Storage & Analytics
                  </h2>
                </div>

                <p className={pClass}>
                  Websites can use cookies, browser storage and similar
                  technologies for functionality, preferences, analytics and
                  security. The technologies used by DevZore may change as
                  the website develops.
                </p>

                {[
                  {
                    title: 'Essential Technologies',
                    desc:
                      'Some browser or website technologies may be necessary for core functionality, security or reliable operation.',
                  },
                  {
                    title: 'Preference Storage',
                    desc:
                      'Browser storage may be used to remember preferences such as light or dark appearance where that functionality is enabled.',
                  },
                  {
                    title: 'Analytics',
                    desc:
                      'If analytics tools are enabled, they may process technical and usage information to help us understand how the website is used.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className={cardClass}
                  >
                    <h3
                      className={`
                        text-[13px]
                        font-bold
                        mb-1.5
                        ${d ? 'text-white' : 'text-slate-900'}
                      `}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`
                        text-[12px]
                        leading-5
                        ${d ? 'text-gray-400' : 'text-slate-600'}
                      `}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}

                <p
                  className={`
                    text-[12px]
                    leading-6
                    ${d ? 'text-gray-500' : 'text-slate-500'}
                  `}
                >
                  You can usually control cookies through your browser
                  settings. Disabling certain storage technologies may affect
                  some website features.
                </p>
              </section>

              {/* =================================================
                  THIRD PARTIES
              ================================================== */}
              <section
                id="thirdparty"
                className={sectionClass}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`
                      w-9
                      h-9
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      ${
                        d
                          ? 'bg-indigo-500/10 text-indigo-400'
                          : 'bg-indigo-50 text-indigo-600'
                      }
                    `}
                  >
                    <Globe size={16} />
                  </div>

                  <h2 className={h2Class}>
                    Third-Party Services
                  </h2>
                </div>

                <p className={pClass}>
                  DevZore may rely on third-party providers for website
                  hosting, communication, analytics, infrastructure or other
                  business services. Those providers may process limited
                  information according to their own terms and privacy
                  practices.
                </p>

                {[
                  {
                    title: 'Hosting & Infrastructure Providers',
                    desc:
                      'Providers used to host, deploy, secure or operate our website and software infrastructure may process technical information.',
                  },
                  {
                    title: 'Email & Communication Services',
                    desc:
                      'When you contact us through email or messaging services, information may also be processed by the relevant communication provider.',
                  },
                  {
                    title: 'Analytics & Performance Services',
                    desc:
                      'Where enabled, analytics or performance tools may process website usage and technical information.',
                  },
                  {
                    title: 'Client-Requested Services',
                    desc:
                      'During project work, third-party platforms may be used when required by the project or agreed with the client.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className={`
                      flex
                      items-start
                      gap-3
                      p-4
                      rounded-xl
                      border
                      mb-2
                      ${
                        d
                          ? 'bg-white/[0.02] border-white/[0.06]'
                          : 'bg-slate-50 border-slate-200'
                      }
                    `}
                  >
                    <CheckCircle
                      size={14}
                      className="text-purple-500 shrink-0 mt-0.5"
                    />

                    <div>
                      <h3
                        className={`
                          text-[12px]
                          font-bold
                          mb-1
                          ${d ? 'text-white' : 'text-slate-900'}
                        `}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`
                          text-[11px]
                          leading-5
                          ${d ? 'text-gray-500' : 'text-slate-500'}
                        `}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}

                <div
                  className={`
                    mt-4
                    p-4
                    rounded-xl
                    border
                    ${
                      d
                        ? 'bg-green-500/[0.04] border-green-500/15'
                        : 'bg-green-50 border-green-100'
                    }
                  `}
                >
                  <p
                    className={`
                      text-[12px]
                      leading-5
                      ${d ? 'text-gray-400' : 'text-slate-600'}
                    `}
                  >
                    DevZore does not sell personal information as part of
                    its software development business.
                  </p>
                </div>
              </section>

              {/* =================================================
                  RETENTION
              ================================================== */}
              <section
                id="retention"
                className={sectionClass}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`
                      w-9
                      h-9
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      ${
                        d
                          ? 'bg-cyan-500/10 text-cyan-400'
                          : 'bg-cyan-50 text-cyan-600'
                      }
                    `}
                  >
                    <Lock size={16} />
                  </div>

                  <h2 className={h2Class}>
                    Data Retention
                  </h2>
                </div>

                <p className={pClass}>
                  We aim to retain personal information only for as long as
                  it is reasonably needed for the purpose for which it was
                  collected, to maintain appropriate business records, or to
                  meet applicable contractual or legal obligations.
                </p>

                {[
                  {
                    title: 'Project Enquiries',
                    desc:
                      'Enquiry information may be retained while discussions are active and for a reasonable period afterwards where follow-up may be relevant.',
                  },
                  {
                    title: 'Client & Project Information',
                    desc:
                      'Information connected with completed or active projects may be retained where reasonably needed for support, project history, contractual records or future work.',
                  },
                  {
                    title: 'Business & Financial Records',
                    desc:
                      'Records may be retained for periods required by applicable accounting, tax or other legal obligations.',
                  },
                  {
                    title: 'Technical Information',
                    desc:
                      'Technical logs or analytics information may be retained according to operational requirements and the settings of the relevant service provider.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className={cardClass}
                  >
                    <h3
                      className={`
                        text-[12px]
                        font-bold
                        mb-1
                        ${d ? 'text-white' : 'text-slate-900'}
                      `}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`
                        text-[11px]
                        leading-5
                        ${d ? 'text-gray-500' : 'text-slate-500'}
                      `}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </section>

              {/* =================================================
                  RIGHTS
              ================================================== */}
              <section
                id="rights"
                className={sectionClass}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`
                      w-9
                      h-9
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      ${
                        d
                          ? 'bg-green-500/10 text-green-400'
                          : 'bg-green-50 text-green-600'
                      }
                    `}
                  >
                    <UserCheck size={16} />
                  </div>

                  <h2 className={h2Class}>
                    Your Privacy Choices & Rights
                  </h2>
                </div>

                <p className={pClass}>
                  Depending on the laws that apply to you and the
                  circumstances of the processing, you may have certain
                  rights or choices regarding your personal information.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    {
                      title: 'Access',
                      desc:
                        'You may ask what personal information DevZore holds about you.',
                    },
                    {
                      title: 'Correction',
                      desc:
                        'You may ask us to correct information that is inaccurate or incomplete.',
                    },
                    {
                      title: 'Deletion',
                      desc:
                        'You may request deletion of information where there is no overriding reason or legal requirement for us to retain it.',
                    },
                    {
                      title: 'Communication Preferences',
                      desc:
                        'You may ask us to stop optional promotional or non-essential communications.',
                    },
                    {
                      title: 'Processing Questions',
                      desc:
                        'You may contact us if you have concerns or questions about how your information is being handled.',
                    },
                    {
                      title: 'Data Requests',
                      desc:
                        'Where applicable, you may request a copy of information associated with you in a reasonably available format.',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className={`
                        p-4
                        rounded-xl
                        border
                        ${
                          d
                            ? 'bg-white/[0.02] border-white/[0.06]'
                            : 'bg-slate-50 border-slate-200'
                        }
                      `}
                    >
                      <p className="text-[12px] font-bold mb-1 text-purple-500">
                        {item.title}
                      </p>

                      <p
                        className={`
                          text-[11px]
                          leading-5
                          ${d ? 'text-gray-400' : 'text-slate-600'}
                        `}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <p
                  className={`
                    text-[12px]
                    leading-6
                    mt-5
                    ${d ? 'text-gray-500' : 'text-slate-500'}
                  `}
                >
                  To make a privacy-related request, contact us at{' '}
                  <a
                    href="mailto:hellodevzore@gmail.com"
                    className="text-purple-500 font-semibold hover:underline"
                  >
                    hellodevzore@gmail.com
                  </a>
                  . We may need enough information to identify the relevant
                  records before completing a request.
                </p>
              </section>

              {/* =================================================
                  CHILDREN
              ================================================== */}
              <section className={sectionClass}>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`
                      w-9
                      h-9
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      ${
                        d
                          ? 'bg-pink-500/10 text-pink-400'
                          : 'bg-pink-50 text-pink-600'
                      }
                    `}
                  >
                    <Shield size={16} />
                  </div>

                  <h2 className={h2Class}>
                    Children&apos;s Privacy
                  </h2>
                </div>

                <p className={pClass}>
                  DevZore&apos;s website and software development services
                  are intended primarily for businesses, professionals,
                  organisations and people seeking software services. They
                  are not designed specifically to collect personal
                  information from children.
                </p>

                <p className={pClass}>
                  If you believe a child has provided personal information
                  through our website without appropriate permission, please
                  contact us so the situation can be reviewed.
                </p>
              </section>

              {/* =================================================
                  INTERNATIONAL PROCESSING
              ================================================== */}
              <section className={sectionClass}>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`
                      w-9
                      h-9
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      ${
                        d
                          ? 'bg-blue-500/10 text-blue-400'
                          : 'bg-blue-50 text-blue-600'
                      }
                    `}
                  >
                    <Globe size={16} />
                  </div>

                  <h2 className={h2Class}>
                    International Services & Data Processing
                  </h2>
                </div>

                <p className={pClass}>
                  DevZore can work remotely with clients in different
                  locations. Website hosting, communication platforms,
                  infrastructure providers and other technology services may
                  process information in countries different from your own.
                </p>

                <p className={pClass}>
                  Privacy protections and legal requirements can vary by
                  jurisdiction. Where appropriate, we aim to use reputable
                  service providers and reasonable safeguards for information
                  handled in connection with our services.
                </p>
              </section>

              {/* =================================================
                  POLICY CHANGES
              ================================================== */}
              <section className={sectionClass}>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`
                      w-9
                      h-9
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      ${
                        d
                          ? 'bg-purple-500/10 text-purple-400'
                          : 'bg-purple-50 text-purple-600'
                      }
                    `}
                  >
                    <FileText size={16} />
                  </div>

                  <h2 className={h2Class}>
                    Changes to This Privacy Policy
                  </h2>
                </div>

                <p className={pClass}>
                  We may update this Privacy Policy when our website,
                  services, technologies or privacy practices change.
                  The current version will be published on this page with
                  an updated revision date.
                </p>

                <p className={pClass}>
                  We encourage visitors and clients to review this page
                  periodically if privacy practices are important to their
                  use of our services.
                </p>
              </section>

              {/* =================================================
                  CONTACT
              ================================================== */}
              <section
                id="contact"
                className="scroll-mt-28 pt-10 sm:pt-12"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`
                      w-9
                      h-9
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      ${
                        d
                          ? 'bg-pink-500/10 text-pink-400'
                          : 'bg-pink-50 text-pink-600'
                      }
                    `}
                  >
                    <Mail size={16} />
                  </div>

                  <h2 className={h2Class}>
                    Privacy Questions & Contact
                  </h2>
                </div>

                <p className={pClass}>
                  If you have a question about this Privacy Policy, want to
                  ask how information associated with you is handled, or want
                  to make a privacy-related request, you can contact DevZore
                  using the details below.
                </p>

                <div
                  className={`
                    p-5
                    sm:p-6
                    rounded-2xl
                    border
                    mb-6
                    ${
                      d
                        ? 'bg-white/[0.02] border-white/[0.06]'
                        : 'bg-white border-slate-200'
                    }
                  `}
                >
                  <p
                    className={`
                      text-[13px]
                      font-bold
                      mb-4
                      ${d ? 'text-white' : 'text-slate-900'}
                    `}
                  >
                    DevZore
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Mail
                        size={15}
                        className="text-purple-500 shrink-0 mt-0.5"
                      />

                      <div>
                        <p
                          className={`
                            text-[10px]
                            uppercase
                            tracking-wider
                            font-bold
                            ${d ? 'text-gray-600' : 'text-slate-400'}
                          `}
                        >
                          Email
                        </p>

                        <a
                          href="mailto:hellodevzore@gmail.com"
                          className="text-[13px] font-semibold text-purple-500 hover:underline break-all"
                        >
                          hellodevzore@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Globe
                        size={15}
                        className="text-purple-500 shrink-0 mt-0.5"
                      />

                      <div>
                        <p
                          className={`
                            text-[10px]
                            uppercase
                            tracking-wider
                            font-bold
                            ${d ? 'text-gray-600' : 'text-slate-400'}
                          `}
                        >
                          Website
                        </p>

                        <a
                          href="https://devzore.com"
                          className="text-[13px] font-semibold text-purple-500 hover:underline"
                        >
                          devzore.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail
                        size={15}
                        className="text-purple-500 shrink-0 mt-0.5"
                      />

                      <div>
                        <p
                          className={`
                            text-[10px]
                            uppercase
                            tracking-wider
                            font-bold
                            ${d ? 'text-gray-600' : 'text-slate-400'}
                          `}
                        >
                          WhatsApp
                        </p>

                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[13px] font-semibold text-purple-500 hover:underline"
                        >
                          +92 334 8004300
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ================= ACTIONS ================= */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    onClick={scrollTop}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      px-6
                      py-3
                      rounded-xl
                      bg-purple-600
                      hover:bg-purple-700
                      text-white
                      text-sm
                      font-bold
                      transition-all
                    "
                  >
                    Contact DevZore
                    <ArrowRight size={14} />
                  </Link>

                  <Link
                    to="/terms-and-conditions"
                    onClick={scrollTop}
                    className={`
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      px-6
                      py-3
                      rounded-xl
                      border
                      text-sm
                      font-bold
                      transition-all
                      ${
                        d
                          ? 'border-white/10 text-gray-300 hover:bg-white/[0.04]'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }
                    `}
                  >
                    Terms & Conditions
                  </Link>
                </div>

                {/* ================= FOOT NOTE ================= */}
                <div
                  className={`
                    mt-10
                    pt-6
                    border-t
                    flex
                    flex-col
                    md:flex-row
                    items-center
                    justify-between
                    gap-4
                    ${d ? 'border-white/[0.06]' : 'border-slate-200'}
                  `}
                >
                  <Link
                    to="/"
                    onClick={scrollTop}
                    className={`
                      text-[12px]
                      font-semibold
                      hover:text-purple-500
                      transition-colors
                      ${d ? 'text-gray-500' : 'text-slate-500'}
                    `}
                  >
                    ← Back to Home
                  </Link>

                  <p
                    className={`
                      text-[10px]
                      sm:text-[11px]
                      text-center
                      ${d ? 'text-gray-600' : 'text-slate-400'}
                    `}
                  >
                    © 2026 DevZore · Privacy Policy · Last Updated{' '}
                    {lastUpdated}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;