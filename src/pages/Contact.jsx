import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  Send,
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  Zap,
  MessageCircle,
  ChevronDown,
  Code2,
  Smartphone,
  Server,
  Rocket,
} from 'lucide-react';

const Contact = ({ isDark }) => {
  const d = isDark;

  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    timeline: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const services = [
    'Web Development',
    'Mobile App Development',
    'MERN Stack Development',
    'SaaS Development',
    'E-Commerce Development',
    'UI/UX Design',
    'Startup MVP Development',
    'Backend & API Development',
    'React Development',
    'SEO Services',
    'Digital Marketing',
    'Maintenance & Support',
    'Other',
  ];

  const timelines = [
    'As soon as possible',
    'Within 1 month',
    '1–3 months',
    '3–6 months',
    'Flexible / Not decided',
  ];

  /*
   * Internal service links.
   * These are rendered as real React Router links
   * so users and search engines can reach service pages.
   */
  const serviceLinks = [
    {
      name: 'Web Development',
      path: '/web-development',
    },
    {
      name: 'MERN Stack Development',
      path: '/mern-stack-development',
    },
    {
      name: 'React Development',
      path: '/reactdevelopment',
    },
    {
      name: 'Node.js Development',
      path: '/backend-api',
    },
    {
      name: 'Backend API Development',
      path: '/backend-api',
    },
    {
      name: 'Mobile App Development',
      path: '/mobile-apps',
    },
    {
      name: 'SaaS Development',
      path: '/saas-product-development',
    },
    {
      name: 'E-Commerce Development',
      path: '/ecommerce',
    },
    {
      name: 'UI/UX Design',
      path: '/ui-ux-design',
    },
    {
      name: 'SEO Services',
      path: '/seo-services',
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /*
   * Frontend-only contact form.
   * Opens the visitor's email application.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const subject = encodeURIComponent(
      `New Project Inquiry — ${
        form.service || 'Software Development Project'
      }`
    );

    const body = encodeURIComponent(
`Hello DevZore,

I would like to discuss a project.

Name: ${form.name}
Email: ${form.email}
Service: ${form.service || 'Not specified'}
Timeline: ${form.timeline || 'Not specified'}

Project Details:
${form.message}

Thank you.`
    );

    const mailtoUrl =
      `mailto:hellodevzore@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  const contactMethods = [
    {
      icon: <Mail size={18} />,
      label: 'Email',
      value: 'hellodevzore@gmail.com',
      href: 'mailto:hellodevzore@gmail.com',
      external: false,
      color: 'purple',
    },
    {
      icon: <Phone size={18} />,
      label: 'WhatsApp',
      value: '+92 334 8004300',
      href: 'https://wa.me/923348004300',
      external: true,
      color: 'green',
    },
    {
      icon: <Globe size={18} />,
      label: 'Service Availability',
      value: 'Remote & Worldwide',
      href: null,
      external: false,
      color: 'blue',
    },
    {
      icon: <MessageCircle size={18} />,
      label: 'Project Inquiries',
      value: 'Open for new projects',
      href: null,
      external: false,
      color: 'amber',
    },
  ];

  const trustPoints = [
    {
      icon: <CheckCircle size={15} />,
      title: 'Project-focused discussion',
      text: 'Tell us what you need and we can discuss the appropriate technical approach.',
    },
    {
      icon: <Shield size={15} />,
      title: 'Clear communication',
      text: 'Requirements, scope and technical decisions can be discussed clearly throughout the project.',
    },
    {
      icon: <Zap size={15} />,
      title: 'Practical development',
      text: 'We focus on useful features and maintainable solutions instead of unnecessary complexity.',
    },
    {
      icon: <Globe size={15} />,
      title: 'Remote collaboration',
      text: 'DevZore can collaborate remotely with businesses and startups in different markets.',
    },
  ];

  const projectTypes = [
    {
      icon: <Code2 size={18} />,
      title: 'Web Applications',
      text: 'Business websites, custom web applications and dashboards.',
    },
    {
      icon: <Smartphone size={18} />,
      title: 'Mobile Applications',
      text: 'Cross-platform mobile applications connected to backend systems.',
    },
    {
      icon: <Server size={18} />,
      title: 'Backend & APIs',
      text: 'APIs, authentication, databases and backend application development.',
    },
    {
      icon: <Rocket size={18} />,
      title: 'SaaS & MVP Products',
      text: 'New software products, MVPs and scalable SaaS application foundations.',
    },
  ];

  const colorMap = {
    purple: d
      ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
      : 'bg-purple-50 border-purple-200 text-purple-600',

    green: d
      ? 'bg-green-500/10 border-green-500/20 text-green-400'
      : 'bg-green-50 border-green-200 text-green-600',

    blue: d
      ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
      : 'bg-blue-50 border-blue-200 text-blue-600',

    amber: d
      ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'
      : 'bg-amber-50 border-amber-200 text-amber-600',
  };

  const inputClass = `
    w-full
    min-h-[48px]
    px-4
    py-3
    rounded-xl
    border
    text-[14px]
    font-medium
    outline-none
    transition-all
    duration-200
    ${
      d
        ? `
          bg-white/[0.035]
          border-white/[0.09]
          text-white
          placeholder:text-gray-600
          hover:border-white/[0.14]
          focus:border-purple-500/60
          focus:bg-white/[0.05]
        `
        : `
          bg-white
          border-slate-200
          text-slate-900
          placeholder:text-slate-400
          hover:border-slate-300
          focus:border-purple-400
          focus:ring-4
          focus:ring-purple-500/10
        `
    }
  `;

  const labelClass = `
    block
    text-[11px]
    font-bold
    uppercase
    tracking-[0.12em]
    mb-2
    ${d ? 'text-gray-500' : 'text-slate-500'}
  `;

  const whatsappUrl =
    'https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20would%20like%20to%20discuss%20a%20software%20development%20project.';

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            '@id': 'https://devzore.com/contact#contactpage',
            name: 'Contact DevZore',
            url: 'https://devzore.com/contact',
            description:
              'Contact DevZore to discuss web development, mobile application development, SaaS products, backend APIs and custom software development.',
            isPartOf: {
              '@id': 'https://devzore.com/#website',
            },
            about: {
              '@id': 'https://devzore.com/#organization',
            },
            mainEntity: {
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
                name: 'Contact',
                item: 'https://devzore.com/contact',
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
          ${
            d
              ? 'bg-[#030303] text-white'
              : 'bg-[#f8fafc] text-slate-900'
          }
        `}
      >
        {/* ================= HERO ================= */}
        <section
          aria-labelledby="contact-heading"
          className="relative pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-16 overflow-hidden"
        >
          <div
            aria-hidden="true"
            className={`
              absolute
              pointer-events-none
              left-1/2
              -translate-x-1/2
              -top-32
              w-[280px]
              sm:w-[450px]
              lg:w-[650px]
              h-[280px]
              sm:h-[400px]
              rounded-full
              blur-[100px]
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
              <MessageCircle size={13} />
              Contact DevZore
            </div>

            <h1
              id="contact-heading"
              className={`
                text-3xl
                sm:text-4xl
                lg:text-5xl
                xl:text-6xl
                font-black
                tracking-tight
                leading-[1.08]
                ${d ? 'text-white' : 'text-slate-950'}
              `}
            >
              Have a Software Project
              <br />

              <span className="text-purple-600">
                You Want to Discuss?
              </span>
            </h1>

            <p
              className={`
                mt-5
                max-w-3xl
                mx-auto
                text-sm
                sm:text-base
                lg:text-lg
                leading-7
                ${d ? 'text-gray-400' : 'text-slate-600'}
              `}
            >
              Tell us about your website, web application, mobile app,
              SaaS product, backend API or custom software requirement.
              We can review the idea and discuss the next technical steps.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#project-form"
                className="
                  w-full
                  sm:w-auto
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-6
                  py-3.5
                  rounded-xl
                  bg-purple-600
                  hover:bg-purple-700
                  text-white
                  text-sm
                  font-bold
                  shadow-lg
                  shadow-purple-600/20
                  transition-all
                  hover:-translate-y-0.5
                "
              >
                Discuss Your Project
                <ArrowRight size={16} />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  w-full
                  sm:w-auto
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-6
                  py-3.5
                  rounded-xl
                  border
                  text-sm
                  font-bold
                  transition-all
                  ${
                    d
                      ? 'border-white/10 bg-white/[0.04] text-gray-200 hover:bg-white/[0.08]'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }
                `}
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* ================= CONTACT METHODS ================= */}
        <section
          aria-label="Ways to contact DevZore"
          className={`
            border-y
            ${d ? 'border-white/[0.06]' : 'border-slate-200'}
          `}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {contactMethods.map((method) => (
                <div
                  key={method.label}
                  className={`
                    group
                    p-4
                    sm:p-5
                    rounded-2xl
                    border
                    transition-all
                    duration-200
                    ${
                      d
                        ? 'bg-white/[0.02] border-white/[0.07] hover:bg-white/[0.04]'
                        : 'bg-white border-slate-200 hover:shadow-sm'
                    }
                  `}
                >
                  <div
                    className={`
                      w-9
                      h-9
                      rounded-xl
                      border
                      flex
                      items-center
                      justify-center
                      mb-3
                      ${colorMap[method.color]}
                    `}
                  >
                    {method.icon}
                  </div>

                  <p
                    className={`
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-widest
                      mb-1
                      ${d ? 'text-gray-500' : 'text-slate-400'}
                    `}
                  >
                    {method.label}
                  </p>

                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.external ? '_blank' : undefined}
                      rel={
                        method.external
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className={`
                        text-[13px]
                        font-semibold
                        break-words
                        transition-colors
                        ${
                          d
                            ? 'text-white hover:text-purple-400'
                            : 'text-slate-900 hover:text-purple-600'
                        }
                      `}
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p
                      className={`
                        text-[13px]
                        font-semibold
                        ${d ? 'text-white' : 'text-slate-900'}
                      `}
                    >
                      {method.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROJECT TYPES ================= */}
        <section
          aria-labelledby="project-types-heading"
          className={`
            py-12
            sm:py-14
            border-b
            ${
              d
                ? 'border-white/[0.06] bg-[#050505]'
                : 'border-slate-200 bg-white'
            }
          `}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2
                id="project-types-heading"
                className={`
                  text-2xl
                  sm:text-3xl
                  font-black
                  ${d ? 'text-white' : 'text-slate-950'}
                `}
              >
                What Can You Discuss With{' '}
                <span className="text-purple-600">
                  DevZore?
                </span>
              </h2>

              <p
                className={`
                  mt-3
                  text-sm
                  leading-6
                  ${d ? 'text-gray-400' : 'text-slate-600'}
                `}
              >
                Contact us about a new product, an existing application,
                technical improvements or ongoing software development.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {projectTypes.map((item) => (
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
                  <div
                    className={`
                      w-10
                      h-10
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      mb-4
                      ${
                        d
                          ? 'bg-purple-500/10 text-purple-400'
                          : 'bg-purple-50 text-purple-600'
                      }
                    `}
                  >
                    {item.icon}
                  </div>

                  <h3
                    className={`
                      text-[13px]
                      font-bold
                      mb-2
                      ${d ? 'text-white' : 'text-slate-900'}
                    `}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`
                      text-[12px]
                      leading-5
                      ${d ? 'text-gray-500' : 'text-slate-500'}
                    `}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= MAIN CONTACT AREA ================= */}
        <section
          aria-label="Project inquiry"
          className="py-14 sm:py-16 lg:py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              {/* LEFT */}
              <div className="lg:col-span-5">
                <div className="mb-7">
                  <p className="text-purple-500 text-[11px] font-bold uppercase tracking-[0.18em] mb-3">
                    Start a conversation
                  </p>

                  <h2
                    className={`
                      text-2xl
                      sm:text-3xl
                      font-black
                      tracking-tight
                      ${d ? 'text-white' : 'text-slate-950'}
                    `}
                  >
                    Tell Us What You Want to Build or Improve
                  </h2>

                  <p
                    className={`
                      mt-4
                      text-sm
                      sm:text-[15px]
                      leading-6
                      ${d ? 'text-gray-400' : 'text-slate-600'}
                    `}
                  >
                    You do not need a complete technical specification.
                    Share the business problem, your idea, existing product
                    or the features you need and we can start from there.
                  </p>
                </div>

                <div className="space-y-3">
                  {trustPoints.map((point) => (
                    <div
                      key={point.title}
                      className={`
                        flex
                        gap-4
                        p-4
                        rounded-2xl
                        border
                        ${
                          d
                            ? 'bg-white/[0.02] border-white/[0.06]'
                            : 'bg-white border-slate-200'
                        }
                      `}
                    >
                      <div
                        className="
                          w-9
                          h-9
                          shrink-0
                          rounded-xl
                          bg-purple-500/10
                          border
                          border-purple-500/15
                          text-purple-500
                          flex
                          items-center
                          justify-center
                        "
                      >
                        {point.icon}
                      </div>

                      <div>
                        <h3
                          className={`
                            text-[13px]
                            font-bold
                            ${d ? 'text-white' : 'text-slate-900'}
                          `}
                        >
                          {point.title}
                        </h3>

                        <p
                          className={`
                            text-[12px]
                            leading-5
                            mt-1
                            ${d ? 'text-gray-500' : 'text-slate-500'}
                          `}
                        >
                          {point.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    mt-5
                    flex
                    items-center
                    gap-4
                    p-5
                    rounded-2xl
                    border
                    bg-[#25D366]/10
                    border-[#25D366]/20
                    hover:bg-[#25D366]/15
                    transition-all
                  "
                >
                  <div
                    className="
                      w-11
                      h-11
                      shrink-0
                      rounded-xl
                      bg-[#25D366]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <MessageCircle
                      size={21}
                      className="text-white"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#25D366]">
                      Prefer WhatsApp?
                    </p>

                    <p
                      className={`
                        text-[11px]
                        mt-0.5
                        ${d ? 'text-gray-500' : 'text-slate-500'}
                      `}
                    >
                      Send your project requirements directly.
                    </p>
                  </div>

                  <ArrowRight
                    size={16}
                    className="
                      ml-auto
                      text-[#25D366]
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </a>

                <div
                  className={`
                    mt-5
                    p-5
                    rounded-2xl
                    border
                    ${
                      d
                        ? 'bg-white/[0.02] border-white/[0.06]'
                        : 'bg-white border-slate-200'
                    }
                  `}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Globe
                      size={15}
                      className="text-purple-500"
                    />

                    <p
                      className={`
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-widest
                        ${d ? 'text-gray-500' : 'text-slate-400'}
                      `}
                    >
                      Remote software development
                    </p>
                  </div>

                  <p
                    className={`
                      text-sm
                      font-semibold
                      ${d ? 'text-gray-200' : 'text-slate-800'}
                    `}
                  >
                    Available for projects worldwide
                  </p>

                  <p
                    className={`
                      text-[11px]
                      leading-5
                      mt-2
                      ${d ? 'text-gray-500' : 'text-slate-500'}
                    `}
                  >
                    Project communication, development reviews and
                    collaboration can be handled remotely.
                  </p>
                </div>
              </div>

              {/* ================= FORM ================= */}
              <div
                id="project-form"
                className="lg:col-span-7 scroll-mt-28"
              >
                <form
                  onSubmit={handleSubmit}
                  className={`
                    p-5
                    sm:p-7
                    lg:p-8
                    rounded-3xl
                    border
                    ${
                      d
                        ? 'bg-white/[0.025] border-white/[0.08]'
                        : 'bg-white border-slate-200 shadow-sm'
                    }
                  `}
                >
                  <div className="mb-7">
                    <p className="text-purple-500 text-[10px] font-bold uppercase tracking-[0.16em] mb-2">
                      Project inquiry
                    </p>

                    <h2
                      className={`
                        text-xl
                        sm:text-2xl
                        font-black
                        ${d ? 'text-white' : 'text-slate-950'}
                      `}
                    >
                      Share Your Project Requirements
                    </h2>

                    <p
                      className={`
                        text-[12px]
                        leading-5
                        mt-2
                        ${d ? 'text-gray-500' : 'text-slate-500'}
                      `}
                    >
                      Provide the information you currently have.
                      Your email application will open with the inquiry
                      prepared for you to send.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className={labelClass}
                      >
                        Your Name *
                      </label>

                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className={labelClass}
                      >
                        Email Address *
                      </label>

                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <label
                        htmlFor="contact-service"
                        className={labelClass}
                      >
                        What do you need?
                      </label>

                      <div className="relative">
                        <select
                          id="contact-service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={`
                            ${inputClass}
                            appearance-none
                            pr-11
                            cursor-pointer
                          `}
                        >
                          <option value="">
                            Select a service
                          </option>

                          {services.map((service) => (
                            <option
                              key={service}
                              value={service}
                            >
                              {service}
                            </option>
                          ))}
                        </select>

                        <ChevronDown
                          size={16}
                          className={`
                            pointer-events-none
                            absolute
                            right-4
                            top-1/2
                            -translate-y-1/2
                            ${d ? 'text-gray-500' : 'text-slate-400'}
                          `}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-timeline"
                        className={labelClass}
                      >
                        Project Timeline
                      </label>

                      <div className="relative">
                        <select
                          id="contact-timeline"
                          name="timeline"
                          value={form.timeline}
                          onChange={handleChange}
                          className={`
                            ${inputClass}
                            appearance-none
                            pr-11
                            cursor-pointer
                          `}
                        >
                          <option value="">
                            Select timeline
                          </option>

                          {timelines.map((timeline) => (
                            <option
                              key={timeline}
                              value={timeline}
                            >
                              {timeline}
                            </option>
                          ))}
                        </select>

                        <ChevronDown
                          size={16}
                          className={`
                            pointer-events-none
                            absolute
                            right-4
                            top-1/2
                            -translate-y-1/2
                            ${d ? 'text-gray-500' : 'text-slate-400'}
                          `}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="contact-message"
                      className={labelClass}
                    >
                      Project Details *
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={7}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your idea, existing website or application, business goals, required features, target users or the technical problem you want to solve."
                      className={`
                        ${inputClass}
                        resize-none
                        min-h-[160px]
                      `}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`
                      w-full
                      min-h-[52px]
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      text-sm
                      font-black
                      text-white
                      transition-all
                      duration-200
                      ${
                        loading
                          ? 'bg-purple-400 cursor-not-allowed'
                          : 'bg-purple-600 hover:bg-purple-700 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-600/20'
                      }
                    `}
                  >
                    {loading ? (
                      <>
                        <span
                          className="
                            w-4
                            h-4
                            border-2
                            border-white/30
                            border-t-white
                            rounded-full
                            animate-spin
                          "
                        />
                        Opening Email...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Prepare Project Inquiry
                      </>
                    )}
                  </button>

                  <div
                    className={`
                      mt-4
                      flex
                      items-start
                      justify-center
                      gap-2
                      text-[10px]
                      sm:text-[11px]
                      text-center
                      leading-5
                      ${d ? 'text-gray-600' : 'text-slate-400'}
                    `}
                  >
                    <Shield
                      size={13}
                      className="shrink-0 mt-0.5"
                    />

                    <span>
                      This form prepares an email in your email application.
                      Your information is not submitted through a DevZore
                      backend from this page. See our{' '}
                      <Link
                        to="/privacy-policy"
                        className="text-purple-500 hover:underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INTERNAL SERVICE LINKS ================= */}
        <section
          aria-labelledby="contact-services-heading"
          className={`
            py-14
            sm:py-16
            border-y
            ${
              d
                ? 'bg-[#050505] border-white/[0.06]'
                : 'bg-white border-slate-200'
            }
          `}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              id="contact-services-heading"
              className={`
                text-2xl
                sm:text-3xl
                font-black
                ${d ? 'text-white' : 'text-slate-950'}
              `}
            >
              Contact a Software Development Agency for{' '}
              <span className="text-purple-600">
                Your Next Digital Product
              </span>
            </h2>

            <p
              className={`
                mt-4
                max-w-3xl
                mx-auto
                text-[14px]
                leading-7
                ${d ? 'text-gray-400' : 'text-slate-600'}
              `}
            >
              DevZore can help with custom web development, MERN stack
              applications, React development, Node.js backend development,
              REST APIs, SaaS development, mobile applications,
              e-commerce development, UI/UX implementation, SEO and
              ongoing website maintenance.
            </p>

            {/* CLICKABLE SERVICE LINKS */}
            <nav
              aria-label="DevZore software development services"
              className="mt-7 flex flex-wrap justify-center gap-2.5"
            >
              {serviceLinks.map((service) => (
                <Link
                  key={`${service.name}-${service.path}`}
                  to={service.path}
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    })
                  }
                  className={`
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-1.5
                    px-4
                    py-2.5
                    rounded-xl
                    border
                    text-[12px]
                    sm:text-[13px]
                    font-semibold
                    transition-all
                    duration-200
                    ${
                      d
                        ? `
                          bg-white/[0.025]
                          border-white/[0.08]
                          text-gray-300
                          hover:text-white
                          hover:bg-purple-500/10
                          hover:border-purple-500/30
                        `
                        : `
                          bg-slate-50
                          border-slate-200
                          text-slate-700
                          hover:text-purple-700
                          hover:bg-purple-50
                          hover:border-purple-200
                          hover:shadow-sm
                        `
                    }
                  `}
                >
                  <span>{service.name}</span>

                  <ArrowRight
                    size={12}
                    className="
                      opacity-50
                      transition-all
                      duration-200
                      group-hover:opacity-100
                      group-hover:translate-x-0.5
                    "
                  />
                </Link>
              ))}
            </nav>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section
          aria-label="Final contact call to action"
          className="py-16 sm:py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`
                relative
                overflow-hidden
                rounded-3xl
                border
                p-7
                sm:p-10
                lg:p-12
                text-center
                ${
                  d
                    ? 'bg-purple-600/[0.06] border-purple-500/15'
                    : 'bg-purple-50 border-purple-100'
                }
              `}
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  -top-24
                  w-72
                  h-72
                  bg-purple-500/15
                  rounded-full
                  blur-3xl
                  pointer-events-none
                "
              />

              <div className="relative">
                <p className="text-purple-500 text-[10px] font-bold uppercase tracking-[0.18em] mb-3">
                  Start your project
                </p>

                <h2
                  className={`
                    text-2xl
                    sm:text-3xl
                    lg:text-4xl
                    font-black
                    tracking-tight
                    ${d ? 'text-white' : 'text-slate-950'}
                  `}
                >
                  Tell Us What You Want to Build.
                </h2>

                <p
                  className={`
                    max-w-2xl
                    mx-auto
                    mt-3
                    text-sm
                    leading-6
                    ${d ? 'text-gray-400' : 'text-slate-600'}
                  `}
                >
                  Share your requirements and we can discuss the project,
                  technology and practical next steps.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href="#project-form"
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
                    Start Your Inquiry
                    <ArrowRight size={15} />
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      px-6
                      py-3
                      rounded-xl
                      bg-[#25D366]/10
                      border
                      border-[#25D366]/25
                      text-[#25D366]
                      text-sm
                      font-bold
                      hover:bg-[#25D366]/15
                      transition-all
                    "
                  >
                    <MessageCircle size={15} />
                    WhatsApp
                  </a>

                  <a
                    href="mailto:hellodevzore@gmail.com"
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
                          ? 'border-white/10 text-gray-300 hover:bg-white/[0.05]'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }
                    `}
                  >
                    <Mail size={15} />
                    Email DevZore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;