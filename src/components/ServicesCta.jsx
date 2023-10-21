import { motion } from "framer-motion";
import Link from "next/link";

const ServicesCta = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl pt-24 pb-24 sm:px-6 sm:pb-32 lg:pb-48 lg:px-8">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: "25%" },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                ease: "easeInOut",
                delayChildren: 0.5,
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -200px" }}
          className="relative isolate overflow-hidden  px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 border border-white/5 services-cta"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 1, duration: 7 },
            }}
            viewport={{ once: true, margin: "0px 0px -200px" }}
          >
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
          </motion.div>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeInOut" },
              },
            }}
            className="mx-auto max-w-2xl text-3xl font-bold tracking-tight  sm:text-4xl text-gray-200"
          >
            Let's talk about your project
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeInOut" },
              },
            }}
            className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300"
          >
            Every great project begins with a conversation. Share your vision,
            and let’s bring it to life together.
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeInOut" },
              },
            }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link
              href="/contact"
              className="rounded-xl bg-sky-900 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 z-20
            transition-all duration-300  relative focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
            >
              Get started
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 1, duration: 2 },
            }}
            viewport={{ once: true, margin: "0px 0px -200px" }}
            className=" absolute inset-0 bg-services-cta-gradient rotate-180 z-0"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCta;
