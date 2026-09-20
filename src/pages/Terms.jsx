import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  FileText,
  CheckCircle,
  Shield,
  Lock,
  AlertTriangle,
  Globe,
  CreditCard,
  ArrowRight,
  Scale,
  Mail,
  Users,
} from 'lucide-react';

const Terms = ({ isDark }) => {
  const d = isDark;

  const lastUpdated = 'September 19, 2026';

  const navItems = [
    {
      id: 'agreement',
      label: 'Agreement',
      icon: <FileText size={14} />,
    },
    {
      id: 'services',
      label: 'Our Services',
      icon: <Globe size={14} />,
    },
    {
      id: 'payment',
      label: 'Payment & Pricing',
      icon: <CreditCard size={14} />,
    },
    {
      id: 'ip',
      label: 'Intellectual Property',
      icon: <Lock size={14} />,
    },
    {
      id: 'liability',
      label: 'Liability',
      icon: <Scale size={14} />,
    },
    {
      id: 'termination',
      label: 'Termination',
      icon: <AlertTriangle size={14} />,
    },
    {
      id: 'conduct',
      label: 'Acceptable Use',
      icon: <Shield size={14} />,
    },
    {
      id: 'disputes',
      label: 'Disputes',
      icon: <Users size={14} />,
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: <Mail size={14} />,
    },
  ];

  const sectionClass = `
    scroll-mt-28
    py-10
    sm:py-12
    border-b
    ${d ? 'border-white/[0.06]' : 'border-gray-100'}
  `;

  const h2Class = `
    text-xl
    sm:text-2xl
    font-black
    ${d ? 'text-white' : 'text-gray-900'}
  `;

  const pClass = `
    text-[13px]
    sm:text-[14px]
    leading-7
    mb-4
    ${d ? 'text-gray-400' : 'text-gray-600'}
  `;

  const cardClass = `
    p-5
    rounded-xl
    border
    mb-3
    ${
      d
        ? 'bg-white/[0.02] border-white/[0.06]'
        : 'bg-gray-50 border-gray-200'
    }
  `;

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* ======================================================
          SEO
          Global title/meta/canonical can remain controlled
          by your App.jsx SEOManager.
      ====================================================== */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': 'https://devzore.com/terms-and-conditions#webpage',
            name: 'Terms and Conditions — DevZore',
            url: 'https://devzore.com/terms-and-conditions',
            description:
              'Terms and conditions governing the use of DevZore services and website.',
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
                name: 'Terms & Conditions',
                item: 'https://devzore.com/terms-and-conditions',
              },
            ],
          })}
        </script>
      </Helmet>

      <div
        className={`
          min-h-screen
          transition-colors
          duration-300
          ${d ? 'bg-[#030303]' : 'bg-white'}
        `}
      >
        {/* ======================================================
            TOP SPACING / BREADCRUMB
        ====================================================== */}
        <div
          className={`
            border-b
            pt-20
            ${d ? 'border-white/[0.06]' : 'border-gray-100'}
          `}
        >
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-[11px]">
            <Link
              to="/"
              onClick={scrollTop}
              className={`
                transition-colors
                hover:text-purple-500
                ${d ? 'text-gray-500' : 'text-gray-400'}
              `}
            >
              Home
            </Link>

            <span className={d ? 'text-gray-700' : 'text-gray-300'}>
              /
            </span>

            <span className="text-purple-500 font-semibold">
              Terms & Conditions
            </span>
          </div>
        </div>

        {/* ======================================================
            PAGE
        ====================================================== */}
        <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16">
          <div className="grid lg:grid-cols-4 gap-10 lg:gap-12 items-start">

            {/* ==================================================
                SIDEBAR
                Kept in the same structure/style.
            ================================================== */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p
                  className={`
                    text-[10px]
                    font-black
                    uppercase
                    tracking-widest
                    mb-4
                    ${d ? 'text-gray-600' : 'text-gray-400'}
                  `}
                >
                  Contents
                </p>

                <nav className="space-y-1">
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
                            : 'text-gray-500 hover:text-purple-600 hover:bg-purple-50'
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
                        : 'bg-gray-50 border-gray-200'
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
                      ${d ? 'text-gray-600' : 'text-gray-400'}
                    `}
                  >
                    Last Updated
                  </p>

                  <p
                    className={`
                      text-[12px]
                      font-semibold
                      ${d ? 'text-white' : 'text-gray-900'}
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
                        ? 'bg-amber-500/5 border-amber-500/15'
                        : 'bg-amber-50 border-amber-200'
                    }
                  `}
                >
                  <p
                    className={`
                      text-[11px]
                      leading-5
                      font-semibold
                      ${d ? 'text-amber-400' : 'text-amber-700'}
                    `}
                  >
                    These terms apply to your use of our website and,
                    where applicable, to services provided by DevZore.
                  </p>
                </div>
              </div>
            </aside>

            {/* ==================================================
                MAIN CONTENT
            ================================================== */}
            <div className="lg:col-span-3 min-w-0">

              {/* =================================================
                  HEADER
              ================================================= */}
              <div className="mb-10 sm:mb-12">
                <div
                  className={`
                    inline-flex
                    items-center
                    gap-2
                    px-4
                    py-1.5
                    rounded-full
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-widest
                    mb-4
                    border
                    ${
                      d
                        ? 'bg-purple-600/10 border-purple-500/20 text-purple-400'
                        : 'bg-purple-50 border-purple-200 text-purple-700'
                    }
                  `}
                >
                  <FileText size={11} />
                  Terms & Conditions
                </div>

                <h1
                  className={`
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-black
                    tracking-tight
                    mb-5
                    ${d ? 'text-white' : 'text-gray-900'}
                  `}
                >
                  Terms and Conditions
                </h1>

                <p
                  className={`
                    text-sm
                    sm:text-base
                    leading-7
                    max-w-3xl
                    ${d ? 'text-gray-400' : 'text-gray-600'}
                  `}
                >
                  These Terms and Conditions explain the general rules
                  that apply when you use the DevZore website or engage
                  DevZore for software development and related services.
                  Individual projects may also be governed by a separate
                  proposal, statement of work, quotation or written
                  agreement.
                </p>

                <p
                  className={`
                    mt-3
                    text-[12px]
                    font-semibold
                    ${d ? 'text-gray-500' : 'text-gray-500'}
                  `}
                >
                  Last updated: {lastUpdated}
                </p>

                <div
                  className={`
                    mt-6
                    p-4
                    rounded-xl
                    border
                    ${
                      d
                        ? 'bg-amber-500/5 border-amber-500/15'
                        : 'bg-amber-50 border-amber-200'
                    }
                  `}
                >
                  <div className="flex items-start gap-3">
                    <AlertTriangle
                      size={16}
                      className="text-amber-500 shrink-0 mt-0.5"
                    />

                    <p
                      className={`
                        text-[12px]
                        sm:text-[13px]
                        leading-6
                        ${
                          d
                            ? 'text-amber-300'
                            : 'text-amber-800'
                        }
                      `}
                    >
                      If you have questions about these terms or a
                      project-specific condition, please contact DevZore
                      before accepting a proposal or starting a project.
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  1. AGREEMENT
              ================================================= */}
              <section
                id="agreement"
                className={sectionClass}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`
                      w-9
                      h-9
                      rounded-lg
                      flex
                      items-center
                      justify-center
                      shrink-0
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
                    1. Agreement to Terms
                  </h2>
                </div>

                <p className={pClass}>
                  These Terms and Conditions govern access to
                  devzore.com and the general relationship between
                  DevZore and users or clients who engage with our
                  services.
                </p>

                <p className={pClass}>
                  By using the website or entering into a project with
                  DevZore, you agree to comply with these Terms where
                  they apply to your use of the website or the relevant
                  service.
                </p>

                <p className={pClass}>
                  A project may have additional written terms covering
                  scope, deliverables, pricing, payment milestones,
                  timelines, support and other project-specific
                  requirements. If an accepted project agreement
                  expressly differs from these general Terms, the
                  project-specific written agreement will apply to that
                  matter.
                </p>

                <div className={cardClass}>
                  <h3
                    className={`
                      text-[13px]
                      font-bold
                      mb-3
                      ${d ? 'text-white' : 'text-gray-900'}
                    `}
                  >
                    Key Definitions
                  </h3>

                  <ul
                    className={`
                      text-[12px]
                      sm:text-[13px]
                      leading-6
                      space-y-2
                      ${d ? 'text-gray-400' : 'text-gray-600'}
                    `}
                  >
                    <li>
                      <strong
                        className={
                          d ? 'text-gray-200' : 'text-gray-800'
                        }
                      >
                        “Services”
                      </strong>{' '}
                      — software development, design, technical support
                      and other services offered or agreed by DevZore.
                    </li>

                    <li>
                      <strong
                        className={
                          d ? 'text-gray-200' : 'text-gray-800'
                        }
                      >
                        “Client”
                      </strong>{' '}
                      — an individual, business or organization that
                      engages DevZore for Services.
                    </li>

                    <li>
                      <strong
                        className={
                          d ? 'text-gray-200' : 'text-gray-800'
                        }
                      >
                        “Project”
                      </strong>{' '}
                      — a specific engagement between DevZore and a
                      Client.
                    </li>

                    <li>
                      <strong
                        className={
                          d ? 'text-gray-200' : 'text-gray-800'
                        }
                      >
                        “Deliverables”
                      </strong>{' '}
                      — project outputs identified in the applicable
                      proposal or agreement.
                    </li>

                    <li>
                      <strong
                        className={
                          d ? 'text-gray-200' : 'text-gray-800'
                        }
                      >
                        “Project Agreement”
                      </strong>{' '}
                      — an accepted proposal, quotation, statement of
                      work or other written agreement relating to a
                      specific Project.
                    </li>
                  </ul>
                </div>
              </section>

              {/* =================================================
                  2. SERVICES
              ================================================= */}
              <section
                id="services"
                className={sectionClass}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`
                      w-9
                      h-9
                      rounded-lg
                      flex
                      items-center
                      justify-center
                      shrink-0
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
                    2. Our Services
                  </h2>
                </div>

                <p className={pClass}>
                  DevZore provides software and digital development
                  services that may include web development, mobile
                  application development, MERN stack development,
                  SaaS development, e-commerce development, UI/UX
                  design, MVP development, backend and API development,
                  SEO-related technical work, digital services and
                  website maintenance.
                </p>

                <p className={pClass}>
                  The exact Services provided for a Client are defined
                  by the scope agreed for that particular Project.
                  Website descriptions are general information and do
                  not by themselves create a commitment to provide a
                  specific feature, technology, result or delivery
                  date.
                </p>

                <div className={cardClass}>
                  <h3
                    className={`
                      text-[13px]
                      font-bold
                      mb-3
                      ${d ? 'text-white' : 'text-gray-900'}
                    `}
                  >
                    Project Scope & Delivery
                  </h3>

                  <ul
                    className={`
                      text-[12px]
                      sm:text-[13px]
                      leading-6
                      space-y-2
                      ${d ? 'text-gray-400' : 'text-gray-600'}
                    `}
                  >
                    <li>
                      • Project scope, deliverables and commercial terms
                      should be agreed before development begins.
                    </li>

                    <li>
                      • Estimated schedules may change if requirements,
                      dependencies or scope change.
                    </li>

                    <li>
                      • Additional features or revisions outside the
                      agreed scope may require additional time and fees.
                    </li>

                    <li>
                      • Third-party integrations depend on the
                      availability, documentation, policies and
                      technical limitations of those providers.
                    </li>

                    <li>
                      • DevZore may decline work that cannot reasonably
                      be delivered or that conflicts with applicable
                      law or our acceptable-use requirements.
                    </li>
                  </ul>
                </div>

                <div className={cardClass}>
                  <h3
                    className={`
                      text-[13px]
                      font-bold
                      mb-3
                      ${d ? 'text-white' : 'text-gray-900'}
                    `}
                  >
                    Client Responsibilities
                  </h3>

                  <ul
                    className={`
                      text-[12px]
                      sm:text-[13px]
                      leading-6
                      space-y-2
                      ${d ? 'text-gray-400' : 'text-gray-600'}
                    `}
                  >
                    <li>
                      • Provide reasonably accurate project requirements
                      and requested information.
                    </li>

                    <li>
                      • Provide necessary content, credentials, assets,
                      API access or approvals where required.
                    </li>

                    <li>
                      • Review deliverables and provide feedback within
                      a reasonable or project-agreed period.
                    </li>

                    <li>
                      • Ensure that materials supplied to DevZore can
                      legally be used for the Project.
                    </li>

                    <li>
                      • Make agreed payments according to the applicable
                      Project Agreement or invoice.
                    </li>
                  </ul>
                </div>

                <p className={pClass}>
                  Client-caused delays, late approvals, unavailable
                  third-party services or changes in requirements may
                  affect estimated delivery dates.
                </p>
              </section>

              {/* =================================================
                  3. PAYMENT
              ================================================= */}
              <section
                id="payment"
                className={sectionClass}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`
                      w-9
                      h-9
                      rounded-lg
                      flex
                      items-center
                      justify-center
                      shrink-0
                      ${
                        d
                          ? 'bg-green-500/10 text-green-400'
                          : 'bg-green-50 text-green-600'
                      }
                    `}
                  >
                    <CreditCard size={16} />
                  </div>

                  <h2 className={h2Class}>
                    3. Payment & Pricing
                  </h2>
                </div>

                <p className={pClass}>
                  Project pricing, payment schedules and billing terms
                  are determined according to the relevant Project and
                  should be confirmed in writing before paid work
                  begins.
                </p>

                {[
                  {
                    title: 'Project Pricing',
                    desc:
                      'Projects may be priced as a fixed-fee engagement, milestone-based engagement, recurring service or another pricing arrangement agreed with the Client.',
                  },
                  {
                    title: 'Deposits & Milestones',
                    desc:
                      'A Project Agreement may require an initial deposit or milestone payments. The applicable amounts and due dates will be stated in the relevant proposal, quotation or invoice.',
                  },
                  {
                    title: 'Scope Changes',
                    desc:
                      'Requests outside the agreed scope may require a revised quotation, additional fees or an adjusted delivery schedule. Additional work should be agreed before implementation.',
                  },
                  {
                    title: 'Invoices',
                    desc:
                      'Clients are responsible for paying valid invoices according to the payment terms stated on the invoice or in the applicable Project Agreement.',
                  },
                  {
                    title: 'Payment Delays',
                    desc:
                      'Where an agreed payment becomes overdue, DevZore may pause affected work or withhold final handover until outstanding amounts are resolved, subject to the applicable agreement and law.',
                  },
                  {
                    title: 'Refunds',
                    desc:
                      'Refund eligibility depends on the circumstances, work already completed, costs already incurred and the terms of the applicable Project Agreement. Any agreed refund will be handled according to those project-specific terms and applicable law.',
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
                        ${d ? 'text-white' : 'text-gray-900'}
                      `}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`
                        text-[12px]
                        sm:text-[13px]
                        leading-6
                        ${d ? 'text-gray-400' : 'text-gray-600'}
                      `}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}

                <p className={pClass}>
                  Currency, payment method, taxes, transaction fees and
                  other payment-related details may vary by Project and
                  will be communicated where relevant.
                </p>
              </section>

              {/* =================================================
                  4. INTELLECTUAL PROPERTY
              ================================================= */}
              <section
                id="ip"
                className={sectionClass}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`
                      w-9
                      h-9
                      rounded-lg
                      flex
                      items-center
                      justify-center
                      shrink-0
                      ${
                        d
                          ? 'bg-indigo-500/10 text-indigo-400'
                          : 'bg-indigo-50 text-indigo-600'
                      }
                    `}
                  >
                    <Lock size={16} />
                  </div>

                  <h2 className={h2Class}>
                    4. Intellectual Property
                  </h2>
                </div>

                <div
                  className={`
                    p-5
                    rounded-xl
                    border
                    mb-5
                    ${
                      d
                        ? 'bg-green-500/5 border-green-500/15'
                        : 'bg-green-50 border-green-200'
                    }
                  `}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      className="text-green-500 shrink-0 mt-0.5"
                    />

                    <div>
                      <h3
                        className={`
                          text-[13px]
                          font-bold
                          mb-1
                          ${
                            d
                              ? 'text-green-300'
                              : 'text-green-800'
                          }
                        `}
                      >
                        Custom Project Deliverables
                      </h3>

                      <p
                        className={`
                          text-[12px]
                          sm:text-[13px]
                          leading-6
                          ${
                            d
                              ? 'text-green-400'
                              : 'text-green-700'
                          }
                        `}
                      >
                        Unless a Project Agreement states otherwise,
                        ownership or licensing of custom deliverables
                        will be transferred as specified in the
                        applicable Project Agreement after required
                        payments have been completed.
                      </p>
                    </div>
                  </div>
                </div>

                {[
                  {
                    title: 'Custom Work',
                    desc:
                      'The applicable Project Agreement should identify which custom source code, designs, documentation or other deliverables are being created for the Client and the ownership terms that apply.',
                  },
                  {
                    title: 'Third-Party Components',
                    desc:
                      'Projects may use open-source software, libraries, frameworks, APIs, fonts, assets or other third-party components. Those components remain subject to their respective licences and terms.',
                  },
                  {
                    title: 'Pre-Existing DevZore Materials',
                    desc:
                      'Tools, reusable components, know-how, workflows or other materials developed independently of a Client Project remain subject to DevZore’s existing rights unless expressly transferred in writing.',
                  },
                  {
                    title: 'Client Materials',
                    desc:
                      'Content, trademarks, branding, data, media and other materials supplied by the Client remain subject to the Client’s or relevant third party’s rights. The Client is responsible for having appropriate permission to provide and use those materials.',
                  },
                  {
                    title: 'Portfolio Use',
                    desc:
                      'Where appropriate and not restricted by confidentiality or a Project Agreement, DevZore may request permission to reference completed work in its portfolio or marketing materials.',
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
                        ${d ? 'text-white' : 'text-gray-900'}
                      `}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`
                        text-[12px]
                        sm:text-[13px]
                        leading-6
                        ${d ? 'text-gray-400' : 'text-gray-600'}
                      `}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </section>

              {/* =================================================
                  5. LIABILITY
              ================================================= */}
              <section
                id="liability"
                className={sectionClass}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`
                      w-9
                      h-9
                      rounded-lg
                      flex
                      items-center
                      justify-center
                      shrink-0
                      ${
                        d
                          ? 'bg-amber-500/10 text-amber-400'
                          : 'bg-amber-50 text-amber-600'
                      }
                    `}
                  >
                    <Scale size={16} />
                  </div>

                  <h2 className={h2Class}>
                    5. Warranties & Limitation of Liability
                  </h2>
                </div>

                <p className={pClass}>
                  DevZore aims to provide Services with reasonable care
                  and according to the scope agreed for each Project.
                  Software and online services, however, can depend on
                  browsers, devices, infrastructure and third-party
                  systems outside DevZore&apos;s direct control.
                </p>

                {[
                  {
                    title: 'Project Deliverables',
                    desc:
                      'Deliverables are provided according to the agreed Project scope. Any specific warranty, support or correction period should be stated in the applicable Project Agreement.',
                  },
                  {
                    title: 'Business Results',
                    desc:
                      'Unless expressly agreed otherwise in writing, DevZore does not guarantee revenue, sales, traffic, search rankings, user acquisition, conversion rates, funding, market adoption or other commercial outcomes.',
                  },
                  {
                    title: 'Third-Party Services',
                    desc:
                      'Hosting providers, payment processors, APIs, app stores, cloud services and other third-party platforms operate under their own systems and terms. Their outages, policy changes, pricing changes or service limitations may affect a Project.',
                  },
                  {
                    title: 'Client Changes',
                    desc:
                      'DevZore may not be responsible for issues introduced after delivery by unauthorized modifications, third-party changes, compromised credentials, unsupported environments or use outside the agreed scope.',
                  },
                  {
                    title: 'Legal Limitations',
                    desc:
                      'Any exclusion or limitation of liability in these Terms applies only to the extent permitted by applicable law and may be further defined by the relevant Project Agreement.',
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
                        ${d ? 'text-white' : 'text-gray-900'}
                      `}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`
                        text-[12px]
                        sm:text-[13px]
                        leading-6
                        ${d ? 'text-gray-400' : 'text-gray-600'}
                      `}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </section>

              {/* =================================================
                  6. TERMINATION
              ================================================= */}
              <section
                id="termination"
                className={sectionClass}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`
                      w-9
                      h-9
                      rounded-lg
                      flex
                      items-center
                      justify-center
                      shrink-0
                      ${
                        d
                          ? 'bg-red-500/10 text-red-400'
                          : 'bg-red-50 text-red-600'
                      }
                    `}
                  >
                    <AlertTriangle size={16} />
                  </div>

                  <h2 className={h2Class}>
                    6. Suspension & Termination
                  </h2>
                </div>

                <p className={pClass}>
                  A Project may be suspended or terminated according to
                  the applicable Project Agreement or where continuing
                  the engagement is no longer reasonably possible.
                </p>

                {[
                  {
                    title: 'Termination by Client',
                    desc:
                      'A Client may request cancellation of a Project. Payment obligations, ownership and handover of work completed before cancellation will be handled according to the applicable Project Agreement and work already performed.',
                  },
                  {
                    title: 'Suspension for Non-Payment',
                    desc:
                      'DevZore may pause work where an agreed payment remains overdue, after reasonable communication with the Client.',
                  },
                  {
                    title: 'Termination by DevZore',
                    desc:
                      'DevZore may end an engagement where there is serious non-payment, unlawful activity, abusive conduct, material breach of agreed terms or another circumstance that makes continued work unreasonable.',
                  },
                  {
                    title: 'Effect of Termination',
                    desc:
                      'Any outstanding fees, delivery of completed work, access transfer and intellectual-property rights will be handled according to the applicable Project Agreement and relevant legal obligations.',
                  },
                  {
                    title: 'Recurring Services',
                    desc:
                      'Cancellation terms for maintenance, support or other recurring services will be stated in the relevant service agreement or proposal.',
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
                        ${d ? 'text-white' : 'text-gray-900'}
                      `}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`
                        text-[12px]
                        sm:text-[13px]
                        leading-6
                        ${d ? 'text-gray-400' : 'text-gray-600'}
                      `}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </section>

              {/* =================================================
                  7. ACCEPTABLE USE
              ================================================= */}
              <section
                id="conduct"
                className={sectionClass}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`
                      w-9
                      h-9
                      rounded-lg
                      flex
                      items-center
                      justify-center
                      shrink-0
                      ${
                        d
                          ? 'bg-orange-500/10 text-orange-400'
                          : 'bg-orange-50 text-orange-600'
                      }
                    `}
                  >
                    <Shield size={16} />
                  </div>

                  <h2 className={h2Class}>
                    7. Acceptable Use
                  </h2>
                </div>

                <p className={pClass}>
                  DevZore may decline or discontinue work where a
                  Project would require us to knowingly facilitate
                  unlawful, fraudulent, malicious or abusive activity.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'Fraudulent or intentionally deceptive services',
                    'Malware or malicious software',
                    'Unauthorized access to systems or accounts',
                    'Unlawful collection or misuse of personal data',
                    'Content that knowingly infringes third-party rights',
                    'Platforms primarily intended to facilitate abuse or harassment',
                    'Illegal goods or services',
                    'Other activity prohibited by applicable law',
                  ].map((item) => (
                    <div
                      key={item}
                      className={`
                        flex
                        items-start
                        gap-2.5
                        p-3
                        rounded-lg
                        border
                        ${
                          d
                            ? 'bg-white/[0.02] border-white/[0.06]'
                            : 'bg-gray-50 border-gray-200'
                        }
                      `}
                    >
                      <AlertTriangle
                        size={12}
                        className="text-red-500 shrink-0 mt-0.5"
                      />

                      <p
                        className={`
                          text-[12px]
                          leading-5
                          ${
                            d
                              ? 'text-gray-400'
                              : 'text-gray-600'
                          }
                        `}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <p className={`${pClass} mt-5`}>
                  We may also decline a Project where technical,
                  contractual, reputational or operational risks make
                  the engagement unsuitable.
                </p>
              </section>

              {/* =================================================
                  8. DISPUTES
              ================================================= */}
              <section
                id="disputes"
                className={sectionClass}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`
                      w-9
                      h-9
                      rounded-lg
                      flex
                      items-center
                      justify-center
                      shrink-0
                      ${
                        d
                          ? 'bg-cyan-500/10 text-cyan-400'
                          : 'bg-cyan-50 text-cyan-600'
                      }
                    `}
                  >
                    <Users size={16} />
                  </div>

                  <h2 className={h2Class}>
                    8. Disputes & Governing Terms
                  </h2>
                </div>

                {[
                  {
                    title: 'Good-Faith Resolution',
                    desc:
                      'If a disagreement arises, both parties are encouraged to first communicate directly and make a reasonable effort to resolve the matter before pursuing formal remedies.',
                  },
                  {
                    title: 'Project Agreements',
                    desc:
                      'A specific Project Agreement may contain additional provisions relating to disputes, governing law, jurisdiction, mediation or arbitration.',
                  },
                  {
                    title: 'Applicable Law',
                    desc:
                      'These Terms and any Project Agreement will be interpreted according to the governing-law provisions that validly apply to the relevant relationship and transaction.',
                  },
                  {
                    title: 'Changes to These Terms',
                    desc:
                      'DevZore may update these Terms when business practices, services or legal requirements change. The updated version will be published on this page with a revised “Last Updated” date.',
                  },
                  {
                    title: 'Existing Projects',
                    desc:
                      'Material changes to these website Terms do not automatically replace specific written commercial terms already agreed for an existing Project unless the parties agree otherwise or applicable law requires it.',
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
                        ${d ? 'text-white' : 'text-gray-900'}
                      `}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`
                        text-[12px]
                        sm:text-[13px]
                        leading-6
                        ${d ? 'text-gray-400' : 'text-gray-600'}
                      `}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </section>

              {/* =================================================
                  9. CONTACT
              ================================================= */}
              <section
                id="contact"
                className="scroll-mt-28 pt-10 sm:pt-12"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`
                      w-9
                      h-9
                      rounded-lg
                      flex
                      items-center
                      justify-center
                      shrink-0
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
                    9. Contact Us
                  </h2>
                </div>

                <p className={pClass}>
                  If you have a question about these Terms or need
                  clarification about the conditions that apply to a
                  particular Project, contact DevZore before accepting
                  the relevant proposal or agreement.
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
                        : 'bg-gray-50 border-gray-200'
                    }
                  `}
                >
                  <h3
                    className={`
                      text-[14px]
                      font-bold
                      mb-4
                      ${d ? 'text-white' : 'text-gray-900'}
                    `}
                  >
                    DevZore Contact
                  </h3>

                  <div className="space-y-3">
                    <div>
                      <p
                        className={`
                          text-[10px]
                          uppercase
                          tracking-widest
                          font-bold
                          mb-1
                          ${
                            d
                              ? 'text-gray-600'
                              : 'text-gray-400'
                          }
                        `}
                      >
                        Email
                      </p>

                      <a
                        href="mailto:hellodevzore@gmail.com"
                        className="
                          text-[13px]
                          font-semibold
                          text-purple-500
                          hover:underline
                        "
                      >
                        hellodevzore@gmail.com
                      </a>
                    </div>

                    <div>
                      <p
                        className={`
                          text-[10px]
                          uppercase
                          tracking-widest
                          font-bold
                          mb-1
                          ${
                            d
                              ? 'text-gray-600'
                              : 'text-gray-400'
                          }
                        `}
                      >
                        WhatsApp
                      </p>

                      <a
                        href="https://wa.me/923348004300"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          text-[13px]
                          font-semibold
                          text-purple-500
                          hover:underline
                        "
                      >
                        +92 334 8004300
                      </a>
                    </div>
                  </div>
                </div>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-4 mb-10">
                  <Link
                    to="/contact"
                    onClick={scrollTop}
                    className="
                      flex
                      items-center
                      gap-2
                      px-6
                      py-3
                      bg-purple-600
                      hover:bg-purple-700
                      text-white
                      font-bold
                      rounded-xl
                      text-sm
                      transition-all
                      hover:shadow-[0_0_16px_rgba(124,58,237,0.3)]
                    "
                  >
                    Contact DevZore
                    <ArrowRight size={13} />
                  </Link>

                  <Link
                    to="/privacy-policy"
                    onClick={scrollTop}
                    className={`
                      flex
                      items-center
                      gap-2
                      px-6
                      py-3
                      font-bold
                      rounded-xl
                      text-sm
                      border
                      transition-all
                      ${
                        d
                          ? 'border-white/10 text-gray-300 hover:bg-white/[0.04]'
                          : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                      }
                    `}
                  >
                    Privacy Policy
                  </Link>
                </div>

                {/* ENTIRE AGREEMENT */}
                <div
                  className={`
                    p-5
                    rounded-xl
                    border
                    ${
                      d
                        ? 'bg-white/[0.02] border-white/[0.06]'
                        : 'bg-gray-50 border-gray-200'
                    }
                  `}
                >
                  <h3
                    className={`
                      text-[12px]
                      font-bold
                      mb-2
                      ${
                        d
                          ? 'text-gray-300'
                          : 'text-gray-700'
                      }
                    `}
                  >
                    Entire Agreement
                  </h3>

                  <p
                    className={`
                      text-[12px]
                      leading-6
                      ${d ? 'text-gray-500' : 'text-gray-500'}
                    `}
                  >
                    These Terms, together with any applicable written
                    Project Agreement, describe the terms relevant to
                    the relationship between DevZore and the Client.
                    Project-specific commitments should be recorded in
                    writing so that both parties have a clear record of
                    the agreed scope and commercial terms.
                  </p>
                </div>

                {/* FOOTER LINE */}
                <div
                  className={`
                    mt-10
                    pt-6
                    border-t
                    flex
                    flex-col
                    md:flex-row
                    md:items-center
                    justify-between
                    gap-4
                    ${
                      d
                        ? 'border-white/[0.06]'
                        : 'border-gray-100'
                    }
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
                      ${
                        d
                          ? 'text-gray-500'
                          : 'text-gray-400'
                      }
                    `}
                  >
                    ← Back to Home
                  </Link>

                  <p
                    className={`
                      text-[11px]
                      ${
                        d
                          ? 'text-gray-700'
                          : 'text-gray-400'
                      }
                    `}
                  >
                    © 2026 DevZore · Last Updated {lastUpdated}
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

export default Terms;