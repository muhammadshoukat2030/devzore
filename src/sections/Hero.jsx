import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  Code2,
  Smartphone,
  Layers3,
} from "lucide-react";

// ======================================================
// HERO SLIDES
// Images must exist inside:
//
// public/hero/ai-development.webp
// public/hero/web-development.webp
// public/hero/mobile-development.webp
// public/hero/saas-development.webp
// ======================================================

const slides = [
  {
    eyebrow: "GENERATIVE AI DEVELOPMENT",
    title: "Build practical AI solutions for modern businesses.",
    description:
      "AI assistants, RAG systems and intelligent integrations designed around real business workflows.",
    buttonText: "Explore AI Development",
    path: "/generative-ai-development",
    image: "/hero/ai-development.webp",
    position: "center",
    icon: BrainCircuit,
  },
  {
    eyebrow: "WEB DEVELOPMENT",
    title: "Modern web applications built for growing businesses.",
    description:
      "Responsive websites and scalable web applications built with modern frontend and backend technologies.",
    buttonText: "Explore Web Development",
    path: "/web-development",
    image: "/hero/web-development.webp",
    position: "center",
    icon: Code2,
  },
  {
    eyebrow: "MOBILE APP DEVELOPMENT",
    title: "Mobile experiences designed around your business.",
    description:
      "Cross-platform mobile applications with modern interfaces, APIs and practical business functionality.",
    buttonText: "Explore Mobile Apps",
    path: "/mobile-apps",
    image: "/hero/mobile-development.webp",
    position: "center",
    icon: Smartphone,
  },
  {
    eyebrow: "SAAS & MVP DEVELOPMENT",
    title: "Turn your product idea into a working digital platform.",
    description:
      "Scalable SaaS products and startup MVPs built around your requirements, users and business goals.",
    buttonText: "Explore SaaS Development",
    path: "/saas-product-development",
    image: "/hero/saas-development.webp",
    position: "center",
    icon: Layers3,
  },
];

// ======================================================
// HERO
// ======================================================

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);

  // ======================================================
  // PRELOAD HERO IMAGES
  // ======================================================

  useEffect(() => {
    slides.forEach((slide) => {
      const image = new Image();
      image.src = slide.image;
    });
  }, []);

  // ======================================================
  // AUTO SLIDER
  // ======================================================

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // ======================================================
  // SLIDER CONTROLS
  // ======================================================

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  // ======================================================
  // SCROLL TOP
  // ======================================================

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const slide = slides[activeSlide];
  const SlideIcon = slide.icon;

  return (
    <section
      aria-labelledby="hero-heading"
      className="
        relative
        isolate
        overflow-hidden
        w-full
        bg-[#020b13]
        text-white

        min-h-[600px]
        sm:min-h-[650px]
        lg:min-h-[680px]
        xl:min-h-[720px]
      "
    >
      {/* ==================================================
          BACKGROUND SLIDER
      ================================================== */}

      <div className="absolute inset-0 overflow-hidden">
        {slides.map((item, index) => {
          const active = index === activeSlide;

          return (
            <div
              key={item.image}
              aria-hidden="true"
              className={`
                absolute
                inset-0

                transition-all
                duration-[1200ms]
                ease-in-out

                ${
                  active
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-[1.025]"
                }
              `}
            >
              <img
                src={item.image}
                alt=""
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
                onLoad={() => {
                  if (index === 0) {
                    setFirstImageLoaded(true);
                  }
                }}
                className="
                  absolute
                  inset-0

                  w-full
                  h-full

                  object-cover
                "
                style={{
                  objectPosition: item.position,
                }}
              />
            </div>
          );
        })}

        {/* ==================================================
            DESKTOP LEFT DARK OVERLAY
        ================================================== */}

        <div
          aria-hidden="true"
          className="
            hidden
            lg:block

            absolute
            inset-0

            bg-gradient-to-r

            from-[#020b13]
            from-[0%]

            via-[#020b13]/95
            via-[30%]

            to-transparent
            to-[68%]
          "
        />

        {/* ==================================================
            DESKTOP BOTTOM OVERLAY
        ================================================== */}

        <div
          aria-hidden="true"
          className="
            hidden
            lg:block

            absolute
            inset-0

            bg-gradient-to-t

            from-[#020b13]/90
            via-[#020b13]/10
            to-[#020b13]/10
          "
        />

        {/* ==================================================
            TOP NAVBAR / HERO CONNECTION
        ================================================== */}

        <div
          aria-hidden="true"
          className="
            hidden
            lg:block

            absolute
            top-0
            left-0
            right-0

            h-32

            bg-gradient-to-b
            from-[#020b13]/30
            to-transparent
          "
        />

        {/* ==================================================
            SUBTLE GLOBAL TINT
        ================================================== */}

        <div
          aria-hidden="true"
          className="
            hidden
            lg:block

            absolute
            inset-0

            bg-[#00101a]/10
          "
        />

        {/* ==================================================
            MOBILE / TABLET OVERLAYS
        ================================================== */}

        <div
          aria-hidden="true"
          className="
            lg:hidden

            absolute
            inset-0

            bg-gradient-to-b

            from-[#020b13]/72
            via-[#020b13]/68
            to-[#020b13]/95
          "
        />

        <div
          aria-hidden="true"
          className="
            lg:hidden

            absolute
            inset-0

            bg-gradient-to-r

            from-[#020b13]/80
            via-[#020b13]/40
            to-[#020b13]/20
          "
        />
      </div>

      {/* ==================================================
          IMAGE LOADING FALLBACK
      ================================================== */}

      {!firstImageLoaded && (
        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-[#020b13]
          "
        />
      )}

      {/* ==================================================
          HERO CONTENT WRAPPER
      ================================================== */}

      <div
        className="
          relative
          z-10

          max-w-[1440px]
          mx-auto

          min-h-[600px]
          sm:min-h-[650px]
          lg:min-h-[680px]
          xl:min-h-[720px]

          px-5
          sm:px-7
          lg:px-12
          xl:px-13
        "
      >
        <div
          className="
            flex
            flex-col
            justify-center

            min-h-[600px]
            sm:min-h-[650px]
            lg:min-h-[680px]
            xl:min-h-[720px]

            pt-12
            pb-28

            sm:pt-16
            sm:pb-32

            lg:pt-1
            lg:pb-28
          "
        >
          {/* ==================================================
              ACTIVE SLIDE CONTENT
          ================================================== */}

          <div
            key={activeSlide}
            className="
              max-w-[650px]
              lg:max-w-[660px]

              animate-[heroFade_.7s_ease-out]
            "
          >
            {/* ==================================================
                EYEBROW
            ================================================== */}

            <div
              className="
                flex
                items-center
                gap-2.5

                mb-4
                sm:mb-5
              "
            >
              <SlideIcon
                size={14}
                strokeWidth={2}
                className="
                  shrink-0
                  text-purple-400
                "
              />

              <span
                className="
                  text-[10px]
                  sm:text-[11px]

                  uppercase

                  tracking-[0.16em]

                  font-bold

                  text-gray-300
                "
              >
                {slide.eyebrow}
              </span>
            </div>

            {/* ==================================================
                HEADING
            ================================================== */}

            <h1
              id="hero-heading"
              className="
                max-w-[620px]

                text-[36px]
                min-[390px]:text-[39px]
                sm:text-[48px]
                lg:text-[52px]
                xl:text-[57px]

                leading-[1.03]
                sm:leading-[1.04]

                tracking-[-0.035em]

                font-semibold

                text-white
              "
            >
              {slide.title}
            </h1>

            {/* ==================================================
                DESCRIPTION
            ================================================== */}

            <p
              className="
                mt-5
                sm:mt-6

                max-w-[550px]

                text-[13px]
                sm:text-[15px]
                lg:text-[16px]

                leading-[1.75]

                text-gray-300
              "
            >
              {slide.description}
            </p>

            {/* ==================================================
                CTA BUTTONS
            ================================================== */}

            <div
              className="
                mt-7
                sm:mt-8

                flex
                flex-wrap
                items-center

                gap-3
              "
            >
              {/* START PROJECT */}

              <Link
                to="/contact"
                onClick={scrollTop}
                className="
                  group

                  inline-flex
                  items-center
                  justify-center

                  gap-2.5

                  px-5
                  sm:px-6

                  py-3
                  sm:py-3.5

                  rounded-lg

                  bg-white

                  text-[#06101a]

                  text-[12px]
                  sm:text-[13px]

                  font-semibold

                  shadow-lg
                  shadow-black/10

                  transition-all
                  duration-200

                  hover:bg-gray-100
                  hover:-translate-y-0.5
                "
              >
                Start a Project

                <ArrowRight
                  size={14}
                  className="
                    transition-transform
                    duration-200

                    group-hover:translate-x-0.5
                  "
                />
              </Link>

              {/* EXPLORE SERVICE */}

              <Link
                to={slide.path}
                onClick={scrollTop}
                className="
                  group

                  inline-flex
                  items-center
                  justify-center

                  gap-2

                  px-4
                  py-3

                  text-[11px]
                  sm:text-[12px]

                  font-semibold

                  text-gray-200

                  transition-colors
                  duration-200

                  hover:text-white
                "
              >
                {slide.buttonText}

                <ArrowRight
                  size={13}
                  className="
                    transition-transform
                    duration-200

                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          BOTTOM SLIDER CONTROLS
      ================================================== */}

      <div
        className="
          absolute
          z-20

          left-0
          right-0
          bottom-0
        "
      >
        <div
          className="
            max-w-[1440px]
            mx-auto

            px-5
            sm:px-7
            lg:px-12
            xl:px-16

            pb-5
            sm:pb-7
            lg:pb-8
          "
        >
          <div
            className="
              flex
              items-end
              justify-between

              gap-6
            "
          >
            {/* ==================================================
                PROGRESS INDICATORS
            ================================================== */}

            <div>
              <p
                className="
                  hidden
                  sm:block

                  mb-3

                  text-[9px]

                  uppercase
                  tracking-[0.18em]

                  font-bold

                  text-gray-500
                "
              >
                DevZore Capabilities
              </p>

              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                {slides.map((item, index) => (
                  <button
                    key={item.eyebrow}
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={`Show ${item.eyebrow}`}
                    aria-current={
                      activeSlide === index
                        ? "true"
                        : undefined
                    }
                    className={`
                      relative

                      h-[3px]

                      rounded-full

                      transition-all
                      duration-300

                      ${
                        activeSlide === index
                          ? "w-9 sm:w-12 bg-white"
                          : "w-4 sm:w-6 bg-white/25 hover:bg-white/50"
                      }
                    `}
                  />
                ))}
              </div>
            </div>

            {/* ==================================================
                PREVIOUS / NEXT
            ================================================== */}

            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous hero slide"
                className="
                  w-10
                  h-10

                  sm:w-11
                  sm:h-11

                  rounded-full

                  flex
                  items-center
                  justify-center

                  border
                  border-white/15

                  bg-black/20

                  backdrop-blur-md

                  text-gray-300

                  transition-all
                  duration-200

                  hover:bg-white
                  hover:border-white
                  hover:text-black
                "
              >
                <ArrowLeft size={17} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next hero slide"
                className="
                  w-10
                  h-10

                  sm:w-11
                  sm:h-11

                  rounded-full

                  flex
                  items-center
                  justify-center

                  border
                  border-white/15

                  bg-black/20

                  backdrop-blur-md

                  text-white

                  transition-all
                  duration-200

                  hover:bg-white
                  hover:border-white
                  hover:text-black
                "
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>

          {/* ==================================================
              DESKTOP SLIDE LABELS
          ================================================== */}

          <div
            className="
              hidden
              lg:grid

              grid-cols-4

              mt-5
              pt-4

              border-t
              border-white/10
            "
          >
            {slides.map((item, index) => {
              const active = activeSlide === index;

              return (
                <button
                  key={item.eyebrow}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to ${item.eyebrow}`}
                  className={`
                    group

                    text-left

                    pr-5

                    transition-all
                    duration-300

                    ${
                      active
                        ? "opacity-100"
                        : "opacity-40 hover:opacity-75"
                    }
                  `}
                >
                  <span
                    className="
                      block

                      text-[8px]

                      font-mono

                      text-gray-500

                      mb-1
                    "
                  >
                    0{index + 1}
                  </span>

                  <span
                    className={`
                      block

                      text-[10px]
                      xl:text-[11px]

                      font-semibold

                      transition-colors

                      ${
                        active
                          ? "text-white"
                          : "text-gray-400 group-hover:text-gray-200"
                      }
                    `}
                  >
                    {item.eyebrow
                      .toLowerCase()
                      .replace(/\b\w/g, (character) =>
                        character.toUpperCase()
                      )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ==================================================
          LOCAL HERO ANIMATION
      ================================================== */}

      <style>
        {`
          @keyframes heroFade {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-\\[heroFade_\\.7s_ease-out\\] {
              animation: none !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;