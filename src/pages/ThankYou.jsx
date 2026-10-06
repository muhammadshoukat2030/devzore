import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Home,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const ThankYou = () => {
  // BACKGROUNDS

  const darkGrid = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
    backgroundSize: "52px 52px",
  };

  // NEXT STEPS

  const nextSteps = [
    {
      icon: <CheckCircle2 size={18} />,
      number: "01",
      title: "Inquiry Received",
      description:
        "Your project details have been submitted successfully to DevZore.",
    },
    {
      icon: <ShieldCheck size={18} />,
      number: "02",
      title: "Requirements Review",
      description:
        "We will review the information, project requirements and development needs you shared.",
    },
    {
      icon: <Clock3 size={18} />,
      number: "03",
      title: "Next Discussion",
      description:
        "We can then continue the conversation about scope, approach and practical next steps.",
    },
  ];

  // HELPERS

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#04111a] text-white antialiased"
      style={{
        fontFamily: '"Inter", "Segoe UI", Arial, Helvetica, sans-serif',
      }}
    >
      {/* BACKGROUND */}

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-60"
          style={darkGrid}
        />

        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[760px] h-[620px] rounded-full bg-[#0796A8]/12 blur-[160px]" />

        <div className="absolute top-[28%] -right-28 w-[430px] h-[430px] rounded-full bg-[#22bdca]/6 blur-[140px]" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#04111a]/25 to-[#04111a]" />
      </div>

      {/* CONTENT */}

      <section className="relative z-10 min-h-screen flex items-center justify-center px-5 sm:px-6 pt-24 sm:pt-28 pb-14 sm:pb-16">
        <div className="w-full max-w-[920px] mx-auto">
          <div className="text-center">
            {/* SUCCESS ICON */}

            <div className="relative mx-auto w-[74px] h-[74px] sm:w-[82px] sm:h-[82px] rounded-full border border-[#23bfce]/20 bg-[#0b2a35] flex items-center justify-center shadow-[0_20px_60px_rgba(7,150,168,0.12)]">
              <div className="absolute inset-[7px] rounded-full border border-[#23bfce]/10" />

              <CheckCircle2
                size={36}
                strokeWidth={1.7}
                className="relative text-[#28c5d4]"
              />
            </div>

            {/* LABEL */}

            <div className="mt-6 inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#28c5d4]">
              <span className="w-5 h-[2px] bg-[#0796A8]" />
              Project Inquiry Received
              <span className="w-5 h-[2px] bg-[#0796A8]" />
            </div>

            {/* HEADING */}

            <h1 className="max-w-[800px] mx-auto mt-4 text-[38px] sm:text-[48px] lg:text-[58px] leading-[1.04] font-semibold tracking-[-0.045em]">
              Thank you for contacting{" "}
              <span className="text-[#22bdca]">DevZore.</span>
            </h1>

            {/* DESCRIPTION */}

            <p className="max-w-[660px] mx-auto mt-5 text-[14px] sm:text-[16px] leading-7 text-slate-300">
              Your project inquiry has been submitted successfully. We will
              review the information you provided and use it to understand your
              requirements and the next development steps.
            </p>

            <p className="max-w-[600px] mx-auto mt-3 text-[12px] sm:text-[13px] leading-6 text-slate-500">
              You can return to the website, explore our services or contact us
              by email if you need to add anything to your inquiry.
            </p>
          </div>

          {/* NEXT STEPS */}

          <div className="mt-8 grid md:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.08]">
            {nextSteps.map((item) => (
              <article
                key={item.number}
                className="bg-[#071923] p-5 sm:p-6 text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#0c2a35] text-[#28c5d4] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <span className="text-[9px] font-semibold text-[#1bb8c7]">
                    {item.number}
                  </span>
                </div>

                <h2 className="mt-4 text-[13px] sm:text-[14px] font-semibold text-white">
                  {item.title}
                </h2>

                <p className="mt-2 text-[10px] sm:text-[11px] leading-5 text-slate-500">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          {/* PRIMARY ACTIONS */}

          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              onClick={scrollTop}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[11px] sm:text-[12px] font-semibold text-[#071923] transition-colors"
            >
              <Home size={14} />
              Back to Home

              <ArrowRight
                size={13}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <Link
              to="/allservices"
              onClick={scrollTop}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.12] px-5 py-3 text-[11px] sm:text-[12px] font-semibold text-white hover:border-[#23bfce]/40 hover:text-[#28c5d4] transition-colors"
            >
              Explore Our Services

              <ArrowRight
                size={13}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* EMAIL CARD */}

          <div className="mt-6 max-w-[560px] mx-auto rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-left">
                <div className="w-9 h-9 shrink-0 rounded-xl bg-[#0c2a35] text-[#28c5d4] flex items-center justify-center">
                  <Mail size={16} />
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Need to add more details?
                  </p>

                  <p className="mt-1 text-[11px] sm:text-[12px] text-slate-300">
                    Contact DevZore by email
                  </p>
                </div>
              </div>

              <a
                href="mailto:hellodevzore@gmail.com"
                className="text-[10px] sm:text-[11px] font-semibold text-[#28c5d4] hover:text-[#39d3df] transition-colors break-all"
              >
                hellodevzore@gmail.com
              </a>
            </div>
          </div>

          {/* SMALL NOTE */}

          <div className="mt-8 pt-5 border-t border-white/[0.07]">
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {[
                ["About DevZore", "/about"],
                ["Our Process", "/process"],
                ["Development Guides", "/guides"],
                ["Contact", "/contact"],
              ].map(([label, path]) => (
                <Link
                  key={path}
                  to={path}
                  onClick={scrollTop}
                  className="text-[9px] font-medium text-slate-600 hover:text-[#25c0ce] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-center gap-2 text-[9px] text-slate-700">
              <Sparkles size={10} />
              <span>DevZore Software Development Agency</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;