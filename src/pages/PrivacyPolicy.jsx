import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Cookie,
  Database,
  Eye,
  FileText,
  Globe2,
  LockKeyhole,
  Mail,
  Server,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const PrivacyPolicy = () => {
  const lastUpdated = "September 19, 2026";

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

  // NAVIGATION

  const navItems = [
    {
      id: "collection",
      label: "Data We Collect",
      icon: <Database size={14} />,
    },
    {
      id: "usage",
      label: "How We Use Data",
      icon: <Eye size={14} />,
    },
    {
      id: "security",
      label: "Data Security",
      icon: <ShieldCheck size={14} />,
    },
    {
      id: "cookies",
      label: "Cookies & Analytics",
      icon: <Cookie size={14} />,
    },
    {
      id: "thirdparty",
      label: "Third-Party Services",
      icon: <Globe2 size={14} />,
    },
    {
      id: "retention",
      label: "Data Retention",
      icon: <LockKeyhole size={14} />,
    },
    {
      id: "rights",
      label: "Your Rights",
      icon: <UserCheck size={14} />,
    },
    {
      id: "contact",
      label: "Contact Us",
      icon: <Mail size={14} />,
    },
  ];

  // HELPERS

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const SectionLabel = ({ children }) => (
    <div className="flex items-center gap-2.5 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#07899a]">
      <span className="w-5 h-[2px] bg-[#0796A8]" />
      {children}
    </div>
  );

  const sectionClass =
    "scroll-mt-24 py-8 sm:py-9 border-b border-slate-200";

  const headingClass =
    "text-[22px] sm:text-[26px] leading-tight font-semibold tracking-[-0.025em] text-[#071923]";

  const paragraphClass =
    "text-[12px] sm:text-[13px] leading-6 text-slate-600 mb-4";

  const cardClass =
    "rounded-xl border border-slate-200 bg-[#fbfcfc] p-4 sm:p-5 mb-3";

  // STRUCTURED DATA

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://devzore.com/privacy-policy#webpage",
    name: "Privacy Policy",
    url: "https://devzore.com/privacy-policy",
    description:
      "Read DevZore's Privacy Policy to understand how information may be collected, used, stored and protected when using the DevZore website and services.",
    isPartOf: {
      "@id": "https://devzore.com/#website",
    },
    about: {
      "@id": "https://devzore.com/#organization",
    },
    inLanguage: "en",
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
        name: "Privacy Policy",
        item: "https://devzore.com/privacy-policy",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
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
          aria-labelledby="privacy-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-55"
              style={darkGrid}
            />

            <div className="absolute -top-32 left-[10%] w-[540px] h-[540px] rounded-full bg-[#0796A8]/12 blur-[150px]" />

            <div className="absolute top-12 right-[4%] w-[420px] h-[420px] rounded-full bg-[#20bdcb]/7 blur-[135px]" />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#04111a]/85" />
          </div>

          <div className="relative max-w-[1100px] mx-auto px-5 sm:px-6 pt-20 sm:pt-24 lg:pt-24 pb-12 sm:pb-14 text-center">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.17em] uppercase text-[#c2ccd2]">
              <ShieldCheck size={14} className="text-[#25c0ce]" />
              Privacy Policy
            </div>

            <h1
              id="privacy-heading"
              className="mt-5 text-[40px] sm:text-[48px] lg:text-[54px] leading-[1.04] font-semibold tracking-[-0.045em]"
            >
              How DevZore handles{" "}
              <span className="text-[#22bdca]">
                your information.
              </span>
            </h1>

            <p className="max-w-[760px] mx-auto mt-5 text-[15px] sm:text-[15px] leading-7 text-slate-300">
              This Privacy Policy explains what information may be collected
              when you use the DevZore website or contact us, why that
              information may be used and the choices available to you.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/[0.09] bg-white/[0.03] px-4 py-2.5 text-[10px] font-medium text-slate-400">
              <FileText size={12} className="text-[#25c0ce]" />
              Last updated: {lastUpdated}
            </div>
          </div>
        </section>

        {/* CONTENT */}

        <section
          className="py-10 md:py-12 bg-[#f8fafb]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.3fr_0.7fr] gap-8 lg:gap-12 items-start">
              {/* SIDEBAR */}

              <aside className="hidden lg:block">
                <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-slate-400 mb-3">
                    Policy Contents
                  </p>

                  <nav
                    aria-label="Privacy policy sections"
                    className="space-y-1"
                  >
                    {navItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[11px] font-medium text-slate-600 hover:bg-[#edf4f5] hover:text-[#07899a] transition-colors"
                      >
                        <span className="text-[#07899a]">
                          {item.icon}
                        </span>

                        {item.label}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-slate-400">
                      Last Updated
                    </p>

                    <p className="mt-1 text-[11px] font-semibold text-[#071923]">
                      {lastUpdated}
                    </p>
                  </div>

                  <div className="mt-4 rounded-xl border border-[#0796A8]/15 bg-[#edf6f7] p-4">
                    <Mail size={15} className="text-[#07899a]" />

                    <p className="mt-2 text-[10px] leading-5 text-slate-600">
                      Have a question about this policy?
                    </p>

                    <a
                      href="mailto:hellodevzore@gmail.com"
                      className="block mt-1 text-[10px] font-semibold text-[#07899a] break-all"
                    >
                      hellodevzore@gmail.com
                    </a>
                  </div>
                </div>
              </aside>

              {/* POLICY */}

              <div>
                {/* INTRO */}

                <div className="rounded-2xl border border-[#0796A8]/15 bg-[#edf6f7] p-5 mb-2">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 shrink-0 rounded-xl bg-white text-[#07899a] flex items-center justify-center">
                      <ShieldCheck size={16} />
                    </div>

                    <div>
                      <h2 className="text-[13px] font-semibold text-[#071923]">
                        About This Privacy Policy
                      </h2>

                      <p className="mt-2 text-[11px] sm:text-[12px] leading-6 text-slate-600">
                        This policy applies to information handled through
                        devzore.com and information you voluntarily provide
                        when contacting DevZore about software development,
                        web development, mobile applications, SaaS products,
                        technical services or related enquiries.
                      </p>
                    </div>
                  </div>
                </div>

                {/* COLLECTION */}

                <section id="collection" className={sectionClass}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      <Database size={16} />
                    </div>

                    <h2 className={headingClass}>
                      Information We May Collect
                    </h2>
                  </div>

                  <p className={paragraphClass}>
                    The information we receive depends on how you interact
                    with DevZore. You may browse the website without directly
                    providing personal information, while contacting us may
                    require you to provide certain details.
                  </p>

                  <div className={cardClass}>
                    <h3 className="text-[13px] font-semibold text-[#071923] mb-3">
                      Information You Provide
                    </h3>

                    <div className="space-y-2">
                      {[
                        "Your name and email address when you contact us.",
                        "Your phone number if you choose to provide it.",
                        "Company or business information that you voluntarily share with us.",
                        "Project requirements, technical requirements, business goals and other information included in your enquiry.",
                        "Messages, documents or other information you send through email or another agreed communication channel.",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2.5"
                        >
                          <CheckCircle2
                            size={12}
                            className="text-[#07899a] shrink-0 mt-1"
                          />

                          <p className="text-[11px] leading-5 text-slate-600">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={cardClass}>
                    <h3 className="text-[13px] font-semibold text-[#071923] mb-2">
                      Technical & Usage Information
                    </h3>

                    <p className="text-[11px] leading-6 text-slate-600">
                      Depending on the technologies and analytics services
                      active on our website, certain technical information may
                      be processed automatically. This can include browser
                      type, device information, pages viewed, referring pages,
                      approximate location derived from technical data, IP
                      address and general website usage information.
                    </p>
                  </div>

                  <div className={cardClass}>
                    <h3 className="text-[13px] font-semibold text-[#071923] mb-2">
                      Avoid Sending Unnecessary Sensitive Information
                    </h3>

                    <p className="text-[11px] leading-6 text-slate-600">
                      Please do not send passwords, payment card details,
                      private authentication credentials or sensitive personal
                      information unless it is genuinely required for an agreed
                      project and an appropriate secure method has been
                      arranged.
                    </p>
                  </div>
                </section>

                {/* USAGE */}

                <section id="usage" className={sectionClass}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      <Eye size={16} />
                    </div>

                    <h2 className={headingClass}>
                      How We May Use Your Information
                    </h2>
                  </div>

                  <p className={paragraphClass}>
                    Information may be used where reasonably necessary to
                    communicate with you, understand your requirements, provide
                    requested services and operate or improve our website.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      {
                        title: "Responding to Enquiries",
                        desc:
                          "To understand your request, communicate with you and discuss potential software development or digital services.",
                      },
                      {
                        title: "Project Planning",
                        desc:
                          "To understand project requirements, features, technical needs, timelines and other information necessary to discuss a potential project.",
                      },
                      {
                        title: "Providing Services",
                        desc:
                          "Where you become a client, relevant information may be used to manage communication and perform agreed project work.",
                      },
                      {
                        title: "Website Improvement",
                        desc:
                          "Technical or analytics information may be used to understand website performance, usability and general visitor behaviour.",
                      },
                      {
                        title: "Security & Reliability",
                        desc:
                          "Technical information may be processed where necessary to protect the website, investigate problems and reduce misuse.",
                      },
                      {
                        title: "Legal & Business Records",
                        desc:
                          "Certain information may be retained where reasonably necessary for accounting, contractual, legal or business record purposes.",
                      },
                    ].map((item) => (
                      <article
                        key={item.title}
                        className="rounded-xl border border-slate-200 bg-[#fbfcfc] p-4"
                      >
                        <CheckCircle2
                          size={13}
                          className="text-[#07899a]"
                        />

                        <h3 className="mt-3 text-[12px] font-semibold text-[#071923]">
                          {item.title}
                        </h3>

                        <p className="mt-1.5 text-[10px] leading-5 text-slate-500">
                          {item.desc}
                        </p>
                      </article>
                    ))}
                  </div>
                </section>

                {/* SECURITY */}

                <section id="security" className={sectionClass}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      <ShieldCheck size={16} />
                    </div>

                    <h2 className={headingClass}>Data Security</h2>
                  </div>

                  <p className={paragraphClass}>
                    We take reasonable technical and organisational measures
                    to reduce the risk of unauthorised access, misuse, loss,
                    alteration or disclosure of information handled by
                    DevZore.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      {
                        icon: <LockKeyhole size={15} />,
                        title: "Secure Connections",
                        desc:
                          "Our website uses HTTPS to help protect information transmitted between your browser and the website.",
                      },
                      {
                        icon: <UserCheck size={15} />,
                        title: "Controlled Access",
                        desc:
                          "Access to project or enquiry information should be limited to people who reasonably require it for business or project purposes.",
                      },
                      {
                        icon: <Database size={15} />,
                        title: "Data Minimisation",
                        desc:
                          "We aim to avoid collecting or retaining information that is not reasonably needed for the relevant purpose.",
                      },
                      {
                        icon: <Server size={15} />,
                        title: "Technical Safeguards",
                        desc:
                          "Hosting, application and account security measures may be used to help protect website and project information.",
                      },
                    ].map((item) => (
                      <article
                        key={item.title}
                        className="rounded-xl border border-slate-200 bg-[#fbfcfc] p-4"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                          {item.icon}
                        </div>

                        <h3 className="mt-3 text-[12px] font-semibold text-[#071923]">
                          {item.title}
                        </h3>

                        <p className="mt-1.5 text-[10px] leading-5 text-slate-500">
                          {item.desc}
                        </p>
                      </article>
                    ))}
                  </div>

                  <p className="mt-4 text-[10px] leading-5 text-slate-500">
                    No internet transmission or storage system can be
                    guaranteed to be completely secure. We therefore cannot
                    guarantee absolute security of information transmitted or
                    stored electronically.
                  </p>
                </section>

                {/* COOKIES */}

                <section id="cookies" className={sectionClass}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      <Cookie size={16} />
                    </div>

                    <h2 className={headingClass}>
                      Cookies, Local Storage & Analytics
                    </h2>
                  </div>

                  <p className={paragraphClass}>
                    Websites can use cookies, browser storage and similar
                    technologies for functionality, preferences, analytics and
                    security. The technologies used by DevZore may change as
                    the website develops.
                  </p>

                  {[
                    {
                      title: "Essential Technologies",
                      desc:
                        "Some browser or website technologies may be necessary for core functionality, security or reliable operation.",
                    },
                    {
                      title: "Preference Storage",
                      desc:
                        "Browser storage may be used to remember preferences where that functionality is enabled.",
                    },
                    {
                      title: "Analytics",
                      desc:
                        "If analytics tools are enabled, they may process technical and usage information to help us understand how the website is used.",
                    },
                  ].map((item) => (
                    <div key={item.title} className={cardClass}>
                      <h3 className="text-[12px] font-semibold text-[#071923]">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-[10px] leading-5 text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  ))}

                  <p className="text-[10px] leading-5 text-slate-500">
                    You can usually control cookies through your browser
                    settings. Disabling certain storage technologies may affect
                    some website features.
                  </p>
                </section>

                {/* THIRD PARTY */}

                <section id="thirdparty" className={sectionClass}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      <Globe2 size={16} />
                    </div>

                    <h2 className={headingClass}>Third-Party Services</h2>
                  </div>

                  <p className={paragraphClass}>
                    DevZore may rely on third-party providers for website
                    hosting, communication, analytics, infrastructure or other
                    business services. Those providers may process limited
                    information according to their own terms and privacy
                    practices.
                  </p>

                  {[
                    {
                      title: "Hosting & Infrastructure Providers",
                      desc:
                        "Providers used to host, deploy, secure or operate our website and software infrastructure may process technical information.",
                    },
                    {
                      title: "Email & Communication Services",
                      desc:
                        "When you contact us through email or messaging services, information may also be processed by the relevant communication provider.",
                    },
                    {
                      title: "Analytics & Performance Services",
                      desc:
                        "Where enabled, analytics or performance tools may process website usage and technical information.",
                    },
                    {
                      title: "Client-Requested Services",
                      desc:
                        "During project work, third-party platforms may be used when required by the project or agreed with the client.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 bg-[#fbfcfc] p-4 mb-2"
                    >
                      <CheckCircle2
                        size={13}
                        className="text-[#07899a] shrink-0 mt-0.5"
                      />

                      <div>
                        <h3 className="text-[12px] font-semibold text-[#071923]">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-[10px] leading-5 text-slate-500">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="mt-4 rounded-xl border border-[#0796A8]/15 bg-[#edf6f7] p-4">
                    <p className="text-[11px] leading-5 text-slate-600">
                      DevZore does not sell personal information as part of its
                      software development business.
                    </p>
                  </div>
                </section>

                {/* RETENTION */}

                <section id="retention" className={sectionClass}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      <LockKeyhole size={16} />
                    </div>

                    <h2 className={headingClass}>Data Retention</h2>
                  </div>

                  <p className={paragraphClass}>
                    We aim to retain personal information only for as long as
                    it is reasonably needed for the purpose for which it was
                    collected, to maintain appropriate business records or to
                    meet applicable contractual or legal obligations.
                  </p>

                  {[
                    {
                      title: "Project Enquiries",
                      desc:
                        "Enquiry information may be retained while discussions are active and for a reasonable period afterwards where follow-up may be relevant.",
                    },
                    {
                      title: "Client & Project Information",
                      desc:
                        "Information connected with completed or active projects may be retained where reasonably needed for support, project history, contractual records or future work.",
                    },
                    {
                      title: "Business & Financial Records",
                      desc:
                        "Records may be retained for periods required by applicable accounting, tax or other legal obligations.",
                    },
                    {
                      title: "Technical Information",
                      desc:
                        "Technical logs or analytics information may be retained according to operational requirements and the settings of the relevant service provider.",
                    },
                  ].map((item) => (
                    <div key={item.title} className={cardClass}>
                      <h3 className="text-[12px] font-semibold text-[#071923]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[10px] leading-5 text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </section>

                {/* RIGHTS */}

                <section id="rights" className={sectionClass}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      <UserCheck size={16} />
                    </div>

                    <h2 className={headingClass}>
                      Your Privacy Choices & Rights
                    </h2>
                  </div>

                  <p className={paragraphClass}>
                    Depending on the laws that apply to you and the
                    circumstances of the processing, you may have certain
                    rights or choices regarding your personal information.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      {
                        title: "Access",
                        desc:
                          "You may ask what personal information DevZore holds about you.",
                      },
                      {
                        title: "Correction",
                        desc:
                          "You may ask us to correct information that is inaccurate or incomplete.",
                      },
                      {
                        title: "Deletion",
                        desc:
                          "You may request deletion of information where there is no overriding reason or legal requirement for us to retain it.",
                      },
                      {
                        title: "Communication Preferences",
                        desc:
                          "You may ask us to stop optional promotional or non-essential communications.",
                      },
                      {
                        title: "Processing Questions",
                        desc:
                          "You may contact us if you have concerns or questions about how your information is being handled.",
                      },
                      {
                        title: "Data Requests",
                        desc:
                          "Where applicable, you may request a copy of information associated with you in a reasonably available format.",
                      },
                    ].map((item) => (
                      <article
                        key={item.title}
                        className="rounded-xl border border-slate-200 bg-[#fbfcfc] p-4"
                      >
                        <h3 className="text-[12px] font-semibold text-[#07899a]">
                          {item.title}
                        </h3>

                        <p className="mt-1.5 text-[10px] leading-5 text-slate-500">
                          {item.desc}
                        </p>
                      </article>
                    ))}
                  </div>

                  <p className="mt-4 text-[10px] leading-5 text-slate-500">
                    To make a privacy-related request, contact us at{" "}
                    <a
                      href="mailto:hellodevzore@gmail.com"
                      className="font-semibold text-[#07899a]"
                    >
                      hellodevzore@gmail.com
                    </a>
                    . We may need enough information to identify the relevant
                    records before completing a request.
                  </p>
                </section>

                {/* CHILDREN */}

                <section className={sectionClass}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      <ShieldCheck size={16} />
                    </div>

                    <h2 className={headingClass}>Children&apos;s Privacy</h2>
                  </div>

                  <p className={paragraphClass}>
                    DevZore&apos;s website and software development services
                    are intended primarily for businesses, professionals,
                    organisations and people seeking software services. They
                    are not designed specifically to collect personal
                    information from children.
                  </p>

                  <p className={paragraphClass}>
                    If you believe a child has provided personal information
                    through our website without appropriate permission, please
                    contact us so the situation can be reviewed.
                  </p>
                </section>

                {/* INTERNATIONAL */}

                <section className={sectionClass}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      <Globe2 size={16} />
                    </div>

                    <h2 className={headingClass}>
                      International Services & Data Processing
                    </h2>
                  </div>

                  <p className={paragraphClass}>
                    DevZore can work remotely with clients in different
                    locations. Website hosting, communication platforms,
                    infrastructure providers and other technology services may
                    process information in countries different from your own.
                  </p>

                  <p className={paragraphClass}>
                    Privacy protections and legal requirements can vary by
                    jurisdiction. Where appropriate, we aim to use reputable
                    service providers and reasonable safeguards for information
                    handled in connection with our services.
                  </p>
                </section>

                {/* POLICY CHANGES */}

                <section className={sectionClass}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      <FileText size={16} />
                    </div>

                    <h2 className={headingClass}>
                      Changes to This Privacy Policy
                    </h2>
                  </div>

                  <p className={paragraphClass}>
                    We may update this Privacy Policy when our website,
                    services, technologies or privacy practices change. The
                    current version will be published on this page with an
                    updated revision date.
                  </p>

                  <p className={paragraphClass}>
                    We encourage visitors and clients to review this page
                    periodically if privacy practices are important to their
                    use of our services.
                  </p>
                </section>

                {/* CONTACT */}

                <section
                  id="contact"
                  className="scroll-mt-24 pt-8 sm:pt-9"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      <Mail size={16} />
                    </div>

                    <h2 className={headingClass}>
                      Privacy Questions & Contact
                    </h2>
                  </div>

                  <p className={paragraphClass}>
                    If you have a question about this Privacy Policy, want to
                    ask how information associated with you is handled, or want
                    to make a privacy-related request, you can contact DevZore
                    using the details below.
                  </p>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                    <p className="text-[13px] font-semibold text-[#071923]">
                      DevZore
                    </p>

                    <div className="mt-4 grid sm:grid-cols-2 gap-3">
                      <div className="rounded-xl border border-slate-200 bg-[#fbfcfc] p-4">
                        <Mail size={14} className="text-[#07899a]" />

                        <p className="mt-2 text-[8px] font-bold uppercase tracking-[0.15em] text-slate-400">
                          Email
                        </p>

                        <a
                          href="mailto:hellodevzore@gmail.com"
                          className="block mt-1 text-[11px] font-semibold text-[#07899a] break-all"
                        >
                          hellodevzore@gmail.com
                        </a>
                      </div>

                      <div className="rounded-xl border border-slate-200 bg-[#fbfcfc] p-4">
                        <Globe2 size={14} className="text-[#07899a]" />

                        <p className="mt-2 text-[8px] font-bold uppercase tracking-[0.15em] text-slate-400">
                          Website
                        </p>

                        <a
                          href="https://devzore.com"
                          className="block mt-1 text-[11px] font-semibold text-[#07899a]"
                        >
                          devzore.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/contact"
                      onClick={scrollTop}
                      className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#0796A8] hover:bg-[#078899] px-5 py-3 text-[11px] font-semibold text-white transition-colors"
                    >
                      Contact DevZore

                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>

                    <Link
                      to="/terms-and-conditions"
                      onClick={scrollTop}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-[11px] font-semibold text-[#071923] hover:border-[#0796A8]/40 transition-colors"
                    >
                      Terms & Conditions
                    </Link>
                  </div>

                  {/* FOOT */}

                  <div className="mt-8 pt-5 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-3">
                    <Link
                      to="/"
                      onClick={scrollTop}
                      className="text-[10px] font-medium text-slate-500 hover:text-[#07899a] transition-colors"
                    >
                      ← Back to Home
                    </Link>

                    <p className="text-[9px] text-slate-400 text-center">
                      © 2026 DevZore · Privacy Policy · Last Updated{" "}
                      {lastUpdated}
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;