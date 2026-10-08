import React, {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  Code2,
  Smartphone,
  Layers3,
} from "lucide-react";

import aidevelopment from "../assets/ai-development.webp";
import saasdevelopmentt from "../assets/saas-development.webp";
import mobiledevelopment from "../assets/mobile-development.webp";
import webdevelopment from "../assets/web-development-bg.webp";
// ======================================================
// HERO SLIDES
// ======================================================

const slides = [
  {
    eyebrow: "GENERATIVE AI DEVELOPMENT",

    title:
      "Build practical AI solutions for modern businesses.",

    description:
      "AI assistants, RAG systems and intelligent integrations designed around real business workflows.",

    buttonText:
      "Explore AI Development",

    path:
      "/generative-ai-development",

    image:
      aidevelopment,

    desktopPosition:
      "center center",

    mobilePosition:
      "72% center",

    icon:
      BrainCircuit,
  },

  {
    eyebrow: "WEB DEVELOPMENT",

    title:
      "Modern web applications built for growing businesses.",

    description:
      "Responsive websites and scalable web applications built with modern frontend and backend technologies.",

    buttonText:
      "Explore Web Development",

    path:
      "/web-development",

     image:
      webdevelopment,

    desktopPosition:
      "center center",

    mobilePosition:
      "72% center",

    icon:
      Code2,
  },

  {
    eyebrow: "MOBILE APP DEVELOPMENT",

    title:
      "Mobile experiences designed around your business.",

    description:
      "Cross-platform mobile applications with modern interfaces, APIs and practical business functionality.",

    buttonText:
      "Explore Mobile Apps",

    path:
      "/mobile-apps",

    image:
      mobiledevelopment,

    desktopPosition:
      "center center",

    mobilePosition:
      "72% center",

    icon:
      Smartphone,
  },

  {
    eyebrow: "SAAS & MVP DEVELOPMENT",

    title:
      "Turn your product idea into a working digital platform.",

    description:
      "Scalable SaaS products and startup MVPs built around your requirements, users and business goals.",

    buttonText:
      "Explore SaaS Development",

    path:
      "/saas-product-development",

    image:
      saasdevelopmentt,

    desktopPosition:
      "center center",

    mobilePosition:
      "72% center",

    icon:
      Layers3,
  },
];

// ======================================================
// CAPABILITY NAME
// ======================================================

const getCapabilityName = (
  value = ""
) => {
  return value
    .toLowerCase()
    .replace(/\b\w/g, (character) =>
      character.toUpperCase()
    );
};

// ======================================================
// HERO
// ======================================================

const Hero = () => {
  const [
    activeSlide,
    setActiveSlide,
  ] = useState(0);

  const [
    firstImageLoaded,
    setFirstImageLoaded,
  ] = useState(false);

  // ====================================================
  // PRELOAD IMAGES
  // ====================================================

  useEffect(() => {
    slides.forEach((slide) => {
      const image = new Image();

      image.src = slide.image;
    });
  }, []);

  // ====================================================
  // AUTO SLIDER
  // ====================================================

  useEffect(() => {
    const interval =
      window.setInterval(() => {
        setActiveSlide(
          (current) =>
            (current + 1) %
            slides.length
        );
      }, 6500);

    return () => {
      window.clearInterval(
        interval
      );
    };
  }, []);

  // ====================================================
  // CONTROLS
  // ====================================================

  const nextSlide = () => {
    setActiveSlide(
      (current) =>
        (current + 1) %
        slides.length
    );
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) =>
        (current -
          1 +
          slides.length) %
        slides.length
    );
  };

  const goToSlide = (
    index
  ) => {
    setActiveSlide(index);
  };

  // ====================================================
  // SCROLL TOP
  // ====================================================

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const slide =
    slides[activeSlide];

  const SlideIcon =
    slide.icon;

  return (
    <section
      aria-labelledby="hero-heading"
      className="
        relative
        isolate
        w-full
        overflow-hidden

        bg-[#020b13]
        text-white

        min-h-[405px]

        sm:min-h-[500px]
        md:min-h-[540px]

        lg:min-h-[610px]
        xl:min-h-[640px]
      "
    >
      {/* =================================================
          BACKGROUND SLIDER
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          overflow-hidden
        "
      >
        {slides.map(
          (
            item,
            index
          ) => {
            const active =
              activeSlide ===
              index;

            return (
              <div
                key={
                  item.image
                }
                className={`
                  absolute
                  inset-0

                  transition-all
                  duration-[1100ms]

                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  ${
                    active
                      ? "opacity-100 scale-100 translate-x-0"
                      : "opacity-0 scale-[1.035] translate-x-[1.5%]"
                  }
                `}
              >
                {/* MOBILE IMAGE */}

                <img
                  src={item.image}
                  alt=""
                  loading={
                    index === 0
                      ? "eager"
                      : "lazy"
                  }
                  fetchPriority={
                    index === 0
                      ? "high"
                      : "auto"
                  }
                  decoding="async"
                  onLoad={() => {
                    if (
                      index === 0
                    ) {
                      setFirstImageLoaded(
                        true
                      );
                    }
                  }}
                  className="
                    absolute
                    inset-0

                    h-full
                    w-full

                    object-cover

                    lg:hidden
                  "
                  style={{
                    objectPosition:
                      item.mobilePosition,
                  }}
                />

                {/* DESKTOP IMAGE */}

                <img
                  src={item.image}
                  alt=""
                  loading={
                    index === 0
                      ? "eager"
                      : "lazy"
                  }
                  fetchPriority={
                    index === 0
                      ? "high"
                      : "auto"
                  }
                  decoding="async"
                  className="
                    absolute
                    inset-0

                    hidden

                    h-full
                    w-full

                    object-cover

                    lg:block
                  "
                  style={{
                    objectPosition:
                      item.desktopPosition,
                  }}
                />
              </div>
            );
          }
        )}

        {/* =================================================
            DESKTOP LEFT GRADIENT
        ================================================= */}

        <div
          className="
            absolute
            inset-0

            hidden
            lg:block

            bg-gradient-to-r

            from-[#020b13]
            from-[0%]

            via-[#020b13]/95
            via-[31%]

            to-[#020b13]/5
            to-[71%]
          "
        />

        {/* =================================================
            DESKTOP BOTTOM GRADIENT
        ================================================= */}

        <div
          className="
            absolute
            inset-0

            hidden
            lg:block

            bg-gradient-to-t

            from-[#020b13]/80
            via-transparent
            to-[#020b13]/10
          "
        />

        {/* =================================================
            DESKTOP TINT
        ================================================= */}

        <div
          className="
            absolute
            inset-0

            hidden
            lg:block

            bg-[#00101a]/10
          "
        />

        {/* =================================================
            MOBILE OVERLAY
        ================================================= */}

        <div
          className="
            absolute
            inset-0

            lg:hidden

            bg-gradient-to-r

            from-[#020b13]/96
            via-[#020b13]/82
            to-[#020b13]/42
          "
        />

        <div
          className="
            absolute
            inset-0

            lg:hidden

            bg-gradient-to-b

            from-[#020b13]/35
            via-[#020b13]/18
            to-[#020b13]/92
          "
        />
      </div>

      {/* =================================================
          IMAGE FALLBACK
      ================================================= */}

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

      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1440px]

          px-5
          sm:px-7

          lg:px-11
          xl:px-14
        "
      >
        <div
          className="
            flex

            min-h-[405px]
            sm:min-h-[500px]
            md:min-h-[540px]

            lg:min-h-[610px]
            xl:min-h-[640px]

            items-start

            pt-[82px]
            min-[380px]:pt-[86px]
            min-[430px]:pt-[90px]

            pb-[90px]

            sm:pt-[94px]
            sm:pb-[105px]

            md:pt-[98px]

            lg:items-center
            lg:pt-3
            lg:pb-[104px]
          "
        >
          {/* =================================================
              ACTIVE CONTENT
          ================================================= */}

          <div
            key={activeSlide}
            className="
              w-full

              max-w-[610px]

              animate-[heroText_.68s_ease-out]
            "
          >
            {/* EYEBROW */}

            <div
              className="
                mb-2

                flex
                items-center

                gap-2
              "
            >
              <SlideIcon
                size={13}
                strokeWidth={2}
                className="
                  shrink-0

                  text-[#22bdca]
                "
              />

              <span
                className="
                  text-[8px]

                  min-[360px]:text-[8.5px]
                  min-[390px]:text-[9px]

                  sm:text-[10px]

                  font-bold

                  uppercase

                  tracking-[0.17em]

                  text-slate-200
                "
              >
                {slide.eyebrow}
              </span>
            </div>

            {/* =================================================
                TITLE
            ================================================= */}

            <h1
              id="hero-heading"
              className="
                max-w-[590px]

                text-[27px]

                min-[350px]:text-[29px]
                min-[390px]:text-[31px]

                sm:text-[38px]
                md:text-[42px]

                lg:text-[46px]
                xl:text-[50px]

                leading-[1.055]

                sm:leading-[1.045]

                tracking-[-0.038em]

                font-semibold

                text-white
              "
            >
              {slide.title}
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                mt-2.5

                max-w-[540px]

                text-[10.5px]

                min-[390px]:text-[11px]

                sm:text-[13px]
                lg:text-[14px]

                leading-[1.62]

                sm:leading-[1.7]

                text-slate-300
              "
            >
              {slide.description}
            </p>

            {/* =================================================
                CTA
            ================================================= */}

            <div
              className="
                mt-4

                sm:mt-5

                flex
                flex-wrap

                items-center

                gap-2
                sm:gap-3
              "
            >
              {/* START PROJECT */}

              <Link
                to="/contact"
                onClick={
                  scrollTop
                }
                className="
                  group

                  inline-flex

                  min-h-[38px]

                  items-center
                  justify-center

                  gap-2

                  rounded-lg

                  bg-white

                  px-4
                  sm:px-5

                  py-2

                  sm:py-2.5

                  text-[9px]

                  min-[380px]:text-[9.5px]

                  sm:text-[11.5px]

                  font-semibold

                  text-[#06101a]

                  shadow-[0_10px_35px_rgba(0,0,0,0.15)]

                  transition-all
                  duration-200

                  hover:-translate-y-0.5
                  hover:bg-slate-100
                "
              >
                Start a Project

                <ArrowRight
                  size={12}
                  className="
                    transition-transform
                    duration-200

                    group-hover:translate-x-0.5
                  "
                />
              </Link>

              {/* EXPLORE */}

              <Link
                to={slide.path}
                onClick={
                  scrollTop
                }
                className="
                  group

                  inline-flex

                  min-h-[38px]

                  items-center
                  justify-center

                  gap-1.5

                  rounded-lg

                  px-2
                  sm:px-4

                  py-2

                  text-[8px]

                  min-[360px]:text-[8.5px]
                  min-[390px]:text-[9px]

                  sm:text-[11px]

                  font-semibold

                  text-slate-200

                  transition-all
                  duration-200

                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                {slide.buttonText}

                <ArrowRight
                  size={11}
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

      {/* =================================================
          BOTTOM
      ================================================= */}

      <div
        className="
          absolute

          bottom-0
          left-0
          right-0

          z-20
        "
      >
        {/* =================================================
            MOBILE MOVING CAPABILITIES
        ================================================= */}

        <div
          className="
            lg:hidden

            bg-gradient-to-b

            from-transparent
            via-[#020b13]/45
            to-[#020b13]/95
          "
        >
          <div
            className="
              px-5
              sm:px-7

              pb-2.5
              sm:pb-3
            "
          >
            {/* LABEL */}

            <p
              className="
                mb-1.5

                text-[7px]

                font-bold

                uppercase

                tracking-[0.19em]

                text-slate-300
              "
            >
              DevZore Capabilities
            </p>

            {/* =================================================
                RIGHT -> LEFT CONTINUOUS MARQUEE
            ================================================= */}

            <div
              className="
                hero-mobile-marquee

                relative

                w-full

                overflow-hidden
              "
            >
              <div
                className="
                  hero-marquee-track

                  flex
                  w-max

                  items-center

                  whitespace-nowrap
                "
              >
                {/* FIRST COPY */}

                <div
                  className="
                    flex
                    shrink-0

                    items-center

                    gap-7

                    pr-7
                  "
                >
                  {slides.map(
                    (
                      item,
                      index
                    ) => {
                      const Icon =
                        item.icon;

                      const active =
                        activeSlide ===
                        index;

                      return (
                        <button
                          key={`first-${item.eyebrow}`}
                          type="button"
                          onClick={() =>
                            goToSlide(
                              index
                            )
                          }
                          className={`
                            inline-flex
                            shrink-0

                            items-center

                            gap-1.5

                            text-[8px]

                            font-semibold

                            transition-colors
                            duration-300

                            ${
                              active
                                ? "text-white"
                                : "text-slate-400"
                            }
                          `}
                        >
                          <Icon
                            size={9}
                            className={
                              active
                                ? "text-[#22bdca]"
                                : "text-slate-500"
                            }
                          />

                          {getCapabilityName(
                            item.eyebrow
                          )}
                        </button>
                      );
                    }
                  )}
                </div>

                {/* SECOND COPY */}

                <div
                  aria-hidden="true"
                  className="
                    flex
                    shrink-0

                    items-center

                    gap-7

                    pr-7
                  "
                >
                  {slides.map(
                    (
                      item,
                      index
                    ) => {
                      const Icon =
                        item.icon;

                      const active =
                        activeSlide ===
                        index;

                      return (
                        <div
                          key={`second-${item.eyebrow}`}
                          className={`
                            inline-flex
                            shrink-0

                            items-center

                            gap-1.5

                            text-[8px]

                            font-semibold

                            ${
                              active
                                ? "text-white"
                                : "text-slate-400"
                            }
                          `}
                        >
                          <Icon
                            size={9}
                            className={
                              active
                                ? "text-[#22bdca]"
                                : "text-slate-500"
                            }
                          />

                          {getCapabilityName(
                            item.eyebrow
                          )}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>

            {/* =================================================
                MOBILE ARROWS + INDICATORS
            ================================================= */}

            <div
              className="
                mt-2

                flex
                items-center

                gap-1.5
              "
            >
              <button
                type="button"
                onClick={
                  previousSlide
                }
                aria-label="Previous hero slide"
                className="
                  flex

                  h-7
                  w-7

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/15

                  bg-black/15

                  text-slate-300

                  transition-all
                  duration-200

                  active:bg-white
                  active:text-black
                "
              >
                <ArrowLeft
                  size={11}
                />
              </button>

              <button
                type="button"
                onClick={
                  nextSlide
                }
                aria-label="Next hero slide"
                className="
                  flex

                  h-7
                  w-7

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/15

                  bg-black/15

                  text-white

                  transition-all
                  duration-200

                  active:bg-white
                  active:text-black
                "
              >
                <ArrowRight
                  size={11}
                />
              </button>

              <div
                className="
                  ml-1

                  flex
                  items-center

                  gap-1.5
                "
              >
                {slides.map(
                  (
                    item,
                    index
                  ) => (
                    <button
                      key={`indicator-${item.eyebrow}`}
                      type="button"
                      onClick={() =>
                        goToSlide(
                          index
                        )
                      }
                      aria-label={`Show ${item.eyebrow}`}
                      aria-current={
                        activeSlide ===
                        index
                          ? "true"
                          : undefined
                      }
                      className={`
                        h-[2px]

                        rounded-full

                        transition-all
                        duration-300

                        ${
                          activeSlide ===
                          index
                            ? "w-6 bg-white"
                            : "w-3 bg-white/25"
                        }
                      `}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            DESKTOP BOTTOM
        ================================================= */}

        <div
          className="
            hidden
            lg:block
          "
        >
          <div
            className="
              mx-auto

              max-w-[1440px]

              px-11
              xl:px-14

              pb-5
            "
          >
            {/* TOP ROW */}

            <div
              className="
                flex

                items-end
                justify-between

                gap-6
              "
            >
              {/* INDICATORS */}

              <div>
                <p
                  className="
                    mb-2

                    text-[8px]

                    font-bold

                    uppercase
                    tracking-[0.18em]

                    text-slate-400
                  "
                >
                  DevZore Capabilities
                </p>

                <div
                  className="
                    flex
                    items-center

                    gap-1.5
                  "
                >
                  {slides.map(
                    (
                      item,
                      index
                    ) => (
                      <button
                        key={`desktop-indicator-${item.eyebrow}`}
                        type="button"
                        onClick={() =>
                          goToSlide(
                            index
                          )
                        }
                        aria-label={`Show ${item.eyebrow}`}
                        className={`
                          h-[2.5px]

                          rounded-full

                          transition-all
                          duration-300

                          ${
                            activeSlide ===
                            index
                              ? "w-10 bg-white"
                              : "w-5 bg-white/30 hover:bg-white/60"
                          }
                        `}
                      />
                    )
                  )}
                </div>
              </div>

              {/* DESKTOP ARROWS */}

              <div
                className="
                  flex
                  items-center

                  gap-2
                "
              >
                <button
                  type="button"
                  onClick={
                    previousSlide
                  }
                  aria-label="Previous hero slide"
                  className="
                    flex

                    h-9
                    w-9

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/20

                    bg-black/25

                    text-slate-200

                    backdrop-blur-md

                    transition-all
                    duration-200

                    hover:border-white
                    hover:bg-white
                    hover:text-black
                  "
                >
                  <ArrowLeft
                    size={14}
                  />
                </button>

                <button
                  type="button"
                  onClick={
                    nextSlide
                  }
                  aria-label="Next hero slide"
                  className="
                    flex

                    h-9
                    w-9

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/20

                    bg-black/25

                    text-white

                    backdrop-blur-md

                    transition-all
                    duration-200

                    hover:border-white
                    hover:bg-white
                    hover:text-black
                  "
                >
                  <ArrowRight
                    size={14}
                  />
                </button>
              </div>
            </div>

            {/* =================================================
                DESKTOP STATIC CAPABILITIES
            ================================================= */}

            <div
              className="
                mt-3

                grid
                grid-cols-4

                border-t
                border-white/[0.10]

                pt-3
              "
            >
              {slides.map(
                (
                  item,
                  index
                ) => {
                  const active =
                    activeSlide ===
                    index;

                  return (
                    <button
                      key={`desktop-${item.eyebrow}`}
                      type="button"
                      onClick={() =>
                        goToSlide(
                          index
                        )
                      }
                      aria-label={`Go to ${item.eyebrow}`}
                      className={`
                        group

                        pr-5

                        text-left

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
                          mb-0.5
                          block

                          font-mono

                          text-[7px]

                          text-slate-500
                        "
                      >
                        0
                        {index + 1}
                      </span>

                      <span
                        className={`
                          block

                          text-[9px]
                          xl:text-[10px]

                          font-semibold

                          ${
                            active
                              ? "text-white"
                              : "text-slate-400 group-hover:text-slate-200"
                          }
                        `}
                      >
                        {getCapabilityName(
                          item.eyebrow
                        )}
                      </span>
                    </button>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          CSS / ANIMATION
      ================================================= */}

      <style>
        {`
          /* ===============================================
             HERO TEXT
          =============================================== */

          @keyframes heroText {
            0% {
              opacity: 0;
              transform: translateY(9px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* ===============================================
             MOBILE CAPABILITIES MARQUEE

             Continuous:
             RIGHT -> LEFT
          =============================================== */

          @keyframes heroCapabilityMarquee {
            from {
              transform: translate3d(
                0,
                0,
                0
              );
            }

            to {
              transform: translate3d(
                -50%,
                0,
                0
              );
            }
          }

          .hero-marquee-track {
            animation:
              heroCapabilityMarquee
              18s
              linear
              infinite;

            will-change: transform;

            backface-visibility:
              hidden;

            transform:
              translateZ(0);
          }

          /* ===============================================
             MOBILE EDGE FADE
          =============================================== */

          .hero-mobile-marquee {
            -webkit-mask-image:
              linear-gradient(
                to right,
                transparent 0%,
                #000 5%,
                #000 95%,
                transparent 100%
              );

            mask-image:
              linear-gradient(
                to right,
                transparent 0%,
                #000 5%,
                #000 95%,
                transparent 100%
              );
          }

          /* ===============================================
             SMALL PHONE
          =============================================== */

          @media (max-width: 349px) {
            #hero-heading {
              font-size: 25px;
              line-height: 1.06;
            }

            .hero-marquee-track {
              animation-duration:
                16s;
            }
          }

          /* ===============================================
             SHORT MOBILE SCREENS

             Navbar ke neeche content safe rahega,
             aur CTA / bottom bar collision nahi hogi.
          =============================================== */

          @media (
            max-width: 639px
          ) and (
            max-height: 700px
          ) {
            #hero-heading {
              font-size: 26px;
            }
          }

          /* ===============================================
             DESKTOP - MOBILE MARQUEE NOT USED
          =============================================== */

          @media (min-width: 1024px) {
            .hero-marquee-track {
              animation: none;
            }
          }

          /* ===============================================
             REDUCED MOTION
          =============================================== */

          @media (
            prefers-reduced-motion:
              reduce
          ) {
            .animate-\\[heroText_\\.68s_ease-out\\] {
              animation:
                none !important;
            }

            .hero-marquee-track {
              animation:
                none !important;

              transform:
                none !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;