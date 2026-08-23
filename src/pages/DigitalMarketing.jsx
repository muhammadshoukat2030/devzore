import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  TrendingUp, ArrowRight, CheckCircle, Globe,
  Zap, Star, Users, Award, Target, BarChart3,
  Mail, Smartphone, Share2, MousePointer, Megaphone,
  Instagram, Youtube, Plus, Minus, ExternalLink,
  DollarSign, Eye, Heart, MessageSquare, Layers,
  PenTool, Video, Search, RefreshCw, Activity
} from 'lucide-react';

const DigitalMarketing = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    {
      icon: <Share2 size={22}/>, color: 'purple',
      title: 'Social Media Management',
      desc: 'Full-service social media management across Instagram, Facebook, LinkedIn, TikTok, Twitter/X and YouTube. We handle content calendars, community management, follower growth strategies, engagement campaigns and monthly performance reporting — so your brand stays active, consistent and growing every single day without you lifting a finger.',
      includes: ['Monthly content calendar planning', 'Daily posting and scheduling', 'Community management and replies', 'Hashtag strategy and research', 'Competitor analysis monthly', 'Monthly analytics report'],
    },
    {
      icon: <PenTool size={22}/>, color: 'pink',
      title: 'Social Media Post Creation',
      desc: 'Professional, on-brand social media content designed to stop the scroll and drive engagement. Our design team creates static posts, carousel graphics, Reels covers, story templates and branded visual content that communicates your value proposition clearly and consistently across every platform your audience uses.',
      includes: ['Custom branded graphic design', 'Carousel and infographic posts', 'Story and Reel cover design', 'Copywriting for captions', 'Platform-optimised content sizes', 'Brand guideline adherence'],
    },
    {
      icon: <Target size={22}/>, color: 'blue',
      title: 'Meta Ads (Facebook & Instagram)',
      desc: 'High-converting Meta advertising campaigns on Facebook and Instagram — from audience research and creative strategy to A/B testing, campaign optimisation and ROAS tracking. We manage the full funnel: awareness campaigns, retargeting, conversion campaigns and lead generation ads — all backed by data, not guesswork.',
      includes: ['Facebook and Instagram ad campaigns', 'Custom audience and lookalike targeting', 'A/B testing of creatives and copy', 'Retargeting and remarketing campaigns', 'Pixel setup and event tracking', 'Weekly performance reporting'],
    },
    {
      icon: <MousePointer size={22}/>, color: 'green',
      title: 'Google Ads & PPC Management',
      desc: 'Profitable Google Ads campaigns that drive qualified traffic to your website. We manage Search, Display, Shopping and YouTube ad campaigns with precise keyword targeting, negative keyword management, quality score optimisation and continuous bid management — maximising your ad spend and minimising wasted budget.',
      includes: ['Google Search and Display campaigns', 'Shopping and Performance Max campaigns', 'Keyword research and negative lists', 'Ad copywriting and extension setup', 'Conversion tracking and analytics', 'Monthly ROI reporting'],
    },
    {
      icon: <DollarSign size={22}/>, color: 'amber',
      title: 'Lead Generation Campaigns',
      desc: 'End-to-end lead generation systems combining paid ads, landing pages, lead magnets and automated follow-up sequences. We build funnels that attract your ideal customer, capture their information and nurture them toward a purchase — delivering qualified leads directly to your inbox or CRM with cost-per-lead tracking.',
      includes: ['Lead funnel strategy and design', 'Landing page optimisation', 'Lead magnet creation', 'Meta Lead Ads and Google Lead Forms', 'CRM integration and automation', 'Cost-per-lead optimisation'],
    },
    {
      icon: <Mail size={22}/>, color: 'cyan',
      title: 'Email Marketing',
      desc: 'Revenue-generating email marketing campaigns that keep your audience engaged and buying. We handle list building, segmentation, automation sequences, newsletter campaigns and e-commerce email flows — including welcome sequences, abandoned cart emails, win-back campaigns and promotional campaigns that drive measurable revenue.',
      includes: ['Email strategy and list segmentation', 'Welcome and onboarding sequences', 'Newsletter design and copywriting', 'Promotional campaign management', 'A/B testing subject lines and CTAs', 'Open rate and revenue tracking'],
    },
    {
      icon: <BarChart3 size={22}/>, color: 'indigo',
      title: 'Content Marketing',
      desc: 'Strategic content marketing that builds authority, drives organic traffic and generates inbound leads over time. We create SEO-optimised blog posts, long-form guides, case studies, whitepapers and video scripts — all mapped to your buyer journey and designed to rank on Google and establish your brand as the go-to expert in your industry.',
      includes: ['Content strategy and topic research', 'SEO-optimised blog writing', 'Long-form guides and whitepapers', 'Case studies and testimonial content', 'Content distribution and promotion', 'Organic traffic and lead tracking'],
    },
    {
      icon: <Video size={22}/>, color: 'red',
      title: 'Video Content & Reels',
      desc: 'Engaging short-form and long-form video content for Instagram Reels, TikTok, YouTube Shorts and LinkedIn. We produce video scripts, direct content creation, edit footage and create motion graphics — giving your brand a dynamic, high-engagement video presence that builds trust and dramatically expands your organic reach.',
      includes: ['Video strategy and scripting', 'Instagram Reels and TikTok content', 'YouTube Shorts creation', 'Motion graphics and branding', 'Caption and subtitle addition', 'Platform-native format optimisation'],
    },
    {
      icon: <Activity size={22}/>, color: 'orange',
      title: 'Analytics & Performance Reporting',
      desc: 'Clear, actionable monthly performance reports covering all digital marketing channels. We track what matters — leads generated, cost per acquisition, return on ad spend, organic traffic growth, engagement rates and revenue attributed to marketing — giving you complete visibility into what is working and where to invest more.',
      includes: ['Monthly multi-channel reports', 'Google Analytics 4 setup and tracking', 'Ad performance dashboards', 'ROI and ROAS calculation', 'Competitor benchmarking', 'Growth recommendation roadmap'],
    },
  ];

  const platforms = [
    { name: 'Instagram',  icon: '📸', desc: 'Visual content, Reels, Stories, Shopping' },
    { name: 'Facebook',   icon: '👥', desc: 'Ads, Groups, Pages, Lead generation' },
    { name: 'TikTok',     icon: '🎵', desc: 'Short-form video, viral content, ads' },
    { name: 'LinkedIn',   icon: '💼', desc: 'B2B marketing, thought leadership' },
    { name: 'YouTube',    icon: '▶️', desc: 'Video marketing, YouTube Shorts, Ads' },
    { name: 'Twitter/X',  icon: '🐦', desc: 'Brand voice, trending content, Ads' },
    { name: 'Google',     icon: '🔍', desc: 'Search, Display, Shopping, YouTube Ads' },
    { name: 'WhatsApp',   icon: '💬', desc: 'Business messaging, broadcast lists' },
    { name: 'Pinterest',  icon: '📌', desc: 'Visual discovery, product marketing' },
    { name: 'Snapchat',   icon: '👻', desc: 'Youth audience, AR ads, stories' },
    { name: 'Mailchimp',  icon: '✉️', desc: 'Email campaigns, automation sequences' },
    { name: 'HubSpot',    icon: '🔧', desc: 'CRM, lead nurturing, marketing hub' },
  ];

  const results = [
    { metric: '3.2x',   label: 'Average ROAS',           desc: 'Return on ad spend across Meta campaigns' },
    { metric: '65%',    label: 'Lower Cost Per Lead',     desc: 'vs industry average on lead gen campaigns' },
    { metric: '280%',   label: 'Organic Reach Growth',   desc: 'Average increase in 90 days with content strategy' },
    { metric: '4.8x',   label: 'Email Revenue Increase', desc: 'For e-commerce clients with email automation' },
    { metric: '40%+',   label: 'Engagement Rate Uplift', desc: 'Average improvement with branded content' },
    { metric: '12hrs',  label: 'Response Time',          desc: 'Average campaign issue response guarantee' },
  ];

  const process = [
    { n: '01', title: 'Brand & Audience Audit',      desc: 'We analyse your current digital presence, target audience, competitor landscape and industry benchmarks — producing a clear baseline and opportunity map before any campaigns launch.' },
    { n: '02', title: 'Strategy & Channel Plan',     desc: 'We select the right channels for your goals and budget — not all platforms suit all businesses. We design a multi-channel strategy with clear KPIs, timelines and expected outcomes.' },
    { n: '03', title: 'Creative Development',        desc: 'Our design and copy team produces on-brand content — ads, posts, email templates, landing pages and video scripts — all reviewed and approved by you before going live.' },
    { n: '04', title: 'Campaign Launch & Tracking',  desc: 'Campaigns go live with full tracking setup — Google Analytics 4, Meta Pixel, conversion events, UTM parameters and custom dashboards so every result is measured from day one.' },
    { n: '05', title: 'Optimisation & A/B Testing',  desc: 'We continuously test, optimise and scale what is working — pausing underperforming creatives, expanding winning audiences and adjusting bids and budgets based on real performance data.' },
    { n: '06', title: 'Monthly Reporting & Review',  desc: 'A detailed monthly report with performance data, insights, recommendations and a roadmap for the next month — followed by a video or call review to walk you through results.' },
  ];

  const faqs = [
    { q: 'What digital marketing services does DevZore offer?', a: 'DevZore offers comprehensive digital marketing services including social media management, social media post creation, Meta Ads (Facebook and Instagram), Google Ads and PPC management, lead generation campaigns, email marketing, content marketing, video content creation for Reels and TikTok, and monthly analytics and performance reporting. We serve clients across USA, UK, UAE, Canada, Australia and Pakistan.' },
    { q: 'How much does social media management cost?', a: 'Social media management pricing depends on the number of platforms, posting frequency and whether ads management is included. We offer month-to-month retainer plans — contact us for a free consultation and we will provide a fixed-price proposal tailored to your business goals and budget. No hourly billing, no hidden fees.' },
    { q: 'How long does it take to see results from digital marketing?', a: 'Paid advertising (Meta Ads, Google Ads) can generate leads and traffic within the first 24 to 72 hours of going live. Organic results from social media management and content marketing typically begin showing measurable improvements within 60 to 90 days. Email marketing campaigns can drive revenue within hours of sending. We set realistic expectations upfront for every channel.' },
    { q: 'Do you manage Meta Ads for clients worldwide?', a: 'Yes. We manage Meta Ads (Facebook and Instagram advertising) for clients across USA, UK, UAE, Canada, Australia, Saudi Arabia and Pakistan. We have experience targeting audiences in multiple countries, languages and time zones — and we understand the cultural nuances that make ads perform across different markets.' },
    { q: 'How do you approach digital advertising?', a: 'We focus on building data-driven advertising campaigns tailored to your business goals. Our approach includes audience research, campaign strategy, creative testing, performance monitoring, and continuous optimisation to improve results and maximise your return on investment. We believe in transparency, clear communication, and long-term growth.' },    
    { q: 'Can you create social media content in different languages?', a: 'Yes. We create social media content in English, Arabic and Urdu — making us an ideal partner for businesses targeting Middle Eastern, South Asian and Western markets simultaneously. Our design team adapts all content for right-to-left layouts where required.' },
    { q: 'Do you offer one-off campaigns or only monthly retainers?', a: 'We offer both. Monthly retainer plans are our most popular option for ongoing social media management and ads management. We also take on one-off campaign projects — product launches, seasonal promotions, event marketing and specific lead generation campaigns. Contact us to discuss what suits your needs.' },
    { q: 'How do you measure the success of digital marketing campaigns?', a: 'We track the metrics that matter to your business — leads generated, cost per lead, return on ad spend (ROAS), website traffic, conversion rate, email open rates, revenue attributed and social media engagement. Every client gets a custom tracking setup including Google Analytics 4, Meta Pixel and monthly performance dashboards.' },
  ];

  const colorMap = {
    purple: d ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-100 text-purple-600',
    pink:   d ? 'bg-pink-500/10 border-pink-500/20 text-pink-400'       : 'bg-pink-50 border-pink-100 text-pink-600',
    blue:   d ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'       : 'bg-blue-50 border-blue-100 text-blue-600',
    green:  d ? 'bg-green-500/10 border-green-500/20 text-green-400'    : 'bg-green-50 border-green-100 text-green-600',
    amber:  d ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'    : 'bg-amber-50 border-amber-100 text-amber-600',
    cyan:   d ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'       : 'bg-cyan-50 border-cyan-100 text-cyan-600',
    indigo: d ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' : 'bg-indigo-50 border-indigo-100 text-indigo-600',
    red:    d ? 'bg-red-500/10 border-red-500/20 text-red-400'          : 'bg-red-50 border-red-100 text-red-600',
    orange: d ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' : 'bg-orange-50 border-orange-100 text-orange-600',
  };

  const CtaStrip = ({ heading, sub }) => (
    <div className={`p-8 rounded-2xl border text-center ${d ? 'bg-purple-600/5 border-purple-500/15' : 'bg-purple-50 border-purple-100'}`}>
      <h3 className={`text-lg font-black mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{heading}</h3>
      <p className={`text-sm mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>{sub}</p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]">
          Get Free Strategy Call <ArrowRight size={13}/>
        </Link>
        <a href="https://wa.me/923348004300?text=Hi DevZore! I need digital marketing services."
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
        <title>Digital Marketing Services | Social Media, Meta Ads, Google Ads, Lead Generation | DevZore</title>
        <meta name="description" content="DevZore offers full-service digital marketing — social media management, Meta Ads, Google Ads, PPC, lead generation, email marketing, content marketing and video content. Serving clients across USA, UK, UAE, Canada, Australia and Pakistan. Free strategy consultation." />
        <link rel="canonical" href="https://devzore.com/digital-marketing" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DevZore" />
        <meta name="keywords" content="digital marketing services, social media management, Meta Ads agency, Facebook advertising, Instagram marketing, Google Ads management, PPC management, lead generation agency, email marketing services, content marketing agency, social media post creation, digital marketing company, online marketing services, social media marketing agency, paid advertising agency, digital marketing for small business, affordable digital marketing, digital marketing agency worldwide, social media manager for hire, Meta Ads specialist" />
        <meta name="geo.region" content="PK-IS" />
        <meta name="geo.placename" content="Islamabad" />
        <meta name="geo.position" content="33.6844;73.0479" />
        <meta name="ICBM" content="33.6844, 73.0479" />
        <meta property="og:title" content="Digital Marketing Services | Social Media, Meta Ads, Lead Generation | DevZore" />
        <meta property="og:description" content="Full-service digital marketing — social media management, Meta Ads, Google Ads, lead generation, email marketing and content creation. Free strategy call available." />
        <meta property="og:url" content="https://devzore.com/digital-marketing" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://devzore.com/logo.png" />
        <meta property="og:site_name" content="DevZore" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Marketing Services | DevZore" />
        <meta name="twitter:description" content="Social media management, Meta Ads, Google Ads, lead generation and email marketing. Free strategy call." />
        <meta name="twitter:image" content="https://devzore.com/logo.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Digital Marketing Services",
          "alternateName": ["Social Media Management", "Meta Ads Agency", "Google Ads Management", "Lead Generation Agency"],
          "description": "DevZore provides full-service digital marketing including social media management, Meta Ads, Google Ads, lead generation, email marketing and content creation worldwide.",
          "url": "https://devzore.com/digital-marketing",
          "provider": { "@type": "Organization", "name": "DevZore", "url": "https://devzore.com", "telephone": "+92-334-8004300", "email": "hellodevzore@gmail.com", "address": { "@type": "PostalAddress", "addressLocality": "Islamabad", "addressCountry": "PK" }, "areaServed": "Worldwide" },
          "serviceType": "Digital Marketing",
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
            { "@type": "ListItem", "position": 3, "name": "Digital Marketing", "item": "https://devzore.com/digital-marketing" }
          ]
        })}</script>
      </Helmet>

      <main className={`min-h-screen transition-colors duration-300 ${d ? 'bg-[#030303]' : 'bg-white'}`}>

        {/* Hero */}
        <section aria-labelledby="dm-heading" className={`pt-28 pb-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"/> Digital Marketing
                  </div>
                  <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold border ${d ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-green-50 border-green-200 text-green-700'}`}>
                    <Globe size={10}/> Worldwide Clients
                  </div>
                </div>

                <h1 id="dm-heading" className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                  Digital Marketing Services{' '}
                  <span className="text-purple-600">That Drive Real Growth</span>
                </h1>

                <h2 className={`text-lg font-semibold mb-5 ${d ? 'text-gray-300' : 'text-gray-700'}`}>
                  Social Media · Meta Ads · Google Ads · Lead Generation · Email Marketing · Content Creation
                </h2>

                <p className={`text-base leading-relaxed mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  DevZore provides full-service digital marketing for businesses worldwide — from
                  social media management and branded content creation to high-converting Meta Ads,
                  Google PPC campaigns, lead generation funnels and email marketing automation.
                  We handle everything so you can focus on running your business.
                </p>

                <p className={`text-base leading-relaxed mb-5 ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                  Our digital marketing team combines creative content strategy with data-driven
                  paid advertising — delivering measurable results including leads generated,
                  return on ad spend, audience growth and revenue attributed to every campaign.
                </p>

                <p className={`text-base leading-relaxed mb-8 ${d ? 'text-gray-500' : 'text-gray-500'}`}>
                  We have managed digital marketing for clients across USA, UK, UAE, Canada,
                  Australia, Saudi Arabia and Pakistan — covering e-commerce, SaaS, real estate,
                  healthcare, restaurants, education and professional services.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {[
                    { val: '3.2x',  label: 'Avg ROAS' },
                    { val: '50+',   label: 'Brands Managed' },
                    { val: '65%',   label: 'Lower CPL' },
                    { val: '15+',   label: 'Countries' },
                  ].map((s, i) => (
                    <div key={i} className={`p-3 rounded-xl border text-center ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-gray-50 border-gray-200'}`}>
                      <div className={`text-xl font-black text-purple-500`}>{s.val}</div>
                      <div className={`text-[10px] ${d ? 'text-gray-500' : 'text-gray-400'}`}>{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mb-4">
                  <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                    Get Free Strategy Call <ArrowRight size={14}/>
                  </Link>
                  <a href="https://wa.me/923348004300?text=Hi DevZore! I need digital marketing services."
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
                  ⚡ Free strategy call · Month-to-month plans · No long-term contracts · Results-focused
                </p>
              </div>

              {/* Right panel */}
              <div className={`p-8 rounded-3xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
                <p className={`text-[11px] font-black uppercase tracking-widest mb-6 ${d ? 'text-gray-500' : 'text-gray-400'}`}>
                  Full Digital Marketing Suite
                </p>
                <div className="space-y-3">
                  {[
                    { svc: 'Social Media Management',          note: 'Instagram, Facebook, LinkedIn, TikTok, Twitter/X' },
                    { svc: 'Social Media Post Creation',       note: 'Branded graphics, carousels, Reels covers, stories' },
                    { svc: 'Meta Ads (Facebook & Instagram)',  note: 'Campaigns, A/B testing, retargeting, ROAS tracking' },
                    { svc: 'Google Ads & PPC Management',      note: 'Search, Display, Shopping, Performance Max' },
                    { svc: 'Lead Generation Campaigns',        note: 'Funnels, landing pages, CRM integration' },
                    { svc: 'Email Marketing & Automation',     note: 'Sequences, newsletters, abandoned cart flows' },
                    { svc: 'Content Marketing',                note: 'SEO blogs, guides, case studies, distribution' },
                    { svc: 'Video Content & Reels',            note: 'Scripts, editing, motion graphics, TikTok' },
                    { svc: 'Analytics & Monthly Reporting',    note: 'GA4, Meta Pixel, ROI dashboards, insights' },
                  ].map((item, i) => (
                    <div key={i} className={`flex items-start gap-3 pb-3 border-b last:border-0 ${d ? 'border-white/[0.05]' : 'border-gray-100'}`}>
                      <CheckCircle size={13} className="text-purple-500 flex-shrink-0 mt-0.5"/>
                      <div>
                        <p className={`text-[12px] font-bold ${d ? 'text-white' : 'text-gray-900'}`}>{item.svc}</p>
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
              <p className={`font-black text-base ${d ? 'text-white' : 'text-gray-900'}`}>Want more leads, followers and revenue from social media?</p>
              <p className={`text-sm ${d ? 'text-gray-400' : 'text-gray-600'}`}>Free digital marketing strategy call · No commitment · Results-focused campaigns</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm">
                Book Free Call <ArrowRight size={13}/>
              </Link>
              <a href="https://wa.me/923348004300" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] font-bold rounded-xl text-sm">
                WhatsApp <ArrowRight size={13}/>
              </a>
            </div>
          </div>
        </div>

        {/* Services */}
        <section aria-labelledby="services-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 id="services-heading" className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                Digital Marketing Services We Offer
              </h2>
              <p className={`text-base leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                Everything your brand needs to grow online — social media, paid ads, content, email and analytics — all under one roof, managed by one team.
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

        {/* Platforms */}
        <section aria-labelledby="platforms-heading" className={`py-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="platforms-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                Platforms & Channels We Master
              </h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                Every major digital marketing platform — managed by specialists who know each platform inside out
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {platforms.map((p, i) => (
                <div key={i} className={`p-5 rounded-2xl border transition-all hover:border-purple-500/25 ${d ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]' : 'bg-white border-gray-200 hover:shadow-sm'}`}>
                  <div className="text-2xl mb-2">{p.icon}</div>
                  <p className={`text-[13px] font-bold mb-1 ${d ? 'text-white' : 'text-gray-900'}`}>{p.name}</p>
                  <p className={`text-[11px] ${d ? 'text-gray-500' : 'text-gray-400'}`}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section aria-labelledby="results-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="results-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                Results We Deliver for Our Clients
              </h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                Real numbers from real campaigns — not vanity metrics
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
            <CtaStrip heading="Want results like these for your business?" sub="Free strategy call. We will audit your current marketing and show you exactly where the opportunities are." />
          </div>
        </section>

        {/* Process */}
        <section aria-labelledby="process-heading" className={`py-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="process-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>
                How Our Digital Marketing Process Works
              </h2>
              <p className={`text-base max-w-2xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                From brand audit to monthly reporting — a transparent, results-driven process
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {process.map((step, i) => (
                <div key={i} className={`p-6 rounded-2xl border ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
                  <div className={`text-[13px] font-black mb-3 ${d ? 'text-purple-400' : 'text-purple-600'}`}>{step.n}</div>
                  <h3 className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
                  <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-gray-600'}`}>{step.desc}</p>
                </div>
              ))}
            </div>
            <CtaStrip heading="Ready to grow your brand online?" sub="Book a free 30-minute strategy call. No pitch, just a genuine audit of your current digital marketing." />
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className={`py-10 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-[#fafafa]'}`}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="faq-heading" className={`text-3xl font-black mb-3 ${d ? 'text-white' : 'text-gray-900'}`}>Digital Marketing FAQ</h2>
              <p className={`text-base ${d ? 'text-gray-400' : 'text-gray-600'}`}>Common questions about our digital marketing services</p>
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
            <CtaStrip heading="Still have questions?" sub="Talk to us directly — free consultation, no commitment. We respond within 24 hours." />
          </div>
        </section>

        {/* Internal Links */}
        <section aria-label="Related services" className={`py-10 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <p className={`text-[11px] font-black uppercase tracking-widest mb-5 ${d ? 'text-gray-600' : 'text-gray-400'}`}>Related Services</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'SEO Services',               path: '/seo-services' },
                { label: 'Web Development',            path: '/web-development' },
                { label: 'UI/UX Design',               path: '/ui-ux-design' },
                { label: 'E-Commerce Development',     path: '/ecommerce' },
                { label: 'SaaS Development',            path: '/saas-product-development' },
                { label: 'Startup MVP Development',    path: '/startup-mvp' },
                { label: 'Mobile App Development',     path: '/mobile-apps' },
                { label: 'Maintenance & Support',      path: '/maintenance' },
                { label: 'All Services',               path: '/allservices' },
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
        <section className="py-10">
          <div className="max-w-4xl mx-auto px-6">
            <div className={`p-10 rounded-3xl border text-center ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-[#fafafa] border-gray-200'}`}>
              <h2 className={`text-3xl font-black mb-4 ${d ? 'text-white' : 'text-gray-900'}`}>
                Ready to Grow Your Brand Online?
              </h2>
              <p className={`text-base mb-3 max-w-xl mx-auto ${d ? 'text-gray-400' : 'text-gray-600'}`}>
                Social media management, Meta Ads, Google Ads, lead generation, email marketing and content creation — all handled by one team, for one monthly fee.
              </p>
              <p className={`text-[13px] mb-8 ${d ? 'text-gray-600' : 'text-gray-400'}`}>
                Free strategy call · Month-to-month · No contracts · 3.2x average ROAS · 50+ brands managed
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]">
                  Get Free Strategy Call <ArrowRight size={15}/>
                </Link>
                <a href="https://wa.me/923348004300?text=Hi DevZore! I want to grow my brand with digital marketing."
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
          <h2>Digital Marketing Services — DevZore</h2>
          <p>DevZore provides full-service digital marketing including social media management, social media post creation, Meta Ads (Facebook and Instagram advertising), Google Ads and PPC management, lead generation campaigns, email marketing and automation, content marketing, video content for Reels and TikTok, and monthly analytics reporting. We serve clients across USA, UK, UAE, Canada, Australia, Saudi Arabia and Pakistan. Our digital marketing team manages brands across e-commerce, SaaS, real estate, healthcare, education and professional services industries.</p>
          <h2>Services</h2>
          {services.map((s, i) => <div key={i}><h3>{s.title}</h3><p>{s.desc}</p></div>)}
          <h2>FAQ</h2>
          {faqs.map((f, i) => <div key={i}><h3>{f.q}</h3><p>{f.a}</p></div>)}
          <p>Primary Keywords: digital marketing services, social media management, Meta Ads agency, Facebook advertising, Instagram marketing, Google Ads management, PPC management, lead generation agency, email marketing services, content marketing, social media post creation, digital marketing company worldwide.</p>
          <p>Long-tail Keywords: affordable digital marketing agency, social media management for small business, Meta Ads specialist worldwide, Google Ads management company, lead generation campaign agency, email marketing automation service, digital marketing for e-commerce, social media content creation service.</p>
          <p>AI Search: Who provides digital marketing services? Best social media management company. How much does Meta Ads management cost? Who runs Google Ads for small businesses? Best lead generation agency worldwide. Digital marketing agency with good reviews. Social media manager for hire. Facebook Instagram advertising agency.</p>
        </div>
      </main>
    </>
  );
};

export default DigitalMarketing;