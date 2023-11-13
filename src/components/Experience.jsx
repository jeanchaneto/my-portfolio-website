import React, { useRef } from 'react'
import ExperienceCard from './ExperienceCard'
import FadeIn from './FadeIn';
import { useScroll, useSpring, motion } from 'framer-motion';

const experiences = [
    {
      title: "Web Developper / Music Producer / Founder at",
      company: "LAP Studios",
      companyLink: "https://lap-studios.com",
      timePeriod: "January 2021 - Present",
      content: [
        "Single-handedly drove the technological and strategic development of LAP Studios, navigating through web development, music production, and overall business operations.",
        "Conceptualised, developed, and refactored an e-commerce platform from WordPress to Next.js, showcasing adaptability and proficiency across diverse tech stacks.",
        "Orchestrated and implemented SEO and marketing strategies that markedly amplified web presence and elevated customer engagement.",
        "Independently managed several music production projects, liaising with high-profile artists, and securing successful releases with renowned music labels.",
      ],
    },
    {
      title:
        "Senior Water Hygiene consultant, William Martin Compliance, London, UK at",
      company: "William Martin",
      companyLink: "https://wmcompliance.co.uk/",
      timePeriod: "July 2015 - May 2022",
      content: [
        "Conducted and supervised comprehensive Legionella risk assessments and audits across a variety of water distribution systems and cooling towers.",
        "Water sampling for analytical purposes",
        "Engaged with clients to identify issues and collaborated on implementing remedial actions, ensuring health and safety compliance and customer satisfaction.",
        "Produced detailed reports using Word and developed schematic diagrams utilising AutoCAD",
        "Maintained and updated AutoCAD templates, ensuring accurate and current resources for all project requirements.",
      ],
    },
    {
      title: "Legionella risk assessor, HSL Compliance, London, UK at",
      company: "HSL Compliance",
      companyLink: " https://hslcompliance.com/",
      timePeriod: "April 2009 - June 2015",
      content: [
        "Performed Legionella risk assessments and audits on diverse water distribution networks, ensuring safety and compliance with relevant regulations.",
        "Handled water sampling for analysis",
        "Communicated effectively with clients, providing advice to identify issues and coordinating to implement remedial actions that assured regulatory compliance and safe operations.",
      ],
    },
    {
      title: "Various Positions",
      company: "",
      companyLink: null,
      timePeriod: "June 2005 - May 2009",
      content: [
        "Lab Technician in Microbiological Analysis: Conducted detailed microbiological analyses on food products, ensuring safety and compliance with regulatory standards.",
        "Retail Industry: Engaged in customer service, inventory management, and sales operations.",
        "Catering Industry: Contributed to food preparation, event setup, and client interaction.",
        "Workshop: Participated in building technical containers for the aeronautical industry.",
      ],
    },
  ];

const Experience = () => {
    const experienceRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: experienceRef,
      offset: ["100px end", "80% start"],
    });
    const scaleY = useSpring(scrollYProgress, {
      stiffness: 150,
      damping: 40,
      restDelta: 0.001,
    });
  return (
    <motion.section
    initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1, delayChildren: 0.5 },
          }}
          viewport={{ once: true, margin: "0px 0px -200px" }}
    className=" pt-24 sm:pt-32 pb-64 bg-page-gradient-2-responsive lg:bg-page-gradient-2">
    <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
      <div className="mx-auto max-w-xl text-center">
        <FadeIn>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl mx-auto font-sora bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 inline-block text-transparent bg-clip-text pointer-events-none">
            Experience
          </h2>
        </FadeIn>
        <FadeIn delay="0.2">
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Discover my path from science to tech,
            <br className="hidden sm:block" /> enriched by creative
            exploration.
          </p>
        </FadeIn>
      </div>
      <div className=" flex justify-center mt-24 lg:mt-32">
        {/* Progress bar */}
        <div className=" w-7  sm:w-28 flex sm:justify-center py-12">
          <motion.div
            style={{ scaleY: scaleY }}
            ref={experienceRef}
            className="  w-[1px] h-full bg-gradient-to-b from-sky-600 to-cyan-500 origin-top rounded-xl"
          />
        </div>
        <ul className=" w-full flex flex-col items-start justify-between  gap-8  relative max-w-6xl ">
          {experiences.map((experience, i) => (
            <ExperienceCard
              key={i}
              title={experience.title}
              company={experience.company}
              companyLink={experience.companyLink}
              timePeriod={experience.timePeriod}
              content={experience.content}
            />
          ))}
        </ul>
      </div>
    </div>
  </motion.section>
  )
}

export default Experience