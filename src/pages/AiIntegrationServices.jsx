import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PricingBlock from "../components/PricingBlock";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CircleCheck,
  Clock3,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  FileSpreadsheet,
  FileText,
  Gauge,
  Globe2,
  Layers3,
  LockKeyhole,
  Mail,
  Minus,
  Monitor,
  Network,
  Plus,
  RefreshCw,
  Rocket,
  Search,
  Send,
  Server,
  Settings2,
  Shield,
  ShieldCheck,
  Sparkles,
  Terminal,
  TrendingUp,
  Wrench,
  Zap,
} from "lucide-react";

export default function AiIntegrationServices({ isDark }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "AI Integration & LLM Services",
    timeline: "",
    message: "",
  });

  const d = isDark;

  /* =========================================================
     THEME & GRIDS
  ========================================================= */

  const pageBg = d ? "bg-[#06151d]" : "bg-[#f7f9fa]";
  const textMain = d ? "text-white" : "text-[#071923]";
  const textBody = d ? "text-slate-300" : "text-slate-600";

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
    "https://wa.me/923348004300?text=Hi%20DevZore,%20I%20want%20to%20discuss%20AI%20integration%20and%20LLM%20services%20for%20my%20business.";

  /* =========================================================
     CAPABILITIES (WHAT WE INTEGRATE)
  ========================================================= */

  const services = [
    {
      icon: <BrainCircuit size={20} />,
      number: "01",
      title: "LLM API Integration & Multi-Model Routing",
      desc:
        "Connect OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, and Google Gemini 1.5 directly to your web application, mobile backend, or database via production-grade API pipelines.",
      points: [
        "Structured JSON schema outputs & Zod type validation",
        "Multi-model routing & automated failover circuit breakers",
        "Function calling & database tool execution pipelines",
      ],
    },
    {
      icon: <Bot size={20} />,
      number: "02",
      title: "Custom AI Agents & Customer Support Chatbots",
      desc:
        "Deploy conversational AI assistants directly inside your web portal. Trained on your product catalogs, FAQs, and documentation with natural multi-turn context and human escalation.",
      points: [
        "Embedded React, Next.js & vanilla JS web widgets",
        "Persistent session memory & chat history storage",
        "Seamless Zendesk, WhatsApp & live agent handoffs",
      ],
    },
    {
      icon: <Database size={20} />,
      number: "03",
      title: "RAG Knowledge Bases & Semantic Search",
      desc:
        "Enable natural language search and semantic question-answering over your company PDFs, manuals, Notion workspaces, and SQL databases using vector embeddings.",
      points: [
        "Document parsing (PDF, DOCX, CSV, spreadsheets, JSON)",
        "Vector search with Pinecone, pgvector & MongoDB Atlas",
        "Strict grounding with direct citation source links",
      ],
    },
    {
      icon: <Monitor size={20} />,
      number: "04",
      title: "Embedded ERP & Dashboard AI Copilots",
      desc:
        "Inject intelligent AI features directly into your existing admin panels, CRMs, or inventory portals — including automated transaction summaries, customer categorization, and smart reporting.",
      points: [
        "Automated operational summaries & financial insights",
        "Natural language to SQL query generation",
        "Smart anomaly detection inside data tables",
      ],
    },
    {
      icon: <FileSpreadsheet size={20} />,
      number: "05",
      title: "Intelligent Document & Invoice OCR Extraction",
      desc:
        "Transform unstructured PDFs, scanned vendor receipts, and bills of lading into structured database records using vision models and multimodal LLM extractors.",
      points: [
        "Automated multi-page vendor invoice parsing",
        "Line-item receipt validation & OCR clean-up",
        "Direct export to PostgreSQL, MySQL & MongoDB databases",
      ],
    },
    {
      icon: <Network size={20} />,
      number: "06",
      title: "AI Workflow Automation & Agentic Pipelines",
      desc:
        "Automate repetitive multi-step knowledge workflows using LangChain, LlamaIndex, and custom agents that trigger actions across your CRMs, email servers, and APIs.",
      points: [
        "Scheduled background document digestion & enrichment",
        "Webhook-triggered intelligent triage & email dispatch",
        "Human-in-the-loop approval gates for critical actions",
      ],
    },
  ];

  /* =========================================================
     TECHNICAL STANDARDS
  ========================================================= */

  const standards = [
    {
      num: "01",
      title: "Deterministic Structured Output",
      desc:
        "We enforce Zod schemas and strict JSON mode so LLMs return exact types matching your database tables, preventing runtime parsing crashes.",
    },
    {
      num: "02",
      title: "Strict Grounding & Hallucination Defense",
      desc:
        "Contextual bounding and cosine similarity score gating ensure the AI answers exclusively from verified company knowledge, never hallucinating answers.",
    },
    {
      num: "03",
      title: "Zero-Data-Retention & Privacy Guardrails",
      desc:
        "All connections use commercial enterprise API agreements guaranteeing zero model training retention, with automated PII masking before dispatch.",
    },
    {
      num: "04",
      title: "Semantic Caching & Token Optimization",
      desc:
        "Redis vector caching slashes API operational costs by up to 60% and returns sub-50ms instant answers for repeated user queries.",
    },
    {
      num: "05",
      title: "Low-Latency Streaming Architecture",
      desc:
        "Server-Sent Events (SSE) and WebSockets deliver real-time token streaming with instant Time-to-First-Token (TTFT) under 400ms.",
    },
    {
      num: "06",
      title: "Multi-Model Resilient Circuit Breakers",
      desc:
        "Automated fallback routing switches queries between OpenAI, Anthropic, and Google Gemini if a provider experiences rate limits or outages.",
    },
  ];

  /* =========================================================
     BUSINESS IMPACT (4 PILLARS)
  ========================================================= */

  const businessImpact = [
    {
      tag: "Operational Efficiency",
      title: "70% Faster Support Ticket Resolution",
      desc:
        "AI support agents answer common product and account questions instantly around the clock, routing only high-priority edge cases to human staff.",
      stat: "24/7/365",
      sub: "Instant customer response",
    },
    {
      tag: "Data Accuracy",
      title: "Instant Document Processing",
      desc:
        "Extract structured database records from vendor invoices, contracts, and shipping documents in 3 seconds instead of hours of manual typing.",
      stat: "99%+",
      sub: "Extraction accuracy",
    },
    {
      tag: "Zero Rebuild",
      title: "Augment Existing Systems Without Downtime",
      desc:
        "We plug intelligent LLM microservices and embedded UI widgets directly into your current tech stack with zero need to rebuild legacy applications.",
      stat: "0 Days",
      sub: "Disruption to live workflows",
    },
    {
      tag: "Asset Protection",
      title: "100% Client-Owned Prompts & Vectors",
      desc:
        "All vector embeddings, custom system prompts, and integration source code remain the exclusive intellectual property of your company.",
      stat: "100%",
      sub: "Intellectual property ownership",
    },
  ];

  /* =========================================================
     DIAGNOSTIC ASSESSMENT (PAIN POINTS VS SOLUTIONS)
  ========================================================= */

  const diagnosticProblems = [
    {
      problem: "Support staff overwhelmed by repetitive FAQ questions.",
      consequence: "Long ticket wait times, frustrated customers, and rising payroll costs.",
      solution: "Grounded AI support assistant answering 24/7 with zero hallucinations and human agent handoff.",
    },
    {
      problem: "Manual data entry from vendor invoices and PDF receipts.",
      consequence: "Slow accounting cycles, high data-entry error rates, and delayed reconciliations.",
      solution: "Multimodal OCR extraction pipeline parsing line items directly into your SQL or MongoDB database.",
    },
    {
      problem: "Employees cannot find information across company knowledge silos.",
      consequence: "Hours lost searching disparate PDFs, manuals, and internal documentation.",
      solution: "Vector RAG search returning exact semantic answers with verifiable citation links in milliseconds.",
    },
    {
      problem: "Using consumer ChatGPT with unpredictable, hallucinated answers.",
      consequence: "Wrong answers sent to customers and unformatted output breaking internal software.",
      solution: "Deterministic JSON schema prompts with strict business guardrails, Zod validation, and source grounding.",
    },
    {
      problem: "Fear of leaking proprietary business data to public AI models.",
      consequence: "Security teams blocking AI adoption and losing competitive advantage.",
      solution: "Commercial zero-data-retention APIs and automated PII anonymization before model dispatch.",
    },
    {
      problem: "Skyrocketing monthly LLM API bills from unoptimized prompts.",
      consequence: "Unpredictable operating costs that eat into product gross margins.",
      solution: "Semantic vector caching and tiered multi-model routing (Gemini Flash for simple tasks, Claude for reasoning).",
    },
  ];

  /* =========================================================
     PROCESS (6 PHASES)
  ========================================================= */

  const process = [
    {
      num: "01",
      title: "Feasibility & ROI Audit",
      desc:
        "We analyze your existing codebase, databases, and operational bottlenecks to calculate exact ROI, model selection, and token cost projections.",
      deliverable: "AI Integration Architecture Spec & Token Budget",
    },
    {
      num: "02",
      title: "Model Benchmarking & Architecture",
      desc:
        "We benchmark candidate models (GPT-4o, Claude 3.5, Gemini 1.5) against your real data to balance response accuracy, latency, and cost.",
      deliverable: "Model Evaluation Matrix & Routing Plan",
    },
    {
      num: "03",
      title: "Vector RAG & Pipeline Engineering",
      desc:
        "We clean, chunk, and embed your documents into Pinecone, pgvector, or Atlas, building automated synchronization pipelines.",
      deliverable: "Production Vector Store & Retrieval Pipeline",
    },
    {
      num: "04",
      title: "Backend Middleware & Guardrails",
      desc:
        "We write secure API endpoints with Zod schema validation, PII scrubbing, rate limiting, and automated multi-model circuit breakers.",
      deliverable: "Hardened AI API Microservice & Fallback Engine",
    },
    {
      num: "05",
      title: "Embedded UI & Dashboard Copilots",
      desc:
        "We build responsive React, Next.js, or web chat widgets, dashboard copilot bars, and smart summary cards seamlessly matching your brand.",
      deliverable: "Production UI Components & Interactive Widgets",
    },
    {
      num: "06",
      title: "Production Testing & Handover",
      desc:
        "We stress-test against hallucinations and prompt injection attacks, set up token monitoring dashboards, and hand over 100% source code.",
      deliverable: "Production Deployment, Observability & Full IP Handover",
    },
  ];

  /* =========================================================
     INDUSTRIES
  ========================================================= */

  const industries = [
    {
      sector: "E-Commerce & Retail",
      pain: "High return rates and repetitive product questions",
      engineered: "Conversational shopping assistants, AI order lookups & automated catalog search",
    },
    {
      sector: "SaaS & Digital Platforms",
      pain: "Complex user onboarding and slow analytics reporting",
      engineered: "In-app copilot assistants, natural language SQL queries & smart dashboard summaries",
    },
    {
      sector: "Logistics & Supply Chain",
      pain: "Scattered paper bills of lading and vendor invoices",
      engineered: "Multimodal OCR pipeline parsing documents into database records in seconds",
    },
    {
      sector: "Professional & Legal Services",
      pain: "Hundreds of hours spent reviewing contracts and manuals",
      engineered: "RAG knowledge bases enabling semantic search with verifiable source citations",
    },
  ];

  /* =========================================================
     WHY DEVZORE
  ========================================================= */

  const whyDevZore = [
    {
      icon: <Code2 size={20} />,
      title: "Direct Senior AI Engineers",
      desc:
        "Work directly with engineers who understand system architecture, vector embeddings, and backend latency. Zero non-technical middlemen.",
    },
    {
      icon: <LockKeyhole size={20} />,
      title: "100% Code & Prompt Ownership",
      desc:
        "You own every line of code, prompt template, vector embedding index, and configuration file. Zero proprietary vendor lock-in.",
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Commercial Zero Data Retention",
      desc:
        "We configure commercial enterprise endpoints that legally forbid model providers from using your business data to train public models.",
    },
    {
      icon: <Gauge size={20} />,
      title: "Predictable Token Budgets",
      desc:
        "Semantic vector caching, token limits, and intelligent multi-model routing keep monthly API operational expenses minimal and predictable.",
    },
    {
      icon: <RefreshCw size={20} />,
      title: "Zero Legacy System Downtime",
      desc:
        "We integrate alongside your existing backend as modular microservices, modernizing your platform without touching fragile legacy cores.",
    },
    {
      icon: <Sparkles size={20} />,
      title: "Post-Launch Warranty & Support",
      desc:
        "Every project includes 30 days of post-launch monitoring, model drift testing, prompt tuning, and latency optimization.",
    },
  ];

  /* =========================================================
     RELATED SERVICES
  ========================================================= */

  const relatedServices = [
    {
      title: "Generative AI Development",
      path: "/generative-ai-development",
      desc:
        "Build entirely new custom AI software products, foundation model wrappers, and multi-tenant AI SaaS platforms from scratch.",
    },
    {
      title: "Web Development",
      path: "/web-development",
      desc:
        "High-performance, modern business websites engineered for maximum search visibility, fast Core Web Vitals, and conversion.",
    },
    {
      title: "SaaS Product Development",
      path: "/saas-product-development",
      desc:
        "Full-cycle development of scalable multitenant SaaS web platforms with subscription billing, admin dashboards, and secure APIs.",
    },
    {
      title: "Backend & API Development",
      path: "/backend-api",
      desc:
        "High-throughput REST and GraphQL backend architectures, database schemas, and microservices powering enterprise web platforms.",
    },
  ];

  /* =========================================================
     FAQ ACCORDION
  ========================================================= */

  const faqs = [
    {
      q: "What is the difference between AI integration and building a new AI platform?",
      a:
        "AI integration connects intelligent LLM APIs (OpenAI, Claude, Gemini) and vector retrieval to your EXISTING website, software product, or database. You do not need to rebuild your software; we augment your current architecture. If you need to build an entirely new AI software product from scratch, see our Generative AI Development services.",
    },
    {
      q: "How do you protect company data privacy when integrating LLMs?",
      a:
        "We configure enterprise API endpoints that guarantee commercial zero-data-retention, meaning the model providers never use your business data or customer queries to train public models. Furthermore, we implement automated PII (Personally Identifiable Information) masking and database-level encryption.",
    },
    {
      q: "Which LLM model should our business integrate?",
      a:
        "The choice depends on your specific use case. For general reasoning and conversational support, OpenAI GPT-4o and Anthropic Claude 3.5 Sonnet excel. For high-throughput classification and large context document analysis, Google Gemini 1.5 Flash provides exceptional speed and cost efficiency. We often build multi-model routing so simple tasks use fast models while complex reasoning routes to premier models.",
    },
    {
      q: "Can AI be integrated into older legacy systems or custom backends?",
      a:
        "Yes. As long as your existing application has an accessible backend (Node.js, Python, PHP, Ruby, .NET, or standard REST APIs) or can communicate with a microservice, we can deploy an AI middleware service that handles all AI processing without breaking your core application.",
    },
    {
      q: "What ongoing API costs should we anticipate after launch?",
      a:
        "LLM APIs charge based on token usage (input and output text/images). For most business chatbots or internal summary tools, monthly API expenses range from $15 to $100 depending on volume. We implement prompt caching, response streaming, and strict token limits to prevent unexpected spikes.",
    },
    {
      q: "How do you prevent the AI from hallucinating incorrect information?",
      a:
        "We implement Retrieval-Augmented Generation (RAG) with strict similarity thresholds. The model is explicitly constrained to answer only from the retrieved document chunks and cite exact sources. If the answer is not in your documents, the agent safely replies that it does not know or escalates to a human.",
    },
  ];

  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 4);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  /* =========================================================
     FORM HANDLERS
  ========================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:contact@devzore.com?subject=AI%20Integration%20Project%20Enquiry%20-%20${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nService: ${formData.service}\nTimeline: ${formData.timeline}\n\nProject Details:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  /* =========================================================
     STRUCTURED DATA
  ========================================================= */

  const pageTitle = "AI Integration & LLM Services | ChatGPT & API | DevZore";
  const pageDescription =
    "Integrate LLM APIs, OpenAI ChatGPT, Claude, and Gemini into your existing web applications, CRMs, and business systems. Custom AI integration by DevZore.";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Integration & LLM Services",
    serviceType: "Artificial Intelligence Integration & LLM Engineering",
    provider: {
      "@type": "Organization",
      name: "DevZore",
      url: "https://devzore.com",
    },
    areaServed: "Worldwide",
    description: pageDescription,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Integration Capabilities",
      itemListElement: [
        { "@type": "Offer", name: "LLM API Integration (OpenAI, Claude, Gemini)" },
        { "@type": "Offer", name: "Custom AI Chatbots & Support Agents" },
        { "@type": "Offer", name: "RAG Knowledge Base & Vector Search" },
        { "@type": "Offer", name: "Embedded Dashboard & ERP AI Features" },
        { "@type": "Offer", name: "Intelligent Document & Invoice OCR Extraction" },
        { "@type": "Offer", name: "AI Workflow Automation & Agentic Pipelines" },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://devzore.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://devzore.com/allservices" },
      { "@type": "ListItem", position: 3, name: "AI Integration & LLM Services", item: "https://devzore.com/ai-integration-services" },
    ],
  };

  const SectionLabel = ({ children, light = false }) => (
    <div
      className={`flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold tracking-[0.2em] uppercase ${
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
        className={`min-h-screen overflow-hidden antialiased transition-colors duration-300 ${pageBg}`}
        style={{
          fontFamily: '"DM Sans", "Segoe UI", Arial, sans-serif',
        }}
      >
        {/* =====================================================
            HERO (DARK)
        ===================================================== */}

        <section
          aria-labelledby="ai-integration-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 right-[5%] w-[500px] h-[500px] rounded-full bg-[#078fa5]/15 blur-[130px]" />
            <div className="absolute inset-0 opacity-50" style={darkGrid} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#04111a] via-[#04111a]/95 to-[#04111a]/60" />
          </div>

          <div className="relative max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10 pt-[82px] sm:pt-[84px] lg:pt-[86px] pb-10 sm:pb-12">
            <div className="grid lg:grid-cols-[0.96fr_1.04fr] gap-8 lg:gap-12 items-center">
              <div className="relative z-10">
                <SectionLabel light>AI Integration & LLM Engineering</SectionLabel>

                <h1
                  id="ai-integration-heading"
                  className="mt-4 text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold tracking-[-0.03em] leading-[1.08] text-white"
                >
                  Custom <span className="text-[#20c5d6]">AI Integration & LLM Services</span> for Existing Systems
                </h1>

                <p className="mt-5 text-[15px] sm:text-base lg:text-[17px] text-slate-300 leading-relaxed max-w-xl font-normal">
                  Upgrade your existing web application, SaaS dashboard, or enterprise database with ChatGPT, Claude, and Gemini APIs. We engineer intelligent agents, RAG knowledge bases, and workflow automation directly into your production software — zero unnecessary rebuilds.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <a
                    href="#ai-project-form"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0796A8] hover:bg-[#12b1c4] text-white text-sm font-semibold transition shadow-lg shadow-[#0796A8]/20"
                  >
                    <span>Start an AI Project</span>
                    <ArrowRight size={15} />
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.12] text-white text-sm font-semibold transition"
                  >
                    <span>Discuss on WhatsApp</span>
                    <ExternalLink size={14} className="text-slate-400" />
                  </a>
                </div>

                {/* HERO STATS */}
                <div className="mt-10 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-5">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">OpenAI & Claude</div>
                    <div className="text-xs text-slate-400 mt-1">Multi-Model Routing</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-[#20c5d6] tracking-tight">Zero Rebuild</div>
                    <div className="text-xs text-slate-400 mt-1">Plugs Into Current Stack</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">100% Privacy</div>
                    <div className="text-xs text-slate-400 mt-1">Zero Data Retention</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-[#20c5d6] tracking-tight">&lt;400ms</div>
                    <div className="text-xs text-slate-400 mt-1">Streaming TTFT Latency</div>
                  </div>
                </div>
              </div>

              {/* RIGHT VISUAL: AI PIPELINE SIMULATOR */}
              <div className="relative z-10">
                <div className="rounded-2xl border border-white/[0.12] bg-[#071923]/90 backdrop-blur-md p-5 sm:p-6 shadow-2xl shadow-black/40">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2.5">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-xs font-mono text-slate-400 ml-2">devzore-ai-pipeline.ts</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Zero Retention Active
                      </span>
                    </div>
                  </div>

                  {/* SIMULATED PIPELINE FLOW */}
                  <div className="mt-4 space-y-3 font-mono text-xs">
                    <div className="rounded-lg bg-[#04111a] border border-white/[0.06] p-3 text-slate-300">
                      <div className="text-[11px] text-cyan-400 uppercase tracking-wider mb-1 font-semibold">User Request (Customer ERP)</div>
                      <div className="text-white text-xs">"What was our Q3 inventory discrepancy for SKU-8402?"</div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="rounded-md bg-white/[0.03] border border-white/[0.05] p-2.5">
                        <span className="text-slate-400 block mb-0.5">Vector RAG Search:</span>
                        <span className="text-emerald-400 font-medium">pgvector (0.94 match)</span>
                      </div>
                      <div className="rounded-md bg-white/[0.03] border border-white/[0.05] p-2.5">
                        <span className="text-slate-400 block mb-0.5">Model Selected:</span>
                        <span className="text-cyan-400 font-medium">Claude 3.5 Sonnet (Schema)</span>
                      </div>
                    </div>

                    <div className="rounded-lg bg-[#04111a] border border-cyan-500/20 p-3 text-slate-200">
                      <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                        <span className="text-cyan-400 font-semibold uppercase tracking-wider">Validated JSON Output</span>
                        <span className="text-slate-400">Stream TTFT: 320ms</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">
                        "Discrepancy: 14 units damaged in transit on 14 Aug. Reconciled in PO-94821 by Warehouse Manager. Status: Credit note issued."
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.06] text-center text-[11px]">
                      <div>
                        <div className="text-slate-400">Token Cost</div>
                        <div className="text-white font-semibold mt-0.5">$0.0004</div>
                      </div>
                      <div>
                        <div className="text-slate-400">PII Redaction</div>
                        <div className="text-emerald-400 font-semibold mt-0.5">Passed (0 leaks)</div>
                      </div>
                      <div>
                        <div className="text-slate-400">Schema Guard</div>
                        <div className="text-cyan-400 font-semibold mt-0.5">Zod Type-Safe</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO SECTION (LIGHT)
        ===================================================== */}

        <section className="py-16 sm:py-20 bg-[#f7f9fa] border-b border-slate-200/80">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-14 items-start">
              <div>
                <SectionLabel>Production AI Engineering</SectionLabel>
                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0c1f2a] tracking-tight leading-snug">
                  More than a chatbot wrapper. Real business augmentation.
                </h2>

                <div className="mt-6 rounded-xl bg-white border border-slate-200 p-4 shadow-sm">
                  <p className="text-xs sm:text-[13px] text-[#374151] leading-relaxed">
                    <strong className="text-[#0c1f2a]">Need an entirely new AI product built?</strong> If you want to build a greenfield AI SaaS platform from scratch, explore our{" "}
                    <Link to="/generative-ai-development" className="text-[#0796A8] hover:underline font-semibold">
                      Generative AI Development
                    </Link>{" "}
                    services. This page covers <span className="font-semibold text-[#0c1f2a]">adding AI into your existing live systems</span>.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-[14.5px] sm:text-[15px] leading-[1.65] text-[#374151]">
                <p>
                  Most companies do not need to rebuild their software from scratch to leverage artificial intelligence. Modern Large Language Models (LLMs) such as OpenAI GPT-4o, Anthropic Claude 3.5, and Google Gemini provide world-class reasoning capabilities that can be embedded directly into your existing software via secure, low-latency API pipelines.
                </p>
                <p>
                  DevZore engineers the connective tissue: we bridge your existing SQL databases, customer portals, internal documents, and admin dashboards with production LLMs. We implement deterministic schema validation, zero-data-retention security protocols, semantic vector caching, and automated multi-model fallbacks so your software gains intelligent capabilities without sacrificing security or blowing operating budgets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHAT WE INTEGRATE / CAPABILITIES (WHITE)
        ===================================================== */}

        <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="flex justify-center mb-3">
                <SectionLabel>What We Integrate</SectionLabel>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0c1f2a] tracking-tight">
                Intelligent AI capabilities designed around your actual workflows.
              </h2>
              <p className="mt-3.5 text-[14.5px] sm:text-[15px] text-[#374151] leading-relaxed">
                Every integration is engineered for deterministic reliability, speed, and strict data privacy.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-[#fbfcfc] hover:bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-[#0796A8]/10 text-[#0796A8] flex items-center justify-center">
                        {s.icon}
                      </div>
                      <span className="font-mono text-xs font-semibold text-slate-400">
                        {s.number}
                      </span>
                    </div>

                    <h3 className="text-[18px] sm:text-[19px] lg:text-[20px] font-semibold text-[#0c1f2a] mb-2.5 leading-snug">
                      {s.title}
                    </h3>

                    <p className="text-[14px] sm:text-[14.5px] lg:text-[15px] leading-[1.6] text-[#374151] mb-5">
                      {s.desc}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-4 border-t border-slate-200/60 text-xs sm:text-[13px] text-[#374151]">
                    {s.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <Check size={14} className="text-[#0796A8] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            TECHNICAL STANDARDS (DARK)
        ===================================================== */}

        <section className="py-16 sm:py-24 bg-[#04111a] text-white border-b border-white/[0.08]">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-2xl mb-14">
              <SectionLabel light>Technical Standards</SectionLabel>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                Engineered AI standards you can measure, not unpredictable prototypes.
              </h2>
              <p className="mt-3.5 text-[14.5px] sm:text-[15px] text-slate-300 leading-relaxed">
                Consumer chatbots guess. Enterprise AI must return predictable, type-safe data with zero leakage.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {standards.map((st, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/[0.08] bg-[#071923] p-6 sm:p-7 relative group hover:border-[#19b9c8]/40 transition-colors"
                >
                  <div className="text-2xl font-mono font-bold text-[#20c5d6]/40 group-hover:text-[#20c5d6] transition-colors mb-3">
                    {st.num}
                  </div>
                  <h3 className="text-[18px] sm:text-[19px] lg:text-[20px] font-semibold text-white mb-2 leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-[14px] sm:text-[14.5px] lg:text-[15px] leading-[1.6] text-slate-300">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            BUSINESS IMPACT (4 PILLARS - LIGHT)
        ===================================================== */}

        <section className="py-16 sm:py-20 bg-[#f7f9fa] border-b border-slate-200/80">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="flex justify-center mb-3">
                <SectionLabel>Business Value</SectionLabel>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0c1f2a] tracking-tight">
                Why modern businesses integrate AI into their operational stack.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessImpact.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-[#0796A8]/10 text-[#0796A8] mb-3">
                      {item.tag}
                    </span>
                    <h3 className="text-[17px] sm:text-[18px] font-semibold text-[#0c1f2a] mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[13.5px] sm:text-[14px] leading-[1.6] text-[#374151]">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <div className="text-2xl font-bold text-[#0796A8] tracking-tight">{item.stat}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            DIAGNOSTIC ASSESSMENT (WHITE)
        ===================================================== */}

        <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-2xl mb-12">
              <SectionLabel>Diagnostic Assessment</SectionLabel>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0c1f2a] tracking-tight leading-snug">
                Is manual data entry and slow support holding your business back?
              </h2>
              <p className="mt-3.5 text-[14.5px] sm:text-[15px] text-[#374151] leading-relaxed">
                Compare typical operational bottlenecks with DevZore’s engineered AI solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {diagnosticProblems.map((dp, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-[#fbfcfc] p-6 shadow-sm"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✕
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-[#0c1f2a]">
                        {dp.problem}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-rose-600/90 mt-0.5">
                        {dp.consequence}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-slate-200/60 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <p className="text-xs sm:text-[13.5px] text-[#374151] leading-relaxed font-medium">
                      <strong className="text-emerald-700">DevZore Solution:</strong> {dp.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            ENGINEERING PROCESS (DARK)
        ===================================================== */}

        <section className="py-16 sm:py-24 bg-[#04111a] text-white border-b border-white/[0.08]">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="flex justify-center mb-3">
                <SectionLabel light>Our Engineering Process</SectionLabel>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                From feasibility audit to production deployment in 4 to 6 weeks.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((p, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/[0.08] bg-[#071923] p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-sm font-bold text-[#20c5d6] block mb-2">
                      PHASE {p.num}
                    </span>
                    <h3 className="text-[18px] sm:text-[19px] font-semibold text-white mb-2 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-[13.5px] sm:text-[14px] leading-[1.6] text-slate-300 mb-4">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-white/[0.06] text-xs text-slate-400">
                    <span className="text-[#20c5d6] font-medium">Deliverable:</span> {p.deliverable}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            INDUSTRIES (LIGHT)
        ===================================================== */}

        <section className="py-16 sm:py-20 bg-[#f7f9fa] border-b border-slate-200/80">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-2xl mb-12">
              <SectionLabel>Industry Solutions</SectionLabel>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0c1f2a] tracking-tight">
                Tailored AI integrations across real-world business verticals.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-base sm:text-[17px] font-bold text-[#0c1f2a] mb-2">
                    {ind.sector}
                  </h3>
                  <div className="text-xs text-rose-600 mb-3 font-medium">
                    Challenge: {ind.pain}
                  </div>
                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#374151]">
                    <strong className="text-[#0c1f2a]">AI Solution:</strong> {ind.engineered}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY DEVZORE (WHITE)
        ===================================================== */}

        <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="flex justify-center mb-3">
                <SectionLabel>The DevZore Difference</SectionLabel>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0c1f2a] tracking-tight">
                Production AI engineers. Not prompt hobbyists.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyDevZore.map((w, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-[#fbfcfc] p-6 sm:p-7 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0796A8]/10 text-[#0796A8] flex items-center justify-center mb-4">
                    {w.icon}
                  </div>
                  <h3 className="text-[18px] sm:text-[19px] font-semibold text-[#0c1f2a] mb-2 leading-snug">
                    {w.title}
                  </h3>
                  <p className="text-[14px] sm:text-[14.5px] leading-[1.6] text-[#374151]">
                    {w.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            RELATED SERVICES (LIGHT)
        ===================================================== */}

        <section className="py-16 sm:py-20 bg-[#f7f9fa] border-b border-slate-200/80">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-2xl mb-10">
              <SectionLabel>Related Capabilities</SectionLabel>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0c1f2a] tracking-tight">
                More ways DevZore helps modernize your technology stack.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.map((rel, idx) => (
                <Link
                  key={idx}
                  to={rel.path}
                  className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm hover:shadow-md hover:border-[#0796A8]/40 transition group flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-base font-semibold text-[#0c1f2a] group-hover:text-[#0796A8] transition mb-2">
                      {rel.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] leading-relaxed text-[#374151]">
                      {rel.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#0796A8]">
                    <span>Explore Service</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ ACCORDION (WHITE)
        ===================================================== */}

        <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-[900px] mx-auto px-5 sm:px-6">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-3">
                <SectionLabel>Got Questions?</SectionLabel>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0c1f2a] tracking-tight">
                AI integration questions answered clearly.
              </h2>
            </div>

            <div className="space-y-4">
              {visibleFaqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200 bg-[#fbfcfc] overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="text-[15px] sm:text-base font-semibold text-[#0c1f2a]">
                        {faq.q}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-slate-200/60 flex items-center justify-center shrink-0 text-[#0796A8]">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-[14px] leading-relaxed text-[#374151] border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {faqs.length > 4 && (
              <div className="text-center mt-8">
                <button
                  type="button"
                  onClick={() => setShowAllFaqs(!showAllFaqs)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs sm:text-sm font-semibold text-[#0c1f2a] transition shadow-sm"
                >
                  <span>{showAllFaqs ? "Show Less Questions" : "View All Questions"}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${showAllFaqs ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            PRICING BLOCK & PROJECT ENQUIRY (DARK)
        ===================================================== */}

        <section id="ai-project-form" className="py-16 sm:py-24 bg-[#04111a] text-white">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <PricingBlock serviceName="AI Integration & LLM Services" />

            <div className="mt-14 max-w-3xl mx-auto rounded-3xl border border-white/[0.1] bg-[#071923] p-6 sm:p-10 shadow-2xl">
              <div className="text-center max-w-xl mx-auto mb-8">
                <SectionLabel light>Direct Scoping Enquiry</SectionLabel>
                <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Discuss Your AI Integration Project
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300">
                  Share your existing tech stack and target features. Our engineers respond within 24 business hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="ai-name"
                      className="block text-xs font-semibold tracking-[0.12em] uppercase text-slate-400 mb-1.5"
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
                      placeholder="e.g. John Doe"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="ai-email"
                      className="block text-xs font-semibold tracking-[0.12em] uppercase text-slate-400 mb-1.5"
                    >
                      Business Email *
                    </label>
                    <input
                      id="ai-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="ai-company"
                      className="block text-xs font-semibold tracking-[0.12em] uppercase text-slate-400 mb-1.5"
                    >
                      Company / Organization
                    </label>
                    <input
                      id="ai-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Corp"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="ai-timeline"
                      className="block text-xs font-semibold tracking-[0.12em] uppercase text-slate-400 mb-1.5"
                    >
                      Target Timeline
                    </label>
                    <select
                      id="ai-timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option value="">Select timeframe</option>
                      <option value="Urgent (1-2 weeks)">Urgent (1-2 weeks)</option>
                      <option value="Standard (1-2 months)">Standard (1-2 months)</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="ai-message"
                    className="block text-xs font-semibold tracking-[0.12em] uppercase text-slate-400 mb-1.5"
                  >
                    Integration Requirements *
                  </label>
                  <textarea
                    id="ai-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your existing web app/database, which LLM features you want to integrate (chat assistant, RAG, document parsing), and key business goals..."
                    className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0796A8] hover:bg-[#12b1c4] text-white text-sm font-semibold transition shadow-lg"
                >
                  <span>Submit AI Integration Enquiry</span>
                  <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* =====================================================
            BOTTOM CONTEXT BAR (DARK)
        ===================================================== */}

        <section className="bg-[#04111a] border-t border-white/[0.06] py-4">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Link to="/" className="hover:text-white transition">Home</Link>
                <span>/</span>
                <Link to="/allservices" className="hover:text-white transition">Services</Link>
                <span>/</span>
                <span className="text-white font-medium">AI Integration & LLM Services</span>
              </div>

              <div>
                <span>Looking to build a new AI product? </span>
                <Link to="/generative-ai-development" className="text-[#20c5d6] hover:underline font-semibold">
                  Generative AI Development →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
