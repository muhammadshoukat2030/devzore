import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  Minus,
  ArrowRight,
  MessageSquare,
  Code2,
  Search,
  Megaphone,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const FAQ = ({ isDark = true }) => {
  const d = isDark;

  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // ======================================================
  // SETTINGS
  // ======================================================

  const INITIAL_FAQ_COUNT = 6;

  // ======================================================
  // CATEGORIES
  // ======================================================

  const categories = [
    "All",
    "Services",
    "Process",
    "Pricing",
    "Technical",
    "SEO & Marketing",
    "Support",
  ];

  // ======================================================
  // FAQ DATA
  // ======================================================

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

  // ======================================================
  // FILTERING
  // ======================================================

  const filteredFaqs = useMemo(() => {
    if (activeCategory === "All") {
      return faqs;
    }

    return faqs.filter((faq) => faq.category === activeCategory);
  }, [activeCategory]);

  const visibleFaqs = showAll
    ? filteredFaqs
    : filteredFaqs.slice(0, INITIAL_FAQ_COUNT);

  const hiddenFaqCount = Math.max(
    filteredFaqs.length - INITIAL_FAQ_COUNT,
    0
  );

  // ======================================================
  // FUNCTIONS
  // ======================================================

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveIndex(null);
    setShowAll(false);
  };

  const handleShowMore = () => {
    setShowAll((prev) => !prev);
    setActiveIndex(null);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={`relative overflow-hidden py-12 sm:py-14 lg:py-16 transition-colors duration-300 ${
        d ? "bg-[#061923]" : "bg-[#f7f8f8]"
      }`}
    >
      {/* ==================================================
          SUBTLE BACKGROUND
      ================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div
          className={`absolute
            -top-40
            right-[-120px]
            w-[420px]
            h-[420px]
            rounded-full
            blur-[150px]
            ${
              d
                ? "bg-cyan-400/[0.035]"
                : "bg-cyan-100/40"
            }
          `}
        />

        <div
          className={`absolute
            -bottom-52
            left-[-140px]
            w-[440px]
            h-[440px]
            rounded-full
            blur-[160px]
            ${
              d
                ? "bg-cyan-400/[0.02]"
                : "bg-slate-200/60"
            }
          `}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-9">

          {/* LABEL */}

          <div
            className={`inline-flex
              items-center
              gap-2
              text-[9px]
              sm:text-[10px]
              font-black
              uppercase
              tracking-[0.2em]
              mb-3
              ${
                d
                  ? "text-cyan-400"
                  : "text-[#08788c]"
              }
            `}
          >
            <span
              className={`w-6 h-[2px] ${
                d ? "bg-cyan-400" : "bg-[#08788c]"
              }`}
            />

            Frequently Asked Questions

            <span
              className={`w-6 h-[2px] ${
                d ? "bg-cyan-400" : "bg-[#08788c]"
              }`}
            />
          </div>

          {/* TITLE */}

          <h2
            id="faq-heading"
            className={`text-[28px]
              sm:text-[36px]
              lg:text-[42px]
              leading-[1.08]
              tracking-[-0.035em]
              font-black
              ${
                d ? "text-white" : "text-[#061923]"
              }
            `}
          >
            Questions? We&apos;ve got{" "}
            <span
              className={
                d
                  ? "text-cyan-400"
                  : "text-[#08788c]"
              }
            >
              answers.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className={`mt-4
              max-w-2xl
              mx-auto
              text-[11px]
              sm:text-[13px]
              lg:text-[14px]
              leading-6 sm:leading-7
              ${
                d
                  ? "text-slate-400"
                  : "text-slate-600"
              }
            `}
          >
            Find answers about our development services, project process,
            pricing, technologies, SEO, digital marketing and ongoing support.
          </p>
        </div>

        {/* ==================================================
            QUICK LINKS
        ================================================== */}

        <div className="grid sm:grid-cols-3 gap-2.5 mb-7">

          {/* DEVELOPMENT */}

          <Link
            to="/allservices"
            onClick={scrollTop}
            className={`group
              flex
              items-center
              gap-3
              p-3.5
              rounded-xl
              border
              transition-all
              duration-200
              ${
                d
                  ? "bg-white/[0.025] border-white/[0.07] hover:bg-white/[0.045] hover:border-cyan-400/20"
                  : "bg-white border-slate-200 hover:border-[#08788c]/30 hover:shadow-sm"
              }
            `}
          >
            <div
              className={`w-9 h-9
                rounded-lg
                flex
                items-center
                justify-center
                shrink-0
                ${
                  d
                    ? "bg-cyan-400/[0.08] text-cyan-400"
                    : "bg-[#08788c]/[0.07] text-[#08788c]"
                }
              `}
            >
              <Code2 size={15} />
            </div>

            <div className="min-w-0">
              <p
                className={`text-[11px] sm:text-[12px] font-bold ${
                  d ? "text-white" : "text-[#061923]"
                }`}
              >
                Development
              </p>

              <p
                className={`text-[9px] mt-0.5 ${
                  d ? "text-slate-500" : "text-slate-500"
                }`}
              >
                Web, mobile & software
              </p>
            </div>

            <ArrowRight
              size={12}
              className={`ml-auto transition-transform group-hover:translate-x-0.5 ${
                d ? "text-cyan-400" : "text-[#08788c]"
              }`}
            />
          </Link>

          {/* SEO */}

          <Link
            to="/seo-services"
            onClick={scrollTop}
            className={`group
              flex
              items-center
              gap-3
              p-3.5
              rounded-xl
              border
              transition-all
              duration-200
              ${
                d
                  ? "bg-white/[0.025] border-white/[0.07] hover:bg-white/[0.045] hover:border-cyan-400/20"
                  : "bg-white border-slate-200 hover:border-[#08788c]/30 hover:shadow-sm"
              }
            `}
          >
            <div
              className={`w-9 h-9
                rounded-lg
                flex
                items-center
                justify-center
                shrink-0
                ${
                  d
                    ? "bg-cyan-400/[0.08] text-cyan-400"
                    : "bg-[#08788c]/[0.07] text-[#08788c]"
                }
              `}
            >
              <Search size={15} />
            </div>

            <div className="min-w-0">
              <p
                className={`text-[11px] sm:text-[12px] font-bold ${
                  d ? "text-white" : "text-[#061923]"
                }`}
              >
                SEO Services
              </p>

              <p
                className={`text-[9px] mt-0.5 ${
                  d ? "text-slate-500" : "text-slate-500"
                }`}
              >
                Technical & on-page SEO
              </p>
            </div>

            <ArrowRight
              size={12}
              className={`ml-auto transition-transform group-hover:translate-x-0.5 ${
                d ? "text-cyan-400" : "text-[#08788c]"
              }`}
            />
          </Link>

          {/* MARKETING */}

          <Link
            to="/digital-marketing"
            onClick={scrollTop}
            className={`group
              flex
              items-center
              gap-3
              p-3.5
              rounded-xl
              border
              transition-all
              duration-200
              ${
                d
                  ? "bg-white/[0.025] border-white/[0.07] hover:bg-white/[0.045] hover:border-cyan-400/20"
                  : "bg-white border-slate-200 hover:border-[#08788c]/30 hover:shadow-sm"
              }
            `}
          >
            <div
              className={`w-9 h-9
                rounded-lg
                flex
                items-center
                justify-center
                shrink-0
                ${
                  d
                    ? "bg-cyan-400/[0.08] text-cyan-400"
                    : "bg-[#08788c]/[0.07] text-[#08788c]"
                }
              `}
            >
              <Megaphone size={15} />
            </div>

            <div className="min-w-0">
              <p
                className={`text-[11px] sm:text-[12px] font-bold ${
                  d ? "text-white" : "text-[#061923]"
                }`}
              >
                Digital Marketing
              </p>

              <p
                className={`text-[9px] mt-0.5 ${
                  d ? "text-slate-500" : "text-slate-500"
                }`}
              >
                Content, social & campaigns
              </p>
            </div>

            <ArrowRight
              size={12}
              className={`ml-auto transition-transform group-hover:translate-x-0.5 ${
                d ? "text-cyan-400" : "text-[#08788c]"
              }`}
            />
          </Link>
        </div>

        {/* ==================================================
            CATEGORY FILTERS
        ================================================== */}

        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-1.5 sm:gap-2
            mb-6
          "
          aria-label="FAQ categories"
        >
          {categories.map((category) => {
            const count =
              category === "All"
                ? faqs.length
                : faqs.filter(
                    (faq) => faq.category === category
                  ).length;

            const selected = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() =>
                  handleCategoryChange(category)
                }
                className={`inline-flex
                  items-center
                  gap-1.5
                  px-3
                  py-1.5
                  rounded-lg
                  border
                  text-[9px]
                  sm:text-[10px]
                  font-bold
                  transition-all
                  duration-200
                  ${
                    selected
                      ? d
                        ? "bg-cyan-400 border-cyan-400 text-[#061923]"
                        : "bg-[#061923] border-[#061923] text-white"
                      : d
                      ? "bg-white/[0.025] border-white/[0.07] text-slate-500 hover:text-white hover:bg-white/[0.05]"
                      : "bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:text-[#061923]"
                  }
                `}
              >
                {category}

                <span
                  className={`text-[8px] ${
                    selected
                      ? d
                        ? "text-[#061923]/60"
                        : "text-white/60"
                      : d
                      ? "text-slate-600"
                      : "text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ==================================================
            FAQ ACCORDION
        ================================================== */}

        <div className="space-y-2.5">
          {visibleFaqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={`${activeCategory}-${faq.question}`}
                className={`rounded-xl
                  border
                  overflow-hidden
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? d
                        ? "border-cyan-400/25 bg-cyan-400/[0.035]"
                        : "border-[#08788c]/25 bg-[#08788c]/[0.025]"
                      : d
                      ? "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.12]"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }
                `}
              >
                {/* QUESTION */}

                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="
                    w-full
                    px-4
                    py-3.5
                    sm:px-5
                    sm:py-4
                    text-left
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  <div className="flex items-center gap-3 min-w-0">

                    {/* CATEGORY */}

                    <span
                      className={`hidden
                        sm:inline-flex
                        shrink-0
                        text-[8px]
                        font-bold
                        px-2
                        py-1
                        rounded-md
                        ${
                          isOpen
                            ? d
                              ? "bg-cyan-400/[0.09] text-cyan-400"
                              : "bg-[#08788c]/[0.07] text-[#08788c]"
                            : d
                            ? "bg-white/[0.05] text-slate-500"
                            : "bg-slate-100 text-slate-500"
                        }
                      `}
                    >
                      {faq.category}
                    </span>

                    {/* QUESTION TEXT */}

                    <span
                      className={`text-[11px]
                        sm:text-[12px]
                        lg:text-[13px]
                        font-bold
                        leading-relaxed
                        ${
                          isOpen
                            ? d
                              ? "text-cyan-400"
                              : "text-[#08788c]"
                            : d
                            ? "text-slate-200"
                            : "text-[#061923]"
                        }
                      `}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* PLUS / MINUS */}

                  <div
                    className={`shrink-0
                      w-7 h-7
                      sm:w-8 sm:h-8
                      rounded-lg
                      flex
                      items-center
                      justify-center
                      transition-all
                      ${
                        isOpen
                          ? d
                            ? "bg-cyan-400 text-[#061923]"
                            : "bg-[#061923] text-white"
                          : d
                          ? "bg-white/[0.05] text-slate-500"
                          : "bg-slate-100 text-slate-500"
                      }
                    `}
                  >
                    {isOpen ? (
                      <Minus size={13} />
                    ) : (
                      <Plus size={13} />
                    )}
                  </div>
                </button>

                {/* ANSWER */}

                <div
                  className={`grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`mx-4
                        sm:mx-5
                        pb-4
                        sm:pb-5
                        pt-3
                        border-t
                        ${
                          d
                            ? "border-white/[0.07]"
                            : "border-slate-200"
                        }
                      `}
                    >
                      <p
                        className={`text-[10px]
                          sm:text-[12px]
                          leading-[1.8]
                          sm:leading-6
                          ${
                            d
                              ? "text-slate-400"
                              : "text-slate-600"
                          }
                        `}
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
            SHOW ALL / SHOW LESS
        ================================================== */}

        {filteredFaqs.length > INITIAL_FAQ_COUNT && (
          <div className="flex flex-col items-center mt-6">

            <button
              type="button"
              onClick={handleShowMore}
              aria-expanded={showAll}
              className={`group
                inline-flex
                items-center
                justify-center
                gap-2
                min-w-[180px]
                px-5
                py-2.5
                rounded-lg
                border
                text-[10px]
                sm:text-[11px]
                font-bold
                transition-all
                duration-200
                ${
                  showAll
                    ? d
                      ? "bg-white/[0.035] border-white/[0.09] text-slate-300 hover:bg-white/[0.06] hover:text-white"
                      : "bg-white border-slate-300 text-slate-700 hover:border-slate-400"
                    : d
                    ? "bg-cyan-400/[0.07] border-cyan-400/20 text-cyan-400 hover:bg-cyan-400 hover:text-[#061923]"
                    : "bg-white border-[#08788c]/25 text-[#08788c] hover:bg-[#061923] hover:border-[#061923] hover:text-white"
                }
              `}
            >
              {showAll ? (
                <>
                  Show Less

                  <ChevronUp
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5"
                  />
                </>
              ) : (
                <>
                  Show All FAQs

                  <span
                    className={`text-[8px]
                      px-1.5
                      py-0.5
                      rounded-full
                      ${
                        d
                          ? "bg-cyan-400/[0.09]"
                          : "bg-[#08788c]/[0.07]"
                      }
                    `}
                  >
                    +{hiddenFaqCount}
                  </span>

                  <ChevronDown
                    size={14}
                    className="transition-transform group-hover:translate-y-0.5"
                  />
                </>
              )}
            </button>

            {!showAll && activeCategory === "All" && (
              <p
                className={`text-[9px]
                  sm:text-[10px]
                  mt-2.5
                  ${
                    d
                      ? "text-slate-600"
                      : "text-slate-400"
                  }
                `}
              >
                Showing {INITIAL_FAQ_COUNT} of {faqs.length} questions
              </p>
            )}
          </div>
        )}

        {/* ==================================================
            CONTACT CTA
        ================================================== */}

        <div
          className={`relative
            overflow-hidden
            mt-8
            px-5
            py-5
            sm:px-6
            sm:py-6
            rounded-2xl
            border
            ${
              d
                ? "bg-white/[0.025] border-white/[0.08]"
                : "bg-white border-slate-200"
            }
          `}
        >
          {/* CTA BACKGROUND */}

          <div
            aria-hidden="true"
            className={`absolute
              -top-28
              right-[-50px]
              w-64
              h-64
              rounded-full
              blur-[90px]
              pointer-events-none
              ${
                d
                  ? "bg-cyan-400/[0.055]"
                  : "bg-cyan-100/60"
              }
            `}
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-5
            "
          >

            {/* CTA TEXT */}

            <div className="flex items-start gap-3 max-w-2xl">
              <div
                className={`w-10 h-10
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  shrink-0
                  ${
                    d
                      ? "bg-cyan-400/[0.08] text-cyan-400"
                      : "bg-[#08788c]/[0.07] text-[#08788c]"
                  }
                `}
              >
                <MessageSquare size={17} />
              </div>

              <div>
                <h3
                  className={`text-[14px]
                    sm:text-base
                    font-black
                    ${
                      d
                        ? "text-white"
                        : "text-[#061923]"
                    }
                  `}
                >
                  Still have a question?
                </h3>

                <p
                  className={`mt-1
                    text-[10px]
                    sm:text-[11px]
                    leading-relaxed
                    ${
                      d
                        ? "text-slate-500"
                        : "text-slate-500"
                    }
                  `}
                >
                  Tell us about your project and we&apos;ll discuss the
                  right development, SEO or digital marketing approach.
                </p>
              </div>
            </div>

            {/* CTA BUTTONS */}

            <div
              className="
                grid
                grid-cols-2
                sm:flex
                gap-2
                shrink-0
              "
            >
              <Link
                to="/contact"
                onClick={scrollTop}
                className={`inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-4
                  sm:px-5
                  py-2.5
                  rounded-lg
                  text-[9px]
                  sm:text-[10px]
                  font-black
                  transition-all
                  ${
                    d
                      ? "bg-cyan-400 text-[#061923] hover:bg-cyan-300"
                      : "bg-[#061923] text-white hover:bg-[#0a2734]"
                  }
                `}
              >
                Contact DevZore
                <ArrowRight size={12} />
              </Link>

              <a
                href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20have%20a%20question%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-4
                  sm:px-5
                  py-2.5
                  bg-[#25D366]/10
                  border
                  border-[#25D366]/25
                  text-[#20b858]
                  font-black
                  rounded-lg
                  text-[9px]
                  sm:text-[10px]
                  hover:bg-[#25D366]/15
                  transition-all
                "
              >
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z" />
                </svg>

                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;