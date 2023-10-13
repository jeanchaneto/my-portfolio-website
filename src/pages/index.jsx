import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen ">
      <div className="flex items-center h-full md:h-screen py-24 lg:py-32 relative">

        {/* <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/20 to-90% to-transparent rounded-full filter blur-xl  opacity-50 animate-blob z-0  "></div>
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-gradient-radial from-blue-500/20  to-90% to-transparent rounded-full filter blur-xl opacity-50 animate-blob animation-delay-2000 -z-0 isolate "></div>
        <div className="absolute top-1/4 left-1/4 0 w-[600px] h-[600px] bg-gradient-radial from-sky-500/20  to-90% to-transparent rounded-full filter blur-xl opacity-50 animate-blob animation-delay-4000 z-0 "></div> */}

        <div className=" max-w-7xl mx-auto flex flex-col-reverse md:flex-row  items-center relative px-6 lg:px-8 ">
          {/* Left hero */}
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto pr-10">
            <h2 className="text-base mt-6 leading-7 text-gray-300 font-thin tracking-widest">
              HI, I'M{" "}
              <span className=" bg-gradient-to-r from-sky-400 to-cyan-300 inline-block text-transparent bg-clip-text font-normal">
                JEAN CHANE-TO
              </span>
            </h2>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl font-sora sm:whitespace-nowrap ">
              I Craft Seamless
              <br /> Web Applications
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 tracking-wide">
              Transforming visionary ideas into vibrant, interactive digital
              experiences with React.js expertise. Let's build something great
              together!
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-xl bg-sky-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                Hire me
              </Link>
              <Link
                href="/services"
                className="text-sm font-semibold leading-6 text-white z-20"
              >
                Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className=" opacity-0">
            <div className=" overflow-hidden rounded-xl [mask-image:_linear-gradient(to_top,transparent_0,_black_128px,_black_calc(100%-30px),transparent_100%)] z-20">
              <img
                src="/images/hero-photo.png"
                alt="Jean Chane-to"
                className=" max-h-96  md:max-h-none min-w-[350px] object-cover"
              />
            </div>
          </div>{" "}
        </div>
      </div>
    </main>
  );
}
