import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  FileText,
  Globe2,
  LockKeyhole,
  Mail,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";

const Terms = () => {
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
      id: "agreement",
      label: "Agreement",
      icon: <FileText size={14} />,
    },
    {
      id: "services",
      label: "Our Services",
      icon: <Globe2 size={14} />,
    },
    {
      id: "payment",
      label: "Payment & Pricing",
      icon: <CreditCard size={14} />,
    },
    {
      id: "ip",
      label: "Intellectual Property",
      icon: <LockKeyhole size={14} />,
    },
    {
      id: "liability",
      label: "Liability",
      icon: <Scale size={14} />,
    },
    {
      id: "termination",
      label: "Termination",
      icon: <AlertTriangle size={14} />,
    },
    {
      id: "conduct",
      label: "Acceptable Use",
      icon: <ShieldCheck size={14} />,
    },
    {
      id: "disputes",
      label: "Disputes",
      icon: <Users size={14} />,
    },
    {
      id: "contact",
      label: "Contact",
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
    "@id": "https://devzore.com/terms-and-conditions#webpage",
    name: "Terms and Conditions",
    url: "https://devzore.com/terms-and-conditions",
    description:
      "Terms and conditions governing the use of the DevZore website and software development services.",
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
        name: "Terms & Conditions",
        item: "https://devzore.com/terms-and-conditions",
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
          aria-labelledby="terms-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-55"
              style={darkGrid}
            />

            <div className="absolute -top-32 left-[8%] w-[560px] h-[560px] rounded-full bg-[#0796A8]/12 blur-[150px]" />

            <div className="absolute top-10 right-[4%] w-[430px] h-[430px] rounded-full bg-[#20bdcb]/7 blur-[135px]" />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#04111a]/85" />
          </div>

          <div className="relative max-w-[1100px] mx-auto px-5 sm:px-6 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-14 text-center">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.17em] uppercase text-[#c2ccd2]">
              <FileText size={14} className="text-[#25c0ce]" />
              Terms & Conditions
            </div>

            <h1
              id="terms-heading"
              className="mt-5 text-[40px] sm:text-[48px] lg:text-[58px] leading-[1.04] font-semibold tracking-[-0.045em]"
            >
              Terms for using DevZore and{" "}
              <span className="text-[#22bdca]">
                working with us.
              </span>
            </h1>

            <p className="max-w-[780px] mx-auto mt-5 text-[15px] sm:text-[16px] leading-7 text-slate-300">
              These Terms and Conditions explain the general rules that apply
              when you use the DevZore website or engage DevZore for software
              development and related services.
            </p>

            <p className="max-w-[720px] mx-auto mt-3 text-[12px] sm:text-[13px] leading-6 text-slate-500">
              Individual projects may also be governed by an accepted
              proposal, quotation, statement of work or another written
              project agreement.
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
                    Terms Contents
                  </p>

                  <nav
                    aria-label="Terms and conditions sections"
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
                    <Scale size={15} className="text-[#07899a]" />

                    <p className="mt-2 text-[10px] leading-5 text-slate-600">
                      These general terms may be supplemented by written terms
                      agreed for a specific project.
                    </p>
                  </div>
                </div>
              </aside>

              {/* MAIN */}

              <div>
                {/* INTRO */}

                <div className="rounded-2xl border border-[#0796A8]/15 bg-[#edf6f7] p-5 mb-2">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 shrink-0 rounded-xl bg-white text-[#07899a] flex items-center justify-center">
                      <AlertTriangle size={16} />
                    </div>

                    <div>
                      <h2 className="text-[13px] font-semibold text-[#071923]">
                        Before Starting a Project
                      </h2>

                      <p className="mt-2 text-[11px] sm:text-[12px] leading-6 text-slate-600">
                        If you have questions about these Terms or a
                        project-specific condition, please contact DevZore
                        before accepting a proposal or starting development.
                      </p>
                    </div>
                  </div>
                </div>

                {/* AGREEMENT */}

                <section id="agreement" className={sectionClass}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      <FileText size={16} />
                    </div>

                    <h2 className={headingClass}>
                      1. Agreement to Terms
                    </h2>
                  </div>

                  <p className={paragraphClass}>
                    These Terms and Conditions govern access to devzore.com and
                    the general relationship between DevZore and users or
                    clients who engage with our services.
                  </p>

                  <p className={paragraphClass}>
                    By using the website or entering into a project with
                    DevZore, you agree to comply with these Terms where they
                    apply to your use of the website or the relevant service.
                  </p>

                  <p className={paragraphClass}>
                    A project may have additional written terms covering scope,
                    deliverables, pricing, payment milestones, timelines,
                    support and other project-specific requirements. If an
                    accepted Project Agreement expressly differs from these
                    general Terms, the project-specific written agreement will
                    apply to that matter.
                  </p>

                  <div className={cardClass}>
                    <h3 className="text-[13px] font-semibold text-[#071923] mb-3">
                      Key Definitions
                    </h3>

                    <div className="space-y-3">
                      {[
                        {
                          title: "Services",
                          text:
                            "Software development, design, technical support and other services offered or agreed by DevZore.",
                        },
                        {
                          title: "Client",
                          text:
                            "An individual, business or organization that engages DevZore for Services.",
                        },
                        {
                          title: "Project",
                          text:
                            "A specific engagement between DevZore and a Client.",
                        },
                        {
                          title: "Deliverables",
                          text:
                            "Project outputs identified in the applicable proposal or agreement.",
                        },
                        {
                          title: "Project Agreement",
                          text:
                            "An accepted proposal, quotation, statement of work or other written agreement relating to a specific Project.",
                        },
                      ].map((item) => (
                        <div
                          key={item.title}
                          className="flex items-start gap-2.5"
                        >
                          <CheckCircle2
                            size={12}
                            className="text-[#07899a] shrink-0 mt-1"
                          />

                          <p className="text-[11px] leading-5 text-slate-600">
                            <strong className="font-semibold text-[#071923]">
                              {item.title}
                            </strong>{" "}
                            — {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* SERVICES */}

                <section id="services" className={sectionClass}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      <Globe2 size={16} />
                    </div>

                    <h2 className={headingClass}>
                      2. Our Services
                    </h2>
                  </div>

                  <p className={paragraphClass}>
                    DevZore provides software and digital development services
                    that may include web development, mobile application
                    development, MERN stack development, SaaS development,
                    e-commerce development, UI/UX design, MVP development,
                    backend and API development, SEO-related technical work,
                    digital services and website maintenance.
                  </p>

                  <p className={paragraphClass}>
                    The exact Services provided for a Client are defined by the
                    scope agreed for that particular Project. Website
                    descriptions are general information and do not by
                    themselves create a commitment to provide a specific
                    feature, technology, result or delivery date.
                  </p>

                  <div className={cardClass}>
                    <h3 className="text-[13px] font-semibold text-[#071923] mb-3">
                      Project Scope & Delivery
                    </h3>

                    <div className="space-y-2.5">
                      {[
                        "Project scope, deliverables and commercial terms should be agreed before development begins.",
                        "Estimated schedules may change if requirements, dependencies or scope change.",
                        "Additional features or revisions outside the agreed scope may require additional time and fees.",
                        "Third-party integrations depend on the availability, documentation, policies and technical limitations of those providers.",
                        "DevZore may decline work that cannot reasonably be delivered or that conflicts with applicable law or our acceptable-use requirements.",
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
                    <h3 className="text-[13px] font-semibold text-[#071923] mb-3">
                      Client Responsibilities
                    </h3>

                    <div className="space-y-2.5">
                      {[
                        "Provide reasonably accurate project requirements and requested information.",
                        "Provide necessary content, credentials, assets, API access or approvals where required.",
                        "Review deliverables and provide feedback within a reasonable or project-agreed period.",
                        "Ensure that materials supplied to DevZore can legally be used for the Project.",
                        "Make agreed payments according to the applicable Project Agreement or invoice.",
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

                  <p className={paragraphClass}>
                    Client-caused delays, late approvals, unavailable
                    third-party services or changes in requirements may affect
                    estimated delivery dates.
                  </p>
                </section>

                {/* PAYMENT */}

                <section id="payment" className={sectionClass}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      <CreditCard size={16} />
                    </div>

                    <h2 className={headingClass}>
                      3. Payment & Pricing
                    </h2>
                  </div>

                  <p className={paragraphClass}>
                    Project pricing, payment schedules and billing terms are
                    determined according to the relevant Project and should be
                    confirmed in writing before paid work begins.
                  </p>

                  {[
                    {
                      title: "Project Pricing",
                      desc:
                        "Projects may be priced as a fixed-fee engagement, milestone-based engagement, recurring service or another pricing arrangement agreed with the Client.",
                    },
                    {
                      title: "Deposits & Milestones",
                      desc:
                        "A Project Agreement may require an initial deposit or milestone payments. Applicable amounts and due dates will be stated in the relevant proposal, quotation or invoice.",
                    },
                    {
                      title: "Scope Changes",
                      desc:
                        "Requests outside the agreed scope may require a revised quotation, additional fees or an adjusted delivery schedule. Additional work should be agreed before implementation.",
                    },
                    {
                      title: "Invoices",
                      desc:
                        "Clients are responsible for paying valid invoices according to the payment terms stated on the invoice or in the applicable Project Agreement.",
                    },
                    {
                      title: "Payment Delays",
                      desc:
                        "Where an agreed payment becomes overdue, DevZore may pause affected work or withhold final handover until outstanding amounts are resolved, subject to the applicable agreement and law.",
                    },
                    {
                      title: "Refunds",
                      desc:
                        "Refund eligibility depends on the circumstances, work already completed, costs already incurred and the terms of the applicable Project Agreement. Any agreed refund will be handled according to those project-specific terms and applicable law.",
                    },
                  ].map((item) => (
                    <div key={item.title} className={cardClass}>
                      <h3 className="text-[12px] font-semibold text-[#071923]">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-[10px] sm:text-[11px] leading-5 text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  ))}

                  <p className={paragraphClass}>
                    Currency, payment method, taxes, transaction fees and other
                    payment-related details may vary by Project and will be
                    communicated where relevant.
                  </p>
                </section>

                {/* INTELLECTUAL PROPERTY */}

                <section id="ip" className={sectionClass}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      <LockKeyhole size={16} />
                    </div>

                    <h2 className={headingClass}>
                      4. Intellectual Property
                    </h2>
                  </div>

                  <div className="rounded-xl border border-[#0796A8]/15 bg-[#edf6f7] p-4 sm:p-5 mb-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        size={15}
                        className="text-[#07899a] shrink-0 mt-0.5"
                      />

                      <div>
                        <h3 className="text-[12px] font-semibold text-[#071923]">
                          Custom Project Deliverables
                        </h3>

                        <p className="mt-1.5 text-[10px] sm:text-[11px] leading-5 text-slate-600">
                          Unless a Project Agreement states otherwise,
                          ownership or licensing of custom deliverables will be
                          transferred as specified in the applicable Project
                          Agreement after required payments have been
                          completed.
                        </p>
                      </div>
                    </div>
                  </div>

                  {[
                    {
                      title: "Custom Work",
                      desc:
                        "The applicable Project Agreement should identify which custom source code, designs, documentation or other deliverables are being created for the Client and the ownership terms that apply.",
                    },
                    {
                      title: "Third-Party Components",
                      desc:
                        "Projects may use open-source software, libraries, frameworks, APIs, fonts, assets or other third-party components. Those components remain subject to their respective licences and terms.",
                    },
                    {
                      title: "Pre-Existing DevZore Materials",
                      desc:
                        "Tools, reusable components, know-how, workflows or other materials developed independently of a Client Project remain subject to DevZore's existing rights unless expressly transferred in writing.",
                    },
                    {
                      title: "Client Materials",
                      desc:
                        "Content, trademarks, branding, data, media and other materials supplied by the Client remain subject to the Client's or relevant third party's rights. The Client is responsible for having appropriate permission to provide and use those materials.",
                    },
                    {
                      title: "Portfolio Use",
                      desc:
                        "Where appropriate and not restricted by confidentiality or a Project Agreement, DevZore may request permission to reference completed work in its portfolio or marketing materials.",
                    },
                  ].map((item) => (
                    <div key={item.title} className={cardClass}>
                      <h3 className="text-[12px] font-semibold text-[#071923]">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-[10px] sm:text-[11px] leading-5 text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </section>

                {/* LIABILITY */}

                <section id="liability" className={sectionClass}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      <Scale size={16} />
                    </div>

                    <h2 className={headingClass}>
                      5. Warranties & Limitation of Liability
                    </h2>
                  </div>

                  <p className={paragraphClass}>
                    DevZore aims to provide Services with reasonable care and
                    according to the scope agreed for each Project. Software
                    and online services, however, can depend on browsers,
                    devices, infrastructure and third-party systems outside
                    DevZore&apos;s direct control.
                  </p>

                  {[
                    {
                      title: "Project Deliverables",
                      desc:
                        "Deliverables are provided according to the agreed Project scope. Any specific warranty, support or correction period should be stated in the applicable Project Agreement.",
                    },
                    {
                      title: "Business Results",
                      desc:
                        "Unless expressly agreed otherwise in writing, DevZore does not guarantee revenue, sales, traffic, search rankings, user acquisition, conversion rates, funding, market adoption or other commercial outcomes.",
                    },
                    {
                      title: "Third-Party Services",
                      desc:
                        "Hosting providers, payment processors, APIs, app stores, cloud services and other third-party platforms operate under their own systems and terms. Their outages, policy changes, pricing changes or service limitations may affect a Project.",
                    },
                    {
                      title: "Client Changes",
                      desc:
                        "DevZore may not be responsible for issues introduced after delivery by unauthorized modifications, third-party changes, compromised credentials, unsupported environments or use outside the agreed scope.",
                    },
                    {
                      title: "Legal Limitations",
                      desc:
                        "Any exclusion or limitation of liability in these Terms applies only to the extent permitted by applicable law and may be further defined by the relevant Project Agreement.",
                    },
                  ].map((item) => (
                    <div key={item.title} className={cardClass}>
                      <h3 className="text-[12px] font-semibold text-[#071923]">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-[10px] sm:text-[11px] leading-5 text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </section>

                {/* TERMINATION */}

                <section id="termination" className={sectionClass}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      <AlertTriangle size={16} />
                    </div>

                    <h2 className={headingClass}>
                      6. Suspension & Termination
                    </h2>
                  </div>

                  <p className={paragraphClass}>
                    A Project may be suspended or terminated according to the
                    applicable Project Agreement or where continuing the
                    engagement is no longer reasonably possible.
                  </p>

                  {[
                    {
                      title: "Termination by Client",
                      desc:
                        "A Client may request cancellation of a Project. Payment obligations, ownership and handover of work completed before cancellation will be handled according to the applicable Project Agreement and work already performed.",
                    },
                    {
                      title: "Suspension for Non-Payment",
                      desc:
                        "DevZore may pause work where an agreed payment remains overdue, after reasonable communication with the Client.",
                    },
                    {
                      title: "Termination by DevZore",
                      desc:
                        "DevZore may end an engagement where there is serious non-payment, unlawful activity, abusive conduct, material breach of agreed terms or another circumstance that makes continued work unreasonable.",
                    },
                    {
                      title: "Effect of Termination",
                      desc:
                        "Any outstanding fees, delivery of completed work, access transfer and intellectual-property rights will be handled according to the applicable Project Agreement and relevant legal obligations.",
                    },
                    {
                      title: "Recurring Services",
                      desc:
                        "Cancellation terms for maintenance, support or other recurring services will be stated in the relevant service agreement or proposal.",
                    },
                  ].map((item) => (
                    <div key={item.title} className={cardClass}>
                      <h3 className="text-[12px] font-semibold text-[#071923]">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-[10px] sm:text-[11px] leading-5 text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </section>

                {/* ACCEPTABLE USE */}

                <section id="conduct" className={sectionClass}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      <ShieldCheck size={16} />
                    </div>

                    <h2 className={headingClass}>
                      7. Acceptable Use
                    </h2>
                  </div>

                  <p className={paragraphClass}>
                    DevZore may decline or discontinue work where a Project
                    would require us to knowingly facilitate unlawful,
                    fraudulent, malicious or abusive activity.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Fraudulent or intentionally deceptive services",
                      "Malware or malicious software",
                      "Unauthorized access to systems or accounts",
                      "Unlawful collection or misuse of personal data",
                      "Content that knowingly infringes third-party rights",
                      "Platforms primarily intended to facilitate abuse or harassment",
                      "Illegal goods or services",
                      "Other activity prohibited by applicable law",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-[#fbfcfc] p-3.5"
                      >
                        <AlertTriangle
                          size={12}
                          className="text-[#07899a] shrink-0 mt-0.5"
                        />

                        <p className="text-[10px] sm:text-[11px] leading-5 text-slate-600">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className={`${paragraphClass} mt-4`}>
                    We may also decline a Project where technical,
                    contractual, reputational or operational risks make the
                    engagement unsuitable.
                  </p>
                </section>

                {/* DISPUTES */}

                <section id="disputes" className={sectionClass}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      <Users size={16} />
                    </div>

                    <h2 className={headingClass}>
                      8. Disputes & Governing Terms
                    </h2>
                  </div>

                  {[
                    {
                      title: "Good-Faith Resolution",
                      desc:
                        "If a disagreement arises, both parties are encouraged to first communicate directly and make a reasonable effort to resolve the matter before pursuing formal remedies.",
                    },
                    {
                      title: "Project Agreements",
                      desc:
                        "A specific Project Agreement may contain additional provisions relating to disputes, governing law, jurisdiction, mediation or arbitration.",
                    },
                    {
                      title: "Applicable Law",
                      desc:
                        "These Terms and any Project Agreement will be interpreted according to the governing-law provisions that validly apply to the relevant relationship and transaction.",
                    },
                    {
                      title: "Changes to These Terms",
                      desc:
                        "DevZore may update these Terms when business practices, services or legal requirements change. The updated version will be published on this page with a revised Last Updated date.",
                    },
                    {
                      title: "Existing Projects",
                      desc:
                        "Material changes to these website Terms do not automatically replace specific written commercial terms already agreed for an existing Project unless the parties agree otherwise or applicable law requires it.",
                    },
                  ].map((item) => (
                    <div key={item.title} className={cardClass}>
                      <h3 className="text-[12px] font-semibold text-[#071923]">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-[10px] sm:text-[11px] leading-5 text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  ))}
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
                      9. Contact Us
                    </h2>
                  </div>

                  <p className={paragraphClass}>
                    If you have a question about these Terms or need
                    clarification about the conditions that apply to a
                    particular Project, contact DevZore before accepting the
                    relevant proposal or agreement.
                  </p>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                    <p className="text-[13px] font-semibold text-[#071923]">
                      DevZore Contact
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
                      to="/privacy-policy"
                      onClick={scrollTop}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-[11px] font-semibold text-[#071923] hover:border-[#0796A8]/40 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </div>

                  {/* ENTIRE AGREEMENT */}

                  <div className="mt-6 rounded-xl border border-slate-200 bg-[#fbfcfc] p-4 sm:p-5">
                    <h3 className="text-[12px] font-semibold text-[#071923]">
                      Entire Agreement
                    </h3>

                    <p className="mt-1.5 text-[10px] sm:text-[11px] leading-5 text-slate-500">
                      These Terms, together with any applicable written Project
                      Agreement, describe the terms relevant to the
                      relationship between DevZore and the Client.
                      Project-specific commitments should be recorded in
                      writing so that both parties have a clear record of the
                      agreed scope and commercial terms.
                    </p>
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
                      © 2026 DevZore · Terms & Conditions · Last Updated{" "}
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

export default Terms;