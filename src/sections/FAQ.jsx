import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  Minus,
  ArrowRight,
  MessageSquare,
  Code2,
  Search,
  Megaphone,
} from "lucide-react";

const FAQ = ({ isDark = true }) => {
  const d = isDark;

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Services",
    "Process",
    "Pricing",
    "Technical",
    "SEO & Marketing",
    "Support",
  ];

  const faqs = [
    {
      category: "Services",
      question: "What software development services does DevZore offer?",
      answer:
        "DevZore provides web development, mobile app development, MERN stack development, SaaS development, e-commerce development, UI/UX design, startup MVP development, backend and API development, React development, website maintenance, SEO services and digital marketing. Our team can support both new products and improvements to existing digital platforms.",
    },
    {
      category: "Process",
      question: "How long does a web or software development project take?",
      answer:
        "The timeline depends on the size, features, integrations and technical complexity of the project. A straightforward business website usually requires less development time than an e-commerce platform, SaaS product or custom web application. After reviewing your requirements, we can define project phases, priorities and a more realistic delivery schedule.",
    },
    {
      category: "Pricing",
      question: "How much does software or website development cost?",
      answer:
        "Development cost depends on the project scope, number of pages or features, UI/UX requirements, backend functionality, integrations and deployment needs. Instead of applying one price to every project, we review the requirements first and then provide a proposal based on the work involved.",
    },
    {
      category: "Services",
      question: "Do you build mobile apps for iOS and Android?",
      answer:
        "Yes. DevZore can build cross-platform mobile applications for iOS and Android using technologies such as React Native. Depending on the project, mobile applications can include authentication, APIs, notifications, dashboards, real-time functionality and integrations with external services.",
    },
    {
      category: "Technical",
      question: "What technologies does the DevZore development team use?",
      answer:
        "Our technology stack can include React, Next.js, JavaScript, TypeScript and Tailwind CSS for frontend development; Node.js and Express.js for backend development; MongoDB, PostgreSQL and MySQL for databases; and React Native for cross-platform mobile applications. Deployment options can include platforms such as Vercel, Render, Railway, Firebase or cloud infrastructure depending on project requirements.",
    },
    {
      category: "Technical",
      question: "Do you only use the MERN stack?",
      answer:
        "No. MERN is useful for many web applications, but we do not force every project into the same technology stack. Technology choices should depend on the application requirements, existing infrastructure, data structure, integrations, maintainability and future development needs.",
    },
    {
      category: "Services",
      question: "Can DevZore build custom web applications?",
      answer:
        "Yes. We develop custom web applications for business workflows and digital products. Depending on the requirements, a project may include dashboards, customer management, authentication, role-based access, APIs, database systems, reporting, payment integrations, notifications or other business-specific functionality.",
    },
    {
      category: "Services",
      question: "Do you develop SaaS products and startup MVPs?",
      answer:
        "Yes. DevZore works on SaaS products and MVP development for startups and businesses. We can help organise the initial product scope, UI/UX, frontend, backend, database and deployment so the first version focuses on the features needed to test and operate the product.",
    },
    {
      category: "Services",
      question: "Can you build e-commerce websites and online stores?",
      answer:
        "Yes. We develop e-commerce websites and custom online selling platforms. Depending on the business requirements, these can include product catalogues, shopping carts, customer accounts, order management, inventory features, payment provider integrations and administration dashboards.",
    },
    {
      category: "SEO & Marketing",
      question: "Do you provide SEO services?",
      answer:
        "Yes. DevZore provides technical SEO, on-page SEO, keyword research, content optimisation, website structure improvements, sitemap and robots configuration, structured data implementation and search performance monitoring. SEO work is focused on improving technical quality, relevance and search visibility, but specific rankings cannot be guaranteed.",
    },
    {
      category: "SEO & Marketing",
      question: "Are the websites you build SEO-friendly?",
      answer:
        "SEO considerations can be included during development through semantic HTML, logical heading structure, descriptive metadata, canonical URLs, XML sitemaps, robots configuration, structured data where appropriate, mobile-responsive layouts, internal linking and performance optimisation. The exact implementation depends on the website architecture and project requirements.",
    },
    {
      category: "SEO & Marketing",
      question: "Does DevZore provide digital marketing services?",
      answer:
        "Yes. DevZore can support digital marketing through content planning, social media marketing, campaign strategy, website conversion improvements and performance tracking. Development, SEO and marketing can also be coordinated when a business needs a more connected digital strategy.",
    },
    {
      category: "SEO & Marketing",
      question: "Can SEO guarantee that my website will rank first on Google?",
      answer:
        "No legitimate SEO provider can guarantee a specific Google ranking. Search visibility depends on many factors including competition, website quality, content relevance, authority, technical health and changes to search systems. Our approach is to improve the factors we can control and build a stronger foundation for organic search growth.",
    },
    {
      category: "Process",
      question: "How does your software development process work?",
      answer:
        "Our process generally begins with understanding the business requirements and project goals. We then plan the technical approach, work on UI/UX where required, develop the application in manageable stages, test important functionality and prepare the product for deployment. The exact workflow can be adjusted according to the size and type of project.",
    },
    {
      category: "Process",
      question: "Can I review the project while it is being developed?",
      answer:
        "Yes. We believe clients should have visibility into the product during development. Depending on the project workflow, progress can be shared through development builds, staging environments, design previews, demonstrations or milestone reviews so feedback can be addressed during the project.",
    },
    {
      category: "Pricing",
      question: "Do you offer fixed-price projects or ongoing development?",
      answer:
        "Both approaches can be considered. A clearly defined project can be quoted around an agreed scope and deliverables, while ongoing development, maintenance or evolving products may be better handled through milestone-based or recurring arrangements. The appropriate model depends on how clearly the requirements can be defined.",
    },
    {
      category: "Pricing",
      question: "Can I get a project estimate before development starts?",
      answer:
        "Yes. You can share your project requirements with our team before development begins. After reviewing the required pages, features, integrations, design needs and technical scope, we can discuss an appropriate development approach and provide an estimate or proposal.",
    },
    {
      category: "Support",
      question: "Do you provide website maintenance and ongoing support?",
      answer:
        "Yes. DevZore provides website and application maintenance services. Depending on the agreed support scope, this can include bug fixes, updates, dependency maintenance, performance improvements, monitoring, feature development and technical assistance.",
    },
    {
      category: "Support",
      question: "What happens after my website or application is launched?",
      answer:
        "After deployment, we can assist with technical checks, configuration and any agreed post-launch work. Businesses that need continued development can also use ongoing maintenance and support for updates, improvements and additional features.",
    },
    {
      category: "Process",
      question: "Who owns the source code after the project?",
      answer:
        "Source code ownership, repository access, design files, credentials and other project assets should be clearly defined in the project agreement. DevZore can structure project delivery so ownership and handover terms are documented before development begins, avoiding confusion later.",
    },
    {
      category: "Support",
      question: "How can I communicate with the DevZore team?",
      answer:
        "Communication can be organised through WhatsApp, email, online meetings or other agreed collaboration tools. The communication method and update schedule can be selected according to the project and client requirements.",
    },
    {
      category: "Technical",
      question: "Can you redesign or improve an existing website?",
      answer:
        "Yes. We can review and improve existing websites and web applications. Depending on the current system, work may include responsive design improvements, UI/UX changes, frontend redevelopment, performance optimisation, technical SEO, backend improvements or new functionality.",
    },
    {
      category: "Technical",
      question: "Can DevZore work with an existing codebase?",
      answer:
        "Yes, depending on the condition and technology of the existing project. We normally review the current code structure, dependencies, architecture and required changes before recommending whether the existing codebase should be improved, partially refactored or rebuilt.",
    },
    {
      category: "Services",
      question: "Can DevZore work with clients remotely?",
      answer:
        "Yes. Our development workflow can support remote projects. Requirements, designs, development updates, testing and project communication can be managed online, allowing us to work with businesses regardless of their location when the project is suitable for remote delivery.",
    },
  ];

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveIndex(null);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={`py-12 sm:py-14 transition-colors duration-300 ${
        d ? "bg-[#030303]" : "bg-white"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest border mb-4 ${
              d
                ? "bg-purple-600/10 border-purple-500/20 text-purple-400"
                : "bg-purple-50 border-purple-200 text-purple-700"
            }`}
          >
            <MessageSquare size={12} />
            FAQ
          </div>

          <h2
            id="faq-heading"
            className={`text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-tight mb-3 ${
              d ? "text-white" : "text-slate-950"
            }`}
          >
            Frequently Asked{" "}
            <span className="text-purple-600">Questions</span>
          </h2>

          <p
            className={`text-sm sm:text-base leading-relaxed ${
              d ? "text-gray-400" : "text-slate-600"
            }`}
          >
            Learn more about DevZore&apos;s software development, web and mobile
            development, SEO, digital marketing, pricing, project process and
            ongoing technical support.
          </p>
        </div>

        {/* ==================================================
            QUICK SERVICE LINKS
        ================================================== */}

        <div className="grid sm:grid-cols-3 gap-2.5 mb-7">
          <Link
            to="/allservices"
            onClick={scrollTop}
            className={`group flex items-center gap-3 p-3 rounded-xl border transition-all ${
              d
                ? "bg-white/[0.02] border-white/[0.06] hover:border-purple-500/25 hover:bg-white/[0.04]"
                : "bg-slate-50 border-slate-200 hover:border-purple-200 hover:bg-white"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                d
                  ? "bg-purple-500/10 text-purple-400"
                  : "bg-purple-50 text-purple-600"
              }`}
            >
              <Code2 size={15} />
            </div>

            <div className="min-w-0">
              <p
                className={`text-[11px] sm:text-xs font-bold ${
                  d ? "text-white" : "text-slate-900"
                }`}
              >
                Development Services
              </p>

              <p
                className={`text-[9px] sm:text-[10px] ${
                  d ? "text-gray-500" : "text-slate-500"
                }`}
              >
                Web, mobile, SaaS & backend
              </p>
            </div>

            <ArrowRight
              size={12}
              className="ml-auto text-purple-500 transition-transform group-hover:translate-x-0.5"
            />
          </Link>

          <Link
            to="/seo-services"
            onClick={scrollTop}
            className={`group flex items-center gap-3 p-3 rounded-xl border transition-all ${
              d
                ? "bg-white/[0.02] border-white/[0.06] hover:border-green-500/25 hover:bg-white/[0.04]"
                : "bg-slate-50 border-slate-200 hover:border-green-200 hover:bg-white"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                d
                  ? "bg-green-500/10 text-green-400"
                  : "bg-green-50 text-green-600"
              }`}
            >
              <Search size={15} />
            </div>

            <div className="min-w-0">
              <p
                className={`text-[11px] sm:text-xs font-bold ${
                  d ? "text-white" : "text-slate-900"
                }`}
              >
                SEO Services
              </p>

              <p
                className={`text-[9px] sm:text-[10px] ${
                  d ? "text-gray-500" : "text-slate-500"
                }`}
              >
                Technical & on-page SEO
              </p>
            </div>

            <ArrowRight
              size={12}
              className="ml-auto text-green-500 transition-transform group-hover:translate-x-0.5"
            />
          </Link>

          <Link
            to="/digital-marketing"
            onClick={scrollTop}
            className={`group flex items-center gap-3 p-3 rounded-xl border transition-all ${
              d
                ? "bg-white/[0.02] border-white/[0.06] hover:border-pink-500/25 hover:bg-white/[0.04]"
                : "bg-slate-50 border-slate-200 hover:border-pink-200 hover:bg-white"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                d
                  ? "bg-pink-500/10 text-pink-400"
                  : "bg-pink-50 text-pink-600"
              }`}
            >
              <Megaphone size={15} />
            </div>

            <div className="min-w-0">
              <p
                className={`text-[11px] sm:text-xs font-bold ${
                  d ? "text-white" : "text-slate-900"
                }`}
              >
                Digital Marketing
              </p>

              <p
                className={`text-[9px] sm:text-[10px] ${
                  d ? "text-gray-500" : "text-slate-500"
                }`}
              >
                Content, social & campaigns
              </p>
            </div>

            <ArrowRight
              size={12}
              className="ml-auto text-pink-500 transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* ==================================================
            CATEGORY FILTERS
        ================================================== */}

        <div
          className="flex flex-wrap justify-center gap-2 mb-7"
          aria-label="FAQ categories"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryChange(category)}
              className={`px-3.5 py-2 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all duration-200 border ${
                activeCategory === category
                  ? "bg-purple-600 text-white border-purple-600 shadow-[0_0_14px_rgba(124,58,237,0.20)]"
                  : d
                  ? "bg-white/[0.03] border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.06]"
                  : "bg-white border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ==================================================
            FAQ ACCORDION
        ================================================== */}

        <div className="space-y-2.5 mb-8">
          {filteredFaqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={`${faq.category}-${faq.question}`}
                className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? d
                      ? "border-purple-500/35 bg-purple-600/[0.04]"
                      : "border-purple-200 bg-purple-50/50"
                    : d
                    ? "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.10]"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-2.5 sm:gap-3 min-w-0">
                    <span
                      className={`hidden sm:inline-flex shrink-0 mt-0.5 text-[8px] sm:text-[9px] font-bold px-2 py-1 rounded-full ${
                        isOpen
                          ? "bg-purple-500/15 text-purple-400"
                          : d
                          ? "bg-white/[0.05] text-gray-500"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {faq.category}
                    </span>

                    <span
                      className={`text-[12px] sm:text-[13px] lg:text-[14px] font-bold leading-relaxed ${
                        isOpen
                          ? "text-purple-500"
                          : d
                          ? "text-gray-200"
                          : "text-slate-900"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ${
                      isOpen
                        ? "bg-purple-600 text-white"
                        : d
                        ? "bg-white/[0.05] text-gray-500"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`mx-4 sm:mx-5 pb-5 pt-4 border-t ${
                        d
                          ? "border-white/[0.06]"
                          : "border-purple-100"
                      }`}
                    >
                      <p
                        className={`text-[12px] sm:text-[13px] leading-6 ${
                          d ? "text-gray-400" : "text-slate-600"
                        }`}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================================================
            CONTACT CTA
        ================================================== */}

        <div
          className={`relative overflow-hidden p-6 sm:p-8 rounded-2xl border text-center ${
            d
              ? "bg-purple-600/[0.05] border-purple-500/15"
              : "bg-purple-50 border-purple-100"
          }`}
        >
          <div
            aria-hidden="true"
            className="absolute -top-28 left-1/2 -translate-x-1/2 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"
          />

          <div className="relative z-10">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3 ${
                d
                  ? "bg-purple-500/10 text-purple-400"
                  : "bg-white text-purple-600"
              }`}
            >
              <MessageSquare size={19} />
            </div>

            <h3
              className={`text-lg sm:text-xl font-black mb-2 ${
                d ? "text-white" : "text-slate-900"
              }`}
            >
              Have a Question About Your Project?
            </h3>

            <p
              className={`text-xs sm:text-[13px] leading-relaxed mb-5 max-w-xl mx-auto ${
                d ? "text-gray-400" : "text-slate-600"
              }`}
            >
              Tell our team what you are planning. We can discuss your
              development, SEO, digital marketing or ongoing technical support
              requirements.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 justify-center">
              <Link
                to="/contact"
                onClick={scrollTop}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:-translate-y-0.5"
              >
                Contact DevZore
                <ArrowRight size={14} />
              </Link>

              <a
                href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20have%20a%20question%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-xs sm:text-sm hover:bg-[#25D366]/20 transition-all hover:-translate-y-0.5"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z" />
                </svg>
                

                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;