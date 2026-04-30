import React from 'react';
import SectionTag from '../components/SectionTag';
import ProjectCard from '../components/ProjectCard';

// Images
import gulfDunes from '../assets/gulf-dunes.png';
import dweldonpaint from '../assets/weldonpaint.png';
import foodimage from '../assets/food.png';

const Projects = () => {
  const projectData = [
    {
      title: "Weldon Paints Store Management System",
      desc: "Enterprise-level MERN stack inventory and POS management system for Weldon Paints with real-time stock tracking, sales analytics, and automated reporting dashboard for business optimization.",
      image: dweldonpaint,
      tags: ["Node.js", "Express", "React", "MongoDB"],
      link: "https://hamzapaints.vercel.app/"
    },
    {
      title: "Gulf Dunes Tourism Booking Platform",
      desc: "Scalable tourism and travel booking platform offering desert safari packages, city tours, and adventure experiences with secure reservation system and modern UI/UX design.",
      image: gulfDunes,
      tags: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://www.gulfdunestourism.com/"
    },
    {
      title: "FoodDel - Online Food Delivery System",
      desc: "High-performance MERN stack food delivery application with real-time order tracking, restaurant management dashboard, secure payments, and scalable backend architecture.",
      image: foodimage,
      tags: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://food-nine-ashy.vercel.app/"
    },
    
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20"
      aria-label="Software Development Portfolio - DevZore Projects"
    >
      {/* SEO hidden heading for Google ranking */}
      <h2 className="sr-only">
        MERN Stack Projects, React JS Applications, Node.js Backend Systems, Full Stack SaaS Applications Portfolio
      </h2>

      <div className="text-center mb-16">
        <SectionTag text="Portfolio" />

        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
          Our Global Software Development Projects
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          We build <strong>MERN Stack Web Applications</strong>,{" "}
          <strong>React.js Frontend Systems</strong>, and{" "}
          <strong>Node.js Backend Solutions</strong> for startups, businesses, and enterprises worldwide.
          Our focus is on scalability, performance, and modern UI/UX design.
        </p>
      </div>

      {/* Projects Grid */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>

      {/* SEO Keyword Boost Block (Hidden for ranking only) */}
      <div className="hidden">
        <h1>MERN Stack Development Company, React JS Developer Portfolio,
        Node JS Backend Projects, Full Stack SaaS Development,
        Custom Web Application Development Services,
        E-commerce Website Development, Tourism Booking Platform Development,
        Food Delivery App Development, Enterprise Software Solutions
        </h1>
      </div>
    </section>
  );
};

export default Projects;