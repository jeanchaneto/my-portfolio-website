import AnimatedText from "@/components/AnimatedText";
import FadeIn from "@/components/FadeIn";
import Hero3d from "@/components/Hero3d";
import TextSlideMask from "@/components/TextSlideMask";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Home() {
  const [textSlideActive, setTextSlideActive] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => setTextSlideActive(true), 4600);
      return () => clearTimeout(timeout);
    }
  }, [isInView]);

  return (
    <main className="bg-gray-950 min-h-screen ">
      <div className="flex items-center  min-[964px]:h-screen py-24 lg:py-32 relative">
        <div className=" max-w-7xl mx-auto flex flex-col-reverse min-[964px]:flex-row  items-center relative px-6 lg:px-8 ">
          {/* Ligth */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 0.5, scale: 1 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 4, delay: 1 }}
            duration="6"
            className="absolute top-12  -translate-x-1/4 min-[964px]:translate-x-0 min-[964px]:right-[24px] w-[300px] h-[400px]  min-[964px]:w-[500px] min-[964px]:h-[650px] bg-gradient-radial from-sky-500 to-90% to-transparent rounded-full filter blur-xl  animate-blob  z-0 "
          ></motion.div>
          {/* Left hero */}
          <div
            ref={ref}
            className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto pr-10 pt-12 pb-24 min-[964px]:pt-0 min-[964px]:pb-0"
          >
            <div className="">
              <FadeIn view="0" from="12" duration="0.5">
                <h2 className="text-base mt-6 leading-7 text-gray-300 font-thin tracking-widest  ">
                  HI, I'M{" "}
                  <span className=" bg-gradient-to-r from-sky-400 to-cyan-300 inline-block text-transparent bg-clip-text font-normal ">
                    JEAN
                  </span>
                </h2>
              </FadeIn>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl font-sora sm:whitespace-nowrap ">
              <AnimatedText el="span" delay="0.75">
                I Craft
              </AnimatedText>{" "}
              <span className="overflow-hidden">
                {textSlideActive && <TextSlideMask>Seamless</TextSlideMask>}
              </span>
              <br />{" "}
              <AnimatedText el="span" delay="1.5">
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
            <motion.div
              variants={{
                hidden: { opacity: 0, y: "100%" },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    delay: 4,
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
                  href="/contact"
                  className="rounded-xl bg-sky-900 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 ring-1 ring-transparent hover:ring-sky-300
                transition-all duration-300  
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                >
                  Hire me
                </Link>
              </motion.div>
              <motion.div whileTap={{ scale: 0.8 }}>
                <Link
                  href="/services"
                  className="text-sm font-semibold rounded-xl bg-transparent hover:bg-sky-950/60 ring-1 ring-transparent hover:ring-sky-400
                transition-all duration-300  
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 px-4 py-3 text-white z-20"
                >
                  Services <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
          {/* Image */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: "50px" },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 4,
                  delay: 0,
                  type: "spring",
                  bounce: "0.1",
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className=" shrink-0 relative"
          >
            {" "}
            <div className=" pointer-events-none select-none overflow-hidden rounded-xl [mask-image:_linear-gradient(to_top,transparent_0,_black_28px,_black_calc(100%-30px),transparent_100%)] z-20">
              <img
                src="/images/hero-photo.png"
                alt="Jean Chane-to"
                className=" max-h-[480px]  min-[964px]:max-h-[700px] min-w-[350px] object-cover "
              />
            </div>
            <div className="absolute bottom-1/3 translate-x-[150px] right-1/2 h-[200px] translate-y-[130px] min-[964px]:h-[300px] min-[964px]:w-[350px] min-[964px]:translate-x-[180px] min-[964px]:translate-y-[180px] cursor-pointer ">
              <Hero3d />
            </div>
          </motion.div>{" "}
        </div>
      </div>
    </main>
  );
}
