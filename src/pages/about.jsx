import AnimatedText from "@/components/AnimatedText";
import { Divider } from "@/components/Divider";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Languages from "@/components/Languages";
import OtherInterests from "@/components/OtherInterests";
import Skills from "@/components/Skills";
import SoftSkills from "@/components/SoftSkills";
import { fadeInVariants } from "@/utils/motionVariants";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import profilePhoto from "../../public/images/profile-photo.jpeg"

const About = () => {

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []); 

  return (
    <main className="relative min-h-screen" >
     <Head>
        <title>Jean Chane-to | About: Professional Journey & Skills</title>
        <meta
          name="description"
          content="Discover my story and what drives me as a web developer. I'm passionate about creating impactful web solutions and mastering cutting-edge technologies."
        />
        <meta
          property="og:title"
          content="About Jean Chane-to | Professional Journey & Skills"
        />
        <meta
          property="og:description"
          content="Discover my story and what drives me as a web developer. I'm passionate about creating impactful web solutions and mastering cutting-edge technologies."
        />
      </Head>
      {/* Hero Sections */}
      <div className=" pt-6 sm:pt-12 bg-page-gradient ">
        <div className=" pt-24 lg:pt-32 pb-64 ">
          <section className="mx-auto max-w-7xl px-6 lg:px-8 2xl:px-0 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-16">
           <Image  
           src={profilePhoto}
           priority
           alt="Jean Chane-to"
           className="object-cover object-top rounded-3xl max-w-[400px] md:max-w-[324px] max-h-[600px] shrink  w-full brightness-75 border border-white/10 pointer-events-none opacity-0 shadow mb-10"
           onLoadingComplete={(img) => img.classList.add("animate-image-load")}
           />
            <div className="mx-auto max-w-2xl lg:mx-0  shrink">
              <AnimatedText
                el="h1"
                className="text-4xl font-bold tracking-tight text-gray-100 sm:text-4xl font-sora pointer-events-none"
              >
                About me
              </AnimatedText>
              <motion.div
                transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
                initial="hidden"
                animate="visible"
                className="pointer-events-none"
              >
                <motion.div
                  variants={fadeInVariants}
                  className="mt-6 text-lg leading-8 text-gray-300 "
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
                    Transitioning from a career in health & safety to
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
                <motion.a
                type="submit"
                whileTap={{ scale: 0.8 }}
                whileHover={{
                  borderColor: "rgba(255, 255, 255, 0.5)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  duration: 0.3,
                }}
                  href="https://www.dropbox.com/scl/fi/cu5ru2xc887v92k8bue85/CV-Jean-Chane-to-EN-FR.zip?rlkey=84chh36wfrsxzgyc8glhp4au6&dl=1"
                  className="text-sm font-semibold leading-6 text-gray-100 z-20 flex gap-2 items-center border border-white/20 rounded-xl w-fit py-2.5 px-3 
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 "
                >
                  <p>Download my CV</p>{" "}
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <motion.path
                    initial={{pathLength: 0}}
                    animate={{pathLength: 1}}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                     delay:1
                    }}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                    />
                  </motion.svg>
                </motion.a>
              </motion.div>
            </div>
          </section>
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
      <Languages />
      <Divider />
      <OtherInterests />
    
    </main>
  );
};

export default About;
