import ProjectCard from "@/components/ProjectCard";

const Portfolio = () => {
  const projects = [{}, {}, {}, {}, {}];

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
              <ProjectCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
