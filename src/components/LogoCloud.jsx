import FadeIn from "./FadeIn";

const logos = [
  { src: "/images/logo-cloud/next.png", alt: "Next.js logo" },
  { src: "/images/logo-cloud/next.png", alt: "Arturia logo" },
  { src: "/images/logo-cloud/next.png", alt: "Elektron logo" },
  { src: "/images/logo-cloud/next.png", alt: "Eventide logo" },
  { src: "/images/logo-cloud/next.png", alt: "Next.js logo" },
  { src: "/images/logo-cloud/next.png", alt: "Arturia logo" },
  { src: "/images/logo-cloud/next.png", alt: "Elektron logo" },

];

const LogoCloud = () => {
  return (
    <FadeIn>
    <section className="relative pt-16 bg-gray-950  py-24 sm:py-32  overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)] "></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className=" mt-16 w-full inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none  animate-infinite-scroll  ">
            {logos.map((logo, i) => (
              <li key={i} className=" " >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className=" w-40 max-h-16 object-scale-down grayscale opacity-60 hover:opacity-100 transition-opacity duration-300 "
                />
              </li>
            ))}
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none  animate-infinite-scroll aria-hidden='true'  ">
            {logos.map((logo, i) => (
              <li key={i} className=" " >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className=" w-40 max-h-12 object-scale-down grayscale opacity-60 hover:opacity-100 transition-opacity duration-300 "
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    </FadeIn>
  );
};

export default LogoCloud;
