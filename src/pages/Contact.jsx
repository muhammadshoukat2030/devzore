import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Code2,
  Globe2,
  Mail,
  Rocket,
  Send,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

const Contact = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    timeline: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // BACKGROUNDS

  const lightGrid = {
    backgroundImage:
      "linear-gradient(rgba(7,25,35,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(7,25,35,0.045) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
  };

  const darkGrid = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
    backgroundSize: "52px 52px",
  };

  // SERVICES

  const services = [
    "Web Development",
    "Mobile App Development",
    "MERN Stack Development",
    "SaaS Development",
    "E-Commerce Development",
    "UI/UX Design",
    "Startup MVP Development",
    "Backend & API Development",
    "React Development",
    "SEO Services",
    "Digital Marketing",
    "Maintenance & Support",
    "Other",
  ];

  // TIMELINES

  const timelines = [
    "As soon as possible",
    "Within 1 month",
    "1–3 months",
    "3–6 months",
    "Flexible / Not decided",
  ];

  // PROJECT TYPES

  const projectTypes = [
    {
      icon: <Code2 size={19} />,
      title: "Web Applications",
      description:
        "Business websites, custom web applications, dashboards and digital platforms.",
    },
    {
      icon: <Smartphone size={19} />,
      title: "Mobile Applications",
      description:
        "Cross-platform mobile applications connected with backend systems and APIs.",
    },
    {
      icon: <Server size={19} />,
      title: "Backend & APIs",
      description:
        "Application backends, APIs, authentication, databases and integrations.",
    },
    {
      icon: <Rocket size={19} />,
      title: "SaaS & MVP Products",
      description:
        "New software products, startup MVPs and scalable SaaS application foundations.",
    },
  ];

  // TRUST POINTS

  const trustPoints = [
    {
      icon: <Target size={17} />,
      title: "Project-Focused Discussion",
      description:
        "Start with the business problem, required features or product idea and we can discuss the next technical steps.",
    },
    {
      icon: <Users size={17} />,
      title: "Clear Communication",
      description:
        "Requirements, scope and important development decisions can be discussed clearly throughout the project.",
    },
    {
      icon: <ShieldCheck size={17} />,
      title: "Responsible Development",
      description:
        "Security, maintainability and application reliability are considered according to the needs of the product.",
    },
    {
      icon: <Zap size={17} />,
      title: "Practical Solutions",
      description:
        "We focus on useful functionality and appropriate architecture instead of unnecessary complexity.",
    },
  ];

  // RELATED SERVICES

  const relatedServices = [
    {
      icon: <Code2 size={18} />,
      title: "Web Development",
      description:
        "Custom websites and web applications built around business requirements.",
      path: "/web-development",
    },
    {
      icon: <Smartphone size={18} />,
      title: "Mobile Apps",
      description:
        "Cross-platform mobile applications connected with backend services.",
      path: "/mobile-apps",
    },
    {
      icon: <Server size={18} />,
      title: "Backend & API",
      description:
        "Backend systems, APIs, databases, authentication and integrations.",
      path: "/backend-api",
    },
    {
      icon: <Rocket size={18} />,
      title: "SaaS Development",
      description:
        "SaaS products with users, dashboards, workflows and scalable functionality.",
      path: "/saas-product-development",
    },
  ];

  // HELPERS

  const SectionLabel = ({ children, light = false }) => (
    <div
      className={`flex items-center gap-2.5 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase ${
        light ? "text-[#28c5d4]" : "text-[#07899a]"
      }`}
    >
      <span className="w-5 h-[2px] bg-[#0796A8]" />
      {children}
    </div>
  );

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // FORM

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  // EMAILJS
  // Working EmailJS configuration preserved.

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    setLoading(true);

    const templateParams = {
      name: form.name.trim(),
      email: form.email.trim(),
      service: form.service || "Not specified",
      timeline: form.timeline || "Not specified",
      message: form.message.trim(),
    };

    try {
      await emailjs.send(
        "service_s30fvfz",
        "template_axl74r9",
        templateParams,
        {
          publicKey: "RE7HME1c0_KdvnI3c",
        }
      );

      setForm({
        name: "",
        email: "",
        service: "",
        timeline: "",
        message: "",
      });

      navigate("/thank-you");
    } catch (error) {
      console.error("EmailJS Error:", error);

      alert(
        "Sorry, your inquiry could not be sent. Please try again or email us at hellodevzore@gmail.com."
      );
    } finally {
      setLoading(false);
    }
  };

  // FORM STYLES

  const inputClass =
    "w-full min-h-[46px] rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-[12px] sm:text-[13px] font-medium text-[#071923] placeholder:text-slate-400 outline-none transition-all duration-200 hover:border-slate-300 focus:border-[#0796A8] focus:ring-4 focus:ring-[#0796A8]/10";

  const labelClass =
    "block mb-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.13em] text-slate-500";

  // STRUCTURED DATA

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://devzore.com/contact#contactpage",
    name: "Contact DevZore",
    url: "https://devzore.com/contact",
    description:
      "Contact DevZore to discuss web development, mobile applications, SaaS products, backend APIs and custom software development.",
    isPartOf: {
      "@id": "https://devzore.com/#website",
    },
    about: {
      "@id": "https://devzore.com/#organization",
    },
    mainEntity: {
      "@id": "https://devzore.com/#organization",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://devzore.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "https://devzore.com/contact",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div
        className="min-h-screen overflow-hidden bg-[#f7f9fa] text-[#071923] antialiased"
        style={{
          fontFamily: '"Inter", "Segoe UI", Arial, Helvetica, sans-serif',
        }}
      >
        {/* HERO */}

        <section
          aria-labelledby="contact-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-55"
              style={darkGrid}
            />

            <div className="absolute -top-28 left-[8%] w-[560px] h-[560px] rounded-full bg-[#0796A8]/12 blur-[150px]" />

            <div className="absolute top-8 right-[5%] w-[430px] h-[430px] rounded-full bg-[#20bdcb]/7 blur-[135px]" />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#04111a]/85" />
          </div>

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-14">
            <div className="max-w-[900px] mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.17em] uppercase text-[#c2ccd2]">
                <Mail size={14} className="text-[#25c0ce]" />
                Contact DevZore
              </div>

              <h1
                id="contact-heading"
                className="mt-5 text-[40px] sm:text-[50px] lg:text-[62px] xl:text-[68px] leading-[1.04] font-semibold tracking-[-0.045em]"
              >
                Have a digital product{" "}
                <span className="text-[#22bdca]">
                  you want to build?
                </span>
              </h1>

              <p className="max-w-[760px] mx-auto mt-5 text-[16px] sm:text-[17px] leading-7 text-slate-300">
                Tell us about your website, application, SaaS product,
                mobile app or custom software requirement and we can discuss
                the appropriate next steps.
              </p>

              <p className="max-w-[680px] mx-auto mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
                You do not need a complete technical specification. Start
                with the problem, idea or functionality you need.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="#project-form"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[12px] font-semibold text-[#071923] transition-colors"
                >
                  Start Your Inquiry

                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>

                <a
                  href="mailto:hellodevzore@gmail.com"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold text-white hover:text-[#28c5d4] transition-colors"
                >
                  Email DevZore

                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>

              <div className="mt-7 pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
                {[
                  "Project Discussion",
                  "Remote Collaboration",
                  "Clear Requirements",
                  "Development Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 text-[10px] font-medium text-slate-400"
                  >
                    <CheckCircle2
                      size={12}
                      className="text-[#25c0ce]"
                    />

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* HERO STRIP */}

          <div className="relative border-t border-white/[0.08] bg-[#06151d]/90">
            <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
              <div className="grid grid-cols-2 lg:grid-cols-4">
                {[
                  ["01", "Share Your Idea"],
                  ["02", "Discuss Requirements"],
                  ["03", "Plan the Project"],
                  ["04", "Start Development"],
                ].map(([number, title], index) => (
                  <div
                    key={title}
                    className={`py-4 ${
                      index !== 3
                        ? "lg:border-r border-white/[0.07]"
                        : ""
                    } ${index > 0 ? "lg:pl-7" : ""}`}
                  >
                    <span className="block mb-1 text-[9px] font-semibold text-[#1bb8c7]">
                      {number}
                    </span>

                    <span className="text-[11px] font-medium text-slate-300">
                      {title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}

        <section
          className="py-10 md:py-12 bg-[#f8fafb]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-7 lg:gap-12">
              <div>
                <SectionLabel>Start a Conversation</SectionLabel>

                <h2 className="mt-3 text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold">
                  Start with what you{" "}
                  <span className="text-[#0796A8]">
                    already know.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 text-slate-700">
                  You can contact DevZore whether you already have detailed
                  requirements or are still working through the early stages of
                  an idea.
                </p>

                <p className="mt-3 text-[13px] leading-6 text-slate-500">
                  Share the business problem, expected users, important
                  features, current system or technical challenge and we can
                  use that information as the starting point.
                </p>

                <div className="grid sm:grid-cols-2 gap-2.5 mt-5">
                  {[
                    "New software projects",
                    "Existing product improvements",
                    "Custom business systems",
                    "Ongoing development needs",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5"
                    >
                      <CheckCircle2
                        size={13}
                        className="text-[#07899a]"
                      />

                      <span className="text-[10px] font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT TYPES */}

        <section
          aria-labelledby="project-types-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Project Types</SectionLabel>

              <h2
                id="project-types-heading"
                className="mt-3 text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold"
              >
                What can you discuss with{" "}
                <span className="text-[#0796A8]">DevZore?</span>
              </h2>

              <p className="mt-3 text-[13px] leading-6 text-slate-600 max-w-2xl">
                Contact us about a new product, existing application,
                business system or future development requirement.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {projectTypes.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-[#fbfcfc] p-5"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="mt-4 text-[14px] font-semibold text-[#071923]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[10px] sm:text-[11px] leading-5 text-slate-500">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECT ENQUIRY */}

        <section
          id="project-form"
          aria-labelledby="contact-form-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden scroll-mt-24"
        >
          <div className="absolute inset-0" style={darkGrid} />

          <div className="absolute -top-16 right-[4%] w-[500px] h-[430px] rounded-full bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.78fr_1.22fr] gap-8 lg:gap-12">
              {/* LEFT */}

              <div>
                <SectionLabel light>Project Enquiry</SectionLabel>

                <h2
                  id="contact-form-heading"
                  className="mt-3 text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold"
                >
                  Tell us what you want to{" "}
                  <span className="text-[#25bfce]">
                    build or improve.
                  </span>
                </h2>

                <p className="mt-4 text-[13px] sm:text-[14px] leading-6 text-slate-400">
                  Provide the information you currently have. Your enquiry
                  will be sent directly to DevZore through the form.
                </p>

                <div className="mt-6 space-y-3">
                  {trustPoints.map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4"
                    >
                      <div className="w-9 h-9 shrink-0 rounded-xl bg-[#0c2a35] text-[#28c5d4] flex items-center justify-center">
                        {item.icon}
                      </div>

                      <div>
                        <h3 className="text-[12px] font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-[10px] leading-5 text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-[#25c0ce]" />

                    <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                      Email
                    </span>
                  </div>

                  <a
                    href="mailto:hellodevzore@gmail.com"
                    className="inline-block mt-2 text-[13px] font-semibold text-white hover:text-[#25c0ce] transition-colors"
                  >
                    hellodevzore@gmail.com
                  </a>
                </div>

                <div className="mt-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <div className="flex items-center gap-2">
                    <Globe2 size={14} className="text-[#25c0ce]" />

                    <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                      Collaboration
                    </span>
                  </div>

                  <p className="mt-2 text-[12px] font-semibold text-white">
                    Remote project delivery
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-slate-500">
                    Project communication, reviews and development can be
                    handled remotely through agreed collaboration channels.
                  </p>
                </div>
              </div>

              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/[0.09] bg-[#091d27]/95 p-5 sm:p-6 lg:p-7 shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
              >
                <div className="pb-5 border-b border-white/[0.08]">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#25c0ce]">
                    Project Details
                  </p>

                  <h3 className="mt-1.5 text-[19px] sm:text-[21px] font-semibold text-white">
                    Share Your Requirements
                  </h3>

                  <p className="mt-2 text-[10px] sm:text-[11px] leading-5 text-slate-500">
                    Fill in the information below and your project enquiry
                    will be sent directly to DevZore.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block mb-1.5 text-[9px] font-semibold uppercase tracking-[0.13em] text-slate-400"
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
                      className="w-full min-h-[46px] rounded-lg border border-white/[0.09] bg-white/[0.04] px-3.5 py-2.5 text-[12px] text-white placeholder:text-slate-600 outline-none transition-all hover:border-white/[0.14] focus:border-[#0796A8] focus:ring-4 focus:ring-[#0796A8]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block mb-1.5 text-[9px] font-semibold uppercase tracking-[0.13em] text-slate-400"
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
                      className="w-full min-h-[46px] rounded-lg border border-white/[0.09] bg-white/[0.04] px-3.5 py-2.5 text-[12px] text-white placeholder:text-slate-600 outline-none transition-all hover:border-white/[0.14] focus:border-[#0796A8] focus:ring-4 focus:ring-[#0796A8]/10"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block mb-1.5 text-[9px] font-semibold uppercase tracking-[0.13em] text-slate-400"
                    >
                      What Do You Need?
                    </label>

                    <div className="relative">
                      <select
                        id="contact-service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full min-h-[46px] appearance-none cursor-pointer rounded-lg border border-white/[0.09] bg-[#0b222d] px-3.5 py-2.5 pr-10 text-[12px] text-white outline-none transition-all hover:border-white/[0.14] focus:border-[#0796A8] focus:ring-4 focus:ring-[#0796A8]/10"
                      >
                        <option value="">Select a service</option>

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
                        size={14}
                        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-timeline"
                      className="block mb-1.5 text-[9px] font-semibold uppercase tracking-[0.13em] text-slate-400"
                    >
                      Project Timeline
                    </label>

                    <div className="relative">
                      <select
                        id="contact-timeline"
                        name="timeline"
                        value={form.timeline}
                        onChange={handleChange}
                        className="w-full min-h-[46px] appearance-none cursor-pointer rounded-lg border border-white/[0.09] bg-[#0b222d] px-3.5 py-2.5 pr-10 text-[12px] text-white outline-none transition-all hover:border-white/[0.14] focus:border-[#0796A8] focus:ring-4 focus:ring-[#0796A8]/10"
                      >
                        <option value="">Select timeline</option>

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
                        size={14}
                        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="contact-message"
                    className="block mb-1.5 text-[9px] font-semibold uppercase tracking-[0.13em] text-slate-400"
                  >
                    Project Details *
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your idea, existing website or application, business goals, required features, target users or the technical problem you want to solve."
                    className="w-full min-h-[150px] resize-none rounded-lg border border-white/[0.09] bg-white/[0.04] px-3.5 py-3 text-[12px] leading-6 text-white placeholder:text-slate-600 outline-none transition-all hover:border-white/[0.14] focus:border-[#0796A8] focus:ring-4 focus:ring-[#0796A8]/10"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`group mt-5 w-full min-h-[48px] inline-flex items-center justify-center gap-2 rounded-lg px-5 text-[11px] font-semibold transition-all ${
                    loading
                      ? "bg-[#0d7180] text-white/70 cursor-not-allowed"
                      : "bg-[#0796A8] hover:bg-[#078899] text-white hover:shadow-[0_12px_35px_rgba(7,150,168,0.2)]"
                  }`}
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending Inquiry...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Project Inquiry

                      <ArrowRight
                        size={13}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </button>

                <div className="mt-4 pt-4 border-t border-white/[0.07] flex items-start justify-center gap-2 text-center">
                  <ShieldCheck
                    size={12}
                    className="shrink-0 mt-0.5 text-slate-600"
                  />

                  <p className="max-w-lg text-[9px] leading-5 text-slate-600">
                    Your project enquiry is sent directly to DevZore. We use
                    the information you provide to respond to your enquiry. See
                    our{" "}
                    <Link
                      to="/privacy-policy"
                      onClick={scrollTop}
                      className="text-[#24bcca] hover:text-[#35cedb] transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}

        <section
          aria-labelledby="contact-process-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>What Happens Next</SectionLabel>

              <h2
                id="contact-process-heading"
                className="mt-3 text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold"
              >
                A simple path from enquiry to{" "}
                <span className="text-[#0796A8]">
                  project discussion.
                </span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                {
                  number: "01",
                  title: "Send Your Enquiry",
                  description:
                    "Share the information you currently have about the project.",
                },
                {
                  number: "02",
                  title: "Requirements Review",
                  description:
                    "We review the project goals, features and important requirements.",
                },
                {
                  number: "03",
                  title: "Discuss the Approach",
                  description:
                    "The scope, development direction and next steps can then be discussed.",
                },
                {
                  number: "04",
                  title: "Plan Development",
                  description:
                    "Once aligned, the project can move into planning and implementation.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="rounded-xl border border-slate-200 bg-white p-4"
                >
                  <span className="text-[9px] font-semibold text-[#07899a]">
                    {item.number}
                  </span>

                  <h3 className="mt-2 text-[13px] font-semibold text-[#071923]">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-[10px] leading-5 text-slate-500">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}

        <section
          aria-labelledby="contact-services-heading"
          className="py-10 md:py-12 bg-white border-y border-slate-200"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Explore Services</SectionLabel>

              <h2
                id="contact-services-heading"
                className="mt-3 text-[28px] sm:text-[33px] md:text-[38px] leading-[1.08] tracking-[-0.035em] font-semibold"
              >
                Explore services related to{" "}
                <span className="text-[#0796A8]">
                  your project.
                </span>
              </h2>

              <p className="mt-3 text-[13px] leading-6 text-slate-600 max-w-2xl">
                Review the development areas most relevant to what you are
                planning to build.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={scrollTop}
                  className="group rounded-xl border border-slate-200 bg-[#fbfcfc] p-4 hover:border-[#0796A8]/40 hover:-translate-y-1 transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                    {service.icon}
                  </div>

                  <h3 className="mt-3 text-[13px] font-semibold text-[#071923]">
                    {service.title}
                  </h3>

                  <p className="mt-1.5 text-[10px] leading-5 text-slate-500">
                    {service.description}
                  </p>

                  <span className="mt-3 inline-flex items-center gap-1.5 text-[9px] font-semibold text-[#07899a]">
                    Explore Service

                    <ArrowRight
                      size={10}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-5 text-center">
              <Link
                to="/allservices"
                onClick={scrollTop}
                className="inline-flex items-center gap-2 text-[10px] font-semibold text-[#07899a]"
              >
                View All DevZore Services
                <ArrowRight size={11} />
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}

        <section className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden">
          <div className="absolute inset-0" style={darkGrid} />

          <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[620px] h-[400px] bg-[#0796A8]/10 blur-[145px]" />

          <div className="relative max-w-[900px] mx-auto px-5 sm:px-6 text-center">
            <div className="w-10 h-10 mx-auto rounded-xl bg-[#0b2a35] text-[#28c5d4] flex items-center justify-center">
              <Sparkles size={19} />
            </div>

            <h2 className="mt-4 text-[29px] sm:text-[35px] md:text-[40px] font-semibold tracking-[-0.04em] leading-[1.06]">
              Ready to discuss{" "}
              <span className="text-[#25bfce]">your project?</span>
            </h2>

            <p className="max-w-2xl mx-auto mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
              Share your requirements through the project enquiry form and
              start the conversation with DevZore.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#project-form"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[11px] font-semibold text-[#071923] transition-colors"
              >
                Start Your Inquiry

                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="mailto:hellodevzore@gmail.com"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.12] px-5 py-3 text-[11px] font-semibold text-white hover:border-[#23bfce]/40 hover:text-[#28c5d4] transition-colors"
              >
                <Mail size={13} />
                Email DevZore
              </a>
            </div>
          </div>
        </section>

        {/* BOTTOM LINKS */}

        <section className="bg-[#06151d] border-t border-white/[0.06]">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6 py-5">
            <nav
              aria-label="DevZore contact related pages"
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
            >
              {[
                ["Web Development", "/web-development"],
                ["Mobile Apps", "/mobile-apps"],
                ["Backend & API", "/backend-api"],
                ["SaaS Development", "/saas-product-development"],
                ["Startup MVP", "/startup-mvp"],
                ["All Services", "/allservices"],
                ["About DevZore", "/about"],
              ].map(([label, path]) => (
                <Link
                  key={path}
                  to={path}
                  onClick={scrollTop}
                  className="text-[9px] font-medium text-slate-500 hover:text-[#25bfce] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;