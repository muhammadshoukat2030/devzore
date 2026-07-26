import React from 'react';
import SectionTag from '../components/SectionTag';
import ProjectCard from '../components/ProjectCard';

// Images
import gulfDunes from '../assets/gulf-dunes.webp';
import dweldonpaint from '../assets/weldonpaint.webp';
import foodimage from '../assets/food.webp';
import sarab_website_image from '../assets/sarab_website_image.webp';
import qatar_tourist_agency from '../assets/qatar_tourist_agency.webp';
import Dental_website from '../assets/Dental_website.webp';

const Projects = () => {
  const projectData = [
    {
      title: "Weldon Paints - Store & Inventory Management System",
      desc: "Enterprise-grade MERN stack inventory control and POS system built for Weldon Paints. Features real-time stock tracking, automated sales reporting, and multi-user role management.",
      image: dweldonpaint,
      alt: "Weldon Paints Store Management System POS Interface",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      link: "https://hamzapaints.vercel.app/"
    },
    {
      title: "Sarab Express - Multi-Restaurant Food Delivery Portal",
      desc: "Scalable MERN stack food ordering application featuring interactive menus, cart management, instant order status updates, and a dedicated vendor dashboard.",
      image: sarab_website_image,
      alt: "Sarab Express Online Food Ordering and Delivery Platform",
      tags: ["React", "Node.js", "Express", "MongoDB", "REST API"],
      link: "https://sarab-food-delivery.vercel.app/"
    },
    {
      title: "Prime Dental Care - Healthcare Booking & Patient Portal",
      desc: "Modern healthcare web solution designed for dental clinics. Offers online appointment scheduling, doctor profiles, service showcases, and patient inquiry management.",
      image: Dental_website,
      alt: "Prime Dental Care Clinic Website and Online Appointment System",
      tags: ["React", "Tailwind CSS", "Express", "Node.js"],
      link: "https://prime-dental-react.vercel.app/"
    },
    {
      title: "Gulf Dunes Tourism - Middle East Travel Booking Platform",
      desc: "High-converting travel platform engineered for Middle Eastern tourism. Enables seamless desert safari bookings, customized tour packages, and multi-currency inquiry flows.",
      image: gulfDunes,
      alt: "Gulf Dunes Tourism Desert Safari and Tour Booking Portal",
      tags: ["React", "Node.js", "Express", "MongoDB", "UI/UX Design"],
      link: "https://www.gulfdunestourism.com/"
    },
    {
      title: "QuickBite - On-Demand Food Delivery Web App",
      desc: "Fast and responsive web application designed for cloud kitchens and local restaurants, featuring streamlined checkout, search filtering, and mobile-first design.",
      image: foodimage,
      alt: "QuickBite Online Food Delivery App Dashboard",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://food-nine-ashy.vercel.app/"
    },
    {
      title: "Best Desert Safari Qatar - Tourism & Safari Booking Engine",
      desc: "Custom booking platform tailored for Qatar's excursion market, offering real-time reservation requests, package customization, and geotargeted landing experiences.",
      image: qatar_tourist_agency,
      alt: "Best Desert Safari Qatar Tour Agency Booking Website",
      tags: ["React", "Node.js", "Express", "MongoDB", "SEO Optimization"],
      link: "https://www.bestdesertsafariqatar.com/"
    }
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20"
      aria-label="Software Development Portfolio - DevZore Projects"
    >
      {/* Accessibility & Primary SEO Context */}
      <h2 className="sr-only">
        DevZore Portfolio - Custom MERN Stack Web Applications, Full Stack SaaS Solutions, and Enterprise Web Development
      </h2>

      <div className="text-center mb-16">
        <SectionTag text="Portfolio" />

        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
          Our Global Software Development Projects
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          We engineer scalable <strong>MERN Stack Web Applications</strong>,{" "}
          <strong>React.js Interfaces</strong>, and{" "}
          <strong>Node.js Backend Solutions</strong> for businesses, startups, and enterprises across Qatar, UAE, and worldwide.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>

      {/* Structured Hidden Context for Indexing */}
      <div className="sr-only">
        <p>
          Specializing in Enterprise POS Systems, SaaS Platforms, E-Commerce Solutions, 
          Tourism Engines, Healthcare Portals, and Custom Full-Stack Web Applications globally.
        </p>
      </div>
    </section>
  );
};

export default Projects;