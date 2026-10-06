import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
} from "lucide-react";

const Testimonials = () => {
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  // ======================================================
  // TESTIMONIAL DATA
  // Replace sample quotes/names with client-approved
  // feedback before presenting them as real quotations.
  // ======================================================

  const testimonials = [
    {
      id: 1,
      quote:
        "DevZore built a complete management system around our daily store operations. Inventory, sales, invoices and reporting are now much easier to manage from one place.",
      name: "Client Name",
      role: "Business Owner",
      company: "Weldon Paints",
      project: "Business Management System",
      location: "Pakistan",
    },
    {
      id: 2,
      quote:
        "The website was developed with a clean and responsive experience for our tourism business. Tour packages are easy to explore and customers can quickly reach us for booking inquiries.",
      name: "Client Name",
      role: "Tourism Business Owner",
      company: "Gulf Dunes Tourism",
      project: "Tourism Platform",
      location: "Qatar",
    },
    {
      id: 3,
      quote:
        "Our safari website needed to present packages clearly and work properly across mobile and desktop. DevZore delivered a professional website that makes it easier for visitors to explore our services.",
      name: "Client Name",
      role: "Business Owner",
      company: "Best Desert Safari Qatar",
      project: "Travel Website",
      location: "Qatar",
    },
    {
      id: 4,
      quote:
        "The ordering platform gives customers a straightforward way to browse the menu, view products and place orders. The responsive interface works smoothly across different screen sizes.",
      name: "Client Name",
      role: "Business Owner",
      company: "Sarab Express",
      project: "Food Ordering Platform",
      location: "Pakistan",
    },
    {
      id: 5,
      quote:
        "The system was designed around installment sales rather than forcing us into a generic workflow. Customer records, payments, collections and reports are organized in one application.",
      name: "Client Name",
      role: "Business Owner",
      company: "Installment Management",
      project: "Installment System",
      location: "Pakistan",
    },
    {
      id: 6,
      quote:
        "DevZore created a clean and responsive healthcare website that makes our services easier to understand. Patients can explore treatments and find the information they need without unnecessary complexity.",
      name: "Client Name",
      role: "Clinic Representative",
      company: "Prime Dental Care",
      project: "Healthcare Website",
      location: "Pakistan",
    },
  ];

  // 3 cards per desktop slide
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);

  const currentTestimonials = testimonials.slice(
    page * perPage,
    page * perPage + perPage
  );

  // ======================================================
  // AUTO SLIDE
  // ======================================================

  useEffect(() => {
    if (!paused) {
      timerRef.current = setInterval(() => {
        setPage((prev) => (prev + 1) % totalPages);
      }, 6500);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [paused, totalPages]);

  const nextSlide = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const previousSlide = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-white px-3 sm:px-4 lg:px-5 py-8 sm:py-10"
    >
      {/* ==================================================
          MAIN WRAPPER
      ================================================== */}

      <div
        className="
          relative
          max-w-[1500px]
          mx-auto
          overflow-hidden
          rounded-[20px]
          bg-[#061923]
        "
      >
        {/* ==================================================
            DECORATION
        ================================================== */}

        <div
          aria-hidden="true"
          className="
            absolute
            -top-40
            -right-32
            w-[420px]
            h-[420px]
            rounded-full
            bg-cyan-400/[0.07]
            blur-[110px]
            pointer-events-none
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            bottom-0
            left-[25%]
            w-[350px]
            h-[250px]
            rounded-full
            bg-cyan-400/[0.025]
            blur-[110px]
            pointer-events-none
          "
        />

        {/* ==================================================
            CONTENT
        ================================================== */}

        <div
          className="
            relative
            z-10
            px-5
            sm:px-8
            lg:px-14
            xl:px-16
            py-10
            sm:py-12
            lg:py-14
          "
        >
          {/* ==================================================
              HEADER
          ================================================== */}

          <div
            className="
              flex
              flex-col
              lg:flex-row
              lg:items-end
              lg:justify-between
              gap-5
              mb-7
              sm:mb-8
            "
          >
            <div className="max-w-[820px]">
              {/* LABEL */}

              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-5 h-[2px] bg-cyan-400" />

                <span
                  className="
                    text-[9px]
                    sm:text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.18em]
                    text-cyan-300
                  "
                >
                  Client Voices
                </span>
              </div>

              {/* TITLE */}

              <h2
                id="testimonials-heading"
                className="
                  text-[27px]
                  sm:text-[32px]
                  lg:text-[38px]
                  xl:text-[40px]
                  leading-[1.12]
                  font-extrabold
                  tracking-[-0.025em]
                  text-white
                "
              >
                Trusted with the work that{" "}
                <span className="text-cyan-300">
                  matters most
                </span>
              </h2>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-3
                  max-w-[720px]
                  text-[11px]
                  sm:text-[12px]
                  lg:text-[13px]
                  leading-[1.75]
                  text-slate-300/75
                "
              >
                Feedback from businesses across management
                systems, e-commerce, tourism, healthcare and
                custom software projects.
              </p>
            </div>

            {/* TOP CTA */}

            <Link
              to="/contact"
              onClick={scrollTop}
              className="
                hidden
                lg:inline-flex
                items-center
                justify-center
                gap-2
                px-5
                py-2.5
                rounded-xl
                bg-white
                border
                border-white
                text-[#061923]
                text-[10px]
                font-extrabold
                transition-all
                duration-200
                hover:bg-[#061923]
                hover:text-white
                hover:border-cyan-400
              "
            >
              Start a Project
              <ArrowRight size={12} />
            </Link>
          </div>

          {/* ==================================================
              TESTIMONIAL CARDS
          ================================================== */}

          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-4
            "
          >
            {currentTestimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="
                  relative
                  flex
                  flex-col
                  min-h-[330px]
                  lg:min-h-[350px]
                  rounded-[16px]
                  border
                  border-white/[0.12]
                  bg-white/[0.045]
                  px-5
                  sm:px-6
                  py-6
                "
              >
                {/* ==========================================
                    TOP ACCENT
                ========================================== */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    top-0
                    left-7
                    right-7
                    h-[2px]
                    bg-gradient-to-r
                    from-cyan-400
                    via-cyan-400/80
                    to-transparent
                  "
                />

                {/* ==========================================
                    QUOTE ICON
                ========================================== */}

                <Quote
                  size={34}
                  strokeWidth={2.8}
                  className="
                    fill-cyan-400
                    text-cyan-400
                    mb-4
                  "
                />

                {/* ==========================================
                    TESTIMONIAL
                ========================================== */}

                <blockquote
                  className="
                    text-[11px]
                    sm:text-[12px]
                    lg:text-[12.5px]
                    leading-[1.8]
                    font-medium
                    text-slate-100
                  "
                >
                  “{testimonial.quote}”
                </blockquote>

                {/* ==========================================
                    PROJECT META
                ========================================== */}

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      px-2
                      py-1
                      rounded-md
                      border
                      border-cyan-400/15
                      bg-cyan-400/[0.06]
                      text-[8px]
                      sm:text-[8.5px]
                      font-bold
                      text-cyan-300
                    "
                  >
                    <span
                      className="
                        w-1
                        h-1
                        rounded-full
                        bg-cyan-400
                      "
                    />

                    {testimonial.project}
                  </span>

                  <span
                    className="
                      text-[8px]
                      sm:text-[8.5px]
                      text-slate-500
                    "
                  >
                    {testimonial.location}
                  </span>
                </div>

                {/* ==========================================
                    CLIENT INFORMATION
                ========================================== */}

                <div className="mt-auto pt-5">
                  <div
                    className="
                      border-t
                      border-white/[0.12]
                      pt-4
                      flex
                      items-end
                      justify-between
                      gap-4
                    "
                  >
                    <div className="min-w-0">
                      <p
                        className="
                          text-[11px]
                          sm:text-[12px]
                          font-bold
                          text-white
                        "
                      >
                        {testimonial.name}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[8px]
                          sm:text-[9px]
                          text-slate-400
                        "
                      >
                        {testimonial.role}
                      </p>
                    </div>

                    <p
                      className="
                        max-w-[120px]
                        text-right
                        text-[9px]
                        sm:text-[10px]
                        leading-tight
                        font-bold
                        text-slate-300
                      "
                    >
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ==================================================
              SLIDER CONTROLS
          ================================================== */}

          <div
            className="
              flex
              items-center
              justify-between
              mt-5
            "
          >
            {/* ARROWS */}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous testimonials"
                className="
                  w-8
                  h-8
                  rounded-lg
                  border
                  border-white/[0.12]
                  flex
                  items-center
                  justify-center
                  text-slate-400
                  transition-all
                  duration-200
                  hover:text-white
                  hover:border-cyan-400/40
                  hover:bg-white/[0.05]
                "
              >
                <ArrowLeft size={13} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next testimonials"
                className="
                  w-8
                  h-8
                  rounded-lg
                  border
                  border-white/[0.12]
                  flex
                  items-center
                  justify-center
                  text-slate-400
                  transition-all
                  duration-200
                  hover:text-white
                  hover:border-cyan-400/40
                  hover:bg-white/[0.05]
                "
              >
                <ArrowRight size={13} />
              </button>
            </div>

            {/* DOTS */}

            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setPage(index)}
                  aria-label={`Show testimonial group ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    page === index
                      ? "w-6 bg-cyan-400"
                      : "w-1.5 bg-white/20 hover:bg-white/35"
                  }`}
                />
              ))}
            </div>

            {/* PAGE COUNT */}

            <div className="text-[9px] font-bold text-slate-500">
              {String(page + 1).padStart(2, "0")}
              <span className="mx-1">/</span>
              {String(totalPages).padStart(2, "0")}
            </div>
          </div>

          {/* ==================================================
              BOTTOM CTA
          ================================================== */}

          <div
            className="
              mt-6
              pt-5
              border-t
              border-white/[0.08]
              flex
              flex-col
              sm:flex-row
              sm:items-center
              sm:justify-between
              gap-4
            "
          >
            <div>
              <h3
                className="
                  text-[12px]
                  sm:text-[13px]
                  font-bold
                  text-white
                "
              >
                Have a project you&apos;d like to discuss?
              </h3>

              <p
                className="
                  mt-1
                  text-[9px]
                  sm:text-[10px]
                  text-slate-500
                "
              >
                Tell us what you need and we&apos;ll discuss the
                right development approach.
              </p>
            </div>

            <Link
              to="/contact"
              onClick={scrollTop}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                shrink-0
                px-5
                py-2.5
                rounded-lg
                bg-cyan-400
                border
                border-cyan-400
                text-[#061923]
                text-[10px]
                font-bold
                transition-all
                duration-200
                hover:bg-[#061923]
                hover:text-white
              "
            >
              Discuss Your Project
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;