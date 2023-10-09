export default function Home() {
  return (
    <main>
      <div className="relative h-screen ">
        <div className="mx-auto max-w-[1900px] lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-24 h-full ">
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-base mt-24 font-semibold leading-7 text-cyan-500">
                React.JS Front End Developper
              </h2>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl font-sora whitespace-nowrap">
                Hi, I'm{" "}
                <span className=" bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-300 inline-block text-transparent bg-clip-text">
                  Jean Chane-to
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Delighted to meet you in my digital domain! As a passionate web
                developer specializing in React.js, I bring ideas to digital
                life with meticulous attention to detail and an insatiable
                appetite for learning. Let's create something exceptional
                together!
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-cyan-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                >
                  Hire me
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Download my CV <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0  max-w-5xl">
            <img
              className="aspect-[3/2] w-full object-cover lg:object-center lg:absolute lg:inset-0 lg:aspect-auto lg:h-full z-20 "
              src="/images/hero-photo.png"
              alt=""
            />
            <div className="absolute top-0 -left-4 w-[600px] h-[600px] bg-gradient-radial from-cyan-500 to-90% to-transparent rounded-full filter blur-xl  opacity-50 animate-blob z-0  "></div>
            <div className="absolute top-0 -right-4 w-[600px] h-[600px] bg-gradient-radial from-indigo-500 to-90% to-transparent rounded-full filter blur-xl opacity-50 animate-blob animation-delay-2000 z-0  "></div>
            <div className="absolute -bottom-4 left-20 w-[600px] h-[600px] bg-gradient-radial from-teal-500 to-90% to-transparent rounded-full filter blur-xl opacity-50 animate-blob animation-delay-4000 z-0 "></div>
          </div>
        </div>
      </div>
    </main>
  );
}
