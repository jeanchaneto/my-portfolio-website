import { useRef } from "react";
import EducationCard from "./EducationCard";
import FadeIn from "./FadeIn";
import { motion, useScroll, useSpring } from "framer-motion";

const education = [
  {
    title:
      "JavaScript React Developer - Bachelor’s Level Diploma (European Qualification Level 6)",
    school: "OpenClassrooms",
    schoolLink: "https://openclassrooms.com/",
    timePeriod: "September 2022 - February 2023",
    content: [
      "Certified at Level 6 in the National Directory of Professional Certifications (France) and within the European Qualifications Framework.",
      "Demonstrated applied skills and proficiency through a stringent, jury-assessed evaluation.",
      "Completed a full-time 12-month course in an accelerated 6-month timeframe due to dedicated study and application.",
      ,
    ],
  },
  {
    title: "Higher National Diploma in Biological Analysis and Biotechnology",
    school: "Ecole Supérieure La Raque",
    schoolLink: "http://www.laraque.com/",
    timePeriod: "September 2003 - June 2005",
    content: [
      'French BTS ("Brevet de Technicien Supérieur") in Analytical Biotechnologies (AnaBioTech)',
      ,
    ],
  },
  {
    title: "French Scientific Baccalaureate (High School Diploma)",
    school: "Lycée de la Borde Basse",
    schoolLink: "https://borde-basse.mon-ent-occitanie.fr/",
    timePeriod: "June 2001",
    content: [],
  },
];

const Education = () => {
  const educationRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: educationRef,
    offset: ["100px end", "center start"],
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
          viewport={{ once: true, margin: "0px 0px -200px" }} className=" pt-24 sm:pt-32 pb-64 bg-page-gradient-2-responsive lg:bg-page-gradient-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center pointer-events-none">
          <FadeIn>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl mx-auto font-sora bg-gradient-to-r from-sky-400 to-cyan-300 inline-block text-transparent bg-clip-text">
              Education
            </h2>
          </FadeIn>
          <FadeIn delay="0.2">
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Dive into my educational background, where a foundation in science
              launched a self-driven journey into tech.
            </p>
          </FadeIn>
        </div>
        <div className=" flex justify-center mt-24 lg:mt-32">
          <div className=" w-7  sm:w-28 flex sm:justify-center py-12">
            {/* Progress bar */}
            <motion.div
              style={{ scaleY: scaleY }}
              ref={educationRef}
              className="  w-[1px] h-full bg-gradient-to-b from-sky-400 to-cyan-300 origin-top rounded-xl"
            />
          </div>
          <ul className=" w-full flex flex-col items-start justify-between  gap-8 ">
            {education.map((educ, i) => (
              <EducationCard
                key={i}
                title={educ.title}
                school={educ.school}
                schoolLink={educ.schoolLink}
                timePeriod={educ.timePeriod}
                content={educ.content}
              />
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
