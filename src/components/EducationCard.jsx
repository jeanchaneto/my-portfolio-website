import { fadeInVariants } from "@/utils/motionVariants";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const EducationCard = ({ title, school, schoolLink, timePeriod, content }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.li
      className=" group rounded-xl border border-white/10  px-6 py-12 shadow-2xl relative max-w-4xl w-full mx-auto "
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
              rgba(125, 211, 252, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div>
        <h3 className="font-bold text-lg ">{title}</h3>
        <p>
          <a
            href={schoolLink}
            target="_blank"
            className=" text-sky-500 hover:opacity-50 transition-opacity duration-300 font-semibold "
          >
            {school}
          </a>{" "}
          <span className=" text-gray-500">{timePeriod}</span>{" "}
        </p>
        <p className="mt-4 text-gray-500"></p>
        {content.map((paragraph, i) => (
          <p className="mt-1 text-gray-400" key={i}>
            {" "}
            - {paragraph}
          </p>
        ))}
      </div>
    </motion.li>
  );
};

export default EducationCard;
