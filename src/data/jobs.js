/**
 * DevZore Engineering & Design Positions
 * Note: Sample positions clearly marked [SAMPLE - EDIT] with isActive: false.
 * These illustrate upcoming hiring profiles without misleading applicants or search engines.
 */
export const jobs = [
  {
    id: "mern-stack-developer",
    slug: "mern-stack-developer",
    title: "Senior MERN Stack Developer [SAMPLE - EDIT]",
    department: "Engineering",
    type: "Full-Time / Remote",
    location: "Remote (Global / PK / GCC)",
    experience: "3+ Years",
    isActive: false,
    shortDescription:
      "Build high-performance web applications, enterprise dashboards, and REST APIs using MongoDB, Express, React, and Node.js.",
    overview:
      "We are seeking an experienced Full-Stack MERN Developer to architect and deliver mission-critical software systems for our international client base. You will work directly with our engineering lead to develop complex business software, inventory platforms, and SaaS products.",
    responsibilities: [
      "Architect and implement scalable React frontend interfaces with Tailwind CSS and modern state management.",
      "Develop secure, modular RESTful APIs using Node.js and Express.",
      "Design normalized and optimized MongoDB schemas, indexing strategies, and aggregation pipelines.",
      "Collaborate via Git, participate in thorough code reviews, and maintain clean component architecture.",
      "Implement automated unit and integration tests to ensure production reliability.",
    ],
    requirements: [
      "3+ years of professional full-stack development experience with the MERN stack.",
      "Deep understanding of React hooks, component lifecycle, performance optimization, and SSR/prerendering concepts.",
      "Strong backend experience with Node.js, Express middleware, JWT authentication, and API security.",
      "Demonstrated ability to design performant MongoDB database models and write complex aggregation queries.",
      "Proficiency with Git, GitHub pull request workflows, and modern CI/CD deployment pipelines.",
      "Excellent written and verbal communication in English.",
    ],
    niceToHave: [
      "Experience with Next.js (App Router, Server Components).",
      "Familiarity with Docker containerization and cloud deployments (AWS, Vercel, DigitalOcean).",
      "Experience integrating AI/LLM APIs (OpenAI, Claude, LangChain).",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JavaScript ES6+", "Git", "REST APIs"],
  },
  {
    id: "react-nextjs-frontend-developer",
    slug: "react-nextjs-frontend-developer",
    title: "React / Next.js Frontend Engineer [SAMPLE - EDIT]",
    department: "Frontend",
    type: "Full-Time / Remote",
    location: "Remote (Global / PK / GCC)",
    experience: "2+ Years",
    isActive: false,
    shortDescription:
      "Craft sub-second, accessible, SEO-optimized web applications with Next.js App Router, React 18, and modern CSS architectures.",
    overview:
      "We are looking for a dedicated Frontend Engineer passionate about web performance, Core Web Vitals, and sleek user experience. You will build user-facing web applications, client portals, and responsive SaaS interfaces.",
    responsibilities: [
      "Translate Figma design systems into pixel-perfect, accessible, and responsive React/Next.js interfaces.",
      "Optimize Core Web Vitals (LCP, FID, CLS, INP) and implement efficient static generation (SSG) and SSR.",
      "Integrate complex backend REST and GraphQL endpoints with resilient loading and error states.",
      "Write clean, modular, and maintainable CSS using Tailwind CSS.",
      "Ensure cross-browser and cross-device compatibility across desktop, tablet, and mobile browsers.",
    ],
    requirements: [
      "2+ years of hands-on experience building production React and Next.js applications.",
      "Strong proficiency in JavaScript (ES6+), TypeScript is a plus, HTML5, and semantic markup.",
      "Proven track record of optimizing page load speed, image compression, and bundle splitting.",
      "Solid understanding of client-side caching, state management, and asynchronous request handling.",
      "Passion for clean UI/UX, micro-interactions, and accessibility (a11y) standards.",
    ],
    niceToHave: [
      "Experience with headless CMS architectures.",
      "Knowledge of Technical SEO fundamentals (JSON-LD structured data, metadata management).",
      "Experience with Framer Motion or modern animation libraries.",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Vite", "JavaScript", "HTML5/CSS3", "Core Web Vitals", "Git"],
  },
  {
    id: "nodejs-backend-developer",
    slug: "nodejs-backend-developer",
    title: "Senior Node.js Backend Engineer [SAMPLE - EDIT]",
    department: "Backend",
    type: "Full-Time / Remote",
    location: "Remote (Global / PK / GCC)",
    experience: "3+ Years",
    isActive: false,
    shortDescription:
      "Design fault-tolerant backend architectures, microservices, database schemas, and high-throughput API endpoints.",
    overview:
      "DevZore is seeking a Senior Backend Engineer to power our business software, inventory logic, and SaaS platforms. You will engineer resilient server architectures, manage database performance, and integrate third-party payment gateways and ERP connectors.",
    responsibilities: [
      "Design, build, and maintain high-throughput REST APIs and asynchronous microservices in Node.js.",
      "Architect relational and non-relational database models with strict data integrity guarantees.",
      "Implement role-based access control (RBAC), multi-tenant isolation, and rate-limiting security layers.",
      "Integrate regional payment gateways, third-party logistics APIs, and webhook event dispatchers.",
      "Monitor server health, diagnose database bottlenecks, and maintain 99.9% uptime architecture.",
    ],
    requirements: [
      "3+ years building backend systems using Node.js, Express, or Fastify in production.",
      "Deep understanding of database design, indexing, connection pooling, and transaction locks (MongoDB and/or PostgreSQL).",
      "Expertise in RESTful API design, authentication protocols (OAuth2, JWT), and web security (OWASP standards).",
      "Experience with server caching strategies (Redis, in-memory) and queue workers.",
      "Strong debugging and profiling skills under load.",
    ],
    niceToHave: [
      "Familiarity with cloud serverless functions and container orchestration (Docker).",
      "Experience building payment integration pipelines (Stripe, Tap, PayPal).",
      "Understanding of WebSockets or real-time event streaming.",
    ],
    techStack: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Redis", "Docker", "REST APIs", "JWT", "Git"],
  },
  {
    id: "ui-ux-designer",
    slug: "ui-ux-designer",
    title: "UI/UX & Product Designer [SAMPLE - EDIT]",
    department: "Design",
    type: "Full-Time / Remote",
    location: "Remote (Global / PK / GCC)",
    experience: "2+ Years",
    isActive: false,
    shortDescription:
      "Design user-friendly web interfaces, complex ERP workflows, design systems, and high-fidelity interactive Figma prototypes.",
    overview:
      "We are looking for a UI/UX Designer who thinks like an engineer: turning complicated operational workflows into intuitive, clean digital interfaces. You will create comprehensive Figma design systems for web apps, SaaS dashboards, and mobile products.",
    responsibilities: [
      "Conduct user workflow research and map out user journey architectures for business software.",
      "Build comprehensive, scalable design systems with reusable components and auto-layout in Figma.",
      "Create high-fidelity wireframes, interactive prototypes, and production-ready visual designs.",
      "Collaborate closely with frontend engineers to ensure design fidelity and feasibility.",
      "Refine existing interfaces based on user feedback and usability testing.",
    ],
    requirements: [
      "2+ years of professional UI/UX design experience for SaaS, web apps, or complex digital tools.",
      "A strong portfolio showcasing end-to-end design process, wireframes, and polished UI solutions.",
      "Expertise with Figma (components, variants, design tokens, responsive constraints).",
      "Deep understanding of typography, color theory, visual hierarchy, and accessibility guidelines.",
      "Ability to articulate design decisions clearly with stakeholders and developers.",
    ],
    niceToHave: [
      "Basic understanding of HTML/CSS and frontend component architectures (React/Tailwind).",
      "Experience designing data-heavy tables, analytics dashboards, and POS systems.",
      "Motion design or micro-interaction prototyping experience.",
    ],
    techStack: ["Figma", "Design Systems", "Wireframing", "Prototyping", "UI/UX Research", "Mobile & Web UI"],
  },
];
