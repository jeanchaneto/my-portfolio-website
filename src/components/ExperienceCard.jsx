import { fadeInVariants } from "@/utils/motionVariants";
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
    <motion.li
      className=" group rounded-xl border border-white/10  px-6 py-12 shadow-2xl relative  "
      onMouseMove={handleMouseMove}
      variants={fadeInVariants}
      initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -200px" }}
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
          {title}{" "}
          { companyLink && <a
            href={companyLink}
            target="_blank"
            className=" text-sky-500 hover:opacity-50 transition-opacity duration-300 "
          >
            {company}
          </a>}
        </h3>
        <p className=" text-gray-500">{timePeriod}</p>
        <div className="mt-4">
          {content.map((paragraph, i) => (
            <p className="mt-1 text-gray-400" key={i}>
              {" "}
              - {paragraph}
            </p>
          ))}
        </div>
      </div>
    </motion.li>
  );
};

export default ExperienceCard;
