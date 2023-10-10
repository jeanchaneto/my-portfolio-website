import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const ExperienceCard = ({
  title,
  company,
  companyLink,
  timePeriod,
  content,
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <li
      className=" group rounded-xl border border-white/10  px-6 py-12 shadow-2xl relative max-w-4xl mx-auto "
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(165, 180, 252, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div>
        <h3 className="font-bold text-lg ">
          {title} {" "}
          <a href={companyLink} target="_blank" className=" text-cyan-600 hover:opacity-50 transition-opacity duration-300 ">
            {company}
          </a>
        </h3>
        <p className=" text-gray-500">{timePeriod}</p>
        <div className="mt-4" >
        {content.map((paragraph, i) => (
          <p className="mt-1 text-gray-400" key={i}>
            {" "}
            - {paragraph}
          </p>
        ))}</div>
      </div>
    </li>
  );
};

export default ExperienceCard;
