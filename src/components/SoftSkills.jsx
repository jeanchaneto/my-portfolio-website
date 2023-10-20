import FadeIn from "./FadeIn";
import { motion } from "framer-motion";
import { staggerVariants } from "@/utils/motionVariants";
import SoftSkillCard from "./SoftSkillCard";


const softSkills = [
  { icon: "/images/time.png", title: "Fast learner" },
  { icon: "/images/conceptual.png", title: "Problem Solver" },
  { icon: "/images/adaptation.png", title: "Adaptable" },
  { icon: "/images/analysis.png", title: "Attentive to detail" },
  { icon: "/images/time-management.png", title: "Time Management" },
  { icon: "/images/challenge.png", title: "Self-motivated" },
];

const SoftSkills = () => {
  return (
    <motion.section
    initial={{opacity:0}}
    whileInView={{opacity: 1, transition: {duration: 1, delayChildren: 0.5}}}
    viewport={{once: true, margin: "0px 0px -200px"}}
    className=" pt-24 sm:pt-32 pb-64 bg-page-gradient-2-responsive lg:bg-page-gradient-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center pointer-events-none">
          <FadeIn>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl mx-auto font-sora bg-gradient-to-r from-blue-400 to-emerald-400 inline-block text-transparent bg-clip-text">
              Soft Skills
            </h2>
          </FadeIn>
          <FadeIn delay="0.2">
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Blending technical expertise and soft skills{" "}
              <br className="hidden sm:block" /> for seamless digital solutions.
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
    </motion.section> 
  );
};

export default SoftSkills;
