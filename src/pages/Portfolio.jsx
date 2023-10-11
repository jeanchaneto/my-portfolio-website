import ProjectCard from "@/components/ProjectCard";

const Portfolio = () => {
  const projects = [
    {
      title: "Lap Studios",
      description:
        "A Next.js E-commerce website with blog and media player functionalities.",
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
        "Next.js single page website for a high profile music studio",
      image: "/images/projects/artman-entertainment.jpg",
      siteUrl: "https://artman-entertainment.com/",
      repo: "https://github.com/jeanchaneto/artman-ent",
      tech: "React, Next.js, Framer Motion, TailwindCSS, Email.js",
      work: "Web site design and implementation from single logo provided by client. Deployment",
      challenges:
        "Advanced Framer Motion animations and custom UI components",
    },
  ];

  return (
    <main>
      <div className="pt-6 sm:pt-12 pb-48">
        <div className="mx-auto max-w-[1920px] px-6 lg:px-24">
          <div className=" py-24 lg:py-32 mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
              Portfolio
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Dive into my portfolio: a collection of projects blending code and
              creativity to build practical digital solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
