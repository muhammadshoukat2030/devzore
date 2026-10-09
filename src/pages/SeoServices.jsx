import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CircleCheck,
  Code2,
  FileText,
  Gauge,
  Globe2,
  Layers3,
  LineChart,
  Link2,
  Mail,
  MapPin,
  Megaphone,
  Minus,
  Plus,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
  Target,
} from "lucide-react";

const SeoServices = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "SEO Services",
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

  // SEO SERVICES

  const services = [
    {
      icon: <Search size={21} />,
      number: "01",
      title: "Technical SEO Services",
      desc:
        "Technical SEO analysis focused on helping search engines crawl, understand and process important website pages more effectively.",
      points: [
        "Crawlability & indexing review",
        "Sitemaps & canonical checks",
        "Structured data review",
      ],
    },
    {
      icon: <FileText size={21} />,
      number: "02",
      title: "On-Page SEO",
      desc:
        "Improve page-level search signals through clearer titles, descriptions, headings, content structure and internal linking.",
      points: [
        "Metadata optimisation",
        "Heading structure",
        "Internal linking",
      ],
    },
    {
      icon: <Target size={21} />,
      number: "03",
      title: "Keyword Research & Strategy",
      desc:
        "Research relevant searches and connect them with service pages, landing pages and useful supporting content.",
      points: [
        "Keyword research",
        "Search intent analysis",
        "Page mapping",
      ],
    },
    {
      icon: <FileText size={21} />,
      number: "04",
      title: "SEO Content Strategy",
      desc:
        "Plan and improve service pages, landing pages, articles and supporting content around relevant search intent.",
      points: [
        "Service page content",
        "Content planning",
        "Topic development",
      ],
    },
    {
      icon: <Link2 size={21} />,
      number: "05",
      title: "Off-Page SEO Strategy",
      desc:
        "Review backlink profiles and identify sustainable opportunities for relevant mentions, outreach and authority development.",
      points: [
        "Backlink review",
        "Competitor research",
        "Outreach opportunities",
      ],
    },
    {
      icon: <MapPin size={21} />,
      number: "06",
      title: "Local SEO",
      desc:
        "Support location-based visibility through local search analysis, business information consistency and website optimisation.",
      points: [
        "Local keyword research",
        "Business profile review",
        "Local page optimisation",
      ],
    },
    {
      icon: <Smartphone size={21} />,
      number: "07",
      title: "Mobile SEO",
      desc:
        "Review mobile usability, responsive behaviour and important performance signals across key website pages.",
      points: [
        "Mobile usability",
        "Core Web Vitals",
        "Responsive review",
      ],
    },
    {
      icon: <Layers3 size={21} />,
      number: "08",
      title: "E-Commerce SEO",
      desc:
        "Search optimisation for online stores including products, categories, site architecture and commercial landing pages.",
      points: [
        "Product optimisation",
        "Category structure",
        "Commercial search intent",
      ],
    },
    {
      icon: <BarChart3 size={21} />,
      number: "09",
      title: "SEO Analytics & Reporting",
      desc:
        "Review search and analytics data to understand visibility, clicks, landing pages and important organic trends.",
      points: [
        "Search performance",
        "Landing page analysis",
        "Progress reporting",
      ],
    },
  ];

  // SEO TYPES

  const seoTypes = [
    {
      icon: <Search size={19} />,
      title: "Technical SEO",
      desc:
        "Crawling, indexing, canonical URLs, sitemaps, structured data and technical website health.",
    },
    {
      icon: <FileText size={19} />,
      title: "On-Page SEO",
      desc:
        "Titles, descriptions, headings, content relevance, internal links and page structure.",
    },
    {
      icon: <Link2 size={19} />,
      title: "Off-Page SEO",
      desc:
        "Backlink analysis, relevant mentions, outreach opportunities and authority development.",
    },
    {
      icon: <MapPin size={19} />,
      title: "Local SEO",
      desc:
        "Location-based search intent, local pages and business profile considerations.",
    },
    {
      icon: <Layers3 size={19} />,
      title: "E-Commerce SEO",
      desc:
        "Products, categories, commercial searches, internal linking and store architecture.",
    },
    {
      icon: <Globe2 size={19} />,
      title: "International SEO",
      desc:
        "International targeting, site structure and multilingual search considerations.",
    },
  ];

  // SEO STANDARDS

  const practices = [
    {
      icon: <Search size={19} />,
      title: "Search Visibility",
      desc:
        "Improve how important pages can be discovered, crawled and understood by search engines.",
    },
    {
      icon: <Gauge size={19} />,
      title: "Technical Health",
      desc:
        "Review indexing, performance, redirects, duplicate URLs and structural issues that may affect search.",
    },
    {
      icon: <Target size={19} />,
      title: "Search Intent",
      desc:
        "Connect pages with the services, questions and topics relevant users are actually searching for.",
    },
    {
      icon: <LineChart size={19} />,
      title: "Measurable Progress",
      desc:
        "Use search and analytics data to understand changes in impressions, clicks and landing-page visibility.",
    },
    {
      icon: <ShieldCheck size={19} />,
      title: "Sustainable SEO",
      desc:
        "Focus on useful content and sound implementation instead of short-term ranking shortcuts.",
    },
    {
      icon: <Code2 size={19} />,
      title: "Developer-Led Fixes",
      desc:
        "Technical recommendations can be connected directly with website development and implementation work.",
    },
  ];

  // SEO PROBLEMS

  const seoProblems = [
    "Important pages are not appearing in Google",
    "Pages are discovered but remain unindexed",
    "Search Console reports crawl or canonical problems",
    "Website traffic has dropped or stopped growing",
    "Service pages are not visible for relevant searches",
    "The website has weak internal linking",
    "Mobile performance needs improvement",
    "The website was redesigned without an SEO review",
  ];

  // PROCESS

  const process = [
    {
      number: "01",
      title: "SEO Audit & Discovery",
      desc:
        "We review the website structure, important pages, technical setup, current visibility and business priorities.",
    },
    {
      number: "02",
      title: "Keyword & Intent Research",
      desc:
        "Relevant searches are researched and mapped to existing or planned pages based on intent and business value.",
    },
    {
      number: "03",
      title: "Technical SEO",
      desc:
        "Priority technical areas can include crawling, indexing, canonicals, redirects, structured data and mobile performance.",
    },
    {
      number: "04",
      title: "On-Page Optimisation",
      desc:
        "Important pages are improved through clearer metadata, headings, content structure and internal linking.",
    },
    {
      number: "05",
      title: "Content & Authority",
      desc:
        "Useful supporting content and appropriate authority-building opportunities can be planned where relevant.",
    },
    {
      number: "06",
      title: "Measure & Improve",
      desc:
        "Search performance is reviewed over time to identify changes, opportunities and areas requiring further improvement.",
    },
  ];

  // USE CASES

  const useCases = [
    "Business Websites",
    "Startup Websites",
    "SaaS Products",
    "E-Commerce Stores",
    "Service Businesses",
    "Local Businesses",
    "Corporate Websites",
    "React Websites",
    "Next.js Websites",
    "Content Websites",
    "Growing Companies",
    "Custom Web Platforms",
  ];

  // WHY DEVZORE

  const whyDevZore = [
    {
      icon: <Code2 size={19} />,
      title: "Development + SEO",
      desc:
        "Technical SEO recommendations can be connected directly with frontend and website implementation.",
    },
    {
      icon: <Search size={19} />,
      title: "Technical Understanding",
      desc:
        "We consider crawlability, metadata delivery, internal links, structured data and website architecture.",
    },
    {
      icon: <Target size={19} />,
      title: "Business-Focused Strategy",
      desc:
        "Search opportunities are considered in relation to your actual services, products and target customers.",
    },
    {
      icon: <ShieldCheck size={19} />,
      title: "No Ranking Guarantees",
      desc:
        "We focus on work that can be implemented and measured instead of promising specific search positions.",
    },
    {
      icon: <BarChart3 size={19} />,
      title: "Data-Informed Decisions",
      desc:
        "Search and analytics information can be used to understand what is changing and where improvement is needed.",
    },
    {
      icon: <LineChart size={19} />,
      title: "Long-Term Improvement",
      desc:
        "SEO can continue evolving as the website gains pages, content, products and new search opportunities.",
    },
  ];

  // FAQ

  const faqs = [
    {
      q: "How long does SEO take to show results?",
      a:
        "SEO timelines vary by website history, competition, technical condition, content quality and target searches. Some technical changes may be processed relatively quickly, while meaningful organic growth often requires consistent work over a longer period.",
    },
    {
      q: "Can you guarantee first-page or number-one Google rankings?",
      a:
        "No. Search rankings are controlled by search engines and can change because of competition, algorithm updates, website quality and many other factors. DevZore focuses on technical quality, useful content, search intent and sustainable SEO practices.",
    },
    {
      q: "What is included in a technical SEO audit?",
      a:
        "A technical SEO audit can include crawlability, indexation, canonical URLs, redirects, XML sitemaps, robots.txt, duplicate URLs, broken links, structured data, mobile usability and important performance signals.",
    },
    {
      q: "What is the difference between on-page and off-page SEO?",
      a:
        "On-page SEO focuses on your own website, including content, metadata, headings, internal links and page structure. Off-page SEO focuses on external signals such as relevant backlinks and mentions.",
    },
    {
      q: "Do you provide local SEO services?",
      a:
        "Yes. Local SEO can include local keyword research, website content, business information consistency, business profile review and local search performance analysis.",
    },
    {
      q: "Can you help with e-commerce SEO?",
      a:
        "Yes. E-commerce SEO can cover product and category pages, internal linking, structured data, duplicate URLs, site architecture and commercial search intent.",
    },
    {
      q: "Can you work on React and custom websites?",
      a:
        "Yes. Technical SEO can be reviewed for React and other custom websites, including rendering, crawlability, metadata delivery, internal links and how important content is exposed to search engines.",
    },
    {
      q: "Do you work with WordPress and Shopify websites?",
      a:
        "SEO principles apply across different platforms. The implementation approach varies depending on the website platform and technical setup.",
    },
    {
      q: "How much do SEO services cost?",
      a:
        "SEO cost depends on website size, technical condition, target market, competition and whether the project requires auditing, implementation, content work or ongoing optimisation.",
    },
    {
      q: "Can SEO help a website get more organic traffic?",
      a:
        "SEO can improve a website's ability to appear for relevant searches by improving technical accessibility, content relevance and overall search visibility. Actual traffic growth depends on search demand, competition and many other factors.",
    },
    {
      q: "Do you help with Google Search Console indexing issues?",
      a:
        "Yes. Indexing work can include reviewing page indexing reports, canonicalisation, sitemap discovery, crawl accessibility, duplicate URLs and other technical signals.",
    },
    {
      q: "Do you provide SEO for small businesses?",
      a:
        "Yes. Small-business SEO can include technical SEO, service page optimisation, local search work, internal linking and search performance monitoring.",
    },
    {
      q: "Do you provide SEO for startups?",
      a:
        "Yes. Startup SEO can focus on technical foundations, relevant landing pages, keyword research and content planning for long-term organic visibility.",
    },
    {
      q: "Do you provide international SEO?",
      a:
        "International SEO can include market-specific keyword research, website structure, localisation considerations and hreflang planning where appropriate.",
    },
    {
      q: "Can DevZore work with SEO clients remotely?",
      a:
        "Yes. SEO projects can be handled remotely using website access, analytics data, search reports and organised communication.",
    },
    {
      q: "What does an SEO consultant do?",
      a:
        "An SEO consultant reviews a website, identifies technical and content opportunities and recommends improvements related to crawling, indexing, keywords, content, internal links and search visibility.",
    },
  ];

  // RELATED SERVICES

  const relatedServices = [
    {
      label: "MARKETING",
      title: "Digital Marketing",
      desc:
        "Connect SEO with wider digital campaigns, content and online business growth.",
      path: "/digital-marketing",
    },
    {
      label: "WEB",
      title: "Web Development",
      desc:
        "Build fast, responsive and maintainable websites with strong technical foundations.",
      path: "/web-development",
    },
    {
      label: "COMMERCE",
      title: "E-Commerce Development",
      desc:
        "Develop online stores with structured products, categories and customer journeys.",
      path: "/ecommerce",
    },
    {
      label: "MAINTENANCE",
      title: "Maintenance & Support",
      desc:
        "Keep websites updated while addressing technical issues and ongoing improvements.",
      path: "/maintenance",
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
      `SEO Services Enquiry - ${formData.name}`
    );

    const body = encodeURIComponent(
`Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Service: ${formData.service}
Timeline: ${formData.timeline || "Not specified"}

Project Details:
${formData.message}`
    );

    window.location.href = `mailto:hellodevzore@gmail.com?subject=${subject}&body=${body}`;
  };

  // STRUCTURED DATA

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://devzore.com/seo-services#service",
    name: "SEO Services",
    url: "https://devzore.com/seo-services",
    serviceType: "Search Engine Optimization Services",
    description:
      "Professional SEO services including technical SEO, on-page SEO, keyword research, local SEO, ecommerce SEO, search visibility analysis and SEO strategy.",
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
      name: "SEO Services",
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
        name: "SEO Services",
        item: "https://devzore.com/seo-services",
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
          aria-labelledby="seo-heading"
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

          <div className="relative max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10 pt-20 sm:pt-24 lg:pt-24 pb-12 sm:pb-13">
            <div className="grid lg:grid-cols-[0.96fr_1.04fr] gap-8 lg:gap-12 items-center">
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-[#c4ced5]">
                    <CircleCheck
                      size={14}
                      className="text-[#26becb]"
                    />
                    SEO Services
                  </div>
                </div>

                <h1
                  id="seo-heading"
                  className="max-w-[800px] text-[40px] sm:text-[48px] lg:text-[58px] xl:text-[53px] leading-[1.04] font-semibold tracking-[-0.045em]"
                >
                  Improve how customers{" "}
                  <span className="text-[#22bdca]">
                    discover your business in search.
                  </span>
                </h1>

                <p className="max-w-[700px] mt-4 text-[16px] sm:text-[13.5px] leading-7 text-slate-300">
                  DevZore provides technical SEO, on-page optimisation,
                  keyword research, local SEO, e-commerce SEO and search
                  strategy for modern business websites.
                </p>

                <p className="max-w-[650px] mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
                  We combine SEO analysis with web-development knowledge to
                  identify technical issues, improve important pages and build
                  stronger foundations for organic search visibility.
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-6">
                  <a
                    href="#seo-project-enquiry"
                    className="inline-flex justify-center items-center gap-2.5 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[12px] font-semibold text-[#071923] transition-all"
                  >
                    Discuss Your SEO
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href="#seo-services"
                    className="inline-flex justify-center items-center gap-2.5 px-4 py-3 text-[12px] font-semibold text-white hover:text-[#28c5d4] transition-colors"
                  >
                    Explore SEO Services
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
                  {[
                    "Technical SEO",
                    "On-Page SEO",
                    "Search Strategy",
                    "SEO Analytics",
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

              {/* SEO VISUAL */}

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
                            <Search
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

                          <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3">
                            <div className="flex items-end gap-2 h-20">
                              {[30, 48, 42, 60, 68, 78, 92].map(
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
                        </div>
                      </div>
                    </div>

                    <div className="absolute -left-6 top-14 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Search
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[9px] font-semibold mt-2">
                        Visibility
                      </p>
                    </div>

                    <div className="absolute -right-5 top-16 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Gauge
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[9px] font-semibold mt-2">
                        Performance
                      </p>
                    </div>

                    <div className="absolute -right-4 bottom-10 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <LineChart
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
                  ["01", "Technical SEO"],
                  ["02", "On-Page SEO"],
                  ["03", "Local SEO"],
                  ["04", "SEO Strategy"],
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
                <SectionLabel>Search Engine Optimisation</SectionLabel>

                <h2 className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3">
                  SEO starts with{" "}
                  <span className="text-[#0796A8]">
                    a website search engines can understand.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 text-slate-700">
                  Organic search visibility depends on more than adding
                  keywords to a page. Search engines also need clear site
                  structure, crawlable content, useful information and
                  consistent technical signals.
                </p>

                <p className="text-[13px] leading-6 mt-3 text-slate-500">
                  DevZore combines technical SEO, content structure and
                  development knowledge to help identify issues and improve the
                  parts of a website that influence search visibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}

        <section
          id="seo-services"
          aria-labelledby="seo-services-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel>SEO Services</SectionLabel>

              <h2
                id="seo-services-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                SEO services built around your website and search goals.
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3 max-w-2xl">
                Different websites have different search problems. We review
                technical foundations, page relevance and search data before
                deciding what should be prioritised.
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

        {/* SEO TYPES */}

        <section
          aria-labelledby="seo-types-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-12 items-start">
              <div>
                <SectionLabel>SEO Areas</SectionLabel>

                <h2
                  id="seo-types-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Search optimisation across{" "}
                  <span className="text-[#0796A8]">
                    different parts of your website.
                  </span>
                </h2>

                <p className="text-slate-600 text-[14px] leading-6 mt-4">
                  SEO can involve technical, content, local and external
                  signals. The right combination depends on the website and
                  what needs to improve.
                </p>

                <a
                  href="#seo-project-enquiry"
                  className="inline-flex items-center gap-2 mt-5 text-[11px] font-semibold text-[#07899a] hover:text-[#071923] transition-colors"
                >
                  Discuss Your SEO
                  <ArrowRight size={13} />
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {seoTypes.map((item) => (
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

        {/* SEO STANDARDS */}

        <section
          aria-labelledby="seo-standards-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-70"
            style={darkGrid}
          />

          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel light>SEO Approach</SectionLabel>

              <h2
                id="seo-standards-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                Focused on improvements we can{" "}
                <span className="text-[#25bfce]">
                  analyse, implement and measure.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3 max-w-2xl">
                Search rankings cannot be guaranteed, but website quality,
                technical implementation and page relevance can be reviewed and
                improved systematically.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {practices.map((item) => (
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

        {/* SEO PROBLEMS */}

        <section
          aria-labelledby="seo-problems-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <SectionLabel>SEO Review</SectionLabel>

                <div className="w-10 h-10 mt-4 rounded-xl bg-[#edf5f6] text-[#07899a] flex items-center justify-center">
                  <Search size={19} />
                </div>

                <h2
                  id="seo-problems-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-4"
                >
                  Is your website struggling to appear for important searches?
                </h2>

                <p className="text-slate-600 text-[14px] leading-6 mt-3">
                  Search visibility problems can come from technical issues,
                  weak page relevance, poor internal linking or a combination
                  of several factors.
                </p>

                <p className="text-slate-500 text-[12px] leading-5 mt-3">
                  We can review the website and identify the areas that deserve
                  attention before making unnecessary changes.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#f8fafb] p-5">
                <p className="text-[#071923] text-[10px] font-semibold tracking-[0.16em] uppercase">
                  Common SEO problems
                </p>

                <div className="grid sm:grid-cols-2 gap-2.5 mt-4">
                  {seoProblems.map((item) => (
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
          aria-labelledby="seo-process-heading"
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
                id="seo-process-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                From SEO audit{" "}
                <span className="text-[#25bfce]">
                  to measurable improvements.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3">
                A structured process helps prioritise technical work, page
                optimisation and ongoing search opportunities.
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
          aria-labelledby="seo-use-cases-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>Who We Help</SectionLabel>

                <h2
                  id="seo-use-cases-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  SEO for different websites and business models.
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  The SEO scope can be adapted around the type of website,
                  target market and search opportunities relevant to the
                  business.
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
          aria-labelledby="seo-why-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel>Why DevZore</SectionLabel>

              <h2
                id="seo-why-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                SEO backed by{" "}
                <span className="text-[#0796A8]">
                  technical development understanding.
                </span>
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3 max-w-2xl">
                Our SEO approach considers both what search engines need to
                understand and how those changes are actually implemented in
                the website.
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
          aria-labelledby="seo-related-heading"
          className="py-10 md:py-12 bg-[#f7f9fa] border-y border-slate-200"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div>
                <SectionLabel>Related Services</SectionLabel>

                <h2
                  id="seo-related-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] mt-3"
                >
                  Support your website beyond search optimisation.
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
          aria-labelledby="seo-faq-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[980px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div>
                <SectionLabel>FAQ</SectionLabel>

                <h2
                  id="seo-faq-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] mt-3"
                >
                  SEO questions businesses commonly ask.
                </h2>
              </div>

              <a
                href="#seo-project-enquiry"
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
                      aria-controls={`seo-faq-${index}`}
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
                      id={`seo-faq-${index}`}
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
          id="seo-project-enquiry"
          aria-labelledby="seo-project-enquiry-heading"
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
                <SectionLabel light>Start an SEO Project</SectionLabel>

                <h2
                  id="seo-project-enquiry-heading"
                  className="text-[30px] sm:text-[35px] md:text-[40px] leading-[1.06] tracking-[-0.04em] font-semibold mt-3"
                >
                  Tell us what is{" "}
                  <span className="text-[#25bfce]">
                    happening with your search visibility.
                  </span>
                </h2>

                <p className="text-slate-300 text-[14px] leading-6 mt-4 max-w-lg">
                  Share your website and the SEO problem you are trying to
                  solve. We can review the requirements and discuss the most
                  appropriate next step.
                </p>

                <div className="mt-5 space-y-2.5">
                  {[
                    "Technical SEO and indexing",
                    "On-page optimisation",
                    "Keyword and search strategy",
                    "Local and e-commerce SEO",
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
                      htmlFor="seo-name"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Your Name *
                    </label>

                    <input
                      id="seo-name"
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
                      htmlFor="seo-email"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Email Address *
                    </label>

                    <input
                      id="seo-email"
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
                      htmlFor="seo-company"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Company
                    </label>

                    <input
                      id="seo-company"
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
                      htmlFor="seo-service"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      SEO Requirement
                    </label>

                    <select
                      id="seo-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option>SEO Services</option>
                      <option>Technical SEO</option>
                      <option>SEO Audit</option>
                      <option>On-Page SEO</option>
                      <option>Keyword Research</option>
                      <option>Local SEO</option>
                      <option>E-Commerce SEO</option>
                      <option>Indexing Issues</option>
                      <option>SEO Content Strategy</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="seo-timeline"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Preferred Timeline
                    </label>

                    <select
                      id="seo-timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option value="">Select a timeline</option>
                      <option>As soon as possible</option>
                      <option>Within 1 month</option>
                      <option>1–3 months</option>
                      <option>3+ months</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="seo-message"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Website / SEO Details *
                    </label>

                    <textarea
                      id="seo-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your website, target market and the SEO or indexing problem you want to improve..."
                      className="w-full resize-none rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] leading-5 text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
                  <p className="text-[9px] leading-4 text-slate-500 max-w-sm">
                    Share enough information for us to understand the website
                    and current search issue. The complete SEO scope can be
                    discussed afterwards.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-2 rounded-lg bg-[#1bbdca] hover:bg-[#28c9d5] px-5 py-3 text-[11px] font-semibold text-[#071923] transition-colors"
                  >
                    Send SEO Enquiry
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
                  Need help understanding your website&apos;s search visibility?
                </p>

                <p className="text-slate-500 text-[10px] mt-1">
                  Technical SEO, indexing analysis and search optimisation by
                  DevZore.
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

export default SeoServices;