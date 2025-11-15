import AnimatedText from "@/components/AnimatedText";
import FadeIn from "@/components/FadeIn";
import Hero3d from "@/components/Hero3d";
import TextSlideMask from "@/components/TextSlideMask";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import Head from "next/head";
import Avatar from "@/components/Avatar";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import { Divider } from "@/components/Divider";
import ServicesCta from "@/components/ServicesCta";

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

  // Featured Projects Data
  const featuredProjects = [
    {
      title: "Legionella Logbook",
      description:
        "A complete SaaS platform with web and mobile applications designed to modernise the water safety industry",
      image: "/images/projects/main-hero-dark.png",
      siteUrl: "https://legionellalogbook.com/",
      repo: "https://github.com/jeanchaneto/",
      tech: "Next.js, React native + more",
      work: "Single-handedly designed and developed the entire platform from ideation, design to deployment (front-end, back-end, mobile app).",
      challenges:
        "Simultaneously handling product development while establishing marketing strategies to promote and grow the platform.",
    },
    {
      title: "Lap Studios",
      description:
        "Next.js E-commerce website with blog and media player functionalities.",
      image: "/images/projects/lap-studios.jpg",
      siteUrl: "https://lap-studios.com/",
      repo: "https://github.com/jeanchaneto/lp-studios",
      tech: "React, Next.js, Firebase, Email.js, Wavesurfer.js, Stripe Payments, Framer Motion, TailwindCSS, MDX, Google Analytics 4",
      work: "Project solely created by myself, from design to deployment through content creation and backend implementation.",
      challenges:
        "Advanced React implementation of an audio player with waveform visualisation. Blog using MDX. Advanced Framer Motion animations.",
    },
    {
      title: "Artman Entertainment",
      description:
        "Next.js single page website for a high profile music studio with custom complex animations ",
      image: "/images/projects/artman-entertainment.jpg",
      siteUrl: "https://artman-entertainment.com/",
      repo: "https://github.com/jeanchaneto/artman-ent",
      tech: "React, Next.js, Framer Motion, TailwindCSS, Email.js",
      work: "Web site design and implementation from single logo provided by client. Deployment",
      challenges:
        "Advanced Framer Motion animations, custom UI components and multi-languages support",
    },
  ];

  // Core Technologies Data
  const coreSkills = [
    { title: "React", logo: "/images/react-color.svg" },
    { title: "Next.js", logo: "/images/next-color.svg" },
    { title: "JavaScript", logo: "/images/js.png" },
    { title: "TypeScript", logo: "/images/typescript.png" },
    { title: "Tailwind CSS", logo: "/images/tailwind.svg" },
    { title: "React Native", logo: "/images/react-color.svg" },
    { title: "Supabase", logo: "/images/supabase-logo-icon.svg" },
    { title: "Firebase", logo: "/images/firebase-color.svg" },
  ];

  // Services Preview Data
  const servicesPreviews = [
    {
      name: "SEO-Optimised React Applications with Next.js",
      description:
        "Develop SEO-friendly, performant, and responsive React web applications using Next.js, ensuring your website is not only smoothly operational but also optimised for search engines.",
      icons: ["/images/next-color.svg", "/images/react-color.svg"],
    },
    {
      name: "Enthralling React Animations",
      description:
        "Implementing captivating animations within React applications to ensure your digital platform is not just functional but also visually striking, providing an engaging user experience.",
      icons: ["/images/react-color.svg", "/images/framer-motion.svg"],
    },
    {
      name: "Full Stack Development with Next.js, Supabase & Firebase",
      description:
        "Offering full-stack solutions by combining the intuitive and powerful front-end development through React with the scalable backend capabilities of Supabase and Firebase.",
      icons: [
        "/images/next-color.svg",
        "/images/react-color.svg",
        "/images/firebase-color.svg",
        "/images/supabase-logo-icon.svg",
      ],
    },
  ];

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
              experiences with React expertise. Let's build something great
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

      {/* Featured Projects Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1, delayChildren: 0.5 },
        }}
        viewport={{ once: true, margin: "0px 0px -200px" }}
        className="pt-24 sm:pt-32 pb-64 bg-page-gradient-2-responsive lg:bg-page-gradient-2"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mx-auto font-sora bg-gradient-to-r from-sky-400 to-cyan-300 inline-block text-transparent bg-clip-text">
                Featured Projects
              </h2>
            </FadeIn>
            <FadeIn duration="1.5">
              <p className="mt-6 text-lg leading-8 text-gray-300">
                A glimpse of my recent work—where code meets creativity to build
                impactful digital solutions.
              </p>
            </FadeIn>
          </div>
          <motion.div
            variants={{
              visible: {
                transition: { staggerChildren: 0.2, delayChildren: 1 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -200px" }}
            className="mt-16 grid grid-cols-1 gap-6 min-[700px]:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl"
          >
            {featuredProjects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </motion.div>
          <FadeIn duration="1" delay="1.5">
            <div className="mt-12 text-center">
              <Link
                href="/portfolio"
                scroll={false}
                className="text-lg font-semibold text-sky-400 hover:text-sky-300 transition-colors duration-300"
              >
                View all projects <span aria-hidden="true">→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </motion.section>

      {/* Divider */}
      <Divider />

      {/* Core Technologies Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1, delayChildren: 0.5 },
        }}
        viewport={{ once: true, margin: "0px 0px -200px" }}
        className="pt-24 sm:pt-32 pb-64 bg-page-gradient-2-responsive lg:bg-page-gradient-2"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mx-auto font-sora bg-gradient-to-r from-sky-400 to-cyan-300 inline-block text-transparent bg-clip-text">
                Core Technologies
              </h2>
            </FadeIn>
            <FadeIn duration="1.5">
              <p className="mt-6 text-lg leading-8 text-gray-300">
                The powerful tools and frameworks I leverage to craft
                exceptional web experiences.
              </p>
            </FadeIn>
          </div>
          <motion.ul
            variants={{
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 1 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -200px" }}
            className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 mx-auto max-w-7xl"
          >
            {coreSkills.map((skill, i) => (
              <SkillCard key={i} {...skill} />
            ))}
          </motion.ul>
          <FadeIn duration="1" delay="1.5">
            <div className="mt-12 text-center">
              <Link
                href="/about#skills"
                scroll={false}
                className="text-lg font-semibold text-sky-400 hover:text-sky-300 transition-colors duration-300"
              >
                See full tech stack <span aria-hidden="true">→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </motion.section>

      {/* Divider */}
      <Divider />

      {/* What I Do Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1, delayChildren: 0.5 },
        }}
        viewport={{ once: true, margin: "0px 0px -200px" }}
        className="pt-24 sm:pt-32 pb-64 bg-page-gradient-2-responsive lg:bg-page-gradient-2"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mx-auto font-sora bg-gradient-to-r from-sky-400 to-cyan-300 inline-block text-transparent bg-clip-text">
                What I Do
              </h2>
            </FadeIn>
            <FadeIn duration="1.5">
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Specialized services to transform your digital vision into
                reality, from concept to deployment.
              </p>
            </FadeIn>
          </div>
          <motion.ul
            variants={{
              visible: {
                transition: { staggerChildren: 0.2, delayChildren: 1 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -200px" }}
            className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl"
          >
            {servicesPreviews.map((service, i) => (
              <ServicePreviewCard key={i} {...service} />
            ))}
          </motion.ul>
          <FadeIn duration="1" delay="1.5">
            <div className="mt-12 text-center">
              <Link
                href="/services"
                scroll={false}
                className="text-lg font-semibold text-sky-400 hover:text-sky-300 transition-colors duration-300"
              >
                Explore all services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </motion.section>

      {/* CTA Section */}
      <ServicesCta />
    </main>
  );
}

// Service Preview Card Component
const ServicePreviewCard = ({ name, description, icons }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.li
      variants={{
        hidden: { y: 48, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        },
      }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-xl border border-white/5 p-6 shadow-2xl"
    >
      {/* Background gradient */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 125, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative">
        <div className="flex h-8 gap-4">
          {icons.map((icon, i) => (
            <img src={icon} alt="" className="h-full" key={i} />
          ))}
        </div>
        <h3 className="mt-4 font-semibold text-gray-200 text-lg">{name}</h3>
        <p className="mt-2 text-gray-400 leading-relaxed">{description}</p>
      </div>
    </motion.li>
  );
};
