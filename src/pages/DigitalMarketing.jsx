import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Share2,
  PenTool,
  Target,
  MousePointer,
  DollarSign,
  Mail,
  BarChart3,
  Video,
  Activity,
  Plus,
  Minus,
  ShoppingCart,
  Search,
} from 'lucide-react';

const DigitalMarketing = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  const whatsappUrl =
    'https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20digital%20marketing%20services.';

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      icon: <Share2 size={22} />,
      color: 'purple',
      title: 'Social Media Management',
      desc: 'Social media planning and management for businesses that want a consistent presence across relevant digital platforms.',
      includes: [
        'Content calendar planning',
        'Post scheduling and publishing',
        'Community management support',
        'Hashtag and topic research',
        'Competitor content review',
        'Performance reporting',
      ],
    },
    {
      icon: <PenTool size={22} />,
      color: 'pink',
      title: 'Social Media Content Creation',
      desc: 'Branded social media content designed around your business, audience and platform requirements.',
      includes: [
        'Branded post design',
        'Carousel and infographic content',
        'Story and Reel covers',
        'Caption copywriting',
        'Platform-specific content sizes',
        'Brand consistency',
      ],
    },
    {
      icon: <Target size={22} />,
      color: 'blue',
      title: 'Meta Ads Management',
      desc: 'Facebook and Instagram advertising campaigns planned around your audience, offer and marketing objectives.',
      includes: [
        'Facebook and Instagram campaigns',
        'Audience research and targeting',
        'Creative and copy testing',
        'Retargeting campaigns',
        'Meta Pixel and event setup',
        'Campaign performance reporting',
      ],
    },
    {
      icon: <MousePointer size={22} />,
      color: 'green',
      title: 'Google Ads & PPC Management',
      desc: 'Google Ads campaign setup and management focused on reaching people actively searching for relevant products or services.',
      includes: [
        'Google Search campaigns',
        'Display campaign support',
        'Keyword research',
        'Negative keyword management',
        'Conversion tracking',
        'Campaign optimisation',
      ],
    },
    {
      icon: <DollarSign size={22} />,
      color: 'amber',
      title: 'Lead Generation Campaigns',
      desc: 'Digital lead generation campaigns combining advertising, landing pages and conversion tracking around your business goals.',
      includes: [
        'Lead generation strategy',
        'Landing page recommendations',
        'Lead form campaigns',
        'Meta lead generation ads',
        'Google lead campaigns',
        'Lead tracking setup',
      ],
    },
    {
      icon: <Mail size={22} />,
      color: 'cyan',
      title: 'Email Marketing',
      desc: 'Email campaigns and automated sequences designed to help businesses communicate with leads, customers and subscribers.',
      includes: [
        'Email campaign planning',
        'Audience segmentation',
        'Welcome sequences',
        'Newsletter campaigns',
        'Promotional emails',
        'Performance tracking',
      ],
    },
    {
      icon: <BarChart3 size={22} />,
      color: 'indigo',
      title: 'Content Marketing',
      desc: 'Useful digital content built around customer questions, search intent and your wider marketing strategy.',
      includes: [
        'Content strategy',
        'Topic research',
        'Blog content planning',
        'SEO-focused content support',
        'Case study content',
        'Content distribution planning',
      ],
    },
    {
      icon: <Video size={22} />,
      color: 'red',
      title: 'Video Content & Reels',
      desc: 'Short-form video planning and editing support for social media channels such as Instagram, TikTok and YouTube.',
      includes: [
        'Video content planning',
        'Reels and short-form videos',
        'Video scripting support',
        'Caption and subtitle editing',
        'Branded visual elements',
        'Platform format optimisation',
      ],
    },
    {
      icon: <Activity size={22} />,
      color: 'orange',
      title: 'Analytics & Performance Reporting',
      desc: 'Marketing measurement and reporting focused on understanding campaign activity, traffic, leads and conversion behaviour.',
      includes: [
        'Google Analytics support',
        'Conversion tracking',
        'Campaign reporting',
        'Traffic analysis',
        'Lead performance review',
        'Marketing recommendations',
      ],
    },
  ];

  const platforms = [
    {
      name: 'Instagram',
      icon: '📸',
      desc: 'Posts, Reels, Stories and advertising',
    },
    {
      name: 'Facebook',
      icon: '👥',
      desc: 'Pages, content, advertising and lead generation',
    },
    {
      name: 'TikTok',
      icon: '🎵',
      desc: 'Short-form video content and advertising',
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      desc: 'B2B content and professional marketing',
    },
    {
      name: 'YouTube',
      icon: '▶️',
      desc: 'Video content, Shorts and advertising',
    },
    {
      name: 'Google',
      icon: '🔍',
      desc: 'Search, Display and PPC advertising',
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      desc: 'Business communication and lead follow-up',
    },
    {
      name: 'Email',
      icon: '✉️',
      desc: 'Campaigns, newsletters and automation',
    },
  ];

  const marketingFocus = [
    {
      icon: <Target size={19} />,
      title: 'Audience Targeting',
      desc: 'Build campaigns around relevant audiences, customer intent and business objectives.',
    },
    {
      icon: <PenTool size={19} />,
      title: 'Creative Content',
      desc: 'Develop content and advertising creatives that communicate your offer clearly.',
    },
    {
      icon: <BarChart3 size={19} />,
      title: 'Performance Tracking',
      desc: 'Measure campaign activity with analytics, conversion tracking and reporting.',
    },
    {
      icon: <RefreshCwIcon />,
      title: 'Campaign Optimisation',
      desc: 'Review campaign data and refine targeting, creatives and other campaign elements.',
    },
  ];

  const process = [
    {
      n: '01',
      title: 'Business & Marketing Review',
      desc: 'We review your business, target audience, current digital presence, offers, competitors and existing marketing activity.',
    },
    {
      n: '02',
      title: 'Marketing Strategy',
      desc: 'We identify suitable channels and define a practical marketing approach based on your goals, audience and available budget.',
    },
    {
      n: '03',
      title: 'Content & Campaign Preparation',
      desc: 'Marketing content, advertising creatives, campaign copy and required assets are prepared for the selected channels.',
    },
    {
      n: '04',
      title: 'Tracking & Campaign Launch',
      desc: 'Relevant analytics and conversion tracking are reviewed or configured before campaigns are launched where appropriate.',
    },
    {
      n: '05',
      title: 'Monitoring & Optimisation',
      desc: 'Campaign activity is reviewed and adjustments can be made to targeting, content, creative assets, keywords or budget allocation.',
    },
    {
      n: '06',
      title: 'Reporting & Next Steps',
      desc: 'Performance information is summarised so you can understand campaign activity and discuss future marketing priorities.',
    },
  ];

  const faqs = [
    {
      q: 'What digital marketing services does DevZore provide?',
      a: 'DevZore can help with social media management, social media content creation, Meta Ads, Facebook and Instagram advertising, Google Ads, PPC management, lead generation campaigns, email marketing, content marketing, short-form video content and marketing analytics.',
    },
    {
      q: 'Can DevZore manage social media for my business?',
      a: 'Yes. Social media support can include content planning, branded post creation, scheduling, captions, community management support and performance reporting. The exact scope depends on the platforms and posting requirements of your business.',
    },
    {
      q: 'Do you provide Facebook and Instagram Ads management?',
      a: 'Yes. Meta Ads services can include campaign planning, audience research, ad setup, creative testing, retargeting, conversion tracking and ongoing campaign optimisation for Facebook and Instagram.',
    },
    {
      q: 'Do you provide Google Ads and PPC management?',
      a: 'Yes. We can support Google Search and other suitable advertising campaigns, including keyword research, campaign setup, negative keywords, conversion tracking and ongoing performance reviews.',
    },
    {
      q: 'Can you help generate leads for my business?',
      a: 'Yes. Depending on the business, lead generation can combine paid advertising, lead forms, landing pages, conversion tracking and follow-up processes. The strategy depends on your audience, offer, market and budget.',
    },
    {
      q: 'How much do digital marketing services cost?',
      a: 'Digital marketing pricing depends on the services required, number of platforms, campaign scope, content volume and advertising requirements. After understanding your goals, DevZore can provide a tailored scope and proposal.',
    },
    {
      q: 'How long does digital marketing take to produce results?',
      a: 'There is no fixed timeline that applies to every campaign. Paid advertising can begin generating traffic after launch, while organic social media, content marketing and audience development generally require consistent work over time. Results depend on factors such as competition, offer quality, budget, targeting and market demand.',
    },
    {
      q: 'Can you create social media posts and video content?',
      a: 'Yes. Content support can include branded graphics, carousel posts, captions, Reels or short-form video planning, video editing, subtitles and platform-specific creative formats.',
    },
    {
      q: 'Do you provide email marketing services?',
      a: 'Yes. Email marketing can include newsletters, promotional campaigns, audience segmentation and automated sequences depending on your platform and marketing requirements.',
    },
    {
      q: 'How do you measure digital marketing performance?',
      a: 'The metrics depend on the campaign objective. Relevant measurements can include website traffic, enquiries, leads, conversion activity, cost per lead, advertising spend, engagement and other campaign-specific performance indicators.',
    },
    {
      q: 'Can you work with businesses outside Pakistan?',
      a: 'DevZore offers digital marketing services remotely, so businesses in different locations can discuss their requirements with our team. The exact campaign approach is adapted to the target market and audience.',
    },
    {
      q: 'Do you guarantee leads, sales or advertising results?',
      a: 'No responsible digital marketing provider can guarantee a specific number of leads, sales or return from every campaign. Performance depends on many factors including the offer, market, competition, budget, website experience and customer demand. Our focus is on structured execution, measurement and ongoing improvement.',
    },
  ];

  const relatedServices = [
    {
      icon: <Search size={22} />,
      title: 'SEO Services',
      desc: 'Technical, on-page and content-focused SEO support to improve search visibility and organic discoverability.',
      path: '/seo-services',
    },
    {
      icon: <Globe size={22} />,
      title: 'Web Development',
      desc: 'Professional websites and web applications designed around business requirements and user experience.',
      path: '/web-development',
    },
    {
      icon: <ShoppingCart size={22} />,
      title: 'E-Commerce Development',
      desc: 'E-commerce websites and online store development with product, checkout and business workflow support.',
      path: '/ecommerce',
    },
  ];

  const colorMap = {
    purple: d
      ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
      : 'bg-purple-50 border-purple-100 text-purple-600',
    pink: d
      ? 'bg-pink-500/10 border-pink-500/20 text-pink-400'
      : 'bg-pink-50 border-pink-100 text-pink-600',
    blue: d
      ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
      : 'bg-blue-50 border-blue-100 text-blue-600',
    green: d
      ? 'bg-green-500/10 border-green-500/20 text-green-400'
      : 'bg-green-50 border-green-100 text-green-600',
    amber: d
      ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'
      : 'bg-amber-50 border-amber-100 text-amber-600',
    cyan: d
      ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
      : 'bg-cyan-50 border-cyan-100 text-cyan-600',
    indigo: d
      ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
      : 'bg-indigo-50 border-indigo-100 text-indigo-600',
    red: d
      ? 'bg-red-500/10 border-red-500/20 text-red-400'
      : 'bg-red-50 border-red-100 text-red-600',
    orange: d
      ? 'bg-orange-500/10 border-orange-500/20 text-orange-400'
      : 'bg-orange-50 border-orange-100 text-orange-600',
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
        className={`text-xl font-black mb-2 ${
          d ? 'text-white' : 'text-gray-900'
        }`}
      >
        {heading}
      </h3>

      <p
        className={`text-sm mb-6 ${
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
          Discuss Your Marketing Goals
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
          className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl text-sm border transition-all ${
            d
              ? 'border-white/10 text-gray-300 hover:bg-white/[0.04]'
              : 'border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          All Services
          <ArrowRight size={14} />
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
            '@id': 'https://devzore.com/digital-marketing#service',
            name: 'Digital Marketing Services',
            description:
              'Digital marketing services including social media management, Meta Ads, Google Ads, PPC management, lead generation, email marketing, content marketing and campaign analytics.',
            url: 'https://devzore.com/digital-marketing',
            serviceType: 'Digital Marketing Services',
            provider: {
              '@id': 'https://devzore.com/#organization',
            },
            areaServed: 'Worldwide',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Digital Marketing Services',
              itemListElement: services.map((service) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: service.title,
                  description: service.desc,
                },
              })),
            },
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
                name: 'Digital Marketing',
                item: 'https://devzore.com/digital-marketing',
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
          aria-labelledby="digital-marketing-heading"
          className={`pt-28 pb-16 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${
                      d
                        ? 'bg-purple-600/10 border-purple-500/20 text-purple-400'
                        : 'bg-purple-50 border-purple-200 text-purple-700'
                    }`}
                  >
                    <BarChart3 size={12} />
                    Digital Marketing
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
                  id="digital-marketing-heading"
                  className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5 ${
                    d ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Digital Marketing Services{' '}
                  <span className="text-purple-600">
                    Built Around Your Business Goals
                  </span>
                </h1>

                <p
                  className={`text-lg font-semibold mb-5 ${
                    d ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Social Media · Meta Ads · Google Ads · PPC · Lead Generation ·
                  Email Marketing · Content
                </p>

                <p
                  className={`text-base leading-relaxed mb-5 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  DevZore provides digital marketing services for businesses
                  that want a structured approach to social media, paid
                  advertising, lead generation, content and campaign
                  measurement.
                </p>

                <p
                  className={`text-base leading-relaxed mb-8 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  We can help plan and manage Facebook and Instagram Ads,
                  Google Ads, social media content, email campaigns and digital
                  lead generation while using analytics and conversion tracking
                  to understand campaign performance.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {[
                    {
                      icon: <Target size={18} />,
                      title: 'Paid Ads',
                      label: 'Meta & Google',
                    },
                    {
                      icon: <Share2 size={18} />,
                      title: 'Social Media',
                      label: 'Content & management',
                    },
                    {
                      icon: <DollarSign size={18} />,
                      title: 'Lead Generation',
                      label: 'Campaign focused',
                    },
                    {
                      icon: <BarChart3 size={18} />,
                      title: 'Analytics',
                      label: 'Track performance',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className={`p-4 rounded-xl border ${
                        d
                          ? 'bg-white/[0.02] border-white/[0.06]'
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="text-purple-500 mb-2">{item.icon}</div>

                      <div
                        className={`text-sm font-black ${
                          d ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {item.title}
                      </div>

                      <div
                        className={`text-[10px] mt-1 ${
                          d ? 'text-gray-500' : 'text-gray-500'
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
                    Discuss Your Marketing Goals
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

              {/* Right panel */}
              <div
                className={`p-7 lg:p-8 rounded-3xl border ${
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
                  Digital Marketing Capabilities
                </p>

                <div className="space-y-3">
                  {[
                    {
                      title: 'Social Media Marketing',
                      desc: 'Content planning, publishing and audience communication.',
                    },
                    {
                      title: 'Meta Ads Management',
                      desc: 'Facebook and Instagram advertising campaigns.',
                    },
                    {
                      title: 'Google Ads & PPC',
                      desc: 'Search advertising and keyword-focused campaigns.',
                    },
                    {
                      title: 'Lead Generation',
                      desc: 'Campaigns designed around enquiries and customer acquisition.',
                    },
                    {
                      title: 'Email Marketing',
                      desc: 'Newsletters, promotional campaigns and automated sequences.',
                    },
                    {
                      title: 'Analytics & Tracking',
                      desc: 'Campaign measurement and conversion visibility.',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className={`flex items-start gap-3 p-4 rounded-xl border ${
                        d
                          ? 'bg-white/[0.02] border-white/[0.05]'
                          : 'bg-white border-gray-100'
                      }`}
                    >
                      <CheckCircle
                        size={15}
                        className="text-purple-500 flex-shrink-0 mt-0.5"
                      />

                      <div>
                        <p
                          className={`text-[13px] font-bold mb-1 ${
                            d ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {item.title}
                        </p>

                        <p
                          className={`text-[11px] leading-relaxed ${
                            d ? 'text-gray-500' : 'text-gray-500'
                          }`}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className={`mt-5 p-4 rounded-xl ${
                    d ? 'bg-purple-500/10' : 'bg-purple-50'
                  }`}
                >
                  <p
                    className={`text-[12px] font-semibold text-center ${
                      d ? 'text-purple-300' : 'text-purple-700'
                    }`}
                  >
                    Marketing channels can be selected according to your
                    audience, business model and campaign objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          aria-labelledby="marketing-services-heading"
          className={`py-16 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <p className="text-purple-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                Marketing Services
              </p>

              <h2
                id="marketing-services-heading"
                className={`text-3xl font-black mb-4 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Digital Marketing Services We Offer
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Choose individual marketing services or combine multiple
                channels into a broader digital marketing strategy based on
                your requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((item) => (
                <div
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
                    className={`text-[14px] font-bold mb-2 ${
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

                  <div className="space-y-2">
                    {item.includes.map((feature) => (
                      <div
                        key={feature}
                        className={`flex items-start gap-2 text-[11px] ${
                          d ? 'text-gray-500' : 'text-gray-500'
                        }`}
                      >
                        <CheckCircle
                          size={11}
                          className="text-purple-500 flex-shrink-0 mt-0.5"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section
          aria-labelledby="platforms-heading"
          className={`py-16 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-purple-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                Marketing Channels
              </p>

              <h2
                id="platforms-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Marketing Platforms & Channels We Work With
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                The right platform depends on where your customers are and what
                you want your marketing campaigns to achieve.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className={`p-5 rounded-2xl border transition-all hover:border-purple-500/25 ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                      : 'bg-white border-gray-200 hover:shadow-sm'
                  }`}
                >
                  <div className="text-2xl mb-3">{platform.icon}</div>

                  <p
                    className={`text-[13px] font-bold mb-1 ${
                      d ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {platform.name}
                  </p>

                  <p
                    className={`text-[11px] leading-relaxed ${
                      d ? 'text-gray-500' : 'text-gray-500'
                    }`}
                  >
                    {platform.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marketing approach */}
        <section
          aria-labelledby="approach-heading"
          className={`py-16 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-purple-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                Marketing Approach
              </p>

              <h2
                id="approach-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Creative Marketing Supported by Campaign Data
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Our approach combines audience research, content, advertising
                and performance measurement instead of treating each marketing
                channel in isolation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {marketingFocus.map((item) => (
                <div
                  key={item.title}
                  className={`p-6 rounded-2xl border ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06]'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                      d
                        ? 'bg-purple-500/10 text-purple-400'
                        : 'bg-purple-50 text-purple-600'
                    }`}
                  >
                    {item.icon}
                  </div>

                  <h3
                    className={`text-sm font-bold mb-2 ${
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
              heading="Looking for a digital marketing partner?"
              sub="Tell us about your business, audience and marketing goals so we can discuss which channels may fit your requirements."
            />
          </div>
        </section>

        {/* Process */}
        <section
          aria-labelledby="process-heading"
          className={`py-16 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-purple-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                Our Process
              </p>

              <h2
                id="process-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                How Our Digital Marketing Process Works
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                A structured workflow from understanding your business to
                launching, measuring and improving marketing campaigns.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {process.map((step) => (
                <div
                  key={step.n}
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

            <CtaStrip
              heading="Ready to discuss your marketing strategy?"
              sub="Share your current marketing activity, target audience and business objectives with DevZore."
            />
          </div>
        </section>

        {/* Search intent */}
        <section
          className={`py-16 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-purple-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                  Digital Growth
                </p>

                <h2
                  className={`text-3xl font-black mb-4 ${
                    d ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Social Media, Meta Ads, Google Ads & Lead Generation
                </h2>

                <p
                  className={`text-base leading-relaxed mb-6 ${
                    d ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Digital marketing can combine paid advertising, organic
                  content, social media management, search campaigns, email
                  marketing and analytics. The right combination depends on
                  your customers, offer and business objectives.
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    'Digital Marketing Services',
                    'Social Media Marketing',
                    'Social Media Management',
                    'Meta Ads Management',
                    'Facebook Ads',
                    'Instagram Ads',
                    'Google Ads',
                    'PPC Management',
                    'Lead Generation',
                    'Email Marketing',
                    'Content Marketing',
                    'Marketing Analytics',
                  ].map((item) => (
                    <span
                      key={item}
                      className={`text-[11px] font-semibold px-3 py-1.5 rounded-lg border ${
                        d
                          ? 'bg-white/[0.03] border-white/[0.08] text-gray-300'
                          : 'bg-white border-gray-200 text-gray-700'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`p-7 rounded-2xl border ${
                  d
                    ? 'bg-white/[0.02] border-white/[0.06]'
                    : 'bg-white border-gray-200'
                }`}
              >
                <h3
                  className={`text-lg font-black mb-5 ${
                    d ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Digital Marketing Can Support
                </h3>

                <div className="space-y-3">
                  {[
                    'Business and service enquiries',
                    'Online store marketing',
                    'Brand awareness campaigns',
                    'Social media presence',
                    'Paid traffic acquisition',
                    'Lead generation campaigns',
                    'Customer communication',
                    'Marketing performance measurement',
                  ].map((item) => (
                    <div
                      key={item}
                      className={`flex items-center gap-3 text-sm ${
                        d ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      <CheckCircle
                        size={14}
                        className="text-purple-500 flex-shrink-0"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          aria-labelledby="faq-heading"
          className={`py-16 border-b ${
            d ? 'border-white/[0.06]' : 'border-gray-100'
          }`}
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-purple-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                FAQ
              </p>

              <h2
                id="faq-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Digital Marketing Services FAQ
              </h2>

              <p
                className={`text-base ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Common questions about social media marketing, paid
                advertising, lead generation and digital campaigns.
              </p>
            </div>

            <div className="space-y-3 mb-12">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;

                return (
                  <div
                    key={faq.q}
                    className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                      isOpen
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
                        setActiveFaq(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                      className="w-full p-5 text-left flex items-start justify-between gap-4"
                    >
                      <span
                        className={`text-[14px] font-bold ${
                          isOpen
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
                          isOpen
                            ? 'bg-purple-600 text-white'
                            : d
                              ? 'bg-white/[0.06] text-gray-500'
                              : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        {isOpen ? (
                          <Minus size={13} />
                        ) : (
                          <Plus size={13} />
                        )}
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? 'max-h-[500px] opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div
                        className={`px-5 pb-5 border-t text-[14px] leading-relaxed ${
                          d
                            ? 'border-white/[0.06] text-gray-400'
                            : 'border-purple-100 text-gray-600'
                        }`}
                      >
                        <p className="pt-4">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <CtaStrip
              heading="Have a digital marketing question?"
              sub="Tell us what you are currently doing and what you want your marketing to achieve."
            />
          </div>
        </section>

        {/* Related services */}
        <section
          aria-label="Related services"
          className={`py-16 border-b ${
            d
              ? 'border-white/[0.06] bg-[#050505]'
              : 'border-gray-100 bg-[#fafafa]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <p className="text-purple-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                Related Services
              </p>

              <h2
                className={`text-2xl md:text-3xl font-black ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Explore Related Growth Services
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {relatedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={scrollTop}
                  className={`group p-6 rounded-2xl border transition-all ${
                    d
                      ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-purple-500/30'
                      : 'bg-white border-gray-200 hover:border-purple-200 hover:shadow-sm'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${
                      d
                        ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                        : 'bg-purple-50 border-purple-100 text-purple-600'
                    }`}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className={`text-lg font-black mb-2 ${
                      d ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed mb-5 ${
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
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div
              className={`p-8 md:p-10 rounded-3xl border text-center ${
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
                <BarChart3 size={26} />
              </div>

              <h2
                className={`text-3xl font-black mb-4 ${
                  d ? 'text-white' : 'text-gray-900'
                }`}
              >
                Ready to Improve Your Digital Marketing?
              </h2>

              <p
                className={`text-base mb-8 max-w-2xl mx-auto leading-relaxed ${
                  d ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Tell us about your business, target audience and current
                marketing challenges. DevZore can help you discuss a practical
                approach across social media, paid advertising, lead generation,
                content and analytics.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/contact"
                  onClick={scrollTop}
                  className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
                >
                  Discuss Your Marketing Goals
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

const RefreshCwIcon = () => (
  <Activity size={19} />
);

export default DigitalMarketing;