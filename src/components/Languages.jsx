import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

const Languages = () => {
  return (
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
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl mx-auto font-sora bg-gradient-to-l from-red-200 via-gray-300 to-blue-400 inline-block text-transparent bg-clip-text">
              Languages
            </h2>
          </FadeIn>
          <FadeIn delay="0.2">
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Fluent in English and native in French, I confidently communicate
              at high professional and casual levels in each language.
            </p>
          </FadeIn>
        </div>
        <FadeIn delay="0.4" className="mt-12 flex gap-16 justify-center">
          <img
            src="/images/english-flag.svg"
            alt="UK flag"
            className="rounded-xl w-24 pointer-events-none"
          />

          <img
            src="/images/french-flag.svg"
            alt="French flag"
            className=" rounded-xl w-24 pointer-events-none"
          />
        </FadeIn>
      </div>
    </motion.section>
  );
};

export default Languages;
