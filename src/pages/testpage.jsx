import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";

export default function TestPage() {
  return (
    <main className="bg-gray-950 min-h-[4000px] ">
      <div className=" max-w-7xl mx-auto flex flex-col-reverse md:flex-row  items-center py-24 relative px-6">
        {/* Left hero */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto pr-10">
          <h2 className="text-base mt-6 leading-7 text-gray-400">
            Hi, I'm <span className="text-gray-200 font-semibold" >Jean Chane-to</span>
          </h2>

          <AnimatedText el={"h1"} duration="0.5" delay="0" stagger="0.1"
          text={"Toots"} className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-6xl font-sora ">
          I Craft Seamless Web Applications
          </AnimatedText>
          <AnimatedText duration="0.5" delay="3" stagger="0.01" className="mt-6 text-lg leading-8 text-gray-300">
          Transforming visionary ideas into vibrant, interactive digital experiences with React.js expertise. Let's build spomething great together!"
          </AnimatedText>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-cyan-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
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
        <div className="[mask-image:radial-gradient(95%_95%_at_50%_55%,white,transparent)]">
          <div className=" overflow-hidden rounded-xl [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-30px),transparent_100%)]">
            <img src="/images/hero-photo.png" alt="Jean Chane-to" className=" max-h-64 md:max-h-none" />
          </div>
        </div>
      </div>
    </main>
  );
}
