import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Search, ArrowRight, CheckCircle, Globe,
  Zap, Star, Users, Award, Target, BarChart3,
  TrendingUp, Shield, Code2, Link2, FileText,
  MapPin, Smartphone, RefreshCw, Eye, Activity,
  Plus, Minus, ExternalLink, Layers, Clock
} from 'lucide-react';

const SeoServices = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    {
      icon: <Search size={22}/>, color: 'purple',
      title: 'Technical SEO Audit & Fixes',
      desc: 'A comprehensive technical SEO audit covering site speed, Core Web Vitals, crawlability, indexation, XML sitemaps, robots.txt, canonical tags, hreflang, structured data, duplicate content, broken links, redirect chains and server response codes. We produce a prioritised fix list and implement every change — not just tell you what is wrong.',
      includes: ['Core Web Vitals optimisation (LCP, FID, CLS)', 'Crawl budget analysis and optimisation', 'XML sitemap and robots.txt audit', 'Canonical tag and duplicate content fixes', 'Redirect chain cleanup', 'Structured data / schema markup implementation'],
    },
    {
      icon: <FileText size={22}/>, color: 'blue',
      title: 'On-Page SEO Optimisation',
      desc: 'Systematic on-page optimisation of every page on your website — title tags, meta descriptions, H1-H4 heading hierarchy, keyword placement, content optimisation, internal linking structure, image alt text, URL structure and page-level schema markup. Every page optimised to rank for its target keyword cluster.',
      includes: ['Title tag and meta description optimisation', 'H1-H4 heading structure and hierarchy', 'Keyword density and semantic optimisation', 'Internal linking strategy and implementation', 'Image optimisation and alt text', 'URL structure and breadcrumb optimisation'],
    },
    {
      icon: <Target size={22}/>, color: 'green',
      title: 'Keyword Research & Strategy',
      desc: 'In-depth keyword research using Ahrefs, SEMrush and Google Search Console — identifying high-value, low-competition keyword opportunities your competitors are missing. We map keywords to specific pages, build topic clusters and create a content calendar that systematically targets the terms your ideal customers are searching for.',
      includes: ['Primary and long-tail keyword discovery', 'Search intent analysis for each keyword', 'Competitor keyword gap analysis', 'Topic cluster and content silo planning', 'Keyword-to-page mapping strategy', 'Monthly keyword ranking tracking'],
    },
    {
      icon: <FileText size={22}/>, color: 'amber',
      title: 'SEO Content Writing',
      desc: 'Expert SEO content writing that ranks on Google and converts readers into customers. Our writers produce long-form blog posts, pillar pages, service pages, landing pages and product descriptions — all researched, structured with proper H1-H4 hierarchy and optimised for target keywords without keyword stuffing.',
      includes: ['Long-form SEO blog posts (1500-3000 words)', 'Pillar pages and topic cluster content', 'Service and landing page copy', 'Product description optimisation', 'FAQ content for featured snippets', 'Content refreshing and updating old posts'],
    },
    {
      icon: <Link2 size={22}/>, color: 'indigo',
      title: 'Link Building & Authority',
      desc: 'White-hat link building campaigns that build genuine domain authority through high-quality backlinks from relevant, authoritative websites. We use guest posting, digital PR, resource link building, broken link building and HARO outreach — no spammy links, no PBNs, no shortcuts that risk Google penalties.',
      includes: ['High-DA guest post outreach', 'Digital PR and media coverage', 'Resource page link building', 'Broken link building campaigns', 'HARO journalist outreach', 'Competitor backlink gap analysis'],
    },
    {
      icon: <MapPin size={22}/>, color: 'red',
      title: 'Local SEO',
      desc: 'Dominate local search results for your city, region or country. We optimise your Google Business Profile, build local citations, manage reviews, implement LocalBusiness schema and optimise your website for geo-targeted keywords — so customers searching for your services in your area find you first.',
      includes: ['Google Business Profile optimisation', 'Local citation building and cleanup', 'Review generation and management strategy', 'LocalBusiness schema markup', 'Geo-targeted landing pages', 'Local keyword targeting and tracking'],
    },
    {
      icon: <Smartphone size={22}/>, color: 'cyan',
      title: 'Mobile SEO & Core Web Vitals',
      desc: 'Mobile-first SEO optimisation ensuring your website performs perfectly on all devices and passes Google\'s Core Web Vitals assessment. We optimise Largest Contentful Paint, Cumulative Layout Shift and Interaction to Next Paint — improving both user experience and search rankings simultaneously.',
      includes: ['Mobile usability audit and fixes', 'LCP optimisation (image and server speed)', 'CLS fixes for stable layouts', 'INP improvements for fast interactions', 'Page speed optimisation (score 90+)', 'AMP implementation where applicable'],
    },
    {
      icon: <Layers size={22}/>, color: 'orange',
      title: 'E-Commerce SEO',
      desc: 'Specialised SEO for e-commerce websites — product page optimisation, category page SEO, schema markup for products and reviews, faceted navigation handling, canonicalisation of filter pages, site architecture optimisation and content strategies that drive qualified buyers to your store from organic search.',
      includes: ['Product and category page optimisation', 'Product schema and review markup', 'Faceted navigation and crawl budget fixes', 'E-commerce site architecture audit', 'Shopping intent keyword targeting', 'Competitor product gap analysis'],
    },
    {
      icon: <BarChart3 size={22}/>, color: 'pink',
      title: 'SEO Analytics & Reporting',
      desc: 'Clear, actionable monthly SEO reports showing keyword ranking movements, organic traffic growth, conversion tracking, backlink profile changes and technical health scores. We use Google Search Console, Google Analytics 4 and Ahrefs to give you complete visibility into your SEO performance and ROI.',
      includes: ['Monthly keyword ranking reports', 'Google Search Console analysis', 'Organic traffic and conversion tracking', 'Backlink profile monitoring', 'Competitor ranking benchmarking', 'ROI from organic traffic calculation'],
    },
  ];

  const seoTypes = [
    { title: 'Technical SEO',    icon: '⚙️', desc: 'Site speed, crawlability, indexation, structured data, Core Web Vitals' },
    { title: 'On-Page SEO',      icon: '📄', desc: 'Title tags, meta descriptions, headings, content, internal links' },
    { title: 'Off-Page SEO',     icon: '🔗', desc: 'Link building, digital PR, brand mentions, authority signals' },
    { title: 'Local SEO',        icon: '📍', desc: 'Google Business Profile, local citations, geo-targeted content' },
    { title: 'E-Commerce SEO',   icon: '🛒', desc: 'Product pages, category SEO, shopping intent keywords' },
    { title: 'Content SEO',      icon: '✍️', desc: 'Blog posts, pillar pages, topic clusters, featured snippets' },
    { title: 'Mobile SEO',       icon: '📱', desc: 'Mobile-first optimisation, Core Web Vitals, page speed' },
    { title: 'International SEO',icon: '🌍', desc: 'Hreflang, multi-language SEO, geo-targeting strategy' },
  ];

  const tools = [
    { name: 'Ahrefs',                  icon: '🔍', use: 'Keyword research, backlink analysis' },
    { name: 'SEMrush',                 icon: '📊', use: 'Competitor analysis, rank tracking' },
    { name: 'Google Search Console',   icon: '🔎', use: 'Indexation, clicks, impressions' },
    { name: 'Google Analytics 4',      icon: '📈', use: 'Traffic, conversions, user behaviour' },
    { name: 'PageSpeed Insights',      icon: '⚡', use: 'Core Web Vitals, performance scoring' },
    { name: 'Screaming Frog',          icon: '🐸', use: 'Technical site crawl and audit' },
    { name: 'Lighthouse',              icon: '🏠', use: 'Performance, accessibility, SEO scoring' },
    { name: 'Schema Markup Validator', icon: '✅', use: 'Structured data testing and validation' },
  ];

  const results = [
    { metric: '180%',  label: 'Avg Organic Traffic Growth',  desc: 'Within 6 months of full SEO implementation' },
    { metric: 'Top 3', label: 'Google Rankings Achieved',    desc: 'For primary target keywords within 90 days' },
    { metric: '95+',   label: 'Lighthouse SEO Score',        desc: 'On all optimised pages after technical fixes' },
    { metric: '3.5x',  label: 'Increase in Organic Leads',   desc: 'Average improvement within 6 months' },
    { metric: '98/100',label: 'Ahrefs Health Score',          desc: 'Maintained for devzore.com after full audit' },
    { metric: '100/100',label: 'PageSpeed SEO Score',         desc: 'Achieved on desktop and mobile' },
  ];

  const process = [
    { n: '01', title: 'SEO Audit & Baseline',         desc: 'Full technical audit, keyword gap analysis, competitor research and baseline metrics — giving us a clear picture of where you are and exactly what needs to change.' },
    { n: '02', title: 'Strategy & Keyword Mapping',    desc: 'We build a prioritised SEO strategy — which pages to optimise first, which keywords to target, what content to create and what technical fixes to implement for fastest results.' },
    { n: '03', title: 'Technical SEO Implementation', desc: 'Every technical fix is implemented — speed optimisation, schema markup, canonical tags, sitemap, robots.txt, Core Web Vitals improvements and indexation cleanup.' },
    { n: '04', title: 'On-Page Optimisation',         desc: 'Every target page is optimised — title tags, meta descriptions, heading hierarchy, content, internal links, image alt text and URL structure — following Google best practices.' },
    { n: '05', title: 'Content & Link Building',       desc: 'Monthly SEO content published to your blog, and ongoing link building campaigns to build domain authority and strengthen your ranking signals over time.' },
    { n: '06', title: 'Monthly Reporting & Review',   desc: 'Detailed monthly report with ranking movements, traffic data, backlink profile updates and a roadmap for the next month — with a call to review progress.' },
  ];

  const faqs = [
    { q: 'How long does SEO take to show results?', a: 'SEO is a long-term strategy. Technical fixes and on-page optimisation can produce measurable ranking improvements within 4 to 8 weeks. Significant organic traffic growth typically takes 3 to 6 months for competitive keywords, and 6 to 12 months for highly competitive industries. We set realistic timelines upfront and track progress monthly — you always know exactly where you stand.' },
    { q: 'How much does SEO cost?', a: 'SEO pricing depends on the scope of work, competition in your industry and your current website state. We offer fixed-scope SEO packages and monthly retainer plans. Contact us for a free SEO audit and a tailored proposal — we will give you an honest estimate with clear deliverables and expected timelines before any commitment.' },
    { q: 'Do you guarantee Google rankings?', a: 'No reputable SEO agency can guarantee specific rankings — anyone who does is either misleading you or using tactics that risk Google penalties. What we guarantee is implementing industry best practices, transparent monthly reporting on ranking movements, and a clear strategy based on data. Our track record speaks for itself — we have helped clients achieve Page 1 rankings for competitive terms.' },
    { q: 'What is the difference between on-page and off-page SEO?', a: 'On-page SEO covers everything on your website — title tags, headings, content quality, internal linking, page speed and technical health. Off-page SEO covers signals from outside your website — primarily backlinks from other websites, brand mentions, social signals and digital PR coverage. Both are essential for ranking. We handle both as part of a holistic SEO strategy.' },
    { q: 'Do you do SEO for e-commerce websites?', a: 'Yes. E-commerce SEO is a specialist area we handle regularly — covering product page optimisation, category page SEO, product schema markup, review schema, faceted navigation issues, crawl budget management and shopping intent keyword strategy. We have helped e-commerce clients achieve significant organic revenue growth through SEO alone.' },
    { q: 'Can you help with local SEO for my business?', a: 'Yes. Local SEO is one of our strongest service areas. We optimise Google Business Profiles, build local citations, manage review generation strategies, implement LocalBusiness schema markup, create geo-targeted landing pages and track local keyword rankings. We have helped local businesses in Pakistan, UAE, UK and USA rank prominently for their local search terms.' },
    { q: 'Do you work on WordPress, Shopify and custom websites?', a: 'Yes. We have SEO experience across WordPress, Shopify, Wix, Webflow, Next.js, custom React websites and other platforms. Our technical SEO approach is platform-agnostic — we understand the SEO implications of each platform and implement the right solutions for each.' },
    { q: 'What SEO tools do you use?', a: 'We use Ahrefs for keyword research and backlink analysis, SEMrush for competitor research and rank tracking, Google Search Console for indexation and click data, Google Analytics 4 for traffic and conversion tracking, Screaming Frog for technical site crawls, PageSpeed Insights and Lighthouse for performance scoring and Schema Markup Validator for structured data testing.' },
  ];

  const colorMap = {
    purple: d ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-100 text-purple-600',
    blue:   d ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'      : 'bg-blue-50 border-blue-100 text-blue-600',
    green:  d ? 'bg-green-500/10 border-green-500/20 text-green-400'   : 'bg-green-50 border-green-100 text-green-600',
    amber:  d ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'   : 'bg-amber-50 border-amber-100 text-amber-600',
    indigo: d ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400': 'bg-indigo-50 border-indigo-100 text-indigo-600',
    red:    d ? 'bg-red-500/10 border-red-500/20 text-red-400'         : 'bg-red-50 border-red-100 text-red-600',
    cyan:   d ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'      : 'bg-cyan-50 border-cyan-100 text-cyan-600',
    orange: d ? 'bg-orange-500/10 border-orange-500/20 text-orange-400': 'bg-orange-50 border-orange-100 text-orange-600',
    pink:   d ? 'bg-pink-500/10 border-pink-500/20 text-pink-400'      : 'bg-pink-50 border-pink-100 text-pink-600',
  };

  const CtaStrip = ({ heading, sub }) => (
    <div className={`p-8 rounded-2xl border text-center ${d ? 'bg-purple-600/5 border-purple-500/15' : 'bg-purple-50 border-purple-100'}`}>
      <h3 className={`text-lg font-black mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{heading}</h3>
      <p className={`text-sm mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>{sub}</p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]">
          Get Free SEO Audit <ArrowRight size={13}/>
        </Link>
        <a href="https://wa.me/923348004300?text=Hi DevZore! I need SEO services."
          target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z"/></svg>
          WhatsApp
        </a>
        <Link to="/allservices" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl text-sm border transition-all ${d ? 'border-white/10 text-gray-300 hover:bg-white/[0.04]' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
          All Services
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>SEO Services | Technical SEO, On-Page SEO, Link Building | DevZore</title>
        <meta name="description" content="DevZore offers professional SEO services — technical SEO audit, on-page optimisation, keyword research, link building, local SEO, e-commerce SEO and monthly reporting. Trusted by clients worldwide. Free SEO audit available." />
        <link rel="canonical" href="https://devzore.com/seo-services" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DevZore" />
        <meta name="keywords" content="SEO services, technical SEO agency, on-page SEO optimisation, keyword research service, link building agency, local SEO services, e-commerce SEO, SEO audit service, Google ranking service, organic traffic growth, SEO company worldwide, affordable SEO services, SEO specialist for hire, website SEO optimisation, Core Web Vitals optimisation, Google Search Console setup, schema markup service, content SEO writing, SEO for small business, international SEO services" />
        <meta name="geo.region" content="PK-IS" />
        <meta name="geo.placename" content="Islamabad" />
        <meta name="geo.position" content="33.6844;73.0479" />
        <meta name="ICBM" content="33.6844, 73.0479" />
        <meta property="og:title" content="SEO Services | Technical SEO, On-Page SEO, Link Building | DevZore" />
        <meta property="og:description" content="Professional SEO services — technical audit, on-page optimisation, keyword research, link building, local SEO and monthly reporting. Free audit available." />
        <meta property="og:url" content="https://devzore.com/seo-services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://devzore.com/logo1.png" />
        <meta property="og:site_name" content="DevZore" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEO Services | DevZore" />
        <meta name="twitter:description" content="Technical SEO, on-page optimisation, link building and local SEO. Free audit from DevZore." />
        <meta name="twitter:image" content="https://devzore.com/logo1.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "SEO Services",
          "alternateName": ["Technical SEO Agency", "On-Page SEO Service", "Link Building Agency", "SEO Audit Service"],
          "description": "DevZore provides professional SEO services including technical SEO audit, on-page optimisation, keyword research, link building, local SEO, e-commerce SEO and monthly analytics reporting.",
          "url": "https://devzore.com/seo-services",
          "provider": { "@type": "Organization", "name": "DevZore", "url": "https://devzore.com", "telephone": "+92-334-8004300", "email": "hellodevzore@gmail.com", "address": { "@type": "PostalAddress", "addressLocality": "Islamabad", "addressCountry": "PK" }, "areaServed": "Worldwide" },
          "serviceType": "Search Engine Optimisation",
          "areaServed": "Worldwide"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://devzore.com" },
            { "@type": "ListItem", "position": 2, "name": "All Services", "item": "https://devzore.com/allservices" },
            { "@type": "ListItem", "position": 3, "name": "SEO Services", "item": "https://devzore.com/seo-services" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How DevZore Delivers SEO Services",
          "description": "DevZore's 6-step SEO process from audit to monthly reporting.",
          "step": process.map(p => ({ "@type": "HowToStep", "name": p.title, "text": p.desc }))
        })}</script>
      </Helmet>

      <main className={`min-h-screen transition-colors duration-300 ${d ? 'bg-[#030303]' : 'bg-white'}`}>

        {/* Hero */}
        <section aria-labelledby="seo-heading" className={`pt-28 pb-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"/> SEO Services
                  </div>
                  <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold border ${d ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-green-50 border-green-200 text-green-700'}`}>
                    <Globe size={10}/> Worldwide Clients
                  </div>
                </div>

                <h1 id="seo-heading" className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                  SEO Services That{' '}
                  <span className="text-purple-600">Rank, Drive Traffic and Convert</span>
                </h1>

                <h2 className={`text-lg font-semibold mb-5 ${d ? 'text-gray-300' : 'text-gray-700'}`}>
                  Technical SEO · On-Page SEO · Keyword Research · Link Building · Local SEO · E-Commerce SEO
                </h2>

                <p className={`text-base leading-relaxed mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  DevZore provides professional SEO services for businesses worldwide —
                  from technical SEO audits and on-page optimisation to keyword strategy,
                  white-hat link building, local SEO and monthly performance reporting.
                  We help websites rank higher on Google, attract qualified organic traffic
                  and convert visitors into customers through search engine optimisation.
                </p>

                <p className={`text-base leading-relaxed mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  Our own website — devzore.com — achieves Ahrefs Health Score 93, PageSpeed
                  SEO Score 100/100, Lighthouse SEO 100/100 and structured data across all
                  service pages. We practise exactly what we preach and apply the same
                  standards to every client website we optimise.
                </p>

                <p className={`text-base leading-relaxed mb-8 ${d ? 'text-gray-500' : 'text-gray-500'}`}>
                  We have delivered SEO results for clients across USA, UK, UAE, Canada,
                  Australia, Qatar, Saudi Arabia and Pakistan — covering SaaS, e-commerce,
                  healthcare, real estate, travel, education and professional services.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {[
                    { val: '180%', label: 'Avg Traffic Growth' },
                    { val: 'Top 3', label: 'Rankings Achieved' },
                    { val: '98/100', label: 'Ahrefs Health' },
                    { val: '100', label: 'PageSpeed SEO' },
                  ].map((s, i) => (
                    <div key={i} className={`p-3 rounded-xl border text-center ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-gray-50 border-gray-200'}`}>
                      <div className="text-[18px] font-black text-purple-500">{s.val}</div>
                      <div className={`text-[10px] ${d ? 'text-gray-500' : 'text-gray-400'}`}>{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mb-4">
                  <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                    Get Free SEO Audit <ArrowRight size={14}/>
                  </Link>
                  <a href="https://wa.me/923348004300?text=Hi DevZore! I need SEO services for my website."
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z"/></svg>
                    WhatsApp Us
                  </a>
                  <Link to="/allservices" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`flex items-center gap-2 px-5 py-3 font-bold rounded-xl text-sm border transition-all ${d ? 'border-white/10 text-gray-300 hover:bg-white/[0.04]' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                    All Services
                  </Link>
                </div>
                <p className={`text-[12px] ${d ? 'text-gray-600' : 'text-gray-400'}`}>
                  ⚡ Free SEO audit · No guarantees of specific rankings · White-hat only · Monthly reporting
                </p>
              </div>

              {/* Right panel */}
              <div className={`p-8 rounded-3xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
                <p className={`text-[11px] font-black uppercase tracking-widest mb-6 ${d ? 'text-gray-500' : 'text-gray-400'}`}>
                  What Our SEO Service Covers
                </p>
                <div className="space-y-3">
                  {[
                    { item: 'Technical SEO Audit & Implementation',    note: 'Speed, crawlability, indexation, Core Web Vitals' },
                    { item: 'On-Page SEO Optimisation',                note: 'Title tags, headings, content, internal links, schema' },
                    { item: 'Keyword Research & Strategy',             note: 'Primary, long-tail, competitor gap analysis' },
                    { item: 'SEO Content Writing',                     note: 'Blog posts, pillar pages, service pages, FAQs' },
                    { item: 'White-Hat Link Building',                 note: 'Guest posts, digital PR, resource links, HARO' },
                    { item: 'Local SEO & Google Business Profile',     note: 'GBP optimisation, citations, review strategy' },
                    { item: 'E-Commerce SEO',                          note: 'Product pages, category SEO, product schema' },
                    { item: 'Mobile SEO & Core Web Vitals',            note: 'LCP, CLS, INP optimisation, PageSpeed 90+' },
                    { item: 'Monthly SEO Analytics & Reporting',       note: 'Rankings, traffic, conversions, backlinks' },
                    { item: 'Google Search Console Management',        note: 'Indexation requests, error fixes, CTR optimisation' },
                  ].map((item, i) => (
                    <div key={i} className={`flex items-start gap-3 pb-2.5 border-b last:border-0 ${d ? 'border-white/[0.05]' : 'border-gray-100'}`}>
                      <CheckCircle size={13} className="text-purple-500 flex-shrink-0 mt-0.5"/>
                      <div>
                        <p className={`text-[12px] font-bold ${d ? 'text-white' : 'text-gray-900'}`}>{item.item}</p>
                        <p className={`text-[10px] ${d ? 'text-gray-500' : 'text-gray-400'}`}>{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mid CTA */}
        <div className={`py-6 border-b ${d ? 'border-white/[0.06] bg-purple-600/5' : 'border-gray-100 bg-purple-50'}`}>
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className={`font-black text-base ${d ? 'text-white' : 'text-gray-900'}`}>Is your website invisible on Google?</p>
              <p className={`text-sm ${d ? 'text-gray-400' : 'text-gray-600'}`}>Free SEO audit — we will identify exactly what is holding your rankings back</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm">
                Free SEO Audit <ArrowRight size={13}/>
              </Link>
              <a href="https://wa.me/923348004300" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] font-bold rounded-xl text-sm">
                WhatsApp <ArrowRight size={13}/>
              </a>
            </div>
          </div>
        </div>

        {/* SEO Types */}
        <section aria-labelledby="seotypes-heading" className={`py-20 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="seotypes-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                Types of SEO We Cover
              </h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                A complete, multi-discipline SEO approach — every factor Google uses to rank websites
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {seoTypes.map((type, i) => (
                <div key={i} className={`p-5 rounded-2xl border transition-all hover:border-purple-500/25 ${d ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]' : 'bg-white border-gray-200 hover:shadow-sm'}`}>
                  <div className="text-2xl mb-3">{type.icon}</div>
                  <h3 className={`text-[13px] font-bold mb-1.5 ${d ? 'text-white' : 'text-gray-900'}`}>{type.title}</h3>
                  <p className={`text-[11px] leading-relaxed ${d ? 'text-gray-500' : 'text-gray-500'}`}>{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section aria-labelledby="services-heading" className={`py-20 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 id="services-heading" className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                SEO Services We Offer
              </h2>
              <p className={`text-base leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                Every SEO service your website needs to rank on Google, attract organic traffic and convert visitors into customers.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((item, i) => (
                <div key={i} className={`p-6 rounded-2xl border transition-all hover:border-purple-500/25 ${d ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]' : 'bg-white border-gray-200 hover:shadow-sm'}`}>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${colorMap[item.color]}`}>{item.icon}</div>
                  <h3 className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                  <p className={`text-[13px] leading-relaxed mb-4 ${d ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                  <ul className="space-y-1.5">
                    {item.includes.map((pt, j) => (
                      <li key={j} className={`flex items-center gap-2 text-[11px] ${d ? 'text-gray-500' : 'text-gray-500'}`}>
                        <CheckCircle size={11} className="text-purple-500 flex-shrink-0"/>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section aria-labelledby="results-heading" className={`py-20 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="results-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                SEO Results We Have Delivered
              </h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                Real results from real SEO campaigns — including our own devzore.com
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {results.map((r, i) => (
                <div key={i} className={`p-6 rounded-2xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-gray-200'}`}>
                  <div className="text-3xl font-black text-purple-500 mb-1">{r.metric}</div>
                  <p className={`text-[14px] font-bold mb-1 ${d ? 'text-white' : 'text-gray-900'}`}>{r.label}</p>
                  <p className={`text-[12px] ${d ? 'text-gray-400' : 'text-gray-600'}`}>{r.desc}</p>
                </div>
              ))}
            </div>
            <CtaStrip heading="Want to see these results for your website?" sub="Free SEO audit. We will identify your biggest ranking opportunities and show you a clear action plan." />
          </div>
        </section>

        {/* Tools */}
        <section aria-labelledby="tools-heading" className={`py-20 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="tools-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>SEO Tools We Use</h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>Industry-leading SEO tools for accurate data and actionable insights</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {tools.map((tool, i) => (
                <div key={i} className={`p-5 rounded-2xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-gray-200'}`}>
                  <div className="text-2xl mb-2">{tool.icon}</div>
                  <p className={`text-[13px] font-bold mb-1 ${d ? 'text-white' : 'text-gray-900'}`}>{tool.name}</p>
                  <p className={`text-[11px] ${d ? 'text-gray-500' : 'text-gray-400'}`}>{tool.use}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section aria-labelledby="process-heading" className={`py-20 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="process-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                How Our SEO Process Works
              </h2>
              <p className={`text-base max-w-2xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                From audit to ongoing monthly SEO — a transparent, data-driven process with no black boxes
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {process.map((step, i) => (
                <div key={i} className={`p-6 rounded-2xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-gray-200'}`}>
                  <div className={`text-[13px] font-black mb-3 ${d ? 'text-purple-400' : 'text-purple-600'}`}>{step.n}</div>
                  <h3 className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
                  <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>{step.desc}</p>
                </div>
              ))}
            </div>
            <CtaStrip heading="Ready to start your SEO journey?" sub="Free audit, honest timeline, transparent monthly reporting. No guarantees of specific rankings — only best practices and real effort." />
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className={`py-20 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="faq-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>SEO Services FAQ</h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>Common questions about our SEO services</p>
            </div>
            <div className="space-y-3 mb-10">
              {faqs.map((faq, i) => (
                <div key={i} className={`rounded-xl border overflow-hidden transition-all duration-300 ${activeFaq === i ? d ? 'border-purple-500/40 bg-purple-600/5' : 'border-purple-200 bg-purple-50/50' : d ? 'border-white/[0.06] bg-white/[0.02]' : 'border-gray-200 bg-white'}`}>
                  <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} aria-expanded={activeFaq === i}
                    className="w-full p-5 text-left flex items-start justify-between gap-4">
                    <span className={`text-[14px] font-bold ${activeFaq === i ? 'text-purple-500' : d ? 'text-white' : 'text-gray-900'}`}>{faq.q}</span>
                    <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center ${activeFaq === i ? 'bg-purple-600 text-white' : d ? 'bg-white/[0.06] text-gray-500' : 'bg-gray-100 text-gray-500'}`}>
                      {activeFaq === i ? <Minus size={13}/> : <Plus size={13}/>}
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className={`px-5 pb-5 pt-0 border-t text-[14px] leading-relaxed ${d ? 'border-white/[0.06] text-gray-400' : 'border-purple-100 text-gray-600'}`}>
                      <p className="pt-4">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <CtaStrip heading="Still have SEO questions?" sub="Talk to us directly — free consultation, honest answers. We respond within 24 hours." />
          </div>
        </section>

        {/* Internal Links */}
        <section aria-label="Related services" className={`py-12 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <p className={`text-[11px] font-black uppercase tracking-widest mb-5 ${d ? 'text-gray-600' : 'text-gray-400'}`}>Related Services</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Digital Marketing',        path: '/digital-marketing' },
                { label: 'Web Development',           path: '/web-development' },
                { label: 'Content Marketing',         path: '/digital-marketing' },
                { label: 'UI/UX Design',              path: '/ui-ux-design' },
                { label: 'E-Commerce Development',    path: '/ecommerce' },
                { label: 'MERN Stack Development',    path: '/mern-stack-development' },
                { label: 'Startup MVP Development',   path: '/startup-mvp' },
                { label: 'Maintenance & Support',     path: '/maintenance' },
                { label: 'All Services',              path: '/allservices' },
              ].map((link, i) => (
                <Link key={i} to={link.path} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`flex items-center gap-1.5 text-[12px] font-semibold px-4 py-2 rounded-lg border transition-all ${d ? 'bg-white/[0.03] border-white/[0.08] text-gray-400 hover:border-purple-500/30 hover:text-purple-400' : 'bg-white border-gray-200 text-gray-600 hover:border-purple-200 hover:text-purple-700'}`}>
                  {link.label} <ExternalLink size={10}/>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className={`p-10 rounded-3xl border text-center ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
              <h2 className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                Ready to Rank Higher on Google?
              </h2>
              <p className={`text-base mb-3 max-w-xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                Free SEO audit. Technical fixes, on-page optimisation, keyword strategy, link building and monthly reporting — all included. White-hat only. No shortcuts.
              </p>
              <p className={`text-[13px] mb-8 ${d ? 'text-gray-600' : 'text-gray-400'}`}>
                Technical SEO · On-Page · Link Building · Local SEO · E-Commerce SEO · Content · Ahrefs · GSC
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]">
                  Get Free SEO Audit <ArrowRight size={15}/>
                </Link>
                <a href="https://wa.me/923348004300?text=Hi DevZore! I need SEO services for my website."
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z"/></svg>
                  WhatsApp Now
                </a>
                <Link to="/allservices" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-sm border transition-all ${d ? 'border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]' : 'border-gray-200 text-gray-700 hover:border-gray-300'}`}>
                  View All Services <ArrowRight size={15}/>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SEO + AI Hidden */}
        <div className="sr-only" aria-hidden="false">
          <h2>SEO Services — DevZore</h2>
          <p>DevZore provides professional SEO services worldwide including technical SEO audit and implementation, on-page SEO optimisation, keyword research and strategy, white-hat link building, local SEO and Google Business Profile optimisation, e-commerce SEO, mobile SEO and Core Web Vitals optimisation, SEO content writing and monthly analytics reporting. We use Ahrefs, SEMrush, Google Search Console, Google Analytics 4, Screaming Frog and Lighthouse. Our own website devzore.com achieves Ahrefs Health Score 93, PageSpeed SEO 100/100 and Lighthouse SEO 100/100.</p>
          <h2>SEO Services We Offer</h2>
          {services.map((s, i) => <div key={i}><h3>{s.title}</h3><p>{s.desc}</p></div>)}
          <h2>SEO FAQ</h2>
          {faqs.map((f, i) => <div key={i}><h3>{f.q}</h3><p>{f.a}</p></div>)}
          <h2>SEO Process</h2>
          {process.map((p, i) => <div key={i}><h3>{p.title}</h3><p>{p.desc}</p></div>)}
          <p>Primary Keywords: SEO services, technical SEO agency, on-page SEO, keyword research service, link building agency, local SEO, e-commerce SEO, SEO audit service, Google ranking service, organic traffic growth, SEO company worldwide, affordable SEO, Core Web Vitals optimisation, schema markup service, content SEO.</p>
          <p>Long-tail Keywords: how long does SEO take, best SEO agency worldwide, technical SEO audit service, white-hat link building agency, local SEO for small business, e-commerce SEO company, Core Web Vitals optimisation service, Google Search Console setup service, SEO content writing company, monthly SEO retainer service.</p>
          <p>AI Search: Who provides SEO services? Best SEO agency worldwide. How much does SEO cost? Who does technical SEO audits? Best link building agency. Local SEO service for small business. How to improve Google rankings. SEO company with good reviews. Who manages Google Search Console. Core Web Vitals optimisation service.</p>
        </div>
      </main>
    </>
  );
};

export default SeoServices;
