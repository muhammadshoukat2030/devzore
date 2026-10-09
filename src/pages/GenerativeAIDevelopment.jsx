import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CircleCheck,
  Code2,
  Database,
  FileSearch,
  Globe2,
  Layers3,
  Mail,
  MessageSquare,
  Minus,
  Network,
  Plus,
  Search,
  Send,
  Server,
  Settings2,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const GenerativeAIDevelopment = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Generative AI Development",
    timeline: "",
    message: "",
  });

  /* =========================================================
     BACKGROUND GRIDS
  ========================================================= */

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

  const whatsappUrl =
    "https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20Generative%20AI%20development.";

  /* =========================================================
     AI SERVICES
  ========================================================= */

  const services = [
    {
      icon: <Bot size={20} />,
      number: "01",
      title: "AI Chatbot Development",
      desc:
        "Custom AI chatbots for websites, SaaS platforms and business applications using large language models and your business requirements.",
      points: [
        "Website AI chatbots",
        "Customer support assistants",
        "Internal business assistants",
      ],
    },
    {
      icon: <BrainCircuit size={20} />,
      number: "02",
      title: "LLM Application Development",
      desc:
        "Custom applications powered by large language models for content, research, support, workflow assistance and business use cases.",
      points: [
        "LLM-powered applications",
        "Structured AI outputs",
        "Model API integration",
      ],
    },
    {
      icon: <FileSearch size={20} />,
      number: "03",
      title: "RAG & Knowledge Base AI",
      desc:
        "Retrieval-Augmented Generation systems that connect AI applications with selected documents, business data and knowledge sources.",
      points: [
        "Knowledge-base search",
        "Vector database integration",
        "Source-aware responses",
      ],
    },
    {
      icon: <Workflow size={20} />,
      number: "04",
      title: "AI Agents & Automation",
      desc:
        "AI-assisted workflows that coordinate defined tasks, tools and application actions according to your business process.",
      points: [
        "Tool & function calling",
        "Multi-step workflows",
        "Human review checkpoints",
      ],
    },
    {
      icon: <Network size={20} />,
      number: "05",
      title: "AI API Integration",
      desc:
        "Integrate suitable generative AI model APIs into existing websites, applications, dashboards and SaaS products.",
      points: [
        "OpenAI integration",
        "Claude & Gemini integration",
        "Streaming AI responses",
      ],
    },
    {
      icon: <MessageSquare size={20} />,
      number: "06",
      title: "Conversational AI",
      desc:
        "Conversational interfaces that help users interact with business information, services and application functionality using natural language.",
      points: [
        "Context-aware conversations",
        "Conversation memory",
        "Business knowledge integration",
      ],
    },
    {
      icon: <Database size={20} />,
      number: "07",
      title: "AI Data & Vector Search",
      desc:
        "Data pipelines and vector-search infrastructure for AI applications that need semantic retrieval from selected content.",
      points: [
        "Embedding generation",
        "Semantic search",
        "Retrieval pipelines",
      ],
    },
    {
      icon: <Code2 size={20} />,
      number: "08",
      title: "Custom AI SaaS Development",
      desc:
        "Frontend and backend development for SaaS products that include generative AI capabilities as part of their core workflow.",
      points: [
        "AI SaaS architecture",
        "Dashboard development",
        "Usage management",
      ],
    },
    {
      icon: <Settings2 size={20} />,
      number: "09",
      title: "Existing App AI Integration",
      desc:
        "Add suitable AI capabilities to an existing web application, internal platform, dashboard or software product.",
      points: [
        "Codebase review",
        "Frontend & backend integration",
        "Testing & deployment",
      ],
    },
  ];

  /* =========================================================
     CAPABILITIES
  ========================================================= */

  const capabilities = [
    {
      icon: <BrainCircuit size={19} />,
      title: "Large Language Models",
      desc:
        "Integrate suitable LLMs into applications for language-based AI functionality.",
    },
    {
      icon: <Search size={19} />,
      title: "RAG Systems",
      desc:
        "Retrieve relevant information from selected data before generating AI responses.",
    },
    {
      icon: <Workflow size={19} />,
      title: "AI Workflows",
      desc:
        "Connect model outputs with defined application tools and business processes.",
    },
    {
      icon: <ShieldCheck size={19} />,
      title: "Controlled AI Integration",
      desc:
        "Build validation, permissions and application rules around AI-powered features.",
    },
  ];

  /* =========================================================
     TECHNOLOGY
  ========================================================= */

  const technologyGroups = [
    {
      icon: <BrainCircuit size={19} />,
      title: "AI Models & APIs",
      items: [
        "OpenAI",
        "Anthropic Claude",
        "Google Gemini",
        "Suitable LLM APIs",
      ],
    },
    {
      icon: <Database size={19} />,
      title: "AI Data Layer",
      items: [
        "Embeddings",
        "Vector Databases",
        "Semantic Search",
        "Document Retrieval",
      ],
    },
    {
      icon: <Code2 size={19} />,
      title: "Application Development",
      items: ["React", "Next.js", "Node.js", "Express"],
    },
    {
      icon: <Server size={19} />,
      title: "Backend & Infrastructure",
      items: [
        "REST APIs",
        "MongoDB",
        "PostgreSQL",
        "Cloud Deployment",
      ],
    },
  ];

  /* =========================================================
     USE CASES
  ========================================================= */

  const useCases = [
    "Customer Support AI",
    "Website AI Chatbots",
    "Document Q&A Systems",
    "Knowledge Assistants",
    "AI SaaS Applications",
    "Content Assistance",
    "Research Workflows",
    "Lead Qualification",
    "Business Automation",
    "Semantic Search",
    "AI Dashboards",
    "Internal AI Tools",
  ];

  /* =========================================================
     PROCESS
  ========================================================= */

  const process = [
    {
      number: "01",
      title: "AI Use Case Discovery",
      desc:
        "We review your business problem, users, available data and expected workflow to understand where generative AI may provide useful functionality.",
    },
    {
      number: "02",
      title: "Solution & Model Planning",
      desc:
        "We define the application architecture, suitable model approach, integrations, data requirements and technical constraints.",
    },
    {
      number: "03",
      title: "Prototype & AI Workflow",
      desc:
        "The core AI workflow can be prototyped to evaluate prompts, retrieval behaviour, model responses and application interaction.",
    },
    {
      number: "04",
      title: "Application Development",
      desc:
        "Frontend, backend, APIs, authentication, databases and AI functionality are developed around the approved project scope.",
    },
    {
      number: "05",
      title: "Testing & Evaluation",
      desc:
        "The application is tested for workflows, response handling, edge cases, integrations and overall user experience.",
    },
    {
      number: "06",
      title: "Deployment & Improvement",
      desc:
        "After deployment, model usage and application behaviour can be reviewed and AI workflows refined where required.",
    },
  ];

  /* =========================================================
     CUSTOM AI
  ========================================================= */

  const customAiSolutions = [
    {
      icon: <Bot size={19} />,
      title: "AI Chatbots",
      desc:
        "Custom conversational assistants for websites, SaaS products, customer support and internal business tools.",
    },
    {
      icon: <FileSearch size={19} />,
      title: "RAG & Knowledge AI",
      desc:
        "Connect AI applications with selected documents, business knowledge and vector-search systems.",
    },
    {
      icon: <BrainCircuit size={19} />,
      title: "LLM Applications",
      desc:
        "Build custom applications using suitable large language models, structured outputs and business logic.",
    },
    {
      icon: <Workflow size={19} />,
      title: "AI Agents & Automation",
      desc:
        "Develop controlled AI workflows that interact with APIs, tools and application functions for defined tasks.",
    },
  ];

  const integrationPoints = [
    "OpenAI, Claude & Gemini API integration",
    "Retrieval-Augmented Generation (RAG)",
    "Vector databases & semantic search",
    "Frontend & backend development",
    "Authentication & user accounts",
    "Database & REST API integration",
    "AI agent tools & workflows",
    "AI-enabled SaaS functionality",
  ];

  /* =========================================================
     FAQ
  ========================================================= */

  const faqs = [
    {
      q: "What is Generative AI development?",
      a:
        "Generative AI development involves building software that uses AI models to generate or transform content, answer questions, work with business knowledge, assist users or support defined application workflows. This can include AI chatbots, LLM applications, RAG systems, AI assistants and AI-enabled SaaS products.",
    },
    {
      q: "What Generative AI development services does DevZore provide?",
      a:
        "DevZore can develop AI chatbots, LLM-powered applications, Retrieval-Augmented Generation systems, AI assistants, AI workflows, vector-search systems and custom AI-enabled web or SaaS applications. We can also integrate suitable AI APIs into existing software.",
    },
    {
      q: "Can you integrate OpenAI into my website or application?",
      a:
        "Yes. OpenAI APIs can be integrated into suitable websites, SaaS applications and custom software for features such as conversational interfaces, structured outputs, content assistance and application-specific AI workflows.",
    },
    {
      q: "Can you work with Claude and Gemini as well?",
      a:
        "Yes. Depending on the project requirements, applications can integrate suitable model APIs such as Anthropic Claude or Google Gemini. Model selection should be based on required functionality, technical constraints, cost considerations and application architecture.",
    },
    {
      q: "Can you build an AI chatbot using my business data?",
      a:
        "Yes. Where appropriate, a Retrieval-Augmented Generation workflow can connect an AI assistant with selected business documents, website content or other approved knowledge sources so relevant information can be retrieved as context for responses.",
    },
    {
      q: "What is RAG in Generative AI?",
      a:
        "RAG stands for Retrieval-Augmented Generation. It retrieves relevant information from a selected knowledge source and provides that information as context to the AI model before a response is generated.",
    },
    {
      q: "Can you build AI agents?",
      a:
        "Yes. We can develop AI-assisted workflows that use defined tools, APIs and application functions to perform multi-step tasks. The exact level of automation depends on the business process, integrations and controls required around AI actions.",
    },
    {
      q: "Can Generative AI be added to an existing application?",
      a:
        "Yes. Existing React, Next.js, Node.js, MERN stack and other suitable web applications can be reviewed for AI integration. Implementation depends on the existing architecture and the AI feature you want to introduce.",
    },
    {
      q: "How much does Generative AI application development cost?",
      a:
        "Cost depends on project scope, application complexity, model integration, data requirements, RAG or vector-search requirements, authentication, third-party integrations and deployment needs.",
    },
    {
      q: "How long does it take to build a Generative AI application?",
      a:
        "Development time depends on application complexity. A focused AI feature or prototype can require less time than a complete SaaS product with authentication, RAG, dashboards, integrations and custom workflows.",
    },
    {
      q: "Can you build a complete AI SaaS product?",
      a:
        "Yes. DevZore can work on frontend development, backend APIs, authentication, databases, AI model integration, dashboards and other application components required for a custom AI-enabled SaaS product.",
    },
    {
      q: "Can AI responses always be guaranteed to be correct?",
      a:
        "No. Generative AI models can produce incorrect or incomplete outputs. Application design can reduce risk through retrieval, validation, structured outputs, business rules and human review, but AI-generated responses should not be treated as inherently guaranteed to be correct.",
    },
  ];

  /* =========================================================
     RELATED SERVICES
  ========================================================= */

  const relatedServices = [
    {
      label: "PRODUCT",
      title: "SaaS Product Development",
      desc:
        "Custom SaaS platforms with frontend, backend, authentication, dashboards and scalable product workflows.",
      path: "/saas-product-development",
    },
    {
      label: "BACKEND",
      title: "Backend & API Development",
      desc:
        "Backend systems, REST APIs, authentication, databases and third-party service integrations.",
      path: "/backend-api",
    },
    {
      label: "WEB",
      title: "Web Development",
      desc:
        "Modern websites and web applications with responsive interfaces and business-focused functionality.",
      path: "/web-development",
    },
    {
      label: "MVP",
      title: "Startup MVP Development",
      desc:
        "Focused first product releases for startups validating new digital products and software ideas.",
      path: "/startup-mvp",
    },
  ];

  /* =========================================================
     HELPERS
  ========================================================= */

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
      `Generative AI Development Enquiry - ${formData.name}`
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

    window.location.href =
      `mailto:hellodevzore@gmail.com?subject=${subject}&body=${body}`;
  };

  /* =========================================================
     STRUCTURED DATA
  ========================================================= */

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://devzore.com/generative-ai-development#service",
    name: "Generative AI Development Services",
    url: "https://devzore.com/generative-ai-development",
    serviceType: "Generative AI Development",
    description:
      "Generative AI development services including AI chatbot development, LLM applications, RAG systems, AI agents, AI API integration, vector search and custom AI SaaS development.",
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
      name: "Generative AI Development Services",
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
        name: "Generative AI Development",
        item: "https://devzore.com/generative-ai-development",
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

  /* =========================================================
     SECTION LABEL
  ========================================================= */

  const SectionLabel = ({ children, light = false }) => (
    <div
      className={`flex items-center gap-2.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase ${
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
        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          aria-labelledby="generative-ai-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 right-[5%] w-[520px] h-[520px] rounded-full bg-[#078fa5]/15 blur-[130px]" />

            <div
              className="absolute inset-0 opacity-50"
              style={darkGrid}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#04111a] via-[#04111a]/95 to-[#04111a]/70" />
          </div>

          <div className="relative max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10 pt-14 sm:pt-16 lg:pt-25 pb-9 sm:pb-10 lg:pb-11">
            <div className="grid lg:grid-cols-[0.96fr_1.04fr] gap-7 lg:gap-10 items-center">
              {/* LEFT */}

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-[#c4ced5]">
                    <Sparkles
                      size={13}
                      className="text-[#26becb]"
                    />
                    Generative AI Development
                  </div>
                </div>

                <h1
                  id="generative-ai-heading"
                  className="max-w-[780px] text-[38px] sm:text-[46px] lg:text-[58px] xl:text-[54px] leading-[1.04] font-semibold tracking-[-0.045em]"
                >
                  Generative AI built for{" "}
                  <span className="text-[#22bdca]">
                    real business workflows.
                  </span>
                </h1>

                <p className="max-w-[680px] mt-4 text-[15px] sm:text-[16px] lg:text-[13.5px] leading-7 font-normal text-slate-300">
                  DevZore develops AI chatbots, LLM applications, RAG systems,
                  AI agents and AI-enabled SaaS products for businesses and
                  startups.
                </p>

                <p className="max-w-[640px] mt-2 text-[13px] leading-6 font-normal text-slate-400">
                  We combine generative AI models with application logic,
                  business data, APIs, databases and modern web development to
                  build useful AI-powered software.
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5 mt-5">
                  <a
                    href="#ai-project-enquiry"
                    className="inline-flex justify-center items-center gap-2 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[12px] font-semibold text-[#071923] transition-all"
                  >
                    Discuss Your AI Project
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href="#ai-development-services"
                    className="inline-flex justify-center items-center gap-2 px-5 py-3 text-[12px] font-semibold text-white hover:text-[#28c5d4] transition-colors"
                  >
                    Explore AI Services
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
                  {[
                    "AI Chatbots",
                    "LLM Apps",
                    "RAG Systems",
                    "AI Agents",
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

              {/* RIGHT AI VISUAL */}

              <div className="relative min-h-[340px] lg:min-h-[390px] hidden md:block">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-[370px] h-[370px] rounded-full bg-[#0796A8]/15 blur-[90px]" />

                  <div className="relative w-full max-w-[530px]">
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

                      <div className="p-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#18bdcb]/10 border border-[#18bdcb]/20 flex items-center justify-center">
                            <BrainCircuit
                              size={20}
                              className="text-[#25c5d3]"
                            />
                          </div>

                          <div>
                            <div className="w-24 h-2 rounded bg-[#1bbac8]/50 mb-2" />
                            <div className="w-40 h-3 rounded bg-white/75" />
                          </div>
                        </div>

                        <div className="mt-5 space-y-3">
                          <div className="max-w-[82%] rounded-xl rounded-tl-sm border border-white/[0.08] bg-white/[0.03] p-3">
                            <div className="w-[85%] h-2 rounded bg-white/15 mb-2" />
                            <div className="w-[64%] h-2 rounded bg-white/[0.08]" />
                          </div>

                          <div className="ml-auto max-w-[76%] rounded-xl rounded-tr-sm border border-[#18bdcb]/20 bg-[#18bdcb]/10 p-3">
                            <div className="w-[90%] h-2 rounded bg-[#23c1cf]/35 mb-2" />
                            <div className="w-[72%] h-2 rounded bg-[#23c1cf]/20 mb-2" />
                            <div className="w-[54%] h-2 rounded bg-[#23c1cf]/15" />
                          </div>

                          <div className="max-w-[86%] rounded-xl rounded-tl-sm border border-white/[0.08] bg-white/[0.03] p-3">
                            <div className="flex gap-2 mb-3">
                              {[1, 2, 3].map((item) => (
                                <span
                                  key={item}
                                  className="w-5 h-5 rounded-md bg-white/[0.05]"
                                />
                              ))}
                            </div>

                            <div className="w-[90%] h-2 rounded bg-white/15 mb-2" />
                            <div className="w-[75%] h-2 rounded bg-white/[0.08]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -left-5 top-12 w-28 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Bot size={17} className="text-[#29c7d5]" />
                      <p className="text-[9px] font-medium mt-2">
                        AI Assistant
                      </p>
                    </div>

                    <div className="absolute -right-4 top-14 w-28 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <FileSearch
                        size={17}
                        className="text-[#29c7d5]"
                      />
                      <p className="text-[9px] font-medium mt-2">
                        RAG Search
                      </p>
                    </div>

                    <div className="absolute -right-3 bottom-8 w-28 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Workflow
                        size={17}
                        className="text-[#29c7d5]"
                      />
                      <p className="text-[9px] font-medium mt-2">
                        AI Workflow
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
                  ["01", "AI Chatbots"],
                  ["02", "LLM Applications"],
                  ["03", "RAG Systems"],
                  ["04", "AI Agents"],
                ].map(([number, title], index) => (
                  <div
                    key={title}
                    className={`py-3.5 ${
                      index !== 3
                        ? "lg:border-r border-white/[0.07]"
                        : ""
                    } ${index > 0 ? "lg:pl-7" : ""}`}
                  >
                    <span className="block text-[9px] font-semibold text-[#1bb8c7] mb-0.5">
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

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section
          className="relative py-10 md:py-12 bg-[#f8fafb]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-6 lg:gap-12">
              <div>
                <SectionLabel>Generative AI Development</SectionLabel>

                <h2 className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-2.5">
                  More than an AI API.{" "}
                  <span className="text-[#0796A8]">
                    A complete application experience.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 font-normal text-slate-700">
                  Useful AI software needs more than sending a prompt to a
                  model. The surrounding application still needs clear user
                  journeys, business logic, data, permissions, integrations
                  and reliable software architecture.
                </p>

                <p className="text-[13px] leading-6 mt-2 font-normal text-slate-500">
                  DevZore combines modern AI capabilities with frontend,
                  backend, databases and APIs to build complete AI-powered web
                  and SaaS products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section
          id="ai-development-services"
          aria-labelledby="ai-services-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-6">
              <SectionLabel>AI Development Services</SectionLabel>

              <h2
                id="ai-services-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-2.5"
              >
                Generative AI solutions built around your product.
              </h2>

              <p className="text-slate-600 text-[13px] sm:text-[14px] leading-6 mt-2.5 max-w-2xl">
                From individual AI features to complete AI-enabled
                applications, development can be tailored around your product,
                data and business workflow.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0796A8]/40 hover:shadow-[0_16px_40px_rgba(7,25,35,0.07)]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#071923] to-[#18bdcb]" />

                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#eef4f5] text-[#07899a] flex items-center justify-center">
                      {service.icon}
                    </div>

                    <span className="text-[9px] font-semibold text-slate-300">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-[#071923] text-[15px] leading-6 font-semibold mt-3.5">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-[12px] leading-5 mt-1.5">
                    {service.desc}
                  </p>

                  <div className="mt-3.5 pt-3 border-t border-slate-100 space-y-1.5">
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

        {/* =====================================================
            AI ARCHITECTURE
        ===================================================== */}

        <section
          aria-labelledby="ai-architecture-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-70"
            style={darkGrid}
          />

          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-6">
              <SectionLabel light>AI Architecture</SectionLabel>

              <h2
                id="ai-architecture-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-2.5"
              >
                More than just connecting{" "}
                <span className="text-[#25bfce]">
                  an AI model API.
                </span>
              </h2>

              <p className="text-slate-400 text-[13px] sm:text-[14px] leading-6 mt-2.5 max-w-2xl">
                Useful AI applications often require model integration, data
                retrieval, application logic, validation and a clear user
                experience around AI functionality.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {capabilities.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-white/[0.09] bg-white/[0.035] p-5 hover:bg-white/[0.055] hover:border-[#1bbac8]/25 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg border border-[#1bbac8]/20 bg-[#0e2b36] text-[#27c2d0] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="text-[14px] font-semibold mt-3">
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

        {/* =====================================================
            TECHNOLOGY
        ===================================================== */}

        <section
          aria-labelledby="ai-tech-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-6">
              <SectionLabel>Technology Stack</SectionLabel>

              <h2
                id="ai-tech-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-2.5"
              >
                Technologies for modern AI-powered products.
              </h2>

              <p className="text-slate-600 text-[13px] sm:text-[14px] leading-6 mt-2.5 max-w-2xl">
                The exact stack is selected according to application
                requirements, model capabilities, data, integrations and
                deployment architecture.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {technologyGroups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-2xl border border-slate-200 bg-[#fbfcfc] p-5 hover:border-[#0796A8]/35 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#eef4f5] text-[#07899a] flex items-center justify-center">
                    {group.icon}
                  </div>

                  <h3 className="text-[#071923] text-[14px] font-semibold mt-3">
                    {group.title}
                  </h3>

                  <div className="space-y-1.5 mt-3">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2"
                      >
                        <Check
                          size={11}
                          className="text-[#0796A8]"
                        />

                        <span className="text-[10px] text-slate-600">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            USE CASES
        ===================================================== */}

        <section
          aria-labelledby="ai-use-cases-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-6 lg:gap-10">
              <div>
                <SectionLabel>AI Use Cases</SectionLabel>

                <h2
                  id="ai-use-cases-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] leading-[1.08] mt-2.5"
                >
                  AI solutions for real business applications.
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-2.5">
                  Generative AI can support customer-facing products, internal
                  tools and SaaS applications when the use case benefits from
                  language understanding, knowledge retrieval or AI-assisted
                  workflows.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {useCases.map((item, index) => (
                  <div
                    key={item}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 hover:border-[#0796A8]/40 transition-colors"
                  >
                    <div>
                      <span className="text-[8px] font-semibold text-[#0796A8]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="text-[#071923] text-[11px] font-semibold mt-1">
                        {item}
                      </h3>
                    </div>

                    <Zap
                      size={13}
                      className="text-slate-300 group-hover:text-[#0796A8]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section
          aria-labelledby="ai-process-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white"
        >
          <div
            className="absolute inset-0"
            style={darkGrid}
          />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-6">
              <SectionLabel light>Our Process</SectionLabel>

              <h2
                id="ai-process-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-2.5"
              >
                From AI use case{" "}
                <span className="text-[#25bfce]">
                  to production application.
                </span>
              </h2>

              <p className="text-slate-400 text-[13px] sm:text-[14px] leading-6 mt-2.5">
                A structured process helps connect the AI model, application
                requirements, data and user experience into one working
                product.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="relative bg-[#071923] p-5 min-h-[160px] hover:bg-[#0a202a] transition-colors"
                >
                  <span className="text-[10px] font-semibold text-[#22bfce]">
                    {step.number}
                  </span>

                  <h3 className="text-[15px] font-semibold mt-4">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-[11px] leading-5 mt-1.5">
                    {step.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CUSTOM AI DEVELOPMENT
        ===================================================== */}

        <section
          aria-labelledby="custom-ai-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[850px] mb-6">
              <SectionLabel>Custom AI Development</SectionLabel>

              <h2
                id="custom-ai-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-2.5"
              >
                LLM, RAG, chatbot and{" "}
                <span className="text-[#0796A8]">
                  AI agent development.
                </span>
              </h2>

              <p className="text-slate-600 text-[13px] sm:text-[14px] leading-6 mt-2.5 max-w-3xl">
                Build practical AI functionality around your product, business
                data and workflows with complete frontend, backend, database
                and model integration.
              </p>
            </div>

            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-4">
              <div className="grid sm:grid-cols-2 gap-3">
                {customAiSolutions.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-[#fbfcfc] p-5 hover:border-[#0796A8]/35 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#eef4f5] text-[#07899a] flex items-center justify-center">
                      {item.icon}
                    </div>

                    <h3 className="text-[#071923] text-[14px] font-semibold mt-3">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 text-[11px] leading-5 mt-1.5">
                      {item.desc}
                    </p>
                  </article>
                ))}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#f8fafb] p-5">
                <div className="w-10 h-10 rounded-xl bg-[#eaf5f6] text-[#07899a] flex items-center justify-center">
                  <Network size={19} />
                </div>

                <p className="text-[9px] font-semibold tracking-[0.16em] uppercase text-[#07899a] mt-3">
                  Complete AI Integration
                </p>

                <h3 className="text-[#071923] text-[20px] sm:text-[22px] leading-tight font-semibold mt-1.5">
                  From AI model to production application.
                </h3>

                <p className="text-slate-600 text-[12px] leading-5 mt-2.5">
                  AI development often requires more than a model API. We can
                  connect AI capabilities with the application components
                  needed to make them useful.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-2 mt-4">
                  {integrationPoints.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2
                        size={13}
                        className="text-[#0796A8] flex-shrink-0 mt-0.5"
                      />

                      <span className="text-[10px] leading-5 text-slate-600">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#ai-project-enquiry"
                  className="inline-flex items-center gap-2 mt-4 text-[11px] font-semibold text-[#07899a] hover:text-[#071923] transition-colors"
                >
                  Discuss AI Requirements
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}

        <section
          aria-labelledby="ai-faq-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
        >
          <div className="max-w-[980px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-5">
              <div>
                <SectionLabel>FAQ</SectionLabel>

                <h2
                  id="ai-faq-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] leading-[1.08] mt-2.5"
                >
                  Generative AI questions clients actually ask.
                </h2>
              </div>

              <a
                href="#ai-project-enquiry"
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
                      aria-controls={`ai-faq-${index}`}
                      className="w-full flex items-center justify-between gap-5 py-3.5 text-left"
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
                      id={`ai-faq-${index}`}
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-3xl pb-3.5 text-[12px] leading-6 text-slate-600">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {faqs.length > 3 && (
              <div className="flex justify-center mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAllFaqs((current) => !current);
                    setActiveFaq(null);
                  }}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#071923]/15 bg-white px-4 py-2.5 text-[10px] font-semibold text-[#071923] hover:border-[#0796A8]/50 transition-colors"
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

        {/* =====================================================
            RELATED SERVICES
        ===================================================== */}

        <section
          aria-labelledby="ai-related-services-heading"
          className="py-10 md:py-12 bg-white border-y border-slate-200"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div>
                <SectionLabel>Related Services</SectionLabel>

                <h2
                  id="ai-related-services-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] leading-[1.08] mt-2.5"
                >
                  More ways DevZore can help.
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
                  className="group rounded-2xl border border-slate-200 bg-[#fbfcfc] p-5 hover:border-[#0796A8]/40 hover:-translate-y-1 transition-all"
                >
                  <span className="text-[8px] tracking-[0.16em] font-semibold text-[#0796A8]">
                    {service.label}
                  </span>

                  <h3 className="text-[#071923] text-[14px] leading-5 font-semibold mt-2.5">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-[10px] leading-5 mt-1.5">
                    {service.desc}
                  </p>

                  <div className="flex items-center justify-between mt-3.5 pt-3 border-t border-slate-100">
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

        {/* =====================================================
            PROJECT ENQUIRY
        ===================================================== */}

        <section
          id="ai-project-enquiry"
          aria-labelledby="ai-project-enquiry-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-70"
            style={darkGrid}
          />

          <div className="absolute -top-20 left-[5%] w-[450px] h-[450px] rounded-full bg-[#0796A8]/10 blur-[130px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-7 lg:gap-12">
              <div>
                <SectionLabel light>Start an AI Project</SectionLabel>

                <h2
                  id="ai-project-enquiry-heading"
                  className="text-[29px] sm:text-[34px] md:text-[42px] leading-[1.06] tracking-[-0.04em] font-semibold mt-2.5"
                >
                  Tell us what you{" "}
                  <span className="text-[#25bfce]">
                    want AI to help you build.
                  </span>
                </h2>

                <p className="text-slate-300 text-[13px] sm:text-[14px] leading-6 mt-3 max-w-lg">
                  Share your AI product idea, business workflow, existing
                  software or knowledge-base requirements. We can review the
                  use case and discuss a suitable technical approach.
                </p>

                <div className="mt-5 space-y-2.5">
                  {[
                    "AI chatbots and assistants",
                    "LLM and RAG applications",
                    "AI agents and automation",
                    "AI-enabled SaaS products",
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

                <div className="mt-5 pt-4 border-t border-white/[0.08]">
                  <p className="text-[9px] uppercase tracking-[0.18em] font-semibold text-slate-500">
                    Prefer a direct conversation?
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mt-2">
                    <a
                      href="mailto:hellodevzore@gmail.com"
                      className="inline-flex items-center gap-2 text-[12px] font-medium text-[#26c4d2]"
                    >
                      <Mail size={14} />
                      hellodevzore@gmail.com
                    </a>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[12px] font-medium text-[#26c4d2]"
                    >
                      <MessageSquare size={14} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/[0.1] bg-[#0a202a]/90 p-5 sm:p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
              >
                <div className="grid md:grid-cols-2 gap-3.5">
                  <div>
                    <label
                      htmlFor="ai-name"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Your Name *
                    </label>

                    <input
                      id="ai-name"
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
                      htmlFor="ai-email"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Email Address *
                    </label>

                    <input
                      id="ai-email"
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
                      htmlFor="ai-company"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Company
                    </label>

                    <input
                      id="ai-company"
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
                      htmlFor="ai-service"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Type
                    </label>

                    <select
                      id="ai-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option>Generative AI Development</option>
                      <option>AI Chatbot Development</option>
                      <option>LLM Application</option>
                      <option>RAG Knowledge System</option>
                      <option>AI Agent Development</option>
                      <option>AI SaaS Development</option>
                      <option>Existing App AI Integration</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="ai-timeline"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Preferred Timeline
                    </label>

                    <select
                      id="ai-timeline"
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
                      htmlFor="ai-message"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Details *
                    </label>

                    <textarea
                      id="ai-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your AI idea, users, business problem, data sources and important integrations..."
                      className="w-full resize-none rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] leading-5 text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-3.5">
                  <p className="text-[9px] leading-4 text-slate-500 max-w-sm">
                    Share enough detail for us to understand the AI use case.
                    Models, architecture and integrations can be discussed in
                    more detail afterwards.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-2 rounded-lg bg-[#1bbdca] hover:bg-[#28c9d5] px-5 py-3 text-[11px] font-semibold text-[#071923] transition-colors"
                  >
                    Send AI Enquiry
                    <Send size={13} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <section className="bg-[#06151d] border-t border-white/[0.06]">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="text-white text-[14px] font-semibold">
                  Have an AI product idea? We’re ready to help you build it.
                </p>

                <p className="text-slate-500 text-[10px] leading-5 mt-0.5">
                  AI chatbots, LLM applications, RAG systems and AI SaaS
                  products by DevZore.
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

export default GenerativeAIDevelopment;