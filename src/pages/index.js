import AnimatedText from "@/components/AnimatedText";
import FadeIn from "@/components/FadeIn";
import Hero3d from "@/components/Hero3d";
import TextSlideMask from "@/components/TextSlideMask";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Head from "next/head";
import Avatar from "@/components/Avatar";

export default function Home() {
  const [textSlideActive, setTextSlideActive] = useState(false);
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => setTextSlideActive(true), 4600);
      return () => clearTimeout(timeout);
    }
  }, [isInView]);

  return (
    <main className="bg-gray-950 min-h-screen bg-page-gradient">
      <Head>
        <title>Jean Chane-to |Full Stack Developer</title>
        <meta
          name="description"
          content="Specializing in the development of seamless, interactive, and responsive full stack web applications using React and Next.js."
        />
        <meta
          property="og:title"
          content="Jean Chane-to | Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Specializing in the development of seamless, interactive, and responsive full stack web applications. Available for collaboration and freelance projects."
        />
      </Head>
      <div className="flex items-center   py-24 lg:py-48 ">
        <div className=" max-w-7xl mx-auto flex flex-col sm:gap-16 min-[964px]:flex-row  items-center relative px-6 lg:px-8 ">
          {/* Left hero */}
          <div
            ref={ref}
            className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto  pt-12 pb-12 min-[964px]:pt-0 min-[964px]:pb-0 flex-1  "
          >
            <div className=" pointer-events-none ">
              <FadeIn
                view="0"
                from="12"
                duration="0.5"
                className="flex gap-2 items-center"
              >
                <Avatar />
                <h2 className="text-base  leading-7 text-gray-300 font-thin tracking-widest  ">
                  HI, I'M{" "}
                  <span className=" bg-gradient-to-r from-sky-400 to-cyan-300 inline-block text-transparent bg-clip-text font-normal ">
                    JEAN
                  </span>
                </h2>
              </FadeIn>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl font-sora min-[350px]whitespace-nowrap ">
              <AnimatedText el="span" delay="0.2">
                I Craft
              </AnimatedText>{" "}
              <span className="overflow-hidden whitespace-nowrap">
                {textSlideActive && <TextSlideMask>Seamless </TextSlideMask>}
              </span>
              <br />{" "}
              <AnimatedText el="span" delay="1.2">
                Web Applications
              </AnimatedText>
            </h1>
            <AnimatedText
              delay="2.7"
              stagger={0.01}
              className="mt-6 text-lg leading-8 text-gray-300 tracking-wide"
            >
              Transforming visionary ideas into vibrant, interactive digital
              experiences with React.js expertise. Let's build something great
              together!
            </AnimatedText>
            {/* CTA Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: "100%" },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    delay: 3.9,
                    type: "spring",
                    bounce: "0.5",
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 flex items-center gap-x-6"
            >
              <motion.div whileTap={{ scale: 0.8 }}>
                <Link
                  scroll={false}
                  href="/contact"
                  className="rounded-xl bg-sky-900 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-700
                transition-all duration-300  
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                >
                  Hire me
                </Link>
              </motion.div>
              <motion.div whileTap={{ scale: 0.8 }}>
                <Link
                  scroll={false}
                  href="/services"
                  className="text-sm font-semibold rounded-xl bg-transparent hover:bg-sky-950/60 
                transition-all duration-300  
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 px-4 py-3 text-white z-20"
                >
                  Services <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
          {/* Right Section */}

          <motion.div
            variants={{
              hidden: { opacity: 0, y: "50px" },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 6,
                  delay: 2,
                  type: "spring",
                  bounce: "0.2",
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className=" shrink-0 relative w-[280px] h-[280px] min-[360px]:w-[320px] min-[360px]:h-[320px]  sm:w-[440px] sm:h-[440px]"
          >
            {/* Ligth */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 0.3, scale: 1.1 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 3, delay: 0.5 }}
              className=" absolute inset-0  w-[100%] h-[100%]  bg-gradient-radial from-sky-500 to-90% to-transparent rounded-full filter blur-xl  z-0 "
            ></motion.div>
            <Hero3d />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
