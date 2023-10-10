import { Divider } from "@/components/Divider";
import ExperienceCard from "@/components/ExperienceCard";
import SkillCard from "@/components/SkillCard";
import SoftSkillCard from "@/components/SoftSkillCard";

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
  { logo: "/images/open-ai.svg", title: "AI Prompt Engineering" },
  { logo: "/images/figma.svg", title: "Figma" },
  { logo: "/images/wordpress.svg", title: "Wordpress" },
  { logo: "/images/woocommerce.svg", title: "Woo Commerce" },
  { logo: "/images/elementor.svg", title: "Elementor" },
  { logo: "/images/google-analytics.svg", title: "Google Analytics" },
  { logo: "/images/google-ads.svg", title: "Google Ads" },
];

const softSkills = [
  { icon: "/images/time.png", title: "Fast learner" },
  { icon: "/images/conceptual.png", title: "Problem Solver" },
  { icon: "/images/adaptation.png", title: "Adaptable" },
  { icon: "/images/analysis.png", title: "Attentive to detail" },
  { icon: "/images/time-management.png", title: "Time Management" },
  { icon: "/images/challenge.png", title: "Self-motivated" },
];

const experiences = [
  {
    title: "CEO / Web Developper / Music Producer",
    company: "LAP Studios",
    companyLink: "https://lap-studios.com",
    timePeriod: "January 2021 - Present",
    content: [
      "Single-handedly drove the technological and strategic development of LAP Studios, navigating through web development, music production, and overall business operations.",
      "Conceptualised, developed, and refactored an e-commerce platform from WordPress to Next.js, showcasing adaptability and proficiency across diverse tech stacks.",
      "Orchestrated and implemented SEO and marketing strategies that markedly amplified web presence and elevated customer engagement.",
      "Independently managed several music production projects, liaising with high-profile artists, and securing successful releases with renowned music labels.",
    ],
  },
  {
    title: "Senior Water Hygiene consultant, William Martin Compliance, London, UK",
    company: "William Martin",
    companyLink: "https://wmcompliance.co.uk/",
    timePeriod: "July 2015 - May 2022",
    content: [
      "Conducted and supervised comprehensive Legionella risk assessments and audits across a variety of water distribution systems and cooling towers.",
      "Water sampling for analytical purposes",
      "Engaged with clients to identify issues and collaborated on implementing remedial actions, ensuring health and safety compliance and customer satisfaction.",
      "Produced detailed reports using Word and developed schematic diagrams utilising AutoCAD",
      "Maintained and updated AutoCAD templates, ensuring accurate and current resources for all project requirements."
    ],
  },
  {
    title: "Legionella risk assessor, HSL Compliance, London, UK",
    company: "HSL Compliance",
    companyLink: "https://wmcompliance.co.uk/",
    timePeriod: "April 2009 - June 2015",
    content: [
      "Performed Legionella risk assessments and audits on diverse water distribution networks, ensuring safety and compliance with relevant regulations.",
      "Handled water sampling for analysis",
      "Communicated effectively with clients, providing advice to identify issues and coordinating to implement remedial actions that assured regulatory compliance and safe operations.",
    ],
  },
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
            <p className="mt-6 text-lg leading-8">
              Through diverse technologies,
              <br /> I convert ideas into polished digital experiences.
            </p>
          </div>
          <ul className=" pt-24 sm:pt-32 mx-auto max-w-4x truncate grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {skills.map((skill, i) => (
              <SkillCard logo={skill.logo} title={skill.title} key={i} />
            ))}
          </ul>
        </div>
      </section>
      <Divider />
      {/* Soft Skills Section */}
      <section className=" py-24 sm:pt-32">
        <div className="mx-auto max-w-[1920px] px-6 lg:px-24">
          <div className="mx-auto max-w-xl sm:text-center">
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl mx-auto font-sora">
              Soft Skills
            </h2>
            <p className="mt-6 text-lg leading-8 ">
              Blending technical expertise and soft skills <br /> for seamless
              digital solutions.
            </p>
          </div>
          <ul className=" py-24 sm:py-32 mx-auto max-w-4x truncate grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {softSkills.map((skill, i) => (
              <SoftSkillCard icon={skill.icon} title={skill.title} key={i} />
            ))}
          </ul>
        </div>
      </section>
      <Divider />
      {/* Experience Section */}
      <section className=" py-24 sm:pt-32">
        <div className="mx-auto max-w-[1920px] px-6 lg:px-24">
          <div className="mx-auto max-w-xl sm:text-center">
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl mx-auto font-sora">
              Experience
            </h2>
            <p className="mt-6 text-lg leading-8 ">
              Discover my path from science to tech,
              <br /> enriched by creative exploration.
            </p>
          </div>
          <ul className=" w-full flex flex-col items-start justify-between mt-24 gap-8 lg:mt-32">
            {experiences.map((experience, i) => (
              <ExperienceCard
                key={i}
                title={experience.title}
                company={experience.company}
                companyLink={experience.companyLink}
                timePeriod={experience.timePeriod}
                content={experience.content}
              />
            ))}
          </ul>
        </div>
      </section>
      <Divider />
    </main>
  );
};

export default About;
