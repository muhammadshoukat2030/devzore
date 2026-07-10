import React from 'react';
import SectionTag from '../components/SectionTag';
import { Helmet } from "react-helmet-async";

const Process = () => {

  const steps = [
    {
      n: "1",
      t: "Discovery & Planning",
      d: "We begin with a detailed consultation to understand your business goals, target audience, and technical requirements. This helps us define a clear roadmap for your web or mobile application."
    },
    {
      n: "2",
      t: "Project Planning & Strategy",
      d: "We create a structured development plan including timeline, tech stack (MERN, Next.js, etc.), and milestones to ensure efficient project execution."
    },
    {
      n: "3",
      t: "Design & Prototyping",
      d: "Our team designs modern UI/UX and develops your product using scalable technologies like React, Node.js, and cloud-based architecture."
    },
    {
      n: "4",
      t: " Development & Testing",
      d: "We perform QA testing, fix bugs, optimize performance, and deploy your application on secure cloud infrastructure with SEO optimization."
    },
    {
      n: "5",
      t: "Launch & Ongoing Support",
      d: "After launch, we provide continuous support, updates, and scaling solutions to grow your business globally."
    }
  ];

  return (
    <>
      {/* 🔥 ADVANCED SEO */}
      {/* <Helmet>
        <title>Software Development Process | DevZore Global Tech Company</title>

        <meta
          name="description"
          content="Learn DevZore's professional software development process including planning, UI/UX design, MERN stack development, testing, deployment, and ongoing support for global clients."
        />

        <meta
          name="keywords"
          content="software development process, web development workflow, mobile app development process, MERN stack development, SaaS development lifecycle, agile development company, outsource software development"
        />

        <meta name="robots" content="index, follow" /> */}

        {/* Open Graph */}
        {/* <meta property="og:title" content="DevZore Development Process" />
        <meta property="og:description" content="Step-by-step process for building high-performance web and mobile apps." />
        <meta property="og:type" content="website" />
      </Helmet> */}

      {/* 🔥 STRUCTURED DATA (VERY IMPORTANT) */}
      {/* <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "Software Development Process",
          "description": "Professional development workflow for web and mobile applications",
          "step": steps.map(step => ({
            "@type": "HowToStep",
            "name": step.t,
            "text": step.d
          }))
        })}
      </script> */}

      <section id="process" className="py-20 md:py-24 px-4 md:px-6 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <SectionTag text="PROCESS" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
            Our Development Process
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We follow a structured and scalable development process to build high-performance web applications,
            mobile apps, and SaaS platforms for startups and enterprises worldwide.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative space-y-16">

          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-purple-500/30 to-transparent"></div>

          {steps.map((step, i) => (
            <div key={i} className="relative pl-16 group">

              {/* Step Number */}
              <div className="absolute left-0 w-12 h-12 rounded-md bg-purple-600 flex items-center justify-center font-bold text-lg text-white shadow-lg">
                {step.n}
              </div>

              {/* Content */}
              <div className="transition-all duration-300 group-hover:translate-x-2">
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-purple-400">
                  {step.t}
                </h2>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {step.d}
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* 🔥 SEO CONTENT (HIGH IMPACT) */}
        <div className="mt-24 max-w-4xl mx-auto text-center space-y-6">

          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Professional Software Development Workflow for Global Clients
          </h2>

          <p className="text-gray-400">
            At DevZore, we follow an agile and scalable software development process that ensures high-quality results.
            Our workflow includes requirement analysis, UI/UX design, development using modern technologies like React,
            Node.js, and Next.js, followed by testing and deployment.
          </p>

          <p className="text-gray-400">
            We focus on building SEO-friendly, high-performance applications that help businesses grow online.
            Our process is optimized for startups, SaaS platforms, and enterprise solutions.
          </p>

          <p className="text-gray-400">
            If you are looking to outsource software development or hire expert developers,
            DevZore provides reliable and cost-effective services for international clients.
          </p>

        </div>

      </section>
    </>
  );
};

export default Process;