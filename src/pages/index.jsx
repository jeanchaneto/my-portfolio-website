import Hero3d from "@/components/Hero3d";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen ">
      <div className="flex items-center  min-[964px]:h-screen py-24 lg:py-32 relative">
        <div className=" max-w-7xl mx-auto flex flex-col-reverse min-[964px]:flex-row  items-center relative px-6 lg:px-8 ">
          {/* Ligth */}
          <div className="absolute top-12  -translate-x-1/4 min-[964px]:translate-x-0 min-[964px]:right-[24px] w-[300px] h-[400px]  min-[964px]:w-[500px] min-[964px]:h-[600px] bg-gradient-radial from-sky-500 to-90% to-transparent rounded-full filter blur-xl opacity-50 animate-blob  z-0 "></div>
          {/* Left hero */}
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto pr-10 pt-12 pb-24 min-[964px]:pt-0 min-[964px]:pb-0">
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
                className="rounded-xl bg-sky-900 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
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
          <div className=" shrink-0 relative ">
            {" "}
            <div className=" pointer-events-none select-none overflow-hidden rounded-xl [mask-image:_linear-gradient(to_top,transparent_0,_black_28px,_black_calc(100%-30px),transparent_100%)] z-20">
              <img
                src="/images/hero-photo.png"
                alt="Jean Chane-to"
                className=" max-h-[480px]  min-[964px]:max-h-[700px] min-w-[350px] object-cover "
              />
            </div>
            <div className="absolute bottom-1/3 translate-x-[150px] right-1/2 h-[200px] translate-y-[130px] min-[964px]:h-[300px] min-[964px]:w-[350px] min-[964px]:translate-x-[180px] min-[964px]:translate-y-[180px] ">
              <Hero3d />
            </div>
          </div>{" "}
        </div>
      </div>
    </main>
  );
}
