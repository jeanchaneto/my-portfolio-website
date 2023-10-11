const ProjectCard = () => {
  return (
    <div className=" border border-white/10 hover:border-white/20 transition-all duration-300 rounded-xl shadow backdrop-blur-xl ">
      <div className="p-6">
        <a href="#" className="relative">
          <img
            className="rounded-xl object-cover w-full border border-white/10 shadow-gray-400/10 transition-all duration-300 shadow hover:shadow-xl hover:shadow-gray-400/10  "
            src="/images/projects/lap-studios.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="px-6 pb-6">
        <a href="#">
          <h3 className="mb-2 text-xl font-bold tracking-tight font-sora text-gray-200">
            LAP Studios
          </h3>
        </a>
        <p className="mb-3  text-gray-400">
          A Next.js E-commerce website with blog and media player
          functionalities.
        </p>
        <div className="flex gap-6 text-gray-300">
          <a href="#" target="_blank" className="flex gap-2 align-center" >
            <p>Visit site</p>
            <img src="/images/arrow-up-right.svg" alt="" className="h-4 self-center" />
          </a>
          <a href="" target="_blank" className="flex gap-2 align-center" >
            <p>See repo</p>
            <img src="/images/github-logo.svg" alt="" className="h-4 self-center" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
