import FadeIn from "./FadeIn";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { staggerVariants } from "@/utils/motionVariants";
import { useEffect, useState } from "react";

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

  { logo: "/images/framer-motion.svg", title: "Framer Motion" },
  { logo: "/images/firebase-color.svg", title: "Firebase" },
  { logo: "/images/seo.svg", title: "Best practices" },
  { logo: "/images/ux-ui.svg", title: "Best practices" },
  { logo: "/images/open-ai.svg", title: "AI Prompt Engineering" },
  { logo: "/images/figma.svg", title: "Figma" },
  { logo: "/images/supabase-logo-icon.svg", title: "Supabase" },
  { logo: "/images/mui-logo.svg", title: "Material UI" },
  { logo: "/images/shadcn-logo.svg", title: "Shadcn UI" },
];

const Skills = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {scrollPosition > 0 ? (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1, delayChildren: 0.5 },
          }}
          viewport={{ once: true, margin: "0px 0px -200px" }}
          className=" pt-24 sm:pt-32 pb-64 bg-page-gradient-2-responsive lg:bg-page-gradient-2"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-xl text-center pointer-events-none">
              <FadeIn>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl mx-auto font-sora bg-gradient-to-r from-sky-400 to-cyan-300 inline-block text-transparent bg-clip-text">
                  Skills
                </h2>
              </FadeIn>
              <FadeIn delay="0.2">
                <p className="mt-6 text-lg leading-8 text-gray-400">
                  Through diverse technologies,
                  <br className="hidden sm:block" /> I convert ideas into
                  polished digital experiences.
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
        </motion.section>
      ) : (
        <div className="h-[900px]"></div>
      )}
    </>
  );
};

export default Skills;
