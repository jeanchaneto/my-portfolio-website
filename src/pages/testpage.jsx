import AnimatedText from "@/components/AnimatedText";
import Experience from "@/components/Experience";
import FadeIn from "@/components/FadeIn";
import Skills from "@/components/Skills";
import SoftSkills from "@/components/SoftSkills";
import TextSlideMask from "@/components/TextSlideMask";
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
          <TextSlideMask>TEXTSLIDE</TextSlideMask>
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
              </motion.div>
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
              </motion.div>
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
              </motion.div>
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
              </motion.div>
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


          <div className=" h-[40rem]">
      <div className=" h-3/4 md:h-1/2 w-3/4  relative max-w-sm">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-sky-500 to-blue-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-0 mt-4 relative z-50">
            Meteors because they're cool
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            I don't know what to write so I'll just paste something cool here.
            One more sentence because lorem ipsum is just unacceptable.
          </p>

          <button className="border px-4 py-1 rounded-lg !text-sm  border-gray-500 text-gray-300">
            Explore &rarr;
          </button>

        </div>
      </div>
    </div>
         
        </div>
      </section>
    </main>
  );
}
