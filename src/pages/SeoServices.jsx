import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Search,
  ArrowRight,
  CheckCircle,
  Globe,
  Target,
  BarChart3,
  Link2,
  FileText,
  MapPin,
  Smartphone,
  Plus,
  Minus,
  Layers,
  Gauge,
  ShieldCheck,
  LineChart,
  Megaphone,
  Code2,
} from 'lucide-react';

const SeoServices = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  const whatsappUrl =
    'https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20SEO%20services%20for%20my%20website.';

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      icon: <Search size={22} />,
      color: 'purple',
      title: 'Technical SEO Audits',
      desc: 'Technical SEO analysis focused on helping search engines crawl, understand and index your website more effectively while improving the technical experience for users.',
      includes: [
        'Crawlability and indexation review',
        'XML sitemap and robots.txt checks',
        'Canonical and duplicate URL review',
        'Core Web Vitals analysis',
        'Redirect and broken-link checks',
        'Structured data review',
      ],
    },
    {
      icon: <FileText size={22} />,
      color: 'blue',
      title: 'On-Page SEO',
      desc: 'Page-level optimisation that aligns titles, descriptions, headings, content, internal links and other important elements with relevant search intent.',
      includes: [
        'Title and meta description optimisation',
        'Heading structure review',
        'Search-intent content optimisation',
        'Internal linking improvements',
        'Image alt text review',
        'URL and breadcrumb optimisation',
      ],
    },
    {
      icon: <Target size={22} />,
      color: 'green',
      title: 'Keyword Research & SEO Strategy',
      desc: 'Keyword and search-intent research designed to identify relevant opportunities and connect them with the right service pages, landing pages and content topics.',
      includes: [
        'Primary keyword research',
        'Long-tail keyword research',
        'Search intent analysis',
        'Competitor keyword research',
        'Keyword-to-page mapping',
        'Topic and content planning',
      ],
    },
    {
      icon: <FileText size={22} />,
      color: 'amber',
      title: 'SEO Content Optimisation',
      desc: 'Search-focused content planning and optimisation for service pages, landing pages, blog articles, product content and existing pages that need clearer topical relevance.',
      includes: [
        'Service page optimisation',
        'Landing page content',
        'Blog content planning',
        'Content refresh recommendations',
        'FAQ content development',
        'Topic cluster planning',
      ],
    },
    {
      icon: <Link2 size={22} />,
      color: 'indigo',
      title: 'Off-Page SEO & Link Strategy',
      desc: 'Off-page SEO planning focused on relevant mentions, useful outreach opportunities and sustainable authority-building practices rather than automated or spam-based links.',
      includes: [
        'Backlink profile review',
        'Competitor backlink research',
        'Relevant outreach planning',
        'Resource link opportunities',
        'Digital PR opportunities',
        'Toxic-link review when appropriate',
      ],
    },
    {
      icon: <MapPin size={22} />,
      color: 'red',
      title: 'Local SEO',
      desc: 'Local search optimisation for businesses that want stronger visibility for location-based searches and a better connection between their website and local business presence.',
      includes: [
        'Google Business Profile review',
        'Local keyword research',
        'Business information consistency',
        'Local landing page recommendations',
        'LocalBusiness schema review',
        'Local search performance tracking',
      ],
    },
    {
      icon: <Smartphone size={22} />,
      color: 'cyan',
      title: 'Mobile SEO & Core Web Vitals',
      desc: 'Mobile-first technical analysis covering usability, loading behaviour, layout stability and interaction performance across important website pages.',
      includes: [
        'Mobile usability review',
        'Largest Contentful Paint analysis',
        'Cumulative Layout Shift analysis',
        'Interaction to Next Paint analysis',
        'Image and asset optimisation review',
        'Responsive layout checks',
      ],
    },
    {
      icon: <Layers size={22} />,
      color: 'orange',
      title: 'E-Commerce SEO',
      desc: 'SEO for online stores covering product pages, category architecture, crawl behaviour, structured data and search intent across commercial pages.',
      includes: [
        'Product page optimisation',
        'Category page optimisation',
        'Product structured data review',
        'Faceted navigation analysis',
        'Internal linking strategy',
        'Commercial keyword research',
      ],
    },
    {
      icon: <BarChart3 size={22} />,
      color: 'pink',
      title: 'SEO Analytics & Reporting',
      desc: 'Search performance measurement using relevant analytics and search data so SEO decisions can be based on visibility, clicks, landing pages and technical trends.',
      includes: [
        'Google Search Console analysis',
        'Google Analytics review',
        'Keyword visibility monitoring',
        'Organic landing page analysis',
        'Technical issue monitoring',
        'Performance reporting',
      ],
    },
  ];

  const seoTypes = [
    {
      title: 'Technical SEO',
      icon: '⚙️',
      desc: 'Crawling, indexing, canonicalisation, sitemaps, structured data and website performance.',
    },
    {
      title: 'On-Page SEO',
      icon: '📄',
      desc: 'Titles, descriptions, headings, content relevance, internal links and page structure.',
    },
    {
      title: 'Off-Page SEO',
      icon: '🔗',
      desc: 'Backlink analysis, outreach opportunities, digital PR and external authority signals.',
    },
    {
      title: 'Local SEO',
      icon: '📍',
      desc: 'Google Business Profile, local search intent, business information and location pages.',
    },
    {
      title: 'E-Commerce SEO',
      icon: '🛒',
      desc: 'Product pages, categories, commercial keywords, structured data and store architecture.',
    },
    {
      title: 'Content SEO',
      icon: '✍️',
      desc: 'Service content, landing pages, blog topics, FAQs and topic clusters.',
    },
    {
      title: 'Mobile SEO',
      icon: '📱',
      desc: 'Mobile usability, responsive layouts, Core Web Vitals and loading performance.',
    },
    {
      title: 'International SEO',
      icon: '🌍',
      desc: 'International targeting, hreflang planning and multilingual website considerations.',
    },
  ];

  const tools = [
    {
      name: 'Google Search Console',
      icon: '🔎',
      use: 'Indexing, search queries, clicks and impressions',
    },
    {
      name: 'Google Analytics',
      icon: '📈',
      use: 'Organic traffic and user behaviour analysis',
    },
    {
      name: 'PageSpeed Insights',
      icon: '⚡',
      use: 'Core Web Vitals and performance analysis',
    },
    {
      name: 'Lighthouse',
      icon: '🏠',
      use: 'Performance, accessibility and SEO diagnostics',
    },
    {
      name: 'Screaming Frog',
      icon: '🐸',
      use: 'Technical crawling and website auditing',
    },
    {
      name: 'Ahrefs',
      icon: '🔍',
      use: 'Keyword and backlink research when available',
    },
    {
      name: 'SEMrush',
      icon: '📊',
      use: 'Keyword and competitor research when available',
    },
    {
      name: 'Schema Validator',
      icon: '✅',
      use: 'Structured data testing and validation',
    },
  ];

  const practices = [
    {
      icon: <Search size={22} />,
      title: 'Search Visibility',
      desc: 'Improve how important pages can be discovered, crawled and understood by search engines.',
    },
    {
      icon: <Gauge size={22} />,
      title: 'Technical Health',
      desc: 'Identify technical issues involving indexing, performance, duplicate URLs, redirects and site structure.',
    },
    {
      icon: <Target size={22} />,
      title: 'Search Intent',
      desc: 'Align important pages with the questions, services and topics potential customers are actually searching for.',
    },
    {
      icon: <LineChart size={22} />,
      title: 'Measurable Progress',
      desc: 'Use search and analytics data to understand changes in impressions, clicks, landing pages and organic visibility.',
    },
    {
      icon: <ShieldCheck size={22} />,
      title: 'Sustainable SEO',
      desc: 'Focus on useful content, sound technical implementation and sustainable practices rather than ranking shortcuts.',
    },
    {
      icon: <Code2 size={22} />,
      title: 'Developer-Led Fixes',
      desc: 'Technical SEO recommendations can be connected directly with website development and implementation work.',
    },
  ];

  const process = [
    {
      n: '01',
      title: 'SEO Audit & Discovery',
      desc: 'We review the website structure, important pages, technical setup, current search visibility and business goals to understand the starting point.',
    },
    {
      n: '02',
      title: 'Keyword & Search Intent Research',
      desc: 'Relevant search topics are researched and mapped to existing or planned pages based on user intent and business relevance.',
    },
    {
      n: '03',
      title: 'Technical SEO Improvements',
      desc: 'Priority technical issues may include crawling, indexing, canonicals, sitemaps, redirects, structured data, performance and mobile usability.',
    },
    {
      n: '04',
      title: 'On-Page Optimisation',
      desc: 'Important pages are improved through clearer titles, descriptions, headings, content structure, internal links and semantic relevance.',
    },
    {
      n: '05',
      title: 'Content & Authority Development',
      desc: 'Where appropriate, we plan useful supporting content and identify sustainable opportunities to strengthen topical and external authority.',
    },
    {
      n: '06',
      title: 'Measurement & Iteration',
      desc: 'Search Console, analytics and other relevant data are reviewed to identify changes, new opportunities and areas that need further improvement.',
    },
  ];

  const faqs = [
    {
      q: 'How long does SEO take to show results?',
      a: 'SEO timelines vary by website history, competition, technical condition, content quality and the searches being targeted. Some technical changes can be discovered relatively quickly, while meaningful organic growth often requires consistent work over a longer period. We prefer to measure progress using real search data rather than promise a fixed ranking timeline.',
    },
    {
      q: 'Can you guarantee first-page or number-one Google rankings?',
      a: 'No. Search rankings are controlled by search engines and can change because of competition, algorithm updates, website quality and many other factors. Our work focuses on technical quality, useful content, search intent, internal linking, structured data and sustainable SEO practices.',
    },
    {
      q: 'What is included in a technical SEO audit?',
      a: 'A technical SEO audit can include crawlability, indexation, canonical URLs, redirects, XML sitemaps, robots.txt, duplicate content, broken links, structured data, mobile usability and Core Web Vitals. The exact scope depends on the website.',
    },
    {
      q: 'What is the difference between on-page and off-page SEO?',
      a: 'On-page SEO focuses on elements of your own website, including content, headings, metadata, internal links and page structure. Off-page SEO focuses on external signals such as relevant backlinks, mentions and digital PR opportunities.',
    },
    {
      q: 'Do you provide local SEO services?',
      a: 'Yes. Local SEO work can include Google Business Profile optimisation, local keyword research, business information consistency, location-focused website content, structured data and local search performance analysis.',
    },
    {
      q: 'Can you help with e-commerce SEO?',
      a: 'Yes. E-commerce SEO can cover product and category pages, site architecture, internal linking, product structured data, duplicate URLs, faceted navigation and commercial search intent.',
    },
    {
      q: 'Can you work on React, Next.js and custom websites?',
      a: 'Yes. Technical SEO can be implemented for React, Next.js and other custom web applications. For JavaScript-heavy websites, we also review rendering, crawlability, metadata delivery, internal links and how important content is exposed to search engines.',
    },
    {
      q: 'Do you work with WordPress and Shopify websites?',
      a: 'SEO principles apply across different platforms. The implementation approach can vary between WordPress, Shopify and custom applications, so the website setup is reviewed before recommending technical changes.',
    },
    {
      q: 'What SEO tools do you use?',
      a: 'Depending on the project, SEO analysis can involve Google Search Console, Google Analytics, PageSpeed Insights, Lighthouse, Screaming Frog, structured data testing tools and keyword or backlink research platforms such as Ahrefs or SEMrush.',
    },
    {
      q: 'How much do SEO services cost?',
      a: 'SEO cost depends on website size, technical condition, competition, target market and whether the project needs an audit, implementation, content work or ongoing optimisation. After reviewing the scope, DevZore can provide a tailored proposal.',
    },
    {
      q: 'Can SEO help a website get more organic traffic?',
      a: 'SEO can improve a website’s ability to appear for relevant searches by improving technical accessibility, content relevance and overall search visibility. Actual traffic growth varies by search demand, competition, website authority and implementation quality.',
    },
    {
      q: 'Do you help with Google Search Console indexing issues?',
      a: 'Yes. We can review indexing reports, canonicalisation, sitemap discovery, crawl accessibility, duplicate URLs and other technical signals that may affect how Google discovers and processes website pages.',
    },
  ];

  const relatedServices = [
    {
      icon: <Megaphone size={22} />,
      title: 'Digital Marketing',
      path: '/digital-marketing',
      desc: 'Digital marketing strategies that connect SEO with content, campaigns and wider online business growth.',
    },
    {
      icon: <Globe size={22} />,
      title: 'Web Development',
      path: '/web-development',
      desc: 'Fast, responsive and maintainable websites built with technical SEO and user experience in mind.',
    },
    {
      icon: <Layers size={22} />,
      title: 'E-Commerce Development',
      path: '/ecommerce',
      desc: 'E-commerce development for product catalogues, customer journeys, integrations and search-friendly store architecture.',
    },
  ];

  const colorMap = {
    purple: d
      ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
      : 'bg-purple-50 border-purple-100 text-purple-600',
    blue: d
      ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
      : 'bg-blue-50 border-blue-100 text-blue-600',
    green: d
      ? 'bg-green-500/10 border-green-500/20 text-green-400'
      : 'bg-green-50 border-green-100 text-green-600',
    amber: d
      ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'
      : 'bg-amber-50 border-amber-100 text-amber-600',
    indigo: d
      ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
      : 'bg-indigo-50 border-indigo-100 text-indigo-600',
    red: d
      ? 'bg-red-500/10 border-red-500/20 text-red-400'
      : 'bg-red-50 border-red-100 text-red-600',
    cyan: d
      ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
      : 'bg-cyan-50 border-cyan-100 text-cyan-600',
    orange: d
      ? 'bg-orange-500/10 border-orange-500/20 text-orange-400'
      : 'bg-orange-50 border-orange-100 text-orange-600',
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
        className={`text-lg font-black mb-2 ${
          d ? 'text-white' : 'text-gray-900'
        }`}
      >
        {heading}
      </h3>

      <p
        className={`text-sm mb-5 ${
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
          Discuss Your SEO Project
          <ArrowRight size={13} />
        </Link>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
        >
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z" />
          </svg>
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
  );

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': 'https://devzore.com/seo-services#service',
            name: 'SEO Services',
            description:
              'SEO services for technical SEO, on-page optimisation, keyword research, local SEO, e-commerce SEO, content optimisation and search performance analysis.',
            url: 'https://devzore.com/seo-services',
            serviceType: 'Search Engine Optimisation',
            provider: {
              '@id': 'https://devzore.com/#organization',
            },
            areaServed: 'Worldwide',
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
                name: 'All Services',
                item: 'https://devzore.com/allservices',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'SEO Services',
                item: 'https://devzore.com/seo-services',
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
        {/* Hero */}
        <section
          aria-labelledby="seo-heading"
          className={`pt-28 pb-14 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
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
                    SEO Services
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
                  id="seo-heading"
                  className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5 ${
                    d ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  SEO Services for{' '}
                  <span className="text-purple-600">
                    Better Search Visibility & Organic Growth
                  </span>
                </h1>

                <h2
                  className={`text-lg font-semibold mb-5 ${
                    d ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Technical SEO · On-Page SEO · Keyword Research · Local SEO ·
                  E-Commerce SEO
                </h2>

                <p
                  className={`text-base leading-relaxed mb-5 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  DevZore provides search engine optimisation services for
                  websites that need stronger technical foundations, clearer
                  search relevance and better organic visibility. Our work can
                  cover technical SEO audits, on-page optimisation, keyword
                  research, content strategy, local SEO, e-commerce SEO and
                  search performance analysis.
                </p>

                <p
                  className={`text-base leading-relaxed mb-8 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  We combine SEO analysis with web-development knowledge, which
                  is especially useful for React, Next.js and custom websites
                  where rendering, metadata, internal linking, structured data,
                  performance and crawlability may require technical
                  implementation.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                  {[
                    {
                      icon: <Search size={18} />,
                      label: 'Technical SEO',
                    },
                    {
                      icon: <Target size={18} />,
                      label: 'Keyword Strategy',
                    },
                    {
                      icon: <Gauge size={18} />,
                      label: 'Core Web Vitals',
                    },
                    {
                      icon: <BarChart3 size={18} />,
                      label: 'Search Analytics',
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`p-4 rounded-xl border ${
                        d
                          ? 'bg-white/[0.02] border-white/[0.06]'
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="text-purple-500 mb-2">{item.icon}</div>
                      <div
                        className={`text-[11px] font-bold ${
                          d ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
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
                    Discuss Your SEO Project
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
                    className={`flex items-center gap-2 px-5 py-3 font-bold rounded-xl text-sm border transition-all ${
                      d
                        ? 'border-white/10 text-gray-300 hover:bg-white/[0.04]'
                        : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    All Services
                  </Link>
                </div>
              </div>

              {/* Right Panel */}
              <div
                className={`p-7 sm:p-8 rounded-3xl border ${
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
                  SEO Areas We Can Review
                </p>

                <div className="space-y-3">
                  {[
                    {
                      item: 'Crawling & Indexing',
                      note: 'Robots.txt, sitemaps, canonicals and index coverage',
                    },
                    {
                      item: 'On-Page SEO',
                      note: 'Titles, descriptions, headings and search intent',
                    },
                    {
                      item: 'Internal Linking',
                      note: 'Site hierarchy, contextual links and discoverability',
                    },
                    {
                      item: 'Core Web Vitals',
                      note: 'LCP, CLS and INP performance analysis',
                    },
                    {
                      item: 'Structured Data',
                      note: 'Schema implementation and validation',
                    },
                    {
                      item: 'Keyword Research',
                      note: 'Relevant commercial and informational searches',
                    },
                    {
                      item: 'Local SEO',
                      note: 'Local visibility and Google Business Profile',
                    },
                    {
                      item: 'E-Commerce SEO',
                      note: 'Products, categories and store architecture',
                    },
                    {
                      item: 'Search Console',
                      note: 'Queries, pages, indexing and search performance',
                    },
                  ].map((item) => (
                    <div
                      key={item.item}
                      className={`flex items-start gap-3 pb-3 border-b last:border-0 ${
                        d ? 'border-white/[0.05]' : 'border-gray-100'
                      }`}
                    >
                      <CheckCircle
                        size={14}
                        className="text-purple-500 flex-shrink-0 mt-0.5"
                      />

                      <div>
                        <p
                          className={`text-[12px] font-bold ${
                            d ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {item.item}
                        </p>

                        <p
                          className={`text-[10px] mt-0.5 ${
                            d ? 'text-gray-500' : 'text-gray-400'
                          }`}
                        >
                          {item.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Intent Strip */}
        <section
          className={`py-7 border-b ${
            d
              ? 'border-white/[0.06] bg-purple-600/5'
              : 'border-gray-100 bg-purple-50'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
              <div>
                <p
                  className={`font-black text-base mb-1 ${
                    d ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Need help understanding why important pages are not performing
                  in search?
                </p>

                <p
                  className={`text-sm ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  We can review technical SEO, indexing, on-page signals,
                  content structure and search visibility.
                </p>
              </div>

              <Link
                to="/contact"
                onClick={scrollTop}
                className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-colors"
              >
                Discuss SEO
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* SEO Types */}
        <section
          aria-labelledby="seo-types-heading"
          className={`py-20 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2
                id="seo-types-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Search Engine Optimisation Across Key SEO Areas
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                SEO involves technical, content, local and authority signals.
                The right combination depends on your website, market and
                search goals.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {seoTypes.map((type) => (
                <div
                  key={type.title}
                  className={`p-5 rounded-2xl border transition-all hover:border-purple-500/25 ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                      : 'bg-white border-gray-200 hover:shadow-sm'
                  }`}
                >
                  <div className="text-2xl mb-3">{type.icon}</div>

                  <h3
                    className={`text-[13px] font-bold mb-1.5 ${
                      d ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {type.title}
                  </h3>

                  <p
                    className={`text-[11px] leading-relaxed ${
                      d ? 'text-gray-500' : 'text-gray-500'
                    }`}
                  >
                    {type.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          aria-labelledby="services-heading"
          className={`py-20 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <p className="text-purple-500 text-xs font-black uppercase tracking-widest mb-3">
                SEO Capabilities
              </p>

              <h2
                id="services-heading"
                className={`text-3xl font-black mb-4 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                SEO Services for Technical, Content & Search Growth
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                From technical SEO and keyword research to local search and
                e-commerce optimisation, the scope can be tailored to the
                website and its priorities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((item) => (
                <article
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
                    className={`text-[15px] font-bold mb-2 ${
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

                  <ul className="space-y-2">
                    {item.includes.map((point) => (
                      <li
                        key={point}
                        className={`flex items-start gap-2 text-[11px] ${
                          d ? 'text-gray-500' : 'text-gray-500'
                        }`}
                      >
                        <CheckCircle
                          size={11}
                          className="text-purple-500 flex-shrink-0 mt-0.5"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Practices */}
        <section
          aria-labelledby="practices-heading"
          className={`py-20 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2
                id="practices-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                What We Focus On in an SEO Project
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Search performance is influenced by many factors. Our approach
                focuses on the areas we can analyse, improve and measure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {practices.map((item) => (
                <div
                  key={item.title}
                  className={`p-6 rounded-2xl border ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                      d
                        ? 'bg-purple-500/10 text-purple-400'
                        : 'bg-purple-50 text-purple-600'
                    }`}
                  >
                    {item.icon}
                  </div>

                  <h3
                    className={`text-[15px] font-bold mb-2 ${
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
              heading="Want a clearer picture of your website's SEO?"
              sub="We can review your website, understand the main search issues and discuss the most relevant next steps."
            />
          </div>
        </section>

        {/* Tools */}
        <section
          aria-labelledby="tools-heading"
          className={`py-20 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2
                id="tools-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                SEO Tools & Data Sources
              </h2>

              <p
                className={`text-base ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                We use relevant search, analytics, crawling and performance
                tools depending on the needs of each project.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className={`p-5 rounded-2xl border ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="text-2xl mb-2">{tool.icon}</div>

                  <p
                    className={`text-[13px] font-bold mb-1 ${
                      d ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {tool.name}
                  </p>

                  <p
                    className={`text-[11px] leading-relaxed ${
                      d ? 'text-gray-500' : 'text-gray-400'
                    }`}
                  >
                    {tool.use}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section
          aria-labelledby="process-heading"
          className={`py-20 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2
                id="process-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Our SEO Process
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                A structured process for understanding the website, improving
                priority areas and measuring search performance over time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {process.map((step) => (
                <div
                  key={step.n}
                  className={`p-6 rounded-2xl border ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-white border-gray-200'
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
              heading="Looking for an SEO strategy built around your website?"
              sub="Tell us about your website, target market and current search challenges so we can discuss an appropriate scope."
            />
          </div>
        </section>

        {/* FAQ */}
        <section
          aria-labelledby="faq-heading"
          className={`py-20 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                id="faq-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                SEO Services FAQ
              </h2>

              <p
                className={`text-base ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Common questions about technical SEO, rankings, search
                visibility and ongoing optimisation.
              </p>
            </div>

            <div className="space-y-3 mb-10">
              {faqs.map((faq, i) => (
                <div
                  key={faq.q}
                  className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                    activeFaq === i
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
                      setActiveFaq(activeFaq === i ? null : i)
                    }
                    aria-expanded={activeFaq === i}
                    className="w-full p-5 text-left flex items-start justify-between gap-4"
                  >
                    <span
                      className={`text-[14px] font-bold ${
                        activeFaq === i
                          ? 'text-purple-500'
                          : d
                            ? 'text-white'
                            : 'text-gray-900'
                      }`}
                    >
                      {faq.q}
                    </span>

                    <span
                      className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center ${
                        activeFaq === i
                          ? 'bg-purple-600 text-white'
                          : d
                            ? 'bg-white/[0.06] text-gray-500'
                            : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {activeFaq === i ? (
                        <Minus size={13} />
                      ) : (
                        <Plus size={13} />
                      )}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeFaq === i
                        ? 'max-h-[500px] opacity-100'
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

            <CtaStrip
              heading="Have a question about your website's SEO?"
              sub="Share the website and the search problem you are trying to solve, and we can discuss the relevant technical or content work."
            />
          </div>
        </section>

        {/* Related Services */}
        <section
          aria-labelledby="related-services-heading"
          className={`py-16 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <p className="text-purple-500 text-xs font-black uppercase tracking-widest mb-2">
                Explore More
              </p>

              <h2
                id="related-services-heading"
                className={`text-2xl sm:text-3xl font-black ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Related Services
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={scrollTop}
                  className={`group p-7 rounded-2xl border transition-all hover:-translate-y-1 hover:border-purple-500/30 ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                      : 'bg-white border-gray-200 hover:shadow-lg'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${
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
                    className={`text-sm leading-relaxed mb-6 ${
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

        {/* Final CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div
              className={`p-8 sm:p-10 rounded-3xl border text-center ${
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
                <Search size={25} />
              </div>

              <h2
                className={`text-3xl font-black mb-4 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Improve Your Website&apos;s Search Visibility
              </h2>

              <p
                className={`text-base leading-relaxed mb-3 max-w-2xl mx-auto ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Talk to DevZore about technical SEO, on-page optimisation,
                keyword research, local SEO, e-commerce SEO, indexing issues
                and search performance.
              </p>

              <p
                className={`text-[13px] mb-8 ${
                  d ? 'text-gray-600' : 'text-gray-400'
                }`}
              >
                Technical SEO · On-Page SEO · Keyword Research · Local SEO ·
                E-Commerce SEO · Search Console
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/contact"
                  onClick={scrollTop}
                  className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
                >
                  Discuss Your SEO Project
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

export default SeoServices;