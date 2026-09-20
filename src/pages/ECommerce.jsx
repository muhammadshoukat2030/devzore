import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  Code2,
  Globe,
  CreditCard,
  Package,
  BarChart3,
  Plus,
  Minus,
  Truck,
  Users,
  Search,
  Bell,
  Lock,
  Server,
  Palette,
} from 'lucide-react';

const ECommerce = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  const features = [
    {
      icon: <ShoppingCart size={20} />,
      color: 'purple',
      title: 'Custom Storefront Development',
      desc: 'Responsive storefronts designed around your products, customers and buying journey, with clear navigation, product discovery and checkout experiences.',
    },
    {
      icon: <CreditCard size={20} />,
      color: 'green',
      title: 'Payment Gateway Integration',
      desc: 'Integrate suitable local and international payment gateways, including card payments, digital wallets and other payment methods based on project requirements.',
    },
    {
      icon: <Package size={20} />,
      color: 'blue',
      title: 'Inventory & Order Management',
      desc: 'Manage products, stock levels, orders, statuses and fulfilment workflows from a structured administration system built around your business operations.',
    },
    {
      icon: <Users size={20} />,
      color: 'orange',
      title: 'Multi-Vendor Marketplaces',
      desc: 'Marketplace solutions with vendor onboarding, product management, commissions, vendor dashboards and administrative controls.',
    },
    {
      icon: <Search size={20} />,
      color: 'cyan',
      title: 'Product Search & Filtering',
      desc: 'Help customers discover products through search, categories, filters, sorting and structured product information for larger catalogues.',
    },
    {
      icon: <BarChart3 size={20} />,
      color: 'indigo',
      title: 'Sales & Analytics Dashboards',
      desc: 'Dashboards for monitoring orders, revenue, products and customer activity so your team can understand store performance more clearly.',
    },
    {
      icon: <Truck size={20} />,
      color: 'amber',
      title: 'Shipping & Logistics Integration',
      desc: 'Connect suitable courier and logistics services for shipping workflows, tracking information and fulfilment based on available provider APIs.',
    },
    {
      icon: <Bell size={20} />,
      color: 'pink',
      title: 'Promotions & Customer Engagement',
      desc: 'Support discount codes, promotional campaigns, notifications, email integrations and other engagement features according to your store requirements.',
    },
    {
      icon: <Lock size={20} />,
      color: 'red',
      title: 'Security-Focused Development',
      desc: 'Secure authentication, protected APIs, validation, access controls and careful handling of customer and transaction-related data.',
    },
  ];

  const techStack = [
    {
      category: 'Frontend',
      items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL'],
    },
    {
      category: 'Database',
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
    },
    {
      category: 'Payments',
      items: ['Stripe', 'PayPal', 'JazzCash', 'Easypaisa'],
    },
    {
      category: 'Infrastructure',
      items: ['Vercel', 'AWS', 'Cloudinary', 'Cloudflare'],
    },
    {
      category: 'Commerce Features',
      items: [
        'Product Management',
        'Order Management',
        'Inventory',
        'Analytics',
      ],
    },
  ];

  const process = [
    {
      n: '01',
      title: 'Business & Product Discovery',
      desc: 'We understand your products, customers, catalogue structure, payment requirements, shipping workflow and administrative needs before defining the solution.',
    },
    {
      n: '02',
      title: 'Store Architecture & UI/UX',
      desc: 'We plan the customer journey and design important store experiences such as categories, product pages, cart, checkout and customer accounts.',
    },
    {
      n: '03',
      title: 'Platform Development',
      desc: 'We build the storefront, authentication, product management, cart, checkout and administration features using a maintainable architecture.',
    },
    {
      n: '04',
      title: 'Payments & Integrations',
      desc: 'Required payment gateways, shipping providers, email services, analytics tools and other third-party systems are integrated according to the project scope.',
    },
    {
      n: '05',
      title: 'Testing & Optimisation',
      desc: 'We test important customer journeys, responsive layouts, forms, checkout flows, performance and technical SEO before launch.',
    },
    {
      n: '06',
      title: 'Deployment & Support',
      desc: 'After final review, we deploy the platform, help with the handover and can provide ongoing maintenance and improvements when required.',
    },
  ];

  const faqs = [
    {
      q: 'How much does custom e-commerce development cost?',
      a: 'The cost depends on your catalogue size, required features, payment integrations, shipping workflow, marketplace requirements and other project-specific needs. After understanding your requirements, DevZore can provide a tailored proposal.',
    },
    {
      q: 'How long does it take to build an e-commerce website?',
      a: 'The timeline depends on the size and complexity of the platform. A focused online store and a large multi-vendor marketplace require very different amounts of design, development, integration and testing. We define the project milestones after the discovery stage.',
    },
    {
      q: 'Can you integrate JazzCash and Easypaisa?',
      a: 'JazzCash, Easypaisa and other payment services can be integrated when the required merchant account, API access and provider capabilities are available for the project.',
    },
    {
      q: 'Can you build a multi-vendor marketplace?',
      a: 'Yes. A custom marketplace can include vendor registration, vendor dashboards, product management, commissions, order workflows and administrative controls based on your business model.',
    },
    {
      q: 'Will my e-commerce website be SEO-friendly?',
      a: 'We can implement technical SEO foundations such as crawlable page structures, descriptive URLs, metadata, structured data where appropriate, internal linking, responsive layouts and performance optimisation. Search rankings themselves depend on many factors outside development and cannot be guaranteed.',
    },
    {
      q: 'Can you migrate an existing e-commerce store?',
      a: 'Migration can be planned for products, categories, customers, orders and other supported data depending on the existing platform and available export or API access. The migration approach is reviewed before implementation.',
    },
    {
      q: 'Can shipping or courier services be integrated?',
      a: 'Yes, where a courier or logistics provider offers suitable API access. Shipping rates, tracking and fulfilment workflows can be integrated according to the provider capabilities and your requirements.',
    },
    {
      q: 'Will I receive the source code?',
      a: 'Source code ownership, repositories, design files, deployment access and handover terms can be clearly defined in the project agreement so both sides know exactly what is included.',
    },
  ];

  const relatedServices = [
    {
      icon: <Code2 size={24} />,
      title: 'Web Development',
      desc: 'Build responsive websites and custom web applications for modern businesses.',
      path: '/web-development',
    },
    {
      icon: <Server size={24} />,
      title: 'Backend & API',
      desc: 'Build APIs, authentication and server-side functionality for your commerce platform.',
      path: '/backend-api',
    },
    {
      icon: <Palette size={24} />,
      title: 'UI/UX Design',
      desc: 'Design clear product discovery, cart and checkout experiences before development.',
      path: '/ui-ux-design',
    },
  ];

  const colorMap = {
    purple: d
      ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
      : 'bg-purple-50 border-purple-100 text-purple-600',
    green: d
      ? 'bg-green-500/10 border-green-500/20 text-green-400'
      : 'bg-green-50 border-green-100 text-green-600',
    blue: d
      ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
      : 'bg-blue-50 border-blue-100 text-blue-600',
    orange: d
      ? 'bg-orange-500/10 border-orange-500/20 text-orange-400'
      : 'bg-orange-50 border-orange-100 text-orange-600',
    cyan: d
      ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
      : 'bg-cyan-50 border-cyan-100 text-cyan-600',
    indigo: d
      ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
      : 'bg-indigo-50 border-indigo-100 text-indigo-600',
    amber: d
      ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'
      : 'bg-amber-50 border-amber-100 text-amber-600',
    pink: d
      ? 'bg-pink-500/10 border-pink-500/20 text-pink-400'
      : 'bg-pink-50 border-pink-100 text-pink-600',
    red: d
      ? 'bg-red-500/10 border-red-500/20 text-red-400'
      : 'bg-red-50 border-red-100 text-red-600',
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'E-Commerce Development Services',
    description:
      'Custom e-commerce development for online stores, marketplaces, payment integrations, inventory management and commerce applications.',
    url: 'https://devzore.com/ecommerce',
    provider: {
      '@id': 'https://devzore.com/#organization',
    },
    serviceType: 'E-Commerce Development',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'E-Commerce Development Capabilities',
      itemListElement: features.map((feature) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feature.title,
          description: feature.desc,
        },
      })),
    },
  };

  const faqSchema = {
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
  };

  const breadcrumbSchema = {
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
        name: 'Services',
        item: 'https://devzore.com/allservices',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'E-Commerce Development',
        item: 'https://devzore.com/ecommerce',
      },
    ],
  };

  const whatsappMessage = encodeURIComponent(
    'Hi DevZore! I would like to discuss an e-commerce development project.'
  );

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div
        className={`min-h-screen transition-colors duration-300 ${
          d ? 'bg-[#030303]' : 'bg-white'
        }`}
      >
        {/* Hero */}
        <section
          aria-labelledby="ecommerce-heading"
          className={`pt-27 pb-10 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${
                      d
                        ? 'bg-purple-600/10 border-purple-500/20 text-purple-400'
                        : 'bg-purple-50 border-purple-200 text-purple-700'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                    E-Commerce Development
                  </div>

                  <div
                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold border ${
                      d
                        ? 'bg-green-500/10 border-green-500/20 text-green-400'
                        : 'bg-green-50 border-green-200 text-green-700'
                    }`}
                  >
                    <Globe size={10} />
                    Worldwide Projects
                  </div>
                </div>

                <h1
                  id="ecommerce-heading"
                  className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 ${
                    d ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Custom E-Commerce Development{' '}
                  <span className="text-purple-600">
                    Built Around Your Business
                  </span>
                </h1>

                <p
                  className={`text-lg font-semibold mb-5 ${
                    d ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Online Stores · Marketplaces · Payments · Inventory ·
                  Commerce Applications
                </p>

                <p
                  className={`text-base leading-relaxed mb-5 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  DevZore builds custom e-commerce platforms for businesses
                  that need more flexibility than a standard template. We can
                  develop storefronts, marketplaces, ordering systems and
                  commerce applications around your products, customers and
                  operational workflow.
                </p>

                <p
                  className={`text-base leading-relaxed mb-8 ${
                    d ? 'text-gray-500' : 'text-gray-500'
                  }`}
                >
                  From product management and checkout to payments, inventory,
                  shipping and administration, each solution is structured
                  around the requirements of the project instead of forcing
                  your business into a fixed template.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    {
                      icon: <ShoppingCart size={17} />,
                      label: 'Custom Storefronts',
                    },
                    {
                      icon: <CreditCard size={17} />,
                      label: 'Payment Integrations',
                    },
                    {
                      icon: <Package size={17} />,
                      label: 'Order & Inventory',
                    },
                    {
                      icon: <Shield size={17} />,
                      label: 'Secure Architecture',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-xl border ${
                        d
                          ? 'bg-white/[0.02] border-white/[0.06]'
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <span className="text-purple-500">{item.icon}</span>

                      <span
                        className={`text-[12px] font-bold ${
                          d ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                  >
                    Discuss Your E-Commerce Project
                    <ArrowRight size={14} />
                  </Link>

                  <a
                    href={`https://wa.me/923348004300?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Capability Panel */}
              <div
                className={`p-8 rounded-3xl border ${
                  d
                    ? 'bg-white/[0.02] border-white/[0.06]'
                    : 'bg-[#fafafa] border-gray-200'
                }`}
              >
                <p
                  className={`text-[11px] font-black uppercase tracking-widest mb-5 ${
                    d ? 'text-gray-500' : 'text-gray-400'
                  }`}
                >
                  Custom Commerce Capabilities
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: 'Storefront Development',
                      desc: 'Responsive shopping experiences built around your products and customers.',
                    },
                    {
                      title: 'Custom Business Logic',
                      desc: 'Commerce workflows can be adapted to your pricing, ordering and operational requirements.',
                    },
                    {
                      title: 'Payment Integration',
                      desc: 'Connect appropriate payment gateways based on your market and merchant setup.',
                    },
                    {
                      title: 'Inventory & Orders',
                      desc: 'Structured product, stock, order and fulfilment management.',
                    },
                    {
                      title: 'Marketplace Architecture',
                      desc: 'Support multiple vendors, commissions and marketplace administration when required.',
                    },
                    {
                      title: 'API Integrations',
                      desc: 'Connect shipping, analytics, email and other supported third-party services.',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3 pb-4 border-b last:border-0 ${
                        d ? 'border-white/[0.05]' : 'border-gray-100'
                      }`}
                    >
                      <CheckCircle
                        size={14}
                        className="text-purple-500 flex-shrink-0 mt-0.5"
                      />

                      <div>
                        <p
                          className={`text-[13px] font-bold ${
                            d ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {item.title}
                        </p>

                        <p
                          className={`text-[11px] leading-relaxed ${
                            d ? 'text-gray-500' : 'text-gray-400'
                          }`}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className={`mt-5 p-3 rounded-xl ${
                    d ? 'bg-purple-600/5' : 'bg-purple-50'
                  }`}
                >
                  <p
                    className={`text-[11px] font-semibold text-center ${
                      d ? 'text-purple-400' : 'text-purple-700'
                    }`}
                  >
                    Available for remote e-commerce development projects
                    worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          aria-labelledby="features-heading"
          className={`py-10 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2
                id="features-heading"
                className={`text-3xl font-black mb-4 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                E-Commerce Development Capabilities
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Build the customer-facing store and the operational systems
                behind it as one connected commerce platform.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((item, index) => (
                <div
                  key={index}
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

        {/* Payment Integrations */}
        <section
          aria-labelledby="payments-heading"
          className={`py-10 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2
                id="payments-heading"
                className={`text-2xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Payment Integration Options
              </h2>

              <p
                className={`text-sm max-w-2xl mx-auto ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Payment providers can be integrated according to your target
                market, merchant account availability and project
                requirements.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                {
                  name: 'Stripe',
                  desc: 'Cards and supported payment methods',
                },
                {
                  name: 'PayPal',
                  desc: 'Supported international payments',
                },
                {
                  name: 'JazzCash',
                  desc: 'Local payment integration',
                },
                {
                  name: 'Easypaisa',
                  desc: 'Local payment integration',
                },
                {
                  name: 'Bank Payments',
                  desc: 'Project-specific bank workflows',
                },
              ].map((gateway, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border text-center transition-all hover:border-purple-500/30 ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-[#fafafa] border-gray-200'
                  }`}
                >
                  <CreditCard
                    size={21}
                    className="mx-auto mb-3 text-purple-500"
                  />

                  <p
                    className={`text-[13px] font-bold mb-1 ${
                      d ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {gateway.name}
                  </p>

                  <p
                    className={`text-[10px] leading-relaxed ${
                      d ? 'text-gray-500' : 'text-gray-400'
                    }`}
                  >
                    {gateway.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section
          aria-labelledby="ecommerce-tech-heading"
          className={`py-10 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                id="ecommerce-tech-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                E-Commerce Technology Stack
              </h2>

              <p
                className={`text-base ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Modern technologies selected according to the requirements of
                each commerce project
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStack.map((category, index) => (
                <div
                  key={index}
                  className={`p-5 rounded-2xl border ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <p className="text-[11px] font-black uppercase tracking-widest mb-3 text-purple-500">
                    {category.category}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {category.items.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`text-[11px] font-medium px-2.5 py-1 rounded-md border ${
                          d
                            ? 'bg-white/[0.04] border-white/[0.08] text-gray-300'
                            : 'bg-white border-gray-200 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section
          aria-labelledby="ecommerce-process-heading"
          className={`py-10 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                id="ecommerce-process-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                How We Build Your E-Commerce Platform
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                A structured development process from requirements and design
                through testing, deployment and handover
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {process.map((step, index) => (
                <div
                  key={index}
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
          </div>
        </section>

        {/* FAQ */}
        <section
          aria-labelledby="ecommerce-faq-heading"
          className={`py-10 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                id="ecommerce-faq-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                E-Commerce Development FAQ
              </h2>

              <p
                className={`text-base ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Common questions about custom e-commerce development
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                    activeFaq === index
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
                      setActiveFaq(activeFaq === index ? null : index)
                    }
                    aria-expanded={activeFaq === index}
                    className="w-full p-5 text-left flex items-start justify-between gap-4"
                  >
                    <span
                      className={`text-[14px] font-bold ${
                        activeFaq === index
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
                        activeFaq === index
                          ? 'bg-purple-600 text-white'
                          : d
                          ? 'bg-white/[0.06] text-gray-500'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {activeFaq === index ? (
                        <Minus size={13} />
                      ) : (
                        <Plus size={13} />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeFaq === index
                        ? 'max-h-[400px] opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div
                      className={`px-5 pb-5 pt-0 border-t text-[14px] leading-relaxed ${
                        d
                          ? 'border-white/[0.06] text-gray-400'
                          : 'border-purple-100 text-gray-600'
                      }`}
                    >
                      <p className="pt-4">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section
          aria-labelledby="related-ecommerce-services"
          className={`py-14 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500 mb-2">
                Explore More
              </p>

              <h2
                id="related-ecommerce-services"
                className={`text-2xl md:text-3xl font-black ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Related Services
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {relatedServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className={`group p-7 md:p-8 rounded-3xl border transition-all duration-300 ${
                    d
                      ? 'bg-white/[0.015] border-white/[0.08] hover:bg-white/[0.035] hover:border-purple-500/30'
                      : 'bg-white border-gray-200 hover:border-purple-200 hover:shadow-lg'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:-translate-y-1 ${
                      d
                        ? 'bg-purple-500/10 text-purple-400'
                        : 'bg-purple-50 text-purple-600'
                    }`}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className={`text-lg font-black mb-3 ${
                      d ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed mb-7 ${
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

        {/* CTA */}
        <section className="py-14">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[11px] font-bold uppercase tracking-widest mb-5 ${
                d
                  ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                  : 'bg-purple-50 border-purple-200 text-purple-700'
              }`}
            >
              <Zap size={12} />
              Start Your Project
            </div>

            <h2
              className={`text-3xl md:text-4xl font-black mb-4 ${
                d ? 'text-white' : 'text-gray-900'
              }`}
            >
              Planning an E-Commerce Platform?
            </h2>

            <p
              className={`text-base mb-8 max-w-2xl mx-auto leading-relaxed ${
                d ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Tell us what you want to sell, how your ordering process works
              and which integrations you need. We can help define the right
              technical approach for your project.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
              >
                Discuss Your Project
                <ArrowRight size={15} />
              </Link>

              <Link
                to="/allservices"
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
        </section>
      </div>
    </>
  );
};

export default ECommerce;