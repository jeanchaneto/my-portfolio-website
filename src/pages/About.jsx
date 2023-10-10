import { Divider } from "@/components/Divider";
import SkillCard from "@/components/SkillCard";

const skills = [
  { logo: "/images/html5.svg", title: "HTML 5" },
  { logo: "/images/css.svg", title: "CSS" },
  { logo: "/images/javascript.svg", title: "Javascript" },
  { logo: "/images/react.svg", title: "React" },
  { logo: "/images/nextjs.svg", title: "Next.js" },
  { logo: "/images/git.svg", title: "" },
  { logo: "/images/redux.svg", title: "Redux" },
  { logo: "/images/react-router.svg", title: "React Router" },
  { logo: "/images/jest.svg", title: "Jest" },
  { logo: "/images/react-testing-library.svg", title: "React Testing Library" },
  { logo: "/images/typescript.svg", title: "Typescript" },
  { logo: "/images/tailwind.svg", title: "Tailwind CSS" },
  { logo: "/images/sass.svg", title: "Sass" },
  { logo: "/images/framer-motion.svg", title: "Framer Motion" },
  { logo: "/images/firebase.svg", title: "Firebase" },
  { logo: "/images/seo.svg", title: "Best practices" },
  { logo: "/images/ux-ui.svg", title: "Best practices" },
  { logo: "/images/figma.svg", title: "Figma" },
  { logo: "/images/wordpress.svg", title: "Wordpress" },
  { logo: "/images/woocommerce.svg", title: "Woo Commerce" },
  { logo: "/images/elementor.svg", title: "Elementor" },
  { logo: "/images/google-ads.svg", title: "Google Ads" },
  { logo: "/images/google-analytics.svg", title: "Google Analytics" },
  { logo: "/images/microsoft.svg", title: "Microsoft Ads" },
];

const About = () => {
  return (
    <main>
      {/* Hero Sections */}
      <div className="pt-28 ">
        <div className=" py-24 sm:py-32 ">
          <div className="mx-auto max-w-[1920px] px-6 lg:px-24">
            <section className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl font-sora">
                About me
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                My journey into web development was not a linear path, but a
                fascinating exploration of connecting dots between different
                spheres of my life: from rigorous scientific analysis to
                producing professional electronic music. Transitioning from a
                career as a water hygiene consultant to a React.js developer
                sparked by a genuine desire to build meaningful digital spaces,
                notably exemplified in running my own music e-commerce platform
                that blends my coding skills and my entrepreneurial spirit with
                my musical artistry. My journey reflects a steadfast commitment
                to learning and adaptability across varied fields.
              </p>
            </section>
          </div>
        </div>
        <Divider />
      </div>

      {/* Skills Section */}
      <section className=" py-24 sm:py-32">
        <div className="mx-auto max-w-[1920px] px-6 lg:px-24">
          <div className="mx-auto max-w-xl sm:text-center">
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl mx-auto font-sora">
              Skills
            </h2>
            <p className="mt-6 text-lg leading-8" >Through diverse technologies,<br/> I convert ideas into polished digital experiences.</p>
          </div>
          <div className=" py-24 sm:py-32 mx-auto max-w-4x truncate grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {skills.map((skill, i) => (
              <SkillCard logo={skill.logo} title={skill.title} key={i}/>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
