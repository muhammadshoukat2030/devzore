import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CircleCheck,
  DollarSign,
  Globe2,
  Mail,
  Megaphone,
  Minus,
  MousePointer,
  PenTool,
  Plus,
  Search,
  Send,
  Share2,
  ShoppingCart,
  Target,
  Users,
  Video,
} from "lucide-react";

const DigitalMarketing = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Digital Marketing",
    timeline: "",
    message: "",
  });

  // BACKGROUND GRIDS

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

  // DIGITAL MARKETING SERVICES

  const services = [
    {
      icon: <Share2 size={21} />,
      number: "01",
      title: "Social Media Management",
      desc:
        "Social media planning and management for businesses that want a consistent and organised presence across relevant digital platforms.",
      points: [
        "Content planning",
        "Publishing support",
        "Performance review",
      ],
    },
    {
      icon: <PenTool size={21} />,
      number: "02",
      title: "Social Media Content Creation",
      desc:
        "Branded content designed around your business, target audience and the requirements of each social media platform.",
      points: [
        "Branded posts",
        "Captions & carousels",
        "Platform-ready content",
      ],
    },
    {
      icon: <Target size={21} />,
      number: "03",
      title: "Meta Ads Management",
      desc:
        "Facebook and Instagram advertising campaigns planned around your audience, offer, campaign objective and available budget.",
      points: [
        "Audience targeting",
        "Creative testing",
        "Campaign optimisation",
      ],
    },
    {
      icon: <MousePointer size={21} />,
      number: "04",
      title: "Google Ads & PPC",
      desc:
        "Search advertising campaigns designed to connect your business with people actively searching for relevant services or products.",
      points: [
        "Search campaigns",
        "Keyword research",
        "Conversion tracking",
      ],
    },
    {
      icon: <DollarSign size={21} />,
      number: "05",
      title: "Lead Generation Campaigns",
      desc:
        "Digital lead generation campaigns combining advertising, landing-page recommendations, forms and conversion tracking.",
      points: [
        "Lead strategy",
        "Lead forms",
        "Campaign tracking",
      ],
    },
    {
      icon: <Mail size={21} />,
      number: "06",
      title: "Email Marketing",
      desc:
        "Email campaigns and sequences for communicating with subscribers, leads and existing customers more consistently.",
      points: [
        "Email campaigns",
        "Audience segmentation",
        "Automated sequences",
      ],
    },
    {
      icon: <BarChart3 size={21} />,
      number: "07",
      title: "Content Marketing",
      desc:
        "Useful content planned around customer questions, business goals and wider digital marketing requirements.",
      points: [
        "Content strategy",
        "Topic planning",
        "Content distribution",
      ],
    },
    {
      icon: <Video size={21} />,
      number: "08",
      title: "Video Content & Reels",
      desc:
        "Short-form video planning and editing support for social platforms such as Instagram, TikTok and YouTube.",
      points: [
        "Short-form videos",
        "Video scripts",
        "Captions & subtitles",
      ],
    },
    {
      icon: <Activity size={21} />,
      number: "09",
      title: "Marketing Analytics",
      desc:
        "Campaign measurement focused on understanding traffic, enquiries, leads, conversion activity and marketing performance.",
      points: [
        "Traffic analysis",
        "Conversion tracking",
        "Performance reporting",
      ],
    },
  ];

  // MARKETING CHANNELS

  const channels = [
    {
      icon: <Share2 size={19} />,
      title: "Social Media",
      desc:
        "Content and campaign activity across relevant social platforms.",
    },
    {
      icon: <Target size={19} />,
      title: "Paid Advertising",
      desc:
        "Meta and Google campaigns based on audience and campaign goals.",
    },
    {
      icon: <Search size={19} />,
      title: "Search Marketing",
      desc:
        "Connect with people searching for relevant products and services.",
    },
    {
      icon: <Mail size={19} />,
      title: "Email Marketing",
      desc:
        "Campaigns and sequences for leads, customers and subscribers.",
    },
    {
      icon: <Video size={19} />,
      title: "Video Marketing",
      desc:
        "Short-form video content for social and digital campaigns.",
    },
    {
      icon: <BarChart3 size={19} />,
      title: "Analytics",
      desc:
        "Campaign measurement and conversion visibility across channels.",
    },
  ];

  // MARKETING STANDARDS

  const marketingFocus = [
    {
      icon: <Target size={19} />,
      title: "Audience Focused",
      desc:
        "Campaign planning starts with understanding who you want to reach and what action matters to the business.",
    },
    {
      icon: <PenTool size={19} />,
      title: "Clear Creative Direction",
      desc:
        "Content and campaign creatives are designed to communicate the offer clearly without unnecessary complexity.",
    },
    {
      icon: <BarChart3 size={19} />,
      title: "Performance Tracking",
      desc:
        "Relevant activity can be measured through analytics and conversion tracking where suitable.",
    },
    {
      icon: <Activity size={19} />,
      title: "Campaign Optimisation",
      desc:
        "Campaign data can guide changes to targeting, creatives, keywords and other campaign elements.",
    },
    {
      icon: <Users size={19} />,
      title: "Customer Journey",
      desc:
        "Marketing activity is considered in relation to how potential customers discover and engage with your business.",
    },
    {
      icon: <Globe2 size={19} />,
      title: "Channel Selection",
      desc:
        "Platforms are selected around the target audience and business model rather than using every channel automatically.",
    },
  ];

  // BUSINESS REQUIREMENTS

  const marketingNeeds = [
    "You need a more consistent social media presence",
    "Your business needs more qualified enquiries",
    "Paid campaigns are running without clear tracking",
    "You need help choosing suitable marketing channels",
    "Your content does not clearly communicate your offer",
    "You want to test Meta or Google advertising",
    "Your business needs better campaign measurement",
    "You need ongoing content and campaign support",
  ];

  // PROCESS

  const process = [
    {
      number: "01",
      title: "Business Review",
      desc:
        "We review your business, target audience, current digital presence, offer, competitors and existing marketing activity.",
    },
    {
      number: "02",
      title: "Marketing Strategy",
      desc:
        "Suitable channels and campaign priorities are identified around your goals, audience and available marketing budget.",
    },
    {
      number: "03",
      title: "Content & Creative",
      desc:
        "Marketing content, campaign copy and creative assets are prepared for the selected channels and objectives.",
    },
    {
      number: "04",
      title: "Tracking & Launch",
      desc:
        "Relevant campaign tracking is reviewed or configured before marketing campaigns are launched where appropriate.",
    },
    {
      number: "05",
      title: "Monitor & Improve",
      desc:
        "Campaign activity is reviewed and targeting, creatives, keywords or budgets can be adjusted based on available data.",
    },
    {
      number: "06",
      title: "Reporting & Next Steps",
      desc:
        "Performance information is summarised so future marketing priorities can be discussed using real campaign data.",
    },
  ];

  // USE CASES

  const useCases = [
    "Startup Marketing",
    "Small Businesses",
    "Professional Services",
    "E-Commerce Stores",
    "SaaS Products",
    "Local Businesses",
    "Online Businesses",
    "B2B Companies",
    "Service Companies",
    "Growing Brands",
    "Lead Generation",
    "Product Campaigns",
  ];

  // WHY DEVZORE

  const whyDevZore = [
    {
      icon: <Target size={19} />,
      title: "Built Around Your Goals",
      desc:
        "Marketing activity is planned around the actions and outcomes that matter to your business.",
    },
    {
      icon: <Share2 size={19} />,
      title: "Multi-Channel Support",
      desc:
        "Campaigns can combine suitable social, search, content and email channels where required.",
    },
    {
      icon: <PenTool size={19} />,
      title: "Content + Campaigns",
      desc:
        "Creative assets and campaign execution can be considered together instead of as completely separate activities.",
    },
    {
      icon: <BarChart3 size={19} />,
      title: "Data-Informed Decisions",
      desc:
        "Marketing decisions can be reviewed using traffic, lead and campaign performance information.",
    },
    {
      icon: <Activity size={19} />,
      title: "Ongoing Improvement",
      desc:
        "Campaigns can be reviewed and adjusted as new performance data and business requirements become available.",
    },
    {
      icon: <Globe2 size={19} />,
      title: "Remote Collaboration",
      desc:
        "Digital marketing projects can be managed remotely through organised communication and shared campaign access.",
    },
  ];

  // FAQ

  const faqs = [
    {
      q: "What digital marketing services does DevZore provide?",
      a:
        "DevZore can help with social media management, social media content, Meta Ads, Facebook and Instagram advertising, Google Ads, PPC management, lead generation, email marketing, content marketing, short-form video content and marketing analytics.",
    },
    {
      q: "Can DevZore manage social media for my business?",
      a:
        "Yes. Social media support can include content planning, branded post creation, scheduling, captions, community-management support and performance reporting depending on the agreed scope.",
    },
    {
      q: "Do you provide Facebook and Instagram Ads management?",
      a:
        "Yes. Meta Ads services can include campaign planning, audience research, campaign setup, creative testing, retargeting, conversion tracking and ongoing optimisation.",
    },
    {
      q: "Do you provide Google Ads and PPC management?",
      a:
        "Yes. Google Ads support can include keyword research, campaign setup, negative keywords, conversion tracking and campaign performance review.",
    },
    {
      q: "Can you help generate leads for my business?",
      a:
        "Yes. Depending on the business, lead generation can combine paid advertising, lead forms, landing pages, conversion tracking and follow-up processes.",
    },
    {
      q: "How much do digital marketing services cost?",
      a:
        "Pricing depends on the services required, number of platforms, campaign scope, content volume and advertising requirements. A tailored proposal can be prepared after reviewing the requirements.",
    },
    {
      q: "How long does digital marketing take to produce results?",
      a:
        "There is no fixed timeline for every campaign. Paid advertising can begin generating traffic after launch, while content and audience development usually require consistent work over time.",
    },
    {
      q: "Can you create social media posts and video content?",
      a:
        "Yes. Content support can include branded graphics, carousel posts, captions, Reels, short-form video planning, editing, subtitles and platform-specific formats.",
    },
    {
      q: "Do you provide email marketing services?",
      a:
        "Yes. Email marketing can include newsletters, promotional campaigns, audience segmentation and automated sequences depending on your platform and requirements.",
    },
    {
      q: "How do you measure digital marketing performance?",
      a:
        "Relevant measurements may include website traffic, enquiries, leads, conversions, cost per lead, advertising spend, engagement and other campaign-specific indicators.",
    },
    {
      q: "Can DevZore work with international clients?",
      a:
        "Yes. Digital marketing projects can be handled remotely. The campaign approach can be adapted around the target market and audience.",
    },
    {
      q: "Do you guarantee leads, sales or advertising results?",
      a:
        "No. Marketing performance depends on many factors including the offer, audience, market, competition, website experience, budget and demand. DevZore focuses on structured execution, measurement and improvement rather than guaranteed outcomes.",
    },
  ];

  // RELATED SERVICES

  const relatedServices = [
    {
      label: "SEARCH",
      title: "SEO Services",
      desc:
        "Technical and on-page SEO support for stronger organic search visibility.",
      path: "/seo-services",
    },
    {
      label: "WEB",
      title: "Web Development",
      desc:
        "Modern websites and web applications built around business requirements.",
      path: "/web-development",
    },
    {
      label: "COMMERCE",
      title: "E-Commerce Development",
      desc:
        "Custom online stores with product, checkout and commerce workflows.",
      path: "/ecommerce",
    },
    {
      label: "DESIGN",
      title: "UI/UX Design",
      desc:
        "Professional interfaces and user experiences for websites and digital products.",
      path: "/ui-ux-design",
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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Digital Marketing Enquiry - ${formData.name}`
    );

    const body = encodeURIComponent(
`Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Service: ${formData.service}
Timeline: ${formData.timeline || "Not specified"}

Marketing Details:
${formData.message}`
    );

    window.location.href = `mailto:hellodevzore@gmail.com?subject=${subject}&body=${body}`;
  };

  // STRUCTURED DATA

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://devzore.com/digital-marketing#service",
    name: "Digital Marketing Services",
    url: "https://devzore.com/digital-marketing",
    serviceType: "Digital Marketing Services",
    description:
      "Digital marketing services including social media marketing, Meta Ads, Google Ads, PPC management, lead generation, content marketing, email marketing and marketing analytics.",
    provider: {
      "@type": "Organization",
      "@id": "https://devzore.com/#organization",
      name: "DevZore",
      url: "https://devzore.com/",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.desc,
        },
      })),
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
        name: "Services",
        item: "https://devzore.com/allservices",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Digital Marketing",
        item: "https://devzore.com/digital-marketing",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 3);

  // SECTION LABEL

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

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
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
          aria-labelledby="digital-marketing-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 right-[5%] w-[500px] h-[500px] rounded-full bg-[#078fa5]/12 blur-[130px]" />

            <div
              className="absolute inset-0 opacity-50"
              style={darkGrid}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#04111a] via-[#04111a]/95 to-[#04111a]/70" />
          </div>

          <div className="relative max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-14">
            <div className="grid lg:grid-cols-[0.96fr_1.04fr] gap-8 lg:gap-12 items-center">
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-[#c4ced5]">
                    <CircleCheck
                      size={14}
                      className="text-[#26becb]"
                    />
                    Digital Marketing
                  </div>
                </div>

                <h1
                  id="digital-marketing-heading"
                  className="max-w-[800px] text-[40px] sm:text-[48px] lg:text-[58px] xl:text-[54px] leading-[1.04] font-semibold tracking-[-0.045em]"
                >
                  Reach the right audience with{" "}
                  <span className="text-[#22bdca]">
                    focused digital marketing.
                  </span>
                </h1>

                <p className="max-w-[700px] mt-4 text-[16px] sm:text-[13.5px] leading-7 text-slate-300">
                  DevZore provides social media marketing, paid advertising,
                  lead generation, content marketing and campaign analytics
                  for businesses looking to grow their digital presence.
                </p>

                <p className="max-w-[650px] mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
                  From Meta and Google campaigns to content planning and
                  performance tracking, marketing activity is built around
                  your audience, offer and business objectives.
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-6">
                  <a
                    href="#marketing-project-enquiry"
                    className="inline-flex justify-center items-center gap-2.5 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[12px] font-semibold text-[#071923] transition-all"
                  >
                    Discuss Your Marketing
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href="#digital-marketing-services"
                    className="inline-flex justify-center items-center gap-2.5 px-4 py-3 text-[12px] font-semibold text-white hover:text-[#28c5d4] transition-colors"
                  >
                    Explore Marketing Services
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
                  {[
                    "Social Media",
                    "Paid Ads",
                    "Lead Generation",
                    "Analytics",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 text-[10px] font-medium text-slate-400"
                    >
                      <CheckCircle2
                        size={12}
                        className="text-[#20becd]"
                      />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* MARKETING VISUAL */}

              <div className="relative min-h-[380px] lg:min-h-[430px] hidden md:block">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-[390px] h-[390px] rounded-full bg-[#0796A8]/15 blur-[90px]" />

                  <div className="relative w-full max-w-[560px]">
                    <div className="relative rounded-[20px] border border-white/10 bg-[#091d27]/95 shadow-[0_35px_90px_rgba(0,0,0,0.45)] overflow-hidden">
                      <div className="h-9 px-4 border-b border-white/10 bg-[#0b222d] flex items-center justify-between">
                        <div className="flex gap-1.5">
                          {[1, 2, 3].map((item) => (
                            <span
                              key={item}
                              className="w-2 h-2 rounded-full bg-white/20"
                            />
                          ))}
                        </div>

                        <div className="w-[46%] h-4 rounded bg-white/[0.05]" />
                        <div className="w-5" />
                      </div>

                      <div className="grid grid-cols-[66px_1fr] min-h-[285px]">
                        <div className="border-r border-white/[0.08] p-3">
                          <div className="w-8 h-8 rounded-lg bg-[#1bbac8]/20 border border-[#1bbac8]/30 mb-5 flex items-center justify-center">
                            <BarChart3
                              size={14}
                              className="text-[#23bfce]"
                            />
                          </div>

                          <div className="space-y-3">
                            {[1, 2, 3, 4, 5].map((item) => (
                              <div
                                key={item}
                                className="w-7 h-2 rounded bg-white/[0.07]"
                              />
                            ))}
                          </div>
                        </div>

                        <div className="p-5">
                          <div className="flex justify-between items-center mb-5">
                            <div>
                              <div className="w-20 h-2 rounded bg-[#1bbac8]/60 mb-2" />
                              <div className="w-36 h-3 rounded bg-white/80" />
                            </div>

                            <div className="w-16 h-7 rounded-lg bg-[#18bdcb]" />
                          </div>

                          <div className="grid grid-cols-3 gap-3 mb-3">
                            {[1, 2, 3].map((item) => (
                              <div
                                key={item}
                                className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3"
                              >
                                <div className="w-7 h-7 rounded-lg bg-[#159daf]/15 mb-3" />
                                <div className="w-14 h-2 rounded bg-white/25 mb-2" />
                                <div className="w-10 h-2 rounded bg-white/10" />
                              </div>
                            ))}
                          </div>

                          <div className="grid grid-cols-[1.15fr_0.85fr] gap-3">
                            <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3">
                              <div className="flex items-end gap-2 h-20">
                                {[32, 46, 40, 58, 68, 80, 92].map(
                                  (height, index) => (
                                    <div
                                      key={index}
                                      className="flex-1 rounded-t bg-[#16aebd]/40"
                                      style={{
                                        height: `${height}%`,
                                      }}
                                    />
                                  )
                                )}
                              </div>
                            </div>

                            <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3">
                              <div className="w-14 h-2 rounded bg-white/20 mb-3" />

                              <div className="space-y-2.5">
                                {[1, 2, 3, 4].map((item) => (
                                  <div
                                    key={item}
                                    className="h-2 rounded bg-white/[0.07]"
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -left-6 top-14 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Target
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[9px] font-semibold mt-2">
                        Targeting
                      </p>
                    </div>

                    <div className="absolute -right-5 top-16 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Share2
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[9px] font-semibold mt-2">
                        Campaigns
                      </p>
                    </div>

                    <div className="absolute -right-4 bottom-10 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <BarChart3
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[9px] font-semibold mt-2">
                        Analytics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CAPABILITY STRIP */}

          <div className="relative border-t border-white/[0.08] bg-[#06151d]/90">
            <div className="max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10">
              <div className="grid grid-cols-2 lg:grid-cols-4">
                {[
                  ["01", "Social Media"],
                  ["02", "Meta Ads"],
                  ["03", "Google Ads"],
                  ["04", "Lead Generation"],
                ].map(([number, title], index) => (
                  <div
                    key={title}
                    className={`py-4 ${
                      index !== 3
                        ? "lg:border-r border-white/[0.07]"
                        : ""
                    } ${index > 0 ? "lg:pl-7" : ""}`}
                  >
                    <span className="block text-[9px] font-semibold text-[#1bb8c7] mb-1">
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
          className="relative py-10 md:py-12 bg-[#f8fafb]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-7 lg:gap-12">
              <div>
                <SectionLabel>Digital Marketing Services</SectionLabel>

                <h2 className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3">
                  Marketing built around{" "}
                  <span className="text-[#0796A8]">
                    real business objectives.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 text-slate-700">
                  Effective digital marketing starts with understanding who
                  you want to reach, what you want them to do and which
                  channels make sense for that audience.
                </p>

                <p className="text-[13px] leading-6 mt-3 text-slate-500">
                  DevZore can combine content, paid campaigns, social media,
                  lead generation and analytics into a focused marketing
                  approach rather than using every platform without a clear
                  reason.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}

        <section
          id="digital-marketing-services"
          aria-labelledby="marketing-services-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel>What We Do</SectionLabel>

              <h2
                id="marketing-services-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                Digital marketing services for different growth needs.
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3 max-w-2xl">
                Services can be used individually or combined according to your
                audience, campaign objectives and wider marketing requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0796A8]/40 hover:shadow-[0_18px_50px_rgba(7,25,35,0.08)]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#071923] to-[#18bdcb]" />

                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#f0f4f5] text-[#075f70] flex items-center justify-center">
                      {service.icon}
                    </div>

                    <span className="text-[10px] font-semibold text-slate-300">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-[#071923] text-[16px] leading-6 font-semibold mt-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-[12px] leading-5 mt-2">
                    {service.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2
                          size={12}
                          className="text-[#0796A8]"
                        />

                        <span className="text-[10px] font-medium text-slate-600">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CHANNELS */}

        <section
          aria-labelledby="marketing-channels-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-12 items-start">
              <div>
                <SectionLabel>Marketing Channels</SectionLabel>

                <h2
                  id="marketing-channels-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Use the channels where{" "}
                  <span className="text-[#0796A8]">
                    your audience actually spends attention.
                  </span>
                </h2>

                <p className="text-slate-600 text-[14px] leading-6 mt-4">
                  The right digital marketing mix depends on your customers,
                  market, product and the outcome each campaign needs to
                  support.
                </p>

                <a
                  href="#marketing-project-enquiry"
                  className="inline-flex items-center gap-2 mt-5 text-[11px] font-semibold text-[#07899a] hover:text-[#071923] transition-colors"
                >
                  Discuss Your Marketing
                  <ArrowRight size={13} />
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {channels.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-[#0796A8]/35 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#eef4f5] text-[#07899a] flex items-center justify-center">
                      {item.icon}
                    </div>

                    <h3 className="text-[#071923] font-semibold text-[14px] mt-4">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 text-[11px] leading-5 mt-1.5">
                      {item.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MARKETING APPROACH */}

        <section
          aria-labelledby="marketing-approach-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-70"
            style={darkGrid}
          />

          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel light>Marketing Approach</SectionLabel>

              <h2
                id="marketing-approach-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                Creative execution supported by{" "}
                <span className="text-[#25bfce]">
                  campaign data and clear goals.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3 max-w-2xl">
                Marketing should connect the audience, message, campaign and
                measurement rather than treating each part independently.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {marketingFocus.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-white/[0.09] bg-white/[0.035] p-5 hover:bg-white/[0.055] hover:border-[#1bbac8]/25 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg border border-[#1bbac8]/20 bg-[#0e2b36] text-[#27c2d0] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="text-[14px] font-semibold mt-4">
                    {item.title}
                  </h3>

                  <p className="text-[11px] leading-5 text-slate-400 mt-1.5">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MARKETING REVIEW */}

        <section
          aria-labelledby="marketing-needs-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <SectionLabel>Marketing Review</SectionLabel>

                <div className="w-10 h-10 mt-4 rounded-xl bg-[#edf5f6] text-[#07899a] flex items-center justify-center">
                  <Megaphone size={19} />
                </div>

                <h2
                  id="marketing-needs-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-4"
                >
                  Does your business need a clearer marketing direction?
                </h2>

                <p className="text-slate-600 text-[14px] leading-6 mt-3">
                  Marketing can become difficult to manage when content,
                  advertising and lead generation are all happening without a
                  clear strategy or consistent measurement.
                </p>

                <p className="text-slate-500 text-[12px] leading-5 mt-3">
                  We can review the current situation and identify which
                  channels and campaign activities deserve priority.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#f8fafb] p-5">
                <p className="text-[#071923] text-[10px] font-semibold tracking-[0.16em] uppercase">
                  When marketing support can help
                </p>

                <div className="grid sm:grid-cols-2 gap-2.5 mt-4">
                  {marketingNeeds.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl bg-white border border-slate-100 p-3"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-[#0796A8] flex-shrink-0 mt-0.5"
                      />

                      <span className="text-slate-600 text-[10px] leading-5">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}

        <section
          aria-labelledby="marketing-process-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white"
        >
          <div
            className="absolute inset-0"
            style={darkGrid}
          />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel light>Our Process</SectionLabel>

              <h2
                id="marketing-process-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                From marketing strategy{" "}
                <span className="text-[#25bfce]">
                  to campaign review and improvement.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3">
                A structured process keeps marketing activity aligned with the
                audience, campaign goals and available performance data.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="relative bg-[#071923] p-5 min-h-[175px] hover:bg-[#0a202a] transition-colors"
                >
                  <span className="text-[10px] font-semibold text-[#22bfce]">
                    {step.number}
                  </span>

                  <h3 className="text-[15px] font-semibold mt-6">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-[11px] leading-5 mt-2">
                    {step.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}

        <section
          aria-labelledby="marketing-use-cases-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>Who We Help</SectionLabel>

                <h2
                  id="marketing-use-cases-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Marketing for different businesses and growth stages.
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  Marketing activity can be adapted around the business model,
                  customer journey, target market and current stage of growth.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {useCases.map((item, index) => (
                  <div
                    key={item}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4 hover:border-[#0796A8]/40 transition-colors"
                  >
                    <div>
                      <span className="text-[8px] font-semibold text-[#0796A8]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="text-[#071923] text-[11px] font-semibold mt-1">
                        {item}
                      </h3>
                    </div>

                    <ArrowUpRight
                      size={13}
                      className="text-slate-300 group-hover:text-[#0796A8]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY DEVZORE */}

        <section
          aria-labelledby="marketing-why-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel>Why DevZore</SectionLabel>

              <h2
                id="marketing-why-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Marketing support built around{" "}
                <span className="text-[#0796A8]">
                  your business and audience.
                </span>
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3 max-w-2xl">
                We focus on practical campaign execution and clear
                communication instead of using the same marketing setup for
                every business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyDevZore.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-[#fbfcfc] p-5 hover:border-[#0796A8]/35 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#eef4f5] text-[#07899a] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="text-[#071923] text-[14px] font-semibold mt-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 text-[11px] leading-5 mt-1.5">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}

        <section
          aria-labelledby="marketing-related-heading"
          className="py-10 md:py-12 bg-[#f7f9fa] border-y border-slate-200"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div>
                <SectionLabel>Related Services</SectionLabel>

                <h2
                  id="marketing-related-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] mt-3"
                >
                  Support your wider digital growth.
                </h2>
              </div>

              <Link
                to="/allservices"
                onClick={scrollTop}
                className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#07899a]"
              >
                View All Services
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={scrollTop}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 hover:border-[#0796A8]/40 hover:-translate-y-1 transition-all"
                >
                  <span className="text-[8px] tracking-[0.15em] font-semibold text-[#0796A8]">
                    {service.label}
                  </span>

                  <h3 className="text-[#071923] text-[14px] font-semibold mt-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-[10px] leading-5 mt-2">
                    {service.desc}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[9px] font-medium text-slate-500 group-hover:text-[#07899a]">
                      Explore service
                    </span>

                    <ArrowUpRight
                      size={13}
                      className="text-[#07899a]"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section
          aria-labelledby="marketing-faq-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[980px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div>
                <SectionLabel>FAQ</SectionLabel>

                <h2
                  id="marketing-faq-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] mt-3"
                >
                  Digital marketing questions businesses commonly ask.
                </h2>
              </div>

              <a
                href="#marketing-project-enquiry"
                className="self-start md:self-auto inline-flex items-center gap-2 rounded-lg bg-[#071923] px-4 py-2.5 text-[10px] font-semibold text-white"
              >
                Ask Your Question
                <ArrowRight size={12} />
              </a>
            </div>

            <div className="border-t border-slate-200">
              {visibleFaqs.map((faq, index) => {
                const isOpen = activeFaq === index;

                return (
                  <div
                    key={faq.q}
                    className="border-b border-slate-200"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveFaq(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`marketing-faq-${index}`}
                      className="w-full flex items-center justify-between gap-5 py-4 text-left"
                    >
                      <span
                        className={`text-[13px] sm:text-[14px] font-semibold transition-colors ${
                          isOpen
                            ? "text-[#07899a]"
                            : "text-[#071923]"
                        }`}
                      >
                        {faq.q}
                      </span>

                      <span
                        className={`w-7 h-7 flex-shrink-0 rounded-full border flex items-center justify-center transition-all ${
                          isOpen
                            ? "border-[#0796A8] bg-[#0796A8] text-white"
                            : "border-slate-200 text-[#071923]"
                        }`}
                      >
                        {isOpen ? (
                          <Minus size={12} />
                        ) : (
                          <Plus size={12} />
                        )}
                      </span>
                    </button>

                    <div
                      id={`marketing-faq-${index}`}
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-3xl pb-4 text-[12px] leading-6 text-slate-600">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {faqs.length > 3 && (
              <div className="flex justify-center mt-5">
                <button
                  type="button"
                  onClick={() => {
                    setShowAllFaqs((current) => !current);
                    setActiveFaq(null);
                  }}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#071923]/15 bg-[#f8fafb] px-4 py-2.5 text-[10px] font-semibold text-[#071923] hover:border-[#0796A8]/50 transition-colors"
                >
                  {showAllFaqs
                    ? "Show Less Questions"
                    : `Show More Questions (${faqs.length - 3})`}

                  {showAllFaqs ? (
                    <ChevronUp size={13} />
                  ) : (
                    <ChevronDown size={13} />
                  )}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* PROJECT ENQUIRY */}

        <section
          id="marketing-project-enquiry"
          aria-labelledby="marketing-project-enquiry-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-70"
            style={darkGrid}
          />

          <div className="absolute -top-20 left-[5%] w-[450px] h-[450px] rounded-full bg-[#0796A8]/10 blur-[130px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel light>Start a Marketing Project</SectionLabel>

                <h2
                  id="marketing-project-enquiry-heading"
                  className="text-[30px] sm:text-[35px] md:text-[40px] leading-[1.06] tracking-[-0.04em] font-semibold mt-3"
                >
                  Tell us what you{" "}
                  <span className="text-[#25bfce]">
                    want your marketing to achieve.
                  </span>
                </h2>

                <p className="text-slate-300 text-[14px] leading-6 mt-4 max-w-lg">
                  Share your business, audience and current marketing
                  challenges. We can review the requirements and discuss which
                  channels may be appropriate.
                </p>

                <div className="mt-5 space-y-2.5">
                  {[
                    "Social media marketing",
                    "Meta and Google advertising",
                    "Lead generation campaigns",
                    "Content and analytics",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#19b9c8]/10 border border-[#19b9c8]/25 flex items-center justify-center">
                        <Check
                          size={10}
                          className="text-[#2ac6d4]"
                        />
                      </div>

                      <span className="text-[11px] font-medium text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/[0.08]">
                  <p className="text-[9px] uppercase tracking-[0.18em] font-semibold text-slate-500">
                    Prefer a direct conversation?
                  </p>

                  <a
                    href="mailto:hellodevzore@gmail.com"
                    className="inline-flex items-center gap-2 mt-2 text-[12px] font-medium text-[#26c4d2]"
                  >
                    <Mail size={14} />
                    hellodevzore@gmail.com
                  </a>
                </div>
              </div>

              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/[0.1] bg-[#0a202a]/90 p-5 sm:p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="marketing-name"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Your Name *
                    </label>

                    <input
                      id="marketing-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="marketing-email"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Email Address *
                    </label>

                    <input
                      id="marketing-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="marketing-company"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Company
                    </label>

                    <input
                      id="marketing-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="marketing-service"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Marketing Requirement
                    </label>

                    <select
                      id="marketing-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option>Digital Marketing</option>
                      <option>Social Media Management</option>
                      <option>Meta Ads</option>
                      <option>Google Ads</option>
                      <option>Lead Generation</option>
                      <option>Content Marketing</option>
                      <option>Email Marketing</option>
                      <option>Video Content</option>
                      <option>Marketing Analytics</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="marketing-timeline"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Preferred Timeline
                    </label>

                    <select
                      id="marketing-timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option value="">Select a timeline</option>
                      <option>As soon as possible</option>
                      <option>Within 1 month</option>
                      <option>1–3 months</option>
                      <option>Ongoing support</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="marketing-message"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Marketing Details *
                    </label>

                    <textarea
                      id="marketing-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business, target audience, current marketing activity and what you want to improve..."
                      className="w-full resize-none rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] leading-5 text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
                  <p className="text-[9px] leading-4 text-slate-500 max-w-sm">
                    Share enough information for us to understand your business
                    and current marketing needs. The complete scope can be
                    discussed afterwards.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-2 rounded-lg bg-[#1bbdca] hover:bg-[#28c9d5] px-5 py-3 text-[11px] font-semibold text-[#071923] transition-colors"
                  >
                    Send Marketing Enquiry
                    <Send size={13} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}

        <section className="bg-[#06151d] border-t border-white/[0.06]">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6 py-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-white text-[14px] font-semibold">
                  Ready to improve your digital marketing?
                </p>

                <p className="text-slate-500 text-[10px] mt-1">
                  Social media, paid campaigns, lead generation and marketing
                  support by DevZore.
                </p>
              </div>

              <Link
                to="/contact"
                onClick={scrollTop}
                className="inline-flex self-start items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-[10px] font-semibold text-[#071923] hover:bg-slate-100 transition-colors"
              >
                Contact DevZore
                <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DigitalMarketing;