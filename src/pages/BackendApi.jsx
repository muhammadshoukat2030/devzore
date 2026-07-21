import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import ServiceGalleryTemplate from '../components/ServiceGalleryTemplate';

import {
  Database,
  Server,
  Shield,
  Cpu,
  ArrowRight,
  Code2,
  Zap,
  Globe,
  Layers,
  Lock,
  Plus,
  Rocket,
  Layout,
  Repeat,
  CheckCircle2,
  BarChart3,
  ExternalLink,
  Settings2,
  Box,
  Terminal,
  Activity,
  Key
} from 'lucide-react';
import { assets } from '../assets/assets';

function BackendApi() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Which database should I choose: SQL or NoSQL?",
      answer: "It depends on your data structure. For structured data with complex relationships (Fintech, ERPs), we use PostgreSQL (SQL). For high-velocity, unstructured data or rapid scaling (Content platforms, Real-time apps), we recommend MongoDB (NoSQL). We often use a hybrid approach to get the best of both worlds."
    },
    {
      question: "How do you ensure API security?",
      answer: "We implement multi-layer security: JWT (JSON Web Tokens) for authentication, Role-Based Access Control (RBAC), Rate Limiting to prevent DDoS, and data encryption at rest and in transit. We also follow OWASP Top 10 guidelines to prevent common vulnerabilities."
    },
    {
      question: "Can you help migrate a monolith to Microservices?",
      answer: "Yes. We specialize in the 'Strangler Fig' pattern, where we incrementally migrate features from your monolith to independent services. This ensures zero downtime and minimizes business risk during the transition."
    },
    {
      question: "How do you handle high-traffic spikes?",
      answer: "We build with horizontal scalability in mind. Using Redis for caching, message queues like RabbitMQ for asynchronous processing, and load balancing on GCP or AWS to ensure your system stays online during traffic surges."
    }
  ];

  return (
    <>

      <Helmet>
        <title>Scalable Backend Engine & Secure REST/GraphQL API Design | DevZore</title>
        <meta name="description" content="Bulletproof microservices architecture using Node.js, Express, and high-throughput SQL/NoSQL databases built for multi-tenant integrations." />
        <link rel="canonical" href="https://devzore.com/backend-api" />
        <meta property="og:title" content="Scalable Backend Engine & Secure REST/GraphQL API Design | DevZore" />
        <meta property="og:description" content="Robust microservices, flawless payload encryption, and high-concurrency cloud server optimization." />
        <meta property="og:url" content="https://devzore.com/backend-api" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 pb-10 overflow-x-hidden">

        {/* --- HEADER --- */}
        <div className="max-w-7xl mx-auto px-6 pt-30 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            System Architecture & Engineering
          </div>
          <Link to="/contact">
            <button className="cursor-pointer bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all shadow-lg shadow-purple-500/20">
              System Audit
            </button>
          </Link>
        </div>

        {/* --- HERO SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold leading-[1.2] tracking-tight">
              Scalable <span className="text-purple-500">Backend</span> & Robust <span className="text-blue-400">API</span> Solutions
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
              We build the invisible engine that powers your business. From high-performance database schemas to secure REST and GraphQL APIs, we ensure your infrastructure is built for 99.9% uptime.
            </p>
            <div className="flex gap-4">
              <Link to="/contact">
                <button className="cursor-pointer  bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-bold text-sm flex items-center gap-2 transition-all active:scale-95">
                  Start Project <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute -inset-10 bg-blue-600/20 blur-[120px] rounded-full"></div>
            <div className="relative border border-white/10 bg-[#0a0a0a] rounded-[2rem] p-8 shadow-2xl">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                <div className="w-3 h-3 rounded-full bg-gray-700"></div>
              </div>
              <div className="font-mono text-sm space-y-2 text-green-400/80">
                <div className="animate-pulse">{">"} initializing server...</div>
                <div className="delay-75 animate-pulse">{">"} connecting database: MongoDB Atlas</div>
                <div className="delay-150 animate-pulse">{">"} api_gateway: online</div>
                <div className="delay-300 animate-pulse text-purple-400">{">"} server listening on port 5000</div>
                <div className="pt-4 flex gap-2">
                  <span className="h-2 w-20 bg-blue-500/20 rounded"></span>
                  <span className="h-2 w-12 bg-white/5 rounded"></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- EXPERTISE --- */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">
              Core <span className="text-purple-500 text-not-italic">Backend Capabilities</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExpertiseCard
              icon={<Database className="text-purple-500" />}
              title="Database Modeling"
              desc="We design high-performance schemas for PostgreSQL, MongoDB, and Redis, focusing on data integrity, efficient indexing, and horizontal scalability."
              borderColor="border-l-purple-600"
            />
            <ExpertiseCard
              icon={<Terminal className="text-blue-500" />}
              title="API Development"
              desc="Building secure RESTful and GraphQL APIs with comprehensive documentation (Swagger/Postman) and strict versioning for seamless frontend integration."
              borderColor="border-l-blue-500"
            />
            <ExpertiseCard
              icon={<Shield className="text-green-500" />}
              title="Security & Identity"
              desc="Implementing JWT, OAuth2, and multi-factor authentication (MFA) to ensure that your user data and business logic are protected against all threats."
              borderColor="border-l-green-500"
            />
            <ExpertiseCard
              icon={<Cpu className="text-orange-500" />}
              title="Microservices"
              desc="Breaking down complex systems into manageable, independent services that communicate via high-speed gRPC or Message Queues (RabbitMQ/Kafka)."
              borderColor="border-l-orange-500"
            />
            <ExpertiseCard
              icon={<Activity className="text-pink-500" />}
              title="Performance Tuning"
              desc="Server-side caching, load balancing, and background task processing to handle thousands of requests per second without latency."
              borderColor="border-l-pink-500"
            />
            <ExpertiseCard
              icon={<Server className="text-cyan-500" />}
              title="Cloud Infrastructure"
              desc="Deploying and managing server environments on AWS, GCP, and DigitalOcean using Docker and CI/CD pipelines for automated scaling."
              borderColor="border-l-cyan-500"
            />
          </div>
        </section>

        <div className="bg-black min-h-screen">
          {/* Baki sections yahan aayenge */}
          <ServiceGalleryTemplate pageKey="BackendApi" />
        </div>

        {/* --- BACKEND STATS SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white/[0.02] rounded-3xl border border-white/5">
              <div className="text-4xl md:text-5xl font-black text-purple-500 mb-2">99.9%</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">System Uptime</div>
            </div>
            <div className="text-center p-8 bg-white/[0.02] rounded-3xl border border-white/5">
              <div className="text-4xl md:text-5xl font-black text-blue-500 mb-2">500ms</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Avg Response Time</div>
            </div>
            <div className="text-center p-8 bg-white/[0.02] rounded-3xl border border-white/5">
              <div className="text-4xl md:text-5xl font-black text-green-500 mb-2">50+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">API Integrations</div>
            </div>
            <div className="text-center p-8 bg-white/[0.02] rounded-3xl border border-white/5">
              <div className="text-4xl md:text-5xl font-black text-orange-500 mb-2">1M+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Requests Handled</div>
            </div>
          </div>
        </section>

        {/* --- BACKEND TECHNOLOGY STACK --- */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-purple-500 uppercase tracking-[0.3em] mb-4">Core Stack</h2>
            <h3 className="text-3xl md:text-5xl font-bold">Powering with <span className="text-purple-500">Modern</span> Tech</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 ">
            {/* Node.js */}
            <div className="group p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-purple-500/30 transition-all text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                  <i className="devicon-nodejs-plain text-3xl"></i>
                </div>
              </div>
              <p className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">Node.js</p>
            </div>

            {/* Express */}
            <div className="group p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-purple-500/30 transition-all text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <i className="devicon-express-original text-3xl"></i>
                </div>
              </div>
              <p className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">Express</p>
            </div>

            {/* MongoDB */}
            <div className="group p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-purple-500/30 transition-all text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-green-600/10 rounded-2xl flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                  <i className="devicon-mongodb-plain text-3xl"></i>
                </div>
              </div>
              <p className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">MongoDB</p>
            </div>

            {/* PostgreSQL */}
            <div className="group p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-purple-500/30 transition-all text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                  <i className="devicon-postgresql-plain text-3xl"></i>
                </div>
              </div>
              <p className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">PostgreSQL</p>
            </div>

            {/* Redis */}
            {/* <div className="group p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-purple-500/30 transition-all text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                  <i className="devicon-redis-plain text-3xl"></i>
                </div>
              </div>
              <p className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">Redis</p>
            </div> */}

            {/* Docker */}
            {/* <div className="group p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-purple-500/30 transition-all text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-blue-400/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <i className="devicon-docker-plain text-3xl"></i>
                </div>
              </div>
              <p className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">Docker</p>
            </div> */}
          </div>

          {/* Sub-text for backend features */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {['JWT Auth', 'REST APIs', 'GraphQL', 'Microservices', 'WebSockets', 'AWS'].map((item) => (
              <span key={item} className="px-5 py-2 rounded-full border border-white/5 bg-white/[0.02] text-[10px] font-bold text-gray-500 uppercase tracking-widest hover:text-purple-500 hover:border-purple-500/30 transition-all">
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* --- SERVICES --- */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 italic text-center md:text-left">
            Backend <span className="text-purple-500 text-not-italic">Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Settings2 />}
              title="Custom Backend Logic"
              desc="Building the core business logic of your application with Node.js or Python, ensuring it's modular, testable, and ready for future feature expansions."
            />
            <ServiceCard
              icon={<Repeat />}
              title="Third-Party Integrations"
              desc="Seamlessly connecting your platform with Stripe, PayPal, Twilio, SendGrid, and other external APIs to extend your application's capabilities."
            />
            <ServiceCard
              icon={<Box />}
              title="Serverless Solutions"
              desc="Utilizing AWS Lambda or Google Cloud Functions to build cost-effective, event-driven backends that scale automatically with your traffic."
            />
            <ServiceCard
              icon={<Key />}
              title="Auth & Session Mgmt"
              desc="Advanced session handling, password hashing (Bcrypt/Argon2), and secure cookie management to keep your user sessions bulletproof."
            />
            <ServiceCard
              icon={<Layers />}
              title="Real-time Systems"
              desc="Implementing WebSockets (Socket.io) for live chats, real-time notifications, and collaborative tools that require instant data synchronization."
            />
            <ServiceCard
              icon={<Lock />}
              title="Data Migration"
              desc="Expertly migrating legacy data systems to modern databases without data loss or significant downtime, including sanitization and re-formatting."
            />
          </div>
        </section>

        {/* --- METHODOLOGY --- */}
        <section className="max-w-7xl mx-auto px-6 py-24 bg-white/[0.02] rounded-[3rem] border border-white/5">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Backend Engineering <span className="text-purple-500">Standards</span></h2>
            <p className="text-gray-400">Reliability is not an accident; it is the result of disciplined engineering. We follow a strict protocol for every line of server-side code we write.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <MethodologyItem
                title="Test-Driven Development (TDD)"
                desc="We write unit and integration tests for every API endpoint before deployment. This ensures that a new feature doesn't break existing functionality (Regression)."
              />
              <MethodologyItem
                title="Stateless Architecture"
                desc="Our servers are designed to be stateless, allowing for infinite horizontal scaling. Session data is handled via distributed stores like Redis."
              />
            </div>
            <div className="space-y-8">
              <MethodologyItem
                title="Security by Design"
                desc="Input validation, sanitization, and parameterized queries are default practices to prevent SQL Injection, XSS, and other common attacks."
              />
              <MethodologyItem
                title="Automated CI/CD"
                desc="Every code push is automatically audited, tested, and deployed to staging/production environments, ensuring a rapid and safe release cycle."
              />
            </div>
          </div>
        </section>

        {/* --- WORKFLOW --- */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold italic">Our Engineering <span className="text-purple-500 text-not-italic">Workflow</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StepCard step="Step 1" title="Data Modeling" desc="Mapping out entities and relationships to ensure optimal performance and flexibility." icon={<Database size={20} />} />
            <StepCard step="Step 2" title="Auth & Security" desc="Setting up the security layer before a single business route is even created." icon={<Lock size={20} />} />
            <StepCard step="Step 3" title="API Development" desc="Implementing business logic and endpoints with strict type-checking and validation." icon={<Code2 size={20} />} />
            <StepCard step="Step 4" title="Integration" desc="Connecting with external services and ensuring smooth communication with the frontend." icon={<Repeat size={20} />} />
            <StepCard step="Step 5" title="Load Testing" desc="Simulating high traffic to identify and eliminate performance bottlenecks before launch." icon={<Zap size={20} />} />

            <div className="p-8 bg-purple-600 rounded-3xl flex flex-col justify-center items-center text-center shadow-xl shadow-purple-500/20 group hover:bg-purple-700 transition-all">
              <Rocket className="mb-4 animate-bounce text-white" size={32} />
              <h3 className="font-bold text-white mb-2 text-xl">Ready to launch?</h3>
              <p className="text-purple-100 text-xs mb-4">Let's build something extraordinary together.</p>
              <Link to="/contact" className="text-xs font-black uppercase tracking-tighter bg-white text-purple-600 px-6 py-2.5 rounded-xl hover:scale-105 transition-transform">
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* --- BACKEND PROCESS & IMAGES (FIXED) --- */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Image 1 & Content */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-900 rounded-3xl blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-[#0c0c0c] border border-white/10 rounded-3xl overflow-hidden">
                <div className="h-80 w-full overflow-hidden bg-gray-900">
                  <img
                    src={assets.backend_aws}
                    alt="Server Infrastructure"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                    onError={(e) => { e.target.src = assets.backend_aws; }}
                  />
                </div>
                <div className="p-8">
                  <div className="inline-flex items-center gap-2 text-purple-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
                    <Server size={14} /> Global Infrastructure
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">High-Availability Servers</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We containerize your backend using Docker and deploy it on AWS or Google Cloud. The infrastructure automatically scales to handle high traffic, ensuring consistent performance and reliability.
                  </p>
                </div>
              </div>
            </div>

            {/* Image 2 & Content */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-[#0c0c0c] border border-white/10 rounded-3xl overflow-hidden">
                <div className="h-80 w-full overflow-hidden bg-gray-900">
                  <img
                    src={assets.backend_clean}
                    alt="Clean Database Code"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/800x600/111/555?text=Database+Optimization"; }}
                  />
                </div>
                <div className="p-8">
                  <div className="inline-flex items-center gap-2 text-purple-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
                    <Database size={14} /> Optimized Databases
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Complex Query Optimization</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Retrieving data efficiently is real engineering. We use advanced indexing techniques to ensure your reports and dashboards load in milliseconds.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- FAQ --- */}
        <section className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold mb-12 italic text-center">Backend <span className="text-purple-500 text-not-italic">Deep Dive</span></h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className={`border rounded-2xl transition-all ${activeIndex === i ? 'border-purple-500/50 bg-purple-500/5' : 'border-white/5 bg-[#0A0A0A]'}`}>
                <button onClick={() => setActiveIndex(activeIndex === i ? null : i)} className="w-full p-6 text-left flex justify-between items-center group">
                  <h3 className="font-bold text-sm md:text-base">{faq.question}</h3>
                  <Plus size={18} className={`${activeIndex === i ? 'rotate-45 text-purple-500' : 'text-gray-600'}`} />
                </button>
                {activeIndex === i && <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </section>
        {/* --- FINAL CTA WITH PURPLE THEME --- */}
        <section className="max-w-7xl mx-auto px-6 py-1">
          <div className="bg-gradient-to-br from-[#0c0c0c] to-[#111111] border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 text-center relative overflow-hidden">

            {/* Purple Glow Effects */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-900/10 blur-[100px] rounded-full pointer-events-none"></div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              Ready to build a <span className="text-purple-500">reliable</span> engine?
            </h2>

            <p className="text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed text-sm md:text-lg">
              Whether you require a backend architecture from the ground up or need to scale your existing system — DevZore’s engineering team is here to help.
            </p>
            <Link to="/contact" className="inline-block relative z-10">
              <button className="cursor-pointer group bg-purple-600 hover:bg-purple-700 px-8 py-4 md:px-12 md:py-5 rounded-2xl font-bold text-base md:text-xl flex items-center gap-3 mx-auto mb-16 transition-all active:scale-95 shadow-2xl shadow-purple-500/25 cursor-pointer text-white">
                Start Backend Project <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            {/* Internal Links for SEO & Navigation */}
            <div className="border-t border-white/5 pt-6 relative z-10">
              <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-x-4 gap-y-8 md:gap-x-8 text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-[0.15em]">

                <Link to="/mern-stack-development" className="hover:text-purple-500 transition-all flex items-center justify-center gap-1 group cursor-pointer py-2">
                  MERN STACK
                  <ExternalLink size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-purple-500" />
                </Link>

                <Link to="/reactdevelopment" className="hover:text-purple-400 transition-all flex items-center justify-center gap-1 group cursor-pointer py-2">
                  REACT FRONTEND
                  <ExternalLink size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-purple-500" />
                </Link>

                <Link to="/web-development" className="hover:text-purple-500 transition-all flex items-center justify-center gap-1 group cursor-pointer py-2">
                  WEB DEVELOPMENT
                  <ExternalLink size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-purple-500" />
                </Link>

                <Link to="/saas-product-development" className="hover:text-purple-500 transition-all flex items-center justify-center gap-1 group cursor-pointer py-2">
                  SAAS SOLUTIONS
                  <ExternalLink size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-purple-500" />
                </Link>

                <Link to="/" className="hover:text-white transition-all text-gray-400 flex items-center justify-center gap-1 group cursor-pointer py-2 border-l border-white/10 pl-4 ml-4 hidden md:flex">
                  BACK TO HOME
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

/* --- REUSABLE COMPONENTS --- */

const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-[#080808] p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all group">
    <div className="mb-4 text-purple-500 group-hover:scale-110 transition-transform duration-300">
      {React.cloneElement(icon, { size: 35 })}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const MethodologyItem = ({ title, desc }) => (
  <div className="flex gap-4">
    <div className="mt-1"><CheckCircle2 className="text-purple-500" size={20} /></div>
    <div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const StepCard = ({ step, title, desc, icon }) => (
  <div className="p-8 bg-[#0c0c0c] border border-white/5 rounded-3xl relative group hover:border-purple-500/30 transition-all">
    <div className="flex justify-between items-start mb-6">
      <div className="text-[10px] font-black text-purple-500 uppercase tracking-widest">{step}</div>
      <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">{icon}</div>
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
  </div>
);

const ExpertiseCard = ({ icon, title, desc, borderColor }) => (
  <div className={`bg-[#080808] p-8 rounded-2xl border border-gray-900 border-l-4 ${borderColor} hover:bg-[#0c0c0c] transition-all group`}>
    <div className="mb-6 p-3 bg-white/5 inline-block rounded-xl group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-lg font-bold mb-3 text-gray-100">{title}</h3>
    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
  </div>
);

export default BackendApi;