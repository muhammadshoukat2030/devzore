// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   MessageSquare,
//   Search,
//   Palette,
//   Code2,
//   TestTube,
//   Rocket,
//   ArrowRight,
//   CheckCircle2,
//   Users,
//   ShieldCheck,
//   Zap,
// } from "lucide-react";

// const Process = () => {
//   const [activeStep, setActiveStep] = useState(0);

//   // ======================================================
//   // DEVELOPMENT PROCESS
//   // ======================================================

//   const steps = [
//     {
//       n: "01",
//       icon: MessageSquare,
//       title: "Discovery",
//       fullTitle: "Discovery & Requirements",
//       subtitle: "Understand goals, users and requirements",
//       desc: "We begin by understanding your business, project goals, target users, important features and technical requirements before development starts.",
//       delivers: [
//         "Requirements discussion",
//         "Core feature identification",
//         "Business goals",
//         "Project scope",
//       ],
//     },
//     {
//       n: "02",
//       icon: Search,
//       title: "Planning",
//       fullTitle: "Planning & Architecture",
//       subtitle: "Define the technical foundation",
//       desc: "Once requirements are clear, we plan the application structure, technology choices, database requirements, APIs and deployment approach.",
//       delivers: [
//         "Technical approach",
//         "Application structure",
//         "Database planning",
//         "API planning",
//       ],
//     },
//     {
//       n: "03",
//       icon: Palette,
//       title: "UI/UX Design",
//       fullTitle: "UI/UX Design",
//       subtitle: "Plan the product experience",
//       desc: "Interfaces are designed around usability, responsive layouts and clear user flows, creating a practical foundation for development.",
//       delivers: [
//         "Page & screen layouts",
//         "Responsive design",
//         "UI components",
//         "User flows",
//       ],
//     },
//     {
//       n: "04",
//       icon: Code2,
//       title: "Development",
//       fullTitle: "Development",
//       subtitle: "Build the working product",
//       desc: "Frontend and backend functionality is developed using technologies suited to the project, with attention to maintainability and responsive behaviour.",
//       delivers: [
//         "Frontend development",
//         "Backend development",
//         "Database integration",
//         "API integrations",
//       ],
//     },
//     {
//       n: "05",
//       icon: TestTube,
//       title: "Testing",
//       fullTitle: "Testing & Quality Review",
//       subtitle: "Review important product flows",
//       desc: "Important application flows are reviewed before launch for functionality, responsiveness, usability and technical issues.",
//       delivers: [
//         "Functional testing",
//         "Responsive review",
//         "Browser checks",
//         "Issue fixing",
//       ],
//     },
//     {
//       n: "06",
//       icon: Rocket,
//       title: "Launch",
//       fullTitle: "Deployment & Support",
//       subtitle: "Deploy and support the product",
//       desc: "After final review, the product is deployed to the agreed environment with assistance for hosting, domains and future technical support when required.",
//       delivers: [
//         "Production deployment",
//         "Hosting setup",
//         "Domain & SSL assistance",
//         "Project handover",
//       ],
//     },
//   ];

//   // ======================================================
//   // PRINCIPLES
//   // ======================================================

//   const principles = [
//     {
//       icon: MessageSquare,
//       title: "Clear Communication",
//     },
//     {
//       icon: Users,
//       title: "Collaborative Workflow",
//     },
//     {
//       icon: ShieldCheck,
//       title: "Quality Review",
//     },
//     {
//       icon: Zap,
//       title: "Practical Delivery",
//     },
//   ];

//   const currentStep = steps[activeStep];
//   const CurrentIcon = currentStep.icon;

//   const scrollTop = () => {
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section
//       id="process"
//       aria-labelledby="process-heading"
//       className="relative overflow-hidden bg-[#f6f7f7] py-12 sm:py-14 lg:py-16"
//     >
//       {/* ==================================================
//           SUBTLE BACKGROUND
//       ================================================== */}

//       <div
//         aria-hidden="true"
//         className="
//           pointer-events-none
//           absolute inset-0
//           bg-[linear-gradient(rgba(6,25,35,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(6,25,35,0.025)_1px,transparent_1px)]
//           bg-[size:48px_48px]
//         "
//       />

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* ==================================================
//             HEADER
//         ================================================== */}

//         <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-8 lg:mb-10">

//           <div className="max-w-3xl">

//             {/* EYEBROW */}

//             <div className="flex items-center gap-2 mb-3">
//               <span className="w-7 h-[2px] bg-cyan-500" />

//               <span
//                 className="
//                   text-[9px] sm:text-[10px]
//                   font-black uppercase
//                   tracking-[0.20em]
//                   text-[#061923]/60
//                 "
//               >
//                 How We Work
//               </span>
//             </div>

//             {/* HEADING */}

//             <h2
//               id="process-heading"
//               className="
//                 max-w-[760px]
//                 text-[28px]
//                 sm:text-[36px]
//                 lg:text-[44px]
//                 xl:text-[48px]
//                 font-semibold
//                 tracking-[-0.035em]
//                 leading-[1.05]
//                 text-[#061923]
//               "
//             >
//               From idea to production,
//               <span className="block">
//                 one clear process.
//               </span>
//             </h2>

//             {/* DESCRIPTION */}

//             <p
//               className="
//                 mt-4
//                 max-w-2xl
//                 text-[12px]
//                 sm:text-[14px]
//                 leading-6
//                 sm:leading-7
//                 text-slate-600
//               "
//             >
//               A practical six-step workflow covering requirements,
//               planning, design, development, testing and deployment.
//             </p>
//           </div>

//           {/* DESKTOP CONTACT */}

//           <Link
//             to="/contact"
//             onClick={scrollTop}
//             className="
//               hidden lg:inline-flex
//               items-center justify-center gap-2
//               shrink-0

//               px-5 py-3
//               rounded-lg

//               bg-white
//               border border-slate-200
//               shadow-sm

//               text-[11px]
//               font-bold
//               text-[#061923]

//               transition-all duration-200

//               hover:bg-[#061923]
//               hover:text-white
//               hover:border-[#061923]
//               hover:-translate-y-0.5
//             "
//           >
//             Discuss Your Project
//             <ArrowRight size={13} />
//           </Link>
//         </div>

//         {/* ==================================================
//             PRINCIPLES
//         ================================================== */}

//         <div
//           className="
//             grid grid-cols-2 lg:grid-cols-4
//             bg-white
//             border border-slate-200
//             rounded-xl
//             overflow-hidden
//             shadow-[0_4px_20px_rgba(6,25,35,0.035)]
//             mb-5
//           "
//         >
//           {principles.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.title}
//                 className={`
//                   group
//                   flex items-center gap-2.5
//                   px-3 sm:px-4
//                   py-3.5

//                   transition-colors duration-200
//                   hover:bg-[#061923]

//                   ${
//                     index % 2 === 0
//                       ? "border-r border-slate-100 lg:border-r"
//                       : "lg:border-r border-slate-100"
//                   }

//                   ${index < 2 ? "border-b lg:border-b-0" : ""}
//                 `}
//               >
//                 <div
//                   className="
//                     w-8 h-8
//                     rounded-lg
//                     flex items-center justify-center
//                     shrink-0

//                     bg-[#061923]/[0.055]
//                     text-[#061923]

//                     transition-all duration-200

//                     group-hover:bg-white/10
//                     group-hover:text-cyan-300
//                   "
//                 >
//                   <Icon size={14} />
//                 </div>

//                 <span
//                   className="
//                     text-[10px] sm:text-[11px]
//                     font-bold
//                     text-[#061923]

//                     transition-colors
//                     group-hover:text-white
//                   "
//                 >
//                   {item.title}
//                 </span>
//               </div>
//             );
//           })}
//         </div>

//         {/* ==================================================
//             PROCESS STEP SELECTOR
//         ================================================== */}

//         <div
//           className="
//             grid
//             grid-cols-2
//             sm:grid-cols-3
//             lg:grid-cols-6
//             gap-2
//             mb-4
//           "
//         >
//           {steps.map((step, index) => {
//             const Icon = step.icon;
//             const active = activeStep === index;

//             return (
//               <button
//                 key={step.n}
//                 type="button"
//                 onClick={() => setActiveStep(index)}
//                 aria-pressed={active}
//                 className={`
//                   group
//                   relative
//                   min-w-0
//                   text-left
//                   p-3 sm:p-3.5
//                   rounded-xl
//                   border

//                   transition-all duration-200

//                   ${
//                     active
//                       ? `
//                         bg-[#061923]
//                         border-[#061923]
//                         shadow-[0_8px_24px_rgba(6,25,35,0.14)]
//                         -translate-y-[1px]
//                       `
//                       : `
//                         bg-white
//                         border-slate-200
//                         hover:bg-[#061923]
//                         hover:border-[#061923]
//                         hover:-translate-y-[1px]
//                       `
//                   }
//                 `}
//               >
//                 {/* TOP */}

//                 <div className="flex items-center justify-between gap-2 mb-3">

//                   <div
//                     className={`
//                       w-8 h-8
//                       rounded-lg
//                       flex items-center justify-center

//                       transition-all duration-200

//                       ${
//                         active
//                           ? "bg-white/10 text-cyan-300"
//                           : "bg-[#061923]/[0.055] text-[#061923] group-hover:bg-white/10 group-hover:text-cyan-300"
//                       }
//                     `}
//                   >
//                     <Icon size={14} />
//                   </div>

//                   <span
//                     className={`
//                       text-[9px]
//                       font-black
//                       tracking-[0.08em]

//                       transition-colors

//                       ${
//                         active
//                           ? "text-white/40"
//                           : "text-slate-400 group-hover:text-white/40"
//                       }
//                     `}
//                   >
//                     {step.n}
//                   </span>
//                 </div>

//                 {/* TITLE */}

//                 <h3
//                   className={`
//                     text-[11px] sm:text-[12px]
//                     font-bold
//                     leading-tight

//                     transition-colors

//                     ${
//                       active
//                         ? "text-white"
//                         : "text-[#061923] group-hover:text-white"
//                     }
//                   `}
//                 >
//                   {step.title}
//                 </h3>

//                 {/* SUBTITLE */}

//                 <p
//                   className={`
//                     hidden sm:block
//                     mt-1
//                     text-[8px] lg:text-[9px]
//                     leading-4

//                     transition-colors

//                     ${
//                       active
//                         ? "text-white/55"
//                         : "text-slate-500 group-hover:text-white/55"
//                     }
//                   `}
//                 >
//                   {step.subtitle}
//                 </p>

//                 {/* ACTIVE ACCENT */}

//                 {active && (
//                   <span
//                     aria-hidden="true"
//                     className="
//                       absolute
//                       bottom-0 left-3 right-3
//                       h-[2px]
//                       bg-cyan-400
//                       rounded-full
//                     "
//                   />
//                 )}
//               </button>
//             );
//           })}
//         </div>

//         {/* ==================================================
//             ACTIVE STEP DETAILS
//         ================================================== */}

//         <div
//           className="
//             bg-white
//             border border-slate-200
//             rounded-xl
//             overflow-hidden

//             shadow-[0_6px_24px_rgba(6,25,35,0.04)]

//             mb-5
//           "
//         >
//           <div className="grid lg:grid-cols-[1.08fr_0.92fr]">

//             {/* LEFT */}

//             <div className="p-4 sm:p-5 lg:p-6 lg:border-r border-slate-200">

//               <div className="flex items-start gap-3.5">

//                 {/* ICON */}

//                 <div
//                   className="
//                     w-10 h-10
//                     sm:w-11 sm:h-11
//                     rounded-xl

//                     bg-[#061923]
//                     text-white

//                     flex items-center justify-center
//                     shrink-0
//                   "
//                 >
//                   <CurrentIcon size={18} />
//                 </div>

//                 {/* TITLE */}

//                 <div className="min-w-0">

//                   <span
//                     className="
//                       text-[8px] sm:text-[9px]
//                       font-black
//                       uppercase
//                       tracking-[0.18em]
//                       text-cyan-700
//                     "
//                   >
//                     Step {currentStep.n}
//                   </span>

//                   <h3
//                     className="
//                       mt-0.5
//                       text-[16px] sm:text-[19px]
//                       font-bold
//                       tracking-[-0.02em]
//                       text-[#061923]
//                     "
//                   >
//                     {currentStep.fullTitle}
//                   </h3>

//                   <p
//                     className="
//                       mt-0.5
//                       text-[10px] sm:text-[11px]
//                       font-semibold
//                       text-slate-500
//                     "
//                   >
//                     {currentStep.subtitle}
//                   </p>
//                 </div>
//               </div>

//               {/* DESCRIPTION */}

//               <p
//                 className="
//                   mt-4
//                   max-w-xl
//                   text-[11px] sm:text-[13px]
//                   leading-[1.7]
//                   text-slate-600
//                 "
//               >
//                 {currentStep.desc}
//               </p>
//             </div>

//             {/* RIGHT */}

//             <div className="p-4 sm:p-5 lg:p-6 bg-[#fafafa]">

//               <p
//                 className="
//                   mb-3
//                   text-[8px] sm:text-[9px]
//                   font-black
//                   uppercase
//                   tracking-[0.18em]
//                   text-[#061923]/50
//                 "
//               >
//                 Typical Activities
//               </p>

//               <div className="grid grid-cols-1 min-[390px]:grid-cols-2 gap-2">
//                 {currentStep.delivers.map((item) => (
//                   <div
//                     key={item}
//                     className="
//                       group
//                       flex items-start gap-2
//                       min-w-0

//                       p-2.5
//                       rounded-lg

//                       bg-white
//                       border border-slate-200

//                       transition-all duration-200

//                       hover:bg-[#061923]
//                       hover:border-[#061923]
//                     "
//                   >
//                     <CheckCircle2
//                       size={12}
//                       className="
//                         text-cyan-600
//                         shrink-0
//                         mt-0.5

//                         transition-colors
//                         group-hover:text-cyan-300
//                       "
//                     />

//                     <span
//                       className="
//                         text-[9px] sm:text-[10px]
//                         leading-relaxed
//                         font-medium
//                         text-slate-600

//                         transition-colors
//                         group-hover:text-white
//                       "
//                     >
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* ==================================================
//               PROGRESS / NAVIGATION
//           ================================================== */}

//           <div
//             className="
//               flex items-center gap-3
//               px-4 sm:px-5
//               py-3
//               border-t border-slate-200
//             "
//           >
//             <span
//               className="
//                 text-[9px]
//                 font-bold
//                 text-slate-400
//                 whitespace-nowrap
//               "
//             >
//               {activeStep + 1} / {steps.length}
//             </span>

//             {/* PROGRESS BAR */}

//             <div className="flex-1 h-[3px] bg-slate-100 rounded-full overflow-hidden">
//               <div
//                 className="
//                   h-full
//                   bg-[#061923]
//                   rounded-full
//                   transition-all duration-300
//                 "
//                 style={{
//                   width: `${((activeStep + 1) / steps.length) * 100}%`,
//                 }}
//               />
//             </div>

//             {/* NEXT */}

//             {activeStep < steps.length - 1 ? (
//               <button
//                 type="button"
//                 onClick={() =>
//                   setActiveStep((prev) =>
//                     Math.min(prev + 1, steps.length - 1)
//                   )
//                 }
//                 className="
//                   group
//                   inline-flex items-center gap-1.5
//                   whitespace-nowrap

//                   text-[9px] sm:text-[10px]
//                   font-bold
//                   text-[#061923]

//                   transition-colors
//                   hover:text-cyan-700
//                 "
//               >
//                 Next Step

//                 <ArrowRight
//                   size={11}
//                   className="
//                     transition-transform
//                     group-hover:translate-x-0.5
//                   "
//                 />
//               </button>
//             ) : (
//               <Link
//                 to="/contact"
//                 onClick={scrollTop}
//                 className="
//                   group
//                   inline-flex items-center gap-1.5
//                   whitespace-nowrap

//                   text-[9px] sm:text-[10px]
//                   font-bold
//                   text-[#061923]

//                   transition-colors
//                   hover:text-cyan-700
//                 "
//               >
//                 Start Project

//                 <ArrowRight
//                   size={11}
//                   className="
//                     transition-transform
//                     group-hover:translate-x-0.5
//                   "
//                 />
//               </Link>
//             )}
//           </div>
//         </div>

//         {/* ==================================================
//             FLEXIBLE WORKFLOW
//         ================================================== */}

//         <div
//           className="
//             flex flex-col
//             sm:flex-row
//             sm:items-center
//             sm:justify-between

//             gap-4

//             px-4 sm:px-5
//             py-4

//             bg-white
//             border border-slate-200
//             rounded-xl
//           "
//         >
//           <p
//             className="
//               max-w-4xl
//               text-[10px] sm:text-[11px]
//               leading-relaxed
//               text-slate-500
//             "
//           >
//             <strong className="font-bold text-[#061923]">
//               Flexible workflow:
//             </strong>{" "}
//             The exact process can be adapted according to project scope,
//             existing systems, integrations and business requirements.
//           </p>

//           <Link
//             to="/contact"
//             onClick={scrollTop}
//             className="
//               group
//               inline-flex items-center
//               justify-center
//               gap-2
//               shrink-0

//               px-4 py-2.5
//               rounded-lg

//               border border-[#061923]
//               text-[#061923]

//               text-[10px]
//               font-bold

//               transition-all duration-200

//               hover:bg-[#061923]
//               hover:text-white
//             "
//           >
//             Tell Us About Your Project

//             <ArrowRight
//               size={11}
//               className="
//                 transition-transform
//                 group-hover:translate-x-0.5
//               "
//             />
//           </Link>
//         </div>

//         {/* ==================================================
//             MOBILE CONTACT CTA
//         ================================================== */}

//         <div className="lg:hidden mt-3">
//           <Link
//             to="/contact"
//             onClick={scrollTop}
//             className="
//               group
//               flex items-center
//               justify-center
//               gap-2

//               w-full
//               py-3

//               rounded-lg

//               bg-[#061923]
//               border border-[#061923]

//               text-white
//               text-[10px]
//               font-bold

//               transition-all duration-200
//               hover:bg-[#061923]
//               hover:border-[#061923]
//             "
//           >
//             Discuss Your Project

//             <ArrowRight
//               size={12}
//               className="
//                 transition-transform
//                 group-hover:translate-x-0.5
//               "
//             />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Process;