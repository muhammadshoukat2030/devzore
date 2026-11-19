import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PricingBlock from "../components/PricingBlock";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CircleCheck,
  Clock3,
  Cloud,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Gauge,
  Globe2,
  KeyRound,
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

export default function CloudDeployment({ isDark }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Cloud & Deployment Services",
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
    "https://wa.me/923348004300?text=Hi%20DevZore,%20I%20want%20to%20discuss%20cloud%20deployment%20and%20DevOps%20services%20for%20my%20business.";

  /* =========================================================
     CAPABILITIES (WHAT WE ENGINEER)
  ========================================================= */

  const services = [
    {
      icon: <Rocket size={20} />,
      number: "01",
      title: "Vercel & Modern Edge Frontend Hosting",
      desc:
        "Global edge deployments for Next.js, React, and serverless applications with instant pull request preview URLs, automated SSL, and zero-downtime rolling releases.",
      points: [
        "Edge CDN distribution across 300+ global locations",
        "Automated Git pull request branch preview environments",
        "Serverless functions setup with instant cold-start tuning",
      ],
    },
    {
      icon: <Shield size={20} />,
      number: "02",
      title: "Cloudflare DNS, CDN & Security Hardening",
      desc:
        "Complete enterprise DNS architecture, global asset caching, Web Application Firewall (WAF) policies, DDoS shielding, and automated TLS 1.3 certificates.",
      points: [
        "Global edge caching with custom page-rule invalidation",
        "Automated DDoS mitigation, bot protection & rate limits",
        "Apex and wildcard domain SSL/TLS certificate management",
      ],
    },
    {
      icon: <Database size={20} />,
      number: "03",
      title: "MongoDB Atlas & Cloud Database Clustering",
      desc:
        "Production database cluster provisioning on MongoDB Atlas and managed PostgreSQL with VPC peering, automated daily backups, and connection pooling.",
      points: [
        "Multi-region replica set clustering with auto-failover",
        "Automated daily snapshot backups with point-in-time recovery",
        "IP access whitelisting & encrypted connection pooling",
      ],
    },
    {
      icon: <RefreshCw size={20} />,
      number: "04",
      title: "Automated CI/CD Pipelines (GitHub Actions)",
      desc:
        "Custom GitHub Actions release pipelines that run linting, automated unit tests, container builds, and zero-downtime deployments on every approved commit.",
      points: [
        "Automated code linting, type checks & unit testing",
        "Zero-downtime release pipelines with instant rollbacks",
        "Automated deployment notifications to Slack & Discord",
      ],
    },
    {
      icon: <Boxes size={20} />,
      number: "05",
      title: "Docker Containerization & Cloud Run / ECS",
      desc:
        "Containerizing Node.js, Python, or Go microservices with Docker, multi-stage builds, and deployment to AWS ECS, Google Cloud Run, or DigitalOcean Kubernetes.",
      points: [
        "Multi-stage Docker builds for minimal image footprints",
        "Auto-scaling container clusters responding to live traffic",
        "Stateless container architecture with zero data loss",
      ],
    },
    {
      icon: <Activity size={20} />,
      number: "06",
      title: "Infrastructure Monitoring & APM Telemetry",
      desc:
        "Continuous application health checks, TTFB latency profiling, error tracking with Sentry, and automated alerts so you catch issues before your customers do.",
      points: [
        "24/7 synthetic uptime health monitoring & alerts",
        "Sub-200ms Time-to-First-Byte (TTFB) latency profiling",
        "Automated Sentry error logging & performance tracing",
      ],
    },
  ];

  /* =========================================================
     TECHNICAL STANDARDS
  ========================================================= */

  const standards = [
    {
      num: "01",
      title: "99.9% High Availability SLA Architecture",
      desc:
        "Multi-zone redundancy, stateless compute, and automated health checks eliminate single points of failure so your digital products stay online.",
    },
    {
      num: "02",
      title: "Automated Disaster Recovery & Backups",
      desc:
        "Daily automated database snapshots, multi-region backup replication, and tested restoration procedures ensure zero catastrophic data loss.",
    },
    {
      num: "03",
      title: "Immutable Infrastructure as Code (GitOps)",
      desc:
        "All deployment scripts, environment templates, and server topologies are versioned in Git for complete auditability and reproducible setups.",
    },
    {
      num: "04",
      title: "Zero-Downtime Deployment Cycles",
      desc:
        "Blue-green deployments and rolling container releases verify system health before cutting live user traffic, eliminating deployment outages.",
    },
    {
      num: "05",
      title: "Least-Privilege IAM & Secret Vaults",
      desc:
        "Environment variables are encrypted inside cloud vaults with strict role-based access. Zero plain-text API keys or passwords inside repositories.",
    },
    {
      num: "06",
      title: "Global Edge Caching & Sub-200ms TTFB",
      desc:
        "Caching static assets, images, and API responses across 300+ global edge nodes ensures sub-200ms Time to First Byte worldwide.",
    },
  ];

  /* =========================================================
     BUSINESS IMPACT (4 PILLARS)
  ========================================================= */

  const businessImpact = [
    {
      tag: "Outage Prevention",
      title: "Eliminate Expensive Server Downtime",
      desc:
        "Keep your checkout, customer portal, and APIs online 24/7 without worrying about server crashes during marketing traffic spikes.",
      stat: "99.9%",
      sub: "Uptime SLA architecture",
    },
    {
      tag: "Cost Efficiency",
      title: "Slash Unnecessary Cloud Overspend",
      desc:
        "Right-size cloud instances, eliminate idle virtual machines, and implement auto-scaling to cut monthly cloud hosting expenses by 30–50%.",
      stat: "30-50%",
      sub: "Typical hosting cost reduction",
    },
    {
      tag: "Developer Velocity",
      title: "3x Faster Release Cycles",
      desc:
        "Automated CI/CD pipelines allow your engineering team to ship new features and bug fixes multiple times per day with zero manual friction.",
      stat: "Instant",
      sub: "Automated test-to-deploy",
    },
    {
      tag: "Asset Security",
      title: "100% Client Account Ownership",
      desc:
        "All cloud hosting accounts, domains, database clusters, and secret vaults are configured directly in your accounts. You retain complete root control.",
      stat: "100%",
      sub: "Infrastructure ownership",
    },
  ];

  /* =========================================================
     DIAGNOSTIC ASSESSMENT (PAIN POINTS VS SOLUTIONS)
  ========================================================= */

  const diagnosticProblems = [
    {
      problem: "Manual FTP or SSH server deployments prone to human errors.",
      consequence: "Broken production builds, missing files, and stressed weekend emergency fixes.",
      solution: "Automated GitHub Actions CI/CD pipelines deploying automatically on verified git push.",
    },
    {
      problem: "Website crashes whenever marketing runs ads or traffic spikes.",
      consequence: "Lost customer sales, abandoned carts, and wasted marketing spend.",
      solution: "Auto-scaling serverless edge compute and Cloudflare CDN caching handling sudden volume surges.",
    },
    {
      problem: "Developers afraid to deploy on Fridays due to fear of downtime.",
      consequence: "Feature delivery stalls and team velocity slows to a crawl.",
      solution: "Zero-downtime blue/green rolling deployments with instant one-click rollback capability.",
    },
    {
      problem: "No staging environment — changes are tested directly on live servers.",
      consequence: "Bugs and broken layouts exposed directly to real paying customers.",
      solution: "Ephemeral branch preview URLs generated automatically for every pull request.",
    },
    {
      problem: "Unencrypted API keys and database passwords stored in git repos.",
      consequence: "Severe security vulnerabilities, leaked credentials, and unauthorized data access.",
      solution: "Cloud KMS and encrypted environment vaults with least-privilege role-based access control.",
    },
    {
      problem: "Database data loss risk with no automated backup retention.",
      consequence: "Catastrophic data loss during server corruption or accidental table drop.",
      solution: "Automated daily multi-region snapshot backups with point-in-time recovery.",
    },
  ];

  /* =========================================================
     PROCESS (6 PHASES)
  ========================================================= */

  const process = [
    {
      num: "01",
      title: "Infrastructure & Security Audit",
      desc:
        "We audit your repository, dependencies, database queries, traffic patterns, and existing server costs to identify bottlenecks and risks.",
      deliverable: "Cloud Architecture Blueprint & Optimization Plan",
    },
    {
      num: "02",
      title: "Cloud Topology & Container Design",
      desc:
        "We design the target cloud stack (Vercel, Cloudflare, Docker, MongoDB Atlas) with strict environment separation between staging and production.",
      deliverable: "Environment Topology & Docker Configuration",
    },
    {
      num: "03",
      title: "CI/CD Pipeline Automation",
      desc:
        "We engineer automated GitHub Actions workflows that run linting, unit tests, container builds, and staging branch preview deployments.",
      deliverable: "Production GitHub Actions Pipeline Scripts",
    },
    {
      num: "04",
      title: "Security Hardening & Secret Vaults",
      desc:
        "We configure SSL/TLS certificates, Cloudflare WAF firewall rules, IP whitelists, and encrypt environment variables inside cloud vaults.",
      deliverable: "Hardened Security Posture & Encrypted Vaults",
    },
    {
      num: "05",
      title: "Staging Verification & Smoke Testing",
      desc:
        "We run load tests against the staging cluster, verify database connection pooling, test automated rollbacks, and benchmark latency.",
      deliverable: "Load Test Verification & Uptime Benchmarks",
    },
    {
      num: "06",
      title: "Zero-Downtime Production Cutover",
      desc:
        "We coordinate DNS propagation with zero downtime, verify live telemetry alerts, and hand over complete architectural runbooks and root credentials.",
      deliverable: "Production Cutover, Runbooks & Complete Ownership",
    },
  ];

  /* =========================================================
     INDUSTRIES
  ========================================================= */

  const industries = [
    {
      sector: "SaaS Platforms",
      pain: "Rapid release cycles needing staging isolation",
      engineered: "Ephemeral branch previews, database connection pooling & zero-downtime rolling deploys",
    },
    {
      sector: "High-Traffic E-Commerce",
      pain: "Sudden traffic spikes during flash sales causing crashes",
      engineered: "Cloudflare edge caching, auto-scaling compute & resilient database replica sets",
    },
    {
      sector: "Fintech & Enterprise Systems",
      pain: "Strict regulatory compliance and sensitive credential risks",
      engineered: "Encrypted KMS vaults, VPC peering, least-privilege IAM & automated audit logging",
    },
    {
      sector: "Media & Content Portals",
      pain: "High bandwidth costs and slow image load times globally",
      engineered: "Global edge CDN caching, automated image optimization & sub-100ms global TTFB",
    },
  ];

  /* =========================================================
     WHY DEVZORE
  ========================================================= */

  const whyDevZore = [
    {
      icon: <Terminal size={20} />,
      title: "Direct Senior DevOps Engineers",
      desc:
        "Work directly with cloud infrastructure specialists who understand Docker, Linux, CI/CD, and database clustering. Zero junior handoffs.",
    },
    {
      icon: <LockKeyhole size={20} />,
      title: "100% Client Account Ownership",
      desc:
        "We configure everything directly inside your own Vercel, AWS, Cloudflare, and MongoDB Atlas accounts. You hold root billing and access keys.",
    },
    {
      icon: <Boxes size={20} />,
      title: "Zero Vendor Lock-In",
      desc:
        "Containerized Docker setups and GitOps configurations ensure your applications can be moved between cloud providers whenever needed.",
    },
    {
      icon: <FileText size={20} />,
      title: "Comprehensive Runbooks",
      desc:
        "We deliver clear architectural runbooks and disaster recovery procedures so your internal team can operate and deploy with total confidence.",
    },
    {
      icon: <Gauge size={20} />,
      title: "Transparent Milestone Scoping",
      desc:
        "Clear project scopes and milestones with zero hidden hourly surprises. You know exactly what infrastructure is being built and when.",
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "30-Day Post-Cutover Warranty",
      desc:
        "Every cloud deployment includes 30 days of active post-launch monitoring, configuration adjustments, and DNS verification support.",
    },
  ];

  /* =========================================================
     RELATED SERVICES
  ========================================================= */

  const relatedServices = [
    {
      title: "Web Development",
      path: "/webdevelopment",
      desc:
        "High-performance, modern business websites engineered for maximum search visibility, fast Core Web Vitals, and conversion.",
    },
    {
      title: "Next.js Development",
      path: "/nextjs-development",
      desc:
        "Server-rendered React web applications with sub-second page loads, Server Components, and seamless Vercel edge deployment.",
    },
    {
      title: "Backend & API Development",
      path: "/backend-api",
      desc:
        "High-throughput REST and GraphQL backend architectures, database schemas, and microservices powering enterprise web platforms.",
    },
    {
      title: "Maintenance & Support",
      path: "/maintenance",
      desc:
        "Proactive server monitoring, automated security patch updates, backup validation, and SLA-backed bug fixes.",
    },
  ];

  /* =========================================================
     FAQ ACCORDION
  ========================================================= */

  const faqs = [
    {
      q: "What cloud platforms does DevZore use for client deployments?",
      a:
        "DevZore primarily leverages Vercel for high-performance frontend and serverless delivery, Cloudflare for global DNS, caching, and security, and MongoDB Atlas for managed cloud database clusters. For containerized backend microservices, we deploy on AWS (ECS / Fargate), Google Cloud Run, or DigitalOcean Kubernetes based on your architectural requirements.",
    },
    {
      q: "How long does a typical production cloud deployment take?",
      a:
        "Standard deployment setup for existing applications typically takes 2 to 5 business days, including DNS propagation, SSL verification, environment configuration, database migration, automated CI/CD pipeline setup, and comprehensive smoke testing.",
    },
    {
      q: "Do I own my cloud accounts and hosting infrastructure?",
      a:
        "Yes, 100%. We configure everything inside your own Vercel, Cloudflare, and MongoDB Atlas accounts or transfer ownership completely upon project completion. You retain full administrative access, billing control, and intellectual property. DevZore never holds client infrastructure hostage.",
    },
    {
      q: "What is your post-launch support for cloud infrastructure?",
      a:
        "Every deployment includes our 30-day post-launch warranty covering configuration adjustments, domain re-pointing, and initial performance verification. We also provide ongoing maintenance plans for continuous updates, backup validation, and 24/7 uptime monitoring.",
    },
    {
      q: "Can you configure custom domain SSL and automated staging branch previews?",
      a:
        "Yes. Every cloud setup includes enterprise-grade SSL/TLS certificates via Cloudflare, automated DNS record verification, and ephemeral branch preview deployments so your team can test every pull request on a live URL before merging to production.",
    },
    {
      q: "How do you achieve zero downtime during DNS and server cutover?",
      a:
        "We set low TTLs on existing DNS records days before migration, provision and fully test the new cloud environment on a staging subdomain, perform database synchronization, and then flip DNS records with zero downtime. Old and new environments run in parallel until global propagation is 100% verified.",
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
    const mailtoUrl = `mailto:contact@devzore.com?subject=Cloud%20Deployment%20Project%20Enquiry%20-%20${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nService: ${formData.service}\nTimeline: ${formData.timeline}\n\nProject Details:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  /* =========================================================
     STRUCTURED DATA
  ========================================================= */

  const pageTitle = "Cloud & Deployment Services | DevOps & Hosting | DevZore";
  const pageDescription =
    "DevZore provides cloud architecture, CI/CD pipelines, Vercel, Cloudflare and MongoDB Atlas setup, server migration, monitoring and cloud optimization.";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cloud & Deployment Services",
    serviceType: "Cloud Architecture, DevOps Engineering & Infrastructure",
    provider: {
      "@type": "Organization",
      name: "DevZore",
      url: "https://devzore.com",
    },
    areaServed: "Worldwide",
    description: pageDescription,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cloud Deployment Capabilities",
      itemListElement: [
        { "@type": "Offer", name: "Vercel & Modern Edge Frontend Hosting" },
        { "@type": "Offer", name: "Cloudflare DNS, CDN & Security Hardening" },
        { "@type": "Offer", name: "MongoDB Atlas & Cloud Database Clustering" },
        { "@type": "Offer", name: "Automated CI/CD Pipelines (GitHub Actions)" },
        { "@type": "Offer", name: "Docker Containerization & Cloud Run / ECS" },
        { "@type": "Offer", name: "Infrastructure Monitoring & APM Telemetry" },
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
      { "@type": "ListItem", position: 3, name: "Cloud & Deployment Services", item: "https://devzore.com/cloud-deployment" },
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
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://devzore.com/cloud-deployment" />
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
          aria-labelledby="cloud-deployment-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 right-[5%] w-[500px] h-[500px] rounded-full bg-[#078fa5]/15 blur-[130px]" />
            <div className="absolute inset-0 opacity-50" style={darkGrid} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#04111a] via-[#04111a]/95 to-[#04111a]/60" />
          </div>

          <div className="relative max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16">
            <div className="grid lg:grid-cols-[0.96fr_1.04fr] gap-8 lg:gap-12 items-center">
              <div className="relative z-10">
                <SectionLabel light>Cloud & DevOps Engineering</SectionLabel>

                <h1
                  id="cloud-deployment-heading"
                  className="mt-4 text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold tracking-[-0.03em] leading-[1.08] text-white"
                >
                  Production <span className="text-[#20c5d6]">Cloud Deployment, DevOps & Infrastructure</span> Services
                </h1>

                <p className="mt-5 text-[15px] sm:text-base lg:text-[17px] text-slate-300 leading-relaxed max-w-xl font-normal">
                  Eliminate server downtime, automate continuous delivery, and secure your cloud infrastructure. We engineer production-grade Vercel, Cloudflare, MongoDB Atlas, and Docker environments for high-traffic web applications, SaaS platforms, and APIs.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <a
                    href="#cloud-project-form"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0796A8] hover:bg-[#12b1c4] text-white text-sm font-semibold transition shadow-lg shadow-[#0796A8]/20"
                  >
                    <span>Configure Cloud Architecture</span>
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
                    <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">99.9% Uptime</div>
                    <div className="text-xs text-slate-400 mt-1">High-Availability SLA</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-[#20c5d6] tracking-tight">Zero Downtime</div>
                    <div className="text-xs text-slate-400 mt-1">Rolling Deployments</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">100% Owned</div>
                    <div className="text-xs text-slate-400 mt-1">Your Cloud Accounts</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-[#20c5d6] tracking-tight">&lt;200ms</div>
                    <div className="text-xs text-slate-400 mt-1">Global Edge TTFB</div>
                  </div>
                </div>
              </div>

              {/* RIGHT VISUAL: CLOUD TOPOLOGY SIMULATOR */}
              <div className="relative z-10">
                <div className="rounded-2xl border border-white/[0.12] bg-[#071923]/90 backdrop-blur-md p-5 sm:p-6 shadow-2xl shadow-black/40">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2.5">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-xs font-mono text-slate-400 ml-2">cloud-topology-matrix.yaml</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        All Clusters Healthy
                      </span>
                    </div>
                  </div>

                  {/* SIMULATED CLOUD TOPOLOGY */}
                  <div className="mt-4 space-y-3 font-mono text-xs">
                    <div className="rounded-lg bg-[#04111a] border border-cyan-500/20 p-3 text-slate-300">
                      <div className="flex items-center justify-between text-[11px] mb-1">
                        <span className="text-cyan-400 font-semibold uppercase tracking-wider">Edge Layer: Cloudflare WAF</span>
                        <span className="text-emerald-400 font-medium">Anycast 300+ PoPs</span>
                      </div>
                      <div className="text-slate-300 text-xs">
                        TLS 1.3 Active | DDoS Shield: Armed | Bot Filter: 0 false positives
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="rounded-md bg-white/[0.03] border border-white/[0.05] p-2.5">
                        <span className="text-slate-400 block mb-0.5">Compute Runtime:</span>
                        <span className="text-cyan-400 font-medium">Vercel Edge &amp; Docker</span>
                      </div>
                      <div className="rounded-md bg-white/[0.03] border border-white/[0.05] p-2.5">
                        <span className="text-slate-400 block mb-0.5">Database Cluster:</span>
                        <span className="text-emerald-400 font-medium">Atlas Multi-Region HA</span>
                      </div>
                    </div>

                    <div className="rounded-lg bg-[#04111a] border border-white/[0.06] p-3 text-slate-200">
                      <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                        <span className="text-cyan-400 font-semibold uppercase tracking-wider">CI/CD Pipeline Status</span>
                        <span className="text-emerald-400 font-medium">Commit #a84f9b2 Passed</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="text-emerald-400 font-bold">✓ Tests: 400</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-emerald-400 font-bold">✓ Lint: Clean</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-cyan-400 font-bold">✓ Preview Deployed</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.06] text-center text-[11px]">
                      <div>
                        <div className="text-slate-400">TTFB Global</div>
                        <div className="text-emerald-400 font-semibold mt-0.5">38ms</div>
                      </div>
                      <div>
                        <div className="text-slate-400">Secrets Vault</div>
                        <div className="text-cyan-400 font-semibold mt-0.5">KMS Encrypted</div>
                      </div>
                      <div>
                        <div className="text-slate-400">Backups</div>
                        <div className="text-white font-semibold mt-0.5">Daily Auto (0 errors)</div>
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
                <SectionLabel>DevOps & Cloud Architecture</SectionLabel>
                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0c1f2a] tracking-tight leading-snug">
                  More than hosting. Resilient production cloud engineering.
                </h2>

                <div className="mt-6 rounded-xl bg-white border border-slate-200 p-4 shadow-sm">
                  <p className="text-xs sm:text-[13px] text-[#374151] leading-relaxed">
                    <strong className="text-[#0c1f2a]">Need backend APIs or full-stack software built?</strong> Explore our{" "}
                    <Link to="/backend-api" className="text-[#0796A8] hover:underline font-semibold">
                      Backend & API Development
                    </Link>{" "}
                    or{" "}
                    <Link to="/webdevelopment" className="text-[#0796A8] hover:underline font-semibold">
                      Web Development
                    </Link>{" "}
                    services. This page covers <span className="font-semibold text-[#0c1f2a]">cloud architecture, deployments, CI/CD, and DevOps</span>.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-[14.5px] sm:text-[15px] leading-[1.65] text-[#374151]">
                <p>
                  Modern digital businesses cannot afford manual FTP deployments, unencrypted server passwords, or unexpected outages during traffic spikes. A slow or fragile hosting environment harms search engine rankings, damages user trust, and costs your company revenue.
                </p>
                <p>
                  DevZore provides complete cloud infrastructure engineering. We configure high-performance frontend hosting on Vercel, harden security and DNS routing with Cloudflare, provision fault-tolerant MongoDB Atlas database clusters, and automate release cycles with custom GitHub Actions CI/CD pipelines. Everything is configured in your own accounts with zero vendor lock-in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHAT WE ENGINEER / CAPABILITIES (WHITE)
        ===================================================== */}

        <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="flex justify-center mb-3">
                <SectionLabel>What We Engineer</SectionLabel>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0c1f2a] tracking-tight">
                Cloud & infrastructure solutions designed for continuous uptime.
              </h2>
              <p className="mt-3.5 text-[14.5px] sm:text-[15px] text-[#374151] leading-relaxed">
                Every server topology is engineered for high availability, sub-second latency, and zero data loss.
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
                Measurable infrastructure standards, not fragile server scripts.
              </h2>
              <p className="mt-3.5 text-[14.5px] sm:text-[15px] text-slate-300 leading-relaxed">
                We engineer automated, reproducible GitOps cloud topologies built to handle millions of requests without manual intervention.
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
                How robust cloud engineering protects your bottom line.
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
                Is fragile hosting holding your deployment speed back?
              </h2>
              <p className="mt-3.5 text-[14.5px] sm:text-[15px] text-[#374151] leading-relaxed">
                Compare typical infrastructure bottlenecks with DevZore’s engineered cloud solutions.
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
                <SectionLabel light>Our DevOps Process</SectionLabel>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                From infrastructure audit to production cutover in 6 phases.
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
                Reliable infrastructure engineered for diverse digital workloads.
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
                    <strong className="text-[#0c1f2a]">Cloud Solution:</strong> {ind.engineered}
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
                Certified DevOps engineers. Clean handovers.
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
                More ways DevZore powers your software ecosystem.
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
                Cloud deployment and DevOps questions answered clearly.
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

        <section id="cloud-project-form" className="py-16 sm:py-24 bg-[#04111a] text-white">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <PricingBlock serviceName="Cloud & Deployment Services" />

            <div className="mt-14 max-w-3xl mx-auto rounded-3xl border border-white/[0.1] bg-[#071923] p-6 sm:p-10 shadow-2xl">
              <div className="text-center max-w-xl mx-auto mb-8">
                <SectionLabel light>Direct Scoping Enquiry</SectionLabel>
                <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Discuss Your Cloud Deployment & DevOps Project
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300">
                  Tell us about your application stack, database demands, and target timeline. Our engineers respond within 24 business hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="cloud-name"
                      className="block text-xs font-semibold tracking-[0.12em] uppercase text-slate-400 mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="cloud-name"
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
                      htmlFor="cloud-email"
                      className="block text-xs font-semibold tracking-[0.12em] uppercase text-slate-400 mb-1.5"
                    >
                      Business Email *
                    </label>
                    <input
                      id="cloud-email"
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
                      htmlFor="cloud-company"
                      className="block text-xs font-semibold tracking-[0.12em] uppercase text-slate-400 mb-1.5"
                    >
                      Company / Organization
                    </label>
                    <input
                      id="cloud-company"
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
                      htmlFor="cloud-timeline"
                      className="block text-xs font-semibold tracking-[0.12em] uppercase text-slate-400 mb-1.5"
                    >
                      Target Timeline
                    </label>
                    <select
                      id="cloud-timeline"
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
                    htmlFor="cloud-message"
                    className="block text-xs font-semibold tracking-[0.12em] uppercase text-slate-400 mb-1.5"
                  >
                    Infrastructure Requirements *
                  </label>
                  <textarea
                    id="cloud-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your current hosting, application stack, database size, traffic volume, and key objectives (e.g. CI/CD setup, Vercel migration, Cloudflare WAF, Docker)..."
                    className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0796A8] hover:bg-[#12b1c4] text-white text-sm font-semibold transition shadow-lg"
                >
                  <span>Submit Cloud Project Enquiry</span>
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
                <span className="text-white font-medium">Cloud &amp; Deployment Services</span>
              </div>

              <div>
                <span>Need custom backend APIs built? </span>
                <Link to="/backend-api" className="text-[#20c5d6] hover:underline font-semibold">
                  Backend &amp; API Development →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
