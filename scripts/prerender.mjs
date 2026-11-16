import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");
const publicDir = path.resolve(rootDir, "public");

const BASE_URL = "https://devzore.com";

// Load blog posts data
const blogPostsFile = path.resolve(rootDir, "src/data/blogPosts.json");
const blogPosts = JSON.parse(fs.readFileSync(blogPostsFile, "utf-8"));

// Real projects data
const projectsData = [
  {
    slug: "weldon-paints",
    title: "Weldon Paints",
    businessName: "Weldon Paints",
    industry: "Manufacturing & Retail",
    country: "Pakistan",
    location: "Pakistan",
    systemType: "Inventory & POS Management System",
    headerFacts: "Weldon Paints · Manufacturing & Retail · Pakistan · Inventory & POS Management System",
    client: "Weldon Paints",
    deliveryType: "Remote Full-Stack Delivery",
    category: "Management Systems",
    serviceSlug: "/mern-stack-development",
    serviceName: "MERN Stack Development",
    challenges: [
      "Manual paper registers caused frequent stock discrepancies between central warehouse lots and front-counter retail shelves.",
      "Counter checkout queues slowed down significantly during peak hours due to handwritten paper bills and manual calculations.",
      "Dealer credit accounts and partial payment histories were tracked across loose paper ledgers, causing collection delays.",
      "Zero centralized visibility into paint tinting formulas, batch material consumption, and daily gross profit margins.",
    ],
    problem:
      "Weldon Paints required an operational business platform to replace manual tracking of store inventory, paint formulas, dealer orders, counter sales, and customer billing without paper log bottlenecks.",
    modules: [
      { name: "Warehouse & Multi-Location Stock Control", description: "Real-time stock tracking across warehouse and retail floors with batch number tracking, paint formula allocations, minimum stock reorder alerts, and write-off logs." },
      { name: "Point-of-Sale (POS) & Counter Billing", description: "High-speed counter invoicing supporting retail and wholesale price tiers, instant tax/discount calculations, and thermal receipt printing." },
      { name: "Customer & Dealer Credit Ledger", description: "Tamper-proof customer ledgers tracking outstanding balances, credit limit warnings, payment installment histories, and automated account statements." },
      { name: "Supplier Purchasing & Intake Logs", description: "Structured purchase order creation, vendor payment schedules, and raw material receiving workflows with supplier ledger reconciliation." },
      { name: "Financial Reporting & Analytics Dashboard", description: "Daily cashier shift reconciliation, sales volume trends, product margin breakdowns, and automated balance sheet reporting." },
    ],
    builtFeatures: [
      "Real-time warehouse and retail store inventory tracking",
      "Point-of-sale invoice generation and counter receipt printing",
      "Paint formula cataloging and batch stock allocation",
      "Supplier purchase order management and stock receiving logs",
      "Customer ledger with credit balance tracking and payment histories",
      "Daily profit, sales volume, and stock valuation reporting",
    ],
    outcomeNarrative:
      "Replaced fragmented manual paper ledgers and counter calculations with a centralized, high-availability MERN web platform accessible across warehouse and retail terminals. Inventory updates in real time with every sales transaction, credit histories are fully audited, and daily financial summaries give leadership clear visibility into operational performance.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    description:
      "A complete custom inventory, point-of-sale and business management system engineered with the MERN stack for daily store and warehouse operations.",
  },
  {
    slug: "sarab-express",
    title: "Sarab Express",
    businessName: "Sarab Express",
    industry: "Food & Beverage",
    country: "Pakistan",
    location: "Pakistan",
    systemType: "Digital Ordering & Delivery Platform",
    headerFacts: "Sarab Express · Food & Beverage · Pakistan · Digital Ordering & Delivery Platform",
    client: "Sarab Express",
    deliveryType: "Remote Full-Stack Delivery",
    category: "E-Commerce",
    serviceSlug: "/ecommerce",
    serviceName: "E-Commerce Development",
    challenges: [
      "Third-party food delivery aggregators charged hefty commission fees that severely degraded restaurant profit margins.",
      "Taking customer orders over phone calls led to frequent order errors, address misunderstandings, and delayed kitchen preparation.",
      "Inability to establish direct customer loyalty or capture ordering data for targeted repeat promotions.",
      "Lack of a mobile-optimized visual menu that allowed customers to customize portion sizes, toppings, and spice levels.",
    ],
    problem:
      "Sarab Express needed a dedicated digital menu and ordering platform allowing mobile and desktop customers to browse food categories, customize menu orders with add-ons, add items to a real-time cart, and submit delivery orders without third-party commissions.",
    modules: [
      { name: "Interactive Digital Menu & Visual Catalog", description: "Categorized food presentation with high-resolution food photography, dietary tags, portion pricing, and instant out-of-stock toggles." },
      { name: "Meal Customization & Add-on Engine", description: "Step-by-step modifier selection allowing diners to choose portion sizes, spice levels, sides, beverages, and custom preparation notes." },
      { name: "Real-Time Cart & Checkout System", description: "Instant order subtotal calculation, delivery zone distance fees, delivery address validation, and preferred delivery time slots." },
      { name: "Kitchen Order Receiving Queue", description: "Real-time kitchen display showing active orders categorized by status with audible order chime." },
      { name: "Direct WhatsApp & SMS Order Routing", description: "Automated instant customer receipt dispatch via WhatsApp and SMS confirmation without middleman commission fees." },
    ],
    builtFeatures: [
      "Categorized food menu with high-resolution imagery and dietary tags",
      "Interactive meal customization (portions, spice levels, sides, beverages)",
      "Real-time shopping cart with automatic price calculation and delivery fees",
      "Customer checkout with delivery address validation and order notes",
      "Kitchen order receiving dashboard with order status updates",
      "Mobile-optimized responsive design tailored for smartphone orders",
    ],
    outcomeNarrative:
      "Successfully launched an owned digital storefront that shifted customers away from costly third-party aggregators into direct ordering. Diners enjoy a rapid mobile ordering experience with exact item customization, while kitchen staff receive structured, error-free order tickets directly in the preparation queue.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    description:
      "Modern digital food ordering and menu platform engineered with React, Node.js and MongoDB for seamless customer ordering.",
  },
  {
    slug: "desert-safari-qatar",
    title: "Desert Safari Qatar",
    businessName: "Desert Safari Qatar",
    industry: "Travel & Hospitality",
    country: "Qatar",
    location: "Qatar",
    systemType: "Tourism & Safari Booking Platform",
    headerFacts: "Desert Safari Qatar · Travel & Hospitality · Qatar · Tourism & Safari Booking Platform",
    client: "Desert Safari Qatar",
    deliveryType: "Remote Full-Stack Delivery",
    category: "Travel & Tourism",
    serviceSlug: "/web-development",
    serviceName: "Custom Web Development",
    challenges: [
      "Low search visibility across competitive Qatar desert safari keywords prevented direct customer acquisition from international tourists.",
      "International travelers on mobile roaming connections abandoned bookings due to slow page speeds and convoluted multi-page inquiry forms.",
      "Lack of clear, transparent package itineraries and safety certification displays led to traveler skepticism.",
      "Manual email exchanges created friction and delayed responses across differing international time zones.",
    ],
    problem:
      "The client required an international-grade tourism web portal targeting regional and international visitors to Doha, Qatar, showcasing dune bashing tours, desert camp excursions, and VIP packages with WhatsApp/email reservation pathways.",
    modules: [
      { name: "Tour Package Showcase & Detailed Itineraries", description: "Rich landing pages for morning desert safaris, evening dune bashing, overnight Bedouin camps, and private luxury Land Cruiser expeditions with inclusions, timings, and transparent pricing." },
      { name: "Instant WhatsApp Booking Integration", description: "Contextual WhatsApp booking triggers pre-populating tourist dates, package selected, and group size for instant concierge interaction." },
      { name: "Technical SEO & Schema.org Architecture", description: "Built-in TouristTrip and TravelAgency structured data, semantic headings, and geo-targeted metadata targeting Qatar tourism queries." },
      { name: "Fast Mobile-First Gallery & Asset Delivery", description: "WebP-compressed desert photography galleries loading in under 1.5 seconds on mobile networks with zero layout shift." },
      { name: "Trust & Safety Verification Showcase", description: "Prominent safety protocol disclosures, certified desert driver badges, verified client reviews, and transparent cancellation terms." },
    ],
    builtFeatures: [
      "Tour package catalog with itineraries, inclusions, exclusions, and rates",
      "Direct WhatsApp and email reservation integration for international travelers",
      "High-speed image galleries optimized for mobile devices and desert photography",
      "Technical SEO architecture targeting Qatar tourism and safari search queries",
      "Customer review showcase and safety certification information",
      "Multi-device responsiveness tested for international roaming users",
    ],
    outcomeNarrative:
      "Delivered a modern, authoritative digital platform that ranks prominently for competitive tourism search terms in Doha. International tourists can explore tour options, inspect high-resolution photography, and initiate direct WhatsApp reservations in seconds without booking friction.",
    technologies: ["React", "Node.js", "MongoDB", "SEO", "Tailwind CSS"],
    description:
      "High-performance Qatar tourism and safari booking portal engineered with React, Node.js and organic search optimization.",
  },
  {
    slug: "gulf-dunes-tourism",
    title: "Gulf Dunes Tourism",
    businessName: "Gulf Dunes Tourism",
    industry: "Travel & Tourism",
    country: "Qatar",
    location: "Qatar",
    systemType: "Qatar Tourism & Excursion Portal",
    headerFacts: "Gulf Dunes Tourism · Travel & Tourism · Qatar · Qatar Tourism & Excursion Portal",
    client: "Gulf Dunes Tourism",
    deliveryType: "Remote Full-Stack Delivery",
    category: "Travel & Tourism",
    serviceSlug: "/web-development",
    serviceName: "Custom Web Development",
    challenges: [
      "Disjointed excursion offerings (sea dhow cruises, city tours, desert safaris) caused tourist confusion without structured categorization.",
      "Competitor websites suffered from bloated scripts and slow mobile loading, resulting in high bounce rates.",
      "Difficulty in capturing corporate group excursion inquiries and hotel concierge partnerships through standard retail channels.",
      "Lack of structured location and meeting point guidelines for tourists unfamiliar with Doha geography.",
    ],
    problem:
      "Gulf Dunes Tourism needed a clean, reliable web presence to compete in the competitive Qatar travel and excursions market, loading in under 2 seconds across mobile connections and capturing direct tourist inquiries.",
    modules: [
      { name: "Categorized Excursion Architecture", description: "Distinct structured hubs for Desert Safaris, Arabian Dhow Cruises, Doha City Sightseeing, and Mangrove Kayak Excursions." },
      { name: "Rapid Booking & Lead Capture System", description: "Streamlined inquiry forms routing customer dates, passenger counts, and hotel pickup details directly to dispatch personnel." },
      { name: "Interactive Meeting & Pickup Location Guide", description: "Embedded Google Maps coordinates, Doha port cruise terminal meeting points, and hotel lobby pickup schedules." },
      { name: "Corporate & Private Group Booking Module", description: "Dedicated pathway for travel agents, destination management companies, and corporate retreat planners requiring custom transportation." },
      { name: "Speed & Edge Optimization", description: "Cloudflare edge asset caching, responsive image sets, and zero-layout-shift design guaranteeing sub-2-second loads worldwide." },
    ],
    builtFeatures: [
      "Categorized safari, dhow cruise, and city tour package landing pages",
      "Streamlined booking inquiry form with automated notification routing",
      "Fast Core Web Vitals performance with responsive image compression",
      "Structured data markup (Schema.org) for travel services and rich snippets",
      "Interactive Google Maps and Doha excursion meeting point directions",
      "Multi-channel contact integration (WhatsApp, phone, and direct email)",
    ],
    outcomeNarrative:
      "Established Gulf Dunes Tourism as an authoritative, top-tier tour operator in Doha. The clean categorization enables tourists and corporate organizers to locate, inspect, and book excursions seamlessly across desktop and mobile devices.",
    technologies: ["React", "Node.js", "MongoDB", "SEO", "Tailwind CSS"],
    description:
      "Responsive Qatar tourism platform built for excursion discovery, tour inquiries and international traveler engagement.",
  },
  {
    slug: "frostyops",
    title: "FrostyOps",
    businessName: "FrostyOps",
    industry: "Logistics & Wholesale Distribution",
    country: "Pakistan",
    location: "Pakistan",
    systemType: "Route Logistics & Distribution ERP",
    headerFacts: "FrostyOps · Logistics & Wholesale · Pakistan · Route Logistics & Distribution ERP",
    client: "FrostyOps Distribution",
    deliveryType: "Remote Full-Stack Delivery",
    category: "Management Systems",
    serviceSlug: "/mern-stack-development",
    serviceName: "MERN Stack Development",
    challenges: [
      "Severe stock shrinkage and temperature-loss risks due to manual paper tracking of frozen ice cream batches leaving the central cold storage.",
      "Evening route reconciliation chaos: reconciling vehicle dispatch stock against unsold returns and cash collected by salesmen took hours daily.",
      "Retail shopkeeper credit accounts were kept on loose paper slips, leading to disputed outstanding balances and missed collections.",
      "Zero centralized visibility into daily route profitability, fuel and driver expenses, or supplier invoice payment timelines.",
    ],
    problem:
      "FrostyOps manages frozen food and ice cream distribution across multiple retail routes, facing complex challenges in reconciling daily salesman stock dispatches, tracking returns, and issuing retailer invoices.",
    modules: [
      { name: "Route Dispatch & Return Reconciliation Module", description: "Morning vehicle loading logs, shift dispatch verification, evening unsold stock return audit, and automated net sales reconciliation." },
      { name: "Cold-Chain Multi-Lot Inventory Control", description: "Real-time stock tracking by flavor, product carton, freezer warehouse unit, production batch number, and expiry date alerts." },
      { name: "Retail Customer Ledger & Credit Limits", description: "Point-of-delivery invoice generation, retailer credit terms, cash collection logs, and payment receipt tracking." },
      { name: "Supplier Accounts & Cold-Storage Intake", description: "Supplier purchase order verification, bulk manufacturing intake logs, and vendor payment schedule management." },
      { name: "Logistics Expense & Fleet Tracking", description: "Vehicle fuel expenses, cold-chain maintenance logs, driver trip allowances, and daily route operational cost breakdowns." },
      { name: "Executive Analytics & Profitability Dashboard", description: "Daily gross profit reports, route profitability comparisons, top-performing salesman metrics, and real-time inventory valuations." },
    ],
    builtFeatures: [
      "Warehouse stock tracking with temperature-sensitive inventory lots",
      "Salesmen route dispatch and return stock reconciliation workflows",
      "Retail customer billing with credit terms, discounts, and payment receipts",
      "Supplier ledger, purchase bills, and cold-storage shipment intake",
      "Daily expense tracking (fuel, vehicle maintenance, cold-chain electricity)",
      "Comprehensive analytics: daily profit margins, salesman performance, and sales breakdown",
    ],
    outcomeNarrative:
      "Eliminated evening reconciliation bottlenecks and unrecorded product shrinkage by transitioning to a unified distribution ERP. Dispatchers verify stock in transit in real time, route salesmen are accountable for every carton and cash collection, and leadership monitors gross margin profitability daily.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    description:
      "Comprehensive distribution and inventory management system handling multi-route logistics, sales reconciliations, and supplier accounting.",
  },
  {
    slug: "installment-management",
    title: "Installment Management",
    businessName: "Installment Sales Client",
    industry: "Consumer Finance & Retail Lending",
    country: "Pakistan",
    location: "Pakistan",
    systemType: "Sales & Installment Credit Platform",
    headerFacts: "Installment Management · Consumer Finance · Pakistan · Sales & Installment Credit Platform",
    client: "Installment Sales Client",
    deliveryType: "Remote Full-Stack Delivery",
    category: "Financial Systems",
    serviceSlug: "/mern-stack-development",
    serviceName: "MERN Stack Development",
    challenges: [
      "Managing monthly installment repayment plans for hundreds of retail customers on spreadsheets led to missed payment follow-ups and unrecorded defaults.",
      "High credit default risk caused by lack of structured borrower dossiers, unverified guarantor details, and missing residence documentation.",
      "Complex, error-prone manual calculations required to allocate monthly profit shares and principal returns across multiple private investors.",
      "Customer disputes over historical payment dates and remaining balances due to handwritten paper passbooks.",
    ],
    problem:
      "Consumer installment sales businesses face high default risk when payment schedules, customer records, and guarantor identities are managed manually. The business required an automated system to generate amortization schedules and track overdue installments.",
    modules: [
      { name: "Customer Identity & Guarantor Dossier Engine", description: "Structured borrower profiling with CNIC verification, employment records, residence verification, and dual guarantor documentation." },
      { name: "Flexible Amortization & Plan Generator", description: "Automated installment calculation supporting custom down payments, repayment tenures, markup rates, and penalty rules." },
      { name: "Daily Collection & Overdue Alert Dashboard", description: "Visual daily calendar displaying due payments, grace periods, overdue accounts, and priority collection call queues." },
      { name: "Investor Capital & Profit Sharing Engine", description: "Multi-investor account ledgers tracking invested principal, monthly profit distributions, recovery deductions, and net yield." },
      { name: "Payment Receipting & Balance Ledger", description: "Instant payment recording with printed/SMS payment confirmation slips and tamper-proof customer balance ledger." },
      { name: "Portfolio Risk & Defaulter Analytics", description: "Aging analysis reports, default probability metrics, collection efficiency scores, and bad-debt write-off tracking." },
    ],
    builtFeatures: [
      "Customer profiling with CNIC/identity records and verified guarantor details",
      "Flexible installment plan generator (down payments, monthly schedules, markup rates)",
      "Daily collection dashboard alerting staff to due and overdue customer payments",
      "Multi-investor account management with capital returns and profit shares",
      "Automated SMS/receipt generation upon receiving installment payments",
      "Financial collection reporting, portfolio risk analysis, and defaulter tracking",
    ],
    outcomeNarrative:
      "Automated the entire consumer installment financing cycle from customer onboarding and credit risk assessment to daily collection follow-ups and investor yield payouts. Staff receive daily automated collection queues, eliminating delinquent payment oversights and disputed ledger balances.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    description:
      "Custom financial business system for managing installment schedules, customer credit accounts, investor shares, and overdue collections.",
  },
];

// Static pages metadata
const staticPages = {
  "/": {
    title: "Software & Web Development Company for Businesses | DevZore",
    description:
      "DevZore builds professional business websites, web applications, SaaS products, mobile apps and custom software for startups and businesses worldwide.",
    h1: "Software Development & Web Engineering for Modern Businesses",
    content: `
      <section style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
        <div style="display: flex; gap: 20px; flex-wrap: wrap; margin-bottom: 30px; padding: 20px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px;">
          <div><strong>120+</strong> Projects Completed</div>
          <div><strong>14</strong> Core Services</div>
          <div><strong>Pakistan & Qatar</strong> Active Client Base</div>
          <div><strong>100%</strong> Source Code Handover</div>
          <div><strong>Post-Launch Support</strong> Included</div>
        </div>
        <h2>Custom Web, Mobile & SaaS Engineering</h2>
        <p>DevZore provides engineering-first software development services. Founded by Muhammad Shoukat, DevZore delivers full-stack web applications, SaaS platforms, mobile apps, and custom operational business software for clients in Pakistan, Qatar, and internationally.</p>
        <div>
          <h3>Our Core Capabilities</h3>
          <ul>
            <li><strong>MERN Stack Development:</strong> High-performance full-stack applications with MongoDB, Express.js, React, and Node.js.</li>
            <li><strong>SaaS Product Engineering:</strong> Multi-tenant SaaS architectures, subscription billing, and interactive dashboards.</li>
            <li><strong>Custom Web & Mobile Apps:</strong> Responsive React web applications and cross-platform mobile apps.</li>
            <li><strong>Cloud & Deployment:</strong> Robust hosting on Vercel, Cloudflare, and MongoDB Atlas with automated CI/CD.</li>
          </ul>
        </div>
      </section>
    `,
  },
  "/about": {
    title: "About DevZore | Software & Web Development Company",
    description:
      "Learn about DevZore, a software development agency founded by Muhammad Shoukat, building web applications, SaaS platforms, and mobile apps worldwide.",
    h1: "About DevZore: Engineering-First Software Development",
    content: `
      <section style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
        <h2>Founder-Led Software Agency</h2>
        <p>DevZore was founded by Muhammad Shoukat to provide engineering-first web, mobile, and SaaS software development to businesses without bureaucratic bloat, inflated retainer models, or junior outsourcing.</p>
        <p>Headquartered with remote delivery across Pakistan, Qatar, and internationally, DevZore has engineered active business systems including Weldon Paints inventory management, FrostyOps logistics ERP, and tourism booking portals for Desert Safari Qatar and Gulf Dunes Tourism.</p>
        <h3>Areas We Serve</h3>
        <ul>
          <li><strong>Pakistan:</strong> Retail, inventory, and financial management systems.</li>
          <li><strong>Qatar & GCC:</strong> Tourism, safari, and excursion booking web portals.</li>
          <li><strong>Worldwide Remote:</strong> Full-stack engineering for startups and modern companies.</li>
        </ul>
      </section>
    `,
  },
  "/contact": {
    title: "Contact DevZore | Hire Web & Software Developers Today",
    description:
      "Contact DevZore to discuss your website, web application, SaaS, mobile app, e-commerce or custom software project and request a development quote.",
    h1: "Contact DevZore: Start Your Software Project",
    content: `
      <section style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
        <div style="display: flex; gap: 20px; flex-wrap: wrap; margin-bottom: 30px; padding: 20px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px;">
          <div><strong>120+</strong> Projects Completed</div>
          <div><strong>14</strong> Core Services</div>
          <div><strong>&lt; 24h</strong> Response Guarantee</div>
          <div><strong>Post-Launch Support</strong> Included</div>
        </div>
        <h2>Discuss Your Requirements With Our Engineering Team</h2>
        <p>Reach out directly to discuss your web application, SaaS product, mobile app, or custom software requirements. We respond to all project inquiries within 24 hours.</p>
        <ul>
          <li><strong>WhatsApp Direct:</strong> +92 334 8004300</li>
          <li><strong>Email:</strong> hellodevzore@gmail.com</li>
          <li><strong>Website:</strong> devzore.com</li>
          <li><strong>Delivery Locations:</strong> Pakistan, Qatar & Worldwide Remote</li>
        </ul>
        <h3>Selected Real Systems Built by DevZore</h3>
        <ul>
          <li><a href="/projects/weldon-paints">Weldon Paints — Inventory & POS Management System</a></li>
          <li><a href="/projects/desert-safari-qatar">Desert Safari Qatar — Tourism & Excursion Booking Platform</a></li>
          <li><a href="/projects/sarab-express">Sarab Express — Digital Ordering & Delivery Platform</a></li>
        </ul>
      </section>
    `,
  },
  "/allservices": {
    title: "Software Development Services | Web, Mobile & SaaS | DevZore",
    description:
      "Explore DevZore services: web development, mobile apps, generative AI, e-commerce, MERN stack, React, SaaS, cloud deployment, UI/UX, SEO and support.",
    h1: "Software Development Services & Engineering Capabilities",
    content: `
      <section style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
        <h2>14 Specialized Software Engineering Services</h2>
        <p>DevZore provides 14 end-to-end software development services tailored for startups and scaling businesses:</p>
        <ol>
          <li>Generative AI Development</li>
          <li>Custom Web Development</li>
          <li>Mobile App Development (iOS & Android)</li>
          <li>E-Commerce Platform Development</li>
          <li>Backend & REST API Development</li>
          <li>MERN Stack Development</li>
          <li>SaaS Product Development</li>
          <li>React Development</li>
          <li>UI/UX Design & Prototyping</li>
          <li>Startup MVP Development</li>
          <li>Cloud & Deployment Services</li>
          <li>Website Maintenance & Technical Support</li>
          <li>SEO Services & Search Visibility</li>
          <li>Digital Marketing & Growth</li>
        </ol>
      </section>
    `,
  },
  "/mern-stack-development": {
    title: "MERN Stack Development Services | React & Node | DevZore",
    description:
      "Custom MERN stack development using MongoDB, Express, React and Node.js for scalable web applications, SaaS products, dashboards and business software.",
    h1: "MERN Stack Development Services",
    content: `
      <section style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
        <h2>Full-Stack Web Applications & SaaS Engineering with MongoDB, Express, React & Node</h2>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>What is MERN stack development and who is it for?</h3>
          <p>MERN stack development is full-stack software engineering using MongoDB, Express.js, React, and Node.js with unified JavaScript across frontend and backend. It is ideal for startups building MVPs, SaaS founders launching subscription platforms, and businesses requiring custom management systems, real-time dashboards, and secure REST APIs without fragmented technology overhead.</p>
        </div>
        <h3>Verified Real MERN Projects</h3>
        <ul>
          <li><strong>Weldon Paints:</strong> Custom inventory and business management system.</li>
          <li><strong>FrostyOps:</strong> Ice cream distribution, multi-route logistics, and invoice accounting ERP.</li>
          <li><strong>Installment Management:</strong> Customer ledger, installment schedule generator, and investor capital management system.</li>
        </ul>
      </section>
    `,
  },
  "/web-development": {
    title: "Web Development Services | Websites & Web Apps | DevZore",
    description:
      "Professional web development services for businesses and startups. DevZore builds responsive websites, custom web applications, e-commerce and SaaS.",
    h1: "Custom Web Development Services for Businesses",
    content: `
      <section style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
        <h2>High-Performance Websites and Web Applications</h2>
        <p>DevZore builds responsive business websites, custom web applications, customer portals, and e-commerce platforms engineered for speed, security, and conversion.</p>
      </section>
    `,
  },
  "/mobile-apps": {
    title: "Mobile App Development Services | iOS & Android | DevZore",
    description:
      "Custom mobile app development for startups and businesses, including iOS, Android and cross-platform applications built for modern digital products.",
    h1: "Mobile App Development Services: iOS & Android",
    content: `
      <section style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
        <h2>Cross-Platform Mobile Application Engineering</h2>
        <p>We develop high-performance mobile applications using React Native connected to robust cloud APIs and database backends.</p>
      </section>
    `,
  },
  "/generative-ai-development": {
    title: "Generative AI Development Services | AI Solutions | DevZore",
    description:
      "Custom generative AI development for startups and businesses. We build AI apps, intelligent chatbots, LLM integrations and automated business workflows.",
    h1: "Generative AI Development Services & LLM Integration",
    content: `
      <section style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
        <h2>Intelligent AI Applications & Custom Assistants</h2>
        <p>DevZore builds generative AI solutions including OpenAI and Gemini API integrations, intelligent customer support chatbots, and automated workflows.</p>
      </section>
    `,
  },
  "/ecommerce": {
    title: "E-Commerce Development Services | Online Stores | DevZore",
    description:
      "Build custom e-commerce websites and online stores with product management, secure checkout, payments, inventory and scalable shopping experiences.",
    h1: "E-Commerce Development Services & Online Stores",
    content: `
      <section style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
        <h2>Custom E-Commerce Platforms & Online Ordering Systems</h2>
        <p>From custom food delivery platforms like Sarab Express to scalable multi-vendor marketplaces, we engineer secure e-commerce systems with checkout, inventory, and payment integration.</p>
      </section>
    `,
  },
  "/backend-api": {
    title: "Backend & API Development Services | Node.js APIs | DevZore",
    description:
      "Custom backend and API development services using Node.js, Express.js, REST APIs, GraphQL, MongoDB and PostgreSQL for web, mobile and SaaS applications.",
    h1: "Backend & REST API Development Services",
    content: `
      <section style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
        <h2>Secure, Scalable Server-Side Architecture</h2>
        <p>Engineered with Node.js, Express, and MongoDB for fast response times, secure authentication, and reliable database operations.</p>
      </section>
    `,
  },
  "/saas-product-development": {
    title: "SaaS Product Development Services | Platforms | DevZore",
    description:
      "Custom SaaS product development with authentication, dashboards, subscriptions, APIs, user management and scalable web application architecture.",
    h1: "SaaS Product Development Services for Founders",
    content: `
      <section style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
        <h2>End-to-End SaaS Platform Engineering</h2>
        <p>We build multi-tenant cloud software with subscription billing, user role hierarchies, interactive dashboards, and scalable database architecture.</p>
      </section>
    `,
  },
  "/reactdevelopment": {
    title: "React Development Services | Web Applications | DevZore",
    description:
      "Professional React development for websites, dashboards, SaaS platforms and custom web applications using reusable components and modern frontend architecture.",
    h1: "React.js Web Application Development Services",
    content: `
      <section style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
        <h2>Modern Component-Driven Frontend Engineering</h2>
        <p>Build fast, accessible, and responsive user interfaces with modern React, reusable component libraries, and robust state management.</p>
      </section>
    `,
  },
  "/ui-ux-design": {
    title: "UI/UX Design Services | Website, App & SaaS Design | DevZore",
    description:
      "User-focused UI/UX design for websites, mobile apps, dashboards and SaaS products including wireframes, Figma interfaces, prototypes and design systems.",
    h1: "UI/UX Design Services for Websites & SaaS Products",
    content: `
      <section style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
        <h2>User-Centered Design & Interactive Prototyping</h2>
        <p>Wireframes, Figma interfaces, high-fidelity prototypes, and complete design systems that turn complex user flows into intuitive digital products.</p>
      </section>
    `,
  },
  "/startup-mvp": {
    title: "Startup MVP Development Services | Build & Launch | DevZore",
    description:
      "MVP development for startups from product planning and prototyping to web or app development, testing, deployment and future product iteration.",
    h1: "Startup MVP Development Services",
    content: `
      <section style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
        <h2>Launch Your Minimum Viable Product in 3 to 6 Weeks</h2>
        <p>DevZore helps startup founders validate product ideas quickly with focused MVP development, robust technical architecture, and clean code handover.</p>
      </section>
    `,
  },
  "/cloud-deployment": {
    title: "Cloud & Deployment Services | DevOps & Hosting | DevZore",
    description:
      "DevZore provides cloud architecture, CI/CD pipelines, Vercel, Cloudflare and MongoDB Atlas setup, server migration, monitoring and cloud optimization.",
    h1: "Cloud & Deployment Services: Hosting, DevOps & CI/CD",
    content: `
      <section style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
        <h2>Reliable Cloud Infrastructure & Modern DevOps</h2>
        <p>Production cloud deployment on Vercel, Cloudflare, and MongoDB Atlas. Automated GitHub CI/CD pipelines, SSL encryption, and 24/7 uptime monitoring.</p>
      </section>
    `,
  },
  "/maintenance": {
    title: "Website Maintenance & Technical Support Services | DevZore",
    description:
      "Website and web application maintenance including bug fixes, updates, troubleshooting, performance optimization, monitoring and ongoing technical support.",
    h1: "Website Maintenance & Technical Support Services",
    content: `
      <section style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
        <h2>Ongoing Support, Security Patches & Cloud Monitoring</h2>
        <p>Keep your web application, SaaS platform, or business portal secure, updated, and performing at peak speed with DevZore maintenance packages.</p>
      </section>
    `,
  },
  "/seo-services": {
    title: "SEO Services | Technical SEO & Search Optimization | DevZore",
    description:
      "Improve search visibility with technical SEO, on-page optimization, crawlability, structured data, website performance and search monitoring.",
    h1: "Technical SEO & Search Visibility Services",
    content: `
      <section style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
        <h2>Engineering-Led Search Engine Optimization</h2>
        <p>Technical SEO audits, Schema.org structured data, Core Web Vitals performance tuning, and pre-rendering architecture to rank on Google and AI search engines.</p>
      </section>
    `,
  },
  "/digital-marketing": {
    title: "Digital Marketing Services | Online Business Growth | DevZore",
    description:
      "Digital marketing services for businesses including strategy, social media, content marketing, campaigns, lead generation and performance reporting.",
    h1: "Digital Marketing & Client Growth Services",
    content: `
      <section style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
        <h2>Data-Driven Lead Generation & Marketing Strategy</h2>
        <p>Strategic content marketing, social media campaigns, and conversion rate optimization designed to turn web traffic into qualified client inquiries.</p>
      </section>
    `,
  },
  "/projects": {
    title: "Software Development Projects & Case Studies | DevZore",
    description:
      "Explore DevZore case studies and real client projects across MERN stack development, SaaS platforms, inventory systems and tourism portals.",
    h1: "DevZore Projects & Real Client Case Studies",
    content: `
      <section style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
        <h2>Active Software Systems Engineered for Real Clients</h2>
        <p>DevZore has completed 120+ software engineering projects company-wide. Inspect 6 of our deep-dive case studies across Pakistan, Qatar, and remote delivery worldwide:</p>
        <ul>
          <li><strong>Weldon Paints:</strong> Inventory & POS Management System (Manufacturing & Retail)</li>
          <li><strong>Sarab Express:</strong> Digital Ordering & Delivery Platform (Food & Beverage)</li>
          <li><strong>Desert Safari Qatar:</strong> Tourism & Safari Booking Platform (Travel & Hospitality)</li>
          <li><strong>Gulf Dunes Tourism:</strong> Qatar Tourism & Excursion Portal (Travel & Tourism)</li>
          <li><strong>FrostyOps:</strong> Route Logistics & Distribution ERP (Wholesale Distribution)</li>
          <li><strong>Installment Management:</strong> Sales & Installment Credit Platform (Consumer Finance)</li>
        </ul>
      </section>
    `,
  },
  "/blog": {
    title: "DevZore Journal | Web Development & Software Engineering Insights",
    description:
      "Read software engineering guides, SaaS architecture strategies, MERN stack tutorials, and technical insights from Muhammad Shoukat and the DevZore team.",
    h1: "DevZore Journal: Software Engineering & Architecture Insights",
    content: `
      <section style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
        <h2>Practical Software Development Articles & Engineering Guides</h2>
        <p>Explore in-depth technical guides written for founders, CTOs, and developers covering full-stack architecture, MERN stack, SaaS development, and web performance.</p>
      </section>
    `,
  },
  "/startup-solutions": {
    title: "Startup Software Development Solutions | DevZore",
    description:
      "Software development solutions for startups including MVPs, SaaS products, websites, mobile apps and scalable digital product development.",
    h1: "Startup Software Development Solutions",
    content: "<section style='padding:40px 20px; max-width:1200px; margin:0 auto;'><p>Comprehensive software solutions for venture-backed and bootstrapped startups.</p></section>",
  },
  "/business-solutions": {
    title: "Business Software Development Solutions | DevZore",
    description:
      "Custom business software solutions including web applications, management systems, automation, dashboards and scalable digital platforms.",
    h1: "Custom Business Software Development Solutions",
    content: "<section style='padding:40px 20px; max-width:1200px; margin:0 auto;'><p>Custom digital platforms and workflow automation designed for growing companies.</p></section>",
  },
  "/ecommerce-solutions": {
    title: "E-Commerce Solutions for Online Businesses | DevZore",
    description:
      "Custom e-commerce solutions for businesses including online stores, product management, payments, inventory, dashboards and scalable commerce platforms.",
    h1: "E-Commerce Solutions & Digital Commerce Platforms",
    content: "<section style='padding:40px 20px; max-width:1200px; margin:0 auto;'><p>High-conversion e-commerce systems tailored to your product catalog and checkout flows.</p></section>",
  },
  "/saas-solutions": {
    title: "Custom SaaS Solutions for Businesses & Startups | DevZore",
    description:
      "Custom SaaS solutions including subscription platforms, dashboards, authentication, APIs, user management and scalable cloud-based software.",
    h1: "Custom SaaS Solutions & Cloud Platform Development",
    content: "<section style='padding:40px 20px; max-width:1200px; margin:0 auto;'><p>Engineered for multi-tenancy, subscription billing, and enterprise user management.</p></section>",
  },
  "/management-systems": {
    title: "Custom Management System Development | DevZore",
    description:
      "Custom management systems for businesses including inventory, sales, customers, employees, reporting, dashboards and workflow management.",
    h1: "Custom Management System Development",
    content: "<section style='padding:40px 20px; max-width:1200px; margin:0 auto;'><p>Internal operations software, inventory control, and retail ERP platforms.</p></section>",
  },
  "/custom-software-solutions": {
    title: "Custom Software Solutions & Development Company | DevZore",
    description:
      "Custom software development solutions tailored to your operational workflows, business processes, customer portals and enterprise digital infrastructure.",
    h1: "Custom Software Solutions & Engineering",
    content: "<section style='padding:40px 20px; max-width:1200px; margin:0 auto;'><p>Bespoke application development built specifically for your unique business workflows.</p></section>",
  },
  "/our-process": {
    title: "Our Software Development Process & Methodology | DevZore",
    description:
      "Discover DevZore's 4-step software development process: strategic planning, UI/UX prototyping, full-stack engineering, and launch with ongoing support.",
    h1: "DevZore Software Development Process: Planning to Production",
    content: "<section style='padding:40px 20px; max-width:1200px; margin:0 auto;'><p>Our proven 4-stage engineering lifecycle: Planning > UI/UX > Engineering > Launch & Support.</p></section>",
  },
  "/technologies": {
    title: "Technologies & Development Tech Stack | DevZore",
    description:
      "Explore the technologies DevZore uses to build modern websites, web applications, mobile apps, SaaS products, APIs and custom software.",
    h1: "DevZore Technology Stack & Tools",
    content: "<section style='padding:40px 20px; max-width:1200px; margin:0 auto;'><p>We specialize in React, Node.js, Express, MongoDB, Tailwind CSS, Next.js, and Vercel cloud infrastructure.</p></section>",
  },
  "/guides": {
    title: "Software & Web Development Guides | DevZore",
    description:
      "Explore practical DevZore guides covering web development, software development, SaaS, React, MERN, SEO, performance and digital products.",
    h1: "Software Development & Architecture Guides",
    content: "<section style='padding:40px 20px; max-width:1200px; margin:0 auto;'><p>Actionable technical guides and architectural blueprints for digital products.</p></section>",
  },
  "/faqs": {
    title: "Software Development FAQs | DevZore",
    description:
      "Find answers to common questions about DevZore software development, websites, mobile apps, SaaS products, project timelines and development services.",
    h1: "Frequently Asked Questions About Software Development",
    content: "<section style='padding:40px 20px; max-width:1200px; margin:0 auto;'><p>Clear, direct answers regarding project pricing, development timelines, source code ownership, and remote delivery.</p></section>",
  },
  "/resources": {
    title: "Software Development Resources & Insights | DevZore",
    description:
      "Explore software development resources, technical insights and practical information for businesses, startups and digital product teams.",
    h1: "Software Engineering Resources & Product Insights",
    content: "<section style='padding:40px 20px; max-width:1200px; margin:0 auto;'><p>Resources and architectural patterns to help businesses plan and scale digital products.</p></section>",
  },
  "/privacy-policy": {
    title: "Privacy Policy | DevZore",
    description:
      "Read DevZore's Privacy Policy to understand how information may be collected, used, stored and protected when using our website and services.",
    h1: "DevZore Privacy Policy",
    content: "<section style='padding:40px 20px; max-width:1200px; margin:0 auto;'><p>Information regarding how DevZore collects, uses, and safeguards client and visitor data.</p></section>",
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions | DevZore",
    description:
      "Read DevZore's Terms and Conditions covering website use, software development services, client responsibilities, payments, support and related policies.",
    h1: "DevZore Terms and Conditions",
    content: "<section style='padding:40px 20px; max-width:1200px; margin:0 auto;'><p>Terms of service governing DevZore software engineering agreements and client deliverables.</p></section>",
  },
};

/**
 * Clean base template of any previously injected meta tags or root content
 */
function cleanBaseTemplate(raw) {
  return raw
    .replace(/<title>.*?<\/title>/gis, "")
    .replace(/<link rel=["']canonical["'][^>]*>/gis, "")
    .replace(/<meta name=["'](description|robots|googlebot)["'][^>]*>/gis, "")
    .replace(/<meta name=["']twitter:[^"']*["'][^>]*>/gis, "")
    .replace(/<meta property=["']og:[^"']*["'][^>]*>/gis, "")
    .replace(/<div id="root">.*?<\/div>/gis, '<div id="root"></div>');
}

/**
 * Pre-render an HTML page
 */
function buildPageHtml(baseTemplate, route, meta, bodyHtml, schemaJson = null) {
  let html = cleanBaseTemplate(baseTemplate);

  const canonicalUrl = route === "/" ? `${BASE_URL}/` : `${BASE_URL}${route}`;

  const schemaScript = schemaJson
    ? `\n    <script type="application/ld+json">${JSON.stringify(schemaJson)}</script>`
    : "";

  // Build head tags to inject
  const headInject = `
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description.replace(/"/g, "&quot;")}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:type" content="${meta.ogType || "website"}" />
    <meta property="og:site_name" content="DevZore" />
    <meta property="og:title" content="${meta.title.replace(/"/g, "&quot;")}" />
    <meta property="og:description" content="${meta.description.replace(/"/g, "&quot;")}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${meta.ogImage || `${BASE_URL}/logo.png`}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@devzore" />
    <meta name="twitter:title" content="${meta.title.replace(/"/g, "&quot;")}" />
    <meta name="twitter:description" content="${meta.description.replace(/"/g, "&quot;")}" />
    <meta name="twitter:image" content="${meta.ogImage || `${BASE_URL}/logo.png`}" />${schemaScript}
  `;

  // Inject into </head>
  html = html.replace("</head>", `${headInject}\n</head>`);

  // Inject pre-rendered body into <div id="root">
  const rootReplacement = `<div id="root">${bodyHtml}</div>`;
  html = html.replace(/<div id="root"><\/div>/i, rootReplacement);

  return html;
}

async function run() {
  console.log("🚀 Starting DevZore Static Pre-rendering & Sitemap Generation...");

  const baseHtmlPath = path.resolve(distDir, "index.html");
  if (!fs.existsSync(baseHtmlPath)) {
    console.error("❌ dist/index.html not found! Run vite build first.");
    process.exit(1);
  }

  const baseTemplate = fs.readFileSync(baseHtmlPath, "utf-8");
  const sitemapUrls = [];

  // 1. Process Static Pages
  for (const [route, page] of Object.entries(staticPages)) {
    const targetDir = route === "/" ? distDir : path.resolve(distDir, route.replace(/^\//, ""));
    fs.mkdirSync(targetDir, { recursive: true });

    const bodyHtml = `
      <header style="background: #071923; color: white; padding: 60px 20px; text-align: center;">
        <h1 style="font-size: 2.25rem; font-weight: bold; margin: 0 0 16px 0;">${page.h1}</h1>
        <p style="font-size: 1.125rem; color: #cbd5e1; max-width: 800px; margin: 0 auto;">${page.description}</p>
        ${
          route === "/"
            ? `<div style="margin-top: 24px;">
                <a href="https://wa.me/923348004300?text=Hi%20DevZore,%20I%20would%20like%20to%20get%20a%20free%20consultation%20on%20my%20project." target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #25D366; color: #061923; padding: 12px 24px; border-radius: 8px; font-weight: bold; text-decoration: none;">Get a Free Consultation on WhatsApp</a>
              </div>`
            : ""
        }
      </header>
      <main>${page.content}</main>
    `;

    const breadcrumbSchema = route === "/" ? null : {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
        { "@type": "ListItem", position: 2, name: page.h1, item: `${BASE_URL}${route}` },
      ],
    };

    const html = buildPageHtml(baseTemplate, route, page, bodyHtml, breadcrumbSchema);
    fs.writeFileSync(path.resolve(targetDir, "index.html"), html, "utf-8");

    sitemapUrls.push({
      loc: route === "/" ? `${BASE_URL}/` : `${BASE_URL}${route}`,
      lastmod: "2026-11-15",
      changefreq: route === "/" ? "weekly" : "monthly",
      priority: route === "/" ? "1.0" : route.startsWith("/mern-stack") ? "0.9" : "0.8",
    });
  }

  // 2. Process Case Studies
  for (const project of projectsData) {
    const route = `/projects/${project.slug}`;
    const targetDir = path.resolve(distDir, "projects", project.slug);
    fs.mkdirSync(targetDir, { recursive: true });

    const meta = {
      title: `${project.title} Case Study | ${project.systemType} | DevZore`,
      description: `Read how DevZore built ${project.title}, a ${project.systemType} using ${project.technologies.slice(0, 3).join(", ")} for clients in ${project.location}.`,
      ogType: "article",
    };

    const bodyHtml = `
      <header style="background: #071923; color: white; padding: 60px 20px;">
        <div style="max-width: 1000px; margin: 0 auto;">
          <p style="text-transform: uppercase; color: #00D2EF; font-weight: bold; font-size: 0.875rem;">${project.headerFacts || `${project.category} • ${project.location}`}</p>
          <h1 style="font-size: 2.5rem; font-weight: 800; margin: 12px 0;">${project.title} — ${project.systemType}</h1>
          <p style="font-size: 1.125rem; color: #cbd5e1;">${project.description}</p>
        </div>
      </header>
      <main style="max-width: 1000px; margin: 40px auto; padding: 0 20px;">
        <h2>The Challenge</h2>
        <p>${project.problem}</p>
        ${project.challenges ? `<ul>${project.challenges.map((c) => `<li>${c}</li>`).join("\n")}</ul>` : ""}
        <h2>What We Built (System Architecture & Modules)</h2>
        ${
          project.modules
            ? project.modules.map((m) => `<h3>${m.name}</h3><p>${m.description}</p>`).join("\n")
            : `<ul>${project.builtFeatures.map((f) => `<li>${f}</li>`).join("\n")}</ul>`
        }
        <h2>The Outcome</h2>
        <p>${project.outcomeNarrative || project.description}</p>
        <h2>Technology Stack & Deliverables</h2>
        <p><strong>Technologies:</strong> ${project.technologies.join(" • ")}</p>
        <p>Delivery Model: ${project.deliveryType} | Client: ${project.client}</p>
        <div style="margin-top: 30px;">
          <a href="/projects" style="color: #00D2EF; font-weight: bold; margin-right: 20px;">← Back to All Case Studies</a>
          <a href="${project.serviceSlug}" style="color: #00D2EF; font-weight: bold;">Explore ${project.serviceName} →</a>
        </div>
      </main>
    `;

    const softwareSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: project.title,
      applicationCategory: project.category,
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      author: { "@type": "Organization", name: "DevZore", url: BASE_URL },
      description: project.description,
    };
    const caseBreadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Case Studies", item: `${BASE_URL}/projects` },
        { "@type": "ListItem", position: 3, name: project.title, item: `${BASE_URL}${route}` },
      ],
    };

    const html = buildPageHtml(baseTemplate, route, meta, bodyHtml, [softwareSchema, caseBreadcrumb]);
    fs.writeFileSync(path.resolve(targetDir, "index.html"), html, "utf-8");

    sitemapUrls.push({
      loc: `${BASE_URL}${route}`,
      lastmod: "2026-11-15",
      changefreq: "monthly",
      priority: "0.8",
    });
  }

  // 3. Process Blog Posts
  for (const post of blogPosts) {
    const route = `/blog/${post.slug}`;
    const targetDir = path.resolve(distDir, "blog", post.slug);
    fs.mkdirSync(targetDir, { recursive: true });

    const meta = {
      title: post.seoTitle || `${post.title} | DevZore Journal`,
      description: post.seoDescription || post.excerpt || post.title,
      ogType: "article",
      ogImage: post.coverImage || `${BASE_URL}/logo.png`,
    };

    const pubDate = post.publishedAt || post.createdAt || "2026-11-15";
    const modDate = post.updatedAt || pubDate;

    const cleanContent = (post.content || `<p>${post.excerpt || ""}</p>`)
      .replace(/<h1[\s>]/gi, "<h2 ")
      .replace(/<\/h1>/gi, "</h2>");

    const bodyHtml = `
      <article style="max-width: 900px; margin: 0 auto; padding: 40px 20px;">
        <header style="margin-bottom: 30px;">
          <p style="text-transform: uppercase; color: #0796A8; font-weight: bold; font-size: 0.875rem;">${post.category?.name || "Software Engineering"}</p>
          <h1 style="font-size: 2.5rem; font-weight: 800; line-height: 1.2; margin: 16px 0;">${post.title}</h1>
          <p style="color: #64748b; font-size: 0.875rem;">By Muhammad Shoukat • Published ${new Date(pubDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
        </header>
        <div class="article-content" style="line-height: 1.8; color: #1e293b;">
          ${cleanContent}
        </div>
      </article>
    `;

    const blogPostingSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${BASE_URL}${route}#article`,
      headline: post.title,
      description: meta.description,
      image: meta.ogImage,
      datePublished: pubDate,
      dateModified: modDate,
      author: {
        "@type": "Person",
        name: "Muhammad Shoukat",
        jobTitle: "Founder & Lead Software Engineer",
        url: `${BASE_URL}/about`,
      },
      publisher: {
        "@type": "Organization",
        name: "DevZore",
        url: `${BASE_URL}/`,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/logo.png`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}${route}`,
      },
    };
    const blogBreadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: `${BASE_URL}${route}` },
      ],
    };

    const html = buildPageHtml(baseTemplate, route, meta, bodyHtml, [blogPostingSchema, blogBreadcrumb]);
    fs.writeFileSync(path.resolve(targetDir, "index.html"), html, "utf-8");

    sitemapUrls.push({
      loc: `${BASE_URL}${route}`,
      lastmod: new Date(modDate).toISOString().split("T")[0],
      changefreq: "monthly",
      priority: "0.7",
    });
  }

  // 4. Generate Valid XML Sitemap
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  fs.writeFileSync(path.resolve(distDir, "sitemap.xml"), sitemapXml, "utf-8");
  fs.writeFileSync(path.resolve(publicDir, "sitemap.xml"), sitemapXml, "utf-8");

  console.log(`✅ Pre-rendered ${sitemapUrls.length} public routes successfully!`);
  console.log(`✅ Generated valid sitemap.xml with ${sitemapUrls.length} entries.`);
}

run().catch((err) => {
  console.error("❌ Pre-rendering failed:", err);
  process.exit(1);
});
