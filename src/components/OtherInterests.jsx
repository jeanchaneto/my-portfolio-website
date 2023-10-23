import Image from "next/image";
import FadeIn from "./FadeIn";
import { motion } from "framer-motion";
import otherInterestsPhoto from "../../public/images/producing-music.jpg"

const OtherInterests = () => {
  return (
    <motion.section
    initial={{ opacity: 0 }}
    whileInView={{
      opacity: 1,
      transition: { duration: 1, delayChildren: 0.5 },
    }}
    viewport={{ once: true, margin: "0px 0px -200px" }} className=" pt-24 sm:pt-32 pb-64 bg-page-gradient-2-responsive lg:bg-page-gradient-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <div className="text-base leading-7 text-gray-700 lg:max-w-lg pointer-events-none">
            <FadeIn>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl mx-auto font-sora bg-gradient-to-r from-sky-200 to-sky-400 inline-block text-transparent bg-clip-text ">
                Other Interests
              </h2>
            </FadeIn>
            <FadeIn delay="0.2">
              <p className="mt-6 text-lg text-gray-400 ">
                I am passionate about electronic music. I DJ and produce at
                professional level utilising{" "}
                <a
                  href="https://www.apple.com/logic-pro/"
                  target="_blank"
                  className="text-sky-600 hover:opacity-50 transition-opacity duration-300 pointer-events-auto"
                >
                  Logic Pro
                </a>{" "}
                and{" "}
                <a
                  href="https://www.ableton.com/en/"
                  target="_blank"
                  className="text-sky-600 hover:opacity-50 transition-opacity duration-300 pointer-events-auto"
                >
                  Ableton Live
                </a>{" "}
                software. In my free time, I love going fishing or surfing.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
      <div className="lg:pr-4">
        <FadeIn className="relative mt-24  mx-auto  px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-3xl lg:px-8 lg:pb-8 xl:px-10 xl:pb-10  aspect-video">
          {/* background light */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 0.8 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full bg-hero-glow transform blur-2xl"
          />
          <Image
            className="absolute  inset-0 h-full w-full object-cover rounded-3xl pointer-events-none"
            src={otherInterestsPhoto}
            alt="Jean Chane-to producing music"
          />
        </FadeIn>
      </div>
    </motion.section>
  );
};

export default OtherInterests;
