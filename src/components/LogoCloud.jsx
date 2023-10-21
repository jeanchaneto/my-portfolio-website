import FadeIn from "./FadeIn";

const logos = [
  { image: "/images/logo-cloud/html5.svg" , alt:"Next.js" },
  { image: "/images/logo-cloud/css.svg" , alt:"css" },
  { image: "/images/logo-cloud/javascript.svg" , alt:"Next.js" },
  { image: "/images/logo-cloud/typescript.svg" , alt:"Next.js" },
  { image: "/images/logo-cloud/tailwind.svg" , alt:"Next.js" },
  { image: "/images/logo-cloud/sass.svg" , alt:"Next.js" },
  { image: "/images/logo-cloud/react.svg" , alt:"Next.js" },
  { image: "/images/logo-cloud/nextjs.svg" , alt:"Next.js" },
  { image: "/images/logo-cloud/firebase.svg" , alt:"Firebase" },
  { image: "/images/logo-cloud/react-router.svg" , alt:"css" },
  { image: "/images/logo-cloud/redux.svg" , alt:"Next.js" },
  { image: "/images/logo-cloud/jest.svg" , alt:"Next.js" },
  { image: "/images/logo-cloud/git.svg" , alt:"Next.js" },
  { image: "/images/logo-cloud/vercel.svg" , alt:"Next.js" },
  { image: "/images/logo-cloud/netlify.svg" , alt:"Next.js" },
  { image: "/images/logo-cloud/elementor.svg" , alt:"Next.js" },
  { image: "/images/logo-cloud/figma.svg" , alt:"Next.js" },
  { image: "/images/logo-cloud/framer-motion.svg" , alt:"Next.js" },
  { image: "/images/logo-cloud/openai.svg" , alt:"Next.js" },
  { image: "/images/logo-cloud/stripe.svg" , alt:"Next.js" },
  { image: "/images/logo-cloud/google-analytics.svg" , alt:"Next.js" },
  { image: "/images/logo-cloud/hostinger.svg" , alt:"Next.js" },
  { image: "/images/logo-cloud/wordpress.svg" , alt:"Next.js" },
  { image: "/images/logo-cloud/woocommerce.svg" , alt:"Next.js" },
  { image: "/images/logo-cloud/php.svg" , alt:"Firebase" },
  
];

const LogoCloud = () => {
  return (
    <FadeIn duration="1" >
      <section className="relative mx-auto max-w-[1214px] py-12 sm:px-6 sm:py-24 lg:px-8 overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[125px] sm:before:w-[250px] before:bg-[linear-gradient(to_right,#030712,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[125px] sm:after:w-[250px] after:-scale-x-100 after:bg-[linear-gradient(to_right,#030712,rgba(255,255,255,0)_100%)] after:content-[''] pointer-events-none">
        <div className=" animate-infinite-slider flex w-fit ">
          {logos.map((logo, index) => (
            <div
              className=" flex w-24 h-8 items-center justify-center mr-24 "
              key={index}
            >
              <img src={logo.image} alt={logo.alt} className=" h-full  " />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div
              className=" flex w-24 h-8 items-center justify-center mr-24"
              key={index}
            >
              <img src={logo.image} alt={logo.alt} className=" h-full " />
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
};

export default LogoCloud;
