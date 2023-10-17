import AnimatedText from "@/components/AnimatedText";
import { Divider } from "@/components/Divider";
import EducationCard from "@/components/EducationCard";
import ExperienceCard from "@/components/ExperienceCard";
import FadeIn from "@/components/FadeIn";
import SkillCard from "@/components/SkillCard";
import SoftSkillCard from "@/components/SoftSkillCard";
import { motion, useScroll, useSpring } from "framer-motion";
import { Fade } from "hamburger-react";
import Image from "next/image";
import { useRef } from "react";

const skills = [
  { logo: "/images/html.png", title: "HTML 5" },
  { logo: "/images/css.png", title: "CSS" },
  { logo: "/images/js.png", title: "Javascript" },
  { logo: "/images/react-color.svg", title: "React" },
  { logo: "/images/next-color.svg", title: "Next.js" },
  { logo: "/images/git-color.svg", title: "Git" },
  { logo: "/images/redux.svg", title: "Redux" },
  { logo: "/images/react-router-color.svg", title: "React Router" },
  { logo: "/images/jest-color.svg", title: "Jest" },
  {
    logo: "/images/react-testing-library-color.png",
    title: "React Testing Library",
  },
  { logo: "/images/typescript.png", title: "Typescript" },
  { logo: "/images/tailwind.svg", title: "Tailwind CSS" },
  { logo: "/images/sass.svg", title: "Sass" },
  { logo: "/images/framer-motion.svg", title: "Framer Motion" },
  { logo: "/images/firebase-color.svg", title: "Firebase" },
  { logo: "/images/seo.svg", title: "Best practices" },
  { logo: "/images/ux-ui.svg", title: "Best practices" },
  { logo: "/images/open-ai.svg", title: "AI Prompt Engineering" },
  { logo: "/images/figma.svg", title: "Figma" },
  { logo: "/images/wordpress.png", title: "Wordpress" },
  { logo: "/images/woo-color.svg", title: "Woo Commerce" },
  { logo: "/images/elementor-color.svg", title: "Elementor" },
  { logo: "/images/ga.svg", title: "Google Analytics" },
  { logo: "/images/google-ads.png", title: "Google Ads" },
];

const softSkills = [
  { icon: "/images/time.png", title: "Fast learner" },
  { icon: "/images/conceptual.png", title: "Problem Solver" },
  { icon: "/images/adaptation.png", title: "Adaptable" },
  { icon: "/images/analysis.png", title: "Attentive to detail" },
  { icon: "/images/time-management.png", title: "Time Management" },
  { icon: "/images/challenge.png", title: "Self-motivated" },
];

const experiences = [
  {
    title: "CEO / Web Developper / Music Producer at",
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
    companyLink: "",
    timePeriod: "June 2005 - May 2009",
    content: [
      "Lab Technician in Microbiological Analysis: Conducted detailed microbiological analyses on food products, ensuring safety and compliance with regulatory standards.",
      "Retail Industry: Engaged in customer service, inventory management, and sales operations.",
      "Catering Industry: Contributed to food preparation, event setup, and client interaction.",
      "Workshop: Participated in building technical containers for the aeronautical industry.",
    ],
  },
];

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

const cardsVariants = {
  hidden: {
    y: 24,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const staggerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const About = () => {
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
    <main>
      {/* Hero Sections */}
      <div className=" pt-6 sm:pt-12 ">
        <div className=" py-24 sm:py-32 ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 2xl:px-0">
            <section className="mx-auto max-w-2xl lg:mx-0">
              <AnimatedText
                el="h1"
                className="text-4xl font-bold tracking-tight text-gray-100 sm:text-4xl font-sora"
              >
                About me
              </AnimatedText>
              <FadeIn duration="0.6" delay="0.5">
                <FadeIn className="mt-6 text-lg leading-8 text-gray-300">
                  <p>
                    My journey into web development was not a linear path, but a
                    fascinating exploration of connecting dots between different
                    spheres of my life: from rigorous scientific analysis to
                    producing professional electronic music.
                  </p>
                </FadeIn>
                <FadeIn className="mt-3 text-lg leading-8 text-gray-300">
                  <p>
                    Transitioning from a career as a water hygiene consultant to
                    a React.js developer sparked by a genuine desire to build
                    meaningful digital spaces, notably exemplified in running my
                    own music e-commerce platform that blends my coding skills
                    and my entrepreneurial spirit with my musical artistry.
                  </p>
                </FadeIn>
                <FadeIn className="mt-3 mb-10 text-lg leading-8 text-gray-300">
                  <p>
                    My journey reflects a steadfast commitment to learning and
                    adaptability across varied fields.
                  </p>
                </FadeIn>
              </FadeIn>
              <motion.div
                whileTap={{ scale: 0.95 }}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1,
                      delay: 0.7,
                      type: "spring",
                      bounce: "0.5",
                    },
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-100 z-20 flex gap-2 items-center border border-white/20 rounded-xl w-fit py-2.5 px-3 hover:bg-sky-950/60 ring-1 ring-transparent hover:ring-sky-400
                transition-all duration-300  
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 "
                >
                  <p>Download my CV</p>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                    />
                  </svg>
                </a>
              </motion.div>
            </section>
          </div>
        </div>
        <Divider />
      </div>

      {/* Skills Section */}
      <section className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl sm:text-center">
            <FadeIn>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl mx-auto font-sora bg-gradient-to-r from-sky-400 to-cyan-300 inline-block text-transparent bg-clip-text">
                Skills
              </h2>
            </FadeIn>
            <FadeIn delay="0.2">
              <p className="mt-6 text-lg leading-8 text-gray-400">
                Through diverse technologies,
                <br className="hidden sm:block" /> I convert ideas into polished
                digital experiences.
              </p>
            </FadeIn>
          </div>
          <motion.ul
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -400px" }}
            className=" pt-24 sm:pt-32 mx-auto truncate grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
          >
            {skills.map((skill, i) => (
              <SkillCard logo={skill.logo} title={skill.title} key={i} />
            ))}
          </motion.ul>
        </div>
      </section>
      <Divider />
      {/* Soft Skills Section */}
      <section className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl sm:text-center">
            <FadeIn>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl mx-auto font-sora bg-gradient-to-r from-blue-400 to-emerald-400 inline-block text-transparent bg-clip-text">
                Soft Skills
              </h2>
            </FadeIn>
            <FadeIn delay="0.2">
              <p className="mt-6 text-lg leading-8 text-gray-400">
                Blending technical expertise and soft skills{" "}
                <br className="hidden sm:block" /> for seamless digital
                solutions.
              </p>
            </FadeIn>
          </div>
          <motion.ul
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -400px" }}
            className=" pt-24 sm:pt-32 mx-auto truncate grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {softSkills.map((skill, i) => (
              <SoftSkillCard icon={skill.icon} title={skill.title} key={i} />
            ))}
          </motion.ul>
        </div>
      </section>
      <Divider />
      {/* Experience Section */}
      <section className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto max-w-xl sm:text-center">
            <FadeIn>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl mx-auto font-sora bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 inline-block text-transparent bg-clip-text">
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
      </section>
      <Divider />
      {/* Education Section */}
      <section className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl sm:text-center">
            <FadeIn>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl mx-auto font-sora bg-gradient-to-r from-sky-400 to-cyan-300 inline-block text-transparent bg-clip-text">
                Education
              </h2>
            </FadeIn>
            <FadeIn delay="0.2">
              <p className="mt-6 text-lg leading-8 text-gray-400">
                Dive into my educational background, where a foundation in
                science launched a self-driven journey into tech.
              </p>
            </FadeIn>
          </div>
          <ul className=" w-full flex flex-col items-start justify-between mt-24 gap-8 lg:mt-32">
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
      </section>
      <Divider />
      {/* Languages */}
      <section className=" py-24 sm:py-32 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl sm:text-center">
            <FadeIn>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl mx-auto font-sora bg-gradient-to-l from-red-300 via-gray-300 to-blue-400 inline-block text-transparent bg-clip-text">
                Languages
              </h2>
            </FadeIn>
            <FadeIn delay="0.2">
              <p className="mt-6 text-lg leading-8 text-gray-400">
                Fluent in English and native in French, I confidently
                communicate at high professional and casual levels in each
                language.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay="0.4" className="mt-6 flex gap-16 justify-center">
            <div className="border border-white/10 rounded-xl shadow-2xl inset-4  ">
              <img
                src="/images/english-flag.svg"
                alt="UK flag"
                className="w-24 opacity-50 bg-gray-950 "
              />
            </div>
            <div className="border border-white/10 rounded-xl shadow-2xl inset-4  ">
              <img
                src="/images/french-flag.svg"
                alt="French flag"
                className="w-24 opacity-50 bg-gray-950 "
              />
            </div>
          </FadeIn>
        </div>
      </section>
      <Divider />
      <section className=" pt-24 sm:pt-32 pb-60">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-4">
              <FadeIn className="relative overflow-hidden rounded-3xl  px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 border border-white/10">
                <Image
                  className="absolute inset-0 h-full w-full object-cover  "
                  src="/images/producing-music.jpg"
                  alt="Jean Chane-to producing music"
                  width={510}
                  height={280}
                />
              </FadeIn>
            </div>
            <div>
              <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                <FadeIn>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl mx-auto font-sora bg-gradient-to-r from-sky-200 to-sky-400 inline-block text-transparent bg-clip-text">
                    Other Interests
                  </h2>
                </FadeIn>
                <FadeIn delay="0.2">
                  <p className="mt-6 text-lg text-gray-400">
                    I am passionate about electronic music and produce at
                    professional level utilising{" "}
                    <a
                      href="https://www.apple.com/logic-pro/"
                      target="_blank"
                      className="text-sky-600 hover:opacity-50 transition-opacity duration-300"
                    >
                      Logic Pro
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.ableton.com/en/"
                      target="_blank"
                      className="text-sky-600 hover:opacity-50 transition-opacity duration-300"
                    >
                      Ableton Live
                    </a>{" "}
                    software. In my free time, I love going fishing or surfing.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
