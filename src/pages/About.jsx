import AnimatedText from "@/components/AnimatedText";
import { Divider } from "@/components/Divider";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import FadeIn from "@/components/FadeIn";
import Languages from "@/components/Languages";
import OtherInterests from "@/components/OtherInterests";
import Skills from "@/components/Skills";
import SoftSkills from "@/components/SoftSkills";
import { fadeInVariants } from "@/utils/motionVariants";
import { motion } from "framer-motion";

const About = () => {
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
              <motion.div
                // variants={{ hidden: "", visible: "" }}
                transition={{ staggerChildren: 0.1 }}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  variants={fadeInVariants}
                  className="mt-6 text-lg leading-8 text-gray-300"
                >
                  <p>
                    My journey into web development was not a linear path, but a
                    fascinating exploration of connecting dots between different
                    spheres of my life: from rigorous scientific analysis to
                    producing professional electronic music.
                  </p>
                </motion.div>
                <motion.div
                  variants={fadeInVariants}
                  className="mt-3 text-lg leading-8 text-gray-300"
                >
                  <p>
                    Transitioning from a career as a water hygiene consultant to
                    a React.js developer sparked by a genuine desire to build
                    meaningful digital spaces, notably exemplified in running my
                    own music e-commerce platform that blends my coding skills
                    and my entrepreneurial spirit with my musical artistry.
                  </p>
                </motion.div>
                <motion.div
                  variants={fadeInVariants}
                  className="mt-3 mb-10 text-lg leading-8 text-gray-300"
                >
                  <p>
                    My journey reflects a steadfast commitment to learning and
                    adaptability across varied fields.
                  </p>
                </motion.div>
              </motion.div>
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
      <Skills />
      <Divider />
      <SoftSkills />
      <Divider />
      <Experience />
      <Divider />
      <Education />
      <Divider />
      {/* Languages */}
      <Languages />
      <Divider />
      <OtherInterests />
    </main>
  );
};

export default About;
