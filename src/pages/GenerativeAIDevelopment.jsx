import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
    Sparkles,
    ArrowRight,
    CheckCircle,
    Globe,
    Bot,
    BrainCircuit,
    MessageSquare,
    Database,
    Workflow,
    FileSearch,
    Plug,
    ShieldCheck,
    Plus,
    Minus,
    Code2,
    Server,
    Layers3,
    Search,
    Settings,
    Zap,
    Network,
} from 'lucide-react';

const GenerativeAIDevelopment = ({ isDark }) => {
    const d = isDark;

    const [activeFaq, setActiveFaq] = useState(null);
    const [showAllFaqs, setShowAllFaqs] = useState(false);

    const whatsappUrl =
        'https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20Generative%20AI%20development.';

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    /* ======================================================
       SERVICES
    ====================================================== */

    const services = [
        {
            icon: <Bot size={21} />,
            color: 'purple',
            title: 'AI Chatbot Development',
            desc: 'Custom AI chatbots for websites, SaaS platforms and business applications using large language models and your business requirements.',
            includes: [
                'Website AI chatbots',
                'Customer support assistants',
                'Internal business assistants',
                'Custom conversation flows',
                'API and system integrations',
                'Conversation history support',
            ],
        },
        {
            icon: <BrainCircuit size={21} />,
            color: 'blue',
            title: 'LLM Application Development',
            desc: 'Custom applications powered by large language models for content, research, support, workflow assistance and other business use cases.',
            includes: [
                'LLM-powered applications',
                'Prompt workflow development',
                'Structured AI outputs',
                'Model API integration',
                'Business logic integration',
                'Application interface development',
            ],
        },
        {
            icon: <FileSearch size={21} />,
            color: 'green',
            title: 'RAG & Knowledge Base AI',
            desc: 'Retrieval-Augmented Generation systems that connect AI applications with selected documents, business data and knowledge sources.',
            includes: [
                'Document ingestion',
                'Knowledge-base search',
                'Embedding workflows',
                'Vector database integration',
                'Context retrieval',
                'Source-aware AI responses',
            ],
        },
        {
            icon: <Workflow size={21} />,
            color: 'amber',
            title: 'AI Agents & Workflow Automation',
            desc: 'AI-assisted workflows that can coordinate defined tasks, tools and application actions according to your business process.',
            includes: [
                'AI agent workflows',
                'Tool and function calling',
                'Task automation',
                'Multi-step workflows',
                'Business system integration',
                'Human review checkpoints',
            ],
        },
        {
            icon: <Plug size={21} />,
            color: 'cyan',
            title: 'AI API Integration',
            desc: 'Integration of suitable generative AI model APIs into existing websites, applications, dashboards and SaaS products.',
            includes: [
                'OpenAI API integration',
                'Anthropic Claude integration',
                'Google Gemini integration',
                'Backend API integration',
                'Streaming AI responses',
                'Usage and error handling',
            ],
        },
        {
            icon: <MessageSquare size={21} />,
            color: 'pink',
            title: 'Conversational AI Solutions',
            desc: 'Conversational interfaces designed to help users interact with business information, services and application functionality using natural language.',
            includes: [
                'Natural-language interfaces',
                'Context-aware conversations',
                'Conversation memory options',
                'Custom system instructions',
                'Business knowledge integration',
                'User experience development',
            ],
        },
        {
            icon: <Database size={21} />,
            color: 'indigo',
            title: 'AI Data & Vector Search',
            desc: 'Data pipelines and vector-search infrastructure for AI applications that need semantic retrieval from selected content and documents.',
            includes: [
                'Embedding generation',
                'Vector storage integration',
                'Semantic search',
                'Document chunking',
                'Metadata filtering',
                'Retrieval pipeline development',
            ],
        },
        {
            icon: <Code2 size={21} />,
            color: 'orange',
            title: 'Custom AI SaaS Development',
            desc: 'Frontend and backend development for SaaS products that include generative AI capabilities as part of their core workflow.',
            includes: [
                'AI SaaS architecture',
                'User authentication',
                'AI feature integration',
                'Usage management',
                'Dashboard development',
                'Subscription-ready architecture',
            ],
        },
        {
            icon: <Settings size={21} />,
            color: 'red',
            title: 'Existing App AI Integration',
            desc: 'Add suitable AI capabilities to an existing web application, internal platform, dashboard or software product.',
            includes: [
                'Existing codebase review',
                'AI feature planning',
                'Frontend integration',
                'Backend integration',
                'Database integration',
                'Testing and deployment support',
            ],
        },
    ];

    /* ======================================================
       CAPABILITIES
    ====================================================== */

    const capabilities = [
        {
            icon: <BrainCircuit size={19} />,
            title: 'Large Language Models',
            desc: 'Integrate suitable LLMs into applications for language-based AI functionality.',
        },
        {
            icon: <Search size={19} />,
            title: 'RAG Systems',
            desc: 'Retrieve relevant information from selected data before generating AI responses.',
        },
        {
            icon: <Workflow size={19} />,
            title: 'AI Workflows',
            desc: 'Connect model outputs with defined application tools and business processes.',
        },
        {
            icon: <ShieldCheck size={19} />,
            title: 'Controlled AI Integration',
            desc: 'Build validation, permissions and application rules around AI-powered features.',
        },
    ];

    /* ======================================================
       TECHNOLOGY STACK
    ====================================================== */

    const technologyGroups = [
        {
            icon: <BrainCircuit size={21} />,
            title: 'AI Models & APIs',
            items: [
                'OpenAI',
                'Anthropic Claude',
                'Google Gemini',
                'Suitable LLM APIs',
            ],
        },
        {
            icon: <Database size={21} />,
            title: 'AI Data Layer',
            items: [
                'Embeddings',
                'Vector databases',
                'Semantic search',
                'Document retrieval',
            ],
        },
        {
            icon: <Code2 size={21} />,
            title: 'Application Development',
            items: ['React', 'Next.js', 'Node.js', 'Express'],
        },
        {
            icon: <Server size={21} />,
            title: 'Backend & Infrastructure',
            items: [
                'REST APIs',
                'MongoDB',
                'PostgreSQL',
                'Cloud deployment',
            ],
        },
    ];

    /* ======================================================
       USE CASES
    ====================================================== */

    const useCases = [
        'Customer support AI assistants',
        'Website AI chatbots',
        'Document question-answering systems',
        'Internal knowledge assistants',
        'AI-powered SaaS applications',
        'Content assistance tools',
        'Research and information workflows',
        'Lead qualification assistants',
        'Business process automation',
        'Semantic document search',
        'AI-enabled dashboards',
        'Custom internal AI tools',
    ];

    /* ======================================================
       DEVELOPMENT PROCESS
    ====================================================== */

    const process = [
        {
            n: '01',
            title: 'AI Use Case Discovery',
            desc: 'We review your business problem, users, available data and expected workflow to understand where generative AI may provide useful functionality.',
        },
        {
            n: '02',
            title: 'Solution & Model Planning',
            desc: 'We define the application architecture, suitable model approach, integrations, data requirements and important technical constraints.',
        },
        {
            n: '03',
            title: 'Prototype & AI Workflow',
            desc: 'The core AI workflow can be prototyped to evaluate prompts, retrieval behaviour, model responses and application interaction.',
        },
        {
            n: '04',
            title: 'Application Development',
            desc: 'Frontend, backend, APIs, authentication, databases and AI functionality are developed according to the agreed project scope.',
        },
        {
            n: '05',
            title: 'Testing & Evaluation',
            desc: 'The application is tested for expected workflows, response handling, edge cases, integrations and overall user experience.',
        },
        {
            n: '06',
            title: 'Deployment & Improvement',
            desc: 'After deployment, model usage and application behaviour can be reviewed so prompts, retrieval and workflows can be refined where required.',
        },
    ];

    /* ======================================================
       FAQ
    ====================================================== */

    const faqs = [
        {
            q: 'What is Generative AI development?',
            a: 'Generative AI development involves building software that uses AI models to generate or transform content, answer questions, work with business knowledge, assist users or support defined application workflows. This can include AI chatbots, LLM applications, RAG systems, AI assistants and AI-enabled SaaS products.',
        },
        {
            q: 'What Generative AI development services does DevZore provide?',
            a: 'DevZore can develop AI chatbots, LLM-powered applications, Retrieval-Augmented Generation systems, AI assistants, AI workflows, vector-search systems and custom AI-enabled web or SaaS applications. We can also integrate suitable AI APIs into existing software.',
        },
        {
            q: 'Can you integrate OpenAI into my website or application?',
            a: 'Yes. OpenAI APIs can be integrated into suitable websites, SaaS applications and custom software for features such as conversational interfaces, structured outputs, content assistance and other application-specific AI workflows.',
        },
        {
            q: 'Can you work with Claude and Gemini as well?',
            a: 'Yes. Depending on the project requirements, applications can integrate suitable model APIs such as Anthropic Claude or Google Gemini. Model selection should be based on required functionality, technical constraints, cost considerations and application architecture.',
        },
        {
            q: 'Can you build an AI chatbot using my business data?',
            a: 'Yes. Where appropriate, a Retrieval-Augmented Generation workflow can connect an AI assistant with selected business documents, website content or other approved knowledge sources so relevant information can be retrieved as context for responses.',
        },
        {
            q: 'What is RAG in Generative AI?',
            a: 'RAG stands for Retrieval-Augmented Generation. It retrieves relevant information from a selected knowledge source and provides that information as context to the AI model before a response is generated.',
        },
        {
            q: 'Can you build AI agents?',
            a: 'Yes. We can develop AI-assisted workflows that use defined tools, APIs and application functions to perform multi-step tasks. The exact level of automation depends on the business process, available integrations and controls required around AI actions.',
        },
        {
            q: 'Can Generative AI be added to an existing application?',
            a: 'Yes. Existing React, Next.js, Node.js, MERN stack and other suitable web applications can be reviewed for AI integration. Implementation depends on the existing architecture and the AI feature you want to introduce.',
        },
        {
            q: 'How much does Generative AI application development cost?',
            a: 'Cost depends on project scope, application complexity, model integration, data requirements, RAG or vector-search requirements, authentication, third-party integrations and deployment needs.',
        },
        {
            q: 'How long does it take to build a Generative AI application?',
            a: 'Development time depends on application complexity. A focused AI feature or prototype can require less time than a complete SaaS product with authentication, RAG, dashboards, integrations and custom workflows.',
        },
        {
            q: 'Can you build a complete AI SaaS product?',
            a: 'Yes. DevZore can work on frontend development, backend APIs, authentication, databases, AI model integration, dashboards and other application components required for a custom AI-enabled SaaS product.',
        },
        {
            q: 'Can AI responses always be guaranteed to be correct?',
            a: 'No. Generative AI models can produce incorrect or incomplete outputs. Application design can reduce risk through retrieval, validation, structured outputs, business rules and human review, but AI-generated responses should not be treated as inherently guaranteed to be correct.',
        },
    ];

    const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 5);

    /* ======================================================
       RELATED SERVICES
    ====================================================== */

    const relatedServices = [
        {
            icon: <Layers3 size={22} />,
            title: 'SaaS Product Development',
            desc: 'Custom SaaS platforms with frontend, backend, authentication, dashboards and scalable product workflows.',
            path: '/saas-product-development',
        },
        {
            icon: <Server size={22} />,
            title: 'Backend & API Development',
            desc: 'Backend systems, REST APIs, authentication, databases and third-party service integrations.',
            path: '/backend-api',
        },
        {
            icon: <Code2 size={22} />,
            title: 'Web Development',
            desc: 'Modern websites and web applications built with responsive interfaces and business-focused functionality.',
            path: '/web-development',
        },
    ];

    /* ======================================================
       COLORS
    ====================================================== */

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

        cyan: d
            ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
            : 'bg-cyan-50 border-cyan-100 text-cyan-600',

        pink: d
            ? 'bg-pink-500/10 border-pink-500/20 text-pink-400'
            : 'bg-pink-50 border-pink-100 text-pink-600',

        indigo: d
            ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
            : 'bg-indigo-50 border-indigo-100 text-indigo-600',

        orange: d
            ? 'bg-orange-500/10 border-orange-500/20 text-orange-400'
            : 'bg-orange-50 border-orange-100 text-orange-600',

        red: d
            ? 'bg-red-500/10 border-red-500/20 text-red-400'
            : 'bg-red-50 border-red-100 text-red-600',
    };

    /* ======================================================
       CTA COMPONENT
    ====================================================== */

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
                    Discuss Your AI Project
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
            {/* ======================================================
                STRUCTURED DATA
            ====================================================== */}

            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        '@id':
                            'https://devzore.com/generative-ai-development#service',
                        name: 'Generative AI Development Services',
                        description:
                            'Generative AI development services including AI chatbot development, LLM applications, RAG systems, AI agents, AI API integration, vector search and custom AI SaaS development.',
                        url: 'https://devzore.com/generative-ai-development',
                        serviceType: 'Generative AI Development',
                        provider: {
                            '@id': 'https://devzore.com/#organization',
                        },
                        areaServed: 'Worldwide',
                        hasOfferCatalog: {
                            '@type': 'OfferCatalog',
                            name: 'Generative AI Development Services',
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
                                name: 'Generative AI Development',
                                item:
                                    'https://devzore.com/generative-ai-development',
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
                {/* ======================================================
                    HERO
                ====================================================== */}

                <section
                    aria-labelledby="generative-ai-heading"
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
                                        <Sparkles size={12} />
                                        Generative AI Development
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
                                    id="generative-ai-heading"
                                    className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5 ${
                                        d ? 'text-white' : 'text-gray-900'
                                    }`}
                                >
                                    Generative AI Development Services{' '}
                                    <span className="text-purple-600">
                                        for Modern Businesses
                                    </span>
                                </h1>

                                <p
                                    className={`text-lg font-semibold mb-5 ${
                                        d ? 'text-gray-300' : 'text-gray-700'
                                    }`}
                                >
                                    AI Chatbots · LLM Apps · RAG · AI Agents ·
                                    AI APIs · Automation
                                </p>

                                <p
                                    className={`text-base leading-relaxed mb-5 ${
                                        d ? 'text-gray-400' : 'text-gray-600'
                                    }`}
                                >
                                    DevZore develops Generative AI applications
                                    for businesses, startups and digital
                                    products that want to integrate large
                                    language models, conversational AI,
                                    knowledge retrieval and AI-assisted
                                    workflows into their software.
                                </p>

                                <p
                                    className={`text-base leading-relaxed mb-8 ${
                                        d ? 'text-gray-400' : 'text-gray-600'
                                    }`}
                                >
                                    We can build AI chatbots, LLM-powered
                                    applications, RAG systems, AI agents and
                                    custom AI SaaS features, or integrate
                                    suitable AI APIs into an existing website
                                    or application.
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                                    {[
                                        {
                                            icon: <Bot size={18} />,
                                            title: 'AI Chatbots',
                                            label: 'Custom assistants',
                                        },
                                        {
                                            icon: <BrainCircuit size={18} />,
                                            title: 'LLM Apps',
                                            label: 'AI-powered software',
                                        },
                                        {
                                            icon: <FileSearch size={18} />,
                                            title: 'RAG',
                                            label: 'Knowledge retrieval',
                                        },
                                        {
                                            icon: <Workflow size={18} />,
                                            title: 'AI Agents',
                                            label: 'Workflow automation',
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
                                            <div className="text-purple-500 mb-2">
                                                {item.icon}
                                            </div>

                                            <div
                                                className={`text-sm font-black ${
                                                    d
                                                        ? 'text-white'
                                                        : 'text-gray-900'
                                                }`}
                                            >
                                                {item.title}
                                            </div>

                                            <div className="text-[10px] mt-1 text-gray-500">
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
                                        Discuss Your AI Project
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

                            {/* HERO RIGHT PANEL */}

                            <div
                                className={`p-7 lg:p-8 rounded-3xl border ${
                                    d
                                        ? 'bg-white/[0.02] border-white/[0.06]'
                                        : 'bg-[#fafafa] border-gray-200'
                                }`}
                            >
                                <p
                                    className={`text-[11px] font-black uppercase tracking-widest mb-6 ${
                                        d
                                            ? 'text-gray-500'
                                            : 'text-gray-400'
                                    }`}
                                >
                                    Generative AI Capabilities
                                </p>

                                <div className="space-y-3">
                                    {[
                                        {
                                            title: 'AI Chatbots & Assistants',
                                            desc: 'Conversational AI for websites, applications and internal tools.',
                                        },
                                        {
                                            title: 'RAG Knowledge Systems',
                                            desc: 'Connect AI with selected documents and business knowledge.',
                                        },
                                        {
                                            title: 'LLM Integration',
                                            desc: 'Integrate suitable AI model APIs into custom software.',
                                        },
                                        {
                                            title: 'AI Agent Workflows',
                                            desc: 'Connect models with defined tools, functions and business actions.',
                                        },
                                        {
                                            title: 'AI SaaS Products',
                                            desc: 'Build complete web products with AI functionality.',
                                        },
                                        {
                                            title: 'Existing App Integration',
                                            desc: 'Introduce AI capabilities into an existing application.',
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
                                                        d
                                                            ? 'text-white'
                                                            : 'text-gray-900'
                                                    }`}
                                                >
                                                    {item.title}
                                                </p>

                                                <p className="text-[11px] leading-relaxed text-gray-500">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div
                                    className={`mt-5 p-4 rounded-xl ${
                                        d
                                            ? 'bg-purple-500/10'
                                            : 'bg-purple-50'
                                    }`}
                                >
                                    <p
                                        className={`text-[12px] font-semibold text-center ${
                                            d
                                                ? 'text-purple-300'
                                                : 'text-purple-700'
                                        }`}
                                    >
                                        AI architecture, models and
                                        integrations can be selected according
                                        to your application requirements.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ======================================================
                    SERVICES
                ====================================================== */}

                <section
                    aria-labelledby="ai-services-heading"
                    className={`py-16 border-b ${
                        d
                            ? 'border-white/[0.06] bg-[#050505]'
                            : 'border-gray-100 bg-[#fafafa]'
                    }`}
                >
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="max-w-3xl mb-12">
                            <p className="text-purple-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                                AI Development Services
                            </p>

                            <h2
                                id="ai-services-heading"
                                className={`text-3xl font-black mb-4 ${
                                    d ? 'text-white' : 'text-gray-900'
                                }`}
                            >
                                Generative AI Development Services
                            </h2>

                            <p
                                className={`text-base leading-relaxed ${
                                    d ? 'text-gray-400' : 'text-gray-600'
                                }`}
                            >
                                From individual AI features to complete
                                AI-enabled applications, development can be
                                tailored around your product, data and business
                                workflow.
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
                                            d
                                                ? 'text-white'
                                                : 'text-gray-900'
                                        }`}
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className={`text-[13px] leading-relaxed mb-5 ${
                                            d
                                                ? 'text-gray-400'
                                                : 'text-gray-600'
                                        }`}
                                    >
                                        {item.desc}
                                    </p>

                                    <div className="space-y-2">
                                        {item.includes.map((feature) => (
                                            <div
                                                key={feature}
                                                className="flex items-start gap-2 text-[11px] text-gray-500"
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

                {/* ======================================================
                    AI ARCHITECTURE
                ====================================================== */}

                <section
                    aria-labelledby="ai-approach-heading"
                    className={`py-16 border-b ${
                        d ? 'border-white/[0.06]' : 'border-gray-100'
                    }`}
                >
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <p className="text-purple-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                                AI Architecture
                            </p>

                            <h2
                                id="ai-approach-heading"
                                className={`text-3xl font-black mb-3 ${
                                    d ? 'text-white' : 'text-gray-900'
                                }`}
                            >
                                More Than Just Connecting an AI API
                            </h2>

                            <p
                                className={`text-base max-w-3xl mx-auto ${
                                    d ? 'text-gray-400' : 'text-gray-600'
                                }`}
                            >
                                Useful Generative AI applications often
                                require application logic, data retrieval,
                                model integration, validation and a clear user
                                experience around the AI functionality.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
                            {capabilities.map((item) => (
                                <div
                                    key={item.title}
                                    className={`p-6 rounded-2xl border ${
                                        d
                                            ? 'bg-white/[0.02] border-white/[0.06]'
                                            : 'bg-[#fafafa] border-gray-200'
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
                                            d
                                                ? 'text-white'
                                                : 'text-gray-900'
                                        }`}
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className={`text-[13px] leading-relaxed ${
                                            d
                                                ? 'text-gray-400'
                                                : 'text-gray-600'
                                        }`}
                                    >
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <CtaStrip
                            heading="Have an AI product idea?"
                            sub="Tell us what you want the application to do, who will use it and what systems or data it needs to work with."
                        />
                    </div>
                </section>

                {/* ======================================================
                    TECHNOLOGY
                ====================================================== */}

                <section
                    aria-labelledby="ai-tech-heading"
                    className={`py-16 border-b ${
                        d
                            ? 'border-white/[0.06] bg-[#050505]'
                            : 'border-gray-100 bg-[#fafafa]'
                    }`}
                >
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <p className="text-purple-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                                Technology
                            </p>

                            <h2
                                id="ai-tech-heading"
                                className={`text-3xl font-black mb-3 ${
                                    d ? 'text-white' : 'text-gray-900'
                                }`}
                            >
                                Generative AI Technology Stack
                            </h2>

                            <p
                                className={`text-base max-w-2xl mx-auto ${
                                    d ? 'text-gray-400' : 'text-gray-600'
                                }`}
                            >
                                The exact technology stack is selected
                                according to the application, model
                                requirements, data and deployment architecture.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {technologyGroups.map((group) => (
                                <div
                                    key={group.title}
                                    className={`p-6 rounded-2xl border ${
                                        d
                                            ? 'bg-white/[0.02] border-white/[0.06]'
                                            : 'bg-white border-gray-200'
                                    }`}
                                >
                                    <div
                                        className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                                            d
                                                ? 'bg-purple-500/10 text-purple-400'
                                                : 'bg-purple-50 text-purple-600'
                                        }`}
                                    >
                                        {group.icon}
                                    </div>

                                    <h3
                                        className={`text-[14px] font-black mb-4 ${
                                            d
                                                ? 'text-white'
                                                : 'text-gray-900'
                                        }`}
                                    >
                                        {group.title}
                                    </h3>

                                    <div className="space-y-3">
                                        {group.items.map((item) => (
                                            <div
                                                key={item}
                                                className={`flex items-center gap-2 text-[12px] ${
                                                    d
                                                        ? 'text-gray-400'
                                                        : 'text-gray-600'
                                                }`}
                                            >
                                                <CheckCircle
                                                    size={12}
                                                    className="text-purple-500 flex-shrink-0"
                                                />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ======================================================
                    USE CASES
                ====================================================== */}

                <section
                    aria-labelledby="ai-use-cases-heading"
                    className={`py-16 border-b ${
                        d ? 'border-white/[0.06]' : 'border-gray-100'
                    }`}
                >
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-10 items-start">
                            <div>
                                <p className="text-purple-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                                    AI Use Cases
                                </p>

                                <h2
                                    id="ai-use-cases-heading"
                                    className={`text-3xl font-black mb-4 ${
                                        d
                                            ? 'text-white'
                                            : 'text-gray-900'
                                    }`}
                                >
                                    Generative AI Solutions for Business
                                    Applications
                                </h2>

                                <p
                                    className={`text-base leading-relaxed mb-5 ${
                                        d
                                            ? 'text-gray-400'
                                            : 'text-gray-600'
                                    }`}
                                >
                                    Generative AI can be integrated into
                                    customer-facing products, internal tools and
                                    SaaS applications when the use case benefits
                                    from language understanding, knowledge
                                    retrieval or AI-assisted workflows.
                                </p>

                                <p
                                    className={`text-sm leading-relaxed ${
                                        d
                                            ? 'text-gray-500'
                                            : 'text-gray-500'
                                    }`}
                                >
                                    The right implementation depends on the
                                    problem being solved, available data,
                                    required integrations and the level of
                                    control needed around AI-generated outputs.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-3">
                                {useCases.map((item) => (
                                    <div
                                        key={item}
                                        className={`flex items-start gap-3 p-4 rounded-xl border ${
                                            d
                                                ? 'bg-white/[0.02] border-white/[0.06]'
                                                : 'bg-[#fafafa] border-gray-200'
                                        }`}
                                    >
                                        <Zap
                                            size={14}
                                            className="text-purple-500 flex-shrink-0 mt-0.5"
                                        />

                                        <span
                                            className={`text-[13px] font-semibold ${
                                                d
                                                    ? 'text-gray-300'
                                                    : 'text-gray-700'
                                            }`}
                                        >
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ======================================================
                    PROCESS
                ====================================================== */}

                <section
                    aria-labelledby="ai-process-heading"
                    className={`py-16 border-b ${
                        d
                            ? 'border-white/[0.06] bg-[#050505]'
                            : 'border-gray-100 bg-[#fafafa]'
                    }`}
                >
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <p className="text-purple-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                                Our Process
                            </p>

                            <h2
                                id="ai-process-heading"
                                className={`text-3xl font-black mb-3 ${
                                    d ? 'text-white' : 'text-gray-900'
                                }`}
                            >
                                How Generative AI Development Works
                            </h2>

                            <p
                                className={`text-base max-w-2xl mx-auto ${
                                    d ? 'text-gray-400' : 'text-gray-600'
                                }`}
                            >
                                A structured development process from
                                identifying the AI use case to application
                                development, testing and deployment.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
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
                                            d
                                                ? 'text-purple-400'
                                                : 'text-purple-600'
                                        }`}
                                    >
                                        {step.n}
                                    </div>

                                    <h3
                                        className={`text-[14px] font-bold mb-2 ${
                                            d
                                                ? 'text-white'
                                                : 'text-gray-900'
                                        }`}
                                    >
                                        {step.title}
                                    </h3>

                                    <p
                                        className={`text-[13px] leading-relaxed ${
                                            d
                                                ? 'text-gray-400'
                                                : 'text-gray-600'
                                        }`}
                                    >
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <CtaStrip
                            heading="Ready to build an AI-powered application?"
                            sub="Share your idea, existing product or business workflow and we can discuss a suitable technical approach."
                        />
                    </div>
                </section>

                {/* ======================================================
                    CUSTOM AI DEVELOPMENT
                    REDESIGNED SECTION
                ====================================================== */}

                <section
                    aria-labelledby="custom-ai-development-heading"
                    className={`py-16 border-b ${
                        d ? 'border-white/[0.06]' : 'border-gray-100'
                    }`}
                >
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="max-w-3xl mb-12">
                            <p className="text-purple-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                                Custom AI Development
                            </p>

                            <h2
                                id="custom-ai-development-heading"
                                className={`text-3xl md:text-4xl font-black tracking-tight mb-4 ${
                                    d ? 'text-white' : 'text-gray-900'
                                }`}
                            >
                                LLM, RAG, AI Chatbot &{' '}
                                <span className="text-purple-600">
                                    AI Agent Development
                                </span>
                            </h2>

                            <p
                                className={`text-base leading-relaxed max-w-3xl ${
                                    d ? 'text-gray-400' : 'text-gray-600'
                                }`}
                            >
                                Build practical Generative AI functionality
                                around your product, business data and
                                workflows. DevZore combines AI model
                                integration with frontend, backend, databases
                                and application logic to create complete
                                AI-powered solutions.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-5 gap-6 items-stretch">
                            {/* LEFT CARDS */}

                            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
                                {[
                                    {
                                        icon: <Bot size={21} />,
                                        title: 'AI Chatbots',
                                        desc: 'Custom conversational assistants for websites, SaaS products, customer support and internal business tools.',
                                    },
                                    {
                                        icon: <FileSearch size={21} />,
                                        title: 'RAG & Knowledge AI',
                                        desc: 'Connect AI applications with selected documents, business knowledge and vector-search retrieval systems.',
                                    },
                                    {
                                        icon: <BrainCircuit size={21} />,
                                        title: 'LLM Applications',
                                        desc: 'Build custom applications using suitable large language models, structured outputs and business logic.',
                                    },
                                    {
                                        icon: <Workflow size={21} />,
                                        title: 'AI Agents & Automation',
                                        desc: 'Develop controlled AI workflows that interact with APIs, tools and application functions for defined tasks.',
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.title}
                                        className={`group p-6 rounded-2xl border transition-all duration-300 ${
                                            d
                                                ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-purple-500/30'
                                                : 'bg-[#fafafa] border-gray-200 hover:bg-white hover:border-purple-200 hover:shadow-md'
                                        }`}
                                    >
                                        <div
                                            className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:-translate-y-0.5 ${
                                                d
                                                    ? 'bg-purple-500/10 text-purple-400'
                                                    : 'bg-purple-50 text-purple-600'
                                            }`}
                                        >
                                            {item.icon}
                                        </div>

                                        <h3
                                            className={`text-[15px] font-black mb-2 ${
                                                d
                                                    ? 'text-white'
                                                    : 'text-gray-900'
                                            }`}
                                        >
                                            {item.title}
                                        </h3>

                                        <p
                                            className={`text-[13px] leading-relaxed ${
                                                d
                                                    ? 'text-gray-400'
                                                    : 'text-gray-600'
                                            }`}
                                        >
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* RIGHT PANEL */}

                            <div
                                className={`lg:col-span-2 p-7 md:p-8 rounded-2xl border ${
                                    d
                                        ? 'bg-gradient-to-br from-purple-500/[0.08] to-transparent border-purple-500/20'
                                        : 'bg-gradient-to-br from-purple-50 to-white border-purple-100'
                                }`}
                            >
                                <div
                                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                                        d
                                            ? 'bg-purple-500/10 text-purple-400'
                                            : 'bg-white text-purple-600 shadow-sm'
                                    }`}
                                >
                                    <Network size={23} />
                                </div>

                                <p className="text-purple-500 text-[10px] font-black uppercase tracking-[0.18em] mb-2">
                                    Complete AI Integration
                                </p>

                                <h3
                                    className={`text-xl md:text-2xl font-black mb-4 ${
                                        d
                                            ? 'text-white'
                                            : 'text-gray-900'
                                    }`}
                                >
                                    From AI Model to Production Application
                                </h3>

                                <p
                                    className={`text-[13px] leading-relaxed mb-7 ${
                                        d
                                            ? 'text-gray-400'
                                            : 'text-gray-600'
                                    }`}
                                >
                                    Generative AI development often requires
                                    more than a model API. We can connect AI
                                    functionality with the application
                                    components required to turn it into a
                                    usable digital product.
                                </p>

                                <div className="space-y-3">
                                    {[
                                        'OpenAI, Claude & Gemini API integration',
                                        'Retrieval-Augmented Generation (RAG)',
                                        'Vector databases & semantic search',
                                        'Frontend & backend development',
                                        'Authentication & user accounts',
                                        'Database & REST API integration',
                                        'AI agent tools & workflows',
                                        'AI-enabled SaaS functionality',
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className={`flex items-start gap-3 text-[13px] ${
                                                d
                                                    ? 'text-gray-300'
                                                    : 'text-gray-700'
                                            }`}
                                        >
                                            <div
                                                className={`w-5 h-5 mt-[1px] rounded-full flex items-center justify-center flex-shrink-0 ${
                                                    d
                                                        ? 'bg-purple-500/10'
                                                        : 'bg-purple-100'
                                                }`}
                                            >
                                                <CheckCircle
                                                    size={12}
                                                    className="text-purple-500"
                                                />
                                            </div>

                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div
                                    className={`mt-7 pt-6 border-t ${
                                        d
                                            ? 'border-white/[0.07]'
                                            : 'border-purple-100'
                                    }`}
                                >
                                    <Link
                                        to="/contact"
                                        onClick={scrollTop}
                                        className="inline-flex items-center gap-2 text-sm font-black text-purple-500 hover:text-purple-600 transition-colors group"
                                    >
                                        Discuss Your AI Requirements

                                        <ArrowRight
                                            size={14}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ======================================================
                    FAQ
                ====================================================== */}

                <section
                    aria-labelledby="ai-faq-heading"
                    className={`py-16 border-b ${
                        d
                            ? 'border-white/[0.06] bg-[#050505]'
                            : 'border-gray-100 bg-[#fafafa]'
                    }`}
                >
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <p className="text-purple-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                                FAQ
                            </p>

                            <h2
                                id="ai-faq-heading"
                                className={`text-3xl font-black mb-3 ${
                                    d ? 'text-white' : 'text-gray-900'
                                }`}
                            >
                                Generative AI Development FAQ
                            </h2>

                            <p
                                className={`text-base ${
                                    d ? 'text-gray-400' : 'text-gray-600'
                                }`}
                            >
                                Common questions about LLM applications, AI
                                chatbots, RAG, AI agents and custom Generative
                                AI development.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {visibleFaqs.map((faq, index) => {
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
                                                setActiveFaq(
                                                    isOpen ? null : index
                                                )
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
                                                <p className="pt-4">
                                                    {faq.a}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* SHOW MORE / SHOW LESS */}

                        {faqs.length > 5 && (
                            <div className="flex justify-center mt-7 mb-12">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowAllFaqs((prev) => !prev);
                                        setActiveFaq(null);
                                    }}
                                    aria-expanded={showAllFaqs}
                                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border text-sm font-bold transition-all ${
                                        d
                                            ? 'bg-white/[0.03] border-white/[0.08] text-gray-300 hover:text-white hover:bg-purple-600/5 hover:border-purple-500/30'
                                            : 'bg-white border-gray-200 text-gray-700 hover:text-purple-700 hover:bg-purple-50 hover:border-purple-200'
                                    }`}
                                >
                                    {showAllFaqs
                                        ? 'Show Less Questions'
                                        : `Show More Questions (${faqs.length - 5})`}

                                    {showAllFaqs ? (
                                        <Minus size={14} />
                                    ) : (
                                        <Plus size={14} />
                                    )}
                                </button>
                            </div>
                        )}

                        <CtaStrip
                            heading="Have a Generative AI project in mind?"
                            sub="Tell us about the AI feature, product or workflow you want to build and we can discuss the technical requirements."
                        />
                    </div>
                </section>

                {/* ======================================================
                    RELATED SERVICES
                ====================================================== */}

                <section
                    aria-label="Related services"
                    className={`py-16 border-b ${
                        d ? 'border-white/[0.06]' : 'border-gray-100'
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
                                Explore Related Development Services
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
                                            : 'bg-[#fafafa] border-gray-200 hover:border-purple-200 hover:shadow-sm'
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
                                            d
                                                ? 'text-white'
                                                : 'text-gray-900'
                                        }`}
                                    >
                                        {service.title}
                                    </h3>

                                    <p
                                        className={`text-sm leading-relaxed mb-5 ${
                                            d
                                                ? 'text-gray-400'
                                                : 'text-gray-600'
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

                {/* ======================================================
                    FINAL CTA
                ====================================================== */}

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
                                <Sparkles size={26} />
                            </div>

                            <h2
                                className={`text-3xl font-black mb-4 ${
                                    d ? 'text-white' : 'text-gray-900'
                                }`}
                            >
                                Ready to Build Your Generative AI Application?
                            </h2>

                            <p
                                className={`text-base mb-8 max-w-2xl mx-auto leading-relaxed ${
                                    d ? 'text-gray-400' : 'text-gray-600'
                                }`}
                            >
                                Tell us about your AI product idea, existing
                                application or business workflow. DevZore can
                                help plan and develop custom AI chatbots, LLM
                                applications, RAG systems, AI agents and
                                AI-enabled SaaS solutions.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center">
                                <Link
                                    to="/contact"
                                    onClick={scrollTop}
                                    className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
                                >
                                    Discuss Your AI Project
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

export default GenerativeAIDevelopment;