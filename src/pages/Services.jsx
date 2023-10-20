import AnimatedText from "@/components/AnimatedText";
import FadeIn from "@/components/FadeIn";
import ServicesHeroImage from "@/components/ServicesHeroImage";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    name: "SEO-Optimised React Applications with Next.js",
    description:
      "Develop SEO-friendly, performant, and responsive React web applications using Next.js, ensuring your website is not only smoothly operational but also optimised for search engines, enhancing your online visibility and user engagement.",
    icons: [
      "/images/next-color.svg",
      "/images/react-color.svg",
      "/images/next-auth.png",
    ],
  },
  {
    name: "Dynamic React Web Applications.",
    description:
      "Crafting highly interactive, responsive, and user-friendly React web applications, tailored to deliver an optimal user experience and meet your specific business requirements",
    icons: [
      "/images/react-color.svg",
      "/images/vite-color.svg",
      "/images/cra-color.svg",
      "/images/react-router-color.svg",
    ],
  },
  {
    name: "Full Stack Development with React & Firebase",
    description:
      "Offering full-stack solutions by combining the intuitive and powerful front-end development through React with the scalable backend capabilities of Firebase, crafting applications that are both powerful and efficient.",
    icons: [
      "/images/react-color.svg",
      "/images/firebase-color.svg",
      "/images/firestore-color.svg",
      "/images/cloud-storage-color.svg",
    ],
  },
  {
    name: "Enthralling React Animations.",
    description:
      " Implementing captivating animations within React applications to ensure your digital platform is not just functional but also visually striking, providing an engaging user experience.",
    icons: ["/images/react-color.svg", "/images/framer-motion.svg"],
  },
  {
    name: "Flexible E-commerce Solutions with Stripe or WordPress/WooCommerce.",
    description:
      "Feature-rich platforms with Stripe for robust payment experiences, or opting for quick, cost-effective store setups with WordPress and WooCommerce, each tailored to suit varied business needs and budget scopes.",
    icons: [
      "/images/stripe-color.png",
      "/images/paypal-color.png",
      "/images/woo-color.svg",
    ],
  },
  {
    name: "WordPress Development & Customisation.",
    description:
      "Customise and develop responsive WordPress sites tailored to your needs, whether it’s a blog, portfolio, or a business site, ensuring both aesthetic appeal and functional efficiency.",
    icons: [
      "/images/wordpress.png",
      "/images/elementor-color.svg",
      "/images/php-color.svg",
    ],
  },
];

const serviceCardsVariants = {
  hidden: {
    y: 48,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut", delayChildren: 0.1 },
  },
};

const gradientVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

export default function Services() {
  return (
    <main className=" py-24 sm:py-32 relative isolate ">
      {/* Hero section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 pointer-events-none">
        <div className="mx-auto max-w-2xl sm:text-center">
          <AnimatedText
            el="h1"
            className="mt-2 text-3xl font-bold font-sora tracking-tight text-gray-100 sm:text-4xl"
          >
            Services
          </AnimatedText>
          <FadeIn duration="2.5">
            <p className="mt-6 text-lg leading-8 text-gray-300">
              From SEO-optimised React applications to vibrant user interfaces,
              I provide diverse solutions to transform your digital concepts
              into responsive and engaging realities.
            </p>
          </FadeIn>
        </div>
      </section>
      {/* Hero image */}
      <ServicesHeroImage />
      {/* Services section */}
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:mt-48 lg:px-8 pb-24 pointer-events-none">
        <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 font-sora sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 lg:gap-y-16">
          {services.map((service, i) => (
            <motion.li
              variants={serviceCardsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -200px" }}
              
              key={i}
              className="relative pl-9 border border-white/5 rounded-xl p-6 "
            >
              {/* Background gradient */}
              <motion.div
                variants={gradientVariants}
                className="absolute z-0 inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,125,233,0.15),transparent)]"
              />
              <div className="h-8 flex gap-4 pointer-events-none relative">
                {service.icons.map((icon, i) => (
                  <img src={icon} alt="" className="h-full" key={i} />
                ))}
              </div>
              <h2 className="mt-4 font-semibold text-gray-200 pointer-events-none relative">
                {service.name}
              </h2>{" "}
              <p className="mt-2 text-gray-400 pointer-events-none relative">
                {service.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
      {/* CTA Section */}
      <section>
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:pb-48 lg:px-8">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: "25%" },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeInOut", delayChildren: 0.5, staggerChildren: 0.2 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -200px" }}
            className="relative isolate overflow-hidden  px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 border border-white/5 "
          >
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
            {/* <motion.svg
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 4, ease: "easeInOut" },
                },
              }}
              viewBox="0 0 1024 1024"
              className="absolute blur-xl left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                fillOpacity="0.8"
              />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#0EA5E9" />
                  <stop offset={1} stopColor="#1D4ED8" />
                </radialGradient>
              </defs>
            </motion.svg> */}
            <motion.div className=" absolute inset-0 bg-page-gradient rotate-180 z-0" />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
