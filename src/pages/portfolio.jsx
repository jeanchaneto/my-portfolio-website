import AnimatedText from "@/components/AnimatedText";
import FadeIn from "@/components/FadeIn";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import Head from "next/head";

const Portfolio = () => {
  const projects = [
    {
      title: "Lap Studios",
      description:
        "Next.js E-commerce website with blog and media player functionalities.",
      image: "/images/projects/lap-studios.jpg",
      siteUrl: "https://lap-studios.com/",
      repo: "https://github.com/jeanchaneto/lp-studios",
      tech: "React, Next.js, Firebase, Email.js, Wavesurfer.js, Stripe Payments, Framer Motion, TailwindCSS, MDX",
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

  return (
    <main className=" relative isolate min-h-screen min-w-screen bg-page-gradient" >
      <Head>
        <title>Jean Chane-to | Portfolio: React & Web Development Projects</title>
        <meta
          name="description"
          content="Dive into my portfolio to see dynamic React projects that drive user engagement. Each solution showcases my commitment to quality and innovation."
        />
        <meta
          property="og:title"
          content="Jean Chane-to | Portfolio: React & Web Development Projects"
        />
        <meta
          property="og:description"
          content="Dive into my portfolio to see dynamic React projects that drive user engagement. Each solution showcases my commitment to quality and innovation."
        />
      </Head>
      <div className="pt-6 sm:pt-12 pb-48 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className=" py-24 lg:py-32 mx-auto max-w-2xl text-center pointer-events-auto">
            <AnimatedText el="h1" className="text-3xl font-bold font-sora tracking-tight text-gray-100 sm:text-4xl">
              Portfolio
            </AnimatedText>
            <FadeIn duration="1.5">
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Dive into my portfolio: a collection of projects blending code and
              creativity to build practical digital solutions.
            </p></FadeIn>
          </div>
          <motion.div 
          variants={{visible: {
            transition: { staggerChildren: 0.2, delayChildren: 1 },
          }}}
         
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 min-[700px]:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
