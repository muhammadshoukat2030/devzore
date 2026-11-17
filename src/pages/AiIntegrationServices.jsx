import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Bot,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Database,
  FileText,
  Globe2,
  Layers3,
  Lock,
  Mail,
  Minus,
  Plus,
  RefreshCw,
  Rocket,
  Search,
  Send,
  Server,
  Shield,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import SEO from "../components/SEO";

export default function AiIntegrationServices() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "AI Integration & LLM Services",
    timeline: "",
    message: "",
  });

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
    "https://wa.me/923348004300?text=Hi%20DevZore,%20I%20want%20to%20discuss%20AI%20Integration%20&%20LLM%20Services%20for%20my%20business.";

  const capabilities = [
    {
      icon: <BrainCircuit size={20} />,
      number: "01",
      title: "LLM API Integration (OpenAI, Claude & Gemini)",
      desc: "Connect OpenAI ChatGPT (GPT-4o), Anthropic Claude 3.5, or Google Gemini directly to your web application, mobile backend, or enterprise database via secure API pipelines.",
      points: [
        "Structured JSON schema & function calling",
        "Prompt engineering & latency caching",
        "Multi-model routing & fallback resilience",
      ],
    },
    {
      icon: <Bot size={20} />,
      number: "02",
      title: "Custom AI Chatbots & Customer Support Agents",
      desc: "Deploy intelligent support assistants directly on your live website or web portal. Trained on your specific product catalogs, FAQs, and documentation with human-agent escalation.",
      points: [
        "Embedded React & vanilla JS chat widgets",
        "Persistent conversation memory & session state",
        "Human fallback routing & CRM integration",
      ],
    },
    {
      icon: <Database size={20} />,
      number: "03",
      title: "RAG Knowledge Bases (Pinecone, pgvector & Atlas)",
      desc: "Enable natural language search and semantic question-answering over your company PDFs, manuals, Notion workspaces, and databases using vector embeddings.",
      points: [
        "Document parsing (PDF, DOCX, CSV, JSON)",
        "Vector search with Pinecone, pgvector & Atlas",
        "Hallucination control & citation sources",
      ],
    },
    {
      icon: <Terminal size={20} />,
      number: "04",
      title: "Embedded Dashboard & ERP AI Features",
      desc: "Add intelligent features into your existing admin panels, CRMs, or inventory portals — including automated transaction summaries, customer categorization, and smart reporting.",
      points: [
        "Automated text & report summarization",
        "Smart anomaly detection & classification",
        "Semantic search inside existing tables",
      ],
    },
    {
      icon: <Zap size={20} />,
      number: "05",
      title: "Intelligent Document & Invoice Data Extraction",
      desc: "Transform unstructured PDFs, scanned vendor receipts, and bills of lading into structured database records using vision models and multimodal LLM extractors.",
      points: [
        "Automated vendor invoice parsing",
        "Receipt data validation & OCR clean-up",
        "Direct export to SQL/MongoDB databases",
      ],
    },
    {
      icon: <ShieldCheck size={20} />,
      number: "06",
      title: "Data Privacy & Enterprise Security Guardrails",
      desc: "Protect sensitive customer records with strict data anonymization, zero-data-retention API configurations, input sanitization, and prompt injection defense.",
      points: [
        "PII redaction prior to model dispatch",
        "Zero-retention enterprise API configurations",
        "Prompt injection & jailbreak filters",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Architecture & Feasibility Audit",
      desc: "We analyze your existing codebase, database, and operational bottlenecks to determine the highest-ROI AI integration points, optimal model selection, and token cost projections.",
    },
    {
      step: "02",
      title: "RAG & API Pipeline Implementation",
      desc: "We engineer secure backend endpoints, embed vector storage pipelines, configure prompt templates, and connect the models with fallback routing to ensure 99.9% uptime.",
    },
    {
      step: "03",
      title: "Interface Integration & UI Embedding",
      desc: "We build intuitive UI components — chat widgets, AI summary badges, smart filter bars, and modal assistants — seamlessly matching your existing brand theme.",
    },
    {
      step: "04",
      title: "Guardrails, Testing & Production Handoff",
      desc: "We test against edge cases, hallucinations, and prompt injections, set up token usage budgets, and provide complete documentation and source code handover.",
    },
  ];

  const faqs = [
    {
      q: "What is the difference between AI integration and building a new AI platform?",
      a: "AI integration connects intelligent LLM APIs (OpenAI, Claude, Gemini) and vector retrieval to your EXISTING website, software product, or database. You do not need to rebuild your software; we augment your current architecture. If you need to build an entirely new AI software product from scratch, see our Generative AI Development services.",
    },
    {
      q: "How do you protect company data privacy when integrating LLMs?",
      a: "We configure enterprise API endpoints that guarantee commercial zero-data-retention, meaning the model providers never use your business data or customer queries to train public models. Furthermore, we implement automated PII (Personally Identifiable Information) masking and database-level encryption.",
    },
    {
      q: "Which LLM model should our business integrate?",
      a: "The choice depends on your specific use case. For general reasoning and conversational support, OpenAI GPT-4o and Anthropic Claude 3.5 Sonnet excel. For high-throughput classification and large context document analysis, Google Gemini 1.5 Flash provides exceptional speed and cost efficiency. We often build multi-model routing so simple tasks use fast models while complex reasoning routes to premier models.",
    },
    {
      q: "Can AI be integrated into older legacy systems or custom backends?",
      a: "Yes. As long as your existing application has an accessible backend (Node.js, Python, PHP, Ruby, .NET, or standard REST APIs) or can communicate with a microservice, we can deploy an AI middleware service that handles all AI processing without breaking your core application.",
    },
    {
      q: "What ongoing API costs should we anticipate after launch?",
      a: "LLM APIs charge based on token usage (input and output text/images). For most business chatbots or internal summary tools, monthly API expenses range from $15 to $100 depending on volume. We implement prompt caching, response streaming, and strict token limits to prevent unexpected spikes.",
    },
  ];

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
      { "@type": "ListItem", position: 3, name: "AI Integration Services", item: "https://devzore.com/ai-integration-services" },
    ],
  };

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical="/ai-integration-services"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen bg-[#061923] text-white antialiased">
        {/* ============================================================ */}
        {/* HERO SECTION */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-white/[0.08]">
          <div className="absolute inset-0 pointer-events-none" style={darkGrid} />
          <div className="absolute -top-32 left-[10%] w-[520px] h-[520px] rounded-full bg-[#0796A8]/15 blur-[160px] pointer-events-none" />
          <div className="absolute top-1/4 right-[5%] w-[440px] h-[440px] rounded-full bg-[#20bdcb]/10 blur-[150px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-[13px] font-bold tracking-wider uppercase text-[#1bbac8] mb-5">
                <BrainCircuit size={13} />
                Intelligent Software Augmentation
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
                AI Integration & <span className="text-[#1bbac8]">LLM Services</span> for Existing Systems
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                Upgrade your existing web application, SaaS dashboard, or internal business software with ChatGPT, Claude, and Gemini APIs. We engineer intelligent agents, RAG knowledge bases, and workflow automation directly into your production software.
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#061923] text-xs sm:text-sm font-bold transition shadow-lg shadow-[#25D366]/20"
                >
                  <span>Discuss AI Integration on WhatsApp</span>
                  <ArrowRight size={14} />
                </a>

                <a
                  href="#integration-form"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.12] text-white text-xs sm:text-sm font-semibold transition"
                >
                  Request Technical Scope
                </a>
              </div>

              {/* STATS STRIP */}
              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/[0.08]">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">OpenAI & Claude</div>
                  <div className="text-xs text-slate-400 mt-0.5">Production LLM APIs</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#1bbac8]">Zero Rebuild</div>
                  <div className="text-xs text-slate-400 mt-0.5">Plug into existing stack</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">100% Secure</div>
                  <div className="text-xs text-slate-400 mt-0.5">Zero data retention APIs</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* DIFFERENTIATION BANNER: INTEGRATION VS PRODUCT BUILDING */}
        {/* ============================================================ */}
        <section className="bg-[#05141c] border-b border-white/[0.08] py-4">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="text-slate-300">
                <strong className="text-white">Looking to build a new AI product from scratch?</strong> See our full-lifecycle{" "}
                <Link to="/generative-ai-development" className="text-[#1bbac8] underline font-semibold hover:text-white transition">
                  Generative AI Development
                </Link>{" "}
                services. This page covers <span className="text-cyan-300 font-medium">adding AI to your existing products</span>.
              </div>
              <Link
                to="/generative-ai-development"
                className="inline-flex items-center gap-1 text-[#1bbac8] font-bold text-xs shrink-0 hover:underline"
              >
                <span>New AI Products</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* AEO ANSWER BLOCK: WHAT IS AI INTEGRATION & WHO IS IT FOR? */}
        {/* ============================================================ */}
        <section className="py-14 sm:py-18 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-[#08222f] to-[#061923] p-6 sm:p-9">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-3">
              <Sparkles size={14} className="text-[#1bbac8]" />
              Clear Answer for Decision-Makers
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              What Are AI Integration Services and Who Are They For?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                <strong>AI Integration Services</strong> refer to the engineering practice of connecting pre-trained Large Language Models (LLMs) like OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, and Google Gemini into an established web application, mobile app, CRM, or management system via secure APIs, vector databases, and function calling.
              </p>
              <p>
                <strong>Who It Is For:</strong> This service is purpose-built for business owners, CTOs, and product managers who already have an active software platform and want to introduce intelligent capabilities — such as customer support bots, automated data extraction, semantic search, or document generation — <em>without rewriting their existing backend or migrating databases</em>.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* CAPABILITIES / WHAT WE INTEGRATE */}
        {/* ============================================================ */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">Capabilities</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              What We Integrate Into Your Production Stack
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              From customer-facing support widgets to internal automated reporting pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-white/[0.08] bg-[#071923] hover:border-cyan-500/30 transition group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-[#1bbac8] border border-cyan-500/20">
                      {c.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">{c.number}</span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#1bbac8] transition mb-2">
                    {c.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-300 mb-5">{c.desc}</p>
                </div>
                <ul className="space-y-2 pt-4 border-t border-white/[0.06] text-[13px] text-slate-300">
                  {c.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={12} className="text-[#1bbac8] shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* REAL PROOF: BLOG ARTICLES & OPERATIONAL SYSTEMS */}
        {/* ============================================================ */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-1">Engineering Proof & Guides</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                How We Integrate AI: Read Our Technical Guides
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1bbac8] hover:text-white transition"
            >
              <span>Explore DevZore Journal</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/blog/how-to-integrate-ai-into-web-application"
              className="group p-6 rounded-2xl border border-white/[0.08] bg-[#071923] hover:border-cyan-500/40 transition block"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">Technical Guide</div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#1bbac8] transition mb-2">
                How to Integrate AI Into a Web Application in 2026: A Practical Guide
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Step-by-step walkthrough covering architecture decisions, OpenAI and Claude SDK integration, token cost budgeting, and zero-downtime deployment.
              </p>
              <div className="inline-flex items-center gap-1 text-xs font-bold text-[#1bbac8]">
                <span>Read Full Technical Guide</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition" />
              </div>
            </Link>

            <Link
              to="/blog/add-ai-assistant-existing-react-app"
              className="group p-6 rounded-2xl border border-white/[0.08] bg-[#071923] hover:border-cyan-500/40 transition block"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">React Engineering</div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#1bbac8] transition mb-2">
                How to Add an AI Assistant to an Existing React App Without Rebuilding It
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Learn how to embed conversational AI components, stream responses with SSE, manage conversation history, and protect client-side API keys.
              </p>
              <div className="inline-flex items-center gap-1 text-xs font-bold text-[#1bbac8]">
                <span>Read Implementation Guide</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition" />
              </div>
            </Link>
          </div>
        </section>

        {/* ============================================================ */}
        {/* ENGINEERING PROCESS */}
        {/* ============================================================ */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">Structured Delivery</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Our 4-Stage AI Integration Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((p, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-white/[0.08] bg-[#071923]">
                <div className="text-2xl font-black text-cyan-400/40 font-mono mb-3">{p.step}</div>
                <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* BUYER FAQ SECTION */}
        {/* ============================================================ */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto border-t border-white/[0.08]">
          <div className="text-center mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">Buyer Questions</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Frequently Asked Questions About AI Integration
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/[0.08] bg-[#071923] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-bold text-white hover:text-[#1bbac8] transition"
                >
                  <span>{faq.q}</span>
                  {activeFaq === idx ? (
                    <ChevronUp size={18} className="text-[#1bbac8] shrink-0 ml-3" />
                  ) : (
                    <ChevronDown size={18} className="text-slate-400 shrink-0 ml-3" />
                  )}
                </button>
                {activeFaq === idx && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.04]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* ENQUIRY FORM & WHATSAPP CTA */}
        {/* ============================================================ */}
        <section id="integration-form" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto border-t border-white/[0.08]">
          <div className="p-6 sm:p-10 rounded-3xl border border-cyan-500/20 bg-[#081d28] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <div className="max-w-xl mx-auto text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Ready to Integrate AI Into Your System?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Share your current stack and desired AI capabilities. We will reply within 24 hours with an architecture roadmap and feasibility estimate.
              </p>
            </div>

            <div className="text-center mb-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#061923] text-sm font-bold transition shadow-lg shadow-[#25D366]/20"
              >
                <span>Discuss on WhatsApp (+92 334 8004300)</span>
                <ArrowRight size={15} />
              </a>
            </div>

            <div className="text-center text-xs text-slate-400">
              Or submit a detailed scope via our main{" "}
              <Link to="/contact" className="text-[#1bbac8] underline font-bold hover:text-white">
                Project Scope Contact Form
              </Link>
              .
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
