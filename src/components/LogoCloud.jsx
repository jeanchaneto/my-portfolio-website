import FadeIn from "./FadeIn";

const logos = [
  { image: "/images/logo-cloud/html5.svg", alt: "HTML5" },
  { image: "/images/logo-cloud/css.svg", alt: "CSS" },
  { image: "/images/logo-cloud/javascript.svg", alt: "JavaScript" },
  { image: "/images/logo-cloud/typescript.svg", alt: "TypeScript" },
  { image: "/images/logo-cloud/tailwind.svg", alt: "Tailwind" },
  { image: "/images/logo-cloud/sass.svg", alt: "Sass" },
  { image: "/images/logo-cloud/react.svg", alt: "React" },
  { image: "/images/logo-cloud/nextjs.svg", alt: "Next.js" },
  { image: "/images/logo-cloud/vite.svg", alt: "Vite" },
  { image: "/images/logo-cloud/firebase.svg", alt: "Firebase" },
  { image: "/images/logo-cloud/react-router.svg", alt: "React Router" },
  { image: "/images/logo-cloud/redux.svg", alt: "Redux" },
  { image: "/images/logo-cloud/jest.svg", alt: "Jest" },
  { image: "/images/logo-cloud/git.svg", alt: "Git" },
  { image: "/images/logo-cloud/vercel.svg", alt: "Vercel" },
  { image: "/images/logo-cloud/netlify.svg", alt: "Netlify" },
  { image: "/images/logo-cloud/elementor.svg", alt: "Elementor" },
  { image: "/images/logo-cloud/figma.svg", alt: "Figma" },
  { image: "/images/logo-cloud/framer-motion.svg", alt: "Framer Motion" },
  { image: "/images/logo-cloud/openai.svg", alt: "OpenAI" },
  { image: "/images/logo-cloud/stripe.svg", alt: "Stripe" },
  { image: "/images/logo-cloud/google-analytics.svg", alt: "Google Analytics" },
  { image: "/images/logo-cloud/hostinger.svg", alt: "Hostinger" },
  { image: "/images/logo-cloud/wordpress.svg", alt: "WordPress" },
  { image: "/images/logo-cloud/woocommerce.svg", alt: "WooCommerce" },
  { image: "/images/logo-cloud/php.svg", alt: "PHP" },
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
