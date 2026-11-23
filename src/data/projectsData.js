import weldonPaint from "../assets/weldonpaint.webp";
import sarabFood from "../assets/sarab_website_image.webp";
import dentalWebsite from "../assets/Dental_website.webp";
import gulfDunes from "../assets/gulf-dunes.webp";
import quickBite from "../assets/food.webp";
import qatarTourist from "../assets/qatar_tourist_agency.webp";

export const projectsData = [
  {
    id: "weldon-paints",
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
    category: "Operations Software",
    serviceSlug: "/inventory-management-system",
    serviceName: "Inventory Management Systems",
    liveUrl: "https://hamzapaints.vercel.app/",
    image: weldonPaint,
    teaser: "Centralized warehouse stock, formula cataloging and counter billing into a unified MERN operational platform.",
    // [OWNER REVIEW FLAGGED]: Derived directly from system functionality replacing paper logs and manual billing
    challenges: [
      "Manual paper registers caused frequent stock discrepancies between central warehouse lots and front-counter retail shelves.",
      "Counter checkout queues slowed down significantly during peak hours due to handwritten paper bills and manual calculations.",
      "Dealer credit accounts and partial payment histories were tracked across loose paper ledgers, causing collection delays.",
      "Zero centralized visibility into paint tinting formulas, batch material consumption, and daily gross profit margins.",
    ],
    problem:
      "Weldon Paints required an operational business platform to replace manual tracking of store inventory, paint formulas, dealer orders, counter sales, and customer billing. Store staff needed a unified system to monitor real-time stock levels across warehouse locations, record daily invoices, and generate accurate financial reconciliation without paper log bottlenecks.",
    modules: [
      {
        name: "Warehouse & Multi-Location Stock Control",
        description: "Real-time stock tracking across warehouse and retail floors with batch number tracking, paint formula allocations, minimum stock reorder alerts, and write-off logs.",
      },
      {
        name: "Point-of-Sale (POS) & Counter Billing",
        description: "High-speed counter invoicing supporting retail and wholesale price tiers, instant tax/discount calculations, and thermal receipt printing.",
      },
      {
        name: "Customer & Dealer Credit Ledger",
        description: "Tamper-proof customer ledgers tracking outstanding balances, credit limit warnings, payment installment histories, and automated account statements.",
      },
      {
        name: "Supplier Purchasing & Intake Logs",
        description: "Structured purchase order creation, vendor payment schedules, and raw material receiving workflows with supplier ledger reconciliation.",
      },
      {
        name: "Financial Reporting & Analytics Dashboard",
        description: "Daily cashier shift reconciliation, sales volume trends, product margin breakdowns, and automated balance sheet reporting.",
      },
    ],
    builtFeatures: [
      "Real-time warehouse and retail store inventory tracking with batch allocation",
      "Point-of-sale invoice generation and counter receipt printing",
      "Paint formula cataloging and raw material consumption monitoring",
      "Supplier purchase order management and stock receiving logs",
      "Customer ledger with credit balance tracking and payment histories",
      "Daily profit, sales volume, and stock valuation reporting",
    ],
    outcomeNarrative:
      "Replaced fragmented manual paper ledgers and counter calculations with a centralized, high-availability MERN web platform accessible across warehouse and retail terminals. Inventory updates in real time with every sales transaction, credit histories are fully audited, and daily financial summaries give leadership clear visibility into operational performance.",
    hasRealResults: false,
    resultsPlaceholder:
      "[OWNER INPUT NEEDED: Verified outcome metrics, e.g. % reduction in checkout time or inventory count accuracy]",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    deliverables: [
      "Custom Enterprise Web Portal",
      "Role-Based Access Control (Admin, Cashier, Inventory Manager)",
      "RESTful API Architecture & MongoDB Schemas",
      "Automated Thermal & PDF Invoicing Engine",
      "100% Full Source Code & Deployment on Vercel",
    ],
    description:
      "A complete custom inventory, point-of-sale and business management system engineered with the MERN stack for daily store and warehouse operations.",
  },
  {
    id: "sarab-express",
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
    category: "Online Ordering Systems",
    serviceSlug: "/food-ordering-system",
    serviceName: "Online Food Ordering Systems",
    liveUrl: "https://sarab-food-delivery.vercel.app/",
    image: sarabFood,
    teaser: "Direct digital ordering platform with meal customizers, live carts and kitchen ticket routing eliminating aggregator commissions.",
    // [OWNER REVIEW FLAGGED]: Derived directly from system functionality replacing phone-call orders and aggregator fees
    challenges: [
      "Third-party food delivery aggregators charged hefty commission fees that severely degraded restaurant profit margins.",
      "Taking customer orders over phone calls led to frequent order errors, address misunderstandings, and delayed kitchen preparation.",
      "Inability to establish direct customer loyalty or capture ordering data for targeted repeat promotions.",
      "Lack of a mobile-optimized visual menu that allowed customers to customize portion sizes, toppings, and spice levels.",
    ],
    problem:
      "Sarab Express needed a dedicated digital menu and ordering platform allowing mobile and desktop customers to browse food categories, customize menu orders with add-ons, add items to a real-time cart, and submit delivery orders without relying on third-party aggregator commissions.",
    modules: [
      {
        name: "Interactive Digital Menu & Visual Catalog",
        description: "Categorized food presentation with high-resolution food photography, dietary tags, portion pricing, and instant out-of-stock toggles.",
      },
      {
        name: "Meal Customization & Add-on Engine",
        description: "Step-by-step modifier selection allowing diners to choose portion sizes, spice levels, sides, beverages, and custom preparation notes.",
      },
      {
        name: "Real-Time Cart & Checkout System",
        description: "Instant order subtotal calculation, delivery zone distance fees, delivery address validation, and preferred delivery time slots.",
      },
      {
        name: "Kitchen Order Receiving Queue",
        description: "Real-time kitchen display showing active orders categorized by status (Received, In Kitchen, Out for Delivery) with audible order chime.",
      },
      {
        name: "Direct WhatsApp & SMS Order Routing",
        description: "Automated instant customer receipt dispatch via WhatsApp and SMS confirmation without middleman commission fees.",
      },
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
    hasRealResults: false,
    resultsPlaceholder:
      "[OWNER INPUT NEEDED: Verified direct order volume growth or cost savings from aggregator fees]",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    deliverables: [
      "Direct-to-Consumer Responsive Web App",
      "Live Kitchen Order Dashboard",
      "Automated WhatsApp Order Notification Webhook",
      "Database Architecture & Product Catalog Engine",
      "Production Deployment on Vercel",
    ],
    description:
      "Modern digital food ordering and menu platform engineered with React, Node.js and MongoDB for seamless customer ordering.",
  },
  {
    id: "desert-safari-qatar",
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
    category: "Tour Booking Platforms",
    serviceSlug: "/tour-booking-system",
    serviceName: "Tour Booking Systems",
    liveUrl: "https://www.bestdesertsafariqatar.com/",
    image: qatarTourist,
    teaser: "High-performance Qatar desert tourism platform engineered for international tourists with instant WhatsApp booking pathways.",
    // [OWNER REVIEW FLAGGED]: Derived directly from system functionality replacing slow manual email inquiries
    challenges: [
      "Low search visibility across competitive Qatar desert safari keywords prevented direct customer acquisition from international tourists.",
      "International travelers on mobile roaming connections abandoned bookings due to slow page speeds and convoluted multi-page inquiry forms.",
      "Lack of clear, transparent package itineraries and safety certification displays led to traveler skepticism.",
      "Manual email exchanges created friction and delayed responses across differing international time zones.",
    ],
    problem:
      "The client required an international-grade tourism web portal targeting regional and international visitors to Doha, Qatar. The platform needed to showcase dune bashing tours, desert camp excursions, camel rides, and private VIP safari packages with clear pricing, schedules, and rapid WhatsApp/email reservation pathways.",
    modules: [
      {
        name: "Tour Package Showcase & Detailed Itineraries",
        description: "Rich landing pages for morning desert safaris, evening dune bashing, overnight Bedouin camps, and private luxury Land Cruiser expeditions with inclusions, timings, and transparent pricing.",
      },
      {
        name: "Instant WhatsApp Booking Integration",
        description: "Contextual WhatsApp booking triggers pre-populating tourist dates, package selected, and group size for instant concierge interaction.",
      },
      {
        name: "Technical SEO & Schema.org Architecture",
        description: "Built-in TouristTrip and TravelAgency structured data, semantic headings, and geo-targeted metadata targeting Qatar tourism queries.",
      },
      {
        name: "Fast Mobile-First Gallery & Asset Delivery",
        description: "WebP-compressed desert photography galleries loading in under 1.5 seconds on mobile networks with zero layout shift.",
      },
      {
        name: "Trust & Safety Verification Showcase",
        description: "Prominent safety protocol disclosures, certified desert driver badges, verified client reviews, and transparent cancellation terms.",
      },
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
    hasRealResults: false,
    resultsPlaceholder:
      "[OWNER INPUT NEEDED: Monthly tourist inquiry growth or search ranking improvement metrics]",
    technologies: ["React", "Node.js", "MongoDB", "Technical SEO", "Tailwind CSS"],
    deliverables: [
      "Production Tourism Web Portal",
      "Technical SEO & Schema.org Structured Data Suite",
      "Multi-Device Performance Optimization (Score 95+)",
      "Integrated WhatsApp Concierge Lead Flow",
      "Cloudflare CDN & Vercel Deployment",
    ],
    description:
      "High-performance Qatar tourism and safari booking portal engineered with React, Node.js and organic search optimization.",
  },
  {
    id: "gulf-dunes-tourism",
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
    category: "Tour Booking Platforms",
    serviceSlug: "/tour-booking-system",
    serviceName: "Tour Booking Systems",
    liveUrl: "https://www.gulfdunestourism.com/",
    image: gulfDunes,
    teaser: "Comprehensive Doha tourism portal featuring desert safaris, dhow cruises, and city excursions with structured booking funnels.",
    // [OWNER REVIEW FLAGGED]: Derived directly from system functionality replacing fragmented tour offerings
    challenges: [
      "Disjointed excursion offerings (sea dhow cruises, city tours, desert safaris) caused tourist confusion without structured categorization.",
      "Competitor websites suffered from bloated scripts and slow mobile loading, resulting in high bounce rates.",
      "Difficulty in capturing corporate group excursion inquiries and hotel concierge partnerships through standard retail channels.",
      "Lack of structured location and meeting point guidelines for tourists unfamiliar with Doha geography.",
    ],
    problem:
      "Gulf Dunes Tourism needed a clean, reliable web presence to compete in the competitive Qatar travel and excursions market. The site needed to load in under 2 seconds across mobile connections, present packages transparently, and capture direct tourist inquiries with minimal friction.",
    modules: [
      {
        name: "Categorized Excursion Architecture",
        description: "Distinct structured hubs for Desert Safaris, Arabian Dhow Cruises, Doha City Sightseeing, and Mangrove Kayak Excursions.",
      },
      {
        name: "Rapid Booking & Lead Capture System",
        description: "Streamlined inquiry forms routing customer dates, passenger counts, and hotel pickup details directly to dispatch personnel.",
      },
      {
        name: "Interactive Meeting & Pickup Location Guide",
        description: "Embedded Google Maps coordinates, Doha port cruise terminal meeting points, and hotel lobby pickup schedules.",
      },
      {
        name: "Corporate & Private Group Booking Module",
        description: "Dedicated pathway for travel agents, destination management companies, and corporate retreat planners requiring custom transportation.",
      },
      {
        name: "Speed & Edge Optimization",
        description: "Cloudflare edge asset caching, responsive image sets, and zero-layout-shift design guaranteeing sub-2-second loads worldwide.",
      },
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
    hasRealResults: false,
    resultsPlaceholder:
      "[OWNER INPUT NEEDED: Inquiries generated or mobile conversion rate improvements]",
    technologies: ["React", "Node.js", "MongoDB", "Technical SEO", "Tailwind CSS"],
    deliverables: [
      "Custom Excursion Platform",
      "Schema.org TravelAgency Structured Data Suite",
      "Corporate Group Inquiry Funnel",
      "Mobile Performance Optimization",
      "Edge Infrastructure on Vercel & Cloudflare",
    ],
    description:
      "Responsive Qatar tourism platform built for excursion discovery, tour inquiries and international traveler engagement.",
  },
  {
    id: "frostyops",
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
    category: "Logistics ERP",
    serviceSlug: "/distribution-management-system",
    serviceName: "Distribution Management Systems",
    liveUrl: "",
    image: quickBite,
    teaser: "Full-scale distribution ERP managing multi-route salesmen dispatches, return stock audits and wholesale credit ledgers.",
    // [OWNER REVIEW FLAGGED]: Derived directly from system functionality replacing manual paper route logs and unrecorded stock shrinkage
    challenges: [
      "Severe stock shrinkage and temperature-loss risks due to manual paper tracking of frozen ice cream batches leaving the central cold storage.",
      "Evening route reconciliation chaos: reconciling vehicle dispatch stock against unsold returns and cash collected by salesmen took hours daily.",
      "Retail shopkeeper credit accounts were kept on loose paper slips, leading to disputed outstanding balances and missed collections.",
      "Zero centralized visibility into daily route profitability, fuel and driver expenses, or supplier invoice payment timelines.",
    ],
    problem:
      "FrostyOps manages large-scale frozen food and ice cream distribution across multiple retail routes. The company faced complex logistics challenges: reconciling daily stock dispatches to route salesmen, tracking return stock, monitoring supplier accounts, issuing retailer invoices, and calculating driver commissions across daily shifts.",
    modules: [
      {
        name: "Route Dispatch & Return Reconciliation Module",
        description: "Morning vehicle loading logs, shift dispatch verification, evening unsold stock return audit, and automated net sales reconciliation.",
      },
      {
        name: "Cold-Chain Multi-Lot Inventory Control",
        description: "Real-time stock tracking by flavor, product carton, freezer warehouse unit, production batch number, and expiry date alerts.",
      },
      {
        name: "Retail Customer Ledger & Credit Limits",
        description: "Point-of-delivery invoice generation, retailer credit terms, cash collection logs, and payment receipt tracking.",
      },
      {
        name: "Supplier Accounts & Cold-Storage Intake",
        description: "Supplier purchase order verification, bulk manufacturing intake logs, and vendor payment schedule management.",
      },
      {
        name: "Logistics Expense & Fleet Tracking",
        description: "Vehicle fuel expenses, cold-chain maintenance logs, driver trip allowances, and daily route operational cost breakdowns.",
      },
      {
        name: "Executive Analytics & Profitability Dashboard",
        description: "Daily gross profit reports, route profitability comparisons, top-performing salesman metrics, and real-time inventory valuations.",
      },
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
    hasRealResults: false,
    resultsPlaceholder:
      "[OWNER INPUT NEEDED: Stock reconciliation time saved or shrinkage reduction percentage]",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    deliverables: [
      "Enterprise Distribution ERP Web Application",
      "Shift-Based Route Reconciliation Engine",
      "Supplier & Retailer Ledger Accounting System",
      "Daily Executive Financial Reporting Dashboard",
      "Complete Source Code & Deployment Architecture",
    ],
    description:
      "Comprehensive distribution and inventory management system handling multi-route logistics, sales reconciliations, and supplier accounting.",
  },
  {
    id: "prime-dental",
    slug: "prime-dental",
    title: "Prime Dental",
    businessName: "Prime Dental Clinic",
    industry: "Healthcare & Dental Care",
    country: "Pakistan",
    location: "Islamabad, Pakistan",
    systemType: "Dental Clinic Web Platform & Appointment Booking",
    headerFacts: "Prime Dental · Healthcare & Dental Care · Islamabad, Pakistan · Dental Clinic Web Platform",
    client: "Prime Dental Clinic",
    deliveryType: "Remote Full-Stack Delivery",
    category: "Healthcare Systems",
    serviceSlug: "/web-development",
    serviceName: "Healthcare Web Development",
    liveUrl: "https://prime-dental-react.vercel.app",
    image: dentalWebsite,
    teaser: "Modern clinical web platform featuring online patient appointment booking, interactive procedure guides, specialist dentist profiles and mobile patient intake.",
    challenges: [
      "Prospective dental patients struggled to find clear treatment descriptions, doctor qualifications, and transparent pricing on generic directory listings.",
      "High no-show rates and scheduling conflicts caused by manual telephone appointment booking during busy clinic surgery hours.",
      "Patients experiencing dental pain or dental emergencies abandoned inquiry forms on competitor sites due to slow mobile load speeds and complex forms.",
      "Lack of educational guidance around cosmetic dentistry, orthodontics, and dental implants led to patient hesitation before booking consultations.",
    ],
    problem:
      "Prime Dental Clinic required a modern, patient-centered digital web platform to establish a trusted clinical brand in Islamabad. The platform needed to showcase specialized dental treatments (orthodontics, smile design, dental implants, oral surgery), display certified doctor credentials, provide transparent treatment tiers, and enable seamless 24/7 online appointment booking across all mobile and desktop devices.",
    modules: [
      {
        name: "Online Appointment & Consultation Scheduler",
        description: "Streamlined booking funnel capturing patient contact information, preferred dental treatment, date and time slots, and emergency notes with instant confirmation routing.",
      },
      {
        name: "Comprehensive Dental Procedure Catalog",
        description: "Visual clinical showcases for Orthodontics (braces and clear aligners), Cosmetic Dentistry (veneers, whitening), Dental Implants, Oral Hygiene, and Restorative Cavity Care.",
      },
      {
        name: "Specialist Dentist & Doctor Profiles",
        description: "Verified practitioner credentials, clinical certifications, specialized dental training, and areas of expertise to instill patient confidence.",
      },
      {
        name: "Transparent Care Plans & Pricing Matrix",
        description: "Interactive treatment package comparisons detailing inclusions, diagnostic exams, scaling, fillings, and cosmetic smile makeover consultations.",
      },
      {
        name: "Patient Education & Clinical Blog Hub",
        description: "Search-optimized dental health library addressing cavity prevention, wisdom tooth extraction recovery, smile makeovers, and pediatric oral hygiene.",
      },
      {
        name: "Mobile-First Clinical Experience & Emergency Triggers",
        description: "High-contrast clinical UI loading in under 1.5 seconds on mobile networks with one-tap WhatsApp and phone calling triggers for urgent dental pain.",
      },
    ],
    builtFeatures: [
      "Interactive online dental appointment booking and consultation scheduler",
      "Categorized dental treatment catalog (Orthodontics, Implants, Cosmetic, Surgery)",
      "Verified specialist dentist profiles with clinical credentials and specialties",
      "Transparent treatment package pricing tables with detailed procedure inclusions",
      "Patient education journal covering oral hygiene, cavity care, and recovery guides",
      "Mobile-responsive clinic interface with instant WhatsApp and emergency call pathways",
    ],
    outcomeNarrative:
      "Successfully launched an authoritative, patient-first clinical web portal that positions Prime Dental as a premier dental practice in Islamabad. Patients can easily research specialized procedures, compare treatment tiers, inspect doctor credentials, and book appointments within seconds on their smartphones, significantly reducing front-desk telephone overhead and accelerating patient acquisition.",
    hasRealResults: false,
    resultsPlaceholder:
      "[OWNER INPUT NEEDED: Monthly patient appointment growth or consultation booking metrics]",
    technologies: ["React", "Node.js", "Express", "Tailwind CSS", "Technical SEO"],
    deliverables: [
      "Production Dental Clinic Web Application",
      "Online Appointment Scheduling Engine",
      "Healthcare Schema.org Structured Data Suite",
      "Mobile-First Patient Experience (Score 95+)",
      "Live Production Deployment on Vercel",
    ],
    description:
      "Modern dental clinic web platform engineered with React and Tailwind CSS, featuring online appointment scheduling, treatment showcases, and patient education.",
  },
];
