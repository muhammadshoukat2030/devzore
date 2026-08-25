
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  CheckCircle,
  Clock,
  Globe,
  Shield,
  Zap,
  MessageCircle,
  ChevronDown,
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

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const services = [
    'Web Development',
    'Mobile App Development',
    'MERN Stack Development',
    'SaaS Development',
    'E-Commerce Development',
    'UI/UX Design',
    'Startup MVP',
    'Backend & API Development',
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /*
   * Frontend-only contact handling.
   *
   * This opens the user's email client with the complete
   * project inquiry. It does NOT falsely claim that a backend
   * message was delivered.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const subject = encodeURIComponent(
      `New Project Inquiry — ${form.service || 'Digital Project'}`
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
      setSubmitted(true);
    }, 700);
  };

  const contactMethods = [
    {
      icon: <Mail size={18} />,
      label: 'Email',
      value: 'hellodevzore@gmail.com',
      href: 'mailto:hellodevzore@gmail.com',
      color: 'purple',
    },
    {
      icon: <Phone size={18} />,
      label: 'WhatsApp',
      value: '+92 334 8004300',
      href: 'https://wa.me/923348004300',
      color: 'green',
    },
    {
      icon: <MapPin size={18} />,
      label: 'Based In',
      value: 'Islamabad, Pakistan',
      href: null,
      color: 'blue',
    },
    {
      icon: <Clock size={18} />,
      label: 'Availability',
      value: 'Open for new projects',
      href: null,
      color: 'amber',
    },
  ];

  const trustPoints = [
    {
      icon: <CheckCircle size={15} />,
      title: 'Free initial consultation',
      text: 'Discuss your idea before making a commitment.',
    },
    {
      icon: <Shield size={15} />,
      title: 'Clear communication',
      text: 'You stay informed throughout the project.',
    },
    {
      icon: <Zap size={15} />,
      title: 'Business-focused development',
      text: 'We focus on useful products, not unnecessary complexity.',
    },
    {
      icon: <Globe size={15} />,
      title: 'Worldwide collaboration',
      text: 'Work with us remotely from anywhere.',
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

  return (
    <>
      <Helmet>
        <title>
          Contact DevZore | Software Development & Digital Product Agency
        </title>

        <meta
          name="description"
          content="Talk to DevZore about your next website, web application, mobile app, SaaS product or digital solution. Based in Pakistan and working with businesses worldwide."
        />

        <link
          rel="canonical"
          href="https://devzore.com/contact"
        />

        <meta
          name="robots"
          content="index, follow"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Contact DevZore | Software Development Agency"
        />

        <meta
          property="og:description"
          content="Have a project in mind? Talk to DevZore about web development, mobile apps, SaaS, UI/UX and digital product development."
        />

        <meta
          property="og:url"
          content="https://devzore.com/contact"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:image"
          content="https://devzore.com/logo1.png"
        />

        <meta
          property="og:site_name"
          content="DevZore"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Contact DevZore | Software Development Agency"
        />

        <meta
          name="twitter:description"
          content="Discuss your website, mobile app, SaaS or digital product with DevZore."
        />

        <meta
          name="twitter:image"
          content="https://devzore.com/logo1.png"
        />

        {/* Geographic information */}
        <meta
          name="geo.region"
          content="PK-IS"
        />

        <meta
          name="geo.placename"
          content="Islamabad"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact DevZore',
            url: 'https://devzore.com/contact',
            description:
              'Contact DevZore for software development and digital product services.',
            mainEntity: {
              '@type': 'Organization',
              name: 'DevZore',
              url: 'https://devzore.com',
              logo: 'https://devzore.com/logo1.png',
              email: 'hellodevzore@gmail.com',
              telephone: '+92-334-8004300',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Islamabad',
                addressCountry: 'PK',
              },
              areaServed: 'Worldwide',
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  contactType: 'customer service',
                  email: 'hellodevzore@gmail.com',
                  telephone: '+92-334-8004300',
                  availableLanguage: ['English', 'Urdu'],
                },
              ],
              sameAs: [
                'https://www.facebook.com/profile.php?id=61591616471858',
                'https://www.linkedin.com/in/dev-zore-833893418/',
                'https://www.instagram.com/devz.ore/',
                'https://www.tiktok.com/@dev_zore',
                'https://www.fiverr.com/sellers/devzore/',
                'https://www.upwork.com/freelancers/~012e5cc1a7d6ceb834',
              ],
            },
          })}
        </script>
      </Helmet>

      <main
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

        {/* =====================================================
            HERO
        ===================================================== */}
        <section
          aria-labelledby="contact-heading"
          className="relative pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-16 overflow-hidden"
        >
          {/* Background glow */}
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
              ${
                d
                  ? 'bg-purple-700'
                  : 'bg-purple-200'
              }
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
              Start a conversation
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
                ${
                  d
                    ? 'text-white'
                    : 'text-slate-950'
                }
              `}
            >
              Have a project in mind?
              <br />

              <span className="text-purple-600">
                Let's talk.
              </span>
            </h1>

            <p
              className={`
                mt-5
                max-w-2xl
                mx-auto
                text-sm
                sm:text-base
                lg:text-lg
                leading-7
                ${
                  d
                    ? 'text-gray-400'
                    : 'text-slate-600'
                }
              `}
            >
              Tell us what you want to build, improve or launch.
              We will understand your goals, discuss the right
              approach and help you take the next step.
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
                href="https://wa.me/923348004300?text=Hi%20DevZore!%20I%20would%20like%20to%20discuss%20a%20project."
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

        {/* =====================================================
            CONTACT METHODS
        ===================================================== */}
        <section
          aria-label="Ways to contact DevZore"
          className={`
            border-y
            ${
              d
                ? 'border-white/[0.06]'
                : 'border-slate-200'
            }
          `}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-9">

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">

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
                      ${
                        d
                          ? 'text-gray-500'
                          : 'text-slate-400'
                      }
                    `}
                  >
                    {method.label}
                  </p>

                  {method.href ? (
                    <a
                      href={method.href}
                      target={
                        method.href.startsWith('http')
                          ? '_blank'
                          : undefined
                      }
                      rel="noopener noreferrer"
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
                        ${
                          d
                            ? 'text-white'
                            : 'text-slate-900'
                        }
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

        {/* =====================================================
            MAIN CONTACT AREA
        ===================================================== */}
        <section
          aria-label="Project inquiry"
          className="py-14 sm:py-16 lg:py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

              {/* =================================================
                  LEFT INFORMATION
              ================================================= */}
              <div className="lg:col-span-5">

                <div className="mb-7">
                  <p
                    className="
                      text-purple-500
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      mb-3
                    "
                  >
                    Why contact us
                  </p>

                  <h2
                    className={`
                      text-2xl
                      sm:text-3xl
                      font-black
                      tracking-tight
                      ${
                        d
                          ? 'text-white'
                          : 'text-slate-950'
                      }
                    `}
                  >
                    A simple first step toward your next digital product.
                  </h2>

                  <p
                    className={`
                      mt-4
                      text-sm
                      sm:text-[15px]
                      leading-6
                      ${
                        d
                          ? 'text-gray-400'
                          : 'text-slate-600'
                      }
                    `}
                  >
                    Whether you are starting from an idea, improving
                    an existing product or looking for a development
                    partner, tell us what you need.
                  </p>
                </div>

                {/* Trust Points */}
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
                            ${
                              d
                                ? 'text-white'
                                : 'text-slate-900'
                            }
                          `}
                        >
                          {point.title}
                        </h3>

                        <p
                          className={`
                            text-[12px]
                            leading-5
                            mt-1
                            ${
                              d
                                ? 'text-gray-500'
                                : 'text-slate-500'
                            }
                          `}
                        >
                          {point.text}
                        </p>
                      </div>
                    </div>
                  ))}

                </div>

                {/* WhatsApp Card */}
                <a
                  href="https://wa.me/923348004300?text=Hi%20DevZore!%20I%20would%20like%20to%20discuss%20a%20project."
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
                        ${
                          d
                            ? 'text-gray-500'
                            : 'text-slate-500'
                        }
                      `}
                    >
                      Start a direct conversation with DevZore.
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

                {/* Worldwide */}
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
                        ${
                          d
                            ? 'text-gray-500'
                            : 'text-slate-400'
                        }
                      `}
                    >
                      Worldwide collaboration
                    </p>
                  </div>

                  <p
                    className={`
                      text-sm
                      font-semibold
                      ${
                        d
                          ? 'text-gray-200'
                          : 'text-slate-800'
                      }
                    `}
                  >
                    Pakistan · USA · UK · UAE · Canada · Australia
                  </p>

                  <p
                    className={`
                      text-[11px]
                      leading-5
                      mt-2
                      ${
                        d
                          ? 'text-gray-500'
                          : 'text-slate-500'
                      }
                    `}
                  >
                    Remote collaboration for businesses,
                    startups and organizations around the world.
                  </p>
                </div>

              </div>

              {/* =================================================
                  FORM
              ================================================= */}
              <div
                id="project-form"
                className="lg:col-span-7"
              >

                {submitted ? (
                  <div
                    className={`
                      min-h-[500px]
                      flex
                      flex-col
                      items-center
                      justify-center
                      text-center
                      p-7
                      sm:p-12
                      rounded-3xl
                      border
                      ${
                        d
                          ? 'bg-green-500/[0.04] border-green-500/20'
                          : 'bg-green-50 border-green-200'
                      }
                    `}
                  >
                    <div
                      className="
                        w-16
                        h-16
                        rounded-full
                        bg-green-500
                        flex
                        items-center
                        justify-center
                        mb-6
                      "
                    >
                      <CheckCircle
                        size={30}
                        className="text-white"
                      />
                    </div>

                    <h2
                      className={`
                        text-2xl
                        sm:text-3xl
                        font-black
                        ${
                          d
                            ? 'text-white'
                            : 'text-slate-950'
                        }
                      `}
                    >
                      Your inquiry is ready.
                    </h2>

                    <p
                      className={`
                        max-w-md
                        mt-3
                        text-sm
                        leading-6
                        ${
                          d
                            ? 'text-gray-400'
                            : 'text-slate-600'
                        }
                      `}
                    >
                      Your email application should now open with
                      your project details prepared. Send the email
                      to complete your inquiry.
                    </p>

                    <a
                      href="https://wa.me/923348004300?text=Hi%20DevZore!%20I%20would%20like%20to%20discuss%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        mt-7
                        inline-flex
                        items-center
                        gap-2
                        px-6
                        py-3
                        rounded-xl
                        bg-[#25D366]
                        text-white
                        text-sm
                        font-bold
                        hover:bg-[#20bd5b]
                        transition-colors
                      "
                    >
                      Continue on WhatsApp
                      <ArrowRight size={15} />
                    </a>
                  </div>
                ) : (
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
                      <p
                        className="
                          text-purple-500
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.16em]
                          mb-2
                        "
                      >
                        Project inquiry
                      </p>

                      <h2
                        className={`
                          text-xl
                          sm:text-2xl
                          font-black
                          ${
                            d
                              ? 'text-white'
                              : 'text-slate-950'
                          }
                        `}
                      >
                        Tell us what you're building
                      </h2>

                      <p
                        className={`
                          text-[12px]
                          leading-5
                          mt-2
                          ${
                            d
                              ? 'text-gray-500'
                              : 'text-slate-500'
                          }
                        `}
                      >
                        No need to prepare everything first.
                        Just share the information you already have.
                      </p>
                    </div>

                    {/* Name + Email */}
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

                    {/* Service + Timeline */}
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
                              ${
                                d
                                  ? 'text-gray-500'
                                  : 'text-slate-400'
                              }
                            `}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-timeline"
                          className={labelClass}
                        >
                          Project timeline
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
                              ${
                                d
                                  ? 'text-gray-500'
                                  : 'text-slate-400'
                              }
                            `}
                          />
                        </div>
                      </div>

                    </div>

                    {/* Project Details */}
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
                        placeholder="Tell us about your idea, current website or app, goals, required features, target audience or anything else that would help us understand your project."
                        className={`
                          ${inputClass}
                          resize-none
                          min-h-[160px]
                        `}
                      />
                    </div>

                    {/* Submit */}
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
                          Preparing message...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Project Inquiry
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
                        ${
                          d
                            ? 'text-gray-600'
                            : 'text-slate-400'
                        }
                      `}
                    >
                      <Shield
                        size={13}
                        className="shrink-0 mt-0.5"
                      />

                      <span>
                        Your project information is used only to
                        understand and respond to your inquiry.
                        See our{' '}
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
                )}

              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}
        <section
          aria-label="Final contact call to action"
          className="pb-16 sm:pb-20"
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
                <p
                  className="
                    text-purple-500
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    mb-3
                  "
                >
                  Let's get started
                </p>

                <h2
                  className={`
                    text-2xl
                    sm:text-3xl
                    lg:text-4xl
                    font-black
                    tracking-tight
                    ${
                      d
                        ? 'text-white'
                        : 'text-slate-950'
                    }
                  `}
                >
                  Your next project could start with one message.
                </h2>

                <p
                  className={`
                    max-w-2xl
                    mx-auto
                    mt-3
                    text-sm
                    leading-6
                    ${
                      d
                        ? 'text-gray-400'
                        : 'text-slate-600'
                    }
                  `}
                >
                  Share your idea with DevZore and let's explore
                  the right solution together.
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

      </main>
    </>
  );
};

export default Contact;