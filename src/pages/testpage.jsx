import AnimatedText from "@/components/AnimatedText";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TestPage() {
  return (
    <main className="bg-gray-950 min-h-[4000px] ">
      <div className=" max-w-7xl mx-auto flex flex-col-reverse md:flex-row  items-center py-24 relative px-6 md:px-0">
        {/* Left hero */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto pr-10">
          <FadeIn>
            <h2 className="text-base mt-6 leading-7 text-gray-400">
              Hi, I'm{" "}
              <span className="text-gray-200 font-semibold">Jean Chane-to</span>
            </h2>
          </FadeIn>

          <AnimatedText
            el={"h1"}
            duration="0.5"
            delay="0"
            stagger="0.1"
            text={"Toots"}
            className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-6xl font-sora "
          >
            I Craft Seamless Web Applications
          </AnimatedText>
          <AnimatedText
            duration="0.5"
            delay="3"
            stagger="0.01"
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            Transforming visionary ideas into vibrant, interactive digital
            experiences with React.js expertise. Let's build spomething great
            together!"
          </AnimatedText>
          <div className="mt-10 flex items-center gap-x-6">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, staggerChildren: 0.2 },
                },
              }}
              initial="hidden"
              animate="visible"
              className="flex gap-4"
            >
              <FadeIn className="h-96">
                <Link href="/contact" className=" bg-red-800 h-full block">
                  Hire me
                </Link>
              </FadeIn>
              <FadeIn
                el="Link"
                href="/services"
                className="text-sm font-semibold leading-6 text-white z-20"
              >
                Services <span aria-hidden="true">→</span>
              </FadeIn>
              <FadeIn className="bg-red-500 rounded-xl p-3" FadeIn>
                <h2>Cool</h2>
              </FadeIn>
              <FadeIn className="text-white">Delay 1</FadeIn>
              <FadeIn className="text-white">Delay 2</FadeIn>
              <FadeIn className="text-white">Delay 3</FadeIn>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, staggerChildren: 0.2 },
                },
              }}
              initial="hidden"
              animate="visible"
              className="flex gap-4"
            >
              <motion.div
                className=" text-white"
                variants={{
                  hidden: {
                    y: 40,
                  },
                  visible: {
                    y: 0,
                  },
                }}
              >
                Test 2
              </motion.div >
              <motion.div className=" text-white"
                variants={{
                  hidden: {
                    y: 40,
                  },
                  visible: {
                    y: 0,
                  },
                }}>Test 2</motion.div>
                   <motion.div className=" text-white"
                variants={{
                  hidden: {
                    y: 40,
                  },
                  visible: {
                    y: 0,
                  },
                }}>Test 2</motion.div>
                   <motion.div className=" text-white"
                variants={{
                  hidden: {
                    y: 40,
                  },
                  visible: {
                    y: 0,
                  },
                }}>Test 2</motion.div>
            </motion.div>
          </div>
        </div>
        {/* Image */}
        <div className="[mask-image:radial-gradient(95%_95%_at_50%_55%,white,transparent)]">
          <div className=" overflow-hidden rounded-xl [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-30px),transparent_100%)]">
            <img
              src="/images/hero-photo.png"
              alt="Jean Chane-to"
              className=" max-h-64 md:max-h-none"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
