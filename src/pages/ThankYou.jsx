import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Home,
  MessageCircle,
  Mail,
  Clock3,
  ShieldCheck,
} from "lucide-react";

const ThankYou = ({ isDark }) => {
  const d = isDark;

  const whatsappUrl =
    "https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20have%20submitted%20a%20project%20inquiry%20through%20your%20website.";

  return (
    <div
      className={`
        relative
        min-h-screen
        overflow-hidden
        transition-colors
        duration-300
        ${
          d
            ? "bg-[#030303] text-white"
            : "bg-[#f8fafc] text-slate-900"
        }
      `}
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      <div
        aria-hidden="true"
        className={`
          absolute
          pointer-events-none
          left-1/2
          -translate-x-1/2
          -top-32
          w-[450px]
          sm:w-[650px]
          lg:w-[850px]
          h-[450px]
          sm:h-[650px]
          rounded-full
          blur-[130px]
          opacity-20
          ${d ? "bg-purple-700" : "bg-purple-300"}
        `}
      />

      <div
        aria-hidden="true"
        className={`
          absolute
          pointer-events-none
          -right-40
          top-1/3
          w-[400px]
          h-[400px]
          rounded-full
          blur-[120px]
          opacity-10
          ${d ? "bg-blue-700" : "bg-blue-300"}
        `}
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main
        className="
          relative
          z-10
          min-h-[85vh]
          flex
          items-center
          justify-center
          px-4
          sm:px-6
          pt-32
          pb-20
        "
      >
        <div className="w-full max-w-3xl mx-auto text-center">

          {/* =================================================
              SUCCESS ICON
          ================================================= */}

          <div
            className={`
              mx-auto
              w-20
              h-20
              sm:w-24
              sm:h-24
              rounded-full
              flex
              items-center
              justify-center
              border
              shadow-xl
              ${
                d
                  ? `
                    bg-green-500/10
                    border-green-500/20
                    shadow-green-500/5
                  `
                  : `
                    bg-green-50
                    border-green-200
                    shadow-green-500/10
                  `
              }
            `}
          >
            <CheckCircle2
              size={46}
              strokeWidth={1.8}
              className="text-green-500"
            />
          </div>

          {/* =================================================
              BADGE
          ================================================= */}

          <div
            className={`
              inline-flex
              items-center
              gap-2
              mt-7
              px-4
              py-2
              rounded-full
              border
              text-[10px]
              sm:text-[11px]
              font-bold
              uppercase
              tracking-[0.16em]
              ${
                d
                  ? `
                    bg-purple-500/10
                    border-purple-500/20
                    text-purple-300
                  `
                  : `
                    bg-purple-50
                    border-purple-200
                    text-purple-700
                  `
              }
            `}
          >
            <CheckCircle2 size={13} />

            Inquiry Received
          </div>

          {/* =================================================
              HEADING
          ================================================= */}

          <h1
            className={`
              mt-5
              text-3xl
              sm:text-4xl
              lg:text-5xl
              xl:text-6xl
              font-black
              tracking-tight
              leading-[1.08]
              ${
                d
                  ? "text-white"
                  : "text-slate-950"
              }
            `}
          >
            Thank You for Contacting
            <br />

            <span className="text-purple-600">
              DevZore.
            </span>
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className={`
              mt-5
              max-w-2xl
              mx-auto
              text-sm
              sm:text-base
              lg:text-lg
              leading-7
              ${
                d
                  ? "text-gray-400"
                  : "text-slate-600"
              }
            `}
          >
            Your project inquiry has been received successfully.
            Our team will review the information you submitted and
            get back to you as soon as possible.
          </p>

          {/* =================================================
              CONFIRMATION CARD
          ================================================= */}

          <div
            className={`
              mt-8
              p-5
              sm:p-6
              rounded-2xl
              border
              text-left
              ${
                d
                  ? `
                    bg-white/[0.025]
                    border-white/[0.08]
                  `
                  : `
                    bg-white
                    border-slate-200
                    shadow-sm
                  `
              }
            `}
          >
            <div
              className="
                grid
                sm:grid-cols-3
                gap-5
              "
            >
              {/* ITEM 1 */}

              <div className="flex gap-3">
                <div
                  className={`
                    w-10
                    h-10
                    shrink-0
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    ${
                      d
                        ? "bg-purple-500/10 text-purple-400"
                        : "bg-purple-50 text-purple-600"
                    }
                  `}
                >
                  <CheckCircle2 size={18} />
                </div>

                <div>
                  <p
                    className={`
                      text-[13px]
                      font-bold
                      ${
                        d
                          ? "text-white"
                          : "text-slate-900"
                      }
                    `}
                  >
                    Inquiry Received
                  </p>

                  <p
                    className={`
                      mt-1
                      text-[11px]
                      leading-5
                      ${
                        d
                          ? "text-gray-500"
                          : "text-slate-500"
                      }
                    `}
                  >
                    Your project details were submitted successfully.
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}

              <div className="flex gap-3">
                <div
                  className={`
                    w-10
                    h-10
                    shrink-0
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    ${
                      d
                        ? "bg-blue-500/10 text-blue-400"
                        : "bg-blue-50 text-blue-600"
                    }
                  `}
                >
                  <ShieldCheck size={18} />
                </div>

                <div>
                  <p
                    className={`
                      text-[13px]
                      font-bold
                      ${
                        d
                          ? "text-white"
                          : "text-slate-900"
                      }
                    `}
                  >
                    Review
                  </p>

                  <p
                    className={`
                      mt-1
                      text-[11px]
                      leading-5
                      ${
                        d
                          ? "text-gray-500"
                          : "text-slate-500"
                      }
                    `}
                  >
                    We will review your requirements and project details.
                  </p>
                </div>
              </div>

              {/* ITEM 3 */}

              <div className="flex gap-3">
                <div
                  className={`
                    w-10
                    h-10
                    shrink-0
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    ${
                      d
                        ? "bg-green-500/10 text-green-400"
                        : "bg-green-50 text-green-600"
                    }
                  `}
                >
                  <Clock3 size={18} />
                </div>

                <div>
                  <p
                    className={`
                      text-[13px]
                      font-bold
                      ${
                        d
                          ? "text-white"
                          : "text-slate-900"
                      }
                    `}
                  >
                    Next Step
                  </p>

                  <p
                    className={`
                      mt-1
                      text-[11px]
                      leading-5
                      ${
                        d
                          ? "text-gray-500"
                          : "text-slate-500"
                      }
                    `}
                  >
                    We will contact you to discuss the next steps.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              PRIMARY ACTIONS
          ================================================= */}

          <div
            className="
              mt-8
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              gap-3
            "
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full
                sm:w-auto
                inline-flex
                items-center
                justify-center
                gap-2
                px-6
                py-3.5
                rounded-xl
                bg-[#25D366]
                hover:bg-[#20bd5a]
                text-white
                text-sm
                font-bold
                shadow-lg
                shadow-green-500/15
                transition-all
                duration-200
                hover:-translate-y-0.5
              "
            >
              <MessageCircle size={17} />

              Continue on WhatsApp

              <ArrowRight size={15} />
            </a>

            <Link
              to="/"
              className={`
                w-full
                sm:w-auto
                inline-flex
                items-center
                justify-center
                gap-2
                px-6
                py-3.5
                rounded-xl
                border
                text-sm
                font-bold
                transition-all
                duration-200
                ${
                  d
                    ? `
                      border-white/10
                      bg-white/[0.04]
                      text-gray-200
                      hover:bg-white/[0.08]
                    `
                    : `
                      border-slate-200
                      bg-white
                      text-slate-700
                      hover:bg-slate-50
                    `
                }
              `}
            >
              <Home size={16} />

              Back to Home
            </Link>
          </div>

          {/* =================================================
              SECONDARY LINKS
          ================================================= */}

          <div
            className={`
              mt-7
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-5
              gap-y-3
              text-[12px]
              font-semibold
              ${
                d
                  ? "text-gray-500"
                  : "text-slate-500"
              }
            `}
          >
            <Link
              to="/allservices"
              className="
                hover:text-purple-500
                transition-colors
              "
            >
              Explore Our Services
            </Link>

            <span
              className={`
                hidden
                sm:block
                w-1
                h-1
                rounded-full
                ${
                  d
                    ? "bg-gray-700"
                    : "bg-slate-300"
                }
              `}
            />

            <a
              href="mailto:hellodevzore@gmail.com"
              className="
                inline-flex
                items-center
                gap-1.5
                hover:text-purple-500
                transition-colors
              "
            >
              <Mail size={13} />

              hellodevzore@gmail.com
            </a>
          </div>

          {/* =================================================
              SMALL NOTE
          ================================================= */}

          <p
            className={`
              mt-8
              text-[10px]
              sm:text-[11px]
              leading-5
              ${
                d
                  ? "text-gray-600"
                  : "text-slate-400"
              }
            `}
          >
            DevZore — Digital Solutions. Trusted Worldwide.
          </p>
        </div>
      </main>
    </div>
  );
};

export default ThankYou;